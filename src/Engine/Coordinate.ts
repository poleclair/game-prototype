namespace Engine {

    /**
     * Class representing a coordinate.
     */
    export class Coordinate {
        private _x: number;
        private _y: number;

        /**
         * Creates a coordinate.
         * @param {number} x - The x;
         * @param {number} y - The y;
         * @return {Coordinate}
         */
        public constructor(x: number, y: number) {
            this._x = x;
            this._y = y;
        }

        public get x(): number {
            return this._x;
        }

        public get y(): number {
            return this._y;
        }
    }
}