const express = require("express");
const multer = require("multer");

const app = express();
const port = 3000;

// diskStorage
// cb - name callback function
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

// limits це ліміт об'єму пам'ті котру користувач може використати 1Mb
const upload = multer({ storage, limits: 1000000 }).single("demo_image");

app.get("/", (req, res) => {
  console.log("Hello World!");
});

app.post("/image", (req, res) => {
  upload(req, res, (err) => {
    if (err) return res.status(400).send("Something went wrong");

    res.status(200).send(req.file);
  });
});

app.listen(port, () => {
  console.log(`Server listening to port ${port}`);
});
