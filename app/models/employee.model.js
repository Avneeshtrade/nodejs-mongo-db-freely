const { cryptPassword } = require("../utility/encryptData");

module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        name: String,
        email:{
          type:String,
          unique : true
        },
        password:{
          type:String,
          set:cryptPassword,
          required:true
        },
        isManager: Boolean,
      },
      { timestamps: true }
    );
  
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
  
    const Employee = mongoose.model("employee", schema);
    return Employee;
  };