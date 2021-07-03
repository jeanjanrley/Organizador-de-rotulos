function usecodeEan13(numero){
    if(numero != 0){
        function splitToDigit(n){return [...n + ''].map(Number)}

    const codigoNum = parseInt(numero)
    const codigo = splitToDigit(codigoNum)

    const multiplos = codigo.map((caracter, index) => {
        return(
            index % 2 === 0 ? caracter * 1 : caracter * 3
            )
        })
    var total = 0
    multiplos.forEach((val) => total += val)
    const digitoVerificador = ((Math.trunc(total / 10) + 1) * 10) - total

    return(digitoVerificador)
    }
    else{return(0)}
}