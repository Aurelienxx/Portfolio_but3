<template>

  <section class="hero">
    <div class="wrap hero-grid">
      <div class="hero-intro">
        <h2 class="hero-title">Mon BUT en 3 minutes</h2>
        <p class="hero-lead">
          Dans cette vidéo je vous présente mon BUT en 3 minutes.
          Je vous parle de mes 3 années passées à l'IUT de Calais et de 
          ce qui m'a marqué durant ces années.
        </p>
      </div>
      <div class="hero-card">
        <iframe class="video" src="https://www.youtube.com/embed/KUAWmB_rzWU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </div>

    
  </section>

</template>
<style>
.video {
  display:block;
  width:150%;
  aspect-ratio: 16 / 9;
  border-radius: 12px;
  border: 2px solid #ddd;
}

.hero-card {
  padding: 0%;
}

/* Mobile: center the video card only on this page */
@media (max-width: 871px) {
  .hero-card {
    display: flex;
    justify-content: center;
    padding: 0;
  }
  video {
    width: 150%;
  }
}
</style>