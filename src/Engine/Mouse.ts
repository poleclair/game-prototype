/**
 * Class representing a mouse.
 */
class Mouse {
    private _x: number;
    private _y: number;
    private _xDown: number;
    private _yDown: number;
    private _xUp: number;
    private _yUp: number;
    private _xContextMenu: number;
    private _yContextMenu: number;

    /**
     * Creates a mouse.
     * @return {Mouse}
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
    }

    public get x() {
        return this._x;
    }

    public set x(value) {
        this._x = value;
    }

    public get y() {
        return this._y;
    }

    public set y(value) {
        this._y = value;
    }

    public get xDown() {
        return this._xDown;
    }

    public set xDown(value) {
        this._xDown = value;
    }

    public get yDown() {
        return this._yDown;
    }

    public set yDown(value) {
        this._yDown = value;
    }

    public get xUp() {
        return this._xUp;
    }

    public set xUp(value) {
        this._xUp = value;
    }

    public get yUp() {
        return this._yUp;
    }

    public set yUp(value) {
        this._yUp = value;
    }

    public get xContextMenu() {
        return this._xUp;
    }

    public set xContextMenu(value) {
        this._xUp = value;
    }

    public get yContextMenu() {
        return this._yUp;
    }

    public set yContextMenu(value) {
        this._yUp = value;
    }

    /**
     * Triggers mouse down.
     */
    public mouseDown(event) {
        event.preventDefault();

        this.xDown = Math.floor(event.layerX / Tileset.TileWidthInPixel);
        this.yDown = Math.floor(event.layerY / Tileset.TileHeightInPixel);
    }

    /**
     * Triggers mouse up.
     */
    public mouseUp(event) {
        event.preventDefault();

        this.xUp = Math.floor(event.layerX / Tileset.TileWidthInPixel);
        this.yUp = Math.floor(event.layerY / Tileset.TileHeightInPixel);
    }

    /**
     * Triggers mouse move.
     */
    public mouseMove(event) {
        event.preventDefault();

        this.x = Math.floor(event.layerX / Tileset.TileWidthInPixel);
        this.y = Math.floor(event.layerY / Tileset.TileHeightInPixel);
    }

    /**
     * Triggers context menu.
     */
    public contextMenu(event) {
        event.preventDefault();

        this.xContextMenu = Math.floor(event.layerX / Tileset.TileWidthInPixel);
        this.yContextMenu = Math.floor(event.layerY / Tileset.TileHeightInPixel);
    }
}