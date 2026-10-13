import mysql from "mysql2";
import dotenv from "dotenv";
dotenv.config();

//BANCO DE DADOS
//integrando o banco de dados na aplicação
const pool = mysql
  .createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
  })
  .promise();

//fazendo querys simples
export async function getUsuario() {
  const [rows] = await pool.query("SELECT * FROM DB_Lead");
  return rows;
}

export async function getUsuarios(ID) {
  console.log("Taquaritinga");
  const [rows] = await pool.query(
    `
    SELECT * FROM DB_Lead 
    WHERE ID = ?
    `,
    [ID],
  );
  return rows[0];
}

export async function createUsuario(cpf, Email, Telcel) {
  console.log("Tainha");
  const [result] = await pool.query(
    `
    INSERT INTO DB_Lead (cpf, Email, Telcel)
    VALUES (?, ?, ?)
    `,
    [cpf, Email, Telcel],
  );
  const ID = result.insertId;
  return getUsuarios(ID);
}

// //Mostra o resultado do INSERT query
// /*const result = await createUsuario("klsdjnfvojsdio", "oaidjfi0ojsdifv");
// console.log(result);*/

// //Mostra o resultado do SELECT query
// const result = await getUsuarios(1);
// console.log(result);
