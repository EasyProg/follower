function getMaxOfArray(numArray) {
  return Math.max.apply(null, numArray.slice(1, numArray.length));
}
