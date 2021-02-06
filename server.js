const express = require("express");
const app = express();
const cors = require("cors");
const { exec } = require("child_process");
require("dotenv").config();

app.use(express.json());
app.use(cors());

app.post("/watch", (req, res) => {
  const magnet = req.body.magnet;
  exec(
    `${process.env.TERMINAL} -- peerflix --path "${__dirname}/${process.env.SAVE_DIR}" "${magnet}" --mpv -- --fs`,
    (err, stdout, stderr) => {
      console.log(stdout);
    }
  );
});

app.listen(process.env.PORT, () => {
  console.log(`DaveFlix running on http://localhost:${process.env.PORT}`);
});
