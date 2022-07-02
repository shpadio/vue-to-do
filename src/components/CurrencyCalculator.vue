<template>
  <h1>Calculator!</h1>
  <div class="form">

  </div>
  <div v-for="deal in deals">
    <div class="deal-date">{{deal.date}}</div>
    <div class="deal-amount-source">{{deal.amountSource}}</div>
    <div class="deal-currency-sign">{{deal.currency}}</div>
    <div class="deal-amount-target">{{deal.amountTarget}}</div>
    <div class="deal-amount-fee">{{deal.fee}}</div>
    <div class="deal-amount-total">{{deal.amountTotalSource}}</div>
  </div>
</template>

<script lang="ts">

interface DealInterface {
  date: string,
  currency: string,
  rate: number,
  amountSource: number,
  amountTotalSource: number,
  amountTarget: number,
  fee: number,
}

type DealPayload = Partial<DealInterface>


export default {
  name: "CurrencyCalculator",
  data(){
    let deals: DealInterface[] = []
    let totalAmount = 0
    return {
      deals: deals,
      totalAmount: totalAmount,
    }
  },

  methods: {
    fetchData(){

    },

    addDeal(deal: DealInterface){

    },

    deleteDeal(id: string){

    },

    updateDeal(id: string, payload: DealPayload ){

    }
  },

  beforeMount() {
    // this.methods.
    console.log('before mount!')
  }
}

</script>

<style scoped>

.form {

}

.deal-currency-sign{

}
.deal-amount-target{

}
.deal-amount-source{

}
.deal-amount-fee{

}
.deal-amount-total{

}

</style>