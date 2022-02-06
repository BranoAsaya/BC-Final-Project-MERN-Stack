import  express  from "express";
import dotenv from "dotenv"
import Database from './DBfunctions.js'
dotenv.config()
const app = express();
const PORT = process.env.PORT ;
const DBname="Data";


app.use(express.json());

app.get("/Users", (req, res) => {
  Database.UsersData(req, res);
});
app.post("/AddUser", (req, res) => {
  Database.AddUser(req, res);
});
app.get("/Users/FindUser/:id", (req, res) => {
  Database.FindUser(req, res);
});

if(process.env.NODE_ENV==='production')
{
    app.use(express.static(path.join(__dirname,"client","build")));
    app.get("*",(req,resp)=>{
        resp.sendFile(path.join(__dirname,"client","build","index.html"));
    })
}

app.listen(PORT);

