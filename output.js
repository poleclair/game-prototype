/**
 * Class representing a converter.
 */
class Converter {
    /**
     * Gets the string value of an ability id.
     * @param {AbilityEnum} abilityId - The ability id.
     * @return {number}
     */
    static AbilityEnumToString(abilityId) {
        switch (abilityId) {
            case AbilityEnum.STRENGTH:
                return "strength";
            case AbilityEnum.DEXTERITY:
                return "dexterity";
            case AbilityEnum.CONSTITUTION:
                return "constitution";
            case AbilityEnum.INTELLIGENCE:
                return "intelligence";
            case AbilityEnum.WISDOM:
                return "wisdom";
            case AbilityEnum.CHARISMA:
                return "charisma";
            default:
                throw new Error("Parameter 'abilityId' must be in the 'AbilityEnum' range.");
        }
    }
    /**
     * Gets the string value of an armor type id.
     * @param {ArmorTypeEnum} armorTypeId - The armor type id.
     * @return {number}
     */
    static ArmorTypeEnumToString(armorTypeId) {
        switch (armorTypeId) {
            case ArmorTypeEnum.PADDED:
                return "padded";
            case ArmorTypeEnum.LEATHER:
                return "leather";
            case ArmorTypeEnum.STUDDED_LEATHER:
                return "studded leather";
            case ArmorTypeEnum.HIDE:
                return "hide";
            case ArmorTypeEnum.CHAIN_SHIRT:
                return "chain shirt";
            case ArmorTypeEnum.SCALE_MAIL:
                return "scale mail";
            case ArmorTypeEnum.BREASTPLATE:
                return "breastplate";
            case ArmorTypeEnum.HALF_PLATE:
                return "half plate";
            case ArmorTypeEnum.RING_MAIL:
                return "ring mail";
            case ArmorTypeEnum.CHAIN_MAIL:
                return "chain mail";
            case ArmorTypeEnum.SPLINT:
                return "splint";
            case ArmorTypeEnum.PLATE:
                return "plate";
            case ArmorTypeEnum.SHIELD:
                return "shield";
            default:
                throw new Error("Parameter 'armorTypeId' must be in the 'ArmorTypeEnum' range.");
        }
    }
    /**
     * Gets the string value of an attack roll result id.
     * @param {AttackRollResultEnum} attackRollResultId - The attack roll result id.
     * @return {number}
     */
    static AttackRollResultEnumToString(attackRollResultId) {
        switch (attackRollResultId) {
            case AttackRollResultEnum.CRITICAL:
                return "critital hits";
            case AttackRollResultEnum.HIT:
                return "hits";
            case AttackRollResultEnum.MISS:
                return "misses";
            default:
                throw new Error("Parameter 'attackRollResultId' must be in the 'AttackRollResultEnum' range.");
        }
    }
    /**
     * Gets the string value of a class id.
     * @param {ClassEnum} classId - The class id.
     * @return {number}
     */
    static ClassEnumToString(classId) {
        switch (classId) {
            case ClassEnum.CLERIC:
                return "cleric";
            case ClassEnum.FIGHTER:
                return "fighter";
            case ClassEnum.ROGUE:
                return "rogue";
            case ClassEnum.WIZARD:
                return "wizard";
            default:
                throw new Error("Parameter 'classId' must be in the 'ClassEnum' range.");
        }
    }
    /**
     * Gets the string value of a damage type id.
     * @param {DamageTypeEnum} damageTypeId - The damage type id.
     * @return {number}
     */
    static DamageTypeEnumToString(damageTypeId) {
        switch (damageTypeId) {
            case DamageTypeEnum.ACID:
                return "acid";
            case DamageTypeEnum.BLUDGEONING:
                return "bludgeoning";
            case DamageTypeEnum.COLD:
                return "cold";
            case DamageTypeEnum.FIRE:
                return "fire";
            case DamageTypeEnum.FORCE:
                return "force";
            case DamageTypeEnum.LIGHTNING:
                return "lightning";
            case DamageTypeEnum.NECROTIC:
                return "necrotic";
            case DamageTypeEnum.PIERCING:
                return "piercing";
            case DamageTypeEnum.POISON:
                return "poison";
            case DamageTypeEnum.PSYCHIC:
                return "psychic";
            case DamageTypeEnum.RADIANT:
                return "radiant";
            case DamageTypeEnum.SLASHING:
                return "slashing";
            case DamageTypeEnum.THUNDER:
                return "thunder";
            default:
                throw new Error("Parameter 'damageTypeId' must be in the 'DamageTypeEnum' range.");
        }
    }
    /**
     * Gets the string value of an item type id.
     * @param {ItemTypeEnum} itemTypeId - The item type id.
     * @return {number}
     */
    static ItemTypeEnumToString(itemTypeId) {
        switch (itemTypeId) {
            case ItemTypeEnum.SIMPLE_MELEE_WEAPON:
                return "simple melee weapon";
            case ItemTypeEnum.SIMPLE_RANGE_WEAPON:
                return "simple range weapon";
            case ItemTypeEnum.MARTIAL_MELEE_WEAPON:
                return "martial melee weapon";
            case ItemTypeEnum.MARTIAL_RANGE_WEAPON:
                return "martial range weapon";
            case ItemTypeEnum.LIGHT_ARMOR:
                return "light armor";
            case ItemTypeEnum.MEDIUM_ARMOR:
                return "medium armor";
            case ItemTypeEnum.HEAVY_ARMOR:
                return "heavy armor";
            case ItemTypeEnum.SHIELD:
                return "shield";
            case ItemTypeEnum.TOOL:
                return "tool";
            default:
                throw new Error("Parameter 'itemTypeId' must be in the 'ItemTypeEnum' range.");
        }
    }
    /**
     * Gets the string value of a race id.
     * @param {RaceEnum} raceId - The race id.
     * @return {number}
     */
    static RaceEnumToString(raceId) {
        switch (raceId) {
            case RaceEnum.DWARF_HILL:
                return "hill dwarf";
            case RaceEnum.DWARF_MOUNTAIN:
                return "mountain dwarf";
            case RaceEnum.ELF_HIGH:
                return "high elf";
            case RaceEnum.ELF_WOOD:
                return "wood elf";
            case RaceEnum.HALFLING_LIGHTFOOT:
                return "lightfoot halfing";
            case RaceEnum.HALFLING_STOUT:
                return "stout halfing";
            case RaceEnum.HUMAN:
                return "human";
            default:
                throw new Error("Parameter 'raceId' must be in the 'RaceEnum' range.");
        }
    }
    /**
     * Gets the string value of a skill id.
     * @param {SkillEnum} skillId - The skill id.
     * @return {number}
     */
    static SkillEnumToString(skillId) {
        switch (skillId) {
            case SkillEnum.ACROBATICS:
                return "acrobatics";
            case SkillEnum.ANIMAL_HANDLING:
                return "animal handling";
            case SkillEnum.ARCANA:
                return "arcana";
            case SkillEnum.ATHLETICS:
                return "athletics";
            case SkillEnum.DECEPTION:
                return "deception";
            case SkillEnum.HISTORY:
                return "acrobatics";
            case SkillEnum.INSIGHT:
                return "insight";
            case SkillEnum.INTIMIDATION:
                return "intimidation";
            case SkillEnum.INVESTIGATION:
                return "investigation";
            case SkillEnum.MEDICINE:
                return "medicine";
            case SkillEnum.NATURE:
                return "nature";
            case SkillEnum.PERCEPTION:
                return "perception";
            case SkillEnum.PERFORMANCE:
                return "performance";
            case SkillEnum.PERSUASION:
                return "persuasion";
            case SkillEnum.RELIGION:
                return "religion";
            case SkillEnum.SLEIGHT_OF_HAND:
                return "sleight of hand";
            case SkillEnum.STEALTH:
                return "stealth";
            case SkillEnum.SURVIVAL:
                return "survival";
            default:
                throw new Error("Parameter 'skillId' must be in the 'SkillEnum' range.");
        }
    }
    /**
     * Gets the string value of a weapon property id.
     * @param {WeaponPropertyEnum} weaponPropertyId - The weapon property id.
     * @return {number}
     */
    static WeaponPropertyEnumToString(weaponPropertyId) {
        switch (weaponPropertyId) {
            case WeaponPropertyEnum.AMMUNITION:
                return "ammunition";
            case WeaponPropertyEnum.FINESSE:
                return "finesse";
            case WeaponPropertyEnum.HEAVY:
                return "heavy";
            case WeaponPropertyEnum.LIGHT:
                return "light";
            case WeaponPropertyEnum.LOADING:
                return "loading";
            case WeaponPropertyEnum.RANGE:
                return "range";
            case WeaponPropertyEnum.REACH:
                return "reach";
            case WeaponPropertyEnum.SPECIAL:
                return "special";
            case WeaponPropertyEnum.THROWN:
                return "thrown";
            case WeaponPropertyEnum.TWO_HANDED:
                return "two handed";
            case WeaponPropertyEnum.VERSATILE:
                return "versatile";
            default:
                throw new Error("Parameter 'weaponPropertyId' must be in the 'WeaponPropertyEnum' range.");
        }
    }
    /**
     * Gets the string value of a weapon type id.
     * @param {WeaponTypeEnum} weaponTypeId - The weapon type id.
     * @return {number}
     */
    static WeaponTypeEnumToString(weaponTypeId) {
        switch (weaponTypeId) {
            case WeaponTypeEnum.CLUB:
                return "club";
            case WeaponTypeEnum.DAGGER:
                return "dagger";
            case WeaponTypeEnum.GREATCLUB:
                return "greatclub";
            case WeaponTypeEnum.HANDAXE:
                return "handaxe";
            case WeaponTypeEnum.JAVELIN:
                return "javelin";
            case WeaponTypeEnum.LIGHT_HAMMER:
                return "light hammer";
            case WeaponTypeEnum.MACE:
                return "mace";
            case WeaponTypeEnum.QUARTERSTAFF:
                return "quarterstaff";
            case WeaponTypeEnum.SICKLE:
                return "sickle";
            case WeaponTypeEnum.SPEAR:
                return "spear";
            case WeaponTypeEnum.LIGHT_CROSSBOW:
                return "light crossbow";
            case WeaponTypeEnum.DART:
                return "dart";
            case WeaponTypeEnum.SHORTBOW:
                return "shortbow";
            case WeaponTypeEnum.SLING:
                return "sling";
            case WeaponTypeEnum.BATTLEAXE:
                return "battleaxe";
            case WeaponTypeEnum.FLAIL:
                return "flail";
            case WeaponTypeEnum.GLAIVE:
                return "glaive";
            case WeaponTypeEnum.GREATAXE:
                return "greataxe";
            case WeaponTypeEnum.GREATSWORD:
                return "greatsword";
            case WeaponTypeEnum.HALBERD:
                return "halberd";
            case WeaponTypeEnum.LANCE:
                return "lance";
            case WeaponTypeEnum.LONGSWORD:
                return "longsword";
            case WeaponTypeEnum.MAUL:
                return "maul";
            case WeaponTypeEnum.MORNINGSTAR:
                return "morningstar";
            case WeaponTypeEnum.PIKE:
                return "pike";
            case WeaponTypeEnum.RAPIER:
                return "rapier";
            case WeaponTypeEnum.SCIMITAR:
                return "scimitar";
            case WeaponTypeEnum.SHORTSWORD:
                return "shortsword";
            case WeaponTypeEnum.TRIDENT:
                return "trident";
            case WeaponTypeEnum.WAR_PICK:
                return "war pick";
            case WeaponTypeEnum.WARHAMMER:
                return "warhammer";
            case WeaponTypeEnum.WHIP:
                return "whip";
            case WeaponTypeEnum.BLOWGUN:
                return "blowgun";
            case WeaponTypeEnum.HAND_CROSSBOW:
                return "hand crossbow";
            case WeaponTypeEnum.HEAVY_CROSSBOW:
                return "heavy crossbow";
            case WeaponTypeEnum.LONGBOW:
                return "longbow";
            case WeaponTypeEnum.NET:
                return "net";
            default:
                throw new Error("Parameter 'weaponTypeId' must be in the 'WeaponTypeEnum' range.");
        }
    }
}
/**
 * Class representing an item.
 */
