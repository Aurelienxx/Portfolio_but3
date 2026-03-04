<script setup>
defineProps({
  title: String,
  description: String,
  image: String,
  link: String
})
</script>

<template>
  <article class="project-card-grid">
    <div class="project-card-image">
      <img :src="image" :alt="title" />
      <div class="project-card-overlay"></div>
    </div>

    <div class="project-card-content">
      <h4 class="project-card-title">{{ title }}</h4>
      <p class="project-card-desc">{{ description }}</p>
      
      <a v-if="link" :href="link" class="project-card-link" target="_blank">
        <span>Voir le projet</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M7 17L17 7M7 7h10v10"></path>
        </svg>
      </a>
    </div>
  </article>
</template>
