/**
 * Class representing a coordinate.
 */
class Coordinate {
    /**
     * Creates a coordinate.
     * @param  {Number} x - The x.
     * @param  {Number} y - The y.
     * @return {Object}
     */
    constructor(x, y) {
        this._x = x != null ? x : 0;
        this._y = y != null ? y : 0;
    }
    get x() {
        return this._x;
    }
    set x(v) {
        this._x = v;
    }
    get y() {
        return this._y;
    }
    set y(v) {
        this._y = v;
    }
}
/**
 * Class representing an engine.
 */
class Engine {
    /**
     * Creates an engine.
     * @param  {Object} t - The tileset.
     * @param  {Object} tw - The tile width.
     * @param  {Object} th - The tile height.
     * @param  {Object} c - The canvas.
     * @return {Object}
     */
    constructor(t, tw, th, c) {
        this._tileset = t;
        this._canvas = c;
        this._canvas.width = this._tileset.tile_width_in_pixel * tw;
        this._canvas.height = this._tileset.tile_height_in_pixel * th;
        this._ctx = this._canvas.getContext("2d");
        this._ctx.mozImageSmoothingEnabled = false;
        this._ctx.msImageSmoothingEnabled = false;
        this._ctx.imageSmoothingEnabled = false;
        this._grid = new Grid(tw, th);
        // CONTROLS
        this._canvas.onmousedown = function (event) {
            var x = Math.floor(event.layerX / 16);
            var y = Math.floor(event.layerY / 16);
            console.log(x, y);
        };
        this._canvas.onmouseup = function (event) {
            var x = Math.floor(event.layerX / 16);
            var y = Math.floor(event.layerY / 16);
            console.log(x, y);
        };
        this._canvas.oncontextmenu = function (event) {
            event.preventDefault();
        };
        this._canvas.onmousemove = function (event) {
            var x = Math.floor(event.layerX / 16);
            var y = Math.floor(event.layerY / 16);
            //console.log(x, y);
        };
        document.onkeydown = function (event) {
            console.log(event.keyCode);
        };
    }
    /**
     * Clears the canvas.
     */
    clear() {
        this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);
    }
    /**
     * Draws the grid on the canvas.
     */
    draw() {
        for (var x = 0; x < this._grid.width; x++) {
            for (var y = 0; y < this._grid.height; y++) {
                var xx = x * this._tileset.tile_width_in_pixel;
                var yy = y * this._tileset.tile_height_in_pixel;
                this._ctx.drawImage(this._tileset.image[this._grid.getTile(x, y).background_color], (Tileset.CHAR_FILL % this._tileset.tileset_width_in_tile) * this._tileset.tile_width_in_pixel, Math.floor(Tileset.CHAR_FILL / this._tileset.tileset_height_in_tile) * this._tileset.tile_height_in_pixel, this._tileset.tile_width_in_pixel, this._tileset.tile_height_in_pixel, xx, yy, this._tileset.tile_width_in_pixel, this._tileset.tile_height_in_pixel);
                this._ctx.drawImage(this._tileset.image[this._grid.getTile(x, y).foreground_color], (this._grid.getTile(x, y).character % this._tileset.tileset_width_in_tile) * this._tileset.tile_width_in_pixel, Math.floor(this._grid.getTile(x, y).character / this._tileset.tileset_height_in_tile) * this._tileset.tile_height_in_pixel, this._tileset.tile_width_in_pixel, this._tileset.tile_height_in_pixel, xx, yy, this._tileset.tile_width_in_pixel, this._tileset.tile_height_in_pixel);
            }
        }
    }
    /**
     * Draws the grid on the canvas.
     * @param {Object} g - The grid.
     * @param {Object} fc - The from coordinate.
     * @param {Object} tc - The to coordinate.
     * @param {Object} ac - The at coordinate.
     */
    drawGrid(g, fc, tc, ac) {
        for (var x = fc.x; x < tc.x; x++) {
            for (var y = fc.y; y < tc.y; y++) {
                var xx = (ac.x + x) * this._tileset.tile_width_in_pixel;
                var yy = (ac.y + y) * this._tileset.tile_height_in_pixel;
                this._ctx.drawImage(this._tileset.image[g.getTile(x, y).background_color], (Tileset.CHAR_FILL % this._tileset.tileset_width_in_tile) * this._tileset.tile_width_in_pixel, Math.floor(Tileset.CHAR_FILL / this._tileset.tileset_height_in_tile) * this._tileset.tile_height_in_pixel, this._tileset.tile_width_in_pixel, this._tileset.tile_height_in_pixel, xx, yy, this._tileset.tile_width_in_pixel, this._tileset.tile_height_in_pixel);
                this._ctx.drawImage(this._tileset.image[g.getTile(x, y).foreground_color], (g.getTile(x, y).character % this._tileset.tileset_width_in_tile) * this._tileset.tile_width_in_pixel, Math.floor(g.getTile(x, y).character / this._tileset.tileset_height_in_tile) * this._tileset.tile_height_in_pixel, this._tileset.tile_width_in_pixel, this._tileset.tile_height_in_pixel, xx, yy, this._tileset.tile_width_in_pixel, this._tileset.tile_height_in_pixel);
            }
        }
    }
}
/**
 * Class representing a grid.
 */
