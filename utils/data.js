const firstNames = [
    'Coral',
    'Makayla',
    'Reynold',
    'Imogen',
    'Kieran',
    'Jaqueline',
    'Lula',
    'Pip',
    'Ian',
    'Craig',
    'Wayland',
    'Kayleen',
    'Korrine',
    'Alan',
    'Caleb'
]


const lastNames = [
    'Bryant',
    'Mercado',
    'Rich',
    'Sims',
    'Willis',
    'Bartlett',
    'Shaffer',
    'Dickson',
    'Young',
    'Evans',
    'Colon',
    'Wise',
    'Hess',
    'Austin',
    'Meyer'
]

// get random item,  given array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// generate random full name
const getRandomName = () =>
  `${getRandomArrItem(firstNames)} ${getRandomArrItem(lastNames)}`;

  
module.exports = { getRandomName };