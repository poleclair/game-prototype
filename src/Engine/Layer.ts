/// <reference path="./Tileset.ts" />

namespace Engine {

    /**
     * Class representing a layer.
     */
    export class Layer {
        private _id: string;
        private _x: number;
        private _y: number;
        private _z: number;
        private _width: number;
        private _height: number;
        private _refresh: boolean;
        private _tileset: Tileset;

        private _widthInTile: number;
        private _heightInTile: number;
        private _animator: Animator;
        private _tiles: Array<Array<Tile>>;
        private _canvas: HTMLCanvasElement;
        private _context: CanvasRenderingContext2D;
        private _pid: number;

        /**
         * Creates a layer.
         * @param {string} id - The id.
         * @param {number} x - The x position.
         * @param {number} y - The y position.
         * @param {number} z - The z position.
         * @param {number} width - The width in pixel.
         * @param {number} height - The height in pixel.
         * @param {boolean} refresh - Is layer refresh on.
         * @param {Tileset} tileset - The tileset.
         */
        public constructor(id: string, x: number, y: number, z: number, width: number, height: number, refresh: boolean, tileset: Tileset) {
            this._id = id;
            this._x = x;
            this._y = y;
            this._z = z;
            this._width = width;
            this._height = height;
            this._refresh = refresh;
            this._tileset = tileset;

            this._widthInTile = width / tileset.tileWidth;
            this._heightInTile = height / tileset.tileHeight;
            this._animator = new Animator();
            this._tiles = [];

            for (let x: number = 0; x < width; x++) {
                this._tiles[x] = [];

                for (let y: number = 0; y < height; y++) {
                    this._tiles[x][y] = new Tile(0, 0, 1);
                }
            }

            this._canvas = document.createElement("canvas");
            this._canvas.id = id;
            this._canvas.width = width;
            this._canvas.height = height;
            this._canvas.style.zIndex = z.toString();
            this._canvas.style.position = "absolute";
            this._canvas.style.left = x + "px";
            this._canvas.style.top = y + "px";

            this._context = this._canvas.getContext("2d");
        }

        public get id(): string {
            return this._id;
        }

        public get x(): number {
            return this._x;
        }

        public get y(): number {
            return this._y;
        }

        public get z(): number {
            return this._z;
        }

        public get width(): number {
            return this._width;
        }

        public get height(): number {
            return this._height;
        }

        public get refresh(): boolean {
            return this._refresh;
        }

        public get tileset(): Tileset {
            return this._tileset;
        }

        public get widthInTile(): number {
            return this._widthInTile;
        }

        public get heightInTile(): number {
            return this._heightInTile;
        }

        public get animator(): Animator {
            return this._animator;
        }

        public get tiles(): Array<Array<Tile>> {
            return this._tiles;
        }

        public get canvas(): HTMLCanvasElement {
            return this._canvas;
        }

        public get context(): CanvasRenderingContext2D {
            return this._context;
        }

        public get pid(): number {
            return this._pid;
        }

        public set pid(value: number) {
            this._pid = value;
        }

        /**
         * Starts the layer.
         */
        public start(): void {
            if (this.refresh) {
                this.pid = requestAnimationFrame(this.update.bind(this));
            } else {
                this.pid = requestAnimationFrame(this.tick.bind(this));
            }
        }

        /**
         * Updates the layer.
         */
        public update(): void {
            this.tick();
            this.pid = requestAnimationFrame(this.update.bind(this));
        }

        /**
         * Ticks the layer.
         */
        public tick(): void {
            this.clear();
            this.draw();
        }

        /**
         * Stops the layer.
         */
        public stop(): void {
            cancelAnimationFrame(this.pid);
        }

        /**
         * Clears the engine.
         */
        public clear(): void {
            this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        }

        /**
         * Draws the engine.
         */
        public draw(): void {
            for (let x: number = 0; x < this.widthInTile; x++) {
                for (let y: number = 0; y < this.heightInTile; y++) {
                    this.context.globalAlpha = this.tiles[x][y].alpha;
                    this.context.drawImage(
                        this.tileset.image,
                        this.tileset.tileWidth * this.tiles[x][y].x,
                        this.tileset.tileHeight * this.tiles[x][y].y,
                        this.tileset.tileWidth,
                        this.tileset.tileHeight,
                        this.tileset.tileWidth * x,
                        this.tileset.tileHeight * y,
                        this.tileset.tileWidth,
                        this.tileset.tileHeight
                    );
                }
            }

            for (let i: number = this.animator.animations.length - 1; i >= 0; i--) {
                if (this.animator.animations[i].frames.length > 0) {
                    let frame: Frame = this.animator.animations[i].frames.shift();

                    for (let j: number = frame.targets.length; j > 0; j--) {
                        let target: Target = frame.targets.shift();

                        if (this.animator.animations[i].x + target.xOffset >= 0 &&
                            this.animator.animations[i].x + target.xOffset < this.width &&
                            this.animator.animations[i].y + target.yOffset >= 0 &&
                            this.animator.animations[i].y + target.yOffset < this.height) {
                            this._context.globalAlpha = target.tile.alpha;
                            this._context.drawImage(
                                this.tileset.image,
                                this.tileset.tileWidth * target.tile.x,
                                this.tileset.tileHeight * target.tile.y,
                                this.tileset.tileWidth,
                                this.tileset.tileHeight,
                                this.tileset.tileWidth * (this.animator.animations[i].x + target.xOffset),
                                this.tileset.tileHeight * (this.animator.animations[i].y + target.yOffset),
                                this.tileset.tileWidth,
                                this.tileset.tileHeight
                            );
                        }
                    }
                } else {
                    this.animator.animations.splice(i, 1);
                }
            }
        }
    }
}