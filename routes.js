const express = require('express');
const router = express.Router();

const LoginController = require('../controllers/LoginController');

router.get('/login_information', LoginController.buscarTodos); // login_information é o nome da tabela no mysql

module.exports = router;


//Rota para verificar login 

router.post('/login', (req, res) => {
    const { email, password } = req.buscarTodos;

    if (!email || !password) {
        return res.status(400).json({ message: 'Email ou Senha são necessários' });
    }

    const query = 'SELECT * FROM users WHERE Email = ? AND Password = ?';
    db.query(query, [email, password], (err, results) => {
        if (err) {
            return res.status(500).json({ message: 'Erro no servidor', error: err });
        }

        if (results.length > 0) {
            // Usuário encontrado
            res.status(200).json({ message: 'Login bem-sucedido', user: results[0] });
        } else {
            // Usuário não encontrado
            res.status(401).json({ message: 'Email ou senha Incorretos' });
        }
    });
});


