/**
 * Class representing a tile.
 */
class Tile {
    private _char: number;
    private _z: number;

    /**
     * Creates a tile.
     * @param  {number} char - The character.
     * @param  {number} z - The z.
     * @return {Tile}
     */
    public constructor(char: number, z: number) {
        this._char = char;
        this._z = z;
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
}