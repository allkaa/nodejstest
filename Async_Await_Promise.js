'use strict';

// returning new Promoie with only resolve.
function getUser(userId) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('john');
    }, 1000);
  });
}

// returning new Promisse wieh resolve or reject.
function getBankBalance(user) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (user == 'john') {
        resolve('$1,000');
      }
      else {
        reject('unknown user');
      }
    }, 1000);
  });
}

// Using ES2015 Promise constuction .then() 
function getAmount(userId) {
  getUser(userId)
    .then(getBankBalance)
    .then(amount => {
      console.log(amount)
    });
}


// Use ES2017 construction asyn/await.
/*
  The async keyword tells the JavaScript compiler to treat the function differently. The compiler pauses whenever it reaches the await keyword within that function.
  It assumes that the expression after await will return a promise and waits until the promise is resolved or rejected before moving further.
*/
async function getAmount2(userId) {
  let user = await getUser(userId);
  let amount = await getBankBalance(user);
  console.log(amount);
}

getAmount('1'); // $ 1,000
getAmount2('1'); // $1,000
