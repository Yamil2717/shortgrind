import Mysql from 'mysql2';

class db {
    public pool = Mysql.createPool({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'shortgrind',
        waitForConnections: true,
        connectionLimit: 100,
        queueLimit: 0
    });
}

const mysql = new db();

export default mysql.pool;