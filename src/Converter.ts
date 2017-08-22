/**
 * Class representing a converter.
 */
class Converter {
    /**
     * Gets the string value of an ability id.
     * @param {AbilityEnum} abilityId - The ability id.
     * @return {number}
     */
    static AbilityEnum(abilityId: AbilityEnum) {
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
    static ArmorTypeEnum(armorTypeId: ArmorTypeEnum) {
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
    static AttackRollResultEnum(attackRollResultId: AttackRollResultEnum) {
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
    static ClassEnum(classId: ClassEnum) {
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
    static DamageTypeEnum(damageTypeId: DamageTypeEnum) {
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
    static ItemTypeEnum(itemTypeId: ItemTypeEnum) {
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
    static RaceEnum(raceId: RaceEnum) {
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
    static SkillEnum(skillId: SkillEnum) {
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
    static WeaponPropertyEnum(weaponPropertyId: WeaponPropertyEnum) {
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
    static WeaponTypeEnum(weaponTypeId: WeaponTypeEnum) {
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