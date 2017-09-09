/**
 * Class representing a layer.
 */
class Layer {
    private _x: number;
    private _y: number;
    private _width: number;
    private _height: number;
    private _animator: Animator;
    private _tiles: Array<Array<Tile>>;

    /**
     * Creates a layer.
     * @param  {number} x - The x.
     * @param  {number} y - The y.
     * @param  {number} width - The width.
     * @param  {number} height - The height.
     * @param  {number} tile - The filling tile.
     * @return {Layer}
     */
    public constructor(x: number, y: number, width: number, height: number, tile: Tile) {
        this._x = x;
        this._y = y;
        this._width = width;
        this._height = height;
        this._animator = new Animator();
        this._tiles = [];

        for (let x = 0; x < width; x++) {
            this._tiles[x] = [];

            for (let y = 0; y < height; y++) {
                this._tiles[x][y] = tile;
            }
        }
    }

    public get x() {
        return this._x;
    }

    public get y() {
        return this._y;
    }

    public get width() {
        return this._width;
    }

    public get height() {
        return this._height;
    }

    public get animator() {
        return this._animator;
    }

    public get tiles() {
        return this._tiles;
    }
}