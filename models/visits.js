const mongoose = require('mongoose');
const { Schema } = mongoose;
const path = require('path');

const ImageSchema = new Schema({
  title: { type: String },
  visits: localhost-ip-addresses: { type: Number, default: 0 },
  timestamp: { type: Date, default: Date.now },
  author: {
        type: Schema.Types.ObjectId,
        ref: 'Username'
    }
});


module.exports = mongoose.model('Image', ImageSchema);