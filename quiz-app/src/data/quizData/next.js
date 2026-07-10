const nextjsQuestions = [
  {
    id: 1,
    category: "Next.js",
    difficulty: "Easy",
    question: "What is Next.js?",
    options: [
      "A CSS framework for styling web applications",
      "A progressive React framework for building full-stack web applications",
      "A database management system",
      "A JavaScript testing framework",
    ],
    correctAnswer:
      "A progressive React framework for building full-stack web applications",
    explanation:
      "Next.js is a React framework developed by Vercel that provides features such as file-based routing, server-side rendering, static site generation, API routes, image optimization, and many other production-ready capabilities for building modern web applications.",
    points: 5,
    timeLimit: 30,
    tags: ["nextjs", "react", "framework", "basics"],
  },

  {
    id: 2,
    category: "Next.js",
    difficulty: "Easy",
    question: "Who developed and maintains Next.js?",
    options: [
      "Meta (Facebook)",
      "Google",
      "Vercel",
      "Microsoft",
    ],
    correctAnswer: "Vercel",
    explanation:
      "Next.js was created and is actively maintained by Vercel. It is one of the most popular React frameworks for building production-ready applications.",
    points: 5,
    timeLimit: 30,
    tags: ["nextjs", "vercel", "history"],
  },

  {
    id: 3,
    category: "Next.js",
    difficulty: "Easy",
    question: "Which command is commonly used to create a new Next.js project?",
    options: [
      "npm create next-app",
      "npx create-next-app@latest",
      "next new app",
      "npm install next-app",
    ],
    correctAnswer: "npx create-next-app@latest",
    explanation:
      "The recommended way to create a new Next.js application is by using 'npx create-next-app@latest', which scaffolds a complete project with the latest stable version.",
    points: 5,
    timeLimit: 30,
    tags: ["nextjs", "cli", "setup"],
  },

  {
    id: 4,
    category: "Next.js",
    difficulty: "Easy",
    question: "What is one of the biggest advantages of using Next.js over plain React?",
    options: [
      "It removes the need for JavaScript.",
      "It provides built-in routing, rendering strategies, and backend capabilities.",
      "It only works with TypeScript.",
      "It automatically creates databases.",
    ],
    correctAnswer:
      "It provides built-in routing, rendering strategies, and backend capabilities.",
    explanation:
      "Unlike a standard React application, Next.js includes many production-ready features such as file-based routing, server-side rendering, static generation, API routes, middleware, image optimization, and more.",
    points: 5,
    timeLimit: 30,
    tags: ["nextjs", "react", "features"],
  },

  {
    id: 5,
    category: "Next.js",
    difficulty: "Easy",
    question: "Which routing system is used by default in modern Next.js applications?",
    options: [
      "React Router",
      "Vue Router",
      "App Router",
      "Angular Router",
    ],
    correctAnswer: "App Router",
    explanation:
      "Modern Next.js applications use the App Router introduced in Next.js 13. It is based on the app directory and supports layouts, nested routing, loading UI, server components, and more.",
    points: 5,
    timeLimit: 30,
    tags: ["nextjs", "app-router", "routing"],
  },

  {
    id: 6,
    category: "Next.js",
    difficulty: "Easy",
    question: "What is File-based Routing in Next.js?",
    options: [
      "Routes are created manually inside JavaScript objects.",
      "Routes are automatically generated from the folder and file structure.",
      "Routes are stored inside a database.",
      "Routes are configured only in next.config.js.",
    ],
    correctAnswer:
      "Routes are automatically generated from the folder and file structure.",
    explanation:
      "Next.js automatically creates application routes based on files and folders inside the app or pages directory, eliminating the need for manually configuring routes.",
    points: 5,
    timeLimit: 35,
    tags: ["nextjs", "routing", "file-based-routing"],
  },

  {
    id: 7,
    category: "Next.js",
    difficulty: "Easy",
    question: "What does Server-Side Rendering (SSR) mean in Next.js?",
    options: [
      "HTML is generated in the user's browser.",
      "HTML is generated on the server for every request before being sent to the client.",
      "JavaScript is disabled completely.",
      "Pages are always generated during build time.",
    ],
    correctAnswer:
      "HTML is generated on the server for every request before being sent to the client.",
    explanation:
      "Server-Side Rendering generates the HTML on the server whenever a request is made. This improves SEO, provides fresh data, and reduces the amount of work required in the browser.",
    points: 5,
    timeLimit: 35,
    tags: ["nextjs", "ssr", "rendering"],
  },

  {
    id: 8,
    category: "Next.js",
    difficulty: "Easy",
    question: "What is Static Site Generation (SSG) in Next.js?",
    options: [
      "Pages are generated at build time and served as static HTML.",
      "Pages are generated every time a user visits the website.",
      "Pages are rendered only inside the browser.",
      "Pages require a database connection for every request.",
    ],
    correctAnswer:
      "Pages are generated at build time and served as static HTML.",
    explanation:
      "Static Site Generation creates HTML during the build process. These pages are served quickly through a CDN, resulting in excellent performance and SEO for content that doesn't change frequently.",
    points: 5,
    timeLimit: 35,
    tags: ["nextjs", "ssg", "static-generation"],
  },

  {
    id: 9,
    category: "Next.js",
    difficulty: "Easy",
    question: "What is Incremental Static Regeneration (ISR)?",
    options: [
      "A technique that updates static pages after deployment without rebuilding the entire application.",
      "A JavaScript compiler for React.",
      "A replacement for React Hooks.",
      "A feature that disables caching completely.",
    ],
    correctAnswer:
      "A technique that updates static pages after deployment without rebuilding the entire application.",
    explanation:
      "Incremental Static Regeneration allows static pages to be regenerated in the background after a specified interval, combining the speed of static pages with fresh content updates.",
    points: 5,
    timeLimit: 35,
    tags: ["nextjs", "isr", "revalidation"],
  },

  {
    id: 10,
    category: "Next.js",
    difficulty: "Easy",
    question: "Which rendering strategy executes React components entirely inside the user's browser after the initial page load?",
    options: [
      "Server-Side Rendering (SSR)",
      "Static Site Generation (SSG)",
      "Client-Side Rendering (CSR)",
      "Incremental Static Regeneration (ISR)",
    ],
    correctAnswer: "Client-Side Rendering (CSR)",
    explanation:
      "Client-Side Rendering loads a minimal HTML page first and then uses JavaScript to render the application in the browser. It is commonly used for highly interactive dashboards and applications where SEO is less critical.",
    points: 5,
    timeLimit: 35,
    tags: ["nextjs", "csr", "rendering", "client-side"],
  },
    {
    id: 11,
    category: "Next.js",
    difficulty: "Easy",
    question: "What is the primary purpose of Dynamic Routing in Next.js?",
    options: [
      "To create routes whose URL segments are determined at runtime",
      "To automatically generate CSS files",
      "To improve image compression",
      "To connect directly to databases",
    ],
    correctAnswer:
      "To create routes whose URL segments are determined at runtime",
    explanation:
      "Dynamic Routes allow pages to handle variable URL segments using folders like [id], [slug], or [...params]. They are commonly used for blogs, product pages, user profiles, and other dynamic content.",
    points: 5,
    timeLimit: 30,
    tags: ["nextjs", "dynamic-routes", "routing"],
  },

  {
    id: 12,
    category: "Next.js",
    difficulty: "Easy",
    question: "In the App Router, which folder name creates a dynamic route parameter?",
    options: [
      "(id)",
      "{id}",
      "[id]",
      "<id>",
    ],
    correctAnswer: "[id]",
    explanation:
      "Wrapping a folder name in square brackets, such as [id], creates a dynamic route segment that can capture values directly from the URL.",
    points: 5,
    timeLimit: 30,
    tags: ["nextjs", "app-router", "dynamic-routing"],
  },

  {
    id: 13,
    category: "Next.js",
    difficulty: "Medium",
    question: "What are Nested Routes in Next.js?",
    options: [
      "Routes stored inside a database",
      "Routes automatically created through nested folders",
      "Routes that only work with API endpoints",
      "Routes that require React Router",
    ],
    correctAnswer:
      "Routes automatically created through nested folders",
    explanation:
      "The App Router uses the folder structure to generate nested routes. For example, app/dashboard/settings/page.js creates the route /dashboard/settings.",
    points: 10,
    timeLimit: 35,
    tags: ["nextjs", "nested-routes", "app-router"],
  },

  {
    id: 14,
    category: "Next.js",
    difficulty: "Medium",
    question: "What is the primary purpose of Route Groups in Next.js?",
    options: [
      "To organize routes without affecting the URL structure",
      "To secure API endpoints",
      "To create database relationships",
      "To optimize images",
    ],
    correctAnswer:
      "To organize routes without affecting the URL structure",
    explanation:
      "Route Groups use folders wrapped in parentheses, such as (marketing), allowing developers to organize related routes without changing the generated URL paths.",
    points: 10,
    timeLimit: 35,
    tags: ["nextjs", "route-groups", "organization"],
  },

  {
    id: 15,
    category: "Next.js",
    difficulty: "Medium",
    question: "What is the purpose of layout.js in the App Router?",
    options: [
      "To define reusable UI shared across multiple pages",
      "To configure environment variables",
      "To generate API endpoints",
      "To compile JavaScript files",
    ],
    correctAnswer:
      "To define reusable UI shared across multiple pages",
    explanation:
      "Layouts persist between page navigations and are ideal for shared components like headers, sidebars, navigation menus, and footers.",
    points: 10,
    timeLimit: 35,
    tags: ["nextjs", "layouts", "app-router"],
  },

  {
    id: 16,
    category: "Next.js",
    difficulty: "Medium",
    question: "How does template.js differ from layout.js in the App Router?",
    options: [
      "Templates persist between navigations while layouts remount.",
      "Templates remount on every navigation, while layouts persist.",
      "There is no difference.",
      "Templates are only used for API routes.",
    ],
    correctAnswer:
      "Templates remount on every navigation, while layouts persist.",
    explanation:
      "Unlike layouts, templates create a fresh instance whenever navigation occurs. This is useful when component state should reset between page transitions.",
    points: 10,
    timeLimit: 40,
    tags: ["nextjs", "template", "layout"],
  },

  {
    id: 17,
    category: "Next.js",
    difficulty: "Medium",
    question: "What is the purpose of loading.js in the App Router?",
    options: [
      "To define database loading logic",
      "To display an automatic loading UI while a route is rendering",
      "To optimize JavaScript bundles",
      "To preload CSS files",
    ],
    correctAnswer:
      "To display an automatic loading UI while a route is rendering",
    explanation:
      "loading.js provides an instant loading state using React Suspense while server components or asynchronous data are being loaded.",
    points: 10,
    timeLimit: 35,
    tags: ["nextjs", "loading-ui", "suspense"],
  },

  {
    id: 18,
    category: "Next.js",
    difficulty: "Hard",
    question: "What is the purpose of error.js in the App Router?",
    options: [
      "To define global CSS styles",
      "To catch and display errors within a route segment",
      "To validate API requests",
      "To optimize application performance",
    ],
    correctAnswer:
      "To catch and display errors within a route segment",
    explanation:
      "The error.js file acts as a React Error Boundary for its route segment, allowing graceful recovery and custom error interfaces instead of application crashes.",
    points: 15,
    timeLimit: 45,
    tags: ["nextjs", "error-boundary", "error-handling"],
  },

  {
    id: 19,
    category: "Next.js",
    difficulty: "Hard",
    question: "Which special file is used to display a custom 404 page in the App Router?",
    options: [
      "404.js",
      "missing.js",
      "not-found.js",
      "error404.js",
    ],
    correctAnswer: "not-found.js",
    explanation:
      "The not-found.js file renders a custom page whenever the requested route or resource cannot be found, improving user experience over the default 404 page.",
    points: 15,
    timeLimit: 45,
    tags: ["nextjs", "404", "not-found"],
  },

  {
    id: 20,
    category: "Next.js",
    difficulty: "Expert",
    question: "Which component should generally be used for internal navigation between pages in a Next.js application?",
    options: [
      "<a>",
      "<Link>",
      "<Router>",
      "<Navigate>",
    ],
    correctAnswer: "<Link>",
    explanation:
      "The Next.js <Link> component enables fast client-side navigation by prefetching pages in the background, reducing load times and providing a smoother user experience compared to traditional anchor tags.",
    points: 20,
    timeLimit: 60,
    tags: [
      "nextjs",
      "link",
      "navigation",
      "prefetching",
      "routing",
    ],
  },

    {
    id: 21,
    category: "Next.js",
    difficulty: "Medium",
    question: "What are Server Components in Next.js?",
    options: [
      "Components that run only in the browser",
      "Components that are rendered on the server by default and can access backend resources directly",
      "Components used only for API routes",
      "Components that replace React components",
    ],
    correctAnswer:
      "Components that are rendered on the server by default and can access backend resources directly",
    explanation:
      "Server Components are rendered on the server, reducing the amount of JavaScript sent to the client. They can directly access databases, APIs, and server-side resources without exposing sensitive logic to the browser.",
    points: 10,
    timeLimit: 35,
    tags: ["nextjs", "server-components", "app-router"],
  },

  {
    id: 22,
    category: "Next.js",
    difficulty: "Medium",
    question: "What are Client Components in Next.js?",
    options: [
      "Components rendered only on the server",
      "Components that support browser APIs, state, effects, and event handlers",
      "Components used only for API endpoints",
      "Components that cannot use React Hooks",
    ],
    correctAnswer:
      "Components that support browser APIs, state, effects, and event handlers",
    explanation:
      "Client Components execute in the browser and are required whenever you use React Hooks like useState, useEffect, browser APIs, or event handlers such as onClick.",
    points: 10,
    timeLimit: 35,
    tags: ["nextjs", "client-components", "react"],
  },

  {
    id: 23,
    category: "Next.js",
    difficulty: "Medium",
    question: "Which directive marks a component as a Client Component in the App Router?",
    options: [
      "'use server'",
      "'use browser'",
      "'use client'",
      "'client only'",
    ],
    correctAnswer: "'use client'",
    explanation:
      "Adding the 'use client' directive at the top of a file tells Next.js to render that component on the client, enabling hooks, event handling, and browser-specific APIs.",
    points: 10,
    timeLimit: 35,
    tags: ["nextjs", "use-client", "client-components"],
  },

  {
    id: 24,
    category: "Next.js",
    difficulty: "Medium",
    question: "What is the recommended way to fetch data inside a Server Component?",
    options: [
      "Using useEffect()",
      "Using fetch() directly inside the async component",
      "Using axios inside componentDidMount()",
      "Using Redux actions only",
    ],
    correctAnswer:
      "Using fetch() directly inside the async component",
    explanation:
      "Server Components can be asynchronous, allowing developers to call fetch() directly without using useEffect or client-side state management.",
    points: 10,
    timeLimit: 40,
    tags: ["nextjs", "fetch", "server-components", "data-fetching"],
  },

  {
    id: 25,
    category: "Next.js",
    difficulty: "Hard",
    question: "How does the built-in fetch() API improve performance in Next.js?",
    options: [
      "It automatically compresses JavaScript files.",
      "It supports caching, request deduplication, and revalidation.",
      "It replaces React Hooks.",
      "It only works on the client side.",
    ],
    correctAnswer:
      "It supports caching, request deduplication, and revalidation.",
    explanation:
      "Next.js extends the standard fetch() API with intelligent caching, request deduplication, and configurable revalidation strategies, improving both performance and scalability.",
    points: 15,
    timeLimit: 45,
    tags: ["nextjs", "fetch", "cache", "performance"],
  },

  {
    id: 26,
    category: "Next.js",
    difficulty: "Hard",
    question: "What is data revalidation in Next.js?",
    options: [
      "Deleting cached pages permanently",
      "Refreshing cached content after a specified interval or on demand",
      "Compiling React components",
      "Creating API routes automatically",
    ],
    correctAnswer:
      "Refreshing cached content after a specified interval or on demand",
    explanation:
      "Revalidation allows cached pages or fetched data to remain fast while still receiving fresh updates either after a configured time interval or when explicitly triggered.",
    points: 15,
    timeLimit: 45,
    tags: ["nextjs", "revalidation", "isr", "cache"],
  },

  {
    id: 27,
    category: "Next.js",
    difficulty: "Hard",
    question: "What is the purpose of generateStaticParams() in the App Router?",
    options: [
      "To generate API endpoints",
      "To pre-generate dynamic routes during the build process",
      "To configure middleware",
      "To optimize images",
    ],
    correctAnswer:
      "To pre-generate dynamic routes during the build process",
    explanation:
      "generateStaticParams() replaces getStaticPaths() from the Pages Router. It defines which dynamic routes should be statically generated during the build.",
    points: 15,
    timeLimit: 45,
    tags: ["nextjs", "generateStaticParams", "ssg", "dynamic-routes"],
  },

  {
    id: 28,
    category: "Next.js",
    difficulty: "Hard",
    question: "What is the purpose of generateMetadata() in the App Router?",
    options: [
      "To create database schemas",
      "To dynamically generate SEO metadata such as title and description",
      "To configure API authentication",
      "To optimize JavaScript bundles",
    ],
    correctAnswer:
      "To dynamically generate SEO metadata such as title and description",
    explanation:
      "generateMetadata() enables dynamic generation of metadata including page titles, descriptions, Open Graph tags, and Twitter cards based on route data.",
    points: 15,
    timeLimit: 50,
    tags: ["nextjs", "metadata", "seo"],
  },

  {
    id: 29,
    category: "Next.js",
    difficulty: "Expert",
    question: "What are Server Actions in Next.js?",
    options: [
      "Functions that execute securely on the server without requiring a traditional API endpoint",
      "Functions that only run in the browser",
      "Functions used exclusively for routing",
      "Functions that replace React components",
    ],
    correctAnswer:
      "Functions that execute securely on the server without requiring a traditional API endpoint",
    explanation:
      "Server Actions allow forms and client components to invoke server-side logic directly, simplifying data mutations while reducing the need for custom REST or GraphQL endpoints.",
    points: 20,
    timeLimit: 60,
    tags: [
      "nextjs",
      "server-actions",
      "forms",
      "app-router",
      "backend",
    ],
  },

  {
    id: 30,
    category: "Next.js",
    difficulty: "Expert",
    question: "What is Streaming in Next.js?",
    options: [
      "Loading the entire page only after all data has been fetched",
      "Sending parts of the UI to the browser as they become ready instead of waiting for the complete page",
      "Uploading files to cloud storage",
      "Streaming videos through HTML5",
    ],
    correctAnswer:
      "Sending parts of the UI to the browser as they become ready instead of waiting for the complete page",
    explanation:
      "Streaming works with React Suspense to progressively render page content. Users can begin interacting with available sections while slower components continue loading, improving perceived performance and user experience.",
    points: 20,
    timeLimit: 60,
    tags: [
      "nextjs",
      "streaming",
      "react-suspense",
      "performance",
      "server-components",
    ],
  },
    {
    id: 31,
    category: "Next.js",
    difficulty: "Hard",
    question: "What are API Routes (Route Handlers) in Next.js?",
    options: [
      "React components used for page navigation",
      "Server-side endpoints that allow you to build backend APIs within a Next.js application",
      "CSS modules for styling pages",
      "Special folders used only for static assets",
    ],
    correctAnswer:
      "Server-side endpoints that allow you to build backend APIs within a Next.js application",
    explanation:
      "Route Handlers enable developers to build RESTful APIs directly inside a Next.js application without requiring a separate backend server. They support HTTP methods such as GET, POST, PUT, PATCH, and DELETE.",
    points: 15,
    timeLimit: 45,
    tags: ["nextjs", "api-routes", "route-handlers", "backend"],
  },

  {
    id: 32,
    category: "Next.js",
    difficulty: "Hard",
    question: "Which file is commonly used to define Route Handlers in the App Router?",
    options: [
      "api.js",
      "handler.js",
      "route.js",
      "server.js",
    ],
    correctAnswer: "route.js",
    explanation:
      "In the App Router, API endpoints are created using route.js (or route.ts). These files export HTTP methods like GET(), POST(), PUT(), PATCH(), and DELETE() to handle incoming requests.",
    points: 15,
    timeLimit: 45,
    tags: ["nextjs", "route-handler", "route.js", "api"],
  },

  {
    id: 33,
    category: "Next.js",
    difficulty: "Hard",
    question: "What is the primary purpose of Middleware in Next.js?",
    options: [
      "Rendering React components",
      "Running logic before a request is completed, such as authentication, redirects, rewrites, or localization",
      "Managing component state",
      "Creating database migrations",
    ],
    correctAnswer:
      "Running logic before a request is completed, such as authentication, redirects, rewrites, or localization",
    explanation:
      "Middleware executes before a request reaches a route, allowing developers to implement authentication, authorization, redirects, URL rewrites, localization, analytics, and request preprocessing.",
    points: 15,
    timeLimit: 45,
    tags: ["nextjs", "middleware", "authentication", "routing"],
  },

  {
    id: 34,
    category: "Next.js",
    difficulty: "Hard",
    question: "How are cookies commonly accessed in the Next.js App Router?",
    options: [
      "document.cookie",
      "cookies() from next/headers",
      "window.cookies",
      "useCookie()",
    ],
    correctAnswer: "cookies() from next/headers",
    explanation:
      "The cookies() function provided by next/headers allows Server Components, Route Handlers, and Server Actions to securely read and modify HTTP cookies on the server.",
    points: 15,
    timeLimit: 45,
    tags: ["nextjs", "cookies", "next-headers", "server"],
  },

  {
    id: 35,
    category: "Next.js",
    difficulty: "Hard",
    question: "Why is the headers() function from next/headers commonly used?",
    options: [
      "To optimize images",
      "To access incoming HTTP request headers on the server",
      "To generate CSS dynamically",
      "To create React Hooks",
    ],
    correctAnswer:
      "To access incoming HTTP request headers on the server",
    explanation:
      "The headers() function allows Server Components and Route Handlers to inspect request headers for purposes such as authentication, localization, analytics, feature flags, and device detection.",
    points: 15,
    timeLimit: 45,
    tags: ["nextjs", "headers", "request", "server"],
  },

  {
    id: 36,
    category: "Next.js",
    difficulty: "Hard",
    question: "What is the primary goal of authentication in a Next.js application?",
    options: [
      "Improving SEO",
      "Verifying a user's identity before granting access to protected resources",
      "Compressing JavaScript bundles",
      "Generating static pages",
    ],
    correctAnswer:
      "Verifying a user's identity before granting access to protected resources",
    explanation:
      "Authentication ensures that only verified users can access protected pages, APIs, and application features. It is commonly implemented using sessions, JWTs, OAuth providers, or authentication libraries such as Auth.js.",
    points: 15,
    timeLimit: 45,
    tags: ["nextjs", "authentication", "security"],
  },

  {
    id: 37,
    category: "Next.js",
    difficulty: "Expert",
    question: "Why are JSON Web Tokens (JWTs) commonly used in Next.js authentication?",
    options: [
      "They automatically create database tables.",
      "They provide a secure, stateless way to authenticate users across requests.",
      "They replace React components.",
      "They improve CSS performance.",
    ],
    correctAnswer:
      "They provide a secure, stateless way to authenticate users across requests.",
    explanation:
      "JWTs contain signed user information that can be verified without maintaining server-side sessions, making them ideal for APIs, microservices, and distributed applications.",
    points: 20,
    timeLimit: 60,
    tags: [
      "nextjs",
      "jwt",
      "authentication",
      "security",
      "api",
    ],
  },

  {
    id: 38,
    category: "Next.js",
    difficulty: "Expert",
    question: "What is the primary purpose of Auth.js (formerly NextAuth.js) in a Next.js application?",
    options: [
      "Generating CSS automatically",
      "Providing authentication with OAuth providers, credentials, sessions, and JWT support",
      "Managing React state",
      "Building REST APIs",
    ],
    correctAnswer:
      "Providing authentication with OAuth providers, credentials, sessions, and JWT support",
    explanation:
      "Auth.js simplifies authentication by supporting providers such as Google, GitHub, Microsoft, Facebook, Credentials, Email, and many others while handling sessions and security best practices.",
    points: 20,
    timeLimit: 60,
    tags: [
      "nextjs",
      "authjs",
      "nextauth",
      "oauth",
      "authentication",
    ],
  },

  {
    id: 39,
    category: "Next.js",
    difficulty: "Expert",
    question: "Why should sensitive configuration values such as API keys and database credentials be stored in environment variables?",
    options: [
      "To make deployment slower",
      "To improve JavaScript compilation",
      "To keep secrets outside the source code and manage configuration securely across environments",
      "To reduce CSS bundle size",
    ],
    correctAnswer:
      "To keep secrets outside the source code and manage configuration securely across environments",
    explanation:
      "Environment variables allow applications to securely manage secrets and environment-specific configuration without exposing sensitive information in the codebase or version control.",
    points: 20,
    timeLimit: 60,
    tags: [
      "nextjs",
      "environment-variables",
      ".env",
      "security",
      "configuration",
    ],
  },

  {
    id: 40,
    category: "Next.js",
    difficulty: "Expert",
    question: "Why is the Next.js Image component (next/image) preferred over a standard HTML <img> tag in most production applications?",
    options: [
      "It only works on Vercel.",
      "It automatically optimizes images with lazy loading, responsive sizing, modern formats, and performance enhancements.",
      "It replaces CSS styling.",
      "It stores images inside the browser cache permanently.",
    ],
    correctAnswer:
      "It automatically optimizes images with lazy loading, responsive sizing, modern formats, and performance enhancements.",
    explanation:
      "The next/image component improves performance by automatically optimizing images, generating responsive sizes, serving modern formats when supported, reducing layout shift, and enabling lazy loading. These optimizations contribute significantly to better Core Web Vitals and user experience.",
    points: 20,
    timeLimit: 70,
    tags: [
      "nextjs",
      "next-image",
      "image-optimization",
      "performance",
      "core-web-vitals",
    ],
  },
    {
    id: 41,
    category: "Next.js",
    difficulty: "Expert",
    question: "What is Partial Prerendering (PPR) in Next.js?",
    options: [
      "A feature that prerenders only CSS files",
      "A rendering strategy that combines static and dynamic rendering within the same page",
      "A replacement for Server Components",
      "A method for compressing JavaScript bundles",
    ],
    correctAnswer:
      "A rendering strategy that combines static and dynamic rendering within the same page",
    explanation:
      "Partial Prerendering (PPR) allows parts of a page to be statically prerendered while dynamic sections are streamed later. This combines the fast loading of static pages with the flexibility of dynamic content, improving both performance and user experience.",
    points: 20,
    timeLimit: 60,
    tags: [
      "nextjs",
      "partial-prerendering",
      "ppr",
      "performance",
      "rendering",
    ],
  },

  {
    id: 42,
    category: "Next.js",
    difficulty: "Expert",
    question: "What is the Edge Runtime in Next.js?",
    options: [
      "A browser extension for React",
      "A lightweight runtime that executes code closer to users at edge locations",
      "A replacement for Node.js",
      "A CSS optimization engine",
    ],
    correctAnswer:
      "A lightweight runtime that executes code closer to users at edge locations",
    explanation:
      "The Edge Runtime allows middleware and route handlers to run on globally distributed edge servers, reducing latency and improving response times for users around the world.",
    points: 20,
    timeLimit: 60,
    tags: [
      "nextjs",
      "edge-runtime",
      "middleware",
      "performance",
      "deployment",
    ],
  },

  {
    id: 43,
    category: "Next.js",
    difficulty: "Expert",
    question: "What is Turbopack in Next.js?",
    options: [
      "A database management tool",
      "A high-performance Rust-based bundler designed to replace Webpack during development",
      "A React state management library",
      "A serverless deployment platform",
    ],
    correctAnswer:
      "A high-performance Rust-based bundler designed to replace Webpack during development",
    explanation:
      "Turbopack is Vercel's next-generation bundler written in Rust. It offers significantly faster incremental builds, hot module replacement (HMR), and development startup times compared to traditional bundlers.",
    points: 20,
    timeLimit: 60,
    tags: [
      "nextjs",
      "turbopack",
      "webpack",
      "bundler",
      "performance",
    ],
  },

  {
    id: 44,
    category: "Next.js",
    difficulty: "Expert",
    question: "Which combination of practices is considered best for optimizing a production Next.js application's performance?",
    options: [
      "Disable caching and render everything on the client",
      "Use image optimization, code splitting, caching, lazy loading, Server Components, and efficient data fetching",
      "Store all data inside localStorage",
      "Use only Client Components throughout the application",
    ],
    correctAnswer:
      "Use image optimization, code splitting, caching, lazy loading, Server Components, and efficient data fetching",
    explanation:
      "Production-grade Next.js applications achieve excellent performance by combining Server Components, automatic code splitting, optimized images, caching, lazy loading, streaming, and efficient database or API access.",
    points: 20,
    timeLimit: 65,
    tags: [
      "nextjs",
      "performance",
      "optimization",
      "caching",
      "best-practices",
    ],
  },

  {
    id: 45,
    category: "Next.js",
    difficulty: "Expert",
    question: "Why is Next.js considered an excellent framework for SEO?",
    options: [
      "Because it removes HTML completely",
      "Because it supports server-side rendering, static generation, metadata management, and optimized performance",
      "Because it only works with search engines",
      "Because it automatically ranks websites on Google",
    ],
    correctAnswer:
      "Because it supports server-side rendering, static generation, metadata management, and optimized performance",
    explanation:
      "Next.js improves SEO through features such as Server-Side Rendering (SSR), Static Site Generation (SSG), Metadata API, structured HTML, optimized images, fast loading, and excellent Core Web Vitals.",
    points: 20,
    timeLimit: 60,
    tags: [
      "nextjs",
      "seo",
      "ssr",
      "ssg",
      "metadata",
    ],
  },

  {
    id: 46,
    category: "Next.js",
    difficulty: "Expert",
    question: "What is the purpose of the Metadata API in the Next.js App Router?",
    options: [
      "To manage database relationships",
      "To define SEO-related metadata such as titles, descriptions, Open Graph tags, and Twitter cards",
      "To generate API documentation",
      "To optimize CSS files",
    ],
    correctAnswer:
      "To define SEO-related metadata such as titles, descriptions, Open Graph tags, and Twitter cards",
    explanation:
      "The Metadata API provides a centralized and type-safe way to configure page metadata, improving search engine optimization and social media sharing previews.",
    points: 20,
    timeLimit: 60,
    tags: [
      "nextjs",
      "metadata-api",
      "seo",
      "open-graph",
      "twitter-cards",
    ],
  },

  {
    id: 47,
    category: "Next.js",
    difficulty: "Expert",
    question: "What are Parallel Routes in the Next.js App Router?",
    options: [
      "Routes that execute database queries simultaneously",
      "Routes that allow multiple independent UI sections to render simultaneously within the same layout",
      "Routes that replace nested routing",
      "Routes used only for API endpoints",
    ],
    correctAnswer:
      "Routes that allow multiple independent UI sections to render simultaneously within the same layout",
    explanation:
      "Parallel Routes enable multiple route segments to render independently, making complex dashboards, admin panels, and multi-pane interfaces easier to build and maintain.",
    points: 20,
    timeLimit: 65,
    tags: [
      "nextjs",
      "parallel-routes",
      "app-router",
      "layouts",
      "advanced-routing",
    ],
  },

  {
    id: 48,
    category: "Next.js",
    difficulty: "Expert",
    question: "What is the purpose of Intercepting Routes in Next.js?",
    options: [
      "To block HTTP requests permanently",
      "To display another route's content within the current navigation context, such as opening a modal over an existing page",
      "To replace middleware functionality",
      "To optimize JavaScript bundles",
    ],
    correctAnswer:
      "To display another route's content within the current navigation context, such as opening a modal over an existing page",
    explanation:
      "Intercepting Routes allow developers to load content from another route without fully leaving the current page, making them ideal for modals, previews, and contextual navigation experiences.",
    points: 20,
    timeLimit: 65,
    tags: [
      "nextjs",
      "intercepting-routes",
      "routing",
      "modals",
      "app-router",
    ],
  },

  {
    id: 49,
    category: "Next.js",
    difficulty: "Expert",
    question: "Why is Vercel the recommended deployment platform for Next.js applications?",
    options: [
      "It only supports static websites.",
      "It provides first-class support for Next.js features such as automatic deployments, Edge Functions, serverless functions, image optimization, analytics, and global CDN distribution.",
      "It replaces Git repositories.",
      "It only works with TypeScript projects.",
    ],
    correctAnswer:
      "It provides first-class support for Next.js features such as automatic deployments, Edge Functions, serverless functions, image optimization, analytics, and global CDN distribution.",
    explanation:
      "Since Vercel develops Next.js, it offers seamless integration with Git providers, preview deployments, serverless infrastructure, Edge Runtime, global CDN, analytics, and automatic optimization for production applications.",
    points: 20,
    timeLimit: 70,
    tags: [
      "nextjs",
      "vercel",
      "deployment",
      "edge-functions",
      "production",
    ],
  },

  {
    id: 50,
    category: "Next.js",
    difficulty: "Expert",
    question: "You're designing a production-grade SaaS application expected to serve millions of users. Which architecture represents the best practice when building with Next.js?",
    options: [
      "Render everything on the client and place all business logic inside React components.",
      "Use a modular architecture with Server Components, Route Handlers, authentication, caching, streaming, optimized data fetching, observability, background jobs, CDN delivery, and scalable backend services where appropriate.",
      "Store sensitive API keys directly inside React components.",
      "Disable caching and generate every page dynamically regardless of use case.",
    ],
    correctAnswer:
      "Use a modular architecture with Server Components, Route Handlers, authentication, caching, streaming, optimized data fetching, observability, background jobs, CDN delivery, and scalable backend services where appropriate.",
    explanation:
      "Enterprise-scale Next.js applications benefit from clean architecture, Server Components, Route Handlers, authentication, caching, streaming, optimized rendering strategies, observability, secure environment management, CDN delivery, background processing, and scalable backend services or microservices when necessary. These practices improve maintainability, resilience, security, and long-term scalability.",
    points: 20,
    timeLimit: 75,
    tags: [
      "nextjs",
      "architecture",
      "production",
      "performance",
      "scalability",
      "security",
      "interview",
      "senior-developer",
    ],
  },
];

export default nextjsQuestions;