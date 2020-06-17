const colorCombinator = require('./color-combinator.js')
const colorDeconstructor = require('./color-deconstructor.js')

describe('colorCombinator', () => {
  it(`returns the combination of the two given colors`, () => {
    expect(colorCombinator('red', 'yellow')).toBe('When you combine red and yellow, you get orange!')
    expect(colorCombinator('red', 'blue')).toBe('When you combine red and blue, you get purple!')
    expect(colorCombinator('yellow', 'blue')).toBe('When you combine yellow and blue, you get green!')
  })

  it(`returns a message if not given a primary color for the first parameter`, () => {
    expect(colorCombinator('orange', 'yellow')).toBe('Sorry, one of those colors is not a primary color!');
    expect(colorCombinator('blorgon', 'red')).toBe('Sorry, one of those colors is not a primary color!');
    expect(colorCombinator('ted', 'red')).toBe('Sorry, one of those colors is not a primary color!');
    expect(colorCombinator('blorgon', 'blue')).toBe('Sorry, one of those colors is not a primary color!');
  })

  it(`returns a message if not given a primary color for the second parameter`, () => {
    expect(colorCombinator('yellow', 'purple')).toBe('Sorry, one of those colors is not a primary color!');
    expect(colorCombinator('blue', 'white')).toBe('Sorry, one of those colors is not a primary color!');
    expect(colorCombinator('Ted', 'from Better Off Ted')).toBe('Sorry, one of those colors is not a primary color!');
    expect(colorCombinator('black', 'black')).toBe('Sorry, one of those colors is not a primary color!');
  })
})

describe('colorDeconstructor', () => {
  it(`returns the two colors a color comes from`, () => {
    expect(colorDeconstructor('orange')).toBe('Orange is made by combining red and yellow!')
    expect(colorDeconstructor('purple')).toBe('Purple is made by combining red and blue!')
    expect(colorDeconstructor('green')).toBe('Green is made by combining blue and yellow!')
  })

  it(`returns a message if not given a secondary color`, () => {
    expect(colorDeconstructor('yellow')).toBe("Sorry, that's not a secondary color!");
    expect(colorDeconstructor('blorgon')).toBe("Sorry, that's not a secondary color!");
    expect(colorDeconstructor('ted')).toBe("Sorry, that's not a secondary color!");
    expect(colorDeconstructor('black')).toBe("Sorry, that's not a secondary color!");
  })
})
