import express, { Request, Response } from "express"
import config from './config';

const app = express();
const port = config.port;
app.use(express.json());

app.get('/',(req:Request,res:Response)=>{
    res.send('server is running')
})

app.listen(port, ()=>{
    console.log(`server is running on port ${port}`);
})