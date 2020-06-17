function colorDeconstructor(color) {
  if (color === 'orange') {
    return 'Orange is made by combining red and yellow!';
  }

  if (color === 'purple') {
    return 'Purple is made by combining red and blue!';
  }

  if (color === 'green') {
    return 'Green is made by combining blue and yellow!';
  }

  return "Sorry, that's not a secondary color!";
}


module.exports = colorDeconstructor;
