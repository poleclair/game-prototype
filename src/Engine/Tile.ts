/**
 * Class representing a tile.
 */
class Tile {
    private _backgroundColor: string;
    private _foregroundColor: string;
    private _char: number;
    private _z: number;

    /**
     * Creates a tile.
     * @param  {string} backgroundColor - The background color.
     * @param  {string} foregroundColor - The foreground color.
     * @param  {number} char - The character.
     * @param  {number} z - The z.
     * @return {Tile}
     */
    constructor(backgroundColor, foregroundColor, char, z) {
        this._backgroundColor = backgroundColor;
        this._foregroundColor = foregroundColor;
        this._char = char;
        this._z = z;
    }

    get background_color() {
        return this._backgroundColor;
    }

    set background_color(value) {
        this._backgroundColor = value;
    }

    get foreground_color() {
        return this._foregroundColor;
    }

    set foreground_color(value) {
        this._foregroundColor = value;
    }

    get character() {
        return this._char;
    }

    set character(value) {
        this._char = value;
    }

    get z() {
        return this._z;
    }

    set z(value) {
        this._z = value;
    }
}