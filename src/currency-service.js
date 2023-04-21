export default class CurrencyService{
  static getCurrency(currencyFrom, currencyTo, currencyAmount) {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      const url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/${currencyFrom}/${currencyTo}/${currencyAmount}`;
      request.addEventListener("loadend", function() {
        const response = JSON.parse(this.responseText);
        if (this.status === 200) {
          resolve([response, currencyFrom, currencyTo, currencyAmount]);
        } else {
          reject([this, response, currencyFrom, currencyTo, currencyAmount]); 
        }
      });
      request.open("GET", url, true);
      request.send();
    });
  }
}