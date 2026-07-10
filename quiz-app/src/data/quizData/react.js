const reactQuestions = [
  {
    id: 1,
    category: "React",
    difficulty: "Easy",
    question: "What is React?",
    options: [
      "A relational database management system",
      "A JavaScript library for building user interfaces",
      "A CSS framework",
      "A backend runtime environment",
    ],
    correctAnswer:
      "A JavaScript library for building user interfaces",
    explanation:
      "React is an open-source JavaScript library developed by Meta for building fast, interactive, and reusable user interfaces using a component-based architecture. It is widely used for developing Single Page Applications (SPAs).",
    points: 5,
    timeLimit: 30,
    tags: ["react", "basics", "ui", "frontend"],
  },

  {
    id: 2,
    category: "React",
    difficulty: "Easy",
    question: "Who developed and currently maintains React?",
    options: [
      "Google",
      "Microsoft",
      "Meta (Facebook)",
      "Vercel",
    ],
    correctAnswer: "Meta (Facebook)",
    explanation:
      "React was originally developed by Facebook (now Meta) and is actively maintained by Meta along with a large open-source community.",
    points: 5,
    timeLimit: 30,
    tags: ["react", "meta", "history"],
  },

  {
    id: 3,
    category: "React",
    difficulty: "Easy",
    question: "What is the Virtual DOM in React?",
    options: [
      "A copy of the real DOM kept in memory to efficiently update the UI",
      "A browser extension",
      "A JavaScript compiler",
      "A CSS rendering engine",
    ],
    correctAnswer:
      "A copy of the real DOM kept in memory to efficiently update the UI",
    explanation:
      "The Virtual DOM is a lightweight representation of the real DOM. React compares the previous and current Virtual DOM (diffing) and updates only the changed elements, improving application performance.",
    points: 5,
    timeLimit: 30,
    tags: ["react", "virtual-dom", "performance"],
  },

  {
    id: 4,
    category: "React",
    difficulty: "Easy",
    question: "What is JSX in React?",
    options: [
      "A database query language",
      "A syntax extension for JavaScript that allows writing HTML-like code",
      "A CSS preprocessor",
      "A Node.js package manager",
    ],
    correctAnswer:
      "A syntax extension for JavaScript that allows writing HTML-like code",
    explanation:
      "JSX (JavaScript XML) allows developers to write HTML-like syntax inside JavaScript. It improves readability and is compiled into React.createElement() calls during the build process.",
    points: 5,
    timeLimit: 30,
    tags: ["react", "jsx", "syntax"],
  },

  {
    id: 5,
    category: "React",
    difficulty: "Easy",
    question: "What is a React Component?",
    options: [
      "A reusable, independent piece of UI that can contain its own logic and state",
      "A CSS stylesheet",
      "A database table",
      "A JavaScript compiler",
    ],
    correctAnswer:
      "A reusable, independent piece of UI that can contain its own logic and state",
    explanation:
      "Components are the building blocks of React applications. They encapsulate UI, behavior, and business logic, making applications modular, reusable, and easier to maintain.",
    points: 5,
    timeLimit: 30,
    tags: ["react", "components", "ui"],
  },

  {
    id: 6,
    category: "React",
    difficulty: "Easy",
    question: "What is the primary difference between Functional Components and Class Components?",
    options: [
      "Functional Components are functions and commonly use Hooks, while Class Components are ES6 classes with lifecycle methods.",
      "Functional Components cannot manage state.",
      "Class Components are required in React 18.",
      "There is no difference.",
    ],
    correctAnswer:
      "Functional Components are functions and commonly use Hooks, while Class Components are ES6 classes with lifecycle methods.",
    explanation:
      "Modern React applications primarily use Functional Components with Hooks such as useState() and useEffect(). Class Components were common before Hooks were introduced but are now less frequently used.",
    points: 5,
    timeLimit: 35,
    tags: ["react", "functional-components", "class-components"],
  },

  {
    id: 7,
    category: "React",
    difficulty: "Easy",
    question: "What are Props in React?",
    options: [
      "Variables used to style components",
      "Read-only inputs passed from a parent component to a child component",
      "Database records",
      "Global application state",
    ],
    correctAnswer:
      "Read-only inputs passed from a parent component to a child component",
    explanation:
      "Props (Properties) allow parent components to pass data and callbacks to child components. Props are immutable within the receiving component.",
    points: 5,
    timeLimit: 30,
    tags: ["react", "props", "components"],
  },

  {
    id: 8,
    category: "React",
    difficulty: "Easy",
    question: "What is State in React?",
    options: [
      "A read-only property passed from parent components",
      "Data managed within a component that can change over time and trigger UI updates",
      "A browser storage mechanism",
      "A CSS property",
    ],
    correctAnswer:
      "Data managed within a component that can change over time and trigger UI updates",
    explanation:
      "State represents mutable data managed by a component. When state changes, React automatically re-renders the component to reflect the updated UI.",
    points: 5,
    timeLimit: 30,
    tags: ["react", "state", "hooks"],
  },

  {
    id: 9,
    category: "React",
    difficulty: "Easy",
    question: "What does one-way data binding mean in React?",
    options: [
      "Data flows from child components to parent components automatically.",
      "Data flows in a single direction from parent components to child components.",
      "Components share state automatically.",
      "Data can only be stored in Redux.",
    ],
    correctAnswer:
      "Data flows in a single direction from parent components to child components.",
    explanation:
      "React follows one-way data flow, where parent components pass data down to child components via props. This predictable data flow simplifies debugging and state management.",
    points: 5,
    timeLimit: 35,
    tags: ["react", "one-way-data-binding", "props"],
  },

  {
    id: 10,
    category: "React",
    difficulty: "Easy",
    question: "What is the primary purpose of React Developer Tools?",
    options: [
      "To compile React applications",
      "To inspect component hierarchies, props, state, Hooks, and application performance during development",
      "To deploy applications to production",
      "To optimize database queries",
    ],
    correctAnswer:
      "To inspect component hierarchies, props, state, Hooks, and application performance during development",
    explanation:
      "React Developer Tools is a browser extension that helps developers inspect the component tree, monitor props and state, debug Hooks, profile rendering performance, and troubleshoot React applications efficiently.",
    points: 5,
    timeLimit: 35,
    tags: [
      "react",
      "developer-tools",
      "debugging",
      "profiling",
    ],
  },
    {
    id: 11,
    category: "React",
    difficulty: "Easy",
    question: "What is a Component Lifecycle in React?",
    options: [
      "The sequence of stages a component goes through from creation to removal",
      "A method for connecting to databases",
      "A React routing mechanism",
      "A CSS rendering process",
    ],
    correctAnswer:
      "The sequence of stages a component goes through from creation to removal",
    explanation:
      "A React component goes through mounting, updating, and unmounting phases during its lifetime. In Functional Components, Hooks like useEffect() are commonly used to perform lifecycle-related operations.",
    points: 5,
    timeLimit: 30,
    tags: ["react", "lifecycle", "components"],
  },

  {
    id: 12,
    category: "React",
    difficulty: "Easy",
    question: "What is the primary purpose of the useState() Hook?",
    options: [
      "To perform HTTP requests",
      "To manage state inside Functional Components",
      "To create routes",
      "To optimize rendering automatically",
    ],
    correctAnswer:
      "To manage state inside Functional Components",
    explanation:
      "useState() is one of React's fundamental Hooks. It allows Functional Components to store and update local state, causing the component to re-render whenever the state changes.",
    points: 5,
    timeLimit: 30,
    tags: ["react", "hooks", "useState", "state"],
  },

  {
    id: 13,
    category: "React",
    difficulty: "Medium",
    question: "What is the primary purpose of the useEffect() Hook?",
    options: [
      "To define CSS styles",
      "To handle side effects such as API calls, subscriptions, and timers",
      "To create global state",
      "To optimize images",
    ],
    correctAnswer:
      "To handle side effects such as API calls, subscriptions, and timers",
    explanation:
      "useEffect() is used for performing side effects after rendering, including fetching data, setting up subscriptions, interacting with browser APIs, and cleaning up resources when components unmount.",
    points: 10,
    timeLimit: 35,
    tags: ["react", "hooks", "useEffect", "side-effects"],
  },

  {
    id: 14,
    category: "React",
    difficulty: "Medium",
    question: "What is the purpose of the useRef() Hook?",
    options: [
      "To trigger component re-renders",
      "To store mutable values and directly reference DOM elements without causing re-renders",
      "To replace useState()",
      "To perform API requests",
    ],
    correctAnswer:
      "To store mutable values and directly reference DOM elements without causing re-renders",
    explanation:
      "useRef() returns a mutable object whose value persists across renders. It is commonly used for accessing DOM elements, storing timers, previous values, or other mutable references that should not trigger re-renders.",
    points: 10,
    timeLimit: 35,
    tags: ["react", "hooks", "useRef", "dom"],
  },

  {
    id: 15,
    category: "React",
    difficulty: "Medium",
    question: "Why is the useMemo() Hook used in React?",
    options: [
      "To create reusable components",
      "To memoize expensive calculations and avoid unnecessary recomputations",
      "To navigate between pages",
      "To manage global state",
    ],
    correctAnswer:
      "To memoize expensive calculations and avoid unnecessary recomputations",
    explanation:
      "useMemo() caches the result of an expensive computation and recomputes it only when its dependencies change, improving application performance.",
    points: 10,
    timeLimit: 35,
    tags: ["react", "hooks", "useMemo", "performance"],
  },

  {
    id: 16,
    category: "React",
    difficulty: "Medium",
    question: "What is the primary purpose of the useCallback() Hook?",
    options: [
      "To cache function references between renders",
      "To create HTTP requests",
      "To manage application routing",
      "To replace event handlers",
    ],
    correctAnswer:
      "To cache function references between renders",
    explanation:
      "useCallback() memoizes a function so that the same function reference is reused until its dependencies change. This helps prevent unnecessary child component re-renders.",
    points: 10,
    timeLimit: 40,
    tags: ["react", "hooks", "useCallback", "optimization"],
  },

  {
    id: 17,
    category: "React",
    difficulty: "Medium",
    question: "What is a Custom Hook in React?",
    options: [
      "A Hook provided by React Router",
      "A reusable JavaScript function that encapsulates stateful logic using React Hooks",
      "A CSS utility",
      "A Redux middleware",
    ],
    correctAnswer:
      "A reusable JavaScript function that encapsulates stateful logic using React Hooks",
    explanation:
      "Custom Hooks allow developers to extract and reuse component logic across multiple components. They always begin with the word 'use', such as useFetch() or useAuth().",
    points: 10,
    timeLimit: 40,
    tags: ["react", "custom-hooks", "hooks", "reusability"],
  },

  {
    id: 18,
    category: "React",
    difficulty: "Hard",
    question: "What is a Controlled Component in React?",
    options: [
      "A component whose form data is controlled by React state",
      "A component managed entirely by the browser",
      "A component without props",
      "A component that cannot be re-rendered",
    ],
    correctAnswer:
      "A component whose form data is controlled by React state",
    explanation:
      "In a Controlled Component, form values are stored in React state and updated using event handlers. This approach provides full control over validation, formatting, and user interactions.",
    points: 15,
    timeLimit: 45,
    tags: ["react", "forms", "controlled-components"],
  },

  {
    id: 19,
    category: "React",
    difficulty: "Hard",
    question: "What is an Uncontrolled Component in React?",
    options: [
      "A component whose form data is managed by the DOM instead of React state",
      "A component that cannot receive props",
      "A component without JSX",
      "A component that automatically uses Redux",
    ],
    correctAnswer:
      "A component whose form data is managed by the DOM instead of React state",
    explanation:
      "Uncontrolled Components rely on the browser's DOM to manage form values. Developers typically access these values using refs rather than React state.",
    points: 15,
    timeLimit: 45,
    tags: ["react", "forms", "uncontrolled-components", "useRef"],
  },

  {
    id: 20,
    category: "React",
    difficulty: "Expert",
    question: "What is the primary purpose of 'Lifting State Up' in React?",
    options: [
      "To move state into Redux automatically",
      "To move shared state to the nearest common parent so multiple components can access and synchronize it",
      "To optimize Virtual DOM rendering",
      "To replace React Hooks",
    ],
    correctAnswer:
      "To move shared state to the nearest common parent so multiple components can access and synchronize it",
    explanation:
      "Lifting State Up is a core React design pattern. When multiple sibling components need to share the same data, the state is moved to their closest common parent, making that parent the single source of truth and ensuring consistent UI updates.",
    points: 20,
    timeLimit: 60,
    tags: [
      "react",
      "lifting-state-up",
      "state-management",
      "components",
      "best-practices",
    ],
  },
    {
    id: 21,
    category: "React",
    difficulty: "Medium",
    question: "What is React Router?",
    options: [
      "A database management library",
      "A routing library that enables navigation between pages in React applications",
      "A CSS framework",
      "A package manager",
    ],
    correctAnswer:
      "A routing library that enables navigation between pages in React applications",
    explanation:
      "React Router is the most popular routing library for React. It enables client-side navigation without full page reloads, allowing developers to build Single Page Applications (SPAs) with multiple views.",
    points: 10,
    timeLimit: 35,
    tags: ["react", "react-router", "routing", "spa"],
  },

  {
    id: 22,
    category: "React",
    difficulty: "Medium",
    question: "What is the purpose of BrowserRouter in React Router?",
    options: [
      "To connect to a database",
      "To enable client-side routing using the browser's History API",
      "To optimize React rendering",
      "To manage application state",
    ],
    correctAnswer:
      "To enable client-side routing using the browser's History API",
    explanation:
      "BrowserRouter uses the HTML5 History API to keep the UI synchronized with the URL, allowing navigation without refreshing the entire page.",
    points: 10,
    timeLimit: 35,
    tags: ["react", "browserrouter", "routing"],
  },

  {
    id: 23,
    category: "React",
    difficulty: "Medium",
    question: "What are the Routes and Route components used for in React Router?",
    options: [
      "To define application styles",
      "To match URLs and render the appropriate React components",
      "To manage API requests",
      "To create reusable Hooks",
    ],
    correctAnswer:
      "To match URLs and render the appropriate React components",
    explanation:
      "The Routes component contains multiple Route components. Each Route maps a specific URL path to the component that should be rendered when that path is visited.",
    points: 10,
    timeLimit: 35,
    tags: ["react", "routes", "route", "routing"],
  },

  {
    id: 24,
    category: "React",
    difficulty: "Medium",
    question: "What is the primary difference between Link and NavLink in React Router?",
    options: [
      "There is no difference.",
      "NavLink automatically applies active styling when its route matches the current URL.",
      "Link only works in production.",
      "NavLink is used only for API routes.",
    ],
    correctAnswer:
      "NavLink automatically applies active styling when its route matches the current URL.",
    explanation:
      "Both Link and NavLink perform client-side navigation, but NavLink provides built-in support for detecting the active route, making it ideal for navigation menus.",
    points: 10,
    timeLimit: 40,
    tags: ["react", "link", "navlink", "routing"],
  },

  {
    id: 25,
    category: "React",
    difficulty: "Hard",
    question: "What is the purpose of the useNavigate() Hook in React Router?",
    options: [
      "To fetch API data",
      "To navigate programmatically between routes",
      "To manage component state",
      "To optimize rendering",
    ],
    correctAnswer:
      "To navigate programmatically between routes",
    explanation:
      "useNavigate() returns a navigation function that allows developers to redirect users after actions such as successful login, form submission, or logout without requiring the user to click a link.",
    points: 15,
    timeLimit: 45,
    tags: ["react", "useNavigate", "react-router"],
  },

  {
    id: 26,
    category: "React",
    difficulty: "Hard",
    question: "How are URL parameters accessed in React Router?",
    options: [
      "Using useState()",
      "Using useParams()",
      "Using useEffect()",
      "Using useMemo()",
    ],
    correctAnswer: "Using useParams()",
    explanation:
      "The useParams() Hook returns an object containing the dynamic route parameters from the current URL. It is commonly used for routes such as /users/:id or /products/:productId.",
    points: 15,
    timeLimit: 45,
    tags: ["react", "useParams", "routing", "dynamic-routes"],
  },

  {
    id: 27,
    category: "React",
    difficulty: "Hard",
    question: "What is the primary purpose of the Context API in React?",
    options: [
      "To replace React Router",
      "To share data across multiple components without prop drilling",
      "To create CSS modules",
      "To optimize API performance",
    ],
    correctAnswer:
      "To share data across multiple components without prop drilling",
    explanation:
      "The Context API allows data such as themes, authentication information, or language preferences to be shared across the component tree without passing props through every intermediate component.",
    points: 15,
    timeLimit: 45,
    tags: ["react", "context-api", "state-management"],
  },

  {
    id: 28,
    category: "React",
    difficulty: "Hard",
    question: "What is Redux primarily used for in React applications?",
    options: [
      "Managing global application state",
      "Creating REST APIs",
      "Styling React components",
      "Rendering HTML pages",
    ],
    correctAnswer:
      "Managing global application state",
    explanation:
      "Redux is a predictable state management library that centralizes application state in a single store, making large applications easier to manage, debug, and scale.",
    points: 15,
    timeLimit: 45,
    tags: ["react", "redux", "global-state"],
  },

  {
    id: 29,
    category: "React",
    difficulty: "Expert",
    question: "Why is Redux Toolkit (RTK) recommended over traditional Redux?",
    options: [
      "It removes state management completely.",
      "It reduces boilerplate, simplifies configuration, and provides modern best practices out of the box.",
      "It only works with TypeScript.",
      "It replaces React Hooks.",
    ],
    correctAnswer:
      "It reduces boilerplate, simplifies configuration, and provides modern best practices out of the box.",
    explanation:
      "Redux Toolkit is the official recommended way to write Redux applications. It includes configureStore(), createSlice(), createAsyncThunk(), Immer integration, and Redux DevTools support while significantly reducing boilerplate code.",
    points: 20,
    timeLimit: 60,
    tags: [
      "react",
      "redux-toolkit",
      "rtk",
      "state-management",
      "best-practices",
    ],
  },

  {
    id: 30,
    category: "React",
    difficulty: "Expert",
    question: "How does Zustand differ from Redux for state management?",
    options: [
      "Zustand is a lightweight state management library with minimal boilerplate, while Redux provides a more structured architecture for complex applications.",
      "Zustand only works with Node.js.",
      "Redux cannot manage global state.",
      "There is no difference between them.",
    ],
    correctAnswer:
      "Zustand is a lightweight state management library with minimal boilerplate, while Redux provides a more structured architecture for complex applications.",
    explanation:
      "Zustand offers a simple API with minimal setup, making it ideal for small to medium-sized applications. Redux, especially with Redux Toolkit, is often preferred for enterprise-scale applications requiring predictable state updates, middleware, DevTools, and a highly structured architecture.",
    points: 20,
    timeLimit: 65,
    tags: [
      "react",
      "zustand",
      "redux",
      "state-management",
      "comparison",
      "architecture",
    ],
  },
    {
    id: 31,
    category: "React",
    difficulty: "Hard",
    question: "What is React.memo()?",
    options: [
      "A Hook for managing state",
      "A Higher-Order Component (HOC) that memoizes functional components to avoid unnecessary re-renders",
      "A routing component",
      "A JavaScript compiler",
    ],
    correctAnswer:
      "A Higher-Order Component (HOC) that memoizes functional components to avoid unnecessary re-renders",
    explanation:
      "React.memo() memoizes a functional component and prevents it from re-rendering if its props have not changed. This optimization is especially useful for expensive components in large applications.",
    points: 15,
    timeLimit: 45,
    tags: [
      "react",
      "react-memo",
      "performance",
      "optimization",
    ],
  },

  {
    id: 32,
    category: "React",
    difficulty: "Hard",
    question: "What is Lazy Loading in React?",
    options: [
      "Loading every component when the application starts",
      "Loading components only when they are needed",
      "Caching API responses",
      "Optimizing CSS files",
    ],
    correctAnswer:
      "Loading components only when they are needed",
    explanation:
      "Lazy Loading delays the loading of components until they are actually required. This reduces the initial JavaScript bundle size and improves application startup performance.",
    points: 15,
    timeLimit: 45,
    tags: [
      "react",
      "lazy-loading",
      "performance",
      "optimization",
    ],
  },

  {
    id: 33,
    category: "React",
    difficulty: "Hard",
    question: "What is the purpose of React.Suspense?",
    options: [
      "To manage global state",
      "To display a fallback UI while lazy-loaded components or asynchronous content are loading",
      "To create API endpoints",
      "To replace React Router",
    ],
    correctAnswer:
      "To display a fallback UI while lazy-loaded components or asynchronous content are loading",
    explanation:
      "React.Suspense allows developers to display loading indicators while waiting for lazy-loaded components or asynchronous operations to complete, improving user experience.",
    points: 15,
    timeLimit: 45,
    tags: [
      "react",
      "suspense",
      "lazy-loading",
      "async",
    ],
  },

  {
    id: 34,
    category: "React",
    difficulty: "Hard",
    question: "What is Code Splitting in React?",
    options: [
      "Breaking CSS into multiple files",
      "Splitting JavaScript bundles into smaller chunks that are loaded on demand",
      "Separating HTML into multiple pages",
      "Dividing Redux stores",
    ],
    correctAnswer:
      "Splitting JavaScript bundles into smaller chunks that are loaded on demand",
    explanation:
      "Code Splitting reduces the initial bundle size by loading only the code required for the current page or feature. React.lazy() and dynamic imports are commonly used to implement it.",
    points: 15,
    timeLimit: 45,
    tags: [
      "react",
      "code-splitting",
      "bundles",
      "performance",
    ],
  },

  {
    id: 35,
    category: "React",
    difficulty: "Hard",
    question: "What is the recommended approach for handling forms in React?",
    options: [
      "Manipulate the DOM directly",
      "Manage form values using React state or dedicated form libraries",
      "Avoid validation completely",
      "Reload the page after every input change",
    ],
    correctAnswer:
      "Manage form values using React state or dedicated form libraries",
    explanation:
      "React applications typically use controlled components or libraries such as React Hook Form or Formik to efficiently manage form state, validation, and submissions.",
    points: 15,
    timeLimit: 45,
    tags: [
      "react",
      "forms",
      "controlled-components",
      "form-handling",
    ],
  },

  {
    id: 36,
    category: "React",
    difficulty: "Expert",
    question: "Why is React Hook Form widely used in modern React applications?",
    options: [
      "It replaces React completely",
      "It provides performant form management with minimal re-renders, built-in validation support, and easy integration with schema validators",
      "It automatically creates REST APIs",
      "It only works with Redux",
    ],
    correctAnswer:
      "It provides performant form management with minimal re-renders, built-in validation support, and easy integration with schema validators",
    explanation:
      "React Hook Form minimizes unnecessary re-renders, simplifies form handling, supports controlled and uncontrolled inputs, and integrates seamlessly with validation libraries such as Yup and Zod.",
    points: 20,
    timeLimit: 60,
    tags: [
      "react",
      "react-hook-form",
      "forms",
      "validation",
      "performance",
    ],
  },

  {
    id: 37,
    category: "React",
    difficulty: "Expert",
    question: "Why is form validation important in React applications?",
    options: [
      "It reduces CSS bundle size",
      "It ensures user input is correct, secure, and meets business requirements before processing",
      "It replaces backend validation",
      "It automatically optimizes application performance",
    ],
    correctAnswer:
      "It ensures user input is correct, secure, and meets business requirements before processing",
    explanation:
      "Client-side validation improves user experience by providing immediate feedback, while server-side validation remains essential for security and data integrity. Production applications typically implement both.",
    points: 20,
    timeLimit: 60,
    tags: [
      "react",
      "validation",
      "forms",
      "security",
      "best-practices",
    ],
  },

  {
    id: 38,
    category: "React",
    difficulty: "Expert",
    question: "What is an Error Boundary in React?",
    options: [
      "A feature that validates forms",
      "A component that catches JavaScript errors in its child component tree and displays a fallback UI",
      "A routing mechanism",
      "A Redux middleware",
    ],
    correctAnswer:
      "A component that catches JavaScript errors in its child component tree and displays a fallback UI",
    explanation:
      "Error Boundaries prevent the entire React application from crashing when a child component throws an error. They catch rendering, lifecycle, and constructor errors and display a graceful fallback interface.",
    points: 20,
    timeLimit: 60,
    tags: [
      "react",
      "error-boundary",
      "error-handling",
      "production",
    ],
  },

  {
    id: 39,
    category: "React",
    difficulty: "Expert",
    question: "What is the purpose of React Portals?",
    options: [
      "To improve API performance",
      "To render components outside their parent DOM hierarchy while preserving the React component tree",
      "To replace React Router",
      "To optimize JavaScript compilation",
    ],
    correctAnswer:
      "To render components outside their parent DOM hierarchy while preserving the React component tree",
    explanation:
      "React Portals are commonly used for modals, dialogs, tooltips, dropdowns, and overlays that need to escape parent containers while maintaining React's event propagation and context.",
    points: 20,
    timeLimit: 60,
    tags: [
      "react",
      "portals",
      "modals",
      "ui",
      "advanced",
    ],
  },

  {
    id: 40,
    category: "React",
    difficulty: "Expert",
    question: "Why are unique keys required when rendering lists in React?",
    options: [
      "They improve CSS rendering.",
      "They help React efficiently identify, update, add, and remove list items during reconciliation.",
      "They make JavaScript execute faster.",
      "They are required only when using Redux.",
    ],
    correctAnswer:
      "They help React efficiently identify, update, add, and remove list items during reconciliation.",
    explanation:
      "Keys give each list item a stable identity, allowing React's reconciliation algorithm to determine which items have changed. Using unique and stable keys improves rendering performance and prevents unexpected UI behavior.",
    points: 20,
    timeLimit: 70,
    tags: [
      "react",
      "keys",
      "lists",
      "reconciliation",
      "performance",
    ],
  },
    {
    id: 41,
    category: "React",
    difficulty: "Expert",
    question: "What is React Reconciliation?",
    options: [
      "A routing mechanism in React",
      "The process React uses to compare the previous and new Virtual DOM to efficiently update the real DOM",
      "A state management library",
      "A JavaScript compiler",
    ],
    correctAnswer:
      "The process React uses to compare the previous and new Virtual DOM to efficiently update the real DOM",
    explanation:
      "Reconciliation is React's diffing algorithm. Whenever state or props change, React compares the previous Virtual DOM with the new one and updates only the parts of the real DOM that have changed, significantly improving rendering performance.",
    points: 20,
    timeLimit: 60,
    tags: [
      "react",
      "reconciliation",
      "virtual-dom",
      "performance",
      "diffing",
    ],
  },

  {
    id: 42,
    category: "React",
    difficulty: "Expert",
    question: "What is React Fiber Architecture?",
    options: [
      "A CSS rendering engine",
      "React's modern rendering engine that enables incremental rendering, prioritization, and concurrent features",
      "A replacement for JSX",
      "A state management library",
    ],
    correctAnswer:
      "React's modern rendering engine that enables incremental rendering, prioritization, and concurrent features",
    explanation:
      "React Fiber is the core rendering architecture introduced in React 16. It breaks rendering work into smaller units, allowing React to pause, prioritize, resume, or cancel rendering tasks for improved responsiveness and performance.",
    points: 20,
    timeLimit: 60,
    tags: [
      "react",
      "fiber",
      "rendering",
      "architecture",
      "performance",
    ],
  },

  {
    id: 43,
    category: "React",
    difficulty: "Expert",
    question: "What is Concurrent Rendering in modern React?",
    options: [
      "Rendering multiple applications simultaneously",
      "A rendering capability that allows React to interrupt, prioritize, and resume rendering work for a smoother user experience",
      "Rendering only on the server",
      "A replacement for Hooks",
    ],
    correctAnswer:
      "A rendering capability that allows React to interrupt, prioritize, and resume rendering work for a smoother user experience",
    explanation:
      "Concurrent Rendering enables React to prioritize important UI updates, pause long rendering tasks, and keep applications responsive. Features like startTransition() and Suspense are built upon this capability.",
    points: 20,
    timeLimit: 60,
    tags: [
      "react",
      "concurrent-rendering",
      "react18",
      "performance",
      "fiber",
    ],
  },

  {
    id: 44,
    category: "React",
    difficulty: "Expert",
    question: "What is the purpose of React.StrictMode?",
    options: [
      "To improve production performance",
      "To help developers identify potential problems, deprecated APIs, and unsafe side effects during development",
      "To create API endpoints",
      "To optimize CSS files",
    ],
    correctAnswer:
      "To help developers identify potential problems, deprecated APIs, and unsafe side effects during development",
    explanation:
      "React.StrictMode is a development-only tool that highlights unsafe lifecycle methods, unexpected side effects, deprecated APIs, and other potential issues. It does not affect production builds.",
    points: 20,
    timeLimit: 60,
    tags: [
      "react",
      "strictmode",
      "development",
      "best-practices",
      "debugging",
    ],
  },

  {
    id: 45,
    category: "React",
    difficulty: "Expert",
    question: "What are React Server Components (RSC)?",
    options: [
      "Components that always execute in the browser",
      "Components that render on the server, reducing client-side JavaScript while allowing direct access to backend resources",
      "Components used only with Redux",
      "Components that replace JSX",
    ],
    correctAnswer:
      "Components that render on the server, reducing client-side JavaScript while allowing direct access to backend resources",
    explanation:
      "React Server Components execute on the server instead of the browser. They reduce bundle size, improve performance, and can directly access databases, file systems, and server APIs without exposing sensitive logic to the client.",
    points: 20,
    timeLimit: 65,
    tags: [
      "react",
      "server-components",
      "rsc",
      "performance",
      "architecture",
    ],
  },

  {
    id: 46,
    category: "React",
    difficulty: "Expert",
    question: "What is Hydration in React?",
    options: [
      "Compressing JavaScript bundles",
      "The process of attaching React's event handlers and interactivity to HTML rendered on the server",
      "Updating Redux state",
      "Creating API routes",
    ],
    correctAnswer:
      "The process of attaching React's event handlers and interactivity to HTML rendered on the server",
    explanation:
      "Hydration occurs after Server-Side Rendering (SSR), where React attaches event listeners and makes the server-rendered HTML fully interactive without recreating the entire UI.",
    points: 20,
    timeLimit: 60,
    tags: [
      "react",
      "hydration",
      "ssr",
      "server-rendering",
      "performance",
    ],
  },

  {
    id: 47,
    category: "React",
    difficulty: "Expert",
    question: "Which combination of techniques represents React performance optimization best practices?",
    options: [
      "Render everything repeatedly and avoid memoization.",
      "Use React.memo(), useMemo(), useCallback(), lazy loading, code splitting, virtualization, and efficient state management.",
      "Store all data inside localStorage.",
      "Disable the Virtual DOM.",
    ],
    correctAnswer:
      "Use React.memo(), useMemo(), useCallback(), lazy loading, code splitting, virtualization, and efficient state management.",
    explanation:
      "High-performance React applications minimize unnecessary re-renders through memoization, lazy loading, virtualization for large lists, optimized state management, code splitting, and efficient component architecture.",
    points: 20,
    timeLimit: 70,
    tags: [
      "react",
      "performance",
      "optimization",
      "memoization",
      "best-practices",
    ],
  },

  {
    id: 48,
    category: "React",
    difficulty: "Expert",
    question: "Which testing tools are most commonly used for unit and component testing in React applications?",
    options: [
      "Mocha and Selenium",
      "Jest and React Testing Library",
      "JUnit and Cypress",
      "Playwright and Webpack",
    ],
    correctAnswer:
      "Jest and React Testing Library",
    explanation:
      "Jest is the most widely used testing framework for React, while React Testing Library encourages testing components from the user's perspective by focusing on behavior rather than implementation details.",
    points: 20,
    timeLimit: 60,
    tags: [
      "react",
      "jest",
      "react-testing-library",
      "testing",
      "unit-testing",
    ],
  },

  {
    id: 49,
    category: "React",
    difficulty: "Expert",
    question: "Which practice is considered a best practice when building large React applications?",
    options: [
      "Keep all components and business logic inside App.jsx.",
      "Follow component reusability, separation of concerns, custom Hooks, proper folder structure, state management, and performance optimization.",
      "Store secrets inside React components.",
      "Avoid code splitting.",
    ],
    correctAnswer:
      "Follow component reusability, separation of concerns, custom Hooks, proper folder structure, state management, and performance optimization.",
    explanation:
      "Production-grade React applications emphasize reusable components, modular architecture, custom Hooks, proper state management, lazy loading, testing, accessibility, and clean project organization for maintainability and scalability.",
    points: 20,
    timeLimit: 70,
    tags: [
      "react",
      "best-practices",
      "architecture",
      "performance",
      "production",
    ],
  },

  {
    id: 50,
    category: "React",
    difficulty: "Expert",
    question: "You're building a production-grade SaaS platform expected to support millions of users. Which React architecture is considered the best practice?",
    options: [
      "Place all components, API calls, and state inside a single App.jsx file.",
      "Use a modular architecture with reusable components, custom Hooks, Context or Redux Toolkit where appropriate, lazy loading, code splitting, testing, accessibility, performance optimization, and scalable project organization.",
      "Avoid component abstraction to reduce complexity.",
      "Use only global state for every value in the application.",
    ],
    correctAnswer:
      "Use a modular architecture with reusable components, custom Hooks, Context or Redux Toolkit where appropriate, lazy loading, code splitting, testing, accessibility, performance optimization, and scalable project organization.",
    explanation:
      "Enterprise-scale React applications are built using reusable UI components, modular architecture, custom Hooks, efficient state management, lazy loading, code splitting, accessibility (WCAG), testing, proper folder organization, performance optimization, and clean separation of concerns. These practices improve scalability, maintainability, developer productivity, and long-term success.",
    points: 20,
    timeLimit: 75,
    tags: [
      "react",
      "architecture",
      "production",
      "performance",
      "accessibility",
      "testing",
      "interview",
      "senior-developer",
    ],
  },
];

export default reactQuestions;