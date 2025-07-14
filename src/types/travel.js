// Type definitions for travel data
// Note: These are JSDoc comments for TypeScript support in JavaScript files

/**
 * @typedef {Object} Visit
 * @property {string} year - The year of the visit
 * @property {string} [month] - The month of the visit (optional)
 */

/**
 * @typedef {Object} TravelPlace
 * @property {string} name - The name of the place
 * @property {string} state - The state where the place is located
 * @property {[number, number]} coordinates - Latitude and longitude coordinates
 * @property {Visit[]} visits - Array of visits to this place
 * @property {string} description - Description of the place
 * @property {string[]} categories - Array of categories for this place
 */
