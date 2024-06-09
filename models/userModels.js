const mongoose = require("mongoose");

const imageUserSchema = mongoose.Schema({
  fullName: {
    type: String,
    require: [true, 'Fullname is required'],
  },
  photo: {
    type: String,
    default: null,
  },
});

const ImageUser = mongoose.model('ImageUser', imageUserSchema);

module.exports = ImageUser;
