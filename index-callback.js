let sum = (a, b) => {
  return a + b;
};

function printSum(a, b) {
  setTimeout(() => {
    console.log(sum(a, b));
  }, 2000);
}

printSum(4, 3);
