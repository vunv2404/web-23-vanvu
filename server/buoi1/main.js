// console.log("hello ");

// const variable  =1000;

// // console.log(variable);

// // variable = "hello!";

// // console.log(variable);

// let a = 10;

// var b = "hello";
// console.log(typeof undefinedvariable);

// console.log(typeof a);
// console.log(typeof(b));

// a= true;

// b= 1000;
// console.log(a,b);

// var obj = {
//     a: 5,
//     b: "hello"
// };

// console.log(obj.a);
// console.log(obj.b);
// console.log(obj["a"]);

// obj.a = true;

// console.log(obj);

// obj.c = 1000;

// console.log(obj);

// delete obj.a;

// console.log(obj);

// const arr = [1, 234,"hellu " , true , ];

// console.log(arr.length);
// console.log(arr.push("asd"));
// console.log(arr);


// console.log((123.34531).toFixed(2));

// console.log("hello".toUpperCase());

// console.log(new Date().getDay());

// //regular expresion

// console.log(/([A-Z])\w+/.test('Ahbcdadc'));

//throw error
// const error = new Error("Loi roi !!!");

// error.name = "don gian la loi";

// throw error;

// funtion scope - var

// var a = "hello" ;

// function aFunction(){
//     var b= "world";

//     function bFunction(){
//         console.log(a);
//         console.log(b);
//     }
//     bFunction();
//     console.log(a);
//     console.log(b);
// }
// aFunction();

// console.log(a);
// console.log(b);

// Block scope - let

// let c =10;
// if(true){
//     //block
//     var d = 100;

//     console.log(c);//10
//     console.log(d);//100
// }

//     console.log(c);//10
//     console.log(d);//undefined



function countDown(count){
    for(let i = count ; i >= 0 ; i--){
        setTimeout(function(){
            console.log(i);
        },(count-i)*1000);
    }
}

//countDown(5);

const countDownclone = countDown

countDownclone(5);

function excute(){
    
}