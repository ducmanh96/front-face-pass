<template>
  <div class="signup">
    <h2>Sign up</h2>
    <input type="text" placeholder="Users" v-model="username">
    <input type="mail" placeholder="mail address" v-model="mail">
    <input type="password" placeholder="password" v-model="password">
    <input type="password" placeholder="password" v-model="password1">

    <router-link to="/signin"><button click="Signin">Account registration</button></router-link>

    <p>Do you have an account? <router-link to="/signin">sign in now!!!!</router-link>
    </p>
  </div>
</template>

<script>
export default {
  name: 'Signup',
  data () {
    return {
      username: '',
      mail: '',
      password: '',
      password1: ''
    }
  },
  methods: {}
}
</script>

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
.signup {
  margin-top: 20px;

  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center
}
input {
  margin: 10px 0;
  padding: 10px;
}
</style>
