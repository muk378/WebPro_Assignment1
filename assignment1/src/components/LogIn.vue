<template>
  <div class="login">
    <h1>{{ msg }}</h1>
    <!--ex1-->
    <button v-on:click="showAlert">cilck here!</button>
   
  </div>
</template>

<script>
export default {
  name: 'LogIn',
  data () {
    return {
      msg: 'Welcome to EGCO427'
    }
  },
  methods:{
    showAlert:function(){
      console.log("alert")
      alert("Gotcha!")
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
