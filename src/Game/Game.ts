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

/**
 * 16:9
 * 1280x720
 */
let tileset: Engine.Tileset = new Engine.Tileset("./src/Engine/Sprite/tileset.png", 16, 16);
let engine: Engine.Engine = new Engine.Engine("game", 80 * tileset.tileWidth, 45 * tileset.tileHeight);

let uiLayer: Engine.Layer = new Engine.Layer(
    "ui", 0 * tileset.tileWidth, 0 * tileset.tileHeight, 1, 80 * tileset.tileWidth, 45 * tileset.tileHeight, false, tileset);
let mapLayer: Engine.Layer = new Engine.Layer(
    "map", 1 * tileset.tileWidth, 1 * tileset.tileHeight, 2, 60 * tileset.tileHeight, 43 * tileset.tileHeight, true, tileset);
let miniMapLayer: Engine.Layer = new Engine.Layer(
    "minimap", 62 * tileset.tileWidth, 1 * tileset.tileHeight, 2, 17 * tileset.tileHeight, 17 * tileset.tileHeight, true, tileset);

// ui layer
for (let i: number = 1; i < uiLayer.widthInTile - 1; i++) {
    uiLayer.tiles[i][0] = new Engine.Tile(4, 12, 1);
    uiLayer.tiles[i][uiLayer.heightInTile - 1] = new Engine.Tile(4, 12, 1);
}

for (let i: number = 62; i < uiLayer.widthInTile - 1; i++) {
    uiLayer.tiles[i][18] = new Engine.Tile(4, 12, 1);
}

for (let i: number = 1; i < uiLayer.heightInTile - 1; i++) {
    uiLayer.tiles[0][i] = new Engine.Tile(3, 11, 1);
    uiLayer.tiles[61][i] = new Engine.Tile(3, 11, 1);
    uiLayer.tiles[uiLayer.widthInTile - 1][i] = new Engine.Tile(3, 11, 1);
}

uiLayer.tiles[0][0] = new Engine.Tile(10, 13, 1);
uiLayer.tiles[uiLayer.widthInTile - 1][0] = new Engine.Tile(15, 11, 1);
uiLayer.tiles[0][uiLayer.heightInTile - 1] = new Engine.Tile(0, 12, 1);
uiLayer.tiles[uiLayer.widthInTile - 1][uiLayer.heightInTile - 1] = new Engine.Tile(9, 13, 1);
uiLayer.tiles[61][0] = new Engine.Tile(2, 12, 1);
uiLayer.tiles[61][uiLayer.heightInTile - 1] = new Engine.Tile(1, 12, 1);

uiLayer.tiles[61][18] = new Engine.Tile(3, 12, 1);
uiLayer.tiles[uiLayer.widthInTile - 1][18] = new Engine.Tile(4, 11, 1);

// map layer
let line: Array<Engine.Coordinate> = Engine.Engine.line(0, 0, 1, 11);

for (let i: number = 0; i < line.length; i++) {
    mapLayer.tiles[line[i].x][line[i].y] = new Engine.Tile(15, 15, 1);
}

let circle: Array<Engine.Coordinate> = Engine.Engine.circle(10, 10, 5, false);

for (let i: number = 0; i < circle.length; i++) {
    mapLayer.tiles[circle[i].x][circle[i].y] = new Engine.Tile(15, 15, 1);
}

let circleFilled: Array<Engine.Coordinate> = Engine.Engine.circle(20, 20, 4, true);

for (let i: number = 0; i < circleFilled.length; i++) {
    mapLayer.tiles[circleFilled[i].x][circleFilled[i].y] = new Engine.Tile(15, 15, 1);
}

let square: Array<Engine.Coordinate> = Engine.Engine.square(10, 10, 2, false);

for (let i: number = 0; i < square.length; i++) {
    mapLayer.tiles[square[i].x][square[i].y] = new Engine.Tile(15, 15, 1);
}

let squareFilled: Array<Engine.Coordinate> = Engine.Engine.square(20, 20, 2, true);

for (let i: number = 0; i < squareFilled.length; i++) {
    mapLayer.tiles[squareFilled[i].x][squareFilled[i].y] = new Engine.Tile(15, 15, 1);
}

engine.layers.push(uiLayer);
engine.layers.push(mapLayer);
engine.layers.push(miniMapLayer);

engine.start();

setInterval(function (): void {
    mapLayer.animator.addCircleFadeOut(0, 0, 10, 2);
    mapLayer.animator.addCircleFadeOut(43, 0, 10, 2);
    mapLayer.animator.addCircleFadeOut(0, 33, 10, 2);
    mapLayer.animator.addCircleFadeOut(43, 33, 10, 2);
    mapLayer.animator.addCircleFadeOut(21, 16, 10, 2);
    mapLayer.animator.addProjectileTest(13, 10, 13, 20, Engine.Animator.VERY_SLOW);
    mapLayer.animator.addProjectileTest(14, 10, 14, 20, Engine.Animator.SLOW);
    mapLayer.animator.addProjectileTest(15, 10, 15, 20, Engine.Animator.NORMAL);
    mapLayer.animator.addProjectileTest(16, 10, 16, 20, Engine.Animator.FAST);
    mapLayer.animator.addProjectileTest(17, 10, 17, 20, Engine.Animator.VERY_FAST);
}, 1000);

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