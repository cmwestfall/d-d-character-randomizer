levelDropdown = document.getElementById('dropdown');

// list of available classes
let classList = ['barbarian', 'bard', 'cleric', 'druid', 'fighter',
                'monk', 'paladin', 'ranger', 'rogue', 'sorcerer',
                'warlock', 'wizard', 'artificer'
]

// create the level dropdown menu
for (let i=1; i<=20; i++) {
    let levelOption = document.createElement('option');
    levelOption.innerHTML = `${i}`
    levelDropdown.appendChild(levelOption);
}

// random chosen class
let randomClassIndex = Math.floor(Math.random() * classList.length)
let randomClass = classList[randomClassIndex];
console.log(randomClass);

// random chosen level