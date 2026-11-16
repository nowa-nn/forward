<script setup>
import { ref } from 'vue';
import Header from '../components/Header.vue';
import HeroVariant3 from './HeroVariant3.vue';
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
  <div class="min-h-screen bg-white flex flex-col font-sans relative">
    <Header :flatBottom="true" @openModal="openModal" />
    <main class="flex-grow bg-white">
      <HeroVariant3 @openModal="openModal" />
    </main>
    <ConsultationModal :isOpen="isModalOpen" @close="closeModal" />
  </div>
</template>
