<template>
  <div class="home">
    <div class="home-view1">
      <div class="home-view1-item"></div>
      <div class="home-view1-item"></div>
      <div class="home-view1-item"></div>
      <div class="home-view1-item"></div>
      <div class="home-view1-item"></div>
      <div class="home-view1-item"></div>
      <div class="home-view1-item"></div>
      <div class="home-view1-item"></div>
    </div>
    <div class="home-view2"></div>
    <div class="home-view3"></div>
  </div>
</template>

<script>

export default {
  name: 'HomeView',
  mounted() {
   
  }
}
</script>

<style>
.home {
  display: grid;
  height: 100%;
  grid-template-areas: 
  "view1 view2"
  "view1 view2"
  "view1 view2"
  "view3 view3";
}
.home-view1 {
  grid-area: view1;
  background-color: rebeccapurple;
}
.home-view1-item {
  background-color: aqua;
}
.home-view2 {
  grid-area: view2;
  background-color: red;
}
.home-view3 {
  grid-area: view3;
  background: #D1BA74;
}
</style>