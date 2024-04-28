// compatibility.js - Browser compatibility checks for Legends of Lunaria

/**
 * Checks if the current browser supports all necessary features for the game.
 * Features checked include HTML5, WebGL, and Web Audio API.
 * @returns {boolean} True if the browser is compatible, false otherwise.
 */
export function checkCompatibility() {
    console.log("Checking browser compatibility...");

    // Check for HTML5 support
    if (!document.createElement('canvas').getContext) {
        console.error("HTML5 Canvas is not supported by your browser.");
        return false;
    }

    // Check for WebGL support
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (!gl) {
        console.error("WebGL is not supported by your browser.");
        return false;
    }

    // Check for Web Audio API support
    if (!window.AudioContext && !window.webkitAudioContext) {
        console.error("Web Audio API is not supported by your browser.");
        return false;
    }

    console.log("Browser is compatible.");
    return true;
}
