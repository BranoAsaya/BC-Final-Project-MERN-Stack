import dotenv from "dotenv"
import mongodb from "mongodb";
import axios from "axios";
dotenv.config()
const MongoClient = mongodb.MongoClient
const ObjectId = mongodb.ObjectId
const url = process.env.MONGO_URI
const client = MongoClient.connect(url)
const DB = 'Data'
const collection = 'Users'

function UsersDatabase(req, res) {
  client
    .then((data) => {
      const database = data.db(DB);
      database
        .collection(collection)
        // .insertOne({email:'tes2',data:[]})
        .find({})
        .toArray()
        .then((docs) => {
         res.send(docs)
        });
    })
    .catch((err) => {
     throw err
    });
}



export { UsersDatabase }
