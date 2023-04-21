# _Currency Exchange_

#### By _**Marcus Kyung**_

#### _This application uses ExchangeRate-API to return conversion rates between two currencies as well as return an amount of one currency in another._

## Technologies Used

* _HTML_
* _CSS_
* _JavaScript_
* _Node Package Manager_
* _"@babel/core": "^7.18.6"_
* _ "@babel/plugin-transform-modules-commonjs": "^7.18.6"_
* _"clean-webpack-plugin": "^3.0.0"_
* _"css-loader": "^3.6.0"_
* _"dotenv-webpack": "^2.0.0"_
* _"eslint": "^8.18.0"_
* _"eslint-webpack-plugin": "^2.7.0"_
* _"file-loader": "^6.2.0"_
* _"html-loader": "^1.3.2"_
* _"html-webpack-plugin": "^4.5.2"_
* _"jest": "^24.9.0"_
* _"style-loader": "^1.3.0"_
* _"webpack": "4.46.0"_
* _"webpack-cli": "^3.3.12"_
* _"webpack-dev-server": "3.11.3"_
* _"ExchangeRate-API (https://app.exchangerate-api.com)_

## Description

_This application is designed to convert currencies using live exchange rate data from ExchangeRate-API. This application displays the conversion rate between two currencies as well as the converted value of any amount of one currency to another currency._

## Setup/Installation Requirements

* _Download project repository from GH to local machine._
* _Navigate to the root directory of the project file using your device's terminal._
* _Add a .env file at the root level of the project directory using the terminal command "touch .env"._
* _Using your device's browser, navigate to https://app.exchangerate-api.com/sign-up. Enter an email and designate a password then click "Accept Terms & Create API Key!". Use of this application requires the free tier of ExchangeRate-API at minimum. Once an API key is generated on the account confirmation screen copy it to your device's clipboard._
* _Open your .env file using VS Code or your device's default text edit software and paste your API key using the following syntax: ```API_KEY=YOUR-API-KEY-HERE```. Save the .env file._
* _Use local machine terminal to install all project packages using command ```$ npm install```._
* _Use local machine terminal to build project using command ```$ npm build```._
* _Use local machine terminal to start development server using command ```$ npm start```._
* _Open application in your machine's browser._
* _Use the program's interface to enter an amount to be converted and a "to" and "from" currency. Once all inputs are designated click green "Convert Currency" button to generate results._


## Known Bugs

* _No known issues as of 4/21/23_

## License

_For questions, comments, or concerns please reach out at Kyungmj@gmail.com_

MIT License

Copyright (c) [2023] [Marcus Kyung]

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: 

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR\ A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.