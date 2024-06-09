const express = require('express');
const multer = require('multer');

const app = express();
const port = 3000;

// dest - destanation -це куди будуть зберігатися файли. uploads/ - це назва папки uploads котра буде створена у каталозі нашого проекту і де будуть зберігатися загружені файли
const upload = multer({dest: 'uploads/'}).single('demo_image');

app.get('/', (req, res) => {
   console.log('Hello World!')
});

app.post('/image', (req, res) => {
   upload(req, res, (err)=> {
      if (err) return res.status(400).send('Something went wrong');

      res.status(200).send(req.file)
   })
})

app.listen(port, () => {
   console.log(`Server listening to port ${port}`)
});