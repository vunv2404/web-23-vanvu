'use strict'

function generate(testLengthArray){
  const result =[];
  for (let i = 0; i < testLengthArray.length; i++) {
    const inputLength = testLengthArray[i];
    const item = {
      input : [],
      output : null,
      target : null 
    };
    
    for (let j = 0; j < array.length; j++) {
      item.input.push(Math.floor(Math.random()*20000 - 10000));
    }

    item.input = item.input.sort((a,b) => a-b);
    item.target = Math.floor(Math.random()*20000-10000);
    item.output = item.input.indexOf(item.target);

    if (i==0) {
      item.target = 10001;
      item.output = -1;
    }
    if (i==1) {
      item.target = item.input[0];
      item.output = item.input[0];
    }
    if (i==2) {
      item.target = item.input[item,inputLength - 1];
      item.output = item.inputLength - 1;
    }

    if (i == 3) {
      item.target = item.input[1];
      item.output = -1;
    }

    if (i>3) {
      
    }
    result.push(item);
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
