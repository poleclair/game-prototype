/// <reference path="../Enum/ClassEnum.ts"/>
/// <reference path="../Enum/RaceEnum.ts"/>

/**
 * Test Setup
 */
let abilityScores: Array<number> = [15, 14, 13, 12, 10, 8];
let SkillEnumProficiencies: Array<SkillEnum> = [SkillEnum.ANIMAL_HANDLING, SkillEnum.ATHLETICS, SkillEnum.PERCEPTION, SkillEnum.SURVIVAL];

let character: Character = new Character("Human", 1, RaceEnum.HUMAN, ClassEnum.FIGHTER, abilityScores, SkillEnumProficiencies);

/**
 * Test Armor, Shield and Weapon with Inventory
 */
console.assert(!character.equipItem(items.ARMOR_PADDED));
console.assert(!character.unequipItem(items.ARMOR_PADDED));
console.assert(!character.equipItem(items.SHIELD_SHIELD));
console.assert(!character.unequipItem(items.SHIELD_SHIELD));
console.assert(!character.equipItem(items.WEAPON_CLUB));
console.assert(!character.unequipItem(items.WEAPON_CLUB));

console.assert(!character.removeItem(items.ARMOR_PADDED));
console.assert(character.addItem(items.ARMOR_PADDED));
console.assert(character.removeItem(items.ARMOR_PADDED));

console.assert(character.addItem(items.ARMOR_PADDED));
console.assert(character.equipItem(items.ARMOR_PADDED));
console.assert(!character.removeItem(items.ARMOR_PADDED));
console.assert(character.unequipItem(items.ARMOR_PADDED));
console.assert(character.removeItem(items.ARMOR_PADDED));

console.assert(character.addItem(items.SHIELD_SHIELD));
console.assert(character.equipItem(items.SHIELD_SHIELD));
console.assert(!character.removeItem(items.SHIELD_SHIELD));
console.assert(character.unequipItem(items.SHIELD_SHIELD));
console.assert(character.removeItem(items.SHIELD_SHIELD));

console.assert(character.addItem(items.WEAPON_CLUB));
console.assert(character.equipItem(items.WEAPON_CLUB));
console.assert(!character.removeItem(items.WEAPON_CLUB));
console.assert(character.unequipItem(items.WEAPON_CLUB));
console.assert(character.removeItem(items.WEAPON_CLUB));

console.assert(character.addItem(items.WEAPON_CLUB));
console.assert(character.addItem(items.WEAPON_CLUB));
console.assert(character.addItem(items.WEAPON_CLUB));
console.assert(character.addItem(items.WEAPON_CLUB));
console.assert(character.removeItem(items.WEAPON_CLUB));
console.assert(character.removeItem(items.WEAPON_CLUB));
console.assert(character.removeItem(items.WEAPON_CLUB));
console.assert(character.removeItem(items.WEAPON_CLUB));
console.assert(!character.removeItem(items.WEAPON_CLUB));

/**
 * Test Armor, Shield and Weapon with Stats
 */
console.assert(character.addItem(items.ARMOR_PADDED));
console.assert(character.equipItem(items.ARMOR_PADDED));
console.assert(character.addItem(items.WEAPON_CLUB));
console.assert(character.equipItem(items.WEAPON_CLUB));

console.assert(character.getArmorClass() === 13);

console.assert(character.addItem(items.SHIELD_SHIELD));
console.assert(character.equipItem(items.SHIELD_SHIELD));

console.assert(character.getArmorClass() === 15);

console.assert(character.initiative === 2);

console.assert(character.passivePerception === 10);

/**
 * Test Ability Scores with Standard Array and Human Fighter Level 1
 */
console.assert(character.getAbilityScore(AbilityEnum.STRENGTH) === 15 + 1);
console.assert(character.getAbilityScore(AbilityEnum.DEXTERITY) === 14 + 1);
console.assert(character.getAbilityScore(AbilityEnum.CONSTITUTION) === 13 + 1);
console.assert(character.getAbilityScore(AbilityEnum.INTELLIGENCE) === 12 + 1);
console.assert(character.getAbilityScore(AbilityEnum.WISDOM) === 10 + 1);
console.assert(character.getAbilityScore(AbilityEnum.CHARISMA) === 8 + 1);

