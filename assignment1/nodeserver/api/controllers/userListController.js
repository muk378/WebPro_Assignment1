'use strict'
var mongoose = require('mongoose')
User = mongoose.model('Users')

// Login = mongoose.model('Logins')
checkUser = mongoose.model('Logins')
exports.listAllUsers = function(req, res){
    var query = { sort: { firstName: 1 } }
    User.find({}, null, query, function(err, user){
        if(err) throw err
        //console.log(user)
        res.json(user)
    })
}

exports.createAUser = function(req, res){
    var newUser = new User(req.body)
    newUser.save(function(err, user){
        if(err) throw err
        res.json(user)
    })
}

exports.getMany = function(req, res){
    //console.log(req.params.userId)
    User.findById(req.params.userId, function(err, user){
        if(err) throw err
        res.json(user)
    })
}

exports.delete = function(req, res){
    //console.log(req.params.userId)
    User.findByIdAndRemove(req.params.userId, function(err, user){
        if(err) throw err
        const response = {
            message: "Delete user id: "+ req.params.userId +" successfully",
            id: user._id
        }
        res.json(response)
    })
}

exports.update = function(req, res){
    console.log(req.params.userId)
    var newUser = {}
    newUser = req.body
    console.log(newUser)
    User.findByIdAndUpdate(req.params.userId, newUser, {new: true}, function(err, user){
        if(err) throw err
            //console.log(user)
        res.json(user)
    })
}


exports.authen = function(req, res){
    checkUser.find({userName: req.params.userName}, function(err,userr) {
        if(err) throw err
            //console.log(user)
        res.json(userr)


})
}