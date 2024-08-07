const db = require('./db');
module.exports = {
    buscarTodos: (req,res) =>{
        return new Promise((aceito, rejeitado)=>{

            db.query ('SELECT * FROM Login_Information', (error, results)=>{
                if(error) { rejeitado(error); return; }
                aceito(results);

            });
        });
    }
};

