import jwt from 'jsonwebtoken'
import dotenv from 'dotenv';
dotenv.config();

export default (req, res, next) => {
    const { authorization } = req.headers;

    if(!authorization) {
        return res.status(401).json({
            error: 'login required',
        });
   }

   // pega o token
   const [texto, token] = authorization.split(' ');

   // checka se o token e valido
   try {
    const dados = jwt.verify(token, process.env.TOKEN_SECRET_CUSTOMERS);

    const {CustomerID, email} = dados;
    
    req.customerID = CustomerID;
    req.customerEmail = email;
   
    return next();
   } catch(e) {
        return res.status(401).json({
            error: 'Token expirado ou invalido.',
        });
   }
}