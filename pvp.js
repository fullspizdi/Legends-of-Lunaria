// pvp.js - Handles Player vs Player interactions and PvP zones

class PvPZone {
    constructor(zoneId, name, description, entryRequirements) {
        this.zoneId = zoneId;
        this.name = name;
        this.description = description;
        this.entryRequirements = entryRequirements;
        this.players = [];
    }

    enterZone(player) {
        if (this.checkRequirements(player)) {
            this.players.push(player);
            console.log(`${player.name} has entered the PvP zone: ${this.name}`);
        } else {
            console.log(`Entry Denied for ${player.name}: Does not meet requirements.`);
        }
    }

    leaveZone(player) {
        this.players = this.players.filter(p => p.id !== player.id);
        console.log(`${player.name} has left the PvP zone: ${this.name}`);
    }

    checkRequirements(player) {
        return player.level >= this.entryRequirements.minLevel;
    }

    initiateDuel(player1, player2) {
        if (this.players.includes(player1) && this.players.includes(player2)) {
            console.log(`Duel started between ${player1.name} and ${player2.name} in ${this.name}`);
            const winner = Math.random() < 0.5 ? player1 : player2;
            this.resolveDuel(winner);
        } else {
            console.log("Both players must be in the same PvP zone to duel.");
        }
    }

    resolveDuel(winner) {
        console.log(`${winner.name} wins the duel!`);
        winner.increaseRank();
    }
}

class Player {
    constructor(id, name, level) {
        this.id = id;
        this.name = name;
        this.level = level;
        this.rank = 0;
    }

    increaseRank() {
        this.rank++;
        console.log(`${this.name}'s rank increased to ${this.rank}`);
    }
}

// Example usage:
const dragonPit = new PvPZone(1, "Dragon Pit", "A dangerous pit where only the brave dare to duel.", { minLevel: 10 });
const player1 = new Player(101, "Knight Arthur", 12);
const player2 = new Player(102, "Wizard Merlin", 15);

dragonPit.enterZone(player1);
dragonPit.enterZone(player2);
dragonPit.initiateDuel(player1, player2);

