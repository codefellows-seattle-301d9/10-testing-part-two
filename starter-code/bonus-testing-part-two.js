/* Welcome back to our testing exercise! This practice module
    will allow you to become even more familiar with testing
    concepts. We test to check the I/O of our apps. That is - we are not
    checking for HOW something works, but rather the end RESULT and
    state of a particular place in our application.
*/


/* As a refresher, presented again is a basic example of a test
    "framework" where our test is a function that we can reuse
    to check against different components of our application.
    The `!expression` may look odd - we test for failing
    functionality first to then refactor the test to pass.
    This is common practice in testing ('red-green' refactoring).
*/
function expect(expression, failureMessage, successMessage) {
  if (!expression) {
    console.log('test failed:', failureMessage);
    return;
  }
  console.log('test passed:', successMessage);
}

/* Below is an example of our test in action. Run this file in node
    to see what happens when it fails, and change `ricksFaveAnimal`
    to get it to pass!
*/
var ricksFaveAnimal = 'penguin';

expect(
  ricksFaveAnimal === 'penguin',
  'ricksFavoriteAnimal should equal penguin, but currently equals ' + ricksFaveAnimal,
  'ricksFavoriteAnimal equals penguin!');

  // BEGIN WORK BELOW - test code by running `node bonus-testing-part-two.js`
  //  in your terminal!

  /* ===================================================================
  ---------------------- Part Two! Hungry Lion ----------------------------
  ======================================================================
   As long as the lion is well-fed, he doesn't care too much of the
   humans that pass through. Unfortunately, the new caretaker is a little
   absent-minded.

   The lion needs 4 meals per day on average to stay happy. You're going to
   figure out how many days it took before the lion decided to supplement his
   diet with the caretaker.
  */

  // number of times the new caretaker fed the lion. one array entry per day
var mealsPerDay = [5, 4, 3, 6, 2, 4, 3, 4, 5, 1];
var tooHungryDay;

  /*
   TODO:
   Cycle through the days in mealsPerDay. At each day, print out the average
   number of meals/day the lion got since the new caretaker started.
   tooHungryDay should receive the number of days before the lion started
   pondering protein supplements (the first day the average dips below 4
   meals)
  */

function whenDoesTheLionWantProtein() {
  var totalMeals = 0;
  mealsPerDay.reduce(function(accumulator, current, index) {
    var days = index + 1;
    totalMeals += current;
    accumulator[days] = (totalMeals / days);
    console.log('Day #', days, '- Avg. number of meals:', ((totalMeals / days).toFixed(1)));
    return accumulator;
  }, {});
};

// use .reduce to combine numbers in mealsPerDay,
// and then divide that number by the number of days combined
// print out the avg. number of meals per day so far.
// print number of days,

// use .findIndex to get the index of the day when the avg meals is < 4.
// return that index -1 (number of days *before* the lion got hungry.)


expect(
  typeof(tooHungryDay) === 'number',
  'tooHungryDay should be a number but instead is a data type of ' + typeof(tooHungryDay),
  'The lion appears to be too hungry after ' + tooHungryDay + ' days...');

  // TODO:
  // Write a second test expecting that tooHungryDay falls within an acceptable answer
  // based on the number of days available in the array. Remember to:
  // pass in your expression, and write a failure and a success message.

expect(
  tooHungryDay <= 10,
  'FAILURE! That\'s too many days! The array is only 10 days long!',
  'Success! The lion is too hungry after day ' + tooHungryDay + ', which is within the array of 10 days.'
)
