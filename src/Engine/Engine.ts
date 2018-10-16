/// <reference path="./Control.ts" />
/// <reference path="./Layer.ts" />

namespace Engine {

    /**
     * Class representing an engine.
     */
    export class Engine {
        private _id: string;
        private _width: number;
        private _height: number;

        private _layers: Array<Layer>;
        private _control: Control;
        private _container: HTMLDivElement;

        /**
         * Creates an engine.
         * @constructor
         * @param {string} id - The id.
         * @param {number} width - The width.
         * @param {number} height - The width.
         */
        public constructor(id: string, width: number, height: number) {
            this._id = id;
            this._width = width;
            this._height = height;

            this._layers = [];
            this._control = new Control();

            this._container = document.createElement("div");
            this._container.id = id;
            this._container.style.width = width + "px";
            this._container.style.height = height + "px";
            this._container.style.position = "relative";
            this._container.style.margin = "0px auto";
        }

        public get id(): string {
            return this._id;
        }

        public get width(): number {
            return this._width;
        }

        public get height(): number {
            return this._height;
        }

        public get container(): HTMLDivElement {
            return this._container;
        }

        public get control(): Control {
            return this._control;
        }

        public get layers(): Array<Layer> {
            return this._layers;
        }

        /**
         * Starts the engine.
         */
        public start(): void {
            this.init(function (): void {
                this.layers.forEach(layer => {
                    layer.start();
                });
            }.bind(this));
        }

        /**
         * Stops the engine.
         */
        public stop(): void {
            this.layers.forEach(layer => {
                layer.stop();
            });
        }

        /**
         * Initializes the engine.
         */
        private init(callback: any): void {
            window.onload = function (): void {

                this.layers.forEach(layer => {
                    this.container.appendChild(layer.canvas);
                });

                document.body.appendChild(this.container);

                document.addEventListener("keydown", this.propagateKeyDown.bind(this));

                this.container.addEventListener("mousedown", this.propagateMouseDown.bind(this));
                this.container.addEventListener("mouseup", this.propagateMouseUp.bind(this));
                this.container.addEventListener("contextmenu", this.propagateContextMenu.bind(this));
                this.container.addEventListener("mousemove", this.propagateMouseMove.bind(this));

                callback();
            }.bind(this);
        }

        /**
         * Propagates mouse down event.
         */
        private propagateMouseDown(event: MouseEvent): void {
            event.preventDefault();

            this.control.mouseDown(event);
        }

        /**
         * Propagates mouse up event.
         */
        private propagateMouseUp(event: MouseEvent): void {
            event.preventDefault();

            this.control.mouseUp(event);
        }

        /**
         * Propagates context menu event.
         */
        private propagateContextMenu(event: MouseEvent): void {
            event.preventDefault();

            this.control.contextMenu(event);
        }

        /**
         * Propagates mouse move event.
         */
        private propagateMouseMove(event: MouseEvent): void {
            event.preventDefault();

            this.control.mouseMove(event);
        }

        /**
         * Propagates key down event.
         */
        private propagateKeyDown(event: KeyboardEvent): void {
            this.control.keyDown(event);
        }

        /**
         * Gets the x and y coordonates of a line.
         * @param {number} x0 - The x0.
         * @param {number} y0 - The y0.
         * @param {number} x1 - The x1.
         * @param {number} y1 - The y1.
         * @return {Array<Coordinate>}
         */
        public static line(x0: number, y0: number, x1: number, y1: number): Array<Coordinate> {
            let result: Array<Coordinate> = new Array<Coordinate>();

            let dx: number = x1 - x0;
            let dy: number = y1 - y0;
            let nx: number = Math.abs(dx);
            let ny: number = Math.abs(dy);
            let signX: number = dx > 0 ? 1 : -1;
            let signY: number = dy > 0 ? 1 : -1;

            let cx: number = x0;
            let cy: number = x0;

            result.push(new Coordinate(cx, cy));

            for (let ix: number = 0, iy: number = 0; ix < nx || iy < ny;) {
                if ((0.5 + ix) / nx === (0.5 + iy) / ny) {
                    cx += signX;
                    cy += signY;
                    ix++;
                    iy++;
                } else if ((0.5 + ix) / nx < (0.5 + iy) / ny) {
                    cx += signX;
                    ix++;
                } else {
                    cy += signY;
                    iy++;
                }

                result.push(new Coordinate(cx, cy));
            }

            return result;
        }

        /**
         * Gets the x and y coordonates of a circle.
         * @param {number} x0 - The x.
         * @param {number} y0 - The y.
         * @param {number} radius - The radius.
         * @param {boolean} isFill - Is filled.
         * @return {Array<Coordinate>}
         */
        public static circle(x0: number, y0: number, radius: number, isFill: boolean): Array<Coordinate> {
            let result: Array<Coordinate> = new Array<Coordinate>();

            let x: number = 0;
            let y: number = radius;
            let d: number = 1 - radius;

            result.push(new Coordinate(x0, y0 + y));
            result.push(new Coordinate(x0, y0 - y));
            result.push(new Coordinate(x0 + y, y0));
            result.push(new Coordinate(x0 - y, y0));

            while (x < y - 1) {
                x = x + 1;

                if (d < 0) {
                    d = d + x + x + 1;
                } else {
                    y = y - 1;
                    let a: number = x - y + 1;
                    d = d + a + a;
                }

                result.push(new Coordinate(x + x0, y + y0));
                result.push(new Coordinate(y + x0, x + y0));
                result.push(new Coordinate(y + x0, 0 - x + y0));
                result.push(new Coordinate(x + x0, 0 - y + y0));
                result.push(new Coordinate(0 - x + x0, 0 - y + y0));
                result.push(new Coordinate(0 - y + x0, 0 - x + y0));
                result.push(new Coordinate(0 - y + x0, x + y0));
                result.push(new Coordinate(0 - x + x0, y + y0));
            }

            if (isFill) {
                for (let i: number = x0 - radius; i < x0 + radius; i++) {
                    for (let j: number = y0 - radius; j < y0 + radius; j++) {
                        if (Math.sqrt(Math.pow(i - x0, 2) + Math.pow(j - y0, 2)) <= radius) {
                            result.push(new Coordinate(i, j));
                        }
                    }
                }
            }

            return result;
        }

        /**
         * Gets the x and y coordonates of a square.
         * @param {number} x0 - The x.
         * @param {number} y0 - The y.
         * @param {number} radius - The radius.
         * @param {boolean} isFill - Is filled.
         * @return {Array<Coordinate>}
         */
        public static square(x0: number, y0: number, radius: number, isFill: boolean): Array<Coordinate> {
            let result: Array<Coordinate> = new Array<Coordinate>();

            for (let i: number = x0 - radius; i <= x0 + radius; i++) {
                result.push(new Coordinate(i, y0 + radius));
                result.push(new Coordinate(i, y0 - radius));
            }

            for (let i: number = y0 - radius + 1; i < y0 + radius; i++) {
                result.push(new Coordinate(x0 + radius, i));
                result.push(new Coordinate(x0 - radius, i));
            }

            if (isFill) {
                for (let i: number = x0 - radius + 1; i < x0 + radius; i++) {
                    for (let j: number = y0 - radius + 1; j < y0 + radius; j++) {
                        result.push(new Coordinate(i, j));
                    }
                }
            }

            return result;
        }
    }
}