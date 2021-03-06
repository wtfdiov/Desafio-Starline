const requester = require('./requester')


async function process(){
    let realPhrase = "-"
    let charAtual = String.fromCharCode(65)
    let tamanhoReal = 999
    let valida = charAtual.repeat(tamanhoReal)
    let specialChars = {
        "*": 42,
        "'": 39,
        "!": 33,
        ".": 46,
        ",": 44,
        ":": 58,
        ";": 59,
        "#": 35,
        "$": 36,
        "%": 37,
        "&": 38,
        " ": 32
    }
    
    let data = await requester(valida)
    realPhrase = data
    tamanhoReal = data.length

    for (char in specialChars) {
        charAtual = String.fromCharCode(specialChars[char])
        valida = charAtual.repeat(tamanhoReal)
        data = await requester(valida)

        for(let j = 0; j < data.length; j++){
            if(data[j] === charAtual)
                realPhrase = replaceAt(realPhrase, j, charAtual)
        }
        //DEBUG: console.log(`string start:${realPhrase}:end string ${charAtual}`)
    }
    
    for(let i = 65; i < 91; i++){
        charAtual = String.fromCharCode(i)
        valida = charAtual.repeat(tamanhoReal)
        data = await requester(valida)

        //DEBUG: console.log(`string start:${data}:end string`)

        for(let j = 0; j < data.length; j++){
            if(data[j] === charAtual)
                realPhrase = replaceAt(realPhrase, j, charAtual)
        }
    }

    for(let i = 97; i < 123; i++){
        charAtual = String.fromCharCode(i)
        valida = charAtual.repeat(tamanhoReal)
        data = await requester(valida)

        //DEBUG: console.log(`string start:${data}:end string`)

        for(let j = 0; j < data.length; j++){
            if(data[j] === charAtual)
                realPhrase = replaceAt(realPhrase, j, charAtual)
        }
    }
    return realPhrase
}

 /* snippet para trocar as letras na posição informada */
function replaceAt(string, index, replace) {
  return string.substring(0, index) + replace + string.substring(index + 1);
}

// RUN
console.log('Tentando descobrir a frase secreta que se encontra na API...')
process().then(realPhrase => console.log(realPhrase)).catch(err => console.log(err))

