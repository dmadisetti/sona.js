// sona.js
// toki pona pi ilo sona.
//
// A toki pona inspired interperted language.

const SONA = (C) => {
    let cc, c, r, a, op, z, V,
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
    C=(cc = C == V ? 0 : C).call!=V?cc:cc.pop==V?(()=>(cc|0)):()=>cc.shift();
    const la = "la",
        li = "li",
        m=(d,r)=>d.match(r),
        d=(d)=>m(d,/^[A-Z][a-zA-Z]*/),
        h=(s,r)=>s.split(r),
        w = (X) => typeof X != 'number' && (v[X] != V || d(X) != V),
        B = (b) => (X) => {
            throw Error(`${b} ike: ${X} (${l})`)
        },
        E = B("nimi"),
        R = (r) => B("pali")(r),
        Q = (q, r) => (q == r || B(q)(r)),
        W = (X) => w(X) || E(X),
        P = (n, f) => ((...A) => (A.length == n || R(...A)) && f(A[0])),
        p = (f) => P(1, f),
        s = (s) => h(s, /#|\s+(?!ala|ni)/).map((a) => m(a,/\s+ala$/) != V && !d(a) ? h(a, /\s+(?!ni)/) : [a]).flat(),
        G = (a) => (r = parseInt(a)) == NaN ? E() : r,
        F = (a) => (w(a) ? v[a] : G(a)),
        f = (a) => ((A = h(a," ")).length == 2 ? ((op = o[A[1]]) ? op(A[0]) : R(A[1])) : F(a)) | 0,
        O = (op, e, a, ...A) => Q("e", e) ? A.filter((x, i) => i % 2 || !(x == "en" || B("en")(x))).map(f).reduce(i[op] || R(op), f(a)) : 0,
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
            "kipisi": (a, b) => Math.log(a) / Math.log(b),
            li: (a, b) => a == b
        },
        I = {
            "ken": (...L) => u(...L.splice((0), L.indexOf(la))) && L.shift() == la && U(...L),
            "ijo": (X, L, ...Y) => W(X) && (L == li || E(li)) && (v[X] = u(...Y)),
            "ma": p((ma) => W(ma) && (v[ma] = l)),
            "tawa": (...A) => (l = u(...A)),
            "o": (op, e, ...X) => M = Q("e", e) && M.concat(X.map({
                "toki": (x) => String.fromCharCode(f(x)),
                "nanpa": f,
                "pana": (x) => W(x) && (v[x] = C(...[].concat(M).reverse()))?V:V,
            } [op] || B("o")).filter((c)=>c!=V)),
            "pini": P(0, () => (e = 1)),
            "": () => {}
        };
    return (S) => {
        c = h("\n" + S, /\n/);
        while (!e && l < c.length) U(...s(c[l++].trim()));
        return (M);
    }
}


module.exports = SONA;
