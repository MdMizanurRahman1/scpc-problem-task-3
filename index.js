// Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method.

const stringReverse = (inputString) => {
    return inputString.split('').reverse().join('');
}


const input = "hello world";
const output = stringReverse(input);
console.log(output);



// Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array.

const sumOfNumbers = (numbers) => {
    let sum = 0;
    for (const number of numbers) {
        if (number > 0) {
            sum += number;
        }
    }
    return sum;
}


const inputNumbers = [2, -5, 10, -3, 7];
const result = sumOfNumbers(inputNumbers);
console.log(result);


// Task 3: Write a JavaScript program to find the most frequent element in an array and return it. 

const frequentElement = (arr) => {
    const frequencyMap = {};
    let mostFrequentElement;
    let highestFrequency = 0;

    for (const num of arr) {
        frequencyMap[num] = (frequencyMap[num] || 0) + 1;
        if (frequencyMap[num] > highestFrequency) {
            highestFrequency = frequencyMap[num];
            mostFrequentElement = num;
        }
    }

    return mostFrequentElement;
};


const inputNumbs = [3, 5, 2, 5, 3, 3, 1, 4, 5];
const result2 = frequentElement(inputNumbs);
console.log(result2);


// Task 4: Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers.

const twoNumbersSum = (sortedArr, target) => {
    let left = 0;
    let right = sortedArr.length - 1;

    while (left < right) {
        const sum = sortedArr[left] + sortedArr[right];

        if (sum === target) {
            return [left, right];
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }

    return null;
};


const sortedArray = [1, 3, 6, 8, 11, 15];
const targetValue = 9;
const result4 = twoNumbersSum(sortedArray, targetValue);
console.log(result4);


// Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.

const calculator = (num1, operator, num2) => {
    if (operator === '+') {
        return num1 + num2;
    } else if (operator === '-') {
        return num1 - num2;
    } else if (operator === '*') {
        return num1 * num2;
    } else if (operator === '/') {
        return num1 / num2;
    } else {
        return 'Invalid operator';
    }
};


const num1 = 10;
const operator = '+';
const num2 = 5;
const result5 = calculator(num1, operator, num2);
console.log(result5);


// Task 6: Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.

const createRandomPassword = (length) => {
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const specialChars = '!@#$%^&*()_-+=[]{}|;:,.<>?';

    const allChars = uppercaseChars + lowercaseChars + numberChars + specialChars;
    let password = '';

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allChars.length);
        const randomChar = allChars[randomIndex];
        password += randomChar;
    }

    return password;
};


const passwordLength = 8;
const randomPassword = createRandomPassword(passwordLength);
console.log(randomPassword);


// Task 8: Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.

const secondSmallest = (arr) => {
    if (arr.length < 2) {
        return "Array must contain min two elements.";
    }

    const sortedArr = arr.slice().sort((a, b) => a - b);
    return sortedArr[1];
};


const inputArray = [5, 2, 8, 1, 4, 3];
const result3 = secondSmallest(inputArray);
console.log(result3);
