'use strict';

let dtVar = new Date();
console.log('Begin of MAIN script ====================================' + " " + dtVar.getSeconds() + "." + dtVar.getMilliseconds());

// A ES2015 Promise is an object representing the eventual completion or failure of an asynchronous operation.
// Using Promise for asyn error catch and handling.
//
// The Promise executor normally initiates some asynchronous work, immediately return control to main path and then,
// later once that completes, either calls the resolve function to resolve the promise or
// else rejects it if an error occurred.
// If an error is thrown in the executor function, the promise is rejected.
// The return value of the executor is ignored.

// Function passed to then() is put on a microtask queue, which means it runs later when the queue is emptied
// at the end of the current run of the JavaScript event loop.
// Promise.resolve() and Promise.reject() are shortcuts to manually create an already resolved or rejected promise
// respectively. This can be useful at times.
Promise.resolve().then(() => console.log(2)).then(() => console.log(3));
console.log(1); // 1 immedately,  2 and 3 after END OF PROGRAM at the end of the current run of the JavaScript event loop.

// Add .then after .catch  - it works.
new Promise((resolve, reject) => {
  console.log('Initial');
  resolve();
})
.then(() => {
  throw new Error('Something failed simulation');
  console.log('Do this');
})
.catch((failureMessage) => {
  console.log(failureMessage);
  console.log('Do that');
})
.then(() => {
  console.log('Do this, no matter what happened before');
});

let asynRetCode = 0; // 0 success, 1 failure.
dtVar = new Date();
console.log('Create promise ' + " " + dtVar.getSeconds() + "." + dtVar.getMilliseconds());

let myFirstPromise = new Promise((resolve, reject) => {
  // We call resolve(...) when what we were done asynchronously was successful, and reject(...) when it failed.
  //sleep(3*1000); // Synchronous sleep for 3 secs.
  //throw {ErrNo: 1, ErrMsg: "Programmatically thrown error in Promise executor."}; // reject(...) will be implicitly called.
  setTimeout(() => { // Simulate asynchronous prodess. Sleep for 3 secs.
    // Asyn process.
    // For next throw reject(...) will NOT be implicitly called because it isfired inside Asyn process.
    //throw {ErrNo: 10, ErrMsg: "Programmatically thrown error in Asyn process."};
    let asynRetCode2 = Math.round(Math.random()); // Generates 0 or 1 randomly.
    if (asynRetCode2 === 0) { // Simulate success or failure asynchronous prodess.
      //resolve('Success');
      resolve({ErrNo: 0, ErrMsg: "No errors - resolve(...) used."});
    }
    else {
      //reject('Failure');
      reject({ErrNo: 100, ErrMsg: "reject(...) used and thrown error that cached."}); // generate exception seen in Debug mode.
    }
  }, 3000);
}).then((successMessage) => { // later if successfully fulfilled resolve will pass control here:
  // successMessage is whatever we passed in the resolve(...) function above.
  // It doesn't have to be a string, but if it is only a succeed message, it probably will be.
  dtVar = new Date();
  console.log(successMessage);
  console.log("Promise asyn finished and fulfilled." + " " + dtVar.getSeconds() + "." + dtVar.getMilliseconds());
}).catch((failureMessage) => { // later if non-success reject will pass control here:
  // failureMessage is whatever we passed in the reject(...) function above.
  // It doesn't have to be a string, but if it is only a failure message, it probably will be.
  // catch(failureCallback) is short for then(null, failureCallback).
  dtVar = new Date();
  console.log(failureMessage);
  console.log("Promise asyn finished and rejected." + " " + dtVar.getSeconds() + "." + dtVar.getMilliseconds());
});
/* Not exists:
.finally((someObj) => {
  console.log(someObj);
});
*/

// Immediately return control to main path.
dtVar = new Date();
console.log('Promise object asyn process started ' + " " + dtVar.getSeconds() + "." + dtVar.getMilliseconds());


// Asyn/await ES2017

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
