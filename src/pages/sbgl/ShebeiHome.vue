<template>
  <div class="shebei-home">
    <div class="shebei-home-zoom1">
      <div class="shebei-home-zoom1-charts"></div>
      <div class="shebei-home-zoom1-charts"></div>
      <div class="shebei-home-zoom1-charts"></div>
      <div class="shebei-home-zoom1-charts"></div>
      <div class="shebei-home-zoom1-charts"></div>
      <div class="shebei-home-zoom1-charts"></div>
    </div>
    <div class="shebei-home-zoom2">
      <div class="shebei-home-zoom2-charts"></div>
      <div class="shebei-home-zoom2-charts"></div>
    </div>
    <div class="shebei-home-zoom3"></div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.shebei-home {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 75% 25%;
  grid-gap: 20px;
}
.shebei-home-zoom1 {
  grid-column: 1/2;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  border: 4px solid blue;
  padding: 20px;
}
.shebei-home-zoom1-charts {
  width: 30%;
  height: 40%;
  background-color: red;
}
.shebei-home-zoom2 {
  grid-column: 2/3;
  border: 4px solid blue;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
.shebei-home-zoom2-charts {
  width: 90%;
  height: 40%;
  background-color: brown;
}
.shebei-home-zoom3 {
  grid-column: 1/3;
  border: 4px solid blue;
  background-color: blueviolet;
}
</style>