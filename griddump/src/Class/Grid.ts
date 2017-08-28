/**
 * Class representing a grid.
 */
class Grid {
    private _w;
    private _h;
    private _t;

    /**
     * Creates a grid.
     * @param  {Number} w - The width.
     * @param  {Number} h - The height.
     * @return {Object}
     */
    constructor(w, h) {
        this._w = w;
        this._h = h;
        this._t = [];

        for (var x = 0; x < w; x++) {
            this._t[x] = [];
            for (var y = 0; y < h; y++) {
                this._t[x][y] = new Tile(null, null, null, null);
            }
        }
    }

    get width() {
        return this._w;
    }

    get height() {
        return this._h;
    }

    /**
     * Gets the tile.
     * @param  {Number} x - The x.
     * @param  {Number} y - The y.
     * @return {String}
     */
    getTile(x, y) {
        return this._t[x][y];
    }

    /**
     * Sets the tile.
     * @param {Number} x - The x.
     * @param {Number} y - The y.
     * @param {Number} t - The tile.
     */
    setTile(x, y, t) {
        this._t[x][y] = t;
    }

    /**
     * Adds a line.
     * @param  {Object} c0 - The starting coordinate.
     * @param  {Object} c1 - The ending coordinate.
     * @param  {String} bc - The background color.
     * @param  {String} fc - The foreground color.
     * @param  {Number} c - The character.
     * @param  {Number} z - The z.
     * @param  {Number} ax - The at x.
     * @param  {Number} ay - The at y.
     * @return {Object}
     */
    updateLine(c0, c1) {
        var dx = c1.x - c0.x, dy = c1.y - c0.y;
        var nx = Math.abs(dx), ny = Math.abs(dy);
        var sign_x = dx > 0 ? 1 : -1, sign_y = dy > 0 ? 1 : -1;

        var c = new Coordinate(c0.x, c0.y);
        var coordinates = [new Coordinate(c0.x, c0.y)];

        this._t[c.x][c.y] = new Tile(Tileset.COLOR_WHITE, Tileset.COLOR_BLACK, Tileset.CHAR_SMALL_DOT, 0);
        for (var ix = 0, iy = 0; ix < nx || iy < ny;) {
            if ((0.5 + ix) / nx == (0.5 + iy) / ny) {
                c.x += sign_x;
                c.y += sign_y;
                ix++;
                iy++;
            } else if ((0.5 + ix) / nx < (0.5 + iy) / ny) {
                c.x += sign_x;
                ix++;
            } else {
                c.y += sign_y;
                iy++;
            }

            this._t[c.x][c.y] = new Tile(Tileset.COLOR_WHITE, Tileset.COLOR_BLACK, Tileset.CHAR_SMALL_DOT, 0);
            coordinates.push(new Coordinate(c.x, c.y));
        }

        return coordinates;
    }
}