/// <reference path="Class/Character.ts"/>

/// <reference path="Engine/Engine.ts"/>

/// <reference path="Enum/AbilityEnum.ts"/>
/// <reference path="Enum/AttackRollResultEnum.ts"/>
/// <reference path="Enum/ClassEnum.ts"/>
/// <reference path="Enum/RaceEnum.ts"/>
/// <reference path="Enum/SkillEnum.ts"/>

/// <reference path="Converter.ts"/>
/// <reference path="Die.ts"/>
/// <reference path="Logger.ts"/>
/// <reference path="Ruleset.ts"/>

/*
-- CRITICAL (d20Roll == 20) => (weaponDamageRoll + weaponDamageRoll + abilityModifier)

-- MISS (d20Roll == 1) => 0

-- HIT (d20Roll + abilityModifier + (isWeaponProficient ? proficiencyBonus : 0)) >= enemyAC) => (weaponDamageRoll + abilityModifier)

-- ADVANTAGE (d20Roll || d20Roll) => highest

-- DISADVANTAGE (d20Roll || d20Roll) => lowest

-- RANGE => [20, 40] = 0~5 && 20~40 = DISADVANTAGE

-- BASE DAMAGE => 1d4 [20, 40]
*/

let engine = new Engine(40, 30);

engine.init();
engine.start();

let abilityScores1 = [16, 14, 14, 10, 14, 11];
let skillProficiencies1 = [SkillEnum.ANIMAL_HANDLING, SkillEnum.ATHLETICS, SkillEnum.PERCEPTION, SkillEnum.SURVIVAL];
let human = new Character("Human", 1, RaceEnum.HUMAN, ClassEnum.FIGHTER, abilityScores1, skillProficiencies1);

human.addItem(items.WEAPON_CLUB);
human.addItem(items.ARMOR_LEATHER);
human.equipItem(items.WEAPON_CLUB);
human.equipItem(items.ARMOR_LEATHER);

let abilityScores2 = [16, 14, 14, 10, 14, 11];
let skillProficiencies2 = [SkillEnum.ANIMAL_HANDLING, SkillEnum.ATHLETICS, SkillEnum.PERCEPTION, SkillEnum.SURVIVAL];
let orc = new Character("Orc", 1, RaceEnum.HUMAN, ClassEnum.FIGHTER, abilityScores2, skillProficiencies2);

orc.addItem(items.WEAPON_CLUB);
orc.addItem(items.ARMOR_PADDED);
orc.equipItem(items.WEAPON_CLUB);
orc.equipItem(items.ARMOR_PADDED);

let humanInitiativeRoll = Die.RollD(20) + human.initiative;
console.log("Human Initiative Roll: " + humanInitiativeRoll);
let orcInitiativeRoll = Die.RollD(20) + orc.initiative;
console.log("Orc Initiative Roll: " + orcInitiativeRoll);

console.log("");

let roundQueue = Array<Character>();

if (humanInitiativeRoll > orcInitiativeRoll) {
    console.log("Rounds Queue: Human, Orc");
    roundQueue.push(human);
    roundQueue.push(orc);
} else if (humanInitiativeRoll < orcInitiativeRoll) {
    console.log("Rounds Queue: Orc, Human");
    roundQueue.push(orc);
    roundQueue.push(human);
} else {
    console.log("Rounds Queue: Human, Orc");
    roundQueue.push(human);
    roundQueue.push(orc);
}

console.log("");

while (human.currentHitPoint > 0 && orc.currentHitPoint > 0) {
    let acting = roundQueue.shift();
    roundQueue.push(acting);
    let target = roundQueue[0];

    let d20Roll = Die.RollD(20);
    let damages = [];

    let attackRollResult = Ruleset.AttackRollResult(d20Roll, acting.getAttackModifier(), target.getArmorClass());

    switch (attackRollResult) {
        case AttackRollResultEnum.CRITICAL:
            damages.push(acting.rollDamage());
            damages.push(acting.rollDamage());
            damages.push(acting.getDamageModifier());
            break;
        case AttackRollResultEnum.HIT:
            damages.push(acting.rollDamage());
            damages.push(acting.getDamageModifier());
            break;
        case AttackRollResultEnum.MISS:
            break;
    }

    Logger.AttackDamage(acting.name, attackRollResult, d20Roll, acting.getAttackModifier(), target.getArmorClass(), damages, acting.weapon.damageTypeId);

    console.log("");

    target.currentHitPoint -= damages.reduce((a, b) => a + b, 0);

    Logger.HitPoints(human.name, human.currentHitPoint, human.maximumHitPoint);
    Logger.HitPoints(orc.name, orc.currentHitPoint, orc.maximumHitPoint);

    console.log("");
}