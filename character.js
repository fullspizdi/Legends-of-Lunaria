// character.js - Character management for Legends of Lunaria

class Character {
    constructor(name) {
        this.name = name;
        this.level = 1;
        this.experience = 0;
        this.skills = {
            combat: 1,
            woodcutting: 1,
            magic: 1
        };
        this.inventory = [];
        this.health = 100;
    }

    // Method to update character's skill level
    updateSkill(skill, amount) {
        if (this.skills[skill] !== undefined) {
            this.skills[skill] += amount;
            console.log(`${this.name} has improved their ${skill} skill to level ${this.skills[skill]}.`);
        } else {
            console.log(`Skill ${skill} does not exist.`);
        }
    }

    // Method to gain experience
    gainExperience(amount) {
        this.experience += amount;
        console.log(`${this.name} has gained ${amount} experience.`);
        this.checkLevelUp();
    }

    // Check if the character levels up
    checkLevelUp() {
        const requiredExperience = this.level * 100;
        if (this.experience >= requiredExperience) {
            this.level++;
            this.experience -= requiredExperience;
            console.log(`${this.name} has leveled up! Now at level ${this.level}.`);
            this.health = 100; // Restore health on level up
        }
    }

    // Method to add item to inventory
    addItem(item) {
        this.inventory.push(item);
        console.log(`${this.name} has obtained a ${item.name}.`);
    }

    // Method to remove item from inventory
    removeItem(itemName) {
        const index = this.inventory.findIndex(item => item.name === itemName);
        if (index !== -1) {
            this.inventory.splice(index, 1);
            console.log(`${this.name} has lost a ${itemName}.`);
        } else {
            console.log(`${itemName} not found in inventory.`);
        }
    }

    // Method to display character status
    displayStatus() {
        console.log(`Character: ${this.name}`);
        console.log(`Level: ${this.level}, Experience: ${this.experience}`);
        console.log('Skills:', this.skills);
        console.log('Health:', this.health);
        console.log('Inventory:', this.inventory.map(item => item.name).join(', '));
    }
}

// Function to create a new character
export function createCharacter(name = "New Hero") {
    const newCharacter = new Character(name);
    console.log(`${name} has been created in Legends of Lunaria.`);
    return newCharacter;
}
