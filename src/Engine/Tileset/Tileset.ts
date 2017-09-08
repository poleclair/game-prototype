/**
 * Class representing a tileset.
 */
class Tileset {
    private _width: number;
    private _height: number;
    private _image: HTMLImageElement;

    /**
     * Creates a tileset.
     * @param  {string} source - The source.
     * @param  {number} width - The width.
     * @param  {number} height - The height.
     * @return {Tileset}
     */
    public constructor(source: string, width: number, height: number) {
        this._width = width;
        this._height = height;

        this._image = new Image();
        this._image.src = source;
    }

    public get width() {
        return this._width;
    }

    public get height() {
        return this._height;
    }

    public get image() {
        return this._image;
    }

    /**
     * Gets the tileset info.
     */
    public static get TilesetWidthInTile() {
        return 16;
    }

    public static get TilesetHeightInTile() {
        return 16;
    }

    /**
     * Gets the characters info.
     */
    public static get CharTransparent() {
        return 0;
    }

    public static get CharFill() {
        return 219;
    }

    public static get CharSmallDot() {
        return 250;
    }

    public static get CharBigDot() {
        return 249;
    }

    public static get CharMultiply() {
        return 42;
    }

    public static get CharSimpleBorderTopLeft() {
        return 218;
    }

    public static get CharSimpleBorderTopRight() {
        return 191;
    }

    public static get CharSimpleBorderBottomLeft() {
        return 192;
    }

    public static get CharSimpleBorderBottomRight() {
        return 217;
    }

    public static get CharSimpleBorderHorizontal() {
        return 196;
    }

    public static get CharSimpleBorderVertical() {
        return 179;
    }

    public static get CharDoubleBorderTopLeft() {
        return 201;
    }

    public static get CharDoubleBorderTopRight() {
        return 187;
    }

    public static get CharDoubleBorderBottomLeft() {
        return 200;
    }

    public static get CharDoubleBorderBottomRight() {
        return 188;
    }

    public static get CharDoubleBorderHorizontal() {
        return 205;
    }

    public static get CharDoubleBorderVertical() {
        return 186;
    }
}