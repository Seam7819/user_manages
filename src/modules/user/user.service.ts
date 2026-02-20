import { pool } from "../../config/db";
import bcrypt from "bcryptjs"

const createUser = async (payload: Record<string, unknown>) => {

    const {name, email, password } = payload;
    const hashedPass = await bcrypt.hash(password as string, 10)

    const result = await pool.query(`INSERT INTO users(name,email,password) VALUES($1,$2,$3)`, [name,email, hashedPass]);
    console.log(result);
    return result;
}

const getUser = async()=>{
    const result = pool.query(`SELECT * FROM users`);
    return result;
}

export const userServices = {
    createUser,
    getUser
}