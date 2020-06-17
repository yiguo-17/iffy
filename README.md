# Iffy

### Introduction

This is the full app version of [color-cleaver-backend](https://github.com/ci-wdi-900/color-cleaver-backend), with front end and everything. The logic's there, we just need an interface!


### Workflow

The entire back end has been completed for you. You'll be working entirely in `main.js`.


### Steps

1.  The first thing we need to do is `require` our functions in from `color-combinator.js` and `color-deconstructor.js`. If you've forgotten the syntax, check your previous assignments. (Or your friendly local search engine.)
2. Then we'll need to grab our users' input. There might be as many as two,  so grab two `getInput` return values and put them in variables.
3. Now let's check if that FIRST input is `undefined`--this means that they didn't give you any colors at all! Send them a message telling them that they need to enter a color.
4. If there was a color inputted by the user, there might NOT be two. This presumably means they just want to deconstruct a secondary color (like `orange`) into its primary colors. So the next thing we need to do is check if they didn't give you a SECOND input. If they didn't, we want to assign the return value from `colorDeconstructor` to a variable and print it out for the user.
5. If there WERE two colors, then we want to assign the return value from `colorCombinator` to a variable and print that instead.

And that's it! That's our whole front end!
