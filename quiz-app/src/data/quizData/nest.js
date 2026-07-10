const nestQuestions = [
  {
    id: 1,
    category: "NestJS",
    difficulty: "Easy",
    question: "What is NestJS?",
    options: [
      "A frontend JavaScript framework",
      "A progressive Node.js framework for building scalable server-side applications",
      "A database management system",
      "A CSS framework",
    ],
    correctAnswer:
      "A progressive Node.js framework for building scalable server-side applications",
    explanation:
      "NestJS is a progressive Node.js framework built with TypeScript. It follows a modular architecture and is inspired by Angular's design patterns.",
    points: 5,
    timeLimit: 30,
    tags: ["nestjs", "basics", "framework"],
  },

  {
    id: 2,
    category: "NestJS",
    difficulty: "Easy",
    question: "Which programming language is NestJS primarily built with?",
    options: [
      "Java",
      "Python",
      "TypeScript",
      "PHP",
    ],
    correctAnswer: "TypeScript",
    explanation:
      "NestJS is built with TypeScript by default, although it also supports plain JavaScript.",
    points: 5,
    timeLimit: 30,
    tags: ["nestjs", "typescript"],
  },

  {
    id: 3,
    category: "NestJS",
    difficulty: "Easy",
    question: "Which CLI command creates a new NestJS project?",
    options: [
      "npm create nest",
      "nest new project-name",
      "npx create-nest-app",
      "nest init",
    ],
    correctAnswer: "nest new project-name",
    explanation:
      "The Nest CLI command 'nest new project-name' scaffolds a complete NestJS application with the recommended project structure.",
    points: 5,
    timeLimit: 30,
    tags: ["nestjs", "cli", "project"],
  },

  {
    id: 4,
    category: "NestJS",
    difficulty: "Easy",
    question: "Which architectural pattern does NestJS primarily encourage?",
    options: [
      "Monolithic scripting",
      "Modular architecture",
      "MVC without modules",
      "Component-based frontend architecture",
    ],
    correctAnswer: "Modular architecture",
    explanation:
      "NestJS organizes applications into modules, making them scalable, maintainable, and easy to test.",
    points: 5,
    timeLimit: 30,
    tags: ["nestjs", "architecture", "modules"],
  },

  {
    id: 5,
    category: "NestJS",
    difficulty: "Easy",
    question: "Which decorator is used to define a NestJS module?",
    options: [
      "@Component()",
      "@Module()",
      "@Injectable()",
      "@NestModule()",
    ],
    correctAnswer: "@Module()",
    explanation:
      "@Module() is the fundamental decorator that groups controllers, providers, imports, and exports into a cohesive unit.",
    points: 5,
    timeLimit: 30,
    tags: ["nestjs", "module", "decorators"],
  },

  {
    id: 6,
    category: "NestJS",
    difficulty: "Easy",
    question: "Which built-in HTTP platform does NestJS use by default?",
    options: [
      "Koa",
      "Express",
      "Hapi",
      "Fastify",
    ],
    correctAnswer: "Express",
    explanation:
      "NestJS uses Express as its default HTTP platform, although Fastify is also officially supported for higher performance.",
    points: 5,
    timeLimit: 30,
    tags: ["nestjs", "express", "http"],
  },

  {
    id: 7,
    category: "NestJS",
    difficulty: "Easy",
    question: "Which file is the entry point of a default NestJS application?",
    options: [
      "app.module.ts",
      "main.ts",
      "server.ts",
      "index.ts",
    ],
    correctAnswer: "main.ts",
    explanation:
      "The main.ts file bootstraps the NestJS application using NestFactory.",
    points: 5,
    timeLimit: 30,
    tags: ["nestjs", "main.ts", "bootstrap"],
  },

  {
    id: 8,
    category: "NestJS",
    difficulty: "Easy",
    question: "Which class is commonly used to bootstrap a NestJS application?",
    options: [
      "NestApplication",
      "NestFactory",
      "NestBootstrap",
      "AppFactory",
    ],
    correctAnswer: "NestFactory",
    explanation:
      "NestFactory.create() initializes and starts a NestJS application instance.",
    points: 5,
    timeLimit: 30,
    tags: ["nestjs", "nestfactory", "bootstrap"],
  },

  {
    id: 9,
    category: "NestJS",
    difficulty: "Easy",
    question: "Which package provides the core functionality of NestJS?",
    options: [
      "@nestjs/platform-express",
      "@nestjs/common",
      "@nestjs/core",
      "@nestjs/cli",
    ],
    correctAnswer: "@nestjs/core",
    explanation:
      "@nestjs/core contains the framework's core runtime and dependency injection system.",
    points: 5,
    timeLimit: 30,
    tags: ["nestjs", "core", "packages"],
  },

  {
    id: 10,
    category: "NestJS",
    difficulty: "Easy",
    question: "Which decorator is commonly used to define a REST API controller?",
    options: [
      "@Controller()",
      "@Route()",
      "@Api()",
      "@RestController()",
    ],
    correctAnswer: "@Controller()",
    explanation:
      "@Controller() marks a class as a NestJS controller responsible for handling incoming HTTP requests and returning responses.",
    points: 5,
    timeLimit: 30,
    tags: ["nestjs", "controller", "decorators"],
  },
    {
    id: 11,
    category: "NestJS",
    difficulty: "Easy",
    question: "What is the primary purpose of the @Module() decorator in NestJS?",
    options: [
      "To define HTTP routes",
      "To group related controllers, providers, imports, and exports into a cohesive unit",
      "To create database tables",
      "To register middleware",
    ],
    correctAnswer:
      "To group related controllers, providers, imports, and exports into a cohesive unit",
    explanation:
      "The @Module() decorator is the building block of every NestJS application. It organizes features by grouping controllers, providers, imported modules, and exported providers into a logical unit.",
    points: 5,
    timeLimit: 30,
    tags: ["nestjs", "module", "architecture"],
  },

  {
    id: 12,
    category: "NestJS",
    difficulty: "Easy",
    question: "What is the primary responsibility of a class decorated with @Controller()?",
    options: [
      "Managing database connections",
      "Handling incoming HTTP requests and returning responses",
      "Providing dependency injection",
      "Managing application configuration",
    ],
    correctAnswer:
      "Handling incoming HTTP requests and returning responses",
    explanation:
      "Controllers define route handlers that receive HTTP requests, call business logic from services, and return appropriate responses.",
    points: 5,
    timeLimit: 30,
    tags: ["nestjs", "controller", "routing"],
  },

  {
    id: 13,
    category: "NestJS",
    difficulty: "Medium",
    question: "Which decorator marks a class as a Provider that can participate in NestJS Dependency Injection?",
    options: [
      "@Service()",
      "@Injectable()",
      "@Provider()",
      "@Inject()",
    ],
    correctAnswer: "@Injectable()",
    explanation:
      "@Injectable() tells NestJS that the class can be managed by the Dependency Injection container and injected into other classes.",
    points: 10,
    timeLimit: 35,
    tags: ["nestjs", "injectable", "provider", "di"],
  },

  {
    id: 14,
    category: "NestJS",
    difficulty: "Medium",
    question: "In NestJS, what is a Provider?",
    options: [
      "Only a database service",
      "Any class or value managed by NestJS's Dependency Injection container",
      "Only middleware",
      "A controller that handles API requests",
    ],
    correctAnswer:
      "Any class or value managed by NestJS's Dependency Injection container",
    explanation:
      "Providers include services, repositories, factories, values, and other injectable dependencies managed by NestJS.",
    points: 10,
    timeLimit: 35,
    tags: ["nestjs", "provider", "dependency-injection"],
  },

  {
    id: 15,
    category: "NestJS",
    difficulty: "Medium",
    question: "What is the primary responsibility of a Service in NestJS?",
    options: [
      "Rendering HTML pages",
      "Containing business logic and reusable application functionality",
      "Handling routing only",
      "Managing CSS styles",
    ],
    correctAnswer:
      "Containing business logic and reusable application functionality",
    explanation:
      "Services separate business logic from controllers, improving maintainability, testability, and code reuse.",
    points: 10,
    timeLimit: 35,
    tags: ["nestjs", "service", "business-logic"],
  },

  {
    id: 16,
    category: "NestJS",
    difficulty: "Medium",
    question: "What is Dependency Injection (DI) in NestJS?",
    options: [
      "A database optimization technique",
      "A design pattern where dependencies are provided by the framework instead of being created manually",
      "A method for routing HTTP requests",
      "A TypeScript compiler feature",
    ],
    correctAnswer:
      "A design pattern where dependencies are provided by the framework instead of being created manually",
    explanation:
      "Dependency Injection allows classes to receive their dependencies from NestJS's IoC container, promoting loose coupling and easier testing.",
    points: 10,
    timeLimit: 40,
    tags: ["nestjs", "dependency-injection", "ioc"],
  },

  {
    id: 17,
    category: "NestJS",
    difficulty: "Medium",
    question: "By default, what is the lifecycle of a NestJS Provider?",
    options: [
      "Transient",
      "Request-scoped",
      "Singleton",
      "Prototype",
    ],
    correctAnswer: "Singleton",
    explanation:
      "Providers are singleton by default, meaning one shared instance is created and reused throughout the application's lifetime.",
    points: 10,
    timeLimit: 40,
    tags: ["nestjs", "singleton", "provider", "scope"],
  },

  {
    id: 18,
    category: "NestJS",
    difficulty: "Hard",
    question: "Why are modules exported using the 'exports' array in @Module()?",
    options: [
      "To improve application performance",
      "To make providers available for use in other imported modules",
      "To expose REST API endpoints",
      "To register middleware globally",
    ],
    correctAnswer:
      "To make providers available for use in other imported modules",
    explanation:
      "Only exported providers can be injected into other modules that import the current module, enabling modular application architecture.",
    points: 15,
    timeLimit: 45,
    tags: ["nestjs", "module", "exports", "providers"],
  },

  {
    id: 19,
    category: "NestJS",
    difficulty: "Hard",
    question: "Which NestJS utility is commonly used to resolve circular dependencies between providers or modules?",
    options: [
      "forwardRef()",
      "resolveRef()",
      "injectRef()",
      "lazyModule()",
    ],
    correctAnswer: "forwardRef()",
    explanation:
      "forwardRef() allows NestJS to resolve circular dependencies by delaying the resolution of a referenced provider or module until both have been defined.",
    points: 15,
    timeLimit: 50,
    tags: [
      "nestjs",
      "forwardRef",
      "circular-dependency",
      "dependency-injection",
    ],
  },

  {
    id: 20,
    category: "NestJS",
    difficulty: "Expert",
    question: "What is the primary purpose of a Dynamic Module in NestJS?",
    options: [
      "To create routes dynamically at runtime",
      "To configure and register modules with customizable providers using methods like forRoot() or forRootAsync()",
      "To automatically generate controllers",
      "To replace dependency injection",
    ],
    correctAnswer:
      "To configure and register modules with customizable providers using methods like forRoot() or forRootAsync()",
    explanation:
      "Dynamic Modules allow libraries and applications to expose configurable modules. Common examples include ConfigModule, JwtModule, and TypeOrmModule using forRoot() or forRootAsync() for runtime configuration.",
    points: 20,
    timeLimit: 60,
    tags: [
      "nestjs",
      "dynamic-module",
      "forRoot",
      "forRootAsync",
      "architecture",
      "expert",
    ],
  },
    {
    id: 21,
    category: "NestJS",
    difficulty: "Medium",
    question: "What is the primary purpose of Middleware in NestJS?",
    options: [
      "To validate DTOs",
      "To execute logic before the request reaches the route handler",
      "To handle database queries",
      "To catch application exceptions",
    ],
    correctAnswer:
      "To execute logic before the request reaches the route handler",
    explanation:
      "Middleware runs before route handlers and is commonly used for logging, authentication, request parsing, CORS, and request preprocessing.",
    points: 10,
    timeLimit: 35,
    tags: ["nestjs", "middleware", "request-lifecycle"],
  },

  {
    id: 22,
    category: "NestJS",
    difficulty: "Medium",
    question: "What is the purpose of a Pipe in NestJS?",
    options: [
      "To execute middleware",
      "To transform and validate incoming request data",
      "To authenticate users",
      "To cache API responses",
    ],
    correctAnswer:
      "To transform and validate incoming request data",
    explanation:
      "Pipes are responsible for transforming incoming data into the desired format and validating request data before it reaches the controller.",
    points: 10,
    timeLimit: 35,
    tags: ["nestjs", "pipes", "validation"],
  },

  {
    id: 23,
    category: "NestJS",
    difficulty: "Medium",
    question: "Which built-in Pipe is commonly used with class-validator to automatically validate DTOs?",
    options: [
      "ParseIntPipe",
      "ValidationPipe",
      "TransformPipe",
      "JsonPipe",
    ],
    correctAnswer: "ValidationPipe",
    explanation:
      "ValidationPipe integrates with class-validator and class-transformer to automatically validate incoming DTOs and optionally transform payloads.",
    points: 10,
    timeLimit: 35,
    tags: ["nestjs", "validationpipe", "dto", "validation"],
  },

  {
    id: 24,
    category: "NestJS",
    difficulty: "Medium",
    question: "Which interface must a custom Pipe implement?",
    options: [
      "PipeInterface",
      "CanActivate",
      "PipeTransform",
      "NestPipe",
    ],
    correctAnswer: "PipeTransform",
    explanation:
      "Custom Pipes implement the PipeTransform interface and define the transform() method to modify or validate incoming values.",
    points: 10,
    timeLimit: 40,
    tags: ["nestjs", "custom-pipe", "pipetranform"],
  },

  {
    id: 25,
    category: "NestJS",
    difficulty: "Hard",
    question: "What is the primary responsibility of a Guard in NestJS?",
    options: [
      "Transform request data",
      "Determine whether a request is authorized to proceed",
      "Handle exceptions",
      "Modify HTTP responses",
    ],
    correctAnswer:
      "Determine whether a request is authorized to proceed",
    explanation:
      "Guards implement authorization logic and decide whether a request should continue to the route handler based on conditions such as authentication or user roles.",
    points: 15,
    timeLimit: 45,
    tags: ["nestjs", "guards", "authorization"],
  },

  {
    id: 26,
    category: "NestJS",
    difficulty: "Hard",
    question: "Which interface is implemented when creating a custom Guard?",
    options: [
      "CanActivate",
      "PipeTransform",
      "NestMiddleware",
      "ExceptionFilter",
    ],
    correctAnswer: "CanActivate",
    explanation:
      "Every custom Guard implements the CanActivate interface, whose canActivate() method returns whether the current request is allowed.",
    points: 15,
    timeLimit: 45,
    tags: ["nestjs", "canactivate", "guards"],
  },

  {
    id: 27,
    category: "NestJS",
    difficulty: "Hard",
    question: "Why is a JWT Authentication Guard commonly used in NestJS applications?",
    options: [
      "To compress JWT tokens",
      "To verify JWTs and restrict access to authenticated users",
      "To generate database migrations",
      "To validate DTOs",
    ],
    correctAnswer:
      "To verify JWTs and restrict access to authenticated users",
    explanation:
      "JWT Authentication Guards validate incoming JSON Web Tokens and allow only authenticated users to access protected routes.",
    points: 15,
    timeLimit: 45,
    tags: ["nestjs", "jwt", "auth", "guards"],
  },

  {
    id: 28,
    category: "NestJS",
    difficulty: "Hard",
    question: "What is the primary purpose of an Interceptor in NestJS?",
    options: [
      "To validate request bodies",
      "To intercept requests and responses for cross-cutting concerns such as logging, caching, and response transformation",
      "To define database entities",
      "To register application modules",
    ],
    correctAnswer:
      "To intercept requests and responses for cross-cutting concerns such as logging, caching, and response transformation",
    explanation:
      "Interceptors wrap around route execution and can modify requests, responses, execution time, caching behavior, logging, and exception mapping.",
    points: 15,
    timeLimit: 50,
    tags: [
      "nestjs",
      "interceptors",
      "logging",
      "response-transform",
    ],
  },

  {
    id: 29,
    category: "NestJS",
    difficulty: "Expert",
    question: "What is the purpose of an Exception Filter in NestJS?",
    options: [
      "To authorize requests",
      "To catch and customize the handling of exceptions thrown by the application",
      "To validate incoming requests",
      "To execute middleware globally",
    ],
    correctAnswer:
      "To catch and customize the handling of exceptions thrown by the application",
    explanation:
      "Exception Filters centralize error handling by catching exceptions and returning consistent, customized HTTP responses instead of default framework responses.",
    points: 20,
    timeLimit: 60,
    tags: [
      "nestjs",
      "exception-filter",
      "error-handling",
      "http-exception",
    ],
  },

  {
    id: 30,
    category: "NestJS",
    difficulty: "Expert",
    question: "Which sequence correctly represents the typical NestJS request lifecycle?",
    options: [
      "Controller → Middleware → Pipes → Guards → Interceptors → Filters",
      "Middleware → Guards → Interceptors → Pipes → Controller → Exception Filters",
      "Guards → Middleware → Controller → Pipes → Interceptors → Filters",
      "Pipes → Middleware → Guards → Controller → Filters → Interceptors",
    ],
    correctAnswer:
      "Middleware → Guards → Interceptors → Pipes → Controller → Exception Filters",
    explanation:
      "A request typically flows through Middleware first, then Guards determine access, Interceptors wrap execution, Pipes validate and transform parameters before the controller executes, and Exception Filters handle any uncaught exceptions. Interceptors also process the outgoing response after the controller returns.",
    points: 20,
    timeLimit: 70,
    tags: [
      "nestjs",
      "request-lifecycle",
      "middleware",
      "guards",
      "pipes",
      "interceptors",
      "exception-filters",
      "architecture",
    ],
  },
    {
    id: 31,
    category: "NestJS",
    difficulty: "Hard",
    question: "Which NestJS module is commonly used to integrate Passport.js authentication strategies?",
    options: [
      "@nestjs/auth",
      "@nestjs/passport",
      "@nestjs/security",
      "@nestjs/jwt",
    ],
    correctAnswer: "@nestjs/passport",
    explanation:
      "@nestjs/passport integrates Passport.js into NestJS, allowing developers to implement authentication strategies such as Local, JWT, Google OAuth, GitHub OAuth, and more.",
    points: 15,
    timeLimit: 45,
    tags: ["nestjs", "passport", "authentication"],
  },

  {
    id: 32,
    category: "NestJS",
    difficulty: "Hard",
    question: "What is the primary purpose of JWT Authentication in NestJS?",
    options: [
      "To encrypt database records",
      "To authenticate users using signed, stateless access tokens",
      "To validate DTOs",
      "To establish WebSocket connections",
    ],
    correctAnswer:
      "To authenticate users using signed, stateless access tokens",
    explanation:
      "JWT (JSON Web Token) enables stateless authentication by allowing clients to send signed tokens with each request instead of maintaining server-side sessions.",
    points: 15,
    timeLimit: 45,
    tags: ["nestjs", "jwt", "authentication", "security"],
  },

  {
    id: 33,
    category: "NestJS",
    difficulty: "Hard",
    question: "What is Role-Based Access Control (RBAC)?",
    options: [
      "A database indexing technique",
      "An authorization mechanism that grants permissions based on user roles",
      "A JWT encryption algorithm",
      "A caching strategy",
    ],
    correctAnswer:
      "An authorization mechanism that grants permissions based on user roles",
    explanation:
      "RBAC restricts access by assigning permissions to roles such as Admin, Manager, or User rather than directly to individual users.",
    points: 15,
    timeLimit: 45,
    tags: ["nestjs", "rbac", "authorization"],
  },

  {
    id: 34,
    category: "NestJS",
    difficulty: "Hard",
    question: "Why is a custom @Roles() decorator commonly used in NestJS?",
    options: [
      "To define HTTP routes",
      "To attach role metadata that Guards can use for authorization",
      "To generate JWT tokens",
      "To create database entities",
    ],
    correctAnswer:
      "To attach role metadata that Guards can use for authorization",
    explanation:
      "The @Roles() decorator stores role metadata using NestJS's metadata system. A RolesGuard reads this metadata to determine whether a user has sufficient permissions.",
    points: 15,
    timeLimit: 50,
    tags: ["nestjs", "roles", "decorators", "guards"],
  },

  {
    id: 35,
    category: "NestJS",
    difficulty: "Hard",
    question: "Which libraries are most commonly used together for DTO validation in NestJS?",
    options: [
      "express-validator and joi",
      "class-validator and class-transformer",
      "zod and yup",
      "validator.js and lodash",
    ],
    correctAnswer:
      "class-validator and class-transformer",
    explanation:
      "NestJS commonly uses class-validator for declarative validation and class-transformer for converting plain JavaScript objects into typed DTO instances.",
    points: 15,
    timeLimit: 45,
    tags: [
      "nestjs",
      "dto",
      "validation",
      "class-validator",
      "class-transformer",
    ],
  },

  {
    id: 36,
    category: "NestJS",
    difficulty: "Hard",
    question: "What is TypeORM primarily used for in a NestJS application?",
    options: [
      "Authentication",
      "Object-Relational Mapping (ORM) for relational databases",
      "Caching API responses",
      "Generating REST endpoints",
    ],
    correctAnswer:
      "Object-Relational Mapping (ORM) for relational databases",
    explanation:
      "TypeORM maps database tables to TypeScript classes, allowing developers to work with entities instead of writing raw SQL for most operations.",
    points: 15,
    timeLimit: 45,
    tags: ["nestjs", "typeorm", "orm", "database"],
  },

  {
    id: 37,
    category: "NestJS",
    difficulty: "Expert",
    question: "How does Prisma differ from traditional ORMs such as TypeORM?",
    options: [
      "Prisma only works with MongoDB.",
      "Prisma is a type-safe ORM that generates a strongly typed client from a schema file.",
      "Prisma replaces TypeScript.",
      "Prisma cannot perform database migrations.",
    ],
    correctAnswer:
      "Prisma is a type-safe ORM that generates a strongly typed client from a schema file.",
    explanation:
      "Prisma uses a schema-first approach to generate a fully typed database client, providing excellent developer experience, autocompletion, and compile-time safety.",
    points: 20,
    timeLimit: 60,
    tags: [
      "nestjs",
      "prisma",
      "orm",
      "database",
      "typescript",
    ],
  },

  {
    id: 38,
    category: "NestJS",
    difficulty: "Expert",
    question: "What is the primary goal of the Repository Pattern?",
    options: [
      "To replace dependency injection",
      "To abstract data access logic from business logic",
      "To improve CSS performance",
      "To replace DTO validation",
    ],
    correctAnswer:
      "To abstract data access logic from business logic",
    explanation:
      "The Repository Pattern separates persistence logic from application logic, making the codebase easier to test, maintain, and swap between different data sources.",
    points: 20,
    timeLimit: 60,
    tags: [
      "nestjs",
      "repository-pattern",
      "architecture",
      "database",
    ],
  },

  {
    id: 39,
    category: "NestJS",
    difficulty: "Expert",
    question: "Why are ConfigModule and ConfigService commonly used in NestJS applications?",
    options: [
      "To automatically generate REST APIs",
      "To manage application configuration and securely access environment variables",
      "To execute SQL queries",
      "To validate DTOs",
    ],
    correctAnswer:
      "To manage application configuration and securely access environment variables",
    explanation:
      "ConfigModule loads configuration from sources such as .env files, while ConfigService provides centralized, type-safe access to configuration values throughout the application.",
    points: 20,
    timeLimit: 60,
    tags: [
      "nestjs",
      "configmodule",
      "configservice",
      "environment",
      ".env",
    ],
  },

  {
    id: 40,
    category: "NestJS",
    difficulty: "Expert",
    question: "A financial transaction requires updating multiple database tables atomically. Which approach represents the best practice in NestJS?",
    options: [
      "Execute each query independently and ignore partial failures.",
      "Wrap related database operations inside a transaction so either all operations succeed or all are rolled back.",
      "Disable database constraints before executing queries.",
      "Use only in-memory variables to maintain consistency.",
    ],
    correctAnswer:
      "Wrap related database operations inside a transaction so either all operations succeed or all are rolled back.",
    explanation:
      "Database transactions ensure atomicity, consistency, isolation, and durability (ACID). In production applications, operations such as fund transfers, order processing, and inventory updates should be executed within transactions to prevent inconsistent data when failures occur.",
    points: 20,
    timeLimit: 70,
    tags: [
      "nestjs",
      "transactions",
      "database",
      "acid",
      "typeorm",
      "prisma",
      "best-practices",
    ],
  },
    {
    id: 41,
    category: "NestJS",
    difficulty: "Expert",
    question: "What is the primary benefit of using a Microservices Architecture in NestJS?",
    options: [
      "It stores data faster than SQL databases.",
      "It divides an application into independently deployable services that communicate over a network.",
      "It removes the need for controllers.",
      "It automatically eliminates all scalability issues.",
    ],
    correctAnswer:
      "It divides an application into independently deployable services that communicate over a network.",
    explanation:
      "Microservices separate business capabilities into independent services, enabling better scalability, fault isolation, independent deployments, and technology flexibility.",
    points: 20,
    timeLimit: 60,
    tags: [
      "nestjs",
      "microservices",
      "architecture",
      "distributed-systems",
    ],
  },

  {
    id: 42,
    category: "NestJS",
    difficulty: "Expert",
    question: "Which transport layer is commonly used in NestJS for high-throughput event streaming in distributed systems?",
    options: [
      "HTTP",
      "Kafka",
      "FTP",
      "SMTP",
    ],
    correctAnswer: "Kafka",
    explanation:
      "Kafka is a distributed event streaming platform widely used for scalable, fault-tolerant, event-driven microservices. NestJS also supports TCP, Redis, RabbitMQ, NATS, MQTT, and gRPC transports.",
    points: 20,
    timeLimit: 60,
    tags: [
      "nestjs",
      "kafka",
      "transport-layer",
      "microservices",
    ],
  },

  {
    id: 43,
    category: "NestJS",
    difficulty: "Expert",
    question: "Which decorator is used to create a WebSocket Gateway in NestJS?",
    options: [
      "@Socket()",
      "@Gateway()",
      "@WebSocketGateway()",
      "@RealtimeGateway()",
    ],
    correctAnswer: "@WebSocketGateway()",
    explanation:
      "The @WebSocketGateway() decorator enables real-time bidirectional communication using WebSockets. It is commonly used for chat applications, notifications, collaborative editing, and live dashboards.",
    points: 20,
    timeLimit: 60,
    tags: [
      "nestjs",
      "websockets",
      "gateway",
      "realtime",
    ],
  },

  {
    id: 44,
    category: "NestJS",
    difficulty: "Expert",
    question: "Why do developers integrate GraphQL with NestJS?",
    options: [
      "GraphQL completely replaces TypeScript.",
      "GraphQL allows clients to request exactly the data they need through a strongly typed schema.",
      "GraphQL only works with MongoDB.",
      "GraphQL is faster than every REST API in every scenario.",
    ],
    correctAnswer:
      "GraphQL allows clients to request exactly the data they need through a strongly typed schema.",
    explanation:
      "NestJS provides first-class GraphQL support using Apollo Server or Mercurius, enabling type-safe schemas, efficient data fetching, and flexible client queries.",
    points: 20,
    timeLimit: 60,
    tags: [
      "nestjs",
      "graphql",
      "apollo",
      "api",
    ],
  },

  {
    id: 45,
    category: "NestJS",
    difficulty: "Expert",
    question: "What is the primary purpose of the CQRS (Command Query Responsibility Segregation) pattern?",
    options: [
      "To replace dependency injection.",
      "To separate read operations from write operations, improving scalability and maintainability.",
      "To eliminate databases.",
      "To replace REST APIs.",
    ],
    correctAnswer:
      "To separate read operations from write operations, improving scalability and maintainability.",
    explanation:
      "CQRS separates commands (write operations) from queries (read operations), making complex systems easier to optimize, scale, and maintain independently.",
    points: 20,
    timeLimit: 65,
    tags: [
      "nestjs",
      "cqrs",
      "architecture",
      "design-pattern",
    ],
  },

  {
    id: 46,
    category: "NestJS",
    difficulty: "Expert",
    question: "What best describes an Event-Driven Architecture?",
    options: [
      "Services communicate primarily by publishing and consuming events.",
      "Every service directly calls every other service.",
      "Only synchronous HTTP requests are used.",
      "Events replace databases completely.",
    ],
    correctAnswer:
      "Services communicate primarily by publishing and consuming events.",
    explanation:
      "In an event-driven architecture, services communicate asynchronously through events, improving decoupling, scalability, and resilience. Technologies such as Kafka, RabbitMQ, and NATS are commonly used.",
    points: 20,
    timeLimit: 65,
    tags: [
      "nestjs",
      "event-driven",
      "events",
      "microservices",
    ],
  },

  {
    id: 47,
    category: "NestJS",
    difficulty: "Expert",
    question: "Why is Redis commonly integrated into NestJS applications?",
    options: [
      "To replace relational databases.",
      "To provide high-speed caching, session storage, distributed locks, and pub/sub messaging.",
      "To compile TypeScript code.",
      "To perform API validation.",
    ],
    correctAnswer:
      "To provide high-speed caching, session storage, distributed locks, and pub/sub messaging.",
    explanation:
      "Redis is an in-memory data store commonly used for caching frequently accessed data, managing sessions, implementing rate limiting, and enabling publish/subscribe messaging.",
    points: 20,
    timeLimit: 60,
    tags: [
      "nestjs",
      "redis",
      "cache",
      "performance",
    ],
  },

  {
    id: 48,
    category: "NestJS",
    difficulty: "Expert",
    question: "Which testing framework is used by default in NestJS projects for Unit and End-to-End (E2E) testing?",
    options: [
      "Mocha",
      "Vitest",
      "Jest",
      "Cypress",
    ],
    correctAnswer: "Jest",
    explanation:
      "NestJS ships with Jest by default for unit testing and end-to-end testing, providing mocks, assertions, spies, snapshots, and coverage reporting.",
    points: 20,
    timeLimit: 60,
    tags: [
      "nestjs",
      "jest",
      "unit-testing",
      "e2e-testing",
    ],
  },

  {
    id: 49,
    category: "NestJS",
    difficulty: "Expert",
    question: "Which approach is generally considered a best practice for improving the performance and scalability of a production NestJS application?",
    options: [
      "Place all application logic inside controllers.",
      "Use caching, asynchronous processing, database indexing, connection pooling, efficient queries, and horizontal scaling.",
      "Disable validation and authentication.",
      "Store every request entirely in memory.",
    ],
    correctAnswer:
      "Use caching, asynchronous processing, database indexing, connection pooling, efficient queries, and horizontal scaling.",
    explanation:
      "Production-grade NestJS applications achieve scalability through techniques such as Redis caching, queues, optimized database queries, proper indexing, connection pooling, load balancing, and stateless services.",
    points: 20,
    timeLimit: 70,
    tags: [
      "nestjs",
      "performance",
      "scaling",
      "optimization",
      "production",
    ],
  },

  {
    id: 50,
    category: "NestJS",
    difficulty: "Expert",
    question: "You're designing a production-grade SaaS platform expected to handle millions of users. Which architecture is generally considered the most appropriate?",
    options: [
      "A single controller containing all business logic and database queries.",
      "A modular, layered architecture using Dependency Injection, authentication, caching, background jobs, observability, database transactions, and microservices where appropriate.",
      "A project without modules because it is simpler.",
      "Keeping secrets directly inside source code for faster deployment.",
    ],
    correctAnswer:
      "A modular, layered architecture using Dependency Injection, authentication, caching, background jobs, observability, database transactions, and microservices where appropriate.",
    explanation:
      "Large-scale NestJS applications benefit from modular architecture, clean separation of concerns, Dependency Injection, secure authentication, centralized configuration, logging, monitoring, caching, background processing, database transactions, and, when justified, microservices. These practices improve maintainability, scalability, resilience, and long-term development.",
    points: 20,
    timeLimit: 75,
    tags: [
      "nestjs",
      "architecture",
      "microservices",
      "performance",
      "security",
      "production",
      "interview",
      "senior-developer",
    ],
  },
];

export default nestQuestions;