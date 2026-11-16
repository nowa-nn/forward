<script setup>
import { ref } from 'vue';
import { X, Check } from 'lucide-vue-next';
import { branches } from '../data/mockDirectusData';

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(['close']);

const name = ref('');
const phone = ref('');
const branchId = ref(branches[0].id);
const isSubmitting = ref(false);
const isSuccess = ref(false);

const handleClose = () => {
  isSuccess.value = false;
  emit('close');
};

const handleSubmit = () => {
  if (!phone.value) return;
  isSubmitting.value = true;
  
  // Ready for Directus
  const payload = {
    name: name.value,
    phone: phone.value,
    branch_id: branchId.value,
    source: 'Header Callback Modal'
  };
  console.log('Directus Modal Payload:', payload);

  setTimeout(() => {
    isSubmitting.value = false;
    isSuccess.value = true;
  }, 500);
};
</script>

<template>
  <div
    v-if="isOpen"
    class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60"
    @click.self="handleClose"
  >
    <div class="bg-white rounded-lg border border-slate-200 w-full max-w-md p-6 relative">
      <button
        type="button"
        @click="handleClose"
        class="absolute top-4 right-4 text-slate-400 hover:text-slate-700 transition-colors duration-150 p-1"
        aria-label="Закрыть"
      >
        <X class="w-5 h-5" />
      </button>

      <div v-if="!isSuccess">
        <div class="text-xl font-bold text-slate-900 leading-tight">
          Заказ обратного звонка
        </div>
        <p class="text-xs text-slate-600 mt-1 mb-5">
          Оставьте номер телефона, и наш специалист свяжется с вами в течение 10 минут.
        </p>

        <form @submit.prevent="handleSubmit" class="space-y-4">
          <div>
            <label for="modal-name" class="block text-xs font-semibold text-slate-700 mb-1">
              Ваше имя
            </label>
            <input
              id="modal-name"
              type="text"
              v-model="name"
              placeholder="Как к вам обращаться"
              class="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded focus:outline-none focus:border-brand-600 focus:ring-1 focus:ring-brand-600"
            />
          </div>

          <div>
            <label for="modal-phone" class="block text-xs font-semibold text-slate-700 mb-1">
              Телефон <span class="text-brand-600">*</span>
            </label>
            <input
              id="modal-phone"
              type="tel"
              required
              v-model="phone"
              placeholder="+7 (___) ___-__-__"
              class="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded focus:outline-none focus:border-brand-600 focus:ring-1 focus:ring-brand-600"
            />
          </div>

          <div>
            <label for="modal-branch" class="block text-xs font-semibold text-slate-700 mb-1">
              Ближайший район / филиал
            </label>
            <select
              id="modal-branch"
              v-model="branchId"
              class="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded focus:outline-none focus:border-brand-600 focus:ring-1 focus:ring-brand-600"
            >
              <option v-for="b in branches" :key="b.id" :value="b.id">
                {{ b.district }} р-н: {{ b.address }}
              </option>
            </select>
          </div>

          <button
            type="submit"
            :disabled="isSubmitting"
            class="w-full bg-brand-600 hover:bg-brand-700 disabled:opacity-60 text-white font-bold py-3 px-4 rounded text-sm transition-colors duration-150 cursor-pointer"
          >
            <span v-if="!isSubmitting">Жду звонка</span>
            <span v-else>Отправка...</span>
          </button>

          <p class="text-[11px] text-slate-500 text-center">
            Нажимая кнопку, вы соглашаетесь на обработку персональных данных.
          </p>
        </form>
      </div>

      <div v-else class="text-center py-6 space-y-3">
        <div class="w-12 h-12 bg-slate-900 text-white rounded-full flex items-center justify-center mx-auto">
          <Check class="w-6 h-6 text-white" />
        </div>
        <div class="text-lg font-bold text-slate-900">
          Спасибо за заявку!
        </div>
        <p class="text-xs text-slate-600">
          Мы перезвоним вам в ближайшее рабочее время.
        </p>
        <button
          type="button"
          @click="handleClose"
          class="bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold px-4 py-2 rounded transition-colors duration-150"
        >
          Закрыть
        </button>
      </div>
    </div>
  </div>
</template>
