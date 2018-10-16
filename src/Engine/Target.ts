/// <reference path="./Tile.ts" />

namespace Engine {

    /**
     * Class representing a target.
     */
    export class Target {
        private _xOffset: number;
        private _yOffset: number;
        private _tile: Tile;

        /**
         * Creates a target.
         * @param  {number} xOffset - The x offset.
         * @param  {number} yOffset - The y offset.
         * @param  {Tile} tile - The tile.
         */
        public constructor(xOffset: number, yOffset: number, tile: Tile) {
            this._xOffset = xOffset;
            this._yOffset = yOffset;
            this._tile = tile;
        }

        public get xOffset(): number {
            return this._xOffset;
        }

        public get yOffset(): number {
            return this._yOffset;
        }

        public get tile(): Tile {
            return this._tile;
        }
    }
}