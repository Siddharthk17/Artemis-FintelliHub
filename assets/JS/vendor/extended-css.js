/**
 * @module ExtendedCss
 * @version 1.0.0 (Vendor Distribution)
 */

var ExtendedCss = (function() {
    "use strict";

    /**
     * Property definition helper.
     */
    function e(e, t, r) {
        return t in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = r, e
    }

    // --- AST Node Constants ---
    const t = "SelectorList",
        r = "Selector",
        s = "RegularSelector",
        n = "ExtendedSelector",
        o = "AbsolutePseudoClass",
        l = "RelativePseudoClass";

    // --- AST Node Classes ---
    class a {
        constructor(t) {
            e(this, "children", []), this.type = t
        }
        addChild(e) {
            this.children.push(e)
        }
    }

    class i extends a {
        constructor(e) {
            super(s), this.value = e
        }
    }

    class c extends a {
        constructor(e) {
            super(l), this.name = e
        }
    }

    class u extends a {
        constructor(t) {
            super(o), e(this, "value", ""), this.name = t
        }
    }

    // --- Token Definitions ---
    const d = {
            LEFT: "[",
            RIGHT: "]"
        },
        h = {
            LEFT: "(",
            RIGHT: ")"
        },
        f = {
            LEFT: "{",
            RIGHT: "}"
        },
        p = "/",
        w = "\\",
        m = " ",
        E = ",",
        g = ";",
        v = ":",
        b = "'",
        y = '"',
        $ = "=",
        k = "\t",
        S = "\r",
        x = "\n",
        T = "\f",
        P = [m, k, S, x, T],
        N = "*",
        O = m,
        R = ">",
        A = "+",
        I = "~",
        L = [O, R, A, I],
        C = ["[", "]", "(", ")", "{", "}", p, w, g, v, E, b, y, "^", "$", N, "#", ".", O, R, A, I, k, S, x, T],
        B = [v, g, b, y, w, m, k, S, x, T];

    // --- Extended Pseudo-Classes ---
    const M = "contains",
        D = "has-text",
        F = "-abp-contains",
        W = "matches-css",
        V = "matches-css-before",
        _ = "matches-css-after",
        G = "matches-attr",
        H = "matches-property",
        U = "xpath",
        j = "nth-ancestor",
        q = [M, D, F],
        Q = "upward",
        z = "remove",
        Y = "-abp-has",
        K = ["has", Y],
        X = "is",
        J = "not",
        Z = [M, D, F, W, V, _, G, H, U, j, Q],
        ee = [...K, X, J],
        te = [...Z, ...ee],
        re = [J, X],
        se = ":scope";

    const ne = {
        AFTER: "after",
        BACKDROP: "backdrop",
        BEFORE: "before",
        CUE: "cue",
        CUE_REGION: "cue-region",
        FIRST_LETTER: "first-letter",
        FIRST_LINE: "first-line",
        FILE_SELECTION_BUTTON: "file-selector-button",
        GRAMMAR_ERROR: "grammar-error",
        MARKER: "marker",
        PART: "part",
        PLACEHOLDER: "placeholder",
        SELECTION: "selection",
        SLOTTED: "slotted",
        SPELLING_ERROR: "spelling-error",
        TARGET_TEXT: "target-text"
    };

    // --- Error Messages & State ---
    const oe = "content",
        le = "true",
        ae = "global",
        ie = "Selector should be defined",
        ce = "No style declaration found",
        ue = `${ie} before style declaration in stylesheet`,
        de = "Invalid style declaration",
        he = "Unclosed style declaration",
        fe = "Missing style property in declaration",
        pe = "Missing style value in declaration",
        we = "Style should be declared or :remove() pseudo-class should used",
        me = "Comments are not supported",
        Ee = "At-rules are not supported",
        ge = "Invalid :remove() pseudo-class in selector",
        ve = `${ie} before :remove() pseudo-class`,
        be = "Pseudo-class :remove() appears more than once in selector",
        ye = "Pseudo-class :remove() should be at the end of selector";

    // --- Regex & Parsing Helpers ---
    const $e = /\[-(?:ext)-([a-z-_]+)=(["'])((?:(?=(\\?))\4.)*?)\2\]/g,
        ke = (e, t, r, s) => {
            const n = new RegExp(`([^\\\\]|^)\\\\${r}`, "g");
            return `:${t}(${s.replace(n,`$1${r}`)})`
        },
        Se = /\(:scope >/g,
        xe = /(:matches-css)-(before|after)\(/g,
        Te = (e, t, r) => `${t}${h.LEFT}${r}${E}`,
        Pe = e => (e => {
            const t = e.replace($e, ke).replace(Se, "(>").replace(xe, Te);
            if (t.includes("[-ext-")) throw new Error(`Invalid extended-css old syntax selector: '${e}'`);
            return t
        })(e.trim()),
        Ne = "mark",
        Oe = "word";

    const Re = (e, t) => {
        let r = "";
        const s = [];
        return e.split("").forEach((e => {
            if (t.includes(e)) return r.length > 0 && (s.push({
                type: Oe,
                value: r
            }), r = ""), void s.push({
                type: Ne,
                value: e
            });
            r += e
        })), r.length > 0 && s.push({
            type: Oe,
            value: r
        }), s
    };

    const Ae = e => {
        const t = [];
        e.forEach((e => t.push(e)));
        const r = [];
        for (; t.length;) {
            const e = t.pop();
            if (!e) throw new Error("Unable to make array flat");
            Array.isArray(e) ? e.forEach((e => t.push(e))) : r.push(e)
        }
        return r.reverse()
    };

    const Ie = e => e[0],
        Le = e => e[e.length - 1],
        Ce = e => e[e.length - 2],
        Be = (e, t, r) => {
            const s = e[t];
            if (!s) throw new Error(r || `No array item found by index ${t}`);
            return s
        };

    const Me = "At least one of Selector node children should be RegularSelector";

    const De = e => (null == e ? void 0 : e.type) === t,
        Fe = e => (null == e ? void 0 : e.type) === r,
        We = e => (null == e ? void 0 : e.type) === s,
        Ve = e => e.type === n,
        _e = e => (null == e ? void 0 : e.type) === o,
        Ge = e => (null == e ? void 0 : e.type) === l;

    const He = e => {
        if (null === e) throw new Error("Ast node should be defined");
        if (!_e(e) && !Ge(e)) throw new Error("Only AbsolutePseudoClass or RelativePseudoClass ast node can have a name");
        if (!e.name) throw new Error("Extended pseudo-class should have a name");
        return e.name
    };

    const Ue = (e, t) => {
        if (null === e) throw new Error("Ast node should be defined");
        if (!We(e) && !_e(e)) throw new Error("Only RegularSelector ot AbsolutePseudoClass ast node can have a value");
        if (!e.value) throw new Error(t || "Ast RegularSelector ot AbsolutePseudoClass node should have a value");
        return e.value
    };

    const je = e => e.filter(We),
        qe = e => {
            const t = je(e),
                r = Le(t);
            if (!r) throw new Error(Me);
            return r
        };

    const Qe = (e, t) => {
        if (1 !== e.children.length) throw new Error(t);
        const r = Ie(e.children);
        if (!r) throw new Error(t);
        return r
    };

    const ze = e => Qe(e, "Extended selector should be specified"),
        Ye = e => {
            if (!Ge(e)) throw new Error("Only RelativePseudoClass node can have relative SelectorList node as child");
            return Qe(e, `Missing arg for :${He(e)}() pseudo-class`)
        };

    const Ke = {
        COMMON: [h.LEFT, b, y, $, ".", v, m],
        CONTAINS: [h.LEFT, b, y]
    };

    const Xe = e => te.includes(e),
        Je = e => re.includes(e),
        Ze = (e, t) => !(!e || !t) && (L.includes(t) || e === Oe || t === N || "#" === t || "." === t || t === v || t === b || t === y || t === d.LEFT);

    // --- Selector Validation ---
    const et = (e, t, r) => {
        const s = Le(e.extendedPseudoNamesStack);
        if (!s) throw new Error("Regexp pattern allowed only in arg of extended pseudo-class");
        if (q.includes(s)) return Ke.CONTAINS.includes(t);
        if (t === p && s !== U) {
            throw new Error(`Invalid regexp pattern for :${s}() pseudo-class ${r?`in arg part: '${r}'`:"arg"}`)
        }
        return Ke.COMMON.includes(t)
    };

    const tt = (e, t) => e === d.LEFT && t !== w;

    const rt = e => {
        var t;
        if (!e.isAttributeBracketsOpen) return !1;
        const r = e.attributeBuffer.split(m).join(""),
            s = Re(r, [...C, $]);
        const n = Ie(s),
            o = null == n ? void 0 : n.type,
            l = null == n ? void 0 : n.value;
        if (o === Ne && l !== w) throw new Error(`'[${e.attributeBuffer}]' is not a valid attribute due to '${l}' at start of it`);
        const a = Le(s),
            i = null == a ? void 0 : a.type,
            c = null == a ? void 0 : a.value;
        if (c === $) throw new Error(`'[${e.attributeBuffer}]' is not a valid attribute due to '${$}'`);
        const u = s.findIndex((e => e.type === Ne && e.value === $)),
            h = null === (t = Ce(s)) || void 0 === t ? void 0 : t.value;
        if (-1 === u) return i === Oe || h === w && (c === y || c === b);
        const f = Be(s, u + 1).value;
        if (!(f === b || f === y)) {
            if (i === Oe) return !0;
            throw new Error(`'[${e.attributeBuffer}]' is not a valid attribute`)
        }
        return i === Oe && "i" === (null == c ? void 0 : c.toLocaleLowerCase()) ? h === f : c === f
    };

    const st = e => !!e && P.includes(e),
        nt = e => Z.includes(e),
        ot = e => ee.includes(e);

    const lt = e => 0 === e.pathToBufferNode.length ? null : Le(e.pathToBufferNode) || null;

    const at = e => {
        const t = lt(e);
        if (!t) throw new Error("No bufferNode found");
        if (!Fe(t)) throw new Error("Unsupported bufferNode type");
        const r = qe(t.children);
        return e.pathToBufferNode.push(r), r
    };

    const it = (e, t) => {
        const r = lt(e);
        if (null === r) throw new Error("No bufferNode to update");
        if (_e(r)) r.value += t;
        else {
            if (!We(r)) throw new Error(`${r.type} node cannot be updated. Only RegularSelector and AbsolutePseudoClass are supported`);
            r.value += t, e.isAttributeBracketsOpen && (e.attributeBuffer += t)
        }
    };

    const ct = function(e, t) {
        let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        const n = lt(e);
        if (null === n) throw new Error("No buffer node");
        let d;
        d = t === s ? new i(r) : t === o ? new u(r) : t === l ? new c(r) : new a(t), n.addChild(d), e.pathToBufferNode.push(d)
    };

    const ut = (e, n) => {
        (e => {
            const r = new a(t);
            e.ast = r, e.pathToBufferNode.push(r)
        })(e), ct(e, r), ct(e, s, n)
    };

    const dt = function(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        ct(e, t), ct(e, r), ct(e, s, n)
    };

    const ht = (e, t) => {
        for (let s = e.pathToBufferNode.length - 1; s >= 0; s -= 1) {
            var r;
            if ((null === (r = e.pathToBufferNode[s]) || void 0 === r ? void 0 : r.type) === t) {
                e.pathToBufferNode = e.pathToBufferNode.slice(0, s + 1);
                break
            }
        }
    };

    // --- Core Parsing Logic ---
    const ft = e => {
        const t = lt(e);
        if (t && De(t) && Ge((e => e.pathToBufferNode.length < 2 ? null : Ce(e.pathToBufferNode) || null)(e))) return t;
        ht(e, r);
        const s = lt(e);
        if (!s) throw new Error("No SelectorNode, impossible to continue selector parsing by ExtendedCss");
        const n = Le(s.children),
            o = n && Ve(n) && 0 === e.standardPseudoBracketsStack.length,
            l = o && Ie(n.children);
        let a = s;
        if (l) {
            const t = o && l.name,
                r = t && ot(t),
                s = t && nt(t),
                i = r && e.extendedPseudoBracketsStack.length > 0 && e.extendedPseudoBracketsStack.length === e.extendedPseudoNamesStack.length,
                c = s && t === Le(e.extendedPseudoNamesStack);
            (i || c) && (e.pathToBufferNode.push(n), a = l)
        } else a = o ? s : at(e);
        return e.pathToBufferNode.push(a), a
    };

    const pt = (e, t, s, o, l) => {
        if (!o) throw new Error(`Invalid colon ':' at the end of selector: '${t}'`);
        if (Xe(o.toLowerCase())) {
            if (K.includes(o) && e.standardPseudoNamesStack.length > 0) throw new Error(`Usage of :${o}() pseudo-class is not allowed inside regular pseudo: '${Le(e.standardPseudoNamesStack)}'`);
            ht(e, r), ct(e, n)
        } else {
            if (o.toLowerCase() === z) throw new Error(`${ge}: '${t}'`);
            it(e, s), l && l === h.LEFT && !e.isAttributeBracketsOpen && e.standardPseudoNamesStack.push(o)
        }
    };

    const wt = `html ${N}`;
    const mt = (e, t) => (e.children = t, e);

    const Et = e => {
        if (null === e) return !1;
        const t = ze(e),
            r = He(t);
        if (nt(r)) return !1;
        const s = Ye(t).children;
        if (Je(r)) {
            if (s.every((e => {
                    try {
                        const t = Qe(e, "Selector node should have RegularSelector");
                        return We(t)
                    } catch (e) {
                        return !1
                    }
                }))) return !0
        }
        return s.some((e => e.children.some((e => !!Ve(e) && Et(e)))))
    };

    const gt = (e, t) => {
        if (!e) return null;
        const r = ze(e),
            s = Ye(r);
        if (!s.children.some((e => e.children.some((e => Ve(e)))))) {
            const e = (e => e.children.map((e => {
                const t = Qe(e, "Ast Selector node should have RegularSelector node");
                return Ue(t)
            })).join(`${E}${m}`))(s), n = He(r), o = `${v}${n}${h.LEFT}${e}${h.RIGHT}`;
            return t.value = `${Ue(t)}${o}`, null
        }
        const n = vt(s),
            o = mt(r, [n]);
        return mt(e, [o])
    };

    const vt = e => mt(e, e.children.map((e => (e => {
        const t = e.children,
            r = [];
        let s = 0;
        for (; s < t.length;) {
            const e = Be(t, s, "currentChild should be specified");
            if (0 === s) r.push(e);
            else {
                const t = qe(r);
                if (Ve(e)) {
                    let s = null,
                        n = Et(e);
                    for (s = e; n;) s = gt(s, t), n = Et(s);
                    if (null !== s) {
                        r.push(s);
                        const e = ze(s),
                            n = He(e);
                        Ue(t) === N && Je(n) && (t.value = wt)
                    }
                } else if (We(e)) {
                    const s = Le(r) || null;
                    We(s) && (n = e, (o = t).value = `${Ue(o)}${m}${Ue(n)}`)
                }
            }
            s += 1
        }
        var n, o;
        return mt(e, r)
    })(e))));

    const bt = "No white space is allowed before or after extended pseudo-class name in selector";

    // --- Parser Engine ---
    const yt = e => {
        const a = (e => {
            const t = Pe(e);
            return Re(t, C)
        })(e);
        const i = {
            ast: null,
            pathToBufferNode: [],
            extendedPseudoNamesStack: [],
            extendedPseudoBracketsStack: [],
            standardPseudoNamesStack: [],
            standardPseudoBracketsStack: [],
            isAttributeBracketsOpen: !1,
            attributeBuffer: "",
            isRegexpOpen: !1,
            shouldOptimize: !1
        };
        let c = 0;
        for (; c < a.length;) {
            const u = a[c];
            if (!u) break;
            const {
                type: $,
                value: P
            } = u, C = a[c + 1], B = null == C ? void 0 : C.type, M = null == C ? void 0 : C.value, D = a[c + 2], F = null == D ? void 0 : D.value, W = a[c - 1], V = null == W ? void 0 : W.type, _ = null == W ? void 0 : W.value, G = a[c - 2], H = null == G ? void 0 : G.value;
            let q = lt(i);
            switch ($) {
                case Oe:
                    if (null === q) ut(i, P);
                    else if (De(q)) ct(i, r), ct(i, s, P);
                    else if (We(q)) it(i, P);
                    else if (Ve(q)) {
                        if (st(M) && F === h.LEFT) throw new Error(`${bt}: '${e}'`);
                        const t = P.toLowerCase();
                        i.extendedPseudoNamesStack.push(t), nt(t) ? ct(i, o, t) : (ct(i, l, t), Je(t) && (i.shouldOptimize = !0))
                    } else _e(q) ? it(i, P) : Ge(q) && dt(i, P);
                    break;
                case Ne:
                    switch (P) {
                        case E:
                            if (!q || void 0 !== q && !M) throw new Error(`'${e}' is not a valid selector`);
                            We(q) ? i.isAttributeBracketsOpen ? it(i, P) : ht(i, t) : _e(q) ? it(i, P) : Fe(q) && ht(i, t);
                            break;
                        case m:
                            if (We(q) && !i.isAttributeBracketsOpen && (q = ft(i)), We(q)) {
                                if (!i.isAttributeBracketsOpen && (_ === v && B === Oe || V === Oe && M === h.LEFT)) throw new Error(`'${e}' is not a valid selector`);
                                (!M || Ze(B, M) || i.isAttributeBracketsOpen) && it(i, P)
                            }
                            _e(q) && it(i, P), Ge(q) && dt(i), Fe(q) && Ze(B, M) && ct(i, s);
                            break;
                        case O:
                        case R:
                        case A:
                        case I:
                        case g:
                        case p:
                        case w:
                        case b:
                        case y:
                        case "^":
                        case "$":
                        case f.LEFT:
                        case f.RIGHT:
                        case N:
                        case "#":
                        case ".":
                        case d.LEFT:
                            if (L.includes(P)) {
                                if (null === q) throw new Error(`'${e}' is not a valid selector`);
                                q = ft(i)
                            }
                            if (null === q) ut(i, P), tt(P, _) && (i.isAttributeBracketsOpen = !0);
                            else if (We(q)) {
                                if (P === f.LEFT && !i.isAttributeBracketsOpen && !i.isRegexpOpen) throw new Error(`'${e}' is not a valid selector`);
                                it(i, P), tt(P, _) && (i.isAttributeBracketsOpen = !0)
                            } else _e(q) ? (it(i, P), P === p && i.extendedPseudoNamesStack.length > 0 && (_ === p && H === w ? i.isRegexpOpen = !1 : _ && _ !== w && (et(i, _, Ue(q)) ? i.isRegexpOpen = !i.isRegexpOpen : i.isRegexpOpen = !1))) : Ge(q) ? (dt(i, P), tt(P, _) && (i.isAttributeBracketsOpen = !0)) : Fe(q) ? L.includes(P) ? ct(i, s, P) : i.isRegexpOpen || (q = at(i), it(i, P), tt(P, _) && (i.isAttributeBracketsOpen = !0)) : De(q) && (ct(i, r), ct(i, s, P), tt(P, _) && (i.isAttributeBracketsOpen = !0));
                            break;
                        case d.RIGHT:
                            if (We(q)) {
                                if (!i.isAttributeBracketsOpen && _ !== w) throw new Error(`'${e}' is not a valid selector due to '${P}' after '${Ue(q)}'`);
                                rt(i) && (i.isAttributeBracketsOpen = !1, i.attributeBuffer = ""), it(i, P)
                            }
                            _e(q) && it(i, P);
                            break;
                        case v:
                            if (st(M) && F && te.includes(F)) throw new Error(`${bt}: '${e}'`);
                            if (null === q) {
                                if (M === U) ut(i, "body");
                                else {
                                    if (M === Q || M === j) throw new Error(`${ie} before :${M}() pseudo-class`);
                                    ut(i, N)
                                }
                                q = lt(i)
                            }
                            if (De(q) && (ct(i, r), ct(i, s), q = lt(i)), We(q) && ((_ && L.includes(_) || _ === E) && it(i, N), pt(i, e, P, M, F)), Fe(q)) {
                                if (!M) throw new Error(`Invalid colon ':' at the end of selector: '${e}'`);
                                if (Xe(M.toLowerCase())) ct(i, n);
                                else {
                                    if (M.toLowerCase() === z) throw new Error(`${ge}: '${e}'`);
                                    q = at(i), pt(i, e, P, B, F)
                                }
                            }
                            if (_e(q)) {
                                if (He(q) === U && M && te.includes(M) && F === h.LEFT) throw new Error(`:xpath() pseudo-class should be the last in selector: '${e}'`);
                                it(i, P)
                            }
                            if (Ge(q)) {
                                if (!M) throw new Error(`Invalid pseudo-class arg at the end of selector: '${e}'`);
                                dt(i, N), Xe(M.toLowerCase()) ? (ht(i, r), ct(i, n)) : (it(i, P), F === h.LEFT && i.standardPseudoNamesStack.push(M))
                            }
                            break;
                        case h.LEFT:
                            _e(q) && (He(q) !== U && i.isRegexpOpen ? it(i, P) : (i.extendedPseudoBracketsStack.push(P), i.extendedPseudoBracketsStack.length > i.extendedPseudoNamesStack.length && it(i, P))), We(q) && (i.standardPseudoNamesStack.length > 0 && (it(i, P), i.standardPseudoBracketsStack.push(P)), i.isAttributeBracketsOpen && it(i, P)), Ge(q) && i.extendedPseudoBracketsStack.push(P);
                            break;
                        case h.RIGHT:
                            if (_e(q) && (He(q) !== U && i.isRegexpOpen ? it(i, P) : (i.extendedPseudoBracketsStack.pop(), He(q) !== U ? (i.extendedPseudoNamesStack.pop(), i.extendedPseudoBracketsStack.length > i.extendedPseudoNamesStack.length ? it(i, P) : i.extendedPseudoBracketsStack.length >= 0 && i.extendedPseudoNamesStack.length >= 0 && ht(i, r)) : i.extendedPseudoBracketsStack.length < i.extendedPseudoNamesStack.length ? i.extendedPseudoNamesStack.pop() : it(i, P))), We(q))
                                if (i.isAttributeBracketsOpen) it(i, P);
                                else if (i.standardPseudoNamesStack.length > 0 && i.standardPseudoBracketsStack.length > 0) {
                                it(i, P), i.standardPseudoBracketsStack.pop();
                                const t = i.standardPseudoNamesStack.pop();
                                if (!t) throw new Error(`Parsing error. Invalid selector: ${e}`);
                                if (Object.values(ne).includes(t) && M === v && F && K.includes(F)) throw new Error(`Usage of :${F}() pseudo-class is not allowed after any regular pseudo-element: '${t}'`)
                            } else i.extendedPseudoBracketsStack.pop(), i.extendedPseudoNamesStack.pop(), ht(i, n), ht(i, r);
                            Fe(q) && (i.extendedPseudoBracketsStack.pop(), i.extendedPseudoNamesStack.pop(), ht(i, n), ht(i, r)), Ge(q) && i.extendedPseudoNamesStack.length > 0 && i.extendedPseudoBracketsStack.length > 0 && (i.extendedPseudoBracketsStack.pop(), i.extendedPseudoNamesStack.pop());
                            break;
                        case x:
                        case T:
                        case S:
                            throw new Error(`'${e}' is not a valid selector`);
                        case k:
                            if (!We(q) || !i.isAttributeBracketsOpen) throw new Error(`'${e}' is not a valid selector`);
                            it(i, P)
                    }
                    break;
                default:
                    throw new Error(`Unknown type of token: '${P}'`)
            }
            c += 1
        }
        if (null === i.ast) throw new Error(`'${e}' is not a valid selector`);
        if (i.extendedPseudoNamesStack.length > 0 || i.extendedPseudoBracketsStack.length > 0) throw new Error(`Unbalanced brackets for extended pseudo-class: '${Le(i.extendedPseudoNamesStack)}'`);
        if (i.isAttributeBracketsOpen) throw new Error(`Unbalanced attribute brackets in selector: '${e}'`);
        return i.shouldOptimize ? (u = i.ast, vt(u)) : i.ast;
        var u
    };

    // --- DOM & Execution Utils ---
    const $t = {
        MutationObserver: window.MutationObserver || window.WebKitMutationObserver
    };
    const kt = new class {
        constructor() {
            this.nativeNode = window.Node || Node
        }
        setGetter() {
            var e;
            this.getter = null === (e = Object.getOwnPropertyDescriptor(this.nativeNode.prototype, "textContent")) || void 0 === e ? void 0 : e.get
        }
    };

    const St = e => {
        let t = e.tagName.toLowerCase();
        return t += Array.from(e.attributes).map((t => `[${t.name}="${e.getAttribute(t.name)}"]`)).join(""), t
    };

    const xt = e => e instanceof HTMLElement,
        Tt = (e, t) => {
            const {
                parentElement: r
            } = e;
            if (!r) throw new Error(t || "Element does no have parent element");
            return r
        };

    const Pt = e => (e => {
        if ("object" == typeof(t = e) && null !== t && "message" in t && "string" == typeof t.message) return e;
        var t;
        try {
            return new Error(JSON.stringify(e))
        } catch {
            return new Error(String(e))
        }
    })(e).message;

    const Nt = {
        error: "undefined" != typeof console && console.error && console.error.bind ? console.error.bind(window.console) : console.error,
        info: "undefined" != typeof console && console.info && console.info.bind ? console.info.bind(window.console) : console.info
    };

    const Ot = (e, t, r) => e ? e.split(t).join(r) : e,
        Rt = e => {
            let t;
            switch (e) {
                case void 0:
                    t = "undefined";
                    break;
                case null:
                    t = "null";
                    break;
                default:
                    t = e.toString()
            }
            return t
        };

    const At = e => {
        const t = Number(e);
        let r;
        if (Number.isNaN(t)) switch (e) {
            case "undefined":
                r = void 0;
                break;
            case "null":
                r = null;
                break;
            case "true":
                r = !0;
                break;
            case "false":
                r = !1;
                break;
            default:
                r = e
        } else r = t;
        return r
    };

    const It = /\sVersion\/(\d{2}\.\d)(.+\s|\s)(Safari)\//.test(navigator.userAgent),
        Lt = "background",
        Ct = "background-image",
        Bt = "content",
        Mt = "opacity",
        Dt = /^\s*\/.*\/[gmisuy]*\s*$/,
        Ft = e => {
            if (!e.includes('url("')) {
                const t = /url\((.*?)\)/g;
                return e.replace(t, 'url("$1")')
            }
            return e
        },
        Wt = e => e.replace(/(\^)?url(\\)?\\\((\w|\[\w)/g, '$1url$2\\(\\"?$3'),
        Vt = Ft,
        _t = e => {
            let t;
            return e.startsWith(p) && e.endsWith(p) ? (t = Wt(e), t = t.slice(1, -1)) : (t = Vt(e), t = t.replace(/\\([\\()[\]"])/g, "$1"), t = (e => {
                const t = new RegExp(`[${[".","+","?","$","{","}","(",")","[","]","\\","/"].join("\\")}]`, "g");
                return e.replace(t, "\\$&")
            })(t), t = Ot(t, N, ".*")), new RegExp(t, "i")
        };

    const Gt = (e, t, r) => ((e, t) => {
        let r = "";
        switch (e) {
            case Lt:
            case Ct:
                r = Ft(t);
                break;
            case Bt:
                r = t.replace(/^(["'])([\s\S]*)\1$/, "$2");
                break;
            case Mt:
                r = It ? (Math.round(100 * parseFloat(t)) / 100).toString() : t;
                break;
            default:
                r = t
        }
        return r
    })(t, window.getComputedStyle(e, r).getPropertyValue(t));

    const Ht = (e, t) => {
        const r = e.indexOf(t);
        let s, n;
        return r > -1 ? (s = e.substring(0, r).trim(), n = e.substring(r + 1).trim()) : s = e, {
            name: s,
            value: n
        }
    };

    const Ut = e => {
        const {
            pseudoName: t,
            pseudoArg: r,
            domElement: s
        } = e, {
            regularPseudoElement: n,
            styleMatchArg: o
        } = ((e, t) => {
            const {
                name: r,
                value: s
            } = Ht(t, E);
            let n = r,
                o = s;
            if (Object.values(ne).includes(r) || (n = null, o = t), !o) throw new Error(`Required style property argument part is missing in :${e}() arg: '${t}'`);
            return n && (n = `${v}${v}${n}`), {
                regularPseudoElement: n,
                styleMatchArg: o
            }
        })(t, r), {
            name: l,
            value: a
        } = Ht(o, v);
        if (!l || !a) throw new Error(`Required property name or value is missing in :${t}() arg: '${o}'`);
        let i;
        try {
            i = _t(a)
        } catch (e) {
            throw Nt.error(Pt(e)), new Error(`Invalid argument of :${t}() pseudo-class: '${o}'`)
        }
        const c = Gt(s, l, n);
        return i && i.test(c)
    };

    const jt = function(e) {
        let t, r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (e.length > 1 && e.startsWith(y) && e.endsWith(y) && (e = e.slice(1, -1)), "" === e) throw new Error("Argument should be specified. Empty arg is invalid.");
        if (e.startsWith(p) && e.endsWith(p)) {
            if (!(e.length > 2)) throw new Error(`Invalid regexp: '${e}'`);
            t = (e => {
                if (e.startsWith(p) && e.endsWith(p)) return new RegExp(e.slice(1, -1));
                const t = e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
                return new RegExp(t)
            })(e)
        } else if (e.includes(N)) {
            if (e === N && !r) throw new Error(`Argument should be more specific than ${e}`);
            t = Ot(e, N, ".*"), t = new RegExp(t)
        } else {
            if (!(e => !e.includes(p) && !!/^[\w-]+$/.test(e))(e)) throw new Error(`Invalid argument: '${e}'`);
            t = e
        }
        return t
    };

    const qt = (e, t) => {
        const {
            name: r,
            value: s
        } = Ht(t, $);
        if (!r) throw new Error(`Required attribute name is missing in :${e} arg: ${t}`);
        return {
            rawName: r,
            rawValue: s
        }
    };

    const Qt = e => {
        const {
            pseudoName: t,
            pseudoArg: r,
            domElement: s
        } = e, n = s.attributes;
        if (0 === n.length) return !1;
        const {
            rawName: o,
            rawValue: l
        } = qt(t, r);
        let a;
        try {
            a = jt(o)
        } catch (e) {
            const t = Pt(e);
            throw Nt.error(t), new SyntaxError(t)
        }
        let i = !1,
            c = 0;
        for (; c < n.length && !i;) {
            const e = n[c];
            if (!e) break;
            const t = a instanceof RegExp ? a.test(e.name) : a === e.name;
            if (l) {
                let r;
                try {
                    r = jt(l)
                } catch (e) {
                    const t = Pt(e);
                    throw Nt.error(t), new SyntaxError(t)
                }
                const s = r instanceof RegExp ? r.test(e.value) : r === e.value;
                i = t && s
            } else i = t;
            c += 1
        }
        return i
    };

    const zt = function(e, t) {
        let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
        const s = Ie(t);
        if (1 === t.length) {
            let t;
            for (t in e) s instanceof RegExp ? s.test(t) && r.push({
                base: e,
                prop: t,
                value: e[t]
            }) : s === t && r.push({
                base: e,
                prop: s,
                value: e[t]
            });
            return r
        }
        if (s instanceof RegExp) {
            const n = t.slice(1),
                o = [];
            for (const t in e) s.test(t) && o.push(t);
            o.forEach((t => {
                var s;
                const o = null === (s = Object.getOwnPropertyDescriptor(e, t)) || void 0 === s ? void 0 : s.value;
                zt(o, n, r)
            }))
        }
        if (e && "string" == typeof s) {
            var n;
            const o = null === (n = Object.getOwnPropertyDescriptor(e, s)) || void 0 === n ? void 0 : n.value;
            t = t.slice(1), void 0 !== o && zt(o, t, r)
        }
        return r
    };

    const Yt = e => {
        const {
            pseudoName: t,
            pseudoArg: r,
            domElement: s
        } = e, {
            rawName: n,
            rawValue: o
        } = qt(t, r);
        if (n.includes("\\/") || n.includes("\\.")) throw new Error(`Invalid :${t} name pattern: ${n}`);
        let l;
        try {
            l = (e => {
                e.length > 1 && e.startsWith(y) && e.endsWith(y) && (e = e.slice(1, -1));
                const t = e.split("."),
                    r = [];
                let s = "",
                    n = !1,
                    o = 0;
                for (; o < t.length;) {
                    const l = Be(t, o, `Invalid pseudo-class arg: '${e}'`);
                    l.startsWith(p) && l.endsWith(p) && l.length > 2 ? r.push(l) : l.startsWith(p) ? (n = !0, s += l) : l.endsWith(p) ? (n = !1, s += `.${l}`, r.push(s), s = "") : n ? s += l : r.push(l), o += 1
                }
                if (s.length > 0) throw new Error(`Invalid regexp property pattern '${e}'`);
                return r.map((t => {
                    if (0 === t.length) throw new Error(`Empty pattern '${t}' is invalid in chain '${e}'`);
                    let r;
                    try {
                        r = jt(t, !0)
                    } catch (r) {
                        throw Nt.error(Pt(r)), new Error(`Invalid property pattern '${t}' in property chain '${e}'`)
                    }
                    return r
                }))
            })(n)
        } catch (e) {
            const t = Pt(e);
            throw Nt.error(t), new SyntaxError(t)
        }
        const a = zt(s, l);
        if (0 === a.length) return !1;
        let i = !0;
        if (o) {
            let e;
            try {
                e = jt(o)
            } catch (e) {
                const t = Pt(e);
                throw Nt.error(t), new SyntaxError(t)
            }
            if (e)
                for (let t = 0; t < a.length; t += 1) {
                    var c;
                    const r = null === (c = a[t]) || void 0 === c ? void 0 : c.value;
                    if (e instanceof RegExp) i = e.test(Rt(r));
                    else {
                        if("null" === r || "undefined" === r) {
                            i = e === r;
                            break
                        }
                        i = At(e) === r
                    }
                    if (i) break
                }
        }
        return i
    };

    const Kt = e => {
        const {
            pseudoName: t,
            pseudoArg: r,
            domElement: s
        } = e, n = (e => kt.getter ? kt.getter.apply(e) : e.textContent || "")(s);
        let o, l = r;
        if (l.startsWith(p) && Dt.test(l)) {
            const e = l.lastIndexOf("/"),
                s = l.substring(e + 1);
            let a;
            l = l.substring(0, e + 1).slice(1, -1).replace(/\\([\\"])/g, "$1");
            try {
                a = new RegExp(l, s)
            } catch (e) {
                throw new Error(`Invalid argument of :${t}() pseudo-class: ${r}`)
            }
            o = a.test(n)
        } else l = l.replace(/\\([\\()[\]"])/g, "$1"), o = n.includes(l);
        return o
    };

    const Xt = (e, t, r) => `Error while matching element ${e}, may be invalid :${t}() pseudo-class arg: '${r}'`;

    const Jt = (e, t, r) => {
        let s, n, o;
        switch (t) {
            case M:
            case D:
            case F:
                o = Kt, s = {
                    pseudoName: t,
                    pseudoArg: r,
                    domElement: e
                }, n = Xt("text content", t, r);
                break;
            case W:
            case _:
            case V:
                o = Ut, s = {
                    pseudoName: t,
                    pseudoArg: r,
                    domElement: e
                }, n = Xt("style", t, r);
                break;
            case G:
                o = Qt, s = {
                    domElement: e,
                    pseudoName: t,
                    pseudoArg: r
                }, n = Xt("attributes", t, r);
                break;
            case H:
                o = Yt, s = {
                    domElement: e,
                    pseudoName: t,
                    pseudoArg: r
                }, n = Xt("properties", t, r);
                break;
            default:
                throw new Error(`Unknown absolute pseudo-class :${t}()`)
        }
        return ((e, t, r) => {
            let s;
            try {
                s = e(t)
            } catch (e) {
                throw Nt.error(Pt(e)), new Error(r)
            }
            return s
        })(o, s, n)
    };

    const Zt = (e, t, r) => {
        const s = ((e, t) => {
            const r = Number(e);
            if (Number.isNaN(r) || r < 1 || r >= 256) throw new Error(`Invalid argument of :${t} pseudo-class: '${e}'`);
            return r
        })(t, r), n = e.map((e => {
            let t = null;
            try {
                t = ((e, t, r) => {
                    let s = null,
                        n = 0;
                    for (; n < t;) {
                        if (s = e.parentElement, !s) throw new Error(`Out of DOM: Argument of :${r}() pseudo-class is too big — '${t}'.`);
                        e = s, n += 1
                    }
                    return s
                })(e, s, r)
            } catch (e) {
                Nt.error(Pt(e))
            }
            return t
        })).filter(xt);
        return n
    };

    const er = (e, t) => {
        const r = e.map((e => {
            const r = [];
            let s;
            try {
                s = document.evaluate(t, e, null, window.XPathResult.UNORDERED_NODE_ITERATOR_TYPE, null)
            } catch (e) {
                throw Nt.error(Pt(e)), new Error(`Invalid argument of :xpath() pseudo-class: '${t}'`)
            }
            let n = s.iterateNext();
            for (; n;) xt(n) && r.push(n), n = s.iterateNext();
            return r
        }));
        return Ae(r)
    };

    const tr = (e, t) => {
        if (!(e => {
                let t;
                try {
                    document.querySelectorAll(e), t = !0
                } catch (e) {
                    t = !1
                }
                return t
            })(t)) throw new Error(`Invalid argument of :upward pseudo-class: '${t}'`);
        return e.map((e => {
            const r = e.parentElement;
            return r ? r.closest(t) : null
        })).filter(xt)
    };

    const rr = `${se}${R}`,
        sr = `${se}${O}`;

    const nr = (e, t) => ((e, t) => {
        const r = je(e),
            s = Ie(r);
        if (!s) throw new Error(t || Me);
        return s
    })(e.children, `RegularSelector is missing for :${t}() pseudo-class`);

    const or = (e, t, r) => {
        const s = r || Ue(e);
        let n = [];
        try {
            n = Array.from(t.querySelectorAll(s))
        } catch (e) {
            throw new Error(`Error: unable to select by '${s}' — ${Pt(e)}`)
        }
        return n
    };

    const lr = (e, t) => {
        let r = [];
        const s = ze(t),
            n = He(s);
        if (nt(n)) {
            const t = Ue(s, `Missing arg for :${n}() pseudo-class`);
            if (n === j) r = Zt(e, t, n);
            else if (n === U) {
                try {
                    document.createExpression(t, null)
                } catch (e) {
                    throw new Error(`Invalid argument of :${n}() pseudo-class: '${t}'`)
                }
                r = er(e, t)
            } else r = n === Q ? Number.isNaN(Number(t)) ? tr(e, t) : Zt(e, t, n) : e.filter((e => Jt(e, n, t)))
        } else {
            if (!ot(n)) throw new Error(`Unknown extended pseudo-class: '${n}'`);
            {
                const t = Ye(s);
                let o;
                switch (n) {
                    case "has":
                    case Y:
                        o = e => (e => {
                            const {
                                element: t,
                                relativeSelectorList: r,
                                pseudoName: s
                            } = e;
                            return r.children.every((e => {
                                const r = nr(e, s);
                                let n = "",
                                    o = null;
                                const l = Ue(r);
                                if (l.startsWith(A) || l.startsWith(I)) {
                                    o = t.parentElement;
                                    const e = St(t);
                                    n = `${rr}${e}${l}`
                                } else l === N ? (o = t, n = `${sr}${N}`) : (n = `${sr}${l}`, o = t);
                                if (!o) throw new Error(`Selection by :${s}() pseudo-class is not possible`);
                                let a;
                                try {
                                    a = ir(e, o, n)
                                } catch (e) {
                                    throw Nt.error(Pt(e)), new Error(`Invalid selector for :${s}() pseudo-class: '${l}'`)
                                }
                                return a.length > 0
                            }))
                        })({
                            element: e,
                            relativeSelectorList: t,
                            pseudoName: n
                        });
                        break;
                    case X:
                        o = e => (e => {
                            const {
                                element: t,
                                relativeSelectorList: r,
                                pseudoName: s
                            } = e;
                            return r.children.some((e => {
                                const r = nr(e, s),
                                    n = Tt(t, `Selection by :${s}() pseudo-class is not possible`),
                                    o = `${rr}${Ue(r)}`;
                                let l;
                                try {
                                    l = ir(e, n, o)
                                } catch (e) {
                                    return !1
                                }
                                return l.includes(t)
                            }))
                        })({
                            element: e,
                            relativeSelectorList: t,
                            pseudoName: n
                        });
                        break;
                    case J:
                        o = e => (e => {
                            const {
                                element: t,
                                relativeSelectorList: r,
                                pseudoName: s
                            } = e;
                            return r.children.every((e => {
                                const r = nr(e, s),
                                    n = Tt(t, `Selection by :${s}() pseudo-class is not possible`),
                                    o = `${rr}${Ue(r)}`;
                                let l;
                                try {
                                    l = ir(e, n, o)
                                } catch (e) {
                                    throw Nt.error(Pt(e)), new Error(`Invalid selector for :${s}() pseudo-class: '${Ue(r)}'`)
                                }
                                return !l.includes(t)
                            }))
                        })({
                            element: e,
                            relativeSelectorList: t,
                            pseudoName: n
                        });
                        break;
                    default:
                        throw new Error(`Unknown relative pseudo-class: '${n}'`)
                }
                r = e.filter(o)
            }
        }
        return r
    };

    const ar = (e, t) => {
        let r = [];
        const s = Ue(t);
        return r = s.startsWith(R) ? e.map((e => or(t, e, `${se}${s}`))) : s.startsWith(A) || s.startsWith(I) ? e.map((e => {
            const r = e.parentElement;
            if (!r) return [];
            const n = St(e);
            return or(t, r, `${rr}${n}${s}`)
        })) : e.map((e => {
            const r = `${sr}${Ue(t)}`;
            return or(t, e, r)
        })), Ae(r)
    };

    const ir = (e, t, r) => {
        let s = [],
            n = 0;
        for (; n < e.children.length;) {
            const o = Be(e.children, n, "selectorNodeChild should be specified");
            0 === n ? s = or(o, t, r) : Ve(o) ? s = lr(s, o) : We(o) && (s = ar(s, o)), n += 1
        }
        return s
    };

    const cr = function(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : document;
        const r = [];
        e.children.forEach((e => {
            r.push(...ir(e, t))
        }));
        return [...new Set(Ae(r))]
    };

    const ur = new class {
        constructor() {
            this.astCache = new Map
        }
        saveAstToCache(e, t) {
            this.astCache.set(e, t)
        }
        getAstFromCache(e) {
            return this.astCache.get(e) || null
        }
        getSelectorAst(e) {
            let t = this.getAstFromCache(e);
            return t || (t = yt(e)), this.saveAstToCache(e, t), t
        }
        querySelectorAll(e) {
            const t = this.getSelectorAst(e);
            return cr(t)
        }
    };

    // --- Styling & Injection Engine ---
    const dr = "debug",
        hr = e => {
            const t = `${v}${z}${h.LEFT}${h.RIGHT}`,
                r = `${v}${z}${h.LEFT}`;
            let s, n = !1;
            const o = e.indexOf(t);
            if (0 === o) throw new Error(`${ve}: '${e}'`);
            if (o > 0) {
                if (o !== e.lastIndexOf(t)) throw new Error(`${be}: '${e}'`);
                if (o + t.length < e.length) throw new Error(`${ye}: '${e}'`);
                s = e.substring(0, o), n = !0
            } else {
                if (e.includes(r)) throw new Error(`${ge}: '${e}'`);
                s = e
            }
            return {
                selector: s,
                stylesOfSelector: n ? [{
                    property: z,
                    value: le
                }] : []
            }
        };

    const fr = (e, t) => {
        let r, s = e.trim();
        if (s.startsWith("@")) throw new Error(`${Ee}: '${s}'.`);
        try {
            r = hr(s)
        } catch (e) {
            throw Nt.error(Pt(e)), new Error(`${ge}: '${s}'`)
        }
        let n, o = [],
            l = !1;
        try {
            s = r.selector, o = r.stylesOfSelector, n = t.getSelectorAst(s), l = !0
        } catch (e) {
            l = !1
        }
        return {
            success: l,
            selector: s,
            ast: n,
            stylesOfSelector: o
        }
    };

    const pr = () => new Map,
        wr = (e, t) => {
            const {
                selector: r,
                ast: s,
                rawStyles: n
            } = t;
            if (!n) throw new Error(`No style declaration for selector: '${r}'`);
            if (!s) throw new Error(`No ast parsed for selector: '${r}'`);
            const o = e.get(r);
            o ? o.styles.push(...n) : e.set(r, {
                ast: s,
                styles: n
            })
        };

    const mr = e => {
        const {
            selector: t,
            ast: r,
            rawStyles: s
        } = e;
        if (!r) throw new Error(`AST should be parsed for selector: '${t}'`);
        if (!s) throw new Error(`Styles should be parsed for selector: '${t}'`);
        const n = {
                selector: t,
                ast: r
            },
            o = (e => {
                const t = e.find((e => e.property === dr));
                return null == t ? void 0 : t.value
            })(s),
            l = (e => e.some((e => e.property === z && e.value === le)))(s);
        let a = s;
        if (o && (a = s.filter((e => e.property !== dr)), o !== le && o !== ae || (n.debug = o)), l) {
            n.style = {
                [z]: le
            };
            const e = a.find((e => e.property === oe));
            e && (n.style[oe] = e.value)
        } else if (a.length > 0) {
            const e = (e => {
                const t = {};
                return e.forEach((e => {
                    const [r, s] = e;
                    t[r] = s
                })), t
            })(a.map((e => {
                const {
                    property: t,
                    value: r
                } = e;
                return [t, r]
            })));
            n.style = e
        }
        return n
    };

    const Er = e => {
        const t = [];
        return e.forEach(((e, r) => {
            const s = r, {
                ast: n,
                styles: o
            } = e;
            t.push(mr({
                selector: s,
                ast: n,
                rawStyles: o
            }))
        })), t
    };

    const gr = "property",
        vr = "value",
        br = e => "" !== e.bufferValue && null !== e.valueQuoteMark,
        yr = e => {
            e.styles.push({
                property: e.bufferProperty.trim(),
                value: e.bufferValue.trim()
            }), e.bufferProperty = "", e.bufferValue = ""
        };

    const $r = (e, t, r) => {
        const {
            value: s
        } = r;
        switch (r.type) {
            case Oe:
                if (e.bufferProperty.length > 0) throw new Error(`Invalid style property in style block: '${t}'`);
                e.bufferProperty += s;
                break;
            case Ne:
                if (s === v) {
                    if (0 === e.bufferProperty.trim().length) throw new Error(`Missing style property before ':' in style block: '${t}'`);
                    e.bufferProperty = e.bufferProperty.trim(), e.processing = vr
                } else if (!P.includes(s)) throw new Error(`Invalid style declaration in style block: '${t}'`);
                break;
            default:
                throw new Error(`Unsupported style property character: '${s}' in style block: '${t}'`)
        }
    };

    const kr = (e, t, r) => {
        const {
            value: s
        } = r;
        if (r.type === Oe) e.bufferValue += s;
        else switch (s) {
            case v:
                if (!br(e)) throw new Error(`Invalid style value for property '${e.bufferProperty}' in style block: '${t}'`);
                e.bufferValue += s;
                break;
            case g:
                br(e) ? e.bufferValue += s : (yr(e), e.processing = gr);
                break;
            case b:
            case y:
                null === e.valueQuoteMark ? e.valueQuoteMark = s : e.bufferValue.endsWith(w) || e.valueQuoteMark !== s || (e.valueQuoteMark = null), e.bufferValue += s;
                break;
            case w:
                if (!br(e)) throw new Error(`Invalid style value for property '${e.bufferProperty}' in style block: '${t}'`);
                e.bufferValue += s;
                break;
            case m:
            case k:
            case S:
            case x:
            case T:
                e.bufferValue.length > 0 && (e.bufferValue += s);
                break;
            default:
                throw new Error(`Unknown style declaration token: '${s}'`)
        }
    };

    const Sr = e => {
        const t = e.trim(),
            r = (e => {
                const t = e.trim();
                return Re(t, B)
            })(t),
            s = {
                processing: gr,
                styles: [],
                bufferProperty: "",
                bufferValue: "",
                valueQuoteMark: null
            };
        let n = 0;
        for (; n < r.length;) {
            const e = r[n];
            if (!e) break;
            if (s.processing === gr) $r(s, t, e);
            else {
                if (s.processing !== vr) throw new Error("Style declaration parsing failed");
                kr(s, t, e)
            }
            n += 1
        }
        if (br(s)) throw new Error(`Unbalanced style declaration quotes in style block: '${t}'`);
        if (s.bufferProperty.length > 0) {
            if (0 === s.bufferValue.length) throw new Error(`Missing style value for property '${s.bufferProperty}' in style block '${t}'`);
            yr(s)
        }
        if (0 === s.styles.length) throw new Error(ce);
        return s.styles
    };

    const xr = (e, t) => {
        var r;
        const s = e.trim();
        if (s.includes(`${p}${N}`) && s.includes(`${N}${p}`)) throw new Error(me);
        const n = (e => {
            const t = [];
            for (let r = 0; r < e.length; r += 1) e[r] === f.LEFT && t.push(r);
            return t
        })(s);
        if (0 === Ie(n)) throw new Error(ie);
        let o, l, a;
        if (n.length > 0 && !s.includes(f.RIGHT)) throw new Error(`${ce} OR ${he}`);
        if (0 === n.length || !s.includes(f.RIGHT)) try {
            if (o = fr(s, t), o.success) {
                var i;
                if (0 === (null === (i = o.stylesOfSelector) || void 0 === i ? void 0 : i.length)) throw new Error(we);
                return {
                    selector: o.selector.trim(),
                    ast: o.ast,
                    rawStyles: o.stylesOfSelector
                }
            }
            throw new Error("Invalid selector")
        } catch (e) {
            throw new Error(Pt(e))
        }
        const c = {
            selector: ""
        };
        for (let e = n.length - 1; e > -1; e -= 1) {
            const r = n[e];
            if (!r) throw new Error(`Impossible to continue, no '{' to process for rule: '${s}'`);
            if (l = s.slice(0, r), a = s.slice(r + 1, s.length - 1), o = fr(l, t), o.success) {
                var u;
                c.selector = o.selector.trim(), c.ast = o.ast, c.rawStyles = o.stylesOfSelector;
                const e = Sr(a);
                null === (u = c.rawStyles) || void 0 === u || u.push(...e);
                break
            }
        }
        if (0 === (null === (r = c.selector) || void 0 === r ? void 0 : r.length)) throw new Error("Selector in not valid");
        return c
    };

    const Tr = /[;}]/g,
        Pr = /[;:}]/g,
        Nr = /\S/g,
        Or = e => {
            e.rawRuleData = {
                selector: ""
            }
        };

    const Rr = (e, t) => {
        let r, s = e.selectorBuffer.trim();
        if (s.startsWith("@")) throw new Error(`${Ee}: '${s}'.`);
        try {
            r = hr(s)
        } catch (e) {
            throw Nt.error(Pt(e)), new Error(`${ge}: '${s}'`)
        }
        if (-1 === e.nextIndex) {
            if (s === r.selector) throw new Error(`${we}: '${e.cssToParse}'`);
            e.cssToParse = ""
        }
        let n, o = [],
            l = !1;
        try {
            s = r.selector, o = r.stylesOfSelector, n = t.getSelectorAst(s), l = !0
        } catch (e) {
            l = !1
        }
        return e.nextIndex > 0 && (e.cssToParse = e.cssToParse.slice(e.nextIndex)), {
            success: l,
            selector: s,
            ast: n,
            stylesOfSelector: o
        }
    };

    const Ar = (e, t) => {
        Pr.lastIndex = e.nextIndex;
        let r = Pr.exec(e.cssToParse);
        if (null === r) throw new Error(`${de}: '${e.cssToParse}'`);
        let s = r.index,
            n = r[0];
        if (n === f.RIGHT) {
            if (0 !== e.cssToParse.slice(e.nextIndex, s).trim().length) throw new Error(`${de}: '${e.cssToParse}'`);
            if (0 === t.length) throw new Error(`${ce}: '${e.cssToParse}'`);
            return s
        }
        if (n === v) {
            const o = s;
            if (Tr.lastIndex = o, r = Tr.exec(e.cssToParse), null === r) throw new Error(`${he}: '${e.cssToParse}'`);
            s = r.index, n = r[0];
            const l = e.cssToParse.slice(e.nextIndex, o).trim();
            if (0 === l.length) throw new Error(`${fe}: '${e.cssToParse}'`);
            const a = e.cssToParse.slice(o + 1, s).trim();
            if (0 === a.length) throw new Error(`${pe}: '${e.cssToParse}'`);
            if (t.push({
                    property: l,
                    value: a
                }), n === f.RIGHT) return s
        }
        return e.cssToParse = e.cssToParse.slice(s + 1), e.nextIndex = 0, Ar(e, t)
    };

    const Ir = e => {
        const t = [],
            r = Ar(e, t);
        Nr.lastIndex = r + 1;
        const s = Nr.exec(e.cssToParse);
        if (null === s) return e.cssToParse = "", t;
        const n = s.index;
        return e.cssToParse = e.cssToParse.slice(n), t
    };

    const Lr = e => "number" == typeof e && !Number.isNaN(e);

    // --- Performance Throttler ---
    class Cr {
        constructor(e) {
            this.callback = e, this.executeCallback = this.executeCallback.bind(this)
        }
        executeCallback() {
            this.lastRunTime = performance.now(), Lr(this.timerId) && (clearTimeout(this.timerId), delete this.timerId), this.callback()
        }
        run() {
            if (!Lr(this.timerId)) {
                if (Lr(this.lastRunTime)) {
                    const e = performance.now() - this.lastRunTime;
                    if (e < Cr.THROTTLE_DELAY_MS) return void(this.timerId = window.setTimeout(this.executeCallback, Cr.THROTTLE_DELAY_MS - e))
                }
                this.timerId = window.setTimeout(this.executeCallback)
            }
        }
    }
    e(Cr, "THROTTLE_DELAY_MS", 150);

    // --- DOM Observer ---
    const Br = ["mouseover", "mouseleave", "mouseenter", "mouseout"],
        Mr = ["keydown", "keypress", "keyup", "auxclick", "click", "contextmenu", "dblclick", "mousedown", "mouseenter", "mouseleave", "mousemove", "mouseover", "mouseout", "mouseup", "pointerlockchange", "pointerlockerror", "select", "wheel"],
        Dr = ["wheel"];

    class Fr {
        constructor() {
            e(this, "getLastEventType", (() => this.lastEventType)), e(this, "getTimeSinceLastEvent", (() => this.lastEventTime ? Date.now() - this.lastEventTime : null)), this.trackedEvents = It ? Mr.filter((e => !Dr.includes(e))) : Mr, this.trackedEvents.forEach((e => {
                document.documentElement.addEventListener(e, this.trackEvent, !0)
            }))
        }
        trackEvent(e) {
            this.lastEventType = e.type, this.lastEventTime = Date.now()
        }
        isIgnoredEventType() {
            const e = this.getLastEventType(),
                t = this.getTimeSinceLastEvent();
            return !!e && Br.includes(e) && !!t && t < 10
        }
        stopTracking() {
            this.trackedEvents.forEach((e => {
                document.documentElement.removeEventListener(e, this.trackEvent, !0)
            }))
        }
    }

    function Wr(e) {
        e.isDomObserved && (e.isDomObserved = !1, e.domMutationObserver && e.domMutationObserver.disconnect(), e.eventTracker && e.eventTracker.stopTracking())
    }

    const Vr = /^("|')adguard.+?/,
        _r = (e, t) => {
            const {
                node: r
            } = t;
            t.removed = !0;
            const s = (e => {
                if (!(e instanceof Element)) throw new Error("Function received argument with wrong type");
                let t;
                t = e;
                const r = [];
                for (; t && t.nodeType === Node.ELEMENT_NODE;) {
                    let e = t.nodeName.toLowerCase();
                    if (t.id && "string" == typeof t.id) {
                        e += `#${t.id}`, r.unshift(e);
                        break
                    }
                    let s = t,
                        n = 1;
                    for (; s.previousElementSibling;) s = s.previousElementSibling, s.nodeType === Node.ELEMENT_NODE && s.nodeName.toLowerCase() === e && (n += 1);
                    1 !== n && (e += `:nth-of-type(${n})`), r.unshift(e), t = t.parentElement
                }
                return r.join(" > ")
            })(r), n = e.removalsStatistic[s] || 0;
            n > 50 ? Nt.error(`ExtendedCss: infinite loop protection for selector: '${s}'`) : r.parentElement && (r.parentElement.removeChild(r), e.removalsStatistic[s] = n + 1)
        },
        Gr = (e, t) => {
            e instanceof HTMLElement && Object.keys(t).forEach((r => {
                if (void 0 !== e.style.getPropertyValue(r.toString())) {
                    let s = t[r];
                    if (!s) return;
                    if (r === oe && s.match(Vr)) return;
                    s = ((e, t) => {
                        const r = e.indexOf(t, e.length - t.length);
                        return r >= 0 ? e.substring(0, r) : e
                    })(s.trim(), "!important").trim(), e.style.setProperty(r, s, "important")
                }
            }))
        },
        Hr = (e, t) => {
            if (t.protectionObserver) return;
            let r;
            if (e.beforeStyleApplied) {
                if (!(e => "node" in e && "rules" in e && e.rules instanceof Array)(t)) throw new Error("Returned IAffectedElement should have 'node' and 'rules' properties");
                if (r = e.beforeStyleApplied(t), !r) throw new Error("Callback 'beforeStyleApplied' should return IAffectedElement")
            } else r = t;
            if (!(e => "node" in e && "originalStyle" in e && "rules" in e && e.rules instanceof Array)(r)) throw new Error("Returned IAffectedElement should have 'node' and 'rules' properties");
            const {
                node: s,
                rules: n
            } = r;
            for (let t = 0; t < n.length; t += 1) {
                const o = n[t],
                    l = null == o ? void 0 : o.selector,
                    a = null == o ? void 0 : o.style,
                    i = null == o ? void 0 : o.debug;
                if (a) {
                    if (a[z] === le) return void _r(e, r);
                    Gr(s, a)
                } else if (!i) throw new Error(`No style declaration in rule for selector: '${l}'`)
            }
        },
        Ur = e => {
            e.protectionObserver && e.protectionObserver.disconnect(), e.node.style.cssText = e.originalStyle
        };

    class jr {
        constructor(e) {
            this.styleProtectionCount = 0, this.observer = new $t.MutationObserver((t => {
                t.length && (this.styleProtectionCount += 1, e(t, this))
            }))
        }
        observe(e, t) {
            this.styleProtectionCount < 50 ? this.observer.observe(e, t) : Nt.error("ExtendedCss: infinite loop protection for style")
        }
        disconnect() {
            this.observer.disconnect()
        }
    }

    const qr = {
            attributes: !0,
            attributeOldValue: !0,
            attributeFilter: ["style"]
        },
        Qr = (e, t) => {
            if (!$t.MutationObserver) return null;
            const r = [];
            t.forEach((e => {
                const {
                    style: t
                } = e;
                t && r.push(t)
            }));
            const s = new jr((e => (t, r) => {
                if (!t[0]) return;
                const {
                    target: s
                } = t[0];
                r.disconnect(), e.forEach((e => {
                    Gr(s, e)
                })), r.observe(s, qr)
            })(r));
            return s.observe(e, qr), s
        };

    class zr {
        constructor() {
            this.appliesTimings = [], this.appliesCount = 0, this.timingsSum = 0, this.meanTiming = 0, this.squaredSum = 0, this.standardDeviation = 0
        }
        push(e) {
            this.appliesTimings.push(e), this.appliesCount += 1, this.timingsSum += e, this.meanTiming = this.timingsSum / this.appliesCount, this.squaredSum += e * e, this.standardDeviation = Math.sqrt(this.squaredSum / this.appliesCount - Math.pow(this.meanTiming, 2))
        }
    }

    const Yr = e => Number(e.toFixed(4)),
        Kr = e => {
            const t = [];
            Wr(e), e.parsedRules.forEach((r => {
                const s = ((e, t) => {
                    const r = !!t.debug || e.debug;
                    let s;
                    r && (s = performance.now());
                    const {
                        ast: n
                    } = t, o = [];
                    try {
                        o.push(...cr(n))
                    } catch (t) {
                        e.debug && Nt.error(Pt(t))
                    }
                    if (o.forEach((r => {
                            let s = (n = e.affectedElements, o = r, n.find((e => e.node === o)));
                            var n, o;
                            if (s) s.rules.push(t), Hr(e, s);
                            else {
                                const n = r.style.cssText;
                                s = {
                                    node: r,
                                    rules: [t],
                                    originalStyle: n,
                                    protectionObserver: null
                                }, Hr(e, s), e.affectedElements.push(s)
                            }
                        })), r && s) {
                        const e = performance.now() - s;
                        t.timingStats || (t.timingStats = new zr), t.timingStats.push(e)
                    }
                    return o
                })(e, r);
                Array.prototype.push.apply(t, s), r.debug && (r.matchedElements = s)
            }));
            let r = e.affectedElements.length;
            for (; r;) {
                const s = e.affectedElements[r - 1];
                if (!s) break;
                t.includes(s.node) ? s.removed || s.protectionObserver || (s.protectionObserver = Qr(s.node, s.rules)) : (Ur(s), e.affectedElements.splice(r - 1, 1)), r -= 1
            }! function(e) {
                e.isDomObserved || (e.isDomObserved = !0, e.domMutationObserver = new $t.MutationObserver((t => {
                    if (!t || 0 === t.length) return;
                    const r = new Fr;
                    r.isIgnoredEventType() && function(e) {
                        return !e.some((e => "attributes" !== e.type))
                    }(t) || (e.eventTracker = r, e.scheduler.run())
                })), e.domMutationObserver.observe(document, {
                    childList: !0,
                    subtree: !0,
                    attributes: !0,
                    attributeFilter: ["id", "class"]
                }))
            }(e), (e => {
                if (e.areTimingsPrinted) return;
                e.areTimingsPrinted = !0;
                const t = {};
                e.parsedRules.forEach((e => {
                    if (e.timingStats) {
                        const {
                            selector: s,
                            style: n,
                            debug: o,
                            matchedElements: l
                        } = e;
                        if (!n && !o) throw new Error(`Rule should have style declaration for selector: '${s}'`);
                        const a = {
                            selectorParsed: s,
                            timings: (r = e.timingStats, {
                                appliesTimings: r.appliesTimings.map((e => Yr(e))),
                                appliesCount: Yr(r.appliesCount),
                                timingsSum: Yr(r.timingsSum),
                                meanTiming: Yr(r.meanTiming),
                                standardDeviation: Yr(r.standardDeviation)
                            })
                        };
                        n && n[z] === le ? a.removed = !0 : (a.styleApplied = n || null, a.matchedElements = l), t[s] = a
                    }
                    var r
                })), 0 !== Object.keys(t).length && Nt.info("[ExtendedCss] Timings in milliseconds for %o:\n%o", window.location.href, t)
            })(e)
        };

    // --- Main Class ---
    class Xr {
        constructor(e) {
            if (!e) throw new Error("ExtendedCss configuration should be provided.");
            if (this.applyRulesCallbackListener = this.applyRulesCallbackListener.bind(this), this.context = {
                    beforeStyleApplied: e.beforeStyleApplied,
                    debug: !1,
                    affectedElements: [],
                    isDomObserved: !1,
                    removalsStatistic: {},
                    parsedRules: [],
                    scheduler: new Cr(this.applyRulesCallbackListener)
                }, (t = navigator.userAgent).includes("MSIE") || t.includes("Trident/")) Nt.error("Browser is not supported by ExtendedCss");
            else {
                var t;
                if (!e.styleSheet && !e.cssRules) throw new Error("ExtendedCss configuration should have 'styleSheet' or 'cssRules' defined.");
                if (e.styleSheet) try {
                    this.context.parsedRules.push(...((e, t) => {
                        const r = e.trim();
                        if (r.includes(`${p}${N}`) && r.includes(`${N}${p}`)) throw new Error(`${me} in stylesheet: '${r}'`);
                        const s = {
                                isSelector: !0,
                                nextIndex: 0,
                                cssToParse: r,
                                selectorBuffer: "",
                                rawRuleData: {
                                    selector: ""
                                }
                            },
                            n = pr();
                        let o;
                        for (; s.cssToParse;)
                            if (s.isSelector) {
                                if (s.nextIndex = s.cssToParse.indexOf(f.LEFT), 0 === s.selectorBuffer.length && 0 === s.nextIndex) throw new Error(`${ue}: '${s.cssToParse}'`);
                                -1 === s.nextIndex ? s.selectorBuffer = s.cssToParse : s.selectorBuffer += s.cssToParse.slice(0, s.nextIndex), o = Rr(s, t), o.success ? (s.rawRuleData.selector = o.selector.trim(), s.rawRuleData.ast = o.ast, s.rawRuleData.rawStyles = o.stylesOfSelector, s.isSelector = !1, -1 === s.nextIndex ? (wr(n, s.rawRuleData), Or(s)) : (s.nextIndex = 1, s.selectorBuffer = "")) : (s.selectorBuffer += f.LEFT, s.cssToParse = s.cssToParse.slice(1))
                            } else {
                                var l;
                                const e = Ir(s);
                                null === (l = s.rawRuleData.rawStyles) || void 0 === l || l.push(...e), wr(n, s.rawRuleData), s.nextIndex = 0, Or(s), s.isSelector = !0
                            }
                        return Er(n)
                    })(e.styleSheet, ur))
                } catch (e) {
                    throw new Error(`Pass the rules as configuration.cssRules since configuration.styleSheet cannot be parsed because of: '${Pt(e)}'`)
                }
                if (e.cssRules && this.context.parsedRules.push(...((e, t) => {
                        const r = pr(),
                            s = [];
                        return [...new Set(e.map((e => e.trim())))].forEach((e => {
                            try {
                                wr(r, xr(e, t))
                            } catch (t) {
                                const r = Pt(t);
                                s.push(`'${e}' - error: '${r}'`)
                            }
                        })), s.length > 0 && Nt.info(`Invalid rules:\n  ${s.join("\n  ")}`), Er(r)
                    })(e.cssRules, ur)), this.context.debug = e.debug || this.context.parsedRules.some((e => e.debug === ae)), this.context.beforeStyleApplied && "function" != typeof this.context.beforeStyleApplied) throw new Error(`Invalid configuration. Type of 'beforeStyleApplied' should be a function, received: '${typeof this.context.beforeStyleApplied}'`)
            }
        }
        applyRulesCallbackListener() {
            Kr(this.context)
        }
        init() {
            kt.setGetter()
        }
        apply() {
            Kr(this.context), "complete" !== document.readyState && document.addEventListener("DOMContentLoaded", this.applyRulesCallbackListener, !1)
        }
        dispose() {
            Wr(this.context), this.context.affectedElements.forEach((e => {
                Ur(e)
            })), document.removeEventListener("DOMContentLoaded", this.applyRulesCallbackListener, !1)
        }
        getAffectedElements() {
            return this.context.affectedElements
        }
        static query(e) {
            let t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            if("string" != typeof e) throw new Error("Selector should be defined as a string.");
            const r = performance.now();
            try {
                return ur.querySelectorAll(e)
            } finally {
                const e = performance.now();
                t || Nt.info(`[ExtendedCss] Elapsed: ${Math.round(1e3*(e-r))} μs.`)
            }
        }
        static validate(e) {
            try {
                const {
                    selector: t
                } = hr(e);
                return Xr.query(t), {
                    ok: !0,
                    error: null
                }
            } catch (t) {
                return {
                    ok: !1,
                    error: `Error: Invalid selector: '${e}' -- ${Pt(t)}`
                }
            }
        }
    }
    return Xr
})();
