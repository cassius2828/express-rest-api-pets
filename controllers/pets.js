const PetModel = require("../models/pet");

const index = async (req, res) => {
  try {
    const petDocs = await PetModel.find({});
    // should contain an array | filled or empty
    res.status(200).json(petDocs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const show = async (req, res) => {
  const { petId } = req.params;
  console.log(petId);

  try {
    const foundPet = await PetModel.findById(petId);
    if (!foundPet) {
      res.status(404);
      throw new Error("Pet not found");
    }
    res.status(200).json(foundPet);
  } catch (err) {
    if (res.statusCode === 404) {
      res.json({ error: err.message });
    }
    res.status(500).json({ error: err.message });
  }
};

const create = async (req, res) => {
  try {
    const createdPet = await PetModel.create(req.body);

    res.status(201).json(createdPet);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const update = async (req, res) => {
  const { petId } = req.params;

  console.log(petId);
  try {
    const foundPet = await PetModel.findByIdAndUpdate(petId, req.body, {
      new: true,
    });

    if (!foundPet) {
      res.status(404);
      throw new Error("Pet not found");
    }
    res.status(200).json(foundPet);
  } catch (err) {
    if (res.statusCode === 404) {
      res.json({ error: err.message });
    }
    res.status(500).json({ error: err.message });
  }
};

const remove = async (req, res) => {
  const { petId } = req.params;

  try {
    const petToDelete = await PetModel.findByIdAndDelete(petId);
    if (!petToDelete) {
      res.status(404);
      throw new Error("Pet not found");
    }
    res.status(200).json(`Successfully deleted ${petToDelete.name}`);
  } catch (err) {
    if (res.statusCode === 404) {
      res.json({ error: err.message });
    }
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  index,
  create,
  show,
  update,
  remove,
};
