<script setup>
import PocketBase from 'pocketbase'
import { useRouter } from 'vue-router';
  const router = useRouter()
let isConnected = ref(false)
var pocketbase_ip = "";
if (import.meta.env.MODE === "production")
    pocketbase_ip = "https://www.tavue.angelo-simoes.fr:443"; 
else pocketbase_ip = "http://127.0.0.1:8090";
const pb = new PocketBase(pocketbase_ip);
let currentUser = ref(null)
let email = ref('')
let password = ref('')

import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import Logo from './icons/Logo.vue';
import LogoBlanc from './icons/LogoBlanc.vue';
import iconAccount from './icons/iconAccount.vue';
import iconCart from './icons/iconCart.vue';

const activeMenu = ref(false);
const showModal = ref(false);


const closeMenu = () => {
    activeMenu.value = false;
}

const isSignupMode = ref(false);

// Exportez directement la fonction

const refresh = ()=>{
  if(pb.authStore.isValid){
    currentUser.value = pb.authStore.model
    isConnected.value = true

   /* avatar.value =
      "http://127.0.0.1:8090/api/files/"  // Adresse serveur et repertoire des fichiers image
      +currentUser.value.collectionId     // Id ou name de la collection concernée
      +"/"
      +currentUser.value.id               // Id de l'utilisateur connecté
      +"/"
      +currentUser.value.avatar           // Nom fichier image pocketbase
      +"?thumb=100x100"    */               // Taille par défaut     

//      console.log("image avatar utilisateur", avatar)
  }
}

const loginGithub = async () => {
    await pb.collection("users").authWithOAuth2({ provider: "github" });
    if (pb.authStore.isValid) {
        isConnected.value = true;
        currentUser.value = pb.authStore.model;
    }
};

const login = async()=>{
  try{
    const authData = await pb.collection('users')
    .authWithPassword(email.value, password.value)
//    console.log("connecté : ",authData)
    refresh()    
  }catch(error){

  }
}

const register = async () => {
    currentUser = await pb.collection("users").create({
        email: email.value,
        name: document.getElementById("nom").value,
        username: document.getElementById("prenom").value,
        password: password.value,
        passwordConfirm: password.value,
    });
    if (currentUser) {
                await login();
            }
    
};


const logout = ()=>{
  // Suppression utilisateur connecté
  pb.authStore.clear()
  isConnected.value=false
 // avatar.value = null
  // Retour à la page d'accueil -> Redirection
  router.push({name:"home"})
}
</script>


<template>
 <header class="flex items-center justify-between px-4 h-20 border-b-2 border-b-indigo-100 gap-8 lg:py-0 grille mx-1">
      <RouterLink class="ml-10" to="/">
        <Logo/>
      </RouterLink>



      <button class="relative z-20 flex h-5 w-8 flex-col justify-between lg:hidden"  @click="activeMenu = !activeMenu">
            <span class="block ease h-[2px] w-full transform rounded-full bg-black transition duration-300" :class="{ 'translate-y-[9px] rotate-45 bg-black': activeMenu }"></span>
            <span class="block ease h-[2px] w-full transform rounded-full bg-black transition duration-300" :class="{ 'bg-black opacity-0': activeMenu }"></span>
            <span class="block ease h-[2px] w-full transform rounded-full bg-black transition duration-300"  :class="{ '-translate-y-[9px] -rotate-45 bg-black': activeMenu }"></span>
      </button> 


      <nav
            class="z-10 invisible opacity-0 fixed inset-0 h-screen w-screen bg-slate-50 text-2xl text-black transition-all duration-300 ease-in-out lg:visible lg:relative lg:flex lg:h-auto lg:w-auto lg:items-center lg:bg-transparent lg:text-sm lg:font-bold lg:uppercase lg:tracking-wide lg:text-black lg:opacity-100"
            :class="{ '!visible opacity-100': activeMenu }"
        >
        <ul class="mt-[25vh] ml-16 lg:m-0 lg:flex" > 
                <li class="menu-item-black"><RouterLink to="/prismatique" @click="closeMenu" class="menu-link">Personnalisation</RouterLink></li>
                <li class="menu-item-black"><RouterLink to="/about" @click="closeMenu" class="menu-link">À propos</RouterLink></li>
	    </ul>
      <ul class="mt-[25vh] ml-16 lg:m-0 lg:flex"> 
                <li class="menu-item-black"><RouterLink to="#"  class="menu-link"><iconCart/></RouterLink></li> 

                <span v-if="isConnected" class="flex items-center"> <!-- Direction de flexbox modifiée en ligne -->
                    <li class="flex flex-col items-center mr-4 mt-[-30px]"> <!-- Ajout de margin-right pour espacer de l'icône -->
                        <button class="menu-item-black menu-link mt-[-4px]">
                          <RouterLink to="/compte">
                            <iconAccount/>
                        </RouterLink>

                            
                        </button>
                        <span class="mt-[-40px] text-sm">{{ currentUser.username }} </span>
                    </li>
                    <button class="btn btn-dark menu-item-black menu-link" type="button" @click="logout()">LogOut</button>
                </span>


                  <span v-else>
                      <li class="flex flex-col items-center"> <!-- Direction de flexbox modifiée en colonne -->
                          <button @click="showModal = true" class="menu-item-black menu-link mt-[-4px]">
                              <iconAccount/>
                          </button>
                          <span class="mt-[-40px] text-sm">Login</span> <!-- Ajout de margin-top pour espacer du bouton -->
                      </li>
                  </span>

 
	    </ul>

		  </nav>

  </header>

        <!-- Modale -->
        
  <div v-if="showModal" class="fixed z-10 inset-0 overflow-y-auto flex items-center justify-center mt-[-720px]">
        <div class="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
          <div @click="showModal = false" class="fixed inset-0 transition-opacity">
              <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>
          <span class="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>
          <div class="inline-block align-middle bg-black rounded-lg shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full flex">
              
              <!-- Image Section -->
              <div class="bg-cover bg-center">
                <img class="border-black rounded" src="../../public/img-popup.jpg" alt="Femme">
              </div>

              <!-- Content Section -->

              <div class=" px-32 py-8 text-white ">
