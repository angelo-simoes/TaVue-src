<script setup>
    import { RouterLink } from 'vue-router';
</script>

<template>
  <div class="relative m-8"> 
    <!-- Image en arrière-plan -->
    <img src="../../public/grande_img_home.jpg" alt="Femme avec des lunettes" class="w-full object-cover h-[550px]">

    <!-- Contenu superposé sur l'image -->
    <div class="absolute bottom-8 left-4 flex flex-col space-y-4 w-1/3"> <!-- Ajout de w-1/2 pour réduire la largeur à 50% -->
      <h2 class="text-center font-semibold text-black text-3xl mb-4 font-merriweather">Notre nouveau modèle personnalisable est là !</h2>
      <button class="bg-black text-white py-4 px-8 uppercase font-bold transition duration-300 self-center">
        <RouterLink to="/prismatique">
          Découvrir <span class="text-xl">&rarr;</span> <!-- Flèche agrandie -->
        </RouterLink>
      </button>
    </div>
  </div>

  <div class="flex flex-col space-y-16 mx-4 md:mx-28 p-8 grille">
    <hr class="bg-gray-500 my-0">
    <div class="flex flex-col items-center justify-center md:flex-row md:space-x-4">
  <img src="../../public/lunette1.jpg" alt="Image 1" class="w-full h-auto md:w-1/3 md:max-h-screen mb-4 md:mb-0">
  <img src="../../public/lunette2.jpg" alt="Image 2" class="w-full h-auto md:w-1/3 md:max-h-screen mb-4 md:mb-0">
  <img src="../../public/lunette3.jpg" alt="Image 3" class="w-full h-auto md:w-1/3 md:max-h-screen">
</div>


    <div class="text-center">
            <p class="text-xl lg:text-xl font-bold mb-4 font-merriweather text-yellow-600">Parce que chaque visage est unique.</p>
            <p class="text-base lg:text-xl mx-28">
              Chez TaVue, nous croyons que chaque visage mérite une paire de lunettes qui le met en valeur de manière unique.
            </p>
            <p class="text-base lg:text-xl mx-28 mt-4">
              Découvrez l'harmonie parfaite entre élégance intemporelle et personnalisation sans limites. Chaque paire est pensée pour vous, par vous et reflète classe et distinction tout en embrassant votre individualité.
            </p>
        </div>

        <hr class="bg-gray-500 my-0">


        
    <div class="text-center">
        <p class="text-xl lg:text-4xl font-bold mb-4 font-merriweather text-yellow-600">Imposer votre vision au monde entier.</p>
    </div>

    <hr class="bg-gray-500 my-0">

    <div class="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4">
      <img src="../../public/img_home_1.jpg" alt="Homme avec lunette" class="w-full md:w-1/2">
      <img src="../../public/img_home_2.jpg" alt="Femme avec lunette" class="w-full md:w-1/2">
    </div>

  </div>

  <div class="relative mt-16">
    <!-- Image en arrière-plan -->
    <img src="../../public/bg-opticien-recom.jpg" alt="Opticien magasin" class="w-full object-cover h-[550px]">

    <!-- Filtre noir avec opacité -->
    <div class="absolute top-0 left-0 w-full h-[550px] bg-black bg-opacity-70"></div>

    <!-- Contenu superposé sur l'image -->
    <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center space-y-4 w-1/2">
        

      <h3 class="text-center font-black text-white text-5xl mb-4 font-sans uppercase">CONSEILLER PAR LES OPTICIENS</h3>
        <!-- Photo de profil -->
        <img src="../../public/opticien-pp.png" alt="Opticien" class="w-32 h-32 rounded-full mb-4  shadow-lg">
        
        <p class="text-center font-light text-white text-xl mb-4 font-sans">Les lunettes TaVue offre une garantie de qualité sur ses produits par sa fabrication en France. Offrez le meilleur pour vos yeux !</p>
        <p class="text-center font-medium text-white text-xl mb-4 font-sans">Christophe Ravanelli - Opticien</p>
        
      
    </div>
</div>






</template>
