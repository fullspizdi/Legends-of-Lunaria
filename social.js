// social.js - Social interaction features for Legends of Lunaria

class Clan {
    constructor(name, leader) {
        this.name = name;
        this.leader = leader;
        this.members = [leader];
        this.announcements = [];
    }

    addMember(character) {
        if (!this.members.includes(character)) {
            this.members.push(character);
            console.log(`${character.name} has joined the clan ${this.name}.`);
        } else {
            console.log(`${character.name} is already a member of ${this.name}.`);
        }
    }

    removeMember(character) {
        this.members = this.members.filter(member => member !== character);
        console.log(`${character.name} has left the clan ${this.name}.`);
    }

    postAnnouncement(message, author) {
        if (this.members.includes(author)) {
            this.announcements.push({ message, author: author.name, date: new Date() });
            console.log(`New announcement in ${this.name} by ${author.name}: ${message}`);
        } else {
            console.log(`Failed to post announcement: ${author.name} is not a member of ${this.name}.`);
        }
    }

    displayAnnouncements() {
        console.log(`Announcements for ${this.name}:`);
        this.announcements.forEach(announcement => {
            console.log(`${announcement.date.toLocaleString()}: ${announcement.author} - ${announcement.message}`);
        });
    }
}

class Guild extends Clan {
    constructor(name, leader) {
        super(name, leader);
        this.guildBank = [];
    }

    addToBank(item, contributor) {
        if (this.members.includes(contributor)) {
            this.guildBank.push({ item, contributor: contributor.name });
            console.log(`${contributor.name} has contributed a ${item.name} to the guild bank of ${this.name}.`);
        } else {
            console.log(`Failed to add item to bank: ${contributor.name} is not a member of ${this.name}.`);
        }
    }

    removeFromBank(item, requester) {
        const itemIndex = this.guildBank.findIndex(bankItem => bankItem.item === item && bankItem.contributor === requester.name);
        if (itemIndex !== -1 && this.members.includes(requester)) {
            this.guildBank.splice(itemIndex, 1);
            console.log(`${requester.name} has retrieved a ${item.name} from the guild bank of ${this.name}.`);
        } else {
            console.log(`Failed to retrieve item: ${requester.name} is not a member of ${this.name} or item does not exist.`);
        }
    }
}

function initializeSocialFeatures() {
    console.log("Social features initialized: Clans and Guilds are now available.");
}

export { Clan, Guild, initializeSocialFeatures };
