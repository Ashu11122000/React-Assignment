const nodejsQuestions = [
  {
    id: 1,
    category: "Node.js",
    difficulty: "Easy",
    question: "What is Node.js?",
    options: [
      "A frontend JavaScript framework",
      "A JavaScript runtime built on Chrome's V8 JavaScript engine",
      "A relational database management system",
      "A CSS preprocessor",
    ],
    correctAnswer:
      "A JavaScript runtime built on Chrome's V8 JavaScript engine",
    explanation:
      "Node.js is an open-source, cross-platform JavaScript runtime built on Google's V8 engine. It allows developers to execute JavaScript outside the browser and is widely used for building scalable server-side applications, REST APIs, real-time applications, and command-line tools.",
    points: 5,
    timeLimit: 30,
    tags: ["nodejs", "basics", "runtime", "v8"],
  },

  {
    id: 2,
    category: "Node.js",
    difficulty: "Easy",
    question: "Which JavaScript engine powers Node.js?",
    options: [
      "SpiderMonkey",
      "JavaScriptCore",
      "V8",
      "Chakra",
    ],
    correctAnswer: "V8",
    explanation:
      "Node.js uses Google's V8 JavaScript engine, the same engine used by Google Chrome. V8 compiles JavaScript directly into machine code, providing excellent execution performance.",
    points: 5,
    timeLimit: 30,
    tags: ["nodejs", "v8", "engine"],
  },

  {
    id: 3,
    category: "Node.js",
    difficulty: "Easy",
    question: "How is Node.js commonly described regarding its execution model?",
    options: [
      "Multi-threaded and blocking",
      "Single-threaded with an event-driven, non-blocking I/O model",
      "Single-threaded and synchronous only",
      "Multi-threaded without an event loop",
    ],
    correctAnswer:
      "Single-threaded with an event-driven, non-blocking I/O model",
    explanation:
      "Node.js executes JavaScript on a single main thread while using an event-driven architecture and asynchronous, non-blocking I/O. Expensive I/O operations are delegated to the underlying system, allowing Node.js to handle many concurrent requests efficiently.",
    points: 5,
    timeLimit: 30,
    tags: ["nodejs", "event-loop", "non-blocking", "architecture"],
  },

  {
    id: 4,
    category: "Node.js",
    difficulty: "Easy",
    question: "What is the Event Loop in Node.js?",
    options: [
      "A database connection manager",
      "A mechanism that continuously checks and executes asynchronous callbacks",
      "A JavaScript compiler",
      "A package manager",
    ],
    correctAnswer:
      "A mechanism that continuously checks and executes asynchronous callbacks",
    explanation:
      "The Event Loop is the core of Node.js's asynchronous architecture. It continuously monitors the call stack and callback queues, executing asynchronous tasks when the call stack becomes empty.",
    points: 5,
    timeLimit: 30,
    tags: ["nodejs", "event-loop", "async"],
  },

  {
    id: 5,
    category: "Node.js",
    difficulty: "Easy",
    question: "What does non-blocking I/O mean in Node.js?",
    options: [
      "The application waits until every operation finishes.",
      "Long-running operations execute asynchronously without blocking the main thread.",
      "JavaScript cannot execute asynchronous code.",
      "Only synchronous file operations are allowed.",
    ],
    correctAnswer:
      "Long-running operations execute asynchronously without blocking the main thread.",
    explanation:
      "Non-blocking I/O allows Node.js to continue processing other requests while operations such as reading files, accessing databases, or making network requests are performed asynchronously.",
    points: 5,
    timeLimit: 30,
    tags: ["nodejs", "non-blocking", "io", "performance"],
  },

  {
    id: 6,
    category: "Node.js",
    difficulty: "Easy",
    question: "What is npm?",
    options: [
      "A Node.js web framework",
      "The default package manager for Node.js",
      "A JavaScript compiler",
      "A database server",
    ],
    correctAnswer: "The default package manager for Node.js",
    explanation:
      "npm (Node Package Manager) is the default package manager for Node.js. It allows developers to install, update, manage, and publish reusable JavaScript packages from the npm registry.",
    points: 5,
    timeLimit: 30,
    tags: ["nodejs", "npm", "packages"],
  },

  {
    id: 7,
    category: "Node.js",
    difficulty: "Easy",
    question: "What is the primary purpose of package.json in a Node.js project?",
    options: [
      "To store compiled JavaScript files",
      "To define project metadata, dependencies, scripts, and configuration",
      "To store environment variables",
      "To configure the operating system",
    ],
    correctAnswer:
      "To define project metadata, dependencies, scripts, and configuration",
    explanation:
      "package.json is the central configuration file of a Node.js project. It contains project information, dependencies, scripts, version information, licensing, and many other configuration settings.",
    points: 5,
    timeLimit: 30,
    tags: ["nodejs", "package-json", "configuration"],
  },

  {
    id: 8,
    category: "Node.js",
    difficulty: "Easy",
    question: "What is the purpose of package-lock.json?",
    options: [
      "To store API documentation",
      "To lock the exact versions of installed dependencies for consistent installations",
      "To manage CSS styles",
      "To configure Express.js routes",
    ],
    correctAnswer:
      "To lock the exact versions of installed dependencies for consistent installations",
    explanation:
      "package-lock.json records the exact dependency tree and versions installed, ensuring that every developer and deployment environment installs identical package versions.",
    points: 5,
    timeLimit: 30,
    tags: ["nodejs", "package-lock", "dependencies"],
  },

  {
    id: 9,
    category: "Node.js",
    difficulty: "Easy",
    question: "What is the primary difference between CommonJS and ES Modules in Node.js?",
    options: [
      "CommonJS uses require()/module.exports, while ES Modules use import/export.",
      "CommonJS only works in browsers.",
      "ES Modules cannot import packages.",
      "There is no difference between them.",
    ],
    correctAnswer:
      "CommonJS uses require()/module.exports, while ES Modules use import/export.",
    explanation:
      "CommonJS is the traditional module system in Node.js using require() and module.exports, while ES Modules are the standardized JavaScript module system using import and export statements.",
    points: 5,
    timeLimit: 35,
    tags: ["nodejs", "commonjs", "esm", "modules"],
  },

  {
    id: 10,
    category: "Node.js",
    difficulty: "Easy",
    question: "What is the primary purpose of the npx command?",
    options: [
      "To permanently install Node.js",
      "To execute npm packages without installing them globally",
      "To create databases",
      "To compile JavaScript into TypeScript",
    ],
    correctAnswer:
      "To execute npm packages without installing them globally",
    explanation:
      "npx comes bundled with npm and allows developers to run package executables directly without globally installing them. It is commonly used for commands like 'npx create-react-app', 'npx create-next-app', and many other project scaffolding tools.",
    points: 5,
    timeLimit: 35,
    tags: ["nodejs", "npx", "npm", "cli"],
  },
    {
    id: 11,
    category: "Node.js",
    difficulty: "Easy",
    question: "Which built-in Node.js module is primarily used for working with the file system?",
    options: [
      "path",
      "http",
      "fs",
      "os",
    ],
    correctAnswer: "fs",
    explanation:
      "The fs (File System) module provides APIs for creating, reading, updating, deleting, renaming, and managing files and directories. It supports both synchronous and asynchronous operations.",
    points: 5,
    timeLimit: 30,
    tags: ["nodejs", "fs", "filesystem"],
  },

  {
    id: 12,
    category: "Node.js",
    difficulty: "Easy",
    question: "What is the primary purpose of the path module in Node.js?",
    options: [
      "To create HTTP servers",
      "To manipulate and normalize file and directory paths",
      "To manage environment variables",
      "To compress files",
    ],
    correctAnswer:
      "To manipulate and normalize file and directory paths",
    explanation:
      "The path module provides utilities for joining, resolving, parsing, normalizing, and extracting information from file system paths in a platform-independent manner.",
    points: 5,
    timeLimit: 30,
    tags: ["nodejs", "path", "filesystem"],
  },

  {
    id: 13,
    category: "Node.js",
    difficulty: "Medium",
    question: "Which built-in Node.js module provides information about the operating system?",
    options: [
      "system",
      "platform",
      "os",
      "machine",
    ],
    correctAnswer: "os",
    explanation:
      "The os module provides information about the operating system, including CPU architecture, memory usage, platform details, hostname, network interfaces, uptime, and more.",
    points: 10,
    timeLimit: 35,
    tags: ["nodejs", "os", "system"],
  },

  {
    id: 14,
    category: "Node.js",
    difficulty: "Medium",
    question: "What is the purpose of the events module in Node.js?",
    options: [
      "To connect databases",
      "To implement event-driven programming using EventEmitter",
      "To optimize JavaScript execution",
      "To create HTTP requests",
    ],
    correctAnswer:
      "To implement event-driven programming using EventEmitter",
    explanation:
      "The events module provides the EventEmitter class, which enables objects to emit named events and register listeners that respond when those events occur.",
    points: 10,
    timeLimit: 35,
    tags: ["nodejs", "events", "event-driven"],
  },

  {
    id: 15,
    category: "Node.js",
    difficulty: "Medium",
    question: "What is EventEmitter in Node.js?",
    options: [
      "A database driver",
      "A class that allows objects to emit events and register event listeners",
      "A web framework",
      "A package manager",
    ],
    correctAnswer:
      "A class that allows objects to emit events and register event listeners",
    explanation:
      "EventEmitter is one of the core building blocks of Node.js. Many built-in modules such as streams and HTTP servers use EventEmitter to implement asynchronous event-driven behavior.",
    points: 10,
    timeLimit: 35,
    tags: ["nodejs", "eventemitter", "events"],
  },

  {
    id: 16,
    category: "Node.js",
    difficulty: "Medium",
    question: "What is a Buffer in Node.js?",
    options: [
      "A database cache",
      "A fixed-size block of memory used to handle binary data",
      "A JavaScript array",
      "A network protocol",
    ],
    correctAnswer:
      "A fixed-size block of memory used to handle binary data",
    explanation:
      "Buffers allow Node.js to efficiently process binary data such as files, images, videos, TCP streams, and network packets without converting them into strings.",
    points: 10,
    timeLimit: 35,
    tags: ["nodejs", "buffer", "binary-data"],
  },

  {
    id: 17,
    category: "Node.js",
    difficulty: "Hard",
    question: "What is a Stream in Node.js?",
    options: [
      "A database connection",
      "A mechanism for processing data incrementally instead of loading it entirely into memory",
      "A JavaScript compiler",
      "A package manager",
    ],
    correctAnswer:
      "A mechanism for processing data incrementally instead of loading it entirely into memory",
    explanation:
      "Streams allow applications to efficiently process large amounts of data by reading or writing small chunks continuously, reducing memory usage and improving performance.",
    points: 15,
    timeLimit: 45,
    tags: ["nodejs", "streams", "performance"],
  },

  {
    id: 18,
    category: "Node.js",
    difficulty: "Hard",
    question: "What is the primary difference between Readable and Writable Streams?",
    options: [
      "Readable Streams receive data, while Writable Streams send data.",
      "Readable Streams read data from a source, while Writable Streams write data to a destination.",
      "Readable Streams only work with HTTP.",
      "There is no difference.",
    ],
    correctAnswer:
      "Readable Streams read data from a source, while Writable Streams write data to a destination.",
    explanation:
      "Readable Streams consume data from sources such as files or network sockets, whereas Writable Streams send data to destinations such as files, HTTP responses, or network connections.",
    points: 15,
    timeLimit: 45,
    tags: ["nodejs", "streams", "readable", "writable"],
  },

  {
    id: 19,
    category: "Node.js",
    difficulty: "Hard",
    question: "Which built-in module is commonly used to create HTTP servers in Node.js?",
    options: [
      "https",
      "net",
      "http",
      "server",
    ],
    correctAnswer: "http",
    explanation:
      "The http module provides the functionality required to create HTTP servers and clients without relying on third-party frameworks like Express.js.",
    points: 15,
    timeLimit: 45,
    tags: ["nodejs", "http", "server"],
  },

  {
    id: 20,
    category: "Node.js",
    difficulty: "Expert",
    question: "What is the primary purpose of the createServer() method in the Node.js http module?",
    options: [
      "To create a database connection",
      "To create an HTTP server that listens for incoming client requests and sends responses",
      "To establish a WebSocket connection",
      "To manage application configuration",
    ],
    correctAnswer:
      "To create an HTTP server that listens for incoming client requests and sends responses",
    explanation:
      "The http.createServer() method creates an HTTP server by accepting a request handler callback. The server listens for incoming requests, processes them, and returns appropriate HTTP responses, forming the foundation of many backend applications before frameworks like Express are introduced.",
    points: 20,
    timeLimit: 60,
    tags: [
      "nodejs",
      "http",
      "createServer",
      "backend",
      "networking",
    ],
  },
    {
    id: 21,
    category: "Node.js",
    difficulty: "Medium",
    question: "What is a callback function in Node.js?",
    options: [
      "A function that is executed immediately after being declared",
      "A function passed as an argument to another function and executed after an asynchronous operation completes",
      "A built-in Node.js module",
      "A database query method",
    ],
    correctAnswer:
      "A function passed as an argument to another function and executed after an asynchronous operation completes",
    explanation:
      "Callbacks are one of the oldest mechanisms for handling asynchronous operations in Node.js. They allow a function to continue execution once an operation such as reading a file or querying a database has finished.",
    points: 10,
    timeLimit: 35,
    tags: ["nodejs", "callbacks", "async"],
  },

  {
    id: 22,
    category: "Node.js",
    difficulty: "Medium",
    question: "What is Callback Hell?",
    options: [
      "A Node.js runtime error",
      "A situation where deeply nested callbacks make code difficult to read, maintain, and debug",
      "A database connection failure",
      "An HTTP timeout",
    ],
    correctAnswer:
      "A situation where deeply nested callbacks make code difficult to read, maintain, and debug",
    explanation:
      "Callback Hell occurs when multiple asynchronous operations depend on each other, resulting in deeply nested callback functions. Promises and async/await were introduced to solve this problem.",
    points: 10,
    timeLimit: 35,
    tags: ["nodejs", "callback-hell", "asynchronous"],
  },

  {
    id: 23,
    category: "Node.js",
    difficulty: "Medium",
    question: "What is a Promise in Node.js?",
    options: [
      "A JavaScript loop",
      "An object representing the eventual completion or failure of an asynchronous operation",
      "A database transaction",
      "A package manager feature",
    ],
    correctAnswer:
      "An object representing the eventual completion or failure of an asynchronous operation",
    explanation:
      "Promises simplify asynchronous programming by representing future values. A Promise can be in one of three states: Pending, Fulfilled, or Rejected.",
    points: 10,
    timeLimit: 35,
    tags: ["nodejs", "promises", "async"],
  },

  {
    id: 24,
    category: "Node.js",
    difficulty: "Medium",
    question: "Why is async/await preferred over callbacks in modern Node.js applications?",
    options: [
      "It completely removes asynchronous programming.",
      "It makes asynchronous code easier to read, write, and maintain while using Promises internally.",
      "It executes code synchronously.",
      "It only works with databases.",
    ],
    correctAnswer:
      "It makes asynchronous code easier to read, write, and maintain while using Promises internally.",
    explanation:
      "The async and await keywords provide a cleaner syntax for working with Promises, making asynchronous code appear similar to synchronous code while preserving non-blocking behavior.",
    points: 10,
    timeLimit: 40,
    tags: ["nodejs", "async-await", "promises"],
  },

  {
    id: 25,
    category: "Node.js",
    difficulty: "Hard",
    question: "What is the primary responsibility of the Event Loop in Node.js?",
    options: [
      "Managing database transactions",
      "Executing synchronous JavaScript and processing asynchronous callbacks from different phases",
      "Compiling JavaScript into machine code",
      "Creating HTTP requests",
    ],
    correctAnswer:
      "Executing synchronous JavaScript and processing asynchronous callbacks from different phases",
    explanation:
      "The Event Loop coordinates asynchronous operations by processing callbacks from phases such as timers, I/O callbacks, poll, check, and close callbacks while keeping the application responsive.",
    points: 15,
    timeLimit: 45,
    tags: ["nodejs", "event-loop", "async", "architecture"],
  },

  {
    id: 26,
    category: "Node.js",
    difficulty: "Hard",
    question: "What is the primary difference between the Microtask Queue and the Macrotask Queue?",
    options: [
      "There is no difference.",
      "Microtasks (such as Promise callbacks) are executed before macrotasks like setTimeout() and setImmediate().",
      "Macrotasks always execute before microtasks.",
      "Microtasks only exist in browsers.",
    ],
    correctAnswer:
      "Microtasks (such as Promise callbacks) are executed before macrotasks like setTimeout() and setImmediate().",
    explanation:
      "After the current JavaScript execution completes, Node.js processes the microtask queue before moving to the next phase of the Event Loop, giving Promise callbacks higher priority than timer callbacks.",
    points: 15,
    timeLimit: 45,
    tags: ["nodejs", "microtasks", "macrotasks", "promises"],
  },

  {
    id: 27,
    category: "Node.js",
    difficulty: "Hard",
    question: "What is the purpose of process.nextTick() in Node.js?",
    options: [
      "To schedule a callback that executes before the Event Loop proceeds to the next phase",
      "To delay execution by one second",
      "To create worker threads",
      "To execute database queries",
    ],
    correctAnswer:
      "To schedule a callback that executes before the Event Loop proceeds to the next phase",
    explanation:
      "Callbacks scheduled with process.nextTick() are executed immediately after the current operation completes, before Promise microtasks and before the Event Loop advances to its next phase.",
    points: 15,
    timeLimit: 50,
    tags: ["nodejs", "process.nextTick", "event-loop"],
  },

  {
    id: 28,
    category: "Node.js",
    difficulty: "Hard",
    question: "When is setImmediate() callback executed in Node.js?",
    options: [
      "Immediately before synchronous code",
      "During the Check phase of the Event Loop after I/O callbacks",
      "Before Promise callbacks",
      "Only after setTimeout() callbacks",
    ],
    correctAnswer:
      "During the Check phase of the Event Loop after I/O callbacks",
    explanation:
      "setImmediate() schedules a callback to run during the Check phase of the Event Loop. It is commonly used to execute code immediately after the current I/O cycle completes.",
    points: 15,
    timeLimit: 50,
    tags: ["nodejs", "setImmediate", "event-loop"],
  },

  {
    id: 29,
    category: "Node.js",
    difficulty: "Expert",
    question: "Which built-in timer functions are commonly available in Node.js?",
    options: [
      "setTimeout(), setInterval(), clearTimeout(), clearInterval(), setImmediate()",
      "wait(), sleep(), repeat()",
      "delay(), timeout(), schedule()",
      "pause(), resume(), stop()",
    ],
    correctAnswer:
      "setTimeout(), setInterval(), clearTimeout(), clearInterval(), setImmediate()",
    explanation:
      "Node.js provides several timer APIs including setTimeout(), setInterval(), setImmediate(), clearTimeout(), clearInterval(), and clearImmediate() for scheduling and controlling asynchronous execution.",
    points: 20,
    timeLimit: 60,
    tags: ["nodejs", "timers", "setTimeout", "setInterval"],
  },

  {
    id: 30,
    category: "Node.js",
    difficulty: "Expert",
    question: "What is considered a best practice for handling errors in asynchronous Node.js applications?",
    options: [
      "Ignore rejected Promises.",
      "Use try/catch with async/await, properly handle Promise rejections, and implement centralized error handling.",
      "Terminate the application whenever an error occurs.",
      "Handle errors only in the frontend.",
    ],
    correctAnswer:
      "Use try/catch with async/await, properly handle Promise rejections, and implement centralized error handling.",
    explanation:
      "Production-grade Node.js applications should consistently handle asynchronous errors using try/catch blocks with async/await, .catch() for Promises, centralized error middleware (such as in Express), structured logging, and proper monitoring to improve reliability and maintainability.",
    points: 20,
    timeLimit: 70,
    tags: [
      "nodejs",
      "error-handling",
      "async-await",
      "promises",
      "best-practices",
      "production",
    ],
  },
    {
    id: 31,
    category: "Node.js",
    difficulty: "Hard",
    question: "What is Express.js?",
    options: [
      "A relational database",
      "A minimal and flexible web application framework for Node.js",
      "A JavaScript compiler",
      "A frontend framework",
    ],
    correctAnswer:
      "A minimal and flexible web application framework for Node.js",
    explanation:
      "Express.js is the most widely used web framework for Node.js. It simplifies the development of web applications and RESTful APIs by providing features such as routing, middleware, request handling, and HTTP utilities.",
    points: 15,
    timeLimit: 45,
    tags: ["nodejs", "express", "framework", "backend"],
  },

  {
    id: 32,
    category: "Node.js",
    difficulty: "Hard",
    question: "What is Middleware in Express.js?",
    options: [
      "A database connection",
      "A function that has access to the request, response, and next() function during the request-response cycle",
      "A frontend component",
      "A Node.js module loader",
    ],
    correctAnswer:
      "A function that has access to the request, response, and next() function during the request-response cycle",
    explanation:
      "Middleware functions execute before the final route handler. They are commonly used for authentication, logging, request validation, parsing request bodies, CORS configuration, and error handling.",
    points: 15,
    timeLimit: 45,
    tags: ["nodejs", "express", "middleware"],
  },

  {
    id: 33,
    category: "Node.js",
    difficulty: "Hard",
    question: "What is Routing in Express.js?",
    options: [
      "Connecting to a database",
      "Defining how an application responds to client requests for specific HTTP methods and URLs",
      "Managing environment variables",
      "Compressing API responses",
    ],
    correctAnswer:
      "Defining how an application responds to client requests for specific HTTP methods and URLs",
    explanation:
      "Routing maps incoming HTTP requests such as GET, POST, PUT, PATCH, and DELETE to their corresponding controller functions or request handlers.",
    points: 15,
    timeLimit: 45,
    tags: ["nodejs", "express", "routing", "http"],
  },

  {
    id: 34,
    category: "Node.js",
    difficulty: "Hard",
    question: "What is a REST API?",
    options: [
      "A database management system",
      "An architectural style for building stateless web services using HTTP methods",
      "A frontend UI library",
      "A JavaScript runtime",
    ],
    correctAnswer:
      "An architectural style for building stateless web services using HTTP methods",
    explanation:
      "REST (Representational State Transfer) is an architectural style where resources are accessed through standard HTTP methods such as GET, POST, PUT, PATCH, and DELETE using stateless communication.",
    points: 15,
    timeLimit: 45,
    tags: ["nodejs", "rest", "api", "http"],
  },

  {
    id: 35,
    category: "Node.js",
    difficulty: "Hard",
    question: "What are the Request (req) and Response (res) objects in Express.js?",
    options: [
      "Objects used for CSS styling",
      "Objects that represent the incoming HTTP request and outgoing HTTP response",
      "Database models",
      "Node.js streams",
    ],
    correctAnswer:
      "Objects that represent the incoming HTTP request and outgoing HTTP response",
    explanation:
      "The req object contains information about the client's request such as headers, parameters, query strings, and body, while the res object is used to send responses back to the client.",
    points: 15,
    timeLimit: 45,
    tags: ["nodejs", "express", "request", "response"],
  },

  {
    id: 36,
    category: "Node.js",
    difficulty: "Hard",
    question: "What is the purpose of Error-Handling Middleware in Express.js?",
    options: [
      "To create API routes",
      "To centralize the handling of application errors and return consistent responses",
      "To optimize database queries",
      "To compile JavaScript files",
    ],
    correctAnswer:
      "To centralize the handling of application errors and return consistent responses",
    explanation:
      "Error-handling middleware catches errors thrown throughout the application and generates standardized HTTP responses, making applications easier to maintain and debug.",
    points: 15,
    timeLimit: 50,
    tags: ["nodejs", "express", "error-handling", "middleware"],
  },

  {
    id: 37,
    category: "Node.js",
    difficulty: "Expert",
    question: "Why are environment variables commonly used in Node.js applications?",
    options: [
      "To store CSS styles",
      "To securely manage configuration such as API keys, database credentials, and application settings",
      "To replace package.json",
      "To optimize JavaScript execution",
    ],
    correctAnswer:
      "To securely manage configuration such as API keys, database credentials, and application settings",
    explanation:
      "Environment variables allow developers to separate configuration from source code, keeping sensitive information secure and making applications easier to configure across development, testing, and production environments.",
    points: 20,
    timeLimit: 60,
    tags: [
      "nodejs",
      "environment",
      ".env",
      "configuration",
      "security",
    ],
  },

  {
    id: 38,
    category: "Node.js",
    difficulty: "Expert",
    question: "Why is JWT (JSON Web Token) commonly used in Node.js applications?",
    options: [
      "To improve database performance",
      "To provide secure, stateless authentication and authorization",
      "To compress API responses",
      "To generate HTML pages",
    ],
    correctAnswer:
      "To provide secure, stateless authentication and authorization",
    explanation:
      "JWTs allow authenticated users to securely access protected resources without maintaining server-side sessions. They are widely used in REST APIs, mobile applications, and distributed systems.",
    points: 20,
    timeLimit: 60,
    tags: [
      "nodejs",
      "jwt",
      "authentication",
      "authorization",
      "security",
    ],
  },

  {
    id: 39,
    category: "Node.js",
    difficulty: "Expert",
    question: "What problem does CORS solve in backend applications?",
    options: [
      "It improves JavaScript performance.",
      "It allows or restricts cross-origin HTTP requests between different domains.",
      "It manages database transactions.",
      "It replaces authentication.",
    ],
    correctAnswer:
      "It allows or restricts cross-origin HTTP requests between different domains.",
    explanation:
      "Cross-Origin Resource Sharing (CORS) is a browser security mechanism that controls whether a frontend hosted on one origin can access resources from another origin. Express commonly uses the cors middleware to configure this behavior.",
    points: 20,
    timeLimit: 60,
    tags: [
      "nodejs",
      "cors",
      "express",
      "security",
      "http",
    ],
  },

  {
    id: 40,
    category: "Node.js",
    difficulty: "Expert",
    question: "Why is the MVC (Model-View-Controller) architecture commonly used in Node.js applications?",
    options: [
      "It combines all business logic into a single file.",
      "It separates data access, business logic, and presentation, improving maintainability, scalability, and testing.",
      "It replaces databases.",
      "It removes the need for middleware.",
    ],
    correctAnswer:
      "It separates data access, business logic, and presentation, improving maintainability, scalability, and testing.",
    explanation:
      "MVC organizes an application into Models (data layer), Views (presentation layer), and Controllers (business logic). This separation of concerns makes large Node.js applications easier to develop, maintain, scale, and test.",
    points: 20,
    timeLimit: 70,
    tags: [
      "nodejs",
      "mvc",
      "architecture",
      "best-practices",
      "production",
    ],
  },
    {
    id: 41,
    category: "Node.js",
    difficulty: "Expert",
    question: "What is the primary purpose of the Cluster module in Node.js?",
    options: [
      "To create multiple database connections",
      "To utilize multiple CPU cores by creating worker processes",
      "To improve CSS performance",
      "To replace Express.js",
    ],
    correctAnswer:
      "To utilize multiple CPU cores by creating worker processes",
    explanation:
      "The Cluster module enables a Node.js application to spawn multiple worker processes that share the same server port. This allows applications to take advantage of multi-core CPUs and improve throughput for CPU-intensive or high-traffic workloads.",
    points: 20,
    timeLimit: 60,
    tags: [
      "nodejs",
      "cluster",
      "scalability",
      "performance",
      "multi-core",
    ],
  },

  {
    id: 42,
    category: "Node.js",
    difficulty: "Expert",
    question: "Why were Worker Threads introduced in Node.js?",
    options: [
      "To replace asynchronous I/O",
      "To execute CPU-intensive JavaScript tasks in separate threads without blocking the Event Loop",
      "To manage databases",
      "To replace Promises",
    ],
    correctAnswer:
      "To execute CPU-intensive JavaScript tasks in separate threads without blocking the Event Loop",
    explanation:
      "Worker Threads allow computationally expensive tasks such as image processing, encryption, compression, and data analysis to run in parallel without blocking the main JavaScript thread.",
    points: 20,
    timeLimit: 60,
    tags: [
      "nodejs",
      "worker-threads",
      "parallelism",
      "performance",
      "event-loop",
    ],
  },

  {
    id: 43,
    category: "Node.js",
    difficulty: "Expert",
    question: "What is the purpose of the Child Process module in Node.js?",
    options: [
      "To create React components",
      "To spawn and communicate with external processes or system commands",
      "To manage HTTP routes",
      "To optimize JavaScript bundles",
    ],
    correctAnswer:
      "To spawn and communicate with external processes or system commands",
    explanation:
      "The child_process module enables Node.js applications to execute shell commands, run external programs, and communicate with separate processes using methods such as spawn(), exec(), fork(), and execFile().",
    points: 20,
    timeLimit: 60,
    tags: [
      "nodejs",
      "child-process",
      "spawn",
      "exec",
      "system",
    ],
  },

  {
    id: 44,
    category: "Node.js",
    difficulty: "Expert",
    question: "Why are Streams considered an efficient solution for handling large files in Node.js?",
    options: [
      "They always load the entire file into memory first.",
      "They process data in small chunks, reducing memory usage and improving performance.",
      "They only work with text files.",
      "They replace the File System module.",
    ],
    correctAnswer:
      "They process data in small chunks, reducing memory usage and improving performance.",
    explanation:
      "Streams read and write data incrementally rather than loading an entire file into memory. This makes them ideal for large file processing, video streaming, backups, and network communication.",
    points: 20,
    timeLimit: 60,
    tags: [
      "nodejs",
      "streams",
      "memory",
      "performance",
      "large-files",
    ],
  },

  {
    id: 45,
    category: "Node.js",
    difficulty: "Expert",
    question: "Which approach is considered a best practice for scaling Node.js applications?",
    options: [
      "Run everything inside a single process forever.",
      "Use clustering, load balancing, caching, horizontal scaling, and stateless application design.",
      "Disable asynchronous programming.",
      "Store every request in memory.",
    ],
    correctAnswer:
      "Use clustering, load balancing, caching, horizontal scaling, and stateless application design.",
    explanation:
      "Production Node.js applications scale by combining multiple instances behind load balancers, Redis caching, clustering, containerization, and stateless architecture to maximize availability and throughput.",
    points: 20,
    timeLimit: 65,
    tags: [
      "nodejs",
      "scaling",
      "cluster",
      "load-balancer",
      "production",
    ],
  },

  {
    id: 46,
    category: "Node.js",
    difficulty: "Expert",
    question: "Which practice is most important for securing a production Node.js application?",
    options: [
      "Store passwords as plain text.",
      "Validate input, hash passwords, sanitize user data, use HTTPS, secure JWTs, and keep dependencies updated.",
      "Disable authentication.",
      "Expose environment variables in API responses.",
    ],
    correctAnswer:
      "Validate input, hash passwords, sanitize user data, use HTTPS, secure JWTs, and keep dependencies updated.",
    explanation:
      "A secure Node.js application follows security best practices such as input validation, password hashing with bcrypt or Argon2, HTTPS, secure authentication, rate limiting, dependency updates, and protection against common attacks like XSS, CSRF, and SQL Injection.",
    points: 20,
    timeLimit: 65,
    tags: [
      "nodejs",
      "security",
      "jwt",
      "bcrypt",
      "production",
      "best-practices",
    ],
  },

  {
    id: 47,
    category: "Node.js",
    difficulty: "Expert",
    question: "Why is Redis commonly integrated into Node.js applications?",
    options: [
      "To replace JavaScript.",
      "To provide high-speed caching, session storage, pub/sub messaging, and rate limiting.",
      "To compile TypeScript.",
      "To replace HTTP servers.",
    ],
    correctAnswer:
      "To provide high-speed caching, session storage, pub/sub messaging, and rate limiting.",
    explanation:
      "Redis is an in-memory data store used to cache frequently accessed data, store user sessions, implement distributed locks, support publish/subscribe messaging, and improve overall application performance.",
    points: 20,
    timeLimit: 60,
    tags: [
      "nodejs",
      "redis",
      "cache",
      "sessions",
      "performance",
    ],
  },

  {
    id: 48,
    category: "Node.js",
    difficulty: "Expert",
    question: "Why are message brokers such as RabbitMQ and Kafka used in large Node.js applications?",
    options: [
      "To replace relational databases.",
      "To enable asynchronous communication between services and process background jobs reliably.",
      "To replace Express.js routing.",
      "To compile JavaScript faster.",
    ],
    correctAnswer:
      "To enable asynchronous communication between services and process background jobs reliably.",
    explanation:
      "RabbitMQ and Kafka decouple services by allowing them to communicate through messages or events. They are widely used for background jobs, notifications, event-driven systems, microservices, and distributed architectures.",
    points: 20,
    timeLimit: 65,
    tags: [
      "nodejs",
      "rabbitmq",
      "kafka",
      "message-queue",
      "microservices",
    ],
  },

  {
    id: 49,
    category: "Node.js",
    difficulty: "Expert",
    question: "Which combination of techniques generally provides the greatest performance improvements for production Node.js applications?",
    options: [
      "Disable caching and use only synchronous APIs.",
      "Use asynchronous programming, caching, efficient database queries, indexing, connection pooling, compression, and monitoring.",
      "Store all requests in memory permanently.",
      "Place all business logic inside a single file.",
    ],
    correctAnswer:
      "Use asynchronous programming, caching, efficient database queries, indexing, connection pooling, compression, and monitoring.",
    explanation:
      "High-performance Node.js applications rely on non-blocking I/O, optimized database access, Redis caching, compression, connection pooling, monitoring, profiling, and horizontal scaling to achieve excellent responsiveness and reliability.",
    points: 20,
    timeLimit: 70,
    tags: [
      "nodejs",
      "performance",
      "optimization",
      "database",
      "production",
    ],
  },

  {
    id: 50,
    category: "Node.js",
    difficulty: "Expert",
    question: "You're designing a production-grade SaaS platform expected to serve millions of users. Which architecture represents the best practice for a Node.js backend?",
    options: [
      "Keep all business logic, routes, authentication, and database code inside a single server.js file.",
      "Adopt a modular layered architecture with authentication, dependency injection where appropriate, caching, background jobs, observability, database optimization, message queues, containerization, and microservices when justified.",
      "Store secrets directly in the source code for easier deployment.",
      "Use synchronous file and database operations throughout the application.",
    ],
    correctAnswer:
      "Adopt a modular layered architecture with authentication, dependency injection where appropriate, caching, background jobs, observability, database optimization, message queues, containerization, and microservices when justified.",
    explanation:
      "Enterprise-scale Node.js applications should follow a modular architecture with separation of concerns, secure authentication and authorization, centralized configuration, Redis caching, background job processing, structured logging, monitoring, distributed tracing, database optimization, containerization, CI/CD, and microservices where they provide clear architectural benefits. These practices improve scalability, maintainability, resilience, and long-term development.",
    points: 20,
    timeLimit: 75,
    tags: [
      "nodejs",
      "architecture",
      "production",
      "microservices",
      "performance",
      "security",
      "interview",
      "senior-developer",
    ],
  },
];

export default nodejsQuestions;