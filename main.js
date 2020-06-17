// Your code here!
const colorCombinator = require('./color-combinator.js')
const colorDeconstructor = require('./color-deconstructor.js')
const cl1 = getInput(0);
const cl2 = getInput(1);
if (cl1=== 'undefined'){console.log('At least input one color.');}
if( cl2=== 'undefined'){
  colorDeconstructor(cl1);
}
if(cl2 !== 'undefined'){
  colorCombinator(cl1,cl2);
}
// Our helper function here! Don't  touch!
function getInput(i) {
  return process.argv[i + 2];
}
