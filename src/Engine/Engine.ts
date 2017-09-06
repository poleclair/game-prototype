/// <reference path="Animation/Animation.ts"/>
/// <reference path="Animation/Frame.ts"/>
/// <reference path="Animation/Target.ts"/>

/// <reference path="Control.ts"/>
/// <reference path="Grid.ts"/>
/// <reference path="Pixel.ts"/>

/**
 * Class representing an engine.
 */
class Engine {
    private _fps: number;

    private _pid: number;
    private _resolution: number;
    private _canvas: HTMLCanvasElement;
    private _context: CanvasRenderingContext2D;
    private _control: Control;
    private _animator: Animator;
    private _grid: Grid;

    /**
     * Creates an engine.
     * @constructor
     * @param {number} width - The width.
     * @param {number} height - The width.
     * @param {number} resolution - The resolution.
     * @param {number} fps - The frame per second.
     * @return {Engine}
     */
    public constructor(width: number, height: number, resolution: number, fps: number) {
        this._fps = 1000 / fps;
        this._resolution = resolution;

        this._canvas = document.createElement('canvas');
        this._canvas.id = 'canvas';
        this._canvas.style.cursor = 'none';
        this._canvas.width = width * this._resolution;
        this._canvas.height = height * this._resolution;

        this._context = this._canvas.getContext('2d');

        this._control = new Control();
        this._grid = new Grid(width, height);
        this._animator = new Animator();
    }

    public get animator() {
        return this._animator;
    }

    public get canvas() {
        return this._canvas;
    }

    public get context() {
        return this._context;
    }

    public get control() {
        return this._control;
    }

    public get fps() {
        return this._fps;
    }

    public get layerGround() {
        return this._grid;
    }

    public get pid() {
        return this._pid;
    }

    public set pid(value: number) {
        this._pid = value;
    }

    public get resolution() {
        return this._resolution;
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
        // grid layer
        for (let x = 0; x < this.layerGround.width; x++) {
            for (let y = 0; y < this.layerGround.height; y++) {
                this.context.globalAlpha = this.layerGround.pixels[x][y].alpha;
                this.context.fillStyle = 'rgb(' + this.layerGround.pixels[x][y].red + ',' + this.layerGround.pixels[x][y].green + ',' + this.layerGround.pixels[x][y].blue + ')';
                this.context.fillRect(x * this.resolution, y * this.resolution, this.resolution, this.resolution);
            }
        }

        // animation layer
        for (let i = 0; i < this.animator.animations.length; i++) {
            if (this.animator.animations[i].frames.length > 0) {
                let frame = this.animator.animations[i].frames.shift();

                for (let j = 0; j < frame.targets.length; j++) {
                    let target = frame.targets.shift();

                    this.context.globalAlpha = target.pixel.alpha;
                    this.context.fillStyle = 'rgb(' + target.pixel.red + ',' + target.pixel.green + ',' + target.pixel.blue + ')';
                    this.context.fillRect((this.animator.animations[i].x + target.xOffset) * this.resolution, (this.animator.animations[i].y + target.yOffset) * this.resolution, this.resolution, this.resolution);
                }
            } else {
                this._animator.animations.splice(i, 1);
                i--;
            }
        }

        // mouse layer
        let x = Math.floor(this.control.x / this.resolution);
        let y = Math.floor(this.control.y / this.resolution);

        this.context.globalAlpha = 1;
        this.context.fillStyle = 'rgb(255,255,255)';
        this.context.fillRect(x * this.resolution, y * this.resolution, this.resolution, this.resolution);
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