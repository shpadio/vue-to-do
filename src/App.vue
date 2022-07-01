<template>
  <div class="main">
    <div class="buttons">
        <router-link to="/todo">Todos</router-link>
        <router-link to="/chess">Chess</router-link>
        <router-link to="/images">Images</router-link>
        <router-link to="/weather">Weather</router-link>
      <router-link to="/calculator">Calculator</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style>
.main {
  max-width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin: auto;
}
.buttons {
  min-width: 400px;
  display: flex;
  justify-content: space-between;
}
</style>
