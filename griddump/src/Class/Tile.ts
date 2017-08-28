/**
 * Class representing a tile.
 */
class Tile {
    private _bc;
    private _fc;
    private _c;
    private _z;

    /**
     * Creates a tile.
     * @param  {String} bc - The background color.
     * @param  {String} fc - The foreground color.
     * @param  {Number} c - The character.
     * @param  {Number} z - The z.
     * @return {Object}
     */
    constructor(bc, fc, c, z) {
        this._bc = bc != null ? bc : Tileset.COLOR_BLACK;
        this._fc = fc != null ? fc : Tileset.COLOR_WHITE;
        this._c = c != null ? c : Tileset.CHAR_TRANSPARENT;
        this._z = z != null ? z : 0;
    }

    get background_color() {
        return this._bc;
    }

    set background_color(v) {
        this._bc = v;
    }

    get foreground_color() {
        return this._fc;
    }

    set foreground_color(v) {
        this._fc = v;
    }

    get character() {
        return this._c;
    }

    set character(v) {
        this._c = v;
    }

    get z() {
        return this._z;
    }

    set z(v) {
        this._z = v;
    }
}