/// <reference path="Class/Character.ts"/>

/// <reference path="Enum/AbilityEnum.ts"/>
/// <reference path="Enum/ClassEnum.ts"/>
/// <reference path="Enum/Converter.ts"/>
/// <reference path="Enum/RaceEnum.ts"/>
/// <reference path="Enum/SkillEnum.ts"/>

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

let humanInitiativeRoll = Ruleset.RollD(20) + human.initiative;
console.log("Human Initiative Roll: " + humanInitiativeRoll);
let orcInitiativeRoll = Ruleset.RollD(20) + orc.initiative;
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

    let d20Roll = Ruleset.RollD(20);
    let damage = 0;
    let damage1 = 0;
    let damage2 = 0;

    if (d20Roll === 20) {
        damage += damage1 = acting.getDamageRoll();
        damage += damage2 = acting.getDamageRoll();
        damage += acting.getDamageModifier();
        console.log(acting.name + " critical hits [Roll:" + d20Roll + " + Mod:" + acting.getAttackModifier() + " vs AC:" + target.getArmorClass() + "] for " + damage + " [] " + Converter.DamageTypeEnum(acting.weapon.damageTypeId) + " damage");
    } else if ((d20Roll + acting.getAttackModifier()) >= target.getArmorClass()) {
        damage += damage1 = acting.getDamageRoll();
        damage += acting.getDamageModifier();
        console.log(acting.name + " hits [Roll:" + d20Roll + " + Mod:" + acting.getAttackModifier() + " vs AC:" + target.getArmorClass() + "] for " + damage + " [] " + Converter.DamageTypeEnum(acting.weapon.damageTypeId) + " damage");
    } else {
        console.log(acting.name + " misses [Roll:" + d20Roll + " + Mod:" + acting.getAttackModifier() + " vs AC:" + target.getArmorClass() + "]");
    }

    console.log("");

    target.currentHitPoint -= damage;

    console.log("Human Hit Point: " + human.currentHitPoint + "/" + human.maximumHitPoint);
    console.log("Orc Hit Point: " + orc.currentHitPoint + "/" + orc.maximumHitPoint);

    console.log("");
}