const mongoose = require("mongoose");
//const mongoosePaginate = require("mongoose-paginate-v2");
//const mongoosePaginateAggregate = require("mongoose-aggregate-paginate-v2");
const StorageScheme = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    answers: [{
      type: String,
      required: true,
    }],
    idbooking: {
      type: String,
      required: true,
    },
    responsible: [{
      id: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
      }
    }],
    respondent: [{
      id: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
      }
    }],
    rating: [{
      type: Number,
      required: true,
    }],
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.models.Survey || mongoose.model("Survey", StorageScheme);