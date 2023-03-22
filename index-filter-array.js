let arr = [2, 3, 4, 5, 6, 7];

let isEven = (num) => {
  return num % 2 == 0;
};

let isOdd = (num) => {
  return num % 2 != 0;
};

function get(str) {
  if (str == "chan") {
    let evenArr = arr.filter(isEven);
    console.log(evenArr);
  } else if (str == "le") {
    let oddArr = arr.filter(isOdd);
    console.log(oddArr);
  }
}

function btn_click() {
  let str = document.getElementById("input-str").value;
  get(str);
}
