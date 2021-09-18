
<template>

  <div class="home">
    <h1> Wecome to <router-link to="/">Username</router-link></h1>
    
    <p></p>
    <router-link to="/camera"><button click="Image">Start Camera</button></router-link>
  </div>
</template>
<script>
export default {
  name: 'Camera',
  data () {
    return {
      
    }
  }
}
</script>

<style scoped>
h1 {
  font-weight: normal;

}
h2 {
  font-weight: normal;

}
h{
  position:relative;
  top:10px;
  left:450px
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


