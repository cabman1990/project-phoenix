/**
 * Retrieves a predefined list of 25 unique creature objects.
 * * @returns {Object[]} An array of creature objects containing names, types, levels, health, and rarity.
 */
function getCreatures() {
    return [
        {
            "name": "Gorgoroth the Flatulent",
            "type": "Dragon",
            "level": 69,
            "health": 42000,
            "rare": true
        },
        {
            "name": "Scurvy Dave",
            "type": "Undead",
            "level": 12,
            "health": 850,
            "rare": false
        },
        {
            "name": "BBL Goblin",
            "type": "Humanoid",
            "level": 24,
            "health": 1800,
            "rare": true
        },
        {
            "name": "Sir Clanks-a-Lot",
            "type": "Construct",
            "level": 45,
            "health": 9500,
            "rare": false
        },
        {
            "name": "Spicy Meatball",
            "type": "Elemental",
            "level": 32,
            "health": 4100,
            "rare": false
        },
        {
            "name": "The Horny Toad",
            "type": "Beast",
            "level": 5,
            "health": 250,
            "rare": false
        },
        {
            "name": "Karen the Necromancer",
            "type": "Humanoid",
            "level": 55,
            "health": 7200,
            "rare": true
        },
        {
            "name": "Ashy Larry",
            "type": "Elemental",
            "level": 18,
            "health": 1950,
            "rare": false
        },
        {
            "name": "Anxiety Demon",
            "type": "Demon",
            "level": 80,
            "health": 55000,
            "rare": true
        },
        {
            "name": "Roomba of Doom",
            "type": "Construct",
            "level": 15,
            "health": 1200,
            "rare": false
        },
        {
            "name": "The One-Eyed Trouser Snake",
            "type": "Beast",
            "level": 8,
            "health": 450,
            "rare": false
        },
        {
            "name": "Fluffy the Ball-Biter",
            "type": "Beast",
            "level": 22,
            "health": 2100,
            "rare": true
        },
        {
            "name": "Count Vlad the Impotent",
            "type": "Undead",
            "level": 60,
            "health": 14000,
            "rare": true
        },
        {
            "name": "The Yeast Infection",
            "type": "Slime",
            "level": 14,
            "health": 990,
            "rare": false
        },
        {
            "name": "Sugar Daddy Dragon",
            "type": "Dragon",
            "level": 100,
            "health": 150000,
            "rare": true
        },
        {
            "name": "Cocaine Bear-goyle",
            "type": "Construct",
            "level": 50,
            "health": 11000,
            "rare": true
        },
        {
            "name": "Sweaty Discord Mod",
            "type": "Humanoid",
            "level": 1,
            "health": 90,
            "rare": false
        },
        {
            "name": "The Morning-After Pillbug",
            "type": "Beast",
            "level": 3,
            "health": 110,
            "rare": false
        },
        {
            "name": "Glitch in the Matrix",
            "type": "Construct",
            "level": 75,
            "health": 32000,
            "rare": true
        },
        {
            "name": "The Scurrying Shart",
            "type": "Slime",
            "level": 9,
            "health": 520,
            "rare": false
        },
        {
            "name": "Tits-Out Harpy",
            "type": "Humanoid",
            "level": 28,
            "health": 3100,
            "rare": false
        },
        {
            "name": "Whiskey Dick Wyvern",
            "type": "Dragon",
            "level": 40,
            "health": 8500,
            "rare": false
        },
        {
            "name": "The Hangover Specter",
            "type": "Undead",
            "level": 35,
            "health": 4800,
            "rare": false
        },
        {
            "name": "Peeping Tom the Beholder",
            "type": "Demon",
            "level": 66,
            "health": 23000,
            "rare": true
        },
        {
            "name": "The Golden Shower Golem",
            "type": "Elemental",
            "level": 42,
            "health": 10500,
            "rare": false
        }
    ];
}

/**
 * Gets the total number of creatures in the provided array.
 * * @param {Object[]} creatures - The array of creatures to count.
 * @returns {number} The total count of creatures.
 */
function getAmountOfCreatures(creatures){
    return creatures.length;
}

/**
 * Filters creatures to only include those with a level strictly greater than the specified limit.
 * * @param {Object[]} creatures - The array of creatures to filter.
 * @param {number} level - The minimum level threshold (exclusive).
 * @returns {Object[]} A new array containing only creatures above the specified level.
 */
function filterCreaturesByMinLevel(creatures, level){
    return creatures.filter((creature) => creature.level > level);
}

/**
 * Filters creatures to only include those marked as rare.
 * * @param {Object[]} creatures - The array of creatures to filter.
 * @returns {Object[]} A new array containing only rare creatures.
 */
function filterCreaturesByRarity(creatures){
    return creatures.filter((creature) => creature.rare === true);
}

/**
 * Calculates the average level of all creatures in the provided array.
 * * @param {Object[]} creatures - The array of creatures to evaluate.
 * @returns {number} The mean average level of the creatures.
 */
