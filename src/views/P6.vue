<template>
  <div class="p6">
    <div class="p6-zoom1"></div>
    <div class="p6-zoom2"></div>
    <div class="p6-zoom3"></div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.p6 {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 25% 75%;
  grid-gap: 20px;
}
.p6-zoom1 {
  grid-column: 1/2;
  border: 4px solid blue;
}
.p6-zoom2 {
  grid-column: 2/3;
  border: 4px solid blue;
}
.p6-zoom3 {
  grid-column: 1/3;
  border: 4px solid blue;
  
}
</style>