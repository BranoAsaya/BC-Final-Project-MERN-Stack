import dotenv from "dotenv"
import mongodb from "mongodb";
import axios from "axios";
dotenv.config()
const MongoClient = mongodb.MongoClient
const ObjectId = mongodb.ObjectId
const url = process.env.MONGO_URI 
const client = MongoClient.connect(url)

function APIdatabase(req, res, DB, collection) {
    client
      .then((data) => {
        console.log("connected");
        let database = data.db(DB);
        database
          .collection(collection)
          .find({})
          .toArray()
          .then((docs) => {
            res.send(docs);
          });
      })
      .catch((err) => {
        console.error(err);
      });
  }



export{APIdatabase}
