import { Pool } from "pg"
import config from "."

export const pool = new Pool({
    connectionString : `${config.connection_str}`,
    // ssl: { rejectUnauthorized: false }
    
})


const initDB = async () =>{
    await pool.query(`CREATE TABLE IF NOT EXISTS users
        (
        id SERIAL PRIMARY  KEY,
        name VARCHAR(100) NOT NULL,
        email VARCHAR(150) UNIQUE NOT NULL,
        password TEXT NOT NULL,
        age INT,
        created_at TIMESTAMP DEFAULT NOW(),
        updated_at TIMESTAMP DEFAULT NOW()
        )`
    )
}

export default initDB;