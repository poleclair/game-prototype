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

    get items(): Array<Item> {
        return this._items;
    }

    get weight(): number {
        return this._weight;
    }

    /**
     * Has an item.
     * @param {Item} item - The item.
     * @return {boolean}
     */
    hasItem(item: Item): boolean {
        return this.items.findIndex(x => x.name === item.name) > -1;
    }

    /**
     * Add an item.
     * @param {Item} item - The item.
     */
    addItem(item: Item): void {
        this._items.push(item);
        this._weight += item.weight;
    }

    /**
     * Remove an item.
     * @param {Item} item - The item.
     */
    removeItem(item: Item): void {
        let index: number = this.items.findIndex(x => x.name === item.name);

        if (index > -1) {
            this._items.splice(index, 1);
            this._weight -= item.weight;
        }
    }
}