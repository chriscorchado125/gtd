<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
  @font-face {
    font-family: "Roboto-Black";
    src: local("Roboto-Black"), url(./assets/fonts/Roboto/Roboto-Black.ttf) format("truetype");
    font-weight: 900;
    font-display: swap;  // use fallback font to display until custom font has downloaded
  }

  @font-face {
    font-family: "Roboto-Regular";
    src: local("Roboto-Regular"), url(./assets/fonts/Roboto/Roboto-Regular.ttf) format("truetype");
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
