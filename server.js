require('./conn/mongo');

const express = require('express')
const app = express()
const hbs=require('hbs');
const port = 3000

app.use(express.static('public'));
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine','hbs');

app.get('/', (req, res) => {
  res.render('index');
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
})