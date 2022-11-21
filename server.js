import express from "express";
const app = express();
import mongoose from "mongoose";
import bodyParser from "body-parser";
//const mongoose = require("mongoose");
//const bodyParser = require("body-parser");



app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect("mongodb+srv://ThaisFelicio:fjmaXzX3zqpUjEze@dadoscurriculo.otgkmeg.mongodb.net/Users", {useNewUrlParser: true}, {useUnifiedTopology: true})



app.listen(3001, function(){
    console.log("server is running on 3001");
})

app.post("/2Logic/logicaCadastro", function(req, res){
    let newUser = new User({
                Email: req.emailVerificado(),
                password: req.senhaVerificada()
            });
            newUser.save();
})




//create a data schema
const usersSchema = {
    Email: String,
    password: String
}

const User = mongoose.model("User", usersSchema);

// app.get("/", function(req, res){
//     res.sendFile(__dirname + "/2Logic/logicaCadastro.js");
// })

// app.post("/", function(req, res){
//     let newUser = new User({
//         name: req.body.name,
//         password: req.body.password
//     });
//     newUser.save();
// })

