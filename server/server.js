import  express  from "express";
import dotenv from "dotenv"
import {UsersDatabase} from './functions.js'
dotenv.config()
const app = express();
const PORT = process.env.PORT ;
const DBname="Data";


app.use(express.json());

app.get("/Users", (req, res) => {
  UsersDatabase(req, res);
});


app.listen(PORT);

