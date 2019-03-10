function groupAnimals(animals) {

 //buat group animals dengan huruf awal
 var animalsGroups = [];
 for (var i=0; i< animals.length; i++){
   animalsGroups.push([]); 
   var indeks = 0;  
   for (var j=0; j< animals.length; j++) {  
    if (animals[i][0] === animals[j][0]) { 
    animalsGroups[i][indeks] = animals[j]; 
    indeks ++;
   }
  }
 }
 
 
 //sort untuk nilai array
 var tampung=0;
 for (var i=0; i< animalsGroups.length; i++){
   for(var j=0; j< animalsGroups.length-i-1; j++){
     if(animalsGroups[j] > animalsGroups[j+1]){
       tampung = animalsGroups[j];
       animalsGroups[j] = animalsGroups[j+1];
       animalsGroups[j+1] = tampung;
     }
   }
 }
 
 
 //buat modus utk menghilangkan duplicate nilai array
 for (var i=0; i< animalsGroups.length-1; i++){
   if (animalsGroups[i][0] === animalsGroups[i+1][0]){
     animalsGroups.splice(i,1);
   }
 }

 return animalsGroups;
  
}
 
// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]