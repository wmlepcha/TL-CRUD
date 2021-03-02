const express = require("express");
const router = express.Router();

const contactDetails = require("../models/contactSchema");

// SENDING DATA TO DATABASE
router.post("/", async (req, res) => {
    const NewContact = new contactDetails({
      name: req.body.name,
      email: req.body.email,
      mobile: req.body.mobile,
      message:req.body.message
    });
  
    try {
      const p1 = await NewContact.save();
      res.json(p1);
    } catch(err) {
      res.send("Error" + err);
    }
  });

// GETTING ALL THE CONTACTS
router.get("/", async (req, res) => {
  try {
    const contact = await contactDetails.find();
    res.json(contact);
  } catch(err) {
    res.send("Error" + err);
  }
});

// GETTING ID OF A PARTICULAR USER
router.get("/:id", async (req, res) => {
    try {
      const contactID = await contactDetails.findById(req.params.id);
      res.json(contactID);
    } catch(err) {
      res.send("Error" + err);
    }
  });



module.exports = router;
