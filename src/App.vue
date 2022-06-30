<template>
  <div class="main" >
    <form class="form">
      <input v-model="text">
      <button @click="saveTodo">Save todo</button>
    </form>
    <div class="cards" v-for="card in cards">
      <div class="card">
        <div class="card-title">{{card.title}}</div>
        <div class="card-body">
          Done: {{card.text}}
          <input type="checkbox" checked={{card.completed}}>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Card from "@/components/Card.vue";
import { ref } from "vue";

const cards = ref([] as Card[]);

interface Card {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export default {
  components: {
    Card,
  },
  data() {
    return {
      cards: cards,
      text: ''
    };
  },
  methods: {
    async fetchTodos() {
      await fetch("https://jsonplaceholder.typicode.com/todos")
        .then((response) => response.json())
        .then((data) => {cards.value = data.filter((card) => card.id < 5) as Card[]});
    },

    saveTodo(e: Event){
      e.preventDefault()
      console.log(this.text,'text!')

    }

  },

  async mounted() {
   await this.fetchTodos()
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
