/// <reference path="Animator/Animation.ts"/>
/// <reference path="Animator/Frame.ts"/>
/// <reference path="Animator/Target.ts"/>

/// <reference path="Control.ts"/>

/**
 * Class representing an engine.
 */
class Engine {
    private _name: string;
    private _width: number;
    private _height: number;
    private _tileset: Tileset;
    private _fps: number;
    private _canvas: HTMLCanvasElement;
    private _context: CanvasRenderingContext2D;
    private _animator: Animator;
    private _control: Control;
    private _matrix: Array<Array<Tile>>;
    private _pid: number;

    /**
     * Creates an engine.
     * @constructor
     * @param {string} name - The name.
     * @param {number} width - The width.
     * @param {number} height - The width.
     * @param {Tileset} tileset - The tileset.
     * @param {number} fps - The frame per second.
     * @return {Engine}
     */
    public constructor(name: string, width: number, height: number, tileset: Tileset, fps: number) {
        this._name = name;
        this._width = width;
        this._height = height;
        this._tileset = tileset;
        this._fps = 1000 / fps;

        this._canvas = document.createElement('canvas');
        this._canvas.id = this.name;
        // this._canvas.style.cursor = 'none';
        this._canvas.width = this.width * this.tileset.tileWidth;
        this._canvas.height = this.height * this.tileset.tileHeight;

        this._context = this._canvas.getContext('2d');

        this._animator = new Animator();
        this._control = new Control();
        this._matrix = [];
    }

    public get name() {
        return this._name;
    }

    public get width() {
        return this._width;
    }

    public get height() {
        return this._height;
    }

    public get fps() {
        return this._fps;
    }

    public get tileset() {
        return this._tileset;
    }

    public get canvas() {
        return this._canvas;
    }

    public get context() {
        return this._context;
    }

    public get animator() {
        return this._animator;
    }

    public get control() {
        return this._control;
    }

    public get matrix() {
        return this._matrix;
    }

    public get pid() {
        return this._pid;
    }

    public set pid(value: number) {
        this._pid = value;
    }

    /**
     * Initializes the engine.
     */
    public init() {
        window.onload = function () {
            document.body.appendChild(this._canvas);

            document.addEventListener('keydown', this.propagateKeyDown.bind(this));

            this.canvas.addEventListener('mousedown', this.propagateMouseDown.bind(this));
            this.canvas.addEventListener('mouseup', this.propagateMouseUp.bind(this));
            this.canvas.addEventListener('contextmenu', this.propagateContextMenu.bind(this));
            this.canvas.addEventListener('mousemove', this.propagateMouseMove.bind(this));

            for (let x = 0; x < this.width; x++) {
                this.matrix[x] = [];

                for (let y = 0; y < this.height; y++) {
                    this.matrix[x][y] = new Tile(250, 1);
                }
            }
        }.bind(this);
    }

    /**
     * Starts the engine.
     */
    public start() {
        this.pid = setInterval(function () {
            this.clear();
            this.draw();
        }.bind(this), this.fps);
    }

    /**
     * Stops the engine.
     */
    public stop() {
        clearInterval(this.pid);
    }

    /**
     * Clears the engine.
     */
    public clear() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    /**
     * Draws the engine.
     */
    public draw() {
        let sx = 0;
        let sy = 0;
        let sWidth = this.tileset.tileWidth;
        let sHeight = this.tileset.tileHeight;
        let dx = 0;
        let dy = 0;
        let dWidth = this.tileset.tileWidth;
        let dHeight = this.tileset.tileHeight;

        // grid layer
        for (let x = 0; x < this.width; x++) {
            for (let y = 0; y < this.height; y++) {
                this._context.globalAlpha = this.matrix[x][y].alpha;
                this._context.drawImage(
                    this.tileset.image,
                    this.tileset.tileX(this.matrix[x][y].value),
                    this.tileset.tileY(this.matrix[x][y].value),
                    this.tileset.tileWidth,
                    this.tileset.tileHeight,
                    dWidth * x,
                    dHeight * y,
                    this.tileset.tileWidth,
                    this.tileset.tileHeight
                );
            }
        }

        // animation layer
        for (let i = 0; i < this.animator.animations.length; i++) {
            if (this.animator.animations[i].frames.length > 0) {
                let frame = this.animator.animations[i].frames.shift();

                for (let j = 0; j < frame.targets.length; j++) {
                    let target = frame.targets.shift();

                    this._context.globalAlpha = target.tile.alpha;
                    this._context.drawImage(
                        this.tileset.image,
                        this.tileset.tileX(target.tile.value),
                        this.tileset.tileY(target.tile.value),
                        this.tileset.tileWidth,
                        this.tileset.tileHeight,
                        this.tileset.tileWidth * (this.animator.animations[i].x + target.xOffset),
                        this.tileset.tileHeight * (this.animator.animations[i].y + target.yOffset),
                        this.tileset.tileWidth,
                        this.tileset.tileHeight
                    );
                }
            } else {
                this._animator.animations.splice(i, 1);
                i--;
            }
        }

        // mouse layer
        this.context.globalAlpha = 1;
        this._context.drawImage(
            this.tileset.image,
            this.tileset.tileX(255),
            this.tileset.tileY(255),
            this.tileset.tileWidth,
            this.tileset.tileHeight,
            this.tileset.tileWidth * Math.floor(this.control.x / sWidth),
            this.tileset.tileHeight * Math.floor(this.control.y / sHeight),
            this.tileset.tileWidth,
            this.tileset.tileHeight
        );
    }

    /**
     * Propagates mouse down event.
     */
    private propagateMouseDown(event: MouseEvent) {
        event.preventDefault();

        this.control.mouseDown(event);
    }

    /**
     * Propagates mouse up event.
     */
    private propagateMouseUp(event: MouseEvent) {
        event.preventDefault();

        this.control.mouseUp(event);
    }

    /**
     * Propagates context menu event.
     */
    private propagateContextMenu(event: MouseEvent) {
        event.preventDefault();

        this.control.contextMenu(event);
    }

    /**
     * Propagates mouse move event.
     */
    private propagateMouseMove(event: MouseEvent) {
        event.preventDefault();

        this.control.mouseMove(event);
    }

    /**
     * Propagates key down event.
     */
    private propagateKeyDown(event: KeyboardEvent) {
        this.control.keyDown(event);
    }
}