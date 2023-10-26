import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import About from '@/views/About.vue'
import Prismatique from '@/views/Prismatique.vue'
import Custom from '@/views/Custom.vue'
import Test from '@/views/Test.vue'
import Compte from '@/views/compte.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/prismatique',
      name: 'Prismatique',
      component: Prismatique
    },
    {
      path: '/custom',
      name: 'Custom',
      component: Custom
    },
    {
      path: '/compte',
      name: 'Compte',
      component: Compte,
      props: true
    },
    {
      path: '/test',
      name: 'Test',
      component: Test,
      props: true
    }
  ]
})

// Vérification de route demandée
// to : où il veut aller
// from : d'où il vient 
// next : s'il peut y aller
/*  router.beforeEach( (to, from, next) =>{
  if(to.name == "HomeView"){ // Si page d'accueil demandée, on autorise
    next()
  }else{  // Si une autre route est demandée, on vérifie si l'utilisateur est connecté        
    if(pb.authStore.model != null){ // Utilisateur connecté => OK
      next()
    }else{ // Utilisateur non connecté, redirection sur la page d'acceuil
      router.push({name:"HomeView"})
    }
  }
})*/

export default router
