/**
 * Class representing a weapon range.
 */
class WeaponRange {
    private _minimum: number;
    private _maximum: number;

    /**
     * Create a weapon range.
     * @constructor
     * @param {number} _minimum - The minimum.
     * @param {number} _maximum - The maximum.
     * @return {WeaponRange}
     */
    constructor(minimum: number, maximum: number) {
        this._minimum = minimum;
        this._maximum = maximum;
    }

    get minimum(): number {
        return this._minimum;
    }

    get maximum(): number {
        return this._maximum;
    }
}