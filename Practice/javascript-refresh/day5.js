/**
 *      Assignment: Day 5 - Character Manager v2
 *
 *      Objective
 *              The purpose of this assignment is to strengthen your understanding of
 *              arrays, objects, functions, filtering, aggregation, and data analysis.
 *              will extend the Character Manager application developed in Day 4.
 *
 *      Requirements
 *              Using the character collection from Day 4, implement the following reports:
 *
 *                  High-Level Characters
 *                      Display all characters with a level greater than 10.
 *                  Low HP Characters
 *                      Display all characters with HP less than 50.
 *                  Character Rankings
 *                      Display characters ordered by level from highest to lowest.
 *                  Total HP
 *                      Calculate and display the total HP of all characters.
 *                  Average HP
 *                      Calculate and display the average HP of all characters.
 *                  Class Breakdown
 *                      Display the number of characters belonging to each class.
 */

/*
       Displays to the user, instead of having to call "console.log(...)" every time
 */
function displayLog(string) {
    console.log(string);
}

/*
        Gets characters
 */
function getCharacters() {
    return [
        {
            name: "Cass",
            class: "Human",
            level: 35,
            HP: 25
        },
        {
            name: "Zellie",
            class: "Canine",
            level: 10,
            HP: 50
        },
        {
            name: "Peanut",
            class: "Canine",
            level: 3,
            HP: 75
        },
        {
            name: "Garrick",
            class: "Warrior",
            level: 42,
            HP: 120
        },
        {
            name: "Lyra",
            class: "Mage",
            level: 28,
            HP: 45
        },
        {
            name: "Finn",
            class: "Archer",
            level: 15,
            HP: 60
        },
        {
            name: "Sly",
            class: "Rogue",
            level: 50,
            HP: 85
        },
        {
            name: "Valerie",
            class: "Paladin",
            level: 38,
            HP: 140
        },
        {
            name: "Elora",
            class: "Cleric",
            level: 22,
            HP: 70
        },
        {
            name: "Thorgar",
            class: "Barbarian",
            level: 45,
            HP: 165
        },
        {
            name: "Buster",
            class: "Canine",
            level: 12,
            HP: 55
        },
        {
            name: "Elena",
            class: "Human",
            level: 1,
            HP: 10
        },
        {
            name: "Rex",
            class: "Canine",
            level: 25,
            HP: 90
        },
        {
            name: "Kaelen",
            class: "Mage",
            level: 60,
            HP: 110
        },
        {
            name: "Shadow",
            class: "Rogue",
            level: 18,
            HP: 48
        }
    ];
}

/*
        Gets any character level over defined levelRequirement
 */
function gethighLevel(levelRequirement, characters) {
    displayLog(`High-Level Characters Over Level ${levelRequirement}:`)

    characters.forEach(function (character) {
        if (character.level > levelRequirement) {
            displayLog(`${character.name}: (Level ${character.level})`);
        }
    })

    displayLog("\n");
}

/*
    Gets user under hpRequirement
 */
function getlowHP(hpRequirement, characters) {
    displayLog(`Low HP Characters under HP Level ${hpRequirement}:`)

    characters.forEach(function (character) {
        if (character.HP < hpRequirement) {
            displayLog(`${character.name}:\t (HP: ${character.HP})`);
        }
    })

}

function totalHP(characters, display) {
    let total = 0;

    characters.forEach(function (character) {
        total += character.HP;
    })

    if (display) {
        displayLog(`\nTotal HP of all characters is: ${total}`);
    } else {
        return total;
    }
}

function averageHP(characters) {
    displayLog(`\nThe Average HP of all characters is: ${(totalHP(characters, false) / characters.length).toFixed(2)}`)
}

function getclassCount(characters){
    displayLog("\nClass Breakdown");

    let classList = [];

    characters.forEach(function (character){
        if(!classList.includes(character.class)){
            classList.push(character.class);
        }
    })

    classList.forEach(function (className){
        let filteredCharacter = characters.filter( character=> character.class === className).length;

        displayLog(`${className}:  ${filteredCharacter}`);
    })

}

function sortLevel(characters){
    let swapped;
    do {
        swapped = false;

        for(let counter = 0; counter < characters.length - 1; counter++){
            if(characters[counter].level < characters[counter+1].level){
                let temp = characters[counter];
                characters[counter] = characters[counter+1];
                characters[counter+1] = temp
                swapped = true;
            }
        }

    } while (swapped);


    characters.forEach(function (character){
        displayLog(`${character.name} Level: ${character.level}`)
    })
}
function main() {
    const characters = getCharacters();

    gethighLevel(10, characters);
    getlowHP(50, characters);
    totalHP(characters, true);
    averageHP(characters);
    getclassCount(characters);
    displayLog("\n");
    sortLevel(characters);
}

main();