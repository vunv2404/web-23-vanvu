'use strict'

function generate(testLengthArray){
  var min , temp ;
    for(var i=0;i < testLengthArray.length -1;i++){
      min=i; 
      for(var j=i+1 ; j< testLengthArray.length ; j++){
        if(input[j] < input[min]) min=j;
      }
      if(min!=i){
        temp = input[i];
        input[i] = input[min];
        input[min] = temp;
      }   
    }
    var target;
    for(var i =0 ; i < testLengthArray.length ; i++){
      if(target != testLengthArray[i]){
        console.log("not found!");
      }else if(target == testLengthArray[0] ){
        console.log("First index");
      }else if(target == testLengthArray[testLengthArray.length - 1] ){
        console.log("Last index");
      }else{
        console.log("Middle index");
      }
      
    }

  // return Array.from({length : testLengthArray.length})
  //   .map(item => ({
  //     input: Array.from({length: item}).map(item => []),
  //     target: 0,
  //     output: -1
  //   })
  // ); // Remove this line and change to your own algorithm
}

module.exports = generate
