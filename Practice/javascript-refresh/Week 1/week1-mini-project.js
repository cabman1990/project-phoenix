/**
 * Gives you the full list of books in the collection.
 * @returns {Array} An array of book objects, each containing details like Title, Author, and Rating.
 */
function getBooks(){
    return [
        {
            Title:            "The Art of the Stealth Fart: A Corporate Survival Guide",
            Author:           "Gasser, Seymour",
            Genre:            "Self-Help",
            PublicationYear:  2023,
            NumberOfPages:    185,
            Rating:           9
        },
        {
            Title:            "Why Does My Asshole Itch? and Other Questions for God",
            Author:           "Scratcher, Harry",
            Genre:            "Biography",
            PublicationYear:  2025,
            NumberOfPages:    310,
            Rating:           7
        },
        {
            Title:            "Baking with Breastmilk: A Guide to Co-Worker Sabotage",
            Author:           "Lactate, Karen",
            Genre:            "Comedy",
            PublicationYear:  2024,
            NumberOfPages:    112,
            Rating:           8
        },
        {
            Title:            "Tinder in the Trenches: Swiping Right on Disappointment",
            Author:           "Horny, Desperate",
            Genre:            "Romance",
            PublicationYear:  2022,
            NumberOfPages:    290,
            Rating:           4
        },
        {
            Title:            "How to Shit at Work Without Getting Caught",
            Author:           "Gasser, Seymour",
            Genre:            "Self-Help",
            PublicationYear:  2021,
            NumberOfPages:    140,
            Rating:           10
        },
        {
            Title:            "The Kamasutra for People Who Have Lower Back Pain",
            Author:           "Snap, Crackle",
            Genre:            "Comedy",
            PublicationYear:  2019,
            NumberOfPages:    96,
            Rating:           6
        },
        {
            Title:            "Am I Pregnant or Is This a Massive Beer Shit?",
            Author:           "Scratcher, Harry",
            Genre:            "Drama",
            PublicationYear:  2026,
            NumberOfPages:    175,
            Rating:           5
        },
        {
            Title:            "Don't Eat That: A History of Gas Station Sushi and Explosive Diarrhea",
            Author:           "Squirts, Liquid",
            Genre:            "Sci-Fi",
            PublicationYear:  2020,
            NumberOfPages:    420,
            Rating:           10
        },
        {
            Title:            "My Husband’s Micro-Penis and the Search for the Missing Clitoris",
            Author:           "Disappointed, Brenda",
            Genre:            "Mystery",
            PublicationYear:  2018,
            NumberOfPages:    350,
            Rating:           8
        },
        {
            Title:            "101 Things to Do with Your Ex's Severed Dignity",
            Author:           "Psycho, Tiffany",
            Genre:            "Fantasy",
            PublicationYear:  2023,
            NumberOfPages:    215,
            Rating:           7
        },
        {
            Title:            "The Popcorn Ceilings of Purgatory: A Yelp Review of Hell",
            Author:           "Satan, Lou",
            Genre:            "Comedy",
            PublicationYear:  2015,
            NumberOfPages:    666,
            Rating:           6
        },
        {
            Title:            "Unsolicited Dick Pics: A Comprehensive Guide to Bad Lighting",
            Author:           "Horny, Desperate",
            Genre:            "Self-Help",
            PublicationYear:  2024,
            NumberOfPages:    88,
            Rating:           2
        },
        {
            Title:            "Cooking with Cat Piss: Aromas of Despair",
            Author:           "Hoarder, Eleanor",
            Genre:            "Comedy",
            PublicationYear:  2017,
            NumberOfPages:    104,
            Rating:           3
        },
        {
            Title:            "The Only Reason I Haven't Killed You Is the Lack of Alibi",
            Author:           "Disappointed, Brenda",
            Genre:            "Drama",
            PublicationYear:  2022,
            NumberOfPages:    312,
            Rating:           9
        },
        {
            Title:            "Is it Gas or an Existential Crisis?",
            Author:           "Gasser, Seymour",
            Genre:            "Biography",
            PublicationYear:  2025,
            NumberOfPages:    190,
            Rating:           7
        },
        {
            Title:            "Cocaine for Houseplants: Growing a Vibrant Monstera",
            Author:           "Botanist, Tweaking",
            Genre:            "Sci-Fi",
            PublicationYear:  2023,
            NumberOfPages:    150,
            Rating:           8
        },
        {
            Title:            "The Joy of Sobbing Into a Block of Cheddar at 3 AM",
            Author:           "Depressed, Dave",
            Genre:            "Romance",
            PublicationYear:  2021,
            NumberOfPages:    220,
            Rating:           5
        },
        {
            Title:            "How to Conceal an Erection in Tight Khakis",
            Author:           "Stiff, Woody",
            Genre:            "Self-Help",
            PublicationYear:  2016,
            NumberOfPages:    69,
            Rating:           4
        },
        {
            Title:            "Breast Implants for Your Pet: Why Stop at Spaying?",
            Author:           "Vain, Dr. Beverly",
            Genre:            "Fantasy",
            PublicationYear:  2019,
            NumberOfPages:    180,
            Rating:           1
        },
        {
            Title:            "Tax Evasion via Faking Your Own Alien Abduction",
            Author:           "Grifter, Gary",
            Genre:            "Mystery",
            PublicationYear:  2024,
            NumberOfPages:    410,
            Rating:           9
        },
        {
            Title:            "The Day the Inflatable Doll Grew a Conscience",
            Author:           "Lonely, Larry",
            Genre:            "Sci-Fi",
            PublicationYear:  2020,
            NumberOfPages:    275,
            Rating:           6
        },
        {
            Title:            "He Only Texted 'U Up?' Because His Dog Was Asleep",
            Author:           "Disappointed, Brenda",
            Genre:            "Drama",
            PublicationYear:  2025,
            NumberOfPages:    198,
            Rating:           8
        },
        {
            Title:            "Polishing the One-Eyed Snake: A History of Bad Metaphors",
            Author:           "Stiff, Woody",
            Genre:            "Biography",
            PublicationYear:  2014,
            NumberOfPages:    340,
            Rating:           7
        },
        {
            Title:            "The Shart of War: Sun Tzu for the Gastrointestinally Challenged",
            Author:           "Squirts, Liquid",
            Genre:            "Comedy",
            PublicationYear:  2022,
            NumberOfPages:    120,
            Rating:           9
        },
        {
            Title:            "Your Mother Cries When You Pick Up the Phone",
            Author:           "Therapist, Snarky",
            Genre:            "Drama",
            PublicationYear:  2018,
            NumberOfPages:    500,
            Rating:           5
        },
        {
            Title:            "How to Hook Up at a Funeral Without Getting Haunted",
            Author:           "Horny, Desperate",
            Genre:            "Romance",
            PublicationYear:  2023,
            NumberOfPages:    160,
            Rating:           8
        },
        {
            Title:            "The Secret Diary of Your Left Butt Cheek",
            Author:           "Cheeky, Bottom",
            Genre:            "Fantasy",
            PublicationYear:  2021,
            NumberOfPages:    95,
            Rating:           4
        },
        {
            Title:            "That’s Not Mud: A Backwoods Hiking Guide",
            Author:           "Squirts, Liquid",
            Genre:            "Self-Help",
            PublicationYear:  2019,
            NumberOfPages:    210,
            Rating:           6
        },
        {
            Title:            "100 Ways to Convince Your Boss You Died",
            Author:           "Gasser, Seymour",
            Genre:            "Comedy",
            PublicationYear:  2026,
            NumberOfPages:    145,
            Rating:           9
        },
        {
            Title:            "The Clitoris: Fact or Liberal Myth?",
            Author:           "Incelson, Chad",
            Genre:            "Mystery",
            PublicationYear:  2022,
            NumberOfPages:    45,
            Rating:           2
        },
        {
            Title:            "Whispering to Waffle House Waitresses at 4 AM",
            Author:           "Tweaker, Timmy",
            Genre:            "Biography",
            PublicationYear:  2024,
            NumberOfPages:    320,
            Rating:           7
        },
        {
            Title:            "The Haunting of the Haunted Dildo",
            Author:           "Spooky, Spank",
            Genre:            "Fantasy",
            PublicationYear:  2017,
            NumberOfPages:    280,
            Rating:           8
        },
        {
            Title:            "I Married a Wet Sack of Potatoes",
            Author:           "Disappointed, Brenda",
            Genre:            "Drama",
            PublicationYear:  2013,
            NumberOfPages:    412,
            Rating:           6
        },
        {
            Title:            "How to Start a Cult for Lazy People",
            Author:           "Guru, Couch",
            Genre:            "Self-Help",
            PublicationYear:  2021,
            NumberOfPages:    130,
            Rating:           9
        },
        {
            Title:            "The Smell of Your Roommate’s Feet: A Toxicological Study",
            Author:           "Scratcher, Harry",
            Genre:            "Sci-Fi",
            PublicationYear:  2025,
            NumberOfPages:    600,
            Rating:           3
        },
        {
            Title:            "Sucking at Life but Dominating the Taco Bell Drive-Thru",
            Author:           "Depressed, Dave",
            Genre:            "Biography",
            PublicationYear:  2020,
            NumberOfPages:    185,
            Rating:           8
        },
        {
            Title:            "Why Men Have Nipples: A Disappointed Woman's Perspective",
            Author:           "Disappointed, Brenda",
            Genre:            "Comedy",
            PublicationYear:  2016,
            NumberOfPages:    210,
            Rating:           7
        },
        {
            Title:            "The Mechanics of the High-Velocity Sneeze-Shart",
            Author:           "Squirts, Liquid",
            Genre:            "Sci-Fi",
            PublicationYear:  2023,
            NumberOfPages:    333,
            Rating:           9
        },
        {
            Title:            "Dating While Smelling Like Onions and Regret",
            Author:           "Horny, Desperate",
            Genre:            "Romance",
            PublicationYear:  2024,
            NumberOfPages:    240,
            Rating:           5
        },
        {
            Title:            "How to Fake a Heart Attack When the Check Comes",
            Author:           "Grifter, Gary",
            Genre:            "Self-Help",
            PublicationYear:  2018,
            NumberOfPages:    92,
            Rating:           8
        },
        {
            Title:            "God is Dead and We Killed Him with TikTok Trends",
            Author:           "Satan, Lou",
            Genre:            "Drama",
            PublicationYear:  2025,
            NumberOfPages:    400,
            Rating:           6
        },
        {
            Title:            "The Fine Art of Mansplaining Basic Biology to Your Gynecologist",
            Author:           "Incelson, Chad",
            Genre:            "Comedy",
            PublicationYear:  2021,
            NumberOfPages:    115,
            Rating:           2
        },
        {
            Title:            "Ghosthunting in Your Ex’s DMs",
            Author:           "Psycho, Tiffany",
            Genre:            "Mystery",
            PublicationYear:  2023,
            NumberOfPages:    310,
            Rating:           7
        },
        {
            Title:            "Licking the Toad: A Weekend in the Desert with Your Dead Grandpa",
            Author:           "Tweaker, Timmy",
            Genre:            "Fantasy",
            PublicationYear:  2022,
            NumberOfPages:    260,
            Rating:           8
        },
        {
            Title:            "The Existential Dread of Realizing You Left the Oven On",
            Author:           "Depressed, Dave",
            Genre:            "Drama",
            PublicationYear:  2019,
            NumberOfPages:    140,
            Rating:           5
        },
        {
            Title:            "Smuggling Ferrets in Your Trousers: A Practical Guide",
            Author:           "Stiff, Woody",
            Genre:            "Self-Help",
            PublicationYear:  2015,
            NumberOfPages:    205,
            Rating:           6
        },
        {
            Title:            "Why Does the Cat Look at Me Like He Knows My Search History?",
            Author:           "Hoarder, Eleanor",
            Genre:            "Mystery",
            PublicationYear:  2024,
            NumberOfPages:    177,
            Rating:           8
        },
        {
            Title:            "The Day My Left Nut Resigned",
            Author:           "Scratcher, Harry",
            Genre:            "Comedy",
            PublicationYear:  2026,
            NumberOfPages:    130,
            Rating:           9
        },
        {
            Title:            "Necromancy for Beginners: Bringing Back Your Motivation to Work",
            Author:           "Guru, Couch",
            Genre:            "Fantasy",
            PublicationYear:  2021,
            NumberOfPages:    299,
            Rating:           7
        },
        {
            Title:            "How to Weaponize Niceness and Destroy Your Enemies",
            Author:           "Lactate, Karen",
            Genre:            "Self-Help",
            PublicationYear:  2020,
            NumberOfPages:    250,
            Rating:           9
        },
        {
            Title:            "The Kama Sutra for Lazy People (Just Lie There)",
            Author:           "Guru, Couch",
            Genre:            "Romance",
            PublicationYear:  2018,
            NumberOfPages:    75,
            Rating:           8
        },
        {
            Title:            "If You Can't Handle Me at My Worst, I Will Kill You in Your Sleep",
            Author:           "Psycho, Tiffany",
            Genre:            "Drama",
            PublicationYear:  2025,
            NumberOfPages:    380,
            Rating:           6
        },
        {
            Title:            "Drowning in the Kiddie Pool: A Mid-Life Crisis",
            Author:           "Depressed, Dave",
            Genre:            "Biography",
            PublicationYear:  2022,
            NumberOfPages:    420,
            Rating:           4
        },
        {
            Title:            "Your Baby is Ugly: Embracing Brutal Honesty",
            Author:           "Therapist, Snarky",
            Genre:            "Self-Help",
            PublicationYear:  2023,
            NumberOfPages:    165,
            Rating:           9
        },
        {
            Title:            "The Bible 2: The Wrath of Jesus",
            Author:           "Satan, Lou",
            Genre:            "Sci-Fi",
            PublicationYear:  2026,
            NumberOfPages:    800,
            Rating:           7
        },
        {
            Title:            "Finding God in a Port-a-Potty at Coachella",
            Author:           "Tweaker, Timmy",
            Genre:            "Biography",
            PublicationYear:  2019,
            NumberOfPages:    215,
            Rating:           8
        }
    ]
}

