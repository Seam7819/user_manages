import  bcrypt  from 'bcryptjs';
import { pool } from "../../config/db";
import jwt from "jsonwebtoken"
import config from '../../config';

const logInUser = async(email:string, password:string)=>{
    
    const user = await pool.query(`SELECT * FROM users WHERE email=$1`,[email]);

    if(user.rows.length === 0){
        throw new Error('invalid credential');
    }

    const matchedPass = await bcrypt.compare(password, user.rows[0].password)

    if(!matchedPass){
        throw new Error('invalid pass')
    }

    const JwtPayload = {
        id: user.rows[0].id,
        name: user.rows[0].name,
        email : user.rows[0].email,
        role : user.rows[0].role
    }

    const secret = config.jwt_secret
    const token = jwt.sign(JwtPayload,secret as string, {expiresIn: "7d"})

    return {token,user: user.rows[0]};
}

export const authServices = {
    logInUser
}