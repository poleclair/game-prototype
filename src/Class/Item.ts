/**
 * Class representing an item.
 */
class Item {
    private _name: string;
    private _cost: number;
    private _itemType: number;
    private _weight: number;

    /**
     * Create an item.
     * @constructor
     * @param {string} name - The name.
     * @param {number} cost - The cost.
     * @param {number} weight - The weight.
     * @param {number} itemType - The item type.
     * @return {Item}
     */
    constructor(name: string, cost: number, weight: number, itemType: number) {
        this._name = name;
        this._cost = cost;
        this._weight = weight;
        this._itemType = itemType;
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

    get itemType() {
        return this._itemType;
    }
}