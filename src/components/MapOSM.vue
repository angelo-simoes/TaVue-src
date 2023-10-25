<script setup>
    // import éléments de vue
    import { onMounted, ref } from 'vue'
    // Import Leaflet
    import * as Leaflet from 'leaflet'
    // css leaflet
    import 'leaflet/dist/leaflet.css'

    // Leaflet routing machine
    import 'leaflet-routing-machine'
    import 'leaflet-routing-machine/dist/leaflet-routing-machine.css'

    // Canevas pour la carte
    let tileLayer = Leaflet.tileLayer
    // Initialisation de la carte sous forme d'une ref
    let map = ref()
    
    // Coordonnées de l'utilisateur
    let coordMe = ref({
        latitude : 0,
        longitude : 0
    })

    let marker = ref(null);

    // Points de localisation
    let depart = ref({
        adr : null,
        latlng : []
    })

    let arrivee = ref({
        latlng : [48.862725, 2.287592]
    })

    // Liste adresses proposées
    let lstAdr = ref()

    // 1 : Depart, 2 arrivée
    let type = ref()

    // Controle de calcul du parcours
    let routingControl = null

    // Markers
    let mDepart = null
    let mArrivee = null

    // Lorsque le composant est monté dans la vue
    onMounted( async ()=> {
        // Caractérisitques de la carte
        tileLayer = Leaflet.tileLayer('https://{s}.tile.osm.org/{z}/{x}/{y}.png',
        {
          attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }
      );

      // Création de la carte sur la div ayant l'id = 'map'
      map = Leaflet.map('map',
        {
            zoomControl: true, // Contrôle de Zoom
            layers: [tileLayer], // Canevas pour dessiner la carte
            maxZoom: 18,        // Zoom maxi autorisé
            minZoom: 6          // Zoom mini autorisé
        })
        // projetction de la carte avec centrage aux coordonnées indiquées, avec facteur d'agrandissement
        .setView([48.862725, 2.287592], 17)

        // Création d'un icone
        let myIcon = Leaflet.icon({
            iconUrl:    '../../public/marker-icon.png',       // Image de l'icone
            shadowUrl:  '../../public/marker-shadow.png',     // Ombre de l'icone
            iconSize:   [25, 41],                       // Taille de l'icone
            shadowSize: [25, 41],                       // Taille de l'ombre de l'icone
            iconAnchor: [-10,-10],                      // Ancrage de l'icone
            shadowAnchor: [-10,-10],                    // Ancrage de l'ombre de l'icone
            popupAnchor: [0, 0]                         // Point de position de la popup si elle existe
        })

        // Ajout d'un marqueur
        marker.value = Leaflet.marker([48.862725, 2.287592], {icon: myIcon}).addTo(map);
        
        //let marker = Leaflet.marker([48.862725, 2.287592], {icon: myIcon}).addTo(map)

        // Ajouter une popup / infobulle
        //marker.bindPopup('Boutique TaVue')


    }) // Fin onMounted

        // Vérification entrée pour adresses saisies
        const verif = async (point, t) => {
        type.value = t
        try{
            const response = await fetch("https://api-adresse.data.gouv.fr/search/?q="+point.adr)
            lstAdr.value = await response.json()
        }catch(error){
            console.log('Erreur lors de la récupération des adresses : ',error)
        }
    }

        // Calcul des trajets
        const calculateRoute = () => {
               // Suppression du marqueur si il existe
    if(marker.value) {
        marker.value.remove();
    }
        routingControl = Leaflet.Routing.control({
            waypoints : [
                Leaflet.latLng(depart.value.latlng[0], depart.value.latlng[1]), // départ                
                Leaflet.latLng(arrivee.value.latlng[0], arrivee.value.latlng[1]), // arrivée
            ],
            language: 'fr' // langue désirée
        })
        .addTo(map)
        console.log("routingControl", routingControl)        
    }

        // Selection d'une adresse dans la liste des adresses proposées
        const selectAdr = (adr) => {

if(type.value == 1){ // départ
    depart.value.adr = adr.properties.label
    depart.value.latlng = [
        adr.geometry.coordinates[1],
        adr.geometry.coordinates[0]
    ]
    // Position du marker
    mDepart = Leaflet.marker(depart.value.latlng).addTo(map)
    // RAZ lstAdr
    lstAdr.value = null
    // Position carte sur la marker
    map.panTo(depart.value.latlng, 17)
}else{ // Arrivée

    // Position du marker
    mArrivee = Leaflet.marker(48.862725, 2.287592).addTo(map)
    // RAZ lstAdr
    lstAdr.value = null
    // ajout au groupe de markers depart et arrivee
    let markerGroup = new Leaflet.featureGroup([mDepart, mArrivee])
    // Utilisation de la fonction setBounds pour ajuster la vue de la carte afin d'englober tous les marqueurs
    map.fitBounds(markerGroup.getBounds())
}
}

</script>


<template>
    <div class="container mx-auto text-black">
  
      <h5 class="mb-4">Calculez votre distance par rapport à notre boutique !</h5>
  
      <table class="w-full border-collapse">
  
        <thead>
          <tr>
            <th class="border-b-2 p-2">Départ</th>
            <th class="border-b-2 p-2">Calcul</th>
          </tr>
        </thead>
  
        <tbody>
          <tr>
            <td class="p-2">
              <div class="flex items-center">
                <input class="border rounded-l px-3 py-2 w-full" type="text" v-model="depart.adr" />
                <button class="bg-blue-500 hover:bg-blue-700 text-white rounded-r px-4 py-2" @click="verif(depart, 1)">
                  Voir
                </button>
              </div>
            </td>
            <td class="p-2">
              <button class="bg-blue-500 hover:bg-blue-700 text-white w-full py-2 rounded" @click="calculateRoute">
                Voir l'itinéraire
              </button>
            </td>
          </tr>
          <tr>
            <td colspan="3" class="p-2">
              <div class="mt-2">
                <ul v-if="lstAdr">
                  <li
                    v-for="(rue, index) in lstAdr.features"
                    :key="index"
                    class="list-group-item list-decimal px-3 py-2 border rounded mb-2 hover:bg-gray-200 cursor-pointer"
                    @click="selectAdr(rue)"
                  >
                    {{ rue.properties.label }}
                  </li>
                </ul>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
  
      <div class="container mx-auto mt-4">
        <div id="map"></div>
      </div>
  
    </div>
  </template>
  
  <style scoped>
  #map{
      width:100%;
      height: 70vh;
  }
  </style>
  