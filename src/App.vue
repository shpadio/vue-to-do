<template>
  <div class="main">
    <form class="form">
      <input v-model="title" placeholder="text" />
      <button @click="saveTodo">Save todo</button>
    </form>
    <div class="cards" v-for="card in cards">
      <div class="card">
        <div>{{ card.id }}</div>
        <div>{{ card.title }}</div>
        <div class="card-body">
          Done:
          <input type="checkbox" checked="{{card.completed}}" />
        </div>
        <button @click="deleteTodo(card.id)">Delete todo</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Card from "@/components/Card.vue";
import { ref } from "vue";

interface CardInterface {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const cards = ref<CardInterface[]>([]);

export default {
  components: {
    Card,
  },
  data() {
    return {
      cards: cards,
      title: "",
    };
  },
  methods: {
    async fetchTodos(): Promise<void> {
      await fetch("https://jsonplaceholder.typicode.com/todos")
        .then((response) => response.json())
        .then((data: CardInterface[]) => {
          cards.value = data.filter((card) => card.id < 5);
        });
    },

    saveTodo(e: Event) {
      e.preventDefault();
      const newItem: CardInterface = {
        userId: Math.random(),
        id: cards.value[cards.value.length - 1].id + 1,
        title: this.title,
        completed: false,
      };
      cards.value.push(newItem);
      this.title = "";
    },

    deleteTodo(id: number) {
      cards.value = cards.value.filter((card) => card.id !== id);
    },
  },

  async mounted() {
    await this.fetchTodos();
  },

  watch: {
    async cards(newCards: CardInterface[]) {
      if (newCards.length === 0) {
        await this.fetchTodos();
      }
    },
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
