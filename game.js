// Main game logic and initialization for Legends of Lunaria

// Importing necessary modules
import { initializeEngine } from './engine.js';
import { setupGraphics } from './graphics.js';
import { loadAudio } from './audio.js';
import { createCharacter } from './character.js';
import { loadSkills } from './skills.js';
import { loadQuests } from './quests.js';
import { setupCrafting } from './crafting.js';
import { initializeEconomy } from './economy.js';
import { setupPvP } from './pvp.js';
import { initializeSocialFeatures } from './social.js';
import { connectToServer } from './server.js';
import { setupNetwork } from './network.js';
import { setupUtils } from './utils.js';
import { setupShop } from './shop.js';
import { setupMembership } from './membership.js';
import { ensureAccessibility } from './accessibility.js';
import { checkCompatibility } from './compatibility.js';

// Game initialization function
function startGame() {
    console.log("Starting Legends of Lunaria...");

    // Check browser compatibility first
    if (!checkCompatibility()) {
        alert("Your browser does not support the features needed for this game.");
        return;
    }

    // Initialize game engine
    initializeEngine();

    // Setup graphics and audio
    setupGraphics();
    loadAudio();

    // Create player character
    const player = createCharacter();

    // Load game systems
    loadSkills();
    loadQuests();
    setupCrafting();
    initializeEconomy();
    setupPvP();
    initializeSocialFeatures();

    // Network setup
    connectToServer();
    setupNetwork();

    // Additional setups
    setupUtils();
    setupShop();
    setupMembership();
    ensureAccessibility();

    // Game is now ready to be played
    console.log("Game setup complete. Welcome to Legends of Lunaria!");
}

// Expose the startGame function to be called on button click in the HTML
window.startGame = startGame;
