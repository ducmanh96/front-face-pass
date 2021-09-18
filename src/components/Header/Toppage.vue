
<template>
  
  <div class="hello">
    <h1>{{ msg }}</h1>
    <img class="img" src="@/assets/image.png"/>

    <router-link to="/signin"><button click="Signin">Signin</button></router-link>
    <li></li>
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
img{
  position:relative;
  width:700px;
  height:200px;
  left:-100px;
}

button{
  position:relative;
  top:-200px;
  left:120px
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


