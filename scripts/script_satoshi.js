function converter() {
  var satoshiInput1 = document.getElementById("satoshiInput1").value;
  var btcValue = satoshiInput1 / 100000000; // 1 Bitcoin = 100,000,000 satoshis
  
  // Faz uma requisição à API CoinGecko para obter a taxa de câmbio BTC/BRL
  axios.get('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=brl')
    .then(function (response) {
      var brlValue = btcValue * response.data.bitcoin.brl;
      document.getElementById("resultado").innerText = "Valor em BRL: R$" + brlValue.toFixed(4);
    })
    .catch(function (error) {
      console.log(error);
      document.getElementById("resultado").innerText = "Erro ao obter a taxa de câmbio.";
    });

    
}


function converter2() {
var satoshiInput2 = document.getElementById("satoshiInput2").value;
  var btcValue = satoshiInput2 / 100000000; // 1 Bitcoin = 100,000,000 satoshis
  
  // Faz uma requisição à API CoinGecko para obter a taxa de câmbio BTC/BRL
  axios.get('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd')
    .then(function (response) {
      var brlValue = btcValue * response.data.bitcoin.usd;
      document.getElementById("resultado2").innerText = "Valor em USD: $" + brlValue.toFixed(4);
    })
    .catch(function (error) {
      console.log(error);
      document.getElementById("resultado2").innerText = "Erro ao obter a taxa de câmbio.";
    });

  }
