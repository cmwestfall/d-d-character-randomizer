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

// select the value for the level max
const selectMaxLevel = () => {
    console.log(levelDropdown.value);
}

