import  express  from "express";
import dotenv from "dotenv"
import Database from './DBfunctions.js'
import path from 'path'
import {fileURLToPath} from 'url';
const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);
console.log(path.join(__dirname,"client","build"));
dotenv.config()
const app = express();
const PORT = process.env.PORT ||  5000;
const DBname="Data";

app.use(express.json());


app.get("/", (req, res) => {
 res.status(200).send('hello')
});
app.get("/Users", (req, res) => {
  Database.UsersData(req, res);
});
app.post("/AddUser", (req, res) => {
  Database.AddUser(req, res);
});
app.get("/Users/FindUser/:id", (req, res) => {
  Database.FindUser(req, res);
});
    app.use(express.static(path.join(__dirname,"client","build")));
    app.get("*",(req,resp)=>{
        resp.sendFile(path.join(__dirname,"client","build","index.html"));
    })



app.listen(PORT);

