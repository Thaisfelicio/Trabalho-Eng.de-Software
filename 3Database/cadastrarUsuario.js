//import express from "express";
//const express = require("express");
//const app = express();
//const mongoose = require("mongoose");
//const bodyParser = require("body-parser");

/*
?variáveis exportadas da camada 2 de lógica */
//let EmaileSenha = require("../2Logic/logicaCadastro");

//---------------------------------------------------------------------------------------------------------------------------//


/*

?cria o esquema do dado para o usuario, como será o formato de envio padrão da informação*/
let usuario = function()
{
    const usuarioSchema = {
        Email: String,
        Senha: String
    }
    const Usuario = mongoose.model("Usuario", usuarioSchema);
    return Usuario;
}
//---------------------------------------------------------------------------------------------------------------------------//


//--------------------------------------------------------------------------------------------------------------------------//
app.get("/", function(req, res){
    res.sendFile(__dirname + "../2Logic/logicaCadastro.js");
});
/*
?cria um usuário novo apartir do dados fornecidos pelo usuário e salva no banco de dados*/
app.post("/logicaCadastro", function(req, res){
    novoUsuario = new usuario({
        Email: EmaileSenha.emailVerificado(),
        Senha: EmaileSenha.senhaVerificada()
    });
    req.novoUsuario.save();
})
