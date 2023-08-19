const express = require('express')
const app = express()
const path = require('path');
app.set('view engine', 'ejs')

//app.set('view engine', 'ejs');
let score;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));
var mongoose = require('mongoose')
var bodyparser = require('body-parser')
app.use(bodyparser.json())
app.use(express.static('views'))
app.use(bodyparser.urlencoded({
  extended: true
}))

mongoose.connect("mongodb://localhost:27017/Education", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

var db = mongoose.connection
db.on('error', () => console.log('connection error'))
db.once('open', () => {
  console.log("connected to db")
})


const esignSchema = new mongoose.Schema({
    name:String,
    school_name:String,
    school_id:Number,
    mobile: Number,
    pass: String
  })
  
  const Sign = mongoose.model("Sign", esignSchema);

  app.get('/',(req,res)=>{
res.render("login");
  });

  app.post('/login', (req, res) => {
    var a = req.body.name;
    var b = req.body.pass;
    // console.log(a);
    // console.log(b);
   
    Sign.find()
      .then((signss) => {
  
        signss.forEach(function (person) {
     
          if (person.name === a && person.pass === b) {
            console.log("matches");
            res.render('index',{
              score:score
            })
          }
  
        })
      })
  
      .catch((err) => {
        console.log(err);
  
      });
  
  });


  app.post('/signup', (req, res) => {
    const signn = new Sign({
      name: req.body.name,
      school_name: req.body.school_name,
      school_id: req.body.school_id,
      pass:req.body.pass
    });
    Sign.insertMany([signn])
      .then(function () {
        console.log("Successfully saved defult items to DB");
      })
      .catch(function (err) {
        console.log(err);
      });
    res.redirect('/')
    
  
  });

  app.post("/score",(req,res)=>{
    score=req.body.quitbutton;
    res.render("index",{
      score:score
    })
  })


  app.get('/index', (req, res) => {
    res.render("index",{
      score:score
    })
  })


  app.post('/index', (req, res) => {
    res.render("index",{
      score:score
    })
  })



  app.listen(3003, function () {
    console.log("Server started on port 3003 ");
  });