class Item {
    /**
     * Create an item.
     * @constructor
     * @param {string} name - The name.
     * @param {number} cost - The cost.
     * @param {number} weight - The weight.
     * @param {ItemTypeEnum} itemTypeId - The item type id.
     * @return {Item}
     */
    constructor(name, cost, weight, itemTypeId) {
        this._name = name;
        this._cost = cost;
        this._weight = weight;
        this._itemTypeId = itemTypeId;
    }
    get name() {
        return this._name;
    }
    get cost() {
        return this._cost;
    }
    get weight() {
        return this._weight;
    }
    get itemTypeId() {
        return this._itemTypeId;
    }
}
/// <reference path="Item.ts"/>
/**
 * Class representing an armor.
 * @extends Item
 */
class Armor extends Item {
    /**
     * Create an armor.
     * @param {string} name - The name.
     * @param {number} cost - The cost.
     * @param {number} weight - The weight.
     * @param {number} itemType - The item type.
     * @param {number} armorClass - The armor class.
     * @param {number}  strengthRequired - The strength required.
     * @param {boolean} isDexterityModified - Is the dexterity modified.
     * @param {boolean} isDexterityCap - Is the dexterity cap.
     * @param {boolean} isStealthy - Is the armor stealthy.
     * @param {number} armorType - The armor type.
     * @return {Armor}
     */
    constructor(name, cost, weight, itemType, armorClass, strengthRequired, isDexterityModified, isDexterityCap, isStealthy, armorType) {
        super(name, cost, weight, itemType);
        this._armorClass = armorClass;
        this._strengthRequired = strengthRequired;
        this._isDexterityModified = isDexterityModified;
        this._isDexterityCap = isDexterityCap;
        this._isStealthy = isStealthy;
        this._armorType = armorType;
    }
    get armorClass() {
        return this._armorClass;
    }
    get strengthRequired() {
        return this._strengthRequired;
    }
    get isDexterityModified() {
        return this._isDexterityModified;
    }
    get isDexterityCap() {
        return this._isDexterityCap;
    }
    get isStealthy() {
        return this._isStealthy;
    }
    get armorType() {
        return this._armorType;
    }
}
/**
 * Class representing a weapon.
 * @extends Item
 */
class Weapon extends Item {
    /**
     * Create a weapon.
     * @param {string} name - The name.
     * @param {number} cost - The cost.
     * @param {number} weight - The weight.
     * @param {ItemTypeEnum} itemType - The item type.
     * @param {Array<number>} damages - The damage array.
     * @param {Array<number>} secondaryDamages - The secondary damage array.
     * @param {DamageTypeEnum} damageType - The damage type.
     * @param {Array<WeaponPropertyEnum>} properties - The property array.
     * @param {WeaponRange} weaponRange - The weapon range.
     * @param {WeaponTypeEnum} weaponType - The weapon type.
     * @return {Weapon}
     */
    constructor(name, cost, weight, itemType, damages, secondaryDamages, damageType, properties, weaponRange, weaponType) {
        super(name, cost, weight, itemType);
        this._damages = damages;
        this._secondaryDamages = secondaryDamages;
        this._damageType = damageType;
        this._properties = properties;
        this._weaponRange = weaponRange;
        this._weaponType = weaponType;
    }
    get damages() {
        return this._damages;
    }
    get secondaryDamages() {
        return this._secondaryDamages;
    }
    get damageTypeId() {
        return this._damageType;
    }
    get properties() {
        return this._properties;
    }
    get weaponRange() {
        return this._weaponRange;
    }
    get weaponType() {
        return this._weaponType;
    }
    /**
     * Get the damage roll.
     * @return {number}
     */
    getDamageRoll() {
        let result = 0;
        this._damages.forEach(function (damage) {
            result += Die.RollD(damage);
        });
        return result;
    }
}
/**
 * Class representing a weapon range.
 */
class WeaponRange {
    /**
     * Create a weapon range.
     * @constructor
     * @param {number} _minimum - The minimum.
     * @param {number} _maximum - The maximum.
     * @return {WeaponRange}
     */
    constructor(minimum, maximum) {
        this._minimum = minimum;
        this._maximum = maximum;
    }
    get minimum() {
        return this._minimum;
    }
    get maximum() {
        return this._maximum;
    }
}
/**
 * Enum representing an armor type.
 */
var ArmorTypeEnum;
(function (ArmorTypeEnum) {
    // LIGHT ARMOR
    ArmorTypeEnum[ArmorTypeEnum["PADDED"] = 0] = "PADDED";
    ArmorTypeEnum[ArmorTypeEnum["LEATHER"] = 1] = "LEATHER";
    ArmorTypeEnum[ArmorTypeEnum["STUDDED_LEATHER"] = 2] = "STUDDED_LEATHER";
    ArmorTypeEnum[ArmorTypeEnum["HIDE"] = 3] = "HIDE";
    // MEDIUM ARMOR
    ArmorTypeEnum[ArmorTypeEnum["CHAIN_SHIRT"] = 4] = "CHAIN_SHIRT";
    ArmorTypeEnum[ArmorTypeEnum["SCALE_MAIL"] = 5] = "SCALE_MAIL";
    ArmorTypeEnum[ArmorTypeEnum["BREASTPLATE"] = 6] = "BREASTPLATE";
    ArmorTypeEnum[ArmorTypeEnum["HALF_PLATE"] = 7] = "HALF_PLATE";
    // HEAVY ARMOR
    ArmorTypeEnum[ArmorTypeEnum["RING_MAIL"] = 8] = "RING_MAIL";
    ArmorTypeEnum[ArmorTypeEnum["CHAIN_MAIL"] = 9] = "CHAIN_MAIL";
    ArmorTypeEnum[ArmorTypeEnum["SPLINT"] = 10] = "SPLINT";
    ArmorTypeEnum[ArmorTypeEnum["PLATE"] = 11] = "PLATE";
    // SHIELD
    ArmorTypeEnum[ArmorTypeEnum["SHIELD"] = 12] = "SHIELD";
})(ArmorTypeEnum || (ArmorTypeEnum = {}));
/**
 * Enum representing a damage type.
 */
var DamageTypeEnum;
(function (DamageTypeEnum) {
    DamageTypeEnum[DamageTypeEnum["ACID"] = 0] = "ACID";
    DamageTypeEnum[DamageTypeEnum["BLUDGEONING"] = 1] = "BLUDGEONING";
    DamageTypeEnum[DamageTypeEnum["COLD"] = 2] = "COLD";
    DamageTypeEnum[DamageTypeEnum["FIRE"] = 3] = "FIRE";
    DamageTypeEnum[DamageTypeEnum["FORCE"] = 4] = "FORCE";
    DamageTypeEnum[DamageTypeEnum["LIGHTNING"] = 5] = "LIGHTNING";
    DamageTypeEnum[DamageTypeEnum["NECROTIC"] = 6] = "NECROTIC";
    DamageTypeEnum[DamageTypeEnum["PIERCING"] = 7] = "PIERCING";
    DamageTypeEnum[DamageTypeEnum["POISON"] = 8] = "POISON";
    DamageTypeEnum[DamageTypeEnum["PSYCHIC"] = 9] = "PSYCHIC";
    DamageTypeEnum[DamageTypeEnum["RADIANT"] = 10] = "RADIANT";
    DamageTypeEnum[DamageTypeEnum["SLASHING"] = 11] = "SLASHING";
    DamageTypeEnum[DamageTypeEnum["THUNDER"] = 12] = "THUNDER";
})(DamageTypeEnum || (DamageTypeEnum = {}));
/**
 * Enum representing an item type.
 */
var ItemTypeEnum;
(function (ItemTypeEnum) {
    ItemTypeEnum[ItemTypeEnum["SIMPLE_MELEE_WEAPON"] = 0] = "SIMPLE_MELEE_WEAPON";
    ItemTypeEnum[ItemTypeEnum["SIMPLE_RANGE_WEAPON"] = 1] = "SIMPLE_RANGE_WEAPON";
    ItemTypeEnum[ItemTypeEnum["MARTIAL_MELEE_WEAPON"] = 2] = "MARTIAL_MELEE_WEAPON";
    ItemTypeEnum[ItemTypeEnum["MARTIAL_RANGE_WEAPON"] = 3] = "MARTIAL_RANGE_WEAPON";
    ItemTypeEnum[ItemTypeEnum["LIGHT_ARMOR"] = 4] = "LIGHT_ARMOR";
    ItemTypeEnum[ItemTypeEnum["MEDIUM_ARMOR"] = 5] = "MEDIUM_ARMOR";
    ItemTypeEnum[ItemTypeEnum["HEAVY_ARMOR"] = 6] = "HEAVY_ARMOR";
    ItemTypeEnum[ItemTypeEnum["SHIELD"] = 7] = "SHIELD";
    ItemTypeEnum[ItemTypeEnum["TOOL"] = 8] = "TOOL";
})(ItemTypeEnum || (ItemTypeEnum = {}));
/**
 * Enum representing a weapon property.
 */
var WeaponPropertyEnum;
(function (WeaponPropertyEnum) {
    WeaponPropertyEnum[WeaponPropertyEnum["AMMUNITION"] = 0] = "AMMUNITION";
    WeaponPropertyEnum[WeaponPropertyEnum["FINESSE"] = 1] = "FINESSE";
    WeaponPropertyEnum[WeaponPropertyEnum["HEAVY"] = 2] = "HEAVY";
    WeaponPropertyEnum[WeaponPropertyEnum["LIGHT"] = 3] = "LIGHT";
    WeaponPropertyEnum[WeaponPropertyEnum["LOADING"] = 4] = "LOADING";
    WeaponPropertyEnum[WeaponPropertyEnum["RANGE"] = 5] = "RANGE";
    WeaponPropertyEnum[WeaponPropertyEnum["REACH"] = 6] = "REACH";
    WeaponPropertyEnum[WeaponPropertyEnum["SPECIAL"] = 7] = "SPECIAL";
    WeaponPropertyEnum[WeaponPropertyEnum["THROWN"] = 8] = "THROWN";
    WeaponPropertyEnum[WeaponPropertyEnum["TWO_HANDED"] = 9] = "TWO_HANDED";
    WeaponPropertyEnum[WeaponPropertyEnum["VERSATILE"] = 10] = "VERSATILE";
})(WeaponPropertyEnum || (WeaponPropertyEnum = {}));
/**
 * Enum representing a weapon type.
 */
