var fs = require('fs');
module.exports.readFiles = (dirname,searchString) =>{
    let files = [];
    let filenames = fs.readdirSync(dirname)
    filenames.forEach(file=>{
    let index = file.indexOf(searchString);
    if(index != -1){
    files.push({
    name:file.slice(0,index),
    filePath:file
    })
  }  
    })
  return files; 
    
}