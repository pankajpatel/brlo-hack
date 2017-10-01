export const NAMES = [
  'Robiert Luque',
  'Pankaj Patel',
  'Mohamed Bouallegue',
  'Goran Vuksic',
];

export const PAYMENT_SERVER_URL = process.env.NODE_ENV === 'production'
? window.location.host
: 'http://localhost:3000';

export const STRIPE_PUBLISHABLE = process.env.NODE_ENV === 'production'
? 'pk_test_6pRNASCoBOKtIshFeQd4XMUh'
: 'pk_test_6pRNASCoBOKtIshFeQd4XMUh';

export const CURRENCY = 'EUR';

export const fromEuroToCent = amount => amount * 100;

export const onToken = (amount, description) => token =>
fetch(PAYMENT_SERVER_URL,
  {
    description,
    source: token.id,
    currency: CURRENCY,
    amount: fromEuroToCent(amount)
  })
  .then(redirect)
  .catch(redirect);


export const redirect = () => {
  window.location = '/orders';
}
  