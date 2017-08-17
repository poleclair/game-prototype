/// <reference path="Inventory.ts"/>

/// <reference path="../Enum/AbilityEnum.ts"/>
/// <reference path="../Enum/SkillEnum.ts"/>

/**
 * Class representing a character.
 */
class Character {
    private _name: string;
    private _level: number;
    private _raceId: number;
    private _classId: number;
    private _abilityScores: Array<number>;

    private _speed: number;

    private _maximumHitPoint: number;
    private _currentHitPoint: number;
    private _armorProficiencies: Array<number>;
    private _weaponProficiencies: Array<number>;
    private _toolProficiencies: Array<number>;
    private _abilityProficiencies: Array<number>;
    private _skillProficiencies: Array<number>;
    private _funds: number;

    private _armor: Armor;
    private _shield: Armor;
    private _weapon: Weapon;

    private _proficiencyBonus: number;
    private _initiative: number;
    private _passivePerception: number;
    private _encumberment: number;
    private _inventory: Inventory;

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
    constructor(name: string, level: number, raceId: number, classId: number, abilityScores: Array<number>, skillProficiencies: Array<number>) {
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

    set currentHitPoint(currentHitPoint: number) {
        this._currentHitPoint = currentHitPoint < this.maximumHitPoint ? currentHitPoint : this.maximumHitPoint;
    }

    /**
     * Get the ability score.
     * @param {number} abilityId - The ability id.
     * @return {number}
     */
    getAbilityScore(abilityId: number) {
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
    getAbilityModifier(abilityId: number) {
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
                } else {
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
    getSavingThrow(abilityId: number) {
        return this.getAbilityModifier(abilityId) + (this.isAbilityProficient(abilityId) ? this.proficiencyBonus : 0);
    }

    /**
     * Get the skill.
     * @param {number} skillId - The skill id.
     * @return {number}
     */
    getSkill(skillId: number) {
        return this.getAbilityModifier(Ruleset.SkillAbility(skillId)) + (this.isSkillProficient(skillId) ? this.proficiencyBonus : 0);
    }

    /**
     * Is ability proficient.
     * @param {number} abilityId - The ability id.
     * @return {boolean}
     */
    isAbilityProficient(abilityId: number) {
        return this._abilityProficiencies.indexOf(abilityId) > -1;
    }

    /**
     * Is skill proficient.
     * @param {number} skillId - The skill id.
     * @return {boolean}
     */
    isSkillProficient(skillId: number) {
        return this._skillProficiencies.indexOf(skillId) > -1;
    }

    /**
     * Is armor proficient.
     * @param {number} armorId - The armor id.
     * @return {boolean}
     */
    isArmorProficient(armorId: number) {
        return this._armorProficiencies.indexOf(armorId) > -1;
    }

    /**
     * Is weapon proficient.
     * @param {number} weaponId - The weapon id.
     * @return {boolean}
     */
    isWeaponProficient(weaponId: number) {
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
     * Get the damage roll.
     * @return {number}
     */
    getDamageRoll() {
        return this._weapon.getDamageRoll();
    }

    /**
     * Add an item.
     * @param {Item} item - The item.
     * @return {boolean}
     */
    addItem(item: Item) {
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
    removeItem(item: Item) {
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
    equipItem(item: Item) {
        let result = true;

        if (this._inventory.hasItem(item)) {
            this._inventory.removeItem(item);

            switch (item.itemType) {
                case ItemTypeEnum.LIGHT_ARMOR:
                case ItemTypeEnum.MEDIUM_ARMOR:
                case ItemTypeEnum.HEAVY_ARMOR:
                    this._armor = <Armor>item;
                    break;
                case ItemTypeEnum.SHIELD:
                    this._shield = <Armor>item;
                    break;
                case ItemTypeEnum.SIMPLE_MELEE_WEAPON:
                case ItemTypeEnum.SIMPLE_RANGE_WEAPON:
                case ItemTypeEnum.MARTIAL_MELEE_WEAPON:
                case ItemTypeEnum.MARTIAL_RANGE_WEAPON:
                    this._weapon = <Weapon>item;
                    break;
                default:
                    result = false;
            }
        } else {
            result = false;
        }

        return result;
    }

    /**
     * Unequip an item.
     * @param {Item} item - The item.
     * @return {boolean}
     */
    unequipItem(item: Item) {
        let result = true;

        if (this._armor !== null && this._armor.name === item.name) {
            this._inventory.addItem(this._armor);
            this._armor = null;
        } else if (this._shield !== null && this._shield.name === item.name) {
            this._inventory.addItem(this._shield);
            this._shield = null;
        } else if (this._weapon !== null && this._weapon.name === item.name) {
            this._inventory.addItem(this._weapon);
            this._weapon = null;
        } else {
            result = false;
        }

        return result;
    }
}