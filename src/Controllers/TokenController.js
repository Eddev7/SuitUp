import model from "../Models/CustomersModel";
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config();

class TokenController {
    async store(req, res) {
        // pega o email e senha da requisição
        const { email = '', password = '' } = req.body

        // checka se o email e a senha foram passados
        if(!email || !password) {
            return res.status(400).json({
                error: 'email e senha são obrigatorios.'
            })
        }

        // consulta no banco de dados se o usuario existe e retorna id e password hash da senha
        const {CustomerID, PasswordHash} = await model.findOne(email);

        // checka se existe o id e o password hash
        if(!CustomerID || !PasswordHash) {
            return res.status(401).json({
                error: 'Cliente não existe na base de dados.'
            })
        }   

        // valida se o password e igual o passwordHash
        const valida = await model.passwordIsValid(password, PasswordHash);
        if(!valida) {
            return res.status(401).json({
                error: 'Email ou senha invalidos.'
            })
        }   

        // cria o token passando como payload id e email.
        const token = jwt.sign({ CustomerID, email }, process.env.TOKEN_SECRET_CUSTOMERS, {
            expiresIn: process.env.TOKEN_EXPIRATION
        });

        // envia o token.
        res.send({
            token
        })
    }
}

export default new TokenController();   