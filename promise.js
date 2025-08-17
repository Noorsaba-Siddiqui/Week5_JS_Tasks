function getName(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(name);
      resolve("Success");
    }, 3000);
  });
}

getName("kunal")
  .then(() => {
    return getName("Piyush");
  })
  .then(() => {
    return getName("Siddharth");
  })
  .then((res) => {
    return getName("Hitesh");
  })
  .then((res) => {
    console.log(res);
  });