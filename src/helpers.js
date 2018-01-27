import currencyCodes from './assets/currency-codes.json';

export function getHumanCostFromInteger(amount, currency = 'GBP') {
  if (!amount && typeof amount === 'undefined') {
    return false;
  }

  const currencySymbol = currencyCodes[currency].symbol;
  let addition = false;

  let newAmount = String(amount);

  if (!newAmount.includes('-') && newAmount !== '0') {
    addition = true;
  }

  newAmount = newAmount.replace('-', '');

  let formattedAmount = '0';

  if (newAmount.length > 2) {
    formattedAmount = `${newAmount.substr(0, newAmount.length - 2)}.${newAmount.substr(-2)}`;
  } else if (newAmount.length === 2) {
    formattedAmount = `0.${newAmount}`;
  } else {
    formattedAmount = `0.0${newAmount}`;
  }

  return `${addition ? '+' : ''}${currencySymbol}${formattedAmount}`;
}

export function timeSince(date) {
  const seconds = Math.floor((new Date() - date) / 1000);

  let interval = Math.floor(seconds / 31536000);

  if (interval >= 1) {
    return `${interval} years ago`;
  }
  interval = Math.floor(seconds / 2592000);
  if (interval >= 1) {
    return `${interval} months ago`;
  }
  interval = Math.floor(seconds / 86400);
  if (interval >= 1) {
    return `${interval} days ago`;
  }
  interval = Math.floor(seconds / 3600);
  if (interval >= 1) {
    return `${interval} hours ago`;
  }
  interval = Math.floor(seconds / 60);
  if (interval >= 1) {
    return `${interval} minutes ago`;
  }
  return 'a few seconds ago';
}