var WeaponTypeEnum;
(function (WeaponTypeEnum) {
    // SIMPLE MELEE WEAPON
    WeaponTypeEnum[WeaponTypeEnum["CLUB"] = 0] = "CLUB";
    WeaponTypeEnum[WeaponTypeEnum["DAGGER"] = 1] = "DAGGER";
    WeaponTypeEnum[WeaponTypeEnum["GREATCLUB"] = 2] = "GREATCLUB";
    WeaponTypeEnum[WeaponTypeEnum["HANDAXE"] = 3] = "HANDAXE";
    WeaponTypeEnum[WeaponTypeEnum["JAVELIN"] = 4] = "JAVELIN";
    WeaponTypeEnum[WeaponTypeEnum["LIGHT_HAMMER"] = 5] = "LIGHT_HAMMER";
    WeaponTypeEnum[WeaponTypeEnum["MACE"] = 6] = "MACE";
    WeaponTypeEnum[WeaponTypeEnum["QUARTERSTAFF"] = 7] = "QUARTERSTAFF";
    WeaponTypeEnum[WeaponTypeEnum["SICKLE"] = 8] = "SICKLE";
    WeaponTypeEnum[WeaponTypeEnum["SPEAR"] = 9] = "SPEAR";
    // SIMPLE RANGED WEAPON
    WeaponTypeEnum[WeaponTypeEnum["LIGHT_CROSSBOW"] = 10] = "LIGHT_CROSSBOW";
    WeaponTypeEnum[WeaponTypeEnum["DART"] = 11] = "DART";
    WeaponTypeEnum[WeaponTypeEnum["SHORTBOW"] = 12] = "SHORTBOW";
    WeaponTypeEnum[WeaponTypeEnum["SLING"] = 13] = "SLING";
    // MARTIAL MELEE WEAPON
    WeaponTypeEnum[WeaponTypeEnum["BATTLEAXE"] = 14] = "BATTLEAXE";
    WeaponTypeEnum[WeaponTypeEnum["FLAIL"] = 15] = "FLAIL";
    WeaponTypeEnum[WeaponTypeEnum["GLAIVE"] = 16] = "GLAIVE";
    WeaponTypeEnum[WeaponTypeEnum["GREATAXE"] = 17] = "GREATAXE";
    WeaponTypeEnum[WeaponTypeEnum["GREATSWORD"] = 18] = "GREATSWORD";
    WeaponTypeEnum[WeaponTypeEnum["HALBERD"] = 19] = "HALBERD";
    WeaponTypeEnum[WeaponTypeEnum["LANCE"] = 20] = "LANCE";
    WeaponTypeEnum[WeaponTypeEnum["LONGSWORD"] = 21] = "LONGSWORD";
    WeaponTypeEnum[WeaponTypeEnum["MAUL"] = 22] = "MAUL";
    WeaponTypeEnum[WeaponTypeEnum["MORNINGSTAR"] = 23] = "MORNINGSTAR";
    WeaponTypeEnum[WeaponTypeEnum["PIKE"] = 24] = "PIKE";
    WeaponTypeEnum[WeaponTypeEnum["RAPIER"] = 25] = "RAPIER";
    WeaponTypeEnum[WeaponTypeEnum["SCIMITAR"] = 26] = "SCIMITAR";
    WeaponTypeEnum[WeaponTypeEnum["SHORTSWORD"] = 27] = "SHORTSWORD";
    WeaponTypeEnum[WeaponTypeEnum["TRIDENT"] = 28] = "TRIDENT";
    WeaponTypeEnum[WeaponTypeEnum["WAR_PICK"] = 29] = "WAR_PICK";
    WeaponTypeEnum[WeaponTypeEnum["WARHAMMER"] = 30] = "WARHAMMER";
    WeaponTypeEnum[WeaponTypeEnum["WHIP"] = 31] = "WHIP";
    // MARTIAL RANGED WEAPON
    WeaponTypeEnum[WeaponTypeEnum["BLOWGUN"] = 32] = "BLOWGUN";
    WeaponTypeEnum[WeaponTypeEnum["HAND_CROSSBOW"] = 33] = "HAND_CROSSBOW";
    WeaponTypeEnum[WeaponTypeEnum["HEAVY_CROSSBOW"] = 34] = "HEAVY_CROSSBOW";
    WeaponTypeEnum[WeaponTypeEnum["LONGBOW"] = 35] = "LONGBOW";
    WeaponTypeEnum[WeaponTypeEnum["NET"] = 36] = "NET";
})(WeaponTypeEnum || (WeaponTypeEnum = {}));
/// <reference path="Class/Armor.ts"/>
/// <reference path="Class/Weapon.ts"/>
/// <reference path="Class/WeaponRange.ts"/>
/// <reference path="Enum/ArmorTypeEnum.ts"/>
/// <reference path="Enum/DamageTypeEnum.ts"/>
/// <reference path="Enum/ItemTypeEnum.ts"/>
/// <reference path="Enum/WeaponPropertyEnum.ts"/>
/// <reference path="Enum/WeaponTypeEnum.ts"/>
let items = {
    // LIGHT ARMOR
    ARMOR_PADDED: new Armor("padded", 500, 8, ItemTypeEnum.LIGHT_ARMOR, 11, 0, true, false, false, ArmorTypeEnum.PADDED),
    ARMOR_LEATHER: new Armor("leather", 1000, 10, ItemTypeEnum.LIGHT_ARMOR, 11, 0, true, false, true, ArmorTypeEnum.LEATHER),
    ARMOR_STUDDED_LEATHER: new Armor("studded leather", 4500, 13, ItemTypeEnum.LIGHT_ARMOR, 12, 0, true, false, true, ArmorTypeEnum.STUDDED_LEATHER),
    // MEDIUM ARMOR
    ARMOR_HIDE: new Armor("hide", 1000, 12, ItemTypeEnum.MEDIUM_ARMOR, 12, 0, true, true, false, ArmorTypeEnum.HIDE),
    ARMOR_CHAIN_SHIRT: new Armor("chain shirt", 5000, 20, ItemTypeEnum.MEDIUM_ARMOR, 13, 0, true, true, false, ArmorTypeEnum.CHAIN_SHIRT),
    ARMOR_SCALE_MAIL: new Armor("scale mail", 5000, 45, ItemTypeEnum.MEDIUM_ARMOR, 14, 0, true, true, true, ArmorTypeEnum.SCALE_MAIL),
    ARMOR_BREASTPLATE: new Armor("breastplate", 40000, 20, ItemTypeEnum.MEDIUM_ARMOR, 14, 0, true, true, false, ArmorTypeEnum.BREASTPLATE),
    ARMOR_HALF_PLATE: new Armor("half plate", 75000, 40, ItemTypeEnum.MEDIUM_ARMOR, 15, 0, true, true, true, ArmorTypeEnum.HALF_PLATE),
    // HEAVY ARMOR
    ARMOR_RING_MAIL: new Armor("ring mail", 3000, 40, ItemTypeEnum.HEAVY_ARMOR, 14, 0, false, false, true, ArmorTypeEnum.RING_MAIL),
    ARMOR_CHAIN_MAIL: new Armor("chain mail", 7500, 55, ItemTypeEnum.HEAVY_ARMOR, 16, 13, false, false, true, ArmorTypeEnum.CHAIN_MAIL),
    ARMOR_SPLINT: new Armor("splint", 20000, 60, ItemTypeEnum.HEAVY_ARMOR, 17, 15, false, false, true, ArmorTypeEnum.SPLINT),
    ARMOR_PLATE: new Armor("plate", 150000, 65, ItemTypeEnum.HEAVY_ARMOR, 18, 15, false, false, true, ArmorTypeEnum.PLATE),
    // SHIELD
    SHIELD_SHIELD: new Armor("shield", 1000, 6, ItemTypeEnum.SHIELD, 2, 0, false, false, false, ArmorTypeEnum.SHIELD),
    // SIMPLE MELEE WEAPON
    WEAPON_CLUB: new Weapon("club", 10, 2, ItemTypeEnum.SIMPLE_MELEE_WEAPON, [4], [4], DamageTypeEnum.BLUDGEONING, [WeaponPropertyEnum.LIGHT], new WeaponRange(20, 60), WeaponTypeEnum.CLUB),
    WEAPON_DAGGER: new Weapon("dagger", 200, 2, ItemTypeEnum.SIMPLE_MELEE_WEAPON, [4], [4], DamageTypeEnum.PIERCING, [WeaponPropertyEnum.FINESSE, WeaponPropertyEnum.LIGHT, WeaponPropertyEnum.THROWN, WeaponPropertyEnum.RANGE], new WeaponRange(20, 60), WeaponTypeEnum.DAGGER),
    WEAPON_GREATCLUB: new Weapon("greatclub", 20, 10, ItemTypeEnum.SIMPLE_MELEE_WEAPON, [8], [8], DamageTypeEnum.BLUDGEONING, [WeaponPropertyEnum.TWO_HANDED], new WeaponRange(20, 60), WeaponTypeEnum.GREATCLUB),
    WEAPON_HANDAXE: new Weapon("handaxe", 500, 2, ItemTypeEnum.SIMPLE_MELEE_WEAPON, [6], [6], DamageTypeEnum.SLASHING, [WeaponPropertyEnum.LIGHT, WeaponPropertyEnum.THROWN, WeaponPropertyEnum.RANGE], new WeaponRange(20, 60), WeaponTypeEnum.HANDAXE),
    WEAPON_JAVELIN: new Weapon("javelin", 50, 2, ItemTypeEnum.SIMPLE_MELEE_WEAPON, [6], [6], DamageTypeEnum.PIERCING, [WeaponPropertyEnum.THROWN, WeaponPropertyEnum.RANGE], new WeaponRange(30, 120), WeaponTypeEnum.JAVELIN),
    WEAPON_LIGHT_HAMMER: new Weapon("light hammer", 200, 2, ItemTypeEnum.SIMPLE_MELEE_WEAPON, [4], [4], DamageTypeEnum.BLUDGEONING, [WeaponPropertyEnum.LIGHT, WeaponPropertyEnum.THROWN, WeaponPropertyEnum.RANGE], new WeaponRange(20, 60), WeaponTypeEnum.LIGHT_HAMMER),
    WEAPON_MACE: new Weapon("mace", 500, 4, ItemTypeEnum.SIMPLE_MELEE_WEAPON, [6], [6], DamageTypeEnum.BLUDGEONING, [], new WeaponRange(20, 60), WeaponTypeEnum.MACE),
    WEAPON_QUARTERSTAFF: new Weapon("quarterstaff", 20, 4, ItemTypeEnum.SIMPLE_MELEE_WEAPON, [6], [8], DamageTypeEnum.BLUDGEONING, [WeaponPropertyEnum.VERSATILE], new WeaponRange(20, 60), WeaponTypeEnum.QUARTERSTAFF),
    WEAPON_SICKLE: new Weapon("sickle", 100, 2, ItemTypeEnum.SIMPLE_MELEE_WEAPON, [4], [4], DamageTypeEnum.SLASHING, [WeaponPropertyEnum.LIGHT], new WeaponRange(20, 60), WeaponTypeEnum.SICKLE),
    WEAPON_SPEAR: new Weapon("spear", 100, 3, ItemTypeEnum.SIMPLE_MELEE_WEAPON, [6], [8], DamageTypeEnum.PIERCING, [WeaponPropertyEnum.VERSATILE, WeaponPropertyEnum.THROWN, WeaponPropertyEnum.RANGE], new WeaponRange(20, 60), WeaponTypeEnum.SPEAR),
    // SIMPLE RANGE WEAPON
    WEAPON_LIGHT_CROSSBOW: new Weapon("light crossbow", 2500, 5, ItemTypeEnum.SIMPLE_RANGE_WEAPON, [8], [8], DamageTypeEnum.PIERCING, [WeaponPropertyEnum.AMMUNITION, WeaponPropertyEnum.RANGE, WeaponPropertyEnum.LOADING, WeaponPropertyEnum.TWO_HANDED], new WeaponRange(80, 320), WeaponTypeEnum.LIGHT_CROSSBOW),
    WEAPON_DART: new Weapon("dart", 5, 0.25, ItemTypeEnum.SIMPLE_RANGE_WEAPON, [4], [4], DamageTypeEnum.PIERCING, [WeaponPropertyEnum.FINESSE, WeaponPropertyEnum.THROWN, WeaponPropertyEnum.RANGE], new WeaponRange(20, 60), WeaponTypeEnum.DART),
    WEAPON_SHORTBOW: new Weapon("shortbow", 2500, 2, ItemTypeEnum.SIMPLE_RANGE_WEAPON, [6], [6], DamageTypeEnum.PIERCING, [WeaponPropertyEnum.AMMUNITION, WeaponPropertyEnum.RANGE, WeaponPropertyEnum.TWO_HANDED], new WeaponRange(80, 320), WeaponTypeEnum.SHORTBOW),
    WEAPON_SLING: new Weapon("sling", 10, 0, ItemTypeEnum.SIMPLE_RANGE_WEAPON, [4], [4], DamageTypeEnum.BLUDGEONING, [WeaponPropertyEnum.AMMUNITION, WeaponPropertyEnum.RANGE], new WeaponRange(30, 120), WeaponTypeEnum.SLING),
    // MARTIAL MELEE WEAPON
    WEAPON_BATTLEAXE: new Weapon("battleaxe", 1000, 4, ItemTypeEnum.MARTIAL_MELEE_WEAPON, [8], [10], DamageTypeEnum.SLASHING, [WeaponPropertyEnum.VERSATILE], new WeaponRange(20, 60), WeaponTypeEnum.BATTLEAXE),
    WEAPON_FLAIL: new Weapon("flail", 1000, 2, ItemTypeEnum.MARTIAL_MELEE_WEAPON, [8], [8], DamageTypeEnum.BLUDGEONING, [], new WeaponRange(20, 60), WeaponTypeEnum.FLAIL),
    WEAPON_GLAIVE: new Weapon("glaive", 2000, 6, ItemTypeEnum.MARTIAL_MELEE_WEAPON, [10], [10], DamageTypeEnum.SLASHING, [WeaponPropertyEnum.HEAVY, WeaponPropertyEnum.REACH, WeaponPropertyEnum.TWO_HANDED], new WeaponRange(20, 60), WeaponTypeEnum.GLAIVE),
    WEAPON_GREATAXE: new Weapon("greataxe", 3000, 7, ItemTypeEnum.MARTIAL_MELEE_WEAPON, [12], [12], DamageTypeEnum.SLASHING, [WeaponPropertyEnum.HEAVY, WeaponPropertyEnum.TWO_HANDED], new WeaponRange(20, 60), WeaponTypeEnum.GREATAXE),
    WEAPON_GREATSWORD: new Weapon("greatsword", 5000, 6, ItemTypeEnum.MARTIAL_MELEE_WEAPON, [6, 6], [6, 6], DamageTypeEnum.SLASHING, [WeaponPropertyEnum.HEAVY, WeaponPropertyEnum.TWO_HANDED], new WeaponRange(20, 60), WeaponTypeEnum.GREATSWORD),
    WEAPON_HALBERD: new Weapon("halberd", 2000, 6, ItemTypeEnum.MARTIAL_MELEE_WEAPON, [10], [10], DamageTypeEnum.SLASHING, [WeaponPropertyEnum.HEAVY, WeaponPropertyEnum.REACH, WeaponPropertyEnum.TWO_HANDED], new WeaponRange(20, 60), WeaponTypeEnum.HALBERD),
    WEAPON_LANCE: new Weapon("lance", 1000, 6, ItemTypeEnum.MARTIAL_MELEE_WEAPON, [12], [12], DamageTypeEnum.PIERCING, [WeaponPropertyEnum.REACH, WeaponPropertyEnum.SPECIAL], new WeaponRange(20, 60), WeaponTypeEnum.LANCE),
    WEAPON_LONGSWORD: new Weapon("longsword", 1500, 3, ItemTypeEnum.MARTIAL_MELEE_WEAPON, [8], [10], DamageTypeEnum.SLASHING, [WeaponPropertyEnum.VERSATILE], new WeaponRange(20, 60), WeaponTypeEnum.LONGSWORD),
    WEAPON_MAUL: new Weapon("maul", 1000, 10, ItemTypeEnum.MARTIAL_MELEE_WEAPON, [6, 6], [6, 6], DamageTypeEnum.BLUDGEONING, [WeaponPropertyEnum.HEAVY, WeaponPropertyEnum.TWO_HANDED], new WeaponRange(20, 60), WeaponTypeEnum.MAUL),
    WEAPON_MORNINGSTAR: new Weapon("morningstar", 1500, 4, ItemTypeEnum.MARTIAL_MELEE_WEAPON, [8], [8], DamageTypeEnum.PIERCING, [], new WeaponRange(20, 60), WeaponTypeEnum.MORNINGSTAR),
    WEAPON_PIKE: new Weapon("pike", 500, 3, ItemTypeEnum.MARTIAL_MELEE_WEAPON, [10], [10], DamageTypeEnum.PIERCING, [WeaponPropertyEnum.HEAVY, WeaponPropertyEnum.REACH, WeaponPropertyEnum.TWO_HANDED], new WeaponRange(20, 60), WeaponTypeEnum.PIKE),
    WEAPON_RAPIER: new Weapon("rapier", 2500, 2, ItemTypeEnum.MARTIAL_MELEE_WEAPON, [8], [8], DamageTypeEnum.PIERCING, [WeaponPropertyEnum.FINESSE], new WeaponRange(20, 60), WeaponTypeEnum.RAPIER),
    WEAPON_SCIMITAR: new Weapon("scimitar", 2500, 3, ItemTypeEnum.MARTIAL_MELEE_WEAPON, [6], [6], DamageTypeEnum.SLASHING, [WeaponPropertyEnum.FINESSE, WeaponPropertyEnum.LIGHT], new WeaponRange(20, 60), WeaponTypeEnum.SCIMITAR),
    WEAPON_SHORTSWORD: new Weapon("shortsword", 1000, 2, ItemTypeEnum.MARTIAL_MELEE_WEAPON, [6], [6], DamageTypeEnum.PIERCING, [WeaponPropertyEnum.FINESSE, WeaponPropertyEnum.LIGHT], new WeaponRange(20, 60), WeaponTypeEnum.SHORTSWORD),
    WEAPON_TRIDENT: new Weapon("trident", 500, 4, ItemTypeEnum.MARTIAL_MELEE_WEAPON, [6], [8], DamageTypeEnum.PIERCING, [WeaponPropertyEnum.THROWN, WeaponPropertyEnum.RANGE, WeaponPropertyEnum.VERSATILE], new WeaponRange(20, 60), WeaponTypeEnum.TRIDENT),
    WEAPON_WAR_PICK: new Weapon("war pick", 500, 2, ItemTypeEnum.MARTIAL_MELEE_WEAPON, [8], [8], DamageTypeEnum.PIERCING, [], new WeaponRange(20, 60), WeaponTypeEnum.WAR_PICK),
    WEAPON_WARHAMMER: new Weapon("warhammer", 1500, 2, ItemTypeEnum.MARTIAL_MELEE_WEAPON, [8], [10], DamageTypeEnum.BLUDGEONING, [WeaponPropertyEnum.VERSATILE], new WeaponRange(20, 60), WeaponTypeEnum.WARHAMMER),
    WEAPON_WHIP: new Weapon("whip", 200, 3, ItemTypeEnum.MARTIAL_MELEE_WEAPON, [4], [4], DamageTypeEnum.SLASHING, [WeaponPropertyEnum.FINESSE, WeaponPropertyEnum.REACH], new WeaponRange(20, 60), WeaponTypeEnum.WHIP),
    // MARTIAL RANGE WEAPON
    WEAPON_BLOWGUN: new Weapon("blowgun", 1000, 1, ItemTypeEnum.MARTIAL_RANGE_WEAPON, [1], [1], DamageTypeEnum.PIERCING, [WeaponPropertyEnum.AMMUNITION, WeaponPropertyEnum.RANGE, WeaponPropertyEnum.LOADING], new WeaponRange(25, 100), WeaponTypeEnum.BLOWGUN),
    WEAPON_HAND_CROSSBOW: new Weapon("hand crossbow", 7500, 3, ItemTypeEnum.MARTIAL_RANGE_WEAPON, [6], [6], DamageTypeEnum.PIERCING, [WeaponPropertyEnum.AMMUNITION, WeaponPropertyEnum.RANGE, WeaponPropertyEnum.LIGHT, WeaponPropertyEnum.LOADING], new WeaponRange(30, 120), WeaponTypeEnum.HAND_CROSSBOW),
    WEAPON_HEAVY_CROSSBOW: new Weapon("heavy crossbow", 5000, 18, ItemTypeEnum.MARTIAL_RANGE_WEAPON, [10], [10], DamageTypeEnum.PIERCING, [WeaponPropertyEnum.AMMUNITION, WeaponPropertyEnum.RANGE, WeaponPropertyEnum.HEAVY, WeaponPropertyEnum.LOADING, WeaponPropertyEnum.TWO_HANDED], new WeaponRange(100, 400), WeaponTypeEnum.HEAVY_CROSSBOW),
    WEAPON_LONGBOW: new Weapon("longbow", 5000, 2, ItemTypeEnum.MARTIAL_RANGE_WEAPON, [8], [8], DamageTypeEnum.PIERCING, [WeaponPropertyEnum.AMMUNITION, WeaponPropertyEnum.RANGE, WeaponPropertyEnum.HEAVY, WeaponPropertyEnum.TWO_HANDED], new WeaponRange(150, 600), WeaponTypeEnum.LONGBOW),
    WEAPON_NET: new Weapon("net", 100, 3, ItemTypeEnum.MARTIAL_RANGE_WEAPON, [0], [0], DamageTypeEnum.BLUDGEONING, [WeaponPropertyEnum.SPECIAL, WeaponPropertyEnum.THROWN, WeaponPropertyEnum.RANGE], new WeaponRange(5, 15), WeaponTypeEnum.NET)
};
/**
 * Class representing a die.
 */
