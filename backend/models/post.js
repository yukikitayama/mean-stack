const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  title: { type: String, require: true },
  content: { type: String, require: true },
  imagePath: { type: String, require: true },
  creator: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }
});

// Should start with a capital letter
module.exports = mongoose.model('Post', postSchema);