/**
 * Test Ability Modifiers with Standard Array and Human Fighter Level 1
 */
console.assert(character.getAbilityModifier(AbilityEnum.STRENGTH) === 3);
console.assert(character.getAbilityModifier(AbilityEnum.DEXTERITY) === 2);
console.assert(character.getAbilityModifier(AbilityEnum.CONSTITUTION) === 2);
console.assert(character.getAbilityModifier(AbilityEnum.INTELLIGENCE) === 1);
console.assert(character.getAbilityModifier(AbilityEnum.WISDOM) === 0);
console.assert(character.getAbilityModifier(AbilityEnum.CHARISMA) === -1);

/**
 * Test Saving Throws with Standard Array and Human Fighter Level 1
 */
console.assert(character.getSavingThrow(AbilityEnum.STRENGTH) === 3 + 2);
console.assert(character.getSavingThrow(AbilityEnum.DEXTERITY) === 2);
console.assert(character.getSavingThrow(AbilityEnum.CONSTITUTION) === 2 + 2);
console.assert(character.getSavingThrow(AbilityEnum.INTELLIGENCE) === 1);
console.assert(character.getSavingThrow(AbilityEnum.WISDOM) === 0);
console.assert(character.getSavingThrow(AbilityEnum.CHARISMA) === -1);

/**
 * Test Skills with Standard Array and Human Fighter Level 1
 */
console.assert(character.getSkill(SkillEnum.ACROBATICS) === 2);
console.assert(character.getSkill(SkillEnum.ANIMAL_HANDLING) === 0);
console.assert(character.getSkill(SkillEnum.ARCANA) === 1);
console.assert(character.getSkill(SkillEnum.ATHLETICS) === 3);
console.assert(character.getSkill(SkillEnum.DECEPTION) === -1);
console.assert(character.getSkill(SkillEnum.HISTORY) === 1);
console.assert(character.getSkill(SkillEnum.INSIGHT) === 0);
console.assert(character.getSkill(SkillEnum.INTIMIDATION) === -1);
console.assert(character.getSkill(SkillEnum.INVESTIGATION) === 1);
console.assert(character.getSkill(SkillEnum.MEDICINE) === 0);
console.assert(character.getSkill(SkillEnum.NATURE) === 1);
console.assert(character.getSkill(SkillEnum.PERCEPTION) === 0);
console.assert(character.getSkill(SkillEnum.PERFORMANCE) === -1);
console.assert(character.getSkill(SkillEnum.PERSUASION) === -1);
console.assert(character.getSkill(SkillEnum.RELIGION) === 1);
console.assert(character.getSkill(SkillEnum.SLEIGHT_OF_HAND) === 2);
console.assert(character.getSkill(SkillEnum.STEALTH) === 2);
console.assert(character.getSkill(SkillEnum.SURVIVAL) === 0);

/**
 * Ruleset Tests
 */
console.assert(Ruleset.AbilityModifier(7) === -2, Ruleset.AbilityModifier(7) + " does not equals -2");
console.assert(Ruleset.AbilityModifier(8) === -1, Ruleset.AbilityModifier(8) + " does not equals -1");
console.assert(Ruleset.AbilityModifier(9) === -1, Ruleset.AbilityModifier(9) + " does not equals -1");
console.assert(Ruleset.AbilityModifier(10) === 0, Ruleset.AbilityModifier(10) + " does not equals 0");
console.assert(Ruleset.AbilityModifier(11) === 0, Ruleset.AbilityModifier(11) + " does not equals 0");
console.assert(Ruleset.AbilityModifier(12) === 1, Ruleset.AbilityModifier(12) + " does not equals 1");
console.assert(Ruleset.AbilityModifier(13) === 1, Ruleset.AbilityModifier(13) + " does not equals 1");
console.assert(Ruleset.AbilityModifier(14) === 2, Ruleset.AbilityModifier(14) + " does not equals 2");