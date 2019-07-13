'use strict'


function sort(input) {
  var min , temp ;
    for(var i=0;i < input.length -1;i++){
        min=i; // thiet lap phan tu ban dau la min
        for(var j=i+1 ; j< input.length ; j++){
            if(input[j] < input[min]) min=j;
        }
        if(min!=i){
           // trao doi phan tu
            temp = input[i];
            input[i] = input[min];
            input[min] = temp;
        }
    }
}

module.exports = sort
