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
  const resultsDiv = document.getElementById('resultsDiv');
  resultsDiv.setAttribute('class', 'row');
  const resultsContainer = document.createElement('div');
  resultsDiv.appendChild(resultsContainer);
  const currencies = document.createElement('h4');
  currencies.innerText = `${response[1]}/${response[2]} (as of ${response[0].time_last_update_utc})`;
  resultsContainer.appendChild(currencies);
  const exchangeRateResults = document.createElement('p');
  exchangeRateResults.innerText = `1 ${response[1]} >>> ${response[2]} is ${response[0].conversion_rate}.`;
  resultsContainer.appendChild(exchangeRateResults);
  const exchangeAmountResults = document.createElement('p');
  exchangeAmountResults.innerText = `${response[3]} ${response[1]} converted to ${response[2]} is ${response[0].conversion_result} ${response[2]}`;
  resultsContainer.appendChild(exchangeAmountResults);
  const spacing = document.createElement('hr');
  resultsContainer.appendChild(spacing);
}

function printError(error) {
  document.querySelector('#resultsHeader').innerText = `there was an error accessing currency exchange data for ${error[2]} and ${error[3]} - Error Code: ${error[0].status} ${error[1]["error-type"]}`;
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