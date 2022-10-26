<template>
  <div class="p8">
    <div class="p8-zoom"></div>
    <div class="p8-zoom"></div>
    <div class="p8-zoom"></div>
    <div class="p8-zoom"></div>
    <div class="p8-zoom"></div>
    <div class="p8-zoom"></div>
    <div class="p8-zoom"></div>
    <div class="p8-zoom"></div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.p8 {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 25% 25% 25% 25%;
  grid-auto-flow: column;
  grid-gap: 20px;
}
.p8-zoom {
  background-color: aqua;
}
</style>