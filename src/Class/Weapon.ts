/// <reference path="Item.ts"/>

/**
 * Class representing a weapon.
 * @extends Item
 */
class Weapon extends Item {
    private _damages: Array<number>;
    private _secondaryDamages: Array<number>;
    private _damageType: number;
    private _properties: Array<number>;
    private _ranges: Array<number>;
    private _weaponType: number;

    /**
     * Create a weapon.
     * @param {string} name - The name.
     * @param {number} cost - The cost.
     * @param {number} weight - The weight.
     * @param {number} itemType - The item type.
     * @param {Array<number>} damages - The damage array.
     * @param {Array<number>} secondaryDamages - The secondary damage array.
     * @param {number} damageType - The damage type.
     * @param {Array<number>} properties - The property array.
     * @param {Array<number>} ranges - The range array.
     * @param {number} weaponType - The weapon type.
     * @return {Weapon}
     */
    constructor(name: string, cost: number, weight: number, itemType: number, damages: Array<number>, secondaryDamages: Array<number>, damageType: number, properties: Array<number>, ranges: Array<number>, weaponType: number) {
        super(name, cost, weight, itemType);

        this._damages = damages;
        this._secondaryDamages = secondaryDamages;
        this._damageType = damageType;
        this._properties = properties;
        this._ranges = ranges;
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

    get ranges() {
        return this._ranges;
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