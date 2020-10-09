/* eslint-disable no-plusplus */
const faker = require('faker');
const imageLinks = require('./imageLinks.js');

const data = [];
const limit = 100;

for (let i = 0; i < limit; i++) {
  const num = i + 1;
  const randomAddress = ` ${faker.address.streetAddress()}`;
  const cityStates = `San Francisco, CA`
  const zipCodes = [
    94102, 94103, 94104, 94105, 94107, 94108, 94109, 94110, 94111, 94112, 94114, 94115, 94116, 94117, 94118, 94121, 94122, 94123, 94124, 94127, 94129, 94130, 94131, 94132, 94133, 94134, 94158
  ];
  const zipCodeRandom = zipCodes[Math.floor(Math.random() * ((zipCodes.length - 1) - 0 + 1) + 0)];
  const randomDescription = faker.lorem.paragraph();
  const min = 1000000;
  const max = 4000000;
  const randomPrice = Math.floor(Math.random() * (max - min + 1) + min);
  const estimatedMortgage = Math.ceil((randomPrice * 1.4) / 360);
  const images = [];
  images.push(imageLinks.imageLinks[Math.floor(Math.random() * (24 - 0 + 1) + 0)]);
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
    cityState: cityStates,
    zipCode: zipCodeRandom,
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
