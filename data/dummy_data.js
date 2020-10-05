/* eslint-disable no-plusplus */
const faker = require('faker');
const imageLinks = require('./imageLinks.js');

const data = [];
const limit = 25;

for (let i = 0; i < limit; i++) {
  const num = i + 1;
  const randomAddress = ` ${faker.address.streetAddress()}`;
  const cityStateZipCode = `San Francisco, CA, 94016`
  const randomDescription = faker.lorem.paragraph();
  const min = 1000000;
  const max = 4000000;
  const randomPrice = Math.floor(Math.random() * (max - min + 1) + min);
  const estimatedMortgage = Math.ceil((randomPrice * 1.4) / 360);
  const images = [];
  images.push(imageLinks.imageLinks[i]);
  let numOfInteriorImages = Math.floor(Math.random() * (18 - 10 + 1) + 10);
  while (numOfInteriorImages > 0) {
    let randomIndex = Math.floor(Math.random() * (17 - 0 + 1) + 0);
    images.push(imageLinks.interiorImageLinks[randomIndex]);
    numOfInteriorImages--;
  }
  // const interiorImageLink = imageLinks.interiorImageLinks;
  const newRandom = faker.random.boolean();
  const randomData = {
    id: num,
    homeAddress: randomAddress,
    cityState: cityStateZipCode,
    description: randomDescription,
    price: randomPrice,
    estMortgage: estimatedMortgage,
    new: newRandom,
    image: images,
    saved: false,
  };
  data.push(randomData);
}

module.exports = data;
