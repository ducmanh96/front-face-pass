
<template>

  <div class="home">
    <h1>{{ msg }}</h1>
    <router-link to="/"><button click="">Username</button></router-link>
    <p></p>
    <router-link to="/camera"><button click="Camera">Start Camera</button></router-link>
  </div>
</template>
<script>
export default {
  name: 'Camera',
  data () {
    return {
      msg: 'Wecome to username!Let start!!'
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


