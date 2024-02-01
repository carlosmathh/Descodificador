
function alerta() {
    Swal.fire({
        position: "top",
        title: "Digite apenas letras minusculas e sem acento",
        icon: "warning",
        showClass: {
            popup: `
        animate__animated
        animate__fadeInUp
        animate__faster
      `
        },
        hideClass: {
            popup: `
        animate__animated
        animate__fadeOutDown
        animate__faster
      `
        }
    });
}

alerta()

function criptografar() {
    let textoDigitado = document.getElementById('caixaDecodificador').value;

    textoDigitado = textoDigitado.replace(/e/g, 'enter');
    textoDigitado = textoDigitado.replace(/i/g, 'imes');
    textoDigitado = textoDigitado.replace(/a/g, 'ai');
    textoDigitado = textoDigitado.replace(/o/g, 'ober');
    textoDigitado = textoDigitado.replace(/u/g, 'ufat');

    textoCriptografado = document.querySelector('#textoCriptografado');
    textoCriptografado.innerHTML = textoDigitado;
}

function descriptografar() {
    let textoDigitadoDescriptografia = document.getElementById('caixaDecodificador').value;

    // Substituir as sequências específicas
    textoDigitadoDescriptografia = textoDigitadoDescriptografia.replace(/enter/g, 'e');
    textoDigitadoDescriptografia = textoDigitadoDescriptografia.replace(/imes/g, 'i');
    textoDigitadoDescriptografia = textoDigitadoDescriptografia.replace(/ai/g, 'a');
    textoDigitadoDescriptografia = textoDigitadoDescriptografia.replace(/ober/g, 'o');
    textoDigitadoDescriptografia = textoDigitadoDescriptografia.replace(/ufat/g, 'u');

    let textoDescriptografado = document.getElementById('textoCriptografado');
    textoDescriptografado.innerHTML = textoDigitadoDescriptografia;
}

function copiar(textoCriptografado) {
    navigator.clipboard.writeText(textoCriptografado)
        .then(() => {
            console.log('Texto copiado para a área de transferência com sucesso!');
        })
        .catch(err => {
            console.error('Erro ao copiar texto: ', err);
        });

    Swal.fire({
        position: "top-start",
        icon: "success",
        title: "copiado",
        showConfirmButton: false,
        timer: 1500
    });
}


