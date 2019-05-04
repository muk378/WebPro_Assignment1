<template>
  <div class="container">
    <form>
      <div class="well">
        <h4>Update User</h4>
        <div class="form-group">
          <label class="pull-left">Contact ID :</label>
          <input type="text" class="form-control" v-model="User.contactID" placeholder="Contact ID">
        </div>
        <div class="form-group">
          <label class="pull-left">Firstname :</label>
          <input type="text" class="form-control" v-model="User.firstName" placeholder="First Name">
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
      </div>
      <router-link to="/users">
        <button type="submit" class="btn btn-large btn-block btn-primary full-width" @click="updateToAPI">Submit</button>
        <button class="btn btn-large btn-block btn-success full-width">Back to User Page</button>
      </router-link>
    </form>
  </div>

</template>

<script>
import axios from 'axios'
export default {
  name: 'UpdateUser',
  data () {
    return {
      msg: 'Update User',
      User: {
        contactID:'',
        firstName: '',
        lastName: '',
        mobileNo:'',
        email: '',
        faceBook: '',
        imageUrl: ''
      }
    }
  },
  methods: {
    updateToAPI () {
      console.log(this.$route.params.userId)
      let newUser = {
        contactID: this.User.contactID,
        firstName: this.User.firstName,
        lastName: this.User.lastName,
        mobileNo: this.User.mobileNo,
        email: this.User.email,
        faceBook: this.User.faceBook,
        imageUrl: this.User.imageUrl
      }
      console.log(newUser)
      axios.post('http://localhost:3000/users/' + this.$route.params.userId, newUser)
        .then((response) => {
          console.log(response)
        })
        .catch((error) => {
          console.log(error)
        })
      window.location.reload()
    }
  },
  mounted () {
    axios.get('http://localhost:3000/users/' + this.$route.params.userId)
      .then((response) => {
        console.log(response.data)
        this.User = response.data
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
</style>
    