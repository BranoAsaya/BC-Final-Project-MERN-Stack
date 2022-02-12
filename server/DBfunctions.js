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

function UsersData(req, res) {
  client
    .then((data) => {
      const database = data.db(DB);
      database
        .collection(collection)
        .find({})
        .toArray()
        .then((docs) => {
          res.send(docs)
        });
    })
    .catch((err) => {
      res.status(400).send({ error: { message: 'Bad Request' } });
      throw err
    });
}
function AddUser(req, res) {
  const body = req.body;
  client
    .then((data) => {
      const database = data.db(DB);
      database
        .collection(collection)
        .insertOne(body)
        .then((docs) => {
          res.send(docs)
        });
    })
    .catch((err) => {
      res.status(400).send({ error: { message: 'Bad Request' } });
      throw err
    });
}
function FindUser(req, res) {
  const params = req.params.id;
  const object = { _id: ObjectId(params) };
  client
    .then((data) => {
      const database = data.db(DB);
      database
        .collection(collection)
        .findOne(object)
        .then((docs) => {
          res.send(docs)
        });
    })
    .catch((err) => {
      res.status(404).send({ error: { message: 'No  Found' } });
      throw err
    });
}
function addMassage(req, res) {
  const body = req.body;
  console.log(body,'body');
  const params = req.params.id;
  const object = {email: params };
  const update = {
    $set: {
      'data.kind':body
    },
  };
  client
    .then((data) => {
      const database = data.db(DB);
      database
        .collection(collection)
        .updateOne(object,update)
        .then((docs) => {
          res.send(docs)
        });
    })
    .catch((err) => {
      res.status(404).send({ error: { message: 'No  Found' } });
      throw err
    });
}

const Database = { UsersData, AddUser, FindUser,addMassage }
export default Database
