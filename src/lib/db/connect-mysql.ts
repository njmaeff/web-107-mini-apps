require('dotenv').config();
import mysql from "mysql"

export class MySql {
    query = async (sql: string, values = []) => {
        return new Promise((resolve, reject) => {
            this.connection.query(sql, values, (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results);
                }
            });
        });
    }

    constructor(private connection: mysql.Connection) {
    }
}

export const withMysql = async (fn: ({
                                         connection,
                                         db
                                     }: { connection: mysql.Connection, db: MySql }) => Promise<any> | any) => {
    const connection = mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    });

    try {
        await fn({connection, db: new MySql(connection)});
    } finally {
        connection.end();
    }
};

