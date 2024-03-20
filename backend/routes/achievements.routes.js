import { Router } from "express";
import db from "../db/connection.js";
import { ObjectId } from "mongodb";

const router = Router();
const ACHIEVEMENTS_COLLECTION = db.collection("achievements");

// Endpoint for getting list of achievements
router.get("/", async (req, res) => {
  let results = await ACHIEVEMENTS_COLLECTION.find({}).toArray();
  res.send(results).status(200);
});

// Endpoint for adding a single achievements by id
router.get("/:id", async (req, res) => {
  let query = { _id: new ObjectId(req.params.id) };
  let result = await ACHIEVEMENTS_COLLECTION.findOne(query);

  !result ? res.send("Not found!").status(404) : res.send(result).status(201);
});

// Endpoint for adding a single achievement
router.post("/", async (req, res) => {
  try {
    let newAchievement = {
        achievement: req.body.achievement,
     years: req.body.years,
    };
    let result = await ACHIEVEMENTS_COLLECTION.insertOne(newAchievement);
    res.send(result).status();
  } catch (error) {
    console.error(error);
  }
});

// Endpoint fornupdating an achievement by the id
router.patch("/id", async (req, res) => {
  try {
    const query = { _id: new ObjectId(req.params.id) };
    const updates = {
      $set: {
        achievement: req.body. achievement,
        years: req.body.years,
      },
    };
    let result = await ACHIEVEMENTS_COLLECTION.updateOne(query, updates);
    res.send(result).status(200);
  } catch (error) {}
  console.error(error);
});


// Endpoint for deleting an achievement by id
router.delete ('/id', async(req, res) => {
    try {
        const query ={_id: new ObjectId(req.params.id)}
        let res = await ACHIEVEMENTS_COLLECTION.deleteOne(query);

    } catch (error) {
        console.error(error);
        
    }
})
export default router;