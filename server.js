const express = require('express');
const app = express();
const cors = require('cors')
const mongoose = require('mongoose');
require('dotenv').config();

//config
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const apiKey = process.env.API_KEY;


//connect to mongoose DB
mongoose.connect(apiKey)

//data schema
const itemsSchema = {
    text: String,
    amount: Number
};

//data model
const Item = mongoose.model("Item", itemsSchema);

//get route
app.get('/expense/', (req, res) => {
    Item.find()
    .then((items) => res.json(items))
    .catch((err) => res.status(400).json("error " + err))
})

// create route
app.post("/newexpense", (req, res) => {
    const newItem = new Item({
        text: req.body.text,
        amount: req.body.amount
    });
    newItem.save()
    .then(item => console.log(item))
    .catch(err => res.status(400).json("error" + err))
})

//delete route
app.delete('/delete/:id', (req,res) => {
    const id = req.params.id;
    Item.findByIdAndRemove(id, (req,res) => {
        console.log('deleted')
    })
})

app.listen(3001, () => {
    console.log('express is running on port 3001!')
})