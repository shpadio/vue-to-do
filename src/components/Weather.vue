<template>
  <h1>Weather</h1>
  <div>{{currentCity.cityName}}</div>
  <input v-model="currentCity.cityName">
  <select v-model="selected">
    <option value="a">a</option>
    <option value="b">b</option>
    <option value="c">c</option>
  </select>
  <div class="forecast-card">
    Here will be the card
<!--    <p>{{currentCity.cityName}}</p>-->
  </div>

</template>

<script>
import {ref} from "vue";

const currentCity = ref({cityName: '', id: null})
export default {
  name: "Weather",
  data(){
    return {
      currentCity: currentCity.value,
      selected: currentCity.value.cityName,
      cities: ['Che','Ekb','Spb']
    }
  },
  methods: {
   async getForecastByCityName(name){
    await fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((data) => currentCity.cityName = data[0].name)
    }
  },


  async beforeMount() {
   await this.getForecastByCityName()
  },

  updated() {
  }

}


</script>

<style scoped>
.forecast-card{

}
</style>