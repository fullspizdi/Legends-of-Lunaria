// utils.js - Utility functions for Legends of Lunaria

/**
 * Generates a random integer between min (inclusive) and max (exclusive).
 * @param {number} min - The minimum value (inclusive).
 * @param {number} max - The maximum value (exclusive).
 * @returns {number} A random integer between min and max.
 */
export function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

/**
 * Formats a number as a string with commas as thousands separators.
 * @param {number} number - The number to format.
 * @returns {string} The formatted number with commas.
 */
export function formatNumberWithCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

/**
 * Clamps a number between a minimum and maximum value.
 * @param {number} num - The number to clamp.
 * @param {number} min - The minimum value.
 * @param {number} max - The maximum value.
 * @returns {number} The clamped value.
 */
export function clamp(num, min, max) {
    return Math.min(Math.max(num, min), max);
}

/**
 * Debounces a function so it only executes after a specified delay since the last call.
 * Useful for limiting rapid calls to functions (e.g., resize, scroll).
 * @param {Function} func - The function to debounce.
 * @param {number} delay - The delay in milliseconds.
 * @returns {Function} The debounced function.
 */
export function debounce(func, delay) {
    let timer;
    return function() {
        const context = this;
        const args = arguments;
        clearTimeout(timer);
        timer = setTimeout(() => func.apply(context, args), delay);
    };
}

/**
 * Throttles a function so it only executes at most once every specified interval.
 * Useful for rate-limiting function calls.
 * @param {Function} func - The function to throttle.
 * @param {number} limit - The interval in milliseconds.
 * @returns {Function} The throttled function.
 */
export function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

/**
 * Simple sleep function using Promises.
 * @param {number} ms - Milliseconds to sleep.
 * @returns {Promise} A promise that resolves after the specified time.
 */
export function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Setup utility functions
export function setupUtils() {
    console.log("Utility functions are set up and ready.");
}
