import db from '../Config/mysqlConfig';

class CustomersModel {

  async create({ firstName, lastName, email, password, phone, genero }) {
    
    if (!firstName || !lastName || !email || !password || !phone || !genero)
      return;

    try {
      
      const id = await db(`
        INSERT INTO CUSTOMERS (FirstName, LastName, Email, PasswordHash, Phone, Genero) 
        VALUES( '${firstName}', '${lastName}', '${email}', '${password}', '${phone}','${genero}' );
      `);

      return { id, firstName, lastName, email};
    
    } catch (e) {
        throw new Error(e.message);
    }
  
  }

  async update({ id }) {

  }
}

export default new CustomersModel();
