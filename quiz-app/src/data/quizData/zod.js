const zodQuestions = [
  {
    id: 1,
    category: "Zod",
    difficulty: "Easy",
    question: "What is Zod?",
    options: [
      "A CSS framework",
      "A TypeScript-first schema validation library",
      "A JavaScript runtime",
      "A database management system",
    ],
    correctAnswer:
      "A TypeScript-first schema validation library",
    explanation:
      "Zod is a TypeScript-first schema declaration and validation library. It allows developers to define schemas that validate runtime data while automatically inferring static TypeScript types, making applications safer and easier to maintain.",
    points: 5,
    timeLimit: 30,
    tags: ["zod", "typescript", "validation", "schema"],
  },

  {
    id: 2,
    category: "Zod",
    difficulty: "Easy",
    question: "Why is Zod widely used in modern TypeScript applications?",
    options: [
      "It replaces JavaScript.",
      "It provides runtime validation with automatic TypeScript type inference.",
      "It automatically creates databases.",
      "It replaces React.",
    ],
    correctAnswer:
      "It provides runtime validation with automatic TypeScript type inference.",
    explanation:
      "TypeScript only performs compile-time type checking. Zod validates actual runtime data while also generating TypeScript types, making it ideal for APIs, forms, environment variables, and backend validation.",
    points: 5,
    timeLimit: 30,
    tags: ["zod", "typescript", "runtime-validation"],
  },

  {
    id: 3,
    category: "Zod",
    difficulty: "Easy",
    question: "Which command is commonly used to install Zod?",
    options: [
      "npm install express",
      "npm install zod",
      "npm install react-zod",
      "npm install validator",
    ],
    correctAnswer: "npm install zod",
    explanation:
      "Zod is installed from npm using 'npm install zod'. It has no external runtime dependencies and integrates seamlessly with TypeScript projects.",
    points: 5,
    timeLimit: 30,
    tags: ["zod", "installation", "npm"],
  },

  {
    id: 4,
    category: "Zod",
    difficulty: "Easy",
    question: "What is a Schema in Zod?",
    options: [
      "A database table",
      "A blueprint that defines the expected structure and validation rules for data",
      "A React component",
      "A JavaScript module",
    ],
    correctAnswer:
      "A blueprint that defines the expected structure and validation rules for data",
    explanation:
      "Schemas are the foundation of Zod. They describe the expected shape of data, including its types, constraints, and validation rules.",
    points: 5,
    timeLimit: 30,
    tags: ["zod", "schema", "validation"],
  },

  {
    id: 5,
    category: "Zod",
    difficulty: "Easy",
    question: "What does the parse() method do in Zod?",
    options: [
      "Transforms CSS into JavaScript",
      "Validates data and returns the parsed value or throws an error if validation fails",
      "Creates a new schema",
      "Compiles TypeScript",
    ],
    correctAnswer:
      "Validates data and returns the parsed value or throws an error if validation fails",
    explanation:
      "The parse() method validates incoming data against a schema. If validation succeeds, the parsed value is returned. Otherwise, a ZodError is thrown containing validation details.",
    points: 5,
    timeLimit: 30,
    tags: ["zod", "parse", "validation"],
  },

  {
    id: 6,
    category: "Zod",
    difficulty: "Easy",
    question: "What is the primary purpose of validation in Zod?",
    options: [
      "To optimize JavaScript execution",
      "To ensure data matches the expected schema before it is used",
      "To generate CSS",
      "To replace TypeScript",
    ],
    correctAnswer:
      "To ensure data matches the expected schema before it is used",
    explanation:
      "Validation helps prevent invalid, incomplete, or malicious data from entering an application, improving reliability, security, and developer confidence.",
    points: 5,
    timeLimit: 30,
    tags: ["zod", "validation", "type-safety"],
  },

  {
    id: 7,
    category: "Zod",
    difficulty: "Easy",
    question: "Why is safeParse() commonly preferred over parse() in production applications?",
    options: [
      "It executes faster.",
      "It returns a success/error object instead of throwing exceptions.",
      "It skips validation.",
      "It automatically modifies invalid data.",
    ],
    correctAnswer:
      "It returns a success/error object instead of throwing exceptions.",
    explanation:
      "safeParse() returns an object containing a success boolean and either validated data or detailed validation errors. This allows applications to handle validation failures gracefully without using try/catch blocks.",
    points: 5,
    timeLimit: 35,
    tags: ["zod", "safeParse", "error-handling"],
  },

  {
    id: 8,
    category: "Zod",
    difficulty: "Easy",
    question: "Which primitive data types can Zod validate?",
    options: [
      "string, number, boolean, bigint, symbol, date, undefined, null",
      "Only strings",
      "Only objects",
      "Only arrays",
    ],
    correctAnswer:
      "string, number, boolean, bigint, symbol, date, undefined, null",
    explanation:
      "Zod provides built-in schema types for JavaScript's primitive values along with additional types such as arrays, objects, enums, tuples, maps, sets, promises, and more.",
    points: 5,
    timeLimit: 35,
    tags: ["zod", "primitive-types", "schema"],
  },

  {
    id: 9,
    category: "Zod",
    difficulty: "Easy",
    question: "What does optional() do in a Zod schema?",
    options: [
      "Makes a field read-only",
      "Allows a field to be omitted during validation",
      "Provides a default value",
      "Makes a field nullable",
    ],
    correctAnswer:
      "Allows a field to be omitted during validation",
    explanation:
      "The optional() method marks a field as optional, meaning it may be undefined or completely omitted while still passing schema validation.",
    points: 5,
    timeLimit: 35,
    tags: ["zod", "optional", "schema"],
  },

  {
    id: 10,
    category: "Zod",
    difficulty: "Easy",
    question: "What is the purpose of the default() method in Zod?",
    options: [
      "To replace optional()",
      "To automatically provide a default value when the input is undefined",
      "To convert data into JSON",
      "To disable validation",
    ],
    correctAnswer:
      "To automatically provide a default value when the input is undefined",
    explanation:
      "The default() method assigns a default value whenever the input is undefined, making it useful for configuration objects, API payloads, and environment variables.",
    points: 5,
    timeLimit: 35,
    tags: [
      "zod",
      "default",
      "schema",
      "validation",
    ],
  },
    {
    id: 11,
    category: "Zod",
    difficulty: "Easy",
    question: "What is an Object Schema in Zod?",
    options: [
      "A schema used to validate JavaScript objects with defined properties",
      "A database table",
      "A CSS object",
      "A React component",
    ],
    correctAnswer:
      "A schema used to validate JavaScript objects with defined properties",
    explanation:
      "Object schemas are one of Zod's most commonly used features. They define the expected structure of JavaScript objects, including property types, validation rules, optional fields, and nested objects.",
    points: 5,
    timeLimit: 30,
    tags: ["zod", "object-schema", "validation"],
  },

  {
    id: 12,
    category: "Zod",
    difficulty: "Easy",
    question: "How are Nested Objects validated in Zod?",
    options: [
      "By creating nested z.object() schemas",
      "Using JSON.parse()",
      "Using only TypeScript interfaces",
      "Nested objects cannot be validated",
    ],
    correctAnswer:
      "By creating nested z.object() schemas",
    explanation:
      "Zod allows object schemas to contain other object schemas, enabling validation of deeply nested application data such as users, addresses, orders, and API payloads.",
    points: 5,
    timeLimit: 30,
    tags: ["zod", "nested-objects", "object-schema"],
  },

  {
    id: 13,
    category: "Zod",
    difficulty: "Medium",
    question: "How are Arrays validated in Zod?",
    options: [
      "Using z.array()",
      "Using z.list()",
      "Using z.collection()",
      "Using z.items()",
    ],
    correctAnswer: "Using z.array()",
    explanation:
      "The z.array() method validates arrays whose elements conform to a specified schema. Additional constraints such as min(), max(), and length() can also be applied.",
    points: 10,
    timeLimit: 35,
    tags: ["zod", "arrays", "validation"],
  },

  {
    id: 14,
    category: "Zod",
    difficulty: "Medium",
    question: "What is a Tuple in Zod?",
    options: [
      "A fixed-length array where each position has a specific schema",
      "A collection of objects",
      "A replacement for arrays",
      "A JavaScript class",
    ],
    correctAnswer:
      "A fixed-length array where each position has a specific schema",
    explanation:
      "Tuples validate arrays with a predefined number of elements and specific types for each position, making them useful for coordinates, key-value pairs, and structured data.",
    points: 10,
    timeLimit: 35,
    tags: ["zod", "tuple", "validation"],
  },

  {
    id: 15,
    category: "Zod",
    difficulty: "Medium",
    question: "How are Enums created in Zod?",
    options: [
      "Using z.enum()",
      "Using z.constants()",
      "Using z.values()",
      "Using z.options()",
    ],
    correctAnswer: "Using z.enum()",
    explanation:
      "The z.enum() method creates schemas that accept only predefined string values, making it useful for roles, statuses, permissions, categories, and other fixed value sets.",
    points: 10,
    timeLimit: 35,
    tags: ["zod", "enum", "validation"],
  },

  {
    id: 16,
    category: "Zod",
    difficulty: "Medium",
    question: "What is a Union Schema in Zod?",
    options: [
      "A schema that allows multiple possible data types",
      "A schema for merging objects",
      "A database relationship",
      "A replacement for enums",
    ],
    correctAnswer:
      "A schema that allows multiple possible data types",
    explanation:
      "Union schemas allow a value to satisfy one of several schemas. For example, z.union([z.string(), z.number()]) accepts either a string or a number.",
    points: 10,
    timeLimit: 35,
    tags: ["zod", "union", "schema"],
  },

  {
    id: 17,
    category: "Zod",
    difficulty: "Hard",
    question: "What is an Intersection Schema in Zod?",
    options: [
      "A schema that combines multiple schemas into one",
      "A schema for validating arrays",
      "A replacement for objects",
      "A JavaScript utility",
    ],
    correctAnswer:
      "A schema that combines multiple schemas into one",
    explanation:
      "The z.intersection() method combines two schemas into one, requiring the validated data to satisfy both schemas simultaneously.",
    points: 15,
    timeLimit: 45,
    tags: ["zod", "intersection", "schema"],
  },

  {
    id: 18,
    category: "Zod",
    difficulty: "Hard",
    question: "What is the purpose of the refine() method in Zod?",
    options: [
      "To add custom validation rules beyond built-in validators",
      "To merge schemas",
      "To create enums",
      "To convert objects into JSON",
    ],
    correctAnswer:
      "To add custom validation rules beyond built-in validators",
    explanation:
      "The refine() method enables developers to implement custom validation logic such as password strength, age verification, business rules, or complex field constraints.",
    points: 15,
    timeLimit: 45,
    tags: ["zod", "refine", "custom-validation"],
  },

  {
    id: 19,
    category: "Zod",
    difficulty: "Hard",
    question: "How does superRefine() differ from refine() in Zod?",
    options: [
      "superRefine() allows multiple custom validation errors and cross-field validation",
      "There is no difference.",
      "superRefine() only validates arrays.",
      "refine() is newer than superRefine().",
    ],
    correctAnswer:
      "superRefine() allows multiple custom validation errors and cross-field validation",
    explanation:
      "superRefine() provides full access to the validation context, allowing multiple validation issues to be added and enabling validation that depends on multiple fields, such as password confirmation.",
    points: 15,
    timeLimit: 45,
    tags: [
      "zod",
      "superRefine",
      "cross-field-validation",
      "advanced",
    ],
  },

  {
    id: 20,
    category: "Zod",
    difficulty: "Expert",
    question: "What is considered the best practice for handling validation errors in production Zod applications?",
    options: [
      "Ignore validation errors.",
      "Use safeParse(), return structured error responses, customize error messages, and log validation failures where appropriate.",
      "Catch every error using console.log().",
      "Disable validation in production.",
    ],
    correctAnswer:
      "Use safeParse(), return structured error responses, customize error messages, and log validation failures where appropriate.",
    explanation:
      "Production applications typically use safeParse() to avoid exceptions, return consistent validation responses to clients, customize error messages for better UX, and log failures for debugging and monitoring while avoiding exposure of sensitive information.",
    points: 20,
    timeLimit: 60,
    tags: [
      "zod",
      "error-handling",
      "safeParse",
      "production",
      "best-practices",
    ],
  },
    {
    id: 21,
    category: "Zod",
    difficulty: "Medium",
    question: "What is the purpose of the transform() method in Zod?",
    options: [
      "To modify validated data into a new format after successful validation",
      "To create a new schema",
      "To merge multiple schemas",
      "To disable validation",
    ],
    correctAnswer:
      "To modify validated data into a new format after successful validation",
    explanation:
      "The transform() method allows developers to convert validated input into another value. For example, converting a string to uppercase, trimming whitespace, or mapping objects into custom DTOs after validation.",
    points: 10,
    timeLimit: 35,
    tags: ["zod", "transform", "schema", "validation"],
  },

  {
    id: 22,
    category: "Zod",
    difficulty: "Medium",
    question: "What is the purpose of preprocess() in Zod?",
    options: [
      "To modify input data before validation occurs",
      "To execute validation twice",
      "To optimize TypeScript compilation",
      "To merge schemas",
    ],
    correctAnswer:
      "To modify input data before validation occurs",
    explanation:
      "preprocess() allows developers to transform raw input before schema validation. It is commonly used to convert strings into numbers, trim input, or normalize incoming API data.",
    points: 10,
    timeLimit: 35,
    tags: ["zod", "preprocess", "validation"],
  },

  {
    id: 23,
    category: "Zod",
    difficulty: "Medium",
    question: "What is the purpose of the z.coerce namespace in Zod?",
    options: [
      "To automatically convert compatible input values into the expected type before validation",
      "To disable validation",
      "To create custom schemas",
      "To replace preprocess() completely",
    ],
    correctAnswer:
      "To automatically convert compatible input values into the expected type before validation",
    explanation:
      "z.coerce is commonly used to convert values such as '25' into the number 25, making it especially useful for handling form inputs, URL parameters, and environment variables.",
    points: 10,
    timeLimit: 35,
    tags: ["zod", "coerce", "type-conversion"],
  },

  {
    id: 24,
    category: "Zod",
    difficulty: "Medium",
    question: "What does nullable() do in a Zod schema?",
    options: [
      "Allows a schema to accept null as a valid value",
      "Makes a field optional",
      "Provides a default value",
      "Removes validation",
    ],
    correctAnswer:
      "Allows a schema to accept null as a valid value",
    explanation:
      "nullable() extends a schema so it accepts either the original type or null. It does not allow undefined unless optional() is also applied.",
    points: 10,
    timeLimit: 35,
    tags: ["zod", "nullable", "schema"],
  },

  {
    id: 25,
    category: "Zod",
    difficulty: "Hard",
    question: "What is the difference between nullable() and nullish() in Zod?",
    options: [
      "nullable() accepts only null, while nullish() accepts both null and undefined",
      "There is no difference",
      "nullish() accepts only undefined",
      "nullable() disables validation",
    ],
    correctAnswer:
      "nullable() accepts only null, while nullish() accepts both null and undefined",
    explanation:
      "nullish() is equivalent to combining nullable() and optional(), allowing values to be null, undefined, or the original schema type.",
    points: 15,
    timeLimit: 45,
    tags: ["zod", "nullable", "nullish", "advanced"],
  },

  {
    id: 26,
    category: "Zod",
    difficulty: "Hard",
    question: "What is the purpose of z.record() in Zod?",
    options: [
      "To validate objects with dynamic keys and consistent value types",
      "To create arrays",
      "To validate tuples",
      "To merge schemas",
    ],
    correctAnswer:
      "To validate objects with dynamic keys and consistent value types",
    explanation:
      "z.record() is useful when object keys are not known in advance, such as dictionaries, language translations, configuration objects, or metadata collections.",
    points: 15,
    timeLimit: 45,
    tags: ["zod", "record", "object-schema"],
  },

  {
    id: 27,
    category: "Zod",
    difficulty: "Hard",
    question: "Can Zod validate JavaScript Map and Set collections?",
    options: [
      "Yes, using z.map() and z.set()",
      "No, only arrays are supported",
      "Only Map is supported",
      "Only Set is supported",
    ],
    correctAnswer:
      "Yes, using z.map() and z.set()",
    explanation:
      "Zod provides dedicated schemas for validating JavaScript Map and Set collections, including validation of both keys and values where applicable.",
    points: 15,
    timeLimit: 45,
    tags: ["zod", "map", "set", "collections"],
  },

  {
    id: 28,
    category: "Zod",
    difficulty: "Expert",
    question: "Why is z.lazy() used in Zod?",
    options: [
      "To define recursive schemas that reference themselves",
      "To improve rendering performance",
      "To replace object schemas",
      "To defer JavaScript execution",
    ],
    correctAnswer:
      "To define recursive schemas that reference themselves",
    explanation:
      "z.lazy() enables recursive schema definitions such as trees, nested comments, menus, folders, and organizational hierarchies where a schema references itself.",
    points: 20,
    timeLimit: 60,
    tags: [
      "zod",
      "lazy",
      "recursive-schema",
      "advanced",
    ],
  },

  {
    id: 29,
    category: "Zod",
    difficulty: "Expert",
    question: "What is a Discriminated Union in Zod?",
    options: [
      "A union of object schemas distinguished by a shared discriminator field",
      "A replacement for enums",
      "A collection of arrays",
      "A recursive schema",
    ],
    correctAnswer:
      "A union of object schemas distinguished by a shared discriminator field",
    explanation:
      "z.discriminatedUnion() efficiently validates objects based on a common property such as 'type' or 'kind', making it ideal for API responses, event systems, and state machines.",
    points: 20,
    timeLimit: 60,
    tags: [
      "zod",
      "discriminated-union",
      "union",
      "advanced",
    ],
  },

  {
    id: 30,
    category: "Zod",
    difficulty: "Expert",
    question: "Which methods are commonly used for schema composition in Zod?",
    options: [
      "extend(), merge(), pick(), omit(), partial()",
      "append(), insert(), delete()",
      "join(), split(), map()",
      "clone(), assign(), freeze()",
    ],
    correctAnswer:
      "extend(), merge(), pick(), omit(), partial()",
    explanation:
      "Zod provides powerful schema composition methods. extend() adds fields, merge() combines schemas, pick() selects fields, omit() removes fields, and partial() makes properties optional. These methods promote reusable, maintainable, and scalable validation schemas in production applications.",
    points: 20,
    timeLimit: 60,
    tags: [
      "zod",
      "schema-composition",
      "extend",
      "merge",
      "pick",
      "omit",
      "partial",
      "best-practices",
    ],
  },
    {
    id: 31,
    category: "Zod",
    difficulty: "Hard",
    question: "What is z.infer in Zod?",
    options: [
      "A utility that automatically generates TypeScript types from Zod schemas",
      "A method for validating arrays",
      "A function for parsing JSON",
      "A replacement for interfaces",
    ],
    correctAnswer:
      "A utility that automatically generates TypeScript types from Zod schemas",
    explanation:
      "z.infer extracts the TypeScript type from a Zod schema, ensuring that runtime validation and compile-time types always remain synchronized. This eliminates duplicated type definitions and improves maintainability.",
    points: 15,
    timeLimit: 45,
    tags: [
      "zod",
      "z.infer",
      "typescript",
      "type-inference",
    ],
  },

  {
    id: 32,
    category: "Zod",
    difficulty: "Hard",
    question: "Why is automatic Type Inference one of Zod's biggest advantages?",
    options: [
      "Because it removes JavaScript entirely",
      "Because the same schema provides both runtime validation and compile-time TypeScript types",
      "Because it generates CSS automatically",
      "Because it replaces React Hook Form",
    ],
    correctAnswer:
      "Because the same schema provides both runtime validation and compile-time TypeScript types",
    explanation:
      "With z.infer, developers define validation rules only once. TypeScript types are generated directly from the schema, preventing inconsistencies between validation logic and type definitions.",
    points: 15,
    timeLimit: 45,
    tags: [
      "zod",
      "typescript",
      "type-inference",
      "best-practices",
    ],
  },

  {
    id: 33,
    category: "Zod",
    difficulty: "Hard",
    question: "Why is Zod commonly used together with React Hook Form?",
    options: [
      "Because React Hook Form requires Zod",
      "Because Zod provides schema-based validation while React Hook Form efficiently manages form state",
      "Because Zod replaces React",
      "Because it automatically generates UI components",
    ],
    correctAnswer:
      "Because Zod provides schema-based validation while React Hook Form efficiently manages form state",
    explanation:
      "React Hook Form focuses on performant form state management, while Zod provides robust validation. Together they create type-safe, maintainable, and highly performant forms.",
    points: 15,
    timeLimit: 45,
    tags: [
      "zod",
      "react-hook-form",
      "forms",
      "validation",
    ],
  },

  {
    id: 34,
    category: "Zod",
    difficulty: "Hard",
    question: "What is the purpose of the Zod Resolver in React Hook Form?",
    options: [
      "To connect Zod schemas directly to React Hook Form validation",
      "To optimize React rendering",
      "To replace TypeScript",
      "To manage application routing",
    ],
    correctAnswer:
      "To connect Zod schemas directly to React Hook Form validation",
    explanation:
      "The zodResolver from @hookform/resolvers allows React Hook Form to validate form data using Zod schemas automatically while preserving full TypeScript type safety.",
    points: 15,
    timeLimit: 45,
    tags: [
      "zod",
      "zodResolver",
      "react-hook-form",
      "forms",
    ],
  },

  {
    id: 35,
    category: "Zod",
    difficulty: "Hard",
    question: "Why is client-side validation important when using Zod?",
    options: [
      "It completely replaces server-side validation",
      "It provides immediate feedback to users and improves the user experience before data is submitted",
      "It removes the need for APIs",
      "It guarantees application security",
    ],
    correctAnswer:
      "It provides immediate feedback to users and improves the user experience before data is submitted",
    explanation:
      "Client-side validation improves usability by detecting invalid input instantly. However, it should always be combined with server-side validation because client-side validation alone cannot be trusted.",
    points: 15,
    timeLimit: 45,
    tags: [
      "zod",
      "client-validation",
      "forms",
      "best-practices",
    ],
  },

  {
    id: 36,
    category: "Zod",
    difficulty: "Expert",
    question: "Why is server-side validation essential even when client-side validation already exists?",
    options: [
      "Because client-side validation can be bypassed or manipulated",
      "Because browsers cannot validate forms",
      "Because Zod only works on servers",
      "Because React requires it",
    ],
    correctAnswer:
      "Because client-side validation can be bypassed or manipulated",
    explanation:
      "Every production application should validate incoming data on the server regardless of client-side validation. This prevents malicious requests, protects business logic, and ensures data integrity.",
    points: 20,
    timeLimit: 60,
    tags: [
      "zod",
      "server-validation",
      "security",
      "production",
    ],
  },

  {
    id: 37,
    category: "Zod",
    difficulty: "Expert",
    question: "How is Zod commonly used for API request validation?",
    options: [
      "By validating request bodies, query parameters, route parameters, and headers before business logic executes",
      "By replacing Express or NestJS",
      "By generating database schemas",
      "By validating only JSON responses",
    ],
    correctAnswer:
      "By validating request bodies, query parameters, route parameters, and headers before business logic executes",
    explanation:
      "Production APIs commonly validate every incoming request using Zod to ensure only correctly structured data reaches controllers, services, or database operations.",
    points: 20,
    timeLimit: 60,
    tags: [
      "zod",
      "api-validation",
      "backend",
      "express",
      "nestjs",
      "security",
    ],
  },

  {
    id: 38,
    category: "Zod",
    difficulty: "Expert",
    question: "Why is Zod commonly used for validating environment variables?",
    options: [
      "To ensure required environment variables exist and have the correct types before the application starts",
      "To encrypt environment variables",
      "To replace dotenv",
      "To optimize server performance",
    ],
    correctAnswer:
      "To ensure required environment variables exist and have the correct types before the application starts",
    explanation:
      "Validating environment variables at startup prevents configuration errors from causing runtime failures. This is a common best practice in Node.js, Next.js, Express, and NestJS applications.",
    points: 20,
    timeLimit: 60,
    tags: [
      "zod",
      "environment",
      "env",
      "configuration",
      "production",
    ],
  },

  {
    id: 39,
    category: "Zod",
    difficulty: "Expert",
    question: "Why should custom error messages be defined in Zod schemas?",
    options: [
      "To improve user experience and provide meaningful validation feedback",
      "To speed up JavaScript execution",
      "To reduce bundle size",
      "To replace HTTP status codes",
    ],
    correctAnswer:
      "To improve user experience and provide meaningful validation feedback",
    explanation:
      "Meaningful validation messages help users understand exactly what went wrong. Production applications often customize messages for required fields, invalid formats, password policies, and business rules.",
    points: 20,
    timeLimit: 60,
    tags: [
      "zod",
      "error-messages",
      "validation",
      "ux",
      "best-practices",
    ],
  },

  {
    id: 40,
    category: "Zod",
    difficulty: "Expert",
    question: "Which approach represents the best practice for using Zod in large-scale production applications?",
    options: [
      "Create validation logic separately from TypeScript types",
      "Define reusable schemas, infer TypeScript types, validate both client and server data, reuse schemas across the application, and centralize validation logic",
      "Use validation only in frontend forms",
      "Disable validation in production for better performance",
    ],
    correctAnswer:
      "Define reusable schemas, infer TypeScript types, validate both client and server data, reuse schemas across the application, and centralize validation logic",
    explanation:
      "Enterprise applications maximize Zod's benefits by creating reusable schemas, generating TypeScript types with z.infer, validating data at every application boundary, sharing schemas between frontend and backend, and centralizing validation logic for maintainability and consistency.",
    points: 20,
    timeLimit: 70,
    tags: [
      "zod",
      "best-practices",
      "production",
      "typescript",
      "architecture",
      "validation",
    ],
  },
    {
    id: 41,
    category: "Zod",
    difficulty: "Expert",
    question: "What is Async Validation in Zod?",
    options: [
      "Validation that supports asynchronous operations using parseAsync() or safeParseAsync()",
      "Validation that runs only in the browser",
      "A replacement for parse()",
      "A feature that disables validation",
    ],
    correctAnswer:
      "Validation that supports asynchronous operations using parseAsync() or safeParseAsync()",
    explanation:
      "Async validation is useful when validation depends on asynchronous operations such as checking whether an email already exists in a database, verifying external APIs, or validating remote resources. Zod provides parseAsync() and safeParseAsync() for these scenarios.",
    points: 20,
    timeLimit: 60,
    tags: [
      "zod",
      "async-validation",
      "parseAsync",
      "safeParseAsync",
      "advanced",
    ],
  },

  {
    id: 42,
    category: "Zod",
    difficulty: "Expert",
    question: "Why should reusable schemas be created in production Zod applications?",
    options: [
      "To reduce code duplication and maintain a single source of truth for validation",
      "To improve browser rendering speed",
      "To replace TypeScript interfaces",
      "To generate CSS automatically",
    ],
    correctAnswer:
      "To reduce code duplication and maintain a single source of truth for validation",
    explanation:
      "Reusable schemas ensure consistency across frontend forms, backend APIs, services, and database validation. Updating a single schema automatically updates validation everywhere it is used.",
    points: 20,
    timeLimit: 60,
    tags: [
      "zod",
      "reusable-schemas",
      "best-practices",
      "architecture",
      "production",
    ],
  },

  {
    id: 43,
    category: "Zod",
    difficulty: "Expert",
    question: "Which practices help optimize Zod validation performance in large-scale applications?",
    options: [
      "Create new schemas inside every function call",
      "Reuse schemas, avoid unnecessary transformations, validate only required data, and centralize validation logic",
      "Disable validation completely",
      "Validate the same data multiple times",
    ],
    correctAnswer:
      "Reuse schemas, avoid unnecessary transformations, validate only required data, and centralize validation logic",
    explanation:
      "Production applications improve validation performance by defining schemas once, reusing them throughout the application, minimizing redundant validation, and keeping validation logic centralized and maintainable.",
    points: 20,
    timeLimit: 60,
    tags: [
      "zod",
      "performance",
      "optimization",
      "production",
      "best-practices",
    ],
  },

  {
    id: 44,
    category: "Zod",
    difficulty: "Expert",
    question: "What is a Validation Pipeline in Zod?",
    options: [
      "A sequence of preprocessing, validation, refinement, transformation, and type inference applied to incoming data",
      "A database migration strategy",
      "A React rendering process",
      "A replacement for middleware",
    ],
    correctAnswer:
      "A sequence of preprocessing, validation, refinement, transformation, and type inference applied to incoming data",
    explanation:
      "Production-grade applications often validate data through multiple stages, including preprocessing, coercion, schema validation, custom refinement, transformation, and finally generating strongly typed output.",
    points: 20,
    timeLimit: 60,
    tags: [
      "zod",
      "validation-pipeline",
      "transform",
      "refine",
      "production",
    ],
  },

  {
    id: 45,
    category: "Zod",
    difficulty: "Expert",
    question: "Why is sharing Zod schemas between the frontend and backend considered a best practice?",
    options: [
      "It eliminates duplicate validation logic and ensures consistent data validation across the entire application",
      "It replaces API endpoints",
      "It automatically creates databases",
      "It removes the need for TypeScript",
    ],
    correctAnswer:
      "It eliminates duplicate validation logic and ensures consistent data validation across the entire application",
    explanation:
      "In full-stack TypeScript applications, shared Zod schemas provide a single source of truth for validation and inferred types, reducing maintenance effort and preventing inconsistencies between frontend and backend validation.",
    points: 20,
    timeLimit: 60,
    tags: [
      "zod",
      "shared-schemas",
      "fullstack",
      "typescript",
      "best-practices",
    ],
  },

  {
    id: 46,
    category: "Zod",
    difficulty: "Expert",
    question: "How is Zod commonly integrated with backend frameworks such as Express, NestJS, and Fastify?",
    options: [
      "By validating incoming requests before business logic executes",
      "By replacing the framework entirely",
      "By generating SQL queries",
      "By managing authentication sessions",
    ],
    correctAnswer:
      "By validating incoming requests before business logic executes",
    explanation:
      "Zod is commonly used inside middleware, pipes, or request handlers to validate request bodies, query parameters, route parameters, headers, and responses before they reach application logic.",
    points: 20,
    timeLimit: 60,
    tags: [
      "zod",
      "express",
      "nestjs",
      "fastify",
      "backend",
      "validation",
    ],
  },

  {
    id: 47,
    category: "Zod",
    difficulty: "Expert",
    question: "Why is Zod an excellent choice for Next.js applications?",
    options: [
      "Because it provides end-to-end validation for forms, API routes, Server Actions, Route Handlers, and environment variables",
      "Because Next.js requires Zod",
      "Because it replaces React Hook Form",
      "Because it automatically creates pages",
    ],
    correctAnswer:
      "Because it provides end-to-end validation for forms, API routes, Server Actions, Route Handlers, and environment variables",
    explanation:
      "Modern Next.js applications commonly use Zod for validating client forms, Route Handlers, Server Actions, API requests, search parameters, cookies, and environment variables while sharing schemas across the full stack.",
    points: 20,
    timeLimit: 60,
    tags: [
      "zod",
      "nextjs",
      "server-actions",
      "route-handlers",
      "fullstack",
    ],
  },

  {
    id: 48,
    category: "Zod",
    difficulty: "Expert",
    question: "Which folder structure is recommended for enterprise applications using Zod?",
    options: [
      "Place every schema inside one file",
      "Organize schemas into reusable modules such as auth, user, product, order, common, env, and shared validation utilities",
      "Keep schemas inside React components",
      "Generate schemas dynamically in every request",
    ],
    correctAnswer:
      "Organize schemas into reusable modules such as auth, user, product, order, common, env, and shared validation utilities",
    explanation:
      "Large applications organize validation schemas by feature or domain. This improves maintainability, promotes schema reuse, simplifies testing, and supports scalable application architecture.",
    points: 20,
    timeLimit: 65,
    tags: [
      "zod",
      "folder-structure",
      "architecture",
      "enterprise",
      "organization",
    ],
  },

  {
    id: 49,
    category: "Zod",
    difficulty: "Expert",
    question: "Which validation strategy is considered the best practice for production applications?",
    options: [
      "Validate only frontend forms",
      "Validate all external input at every application boundary using centralized reusable schemas",
      "Validate only database responses",
      "Disable validation after development",
    ],
    correctAnswer:
      "Validate all external input at every application boundary using centralized reusable schemas",
    explanation:
      "Every external input—including forms, APIs, query parameters, route parameters, headers, cookies, files, environment variables, and third-party data—should be validated before reaching business logic to ensure application reliability and security.",
    points: 20,
    timeLimit: 70,
    tags: [
      "zod",
      "validation-strategy",
      "security",
      "production",
      "best-practices",
    ],
  },

  {
    id: 50,
    category: "Zod",
    difficulty: "Expert",
    question: "You're building a production-grade SaaS platform expected to serve millions of users. Which Zod architecture represents the best practice?",
    options: [
      "Write separate validation logic for every page and API endpoint",
      "Build a centralized validation layer with reusable shared schemas, TypeScript type inference using z.infer, frontend and backend schema sharing, comprehensive request validation, custom error handling, environment validation, and consistent validation pipelines",
      "Use Zod only for frontend forms",
      "Skip validation in production to improve performance",
    ],
    correctAnswer:
      "Build a centralized validation layer with reusable shared schemas, TypeScript type inference using z.infer, frontend and backend schema sharing, comprehensive request validation, custom error handling, environment validation, and consistent validation pipelines",
    explanation:
      "Enterprise-scale applications treat validation as a core architectural layer. Reusable schemas, shared types, centralized validation, custom error handling, environment validation, API request validation, and integration with frameworks such as React Hook Form, Next.js, Express, Fastify, and NestJS ensure maintainability, security, scalability, and long-term consistency.",
    points: 20,
    timeLimit: 75,
    tags: [
      "zod",
      "architecture",
      "production",
      "enterprise",
      "validation",
      "typescript",
      "best-practices",
      "senior-developer",
      "interview",
    ],
  },
];

export default zodQuestions;