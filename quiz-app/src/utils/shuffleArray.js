/**
 * ==========================================================
 * Array Shuffle Utilities
 * ==========================================================
 * Responsibilities:
 * - Shuffle arrays using Fisher-Yates algorithm
 * - Shuffle quiz questions
 * - Shuffle answer options
 * - Pick random items
 * - Random subset selection
 * ==========================================================
 */

/**
 * Fisher-Yates Shuffle
 * Returns a new shuffled array without mutating the original.
 */
export const shuffleArray = (array = []) => {
  const shuffled = [...array];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));

    [shuffled[i], shuffled[randomIndex]] = [
      shuffled[randomIndex],
      shuffled[i],
    ];
  }

  return shuffled;
};

/**
 * Shuffle quiz questions.
 */
export const shuffleQuestions = (questions = []) => {
  return shuffleArray(questions);
};

/**
 * Shuffle answer options while preserving
 * all other question properties.
 */
export const shuffleQuestionOptions = (question = {}) => {
  if (!question.options) {
    return question;
  }

  return {
    ...question,
    options: shuffleArray(question.options),
  };
};

/**
 * Shuffle every question's options.
 */
export const shuffleAllQuestionOptions = (questions = []) => {
  return questions.map(shuffleQuestionOptions);
};

/**
 * Shuffle questions AND their options.
 */
export const shuffleQuiz = (questions = []) => {
  return shuffleQuestions(
    shuffleAllQuestionOptions(questions)
  );
};

/**
 * Return a random element.
 */
export const getRandomItem = (array = []) => {
  if (!array.length) return null;

  return array[Math.floor(Math.random() * array.length)];
};

/**
 * Return multiple unique random elements.
 */
export const getRandomItems = (
  array = [],
  count = 1
) => {
  return shuffleArray(array).slice(0, count);
};

/**
 * Random boolean.
 */
export const randomBoolean = () =>
  Math.random() >= 0.5;

/**
 * Random integer.
 */
export const randomInteger = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

/**
 * Random floating-point number.
 */
export const randomFloat = (
  min,
  max,
  decimals = 2
) => {
  return Number(
    (Math.random() * (max - min) + min).toFixed(decimals)
  );
};

/**
 * Pick one random question.
 */
export const getRandomQuestion = (questions = []) => {
  return getRandomItem(questions);
};

/**
 * Pick N random questions.
 */
export const getRandomQuestions = (
  questions = [],
  total = 10
) => {
  return shuffleArray(questions).slice(0, total);
};

/**
 * Shuffle categories.
 */
export const shuffleCategories = (categories = []) => {
  return shuffleArray(categories);
};

/**
 * Shuffle leaderboard entries.
 */
export const shuffleLeaderboard = (entries = []) => {
  return shuffleArray(entries);
};

/**
 * Randomize an array without modifying original.
 * Alias for semantic readability.
 */
export const randomize = (array = []) => {
  return shuffleArray(array);
};

export default shuffleArray;