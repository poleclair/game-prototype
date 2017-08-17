/// <reference path="Item.ts"/>

/**
 * Class representing an inventory.
 */
class Inventory {
    private _items: Array<Item>;
    private _weight: number;

    /**
     * Create an inventory.
     * @constructor
     * @return {Inventory}
     */
    constructor() {
        this._items = new Array<Item>();
        this._weight = 0;
    }

    get items() {
        return this._items;
    }

    get weight() {
        return this._weight;
    }

    /**
     * Has an item.
     * @param {Item} item - The item.
     * @return {boolean}
     */
    hasItem(item: Item) {
        return this.items.findIndex(x => x.name === item.name) > -1;
    }

    /**
     * Add an item.
     * @param {Item} item - The item.
     */
    addItem(item: Item) {
        this._items.push(item);
        this._weight += item.weight;
    }

    /**
     * Remove an item.
     * @param {Item} item - The item.
     */
    removeItem(item: Item) {
        let index = this.items.findIndex(x => x.name === item.name);

        if (index > -1) {
            this._items.splice(index, 1);
            this._weight -= item.weight;
        }
    }
}