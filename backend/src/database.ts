import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

interface TConfig {
    host: string | undefined;
    port: number | undefined;
    database: string | undefined;
    user: string | undefined;
    password: string | undefined;
    waitForConnections: boolean;
    connectionLimit: number;
    queueLimit: number;
}

const config: TConfig = {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
};

const database: mysql.Pool = mysql.createPool(config);

database.on("connection", () => {
    console.log("Connected to mysql");
});

export default database;
