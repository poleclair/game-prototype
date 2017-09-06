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
    private _kKeyDown: number;

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
        this._kKeyDown = 0;
    }

    public get x() {
        return this._x;
    }

    public set x(value: number) {
        this._x = value;
    }

    public get y() {
        return this._y;
    }

    public set y(value: number) {
        this._y = value;
    }

    public get xDown() {
        return this._xDown;
    }

    public set xDown(value: number) {
        this._xDown = value;
    }

    public get yDown() {
        return this._yDown;
    }

    public set yDown(value: number) {
        this._yDown = value;
    }

    public get xUp() {
        return this._xUp;
    }

    public set xUp(value: number) {
        this._xUp = value;
    }

    public get yUp() {
        return this._yUp;
    }

    public set yUp(value: number) {
        this._yUp = value;
    }

    public get xContextMenu() {
        return this._xUp;
    }

    public set xContextMenu(value: number) {
        this._xUp = value;
    }

    public get yContextMenu() {
        return this._yUp;
    }

    public set yContextMenu(value: number) {
        this._yUp = value;
    }

    public get kKeyDown() {
        return this._kKeyDown;
    }

    public set kKeyDown(value: number) {
        this._kKeyDown = value;
    }

    /**
     * Triggers mouse down.
     */
    public mouseDown(event: MouseEvent) {
        event.preventDefault();

        this.xDown = event.layerX;
        this.yDown = event.layerY;
    }

    /**
     * Triggers mouse up.
     */
    public mouseUp(event: MouseEvent) {
        event.preventDefault();

        this.xUp = event.layerX;
        this.yUp = event.layerY;
    }

    /**
     * Triggers mouse move.
     */
    public mouseMove(event: MouseEvent) {
        event.preventDefault();

        this.x = event.layerX;
        this.y = event.layerY;
    }

    /**
     * Triggers context menu.
     */
    public contextMenu(event: MouseEvent) {
        event.preventDefault();

        this.xContextMenu = event.layerX;
        this.yContextMenu = event.layerY;
    }

    /**
     * Triggers key down.
     */
    public keyDown(event: KeyboardEvent) {
        this.kKeyDown = event.keyCode;
    }
}