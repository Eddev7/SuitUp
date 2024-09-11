import app from './app';
import db from './src/Config/mysqlConfig';
import dotenv from 'dotenv';
dotenv.config();

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});