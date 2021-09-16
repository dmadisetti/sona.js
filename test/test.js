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
                (result) => assert.deepEqual(result, [4, 8, 15, 16, 23, 42, 12, 1, 1, 0, 1337]), done);
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
});
