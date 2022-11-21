import { CriarUsuario } from "./logicaCadastro.js";

class Camada2criar {
    handle(request, response) {
        const {emailVerificado, senhaVerificada} = request;

        //chamar a camada 2
        const criarUsuario = new CriarUsuario();
        const result = criarUsuario.execute(emailVerificado, senhaVerificada);
        return response.json(result);
    }
}

export { Camada2criar }; 