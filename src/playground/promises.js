const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('UH OHHHHH!!!!');
  }, 1500);
  
});

console.log('before');

promise.then((data) => {
  console.log(data);
}).catch((error) => {
  console.log('ERROR! BOOP! ', error);
});


console.log('after');