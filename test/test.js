var sona = require("../sona.js");

var assert = require('assert');
var fs = require("fs");

const load_sona = (file, callback, done) => {
    fs.readFile(`${__dirname}/${file}`, function(err, data) {
        if (err) {
            throw `Unable to read ${file}`;
        }
        callback(sona()(data.toString()));
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
    });
    describe('primes', function() {
        it('generates prime numbers', function(done) {
            load_sona("nanpakiwen.sona",
                (result) => assert.deepEqual(result, [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]), done);
        });
    });
    describe('fibonacci', function() {
        it('computes first 10 fibonacci numbers', function(done) {
            load_sona("piponaki.sona",
                (result) => assert.deepEqual(result, [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]), done);
        });
    });
    describe('goto', function() {
        it('tests go to compatibility', function(done) {
            load_sona("ma.sona",
                (result) => assert.deepEqual(result, [1, 1, 1]), done);
        });
    });
    describe('bct', function() {
        it('Run a Bitwise Cyclic Token Program to prove Turing Completeness', function(done) {
            load_sona("bct.sona",
                (result) => {
                    let processed = [];
                  for (let i = 0; i < result.length; i += 2) {
                    let tmp = Array.from(result[i].toString(2)).reverse().join("");
                    tmp = tmp == "0" ? "" : tmp
                    processed[processed.length] = tmp + "0".repeat(result[i + 1]);
                  }
                  return assert.deepEqual(processed, ["10", "101", "01", "01", "1", "11", "1", "10", "0", "0"])}, done);
        });
    });
});
