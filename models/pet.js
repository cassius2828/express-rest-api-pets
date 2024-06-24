const mongoose = require("mongoose");

const petSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    min: 0,
  },
  breed: String,
});

const PetModel = mongoose.model("Pet", petSchema);

module.exports = PetModel;
