// generate unit test for Kata4
import { Kata4 } from "./kata4";
import { assert } from "chai";

describe('test copilot_cli_test', function () {
    it('test copilot-cli-test.Kata4.findShortestString', function (done) {
        const test = new Kata4();
        let array = ["hello", "world", "this", "is", "copilot-cli-test"];
        let shortestString = test.findShortestString(array);
        assert.equal(shortestString, "is");
        done();
    })
})

describe('test copilot_cli_test', function () {
    it('test copilot-cli-test.Kata4.findShortestString2', function (done) {
        const test = new Kata4();

        let array = ["hello", "world", "this", "is", "copilot-cli-test"];
        let shortestString = test.findShortestString2(array);
        assert.equal(shortestString, "is");
        done();
    })
})
