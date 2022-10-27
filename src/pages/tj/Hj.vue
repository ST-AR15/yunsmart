<template>
  <div class="hj">
    <div class="hj-zoom"></div>
    <div class="hj-zoom"></div>
    <div class="hj-zoom"></div>
    <div class="hj-zoom"></div>
    <div class="hj-zoom"></div>
    <div class="hj-zoom"></div>
    <div class="hj-zoom"></div>
    <div class="hj-zoom"></div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.hj {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(2, calc(50% - 10px));
  grid-template-rows: repeat(4, calc(25% - 15px));
  grid-auto-flow: column;
  grid-gap: 20px;
}
.hj-zoom {
  background-color: aqua;
}
</style>