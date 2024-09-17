import db from '../Config/mysqlConfig';
import bcrypt from 'bcryptjs'

class CustomersModel {

  async create({ firstName, lastName, cpf, email, password, phone, genero }) {
    
    if (!firstName || !lastName || !cpf || !email || !password || !phone || !genero) return;

    try {
      
      // cria o hash da senha.
      password = await this.passwordHash(password);

      // CRIAR VALIDAÇÃO DE EMAIL E CPF E TELEFONE

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

  async update({ id, json }) {
    
    try {

      // query a ser construida
      const string = [];
      
      // validações iniciais.
      if(json.email) throw new Error('Email não e valido para ser alterado.');
      if(json.cpf) throw new Error('CPF não pode ser alterado.')
      if(!json.firstName && !json.lastName && !json.password && !json.phone && !json.genero) throw new Error('Nenhuma parametro valido.');
      
      // inserções de atributos na query
      if(json.firstName) string.push(`FirstName = '${json.firstName}'`);
      if(json.lastName) string.push(`LastName = '${json.lastName}'`);
      if(json.password) string.push(`PasswordHash = '${json.password}'`);
      if(json.phone) string.push(`Phone = '${json.phone}'`);
      if(json.genero) string.push(`Genero = '${json.genero}'`);

      // ac == acumulador, at == atual
      // transforma o array no formato padrao da query
      const query = string.reduce((ac, at, index) => (index == string.length - 1) ? ac + at : ac + at + ', ' , '');

      const idFind = await db(`
        SELECT * FROM CUSTOMERS WHERE CustomersID = ${id}
      `);

      if(idFind.length == 0) throw new Error("Nenhum cliente encontrado.");
      
      const response = await db(`
        UPDATE
        CUSTOMERS
        SET
        ${query}
        WHERE
        CustomersID = ${id}
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

  async passwordHash(password) {
    const password_hash = await bcrypt.hash(password, 10);
    return password_hash;
  }

}

export default new CustomersModel();
