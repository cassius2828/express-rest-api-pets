const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");

const petsRouter = require("./routes/pets");  // Correctly import petsRouter

mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on("connected", () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});

app.use(express.json());

// Routes go here
app.use("/pets", petsRouter);

app.get('/', (req,res) => {
    res.send('home')
})

app.listen(3000, () => {
  console.log("The express app 'pets' is ready!");
});
