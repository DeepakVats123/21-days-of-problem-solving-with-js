// 1. **Check if a Number is Prime**

function isPrime(N){
 let count = 0;
 for(let i=2; i<N; i++){
    if(N%i === 0){
        count++;
        break;
    }
 }
 return count === 0 ? "Prime Number" : "Not a Prime Number" 
}
console.log(isPrime(7));