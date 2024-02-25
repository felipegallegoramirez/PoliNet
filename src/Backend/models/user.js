const mongoose = require("mongoose");
//const mongoosePaginate = require("mongoose-paginate-v2");
//const mongoosePaginateAggregate = require("mongoose-aggregate-paginate-v2");
const StorageScheme = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    password: {
      type: String,
      require: true
    },
    rol: {
      type: String,
      require: true
    },
    profresion: {
      type: String,
      require: true
    },
    files_id: [{
      type: String,
      require: true
    }],
    post_id: [{
      type: String,
      require: true
    }],
    bloq:[{
      day:[{
        type: Number,
        require: true
      }]
    }],
    services:[{
      type: String,
      require: true
    }],
    booking:[{
      type: String,
      require: true
    }],
    code: {
      type: String,
      require: true
    },
    active: {
      type: Boolean,
      require: true
    },
    description: {
      type: String,
      require: true
    },
    category: {
      type: String,
      require: true
    },
    locate: {
      type: String,
      require: true
    },
    link: {
      type: String,
      require: true
    },
    followers:[{
      type: String,
      require: true
    }],
    follows:[{
      type: String,
      require: true
    }],
  },


  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.models.Users || mongoose.model("Users", StorageScheme);