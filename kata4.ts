export class Kata4 {
    public findShortestString(array: string[]): string {
        let shortestString: string = array[0];
        for (let i = 0; i < array.length; i++) {
            if (array[i].length < shortestString.length) {
                shortestString = array[i];
            }
        }
        return shortestString;
    }

    public findShortestString2(array: string[]): string {
        //find the shortest string in the array using reduce
        return array.reduce((shortestString, currentString) => {
            if (currentString.length < shortestString.length) {
                return currentString;
            }
            return shortestString;
        });
    }

    // Nota - Alessio: TEST Brushes: From previous method findShortestString2 apply:
    // Make Robust => it added if at the beginning of the method
    // Document => add comments before the method, that describe functionality
    // Readable => expand some blocks, add some variable to make it more readable

    // This function finds the shortest string in an array of strings
    // It assumes that the array is not empty
    // It throws an error if the array is empty or if the array is not an array
    // It assumes that the shortest string is the first string in the array
    // It loops through the array, and checks if the current string is shorter than the shortest string
    // It returns the shortest string in the array

    public findShortestStringRobust(array: string[]): string {
        if (!Array.isArray(array)) {
            throw new Error('Array is not an array');
        }
        if (array.length === 0) {
            throw new Error('Array cannot be empty');
        }

        // We assume that the shortest string is the first one
        let shortestString = array[0];

        // We loop through the array, and check if the current string is shorter than the shortest string
        for (let i = 1; i < array.length; i++) {
            if (array[i].length < shortestString.length) {
                shortestString = array[i];
            }
        }

        return shortestString;
    }
}

