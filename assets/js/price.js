const flagPEN = document.getElementById('flag-pen');
  const flagUSD = document.getElementById('flag-usd');
  const priceEls = document.querySelectorAll('.price');

  let currentCurrency = 'pen';

  function updatePrices(currency) {
  const prices = document.querySelectorAll('.price');
  prices.forEach(priceEl => {
    const amount = priceEl.dataset[currency];
    priceEl.childNodes[0].textContent = `${currency === 'usd' ? '$' : 'S/.'} ${amount} `;
  });


    if (currency === 'usd') {
      flagUSD.classList.add('ring-2', 'ring-indigo-500', 'opacity-100');
      flagPEN.classList.remove('ring-2', 'ring-indigo-500');
      flagPEN.classList.add('opacity-50');
    } else {
      flagPEN.classList.add('ring-2', 'ring-indigo-500', 'opacity-100');
      flagUSD.classList.remove('ring-2', 'ring-indigo-500');
      flagUSD.classList.add('opacity-50');
    }

    currentCurrency = currency;
    localStorage.setItem('currency', currency);
  }

  document.getElementById('currency-toggle').addEventListener('click', () => {
    const newCurrency = currentCurrency === 'pen' ? 'usd' : 'pen';
    updatePrices(newCurrency);
  });

  // Cargar preferencia del usuario si existe
  document.addEventListener('DOMContentLoaded', () => {
    const savedCurrency = localStorage.getItem('currency') || 'pen';
    updatePrices(savedCurrency);
  });