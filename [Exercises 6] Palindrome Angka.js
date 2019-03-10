function angkaPalindrome(num) {
  // you can only write your code here!
  do {
    //increase number
    num++;
    //proses looping && polindrome
    var tampung = '';
    for (var i=String(num).length-1; i>=0; i--){
    tampung += String(num)[i];
    }
  }
  
  //batas stop untuk looping
  while (tampung !== String(num));
  return parseInt(tampung);
}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001
