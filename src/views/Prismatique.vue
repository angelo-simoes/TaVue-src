<script setup>
    import { RouterLink } from 'vue-router';
    import iconPerso from "../components/icons/iconPerso.vue";
    import iconStars from "../components/icons/iconStars.vue";
</script>
<template>
  <div class="flex flex-col space-y-16 mx-2 md:mx-28 p-8 grille">

              <!-- Section avec texte à gauche et image à droite -->
              <div class="flex flex-col md:flex-row justify-between items-center gap-16 mb-[-500px]">

<!-- Contenu textuel (sera en haut sur petit écran, à gauche sur grand écran) -->
<div class="w-full md:w-1/3 text-center border-2 rounded-2xl border-black px-8 py-16 h-auto mt-[-500px]">
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
                    <RouterLink to="/custom" class="flex items-center justify-center">
                        <iconPerso class="mr-2"/>
                        Personnaliser
                    </RouterLink>
                </button>

<!--                 <button class="w-full bg-yellow-500 text-white py-4 px-8 uppercase font-bold transition duration-300">
                    <RouterLink to="/prismatique" class="flex items-center justify-center">
                        Ajouter au panier
                    </RouterLink>
                </button> -->
            </div>
        </div>
        <div class="w-full md:w-3/5">
                <svg class="w-full" xmlns="http://www.w3.org/2000/svg" width="210mm" height="297mm" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 595.28 841.89">
                    <g class="cls-5">

                        <g id="branches">
                        <path class="cls-3" d="m108.83,155.14s49.35-5.57,54.93-8.76,11.14-7.96,19.5-9.55,64.48-11.14,64.48-11.14c0,0,7.16-1.99,17.51,5.57s33.04,31.84,39.4,31.05c6.37-.8,9.55-9.55,7.56-13.53s-40.67-32.75-47.36-34.63c-9.53-2.68-21.89-2.39-37.02,0-15.12,2.39-116.22,23.34-116.22,23.34,0,0-13.13,6.12-2.79,17.66Z"/>
                        <path class="cls-6" d="m308.24,150.76s-.31,6.15-3.98,5.57c-4.97-.78-35.82-33.83-46.17-32.24,0,0,8.53,2.71,18.46,11.64,6.51,5.86,34.42,37.85,31.69,15.03Z"/>
                        <path class="cls-3" d="m374.79,179.65l90.54-29.78s22.13-5.63,25.35-4.02,17.71,30.58,17.71,33.8-2.42,14.01-5.63,14.89c-2.33.64-5.33.11-6.84-4.21-1.41-4.02-6.84-31.73-12.47-31.47s-50.7,15.95-50.7,15.95c0,0-13.28,6.44-18.91,11.27s-32.19,11.27-32.19,11.27c0,0-9.66-7.65-6.84-17.71Z"/>
                        <path class="cls-6" d="m381.34,180.1s102.27-35.19,107.85-31.99c0,0-18.2,2.49-41.76,11.88s-66.09,22.03-66.09,22.03v-1.92Z"/>
                        <path class="cls-6" d="m485.36,158.06s3.26,0,4.98,3.45,9.77,24.71,9.77,24.71c0,0,.77,4.98,5.17-2.68,0,0-3.07,9.56-5.36,6.79s-9.77-26.33-9.77-26.33c0,0-2.87-6.74-4.79-5.94Z"/>
                        </g>
                        <g id="monture">
                        <path class="cls-4" d="m385.31,180.81c-.24-3.41-9.57-5.22-12.71-6.4-3.14-1.18-15.7,1.96-15.7,1.96-12.17-3.14-54.55-9.03-78.88-9.03s-32.57,11.38-35.32,10.99c-2.75-.39-17.27-.78-23.55-1.96-6.28-1.18-5.1-14.13-39.25-26.48-34.14-12.35-68.29-12.42-68.29-12.42-13.35,4.66-6.76,18.49-6.76,18.49l2.05,6.35c4.32,2.03,3.14,10.52,4.71,23.08s7.46,28.65,14.13,38.46c6.67,9.81,31.79,20.8,44.35,21.19s23.55-1.96,31.79-15.31c8.24-13.34,16.88-36.89,16.88-36.89l10.2,1.57s2.91.31,5.35,3.09,4.43,8.03,7.6,17.31c7.56,22.1,25.12,39.25,25.12,39.25,0,0,5.6,7.43,33.44,12.66,23.08,4.34,42.7-2.46,42.7-2.46,17.72-7.17,21.63-44.96,21.63-44.96,0,0,1.83-13.3,7.81-16.65,7.37-4.14,8.27-4.44,12.71-5.32,3.61-.71.24-13.13,0-16.54Zm-194.81,50.51c-9.42,5.1-32.18,7.06-46.31-3.92-14.13-10.99-20.8-30.22-22.76-52.98s7.1-25.23,7.1-25.23c0,0,14.88-.67,34.11,4.03,19.23,4.71,40.42,18.05,40.82,26.69.39,8.63-3.53,46.31-12.95,51.41Zm154.23,24.33c-9.03,4.32-21.47,4.71-31.93,3.92-10.46-.78-37.54-1.57-47.35-31.4,0,0-2.75-14.13-5.1-17.27-2.35-3.14-9.42-14.48-9.42-18.43,0-8.23,7.15-12.97,7.15-12.97,0,0,8.16-5.1,18.75-5.1,10.6,0,64.75,2.75,72.21,12.95,7.46,10.2,7.06,21.98,8.24,31.4,1.18,9.42-3.53,32.57-12.56,36.89Z"/>
                        </g>
                        <g id="relief_monture" data-name="relief monture">
                        <path class="cls-6" d="m131.17,149.22s-11.31-3.15-13.67,9.65c-2.35,12.8-1.53,30.61,5.49,50.08s26.69,26.46,26.69,26.46c0,0,15.95,5.96,30.61,3.36,7.46-1.32,11.13-4.93,13.3-10.51,0,0-14.39,16.44-47.55.45-6-2.89-10.6-9.49-14.24-15.92-7.04-12.42-10.14-27.67-10.38-38.38-.63-28.36,9.74-25.2,9.74-25.2Z"/>
                        <path class="cls-6" d="m258.09,177.16s-11.86,3.89-10.68,20.19,12.17,36.17,15.31,42.13,15.7,17.21,26.29,20.42,40.51,3.7,52.24-2.83c0,0-32.82,7.72-57.99-5.25,0,0-13.35-7.2-17.14-21.78,0,0-3.01-13.3-5.04-17.89-3.26-7.34-7.38-9.11-10.13-19.67-2.35-9.03,7.15-15.33,7.15-15.33Z"/>
                        <path class="cls-6" d="m253.68,209.74s.78,7.06,8.24,16.88l-8.24-16.88Z"/>
                        <path class="cls-6" d="m238.18,184.26s-6.85,9.04-3.91,10.1,3.91-10.1,3.91-10.1Z"/>
                        <path class="cls-6" d="m210.78,180.93s2.54,12.55,3.91,11.56-3.91-11.56-3.91-11.56Z"/>
                        <path class="cls-6" d="m196.5,232.39s10.63-13.89,18.42-37.18c0,0-13.8,29.24-18.42,37.18Z"/>
                        <path class="cls-6" d="m214.92,180.15s18.36,3.52,23.25,2.15l4.7-2.15s-6.65,1.69-10.57,1.23-17.38-1.23-17.38-1.23Z"/>
                        <path class="cls-6" d="m372.21,187.97s1.19-3.33,2.06,0,0,10.76,0,10.76c0,0-1.67,1.76-2.06,0s0-10.76,0-10.76Z"/>
                        <path class="cls-6" d="m379.84,182.01s-5.24,2.44-7.8,2.24-20.24-4.76-59.84-11.53c0,0,30.98,3.58,59.84,9.89,3.23.71,7.8-.6,7.8-.6Z"/>
                        <path class="cls-6" d="m210.78,177.16s-5.28-13.84-20.54-20.3c-7.88-3.33-15.91-6.09-22.65-8.12-6.32-1.9-11.49-3.15-14.33-3.62-5.87-.98-26.61-4.7-28.76-4.5s-6.46.68-10.57.83-5.48,0-5.48,0c0,0,4.17,2.01,10.96.93,5.32-.84,17.41.98,17.41.98,0,0,54.98,4.99,73.96,33.8Z"/>
                        </g>
                        <g id="verres">
                        <path class="cls-2" d="m116.32,162.87c-.88,6.05.4,37.41,11.44,55.31s37.04,21.35,41.37,21.31,18.51,1.02,24.47-9.27c4.97-8.59,13.17-43.48,9.12-53.05-6.26-14.82-40.4-24.02-40.4-24.02,0,0-26.85-5.46-33.82-4.46,0,0-9.97-.96-12.17,14.17Z"/>
                        <path class="cls-2" d="m247.32,192.54s-1.09-9.55,19.57-16.69c11.76-4.06,60.46,3.23,60.46,3.23,0,0,19.09,4.06,21.71,8.28,2.62,4.22,9.46,17.24,8.29,37.97-1.14,20.21-7.31,26.8-12.61,30.31,0,0-7.1,4.93-21.34,5.93-26.65,1.88-37.01-1.14-46.19-7.73-29.88-21.46-29.88-61.3-29.88-61.3Z"/>
                        <path class="cls-1" d="m337.79,189.34s9.88,1.12,10.74,10.79c0,0-4.73-9.55-10.74-10.79Z"/>
                        </g>
                    </g>
                </svg>  
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