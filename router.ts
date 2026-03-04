import { createRouter, createWebHistory } from 'vue-router'

// Vue pages
import HomeView from './src/pages/Accueil.vue'
import AboutView from './src/pages/About.vue'
import ProjectsView from './src/pages/Projects.vue'
import CvView from './src/pages/CV.vue'
import BUTView from './src/pages/BUT.vue'
import ContactView from './src/pages/ContactForm.vue'
import MentionsLegalesView from './src/pages/MentionsLegales.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/apropos', component: AboutView },
  { path: '/projets', component: ProjectsView },
  { path: '/cv', component: CvView},
  { path: '/BUT', component: BUTView},
  { path : '/contact', component: ContactView}
  ,{ path: '/mentions-legales', component: MentionsLegalesView }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
