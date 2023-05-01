import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyService from './currency-service';

async function getCurrency(currencyFrom, currencyTo, currencyAmount) {
  const response = await CurrencyService.getCurrency(currencyFrom, currencyTo, currencyAmount);
  if (response.result) {
    printElements(response, currencyFrom, currencyTo, currencyAmount);
  } else {
    printError(response, currencyFrom, currencyTo, currencyAmount);
  }
}

// UI Logic
function printElements(response, currencyFrom, currencyTo, currencyAmount) {
  const resultsDiv = document.getElementById('resultsDiv');
  resultsDiv.setAttribute('class', 'row print');
  const resultsContainer = document.createElement('div');
  resultsDiv.appendChild(resultsContainer);
  const currencies = document.createElement('h4');
  currencies.innerText = `${currencyFrom}/${currencyTo}`;
  resultsContainer.appendChild(currencies);
  const updateTime = document.createElement('p');  
  updateTime.innerText = `Conversion Rate as of : ${response.time_last_update_utc} UTC`;
  updateTime.setAttribute('class', 'time');
  resultsContainer.appendChild(updateTime);
  const exchangeRateResults = document.createElement('p');
  exchangeRateResults.innerText = `1 ${currencyFrom} >>> ${response.conversion_rate} ${currencyTo}`;
  resultsContainer.appendChild(exchangeRateResults);
  const exchangeAmountResults = document.createElement('p');
  exchangeAmountResults.innerText = `${currencyAmount} ${currencyFrom} converted to ${currencyTo} is ${response.conversion_result} ${currencyTo}`;
  resultsContainer.appendChild(exchangeAmountResults);
  const spacing = document.createElement('hr');
  resultsContainer.appendChild(spacing);
}

function printError(error, currencyFrom, currencyTo) {
  const resultsDiv = document.getElementById('resultsDiv');
  resultsDiv.setAttribute('class', 'row');
  const resultsContainer = document.createElement('div');
  resultsDiv.append(resultsContainer);
  const errorMessage = document.createElement('h4');
  errorMessage.innerText = `There was an error accessing currency exchange data for ${currencyFrom} and ${currencyTo} - Error Code: ${error}`;
  resultsContainer.append(errorMessage);
  const spacing = document.createElement('hr');
  resultsContainer.append(spacing);
}

function handleFormSubmission(event) {
  event.preventDefault();
  const currencyFrom = document.querySelector('#currencyFrom').value;
  const currencyTo = document.querySelector('#currencyTo').value;
  const currencyAmount = document.querySelector('#currencyAmount').value;
  document.querySelector('#currencyAmount').value = null;
  getCurrency(currencyFrom, currencyTo, currencyAmount);
}

window.addEventListener("load", function() {
  document.querySelector('form').addEventListener("submit", handleFormSubmission);
});