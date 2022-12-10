let router = require("express").Router();
const { addCat } = require("../services/cats");


router.get("/cats/add-cat", (req, res) => {
    res.render("addCat");
});
router.post("/cats/add-cat", (req, res) => {
    console.log("handling Post....")
    console.log(req.body);
    console.log(req.params.id);
    addCat(req.body.name, req.body.description, req.body.upload, req.body.breed);
    res.redirect("/")
});
module.exports = router;
