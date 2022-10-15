require('./conn/mongo');
const express = require('express');
const app = express();
const http = require('http');
const port = 3001;
const server = http.createServer(app);
const {
  Server
} = require("socket.io");
const io = new Server(server);
const hbs = require('hbs');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const cookie = require('cookie');
require('dotenv').config()
const async = require('hbs/lib/async');


app.use(cookieParser());
app.set('view engine', 'hbs');
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static('public'));
hbs.registerPartials(__dirname + '/views/partials');


const Users = require('./models/Users');
const Clubs = require('./models/Clubs');

app.get('/', (req, res) => {
  res.render('index');
})

app.get('/login', async (req, res) => {
  try {
    if (req.cookies['userdata']) {
      var decoded = jwt.verify(req.cookies['userdata'], process.env.JWT_SIGNATURE);
      const user = await Users.findOne({
        email: decoded.email
      });
      if (user) {
        res.redirect('/home')
      } else {
        res.render('login');
      }
    } else
      res.render('login');
  } catch (error) {
    console.log(error);
    res.redirect('/');
  }
});


app.post('/login', async (req, res) => {
  try {
        if (req.body.email == "" || req.body.password == "") {
              res.render('login', {
                    message: "Please Enter Username and Password !"
              })
        } else if (req.body.email == "") {
              res.render('login', {
                    message: "Please Enter Email !"
              })
        } else if (req.body.password == "") {
              res.render('login', {
                    message: "Please Enter Password !"
              });
        } else {
              const User = await Users.findOne({
                    email: req.body.email,
                    password: req.body.password
              });
              if (User) {
                    var token = await jwt.sign({
                          email: User.email,
                          name: User.profile.displayName,
                          branch: User.branch,
                          section: User.section
                    }, process.env.JWT_SIGNATURE );
                    await res.cookie('userdata', token);
                    res.redirect('/home');
              } else {
                    res.render('login', {
                          message: " Invalid Credentials !"
                    });
              }
        }
  } catch (error) {
        console.log(error);
  }
});

//CLUB LOGIN
app.get('/clublogin', (req, res) => {
  res.render('clublogin');
})



app.post('/clublogin', async (req, res) => {
  try {

        const club = await Clubs.findOne({
              email: req.body.email,
        });
        if (club) {
              var obj = club.members.find((e) => e.email === req.body.memberemail);
              if (obj) {
                    var token = await jwt.sign({
                          email: club.email,
                          memberemail: obj.email,
                          membername: obj.name,
                          memberdesignation: obj.designation,
                          batch: obj.batch,
                          rank: obj.rank,
                    }, 'amitkumar');
                    await res.cookie('clubdata', token);
                    res.redirect('/club/home');
              } else {
                    res.render('clublogin', {
                          message: "You are Not Registered As Member Of The Club !"
                    })
              }
        } else {
              res.render('clublogin', {
                    message: "Club Is Not Registered in BitApp !"
              })
        }
  } catch (error) {
        console.log(error);
  }
});

app.get('/home',(req,res)=>{
  res.render('home')
})

app.get('/club/home',(req,res)=>{
  res.render('club/home')
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
})