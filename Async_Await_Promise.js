'use strict';

let dtVar = new Date();
console.log('Begin of MAIN script ====================================' + " " + dtVar.getSeconds() + "." + dtVar.getMilliseconds());

// returning new Promise with only resolve.
function getUser(userId) {
  dtVar = new Date();
  console.log("start getUser(userId)" + " " + dtVar.getSeconds() + "." + dtVar.getMilliseconds());
  return new Promise(resolve => {
    dtVar = new Date();
    console.log("inside getUser(userId) return new Promise thru setTimeout 1 sec with resolve 'john'" + " " + dtVar.getSeconds() + "." + dtVar.getMilliseconds());
    setTimeout(() => {
      resolve('john');
    }, 1000);
  });
}

// returning new Promisse wieh resolve or reject.
function getBankBalance(user) {
  dtVar = new Date();
  console.log("start getBankBalance(user)" + " " + dtVar.getSeconds() + "." + dtVar.getMilliseconds());
  return new Promise((resolve, reject) => {
    dtVar = new Date();
    console.log("inside getBankBalance(user) return new Promise thru setTimeout 1 sec with resolve $1,000 or reject 'unknown user'" + " " + dtVar.getSeconds() + "." + dtVar.getMilliseconds());
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
  dtVar = new Date();
  console.log("inside getAmount(usereId) start Promise getUser(userId) then Promise getBankBalace then log amount " + " " + dtVar.getSeconds() + "." + dtVar.getMilliseconds());
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
  dtVar = new Date();
  console.log("start await getUser()" + " " + dtVar.getSeconds() + "." + dtVar.getMilliseconds());
  let user = await getUser(userId);
  dtVar = new Date();
  console.log("start getBankBalance(user)" + " " + dtVar.getSeconds() + "." + dtVar.getMilliseconds());
  let amount = await getBankBalance(user);
  dtVar = new Date();
  console.log("start getAmount('1')" + " " + dtVar.getSeconds() + "." + dtVar.getMilliseconds());
    console.log(amount);
}

dtVar = new Date();
console.log("start getAmount('1')" + " " + dtVar.getSeconds() + "." + dtVar.getMilliseconds());
getAmount('1'); // $ 1,000

/*
dtVar = new Date();
console.log("start getAmount2('1')" + " " + dtVar.getSeconds() + "." + dtVar.getMilliseconds());
getAmount2('1'); // $1,000
*/

dtVar = new Date();
console.log("End of MAIN script ====================================" + " " + dtVar.getSeconds() + "." + dtVar.getMilliseconds());
