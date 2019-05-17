//fetch('https://jsonplaceholder.typicode.com/todos')
//  .then(res => res.json())
//  .then(json => console.log(json));
//
//const data = {
//    username: "sss"
//  },
//  url = 'https://jsonplaceholder.typicode.com/posts';
//
//fetch(url, {
//    method: 'POST',
//    body: JSON.stringify(data),
//    headers: {
//      'Content-Type': 'application/json'
//    }
//  })
//  .then(res => res.json())
//  .then(json => console.log(json));

const getResource = async (url) => {
  const res = await fetch(url);
  return res.json();
};

getResource('https://jsonplaceholder.typicode.com/posts')
  .then(json => console.log(json));