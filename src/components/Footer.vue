<script setup lang="ts">
	import FacebookIcon from './icons/IconFacebook.vue'
	import TwitterIcon from './icons/IconTwitter.vue'
	import InstagramIcon from './icons/IconInstagram.vue'
	import LogoBlanc from './icons/LogoBlanc.vue'
  import { RouterLink } from 'vue-router';
</script>

<template>  
    <footer class="grille space-y-6 bg-black py-16 px-6 text-white lg:space-y-0  ">
        <div class="mb-12 flex justify-center col-start-2 col-span-1">
          <RouterLink class="ml-10" to="/">
            <LogoBlanc/>  
          </RouterLink>
        </div>

        <div class="space-y-3 col-span-3 col-start-11">
        <h4 class="font-bold uppercase text-yellow-500">Nous suivre</h4>
        <ul class="flex gap-4">
          <li>
            <a href="https://facebook.com" aria-label="facebook"><FacebookIcon/> </a>
          </li>
          <li>
            <a href="https://instagram.com" aria-label="instagram"><InstagramIcon/> </a>
          </li>
          <li>
            <a href="https://twitter.com" aria-label="twitter"><TwitterIcon/> </a>
          </li>
        </ul>
      </div>

      

      <nav class="space-y-4 col-span-3 col-start-2">
        <h4 class="font-bold uppercase text-yellow-500">à propos de TaVue</h4>
        <ul class="lg:space-y-4">
            <li><RouterLink to="/#">A propos</RouterLink></li>
            <li><RouterLink to="/#">Conditions générales</RouterLink></li>
            <li><RouterLink to="/#">Confidentialité</RouterLink></li>
        </ul>
      </nav>

      <nav class="space-y-4 col-span-3 col-start-5">
        <h4 class="font-bold uppercase text-yellow-500">aide & informations</h4>
        <ul class="lg:space-y-4">
            <li><RouterLink to="/#">Assistance</RouterLink></li>
            <li><RouterLink to="/#">Livraison et retour</RouterLink></li>
            <li><RouterLink to="/#">FAQ</RouterLink></li>
        </ul>
      </nav>

      <div class="space-y-4 col-span-3 col-start-9">
        <h4 class="font-bold uppercase text-yellow-500">Newsletter</h4>
        <form>
          <div class="flex ">
            <input type="email" placeholder="Votre email" class="flex-grow py-2 px-4 rounded-l-lg focus:outline-none focus:ring focus:border-yellow-300" required>
            <button type="submit" class="py-2 px-4 bg-yellow-500 text-black rounded-r-lg hover:bg-yellow-600 font-semibold">S'abonner</button>
          </div>
        </form>
      </div>
  
      
    </footer>
  </template>