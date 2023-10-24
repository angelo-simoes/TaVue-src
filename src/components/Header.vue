<script setup>
    const activeMenu = ref(false)
    import { RouterLink } from 'vue-router';
    import Logo from './icons/Logo.vue'
    import iconAccount from './icons/iconAccount.vue'
    import iconCart from './icons/iconCart.vue'
    import { ref,computed, watch } from 'vue';
    function closeMenu() {
	  activeMenu.value = false
	}
</script>

<template>
 <header class="flex items-center justify-between px-4 h-20 border-b-2 border-b-indigo-100 gap-8 lg:py-0 grille mx-16">
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
        <ul class="mt-[25vh] ml-16 lg:m-0 lg:flex"> 
                <li class="menu-item-black"><RouterLink to="#" @click="closeMenu" class="menu-link">Personnalisation</RouterLink></li>
                <li class="menu-item-black"><RouterLink to="#" @click="closeMenu" class="menu-link">À propos</RouterLink></li>
	    </ul>
      <ul class="mt-[25vh] ml-16 lg:m-0 lg:flex"> 
                <li class="menu-item-black"><RouterLink to="#"  class="menu-link"><iconCart/></RouterLink></li> 
                <li class="menu-item-black"><RouterLink to="#"  class="menu-link"><iconAccount/></RouterLink></li> 
	    </ul>
		</nav>

  </header>
</template>