class Die {
    /**
     * Gets a die roll of the given side count.
     * @param {number} sideCount - The side count.
     * @return {number}
     */
    static RollD(sideCount) {
        return Math.floor(Math.random() * sideCount) + 1;
    }
    /**
     * Gets a die roll of the given side count with advantage.
     * @param {number} sideCount - The side count.
     * @return {number}
     */
    static RollAD(sideCount) {
        let roll1 = this.RollD(sideCount);
        let roll2 = this.RollD(sideCount);
        return roll1 < roll2 ? roll2 : roll1;
    }
    /**
     * Gets a die roll of the given side count with disadvantage.
     * @param {number} sideCount - The side count.
     * @return {number}
     */
    static RollDD(sideCount) {
        let roll1 = this.RollD(sideCount);
        let roll2 = this.RollD(sideCount);
        return roll1 < roll2 ? roll1 : roll2;
    }
    /**
     * Gets a random ability array roll.
     * @return {Array<number>}
     */
    static RollRAA() {
        let result = [0, 0, 0, 0, 0, 0];
        for (let i = 0; i < 6; i++) {
            let roll = [this.RollD(6), this.RollD(6), this.RollD(6), this.RollD(6)].sort();
            for (let y = 1; y < roll.length; y++) {
                result[i] += roll[y];
            }
        }
        return result;
    }
    /**
     * Gets a standard ability array roll.
     * @return {Array<number>}
     */
    static RollSAA() {
        return [15, 14, 13, 12, 10, 8];
    }
}
/// <reference path="Item.ts"/>
/**
 * Class representing an inventory.
 */
class Inventory {
    /**
     * Create an inventory.
     * @constructor
     * @return {Inventory}
     */
    constructor() {
        this._items = new Array();
        this._weight = 0;
    }
    get items() {
        return this._items;
    }
    get weight() {
        return this._weight;
    }
    /**
     * Has an item.
     * @param {Item} item - The item.
     * @return {boolean}
     */
    hasItem(item) {
        return this.items.findIndex(x => x.name === item.name) > -1;
    }
    /**
     * Add an item.
     * @param {Item} item - The item.
     */
    addItem(item) {
        this._items.push(item);
        this._weight += item.weight;
    }
    /**
     * Remove an item.
     * @param {Item} item - The item.
     */
    removeItem(item) {
        let index = this.items.findIndex(x => x.name === item.name);
        if (index > -1) {
            this._items.splice(index, 1);
            this._weight -= item.weight;
        }
    }
}
/**
 * Enum representing an ability.
 */
var AbilityEnum;
(function (AbilityEnum) {
    AbilityEnum[AbilityEnum["STRENGTH"] = 0] = "STRENGTH";
    AbilityEnum[AbilityEnum["DEXTERITY"] = 1] = "DEXTERITY";
    AbilityEnum[AbilityEnum["CONSTITUTION"] = 2] = "CONSTITUTION";
    AbilityEnum[AbilityEnum["INTELLIGENCE"] = 3] = "INTELLIGENCE";
    AbilityEnum[AbilityEnum["WISDOM"] = 4] = "WISDOM";
    AbilityEnum[AbilityEnum["CHARISMA"] = 5] = "CHARISMA";
})(AbilityEnum || (AbilityEnum = {}));
/**
 * Enum representing a skill.
 */
