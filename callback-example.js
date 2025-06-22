function riskyOperation(callback) {
  setTimeout(() => {
    if (Math.random() < 0.5) {
      callback(null, "Operation successful!");
    } else {
      callback("Operation failed!");
    }
  }, 1000);
}

riskyOperation((error, result) => {
  if (error) {
    console.error(error);
  } else {
    console.log(result);
  }
}); 