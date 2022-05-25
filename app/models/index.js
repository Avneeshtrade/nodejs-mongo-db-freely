const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
const { readFiles } = require("../utility/readFile.js");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;

try{
    let filePaths = readFiles(__dirname,".model.js");
    filePaths.forEach(file =>{
        let model = require(`./${file.filePath}`)(mongoose);
        let modelName = model.collection.collectionName;
        console.log(modelName);
        db[`${modelName}`] = model;
    });
}
catch(err){
    console.log("Eror occured while reading the models");
}


module.exports = db;