/**
 * Prints the total number of books in the list.
 * @param {Array} books - The list of books to count.
 */
function bookCount(books){
    console.log(`${books.length}`)
}

/**
 * Calculates and prints the average rating of all books.
 * @param {Array} books - The list of books to analyze.
 */
function getAverageRating(books){
    let total = 0;

    books.forEach(function(book) {
        total += book.Rating;
    })

    console.log(`The average book rating is: ${(total/books.length).toFixed(2)}`)
}

/**
 * Calculates and prints the average page count of all books.
 * @param {Array} books - The list of books to analyze.
 */
function getAveragePageCount(books){
    let total = 0;

    books.forEach(function(book) {
        total += book.NumberOfPages;
    })

    console.log(`The Average Page Count is ${(total/books.length).toFixed(2)}`);
}

/**
 * Finds and prints the highest-rated book(s).
 * If multiple books tie for the top spot, it prints all of them.
 * @param {Array} books - The list of books to check.
 */
function getHighestRatedBook(books){
    let bookArray = [];
    let highest = 0;

    books.forEach(function (book) {
        if (book.Rating > highest){
            highest = book.Rating;
            bookArray = [];
            bookArray.push(book);
        }
        else if (book.Rating === highest){
            bookArray.push(book);
        }
    })

    bookArray.forEach(function (book){
        console.log(`${book.Title} by ${book.Author} with a rating of: ${book.Rating}`);
    })
}

