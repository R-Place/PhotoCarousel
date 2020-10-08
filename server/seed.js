const data = require('../data/dummy_data.js');
const db = require('../database/index.js');

db.remove();

// eslint-disable-next-line no-plusplus
for (let i = 0; i < data.length; i++) {
  db.save(data[i], (err, result) => {
    if (err) {
      // eslint-disable-next-line no-console
      console.log(err);
    } else {
      // eslint-disable-next-line no-console
      console.log(result);
    }
  });
}
