const cssQuestions = [
  {
    id: 1,
    category: "CSS",
    difficulty: "Easy",
    question: "What does CSS stand for?",
    options: [
      "Creative Style Sheets",
      "Computer Style Sheets",
      "Cascading Style Sheets",
      "Colorful Style Sheets",
    ],
    correctAnswer: "Cascading Style Sheets",
    explanation:
      "CSS stands for Cascading Style Sheets. It is used to style and design HTML documents.",
    points: 5,
    timeLimit: 30,
    tags: ["css", "basics"],
  },

  {
    id: 2,
    category: "CSS",
    difficulty: "Easy",
    question: "Which HTML tag is used to link an external CSS file?",
    options: ["<script>", "<style>", "<css>", "<link>"],
    correctAnswer: "<link>",
    explanation:
      "The <link> element is used inside the <head> section to connect an external stylesheet.",
    points: 5,
    timeLimit: 30,
    tags: ["css", "link", "external-css"],
  },

  {
    id: 3,
    category: "CSS",
    difficulty: "Easy",
    question: "Which property is used to change the text color?",
    options: ["font-color", "text-color", "color", "foreground"],
    correctAnswer: "color",
    explanation:
      "The color property defines the text color of an element.",
    points: 5,
    timeLimit: 30,
    tags: ["css", "color"],
  },

  {
    id: 4,
    category: "CSS",
    difficulty: "Easy",
    question: "Which property changes the background color of an element?",
    options: [
      "background-style",
      "background-color",
      "color",
      "bg-color",
    ],
    correctAnswer: "background-color",
    explanation:
      "The background-color property specifies the background color of an element.",
    points: 5,
    timeLimit: 30,
    tags: ["css", "background"],
  },

  {
    id: 5,
    category: "CSS",
    difficulty: "Easy",
    question: "Which CSS property is used to change the font size?",
    options: ["text-size", "font-style", "font-size", "size"],
    correctAnswer: "font-size",
    explanation:
      "The font-size property specifies the size of the text.",
    points: 5,
    timeLimit: 30,
    tags: ["css", "font"],
  },

  {
    id: 6,
    category: "CSS",
    difficulty: "Easy",
    question: "Which selector targets an element with id='header'?",
    options: [".header", "#header", "*header", "header"],
    correctAnswer: "#header",
    explanation:
      "The # selector is used to target an element by its unique id.",
    points: 5,
    timeLimit: 30,
    tags: ["css", "selectors", "id"],
  },

  {
    id: 7,
    category: "CSS",
    difficulty: "Easy",
    question: "Which selector targets all elements with class='card'?",
    options: ["#card", ".card", "*card", "card"],
    correctAnswer: ".card",
    explanation:
      "The dot (.) selector is used to target elements by class name.",
    points: 5,
    timeLimit: 30,
    tags: ["css", "selectors", "class"],
  },

  {
    id: 8,
    category: "CSS",
    difficulty: "Easy",
    question: "Which property is used to make text bold?",
    options: [
      "font-style",
      "font-weight",
      "text-weight",
      "bold",
    ],
    correctAnswer: "font-weight",
    explanation:
      "The font-weight property controls the thickness of the text. A value of bold makes the text bold.",
    points: 5,
    timeLimit: 30,
    tags: ["css", "font"],
  },

  {
    id: 9,
    category: "CSS",
    difficulty: "Easy",
    question: "Which property is used to align text horizontally?",
    options: [
      "align",
      "text-position",
      "text-align",
      "justify-content",
    ],
    correctAnswer: "text-align",
    explanation:
      "The text-align property controls the horizontal alignment of inline content.",
    points: 5,
    timeLimit: 30,
    tags: ["css", "text"],
  },

  {
    id: 10,
    category: "CSS",
    difficulty: "Easy",
    question: "Which CSS property controls the space outside an element?",
    options: [
      "padding",
      "spacing",
      "margin",
      "border-spacing",
    ],
    correctAnswer: "margin",
    explanation:
      "Margin creates space outside an element's border, while padding creates space inside the border.",
    points: 5,
    timeLimit: 30,
    tags: ["css", "box-model", "margin"],
  },
    {
    id: 11,
    category: "CSS",
    difficulty: "Easy",
    question: "Which selector targets all <p> elements inside a <div> element?",
    options: [
      "div + p",
      "div > p",
      "div p",
      "div ~ p",
    ],
    correctAnswer: "div p",
    explanation:
      "The descendant selector (space) selects all matching descendants, regardless of nesting level.",
    points: 5,
    timeLimit: 30,
    tags: ["css", "selectors", "descendant"],
  },

  {
    id: 12,
    category: "CSS",
    difficulty: "Easy",
    question: "Which selector targets only the direct child <p> elements of a <div>?",
    options: [
      "div p",
      "div > p",
      "div + p",
      "div ~ p",
    ],
    correctAnswer: "div > p",
    explanation:
      "The child selector (>) selects only immediate children of the specified parent element.",
    points: 5,
    timeLimit: 30,
    tags: ["css", "selectors", "child"],
  },

  {
    id: 13,
    category: "CSS",
    difficulty: "Easy",
    question: "Which selector targets the first <p> element immediately following a <div>?",
    options: [
      "div > p",
      "div p",
      "div + p",
      "div ~ p",
    ],
    correctAnswer: "div + p",
    explanation:
      "The adjacent sibling selector (+) selects the first sibling immediately after the specified element.",
    points: 5,
    timeLimit: 30,
    tags: ["css", "selectors", "adjacent-sibling"],
  },

  {
    id: 14,
    category: "CSS",
    difficulty: "Easy",
    question: "Which selector targets all sibling <p> elements that come after a <div>?",
    options: [
      "div + p",
      "div p",
      "div ~ p",
      "div > p",
    ],
    correctAnswer: "div ~ p",
    explanation:
      "The general sibling selector (~) selects all matching sibling elements that follow the specified element.",
    points: 5,
    timeLimit: 30,
    tags: ["css", "selectors", "general-sibling"],
  },

  {
    id: 15,
    category: "CSS",
    difficulty: "Medium",
    question: "According to the CSS Box Model, which property creates space between the content and the border?",
    options: [
      "margin",
      "padding",
      "spacing",
      "border-spacing",
    ],
    correctAnswer: "padding",
    explanation:
      "Padding creates internal space between an element's content and its border.",
    points: 10,
    timeLimit: 35,
    tags: ["css", "box-model", "padding"],
  },

  {
    id: 16,
    category: "CSS",
    difficulty: "Medium",
    question: "By default, the width property applies to which part of the CSS Box Model?",
    options: [
      "Content only",
      "Content + Padding",
      "Content + Padding + Border",
      "Entire Box",
    ],
    correctAnswer: "Content only",
    explanation:
      "With the default box-sizing: content-box, width applies only to the content area. Padding and border are added outside it.",
    points: 10,
    timeLimit: 40,
    tags: ["css", "box-model", "content-box"],
  },

  {
    id: 17,
    category: "CSS",
    difficulty: "Medium",
    question: "Which value of the box-sizing property includes padding and border within the specified width and height?",
    options: [
      "padding-box",
      "content-box",
      "border-box",
      "inherit-box",
    ],
    correctAnswer: "border-box",
    explanation:
      "box-sizing: border-box makes the declared width and height include content, padding, and border.",
    points: 10,
    timeLimit: 40,
    tags: ["css", "box-sizing", "border-box"],
  },

  {
    id: 18,
    category: "CSS",
    difficulty: "Medium",
    question: "Which CSS unit is relative to the font size of the root (<html>) element?",
    options: [
      "em",
      "px",
      "rem",
      "%",
    ],
    correctAnswer: "rem",
    explanation:
      "The rem unit is based on the root element's font size, making it ideal for consistent and scalable layouts.",
    points: 10,
    timeLimit: 35,
    tags: ["css", "units", "rem"],
  },

  {
    id: 19,
    category: "CSS",
    difficulty: "Medium",
    question: "What is the main difference between em and rem units?",
    options: [
      "em is absolute while rem is relative.",
      "em is relative to the parent element, while rem is relative to the root element.",
      "rem is relative to the viewport, while em is relative to pixels.",
      "There is no difference.",
    ],
    correctAnswer:
      "em is relative to the parent element, while rem is relative to the root element.",
    explanation:
      "em depends on the computed font size of its parent, while rem always references the root (<html>) font size.",
    points: 10,
    timeLimit: 40,
    tags: ["css", "units", "em", "rem"],
  },

  {
    id: 20,
    category: "CSS",
    difficulty: "Medium",
    question: "Which CSS unit represents 1% of the viewport width?",
    options: [
      "vh",
      "vw",
      "%",
      "vmin",
    ],
    correctAnswer: "vw",
    explanation:
      "1vw equals 1% of the viewport's width, making it useful for responsive layouts and typography.",
    points: 10,
    timeLimit: 35,
    tags: ["css", "units", "viewport", "vw"],
  },
    {
    id: 21,
    category: "CSS",
    difficulty: "Medium",
    question: "Which CSS property is used to create a Flexbox container?",
    options: [
      "display: flex",
      "display: grid",
      "flex: container",
      "layout: flex",
    ],
    correctAnswer: "display: flex",
    explanation:
      "Setting display: flex on an element makes it a Flexbox container, enabling flexible layout for its direct children.",
    points: 10,
    timeLimit: 35,
    tags: ["css", "flexbox", "display"],
  },

  {
    id: 22,
    category: "CSS",
    difficulty: "Medium",
    question: "By default, what is the main axis direction in a Flexbox container?",
    options: [
      "Column",
      "Row",
      "Row Reverse",
      "Column Reverse",
    ],
    correctAnswer: "Row",
    explanation:
      "The default value of flex-direction is row, so flex items are placed horizontally from left to right.",
    points: 10,
    timeLimit: 35,
    tags: ["css", "flexbox", "flex-direction"],
  },

  {
    id: 23,
    category: "CSS",
    difficulty: "Medium",
    question: "Which Flexbox property aligns items along the main axis?",
    options: [
      "align-items",
      "justify-content",
      "align-content",
      "place-items",
    ],
    correctAnswer: "justify-content",
    explanation:
      "justify-content controls how flex items are distributed along the main axis.",
    points: 10,
    timeLimit: 40,
    tags: ["css", "flexbox", "justify-content"],
  },

  {
    id: 24,
    category: "CSS",
    difficulty: "Medium",
    question: "Which Flexbox property aligns items along the cross axis?",
    options: [
      "justify-content",
      "align-items",
      "align-self",
      "place-content",
    ],
    correctAnswer: "align-items",
    explanation:
      "align-items controls the alignment of all flex items along the cross axis.",
    points: 10,
    timeLimit: 40,
    tags: ["css", "flexbox", "align-items"],
  },

  {
    id: 25,
    category: "CSS",
    difficulty: "Medium",
    question: "Which property allows Flexbox items to move onto multiple lines when necessary?",
    options: [
      "flex-wrap",
      "flex-grow",
      "flex-direction",
      "overflow-wrap",
    ],
    correctAnswer: "flex-wrap",
    explanation:
      "The flex-wrap property controls whether flex items stay on one line or wrap onto multiple lines.",
    points: 10,
    timeLimit: 40,
    tags: ["css", "flexbox", "flex-wrap"],
  },

  {
    id: 26,
    category: "CSS",
    difficulty: "Medium",
    question: "Which CSS property is used to create a Grid container?",
    options: [
      "display: flex",
      "display: block",
      "display: inline-grid",
      "display: grid",
    ],
    correctAnswer: "display: grid",
    explanation:
      "Setting display: grid turns an element into a CSS Grid container.",
    points: 10,
    timeLimit: 35,
    tags: ["css", "grid", "display"],
  },

  {
    id: 27,
    category: "CSS",
    difficulty: "Medium",
    question: "Which CSS property defines the columns in a Grid layout?",
    options: [
      "grid-template-columns",
      "grid-columns",
      "column-template",
      "grid-column-layout",
    ],
    correctAnswer: "grid-template-columns",
    explanation:
      "grid-template-columns specifies the number and size of columns in a CSS Grid container.",
    points: 10,
    timeLimit: 40,
    tags: ["css", "grid", "grid-template-columns"],
  },

  {
    id: 28,
    category: "CSS",
    difficulty: "Hard",
    question: "Which position value keeps an element fixed relative to the browser viewport, even while scrolling?",
    options: [
      "absolute",
      "relative",
      "sticky",
      "fixed",
    ],
    correctAnswer: "fixed",
    explanation:
      "Elements with position: fixed remain fixed relative to the viewport and do not move during scrolling.",
    points: 15,
    timeLimit: 45,
    tags: ["css", "position", "fixed"],
  },

  {
    id: 29,
    category: "CSS",
    difficulty: "Hard",
    question: "What is the default value of the position property in CSS?",
    options: [
      "relative",
      "absolute",
      "static",
      "fixed",
    ],
    correctAnswer: "static",
    explanation:
      "All HTML elements are positioned as static by default, meaning they follow the normal document flow.",
    points: 15,
    timeLimit: 40,
    tags: ["css", "position", "static"],
  },

  {
    id: 30,
    category: "CSS",
    difficulty: "Hard",
    question: "An element with position: absolute is positioned relative to which element?",
    options: [
      "The browser viewport",
      "Its nearest positioned ancestor",
      "The document body only",
      "The previous sibling element",
    ],
    correctAnswer: "Its nearest positioned ancestor",
    explanation:
      "An absolutely positioned element is positioned relative to its nearest ancestor whose position is not static. If no such ancestor exists, it is positioned relative to the initial containing block.",
    points: 15,
    timeLimit: 45,
    tags: ["css", "position", "absolute"],
  },
    {
    id: 31,
    category: "CSS",
    difficulty: "Hard",
    question: "Which CSS rule is used to apply styles based on the device's screen size?",
    options: [
      "@supports",
      "@media",
      "@keyframes",
      "@layer",
    ],
    correctAnswer: "@media",
    explanation:
      "Media queries (@media) allow CSS to apply different styles depending on screen size, resolution, orientation, and other device characteristics.",
    points: 15,
    timeLimit: 45,
    tags: ["css", "responsive", "media-query"],
  },

  {
    id: 32,
    category: "CSS",
    difficulty: "Hard",
    question: "Which media query is commonly used to apply styles for screens that are 768px wide or smaller?",
    options: [
      "@media (max-width: 768px)",
      "@media (min-width: 768px)",
      "@media (width: 768px)",
      "@media (screen-width: 768px)",
    ],
    correctAnswer: "@media (max-width: 768px)",
    explanation:
      "The max-width media query targets devices whose viewport width is less than or equal to the specified value.",
    points: 15,
    timeLimit: 45,
    tags: ["css", "responsive", "media-query"],
  },

  {
    id: 33,
    category: "CSS",
    difficulty: "Hard",
    question: "Which CSS property specifies the duration of a transition effect?",
    options: [
      "transition-effect",
      "transition-speed",
      "transition-duration",
      "animation-duration",
    ],
    correctAnswer: "transition-duration",
    explanation:
      "transition-duration defines how long a transition should take to complete.",
    points: 15,
    timeLimit: 45,
    tags: ["css", "transition"],
  },

  {
    id: 34,
    category: "CSS",
    difficulty: "Hard",
    question: "Which CSS property is commonly used to rotate an element?",
    options: [
      "rotate",
      "transform",
      "animation",
      "transition",
    ],
    correctAnswer: "transform",
    explanation:
      "The transform property supports multiple transformation functions such as rotate(), scale(), translate(), and skew().",
    points: 15,
    timeLimit: 45,
    tags: ["css", "transform", "rotate"],
  },

  {
    id: 35,
    category: "CSS",
    difficulty: "Hard",
    question: "Which function enlarges an element using the transform property?",
    options: [
      "zoom()",
      "scale()",
      "grow()",
      "resize()",
    ],
    correctAnswer: "scale()",
    explanation:
      "transform: scale() increases or decreases the size of an element while preserving its proportions.",
    points: 15,
    timeLimit: 45,
    tags: ["css", "transform", "scale"],
  },

  {
    id: 36,
    category: "CSS",
    difficulty: "Hard",
    question: "Which at-rule is used to define CSS animations?",
    options: [
      "@animation",
      "@transition",
      "@keyframes",
      "@frames",
    ],
    correctAnswer: "@keyframes",
    explanation:
      "@keyframes defines the intermediate steps of an animation by specifying styles at various points during the animation sequence.",
    points: 15,
    timeLimit: 45,
    tags: ["css", "animation", "keyframes"],
  },

  {
    id: 37,
    category: "CSS",
    difficulty: "Hard",
    question: "How do you declare a CSS custom property (CSS Variable)?",
    options: [
      "$primary-color: blue;",
      "@primary-color: blue;",
      "--primary-color: blue;",
      "var-primary-color: blue;",
    ],
    correctAnswer: "--primary-color: blue;",
    explanation:
      "CSS custom properties are declared using two leading hyphens (--) and can be reused throughout the stylesheet.",
    points: 15,
    timeLimit: 45,
    tags: ["css", "variables", "custom-properties"],
  },

  {
    id: 38,
    category: "CSS",
    difficulty: "Hard",
    question: "Which function is used to access a CSS custom property?",
    options: [
      "css()",
      "variable()",
      "value()",
      "var()",
    ],
    correctAnswer: "var()",
    explanation:
      "The var() function retrieves the value of a CSS custom property, for example: color: var(--primary-color);",
    points: 15,
    timeLimit: 45,
    tags: ["css", "variables", "var"],
  },

  {
    id: 39,
    category: "CSS",
    difficulty: "Hard",
    question: "Which modern CSS feature automatically adjusts the number of columns based on available space when using Grid?",
    options: [
      "repeat(auto-fit, minmax())",
      "grid-auto-column",
      "flex-wrap",
      "grid-responsive",
    ],
    correctAnswer: "repeat(auto-fit, minmax())",
    explanation:
      "repeat(auto-fit, minmax()) is commonly used to create fully responsive Grid layouts that automatically fit items into available space.",
    points: 15,
    timeLimit: 50,
    tags: ["css", "grid", "responsive", "modern-css"],
  },

  {
    id: 40,
    category: "CSS",
    difficulty: "Hard",
    question: "Which CSS function allows values to be calculated dynamically using mathematical expressions?",
    options: [
      "math()",
      "compute()",
      "calc()",
      "evaluate()",
    ],
    correctAnswer: "calc()",
    explanation:
      "The calc() function performs calculations using different CSS units, such as width: calc(100% - 40px); making layouts more flexible and responsive.",
    points: 15,
    timeLimit: 50,
    tags: ["css", "calc", "modern-css", "responsive"],
  },
    {
    id: 41,
    category: "CSS",
    difficulty: "Hard",
    question: "Which selector has the highest specificity?",
    options: [
      ".container .title",
      "#header .title",
      "div p.title",
      "*",
    ],
    correctAnswer: "#header .title",
    explanation:
      "ID selectors have higher specificity than class, attribute, pseudo-class, and element selectors. #header .title has the highest specificity among the given options.",
    points: 15,
    timeLimit: 50,
    tags: ["css", "specificity", "selectors"],
  },

  {
    id: 42,
    category: "CSS",
    difficulty: "Expert",
    question: "When multiple CSS rules target the same element with equal specificity, which rule is applied?",
    options: [
      "The first declared rule",
      "The last declared rule",
      "The rule with more properties",
      "The browser chooses randomly",
    ],
    correctAnswer: "The last declared rule",
    explanation:
      "According to the CSS Cascade, when specificity is equal, the rule that appears later in the stylesheet takes precedence.",
    points: 20,
    timeLimit: 60,
    tags: ["css", "cascade", "specificity"],
  },

  {
    id: 43,
    category: "CSS",
    difficulty: "Expert",
    question: "Which CSS property is inherited by default from a parent element?",
    options: [
      "margin",
      "padding",
      "border",
      "color",
    ],
    correctAnswer: "color",
    explanation:
      "Properties like color, font-family, and line-height are inherited by default, whereas margin, padding, and border are not.",
    points: 20,
    timeLimit: 55,
    tags: ["css", "inheritance"],
  },

  {
    id: 44,
    category: "CSS",
    difficulty: "Expert",
    question: "Which pseudo-element is used to insert content before an element's actual content?",
    options: [
      ":before",
      "::first-letter",
      "::before",
      ":first-line",
    ],
    correctAnswer: "::before",
    explanation:
      "The modern syntax uses double colons (::before) for pseudo-elements. It is commonly used with the content property.",
    points: 20,
    timeLimit: 55,
    tags: ["css", "pseudo-elements", "before"],
  },

  {
    id: 45,
    category: "CSS",
    difficulty: "Expert",
    question: "What is required for the z-index property to take effect?",
    options: [
      "The element must have display: flex",
      "The element must be positioned (relative, absolute, fixed, or sticky)",
      "The element must have overflow: hidden",
      "Nothing; z-index always works",
    ],
    correctAnswer:
      "The element must be positioned (relative, absolute, fixed, or sticky)",
    explanation:
      "z-index affects stacking order only on positioned elements (and flex/grid items in modern CSS). Typically, position must not be static.",
    points: 20,
    timeLimit: 60,
    tags: ["css", "z-index", "stacking-context"],
  },

  {
    id: 46,
    category: "CSS",
    difficulty: "Expert",
    question: "How does position: sticky behave?",
    options: [
      "It behaves exactly like fixed positioning.",
      "It behaves like relative until a scroll threshold is reached, then sticks within its container.",
      "It always stays at the top of the viewport.",
      "It behaves exactly like absolute positioning.",
    ],
    correctAnswer:
      "It behaves like relative until a scroll threshold is reached, then sticks within its container.",
    explanation:
      "A sticky element scrolls normally until it reaches the specified offset (e.g., top: 0), after which it remains fixed within its nearest scrolling container.",
    points: 20,
    timeLimit: 60,
    tags: ["css", "sticky", "position"],
  },

  {
    id: 47,
    category: "CSS",
    difficulty: "Expert",
    question: "What is the primary advantage of the :is() pseudo-class?",
    options: [
      "It increases selector specificity.",
      "It groups multiple selectors into one, reducing repetition.",
      "It disables CSS inheritance.",
      "It creates CSS variables.",
    ],
    correctAnswer:
      "It groups multiple selectors into one, reducing repetition.",
    explanation:
      "The :is() pseudo-class allows multiple selectors to share the same declaration block, making stylesheets shorter and easier to maintain.",
    points: 20,
    timeLimit: 60,
    tags: ["css", ":is()", "modern-css"],
  },

  {
    id: 48,
    category: "CSS",
    difficulty: "Expert",
    question: "What is the main difference between :is() and :where()?",
    options: [
      ":where() has higher specificity than :is().",
      ":is() always has zero specificity.",
      ":where() always has zero specificity, while :is() adopts the specificity of its most specific selector.",
      "There is no difference.",
    ],
    correctAnswer:
      ":where() always has zero specificity, while :is() adopts the specificity of its most specific selector.",
    explanation:
      "This makes :where() particularly useful for writing low-specificity utility styles that are easy to override.",
    points: 20,
    timeLimit: 65,
    tags: ["css", ":where()", ":is()", "specificity"],
  },

  {
    id: 49,
    category: "CSS",
    difficulty: "Expert",
    question: "What is the purpose of the clamp() CSS function?",
    options: [
      "To limit animations.",
      "To create responsive values with minimum, preferred, and maximum limits.",
      "To clamp overflowing elements inside containers.",
      "To prevent text selection.",
    ],
    correctAnswer:
      "To create responsive values with minimum, preferred, and maximum limits.",
    explanation:
      "clamp(min, preferred, max) is commonly used for responsive typography and spacing without requiring media queries.",
    points: 20,
    timeLimit: 60,
    tags: ["css", "clamp()", "responsive", "modern-css"],
  },

  {
    id: 50,
    category: "CSS",
    difficulty: "Expert",
    question: "Which statement correctly describes modern CSS features @layer and Container Queries?",
    options: [
      "@layer creates CSS variables, and Container Queries replace Flexbox.",
      "@layer controls cascade order between style layers, while Container Queries apply styles based on a container's size instead of the viewport.",
      "@layer is used only with animations, and Container Queries only work with Grid.",
      "Both features are deprecated in modern browsers.",
    ],
    correctAnswer:
      "@layer controls cascade order between style layers, while Container Queries apply styles based on a container's size instead of the viewport.",
    explanation:
      "The @layer at-rule gives developers explicit control over the CSS cascade, while Container Queries enable truly component-based responsive design by reacting to the size of the parent container instead of the viewport.",
    points: 20,
    timeLimit: 70,
    tags: [
      "css",
      "@layer",
      "container-queries",
      "cascade",
      "modern-css",
      "expert",
    ],
  },
];

export default cssQuestions;