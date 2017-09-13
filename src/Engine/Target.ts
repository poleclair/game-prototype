/**
 * Class representing a target.
 */
class Target {
    private _xOffset: number;
    private _yOffset: number;
    private _tile: Tile;

    /**
     * Creates a target.
     * @param  {number} xOffset - The x offset.
     * @param  {number} yOffset - The y offset.
     * @param  {Tile} tile - The tile.
     * @return {Target}
     */
    public constructor(xOffset: number, yOffset: number, tile: Tile) {
        this._xOffset = xOffset;
        this._yOffset = yOffset;
        this._tile = tile;
    }

    public get xOffset() {
        return this._xOffset;
    }

    public get yOffset() {
        return this._yOffset;
    }

    public get tile() {
        return this._tile;
    }
}