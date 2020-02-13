
let cfComb=0, cfInput = 0.75, cfExpert = 0.165  , cfBef=0, cfX=0;
//0.575 - 0.25
//0.25, 0.625,  1
//1      2      3     4       5
//1     0.5     0    0.5      1
//0     0.25   0.5   0.75     1
//1     0.75   0.5   0.25     0

//input 2
//in 0.77 ex 0.37

for(let i=0; i< 9; i++){
    cfX = cfInput * cfExpert;
    if(i > 0){
        cfComb = cfBef + cfX * (1-cfBef);
        cfBef = cfComb;
    }else{
        cfBef = cfX;
    }
}

console.log(Number(cfComb).toFixed(1));

//0.968981