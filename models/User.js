const mongoose = require('mongoose');

const UserScheme = new mongoose.SchemaType({
    name: { 
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    avatar: {
        type: String
    }
    date: {
        type: Date,
        default: Date.now
    }
});

modules.exports = User = mongoose.model('user', UserSchema);