// sona.js
// toki pona pi ilo sona.
//
// A toki pona inspired interperted language.

const SONA = (C) => {
    C = C == undefined ? (() => 0) : C;
    let c, r, a, op, z,
        v = {
            "ala": 0,
            "wan": 1,
            "tu": 2,
            "luka": 5,
            "mute": 10,
            "ale": 100
        },
        e = 0,
        l = 0,
        M = [];
    const la = "la",
        li = "li",
        nimi = (x) => String.fromCharCode(f(x)),
        w = (X) => typeof(X) != 'number' && (v[X] != undefined || X.match(/^[A-Z][a-zA-Z]*/) != undefined),
        B = (b) => (X) => {
            throw Error(`${b} ike: ${X} (${l})`)
        },
        E = B("nimi"),
        R = (r) => B("pali")(r),
        Q = (q, r) => (q == r || B(q)(r)),
        W = (X) => w(X) || E(X),
        P = (n, f) => ((...A) => (A.length == n || R(...A)) && f(A[0])),
        p = (f) => P(1, f),
        s = (s) => s.split(/#|\s+(?!ala|ni)/).map((a) => a.match(/\s+ala$/) != undefined && !a.match(/^[A-Z][a-zA-Z]*/) ? a.split(/\s+(?!ni)/) : [a]).flat(),
        G = (a) => (r = parseInt(a)) == NaN ? E() : r,
        F = (a) => (w(a) ? v[a] : G(a)),
        f = (a) => ((A = a.split(" ")).length == 2 ? ((op = o[A[1]]) ? op(A[0]) : R(A[1])) : F(a)) | 0,
        O = (op, e, a, ...A) => (Q("e", e) && (A.every((x, i) => 1 + i % 2 || x == "en") || B("en")(A))) ? A.filter((_, i) => i % 2).map(f).reduce(i[op] || R(op), f(a)) : 0,
        u = (...A) => ((a = A.length) > 3 ? O(...A) : [
            f, (a, op) => (o[op] || R(op))(f(a)),
            (a, op, b) => (i[op] || R(op))(f(a), f(b)),
        ][a - 1](...A)) | 0,
        U = (r, ...p) => (I[r] || R(r))(...p),
        o = {
            "ala": (a) => !F(a),
            "ni": (ma) => Q("ma", ma) ? l - 1 : 0
        },
        i = {
            "anu": (a, b) => (a | b),
            "en": (a, b) => a + b,
            "mute": (a, b) => a * b,
            "ante": (a, b) => a - b,
            "weka": (a, b) => a / b,
            "kipisi": (a, b) => Math.log(b) / Math.log(a),
            li: (a, b) => a == b
        },
        I = {
            "ken": (...L) => u(...L.splice((0), L.indexOf(la))) && L.shift() == la && U(...L),
            "ijo": (X, L, ...Y) => W(X) && (L == li || E(li)) && (v[X] = u(...Y)),
            "ma": p((ma) => W(ma) && (v[ma] = l)),
            "tawa": (...A) => (l = u(...A)),
            "pana": (...A) => (l = u(...A)),
            "o": (op, e, ...X) => M = Q("e", e) && M.concat(X.map({
                "toki": nimi,
                "nanpa": f
            } [op] || B("o"))),
            "pini": P(0, () => (e = 1)),
            "": () => {}
        };
    return (S) => {
        c = ("\n" + S).split(/\n/);
        while (!e && l < c.length) U(...s(c[l++].trim()));
        return (M);
    }
}


module.exports = SONA;
