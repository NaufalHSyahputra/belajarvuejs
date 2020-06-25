<template>
  <div class="row">
    <div
      class="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4"
    >
      <div class="login-brand">
        <img src="assets/img/Logo.png" alt="logo" width="150" class="" />
      </div>

      <div class="card card-primary">
        <div class="card-header"><h4>Login</h4></div>

        <div class="card-body">
          <form v-on:submit.prevent="login">
            <div class="form-group">
              <label for="email">Email</label>
              <input
                id="email"
                type="email"
                class="form-control"
                :class="{ 'is-invalid': _.has(this.errors, 'email') }"
                name="email"
                tabindex="1"
                v-model="email"
                required
                autofocus
              />
              <div class="invalid-feedback">
                {{ _.has(this.errors, "email") ? this.errors.email[0] : null }}
              </div>
            </div>

            <div class="form-group">
              <div class="d-block">
                <label for="password" class="control-label">Password</label>
                <div class="float-right">
                  <a href="auth-forgot-password.html" class="text-small">
                    Forgot Password?
                  </a>
                </div>
              </div>
              <input
                id="password"
                type="password"
                class="form-control"
                :class="{
                  'is-invalid': _.has(this.errors, 'password')
                }"
                name="password"
                tabindex="2"
                v-model="password"
                required
              />
              <div class="invalid-feedback">
                {{
                  _.has(this.errors, "password")
                    ? this.errors.password[0]
                    : null
                }}
              </div>
            </div>

            <div class="form-group">
              <div class="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  name="remember"
                  class="custom-control-input"
                  tabindex="3"
                  id="remember-me"
                />
                <label class="custom-control-label" for="remember-me"
                  >Remember Me</label
                >
              </div>
            </div>

            <div class="form-group">
              <button
                type="submit"
                class="btn btn-primary btn-lg btn-block"
                :class="{ 'disabled btn-progress': this.loadingLogin }"
                tabindex="4"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
      <div class="mt-5 text-muted text-center">
        Don't have an account? <a href="auth-register.html">Create One</a>
      </div>
      <div class="simple-footer">
        Copyright &copy; Stisla 2018
      </div>
    </div>
  </div>
</template>

<script>
import { post } from "@/plugins/axios";
import { AlertError } from "@/plugins/sweetalert";
import _ from "lodash";

export default {
  name: "Login",
  layout: "Basic",
  data: () => ({
    email: "",
    password: "",
    errors: {},
    loadingLogin: false
  }),
  methods: {
    async login() {
      this.errors = {};
      this.loadingLogin = true;
      let request = {
        email: this.email,
        password: this.password
      };
      try {
        const { data } = await post(request, "login");
        // Save the token.
        this.$store.dispatch("auth/saveToken", {
          token: data.token
        });
        // Fetch the user.
        await this.$store.dispatch("auth/fetchUser");
        // Redirect home.
        this.$router.push({ name: "Home" });
      } catch (error) {
        this.loadingLogin = false;
        if (error.response.status === 422) {
          this.errors = error.response.data.errors;
        } else {
          AlertError.fire({
            text: error.response.data.message
          });
        }
      }
    }
  },
  computed: {
    _() {
      return _;
    }
  }
};
</script>

<style></style>
