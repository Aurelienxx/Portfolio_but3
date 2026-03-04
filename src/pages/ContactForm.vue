<script setup lang="ts">
import { ref } from "vue";

const firstname = ref("");
const lastname = ref("");
const email = ref("");
const message = ref("");
const isHuman = ref(false);

function openGmail() {
  if (!isHuman.value) {
    alert("Veuillez confirmer que vous n'êtes pas un robot.");
    return;
  }

  const to = "aurelienfontaine09@gmail.com";
  const subject = encodeURIComponent("Contact depuis mon site");
  const body = encodeURIComponent(
    `Nom: ${lastname.value}
Prénom: ${firstname.value}
Email: ${email.value}

Message:
${message.value}`
  );

  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${subject}&body=${body}`;

  window.open(gmailUrl, "_blank");
}
</script>

<template>
  <section class="section contact-page">
    <h2 class="section-title">Contact</h2>
    <div class="contact-box">
      <form @submit.prevent="openGmail">
        <div class="field">
          <input v-model="firstname" placeholder="Prénom" required />
        </div>
        <div class="field">
          <input v-model="lastname" placeholder="Nom" required />
        </div>
        <div class="field">
          <textarea v-model="message" placeholder="Message" rows="5" required></textarea>
        </div>
        <div class="field checkbox-field">
          <label>
            <input type="checkbox" v-model="isHuman" />
            Je ne suis pas un robot
          </label>
        </div>
        <button class="btn" type="submit">
          Me contacter
        </button>
      </form>
    </div>
  </section>
</template>