const mongoose = require("mongoose");
//const mongoosePaginate = require("mongoose-paginate-v2");
//const mongoosePaginateAggregate = require("mongoose-aggregate-paginate-v2");
const StorageScheme = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    images: [{
      type: String,
      required: true,
    }],
    creator_image: {
      type: String,
      required: true,
    },
    creator_id: {
      type: String,
      required: true,
    },
    creator_name: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    likes: [{
      id: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
      }
    }],
    comment: [{
      id: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      }
    }],
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.models.Service || mongoose.model("Service", StorageScheme);