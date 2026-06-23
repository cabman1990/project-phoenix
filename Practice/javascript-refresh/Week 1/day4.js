
function countCharacters(characters){
    return characters.length;
}

function averageLevel(characters){
    let levelTotal = 0;

    characters.forEach(function (player) {
        levelTotal += player.level;
    })

    return levelTotal/countCharacters(characters);
}

function highestLevel(characters){
    let highestLevel = 0;
    let indexNumber = 0;

    characters.forEach(function callback(player, index){
        if(player.level > highestLevel){
            highestLevel = player.level;
            indexNumber = index;
        }
    })
    return characters[indexNumber].name;
}

function lowestHP(characters){
    let lowestHP = characters[0].HP;
    let indexNumber = 0;

    characters.forEach(function callback(player, index) {
        if(player.HP < lowestHP){
            lowestHP = player.HP;
            indexNumber = index;
        }
    })

    return characters[indexNumber].name;
}

function listNames(characters){
    console.log("\nAll the characters in this realm are:\n");
    characters.forEach(function (player){
         console.log(player.name);
    })
}
function main(){
    const players = [
        {
            name:   "Cass",
            class:  "Human",
            level:  35,
            HP:     25
        },
        {
            name:   "Zellie",
            class:  "Canine",
            level:  10,
            HP:     50
        },
        {
            name:   "Peanut",
            class:  "Canine",
            level:  3,
            HP:     75
        },
        {
            name:   "Garrick",
            class:  "Warrior",
            level:  42,
            HP:     120
        },
        {
            name:   "Lyra",
            class:  "Mage",
            level:  28,
            HP:     45
        },
        {
            name:   "Finn",
            class:  "Archer",
            level:  15,
            HP:     60
        },
        {
            name:   "Sly",
            class:  "Rogue",
            level:  50,
            HP:     85
        },
        {
            name:   "Valerie",
            class:  "Paladin",
            level:  38,
            HP:     140
        },
        {
            name:   "Elora",
            class:  "Cleric",
            level:  22,
            HP:     70
        },
        {
            name:   "Thorgar",
            class:  "Barbarian",
            level:  45,
            HP:     165
        },
        {
            name:   "Buster",
            class:  "Canine",
            level:  12,
            HP:     55
        },
        {
            name:   "Elena",
            class:  "Human",
            level:  1,
            HP:     10
        },
        {
            name:   "Rex",
            class:  "Canine",
            level:  25,
            HP:     90
        },
        {
            name:   "Kaelen",
            class:  "Mage",
            level:  60,
            HP:     110
        },
        {
            name:   "Shadow",
            class:  "Rogue",
            level:  18,
            HP:     48
        }
    ];

    console.log(`The number of characters are: ${countCharacters(players)}`);
    console.log(`The average character level is: ${averageLevel(players).toFixed(2)}`);
    console.log(`The character with the highest level is: ${highestLevel(players)}`);
    console.log(`The character with the lowest HP level is: ${lowestHP(players)}`);
    listNames(players);

}

main();