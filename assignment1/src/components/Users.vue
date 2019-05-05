<template>
  <div class="users">
    <div class="container-fluid">
      <div class="col-lg-12">
        <div class="input-group">
          <input type="text" class="form-control" placeholder="Search for..." v-model="search">
          <span class="input-group-btn">
            <button class="btn btn-default" type="button">
              <span class="glyphicon glyphicon-search" aria-hidden="true"></span>
              Search
            </button>
            <router-link to="/adduser">
              <button class="btn btn-large btn-success">Add User</button>
            </router-link>
          </span>
        </div>
      </div>
    </div>

    
    <div class="ui segment">
      <div class="ui grid">
        <div class="four wide column" v-for="auser in filterdUsers" :key="auser._id">
          <div class="ui link cards">
            <div class="card">
              <!-- style="margin: 30px auto 20px 30px;" -->
              <div class="image">
                <img style="width:autox; height:250px;"  v-bind:src="auser.imageUrl">
              </div>
              <div class="content">
                <a class="header">{{auser.firstName}} {{auser.lastName}}</a>
                <div class="meta">
                  <span class="mobileno">Mobile : {{auser.mobileNo}}</span>
                  <br>
                  <span class="email">Email : {{auser.email}}</span>
                  <br>
                  <span class="facebook">Facebook : http://facebook.com/{{auser.faceBook}}</span>
                </div>
              </div>
              <div class="extra content">
                <a>
                  <router-link :to="{ path: 'updateuser/' + auser._id}">
                    <button class="btn btn-xs btn-primary">
                      <span class="glyphicon glyphicon-pencil"></span>
                    </button>
                  </router-link>
                </a>
                <a>
                  <button
                    class="btn btn-xs btn-danger"
                    data-toggle="modal"
                    data-target=".bd-example-modal-sm"
                    @click="DELETE(auser._id)"
                  >
                    <span class="glyphicon glyphicon-erase"></span>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="modal fade bd-example-modal-sm"
      id="myModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title" id="exampleModalLabel">Are you sure?</h1>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">Are you sure you want to delete this item?</div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <router-link to="/users">
              <button type="button" class="btn btn-danger" @click="delUser(uid)">Delete</button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Users",
  data() {
    return {
      Title: "",
      Users: [],
      uid: "",
      search: ""
    };
  },

  methods: {
    delUser(userId) {
      var url = "http://localhost:3000/users/" + userId;
      axios
        .delete(url)
        .then(response => {
          console.log("Delete UserId:" + userId);
        })
        .catch(error => {
          console.log(error);
        });
      window.location.reload();
    },

    DELETE(uid) {
      $("#my-modal").modal("show");
      this.uid = uid;
    }
  },

  computed: {
    filterdUsers: function() {
      return this.Users.filter(user => {
        return user.firstName.match(this.search);
      });
    }
  },

  mounted() {
    axios
      .get("http://localhost:3000/users")
      .then(response => {
        console.log(response.data);
        this.Users = response.data;
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!--have scoped that mean this style use only in this vue-->
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
/* img.image {
  width:auto;
  height:250px;
} */
</style>
