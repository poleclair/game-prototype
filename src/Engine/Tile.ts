namespace Engine {

    /**
     * Class representing a tile.
     */
    export class Tile {
        private _x: number;
        private _y: number;
        private _alpha: number;

        /**
         * Creates a tile.
         * @param {number} x - The x;
         * @param {number} y - The y;
         * @param {number} alpha - The alpha.
         */
        public constructor(x: number, y: number, alpha: number) {
            this._x = x;
            this._y = y;
            this._alpha = alpha;
        }

        public get x(): number {
            return this._x;
        }

        public get y(): number {
            return this._y;
        }

        public get alpha(): number {
            return this._alpha;
        }
    }
}