/// <reference path="Control/Control.ts"/>

/**
 * Class representing an engine.
 */
class Engine {
    private _id: string;
    private _width: number;
    private _height: number;

    private _layers: Array<Layer>;
    private _control: Control;
    private _container: HTMLDivElement;
    private _pid: number;

    /**
     * Creates an engine.
     * @constructor
     * @param {string} id - The id.
     * @param {number} width - The width.
     * @param {number} height - The width.
     * @return {Engine}
     */
    public constructor(id: string, width: number, height: number) {
        this._id = id;
        this._width = width;
        this._height = height;

        this._layers = [];
        this._control = new Control();

        this._container = document.createElement('div');
        this._container.id = id;
        this._container.style.width = width + 'px';
        this._container.style.height = height + 'px';
        this._container.style.position = 'relative';
    }

    public get id() {
        return this._id;
    }

    public get width() {
        return this._width;
    }

    public get height() {
        return this._height;
    }

    public get container() {
        return this._container;
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

            this.layers.forEach(layer => {
                this.container.appendChild(layer.canvas);
            });

            document.body.appendChild(this.container);

            document.addEventListener('keydown', this.propagateKeyDown.bind(this));

            this.container.addEventListener('mousedown', this.propagateMouseDown.bind(this));
            this.container.addEventListener('mouseup', this.propagateMouseUp.bind(this));
            this.container.addEventListener('contextmenu', this.propagateContextMenu.bind(this));
            this.container.addEventListener('mousemove', this.propagateMouseMove.bind(this));

            callback();
        }.bind(this);
    }

    /**
     * Starts the engine.
     */
    public start() {
        this.pid = requestAnimationFrame(this.update.bind(this));
    }

    /**
     * Updates the engine.
     */
    public update() {
        // this.clear();
        // this.draw();
        this.pid = requestAnimationFrame(this.update.bind(this));
    }

    /**
     * Stops the engine.
     */
    public stop() {
        cancelAnimationFrame(this.pid);
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