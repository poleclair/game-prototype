/// <reference path="Animator/Animation.ts"/>
/// <reference path="Animator/Frame.ts"/>
/// <reference path="Animator/Target.ts"/>

/// <reference path="Control/Control.ts"/>

/**
 * Class representing an engine.
 */
class Engine {
    private _name: string;
    private _width: number;
    private _height: number;
    private _tileset: Tileset;
    private _canvas: HTMLCanvasElement;
    private _context: CanvasRenderingContext2D;
    private _animator: Animator;
    private _control: Control;
    private _layers: Array<Layer>;
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
    public constructor(name: string, width: number, height: number, tileset: Tileset) {
        this._name = name;
        this._width = width;
        this._height = height;
        this._tileset = tileset;

        this._canvas = document.createElement('canvas');
        this._canvas.id = this.name;
        this._canvas.width = this._width * this._tileset.tileWidth;
        this._canvas.height = this._height * this._tileset.tileHeight;

        this._context = this._canvas.getContext('2d');

        this._animator = new Animator();
        this._control = new Control();
        this._layers = [];
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

    public get layers() {
        return this._layers;
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
    public init(callback) {
        window.onload = function () {
            document.body.appendChild(this._canvas);

            document.addEventListener('keydown', this.propagateKeyDown.bind(this));

            this.canvas.addEventListener('mousedown', this.propagateMouseDown.bind(this));
            this.canvas.addEventListener('mouseup', this.propagateMouseUp.bind(this));
            this.canvas.addEventListener('contextmenu', this.propagateContextMenu.bind(this));
            this.canvas.addEventListener('mousemove', this.propagateMouseMove.bind(this));

            callback();
        }.bind(this);
    }

    /**
     * Starts the engine.
     */
    public start() {
        this.pid = requestAnimationFrame(function () {
            this.clear();
            this.draw();
        }.bind(this));
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
        for (let l = 0; l < this.layers.length; l++) {
            for (let x = 0; x < this.layers[l].width; x++) {
                for (let y = 0; y < this.layers[l].height; y++) {
                    this._context.globalAlpha = this.layers[l].tiles[x][y].alpha;
                    this._context.drawImage(
                        this.tileset.image,
                        this.tileset.tileWidth * this.layers[l].tiles[x][y].x,
                        this.tileset.tileHeight * this.layers[l].tiles[x][y].y,
                        this.tileset.tileWidth,
                        this.tileset.tileHeight,
                        (this.tileset.tileWidth * x) + (this.tileset.tileWidth * this.layers[l].x),
                        (this.tileset.tileHeight * y) + (this.tileset.tileHeight * this.layers[l].y),
                        this.tileset.tileWidth,
                        this.tileset.tileHeight
                    );
                }
            }
            for (let i = this.layers[l].animator.animations.length - 1; i >= 0; i--) {
                if (this.layers[l].animator.animations[i].frames.length > 0) {
                    let frame = this.layers[l].animator.animations[i].frames.shift();

                    for (let j = frame.targets.length; j > 0; j--) {
                        let target = frame.targets.shift();

                        if (this.layers[l].animator.animations[i].x + target.xOffset >= 0 &&
                            this.layers[l].animator.animations[i].x + target.xOffset < this.layers[l].width &&
                            this.layers[l].animator.animations[i].y + target.yOffset >= 0 &&
                            this.layers[l].animator.animations[i].y + target.yOffset < this.layers[l].height) {
                            this._context.globalAlpha = target.tile.alpha;
                            this._context.drawImage(
                                this.tileset.image,
                                this.tileset.tileWidth * target.tile.x,
                                this.tileset.tileHeight * target.tile.y,
                                this.tileset.tileWidth,
                                this.tileset.tileHeight,
                                (this.tileset.tileWidth * (this.layers[l].animator.animations[i].x + target.xOffset)) + (this.tileset.tileWidth * this.layers[l].x),
                                (this.tileset.tileHeight * (this.layers[l].animator.animations[i].y + target.yOffset)) + (this.tileset.tileHeight * this.layers[l].y),
                                this.tileset.tileWidth,
                                this.tileset.tileHeight
                            );
                        }
                    }
                } else {
                    this.layers[l].animator.animations.splice(i, 1);
                }
            }
        }

        // mouse layer
        // this.context.globalAlpha = 1;
        // this._context.drawImage(
        //     this.tileset.image,
        //     this.tileset.tileWidth * 15,
        //     this.tileset.tileHeight * 15,
        //     this.tileset.tileWidth,
        //     this.tileset.tileHeight,
        //     this.tileset.tileWidth * Math.floor(this.control.x / this.tileset.tileWidth),
        //     this.tileset.tileHeight * Math.floor(this.control.y / this.tileset.tileHeight),
        //     this.tileset.tileWidth,
        //     this.tileset.tileHeight
        // );
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