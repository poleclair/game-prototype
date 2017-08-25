/**
 * Class representing a weapon.
 * @extends Item
 */
class Weapon extends Item {
    private _damages: Array<number>;
    private _secondaryDamages: Array<number>;
    private _damageType: DamageTypeEnum;
    private _properties: Array<WeaponPropertyEnum>;
    private _weaponRange: WeaponRange;
    private _weaponType: WeaponTypeEnum;

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
    constructor(name: string, cost: number, weight: number, itemType: ItemTypeEnum, damages: Array<number>, secondaryDamages: Array<number>, damageType: DamageTypeEnum, properties: Array<WeaponPropertyEnum>, weaponRange: WeaponRange, weaponType: WeaponTypeEnum) {
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
    public getDamageRoll() {
        let result = 0;

        this._damages.forEach(function (damage) {
            result += Die.RollD(damage);
        });

        return result;
    }
}