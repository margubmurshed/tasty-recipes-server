const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 5000;
const chefs = require('./data/chefs.json');
const recipes = require('./data/recipes.json');

const app = express();
app.use(cors());

app.get('/allChefsDetails', (req, res) => {
    res.send(chefs);
})

app.get('/chef/:id/details', (req, res) => {
    const id = req.params.id;
    const selectedChef = chefs.chefs.find(chef => chef.id === id);
    res.send(selectedChef)
})

app.get('/chef/:id/recipes', (req, res) => {
    const chefID = req.params.id;
    const chefRecipes = recipes[chefID]
    res.send(chefRecipes)
})

app.listen(port, () => console.log('listening port' + port))