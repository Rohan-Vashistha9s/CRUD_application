import express from 'express';
import Connection from './database/db.js';
import  dotenv  from "dotenv";
import Routes  from './Routes/route.js';
import  cors  from 'cors';
import bodyParser from 'body-parser';


const app = express();

dotenv.config();
app.use(bodyParser.json({extended :true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.use('/',Routes);


 
const Port = 8000;

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
Connection(username,password);

app.listen(Port, ()=>console.log(`server is running succesfully on Port ${Port}`));