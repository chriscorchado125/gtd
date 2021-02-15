<template>
  <transition name="fade">
    <div id="preloader" class="center-text">
      <h1>gtd.</h1>
      <h2>is Loading</h2>
      <img src="./../assets/images/loading-min.gif" alt="Loading..." height="200" />
    </div>
  </transition>
</template>

<style scoped lang="scss">
  #preloader {
    padding: 10px;
    color: $grey;

    h1 {
      font-size: 60px;
    }

    h2 {
      font-size: 40px;
      color: $grey;
    }
  }
</style>
