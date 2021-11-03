# Kta String Project

Kata from [this page](https://codingdojo.org/kata/StringCalculator/)

## Install dependencies

After forking this repository and cloning from your personal repository, in order to be able to work with it, dependencies need to be installed. Go to the root folder and type the next command in your terminal:

`npm install`

Now, you can open the project and start coding.

## Run test

In order to run the test and keep them running while changes are applied, type the next command in your console:

`npm run test:watch`

## KATA STRING CALCULATOR

### First step

Create a function add that takes a String and returns a String:

````C#
String add(String number)
````

- ✅ The method can take **numbers separated by comma**, and returns their sum.
- ✅ An empty string will return “0”.
- ⬜ Example of inputs: "", "1", "1.1,2.2".

### Newline as separator

Allow the _add_ method to handle newlines as separators

- ⬜ "1\n2,3" should return "6".
- ⬜ "175.2,\n35" **is invalid** and should return the message _"Number expected but '\n' found at position 6."_
