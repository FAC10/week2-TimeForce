# **week2-TimeForce - Stopwatch**

## **What**
We are Time Force and we're building a stopwatch using JavaScript and testing it via the TDD approach.

## **Why**


<kbd>User Story 1</kbd>

As a developer wanting to accurately predict how long a coding task takes to complete, I want to time how long I have been working on a task, so that in the future I know how much time to estimate.


<kbd>Specs and issues</kbd>

- [ ] Developer presses **START** button, in order to start the timer

- [ ] Developer presses **STOP** button, in order to stop the timer

- [ ] Developer presses **RESET** button, in order to reset the timer and reset the displayed time to 00:00:00:00

- [ ] Developer can see the timer's current time in hours, seconds, minutes and milliseconds


## **Stretch Goals**

- [ ] Add anotehr user story (chef who needs multiple countdown timer)
- [ ] Create laps
- [ ] Adding sound effects
- [ ] Animate buttons
- [ ] Try to redo the stopwatch using getTime();


## **Interesting things we've learnt**

We found it quite hard to write tests before knowing exactly how our functions would look like.

If you are accessing an element in the DOM, QUnit will return an error as this element isn't available in the QUnit.html file,
we therefore had to add the neccessary elements from our index.html to the QUnit.html. Lots of time wasted, but it made us stronger.

In our tests we had a reset() function because some of our functions changed global variables. We should have used test hooks that run before and after each test to do this clean up for us. That would have prevented us from having to call reset() manually after each test.

 <kbd>External links with useful resouces:</kbd>

* How to instruct QUnit to wait for an asynchronous operation:
https://api.qunitjs.com/async/
* Window setInterval() Method: https://www.w3schools.com/jsref/met_win_setinterval.asp
* **++** vs **+=1**: http://stackoverflow.com/questions/4397917/javascript-vs-1
* Make use of hooks. A sample for using the before, beforeEach, afterEach, and after callbacks:

```
QUnit.module( "module A", {
  before: function() {
    // prepare something once for all tests
  }
  beforeEach: function() {
    // prepare something before each test
  },
  afterEach: function() {
    // clean up after each test
  },
  after: function() {
    // clean up once after all tests are done
  }
});

```
