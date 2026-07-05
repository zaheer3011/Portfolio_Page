const express = require("express");
const User = require("./Models/User");
const cors = require("cors");
const router = express.Router();
require("./db/mongoose");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(router);

router.post("/users", async (req, res) => {
  try {
    const user = new User(req.body);

    const savedUser = await user.save();
    console.log(savedUser);

    res.status(201).send(savedUser);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running in PORT No : ${PORT}`);
});
