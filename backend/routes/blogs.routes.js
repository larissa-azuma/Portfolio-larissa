import { Router } from "express";
import db from "../db/connection.js";
import { ObjectId } from "mongodb";

const router = Router();
const BLOGS_COLLECTION = db.collection("blogs");

// Endpoint for getting list of blogs
router.get("/", async (req, res) => {
  let results = await BLOGS_COLLECTION.find({}).toArray();
  res.send(results).status(200);
});

// Endpoint for adding a single  blogs by id
router.get("/:id", async (req, res) => {
  let query = { _id: new ObjectId(req.params.id) };
  let result = await BLOGS_COLLECTION.findOne(query);

  !result ? res.send("Not found!").status(404) : res.send(result).status(201);
});

// Endpoint for adding a single post
router.post("/", async (req, res) => {
  try {
    let newPost = {
      post: req.body.post,
      content: req.body.content,
    };
    let result = await BLOGS_COLLECTION.insertOne(newPost);
    res.send(result).status();
  } catch (error) {
    console.error(error);
  }
});

// Endpoint for updating a post by the id
router.patch("/id", async (req, res) => {
  try {
    const query = { _id: new ObjectId(req.params.id) };
    const updates = {
      $set: {
        post: req.body.post,
        content: req.body.content,
      },
    };
    let result = await BLOGS_COLLECTION.updateOne(query, updates);
    res.send(result).status(200);
  } catch (error) {}
  console.error(error);
});


// Endpoint for deleting a post by id
router.delete ('/id', async(req, res) => {
    try {
        const query ={_id: new ObjectId(req.params.id)}
        let res = await BLOGS_COLLECTION.deleteOne(query);

    } catch (error) {
        console.error(error);
        
    }
})
export default router;
