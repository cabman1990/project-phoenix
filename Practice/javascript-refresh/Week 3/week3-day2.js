
/**
 * Object representing a board game's metadata and user collection stats.
 * @typedef {Object} BoardGame
 * @property {string} title - The title of the board game.
 * @property {string} publisher - The publisher of the game.
 * @property {number} yearReleased - The four-digit year the game was released.
 * @property {number} playerCount - The maximum number of players supported.
 * @property {number} playTimeMinutes - The expected duration of a single game in minutes.
 * @property {('Easy'|'Medium'|'Heavy')} complexity - The weight or rule complexity of the game.
 * @property {boolean} owned - Whether the user currently owns the game.
 * @property {boolean} favorite - Whether the user flags this game as a favorite.
 * @property {number} rating - The user or community rating out of 10.
 */

/**
 * Generates and returns a hardcoded collection of fictional and satirical board games.
 * @returns {BoardGame[]} An array of board game objects.
 */
function getBoardGames() {
    return [{
        title: "Chutes and Razor Blades",
        publisher: "Satanic Panic Playthings",
        yearReleased: 1992,
        playerCount: 1,
        playTimeMinutes: 120,
        complexity: "Heavy",
        owned: true,
        favorite: true,
        rating: 7.4
    }, {
        title: "Tax Audit: The Legacy Game",
        publisher: "IRS Interactive",
        yearReleased: 2024,
        playerCount: 4,
        playTimeMinutes: 480,
        complexity: "Heavy",
        owned: true,
        favorite: false,
        rating: 10.0
    }, {
        title: "Don't Wake the Eldritch Horror",
        publisher: "Arkham Daycare Supply",
        yearReleased: 1890,
        playerCount: 7,
        playTimeMinutes: 30,
        complexity: "Easy",
        owned: false,
        favorite: true,
        rating: 9.2
    }, {
        title: "Extreme Monopoly: Knife Fight Edition",
        publisher: "Hasbro After Dark",
        yearReleased: 2021,
        playerCount: 2,
        playTimeMinutes: 90,
        complexity: "Medium",
        owned: true,
        favorite: true,
        rating: 6.5
    }, {
        title: "Suburban Lawn Warfare",
        publisher: "HOA Overlords Inc.",
        yearReleased: 2018,
        playerCount: 5,
        playTimeMinutes: 180,
        complexity: "Medium",
        owned: true,
        favorite: false,
        rating: 5.8
    }, {
        title: "Oops! All Mimics",
        publisher: "Paranoia Press",
        yearReleased: 2015,
        playerCount: 3,
        playTimeMinutes: 45,
        complexity: "Heavy",
        owned: false,
        favorite: false,
        rating: 10.0
    }, {
        title: "Quantum Physics for Toddlers",
        publisher: "MIT Junior",
        yearReleased: 2023,
        playerCount: 1,
        playTimeMinutes: 15,
        complexity: "Heavy",
        owned: true,
        favorite: true,
        rating: 8.7
    }, {
        title: "Staring Contest",
        publisher: "Dry Eye Games",
        yearReleased: 2012,
        playerCount: 2,
        playTimeMinutes: 60,
        complexity: "Easy",
        owned: true,
        favorite: false,
        rating: 7.1
    }, {
        title: "Silent Disco Manager",
        publisher: "Awkward Silence Games",
        yearReleased: 2019,
        playerCount: 6,
        playTimeMinutes: 150,
        complexity: "Medium",
        owned: false,
        favorite: false,
        rating: 7.9
    }, {
        title: "Kitchen Floor Lego Stomp",
        publisher: "Parental Doom Ltd.",
        yearReleased: 2005,
        playerCount: 4,
        playTimeMinutes: 20,
        complexity: "Easy",
        owned: true,
        favorite: false,
        rating: 4.2
    }, {
        title: "Tears of the Software Engineer",
        publisher: "StackOverflow & Chill",
        yearReleased: 2025,
        playerCount: 1,
        playTimeMinutes: 480,
        complexity: "Heavy",
        owned: true,
        favorite: false,
        rating: 8.8
    }, {
        title: "Gaslight, Gatekeep, Girlboss",
        publisher: "Manipulative Media",
        yearReleased: 2022,
        playerCount: 3,
        playTimeMinutes: 120,
        complexity: "Medium",
        owned: false,
        favorite: true,
        rating: 9.1
    }, {
        title: "The Floor is Actual Lava",
        publisher: "Tectonic Hazard Toys",
        yearReleased: 2026,
        playerCount: 5,
        playTimeMinutes: 25,
        complexity: "Easy",
        owned: true,
        favorite: true,
        rating: 9.9
    }, {
        title: "Waiting in Line at the DMV",
        publisher: "Bureaucracy Fun",
        yearReleased: 1970,
        playerCount: 12,
        playTimeMinutes: 480,
        complexity: "Heavy",
        owned: true,
        favorite: false,
        rating: 2.1
    }, {
        title: "Zombie HOA",
        publisher: "HOA Overlords Inc.",
        yearReleased: 2020,
        playerCount: 4,
        playTimeMinutes: 180,
        complexity: "Medium",
        owned: true,
        favorite: false,
        rating: 6.8
    }, {
        title: "Dungeon Accountants",
        publisher: "Critical Failure Games",
        yearReleased: 2016,
        playerCount: 5,
        playTimeMinutes: 200,
        complexity: "Heavy",
        owned: false,
        favorite: false,
        rating: 7.8
    }, {
        title: "Cat Lawyer Simulator",
        publisher: "Meow Media",
        yearReleased: 2022,
        playerCount: 2,
        playTimeMinutes: 75,
        complexity: "Easy",
        owned: true,
        favorite: false,
        rating: 6.4
    }, {
        title: "Pirates vs Accountants",
        publisher: "Critical Failure Games",
        yearReleased: 2018,
        playerCount: 6,
        playTimeMinutes: 140,
        complexity: "Medium",
        owned: true,
        favorite: true,
        rating: 8.1
    }, {
        title: "Escape from HR",
        publisher: "Office Chaos",
        yearReleased: 2021,
        playerCount: 4,
        playTimeMinutes: 90,
        complexity: "Medium",
        owned: false,
        favorite: false,
        rating: 5.5
    }, {
        title: "Office Chair Grand Prix",
        publisher: "Office Chaos",
        yearReleased: 2023,
        playerCount: 8,
        playTimeMinutes: 30,
        complexity: "Easy",
        owned: true,
        favorite: true,
        rating: 9.0
    }, {
        title: "Murder Mystery Potluck",
        publisher: "Dinner Dice",
        yearReleased: 2017,
        playerCount: 6,
        playTimeMinutes: 210,
        complexity: "Heavy",
        owned: false,
        favorite: false,
        rating: 8.4
    }, {
        title: "The Last Burrito",
        publisher: "Dinner Dice",
        yearReleased: 2019,
        playerCount: 4,
        playTimeMinutes: 60,
        complexity: "Easy",
        owned: true,
        favorite: false,
        rating: 6.7
    }, {
        title: "Robot Baristas",
        publisher: "Future Fun",
        yearReleased: 2024,
        playerCount: 3,
        playTimeMinutes: 80,
        complexity: "Medium",
        owned: true,
        favorite: true,
        rating: 9.5
    }, {
        title: "Mars HOA",
        publisher: "Future Fun",
        yearReleased: 2025,
        playerCount: 5,
        playTimeMinutes: 240,
        complexity: "Heavy",
        owned: false,
        favorite: false,
        rating: 8.2
    }, {
        title: "Dragon DMV",
        publisher: "Fantasy Forms",
        yearReleased: 2020,
        playerCount: 7,
        playTimeMinutes: 180,
        complexity: "Medium",
        owned: true,
        favorite: false,
        rating: 7.2
    }, {
        title: "Goblin Grocery Run",
        publisher: "Fantasy Forms",
        yearReleased: 2018,
        playerCount: 2,
        playTimeMinutes: 40,
        complexity: "Easy",
        owned: false,
        favorite: false,
        rating: 6.0
    }, {
        title: "Coffee Apocalypse",
        publisher: "Morning Games",
        yearReleased: 2022,
        playerCount: 4,
        playTimeMinutes: 110,
        complexity: "Medium",
        owned: true,
        favorite: true,
        rating: 8.6
    }, {
        title: "Haunted Ikea",
        publisher: "Flat Pack Studios",
        yearReleased: 2023,
        playerCount: 5,
        playTimeMinutes: 160,
        complexity: "Heavy",
        owned: true,
        favorite: false,
        rating: 9.3
    }, {
        title: "Pigeon Empire",
        publisher: "Bird Brain Games",
        yearReleased: 2016,
        playerCount: 6,
        playTimeMinutes: 90,
        complexity: "Easy",
        owned: false,
        favorite: false,
        rating: 5.4
    }, {
        title: "Cheese Heist",
        publisher: "Mouse Trap Works",
        yearReleased: 2019,
        playerCount: 3,
        playTimeMinutes: 70,
        complexity: "Easy",
        owned: true,
        favorite: false,
        rating: 7.5
    }, {
        title: "Wizard Parking Enforcement",
        publisher: "Magic Bureau",
        yearReleased: 2021,
        playerCount: 4,
        playTimeMinutes: 125,
        complexity: "Medium",
        owned: true,
        favorite: true,
        rating: 9.7
    }, {
        title: "Alien Bake Off",
        publisher: "Cosmic Kitchen",
        yearReleased: 2024,
        playerCount: 5,
        playTimeMinutes: 95,
        complexity: "Medium",
        owned: false,
        favorite: false,
        rating: 8.3
    }, {
        title: "Squirrel Revolution",
        publisher: "Forest Games",
        yearReleased: 2015,
        playerCount: 6,
        playTimeMinutes: 150,
        complexity: "Heavy",
        owned: true,
        favorite: false,
        rating: 7.7
    }, {
        title: "The Cursed Toaster",
        publisher: "Kitchen Chaos",
        yearReleased: 2017,
        playerCount: 2,
        playTimeMinutes: 35,
        complexity: "Easy",
        owned: false,
        favorite: false,
        rating: 6.6
    }, {
        title: "Emoji Diplomacy",
        publisher: "Social Media Games",
        yearReleased: 2023,
        playerCount: 8,
        playTimeMinutes: 100,
        complexity: "Medium",
        owned: true,
        favorite: true,
        rating: 8.5
    }, {
        title: "Penguin Mafia",
        publisher: "Frozen Crime",
        yearReleased: 2022,
        playerCount: 5,
        playTimeMinutes: 170,
        complexity: "Heavy",
        owned: true,
        favorite: false,
        rating: 8.9
    }, {
        title: "Time Traveling Plumber",
        publisher: "Pipe Dreams",
        yearReleased: 2014,
        playerCount: 3,
        playTimeMinutes: 130,
        complexity: "Medium",
        owned: false,
        favorite: false,
        rating: 7.0
    }, {
        title: "Haunted Spreadsheet",
        publisher: "Office Chaos",
        yearReleased: 2021,
        playerCount: 1,
        playTimeMinutes: 50,
        complexity: "Easy",
        owned: true,
        favorite: false,
        rating: 6.2
    }, {
        title: "Vampire Customer Service",
        publisher: "Night Shift Games",
        yearReleased: 2020,
        playerCount: 4,
        playTimeMinutes: 190,
        complexity: "Heavy",
        owned: true,
        favorite: true,
        rating: 9.8
    }, {
        title: "Ninja Librarians",
        publisher: "Quiet Riot",
        yearReleased: 2019,
        playerCount: 2,
        playTimeMinutes: 80,
        complexity: "Medium",
        owned: false,
        favorite: false,
        rating: 7.6
    }, {
        title: "Dinosaur Tax Evasion",
        publisher: "IRS Interactive",
        yearReleased: 2026,
        playerCount: 6,
        playTimeMinutes: 220,
        complexity: "Heavy",
        owned: true,
        favorite: false,
        rating: 9.4
    }, {
        title: "Banana Republic Simulator",
        publisher: "Political Fruit",
        yearReleased: 2018,
        playerCount: 5,
        playTimeMinutes: 140,
        complexity: "Medium",
        owned: false,
        favorite: false,
        rating: 5.9
    }, {
        title: "Space Hamsters",
        publisher: "Galaxy Games",
        yearReleased: 2024,
        playerCount: 3,
        playTimeMinutes: 65,
        complexity: "Easy",
        owned: true,
        favorite: true,
        rating: 8.0
    }, {
        title: "Ghosts Need Therapy",
        publisher: "Paranormal Press",
        yearReleased: 2025,
        playerCount: 4,
        playTimeMinutes: 155,
        complexity: "Medium",
        owned: true,
        favorite: false,
        rating: 8.7
    }, {
        title: "The Infinite Meeting",
        publisher: "Office Chaos",
        yearReleased: 2023,
        playerCount: 10,
        playTimeMinutes: 480,
        complexity: "Heavy",
        owned: false,
        favorite: false,
        rating: 10.0
    }, {
        title: "Lawn Gnome Uprising",
        publisher: "Garden Games",
        yearReleased: 2016,
        playerCount: 4,
        playTimeMinutes: 85,
        complexity: "Easy",
        owned: true,
        favorite: false,
        rating: 7.3
    }, {
        title: "Possessed Roomba",
        publisher: "Smart Home Studios",
        yearReleased: 2021,
        playerCount: 2,
        playTimeMinutes: 55,
        complexity: "Easy",
        owned: true,
        favorite: true,
        rating: 8.4
    }, {
        title: "Caffeinated Chess",
        publisher: "Brain Burn",
        yearReleased: 2022,
        playerCount: 2,
        playTimeMinutes: 300,
        complexity: "Heavy",
        owned: false,
        favorite: true,
        rating: 9.6
    }, {
        title: "Duck Court",
        publisher: "Bird Brain Games",
        yearReleased: 2025,
        playerCount: 5,
        playTimeMinutes: 145,
        complexity: "Medium",
        owned: true,
        favorite: false,
        rating: 7.8
    }, {
        title: "Escape the Elevator Music",
        publisher: "Awkward Silence Games",
        yearReleased: 2017,
        playerCount: 4,
        playTimeMinutes: 95,
        complexity: "Easy",
        owned: false,
        favorite: false,
        rating: 6.9
    }, {
        title: "Moon Cheese Cartel",
        publisher: "Cosmic Kitchen",
        yearReleased: 2024,
        playerCount: 6,
        playTimeMinutes: 205,
        complexity: "Heavy",
        owned: true,
        favorite: true,
        rating: 9.2
    }, {
        title: "Hamster Olympics",
        publisher: "Tiny Sports",
        yearReleased: 2015,
        playerCount: 8,
        playTimeMinutes: 40,
        complexity: "Easy",
        owned: true,
        favorite: false,
        rating: 6.8
    }, {
        title: "Bread Wizard Academy",
        publisher: "Magic Bureau",
        yearReleased: 2023,
        playerCount: 4,
        playTimeMinutes: 160,
        complexity: "Medium",
        owned: false,
        favorite: true,
        rating: 8.8
    }, {
        title: "Shark Karaoke",
        publisher: "Ocean Laughs",
        yearReleased: 2022,
        playerCount: 5,
        playTimeMinutes: 100,
        complexity: "Easy",
        owned: true,
        favorite: false,
        rating: 7.4
    }, {
        title: "Volcano Insurance",
        publisher: "Disaster Games",
        yearReleased: 2019,
        playerCount: 3,
        playTimeMinutes: 115,
        complexity: "Medium",
        owned: false,
        favorite: false,
        rating: 7.1
    }, {
        title: "Wizard DMV",
        publisher: "Magic Bureau",
        yearReleased: 2020,
        playerCount: 7,
        playTimeMinutes: 250,
        complexity: "Heavy",
        owned: true,
        favorite: true,
        rating: 9.5
    }, {
        title: "Koala Construction",
        publisher: "Builder Bros",
        yearReleased: 2021,
        playerCount: 4,
        playTimeMinutes: 90,
        complexity: "Easy",
        owned: true,
        favorite: false,
        rating: 7.0
    }, {
        title: "Zombie Wedding Planner",
        publisher: "Undead Events",
        yearReleased: 2024,
        playerCount: 6,
        playTimeMinutes: 210,
        complexity: "Medium",
        owned: false,
        favorite: false,
        rating: 8.2
    }, {
        title: "Cursed Coupon Clipping",
        publisher: "Budget Fun",
        yearReleased: 2018,
        playerCount: 2,
        playTimeMinutes: 75,
        complexity: "Easy",
        owned: true,
        favorite: false,
        rating: 5.7
    }, {
        title: "Escape the Goose",
        publisher: "Feathered Fury",
        yearReleased: 2026,
        playerCount: 5,
        playTimeMinutes: 135,
        complexity: "Medium",
        owned: true,
        favorite: true,
        rating: 9.1
    }, {
        title: "Dungeon Janitors",
        publisher: "Critical Failure Games",
        yearReleased: 2017,
        playerCount: 4,
        playTimeMinutes: 180,
        complexity: "Heavy",
        owned: false,
        favorite: false,
        rating: 8.0
    }, {
        title: "The Sock Dimension",
        publisher: "Laundry Logic",
        yearReleased: 2025,
        playerCount: 3,
        playTimeMinutes: 60,
        complexity: "Easy",
        owned: true,
        favorite: false,
        rating: 6.3
    }, {
        title: "Corporate Escape Room",
        publisher: "Office Chaos",
        yearReleased: 2023,
        playerCount: 8,
        playTimeMinutes: 240,
        complexity: "Heavy",
        owned: true,
        favorite: true,
        rating: 9.4
    }, {
        title: "Mole Kingdom",
        publisher: "Underground Games",
        yearReleased: 2016,
        playerCount: 5,
        playTimeMinutes: 100,
        complexity: "Medium",
        owned: false,
        favorite: false,
        rating: 7.5
    }, {
        title: "Grandma's Revenge",
        publisher: "Family Game Night",
        yearReleased: 2020,
        playerCount: 4,
        playTimeMinutes: 90,
        complexity: "Easy",
        owned: true,
        favorite: false,
        rating: 6.9
    }, {
        title: "Alien Babysitters",
        publisher: "Future Fun",
        yearReleased: 2026,
        playerCount: 6,
        playTimeMinutes: 160,
        complexity: "Medium",
        owned: true,
        favorite: true,
        rating: 8.9
    }, {
        title: "Dice of Destiny",
        publisher: "Critical Failure Games",
        yearReleased: 2025,
        playerCount: 4,
        playTimeMinutes: 480,
        complexity: "Heavy",
        owned: true,
        favorite: true,
        rating: 10.0
    }];
}

