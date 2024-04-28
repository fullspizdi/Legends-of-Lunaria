// audio.js - Audio management for Legends of Lunaria

class AudioManager {
    constructor() {
        this.backgroundMusic = new Audio();
        this.soundEffects = {};
    }

    loadAudio() {
        console.log("Loading audio resources...");
        this.loadBackgroundMusic();
        this.loadSoundEffects();
    }

    loadBackgroundMusic() {
        // Placeholder for background music URL
        this.backgroundMusic.src = 'path/to/background/music.mp3';
        this.backgroundMusic.loop = true;
        this.backgroundMusic.volume = 0.5;
    }

    loadSoundEffects() {
        // Placeholder for sound effects
        const effects = {
            'swordSwing': 'path/to/sword_swing.mp3',
            'magicCast': 'path/to/magic_cast.mp3',
            'dragonRoar': 'path/to/dragon_roar.mp3',
            'treeFall': 'path/to/tree_fall.mp3'
        };

        Object.keys(effects).forEach(effect => {
            this.soundEffects[effect] = new Audio(effects[effect]);
        });
    }

    playBackgroundMusic() {
        console.log("Playing background music...");
        this.backgroundMusic.play();
    }

    stopBackgroundMusic() {
        console.log("Stopping background music...");
        this.backgroundMusic.pause();
        this.backgroundMusic.currentTime = 0;
    }

    playSoundEffect(effect) {
        if (this.soundEffects[effect]) {
            console.log(`Playing sound effect: ${effect}`);
            this.soundEffects[effect].play();
        } else {
            console.error(`Sound effect ${effect} not found.`);
        }
    }
}

// Exporting the AudioManager class and loadAudio function
export const loadAudio = () => {
    const audioManager = new AudioManager();
    audioManager.loadAudio();
    return audioManager;
};
