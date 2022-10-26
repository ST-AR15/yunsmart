<template>
  <div class="p7">
    <div class="p7-zoom1"></div>
    <div class="p7-zoom2"></div>
    <div class="p7-zoom3"></div>
    <div class="p7-zoom4"></div>
    <div class="p7-zoom5"></div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.p7 {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 25% 25% 25% 25%;
  grid-auto-flow: column;
  grid-gap: 20px;
}
.p7 > div {
  background-color: aqua;
}
.p7-zoom5 {
  grid-row: 1/5;
}
</style>