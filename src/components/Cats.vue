<template>
  <h1>CATS!</h1>
  <div class="picture">
    <img src="{{card.value.url}}" alt="picture!" />
  </div>
  <button @click="fetchImg">Change pic!</button>
</template>

<script>
import { ref } from "vue";

const card = ref(null);
export default {
  name: "Cats",
  data() {
    return {
      card: card,
    };
  },
  methods: {
    async fetchImg() {
      await fetch("https://jsonplaceholder.typicode.com/photos")
        .then((response) => response.json())
        .then((data) => (card.value = data));
    },
  },
 async mounted() {
    console.log(card,'card')
    await this.fetchImg();
    // console.log(picSource.value, "pic sourse!");
  },
};
</script>

<style scoped>
.picture {
  min-width: 100px;
  min-height: 100px;
}
</style>
