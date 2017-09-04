/**
 * Class representing a color.
 */
class Color {
    private _red: number;
    private _green: number;
    private _blue: number;
    private _alpha: number;

    /**
     * Creates a color.
     * @param  {number} red - The red.
     * @param  {number} green - The green.
     * @param  {number} blue - The blue.
     * @param  {number} alpha - The alpha.
     * @return {Color}
     */
    public constructor(red: number, green: number, blue: number, alpha: number) {
        this._red = red;
        this._green = green;
        this._blue = blue;
        this._alpha = alpha;
    }

    public get red() {
        return this._red;
    }

    public get green() {
        return this._green;
    }

    public get blue() {
        return this._blue;
    }

    public get alpha() {
        return this._alpha;
    }
}