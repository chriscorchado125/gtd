<template>
  <div class="home">

    <span v-if="siteNotLoaded" >
      <Preloader />
    </span>

    <span v-else>
      <Header />
      <LandingPage />
      <Footer />
    </span>

  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import Preloader from '@/components/Preloader.vue';
import Header from '@/components/Header.vue';
import LandingPage from '@/components/pages/LandingPage.vue';
import Footer from '@/components/Footer.vue';

@Component({
  components: {
    Preloader,
    Header,
    LandingPage,
    Footer,
  },
})

// TODO:  Use state to track loaded items
export default class Home extends Vue {
  siteNotLoaded = true;

  mounted() {
    window.addEventListener('load', () => {
      this.siteNotLoaded = false;
    });
  }
}
</script>
