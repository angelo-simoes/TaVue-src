<template>
    <div>
      <!-- Bouton pour ouvrir la modale -->
      <button @click="showModal = true" class="px-4 py-2 bg-blue-500 text-white rounded">
        Ouvrir la modale
      </button>
  
      <!-- Modale -->
      <div v-if="showModal" class="fixed z-10 inset-0 overflow-y-auto">
        <div class="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
          <div @click="showModal = false" class="fixed inset-0 transition-opacity">
            <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>
          
          <span class="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>
          
          <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
            <div class="px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div class="sm:flex sm:items-start">
                <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <h3 class="text-lg leading-6 font-medium text-gray-900">
                    Titre de la modale
                  </h3>
                  <div class="mt-2">
                    <p class="text-sm leading-5 text-gray-500">
                      {{ phrase }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <span class="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
                <button @click="showModal = false" class="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-blue-500 text-base leading-6 font-medium text-white shadow-sm hover:bg-blue-400 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5">
                  Fermer
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        showModal: false,
        phrase: "Ceci est une phrase dynamique"
      }
    }
  }
  </script>
