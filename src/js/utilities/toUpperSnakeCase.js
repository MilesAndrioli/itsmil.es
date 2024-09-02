/**
 * Converts hyphenated strings to UPPER_SNAKE_CASE.
 * Example: 'app-header' becomes 'APP_HEADER'.
 * @param {string} str The string to convert.
 * @return {string} The UPPER_SNAKE_CASE string.
 */
const toUpperSnakeCase = (str) => str.replace(/-/g, "_").toUpperCase();

export default toUpperSnakeCase;
