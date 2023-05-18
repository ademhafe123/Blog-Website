const express = require("express");
const client = require("./Database/Utils");

const app = express();
app.use(express.json());

client.connect().then(() => {
  app.listen(7000, () =>
    console.log("Server is on port 7000, and connected to database")
  );
});
