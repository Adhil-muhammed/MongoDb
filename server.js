import express from "express";

const app = express();
const port = 5001;

app.listen(port, () => {
  console.log(`app listen port ${port} `);
});

app.get("/", (req, res) => {
  res.send("hey");
});
