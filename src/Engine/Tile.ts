/**
 * Class representing a tile.
 */
class Tile {
    private _value: number;
    private _alpha: number;

    /**
     * Creates a tile.
     * @param  {number} value - The value.
     * @param  {number} alpha - The alpha.
     * @return {Tile}
     */
    public constructor(value: number, alpha: number) {
        this._value = value;
        this._alpha = alpha;
    }

    public get value() {
        return this._value;
    }

    public set value(value: number) {
        this._value = value;
    }

    public get alpha() {
        return this._alpha;
    }

    public set alpha(value: number) {
        this._alpha = value;
    }
}