/**
 * Finds and prints the book(s) with the most pages.
 * If multiple books tie for the longest, it prints all of them.
 * @param {Array} books - The list of books to check.
 */
function getLongestBook(books){
    console.log("The longest book(s) are:")
    let longest = 0;
    let bookList = [];

    books.forEach(function (book){
        if(book.NumberOfPages > longest){
            longest = book.NumberOfPages;
            bookList = [];
            bookList.push(book);
        }
        else if (book.NumberOfPages === longest){
            bookList.push(book);
        }
    })

    bookList.forEach(function (book){
        console.log(`"${book.Title}" by ${book.Author}`)
    })
}

/**
 * Filters and prints books published after a specific year.
 * @param {Array} books - The list of books to search through.
 * @param {number} year - The cutoff year (books must be newer than this year).
 */
function getRecentBooks(books, year){
    console.log(`Books published after ${year}`);
    books.forEach(function (book){
        if (book.PublicationYear > year){
            console.log(`${book.Title} by ${book.Author} (${book.PublicationYear})`);
        }
    })
}

/**
 * Sorts and displays books from highest rating to lowest rating.
 * If ratings are equal, books are sorted alphabetically by title.
 * @param {Array} books - The list of books to sort.
 */
function sortBookRankings(books){
    console.log("Books sorted by rating from highest to lowest and then Title A-Z: ")

    const sortedBooks = [...books].sort((a,b) => {
        if (a.Rating < b.Rating) return 1;
        if (a.Rating > b.Rating) return -1;

        if (a.Title < b.Title) return -1;
        if (a.Title > b.Title) return 1;

        return 0;
    })

    sortedBooks.forEach(function (book) {
        console.log(`${book.Title} by ${book.Author} (Rating: ${book.Rating})`)
    })
}

