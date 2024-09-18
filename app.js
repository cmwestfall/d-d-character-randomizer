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
    
    classInfo.innerHTML = `Your class is ${getRandomClass()} at Level ${getRandomLevel()}`;
})


