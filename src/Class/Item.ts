/**
 * Class representing an item.
 */
class Item {
    private _name: string;
    private _cost: number;
    private _weight: number;
    private _itemTypeId: ItemTypeEnum;

    /**
     * Create an item.
     * @constructor
     * @param {string} name - The name.
     * @param {number} cost - The cost.
     * @param {number} weight - The weight.
     * @param {ItemTypeEnum} itemTypeId - The item type id.
     * @return {Item}
     */
    constructor(name: string, cost: number, weight: number, itemTypeId: ItemTypeEnum) {
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