const url = require("url");

const myurl = new URL("http://mywebsite.com:8000/hello.html?id=100&status=active");

//serialized URL
// console.log(myurl.href);
// console.log(myurl.toString());

//Host or root domain
// console.log(myurl.host);
// console.log(myurl.hostname); //does not get port

// //PATH NAME
// console.log(myurl.pathname);

// //serialized query
// console.log(myurl.search);

//SEARCH PARAMS
console.log(myurl.searchParams);

//add params
myurl.searchParams.append("abc", "123");
console.log(myurl.searchParams);

//loop through params
myurl.searchParams.forEach((value,name)=> console.log(`${name}: ${value}`));