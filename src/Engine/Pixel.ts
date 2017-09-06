/**
 * Class representing a pixel.
 */
class Pixel {
    private _red: number;
    private _green: number;
    private _blue: number;
    private _alpha: number;
    private _dirty: boolean;

    /**
     * Creates a pixel.
     * @param  {number} red - The red.
     * @param  {number} green - The green.
     * @param  {number} blue - The blue.
     * @param  {number} alpha - The alpha.
     * @return {Pixel}
     */
    public constructor(red: number, green: number, blue: number, alpha: number) {
        this._red = red;
        this._green = green;
        this._blue = blue;
        this._alpha = alpha;
        this._dirty = true;
    }

    public get red() {
        return this._red;
    }

    public set red(value: number) {
        this._red = value;
        this.dirty = true;
    }

    public get green() {
        return this._green;
    }

    public set green(value: number) {
        this._green = value;
        this.dirty = true;
    }

    public get blue() {
        return this._blue;
    }

    public set blue(value: number) {
        this._blue = value;
        this.dirty = true;
    }

    public get alpha() {
        return this._alpha;
    }

    public set alpha(value: number) {
        this._alpha = value;
        this.dirty = true;
    }

    public get dirty() {
        return this._dirty;
    }

    public set dirty(value: boolean) {
        this._dirty = value;
    }
}