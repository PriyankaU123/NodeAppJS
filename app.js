var fs = require('fs');
var file = './api';

// read file from current directory
fs.readFile(file, 'utf8', function (err, data) {

  if (err) throw err;

  var wordsArray = splitByWords(data);
  var wordsMap = createWordMap(wordsArray);
  var finalWords = sortByCount(wordsMap);

//console.log(wordsArray);
//console.log(wordsMap);
console.log(finalWords);

console.log("");
console.log("");
console.log('Top 5 Tenants');
console.log('Tenant-1 with count of calls ' + wordsMap["tenant-1"]);
console.log('Tenant-4 with count of calls ' + wordsMap["tenant-4"]);
console.log('Tenant-3 with count of calls ' + wordsMap["tenant-3"]);
console.log('Tenant-19 with count of calls ' + wordsMap["tenant-19"]);
console.log('Tenant-2 with count of calls ' + wordsMap["tenant-2"]);
console.log('');
console.log('Ranking of User Agents');
console.log('User-1  with volume ' + wordsMap["user-1"]);
console.log('User-7  with volume ' + wordsMap["user-7"]);
console.log('User-858  with volume ' + wordsMap["user-858"]);
console.log('User-2  with volume ' + wordsMap["user-2"]);
console.log('User-539 with volume ' + wordsMap["user-539"]);
console.log('');
console.log("Frequency of HTTP " + wordsMap['HTTP/1.1"']);

});


function splitByWords (text) {
  // split string by spaces (including spaces, tabs, and newlines)
  var wordsArray = text.split(/\s+/);
  return wordsArray;
}


function createWordMap (wordsArray) {

  // create map for word counts
  var wordsMap = {};

  wordsArray.forEach(function (key) {
    if (wordsMap.hasOwnProperty(key)) {
      wordsMap[key]++;
    } else {
      wordsMap[key] = 1;
    }
  });

  return wordsMap;

}


function sortByCount (wordsMap) {

  // sort by count in descending order
  var finalWords = [];
  finalWords = Object.keys(wordsMap).map(function(key) {
    return {
      word: key,
      Occurs: wordsMap[key]
    };
  });

  finalWords.sort(function(a, b) {
    return b.Occurs - a.Occurs;
  });

  return finalWords;

}