// Require mongoose
var mongoose = require("mongoose");
// Create a schema class
var Schema = mongoose.Schema;

// Create the Note schema
var CommentSchema = new Schema({
  body: {
    type: String
  }
});

// These ids are referred to in the Article model

// Create the model
var comment = mongoose.model("Comment", CommentSchema);

// Export the Note model
module.exports = comment;