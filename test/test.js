var sona = require("../sona.js");

var assert = require('assert');
var fs = require("fs");

const load_sona = (file, callback, done, effect) => {
    fs.readFile(`${__dirname}/${file}`, function(err, data) {
        if (err) {
            throw `Unable to read ${file}`;
        }
        callback(sona(effect)(data.toString()));
        done();
    });
}

describe('sona', function() {
    describe('toki', function() {
        it('says hello', function(done) {
            load_sona("toki.sona",
                (result) => assert.deepEqual(result.join(""), "toki! sina pona?"), done);
        });
    });
    describe('nanpa', function() {
        it('basic number operations', function(done) {
            load_sona("nanpa.sona",
                (result) => assert.deepEqual(result, [4, 8, 15, 16, 23, 42, 12, 1, 1, 0, 1337, 5, 100]), done);
        });
        it('generates prime numbers', function(done) {
            load_sona("nanpakiwen.sona",
                (result) => assert.deepEqual(result, [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]), done);
        });
        it('computes first 10 fibonacci numbers', function(done) {
            load_sona("piponaki.sona",
                (result) => assert.deepEqual(result, [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]), done);
        });
    });
    describe('pana', function() {
        it('communicates information to sona via constant', function(done) {
            load_sona("pana.sona",
                (result) => assert.deepEqual(result, [10]), done, 10);
        });
        it('communicates information to sona via callback', function(done) {
            load_sona("pana.sona",
                (result) => assert.deepEqual(result, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), done, (i) => (i | 0) + 1);
        });
        it('communicates information to sona via iterable', function(done) {
            load_sona("pana.sona",
                (result) => assert.deepEqual(result, [0, 0, 5, 10]), done, ["cast to zero", 0, 5, 10, 15]);
        });
    });
    describe('tawa', function() {
        it('tests goto compatibility', function(done) {
            load_sona("ma.sona",
                (result) => assert.deepEqual(result, [1, 1, 1]), done);
        });
    });
    describe('bct', function() {
        it('Run a Bitwise Cyclic Token Program to prove Turing Completeness', function(done) {
            // This simulates BCT with the program "110100" and data "10"
            // The input is the program string as a number reversed.
            // The number of leading zeros is held in a separate padding variable.
            // Example 000011101011000 -> 000 0x110101110000 -> pad = 3, data = 3440
            function encode(x) {
                x = [...x].reverse().join("");
                a = parseInt(x, 2);
                b = x.length - a.toString(2).length;
                return [a, b];
            }

            function decode(a, b) {
                let tmp = [...a.toString(2)].reverse().join("");
                tmp = tmp == "0" ? "" : tmp
                return tmp + "0".repeat(b);
            }
            let program = encode("110100");
            let data = encode("10");
            let input = program.concat(data);
            assert.deepEqual(input, [11, 2, 1, 1]);

            load_sona("bct.sona",
                (result) => {
                    let processed = [];
                    for (let i = 0; i < result.length; i += 2) {
                        processed[processed.length] = decode(result[i], result[i + 1])
                    }
                    return assert.deepEqual(processed, ["10", "101", "01", "01", "1", "11", "1", "10", "0", "0"])
                }, done, input);
        });
    });
});