var SkillEnum;
(function (SkillEnum) {
    SkillEnum[SkillEnum["ACROBATICS"] = 0] = "ACROBATICS";
    SkillEnum[SkillEnum["ANIMAL_HANDLING"] = 1] = "ANIMAL_HANDLING";
    SkillEnum[SkillEnum["ARCANA"] = 2] = "ARCANA";
    SkillEnum[SkillEnum["ATHLETICS"] = 3] = "ATHLETICS";
    SkillEnum[SkillEnum["DECEPTION"] = 4] = "DECEPTION";
    SkillEnum[SkillEnum["HISTORY"] = 5] = "HISTORY";
    SkillEnum[SkillEnum["INSIGHT"] = 6] = "INSIGHT";
    SkillEnum[SkillEnum["INTIMIDATION"] = 7] = "INTIMIDATION";
    SkillEnum[SkillEnum["INVESTIGATION"] = 8] = "INVESTIGATION";
    SkillEnum[SkillEnum["MEDICINE"] = 9] = "MEDICINE";
    SkillEnum[SkillEnum["NATURE"] = 10] = "NATURE";
    SkillEnum[SkillEnum["PERCEPTION"] = 11] = "PERCEPTION";
    SkillEnum[SkillEnum["PERFORMANCE"] = 12] = "PERFORMANCE";
    SkillEnum[SkillEnum["PERSUASION"] = 13] = "PERSUASION";
    SkillEnum[SkillEnum["RELIGION"] = 14] = "RELIGION";
    SkillEnum[SkillEnum["SLEIGHT_OF_HAND"] = 15] = "SLEIGHT_OF_HAND";
    SkillEnum[SkillEnum["STEALTH"] = 16] = "STEALTH";
    SkillEnum[SkillEnum["SURVIVAL"] = 17] = "SURVIVAL";
})(SkillEnum || (SkillEnum = {}));
/// <reference path="Inventory.ts"/>
/// <reference path="../Enum/AbilityEnum.ts"/>
/// <reference path="../Enum/SkillEnum.ts"/>
/**
 * Class representing a character.
 */
class Character {
    /**
     * Create a character.
     * @param {string} name - The name.
     * @param {number} level - The level.
     * @param {number} raceId - The race id.
     * @param {number} classId - The class id.
     * @param {Array<number>} abilityScores - The ability scores.
     * @param {Array<number>} skillProficiencies - The skill proficiencies.
     * @return {Character}
     */
    constructor(name, level, raceId, classId, abilityScores, skillProficiencies) {
        if (!name) {
            throw new Error("Parameter 'name' cannot be null or empty.");
        }
        if (level < 1 || level > 20) {
            throw new Error("Parameter 'level' must be a number between 1 and 20 inclusively.");
        }
        this._name = name;
        this._level = level;
        this._raceId = raceId;
        this._classId = classId;
        this._abilityScores = abilityScores;
        this._abilityScores[AbilityEnum.STRENGTH] += Ruleset.RaceStrength(raceId);
        this._abilityScores[AbilityEnum.DEXTERITY] += Ruleset.RaceDexterity(raceId);
        this._abilityScores[AbilityEnum.CONSTITUTION] += Ruleset.RaceConstitution(raceId);
        this._abilityScores[AbilityEnum.INTELLIGENCE] += Ruleset.RaceIntelligence(raceId);
        this._abilityScores[AbilityEnum.WISDOM] += Ruleset.RaceWisdom(raceId);
        this._abilityScores[AbilityEnum.CHARISMA] += Ruleset.RaceCharisma(raceId);
        this._speed = Ruleset.RaceSpeed(raceId);
        this._maximumHitPoint = Ruleset.MaximumHitPoint(this._level, this._raceId, this._classId, this._abilityScores[AbilityEnum.CONSTITUTION]);
        this._currentHitPoint = Ruleset.MaximumHitPoint(this._level, this._raceId, this._classId, this._abilityScores[AbilityEnum.CONSTITUTION]);
        this._armorProficiencies = Ruleset.ArmorProficiencies(classId);
        this._weaponProficiencies = Ruleset.WeaponProficiencies(classId);
        this._toolProficiencies = Ruleset.ToolProficiencies(classId);
        this._abilityProficiencies = Ruleset.AbilityProficiencies(classId);
        this._skillProficiencies = Ruleset.SkillProficiencies(classId); // skillProficiencies
        this._funds = Ruleset.MaximumStartingFunds(classId);
        this._armor = null;
        this._shield = null;
        this._weapon = null;
        this._proficiencyBonus = Ruleset.ProficiencyBonus(this._level);
        this._initiative = Ruleset.Initiative(this._abilityScores[AbilityEnum.DEXTERITY]);
        this._passivePerception = Ruleset.PassivePerception(this.getSkill(SkillEnum.PERCEPTION));
        this._encumberment = Ruleset.Encumberment(this._abilityScores[AbilityEnum.STRENGTH]);
        this._inventory = new Inventory();
    }
    get name() {
        return this._name;
    }
    get level() {
        return this._level;
    }
    get raceId() {
        return this._raceId;
    }
    get classId() {
        return this._classId;
    }
    get passivePerception() {
        return this._passivePerception;
    }
    get initiative() {
        return this._initiative;
    }
    get encumberment() {
        return this._encumberment;
    }
    get speed() {
        return this._speed;
    }
    get proficiencyBonus() {
        return this._proficiencyBonus;
    }
    get armor() {
        return this._armor;
    }
    get shield() {
        return this._shield;
    }
    get weapon() {
        return this._weapon;
    }
    get maximumHitPoint() {
        return this._maximumHitPoint;
    }
    get currentHitPoint() {
        return this._currentHitPoint;
    }
    set currentHitPoint(currentHitPoint) {
        this._currentHitPoint = currentHitPoint < this.maximumHitPoint ? currentHitPoint : this.maximumHitPoint;
    }
    /**
     * Get the ability score.
     * @param {number} abilityId - The ability id.
     * @return {number}
     */
    getAbilityScore(abilityId) {
        switch (abilityId) {
            case AbilityEnum.STRENGTH:
            case AbilityEnum.DEXTERITY:
            case AbilityEnum.CONSTITUTION:
            case AbilityEnum.INTELLIGENCE:
            case AbilityEnum.WISDOM:
            case AbilityEnum.CHARISMA:
                return this._abilityScores[abilityId];
            default:
                throw new RangeError();
        }
    }
    /**
     * Get the ability modifier.
     * @param {number} abilityId - The ability id.
     * @return {number}
     */
    getAbilityModifier(abilityId) {
        return Ruleset.AbilityModifier(this.getAbilityScore(abilityId));
    }
    /**
     * Get the armor class.
     * @return {number}
     */
    getArmorClass() {
        let armorClass = 0;
        if (this._armor !== null) {
            armorClass += this._armor.armorClass;
            if (this._armor.isDexterityModified) {
                if (this._armor.isDexterityCap && this.getAbilityModifier(AbilityEnum.DEXTERITY) > 2) {
                    armorClass += 2;
                }
                else {
                    armorClass += this.getAbilityModifier(AbilityEnum.DEXTERITY);
                }
            }
        }
        if (this._shield !== null) {
            armorClass += this._shield.armorClass;
        }
        return armorClass;
    }
    /**
     * Get the saving throw.
     * @param {number} abilityId - The ability id.
     * @return {number}
     */
    getSavingThrow(abilityId) {
        return this.getAbilityModifier(abilityId) + (this.isAbilityProficient(abilityId) ? this.proficiencyBonus : 0);
    }
    /**
     * Get the skill.
     * @param {number} skillId - The skill id.
     * @return {number}
     */
    getSkill(skillId) {
        return this.getAbilityModifier(Ruleset.SkillAbility(skillId)) + (this.isSkillProficient(skillId) ? this.proficiencyBonus : 0);
    }
    /**
     * Is ability proficient.
     * @param {number} abilityId - The ability id.
     * @return {boolean}
     */
    isAbilityProficient(abilityId) {
        return this._abilityProficiencies.indexOf(abilityId) > -1;
    }
    /**
     * Is skill proficient.
     * @param {number} skillId - The skill id.
     * @return {boolean}
     */
    isSkillProficient(skillId) {
        return this._skillProficiencies.indexOf(skillId) > -1;
    }
    /**
     * Is armor proficient.
     * @param {number} armorId - The armor id.
     * @return {boolean}
     */
    isArmorProficient(armorId) {
        return this._armorProficiencies.indexOf(armorId) > -1;
    }
    /**
     * Is weapon proficient.
     * @param {number} weaponId - The weapon id.
     * @return {boolean}
     */
    isWeaponProficient(weaponId) {
        return this._weaponProficiencies.indexOf(weaponId) > -1;
    }
    /**
     * Get the attack modifier.
     * @return {number}
     */
    getAttackModifier() {
        return this.getAbilityModifier(Ruleset.WeaponAbility(this._weapon.weaponType)) + (this.isWeaponProficient(this._weapon.weaponType) ? this.proficiencyBonus : 0);
    }
    /**
     * Get the damage modifier.
     * @return {number}
     */
    getDamageModifier() {
        return this.getAbilityModifier(Ruleset.WeaponAbility(this._weapon.weaponType));
    }
    /**
     * Gets a roll for attack.
     * @return {number}
     */
    rollAttack() {
        return this._weapon.getDamageRoll();
    }
    /**
     * Gets a roll for damage.
     * @return {number}
     */
    rollDamage() {
        return this._weapon.getDamageRoll();
    }
    /**
     * Add an item.
     * @param {Item} item - The item.
     * @return {boolean}
     */
    addItem(item) {
        let result = false;
        if (this._inventory.weight + item.weight <= this.encumberment) {
            this._inventory.addItem(item);
            result = true;
        }
        return result;
    }
    /**
     * Remove an item.
     * @param {Item} item - The item.
     * @return {boolean}
     */
    removeItem(item) {
        let result = false;
        if (this._inventory.hasItem(item)) {
            this._inventory.removeItem(item);
            result = true;
        }
        return result;
    }
    /**
     * Equip an item.
     * @param {Item} item - The item.
     * @return {boolean}
     */
    equipItem(item) {
        let result = true;
        if (this._inventory.hasItem(item)) {
            this._inventory.removeItem(item);
            switch (item.itemTypeId) {
                case ItemTypeEnum.LIGHT_ARMOR:
                case ItemTypeEnum.MEDIUM_ARMOR:
                case ItemTypeEnum.HEAVY_ARMOR:
                    this._armor = item;
                    break;
                case ItemTypeEnum.SHIELD:
                    this._shield = item;
                    break;
                case ItemTypeEnum.SIMPLE_MELEE_WEAPON:
                case ItemTypeEnum.SIMPLE_RANGE_WEAPON:
                case ItemTypeEnum.MARTIAL_MELEE_WEAPON:
                case ItemTypeEnum.MARTIAL_RANGE_WEAPON:
                    this._weapon = item;
                    break;
                default:
                    result = false;
            }
        }
        else {
            result = false;
        }
        return result;
    }
    /**
     * Unequip an item.
     * @param {Item} item - The item.
     * @return {boolean}
     */
    unequipItem(item) {
        let result = true;
        if (this._armor !== null && this._armor.name === item.name) {
            this._inventory.addItem(this._armor);
            this._armor = null;
        }
        else if (this._shield !== null && this._shield.name === item.name) {
            this._inventory.addItem(this._shield);
            this._shield = null;
        }
        else if (this._weapon !== null && this._weapon.name === item.name) {
            this._inventory.addItem(this._weapon);
            this._weapon = null;
        }
        else {
            result = false;
        }
        return result;
    }
}
/**
 * Class representing an animation.
 */
class Animation {
    /**
     * Creates an animation.
     * @param {number} x - The x.
     * @param {number} y - The y.
     * @param {Array<Frame>} frames - The frames.
     * @return {Animation}
     */
    constructor(x, y, frames) {
        this._x = x;
        this._y = y;
        this._frames = frames;
    }
    get x() {
        return this._x;
    }
    get y() {
        return this._y;
    }
    get frames() {
        return this._frames;
    }
}
/**
 * Class representing a frame.
 */
class Frame {
    /**
     * Creates a frame.
     * @param {Array<Target>} targets - The targets
     * @return {Frame}
     */
    constructor(targets) {
        this._targets = targets;
    }
    get targets() {
        return this._targets;
    }
}
/**
 * Class representing a target.
 */
class Target {
    /**
     * Creates a target.
     * @param  {number} xOffset - The x offset.
     * @param  {number} yOffset - The y offset.
     * @param  {Tile} tile - The tile.
     * @return {Target}
     */
    constructor(xOffset, yOffset, tile) {
        this._xOffset = xOffset;
        this._yOffset = yOffset;
        this._tile = tile;
    }
    get xOffset() {
        return this._xOffset;
    }
    get yOffset() {
        return this._yOffset;
    }
    get tile() {
        return this._tile;
    }
}
/**
 * Class representing a grid.
 */
