<template>
  <div class="nh">
    <div class="nh-zoom1"></div>
    <div class="nh-zoom2"></div>
    <div class="nh-zoom3"></div>
    <div class="nh-zoom4"></div>
    <div class="nh-zoom5"></div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.nh {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(2, calc(50% - 10px));
  grid-template-rows: repeat(4, calc(25% - 15px));
  grid-auto-flow: column;
  grid-gap: 20px;
}
.nh > div {
  background-color: aqua;
}
.nh-zoom5 {
  grid-row: 1/5;
}
</style>