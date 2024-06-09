const express = require("express");
const bodyParser = require('body-parser')
const multer = require("multer");
const ImageUser = require("./models/userModels.js");
require('./db.js');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use('./uploads', express.static('uploads'));

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
   res.send('hi Serhiy')
  console.log("Hello World!");
});

// upload.array('demo_image', 4) 'demo_image' це ключ, 4 - це кіл-ть файлів
app.post("/image", upload.array('demo_image', 4), (req, res) => {
  try {
   res.send(req.files)
  } catch (e) {
   console.log(e)
   res.send(400)
  }
});

app.post('/user', async (req, res) => {
   try {
      const doc = await ImageUser.create(req.body);

      return res.status(200).json(doc)
   } catch (e) {
      console.log(e);
      res.send(400)
   }
});

app.put('/user/:id', upload.single('demo_image'), async (req, res) => {
   try {
      const doc = await ImageUser.findByIdAndUpdate(req.params.id, {
         photo: req.file.filename,
      });

      return res.status(200).json(doc)
   } catch (e) {
      console.log(e);
      res.status(400)
   }
})

app.listen(port, () => {
  console.log(`Server listening to port ${port}`);
});
