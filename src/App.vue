<script setup>
import { ref } from 'vue';
import Header from './components/Header.vue';
import Hero from './components/Hero.vue';
import ConsultationModal from './components/ConsultationModal.vue';

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
    <Header @openModal="openModal" />
    <main class="flex-grow bg-white">
      <Hero @openModal="openModal" />
    </main>
    <ConsultationModal :isOpen="isModalOpen" @close="closeModal" />
  </div>
</template>