/**
 * Filters the collection to find games from a specific publisher and logs them to the console.
 * @param {BoardGame[]} games - The array of board games to filter.
 * @param {string} publisher - The name of the publisher to filter by.
 */
function displayGamesFromPublisher(games, publisher) {
    console.log(`\n\nResults from ${publisher}:`);

    games.filter(game => game.publisher === publisher).forEach(game => console.log("*" + game.title));
}

/**
 * Filters the collection to find games that meet or exceed a specific rating and logs them.
 * @param {BoardGame[]} games - The array of board games to filter.
 * @param {number} rating - The minimum user/community rating required.
 */
function displayGamesWithMinRating(games, rating) {
    console.log(`\n\nGames with at least a rating of: ${rating}`);
    games.filter(game => game.rating >= rating).forEach(game => console.log("*" + game.title + ` (Rated: ${game.rating})`));
}

/**
 * Filters the collection for games whose titles contain a specific substring (case-insensitive) and logs them.
 * @param {BoardGame[]} games - The array of board games to filter.
 * @param {string} phrase - The substring phrase to search for within game titles.
 */
function displayGamesWithPhrase(games, phrase) {
    console.log(`\n\nGames containing the phrase: '${phrase}'`);

    games.filter(game => game.title.toLowerCase().includes(phrase.toLowerCase())).forEach(game => console.log("*" + game.title));
}

