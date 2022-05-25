const { readFiles } = require("../utility/readFile");

module.exports  = app =>{
    let files = readFiles(__dirname,".routes.js");
    files.forEach(file=>{
       let {name,filePath} = file;
       require(`./${filePath}`)(app);
    });
}
