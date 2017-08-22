/**
 * Class representing a ruleset.
 */
class Ruleset {
    /**
     * Gets the ability modifier of the given ability score.
     * @param {number} abilityScore - The ability score.
     * @return {number}
     */
    static AbilityModifier(abilityScore: number) {
        return Math.floor((abilityScore - 10) / 2);
    }

    /**
     * Gets the ability id of given skill id.
     * @param {SkillEnum} skillId - The skill id.
     * @return {AbilityEnum}
     */
    static SkillAbility(skillId: SkillEnum) {
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
    static WeaponAbility(weaponTypeId: WeaponTypeEnum) {
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
    static ProficiencyBonus(level: number) {
        if (level > 16) {
            return 6;
        } else if (level > 12) {
            return 5;
        } else if (level > 8) {
            return 4;
        } else if (level > 4) {
            return 3;
        } else {
            return 2;
        }
    }

    /**
     * Gets the encumberment of the given strength score.
     * @param {number} strengthScore - The strength score.
     * @return {number}
     */
    static Encumberment(strengthScore: number) {
        return 15 * (strengthScore + this.AbilityModifier(strengthScore));
    }

    /**
     * Gets the passive perception of the given perception score.
     * @param {number} perceptionScore - The perception score.
     * @return {number}
     */
    static PassivePerception(perceptionScore: number) {
        return 10 + perceptionScore;
    }

    /**
     * Gets the initiative of the given dexterity score.
     * @param {number} dexterityScore - The dexterity score.
     * @return {number}
     */
    static Initiative(dexterityScore: number) {
        return this.AbilityModifier(dexterityScore);
    }

    /**
     * Gets the strength bonus of the given race.
     * @param {RaceEnum} raceId - The race id.
     * @return {number}
     */
    static RaceStrength(raceId: RaceEnum) {
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
    static RaceDexterity(raceId: RaceEnum) {
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
    static RaceConstitution(raceId: RaceEnum) {
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
    static RaceIntelligence(raceId: RaceEnum) {
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
    static RaceWisdom(raceId: RaceEnum) {
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
    static RaceCharisma(raceId: RaceEnum) {
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
    static RaceSpeed(raceId: RaceEnum) {
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
    static MaximumHitPoint(level: number, raceId: RaceEnum, classId: ClassEnum, constitutionScore: number) {
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
    static ArmorProficiencies(classId: ClassEnum) {
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
    static WeaponProficiencies(classId: ClassEnum) {
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
    static ToolProficiencies(classId: ClassEnum) {
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
    static AbilityProficiencies(classId: ClassEnum) {
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
    static SkillProficiencies(classId: ClassEnum) {
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
    static MaximumStartingFunds(classId: ClassEnum) {
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
    static AttackRollResult(d20Roll: number, abilityModifierScore: number, armorClass: number) {
        if (d20Roll === 20) {
            return AttackRollResultEnum.CRITICAL;
        } else if (d20Roll + abilityModifierScore >= armorClass) {
            return AttackRollResultEnum.HIT;
        } else {
            return AttackRollResultEnum.MISS;
        }
    }
}