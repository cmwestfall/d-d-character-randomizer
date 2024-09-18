levelDropdown = document.getElementById('dropdown');
classInfo = document.getElementById('class-info');
chosenMaxLevel = document.getElementById('chosen-max')

maxLevel = 0

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

// select Max Level for character
const selectMaxLevel = (selectedValue) => {
    const selectedMaxLevel = selectedValue.value;
    chosenMaxLevel.textContent = selectedMaxLevel;
}

const randomizeCharacter = () => {

    // random chosen class
    const getRandomClass = () => {
        let randomClassIndex = Math.floor(Math.random() * classList.length)
        let randomClass = classList[randomClassIndex];
        
        let randomClassCapitalized = randomClass[0].toUpperCase() + randomClass.substring(1);
        return randomClassCapitalized;
    }
    
    // random chosen level
    const getRandomLevel = (maxLevel) => {
        let levelCount = 0;

        if (levelCount <= maxLevel) {
            let randomLevel = Math.floor(Math.random() * maxLevel);
            return randomLevel;
        }
    }

    classInfo.innerHTML = `<p>Your class is ${getRandomClass()} at Level ${getRandomLevel(maxLevel)}<p>`;
}

randomizeCharacter();
