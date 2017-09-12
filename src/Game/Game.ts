/// <reference path="../Class/Character.ts"/>

/// <reference path="../Engine/Engine.ts"/>
/// <reference path="../Engine/Tileset/Tileset.ts"/>

/// <reference path="../Enum/AbilityEnum.ts"/>
/// <reference path="../Enum/AttackRollResultEnum.ts"/>
/// <reference path="../Enum/ClassEnum.ts"/>
/// <reference path="../Enum/RaceEnum.ts"/>
/// <reference path="../Enum/SkillEnum.ts"/>

/// <reference path="../Converter.ts"/>
/// <reference path="../Die.ts"/>
/// <reference path="../Logger.ts"/>
/// <reference path="../Ruleset.ts"/>

let tileset = new Tileset('./src/Engine/Tileset/Sprite/tileset.png', 16, 16);
let engine = new Engine('game', 64 * tileset.tileWidth, 36 * tileset.tileHeight);
let uiLayer = new Layer('ui', 0 * tileset.tileWidth, 0 * tileset.tileHeight, 1, 64 * tileset.tileWidth, 36 * tileset.tileHeight, tileset);
let mapLayer = new Layer('map', 1 * tileset.tileWidth, 1 * tileset.tileHeight, 2, 44 * tileset.tileHeight, 34 * tileset.tileHeight, tileset);

// ui layer
for (let i = 1; i < uiLayer.widthInTile - 1; i++) {
    uiLayer.tiles[i][0] = new Tile(4, 12, 1);
    uiLayer.tiles[i][uiLayer.heightInTile - 1] = new Tile(4, 12, 1);
}

for (let i = 1; i < uiLayer.heightInTile - 1; i++) {
    uiLayer.tiles[0][i] = new Tile(3, 11, 1);
    uiLayer.tiles[45][i] = new Tile(3, 11, 1);
    uiLayer.tiles[uiLayer.widthInTile - 1][i] = new Tile(3, 11, 1);
}

uiLayer.tiles[0][0] = new Tile(10, 13, 1);
uiLayer.tiles[uiLayer.widthInTile - 1][0] = new Tile(15, 11, 1);
uiLayer.tiles[0][uiLayer.heightInTile - 1] = new Tile(0, 12, 1);
uiLayer.tiles[uiLayer.widthInTile - 1][uiLayer.heightInTile - 1] = new Tile(9, 13, 1);
uiLayer.tiles[45][0] = new Tile(2, 12, 1);
uiLayer.tiles[45][uiLayer.heightInTile - 1] = new Tile(1, 12, 1);

// map layer


engine.layers.push(uiLayer);
engine.layers.push(mapLayer);

engine.init(function () {
    engine.start();

    setInterval(function () {
        mapLayer.animator.addCircleFadeOut(0, 0, 10, 2);
        mapLayer.animator.addCircleFadeOut(43, 0, 10, 2);
        mapLayer.animator.addCircleFadeOut(0, 33, 10, 2);
        mapLayer.animator.addCircleFadeOut(43, 33, 10, 2);
        mapLayer.animator.addProjectile(0, 0, 43, 0);
        mapLayer.animator.addProjectile(0, 1, 43, 1);
        mapLayer.animator.addProjectile(0, 2, 43, 2);
        mapLayer.animator.addProjectile(0, 3, 43, 3);
        mapLayer.animator.addProjectile(0, 4, 43, 4);
        mapLayer.animator.addProjectile(0, 5, 43, 5);
        mapLayer.animator.addProjectile(0, 6, 43, 6);
        mapLayer.animator.addProjectile(0, 7, 43, 7);
        mapLayer.animator.addProjectile(0, 8, 43, 8);
        mapLayer.animator.addProjectile(0, 9, 43, 9);
        mapLayer.animator.addProjectile(0, 0, 33, 33);
    }, 1000);
});

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