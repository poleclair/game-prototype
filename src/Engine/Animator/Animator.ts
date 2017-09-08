/**
 * Class representing an animator.
 */
class Animator {
    private _animations: Array<Animation>;

    /**
     * Creates an animator.
     * @return {Animator}
     */
    public constructor() {
        this._animations = [];
    }

    public get animations() {
        return this._animations;
    }

    /**
     * Adds a fire animation to the queue.
     * @param {number} x - The x;
     * @param {number} y - The y;
     */
    public addFire(x: number, y: number) {
        let animation = new Animation(x, y, [
            new Frame([new Target(0, 0, new Tile(15, 15, 1.0))]),
            new Frame([new Target(0, 0, new Tile(15, 15, 0.9))]),
            new Frame([new Target(0, 0, new Tile(15, 15, 0.8))]),
            new Frame([new Target(0, 0, new Tile(15, 15, 0.7))]),
            new Frame([new Target(0, 0, new Tile(15, 15, 0.6))]),
            new Frame([new Target(0, 0, new Tile(15, 15, 0.5))]),
            new Frame([new Target(0, 0, new Tile(15, 15, 0.4))]),
            new Frame([new Target(0, 0, new Tile(15, 15, 0.3))]),
            new Frame([new Target(0, 0, new Tile(15, 15, 0.2))]),
            new Frame([new Target(0, 0, new Tile(15, 15, 0.1))])
        ]);

        this._animations.push(animation);
    }

    /**
     * Adds a circle fade out animation to the queue.
     * @param {number} x - The x;
     * @param {number} y - The y;
     * @param {number} length - The length;
     * @param {number} size - The size;
     */
    public addCircleFadeOut(x: number, y: number, length: number, size: number) {
        let animation = new Animation(x, y, []);
        let alpha = 1 / length;

        for (let i = 0; i < length; i++) {
            let frame = new Frame([new Target(0, 0, new Tile(15, 15, 1 - (alpha * i)))]);

            for (let j = 1; j < size; j++) {
                frame.targets.push(new Target(0, 0 + j, new Tile(15, 15, 1 - (alpha * i))));
                frame.targets.push(new Target(0, 0 - j, new Tile(15, 15, 1 - (alpha * i))));
                frame.targets.push(new Target(0 + j, 0, new Tile(15, 15, 1 - (alpha * i))));
                frame.targets.push(new Target(0 - j, 0, new Tile(15, 15, 1 - (alpha * i))));
            }

            animation.frames.push(frame);
        }

        this._animations.push(animation);
    }
}