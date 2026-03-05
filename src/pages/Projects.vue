<script setup>
const projects = [
  {
    id: 1,
    title: 'Gladius Dominus',
    description:
      'Gladius Dominus est un turn-based strategy game ancré dans un contexte historique inspiré de la Seconde Guerre mondiale. Votre objectif : détruire le QG adverse en tirant parti d\'unités uniques, chacune dotée de statistiques et mécaniques propres, afin de mettre en place des stratégies toujours plus innovantes. Développé avec Godot Engine, ce projet à été réalisé en équipe sur une période de 3 mois.',
    image: '/img/projets/gladius.png',
    link: 'https://github.com/Aurelienxx/Gladius'
  },
  {
    id: 2,
    title: 'Jeu de réalité virtuelle',
    description:
      'Jeu vidéo en réalité virtuelle développé avec Unreal Engine. Projet d\'équipe réalisé en une semaine dans le cadre de la découverte de la VR.Le jeu "Clean Up FamilyX" est une simulation de nettoyage de bunker.',
    image: '/img/projets/rv.png',
    },
  {
    id: 3,
    title: 'Jeu de la vie — Version Qt',
    description:
      'Inspiré du projet de John Conway et de son célèbre automate cellulaire, ce projet consiste à implémenter le jeu de la vie en utilisant la bibliothèque Qt en C++. Le jeu de la vie est un automate cellulaire qui simule l\'évolution d\'une population de cellules sur une grille en fonction de règles simples. Ce projet implique la gestion des règles du jeu et la création d\'une interface utilisateur leur permettant de visualiser et d\'interagir avec le jeu.',
    image: '/img/projets/jeu_vie.png',
    link: 'https://github.com/Aurelienxx/Jeu-de-la-vie'
  },
  {
    id: 4,
    title: 'Analyse d’images',
    description: 'Projet d\'analyse de données spatiales FIT/FITS en imagerie astronomique, ce projet réalisé en binôme en python avec la bibliothèque PyQt, consiste à développer et optimiser grâce au multithreading une application de traitement d\'images astronomiques. L\'application permet grâce à l\'intervention de l\'API Skyview de télécharger les données d\'un astre et de les traiter pour offrir une visualisation claire et détaillée de celui- ci.',
    image: '/img/projets/astro.jpg',
    link: 'https://github.com/Aurelienxx/Image-Astronomique',
  },
  {
    id: 5,
    title: 'Flagdle',
    description: "Application mobile inspirée du jeu Flagdle, développée en Flutter. Ce projet a été réalisé en équipe sur une période de 3 semaines. L\'application, comme son homologue, propose aux utilisateurs de deviner un pays à partir de certaines de ses caractéristiques (drapeau, capitale, population...) grâce à l'intégration de l'API REST Countries.",
    image: '/img/projets/flagle.png',
    link: 'https://github.com/MatthieuPinceel/daltons',
  }
]
</script>

<template>
  <section class="projects-page">
    <div class="wrap">

      <h1 class="page-title">Mes projets</h1>

      <article
        v-for="project in projects"
        :key="project.id"
        class="project-card-page"
      >
        <!-- Image -->
        <div class="project-image-page">
          <img :src="project.image" :alt="project.title" />
          <div class="project-overlay-page"></div>
        </div>

        <!-- Contenu -->
        <div class="project-content-page">
          <h2>{{ project.title }}</h2>
          <p>{{ project.description }}</p>
          <a 
              v-if="project.link"
              :href="project.link" 
              class="project-link-page" 
              target="_blank"
            >
              <span>En savoir plus</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M7 17L17 7M7 7h10v10"></path>
              </svg>
            </a>
        </div>
      </article>

    </div>
  </section>
</template>
