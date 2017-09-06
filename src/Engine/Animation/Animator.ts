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
            new Frame([new Target(0, 0, new Pixel(255, 0, 0, 1.0))]),
            new Frame([new Target(0, 0, new Pixel(255, 25, 0, 0.9))]),
            new Frame([new Target(0, 0, new Pixel(255, 50, 0, 0.8))]),
            new Frame([new Target(0, 0, new Pixel(255, 75, 0, 0.7))]),
            new Frame([new Target(0, 0, new Pixel(255, 100, 0, 0.6))]),
            new Frame([new Target(0, 0, new Pixel(255, 125, 0, 0.5))]),
            new Frame([new Target(0, 0, new Pixel(255, 150, 0, 0.4))]),
            new Frame([new Target(0, 0, new Pixel(255, 175, 0, 0.3))]),
            new Frame([new Target(0, 0, new Pixel(255, 200, 0, 0.2))]),
            new Frame([new Target(0, 0, new Pixel(255, 225, 0, 0.1))])
        ]);

        this._animations.push(animation);
    }
}