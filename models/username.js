const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const UserSchema = new Schema({
    username: {
        type: String  
    }
});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('Username', UserSchema);