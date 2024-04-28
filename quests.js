// quests.js - Quest management and progression system for Legends of Lunaria

import { gainSkillExperience } from './skills.js';
import { addItem } from './character.js';

// Quest definitions
const quests = {
    tutorial: {
        name: "The Adventurer's Beginning",
        description: "Learn the basics of combat, woodcutting, and magic.",
        requirements: {
            level: 1
        },
        rewards: {
            experience: 100,
            items: [{ name: "Starter Sword", type: "weapon" }],
            skillExperience: {
                combat: 50,
                woodcutting: 30,
                magic: 20
            }
        },
        completed: false
    },
    dragonHunt: {
        name: "Dragon Hunt",
        description: "Prove your worth by slaying the fearsome dragon in the Dark Forest.",
        requirements: {
            level: 10,
            skills: {
                combat: 15
            }
        },
        rewards: {
            experience: 500,
            items: [{ name: "Dragon Scale", type: "material" }],
            skillExperience: {
                combat: 200
            }
        },
        completed: false
    }
};

// Function to load quests into the game
export function loadQuests() {
    console.log("Quests have been loaded into the game.");
}

// Function to start a quest
export function startQuest(character, questName) {
    const quest = quests[questName];
    if (quest && !quest.completed && character.level >= quest.requirements.level) {
        console.log(`${character.name} has started the quest: ${quest.name}`);
        // Check additional skill requirements if any
        if (quest.requirements.skills) {
            for (const skill in quest.requirements.skills) {
                if (character.skills[skill] < quest.requirements.skills[skill]) {
                    console.log(`Cannot start quest: ${quest.name}. ${skill} level is too low.`);
                    return;
                }
            }
        }
        completeQuest(character, quest);
    } else {
        console.log(`Quest ${questName} is not available or already completed.`);
    }
}

// Function to complete a quest
function completeQuest(character, quest) {
    console.log(`${character.name} has completed the quest: ${quest.name}`);
    character.gainExperience(quest.rewards.experience);
    quest.rewards.items.forEach(item => character.addItem(item));
    for (const skill in quest.rewards.skillExperience) {
        gainSkillExperience(character, skill, quest.rewards.skillExperience[skill]);
    }
    quest.completed = true;
}

// Exporting quest-related functions
export { startQuest, completeQuest };
