<template>
  <div class="main">
        <ToDo />
<!--    <Chess />-->
  </div>
</template>

<script lang="ts">
import ToDo from "@/components/ToDo.vue";
import Chess from "@/components/Chess.vue";

export default {
  data() {
    return {};
  },

  components: {
    Chess,
    ToDo,
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
</style>
