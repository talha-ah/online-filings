const mongoose = require("mongoose")

function connectDB() {
  return new Promise((resolve, reject) => {
    // Connecting to Database and listening to server
    mongoose
      .connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        resolve()
      })
      .catch((err) => {
        reject(err)
      })
  })
}

module.exports = connectDB
