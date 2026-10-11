//FizzBuzz
/*
let modulo = 1 % 5 
console.log(modulo)
*/

const limite = 100

for(let contador=1; contador <=limite; contador++)
{

    if(contador % 5 ==0 && contador % 3 ==0)
    {
        console.log("FizzBuzz :"+ contador)
        continue
    }     
    else
        if(contador % 3 ==0)
    {
     console.log("Fizz:"+ contador)   
     continue
    }else
        if(contador % 5 ==0)
    {
        console.log("Buzz:"+ contador)
        continue
    }     

}
    