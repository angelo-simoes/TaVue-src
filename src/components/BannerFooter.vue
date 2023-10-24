<script setup lang="ts">
  import iconFrance from './icons/iconFrance.vue'
  import iconGuarantee from './icons/iconGuarantee.vue'
  import iconPackage from './icons/iconPackage.vue'
</script>

<template>
  <div class="bg-gray-100 py-8 mt-12 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 md:space-x-6 lg:space-x-64 grille">

    <div class="flex flex-col items-center mb-4 sm:mb-0">
      <iconPackage />
      <span class="mt-2 font-bold font-merriweather text-lg">Livraison & retours gratuits</span>
      <span class="text-center text-sm text-gray-600 font-sans">Profitez de la livraison et des retours gratuits pour toutes commandes au-delà de 150€.</span>
    </div>

    <div class="flex flex-col items-center mb-4 sm:mb-0">
      <iconGuarantee />
      <span class="mt-2 font-bold font-merriweather text-lg">Garantie</span>
      <span class="text-center text-sm text-gray-600 font-sans">Tous nos produits sont garanties 5 ans.</span>
    </div>

    <div class="flex flex-col items-center">
      <iconFrance  />
      <span class="mt-2 font-bold font-merriweather text-lg">Made in France</span>
      <span class="text-sm text-gray-600 text-center font-sans">Nos lunettes sont assemblées avec minutie en France dans nos ateliers.</span>
    </div>

  </div>
</template>
