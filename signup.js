const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/user', {useNewUrlParser:true});
const port = 80;

// Defining Mongoose schema for sign up
const userSchema = new mongoose.Schema({
    username: {
      type: String,
      required: true,
      unique: true
    },
    email: {
      type: String,
      unique: true,
      required: true
    },
    password: {
      type: String,
      required: true
    },
})

const User = mongoose.model('User',userSchema);

app.post('/signup',(req, res)=>{
    var myData = new User(req.body);
    myData.save().then(()=>{
        res.send('You have been successfully signed up')
    }).catch(()=>{
        res.status(400).send('Please try again')
    })
})