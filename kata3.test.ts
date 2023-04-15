import { assert } from "chai";
import { Kata3 } from "./kata3";

describe('test copilot_cli_test', function() {
    it('test copilot-cli-test.Kata3.isbn10Validation', function(done) {
        const test = new Kata3();
        assert.equal(test.isISBN10Valid('1112223339'), true);
        assert.equal(test.isISBN10Valid('048665088X'), true);
        assert.equal(test.isISBN10Valid('1293000000'), true);
        assert.equal(test.isISBN10Valid('1234554321'), true);
        assert.equal(test.isISBN10Valid('1234512345'), false);
        assert.equal(test.isISBN10Valid('1293'), false);
        done();
    })

})