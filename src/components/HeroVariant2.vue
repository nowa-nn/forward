<script setup>
import {
  heroTitlePrefix,
  heroTitleAccent,
  heroTitleSuffix,
  heroSubtitle,
  heroPromo,
  heroBenefits,
  usps
} from '../data/heroContent';
import { useLeadForm } from '../composables/useLeadForm';

const emit = defineEmits(['openModal']);

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
  <section class="pt-0 lg:pt-3 pb-16 bg-slate-50">
    <div class="max-w-7xl mx-auto px-0 lg:px-8">

      <!-- ==============================================================
           1. ДЕСКТОПНЫЙ ХЕРО-БЛОК (BMW + собственный SVG-мазок красной краски)
           ============================================================== -->
      <div class="hidden lg:block relative w-full aspect-[20/9] rounded-3xl overflow-hidden border border-slate-200/80 shadow-md bg-slate-950">

        <!-- Фоновое изображение (BMW) -->
        <img
          src="/Gemini_Generated_Image_ukv09ukv09ukv09u.jfif"
          alt="Белый седан BMW 3 series"
          class="absolute inset-0 w-full h-full object-cover object-[center_52%] pointer-events-none transition-opacity duration-300"
        />

        <!-- Затемнение фона: продлено вправо до 72% -->
        <div class="absolute inset-0 bg-slate-950/20 pointer-events-none"></div>
        <div class="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/75 to-transparent w-[72%] pointer-events-none"></div>
        <div class="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none"></div>

        <!-- Девушка с водительским удостоверением (без фона) справа от машины -->
        <img
          src="/modal-welcome-option1-Photoroom.png"
          alt="Выпускница с водительским удостоверением РФ"
          class="absolute bottom-0 right-4 lg:right-8 xl:right-10 h-[92%] max-h-full object-contain object-bottom pointer-events-none z-10 drop-shadow-[0_20px_35px_rgba(0,0,0,0.45)]"
        />

        <!-- HTML-контент -->
        <div class="relative z-20 max-w-xl lg:max-w-[740px] pl-10 lg:pl-16 pr-4 text-left pt-10 lg:pt-14">

          <h1 class="text-3xl sm:text-4xl lg:text-[38px] xl:text-[40px] font-extrabold text-white tracking-tight leading-[1.2] drop-shadow-sm">
            <span>{{ heroTitlePrefix }}</span>
            <span class="relative inline-block text-white whitespace-nowrap">
              <img
                src="/red-brush-v2.png"
                alt=""
                aria-hidden="true"
                class="absolute -left-[2px] top-[3px] h-[calc(100%-3px)] w-[calc(100%+158px)] object-fill pointer-events-none select-none z-0"
              />
              <span class="relative z-10">{{ heroTitleAccent }}</span>
            </span>
            <span class="block whitespace-nowrap">{{ heroTitleSuffix }}</span>
          </h1>

          <p class="mt-3.5 text-sm sm:text-base lg:text-lg text-slate-200 leading-relaxed font-normal max-w-lg drop-shadow-sm">
            {{ heroSubtitle }}
          </p>

          <!-- Блок акции и преимуществ: отцентрован вертикально между текстом выше и формой ниже -->
          <div class="mt-6 lg:mt-[38px] space-y-2">
            <!-- Акция с подарком -->
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

            <!-- Преимущества друг под другом -->
            <div v-for="benefit in heroBenefits" :key="benefit" class="flex items-center gap-2.5">
              <svg class="w-4 h-4 text-red-500 shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span class="text-sm sm:text-base font-semibold text-white drop-shadow-sm">
                {{ benefit }}
              </span>
            </div>
          </div>

        </div>

        <!-- Форма (горизонтальная карточка) с отступами по краям точно как у текста в херо -->
        <div class="absolute bottom-4 sm:bottom-5 lg:bottom-6 left-10 lg:left-16 right-10 lg:right-16 z-30 bg-white rounded-2xl p-5 sm:p-6 shadow-2xl border border-slate-200/80">

          <div v-if="!isSubmitted" class="flex flex-col lg:flex-row lg:items-center justify-between gap-5 lg:gap-6">

            <!-- Текст формы -->
            <div class="lg:max-w-xs shrink-0 text-left">
              <div class="text-base sm:text-lg font-bold text-slate-900 leading-tight">
                Бесплатная консультация
              </div>
              <p class="text-xs text-slate-500 mt-1 leading-normal">
                Заполните форму, и мы ответим на все ваши вопросы
              </p>
            </div>

            <!-- Поля формы выставленные в ряд -->
            <form @submit.prevent="submitForm" class="flex-grow space-y-2">
              <div class="flex flex-col sm:flex-row items-center gap-3">

                <!-- Поле: Имя -->
                <div class="w-full sm:flex-1">
                  <input
                    v-model="form.name"
                    @input="handleNameInput"
                    type="text"
                    placeholder="Ваше имя"
                    class="w-full h-11 px-4 text-sm text-slate-900 bg-slate-50 border rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white transition-all placeholder:text-slate-400"
                    :class="formErrors.name ? 'border-red-500 bg-red-50/50' : 'border-slate-300'"
                  />
                  <span v-if="formErrors.name" class="text-[10px] text-red-600 pl-1 mt-0.5 block text-left">
                    Укажите имя
                  </span>
                </div>

                <!-- Поле: Телефон -->
                <div class="w-full sm:flex-1">
                  <input
                    :value="form.phone"
                    @input="handlePhoneInput"
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    class="w-full h-11 px-4 text-sm text-slate-900 bg-slate-50 border rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white transition-all placeholder:text-slate-400"
                    :class="formErrors.phone ? 'border-red-500 bg-red-50/50' : 'border-slate-300'"
                  />
                  <span v-if="formErrors.phone" class="text-[10px] text-red-600 pl-1 mt-0.5 block text-left">
                    Введите корректный номер
                  </span>
                </div>

                <!-- Кнопка отправки -->
                <button
                  type="submit"
                  class="w-full sm:w-auto h-11 px-8 bg-red-600 hover:bg-red-700 text-white font-bold text-sm rounded-xl transition-colors shrink-0 cursor-pointer shadow-md whitespace-nowrap"
                >
                  Получить консультацию
                </button>
              </div>

              <!-- Чекбокс согласия -->
              <div class="text-left pt-0.5">
                <label class="flex items-center gap-2 cursor-pointer group">
                  <input
                    type="checkbox"
                    v-model="form.consent"
                    @change="handleConsentChange"
                    class="w-3.5 h-3.5 text-red-600 rounded border-slate-300 focus:ring-red-500 shrink-0 cursor-pointer"
                  />
                  <span class="text-xs text-slate-500 group-hover:text-slate-700 transition-colors">
                    Я даю согласие на обработку моих персональных данных в соответствии с политикой конфиденциальности
                  </span>
                </label>
                <span v-if="formErrors.consent" class="text-[10px] text-red-600 pl-1 mt-0.5 block">
                  Необходимо согласие на обработку персональных данных
                </span>
              </div>
            </form>

          </div>

          <!-- Экран успешной отправки -->
          <div v-else class="text-center py-3 flex items-center justify-center gap-4">
            <div class="w-9 h-9 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-sm font-bold shrink-0">
              ✓
            </div>
            <div class="text-left">
              <div class="text-sm font-bold text-slate-900">Заявка успешно принята!</div>
              <p class="text-xs text-slate-600 mt-0.5">
                Мы свяжемся с вами в течение 10 минут для подтверждения бронирования цены.
              </p>
            </div>
          </div>

        </div>

      </div>

      <!-- ==============================================================
           2. МОБИЛЬНЫЙ ХЕРО-БЛОК (Независимый вариант: заголовок+текст под хедером на белой подложке с rounded-b, фото с нижним тёмным градиентом и преимуществами поверх, форма на rounded-t блоке)
           ============================================================== -->
      <div class="block lg:hidden w-full flex flex-col">

        <!-- 2.1 Белая подложка под хедером с закруглёнными углами у нижней грани: заголовок и текст -->
        <div class="relative z-20 bg-white rounded-b-2xl shadow-[0_10px_24px_rgba(15,23,42,0.16)] overflow-x-clip px-4 sm:px-6 pt-4 pb-5 space-y-3 text-left">
          <h1 class="text-[19px] sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-[1.35]">
            <span class="whitespace-nowrap">
              <span>{{ heroTitlePrefix }}</span>
              <span class="relative inline-block text-white whitespace-nowrap">
                <img
                  src="/red-brush-v2.png"
                  alt=""
                  aria-hidden="true"
                  class="absolute -left-[2px] top-[2px] h-[calc(100%-2px)] w-[calc(100%+136px)] object-fill pointer-events-none select-none z-0"
                />
                <span class="relative z-10">{{ heroTitleAccent }}</span>
              </span>
            </span>
            <span class="block sm:inline">{{ heroTitleSuffix }}</span>
          </h1>

          <p class="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            {{ heroSubtitle }}
          </p>
        </div>

        <!-- 2.2 Изображение девушки и BMW во всю ширину под нижней гранью текстового блока -->
        <div class="relative -mt-4 w-full min-h-[412px] sm:min-h-[450px] flex flex-col justify-end pt-60 sm:pt-64 pb-10 overflow-hidden bg-slate-900">
          <img
            src="/Gemini_Generated_Image_ukv09ukv09ukv09u.jfif"
            alt="Белый седан BMW 3 series"
            class="absolute inset-0 w-full h-full object-cover object-[62%_42%] pointer-events-none"
          />
          <!-- Девушка с водительским удостоверением -->
          <img
            src="/modal-welcome-option1-Photoroom.png"
            alt="Выпускница с водительским удостоверением РФ"
            class="absolute bottom-3 -right-2 sm:right-4 h-[88%] object-contain object-bottom pointer-events-none drop-shadow-md z-10"
          />
          <!-- Затемнение нижней части градиентом из прозрачности сверху в тёмный цвет снизу -->
          <div class="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-slate-950 via-slate-950/85 to-transparent pointer-events-none z-[15]"></div>

          <!-- Поверх затемнения верхним слоем: акция (подарок) и преимущества (галочки) -->
          <div class="relative z-20 px-4 sm:px-6 space-y-2 text-left">
            <div class="flex items-center gap-2 overflow-x-hidden">
              <svg class="w-4 h-4 text-red-500 shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="8" width="18" height="4" rx="1"/>
                <path d="M12 8v13"/>
                <path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"/>
                <path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"/>
              </svg>
              <span class="text-xs sm:text-sm font-bold text-white whitespace-nowrap drop-shadow-sm">
                {{ heroPromo }}
              </span>
            </div>

            <div v-for="benefit in heroBenefits" :key="benefit" class="flex items-center gap-2">
              <svg class="w-3.5 h-3.5 text-red-500 shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span class="text-xs sm:text-sm font-bold text-white drop-shadow-sm">
                {{ benefit }}
              </span>
            </div>
          </div>
        </div>

        <!-- 2.3 Форма ниже изображения: единый белый блок с закруглёнными углами сверху, БЕЗ отдельной внутренней подложки -->
        <div class="relative z-20 -mt-5 bg-white rounded-t-2xl shadow-[0_-10px_24px_rgba(15,23,42,0.22)] px-4 sm:px-6 pt-6 pb-8 border-b border-slate-200/80 text-slate-900">
          <div v-if="!isSubmitted">
            <div class="text-left mb-4">
              <div class="text-base sm:text-lg font-bold text-slate-900 leading-tight">
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
                  class="w-full h-11 px-4 text-sm text-slate-900 bg-slate-50 border rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white transition-all placeholder:text-slate-400"
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
                  class="w-full h-11 px-4 text-sm text-slate-900 bg-slate-50 border rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white transition-all placeholder:text-slate-400"
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

    <!-- 3. Четыре карточки преимуществ (USP) под херо-блоком -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <div
          v-for="(usp, idx) in usps"
          :key="idx"
          class="bg-white border border-slate-200 rounded-2xl p-6 sm:p-7 shadow-sm transition-colors duration-150 hover:border-slate-300 flex flex-col justify-between"
        >
          <div>
            <div class="text-lg font-bold text-slate-900 leading-snug">
              {{ usp.title }}
            </div>
            <p class="text-sm text-slate-600 leading-relaxed mt-2.5">
              {{ usp.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
