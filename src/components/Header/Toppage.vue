
<template>

  <div class="hello">
    <h1>{{ msg }}</h1>
    <router-link to="/signin"><button click="Signin">Signin</button></router-link>
    <router-link to="/signup"><button click="Signup">Signup</button></router-link>

  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Wecome to we app!'
    }
  }
}
</script>

<style scoped>
h1 {
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


