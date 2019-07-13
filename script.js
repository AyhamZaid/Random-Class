var arr = [
  "Ahmad ALnsour",
  "Raghad Aledwan ",
  "Mua'th Baino ",
  "Amal Aldajah ",
  "Haya jaradat ",
  "Mohammad Talib ",
  "Asem Qaffaf ",
  "Baraa ",
  "Rahma ",
  "Noor Alfaqeeh  ",
  "Nada eadah  ",
  "Hani Abo Alinain  ",
  "Elias Nada  ",
  "Abeer ",
  "Mohammad Alaa Aldein ",
  "Ahlam al-hmeadat ",
  "Mohammad.y.albittar ",
  "Ayham Zaid ",
  "Yaser ",
  "Ammar Alzyoud ",
  "Yasmin ",
  "Hadeel fleifel  ",
  "Ahmad Azzam",
  "Ahmad Taha ",
  "Ahmad ghzawi "
];
var arrayOfSixElements = [
  "this is student 1",
  "this is student 2",
  "this is student 3",
  "this is student 4",
  "this is student 5",
  "this is student 6",
  "this is student 7"
];
var randomArr = [];
var randomArr2 = [];
var arrayOfRandom = [""];
function shuffle() {
  for (
    var j, x, i = arr.length;
    i;
    j = parseInt(Math.random() * i), x = arr[--i], arr[i] = arr[j], arr[j] = x
  );
  randomArr = arr;
}
function shuffle2() {
  for (
    var j, x, i = arrayOfSixElements.length;
    i;
    j = parseInt(Math.random() * i),
      x = arrayOfSixElements[--i],
      arrayOfSixElements[i] = arrayOfSixElements[j],
      arrayOfSixElements[j] = x
  );
  randomArr2 = arrayOfSixElements;
}
shuffle();
shuffle2();
var counter = 0;
for (let i = 0; i < randomArr.length - 4; i++) {
  if (i % 4 == 0) {
    document.write(
      "<pre >" + "group  " + (counter + 1) + " " + randomArr[i] + "</pre>"
    );
    document.write(
      "<pre>" + "group  " + (counter + 1) + " " + randomArr[i + 1] + "</pre>"
    );
    document.write(
      "<pre>" + "group  " + (counter + 1) + " " + randomArr[i + 2] + "</pre>"
    );
    document.write(
      "<pre>" + "group  " + (counter + 1) + " " + randomArr[i + 3] + "</pre>"
    );
    counter++;
    document.write(
      "<pre>" +
        "group  " +
        counter +
        " " +
        arrayOfSixElements[counter] +
        "<br><br>" +
        "</pre>"
    );
  }
}
