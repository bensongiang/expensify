

// const person = {
//   name: 'Hiashi',
//   age: 29,
//   location: {
//     city: 'Tokyo',
//     temp: 86
//   }
// };

// const {name = 'Sukeroku', age} = person;

// console.log(`${name} is ${age}.`);

// const {city, temp} = person.location;

// console.log(`It's ${temp} in ${city}`);

// const book = {
//   title: 'Principles',
//   author: 'Ray Dalio',
//   publisher: {

//     date: '2017'
//   }
// }

// const { title, author } = book;


// const { name: publisherName = 'Self Publisher'} = book.publisher;

// console.log(`The publisher is ${publisherName}.`);


const address = ['1234 S. Main Street', 'San Francisco', 'California', '91701'];

const [street, city, state, zip] = address;

console.log(`He lives on ${street} which is located in ${city}.`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [product, small, medium, large] = item;

console.log(`A medium ${product} costs ${medium}.`);