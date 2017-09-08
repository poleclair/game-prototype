/**
 * Class representing a tileset.
 */
class Tileset {
    private _tileWidth: number;
    private _tileHeight: number;
    private _image: HTMLImageElement;

    /**
     * Creates a tileset.
     * @param  {string} source - The source.
     * @param  {number} tileWidth - The tile width.
     * @param  {number} tileHeight - The tile height.
     * @return {Tileset}
     */
    public constructor(source: string, tileWidth: number, tileHeight: number) {
        this._tileWidth = tileWidth;
        this._tileHeight = tileHeight;

        this._image = new Image();
        this._image.src = source;
    }

    public get tileWidth() {
        return this._tileWidth;
    }

    public get tileHeight() {
        return this._tileHeight;
    }

    public get image() {
        return this._image;
    }
}