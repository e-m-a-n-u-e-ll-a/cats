let express = require("express");
let hbr = require('express-handlebars');
let homeController = require("./controllers/homecontroller");
let addbreedController = require("./controllers/addbreedcontroller");
let addcatController = require("./controllers/addcatcontroller")
let handlebars = hbr.create({ extname: '.hbs' });
let app = express();
app.engine('.hbs', handlebars.engine);
app.set('view engine', '.hbs');

app.use(express.urlencoded({ extended: false }));
app.use("/static", express.static("static"));
app.use(homeController)
app.use(addbreedController);
app.use(addcatController)
app.listen(3000);