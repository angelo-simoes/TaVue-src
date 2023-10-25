<script setup>
    import { RouterLink } from 'vue-router';
    import iconPerso from "../components/icons/iconPerso.vue";
    import iconStars from "../components/icons/iconStars.vue";
</script>
<template>
  <div class="flex flex-col space-y-16 mx-2 md:mx-28 p-8 grille">

              <!-- Section avec texte à gauche et image à droite -->
    <div class="flex flex-col justify-between items-center gap-16 lg:flex-row">

        <div class="w-1/3 text-center border-2 rounded-2xl border-black px-8 py-16">
            <h2 class="text-xl lg:text-3xl font-bold mb-4 font-merriweather">La Prismatique</h2>
            <p class="text-xl lg:text-sm font-regular mb-4">Le modèle intemporelle de TaVue façonné selon votre vision de la vie.</p>
            <div class="text-left">
                <p class="line-through text-xl font-extrabold text-black font-merriweather">250€</p>
                <p class="text-3xl font-extrabold text-yellow-600 font-merriweather">199€</p>
            </div>

            <div class="flex items-center space-x-2 md:space-x-4 lg:flex-row mt-4">
                <iconStars />
                <p>21 avis</p>
            </div>


            <!-- Conteneur pour les boutons -->
            <div class="flex flex-col space-y-4 w-full mt-8">
                <button class="w-full border-2 rounded-2xl border-black text-black px-8 uppercase font-bold">
                    <RouterLink to="/prismatique" class="flex items-center justify-center">
                        <iconPerso class="mr-2"/>
                        Personnaliser
                    </RouterLink>
                </button>

                <button class="w-full bg-yellow-500 text-white py-4 px-8 uppercase font-bold transition duration-300">
                    <RouterLink to="/prismatique" class="flex items-center justify-center">
                        Ajouter au panier
                    </RouterLink>
                </button>
            </div>
        </div>

            <div class="w-3/5">
                <!-- Fond noir décalé -->
                <img src="../../public/img-spec-produit.jpg" alt="Femme à lunette" class="w-full h-auto relative z-10">
            </div>
        </div>

    <hr class="bg-gray-500 my-0">
    <div class="text-center">
        <p class="text-base lg:text-xl mt-4">
            Découvrez la <strong class="text-yellow-500">Prismatique</strong>, alliant élégance et raffinement à la perfection. Conçues pour ceux qui ne veulent pas simplement porter des lunettes, mais pour ceux qui veulent une pièce unique et à part entière de votre style.
        </p>
    </div>
    <hr class="bg-gray-500 my-0">

          <!-- Section avec texte à gauche et image à droite -->
          <div class="flex flex-col justify-between items-center gap-16 lg:flex-row">
            <div class="w-1/2">
                <h4 class="text-xl lg:text-xl font-bold mb-4 font-sans">Spécificités :</h4>
                <ul class="list-disc pl-5 space-y-2">
                    <li>
                        <strong>Verres :</strong> Protection UV 100%, avec possibilité de polarisation ou de teinte dégradée.
                    </li>
                    <li>
                        <strong>Charnières :</strong> Métalliques renforcées pour un ajustement flexible et résistant.
                    </li>
                    <li>
                        <strong>Couleur de la monture :</strong> Choisissez parmi une palette de 10 couleurs tendances.
                    </li>
                    <li>
                        <strong>Qualité :</strong> Profiter de la qualité Made In France de nos lunettes.
                    </li>
                </ul>
            </div>
            <div class="w-2/5 relative">
                <!-- Fond noir décalé -->
                <div class="absolute top-16 right-[-32px] bottom-[-32px] left-16 bg-black"></div>
                <img src="../../public/img-spec-produit.jpg" alt="Femme à lunette" class="w-full h-auto relative z-10">
            </div>
        </div>

    
    <div class="flex flex-col justify-center items-center h-full">
        <p class="text-xl lg:text-4xl font-bold font-merriweather text-yellow-500 mb-12">Partage ton style.</p>
        <div class="flex flex-col md:space-y-0 md:flex-row md:space-x-12 justify-center items-center space-y-8">
            <img src="../../public/img_homme_product.jpg" alt="Homme avec lunette" class="max-w-full md:w-2/5">
            <img src="../../public/img_femme_product.jpg" alt="Femme avec lunette" class="max-w-full md:w-2/5">
        </div>
    </div>


    
  </div>


</template>