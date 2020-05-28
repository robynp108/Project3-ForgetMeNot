const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ConcernSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: "Name is Required"
    },
    last_check: {
        type: String,
        default: "never" 
    }
});

const Concern = mongoose.model("Concern", ConcernSchema);

module.exports = Concern;