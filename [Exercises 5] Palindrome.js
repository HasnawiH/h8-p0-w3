function palindrome(kata) {
  // you can only write your code here!
  var hasilKata = '';
  for (var i=kata.length-1; i>=0; i--){
    hasilKata += kata[i];
  }
  //console.log(hasilKata);
   return hasilKata === kata;
}

// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false