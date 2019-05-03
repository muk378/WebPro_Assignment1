<template>
  <div id="app">
    <div class="ui inverted stackable menu">
      <div class="item">
        <img
          src="https://d262ilb51hltx0.cloudfront.net/max/800/1*NNqI6Nm62DOVKRTyIp-GRg.png"
          width="40"
          height="40"
        >
      </div>
      <a class="active item" href="#/Users">Contacts</a>
      <div class="right menu">
      <a class="item">
        <i class="user icon"></i>
      </a>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
