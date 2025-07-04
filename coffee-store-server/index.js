const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.2cljcwv.mongodb.net/coffeeDB?retryWrites=true&w=majority&ssl=true`;


// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();
    // Send a ping to confirm a successful connection

    const coffeesCollection = client.db("coffeeDB").collection("coffees");
    const usersCollection = client.db("coffeeDB").collection("users");

    app.get("/coffees", async (req, res) => {
      const cursor = coffeesCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    });

    app.get("/coffees/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await coffeesCollection.findOne(query);
      res.send(result);
    });

    app.post("/coffees", async (req, res) => {
      const newCoffee = req.body; 
      const result = await coffeesCollection.insertOne(newCoffee);
      res.send(result);
    });

    // app.put("/coffees/:id", async (req, res) => {
    //   const id = req.params.id;
    //   const filter = { _id : new ObjectId(id)};
    //   const options = { upsert: true} ;
    //   const updatedCoffee = req.body
    //   const updatedDoc = {
    //     $set: updatedCoffee
    //   }

    //   const result = await coffeesCollection.updateOne(filter ,updatedDoc , options);
    //   res.send(result);

    // });

    // app.put('/coffees/:id' , async (req , res) => {
    //   const id = req.params.id ;
    //   const filter = { _id : new ObjectId(id)};
    //   const options = { upsert :  true} ;
    //   const updateDoc = {
    //     $set: req.body
    //   }
    //   const result = await coffeesCollection.updateOne(filter , updateDoc , options);
    //   res.send(result);
    // })


    app.put('/coffees/:id' , async (req, res) => {
      const id = req.params.id ;
      const filter = { _id : new ObjectId(id)} ;
      const options = { upsert : true };
      const updateDoc = {
        $set: req.body
      }
      const result = await coffeesCollection.updateOne(filter , updateDoc , options) ;
      res.send(result);
    })

    app.delete("/coffees/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await coffeesCollection.deleteOne(query);
      res.send(result);
    });

    // user related ...
    app.get('/users' , async(req ,res) => {
      const result = await usersCollection.find().toArray();
      res.send(result);
    })

    app.get('/users/:id' , async(req,res) => {
      const id = req.params.id;
      const query = { _id : new ObjectId(id)};
      const result = await usersCollection.findOne(query);
      res.send(result);
    })

    app.put('/users/:id' , async(req,res) => {
      const id = req.params.id;
      const filter = { _id : new ObjectId(id)};
      const options = { upsert: true };
      const userProfile = req.body;
      const updatedDoc = {
        $set: userProfile,
      };
      const result = await usersCollection.updateOne(filter, updatedDoc, options);
      res.send(result);
    });

    app.post('/users' , async(req,res)=>{
      const userProfile = req.body;
      const result = await usersCollection.insertOne(userProfile);
      res.send(result);
    })

    app.patch('/users' , async (req , res) => {
      const {email , lastSignInTime} = req.body;
      const filter = { email : email };
      const updatedDoc = {
        $set:{
          lastSignInTime : lastSignInTime
        }
      }
      const result = await usersCollection.updateOne(filter, updatedDoc);
      res.send(result);
    })

    app.delete('/users/:id' , async(req,res) => {
      const id = req.params.id;
      const query = { _id : new ObjectId(id)};
      const result = await usersCollection.deleteOne(query);
      res.send(result);
    })

    // await client.db("admin").command({ ping: 1 });
    // console.log(
    //   "Pinged your deployment. You successfully connected to MongoDB!"
    // );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("coffee server is getting hotter.");
});

app.listen(port, () => {
  console.log(`coffee server is running on port : ${port}`);
});
