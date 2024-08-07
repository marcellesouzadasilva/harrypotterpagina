const LoginService = require('../services/LoginService');

module.exports = {

    buscarTodos: async (req, res)=> { 
        let json = {error:'', result:[]};

        let Login_Information = await LoginService.buscarTodos();

            for(let i in Login_Information){
                json.result.push({

                ID: Login_Information[i].ID,
                Email: Login_Information[i].Email,
                Senha: Login_Information[i].Senha,

                });
            }
             res.json(json);
    }

}