<script setup>
import './assets/style.css'
import HeaderBar from './components/Header.vue'
import FooterBar from './components/Footer.vue'
</script>

<template>
  <HeaderBar />

  <main>
    <router-view />
  </main>

  <FooterBar />
</template>
