const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  username: {
  type: String,
  required: true,
  unique: true,
  minlength: 3
  },
  friends: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Person'
    }
  ]
})

const User = mongoose.model('User', schema)

module.exports = User