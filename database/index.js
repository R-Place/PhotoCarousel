const mongoose = require('mongoose');

//localhost:27017
// 172.17.0.2
mongoose.connect('mongodb://172.17.0.2/addresses', {useNewUrlParser: true, useUnifiedTopology: true });

const conn = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   console.log("were open!");
// });

let addressRepo = mongoose.Schema({
  id: Number,
  homeAddress: String,
  cityState: String,
  zipCode: Number,
  description: String,
  price: Number,
  estMortgage: Number,
  image: [String],
  new: Boolean,
  saved: Boolean,
});

let Address = mongoose.model('Address', addressRepo);

const save = (data, callback) => {
  Address(data).save((err, result) => {
    if (err) {
      callback(err);
    } else {
      callback(null, result);
    }
  });
};

const retrieve = (data, callback) => {
  Address.find({ id: data })
    .exec((err, result) => {
      if (err) {
        callback(err);
      } else {
        callback(null, result);
      }
    });
};

const update = (id, data, callback) => {
  Address.findByIdAndUpdate(id, data, (err, result) => {
    if (err) {
      callback(err);
    } else {
      callback(null, result);
    }
  });
}

const remove = () => {
  conn.dropDatabase();
};

module.exports = {
  save,
  retrieve,
  remove,
  update,
};