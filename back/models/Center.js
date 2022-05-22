const mongoose = require("mongoose");
const CenterSchema = new mongoose.Schema(
    {
        name: { type: String, required: true,  },
        longitude: { type: Number, required: true,  },
        latitude: { type: Number, required: true, },

     
    },
    
)
module.exports = mongoose.model("Center", CenterSchema);