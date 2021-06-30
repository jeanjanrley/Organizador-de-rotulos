const pessoas = {jean: {idade: 18, cidade: 'Camaçari'}, matheus: {idade: 18, cidade: 'Dias Davila'}, Cleber: {idade: 18, cidade: 'Salvador'}}

const arrayPessoas = Object.entries(pessoas)
arrayTratado = arrayPessoas.map(([key, value]) => {
    return({
        nome: key,
        idade: value.idade,
        cidade: value.cidade,
    })
})

console.log(arrayTratado)

