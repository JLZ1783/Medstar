// MEDSTAR CHALLENGE 
// EXERCISE 1: 

const axios = require('axios');

const http = require('http');   
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    //pass how I feel trying to write javascript...ret...
     res.end(ret);
});
  
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});


//get the bitcoin price in USD
var rightNow = new Date();
var year = rightNow.getUTCFullYear();
var month = rightNow.getUTCMonth() + 1;
var day = rightNow.getUTCDate();
var hour = rightNow.getUTCHours();
var minute = rightNow.getUTCMinutes();
var second = rightNow.getUTCSeconds();
var millisecond = rightNow.getUTCMilliseconds();

var date = year + "-" + month + "-" + day;
var time = hour + ":" + minute + ":" + second + "." + millisecond;
var utcFormat = date + 'T' + time + 'Z'

//pull from url
function getBitCoin() {
    
    const promise = axios.get('https://blockchain.info/ticker')
    const dataPromise = promise.then((response) => 
 '1 BTC = $' + response.data.USD.buy + response.data.USD.symbol + ' ' + 'at ' + utcFormat);

 return dataPromise;

}

//parse out into a string and return for server to use
getBitCoin().then((data) => {
    console.log(data);
    ret = data;
});







