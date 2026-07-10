const htmlQuestions = [
  {
    id: 1,
    category: "HTML",
    difficulty: "Easy",
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "High Text Machine Language",
      "Hyper Transfer Markup Language",
      "Home Tool Markup Language",
    ],
    correctAnswer: "Hyper Text Markup Language",
    explanation:
      "HTML stands for Hyper Text Markup Language. It is the standard markup language used to create and structure web pages.",
    points: 5,
    timeLimit: 30,
    tags: ["html", "basics", "markup"],
  },

  {
    id: 2,
    category: "HTML",
    difficulty: "Easy",
    question: "Which HTML element is the root element of every HTML document?",
    options: [
      "<body>",
      "<head>",
      "<html>",
      "<main>",
    ],
    correctAnswer: "<html>",
    explanation:
      "The <html> element is the root element that contains the entire HTML document.",
    points: 5,
    timeLimit: 30,
    tags: ["html", "document"],
  },

  {
    id: 3,
    category: "HTML",
    difficulty: "Easy",
    question: "Which HTML element contains metadata about the webpage?",
    options: [
      "<body>",
      "<footer>",
      "<head>",
      "<section>",
    ],
    correctAnswer: "<head>",
    explanation:
      "The <head> element contains metadata such as the page title, stylesheets, scripts, character encoding, and SEO-related tags.",
    points: 5,
    timeLimit: 30,
    tags: ["html", "head", "metadata"],
  },

  {
    id: 4,
    category: "HTML",
    difficulty: "Easy",
    question: "Which HTML element displays the title of a webpage in the browser tab?",
    options: [
      "<meta>",
      "<title>",
      "<header>",
      "<caption>",
    ],
    correctAnswer: "<title>",
    explanation:
      "The <title> element defines the title displayed in the browser tab and is important for SEO.",
    points: 5,
    timeLimit: 30,
    tags: ["html", "title", "seo"],
  },

  {
    id: 5,
    category: "HTML",
    difficulty: "Easy",
    question: "Which HTML element is used to create a hyperlink?",
    options: [
      "<link>",
      "<a>",
      "<href>",
      "<url>",
    ],
    correctAnswer: "<a>",
    explanation:
      "The anchor (<a>) element creates hyperlinks using the href attribute.",
    points: 5,
    timeLimit: 30,
    tags: ["html", "anchor", "links"],
  },

  {
    id: 6,
    category: "HTML",
    difficulty: "Easy",
    question: "Which attribute specifies the destination URL of a hyperlink?",
    options: [
      "src",
      "link",
      "href",
      "url",
    ],
    correctAnswer: "href",
    explanation:
      "The href attribute specifies the destination URL for hyperlinks created with the <a> element.",
    points: 5,
    timeLimit: 30,
    tags: ["html", "href", "anchor"],
  },

  {
    id: 7,
    category: "HTML",
    difficulty: "Easy",
    question: "Which HTML element is used to display an image?",
    options: [
      "<picture>",
      "<image>",
      "<img>",
      "<photo>",
    ],
    correctAnswer: "<img>",
    explanation:
      "The <img> element embeds an image into an HTML document using the src attribute.",
    points: 5,
    timeLimit: 30,
    tags: ["html", "image", "img"],
  },

  {
    id: 8,
    category: "HTML",
    difficulty: "Easy",
    question: "Which attribute provides alternative text for an image?",
    options: [
      "title",
      "description",
      "alt",
      "text",
    ],
    correctAnswer: "alt",
    explanation:
      "The alt attribute provides alternative text for accessibility and is displayed if the image cannot be loaded.",
    points: 5,
    timeLimit: 30,
    tags: ["html", "accessibility", "images"],
  },

  {
    id: 9,
    category: "HTML",
    difficulty: "Easy",
    question: "Which HTML element is used to create an unordered list?",
    options: [
      "<ol>",
      "<list>",
      "<ul>",
      "<li>",
    ],
    correctAnswer: "<ul>",
    explanation:
      "The <ul> element creates an unordered (bulleted) list. Each list item is defined using the <li> element.",
    points: 5,
    timeLimit: 30,
    tags: ["html", "lists", "ul"],
  },

  {
    id: 10,
    category: "HTML",
    difficulty: "Easy",
    question: "Which HTML element is used to create the largest heading?",
    options: [
      "<heading>",
      "<h6>",
      "<head>",
      "<h1>",
    ],
    correctAnswer: "<h1>",
    explanation:
      "The <h1> element represents the highest-level heading, while <h6> is the lowest-level heading.",
    points: 5,
    timeLimit: 30,
    tags: ["html", "headings"],
  },
    {
    id: 11,
    category: "HTML",
    difficulty: "Easy",
    question: "Which HTML element is used to create a form?",
    options: [
      "<input>",
      "<form>",
      "<fieldset>",
      "<section>",
    ],
    correctAnswer: "<form>",
    explanation:
      "The <form> element is used to collect user input and submit it to a server for processing.",
    points: 5,
    timeLimit: 30,
    tags: ["html", "forms"],
  },

  {
    id: 12,
    category: "HTML",
    difficulty: "Easy",
    question: "Which HTML element is used to create a clickable text label for a form control?",
    options: [
      "<caption>",
      "<label>",
      "<legend>",
      "<span>",
    ],
    correctAnswer: "<label>",
    explanation:
      "The <label> element improves accessibility by associating descriptive text with form controls using the 'for' attribute.",
    points: 5,
    timeLimit: 30,
    tags: ["html", "forms", "label", "accessibility"],
  },

  {
    id: 13,
    category: "HTML",
    difficulty: "Medium",
    question: "Which input type is specifically designed for validating email addresses?",
    options: [
      "text",
      "mail",
      "email",
      "string",
    ],
    correctAnswer: "email",
    explanation:
      "The email input type provides built-in browser validation to ensure the entered value follows a valid email format.",
    points: 10,
    timeLimit: 35,
    tags: ["html", "forms", "input", "validation"],
  },

  {
    id: 14,
    category: "HTML",
    difficulty: "Medium",
    question: "Which HTML element provides a dropdown list of predefined options?",
    options: [
      "<option>",
      "<datalist>",
      "<select>",
      "<textarea>",
    ],
    correctAnswer: "<select>",
    explanation:
      "The <select> element creates a dropdown menu, while each selectable item is defined using an <option> element.",
    points: 10,
    timeLimit: 35,
    tags: ["html", "forms", "select"],
  },

  {
    id: 15,
    category: "HTML",
    difficulty: "Medium",
    question: "Which HTML element is used for multi-line text input?",
    options: [
      "<input type='text'>",
      "<textbox>",
      "<textarea>",
      "<multiline>",
    ],
    correctAnswer: "<textarea>",
    explanation:
      "The <textarea> element allows users to enter multiple lines of text, making it suitable for comments, descriptions, and messages.",
    points: 10,
    timeLimit: 35,
    tags: ["html", "forms", "textarea"],
  },

  {
    id: 16,
    category: "HTML",
    difficulty: "Medium",
    question: "Which HTML attribute makes a form field mandatory before submission?",
    options: [
      "mandatory",
      "required",
      "validate",
      "needed",
    ],
    correctAnswer: "required",
    explanation:
      "The required attribute enables built-in browser validation and prevents form submission until the field is completed.",
    points: 10,
    timeLimit: 35,
    tags: ["html", "validation", "required"],
  },

  {
    id: 17,
    category: "HTML",
    difficulty: "Medium",
    question: "Which HTML element groups the header rows of a table?",
    options: [
      "<tbody>",
      "<thead>",
      "<tfoot>",
      "<trhead>",
    ],
    correctAnswer: "<thead>",
    explanation:
      "The <thead> element groups table header rows, improving document structure and accessibility.",
    points: 10,
    timeLimit: 40,
    tags: ["html", "tables", "thead"],
  },

  {
    id: 18,
    category: "HTML",
    difficulty: "Medium",
    question: "Which HTML element is used to define the main content of a table?",
    options: [
      "<tbody>",
      "<tablebody>",
      "<content>",
      "<main>",
    ],
    correctAnswer: "<tbody>",
    explanation:
      "The <tbody> element contains the primary data rows of a table and separates them from the table header and footer.",
    points: 10,
    timeLimit: 40,
    tags: ["html", "tables", "tbody"],
  },

  {
    id: 19,
    category: "HTML",
    difficulty: "Medium",
    question: "Which HTML element is specifically used to create a description list?",
    options: [
      "<ul>",
      "<ol>",
      "<dl>",
      "<list>",
    ],
    correctAnswer: "<dl>",
    explanation:
      "A description list (<dl>) contains terms (<dt>) and their corresponding descriptions (<dd>).",
    points: 10,
    timeLimit: 40,
    tags: ["html", "lists", "description-list"],
  },

  {
    id: 20,
    category: "HTML",
    difficulty: "Hard",
    question: "Which HTML5 semantic element should be used to wrap the primary content of a webpage, excluding the header, navigation, sidebar, and footer?",
    options: [
      "<section>",
      "<article>",
      "<main>",
      "<body>",
    ],
    correctAnswer: "<main>",
    explanation:
      "The <main> element represents the dominant content of a document. There should generally be only one <main> element per page, improving accessibility and helping assistive technologies identify the page's primary content.",
    points: 15,
    timeLimit: 45,
    tags: [
      "html",
      "semantic-html",
      "main",
      "accessibility",
      "best-practices",
    ],
  },
    {
    id: 21,
    category: "HTML",
    difficulty: "Medium",
    question: "Which HTML element is used to embed audio content in a webpage?",
    options: [
      "<music>",
      "<audio>",
      "<sound>",
      "<media>",
    ],
    correctAnswer: "<audio>",
    explanation:
      "The <audio> element embeds sound content such as music, podcasts, or sound effects. It commonly uses the controls attribute to provide playback controls.",
    points: 10,
    timeLimit: 35,
    tags: ["html", "audio", "multimedia"],
  },

  {
    id: 22,
    category: "HTML",
    difficulty: "Medium",
    question: "Which HTML element is used to embed a video into a webpage?",
    options: [
      "<movie>",
      "<media>",
      "<video>",
      "<player>",
    ],
    correctAnswer: "<video>",
    explanation:
      "The <video> element embeds video files directly into HTML without requiring third-party plugins.",
    points: 10,
    timeLimit: 35,
    tags: ["html", "video", "multimedia"],
  },

  {
    id: 23,
    category: "HTML",
    difficulty: "Medium",
    question: "What is the primary purpose of the <source> element inside <audio> or <video>?",
    options: [
      "To display subtitles",
      "To provide multiple media files in different formats for browser compatibility",
      "To add metadata",
      "To preload media automatically",
    ],
    correctAnswer:
      "To provide multiple media files in different formats for browser compatibility",
    explanation:
      "The <source> element allows developers to specify multiple media files (such as MP4, WebM, or OGG), enabling browsers to choose the first supported format.",
    points: 10,
    timeLimit: 40,
    tags: ["html", "source", "media"],
  },

  {
    id: 24,
    category: "HTML",
    difficulty: "Hard",
    question: "Which HTML element is used to provide subtitles or captions for video content?",
    options: [
      "<caption>",
      "<subtitle>",
      "<track>",
      "<transcript>",
    ],
    correctAnswer: "<track>",
    explanation:
      "The <track> element provides timed text tracks such as subtitles, captions, chapters, and descriptions, improving accessibility for multimedia.",
    points: 15,
    timeLimit: 45,
    tags: ["html", "track", "captions", "accessibility"],
  },

  {
    id: 25,
    category: "HTML",
    difficulty: "Hard",
    question: "What is the purpose of the <figure> and <figcaption> elements?",
    options: [
      "To create tables",
      "To group media or illustrations with their descriptive captions",
      "To embed videos",
      "To define navigation menus",
    ],
    correctAnswer:
      "To group media or illustrations with their descriptive captions",
    explanation:
      "The <figure> element groups self-contained content such as images, diagrams, or code snippets, while <figcaption> provides a descriptive caption.",
    points: 15,
    timeLimit: 45,
    tags: ["html", "figure", "figcaption", "semantic-html"],
  },

  {
    id: 26,
    category: "HTML",
    difficulty: "Hard",
    question: "What is the primary purpose of the aria-label attribute?",
    options: [
      "To style an element",
      "To provide an accessible name for an element when no visible label exists",
      "To improve page loading speed",
      "To define keyboard shortcuts",
    ],
    correctAnswer:
      "To provide an accessible name for an element when no visible label exists",
    explanation:
      "aria-label gives assistive technologies, such as screen readers, a meaningful label when an element doesn't have visible text.",
    points: 15,
    timeLimit: 45,
    tags: ["html", "aria", "accessibility"],
  },

  {
    id: 27,
    category: "HTML",
    difficulty: "Hard",
    question: "Which ARIA attribute references another element that provides the accessible label?",
    options: [
      "aria-hidden",
      "aria-labelledby",
      "aria-describedby",
      "aria-controls",
    ],
    correctAnswer: "aria-labelledby",
    explanation:
      "aria-labelledby references the ID of another element whose text becomes the accessible label for the current element.",
    points: 15,
    timeLimit: 50,
    tags: ["html", "aria", "aria-labelledby", "accessibility"],
  },

  {
    id: 28,
    category: "HTML",
    difficulty: "Hard",
    question: "Which meta tag ensures that a webpage is properly displayed on mobile devices?",
    options: [
      '<meta charset="UTF-8">',
      '<meta name="viewport" content="width=device-width, initial-scale=1.0">',
      '<meta name="description">',
      '<meta name="author">',
    ],
    correctAnswer:
      '<meta name="viewport" content="width=device-width, initial-scale=1.0">',
    explanation:
      "The viewport meta tag enables responsive layouts by matching the page width to the device width and setting the initial zoom level.",
    points: 15,
    timeLimit: 45,
    tags: ["html", "viewport", "responsive", "meta"],
  },

  {
    id: 29,
    category: "HTML",
    difficulty: "Expert",
    question: "What is the primary purpose of Open Graph (OG) meta tags?",
    options: [
      "To improve JavaScript performance",
      "To control how webpages appear when shared on social media platforms",
      "To encrypt webpage content",
      "To improve CSS loading",
    ],
    correctAnswer:
      "To control how webpages appear when shared on social media platforms",
    explanation:
      "Open Graph tags (such as og:title, og:image, and og:description) allow websites to define the title, description, and preview image displayed when shared on platforms like Facebook, LinkedIn, and others.",
    points: 20,
    timeLimit: 60,
    tags: ["html", "seo", "open-graph", "social-media"],
  },

  {
    id: 30,
    category: "HTML",
    difficulty: "Expert",
    question: "Why is a canonical URL (<link rel='canonical'>) important for SEO?",
    options: [
      "It improves JavaScript execution speed.",
      "It identifies the preferred version of a webpage, helping search engines avoid duplicate-content issues.",
      "It compresses HTML files.",
      "It enables browser caching.",
    ],
    correctAnswer:
      "It identifies the preferred version of a webpage, helping search engines avoid duplicate-content issues.",
    explanation:
      "The canonical link element tells search engines which URL is the authoritative version of a page, consolidating ranking signals and preventing duplicate-content penalties.",
    points: 20,
    timeLimit: 60,
    tags: [
      "html",
      "seo",
      "canonical",
      "metadata",
      "best-practices",
    ],
  },
    {
    id: 31,
    category: "HTML",
    difficulty: "Hard",
    question: "What is the primary purpose of the <canvas> element in HTML5?",
    options: [
      "To display scalable vector graphics",
      "To draw graphics dynamically using JavaScript",
      "To embed videos",
      "To create responsive layouts",
    ],
    correctAnswer: "To draw graphics dynamically using JavaScript",
    explanation:
      "The <canvas> element provides a drawable area that JavaScript can use to render graphics, charts, games, animations, and image manipulation.",
    points: 15,
    timeLimit: 45,
    tags: ["html", "canvas", "graphics", "html5"],
  },

  {
    id: 32,
    category: "HTML",
    difficulty: "Hard",
    question: "What is the main advantage of SVG over the <canvas> element?",
    options: [
      "SVG only supports bitmap graphics.",
      "SVG graphics are vector-based and scale without losing quality.",
      "SVG requires JavaScript for every shape.",
      "SVG cannot be styled with CSS.",
    ],
    correctAnswer:
      "SVG graphics are vector-based and scale without losing quality.",
    explanation:
      "SVG (Scalable Vector Graphics) uses XML-based vector graphics, making it resolution-independent and easily stylable with CSS and JavaScript.",
    points: 15,
    timeLimit: 45,
    tags: ["html", "svg", "graphics", "vector"],
  },

  {
    id: 33,
    category: "HTML",
    difficulty: "Hard",
    question: "Which HTML attribute enables an element to participate in the native Drag and Drop API?",
    options: [
      "drag",
      "draggable",
      "dropzone",
      "movable",
    ],
    correctAnswer: "draggable",
    explanation:
      "Setting draggable='true' allows an element to be dragged using the HTML5 Drag and Drop API.",
    points: 15,
    timeLimit: 45,
    tags: ["html", "drag-drop", "html5-api"],
  },

  {
    id: 34,
    category: "HTML",
    difficulty: "Hard",
    question: "Which browser API allows a webpage to access a user's geographic location (with permission)?",
    options: [
      "Navigator API",
      "Location API",
      "Geolocation API",
      "Maps API",
    ],
    correctAnswer: "Geolocation API",
    explanation:
      "The Geolocation API enables websites to obtain a user's location after explicit user permission is granted.",
    points: 15,
    timeLimit: 45,
    tags: ["html", "geolocation", "html5-api"],
  },

  {
    id: 35,
    category: "HTML",
    difficulty: "Hard",
    question: "Which Web Storage API stores data even after the browser is closed?",
    options: [
      "sessionStorage",
      "cookieStorage",
      "localStorage",
      "memoryStorage",
    ],
    correctAnswer: "localStorage",
    explanation:
      "localStorage persists data until it is explicitly removed by the application or the user, even after the browser is restarted.",
    points: 15,
    timeLimit: 45,
    tags: ["html", "localStorage", "storage"],
  },

  {
    id: 36,
    category: "HTML",
    difficulty: "Hard",
    question: "What is the primary difference between localStorage and sessionStorage?",
    options: [
      "localStorage stores more data than sessionStorage.",
      "sessionStorage persists after browser restart.",
      "sessionStorage exists only for the current browser tab or session, while localStorage persists until manually cleared.",
      "There is no difference.",
    ],
    correctAnswer:
      "sessionStorage exists only for the current browser tab or session, while localStorage persists until manually cleared.",
    explanation:
      "sessionStorage is cleared when the browser tab or window is closed, whereas localStorage remains available across browser sessions.",
    points: 15,
    timeLimit: 50,
    tags: ["html", "storage", "localStorage", "sessionStorage"],
  },

  {
    id: 37,
    category: "HTML",
    difficulty: "Expert",
    question: "Why would a developer choose IndexedDB instead of localStorage?",
    options: [
      "IndexedDB only stores strings.",
      "IndexedDB supports large amounts of structured data, indexing, and transactions.",
      "IndexedDB is faster for every operation.",
      "IndexedDB is used only for cookies.",
    ],
    correctAnswer:
      "IndexedDB supports large amounts of structured data, indexing, and transactions.",
    explanation:
      "IndexedDB is a client-side NoSQL database designed for storing complex, structured, and large datasets efficiently in web applications.",
    points: 20,
    timeLimit: 60,
    tags: ["html", "indexeddb", "storage", "database"],
  },

  {
    id: 38,
    category: "HTML",
    difficulty: "Expert",
    question: "What is the purpose of the loading='lazy' attribute on an <img> element?",
    options: [
      "It compresses images.",
      "It delays loading images until they are close to entering the viewport, improving page performance.",
      "It loads images before the HTML document.",
      "It converts images into SVG.",
    ],
    correctAnswer:
      "It delays loading images until they are close to entering the viewport, improving page performance.",
    explanation:
      "Lazy loading reduces initial page load time and bandwidth usage by loading off-screen images only when needed.",
    points: 20,
    timeLimit: 60,
    tags: ["html", "lazy-loading", "performance", "images"],
  },

  {
    id: 39,
    category: "HTML",
    difficulty: "Expert",
    question: "Which statement correctly describes the difference between the 'defer' and 'async' attributes for external JavaScript files?",
    options: [
      "Both guarantee execution order.",
      "async executes as soon as the script is downloaded, while defer waits until HTML parsing is complete and preserves execution order.",
      "defer blocks HTML parsing, while async never downloads scripts.",
      "There is no functional difference.",
    ],
    correctAnswer:
      "async executes as soon as the script is downloaded, while defer waits until HTML parsing is complete and preserves execution order.",
    explanation:
      "Scripts with async execute immediately after downloading, potentially interrupting parsing. Scripts with defer download in parallel but execute after HTML parsing is complete, maintaining document order.",
    points: 20,
    timeLimit: 65,
    tags: ["html", "defer", "async", "performance"],
  },

  {
    id: 40,
    category: "HTML",
    difficulty: "Expert",
    question: "Which statement best describes Progressive Web Apps (PWAs)?",
    options: [
      "PWAs only work on Android devices.",
      "PWAs combine modern web technologies such as Service Workers, Web App Manifests, and caching to deliver app-like experiences.",
      "PWAs require installation from an app store.",
      "PWAs replace HTML completely.",
    ],
    correctAnswer:
      "PWAs combine modern web technologies such as Service Workers, Web App Manifests, and caching to deliver app-like experiences.",
    explanation:
      "Progressive Web Apps provide offline support, installability, push notifications, background caching, and fast loading using technologies like Service Workers and Web App Manifests.",
    points: 20,
    timeLimit: 70,
    tags: [
      "html",
      "pwa",
      "service-worker",
      "manifest",
      "performance",
      "modern-web",
    ],
  },
    {
    id: 41,
    category: "HTML",
    difficulty: "Expert",
    question: "What is the primary purpose of Web Components?",
    options: [
      "To replace JavaScript frameworks",
      "To create reusable, encapsulated custom HTML elements using web standards",
      "To improve CSS animations",
      "To create responsive layouts automatically",
    ],
    correctAnswer:
      "To create reusable, encapsulated custom HTML elements using web standards",
    explanation:
      "Web Components are a collection of browser standards including Custom Elements, Shadow DOM, HTML Templates, and ES Modules that enable developers to build reusable UI components without relying on external frameworks.",
    points: 20,
    timeLimit: 60,
    tags: [
      "html",
      "web-components",
      "custom-elements",
      "modern-html",
    ],
  },

  {
    id: 42,
    category: "HTML",
    difficulty: "Expert",
    question: "What is the primary purpose of the Shadow DOM?",
    options: [
      "To hide JavaScript source code",
      "To encapsulate a component's DOM structure and styles from the rest of the document",
      "To improve SEO rankings",
      "To increase browser rendering speed",
    ],
    correctAnswer:
      "To encapsulate a component's DOM structure and styles from the rest of the document",
    explanation:
      "Shadow DOM provides encapsulation by isolating a component's HTML, CSS, and JavaScript from the main document, preventing style leakage and naming conflicts.",
    points: 20,
    timeLimit: 65,
    tags: [
      "html",
      "shadow-dom",
      "web-components",
      "encapsulation",
    ],
  },

  {
    id: 43,
    category: "HTML",
    difficulty: "Expert",
    question: "What is a Custom Element in Web Components?",
    options: [
      "A browser extension",
      "A user-defined HTML element created using the Custom Elements API",
      "A CSS class",
      "A special JavaScript variable",
    ],
    correctAnswer:
      "A user-defined HTML element created using the Custom Elements API",
    explanation:
      "Custom Elements allow developers to define their own reusable HTML tags such as <user-card> or <product-item> with custom behavior.",
    points: 20,
    timeLimit: 60,
    tags: [
      "html",
      "custom-elements",
      "web-components",
    ],
  },

  {
    id: 44,
    category: "HTML",
    difficulty: "Expert",
    question: "What is the purpose of the <template> element?",
    options: [
      "To create page layouts",
      "To store reusable HTML that is not rendered until activated with JavaScript",
      "To load CSS templates",
      "To define browser themes",
    ],
    correctAnswer:
      "To store reusable HTML that is not rendered until activated with JavaScript",
    explanation:
      "The <template> element contains inert HTML that is not displayed until cloned and inserted into the document via JavaScript.",
    points: 20,
    timeLimit: 60,
    tags: [
      "html",
      "template",
      "web-components",
    ],
  },

  {
    id: 45,
    category: "HTML",
    difficulty: "Expert",
    question: "What is the purpose of the <slot> element in Web Components?",
    options: [
      "To reserve memory for JavaScript",
      "To define where external content should be inserted into a Shadow DOM component",
      "To preload resources",
      "To define HTML metadata",
    ],
    correctAnswer:
      "To define where external content should be inserted into a Shadow DOM component",
    explanation:
      "Slots enable content projection, allowing developers to insert custom content into reusable Web Components while preserving encapsulation.",
    points: 20,
    timeLimit: 60,
    tags: [
      "html",
      "slot",
      "shadow-dom",
      "web-components",
    ],
  },

  {
    id: 46,
    category: "HTML",
    difficulty: "Expert",
    question: "Why is structured data (Schema.org) added to webpages?",
    options: [
      "To increase JavaScript execution speed",
      "To help search engines better understand webpage content and generate rich search results",
      "To reduce CSS file size",
      "To encrypt HTML documents",
    ],
    correctAnswer:
      "To help search engines better understand webpage content and generate rich search results",
    explanation:
      "Schema.org structured data provides semantic information that search engines use to generate rich results such as ratings, recipes, FAQs, events, and products.",
    points: 20,
    timeLimit: 65,
    tags: [
      "html",
      "schema-org",
      "structured-data",
      "seo",
    ],
  },

  {
    id: 47,
    category: "HTML",
    difficulty: "Expert",
    question: "Which format is currently recommended by Google for implementing structured data?",
    options: [
      "Microdata",
      "RDFa",
      "JSON-LD",
      "XML",
    ],
    correctAnswer: "JSON-LD",
    explanation:
      "Google recommends JSON-LD because it keeps structured data separate from HTML markup, making it easier to maintain and less error-prone.",
    points: 20,
    timeLimit: 60,
    tags: [
      "html",
      "json-ld",
      "seo",
      "structured-data",
    ],
  },

  {
    id: 48,
    category: "HTML",
    difficulty: "Expert",
    question: "Why should links opened with target='_blank' usually include rel='noopener noreferrer'?",
    options: [
      "To improve SEO rankings",
      "To prevent security vulnerabilities such as reverse tabnabbing and avoid exposing the window.opener object",
      "To make links load faster",
      "To improve CSS performance",
    ],
    correctAnswer:
      "To prevent security vulnerabilities such as reverse tabnabbing and avoid exposing the window.opener object",
    explanation:
      "Using rel='noopener noreferrer' prevents the newly opened page from accessing the originating window through window.opener and also suppresses the Referer header when 'noreferrer' is included.",
    points: 20,
    timeLimit: 65,
    tags: [
      "html",
      "security",
      "noopener",
      "noreferrer",
      "xss",
    ],
  },

  {
    id: 49,
    category: "HTML",
    difficulty: "Expert",
    question: "What is the primary purpose of a Content Security Policy (CSP)?",
    options: [
      "To compress HTML files",
      "To control which resources can be loaded and reduce security risks such as Cross-Site Scripting (XSS)",
      "To improve CSS specificity",
      "To manage browser history",
    ],
    correctAnswer:
      "To control which resources can be loaded and reduce security risks such as Cross-Site Scripting (XSS)",
    explanation:
      "Content Security Policy is a browser security mechanism that restricts the sources from which scripts, styles, images, fonts, and other resources may be loaded, helping mitigate XSS and related attacks.",
    points: 20,
    timeLimit: 70,
    tags: [
      "html",
      "csp",
      "security",
      "xss",
      "best-practices",
    ],
  },

  {
    id: 50,
    category: "HTML",
    difficulty: "Expert",
    question: "During a senior frontend interview, you're asked to build a highly accessible, SEO-friendly, secure, and performant webpage. Which approach represents modern HTML best practices?",
    options: [
      "Use only <div> elements, inline styles, and JavaScript for everything.",
      "Use semantic HTML, proper heading hierarchy, accessible forms, ARIA only when necessary, optimized images, lazy loading, structured data, strong security practices, and responsive design.",
      "Disable browser validation and rely entirely on JavaScript.",
      "Avoid metadata because search engines discover everything automatically.",
    ],
    correctAnswer:
      "Use semantic HTML, proper heading hierarchy, accessible forms, ARIA only when necessary, optimized images, lazy loading, structured data, strong security practices, and responsive design.",
    explanation:
      "Modern frontend development emphasizes semantic HTML, accessibility (WCAG), SEO, responsive layouts, optimized assets, progressive enhancement, security (CSP, sandboxing, safe links), and maintainable architecture. These practices improve usability, discoverability, performance, and long-term maintainability.",
    points: 20,
    timeLimit: 75,
    tags: [
      "html",
      "interview",
      "accessibility",
      "seo",
      "security",
      "performance",
      "best-practices",
      "senior-developer",
    ],
  },
];

export default htmlQuestions;