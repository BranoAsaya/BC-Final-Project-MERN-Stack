console.log("app is loading");
import  express  from "express";
const app = express();
const PORT = process.env.PORT || 5000;

const books = [
  {id:1,title:'book1'},
  {id:2,title:'book2'},
]
// used for json inside body 
app.use(express.json());

app.get("/api", (req, res) => {
  console.log("root is accessed");
  res.send({res:"result from server"});
});
app.get("/books", (req, res) => {
  res.send(books)
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