class Grid {
    /**
     * Creates a grid.
     * @param  {number} width - The width.
     * @param  {number} height - The height.
     * @return {Grid}
     */
    constructor(width, height) {
        this._width = width;
        this._height = height;
        this._tiles = [];
        for (let x = 0; x < width; x++) {
            this._tiles[x] = [];
            for (let y = 0; y < height; y++) {
                this._tiles[x][y] = new Tile(Tileset.CharTransparent, 0);
            }
        }
    }
    get width() {
        return this._width;
    }
    get height() {
        return this._height;
    }
    get tiles() {
        return this._tiles;
    }
}
/**
 * Class representing a control.
 */
class Control {
    /**
     * Creates a control.
     * @return {Control}
     */
    constructor() {
        this._x = 0;
        this._y = 0;
        this._xDown = 0;
        this._yDown = 0;
        this._xUp = 0;
        this._yUp = 0;
        this._xContextMenu = 0;
        this._yContextMenu = 0;
        this._kKeyDown = 0;
    }
    get x() {
        return this._x;
    }
    get y() {
        return this._y;
    }
    get xDown() {
        return this._xDown;
    }
    get yDown() {
        return this._yDown;
    }
    get xUp() {
        return this._xUp;
    }
    get yUp() {
        return this._yUp;
    }
    get xContextMenu() {
        return this._xUp;
    }
    get yContextMenu() {
        return this._yUp;
    }
    get kKeyDown() {
        return this._kKeyDown;
    }
    /**
     * Triggers mouse down.
     */
    mouseDown(event) {
        event.preventDefault();
        this._xDown = Math.floor(event.layerX / Tileset.TileWidthInPixel);
        this._yDown = Math.floor(event.layerY / Tileset.TileHeightInPixel);
    }
    /**
     * Triggers mouse up.
     */
    mouseUp(event) {
        event.preventDefault();
        this._xUp = Math.floor(event.layerX / Tileset.TileWidthInPixel);
        this._yUp = Math.floor(event.layerY / Tileset.TileHeightInPixel);
    }
    /**
     * Triggers mouse move.
     */
    mouseMove(event) {
        event.preventDefault();
        this._x = Math.floor(event.layerX / Tileset.TileWidthInPixel);
        this._y = Math.floor(event.layerY / Tileset.TileHeightInPixel);
    }
    /**
     * Triggers context menu.
     */
    contextMenu(event) {
        event.preventDefault();
        this._xContextMenu = Math.floor(event.layerX / Tileset.TileWidthInPixel);
        this._yContextMenu = Math.floor(event.layerY / Tileset.TileHeightInPixel);
    }
    /**
     * Triggers key down.
     */
    keyDown(event) {
        this._kKeyDown = event.keyCode;
    }
}
/**
 * Class representing a tile.
 */
class Tile {
    /**
     * Creates a tile.
     * @param  {number} char - The character.
     * @param  {number} z - The z.
     * @return {Tile}
     */
    constructor(char, z) {
        this._char = char;
        this._z = z;
    }
    get character() {
        return this._char;
    }
    set character(value) {
        this._char = value;
    }
    get z() {
        return this._z;
    }
    set z(value) {
        this._z = value;
    }
}
/**
 * Class representing a tileset.
 */
class Tileset {
    /**
     * Gets the tileset info.
     */
    static get TilesetSourceImage() {
        return './src/Engine/img/cp437_16x16.png';
    }
    static get TilesetWidthInTile() {
        return 16;
    }
    static get TilesetHeightInTile() {
        return 16;
    }
    /**
     * Gets the tile info.
     */
    static get TileWidthInPixel() {
        return 16;
    }
    static get TileHeightInPixel() {
        return 16;
    }
    /**
     * Gets the characters info.
     */
    static get CharTransparent() {
        return 0;
    }
    static get CharFill() {
        return 219;
    }
    static get CharSmallDot() {
        return 250;
    }
    static get CharBigDot() {
        return 249;
    }
    static get CharSimpleBorderTopLeft() {
        return 218;
    }
    static get CharSimpleBorderTopRight() {
        return 191;
    }
    static get CharSimpleBorderBottomLeft() {
        return 192;
    }
    static get CharSimpleBorderBottomRight() {
        return 217;
    }
    static get CharSimpleBorderHorizontal() {
        return 196;
    }
    static get CharSimpleBorderVertical() {
        return 179;
    }
    static get CharDoubleBorderTopLeft() {
        return 201;
    }
    static get CharDoubleBorderTopRight() {
        return 187;
    }
    static get CharDoubleBorderBottomLeft() {
        return 200;
    }
    static get CharDoubleBorderBottomRight() {
        return 188;
    }
    static get CharDoubleBorderHorizontal() {
        return 205;
    }
    static get CharDoubleBorderVertical() {
        return 186;
    }
    /**
     * Gets the colors info.
     */
    static get COLOR_BLACK() {
        return "black";
    }
    static get COLOR_WHITE() {
        return "white";
    }
    static get COLOR_RED() {
        return "red";
    }
    static get COLOR_GREEN() {
        return "green";
    }
    static get COLOR_BLUE() {
        return "blue";
    }
}
/// <reference path="Animation/Animation.ts"/>
/// <reference path="Animation/Frame.ts"/>
/// <reference path="Animation/Target.ts"/>
/// <reference path="Grid.ts"/>
/// <reference path="Control.ts"/>
/// <reference path="Tile.ts"/>
/// <reference path="Tileset.ts"/>
/**
 * Class representing an engine.
 */
