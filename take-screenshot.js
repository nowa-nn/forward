import puppeteer from 'puppeteer';

(async () => {
  try {
    const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
    const browser = await puppeteer.launch({
      executablePath: edgePath,
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    const page = await browser.newPage();

    // 1. V1 Desktop (no switcher)
    await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });
    await page.goto('http://localhost:3000/', { waitUntil: 'networkidle2' });
    await page.waitForSelector('section h1');
    await new Promise(r => setTimeout(r, 500));
    const v1SwitcherCount = await page.evaluate(() => document.querySelectorAll('aside').length);
    console.log('V1 SWITCHER COUNT:', v1SwitcherCount);
    await page.screenshot({ path: 'screenshot-v1-desktop.png', fullPage: true });
    const v1DesktopH1 = await page.$('section .hidden.lg\\:block h1');
    if (v1DesktopH1) {
      const box = await v1DesktopH1.boundingBox();
      await page.screenshot({
        path: 'screenshot-v1-desktop-h1.png',
        clip: { x: Math.max(0, box.x - 16), y: Math.max(0, box.y - 16), width: box.width + 120, height: box.height + 32 }
      });
    }

    // 2. V1 Mobile
    await page.setViewport({ width: 390, height: 844, isMobile: true, hasTouch: true, deviceScaleFactor: 2 });
    await page.goto('http://localhost:3000/', { waitUntil: 'networkidle2' });
    await new Promise(r => setTimeout(r, 500));
    const v1MobileCheck = await page.evaluate(() => {
      const h1 = document.querySelector('section .lg\\:hidden h1');
      const accent = h1 ? h1.querySelector('.inline-block .relative.z-10') : null;
      const brush = h1 ? h1.querySelector('img') : null;
      return {
        scrollW: document.documentElement.scrollWidth,
        clientW: document.documentElement.clientWidth,
        h1FontSize: h1 ? getComputedStyle(h1).fontSize : null,
        accentRight: accent ? +accent.getBoundingClientRect().right.toFixed(1) : null,
        brushRight: brush ? +brush.getBoundingClientRect().right.toFixed(1) : null,
        distanceTextToRightEdge: accent ? +(390 - accent.getBoundingClientRect().right).toFixed(1) : null
      };
    });
    console.log('V1 MOBILE CHECK:', JSON.stringify(v1MobileCheck));
    await page.screenshot({ path: 'screenshot-v1-mobile.png', fullPage: true });

    // Кроп мобильного заголовка h1
    const v1MobileH1 = await page.$('section .lg\\:hidden h1');
    if (v1MobileH1) {
      const box = await v1MobileH1.boundingBox();
      await page.screenshot({
        path: 'screenshot-v1-mobile-h1.png',
        clip: { x: 0, y: Math.max(0, box.y - 12), width: 390, height: box.height + 24 }
      });
    }

    // Кроп карточки с бейджиком
    const badgeCard = await page.$('div[id="about"] .grid > div:nth-child(3)');
    if (badgeCard) {
      const bBox = await badgeCard.boundingBox();
      await page.screenshot({
        path: 'screenshot-v1-card-badge.png',
        clip: { x: Math.max(0, bBox.x - 8), y: Math.max(0, bBox.y - 10), width: bBox.width + 16, height: 180 }
      });
    }

    // Кроп перехода от формы херо к красному блоку карточек
    const aboutBlock = await page.$('div[id="about"]');
    if (aboutBlock) {
      const aBox = await aboutBlock.boundingBox();
      await page.screenshot({
        path: 'screenshot-v1-mobile-cards-transition.png',
        clip: { x: 0, y: Math.max(0, aBox.y - 60), width: 390, height: 320 }
      });
      await page.screenshot({
        path: 'screenshot-v1-mobile-cards-heading.png',
        clip: { x: 0, y: aBox.y, width: 390, height: 260 }
      });
    }

    await page.screenshot({
      path: 'screenshot-v1-mobile-header.png',
      clip: { x: 0, y: 0, width: 390, height: 68 }
    });

    // Проверка раскрытия мобильного бургер-меню поверх изображения херо
    await page.click('button[aria-label="Открыть меню"]');
    await new Promise(r => setTimeout(r, 300));
    await page.screenshot({
      path: 'screenshot-v1-mobile-menu.png',
      clip: { x: 0, y: 0, width: 390, height: 540 }
    });
    // Закрываем меню обратно
    await page.click('button[aria-label="Открыть меню"]');
    await new Promise(r => setTimeout(r, 200));

    // 3. V2 Desktop (independent variant at /v2/)
    await page.setViewport({ width: 1440, height: 900 });
    await page.goto('http://localhost:3000/v2/', { waitUntil: 'networkidle2' });
    await page.waitForSelector('section h1');
    await new Promise(r => setTimeout(r, 500));
    const v2Metrics = await page.evaluate(() => {
      const hero = document.querySelector('section .hidden.lg\\:block');
      const h1 = hero ? hero.querySelector('h1') : null;
      const p = hero ? hero.querySelector('.z-20 p') : null;
      const promo = hero ? hero.querySelector('.z-20 .space-y-2') : null;
      const formCard = hero ? hero.querySelector('.z-30') : null;
      const switcherCount = document.querySelectorAll('aside').length;
      return {
        switcherCount,
        gapAbovePromo: (promo && p) ? +(promo.getBoundingClientRect().top - p.getBoundingClientRect().bottom).toFixed(1) : null,
        gapBelowPromo: (formCard && promo) ? +(formCard.getBoundingClientRect().top - promo.getBoundingClientRect().bottom).toFixed(1) : null,
        h1Lines: h1 ? Math.round(h1.getBoundingClientRect().height / parseFloat(getComputedStyle(h1).lineHeight)) : null
      };
    });
    console.log('V2 DESKTOP METRICS:', JSON.stringify(v2Metrics));
    await page.screenshot({ path: 'screenshot-v2-desktop.png' });

    // 4. V2 Mobile (independent variant rearranged layout)
    await page.setViewport({ width: 390, height: 844, isMobile: true, hasTouch: true });
    await page.goto('http://localhost:3000/v2/', { waitUntil: 'networkidle2' });
    await new Promise(r => setTimeout(r, 500));
    const v2MobileCheck = await page.evaluate(() => ({
      scrollW: document.documentElement.scrollWidth,
      clientW: document.documentElement.clientWidth
    }));
    console.log('V2 MOBILE OVERFLOW CHECK:', JSON.stringify(v2MobileCheck));
    await page.screenshot({ path: 'screenshot-v2-mobile.png', fullPage: true });

    // 5. V3 Desktop (Full-width hero at /v3/)
    await page.setViewport({ width: 1440, height: 900 });
    await page.goto('http://localhost:3000/v3/', { waitUntil: 'networkidle2' });
    await page.waitForSelector('section h1');
    await new Promise(r => setTimeout(r, 500));
    const v3Hero = await page.$('section.hidden.lg\\:block');
    const v3HeroBox = v3Hero ? await v3Hero.boundingBox() : null;
    console.log('V3 HERO BOX:', JSON.stringify(v3HeroBox));
    await page.screenshot({ path: 'screenshot-v3-desktop.png', fullPage: true });
    if (v3HeroBox) {
      await page.screenshot({
        path: 'screenshot-v3-desktop-hero.png',
        clip: { x: 0, y: v3HeroBox.y, width: 1440, height: v3HeroBox.height }
      });
      // Crop of the overlap between hero and #about
      await page.screenshot({
        path: 'screenshot-v3-desktop-overlap.png',
        clip: { x: 0, y: Math.max(0, v3HeroBox.y + v3HeroBox.height - 120), width: 1440, height: 260 }
      });
    }

    // Check vertical balance between subtitle, advantages, and form on desktop
    const v3VerticalGaps = await page.evaluate(() => {
      const hero = document.querySelector('section.hidden.lg\\:block');
      if (!hero) return null;
      const p = hero.querySelector('p');
      const adv = hero.querySelector('.space-y-2\\.5');
      const form = hero.querySelector('.bg-white.rounded-2xl');
      if (!p || !adv || !form) return null;
      const pRect = p.getBoundingClientRect();
      const advRect = adv.getBoundingClientRect();
      const formRect = form.getBoundingClientRect();
      return {
        gapSubtitleToAdv: +(advRect.top - pRect.bottom).toFixed(1),
        gapAdvToForm: +(formRect.top - advRect.bottom).toFixed(1)
      };
    });
    console.log('V3 VERTICAL GAPS:', JSON.stringify(v3VerticalGaps));

    // 6. V3 Mobile
    await page.setViewport({ width: 390, height: 844, isMobile: true, hasTouch: true });
    await page.goto('http://localhost:3000/v3/', { waitUntil: 'networkidle2' });
    await new Promise(r => setTimeout(r, 500));
    const v3MobileCheck = await page.evaluate(() => ({
      scrollW: document.documentElement.scrollWidth,
      clientW: document.documentElement.clientWidth
    }));
    console.log('V3 MOBILE OVERFLOW CHECK:', JSON.stringify(v3MobileCheck));
    await page.screenshot({ path: 'screenshot-v3-mobile.png', fullPage: true });

    // Crop mobile car photo
    await page.screenshot({
      path: 'screenshot-v3-mobile-car.png',
      clip: { x: 0, y: 68, width: 390, height: 300 }
    });

    // Crop mobile cards block to verify exclusive card order
    const v3MobileCards = await page.$('div[id="about"]');
    if (v3MobileCards) {
      const mcBox = await v3MobileCards.boundingBox();
      await page.screenshot({
        path: 'screenshot-v3-mobile-cards.png',
        clip: { x: 0, y: mcBox.y, width: 390, height: 500 }
      });
    }

    // 7. V3 Windows DPI Scale Tests (125% vs 150%)
    // Test 125% Windows scaling (viewport 1536x864, DPR 1.25)
    await page.setViewport({ width: 1536, height: 864, deviceScaleFactor: 1.25 });
    await page.goto('http://localhost:3000/v3/', { waitUntil: 'networkidle2' });
    await new Promise(r => setTimeout(r, 400));
    await page.screenshot({ path: 'screenshot-v3-desktop-125scale.png' });

    // Test 150% Windows scaling (viewport 1280x720, DPR 1.5)
    await page.setViewport({ width: 1280, height: 720, deviceScaleFactor: 1.5 });
    await page.goto('http://localhost:3000/v3/', { waitUntil: 'networkidle2' });
    await new Promise(r => setTimeout(r, 400));
    const v3Scale150Metrics = await page.evaluate(() => ({
      dpr: window.devicePixelRatio,
      bodyZoom: document.body.style.zoom,
      scrollW: document.documentElement.scrollWidth,
      clientW: document.documentElement.clientWidth,
      bodyScrollW: document.body.scrollWidth
    }));
    console.log('V3 150% SCALE METRICS:', JSON.stringify(v3Scale150Metrics));
    await page.screenshot({ path: 'screenshot-v3-desktop-150scale.png' });

    await browser.close();
    console.log('SUCCESS: All v1, v2, and v3 screenshots captured.');
  } catch (err) {
    console.error('ERROR:', err);
    process.exit(1);
  }
})();
