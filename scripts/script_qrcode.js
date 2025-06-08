document.getElementById('generateBtn').addEventListener('click', function () {
    const qrText = document.getElementById('qrText').value;
    const size = parseInt(document.getElementById('size').value);
    const qrColor = document.getElementById('qrColor').value;
    const bgColor = document.getElementById('bgColor').value;

    if (qrText.trim() === "") {
        alert("Por favor, insira algum texto ou URL!");
        return;
    }

    // Limpa o QR code anterior, se houver
    document.getElementById('qrcode').innerHTML = "";

    // Configurações de estilo para o QR code
    const options = {
        width: size,
        color: {
            dark: qrColor,  // Cor do QR code
            light: bgColor  // Cor de fundo
        }
    };

    // Gerar o QR code com as opções personalizadas
    QRCode.toDataURL(qrText, options, function (error, url) {
        if (error) {
            console.error(error);
            alert("Ocorreu um erro ao gerar o QR Code!");
            return;
        }

        // Criar a imagem do QR code
        const img = document.createElement('img');
        img.src = url;
        document.getElementById('qrcode').appendChild(img);
    });
});
