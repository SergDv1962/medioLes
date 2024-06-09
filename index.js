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
const upload = multer({ storage, limits: 1000000 });

app.get("/", (req, res) => {
  console.log("Hello World!");
});

// upload.array('demo_image', 4) 'demo_image' це ключ, 4 - це кіл-ть файлів
app.post("/image", upload.array('demo_image', 4), (req, res) => {
  try {
   res.send(req.files)
  } catch (e) {
   console.log(e)
   res.send(200)
  }
  
});

app.listen(port, () => {
  console.log(`Server listening to port ${port}`);
});
