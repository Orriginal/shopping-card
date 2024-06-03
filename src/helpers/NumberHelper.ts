/**
 * Helper class for number related operations.
 */
export class NumberHelper {
    /**
     * Generates a random number between min and max.
     * @param min
     * @param max
     * @returns {number}
     */
    public static randomNumber(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
}
