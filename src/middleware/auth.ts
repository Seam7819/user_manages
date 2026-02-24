import  jwt  from 'jsonwebtoken';
import { NextFunction, Request, Response } from "express"
import config from '../config';

const auth = () =>{
    return async (req:Request,res:Response,next:NextFunction)=>{
        const token = req.headers.authorization;
        // console.log(token);
        if(!token){
            throw new Error("you are not authorized");
        }
        const decoded = jwt.verify(token, config.jwt_secret as string)
        console.log(decoded);
        next();
    }
}

export default auth;