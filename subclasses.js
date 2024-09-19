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
