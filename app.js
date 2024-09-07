const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/user', {useNewUrlParser:true});

const port = 80;
// const authentication = require('./routes/user.js')

// Define Mongoose schema for enquiry form
const enquirySchema = new mongoose.Schema({
    name: String,
    age: String,
    gender: String,
    address: String,
    email: String,
    number: String,
  });

const Enquiry = mongoose.model('Enquiry',enquirySchema);

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

// EXPRESS SPECIFIC
app.use('/static', express.static('static'))// serving static files
app.use(express.urlencoded())

// PUG SPECIFIC
app.set('view engine', 'pug')// Set the template engine for as pug
app.set('views', path.join(__dirname, 'views'))// Set the views directory

// ENDPOINTS
app.get('/', (req, res)=>{
    const con = 'This is content'
    const params = {'title': 'Faadu Gym', 'content': con}
    res.status(200).render('index.pug', params);
})

// For about page
app.get('/about', (req, res)=>{
    const filePath = path.join(__dirname, './views/about.html');
    res.sendFile(filePath)
})

// For contactus us page
app.get('/contact', (req, res)=>{
    const filePath = path.join(__dirname, './views/contact.html');
    res.sendFile(filePath)
})

// For Services page
app.get('/services', (req, res)=>{
    const filePath = path.join(__dirname, './views/services.html');
    res.sendFile(filePath)
})

// For sign up
app.get('/signup', (req, res)=>{
    const filePath = path.join(__dirname, './views/signup.html');
    res.sendFile(filePath)
})

// For video
app.get('/videotour', (req, res)=>{
    const filePath = path.join(__dirname, './views/videotour.html');
    res.sendFile(filePath)
})

// For shop
app.get('/shop', (req, res)=>{
    const filePath = path.join(__dirname, './views/shop.html');
    res.sendFile(filePath)
})

// For address & Payment
app.get('/pay', (req, res) => {
    // Render your HTML form page here
    res.sendFile(path.join(__dirname, 'views', 'pay.html'));
});

// About Website
app.get('/aboutwebsite', (req, res)=>{
    const filePath = path.join(__dirname, './views/aboutwebsite.html');
    res.sendFile(filePath)
})

// Post methods

// for home 
app.post('/',(req, res)=>{
    var myData = new Enquiry(req.body);
    myData.save().then(()=>{
        res.send('The form has been submitted successfully')
    }).catch(()=>{
        res.status(400).send('Form is not saved')
    })
})

// for sign up 
app.post('/signup',(req, res)=>{
    var myData = new User(req.body);
    myData.save().then(()=>{
        res.send('You have been successfully signed up')
    }).catch(()=>{
        res.status(400).send('Please try again')
    })
})

// START THE SERVER
app.listen(port, () => {
    console.log(`The application started successffully on port ${port}`);
})