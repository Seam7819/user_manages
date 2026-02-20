import express, { Request, Response } from "express"
import config from './config';
import { userRoutes } from "./modules/user/user.route";
import initDB from "./config/db";
import { authRoute } from "./modules/auth/auth.route";

const app = express();
const port = config.port;
app.use(express.json());

app.get('/',(req:Request,res:Response)=>{
    res.send('server is running')
})

app.use('/users', userRoutes);

app.use('/auth', authRoute)

initDB()

app.listen(port, ()=>{
    console.log(`server is running on port ${port}`);
})