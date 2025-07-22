const questions = [
  {
    question: "What is the correct syntax to declare a variable in JavaScript?",
    answers: [
      {
        answer: "var x = 10;",
        correct: true,
      },
      {
        answer: "int x = 10;",
        correct: false,
      },
      {
        answer: "let x == 10;",
        correct: false,
      },
      {
        answer: "x := 10;",
        correct: false,
      },
    ],
    difficulty: "easy",
  },
  {
    question: "Which company developed JavaScript?",
    answers: [
      {
        answer: "Netscape",
        correct: true,
      },
      {
        answer: "Microsoft",
        correct: false,
      },
      {
        answer: "Sun Microsystems",
        correct: false,
      },
      {
        answer: "Oracle",
        correct: false,
      },
    ],
    difficulty: "easy",
  },
  {
    question: "What does `===` mean in JavaScript?",
    answers: [
      {
        answer: "Equality with type coercion",
        correct: false,
      },
      {
        answer: "Strict equality (value and type)",
        correct: true,
      },
      {
        answer: "Assignment",
        correct: false,
      },
      {
        answer: "None of the above",
        correct: false,
      },
    ],
    difficulty: "medium",
  },
  {
    question: "Which of the following is a JavaScript data type?",
    answers: [
      {
        answer: "String",
        correct: true,
      },
      {
        answer: "Character",
        correct: false,
      },
      {
        answer: "Float",
        correct: false,
      },
      {
        answer: "Decimal",
        correct: false,
      },
    ],
    difficulty: "easy",
  },
  {
    question: "What will `typeof NaN` return?",
    answers: [
      {
        answer: "'number'",
        correct: true,
      },
      {
        answer: "'NaN'",
        correct: false,
      },
      {
        answer: "'undefined'",
        correct: false,
      },
      {
        answer: "'object'",
        correct: false,
      },
    ],
    difficulty: "medium",
  },
  {
    question: "How can you create a function in JavaScript?",
    answers: [
      {
        answer: "function myFunction() {}",
        correct: true,
      },
      {
        answer: "def myFunction() {}",
        correct: false,
      },
      {
        answer: "function:myFunction() {}",
        correct: false,
      },
      {
        answer: "create myFunction() {}",
        correct: false,
      },
    ],
    difficulty: "easy",
  },
  {
    question:
      "Which method is used to add one or more elements to the end of an array?",
    answers: [
      {
        answer: "push()",
        correct: true,
      },
      {
        answer: "append()",
        correct: false,
      },
      {
        answer: "add()",
        correct: false,
      },
      {
        answer: "insert()",
        correct: false,
      },
    ],
    difficulty: "medium",
  },
  {
    question: "What will `[] + []` return in JavaScript?",
    answers: [
      {
        answer: "'' (an empty string)",
        correct: true,
      },
      {
        answer: "[]",
        correct: false,
      },
      {
        answer: "undefined",
        correct: false,
      },
      {
        answer: "null",
        correct: false,
      },
    ],
    difficulty: "hard",
  },
  {
    question: "What is a closure in JavaScript?",
    answers: [
      {
        answer: "A function having access to the parent scope",
        correct: true,
      },
      {
        answer: "A function that closes the window",
        correct: false,
      },
      {
        answer: "A hidden block of code",
        correct: false,
      },
      {
        answer: "An immediately invoked function",
        correct: false,
      },
    ],
    difficulty: "hard",
  },
  {
    question: "Which of the following is true about JavaScript hoisting?",
    answers: [
      {
        answer:
          "Variable and function declarations are moved to the top of their scope",
        correct: true,
      },
      {
        answer: "Only function declarations are hoisted",
        correct: false,
      },
      {
        answer: "Variables are hoisted with their values",
        correct: false,
      },
      {
        answer: "Hoisting does not exist in JavaScript",
        correct: false,
      },
    ],
    difficulty: "hard",
  },
];

export default questions;
