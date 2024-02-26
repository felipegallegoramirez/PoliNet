const mongoose = require("mongoose");
//const mongoosePaginate = require("mongoose-paginate-v2");
//const mongoosePaginateAggregate = require("mongoose-aggregate-paginate-v2");
const StorageScheme = new mongoose.Schema(
  {
    iduser: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    answers: [{
      type: String,
      required: true,
    }],
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.models.Request || mongoose.model("Request", StorageScheme);