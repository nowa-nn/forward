<script setup>
import { computed } from 'vue';
import { Wallet, Handshake, Percent } from 'lucide-vue-next';
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

const uspIcons = {
  wallet: Wallet,
  handshake: Handshake,
  percent: Percent
};

const props = defineProps({
  carVariant: {
    type: String,
    default: 'bmw'
  }
});

const emit = defineEmits(['openModal']);

const currentBg = computed(() => '/Gemini_Generated_Image_ukv09ukv09ukv09u.jfif');
const carAlt = computed(() => 'Белый седан BMW 3 series');
const mobileBgPositionClass = computed(() => 'object-[62%_42%]');

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
  <section class="pt-0 lg:pt-3 pb-0 lg:pb-16 bg-white">
    <!-- На десктопе сетка max-w-7xl с отступами, на мобайле 100% во всю ширину без карточной обводки -->
    <div class="max-w-7xl mx-auto px-0 lg:px-8">

      <!-- ==============================================================
           1. ДЕСКТОПНЫЙ ХЕРО-БЛОК (20:9, выровнен строго по сетке хедера; текст можно выделять и копировать)
           ============================================================== -->
      <div class="hidden lg:block relative w-full aspect-[20/9] rounded-3xl overflow-hidden border border-slate-200/80 shadow-md bg-slate-950">
        
        <!-- Фоновое изображение 20:9 (Lada Granta либо Gemini BMW) -->
        <img
          :src="currentBg"
          :alt="carAlt"
          class="absolute inset-0 w-full h-full object-cover pointer-events-none transition-opacity duration-300"
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

        <!-- HTML-контент: Заголовок с красным мазком краски за фразой, подзаголовок и блок преимуществ -->
        <div class="relative z-20 max-w-xl lg:max-w-[760px] pl-10 lg:pl-16 pr-4 text-left pt-10 lg:pt-14">
          
          <h1 class="text-3xl sm:text-4xl lg:text-[38px] xl:text-[40px] font-extrabold text-white tracking-tight leading-[1.2] drop-shadow-sm">
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

            <!-- Преимущества друг под другом (начертание и шрифт как у акции) -->
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
            
            <!-- Текст формы: заголовок и более бледный подзаголовок -->
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

                <!-- Поле: Номер телефона с маской и валидацией -->
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

                <!-- Кнопка отправки формы -->
                <button
                  type="submit"
                  class="w-full sm:w-auto h-11 px-8 bg-red-600 hover:bg-red-700 text-white font-bold text-sm rounded-xl transition-colors shrink-0 cursor-pointer shadow-md whitespace-nowrap"
                >
                  Получить консультацию
                </button>
              </div>

              <!-- Чекбокс согласия (не отмечен по умолчанию) -->
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
           2. МОБИЛЬНЫЙ ХЕРО-БЛОК (без карточного формата и градиента; авто сдвинуто влево, затемнение под девушкой, тень на фото)
           ============================================================== -->
      <div class="block lg:hidden w-full bg-white text-slate-900 flex flex-col -mt-4 border-b border-slate-200/80">
        
        <!-- Сверху: изображение автомобиля (сдвинуто влево в зависимости от модели авто, без затемнения) и девушки -->
        <div class="relative w-full h-[316px] sm:h-[356px] overflow-hidden bg-slate-100">
          <img
            :src="currentBg"
            :alt="carAlt"
            :class="mobileBgPositionClass"
            class="absolute inset-0 w-full h-full object-cover pointer-events-none"
          />
          <!-- Девушка с водительским удостоверением -->
          <img
            src="/modal-welcome-option1-Photoroom.png"
            alt="Выпускница с водительским удостоверением РФ"
            class="absolute bottom-2 -right-2 sm:right-4 h-[86%] object-contain object-bottom pointer-events-none drop-shadow-md z-10"
          />
        </div>

        <!-- Ниже: секция контента со скруглённым нахлестом и тенью на изображение -->
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

          <!-- Блок акции и преимуществ ДРУГ ПОД ДРУГОМ -->
          <div class="pt-1 space-y-2">
            <!-- Акция в одну строку -->
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

            <!-- Преимущества друг под другом (начертание и шрифт как у акции) -->
            <div v-for="benefit in heroBenefits" :key="benefit" class="flex items-center gap-2">
              <svg class="w-3.5 h-3.5 text-red-600 shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span class="text-xs sm:text-sm font-bold text-slate-900">
                {{ benefit }}
              </span>
            </div>
          </div>

          <!-- И под ним форма -->
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
                  <!-- Поле: Имя -->
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

                  <!-- Поле: Номер телефона с маской и валидацией -->
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

                  <!-- Кнопка отправки формы -->
                  <button
                    type="submit"
                    class="w-full h-11 bg-red-600 hover:bg-red-700 text-white font-bold text-sm rounded-xl transition-colors cursor-pointer shadow-md"
                  >
                    Получить консультацию
                  </button>

                  <!-- Чекбокс согласия -->
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

              <!-- Экран успешной отправки на мобильном -->
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

      </div>

    </div>

    <!-- 3. Карточки преимуществ под херо-блоком -->
    <div
      id="about"
      class="relative z-30 -mt-5 lg:mt-12 w-full bg-[#f1f3f5] rounded-t-2xl sm:rounded-t-3xl lg:rounded-none shadow-[0_-8px_20px_rgba(15,23,42,0.08)] lg:shadow-none pt-7 pb-12 lg:py-12 overflow-hidden"
    >
      <!-- Фоновый узор в стиле приложенного изображения (концентрические дуги, диагональные шевроны, геометрические элементы) -->
      <div class="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <img
          src="/cards-pattern-ref.png"
          alt=""
          aria-hidden="true"
          class="w-full h-full object-cover opacity-80"
        />
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

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          <div
            v-for="(usp, idx) in usps"
            :key="idx"
            class="relative bg-white border border-slate-200 rounded-2xl p-6 sm:p-7 shadow-sm flex flex-col justify-start text-left"
          >
            <!-- Прямоугольный остроугольный бейджик, верхняя граница на одной линии с верхней границей карточки -->
            <div
              v-if="usp.badge"
              class="absolute -top-[1px] right-6 sm:right-8 bg-red-600 text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-none shadow-sm select-none pointer-events-none z-10"
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
  </section>
</template>
