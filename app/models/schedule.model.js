module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        startDate: {
            type:Date,
            required:true
        },
        endDate: {
            type:Date,
            required:true
        },
        timezone:{
            type:String,
            required:true
        },
        employeeId: {type: mongoose.Schema.Types.ObjectId, ref: 'employee',required:true}
      },
      { timestamps: false }
    );
  
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
  
    const Schedule = mongoose.model("schedule", schema);
    return Schedule;
  };
  