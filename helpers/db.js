var mongoose = require("mongoose");

module.exports = () => {
    mongoose.connect("mongodb://127.0.0.1:27017/todoDb");

    mongoose.connection.on('open', () => {
        console.log('MongoDB: Connected');
      });
      mongoose.connection.on('error', (err) => {
        console.log('MongoDB: Error', err);
      });

    mongoose.Promise = global.Promise;
}