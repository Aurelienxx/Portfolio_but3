<script setup>
import { ref } from 'vue'
const menuOpen = ref(false)
function toggleMenu(){ menuOpen.value = !menuOpen.value }
</script>

<template>
  <header class="site-header">
    <div class="wrap">
      <div class="brand">
        <router-link to="/" class="logo-link">
          <h1 class="logo">Aurélien Fontaine</h1>
        </router-link>
      </div>

      <button
        class="nav-toggle"
        @click="toggleMenu"
        :aria-expanded="menuOpen"
        aria-label="Ouvrir la navigation">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </button>

      <nav class="main-nav" :class="{ open: menuOpen }" aria-label="Navigation principale">
        <router-link to="/BUT" @click="menuOpen = false">Mon BUT en 3 min</router-link>
        <router-link to="/apropos" @click="menuOpen = false">À propos</router-link>
        <router-link to="/projets" @click="menuOpen = false">Projets</router-link>
        <router-link to="/cv" @click="menuOpen = false">Mon CV</router-link>
      </nav>
    </div>
  </header>
</template>
