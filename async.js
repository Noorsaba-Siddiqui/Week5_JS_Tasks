function getName(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(name);
      resolve("Success");
    }, 3000);
  });
}

async function getData() {
  console.log("Fetching Data 1...");
  await getName("Kunal");

  console.log("Fetching Data 2...");
  await getName("Piyush");

  console.log("Fetching Data 3...");
  await getName("Siddharth");

  console.log("Fetching Data 4...");
  await getName("Hitesh");

  console.log("Fetching Data 5...");
  await getName("Yogesh Sir");
}
getData();
