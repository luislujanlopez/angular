const limite = 20

for (let contador =0; contador < limite; contador++)
{
    if(contador%2===1){
        console.log("Es Impar")
        continue
    }

    if(contador==14)
        break
    
    console.log(contador)
}

/*
let i = 0

while (i<limite)
{
    console.log(i)
    i++
}
*/