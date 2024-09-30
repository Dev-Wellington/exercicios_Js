const numero = 35;
const numero2 = 7;

const multiplos =(n1,n2)=>{
    if(n1 % n2 === 0){
        const fator = n1 / n2;
        console.log(`o numero ${n1} é multiplo de ${n2}`)
        console.log(`Pois ${n2} x ${fator} é igual a ${numero}`)
        return true
    }
    return false
}

multiplos(numero, numero2)