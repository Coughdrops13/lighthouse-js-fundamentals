let howManyHundreds = function (bottles) {
  let containers = ((bottles - (bottles % 100)) / 100);
  if (bottles % 100 !== 0) {
    containers += 1;
  }
  return containers;
}
console.log(howManyHundreds(3401), "=?", 0);