/**
 * Filters the collection for games with a play duration strictly between two values (exclusive) and logs them.
 * @param {BoardGame[]} games - The array of board games to filter.
 * @param {number} minTime - The lower bound playtime threshold in minutes.
 * @param {number} maxTime - The upper bound playtime threshold in minutes.
 */
function displayGamePlaytimeBetweenTwoValues(games, minTime, maxTime) {
    console.log(`\n\nGames that playtime fall between: ${minTime} minutes and ${maxTime} minutes:`);

    games.filter(game => game.playTimeMinutes > minTime && game.playTimeMinutes < maxTime).forEach(game =>
        console.log(`* ${game.title} (Playtime: ${game.playTimeMinutes} minutes)`));
}

/**
 * Filters the collection for games matching a specified complexity level and logs them.
 * @param {BoardGame[]} games - The array of board games to filter.
 * @param {('Easy'|'Medium'|'Heavy')} complexity - The target complexity weight.
 */
function displayGamesWithCertainComplexity(games, complexity) {
    console.log(`\n\nGames that have a complexity of: ${complexity}`);

    games.filter(game => game.complexity === complexity).forEach(game => console.log("*" + game.title));
}

/**
 * Advanced query filtering owned games that contain a specific phrase in the title 
 * and have a duration strictly between two threshold parameters.
 * @param {BoardGame[]} games - The array of board games to filter.
 * @param {string} phrase - The substring phrase to match within the title.
 * @param {number} minTime - The minimum playtime duration restriction (exclusive).
 * @param {number} maxTime - The maximum playtime duration restriction (exclusive).
 */
