/**
 * Class representing an engine.
 */
class Engine {
    private _canvas: HTMLCanvasElement;
    private _context: CanvasRenderingContext2D;

    /**
     * Creates an engine.
     * @constructor
     * @return {Engine}
     */
    public constructor() {
        this._canvas = document.createElement("canvas");
        this._canvas.width = 640;
        this._canvas.height = 480;

        this._context = this._canvas.getContext("2d");
    }

    /**
     * Initializes the engine.
     */
    public init() {
        window.onload = function () {
            document.body.appendChild(this._canvas);
        }.bind(this);
    }
}