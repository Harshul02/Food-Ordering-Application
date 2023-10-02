const mongoose = require('mongoose')
// No Use
const userSchema = mongoose.Schema(
    {
      name: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
      },
      _id:{
        type: String,
        required: true
      }
    },
    {
      timestamps: true,
    }
  );


module.exports = mongoose.model("User", userSchema);