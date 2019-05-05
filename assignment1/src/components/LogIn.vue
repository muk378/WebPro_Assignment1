<template>
  <div class="container" style="margin: 30px auto 20px auto;">
    <div>
      <div class="container-fluid">
        <div class="ui middle aligned center aligned grid">
          <div class="column">
            <h2 class="ui teal image header">
              <div class="content">Log-in to your account</div>
            </h2>
            <form class="ui large form error">
              <div class="ui stacked segment">
                <div class="field error">
                  <div class="ui left icon input">
                    <i class="user icon"></i>
                    <input
                      name="userName"
                      type="userName"
                      class="form-control"
                      v-model="Login.userName"
                      placeholder="๊User Account"
                    >
                  </div>
                </div>
                <div class="field error">
                  <div class="ui left icon input">
                    <i class="lock icon"></i>
                    <input
                      name="passWord"
                      type="passWord"
                      class="form-control"
                      v-model="Login.passWord"
                      placeholder="Password"
                    >
                  </div>
                </div>
                <!-- <div class="ui fluid large teal submit button">Login</div> -->
              </div>

              <!-- <div class="alert alert-danger" v-if="error">{{ error }}</div> -->
              <!-- <div class="ui error message">
                <ul class="list">
                  <li>Please enter you</li>
                  <br>
                  <li>Your password must be at least 6 characters</li>
                </ul>
              </div>-->
            </form>
            <button class="btn btn-success btn-block full-width" @click="login">Log in</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "LogIn",
  data() {
    return {
      msg: "Log In",
      Login: {
        userName: "",
        passWord: ""
        // error: false
      }
    };
  },
  methods: {
    login() {
      let checkUser = {
        userName: this.Login.userName,
        passWord: this.Login.passWord
      };
      console.log(checkUser);
      axios
        .get("http://localhost:3000/login/" + this.Login.userName)
        .then(response => {
          console.log(response);
          var data = response.data;

          if (data[0].passWord == this.Login.passWord) {
            this.$router.push({ path: "./users" });
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
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
