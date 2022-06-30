<template>
  <div class="card">
    <h2>{{card.title}}</h2>
    <div class="card-body">
      <input type="checkbox" checked={{card.completed}}>
      {{card.text}}
    </div>
  </div>
</template>

<script lang="ts">



export default {
  name: "CardComponent",
  props: { }
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
  //justify-content: flex-end;
}


</style>
