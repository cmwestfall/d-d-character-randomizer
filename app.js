levelDropdown = document.getElementById('dropdown');
classInfo = document.getElementById('class-info');
chosenMaxLevel = document.getElementById('chosen-max')

let levelCount = 0;

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
    const maxLevel = selectedValue.value;
    chosenMaxLevel.textContent = maxLevel;
}

const radomizeCharacter = () => {

    // random chosen class
    const getRandomClass = () => {
        let randomClassIndex = Math.floor(Math.random() * classList.length)
        let randomClass = classList[randomClassIndex];
        
        let randomClassCapitalized = randomClass[0].toUpperCase() + randomClass.substring(1);
        return randomClassCapitalized;
    }
    
    // random chosen level
    const getRandomLevel = (maxLevel) => {
        if (levelCount <= maxLevel) {
            let randomLevel = Math.floor(Math.random() * maxLevel);
            console.log(randomLevel);
        }
    }

    classInfo.innerHTML = `Your class is ${getRandomClass()} at Level`;
}

