import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyService from './currency-service';

function getCurrency(currencyFrom, currencyTo, currencyAmount) {
  let promise = CurrencyService.getCurrency(currencyFrom, currencyTo, currencyAmount);
  promise.then(function(response) {
    printElements(response);
  }, function(errorMessage) {
    printError(errorMessage);
  });
}

// UI Logic
function printElements(response) {

}

// response, currencyFrom, currencyTo, currencyAmount


function printError(error) {
  document.querySelector('#resultsHeader').innerText = `there was an error accessing currency exchange data for ${error[2]} and ${error[3]}: ${error[0].status} ${error[1].error-type}`;
}


function handleFormSubmission(event) {
  event.preventDefault();
  const currencyFrom = document.querySelector('#currencyFrom').value;
  const currencyTo = document.querySelector('#currencyTo').value;
  const currencyAmount = document.querySelector('#currencyAmount').value;
  document.querySelector('#currencyFrom').value = null;
  document.querySelector('#currencyTo').value = null;
  document.querySelector('#currencyAmount').value = null;
  getCurrency(currencyFrom, currencyTo, currencyAmount);
}


window.addEventListener("load", function() {
  document.querySelector('form').addEventListener("submit", handleFormSubmission);
});