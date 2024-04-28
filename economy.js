// economy.js - Player-driven economy system for Legends of Lunaria

class Marketplace {
    constructor() {
        this.listings = [];
    }

    // Method to add a new listing to the marketplace
    addListing(item, price, sellerId) {
        const listing = { item, price, sellerId, timestamp: new Date() };
        this.listings.push(listing);
        console.log(`New listing added: ${item.name} for ${price} coins.`);
    }

    // Method to remove a listing from the marketplace
    removeListing(listingId) {
        this.listings = this.listings.filter(listing => listing.id !== listingId);
        console.log(`Listing ${listingId} has been removed from the marketplace.`);
    }

    // Method to search listings by item name
    searchListings(itemName) {
        return this.listings.filter(listing => listing.item.name.toLowerCase().includes(itemName.toLowerCase()));
    }

    // Method to buy an item from the marketplace
    buyItem(listingId, buyerId) {
        const listingIndex = this.listings.findIndex(listing => listing.id === listingId);
        if (listingIndex === -1) {
            console.log("Listing not found.");
            return;
        }

        const listing = this.listings[listingIndex];
        // Simulate transaction
        console.log(`${buyerId} bought ${listing.item.name} for ${listing.price} coins.`);
        this.removeListing(listingId);
    }
}

class Economy {
    constructor() {
        this.marketplace = new Marketplace();
        this.transactions = [];
    }

    // Method to handle transactions
    processTransaction(buyer, seller, item, price) {
        buyer.subtractCoins(price);
        seller.addCoins(price);
        seller.removeItem(item);
        buyer.addItem(item);
        this.transactions.push({ buyer, seller, item, price, timestamp: new Date() });
        console.log(`Transaction completed: ${buyer.name} purchased ${item.name} from ${seller.name} for ${price} coins.`);
    }
}

// Exporting the Economy class for use in other parts of the game
export const economy = new Economy();

// Initialize the economy system
export function initializeEconomy() {
    console.log("Economy system initialized.");
}
