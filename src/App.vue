<template>
  <div class="main">
    <form class="form">
      <input v-model="title" placeholder="text" />
      <button @click="saveTodo">Save todo</button>
    </form>
    <div v-if="isLoading">WAIT PLEASE!!</div>
    <div class="cards">
      <div class="card" v-for="card in cards" key="card.id" v-if="!isLoading">
        <card v-bind:card="card" v-bind:delete-todo="deleteTodo" />
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
const isLoading = ref<boolean>(false);
const title = ref<string>("");

export default {
  props: {
    cards: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      cards: cards,
      title: title,
      isLoading: isLoading,
    };
  },
  components: {
    Card,
    props: {
      cards,
    },
  },
  methods: {
    async fetchTodos(): Promise<void> {
      await fetch("https://jsonplaceholder.typicode.com/todos")
        .then((response) => response.json())
        .then((data: CardInterface[]) => {
          cards.value = data.filter((card) => card.id < 5);
        });
    },

    refetch() {
      isLoading.value = true;
      setTimeout(() => {
        isLoading.value = false;
        this.fetchTodos();
      }, 2000);
    },

    saveTodo(e: Event) {
      e.preventDefault();
      const newItem: CardInterface = {
        userId: Math.random(),
        id: cards.value[cards.value.length - 1].id + 1,
        title: title.value,
        completed: false,
      };
      cards.value.push(newItem);
      title.value = "";
    },

    deleteTodo(id: number) {
      console.log(id, "ID@");
      cards.value = cards.value.filter((card) => card.id !== id);
      console.log(cards.value, "cards@");
    },
  },

  async mounted() {
    await this.fetchTodos();
  },

  watch: {
    async cards(cardsArray: CardInterface[]) {
      if (cardsArray.length === 0) {
        this.refetch();
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
