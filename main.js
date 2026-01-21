function Cong(a,b){
    return a+b;
}
var Cong3 = function(a,b){
    return a+b;
}

var Cong2 = (a,b)=>{
    return a+b;
}

let array = [1,2,3,4,5,6,7,8,9];
array[10] = 10;
console.log(array);

for (let i = 0; i < array.length; i++) {
    const element = array[i];
    console.log(element);
}

for (const element of array) {
    console.log(element);
}

for (const index in array) {
    console.log(array[index]);
}


{
let array = [11, 2, 9, 12, 8, 10];

let result = array.sort(
    compare
);

function compare(a, b) {
    return a - b;
}

console.log(result);
}

{
    let array = [15, 2, 9, 13, 8, 10];

let result = array.sort(
    compare(-1)
);

function compare(type) {
    return function (a, b) {
        return type * (a - b);
    }
}

console.log(result);

}

{
    let array = [25, 12, 19, 23, 18, 20];
    let result = [];
    for ( const element of array ) 
        {
        if ( element % 2 == 0 ) {
            result.push("Chẵn");
        }else
        {
            result.push("Lẻ");
        }
    }
    console.log(result);
}

{
    for (const element of array) {
        if (element % 2 == 0) {
            result.push("Chẵn");
        } else {
            result.push("Lẻ");
        }
    }
    console.log(result);
}