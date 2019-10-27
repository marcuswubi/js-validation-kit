const promise = new Promise(function(resolve, reject) {
  //everything ok
  if (true) {
    resolve(true);
  } else {
    reject("failed");
  }
});

module.exports = promise;
