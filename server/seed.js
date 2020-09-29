const data = require('../data/dummy_data.js');
const db = require('../database/index.js');

db.remove();

for (var i = 0; i < data.length; i++) {
  db.save(data[i], (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
    }
  });
};
