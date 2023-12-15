const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// bcrypt library
const bcrypt = require('bcrypt');

// hash process time
const SALT_ROUNDS = 6;

// properties for the user model
const userSchema = new Schema({
    name: { type: String, required: true },
    email: {
        type: String,
        unique: true,
        trim: true,
        lowercase: true,
        required: true
    },
    password: {
        type: String,
        trim: true,
        minLength: 3,
        required: true
    },
}, {
    timestamps: true,
    // transforms document when its serialized to JSON
    toJSON: {
        transform: function (doc, ret) {
            delete ret.password;
            return ret;
        }
    }
    
});

userSchema.pre('save', async function (next) {
    // 'this' is the user doc
    if (!this.isModified('password')) return next();
    // update passowrd with computed hash
    this.password = await bcrypt.hash(this.password, SALT_ROUNDS); // determines how much processing time it will take to perform the hash
    return next();
})

module.exports = mongoose.model('User', userSchema);