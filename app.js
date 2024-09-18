levelDropdown = document.getElementById('dropdown');

// create the level dropdown menu
for (let i=1; i<=20; i++) {
    let levelOption = document.createElement('option');
    levelOption.innerHTML = `${i}`
    levelDropdown.appendChild(levelOption);
}