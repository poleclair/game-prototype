/**
 * Class representing a target.
 */
class Target {
    private _xOffset: number;
    private _yOffset: number;
    private _pixel: Pixel;

    /**
     * Creates a target.
     * @param  {number} xOffset - The x offset.
     * @param  {number} yOffset - The y offset.
     * @param  {Pixel} pixel - The pixel.
     * @return {Target}
     */
    public constructor(xOffset: number, yOffset: number, pixel: Pixel) {
        this._xOffset = xOffset;
        this._yOffset = yOffset;
        this._pixel = pixel;
    }

    public get xOffset() {
        return this._xOffset;
    }

    public get yOffset() {
        return this._yOffset;
    }

    public get pixel() {
        return this._pixel;
    }
}