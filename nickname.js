"use strict"

// global
const ID_NAME = "color-test";

function getId()
        {
        // setting localStorage variable allowing anonymous linking of the different tests.
        if (localStorage.getItem(ID_NAME)) 
            {
            return localStorage.getItem(ID_NAME);
            }
        else
            {
            const id = generateRandomPhrase();
            localStorage.setItem(ID_NAME, id);
            return id;
            }
        }

function cleanupId()
        {
        localStorage.removeItem(ID_NAME); 
        }

/**
 * Generates a random English two-word phrase (Adjective + Noun).
 * Uses two lists of 50 words each (2,500 total unique combinations)
 * to ensure high uniqueness across many calls.
 *
 * @returns {string} - A random two-word phrase.
 */
function generateRandomPhrase() {
    // 1. Define large word lists (50 words each = 2,500 unique phrases)
    const adjectives = [
        "Silent", "Crimson", "Swift", "Golden", "Frozen", "Woven",
        "Solar", "Lunar", "Steady", "Brave", "Curious", "Wandering",
        "Sparkling", "Mystic", "Giant", "Tiny", "Humble", "Vivid",
        "Electric", "Antique", "Salty", "Shifting", "Velvet", "Granite",
        "Azure", "Echoing", "Flickering", "Hollow", "Jagged", "Lost",
        "Mechanical", "Obsidian", "Painted", "Quirky", "Rusty", "Scarlet",
        "Tarnished", "Unseen", "Vicious", "Wizened", "Yielding", "Zesty",
        "Ethereal", "Misty", "Sturdy", "Whirling", "Polished", "Fragrant",
        "Distant", "Bright"
    ];

    const nouns = [
        "River", "Stone", "Cloud", "Shadow", "Castle", "Voyage",
        "Moment", "Echo", "Whisper", "Portal", "Beacon", "Pebble",
        "Desert", "Ocean", "Comet", "Forest", "Spirit", "Fountain",
        "Harbor", "Machine", "Gale", "Summit", "Lantern", "Orb",
        "Nexus", "Chalice", "Riddle", "Scroll", "Specter", "Warden",
        "Zephyr", "Anchor", "Cloak", "Drift", "Forge", "Glacier",
        "Kin", "Loom", "Mantle", "Picket", "Rune", "Sentry",
        "Thicket", "Vault", "Wisp", "Spire", "Tundra", "Canyon",
        "Bridge", "Star"
    ];

    // 2. Define the selection logic
    const adjLength = adjectives.length;
    const nounLength = nouns.length;

    // Use a robust method for generating a cryptographically random index (optional, but good practice)
    // Note: Math.random() is sufficient for this purpose, but using crypto is often preferred.
    const randomInt = (max) => Math.floor(Math.random() * max);

    // 3. Select random indices
    const adjIndex = randomInt(adjLength);
    const nounIndex = randomInt(nounLength);

    // 4. Construct and return the phrase
    const adjective = adjectives[adjIndex];
    const noun = nouns[nounIndex];

    return `${adjective} ${noun}`;
}

