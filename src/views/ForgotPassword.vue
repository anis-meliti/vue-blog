<template>
  <div class="reset-password">
    <Modal v-if="modalActive" :modalMessage="modalMessage" v-on:close-modal="closeModal" />
    <Loading v-if="loading" />
    <div class="form-wrap">
      <form class="reset">
        <div class="login-register">
          Back to
          <router-link class="router-link" :to="{name: 'Login'}"></router-link>
        </div>
        <p class="login-register">
          Forgot your password? Enter your email to reset it
        </p>
        <h2>Login to FireBlogs</h2>
        <div class="inputs">
          <div class="input">
            <input type="text" placeholder="Email" v-model="email" />
            <email class="icon" />
          </div>
        </div>
        <button @click.prevent="resetPassword">Reset</button>
        <div class="angle"></div>
      </form>
      <div class="background"></div>
    </div>
  </div>
</template>

<script>
import email from '../assets/Icons/envelope-regular.svg';
import Modal from '../Components/Modal.vue';
import Loading from '../Components/Loading.vue';
import firebase from 'firebase/app';
import 'firebase/auth';

export default {
  name: 'ForgotPassword',
  data() {
    return {
      email: null,
      modalActive: null,
      modalMessage: '',
      loading: null,
    };
  },
  components: {
    email,
    Modal,
    Loading,
  },
  methods: {
    resetPassword() {
      this.loading = true;
      firebase
        .auth()
        .sendPasswordResetEmail(this.email)
        .then(() => {
          this.modalMessage = 'If your account exists, you will receive an email';
          this.loading = false;
          this.modalActive = true;
        })
        .catch(error => {
          this.modalMessage = error.message;
          this.loading = false;
          this.modalActive = true;
        });
    },
    closeModal() {
      this.modalActive = !this.modalActive;
      this.email = '';
    },
  },
};
</script>

<style lang="scss" scoped>
.reset-password {
  position: relative;
  .form-wrap {
    .reset {
      h2 {
        margin-bottom: 8px;
      }
      p {
        text-align: center;
        margin-bottom: 32px;
      }
    }
  }
}
</style>
