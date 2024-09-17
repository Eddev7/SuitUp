import mysql2 from 'mysql2/promise'
import dotenv from 'dotenv'

dotenv.config();

async function db(query) {
    const db = await mysql2.createConnection({
        host: process.env.MYSQL_HOST,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE
    });
    
    
    try {
        
        db.connect();
        const response = await db.query(query);

        return response[0];
    
    } catch(e) {

        throw new Error(e.message);
    
    } finally {
    
        db.end();
    
    }


}

export default db;