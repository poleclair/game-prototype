/**
 * Class representing a layer.
 */
class Layer {
    private _id: number;
    private _x: number;
    private _y: number;
    private _z: number;
    private _width: number;
    private _height: number;
    private _animator: Animator;
    private _tiles: Array<Array<Tile>>;
    private _canvas: HTMLCanvasElement;
    private _context: CanvasRenderingContext2D;

    /**
     * Creates a layer.
     * @param  {number} id - The id.
     * @param  {number} x - The x.
     * @param  {number} y - The y.
     * @param  {number} z - The z.
     * @param  {number} width - The width.
     * @param  {number} height - The height.
     * @return {Layer}
     */
    public constructor(id: number, x: number, y: number, z: number, width: number, height: number) {
        this._id = id;
        this._x = x;
        this._y = y;
        this._z = z;
        this._width = width;
        this._height = height;
        this._animator = new Animator();
        this._tiles = [];

        for (let x = 0; x < width; x++) {
            this._tiles[x] = [];

            for (let y = 0; y < height; y++) {
                this._tiles[x][y] = new Tile(0, 0, 1);
            }
        }

        this._canvas = document.createElement('canvas');
        this._canvas.id = id.toString();
        this._canvas.width = width;
        this._canvas.height = height;
        this._canvas.style.zIndex = z.toString();

        this._context = this._canvas.getContext('2d');
    }

    public get id() {
        return this._id;
    }

    public get x() {
        return this._x;
    }

    public get y() {
        return this._y;
    }

    public get z() {
        return this._z;
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

    public get canvas() {
        return this._canvas;
    }

    public get context() {
        return this._context;
    }
}