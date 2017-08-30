/// <reference path="Grid.ts"/>
/// <reference path="Control.ts"/>
/// <reference path="Tile.ts"/>
/// <reference path="Tileset.ts"/>

/**
 * Class representing an engine.
 */
class Engine {
    private readonly _fps: number = 1000 / 60;

    private _canvas: HTMLCanvasElement;
    private _context: CanvasRenderingContext2D;
    private _image: HTMLImageElement;
    private _control: Control;
    private _layer0: Grid;
    private _pid: number;

    /**
     * Creates an engine.
     * @constructor
     * @param {number} width - The width in tile.
     * @param {number} height - The width in tile.
     * @return {Engine}
     */
    public constructor(width: number, height: number) {
        this._canvas = document.createElement('canvas');
        this._canvas.id = 'canvas';
        this._canvas.width = width * Tileset.TileWidthInPixel;
        this._canvas.height = height * Tileset.TileHeightInPixel;

        this._image = new Image();
        this._image.src = Tileset.TilesetSourceImage;

        this._context = this._canvas.getContext('2d');

        this._control = new Control();

        this._layer0 = new Grid(width, height);
    }

    /**
     * Initializes the engine.
     */
    public init() {
        window.onload = function () {
            document.body.appendChild(this._canvas);
            document.getElementById('canvas').appendChild(this._image);

            document.addEventListener('keydown', this.propagateKeyDown.bind(this));

            this._canvas.addEventListener('mousedown', this.propagateMouseDown.bind(this));
            this._canvas.addEventListener('mouseup', this.propagateMouseUp.bind(this));
            this._canvas.addEventListener('contextmenu', this.propagateContextMenu.bind(this));
            this._canvas.addEventListener('mousemove', this.propagateMouseMove.bind(this));
        }.bind(this);
    }

    /**
     * Starts the engine.
     */
    public start() {
        this._pid = setInterval(function () {
            this.clear();
            this.draw();
        }.bind(this), this._fps);
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
        let sx = 0;
        let sy = 0;
        let sWidth = Tileset.TileWidthInPixel;
        let sHeight = Tileset.TileHeightInPixel;
        let dx = 0;
        let dy = 0;
        let dWidth = Tileset.TileWidthInPixel;
        let dHeight = Tileset.TileHeightInPixel;

        // layer 0
        for (let x = 0; x < this._layer0.width; x++) {
            for (let y = 0; y < this._layer0.height; y++) {
                sx = Tileset.TileWidthInPixel * (this._layer0.tiles[x][y].character % Tileset.TilesetWidthInTile);
                sy = Tileset.TileHeightInPixel * Math.floor(this._layer0.tiles[x][y].character / Tileset.TilesetHeightInTile);
                dx = Tileset.TileWidthInPixel * x;
                dy = Tileset.TileHeightInPixel * y;

                this._context.drawImage(this._image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
            }
        }

        // layer mouse
        sx = Tileset.TileWidthInPixel * (Tileset.CharFill % Tileset.TilesetWidthInTile);
        sy = Tileset.TileHeightInPixel * Math.floor(Tileset.CharFill / Tileset.TilesetHeightInTile);
        dx = Tileset.TileWidthInPixel * this._control.x;
        dy = Tileset.TileHeightInPixel * this._control.y;

        this._context.drawImage(this._image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
    }

    /**
     * Propagates mouse down event.
     */
    private propagateMouseDown(event) {
        event.preventDefault();

        this._control.mouseDown(event);
    }

    /**
     * Propagates mouse up event.
     */
    private propagateMouseUp(event) {
        event.preventDefault();

        this._control.mouseUp(event);
    }

    /**
     * Propagates context menu event.
     */
    private propagateContextMenu(event) {
        event.preventDefault();

        this._control.contextMenu(event);
    }

    /**
     * Propagates mouse move event.
     */
    private propagateMouseMove(event) {
        event.preventDefault();

        this._control.mouseMove(event);
    }

    /**
     * Propagates key down event.
     */
    private propagateKeyDown(event) {
        this._control.keyDown(event);
    }
}