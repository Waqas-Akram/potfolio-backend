const mongoose = require("mongoose");
const ProjectSchema = mongoose.Schema({
  title: {
    type: String,
  },
  discription: {
    type: String,
  },
  imageurl: {
    type: String,
  },
  gitlink: {
    type: String,
  },
});

module.exports = Project = mongoose.model("project", ProjectSchema);
