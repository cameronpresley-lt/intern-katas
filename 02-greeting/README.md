# Greeting Kata

## Goals

- Gain familiarity with basic [jest]() and [test-driven-development]() patterns
- Gain experience with TypeScript and testing in the language

## Assignment

- [ ] Update `package.json` to include a new task for running all tests in the `02-greeting` folder
- [ ] Update `index.ts` to include a new function, (called `greet`), that satisfies the below requirements
- [ ] Add tests to verify that requirements are met 😄

### Requirements
#### Requirement 1

Write a method greet(name) that interpolates name in a simple greeting. For example, when name is "Bob", the method should return a string "Hello, Bob.".

#### Requirement 2

Handle nulls by introducing a stand-in. For example, when name is null, then the method should return the string "Hello, my friend."

#### Requirement 3

Handle shouting. When name is all uppercase, then the method should shout back to the user. For example, when name is "JERRY" then the method should return the string "HELLO JERRY!"

#### Requirement 4

Handle two names of input. When name is an array of two names (or, in languages that support it, varargs or a splat), then both names should be printed. For example, when name is ["Jill", "Jane"], then the method should return the string "Hello, Jill and Jane."

#### Requirement 5

Handle an arbitrary number of names as input. When name represents more than two names, separate them with commas and close with an Oxford comma and "and". For example, when name is ["Amy", "Brian", "Charlotte"], then the method should return the string "Hello, Amy, Brian, and Charlotte."

#### Requirement 6

Allow mixing of normal and shouted names by separating the response into two greetings. For example, when name is ["Amy", "BRIAN", "Charlotte"], then the method should return the string "Hello, Amy and Charlotte. AND HELLO BRIAN!"

#### Requirement 7

If any entries in name are a string containing a comma, split it as its own input. For example, when name is ["Bob", "Charlie, Dianne"], then the method should return the string "Hello, Bob, Charlie, and Dianne.".

#### Requirement 8

Allow the input to escape intentional commas introduced by Requirement 7. These can be escaped in the same manner that CSV is, with double quotes surrounding the entry. For example, when name is ["Bob", "\"Charlie, Dianne\""], then the method should return the string "Hello, Bob and Charlie, Dianne.".