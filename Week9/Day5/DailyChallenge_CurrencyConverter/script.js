const url =
  "https://v6.exchangerate-api.com/v6/3a96ec6e3afa1c75b99d47d6/latest/USD";
const currencyName = [
  ["AED", "UAE Dirham"],
  ["AUD", "Australian Dollar"],
  ["AWG", "Aruban Florin"],
  ["AZN", "Azerbaijani Manat"],
  ["BAM", "Bosnia and Herzegovina Mark"],
  ["BGN", "Bulgarian Lev"],
  ["BHD", "Bahraini Dinar"],
  ["BIF", "Burundian Franc"],
  ["BMD", "Bermudian Dollar"],
  ["BND", "Brunei Dollar"],
  ["BOB", "Bolivian Boliviano"],
  ["BRL", "Brazilian Real"],
  ["BSD", "Bahamian Dollar"],
  ["BTN", "Bhutanese Ngultrum"],
  ["BWP", "Botswana Pula"],
  ["BYN", "Belarusian Ruble"],
  ["BZD", "Belize Dollar"],
  ["CAD", "Canadian Dollar"],
  ["CDF", "Congolese Franc"],
  ["CHF", "Swiss Franc"],
  ["CNY", "Chinese Renminbi"],
  ["CZK", "Czech Koruna"],
  ["DJF", "Djiboutian Franc"],
  ["DKK", "Danish Krone"],
  ["EGP", "Egyptian Pound"],
  ["EUR", "Euro"],
  ["GBP", "Pound Sterling"],
  ["HKD", "Hong Kong Dollar"],
  ["HUF", "Hungarian Forint"],
  ["ILS", "Israeli New Shekel"],
  ["JPY", "Japanese Yen"],
  ["MXN", "Mexican Peso"],
  ["NOK", "Norwegian Krone"],
  ["NZD", "New Zealand Dollar"],
  ["PLN", "Polish Złoty"],
  ["RON", "Romanian Leu"],
  ["RSD", "Serbian Dinar"],
  ["RUB", "Russian Ruble"],
  ["SEK", "Swedish Krona"],
  ["SGD", "Singapore Dollar"],
  ["TRY", "Turkish Lira"],
  ["UAH", "Ukrainian Hryvnia"],
  ["USD", "United States Dollar"],
];
const getData = async function () {
  try {
    const res = await fetch(url);
    const data = await res.json();
    const conversionRates = data.conversion_rates;
    console.log(data);
    console.log(conversionRates);
    const conversionRatesArr = Object.entries(conversionRates);
    console.log(conversionRatesArr);
    for (let i = 0; i < currencyName.length; i++) {
      for (let y = 0; y < conversionRatesArr.length; y++) {
        if (currencyName[i][0] === conversionRatesArr[y][0]) {
          currencyName[i].push(conversionRatesArr[y][1]);
        }
      }
    }
    // for (let i of currencyName) {
    //   console.log(i[2]);
    // }
    function addList(id) {
      for (let i of currencyName) {
        const option = document.createElement("option");
        option.innerHTML = i[1];
        option.setAttribute("name", `${i[0]}`);
        option.setAttribute("value", `${i[2]}`);
        document.getElementById(`${id}`).appendChild(option);
      }
    }
    addList(`from`);
    addList(`to`);
  } catch (e) {
    console.error(e);
  }
};
console.log(currencyName);

getData();

document.forms[0].addEventListener("submit", function (e) {
  e.preventDefault();
  const from = document.getElementById("from").value;
  const to = document.getElementById("to").value;
  const amount = document.getElementById("amount");
  console.log(
    document.getElementById("from").value,
    document.getElementById("to").value
  );
  const convert = to / from;
  const result = amount.value * convert;
  //   console.log(convert);
  //   console.log(result);

  const showResult = document.getElementById("result");
  showResult.innerHTML = rounded(result);
});
const rounded = function (number) {
  return +number.toFixed(2);
};
