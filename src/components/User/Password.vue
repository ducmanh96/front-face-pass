
<template>
  <div class="password">
    <h2>Enter password</h2>
    <input type="password" placeholder="password" v-model="password">
    <p><router-link to="/home"><button>Signin</button></router-link>
    <p><router-link to="/password1"> Forgot password? </router-link>
    </p>
  </div>
</template>

<script>
export default {
  name: 'Password',
  data () {
    return {
      mail: '',
      password: ''
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
.signin {
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
