const fs = require('fs');
const html = fs.readFileSync('acc-52_dump.html', 'utf8');

// Let's search for tariffs, prices, numbers with руб or ₽
const priceMatches = [...html.matchAll(/([0-9\s]{3,7})\s*(?:руб|₽)/gi)].map(m => m[0].trim());
console.log('=== PRICES DETECTED ===', [...new Set(priceMatches)]);

// Let's find addresses / филиалы
const addressKeywords = ['Нижний Новгород', 'ул.', 'улица', 'пр-кт', 'проспект', 'шоссе', 'д.', 'корп', 'метро', 'филиал', 'автодром'];
const textBlocks = html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
                       .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '')
                       .replace(/<[^>]+>/g, '\n')
                       .split('\n')
                       .map(s => s.trim())
                       .filter(s => s.length > 0);

console.log('\n=== ADDRESSES & BRANCHES IN TEXT ===');
const branchLines = textBlocks.filter(line => addressKeywords.some(kw => line.toLowerCase().includes(kw.toLowerCase())));
console.log([...new Set(branchLines)].slice(0, 30));

console.log('\n=== TARIFFS / CATEGORIES IN TEXT ===');
const tariffKeywords = ['категори', 'тариф', 'теория', 'вождени', 'онлайн', 'мкпп', 'акпп', 'рассрочк', 'пакет'];
const tariffLines = textBlocks.filter(line => tariffKeywords.some(kw => line.toLowerCase().includes(kw.toLowerCase())));
console.log([...new Set(tariffLines)].slice(0, 40));

// Check other pages like about-us, schedule, contacts
console.log('\n=== CHECKING SUBPAGES ===');
