import { Kata2 } from "./kata2";
import {assert} from "chai";

describe('test copilot_cli_test', function() {
    it('test copilot-cli-test.Kata2.sumOfPositiveNumbers', function(done) {
        let test = new Kata2();
        let array = [1, 2, 3, 4, 5, 6];
        let sum = test.sumOfPositiveNumbers(array);
        assert.equal(sum, 21);
        done();
    })
})
describe('test copilot_cli_test', function() {
    it('test copilot-cli-test.Kata2.sumOfPositiveNumbers', function(done) {
        let test = new Kata2();
        let array = [1, 2, 3, 4, 5, 6];
        let sum = test.sumOfPositiveNumbers2(array);
        assert.equal(sum, 21);
        done();
    })
})

//test case for sumOfPositiveNumbers2 with an array of 6 number with some negative numbers
describe('test copilot_cli_test', function() {
    it('test copilot-cli-test.Kata2.sumOfPositiveNumbers', function(done) {
        let test = new Kata2();
        let array = [1, 2, 3, 4, 5, -6];
        let sum = test.sumOfPositiveNumbers2(array);
        assert.equal(sum, 15);
        done();
    })
})