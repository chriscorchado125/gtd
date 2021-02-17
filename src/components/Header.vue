<template>
  <header id="site-header" v-if="this.$store.state.isLoaded">
    <nav>
      <router-link to="/">
        <!--img src="./../assets/images/header/gtd_logo-min.png"
          id="site-logo-image" alt="gtd Logo" height="18" /-->
          <div id="site-logo-text">gtd.</div>
      </router-link>

      <div id="site-search">
        <form id="search-form" onsubmit="alert('Search is not configured');
          return false;" role="search">

          <label for="search-site">
            <span class="screen-reader" aria-hidden="true">Enter search term</span>

            <input type="search" placeholder="Search" id="search-site"
              aria-label="Enter search term" aria-required="true"
              maxlength="128" />
          </label>

        </form>
      </div>

    </nav>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Header extends Vue {
  mounted() {
    this.$store.commit('setLoadedItems', 'header');
  }
}
</script>

<style scoped lang="scss">
  #site-header {
    width: 100%;
    position: fixed;
    max-width: 1100px;
    background-color: $grey;
    height: 35px;

    nav {
      max-width: 610px;
      margin: auto;

      #site-logo-image {
        margin: 9px 0 0 5px;
      }

      #site-logo-text {
        display: inline-block;
        width: 40px;
        color: #fff;
        font-size: 20px;
        margin: 4px 0 0 5px;
      }
    }
  }
</style>
