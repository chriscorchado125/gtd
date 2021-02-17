<template>
  <div class="home">
    <Header />
    <LandingPage />
    <Footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import Header from '@/components/Header.vue';
import LandingPage from '@/components/pages/LandingPage.vue';
import Footer from '@/components/Footer.vue';

@Component({
  components: {
    Header,
    LandingPage,
    Footer,
  },
})

export default class Home extends Vue {
  mounted() {
    this.checkIfLoaded();
  }

  updated() {
    this.checkIfLoaded();
  }

  checkIfLoaded() {
    const curr = this.$store.state.loaded;
    // eslint-disable-next-line
    const preloaderEl = document.getElementById('preloader')!;

    window.onload = () => {
      if (curr.includes('header') && curr.includes('landing') && curr.includes('footer')) {
        this.$store.commit('setLoaded', true);
        preloaderEl.style.display = 'none';
      } else {
        this.$store.commit('setLoaded', false);
        preloaderEl.style.display = 'block';
      }
    };
  }
}
</script>

<style lang="scss">
  @font-face {
    font-family: "Roboto-Black";
    src: local("Roboto-Black"), url(./../assets/fonts/Roboto/Roboto-Black.ttf)
      format("truetype");
    font-weight: 900;
    font-display: swap;  // use fallback font to display until custom font has downloaded
  }
  @font-face {
    font-family: "Roboto-Regular";
    src: local("Roboto-Regular"), url(./../assets/fonts/Roboto/Roboto-Regular.ttf)
      format("truetype");
    font-weight: 400;
    font-display: swap;
  }

  html, body {
    max-width: 1100px;
    margin: auto;
    font-family: "Roboto-Regular", sans-serif;
  }

  .screen-reader {
    position: absolute;
    left: -10000px;
    top: auto;
    width: 1px;
    height: 1px;
    overflow: hidden;
  }

  a:link {
    text-decoration: none;
  }

  .bold {
    font-family: "Roboto-Black", sans-serif;
  }

  .center-text {
    text-align:center;
  }

  .container {
    margin-bottom: 50px;
  }
</style>
