/**
 * Class representing a grid.
 */
class Grid {
    private _width: number;
    private _height: number;
    private _tiles: Array<Array<Tile>>;

    /**
     * Creates a grid.
     * @param  {number} width - The width.
     * @param  {number} height - The height.
     * @return {Grid}
     */
    public constructor(width, height) {
        this._width = width;
        this._height = height;
        this._tiles = [];

        for (let x = 0; x < width; x++) {
            this._tiles[x] = [];

            for (let y = 0; y < height; y++) {
                this._tiles[x][y] = new Tile("", "", 250, 0);
            }
        }
    }

    get width() {
        return this._width;
    }

    get height() {
        return this._height;
    }

    get tiles() {
        return this._tiles;
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
    /*
    updateLine(c0, c1) {
        var dx = c1.x - c0.x, dy = c1.y - c0.y;
        var nx = Math.abs(dx), ny = Math.abs(dy);
        var sign_x = dx > 0 ? 1 : -1, sign_y = dy > 0 ? 1 : -1;

        var c = new Coordinate(c0.x, c0.y);
        var coordinates = [new Coordinate(c0.x, c0.y)];

        this._tiles[c.x][c.y] = new Tile(Tileset.COLOR_WHITE, Tileset.COLOR_BLACK, Tileset.CHAR_SMALL_DOT, 0);
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

            this._tiles[c.x][c.y] = new Tile(Tileset.COLOR_WHITE, Tileset.COLOR_BLACK, Tileset.CHAR_SMALL_DOT, 0);
            coordinates.push(new Coordinate(c.x, c.y));
        }

        return coordinates;
    }
    */
}