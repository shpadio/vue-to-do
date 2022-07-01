<template>
  <h1>Images!</h1>
  <div>
    <img :src="this.url" width="200" height="200" alt="picture!" />
  </div>
  <button @click="fetchImg">Change pic!</button>
</template>

<script>
import { ref } from "vue";

const url = ref(null);
export default {
  name: "Cats",
  data() {
    return {
      url: url
    };
  },
  methods: {
    getRandomId(){
      return Number((Math.random() * 10).toFixed()) + 1
    },

    async fetchImg() {
      await fetch(`https://jsonplaceholder.typicode.com/photos/${this.getRandomId()}`)
        .then((response) => response.json())
        .then((data) => (url.value = data.url));
    },
  },
 async mounted() {

    await this.fetchImg();
   console.log(url.value,'url')
  },
};
</script>

<style scoped>

</style>