function displayOwnedGamesWithPhraseBetweenTwoValues(games, phrase, minTime, maxTime) {
    console.log(`\n\nOwned Games that contain the phrase: '${phrase}', with a playtime between: ${minTime} and ${maxTime} minutes`);
    games.filter(game => game.title.toLowerCase().includes(phrase.toLowerCase()) && game.playTimeMinutes > minTime && game.playTimeMinutes < maxTime)
        .forEach(game => console.log("*" + game.title));
}

/**
 * Recommends a game for immediate play. Filters for owned games matching the player count. 
 * Prioritizes user favorites and falls back to highest overall rating.
 * @param {BoardGame[]} games - The array of board games to filter.
 * @param {number} currentPlayerCount - The exact player count required for the game night.
 */
function instantGratificationFilter(games, currentPlayerCount) {
    //This logic is designed to find a game the user can actually play right now, prioritizing comfort and availability.

    console.log("\n\n\Let's find the perfect game for tonight! I'm scanning your collection using the 'Instant Gratification' formula: \nfiltering for games you own, " +
        "matching your player count, and prioritizing your top-rated favorites...");

    console.log(`\n[Status] Found ${games.length} games in your Library`);

    let ownedGames = games.filter(game => game.owned);

    console.log(`[Status] ${ownedGames.length} are physically owned and available to play tonight`);

    let matchPlayerCount = ownedGames.filter(game => game.playerCount === currentPlayerCount);
    console.log(`[Status] ${matchPlayerCount.length} games match your current player count`);

    let checkFavorite = matchPlayerCount.filter(game => game.favorite);

    let candidates;
    if (checkFavorite.length > 0) {
        candidates = checkFavorite;
    } else {
        candidates = matchPlayerCount;
    }

    candidates.sort((a, b) => b.rating - a.rating);

    let recommendedGame = candidates[0];

    if(recommendedGame) {
        console.log(`[Success] Out of your remaining options, the winner is your top-rated choice: ${recommendedGame.title}! (Rating: ${recommendedGame.rating})`);
    }
    else {
        console.log("[Status] Bummer! No games matched your criteria for tonight.");
    }
}

/**
 * Main application entry point. Orchestrates the loading of the game data
 * and triggers multiple analysis filters for verification.
 */
function main() {
    let games = getBoardGames();
    displayGamesFromPublisher(games, "Critical Failure Games");
    displayGamesWithMinRating(games, 9);
    displayGamesWithPhrase(games, "of");
    displayGamePlaytimeBetweenTwoValues(games, 200, 670);
    displayGamesWithCertainComplexity(games, "Heavy");
    displayOwnedGamesWithPhraseBetweenTwoValues(games, "of", 0, 500);
    instantGratificationFilter(games, 1);
}

main();
