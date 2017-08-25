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