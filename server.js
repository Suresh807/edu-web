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

mongoose.connect("mongodb+srv://sureshkumar543514:5SR4cYR44m6gy7q5@cluster0.kzdm4dn.mongodb.net/webv", {
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

  app.post('/login', async (req, res) => {
    try {
        const a = req.body.name;
        const b = req.body.pass;

        const signss = await Sign.find();

        for (const person of signss) {
            if (person.name === a && person.pass === b) {
                console.log("matches");
                res.render('index', {
                    score: score
                });
                return; // Exit the loop if a match is found
            }
        }

        // If no match is found
        console.log("No matches found");
        // Handle response or rendering for no matches

    } catch (err) {
        console.log(err);
        // Handle error response
    }
});



app.post('/signup', async (req, res) => {
  try {
      const signn = new Sign({
          name: req.body.name,
          school_name: req.body.school_name,
          school_id: req.body.school_id,
          pass: req.body.pass
      });

      await Sign.insertMany([signn]);
      console.log("Successfully saved default items to DB");
      res.redirect('/');
  } catch (err) {
      console.log(err);
      res.status(500).send("An error occurred.");
  }
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
