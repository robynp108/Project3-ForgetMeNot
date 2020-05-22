const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ForgetMeNotSchema = new Schema({
    items: [{
        name: {
            type: String,
            trim: true,
            required: "Name is Required"
        },
        last_check: {
            type: Date,
            default: Date.now().toString()
        },
    }]
});

const ForgetMeNot = mongoose.model("ForgetMeNot", ForgetMeNotSchema);

model.exports = ForgetMeNot;