let router = require("express").Router();
const { getAllCats } = require("../services/cats")
router.get("/", (req, res) => {
    let cats = getAllCats();
    res.render("home", { cats })
});
module.exports = router;