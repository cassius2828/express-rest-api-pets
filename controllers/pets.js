const PetModel = require('../models/pet')

const getPets = async (req, res) => {
  res.send("these are the pets");
};
const create = async (req, res) => {
  try {
    const createdPet = await PetModel.create(req.body);

    res.status(201).json(createdPet);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
module.exports = {
  getPets,
  create,
};
