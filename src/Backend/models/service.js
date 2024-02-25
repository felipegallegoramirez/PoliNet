const mongoose = require("mongoose");
//const mongoosePaginate = require("mongoose-paginate-v2");
//const mongoosePaginateAggregate = require("mongoose-aggregate-paginate-v2");
const StorageScheme = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    time: {
      type: Number,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    price: {
      type: Number,
      require: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.models.Service || mongoose.model("Service", StorageScheme);