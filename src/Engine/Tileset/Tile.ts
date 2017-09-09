/**
 * Class representing a tile.
 */
class Tile {
    private _x: number;
    private _y: number;
    private _alpha: number;
    private _dirty: boolean;

    /**
     * Creates a tile.
     * @param {number} x - The x;
     * @param {number} y - The y;
     * @param  {number} alpha - The alpha.
     * @return {Tile}
     */
    public constructor(x: number, y: number, alpha: number) {
        this._x = x;
        this._y = y;
        this._alpha = alpha;
        this._dirty = true;
    }

    public get x() {
        return this._x;
    }

    public set x(value: number) {
        this._x = value;
        this.dirty = true;
    }

    public get y() {
        return this._y;
    }

    public set y(value: number) {
        this._y = value;
        this.dirty = true;
    }

    public get alpha() {
        return this._alpha;
    }

    public set alpha(value: number) {
        this._alpha = value;
        this.dirty = true;
    }

    public get dirty() {
        return this._dirty;
    }

    public set dirty(value: boolean) {
        this._dirty = value;
    }
}