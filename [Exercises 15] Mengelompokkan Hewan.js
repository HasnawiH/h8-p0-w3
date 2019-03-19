function groupAnimals(animals) {

  // untuk sorting
 animals.sort()

 var output = [];

 // inialisasi variabel untuk index output
 var indexOutput = 0

 // looping untu mengambil nilai array
 for (var i=0; i < animals.length; i++){

     if ( output.length === 0 ){

         output.push([animals[i]])      

         // untuk mengecek huruf pertama nilai output dengan huruf pertama nilai animals
     } else if(output[indexOutput][0][0] === animals[i][0]){

         output[indexOutput].push(animals[i])

         // jika kondisi diatas tidak terpenuhi
     } else {

         output.push([animals[i]])

         indexOutput++
     }
 }

 return output
}

//TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
//[ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
//[ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]