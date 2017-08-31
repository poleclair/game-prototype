/**
 * Class representing a tile.
 */
class Tile {
    private _char: number;
    private _z: number;
    private _opacity: number;

    /**
     * Creates a tile.
     * @param  {number} char - The character.
     * @param  {number} z - The z.
     * @param  {number} opacity - The opacity.
     * @return {Tile}
     */
    public constructor(char: number, z: number, opacity: number) {
        this._char = char;
        this._z = z;
        this._opacity = opacity;
    }

    public get character() {
        return this._char;
    }

    public set character(value: number) {
        this._char = value;
    }

    public get z() {
        return this._z;
    }

    public set z(value: number) {
        this._z = value;
    }

    public get opacity() {
        return this._opacity;
    }
}