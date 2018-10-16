/**
 * Class representing a die.
 */
class Die {
    /**
     * Gets a die roll of the given side count.
     * @param {number} sideCount - The side count.
     * @return {number}
     */
    static RollD(sideCount: number): number {
        return Math.floor(Math.random() * sideCount) + 1;
    }

    /**
     * Gets a die roll of the given side count with advantage.
     * @param {number} sideCount - The side count.
     * @return {number}
     */
    static RollAD(sideCount: number): number {
        let roll1: number = this.RollD(sideCount);
        let roll2: number = this.RollD(sideCount);

        return roll1 < roll2 ? roll2 : roll1;
    }

    /**
     * Gets a die roll of the given side count with disadvantage.
     * @param {number} sideCount - The side count.
     * @return {number}
     */
    static RollDD(sideCount: number): number {
        let roll1: number = this.RollD(sideCount);
        let roll2: number = this.RollD(sideCount);

        return roll1 < roll2 ? roll1 : roll2;
    }

    /**
     * Gets a random ability array roll.
     * @return {Array<number>}
     */
    static RollRAA(): Array<number> {
        let result: Array<number> = [0, 0, 0, 0, 0, 0];

        for (let i: number = 0; i < 6; i++) {
            let roll: Array<number> = [this.RollD(6), this.RollD(6), this.RollD(6), this.RollD(6)].sort();

            for (let y: number = 1; y < roll.length; y++) {
                result[i] += roll[y];
            }
        }

        return result;
    }

    /**
     * Gets a standard ability array roll.
     * @return {Array<number>}
     */
    static RollSAA(): Array<number> {
        return [15, 14, 13, 12, 10, 8];
    }
}