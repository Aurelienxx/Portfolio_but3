<script setup>
</script>

<template>
  <section class="contact-page">

    <div class="cv-container">
        <iframe
        src="/img/CV/CV_A.Fontaine.pdf#zoom=page-fit"
        class="cv-pdf"
        title="CV Aurélien Fontaine"
        scrolling="no"
        style="overflow: hidden;"
        ></iframe>
    </div>

    <div>
         <router-link to="/contact" class="btn">
            Me contacter
          </router-link>
    </div>

  </section>
</template>

<style>
.contact-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
}

.cv-container {
  width: 100%;
  max-width: 900px;
  margin-bottom: 30px;
}

/* Image du CV affichée en entier */
.cv-image {
  width: 100%;
  height: auto;
  object-fit: contain;      /* Affiche l’image en entier */
  border-radius: 12px;
  border: 2px solid #ddd;
}

/* CV en PDF */
.cv-pdf {
  width: 100%;
  height: 100vh; /* occupe toute la hauteur de l'écran */
  border: none;
}
/* bouton */
.contact-button .btn {
  display: inline-block;
  padding: 12px 25px;
  background: black;
  color: white;
  font-size: 1.2rem;
  border-radius: 8px;
  text-decoration: none;
  transition: 0.3s ease;
}

.contact-button .btn:hover {
  background: #222;
}
</style>
