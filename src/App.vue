<script setup>
  // Import éléments de vue
  import { ref, onMounted } from 'vue';
  // Import éléments de routage
  import { useRouter } from 'vue-router';
  const router = useRouter()
  
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Banner from "./components/Banner.vue";
import BannerFooter from "./components/BannerFooter.vue";
import PocketBase from "pocketbase";
</script>

<template>
  <Header/>
  <Banner/>

  <RouterView />
  <BannerFooter/>
  <Footer/>

</template>


