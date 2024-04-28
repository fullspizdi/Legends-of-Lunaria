// membership.js - Membership management for Legends of Lunaria

import { formatNumberWithCommas } from './utils.js';

class Membership {
    constructor() {
        this.members = new Map(); // Store member details using their ID
    }

    // Add a new member
    addMember(playerId, membershipType) {
        const membershipDetails = {
            type: membershipType,
            startDate: new Date(),
            perks: this.getMembershipPerks(membershipType)
        };
        this.members.set(playerId, membershipDetails);
        console.log(`New member added: Player ${playerId} with ${membershipType} membership.`);
    }

    // Remove a member
    removeMember(playerId) {
        if (this.members.has(playerId)) {
            this.members.delete(playerId);
            console.log(`Membership for Player ${playerId} has been cancelled.`);
        } else {
            console.log(`No membership found for Player ${playerId}.`);
        }
    }

    // Check if a player is a member
    isMember(playerId) {
        return this.members.has(playerId);
    }

    // Get membership details
    getMembershipDetails(playerId) {
        if (this.members.has(playerId)) {
            const details = this.members.get(playerId);
            return `Membership Type: ${details.type}, Start Date: ${details.startDate.toLocaleDateString()}, Perks: ${details.perks.join(', ')}`;
        } else {
            return 'No membership details found.';
        }
    }

    // Define membership perks based on type
    getMembershipPerks(membershipType) {
        switch (membershipType) {
            case 'silver':
                return ['+10% XP gain', 'Extended bank storage'];
            case 'gold':
                return ['+20% XP gain', 'Extended bank storage', 'Access to premium quests'];
            case 'platinum':
                return ['+30% XP gain', 'Extended bank storage', 'Access to premium quests', 'Exclusive mounts and pets'];
            default:
                return [];
        }
    }

    // Update membership type
    updateMembership(playerId, newType) {
        if (this.members.has(playerId)) {
            const currentDetails = this.members.get(playerId);
            currentDetails.type = newType;
            currentDetails.perks = this.getMembershipPerks(newType);
            console.log(`Membership for Player ${playerId} updated to ${newType}.`);
        } else {
            console.log(`No existing membership found for Player ${playerId} to update.`);
        }
    }
}

export const membershipSystem = new Membership();