/**
 * Counts how many books belong to each genre and displays the totals.
 * @param {Array} books - The list of books to group by genre.
 */
function genreBreakdown(books){
    let countObj = {};

    books.forEach(function (book) {
        let genre = book.Genre;

        if(countObj[genre] === undefined) {
            countObj[genre] = 1;
        } else {
            countObj[genre] = countObj[genre] + 1;
        }
    })

    console.log(countObj);
}

/**
 * Gathers and prints a list of all unique authors in the catalog.
 * Each author is listed only once.
 * @param {Array} books - The list of books to scan for authors.
 */
function authorReport(books){
    let authors = [];

    books.forEach(function (book) {
        if (!authors.includes(book.Author)) {
            authors.push(book.Author);
        }
    })

    authors.forEach(function (author) {
        console.log(author);
    })
}

/**
 * The main starting point of the script.
 * Loads the books and triggers all reports to print to the console.
 */
function main(){
    const books = getBooks();

    console.log("Display the total number of books.");
    bookCount(books);

    console.log("\nDisplay the average rating of all books");
    getAverageRating(books);

    console.log("\nDisplay the average number of pages.")
    getAveragePageCount(books);

    console.log("\nDisplay the highest rated book");
    getHighestRatedBook(books);

    console.log("\nDisplay the book with the greatest number of pages");
    getLongestBook(books);

    console.log("\nDisplay all books published after 2010");
    getRecentBooks(books, 2010);

    console.log("\nDisplay books sorted by rating from highest to lowest");
    sortBookRankings(books);

    console.log("\nDisplay the number of books in each genre.");
    genreBreakdown(books);

    console.log("\nDisplay all unique authors represented in the catalog");
    authorReport(books);
}

main();