import { Router } from "express";
import db from "../db/connection.js";
import { ObjectId } from "mongodb";

const router = Router();
const EXPERIENCE_COLLECTION = db.collection("experiences");

// Endpoint for getting list of experience
router.get("/", async (req, res) => {
  let results = await EXPERIENCE_COLLECTION.find({}).toArray();
  res.send(results).status(200);
});

// Endpoint for adding a single experience by id
router.get("/:id", async (req, res) => {
  let query = { _id: new ObjectId(req.params.id) };
  let result = await EXPERIENCE_COLLECTION.findOne(query);

  !result ? res.send("Not found!").status(404) : res.send(result).status(201);
});

// Endpoint for adding a single experience
router.post("/", async (req, res) => {
  try {
    let newExperience = {
      experience: req.body.experience,
      years: req.body.years,
    };
    let result = await EXPERIENCE_COLLECTION.insertOne(newExperience);
    res.send(result).status();
  } catch (error) {
    console.error(error);
  }
});

// Endpoint for updating a experience by the id
router.patch("/id", async (req, res) => {
  try {
    const query = { _id: new ObjectId(req.params.id) };
    const updates = {
      $set: {
        experience: req.body.experience,
       years: req.body.years,
      },
    };
    let result = await EXPERIENCE_COLLECTION.updateOne(query, updates);
    res.send(result).status(200);
  } catch (error) {}
  console.error(error);
});


// Endpoint for deleting an experience by id
router.delete ('/id', async(req, res) => {
    try {
        const query ={_id: new ObjectId(req.params.id)}
        let res = await EXPERIENCE_COLLECTION.deleteOne(query);

    } catch (error) {
        console.error(error);
        
    }
})
export default router;