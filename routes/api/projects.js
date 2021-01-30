const express = require("express");
const router = express.Router();
const Project = require("../../models/Projects");

//Post projects data to database
router.post("/", async (req, res) => {
  const { title, discription, imageurl, gitlink } = req.body;
  try {
    project = new Project({ title, discription, imageurl, gitlink });
    await project.save();
    res.json(project);
      
  } catch (error) {
      console.error(error.message)
      res.status(500).send("Server Error")
      
  }
});

router.get("/", async(req, res) => {
 try {
     const project = await Project.find({});
     res.json(project);
     
 } catch (error) {
     console.error(error.message)
     res.status(500).send("Server Error")
     
 }
});

module.exports = router;
