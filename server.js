import express from "express";
import mongoose from "mongoose";
import cardRoutes from "./routes/cards.js";
import Cors from "cors";
const app = express();
const port = process.env.PORT || 8000;

//connect MongoDB
const connections_url = `mongodb+srv://diyarsali:diyarali5@cluster0.ealv0.mongodb.net/tinderDB?retryWrites=true&w=majority`;
mongoose.connect(connections_url, {
  useNewUrlParser: true,

  useUnifiedTopology: true,
});
//Get the default connection
var db = mongoose.connection;

// MiddleWare
app.use(express.json());
app.use(Cors());

app.get("/", (req, res) => {
  res.send("hellow world");
});
app.use("/cards", cardRoutes);

//Bind connection to error event (to get notification of connection errors)
db.on("error", console.error.bind(console, "MongoDB connection error:"));
app.listen(port, () => console.log(`server is running on port${port}`));
