const promise = new Promise(function(resolve, reject) {
  //everything ok
  if (true) {
    num = num * 2;
    resolve(num);
  } else {
    reject("failed");
  }
});

module.exports = promise;
