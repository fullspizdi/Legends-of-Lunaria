// crafting.js - Crafting system for Legends of Lunaria

import { addItem } from './character.js';

// Crafting recipes
const recipes = {
    healthPotion: {
        name: "Health Potion",
        ingredients: [
            { name: "Red Herb", quantity: 3 },
            { name: "Crystal Vial", quantity: 1 }
        ],
        requiredSkill: {
            skill: "alchemy",
            level: 5
        }
    },
    ironSword: {
        name: "Iron Sword",
        ingredients: [
            { name: "Iron Bar", quantity: 2 },
            { name: "Wood Handle", quantity: 1 }
        ],
        requiredSkill: {
            skill: "blacksmithing",
            level: 3
        }
    },
    magicStaff: {
        name: "Magic Staff",
        ingredients: [
            { name: "Enchanted Wood", quantity: 2 },
            { name: "Magic Crystal", quantity: 1 }
        ],
        requiredSkill: {
            skill: "woodworking",
            level: 7
        }
    }
};

// Function to check if player has required ingredients
function hasRequiredIngredients(player, recipe) {
    return recipe.ingredients.every(ingredient =>
        player.inventory.some(item => item.name === ingredient.name && item.quantity >= ingredient.quantity)
    );
}

// Function to craft an item
export function craftItem(player, recipeName) {
    const recipe = recipes[recipeName];
    if (!recipe) {
        console.log(`Recipe ${recipeName} does not exist.`);
        return;
    }

    if (player.skills[recipe.requiredSkill.skill] < recipe.requiredSkill.level) {
        console.log(`You need to be at least level ${recipe.requiredSkill.level} in ${recipe.requiredSkill.skill} to craft this item.`);
        return;
    }

    if (!hasRequiredIngredients(player, recipe)) {
        console.log("You do not have the required ingredients.");
        return;
    }

    // Deduct ingredients from inventory
    recipe.ingredients.forEach(ingredient => {
        const itemIndex = player.inventory.findIndex(item => item.name === ingredient.name);
        player.inventory[itemIndex].quantity -= ingredient.quantity;
    });

    // Add crafted item to inventory
    addItem(player, { name: recipe.name, type: 'crafted' });
    console.log(`${player.name} crafted a ${recipe.name}.`);
}

// Function to setup crafting system
export function setupCrafting() {
    console.log("Crafting system initialized.");
}
