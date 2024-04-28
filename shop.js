// shop.js - Cosmetic shop and membership management for Legends of Lunaria

import { formatNumberWithCommas } from './utils.js';

class ShopItem {
    constructor(id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category; // e.g., 'costume', 'weapon skin', 'pet', 'mount'
    }

    displayPrice() {
        return formatNumberWithCommas(this.price) + " coins";
    }
}

class CosmeticShop {
    constructor() {
        this.items = [];
    }

    addItem(item) {
        this.items.push(item);
        console.log(`Added ${item.name} to the shop.`);
    }

    removeItem(itemId) {
        this.items = this.items.filter(item => item.id !== itemId);
        console.log(`Removed item ${itemId} from the shop.`);
    }

    listItems(category) {
        if (category) {
            return this.items.filter(item => item.category === category);
        }
        return this.items;
    }

    buyItem(itemId, playerId) {
        const item = this.items.find(item => item.id === itemId);
        if (!item) {
            console.log("Item not found.");
            return;
        }
        console.log(`${playerId} bought ${item.name} for ${item.displayPrice()}.`);
        // Here, integrate with player's coin deduction and inventory addition logic
    }
}

class Membership {
    constructor() {
        this.activeMemberships = new Map(); // Key: playerId, Value: membership details
    }

    addMembership(playerId, durationMonths) {
        const expirationDate = new Date();
        expirationDate.setMonth(expirationDate.getMonth() + durationMonths);
        this.activeMemberships.set(playerId, { expirationDate });
        console.log(`Membership added for player ${playerId}. Expires on ${expirationDate.toDateString()}.`);
    }

    checkMembership(playerId) {
        const membership = this.activeMemberships.get(playerId);
        if (!membership) {
            return false;
        }
        return new Date() < membership.expirationDate;
    }

    renewMembership(playerId, additionalMonths) {
        if (this.checkMembership(playerId)) {
            const membership = this.activeMemberships.get(playerId);
            membership.expirationDate.setMonth(membership.expirationDate.getMonth() + additionalMonths);
            console.log(`Membership for player ${playerId} extended to ${membership.expirationDate.toDateString()}.`);
        } else {
            console.log("No active membership found for this player.");
        }
    }
}

// Exporting modules to be used in other parts of the game
export function setupShop() {
    const shop = new CosmeticShop();
    const membership = new Membership();

    // Example items and memberships initialization
    shop.addItem(new ShopItem(1, "Dragon Wings", 500, "costume"));
    shop.addItem(new ShopItem(2, "Glowing Sword", 300, "weapon skin"));
    shop.addItem(new ShopItem(3, "Mystic Wolf", 750, "pet"));
    shop.addItem(new ShopItem(4, "Cloud Mount", 1000, "mount"));

    // Example membership setup
    membership.addMembership(101, 6); // 6 months membership for player 101

    console.log("Shop and Membership systems initialized.");
}

