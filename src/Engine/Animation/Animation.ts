/**
 * Class representing an animation.
 */
class Animation {
    private _x: number;
    private _y: number;
    private _frames: Array<Frame>;

    /**
     * Creates an animation.
     * @param {number} x - The x.
     * @param {number} y - The y.
     * @param {Array<Frame>} frames - The frames.
     * @return {Animation}
     */
    public constructor(x: number, y: number, frames: Array<Frame>) {
        this._x = x;
        this._y = y;
        this._frames = frames;
    }

    public get x() {
        return this._x;
    }

    public get y() {
        return this._y;
    }

    public get frames() {
        return this._frames;
    }
}