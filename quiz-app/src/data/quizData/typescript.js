const typescriptQuestions = [
  {
    id: 1,
    category: "TypeScript",
    difficulty: "Easy",
    question: "What is TypeScript?",
    options: [
      "A CSS framework",
      "A statically typed superset of JavaScript that compiles to JavaScript",
      "A JavaScript runtime",
      "A database management system",
    ],
    correctAnswer:
      "A statically typed superset of JavaScript that compiles to JavaScript",
    explanation:
      "TypeScript is an open-source programming language developed by Microsoft. It extends JavaScript by adding optional static typing, interfaces, generics, and other advanced features while compiling into standard JavaScript that runs in any browser or JavaScript runtime.",
    points: 5,
    timeLimit: 30,
    tags: ["typescript", "basics", "javascript", "typing"],
  },

  {
    id: 2,
    category: "TypeScript",
    difficulty: "Easy",
    question: "Why is TypeScript commonly used in modern web development?",
    options: [
      "It replaces HTML and CSS.",
      "It provides static typing, better tooling, improved maintainability, and early error detection.",
      "It executes faster than JavaScript in browsers.",
      "It removes the need for testing.",
    ],
    correctAnswer:
      "It provides static typing, better tooling, improved maintainability, and early error detection.",
    explanation:
      "TypeScript helps developers catch errors during development instead of runtime. Features such as IntelliSense, type checking, interfaces, and refactoring support make large applications easier to build and maintain.",
    points: 5,
    timeLimit: 30,
    tags: ["typescript", "advantages", "development"],
  },

  {
    id: 3,
    category: "TypeScript",
    difficulty: "Easy",
    question: "What is the primary difference between JavaScript and TypeScript?",
    options: [
      "JavaScript supports classes while TypeScript does not.",
      "TypeScript adds optional static typing and additional language features on top of JavaScript.",
      "TypeScript only works in browsers.",
      "JavaScript cannot create functions.",
    ],
    correctAnswer:
      "TypeScript adds optional static typing and additional language features on top of JavaScript.",
    explanation:
      "TypeScript is a superset of JavaScript. Every valid JavaScript program is valid TypeScript, but TypeScript introduces static types, interfaces, enums, generics, decorators, and many other developer-friendly features.",
    points: 5,
    timeLimit: 30,
    tags: ["typescript", "javascript", "comparison"],
  },

  {
    id: 4,
    category: "TypeScript",
    difficulty: "Easy",
    question: "What is Static Typing?",
    options: [
      "Types are checked during compilation before the code executes.",
      "Variables automatically change their types.",
      "Types are checked only in browsers.",
      "Static typing removes JavaScript.",
    ],
    correctAnswer:
      "Types are checked during compilation before the code executes.",
    explanation:
      "Static typing allows TypeScript to detect type mismatches during development, reducing runtime errors and improving code reliability.",
    points: 5,
    timeLimit: 30,
    tags: ["typescript", "static-typing", "types"],
  },

  {
    id: 5,
    category: "TypeScript",
    difficulty: "Easy",
    question: "What is Type Inference in TypeScript?",
    options: [
      "Automatically determining a variable's type based on its assigned value",
      "Converting JavaScript into TypeScript",
      "Executing code faster",
      "Importing modules automatically",
    ],
    correctAnswer:
      "Automatically determining a variable's type based on its assigned value",
    explanation:
      "TypeScript often infers types without explicit annotations. For example, let age = 25 is automatically inferred as type number.",
    points: 5,
    timeLimit: 30,
    tags: ["typescript", "type-inference"],
  },

  {
    id: 6,
    category: "TypeScript",
    difficulty: "Easy",
    question: "Which of the following are primitive types in TypeScript?",
    options: [
      "string, number, boolean, bigint, symbol, null, undefined",
      "array, object, map",
      "component, module",
      "promise, observable",
    ],
    correctAnswer:
      "string, number, boolean, bigint, symbol, null, undefined",
    explanation:
      "TypeScript supports all JavaScript primitive types while providing static type checking for each of them.",
    points: 5,
    timeLimit: 30,
    tags: ["typescript", "primitive-types"],
  },

  {
    id: 7,
    category: "TypeScript",
    difficulty: "Easy",
    question: "What is the primary difference between an Array and a Tuple in TypeScript?",
    options: [
      "There is no difference.",
      "Arrays contain elements of the same type, while tuples define a fixed number of elements with specific types.",
      "Tuples only store strings.",
      "Arrays cannot store objects.",
    ],
    correctAnswer:
      "Arrays contain elements of the same type, while tuples define a fixed number of elements with specific types.",
    explanation:
      "Arrays are flexible collections, whereas tuples have fixed lengths and predefined types for each position, making them useful for structured data.",
    points: 5,
    timeLimit: 35,
    tags: ["typescript", "arrays", "tuples"],
  },

  {
    id: 8,
    category: "TypeScript",
    difficulty: "Easy",
    question: "What is an Enum in TypeScript?",
    options: [
      "A CSS selector",
      "A feature for defining a set of named constant values",
      "A database table",
      "A JavaScript runtime",
    ],
    correctAnswer:
      "A feature for defining a set of named constant values",
    explanation:
      "Enums improve code readability by allowing developers to define meaningful names for related constant values such as roles, statuses, directions, or permissions.",
    points: 5,
    timeLimit: 35,
    tags: ["typescript", "enum", "constants"],
  },

  {
    id: 9,
    category: "TypeScript",
    difficulty: "Easy",
    question: "What is the primary difference between the 'any' and 'unknown' types?",
    options: [
      "'any' disables type checking, while 'unknown' requires type checking before use.",
      "'unknown' is less safe than 'any'.",
      "They behave exactly the same.",
      "'any' only works with strings.",
    ],
    correctAnswer:
      "'any' disables type checking, while 'unknown' requires type checking before use.",
    explanation:
      "The 'any' type bypasses TypeScript's type safety, whereas 'unknown' is a safer alternative that forces developers to narrow the type before performing operations.",
    points: 5,
    timeLimit: 35,
    tags: ["typescript", "any", "unknown", "type-safety"],
  },

  {
    id: 10,
    category: "TypeScript",
    difficulty: "Easy",
    question: "What is a Type Assertion in TypeScript?",
    options: [
      "A way to tell the compiler to treat a value as a specific type without changing the runtime value",
      "A runtime type conversion",
      "A database validation mechanism",
      "A React Hook",
    ],
    correctAnswer:
      "A way to tell the compiler to treat a value as a specific type without changing the runtime value",
    explanation:
      "Type assertions inform the TypeScript compiler about a value's expected type. They do not perform runtime conversions but help the compiler understand the developer's intent. Examples include 'value as string' and '<string>value' (outside JSX).",
    points: 5,
    timeLimit: 35,
    tags: [
      "typescript",
      "type-assertion",
      "casting",
      "compiler",
    ],
  },
    {
    id: 11,
    category: "TypeScript",
    difficulty: "Easy",
    question: "What is an Interface in TypeScript?",
    options: [
      "A way to define the structure or shape of an object",
      "A JavaScript runtime",
      "A CSS framework",
      "A database schema",
    ],
    correctAnswer:
      "A way to define the structure or shape of an object",
    explanation:
      "Interfaces define contracts for objects, classes, and functions. They improve type safety by specifying the required properties and methods an object should contain.",
    points: 5,
    timeLimit: 30,
    tags: ["typescript", "interface", "objects"],
  },

  {
    id: 12,
    category: "TypeScript",
    difficulty: "Easy",
    question: "What is a Type Alias in TypeScript?",
    options: [
      "A way to create a custom name for any type",
      "A replacement for JavaScript variables",
      "A CSS utility",
      "A database model",
    ],
    correctAnswer:
      "A way to create a custom name for any type",
    explanation:
      "Type aliases allow developers to create reusable names for primitive types, object types, union types, tuples, function types, and more using the 'type' keyword.",
    points: 5,
    timeLimit: 30,
    tags: ["typescript", "type-alias", "types"],
  },

  {
    id: 13,
    category: "TypeScript",
    difficulty: "Medium",
    question: "What is the primary difference between an Interface and a Type Alias?",
    options: [
      "Interfaces only work with classes.",
      "Interfaces are primarily designed for object shapes and support declaration merging, while type aliases can represent almost any type.",
      "Type aliases cannot define objects.",
      "There is no difference.",
    ],
    correctAnswer:
      "Interfaces are primarily designed for object shapes and support declaration merging, while type aliases can represent almost any type.",
    explanation:
      "Interfaces are commonly used for object contracts and class implementations, while type aliases are more flexible because they can define unions, intersections, tuples, primitives, and other advanced types.",
    points: 10,
    timeLimit: 35,
    tags: ["typescript", "interface", "type-alias", "comparison"],
  },

  {
    id: 14,
    category: "TypeScript",
    difficulty: "Medium",
    question: "What is a Class in TypeScript?",
    options: [
      "A blueprint for creating objects with properties, methods, and constructors",
      "A CSS selector",
      "A database collection",
      "A JavaScript package",
    ],
    correctAnswer:
      "A blueprint for creating objects with properties, methods, and constructors",
    explanation:
      "Classes support object-oriented programming by encapsulating data and behavior. TypeScript extends JavaScript classes with type annotations, access modifiers, abstract classes, and interfaces.",
    points: 10,
    timeLimit: 35,
    tags: ["typescript", "class", "oop"],
  },

  {
    id: 15,
    category: "TypeScript",
    difficulty: "Medium",
    question: "Which access modifiers are available in TypeScript?",
    options: [
      "public, private, protected",
      "visible, hidden",
      "open, closed",
      "internal, external",
    ],
    correctAnswer:
      "public, private, protected",
    explanation:
      "TypeScript supports three primary access modifiers. 'public' members are accessible everywhere, 'private' members only within the class, and 'protected' members within the class and its subclasses.",
    points: 10,
    timeLimit: 35,
    tags: ["typescript", "access-modifiers", "oop"],
  },

  {
    id: 16,
    category: "TypeScript",
    difficulty: "Medium",
    question: "What is an Abstract Class in TypeScript?",
    options: [
      "A class that cannot be instantiated directly and serves as a base class",
      "A class without methods",
      "A JavaScript module",
      "A CSS component",
    ],
    correctAnswer:
      "A class that cannot be instantiated directly and serves as a base class",
    explanation:
      "Abstract classes define common functionality while requiring derived classes to implement abstract methods. They are useful for creating reusable object-oriented architectures.",
    points: 10,
    timeLimit: 35,
    tags: ["typescript", "abstract-class", "oop"],
  },

  {
    id: 17,
    category: "TypeScript",
    difficulty: "Hard",
    question: "What is Inheritance in TypeScript?",
    options: [
      "A mechanism that allows one class to inherit properties and methods from another class",
      "A way to import modules",
      "A CSS styling technique",
      "A database relationship",
    ],
    correctAnswer:
      "A mechanism that allows one class to inherit properties and methods from another class",
    explanation:
      "Inheritance promotes code reuse by allowing child classes to extend parent classes using the 'extends' keyword while adding or overriding functionality.",
    points: 15,
    timeLimit: 45,
    tags: ["typescript", "inheritance", "oop"],
  },

  {
    id: 18,
    category: "TypeScript",
    difficulty: "Hard",
    question: "What are Generics in TypeScript?",
    options: [
      "A feature that enables reusable components and functions while preserving type safety",
      "A replacement for interfaces",
      "A JavaScript runtime",
      "A CSS utility",
    ],
    correctAnswer:
      "A feature that enables reusable components and functions while preserving type safety",
    explanation:
      "Generics allow developers to write flexible and reusable code that works with multiple types while maintaining compile-time type safety. They are widely used in arrays, promises, collections, APIs, and libraries.",
    points: 15,
    timeLimit: 45,
    tags: ["typescript", "generics", "type-safety"],
  },

  {
    id: 19,
    category: "TypeScript",
    difficulty: "Hard",
    question: "What is the purpose of the readonly modifier in TypeScript?",
    options: [
      "To make a property immutable after initialization",
      "To hide a property from other classes",
      "To automatically generate getters",
      "To convert values into constants at runtime",
    ],
    correctAnswer:
      "To make a property immutable after initialization",
    explanation:
      "The readonly modifier ensures that a property can only be assigned during initialization or within the constructor. Any later attempts to modify it result in a compile-time error.",
    points: 15,
    timeLimit: 45,
    tags: ["typescript", "readonly", "immutability"],
  },

  {
    id: 20,
    category: "TypeScript",
    difficulty: "Expert",
    question: "What is the purpose of optional properties in TypeScript interfaces and object types?",
    options: [
      "To require every property to be provided",
      "To allow properties to be omitted while maintaining type safety",
      "To make properties immutable",
      "To replace union types",
    ],
    correctAnswer:
      "To allow properties to be omitted while maintaining type safety",
    explanation:
      "Optional properties, declared using the '?' operator, allow objects to omit specific fields while still satisfying the interface or type definition. This is commonly used for configuration objects, API responses, DTOs, and partial updates.",
    points: 20,
    timeLimit: 60,
    tags: [
      "typescript",
      "optional-properties",
      "interfaces",
      "objects",
      "best-practices",
    ],
  },
    {
    id: 21,
    category: "TypeScript",
    difficulty: "Medium",
    question: "What is a Union Type in TypeScript?",
    options: [
      "A type that combines multiple possible types using the | operator",
      "A way to merge multiple classes",
      "A collection of interfaces",
      "A JavaScript module",
    ],
    correctAnswer:
      "A type that combines multiple possible types using the | operator",
    explanation:
      "Union Types allow a variable, parameter, or property to hold one of several possible types. For example, 'string | number' means the value can be either a string or a number.",
    points: 10,
    timeLimit: 35,
    tags: ["typescript", "union-types", "types"],
  },

  {
    id: 22,
    category: "TypeScript",
    difficulty: "Medium",
    question: "What is an Intersection Type in TypeScript?",
    options: [
      "A type that combines multiple types into one using the & operator",
      "A replacement for interfaces",
      "A type used only with classes",
      "A runtime feature",
    ],
    correctAnswer:
      "A type that combines multiple types into one using the & operator",
    explanation:
      "Intersection Types combine multiple types into a single type that contains all properties and behaviors from each constituent type. They are created using the '&' operator.",
    points: 10,
    timeLimit: 35,
    tags: ["typescript", "intersection-types", "advanced-types"],
  },

  {
    id: 23,
    category: "TypeScript",
    difficulty: "Medium",
    question: "What are Literal Types in TypeScript?",
    options: [
      "Types that allow only specific literal values",
      "String interpolation syntax",
      "Types used only in enums",
      "Runtime constants",
    ],
    correctAnswer:
      "Types that allow only specific literal values",
    explanation:
      "Literal Types restrict values to exact strings, numbers, or booleans. For example, type Direction = 'left' | 'right' ensures only those values are allowed.",
    points: 10,
    timeLimit: 35,
    tags: ["typescript", "literal-types", "type-safety"],
  },

  {
    id: 24,
    category: "TypeScript",
    difficulty: "Medium",
    question: "What is Type Narrowing in TypeScript?",
    options: [
      "Reducing the size of JavaScript files",
      "The process of refining a broader type into a more specific type during code execution",
      "Optimizing compiler performance",
      "Creating smaller interfaces",
    ],
    correctAnswer:
      "The process of refining a broader type into a more specific type during code execution",
    explanation:
      "Type Narrowing allows TypeScript to determine a more specific type using conditions such as typeof, instanceof, equality checks, or custom type guards.",
    points: 10,
    timeLimit: 35,
    tags: ["typescript", "type-narrowing", "advanced-types"],
  },

  {
    id: 25,
    category: "TypeScript",
    difficulty: "Hard",
    question: "What is a Type Guard in TypeScript?",
    options: [
      "A function or expression that helps TypeScript determine a more specific type",
      "A security feature",
      "A compiler optimization",
      "A database validation rule",
    ],
    correctAnswer:
      "A function or expression that helps TypeScript determine a more specific type",
    explanation:
      "Type Guards improve type safety by narrowing types using constructs such as typeof, instanceof, in, or custom functions returning 'value is Type'.",
    points: 15,
    timeLimit: 45,
    tags: ["typescript", "type-guards", "type-safety"],
  },

  {
    id: 26,
    category: "TypeScript",
    difficulty: "Hard",
    question: "What does the keyof operator do in TypeScript?",
    options: [
      "Returns a union of all property names of a given type",
      "Creates object keys automatically",
      "Converts objects into arrays",
      "Returns object values",
    ],
    correctAnswer:
      "Returns a union of all property names of a given type",
    explanation:
      "The keyof operator produces a union of an object's property names. It is commonly used with generics to create strongly typed utility functions.",
    points: 15,
    timeLimit: 45,
    tags: ["typescript", "keyof", "operators"],
  },

  {
    id: 27,
    category: "TypeScript",
    difficulty: "Hard",
    question: "What is the purpose of the typeof operator in TypeScript?",
    options: [
      "To obtain the type of a variable or value for type definitions",
      "To convert values into strings",
      "To create interfaces",
      "To replace generics",
    ],
    correctAnswer:
      "To obtain the type of a variable or value for type definitions",
    explanation:
      "Besides its JavaScript runtime behavior, TypeScript's typeof operator can be used in type positions to derive types from existing variables, functions, or objects.",
    points: 15,
    timeLimit: 45,
    tags: ["typescript", "typeof", "type-inference"],
  },

  {
    id: 28,
    category: "TypeScript",
    difficulty: "Hard",
    question: "Which of the following are built-in Utility Types in TypeScript?",
    options: [
      "Partial, Required, Pick, Omit",
      "Array, Object, Function",
      "Map, Set, WeakMap",
      "Promise, Async, Await",
    ],
    correctAnswer:
      "Partial, Required, Pick, Omit",
    explanation:
      "Utility Types help developers transform existing types. Partial makes properties optional, Required makes them mandatory, Pick selects specific properties, and Omit removes selected properties.",
    points: 15,
    timeLimit: 45,
    tags: ["typescript", "utility-types", "partial", "pick", "omit"],
  },

  {
    id: 29,
    category: "TypeScript",
    difficulty: "Expert",
    question: "What are Mapped Types in TypeScript?",
    options: [
      "Types that transform existing types by iterating over their properties",
      "A way to map arrays",
      "A database mapping feature",
      "A replacement for interfaces",
    ],
    correctAnswer:
      "Types that transform existing types by iterating over their properties",
    explanation:
      "Mapped Types generate new types by iterating through keys using the keyof operator. Many built-in utility types such as Partial and Readonly are implemented using mapped types.",
    points: 20,
    timeLimit: 60,
    tags: [
      "typescript",
      "mapped-types",
      "advanced-types",
      "utility-types",
    ],
  },

  {
    id: 30,
    category: "TypeScript",
    difficulty: "Expert",
    question: "What are Conditional Types in TypeScript?",
    options: [
      "Types that choose one type or another based on a compile-time condition",
      "Runtime if-else statements",
      "Types used only with React",
      "A feature for database queries",
    ],
    correctAnswer:
      "Types that choose one type or another based on a compile-time condition",
    explanation:
      "Conditional Types use the syntax 'T extends U ? X : Y' to determine types based on conditions at compile time. They are heavily used in advanced generic libraries and utility types.",
    points: 20,
    timeLimit: 60,
    tags: [
      "typescript",
      "conditional-types",
      "generics",
      "advanced-types",
      "type-system",
    ],
  },
    {
    id: 31,
    category: "TypeScript",
    difficulty: "Hard",
    question: "What are Modules in TypeScript?",
    options: [
      "Files that encapsulate code and export reusable functionality",
      "Database tables",
      "CSS stylesheets",
      "JavaScript loops",
    ],
    correctAnswer:
      "Files that encapsulate code and export reusable functionality",
    explanation:
      "Modules help organize code into separate files. Each file can export variables, functions, classes, interfaces, or types, which can then be imported into other modules, improving maintainability and scalability.",
    points: 15,
    timeLimit: 45,
    tags: [
      "typescript",
      "modules",
      "organization",
      "imports",
      "exports",
    ],
  },

  {
    id: 32,
    category: "TypeScript",
    difficulty: "Hard",
    question: "What is the purpose of the export and import keywords in TypeScript?",
    options: [
      "To share code between modules",
      "To compile JavaScript faster",
      "To create CSS classes",
      "To optimize databases",
    ],
    correctAnswer:
      "To share code between modules",
    explanation:
      "The export keyword makes functions, variables, classes, interfaces, or types available outside a module, while import allows other modules to use those exported members.",
    points: 15,
    timeLimit: 45,
    tags: [
      "typescript",
      "export",
      "import",
      "modules",
    ],
  },

  {
    id: 33,
    category: "TypeScript",
    difficulty: "Hard",
    question: "What are Namespaces in TypeScript?",
    options: [
      "A legacy feature for organizing related code within a global scope",
      "A replacement for ES Modules",
      "A database schema",
      "A CSS utility",
    ],
    correctAnswer:
      "A legacy feature for organizing related code within a global scope",
    explanation:
      "Namespaces were commonly used before ES Modules became the standard. Modern TypeScript projects generally prefer ES Modules because they integrate better with modern JavaScript tooling.",
    points: 15,
    timeLimit: 45,
    tags: [
      "typescript",
      "namespaces",
      "modules",
      "legacy",
    ],
  },

  {
    id: 34,
    category: "TypeScript",
    difficulty: "Hard",
    question: "What is the purpose of Declaration Files (.d.ts) in TypeScript?",
    options: [
      "To define CSS styles",
      "To provide type information for JavaScript libraries without TypeScript source code",
      "To configure the compiler",
      "To create API endpoints",
    ],
    correctAnswer:
      "To provide type information for JavaScript libraries without TypeScript source code",
    explanation:
      "Declaration files describe the types of JavaScript libraries, enabling IntelliSense, compile-time checking, and type safety even when the original library is written in JavaScript.",
    points: 15,
    timeLimit: 45,
    tags: [
      "typescript",
      "declaration-files",
      "dts",
      "typing",
    ],
  },

  {
    id: 35,
    category: "TypeScript",
    difficulty: "Hard",
    question: "What is the primary purpose of the tsconfig.json file?",
    options: [
      "To configure the TypeScript compiler and project settings",
      "To define database schemas",
      "To configure CSS utilities",
      "To manage API routes",
    ],
    correctAnswer:
      "To configure the TypeScript compiler and project settings",
    explanation:
      "The tsconfig.json file contains compiler options, file inclusion rules, module settings, path aliases, strictness options, output directories, and many other project-level configurations.",
    points: 15,
    timeLimit: 45,
    tags: [
      "typescript",
      "tsconfig",
      "compiler",
      "configuration",
    ],
  },

  {
    id: 36,
    category: "TypeScript",
    difficulty: "Expert",
    question: "Which compiler options are commonly enabled in production TypeScript projects?",
    options: [
      "strict, noImplicitAny, strictNullChecks, noUnusedLocals, sourceMap",
      "disableTypes",
      "compileEverything",
      "javascriptOnly",
    ],
    correctAnswer:
      "strict, noImplicitAny, strictNullChecks, noUnusedLocals, sourceMap",
    explanation:
      "Production projects typically enable strict compiler settings to catch bugs early, improve code quality, and provide a safer development experience.",
    points: 20,
    timeLimit: 60,
    tags: [
      "typescript",
      "compiler-options",
      "strict",
      "best-practices",
    ],
  },

  {
    id: 37,
    category: "TypeScript",
    difficulty: "Expert",
    question: "Why are Path Aliases commonly used in TypeScript projects?",
    options: [
      "To replace JavaScript imports",
      "To simplify imports by replacing long relative paths with readable aliases",
      "To optimize runtime performance",
      "To create database connections",
    ],
    correctAnswer:
      "To simplify imports by replacing long relative paths with readable aliases",
    explanation:
      "Path aliases such as '@/components', '@/services', or '@/utils' improve readability, simplify refactoring, and reduce deeply nested relative imports like '../../../components/Button'.",
    points: 20,
    timeLimit: 60,
    tags: [
      "typescript",
      "path-alias",
      "imports",
      "project-structure",
    ],
  },

  {
    id: 38,
    category: "TypeScript",
    difficulty: "Expert",
    question: "What are Decorators in TypeScript?",
    options: [
      "Special annotations that add metadata or modify classes, methods, properties, or parameters",
      "A replacement for interfaces",
      "A CSS styling technique",
      "A JavaScript loop",
    ],
    correctAnswer:
      "Special annotations that add metadata or modify classes, methods, properties, or parameters",
    explanation:
      "Decorators are an experimental TypeScript feature commonly used in frameworks such as Angular and NestJS for dependency injection, routing, validation, and metadata generation.",
    points: 20,
    timeLimit: 60,
    tags: [
      "typescript",
      "decorators",
      "nestjs",
      "angular",
      "metadata",
    ],
  },

  {
    id: 39,
    category: "TypeScript",
    difficulty: "Expert",
    question: "What is the purpose of Source Maps in TypeScript?",
    options: [
      "To generate CSS automatically",
      "To map compiled JavaScript back to the original TypeScript source for debugging",
      "To optimize API responses",
      "To replace tsconfig.json",
    ],
    correctAnswer:
      "To map compiled JavaScript back to the original TypeScript source for debugging",
    explanation:
      "Source maps allow browsers and debugging tools to display the original TypeScript code while debugging, even though the application executes compiled JavaScript.",
    points: 20,
    timeLimit: 60,
    tags: [
      "typescript",
      "source-maps",
      "debugging",
      "compiler",
    ],
  },

  {
    id: 40,
    category: "TypeScript",
    difficulty: "Expert",
    question: "Why is TypeScript widely adopted in React applications?",
    options: [
      "Because React requires TypeScript.",
      "Because TypeScript provides strong typing for components, props, state, Hooks, APIs, and improves maintainability of large React applications.",
      "Because it replaces JSX.",
      "Because it eliminates the need for testing.",
    ],
    correctAnswer:
      "Because TypeScript provides strong typing for components, props, state, Hooks, APIs, and improves maintainability of large React applications.",
    explanation:
      "TypeScript enhances React development by providing type-safe props, state, context, custom Hooks, API responses, and component contracts. It improves IDE support, refactoring, collaboration, and reduces runtime errors in large-scale applications.",
    points: 20,
    timeLimit: 70,
    tags: [
      "typescript",
      "react",
      "tsx",
      "frontend",
      "best-practices",
      "production",
    ],
  },
    {
    id: 41,
    category: "TypeScript",
    difficulty: "Expert",
    question: "What are Advanced Generics in TypeScript?",
    options: [
      "Generics that support complex type relationships using multiple type parameters, defaults, constraints, and conditional types",
      "Generics used only with arrays",
      "A replacement for interfaces",
      "A JavaScript runtime feature",
    ],
    correctAnswer:
      "Generics that support complex type relationships using multiple type parameters, defaults, constraints, and conditional types",
    explanation:
      "Advanced Generics allow developers to build reusable, type-safe libraries and frameworks. They support multiple type parameters, default generic types, constraints, inference, and conditional logic, making APIs both flexible and strongly typed.",
    points: 20,
    timeLimit: 60,
    tags: [
      "typescript",
      "advanced-generics",
      "generics",
      "type-safety",
      "advanced",
    ],
  },

  {
    id: 42,
    category: "TypeScript",
    difficulty: "Expert",
    question: "What are Generic Constraints in TypeScript?",
    options: [
      "Restrictions placed on generic types using the extends keyword",
      "A way to create runtime validation",
      "A replacement for interfaces",
      "A feature that limits JavaScript execution",
    ],
    correctAnswer:
      "Restrictions placed on generic types using the extends keyword",
    explanation:
      "Generic constraints ensure that a generic type satisfies specific requirements. Using 'extends' allows developers to safely access properties or methods while preserving generic flexibility.",
    points: 20,
    timeLimit: 60,
    tags: [
      "typescript",
      "generic-constraints",
      "extends",
      "generics",
    ],
  },

  {
    id: 43,
    category: "TypeScript",
    difficulty: "Expert",
    question: "What is the purpose of the infer keyword in TypeScript?",
    options: [
      "To automatically infer a type inside Conditional Types",
      "To replace the typeof operator",
      "To generate JavaScript code",
      "To optimize compiler performance",
    ],
    correctAnswer:
      "To automatically infer a type inside Conditional Types",
    explanation:
      "The infer keyword is used within Conditional Types to extract and infer types from complex structures. It is widely used in utility types such as ReturnType, Parameters, Awaited, and custom advanced generic utilities.",
    points: 20,
    timeLimit: 60,
    tags: [
      "typescript",
      "infer",
      "conditional-types",
      "utility-types",
      "advanced",
    ],
  },

  {
    id: 44,
    category: "TypeScript",
    difficulty: "Expert",
    question: "What are Template Literal Types in TypeScript?",
    options: [
      "Types that generate new string literal types using template literal syntax",
      "A feature for formatting HTML",
      "A replacement for string interpolation",
      "A CSS utility",
    ],
    correctAnswer:
      "Types that generate new string literal types using template literal syntax",
    explanation:
      "Template Literal Types enable powerful compile-time string manipulation by combining literal types with template literal syntax. They are useful for generating event names, API routes, CSS class names, and strongly typed string patterns.",
    points: 20,
    timeLimit: 60,
    tags: [
      "typescript",
      "template-literal-types",
      "string-types",
      "advanced",
    ],
  },

  {
    id: 45,
    category: "TypeScript",
    difficulty: "Expert",
    question: "What are Discriminated Unions in TypeScript?",
    options: [
      "Union types that contain a common discriminant property used for safe type narrowing",
      "A replacement for enums",
      "Collections of interfaces",
      "A JavaScript runtime optimization",
    ],
    correctAnswer:
      "Union types that contain a common discriminant property used for safe type narrowing",
    explanation:
      "Discriminated Unions use a shared literal property such as 'type' or 'kind' to distinguish between multiple object types. They provide exhaustive type checking and are widely used in state management, reducers, and API responses.",
    points: 20,
    timeLimit: 60,
    tags: [
      "typescript",
      "discriminated-unions",
      "type-narrowing",
      "advanced-types",
    ],
  },

  {
    id: 46,
    category: "TypeScript",
    difficulty: "Expert",
    question: "What is Declaration Merging in TypeScript?",
    options: [
      "A feature that automatically combines multiple declarations with the same name into a single definition",
      "A method for combining JavaScript files",
      "A compiler optimization",
      "A database migration technique",
    ],
    correctAnswer:
      "A feature that automatically combines multiple declarations with the same name into a single definition",
    explanation:
      "Declaration Merging allows interfaces, namespaces, and certain other declarations with the same name to merge into one unified definition. This feature is frequently used by libraries to extend existing types.",
    points: 20,
    timeLimit: 60,
    tags: [
      "typescript",
      "declaration-merging",
      "interfaces",
      "advanced",
    ],
  },

  {
    id: 47,
    category: "TypeScript",
    difficulty: "Expert",
    question: "Which practices are considered best for writing high-performance and maintainable TypeScript applications?",
    options: [
      "Use any everywhere to avoid compiler errors",
      "Enable strict mode, use precise types, avoid unnecessary any, leverage generics, and keep types modular",
      "Disable all compiler checks",
      "Write every type inside one file",
    ],
    correctAnswer:
      "Enable strict mode, use precise types, avoid unnecessary any, leverage generics, and keep types modular",
    explanation:
      "Production-grade TypeScript projects prioritize strict compiler settings, reusable types, generics, utility types, modular architecture, consistent naming, and minimal use of 'any' to maximize maintainability and type safety.",
    points: 20,
    timeLimit: 65,
    tags: [
      "typescript",
      "best-practices",
      "performance",
      "strict-mode",
      "production",
    ],
  },

  {
    id: 48,
    category: "TypeScript",
    difficulty: "Expert",
    question: "Why is TypeScript widely used with Node.js applications?",
    options: [
      "Because Node.js requires TypeScript",
      "Because TypeScript improves backend reliability through static typing, better tooling, scalable architecture, and safer APIs",
      "Because it replaces Express.js",
      "Because it automatically generates databases",
    ],
    correctAnswer:
      "Because TypeScript improves backend reliability through static typing, better tooling, scalable architecture, and safer APIs",
    explanation:
      "TypeScript is commonly used in Node.js frameworks such as NestJS and Express because it improves API contracts, dependency injection, refactoring, maintainability, and developer productivity while reducing runtime bugs.",
    points: 20,
    timeLimit: 60,
    tags: [
      "typescript",
      "nodejs",
      "nestjs",
      "backend",
      "production",
    ],
  },

  {
    id: 49,
    category: "TypeScript",
    difficulty: "Expert",
    question: "Which folder structure is generally recommended for enterprise TypeScript applications?",
    options: [
      "Keep all source files inside a single folder",
      "Organize code into modular folders such as components, services, models, types, utils, hooks, and configuration",
      "Store every interface inside index.ts",
      "Avoid separating business logic",
    ],
    correctAnswer:
      "Organize code into modular folders such as components, services, models, types, utils, hooks, and configuration",
    explanation:
      "Enterprise TypeScript projects emphasize modular architecture with clear separation of concerns, reusable type definitions, shared utilities, feature-based organization, and scalable project structure.",
    points: 20,
    timeLimit: 70,
    tags: [
      "typescript",
      "folder-structure",
      "architecture",
      "enterprise",
      "best-practices",
    ],
  },

  {
    id: 50,
    category: "TypeScript",
    difficulty: "Expert",
    question: "You're designing a production-grade SaaS platform expected to serve millions of users. Which TypeScript architecture represents the best practice?",
    options: [
      "Use the any type throughout the project to maximize flexibility",
      "Adopt a modular architecture with strict compiler settings, reusable types, generics, utility types, dependency injection where appropriate, comprehensive testing, and clear separation of concerns",
      "Disable strict mode to reduce compiler errors",
      "Place all interfaces, classes, and business logic inside one file",
    ],
    correctAnswer:
      "Adopt a modular architecture with strict compiler settings, reusable types, generics, utility types, dependency injection where appropriate, comprehensive testing, and clear separation of concerns",
    explanation:
      "Enterprise-scale TypeScript applications benefit from strict type checking, reusable interfaces and types, advanced generics, utility types, modular architecture, dependency injection, automated testing, consistent linting, documentation, and scalable project organization. These practices improve maintainability, reliability, collaboration, and long-term project success.",
    points: 20,
    timeLimit: 75,
    tags: [
      "typescript",
      "architecture",
      "production",
      "enterprise",
      "best-practices",
      "interview",
      "senior-developer",
      "scalability",
    ],
  },
];

export default typescriptQuestions;