const obj = {
  name: 'Alex'
};
const arr = [1, 2, 4, 5];


// To string
// 1
console.log(typeof (String(null)));
console.log(typeof (String(4)));
// 2
console.log(5 + "5");
console.log("5" + 5);
console.log(""+false);
console.log('https://vk.com/catalog/'+5);

// ПУСТОЙ МАССИВ ВСЕГДА ПРЕВРАЩАЕТСЯ В ПУСТУЮ СТРОКУ

// To number
// 1
console.log(Number("5"));console.log(typeof(Number("5")));
// 2
console.log(5 + (+"5"));
console.log(5 + +"5");
console.log(5 + (+null));
console.log(5 + (+undefined));
//3
console.log(parseInt("15px"));
console.log(typeof(parseInt("15px")));


// Boolean
// 1
// if(...)

//2
// Always false 
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(NaN));
console.log(Boolean(null));
console.log(Boolean(undefined));

// Always true
console.log(Boolean(" "));

//3
console.log(typeof(!!"5"));