/**
 * Class representing a control.
 */
class Control {
    private _x: number;
    private _y: number;
    private _xDown: number;
    private _yDown: number;
    private _xUp: number;
    private _yUp: number;
    private _xContextMenu: number;
    private _yContextMenu: number;
    private _key: number;

    /**
     * Creates a control.
     * @return {Control}
     */
    public constructor() {
        this._x = 0;
        this._y = 0;
        this._xDown = 0;
        this._yDown = 0;
        this._xUp = 0;
        this._yUp = 0;
        this._xContextMenu = 0;
        this._yContextMenu = 0;
        this._key = 0;
    }

    public get x() {
        return this._x;
    }

    public get y() {
        return this._y;
    }

    public get xDown() {
        return this._xDown;
    }

    public get yDown() {
        return this._yDown;
    }

    public get xUp() {
        return this._xUp;
    }

    public get yUp() {
        return this._yUp;
    }

    public get xContextMenu() {
        return this._xUp;
    }

    public get yContextMenu() {
        return this._yUp;
    }

    public get key() {
        return this._key;
    }

    /**
     * Triggers mouse down.
     */
    public mouseDown(event) {
        event.preventDefault();

        this._xDown = Math.floor(event.layerX / Tileset.TileWidthInPixel);
        this._yDown = Math.floor(event.layerY / Tileset.TileHeightInPixel);
    }

    /**
     * Triggers mouse up.
     */
    public mouseUp(event) {
        event.preventDefault();

        this._xUp = Math.floor(event.layerX / Tileset.TileWidthInPixel);
        this._yUp = Math.floor(event.layerY / Tileset.TileHeightInPixel);
    }

    /**
     * Triggers mouse move.
     */
    public mouseMove(event) {
        event.preventDefault();

        this._x = Math.floor(event.layerX / Tileset.TileWidthInPixel);
        this._y = Math.floor(event.layerY / Tileset.TileHeightInPixel);
    }

    /**
     * Triggers context menu.
     */
    public contextMenu(event) {
        event.preventDefault();

        this._xContextMenu = Math.floor(event.layerX / Tileset.TileWidthInPixel);
        this._yContextMenu = Math.floor(event.layerY / Tileset.TileHeightInPixel);
    }

    /**
     * Triggers key down.
     */
    public keyDown(event) {
        this._key = event.keyCode;
        console.log(this._key);
    }
}