const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const chatLogSchema = new Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    message: String,
}, { timestamps: true });

module.exports = mongoose.model('ChatLog', chatLogSchema);