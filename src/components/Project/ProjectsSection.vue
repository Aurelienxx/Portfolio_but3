<script setup>
import ProjectCard from './ProjectCard.vue'

const projects = [
  {
    title: "Gladius Dominus - Godot Engine",
    description: 'Gladius Dominus est un turn-based strategy game ancré dans un contexte historique inspiré de la Seconde Guerre mondiale. Votre objectif : détruire le QG adverse en tirant parti d\'unités uniques, chacune dotée de statistiques et mécaniques propres, afin de mettre en place des stratégies toujours plus innovantes. Développé avec Godot Engine, ce projet à été réalisé en équipe sur une période de 3 mois',

    image: "/img/projets/gladius.png",
    link: "https://github.com/Aurelienxx/Gladius"
  },
  {
    title: "Analyse d'images",
    description: 'Projet d\'analyse de données spatiales FIT/FITS en imagerie astronomique, ce projet réalisé en binôme en python avec le framework PyQt, consiste à développer et optimiser grâce au multithreading une application de traitement d\'images astronomiques. L\'application permet grâce à l\'intervention de l\'API Skivew de télécharger les données d\'un astre et de les traiter pour offrir une visualisation claire et détaillée de celui- ci.',
    image: "/img/projets/astro.jpg",
    link: "https://github.com/Aurelienxx/Image-Astronomique"
  },
  {
    title: "Jeu de la vie — Version Qt",
    description: 'Inspiré du projet de John Conway et de son célèbre automate cellulaire, ce projet consiste à implémenter le jeu de la vie en utilisant le framework Qt en C++. Le jeu de la vie est un automate cellulaire qui simule l\'évolution d\'une population de cellules sur une grille en fonction de règles simples. Ce projet implique la gestion des règles du jeu et la création d\'une interface utilisateur leurs permettre de visualiser et d\'interagir avec le jeu.',

    image: "/img/projets/jeu_vie.png",
    link: "https://github.com/Aurelienxx/Jeu-de-la-vie"
  },
]
</script>

<template>
  <section class="section projects">
    <div class="wrap">
      <h3 class="section-title">Quelque uns de mes projets</h3>

      <div class="grid">
        <ProjectCard
          v-for="(p, i) in projects"
          :key="i"
          :title="p.title"
          :description="p.description"
          :image="p.image"
          :link="p.link"
        />
      </div>
    </div>
  </section>
</template>
