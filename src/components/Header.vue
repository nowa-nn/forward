<script setup>
import { ref } from 'vue';
import { Menu, X, Mail, MapPin } from 'lucide-vue-next';
import { siteSettings } from '../data/mockDirectusData';

const props = defineProps({
  flatBottom: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(['openModal']);

const isMobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
};

const handleCtaClick = () => {
  closeMobileMenu();
  emit('openModal');
};

const navItems = [
  { label: 'Главная', href: '#' },
  { label: 'О нас', href: '#about' },
  { label: 'Расписание', href: '#schedule' },
  { label: 'Новости', href: '#news' },
  { label: 'Контакты', href: '#contacts' }
];

const socialLinks = [
  {
    label: 'ВКонтакте',
    href: 'https://vk.com/forward_152nn',
    viewBox: '3.9 6.9 16.2 9.5',
    desktopClass: 'w-[20.5px] h-[12px]',
    mobileClass: 'w-[23px] h-[13.5px]',
    path: 'M12.785 16.241s.288-.032.436-.194c.136-.148.132-.427.132-.427s-.02-1.304.576-1.496c.588-.19 1.341 1.26 2.14 1.818.605.422 1.064.33 1.064.33l2.137-.03s1.117-.07.587-.964c-.043-.073-.308-.661-1.588-1.87-1.34-1.264-1.16-1.059.453-3.246.983-1.332 1.376-2.145 1.253-2.493-.117-.332-.84-.244-.84-.244l-2.406.015s-.178-.025-.31.056c-.13.079-.212.262-.212.262s-.382 1.03-.89 1.907c-1.073 1.85-1.503 1.948-1.678 1.832-.409-.267-.307-1.075-.307-1.648 0-1.793.267-2.54-.521-2.733-.262-.065-.454-.107-1.123-.114-.858-.009-1.585.003-1.996.208-.274.136-.485.44-.356.457.159.022.519.099.71.363.246.341.237 1.107.237 1.107s.141 2.11-.33 2.371c-.324.18-.769-.187-1.724-1.865-.49-.859-.859-1.81-.859-1.81s-.071-.176-.198-.27c-.154-.115-.37-.151-.37-.151l-2.286.015s-.343.01-.469.162c-.112.135-.009.413-.009.413s1.791 4.258 3.817 6.403c1.858 1.967 3.968 1.838 3.968 1.838h.955z'
  },
  {
    label: 'Telegram',
    href: 'https://t.me/+79049091900',
    viewBox: '0 64 448 377',
    desktopClass: 'w-[16px] h-[13.5px]',
    mobileClass: 'w-[18.5px] h-[15.5px]',
    path: 'M446.7 98.6l-67.6 318.8c-5.1 22.5-18.4 28.1-37.3 17.5l-103-75.9-49.7 47.8c-5.5 5.5-10.1 10.1-20.7 10.1l7.4-105.3 191.6-173.1c8.3-7.4-1.8-11.5-12.9-4.1L117.8 284 16.2 252.2c-22.1-6.9-22.5-22.1 4.6-32.7L418.2 66.4c18.4-6.9 34.5 4.1 28.5 32.2z'
  },
  {
    label: 'Max',
    href: 'https://max.ru/u/f9LHodD0cOISN9v4fRKwj4FDQXl_gqehPIFZHuhYYPztzGKjJr60Ml1SYZ0',
    viewBox: '12 9 701 699',
    desktopClass: 'w-[14.5px] h-[14.5px]',
    mobileClass: 'w-[15.5px] h-[15.5px]',
    path: 'M350.4,9.6C141.8,20.5,4.1,184.1,12.8,390.4c3.8,90.3,40.1,168,48.7,253.7,2.2,22.2-4.2,49.6,21.4,59.3,31.5,11.9,79.8-8.1,106.2-26.4,9-6.1,17.6-13.2,24.2-22,27.3,18.1,53.2,35.6,85.7,43.4,143.1,34.3,299.9-44.2,369.6-170.3C799.6,291.2,622.5-4.6,350.4,9.6h0ZM269.4,504c-11.3,8.8-22.2,20.8-34.7,27.7-18.1,9.7-23.7-.4-30.5-16.4-21.4-50.9-24-137.6-11.5-190.9,16.8-72.5,72.9-136.3,150-143.1,78-6.9,150.4,32.7,183.1,104.2,72.4,159.1-112.9,316.2-256.4,218.6h0Z'
  }
];
</script>

<template>
  <!-- 1. Верхняя панель для десктопа (не зафиксирована при скролле) -->
  <div class="hidden md:block bg-slate-900 text-slate-300 text-xs py-2 border-b border-slate-800/60">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
      <!-- Контакты: Email и Город (дубль телефона убран, иконка почты в цвет иконки метки) -->
      <div class="flex items-center gap-6">
        <a href="mailto:forward-152@yandex.ru" class="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors">
          <Mail class="w-3.5 h-3.5 text-slate-500" />
          <span>forward-152@yandex.ru</span>
        </a>
        <div class="flex items-center gap-1.5 text-slate-400">
          <MapPin class="w-3.5 h-3.5 text-slate-500" />
          <span>Нижний Новгород</span>
        </div>
      </div>

      <!-- Соцсети: ВКонтакте, Telegram, Max (единый монохромный векторный стиль без подложек) -->
      <div class="flex items-center gap-4">
        <a
          v-for="item in socialLinks"
          :key="item.label"
          :href="item.href"
          target="_blank"
          rel="noopener noreferrer"
          class="text-slate-300 hover:text-white transition-colors flex items-center justify-center"
          :aria-label="item.label"
        >
          <svg :class="item.desktopClass" class="fill-current" :viewBox="item.viewBox">
            <path :d="item.path" />
          </svg>
        </a>
      </div>
    </div>
  </div>

  <!-- 2. Основной хедер (sticky; на мобайле со скруглённым низом либо прямой гранью для белого заголовка под ним) -->
  <header
    :class="[
      'bg-white sticky top-0 z-40',
      props.flatBottom
        ? 'border-b border-slate-100 shadow-sm'
        : isMobileMenuOpen
          ? 'rounded-none shadow-md lg:shadow-sm lg:border-b lg:border-slate-100'
          : 'rounded-b-2xl lg:rounded-none shadow-md lg:shadow-sm lg:border-b lg:border-slate-100'
    ]"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Logo image -->
        <a href="#" class="flex items-center py-2 shrink-0">
          <img
            src="/logo.jpg"
            alt="Автошкола Форвард-НН"
            class="h-8 sm:h-9 w-auto object-contain"
          />
        </a>

        <!-- Desktop Menu from acc-52.ru -->
        <nav class="hidden md:flex items-center gap-7">
          <a
            v-for="item in navItems"
            :key="item.label"
            :href="item.href"
            class="text-sm font-semibold text-slate-700 hover:text-red-600 transition-colors duration-150"
          >
            {{ item.label }}
          </a>
        </nav>

        <!-- Right Side: Phone & CTA 'Записаться' (Desktop) -->
        <div class="hidden sm:flex items-center gap-5">
          <a
            :href="'tel:' + siteSettings.phone_primary_raw"
            class="text-sm font-bold text-slate-900 hover:text-red-600 transition-colors duration-150"
          >
            8 (831) 230-90-00
          </a>
          <button
            type="button"
            @click="emit('openModal')"
            class="bg-red-600 hover:bg-red-700 text-white text-sm font-bold px-4 py-2 rounded-lg transition-colors duration-150 cursor-pointer"
          >
            Записаться
          </button>
        </div>

        <!-- Mobile Right: Social Icons + Phone + Burger without background (Mobile) -->
        <div class="flex items-center gap-1 md:hidden">
          <a
            v-for="item in socialLinks"
            :key="item.label"
            :href="item.href"
            target="_blank"
            rel="noopener noreferrer"
            class="p-1.5 text-slate-700 hover:text-red-600 transition-colors flex items-center justify-center"
            :aria-label="item.label"
          >
            <svg :class="item.mobileClass" class="fill-current" :viewBox="item.viewBox">
              <path :d="item.path" />
            </svg>
          </a>

          <!-- Phone Call (залитая цветом иконка телефонной трубки) -->
          <a
            href="tel:+78312309000"
            class="p-1.5 text-red-600 hover:text-red-700 transition-colors flex items-center justify-center"
            aria-label="Позвонить"
          >
            <svg class="w-[16px] h-[16px] fill-current" viewBox="0 0 512 512">
              <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/>
            </svg>
          </a>

          <!-- Mobile Menu Toggle Button (БЕЗ ПОДЛОЖКИ И БЕЗ РАМКИ) -->
          <button
            type="button"
            @click="toggleMobileMenu"
            class="p-1 text-slate-800 hover:text-red-600 focus:outline-none cursor-pointer flex items-center justify-center"
            aria-label="Открыть меню"
          >
            <Menu v-if="!isMobileMenuOpen" class="w-6 h-6" />
            <X v-else class="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>

    <!-- Затемнение подложки при открытом мобильном меню -->
    <div
      v-if="isMobileMenuOpen"
      @click="closeMobileMenu"
      class="md:hidden fixed inset-0 top-16 z-30 bg-slate-950/35"
      aria-hidden="true"
    ></div>

    <!-- Mobile Drawer (абсолютное позиционирование поверх изображения херо) -->
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div
        v-if="isMobileMenuOpen"
        class="md:hidden absolute top-full left-0 right-0 z-50 bg-white border-t border-slate-100 px-5 pt-3 pb-6 space-y-4 shadow-2xl rounded-b-2xl"
      >
        <nav class="divide-y divide-slate-100">
          <a
            v-for="item in navItems"
            :key="item.label"
            :href="item.href"
            @click="closeMobileMenu"
            class="block text-base font-semibold text-slate-800 hover:text-red-600 py-2.5 transition-colors"
          >
            {{ item.label }}
          </a>
        </nav>

        <div class="pt-2 border-t border-slate-100 flex flex-col gap-3">
          <div class="flex items-center justify-between">
            <a
              :href="'tel:' + siteSettings.phone_primary_raw"
              class="text-base font-bold text-slate-900"
            >
              8 (831) 230-90-00
            </a>
            <a
              href="mailto:forward-152@yandex.ru"
              class="text-xs text-slate-500 hover:text-red-600"
            >
              forward-152@yandex.ru
            </a>
          </div>
          <button
            type="button"
            @click="handleCtaClick"
            class="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-xl text-sm transition-colors cursor-pointer shadow-md text-center"
          >
            Записаться
          </button>
        </div>
      </div>
    </transition>
  </header>
</template>
