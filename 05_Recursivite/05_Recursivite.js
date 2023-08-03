//Etape 1
/* function sum1(arr){
    let sum = 0
    for (let i of arr){
        sum = sum + i;
    }
    return sum
}

let arrToSum = [1,2,3,4]
console.log(sum1(arrToSum)) */

//Etape 2
/* function sum2(arr){
    if (arr.length === 1){
        return arr.pop();
    }else{
        return arr.shift() + sum2(arr);
    }

}

let arrToSum = [1,2,3,4]
console.log(sum2(arrToSum)) */

//Etape 3
/* function factor(n){
    if (n === 1){
        return 1;
    }else{
        return n*(n-1);
    }
}

console.log(factor(5)) */

//Etape 4
function fib(n){
    let arr = [0,1];
    for (let i of arr){
        if (i >= n-1){
            return i;
        }else{
            return ;
        }
    }
}

console.log(fib(3))