<script setup>
import {
  heroTitlePrefix,
  heroTitleAccent,
  heroTitleSuffix,
  heroSubtitle,
  heroPromo,
  heroBenefits,
  cardsSectionTitle,
  cardsSectionSubtitle,
  usps
} from '../data/heroContent';
import { useLeadForm } from '../composables/useLeadForm';
import { Wallet, Handshake, Percent } from 'lucide-vue-next';

const emit = defineEmits(['openModal']);

const uspIcons = {
  wallet: Wallet,
  handshake: Handshake,
  percent: Percent
};

const {
  form,
  formErrors,
  isSubmitted,
  handlePhoneInput,
  handleNameInput,
  handleConsentChange,
  submitForm
} = useLeadForm();
</script>

<template>
  <div>
    <!-- ==============================================================
         1. ДЕСКТОПНЫЙ ПОЛНОЭКРАННЫЙ ХЕРО-БЛОК (FULL-WIDTH, НЕ В КАРТОЧКЕ)
         ============================================================== -->
    <section class="hidden lg:block relative z-10 w-full h-[640px] xl:h-[680px] bg-slate-950 overflow-hidden">
      <!-- Фоновое изображение 100% во всю ширину экрана -->
      <img
        src="/Gemini_Generated_Image_ukv09ukv09ukv09u.jfif"
        alt="Автомобиль автошколы на городских улицах Нижнего Новгорода"
        class="absolute inset-0 w-full h-full object-cover object-[center_52%] pointer-events-none select-none"
      />

      <!-- Затемнение и градиенты для максимальной контрастности текста слева -->
      <div class="absolute inset-0 bg-slate-950/25 pointer-events-none"></div>
      <div class="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-transparent w-[65%] xl:w-[58%] pointer-events-none"></div>
      <div class="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none"></div>

      <!-- Внутренний контейнер по сетке сайта max-w-7xl, строго выровнен с хедером -->
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative h-full flex flex-col justify-between pt-16 lg:pt-18 xl:pt-20 pb-18 lg:pb-20 xl:pb-22 z-20">
        
        <!-- Девушка с правами РФ: зафиксирована справа внутри сетки контейнера рядом с авто -->
        <img
          src="/modal-welcome-option1-Photoroom.png"
          alt="Выпускница с водительским удостоверением РФ"
          class="absolute bottom-0 right-4 lg:right-8 xl:right-12 h-[88%] xl:h-[92%] object-contain object-bottom pointer-events-none select-none z-10 drop-shadow-[0_20px_35px_rgba(0,0,0,0.5)]"
        />

        <!-- 1. Текстовый блок (заголовок и подзаголовок) -->
        <div class="relative z-20 max-w-xl lg:max-w-[760px] text-left">
          <h1 class="text-[38px] lg:text-[40px] xl:text-[44px] font-extrabold text-white tracking-tight !leading-[1.22] drop-shadow-sm">
            <span class="relative z-10">{{ heroTitlePrefix }}</span>
            <span class="relative inline-block ml-1.5 text-white whitespace-nowrap">
              <img
                src="/red-brush-v2.png"
                alt=""
                aria-hidden="true"
                class="absolute -left-[12px] top-[3px] h-full w-[115%] max-w-none object-fill pointer-events-none select-none z-0"
              />
              <span class="relative z-10">{{ heroTitleAccent }}</span>
            </span>
            <span class="block whitespace-nowrap">{{ heroTitleSuffix }}</span>
          </h1>

          <p class="mt-3.5 text-base lg:text-lg text-slate-200 leading-relaxed font-normal max-w-lg drop-shadow-sm">
            {{ heroSubtitle }}
          </p>
        </div>

        <!-- 2. Блок акции и преимуществ: сбалансирован по вертикали точно по центру между текстом выше и формой ниже -->
        <div class="relative z-20 max-w-xl lg:max-w-[760px] text-left space-y-2.5">
          <div class="flex items-center gap-2.5">
            <svg class="w-5 h-5 text-red-500 shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="3" y="8" width="18" height="4" rx="1"/>
              <path d="M12 8v13"/>
              <path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"/>
              <path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"/>
            </svg>
            <span class="text-sm sm:text-base font-semibold text-white drop-shadow-sm">
              {{ heroPromo }}
            </span>
          </div>

          <div v-for="benefit in heroBenefits" :key="benefit" class="flex items-center gap-2.5">
            <svg class="w-4 h-4 text-red-500 shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <span class="text-sm sm:text-base font-semibold text-white drop-shadow-sm">
              {{ benefit }}
            </span>
          </div>
        </div>

        <!-- 3. Горизонтальная форма консультации внизу полноэкранного херо -->
        <div class="relative z-30">
          <div class="bg-white rounded-2xl p-5 sm:p-6 shadow-2xl border border-slate-200/80">
            <div v-if="!isSubmitted" class="flex flex-col lg:flex-row lg:items-center justify-between gap-5 lg:gap-6">
              
              <div class="lg:max-w-xs shrink-0 text-left">
                <div class="text-base sm:text-lg font-bold text-slate-900 leading-tight">
                  Бесплатная консультация
                </div>
                <p class="text-xs text-slate-500 mt-1 leading-normal">
                  Заполните форму, и мы ответим на все ваши вопросы
                </p>
              </div>

              <form @submit.prevent="submitForm" class="flex-grow flex flex-col sm:flex-row items-center gap-3 w-full">
                <div class="w-full sm:flex-1">
                  <input
                    v-model="form.name"
                    @input="handleNameInput"
                    type="text"
                    placeholder="Ваше имя"
                    class="w-full h-12 px-4 text-sm text-slate-900 bg-slate-50 border rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white transition-all placeholder:text-slate-400"
                    :class="formErrors.name ? 'border-red-500 bg-red-50/50' : 'border-slate-300'"
                  />
                  <span v-if="formErrors.name" class="text-[11px] text-red-600 pl-1 mt-1 block text-left">
                    Укажите имя
                  </span>
                </div>

                <div class="w-full sm:flex-1">
                  <input
                    :value="form.phone"
                    @input="handlePhoneInput"
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    class="w-full h-12 px-4 text-sm text-slate-900 bg-slate-50 border rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white transition-all placeholder:text-slate-400"
                    :class="formErrors.phone ? 'border-red-500 bg-red-50/50' : 'border-slate-300'"
                  />
                  <span v-if="formErrors.phone" class="text-[11px] text-red-600 pl-1 mt-1 block text-left">
                    Введите корректный номер
                  </span>
                </div>

                <button
                  type="submit"
                  class="w-full sm:w-auto h-12 px-8 bg-red-600 hover:bg-red-700 text-white font-bold text-sm rounded-xl transition-colors shrink-0 shadow-md cursor-pointer"
                >
                  Получить консультацию
                </button>
              </form>

            </div>

            <!-- Чекбокс согласия -->
            <div v-if="!isSubmitted" class="mt-3 text-left">
              <label class="flex items-center gap-2 cursor-pointer group">
                <input
                  type="checkbox"
                  v-model="form.consent"
                  @change="handleConsentChange"
                  class="w-4 h-4 text-red-600 rounded border-slate-300 focus:ring-red-500 cursor-pointer"
                />
                <span class="text-xs text-slate-500 group-hover:text-slate-700 transition-colors">
                  Я даю согласие на обработку моих персональных данных в соответствии с политикой конфиденциальности
                </span>
              </label>
              <span v-if="formErrors.consent" class="text-[11px] text-red-600 pl-6 mt-1 block">
                Необходимо согласие на обработку персональных данных
              </span>
            </div>

            <!-- Экран успешной отправки -->
            <div v-else class="text-center py-4 flex flex-col items-center justify-center gap-2">
              <div class="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-xl font-bold">
                ✓
              </div>
              <div class="text-lg font-bold text-slate-900">Спасибо за заявку!</div>
              <p class="text-sm text-slate-600 max-w-md">
                Наш менеджер свяжется с вами в течение 10 минут, чтобы ответить на вопросы и забронировать выгодную цену.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>

    <!-- ==============================================================
         2. МОБИЛЬНЫЙ ХЕРО-БЛОК (авто максимально влево)
         ============================================================== -->
    <section class="block lg:hidden w-full bg-white">
      <!-- Сверху: фото 4:3 с машиной и девушкой, авто сдвинуто максимально влево -->
      <div class="relative w-full aspect-[4/3] bg-slate-950 overflow-hidden">
        <img
          src="/Gemini_Generated_Image_ukv09ukv09ukv09u.jfif"
          alt="Автомобиль автошколы Форвард"
          class="absolute inset-0 w-full h-full object-cover object-[100%_52%] pointer-events-none"
        />
        <img
          src="/modal-welcome-option1-Photoroom.png"
          alt="Выпускница с водительским удостоверением РФ"
          class="absolute bottom-2 right-4 sm:right-6 h-[86%] object-contain object-bottom pointer-events-none drop-shadow-md z-10"
        />
      </div>

      <!-- Ниже: секция контента -->
      <div class="relative z-20 -mt-5 bg-white rounded-t-2xl shadow-[0_-10px_24px_rgba(15,23,42,0.22)] overflow-x-clip px-4 sm:px-6 pt-6 pb-10 space-y-4 text-left">
        <h1 class="text-[23px] sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-[1.35]">
          <span class="whitespace-nowrap">
            <span class="relative z-10">{{ heroTitlePrefix }}</span>
            <span class="relative inline-block ml-1 text-white whitespace-nowrap">
              <img
                src="/red-brush-v2.png"
                alt=""
                aria-hidden="true"
                class="absolute -left-[6px] top-[2px] h-full w-[115%] max-w-none object-fill pointer-events-none select-none z-0"
              />
              <span class="relative z-10">{{ heroTitleAccent }}</span>
            </span>
          </span>
          <span class="block sm:inline">{{ heroTitleSuffix }}</span>
        </h1>
        
        <p class="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
          {{ heroSubtitle }}
        </p>

        <!-- Акция и преимущества -->
        <div class="pt-1 space-y-2">
          <div class="flex items-center gap-2 overflow-x-hidden">
            <svg class="w-4 h-4 text-red-600 shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="3" y="8" width="18" height="4" rx="1"/>
              <path d="M12 8v13"/>
              <path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"/>
              <path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"/>
            </svg>
            <span class="text-xs sm:text-sm font-bold text-slate-900 whitespace-nowrap">
              {{ heroPromo }}
            </span>
          </div>

          <div v-for="benefit in heroBenefits" :key="benefit" class="flex items-center gap-2">
            <svg class="w-3.5 h-3.5 text-red-600 shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <span class="text-xs sm:text-sm font-bold text-slate-900">
              {{ benefit }}
            </span>
          </div>
        </div>

        <!-- Мобильная форма -->
        <div class="pt-2">
          <div class="bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-5 text-slate-900">
            <div v-if="!isSubmitted">
              <div class="text-left mb-3.5">
                <div class="text-base font-bold text-slate-900 leading-tight">
                  Бесплатная консультация
                </div>
                <p class="text-xs text-slate-500 mt-1">
                  Заполните форму, и мы ответим на все ваши вопросы
                </p>
              </div>

              <form @submit.prevent="submitForm" class="space-y-3">
                <div>
                  <input
                    v-model="form.name"
                    @input="handleNameInput"
                    type="text"
                    placeholder="Ваше имя"
                    class="w-full h-11 px-4 text-sm text-slate-900 bg-white border rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white transition-all placeholder:text-slate-400"
                    :class="formErrors.name ? 'border-red-500 bg-red-50/50' : 'border-slate-300'"
                  />
                  <span v-if="formErrors.name" class="text-[10px] text-red-600 pl-1 mt-0.5 block text-left">
                    Укажите имя
                  </span>
                </div>

                <div>
                  <input
                    :value="form.phone"
                    @input="handlePhoneInput"
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    class="w-full h-11 px-4 text-sm text-slate-900 bg-white border rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white transition-all placeholder:text-slate-400"
                    :class="formErrors.phone ? 'border-red-500 bg-red-50/50' : 'border-slate-300'"
                  />
                  <span v-if="formErrors.phone" class="text-[10px] text-red-600 pl-1 mt-0.5 block text-left">
                    Введите корректный номер
                  </span>
                </div>

                <button
                  type="submit"
                  class="w-full h-11 bg-red-600 hover:bg-red-700 text-white font-bold text-sm rounded-xl transition-colors cursor-pointer shadow-md"
                >
                  Получить консультацию
                </button>

                <div class="text-left pt-1">
                  <label class="flex items-start gap-2.5 cursor-pointer group">
                    <input
                      type="checkbox"
                      v-model="form.consent"
                      @change="handleConsentChange"
                      class="w-4 h-4 mt-0.5 text-red-600 rounded border-slate-300 focus:ring-red-500 shrink-0 cursor-pointer"
                    />
                    <span class="text-xs text-slate-500 leading-tight">
                      Я даю согласие на обработку моих персональных данных в соответствии с политикой конфиденциальности
                    </span>
                  </label>
                  <span v-if="formErrors.consent" class="text-[10px] text-red-600 pl-1 mt-0.5 block">
                    Необходимо согласие на обработку персональных данных
                  </span>
                </div>
              </form>
            </div>

            <div v-else class="text-center py-4 flex flex-col items-center justify-center gap-2">
              <div class="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-base font-bold shrink-0">
                ✓
              </div>
              <div class="text-base font-bold text-slate-900">Заявка успешно принята!</div>
              <p class="text-xs text-slate-600 mt-1 max-w-xs">
                Мы свяжемся с вами в течение 10 минут для подтверждения бронирования цены.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- ==============================================================
         3. ВТОРОЙ БЛОК: КАРТОЧКИ ПРЕИМУЩЕСТВ С SVG-УЗОРОМ, СКРУГЛЕНИЕМ СВЕРХУ И НАХЛЕСТОМ НА ХЕРО
         ============================================================== -->
    <div
      id="about"
      class="relative z-30 -mt-6 sm:-mt-8 lg:-mt-10 w-full bg-[#f1f3f5] rounded-t-3xl sm:rounded-t-[32px] lg:rounded-t-[36px] pt-8 pb-12 lg:pt-14 lg:pb-18 overflow-hidden"
    >
      <!-- Качественный векторный SVG-узор в высоком разрешении (адаптирован для десктопа и мобайла) -->
      <div class="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <picture class="w-full h-full">
          <source media="(max-width: 768px)" srcset="/cards-pattern-mobile.svg" />
          <img
            src="/cards-pattern.svg"
            alt=""
            aria-hidden="true"
            class="w-full h-full object-cover"
          />
        </picture>
      </div>

      <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Заголовок и подзаголовок секции -->
        <div class="max-w-3xl text-left mb-6 sm:mb-8">
          <h2 class="text-[23px] sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-[1.35] lg:leading-snug">
            {{ cardsSectionTitle }}
          </h2>
          <p class="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            {{ cardsSectionSubtitle }}
          </p>
        </div>

        <!-- Сетка карточек: на мобайле карточка с бейджиком эксклюзив идет первой (order-1) -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          <div
            v-for="(usp, idx) in usps"
            :key="idx"
            :class="[
              'relative bg-white border border-slate-200 rounded-2xl p-6 sm:p-7 shadow-sm flex flex-col justify-start text-left',
              usp.badge ? 'order-1 md:order-3' : idx === 0 ? 'order-2 md:order-1' : 'order-3 md:order-2'
            ]"
          >
            <!-- Прямоугольный остроугольный бейджик, верхняя граница вплотную прилегает к нижней границе бордера -->
            <div
              v-if="usp.badge"
              class="absolute top-0 right-6 sm:right-8 bg-red-600 text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-none shadow-sm select-none pointer-events-none z-10"
            >
              {{ usp.badge }}
            </div>

            <div class="mb-4 text-red-600 flex items-center justify-start">
              <component :is="uspIcons[usp.icon]" class="w-6 h-6 text-red-600" :stroke-width="2" />
            </div>
            <h3 class="text-base sm:text-lg font-bold text-slate-900 leading-snug">
              {{ usp.title }}
            </h3>
            <p class="text-xs sm:text-sm text-slate-600 leading-relaxed mt-2.5">
              {{ usp.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
