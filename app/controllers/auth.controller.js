const db = require("../models");
const jwt = require('jsonwebtoken');
const { comparePassword } = require("../utility/encryptData");
// const { nextTick } = require("process");

const Employee = db.employees;
// Create and Save a new Employee
exports.generateToken = async (req, res) => {
    let jwtSecretKey = process.env.JWT_SECRET_KEY;
    let {username,password} = req.body;
    let [emp] = await Employee.find({email:username});
    let data = {}
    if(emp){
        let {_doc:{password:dbPass,...result}} = emp;
        if(comparePassword(password,dbPass)){
            let {_id:id,name,email,isManager} = result
            data = {
                id,
                name,
                email,
                isManager
            }
                
        
        const token = jwt.sign(data, jwtSecretKey);
      
        res.status(200).send({status:true,data,token});
        }
        else{
        res.status(400).send({
            status:false,
            message:"email or password is incorrect !!"
        })
        }
    
    }
   else{
    res.status(400).send({
        status:false,
        message:"User doesn't exist !!"
    })
   }
};

// Retrieve all Tutorials from the database.
exports.validateToken = (req, res,next) => {
  
    let tokenHeaderKey = process.env.TOKEN_HEADER_KEY;
    let jwtSecretKey = process.env.JWT_SECRET_KEY;
  
    try {
        const token = req.header(tokenHeaderKey);
  
        const verified = jwt.verify(token, jwtSecretKey);
        if(verified){
            next();
        }else{
            // Access Denied
            res.status(401).send({message:"Authorization failed"});
        }
    } catch (error) {
        // Access Denied
        res.status(401).send({message:"Authorization failed"});
    }
};

