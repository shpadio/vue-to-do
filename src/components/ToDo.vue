<template>
  <form class="form">
    <input v-model="title" placeholder="text" />
    <button @click="saveTodo">Save todo</button>
  </form>
  <div v-if="isLoading">WAIT PLEASE!!</div>
  <div class="cards">
    <div class="card" v-for="card in cards" key="card.id" v-if="!isLoading">
     <card-component :card="card" :delete-todo="deleteTodo"/>
    </div>
  </div>
</template>

<script >
import CardComponent from "@/components/Card.vue";


const cards = ref([]);
const isLoading = ref(false);

import {ref} from "vue";

const title = ref("");

export default {
  name: "ToDo",
  components: {
    CardComponent

  },

  data() {
    return {
      cards: cards,
      title: title,
      isLoading: isLoading,
    };
  },
  methods: {
    async fetchTodos(){
      await fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
          .then((response) => response.json())
          .then((data) => cards.value = data)
    },

    refetch() {
      isLoading.value = true;
      setTimeout(() => {
        isLoading.value = false;
        this.fetchTodos();
      }, 2000);
    },

    saveTodo(e) {
      e.preventDefault();
      if (title.value === "") return
      const newItem = {
        userId: Math.random(),
        id: Math.random() * Math.random(),
        title: title.value,
        completed: false,
      };
      cards.value.push(newItem);
      title.value = "";
    },

    deleteTodo(id) {
      cards.value = cards.value.filter((card) => card.id !== id);
    },



  },

  async mounted() {
    await this.fetchTodos();
  },

  watch: {
    async cards(cardsArray) {
      if (cardsArray.length === 0) {
        this.refetch();
      }
    },
  },


  }




</script>

<style scoped>
.form {
  border: darkcyan solid 1px;
  margin: 100px;
  padding: 40px;
  min-width: 100px;
  min-height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}

.cards {
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 50%;
}

.card {
  margin: 15px;
}
.buttons {
  min-width: 400px;
  display: flex;
  justify-content: space-between;
}

.button {
  display: flex;
  padding: 5px;
  margin: auto;
  justify-content: center;
  align-items: center;
  max-width: 300px;
  min-height: 30px;
  border: cadetblue solid 1px;
  border-radius: 10px;
}
</style>