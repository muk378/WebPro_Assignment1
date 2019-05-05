<template>
  <div class="container" style="margin: 30px auto 20px auto;">
    <div class="login">
      <!-- <h1>{{ msg }}</h1> -->
      <div class="container-fluid">
        <div class="ui middle aligned center aligned grid">
          <div class="column">
            <h2 class="ui teal image header">
              <!-- <img class="image" src> -->
              <div class="content">Log-in to your account</div>
            </h2>
            <form class="ui large form error">
              <div class="ui stacked segment">
                <div class="field error">
                  <div class="ui left icon input">
                    <i class="user icon"></i>
                    <input name="username" type="username" class="form-control" placeholder="๊User Account">
                  </div>
                </div>
                <div class="field error">
                  <div class="ui left icon input">
                    <i class="lock icon"></i>
                    <input name="password" type="password" class="form-control" placeholder="Password">
                  </div>
                </div>
                <!-- <div class="ui fluid large teal submit button">Login</div> -->
                <button class="btn btn-success btn-block full-width" @click="signIn">Log in</button>
              </div>

              <!-- <div class="ui error message">
                <ul class="list">
                  <li>Please enter you</li>
                  <br>
                  <li>Your password must be at least 6 characters</li>
                </ul>
              </div> -->
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LogIn",
  data() {
    return {
      msg: "Log In",
      Login: {
        userName: "",
        passWord: ""
      }
    };
  },
  methods: {
    showAlert: function() {
      console.log("alert");
      alert("Gotcha!");
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
