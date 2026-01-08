// 1. **Print Right-Angled Star Triangle**

function printRightAngled(N){
    for(let i=0; i<N; i++){
    let row = "";
    for(let j=0; j<=i; j++){
        row += "*"
    }
    console.log(row);
    }
}
// printRightAngled(5)

// 2. **Print Inverted Right-Angled Triangle**

function printInvertedRightAngled(N){
    for(let i=N; i>0; i--){
        let row = "";
        for(let j=0; j<i; j++){
            row += "*"
        }
        console.log(row);
    }

}
// printInvertedRightAngled(5)

// 3. **Print Pyramid Pattern**

function printPyramid(raw){
    for(let i=1; i<=raw; i++){
        let line = "";
        for(let j = 1; j <= raw - i; j++){
            line += " "
        }
        for(let k=1; k <= 2*i -1; k++){
            line += "*"
        }
        console.log(line);
    }

}
// printPyramid(5)

// 4. **Print Inverted Pyramid Pattern**

function printReversePyramid(raw){
    for(let i=1; i<=raw; i++){
        let line = "";
        for(let k= 1; k<=i; k++){
            line += " ";
        }
        for(let j=(raw- i)* 2; j>=0; j--){
            line += "*";
        }
        
        console.log(line);
    }
    
}
// printReversePyramid(5)

// 5. **Print Hollow Square Pattern**

function printSquare(raw){
    for(let i=1; i<= raw; i++){
        let line = "";
        for(let j=1; j<=raw; j++){
            if(i === 1 || i === raw){
                line += "*"
            }
            else{
                    if(j == 1 || j == raw){
                        line += "*" 
                    }
                    else{
                        line += " ";
                    }  
            }   
        }
        console.log(line);
    }
}
// printSquare(5)


// 6. **Print Hollow Pyramid Pattern**

function printHollowPyramid(raw){
    for(let i=1; i<=raw; i++){
        let line = "";
        for(let j = 1; j <= raw - i; j++){
            line += " "
        }
        for(let k=1; k <= 2*i -1; k++){
            if(k===1 || i === raw || k === 2*i -1){
                line += "*"
            }
            else{
                line += " "
            }
        }
        console.log(line);
    }

}
printHollowPyramid(5)







// 7. **Print Alternating Binary Triangle**

function printBinary (raw){
    let n = 0;
    for(let i=0; i<raw; i++){
        let line = "";
        for(let j=0; j<=i; j++){
            n= n===0 ? 1 : 0;
            line += n + " "
        }
        console.log(line);
    }
}
// printBinary(5);



