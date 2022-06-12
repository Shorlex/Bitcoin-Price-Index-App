function reLoad(){
    window.location.reload();}
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    fetch("https://api.coindesk.com/v1/bpi/currentprice.json", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        console.log(result);
        var bitcoinPrice = JSON.parse(result);
        console.log(bitcoinPrice);
        var getPrice =
          "Description: " +
          bitcoinPrice.bpi.USD.description +
          "<br>" +
          "Time: " +
          bitcoinPrice.time.updated +
          "<br>" +
          "Disclaimer: " +
          bitcoinPrice.disclaimer +
          "<br>" +
          "Currency: " +
          bitcoinPrice.chartName +
          "<br>" +
          "BPI: " +
          bitcoinPrice.bpi.USD.code +
          "<br>" +
          "Symbol: " +
          bitcoinPrice.bpi.USD.symbol +
          "<br>" +
          "Rate: " +
          bitcoinPrice.bpi.USD.rate 
        document.getElementById("getPrice").innerHTML = getPrice;

         var getPrice2 =
         "Description: " +
          bitcoinPrice.bpi.GBP.description +
          "<br>" + 
         "Time: " +
          bitcoinPrice.time.updated +
          "<br>" +
          "Disclaimer: " +
          bitcoinPrice.disclaimer +
          "<br>" +
          "Currency: " +
          bitcoinPrice.chartName +
          "<br>" +
          "BPI: " +
          bitcoinPrice.bpi.GBP.code +
          "<br>" +
          "Symbol: " +
          bitcoinPrice.bpi.GBP.symbol +
          "<br>" +
          "Rate: " +
          bitcoinPrice.bpi.GBP.rate 
        document.getElementById("getPrice2").innerHTML = getPrice2;

        var getPrice3 =
          
        "Description: " +
          bitcoinPrice.bpi.EUR.description +
          "<br>" +
          "Time: " +
          bitcoinPrice.time.updated +
          "<br>" +
          "Disclaimer: " +
          bitcoinPrice.disclaimer +
          "<br>" +
          "Currency: " +
          bitcoinPrice.chartName +
          "<br>" +
          "BPI: " +
          bitcoinPrice.bpi.EUR.code +
          "<br>" +
          "Symbol: " +
          bitcoinPrice.bpi.EUR.symbol +
          "<br>" +
          "Rate: " +
          bitcoinPrice.bpi.EUR.rate +
          "<br>" +
          "Description: " +
          bitcoinPrice.bpi.EUR.description +
          "<br>"
        document.getElementById("getPrice3").innerHTML = getPrice3;
      })
      .catch((error) => console.log("error", error));