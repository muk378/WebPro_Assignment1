'use strict'
module.exports = function(app){
    var userList = require('../controllers/userListController')

    app.route('/users')
        .get(userList.listAllUsers)
        .post(userList.createAUser)

    app.route('/users/:userId')
        .get(userList.getMany)
        .delete(userList.delete)
        .post(userList.update)

    // app.route('/login')
}