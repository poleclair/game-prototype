/**
 * Class representing a logger.
 */
class Logger {
    /**
     * Logs an attack and damage roll.
     * @param {string} actorName - The actor name.
     * @param {AttackRollResultEnum} attackRollResultId - The attack roll result id.
     * @param {number} d20Roll - The d20 roll.
     * @param {number} abilityModifierScore - The ability modifier score.
     * @param {number} armorClass - The armor class.
     * @param {Array<number>} damages - The damages.
     * @param {DamageTypeEnum} damageTypeId - The damage type id.
     */
    static AttackDamage(actorName: string, attackRollResultId: AttackRollResultEnum, d20Roll: number,
        abilityModifierScore: number, armorClass: number, damages: Array<number>, damageTypeId: DamageTypeEnum): void {
        switch (attackRollResultId) {
            case AttackRollResultEnum.CRITICAL:
            case AttackRollResultEnum.HIT:
                console.log(actorName + " " + Converter.AttackRollResultEnumToString(attackRollResultId) +
                    " [Roll:" + d20Roll + " + Mod:" + abilityModifierScore + " vs AC:" + armorClass + "] for " +
                    damages.reduce((a, b) => a + b, 0) + " " + this.DamagesToString(damages) + " " +
                    Converter.DamageTypeEnumToString(damageTypeId) + " damage");
                break;
            case AttackRollResultEnum.MISS:
                console.log(actorName + " " + Converter.AttackRollResultEnumToString(attackRollResultId) +
                    " [Roll:" + d20Roll + " + Mod:" + abilityModifierScore + " vs AC:" + armorClass + "]");
                break;
        }
    }

    /**
     * Logs an attack and damage roll.
     * @param {string} actorName - The actor name.
     * @param {number} currentHitPoint - The current hit point.
     * @param {number} maximumHitPoint - The maximum hit point.
     */
    static HitPoints(actorName: string, currentHitPoint: number, maximumHitPoint: number): void {
        console.log(actorName + " Hit Points: " + currentHitPoint + "/" + maximumHitPoint);
    }

    /**
     * Gets the string value of damages.
     * @param {Array<number>} damages - The damages.
     */
    static DamagesToString(damages: Array<number>): string {
        let result: string = "[";

        for (let i: number = 0; i < damages.length; i++) {
            if (i + 1 < damages.length) {
                result += "Roll:" + damages[i] + " + ";
            } else {
                result += "Mod:" + damages[i];
            }
        }

        return result + "]";
    }
}