/// <reference path="Grid.ts"/>
/// <reference path="Tile.ts"/>

/**
 * Class representing an engine.
 */
class Engine {
    private readonly TileWidthInPixel: number = 16;
    private readonly TileHeightInPixel: number = 16;
    private readonly TilesetWidthInTile: number = 16;
    private readonly TilesetHeightInTile: number = 16;

    private _canvas: HTMLCanvasElement;
    private _context: CanvasRenderingContext2D;
    private _pid: number;
    private _grid: Grid;
    private _image: HTMLImageElement;

    /**
     * Creates an engine.
     * @constructor
     * @param {number} width - The width in tile.
     * @param {number} height - The level.
     * @return {Engine}
     */
    public constructor(width: number, height: number) {
        this._canvas = document.createElement('canvas');
        this._canvas.id = 'canvas';
        this._canvas.width = width * this.TileWidthInPixel;
        this._canvas.height = height * this.TileHeightInPixel;

        this._image = new Image();
        this._image.src = './src/Engine/img/cp437_16x16.png';

        this._context = this._canvas.getContext('2d');

        this._grid = new Grid(width, height);
    }

    /**
     * Initializes the engine.
     */
    public init() {
        window.onload = function () {
            document.body.appendChild(this._canvas);
            document.getElementById('canvas').appendChild(this._image);
        }.bind(this);
    }

    /**
     * Starts the engine.
     */
    public start() {
        this._pid = setInterval(function () {
            this.clear();
            this.draw();
        }.bind(this), 500);
    }

    /**
     * Stops the engine.
     */
    public stop() {
        clearInterval(this._pid);
    }

    /**
     * Clears the engine.
     */
    public clear() {
        this._context.clearRect(0, 0, this._canvas.width, this._canvas.height);
    }

    /**
     * Draws the engine.
     */
    public draw() {
        for (let x = 0; x < this._grid.width; x++) {
            for (let y = 0; y < this._grid.height; y++) {
                let sx = (this._grid.tiles[x][y].character % Tileset.TilesetWidthInTile) * Tileset.TileWidthInPixel;
                let sy = Math.floor(this._grid.tiles[x][y].character / Tileset.TilesetHeightInTile) * Tileset.TileHeightInPixel;
                let sWidth = Tileset.TileWidthInPixel;
                let sHeight = Tileset.TileHeightInPixel;
                let dx = x * 16;
                let dy = y * 16;
                let dWidth = Tileset.TileWidthInPixel;
                let dHeight = Tileset.TileHeightInPixel;

                this._context.drawImage(this._image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);

                /*
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
                */
            }
        }
    }
}