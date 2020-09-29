const faker = require('faker');
const imageLinks = require('./imageLinks.js');

const data = [];
const limit = 10;

for (let i = 0; i < limit; i++ ) {
  let num = i + 1;
  let randomAddress = ` ${faker.address.streetAddress()}, San Francisco, CA, 94016`
  let randomDescription = faker.lorem.paragraph();
  let min = 1000000;
  let max = 4000000;
  let randomPrice = Math.floor(Math.random() * (max - min + 1) + min);
  let estimatedMortgage = Math.ceil(randomPrice * 1.4 / 360);
  let imageLink = imageLinks.imageLinks[i];
  let interiorImageLink = imageLinks.interiorImageLinks;
  let newRandom = Math.floor(Math.random() * (1 - 0 + 1) + 0);
  let newTag = Boolean(newRandom);
  let randomData = { id: num, homeAddress: randomAddress, description: randomDescription, price: randomPrice, estMortgage: estimatedMortgage, new: newTag, image: imageLink, interior1: interiorImageLink, interior2: interiorImageLink};
  data.push(randomData);
}

module.exports = data