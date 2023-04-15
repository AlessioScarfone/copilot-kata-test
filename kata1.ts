import { logExecutionTime } from "./decorator";

//function that given an array of strings, returns the longest string
export function findLongestString(array: string[]): string {
    let longestString: string = "";
    for (let i = 0; i < array.length; i++) {
        if (array[i].length > longestString.length) {
            longestString = array[i];
        }
    }
    return longestString;
}


export class Kata1 {
    constructor() { }

    @logExecutionTime(true)
    public replaceWithAlphabetPosition(text: string): string {
        let alphabet = "abcdefghijklmnopqrstuvwxyz";
        let result = "";
        for (let i = 0; i < text.length; i++) {
            let letter = text[i].toLowerCase();
            if (alphabet.indexOf(letter) != -1) {
                result += alphabet.indexOf(letter) + 1 + " ";
            }
        }
        return result.trim();
    }

    @logExecutionTime(true)
    public replaceWithAlphabetPosition2(text: string): string {
        let alphabet = "abcdefghijklmnopqrstuvwxyz";
        return text.split("").map((letter) => {
            let index = alphabet.indexOf(letter.toLowerCase());
            if (index != -1) {
                return index + 1;
            }
            return "";
        }).filter(el => el != "").join(" ").trim();
    }

    //Alessio TEST Explaining the code (replaceWithAlphabetPosition2)
    /* Here is the explanation for the code above:
1. Create a new string called "alphabet" and set it equal to "abcdefghijklmnopqrstuvwxyz" (26 letters)
2. Split the text into an array of letters using .split(""). So "Hello World" becomes ["H","e","l","l","o"," ","W","o","r","l","d"]
3. Map over the array of letters and return the index of the letter in the alphabet string.
4. Filter out all of the empty strings
5. Join the elements in the array into a string
6. Trim the string to remove any trailing whitespace. */

}



