# Week 2 Notes - Project Phoenix

## Focus: Functions, Data Analysis, and Problem Solving

---

# Day 1 - Movie Collection Analytics

## Time Spent

Approximately 1 hour

## What I Built

I created a movie analytics program that worked with an array of movie objects. Each movie contained information such as title, genre, rating, runtime, and watched status.

The program included functions to:

* Count total movies
* Count watched movies
* Calculate average rating
* Find longest movie(s)
* Find shortest movie(s)
* Filter movies by genre
* Filter movies by minimum rating
* Calculate percentage watched

I then generated a summary report using the results of those functions.

## What Went Well

* Broke the program into smaller functions instead of writing everything in one large block.
* Reused existing functions where appropriate.
* Successfully handled ties for longest and shortest movies.
* Created reusable filtering functions using parameters.

## Challenges

* Initially created a genre function that returned only a count instead of returning the matching movies.
* Realized that returning useful data is often better than returning a final answer immediately.

## Key Concepts Learned

* Functions should have a single responsibility.
* Function names should accurately describe what they return.
* Returning arrays provides flexibility for future operations.
* Reusable functions are more valuable than hardcoded solutions.

## What I Would Improve

* Continue improving naming conventions.
* Continue reducing duplicated logic.
* Think about data structures before writing output code.

---

# Day 2 - Creature Database Analysis

## Time Spent

Approximately 1 hour

## What I Built

I created a fantasy creature database containing 25 creatures with:

* Name
* Type
* Level
* Health
* Rare status

The program included functions to:

* Filter creatures by minimum level
* Filter creatures by rarity
* Calculate average level
* Find highest health creature(s)
* Find lowest health creature(s)
* Filter creatures by type
* Calculate rare percentage
* Calculate total health

A summary report displayed overall statistics about the creature database.

## What Went Well

* Used filter(), map(), reduce(), Math.max(), and Math.min().
* Functions were focused on one responsibility.
* Successfully reused functions inside other functions.
* Continued returning data rather than printing directly inside functions.

## Challenges

* My rare percentage function originally returned NaN because I accidentally attempted math on an array.
* Had to recognize that filter() returns an array, not a count.
* Learned to use .length when calculating percentages based on filtered results.

## Key Concepts Learned

* Arrays returned from filter() often need additional processing.
* Functions should return raw data whenever possible.
* Data-processing functions become more powerful when combined together.
* Small reusable functions make report generation easier.

## What I Would Improve

* Use helper functions more consistently.
* Reduce duplicated patterns between highest and lowest value searches.
* Continue thinking about how functions can build on each other.

---

# Week 2 Progress So Far

## Biggest Improvement

I am starting to think about data flow and reusable functions instead of focusing only on output.

## Concepts Becoming More Comfortable

* Arrays of objects
* Function design
* Filtering data
* Aggregation calculations
* Returning values
* Function reuse

## Concepts Still Needing Practice

* Edge cases
* Validation
* Avoiding duplicated logic
* Identifying opportunities for helper functions
