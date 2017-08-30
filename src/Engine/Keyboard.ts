/**
 * Class representing a keyboard.
 */
class Keyboard {
    private _key: number;

    /**
     * Creates a keyboard.
     * @return {Keyboard}
     */
    public constructor() {
        this._key = 0;
    }

    public get key() {
        return this._key;
    }

    public set key(value) {
        this._key = value;
    }

    /**
     * Triggers key down.
     */
    public keyDown(event) {
        this.key = event.keyCode;
    }
}