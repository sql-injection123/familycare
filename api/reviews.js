import { MongoClient } from "mongodb";

const uri = process.env.MONGO_URI;

let client = new MongoClient(uri);

export default async function handler(req, res) {

  await client.connect();

  const db = client.db("familycaredb");
  const collection = db.collection("reviews");

  if (req.method === "GET") {
    const reviews = await collection.find().toArray();
    return res.status(200).json(reviews);
  }

  if (req.method === "POST") {
    const review = {
      ...req.body,
      createdAt: new Date()
    };

    await collection.insertOne(review);

    return res.status(201).json(review);
  }
}