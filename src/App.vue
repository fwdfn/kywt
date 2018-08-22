<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',

}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
/*  text-align: center;*/
  color: #2c3e50;
}
a:link { 
color: #fff; 
TEXT-DECORATION: none 
} 
a:visited { 
COLOR: #fff; 
TEXT-DECORATION: none 
} 
a:hover { 
COLOR: #fff; 
text-decoration: none; 
} 
a:active { 
COLOR: #fff; 
text-decoration: none; 
} 
</style>
