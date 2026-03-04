<script setup>
import { ref } from 'vue'

const hobbies = [
  {
    id: 1,
    title: 'Photographie',
    images: [
      '/img/hobbies/photo/photo1.jpg',
      '/img/hobbies/photo/photo2.jpg',
      '/img/hobbies/photo/photo3.jpg',
      '/img/hobbies/photo/photo4.jpg',
      '/img/hobbies/photo/photo5.jpg',
      '/img/hobbies/photo/photo6.jpg',
      '/img/hobbies/photo/photo7.jpg',
      '/img/hobbies/photo/photo8.jpg',
      '/img/hobbies/photo/photo9.jpg',
    ]
  },
  {
    id: 2,
    title: 'Jeux vidéo',
    images: [
      '/img/hobbies/game/game2.jpg',
      '/img/hobbies/game/game1.jpg',
      '/img/hobbies/game/game3.jpg',
    ]
  },
  {
    id: 3,
    title: 'Cinéma',
    images: [
      '/img/hobbies/movie/movie1.jpg',
      '/img/hobbies/movie/movie2.png',
      '/img/hobbies/movie/movie3.jpg',
      '/img/hobbies/movie/movie4.jpg',
    ]
  },
  {
    id: 4,
    title: 'Musique',
    images: [
      '/img/hobbies/music/music1.jpg',
      '/img/hobbies/music/music2.jpg',
      '/img/hobbies/music/music3.jpg',
      '/img/hobbies/music/music4.jpg',
      '/img/hobbies/music/music5.png',
      '/img/hobbies/music/music6.jpg',
      '/img/hobbies/music/music7.jpg',
      '/img/hobbies/music/music8.jpg',
    ]
  }
]

const selectedHobby = ref(null)

function openHobby(hobby) {
  selectedHobby.value = hobby
}

function closeGallery() {
  selectedHobby.value = null
}
</script>

<template>
  <section class="hobbies-page">

    <!-- LISTE DES CARTES -->
    <div v-if="!selectedHobby" class="cards">
      <div
        v-for="hobby in hobbies"
        :key="hobby.id"
        class="hobby-card"
        :style="hobby.images && hobby.images.length
          ? { backgroundImage: `url(${hobby.images[0]})` }
          : {}"
        @click="openHobby(hobby)"
      >
        <div class="overlay">
          <h2>{{ hobby.title }}</h2>
          <p>Cliquez pour voir plus</p>
        </div>
      </div>
    </div>

    <!-- GALERIE -->
    <div v-else class="gallery">
      <button class="back-btn" @click="closeGallery">← Retour</button>

      <h2>{{ selectedHobby.title }}</h2>

      <div class="images">
        <img
          v-for="(img, index) in selectedHobby.images"
          :key="index"
          :src="img"
          alt=""
        />
      </div>
    </div>

  </section>
</template>

