import express from "express";
import Cards from "../module/bdCards.js";
const router = express.Router();

router.post("/add", (req, res) => {
  const dbCards = req.body;
  Cards.create(dbCards, (err, data) => {
    if (err) res.status(500).send(err);
    else res.status(201).send(data);
  });
});

router.get("/get", (req, res) => {
  Cards.find((err, data) => {
    if (err) res.status(500).send(err);
    else res.status(200).send(data);
  });
});

export default router;
