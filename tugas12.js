function array() {
  var buah = ["Pisang", "Jeruk", "Apel", "Mangga"];
  console.log(buah);

  var buah2 = buah.pop();
  console.log(buah);
  var buah3 = buah.shift();

  return buah;
}

console.log(array());
