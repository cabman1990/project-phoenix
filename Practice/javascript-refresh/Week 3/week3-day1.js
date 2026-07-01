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
 * * @returns {BoardGame[]} An array of board game objects.
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
 * Iterates through the full list of games and logs every title to the console.
 * * @param {BoardGame[]} games - The array of board games to process.
 */
function displayAll(games) {
    console.log("\n\n******GAME TITLES IN COLLECTION******")

    games.forEach(game => {
        console.log(game.title);
    })
}

/**
 * Filters the list for owned games and logs their titles to the console.
 * * @param {BoardGame[]} games - The array of board games to filter.
 */
function displayOwned(games) {
    console.log("\n\n******OWNED GAME TITLES IN COLLECTION******")

    games.forEach(game => {
        if (game.owned) console.log(game.title);
    })
}

/**
 * Filters the list for favorite games and logs their titles to the console.
 * * @param {BoardGame[]} games - The array of board games to filter.
 */
function displayFavorites(games) {
    console.log("\n\n******FAVORITE GAME TITLES IN COLLECTION******")

    games.forEach(game => {
        if (game.favorite) console.log(game.title);
    })
}

/**
 * Filters and displays game titles along with their release year,
 * strictly for games released after the specified year constraint.
 * * @param {BoardGame[]} games - The array of board games to evaluate.
 * @param games
 * @param {number} year - The floor year milestone (non-inclusive).
 */
function displayGamesReleasedAfterYear(games, year) {
    console.log(`\n\n******GAME TITLES AFTER YEAR: ${year}******`)

    games.forEach(game => {
        if (game.yearReleased > year) console.log(game.title + ` (${game.yearReleased})`);
    })
}

/**
 * Filters and logs games capable of hosting player pools strictly greater than 4.
 * * @param {BoardGame[]} games - The array of board games to evaluate.
 */
function displayGamesSupportingMoreThanFourPlayers(games) {
    console.log(`\n\n******GAME SUPPORTING MORE THAN FOUR PLAYERS!******`)

    games.forEach(game => {
        if (game.playerCount > 4) console.log(game.title + ` (Players Supported: ${game.playerCount})`)
    })
}

/**
 * Intended to find owned games count. Note: Currently loops over matches but
 * prints a misleading total collection length rather than the owned calculation.
 * * @param {BoardGame[]} games - The array of board games to evaluate.
 */
function ownedGamesCount(games) {
    let count = games.filter(game=> game.owned).length;
    console.log(`\n\n******GAMES COUNT OWNED: ${count}******`)
}

/**
 * Filters the games down to favorites and displays the calculated length of that subset.
 * * @param {BoardGame[]} games - The array of board games to evaluate.
 */
function favoriteGamesCount(games) {
    let favoriteCount = games.filter(function (game) {
        return game.favorite === true;
    }).length;

    console.log(`\n\n******GAMES COUNT FAVORITES: ${favoriteCount}******`)

}

/**
 * Calculates the arithmetic mean rating score across all given games
 * and prints it localized to 2 decimal places.
 * * @param {BoardGame[]} games - The array of board games to average.
 */
function calculateAverageRating(games) {
    let total = 0;

    games.forEach(function (game) {
        total += game.rating;
    })

    console.log(`\n\n******GAMES AVERAGE RATING: ${(total / games.length).toFixed(2)}******`)
}

/**
 * Evaluates the maximum rating value present in the collection
 * and outputs all games matching that maximum score tier.
 * * @param {BoardGame[]} games - The array of board games to evaluate.
 */
function highestRatedGame(games) {
    console.log(`\n\n******HIGHEST RATED GAME(S) ARE: ******`)
    let maxRating = Math.max(...games.map(game => game.rating));
    let winners = games.filter(game => game.rating === maxRating);

    winners.forEach(game => console.log(game.title + ` (Rating: ${game.rating})`));
}

/**
 * Evaluates the maximum play time value present across the games collection
 * and prints all matching titles.
 * * @param {BoardGame[]} games - The array of board games to evaluate.
 */
function longestPlayedGame(games) {
    console.log(`\n\n******HIGHEST PLAY TIME GAME(S) ARE: ******`)
    let maxPlaytime = Math.max(...games.map(game => game.playTimeMinutes));
    let winners = games.filter(game => game.playTimeMinutes === maxPlaytime);

    winners.forEach(game => console.log(game.title + ` (Playtime: ${game.playTimeMinutes} Minutes)`));
}

/**
 * Identifies and logs titles that the user has flagged as a favorite
 * but does not currently own.
 * * @param {BoardGame[]} games - The array of board games to evaluate.
 */
function gamesThatShouldBePurchased(games) {
    //If game is a favorite, but unowned, we assume it should be purchased :P

    console.log(`\n\n******GAMES THAT SHOULD BE PURCHASED!!!!: ******`)

    games.filter(game => !game.owned && game.favorite).forEach(game => console.log(game.title));

}

/**
 * Orchestrator routine. Instantiates the dataset and executes
 * the reporting routines in sequence.
 */
function main() {
    const games = getBoardGames();

    displayAll(games);
    displayOwned(games);
    displayFavorites(games);
    displayGamesReleasedAfterYear(games, 2010);
    displayGamesSupportingMoreThanFourPlayers(games);
    ownedGamesCount(games);
    favoriteGamesCount(games);
    calculateAverageRating(games);
    highestRatedGame(games);
    longestPlayedGame(games);
    gamesThatShouldBePurchased(games);
}

main();