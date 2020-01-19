<template>
  <div class="login">
    <form class="form" @submit.prevent="handleSubmit">
      <h1>TPV-APP</h1>
      <label>Usuario</label>
     <input required v-model="username" type="text" placeholder="Usuario"/>
     <label>Contraseña</label>
     <input required v-model="password" type="password" placeholder="Contraseña"/>
     <hr/>
     <button type="submit" @click="handleSubmit">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Login',

  data() {
    return {
      username: '',
      password: ''
    }
  },

  methods: {
    handleSubmit() {
      if(this.input.username != "" && this.input.password != "") {
        this.$emit('onLogin', {
          username: this.username,
          password: this.password
        });
      }
    }
  }
}
</script>

<style scoped>
  .login {
    border: 1px solid #CCCCCC;
    background-color: #FFFFFF;
  }
  .form {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
</style>
