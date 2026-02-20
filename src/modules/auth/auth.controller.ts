import { Request, Response } from "express";
import { authServices } from "./auth.service";

const logInUser = async(req:Request,res:Response)=>{
    try{

        const result = await authServices.logInUser(req.body.email,req.body.password)

        res.status(200).json({
            success: true,
            message : "login successful",
            data: result.rows[0],
        })
    }catch(err:any){
        res.status(500).json({
            success: false,
            message: err.message,
        })
    }
}

export const authController = {
    logInUser,
}