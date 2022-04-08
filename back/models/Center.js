const mongoose = require("mongoose");
const CenterSchema = new mongoose.Schema(
    {
        name: { type: String, required: true, unique: true },
        longitude: { type: Number, required: true, unique: true },
        latitude: { type: Number, required: true, unique: true },

     
    },
    { timestamps: true },
    
)
module.exports = mongoose.model("Center", CenterSchema);