<template>
  <div class="adduser">
    <h1>{{ title }}</h1>
    <div class="vframe"> <!--vframe is a name that you crate by yourself-->
    <form action=" ">
        <div class="form-group">
            <label class="pull-left">Firstname :</label>
            <input type="text" class="form-control" v-model="User.firstName"
            placeholder="First Name">
        </div>
        <div class="form-group">
            <label class="pull-left">Lastname :</label>
            <input type="text" class="form-control" v-model="User.lastName"
            placeholder="Last Name">
        </div>
        <div class="form-group">
            <label class="pull-left">E-mail :</label>
            <input type="text" class="form-control" v-model="User.email"
            placeholder="user@mail.com">
        </div>
        <button type="sumbit" class="btn-btn-large btn-block 
        btn-primary full-width" @click="addToAPI">Submit</button>
        <router-link to = '/users'>
        <button type="sumbit" class="btn-btn-large btn-block 
        btn-success full-width">Go to User Page</button>
        </router-link>
    </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'AddUser',
  data () {
    return {
      title: 'Add User',
      User: {
        firstName: '',
        lastName:'',
        email:''
      }
    }
  },
  methods:{
    addToAPI(){
        let newUser={
            firstName: this.User.firstName,
            lastName: this.User.lastName,
            email: this.User.email
        }
        console.log(newUser)
        axios.post('http://localhost:3000/users',newUser)
            .then((response)=>{
                console.log(response)
            })
            .catch((error)=>{
                console.log(error)
            })
            
    }
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
