function getName(name, newName) {
  setTimeout(() => {
    console.log(name);
    if (newName) {
      newName();
    }
  }, 2000);
}

getName("Kunal", () => {
  getName("Piyush", () => {
    getName("Siddharth", () => {
      getName("Hitesh");
    });
  });
});
