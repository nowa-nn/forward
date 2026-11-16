<script setup>
import { ref } from 'vue';
import Header from '../components/Header.vue';
import HeroVariant2 from '../components/HeroVariant2.vue';
import ConsultationModal from '../components/ConsultationModal.vue';

const isModalOpen = ref(false);

const openModal = () => {
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
};
</script>

<template>
  <div class="min-h-screen bg-slate-50 flex flex-col font-sans relative">
    <Header :flatBottom="true" @openModal="openModal" />
    <main class="flex-grow">
      <HeroVariant2 @openModal="openModal" />
    </main>
    <ConsultationModal :isOpen="isModalOpen" @close="closeModal" />
  </div>
</template>
