<script setup>
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="site-footer">
    <div class="wrap footer-content">
      <p>© {{ currentYear }} Aurélien Fontaine — Portfolio</p>
      <div class="footer-links">
        <router-link to="/mentions-legales">Mentions légales</router-link>
      </div>

      <div class="socials">
        <a
          href="https://github.com/Aurelienxx"
          target="_blank"
          aria-label="GitHub"
        >
          <img src="/img/icons/github.png" alt="GitHub" />
        </a>

        <a
          href="https://www.linkedin.com/in/aurélien-fontaine-617734302"
          target="_blank"
          aria-label="LinkedIn"
        >
          <img src="/img/icons/linkedin.png" alt="LinkedIn" />
        </a>
      </div>
    </div>
  </footer>
</template>
