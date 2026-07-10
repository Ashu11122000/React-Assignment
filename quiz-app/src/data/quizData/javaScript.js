const javaScriptQuestions = [
  {
    id: 1,
    category: "JavaScript",
    difficulty: "Easy",
    question: "Which keyword is used to declare a block-scoped variable in JavaScript?",
    options: ["var", "let", "const", "static"],
    correctAnswer: "let",
    explanation:
      "'let' creates a block-scoped variable. Unlike 'var', it is only accessible within the block in which it is declared.",
    tags: ["variables", "let", "scope"],
  },
  {
    id: 2,
    category: "JavaScript",
    difficulty: "Easy",
    question: "Which company originally developed JavaScript?",
    options: ["Microsoft", "Sun Microsystems", "Netscape", "Oracle"],
    correctAnswer: "Netscape",
    explanation:
      "JavaScript was created by Brendan Eich at Netscape in 1995 in just 10 days.",
    tags: ["history", "basics"],
  },
  {
    id: 3,
    category: "JavaScript",
    difficulty: "Easy",
    question: "What is the correct way to write a single-line comment in JavaScript?",
    options: ["<!-- Comment -->", "/* Comment */", "// Comment", "# Comment"],
    correctAnswer: "// Comment",
    explanation:
      "Single-line comments begin with '//'. Multi-line comments use '/* ... */'.",
    tags: ["comments", "syntax"],
  },
  {
    id: 4,
    category: "JavaScript",
    difficulty: "Easy",
    question: "Which data type is NOT primitive in JavaScript?",
    options: ["String", "Boolean", "Object", "Number"],
    correctAnswer: "Object",
    explanation:
      "Objects are reference types, while String, Number, Boolean, Null, Undefined, Symbol, and BigInt are primitive types.",
    tags: ["data-types", "object"],
  },
  {
    id: 5,
    category: "JavaScript",
    difficulty: "Easy",
    question: "Which method converts a JSON string into a JavaScript object?",
    options: [
      "JSON.parse()",
      "JSON.stringify()",
      "JSON.convert()",
      "JSON.object()",
    ],
    correctAnswer: "JSON.parse()",
    explanation:
      "JSON.parse() converts a JSON-formatted string into a JavaScript object.",
    tags: ["json", "objects"],
  },
  {
    id: 6,
    category: "JavaScript",
    difficulty: "Easy",
    question: "What will typeof null return?",
    options: ["null", "object", "undefined", "boolean"],
    correctAnswer: "object",
    explanation:
      "Due to a historical bug in JavaScript, typeof null returns 'object'.",
    tags: ["typeof", "null"],
  },
  {
    id: 7,
    category: "JavaScript",
    difficulty: "Easy",
    question: "Which operator checks both value and data type?",
    options: ["==", "=", "===", "!="],
    correctAnswer: "===",
    explanation:
      "The strict equality operator (===) compares both value and data type without type coercion.",
    tags: ["operators", "comparison"],
  },
  {
    id: 8,
    category: "JavaScript",
    difficulty: "Easy",
    question: "Which built-in method removes the last element from an array?",
    options: ["shift()", "pop()", "push()", "splice()"],
    correctAnswer: "pop()",
    explanation:
      "pop() removes and returns the last element of an array.",
    tags: ["arrays", "methods"],
  },
  {
    id: 9,
    category: "JavaScript",
    difficulty: "Easy",
    question: "Which function is used to display output in the browser console?",
    options: [
      "console.print()",
      "console.log()",
      "print()",
      "document.log()",
    ],
    correctAnswer: "console.log()",
    explanation:
      "console.log() is the standard method used for debugging and displaying messages in the browser console.",
    tags: ["console", "debugging"],
  },
  {
    id: 10,
    category: "JavaScript",
    difficulty: "Medium",
    question: "Which array method creates a new array containing elements that satisfy a condition?",
    options: ["map()", "reduce()", "filter()", "find()"],
    correctAnswer: "filter()",
    explanation:
      "filter() returns a new array containing only the elements that pass the provided test function.",
    tags: ["arrays", "filter", "higher-order-functions"],
  },
    {
    id: 11,
    category: "JavaScript",
    difficulty: "Medium",
    question: "What is the primary purpose of the map() method in JavaScript?",
    options: [
      "Modify the original array",
      "Create a new transformed array",
      "Remove duplicate elements",
      "Sort the array"
    ],
    correctAnswer: "Create a new transformed array",
    explanation:
      "The map() method creates and returns a new array by applying a callback function to each element of the original array without modifying it.",
    tags: ["arrays", "map", "higher-order-functions"]
  },

  {
    id: 12,
    category: "JavaScript",
    difficulty: "Medium",
    question: "Which keyword is used to stop the execution of a loop immediately?",
    options: [
      "continue",
      "exit",
      "return",
      "break"
    ],
    correctAnswer: "break",
    explanation:
      "The break statement immediately terminates the current loop or switch statement.",
    tags: ["loops", "break", "control-flow"]
  },

  {
    id: 13,
    category: "JavaScript",
    difficulty: "Medium",
    question: "What will the following expression return?\nBoolean('')",
    options: [
      "true",
      "false",
      "undefined",
      "null"
    ],
    correctAnswer: "false",
    explanation:
      "An empty string is a falsy value in JavaScript, so Boolean('') returns false.",
    tags: ["boolean", "truthy-falsy"]
  },

  {
    id: 14,
    category: "JavaScript",
    difficulty: "Medium",
    question: "Which array method returns the first element that satisfies a given condition?",
    options: [
      "filter()",
      "find()",
      "includes()",
      "every()"
    ],
    correctAnswer: "find()",
    explanation:
      "find() returns the first element that matches the provided condition. If none match, it returns undefined.",
    tags: ["arrays", "find"]
  },

  {
    id: 15,
    category: "JavaScript",
    difficulty: "Medium",
    question: "Which keyword prevents a variable from being reassigned after initialization?",
    options: [
      "let",
      "var",
      "const",
      "static"
    ],
    correctAnswer: "const",
    explanation:
      "Variables declared with const cannot be reassigned, although objects and arrays declared with const can still have their contents modified.",
    tags: ["const", "variables"]
  },

  {
    id: 16,
    category: "JavaScript",
    difficulty: "Medium",
    question: "Which method joins all elements of an array into a single string?",
    options: [
      "concat()",
      "merge()",
      "join()",
      "combine()"
    ],
    correctAnswer: "join()",
    explanation:
      "join() combines all array elements into a string using the specified separator.",
    tags: ["arrays", "join"]
  },

  {
    id: 17,
    category: "JavaScript",
    difficulty: "Medium",
    question: "What is the output of:\nNumber('25') + 5",
    options: [
      "'255'",
      "30",
      "NaN",
      "undefined"
    ],
    correctAnswer: "30",
    explanation:
      "Number('25') converts the string into the number 25, so the result is 30.",
    tags: ["type-conversion", "number"]
  },

  {
    id: 18,
    category: "JavaScript",
    difficulty: "Medium",
    question: "Which loop is specifically designed to iterate over iterable objects like arrays and strings?",
    options: [
      "for...in",
      "while",
      "for...of",
      "do...while"
    ],
    correctAnswer: "for...of",
    explanation:
      "The for...of loop iterates directly over iterable values such as arrays, strings, Maps, and Sets.",
    tags: ["loops", "for-of", "iterables"]
  },

  {
    id: 19,
    category: "JavaScript",
    difficulty: "Medium",
    question: "Which method removes the first element from an array?",
    options: [
      "pop()",
      "shift()",
      "unshift()",
      "slice()"
    ],
    correctAnswer: "shift()",
    explanation:
      "shift() removes and returns the first element of an array, shifting all remaining elements one position to the left.",
    tags: ["arrays", "shift"]
  },

  {
    id: 20,
    category: "JavaScript",
    difficulty: "Medium",
    question: "What will the following code output?\n\nconst arr = [1, 2, 3];\nconsole.log(arr.length);",
    options: [
      "2",
      "3",
      "4",
      "undefined"
    ],
    correctAnswer: "3",
    explanation:
      "The length property returns the total number of elements in the array, which is 3.",
    tags: ["arrays", "length", "properties"]
  },
    {
    id: 21,
    category: "JavaScript",
    difficulty: "Medium",
    question: "Which symbol is used for the spread operator in JavaScript?",
    options: ["...", "**", "=>", "??"],
    correctAnswer: "...",
    explanation:
      "The spread operator (...) expands elements of an iterable such as arrays or objects into individual elements.",
    tags: ["spread", "es6", "arrays"]
  },

  {
    id: 22,
    category: "JavaScript",
    difficulty: "Medium",
    question: "What is the purpose of the rest operator (...) in function parameters?",
    options: [
      "Copies an object",
      "Combines multiple arguments into an array",
      "Stops function execution",
      "Creates a new object"
    ],
    correctAnswer: "Combines multiple arguments into an array",
    explanation:
      "The rest operator collects multiple function arguments into a single array.",
    tags: ["rest", "functions", "es6"]
  },

  {
    id: 23,
    category: "JavaScript",
    difficulty: "Medium",
    question: "Which syntax correctly defines an arrow function?",
    options: [
      "function => {}",
      "() => {}",
      "=> function() {}",
      "function() => {}"
    ],
    correctAnswer: "() => {}",
    explanation:
      "Arrow functions use the syntax () => {} and provide a shorter way to write functions.",
    tags: ["arrow-function", "functions", "es6"]
  },

  {
    id: 24,
    category: "JavaScript",
    difficulty: "Medium",
    question: "What will the following code return?\n\nconst add = (a = 5, b = 10) => a + b;\nadd();",
    options: ["5", "10", "15", "undefined"],
    correctAnswer: "15",
    explanation:
      "Both parameters use their default values, so 5 + 10 = 15.",
    tags: ["default-parameters", "arrow-function"]
  },

  {
    id: 25,
    category: "JavaScript",
    difficulty: "Medium",
    question: "Which syntax is used for object destructuring?",
    options: [
      "const [name] = person;",
      "const { name } = person;",
      "const (name) = person;",
      "const <name> = person;"
    ],
    correctAnswer: "const { name } = person;",
    explanation:
      "Object destructuring extracts properties from an object using curly braces.",
    tags: ["destructuring", "objects", "es6"]
  },

  {
    id: 26,
    category: "JavaScript",
    difficulty: "Medium",
    question: "Which syntax is used for array destructuring?",
    options: [
      "const { first } = arr;",
      "const [first] = arr;",
      "const (first) = arr;",
      "const <first> = arr;"
    ],
    correctAnswer: "const [first] = arr;",
    explanation:
      "Array destructuring uses square brackets to extract values by position.",
    tags: ["arrays", "destructuring"]
  },

  {
    id: 27,
    category: "JavaScript",
    difficulty: "Medium",
    question: "Which operator returns the right-hand value only when the left-hand value is null or undefined?",
    options: [
      "||",
      "&&",
      "??",
      "=="
    ],
    correctAnswer: "??",
    explanation:
      "The nullish coalescing operator (??) only falls back when the left operand is null or undefined.",
    tags: ["nullish-coalescing", "operators", "es2020"]
  },

  {
    id: 28,
    category: "JavaScript",
    difficulty: "Medium",
    question: "Which operator safely accesses nested object properties without throwing an error if a property doesn't exist?",
    options: [
      "??",
      "?.",
      "::",
      "**"
    ],
    correctAnswer: "?.",
    explanation:
      "Optional chaining (?.) safely returns undefined instead of throwing an error when accessing missing properties.",
    tags: ["optional-chaining", "objects", "es2020"]
  },

  {
    id: 29,
    category: "JavaScript",
    difficulty: "Medium",
    question: "Which method executes a callback function for every array element but does NOT return a new array?",
    options: [
      "map()",
      "filter()",
      "forEach()",
      "reduce()"
    ],
    correctAnswer: "forEach()",
    explanation:
      "forEach() is used for iteration and side effects. Unlike map(), it returns undefined.",
    tags: ["arrays", "foreach", "higher-order-functions"]
  },

  {
    id: 30,
    category: "JavaScript",
    difficulty: "Medium",
    question: "What is the output of the following code?\n\nconst name = 'Ashish';\nconsole.log(`Hello ${name}`);",
    options: [
      "Hello ${name}",
      "Hello Ashish",
      "undefined",
      "Syntax Error"
    ],
    correctAnswer: "Hello Ashish",
    explanation:
      "Template literals use backticks (`) and ${} placeholders to embed expressions inside strings.",
    tags: ["template-literals", "strings", "es6"]
  },
    {
    id: 31,
    category: "JavaScript",
    difficulty: "Hard",
    question: "What is hoisting in JavaScript?",
    options: [
      "Moving variables and function declarations to the top of their scope during compilation",
      "Automatically sorting variables alphabetically",
      "Executing functions before variables",
      "Moving code to another file"
    ],
    correctAnswer: "Moving variables and function declarations to the top of their scope during compilation",
    explanation:
      "Hoisting is JavaScript's behavior of processing declarations before execution. Function declarations are fully hoisted, while variables declared with 'var' are hoisted and initialized as undefined. 'let' and 'const' are hoisted but remain in the Temporal Dead Zone until initialized.",
    tags: ["hoisting", "execution-context", "variables"]
  },

  {
    id: 32,
    category: "JavaScript",
    difficulty: "Hard",
    question: "Which keyword is affected by the Temporal Dead Zone (TDZ)?",
    options: [
      "var",
      "let and const",
      "function",
      "this"
    ],
    correctAnswer: "let and const",
    explanation:
      "Variables declared with let and const exist in the Temporal Dead Zone from the start of their scope until they are initialized.",
    tags: ["tdz", "let", "const"]
  },

  {
    id: 33,
    category: "JavaScript",
    difficulty: "Hard",
    question: "What is a closure in JavaScript?",
    options: [
      "A method for closing browser tabs",
      "A function that remembers variables from its lexical scope even after the outer function has finished executing",
      "A function inside another function only",
      "A private class"
    ],
    correctAnswer: "A function that remembers variables from its lexical scope even after the outer function has finished executing",
    explanation:
      "Closures allow inner functions to retain access to variables from their outer scope even after the outer function has returned.",
    tags: ["closure", "scope", "functions"]
  },

  {
    id: 34,
    category: "JavaScript",
    difficulty: "Hard",
    question: "Which scope determines where variables are accessible in JavaScript?",
    options: [
      "Dynamic Scope",
      "Lexical Scope",
      "Global Scope Only",
      "Function Prototype"
    ],
    correctAnswer: "Lexical Scope",
    explanation:
      "JavaScript uses lexical scope, meaning variable accessibility is determined by where functions and variables are written in the source code.",
    tags: ["scope", "lexical-scope"]
  },

  {
    id: 35,
    category: "JavaScript",
    difficulty: "Hard",
    question: "What is the output?\n\nconsole.log(typeof (() => {}));",
    options: [
      "object",
      "function",
      "arrow",
      "undefined"
    ],
    correctAnswer: "function",
    explanation:
      "Arrow functions are still functions. Therefore typeof returns 'function'.",
    tags: ["arrow-functions", "typeof"]
  },

  {
    id: 36,
    category: "JavaScript",
    difficulty: "Hard",
    question: "Which method explicitly changes the value of 'this' and immediately invokes the function?",
    options: [
      "bind()",
      "call()",
      "apply()",
      "invoke()"
    ],
    correctAnswer: "call()",
    explanation:
      "call() immediately invokes the function while allowing you to specify the value of 'this' and pass arguments individually.",
    tags: ["call", "this", "functions"]
  },

  {
    id: 37,
    category: "JavaScript",
    difficulty: "Hard",
    question: "What is the difference between call() and apply()?",
    options: [
      "There is no difference",
      "call() accepts arguments individually while apply() accepts an array",
      "apply() is faster",
      "call() only works with objects"
    ],
    correctAnswer: "call() accepts arguments individually while apply() accepts an array",
    explanation:
      "Both immediately invoke the function, but call() takes arguments separately while apply() expects an array (or array-like object).",
    tags: ["call", "apply", "this"]
  },

  {
    id: 38,
    category: "JavaScript",
    difficulty: "Hard",
    question: "What does bind() return?",
    options: [
      "The function result",
      "A Promise",
      "A new function",
      "Undefined"
    ],
    correctAnswer: "A new function",
    explanation:
      "bind() does not execute the function immediately. Instead, it returns a new function with the specified 'this' value and optional preset arguments.",
    tags: ["bind", "functions", "this"]
  },

  {
    id: 39,
    category: "JavaScript",
    difficulty: "Hard",
    question: "Which statement about prototypes is TRUE?",
    options: [
      "Every JavaScript object has an internal prototype",
      "Only arrays have prototypes",
      "Only classes have prototypes",
      "Prototypes exist only in ES6"
    ],
    correctAnswer: "Every JavaScript object has an internal prototype",
    explanation:
      "Almost every object in JavaScript has an internal [[Prototype]] used for inheritance and property lookup through the prototype chain.",
    tags: ["prototype", "inheritance"]
  },

  {
    id: 40,
    category: "JavaScript",
    difficulty: "Hard",
    question: "What is the prototype chain?",
    options: [
      "A linked list of variables",
      "A mechanism used by JavaScript to inherit properties and methods",
      "A method of creating arrays",
      "A chain of promises"
    ],
    correctAnswer: "A mechanism used by JavaScript to inherit properties and methods",
    explanation:
      "When a property isn't found on an object, JavaScript searches its prototype, then that prototype's prototype, continuing until Object.prototype or null is reached.",
    tags: ["prototype-chain", "inheritance", "objects"]
  },
    {
    id: 41,
    category: "JavaScript",
    difficulty: "Hard",
    question: "What is the primary purpose of the JavaScript Event Loop?",
    options: [
      "To execute synchronous code only",
      "To handle asynchronous operations by coordinating the Call Stack and Callback Queue",
      "To create loops automatically",
      "To manage browser tabs"
    ],
    correctAnswer: "To handle asynchronous operations by coordinating the Call Stack and Callback Queue",
    explanation:
      "The Event Loop continuously checks whether the Call Stack is empty. If it is, it moves pending callbacks from the appropriate queue to the Call Stack for execution.",
    tags: ["event-loop", "asynchronous", "call-stack"]
  },

  {
    id: 42,
    category: "JavaScript",
    difficulty: "Hard",
    question: "Which queue has higher priority in the JavaScript Event Loop?",
    options: [
      "Macrotask Queue",
      "Microtask Queue",
      "Animation Queue",
      "Timer Queue"
    ],
    correctAnswer: "Microtask Queue",
    explanation:
      "Microtasks (such as Promise callbacks and queueMicrotask()) are executed before any pending macrotasks like setTimeout().",
    tags: ["event-loop", "microtask", "promise"]
  },

  {
    id: 43,
    category: "JavaScript",
    difficulty: "Hard",
    question: "Which of the following creates a Promise?",
    options: [
      "new Promise()",
      "new Async()",
      "Promise.create()",
      "async Promise()"
    ],
    correctAnswer: "new Promise()",
    explanation:
      "Promises are created using the Promise constructor: new Promise((resolve, reject) => { ... }).",
    tags: ["promise", "async"]
  },

  {
    id: 44,
    category: "JavaScript",
    difficulty: "Hard",
    question: "What is the purpose of the async keyword?",
    options: [
      "Makes a function return a Promise",
      "Runs code faster",
      "Stops asynchronous execution",
      "Creates a callback"
    ],
    correctAnswer: "Makes a function return a Promise",
    explanation:
      "Functions declared with async always return a Promise, even if they explicitly return a normal value.",
    tags: ["async", "promise", "es2017"]
  },

  {
    id: 45,
    category: "JavaScript",
    difficulty: "Hard",
    question: "What does the await keyword do?",
    options: [
      "Pauses execution inside an async function until a Promise settles",
      "Stops the browser",
      "Creates a Promise",
      "Blocks the JavaScript engine"
    ],
    correctAnswer: "Pauses execution inside an async function until a Promise settles",
    explanation:
      "await can only be used inside async functions (or top-level modules) and pauses that function until the awaited Promise resolves or rejects.",
    tags: ["await", "async", "promise"]
  },

  {
    id: 46,
    category: "JavaScript",
    difficulty: "Hard",
    question: "What is debouncing primarily used for?",
    options: [
      "Executing a function repeatedly at fixed intervals",
      "Delaying function execution until user activity stops",
      "Creating asynchronous loops",
      "Reducing memory usage"
    ],
    correctAnswer: "Delaying function execution until user activity stops",
    explanation:
      "Debouncing is commonly used for search inputs, window resize events, and autocomplete to avoid unnecessary function calls while the user is still interacting.",
    tags: ["debouncing", "performance", "optimization"]
  },

  {
    id: 47,
    category: "JavaScript",
    difficulty: "Hard",
    question: "What is throttling?",
    options: [
      "Executing a function only once",
      "Limiting how often a function can execute during a given time interval",
      "Stopping all events",
      "Reducing array size"
    ],
    correctAnswer: "Limiting how often a function can execute during a given time interval",
    explanation:
      "Throttling ensures a function executes at most once within a specified time interval, making it useful for scroll and resize events.",
    tags: ["throttling", "performance", "optimization"]
  },

  {
    id: 48,
    category: "JavaScript",
    difficulty: "Hard",
    question: "Which statement is used to export a value from an ES Module?",
    options: [
      "export",
      "exports",
      "module.export",
      "share"
    ],
    correctAnswer: "export",
    explanation:
      "ES Modules use the export keyword to expose variables, functions, classes, or constants to other modules.",
    tags: ["modules", "export", "es6"]
  },

  {
    id: 49,
    category: "JavaScript",
    difficulty: "Hard",
    question: "Which statement is used to import functionality from another ES Module?",
    options: [
      "require",
      "include",
      "import",
      "using"
    ],
    correctAnswer: "import",
    explanation:
      "The import statement is used to load exported members from another ES Module.",
    tags: ["modules", "import", "es6"]
  },

  {
    id: 50,
    category: "JavaScript",
    difficulty: "Hard",
    question: "Which situation is most likely to cause a memory leak in JavaScript?",
    options: [
      "Using const variables",
      "Leaving unnecessary event listeners or references that are never removed",
      "Using arrow functions",
      "Creating arrays with map()"
    ],
    correctAnswer: "Leaving unnecessary event listeners or references that are never removed",
    explanation:
      "Memory leaks often occur when objects remain reachable because of lingering references, timers, or event listeners, preventing the garbage collector from reclaiming memory.",
    tags: ["memory-management", "garbage-collection", "performance"]
  },
];

export default javaScriptQuestions;