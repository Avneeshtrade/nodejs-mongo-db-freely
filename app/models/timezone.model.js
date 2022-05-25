module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        timezone:String,
        updatedAt: Date,
      },
      { timestamps: false }
    );
  
    schema.method("toJSON", function() {
      const { __v, _id, updatedAt,...object } = this.toObject();
      object.id = _id;
      return object;
    });
  
    const Timezone = mongoose.model("timezone", schema);
    return Timezone;
  };