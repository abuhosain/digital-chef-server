const express = require('express')
const app = express()
const cors = require('cors');
app.use(cors())
const port = 3000;
const chefs = require('./data/chefs.json');


app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get('/chefs', (req, res) => {
    res.send(chefs);
})

app.get('/chefs/:id', (req, res) => {
    const id = req.params.id;
    console.log(id)
    const selectedChef = chefs.find(n => n._id == id);
    res.send(selectedChef)
}) 

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})