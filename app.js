// First Section with Level Chooser and Randomizer
const levelDropdown = document.getElementById('lvl-dropdown');
const classInfo = document.getElementById('class-info');
const chosenMaxLevel = document.getElementById('chosen-max')

let maxLevel = 1;

// list of available classes
let classList = ['barbarian', 'bard', 'cleric', 'druid', 'fighter',
                'monk', 'paladin', 'ranger', 'rogue', 'sorcerer',
                'warlock', 'wizard', 'artificer'
]

// create the level dropdown menu
for (let i=1; i<=20; i++) {
    let levelOption = document.createElement('option');
    levelOption.value = i;
    levelOption.innerHTML = `${i}`
    levelDropdown.appendChild(levelOption);
}

// random chosen class
const getRandomClass = () => {
    let randomClassIndex = Math.floor(Math.random() * classList.length)
    let randomClass = classList[randomClassIndex];

    let randomClassCapitalized = randomClass[0].toUpperCase() + randomClass.substring(1);
    return randomClassCapitalized;
}

// choose a random amount of levels for a class
const getRandomLevel = () => {
    let randomLevel = Math.floor((Math.random() * maxLevel) + 1);
    return randomLevel;
}

// select the value for the level max
levelDropdown.addEventListener('change', (e) => {
    chosenMaxLevel.innerHTML = `${e.target.value}`;
    maxLevel = maxLevel + parseInt(e.target.value) - 1;

    levelDropdown.disabled = true;
    usedClasses = [];

// gives levels and classes until all levels have been filled
    while (maxLevel > 0) {
        let randomLevel = getRandomLevel();
        let randomClass = getRandomClass();

// checks whether the random class is already used
        if (usedClasses.includes(randomClass)) {
            continue;
        } else {
            usedClasses.push(randomClass);

// adds the class/level combination as long as there are still levels to fill
            if (randomLevel <= maxLevel) {
                let newContainer = document.createElement('div');
                newContainer.innerHTML = `<div class='class-container'>
                                            <span>${randomClass}</span>
                                            <span id='lvl${randomLevel}' class='class-level'>Lvl ${randomLevel}</span>
                                          </div>`;
                classInfo.appendChild(newContainer);
                
                maxLevel = maxLevel - randomLevel;
            } else {
                break;
            }
        }

    }

    const classLevels = document.querySelectorAll('.class-level');

    classLevels.forEach((classLevel) => {
        if (classLevel.id.slice(3) >= 3) {
            let subclassDropdownContainer = document.createElement('div');
            subclassDropdownContainer.innerHTML = `<select>
                                                        <option>Subclass</option>
                                                   <select>`;

            classLevel.parentElement.parentElement.appendChild(subclassDropdownContainer);
        }
    })

// Subclass Dropdown Input

// List of subclasses per class
    const artificerSubclasses = ['Alchemist', 'Armorer', 'Artillerist', 'Battle Smith'];
    const barbarianSubclasses = ['Ancestral Guardian', 'Battlerager', 'Beast', 'Berserker',
                                 'Giant', 'Storm Herald', 'Totem Warrior', 'Wild Magic', 'Zealot'];
    const bardSubclasses = ['Creation', 'Eloquence', 'Glamour', 'Lore', 'Spirits',
                            'Swords', 'Valor', 'Whispers'];
    const clericSubclasses = ['Arcana', 'Death', 'Forge', 'Grave', 'Knowledge', 'Life', 'Light',
                              'Nature', 'Order', 'Peace', 'Tempest', 'Trickery', 'Twighlight', 'War'];
    const druidSubclasses = ['Dreams', 'Land', 'Moon', 'Shepherd', 'Spores', 'Stars', 'Wildfire'];
    const fighterSubclasses = ['Arcane Archer', 'Banneret', 'Battle Master', 'Cavalier', 'Echo Knight',
                               'Eldritch Knight', 'Psi Warrior', 'Rune Knight', 'Samurai'];
    const monkSubclasses = ['Mercy', 'Ascendant Dragon', 'Astral Self', 'Drunken Master', 'Four Elements',
                            'Kensei', 'Long Death', 'Open Hand', 'Shadow', 'Sun Soul'];
    const paladinSubclasses = ['Ancients', 'Conquest', 'Crown', 'Devotion', 'Glory', 'Redemption',
                               'Vengeance', 'Watchers', 'Oathbreaker'];
    const rangerSubclasses = ['Beast Master', 'Drakewarden', 'Fey Wanderer', 'Gloom Stalker', 'Horizon Walker',
                              'Hunter', 'Monster Slayer', 'Swarmkeeper'];
    const rogueSubclasses = ['Arcane Trickster', 'Assassin', 'Inquisitive', 'Mastermind', 'Phantom',
                             'Scout', 'Soulknife', 'Swashbuckler', 'Thief'];
    const sorcererSubclasses = ['Aberrant Mind', 'Clockwork Soul', 'Draconic Bloodline', 'Divine Soul',
                                'Lunar Sorcery', 'Shadow Magic', 'Storm Sorcery', 'Wild Magic'];
    const warlockSubclasses = ['Archfey', 'Celestial', 'Fathomless', 'Fiend', 'The Genie', 'Great Old One',
                               'Hexblade', 'Undead', 'Undying'];
    const wizardSubclasses = ['Abjuration', 'Bladesinging', 'Chronurgy', 'Conjuration', 'Divination', 'Enchantment',
                              'Evocation', 'Graviturgy', 'Illusion', 'Necromancy', 'Scribes', 'Transmutation', 'War Magic'];

// Subclass prefixes and suffixes
    const barbarianSum = (subclass) => {
        if (subclass === 'Wild Magic') {
            return 'Path of ' + subclass;
        } else {
            return 'Path of the ' + subclass;
        }
    }

    const bardSum = (subclass) => {
        return 'College of ' + subclass;
    }

    const clericSum = (subclass) => {
        return subclass + ' Domain';
    }

    const druidSum = (subclass) => {
        if (subclass === 'Dreams' || subclass === 'Spores' || subclass === 'Stars' || subclass === 'Wildfire') {
            return 'Circle of ' + subclass;
        } else {
            return 'Circle of the ' + subclass;
        }
    }

    const fighterSum = (subclass) => {
        return subclass;
    }
    
    const monkSum = (subclass) => {
        if (subclass === 'Mercy' || subclass === 'Shadow') {
            return 'Way of ' + subclass;
        } else {
            return 'Way of the ' + subclass;
        }
    }
    
    const paladinSum = (subclass) => {
        if (subclass === 'Ancients' || subclass === 'Crown' || subclass === 'Watchers') {
            return 'Oath of the ' + subclass;
        } else if (subclass === 'Oathbreaker') {
            return subclass;
        } else {
            return 'Oath of ' + subclass;
        }
    }

    const rangerSum = (subclass) => {
        if (subclass === 'Drakewarden' || subclass === 'Fey Wanderer' || subclass === 'Swarmkeeper') {
            return subclass;
        } else {
            return subclass + 'Conclave';
        }
    }

    const rogueSum = (subclass) => {
        return subclass;
    }

    const sorcererSum = (subclass) => {
        return subclass;
    }

    const warlockSum = (subclass) => {
        return subclass;
    }

    const wizardSum = (subclass) => {
        if (subclass === 'Scribes') {
            return 'Order of ' + subclass;
        } else {
            return 'School of ' + subclass;
        }
    }

// 
})


