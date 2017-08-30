/**
 * Class representing a coordinate.
 */
class Coordinate {
    private _x;
    private _y;

    /**
     * Creates a coordinate.
     * @param  {Number} x - The x.
     * @param  {Number} y - The y.
     * @return {Object}
     */
    constructor(x, y) {
        this._x = x != null ? x : 0;
        this._y = y != null ? y : 0;
    }

    get x() {
        return this._x;
    }

    set x(v) {
        this._x = v;
    }

    get y() {
        return this._y;
    }

    set y(v) {
        this._y = v;
    }
}