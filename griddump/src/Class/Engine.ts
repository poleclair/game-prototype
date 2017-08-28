/**
 * Class representing an engine.
 */
class Engine {
    private _tileset;
    private _canvas;
    private _ctx;
    private _grid;

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
        }

        this._canvas.onmouseup = function (event) {
            var x = Math.floor(event.layerX / 16);
            var y = Math.floor(event.layerY / 16);

            console.log(x, y);
        }

        this._canvas.oncontextmenu = function (event) {
            event.preventDefault();
        }

        this._canvas.onmousemove = function (event) {
            var x = Math.floor(event.layerX / 16);
            var y = Math.floor(event.layerY / 16);

            //console.log(x, y);
        }

        document.onkeydown = function (event) {
            console.log(event.keyCode);
        }
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

                this._ctx.drawImage(
                    this._tileset.image[this._grid.getTile(x, y).background_color],
                    (Tileset.CHAR_FILL % this._tileset.tileset_width_in_tile) * this._tileset.tile_width_in_pixel,
                    Math.floor(Tileset.CHAR_FILL / this._tileset.tileset_height_in_tile) * this._tileset.tile_height_in_pixel,
                    this._tileset.tile_width_in_pixel,
                    this._tileset.tile_height_in_pixel,
                    xx,
                    yy,
                    this._tileset.tile_width_in_pixel,
                    this._tileset.tile_height_in_pixel
                );

                this._ctx.drawImage(
                    this._tileset.image[this._grid.getTile(x, y).foreground_color],
                    (this._grid.getTile(x, y).character % this._tileset.tileset_width_in_tile) * this._tileset.tile_width_in_pixel,
                    Math.floor(this._grid.getTile(x, y).character / this._tileset.tileset_height_in_tile) * this._tileset.tile_height_in_pixel,
                    this._tileset.tile_width_in_pixel,
                    this._tileset.tile_height_in_pixel,
                    xx,
                    yy,
                    this._tileset.tile_width_in_pixel,
                    this._tileset.tile_height_in_pixel
                );
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

                this._ctx.drawImage(
                    this._tileset.image[g.getTile(x, y).background_color],
                    (Tileset.CHAR_FILL % this._tileset.tileset_width_in_tile) * this._tileset.tile_width_in_pixel,
                    Math.floor(Tileset.CHAR_FILL / this._tileset.tileset_height_in_tile) * this._tileset.tile_height_in_pixel,
                    this._tileset.tile_width_in_pixel,
                    this._tileset.tile_height_in_pixel,
                    xx,
                    yy,
                    this._tileset.tile_width_in_pixel,
                    this._tileset.tile_height_in_pixel
                );

                this._ctx.drawImage(
                    this._tileset.image[g.getTile(x, y).foreground_color],
                    (g.getTile(x, y).character % this._tileset.tileset_width_in_tile) * this._tileset.tile_width_in_pixel,
                    Math.floor(g.getTile(x, y).character / this._tileset.tileset_height_in_tile) * this._tileset.tile_height_in_pixel,
                    this._tileset.tile_width_in_pixel,
                    this._tileset.tile_height_in_pixel,
                    xx,
                    yy,
                    this._tileset.tile_width_in_pixel,
                    this._tileset.tile_height_in_pixel
                );
            }
        }
    }
}