const mongoose = require("mongoose");
//const mongoosePaginate = require("mongoose-paginate-v2");
//const mongoosePaginateAggregate = require("mongoose-aggregate-paginate-v2");


const StorageScheme = new mongoose.Schema(
  {
    title: {
      type: String,
      
    },
    answers: [{
      type: String,
      
    }],
    idbooking: {
      type: String,
      
    },
    responsible: {
      _id: {
        type: String,
        
      },
      name: {
        type: String,
        
      }
    },
    respondent: {
      _id: {
        type: String,
        
      },
      name: {
        type: String,
        
      }
    },
    rating: [{
      type: Number,
      
    }],
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.models.Survey || mongoose.model("Survey", StorageScheme);