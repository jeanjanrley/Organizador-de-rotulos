import { useState, useEffect } from "react";

export default function useGetCode(inputCod){
    const [codigoDeBarras, setCodigoDeBarras] = useState('0000000000000')

    function codeEan13(numero){
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
    
        const check = splitToDigit(digitoVerificador)
        return(check.length != 1 ? 0 : digitoVerificador)
        }
        else{return(0)}
    }

    function getRandomEan13(min = 0, max = 9) {
        var ean13 = ''
        do{
            min = Math.ceil(min);
            max = Math.floor(max);
            ean13 += String((Math.floor(Math.random() * (max - min)) + min))
        }while(ean13.length != 12)

        const digito = codeEan13(ean13)
        setCodigoDeBarras(ean13 + digito)
    }

    useEffect(() => {
        getRandomEan13()
    }, [])

    return{codeEan13, getRandomEan13, codigoDeBarras, setCodigoDeBarras}
}