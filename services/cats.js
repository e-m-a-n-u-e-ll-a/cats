let fs = require("fs");
let data = JSON.parse(fs.readFileSync("./services/data.json"));
function addCat(name, description, upload, breed) {
    let id = "asdf" + Math.random();
    data.push({
        id,
        name,
        description,
        upload,
        breed
    });
    fs.writeFile("./sevices/data.json", JSON.stringify(data), () => { });
}
function getAllCats() {
    return data
}
module.exports = {
    addCat,
    getAllCats
};