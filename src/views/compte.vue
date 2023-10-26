  <script setup>
  import { ref, onMounted } from 'vue';

  let isConnected = ref(false)

  import PocketBase from 'pocketbase';
  var pocketbase_ip = "";
  if (import.meta.env.MODE === "production")
      pocketbase_ip = "https://www.tavue.angelo-simoes.fr:443"; 
  else pocketbase_ip = "http://127.0.0.1:8090";
  const pb = new PocketBase(pocketbase_ip);

  let currentUser = ref(null);  // pour stocker les données de l'utilisateur
  if(pb.authStore.isValid){
    currentUser.value = pb.authStore.model
    isConnected.value = true
  }

  console.log("Utilisateur:", currentUser.value);
/*
  const listLunetteCommande = async () => {
    const listeCommande = await pb.collection('lunette').getFullList({
        couleur_cadre,
        couleur_branche,
        couleur_verre,
    });

    //console.log("Liste des lunettes commandées:", listeCommande);
}*/
  </script>

  <template>
        <div class="flex flex-col mx-4 md:mx-28 pt-8 grille" v-if="isConnected">
          <p class="font-semibold">Email : {{ currentUser.email }}</p>
          <p class="font-semibold">Username : {{ currentUser.username }}</p>
        </div>

        <div class="flex flex-col mx-4 md:mx-28 pt-8 grille" v-else>
            <p>Vous n'êtes pas connecté</p>
        </div>
  </template>


