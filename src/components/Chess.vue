<template>
  <div class="chess-page">
    <div v-for="cell in cells" :key="cell">
      <div class="cell-black"
        @click="onChangeColorClick(cell, 'cell-black')"/>
      <div
        class="cell-white"
        @click="onChangeColorClick(cell, 'cell-white')"/>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

const cells = ref([
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
]);

export default {
  name: "Chess",
  methods: {

    updateCells(values) {
      return values.map((v) => this.changeColor(v.id))
    },

    onChangeColorClick(cellToBeChanged, color) {
      console.log(cellToBeChanged, "cellToBeChanged");
      console.log(color, "color");

      this.updateCells(cells.value)
      //
        cells.value = cells.value.map((cell) => {
          if(cell.id === cellToBeChanged.id) {
            console.log(cell,'here cell!')
            console.log(cellToBeChanged,'here cellToBeChanged!')
            return {
              id: cellToBeChanged.id, color: this.changeColor(cellToBeChanged.id)
            }
          }
          return cell
          })
    },

    changeColor(id, color) {
      return {
        id: id,
        color: color === 'cell-white' ? 'cell-black' : 'cell-white'
      }
    },
    getColor(id) {
      return {
        id: id,
        color: id % 2 === 0 ? "cell-white" : "cell-black",
      };
    },
  },

  data() {
    return {
      cells: cells,
    };
  },

  mounted() {
    cells.value = cells.value.map((cell) => this.getColor(cell));
  },
  updated() {
    // this.updateCells(cells.value)
    console.log('updated!')
  }
};
</script>

<style scoped>
.chess-page {
  display: flex;
  padding: 50px;
  flex-direction: row;
}

.cell-white {
  min-width: 100px;
  min-height: 100px;
  background-color: antiquewhite;
  border: black solid 0.5px;
  border-radius: 10px;
}
.cell-black {
  min-width: 100px;
  min-height: 100px;
  background-color: dimgrey;
  border: black solid 0.5px;
  border-radius: 10px;
}
</style>
