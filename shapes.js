//Left Triange
let n1 = 5;
let str1 = " ";

for (let i = 0; i < n1; i++) {
  for (let j = 0; j <= i; j++) {
    str1 += "*";
  }
  str1 += "\n";
}
console.log(str1);

//Downward Triangle
let n2 = 5;
let str2 = " ";

for (let i = 0; i < n2; i++) {
  for (let j = 0; j < n2 - i; j++) {
    str2 += "*";
  }
  str2 += "\n";
}
console.log(str2);

//Right Pascal
let n = 5;
let string = " ";

for (let i = 0; i < 2 * n; i++) {
  let totalCols = i > n ? 2 * n - i - 1 : i;
  for (let j = 0; j <= totalCols; j++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);

//Numbers Pattern
let n3 = 5;
let str3 = " ";

for (let i = 1; i <= n3; i++) {
  for (let s = 0; s < n3-i; s++) {
    str3 += "  ";
  }
  for (let j = i; j >= 1; j--) {
    str3 += (j + " ");
  }
  for (let j = 2; j <= i; j++ ) {
    str3 += (j + " ");
  }
  str3 += "\n";
}
console.log(str3);
