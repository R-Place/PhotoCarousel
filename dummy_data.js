const faker = require('faker');

const data = [];
const limit = 100;

for (let i = 0; i < limit; i++ ) {
  let randomAddress = ` ${faker.address.streetAddress()}, San Francisco, CA, 94016`
  let randomDescription = faker.lorem.paragraph();
  let randomData = { homeAddress: randomAddress, description: randomDescription };
  data.push(randomData);
}

module.exports = data