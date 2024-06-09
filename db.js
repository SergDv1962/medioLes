const mongoose = require('mongoose');
// const password = 'QhevIq2zn5de18qJ';
const URI = 'mongodb+srv://dsv19621227:QhevIq2zn5de18qJ@cluster0.p7x4moj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

mongoose.connect(URI).then(() => {
   console.log("Connected to MongoDB");
}).catch((e) =>{
   console.error(e);
});
