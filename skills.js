// skills.js - Skill management and progression system for Legends of Lunaria

// Skill definitions
const skills = {
    combat: {
        name: "Combat",
        description: "Improves your ability to fight and defend against enemies.",
        level: 1,
        experience: 0,
        experienceToNextLevel: 100
    },
    woodcutting: {
        name: "Woodcutting",
        description: "Enhances your ability to chop down trees and gather wood.",
        level: 1,
        experience: 0,
        experienceToNextLevel: 100
    },
    magic: {
        name: "Magic",
        description: "Increases your prowess in casting spells and using magical items.",
        level: 1,
        experience: 0,
        experienceToNextLevel: 100
    }
};

// Function to load skills into the game
export function loadSkills() {
    console.log("Skills have been loaded into the game.");
}

// Function to gain skill experience
export function gainSkillExperience(character, skillName, expAmount) {
    if (character.skills[skillName]) {
        character.skills[skillName] += expAmount;
        console.log(`${character.name} has gained ${expAmount} experience in ${skillName}.`);
        checkSkillLevelUp(character, skillName);
    } else {
        console.log(`Error: ${skillName} skill not found for ${character.name}.`);
    }
}

// Function to check and handle skill level ups
function checkSkillLevelUp(character, skillName) {
    let skill = character.skills[skillName];
    while (skill.experience >= skill.experienceToNextLevel) {
        skill.level++;
        skill.experience -= skill.experienceToNextLevel;
        skill.experienceToNextLevel = calculateExperienceToNextLevel(skill.level);
        console.log(`${character.name} has leveled up their ${skillName} skill to level ${skill.level}!`);
    }
}

// Function to calculate the experience needed for the next level
function calculateExperienceToNextLevel(currentLevel) {
    return Math.floor(100 * Math.pow(1.1, currentLevel - 1));
}

// Function to initialize skill levels for a new character
export function initializeSkills(character) {
    for (let skill in skills) {
        character.skills[skill] = Object.assign({}, skills[skill]); // Deep copy to avoid reference issues
    }
    console.log(`Skills initialized for ${character.name}.`);
}
