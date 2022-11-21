/*
!ESTE ARQUIVO TEM COMO OBJETIVO VERIFICAR SE EMAILS E SENHAS ESTÃO CORRETOS E MANDÁ-LOS PARA O ESQUEMA PADRÃO CRIADO AQUI, LOGO EM SEGUIDA CRIAR UM 
!USUÁRIO NOVO APARTIR DESSES DADOS INSERIDOS PELOS USUÁRIO E MANDAR ESTES DADOS PARA A CAMADA DE BANCO DE DADOS, INTITULADA 3DATABASE, ARQUIVO CADASTRARUSUARIO.JS*/




  
    
    //##########################################################################################################################################
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
    const formControls = form.querySelectorAll(".form-control");

    /*
!copiei as funções do arquivo formularioCadastro.js do curso senai*/

    // form.addEventListener("submit", (e) => {
     
    //  e.preventDefault();
      
    // });
    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

    //Esta função verifica se o email é válido
    function checkEmail(email) {
      return /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/.test(
        email
      );
    }
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
/**
     *  ?função que retornará o email valido do usuario, para sua inserção no banco de dados*/

    function emailVerificado() {
       if (checkEmail(email)) {
        return email;
      } 
      
      
    };
    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
/**
     * ?verifica se as senhas estão corretas */
     function senhaVerificada() {
     if (confirmarSenha == senha) {
        return senha;
      }
    };
    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
    

    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
    

    //##########################################################################################################################################
    //verificar se o usuario já existe no banco de dados... obs.: achar a função que procura por um campo especifico no banco mongo
    

    

    
  


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
