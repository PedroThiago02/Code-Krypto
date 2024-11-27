// Mapeamento de letras para os caracteres de codificação
const codificacao = {
    'a': '+', 'b': 'y', 'c': '6', 'd': '@', 'e': '&', 'f': '0',
    'g': '?', 'h': '#', 'i': '*', 'j': '3', 'k': '8', 'l': '^',
    'm': '7', 'n': '1', 'o': '$', 'p': '%', 'q': '!', 'r': '<',
    's': '9', 't': '/', 'u': '4', 'v': '5', 'w': ';', 'x': '2',
    'y': '~', 'z': 'k'
};

// Função para codificar o texto
function codificar() {
    const texto = document.getElementById('inputText').value.toLowerCase();
    let textoCodificado = '';

    for (let i = 0; i < texto.length; i++) {
        const char = texto[i];
        if (codificacao[char]) {
            textoCodificado += codificacao[char];  // Substitui pela letra codificada
        } else {
            textoCodificado += char;  // Mantém o caractere original (espaços e outros símbolos)
        }
    }

    document.getElementById('outputText').value = textoCodificado;
}

// Função para descodificar o texto
function descodificar() {
    const texto = document.getElementById('inputText').value;
    let textoDescodificado = '';

    // Inverte o mapeamento de codificação para poder descodificar
    const descodificacao = Object.fromEntries(
        Object.entries(codificacao).map(([key, value]) => [value, key])
    );

    for (let i = 0; i < texto.length; i++) {
        const char = texto[i];
        if (descodificacao[char]) {
            textoDescodificado += descodificacao[char];  // Substitui pela letra original
        } else {
            textoDescodificado += char;  // Mantém o caractere original
        }
    }

    document.getElementById('outputText').value = textoDescodificado;
}
