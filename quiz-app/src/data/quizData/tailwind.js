const tailwindQuestions = [
  {
    id: 1,
    category: "Tailwind CSS",
    difficulty: "Easy",
    question: "What is Tailwind CSS?",
    options: [
      "A JavaScript framework",
      "A utility-first CSS framework for rapidly building custom user interfaces",
      "A backend framework",
      "A database management system",
    ],
    correctAnswer:
      "A utility-first CSS framework for rapidly building custom user interfaces",
    explanation:
      "Tailwind CSS is a utility-first CSS framework that provides low-level utility classes for styling applications directly in HTML or JSX. It allows developers to build responsive, modern interfaces without writing large amounts of custom CSS.",
    points: 5,
    timeLimit: 30,
    tags: ["tailwind", "css", "framework", "basics"],
  },

  {
    id: 2,
    category: "Tailwind CSS",
    difficulty: "Easy",
    question: "What does 'Utility-First' mean in Tailwind CSS?",
    options: [
      "CSS is generated automatically.",
      "Applications are styled using small reusable utility classes instead of custom CSS.",
      "Only JavaScript can style components.",
      "Tailwind replaces HTML.",
    ],
    correctAnswer:
      "Applications are styled using small reusable utility classes instead of custom CSS.",
    explanation:
      "Tailwind encourages composing user interfaces by combining utility classes such as flex, p-4, text-center, and bg-blue-500 rather than creating custom CSS classes for every component.",
    points: 5,
    timeLimit: 30,
    tags: ["tailwind", "utility-first", "styling"],
  },

  {
    id: 3,
    category: "Tailwind CSS",
    difficulty: "Easy",
    question: "Which of the following is a major advantage of Tailwind CSS?",
    options: [
      "It completely removes HTML.",
      "It provides reusable utility classes that speed up UI development while reducing custom CSS.",
      "It automatically creates backend APIs.",
      "It replaces JavaScript.",
    ],
    correctAnswer:
      "It provides reusable utility classes that speed up UI development while reducing custom CSS.",
    explanation:
      "Tailwind CSS enables rapid UI development through predefined utility classes, resulting in consistent styling, faster development, and easier maintenance.",
    points: 5,
    timeLimit: 30,
    tags: ["tailwind", "advantages", "productivity"],
  },

  {
    id: 4,
    category: "Tailwind CSS",
    difficulty: "Easy",
    question: "Which command is commonly used to install Tailwind CSS in a project?",
    options: [
      "npm install react",
      "npm install tailwindcss @tailwindcss/postcss postcss",
      "npm install express",
      "npm install bootstrap",
    ],
    correctAnswer:
      "npm install tailwindcss @tailwindcss/postcss postcss",
    explanation:
      "Tailwind CSS is installed as a development dependency along with PostCSS integration. The exact setup may vary slightly depending on the build tool (Vite, Next.js, React, etc.), but this is the commonly recommended installation.",
    points: 5,
    timeLimit: 30,
    tags: ["tailwind", "installation", "npm"],
  },

  {
    id: 5,
    category: "Tailwind CSS",
    difficulty: "Easy",
    question: "What is the purpose of the tailwind.config.js (or tailwind.config.ts) file?",
    options: [
      "To configure Tailwind's theme, plugins, and project settings",
      "To create React components",
      "To manage routing",
      "To configure Node.js",
    ],
    correctAnswer:
      "To configure Tailwind's theme, plugins, and project settings",
    explanation:
      "The Tailwind configuration file allows developers to customize colors, fonts, spacing, breakpoints, plugins, animations, and many other framework settings.",
    points: 5,
    timeLimit: 30,
    tags: ["tailwind", "configuration", "tailwind-config"],
  },

  {
    id: 6,
    category: "Tailwind CSS",
    difficulty: "Easy",
    question: "Why is the 'content' property configured in the Tailwind configuration file?",
    options: [
      "To define application routes",
      "To tell Tailwind which files should be scanned for utility classes",
      "To configure databases",
      "To optimize JavaScript bundles",
    ],
    correctAnswer:
      "To tell Tailwind which files should be scanned for utility classes",
    explanation:
      "The content configuration specifies which files Tailwind should scan for utility classes. During production builds, unused CSS is removed, resulting in much smaller stylesheet sizes.",
    points: 5,
    timeLimit: 30,
    tags: ["tailwind", "content", "purge"],
  },

  {
    id: 7,
    category: "Tailwind CSS",
    difficulty: "Easy",
    question: "What is the purpose of Tailwind CSS's Just-In-Time (JIT) compiler?",
    options: [
      "To compile JavaScript faster",
      "To generate only the utility classes actually used in the project as they are needed",
      "To replace React",
      "To optimize databases",
    ],
    correctAnswer:
      "To generate only the utility classes actually used in the project as they are needed",
    explanation:
      "The JIT compiler generates utility classes on demand, resulting in faster builds, significantly smaller CSS bundles, and support for arbitrary values.",
    points: 5,
    timeLimit: 35,
    tags: ["tailwind", "jit", "performance"],
  },

  {
    id: 8,
    category: "Tailwind CSS",
    difficulty: "Easy",
    question: "How does Tailwind CSS support responsive design?",
    options: [
      "Using responsive utility prefixes such as sm:, md:, lg:, xl:, and 2xl:",
      "By automatically resizing images only",
      "By replacing CSS media queries completely",
      "By using JavaScript event listeners",
    ],
    correctAnswer:
      "Using responsive utility prefixes such as sm:, md:, lg:, xl:, and 2xl:",
    explanation:
      "Tailwind provides responsive breakpoint prefixes that allow developers to apply different utility classes for different screen sizes while following a mobile-first approach.",
    points: 5,
    timeLimit: 35,
    tags: ["tailwind", "responsive", "breakpoints"],
  },

  {
    id: 9,
    category: "Tailwind CSS",
    difficulty: "Easy",
    question: "What does Tailwind CSS's mobile-first approach mean?",
    options: [
      "Desktop styles are written first.",
      "Base utility classes target mobile devices first, with larger breakpoints overriding them.",
      "Only mobile devices are supported.",
      "Responsive utilities work only on phones.",
    ],
    correctAnswer:
      "Base utility classes target mobile devices first, with larger breakpoints overriding them.",
    explanation:
      "Tailwind follows a mobile-first philosophy. Unprefixed utility classes apply to all screen sizes, while breakpoint prefixes such as md: or lg: progressively enhance layouts for larger devices.",
    points: 5,
    timeLimit: 35,
    tags: ["tailwind", "mobile-first", "responsive"],
  },

  {
    id: 10,
    category: "Tailwind CSS",
    difficulty: "Easy",
    question: "What are Utility Classes in Tailwind CSS?",
    options: [
      "Reusable low-level CSS classes that each perform a single styling task",
      "JavaScript functions",
      "Database models",
      "React Hooks",
    ],
    correctAnswer:
      "Reusable low-level CSS classes that each perform a single styling task",
    explanation:
      "Utility classes are the foundation of Tailwind CSS. Examples include p-4, flex, bg-blue-500, rounded-lg, shadow-md, and text-center. Each class represents a single CSS property, allowing developers to compose complex designs directly within markup.",
    points: 5,
    timeLimit: 35,
    tags: [
      "tailwind",
      "utilities",
      "styling",
      "css",
    ],
  },
    {
    id: 11,
    category: "Tailwind CSS",
    difficulty: "Easy",
    question: "Which utility classes are commonly used to create Flexbox layouts in Tailwind CSS?",
    options: [
      "grid, grid-cols-2",
      "flex, flex-row, flex-col, justify-*, items-*",
      "table, table-row",
      "inline-block, float-left",
    ],
    correctAnswer:
      "flex, flex-row, flex-col, justify-*, items-*",
    explanation:
      "Tailwind CSS provides numerous Flexbox utility classes such as flex, flex-row, flex-col, justify-center, justify-between, items-center, and flex-wrap, making responsive layouts easy to build without writing custom CSS.",
    points: 5,
    timeLimit: 30,
    tags: ["tailwind", "flexbox", "layout"],
  },

  {
    id: 12,
    category: "Tailwind CSS",
    difficulty: "Easy",
    question: "Which Tailwind CSS utilities are primarily used for creating Grid layouts?",
    options: [
      "display-flex",
      "grid, grid-cols-*, grid-rows-*, gap-*",
      "position-relative",
      "container-fluid",
    ],
    correctAnswer:
      "grid, grid-cols-*, grid-rows-*, gap-*",
    explanation:
      "Tailwind's Grid utilities allow developers to build complex responsive layouts using classes such as grid, grid-cols-2, grid-cols-12, grid-rows-3, gap-4, and col-span-6.",
    points: 5,
    timeLimit: 30,
    tags: ["tailwind", "grid", "layout"],
  },

  {
    id: 13,
    category: "Tailwind CSS",
    difficulty: "Medium",
    question: "What is the purpose of the container utility in Tailwind CSS?",
    options: [
      "To create database containers",
      "To provide a responsive fixed-width layout container",
      "To generate CSS variables",
      "To create animations",
    ],
    correctAnswer:
      "To provide a responsive fixed-width layout container",
    explanation:
      "The container utility automatically adjusts its maximum width based on the current responsive breakpoint, making it useful for centering page content and maintaining consistent layouts.",
    points: 10,
    timeLimit: 35,
    tags: ["tailwind", "container", "responsive"],
  },

  {
    id: 14,
    category: "Tailwind CSS",
    difficulty: "Medium",
    question: "What is the difference between padding (p-*) and margin (m-*) utilities in Tailwind CSS?",
    options: [
      "There is no difference.",
      "Padding adds space inside an element, while margin adds space outside an element.",
      "Padding only works with Flexbox.",
      "Margin only works with Grid.",
    ],
    correctAnswer:
      "Padding adds space inside an element, while margin adds space outside an element.",
    explanation:
      "Padding utilities (p-4, px-6, py-2) control internal spacing, while margin utilities (m-4, mx-auto, mt-6) control external spacing between elements.",
    points: 10,
    timeLimit: 35,
    tags: ["tailwind", "spacing", "padding", "margin"],
  },

  {
    id: 15,
    category: "Tailwind CSS",
    difficulty: "Medium",
    question: "What are the space-x-* and space-y-* utilities used for?",
    options: [
      "To create shadows",
      "To automatically add spacing between sibling elements",
      "To align text",
      "To resize images",
    ],
    correctAnswer:
      "To automatically add spacing between sibling elements",
    explanation:
      "The space-x-* and space-y-* utilities automatically add horizontal or vertical spacing between direct child elements without requiring margins on each individual child.",
    points: 10,
    timeLimit: 35,
    tags: ["tailwind", "spacing", "space-x", "space-y"],
  },

  {
    id: 16,
    category: "Tailwind CSS",
    difficulty: "Medium",
    question: "Which utilities are commonly used to control an element's width and height in Tailwind CSS?",
    options: [
      "w-* and h-*",
      "width-* and height-*",
      "size-* only",
      "resize-* only",
    ],
    correctAnswer: "w-* and h-*",
    explanation:
      "Tailwind provides width and height utilities such as w-full, w-64, h-screen, h-auto, min-w-*, max-w-*, min-h-*, and max-h-* for flexible sizing.",
    points: 10,
    timeLimit: 35,
    tags: ["tailwind", "width", "height", "sizing"],
  },

  {
    id: 17,
    category: "Tailwind CSS",
    difficulty: "Hard",
    question: "Which positioning utilities are available in Tailwind CSS?",
    options: [
      "relative, absolute, fixed, sticky, static",
      "left-align, right-align",
      "grid-center",
      "flex-position",
    ],
    correctAnswer:
      "relative, absolute, fixed, sticky, static",
    explanation:
      "Tailwind provides CSS positioning utilities along with inset classes such as top-0, right-0, bottom-0, left-0, inset-0, and z-index utilities for positioning elements precisely.",
    points: 15,
    timeLimit: 45,
    tags: ["tailwind", "position", "layout"],
  },

  {
    id: 18,
    category: "Tailwind CSS",
    difficulty: "Hard",
    question: "What is the purpose of display utilities such as block, inline-block, inline, hidden, and flex?",
    options: [
      "To configure JavaScript modules",
      "To control how elements are displayed and participate in layout",
      "To create CSS animations",
      "To optimize images",
    ],
    correctAnswer:
      "To control how elements are displayed and participate in layout",
    explanation:
      "Display utilities determine how elements behave within the document flow. Tailwind provides utilities such as block, inline, inline-block, flex, grid, table, hidden, and contents.",
    points: 15,
    timeLimit: 45,
    tags: ["tailwind", "display", "layout"],
  },

  {
    id: 19,
    category: "Tailwind CSS",
    difficulty: "Hard",
    question: "What is the purpose of overflow utilities in Tailwind CSS?",
    options: [
      "To manage how overflowing content is handled inside an element",
      "To align Flexbox items",
      "To optimize typography",
      "To generate responsive layouts",
    ],
    correctAnswer:
      "To manage how overflowing content is handled inside an element",
    explanation:
      "Overflow utilities such as overflow-hidden, overflow-auto, overflow-scroll, overflow-x-auto, and overflow-y-scroll determine how content exceeding an element's boundaries is displayed.",
    points: 15,
    timeLimit: 45,
    tags: ["tailwind", "overflow", "layout"],
  },

  {
    id: 20,
    category: "Tailwind CSS",
    difficulty: "Expert",
    question: "Why are z-index (z-*) and aspect-ratio (aspect-*) utilities important in modern UI development?",
    options: [
      "They replace Flexbox.",
      "z-index controls stacking order while aspect-ratio maintains consistent proportions for responsive elements.",
      "They only work with images.",
      "They generate CSS automatically.",
    ],
    correctAnswer:
      "z-index controls stacking order while aspect-ratio maintains consistent proportions for responsive elements.",
    explanation:
      "The z-* utilities manage the stacking order of overlapping elements such as modals, dropdowns, and tooltips, while aspect-* utilities preserve consistent width-to-height ratios for images, videos, cards, and other responsive components.",
    points: 20,
    timeLimit: 60,
    tags: [
      "tailwind",
      "z-index",
      "aspect-ratio",
      "responsive",
      "layout",
    ],
  },
    {
    id: 21,
    category: "Tailwind CSS",
    difficulty: "Medium",
    question: "Which utility classes are primarily used to style typography in Tailwind CSS?",
    options: [
      "text-*, font-*, leading-*, tracking-*",
      "grid-*, flex-*",
      "border-*, shadow-*",
      "translate-*, rotate-*",
    ],
    correctAnswer:
      "text-*, font-*, leading-*, tracking-*",
    explanation:
      "Tailwind provides comprehensive typography utilities including text sizes, font weights, text alignment, line height (leading), letter spacing (tracking), text decoration, text transformation, and font families.",
    points: 10,
    timeLimit: 35,
    tags: ["tailwind", "typography", "text", "fonts"],
  },

  {
    id: 22,
    category: "Tailwind CSS",
    difficulty: "Medium",
    question: "How are colors applied in Tailwind CSS?",
    options: [
      "Using predefined utility classes such as text-blue-500 and bg-red-600",
      "Only through custom CSS",
      "Using JavaScript objects",
      "Using HTML attributes",
    ],
    correctAnswer:
      "Using predefined utility classes such as text-blue-500 and bg-red-600",
    explanation:
      "Tailwind provides a comprehensive color palette with utilities for text, backgrounds, borders, rings, placeholders, gradients, and more. Developers can also customize the color palette in the Tailwind configuration.",
    points: 10,
    timeLimit: 35,
    tags: ["tailwind", "colors", "theme"],
  },

  {
    id: 23,
    category: "Tailwind CSS",
    difficulty: "Medium",
    question: "Which utilities are commonly used to style element backgrounds in Tailwind CSS?",
    options: [
      "bg-*, bg-gradient-*, from-*, via-*, to-*",
      "font-*, text-*",
      "grid-*, flex-*",
      "overflow-*",
    ],
    correctAnswer:
      "bg-*, bg-gradient-*, from-*, via-*, to-*",
    explanation:
      "Tailwind supports background colors, gradients, images, attachment, blend modes, position, repeat, and sizing through various background utility classes.",
    points: 10,
    timeLimit: 35,
    tags: ["tailwind", "background", "gradients"],
  },

  {
    id: 24,
    category: "Tailwind CSS",
    difficulty: "Medium",
    question: "Which utility classes are commonly used to style borders in Tailwind CSS?",
    options: [
      "border, border-*, border-{color}, divide-*",
      "font-bold",
      "flex-row",
      "translate-x-*",
    ],
    correctAnswer:
      "border, border-*, border-{color}, divide-*",
    explanation:
      "Tailwind provides utilities for border width, border color, border style, divide utilities, outline, and ring effects, making it easy to create visually appealing UI components.",
    points: 10,
    timeLimit: 35,
    tags: ["tailwind", "border", "styling"],
  },

  {
    id: 25,
    category: "Tailwind CSS",
    difficulty: "Hard",
    question: "What is the purpose of the rounded-* utilities in Tailwind CSS?",
    options: [
      "To apply border radius and create rounded corners",
      "To create shadows",
      "To center elements",
      "To resize images",
    ],
    correctAnswer:
      "To apply border radius and create rounded corners",
    explanation:
      "Tailwind offers border-radius utilities ranging from rounded-none to rounded-full, along with directional utilities like rounded-t-lg and rounded-br-xl for fine-grained control.",
    points: 15,
    timeLimit: 45,
    tags: ["tailwind", "border-radius", "rounded"],
  },

  {
    id: 26,
    category: "Tailwind CSS",
    difficulty: "Hard",
    question: "What is the primary purpose of shadow-* utilities in Tailwind CSS?",
    options: [
      "To create CSS animations",
      "To apply box-shadow effects for visual depth and elevation",
      "To modify typography",
      "To optimize layouts",
    ],
    correctAnswer:
      "To apply box-shadow effects for visual depth and elevation",
    explanation:
      "Utilities such as shadow-sm, shadow-md, shadow-lg, shadow-xl, and shadow-2xl help create depth and improve visual hierarchy within an interface.",
    points: 15,
    timeLimit: 45,
    tags: ["tailwind", "shadow", "ui"],
  },

  {
    id: 27,
    category: "Tailwind CSS",
    difficulty: "Hard",
    question: "How is opacity controlled in Tailwind CSS?",
    options: [
      "Using opacity-* utilities",
      "Using visibility-* utilities",
      "Using alpha-* utilities",
      "Using transparent-* utilities",
    ],
    correctAnswer: "Using opacity-* utilities",
    explanation:
      "Tailwind provides opacity utilities such as opacity-0, opacity-25, opacity-50, opacity-75, and opacity-100 to control an element's transparency.",
    points: 15,
    timeLimit: 45,
    tags: ["tailwind", "opacity", "styling"],
  },

  {
    id: 28,
    category: "Tailwind CSS",
    difficulty: "Hard",
    question: "Which utilities are commonly used for CSS transforms in Tailwind CSS?",
    options: [
      "rotate-*, scale-*, translate-*, skew-*",
      "grid-cols-*",
      "font-bold",
      "border-*",
    ],
    correctAnswer:
      "rotate-*, scale-*, translate-*, skew-*",
    explanation:
      "Tailwind provides transform utilities for rotating, translating, scaling, skewing, and changing transform origin, making animations and interactive UI effects easy to implement.",
    points: 15,
    timeLimit: 45,
    tags: ["tailwind", "transform", "animations"],
  },

  {
    id: 29,
    category: "Tailwind CSS",
    difficulty: "Expert",
    question: "What is the purpose of transition-* and animate-* utilities in Tailwind CSS?",
    options: [
      "To optimize database queries",
      "To create smooth transitions and predefined animations for interactive user interfaces",
      "To manage responsive layouts",
      "To configure plugins",
    ],
    correctAnswer:
      "To create smooth transitions and predefined animations for interactive user interfaces",
    explanation:
      "Tailwind includes transition utilities for controlling duration, timing functions, delays, and animated properties, along with built-in animations such as animate-spin, animate-pulse, animate-bounce, and animate-ping.",
    points: 20,
    timeLimit: 60,
    tags: [
      "tailwind",
      "transition",
      "animation",
      "interactive-ui",
      "performance",
    ],
  },

  {
    id: 30,
    category: "Tailwind CSS",
    difficulty: "Expert",
    question: "What is the purpose of state variants such as hover:, focus:, active:, disabled:, and focus-visible: in Tailwind CSS?",
    options: [
      "To create backend APIs",
      "To apply styles based on user interactions and component states",
      "To optimize JavaScript execution",
      "To generate responsive layouts",
    ],
    correctAnswer:
      "To apply styles based on user interactions and component states",
    explanation:
      "State variants allow developers to style elements based on interaction states. Examples include hover:bg-blue-600, focus:ring-2, active:scale-95, disabled:opacity-50, and focus-visible:outline-none, enabling accessible and interactive user experiences.",
    points: 20,
    timeLimit: 65,
    tags: [
      "tailwind",
      "hover",
      "focus",
      "active",
      "variants",
      "accessibility",
    ],
  },
    {
    id: 21,
    category: "Tailwind CSS",
    difficulty: "Medium",
    question: "Which utility classes are primarily used to style typography in Tailwind CSS?",
    options: [
      "text-*, font-*, leading-*, tracking-*",
      "grid-*, flex-*",
      "border-*, shadow-*",
      "translate-*, rotate-*",
    ],
    correctAnswer:
      "text-*, font-*, leading-*, tracking-*",
    explanation:
      "Tailwind provides comprehensive typography utilities including text sizes, font weights, text alignment, line height (leading), letter spacing (tracking), text decoration, text transformation, and font families.",
    points: 10,
    timeLimit: 35,
    tags: ["tailwind", "typography", "text", "fonts"],
  },

  {
    id: 22,
    category: "Tailwind CSS",
    difficulty: "Medium",
    question: "How are colors applied in Tailwind CSS?",
    options: [
      "Using predefined utility classes such as text-blue-500 and bg-red-600",
      "Only through custom CSS",
      "Using JavaScript objects",
      "Using HTML attributes",
    ],
    correctAnswer:
      "Using predefined utility classes such as text-blue-500 and bg-red-600",
    explanation:
      "Tailwind provides a comprehensive color palette with utilities for text, backgrounds, borders, rings, placeholders, gradients, and more. Developers can also customize the color palette in the Tailwind configuration.",
    points: 10,
    timeLimit: 35,
    tags: ["tailwind", "colors", "theme"],
  },

  {
    id: 23,
    category: "Tailwind CSS",
    difficulty: "Medium",
    question: "Which utilities are commonly used to style element backgrounds in Tailwind CSS?",
    options: [
      "bg-*, bg-gradient-*, from-*, via-*, to-*",
      "font-*, text-*",
      "grid-*, flex-*",
      "overflow-*",
    ],
    correctAnswer:
      "bg-*, bg-gradient-*, from-*, via-*, to-*",
    explanation:
      "Tailwind supports background colors, gradients, images, attachment, blend modes, position, repeat, and sizing through various background utility classes.",
    points: 10,
    timeLimit: 35,
    tags: ["tailwind", "background", "gradients"],
  },

  {
    id: 24,
    category: "Tailwind CSS",
    difficulty: "Medium",
    question: "Which utility classes are commonly used to style borders in Tailwind CSS?",
    options: [
      "border, border-*, border-{color}, divide-*",
      "font-bold",
      "flex-row",
      "translate-x-*",
    ],
    correctAnswer:
      "border, border-*, border-{color}, divide-*",
    explanation:
      "Tailwind provides utilities for border width, border color, border style, divide utilities, outline, and ring effects, making it easy to create visually appealing UI components.",
    points: 10,
    timeLimit: 35,
    tags: ["tailwind", "border", "styling"],
  },

  {
    id: 25,
    category: "Tailwind CSS",
    difficulty: "Hard",
    question: "What is the purpose of the rounded-* utilities in Tailwind CSS?",
    options: [
      "To apply border radius and create rounded corners",
      "To create shadows",
      "To center elements",
      "To resize images",
    ],
    correctAnswer:
      "To apply border radius and create rounded corners",
    explanation:
      "Tailwind offers border-radius utilities ranging from rounded-none to rounded-full, along with directional utilities like rounded-t-lg and rounded-br-xl for fine-grained control.",
    points: 15,
    timeLimit: 45,
    tags: ["tailwind", "border-radius", "rounded"],
  },

  {
    id: 26,
    category: "Tailwind CSS",
    difficulty: "Hard",
    question: "What is the primary purpose of shadow-* utilities in Tailwind CSS?",
    options: [
      "To create CSS animations",
      "To apply box-shadow effects for visual depth and elevation",
      "To modify typography",
      "To optimize layouts",
    ],
    correctAnswer:
      "To apply box-shadow effects for visual depth and elevation",
    explanation:
      "Utilities such as shadow-sm, shadow-md, shadow-lg, shadow-xl, and shadow-2xl help create depth and improve visual hierarchy within an interface.",
    points: 15,
    timeLimit: 45,
    tags: ["tailwind", "shadow", "ui"],
  },

  {
    id: 27,
    category: "Tailwind CSS",
    difficulty: "Hard",
    question: "How is opacity controlled in Tailwind CSS?",
    options: [
      "Using opacity-* utilities",
      "Using visibility-* utilities",
      "Using alpha-* utilities",
      "Using transparent-* utilities",
    ],
    correctAnswer: "Using opacity-* utilities",
    explanation:
      "Tailwind provides opacity utilities such as opacity-0, opacity-25, opacity-50, opacity-75, and opacity-100 to control an element's transparency.",
    points: 15,
    timeLimit: 45,
    tags: ["tailwind", "opacity", "styling"],
  },

  {
    id: 28,
    category: "Tailwind CSS",
    difficulty: "Hard",
    question: "Which utilities are commonly used for CSS transforms in Tailwind CSS?",
    options: [
      "rotate-*, scale-*, translate-*, skew-*",
      "grid-cols-*",
      "font-bold",
      "border-*",
    ],
    correctAnswer:
      "rotate-*, scale-*, translate-*, skew-*",
    explanation:
      "Tailwind provides transform utilities for rotating, translating, scaling, skewing, and changing transform origin, making animations and interactive UI effects easy to implement.",
    points: 15,
    timeLimit: 45,
    tags: ["tailwind", "transform", "animations"],
  },

  {
    id: 29,
    category: "Tailwind CSS",
    difficulty: "Expert",
    question: "What is the purpose of transition-* and animate-* utilities in Tailwind CSS?",
    options: [
      "To optimize database queries",
      "To create smooth transitions and predefined animations for interactive user interfaces",
      "To manage responsive layouts",
      "To configure plugins",
    ],
    correctAnswer:
      "To create smooth transitions and predefined animations for interactive user interfaces",
    explanation:
      "Tailwind includes transition utilities for controlling duration, timing functions, delays, and animated properties, along with built-in animations such as animate-spin, animate-pulse, animate-bounce, and animate-ping.",
    points: 20,
    timeLimit: 60,
    tags: [
      "tailwind",
      "transition",
      "animation",
      "interactive-ui",
      "performance",
    ],
  },

  {
    id: 30,
    category: "Tailwind CSS",
    difficulty: "Expert",
    question: "What is the purpose of state variants such as hover:, focus:, active:, disabled:, and focus-visible: in Tailwind CSS?",
    options: [
      "To create backend APIs",
      "To apply styles based on user interactions and component states",
      "To optimize JavaScript execution",
      "To generate responsive layouts",
    ],
    correctAnswer:
      "To apply styles based on user interactions and component states",
    explanation:
      "State variants allow developers to style elements based on interaction states. Examples include hover:bg-blue-600, focus:ring-2, active:scale-95, disabled:opacity-50, and focus-visible:outline-none, enabling accessible and interactive user experiences.",
    points: 20,
    timeLimit: 65,
    tags: [
      "tailwind",
      "hover",
      "focus",
      "active",
      "variants",
      "accessibility",
    ],
  },
    {
    id: 41,
    category: "Tailwind CSS",
    difficulty: "Expert",
    question: "What is the primary purpose of Purging Unused CSS in Tailwind CSS?",
    options: [
      "To remove JavaScript files",
      "To eliminate unused utility classes from the final CSS bundle, reducing file size",
      "To optimize images",
      "To generate responsive layouts",
    ],
    correctAnswer:
      "To eliminate unused utility classes from the final CSS bundle, reducing file size",
    explanation:
      "Tailwind scans the files specified in the content configuration and includes only the utility classes actually used in the project. This dramatically reduces the production CSS bundle size and improves page load performance.",
    points: 20,
    timeLimit: 60,
    tags: [
      "tailwind",
      "purge",
      "content",
      "performance",
      "production",
    ],
  },

  {
    id: 42,
    category: "Tailwind CSS",
    difficulty: "Expert",
    question: "Which approach is considered a best practice for building responsive layouts with Tailwind CSS?",
    options: [
      "Design desktop layouts first and ignore smaller devices",
      "Follow a mobile-first approach using responsive breakpoint prefixes such as sm:, md:, lg:, xl:, and 2xl:",
      "Write separate CSS files for every screen size",
      "Use only fixed pixel values",
    ],
    correctAnswer:
      "Follow a mobile-first approach using responsive breakpoint prefixes such as sm:, md:, lg:, xl:, and 2xl:",
    explanation:
      "Tailwind is designed around a mobile-first philosophy. Developers start with base utility classes and progressively enhance layouts for larger screens using responsive breakpoint modifiers.",
    points: 20,
    timeLimit: 60,
    tags: [
      "tailwind",
      "responsive",
      "mobile-first",
      "breakpoints",
      "best-practices",
    ],
  },

  {
    id: 43,
    category: "Tailwind CSS",
    difficulty: "Expert",
    question: "Why is accessibility an important consideration when using Tailwind CSS?",
    options: [
      "Because Tailwind automatically makes every website accessible",
      "Because developers must combine Tailwind utilities with semantic HTML, proper focus states, sufficient color contrast, and keyboard accessibility",
      "Because accessibility only matters for mobile devices",
      "Because Tailwind replaces WCAG guidelines",
    ],
    correctAnswer:
      "Because developers must combine Tailwind utilities with semantic HTML, proper focus states, sufficient color contrast, and keyboard accessibility",
    explanation:
      "Tailwind provides utilities for focus rings, screen-reader-only content, color control, and more, but developers are responsible for building accessible interfaces that follow WCAG guidelines and inclusive design principles.",
    points: 20,
    timeLimit: 60,
    tags: [
      "tailwind",
      "accessibility",
      "wcag",
      "focus",
      "semantic-html",
    ],
  },

  {
    id: 44,
    category: "Tailwind CSS",
    difficulty: "Expert",
    question: "What is the recommended approach for creating reusable UI components with Tailwind CSS?",
    options: [
      "Copy and paste utility classes throughout the project",
      "Build reusable components such as Button, Card, Modal, Input, and Navbar while maintaining a consistent design system",
      "Use only custom CSS classes",
      "Avoid component abstraction",
    ],
    correctAnswer:
      "Build reusable components such as Button, Card, Modal, Input, and Navbar while maintaining a consistent design system",
    explanation:
      "Production applications organize frequently used UI patterns into reusable components, reducing duplication, improving maintainability, and ensuring visual consistency across the application.",
    points: 20,
    timeLimit: 60,
    tags: [
      "tailwind",
      "components",
      "reusability",
      "design-system",
      "production",
    ],
  },

  {
    id: 45,
    category: "Tailwind CSS",
    difficulty: "Expert",
    question: "Why is Tailwind CSS widely used with React applications?",
    options: [
      "Because Tailwind replaces JSX",
      "Because Tailwind's utility-first approach works naturally with reusable React components, enabling fast and maintainable UI development",
      "Because React requires Tailwind CSS",
      "Because Tailwind automatically manages React state",
    ],
    correctAnswer:
      "Because Tailwind's utility-first approach works naturally with reusable React components, enabling fast and maintainable UI development",
    explanation:
      "React components encapsulate both behavior and presentation, making Tailwind's utility classes an excellent fit for building modular, reusable, and maintainable user interfaces.",
    points: 20,
    timeLimit: 60,
    tags: [
      "tailwind",
      "react",
      "components",
      "frontend",
      "integration",
    ],
  },

  {
    id: 46,
    category: "Tailwind CSS",
    difficulty: "Expert",
    question: "Why is Tailwind CSS commonly paired with Next.js?",
    options: [
      "Because Next.js requires Tailwind to function",
      "Because Tailwind integrates seamlessly with Next.js, enabling fast styling, optimized builds, and excellent developer experience",
      "Because Tailwind replaces Server Components",
      "Because Next.js cannot use regular CSS",
    ],
    correctAnswer:
      "Because Tailwind integrates seamlessly with Next.js, enabling fast styling, optimized builds, and excellent developer experience",
    explanation:
      "Next.js and Tailwind CSS complement each other by providing efficient development workflows, optimized production builds, responsive design, and component-based UI architecture.",
    points: 20,
    timeLimit: 60,
    tags: [
      "tailwind",
      "nextjs",
      "integration",
      "performance",
      "frontend",
    ],
  },

  {
    id: 47,
    category: "Tailwind CSS",
    difficulty: "Expert",
    question: "What is Tailwind UI?",
    options: [
      "A JavaScript framework",
      "A premium collection of professionally designed UI components built with Tailwind CSS",
      "A database management tool",
      "A CSS compiler",
    ],
    correctAnswer:
      "A premium collection of professionally designed UI components built with Tailwind CSS",
    explanation:
      "Tailwind UI is an official premium component library created by the Tailwind CSS team. It provides production-ready components and templates for dashboards, forms, navigation, authentication, marketing pages, and more.",
    points: 20,
    timeLimit: 60,
    tags: [
      "tailwind",
      "tailwind-ui",
      "components",
      "ui-library",
      "official",
    ],
  },

  {
    id: 48,
    category: "Tailwind CSS",
    difficulty: "Expert",
    question: "Which combination of practices provides the best production performance when using Tailwind CSS?",
    options: [
      "Generate every utility class and avoid responsive utilities",
      "Use JIT compilation, purge unused CSS, optimize images, lazy load assets, and minimize custom CSS",
      "Write all styles inline",
      "Disable caching",
    ],
    correctAnswer:
      "Use JIT compilation, purge unused CSS, optimize images, lazy load assets, and minimize custom CSS",
    explanation:
      "High-performance Tailwind applications leverage JIT compilation, remove unused utilities, optimize assets, implement lazy loading, use efficient caching strategies, and maintain a clean utility-first codebase.",
    points: 20,
    timeLimit: 65,
    tags: [
      "tailwind",
      "performance",
      "optimization",
      "jit",
      "production",
    ],
  },

  {
    id: 49,
    category: "Tailwind CSS",
    difficulty: "Expert",
    question: "Which folder structure is generally recommended for enterprise Tailwind CSS projects?",
    options: [
      "Store every component inside one file",
      "Organize reusable UI components, layouts, pages, hooks, utilities, and design tokens into a modular folder structure",
      "Place all styles inside index.css",
      "Avoid creating reusable components",
    ],
    correctAnswer:
      "Organize reusable UI components, layouts, pages, hooks, utilities, and design tokens into a modular folder structure",
    explanation:
      "Enterprise applications benefit from modular project organization with reusable components, shared utilities, layouts, theme configuration, and design tokens, making the codebase easier to maintain and scale.",
    points: 20,
    timeLimit: 70,
    tags: [
      "tailwind",
      "architecture",
      "folder-structure",
      "enterprise",
      "best-practices",
    ],
  },

  {
    id: 50,
    category: "Tailwind CSS",
    difficulty: "Expert",
    question: "You're building a production-grade SaaS platform expected to serve millions of users. Which Tailwind CSS architecture represents the best practice?",
    options: [
      "Write long utility class strings everywhere without reusable components",
      "Use a scalable design system with reusable UI components, custom theme configuration, responsive design, accessibility, dark mode, performance optimization, and consistent styling conventions",
      "Use inline styles instead of Tailwind utilities",
      "Place every style inside a single CSS file",
    ],
    correctAnswer:
      "Use a scalable design system with reusable UI components, custom theme configuration, responsive design, accessibility, dark mode, performance optimization, and consistent styling conventions",
    explanation:
      "Large-scale Tailwind CSS applications should follow a design-system approach with reusable components, custom themes, responsive layouts, accessibility standards, dark mode support, optimized builds, proper folder organization, and consistent coding conventions. This architecture improves scalability, maintainability, developer productivity, and long-term project success.",
    points: 20,
    timeLimit: 75,
    tags: [
      "tailwind",
      "architecture",
      "design-system",
      "production",
      "performance",
      "accessibility",
      "interview",
      "senior-developer",
    ],
  },
];

export default tailwindQuestions;