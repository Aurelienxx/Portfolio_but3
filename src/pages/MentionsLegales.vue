<template>
  <section class="legal">
    <div class="container">
      <h1>Mentions légales</h1>

      <h2>Éditeur / Hébergeur</h2>
      <p>Hébergeur : Netlify</p>

      <h2>Réalisation</h2>
      <p>Site réalisé par l'auteur du site.</p>

      <h2>Propriété des images</h2>
      <p>
        Les images utilisées pour illustrer le site ne m'appartiennent pas toutes. Si vous êtes propriétaire
        d'une image présente ici et souhaitez sa suppression, vous pouvez faire la demande via le
        <router-link to="/contact">formulaire de contact</router-link> et elle sera retirée après vérification.
      </p>

      <h2>Données personnelles</h2>
      <p>Le site ne collecte pas de données personnelles en dehors des informations transmises volontairement via le formulaire de contact.</p>

      <h2>Contact</h2>
      <p>Pour toute demande : utilisez le <router-link to="/contact">formulaire de contact</router-link>.</p>

      <p class="small">Mise à jour : 2026</p>
    </div>
  </section>
</template>

<style scoped>
.legal .container{
  max-width: 900px;
  margin: 32px auto;
  padding: 0 16px;
}
.legal h1{ margin-bottom: 16px }
.legal h2{ margin-top: 18px; margin-bottom: 6px }
.legal p{ color: #ffffff; line-height:1.5 }
.legal .small{ color:#666; font-size:0.9rem; margin-top:20px }

/* Mobile tweaks */
@media (max-width:768px){
  .legal .container{ padding: 0 12px; margin: 20px auto }
}
</style>
