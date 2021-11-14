const apiKey = 'a706607c96d0ae5e12bff429c1ec09fb';
const endpoint = 'http://api.exchangeratesapi.io/v1/latest';



const fromSelect = document.querySelector('[name="from_currency"]');
const toSelect = document.querySelector('[name="to_currency"]');

const currencies = {
  USD: 'United States Dollar',
  AUD: 'Australian Dollar',
  BGN: 'Bulgarian Lev',
  BRL: 'Brazilian Real',
  CAD: 'Canadian Dollar',
  CHF: 'Swiss Franc',
  CNY: 'Chinese Yuan',
  CZK: 'Czech Republic Koruna',
  DKK: 'Danish Krone',
  GBP: 'British Pound Sterling',
  HKD: 'Hong Kong Dollar',
  HRK: 'Croatian Kuna',
  HUF: 'Hungarian Forint',
  IDR: 'Indonesian Rupiah',
  ILS: 'Israeli New Sheqel',
  INR: 'Indian Rupee',
  JPY: 'Japanese Yen',
  KRW: 'South Korean Won',
  MXN: 'Mexican Peso',
  MYR: 'Malaysian Ringgit',
  NOK: 'Norwegian Krone',
  NZD: 'New Zealand Dollar',
  PHP: 'Philippine Peso',
  PLN: 'Polish Zloty',
  RON: 'Romanian Leu',
  RUB: 'Russian Ruble',
  SEK: 'Swedish Krona',
  SGD: 'Singapore Dollar',
  THB: 'Thai Baht',
  TRY: 'Turkish Lira',
  ZAR: 'South African Rand',
  EUR: 'Euro',
};



function generateOptions(options) {
  console.log(options);
  return Object.entries(options)
  .map( ([currencyCode, 
    currencyName]) => `<option value="${currencyCode}">${currencyCode} 
      - ${currencyName}</option>`
  )
  .join('');
}

async function fetchRates(base = 'EUR') {
  const res = await fetch(`${endpoint}?access_key=${apiKey}&base=${base}`);
  const rates = await res.json();
  console.log(rates);
}

const optionsHTML = generateOptions(currencies);

// populate the options elements
fromSelect.innerHTML = optionsHTML;
toSelect.innerHTML = optionsHTML;





