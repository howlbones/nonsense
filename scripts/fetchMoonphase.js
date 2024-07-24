// (async function fetchData() {
//   const KEY = '9201fe35f724480e8e7115934231508';
//   const url = 'https://api.weatherapi.com/v1/astronomy.json?key=' + KEY + '&q=Tokyo';
//     console.log('fetching');
//   try {
//     const response = await fetch(url, { mode: 'cors' });
//     const object = await response.json();
//     console.log(object);
//     return object;
//   } catch (error) {
//     console.error(error);
//   }
// })();