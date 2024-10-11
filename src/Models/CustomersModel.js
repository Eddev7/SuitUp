import db from '../Config/mysqlConfig';
import bcrypt from 'bcryptjs'
import { cpf as cpfValid} from 'cpf-cnpj-validator';
import emailValid from 'email-validator';

class CustomersModel {

  // criar cliente na base de dados
  async create({ firstName, lastName, cpf, email, password, phone, genero }) {
    
    if (!firstName || !lastName || !cpf || !email || !password || !phone || !genero) throw new Error("Atributos Json faltando.");

    try {
      
      // cria o hash da senha.
      password = await this.passwordHash(password);

      // validação do cpf e email.
      if(!cpfValid.isValid(cpf)) throw new Error("CPF INVALIDO.");
      if(!emailValid.validate(email)) throw new Error("EMAIL INVALIDO.");

      // query de inserção dos clientes.
      const response = await db(`
        INSERT INTO CUSTOMERS (FirstName, LastName, CPF, Email, PasswordHash, Phone, Genero) 
        VALUES( '${firstName}', '${lastName}', '${cpf}', '${email}', '${password}', '${phone}','${genero}' );
      `); 

      return { id: response.insertId, firstName, lastName, email};
    
    } catch (e) {
        throw new Error(e.message);
    }
  
  }

  // alterar cliente na base de dados
  async update({ id, json }) {
    
    try {

      // query a ser construida
      const string = [];
      
      // validações iniciais.
      if(json.email) throw new Error('Email não e valido para ser alterado.');
      if(json.cpf) throw new Error('CPF não pode ser alterado.')
      // campos vazios
      if(!json.firstName && !json.lastName && !json.password && !json.phone && !json.genero) throw new Error('Nenhuma parametro valido.');
            

      // inserções de atributos na query
      if(json.firstName) string.push(`FirstName = '${json.firstName}'`);
      if(json.lastName) string.push(`LastName = '${json.lastName}'`);
      if(json.phone) string.push(`Phone = '${json.phone}'`);
      if(json.genero) string.push(`Genero = '${json.genero}'`);

      // password passa pelo bcrypt
      if(json.password) {
        const passwordHash = this.passwordHash(json.password)
        string.push(`PasswordHash = '${passwordHash}'`)
      };

      // ac == acumulador, at == atual
      // transforma o array no formato padrao da query
      const query = string.reduce((ac, at, index) => (index == string.length - 1) ? ac + at : ac + at + ', ' , '');

      const response = await db(`
        UPDATE
        CUSTOMERS
        SET
        ${query}
        WHERE
        CustomerID = ${id}
      `);

      // verifica se teve alteração no banco de dados.
      if(response.changedRows == 0) throw new Error("Nada modificado.");

      return { 
        message: `Update concluido com sucesso`, 
        sql: `${response.info}`
      };
      
    } catch(e) {
      throw new Error(e.message);
    }
  }

  // deletar cliente da base de dados
  async delete(id) {
    
    try {
      
      if(!id) throw new Error("Id não identificado.")
      
      await db(`
        DELETE FROM CUSTOMERS WHERE CustomerID = ${id}
      `);
      
      return `Cliente deletado com sucesso.`;
    
    } catch(e) {
      return `Ocorreu um error a o deletar o cliente: ${e.message}`;
    }
  }

  // encontra cliente atravez do id
  async findById(id) {
    try {
      
      if(!id) throw new Error("Id não identificado.")
      
        const idFind = await db(`
        SELECT * FROM CUSTOMERS WHERE CustomerID = ${id}
      `);
      
      return idFind[0];

    } catch(e) {
      return e.message
    }
  }

  // criar o hash da senha
  async passwordHash(password) {
    const password_hash = await bcrypt.hash(password, 10);
    return password_hash;
  }

  // encontrar por email
  async findOne(email) {

    try {
    
      const emailFind = await db(`
        SELECT * FROM CUSTOMERS WHERE Email = '${email}'
      `);
  
      if(emailFind.length === 0) throw new Error(`Email ${email} não encontrado.`);

      return emailFind[0];
    
    } catch(e) {
      return e.message;
    }

  }

  // valida e compara a password com o password hash
  async passwordIsValid(password, passwordHash) {
    return await bcrypt.compare(password, passwordHash);
  }

}

export default new CustomersModel();