class Engine {
    /**
     * Creates an engine.
     * @constructor
     * @param {number} width - The width in tile.
     * @param {number} height - The width in tile.
     * @return {Engine}
     */
    constructor(width, height) {
        this._fps = 1000 / 60;
        this._canvas = document.createElement('canvas');
        this._canvas.id = 'canvas';
        this._canvas.width = width * Tileset.TileWidthInPixel;
        this._canvas.height = height * Tileset.TileHeightInPixel;
        this._image = new Image();
        this._image.src = Tileset.TilesetSourceImage;
        this._context = this._canvas.getContext('2d');
        this._control = new Control();
        this._grid = new Grid(width, height);
        this._animations = [];
        // test animation
        this._animations = [
            new Animation(0, 0, [
                new Frame([new Target(0, 0, new Tile(Tileset.CharBigDot, 0))]),
                new Frame([new Target(1, 0, new Tile(Tileset.CharBigDot, 0))]),
                new Frame([new Target(2, 0, new Tile(Tileset.CharBigDot, 0))]),
                new Frame([new Target(3, 0, new Tile(Tileset.CharBigDot, 0))]),
                new Frame([new Target(4, 0, new Tile(Tileset.CharBigDot, 0))]),
                new Frame([new Target(5, 0, new Tile(Tileset.CharBigDot, 0))]),
                new Frame([new Target(6, 0, new Tile(Tileset.CharBigDot, 0))]),
                new Frame([new Target(7, 0, new Tile(Tileset.CharBigDot, 0))]),
                new Frame([new Target(8, 0, new Tile(Tileset.CharBigDot, 0))]),
                new Frame([new Target(9, 0, new Tile(Tileset.CharBigDot, 0))])
            ])
        ];
    }
    /**
     * Initializes the engine.
     */
    init() {
        window.onload = function () {
            document.body.appendChild(this._canvas);
            document.getElementById('canvas').appendChild(this._image);
            document.addEventListener('keydown', this.propagateKeyDown.bind(this));
            this._canvas.addEventListener('mousedown', this.propagateMouseDown.bind(this));
            this._canvas.addEventListener('mouseup', this.propagateMouseUp.bind(this));
            this._canvas.addEventListener('contextmenu', this.propagateContextMenu.bind(this));
            this._canvas.addEventListener('mousemove', this.propagateMouseMove.bind(this));
        }.bind(this);
    }
    /**
     * Starts the engine.
     */
    start() {
        this._pid = setInterval(function () {
            this.clear();
            this.draw();
        }.bind(this), this._fps);
    }
    /**
     * Stops the engine.
     */
    stop() {
        clearInterval(this._pid);
    }
    /**
     * Clears the engine.
     */
    clear() {
        this._context.clearRect(0, 0, this._canvas.width, this._canvas.height);
    }
    /**
     * Draws the engine.
     */
    draw() {
        let sx = 0;
        let sy = 0;
        let sWidth = Tileset.TileWidthInPixel;
        let sHeight = Tileset.TileHeightInPixel;
        let dx = 0;
        let dy = 0;
        let dWidth = Tileset.TileWidthInPixel;
        let dHeight = Tileset.TileHeightInPixel;
        // grid layer
        for (let x = 0; x < this._grid.width; x++) {
            for (let y = 0; y < this._grid.height; y++) {
                sx = Tileset.TileWidthInPixel * (this._grid.tiles[x][y].character % Tileset.TilesetWidthInTile);
                sy = Tileset.TileHeightInPixel * Math.floor(this._grid.tiles[x][y].character / Tileset.TilesetHeightInTile);
                dx = Tileset.TileWidthInPixel * x;
                dy = Tileset.TileHeightInPixel * y;
                this._context.drawImage(this._image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
            }
        }
        // animation layer
        let animations = new Array();
        for (let i = 0; i < this._animations.length; i++) {
            animations.push(this._animations[i]);
        }
        let frames = new Array();
        for (let i = 0; i < this._animations.length; i++) {
            frames.push(this._animations[i].frames.pop());
        }
        let targets = new Array();
        for (let i = 0; i < frames.length; i++) {
            targets.push(frames[i].targets.pop());
        }
        for (let i = 0; i < targets.length; i++) {
            sx = Tileset.TileWidthInPixel * (targets[i].tile.character % Tileset.TilesetWidthInTile);
            sy = Tileset.TileHeightInPixel * Math.floor(targets[i].tile.character / Tileset.TilesetHeightInTile);
            dx = Tileset.TileWidthInPixel * (this._animations[i].x + this._animations[i].frames[j].targets[k].xOffset);
            dy = Tileset.TileHeightInPixel * (this._animations[i].y + this._animations[i].frames[j].targets[k].yOffset);
            this._context.drawImage(this._image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
        }
        // mouse layer
        sx = Tileset.TileWidthInPixel * (Tileset.CharFill % Tileset.TilesetWidthInTile);
        sy = Tileset.TileHeightInPixel * Math.floor(Tileset.CharFill / Tileset.TilesetHeightInTile);
        dx = Tileset.TileWidthInPixel * this._control.x;
        dy = Tileset.TileHeightInPixel * this._control.y;
        this._context.drawImage(this._image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
    }
    /**
     * Propagates mouse down event.
     */
    propagateMouseDown(event) {
        event.preventDefault();
        this._control.mouseDown(event);
    }
    /**
     * Propagates mouse up event.
     */
    propagateMouseUp(event) {
        event.preventDefault();
        this._control.mouseUp(event);
    }
    /**
     * Propagates context menu event.
     */
    propagateContextMenu(event) {
        event.preventDefault();
        this._control.contextMenu(event);
    }
    /**
     * Propagates mouse move event.
     */
    propagateMouseMove(event) {
        event.preventDefault();
        this._control.mouseMove(event);
    }
    /**
     * Propagates key down event.
     */
    propagateKeyDown(event) {
        this._control.keyDown(event);
    }
}
/**
 * Enum representing an attack roll result.
 */
var AttackRollResultEnum;
(function (AttackRollResultEnum) {
    AttackRollResultEnum[AttackRollResultEnum["CRITICAL"] = 0] = "CRITICAL";
    AttackRollResultEnum[AttackRollResultEnum["HIT"] = 1] = "HIT";
    AttackRollResultEnum[AttackRollResultEnum["MISS"] = 2] = "MISS";
})(AttackRollResultEnum || (AttackRollResultEnum = {}));
/**
 * Enum representing a class.
 */
var ClassEnum;
(function (ClassEnum) {
    ClassEnum[ClassEnum["CLERIC"] = 0] = "CLERIC";
    ClassEnum[ClassEnum["FIGHTER"] = 1] = "FIGHTER";
    ClassEnum[ClassEnum["ROGUE"] = 2] = "ROGUE";
    ClassEnum[ClassEnum["WIZARD"] = 3] = "WIZARD";
})(ClassEnum || (ClassEnum = {}));
/**
 * Enum representing a race.
 */
var RaceEnum;
(function (RaceEnum) {
    RaceEnum[RaceEnum["DWARF_HILL"] = 0] = "DWARF_HILL";
    RaceEnum[RaceEnum["DWARF_MOUNTAIN"] = 1] = "DWARF_MOUNTAIN";
    RaceEnum[RaceEnum["ELF_HIGH"] = 2] = "ELF_HIGH";
    RaceEnum[RaceEnum["ELF_WOOD"] = 3] = "ELF_WOOD";
    RaceEnum[RaceEnum["HALFLING_LIGHTFOOT"] = 4] = "HALFLING_LIGHTFOOT";
    RaceEnum[RaceEnum["HALFLING_STOUT"] = 5] = "HALFLING_STOUT";
    RaceEnum[RaceEnum["HUMAN"] = 6] = "HUMAN";
})(RaceEnum || (RaceEnum = {}));
/**
 * Class representing a logger.
 */
class Logger {
    /**
     * Logs an attack and damage roll.
     * @param {string} actorName - The actor name.
     * @param {AttackRollResultEnum} attackRollResultId - The attack roll result id.
     * @param {number} d20Roll - The d20 roll.
     * @param {number} abilityModifierScore - The ability modifier score.
     * @param {number} armorClass - The armor class.
     * @param {Array<number>} damages - The damages.
     * @param {DamageTypeEnum} damageTypeId - The damage type id.
     */
    static AttackDamage(actorName, attackRollResultId, d20Roll, abilityModifierScore, armorClass, damages, damageTypeId) {
        switch (attackRollResultId) {
            case AttackRollResultEnum.CRITICAL:
            case AttackRollResultEnum.HIT:
                console.log(actorName + " " + Converter.AttackRollResultEnumToString(attackRollResultId) + " [Roll:" + d20Roll + " + Mod:" + abilityModifierScore + " vs AC:" + armorClass + "] for " + damages.reduce((a, b) => a + b, 0) + " " + this.DamagesToString(damages) + " " + Converter.DamageTypeEnumToString(damageTypeId) + " damage");
                break;
            case AttackRollResultEnum.MISS:
                console.log(actorName + " " + Converter.AttackRollResultEnumToString(attackRollResultId) + " [Roll:" + d20Roll + " + Mod:" + abilityModifierScore + " vs AC:" + armorClass + "]");
                break;
        }
    }
    /**
     * Logs an attack and damage roll.
     * @param {string} actorName - The actor name.
     * @param {number} currentHitPoint - The current hit point.
     * @param {number} maximumHitPoint - The maximum hit point.
     */
    static HitPoints(actorName, currentHitPoint, maximumHitPoint) {
        console.log(actorName + " Hit Points: " + currentHitPoint + "/" + maximumHitPoint);
    }
    /**
     * Gets the string value of damages.
     * @param {Array<number>} damages - The damages.
     */
    static DamagesToString(damages) {
        let result = "[";
        for (let i = 0; i < damages.length; i++) {
            if (i + 1 < damages.length) {
                result += "Roll:" + damages[i] + " + ";
            }
            else {
                result += "Mod:" + damages[i];
            }
        }
        return result + "]";
    }
}
/**
 * Class representing a ruleset.
 */
class Ruleset {
    /**
     * Gets the ability modifier of the given ability score.
     * @param {number} abilityScore - The ability score.
     * @return {number}
     */
    static AbilityModifier(abilityScore) {
        return Math.floor((abilityScore - 10) / 2);
    }
    /**
     * Gets the ability id of given skill id.
     * @param {SkillEnum} skillId - The skill id.
     * @return {AbilityEnum}
     */
    static SkillAbility(skillId) {
        switch (skillId) {
            case SkillEnum.ATHLETICS:
                return AbilityEnum.STRENGTH;
            case SkillEnum.ACROBATICS:
            case SkillEnum.SLEIGHT_OF_HAND:
            case SkillEnum.STEALTH:
                return AbilityEnum.DEXTERITY;
            case SkillEnum.ARCANA:
            case SkillEnum.HISTORY:
            case SkillEnum.INVESTIGATION:
            case SkillEnum.NATURE:
            case SkillEnum.RELIGION:
                return AbilityEnum.INTELLIGENCE;
            case SkillEnum.ANIMAL_HANDLING:
            case SkillEnum.INSIGHT:
            case SkillEnum.MEDICINE:
            case SkillEnum.PERCEPTION:
            case SkillEnum.SURVIVAL:
                return AbilityEnum.WISDOM;
            case SkillEnum.DECEPTION:
            case SkillEnum.INTIMIDATION:
            case SkillEnum.PERFORMANCE:
            case SkillEnum.PERSUASION:
                return AbilityEnum.CHARISMA;
            default:
                throw new Error("Parameter 'skillId' must be in the 'SkillEnum' range.");
        }
    }
    /**
     * Gets the ability id of the given weapon type id.
     * @param {WeaponTypeEnum} weaponTypeId - The weapon type id.
     * @return {AbilityEnum}
     */
    static WeaponAbility(weaponTypeId) {
        switch (weaponTypeId) {
            case WeaponTypeEnum.CLUB:
            case WeaponTypeEnum.DAGGER:
            case WeaponTypeEnum.GREATCLUB:
            case WeaponTypeEnum.HANDAXE:
            case WeaponTypeEnum.JAVELIN:
            case WeaponTypeEnum.LIGHT_HAMMER:
            case WeaponTypeEnum.MACE:
            case WeaponTypeEnum.QUARTERSTAFF:
            case WeaponTypeEnum.SICKLE:
            case WeaponTypeEnum.SPEAR:
            case WeaponTypeEnum.BATTLEAXE:
            case WeaponTypeEnum.FLAIL:
            case WeaponTypeEnum.GLAIVE:
            case WeaponTypeEnum.GREATAXE:
            case WeaponTypeEnum.GREATSWORD:
            case WeaponTypeEnum.HALBERD:
            case WeaponTypeEnum.LANCE:
            case WeaponTypeEnum.LONGSWORD:
            case WeaponTypeEnum.MAUL:
            case WeaponTypeEnum.MORNINGSTAR:
            case WeaponTypeEnum.PIKE:
            case WeaponTypeEnum.RAPIER:
            case WeaponTypeEnum.SCIMITAR:
            case WeaponTypeEnum.SHORTSWORD:
            case WeaponTypeEnum.TRIDENT:
            case WeaponTypeEnum.WAR_PICK:
            case WeaponTypeEnum.WARHAMMER:
            case WeaponTypeEnum.WHIP:
                return AbilityEnum.STRENGTH;
            case WeaponTypeEnum.LIGHT_CROSSBOW:
            case WeaponTypeEnum.DART:
            case WeaponTypeEnum.SHORTBOW:
            case WeaponTypeEnum.SLING:
            case WeaponTypeEnum.BLOWGUN:
            case WeaponTypeEnum.HAND_CROSSBOW:
            case WeaponTypeEnum.HEAVY_CROSSBOW:
            case WeaponTypeEnum.LONGBOW:
            case WeaponTypeEnum.NET:
                return AbilityEnum.DEXTERITY;
            default:
                throw new Error("Parameter 'weaponTypeId' must be in the 'WeaponTypeEnum' range.");
        }
    }
    /**
     * Gets the proficiency bonus of the given level.
     * @param {number} level - The level.
     * @return {number}
     */
    static ProficiencyBonus(level) {
        if (level > 16) {
            return 6;
        }
        else if (level > 12) {
            return 5;
        }
        else if (level > 8) {
            return 4;
        }
        else if (level > 4) {
            return 3;
        }
        else {
            return 2;
        }
    }
    /**
     * Gets the encumberment of the given strength score.
     * @param {number} strengthScore - The strength score.
     * @return {number}
     */
    static Encumberment(strengthScore) {
        return 15 * (strengthScore + this.AbilityModifier(strengthScore));
    }
    /**
     * Gets the passive perception of the given perception score.
     * @param {number} perceptionScore - The perception score.
     * @return {number}
     */
    static PassivePerception(perceptionScore) {
        return 10 + perceptionScore;
    }
    /**
     * Gets the initiative of the given dexterity score.
     * @param {number} dexterityScore - The dexterity score.
     * @return {number}
     */
    static Initiative(dexterityScore) {
        return this.AbilityModifier(dexterityScore);
    }
    /**
     * Gets the strength bonus of the given race.
     * @param {RaceEnum} raceId - The race id.
     * @return {number}
     */
    static RaceStrength(raceId) {
        switch (raceId) {
            case RaceEnum.DWARF_HILL:
                return 0;
            case RaceEnum.DWARF_MOUNTAIN:
                return 2;
            case RaceEnum.ELF_HIGH:
            case RaceEnum.ELF_WOOD:
                return 0;
            case RaceEnum.HALFLING_LIGHTFOOT:
            case RaceEnum.HALFLING_STOUT:
                return 0;
            case RaceEnum.HUMAN:
                return 1;
            default:
                throw new Error("Parameter 'raceId' must be in the 'RaceEnum' range.");
        }
    }
    /**
     * Gets the dexterity bonus of the given race.
     * @param {RaceEnum} raceId - The race id.
     * @return {number}
     */
    static RaceDexterity(raceId) {
        switch (raceId) {
            case RaceEnum.DWARF_HILL:
            case RaceEnum.DWARF_MOUNTAIN:
                return 0;
            case RaceEnum.ELF_HIGH:
            case RaceEnum.ELF_WOOD:
                return 2;
            case RaceEnum.HALFLING_LIGHTFOOT:
            case RaceEnum.HALFLING_STOUT:
                return 2;
            case RaceEnum.HUMAN:
                return 1;
            default:
                throw new Error("Parameter 'raceId' must be in the 'RaceEnum' range.");
        }
    }
    /**
     * Gets the constitution bonus of the given race.
     * @param {RaceEnum} raceId - The race id.
     * @return {number}
     */
    static RaceConstitution(raceId) {
        switch (raceId) {
            case RaceEnum.DWARF_HILL:
            case RaceEnum.DWARF_MOUNTAIN:
                return 2;
            case RaceEnum.ELF_HIGH:
            case RaceEnum.ELF_WOOD:
                return 0;
            case RaceEnum.HALFLING_LIGHTFOOT:
                return 0;
            case RaceEnum.HALFLING_STOUT:
                return 1;
            case RaceEnum.HUMAN:
                return 1;
            default:
                throw new Error("Parameter 'raceId' must be in the 'RaceEnum' range.");
        }
    }
    /**
     * Gets the intelligence bonus of the given race.
     * @param {RaceEnum} raceId - The race id.
     * @return {number}
     */
    static RaceIntelligence(raceId) {
        switch (raceId) {
            case RaceEnum.DWARF_HILL:
            case RaceEnum.DWARF_MOUNTAIN:
                return 0;
            case RaceEnum.ELF_HIGH:
                return 1;
            case RaceEnum.ELF_WOOD:
                return 0;
            case RaceEnum.HALFLING_LIGHTFOOT:
            case RaceEnum.HALFLING_STOUT:
                return 0;
            case RaceEnum.HUMAN:
                return 1;
            default:
                throw new Error("Parameter 'raceId' must be in the 'RaceEnum' range.");
        }
    }
    /**
     * Gets the wisdom bonus of the given race.
     * @param {RaceEnum} raceId - The race id.
     * @return {number}
     */
    static RaceWisdom(raceId) {
        switch (raceId) {
            case RaceEnum.DWARF_HILL:
                return 1;
            case RaceEnum.DWARF_MOUNTAIN:
                return 0;
            case RaceEnum.ELF_HIGH:
                return 0;
            case RaceEnum.ELF_WOOD:
                return 1;
            case RaceEnum.HALFLING_LIGHTFOOT:
            case RaceEnum.HALFLING_STOUT:
                return 0;
            case RaceEnum.HUMAN:
                return 1;
            default:
                throw new Error("Parameter 'raceId' must be in the 'RaceEnum' range.");
        }
    }
    /**
     * Gets the charisma bonus of the given race.
     * @param {RaceEnum} raceId - The race id.
     * @return {number}
     */
    static RaceCharisma(raceId) {
        switch (raceId) {
            case RaceEnum.DWARF_HILL:
            case RaceEnum.DWARF_MOUNTAIN:
                return 0;
            case RaceEnum.ELF_HIGH:
            case RaceEnum.ELF_WOOD:
                return 0;
            case RaceEnum.HALFLING_LIGHTFOOT:
                return 1;
            case RaceEnum.HALFLING_STOUT:
                return 0;
            case RaceEnum.HUMAN:
                return 1;
            default:
                throw new Error("Parameter 'raceId' must be in the 'RaceEnum' range.");
        }
    }
    /**
     * Gets the speed of the given race.
     * @param {RaceEnum} raceId - The race id.
     * @return {number}
     */
    static RaceSpeed(raceId) {
        switch (raceId) {
            case RaceEnum.DWARF_HILL:
            case RaceEnum.DWARF_MOUNTAIN:
                return 25;
            case RaceEnum.ELF_HIGH:
                return 30;
            case RaceEnum.ELF_WOOD:
                return 35;
            case RaceEnum.HALFLING_LIGHTFOOT:
            case RaceEnum.HALFLING_STOUT:
                return 25;
            case RaceEnum.HUMAN:
                return 30;
            default:
                throw new Error("Parameter 'raceId' must be in the 'RaceEnum' range.");
        }
    }
    /**
     * Gets the maximum hit point of the given level, race, class and constitution score.
     * @param {number} level - The level.
     * @param {RaceEnum} raceId - The race id.
     * @param {ClassEnum} classId - The class id.
     * @param {number} constitutionScore - The constitution score.
     * @return {number}
     */
    static MaximumHitPoint(level, raceId, classId, constitutionScore) {
        let result = 0;
        switch (raceId) {
            case RaceEnum.DWARF_HILL:
                result += level;
                break;
            case RaceEnum.DWARF_MOUNTAIN:
            case RaceEnum.ELF_HIGH:
            case RaceEnum.ELF_WOOD:
            case RaceEnum.HALFLING_LIGHTFOOT:
            case RaceEnum.HALFLING_STOUT:
            case RaceEnum.HUMAN:
                result += 0;
                break;
            default:
                throw new Error("Parameter 'raceId' must be in the 'RaceEnum' range.");
        }
        switch (classId) {
            case ClassEnum.CLERIC:
            case ClassEnum.ROGUE:
                result += level * (8 + this.AbilityModifier(constitutionScore));
                break;
            case ClassEnum.FIGHTER:
                result += level * (10 + this.AbilityModifier(constitutionScore));
                break;
            case ClassEnum.WIZARD:
                result += level * (6 + this.AbilityModifier(constitutionScore));
                break;
            default:
                throw new Error("Parameter 'classId' must be in the 'ClassEnum' range.");
        }
        return result;
    }
    /**
     * Gets the armor proficiencies of the given class.
     * @param {ClassEnum} classId - The class id.
     * @return {Array<ArmorTypeEnum>}
     */
    static ArmorProficiencies(classId) {
        switch (classId) {
            case ClassEnum.CLERIC:
                return [ArmorTypeEnum.PADDED, ArmorTypeEnum.LEATHER, ArmorTypeEnum.STUDDED_LEATHER, ArmorTypeEnum.HIDE, ArmorTypeEnum.CHAIN_SHIRT, ArmorTypeEnum.SCALE_MAIL, ArmorTypeEnum.BREASTPLATE, ArmorTypeEnum.HALF_PLATE, ArmorTypeEnum.SHIELD];
            case ClassEnum.FIGHTER:
                return [ArmorTypeEnum.PADDED, ArmorTypeEnum.LEATHER, ArmorTypeEnum.STUDDED_LEATHER, ArmorTypeEnum.HIDE, ArmorTypeEnum.CHAIN_SHIRT, ArmorTypeEnum.SCALE_MAIL, ArmorTypeEnum.BREASTPLATE, ArmorTypeEnum.HALF_PLATE, ArmorTypeEnum.RING_MAIL, ArmorTypeEnum.CHAIN_MAIL, ArmorTypeEnum.SPLINT, ArmorTypeEnum.PLATE, ArmorTypeEnum.SHIELD];
            case ClassEnum.ROGUE:
                return [ArmorTypeEnum.PADDED, ArmorTypeEnum.LEATHER, ArmorTypeEnum.STUDDED_LEATHER, ArmorTypeEnum.HIDE];
            case ClassEnum.WIZARD:
                return [];
            default:
                throw new Error("Parameter 'classId' must be in the 'ClassEnum' range.");
        }
    }
    /**
     * Gets the weapon proficiencies of the given class.
     * @param {ClassEnum} classId - The class id.
     * @return {Array<WeaponTypeEnum>}
     */
    static WeaponProficiencies(classId) {
        switch (classId) {
            case ClassEnum.CLERIC:
                return [WeaponTypeEnum.CLUB, WeaponTypeEnum.DAGGER, WeaponTypeEnum.GREATCLUB, WeaponTypeEnum.HANDAXE, WeaponTypeEnum.JAVELIN, WeaponTypeEnum.LIGHT_HAMMER, WeaponTypeEnum.MACE, WeaponTypeEnum.QUARTERSTAFF, WeaponTypeEnum.SICKLE, WeaponTypeEnum.SPEAR, WeaponTypeEnum.LIGHT_CROSSBOW, WeaponTypeEnum.DART, WeaponTypeEnum.SHORTBOW, WeaponTypeEnum.SLING];
            case ClassEnum.FIGHTER:
                return [WeaponTypeEnum.CLUB, WeaponTypeEnum.DAGGER, WeaponTypeEnum.GREATCLUB, WeaponTypeEnum.HANDAXE, WeaponTypeEnum.JAVELIN, WeaponTypeEnum.LIGHT_HAMMER, WeaponTypeEnum.MACE, WeaponTypeEnum.QUARTERSTAFF, WeaponTypeEnum.SICKLE, WeaponTypeEnum.SPEAR, WeaponTypeEnum.LIGHT_CROSSBOW, WeaponTypeEnum.DART, WeaponTypeEnum.SHORTBOW, WeaponTypeEnum.SLING, WeaponTypeEnum.BATTLEAXE, WeaponTypeEnum.FLAIL, WeaponTypeEnum.GLAIVE, WeaponTypeEnum.GREATAXE, WeaponTypeEnum.GREATSWORD, WeaponTypeEnum.HALBERD, WeaponTypeEnum.LANCE, WeaponTypeEnum.LONGSWORD, WeaponTypeEnum.MAUL, WeaponTypeEnum.MORNINGSTAR, WeaponTypeEnum.PIKE, WeaponTypeEnum.RAPIER, WeaponTypeEnum.SCIMITAR, WeaponTypeEnum.SHORTSWORD, WeaponTypeEnum.TRIDENT, WeaponTypeEnum.WAR_PICK, WeaponTypeEnum.WARHAMMER, WeaponTypeEnum.WHIP, WeaponTypeEnum.BLOWGUN, WeaponTypeEnum.HAND_CROSSBOW, WeaponTypeEnum.HEAVY_CROSSBOW, WeaponTypeEnum.LONGBOW, WeaponTypeEnum.NET];
            case ClassEnum.ROGUE:
                return [WeaponTypeEnum.CLUB, WeaponTypeEnum.DAGGER, WeaponTypeEnum.GREATCLUB, WeaponTypeEnum.HANDAXE, WeaponTypeEnum.JAVELIN, WeaponTypeEnum.LIGHT_HAMMER, WeaponTypeEnum.MACE, WeaponTypeEnum.QUARTERSTAFF, WeaponTypeEnum.SICKLE, WeaponTypeEnum.SPEAR, WeaponTypeEnum.LIGHT_CROSSBOW, WeaponTypeEnum.DART, WeaponTypeEnum.SHORTBOW, WeaponTypeEnum.SLING, WeaponTypeEnum.HAND_CROSSBOW, WeaponTypeEnum.LONGSWORD, WeaponTypeEnum.RAPIER, WeaponTypeEnum.SHORTSWORD];
            case ClassEnum.WIZARD:
                return [WeaponTypeEnum.DAGGER, WeaponTypeEnum.DART, WeaponTypeEnum.SLING, WeaponTypeEnum.QUARTERSTAFF, WeaponTypeEnum.LIGHT_CROSSBOW];
            default:
                throw new Error("Parameter 'classId' must be in the 'ClassEnum' range.");
        }
    }
    /**
     * TODO: Gets the tool proficiencies of the given class.
     * @param {ClassEnum} classId - The class id.
     * @return {Array<WeaponTypeEnum>}
     */
    static ToolProficiencies(classId) {
        switch (classId) {
            case ClassEnum.CLERIC:
                return [];
            case ClassEnum.FIGHTER:
                return [];
            case ClassEnum.ROGUE:
                return [];
            case ClassEnum.WIZARD:
                return [];
            default:
                throw new Error("Parameter 'classId' must be in the 'ClassEnum' range.");
        }
    }
    /**
     * Gets the ability proficiencies of the given class.
     * @param {ClassEnum} classId - The class id.
     * @return {Array<AbilityEnum>}
     */
    static AbilityProficiencies(classId) {
        switch (classId) {
            case ClassEnum.CLERIC:
                return [AbilityEnum.WISDOM, AbilityEnum.CHARISMA];
            case ClassEnum.FIGHTER:
                return [AbilityEnum.STRENGTH, AbilityEnum.CONSTITUTION];
            case ClassEnum.ROGUE:
                return [AbilityEnum.DEXTERITY, AbilityEnum.INTELLIGENCE];
            case ClassEnum.WIZARD:
                return [AbilityEnum.INTELLIGENCE, AbilityEnum.WISDOM];
            default:
                throw new Error("Parameter 'classId' must be in the 'ClassEnum' range.");
        }
    }
    /**
     * TODO: Gets the skill proficiencies of the given class.
     * @param {ClassEnum} classId - The class id.
     * @return {Array<SkillEnum>}
     */
    static SkillProficiencies(classId) {
        switch (classId) {
            case ClassEnum.CLERIC:
                return [];
            case ClassEnum.FIGHTER:
                return [];
            case ClassEnum.ROGUE:
                return [];
            case ClassEnum.WIZARD:
                return [];
            default:
                throw new Error("Parameter 'classId' must be in the 'ClassEnum' range.");
        }
    }
    /**
     * Gets the maximum starting funds of the given class.
     * @param {ClassEnum} classId - The class id.
     * @return {number}
     */
    static MaximumStartingFunds(classId) {
        switch (classId) {
            case ClassEnum.CLERIC:
            case ClassEnum.FIGHTER:
                return 200;
            case ClassEnum.ROGUE:
            case ClassEnum.WIZARD:
                return 160;
            default:
                throw new Error("Parameter 'classId' must be in the 'ClassEnum' range.");
        }
    }
    /**
     * Gets the attack roll result.
     * @param {number} d20Roll - The d20 roll.
     * @param {number} abilityModifierScore - The ability modifier score.
     * @param {number} armorClass - The armor class.
     * @return {AttackRollResultEnum}
     */
    static AttackRollResult(d20Roll, abilityModifierScore, armorClass) {
        if (d20Roll === 20) {
            return AttackRollResultEnum.CRITICAL;
        }
        else if (d20Roll + abilityModifierScore >= armorClass) {
            return AttackRollResultEnum.HIT;
        }
        else {
            return AttackRollResultEnum.MISS;
        }
    }
}
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
let roundQueue = Array();
if (humanInitiativeRoll > orcInitiativeRoll) {
    console.log("Rounds Queue: Human, Orc");
    roundQueue.push(human);
    roundQueue.push(orc);
}
else if (humanInitiativeRoll < orcInitiativeRoll) {
    console.log("Rounds Queue: Orc, Human");
    roundQueue.push(orc);
    roundQueue.push(human);
}
else {
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
/// <reference path="../Enum/ClassEnum.ts"/>
/// <reference path="../Enum/RaceEnum.ts"/>
/**
 * Test Setup
 */
let abilityScores = [15, 14, 13, 12, 10, 8];
let SkillEnumProficiencies = [SkillEnum.ANIMAL_HANDLING, SkillEnum.ATHLETICS, SkillEnum.PERCEPTION, SkillEnum.SURVIVAL];
let character = new Character("Human", 1, RaceEnum.HUMAN, ClassEnum.FIGHTER, abilityScores, SkillEnumProficiencies);
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