<!--Connexion-->
                <div v-if="isSignupMode">
                  <div class="flex justify-center mb-8">
                  <LogoBlanc/>
                </div>

                  <h3 class="text-lg leading-6 font-medium mb-6">Heureux de vous revoir !</h3>
                  
                  <!-- Signup Form -->
                  <form>
                      <div class="mb-4">
                          <label class="block text-sm font-bold mb-2 text-left" for="email">
                              Email
                          </label>
                          <input v-model="email" class="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email">
                      </div>
                      <div class="mb-6">
                          <label class="block text-sm font-bold mb-2 text-left" for="password">
                              Mot de passe
                          </label>
                          <input v-model="password" class="shadow appearance-none border rounded w-full py-2 px-3 text-black mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************">
                      </div>
                      <div class="text-center mt-4"> <!-- Ajout de la classe text-center pour centrer le contenu -->
                        <button @click="showModal = false" @click.prevent="login" class="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            Se Connecter
                        </button>
                    </div>
                  </form>
                  <p class="font-medium mt-4">Pas encore membre ?<strong class="font-sans font-medium text-yellow-500 " @click="isSignupMode = !isSignupMode"> S'inscrire</strong></p>
                </div>
<!--Inscription-->
                <div v-else>
                  <div class="flex justify-center mb-2">
                  <LogoBlanc/>
                </div>

                  <h3 class="text-lg leading-6 font-medium mb-2">Rejoignez-nous !</h3>
                  
                  <!-- Signup Form -->
                  <form>
                      <div class="mb-2">
                          <label class="block text-sm font-bold mb-2 text-left" for="email">
                              Email
                          </label>
                          <input v-model="email" class="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email">
                      </div>
                      <div class="mb-2">
                          <label class="block text-sm font-bold mb-2 text-left" for="prenom">
                              Prénom
                          </label>
                          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" id="prenom" type="text" placeholder="Prénom">
                      </div>
                      <div class="mb-2">
                          <label class="block text-sm font-bold mb-2 text-left" for="nom">
                              Nom
                          </label>
                          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" id="nom" type="text" placeholder="Nom">
                      </div>
                      <div class="mb-2">
                          <label class="block text-sm font-bold mb-2 text-left" for="password">
                              Mot de passe
                          </label>
                          <input v-model="password" class="shadow appearance-none border rounded w-full py-2 px-3 text-black mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************">
                      </div>
                      <div class="text-center mt-2"> <!-- Ajout de la classe text-center pour centrer le contenu -->
                        <button @click="showModal = false" v-on:click="register()" class=" bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            S'inscrire
                        </button>
                    </div>
                  </form>
                  <p class="font-medium mt-2">Déjà inscris ?<strong class="font-sans font-medium text-yellow-500 " @click="isSignupMode = !isSignupMode"> Se connecter</strong></p>
                </div>

                  <div class="text-center mt-2"> <!-- Ajout de la classe text-center pour centrer le contenu -->
                        <hr class="mt-2 ">
                        <p class="uppercase mt-2">où</p>
                        <hr class="mt-2">
                        <button v-on:click="loginGithub()" class="mt-2 bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            Github
                        </button>
                  </div>
              </div>
          </div>
      </div>
  </div>

</template>