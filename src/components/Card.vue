<template>
  <div class="card">
    <div>{{ card.userId }}</div>
    <div>{{ card.title }}</div>
    <div class="card-body">
      Done:
      <a-input
        type="checkbox"
        checked="card.completed"
      />
    </div>
    <a-button shape="circle" class="button" v-bind:key="card.id" v-on:click="deleteTodo(card.id)">
      Delete todo
    </a-button>
  </div>
</template>

<script>
export default {
  name: "CardComponent",
  props: ["card", "deleteTodo"],
  methods: {},
  mounted() {},
};
</script>

<style>
.card {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-end;
  padding: 30px;
  overflow-wrap: break-word;
  min-height: 150px;
  min-width: 200px;
  border: darkcyan solid 1px;
  border-radius: 10px;
}
.card-body {
  display: flex;
  flex-direction: row;
}
.button {
  border: darkcyan solid 1px;
  border-radius: 10px;
  padding: 10px;
}
</style>
