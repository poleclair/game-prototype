/// <reference path="Item.ts"/>

/**
 * Class representing an armor.
 * @extends Item
 */
class Armor extends Item {
    private _armorClass: number;
    private _strengthRequired: number;
    private _isDexterityModified: boolean;
    private _isDexterityCap: boolean;
    private _isStealthy: boolean;
    private _armorType: number;

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
    constructor(name: string, cost: number, weight: number, itemType: number, armorClass: number,
        strengthRequired: number, isDexterityModified: boolean, isDexterityCap: boolean, isStealthy: boolean, armorType: number) {
        super(name, cost, weight, itemType);

        this._armorClass = armorClass;
        this._strengthRequired = strengthRequired;
        this._isDexterityModified = isDexterityModified;
        this._isDexterityCap = isDexterityCap;
        this._isStealthy = isStealthy;
        this._armorType = armorType;
    }

    get armorClass(): number {
        return this._armorClass;
    }

    get strengthRequired(): number {
        return this._strengthRequired;
    }

    get isDexterityModified(): boolean {
        return this._isDexterityModified;
    }

    get isDexterityCap(): boolean {
        return this._isDexterityCap;
    }

    get isStealthy(): boolean {
        return this._isStealthy;
    }

    get armorType(): number {
        return this._armorType;
    }
}