const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const UserModel = require('./models/Users');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/crud");

const PAGE_SIZE = 10;

app.get('/', async (req, res) => {
  try {
    const page = parseInt(req.query.page || 1);
    const size = parseInt(req.query.size || PAGE_SIZE);

    const users = await UserModel.find({})
      .skip((page - 1) * size)
      .limit(size);

    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post("/createUser", async (req, res) => {
  try {
    const user = await UserModel.create(req.body);
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(3001, () => {
  console.log("Server running");
});
