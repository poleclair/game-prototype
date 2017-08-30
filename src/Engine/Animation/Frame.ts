/**
 * Class representing a frame.
 */
class Frame {
    private _targets: Array<Target>;

    /**
     * Creates a frame.
     * @param {Array<Target>} targets - The targets
     * @return {Frame}
     */
    public constructor(targets: Array<Target>) {
        this._targets = targets;
    }

    public get targets() {
        return this._targets;
    }
}