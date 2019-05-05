import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Users from '@/components/Users'
// import Contacts from '@/components/Contacts'
import AddUser from '@/components/AddUser'
import UpdateUser from '@/components/UpdateUser'
import LogIn from '@/components/LogIn'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/hello',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '/users',
      name: '/Users',
      component: Users
    },
    // {
    //   path: '/contacts',
    //   name: '/Contacts',
    //   component: Contacts
    // },
    {
      path: '/adduser',
      name: '/AddUser',
      component: AddUser
    },
    {
      path: '/updateuser/:userId',
      name: '/UpdateUser',
      component: UpdateUser
    },
    {
      path: '/login',
      name: '/LogIn',
      component: LogIn
    },
    { path: '*', redirect: '/login' }

  ]
})
