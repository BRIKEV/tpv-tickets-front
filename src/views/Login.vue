<template>
  <div class="login">
    <form class="form" @submit.prevent="handleSubmit">
      <h1>TPV-APP</h1>
      <div class="input-container">
        <input
          :class="{ focus: isFocus }"
          @focus="setFocus"
          @blur="setBlur"
          v-model="username"
          name="username"
          ref="username"
          type="text">
        <span data-placeholder="Username"></span>
      </div>
      <div class="input-container">
        <input
          :class="{ focus: isFocus }"
          name="password"
          ref="password"
          @focus="setFocus"
          @blur="setBlur"
          v-model="password"
          type="password">
        <span data-placeholder="Password"></span>
      </div>

      <bk-button @click="handleSubmit">Login</bk-button>
    </form>
  </div>
</template>

<script>
import BkButton from '@/components/BkButton.vue';

export default {
  name: 'Login',

  components: {
    BkButton,
  },

  data() {
    return {
      username: '',
      password: '',
      isFocus: false,
    }
  },

  methods: {
    handleSubmit() {
      if(this.username !== '' && this.password !== '') {
        this.$emit('onLogin', {
          username: this.username,
          password: this.password
        });
      }
    },
    setFocus(evt) {
      this.$emit('selected', { id: evt.target.name });
      this.isFocus = true
    },
    setBlur(evt) {
      this.$emit('input-blur', { id: evt.target.name });
    }
  }
}
</script>

<style scoped>
  .login {
    height: 100vh;
  }
  .form {
    width: 360px;
    height: 580px;
    background: #f1f1f1;
    padding: 80px 40px;
    border-radius: 10px;
    left: 50%;
    top: 50%;
    color: black;
    position: absolute;
    transform: translate(-50%, -50%)
  }
  .form h1 {
    text-align: center;
    margin-bottom: 60px;
  }
  .input-container {
    position: relative;
    border-bottom: 2px solid #ddd;
    margin: 30px 0;
  }
  .input-container input {
    font-size: 0.938rem;
    border: none;
    width: 100%;
    outline: none;
    background: none;
    padding: 0 5px;
    height: 50px;
  }

  .input-container span::before {
    content: attr(data-placeholder);
    position: absolute;
    top: 50%;
    left: 5px;
    color: #adadad;
    transform: translateY(-50%);
    z-index: -1;
  }

  .input-container span::after {
    content: '';
    position: absolute;
    width: 0%;
    height: 2px;
    transition: .5s;
    background: #118060;
  }

  .input-container span:focus {
    top: -5px;
  }
  .focus + span::before {
    top: -5px;
  }
  .focus + span::after {
    width: 100%;
  }
</style>
