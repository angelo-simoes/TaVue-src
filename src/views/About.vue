<script setup>  
import MapOSM from "../components/MapOSM.vue";
</script>
<template>
    <div class="flex flex-col space-y-16 mx-4 md:mx-28 p-8 grille">
  
      <!-- Section avec texte à gauche et image à droite -->
      <div class="flex flex-col justify-between items-center gap-16 lg:flex-row">
        <div class="w-1/2">
          <h1 class="text-xl lg:text-3xl font-bold mb-4 font-merriweather">Notre histoire</h1>
          <p class="text-base lg:text-l">
            Née de la passion pour l'élégance et de l'ambition de redéfinir la manière dont nous percevons le monde, TaVue a été créée pour offrir plus qu'une simple paire de lunettes. Nous croyons fermement que chaque visage mérite une paire de lunettes qui le met en valeur de manière unique. C'est cette conviction qui nous a poussés à concevoir des lunettes alliant élégance intemporelle et personnalisation.
          </p>
        </div>
        <div class="w-1/2">
          <img src="../../public/img_femme_about.jpg" alt="Femme à lunette" class="max-w-full h-auto">
        </div>
      </div>
  
      <!-- Nouvelle section avec image à gauche et texte à droite -->
      <div class="flex flex-col-reverse lg:flex-row justify-between items-center gap-16">
        <div class="w-1/2">
          <img src="../../public/img_homme_about.jpg" alt="Homme à lunette" class="max-w-full h-auto">
        </div>
        <div class="w-1/2">
          <h1 class="text-xl lg:text-3xl font-bold mb-4 font-merriweather">Le Savoir-Faire Français</h1>
          <p class="text-base lg:text-l">
            Nous sommes fiers de mettre en avant le label "Made in France". Chaque paire est conçue avec soin, reflétant le riche héritage d'artisanat et de sophistication pour lequel la France est renommée. Ce label n'est pas qu'un gage de qualité, c'est une promesse : chaque monture est une œuvre d'art, faite pour durer et pour vous accompagner dans tous vos moments.
          </p>
        </div>
      </div>

      <hr>

        <div class="text-center">
            <p class="text-xl lg:text-3xl font-bold mb-4 font-merriweather text-yellow-600">Rejoignez Notre Vision</p>
            <p class="text-base lg:text-xl mx-28">
                Nous ne sommes pas simplement une entreprise de lunetterie. Nous sommes une communauté de visionnaires, unis par l'amour du design et de l'individualité. En choisissant TaVue, vous ne choisissez pas seulement une paire de lunettes, vous rejoignez une vision du futur où chaque individu est célébré pour sa singularité.
            </p>
        </div>

        <div class="text-center">
            <p class="text-xl lg:text-3xl font-bold mb-4 text-yellow-600">133 Rue du Faubourg Saint-Antoine, 75011 Paris</p>
<MapOSM/>
        </div>


  
    </div>
  </template>
  