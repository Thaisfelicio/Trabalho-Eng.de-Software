/*
!ESTE ARQUIVO TEM COMO OBJETIVO VERIFICAR SE EMAILS E SENHAS ESTÃO CORRETOS E MANDÁ-LOS PARA O ESQUEMA PADRÃO CRIADO AQUI, LOGO EM SEGUIDA CRIAR UM 
!USUÁRIO NOVO APARTIR DESSES DADOS INSERIDOS PELOS USUÁRIO E MANDAR ESTES DADOS PARA A CAMADA DE BANCO DE DADOS, INTITULADA 3DATABASE, ARQUIVO CADASTRARUSUARIO.JS*/

import mongoose from "../3Database/mongoose";

//dados que são digitados nos inputs
const email = document.getElementsByName("email").value;
const senha = document.getElementsByName("senha").value;
const confirmarSenha = document.getElementsByName("confirmarSenha").value;

//somente a caixa dos inputs
const inputEmail = document.getElementById("inputEmail");
const inputSenha = document.getElementById("inputSenha");
const inputConfirmarSenha = document.getElementById("inputConfirmarSenha");

//variavel constante do formulario completo
const form = document.getElementById("form");

/*
!copiei as funções do arquivo formularioCadastro.js do curso senai*/

//Esta função verifica se o email é válido
function checkEmail(email) {
    return /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/.test(
      email
    );
  }
  /*
  ?esta função adiciona classe de success no formulário, quando os dados são preenchidos corretamente */
  function addSucessoNaClasse(){
    const formControls = form.querySelectorAll(".form-control");
  
    const formIsValid = [...formControls].every((formControl) => {
      return formControl.className === "form-control sucess";
    });

    if (formIsValid) {
    console.log("O formulário está 100% válido!");
    }
  }
  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
  /*
  ?função que coloca a classe erro no formulário */
  function setErrorFor(input, message) {
    //essa contante pega o elemento pai, a tag a qual ela pertence, a tag mais em cima na hierarquia
    const formControl = input.parentElement;
    //
    const small = formControl.querySelector("small");
  
    //adiciona mensagem de erro
    small.innerText = message;
  
    //adiciona a classe de erro
    formControl.className = "form-control error";
  }
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
  /**
   *  ?função que retornará o email valido do usuario, para sua inserção no banco de dados*/
function emailVerificado(){
    if (email === "") {
      setErrorFor(emailLabel, "O email é obrigatório");
    } else if (!checkEmail(email)) {
      setErrorFor(emailLabel, "Por favor, insira um email válido");
    } else {
      setSucessFor(emailInput);
      return email;
    }
    addSucessoNaClasse();

}
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
/*
?verifica se as senhas estão corretas */
function senhaVerificada(){
    if (senha === "") {
      setErrorFor(inputSenha, "A senha é obrigatória.");
    } else if (senha.length < 7) {
      setErrorFor(inputSenha, "A senha precisa ter no mínimo 7 caracteres");
    } else {
      setSucessFor(inputSenha);
    }
  
    if (confirmarSenha === "") {
      setErrorFor(inputConfirmarSenha, "A confirmação de senha é obrigatória.");
    } else if (confirmarSenha !== senha) {
      setErrorFor(inputConfirmarSenha, "As senhas não conferem.");
    } else {
      setSucessFor(inputConfirmarSenha);
      return senha;
    }
    addSucessoNaClasse();
    
}
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

/*
!TALVEZ TIRE ESTA PARTE
?cria o esquema do dado para o usuario, como será o formato de envio padrão da informação*/
let usuario = function()
{
    const usuarioSchema = {
        Email: String,
        Senha: String
    }
    const Usuario = mongoose.model("Usuario", usuarioSchema);
}
//---------------------------------------------------------------------------------------------------------------------------//
/*
?cria um usuário novo apartir do dados fornecidos pelo usuário*/
let criarConta = function()
{
    novoUsuario = new usuario({
        Email: emailVerificado(),
        Senha: senhaVerificada()
    });
    novoUsuario.save();
}