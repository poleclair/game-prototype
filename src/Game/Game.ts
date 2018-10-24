/// <reference path="./Class/Character.ts"/>

/// <reference path="../Engine/Engine.ts"/>
/// <reference path="../Engine/Animator.ts"/>
/// <reference path="../Engine/Tile.ts"/>
/// <reference path="../Engine/Tileset.ts"/>

/// <reference path="./Enum/AbilityEnum.ts"/>
/// <reference path="./Enum/AttackRollResultEnum.ts"/>
/// <reference path="./Enum/ClassEnum.ts"/>
/// <reference path="./Enum/RaceEnum.ts"/>
/// <reference path="./Enum/SkillEnum.ts"/>

/// <reference path="./Converter.ts"/>
/// <reference path="./Data.ts"/>
/// <reference path="./Class/Die.ts"/>
/// <reference path="./Logger.ts"/>
/// <reference path="./Ruleset.ts"/>

// tileset
let tileset: Engine.Tileset = new Engine.Tileset("./src/Engine/Sprite/tileset.png", 32, 32);

// engine
let engine: Engine.Engine = new Engine.Engine("game", 1024, 768);

// layer
let layer: Engine.Layer = new Engine.Layer("ui", 0, 0, 1, 1024, 768, false, tileset);

for (let x: number = 0; x < layer.widthInTile; x++) {
    for (let y: number = 0; y < layer.heightInTile; y++) {
        layer.tiles[x][y] = new Engine.Tile(14, 14, 1);
    }
}

engine.layers.push(layer);

engine.start();

let line: Engine.Coordinate[] = Engine.Engine.line(1, 1, 5, 3);

line.forEach(coordinate => {
    layer.tiles[coordinate.x][coordinate.y] = new Engine.Tile(13, 13, 1);
});

let circle: Engine.Coordinate[] = Engine.Engine.circle(10, 10, 3, true);

circle.forEach(coordinate => {
    layer.tiles[coordinate.x][coordinate.y] = new Engine.Tile(13, 13, 1);
});

let rectangle: Engine.Coordinate[] = Engine.Engine.rectangle(1, 10, 4, 15, true);

rectangle.forEach(coordinate => {
    layer.tiles[coordinate.x][coordinate.y] = new Engine.Tile(13, 13, 1);
});

// setInterval(function (): void {
//     layer.animator.addCircleFadeOut(0, 0, 10, 2);
//     layer.animator.addCircleFadeOut(32, 0, 10, 2);
//     layer.animator.addCircleFadeOut(0, 24, 10, 2);
//     layer.animator.addCircleFadeOut(32, 24, 10, 2);
//     layer.animator.addCircleFadeOut(16, 12, 10, 2);
// }, 1000);

/*
-- CRITICAL (d20Roll == 20) => (weaponDamageRoll + weaponDamageRoll + abilityModifier)

-- MISS (d20Roll == 1) => 0

-- HIT (d20Roll + abilityModifier + (isWeaponProficient ? proficiencyBonus : 0)) >= enemyAC) => (weaponDamageRoll + abilityModifier)

-- ADVANTAGE (d20Roll || d20Roll) => highest

-- DISADVANTAGE (d20Roll || d20Roll) => lowest

-- RANGE => [20, 40] = 0-5 && 20-40 = DISADVANTAGE

-- BASE DAMAGE => 1d4 [20, 40]
*/

let abilityScores1: Array<number> = [16, 14, 14, 10, 14, 11];
let skillProficiencies1: Array<SkillEnum> = [SkillEnum.ANIMAL_HANDLING, SkillEnum.ATHLETICS, SkillEnum.PERCEPTION, SkillEnum.SURVIVAL];
let human: Character = new Character("Human", 1, RaceEnum.HUMAN, ClassEnum.FIGHTER, abilityScores1, skillProficiencies1);

human.addItem(items.WEAPON_CLUB);
human.addItem(items.ARMOR_LEATHER);
human.equipItem(items.WEAPON_CLUB);
human.equipItem(items.ARMOR_LEATHER);

let abilityScores2: Array<number> = [16, 14, 14, 10, 14, 11];
let skillProficiencies2: Array<SkillEnum> = [SkillEnum.ANIMAL_HANDLING, SkillEnum.ATHLETICS, SkillEnum.PERCEPTION, SkillEnum.SURVIVAL];
let orc: Character = new Character("Orc", 1, RaceEnum.HUMAN, ClassEnum.FIGHTER, abilityScores2, skillProficiencies2);

orc.addItem(items.WEAPON_CLUB);
orc.addItem(items.ARMOR_PADDED);
orc.equipItem(items.WEAPON_CLUB);
orc.equipItem(items.ARMOR_PADDED);

let humanInitiativeRoll: number = Die.RollD(20) + human.initiative;
console.log("Human Initiative Roll: " + humanInitiativeRoll);
let orcInitiativeRoll: number = Die.RollD(20) + orc.initiative;
console.log("Orc Initiative Roll: " + orcInitiativeRoll);

console.log("");

let roundQueue: Array<Character> = Array<Character>();

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
    let acting: Character = roundQueue.shift();
    roundQueue.push(acting);
    let target: Character = roundQueue[0];

    let d20Roll: number = Die.RollD(20);
    let damages: Array<number> = Array<number>();

    let attackRollResult: number = Ruleset.AttackRollResult(d20Roll, acting.getAttackModifier(), target.getArmorClass());

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

    Logger.AttackDamage(
        acting.name, attackRollResult, d20Roll, acting.getAttackModifier(), target.getArmorClass(), damages, acting.weapon.damageTypeId);

    console.log("");

    target.currentHitPoint -= damages.reduce((a, b) => a + b, 0);

    Logger.HitPoints(human.name, human.currentHitPoint, human.maximumHitPoint);
    Logger.HitPoints(orc.name, orc.currentHitPoint, orc.maximumHitPoint);

    console.log("");
}