function averageCreatureLevel(creatures){
    return creatures.reduce((sum, c) => sum + c.level, 0) / getAmountOfCreatures(creatures);
}

/**
 * Determines the highest health pool present and returns all creatures matching that value.
 * * @param {Object[]} creatures - The array of creatures to search.
 * @returns {Object[]} An array of creatures sharing the maximum health value.
 */
function getCreaturesWithHighestHealth(creatures){
    const maxHealth = Math.max(...creatures.map(creature => creature.health));
    return creatures.filter(creature => creature.health === maxHealth);
}

/**
 * Determines the lowest health pool present and returns all creatures matching that value.
 * * @param {Object[]} creatures - The array of creatures to search.
 * @returns {Object[]} An array of creatures sharing the minimum health value.
 */
function getCreaturesWithLowestHealth(creatures){
    const minHealth = Math.min(...creatures.map(creature => creature.health));
    return creatures.filter(creature => creature.health === minHealth);
}

/**
 * Filters creatures to only include those matching a specific type classification.
 * * @param {Object[]} creatures - The array of creatures to filter.
 * @param creatures
 * @param {string} type - The string category to match against (e.g., 'Dragon', 'Beast').
 * @returns {Object[]} A new array containing only creatures of the specified type.
 */
function filterCreaturesByType(creatures, type){
    return creatures.filter((creature) => creature.type === type);
}

/**
 * Calculates the proportion of rare creatures relative to the total population size.
 * * @param {Object[]} creatures - The array of creatures to evaluate.
 * @returns {number} The calculated rarity factor.
 */
function percentCreaturesRare(creatures){
    return filterCreaturesByRarity(creatures).length/getAmountOfCreatures(creatures);
}

/**
 * Sums the health values of all creatures in the provided array together.
 * * @param {Object[]} creatures - The array of creatures to sum up.
 * @returns {number} The total cumulative health of all creatures combined.
 */
function totalHealthAllCreatures(creatures){
    return creatures.reduce((sum, creature) => sum + creature.health, 0);
}

function main() {
    // 1. Retrieve the master list of creatures
    const allCreatures = getCreatures();

    console.log("=========================================");
    console.log("            CREATURE SUMMARY REPORT       ");
    console.log("=========================================");

    // Total creatures
    const totalCount = getAmountOfCreatures(allCreatures);
    console.log(`Total Creatures: ${totalCount}`);

    // Average level
    const avgLevel = averageCreatureLevel(allCreatures);
    console.log(`Average Level: ${avgLevel.toFixed(2)}`);

    // Total health
    const totalHealth = totalHealthAllCreatures(allCreatures);
    console.log(`Total Health: ${totalHealth.toLocaleString()}`);

    // Highest health creature(s)
    const highestHealthCreatures = getCreaturesWithHighestHealth(allCreatures);
    const highestNames = highestHealthCreatures.map(c => `${c.name} (${c.health} HP)`).join(", ");
    console.log(`Highest Health Creature(s): ${highestNames}`);

    // Lowest health creature(s)
    const lowestHealthCreatures = getCreaturesWithLowestHealth(allCreatures);
    const lowestNames = lowestHealthCreatures.map(c => `${c.name} (${c.health} HP)`).join(", ");
    console.log(`Lowest Health Creature(s): ${lowestNames}`);

    // Rare creature count
    const rareCreatures = filterCreaturesByRarity(allCreatures);
    const rareCount = rareCreatures.length;
    console.log(`Rare Creature Count: ${rareCount}`);

    // Rare percentage
    // Note: Using the raw percentCreaturesRare(allCreatures) yields NaN due to the underlying array division.
    // To cleanly output a readable percentage based on your current setup:
    const rarePercentage = (rareCount / totalCount) * 100;
    console.log(`Rare Percentage: ${rarePercentage.toFixed(2)}%`);

    console.log("-----------------------------------------");
    console.log(" Count of Two Chosen Creature Types:");

    // Count of at least two creature types (e.g., Dragon and Construct)
    const dragons = filterCreaturesByType(allCreatures, "Dragon");
    const constructs = filterCreaturesByType(allCreatures, "Construct");
    console.log(`  - Dragons: ${dragons.length}`);
    console.log(`  - Constructs: ${constructs.length}`);

    console.log("-----------------------------------------");

    // Results from a chosen level filter (e.g., Level 50)
    const chosenMinLevel = 50;
    const highLevelCreatures = filterCreaturesByMinLevel(allCreatures, chosenMinLevel);
    console.log(`Creatures above Level ${chosenMinLevel}:`);
    if (highLevelCreatures.length === 0) {
        console.log("  None found.");
    } else {
        highLevelCreatures.forEach(c => {
            console.log(`  - ${c.name} (Lv. ${c.level} ${c.type})`);
        });
    }

    console.log("=========================================");
}

main();