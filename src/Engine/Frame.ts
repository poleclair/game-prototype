/// <reference path="./Target.ts" />

namespace Engine {

    /**
     * Class representing a frame.
     */
    export class Frame {
        private _targets: Array<Target>;

        /**
         * Creates a frame.
         * @param {Array<Target>} targets - The targets
         * @return {Frame}
         */
        public constructor(targets: Array<Target>) {
            this._targets = targets;
        }

        public get targets(): Array<Target> {
            return this._targets;
        }
    }
}