/**
 * Class representing a die.
 */
class Die {
    /**
     * Gets a die roll of the given side count.
     * @param {number} sideCount - The side count.
     * @return {number}
     */
    static RollD(sideCount: number) {
        return Math.floor(Math.random() * sideCount) + 1;
    }

    /**
     * Gets a die roll of the given side count with advantage.
     * @param {number} sideCount - The side count.
     * @return {number}
     */
    static RollAD(sideCount: number) {
        let roll1 = this.RollD(sideCount);
        let roll2 = this.RollD(sideCount);

        return roll1 < roll2 ? roll2 : roll1;
    }

    /**
     * Gets a die roll of the given side count with disadvantage.
     * @param {number} sideCount - The side count.
     * @return {number}
     */
    static RollDD(sideCount: number) {
        let roll1 = this.RollD(sideCount);
        let roll2 = this.RollD(sideCount);

        return roll1 < roll2 ? roll1 : roll2;
    }

    /**
     * Gets a random ability array roll.
     * @return {Array<number>}
     */
    static RollRAA() {
        let result = [0, 0, 0, 0, 0, 0];

        for (let i = 0; i < 6; i++) {
            let roll = [this.RollD(6), this.RollD(6), this.RollD(6), this.RollD(6)].sort();

            for (let y = 1; y < roll.length; y++) {
                result[i] += roll[y];
            }
        }

        return result;
    }

    /**
     * Gets a standard ability array roll.
     * @return {Array<number>}
     */
    static RollSAA() {
        return [15, 14, 13, 12, 10, 8];
    }
}