import db from '../Config/mysqlConfig';

class CustomersModel {

  async create({ firstName, lastName, email, password, phone, genero }) {
    
    if (!firstName || !lastName || !email || !password || !phone || !genero)
      return;

    try {
      
      const response = await db(`
        INSERT INTO CUSTOMERS (FirstName, LastName, Email, PasswordHash, Phone, Genero) 
        VALUES( '${firstName}', '${lastName}', '${email}', '${password}', '${phone}','${genero}' );
      `);

      return { id: response[0].insertId, firstName, lastName, email};
    
    } catch (e) {
        throw new Error(e.message);
    }
  
  }

  async update({ id, json }) {
    
    try {
      const string = [];
      if(json.email) throw new Error('Email não e valido para ser alterado.');
      if(!json.firstName && !json.lastName && !json.password && !json.phone && !json.genero) throw new Error('Nenhuma parametro valido.');
      if(json.firstName) string.push(`FirstName = '${json.firstName}'`);
      if(json.lastName) string.push(`LastName = '${json.lastName}'`);
      if(json.password) string.push(`PasswordHash = '${json.password}'`);
      if(json.phone) string.push(`Phone = '${json.phone}'`);
      if(json.genero) string.push(`Genero = '${json.genero}'`);

      string[string.length - 1] = string[string.length - 1].replace(',', '');

      // ac == acumulador, at == atual
      const set = string.reduce((ac, at, index) => (index == string.length - 1) ? ac + at : ac + at + ', ' , '');

      const response = await db(`
        UPDATE
        CUSTOMERS
        SET
        ${set}
        WHERE
        CustomersID = ${id}
      `);
      
      if(response[0].changedRows == 0) throw new Error("Nada modificado.");

      return { 
        message: `Update concluido com sucesso`, 
        sql: `${response[0].info}`
      };
      
    } catch(e) {
      throw new Error(e.message);
    }
    
  }


}

export default new CustomersModel();