class Grid {
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
            }
            else if ((0.5 + ix) / nx < (0.5 + iy) / ny) {
                c.x += sign_x;
                ix++;
            }
            else {
                c.y += sign_y;
                iy++;
            }
            this._t[c.x][c.y] = new Tile(Tileset.COLOR_WHITE, Tileset.COLOR_BLACK, Tileset.CHAR_SMALL_DOT, 0);
            coordinates.push(new Coordinate(c.x, c.y));
        }
        return coordinates;
    }
}
/**
 * Class representing a tile.
 */
class Tile {
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
/**
 * Class representing a tileset.
 */
class Tileset {
    /**
     * Creates a tileset.
     * @return {Object}
     */
    constructor() {
        this._i = {
            none: new Image(),
            black: new Image(),
            white: new Image(),
            red: new Image(),
            green: new Image(),
            blue: new Image()
        };
        this._i.none.src = "img/cp437_16x16.png";
        this._i.black.src = "img/cp437_16x16_black.png";
        this._i.white.src = "img/cp437_16x16_white.png";
        this._i.red.src = "img/cp437_16x16_red.png";
        this._i.green.src = "img/cp437_16x16_green.png";
        this._i.blue.src = "img/cp437_16x16_blue.png";
        this._twip = 16;
        this._thip = 16;
        this._twit = 16;
        this._thit = 16;
    }
    get image() {
        return this._i;
    }
    get tile_width_in_pixel() {
        return this._twip;
    }
    get tile_height_in_pixel() {
        return this._thip;
    }
    get tileset_width_in_tile() {
        return this._twit;
    }
    get tileset_height_in_tile() {
        return this._thit;
    }
    /**
     * Gets the characters.
     */
    static get CHAR_TRANSPARENT() { return 0; }
    static get CHAR_FILL() { return 219; }
    static get CHAR_SMALL_DOT() { return 250; }
    static get CHAR_BIG_DOT() { return 249; }
    static get CHAR_SIMPLE_BORDER_TOP_LEFT() { return 218; }
    static get CHAR_SIMPLE_BORDER_TOP_RIGHT() { return 191; }
    static get CHAR_SIMPLE_BORDER_BOTTOM_LEFT() { return 192; }
    static get CHAR_SIMPLE_BORDER_BOTTOM_RIGHT() { return 217; }
    static get CHAR_SIMPLE_BORDER_HORIZONTAL() { return 196; }
    static get CHAR_SIMPLE_BORDER_VERTICAL() { return 179; }
    static get CHAR_DOUBLE_BORDER_TOP_LEFT() { return 201; }
    static get CHAR_DOUBLE_BORDER_TOP_RIGHT() { return 187; }
    static get CHAR_DOUBLE_BORDER_BOTTOM_LEFT() { return 200; }
    static get CHAR_DOUBLE_BORDER_BOTTOM_RIGHT() { return 188; }
    static get CHAR_DOUBLE_BORDER_HORIZONTAL() { return 205; }
    static get CHAR_DOUBLE_BORDER_VERTICAL() { return 186; }
    /**
     * Gets the colors.
     */
    static get COLOR_BLACK() { return "black"; }
    static get COLOR_WHITE() { return "white"; }
    static get COLOR_RED() { return "red"; }
    static get COLOR_GREEN() { return "green"; }
    static get COLOR_BLUE() { return "blue"; }
}
