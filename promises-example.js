function riskyOperation() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.5) {
        resolve("Operation successful!");
      } else {
        reject("Operation failed!");
      }
    }, 1000);
  });
}

async function main() {
  try {
    const result = await riskyOperation();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

main(); 