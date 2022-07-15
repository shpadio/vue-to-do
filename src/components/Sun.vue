<template>
  <div class="main">
    <div class="sun">
    </div>
  </div>

</template>

<script>
export default {
  name: "Sun",
  data(){
    return {}
  }
}
</script>

<style scoped>
.main{
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 250px;
}

.sun {
  background-color: yellow;
  border-radius: 50%;
  min-width: 300px;
  min-height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>