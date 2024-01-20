const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const userSchema = new Schema({
    googleId: String
})

mongoose.model('users', userSchema);
// tell mongoose we want to create a new collection called users, it will not override, will only create a new one if it does not exist