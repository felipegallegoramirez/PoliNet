const mongoose = require("mongoose");
//const mongoosePaginate = require("mongoose-paginate-v2");
//const mongoosePaginateAggregate = require("mongoose-aggregate-paginate-v2");
const StorageScheme = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    image:{
      type: String,

    },
    creator_image: {
      type: String,
      
    },
    creator_name: {
      type: String,

    },
    creator_id: {
      type: String,
      
    },
    creator_name: {
      type: String,
      
    },
    description: {
      type: String,
      required: true,
    },
    likes: [{
      id: {
        type: String,
        
      },
      name: {
        type: String,
        
      }
    }],
    comments: [{
      id: {
        type: String,
        
      },
      name: {
        type: String,
        
      },
      description: {
        type: String,
        
      }
    }],
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.models.Post || mongoose.model("Post", StorageScheme);