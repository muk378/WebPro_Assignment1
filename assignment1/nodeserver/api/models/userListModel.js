'use strict'
var mongoose = require('mongoose')
var Schema = mongoose.Schema

var UserSchema = new Schema({
    firstName: {
        type: String,
        Required: 'Please enter'
    },
    lastName: {
        type: String,
        Required: 'Please enter'
    },
    mobileNo: {
        type: Number,
        Required: 'Please enter'
    },
    email: {
        type: String,
        Required: 'Please enter'
    },
    faceBook: {
        type: String,
        Required: 'Please enter'
    },
    imageUrl: {
        type: String,
        Required: 'Please enter'
    },
    createdDate:{
        type: Date,
        default :Date.now

    },
})

module.exports = mongoose.model('Users', UserSchema)