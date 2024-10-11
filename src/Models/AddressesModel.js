import db from '../Config/mysqlConfig';

class AddressesModel {

  // criar cliente na base de dados
  async create(customerId, { street, neighborhood, placeNumber, placeReference, city, cep }) {
    
    if (!customerId || !street || !neighborhood || !placeNumber || !placeReference || !city || !cep) throw new Error("Atributos Json faltando.");

    try {   
      
      // query de inserção dos endereços.
      const response = await db(`
        INSERT INTO ADDRESSES (CustomerId, Street, Neighborhood, PlaceNumber, PlaceReference, City, Cep) 
        VALUES( '${customerId}', '${street}', '${neighborhood}', '${placeNumber}', '${placeReference}', '${city}','${cep}' );
      `); 

      return { id: response.insertId, street, neighborhood, placeNumber, placeReference};
    
    } catch (e) {
        throw new Error(e.message);
    }
  
  }

  // alterar cliente na base de dados
  async update({ id, json }) {
    
    try {

      // query a ser construida
      const string = [];
      
      // campos vazios
      if(!json.street && !json.neighborhood && !json.placeNumber && !json.placeReference && !json.city && !json.cep) throw new Error('Nenhuma parametro valido.');            

      // inserções de atributos na query
      if(json.street) string.push(`Street = '${json.street}'`);
      if(json.neighborhood) string.push(`Neighborhood = '${json.neighborhood}'`);
      if(json.placeNumber) string.push(`PlaceNumber = '${json.placeNumber}'`);
      if(json.placeReference) string.push(`PlaceReference = '${json.placeReference}'`);
      if(json.city) string.push(`City = '${json.city}'`);
      if(json.cep) string.push(`Cep = '${json.cep}'`);

      // ac == acumulador, at == atual
      // transforma o array no formato padrao da query
      const query = string.reduce((ac, at, index) => (index == string.length - 1) ? ac + at : ac + at + ', ' , '');

      const response = await db(`
        UPDATE
        ADDRESSES
        SET
        ${query}
        WHERE
        AddressID = ${id}
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
        DELETE FROM ADDRESSES WHERE AddressID = ${id}
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
        SELECT * FROM ADDRESSES WHERE AddressID = ${id}
      `);
      
      return idFind[0];

    } catch(e) {
      return e.message
    }
  }

}

export default new AddressesModel();
