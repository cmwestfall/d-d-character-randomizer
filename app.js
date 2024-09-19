// First Section with Level Chooser and Randomizer
const levelDropdown = document.getElementById('dropdown');
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
                                            <span class='character-class' id='${randomClass}'>${randomClass}</span>
                                            <span id='lvl${randomLevel}' class='class-level'>Lvl ${randomLevel}</span>
                                          </div>`;
                classInfo.appendChild(newContainer);
                
                maxLevel = maxLevel - randomLevel;
            } else {
                break;
            }
        }
    }

    const levels = document.querySelectorAll('.class-level')

    levels.forEach((level) => {
        if (level.id.slice(3) >= 3) {
            let subclassDropdownContainer = document.createElement('div.subclass-dropdown-container');
            subclassDropdownContainer.innerHTML = `<select>
                                                        <option>Subclasses</option>
                                                    </select>`
                                                
            level.parentElement.parentElement.appendChild(subclassDropdownContainer);
        }
    })
})


