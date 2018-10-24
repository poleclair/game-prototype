/// <reference path="./Animation.ts" />
/// <reference path="./Frame.ts" />
/// <reference path="./Target.ts" />
/// <reference path="./Tile.ts" />

namespace Engine {

    /**
     * Class representing an animator.
     */
    export class Animator {
        private _animations: Array<Animation>;

        /**
         * Creates an animator.
         */
        public constructor() {
            this._animations = [];
        }

        public get animations(): Array<Animation> {
            return this._animations;
        }

        /**
         * Adds a circle fade out animation to the queue.
         * @param {number} x - The x;
         * @param {number} y - The y;
         * @param {number} length - The length;
         * @param {number} size - The size;
         */
        public addCircleFadeOut(x: number, y: number, length: number, size: number): void {
            let animation: Animation = new Animation(x, y, []);
            let alpha: number = 1 / length;

            for (let i: number = 0; i < length; i++) {
                let frame: Frame = new Frame([new Target(0, 0, new Tile(15, 15, 1 - (alpha * i)))]);

                for (let j: number = 1; j < size; j++) {
                    frame.targets.push(new Target(0, 0 + j, new Tile(15, 15, 1 - (alpha * i))));
                    frame.targets.push(new Target(0, 0 - j, new Tile(15, 15, 1 - (alpha * i))));
                    frame.targets.push(new Target(0 + j, 0, new Tile(15, 15, 1 - (alpha * i))));
                    frame.targets.push(new Target(0 - j, 0, new Tile(15, 15, 1 - (alpha * i))));
                }

                animation.frames.push(frame);
            }

            this._animations.push(animation);
        }

        /**
         * Adds a projectile animation to the queue.
         * @param {number} x0 - The x0;
         * @param {number} y0 - The y0;
         * @param {number} x1 - The x1;
         * @param {number} y1 - The y1;
         */
        public addProjectile(x0: number, y0: number, x1: number, y1: number): void {
            let animation: Animation = new Animation(x0, y0, []);

            let dx: number = x1 - x0;
            let dy: number = y1 - y0;
            let nx: number = Math.abs(dx);
            let ny: number = Math.abs(dy);
            let signX: number = dx > 0 ? 1 : -1;
            let signY: number = dy > 0 ? 1 : -1;

            let cx: number = x0;
            let cy: number = x0;

            animation.frames.push(new Frame([new Target(cx, cy, new Tile(15, 15, 1))]));

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

                animation.frames.push(new Frame([new Target(cx, cy, new Tile(15, 15, 1))]));
            }

            this._animations.push(animation);
        }
    }
}