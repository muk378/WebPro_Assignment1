<template>
  <div class="adduser">
    <h1>{{ title }}</h1>
    <div class="container">
      <div class="vframe">
        <!--vframe is a name that you crate by yourself-->
        <form action=" ">
          <div class="form-group">
            <label class="pull-left">Contact ID :</label>
            <input
              type="text"
              class="form-control"
              v-model="User.contactID"
              placeholder="Contact ID"
            >
          </div>
          <div class="form-group">
            <label class="pull-left">Firstname :</label>
            <input
              type="text"
              class="form-control"
              v-model="User.firstName"
              placeholder="First Name"
            >
          </div>
          <div class="form-group">
            <label class="pull-left">Lastname :</label>
            <input type="text" class="form-control" v-model="User.lastName" placeholder="Last Name">
          </div>
          <div class="form-group">
            <label class="pull-left">Mobile No :</label>
            <input type="text" class="form-control" v-model="User.mobileNo" placeholder="Mobile No">
          </div>
          <div class="form-group">
            <label class="pull-left">Email :</label>
            <input type="text" class="form-control" v-model="User.email" placeholder="Email">
          </div>
          <div class="form-group">
            <label class="pull-left">Facebook :</label>
            <input type="text" class="form-control" v-model="User.faceBook" placeholder="Facebook">
          </div>
          <div class="form-group">
            <label class="pull-left">Image Url :</label>
            <input type="text" class="form-control" v-model="User.imageUrl" placeholder="Image Url">
          </div>
          <span>
            <!-- <button type="sumbit" class="btn btn-large btn-primary" @click="addToAPI">Save</button>
            <router-link to="/users">
              <button type="sumbit" class="btn btn-large btn-danger">Cancal</button>
            </router-link> -->

            <button type="submit" class="btn btn-default" @click="addToAPI"><span class="glyphicon glyphicon-floppy-disk" aria-hidden="true"></span> Save</button>
            <router-link to="/users">
            <button type="submit" class="btn btn-default"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span> Close</button>
            </router-link>
          </span>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "AddUser",
  data() {
    return {
      title: "Contact Add",
      User: {
        contactID: "",
        firstName: "",
        lastName: "",
        mobileNo: "",
        email: "",
        faceBook: "",
        imageUrl: ""
      }
    };
  },
  methods: {
    addToAPI() {
      let newUser = {
        contactID: this.User.contactID,
        firstName: this.User.firstName,
        lastName: this.User.lastName,
        mobileNo: this.User.mobileNo,
        email: this.User.email,
        faceBook: this.User.faceBook,
        imageUrl: this.User.imageUrl
      };
      console.log(newUser);
      axios
        .post("http://localhost:3000/users", newUser)
        .then(response => {
          console.log(response);
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
