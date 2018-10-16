/// <reference path="./Frame.ts" />

namespace Engine {

    /**
     * Class representing a animation.
     */
    export class Animation {
        private _x: number;
        private _y: number;
        private _frames: Array<Frame>;

        /**
         * Creates an animation.
         * @param {number} x - The x.
         * @param {number} y - The y.
         * @param {Array<Frame>} frames - The frames.
         * @return {Animation}
         */
        public constructor(x: number, y: number, frames: Array<Frame>) {
            this._x = x;
            this._y = y;
            this._frames = frames;
        }

        public get x(): number {
            return this._x;
        }

        public get y(): number {
            return this._y;
        }

        public get frames(): Array<Frame> {
            return this._frames;
        }
    }
}