import  express  from "express";
import dotenv from "dotenv"
import {APIdatabase} from './functions.js'
dotenv.config()
const app = express();
const PORT = process.env.PORT ;
const DBname="Data";


app.use(express.json());

app.get("/api", (req, res) => {
  res.send({res:"result from server"});
});
app.get("/DataAPI", (req, res) => {
  APIdatabase(req, res, DBname, "Users");
});

app.listen(PORT);

