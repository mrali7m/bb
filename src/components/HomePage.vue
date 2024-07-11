<template>
  <div class="container-fluid vh-100 d-flex align-items-center justify-content-center">
    <div class="row w-100">
      <div class="col-md-6 d-md-flex justify-content-center align-items-center">
        <img alt="logo" src="@/assets/fisrtLogo.png" class="img">
      </div>
      <div class="col-md-6 bg-white d-flex align-items-center justify-content-center">
        <div class="login-form w-75">
          <div class="text-end mb-3">
            <button @click="toggleLanguage" class="btn btn-link text-decoration-none text-body">{{ currentLanguage }}</button>
          </div><br><br>
          <div class="form">
            <h3>{{ $t('login') }}</h3><br>
            <h6>{{ $t('dontHaveAccount') }} <a href="sign Up" class="text-body fw-bold">{{ $t('signUp') }}</a></h6><br>
            <form>
              <label>{{ $t('emailAddress') }}</label>
              <input class="form-control mb-3" type="email" aria-label="email address"><br>
              <label>{{ $t('password') }}</label>
              <div class="input-group mb-3">
                <input :type="passwordFieldType" class="form-control" aria-label="password">
                <button type="button" class=" btn-outline-secondary border-0" @click="togglePasswordVisibility">
                  <i :class="passwordFieldIcon"></i>
                </button>
              </div>
            </form>
            <div class="text-end mb-3">
              <a href="password" class="text-secondary">{{ $t('forgetPassword') }}</a>
            </div>
            <div class="form">
              <button @click="login" class="btn btn-warning w-100 mb-3">{{ $t('login') }}</button><br>
              <button class="btn w-100 mb-3">
                <a href="https://shorturl.at/tZWTI" class="text-body text-decoration-none">
                  <i class="bi bi-google"></i> {{ $t('logInWithGoogle') }}
                </a><br>
              </button>
              <h6 class="text-center">
                <a href="#" class="text-secondary text-decoration-none">
                  <i class="bi bi-arrow-left"></i> {{ $t('backToHomePage') }}
                </a>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage1',
  data() {
    return {
      currentLanguage: this.$i18n.locale === 'en' ? 'العربية' : 'English',
      passwordFieldType: 'password',
      passwordFieldIcon: 'bi bi-eye',
    };
  },
  methods: {
    toggleLanguage() {
      if (this.$i18n.locale === 'en') {
        this.$i18n.locale = 'ar';
        this.currentLanguage = 'English';
      } else {
        this.$i18n.locale = 'en';
        this.currentLanguage = 'العربية';
      }
    },
    togglePasswordVisibility() {
      if (this.passwordFieldType === 'password') {
        this.passwordFieldType = 'text';
        this.passwordFieldIcon = 'bi bi-eye-slash';
      } else {
        this.passwordFieldType = 'password';
        this.passwordFieldIcon = 'bi bi-eye';
      }
    },
    login() {
      this.$router.push('/secondPage');
    },
  },
};
</script>

<style scoped>
body, html {
  height: 100%;
  margin: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

.container-fluid {
  height: 100vh;
}

.img {
  width: 120%;
  height: 90%;
  justify-items: left;
  display: flex;
  margin-right: 0%;
}

.login-form {
  max-width: 400px;
  text-align: start;
}

.form .btn, .form-control {
  max-width: 400px;
  text-align: center;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.10);
}

label {
  font-weight: bold;
}

.btn {
  border: none;
  padding: 10px;
  margin-top: 15px;
}

.btn:hover {
  background-color: rgba(189, 189, 189, 0.418);
}

.btn-outline-secondary {
  border: 1px solid #6c757d;
  color: #6c757d;
}

.input-group {
  display: flex;
  align-items: start;
}

</style>
