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
     * Gets the string value of an damage type id.
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
     * Gets the string value of an race id.
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
}