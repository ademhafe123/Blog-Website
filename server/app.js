const express = require("express");
const client = require("./Database/Utils");
const cors = require("cors");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const app = express();
app.use(express.json());
// CORS
app.use(cors({ origin: "http://localhost:3000" }));

//
// REGISTER A NEW USER
//
app.post("/user/register", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  const user = { name, email, password };

  // FIRST WE NEED TO CHECK IF USER ALREADY EXISTS
  client
    .db("BlogIT")
    .collection("users")
    .findOne({ email: user.email }, (err) => {
      if (err) console.log(err);
    })
    .then((response) => {
      // CHECK IF EMAIL IS IN USE
      if (response) res.send("Email in use");
      else {
        // ENCRYPT THE PASSWORD
        bcrypt.hash(user.password, saltRounds, (err, hash) => {
          if (err) console.log(err);
          else {
            user.password = hash;
            // SAVE USER TO DATABASE
            client
              .db("BlogIT")
              .collection("users")
              .insertOne(user)
              .then(() => {
                res.send({ name, email });
              });
          }
        });
      }
    });
});

//
// SIGN IN AN EXISTING USER
//
app.post("/user/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const user = { email, password };
  client
    .db("BlogIT")
    .collection("users")
    .findOne({ email: user.email }, (err) => {
      if (err) console.log(err);
    })
    .then((response) => {
      // CHECK IF USER WITH THIS EMAIL IS FOUND
      if (!response) res.send("Email not in use");
      // CKECK IF PASSWORDS MATCH
      else {
        const name = response.name;
        bcrypt.compare(user.password, response.password).then((result) => {
          if (result) res.send({ name, email });
          else res.send("Password incorrect");
        });
      }
    });
});

client.connect().then(() => {
  app.listen(7000, () =>
    console.log("Server is on port 7000, and connected to database")
  );
});
