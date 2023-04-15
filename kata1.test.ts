import { Kata1, findLongestString } from "./kata1";

const assert = require('assert');

describe('test copilot_cli_test', function() {
    it('test copilot-cli-test.findLongestString', function(done) {
        let array = ["hello", "world", "this", "is", "copilot-cli-test"];
        let longestString = findLongestString(array);
        assert.equal(longestString, "copilot-cli-test");
        done();
    })
})

describe('test copilot_cli_test', function() {
    it('test copilot-cli-test.Fun.replaceWithAlphabetPosition', function(done) {
        let test = new Kata1();
        assert.equal(test.replaceWithAlphabetPosition("The sunset sets at twelve o' clock."), "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11");
        done();
    })

    it('test copilot-cli-test.Fun.replaceWithAlphabetPosition2', function(done) {
        let test = new Kata1();
        assert.equal(test.replaceWithAlphabetPosition2("The sunset sets at twelve o' clock."), "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11");
        done();
    })
})

