import { logExecutionTime } from "./decorator";

export class Kata2 {
    constructor() { }

    //method that an array of numbers, return the sum of all of the positives ones.
    //if there are no positive numbers, return 0
    @logExecutionTime(true)
    public sumOfPositiveNumbers(array: number[]): number {
        let sum = 0;
        for (let i = 0; i < array.length; i++) {
            if (array[i] > 0) {
                sum += array[i];
            }
        }
        return sum;
    }

    //method that an array of numbers, return the sum of all of the positives ones.
    //if there are no positive numbers, return 0. Use reduce
    @logExecutionTime(true)
    public sumOfPositiveNumbers2(array: number[]): number {
        return array.reduce((sum, current) => {
            if (current > 0) {
                return sum + current;
            }
            return sum;
        }, 0);
    }

}