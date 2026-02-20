import  bcrypt  from 'bcryptjs';
import { pool } from "../../config/db"

const logInUser = async(email:string, password:string)=>{
    
    const user = await pool.query(`SELECT * FROM users WHERE email=$1`,[email]);

    if(user.rows.length === 0){
        throw new Error('invalid credential');
    }

    const matchedPass = await bcrypt.compare(password, user.rows[0].password)

    if(!matchedPass){
        throw new Error('invalid pass')
    }

    return user;
}

export const authServices = {
    logInUser
}