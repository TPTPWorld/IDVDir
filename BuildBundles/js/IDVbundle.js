(() => {
  var __defProp = Object.defineProperty;
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };

  // antlr4.js
  var antlr4_exports = {};
  __export(antlr4_exports, {
    ATN: () => Sn,
    ATNDeserializer: () => mn,
    BailErrorStrategy: () => En,
    CharStream: () => _n,
    CharStreams: () => An,
    CommonToken: () => Cn,
    CommonTokenStream: () => Nn,
    DFA: () => kn,
    DefaultErrorStrategy: () => In,
    DiagnosticErrorListener: () => yn,
    ErrorListener: () => Ln,
    FailedPredicateException: () => On,
    InputMismatchException: () => wn,
    InputStream: () => Rn,
    Interval: () => vn,
    IntervalSet: () => bn,
    LL1Analyzer: () => Pn,
    Lexer: () => Dn,
    LexerATNSimulator: () => Fn,
    NoViableAltException: () => Mn,
    ParseTreeListener: () => Un,
    ParseTreeVisitor: () => Bn,
    ParseTreeWalker: () => zn,
    Parser: () => Vn,
    ParserATNSimulator: () => qn,
    ParserRuleContext: () => Hn,
    PredictionContextCache: () => Kn,
    PredictionMode: () => Yn,
    RecognitionException: () => Gn,
    RuleContext: () => Wn,
    RuleNode: () => jn,
    TerminalNode: () => $n,
    Token: () => Xn,
    TokenStreamRewriter: () => Jn,
    arrayToString: () => Zn,
    default: () => Qn
  });
  var t = "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {};
  function e() {
    throw new Error("setTimeout has not been defined");
  }
  function n() {
    throw new Error("clearTimeout has not been defined");
  }
  var s = e;
  var i = n;
  function r(t2) {
    if (s === setTimeout) return setTimeout(t2, 0);
    if ((s === e || !s) && setTimeout) return s = setTimeout, setTimeout(t2, 0);
    try {
      return s(t2, 0);
    } catch (e2) {
      try {
        return s.call(null, t2, 0);
      } catch (e3) {
        return s.call(this, t2, 0);
      }
    }
  }
  "function" == typeof t.setTimeout && (s = setTimeout), "function" == typeof t.clearTimeout && (i = clearTimeout);
  var o;
  var a = [];
  var l = false;
  var h = -1;
  function c() {
    l && o && (l = false, o.length ? a = o.concat(a) : h = -1, a.length && u());
  }
  function u() {
    if (!l) {
      var t2 = r(c);
      l = true;
      for (var e2 = a.length; e2; ) {
        for (o = a, a = []; ++h < e2; ) o && o[h].run();
        h = -1, e2 = a.length;
      }
      o = null, l = false, (function(t3) {
        if (i === clearTimeout) return clearTimeout(t3);
        if ((i === n || !i) && clearTimeout) return i = clearTimeout, clearTimeout(t3);
        try {
          return i(t3);
        } catch (e3) {
          try {
            return i.call(null, t3);
          } catch (e4) {
            return i.call(this, t3);
          }
        }
      })(t2);
    }
  }
  function d(t2, e2) {
    this.fun = t2, this.array = e2;
  }
  d.prototype.run = function() {
    this.fun.apply(null, this.array);
  };
  function g() {
  }
  var p = g;
  var f = g;
  var x = g;
  var T = g;
  var S = g;
  var m = g;
  var E = g;
  var _ = t.performance || {};
  var A = _.now || _.mozNow || _.msNow || _.oNow || _.webkitNow || function() {
    return (/* @__PURE__ */ new Date()).getTime();
  };
  var C = /* @__PURE__ */ new Date();
  var N = { nextTick: function(t2) {
    var e2 = new Array(arguments.length - 1);
    if (arguments.length > 1) for (var n2 = 1; n2 < arguments.length; n2++) e2[n2 - 1] = arguments[n2];
    a.push(new d(t2, e2)), 1 !== a.length || l || r(u);
  }, title: "browser", browser: true, env: {}, argv: [], version: "", versions: {}, on: p, addListener: f, once: x, off: T, removeListener: S, removeAllListeners: m, emit: E, binding: function(t2) {
    throw new Error("process.binding is not supported");
  }, cwd: function() {
    return "/";
  }, chdir: function(t2) {
    throw new Error("process.chdir is not supported");
  }, umask: function() {
    return 0;
  }, hrtime: function(t2) {
    var e2 = 1e-3 * A.call(_), n2 = Math.floor(e2), s2 = Math.floor(e2 % 1 * 1e9);
    return t2 && (n2 -= t2[0], (s2 -= t2[1]) < 0 && (n2--, s2 += 1e9)), [n2, s2];
  }, platform: "browser", release: {}, config: {}, uptime: function() {
    return (/* @__PURE__ */ new Date() - C) / 1e3;
  } };
  var k = { 763: () => {
  } };
  var I = {};
  function y(t2) {
    var e2 = I[t2];
    if (void 0 !== e2) return e2.exports;
    var n2 = I[t2] = { exports: {} };
    return k[t2](n2, n2.exports, y), n2.exports;
  }
  y.d = (t2, e2) => {
    for (var n2 in e2) y.o(e2, n2) && !y.o(t2, n2) && Object.defineProperty(t2, n2, { enumerable: true, get: e2[n2] });
  }, y.o = (t2, e2) => Object.prototype.hasOwnProperty.call(t2, e2);
  var L = {};
  y.d(L, { MG: () => Et, fr: () => Qt, sR: () => je, Zo: () => Xe, iH: () => en, rt: () => ie, jB: () => on, M8: () => be, $t: () => We, aq: () => Ke, pG: () => te, eP: () => qe, KU: () => Ve, zW: () => Je, IX: () => Y, mY: () => G, a7: () => mt, JG: () => he, ay: () => _e, X2: () => Ie, WU: () => Me, Uw: () => Ue, gw: () => Be, iX: () => ln, re: () => Le, Pg: () => un, tD: () => Oe, R$: () => ke, Dj: () => ae, m7: () => ht, NZ: () => it, xo: () => rt, ou: () => O, qC: () => dn, mD: () => M, Ay: () => Tn });
  var O = class {
    constructor() {
      this.source = null, this.type = null, this.channel = null, this.start = null, this.stop = null, this.tokenIndex = null, this.line = null, this.column = null, this._text = null;
    }
    getTokenSource() {
      return this.source[0];
    }
    getInputStream() {
      return this.source[1];
    }
    get text() {
      return this._text;
    }
    set text(t2) {
      this._text = t2;
    }
  };
  function w(t2, e2) {
    if (!Array.isArray(t2) || !Array.isArray(e2)) return false;
    if (t2 === e2) return true;
    if (t2.length !== e2.length) return false;
    for (let n2 = 0; n2 < t2.length; n2++) if (!(t2[n2] === e2[n2] || t2[n2].equals && t2[n2].equals(e2[n2]))) return false;
    return true;
  }
  O.INVALID_TYPE = 0, O.EPSILON = -2, O.MIN_USER_TOKEN_TYPE = 1, O.EOF = -1, O.DEFAULT_CHANNEL = 0, O.HIDDEN_CHANNEL = 1;
  var R = Math.round(Math.random() * Math.pow(2, 32));
  function v(t2) {
    if (!t2) return 0;
    const e2 = typeof t2, n2 = "string" === e2 ? t2 : !("object" !== e2 || !t2.toString) && t2.toString();
    if (!n2) return 0;
    let s2, i2;
    const r2 = 3 & n2.length, o2 = n2.length - r2;
    let a2 = R;
    const l2 = 3432918353, h2 = 461845907;
    let c2 = 0;
    for (; c2 < o2; ) i2 = 255 & n2.charCodeAt(c2) | (255 & n2.charCodeAt(++c2)) << 8 | (255 & n2.charCodeAt(++c2)) << 16 | (255 & n2.charCodeAt(++c2)) << 24, ++c2, i2 = (65535 & i2) * l2 + (((i2 >>> 16) * l2 & 65535) << 16) & 4294967295, i2 = i2 << 15 | i2 >>> 17, i2 = (65535 & i2) * h2 + (((i2 >>> 16) * h2 & 65535) << 16) & 4294967295, a2 ^= i2, a2 = a2 << 13 | a2 >>> 19, s2 = 5 * (65535 & a2) + ((5 * (a2 >>> 16) & 65535) << 16) & 4294967295, a2 = 27492 + (65535 & s2) + ((58964 + (s2 >>> 16) & 65535) << 16);
    switch (i2 = 0, r2) {
      case 3:
        i2 ^= (255 & n2.charCodeAt(c2 + 2)) << 16;
      case 2:
        i2 ^= (255 & n2.charCodeAt(c2 + 1)) << 8;
      case 1:
        i2 ^= 255 & n2.charCodeAt(c2), i2 = (65535 & i2) * l2 + (((i2 >>> 16) * l2 & 65535) << 16) & 4294967295, i2 = i2 << 15 | i2 >>> 17, i2 = (65535 & i2) * h2 + (((i2 >>> 16) * h2 & 65535) << 16) & 4294967295, a2 ^= i2;
    }
    return a2 ^= n2.length, a2 ^= a2 >>> 16, a2 = 2246822507 * (65535 & a2) + ((2246822507 * (a2 >>> 16) & 65535) << 16) & 4294967295, a2 ^= a2 >>> 13, a2 = 3266489909 * (65535 & a2) + ((3266489909 * (a2 >>> 16) & 65535) << 16) & 4294967295, a2 ^= a2 >>> 16, a2 >>> 0;
  }
  var b = class _b {
    constructor() {
      this.count = 0, this.hash = 0;
    }
    update() {
      for (let t2 = 0; t2 < arguments.length; t2++) {
        const e2 = arguments[t2];
        if (null != e2) if (Array.isArray(e2)) this.update.apply(this, e2);
        else {
          let t3 = 0;
          switch (typeof e2) {
            case "undefined":
            case "function":
              continue;
            case "number":
            case "boolean":
              t3 = e2;
              break;
            case "string":
              t3 = v(e2);
              break;
            default:
              e2.updateHashCode ? e2.updateHashCode(this) : console.log("No updateHashCode for " + e2.toString());
              continue;
          }
          t3 *= 3432918353, t3 = t3 << 15 | t3 >>> 17, t3 *= 461845907, this.count = this.count + 1;
          let n2 = this.hash ^ t3;
          n2 = n2 << 13 | n2 >>> 19, n2 = 5 * n2 + 3864292196, this.hash = n2;
        }
      }
    }
    finish() {
      let t2 = this.hash ^ 4 * this.count;
      return t2 ^= t2 >>> 16, t2 *= 2246822507, t2 ^= t2 >>> 13, t2 *= 3266489909, t2 ^= t2 >>> 16, t2;
    }
    static hashStuff() {
      const t2 = new _b();
      return t2.update.apply(t2, arguments), t2.finish();
    }
  };
  function P(t2) {
    return t2 ? "string" == typeof t2 ? v(t2) : t2.hashCode() : -1;
  }
  function D(t2, e2) {
    return t2 && t2.equals ? t2.equals(e2) : t2 === e2;
  }
  function F(t2) {
    return null === t2 ? "null" : t2;
  }
  function M(t2) {
    return Array.isArray(t2) ? "[" + t2.map(F).join(", ") + "]" : "null";
  }
  var U = class {
    constructor(t2, e2) {
      this.buckets = new Array(16), this.threshold = Math.floor(12), this.itemCount = 0, this.hashFunction = t2 || P, this.equalsFunction = e2 || D;
    }
    get(t2) {
      if (null == t2) return t2;
      const e2 = this._getBucket(t2);
      if (!e2) return null;
      for (const n2 of e2) if (this.equalsFunction(n2, t2)) return n2;
      return null;
    }
    add(t2) {
      return this.getOrAdd(t2) === t2;
    }
    getOrAdd(t2) {
      this._expand();
      const e2 = this._getSlot(t2);
      let n2 = this.buckets[e2];
      if (!n2) return n2 = [t2], this.buckets[e2] = n2, this.itemCount++, t2;
      for (const e3 of n2) if (this.equalsFunction(e3, t2)) return e3;
      return n2.push(t2), this.itemCount++, t2;
    }
    has(t2) {
      return null != this.get(t2);
    }
    values() {
      return this.buckets.filter(((t2) => null != t2)).flat(1);
    }
    toString() {
      return M(this.values());
    }
    get length() {
      return this.itemCount;
    }
    _getSlot(t2) {
      return this.hashFunction(t2) & this.buckets.length - 1;
    }
    _getBucket(t2) {
      return this.buckets[this._getSlot(t2)];
    }
    _expand() {
      if (this.itemCount <= this.threshold) return;
      const t2 = this.buckets, e2 = 2 * this.buckets.length;
      this.buckets = new Array(e2), this.threshold = Math.floor(0.75 * e2);
      for (const e3 of t2) if (e3) for (const t3 of e3) {
        const e4 = this._getSlot(t3);
        let n2 = this.buckets[e4];
        n2 || (n2 = [], this.buckets[e4] = n2), n2.push(t3);
      }
    }
  };
  var B = class _B {
    hashCode() {
      const t2 = new b();
      return this.updateHashCode(t2), t2.finish();
    }
    evaluate(t2, e2) {
    }
    evalPrecedence(t2, e2) {
      return this;
    }
    static andContext(t2, e2) {
      if (null === t2 || t2 === _B.NONE) return e2;
      if (null === e2 || e2 === _B.NONE) return t2;
      const n2 = new z(t2, e2);
      return 1 === n2.opnds.length ? n2.opnds[0] : n2;
    }
    static orContext(t2, e2) {
      if (null === t2) return e2;
      if (null === e2) return t2;
      if (t2 === _B.NONE || e2 === _B.NONE) return _B.NONE;
      const n2 = new V(t2, e2);
      return 1 === n2.opnds.length ? n2.opnds[0] : n2;
    }
  };
  var z = class _z extends B {
    constructor(t2, e2) {
      super();
      const n2 = new U();
      t2 instanceof _z ? t2.opnds.map((function(t3) {
        n2.add(t3);
      })) : n2.add(t2), e2 instanceof _z ? e2.opnds.map((function(t3) {
        n2.add(t3);
      })) : n2.add(e2);
      const s2 = q(n2);
      if (s2.length > 0) {
        let t3 = null;
        s2.map((function(e3) {
          (null === t3 || e3.precedence < t3.precedence) && (t3 = e3);
        })), n2.add(t3);
      }
      this.opnds = Array.from(n2.values());
    }
    equals(t2) {
      return this === t2 || t2 instanceof _z && w(this.opnds, t2.opnds);
    }
    updateHashCode(t2) {
      t2.update(this.opnds, "AND");
    }
    evaluate(t2, e2) {
      for (let n2 = 0; n2 < this.opnds.length; n2++) if (!this.opnds[n2].evaluate(t2, e2)) return false;
      return true;
    }
    evalPrecedence(t2, e2) {
      let n2 = false;
      const s2 = [];
      for (let i3 = 0; i3 < this.opnds.length; i3++) {
        const r2 = this.opnds[i3], o2 = r2.evalPrecedence(t2, e2);
        if (n2 |= o2 !== r2, null === o2) return null;
        o2 !== B.NONE && s2.push(o2);
      }
      if (!n2) return this;
      if (0 === s2.length) return B.NONE;
      let i2 = null;
      return s2.map((function(t3) {
        i2 = null === i2 ? t3 : B.andContext(i2, t3);
      })), i2;
    }
    toString() {
      const t2 = this.opnds.map(((t3) => t3.toString()));
      return (t2.length > 3 ? t2.slice(3) : t2).join("&&");
    }
  };
  var V = class _V extends B {
    constructor(t2, e2) {
      super();
      const n2 = new U();
      t2 instanceof _V ? t2.opnds.map((function(t3) {
        n2.add(t3);
      })) : n2.add(t2), e2 instanceof _V ? e2.opnds.map((function(t3) {
        n2.add(t3);
      })) : n2.add(e2);
      const s2 = q(n2);
      if (s2.length > 0) {
        const t3 = s2.sort((function(t4, e4) {
          return t4.compareTo(e4);
        })), e3 = t3[t3.length - 1];
        n2.add(e3);
      }
      this.opnds = Array.from(n2.values());
    }
    equals(t2) {
      return this === t2 || t2 instanceof _V && w(this.opnds, t2.opnds);
    }
    updateHashCode(t2) {
      t2.update(this.opnds, "OR");
    }
    evaluate(t2, e2) {
      for (let n2 = 0; n2 < this.opnds.length; n2++) if (this.opnds[n2].evaluate(t2, e2)) return true;
      return false;
    }
    evalPrecedence(t2, e2) {
      let n2 = false;
      const s2 = [];
      for (let i2 = 0; i2 < this.opnds.length; i2++) {
        const r2 = this.opnds[i2], o2 = r2.evalPrecedence(t2, e2);
        if (n2 |= o2 !== r2, o2 === B.NONE) return B.NONE;
        null !== o2 && s2.push(o2);
      }
      return n2 ? (s2.length, null) : this;
    }
    toString() {
      const t2 = this.opnds.map(((t3) => t3.toString()));
      return (t2.length > 3 ? t2.slice(3) : t2).join("||");
    }
  };
  function q(t2) {
    const e2 = [];
    return t2.values().map((function(t3) {
      t3 instanceof B.PrecedencePredicate && e2.push(t3);
    })), e2;
  }
  function H(t2, e2) {
    if (null === t2) {
      const t3 = { state: null, alt: null, context: null, semanticContext: null };
      return e2 && (t3.reachesIntoOuterContext = 0), t3;
    }
    {
      const n2 = {};
      return n2.state = t2.state || null, n2.alt = void 0 === t2.alt ? null : t2.alt, n2.context = t2.context || null, n2.semanticContext = t2.semanticContext || null, e2 && (n2.reachesIntoOuterContext = t2.reachesIntoOuterContext || 0, n2.precedenceFilterSuppressed = t2.precedenceFilterSuppressed || false), n2;
    }
  }
  var K = class _K {
    constructor(t2, e2) {
      this.checkContext(t2, e2), t2 = H(t2), e2 = H(e2, true), this.state = null !== t2.state ? t2.state : e2.state, this.alt = null !== t2.alt ? t2.alt : e2.alt, this.context = null !== t2.context ? t2.context : e2.context, this.semanticContext = null !== t2.semanticContext ? t2.semanticContext : null !== e2.semanticContext ? e2.semanticContext : B.NONE, this.reachesIntoOuterContext = e2.reachesIntoOuterContext, this.precedenceFilterSuppressed = e2.precedenceFilterSuppressed;
    }
    checkContext(t2, e2) {
      null !== t2.context && void 0 !== t2.context || null !== e2 && null !== e2.context && void 0 !== e2.context || (this.context = null);
    }
    hashCode() {
      const t2 = new b();
      return this.updateHashCode(t2), t2.finish();
    }
    updateHashCode(t2) {
      t2.update(this.state.stateNumber, this.alt, this.context, this.semanticContext);
    }
    equals(t2) {
      return this === t2 || t2 instanceof _K && this.state.stateNumber === t2.state.stateNumber && this.alt === t2.alt && (null === this.context ? null === t2.context : this.context.equals(t2.context)) && this.semanticContext.equals(t2.semanticContext) && this.precedenceFilterSuppressed === t2.precedenceFilterSuppressed;
    }
    hashCodeForConfigSet() {
      const t2 = new b();
      return t2.update(this.state.stateNumber, this.alt, this.semanticContext), t2.finish();
    }
    equalsForConfigSet(t2) {
      return this === t2 || t2 instanceof _K && this.state.stateNumber === t2.state.stateNumber && this.alt === t2.alt && this.semanticContext.equals(t2.semanticContext);
    }
    toString() {
      return "(" + this.state + "," + this.alt + (null !== this.context ? ",[" + this.context.toString() + "]" : "") + (this.semanticContext !== B.NONE ? "," + this.semanticContext.toString() : "") + (this.reachesIntoOuterContext > 0 ? ",up=" + this.reachesIntoOuterContext : "") + ")";
    }
  };
  var Y = class _Y {
    constructor(t2, e2) {
      this.start = t2, this.stop = e2;
    }
    clone() {
      return new _Y(this.start, this.stop);
    }
    contains(t2) {
      return t2 >= this.start && t2 < this.stop;
    }
    toString() {
      return this.start === this.stop - 1 ? this.start.toString() : this.start.toString() + ".." + (this.stop - 1).toString();
    }
    get length() {
      return this.stop - this.start;
    }
  };
  Y.INVALID_INTERVAL = new Y(-1, -2);
  var G = class _G {
    constructor() {
      this.intervals = null, this.readOnly = false;
    }
    first(t2) {
      return null === this.intervals || 0 === this.intervals.length ? O.INVALID_TYPE : this.intervals[0].start;
    }
    addOne(t2) {
      this.addInterval(new Y(t2, t2 + 1));
    }
    addRange(t2, e2) {
      this.addInterval(new Y(t2, e2 + 1));
    }
    addInterval(t2) {
      if (null === this.intervals) this.intervals = [], this.intervals.push(t2.clone());
      else {
        for (let e2 = 0; e2 < this.intervals.length; e2++) {
          const n2 = this.intervals[e2];
          if (t2.stop < n2.start) return void this.intervals.splice(e2, 0, t2);
          if (t2.stop === n2.start) return void (this.intervals[e2] = new Y(t2.start, n2.stop));
          if (t2.start <= n2.stop) return this.intervals[e2] = new Y(Math.min(n2.start, t2.start), Math.max(n2.stop, t2.stop)), void this.reduce(e2);
        }
        this.intervals.push(t2.clone());
      }
    }
    addSet(t2) {
      return null !== t2.intervals && t2.intervals.forEach(((t3) => this.addInterval(t3)), this), this;
    }
    reduce(t2) {
      if (t2 < this.intervals.length - 1) {
        const e2 = this.intervals[t2], n2 = this.intervals[t2 + 1];
        e2.stop >= n2.stop ? (this.intervals.splice(t2 + 1, 1), this.reduce(t2)) : e2.stop >= n2.start && (this.intervals[t2] = new Y(e2.start, n2.stop), this.intervals.splice(t2 + 1, 1));
      }
    }
    complement(t2, e2) {
      const n2 = new _G();
      return n2.addInterval(new Y(t2, e2 + 1)), null !== this.intervals && this.intervals.forEach(((t3) => n2.removeRange(t3))), n2;
    }
    contains(t2) {
      if (null === this.intervals) return false;
      for (let e2 = 0; e2 < this.intervals.length; e2++) if (this.intervals[e2].contains(t2)) return true;
      return false;
    }
    removeRange(t2) {
      if (t2.start === t2.stop - 1) this.removeOne(t2.start);
      else if (null !== this.intervals) {
        let e2 = 0;
        for (let n2 = 0; n2 < this.intervals.length; n2++) {
          const n3 = this.intervals[e2];
          if (t2.stop <= n3.start) return;
          if (t2.start > n3.start && t2.stop < n3.stop) {
            this.intervals[e2] = new Y(n3.start, t2.start);
            const s2 = new Y(t2.stop, n3.stop);
            return void this.intervals.splice(e2, 0, s2);
          }
          t2.start <= n3.start && t2.stop >= n3.stop ? (this.intervals.splice(e2, 1), e2 -= 1) : t2.start < n3.stop ? this.intervals[e2] = new Y(n3.start, t2.start) : t2.stop < n3.stop && (this.intervals[e2] = new Y(t2.stop, n3.stop)), e2 += 1;
        }
      }
    }
    removeOne(t2) {
      if (null !== this.intervals) for (let e2 = 0; e2 < this.intervals.length; e2++) {
        const n2 = this.intervals[e2];
        if (t2 < n2.start) return;
        if (t2 === n2.start && t2 === n2.stop - 1) return void this.intervals.splice(e2, 1);
        if (t2 === n2.start) return void (this.intervals[e2] = new Y(n2.start + 1, n2.stop));
        if (t2 === n2.stop - 1) return void (this.intervals[e2] = new Y(n2.start, n2.stop - 1));
        if (t2 < n2.stop - 1) {
          const s2 = new Y(n2.start, t2);
          return n2.start = t2 + 1, void this.intervals.splice(e2, 0, s2);
        }
      }
    }
    toString(t2, e2, n2) {
      return t2 = t2 || null, e2 = e2 || null, n2 = n2 || false, null === this.intervals ? "{}" : null !== t2 || null !== e2 ? this.toTokenString(t2, e2) : n2 ? this.toCharString() : this.toIndexString();
    }
    toCharString() {
      const t2 = [];
      for (let e2 = 0; e2 < this.intervals.length; e2++) {
        const n2 = this.intervals[e2];
        n2.stop === n2.start + 1 ? n2.start === O.EOF ? t2.push("<EOF>") : t2.push("'" + String.fromCharCode(n2.start) + "'") : t2.push("'" + String.fromCharCode(n2.start) + "'..'" + String.fromCharCode(n2.stop - 1) + "'");
      }
      return t2.length > 1 ? "{" + t2.join(", ") + "}" : t2[0];
    }
    toIndexString() {
      const t2 = [];
      for (let e2 = 0; e2 < this.intervals.length; e2++) {
        const n2 = this.intervals[e2];
        n2.stop === n2.start + 1 ? n2.start === O.EOF ? t2.push("<EOF>") : t2.push(n2.start.toString()) : t2.push(n2.start.toString() + ".." + (n2.stop - 1).toString());
      }
      return t2.length > 1 ? "{" + t2.join(", ") + "}" : t2[0];
    }
    toTokenString(t2, e2) {
      const n2 = [];
      for (let s2 = 0; s2 < this.intervals.length; s2++) {
        const i2 = this.intervals[s2];
        for (let s3 = i2.start; s3 < i2.stop; s3++) n2.push(this.elementName(t2, e2, s3));
      }
      return n2.length > 1 ? "{" + n2.join(", ") + "}" : n2[0];
    }
    elementName(t2, e2, n2) {
      return n2 === O.EOF ? "<EOF>" : n2 === O.EPSILON ? "<EPSILON>" : t2[n2] || e2[n2];
    }
    get length() {
      return this.intervals.map(((t2) => t2.length)).reduce(((t2, e2) => t2 + e2));
    }
  };
  var W = class _W {
    constructor() {
      this.atn = null, this.stateNumber = _W.INVALID_STATE_NUMBER, this.stateType = null, this.ruleIndex = 0, this.epsilonOnlyTransitions = false, this.transitions = [], this.nextTokenWithinRule = null;
    }
    toString() {
      return this.stateNumber;
    }
    equals(t2) {
      return t2 instanceof _W && this.stateNumber === t2.stateNumber;
    }
    isNonGreedyExitState() {
      return false;
    }
    addTransition(t2, e2) {
      void 0 === e2 && (e2 = -1), 0 === this.transitions.length ? this.epsilonOnlyTransitions = t2.isEpsilon : this.epsilonOnlyTransitions !== t2.isEpsilon && (this.epsilonOnlyTransitions = false), -1 === e2 ? this.transitions.push(t2) : this.transitions.splice(e2, 1, t2);
    }
  };
  W.INVALID_TYPE = 0, W.BASIC = 1, W.RULE_START = 2, W.BLOCK_START = 3, W.PLUS_BLOCK_START = 4, W.STAR_BLOCK_START = 5, W.TOKEN_START = 6, W.RULE_STOP = 7, W.BLOCK_END = 8, W.STAR_LOOP_BACK = 9, W.STAR_LOOP_ENTRY = 10, W.PLUS_LOOP_BACK = 11, W.LOOP_END = 12, W.serializationNames = ["INVALID", "BASIC", "RULE_START", "BLOCK_START", "PLUS_BLOCK_START", "STAR_BLOCK_START", "TOKEN_START", "RULE_STOP", "BLOCK_END", "STAR_LOOP_BACK", "STAR_LOOP_ENTRY", "PLUS_LOOP_BACK", "LOOP_END"], W.INVALID_STATE_NUMBER = -1;
  var j = class extends W {
    constructor() {
      return super(), this.stateType = W.RULE_STOP, this;
    }
  };
  var $ = class {
    constructor(t2) {
      if (null == t2) throw "target cannot be null.";
      this.target = t2, this.isEpsilon = false, this.label = null;
    }
  };
  $.EPSILON = 1, $.RANGE = 2, $.RULE = 3, $.PREDICATE = 4, $.ATOM = 5, $.ACTION = 6, $.SET = 7, $.NOT_SET = 8, $.WILDCARD = 9, $.PRECEDENCE = 10, $.serializationNames = ["INVALID", "EPSILON", "RANGE", "RULE", "PREDICATE", "ATOM", "ACTION", "SET", "NOT_SET", "WILDCARD", "PRECEDENCE"], $.serializationTypes = { EpsilonTransition: $.EPSILON, RangeTransition: $.RANGE, RuleTransition: $.RULE, PredicateTransition: $.PREDICATE, AtomTransition: $.ATOM, ActionTransition: $.ACTION, SetTransition: $.SET, NotSetTransition: $.NOT_SET, WildcardTransition: $.WILDCARD, PrecedencePredicateTransition: $.PRECEDENCE };
  var X = class extends $ {
    constructor(t2, e2, n2, s2) {
      super(t2), this.ruleIndex = e2, this.precedence = n2, this.followState = s2, this.serializationType = $.RULE, this.isEpsilon = true;
    }
    matches(t2, e2, n2) {
      return false;
    }
  };
  var J = class extends $ {
    constructor(t2, e2) {
      super(t2), this.serializationType = $.SET, null != e2 ? this.label = e2 : (this.label = new G(), this.label.addOne(O.INVALID_TYPE));
    }
    matches(t2, e2, n2) {
      return this.label.contains(t2);
    }
    toString() {
      return this.label.toString();
    }
  };
  var Z = class extends J {
    constructor(t2, e2) {
      super(t2, e2), this.serializationType = $.NOT_SET;
    }
    matches(t2, e2, n2) {
      return t2 >= e2 && t2 <= n2 && !super.matches(t2, e2, n2);
    }
    toString() {
      return "~" + super.toString();
    }
  };
  var Q = class extends $ {
    constructor(t2) {
      super(t2), this.serializationType = $.WILDCARD;
    }
    matches(t2, e2, n2) {
      return t2 >= e2 && t2 <= n2;
    }
    toString() {
      return ".";
    }
  };
  var tt = class extends $ {
    constructor(t2) {
      super(t2);
    }
  };
  var et = class {
  };
  var nt = class extends et {
  };
  var st = class extends nt {
  };
  var it = class extends st {
    get ruleContext() {
      throw new Error("missing interface implementation");
    }
  };
  var rt = class extends st {
  };
  var ot = class extends rt {
  };
  var at = { toStringTree: function(t2, e2, n2) {
    e2 = e2 || null, null !== (n2 = n2 || null) && (e2 = n2.ruleNames);
    let s2 = at.getNodeText(t2, e2);
    s2 = (function(t3) {
      return t3.replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r");
    })(s2);
    const i2 = t2.getChildCount();
    if (0 === i2) return s2;
    let r2 = "(" + s2 + " ";
    i2 > 0 && (s2 = at.toStringTree(t2.getChild(0), e2), r2 = r2.concat(s2));
    for (let n3 = 1; n3 < i2; n3++) s2 = at.toStringTree(t2.getChild(n3), e2), r2 = r2.concat(" " + s2);
    return r2 = r2.concat(")"), r2;
  }, getNodeText: function(t2, e2, n2) {
    if (e2 = e2 || null, null !== (n2 = n2 || null) && (e2 = n2.ruleNames), null !== e2) {
      if (t2 instanceof it) {
        const n3 = t2.ruleContext.getAltNumber();
        return 0 != n3 ? e2[t2.ruleIndex] + ":" + n3 : e2[t2.ruleIndex];
      }
      if (t2 instanceof ot) return t2.toString();
      if (t2 instanceof rt && null !== t2.symbol) return t2.symbol.text;
    }
    const s2 = t2.getPayload();
    return s2 instanceof O ? s2.text : t2.getPayload().toString();
  }, getChildren: function(t2) {
    const e2 = [];
    for (let n2 = 0; n2 < t2.getChildCount(); n2++) e2.push(t2.getChild(n2));
    return e2;
  }, getAncestors: function(t2) {
    let e2 = [];
    for (t2 = t2.getParent(); null !== t2; ) e2 = [t2].concat(e2), t2 = t2.getParent();
    return e2;
  }, findAllTokenNodes: function(t2, e2) {
    return at.findAllNodes(t2, e2, true);
  }, findAllRuleNodes: function(t2, e2) {
    return at.findAllNodes(t2, e2, false);
  }, findAllNodes: function(t2, e2, n2) {
    const s2 = [];
    return at._findAllNodes(t2, e2, n2, s2), s2;
  }, _findAllNodes: function(t2, e2, n2, s2) {
    n2 && t2 instanceof rt ? t2.symbol.type === e2 && s2.push(t2) : !n2 && t2 instanceof it && t2.ruleIndex === e2 && s2.push(t2);
    for (let i2 = 0; i2 < t2.getChildCount(); i2++) at._findAllNodes(t2.getChild(i2), e2, n2, s2);
  }, descendants: function(t2) {
    let e2 = [t2];
    for (let n2 = 0; n2 < t2.getChildCount(); n2++) e2 = e2.concat(at.descendants(t2.getChild(n2)));
    return e2;
  } };
  var lt = at;
  var ht = class extends it {
    constructor(t2, e2) {
      super(), this.parentCtx = t2 || null, this.invokingState = e2 || -1;
    }
    depth() {
      let t2 = 0, e2 = this;
      for (; null !== e2; ) e2 = e2.parentCtx, t2 += 1;
      return t2;
    }
    isEmpty() {
      return -1 === this.invokingState;
    }
    getSourceInterval() {
      return Y.INVALID_INTERVAL;
    }
    get ruleContext() {
      return this;
    }
    getPayload() {
      return this;
    }
    getText() {
      return 0 === this.getChildCount() ? "" : this.children.map((function(t2) {
        return t2.getText();
      })).join("");
    }
    getAltNumber() {
      return 0;
    }
    setAltNumber(t2) {
    }
    getChild(t2) {
      return null;
    }
    getChildCount() {
      return 0;
    }
    accept(t2) {
      return t2.visitChildren(this);
    }
    toStringTree(t2, e2) {
      return lt.toStringTree(this, t2, e2);
    }
    toString(t2, e2) {
      t2 = t2 || null, e2 = e2 || null;
      let n2 = this, s2 = "[";
      for (; null !== n2 && n2 !== e2; ) {
        if (null === t2) n2.isEmpty() || (s2 += n2.invokingState);
        else {
          const e3 = n2.ruleIndex;
          s2 += e3 >= 0 && e3 < t2.length ? t2[e3] : "" + e3;
        }
        null === n2.parentCtx || null === t2 && n2.parentCtx.isEmpty() || (s2 += " "), n2 = n2.parentCtx;
      }
      return s2 += "]", s2;
    }
  };
  var ct = class _ct {
    constructor(t2) {
      this.cachedHashCode = t2;
    }
    isEmpty() {
      return this === _ct.EMPTY;
    }
    hasEmptyPath() {
      return this.getReturnState(this.length - 1) === _ct.EMPTY_RETURN_STATE;
    }
    hashCode() {
      return this.cachedHashCode;
    }
    updateHashCode(t2) {
      t2.update(this.cachedHashCode);
    }
  };
  ct.EMPTY = null, ct.EMPTY_RETURN_STATE = 2147483647, ct.globalNodeCount = 1, ct.id = ct.globalNodeCount, ct.trace_atn_sim = false;
  var ut = class _ut extends ct {
    constructor(t2, e2) {
      const n2 = new b();
      return n2.update(t2, e2), super(n2.finish()), this.parents = t2, this.returnStates = e2, this;
    }
    isEmpty() {
      return this.returnStates[0] === ct.EMPTY_RETURN_STATE;
    }
    getParent(t2) {
      return this.parents[t2];
    }
    getReturnState(t2) {
      return this.returnStates[t2];
    }
    equals(t2) {
      return this === t2 || t2 instanceof _ut && this.hashCode() === t2.hashCode() && w(this.returnStates, t2.returnStates) && w(this.parents, t2.parents);
    }
    toString() {
      if (this.isEmpty()) return "[]";
      {
        let t2 = "[";
        for (let e2 = 0; e2 < this.returnStates.length; e2++) e2 > 0 && (t2 += ", "), this.returnStates[e2] !== ct.EMPTY_RETURN_STATE ? (t2 += this.returnStates[e2], null !== this.parents[e2] ? t2 = t2 + " " + this.parents[e2] : t2 += "null") : t2 += "$";
        return t2 + "]";
      }
    }
    get length() {
      return this.returnStates.length;
    }
  };
  var dt = class _dt extends ct {
    constructor(t2, e2) {
      let n2 = 0;
      const s2 = new b();
      null !== t2 ? s2.update(t2, e2) : s2.update(1), n2 = s2.finish(), super(n2), this.parentCtx = t2, this.returnState = e2;
    }
    getParent(t2) {
      return this.parentCtx;
    }
    getReturnState(t2) {
      return this.returnState;
    }
    equals(t2) {
      return this === t2 || t2 instanceof _dt && this.hashCode() === t2.hashCode() && this.returnState === t2.returnState && (null == this.parentCtx ? null == t2.parentCtx : this.parentCtx.equals(t2.parentCtx));
    }
    toString() {
      const t2 = null === this.parentCtx ? "" : this.parentCtx.toString();
      return 0 === t2.length ? this.returnState === ct.EMPTY_RETURN_STATE ? "$" : "" + this.returnState : this.returnState + " " + t2;
    }
    get length() {
      return 1;
    }
    static create(t2, e2) {
      return e2 === ct.EMPTY_RETURN_STATE && null === t2 ? ct.EMPTY : new _dt(t2, e2);
    }
  };
  var gt = class extends dt {
    constructor() {
      super(null, ct.EMPTY_RETURN_STATE);
    }
    isEmpty() {
      return true;
    }
    getParent(t2) {
      return null;
    }
    getReturnState(t2) {
      return this.returnState;
    }
    equals(t2) {
      return this === t2;
    }
    toString() {
      return "$";
    }
  };
  ct.EMPTY = new gt();
  var pt = class {
    constructor(t2, e2) {
      this.buckets = new Array(16), this.threshold = Math.floor(12), this.itemCount = 0, this.hashFunction = t2 || P, this.equalsFunction = e2 || D;
    }
    set(t2, e2) {
      this._expand();
      const n2 = this._getSlot(t2);
      let s2 = this.buckets[n2];
      if (!s2) return s2 = [[t2, e2]], this.buckets[n2] = s2, this.itemCount++, e2;
      const i2 = s2.find(((e3) => this.equalsFunction(e3[0], t2)), this);
      if (i2) {
        const t3 = i2[1];
        return i2[1] = e2, t3;
      }
      return s2.push([t2, e2]), this.itemCount++, e2;
    }
    containsKey(t2) {
      const e2 = this._getBucket(t2);
      return !!e2 && !!e2.find(((e3) => this.equalsFunction(e3[0], t2)), this);
    }
    get(t2) {
      const e2 = this._getBucket(t2);
      if (!e2) return null;
      const n2 = e2.find(((e3) => this.equalsFunction(e3[0], t2)), this);
      return n2 ? n2[1] : null;
    }
    entries() {
      return this.buckets.filter(((t2) => null != t2)).flat(1);
    }
    getKeys() {
      return this.entries().map(((t2) => t2[0]));
    }
    getValues() {
      return this.entries().map(((t2) => t2[1]));
    }
    toString() {
      return "[" + this.entries().map(((t2) => "{" + t2[0] + ":" + t2[1] + "}")).join(", ") + "]";
    }
    get length() {
      return this.itemCount;
    }
    _getSlot(t2) {
      return this.hashFunction(t2) & this.buckets.length - 1;
    }
    _getBucket(t2) {
      return this.buckets[this._getSlot(t2)];
    }
    _expand() {
      if (this.itemCount <= this.threshold) return;
      const t2 = this.buckets, e2 = 2 * this.buckets.length;
      this.buckets = new Array(e2), this.threshold = Math.floor(0.75 * e2);
      for (const e3 of t2) if (e3) for (const t3 of e3) {
        const e4 = this._getSlot(t3[0]);
        let n2 = this.buckets[e4];
        n2 || (n2 = [], this.buckets[e4] = n2), n2.push(t3);
      }
    }
  };
  function ft(t2, e2) {
    if (null == e2 && (e2 = ht.EMPTY), null === e2.parentCtx || e2 === ht.EMPTY) return ct.EMPTY;
    const n2 = ft(t2, e2.parentCtx), s2 = t2.states[e2.invokingState].transitions[0];
    return dt.create(n2, s2.followState.stateNumber);
  }
  function xt(t2, e2, n2) {
    if (t2.isEmpty()) return t2;
    let s2 = n2.get(t2) || null;
    if (null !== s2) return s2;
    if (s2 = e2.get(t2), null !== s2) return n2.set(t2, s2), s2;
    let i2 = false, r2 = [];
    for (let s3 = 0; s3 < r2.length; s3++) {
      const o3 = xt(t2.getParent(s3), e2, n2);
      if (i2 || o3 !== t2.getParent(s3)) {
        if (!i2) {
          r2 = [];
          for (let e3 = 0; e3 < t2.length; e3++) r2[e3] = t2.getParent(e3);
          i2 = true;
        }
        r2[s3] = o3;
      }
    }
    if (!i2) return e2.add(t2), n2.set(t2, t2), t2;
    let o2 = null;
    return o2 = 0 === r2.length ? ct.EMPTY : 1 === r2.length ? dt.create(r2[0], t2.getReturnState(0)) : new ut(r2, t2.returnStates), e2.add(o2), n2.set(o2, o2), n2.set(t2, o2), o2;
  }
  function Tt(t2, e2, n2, s2) {
    if (t2 === e2) return t2;
    if (t2 instanceof dt && e2 instanceof dt) return (function(t3, e3, n3, s3) {
      if (null !== s3) {
        let n4 = s3.get(t3, e3);
        if (null !== n4) return n4;
        if (n4 = s3.get(e3, t3), null !== n4) return n4;
      }
      const i2 = (function(t4, e4, n4) {
        if (n4) {
          if (t4 === ct.EMPTY) return ct.EMPTY;
          if (e4 === ct.EMPTY) return ct.EMPTY;
        } else {
          if (t4 === ct.EMPTY && e4 === ct.EMPTY) return ct.EMPTY;
          if (t4 === ct.EMPTY) {
            const t5 = [e4.returnState, ct.EMPTY_RETURN_STATE], n5 = [e4.parentCtx, null];
            return new ut(n5, t5);
          }
          if (e4 === ct.EMPTY) {
            const e5 = [t4.returnState, ct.EMPTY_RETURN_STATE], n5 = [t4.parentCtx, null];
            return new ut(n5, e5);
          }
        }
        return null;
      })(t3, e3, n3);
      if (null !== i2) return null !== s3 && s3.set(t3, e3, i2), i2;
      if (t3.returnState === e3.returnState) {
        const i3 = Tt(t3.parentCtx, e3.parentCtx, n3, s3);
        if (i3 === t3.parentCtx) return t3;
        if (i3 === e3.parentCtx) return e3;
        const r2 = dt.create(i3, t3.returnState);
        return null !== s3 && s3.set(t3, e3, r2), r2;
      }
      {
        let n4 = null;
        if ((t3 === e3 || null !== t3.parentCtx && t3.parentCtx === e3.parentCtx) && (n4 = t3.parentCtx), null !== n4) {
          const i4 = [t3.returnState, e3.returnState];
          t3.returnState > e3.returnState && (i4[0] = e3.returnState, i4[1] = t3.returnState);
          const r3 = new ut([n4, n4], i4);
          return null !== s3 && s3.set(t3, e3, r3), r3;
        }
        const i3 = [t3.returnState, e3.returnState];
        let r2 = [t3.parentCtx, e3.parentCtx];
        t3.returnState > e3.returnState && (i3[0] = e3.returnState, i3[1] = t3.returnState, r2 = [e3.parentCtx, t3.parentCtx]);
        const o2 = new ut(r2, i3);
        return null !== s3 && s3.set(t3, e3, o2), o2;
      }
    })(t2, e2, n2, s2);
    if (n2) {
      if (t2 instanceof gt) return t2;
      if (e2 instanceof gt) return e2;
    }
    return t2 instanceof dt && (t2 = new ut([t2.getParent()], [t2.returnState])), e2 instanceof dt && (e2 = new ut([e2.getParent()], [e2.returnState])), (function(t3, e3, n3, s3) {
      if (null !== s3) {
        let n4 = s3.get(t3, e3);
        if (null !== n4) return ct.trace_atn_sim && console.log("mergeArrays a=" + t3 + ",b=" + e3 + " -> previous"), n4;
        if (n4 = s3.get(e3, t3), null !== n4) return ct.trace_atn_sim && console.log("mergeArrays a=" + t3 + ",b=" + e3 + " -> previous"), n4;
      }
      let i2 = 0, r2 = 0, o2 = 0, a2 = new Array(t3.returnStates.length + e3.returnStates.length).fill(0), l2 = new Array(t3.returnStates.length + e3.returnStates.length).fill(null);
      for (; i2 < t3.returnStates.length && r2 < e3.returnStates.length; ) {
        const h3 = t3.parents[i2], c2 = e3.parents[r2];
        if (t3.returnStates[i2] === e3.returnStates[r2]) {
          const e4 = t3.returnStates[i2];
          e4 === ct.EMPTY_RETURN_STATE && null === h3 && null === c2 || null !== h3 && null !== c2 && h3 === c2 ? (l2[o2] = h3, a2[o2] = e4) : (l2[o2] = Tt(h3, c2, n3, s3), a2[o2] = e4), i2 += 1, r2 += 1;
        } else t3.returnStates[i2] < e3.returnStates[r2] ? (l2[o2] = h3, a2[o2] = t3.returnStates[i2], i2 += 1) : (l2[o2] = c2, a2[o2] = e3.returnStates[r2], r2 += 1);
        o2 += 1;
      }
      if (i2 < t3.returnStates.length) for (let e4 = i2; e4 < t3.returnStates.length; e4++) l2[o2] = t3.parents[e4], a2[o2] = t3.returnStates[e4], o2 += 1;
      else for (let t4 = r2; t4 < e3.returnStates.length; t4++) l2[o2] = e3.parents[t4], a2[o2] = e3.returnStates[t4], o2 += 1;
      if (o2 < l2.length) {
        if (1 === o2) {
          const n4 = dt.create(l2[0], a2[0]);
          return null !== s3 && s3.set(t3, e3, n4), n4;
        }
        l2 = l2.slice(0, o2), a2 = a2.slice(0, o2);
      }
      const h2 = new ut(l2, a2);
      return h2.equals(t3) ? (null !== s3 && s3.set(t3, e3, t3), ct.trace_atn_sim && console.log("mergeArrays a=" + t3 + ",b=" + e3 + " -> a"), t3) : h2.equals(e3) ? (null !== s3 && s3.set(t3, e3, e3), ct.trace_atn_sim && console.log("mergeArrays a=" + t3 + ",b=" + e3 + " -> b"), e3) : ((function(t4) {
        const e4 = new pt();
        for (let n4 = 0; n4 < t4.length; n4++) {
          const s4 = t4[n4];
          e4.containsKey(s4) || e4.set(s4, s4);
        }
        for (let n4 = 0; n4 < t4.length; n4++) t4[n4] = e4.get(t4[n4]);
      })(l2), null !== s3 && s3.set(t3, e3, h2), ct.trace_atn_sim && console.log("mergeArrays a=" + t3 + ",b=" + e3 + " -> " + h2), h2);
    })(t2, e2, n2, s2);
  }
  var St = class _St {
    constructor() {
      this.data = new Uint32Array(1);
    }
    set(t2) {
      _St._checkIndex(t2), this._resize(t2), this.data[t2 >>> 5] |= 1 << t2 % 32;
    }
    get(t2) {
      _St._checkIndex(t2);
      const e2 = t2 >>> 5;
      return !(e2 >= this.data.length || !(this.data[e2] & 1 << t2 % 32));
    }
    clear(t2) {
      _St._checkIndex(t2);
      const e2 = t2 >>> 5;
      e2 < this.data.length && (this.data[e2] &= ~(1 << t2));
    }
    or(t2) {
      const e2 = Math.min(this.data.length, t2.data.length);
      for (let n2 = 0; n2 < e2; ++n2) this.data[n2] |= t2.data[n2];
      if (this.data.length < t2.data.length) {
        this._resize((t2.data.length << 5) - 1);
        const n2 = t2.data.length;
        for (let s2 = e2; s2 < n2; ++s2) this.data[s2] = t2.data[s2];
      }
    }
    values() {
      const t2 = new Array(this.length);
      let e2 = 0;
      const n2 = this.data.length;
      for (let s2 = 0; s2 < n2; ++s2) {
        let n3 = this.data[s2];
        for (; 0 !== n3; ) {
          const i2 = n3 & -n3;
          t2[e2++] = (s2 << 5) + _St._bitCount(i2 - 1), n3 ^= i2;
        }
      }
      return t2;
    }
    minValue() {
      for (let t2 = 0; t2 < this.data.length; ++t2) {
        let e2 = this.data[t2];
        if (0 !== e2) {
          let n2 = 0;
          for (; !(1 & e2); ) n2++, e2 >>= 1;
          return n2 + 32 * t2;
        }
      }
      return 0;
    }
    hashCode() {
      return b.hashStuff(this.values());
    }
    equals(t2) {
      return t2 instanceof _St && w(this.data, t2.data);
    }
    toString() {
      return "{" + this.values().join(", ") + "}";
    }
    get length() {
      return this.data.map(((t2) => _St._bitCount(t2))).reduce(((t2, e2) => t2 + e2), 0);
    }
    _resize(t2) {
      const e2 = t2 + 32 >>> 5;
      if (e2 <= this.data.length) return;
      const n2 = new Uint32Array(e2);
      n2.set(this.data), n2.fill(0, this.data.length), this.data = n2;
    }
    static _checkIndex(t2) {
      if (t2 < 0) throw new RangeError("index cannot be negative");
    }
    static _bitCount(t2) {
      return t2 = (t2 = (858993459 & (t2 -= t2 >> 1 & 1431655765)) + (t2 >> 2 & 858993459)) + (t2 >> 4) & 252645135, t2 += t2 >> 8, 0 + (t2 += t2 >> 16) & 63;
    }
  };
  var mt = class _mt {
    constructor(t2) {
      this.atn = t2;
    }
    getDecisionLookahead(t2) {
      if (null === t2) return null;
      const e2 = t2.transitions.length, n2 = [];
      for (let s2 = 0; s2 < e2; s2++) {
        n2[s2] = new G();
        const e3 = new U(), i2 = false;
        this._LOOK(t2.transition(s2).target, null, ct.EMPTY, n2[s2], e3, new St(), i2, false), (0 === n2[s2].length || n2[s2].contains(_mt.HIT_PRED)) && (n2[s2] = null);
      }
      return n2;
    }
    LOOK(t2, e2, n2) {
      const s2 = new G(), i2 = null !== (n2 = n2 || null) ? ft(t2.atn, n2) : null;
      return this._LOOK(t2, e2, i2, s2, new U(), new St(), true, true), s2;
    }
    _LOOK(t2, e2, n2, s2, i2, r2, o2, a2) {
      const l2 = new K({ state: t2, alt: 0, context: n2 }, null);
      if (!i2.has(l2)) {
        if (i2.add(l2), t2 === e2) {
          if (null === n2) return void s2.addOne(O.EPSILON);
          if (n2.isEmpty() && a2) return void s2.addOne(O.EOF);
        }
        if (t2 instanceof j) {
          if (null === n2) return void s2.addOne(O.EPSILON);
          if (n2.isEmpty() && a2) return void s2.addOne(O.EOF);
          if (n2 !== ct.EMPTY) {
            const l3 = r2.get(t2.ruleIndex);
            try {
              r2.clear(t2.ruleIndex);
              for (let t3 = 0; t3 < n2.length; t3++) {
                const l4 = this.atn.states[n2.getReturnState(t3)];
                this._LOOK(l4, e2, n2.getParent(t3), s2, i2, r2, o2, a2);
              }
            } finally {
              l3 && r2.set(t2.ruleIndex);
            }
            return;
          }
        }
        for (let l3 = 0; l3 < t2.transitions.length; l3++) {
          const h2 = t2.transitions[l3];
          if (h2.constructor === X) {
            if (r2.get(h2.target.ruleIndex)) continue;
            const t3 = dt.create(n2, h2.followState.stateNumber);
            try {
              r2.set(h2.target.ruleIndex), this._LOOK(h2.target, e2, t3, s2, i2, r2, o2, a2);
            } finally {
              r2.clear(h2.target.ruleIndex);
            }
          } else if (h2 instanceof tt) o2 ? this._LOOK(h2.target, e2, n2, s2, i2, r2, o2, a2) : s2.addOne(_mt.HIT_PRED);
          else if (h2.isEpsilon) this._LOOK(h2.target, e2, n2, s2, i2, r2, o2, a2);
          else if (h2.constructor === Q) s2.addRange(O.MIN_USER_TOKEN_TYPE, this.atn.maxTokenType);
          else {
            let t3 = h2.label;
            null !== t3 && (h2 instanceof Z && (t3 = t3.complement(O.MIN_USER_TOKEN_TYPE, this.atn.maxTokenType)), s2.addSet(t3));
          }
        }
      }
    }
  };
  mt.HIT_PRED = O.INVALID_TYPE;
  var Et = class {
    constructor(t2, e2) {
      this.grammarType = t2, this.maxTokenType = e2, this.states = [], this.decisionToState = [], this.ruleToStartState = [], this.ruleToStopState = null, this.modeNameToStartState = {}, this.ruleToTokenType = null, this.lexerActions = null, this.modeToStartState = [];
    }
    nextTokensInContext(t2, e2) {
      return new mt(this).LOOK(t2, null, e2);
    }
    nextTokensNoContext(t2) {
      return null !== t2.nextTokenWithinRule || (t2.nextTokenWithinRule = this.nextTokensInContext(t2, null), t2.nextTokenWithinRule.readOnly = true), t2.nextTokenWithinRule;
    }
    nextTokens(t2, e2) {
      return void 0 === e2 ? this.nextTokensNoContext(t2) : this.nextTokensInContext(t2, e2);
    }
    addState(t2) {
      null !== t2 && (t2.atn = this, t2.stateNumber = this.states.length), this.states.push(t2);
    }
    removeState(t2) {
      this.states[t2.stateNumber] = null;
    }
    defineDecisionState(t2) {
      return this.decisionToState.push(t2), t2.decision = this.decisionToState.length - 1, t2.decision;
    }
    getDecisionState(t2) {
      return 0 === this.decisionToState.length ? null : this.decisionToState[t2];
    }
    getExpectedTokens(t2, e2) {
      if (t2 < 0 || t2 >= this.states.length) throw "Invalid state number.";
      const n2 = this.states[t2];
      let s2 = this.nextTokens(n2);
      if (!s2.contains(O.EPSILON)) return s2;
      const i2 = new G();
      for (i2.addSet(s2), i2.removeOne(O.EPSILON); null !== e2 && e2.invokingState >= 0 && s2.contains(O.EPSILON); ) {
        const t3 = this.states[e2.invokingState].transitions[0];
        s2 = this.nextTokens(t3.followState), i2.addSet(s2), i2.removeOne(O.EPSILON), e2 = e2.parentCtx;
      }
      return s2.contains(O.EPSILON) && i2.addOne(O.EOF), i2;
    }
  };
  Et.INVALID_ALT_NUMBER = 0;
  var _t = class extends W {
    constructor() {
      super(), this.stateType = W.BASIC;
    }
  };
  var At = class extends W {
    constructor() {
      return super(), this.decision = -1, this.nonGreedy = false, this;
    }
  };
  var Ct = class extends At {
    constructor() {
      return super(), this.endState = null, this;
    }
  };
  var Nt = class extends W {
    constructor() {
      return super(), this.stateType = W.BLOCK_END, this.startState = null, this;
    }
  };
  var kt = class extends W {
    constructor() {
      return super(), this.stateType = W.LOOP_END, this.loopBackState = null, this;
    }
  };
  var It = class extends W {
    constructor() {
      return super(), this.stateType = W.RULE_START, this.stopState = null, this.isPrecedenceRule = false, this;
    }
  };
  var yt = class extends At {
    constructor() {
      return super(), this.stateType = W.TOKEN_START, this;
    }
  };
  var Lt = class extends At {
    constructor() {
      return super(), this.stateType = W.PLUS_LOOP_BACK, this;
    }
  };
  var Ot = class extends W {
    constructor() {
      return super(), this.stateType = W.STAR_LOOP_BACK, this;
    }
  };
  var wt = class extends At {
    constructor() {
      return super(), this.stateType = W.STAR_LOOP_ENTRY, this.loopBackState = null, this.isPrecedenceDecision = null, this;
    }
  };
  var Rt = class extends Ct {
    constructor() {
      return super(), this.stateType = W.PLUS_BLOCK_START, this.loopBackState = null, this;
    }
  };
  var vt = class extends Ct {
    constructor() {
      return super(), this.stateType = W.STAR_BLOCK_START, this;
    }
  };
  var bt = class extends Ct {
    constructor() {
      return super(), this.stateType = W.BLOCK_START, this;
    }
  };
  var Pt = class extends $ {
    constructor(t2, e2) {
      super(t2), this.label_ = e2, this.label = this.makeLabel(), this.serializationType = $.ATOM;
    }
    makeLabel() {
      const t2 = new G();
      return t2.addOne(this.label_), t2;
    }
    matches(t2, e2, n2) {
      return this.label_ === t2;
    }
    toString() {
      return this.label_;
    }
  };
  var Dt = class extends $ {
    constructor(t2, e2, n2) {
      super(t2), this.serializationType = $.RANGE, this.start = e2, this.stop = n2, this.label = this.makeLabel();
    }
    makeLabel() {
      const t2 = new G();
      return t2.addRange(this.start, this.stop), t2;
    }
    matches(t2, e2, n2) {
      return t2 >= this.start && t2 <= this.stop;
    }
    toString() {
      return "'" + String.fromCharCode(this.start) + "'..'" + String.fromCharCode(this.stop) + "'";
    }
  };
  var Ft = class extends $ {
    constructor(t2, e2, n2, s2) {
      super(t2), this.serializationType = $.ACTION, this.ruleIndex = e2, this.actionIndex = void 0 === n2 ? -1 : n2, this.isCtxDependent = void 0 !== s2 && s2, this.isEpsilon = true;
    }
    matches(t2, e2, n2) {
      return false;
    }
    toString() {
      return "action_" + this.ruleIndex + ":" + this.actionIndex;
    }
  };
  var Mt = class extends $ {
    constructor(t2, e2) {
      super(t2), this.serializationType = $.EPSILON, this.isEpsilon = true, this.outermostPrecedenceReturn = e2;
    }
    matches(t2, e2, n2) {
      return false;
    }
    toString() {
      return "epsilon";
    }
  };
  var Ut = class _Ut extends B {
    constructor(t2, e2, n2) {
      super(), this.ruleIndex = void 0 === t2 ? -1 : t2, this.predIndex = void 0 === e2 ? -1 : e2, this.isCtxDependent = void 0 !== n2 && n2;
    }
    evaluate(t2, e2) {
      const n2 = this.isCtxDependent ? e2 : null;
      return t2.sempred(n2, this.ruleIndex, this.predIndex);
    }
    updateHashCode(t2) {
      t2.update(this.ruleIndex, this.predIndex, this.isCtxDependent);
    }
    equals(t2) {
      return this === t2 || t2 instanceof _Ut && this.ruleIndex === t2.ruleIndex && this.predIndex === t2.predIndex && this.isCtxDependent === t2.isCtxDependent;
    }
    toString() {
      return "{" + this.ruleIndex + ":" + this.predIndex + "}?";
    }
  };
  B.NONE = new Ut();
  var Bt = class extends tt {
    constructor(t2, e2, n2, s2) {
      super(t2), this.serializationType = $.PREDICATE, this.ruleIndex = e2, this.predIndex = n2, this.isCtxDependent = s2, this.isEpsilon = true;
    }
    matches(t2, e2, n2) {
      return false;
    }
    getPredicate() {
      return new Ut(this.ruleIndex, this.predIndex, this.isCtxDependent);
    }
    toString() {
      return "pred_" + this.ruleIndex + ":" + this.predIndex;
    }
  };
  var zt = class _zt extends B {
    constructor(t2) {
      super(), this.precedence = void 0 === t2 ? 0 : t2;
    }
    evaluate(t2, e2) {
      return t2.precpred(e2, this.precedence);
    }
    evalPrecedence(t2, e2) {
      return t2.precpred(e2, this.precedence) ? B.NONE : null;
    }
    compareTo(t2) {
      return this.precedence - t2.precedence;
    }
    updateHashCode(t2) {
      t2.update(this.precedence);
    }
    equals(t2) {
      return this === t2 || t2 instanceof _zt && this.precedence === t2.precedence;
    }
    toString() {
      return "{" + this.precedence + ">=prec}?";
    }
  };
  B.PrecedencePredicate = zt;
  var Vt = class extends tt {
    constructor(t2, e2) {
      super(t2), this.serializationType = $.PRECEDENCE, this.precedence = e2, this.isEpsilon = true;
    }
    matches(t2, e2, n2) {
      return false;
    }
    getPredicate() {
      return new zt(this.precedence);
    }
    toString() {
      return this.precedence + " >= _p";
    }
  };
  var qt = class {
    constructor(t2) {
      void 0 === t2 && (t2 = null), this.readOnly = false, this.verifyATN = null === t2 || t2.verifyATN, this.generateRuleBypassTransitions = null !== t2 && t2.generateRuleBypassTransitions;
    }
  };
  qt.defaultOptions = new qt(), qt.defaultOptions.readOnly = true;
  var Ht = class {
    constructor(t2) {
      this.actionType = t2, this.isPositionDependent = false;
    }
    hashCode() {
      const t2 = new b();
      return this.updateHashCode(t2), t2.finish();
    }
    updateHashCode(t2) {
      t2.update(this.actionType);
    }
    equals(t2) {
      return this === t2;
    }
  };
  var Kt = class extends Ht {
    constructor() {
      super(6);
    }
    execute(t2) {
      t2.skip();
    }
    toString() {
      return "skip";
    }
  };
  Kt.INSTANCE = new Kt();
  var Yt = class _Yt extends Ht {
    constructor(t2) {
      super(0), this.channel = t2;
    }
    execute(t2) {
      t2._channel = this.channel;
    }
    updateHashCode(t2) {
      t2.update(this.actionType, this.channel);
    }
    equals(t2) {
      return this === t2 || t2 instanceof _Yt && this.channel === t2.channel;
    }
    toString() {
      return "channel(" + this.channel + ")";
    }
  };
  var Gt = class _Gt extends Ht {
    constructor(t2, e2) {
      super(1), this.ruleIndex = t2, this.actionIndex = e2, this.isPositionDependent = true;
    }
    execute(t2) {
      t2.action(null, this.ruleIndex, this.actionIndex);
    }
    updateHashCode(t2) {
      t2.update(this.actionType, this.ruleIndex, this.actionIndex);
    }
    equals(t2) {
      return this === t2 || t2 instanceof _Gt && this.ruleIndex === t2.ruleIndex && this.actionIndex === t2.actionIndex;
    }
  };
  var Wt = class extends Ht {
    constructor() {
      super(3);
    }
    execute(t2) {
      t2.more();
    }
    toString() {
      return "more";
    }
  };
  Wt.INSTANCE = new Wt();
  var jt = class _jt extends Ht {
    constructor(t2) {
      super(7), this.type = t2;
    }
    execute(t2) {
      t2.type = this.type;
    }
    updateHashCode(t2) {
      t2.update(this.actionType, this.type);
    }
    equals(t2) {
      return this === t2 || t2 instanceof _jt && this.type === t2.type;
    }
    toString() {
      return "type(" + this.type + ")";
    }
  };
  var $t = class _$t extends Ht {
    constructor(t2) {
      super(5), this.mode = t2;
    }
    execute(t2) {
      t2.pushMode(this.mode);
    }
    updateHashCode(t2) {
      t2.update(this.actionType, this.mode);
    }
    equals(t2) {
      return this === t2 || t2 instanceof _$t && this.mode === t2.mode;
    }
    toString() {
      return "pushMode(" + this.mode + ")";
    }
  };
  var Xt = class extends Ht {
    constructor() {
      super(4);
    }
    execute(t2) {
      t2.popMode();
    }
    toString() {
      return "popMode";
    }
  };
  Xt.INSTANCE = new Xt();
  var Jt = class _Jt extends Ht {
    constructor(t2) {
      super(2), this.mode = t2;
    }
    execute(t2) {
      t2.setMode(this.mode);
    }
    updateHashCode(t2) {
      t2.update(this.actionType, this.mode);
    }
    equals(t2) {
      return this === t2 || t2 instanceof _Jt && this.mode === t2.mode;
    }
    toString() {
      return "mode(" + this.mode + ")";
    }
  };
  function Zt(t2, e2) {
    const n2 = [];
    return n2[t2 - 1] = e2, n2.map((function(t3) {
      return e2;
    }));
  }
  var Qt = class {
    constructor(t2) {
      null == t2 && (t2 = qt.defaultOptions), this.deserializationOptions = t2, this.stateFactories = null, this.actionFactories = null;
    }
    deserialize(t2) {
      const e2 = this.reset(t2);
      this.checkVersion(e2), e2 && this.skipUUID();
      const n2 = this.readATN();
      this.readStates(n2, e2), this.readRules(n2, e2), this.readModes(n2);
      const s2 = [];
      return this.readSets(n2, s2, this.readInt.bind(this)), e2 && this.readSets(n2, s2, this.readInt32.bind(this)), this.readEdges(n2, s2), this.readDecisions(n2), this.readLexerActions(n2, e2), this.markPrecedenceDecisions(n2), this.verifyATN(n2), this.deserializationOptions.generateRuleBypassTransitions && 1 === n2.grammarType && (this.generateRuleBypassTransitions(n2), this.verifyATN(n2)), n2;
    }
    reset(t2) {
      if (3 === (t2.charCodeAt ? t2.charCodeAt(0) : t2[0])) {
        const e2 = function(t3) {
          const e3 = t3.charCodeAt(0);
          return e3 > 1 ? e3 - 2 : e3 + 65534;
        }, n2 = t2.split("").map(e2);
        return n2[0] = t2.charCodeAt(0), this.data = n2, this.pos = 0, true;
      }
      return this.data = t2, this.pos = 0, false;
    }
    skipUUID() {
      let t2 = 0;
      for (; t2++ < 8; ) this.readInt();
    }
    checkVersion(t2) {
      const e2 = this.readInt();
      if (!t2 && 4 !== e2) throw "Could not deserialize ATN with version " + e2 + " (expected 4).";
    }
    readATN() {
      const t2 = this.readInt(), e2 = this.readInt();
      return new Et(t2, e2);
    }
    readStates(t2, e2) {
      let n2, s2, i2;
      const r2 = [], o2 = [], a2 = this.readInt();
      for (let n3 = 0; n3 < a2; n3++) {
        const n4 = this.readInt();
        if (n4 === W.INVALID_TYPE) {
          t2.addState(null);
          continue;
        }
        let s3 = this.readInt();
        e2 && 65535 === s3 && (s3 = -1);
        const i3 = this.stateFactory(n4, s3);
        if (n4 === W.LOOP_END) {
          const t3 = this.readInt();
          r2.push([i3, t3]);
        } else if (i3 instanceof Ct) {
          const t3 = this.readInt();
          o2.push([i3, t3]);
        }
        t2.addState(i3);
      }
      for (n2 = 0; n2 < r2.length; n2++) s2 = r2[n2], s2[0].loopBackState = t2.states[s2[1]];
      for (n2 = 0; n2 < o2.length; n2++) s2 = o2[n2], s2[0].endState = t2.states[s2[1]];
      let l2 = this.readInt();
      for (n2 = 0; n2 < l2; n2++) i2 = this.readInt(), t2.states[i2].nonGreedy = true;
      let h2 = this.readInt();
      for (n2 = 0; n2 < h2; n2++) i2 = this.readInt(), t2.states[i2].isPrecedenceRule = true;
    }
    readRules(t2, e2) {
      let n2;
      const s2 = this.readInt();
      for (0 === t2.grammarType && (t2.ruleToTokenType = Zt(s2, 0)), t2.ruleToStartState = Zt(s2, 0), n2 = 0; n2 < s2; n2++) {
        const s3 = this.readInt();
        if (t2.ruleToStartState[n2] = t2.states[s3], 0 === t2.grammarType) {
          let s4 = this.readInt();
          e2 && 65535 === s4 && (s4 = O.EOF), t2.ruleToTokenType[n2] = s4;
        }
      }
      for (t2.ruleToStopState = Zt(s2, 0), n2 = 0; n2 < t2.states.length; n2++) {
        const e3 = t2.states[n2];
        e3 instanceof j && (t2.ruleToStopState[e3.ruleIndex] = e3, t2.ruleToStartState[e3.ruleIndex].stopState = e3);
      }
    }
    readModes(t2) {
      const e2 = this.readInt();
      for (let n2 = 0; n2 < e2; n2++) {
        let e3 = this.readInt();
        t2.modeToStartState.push(t2.states[e3]);
      }
    }
    readSets(t2, e2, n2) {
      const s2 = this.readInt();
      for (let t3 = 0; t3 < s2; t3++) {
        const t4 = new G();
        e2.push(t4);
        const s3 = this.readInt();
        0 !== this.readInt() && t4.addOne(-1);
        for (let e3 = 0; e3 < s3; e3++) {
          const e4 = n2(), s4 = n2();
          t4.addRange(e4, s4);
        }
      }
    }
    readEdges(t2, e2) {
      let n2, s2, i2, r2, o2;
      const a2 = this.readInt();
      for (n2 = 0; n2 < a2; n2++) {
        const n3 = this.readInt(), s3 = this.readInt(), i3 = this.readInt(), o3 = this.readInt(), a3 = this.readInt(), l2 = this.readInt();
        r2 = this.edgeFactory(t2, i3, n3, s3, o3, a3, l2, e2), t2.states[n3].addTransition(r2);
      }
      for (n2 = 0; n2 < t2.states.length; n2++) for (i2 = t2.states[n2], s2 = 0; s2 < i2.transitions.length; s2++) {
        const e3 = i2.transitions[s2];
        if (!(e3 instanceof X)) continue;
        let n3 = -1;
        t2.ruleToStartState[e3.target.ruleIndex].isPrecedenceRule && 0 === e3.precedence && (n3 = e3.target.ruleIndex), r2 = new Mt(e3.followState, n3), t2.ruleToStopState[e3.target.ruleIndex].addTransition(r2);
      }
      for (n2 = 0; n2 < t2.states.length; n2++) {
        if (i2 = t2.states[n2], i2 instanceof Ct) {
          if (null === i2.endState) throw "IllegalState";
          if (null !== i2.endState.startState) throw "IllegalState";
          i2.endState.startState = i2;
        }
        if (i2 instanceof Lt) for (s2 = 0; s2 < i2.transitions.length; s2++) o2 = i2.transitions[s2].target, o2 instanceof Rt && (o2.loopBackState = i2);
        else if (i2 instanceof Ot) for (s2 = 0; s2 < i2.transitions.length; s2++) o2 = i2.transitions[s2].target, o2 instanceof wt && (o2.loopBackState = i2);
      }
    }
    readDecisions(t2) {
      const e2 = this.readInt();
      for (let n2 = 0; n2 < e2; n2++) {
        const e3 = this.readInt(), s2 = t2.states[e3];
        t2.decisionToState.push(s2), s2.decision = n2;
      }
    }
    readLexerActions(t2, e2) {
      if (0 === t2.grammarType) {
        const n2 = this.readInt();
        t2.lexerActions = Zt(n2, null);
        for (let s2 = 0; s2 < n2; s2++) {
          const n3 = this.readInt();
          let i2 = this.readInt();
          e2 && 65535 === i2 && (i2 = -1);
          let r2 = this.readInt();
          e2 && 65535 === r2 && (r2 = -1), t2.lexerActions[s2] = this.lexerActionFactory(n3, i2, r2);
        }
      }
    }
    generateRuleBypassTransitions(t2) {
      let e2;
      const n2 = t2.ruleToStartState.length;
      for (e2 = 0; e2 < n2; e2++) t2.ruleToTokenType[e2] = t2.maxTokenType + e2 + 1;
      for (e2 = 0; e2 < n2; e2++) this.generateRuleBypassTransition(t2, e2);
    }
    generateRuleBypassTransition(t2, e2) {
      let n2, s2;
      const i2 = new bt();
      i2.ruleIndex = e2, t2.addState(i2);
      const r2 = new Nt();
      r2.ruleIndex = e2, t2.addState(r2), i2.endState = r2, t2.defineDecisionState(i2), r2.startState = i2;
      let o2 = null, a2 = null;
      if (t2.ruleToStartState[e2].isPrecedenceRule) {
        for (a2 = null, n2 = 0; n2 < t2.states.length; n2++) if (s2 = t2.states[n2], this.stateIsEndStateFor(s2, e2)) {
          a2 = s2, o2 = s2.loopBackState.transitions[0];
          break;
        }
        if (null === o2) throw "Couldn't identify final state of the precedence rule prefix section.";
      } else a2 = t2.ruleToStopState[e2];
      for (n2 = 0; n2 < t2.states.length; n2++) {
        s2 = t2.states[n2];
        for (let t3 = 0; t3 < s2.transitions.length; t3++) {
          const e3 = s2.transitions[t3];
          e3 !== o2 && e3.target === a2 && (e3.target = r2);
        }
      }
      const l2 = t2.ruleToStartState[e2], h2 = l2.transitions.length;
      for (; h2 > 0; ) i2.addTransition(l2.transitions[h2 - 1]), l2.transitions = l2.transitions.slice(-1);
      t2.ruleToStartState[e2].addTransition(new Mt(i2)), r2.addTransition(new Mt(a2));
      const c2 = new _t();
      t2.addState(c2), c2.addTransition(new Pt(r2, t2.ruleToTokenType[e2])), i2.addTransition(new Mt(c2));
    }
    stateIsEndStateFor(t2, e2) {
      if (t2.ruleIndex !== e2) return null;
      if (!(t2 instanceof wt)) return null;
      const n2 = t2.transitions[t2.transitions.length - 1].target;
      return n2 instanceof kt && n2.epsilonOnlyTransitions && n2.transitions[0].target instanceof j ? t2 : null;
    }
    markPrecedenceDecisions(t2) {
      for (let e2 = 0; e2 < t2.states.length; e2++) {
        const n2 = t2.states[e2];
        if (n2 instanceof wt && t2.ruleToStartState[n2.ruleIndex].isPrecedenceRule) {
          const t3 = n2.transitions[n2.transitions.length - 1].target;
          t3 instanceof kt && t3.epsilonOnlyTransitions && t3.transitions[0].target instanceof j && (n2.isPrecedenceDecision = true);
        }
      }
    }
    verifyATN(t2) {
      if (this.deserializationOptions.verifyATN) for (let e2 = 0; e2 < t2.states.length; e2++) {
        const n2 = t2.states[e2];
        if (null !== n2) if (this.checkCondition(n2.epsilonOnlyTransitions || n2.transitions.length <= 1), n2 instanceof Rt) this.checkCondition(null !== n2.loopBackState);
        else if (n2 instanceof wt) if (this.checkCondition(null !== n2.loopBackState), this.checkCondition(2 === n2.transitions.length), n2.transitions[0].target instanceof vt) this.checkCondition(n2.transitions[1].target instanceof kt), this.checkCondition(!n2.nonGreedy);
        else {
          if (!(n2.transitions[0].target instanceof kt)) throw "IllegalState";
          this.checkCondition(n2.transitions[1].target instanceof vt), this.checkCondition(n2.nonGreedy);
        }
        else n2 instanceof Ot ? (this.checkCondition(1 === n2.transitions.length), this.checkCondition(n2.transitions[0].target instanceof wt)) : n2 instanceof kt ? this.checkCondition(null !== n2.loopBackState) : n2 instanceof It ? this.checkCondition(null !== n2.stopState) : n2 instanceof Ct ? this.checkCondition(null !== n2.endState) : n2 instanceof Nt ? this.checkCondition(null !== n2.startState) : n2 instanceof At ? this.checkCondition(n2.transitions.length <= 1 || n2.decision >= 0) : this.checkCondition(n2.transitions.length <= 1 || n2 instanceof j);
      }
    }
    checkCondition(t2, e2) {
      if (!t2) throw null == e2 && (e2 = "IllegalState"), e2;
    }
    readInt() {
      return this.data[this.pos++];
    }
    readInt32() {
      return this.readInt() | this.readInt() << 16;
    }
    edgeFactory(t2, e2, n2, s2, i2, r2, o2, a2) {
      const l2 = t2.states[s2];
      switch (e2) {
        case $.EPSILON:
          return new Mt(l2);
        case $.RANGE:
          return new Dt(l2, 0 !== o2 ? O.EOF : i2, r2);
        case $.RULE:
          return new X(t2.states[i2], r2, o2, l2);
        case $.PREDICATE:
          return new Bt(l2, i2, r2, 0 !== o2);
        case $.PRECEDENCE:
          return new Vt(l2, i2);
        case $.ATOM:
          return new Pt(l2, 0 !== o2 ? O.EOF : i2);
        case $.ACTION:
          return new Ft(l2, i2, r2, 0 !== o2);
        case $.SET:
          return new J(l2, a2[i2]);
        case $.NOT_SET:
          return new Z(l2, a2[i2]);
        case $.WILDCARD:
          return new Q(l2);
        default:
          throw "The specified transition type: " + e2 + " is not valid.";
      }
    }
    stateFactory(t2, e2) {
      if (null === this.stateFactories) {
        const t3 = [];
        t3[W.INVALID_TYPE] = null, t3[W.BASIC] = () => new _t(), t3[W.RULE_START] = () => new It(), t3[W.BLOCK_START] = () => new bt(), t3[W.PLUS_BLOCK_START] = () => new Rt(), t3[W.STAR_BLOCK_START] = () => new vt(), t3[W.TOKEN_START] = () => new yt(), t3[W.RULE_STOP] = () => new j(), t3[W.BLOCK_END] = () => new Nt(), t3[W.STAR_LOOP_BACK] = () => new Ot(), t3[W.STAR_LOOP_ENTRY] = () => new wt(), t3[W.PLUS_LOOP_BACK] = () => new Lt(), t3[W.LOOP_END] = () => new kt(), this.stateFactories = t3;
      }
      if (t2 > this.stateFactories.length || null === this.stateFactories[t2]) throw "The specified state type " + t2 + " is not valid.";
      {
        const n2 = this.stateFactories[t2]();
        if (null !== n2) return n2.ruleIndex = e2, n2;
      }
    }
    lexerActionFactory(t2, e2, n2) {
      if (null === this.actionFactories) {
        const t3 = [];
        t3[0] = (t4, e3) => new Yt(t4), t3[1] = (t4, e3) => new Gt(t4, e3), t3[2] = (t4, e3) => new Jt(t4), t3[3] = (t4, e3) => Wt.INSTANCE, t3[4] = (t4, e3) => Xt.INSTANCE, t3[5] = (t4, e3) => new $t(t4), t3[6] = (t4, e3) => Kt.INSTANCE, t3[7] = (t4, e3) => new jt(t4), this.actionFactories = t3;
      }
      if (t2 > this.actionFactories.length || null === this.actionFactories[t2]) throw "The specified lexer action type " + t2 + " is not valid.";
      return this.actionFactories[t2](e2, n2);
    }
  };
  var te = class {
    syntaxError(t2, e2, n2, s2, i2, r2) {
    }
    reportAmbiguity(t2, e2, n2, s2, i2, r2, o2) {
    }
    reportAttemptingFullContext(t2, e2, n2, s2, i2, r2) {
    }
    reportContextSensitivity(t2, e2, n2, s2, i2, r2) {
    }
  };
  var ee = class extends te {
    constructor() {
      super();
    }
    syntaxError(t2, e2, n2, s2, i2, r2) {
      console.error("line " + n2 + ":" + s2 + " " + i2);
    }
  };
  ee.INSTANCE = new ee();
  var ne = class extends te {
    constructor(t2) {
      if (super(), null === t2) throw "delegates";
      return this.delegates = t2, this;
    }
    syntaxError(t2, e2, n2, s2, i2, r2) {
      this.delegates.map(((o2) => o2.syntaxError(t2, e2, n2, s2, i2, r2)));
    }
    reportAmbiguity(t2, e2, n2, s2, i2, r2, o2) {
      this.delegates.map(((a2) => a2.reportAmbiguity(t2, e2, n2, s2, i2, r2, o2)));
    }
    reportAttemptingFullContext(t2, e2, n2, s2, i2, r2) {
      this.delegates.map(((o2) => o2.reportAttemptingFullContext(t2, e2, n2, s2, i2, r2)));
    }
    reportContextSensitivity(t2, e2, n2, s2, i2, r2) {
      this.delegates.map(((o2) => o2.reportContextSensitivity(t2, e2, n2, s2, i2, r2)));
    }
  };
  var se = class {
    constructor() {
      this._listeners = [ee.INSTANCE], this._interp = null, this._stateNumber = -1;
    }
    checkVersion(t2) {
      const e2 = "4.13.2";
      e2 !== t2 && console.log("ANTLR runtime and generated code versions disagree: " + e2 + "!=" + t2);
    }
    addErrorListener(t2) {
      this._listeners.push(t2);
    }
    removeErrorListeners() {
      this._listeners = [];
    }
    getLiteralNames() {
      return Object.getPrototypeOf(this).constructor.literalNames || [];
    }
    getSymbolicNames() {
      return Object.getPrototypeOf(this).constructor.symbolicNames || [];
    }
    getTokenNames() {
      if (!this.tokenNames) {
        const t2 = this.getLiteralNames(), e2 = this.getSymbolicNames(), n2 = t2.length > e2.length ? t2.length : e2.length;
        this.tokenNames = [];
        for (let s2 = 0; s2 < n2; s2++) this.tokenNames[s2] = t2[s2] || e2[s2] || "<INVALID";
      }
      return this.tokenNames;
    }
    getTokenTypeMap() {
      const t2 = this.getTokenNames();
      if (null === t2) throw "The current recognizer does not provide a list of token names.";
      let e2 = this.tokenTypeMapCache[t2];
      return void 0 === e2 && (e2 = t2.reduce((function(t3, e3, n2) {
        t3[e3] = n2;
      })), e2.EOF = O.EOF, this.tokenTypeMapCache[t2] = e2), e2;
    }
    getRuleIndexMap() {
      const t2 = this.ruleNames;
      if (null === t2) throw "The current recognizer does not provide a list of rule names.";
      let e2 = this.ruleIndexMapCache[t2];
      return void 0 === e2 && (e2 = t2.reduce((function(t3, e3, n2) {
        t3[e3] = n2;
      })), this.ruleIndexMapCache[t2] = e2), e2;
    }
    getTokenType(t2) {
      const e2 = this.getTokenTypeMap()[t2];
      return void 0 !== e2 ? e2 : O.INVALID_TYPE;
    }
    getErrorHeader(t2) {
      return "line " + t2.getOffendingToken().line + ":" + t2.getOffendingToken().column;
    }
    getTokenErrorDisplay(t2) {
      if (null === t2) return "<no token>";
      let e2 = t2.text;
      return null === e2 && (e2 = t2.type === O.EOF ? "<EOF>" : "<" + t2.type + ">"), e2 = e2.replace("\n", "\\n").replace("\r", "\\r").replace("	", "\\t"), "'" + e2 + "'";
    }
    getErrorListenerDispatch() {
      return console.warn("Calling deprecated method in Recognizer class: getErrorListenerDispatch()"), this.getErrorListener();
    }
    getErrorListener() {
      return new ne(this._listeners);
    }
    sempred(t2, e2, n2) {
      return true;
    }
    precpred(t2, e2) {
      return true;
    }
    get atn() {
      return this._interp.atn;
    }
    get state() {
      return this._stateNumber;
    }
    set state(t2) {
      this._stateNumber = t2;
    }
  };
  se.tokenTypeMapCache = {}, se.ruleIndexMapCache = {};
  var ie = class _ie extends O {
    constructor(t2, e2, n2, s2, i2) {
      super(), this.source = void 0 !== t2 ? t2 : _ie.EMPTY_SOURCE, this.type = void 0 !== e2 ? e2 : null, this.channel = void 0 !== n2 ? n2 : O.DEFAULT_CHANNEL, this.start = void 0 !== s2 ? s2 : -1, this.stop = void 0 !== i2 ? i2 : -1, this.tokenIndex = -1, null !== this.source[0] ? (this.line = t2[0].line, this.column = t2[0].column) : this.column = -1;
    }
    clone() {
      const t2 = new _ie(this.source, this.type, this.channel, this.start, this.stop);
      return t2.tokenIndex = this.tokenIndex, t2.line = this.line, t2.column = this.column, t2.text = this.text, t2;
    }
    cloneWithType(t2) {
      const e2 = new _ie(this.source, t2, this.channel, this.start, this.stop);
      return e2.tokenIndex = this.tokenIndex, e2.line = this.line, e2.column = this.column, t2 === O.EOF && (e2.text = ""), e2;
    }
    toString() {
      let t2 = this.text;
      return t2 = null !== t2 ? t2.replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\t/g, "\\t") : "<no text>", "[@" + this.tokenIndex + "," + this.start + ":" + this.stop + "='" + t2 + "',<" + this.type + ">" + (this.channel > 0 ? ",channel=" + this.channel : "") + "," + this.line + ":" + this.column + "]";
    }
    get text() {
      if (null !== this._text) return this._text;
      const t2 = this.getInputStream();
      if (null === t2) return null;
      const e2 = t2.size;
      return this.start < e2 && this.stop < e2 ? t2.getText(this.start, this.stop) : "<EOF>";
    }
    set text(t2) {
      this._text = t2;
    }
  };
  ie.EMPTY_SOURCE = [null, null];
  var re = class {
  };
  var oe = class extends re {
    constructor(t2) {
      super(), this.copyText = void 0 !== t2 && t2;
    }
    create(t2, e2, n2, s2, i2, r2, o2, a2) {
      const l2 = new ie(t2, e2, s2, i2, r2);
      return l2.line = o2, l2.column = a2, null !== n2 ? l2.text = n2 : this.copyText && null !== t2[1] && (l2.text = t2[1].getText(i2, r2)), l2;
    }
    createThin(t2, e2) {
      const n2 = new ie(null, t2);
      return n2.text = e2, n2;
    }
  };
  oe.DEFAULT = new oe();
  var ae = class _ae extends Error {
    constructor(t2) {
      super(t2.message), Error.captureStackTrace && Error.captureStackTrace(this, _ae), this.message = t2.message, this.recognizer = t2.recognizer, this.input = t2.input, this.ctx = t2.ctx, this.offendingToken = null, this.offendingState = -1, null !== this.recognizer && (this.offendingState = this.recognizer.state);
    }
    getExpectedTokens() {
      return null !== this.recognizer ? this.recognizer.atn.getExpectedTokens(this.offendingState, this.ctx) : null;
    }
    toString() {
      return this.message;
    }
  };
  var le = class extends ae {
    constructor(t2, e2, n2, s2) {
      super({ message: "", recognizer: t2, input: e2, ctx: null }), this.startIndex = n2, this.deadEndConfigs = s2;
    }
    toString() {
      let t2 = "";
      return this.startIndex >= 0 && this.startIndex < this.input.size && (t2 = this.input.getText(new Y(this.startIndex, this.startIndex))), "LexerNoViableAltException" + t2;
    }
  };
  var he = class _he extends se {
    constructor(t2) {
      super(), this._input = t2, this._factory = oe.DEFAULT, this._tokenFactorySourcePair = [this, t2], this._interp = null, this._token = null, this._tokenStartCharIndex = -1, this._tokenStartLine = -1, this._tokenStartColumn = -1, this._hitEOF = false, this._channel = O.DEFAULT_CHANNEL, this._type = O.INVALID_TYPE, this._modeStack = [], this._mode = _he.DEFAULT_MODE, this._text = null;
    }
    reset() {
      null !== this._input && this._input.seek(0), this._token = null, this._type = O.INVALID_TYPE, this._channel = O.DEFAULT_CHANNEL, this._tokenStartCharIndex = -1, this._tokenStartColumn = -1, this._tokenStartLine = -1, this._text = null, this._hitEOF = false, this._mode = _he.DEFAULT_MODE, this._modeStack = [], this._interp.reset();
    }
    nextToken() {
      if (null === this._input) throw "nextToken requires a non-null input stream.";
      const t2 = this._input.mark();
      try {
        for (; ; ) {
          if (this._hitEOF) return this.emitEOF(), this._token;
          this._token = null, this._channel = O.DEFAULT_CHANNEL, this._tokenStartCharIndex = this._input.index, this._tokenStartColumn = this._interp.column, this._tokenStartLine = this._interp.line, this._text = null;
          let e2 = false;
          for (; ; ) {
            this._type = O.INVALID_TYPE;
            let n2 = _he.SKIP;
            try {
              n2 = this._interp.match(this._input, this._mode);
            } catch (t3) {
              if (!(t3 instanceof ae)) throw console.log(t3.stack), t3;
              this.notifyListeners(t3), this.recover(t3);
            }
            if (this._input.LA(1) === O.EOF && (this._hitEOF = true), this._type === O.INVALID_TYPE && (this._type = n2), this._type === _he.SKIP) {
              e2 = true;
              break;
            }
            if (this._type !== _he.MORE) break;
          }
          if (!e2) return null === this._token && this.emit(), this._token;
        }
      } finally {
        this._input.release(t2);
      }
    }
    skip() {
      this._type = _he.SKIP;
    }
    more() {
      this._type = _he.MORE;
    }
    mode(t2) {
      console.warn("Calling deprecated method in Lexer class: mode(...)"), this.setMode(t2);
    }
    setMode(t2) {
      this._mode = t2;
    }
    getMode() {
      return this._mode;
    }
    getModeStack() {
      return this._modeStack;
    }
    pushMode(t2) {
      this._interp.debug && console.log("pushMode " + t2), this._modeStack.push(this._mode), this.setMode(t2);
    }
    popMode() {
      if (0 === this._modeStack.length) throw "Empty Stack";
      return this._interp.debug && console.log("popMode back to " + this._modeStack.slice(0, -1)), this.setMode(this._modeStack.pop()), this._mode;
    }
    emitToken(t2) {
      this._token = t2;
    }
    emit() {
      const t2 = this._factory.create(this._tokenFactorySourcePair, this._type, this._text, this._channel, this._tokenStartCharIndex, this.getCharIndex() - 1, this._tokenStartLine, this._tokenStartColumn);
      return this.emitToken(t2), t2;
    }
    emitEOF() {
      const t2 = this.column, e2 = this.line, n2 = this._factory.create(this._tokenFactorySourcePair, O.EOF, null, O.DEFAULT_CHANNEL, this._input.index, this._input.index - 1, e2, t2);
      return this.emitToken(n2), n2;
    }
    getCharIndex() {
      return this._input.index;
    }
    getAllTokens() {
      const t2 = [];
      let e2 = this.nextToken();
      for (; e2.type !== O.EOF; ) t2.push(e2), e2 = this.nextToken();
      return t2;
    }
    notifyListeners(t2) {
      const e2 = this._tokenStartCharIndex, n2 = this._input.index, s2 = this._input.getText(e2, n2), i2 = "token recognition error at: '" + this.getErrorDisplay(s2) + "'";
      this.getErrorListener().syntaxError(this, null, this._tokenStartLine, this._tokenStartColumn, i2, t2);
    }
    getErrorDisplay(t2) {
      const e2 = [];
      for (let n2 = 0; n2 < t2.length; n2++) e2.push(t2[n2]);
      return e2.join("");
    }
    getErrorDisplayForChar(t2) {
      return t2.charCodeAt(0) === O.EOF ? "<EOF>" : "\n" === t2 ? "\\n" : "	" === t2 ? "\\t" : "\r" === t2 ? "\\r" : t2;
    }
    getCharErrorDisplay(t2) {
      return "'" + this.getErrorDisplayForChar(t2) + "'";
    }
    recover(t2) {
      this._input.LA(1) !== O.EOF && (t2 instanceof le ? this._interp.consume(this._input) : this._input.consume());
    }
    get inputStream() {
      return this._input;
    }
    set inputStream(t2) {
      this._input = null, this._tokenFactorySourcePair = [this, this._input], this.reset(), this._input = t2, this._tokenFactorySourcePair = [this, this._input];
    }
    get sourceName() {
      return this._input.sourceName;
    }
    get type() {
      return this._type;
    }
    set type(t2) {
      this._type = t2;
    }
    get line() {
      return this._interp.line;
    }
    set line(t2) {
      this._interp.line = t2;
    }
    get column() {
      return this._interp.column;
    }
    set column(t2) {
      this._interp.column = t2;
    }
    get text() {
      return null !== this._text ? this._text : this._interp.getText(this._input);
    }
    set text(t2) {
      this._text = t2;
    }
  };
  function ce(t2) {
    return t2.hashCodeForConfigSet();
  }
  function ue(t2, e2) {
    return t2 === e2 || null !== t2 && null !== e2 && t2.equalsForConfigSet(e2);
  }
  he.DEFAULT_MODE = 0, he.MORE = -2, he.SKIP = -3, he.DEFAULT_TOKEN_CHANNEL = O.DEFAULT_CHANNEL, he.HIDDEN = O.HIDDEN_CHANNEL, he.MIN_CHAR_VALUE = 0, he.MAX_CHAR_VALUE = 1114111;
  var de = class _de {
    constructor(t2) {
      this.configLookup = new U(ce, ue), this.fullCtx = void 0 === t2 || t2, this.readOnly = false, this.configs = [], this.uniqueAlt = 0, this.conflictingAlts = null, this.hasSemanticContext = false, this.dipsIntoOuterContext = false, this.cachedHashCode = -1;
    }
    add(t2, e2) {
      if (void 0 === e2 && (e2 = null), this.readOnly) throw "This set is readonly";
      t2.semanticContext !== B.NONE && (this.hasSemanticContext = true), t2.reachesIntoOuterContext > 0 && (this.dipsIntoOuterContext = true);
      const n2 = this.configLookup.getOrAdd(t2);
      if (n2 === t2) return this.cachedHashCode = -1, this.configs.push(t2), true;
      const s2 = !this.fullCtx, i2 = Tt(n2.context, t2.context, s2, e2);
      return n2.reachesIntoOuterContext = Math.max(n2.reachesIntoOuterContext, t2.reachesIntoOuterContext), t2.precedenceFilterSuppressed && (n2.precedenceFilterSuppressed = true), n2.context = i2, true;
    }
    getStates() {
      const t2 = new U();
      for (let e2 = 0; e2 < this.configs.length; e2++) t2.add(this.configs[e2].state);
      return t2;
    }
    getPredicates() {
      const t2 = [];
      for (let e2 = 0; e2 < this.configs.length; e2++) {
        const n2 = this.configs[e2].semanticContext;
        n2 !== B.NONE && t2.push(n2.semanticContext);
      }
      return t2;
    }
    optimizeConfigs(t2) {
      if (this.readOnly) throw "This set is readonly";
      if (0 !== this.configLookup.length) for (let e2 = 0; e2 < this.configs.length; e2++) {
        const n2 = this.configs[e2];
        n2.context = t2.getCachedContext(n2.context);
      }
    }
    addAll(t2) {
      for (let e2 = 0; e2 < t2.length; e2++) this.add(t2[e2]);
      return false;
    }
    equals(t2) {
      return this === t2 || t2 instanceof _de && w(this.configs, t2.configs) && this.fullCtx === t2.fullCtx && this.uniqueAlt === t2.uniqueAlt && this.conflictingAlts === t2.conflictingAlts && this.hasSemanticContext === t2.hasSemanticContext && this.dipsIntoOuterContext === t2.dipsIntoOuterContext;
    }
    hashCode() {
      const t2 = new b();
      return t2.update(this.configs), t2.finish();
    }
    updateHashCode(t2) {
      this.readOnly ? (-1 === this.cachedHashCode && (this.cachedHashCode = this.hashCode()), t2.update(this.cachedHashCode)) : t2.update(this.hashCode());
    }
    isEmpty() {
      return 0 === this.configs.length;
    }
    contains(t2) {
      if (null === this.configLookup) throw "This method is not implemented for readonly sets.";
      return this.configLookup.contains(t2);
    }
    containsFast(t2) {
      if (null === this.configLookup) throw "This method is not implemented for readonly sets.";
      return this.configLookup.containsFast(t2);
    }
    clear() {
      if (this.readOnly) throw "This set is readonly";
      this.configs = [], this.cachedHashCode = -1, this.configLookup = new U();
    }
    setReadonly(t2) {
      this.readOnly = t2, t2 && (this.configLookup = null);
    }
    toString() {
      return M(this.configs) + (this.hasSemanticContext ? ",hasSemanticContext=" + this.hasSemanticContext : "") + (this.uniqueAlt !== Et.INVALID_ALT_NUMBER ? ",uniqueAlt=" + this.uniqueAlt : "") + (null !== this.conflictingAlts ? ",conflictingAlts=" + this.conflictingAlts : "") + (this.dipsIntoOuterContext ? ",dipsIntoOuterContext" : "");
    }
    get items() {
      return this.configs;
    }
    get length() {
      return this.configs.length;
    }
  };
  var ge = class _ge {
    constructor(t2, e2) {
      return null === t2 && (t2 = -1), null === e2 && (e2 = new de()), this.stateNumber = t2, this.configs = e2, this.edges = null, this.isAcceptState = false, this.prediction = 0, this.lexerActionExecutor = null, this.requiresFullContext = false, this.predicates = null, this;
    }
    getAltSet() {
      const t2 = new U();
      if (null !== this.configs) for (let e2 = 0; e2 < this.configs.length; e2++) {
        const n2 = this.configs[e2];
        t2.add(n2.alt);
      }
      return 0 === t2.length ? null : t2;
    }
    equals(t2) {
      return this === t2 || t2 instanceof _ge && this.configs.equals(t2.configs);
    }
    toString() {
      let t2 = this.stateNumber + ":" + this.configs;
      return this.isAcceptState && (t2 += "=>", null !== this.predicates ? t2 += this.predicates : t2 += this.prediction), t2;
    }
    hashCode() {
      const t2 = new b();
      return t2.update(this.configs), t2.finish();
    }
  };
  var pe = class {
    constructor(t2, e2) {
      return this.atn = t2, this.sharedContextCache = e2, this;
    }
    getCachedContext(t2) {
      if (null === this.sharedContextCache) return t2;
      const e2 = new pt();
      return xt(t2, this.sharedContextCache, e2);
    }
  };
  pe.ERROR = new ge(2147483647, new de());
  var fe = class extends de {
    constructor() {
      super(), this.configLookup = new U();
    }
  };
  var xe = class _xe extends K {
    constructor(t2, e2) {
      super(t2, e2);
      const n2 = t2.lexerActionExecutor || null;
      return this.lexerActionExecutor = n2 || (null !== e2 ? e2.lexerActionExecutor : null), this.passedThroughNonGreedyDecision = null !== e2 && this.checkNonGreedyDecision(e2, this.state), this.hashCodeForConfigSet = _xe.prototype.hashCode, this.equalsForConfigSet = _xe.prototype.equals, this;
    }
    updateHashCode(t2) {
      t2.update(this.state.stateNumber, this.alt, this.context, this.semanticContext, this.passedThroughNonGreedyDecision, this.lexerActionExecutor);
    }
    equals(t2) {
      return this === t2 || t2 instanceof _xe && this.passedThroughNonGreedyDecision === t2.passedThroughNonGreedyDecision && (this.lexerActionExecutor ? this.lexerActionExecutor.equals(t2.lexerActionExecutor) : !t2.lexerActionExecutor) && super.equals(t2);
    }
    checkNonGreedyDecision(t2, e2) {
      return t2.passedThroughNonGreedyDecision || e2 instanceof At && e2.nonGreedy;
    }
  };
  var Te = class _Te extends Ht {
    constructor(t2, e2) {
      super(e2.actionType), this.offset = t2, this.action = e2, this.isPositionDependent = true;
    }
    execute(t2) {
      this.action.execute(t2);
    }
    updateHashCode(t2) {
      t2.update(this.actionType, this.offset, this.action);
    }
    equals(t2) {
      return this === t2 || t2 instanceof _Te && this.offset === t2.offset && this.action === t2.action;
    }
  };
  var Se = class _Se {
    constructor(t2) {
      return this.lexerActions = null === t2 ? [] : t2, this.cachedHashCode = b.hashStuff(t2), this;
    }
    fixOffsetBeforeMatch(t2) {
      let e2 = null;
      for (let n2 = 0; n2 < this.lexerActions.length; n2++) !this.lexerActions[n2].isPositionDependent || this.lexerActions[n2] instanceof Te || (null === e2 && (e2 = this.lexerActions.concat([])), e2[n2] = new Te(t2, this.lexerActions[n2]));
      return null === e2 ? this : new _Se(e2);
    }
    execute(t2, e2, n2) {
      let s2 = false;
      const i2 = e2.index;
      try {
        for (let r2 = 0; r2 < this.lexerActions.length; r2++) {
          let o2 = this.lexerActions[r2];
          if (o2 instanceof Te) {
            const t3 = o2.offset;
            e2.seek(n2 + t3), o2 = o2.action, s2 = n2 + t3 !== i2;
          } else o2.isPositionDependent && (e2.seek(i2), s2 = false);
          o2.execute(t2);
        }
      } finally {
        s2 && e2.seek(i2);
      }
    }
    hashCode() {
      return this.cachedHashCode;
    }
    updateHashCode(t2) {
      t2.update(this.cachedHashCode);
    }
    equals(t2) {
      if (this === t2) return true;
      if (t2 instanceof _Se) {
        if (this.cachedHashCode != t2.cachedHashCode) return false;
        if (this.lexerActions.length != t2.lexerActions.length) return false;
        {
          const e2 = this.lexerActions.length;
          for (let n2 = 0; n2 < e2; ++n2) if (!this.lexerActions[n2].equals(t2.lexerActions[n2])) return false;
          return true;
        }
      }
      return false;
    }
    static append(t2, e2) {
      if (null === t2) return new _Se([e2]);
      const n2 = t2.lexerActions.concat([e2]);
      return new _Se(n2);
    }
  };
  function me(t2) {
    t2.index = -1, t2.line = 0, t2.column = -1, t2.dfaState = null;
  }
  var Ee = class {
    constructor() {
      me(this);
    }
    reset() {
      me(this);
    }
  };
  var _e = class __e extends pe {
    constructor(t2, e2, n2, s2) {
      super(e2, s2), this.decisionToDFA = n2, this.recog = t2, this.startIndex = -1, this.line = 1, this.column = 0, this.mode = he.DEFAULT_MODE, this.prevAccept = new Ee();
    }
    copyState(t2) {
      this.column = t2.column, this.line = t2.line, this.mode = t2.mode, this.startIndex = t2.startIndex;
    }
    match(t2, e2) {
      this.mode = e2;
      const n2 = t2.mark();
      try {
        this.startIndex = t2.index, this.prevAccept.reset();
        const n3 = this.decisionToDFA[e2];
        return null === n3.s0 ? this.matchATN(t2) : this.execATN(t2, n3.s0);
      } finally {
        t2.release(n2);
      }
    }
    reset() {
      this.prevAccept.reset(), this.startIndex = -1, this.line = 1, this.column = 0, this.mode = he.DEFAULT_MODE;
    }
    matchATN(t2) {
      const e2 = this.atn.modeToStartState[this.mode];
      __e.debug && console.log("matchATN mode " + this.mode + " start: " + e2);
      const n2 = this.mode, s2 = this.computeStartState(t2, e2), i2 = s2.hasSemanticContext;
      s2.hasSemanticContext = false;
      const r2 = this.addDFAState(s2);
      i2 || (this.decisionToDFA[this.mode].s0 = r2);
      const o2 = this.execATN(t2, r2);
      return __e.debug && console.log("DFA after matchATN: " + this.decisionToDFA[n2].toLexerString()), o2;
    }
    execATN(t2, e2) {
      __e.debug && console.log("start state closure=" + e2.configs), e2.isAcceptState && this.captureSimState(this.prevAccept, t2, e2);
      let n2 = t2.LA(1), s2 = e2;
      for (; ; ) {
        __e.debug && console.log("execATN loop starting closure: " + s2.configs);
        let e3 = this.getExistingTargetState(s2, n2);
        if (null === e3 && (e3 = this.computeTargetState(t2, s2, n2)), e3 === pe.ERROR) break;
        if (n2 !== O.EOF && this.consume(t2), e3.isAcceptState && (this.captureSimState(this.prevAccept, t2, e3), n2 === O.EOF)) break;
        n2 = t2.LA(1), s2 = e3;
      }
      return this.failOrAccept(this.prevAccept, t2, s2.configs, n2);
    }
    getExistingTargetState(t2, e2) {
      if (null === t2.edges || e2 < __e.MIN_DFA_EDGE || e2 > __e.MAX_DFA_EDGE) return null;
      let n2 = t2.edges[e2 - __e.MIN_DFA_EDGE];
      return void 0 === n2 && (n2 = null), __e.debug && null !== n2 && console.log("reuse state " + t2.stateNumber + " edge to " + n2.stateNumber), n2;
    }
    computeTargetState(t2, e2, n2) {
      const s2 = new fe();
      return this.getReachableConfigSet(t2, e2.configs, s2, n2), 0 === s2.items.length ? (s2.hasSemanticContext || this.addDFAEdge(e2, n2, pe.ERROR), pe.ERROR) : this.addDFAEdge(e2, n2, null, s2);
    }
    failOrAccept(t2, e2, n2, s2) {
      if (null !== this.prevAccept.dfaState) {
        const n3 = t2.dfaState.lexerActionExecutor;
        return this.accept(e2, n3, this.startIndex, t2.index, t2.line, t2.column), t2.dfaState.prediction;
      }
      if (s2 === O.EOF && e2.index === this.startIndex) return O.EOF;
      throw new le(this.recog, e2, this.startIndex, n2);
    }
    getReachableConfigSet(t2, e2, n2, s2) {
      let i2 = Et.INVALID_ALT_NUMBER;
      for (let r2 = 0; r2 < e2.items.length; r2++) {
        const o2 = e2.items[r2], a2 = o2.alt === i2;
        if (!a2 || !o2.passedThroughNonGreedyDecision) {
          __e.debug && console.log("testing %s at %s\n", this.getTokenName(s2), o2.toString(this.recog, true));
          for (let e3 = 0; e3 < o2.state.transitions.length; e3++) {
            const r3 = o2.state.transitions[e3], l2 = this.getReachableTarget(r3, s2);
            if (null !== l2) {
              let e4 = o2.lexerActionExecutor;
              null !== e4 && (e4 = e4.fixOffsetBeforeMatch(t2.index - this.startIndex));
              const r4 = s2 === O.EOF, h2 = new xe({ state: l2, lexerActionExecutor: e4 }, o2);
              this.closure(t2, h2, n2, a2, true, r4) && (i2 = o2.alt);
            }
          }
        }
      }
    }
    accept(t2, e2, n2, s2, i2, r2) {
      __e.debug && console.log("ACTION %s\n", e2), t2.seek(s2), this.line = i2, this.column = r2, null !== e2 && null !== this.recog && e2.execute(this.recog, t2, n2);
    }
    getReachableTarget(t2, e2) {
      return t2.matches(e2, 0, he.MAX_CHAR_VALUE) ? t2.target : null;
    }
    computeStartState(t2, e2) {
      const n2 = ct.EMPTY, s2 = new fe();
      for (let i2 = 0; i2 < e2.transitions.length; i2++) {
        const r2 = e2.transitions[i2].target, o2 = new xe({ state: r2, alt: i2 + 1, context: n2 }, null);
        this.closure(t2, o2, s2, false, false, false);
      }
      return s2;
    }
    closure(t2, e2, n2, s2, i2, r2) {
      let o2 = null;
      if (__e.debug && console.log("closure(" + e2.toString(this.recog, true) + ")"), e2.state instanceof j) {
        if (__e.debug && (null !== this.recog ? console.log("closure at %s rule stop %s\n", this.recog.ruleNames[e2.state.ruleIndex], e2) : console.log("closure at rule stop %s\n", e2)), null === e2.context || e2.context.hasEmptyPath()) {
          if (null === e2.context || e2.context.isEmpty()) return n2.add(e2), true;
          n2.add(new xe({ state: e2.state, context: ct.EMPTY }, e2)), s2 = true;
        }
        if (null !== e2.context && !e2.context.isEmpty()) {
          for (let a2 = 0; a2 < e2.context.length; a2++) if (e2.context.getReturnState(a2) !== ct.EMPTY_RETURN_STATE) {
            const l2 = e2.context.getParent(a2), h2 = this.atn.states[e2.context.getReturnState(a2)];
            o2 = new xe({ state: h2, context: l2 }, e2), s2 = this.closure(t2, o2, n2, s2, i2, r2);
          }
        }
        return s2;
      }
      e2.state.epsilonOnlyTransitions || s2 && e2.passedThroughNonGreedyDecision || n2.add(e2);
      for (let a2 = 0; a2 < e2.state.transitions.length; a2++) {
        const l2 = e2.state.transitions[a2];
        o2 = this.getEpsilonTarget(t2, e2, l2, n2, i2, r2), null !== o2 && (s2 = this.closure(t2, o2, n2, s2, i2, r2));
      }
      return s2;
    }
    getEpsilonTarget(t2, e2, n2, s2, i2, r2) {
      let o2 = null;
      if (n2.serializationType === $.RULE) {
        const t3 = dt.create(e2.context, n2.followState.stateNumber);
        o2 = new xe({ state: n2.target, context: t3 }, e2);
      } else {
        if (n2.serializationType === $.PRECEDENCE) throw "Precedence predicates are not supported in lexers.";
        if (n2.serializationType === $.PREDICATE) __e.debug && console.log("EVAL rule " + n2.ruleIndex + ":" + n2.predIndex), s2.hasSemanticContext = true, this.evaluatePredicate(t2, n2.ruleIndex, n2.predIndex, i2) && (o2 = new xe({ state: n2.target }, e2));
        else if (n2.serializationType === $.ACTION) if (null === e2.context || e2.context.hasEmptyPath()) {
          const t3 = Se.append(e2.lexerActionExecutor, this.atn.lexerActions[n2.actionIndex]);
          o2 = new xe({ state: n2.target, lexerActionExecutor: t3 }, e2);
        } else o2 = new xe({ state: n2.target }, e2);
        else n2.serializationType === $.EPSILON ? o2 = new xe({ state: n2.target }, e2) : n2.serializationType !== $.ATOM && n2.serializationType !== $.RANGE && n2.serializationType !== $.SET || r2 && n2.matches(O.EOF, 0, he.MAX_CHAR_VALUE) && (o2 = new xe({ state: n2.target }, e2));
      }
      return o2;
    }
    evaluatePredicate(t2, e2, n2, s2) {
      if (null === this.recog) return true;
      if (!s2) return this.recog.sempred(null, e2, n2);
      const i2 = this.column, r2 = this.line, o2 = t2.index, a2 = t2.mark();
      try {
        return this.consume(t2), this.recog.sempred(null, e2, n2);
      } finally {
        this.column = i2, this.line = r2, t2.seek(o2), t2.release(a2);
      }
    }
    captureSimState(t2, e2, n2) {
      t2.index = e2.index, t2.line = this.line, t2.column = this.column, t2.dfaState = n2;
    }
    addDFAEdge(t2, e2, n2, s2) {
      if (void 0 === n2 && (n2 = null), void 0 === s2 && (s2 = null), null === n2 && null !== s2) {
        const t3 = s2.hasSemanticContext;
        if (s2.hasSemanticContext = false, n2 = this.addDFAState(s2), t3) return n2;
      }
      return e2 < __e.MIN_DFA_EDGE || e2 > __e.MAX_DFA_EDGE || (__e.debug && console.log("EDGE " + t2 + " -> " + n2 + " upon " + e2), null === t2.edges && (t2.edges = []), t2.edges[e2 - __e.MIN_DFA_EDGE] = n2), n2;
    }
    addDFAState(t2) {
      const e2 = new ge(null, t2);
      let n2 = null;
      for (let e3 = 0; e3 < t2.items.length; e3++) {
        const s3 = t2.items[e3];
        if (s3.state instanceof j) {
          n2 = s3;
          break;
        }
      }
      null !== n2 && (e2.isAcceptState = true, e2.lexerActionExecutor = n2.lexerActionExecutor, e2.prediction = this.atn.ruleToTokenType[n2.state.ruleIndex]);
      const s2 = this.decisionToDFA[this.mode], i2 = s2.states.get(e2);
      if (null !== i2) return i2;
      const r2 = e2;
      return r2.stateNumber = s2.states.length, t2.setReadonly(true), r2.configs = t2, s2.states.add(r2), r2;
    }
    getDFA(t2) {
      return this.decisionToDFA[t2];
    }
    getText(t2) {
      return t2.getText(this.startIndex, t2.index - 1);
    }
    consume(t2) {
      t2.LA(1) === "\n".charCodeAt(0) ? (this.line += 1, this.column = 0) : this.column += 1, t2.consume();
    }
    getTokenName(t2) {
      return -1 === t2 ? "EOF" : "'" + String.fromCharCode(t2) + "'";
    }
  };
  _e.debug = false, _e.dfa_debug = false, _e.MIN_DFA_EDGE = 0, _e.MAX_DFA_EDGE = 127;
  var Ae = class {
    constructor(t2, e2) {
      this.alt = e2, this.pred = t2;
    }
    toString() {
      return "(" + this.pred + ", " + this.alt + ")";
    }
  };
  var Ce = class {
    constructor() {
      this.data = {};
    }
    get(t2) {
      return this.data["k-" + t2] || null;
    }
    set(t2, e2) {
      this.data["k-" + t2] = e2;
    }
    values() {
      return Object.keys(this.data).filter(((t2) => t2.startsWith("k-"))).map(((t2) => this.data[t2]), this);
    }
  };
  var Ne = { SLL: 0, LL: 1, LL_EXACT_AMBIG_DETECTION: 2, hasSLLConflictTerminatingPrediction: function(t2, e2) {
    if (Ne.allConfigsInRuleStopStates(e2)) return true;
    if (t2 === Ne.SLL && e2.hasSemanticContext) {
      const t3 = new de();
      for (let n3 = 0; n3 < e2.items.length; n3++) {
        let s2 = e2.items[n3];
        s2 = new K({ semanticContext: B.NONE }, s2), t3.add(s2);
      }
      e2 = t3;
    }
    const n2 = Ne.getConflictingAltSubsets(e2);
    return Ne.hasConflictingAltSet(n2) && !Ne.hasStateAssociatedWithOneAlt(e2);
  }, hasConfigInRuleStopState: function(t2) {
    for (let e2 = 0; e2 < t2.items.length; e2++) if (t2.items[e2].state instanceof j) return true;
    return false;
  }, allConfigsInRuleStopStates: function(t2) {
    for (let e2 = 0; e2 < t2.items.length; e2++) if (!(t2.items[e2].state instanceof j)) return false;
    return true;
  }, resolvesToJustOneViableAlt: function(t2) {
    return Ne.getSingleViableAlt(t2);
  }, allSubsetsConflict: function(t2) {
    return !Ne.hasNonConflictingAltSet(t2);
  }, hasNonConflictingAltSet: function(t2) {
    for (let e2 = 0; e2 < t2.length; e2++) if (1 === t2[e2].length) return true;
    return false;
  }, hasConflictingAltSet: function(t2) {
    for (let e2 = 0; e2 < t2.length; e2++) if (t2[e2].length > 1) return true;
    return false;
  }, allSubsetsEqual: function(t2) {
    let e2 = null;
    for (let n2 = 0; n2 < t2.length; n2++) {
      const s2 = t2[n2];
      if (null === e2) e2 = s2;
      else if (s2 !== e2) return false;
    }
    return true;
  }, getUniqueAlt: function(t2) {
    const e2 = Ne.getAlts(t2);
    return 1 === e2.length ? e2.minValue() : Et.INVALID_ALT_NUMBER;
  }, getAlts: function(t2) {
    const e2 = new St();
    return t2.map((function(t3) {
      e2.or(t3);
    })), e2;
  }, getConflictingAltSubsets: function(t2) {
    const e2 = new pt();
    return e2.hashFunction = function(t3) {
      b.hashStuff(t3.state.stateNumber, t3.context);
    }, e2.equalsFunction = function(t3, e3) {
      return t3.state.stateNumber === e3.state.stateNumber && t3.context.equals(e3.context);
    }, t2.items.map((function(t3) {
      let n2 = e2.get(t3);
      null === n2 && (n2 = new St(), e2.set(t3, n2)), n2.set(t3.alt);
    })), e2.getValues();
  }, getStateToAltMap: function(t2) {
    const e2 = new Ce();
    return t2.items.map((function(t3) {
      let n2 = e2.get(t3.state);
      null === n2 && (n2 = new St(), e2.set(t3.state, n2)), n2.set(t3.alt);
    })), e2;
  }, hasStateAssociatedWithOneAlt: function(t2) {
    const e2 = Ne.getStateToAltMap(t2).values();
    for (let t3 = 0; t3 < e2.length; t3++) if (1 === e2[t3].length) return true;
    return false;
  }, getSingleViableAlt: function(t2) {
    let e2 = null;
    for (let n2 = 0; n2 < t2.length; n2++) {
      const s2 = t2[n2].minValue();
      if (null === e2) e2 = s2;
      else if (e2 !== s2) return Et.INVALID_ALT_NUMBER;
    }
    return e2;
  } };
  var ke = Ne;
  var Ie = class extends ae {
    constructor(t2, e2, n2, s2, i2, r2) {
      r2 = r2 || t2._ctx, s2 = s2 || t2.getCurrentToken(), n2 = n2 || t2.getCurrentToken(), e2 = e2 || t2.getInputStream(), super({ message: "", recognizer: t2, input: e2, ctx: r2 }), this.deadEndConfigs = i2, this.startToken = n2, this.offendingToken = s2;
    }
  };
  var ye = class {
    constructor(t2) {
      this.defaultMapCtor = t2 || pt, this.cacheMap = new this.defaultMapCtor();
    }
    get(t2, e2) {
      const n2 = this.cacheMap.get(t2) || null;
      return null === n2 ? null : n2.get(e2) || null;
    }
    set(t2, e2, n2) {
      let s2 = this.cacheMap.get(t2) || null;
      null === s2 && (s2 = new this.defaultMapCtor(), this.cacheMap.set(t2, s2)), s2.set(e2, n2);
    }
  };
  var Le = class extends pe {
    constructor(t2, e2, n2, s2) {
      super(e2, s2), this.parser = t2, this.decisionToDFA = n2, this.predictionMode = ke.LL, this._input = null, this._startIndex = 0, this._outerContext = null, this._dfa = null, this.mergeCache = null, this.debug = false, this.debug_closure = false, this.debug_add = false, this.trace_atn_sim = false, this.dfa_debug = false, this.retry_debug = false;
    }
    reset() {
    }
    adaptivePredict(t2, e2, n2) {
      (this.debug || this.trace_atn_sim) && console.log("adaptivePredict decision " + e2 + " exec LA(1)==" + this.getLookaheadName(t2) + " line " + t2.LT(1).line + ":" + t2.LT(1).column), this._input = t2, this._startIndex = t2.index, this._outerContext = n2;
      const s2 = this.decisionToDFA[e2];
      this._dfa = s2;
      const i2 = t2.mark(), r2 = t2.index;
      try {
        let e3;
        if (e3 = s2.precedenceDfa ? s2.getPrecedenceStartState(this.parser.getPrecedence()) : s2.s0, null === e3) {
          null === n2 && (n2 = ht.EMPTY), this.debug && console.log("predictATN decision " + s2.decision + " exec LA(1)==" + this.getLookaheadName(t2) + ", outerContext=" + n2.toString(this.parser.ruleNames));
          const i4 = false;
          let r3 = this.computeStartState(s2.atnStartState, ht.EMPTY, i4);
          s2.precedenceDfa ? (s2.s0.configs = r3, r3 = this.applyPrecedenceFilter(r3), e3 = this.addDFAState(s2, new ge(null, r3)), s2.setPrecedenceStartState(this.parser.getPrecedence(), e3)) : (e3 = this.addDFAState(s2, new ge(null, r3)), s2.s0 = e3);
        }
        const i3 = this.execATN(s2, e3, t2, r2, n2);
        return this.debug && console.log("DFA after predictATN: " + s2.toString(this.parser.literalNames, this.parser.symbolicNames)), i3;
      } finally {
        this._dfa = null, this.mergeCache = null, t2.seek(r2), t2.release(i2);
      }
    }
    execATN(t2, e2, n2, s2, i2) {
      let r2;
      (this.debug || this.trace_atn_sim) && console.log("execATN decision " + t2.decision + ", DFA state " + e2 + ", LA(1)==" + this.getLookaheadName(n2) + " line " + n2.LT(1).line + ":" + n2.LT(1).column);
      let o2 = e2;
      this.debug && console.log("s0 = " + e2);
      let a2 = n2.LA(1);
      for (; ; ) {
        let e3 = this.getExistingTargetState(o2, a2);
        if (null === e3 && (e3 = this.computeTargetState(t2, o2, a2)), e3 === pe.ERROR) {
          const t3 = this.noViableAlt(n2, i2, o2.configs, s2);
          if (n2.seek(s2), r2 = this.getSynValidOrSemInvalidAltThatFinishedDecisionEntryRule(o2.configs, i2), r2 !== Et.INVALID_ALT_NUMBER) return r2;
          throw t3;
        }
        if (e3.requiresFullContext && this.predictionMode !== ke.SLL) {
          let o3 = null;
          if (null !== e3.predicates) {
            this.debug && console.log("DFA state has preds in DFA sim LL failover");
            const t3 = n2.index;
            if (t3 !== s2 && n2.seek(s2), o3 = this.evalSemanticContext(e3.predicates, i2, true), 1 === o3.length) return this.debug && console.log("Full LL avoided"), o3.minValue();
            t3 !== s2 && n2.seek(t3);
          }
          this.dfa_debug && console.log("ctx sensitive state " + i2 + " in " + e3);
          const a3 = true, l2 = this.computeStartState(t2.atnStartState, i2, a3);
          return this.reportAttemptingFullContext(t2, o3, e3.configs, s2, n2.index), r2 = this.execATNWithFullContext(t2, e3, l2, n2, s2, i2), r2;
        }
        if (e3.isAcceptState) {
          if (null === e3.predicates) return e3.prediction;
          const r3 = n2.index;
          n2.seek(s2);
          const o3 = this.evalSemanticContext(e3.predicates, i2, true);
          if (0 === o3.length) throw this.noViableAlt(n2, i2, e3.configs, s2);
          return 1 === o3.length || this.reportAmbiguity(t2, e3, s2, r3, false, o3, e3.configs), o3.minValue();
        }
        o2 = e3, a2 !== O.EOF && (n2.consume(), a2 = n2.LA(1));
      }
    }
    getExistingTargetState(t2, e2) {
      const n2 = t2.edges;
      return null === n2 ? null : n2[e2 + 1] || null;
    }
    computeTargetState(t2, e2, n2) {
      const s2 = this.computeReachSet(e2.configs, n2, false);
      if (null === s2) return this.addDFAEdge(t2, e2, n2, pe.ERROR), pe.ERROR;
      let i2 = new ge(null, s2);
      const r2 = this.getUniqueAlt(s2);
      if (this.debug) {
        const t3 = ke.getConflictingAltSubsets(s2);
        console.log("SLL altSubSets=" + M(t3) + ", configs=" + s2 + ", predict=" + r2 + ", allSubsetsConflict=" + ke.allSubsetsConflict(t3) + ", conflictingAlts=" + this.getConflictingAlts(s2));
      }
      return r2 !== Et.INVALID_ALT_NUMBER ? (i2.isAcceptState = true, i2.configs.uniqueAlt = r2, i2.prediction = r2) : ke.hasSLLConflictTerminatingPrediction(this.predictionMode, s2) && (i2.configs.conflictingAlts = this.getConflictingAlts(s2), i2.requiresFullContext = true, i2.isAcceptState = true, i2.prediction = i2.configs.conflictingAlts.minValue()), i2.isAcceptState && i2.configs.hasSemanticContext && (this.predicateDFAState(i2, this.atn.getDecisionState(t2.decision)), null !== i2.predicates && (i2.prediction = Et.INVALID_ALT_NUMBER)), i2 = this.addDFAEdge(t2, e2, n2, i2), i2;
    }
    predicateDFAState(t2, e2) {
      const n2 = e2.transitions.length, s2 = this.getConflictingAltsOrUniqueAlt(t2.configs), i2 = this.getPredsForAmbigAlts(s2, t2.configs, n2);
      null !== i2 ? (t2.predicates = this.getPredicatePredictions(s2, i2), t2.prediction = Et.INVALID_ALT_NUMBER) : t2.prediction = s2.minValue();
    }
    execATNWithFullContext(t2, e2, n2, s2, i2, r2) {
      (this.debug || this.trace_atn_sim) && console.log("execATNWithFullContext " + n2);
      let o2, a2 = false, l2 = n2;
      s2.seek(i2);
      let h2 = s2.LA(1), c2 = -1;
      for (; ; ) {
        if (o2 = this.computeReachSet(l2, h2, true), null === o2) {
          const t4 = this.noViableAlt(s2, r2, l2, i2);
          s2.seek(i2);
          const e3 = this.getSynValidOrSemInvalidAltThatFinishedDecisionEntryRule(l2, r2);
          if (e3 !== Et.INVALID_ALT_NUMBER) return e3;
          throw t4;
        }
        const t3 = ke.getConflictingAltSubsets(o2);
        if (this.debug && console.log("LL altSubSets=" + t3 + ", predict=" + ke.getUniqueAlt(t3) + ", resolvesToJustOneViableAlt=" + ke.resolvesToJustOneViableAlt(t3)), o2.uniqueAlt = this.getUniqueAlt(o2), o2.uniqueAlt !== Et.INVALID_ALT_NUMBER) {
          c2 = o2.uniqueAlt;
          break;
        }
        if (this.predictionMode !== ke.LL_EXACT_AMBIG_DETECTION) {
          if (c2 = ke.resolvesToJustOneViableAlt(t3), c2 !== Et.INVALID_ALT_NUMBER) break;
        } else if (ke.allSubsetsConflict(t3) && ke.allSubsetsEqual(t3)) {
          a2 = true, c2 = ke.getSingleViableAlt(t3);
          break;
        }
        l2 = o2, h2 !== O.EOF && (s2.consume(), h2 = s2.LA(1));
      }
      return o2.uniqueAlt !== Et.INVALID_ALT_NUMBER ? (this.reportContextSensitivity(t2, c2, o2, i2, s2.index), c2) : (this.reportAmbiguity(t2, e2, i2, s2.index, a2, null, o2), c2);
    }
    computeReachSet(t2, e2, n2) {
      this.debug && console.log("in computeReachSet, starting closure: " + t2), null === this.mergeCache && (this.mergeCache = new ye());
      const s2 = new de(n2);
      let i2 = null;
      for (let r3 = 0; r3 < t2.items.length; r3++) {
        const o2 = t2.items[r3];
        if (this.debug && console.log("testing " + this.getTokenName(e2) + " at " + o2), o2.state instanceof j) (n2 || e2 === O.EOF) && (null === i2 && (i2 = []), i2.push(o2), this.debug_add && console.log("added " + o2 + " to skippedStopStates"));
        else for (let t3 = 0; t3 < o2.state.transitions.length; t3++) {
          const n3 = o2.state.transitions[t3], i3 = this.getReachableTarget(n3, e2);
          if (null !== i3) {
            const t4 = new K({ state: i3 }, o2);
            s2.add(t4, this.mergeCache), this.debug_add && console.log("added " + t4 + " to intermediate");
          }
        }
      }
      let r2 = null;
      if (null === i2 && e2 !== O.EOF && (1 === s2.items.length || this.getUniqueAlt(s2) !== Et.INVALID_ALT_NUMBER) && (r2 = s2), null === r2) {
        r2 = new de(n2);
        const t3 = new U(), i3 = e2 === O.EOF;
        for (let e3 = 0; e3 < s2.items.length; e3++) this.closure(s2.items[e3], r2, t3, false, n2, i3);
      }
      if (e2 === O.EOF && (r2 = this.removeAllConfigsNotInRuleStopState(r2, r2 === s2)), !(null === i2 || n2 && ke.hasConfigInRuleStopState(r2))) for (let t3 = 0; t3 < i2.length; t3++) r2.add(i2[t3], this.mergeCache);
      return this.trace_atn_sim && console.log("computeReachSet " + t2 + " -> " + r2), 0 === r2.items.length ? null : r2;
    }
    removeAllConfigsNotInRuleStopState(t2, e2) {
      if (ke.allConfigsInRuleStopStates(t2)) return t2;
      const n2 = new de(t2.fullCtx);
      for (let s2 = 0; s2 < t2.items.length; s2++) {
        const i2 = t2.items[s2];
        if (i2.state instanceof j) n2.add(i2, this.mergeCache);
        else if (e2 && i2.state.epsilonOnlyTransitions && this.atn.nextTokens(i2.state).contains(O.EPSILON)) {
          const t3 = this.atn.ruleToStopState[i2.state.ruleIndex];
          n2.add(new K({ state: t3 }, i2), this.mergeCache);
        }
      }
      return n2;
    }
    computeStartState(t2, e2, n2) {
      const s2 = ft(this.atn, e2), i2 = new de(n2);
      this.trace_atn_sim && console.log("computeStartState from ATN state " + t2 + " initialContext=" + s2.toString(this.parser));
      for (let e3 = 0; e3 < t2.transitions.length; e3++) {
        const r2 = t2.transitions[e3].target, o2 = new K({ state: r2, alt: e3 + 1, context: s2 }, null), a2 = new U();
        this.closure(o2, i2, a2, true, n2, false);
      }
      return i2;
    }
    applyPrecedenceFilter(t2) {
      let e2;
      const n2 = [], s2 = new de(t2.fullCtx);
      for (let i2 = 0; i2 < t2.items.length; i2++) {
        if (e2 = t2.items[i2], 1 !== e2.alt) continue;
        const r2 = e2.semanticContext.evalPrecedence(this.parser, this._outerContext);
        null !== r2 && (n2[e2.state.stateNumber] = e2.context, r2 !== e2.semanticContext ? s2.add(new K({ semanticContext: r2 }, e2), this.mergeCache) : s2.add(e2, this.mergeCache));
      }
      for (let i2 = 0; i2 < t2.items.length; i2++) if (e2 = t2.items[i2], 1 !== e2.alt) {
        if (!e2.precedenceFilterSuppressed) {
          const t3 = n2[e2.state.stateNumber] || null;
          if (null !== t3 && t3.equals(e2.context)) continue;
        }
        s2.add(e2, this.mergeCache);
      }
      return s2;
    }
    getReachableTarget(t2, e2) {
      return t2.matches(e2, 0, this.atn.maxTokenType) ? t2.target : null;
    }
    getPredsForAmbigAlts(t2, e2, n2) {
      let s2 = [];
      for (let n3 = 0; n3 < e2.items.length; n3++) {
        const i3 = e2.items[n3];
        t2.get(i3.alt) && (s2[i3.alt] = B.orContext(s2[i3.alt] || null, i3.semanticContext));
      }
      let i2 = 0;
      for (let t3 = 1; t3 < n2 + 1; t3++) {
        const e3 = s2[t3] || null;
        null === e3 ? s2[t3] = B.NONE : e3 !== B.NONE && (i2 += 1);
      }
      return 0 === i2 && (s2 = null), this.debug && console.log("getPredsForAmbigAlts result " + M(s2)), s2;
    }
    getPredicatePredictions(t2, e2) {
      const n2 = [];
      let s2 = false;
      for (let i2 = 1; i2 < e2.length; i2++) {
        const r2 = e2[i2];
        null !== t2 && t2.get(i2) && n2.push(new Ae(r2, i2)), r2 !== B.NONE && (s2 = true);
      }
      return s2 ? n2 : null;
    }
    getSynValidOrSemInvalidAltThatFinishedDecisionEntryRule(t2, e2) {
      const n2 = this.splitAccordingToSemanticValidity(t2, e2), s2 = n2[0], i2 = n2[1];
      let r2 = this.getAltThatFinishedDecisionEntryRule(s2);
      return r2 !== Et.INVALID_ALT_NUMBER || i2.items.length > 0 && (r2 = this.getAltThatFinishedDecisionEntryRule(i2), r2 !== Et.INVALID_ALT_NUMBER) ? r2 : Et.INVALID_ALT_NUMBER;
    }
    getAltThatFinishedDecisionEntryRule(t2) {
      const e2 = [];
      for (let n2 = 0; n2 < t2.items.length; n2++) {
        const s2 = t2.items[n2];
        (s2.reachesIntoOuterContext > 0 || s2.state instanceof j && s2.context.hasEmptyPath()) && e2.indexOf(s2.alt) < 0 && e2.push(s2.alt);
      }
      return 0 === e2.length ? Et.INVALID_ALT_NUMBER : Math.min.apply(null, e2);
    }
    splitAccordingToSemanticValidity(t2, e2) {
      const n2 = new de(t2.fullCtx), s2 = new de(t2.fullCtx);
      for (let i2 = 0; i2 < t2.items.length; i2++) {
        const r2 = t2.items[i2];
        r2.semanticContext !== B.NONE ? r2.semanticContext.evaluate(this.parser, e2) ? n2.add(r2) : s2.add(r2) : n2.add(r2);
      }
      return [n2, s2];
    }
    evalSemanticContext(t2, e2, n2) {
      const s2 = new St();
      for (let i2 = 0; i2 < t2.length; i2++) {
        const r2 = t2[i2];
        if (r2.pred === B.NONE) {
          if (s2.set(r2.alt), !n2) break;
          continue;
        }
        const o2 = r2.pred.evaluate(this.parser, e2);
        if ((this.debug || this.dfa_debug) && console.log("eval pred " + r2 + "=" + o2), o2 && ((this.debug || this.dfa_debug) && console.log("PREDICT " + r2.alt), s2.set(r2.alt), !n2)) break;
      }
      return s2;
    }
    closure(t2, e2, n2, s2, i2, r2) {
      this.closureCheckingStopState(t2, e2, n2, s2, i2, 0, r2);
    }
    closureCheckingStopState(t2, e2, n2, s2, i2, r2, o2) {
      if ((this.trace_atn_sim || this.debug_closure) && console.log("closure(" + t2.toString(this.parser, true) + ")"), t2.state instanceof j) {
        if (!t2.context.isEmpty()) {
          for (let a2 = 0; a2 < t2.context.length; a2++) {
            if (t2.context.getReturnState(a2) === ct.EMPTY_RETURN_STATE) {
              if (i2) {
                e2.add(new K({ state: t2.state, context: ct.EMPTY }, t2), this.mergeCache);
                continue;
              }
              this.debug && console.log("FALLING off rule " + this.getRuleName(t2.state.ruleIndex)), this.closure_(t2, e2, n2, s2, i2, r2, o2);
              continue;
            }
            const l2 = this.atn.states[t2.context.getReturnState(a2)], h2 = t2.context.getParent(a2), c2 = { state: l2, alt: t2.alt, context: h2, semanticContext: t2.semanticContext }, u2 = new K(c2, null);
            u2.reachesIntoOuterContext = t2.reachesIntoOuterContext, this.closureCheckingStopState(u2, e2, n2, s2, i2, r2 - 1, o2);
          }
          return;
        }
        if (i2) return void e2.add(t2, this.mergeCache);
        this.debug && console.log("FALLING off rule " + this.getRuleName(t2.state.ruleIndex));
      }
      this.closure_(t2, e2, n2, s2, i2, r2, o2);
    }
    closure_(t2, e2, n2, s2, i2, r2, o2) {
      const a2 = t2.state;
      a2.epsilonOnlyTransitions || e2.add(t2, this.mergeCache);
      for (let l2 = 0; l2 < a2.transitions.length; l2++) {
        if (0 === l2 && this.canDropLoopEntryEdgeInLeftRecursiveRule(t2)) continue;
        const h2 = a2.transitions[l2], c2 = s2 && !(h2 instanceof Ft), u2 = this.getEpsilonTarget(t2, h2, c2, 0 === r2, i2, o2);
        if (null !== u2) {
          let s3 = r2;
          if (t2.state instanceof j) {
            if (null !== this._dfa && this._dfa.precedenceDfa && h2.outermostPrecedenceReturn === this._dfa.atnStartState.ruleIndex && (u2.precedenceFilterSuppressed = true), u2.reachesIntoOuterContext += 1, n2.getOrAdd(u2) !== u2) continue;
            e2.dipsIntoOuterContext = true, s3 -= 1, this.debug && console.log("dips into outer ctx: " + u2);
          } else {
            if (!h2.isEpsilon && n2.getOrAdd(u2) !== u2) continue;
            h2 instanceof X && s3 >= 0 && (s3 += 1);
          }
          this.closureCheckingStopState(u2, e2, n2, c2, i2, s3, o2);
        }
      }
    }
    canDropLoopEntryEdgeInLeftRecursiveRule(t2) {
      const e2 = t2.state;
      if (e2.stateType !== W.STAR_LOOP_ENTRY) return false;
      if (e2.stateType !== W.STAR_LOOP_ENTRY || !e2.isPrecedenceDecision || t2.context.isEmpty() || t2.context.hasEmptyPath()) return false;
      const n2 = t2.context.length;
      for (let s3 = 0; s3 < n2; s3++) if (this.atn.states[t2.context.getReturnState(s3)].ruleIndex !== e2.ruleIndex) return false;
      const s2 = e2.transitions[0].target.endState.stateNumber, i2 = this.atn.states[s2];
      for (let s3 = 0; s3 < n2; s3++) {
        const n3 = t2.context.getReturnState(s3), r2 = this.atn.states[n3];
        if (1 !== r2.transitions.length || !r2.transitions[0].isEpsilon) return false;
        const o2 = r2.transitions[0].target;
        if (!(r2.stateType === W.BLOCK_END && o2 === e2 || r2 === i2 || o2 === i2 || o2.stateType === W.BLOCK_END && 1 === o2.transitions.length && o2.transitions[0].isEpsilon && o2.transitions[0].target === e2)) return false;
      }
      return true;
    }
    getRuleName(t2) {
      return null !== this.parser && t2 >= 0 ? this.parser.ruleNames[t2] : "<rule " + t2 + ">";
    }
    getEpsilonTarget(t2, e2, n2, s2, i2, r2) {
      switch (e2.serializationType) {
        case $.RULE:
          return this.ruleTransition(t2, e2);
        case $.PRECEDENCE:
          return this.precedenceTransition(t2, e2, n2, s2, i2);
        case $.PREDICATE:
          return this.predTransition(t2, e2, n2, s2, i2);
        case $.ACTION:
          return this.actionTransition(t2, e2);
        case $.EPSILON:
          return new K({ state: e2.target }, t2);
        case $.ATOM:
        case $.RANGE:
        case $.SET:
          return r2 && e2.matches(O.EOF, 0, 1) ? new K({ state: e2.target }, t2) : null;
        default:
          return null;
      }
    }
    actionTransition(t2, e2) {
      if (this.debug) {
        const t3 = -1 === e2.actionIndex ? 65535 : e2.actionIndex;
        console.log("ACTION edge " + e2.ruleIndex + ":" + t3);
      }
      return new K({ state: e2.target }, t2);
    }
    precedenceTransition(t2, e2, n2, s2, i2) {
      this.debug && (console.log("PRED (collectPredicates=" + n2 + ") " + e2.precedence + ">=_p, ctx dependent=true"), null !== this.parser && console.log("context surrounding pred is " + M(this.parser.getRuleInvocationStack())));
      let r2 = null;
      if (n2 && s2) if (i2) {
        const n3 = this._input.index;
        this._input.seek(this._startIndex);
        const s3 = e2.getPredicate().evaluate(this.parser, this._outerContext);
        this._input.seek(n3), s3 && (r2 = new K({ state: e2.target }, t2));
      } else {
        const n3 = B.andContext(t2.semanticContext, e2.getPredicate());
        r2 = new K({ state: e2.target, semanticContext: n3 }, t2);
      }
      else r2 = new K({ state: e2.target }, t2);
      return this.debug && console.log("config from pred transition=" + r2), r2;
    }
    predTransition(t2, e2, n2, s2, i2) {
      this.debug && (console.log("PRED (collectPredicates=" + n2 + ") " + e2.ruleIndex + ":" + e2.predIndex + ", ctx dependent=" + e2.isCtxDependent), null !== this.parser && console.log("context surrounding pred is " + M(this.parser.getRuleInvocationStack())));
      let r2 = null;
      if (n2 && (e2.isCtxDependent && s2 || !e2.isCtxDependent)) if (i2) {
        const n3 = this._input.index;
        this._input.seek(this._startIndex);
        const s3 = e2.getPredicate().evaluate(this.parser, this._outerContext);
        this._input.seek(n3), s3 && (r2 = new K({ state: e2.target }, t2));
      } else {
        const n3 = B.andContext(t2.semanticContext, e2.getPredicate());
        r2 = new K({ state: e2.target, semanticContext: n3 }, t2);
      }
      else r2 = new K({ state: e2.target }, t2);
      return this.debug && console.log("config from pred transition=" + r2), r2;
    }
    ruleTransition(t2, e2) {
      this.debug && console.log("CALL rule " + this.getRuleName(e2.target.ruleIndex) + ", ctx=" + t2.context);
      const n2 = e2.followState, s2 = dt.create(t2.context, n2.stateNumber);
      return new K({ state: e2.target, context: s2 }, t2);
    }
    getConflictingAlts(t2) {
      const e2 = ke.getConflictingAltSubsets(t2);
      return ke.getAlts(e2);
    }
    getConflictingAltsOrUniqueAlt(t2) {
      let e2 = null;
      return t2.uniqueAlt !== Et.INVALID_ALT_NUMBER ? (e2 = new St(), e2.set(t2.uniqueAlt)) : e2 = t2.conflictingAlts, e2;
    }
    getTokenName(t2) {
      if (t2 === O.EOF) return "EOF";
      if (null !== this.parser && null !== this.parser.literalNames) {
        if (!(t2 >= this.parser.literalNames.length && t2 >= this.parser.symbolicNames.length)) return (this.parser.literalNames[t2] || this.parser.symbolicNames[t2]) + "<" + t2 + ">";
        console.log(t2 + " ttype out of range: " + this.parser.literalNames), console.log("" + this.parser.getInputStream().getTokens());
      }
      return "" + t2;
    }
    getLookaheadName(t2) {
      return this.getTokenName(t2.LA(1));
    }
    dumpDeadEndConfigs(t2) {
      console.log("dead end configs: ");
      const e2 = t2.getDeadEndConfigs();
      for (let t3 = 0; t3 < e2.length; t3++) {
        const n2 = e2[t3];
        let s2 = "no edges";
        if (n2.state.transitions.length > 0) {
          const t4 = n2.state.transitions[0];
          t4 instanceof Pt ? s2 = "Atom " + this.getTokenName(t4.label) : t4 instanceof J && (s2 = (t4 instanceof Z ? "~" : "") + "Set " + t4.set);
        }
        console.error(n2.toString(this.parser, true) + ":" + s2);
      }
    }
    noViableAlt(t2, e2, n2, s2) {
      return new Ie(this.parser, t2, t2.get(s2), t2.LT(1), n2, e2);
    }
    getUniqueAlt(t2) {
      let e2 = Et.INVALID_ALT_NUMBER;
      for (let n2 = 0; n2 < t2.items.length; n2++) {
        const s2 = t2.items[n2];
        if (e2 === Et.INVALID_ALT_NUMBER) e2 = s2.alt;
        else if (s2.alt !== e2) return Et.INVALID_ALT_NUMBER;
      }
      return e2;
    }
    addDFAEdge(t2, e2, n2, s2) {
      if (this.debug && console.log("EDGE " + e2 + " -> " + s2 + " upon " + this.getTokenName(n2)), null === s2) return null;
      if (s2 = this.addDFAState(t2, s2), null === e2 || n2 < -1 || n2 > this.atn.maxTokenType) return s2;
      if (null === e2.edges && (e2.edges = []), e2.edges[n2 + 1] = s2, this.debug) {
        const e3 = null === this.parser ? null : this.parser.literalNames, n3 = null === this.parser ? null : this.parser.symbolicNames;
        console.log("DFA=\n" + t2.toString(e3, n3));
      }
      return s2;
    }
    addDFAState(t2, e2) {
      if (e2 === pe.ERROR) return e2;
      const n2 = t2.states.get(e2);
      return null !== n2 ? (this.trace_atn_sim && console.log("addDFAState " + e2 + " exists"), n2) : (e2.stateNumber = t2.states.length, e2.configs.readOnly || (e2.configs.optimizeConfigs(this), e2.configs.setReadonly(true)), this.trace_atn_sim && console.log("addDFAState new " + e2), t2.states.add(e2), this.debug && console.log("adding new DFA state: " + e2), e2);
    }
    reportAttemptingFullContext(t2, e2, n2, s2, i2) {
      if (this.debug || this.retry_debug) {
        const e3 = new Y(s2, i2 + 1);
        console.log("reportAttemptingFullContext decision=" + t2.decision + ":" + n2 + ", input=" + this.parser.getTokenStream().getText(e3));
      }
      null !== this.parser && this.parser.getErrorListener().reportAttemptingFullContext(this.parser, t2, s2, i2, e2, n2);
    }
    reportContextSensitivity(t2, e2, n2, s2, i2) {
      if (this.debug || this.retry_debug) {
        const e3 = new Y(s2, i2 + 1);
        console.log("reportContextSensitivity decision=" + t2.decision + ":" + n2 + ", input=" + this.parser.getTokenStream().getText(e3));
      }
      null !== this.parser && this.parser.getErrorListener().reportContextSensitivity(this.parser, t2, s2, i2, e2, n2);
    }
    reportAmbiguity(t2, e2, n2, s2, i2, r2, o2) {
      if (this.debug || this.retry_debug) {
        const t3 = new Y(n2, s2 + 1);
        console.log("reportAmbiguity " + r2 + ":" + o2 + ", input=" + this.parser.getTokenStream().getText(t3));
      }
      null !== this.parser && this.parser.getErrorListener().reportAmbiguity(this.parser, t2, n2, s2, i2, r2, o2);
    }
  };
  var Oe = class {
    constructor() {
      this.cache = new pt();
    }
    add(t2) {
      if (t2 === ct.EMPTY) return ct.EMPTY;
      const e2 = this.cache.get(t2) || null;
      return null !== e2 ? e2 : (this.cache.set(t2, t2), t2);
    }
    get(t2) {
      return this.cache.get(t2) || null;
    }
    get length() {
      return this.cache.length;
    }
  };
  var we = { ATN: Et, ATNDeserializer: Qt, LexerATNSimulator: _e, ParserATNSimulator: Le, PredictionMode: ke, PredictionContextCache: Oe };
  var Re = class {
    constructor(t2, e2, n2) {
      this.dfa = t2, this.literalNames = e2 || [], this.symbolicNames = n2 || [];
    }
    toString() {
      if (null === this.dfa.s0) return null;
      let t2 = "";
      const e2 = this.dfa.sortedStates();
      for (let n2 = 0; n2 < e2.length; n2++) {
        const s2 = e2[n2];
        if (null !== s2.edges) {
          const e3 = s2.edges.length;
          for (let n3 = 0; n3 < e3; n3++) {
            const e4 = s2.edges[n3] || null;
            null !== e4 && 2147483647 !== e4.stateNumber && (t2 = t2.concat(this.getStateString(s2)), t2 = t2.concat("-"), t2 = t2.concat(this.getEdgeLabel(n3)), t2 = t2.concat("->"), t2 = t2.concat(this.getStateString(e4)), t2 = t2.concat("\n"));
          }
        }
      }
      return 0 === t2.length ? null : t2;
    }
    getEdgeLabel(t2) {
      return 0 === t2 ? "EOF" : null !== this.literalNames || null !== this.symbolicNames ? this.literalNames[t2 - 1] || this.symbolicNames[t2 - 1] : String.fromCharCode(t2 - 1);
    }
    getStateString(t2) {
      const e2 = (t2.isAcceptState ? ":" : "") + "s" + t2.stateNumber + (t2.requiresFullContext ? "^" : "");
      return t2.isAcceptState ? null !== t2.predicates ? e2 + "=>" + M(t2.predicates) : e2 + "=>" + t2.prediction.toString() : e2;
    }
  };
  var ve = class extends Re {
    constructor(t2) {
      super(t2, null);
    }
    getEdgeLabel(t2) {
      return "'" + String.fromCharCode(t2) + "'";
    }
  };
  var be = class {
    constructor(t2, e2) {
      if (void 0 === e2 && (e2 = 0), this.atnStartState = t2, this.decision = e2, this._states = new U(), this.s0 = null, this.precedenceDfa = false, t2 instanceof wt && t2.isPrecedenceDecision) {
        this.precedenceDfa = true;
        const t3 = new ge(null, new de());
        t3.edges = [], t3.isAcceptState = false, t3.requiresFullContext = false, this.s0 = t3;
      }
    }
    getPrecedenceStartState(t2) {
      if (!this.precedenceDfa) throw "Only precedence DFAs may contain a precedence start state.";
      return t2 < 0 || t2 >= this.s0.edges.length ? null : this.s0.edges[t2] || null;
    }
    setPrecedenceStartState(t2, e2) {
      if (!this.precedenceDfa) throw "Only precedence DFAs may contain a precedence start state.";
      t2 < 0 || (this.s0.edges[t2] = e2);
    }
    setPrecedenceDfa(t2) {
      if (this.precedenceDfa !== t2) {
        if (this._states = new U(), t2) {
          const t3 = new ge(null, new de());
          t3.edges = [], t3.isAcceptState = false, t3.requiresFullContext = false, this.s0 = t3;
        } else this.s0 = null;
        this.precedenceDfa = t2;
      }
    }
    sortedStates() {
      return this._states.values().sort((function(t2, e2) {
        return t2.stateNumber - e2.stateNumber;
      }));
    }
    toString(t2, e2) {
      return t2 = t2 || null, e2 = e2 || null, null === this.s0 ? "" : new Re(this, t2, e2).toString();
    }
    toLexerString() {
      return null === this.s0 ? "" : new ve(this).toString();
    }
    get states() {
      return this._states;
    }
  };
  var Pe = { DFA: be, DFASerializer: Re, LexerDFASerializer: ve, PredPrediction: Ae };
  var De = { PredictionContext: ct };
  var Fe = { Interval: Y, IntervalSet: G };
  var Me = class {
    visitTerminal(t2) {
    }
    visitErrorNode(t2) {
    }
    enterEveryRule(t2) {
    }
    exitEveryRule(t2) {
    }
  };
  var Ue = class {
    visit(t2) {
      return Array.isArray(t2) ? t2.map((function(t3) {
        return t3.accept(this);
      }), this) : t2.accept(this);
    }
    visitChildren(t2) {
      return t2.children ? this.visit(t2.children) : null;
    }
    visitTerminal(t2) {
    }
    visitErrorNode(t2) {
    }
  };
  var Be = class {
    walk(t2, e2) {
      if (e2 instanceof ot || void 0 !== e2.isErrorNode && e2.isErrorNode()) t2.visitErrorNode(e2);
      else if (e2 instanceof rt) t2.visitTerminal(e2);
      else {
        this.enterRule(t2, e2);
        for (let n2 = 0; n2 < e2.getChildCount(); n2++) {
          const s2 = e2.getChild(n2);
          this.walk(t2, s2);
        }
        this.exitRule(t2, e2);
      }
    }
    enterRule(t2, e2) {
      const n2 = e2.ruleContext;
      t2.enterEveryRule(n2), n2.enterRule(t2);
    }
    exitRule(t2, e2) {
      const n2 = e2.ruleContext;
      n2.exitRule(t2), t2.exitEveryRule(n2);
    }
  };
  Be.DEFAULT = new Be();
  var ze = { Trees: lt, RuleNode: it, ErrorNode: ot, TerminalNode: rt, ParseTreeListener: Me, ParseTreeVisitor: Ue, ParseTreeWalker: Be };
  var Ve = class extends ae {
    constructor(t2) {
      super({ message: "", recognizer: t2, input: t2.getInputStream(), ctx: t2._ctx }), this.offendingToken = t2.getCurrentToken();
    }
  };
  var qe = class extends ae {
    constructor(t2, e2, n2) {
      super({ message: He(e2, n2 || null), recognizer: t2, input: t2.getInputStream(), ctx: t2._ctx });
      const s2 = t2._interp.atn.states[t2.state].transitions[0];
      s2 instanceof Bt ? (this.ruleIndex = s2.ruleIndex, this.predicateIndex = s2.predIndex) : (this.ruleIndex = 0, this.predicateIndex = 0), this.predicate = e2, this.offendingToken = t2.getCurrentToken();
    }
  };
  function He(t2, e2) {
    return null !== e2 ? e2 : "failed predicate: {" + t2 + "}?";
  }
  var Ke = class extends te {
    constructor(t2) {
      super(), t2 = t2 || true, this.exactOnly = t2;
    }
    reportAmbiguity(t2, e2, n2, s2, i2, r2, o2) {
      if (this.exactOnly && !i2) return;
      const a2 = "reportAmbiguity d=" + this.getDecisionDescription(t2, e2) + ": ambigAlts=" + this.getConflictingAlts(r2, o2) + ", input='" + t2.getTokenStream().getText(new Y(n2, s2)) + "'";
      t2.notifyErrorListeners(a2);
    }
    reportAttemptingFullContext(t2, e2, n2, s2, i2, r2) {
      const o2 = "reportAttemptingFullContext d=" + this.getDecisionDescription(t2, e2) + ", input='" + t2.getTokenStream().getText(new Y(n2, s2)) + "'";
      t2.notifyErrorListeners(o2);
    }
    reportContextSensitivity(t2, e2, n2, s2, i2, r2) {
      const o2 = "reportContextSensitivity d=" + this.getDecisionDescription(t2, e2) + ", input='" + t2.getTokenStream().getText(new Y(n2, s2)) + "'";
      t2.notifyErrorListeners(o2);
    }
    getDecisionDescription(t2, e2) {
      const n2 = e2.decision, s2 = e2.atnStartState.ruleIndex, i2 = t2.ruleNames;
      if (s2 < 0 || s2 >= i2.length) return "" + n2;
      const r2 = i2[s2] || null;
      return null === r2 || 0 === r2.length ? "" + n2 : `${n2} (${r2})`;
    }
    getConflictingAlts(t2, e2) {
      if (null !== t2) return t2;
      const n2 = new St();
      for (let t3 = 0; t3 < e2.items.length; t3++) n2.set(e2.items[t3].alt);
      return `{${n2.values().join(", ")}}`;
    }
  };
  var Ye = class _Ye extends Error {
    constructor() {
      super(), Error.captureStackTrace(this, _Ye);
    }
  };
  var Ge = class {
    reset(t2) {
    }
    recoverInline(t2) {
    }
    recover(t2, e2) {
    }
    sync(t2) {
    }
    inErrorRecoveryMode(t2) {
    }
    reportError(t2) {
    }
  };
  var We = class extends Ge {
    constructor() {
      super(), this.errorRecoveryMode = false, this.lastErrorIndex = -1, this.lastErrorStates = null, this.nextTokensContext = null, this.nextTokenState = 0;
    }
    reset(t2) {
      this.endErrorCondition(t2);
    }
    beginErrorCondition(t2) {
      this.errorRecoveryMode = true;
    }
    inErrorRecoveryMode(t2) {
      return this.errorRecoveryMode;
    }
    endErrorCondition(t2) {
      this.errorRecoveryMode = false, this.lastErrorStates = null, this.lastErrorIndex = -1;
    }
    reportMatch(t2) {
      this.endErrorCondition(t2);
    }
    reportError(t2, e2) {
      this.inErrorRecoveryMode(t2) || (this.beginErrorCondition(t2), e2 instanceof Ie ? this.reportNoViableAlternative(t2, e2) : e2 instanceof Ve ? this.reportInputMismatch(t2, e2) : e2 instanceof qe ? this.reportFailedPredicate(t2, e2) : (console.log("unknown recognition error type: " + e2.constructor.name), console.log(e2.stack), t2.notifyErrorListeners(e2.getOffendingToken(), e2.getMessage(), e2)));
    }
    recover(t2, e2) {
      this.lastErrorIndex === t2.getInputStream().index && null !== this.lastErrorStates && this.lastErrorStates.indexOf(t2.state) >= 0 && t2.consume(), this.lastErrorIndex = t2._input.index, null === this.lastErrorStates && (this.lastErrorStates = []), this.lastErrorStates.push(t2.state);
      const n2 = this.getErrorRecoverySet(t2);
      this.consumeUntil(t2, n2);
    }
    sync(t2) {
      if (this.inErrorRecoveryMode(t2)) return;
      const e2 = t2._interp.atn.states[t2.state], n2 = t2.getTokenStream().LA(1), s2 = t2.atn.nextTokens(e2);
      if (s2.contains(n2)) return this.nextTokensContext = null, void (this.nextTokenState = W.INVALID_STATE_NUMBER);
      if (s2.contains(O.EPSILON)) null === this.nextTokensContext && (this.nextTokensContext = t2._ctx, this.nextTokensState = t2._stateNumber);
      else switch (e2.stateType) {
        case W.BLOCK_START:
        case W.STAR_BLOCK_START:
        case W.PLUS_BLOCK_START:
        case W.STAR_LOOP_ENTRY:
          if (null !== this.singleTokenDeletion(t2)) return;
          throw new Ve(t2);
        case W.PLUS_LOOP_BACK:
        case W.STAR_LOOP_BACK: {
          this.reportUnwantedToken(t2);
          const e3 = new G();
          e3.addSet(t2.getExpectedTokens());
          const n3 = e3.addSet(this.getErrorRecoverySet(t2));
          this.consumeUntil(t2, n3);
        }
      }
    }
    reportNoViableAlternative(t2, e2) {
      const n2 = t2.getTokenStream();
      let s2;
      s2 = null !== n2 ? e2.startToken.type === O.EOF ? "<EOF>" : n2.getText(new Y(e2.startToken.tokenIndex, e2.offendingToken.tokenIndex)) : "<unknown input>";
      const i2 = "no viable alternative at input " + this.escapeWSAndQuote(s2);
      t2.notifyErrorListeners(i2, e2.offendingToken, e2);
    }
    reportInputMismatch(t2, e2) {
      const n2 = "mismatched input " + this.getTokenErrorDisplay(e2.offendingToken) + " expecting " + e2.getExpectedTokens().toString(t2.literalNames, t2.symbolicNames);
      t2.notifyErrorListeners(n2, e2.offendingToken, e2);
    }
    reportFailedPredicate(t2, e2) {
      const n2 = "rule " + t2.ruleNames[t2._ctx.ruleIndex] + " " + e2.message;
      t2.notifyErrorListeners(n2, e2.offendingToken, e2);
    }
    reportUnwantedToken(t2) {
      if (this.inErrorRecoveryMode(t2)) return;
      this.beginErrorCondition(t2);
      const e2 = t2.getCurrentToken(), n2 = "extraneous input " + this.getTokenErrorDisplay(e2) + " expecting " + this.getExpectedTokens(t2).toString(t2.literalNames, t2.symbolicNames);
      t2.notifyErrorListeners(n2, e2, null);
    }
    reportMissingToken(t2) {
      if (this.inErrorRecoveryMode(t2)) return;
      this.beginErrorCondition(t2);
      const e2 = t2.getCurrentToken(), n2 = "missing " + this.getExpectedTokens(t2).toString(t2.literalNames, t2.symbolicNames) + " at " + this.getTokenErrorDisplay(e2);
      t2.notifyErrorListeners(n2, e2, null);
    }
    recoverInline(t2) {
      const e2 = this.singleTokenDeletion(t2);
      if (null !== e2) return t2.consume(), e2;
      if (this.singleTokenInsertion(t2)) return this.getMissingSymbol(t2);
      throw new Ve(t2);
    }
    singleTokenInsertion(t2) {
      const e2 = t2.getTokenStream().LA(1), n2 = t2._interp.atn, s2 = n2.states[t2.state].transitions[0].target;
      return !!n2.nextTokens(s2, t2._ctx).contains(e2) && (this.reportMissingToken(t2), true);
    }
    singleTokenDeletion(t2) {
      const e2 = t2.getTokenStream().LA(2);
      if (this.getExpectedTokens(t2).contains(e2)) {
        this.reportUnwantedToken(t2), t2.consume();
        const e3 = t2.getCurrentToken();
        return this.reportMatch(t2), e3;
      }
      return null;
    }
    getMissingSymbol(t2) {
      const e2 = t2.getCurrentToken(), n2 = this.getExpectedTokens(t2).first();
      let s2;
      s2 = n2 === O.EOF ? "<missing EOF>" : "<missing " + t2.literalNames[n2] + ">";
      let i2 = e2;
      const r2 = t2.getTokenStream().LT(-1);
      return i2.type === O.EOF && null !== r2 && (i2 = r2), t2.getTokenFactory().create(i2.source, n2, s2, O.DEFAULT_CHANNEL, -1, -1, i2.line, i2.column);
    }
    getExpectedTokens(t2) {
      return t2.getExpectedTokens();
    }
    getTokenErrorDisplay(t2) {
      if (null === t2) return "<no token>";
      let e2 = t2.text;
      return null === e2 && (e2 = t2.type === O.EOF ? "<EOF>" : "<" + t2.type + ">"), this.escapeWSAndQuote(e2);
    }
    escapeWSAndQuote(t2) {
      return "'" + (t2 = (t2 = (t2 = t2.replace(/\n/g, "\\n")).replace(/\r/g, "\\r")).replace(/\t/g, "\\t")) + "'";
    }
    getErrorRecoverySet(t2) {
      const e2 = t2._interp.atn;
      let n2 = t2._ctx;
      const s2 = new G();
      for (; null !== n2 && n2.invokingState >= 0; ) {
        const t3 = e2.states[n2.invokingState].transitions[0], i2 = e2.nextTokens(t3.followState);
        s2.addSet(i2), n2 = n2.parentCtx;
      }
      return s2.removeOne(O.EPSILON), s2;
    }
    consumeUntil(t2, e2) {
      let n2 = t2.getTokenStream().LA(1);
      for (; n2 !== O.EOF && !e2.contains(n2); ) t2.consume(), n2 = t2.getTokenStream().LA(1);
    }
  };
  var je = class extends We {
    constructor() {
      super();
    }
    recover(t2, e2) {
      let n2 = t2._ctx;
      for (; null !== n2; ) n2.exception = e2, n2 = n2.parentCtx;
      throw new Ye(e2);
    }
    recoverInline(t2) {
      this.recover(t2, new Ve(t2));
    }
    sync(t2) {
    }
  };
  var $e = { RecognitionException: ae, NoViableAltException: Ie, LexerNoViableAltException: le, InputMismatchException: Ve, FailedPredicateException: qe, DiagnosticErrorListener: Ke, BailErrorStrategy: je, DefaultErrorStrategy: We, ErrorListener: te };
  var Xe = class {
    constructor(t2, e2) {
      if (this.name = "<empty>", this.strdata = t2, this.decodeToUnicodeCodePoints = e2 || false, this._index = 0, this.data = [], this.decodeToUnicodeCodePoints) for (let t3 = 0; t3 < this.strdata.length; ) {
        const e3 = this.strdata.codePointAt(t3);
        this.data.push(e3), t3 += e3 <= 65535 ? 1 : 2;
      }
      else {
        this.data = new Array(this.strdata.length);
        for (let t3 = 0; t3 < this.strdata.length; t3++) this.data[t3] = this.strdata.charCodeAt(t3);
      }
      this._size = this.data.length;
    }
    reset() {
      this._index = 0;
    }
    consume() {
      if (this._index >= this._size) throw "cannot consume EOF";
      this._index += 1;
    }
    LA(t2) {
      if (0 === t2) return 0;
      t2 < 0 && (t2 += 1);
      const e2 = this._index + t2 - 1;
      return e2 < 0 || e2 >= this._size ? O.EOF : this.data[e2];
    }
    LT(t2) {
      return this.LA(t2);
    }
    mark() {
      return -1;
    }
    release(t2) {
    }
    seek(t2) {
      t2 <= this._index ? this._index = t2 : this._index = Math.min(t2, this._size);
    }
    getText(t2, e2) {
      if (e2 >= this._size && (e2 = this._size - 1), t2 >= this._size) return "";
      if (this.decodeToUnicodeCodePoints) {
        let n2 = "";
        for (let s2 = t2; s2 <= e2; s2++) n2 += String.fromCodePoint(this.data[s2]);
        return n2;
      }
      return this.strdata.slice(t2, e2 + 1);
    }
    toString() {
      return this.strdata;
    }
    get index() {
      return this._index;
    }
    get size() {
      return this._size;
    }
  };
  var Je = class extends Xe {
    constructor(t2, e2) {
      super(t2, e2);
    }
  };
  var Ze = y(763);
  var Qe = void 0 !== N && null != N.versions && null != N.versions.node;
  var tn = class extends Je {
    static fromPath(t2, e2, n2) {
      if (!Qe) throw new Error("FileStream is only available when running in Node!");
      Ze.readFile(t2, e2, (function(t3, e3) {
        let s2 = null;
        null !== e3 && (s2 = new Xe(e3, true)), n2(t3, s2);
      }));
    }
    constructor(t2, e2, n2) {
      if (!Qe) throw new Error("FileStream is only available when running in Node!");
      super(Ze.readFileSync(t2, e2 || "utf-8"), n2), this.fileName = t2;
    }
  };
  var en = { fromString: function(t2) {
    return new Xe(t2, true);
  }, fromBlob: function(t2, e2, n2, s2) {
    const i2 = new window.FileReader();
    i2.onload = function(t3) {
      const e3 = new Xe(t3.target.result, true);
      n2(e3);
    }, i2.onerror = s2, i2.readAsText(t2, e2);
  }, fromBuffer: function(t2, e2) {
    return new Xe(t2.toString(e2), true);
  }, fromPath: function(t2, e2, n2) {
    tn.fromPath(t2, e2, n2);
  }, fromPathSync: function(t2, e2) {
    return new tn(t2, e2);
  } };
  var nn = { arrayToString: M, stringToCharArray: function(t2) {
    let e2 = new Uint16Array(t2.length);
    for (let n2 = 0; n2 < t2.length; n2++) e2[n2] = t2.charCodeAt(n2);
    return e2;
  } };
  var sn = class {
  };
  var rn = class extends sn {
    constructor(t2) {
      super(), this.tokenSource = t2, this.tokens = [], this.index = -1, this.fetchedEOF = false;
    }
    mark() {
      return 0;
    }
    release(t2) {
    }
    reset() {
      this.seek(0);
    }
    seek(t2) {
      this.lazyInit(), this.index = this.adjustSeekIndex(t2);
    }
    get size() {
      return this.tokens.length;
    }
    get(t2) {
      return this.lazyInit(), this.tokens[t2];
    }
    consume() {
      let t2 = false;
      if (t2 = this.index >= 0 && (this.fetchedEOF ? this.index < this.tokens.length - 1 : this.index < this.tokens.length), !t2 && this.LA(1) === O.EOF) throw "cannot consume EOF";
      this.sync(this.index + 1) && (this.index = this.adjustSeekIndex(this.index + 1));
    }
    sync(t2) {
      const e2 = t2 - this.tokens.length + 1;
      return !(e2 > 0) || this.fetch(e2) >= e2;
    }
    fetch(t2) {
      if (this.fetchedEOF) return 0;
      for (let e2 = 0; e2 < t2; e2++) {
        const t3 = this.tokenSource.nextToken();
        if (t3.tokenIndex = this.tokens.length, this.tokens.push(t3), t3.type === O.EOF) return this.fetchedEOF = true, e2 + 1;
      }
      return t2;
    }
    getTokens(t2, e2, n2) {
      if (void 0 === n2 && (n2 = null), t2 < 0 || e2 < 0) return null;
      this.lazyInit();
      const s2 = [];
      e2 >= this.tokens.length && (e2 = this.tokens.length - 1);
      for (let i2 = t2; i2 < e2; i2++) {
        const t3 = this.tokens[i2];
        if (t3.type === O.EOF) break;
        (null === n2 || n2.contains(t3.type)) && s2.push(t3);
      }
      return s2;
    }
    LA(t2) {
      return this.LT(t2).type;
    }
    LB(t2) {
      return this.index - t2 < 0 ? null : this.tokens[this.index - t2];
    }
    LT(t2) {
      if (this.lazyInit(), 0 === t2) return null;
      if (t2 < 0) return this.LB(-t2);
      const e2 = this.index + t2 - 1;
      return this.sync(e2), e2 >= this.tokens.length ? this.tokens[this.tokens.length - 1] : this.tokens[e2];
    }
    adjustSeekIndex(t2) {
      return t2;
    }
    lazyInit() {
      -1 === this.index && this.setup();
    }
    setup() {
      this.sync(0), this.index = this.adjustSeekIndex(0);
    }
    setTokenSource(t2) {
      this.tokenSource = t2, this.tokens = [], this.index = -1, this.fetchedEOF = false;
    }
    nextTokenOnChannel(t2, e2) {
      if (this.sync(t2), t2 >= this.tokens.length) return -1;
      let n2 = this.tokens[t2];
      for (; n2.channel !== e2; ) {
        if (n2.type === O.EOF) return -1;
        t2 += 1, this.sync(t2), n2 = this.tokens[t2];
      }
      return t2;
    }
    previousTokenOnChannel(t2, e2) {
      for (; t2 >= 0 && this.tokens[t2].channel !== e2; ) t2 -= 1;
      return t2;
    }
    getHiddenTokensToRight(t2, e2) {
      if (void 0 === e2 && (e2 = -1), this.lazyInit(), t2 < 0 || t2 >= this.tokens.length) throw t2 + " not in 0.." + this.tokens.length - 1;
      const n2 = this.nextTokenOnChannel(t2 + 1, he.DEFAULT_TOKEN_CHANNEL), s2 = t2 + 1, i2 = -1 === n2 ? this.tokens.length - 1 : n2;
      return this.filterForChannel(s2, i2, e2);
    }
    getHiddenTokensToLeft(t2, e2) {
      if (void 0 === e2 && (e2 = -1), this.lazyInit(), t2 < 0 || t2 >= this.tokens.length) throw t2 + " not in 0.." + this.tokens.length - 1;
      const n2 = this.previousTokenOnChannel(t2 - 1, he.DEFAULT_TOKEN_CHANNEL);
      if (n2 === t2 - 1) return null;
      const s2 = n2 + 1, i2 = t2 - 1;
      return this.filterForChannel(s2, i2, e2);
    }
    filterForChannel(t2, e2, n2) {
      const s2 = [];
      for (let i2 = t2; i2 < e2 + 1; i2++) {
        const t3 = this.tokens[i2];
        -1 === n2 ? t3.channel !== he.DEFAULT_TOKEN_CHANNEL && s2.push(t3) : t3.channel === n2 && s2.push(t3);
      }
      return 0 === s2.length ? null : s2;
    }
    getSourceName() {
      return this.tokenSource.getSourceName();
    }
    getText(t2) {
      this.lazyInit(), this.fill(), t2 || (t2 = new Y(0, this.tokens.length - 1));
      let e2 = t2.start;
      e2 instanceof O && (e2 = e2.tokenIndex);
      let n2 = t2.stop;
      if (n2 instanceof O && (n2 = n2.tokenIndex), null === e2 || null === n2 || e2 < 0 || n2 < 0) return "";
      n2 >= this.tokens.length && (n2 = this.tokens.length - 1);
      let s2 = "";
      for (let t3 = e2; t3 < n2 + 1; t3++) {
        const e3 = this.tokens[t3];
        if (e3.type === O.EOF) break;
        s2 += e3.text;
      }
      return s2;
    }
    fill() {
      for (this.lazyInit(); 1e3 === this.fetch(1e3); ) ;
    }
  };
  Object.defineProperty(rn, "size", { get: function() {
    return this.tokens.length;
  } });
  var on = class extends rn {
    constructor(t2, e2) {
      super(t2), this.channel = void 0 === e2 ? O.DEFAULT_CHANNEL : e2;
    }
    adjustSeekIndex(t2) {
      return this.nextTokenOnChannel(t2, this.channel);
    }
    LB(t2) {
      if (0 === t2 || this.index - t2 < 0) return null;
      let e2 = this.index, n2 = 1;
      for (; n2 <= t2; ) e2 = this.previousTokenOnChannel(e2 - 1, this.channel), n2 += 1;
      return e2 < 0 ? null : this.tokens[e2];
    }
    LT(t2) {
      if (this.lazyInit(), 0 === t2) return null;
      if (t2 < 0) return this.LB(-t2);
      let e2 = this.index, n2 = 1;
      for (; n2 < t2; ) this.sync(e2 + 1) && (e2 = this.nextTokenOnChannel(e2 + 1, this.channel)), n2 += 1;
      return this.tokens[e2];
    }
    getNumberOfOnChannelTokens() {
      let t2 = 0;
      this.fill();
      for (let e2 = 0; e2 < this.tokens.length; e2++) {
        const n2 = this.tokens[e2];
        if (n2.channel === this.channel && (t2 += 1), n2.type === O.EOF) break;
      }
      return t2;
    }
  };
  var an = class extends Me {
    constructor(t2) {
      super(), this.parser = t2;
    }
    enterEveryRule(t2) {
      console.log("enter   " + this.parser.ruleNames[t2.ruleIndex] + ", LT(1)=" + this.parser._input.LT(1).text);
    }
    visitTerminal(t2) {
      console.log("consume " + t2.symbol + " rule " + this.parser.ruleNames[this.parser._ctx.ruleIndex]);
    }
    exitEveryRule(t2) {
      console.log("exit    " + this.parser.ruleNames[t2.ruleIndex] + ", LT(1)=" + this.parser._input.LT(1).text);
    }
  };
  var ln = class extends se {
    constructor(t2) {
      super(), this._input = null, this._errHandler = new We(), this._precedenceStack = [], this._precedenceStack.push(0), this._ctx = null, this.buildParseTrees = true, this._tracer = null, this._parseListeners = null, this._syntaxErrors = 0, this.setInputStream(t2);
    }
    reset() {
      null !== this._input && this._input.seek(0), this._errHandler.reset(this), this._ctx = null, this._syntaxErrors = 0, this.setTrace(false), this._precedenceStack = [], this._precedenceStack.push(0), null !== this._interp && this._interp.reset();
    }
    match(t2) {
      let e2 = this.getCurrentToken();
      return e2.type === t2 ? (this._errHandler.reportMatch(this), this.consume()) : (e2 = this._errHandler.recoverInline(this), this.buildParseTrees && -1 === e2.tokenIndex && this._ctx.addErrorNode(e2)), e2;
    }
    matchWildcard() {
      let t2 = this.getCurrentToken();
      return t2.type > 0 ? (this._errHandler.reportMatch(this), this.consume()) : (t2 = this._errHandler.recoverInline(this), this.buildParseTrees && -1 === t2.tokenIndex && this._ctx.addErrorNode(t2)), t2;
    }
    getParseListeners() {
      return this._parseListeners || [];
    }
    addParseListener(t2) {
      if (null === t2) throw "listener";
      null === this._parseListeners && (this._parseListeners = []), this._parseListeners.push(t2);
    }
    removeParseListener(t2) {
      if (null !== this._parseListeners) {
        const e2 = this._parseListeners.indexOf(t2);
        e2 >= 0 && this._parseListeners.splice(e2, 1), 0 === this._parseListeners.length && (this._parseListeners = null);
      }
    }
    removeParseListeners() {
      this._parseListeners = null;
    }
    triggerEnterRuleEvent() {
      if (null !== this._parseListeners) {
        const t2 = this._ctx;
        this._parseListeners.forEach((function(e2) {
          e2.enterEveryRule(t2), t2.enterRule(e2);
        }));
      }
    }
    triggerExitRuleEvent() {
      if (null !== this._parseListeners) {
        const t2 = this._ctx;
        this._parseListeners.slice(0).reverse().forEach((function(e2) {
          t2.exitRule(e2), e2.exitEveryRule(t2);
        }));
      }
    }
    getTokenFactory() {
      return this._input.tokenSource._factory;
    }
    setTokenFactory(t2) {
      this._input.tokenSource._factory = t2;
    }
    getATNWithBypassAlts() {
      const t2 = this.getSerializedATN();
      if (null === t2) throw "The current parser does not support an ATN with bypass alternatives.";
      let e2 = this.bypassAltsAtnCache[t2];
      if (null === e2) {
        const n2 = new qt();
        n2.generateRuleBypassTransitions = true, e2 = new Qt(n2).deserialize(t2), this.bypassAltsAtnCache[t2] = e2;
      }
      return e2;
    }
    getInputStream() {
      return this.getTokenStream();
    }
    setInputStream(t2) {
      this.setTokenStream(t2);
    }
    getTokenStream() {
      return this._input;
    }
    setTokenStream(t2) {
      this._input = null, this.reset(), this._input = t2;
    }
    get syntaxErrorsCount() {
      return this._syntaxErrors;
    }
    getCurrentToken() {
      return this._input.LT(1);
    }
    notifyErrorListeners(t2, e2, n2) {
      n2 = n2 || null, null === (e2 = e2 || null) && (e2 = this.getCurrentToken()), this._syntaxErrors += 1;
      const s2 = e2.line, i2 = e2.column;
      this.getErrorListener().syntaxError(this, e2, s2, i2, t2, n2);
    }
    consume() {
      const t2 = this.getCurrentToken();
      t2.type !== O.EOF && this.getInputStream().consume();
      const e2 = null !== this._parseListeners && this._parseListeners.length > 0;
      if (this.buildParseTrees || e2) {
        let n2;
        n2 = this._errHandler.inErrorRecoveryMode(this) ? this._ctx.addErrorNode(t2) : this._ctx.addTokenNode(t2), n2.invokingState = this.state, e2 && this._parseListeners.forEach((function(t3) {
          n2 instanceof ot || void 0 !== n2.isErrorNode && n2.isErrorNode() ? t3.visitErrorNode(n2) : n2 instanceof rt && t3.visitTerminal(n2);
        }));
      }
      return t2;
    }
    addContextToParseTree() {
      null !== this._ctx.parentCtx && this._ctx.parentCtx.addChild(this._ctx);
    }
    enterRule(t2, e2, n2) {
      this.state = e2, this._ctx = t2, this._ctx.start = this._input.LT(1), this.buildParseTrees && this.addContextToParseTree(), this.triggerEnterRuleEvent();
    }
    exitRule() {
      this._ctx.stop = this._input.LT(-1), this.triggerExitRuleEvent(), this.state = this._ctx.invokingState, this._ctx = this._ctx.parentCtx;
    }
    enterOuterAlt(t2, e2) {
      t2.setAltNumber(e2), this.buildParseTrees && this._ctx !== t2 && null !== this._ctx.parentCtx && (this._ctx.parentCtx.removeLastChild(), this._ctx.parentCtx.addChild(t2)), this._ctx = t2;
    }
    getPrecedence() {
      return 0 === this._precedenceStack.length ? -1 : this._precedenceStack[this._precedenceStack.length - 1];
    }
    enterRecursionRule(t2, e2, n2, s2) {
      this.state = e2, this._precedenceStack.push(s2), this._ctx = t2, this._ctx.start = this._input.LT(1), this.triggerEnterRuleEvent();
    }
    pushNewRecursionContext(t2, e2, n2) {
      const s2 = this._ctx;
      s2.parentCtx = t2, s2.invokingState = e2, s2.stop = this._input.LT(-1), this._ctx = t2, this._ctx.start = s2.start, this.buildParseTrees && this._ctx.addChild(s2), this.triggerEnterRuleEvent();
    }
    unrollRecursionContexts(t2) {
      this._precedenceStack.pop(), this._ctx.stop = this._input.LT(-1);
      const e2 = this._ctx, n2 = this.getParseListeners();
      if (null !== n2 && n2.length > 0) for (; this._ctx !== t2; ) this.triggerExitRuleEvent(), this._ctx = this._ctx.parentCtx;
      else this._ctx = t2;
      e2.parentCtx = t2, this.buildParseTrees && null !== t2 && t2.addChild(e2);
    }
    getInvokingContext(t2) {
      let e2 = this._ctx;
      for (; null !== e2; ) {
        if (e2.ruleIndex === t2) return e2;
        e2 = e2.parentCtx;
      }
      return null;
    }
    precpred(t2, e2) {
      return e2 >= this._precedenceStack[this._precedenceStack.length - 1];
    }
    inContext(t2) {
      return false;
    }
    isExpectedToken(t2) {
      const e2 = this._interp.atn;
      let n2 = this._ctx;
      const s2 = e2.states[this.state];
      let i2 = e2.nextTokens(s2);
      if (i2.contains(t2)) return true;
      if (!i2.contains(O.EPSILON)) return false;
      for (; null !== n2 && n2.invokingState >= 0 && i2.contains(O.EPSILON); ) {
        const s3 = e2.states[n2.invokingState].transitions[0];
        if (i2 = e2.nextTokens(s3.followState), i2.contains(t2)) return true;
        n2 = n2.parentCtx;
      }
      return !(!i2.contains(O.EPSILON) || t2 !== O.EOF);
    }
    getExpectedTokens() {
      return this._interp.atn.getExpectedTokens(this.state, this._ctx);
    }
    getExpectedTokensWithinCurrentRule() {
      const t2 = this._interp.atn, e2 = t2.states[this.state];
      return t2.nextTokens(e2);
    }
    getRuleIndex(t2) {
      const e2 = this.getRuleIndexMap()[t2];
      return null !== e2 ? e2 : -1;
    }
    getRuleInvocationStack(t2) {
      null === (t2 = t2 || null) && (t2 = this._ctx);
      const e2 = [];
      for (; null !== t2; ) {
        const n2 = t2.ruleIndex;
        n2 < 0 ? e2.push("n/a") : e2.push(this.ruleNames[n2]), t2 = t2.parentCtx;
      }
      return e2;
    }
    getDFAStrings() {
      return this._interp.decisionToDFA.toString();
    }
    dumpDFA() {
      let t2 = false;
      for (let e2 = 0; e2 < this._interp.decisionToDFA.length; e2++) {
        const n2 = this._interp.decisionToDFA[e2];
        n2.states.length > 0 && (t2 && console.log(), this.printer.println("Decision " + n2.decision + ":"), this.printer.print(n2.toString(this.literalNames, this.symbolicNames)), t2 = true);
      }
    }
    getSourceName() {
      return this._input.getSourceName();
    }
    setTrace(t2) {
      t2 ? (null !== this._tracer && this.removeParseListener(this._tracer), this._tracer = new an(this), this.addParseListener(this._tracer)) : (this.removeParseListener(this._tracer), this._tracer = null);
    }
  };
  ln.bypassAltsAtnCache = {};
  var hn = class extends rt {
    constructor(t2) {
      super(), this.parentCtx = null, this.symbol = t2;
    }
    getChild(t2) {
      return null;
    }
    getSymbol() {
      return this.symbol;
    }
    getParent() {
      return this.parentCtx;
    }
    getPayload() {
      return this.symbol;
    }
    getSourceInterval() {
      if (null === this.symbol) return Y.INVALID_INTERVAL;
      const t2 = this.symbol.tokenIndex;
      return new Y(t2, t2);
    }
    getChildCount() {
      return 0;
    }
    accept(t2) {
      return t2.visitTerminal(this);
    }
    getText() {
      return this.symbol.text;
    }
    toString() {
      return this.symbol.type === O.EOF ? "<EOF>" : this.symbol.text;
    }
  };
  var cn = class extends hn {
    constructor(t2) {
      super(t2);
    }
    isErrorNode() {
      return true;
    }
    accept(t2) {
      return t2.visitErrorNode(this);
    }
  };
  var un = class extends ht {
    constructor(t2, e2) {
      super(t2, e2), this.children = null, this.start = null, this.stop = null, this.exception = null;
    }
    copyFrom(t2) {
      this.parentCtx = t2.parentCtx, this.invokingState = t2.invokingState, this.children = null, this.start = t2.start, this.stop = t2.stop, t2.children && (this.children = [], t2.children.map((function(t3) {
        t3 instanceof cn && (this.children.push(t3), t3.parentCtx = this);
      }), this));
    }
    enterRule(t2) {
    }
    exitRule(t2) {
    }
    addChild(t2) {
      return null === this.children && (this.children = []), this.children.push(t2), t2;
    }
    removeLastChild() {
      null !== this.children && this.children.pop();
    }
    addTokenNode(t2) {
      const e2 = new hn(t2);
      return this.addChild(e2), e2.parentCtx = this, e2;
    }
    addErrorNode(t2) {
      const e2 = new cn(t2);
      return this.addChild(e2), e2.parentCtx = this, e2;
    }
    getChild(t2, e2) {
      if (e2 = e2 || null, null === this.children || t2 < 0 || t2 >= this.children.length) return null;
      if (null === e2) return this.children[t2];
      for (let n2 = 0; n2 < this.children.length; n2++) {
        const s2 = this.children[n2];
        if (s2 instanceof e2) {
          if (0 === t2) return s2;
          t2 -= 1;
        }
      }
      return null;
    }
    getToken(t2, e2) {
      if (null === this.children || e2 < 0 || e2 >= this.children.length) return null;
      for (let n2 = 0; n2 < this.children.length; n2++) {
        const s2 = this.children[n2];
        if (s2 instanceof rt && s2.symbol.type === t2) {
          if (0 === e2) return s2;
          e2 -= 1;
        }
      }
      return null;
    }
    getTokens(t2) {
      if (null === this.children) return [];
      {
        const e2 = [];
        for (let n2 = 0; n2 < this.children.length; n2++) {
          const s2 = this.children[n2];
          s2 instanceof rt && s2.symbol.type === t2 && e2.push(s2);
        }
        return e2;
      }
    }
    getTypedRuleContext(t2, e2) {
      return this.getChild(e2, t2);
    }
    getTypedRuleContexts(t2) {
      if (null === this.children) return [];
      {
        const e2 = [];
        for (let n2 = 0; n2 < this.children.length; n2++) {
          const s2 = this.children[n2];
          s2 instanceof t2 && e2.push(s2);
        }
        return e2;
      }
    }
    getChildCount() {
      return null === this.children ? 0 : this.children.length;
    }
    getSourceInterval() {
      return null === this.start || null === this.stop ? Y.INVALID_INTERVAL : new Y(this.start.tokenIndex, this.stop.tokenIndex);
    }
  };
  ht.EMPTY = new un();
  var dn = class _dn {
    static DEFAULT_PROGRAM_NAME = "default";
    constructor(t2) {
      this.tokens = t2, this.programs = /* @__PURE__ */ new Map();
    }
    getTokenStream() {
      return this.tokens;
    }
    insertAfter(t2, e2) {
      let n2, s2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : _dn.DEFAULT_PROGRAM_NAME;
      n2 = "number" == typeof t2 ? t2 : t2.tokenIndex;
      let i2 = this.getProgram(s2), r2 = new fn(this.tokens, n2, i2.length, e2);
      i2.push(r2);
    }
    insertBefore(t2, e2) {
      let n2, s2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : _dn.DEFAULT_PROGRAM_NAME;
      n2 = "number" == typeof t2 ? t2 : t2.tokenIndex;
      const i2 = this.getProgram(s2), r2 = new pn(this.tokens, n2, i2.length, e2);
      i2.push(r2);
    }
    replaceSingle(t2, e2) {
      let n2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : _dn.DEFAULT_PROGRAM_NAME;
      this.replace(t2, t2, e2, n2);
    }
    replace(t2, e2, n2) {
      let s2 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : _dn.DEFAULT_PROGRAM_NAME;
      if ("number" != typeof t2 && (t2 = t2.tokenIndex), "number" != typeof e2 && (e2 = e2.tokenIndex), t2 > e2 || t2 < 0 || e2 < 0 || e2 >= this.tokens.size) throw new RangeError(`replace: range invalid: ${t2}..${e2}(size=${this.tokens.size})`);
      let i2 = this.getProgram(s2), r2 = new xn(this.tokens, t2, e2, i2.length, n2);
      i2.push(r2);
    }
    delete(t2, e2) {
      let n2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : _dn.DEFAULT_PROGRAM_NAME;
      void 0 === e2 && (e2 = t2), this.replace(t2, e2, null, n2);
    }
    getProgram(t2) {
      let e2 = this.programs.get(t2);
      return null == e2 && (e2 = this.initializeProgram(t2)), e2;
    }
    initializeProgram(t2) {
      const e2 = [];
      return this.programs.set(t2, e2), e2;
    }
    getText(t2) {
      let e2, n2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : _dn.DEFAULT_PROGRAM_NAME;
      e2 = t2 instanceof Y ? t2 : new Y(0, this.tokens.size - 1), "string" == typeof t2 && (n2 = t2);
      const s2 = this.programs.get(n2);
      let i2 = e2.start, r2 = e2.stop;
      if (r2 > this.tokens.size - 1 && (r2 = this.tokens.size - 1), i2 < 0 && (i2 = 0), null == s2 || 0 === s2.length) return this.tokens.getText(new Y(i2, r2));
      let o2 = [], a2 = this.reduceToSingleOperationPerIndex(s2), l2 = i2;
      for (; l2 <= r2 && l2 < this.tokens.size; ) {
        let t3 = a2.get(l2);
        a2.delete(l2);
        let e3 = this.tokens.get(l2);
        null == t3 ? (e3.type !== O.EOF && o2.push(String(e3.text)), l2++) : l2 = t3.execute(o2);
      }
      if (r2 === this.tokens.size - 1) for (const t3 of a2.values()) t3.index >= this.tokens.size - 1 && o2.push(t3.text.toString());
      return o2.join("");
    }
    reduceToSingleOperationPerIndex(t2) {
      for (let e3 = 0; e3 < t2.length; e3++) {
        let n2 = t2[e3];
        if (null == n2) continue;
        if (!(n2 instanceof xn)) continue;
        let s2 = n2, i2 = this.getKindOfOps(t2, pn, e3);
        for (let e4 of i2) e4.index === s2.index ? (t2[e4.instructionIndex] = void 0, s2.text = e4.text.toString() + (null != s2.text ? s2.text.toString() : "")) : e4.index > s2.index && e4.index <= s2.lastIndex && (t2[e4.instructionIndex] = void 0);
        let r2 = this.getKindOfOps(t2, xn, e3);
        for (let e4 of r2) {
          if (e4.index >= s2.index && e4.lastIndex <= s2.lastIndex) {
            t2[e4.instructionIndex] = void 0;
            continue;
          }
          let n3 = e4.lastIndex < s2.index || e4.index > s2.lastIndex;
          if (null != e4.text || null != s2.text || n3) {
            if (!n3) throw new Error(`replace op boundaries of ${s2} overlap with previous ${e4}`);
          } else t2[e4.instructionIndex] = void 0, s2.index = Math.min(e4.index, s2.index), s2.lastIndex = Math.max(e4.lastIndex, s2.lastIndex);
        }
      }
      for (let e3 = 0; e3 < t2.length; e3++) {
        let n2 = t2[e3];
        if (null == n2) continue;
        if (!(n2 instanceof pn)) continue;
        let s2 = n2, i2 = this.getKindOfOps(t2, pn, e3);
        for (let e4 of i2) e4.index === s2.index && (e4 instanceof fn ? (s2.text = this.catOpText(e4.text, s2.text), t2[e4.instructionIndex] = void 0) : e4 instanceof pn && (s2.text = this.catOpText(s2.text, e4.text), t2[e4.instructionIndex] = void 0));
        let r2 = this.getKindOfOps(t2, xn, e3);
        for (let n3 of r2) if (s2.index !== n3.index) {
          if (s2.index >= n3.index && s2.index <= n3.lastIndex) throw new Error(`insert op ${s2} within boundaries of previous ${n3}`);
        } else n3.text = this.catOpText(s2.text, n3.text), t2[e3] = void 0;
      }
      let e2 = /* @__PURE__ */ new Map();
      for (let n2 of t2) if (null != n2) {
        if (null != e2.get(n2.index)) throw new Error("should only be one op per index");
        e2.set(n2.index, n2);
      }
      return e2;
    }
    catOpText(t2, e2) {
      let n2 = "", s2 = "";
      return null != t2 && (n2 = t2.toString()), null != e2 && (s2 = e2.toString()), n2 + s2;
    }
    getKindOfOps(t2, e2, n2) {
      return t2.slice(0, n2).filter(((t3) => t3 && t3 instanceof e2));
    }
  };
  var gn = class {
    constructor(t2, e2, n2, s2) {
      this.tokens = t2, this.instructionIndex = n2, this.index = e2, this.text = void 0 === s2 ? "" : s2;
    }
    toString() {
      let t2 = this.constructor.name;
      const e2 = t2.indexOf("$");
      return t2 = t2.substring(e2 + 1, t2.length), "<" + t2 + "@" + this.tokens.get(this.index) + ':"' + this.text + '">';
    }
  };
  var pn = class extends gn {
    constructor(t2, e2, n2, s2) {
      super(t2, e2, n2, s2);
    }
    execute(t2) {
      return this.text && t2.push(this.text.toString()), this.tokens.get(this.index).type !== O.EOF && t2.push(String(this.tokens.get(this.index).text)), this.index + 1;
    }
  };
  var fn = class extends pn {
    constructor(t2, e2, n2, s2) {
      super(t2, e2 + 1, n2, s2);
    }
  };
  var xn = class extends gn {
    constructor(t2, e2, n2, s2, i2) {
      super(t2, e2, s2, i2), this.lastIndex = n2;
    }
    execute(t2) {
      return this.text && t2.push(this.text.toString()), this.lastIndex + 1;
    }
    toString() {
      return null == this.text ? "<DeleteOp@" + this.tokens.get(this.index) + ".." + this.tokens.get(this.lastIndex) + ">" : "<ReplaceOp@" + this.tokens.get(this.index) + ".." + this.tokens.get(this.lastIndex) + ':"' + this.text + '">';
    }
  };
  var Tn = { atn: we, dfa: Pe, context: De, misc: Fe, tree: ze, error: $e, Token: O, CommonToken: ie, CharStreams: en, CharStream: Xe, InputStream: Je, CommonTokenStream: on, Lexer: he, Parser: ln, ParserRuleContext: un, Interval: Y, IntervalSet: G, LL1Analyzer: mt, Utils: nn, TokenStreamRewriter: dn };
  var Sn = L.MG;
  var mn = L.fr;
  var En = L.sR;
  var _n = L.Zo;
  var An = L.iH;
  var Cn = L.rt;
  var Nn = L.jB;
  var kn = L.M8;
  var In = L.$t;
  var yn = L.aq;
  var Ln = L.pG;
  var On = L.eP;
  var wn = L.KU;
  var Rn = L.zW;
  var vn = L.IX;
  var bn = L.mY;
  var Pn = L.a7;
  var Dn = L.JG;
  var Fn = L.ay;
  var Mn = L.X2;
  var Un = L.WU;
  var Bn = L.Uw;
  var zn = L.gw;
  var Vn = L.iX;
  var qn = L.re;
  var Hn = L.Pg;
  var Kn = L.tD;
  var Yn = L.R$;
  var Gn = L.Dj;
  var Wn = L.m7;
  var jn = L.NZ;
  var $n = L.xo;
  var Xn = L.ou;
  var Jn = L.qC;
  var Zn = L.mD;
  var Qn = L.Ay;

  // TPTPLexer.js
  var serializedATN = [
    4,
    0,
    106,
    712,
    6,
    -1,
    2,
    0,
    7,
    0,
    2,
    1,
    7,
    1,
    2,
    2,
    7,
    2,
    2,
    3,
    7,
    3,
    2,
    4,
    7,
    4,
    2,
    5,
    7,
    5,
    2,
    6,
    7,
    6,
    2,
    7,
    7,
    7,
    2,
    8,
    7,
    8,
    2,
    9,
    7,
    9,
    2,
    10,
    7,
    10,
    2,
    11,
    7,
    11,
    2,
    12,
    7,
    12,
    2,
    13,
    7,
    13,
    2,
    14,
    7,
    14,
    2,
    15,
    7,
    15,
    2,
    16,
    7,
    16,
    2,
    17,
    7,
    17,
    2,
    18,
    7,
    18,
    2,
    19,
    7,
    19,
    2,
    20,
    7,
    20,
    2,
    21,
    7,
    21,
    2,
    22,
    7,
    22,
    2,
    23,
    7,
    23,
    2,
    24,
    7,
    24,
    2,
    25,
    7,
    25,
    2,
    26,
    7,
    26,
    2,
    27,
    7,
    27,
    2,
    28,
    7,
    28,
    2,
    29,
    7,
    29,
    2,
    30,
    7,
    30,
    2,
    31,
    7,
    31,
    2,
    32,
    7,
    32,
    2,
    33,
    7,
    33,
    2,
    34,
    7,
    34,
    2,
    35,
    7,
    35,
    2,
    36,
    7,
    36,
    2,
    37,
    7,
    37,
    2,
    38,
    7,
    38,
    2,
    39,
    7,
    39,
    2,
    40,
    7,
    40,
    2,
    41,
    7,
    41,
    2,
    42,
    7,
    42,
    2,
    43,
    7,
    43,
    2,
    44,
    7,
    44,
    2,
    45,
    7,
    45,
    2,
    46,
    7,
    46,
    2,
    47,
    7,
    47,
    2,
    48,
    7,
    48,
    2,
    49,
    7,
    49,
    2,
    50,
    7,
    50,
    2,
    51,
    7,
    51,
    2,
    52,
    7,
    52,
    2,
    53,
    7,
    53,
    2,
    54,
    7,
    54,
    2,
    55,
    7,
    55,
    2,
    56,
    7,
    56,
    2,
    57,
    7,
    57,
    2,
    58,
    7,
    58,
    2,
    59,
    7,
    59,
    2,
    60,
    7,
    60,
    2,
    61,
    7,
    61,
    2,
    62,
    7,
    62,
    2,
    63,
    7,
    63,
    2,
    64,
    7,
    64,
    2,
    65,
    7,
    65,
    2,
    66,
    7,
    66,
    2,
    67,
    7,
    67,
    2,
    68,
    7,
    68,
    2,
    69,
    7,
    69,
    2,
    70,
    7,
    70,
    2,
    71,
    7,
    71,
    2,
    72,
    7,
    72,
    2,
    73,
    7,
    73,
    2,
    74,
    7,
    74,
    2,
    75,
    7,
    75,
    2,
    76,
    7,
    76,
    2,
    77,
    7,
    77,
    2,
    78,
    7,
    78,
    2,
    79,
    7,
    79,
    2,
    80,
    7,
    80,
    2,
    81,
    7,
    81,
    2,
    82,
    7,
    82,
    2,
    83,
    7,
    83,
    2,
    84,
    7,
    84,
    2,
    85,
    7,
    85,
    2,
    86,
    7,
    86,
    2,
    87,
    7,
    87,
    2,
    88,
    7,
    88,
    2,
    89,
    7,
    89,
    2,
    90,
    7,
    90,
    2,
    91,
    7,
    91,
    2,
    92,
    7,
    92,
    2,
    93,
    7,
    93,
    2,
    94,
    7,
    94,
    2,
    95,
    7,
    95,
    2,
    96,
    7,
    96,
    2,
    97,
    7,
    97,
    2,
    98,
    7,
    98,
    2,
    99,
    7,
    99,
    2,
    100,
    7,
    100,
    2,
    101,
    7,
    101,
    2,
    102,
    7,
    102,
    2,
    103,
    7,
    103,
    2,
    104,
    7,
    104,
    2,
    105,
    7,
    105,
    2,
    106,
    7,
    106,
    2,
    107,
    7,
    107,
    2,
    108,
    7,
    108,
    2,
    109,
    7,
    109,
    2,
    110,
    7,
    110,
    2,
    111,
    7,
    111,
    2,
    112,
    7,
    112,
    2,
    113,
    7,
    113,
    2,
    114,
    7,
    114,
    1,
    0,
    1,
    0,
    1,
    0,
    1,
    0,
    1,
    0,
    1,
    1,
    1,
    1,
    1,
    2,
    1,
    2,
    1,
    2,
    1,
    3,
    1,
    3,
    1,
    3,
    1,
    3,
    1,
    3,
    1,
    4,
    1,
    4,
    1,
    4,
    1,
    4,
    1,
    4,
    1,
    5,
    1,
    5,
    1,
    5,
    1,
    5,
    1,
    5,
    1,
    6,
    1,
    6,
    1,
    6,
    1,
    6,
    1,
    6,
    1,
    7,
    1,
    7,
    1,
    7,
    1,
    7,
    1,
    7,
    1,
    8,
    1,
    8,
    1,
    9,
    1,
    9,
    1,
    10,
    1,
    10,
    1,
    11,
    1,
    11,
    1,
    12,
    1,
    12,
    1,
    13,
    1,
    13,
    1,
    14,
    1,
    14,
    1,
    15,
    1,
    15,
    1,
    16,
    1,
    16,
    1,
    16,
    1,
    16,
    1,
    16,
    1,
    16,
    1,
    17,
    1,
    17,
    1,
    17,
    1,
    18,
    1,
    18,
    1,
    18,
    1,
    19,
    1,
    19,
    1,
    20,
    1,
    20,
    1,
    21,
    1,
    21,
    1,
    21,
    1,
    22,
    1,
    22,
    1,
    22,
    1,
    22,
    1,
    23,
    1,
    23,
    1,
    24,
    1,
    24,
    1,
    24,
    1,
    24,
    1,
    25,
    1,
    25,
    1,
    25,
    1,
    25,
    1,
    26,
    1,
    26,
    1,
    27,
    1,
    27,
    1,
    28,
    1,
    28,
    1,
    28,
    1,
    29,
    1,
    29,
    1,
    30,
    1,
    30,
    1,
    30,
    1,
    31,
    1,
    31,
    1,
    31,
    1,
    32,
    1,
    32,
    1,
    32,
    1,
    33,
    1,
    33,
    1,
    34,
    1,
    34,
    1,
    34,
    1,
    34,
    1,
    35,
    1,
    35,
    1,
    35,
    1,
    36,
    1,
    36,
    1,
    36,
    1,
    37,
    1,
    37,
    1,
    37,
    1,
    37,
    1,
    38,
    1,
    38,
    1,
    38,
    1,
    39,
    1,
    39,
    1,
    39,
    1,
    39,
    1,
    40,
    1,
    40,
    1,
    40,
    1,
    41,
    1,
    41,
    1,
    41,
    1,
    42,
    1,
    42,
    1,
    43,
    1,
    43,
    1,
    43,
    1,
    44,
    1,
    44,
    1,
    44,
    1,
    45,
    1,
    45,
    1,
    45,
    1,
    46,
    1,
    46,
    1,
    46,
    1,
    46,
    1,
    47,
    1,
    47,
    1,
    47,
    1,
    47,
    1,
    48,
    1,
    48,
    1,
    48,
    1,
    49,
    1,
    49,
    1,
    49,
    1,
    49,
    1,
    49,
    1,
    49,
    1,
    49,
    1,
    49,
    1,
    50,
    1,
    50,
    1,
    50,
    1,
    50,
    1,
    50,
    1,
    50,
    1,
    50,
    1,
    50,
    1,
    50,
    1,
    50,
    1,
    50,
    1,
    51,
    1,
    51,
    1,
    51,
    1,
    51,
    1,
    51,
    1,
    51,
    1,
    51,
    1,
    51,
    1,
    51,
    1,
    51,
    1,
    51,
    1,
    51,
    1,
    52,
    1,
    52,
    1,
    52,
    1,
    52,
    1,
    52,
    1,
    52,
    1,
    53,
    1,
    53,
    1,
    53,
    1,
    53,
    1,
    53,
    1,
    53,
    1,
    53,
    1,
    53,
    1,
    54,
    1,
    54,
    1,
    54,
    1,
    54,
    1,
    54,
    1,
    54,
    1,
    54,
    1,
    54,
    1,
    54,
    1,
    55,
    1,
    55,
    1,
    55,
    1,
    55,
    1,
    55,
    1,
    55,
    1,
    55,
    1,
    55,
    1,
    55,
    1,
    56,
    1,
    56,
    1,
    56,
    1,
    56,
    1,
    56,
    1,
    56,
    1,
    57,
    1,
    57,
    1,
    57,
    1,
    57,
    1,
    57,
    1,
    57,
    1,
    58,
    1,
    58,
    1,
    58,
    1,
    58,
    1,
    58,
    1,
    58,
    1,
    59,
    1,
    59,
    1,
    59,
    1,
    59,
    1,
    59,
    1,
    59,
    1,
    60,
    1,
    60,
    1,
    60,
    1,
    60,
    1,
    60,
    1,
    60,
    1,
    61,
    4,
    61,
    479,
    8,
    61,
    11,
    61,
    12,
    61,
    480,
    1,
    61,
    1,
    61,
    1,
    62,
    1,
    62,
    5,
    62,
    487,
    8,
    62,
    10,
    62,
    12,
    62,
    490,
    9,
    62,
    1,
    62,
    1,
    62,
    1,
    63,
    1,
    63,
    1,
    63,
    1,
    63,
    5,
    63,
    498,
    8,
    63,
    10,
    63,
    12,
    63,
    501,
    9,
    63,
    1,
    63,
    1,
    63,
    1,
    63,
    1,
    63,
    1,
    63,
    1,
    64,
    5,
    64,
    509,
    8,
    64,
    10,
    64,
    12,
    64,
    512,
    9,
    64,
    1,
    64,
    1,
    64,
    1,
    64,
    1,
    64,
    5,
    64,
    518,
    8,
    64,
    10,
    64,
    12,
    64,
    521,
    9,
    64,
    1,
    65,
    1,
    65,
    1,
    65,
    5,
    65,
    526,
    8,
    65,
    10,
    65,
    12,
    65,
    529,
    9,
    65,
    1,
    65,
    1,
    65,
    1,
    66,
    1,
    66,
    5,
    66,
    535,
    8,
    66,
    10,
    66,
    12,
    66,
    538,
    9,
    66,
    1,
    66,
    1,
    66,
    1,
    67,
    1,
    67,
    5,
    67,
    544,
    8,
    67,
    10,
    67,
    12,
    67,
    547,
    9,
    67,
    1,
    68,
    1,
    68,
    1,
    68,
    5,
    68,
    552,
    8,
    68,
    10,
    68,
    12,
    68,
    555,
    9,
    68,
    1,
    69,
    1,
    69,
    5,
    69,
    559,
    8,
    69,
    10,
    69,
    12,
    69,
    562,
    9,
    69,
    1,
    70,
    1,
    70,
    5,
    70,
    566,
    8,
    70,
    10,
    70,
    12,
    70,
    569,
    9,
    70,
    1,
    71,
    1,
    71,
    1,
    72,
    1,
    72,
    1,
    73,
    1,
    73,
    1,
    74,
    1,
    74,
    1,
    75,
    1,
    75,
    1,
    76,
    1,
    76,
    1,
    77,
    1,
    77,
    3,
    77,
    585,
    8,
    77,
    1,
    78,
    1,
    78,
    1,
    78,
    1,
    79,
    1,
    79,
    3,
    79,
    592,
    8,
    79,
    1,
    80,
    1,
    80,
    3,
    80,
    596,
    8,
    80,
    1,
    81,
    1,
    81,
    1,
    81,
    1,
    82,
    1,
    82,
    1,
    82,
    1,
    82,
    1,
    83,
    1,
    83,
    3,
    83,
    607,
    8,
    83,
    1,
    84,
    1,
    84,
    1,
    84,
    1,
    85,
    1,
    85,
    1,
    86,
    1,
    86,
    3,
    86,
    616,
    8,
    86,
    1,
    87,
    1,
    87,
    5,
    87,
    620,
    8,
    87,
    10,
    87,
    12,
    87,
    623,
    9,
    87,
    1,
    88,
    1,
    88,
    3,
    88,
    627,
    8,
    88,
    1,
    88,
    1,
    88,
    1,
    88,
    1,
    89,
    1,
    89,
    1,
    89,
    1,
    90,
    1,
    90,
    1,
    90,
    5,
    90,
    638,
    8,
    90,
    10,
    90,
    12,
    90,
    641,
    9,
    90,
    1,
    91,
    1,
    91,
    3,
    91,
    645,
    8,
    91,
    1,
    92,
    1,
    92,
    1,
    92,
    1,
    93,
    1,
    93,
    5,
    93,
    652,
    8,
    93,
    10,
    93,
    12,
    93,
    655,
    9,
    93,
    1,
    94,
    1,
    94,
    1,
    95,
    1,
    95,
    1,
    96,
    1,
    96,
    1,
    97,
    1,
    97,
    1,
    98,
    1,
    98,
    1,
    98,
    3,
    98,
    668,
    8,
    98,
    1,
    99,
    1,
    99,
    1,
    100,
    1,
    100,
    1,
    100,
    1,
    100,
    1,
    100,
    3,
    100,
    677,
    8,
    100,
    1,
    101,
    1,
    101,
    1,
    102,
    1,
    102,
    1,
    103,
    1,
    103,
    1,
    104,
    1,
    104,
    1,
    105,
    1,
    105,
    1,
    105,
    1,
    106,
    1,
    106,
    1,
    107,
    1,
    107,
    1,
    108,
    1,
    108,
    1,
    109,
    1,
    109,
    1,
    110,
    1,
    110,
    1,
    111,
    1,
    111,
    1,
    111,
    1,
    111,
    3,
    111,
    704,
    8,
    111,
    1,
    112,
    1,
    112,
    1,
    113,
    1,
    113,
    1,
    114,
    1,
    114,
    1,
    114,
    1,
    499,
    0,
    115,
    1,
    1,
    3,
    2,
    5,
    3,
    7,
    4,
    9,
    5,
    11,
    6,
    13,
    7,
    15,
    8,
    17,
    9,
    19,
    10,
    21,
    11,
    23,
    12,
    25,
    13,
    27,
    14,
    29,
    15,
    31,
    16,
    33,
    17,
    35,
    18,
    37,
    19,
    39,
    20,
    41,
    21,
    43,
    22,
    45,
    23,
    47,
    24,
    49,
    25,
    51,
    26,
    53,
    27,
    55,
    28,
    57,
    29,
    59,
    30,
    61,
    31,
    63,
    32,
    65,
    33,
    67,
    34,
    69,
    35,
    71,
    36,
    73,
    37,
    75,
    38,
    77,
    39,
    79,
    40,
    81,
    41,
    83,
    42,
    85,
    43,
    87,
    44,
    89,
    45,
    91,
    46,
    93,
    47,
    95,
    48,
    97,
    49,
    99,
    50,
    101,
    51,
    103,
    52,
    105,
    53,
    107,
    54,
    109,
    55,
    111,
    56,
    113,
    57,
    115,
    58,
    117,
    59,
    119,
    60,
    121,
    61,
    123,
    62,
    125,
    63,
    127,
    64,
    129,
    65,
    131,
    66,
    133,
    67,
    135,
    68,
    137,
    69,
    139,
    70,
    141,
    71,
    143,
    72,
    145,
    73,
    147,
    74,
    149,
    75,
    151,
    76,
    153,
    77,
    155,
    78,
    157,
    79,
    159,
    80,
    161,
    81,
    163,
    82,
    165,
    83,
    167,
    84,
    169,
    85,
    171,
    86,
    173,
    87,
    175,
    88,
    177,
    89,
    179,
    90,
    181,
    91,
    183,
    92,
    185,
    93,
    187,
    94,
    189,
    95,
    191,
    96,
    193,
    97,
    195,
    98,
    197,
    0,
    199,
    99,
    201,
    0,
    203,
    0,
    205,
    100,
    207,
    0,
    209,
    101,
    211,
    102,
    213,
    103,
    215,
    0,
    217,
    0,
    219,
    0,
    221,
    0,
    223,
    0,
    225,
    104,
    227,
    105,
    229,
    106,
    1,
    0,
    19,
    3,
    0,
    9,
    10,
    13,
    13,
    32,
    32,
    2,
    0,
    10,
    10,
    13,
    13,
    1,
    0,
    42,
    42,
    2,
    0,
    42,
    42,
    47,
    47,
    1,
    0,
    37,
    37,
    1,
    0,
    34,
    34,
    3,
    0,
    32,
    33,
    35,
    91,
    93,
    126,
    2,
    0,
    34,
    34,
    92,
    92,
    3,
    0,
    32,
    38,
    40,
    91,
    93,
    126,
    2,
    0,
    43,
    43,
    45,
    45,
    1,
    0,
    46,
    46,
    2,
    0,
    69,
    69,
    101,
    101,
    1,
    0,
    47,
    47,
    1,
    0,
    48,
    48,
    1,
    0,
    49,
    57,
    1,
    0,
    48,
    57,
    1,
    0,
    97,
    122,
    1,
    0,
    65,
    90,
    1,
    0,
    36,
    36,
    729,
    0,
    1,
    1,
    0,
    0,
    0,
    0,
    3,
    1,
    0,
    0,
    0,
    0,
    5,
    1,
    0,
    0,
    0,
    0,
    7,
    1,
    0,
    0,
    0,
    0,
    9,
    1,
    0,
    0,
    0,
    0,
    11,
    1,
    0,
    0,
    0,
    0,
    13,
    1,
    0,
    0,
    0,
    0,
    15,
    1,
    0,
    0,
    0,
    0,
    17,
    1,
    0,
    0,
    0,
    0,
    19,
    1,
    0,
    0,
    0,
    0,
    21,
    1,
    0,
    0,
    0,
    0,
    23,
    1,
    0,
    0,
    0,
    0,
    25,
    1,
    0,
    0,
    0,
    0,
    27,
    1,
    0,
    0,
    0,
    0,
    29,
    1,
    0,
    0,
    0,
    0,
    31,
    1,
    0,
    0,
    0,
    0,
    33,
    1,
    0,
    0,
    0,
    0,
    35,
    1,
    0,
    0,
    0,
    0,
    37,
    1,
    0,
    0,
    0,
    0,
    39,
    1,
    0,
    0,
    0,
    0,
    41,
    1,
    0,
    0,
    0,
    0,
    43,
    1,
    0,
    0,
    0,
    0,
    45,
    1,
    0,
    0,
    0,
    0,
    47,
    1,
    0,
    0,
    0,
    0,
    49,
    1,
    0,
    0,
    0,
    0,
    51,
    1,
    0,
    0,
    0,
    0,
    53,
    1,
    0,
    0,
    0,
    0,
    55,
    1,
    0,
    0,
    0,
    0,
    57,
    1,
    0,
    0,
    0,
    0,
    59,
    1,
    0,
    0,
    0,
    0,
    61,
    1,
    0,
    0,
    0,
    0,
    63,
    1,
    0,
    0,
    0,
    0,
    65,
    1,
    0,
    0,
    0,
    0,
    67,
    1,
    0,
    0,
    0,
    0,
    69,
    1,
    0,
    0,
    0,
    0,
    71,
    1,
    0,
    0,
    0,
    0,
    73,
    1,
    0,
    0,
    0,
    0,
    75,
    1,
    0,
    0,
    0,
    0,
    77,
    1,
    0,
    0,
    0,
    0,
    79,
    1,
    0,
    0,
    0,
    0,
    81,
    1,
    0,
    0,
    0,
    0,
    83,
    1,
    0,
    0,
    0,
    0,
    85,
    1,
    0,
    0,
    0,
    0,
    87,
    1,
    0,
    0,
    0,
    0,
    89,
    1,
    0,
    0,
    0,
    0,
    91,
    1,
    0,
    0,
    0,
    0,
    93,
    1,
    0,
    0,
    0,
    0,
    95,
    1,
    0,
    0,
    0,
    0,
    97,
    1,
    0,
    0,
    0,
    0,
    99,
    1,
    0,
    0,
    0,
    0,
    101,
    1,
    0,
    0,
    0,
    0,
    103,
    1,
    0,
    0,
    0,
    0,
    105,
    1,
    0,
    0,
    0,
    0,
    107,
    1,
    0,
    0,
    0,
    0,
    109,
    1,
    0,
    0,
    0,
    0,
    111,
    1,
    0,
    0,
    0,
    0,
    113,
    1,
    0,
    0,
    0,
    0,
    115,
    1,
    0,
    0,
    0,
    0,
    117,
    1,
    0,
    0,
    0,
    0,
    119,
    1,
    0,
    0,
    0,
    0,
    121,
    1,
    0,
    0,
    0,
    0,
    123,
    1,
    0,
    0,
    0,
    0,
    125,
    1,
    0,
    0,
    0,
    0,
    127,
    1,
    0,
    0,
    0,
    0,
    129,
    1,
    0,
    0,
    0,
    0,
    131,
    1,
    0,
    0,
    0,
    0,
    133,
    1,
    0,
    0,
    0,
    0,
    135,
    1,
    0,
    0,
    0,
    0,
    137,
    1,
    0,
    0,
    0,
    0,
    139,
    1,
    0,
    0,
    0,
    0,
    141,
    1,
    0,
    0,
    0,
    0,
    143,
    1,
    0,
    0,
    0,
    0,
    145,
    1,
    0,
    0,
    0,
    0,
    147,
    1,
    0,
    0,
    0,
    0,
    149,
    1,
    0,
    0,
    0,
    0,
    151,
    1,
    0,
    0,
    0,
    0,
    153,
    1,
    0,
    0,
    0,
    0,
    155,
    1,
    0,
    0,
    0,
    0,
    157,
    1,
    0,
    0,
    0,
    0,
    159,
    1,
    0,
    0,
    0,
    0,
    161,
    1,
    0,
    0,
    0,
    0,
    163,
    1,
    0,
    0,
    0,
    0,
    165,
    1,
    0,
    0,
    0,
    0,
    167,
    1,
    0,
    0,
    0,
    0,
    169,
    1,
    0,
    0,
    0,
    0,
    171,
    1,
    0,
    0,
    0,
    0,
    173,
    1,
    0,
    0,
    0,
    0,
    175,
    1,
    0,
    0,
    0,
    0,
    177,
    1,
    0,
    0,
    0,
    0,
    179,
    1,
    0,
    0,
    0,
    0,
    181,
    1,
    0,
    0,
    0,
    0,
    183,
    1,
    0,
    0,
    0,
    0,
    185,
    1,
    0,
    0,
    0,
    0,
    187,
    1,
    0,
    0,
    0,
    0,
    189,
    1,
    0,
    0,
    0,
    0,
    191,
    1,
    0,
    0,
    0,
    0,
    193,
    1,
    0,
    0,
    0,
    0,
    195,
    1,
    0,
    0,
    0,
    0,
    199,
    1,
    0,
    0,
    0,
    0,
    205,
    1,
    0,
    0,
    0,
    0,
    209,
    1,
    0,
    0,
    0,
    0,
    211,
    1,
    0,
    0,
    0,
    0,
    213,
    1,
    0,
    0,
    0,
    0,
    225,
    1,
    0,
    0,
    0,
    0,
    227,
    1,
    0,
    0,
    0,
    0,
    229,
    1,
    0,
    0,
    0,
    1,
    231,
    1,
    0,
    0,
    0,
    3,
    236,
    1,
    0,
    0,
    0,
    5,
    238,
    1,
    0,
    0,
    0,
    7,
    241,
    1,
    0,
    0,
    0,
    9,
    246,
    1,
    0,
    0,
    0,
    11,
    251,
    1,
    0,
    0,
    0,
    13,
    256,
    1,
    0,
    0,
    0,
    15,
    261,
    1,
    0,
    0,
    0,
    17,
    266,
    1,
    0,
    0,
    0,
    19,
    268,
    1,
    0,
    0,
    0,
    21,
    270,
    1,
    0,
    0,
    0,
    23,
    272,
    1,
    0,
    0,
    0,
    25,
    274,
    1,
    0,
    0,
    0,
    27,
    276,
    1,
    0,
    0,
    0,
    29,
    278,
    1,
    0,
    0,
    0,
    31,
    280,
    1,
    0,
    0,
    0,
    33,
    282,
    1,
    0,
    0,
    0,
    35,
    288,
    1,
    0,
    0,
    0,
    37,
    291,
    1,
    0,
    0,
    0,
    39,
    294,
    1,
    0,
    0,
    0,
    41,
    296,
    1,
    0,
    0,
    0,
    43,
    298,
    1,
    0,
    0,
    0,
    45,
    301,
    1,
    0,
    0,
    0,
    47,
    305,
    1,
    0,
    0,
    0,
    49,
    307,
    1,
    0,
    0,
    0,
    51,
    311,
    1,
    0,
    0,
    0,
    53,
    315,
    1,
    0,
    0,
    0,
    55,
    317,
    1,
    0,
    0,
    0,
    57,
    319,
    1,
    0,
    0,
    0,
    59,
    322,
    1,
    0,
    0,
    0,
    61,
    324,
    1,
    0,
    0,
    0,
    63,
    327,
    1,
    0,
    0,
    0,
    65,
    330,
    1,
    0,
    0,
    0,
    67,
    333,
    1,
    0,
    0,
    0,
    69,
    335,
    1,
    0,
    0,
    0,
    71,
    339,
    1,
    0,
    0,
    0,
    73,
    342,
    1,
    0,
    0,
    0,
    75,
    345,
    1,
    0,
    0,
    0,
    77,
    349,
    1,
    0,
    0,
    0,
    79,
    352,
    1,
    0,
    0,
    0,
    81,
    356,
    1,
    0,
    0,
    0,
    83,
    359,
    1,
    0,
    0,
    0,
    85,
    362,
    1,
    0,
    0,
    0,
    87,
    364,
    1,
    0,
    0,
    0,
    89,
    367,
    1,
    0,
    0,
    0,
    91,
    370,
    1,
    0,
    0,
    0,
    93,
    373,
    1,
    0,
    0,
    0,
    95,
    377,
    1,
    0,
    0,
    0,
    97,
    381,
    1,
    0,
    0,
    0,
    99,
    384,
    1,
    0,
    0,
    0,
    101,
    392,
    1,
    0,
    0,
    0,
    103,
    403,
    1,
    0,
    0,
    0,
    105,
    415,
    1,
    0,
    0,
    0,
    107,
    421,
    1,
    0,
    0,
    0,
    109,
    429,
    1,
    0,
    0,
    0,
    111,
    438,
    1,
    0,
    0,
    0,
    113,
    447,
    1,
    0,
    0,
    0,
    115,
    453,
    1,
    0,
    0,
    0,
    117,
    459,
    1,
    0,
    0,
    0,
    119,
    465,
    1,
    0,
    0,
    0,
    121,
    471,
    1,
    0,
    0,
    0,
    123,
    478,
    1,
    0,
    0,
    0,
    125,
    484,
    1,
    0,
    0,
    0,
    127,
    493,
    1,
    0,
    0,
    0,
    129,
    510,
    1,
    0,
    0,
    0,
    131,
    522,
    1,
    0,
    0,
    0,
    133,
    532,
    1,
    0,
    0,
    0,
    135,
    541,
    1,
    0,
    0,
    0,
    137,
    548,
    1,
    0,
    0,
    0,
    139,
    556,
    1,
    0,
    0,
    0,
    141,
    563,
    1,
    0,
    0,
    0,
    143,
    570,
    1,
    0,
    0,
    0,
    145,
    572,
    1,
    0,
    0,
    0,
    147,
    574,
    1,
    0,
    0,
    0,
    149,
    576,
    1,
    0,
    0,
    0,
    151,
    578,
    1,
    0,
    0,
    0,
    153,
    580,
    1,
    0,
    0,
    0,
    155,
    584,
    1,
    0,
    0,
    0,
    157,
    586,
    1,
    0,
    0,
    0,
    159,
    591,
    1,
    0,
    0,
    0,
    161,
    595,
    1,
    0,
    0,
    0,
    163,
    597,
    1,
    0,
    0,
    0,
    165,
    600,
    1,
    0,
    0,
    0,
    167,
    606,
    1,
    0,
    0,
    0,
    169,
    608,
    1,
    0,
    0,
    0,
    171,
    611,
    1,
    0,
    0,
    0,
    173,
    615,
    1,
    0,
    0,
    0,
    175,
    617,
    1,
    0,
    0,
    0,
    177,
    626,
    1,
    0,
    0,
    0,
    179,
    631,
    1,
    0,
    0,
    0,
    181,
    634,
    1,
    0,
    0,
    0,
    183,
    644,
    1,
    0,
    0,
    0,
    185,
    646,
    1,
    0,
    0,
    0,
    187,
    649,
    1,
    0,
    0,
    0,
    189,
    656,
    1,
    0,
    0,
    0,
    191,
    658,
    1,
    0,
    0,
    0,
    193,
    660,
    1,
    0,
    0,
    0,
    195,
    662,
    1,
    0,
    0,
    0,
    197,
    667,
    1,
    0,
    0,
    0,
    199,
    669,
    1,
    0,
    0,
    0,
    201,
    676,
    1,
    0,
    0,
    0,
    203,
    678,
    1,
    0,
    0,
    0,
    205,
    680,
    1,
    0,
    0,
    0,
    207,
    682,
    1,
    0,
    0,
    0,
    209,
    684,
    1,
    0,
    0,
    0,
    211,
    686,
    1,
    0,
    0,
    0,
    213,
    689,
    1,
    0,
    0,
    0,
    215,
    691,
    1,
    0,
    0,
    0,
    217,
    693,
    1,
    0,
    0,
    0,
    219,
    695,
    1,
    0,
    0,
    0,
    221,
    697,
    1,
    0,
    0,
    0,
    223,
    703,
    1,
    0,
    0,
    0,
    225,
    705,
    1,
    0,
    0,
    0,
    227,
    707,
    1,
    0,
    0,
    0,
    229,
    709,
    1,
    0,
    0,
    0,
    231,
    232,
    5,
    116,
    0,
    0,
    232,
    233,
    5,
    112,
    0,
    0,
    233,
    234,
    5,
    105,
    0,
    0,
    234,
    235,
    5,
    40,
    0,
    0,
    235,
    2,
    1,
    0,
    0,
    0,
    236,
    237,
    5,
    44,
    0,
    0,
    237,
    4,
    1,
    0,
    0,
    0,
    238,
    239,
    5,
    41,
    0,
    0,
    239,
    240,
    5,
    46,
    0,
    0,
    240,
    6,
    1,
    0,
    0,
    0,
    241,
    242,
    5,
    116,
    0,
    0,
    242,
    243,
    5,
    104,
    0,
    0,
    243,
    244,
    5,
    102,
    0,
    0,
    244,
    245,
    5,
    40,
    0,
    0,
    245,
    8,
    1,
    0,
    0,
    0,
    246,
    247,
    5,
    116,
    0,
    0,
    247,
    248,
    5,
    102,
    0,
    0,
    248,
    249,
    5,
    102,
    0,
    0,
    249,
    250,
    5,
    40,
    0,
    0,
    250,
    10,
    1,
    0,
    0,
    0,
    251,
    252,
    5,
    116,
    0,
    0,
    252,
    253,
    5,
    99,
    0,
    0,
    253,
    254,
    5,
    102,
    0,
    0,
    254,
    255,
    5,
    40,
    0,
    0,
    255,
    12,
    1,
    0,
    0,
    0,
    256,
    257,
    5,
    102,
    0,
    0,
    257,
    258,
    5,
    111,
    0,
    0,
    258,
    259,
    5,
    102,
    0,
    0,
    259,
    260,
    5,
    40,
    0,
    0,
    260,
    14,
    1,
    0,
    0,
    0,
    261,
    262,
    5,
    99,
    0,
    0,
    262,
    263,
    5,
    110,
    0,
    0,
    263,
    264,
    5,
    102,
    0,
    0,
    264,
    265,
    5,
    40,
    0,
    0,
    265,
    16,
    1,
    0,
    0,
    0,
    266,
    267,
    5,
    45,
    0,
    0,
    267,
    18,
    1,
    0,
    0,
    0,
    268,
    269,
    5,
    38,
    0,
    0,
    269,
    20,
    1,
    0,
    0,
    0,
    270,
    271,
    5,
    64,
    0,
    0,
    271,
    22,
    1,
    0,
    0,
    0,
    272,
    273,
    5,
    40,
    0,
    0,
    273,
    24,
    1,
    0,
    0,
    0,
    274,
    275,
    5,
    41,
    0,
    0,
    275,
    26,
    1,
    0,
    0,
    0,
    276,
    277,
    5,
    91,
    0,
    0,
    277,
    28,
    1,
    0,
    0,
    0,
    278,
    279,
    5,
    93,
    0,
    0,
    279,
    30,
    1,
    0,
    0,
    0,
    280,
    281,
    5,
    58,
    0,
    0,
    281,
    32,
    1,
    0,
    0,
    0,
    282,
    283,
    5,
    36,
    0,
    0,
    283,
    284,
    5,
    108,
    0,
    0,
    284,
    285,
    5,
    101,
    0,
    0,
    285,
    286,
    5,
    116,
    0,
    0,
    286,
    287,
    5,
    40,
    0,
    0,
    287,
    34,
    1,
    0,
    0,
    0,
    288,
    289,
    5,
    91,
    0,
    0,
    289,
    290,
    5,
    93,
    0,
    0,
    290,
    36,
    1,
    0,
    0,
    0,
    291,
    292,
    5,
    33,
    0,
    0,
    292,
    293,
    5,
    62,
    0,
    0,
    293,
    38,
    1,
    0,
    0,
    0,
    294,
    295,
    5,
    123,
    0,
    0,
    295,
    40,
    1,
    0,
    0,
    0,
    296,
    297,
    5,
    125,
    0,
    0,
    297,
    42,
    1,
    0,
    0,
    0,
    298,
    299,
    5,
    41,
    0,
    0,
    299,
    300,
    5,
    125,
    0,
    0,
    300,
    44,
    1,
    0,
    0,
    0,
    301,
    302,
    5,
    91,
    0,
    0,
    302,
    303,
    5,
    46,
    0,
    0,
    303,
    304,
    5,
    93,
    0,
    0,
    304,
    46,
    1,
    0,
    0,
    0,
    305,
    306,
    5,
    46,
    0,
    0,
    306,
    48,
    1,
    0,
    0,
    0,
    307,
    308,
    5,
    123,
    0,
    0,
    308,
    309,
    5,
    46,
    0,
    0,
    309,
    310,
    5,
    125,
    0,
    0,
    310,
    50,
    1,
    0,
    0,
    0,
    311,
    312,
    5,
    40,
    0,
    0,
    312,
    313,
    5,
    46,
    0,
    0,
    313,
    314,
    5,
    41,
    0,
    0,
    314,
    52,
    1,
    0,
    0,
    0,
    315,
    316,
    5,
    33,
    0,
    0,
    316,
    54,
    1,
    0,
    0,
    0,
    317,
    318,
    5,
    126,
    0,
    0,
    318,
    56,
    1,
    0,
    0,
    0,
    319,
    320,
    5,
    63,
    0,
    0,
    320,
    321,
    5,
    42,
    0,
    0,
    321,
    58,
    1,
    0,
    0,
    0,
    322,
    323,
    5,
    94,
    0,
    0,
    323,
    60,
    1,
    0,
    0,
    0,
    324,
    325,
    5,
    64,
    0,
    0,
    325,
    326,
    5,
    43,
    0,
    0,
    326,
    62,
    1,
    0,
    0,
    0,
    327,
    328,
    5,
    64,
    0,
    0,
    328,
    329,
    5,
    45,
    0,
    0,
    329,
    64,
    1,
    0,
    0,
    0,
    330,
    331,
    5,
    60,
    0,
    0,
    331,
    332,
    5,
    60,
    0,
    0,
    332,
    66,
    1,
    0,
    0,
    0,
    333,
    334,
    5,
    63,
    0,
    0,
    334,
    68,
    1,
    0,
    0,
    0,
    335,
    336,
    5,
    60,
    0,
    0,
    336,
    337,
    5,
    61,
    0,
    0,
    337,
    338,
    5,
    62,
    0,
    0,
    338,
    70,
    1,
    0,
    0,
    0,
    339,
    340,
    5,
    61,
    0,
    0,
    340,
    341,
    5,
    62,
    0,
    0,
    341,
    72,
    1,
    0,
    0,
    0,
    342,
    343,
    5,
    60,
    0,
    0,
    343,
    344,
    5,
    61,
    0,
    0,
    344,
    74,
    1,
    0,
    0,
    0,
    345,
    346,
    5,
    60,
    0,
    0,
    346,
    347,
    5,
    126,
    0,
    0,
    347,
    348,
    5,
    62,
    0,
    0,
    348,
    76,
    1,
    0,
    0,
    0,
    349,
    350,
    5,
    126,
    0,
    0,
    350,
    351,
    5,
    38,
    0,
    0,
    351,
    78,
    1,
    0,
    0,
    0,
    352,
    353,
    5,
    45,
    0,
    0,
    353,
    354,
    5,
    45,
    0,
    0,
    354,
    355,
    5,
    62,
    0,
    0,
    355,
    80,
    1,
    0,
    0,
    0,
    356,
    357,
    5,
    58,
    0,
    0,
    357,
    358,
    5,
    61,
    0,
    0,
    358,
    82,
    1,
    0,
    0,
    0,
    359,
    360,
    5,
    61,
    0,
    0,
    360,
    361,
    5,
    61,
    0,
    0,
    361,
    84,
    1,
    0,
    0,
    0,
    362,
    363,
    5,
    61,
    0,
    0,
    363,
    86,
    1,
    0,
    0,
    0,
    364,
    365,
    5,
    33,
    0,
    0,
    365,
    366,
    5,
    61,
    0,
    0,
    366,
    88,
    1,
    0,
    0,
    0,
    367,
    368,
    5,
    33,
    0,
    0,
    368,
    369,
    5,
    33,
    0,
    0,
    369,
    90,
    1,
    0,
    0,
    0,
    370,
    371,
    5,
    63,
    0,
    0,
    371,
    372,
    5,
    63,
    0,
    0,
    372,
    92,
    1,
    0,
    0,
    0,
    373,
    374,
    5,
    64,
    0,
    0,
    374,
    375,
    5,
    64,
    0,
    0,
    375,
    376,
    5,
    43,
    0,
    0,
    376,
    94,
    1,
    0,
    0,
    0,
    377,
    378,
    5,
    64,
    0,
    0,
    378,
    379,
    5,
    64,
    0,
    0,
    379,
    380,
    5,
    45,
    0,
    0,
    380,
    96,
    1,
    0,
    0,
    0,
    381,
    382,
    5,
    64,
    0,
    0,
    382,
    383,
    5,
    61,
    0,
    0,
    383,
    98,
    1,
    0,
    0,
    0,
    384,
    385,
    5,
    117,
    0,
    0,
    385,
    386,
    5,
    110,
    0,
    0,
    386,
    387,
    5,
    107,
    0,
    0,
    387,
    388,
    5,
    110,
    0,
    0,
    388,
    389,
    5,
    111,
    0,
    0,
    389,
    390,
    5,
    119,
    0,
    0,
    390,
    391,
    5,
    110,
    0,
    0,
    391,
    100,
    1,
    0,
    0,
    0,
    392,
    393,
    5,
    105,
    0,
    0,
    393,
    394,
    5,
    110,
    0,
    0,
    394,
    395,
    5,
    102,
    0,
    0,
    395,
    396,
    5,
    101,
    0,
    0,
    396,
    397,
    5,
    114,
    0,
    0,
    397,
    398,
    5,
    101,
    0,
    0,
    398,
    399,
    5,
    110,
    0,
    0,
    399,
    400,
    5,
    99,
    0,
    0,
    400,
    401,
    5,
    101,
    0,
    0,
    401,
    402,
    5,
    40,
    0,
    0,
    402,
    102,
    1,
    0,
    0,
    0,
    403,
    404,
    5,
    105,
    0,
    0,
    404,
    405,
    5,
    110,
    0,
    0,
    405,
    406,
    5,
    116,
    0,
    0,
    406,
    407,
    5,
    114,
    0,
    0,
    407,
    408,
    5,
    111,
    0,
    0,
    408,
    409,
    5,
    100,
    0,
    0,
    409,
    410,
    5,
    117,
    0,
    0,
    410,
    411,
    5,
    99,
    0,
    0,
    411,
    412,
    5,
    101,
    0,
    0,
    412,
    413,
    5,
    100,
    0,
    0,
    413,
    414,
    5,
    40,
    0,
    0,
    414,
    104,
    1,
    0,
    0,
    0,
    415,
    416,
    5,
    102,
    0,
    0,
    416,
    417,
    5,
    105,
    0,
    0,
    417,
    418,
    5,
    108,
    0,
    0,
    418,
    419,
    5,
    101,
    0,
    0,
    419,
    420,
    5,
    40,
    0,
    0,
    420,
    106,
    1,
    0,
    0,
    0,
    421,
    422,
    5,
    116,
    0,
    0,
    422,
    423,
    5,
    104,
    0,
    0,
    423,
    424,
    5,
    101,
    0,
    0,
    424,
    425,
    5,
    111,
    0,
    0,
    425,
    426,
    5,
    114,
    0,
    0,
    426,
    427,
    5,
    121,
    0,
    0,
    427,
    428,
    5,
    40,
    0,
    0,
    428,
    108,
    1,
    0,
    0,
    0,
    429,
    430,
    5,
    99,
    0,
    0,
    430,
    431,
    5,
    114,
    0,
    0,
    431,
    432,
    5,
    101,
    0,
    0,
    432,
    433,
    5,
    97,
    0,
    0,
    433,
    434,
    5,
    116,
    0,
    0,
    434,
    435,
    5,
    111,
    0,
    0,
    435,
    436,
    5,
    114,
    0,
    0,
    436,
    437,
    5,
    40,
    0,
    0,
    437,
    110,
    1,
    0,
    0,
    0,
    438,
    439,
    5,
    105,
    0,
    0,
    439,
    440,
    5,
    110,
    0,
    0,
    440,
    441,
    5,
    99,
    0,
    0,
    441,
    442,
    5,
    108,
    0,
    0,
    442,
    443,
    5,
    117,
    0,
    0,
    443,
    444,
    5,
    100,
    0,
    0,
    444,
    445,
    5,
    101,
    0,
    0,
    445,
    446,
    5,
    40,
    0,
    0,
    446,
    112,
    1,
    0,
    0,
    0,
    447,
    448,
    5,
    36,
    0,
    0,
    448,
    449,
    5,
    116,
    0,
    0,
    449,
    450,
    5,
    104,
    0,
    0,
    450,
    451,
    5,
    102,
    0,
    0,
    451,
    452,
    5,
    40,
    0,
    0,
    452,
    114,
    1,
    0,
    0,
    0,
    453,
    454,
    5,
    36,
    0,
    0,
    454,
    455,
    5,
    116,
    0,
    0,
    455,
    456,
    5,
    102,
    0,
    0,
    456,
    457,
    5,
    102,
    0,
    0,
    457,
    458,
    5,
    40,
    0,
    0,
    458,
    116,
    1,
    0,
    0,
    0,
    459,
    460,
    5,
    36,
    0,
    0,
    460,
    461,
    5,
    102,
    0,
    0,
    461,
    462,
    5,
    111,
    0,
    0,
    462,
    463,
    5,
    102,
    0,
    0,
    463,
    464,
    5,
    40,
    0,
    0,
    464,
    118,
    1,
    0,
    0,
    0,
    465,
    466,
    5,
    36,
    0,
    0,
    466,
    467,
    5,
    99,
    0,
    0,
    467,
    468,
    5,
    110,
    0,
    0,
    468,
    469,
    5,
    102,
    0,
    0,
    469,
    470,
    5,
    40,
    0,
    0,
    470,
    120,
    1,
    0,
    0,
    0,
    471,
    472,
    5,
    36,
    0,
    0,
    472,
    473,
    5,
    102,
    0,
    0,
    473,
    474,
    5,
    111,
    0,
    0,
    474,
    475,
    5,
    116,
    0,
    0,
    475,
    476,
    5,
    40,
    0,
    0,
    476,
    122,
    1,
    0,
    0,
    0,
    477,
    479,
    7,
    0,
    0,
    0,
    478,
    477,
    1,
    0,
    0,
    0,
    479,
    480,
    1,
    0,
    0,
    0,
    480,
    478,
    1,
    0,
    0,
    0,
    480,
    481,
    1,
    0,
    0,
    0,
    481,
    482,
    1,
    0,
    0,
    0,
    482,
    483,
    6,
    61,
    0,
    0,
    483,
    124,
    1,
    0,
    0,
    0,
    484,
    488,
    5,
    37,
    0,
    0,
    485,
    487,
    8,
    1,
    0,
    0,
    486,
    485,
    1,
    0,
    0,
    0,
    487,
    490,
    1,
    0,
    0,
    0,
    488,
    486,
    1,
    0,
    0,
    0,
    488,
    489,
    1,
    0,
    0,
    0,
    489,
    491,
    1,
    0,
    0,
    0,
    490,
    488,
    1,
    0,
    0,
    0,
    491,
    492,
    6,
    62,
    0,
    0,
    492,
    126,
    1,
    0,
    0,
    0,
    493,
    494,
    5,
    47,
    0,
    0,
    494,
    495,
    5,
    42,
    0,
    0,
    495,
    499,
    1,
    0,
    0,
    0,
    496,
    498,
    9,
    0,
    0,
    0,
    497,
    496,
    1,
    0,
    0,
    0,
    498,
    501,
    1,
    0,
    0,
    0,
    499,
    500,
    1,
    0,
    0,
    0,
    499,
    497,
    1,
    0,
    0,
    0,
    500,
    502,
    1,
    0,
    0,
    0,
    501,
    499,
    1,
    0,
    0,
    0,
    502,
    503,
    5,
    42,
    0,
    0,
    503,
    504,
    5,
    47,
    0,
    0,
    504,
    505,
    1,
    0,
    0,
    0,
    505,
    506,
    6,
    63,
    0,
    0,
    506,
    128,
    1,
    0,
    0,
    0,
    507,
    509,
    8,
    2,
    0,
    0,
    508,
    507,
    1,
    0,
    0,
    0,
    509,
    512,
    1,
    0,
    0,
    0,
    510,
    508,
    1,
    0,
    0,
    0,
    510,
    511,
    1,
    0,
    0,
    0,
    511,
    513,
    1,
    0,
    0,
    0,
    512,
    510,
    1,
    0,
    0,
    0,
    513,
    514,
    5,
    42,
    0,
    0,
    514,
    515,
    5,
    42,
    0,
    0,
    515,
    519,
    1,
    0,
    0,
    0,
    516,
    518,
    8,
    3,
    0,
    0,
    517,
    516,
    1,
    0,
    0,
    0,
    518,
    521,
    1,
    0,
    0,
    0,
    519,
    517,
    1,
    0,
    0,
    0,
    519,
    520,
    1,
    0,
    0,
    0,
    520,
    130,
    1,
    0,
    0,
    0,
    521,
    519,
    1,
    0,
    0,
    0,
    522,
    523,
    3,
    199,
    99,
    0,
    523,
    527,
    3,
    201,
    100,
    0,
    524,
    526,
    3,
    201,
    100,
    0,
    525,
    524,
    1,
    0,
    0,
    0,
    526,
    529,
    1,
    0,
    0,
    0,
    527,
    525,
    1,
    0,
    0,
    0,
    527,
    528,
    1,
    0,
    0,
    0,
    528,
    530,
    1,
    0,
    0,
    0,
    529,
    527,
    1,
    0,
    0,
    0,
    530,
    531,
    3,
    199,
    99,
    0,
    531,
    132,
    1,
    0,
    0,
    0,
    532,
    536,
    3,
    195,
    97,
    0,
    533,
    535,
    3,
    197,
    98,
    0,
    534,
    533,
    1,
    0,
    0,
    0,
    535,
    538,
    1,
    0,
    0,
    0,
    536,
    534,
    1,
    0,
    0,
    0,
    536,
    537,
    1,
    0,
    0,
    0,
    537,
    539,
    1,
    0,
    0,
    0,
    538,
    536,
    1,
    0,
    0,
    0,
    539,
    540,
    3,
    195,
    97,
    0,
    540,
    134,
    1,
    0,
    0,
    0,
    541,
    545,
    3,
    225,
    112,
    0,
    542,
    544,
    3,
    223,
    111,
    0,
    543,
    542,
    1,
    0,
    0,
    0,
    544,
    547,
    1,
    0,
    0,
    0,
    545,
    543,
    1,
    0,
    0,
    0,
    545,
    546,
    1,
    0,
    0,
    0,
    546,
    136,
    1,
    0,
    0,
    0,
    547,
    545,
    1,
    0,
    0,
    0,
    548,
    549,
    3,
    225,
    112,
    0,
    549,
    553,
    3,
    225,
    112,
    0,
    550,
    552,
    3,
    223,
    111,
    0,
    551,
    550,
    1,
    0,
    0,
    0,
    552,
    555,
    1,
    0,
    0,
    0,
    553,
    551,
    1,
    0,
    0,
    0,
    553,
    554,
    1,
    0,
    0,
    0,
    554,
    138,
    1,
    0,
    0,
    0,
    555,
    553,
    1,
    0,
    0,
    0,
    556,
    560,
    3,
    221,
    110,
    0,
    557,
    559,
    3,
    223,
    111,
    0,
    558,
    557,
    1,
    0,
    0,
    0,
    559,
    562,
    1,
    0,
    0,
    0,
    560,
    558,
    1,
    0,
    0,
    0,
    560,
    561,
    1,
    0,
    0,
    0,
    561,
    140,
    1,
    0,
    0,
    0,
    562,
    560,
    1,
    0,
    0,
    0,
    563,
    567,
    3,
    219,
    109,
    0,
    564,
    566,
    3,
    223,
    111,
    0,
    565,
    564,
    1,
    0,
    0,
    0,
    566,
    569,
    1,
    0,
    0,
    0,
    567,
    565,
    1,
    0,
    0,
    0,
    567,
    568,
    1,
    0,
    0,
    0,
    568,
    142,
    1,
    0,
    0,
    0,
    569,
    567,
    1,
    0,
    0,
    0,
    570,
    571,
    5,
    124,
    0,
    0,
    571,
    144,
    1,
    0,
    0,
    0,
    572,
    573,
    5,
    42,
    0,
    0,
    573,
    146,
    1,
    0,
    0,
    0,
    574,
    575,
    5,
    43,
    0,
    0,
    575,
    148,
    1,
    0,
    0,
    0,
    576,
    577,
    5,
    62,
    0,
    0,
    577,
    150,
    1,
    0,
    0,
    0,
    578,
    579,
    5,
    60,
    0,
    0,
    579,
    152,
    1,
    0,
    0,
    0,
    580,
    581,
    5,
    35,
    0,
    0,
    581,
    154,
    1,
    0,
    0,
    0,
    582,
    585,
    3,
    157,
    78,
    0,
    583,
    585,
    3,
    159,
    79,
    0,
    584,
    582,
    1,
    0,
    0,
    0,
    584,
    583,
    1,
    0,
    0,
    0,
    585,
    156,
    1,
    0,
    0,
    0,
    586,
    587,
    3,
    203,
    101,
    0,
    587,
    588,
    3,
    159,
    79,
    0,
    588,
    158,
    1,
    0,
    0,
    0,
    589,
    592,
    3,
    179,
    89,
    0,
    590,
    592,
    3,
    177,
    88,
    0,
    591,
    589,
    1,
    0,
    0,
    0,
    591,
    590,
    1,
    0,
    0,
    0,
    592,
    160,
    1,
    0,
    0,
    0,
    593,
    596,
    3,
    163,
    81,
    0,
    594,
    596,
    3,
    165,
    82,
    0,
    595,
    593,
    1,
    0,
    0,
    0,
    595,
    594,
    1,
    0,
    0,
    0,
    596,
    162,
    1,
    0,
    0,
    0,
    597,
    598,
    3,
    203,
    101,
    0,
    598,
    599,
    3,
    165,
    82,
    0,
    599,
    164,
    1,
    0,
    0,
    0,
    600,
    601,
    3,
    173,
    86,
    0,
    601,
    602,
    3,
    189,
    94,
    0,
    602,
    603,
    3,
    175,
    87,
    0,
    603,
    166,
    1,
    0,
    0,
    0,
    604,
    607,
    3,
    169,
    84,
    0,
    605,
    607,
    3,
    171,
    85,
    0,
    606,
    604,
    1,
    0,
    0,
    0,
    606,
    605,
    1,
    0,
    0,
    0,
    607,
    168,
    1,
    0,
    0,
    0,
    608,
    609,
    3,
    203,
    101,
    0,
    609,
    610,
    3,
    171,
    85,
    0,
    610,
    170,
    1,
    0,
    0,
    0,
    611,
    612,
    3,
    173,
    86,
    0,
    612,
    172,
    1,
    0,
    0,
    0,
    613,
    616,
    3,
    213,
    106,
    0,
    614,
    616,
    3,
    175,
    87,
    0,
    615,
    613,
    1,
    0,
    0,
    0,
    615,
    614,
    1,
    0,
    0,
    0,
    616,
    174,
    1,
    0,
    0,
    0,
    617,
    621,
    3,
    215,
    107,
    0,
    618,
    620,
    3,
    217,
    108,
    0,
    619,
    618,
    1,
    0,
    0,
    0,
    620,
    623,
    1,
    0,
    0,
    0,
    621,
    619,
    1,
    0,
    0,
    0,
    621,
    622,
    1,
    0,
    0,
    0,
    622,
    176,
    1,
    0,
    0,
    0,
    623,
    621,
    1,
    0,
    0,
    0,
    624,
    627,
    3,
    173,
    86,
    0,
    625,
    627,
    3,
    179,
    89,
    0,
    626,
    624,
    1,
    0,
    0,
    0,
    626,
    625,
    1,
    0,
    0,
    0,
    627,
    628,
    1,
    0,
    0,
    0,
    628,
    629,
    3,
    207,
    103,
    0,
    629,
    630,
    3,
    183,
    91,
    0,
    630,
    178,
    1,
    0,
    0,
    0,
    631,
    632,
    3,
    173,
    86,
    0,
    632,
    633,
    3,
    181,
    90,
    0,
    633,
    180,
    1,
    0,
    0,
    0,
    634,
    635,
    3,
    205,
    102,
    0,
    635,
    639,
    3,
    217,
    108,
    0,
    636,
    638,
    3,
    217,
    108,
    0,
    637,
    636,
    1,
    0,
    0,
    0,
    638,
    641,
    1,
    0,
    0,
    0,
    639,
    637,
    1,
    0,
    0,
    0,
    639,
    640,
    1,
    0,
    0,
    0,
    640,
    182,
    1,
    0,
    0,
    0,
    641,
    639,
    1,
    0,
    0,
    0,
    642,
    645,
    3,
    185,
    92,
    0,
    643,
    645,
    3,
    187,
    93,
    0,
    644,
    642,
    1,
    0,
    0,
    0,
    644,
    643,
    1,
    0,
    0,
    0,
    645,
    184,
    1,
    0,
    0,
    0,
    646,
    647,
    3,
    203,
    101,
    0,
    647,
    648,
    3,
    187,
    93,
    0,
    648,
    186,
    1,
    0,
    0,
    0,
    649,
    653,
    3,
    217,
    108,
    0,
    650,
    652,
    3,
    217,
    108,
    0,
    651,
    650,
    1,
    0,
    0,
    0,
    652,
    655,
    1,
    0,
    0,
    0,
    653,
    651,
    1,
    0,
    0,
    0,
    653,
    654,
    1,
    0,
    0,
    0,
    654,
    188,
    1,
    0,
    0,
    0,
    655,
    653,
    1,
    0,
    0,
    0,
    656,
    657,
    3,
    209,
    104,
    0,
    657,
    190,
    1,
    0,
    0,
    0,
    658,
    659,
    3,
    211,
    105,
    0,
    659,
    192,
    1,
    0,
    0,
    0,
    660,
    661,
    7,
    4,
    0,
    0,
    661,
    194,
    1,
    0,
    0,
    0,
    662,
    663,
    7,
    5,
    0,
    0,
    663,
    196,
    1,
    0,
    0,
    0,
    664,
    668,
    7,
    6,
    0,
    0,
    665,
    666,
    5,
    92,
    0,
    0,
    666,
    668,
    7,
    7,
    0,
    0,
    667,
    664,
    1,
    0,
    0,
    0,
    667,
    665,
    1,
    0,
    0,
    0,
    668,
    198,
    1,
    0,
    0,
    0,
    669,
    670,
    5,
    39,
    0,
    0,
    670,
    200,
    1,
    0,
    0,
    0,
    671,
    677,
    7,
    8,
    0,
    0,
    672,
    673,
    5,
    92,
    0,
    0,
    673,
    677,
    5,
    92,
    0,
    0,
    674,
    675,
    5,
    92,
    0,
    0,
    675,
    677,
    5,
    39,
    0,
    0,
    676,
    671,
    1,
    0,
    0,
    0,
    676,
    672,
    1,
    0,
    0,
    0,
    676,
    674,
    1,
    0,
    0,
    0,
    677,
    202,
    1,
    0,
    0,
    0,
    678,
    679,
    7,
    9,
    0,
    0,
    679,
    204,
    1,
    0,
    0,
    0,
    680,
    681,
    7,
    10,
    0,
    0,
    681,
    206,
    1,
    0,
    0,
    0,
    682,
    683,
    7,
    11,
    0,
    0,
    683,
    208,
    1,
    0,
    0,
    0,
    684,
    685,
    7,
    12,
    0,
    0,
    685,
    210,
    1,
    0,
    0,
    0,
    686,
    687,
    5,
    92,
    0,
    0,
    687,
    688,
    5,
    92,
    0,
    0,
    688,
    212,
    1,
    0,
    0,
    0,
    689,
    690,
    7,
    13,
    0,
    0,
    690,
    214,
    1,
    0,
    0,
    0,
    691,
    692,
    7,
    14,
    0,
    0,
    692,
    216,
    1,
    0,
    0,
    0,
    693,
    694,
    7,
    15,
    0,
    0,
    694,
    218,
    1,
    0,
    0,
    0,
    695,
    696,
    7,
    16,
    0,
    0,
    696,
    220,
    1,
    0,
    0,
    0,
    697,
    698,
    7,
    17,
    0,
    0,
    698,
    222,
    1,
    0,
    0,
    0,
    699,
    704,
    3,
    219,
    109,
    0,
    700,
    704,
    3,
    221,
    110,
    0,
    701,
    704,
    3,
    217,
    108,
    0,
    702,
    704,
    5,
    95,
    0,
    0,
    703,
    699,
    1,
    0,
    0,
    0,
    703,
    700,
    1,
    0,
    0,
    0,
    703,
    701,
    1,
    0,
    0,
    0,
    703,
    702,
    1,
    0,
    0,
    0,
    704,
    224,
    1,
    0,
    0,
    0,
    705,
    706,
    7,
    18,
    0,
    0,
    706,
    226,
    1,
    0,
    0,
    0,
    707,
    708,
    9,
    0,
    0,
    0,
    708,
    228,
    1,
    0,
    0,
    0,
    709,
    710,
    5,
    46,
    0,
    0,
    710,
    711,
    5,
    10,
    0,
    0,
    711,
    230,
    1,
    0,
    0,
    0,
    25,
    0,
    480,
    488,
    499,
    510,
    519,
    527,
    536,
    545,
    553,
    560,
    567,
    584,
    591,
    595,
    606,
    615,
    621,
    626,
    639,
    644,
    653,
    667,
    676,
    703,
    1,
    6,
    0,
    0
  ];
  var atn = new Qn.atn.ATNDeserializer().deserialize(serializedATN);
  var decisionsToDFA = atn.decisionToState.map((ds, index) => new Qn.dfa.DFA(ds, index));
  var TPTPLexer = class extends Qn.Lexer {
    static grammarFileName = "TPTP.g4";
    static channelNames = ["DEFAULT_TOKEN_CHANNEL", "HIDDEN"];
    static modeNames = ["DEFAULT_MODE"];
    static literalNames = [
      null,
      "'tpi('",
      "','",
      "').'",
      "'thf('",
      "'tff('",
      "'tcf('",
      "'fof('",
      "'cnf('",
      "'-'",
      "'&'",
      "'@'",
      "'('",
      "')'",
      "'['",
      "']'",
      "':'",
      "'$let('",
      "'[]'",
      "'!>'",
      "'{'",
      "'}'",
      "')}'",
      "'[.]'",
      "'.'",
      "'{.}'",
      "'(.)'",
      "'!'",
      "'~'",
      "'?*'",
      "'^'",
      "'@+'",
      "'@-'",
      "'<<'",
      "'?'",
      "'<=>'",
      "'=>'",
      "'<='",
      "'<~>'",
      "'~&'",
      "'-->'",
      "':='",
      "'=='",
      "'='",
      "'!='",
      "'!!'",
      "'??'",
      "'@@+'",
      "'@@-'",
      "'@='",
      "'unknown'",
      "'inference('",
      "'introduced('",
      "'file('",
      "'theory('",
      "'creator('",
      "'include('",
      "'$thf('",
      "'$tff('",
      "'$fof('",
      "'$cnf('",
      "'$fot('",
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      "'|'",
      "'*'",
      "'+'",
      "'>'",
      "'<'",
      "'#'",
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      "'''",
      null,
      null,
      "'\\\\'",
      null,
      null,
      null,
      "'.\\n'"
    ];
    static symbolicNames = [
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      "WS",
      "Comment_line",
      "Comment_block",
      "Not_star_slash",
      "Single_quoted",
      "Distinct_object",
      "Dollar_word",
      "Dollar_dollar_word",
      "Upper_word",
      "Lower_word",
      "Vline",
      "Star",
      "Plus",
      "Arrow",
      "Less_sign",
      "Hash",
      "Real",
      "Signed_real",
      "Unsigned_real",
      "Rational",
      "Signed_rational",
      "Unsigned_rational",
      "Integer",
      "Signed_integer",
      "Unsigned_integer",
      "Decimal",
      "Positive_decimal",
      "Decimal_exponent",
      "Decimal_fraction",
      "Dot_decimal",
      "Exp_integer",
      "Signed_exp_integer",
      "Unsigned_exp_integer",
      "Slash",
      "Slosh",
      "Percentage_sign",
      "Double_quote",
      "Single_quote",
      "Dot",
      "Slash_char",
      "Slosh_char",
      "Zero_numeric",
      "Dollar",
      "Printable_char",
      "Viewable_char"
    ];
    static ruleNames = [
      "T__0",
      "T__1",
      "T__2",
      "T__3",
      "T__4",
      "T__5",
      "T__6",
      "T__7",
      "T__8",
      "T__9",
      "T__10",
      "T__11",
      "T__12",
      "T__13",
      "T__14",
      "T__15",
      "T__16",
      "T__17",
      "T__18",
      "T__19",
      "T__20",
      "T__21",
      "T__22",
      "T__23",
      "T__24",
      "T__25",
      "T__26",
      "T__27",
      "T__28",
      "T__29",
      "T__30",
      "T__31",
      "T__32",
      "T__33",
      "T__34",
      "T__35",
      "T__36",
      "T__37",
      "T__38",
      "T__39",
      "T__40",
      "T__41",
      "T__42",
      "T__43",
      "T__44",
      "T__45",
      "T__46",
      "T__47",
      "T__48",
      "T__49",
      "T__50",
      "T__51",
      "T__52",
      "T__53",
      "T__54",
      "T__55",
      "T__56",
      "T__57",
      "T__58",
      "T__59",
      "T__60",
      "WS",
      "Comment_line",
      "Comment_block",
      "Not_star_slash",
      "Single_quoted",
      "Distinct_object",
      "Dollar_word",
      "Dollar_dollar_word",
      "Upper_word",
      "Lower_word",
      "Vline",
      "Star",
      "Plus",
      "Arrow",
      "Less_sign",
      "Hash",
      "Real",
      "Signed_real",
      "Unsigned_real",
      "Rational",
      "Signed_rational",
      "Unsigned_rational",
      "Integer",
      "Signed_integer",
      "Unsigned_integer",
      "Decimal",
      "Positive_decimal",
      "Decimal_exponent",
      "Decimal_fraction",
      "Dot_decimal",
      "Exp_integer",
      "Signed_exp_integer",
      "Unsigned_exp_integer",
      "Slash",
      "Slosh",
      "Percentage_sign",
      "Double_quote",
      "Do_char",
      "Single_quote",
      "Sq_char",
      "Sign",
      "Dot",
      "Exponent",
      "Slash_char",
      "Slosh_char",
      "Zero_numeric",
      "Non_zero_numeric",
      "Numeric",
      "Lower_alpha",
      "Upper_alpha",
      "Alpha_numeric",
      "Dollar",
      "Printable_char",
      "Viewable_char"
    ];
    constructor(input) {
      super(input);
      this._interp = new Qn.atn.LexerATNSimulator(this, atn, decisionsToDFA, new Qn.atn.PredictionContextCache());
    }
  };
  TPTPLexer.EOF = Qn.Token.EOF;
  TPTPLexer.T__0 = 1;
  TPTPLexer.T__1 = 2;
  TPTPLexer.T__2 = 3;
  TPTPLexer.T__3 = 4;
  TPTPLexer.T__4 = 5;
  TPTPLexer.T__5 = 6;
  TPTPLexer.T__6 = 7;
  TPTPLexer.T__7 = 8;
  TPTPLexer.T__8 = 9;
  TPTPLexer.T__9 = 10;
  TPTPLexer.T__10 = 11;
  TPTPLexer.T__11 = 12;
  TPTPLexer.T__12 = 13;
  TPTPLexer.T__13 = 14;
  TPTPLexer.T__14 = 15;
  TPTPLexer.T__15 = 16;
  TPTPLexer.T__16 = 17;
  TPTPLexer.T__17 = 18;
  TPTPLexer.T__18 = 19;
  TPTPLexer.T__19 = 20;
  TPTPLexer.T__20 = 21;
  TPTPLexer.T__21 = 22;
  TPTPLexer.T__22 = 23;
  TPTPLexer.T__23 = 24;
  TPTPLexer.T__24 = 25;
  TPTPLexer.T__25 = 26;
  TPTPLexer.T__26 = 27;
  TPTPLexer.T__27 = 28;
  TPTPLexer.T__28 = 29;
  TPTPLexer.T__29 = 30;
  TPTPLexer.T__30 = 31;
  TPTPLexer.T__31 = 32;
  TPTPLexer.T__32 = 33;
  TPTPLexer.T__33 = 34;
  TPTPLexer.T__34 = 35;
  TPTPLexer.T__35 = 36;
  TPTPLexer.T__36 = 37;
  TPTPLexer.T__37 = 38;
  TPTPLexer.T__38 = 39;
  TPTPLexer.T__39 = 40;
  TPTPLexer.T__40 = 41;
  TPTPLexer.T__41 = 42;
  TPTPLexer.T__42 = 43;
  TPTPLexer.T__43 = 44;
  TPTPLexer.T__44 = 45;
  TPTPLexer.T__45 = 46;
  TPTPLexer.T__46 = 47;
  TPTPLexer.T__47 = 48;
  TPTPLexer.T__48 = 49;
  TPTPLexer.T__49 = 50;
  TPTPLexer.T__50 = 51;
  TPTPLexer.T__51 = 52;
  TPTPLexer.T__52 = 53;
  TPTPLexer.T__53 = 54;
  TPTPLexer.T__54 = 55;
  TPTPLexer.T__55 = 56;
  TPTPLexer.T__56 = 57;
  TPTPLexer.T__57 = 58;
  TPTPLexer.T__58 = 59;
  TPTPLexer.T__59 = 60;
  TPTPLexer.T__60 = 61;
  TPTPLexer.WS = 62;
  TPTPLexer.Comment_line = 63;
  TPTPLexer.Comment_block = 64;
  TPTPLexer.Not_star_slash = 65;
  TPTPLexer.Single_quoted = 66;
  TPTPLexer.Distinct_object = 67;
  TPTPLexer.Dollar_word = 68;
  TPTPLexer.Dollar_dollar_word = 69;
  TPTPLexer.Upper_word = 70;
  TPTPLexer.Lower_word = 71;
  TPTPLexer.Vline = 72;
  TPTPLexer.Star = 73;
  TPTPLexer.Plus = 74;
  TPTPLexer.Arrow = 75;
  TPTPLexer.Less_sign = 76;
  TPTPLexer.Hash = 77;
  TPTPLexer.Real = 78;
  TPTPLexer.Signed_real = 79;
  TPTPLexer.Unsigned_real = 80;
  TPTPLexer.Rational = 81;
  TPTPLexer.Signed_rational = 82;
  TPTPLexer.Unsigned_rational = 83;
  TPTPLexer.Integer = 84;
  TPTPLexer.Signed_integer = 85;
  TPTPLexer.Unsigned_integer = 86;
  TPTPLexer.Decimal = 87;
  TPTPLexer.Positive_decimal = 88;
  TPTPLexer.Decimal_exponent = 89;
  TPTPLexer.Decimal_fraction = 90;
  TPTPLexer.Dot_decimal = 91;
  TPTPLexer.Exp_integer = 92;
  TPTPLexer.Signed_exp_integer = 93;
  TPTPLexer.Unsigned_exp_integer = 94;
  TPTPLexer.Slash = 95;
  TPTPLexer.Slosh = 96;
  TPTPLexer.Percentage_sign = 97;
  TPTPLexer.Double_quote = 98;
  TPTPLexer.Single_quote = 99;
  TPTPLexer.Dot = 100;
  TPTPLexer.Slash_char = 101;
  TPTPLexer.Slosh_char = 102;
  TPTPLexer.Zero_numeric = 103;
  TPTPLexer.Dollar = 104;
  TPTPLexer.Printable_char = 105;
  TPTPLexer.Viewable_char = 106;

  // TPTPListener.js
  var TPTPListener = class extends Qn.tree.ParseTreeListener {
    // Enter a parse tree produced by TPTPParser#tptp_file.
    enterTptp_file(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#tptp_file.
    exitTptp_file(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#tptp_input.
    enterTptp_input(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#tptp_input.
    exitTptp_input(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#annotated_formula.
    enterAnnotated_formula(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#annotated_formula.
    exitAnnotated_formula(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#tpi_annotated.
    enterTpi_annotated(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#tpi_annotated.
    exitTpi_annotated(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#tpi_formula.
    enterTpi_formula(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#tpi_formula.
    exitTpi_formula(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#thf_annotated.
    enterThf_annotated(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#thf_annotated.
    exitThf_annotated(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#tff_annotated.
    enterTff_annotated(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#tff_annotated.
    exitTff_annotated(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#tcf_annotated.
    enterTcf_annotated(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#tcf_annotated.
    exitTcf_annotated(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#fof_annotated.
    enterFof_annotated(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#fof_annotated.
    exitFof_annotated(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#cnf_annotated.
    enterCnf_annotated(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#cnf_annotated.
    exitCnf_annotated(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#annotations.
    enterAnnotations(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#annotations.
    exitAnnotations(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#formula_role.
    enterFormula_role(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#formula_role.
    exitFormula_role(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#thf_formula.
    enterThf_formula(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#thf_formula.
    exitThf_formula(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#thf_logic_formula.
    enterThf_logic_formula(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#thf_logic_formula.
    exitThf_logic_formula(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#thf_binary_formula.
    enterThf_binary_formula(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#thf_binary_formula.
    exitThf_binary_formula(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#thf_binary_nonassoc.
    enterThf_binary_nonassoc(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#thf_binary_nonassoc.
    exitThf_binary_nonassoc(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#thf_binary_assoc.
    enterThf_binary_assoc(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#thf_binary_assoc.
    exitThf_binary_assoc(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#thf_or_formula.
    enterThf_or_formula(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#thf_or_formula.
    exitThf_or_formula(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#thf_and_formula.
    enterThf_and_formula(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#thf_and_formula.
    exitThf_and_formula(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#thf_apply_formula.
    enterThf_apply_formula(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#thf_apply_formula.
    exitThf_apply_formula(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#thf_unit_formula.
    enterThf_unit_formula(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#thf_unit_formula.
    exitThf_unit_formula(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#thf_preunit_formula.
    enterThf_preunit_formula(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#thf_preunit_formula.
    exitThf_preunit_formula(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#thf_unitary_formula.
    enterThf_unitary_formula(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#thf_unitary_formula.
    exitThf_unitary_formula(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#thf_quantified_formula.
    enterThf_quantified_formula(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#thf_quantified_formula.
    exitThf_quantified_formula(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#thf_quantification.
    enterThf_quantification(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#thf_quantification.
    exitThf_quantification(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#thf_variable_list.
    enterThf_variable_list(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#thf_variable_list.
    exitThf_variable_list(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#thf_typed_variable.
    enterThf_typed_variable(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#thf_typed_variable.
    exitThf_typed_variable(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#thf_unary_formula.
    enterThf_unary_formula(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#thf_unary_formula.
    exitThf_unary_formula(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#thf_prefix_unary.
    enterThf_prefix_unary(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#thf_prefix_unary.
    exitThf_prefix_unary(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#thf_infix_unary.
    enterThf_infix_unary(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#thf_infix_unary.
    exitThf_infix_unary(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#thf_atomic_formula.
    enterThf_atomic_formula(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#thf_atomic_formula.
    exitThf_atomic_formula(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#thf_plain_atomic.
    enterThf_plain_atomic(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#thf_plain_atomic.
    exitThf_plain_atomic(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#thf_defined_atomic.
    enterThf_defined_atomic(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#thf_defined_atomic.
    exitThf_defined_atomic(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#thf_defined_term.
    enterThf_defined_term(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#thf_defined_term.
    exitThf_defined_term(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#thf_defined_infix.
    enterThf_defined_infix(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#thf_defined_infix.
    exitThf_defined_infix(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#thf_system_atomic.
    enterThf_system_atomic(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#thf_system_atomic.
    exitThf_system_atomic(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#thf_let.
    enterThf_let(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#thf_let.
    exitThf_let(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#thf_let_types.
    enterThf_let_types(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#thf_let_types.
    exitThf_let_types(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#thf_atom_typing_list.
    enterThf_atom_typing_list(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#thf_atom_typing_list.
    exitThf_atom_typing_list(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#thf_let_defns.
    enterThf_let_defns(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#thf_let_defns.
    exitThf_let_defns(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#thf_let_defn.
    enterThf_let_defn(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#thf_let_defn.
    exitThf_let_defn(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#thf_let_defn_list.
    enterThf_let_defn_list(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#thf_let_defn_list.
    exitThf_let_defn_list(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#thf_unitary_term.
    enterThf_unitary_term(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#thf_unitary_term.
    exitThf_unitary_term(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#thf_conn_term.
    enterThf_conn_term(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#thf_conn_term.
    exitThf_conn_term(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#thf_tuple.
    enterThf_tuple(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#thf_tuple.
    exitThf_tuple(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#thf_fof_function.
    enterThf_fof_function(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#thf_fof_function.
    exitThf_fof_function(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#thf_arguments.
    enterThf_arguments(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#thf_arguments.
    exitThf_arguments(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#thf_formula_list.
    enterThf_formula_list(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#thf_formula_list.
    exitThf_formula_list(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#comma_thf_logic_formula.
    enterComma_thf_logic_formula(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#comma_thf_logic_formula.
    exitComma_thf_logic_formula(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#thf_atom_typing.
    enterThf_atom_typing(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#thf_atom_typing.
    exitThf_atom_typing(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#thf_top_level_type.
    enterThf_top_level_type(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#thf_top_level_type.
    exitThf_top_level_type(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#thf_unitary_type.
    enterThf_unitary_type(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#thf_unitary_type.
    exitThf_unitary_type(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#thf_apply_type.
    enterThf_apply_type(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#thf_apply_type.
    exitThf_apply_type(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#thf_binary_type.
    enterThf_binary_type(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#thf_binary_type.
    exitThf_binary_type(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#thf_mapping_type.
    enterThf_mapping_type(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#thf_mapping_type.
    exitThf_mapping_type(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#thf_xprod_type.
    enterThf_xprod_type(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#thf_xprod_type.
    exitThf_xprod_type(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#thf_union_type.
    enterThf_union_type(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#thf_union_type.
    exitThf_union_type(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#thf_subtype.
    enterThf_subtype(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#thf_subtype.
    exitThf_subtype(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#thf_definition.
    enterThf_definition(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#thf_definition.
    exitThf_definition(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#thf_sequent.
    enterThf_sequent(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#thf_sequent.
    exitThf_sequent(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#tff_formula.
    enterTff_formula(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#tff_formula.
    exitTff_formula(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#tff_logic_formula.
    enterTff_logic_formula(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#tff_logic_formula.
    exitTff_logic_formula(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#tff_binary_formula.
    enterTff_binary_formula(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#tff_binary_formula.
    exitTff_binary_formula(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#tff_binary_nonassoc.
    enterTff_binary_nonassoc(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#tff_binary_nonassoc.
    exitTff_binary_nonassoc(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#tff_binary_assoc.
    enterTff_binary_assoc(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#tff_binary_assoc.
    exitTff_binary_assoc(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#tff_or_formula.
    enterTff_or_formula(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#tff_or_formula.
    exitTff_or_formula(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#tff_and_formula.
    enterTff_and_formula(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#tff_and_formula.
    exitTff_and_formula(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#tff_unit_formula.
    enterTff_unit_formula(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#tff_unit_formula.
    exitTff_unit_formula(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#tff_preunit_formula.
    enterTff_preunit_formula(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#tff_preunit_formula.
    exitTff_preunit_formula(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#tff_unitary_formula.
    enterTff_unitary_formula(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#tff_unitary_formula.
    exitTff_unitary_formula(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#txf_unitary_formula.
    enterTxf_unitary_formula(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#txf_unitary_formula.
    exitTxf_unitary_formula(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#tff_quantified_formula.
    enterTff_quantified_formula(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#tff_quantified_formula.
    exitTff_quantified_formula(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#tff_variable_list.
    enterTff_variable_list(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#tff_variable_list.
    exitTff_variable_list(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#tff_variable.
    enterTff_variable(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#tff_variable.
    exitTff_variable(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#tff_typed_variable.
    enterTff_typed_variable(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#tff_typed_variable.
    exitTff_typed_variable(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#tff_unary_formula.
    enterTff_unary_formula(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#tff_unary_formula.
    exitTff_unary_formula(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#tff_prefix_unary.
    enterTff_prefix_unary(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#tff_prefix_unary.
    exitTff_prefix_unary(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#tff_infix_unary.
    enterTff_infix_unary(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#tff_infix_unary.
    exitTff_infix_unary(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#tff_atomic_formula.
    enterTff_atomic_formula(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#tff_atomic_formula.
    exitTff_atomic_formula(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#tff_plain_atomic.
    enterTff_plain_atomic(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#tff_plain_atomic.
    exitTff_plain_atomic(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#tff_defined_atomic.
    enterTff_defined_atomic(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#tff_defined_atomic.
    exitTff_defined_atomic(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#tff_defined_plain.
    enterTff_defined_plain(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#tff_defined_plain.
    exitTff_defined_plain(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#tff_defined_infix.
    enterTff_defined_infix(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#tff_defined_infix.
    exitTff_defined_infix(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#tff_system_atomic.
    enterTff_system_atomic(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#tff_system_atomic.
    exitTff_system_atomic(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#txf_let.
    enterTxf_let(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#txf_let.
    exitTxf_let(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#txf_let_types.
    enterTxf_let_types(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#txf_let_types.
    exitTxf_let_types(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#tff_atom_typing_list.
    enterTff_atom_typing_list(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#tff_atom_typing_list.
    exitTff_atom_typing_list(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#txf_let_defns.
    enterTxf_let_defns(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#txf_let_defns.
    exitTxf_let_defns(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#txf_let_defn.
    enterTxf_let_defn(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#txf_let_defn.
    exitTxf_let_defn(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#txf_let_LHS.
    enterTxf_let_LHS(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#txf_let_LHS.
    exitTxf_let_LHS(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#txf_let_defn_list.
    enterTxf_let_defn_list(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#txf_let_defn_list.
    exitTxf_let_defn_list(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#nxf_atom.
    enterNxf_atom(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#nxf_atom.
    exitNxf_atom(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#tff_term.
    enterTff_term(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#tff_term.
    exitTff_term(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#tff_unitary_term.
    enterTff_unitary_term(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#tff_unitary_term.
    exitTff_unitary_term(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#txf_tuple.
    enterTxf_tuple(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#txf_tuple.
    exitTxf_tuple(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#tff_arguments.
    enterTff_arguments(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#tff_arguments.
    exitTff_arguments(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#comma_tff_term.
    enterComma_tff_term(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#comma_tff_term.
    exitComma_tff_term(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#tff_atom_typing.
    enterTff_atom_typing(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#tff_atom_typing.
    exitTff_atom_typing(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#tff_top_level_type.
    enterTff_top_level_type(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#tff_top_level_type.
    exitTff_top_level_type(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#tff_non_atomic_type.
    enterTff_non_atomic_type(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#tff_non_atomic_type.
    exitTff_non_atomic_type(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#tf1_quantified_type.
    enterTf1_quantified_type(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#tf1_quantified_type.
    exitTf1_quantified_type(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#tff_monotype.
    enterTff_monotype(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#tff_monotype.
    exitTff_monotype(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#tff_unitary_type.
    enterTff_unitary_type(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#tff_unitary_type.
    exitTff_unitary_type(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#tff_atomic_type.
    enterTff_atomic_type(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#tff_atomic_type.
    exitTff_atomic_type(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#tff_type_arguments.
    enterTff_type_arguments(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#tff_type_arguments.
    exitTff_type_arguments(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#tff_mapping_type.
    enterTff_mapping_type(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#tff_mapping_type.
    exitTff_mapping_type(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#tff_xprod_type.
    enterTff_xprod_type(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#tff_xprod_type.
    exitTff_xprod_type(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#txf_tuple_type.
    enterTxf_tuple_type(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#txf_tuple_type.
    exitTxf_tuple_type(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#tff_type_list.
    enterTff_type_list(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#tff_type_list.
    exitTff_type_list(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#tff_subtype.
    enterTff_subtype(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#tff_subtype.
    exitTff_subtype(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#txf_definition.
    enterTxf_definition(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#txf_definition.
    exitTxf_definition(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#txf_sequent.
    enterTxf_sequent(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#txf_sequent.
    exitTxf_sequent(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#nhf_long_connective.
    enterNhf_long_connective(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#nhf_long_connective.
    exitNhf_long_connective(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#nhf_parameter_list.
    enterNhf_parameter_list(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#nhf_parameter_list.
    exitNhf_parameter_list(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#nhf_parameter.
    enterNhf_parameter(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#nhf_parameter.
    exitNhf_parameter(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#nhf_key_pair.
    enterNhf_key_pair(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#nhf_key_pair.
    exitNhf_key_pair(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#nxf_long_connective.
    enterNxf_long_connective(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#nxf_long_connective.
    exitNxf_long_connective(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#nxf_parameter_list.
    enterNxf_parameter_list(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#nxf_parameter_list.
    exitNxf_parameter_list(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#nxf_parameter.
    enterNxf_parameter(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#nxf_parameter.
    exitNxf_parameter(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#nxf_key_pair.
    enterNxf_key_pair(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#nxf_key_pair.
    exitNxf_key_pair(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#ntf_connective_name.
    enterNtf_connective_name(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#ntf_connective_name.
    exitNtf_connective_name(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#ntf_index.
    enterNtf_index(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#ntf_index.
    exitNtf_index(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#ntf_short_connective.
    enterNtf_short_connective(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#ntf_short_connective.
    exitNtf_short_connective(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#tcf_formula.
    enterTcf_formula(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#tcf_formula.
    exitTcf_formula(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#tcf_logic_formula.
    enterTcf_logic_formula(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#tcf_logic_formula.
    exitTcf_logic_formula(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#tcf_quantified_formula.
    enterTcf_quantified_formula(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#tcf_quantified_formula.
    exitTcf_quantified_formula(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#fof_formula.
    enterFof_formula(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#fof_formula.
    exitFof_formula(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#fof_logic_formula.
    enterFof_logic_formula(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#fof_logic_formula.
    exitFof_logic_formula(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#fof_binary_formula.
    enterFof_binary_formula(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#fof_binary_formula.
    exitFof_binary_formula(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#fof_binary_nonassoc.
    enterFof_binary_nonassoc(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#fof_binary_nonassoc.
    exitFof_binary_nonassoc(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#fof_binary_assoc.
    enterFof_binary_assoc(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#fof_binary_assoc.
    exitFof_binary_assoc(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#fof_or_formula.
    enterFof_or_formula(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#fof_or_formula.
    exitFof_or_formula(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#fof_and_formula.
    enterFof_and_formula(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#fof_and_formula.
    exitFof_and_formula(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#fof_unary_formula.
    enterFof_unary_formula(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#fof_unary_formula.
    exitFof_unary_formula(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#fof_infix_unary.
    enterFof_infix_unary(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#fof_infix_unary.
    exitFof_infix_unary(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#fof_unit_formula.
    enterFof_unit_formula(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#fof_unit_formula.
    exitFof_unit_formula(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#fof_unitary_formula.
    enterFof_unitary_formula(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#fof_unitary_formula.
    exitFof_unitary_formula(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#fof_quantified_formula.
    enterFof_quantified_formula(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#fof_quantified_formula.
    exitFof_quantified_formula(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#fof_variable_list.
    enterFof_variable_list(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#fof_variable_list.
    exitFof_variable_list(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#fof_atomic_formula.
    enterFof_atomic_formula(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#fof_atomic_formula.
    exitFof_atomic_formula(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#fof_plain_atomic_formula.
    enterFof_plain_atomic_formula(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#fof_plain_atomic_formula.
    exitFof_plain_atomic_formula(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#fof_defined_atomic_formula.
    enterFof_defined_atomic_formula(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#fof_defined_atomic_formula.
    exitFof_defined_atomic_formula(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#fof_defined_plain_formula.
    enterFof_defined_plain_formula(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#fof_defined_plain_formula.
    exitFof_defined_plain_formula(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#fof_defined_infix_formula.
    enterFof_defined_infix_formula(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#fof_defined_infix_formula.
    exitFof_defined_infix_formula(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#fof_system_atomic_formula.
    enterFof_system_atomic_formula(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#fof_system_atomic_formula.
    exitFof_system_atomic_formula(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#fof_plain_term.
    enterFof_plain_term(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#fof_plain_term.
    exitFof_plain_term(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#fof_defined_term.
    enterFof_defined_term(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#fof_defined_term.
    exitFof_defined_term(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#fof_defined_atomic_term.
    enterFof_defined_atomic_term(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#fof_defined_atomic_term.
    exitFof_defined_atomic_term(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#fof_defined_plain_term.
    enterFof_defined_plain_term(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#fof_defined_plain_term.
    exitFof_defined_plain_term(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#fof_system_term.
    enterFof_system_term(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#fof_system_term.
    exitFof_system_term(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#fof_arguments.
    enterFof_arguments(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#fof_arguments.
    exitFof_arguments(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#fof_term.
    enterFof_term(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#fof_term.
    exitFof_term(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#fof_function_term.
    enterFof_function_term(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#fof_function_term.
    exitFof_function_term(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#fof_sequent.
    enterFof_sequent(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#fof_sequent.
    exitFof_sequent(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#fof_formula_tuple.
    enterFof_formula_tuple(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#fof_formula_tuple.
    exitFof_formula_tuple(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#fof_formula_tuple_list.
    enterFof_formula_tuple_list(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#fof_formula_tuple_list.
    exitFof_formula_tuple_list(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#comma_fof_logic_formula.
    enterComma_fof_logic_formula(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#comma_fof_logic_formula.
    exitComma_fof_logic_formula(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#cnf_formula.
    enterCnf_formula(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#cnf_formula.
    exitCnf_formula(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#cnf_disjunction.
    enterCnf_disjunction(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#cnf_disjunction.
    exitCnf_disjunction(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#cnf_literal.
    enterCnf_literal(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#cnf_literal.
    exitCnf_literal(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#thf_quantifier.
    enterThf_quantifier(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#thf_quantifier.
    exitThf_quantifier(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#thf_unary_connective.
    enterThf_unary_connective(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#thf_unary_connective.
    exitThf_unary_connective(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#th1_quantifier.
    enterTh1_quantifier(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#th1_quantifier.
    exitTh1_quantifier(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#th0_quantifier.
    enterTh0_quantifier(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#th0_quantifier.
    exitTh0_quantifier(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#subtype_sign.
    enterSubtype_sign(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#subtype_sign.
    exitSubtype_sign(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#tff_unary_connective.
    enterTff_unary_connective(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#tff_unary_connective.
    exitTff_unary_connective(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#tff_quantifier.
    enterTff_quantifier(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#tff_quantifier.
    exitTff_quantifier(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#fof_quantifier.
    enterFof_quantifier(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#fof_quantifier.
    exitFof_quantifier(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#nonassoc_connective.
    enterNonassoc_connective(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#nonassoc_connective.
    exitNonassoc_connective(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#assoc_connective.
    enterAssoc_connective(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#assoc_connective.
    exitAssoc_connective(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#unary_connective.
    enterUnary_connective(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#unary_connective.
    exitUnary_connective(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#gentzen_arrow.
    enterGentzen_arrow(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#gentzen_arrow.
    exitGentzen_arrow(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#assignment.
    enterAssignment(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#assignment.
    exitAssignment(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#identical.
    enterIdentical(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#identical.
    exitIdentical(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#type_constant.
    enterType_constant(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#type_constant.
    exitType_constant(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#type_functor.
    enterType_functor(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#type_functor.
    exitType_functor(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#defined_type.
    enterDefined_type(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#defined_type.
    exitDefined_type(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#atom.
    enterAtom(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#atom.
    exitAtom(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#untyped_atom.
    enterUntyped_atom(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#untyped_atom.
    exitUntyped_atom(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#defined_infix_pred.
    enterDefined_infix_pred(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#defined_infix_pred.
    exitDefined_infix_pred(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#infix_equality.
    enterInfix_equality(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#infix_equality.
    exitInfix_equality(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#infix_inequality.
    enterInfix_inequality(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#infix_inequality.
    exitInfix_inequality(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#constant.
    enterConstant(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#constant.
    exitConstant(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#functor.
    enterFunctor(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#functor.
    exitFunctor(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#defined_constant.
    enterDefined_constant(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#defined_constant.
    exitDefined_constant(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#defined_functor.
    enterDefined_functor(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#defined_functor.
    exitDefined_functor(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#system_constant.
    enterSystem_constant(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#system_constant.
    exitSystem_constant(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#system_functor.
    enterSystem_functor(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#system_functor.
    exitSystem_functor(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#def_or_sys_constant.
    enterDef_or_sys_constant(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#def_or_sys_constant.
    exitDef_or_sys_constant(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#th1_defined_term.
    enterTh1_defined_term(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#th1_defined_term.
    exitTh1_defined_term(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#defined_term.
    enterDefined_term(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#defined_term.
    exitDefined_term(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#variable.
    enterVariable(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#variable.
    exitVariable(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#source.
    enterSource(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#source.
    exitSource(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#sources.
    enterSources(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#sources.
    exitSources(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#dag_source.
    enterDag_source(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#dag_source.
    exitDag_source(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#inference_record.
    enterInference_record(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#inference_record.
    exitInference_record(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#inference_rule.
    enterInference_rule(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#inference_rule.
    exitInference_rule(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#internal_source.
    enterInternal_source(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#internal_source.
    exitInternal_source(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#intro_type.
    enterIntro_type(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#intro_type.
    exitIntro_type(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#external_source.
    enterExternal_source(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#external_source.
    exitExternal_source(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#file_source.
    enterFile_source(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#file_source.
    exitFile_source(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#file_info.
    enterFile_info(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#file_info.
    exitFile_info(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#theory.
    enterTheory(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#theory.
    exitTheory(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#theory_name.
    enterTheory_name(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#theory_name.
    exitTheory_name(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#creator_source.
    enterCreator_source(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#creator_source.
    exitCreator_source(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#creator_name.
    enterCreator_name(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#creator_name.
    exitCreator_name(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#parents.
    enterParents(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#parents.
    exitParents(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#parent_list.
    enterParent_list(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#parent_list.
    exitParent_list(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#comma_parent_info.
    enterComma_parent_info(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#comma_parent_info.
    exitComma_parent_info(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#parent_info.
    enterParent_info(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#parent_info.
    exitParent_info(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#parent_details.
    enterParent_details(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#parent_details.
    exitParent_details(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#optional_info.
    enterOptional_info(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#optional_info.
    exitOptional_info(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#useful_info.
    enterUseful_info(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#useful_info.
    exitUseful_info(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#include.
    enterInclude(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#include.
    exitInclude(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#include_optionals.
    enterInclude_optionals(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#include_optionals.
    exitInclude_optionals(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#formula_selection.
    enterFormula_selection(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#formula_selection.
    exitFormula_selection(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#name_list.
    enterName_list(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#name_list.
    exitName_list(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#space_name.
    enterSpace_name(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#space_name.
    exitSpace_name(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#general_term.
    enterGeneral_term(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#general_term.
    exitGeneral_term(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#general_data.
    enterGeneral_data(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#general_data.
    exitGeneral_data(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#general_function.
    enterGeneral_function(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#general_function.
    exitGeneral_function(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#formula_data.
    enterFormula_data(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#formula_data.
    exitFormula_data(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#general_list.
    enterGeneral_list(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#general_list.
    exitGeneral_list(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#general_terms.
    enterGeneral_terms(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#general_terms.
    exitGeneral_terms(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#comma_general_term.
    enterComma_general_term(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#comma_general_term.
    exitComma_general_term(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#name.
    enterName(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#name.
    exitName(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#atomic_word.
    enterAtomic_word(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#atomic_word.
    exitAtomic_word(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#atomic_defined_word.
    enterAtomic_defined_word(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#atomic_defined_word.
    exitAtomic_defined_word(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#atomic_system_word.
    enterAtomic_system_word(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#atomic_system_word.
    exitAtomic_system_word(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#number.
    enterNumber(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#number.
    exitNumber(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#file_name.
    enterFile_name(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#file_name.
    exitFile_name(ctx) {
    }
    // Enter a parse tree produced by TPTPParser#nothing.
    enterNothing(ctx) {
    }
    // Exit a parse tree produced by TPTPParser#nothing.
    exitNothing(ctx) {
    }
  };

  // TPTPParser.js
  var serializedATN2 = [
    4,
    1,
    106,
    1771,
    2,
    0,
    7,
    0,
    2,
    1,
    7,
    1,
    2,
    2,
    7,
    2,
    2,
    3,
    7,
    3,
    2,
    4,
    7,
    4,
    2,
    5,
    7,
    5,
    2,
    6,
    7,
    6,
    2,
    7,
    7,
    7,
    2,
    8,
    7,
    8,
    2,
    9,
    7,
    9,
    2,
    10,
    7,
    10,
    2,
    11,
    7,
    11,
    2,
    12,
    7,
    12,
    2,
    13,
    7,
    13,
    2,
    14,
    7,
    14,
    2,
    15,
    7,
    15,
    2,
    16,
    7,
    16,
    2,
    17,
    7,
    17,
    2,
    18,
    7,
    18,
    2,
    19,
    7,
    19,
    2,
    20,
    7,
    20,
    2,
    21,
    7,
    21,
    2,
    22,
    7,
    22,
    2,
    23,
    7,
    23,
    2,
    24,
    7,
    24,
    2,
    25,
    7,
    25,
    2,
    26,
    7,
    26,
    2,
    27,
    7,
    27,
    2,
    28,
    7,
    28,
    2,
    29,
    7,
    29,
    2,
    30,
    7,
    30,
    2,
    31,
    7,
    31,
    2,
    32,
    7,
    32,
    2,
    33,
    7,
    33,
    2,
    34,
    7,
    34,
    2,
    35,
    7,
    35,
    2,
    36,
    7,
    36,
    2,
    37,
    7,
    37,
    2,
    38,
    7,
    38,
    2,
    39,
    7,
    39,
    2,
    40,
    7,
    40,
    2,
    41,
    7,
    41,
    2,
    42,
    7,
    42,
    2,
    43,
    7,
    43,
    2,
    44,
    7,
    44,
    2,
    45,
    7,
    45,
    2,
    46,
    7,
    46,
    2,
    47,
    7,
    47,
    2,
    48,
    7,
    48,
    2,
    49,
    7,
    49,
    2,
    50,
    7,
    50,
    2,
    51,
    7,
    51,
    2,
    52,
    7,
    52,
    2,
    53,
    7,
    53,
    2,
    54,
    7,
    54,
    2,
    55,
    7,
    55,
    2,
    56,
    7,
    56,
    2,
    57,
    7,
    57,
    2,
    58,
    7,
    58,
    2,
    59,
    7,
    59,
    2,
    60,
    7,
    60,
    2,
    61,
    7,
    61,
    2,
    62,
    7,
    62,
    2,
    63,
    7,
    63,
    2,
    64,
    7,
    64,
    2,
    65,
    7,
    65,
    2,
    66,
    7,
    66,
    2,
    67,
    7,
    67,
    2,
    68,
    7,
    68,
    2,
    69,
    7,
    69,
    2,
    70,
    7,
    70,
    2,
    71,
    7,
    71,
    2,
    72,
    7,
    72,
    2,
    73,
    7,
    73,
    2,
    74,
    7,
    74,
    2,
    75,
    7,
    75,
    2,
    76,
    7,
    76,
    2,
    77,
    7,
    77,
    2,
    78,
    7,
    78,
    2,
    79,
    7,
    79,
    2,
    80,
    7,
    80,
    2,
    81,
    7,
    81,
    2,
    82,
    7,
    82,
    2,
    83,
    7,
    83,
    2,
    84,
    7,
    84,
    2,
    85,
    7,
    85,
    2,
    86,
    7,
    86,
    2,
    87,
    7,
    87,
    2,
    88,
    7,
    88,
    2,
    89,
    7,
    89,
    2,
    90,
    7,
    90,
    2,
    91,
    7,
    91,
    2,
    92,
    7,
    92,
    2,
    93,
    7,
    93,
    2,
    94,
    7,
    94,
    2,
    95,
    7,
    95,
    2,
    96,
    7,
    96,
    2,
    97,
    7,
    97,
    2,
    98,
    7,
    98,
    2,
    99,
    7,
    99,
    2,
    100,
    7,
    100,
    2,
    101,
    7,
    101,
    2,
    102,
    7,
    102,
    2,
    103,
    7,
    103,
    2,
    104,
    7,
    104,
    2,
    105,
    7,
    105,
    2,
    106,
    7,
    106,
    2,
    107,
    7,
    107,
    2,
    108,
    7,
    108,
    2,
    109,
    7,
    109,
    2,
    110,
    7,
    110,
    2,
    111,
    7,
    111,
    2,
    112,
    7,
    112,
    2,
    113,
    7,
    113,
    2,
    114,
    7,
    114,
    2,
    115,
    7,
    115,
    2,
    116,
    7,
    116,
    2,
    117,
    7,
    117,
    2,
    118,
    7,
    118,
    2,
    119,
    7,
    119,
    2,
    120,
    7,
    120,
    2,
    121,
    7,
    121,
    2,
    122,
    7,
    122,
    2,
    123,
    7,
    123,
    2,
    124,
    7,
    124,
    2,
    125,
    7,
    125,
    2,
    126,
    7,
    126,
    2,
    127,
    7,
    127,
    2,
    128,
    7,
    128,
    2,
    129,
    7,
    129,
    2,
    130,
    7,
    130,
    2,
    131,
    7,
    131,
    2,
    132,
    7,
    132,
    2,
    133,
    7,
    133,
    2,
    134,
    7,
    134,
    2,
    135,
    7,
    135,
    2,
    136,
    7,
    136,
    2,
    137,
    7,
    137,
    2,
    138,
    7,
    138,
    2,
    139,
    7,
    139,
    2,
    140,
    7,
    140,
    2,
    141,
    7,
    141,
    2,
    142,
    7,
    142,
    2,
    143,
    7,
    143,
    2,
    144,
    7,
    144,
    2,
    145,
    7,
    145,
    2,
    146,
    7,
    146,
    2,
    147,
    7,
    147,
    2,
    148,
    7,
    148,
    2,
    149,
    7,
    149,
    2,
    150,
    7,
    150,
    2,
    151,
    7,
    151,
    2,
    152,
    7,
    152,
    2,
    153,
    7,
    153,
    2,
    154,
    7,
    154,
    2,
    155,
    7,
    155,
    2,
    156,
    7,
    156,
    2,
    157,
    7,
    157,
    2,
    158,
    7,
    158,
    2,
    159,
    7,
    159,
    2,
    160,
    7,
    160,
    2,
    161,
    7,
    161,
    2,
    162,
    7,
    162,
    2,
    163,
    7,
    163,
    2,
    164,
    7,
    164,
    2,
    165,
    7,
    165,
    2,
    166,
    7,
    166,
    2,
    167,
    7,
    167,
    2,
    168,
    7,
    168,
    2,
    169,
    7,
    169,
    2,
    170,
    7,
    170,
    2,
    171,
    7,
    171,
    2,
    172,
    7,
    172,
    2,
    173,
    7,
    173,
    2,
    174,
    7,
    174,
    2,
    175,
    7,
    175,
    2,
    176,
    7,
    176,
    2,
    177,
    7,
    177,
    2,
    178,
    7,
    178,
    2,
    179,
    7,
    179,
    2,
    180,
    7,
    180,
    2,
    181,
    7,
    181,
    2,
    182,
    7,
    182,
    2,
    183,
    7,
    183,
    2,
    184,
    7,
    184,
    2,
    185,
    7,
    185,
    2,
    186,
    7,
    186,
    2,
    187,
    7,
    187,
    2,
    188,
    7,
    188,
    2,
    189,
    7,
    189,
    2,
    190,
    7,
    190,
    2,
    191,
    7,
    191,
    2,
    192,
    7,
    192,
    2,
    193,
    7,
    193,
    2,
    194,
    7,
    194,
    2,
    195,
    7,
    195,
    2,
    196,
    7,
    196,
    2,
    197,
    7,
    197,
    2,
    198,
    7,
    198,
    2,
    199,
    7,
    199,
    2,
    200,
    7,
    200,
    2,
    201,
    7,
    201,
    2,
    202,
    7,
    202,
    2,
    203,
    7,
    203,
    2,
    204,
    7,
    204,
    2,
    205,
    7,
    205,
    2,
    206,
    7,
    206,
    2,
    207,
    7,
    207,
    2,
    208,
    7,
    208,
    2,
    209,
    7,
    209,
    2,
    210,
    7,
    210,
    2,
    211,
    7,
    211,
    2,
    212,
    7,
    212,
    2,
    213,
    7,
    213,
    2,
    214,
    7,
    214,
    2,
    215,
    7,
    215,
    2,
    216,
    7,
    216,
    2,
    217,
    7,
    217,
    2,
    218,
    7,
    218,
    2,
    219,
    7,
    219,
    2,
    220,
    7,
    220,
    2,
    221,
    7,
    221,
    2,
    222,
    7,
    222,
    2,
    223,
    7,
    223,
    2,
    224,
    7,
    224,
    2,
    225,
    7,
    225,
    2,
    226,
    7,
    226,
    2,
    227,
    7,
    227,
    2,
    228,
    7,
    228,
    2,
    229,
    7,
    229,
    2,
    230,
    7,
    230,
    2,
    231,
    7,
    231,
    1,
    0,
    5,
    0,
    466,
    8,
    0,
    10,
    0,
    12,
    0,
    469,
    9,
    0,
    1,
    0,
    1,
    0,
    1,
    1,
    1,
    1,
    3,
    1,
    475,
    8,
    1,
    1,
    2,
    1,
    2,
    1,
    2,
    1,
    2,
    1,
    2,
    1,
    2,
    3,
    2,
    483,
    8,
    2,
    1,
    3,
    1,
    3,
    1,
    3,
    1,
    3,
    1,
    3,
    1,
    3,
    1,
    3,
    1,
    3,
    1,
    3,
    1,
    4,
    1,
    4,
    1,
    5,
    1,
    5,
    1,
    5,
    1,
    5,
    1,
    5,
    1,
    5,
    1,
    5,
    1,
    5,
    1,
    5,
    1,
    6,
    1,
    6,
    1,
    6,
    1,
    6,
    1,
    6,
    1,
    6,
    1,
    6,
    1,
    6,
    1,
    6,
    1,
    7,
    1,
    7,
    1,
    7,
    1,
    7,
    1,
    7,
    1,
    7,
    1,
    7,
    1,
    7,
    1,
    7,
    1,
    8,
    1,
    8,
    1,
    8,
    1,
    8,
    1,
    8,
    1,
    8,
    1,
    8,
    1,
    8,
    1,
    8,
    1,
    9,
    1,
    9,
    1,
    9,
    1,
    9,
    1,
    9,
    1,
    9,
    1,
    9,
    1,
    9,
    1,
    9,
    1,
    10,
    1,
    10,
    1,
    10,
    1,
    10,
    1,
    10,
    3,
    10,
    546,
    8,
    10,
    1,
    11,
    1,
    11,
    1,
    11,
    1,
    11,
    3,
    11,
    552,
    8,
    11,
    1,
    12,
    1,
    12,
    1,
    12,
    3,
    12,
    557,
    8,
    12,
    1,
    13,
    1,
    13,
    1,
    13,
    1,
    13,
    1,
    13,
    1,
    13,
    3,
    13,
    565,
    8,
    13,
    1,
    14,
    1,
    14,
    1,
    14,
    3,
    14,
    570,
    8,
    14,
    1,
    15,
    1,
    15,
    1,
    15,
    1,
    15,
    1,
    16,
    1,
    16,
    1,
    16,
    3,
    16,
    579,
    8,
    16,
    1,
    17,
    1,
    17,
    1,
    17,
    1,
    17,
    1,
    17,
    1,
    17,
    1,
    17,
    1,
    17,
    5,
    17,
    589,
    8,
    17,
    10,
    17,
    12,
    17,
    592,
    9,
    17,
    1,
    18,
    1,
    18,
    1,
    18,
    1,
    18,
    1,
    18,
    1,
    18,
    1,
    18,
    1,
    18,
    5,
    18,
    602,
    8,
    18,
    10,
    18,
    12,
    18,
    605,
    9,
    18,
    1,
    19,
    1,
    19,
    1,
    19,
    1,
    19,
    1,
    19,
    1,
    19,
    1,
    19,
    1,
    19,
    5,
    19,
    615,
    8,
    19,
    10,
    19,
    12,
    19,
    618,
    9,
    19,
    1,
    20,
    1,
    20,
    1,
    20,
    3,
    20,
    623,
    8,
    20,
    1,
    21,
    1,
    21,
    3,
    21,
    627,
    8,
    21,
    1,
    22,
    1,
    22,
    1,
    22,
    1,
    22,
    1,
    22,
    1,
    22,
    1,
    22,
    3,
    22,
    636,
    8,
    22,
    1,
    23,
    1,
    23,
    1,
    23,
    1,
    24,
    1,
    24,
    1,
    24,
    1,
    24,
    1,
    24,
    1,
    24,
    1,
    25,
    1,
    25,
    1,
    25,
    1,
    25,
    1,
    25,
    3,
    25,
    652,
    8,
    25,
    1,
    26,
    1,
    26,
    1,
    26,
    1,
    26,
    1,
    27,
    1,
    27,
    3,
    27,
    660,
    8,
    27,
    1,
    28,
    1,
    28,
    1,
    28,
    1,
    29,
    1,
    29,
    1,
    29,
    1,
    29,
    1,
    30,
    1,
    30,
    1,
    30,
    1,
    30,
    3,
    30,
    673,
    8,
    30,
    1,
    31,
    1,
    31,
    3,
    31,
    677,
    8,
    31,
    1,
    32,
    1,
    32,
    1,
    32,
    1,
    32,
    1,
    32,
    1,
    32,
    1,
    32,
    1,
    32,
    3,
    32,
    687,
    8,
    32,
    1,
    33,
    1,
    33,
    3,
    33,
    691,
    8,
    33,
    1,
    34,
    1,
    34,
    1,
    34,
    1,
    34,
    1,
    35,
    1,
    35,
    1,
    36,
    1,
    36,
    1,
    36,
    1,
    36,
    1,
    36,
    1,
    36,
    1,
    36,
    1,
    36,
    1,
    37,
    1,
    37,
    1,
    37,
    1,
    37,
    1,
    37,
    3,
    37,
    712,
    8,
    37,
    1,
    38,
    1,
    38,
    1,
    38,
    1,
    38,
    1,
    38,
    3,
    38,
    719,
    8,
    38,
    1,
    39,
    1,
    39,
    1,
    39,
    1,
    39,
    1,
    39,
    3,
    39,
    726,
    8,
    39,
    1,
    40,
    1,
    40,
    1,
    40,
    1,
    40,
    1,
    41,
    1,
    41,
    1,
    41,
    1,
    41,
    1,
    41,
    3,
    41,
    737,
    8,
    41,
    1,
    42,
    1,
    42,
    1,
    42,
    1,
    42,
    1,
    42,
    1,
    42,
    3,
    42,
    745,
    8,
    42,
    1,
    43,
    1,
    43,
    1,
    43,
    1,
    43,
    1,
    43,
    3,
    43,
    752,
    8,
    43,
    1,
    44,
    1,
    44,
    1,
    44,
    1,
    44,
    1,
    44,
    3,
    44,
    759,
    8,
    44,
    1,
    45,
    1,
    45,
    1,
    45,
    1,
    45,
    1,
    45,
    1,
    45,
    1,
    45,
    1,
    45,
    1,
    45,
    1,
    45,
    1,
    45,
    1,
    45,
    1,
    45,
    1,
    45,
    1,
    45,
    3,
    45,
    776,
    8,
    45,
    1,
    46,
    1,
    46,
    1,
    47,
    1,
    47,
    5,
    47,
    782,
    8,
    47,
    10,
    47,
    12,
    47,
    785,
    9,
    47,
    1,
    48,
    1,
    48,
    1,
    48,
    1,
    49,
    1,
    49,
    1,
    49,
    1,
    49,
    1,
    49,
    1,
    49,
    1,
    49,
    1,
    49,
    3,
    49,
    798,
    8,
    49,
    1,
    50,
    1,
    50,
    1,
    50,
    3,
    50,
    803,
    8,
    50,
    1,
    51,
    1,
    51,
    1,
    52,
    1,
    52,
    1,
    53,
    1,
    53,
    1,
    53,
    3,
    53,
    812,
    8,
    53,
    1,
    54,
    1,
    54,
    1,
    54,
    1,
    54,
    1,
    54,
    1,
    54,
    1,
    54,
    1,
    54,
    3,
    54,
    822,
    8,
    54,
    1,
    55,
    1,
    55,
    1,
    55,
    1,
    55,
    1,
    55,
    1,
    55,
    1,
    55,
    1,
    55,
    5,
    55,
    832,
    8,
    55,
    10,
    55,
    12,
    55,
    835,
    9,
    55,
    1,
    56,
    1,
    56,
    1,
    56,
    1,
    56,
    1,
    56,
    1,
    56,
    1,
    56,
    1,
    56,
    5,
    56,
    845,
    8,
    56,
    10,
    56,
    12,
    56,
    848,
    9,
    56,
    1,
    57,
    1,
    57,
    1,
    57,
    1,
    57,
    1,
    58,
    1,
    58,
    1,
    58,
    1,
    58,
    1,
    59,
    1,
    59,
    1,
    59,
    1,
    59,
    1,
    60,
    1,
    60,
    1,
    60,
    3,
    60,
    865,
    8,
    60,
    1,
    61,
    1,
    61,
    1,
    61,
    1,
    61,
    1,
    61,
    1,
    61,
    3,
    61,
    873,
    8,
    61,
    1,
    62,
    1,
    62,
    3,
    62,
    877,
    8,
    62,
    1,
    63,
    1,
    63,
    1,
    63,
    1,
    63,
    1,
    64,
    1,
    64,
    3,
    64,
    885,
    8,
    64,
    1,
    65,
    1,
    65,
    1,
    65,
    1,
    65,
    1,
    65,
    1,
    65,
    1,
    65,
    1,
    65,
    5,
    65,
    895,
    8,
    65,
    10,
    65,
    12,
    65,
    898,
    9,
    65,
    1,
    66,
    1,
    66,
    1,
    66,
    1,
    66,
    1,
    66,
    1,
    66,
    1,
    66,
    1,
    66,
    5,
    66,
    908,
    8,
    66,
    10,
    66,
    12,
    66,
    911,
    9,
    66,
    1,
    67,
    1,
    67,
    1,
    67,
    3,
    67,
    916,
    8,
    67,
    1,
    68,
    1,
    68,
    3,
    68,
    920,
    8,
    68,
    1,
    69,
    1,
    69,
    1,
    69,
    1,
    69,
    1,
    69,
    1,
    69,
    1,
    69,
    3,
    69,
    929,
    8,
    69,
    1,
    70,
    1,
    70,
    1,
    71,
    1,
    71,
    1,
    71,
    1,
    71,
    1,
    71,
    1,
    71,
    1,
    71,
    1,
    72,
    1,
    72,
    1,
    72,
    1,
    72,
    1,
    72,
    3,
    72,
    945,
    8,
    72,
    1,
    73,
    1,
    73,
    3,
    73,
    949,
    8,
    73,
    1,
    74,
    1,
    74,
    1,
    74,
    1,
    74,
    1,
    75,
    1,
    75,
    3,
    75,
    957,
    8,
    75,
    1,
    76,
    1,
    76,
    1,
    76,
    1,
    77,
    1,
    77,
    1,
    77,
    1,
    77,
    1,
    78,
    1,
    78,
    1,
    78,
    3,
    78,
    969,
    8,
    78,
    1,
    79,
    1,
    79,
    1,
    79,
    1,
    79,
    1,
    79,
    1,
    79,
    3,
    79,
    977,
    8,
    79,
    1,
    80,
    1,
    80,
    1,
    81,
    1,
    81,
    1,
    81,
    1,
    81,
    1,
    81,
    1,
    81,
    1,
    81,
    1,
    81,
    3,
    81,
    989,
    8,
    81,
    1,
    82,
    1,
    82,
    1,
    82,
    1,
    82,
    1,
    83,
    1,
    83,
    1,
    83,
    1,
    83,
    1,
    83,
    1,
    83,
    3,
    83,
    1001,
    8,
    83,
    1,
    84,
    1,
    84,
    1,
    84,
    1,
    84,
    1,
    84,
    1,
    84,
    1,
    84,
    1,
    84,
    1,
    85,
    1,
    85,
    1,
    85,
    1,
    85,
    1,
    85,
    3,
    85,
    1016,
    8,
    85,
    1,
    86,
    1,
    86,
    1,
    86,
    1,
    86,
    1,
    86,
    3,
    86,
    1023,
    8,
    86,
    1,
    87,
    1,
    87,
    1,
    87,
    1,
    87,
    1,
    87,
    3,
    87,
    1030,
    8,
    87,
    1,
    88,
    1,
    88,
    1,
    88,
    1,
    88,
    1,
    89,
    1,
    89,
    3,
    89,
    1038,
    8,
    89,
    1,
    90,
    1,
    90,
    1,
    90,
    1,
    90,
    1,
    90,
    3,
    90,
    1045,
    8,
    90,
    1,
    91,
    1,
    91,
    1,
    91,
    1,
    91,
    1,
    91,
    1,
    91,
    1,
    92,
    1,
    92,
    1,
    92,
    3,
    92,
    1056,
    8,
    92,
    1,
    93,
    1,
    93,
    1,
    93,
    1,
    93,
    1,
    93,
    1,
    93,
    1,
    93,
    1,
    93,
    3,
    93,
    1066,
    8,
    93,
    1,
    94,
    1,
    94,
    1,
    94,
    1,
    94,
    1,
    94,
    3,
    94,
    1073,
    8,
    94,
    1,
    95,
    1,
    95,
    5,
    95,
    1077,
    8,
    95,
    10,
    95,
    12,
    95,
    1080,
    9,
    95,
    1,
    96,
    1,
    96,
    1,
    96,
    1,
    97,
    1,
    97,
    1,
    97,
    1,
    97,
    1,
    97,
    1,
    97,
    1,
    97,
    1,
    97,
    3,
    97,
    1093,
    8,
    97,
    1,
    98,
    1,
    98,
    3,
    98,
    1097,
    8,
    98,
    1,
    99,
    1,
    99,
    1,
    99,
    1,
    99,
    1,
    99,
    1,
    99,
    3,
    99,
    1105,
    8,
    99,
    1,
    100,
    1,
    100,
    1,
    100,
    1,
    100,
    1,
    100,
    1,
    100,
    1,
    100,
    1,
    101,
    1,
    101,
    1,
    101,
    1,
    101,
    1,
    101,
    1,
    101,
    3,
    101,
    1120,
    8,
    101,
    1,
    102,
    1,
    102,
    1,
    102,
    1,
    102,
    1,
    102,
    3,
    102,
    1127,
    8,
    102,
    1,
    103,
    1,
    103,
    1,
    103,
    1,
    103,
    1,
    103,
    1,
    103,
    1,
    103,
    1,
    103,
    1,
    103,
    1,
    103,
    1,
    103,
    1,
    103,
    1,
    103,
    3,
    103,
    1142,
    8,
    103,
    1,
    104,
    1,
    104,
    1,
    104,
    1,
    104,
    1,
    104,
    3,
    104,
    1149,
    8,
    104,
    1,
    105,
    1,
    105,
    1,
    105,
    1,
    105,
    1,
    106,
    1,
    106,
    1,
    106,
    1,
    106,
    1,
    106,
    1,
    106,
    1,
    106,
    1,
    106,
    5,
    106,
    1163,
    8,
    106,
    10,
    106,
    12,
    106,
    1166,
    9,
    106,
    1,
    107,
    1,
    107,
    1,
    107,
    1,
    107,
    1,
    108,
    1,
    108,
    1,
    108,
    1,
    108,
    1,
    108,
    3,
    108,
    1177,
    8,
    108,
    1,
    109,
    1,
    109,
    1,
    109,
    1,
    109,
    1,
    110,
    1,
    110,
    1,
    110,
    1,
    110,
    1,
    111,
    1,
    111,
    1,
    111,
    1,
    111,
    1,
    112,
    1,
    112,
    1,
    112,
    1,
    112,
    1,
    112,
    1,
    112,
    1,
    112,
    1,
    112,
    1,
    112,
    1,
    112,
    3,
    112,
    1201,
    8,
    112,
    1,
    113,
    1,
    113,
    1,
    113,
    1,
    113,
    1,
    113,
    3,
    113,
    1208,
    8,
    113,
    1,
    114,
    1,
    114,
    3,
    114,
    1212,
    8,
    114,
    1,
    115,
    1,
    115,
    1,
    116,
    1,
    116,
    1,
    116,
    1,
    116,
    1,
    116,
    1,
    116,
    1,
    116,
    1,
    116,
    1,
    116,
    1,
    116,
    3,
    116,
    1226,
    8,
    116,
    1,
    117,
    1,
    117,
    1,
    117,
    1,
    117,
    1,
    117,
    3,
    117,
    1233,
    8,
    117,
    1,
    118,
    1,
    118,
    3,
    118,
    1237,
    8,
    118,
    1,
    119,
    1,
    119,
    1,
    120,
    1,
    120,
    1,
    121,
    1,
    121,
    1,
    121,
    1,
    122,
    1,
    122,
    1,
    122,
    1,
    122,
    1,
    122,
    1,
    122,
    3,
    122,
    1252,
    8,
    122,
    1,
    123,
    1,
    123,
    3,
    123,
    1256,
    8,
    123,
    1,
    124,
    1,
    124,
    3,
    124,
    1260,
    8,
    124,
    1,
    125,
    1,
    125,
    1,
    125,
    1,
    125,
    1,
    125,
    1,
    125,
    1,
    125,
    1,
    126,
    1,
    126,
    3,
    126,
    1271,
    8,
    126,
    1,
    127,
    1,
    127,
    1,
    127,
    3,
    127,
    1276,
    8,
    127,
    1,
    128,
    1,
    128,
    3,
    128,
    1280,
    8,
    128,
    1,
    129,
    1,
    129,
    1,
    129,
    1,
    129,
    1,
    130,
    1,
    130,
    3,
    130,
    1288,
    8,
    130,
    1,
    131,
    1,
    131,
    1,
    131,
    1,
    131,
    1,
    131,
    1,
    131,
    1,
    131,
    1,
    131,
    5,
    131,
    1298,
    8,
    131,
    10,
    131,
    12,
    131,
    1301,
    9,
    131,
    1,
    132,
    1,
    132,
    1,
    132,
    1,
    132,
    1,
    132,
    1,
    132,
    1,
    132,
    1,
    132,
    5,
    132,
    1311,
    8,
    132,
    10,
    132,
    12,
    132,
    1314,
    9,
    132,
    1,
    133,
    1,
    133,
    1,
    133,
    1,
    133,
    3,
    133,
    1320,
    8,
    133,
    1,
    134,
    1,
    134,
    1,
    134,
    1,
    134,
    1,
    135,
    1,
    135,
    3,
    135,
    1328,
    8,
    135,
    1,
    136,
    1,
    136,
    1,
    136,
    1,
    136,
    1,
    136,
    1,
    136,
    3,
    136,
    1336,
    8,
    136,
    1,
    137,
    1,
    137,
    1,
    137,
    1,
    137,
    1,
    137,
    1,
    137,
    1,
    137,
    1,
    138,
    1,
    138,
    1,
    138,
    1,
    138,
    1,
    138,
    3,
    138,
    1350,
    8,
    138,
    1,
    139,
    1,
    139,
    1,
    139,
    3,
    139,
    1355,
    8,
    139,
    1,
    140,
    1,
    140,
    1,
    141,
    1,
    141,
    3,
    141,
    1361,
    8,
    141,
    1,
    142,
    1,
    142,
    1,
    143,
    1,
    143,
    1,
    143,
    1,
    143,
    1,
    144,
    1,
    144,
    1,
    145,
    1,
    145,
    1,
    145,
    1,
    145,
    1,
    145,
    1,
    145,
    3,
    145,
    1377,
    8,
    145,
    1,
    146,
    1,
    146,
    3,
    146,
    1381,
    8,
    146,
    1,
    147,
    1,
    147,
    1,
    148,
    1,
    148,
    1,
    148,
    1,
    148,
    1,
    148,
    1,
    148,
    3,
    148,
    1391,
    8,
    148,
    1,
    149,
    1,
    149,
    1,
    149,
    1,
    149,
    1,
    149,
    1,
    149,
    3,
    149,
    1399,
    8,
    149,
    1,
    150,
    1,
    150,
    1,
    150,
    1,
    150,
    1,
    150,
    3,
    150,
    1406,
    8,
    150,
    1,
    151,
    1,
    151,
    3,
    151,
    1410,
    8,
    151,
    1,
    152,
    1,
    152,
    1,
    152,
    3,
    152,
    1415,
    8,
    152,
    1,
    153,
    1,
    153,
    1,
    153,
    1,
    153,
    1,
    153,
    1,
    153,
    1,
    153,
    1,
    153,
    3,
    153,
    1425,
    8,
    153,
    1,
    154,
    1,
    154,
    1,
    154,
    1,
    154,
    1,
    154,
    3,
    154,
    1432,
    8,
    154,
    1,
    155,
    1,
    155,
    5,
    155,
    1436,
    8,
    155,
    10,
    155,
    12,
    155,
    1439,
    9,
    155,
    1,
    156,
    1,
    156,
    1,
    156,
    1,
    157,
    1,
    157,
    1,
    157,
    1,
    157,
    1,
    157,
    3,
    157,
    1449,
    8,
    157,
    1,
    158,
    1,
    158,
    1,
    158,
    1,
    158,
    1,
    158,
    1,
    158,
    5,
    158,
    1457,
    8,
    158,
    10,
    158,
    12,
    158,
    1460,
    9,
    158,
    1,
    159,
    1,
    159,
    1,
    159,
    1,
    159,
    1,
    159,
    1,
    159,
    1,
    159,
    1,
    159,
    1,
    159,
    3,
    159,
    1471,
    8,
    159,
    1,
    160,
    1,
    160,
    1,
    160,
    3,
    160,
    1476,
    8,
    160,
    1,
    161,
    1,
    161,
    3,
    161,
    1480,
    8,
    161,
    1,
    162,
    1,
    162,
    1,
    163,
    1,
    163,
    1,
    164,
    1,
    164,
    1,
    165,
    1,
    165,
    3,
    165,
    1490,
    8,
    165,
    1,
    166,
    1,
    166,
    1,
    167,
    1,
    167,
    1,
    168,
    1,
    168,
    1,
    168,
    1,
    168,
    1,
    168,
    1,
    168,
    1,
    168,
    3,
    168,
    1503,
    8,
    168,
    1,
    169,
    1,
    169,
    1,
    170,
    1,
    170,
    1,
    171,
    1,
    171,
    1,
    172,
    1,
    172,
    1,
    173,
    1,
    173,
    1,
    174,
    1,
    174,
    1,
    175,
    1,
    175,
    1,
    176,
    1,
    176,
    1,
    177,
    1,
    177,
    3,
    177,
    1523,
    8,
    177,
    1,
    178,
    1,
    178,
    3,
    178,
    1527,
    8,
    178,
    1,
    179,
    1,
    179,
    1,
    180,
    1,
    180,
    1,
    181,
    1,
    181,
    1,
    182,
    1,
    182,
    1,
    183,
    1,
    183,
    1,
    184,
    1,
    184,
    1,
    185,
    1,
    185,
    1,
    186,
    1,
    186,
    1,
    187,
    1,
    187,
    1,
    188,
    1,
    188,
    3,
    188,
    1549,
    8,
    188,
    1,
    189,
    1,
    189,
    1,
    190,
    1,
    190,
    3,
    190,
    1555,
    8,
    190,
    1,
    191,
    1,
    191,
    1,
    192,
    1,
    192,
    1,
    192,
    1,
    192,
    1,
    192,
    1,
    192,
    1,
    192,
    1,
    192,
    3,
    192,
    1567,
    8,
    192,
    1,
    193,
    1,
    193,
    1,
    193,
    1,
    193,
    1,
    193,
    3,
    193,
    1574,
    8,
    193,
    1,
    194,
    1,
    194,
    3,
    194,
    1578,
    8,
    194,
    1,
    195,
    1,
    195,
    1,
    195,
    1,
    195,
    1,
    195,
    1,
    195,
    1,
    195,
    1,
    195,
    1,
    196,
    1,
    196,
    1,
    197,
    1,
    197,
    1,
    197,
    1,
    197,
    1,
    197,
    1,
    197,
    1,
    197,
    1,
    197,
    1,
    198,
    1,
    198,
    1,
    199,
    1,
    199,
    1,
    199,
    3,
    199,
    1603,
    8,
    199,
    1,
    200,
    1,
    200,
    1,
    200,
    1,
    200,
    1,
    200,
    1,
    201,
    1,
    201,
    1,
    201,
    3,
    201,
    1613,
    8,
    201,
    1,
    202,
    1,
    202,
    1,
    202,
    1,
    202,
    1,
    202,
    1,
    203,
    1,
    203,
    1,
    204,
    1,
    204,
    1,
    204,
    1,
    204,
    1,
    204,
    1,
    204,
    1,
    204,
    1,
    204,
    1,
    205,
    1,
    205,
    1,
    206,
    1,
    206,
    1,
    206,
    1,
    206,
    1,
    206,
    3,
    206,
    1637,
    8,
    206,
    1,
    207,
    1,
    207,
    5,
    207,
    1641,
    8,
    207,
    10,
    207,
    12,
    207,
    1644,
    9,
    207,
    1,
    208,
    1,
    208,
    1,
    208,
    1,
    209,
    1,
    209,
    1,
    209,
    1,
    210,
    1,
    210,
    1,
    210,
    3,
    210,
    1655,
    8,
    210,
    1,
    211,
    1,
    211,
    1,
    211,
    3,
    211,
    1660,
    8,
    211,
    1,
    212,
    1,
    212,
    1,
    213,
    1,
    213,
    1,
    213,
    1,
    213,
    1,
    213,
    1,
    214,
    1,
    214,
    1,
    214,
    1,
    214,
    1,
    214,
    1,
    214,
    1,
    214,
    1,
    214,
    3,
    214,
    1677,
    8,
    214,
    1,
    215,
    1,
    215,
    1,
    215,
    1,
    215,
    1,
    215,
    3,
    215,
    1684,
    8,
    215,
    1,
    216,
    1,
    216,
    1,
    216,
    1,
    216,
    1,
    216,
    3,
    216,
    1691,
    8,
    216,
    1,
    217,
    1,
    217,
    1,
    218,
    1,
    218,
    1,
    218,
    1,
    218,
    1,
    218,
    1,
    218,
    3,
    218,
    1701,
    8,
    218,
    1,
    219,
    1,
    219,
    1,
    219,
    1,
    219,
    1,
    219,
    1,
    219,
    3,
    219,
    1709,
    8,
    219,
    1,
    220,
    1,
    220,
    1,
    220,
    1,
    220,
    1,
    220,
    1,
    221,
    1,
    221,
    1,
    221,
    1,
    221,
    1,
    221,
    1,
    221,
    1,
    221,
    1,
    221,
    1,
    221,
    1,
    221,
    1,
    221,
    1,
    221,
    1,
    221,
    1,
    221,
    1,
    221,
    1,
    221,
    1,
    221,
    1,
    221,
    1,
    221,
    1,
    221,
    3,
    221,
    1736,
    8,
    221,
    1,
    222,
    1,
    222,
    1,
    222,
    1,
    222,
    1,
    222,
    3,
    222,
    1743,
    8,
    222,
    1,
    223,
    1,
    223,
    5,
    223,
    1747,
    8,
    223,
    10,
    223,
    12,
    223,
    1750,
    9,
    223,
    1,
    224,
    1,
    224,
    1,
    224,
    1,
    225,
    1,
    225,
    3,
    225,
    1757,
    8,
    225,
    1,
    226,
    1,
    226,
    1,
    227,
    1,
    227,
    1,
    228,
    1,
    228,
    1,
    229,
    1,
    229,
    1,
    230,
    1,
    230,
    1,
    231,
    1,
    231,
    1,
    231,
    0,
    11,
    34,
    36,
    38,
    110,
    112,
    130,
    132,
    212,
    262,
    264,
    316,
    232,
    0,
    2,
    4,
    6,
    8,
    10,
    12,
    14,
    16,
    18,
    20,
    22,
    24,
    26,
    28,
    30,
    32,
    34,
    36,
    38,
    40,
    42,
    44,
    46,
    48,
    50,
    52,
    54,
    56,
    58,
    60,
    62,
    64,
    66,
    68,
    70,
    72,
    74,
    76,
    78,
    80,
    82,
    84,
    86,
    88,
    90,
    92,
    94,
    96,
    98,
    100,
    102,
    104,
    106,
    108,
    110,
    112,
    114,
    116,
    118,
    120,
    122,
    124,
    126,
    128,
    130,
    132,
    134,
    136,
    138,
    140,
    142,
    144,
    146,
    148,
    150,
    152,
    154,
    156,
    158,
    160,
    162,
    164,
    166,
    168,
    170,
    172,
    174,
    176,
    178,
    180,
    182,
    184,
    186,
    188,
    190,
    192,
    194,
    196,
    198,
    200,
    202,
    204,
    206,
    208,
    210,
    212,
    214,
    216,
    218,
    220,
    222,
    224,
    226,
    228,
    230,
    232,
    234,
    236,
    238,
    240,
    242,
    244,
    246,
    248,
    250,
    252,
    254,
    256,
    258,
    260,
    262,
    264,
    266,
    268,
    270,
    272,
    274,
    276,
    278,
    280,
    282,
    284,
    286,
    288,
    290,
    292,
    294,
    296,
    298,
    300,
    302,
    304,
    306,
    308,
    310,
    312,
    314,
    316,
    318,
    320,
    322,
    324,
    326,
    328,
    330,
    332,
    334,
    336,
    338,
    340,
    342,
    344,
    346,
    348,
    350,
    352,
    354,
    356,
    358,
    360,
    362,
    364,
    366,
    368,
    370,
    372,
    374,
    376,
    378,
    380,
    382,
    384,
    386,
    388,
    390,
    392,
    394,
    396,
    398,
    400,
    402,
    404,
    406,
    408,
    410,
    412,
    414,
    416,
    418,
    420,
    422,
    424,
    426,
    428,
    430,
    432,
    434,
    436,
    438,
    440,
    442,
    444,
    446,
    448,
    450,
    452,
    454,
    456,
    458,
    460,
    462,
    0,
    7,
    2,
    0,
    19,
    19,
    29,
    29,
    1,
    0,
    30,
    32,
    3,
    0,
    27,
    27,
    34,
    34,
    77,
    77,
    2,
    0,
    10,
    10,
    72,
    72,
    1,
    0,
    45,
    49,
    2,
    0,
    66,
    66,
    71,
    71,
    3,
    0,
    78,
    78,
    81,
    81,
    84,
    84,
    1741,
    0,
    467,
    1,
    0,
    0,
    0,
    2,
    474,
    1,
    0,
    0,
    0,
    4,
    482,
    1,
    0,
    0,
    0,
    6,
    484,
    1,
    0,
    0,
    0,
    8,
    493,
    1,
    0,
    0,
    0,
    10,
    495,
    1,
    0,
    0,
    0,
    12,
    504,
    1,
    0,
    0,
    0,
    14,
    513,
    1,
    0,
    0,
    0,
    16,
    522,
    1,
    0,
    0,
    0,
    18,
    531,
    1,
    0,
    0,
    0,
    20,
    545,
    1,
    0,
    0,
    0,
    22,
    551,
    1,
    0,
    0,
    0,
    24,
    556,
    1,
    0,
    0,
    0,
    26,
    564,
    1,
    0,
    0,
    0,
    28,
    569,
    1,
    0,
    0,
    0,
    30,
    571,
    1,
    0,
    0,
    0,
    32,
    578,
    1,
    0,
    0,
    0,
    34,
    580,
    1,
    0,
    0,
    0,
    36,
    593,
    1,
    0,
    0,
    0,
    38,
    606,
    1,
    0,
    0,
    0,
    40,
    622,
    1,
    0,
    0,
    0,
    42,
    626,
    1,
    0,
    0,
    0,
    44,
    635,
    1,
    0,
    0,
    0,
    46,
    637,
    1,
    0,
    0,
    0,
    48,
    640,
    1,
    0,
    0,
    0,
    50,
    651,
    1,
    0,
    0,
    0,
    52,
    653,
    1,
    0,
    0,
    0,
    54,
    659,
    1,
    0,
    0,
    0,
    56,
    661,
    1,
    0,
    0,
    0,
    58,
    664,
    1,
    0,
    0,
    0,
    60,
    672,
    1,
    0,
    0,
    0,
    62,
    676,
    1,
    0,
    0,
    0,
    64,
    686,
    1,
    0,
    0,
    0,
    66,
    690,
    1,
    0,
    0,
    0,
    68,
    692,
    1,
    0,
    0,
    0,
    70,
    696,
    1,
    0,
    0,
    0,
    72,
    698,
    1,
    0,
    0,
    0,
    74,
    711,
    1,
    0,
    0,
    0,
    76,
    718,
    1,
    0,
    0,
    0,
    78,
    725,
    1,
    0,
    0,
    0,
    80,
    727,
    1,
    0,
    0,
    0,
    82,
    736,
    1,
    0,
    0,
    0,
    84,
    744,
    1,
    0,
    0,
    0,
    86,
    751,
    1,
    0,
    0,
    0,
    88,
    758,
    1,
    0,
    0,
    0,
    90,
    775,
    1,
    0,
    0,
    0,
    92,
    777,
    1,
    0,
    0,
    0,
    94,
    779,
    1,
    0,
    0,
    0,
    96,
    786,
    1,
    0,
    0,
    0,
    98,
    797,
    1,
    0,
    0,
    0,
    100,
    802,
    1,
    0,
    0,
    0,
    102,
    804,
    1,
    0,
    0,
    0,
    104,
    806,
    1,
    0,
    0,
    0,
    106,
    811,
    1,
    0,
    0,
    0,
    108,
    821,
    1,
    0,
    0,
    0,
    110,
    823,
    1,
    0,
    0,
    0,
    112,
    836,
    1,
    0,
    0,
    0,
    114,
    849,
    1,
    0,
    0,
    0,
    116,
    853,
    1,
    0,
    0,
    0,
    118,
    857,
    1,
    0,
    0,
    0,
    120,
    864,
    1,
    0,
    0,
    0,
    122,
    872,
    1,
    0,
    0,
    0,
    124,
    876,
    1,
    0,
    0,
    0,
    126,
    878,
    1,
    0,
    0,
    0,
    128,
    884,
    1,
    0,
    0,
    0,
    130,
    886,
    1,
    0,
    0,
    0,
    132,
    899,
    1,
    0,
    0,
    0,
    134,
    915,
    1,
    0,
    0,
    0,
    136,
    919,
    1,
    0,
    0,
    0,
    138,
    928,
    1,
    0,
    0,
    0,
    140,
    930,
    1,
    0,
    0,
    0,
    142,
    932,
    1,
    0,
    0,
    0,
    144,
    944,
    1,
    0,
    0,
    0,
    146,
    948,
    1,
    0,
    0,
    0,
    148,
    950,
    1,
    0,
    0,
    0,
    150,
    956,
    1,
    0,
    0,
    0,
    152,
    958,
    1,
    0,
    0,
    0,
    154,
    961,
    1,
    0,
    0,
    0,
    156,
    968,
    1,
    0,
    0,
    0,
    158,
    976,
    1,
    0,
    0,
    0,
    160,
    978,
    1,
    0,
    0,
    0,
    162,
    988,
    1,
    0,
    0,
    0,
    164,
    990,
    1,
    0,
    0,
    0,
    166,
    1e3,
    1,
    0,
    0,
    0,
    168,
    1002,
    1,
    0,
    0,
    0,
    170,
    1015,
    1,
    0,
    0,
    0,
    172,
    1022,
    1,
    0,
    0,
    0,
    174,
    1029,
    1,
    0,
    0,
    0,
    176,
    1031,
    1,
    0,
    0,
    0,
    178,
    1037,
    1,
    0,
    0,
    0,
    180,
    1044,
    1,
    0,
    0,
    0,
    182,
    1046,
    1,
    0,
    0,
    0,
    184,
    1055,
    1,
    0,
    0,
    0,
    186,
    1065,
    1,
    0,
    0,
    0,
    188,
    1072,
    1,
    0,
    0,
    0,
    190,
    1074,
    1,
    0,
    0,
    0,
    192,
    1081,
    1,
    0,
    0,
    0,
    194,
    1092,
    1,
    0,
    0,
    0,
    196,
    1096,
    1,
    0,
    0,
    0,
    198,
    1104,
    1,
    0,
    0,
    0,
    200,
    1106,
    1,
    0,
    0,
    0,
    202,
    1119,
    1,
    0,
    0,
    0,
    204,
    1126,
    1,
    0,
    0,
    0,
    206,
    1141,
    1,
    0,
    0,
    0,
    208,
    1148,
    1,
    0,
    0,
    0,
    210,
    1150,
    1,
    0,
    0,
    0,
    212,
    1154,
    1,
    0,
    0,
    0,
    214,
    1167,
    1,
    0,
    0,
    0,
    216,
    1176,
    1,
    0,
    0,
    0,
    218,
    1178,
    1,
    0,
    0,
    0,
    220,
    1182,
    1,
    0,
    0,
    0,
    222,
    1186,
    1,
    0,
    0,
    0,
    224,
    1200,
    1,
    0,
    0,
    0,
    226,
    1207,
    1,
    0,
    0,
    0,
    228,
    1211,
    1,
    0,
    0,
    0,
    230,
    1213,
    1,
    0,
    0,
    0,
    232,
    1225,
    1,
    0,
    0,
    0,
    234,
    1232,
    1,
    0,
    0,
    0,
    236,
    1236,
    1,
    0,
    0,
    0,
    238,
    1238,
    1,
    0,
    0,
    0,
    240,
    1240,
    1,
    0,
    0,
    0,
    242,
    1242,
    1,
    0,
    0,
    0,
    244,
    1251,
    1,
    0,
    0,
    0,
    246,
    1255,
    1,
    0,
    0,
    0,
    248,
    1259,
    1,
    0,
    0,
    0,
    250,
    1261,
    1,
    0,
    0,
    0,
    252,
    1270,
    1,
    0,
    0,
    0,
    254,
    1275,
    1,
    0,
    0,
    0,
    256,
    1279,
    1,
    0,
    0,
    0,
    258,
    1281,
    1,
    0,
    0,
    0,
    260,
    1287,
    1,
    0,
    0,
    0,
    262,
    1289,
    1,
    0,
    0,
    0,
    264,
    1302,
    1,
    0,
    0,
    0,
    266,
    1319,
    1,
    0,
    0,
    0,
    268,
    1321,
    1,
    0,
    0,
    0,
    270,
    1327,
    1,
    0,
    0,
    0,
    272,
    1335,
    1,
    0,
    0,
    0,
    274,
    1337,
    1,
    0,
    0,
    0,
    276,
    1349,
    1,
    0,
    0,
    0,
    278,
    1354,
    1,
    0,
    0,
    0,
    280,
    1356,
    1,
    0,
    0,
    0,
    282,
    1360,
    1,
    0,
    0,
    0,
    284,
    1362,
    1,
    0,
    0,
    0,
    286,
    1364,
    1,
    0,
    0,
    0,
    288,
    1368,
    1,
    0,
    0,
    0,
    290,
    1376,
    1,
    0,
    0,
    0,
    292,
    1380,
    1,
    0,
    0,
    0,
    294,
    1382,
    1,
    0,
    0,
    0,
    296,
    1390,
    1,
    0,
    0,
    0,
    298,
    1398,
    1,
    0,
    0,
    0,
    300,
    1405,
    1,
    0,
    0,
    0,
    302,
    1409,
    1,
    0,
    0,
    0,
    304,
    1414,
    1,
    0,
    0,
    0,
    306,
    1424,
    1,
    0,
    0,
    0,
    308,
    1431,
    1,
    0,
    0,
    0,
    310,
    1433,
    1,
    0,
    0,
    0,
    312,
    1440,
    1,
    0,
    0,
    0,
    314,
    1448,
    1,
    0,
    0,
    0,
    316,
    1450,
    1,
    0,
    0,
    0,
    318,
    1470,
    1,
    0,
    0,
    0,
    320,
    1475,
    1,
    0,
    0,
    0,
    322,
    1479,
    1,
    0,
    0,
    0,
    324,
    1481,
    1,
    0,
    0,
    0,
    326,
    1483,
    1,
    0,
    0,
    0,
    328,
    1485,
    1,
    0,
    0,
    0,
    330,
    1489,
    1,
    0,
    0,
    0,
    332,
    1491,
    1,
    0,
    0,
    0,
    334,
    1493,
    1,
    0,
    0,
    0,
    336,
    1502,
    1,
    0,
    0,
    0,
    338,
    1504,
    1,
    0,
    0,
    0,
    340,
    1506,
    1,
    0,
    0,
    0,
    342,
    1508,
    1,
    0,
    0,
    0,
    344,
    1510,
    1,
    0,
    0,
    0,
    346,
    1512,
    1,
    0,
    0,
    0,
    348,
    1514,
    1,
    0,
    0,
    0,
    350,
    1516,
    1,
    0,
    0,
    0,
    352,
    1518,
    1,
    0,
    0,
    0,
    354,
    1522,
    1,
    0,
    0,
    0,
    356,
    1526,
    1,
    0,
    0,
    0,
    358,
    1528,
    1,
    0,
    0,
    0,
    360,
    1530,
    1,
    0,
    0,
    0,
    362,
    1532,
    1,
    0,
    0,
    0,
    364,
    1534,
    1,
    0,
    0,
    0,
    366,
    1536,
    1,
    0,
    0,
    0,
    368,
    1538,
    1,
    0,
    0,
    0,
    370,
    1540,
    1,
    0,
    0,
    0,
    372,
    1542,
    1,
    0,
    0,
    0,
    374,
    1544,
    1,
    0,
    0,
    0,
    376,
    1548,
    1,
    0,
    0,
    0,
    378,
    1550,
    1,
    0,
    0,
    0,
    380,
    1554,
    1,
    0,
    0,
    0,
    382,
    1556,
    1,
    0,
    0,
    0,
    384,
    1566,
    1,
    0,
    0,
    0,
    386,
    1573,
    1,
    0,
    0,
    0,
    388,
    1577,
    1,
    0,
    0,
    0,
    390,
    1579,
    1,
    0,
    0,
    0,
    392,
    1587,
    1,
    0,
    0,
    0,
    394,
    1589,
    1,
    0,
    0,
    0,
    396,
    1597,
    1,
    0,
    0,
    0,
    398,
    1602,
    1,
    0,
    0,
    0,
    400,
    1604,
    1,
    0,
    0,
    0,
    402,
    1612,
    1,
    0,
    0,
    0,
    404,
    1614,
    1,
    0,
    0,
    0,
    406,
    1619,
    1,
    0,
    0,
    0,
    408,
    1621,
    1,
    0,
    0,
    0,
    410,
    1629,
    1,
    0,
    0,
    0,
    412,
    1636,
    1,
    0,
    0,
    0,
    414,
    1638,
    1,
    0,
    0,
    0,
    416,
    1645,
    1,
    0,
    0,
    0,
    418,
    1648,
    1,
    0,
    0,
    0,
    420,
    1654,
    1,
    0,
    0,
    0,
    422,
    1659,
    1,
    0,
    0,
    0,
    424,
    1661,
    1,
    0,
    0,
    0,
    426,
    1663,
    1,
    0,
    0,
    0,
    428,
    1676,
    1,
    0,
    0,
    0,
    430,
    1683,
    1,
    0,
    0,
    0,
    432,
    1690,
    1,
    0,
    0,
    0,
    434,
    1692,
    1,
    0,
    0,
    0,
    436,
    1700,
    1,
    0,
    0,
    0,
    438,
    1708,
    1,
    0,
    0,
    0,
    440,
    1710,
    1,
    0,
    0,
    0,
    442,
    1735,
    1,
    0,
    0,
    0,
    444,
    1742,
    1,
    0,
    0,
    0,
    446,
    1744,
    1,
    0,
    0,
    0,
    448,
    1751,
    1,
    0,
    0,
    0,
    450,
    1756,
    1,
    0,
    0,
    0,
    452,
    1758,
    1,
    0,
    0,
    0,
    454,
    1760,
    1,
    0,
    0,
    0,
    456,
    1762,
    1,
    0,
    0,
    0,
    458,
    1764,
    1,
    0,
    0,
    0,
    460,
    1766,
    1,
    0,
    0,
    0,
    462,
    1768,
    1,
    0,
    0,
    0,
    464,
    466,
    3,
    2,
    1,
    0,
    465,
    464,
    1,
    0,
    0,
    0,
    466,
    469,
    1,
    0,
    0,
    0,
    467,
    465,
    1,
    0,
    0,
    0,
    467,
    468,
    1,
    0,
    0,
    0,
    468,
    470,
    1,
    0,
    0,
    0,
    469,
    467,
    1,
    0,
    0,
    0,
    470,
    471,
    5,
    0,
    0,
    1,
    471,
    1,
    1,
    0,
    0,
    0,
    472,
    475,
    3,
    4,
    2,
    0,
    473,
    475,
    3,
    426,
    213,
    0,
    474,
    472,
    1,
    0,
    0,
    0,
    474,
    473,
    1,
    0,
    0,
    0,
    475,
    3,
    1,
    0,
    0,
    0,
    476,
    483,
    3,
    10,
    5,
    0,
    477,
    483,
    3,
    12,
    6,
    0,
    478,
    483,
    3,
    14,
    7,
    0,
    479,
    483,
    3,
    16,
    8,
    0,
    480,
    483,
    3,
    18,
    9,
    0,
    481,
    483,
    3,
    6,
    3,
    0,
    482,
    476,
    1,
    0,
    0,
    0,
    482,
    477,
    1,
    0,
    0,
    0,
    482,
    478,
    1,
    0,
    0,
    0,
    482,
    479,
    1,
    0,
    0,
    0,
    482,
    480,
    1,
    0,
    0,
    0,
    482,
    481,
    1,
    0,
    0,
    0,
    483,
    5,
    1,
    0,
    0,
    0,
    484,
    485,
    5,
    1,
    0,
    0,
    485,
    486,
    3,
    450,
    225,
    0,
    486,
    487,
    5,
    2,
    0,
    0,
    487,
    488,
    3,
    22,
    11,
    0,
    488,
    489,
    5,
    2,
    0,
    0,
    489,
    490,
    3,
    8,
    4,
    0,
    490,
    491,
    3,
    20,
    10,
    0,
    491,
    492,
    5,
    3,
    0,
    0,
    492,
    7,
    1,
    0,
    0,
    0,
    493,
    494,
    3,
    252,
    126,
    0,
    494,
    9,
    1,
    0,
    0,
    0,
    495,
    496,
    5,
    4,
    0,
    0,
    496,
    497,
    3,
    450,
    225,
    0,
    497,
    498,
    5,
    2,
    0,
    0,
    498,
    499,
    3,
    22,
    11,
    0,
    499,
    500,
    5,
    2,
    0,
    0,
    500,
    501,
    3,
    24,
    12,
    0,
    501,
    502,
    3,
    20,
    10,
    0,
    502,
    503,
    5,
    3,
    0,
    0,
    503,
    11,
    1,
    0,
    0,
    0,
    504,
    505,
    5,
    5,
    0,
    0,
    505,
    506,
    3,
    450,
    225,
    0,
    506,
    507,
    5,
    2,
    0,
    0,
    507,
    508,
    3,
    22,
    11,
    0,
    508,
    509,
    5,
    2,
    0,
    0,
    509,
    510,
    3,
    120,
    60,
    0,
    510,
    511,
    3,
    20,
    10,
    0,
    511,
    512,
    5,
    3,
    0,
    0,
    512,
    13,
    1,
    0,
    0,
    0,
    513,
    514,
    5,
    6,
    0,
    0,
    514,
    515,
    3,
    450,
    225,
    0,
    515,
    516,
    5,
    2,
    0,
    0,
    516,
    517,
    3,
    22,
    11,
    0,
    517,
    518,
    5,
    2,
    0,
    0,
    518,
    519,
    3,
    246,
    123,
    0,
    519,
    520,
    3,
    20,
    10,
    0,
    520,
    521,
    5,
    3,
    0,
    0,
    521,
    15,
    1,
    0,
    0,
    0,
    522,
    523,
    5,
    7,
    0,
    0,
    523,
    524,
    3,
    450,
    225,
    0,
    524,
    525,
    5,
    2,
    0,
    0,
    525,
    526,
    3,
    22,
    11,
    0,
    526,
    527,
    5,
    2,
    0,
    0,
    527,
    528,
    3,
    252,
    126,
    0,
    528,
    529,
    3,
    20,
    10,
    0,
    529,
    530,
    5,
    3,
    0,
    0,
    530,
    17,
    1,
    0,
    0,
    0,
    531,
    532,
    5,
    8,
    0,
    0,
    532,
    533,
    3,
    450,
    225,
    0,
    533,
    534,
    5,
    2,
    0,
    0,
    534,
    535,
    3,
    22,
    11,
    0,
    535,
    536,
    5,
    2,
    0,
    0,
    536,
    537,
    3,
    314,
    157,
    0,
    537,
    538,
    3,
    20,
    10,
    0,
    538,
    539,
    5,
    3,
    0,
    0,
    539,
    19,
    1,
    0,
    0,
    0,
    540,
    541,
    5,
    2,
    0,
    0,
    541,
    542,
    3,
    384,
    192,
    0,
    542,
    543,
    3,
    422,
    211,
    0,
    543,
    546,
    1,
    0,
    0,
    0,
    544,
    546,
    3,
    462,
    231,
    0,
    545,
    540,
    1,
    0,
    0,
    0,
    545,
    544,
    1,
    0,
    0,
    0,
    546,
    21,
    1,
    0,
    0,
    0,
    547,
    552,
    5,
    71,
    0,
    0,
    548,
    549,
    5,
    71,
    0,
    0,
    549,
    550,
    5,
    9,
    0,
    0,
    550,
    552,
    3,
    436,
    218,
    0,
    551,
    547,
    1,
    0,
    0,
    0,
    551,
    548,
    1,
    0,
    0,
    0,
    552,
    23,
    1,
    0,
    0,
    0,
    553,
    557,
    3,
    26,
    13,
    0,
    554,
    557,
    3,
    98,
    49,
    0,
    555,
    557,
    3,
    114,
    57,
    0,
    556,
    553,
    1,
    0,
    0,
    0,
    556,
    554,
    1,
    0,
    0,
    0,
    556,
    555,
    1,
    0,
    0,
    0,
    557,
    25,
    1,
    0,
    0,
    0,
    558,
    565,
    3,
    44,
    22,
    0,
    559,
    565,
    3,
    54,
    27,
    0,
    560,
    565,
    3,
    28,
    14,
    0,
    561,
    565,
    3,
    68,
    34,
    0,
    562,
    565,
    3,
    116,
    58,
    0,
    563,
    565,
    3,
    118,
    59,
    0,
    564,
    558,
    1,
    0,
    0,
    0,
    564,
    559,
    1,
    0,
    0,
    0,
    564,
    560,
    1,
    0,
    0,
    0,
    564,
    561,
    1,
    0,
    0,
    0,
    564,
    562,
    1,
    0,
    0,
    0,
    564,
    563,
    1,
    0,
    0,
    0,
    565,
    27,
    1,
    0,
    0,
    0,
    566,
    570,
    3,
    30,
    15,
    0,
    567,
    570,
    3,
    32,
    16,
    0,
    568,
    570,
    3,
    106,
    53,
    0,
    569,
    566,
    1,
    0,
    0,
    0,
    569,
    567,
    1,
    0,
    0,
    0,
    569,
    568,
    1,
    0,
    0,
    0,
    570,
    29,
    1,
    0,
    0,
    0,
    571,
    572,
    3,
    40,
    20,
    0,
    572,
    573,
    3,
    336,
    168,
    0,
    573,
    574,
    3,
    40,
    20,
    0,
    574,
    31,
    1,
    0,
    0,
    0,
    575,
    579,
    3,
    34,
    17,
    0,
    576,
    579,
    3,
    36,
    18,
    0,
    577,
    579,
    3,
    38,
    19,
    0,
    578,
    575,
    1,
    0,
    0,
    0,
    578,
    576,
    1,
    0,
    0,
    0,
    578,
    577,
    1,
    0,
    0,
    0,
    579,
    33,
    1,
    0,
    0,
    0,
    580,
    581,
    6,
    17,
    -1,
    0,
    581,
    582,
    3,
    40,
    20,
    0,
    582,
    583,
    5,
    72,
    0,
    0,
    583,
    584,
    3,
    40,
    20,
    0,
    584,
    590,
    1,
    0,
    0,
    0,
    585,
    586,
    10,
    1,
    0,
    0,
    586,
    587,
    5,
    72,
    0,
    0,
    587,
    589,
    3,
    40,
    20,
    0,
    588,
    585,
    1,
    0,
    0,
    0,
    589,
    592,
    1,
    0,
    0,
    0,
    590,
    588,
    1,
    0,
    0,
    0,
    590,
    591,
    1,
    0,
    0,
    0,
    591,
    35,
    1,
    0,
    0,
    0,
    592,
    590,
    1,
    0,
    0,
    0,
    593,
    594,
    6,
    18,
    -1,
    0,
    594,
    595,
    3,
    40,
    20,
    0,
    595,
    596,
    5,
    10,
    0,
    0,
    596,
    597,
    3,
    40,
    20,
    0,
    597,
    603,
    1,
    0,
    0,
    0,
    598,
    599,
    10,
    1,
    0,
    0,
    599,
    600,
    5,
    10,
    0,
    0,
    600,
    602,
    3,
    40,
    20,
    0,
    601,
    598,
    1,
    0,
    0,
    0,
    602,
    605,
    1,
    0,
    0,
    0,
    603,
    601,
    1,
    0,
    0,
    0,
    603,
    604,
    1,
    0,
    0,
    0,
    604,
    37,
    1,
    0,
    0,
    0,
    605,
    603,
    1,
    0,
    0,
    0,
    606,
    607,
    6,
    19,
    -1,
    0,
    607,
    608,
    3,
    40,
    20,
    0,
    608,
    609,
    5,
    11,
    0,
    0,
    609,
    610,
    3,
    40,
    20,
    0,
    610,
    616,
    1,
    0,
    0,
    0,
    611,
    612,
    10,
    1,
    0,
    0,
    612,
    613,
    5,
    11,
    0,
    0,
    613,
    615,
    3,
    40,
    20,
    0,
    614,
    611,
    1,
    0,
    0,
    0,
    615,
    618,
    1,
    0,
    0,
    0,
    616,
    614,
    1,
    0,
    0,
    0,
    616,
    617,
    1,
    0,
    0,
    0,
    617,
    39,
    1,
    0,
    0,
    0,
    618,
    616,
    1,
    0,
    0,
    0,
    619,
    623,
    3,
    44,
    22,
    0,
    620,
    623,
    3,
    54,
    27,
    0,
    621,
    623,
    3,
    68,
    34,
    0,
    622,
    619,
    1,
    0,
    0,
    0,
    622,
    620,
    1,
    0,
    0,
    0,
    622,
    621,
    1,
    0,
    0,
    0,
    623,
    41,
    1,
    0,
    0,
    0,
    624,
    627,
    3,
    44,
    22,
    0,
    625,
    627,
    3,
    56,
    28,
    0,
    626,
    624,
    1,
    0,
    0,
    0,
    626,
    625,
    1,
    0,
    0,
    0,
    627,
    43,
    1,
    0,
    0,
    0,
    628,
    636,
    3,
    46,
    23,
    0,
    629,
    636,
    3,
    60,
    30,
    0,
    630,
    636,
    3,
    382,
    191,
    0,
    631,
    632,
    5,
    12,
    0,
    0,
    632,
    633,
    3,
    26,
    13,
    0,
    633,
    634,
    5,
    13,
    0,
    0,
    634,
    636,
    1,
    0,
    0,
    0,
    635,
    628,
    1,
    0,
    0,
    0,
    635,
    629,
    1,
    0,
    0,
    0,
    635,
    630,
    1,
    0,
    0,
    0,
    635,
    631,
    1,
    0,
    0,
    0,
    636,
    45,
    1,
    0,
    0,
    0,
    637,
    638,
    3,
    48,
    24,
    0,
    638,
    639,
    3,
    40,
    20,
    0,
    639,
    47,
    1,
    0,
    0,
    0,
    640,
    641,
    3,
    320,
    160,
    0,
    641,
    642,
    5,
    14,
    0,
    0,
    642,
    643,
    3,
    50,
    25,
    0,
    643,
    644,
    5,
    15,
    0,
    0,
    644,
    645,
    5,
    16,
    0,
    0,
    645,
    49,
    1,
    0,
    0,
    0,
    646,
    652,
    3,
    52,
    26,
    0,
    647,
    648,
    3,
    52,
    26,
    0,
    648,
    649,
    5,
    2,
    0,
    0,
    649,
    650,
    3,
    50,
    25,
    0,
    650,
    652,
    1,
    0,
    0,
    0,
    651,
    646,
    1,
    0,
    0,
    0,
    651,
    647,
    1,
    0,
    0,
    0,
    652,
    51,
    1,
    0,
    0,
    0,
    653,
    654,
    3,
    382,
    191,
    0,
    654,
    655,
    5,
    16,
    0,
    0,
    655,
    656,
    3,
    100,
    50,
    0,
    656,
    53,
    1,
    0,
    0,
    0,
    657,
    660,
    3,
    56,
    28,
    0,
    658,
    660,
    3,
    58,
    29,
    0,
    659,
    657,
    1,
    0,
    0,
    0,
    659,
    658,
    1,
    0,
    0,
    0,
    660,
    55,
    1,
    0,
    0,
    0,
    661,
    662,
    3,
    322,
    161,
    0,
    662,
    663,
    3,
    42,
    21,
    0,
    663,
    57,
    1,
    0,
    0,
    0,
    664,
    665,
    3,
    84,
    42,
    0,
    665,
    666,
    3,
    362,
    181,
    0,
    666,
    667,
    3,
    84,
    42,
    0,
    667,
    59,
    1,
    0,
    0,
    0,
    668,
    673,
    3,
    62,
    31,
    0,
    669,
    673,
    3,
    64,
    32,
    0,
    670,
    673,
    3,
    70,
    35,
    0,
    671,
    673,
    3,
    90,
    45,
    0,
    672,
    668,
    1,
    0,
    0,
    0,
    672,
    669,
    1,
    0,
    0,
    0,
    672,
    670,
    1,
    0,
    0,
    0,
    672,
    671,
    1,
    0,
    0,
    0,
    673,
    61,
    1,
    0,
    0,
    0,
    674,
    677,
    3,
    364,
    182,
    0,
    675,
    677,
    3,
    88,
    44,
    0,
    676,
    674,
    1,
    0,
    0,
    0,
    676,
    675,
    1,
    0,
    0,
    0,
    677,
    63,
    1,
    0,
    0,
    0,
    678,
    687,
    3,
    368,
    184,
    0,
    679,
    687,
    3,
    66,
    33,
    0,
    680,
    681,
    5,
    12,
    0,
    0,
    681,
    682,
    3,
    86,
    43,
    0,
    682,
    683,
    5,
    13,
    0,
    0,
    683,
    687,
    1,
    0,
    0,
    0,
    684,
    687,
    3,
    224,
    112,
    0,
    685,
    687,
    3,
    72,
    36,
    0,
    686,
    678,
    1,
    0,
    0,
    0,
    686,
    679,
    1,
    0,
    0,
    0,
    686,
    680,
    1,
    0,
    0,
    0,
    686,
    684,
    1,
    0,
    0,
    0,
    686,
    685,
    1,
    0,
    0,
    0,
    687,
    65,
    1,
    0,
    0,
    0,
    688,
    691,
    3,
    380,
    190,
    0,
    689,
    691,
    3,
    378,
    189,
    0,
    690,
    688,
    1,
    0,
    0,
    0,
    690,
    689,
    1,
    0,
    0,
    0,
    691,
    67,
    1,
    0,
    0,
    0,
    692,
    693,
    3,
    84,
    42,
    0,
    693,
    694,
    3,
    358,
    179,
    0,
    694,
    695,
    3,
    84,
    42,
    0,
    695,
    69,
    1,
    0,
    0,
    0,
    696,
    697,
    3,
    372,
    186,
    0,
    697,
    71,
    1,
    0,
    0,
    0,
    698,
    699,
    5,
    17,
    0,
    0,
    699,
    700,
    3,
    74,
    37,
    0,
    700,
    701,
    5,
    2,
    0,
    0,
    701,
    702,
    3,
    78,
    39,
    0,
    702,
    703,
    5,
    2,
    0,
    0,
    703,
    704,
    3,
    26,
    13,
    0,
    704,
    705,
    5,
    13,
    0,
    0,
    705,
    73,
    1,
    0,
    0,
    0,
    706,
    712,
    3,
    98,
    49,
    0,
    707,
    708,
    5,
    14,
    0,
    0,
    708,
    709,
    3,
    76,
    38,
    0,
    709,
    710,
    5,
    15,
    0,
    0,
    710,
    712,
    1,
    0,
    0,
    0,
    711,
    706,
    1,
    0,
    0,
    0,
    711,
    707,
    1,
    0,
    0,
    0,
    712,
    75,
    1,
    0,
    0,
    0,
    713,
    719,
    3,
    98,
    49,
    0,
    714,
    715,
    3,
    98,
    49,
    0,
    715,
    716,
    5,
    2,
    0,
    0,
    716,
    717,
    3,
    76,
    38,
    0,
    717,
    719,
    1,
    0,
    0,
    0,
    718,
    713,
    1,
    0,
    0,
    0,
    718,
    714,
    1,
    0,
    0,
    0,
    719,
    77,
    1,
    0,
    0,
    0,
    720,
    726,
    3,
    80,
    40,
    0,
    721,
    722,
    5,
    14,
    0,
    0,
    722,
    723,
    3,
    82,
    41,
    0,
    723,
    724,
    5,
    15,
    0,
    0,
    724,
    726,
    1,
    0,
    0,
    0,
    725,
    720,
    1,
    0,
    0,
    0,
    725,
    721,
    1,
    0,
    0,
    0,
    726,
    79,
    1,
    0,
    0,
    0,
    727,
    728,
    3,
    26,
    13,
    0,
    728,
    729,
    3,
    344,
    172,
    0,
    729,
    730,
    3,
    26,
    13,
    0,
    730,
    81,
    1,
    0,
    0,
    0,
    731,
    737,
    3,
    80,
    40,
    0,
    732,
    733,
    3,
    80,
    40,
    0,
    733,
    734,
    5,
    2,
    0,
    0,
    734,
    735,
    3,
    82,
    41,
    0,
    735,
    737,
    1,
    0,
    0,
    0,
    736,
    731,
    1,
    0,
    0,
    0,
    736,
    732,
    1,
    0,
    0,
    0,
    737,
    83,
    1,
    0,
    0,
    0,
    738,
    745,
    3,
    60,
    30,
    0,
    739,
    745,
    3,
    382,
    191,
    0,
    740,
    741,
    5,
    12,
    0,
    0,
    741,
    742,
    3,
    26,
    13,
    0,
    742,
    743,
    5,
    13,
    0,
    0,
    743,
    745,
    1,
    0,
    0,
    0,
    744,
    738,
    1,
    0,
    0,
    0,
    744,
    739,
    1,
    0,
    0,
    0,
    744,
    740,
    1,
    0,
    0,
    0,
    745,
    85,
    1,
    0,
    0,
    0,
    746,
    752,
    3,
    336,
    168,
    0,
    747,
    752,
    3,
    338,
    169,
    0,
    748,
    752,
    3,
    360,
    180,
    0,
    749,
    752,
    3,
    362,
    181,
    0,
    750,
    752,
    3,
    322,
    161,
    0,
    751,
    746,
    1,
    0,
    0,
    0,
    751,
    747,
    1,
    0,
    0,
    0,
    751,
    748,
    1,
    0,
    0,
    0,
    751,
    749,
    1,
    0,
    0,
    0,
    751,
    750,
    1,
    0,
    0,
    0,
    752,
    87,
    1,
    0,
    0,
    0,
    753,
    759,
    5,
    18,
    0,
    0,
    754,
    755,
    5,
    14,
    0,
    0,
    755,
    756,
    3,
    94,
    47,
    0,
    756,
    757,
    5,
    15,
    0,
    0,
    757,
    759,
    1,
    0,
    0,
    0,
    758,
    753,
    1,
    0,
    0,
    0,
    758,
    754,
    1,
    0,
    0,
    0,
    759,
    89,
    1,
    0,
    0,
    0,
    760,
    761,
    3,
    366,
    183,
    0,
    761,
    762,
    5,
    12,
    0,
    0,
    762,
    763,
    3,
    92,
    46,
    0,
    763,
    764,
    5,
    13,
    0,
    0,
    764,
    776,
    1,
    0,
    0,
    0,
    765,
    766,
    3,
    370,
    185,
    0,
    766,
    767,
    5,
    12,
    0,
    0,
    767,
    768,
    3,
    92,
    46,
    0,
    768,
    769,
    5,
    13,
    0,
    0,
    769,
    776,
    1,
    0,
    0,
    0,
    770,
    771,
    3,
    374,
    187,
    0,
    771,
    772,
    5,
    12,
    0,
    0,
    772,
    773,
    3,
    92,
    46,
    0,
    773,
    774,
    5,
    13,
    0,
    0,
    774,
    776,
    1,
    0,
    0,
    0,
    775,
    760,
    1,
    0,
    0,
    0,
    775,
    765,
    1,
    0,
    0,
    0,
    775,
    770,
    1,
    0,
    0,
    0,
    776,
    91,
    1,
    0,
    0,
    0,
    777,
    778,
    3,
    94,
    47,
    0,
    778,
    93,
    1,
    0,
    0,
    0,
    779,
    783,
    3,
    26,
    13,
    0,
    780,
    782,
    3,
    96,
    48,
    0,
    781,
    780,
    1,
    0,
    0,
    0,
    782,
    785,
    1,
    0,
    0,
    0,
    783,
    781,
    1,
    0,
    0,
    0,
    783,
    784,
    1,
    0,
    0,
    0,
    784,
    95,
    1,
    0,
    0,
    0,
    785,
    783,
    1,
    0,
    0,
    0,
    786,
    787,
    5,
    2,
    0,
    0,
    787,
    788,
    3,
    26,
    13,
    0,
    788,
    97,
    1,
    0,
    0,
    0,
    789,
    790,
    3,
    356,
    178,
    0,
    790,
    791,
    5,
    16,
    0,
    0,
    791,
    792,
    3,
    100,
    50,
    0,
    792,
    798,
    1,
    0,
    0,
    0,
    793,
    794,
    5,
    12,
    0,
    0,
    794,
    795,
    3,
    98,
    49,
    0,
    795,
    796,
    5,
    13,
    0,
    0,
    796,
    798,
    1,
    0,
    0,
    0,
    797,
    789,
    1,
    0,
    0,
    0,
    797,
    793,
    1,
    0,
    0,
    0,
    798,
    99,
    1,
    0,
    0,
    0,
    799,
    803,
    3,
    102,
    51,
    0,
    800,
    803,
    3,
    108,
    54,
    0,
    801,
    803,
    3,
    104,
    52,
    0,
    802,
    799,
    1,
    0,
    0,
    0,
    802,
    800,
    1,
    0,
    0,
    0,
    802,
    801,
    1,
    0,
    0,
    0,
    803,
    101,
    1,
    0,
    0,
    0,
    804,
    805,
    3,
    44,
    22,
    0,
    805,
    103,
    1,
    0,
    0,
    0,
    806,
    807,
    3,
    38,
    19,
    0,
    807,
    105,
    1,
    0,
    0,
    0,
    808,
    812,
    3,
    108,
    54,
    0,
    809,
    812,
    3,
    110,
    55,
    0,
    810,
    812,
    3,
    112,
    56,
    0,
    811,
    808,
    1,
    0,
    0,
    0,
    811,
    809,
    1,
    0,
    0,
    0,
    811,
    810,
    1,
    0,
    0,
    0,
    812,
    107,
    1,
    0,
    0,
    0,
    813,
    814,
    3,
    102,
    51,
    0,
    814,
    815,
    5,
    75,
    0,
    0,
    815,
    816,
    3,
    102,
    51,
    0,
    816,
    822,
    1,
    0,
    0,
    0,
    817,
    818,
    3,
    102,
    51,
    0,
    818,
    819,
    5,
    75,
    0,
    0,
    819,
    820,
    3,
    108,
    54,
    0,
    820,
    822,
    1,
    0,
    0,
    0,
    821,
    813,
    1,
    0,
    0,
    0,
    821,
    817,
    1,
    0,
    0,
    0,
    822,
    109,
    1,
    0,
    0,
    0,
    823,
    824,
    6,
    55,
    -1,
    0,
    824,
    825,
    3,
    102,
    51,
    0,
    825,
    826,
    5,
    73,
    0,
    0,
    826,
    827,
    3,
    102,
    51,
    0,
    827,
    833,
    1,
    0,
    0,
    0,
    828,
    829,
    10,
    1,
    0,
    0,
    829,
    830,
    5,
    73,
    0,
    0,
    830,
    832,
    3,
    102,
    51,
    0,
    831,
    828,
    1,
    0,
    0,
    0,
    832,
    835,
    1,
    0,
    0,
    0,
    833,
    831,
    1,
    0,
    0,
    0,
    833,
    834,
    1,
    0,
    0,
    0,
    834,
    111,
    1,
    0,
    0,
    0,
    835,
    833,
    1,
    0,
    0,
    0,
    836,
    837,
    6,
    56,
    -1,
    0,
    837,
    838,
    3,
    102,
    51,
    0,
    838,
    839,
    5,
    74,
    0,
    0,
    839,
    840,
    3,
    102,
    51,
    0,
    840,
    846,
    1,
    0,
    0,
    0,
    841,
    842,
    10,
    1,
    0,
    0,
    842,
    843,
    5,
    74,
    0,
    0,
    843,
    845,
    3,
    102,
    51,
    0,
    844,
    841,
    1,
    0,
    0,
    0,
    845,
    848,
    1,
    0,
    0,
    0,
    846,
    844,
    1,
    0,
    0,
    0,
    846,
    847,
    1,
    0,
    0,
    0,
    847,
    113,
    1,
    0,
    0,
    0,
    848,
    846,
    1,
    0,
    0,
    0,
    849,
    850,
    3,
    356,
    178,
    0,
    850,
    851,
    3,
    328,
    164,
    0,
    851,
    852,
    3,
    354,
    177,
    0,
    852,
    115,
    1,
    0,
    0,
    0,
    853,
    854,
    3,
    60,
    30,
    0,
    854,
    855,
    3,
    346,
    173,
    0,
    855,
    856,
    3,
    26,
    13,
    0,
    856,
    117,
    1,
    0,
    0,
    0,
    857,
    858,
    3,
    88,
    44,
    0,
    858,
    859,
    3,
    342,
    171,
    0,
    859,
    860,
    3,
    88,
    44,
    0,
    860,
    119,
    1,
    0,
    0,
    0,
    861,
    865,
    3,
    122,
    61,
    0,
    862,
    865,
    3,
    194,
    97,
    0,
    863,
    865,
    3,
    218,
    109,
    0,
    864,
    861,
    1,
    0,
    0,
    0,
    864,
    862,
    1,
    0,
    0,
    0,
    864,
    863,
    1,
    0,
    0,
    0,
    865,
    121,
    1,
    0,
    0,
    0,
    866,
    873,
    3,
    138,
    69,
    0,
    867,
    873,
    3,
    150,
    75,
    0,
    868,
    873,
    3,
    124,
    62,
    0,
    869,
    873,
    3,
    164,
    82,
    0,
    870,
    873,
    3,
    220,
    110,
    0,
    871,
    873,
    3,
    222,
    111,
    0,
    872,
    866,
    1,
    0,
    0,
    0,
    872,
    867,
    1,
    0,
    0,
    0,
    872,
    868,
    1,
    0,
    0,
    0,
    872,
    869,
    1,
    0,
    0,
    0,
    872,
    870,
    1,
    0,
    0,
    0,
    872,
    871,
    1,
    0,
    0,
    0,
    873,
    123,
    1,
    0,
    0,
    0,
    874,
    877,
    3,
    126,
    63,
    0,
    875,
    877,
    3,
    128,
    64,
    0,
    876,
    874,
    1,
    0,
    0,
    0,
    876,
    875,
    1,
    0,
    0,
    0,
    877,
    125,
    1,
    0,
    0,
    0,
    878,
    879,
    3,
    134,
    67,
    0,
    879,
    880,
    3,
    336,
    168,
    0,
    880,
    881,
    3,
    134,
    67,
    0,
    881,
    127,
    1,
    0,
    0,
    0,
    882,
    885,
    3,
    130,
    65,
    0,
    883,
    885,
    3,
    132,
    66,
    0,
    884,
    882,
    1,
    0,
    0,
    0,
    884,
    883,
    1,
    0,
    0,
    0,
    885,
    129,
    1,
    0,
    0,
    0,
    886,
    887,
    6,
    65,
    -1,
    0,
    887,
    888,
    3,
    134,
    67,
    0,
    888,
    889,
    5,
    72,
    0,
    0,
    889,
    890,
    3,
    134,
    67,
    0,
    890,
    896,
    1,
    0,
    0,
    0,
    891,
    892,
    10,
    1,
    0,
    0,
    892,
    893,
    5,
    72,
    0,
    0,
    893,
    895,
    3,
    134,
    67,
    0,
    894,
    891,
    1,
    0,
    0,
    0,
    895,
    898,
    1,
    0,
    0,
    0,
    896,
    894,
    1,
    0,
    0,
    0,
    896,
    897,
    1,
    0,
    0,
    0,
    897,
    131,
    1,
    0,
    0,
    0,
    898,
    896,
    1,
    0,
    0,
    0,
    899,
    900,
    6,
    66,
    -1,
    0,
    900,
    901,
    3,
    134,
    67,
    0,
    901,
    902,
    5,
    10,
    0,
    0,
    902,
    903,
    3,
    134,
    67,
    0,
    903,
    909,
    1,
    0,
    0,
    0,
    904,
    905,
    10,
    1,
    0,
    0,
    905,
    906,
    5,
    10,
    0,
    0,
    906,
    908,
    3,
    134,
    67,
    0,
    907,
    904,
    1,
    0,
    0,
    0,
    908,
    911,
    1,
    0,
    0,
    0,
    909,
    907,
    1,
    0,
    0,
    0,
    909,
    910,
    1,
    0,
    0,
    0,
    910,
    133,
    1,
    0,
    0,
    0,
    911,
    909,
    1,
    0,
    0,
    0,
    912,
    916,
    3,
    138,
    69,
    0,
    913,
    916,
    3,
    150,
    75,
    0,
    914,
    916,
    3,
    164,
    82,
    0,
    915,
    912,
    1,
    0,
    0,
    0,
    915,
    913,
    1,
    0,
    0,
    0,
    915,
    914,
    1,
    0,
    0,
    0,
    916,
    135,
    1,
    0,
    0,
    0,
    917,
    920,
    3,
    138,
    69,
    0,
    918,
    920,
    3,
    152,
    76,
    0,
    919,
    917,
    1,
    0,
    0,
    0,
    919,
    918,
    1,
    0,
    0,
    0,
    920,
    137,
    1,
    0,
    0,
    0,
    921,
    929,
    3,
    142,
    71,
    0,
    922,
    929,
    3,
    156,
    78,
    0,
    923,
    929,
    3,
    140,
    70,
    0,
    924,
    925,
    5,
    12,
    0,
    0,
    925,
    926,
    3,
    122,
    61,
    0,
    926,
    927,
    5,
    13,
    0,
    0,
    927,
    929,
    1,
    0,
    0,
    0,
    928,
    921,
    1,
    0,
    0,
    0,
    928,
    922,
    1,
    0,
    0,
    0,
    928,
    923,
    1,
    0,
    0,
    0,
    928,
    924,
    1,
    0,
    0,
    0,
    929,
    139,
    1,
    0,
    0,
    0,
    930,
    931,
    3,
    382,
    191,
    0,
    931,
    141,
    1,
    0,
    0,
    0,
    932,
    933,
    3,
    332,
    166,
    0,
    933,
    934,
    5,
    14,
    0,
    0,
    934,
    935,
    3,
    144,
    72,
    0,
    935,
    936,
    5,
    15,
    0,
    0,
    936,
    937,
    5,
    16,
    0,
    0,
    937,
    938,
    3,
    134,
    67,
    0,
    938,
    143,
    1,
    0,
    0,
    0,
    939,
    945,
    3,
    146,
    73,
    0,
    940,
    941,
    3,
    146,
    73,
    0,
    941,
    942,
    5,
    2,
    0,
    0,
    942,
    943,
    3,
    144,
    72,
    0,
    943,
    945,
    1,
    0,
    0,
    0,
    944,
    939,
    1,
    0,
    0,
    0,
    944,
    940,
    1,
    0,
    0,
    0,
    945,
    145,
    1,
    0,
    0,
    0,
    946,
    949,
    3,
    148,
    74,
    0,
    947,
    949,
    3,
    382,
    191,
    0,
    948,
    946,
    1,
    0,
    0,
    0,
    948,
    947,
    1,
    0,
    0,
    0,
    949,
    147,
    1,
    0,
    0,
    0,
    950,
    951,
    3,
    382,
    191,
    0,
    951,
    952,
    5,
    16,
    0,
    0,
    952,
    953,
    3,
    206,
    103,
    0,
    953,
    149,
    1,
    0,
    0,
    0,
    954,
    957,
    3,
    152,
    76,
    0,
    955,
    957,
    3,
    154,
    77,
    0,
    956,
    954,
    1,
    0,
    0,
    0,
    956,
    955,
    1,
    0,
    0,
    0,
    957,
    151,
    1,
    0,
    0,
    0,
    958,
    959,
    3,
    330,
    165,
    0,
    959,
    960,
    3,
    136,
    68,
    0,
    960,
    153,
    1,
    0,
    0,
    0,
    961,
    962,
    3,
    186,
    93,
    0,
    962,
    963,
    3,
    362,
    181,
    0,
    963,
    964,
    3,
    186,
    93,
    0,
    964,
    155,
    1,
    0,
    0,
    0,
    965,
    969,
    3,
    158,
    79,
    0,
    966,
    969,
    3,
    160,
    80,
    0,
    967,
    969,
    3,
    166,
    83,
    0,
    968,
    965,
    1,
    0,
    0,
    0,
    968,
    966,
    1,
    0,
    0,
    0,
    968,
    967,
    1,
    0,
    0,
    0,
    969,
    157,
    1,
    0,
    0,
    0,
    970,
    977,
    3,
    364,
    182,
    0,
    971,
    972,
    3,
    366,
    183,
    0,
    972,
    973,
    5,
    12,
    0,
    0,
    973,
    974,
    3,
    190,
    95,
    0,
    974,
    975,
    5,
    13,
    0,
    0,
    975,
    977,
    1,
    0,
    0,
    0,
    976,
    970,
    1,
    0,
    0,
    0,
    976,
    971,
    1,
    0,
    0,
    0,
    977,
    159,
    1,
    0,
    0,
    0,
    978,
    979,
    3,
    162,
    81,
    0,
    979,
    161,
    1,
    0,
    0,
    0,
    980,
    989,
    3,
    368,
    184,
    0,
    981,
    982,
    3,
    370,
    185,
    0,
    982,
    983,
    5,
    12,
    0,
    0,
    983,
    984,
    3,
    190,
    95,
    0,
    984,
    985,
    5,
    13,
    0,
    0,
    985,
    989,
    1,
    0,
    0,
    0,
    986,
    989,
    3,
    182,
    91,
    0,
    987,
    989,
    3,
    168,
    84,
    0,
    988,
    980,
    1,
    0,
    0,
    0,
    988,
    981,
    1,
    0,
    0,
    0,
    988,
    986,
    1,
    0,
    0,
    0,
    988,
    987,
    1,
    0,
    0,
    0,
    989,
    163,
    1,
    0,
    0,
    0,
    990,
    991,
    3,
    186,
    93,
    0,
    991,
    992,
    3,
    358,
    179,
    0,
    992,
    993,
    3,
    186,
    93,
    0,
    993,
    165,
    1,
    0,
    0,
    0,
    994,
    1001,
    3,
    372,
    186,
    0,
    995,
    996,
    3,
    374,
    187,
    0,
    996,
    997,
    5,
    12,
    0,
    0,
    997,
    998,
    3,
    190,
    95,
    0,
    998,
    999,
    5,
    13,
    0,
    0,
    999,
    1001,
    1,
    0,
    0,
    0,
    1e3,
    994,
    1,
    0,
    0,
    0,
    1e3,
    995,
    1,
    0,
    0,
    0,
    1001,
    167,
    1,
    0,
    0,
    0,
    1002,
    1003,
    5,
    17,
    0,
    0,
    1003,
    1004,
    3,
    170,
    85,
    0,
    1004,
    1005,
    5,
    2,
    0,
    0,
    1005,
    1006,
    3,
    174,
    87,
    0,
    1006,
    1007,
    5,
    2,
    0,
    0,
    1007,
    1008,
    3,
    184,
    92,
    0,
    1008,
    1009,
    5,
    13,
    0,
    0,
    1009,
    169,
    1,
    0,
    0,
    0,
    1010,
    1016,
    3,
    194,
    97,
    0,
    1011,
    1012,
    5,
    14,
    0,
    0,
    1012,
    1013,
    3,
    172,
    86,
    0,
    1013,
    1014,
    5,
    15,
    0,
    0,
    1014,
    1016,
    1,
    0,
    0,
    0,
    1015,
    1010,
    1,
    0,
    0,
    0,
    1015,
    1011,
    1,
    0,
    0,
    0,
    1016,
    171,
    1,
    0,
    0,
    0,
    1017,
    1023,
    3,
    194,
    97,
    0,
    1018,
    1019,
    3,
    194,
    97,
    0,
    1019,
    1020,
    5,
    2,
    0,
    0,
    1020,
    1021,
    3,
    172,
    86,
    0,
    1021,
    1023,
    1,
    0,
    0,
    0,
    1022,
    1017,
    1,
    0,
    0,
    0,
    1022,
    1018,
    1,
    0,
    0,
    0,
    1023,
    173,
    1,
    0,
    0,
    0,
    1024,
    1030,
    3,
    176,
    88,
    0,
    1025,
    1026,
    5,
    14,
    0,
    0,
    1026,
    1027,
    3,
    180,
    90,
    0,
    1027,
    1028,
    5,
    15,
    0,
    0,
    1028,
    1030,
    1,
    0,
    0,
    0,
    1029,
    1024,
    1,
    0,
    0,
    0,
    1029,
    1025,
    1,
    0,
    0,
    0,
    1030,
    175,
    1,
    0,
    0,
    0,
    1031,
    1032,
    3,
    178,
    89,
    0,
    1032,
    1033,
    3,
    344,
    172,
    0,
    1033,
    1034,
    3,
    184,
    92,
    0,
    1034,
    177,
    1,
    0,
    0,
    0,
    1035,
    1038,
    3,
    158,
    79,
    0,
    1036,
    1038,
    3,
    188,
    94,
    0,
    1037,
    1035,
    1,
    0,
    0,
    0,
    1037,
    1036,
    1,
    0,
    0,
    0,
    1038,
    179,
    1,
    0,
    0,
    0,
    1039,
    1045,
    3,
    176,
    88,
    0,
    1040,
    1041,
    3,
    176,
    88,
    0,
    1041,
    1042,
    5,
    2,
    0,
    0,
    1042,
    1043,
    3,
    180,
    90,
    0,
    1043,
    1045,
    1,
    0,
    0,
    0,
    1044,
    1039,
    1,
    0,
    0,
    0,
    1044,
    1040,
    1,
    0,
    0,
    0,
    1045,
    181,
    1,
    0,
    0,
    0,
    1046,
    1047,
    3,
    232,
    116,
    0,
    1047,
    1048,
    5,
    11,
    0,
    0,
    1048,
    1049,
    5,
    12,
    0,
    0,
    1049,
    1050,
    3,
    190,
    95,
    0,
    1050,
    1051,
    5,
    13,
    0,
    0,
    1051,
    183,
    1,
    0,
    0,
    0,
    1052,
    1056,
    3,
    122,
    61,
    0,
    1053,
    1056,
    3,
    380,
    190,
    0,
    1054,
    1056,
    3,
    188,
    94,
    0,
    1055,
    1052,
    1,
    0,
    0,
    0,
    1055,
    1053,
    1,
    0,
    0,
    0,
    1055,
    1054,
    1,
    0,
    0,
    0,
    1056,
    185,
    1,
    0,
    0,
    0,
    1057,
    1066,
    3,
    156,
    78,
    0,
    1058,
    1066,
    3,
    380,
    190,
    0,
    1059,
    1066,
    3,
    188,
    94,
    0,
    1060,
    1066,
    3,
    382,
    191,
    0,
    1061,
    1062,
    5,
    12,
    0,
    0,
    1062,
    1063,
    3,
    122,
    61,
    0,
    1063,
    1064,
    5,
    13,
    0,
    0,
    1064,
    1066,
    1,
    0,
    0,
    0,
    1065,
    1057,
    1,
    0,
    0,
    0,
    1065,
    1058,
    1,
    0,
    0,
    0,
    1065,
    1059,
    1,
    0,
    0,
    0,
    1065,
    1060,
    1,
    0,
    0,
    0,
    1065,
    1061,
    1,
    0,
    0,
    0,
    1066,
    187,
    1,
    0,
    0,
    0,
    1067,
    1073,
    5,
    18,
    0,
    0,
    1068,
    1069,
    5,
    14,
    0,
    0,
    1069,
    1070,
    3,
    190,
    95,
    0,
    1070,
    1071,
    5,
    15,
    0,
    0,
    1071,
    1073,
    1,
    0,
    0,
    0,
    1072,
    1067,
    1,
    0,
    0,
    0,
    1072,
    1068,
    1,
    0,
    0,
    0,
    1073,
    189,
    1,
    0,
    0,
    0,
    1074,
    1078,
    3,
    184,
    92,
    0,
    1075,
    1077,
    3,
    192,
    96,
    0,
    1076,
    1075,
    1,
    0,
    0,
    0,
    1077,
    1080,
    1,
    0,
    0,
    0,
    1078,
    1076,
    1,
    0,
    0,
    0,
    1078,
    1079,
    1,
    0,
    0,
    0,
    1079,
    191,
    1,
    0,
    0,
    0,
    1080,
    1078,
    1,
    0,
    0,
    0,
    1081,
    1082,
    5,
    2,
    0,
    0,
    1082,
    1083,
    3,
    184,
    92,
    0,
    1083,
    193,
    1,
    0,
    0,
    0,
    1084,
    1085,
    3,
    356,
    178,
    0,
    1085,
    1086,
    5,
    16,
    0,
    0,
    1086,
    1087,
    3,
    196,
    98,
    0,
    1087,
    1093,
    1,
    0,
    0,
    0,
    1088,
    1089,
    5,
    12,
    0,
    0,
    1089,
    1090,
    3,
    194,
    97,
    0,
    1090,
    1091,
    5,
    13,
    0,
    0,
    1091,
    1093,
    1,
    0,
    0,
    0,
    1092,
    1084,
    1,
    0,
    0,
    0,
    1092,
    1088,
    1,
    0,
    0,
    0,
    1093,
    195,
    1,
    0,
    0,
    0,
    1094,
    1097,
    3,
    206,
    103,
    0,
    1095,
    1097,
    3,
    198,
    99,
    0,
    1096,
    1094,
    1,
    0,
    0,
    0,
    1096,
    1095,
    1,
    0,
    0,
    0,
    1097,
    197,
    1,
    0,
    0,
    0,
    1098,
    1105,
    3,
    210,
    105,
    0,
    1099,
    1105,
    3,
    200,
    100,
    0,
    1100,
    1101,
    5,
    12,
    0,
    0,
    1101,
    1102,
    3,
    198,
    99,
    0,
    1102,
    1103,
    5,
    13,
    0,
    0,
    1103,
    1105,
    1,
    0,
    0,
    0,
    1104,
    1098,
    1,
    0,
    0,
    0,
    1104,
    1099,
    1,
    0,
    0,
    0,
    1104,
    1100,
    1,
    0,
    0,
    0,
    1105,
    199,
    1,
    0,
    0,
    0,
    1106,
    1107,
    5,
    19,
    0,
    0,
    1107,
    1108,
    5,
    14,
    0,
    0,
    1108,
    1109,
    3,
    144,
    72,
    0,
    1109,
    1110,
    5,
    15,
    0,
    0,
    1110,
    1111,
    5,
    16,
    0,
    0,
    1111,
    1112,
    3,
    202,
    101,
    0,
    1112,
    201,
    1,
    0,
    0,
    0,
    1113,
    1120,
    3,
    206,
    103,
    0,
    1114,
    1115,
    5,
    12,
    0,
    0,
    1115,
    1116,
    3,
    210,
    105,
    0,
    1116,
    1117,
    5,
    13,
    0,
    0,
    1117,
    1120,
    1,
    0,
    0,
    0,
    1118,
    1120,
    3,
    200,
    100,
    0,
    1119,
    1113,
    1,
    0,
    0,
    0,
    1119,
    1114,
    1,
    0,
    0,
    0,
    1119,
    1118,
    1,
    0,
    0,
    0,
    1120,
    203,
    1,
    0,
    0,
    0,
    1121,
    1127,
    3,
    206,
    103,
    0,
    1122,
    1123,
    5,
    12,
    0,
    0,
    1123,
    1124,
    3,
    212,
    106,
    0,
    1124,
    1125,
    5,
    13,
    0,
    0,
    1125,
    1127,
    1,
    0,
    0,
    0,
    1126,
    1121,
    1,
    0,
    0,
    0,
    1126,
    1122,
    1,
    0,
    0,
    0,
    1127,
    205,
    1,
    0,
    0,
    0,
    1128,
    1142,
    3,
    348,
    174,
    0,
    1129,
    1142,
    3,
    352,
    176,
    0,
    1130,
    1142,
    3,
    382,
    191,
    0,
    1131,
    1132,
    3,
    350,
    175,
    0,
    1132,
    1133,
    5,
    12,
    0,
    0,
    1133,
    1134,
    3,
    208,
    104,
    0,
    1134,
    1135,
    5,
    13,
    0,
    0,
    1135,
    1142,
    1,
    0,
    0,
    0,
    1136,
    1137,
    5,
    12,
    0,
    0,
    1137,
    1138,
    3,
    206,
    103,
    0,
    1138,
    1139,
    5,
    13,
    0,
    0,
    1139,
    1142,
    1,
    0,
    0,
    0,
    1140,
    1142,
    3,
    214,
    107,
    0,
    1141,
    1128,
    1,
    0,
    0,
    0,
    1141,
    1129,
    1,
    0,
    0,
    0,
    1141,
    1130,
    1,
    0,
    0,
    0,
    1141,
    1131,
    1,
    0,
    0,
    0,
    1141,
    1136,
    1,
    0,
    0,
    0,
    1141,
    1140,
    1,
    0,
    0,
    0,
    1142,
    207,
    1,
    0,
    0,
    0,
    1143,
    1149,
    3,
    206,
    103,
    0,
    1144,
    1145,
    3,
    206,
    103,
    0,
    1145,
    1146,
    5,
    2,
    0,
    0,
    1146,
    1147,
    3,
    208,
    104,
    0,
    1147,
    1149,
    1,
    0,
    0,
    0,
    1148,
    1143,
    1,
    0,
    0,
    0,
    1148,
    1144,
    1,
    0,
    0,
    0,
    1149,
    209,
    1,
    0,
    0,
    0,
    1150,
    1151,
    3,
    204,
    102,
    0,
    1151,
    1152,
    5,
    75,
    0,
    0,
    1152,
    1153,
    3,
    206,
    103,
    0,
    1153,
    211,
    1,
    0,
    0,
    0,
    1154,
    1155,
    6,
    106,
    -1,
    0,
    1155,
    1156,
    3,
    204,
    102,
    0,
    1156,
    1157,
    5,
    73,
    0,
    0,
    1157,
    1158,
    3,
    206,
    103,
    0,
    1158,
    1164,
    1,
    0,
    0,
    0,
    1159,
    1160,
    10,
    1,
    0,
    0,
    1160,
    1161,
    5,
    73,
    0,
    0,
    1161,
    1163,
    3,
    206,
    103,
    0,
    1162,
    1159,
    1,
    0,
    0,
    0,
    1163,
    1166,
    1,
    0,
    0,
    0,
    1164,
    1162,
    1,
    0,
    0,
    0,
    1164,
    1165,
    1,
    0,
    0,
    0,
    1165,
    213,
    1,
    0,
    0,
    0,
    1166,
    1164,
    1,
    0,
    0,
    0,
    1167,
    1168,
    5,
    14,
    0,
    0,
    1168,
    1169,
    3,
    216,
    108,
    0,
    1169,
    1170,
    5,
    15,
    0,
    0,
    1170,
    215,
    1,
    0,
    0,
    0,
    1171,
    1177,
    3,
    196,
    98,
    0,
    1172,
    1173,
    3,
    196,
    98,
    0,
    1173,
    1174,
    5,
    2,
    0,
    0,
    1174,
    1175,
    3,
    216,
    108,
    0,
    1175,
    1177,
    1,
    0,
    0,
    0,
    1176,
    1171,
    1,
    0,
    0,
    0,
    1176,
    1172,
    1,
    0,
    0,
    0,
    1177,
    217,
    1,
    0,
    0,
    0,
    1178,
    1179,
    3,
    356,
    178,
    0,
    1179,
    1180,
    3,
    328,
    164,
    0,
    1180,
    1181,
    3,
    354,
    177,
    0,
    1181,
    219,
    1,
    0,
    0,
    0,
    1182,
    1183,
    3,
    156,
    78,
    0,
    1183,
    1184,
    3,
    346,
    173,
    0,
    1184,
    1185,
    3,
    184,
    92,
    0,
    1185,
    221,
    1,
    0,
    0,
    0,
    1186,
    1187,
    3,
    188,
    94,
    0,
    1187,
    1188,
    3,
    342,
    171,
    0,
    1188,
    1189,
    3,
    188,
    94,
    0,
    1189,
    223,
    1,
    0,
    0,
    0,
    1190,
    1191,
    5,
    20,
    0,
    0,
    1191,
    1192,
    3,
    240,
    120,
    0,
    1192,
    1193,
    5,
    21,
    0,
    0,
    1193,
    1201,
    1,
    0,
    0,
    0,
    1194,
    1195,
    5,
    20,
    0,
    0,
    1195,
    1196,
    3,
    240,
    120,
    0,
    1196,
    1197,
    5,
    12,
    0,
    0,
    1197,
    1198,
    3,
    226,
    113,
    0,
    1198,
    1199,
    5,
    22,
    0,
    0,
    1199,
    1201,
    1,
    0,
    0,
    0,
    1200,
    1190,
    1,
    0,
    0,
    0,
    1200,
    1194,
    1,
    0,
    0,
    0,
    1201,
    225,
    1,
    0,
    0,
    0,
    1202,
    1208,
    3,
    228,
    114,
    0,
    1203,
    1204,
    3,
    228,
    114,
    0,
    1204,
    1205,
    5,
    2,
    0,
    0,
    1205,
    1206,
    3,
    226,
    113,
    0,
    1206,
    1208,
    1,
    0,
    0,
    0,
    1207,
    1202,
    1,
    0,
    0,
    0,
    1207,
    1203,
    1,
    0,
    0,
    0,
    1208,
    227,
    1,
    0,
    0,
    0,
    1209,
    1212,
    3,
    242,
    121,
    0,
    1210,
    1212,
    3,
    230,
    115,
    0,
    1211,
    1209,
    1,
    0,
    0,
    0,
    1211,
    1210,
    1,
    0,
    0,
    0,
    1212,
    229,
    1,
    0,
    0,
    0,
    1213,
    1214,
    3,
    116,
    58,
    0,
    1214,
    231,
    1,
    0,
    0,
    0,
    1215,
    1216,
    5,
    20,
    0,
    0,
    1216,
    1217,
    3,
    240,
    120,
    0,
    1217,
    1218,
    5,
    21,
    0,
    0,
    1218,
    1226,
    1,
    0,
    0,
    0,
    1219,
    1220,
    5,
    20,
    0,
    0,
    1220,
    1221,
    3,
    240,
    120,
    0,
    1221,
    1222,
    5,
    12,
    0,
    0,
    1222,
    1223,
    3,
    234,
    117,
    0,
    1223,
    1224,
    5,
    22,
    0,
    0,
    1224,
    1226,
    1,
    0,
    0,
    0,
    1225,
    1215,
    1,
    0,
    0,
    0,
    1225,
    1219,
    1,
    0,
    0,
    0,
    1226,
    233,
    1,
    0,
    0,
    0,
    1227,
    1233,
    3,
    236,
    118,
    0,
    1228,
    1229,
    3,
    236,
    118,
    0,
    1229,
    1230,
    5,
    2,
    0,
    0,
    1230,
    1231,
    3,
    234,
    117,
    0,
    1231,
    1233,
    1,
    0,
    0,
    0,
    1232,
    1227,
    1,
    0,
    0,
    0,
    1232,
    1228,
    1,
    0,
    0,
    0,
    1233,
    235,
    1,
    0,
    0,
    0,
    1234,
    1237,
    3,
    242,
    121,
    0,
    1235,
    1237,
    3,
    238,
    119,
    0,
    1236,
    1234,
    1,
    0,
    0,
    0,
    1236,
    1235,
    1,
    0,
    0,
    0,
    1237,
    237,
    1,
    0,
    0,
    0,
    1238,
    1239,
    3,
    220,
    110,
    0,
    1239,
    239,
    1,
    0,
    0,
    0,
    1240,
    1241,
    3,
    376,
    188,
    0,
    1241,
    241,
    1,
    0,
    0,
    0,
    1242,
    1243,
    5,
    77,
    0,
    0,
    1243,
    1244,
    3,
    186,
    93,
    0,
    1244,
    243,
    1,
    0,
    0,
    0,
    1245,
    1252,
    5,
    23,
    0,
    0,
    1246,
    1247,
    5,
    76,
    0,
    0,
    1247,
    1248,
    5,
    24,
    0,
    0,
    1248,
    1252,
    5,
    75,
    0,
    0,
    1249,
    1252,
    5,
    25,
    0,
    0,
    1250,
    1252,
    5,
    26,
    0,
    0,
    1251,
    1245,
    1,
    0,
    0,
    0,
    1251,
    1246,
    1,
    0,
    0,
    0,
    1251,
    1249,
    1,
    0,
    0,
    0,
    1251,
    1250,
    1,
    0,
    0,
    0,
    1252,
    245,
    1,
    0,
    0,
    0,
    1253,
    1256,
    3,
    248,
    124,
    0,
    1254,
    1256,
    3,
    194,
    97,
    0,
    1255,
    1253,
    1,
    0,
    0,
    0,
    1255,
    1254,
    1,
    0,
    0,
    0,
    1256,
    247,
    1,
    0,
    0,
    0,
    1257,
    1260,
    3,
    250,
    125,
    0,
    1258,
    1260,
    3,
    314,
    157,
    0,
    1259,
    1257,
    1,
    0,
    0,
    0,
    1259,
    1258,
    1,
    0,
    0,
    0,
    1260,
    249,
    1,
    0,
    0,
    0,
    1261,
    1262,
    5,
    27,
    0,
    0,
    1262,
    1263,
    5,
    14,
    0,
    0,
    1263,
    1264,
    3,
    144,
    72,
    0,
    1264,
    1265,
    5,
    15,
    0,
    0,
    1265,
    1266,
    5,
    16,
    0,
    0,
    1266,
    1267,
    3,
    248,
    124,
    0,
    1267,
    251,
    1,
    0,
    0,
    0,
    1268,
    1271,
    3,
    254,
    127,
    0,
    1269,
    1271,
    3,
    306,
    153,
    0,
    1270,
    1268,
    1,
    0,
    0,
    0,
    1270,
    1269,
    1,
    0,
    0,
    0,
    1271,
    253,
    1,
    0,
    0,
    0,
    1272,
    1276,
    3,
    256,
    128,
    0,
    1273,
    1276,
    3,
    266,
    133,
    0,
    1274,
    1276,
    3,
    272,
    136,
    0,
    1275,
    1272,
    1,
    0,
    0,
    0,
    1275,
    1273,
    1,
    0,
    0,
    0,
    1275,
    1274,
    1,
    0,
    0,
    0,
    1276,
    255,
    1,
    0,
    0,
    0,
    1277,
    1280,
    3,
    258,
    129,
    0,
    1278,
    1280,
    3,
    260,
    130,
    0,
    1279,
    1277,
    1,
    0,
    0,
    0,
    1279,
    1278,
    1,
    0,
    0,
    0,
    1280,
    257,
    1,
    0,
    0,
    0,
    1281,
    1282,
    3,
    270,
    135,
    0,
    1282,
    1283,
    3,
    336,
    168,
    0,
    1283,
    1284,
    3,
    270,
    135,
    0,
    1284,
    259,
    1,
    0,
    0,
    0,
    1285,
    1288,
    3,
    262,
    131,
    0,
    1286,
    1288,
    3,
    264,
    132,
    0,
    1287,
    1285,
    1,
    0,
    0,
    0,
    1287,
    1286,
    1,
    0,
    0,
    0,
    1288,
    261,
    1,
    0,
    0,
    0,
    1289,
    1290,
    6,
    131,
    -1,
    0,
    1290,
    1291,
    3,
    270,
    135,
    0,
    1291,
    1292,
    5,
    72,
    0,
    0,
    1292,
    1293,
    3,
    270,
    135,
    0,
    1293,
    1299,
    1,
    0,
    0,
    0,
    1294,
    1295,
    10,
    1,
    0,
    0,
    1295,
    1296,
    5,
    72,
    0,
    0,
    1296,
    1298,
    3,
    270,
    135,
    0,
    1297,
    1294,
    1,
    0,
    0,
    0,
    1298,
    1301,
    1,
    0,
    0,
    0,
    1299,
    1297,
    1,
    0,
    0,
    0,
    1299,
    1300,
    1,
    0,
    0,
    0,
    1300,
    263,
    1,
    0,
    0,
    0,
    1301,
    1299,
    1,
    0,
    0,
    0,
    1302,
    1303,
    6,
    132,
    -1,
    0,
    1303,
    1304,
    3,
    270,
    135,
    0,
    1304,
    1305,
    5,
    10,
    0,
    0,
    1305,
    1306,
    3,
    270,
    135,
    0,
    1306,
    1312,
    1,
    0,
    0,
    0,
    1307,
    1308,
    10,
    1,
    0,
    0,
    1308,
    1309,
    5,
    10,
    0,
    0,
    1309,
    1311,
    3,
    270,
    135,
    0,
    1310,
    1307,
    1,
    0,
    0,
    0,
    1311,
    1314,
    1,
    0,
    0,
    0,
    1312,
    1310,
    1,
    0,
    0,
    0,
    1312,
    1313,
    1,
    0,
    0,
    0,
    1313,
    265,
    1,
    0,
    0,
    0,
    1314,
    1312,
    1,
    0,
    0,
    0,
    1315,
    1316,
    3,
    340,
    170,
    0,
    1316,
    1317,
    3,
    270,
    135,
    0,
    1317,
    1320,
    1,
    0,
    0,
    0,
    1318,
    1320,
    3,
    268,
    134,
    0,
    1319,
    1315,
    1,
    0,
    0,
    0,
    1319,
    1318,
    1,
    0,
    0,
    0,
    1320,
    267,
    1,
    0,
    0,
    0,
    1321,
    1322,
    3,
    302,
    151,
    0,
    1322,
    1323,
    3,
    362,
    181,
    0,
    1323,
    1324,
    3,
    302,
    151,
    0,
    1324,
    269,
    1,
    0,
    0,
    0,
    1325,
    1328,
    3,
    272,
    136,
    0,
    1326,
    1328,
    3,
    266,
    133,
    0,
    1327,
    1325,
    1,
    0,
    0,
    0,
    1327,
    1326,
    1,
    0,
    0,
    0,
    1328,
    271,
    1,
    0,
    0,
    0,
    1329,
    1336,
    3,
    274,
    137,
    0,
    1330,
    1336,
    3,
    278,
    139,
    0,
    1331,
    1332,
    5,
    12,
    0,
    0,
    1332,
    1333,
    3,
    254,
    127,
    0,
    1333,
    1334,
    5,
    13,
    0,
    0,
    1334,
    1336,
    1,
    0,
    0,
    0,
    1335,
    1329,
    1,
    0,
    0,
    0,
    1335,
    1330,
    1,
    0,
    0,
    0,
    1335,
    1331,
    1,
    0,
    0,
    0,
    1336,
    273,
    1,
    0,
    0,
    0,
    1337,
    1338,
    3,
    334,
    167,
    0,
    1338,
    1339,
    5,
    14,
    0,
    0,
    1339,
    1340,
    3,
    276,
    138,
    0,
    1340,
    1341,
    5,
    15,
    0,
    0,
    1341,
    1342,
    5,
    16,
    0,
    0,
    1342,
    1343,
    3,
    270,
    135,
    0,
    1343,
    275,
    1,
    0,
    0,
    0,
    1344,
    1350,
    3,
    382,
    191,
    0,
    1345,
    1346,
    3,
    382,
    191,
    0,
    1346,
    1347,
    5,
    2,
    0,
    0,
    1347,
    1348,
    3,
    276,
    138,
    0,
    1348,
    1350,
    1,
    0,
    0,
    0,
    1349,
    1344,
    1,
    0,
    0,
    0,
    1349,
    1345,
    1,
    0,
    0,
    0,
    1350,
    277,
    1,
    0,
    0,
    0,
    1351,
    1355,
    3,
    280,
    140,
    0,
    1352,
    1355,
    3,
    282,
    141,
    0,
    1353,
    1355,
    3,
    288,
    144,
    0,
    1354,
    1351,
    1,
    0,
    0,
    0,
    1354,
    1352,
    1,
    0,
    0,
    0,
    1354,
    1353,
    1,
    0,
    0,
    0,
    1355,
    279,
    1,
    0,
    0,
    0,
    1356,
    1357,
    3,
    290,
    145,
    0,
    1357,
    281,
    1,
    0,
    0,
    0,
    1358,
    1361,
    3,
    284,
    142,
    0,
    1359,
    1361,
    3,
    286,
    143,
    0,
    1360,
    1358,
    1,
    0,
    0,
    0,
    1360,
    1359,
    1,
    0,
    0,
    0,
    1361,
    283,
    1,
    0,
    0,
    0,
    1362,
    1363,
    3,
    296,
    148,
    0,
    1363,
    285,
    1,
    0,
    0,
    0,
    1364,
    1365,
    3,
    302,
    151,
    0,
    1365,
    1366,
    3,
    358,
    179,
    0,
    1366,
    1367,
    3,
    302,
    151,
    0,
    1367,
    287,
    1,
    0,
    0,
    0,
    1368,
    1369,
    3,
    298,
    149,
    0,
    1369,
    289,
    1,
    0,
    0,
    0,
    1370,
    1377,
    3,
    364,
    182,
    0,
    1371,
    1372,
    3,
    366,
    183,
    0,
    1372,
    1373,
    5,
    12,
    0,
    0,
    1373,
    1374,
    3,
    300,
    150,
    0,
    1374,
    1375,
    5,
    13,
    0,
    0,
    1375,
    1377,
    1,
    0,
    0,
    0,
    1376,
    1370,
    1,
    0,
    0,
    0,
    1376,
    1371,
    1,
    0,
    0,
    0,
    1377,
    291,
    1,
    0,
    0,
    0,
    1378,
    1381,
    3,
    380,
    190,
    0,
    1379,
    1381,
    3,
    294,
    147,
    0,
    1380,
    1378,
    1,
    0,
    0,
    0,
    1380,
    1379,
    1,
    0,
    0,
    0,
    1381,
    293,
    1,
    0,
    0,
    0,
    1382,
    1383,
    3,
    296,
    148,
    0,
    1383,
    295,
    1,
    0,
    0,
    0,
    1384,
    1391,
    3,
    368,
    184,
    0,
    1385,
    1386,
    3,
    370,
    185,
    0,
    1386,
    1387,
    5,
    12,
    0,
    0,
    1387,
    1388,
    3,
    300,
    150,
    0,
    1388,
    1389,
    5,
    13,
    0,
    0,
    1389,
    1391,
    1,
    0,
    0,
    0,
    1390,
    1384,
    1,
    0,
    0,
    0,
    1390,
    1385,
    1,
    0,
    0,
    0,
    1391,
    297,
    1,
    0,
    0,
    0,
    1392,
    1399,
    3,
    372,
    186,
    0,
    1393,
    1394,
    3,
    374,
    187,
    0,
    1394,
    1395,
    5,
    12,
    0,
    0,
    1395,
    1396,
    3,
    300,
    150,
    0,
    1396,
    1397,
    5,
    13,
    0,
    0,
    1397,
    1399,
    1,
    0,
    0,
    0,
    1398,
    1392,
    1,
    0,
    0,
    0,
    1398,
    1393,
    1,
    0,
    0,
    0,
    1399,
    299,
    1,
    0,
    0,
    0,
    1400,
    1406,
    3,
    302,
    151,
    0,
    1401,
    1402,
    3,
    302,
    151,
    0,
    1402,
    1403,
    5,
    2,
    0,
    0,
    1403,
    1404,
    3,
    300,
    150,
    0,
    1404,
    1406,
    1,
    0,
    0,
    0,
    1405,
    1400,
    1,
    0,
    0,
    0,
    1405,
    1401,
    1,
    0,
    0,
    0,
    1406,
    301,
    1,
    0,
    0,
    0,
    1407,
    1410,
    3,
    304,
    152,
    0,
    1408,
    1410,
    3,
    382,
    191,
    0,
    1409,
    1407,
    1,
    0,
    0,
    0,
    1409,
    1408,
    1,
    0,
    0,
    0,
    1410,
    303,
    1,
    0,
    0,
    0,
    1411,
    1415,
    3,
    290,
    145,
    0,
    1412,
    1415,
    3,
    292,
    146,
    0,
    1413,
    1415,
    3,
    298,
    149,
    0,
    1414,
    1411,
    1,
    0,
    0,
    0,
    1414,
    1412,
    1,
    0,
    0,
    0,
    1414,
    1413,
    1,
    0,
    0,
    0,
    1415,
    305,
    1,
    0,
    0,
    0,
    1416,
    1417,
    3,
    308,
    154,
    0,
    1417,
    1418,
    3,
    342,
    171,
    0,
    1418,
    1419,
    3,
    308,
    154,
    0,
    1419,
    1425,
    1,
    0,
    0,
    0,
    1420,
    1421,
    5,
    12,
    0,
    0,
    1421,
    1422,
    3,
    306,
    153,
    0,
    1422,
    1423,
    5,
    13,
    0,
    0,
    1423,
    1425,
    1,
    0,
    0,
    0,
    1424,
    1416,
    1,
    0,
    0,
    0,
    1424,
    1420,
    1,
    0,
    0,
    0,
    1425,
    307,
    1,
    0,
    0,
    0,
    1426,
    1432,
    5,
    18,
    0,
    0,
    1427,
    1428,
    5,
    14,
    0,
    0,
    1428,
    1429,
    3,
    310,
    155,
    0,
    1429,
    1430,
    5,
    15,
    0,
    0,
    1430,
    1432,
    1,
    0,
    0,
    0,
    1431,
    1426,
    1,
    0,
    0,
    0,
    1431,
    1427,
    1,
    0,
    0,
    0,
    1432,
    309,
    1,
    0,
    0,
    0,
    1433,
    1437,
    3,
    254,
    127,
    0,
    1434,
    1436,
    3,
    312,
    156,
    0,
    1435,
    1434,
    1,
    0,
    0,
    0,
    1436,
    1439,
    1,
    0,
    0,
    0,
    1437,
    1435,
    1,
    0,
    0,
    0,
    1437,
    1438,
    1,
    0,
    0,
    0,
    1438,
    311,
    1,
    0,
    0,
    0,
    1439,
    1437,
    1,
    0,
    0,
    0,
    1440,
    1441,
    5,
    2,
    0,
    0,
    1441,
    1442,
    3,
    254,
    127,
    0,
    1442,
    313,
    1,
    0,
    0,
    0,
    1443,
    1449,
    3,
    316,
    158,
    0,
    1444,
    1445,
    5,
    12,
    0,
    0,
    1445,
    1446,
    3,
    314,
    157,
    0,
    1446,
    1447,
    5,
    13,
    0,
    0,
    1447,
    1449,
    1,
    0,
    0,
    0,
    1448,
    1443,
    1,
    0,
    0,
    0,
    1448,
    1444,
    1,
    0,
    0,
    0,
    1449,
    315,
    1,
    0,
    0,
    0,
    1450,
    1451,
    6,
    158,
    -1,
    0,
    1451,
    1452,
    3,
    318,
    159,
    0,
    1452,
    1458,
    1,
    0,
    0,
    0,
    1453,
    1454,
    10,
    1,
    0,
    0,
    1454,
    1455,
    5,
    72,
    0,
    0,
    1455,
    1457,
    3,
    318,
    159,
    0,
    1456,
    1453,
    1,
    0,
    0,
    0,
    1457,
    1460,
    1,
    0,
    0,
    0,
    1458,
    1456,
    1,
    0,
    0,
    0,
    1458,
    1459,
    1,
    0,
    0,
    0,
    1459,
    317,
    1,
    0,
    0,
    0,
    1460,
    1458,
    1,
    0,
    0,
    0,
    1461,
    1471,
    3,
    278,
    139,
    0,
    1462,
    1463,
    5,
    28,
    0,
    0,
    1463,
    1471,
    3,
    278,
    139,
    0,
    1464,
    1465,
    5,
    28,
    0,
    0,
    1465,
    1466,
    5,
    12,
    0,
    0,
    1466,
    1467,
    3,
    278,
    139,
    0,
    1467,
    1468,
    5,
    13,
    0,
    0,
    1468,
    1471,
    1,
    0,
    0,
    0,
    1469,
    1471,
    3,
    268,
    134,
    0,
    1470,
    1461,
    1,
    0,
    0,
    0,
    1470,
    1462,
    1,
    0,
    0,
    0,
    1470,
    1464,
    1,
    0,
    0,
    0,
    1470,
    1469,
    1,
    0,
    0,
    0,
    1471,
    319,
    1,
    0,
    0,
    0,
    1472,
    1476,
    3,
    334,
    167,
    0,
    1473,
    1476,
    3,
    326,
    163,
    0,
    1474,
    1476,
    3,
    324,
    162,
    0,
    1475,
    1472,
    1,
    0,
    0,
    0,
    1475,
    1473,
    1,
    0,
    0,
    0,
    1475,
    1474,
    1,
    0,
    0,
    0,
    1476,
    321,
    1,
    0,
    0,
    0,
    1477,
    1480,
    3,
    340,
    170,
    0,
    1478,
    1480,
    3,
    244,
    122,
    0,
    1479,
    1477,
    1,
    0,
    0,
    0,
    1479,
    1478,
    1,
    0,
    0,
    0,
    1480,
    323,
    1,
    0,
    0,
    0,
    1481,
    1482,
    7,
    0,
    0,
    0,
    1482,
    325,
    1,
    0,
    0,
    0,
    1483,
    1484,
    7,
    1,
    0,
    0,
    1484,
    327,
    1,
    0,
    0,
    0,
    1485,
    1486,
    5,
    33,
    0,
    0,
    1486,
    329,
    1,
    0,
    0,
    0,
    1487,
    1490,
    3,
    340,
    170,
    0,
    1488,
    1490,
    3,
    244,
    122,
    0,
    1489,
    1487,
    1,
    0,
    0,
    0,
    1489,
    1488,
    1,
    0,
    0,
    0,
    1490,
    331,
    1,
    0,
    0,
    0,
    1491,
    1492,
    3,
    334,
    167,
    0,
    1492,
    333,
    1,
    0,
    0,
    0,
    1493,
    1494,
    7,
    2,
    0,
    0,
    1494,
    335,
    1,
    0,
    0,
    0,
    1495,
    1503,
    5,
    35,
    0,
    0,
    1496,
    1503,
    5,
    36,
    0,
    0,
    1497,
    1503,
    5,
    37,
    0,
    0,
    1498,
    1503,
    5,
    38,
    0,
    0,
    1499,
    1500,
    5,
    28,
    0,
    0,
    1500,
    1503,
    5,
    72,
    0,
    0,
    1501,
    1503,
    5,
    39,
    0,
    0,
    1502,
    1495,
    1,
    0,
    0,
    0,
    1502,
    1496,
    1,
    0,
    0,
    0,
    1502,
    1497,
    1,
    0,
    0,
    0,
    1502,
    1498,
    1,
    0,
    0,
    0,
    1502,
    1499,
    1,
    0,
    0,
    0,
    1502,
    1501,
    1,
    0,
    0,
    0,
    1503,
    337,
    1,
    0,
    0,
    0,
    1504,
    1505,
    7,
    3,
    0,
    0,
    1505,
    339,
    1,
    0,
    0,
    0,
    1506,
    1507,
    5,
    28,
    0,
    0,
    1507,
    341,
    1,
    0,
    0,
    0,
    1508,
    1509,
    5,
    40,
    0,
    0,
    1509,
    343,
    1,
    0,
    0,
    0,
    1510,
    1511,
    5,
    41,
    0,
    0,
    1511,
    345,
    1,
    0,
    0,
    0,
    1512,
    1513,
    5,
    42,
    0,
    0,
    1513,
    347,
    1,
    0,
    0,
    0,
    1514,
    1515,
    3,
    350,
    175,
    0,
    1515,
    349,
    1,
    0,
    0,
    0,
    1516,
    1517,
    3,
    452,
    226,
    0,
    1517,
    351,
    1,
    0,
    0,
    0,
    1518,
    1519,
    3,
    454,
    227,
    0,
    1519,
    353,
    1,
    0,
    0,
    0,
    1520,
    1523,
    3,
    356,
    178,
    0,
    1521,
    1523,
    3,
    368,
    184,
    0,
    1522,
    1520,
    1,
    0,
    0,
    0,
    1522,
    1521,
    1,
    0,
    0,
    0,
    1523,
    355,
    1,
    0,
    0,
    0,
    1524,
    1527,
    3,
    364,
    182,
    0,
    1525,
    1527,
    3,
    372,
    186,
    0,
    1526,
    1524,
    1,
    0,
    0,
    0,
    1526,
    1525,
    1,
    0,
    0,
    0,
    1527,
    357,
    1,
    0,
    0,
    0,
    1528,
    1529,
    3,
    360,
    180,
    0,
    1529,
    359,
    1,
    0,
    0,
    0,
    1530,
    1531,
    5,
    43,
    0,
    0,
    1531,
    361,
    1,
    0,
    0,
    0,
    1532,
    1533,
    5,
    44,
    0,
    0,
    1533,
    363,
    1,
    0,
    0,
    0,
    1534,
    1535,
    3,
    366,
    183,
    0,
    1535,
    365,
    1,
    0,
    0,
    0,
    1536,
    1537,
    3,
    452,
    226,
    0,
    1537,
    367,
    1,
    0,
    0,
    0,
    1538,
    1539,
    3,
    370,
    185,
    0,
    1539,
    369,
    1,
    0,
    0,
    0,
    1540,
    1541,
    3,
    454,
    227,
    0,
    1541,
    371,
    1,
    0,
    0,
    0,
    1542,
    1543,
    3,
    374,
    187,
    0,
    1543,
    373,
    1,
    0,
    0,
    0,
    1544,
    1545,
    3,
    456,
    228,
    0,
    1545,
    375,
    1,
    0,
    0,
    0,
    1546,
    1549,
    3,
    368,
    184,
    0,
    1547,
    1549,
    3,
    372,
    186,
    0,
    1548,
    1546,
    1,
    0,
    0,
    0,
    1548,
    1547,
    1,
    0,
    0,
    0,
    1549,
    377,
    1,
    0,
    0,
    0,
    1550,
    1551,
    7,
    4,
    0,
    0,
    1551,
    379,
    1,
    0,
    0,
    0,
    1552,
    1555,
    3,
    458,
    229,
    0,
    1553,
    1555,
    5,
    67,
    0,
    0,
    1554,
    1552,
    1,
    0,
    0,
    0,
    1554,
    1553,
    1,
    0,
    0,
    0,
    1555,
    381,
    1,
    0,
    0,
    0,
    1556,
    1557,
    5,
    70,
    0,
    0,
    1557,
    383,
    1,
    0,
    0,
    0,
    1558,
    1567,
    3,
    388,
    194,
    0,
    1559,
    1567,
    3,
    394,
    197,
    0,
    1560,
    1567,
    3,
    398,
    199,
    0,
    1561,
    1567,
    5,
    50,
    0,
    0,
    1562,
    1563,
    5,
    14,
    0,
    0,
    1563,
    1564,
    3,
    386,
    193,
    0,
    1564,
    1565,
    5,
    15,
    0,
    0,
    1565,
    1567,
    1,
    0,
    0,
    0,
    1566,
    1558,
    1,
    0,
    0,
    0,
    1566,
    1559,
    1,
    0,
    0,
    0,
    1566,
    1560,
    1,
    0,
    0,
    0,
    1566,
    1561,
    1,
    0,
    0,
    0,
    1566,
    1562,
    1,
    0,
    0,
    0,
    1567,
    385,
    1,
    0,
    0,
    0,
    1568,
    1574,
    3,
    384,
    192,
    0,
    1569,
    1570,
    3,
    384,
    192,
    0,
    1570,
    1571,
    5,
    2,
    0,
    0,
    1571,
    1572,
    3,
    386,
    193,
    0,
    1572,
    1574,
    1,
    0,
    0,
    0,
    1573,
    1568,
    1,
    0,
    0,
    0,
    1573,
    1569,
    1,
    0,
    0,
    0,
    1574,
    387,
    1,
    0,
    0,
    0,
    1575,
    1578,
    3,
    450,
    225,
    0,
    1576,
    1578,
    3,
    390,
    195,
    0,
    1577,
    1575,
    1,
    0,
    0,
    0,
    1577,
    1576,
    1,
    0,
    0,
    0,
    1578,
    389,
    1,
    0,
    0,
    0,
    1579,
    1580,
    5,
    51,
    0,
    0,
    1580,
    1581,
    3,
    392,
    196,
    0,
    1581,
    1582,
    5,
    2,
    0,
    0,
    1582,
    1583,
    3,
    424,
    212,
    0,
    1583,
    1584,
    5,
    2,
    0,
    0,
    1584,
    1585,
    3,
    412,
    206,
    0,
    1585,
    1586,
    5,
    13,
    0,
    0,
    1586,
    391,
    1,
    0,
    0,
    0,
    1587,
    1588,
    3,
    452,
    226,
    0,
    1588,
    393,
    1,
    0,
    0,
    0,
    1589,
    1590,
    5,
    52,
    0,
    0,
    1590,
    1591,
    3,
    396,
    198,
    0,
    1591,
    1592,
    5,
    2,
    0,
    0,
    1592,
    1593,
    3,
    424,
    212,
    0,
    1593,
    1594,
    5,
    2,
    0,
    0,
    1594,
    1595,
    3,
    412,
    206,
    0,
    1595,
    1596,
    5,
    13,
    0,
    0,
    1596,
    395,
    1,
    0,
    0,
    0,
    1597,
    1598,
    3,
    452,
    226,
    0,
    1598,
    397,
    1,
    0,
    0,
    0,
    1599,
    1603,
    3,
    400,
    200,
    0,
    1600,
    1603,
    3,
    404,
    202,
    0,
    1601,
    1603,
    3,
    408,
    204,
    0,
    1602,
    1599,
    1,
    0,
    0,
    0,
    1602,
    1600,
    1,
    0,
    0,
    0,
    1602,
    1601,
    1,
    0,
    0,
    0,
    1603,
    399,
    1,
    0,
    0,
    0,
    1604,
    1605,
    5,
    53,
    0,
    0,
    1605,
    1606,
    3,
    460,
    230,
    0,
    1606,
    1607,
    3,
    402,
    201,
    0,
    1607,
    1608,
    5,
    13,
    0,
    0,
    1608,
    401,
    1,
    0,
    0,
    0,
    1609,
    1610,
    5,
    2,
    0,
    0,
    1610,
    1613,
    3,
    450,
    225,
    0,
    1611,
    1613,
    3,
    462,
    231,
    0,
    1612,
    1609,
    1,
    0,
    0,
    0,
    1612,
    1611,
    1,
    0,
    0,
    0,
    1613,
    403,
    1,
    0,
    0,
    0,
    1614,
    1615,
    5,
    54,
    0,
    0,
    1615,
    1616,
    3,
    406,
    203,
    0,
    1616,
    1617,
    3,
    422,
    211,
    0,
    1617,
    1618,
    5,
    13,
    0,
    0,
    1618,
    405,
    1,
    0,
    0,
    0,
    1619,
    1620,
    3,
    452,
    226,
    0,
    1620,
    407,
    1,
    0,
    0,
    0,
    1621,
    1622,
    5,
    55,
    0,
    0,
    1622,
    1623,
    3,
    410,
    205,
    0,
    1623,
    1624,
    5,
    2,
    0,
    0,
    1624,
    1625,
    3,
    424,
    212,
    0,
    1625,
    1626,
    5,
    2,
    0,
    0,
    1626,
    1627,
    3,
    412,
    206,
    0,
    1627,
    1628,
    5,
    13,
    0,
    0,
    1628,
    409,
    1,
    0,
    0,
    0,
    1629,
    1630,
    3,
    452,
    226,
    0,
    1630,
    411,
    1,
    0,
    0,
    0,
    1631,
    1637,
    5,
    18,
    0,
    0,
    1632,
    1633,
    5,
    14,
    0,
    0,
    1633,
    1634,
    3,
    414,
    207,
    0,
    1634,
    1635,
    5,
    15,
    0,
    0,
    1635,
    1637,
    1,
    0,
    0,
    0,
    1636,
    1631,
    1,
    0,
    0,
    0,
    1636,
    1632,
    1,
    0,
    0,
    0,
    1637,
    413,
    1,
    0,
    0,
    0,
    1638,
    1642,
    3,
    418,
    209,
    0,
    1639,
    1641,
    3,
    416,
    208,
    0,
    1640,
    1639,
    1,
    0,
    0,
    0,
    1641,
    1644,
    1,
    0,
    0,
    0,
    1642,
    1640,
    1,
    0,
    0,
    0,
    1642,
    1643,
    1,
    0,
    0,
    0,
    1643,
    415,
    1,
    0,
    0,
    0,
    1644,
    1642,
    1,
    0,
    0,
    0,
    1645,
    1646,
    5,
    2,
    0,
    0,
    1646,
    1647,
    3,
    418,
    209,
    0,
    1647,
    417,
    1,
    0,
    0,
    0,
    1648,
    1649,
    3,
    384,
    192,
    0,
    1649,
    1650,
    3,
    420,
    210,
    0,
    1650,
    419,
    1,
    0,
    0,
    0,
    1651,
    1652,
    5,
    16,
    0,
    0,
    1652,
    1655,
    3,
    444,
    222,
    0,
    1653,
    1655,
    3,
    462,
    231,
    0,
    1654,
    1651,
    1,
    0,
    0,
    0,
    1654,
    1653,
    1,
    0,
    0,
    0,
    1655,
    421,
    1,
    0,
    0,
    0,
    1656,
    1657,
    5,
    2,
    0,
    0,
    1657,
    1660,
    3,
    424,
    212,
    0,
    1658,
    1660,
    3,
    462,
    231,
    0,
    1659,
    1656,
    1,
    0,
    0,
    0,
    1659,
    1658,
    1,
    0,
    0,
    0,
    1660,
    423,
    1,
    0,
    0,
    0,
    1661,
    1662,
    3,
    444,
    222,
    0,
    1662,
    425,
    1,
    0,
    0,
    0,
    1663,
    1664,
    5,
    56,
    0,
    0,
    1664,
    1665,
    3,
    460,
    230,
    0,
    1665,
    1666,
    3,
    428,
    214,
    0,
    1666,
    1667,
    5,
    3,
    0,
    0,
    1667,
    427,
    1,
    0,
    0,
    0,
    1668,
    1677,
    3,
    462,
    231,
    0,
    1669,
    1670,
    5,
    2,
    0,
    0,
    1670,
    1677,
    3,
    430,
    215,
    0,
    1671,
    1672,
    5,
    2,
    0,
    0,
    1672,
    1673,
    3,
    430,
    215,
    0,
    1673,
    1674,
    5,
    2,
    0,
    0,
    1674,
    1675,
    3,
    434,
    217,
    0,
    1675,
    1677,
    1,
    0,
    0,
    0,
    1676,
    1668,
    1,
    0,
    0,
    0,
    1676,
    1669,
    1,
    0,
    0,
    0,
    1676,
    1671,
    1,
    0,
    0,
    0,
    1677,
    429,
    1,
    0,
    0,
    0,
    1678,
    1679,
    5,
    14,
    0,
    0,
    1679,
    1680,
    3,
    432,
    216,
    0,
    1680,
    1681,
    5,
    15,
    0,
    0,
    1681,
    1684,
    1,
    0,
    0,
    0,
    1682,
    1684,
    5,
    73,
    0,
    0,
    1683,
    1678,
    1,
    0,
    0,
    0,
    1683,
    1682,
    1,
    0,
    0,
    0,
    1684,
    431,
    1,
    0,
    0,
    0,
    1685,
    1691,
    3,
    450,
    225,
    0,
    1686,
    1687,
    3,
    450,
    225,
    0,
    1687,
    1688,
    5,
    2,
    0,
    0,
    1688,
    1689,
    3,
    432,
    216,
    0,
    1689,
    1691,
    1,
    0,
    0,
    0,
    1690,
    1685,
    1,
    0,
    0,
    0,
    1690,
    1686,
    1,
    0,
    0,
    0,
    1691,
    433,
    1,
    0,
    0,
    0,
    1692,
    1693,
    3,
    450,
    225,
    0,
    1693,
    435,
    1,
    0,
    0,
    0,
    1694,
    1701,
    3,
    438,
    219,
    0,
    1695,
    1696,
    3,
    438,
    219,
    0,
    1696,
    1697,
    5,
    16,
    0,
    0,
    1697,
    1698,
    3,
    436,
    218,
    0,
    1698,
    1701,
    1,
    0,
    0,
    0,
    1699,
    1701,
    3,
    444,
    222,
    0,
    1700,
    1694,
    1,
    0,
    0,
    0,
    1700,
    1695,
    1,
    0,
    0,
    0,
    1700,
    1699,
    1,
    0,
    0,
    0,
    1701,
    437,
    1,
    0,
    0,
    0,
    1702,
    1709,
    3,
    452,
    226,
    0,
    1703,
    1709,
    3,
    440,
    220,
    0,
    1704,
    1709,
    3,
    382,
    191,
    0,
    1705,
    1709,
    3,
    458,
    229,
    0,
    1706,
    1709,
    5,
    67,
    0,
    0,
    1707,
    1709,
    3,
    442,
    221,
    0,
    1708,
    1702,
    1,
    0,
    0,
    0,
    1708,
    1703,
    1,
    0,
    0,
    0,
    1708,
    1704,
    1,
    0,
    0,
    0,
    1708,
    1705,
    1,
    0,
    0,
    0,
    1708,
    1706,
    1,
    0,
    0,
    0,
    1708,
    1707,
    1,
    0,
    0,
    0,
    1709,
    439,
    1,
    0,
    0,
    0,
    1710,
    1711,
    3,
    452,
    226,
    0,
    1711,
    1712,
    5,
    12,
    0,
    0,
    1712,
    1713,
    3,
    446,
    223,
    0,
    1713,
    1714,
    5,
    13,
    0,
    0,
    1714,
    441,
    1,
    0,
    0,
    0,
    1715,
    1716,
    5,
    57,
    0,
    0,
    1716,
    1717,
    3,
    24,
    12,
    0,
    1717,
    1718,
    5,
    13,
    0,
    0,
    1718,
    1736,
    1,
    0,
    0,
    0,
    1719,
    1720,
    5,
    58,
    0,
    0,
    1720,
    1721,
    3,
    120,
    60,
    0,
    1721,
    1722,
    5,
    13,
    0,
    0,
    1722,
    1736,
    1,
    0,
    0,
    0,
    1723,
    1724,
    5,
    59,
    0,
    0,
    1724,
    1725,
    3,
    252,
    126,
    0,
    1725,
    1726,
    5,
    13,
    0,
    0,
    1726,
    1736,
    1,
    0,
    0,
    0,
    1727,
    1728,
    5,
    60,
    0,
    0,
    1728,
    1729,
    3,
    314,
    157,
    0,
    1729,
    1730,
    5,
    13,
    0,
    0,
    1730,
    1736,
    1,
    0,
    0,
    0,
    1731,
    1732,
    5,
    61,
    0,
    0,
    1732,
    1733,
    3,
    302,
    151,
    0,
    1733,
    1734,
    5,
    13,
    0,
    0,
    1734,
    1736,
    1,
    0,
    0,
    0,
    1735,
    1715,
    1,
    0,
    0,
    0,
    1735,
    1719,
    1,
    0,
    0,
    0,
    1735,
    1723,
    1,
    0,
    0,
    0,
    1735,
    1727,
    1,
    0,
    0,
    0,
    1735,
    1731,
    1,
    0,
    0,
    0,
    1736,
    443,
    1,
    0,
    0,
    0,
    1737,
    1743,
    5,
    18,
    0,
    0,
    1738,
    1739,
    5,
    14,
    0,
    0,
    1739,
    1740,
    3,
    446,
    223,
    0,
    1740,
    1741,
    5,
    15,
    0,
    0,
    1741,
    1743,
    1,
    0,
    0,
    0,
    1742,
    1737,
    1,
    0,
    0,
    0,
    1742,
    1738,
    1,
    0,
    0,
    0,
    1743,
    445,
    1,
    0,
    0,
    0,
    1744,
    1748,
    3,
    436,
    218,
    0,
    1745,
    1747,
    3,
    448,
    224,
    0,
    1746,
    1745,
    1,
    0,
    0,
    0,
    1747,
    1750,
    1,
    0,
    0,
    0,
    1748,
    1746,
    1,
    0,
    0,
    0,
    1748,
    1749,
    1,
    0,
    0,
    0,
    1749,
    447,
    1,
    0,
    0,
    0,
    1750,
    1748,
    1,
    0,
    0,
    0,
    1751,
    1752,
    5,
    2,
    0,
    0,
    1752,
    1753,
    3,
    436,
    218,
    0,
    1753,
    449,
    1,
    0,
    0,
    0,
    1754,
    1757,
    3,
    452,
    226,
    0,
    1755,
    1757,
    5,
    84,
    0,
    0,
    1756,
    1754,
    1,
    0,
    0,
    0,
    1756,
    1755,
    1,
    0,
    0,
    0,
    1757,
    451,
    1,
    0,
    0,
    0,
    1758,
    1759,
    7,
    5,
    0,
    0,
    1759,
    453,
    1,
    0,
    0,
    0,
    1760,
    1761,
    5,
    68,
    0,
    0,
    1761,
    455,
    1,
    0,
    0,
    0,
    1762,
    1763,
    5,
    69,
    0,
    0,
    1763,
    457,
    1,
    0,
    0,
    0,
    1764,
    1765,
    7,
    6,
    0,
    0,
    1765,
    459,
    1,
    0,
    0,
    0,
    1766,
    1767,
    3,
    452,
    226,
    0,
    1767,
    461,
    1,
    0,
    0,
    0,
    1768,
    1769,
    1,
    0,
    0,
    0,
    1769,
    463,
    1,
    0,
    0,
    0,
    130,
    467,
    474,
    482,
    545,
    551,
    556,
    564,
    569,
    578,
    590,
    603,
    616,
    622,
    626,
    635,
    651,
    659,
    672,
    676,
    686,
    690,
    711,
    718,
    725,
    736,
    744,
    751,
    758,
    775,
    783,
    797,
    802,
    811,
    821,
    833,
    846,
    864,
    872,
    876,
    884,
    896,
    909,
    915,
    919,
    928,
    944,
    948,
    956,
    968,
    976,
    988,
    1e3,
    1015,
    1022,
    1029,
    1037,
    1044,
    1055,
    1065,
    1072,
    1078,
    1092,
    1096,
    1104,
    1119,
    1126,
    1141,
    1148,
    1164,
    1176,
    1200,
    1207,
    1211,
    1225,
    1232,
    1236,
    1251,
    1255,
    1259,
    1270,
    1275,
    1279,
    1287,
    1299,
    1312,
    1319,
    1327,
    1335,
    1349,
    1354,
    1360,
    1376,
    1380,
    1390,
    1398,
    1405,
    1409,
    1414,
    1424,
    1431,
    1437,
    1448,
    1458,
    1470,
    1475,
    1479,
    1489,
    1502,
    1522,
    1526,
    1548,
    1554,
    1566,
    1573,
    1577,
    1602,
    1612,
    1636,
    1642,
    1654,
    1659,
    1676,
    1683,
    1690,
    1700,
    1708,
    1735,
    1742,
    1748,
    1756
  ];
  var atn2 = new Qn.atn.ATNDeserializer().deserialize(serializedATN2);
  var decisionsToDFA2 = atn2.decisionToState.map((ds, index) => new Qn.dfa.DFA(ds, index));
  var sharedContextCache = new Qn.atn.PredictionContextCache();
  var TPTPParser = class _TPTPParser extends Qn.Parser {
    static grammarFileName = "TPTP.g4";
    static literalNames = [
      null,
      "'tpi('",
      "','",
      "').'",
      "'thf('",
      "'tff('",
      "'tcf('",
      "'fof('",
      "'cnf('",
      "'-'",
      "'&'",
      "'@'",
      "'('",
      "')'",
      "'['",
      "']'",
      "':'",
      "'$let('",
      "'[]'",
      "'!>'",
      "'{'",
      "'}'",
      "')}'",
      "'[.]'",
      "'.'",
      "'{.}'",
      "'(.)'",
      "'!'",
      "'~'",
      "'?*'",
      "'^'",
      "'@+'",
      "'@-'",
      "'<<'",
      "'?'",
      "'<=>'",
      "'=>'",
      "'<='",
      "'<~>'",
      "'~&'",
      "'-->'",
      "':='",
      "'=='",
      "'='",
      "'!='",
      "'!!'",
      "'??'",
      "'@@+'",
      "'@@-'",
      "'@='",
      "'unknown'",
      "'inference('",
      "'introduced('",
      "'file('",
      "'theory('",
      "'creator('",
      "'include('",
      "'$thf('",
      "'$tff('",
      "'$fof('",
      "'$cnf('",
      "'$fot('",
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      "'|'",
      "'*'",
      "'+'",
      "'>'",
      "'<'",
      "'#'",
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      "'''",
      null,
      null,
      "'\\\\'",
      null,
      null,
      null,
      "'.\\n'"
    ];
    static symbolicNames = [
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      "WS",
      "Comment_line",
      "Comment_block",
      "Not_star_slash",
      "Single_quoted",
      "Distinct_object",
      "Dollar_word",
      "Dollar_dollar_word",
      "Upper_word",
      "Lower_word",
      "Vline",
      "Star",
      "Plus",
      "Arrow",
      "Less_sign",
      "Hash",
      "Real",
      "Signed_real",
      "Unsigned_real",
      "Rational",
      "Signed_rational",
      "Unsigned_rational",
      "Integer",
      "Signed_integer",
      "Unsigned_integer",
      "Decimal",
      "Positive_decimal",
      "Decimal_exponent",
      "Decimal_fraction",
      "Dot_decimal",
      "Exp_integer",
      "Signed_exp_integer",
      "Unsigned_exp_integer",
      "Slash",
      "Slosh",
      "Percentage_sign",
      "Double_quote",
      "Single_quote",
      "Dot",
      "Slash_char",
      "Slosh_char",
      "Zero_numeric",
      "Dollar",
      "Printable_char",
      "Viewable_char"
    ];
    static ruleNames = [
      "tptp_file",
      "tptp_input",
      "annotated_formula",
      "tpi_annotated",
      "tpi_formula",
      "thf_annotated",
      "tff_annotated",
      "tcf_annotated",
      "fof_annotated",
      "cnf_annotated",
      "annotations",
      "formula_role",
      "thf_formula",
      "thf_logic_formula",
      "thf_binary_formula",
      "thf_binary_nonassoc",
      "thf_binary_assoc",
      "thf_or_formula",
      "thf_and_formula",
      "thf_apply_formula",
      "thf_unit_formula",
      "thf_preunit_formula",
      "thf_unitary_formula",
      "thf_quantified_formula",
      "thf_quantification",
      "thf_variable_list",
      "thf_typed_variable",
      "thf_unary_formula",
      "thf_prefix_unary",
      "thf_infix_unary",
      "thf_atomic_formula",
      "thf_plain_atomic",
      "thf_defined_atomic",
      "thf_defined_term",
      "thf_defined_infix",
      "thf_system_atomic",
      "thf_let",
      "thf_let_types",
      "thf_atom_typing_list",
      "thf_let_defns",
      "thf_let_defn",
      "thf_let_defn_list",
      "thf_unitary_term",
      "thf_conn_term",
      "thf_tuple",
      "thf_fof_function",
      "thf_arguments",
      "thf_formula_list",
      "comma_thf_logic_formula",
      "thf_atom_typing",
      "thf_top_level_type",
      "thf_unitary_type",
      "thf_apply_type",
      "thf_binary_type",
      "thf_mapping_type",
      "thf_xprod_type",
      "thf_union_type",
      "thf_subtype",
      "thf_definition",
      "thf_sequent",
      "tff_formula",
      "tff_logic_formula",
      "tff_binary_formula",
      "tff_binary_nonassoc",
      "tff_binary_assoc",
      "tff_or_formula",
      "tff_and_formula",
      "tff_unit_formula",
      "tff_preunit_formula",
      "tff_unitary_formula",
      "txf_unitary_formula",
      "tff_quantified_formula",
      "tff_variable_list",
      "tff_variable",
      "tff_typed_variable",
      "tff_unary_formula",
      "tff_prefix_unary",
      "tff_infix_unary",
      "tff_atomic_formula",
      "tff_plain_atomic",
      "tff_defined_atomic",
      "tff_defined_plain",
      "tff_defined_infix",
      "tff_system_atomic",
      "txf_let",
      "txf_let_types",
      "tff_atom_typing_list",
      "txf_let_defns",
      "txf_let_defn",
      "txf_let_LHS",
      "txf_let_defn_list",
      "nxf_atom",
      "tff_term",
      "tff_unitary_term",
      "txf_tuple",
      "tff_arguments",
      "comma_tff_term",
      "tff_atom_typing",
      "tff_top_level_type",
      "tff_non_atomic_type",
      "tf1_quantified_type",
      "tff_monotype",
      "tff_unitary_type",
      "tff_atomic_type",
      "tff_type_arguments",
      "tff_mapping_type",
      "tff_xprod_type",
      "txf_tuple_type",
      "tff_type_list",
      "tff_subtype",
      "txf_definition",
      "txf_sequent",
      "nhf_long_connective",
      "nhf_parameter_list",
      "nhf_parameter",
      "nhf_key_pair",
      "nxf_long_connective",
      "nxf_parameter_list",
      "nxf_parameter",
      "nxf_key_pair",
      "ntf_connective_name",
      "ntf_index",
      "ntf_short_connective",
      "tcf_formula",
      "tcf_logic_formula",
      "tcf_quantified_formula",
      "fof_formula",
      "fof_logic_formula",
      "fof_binary_formula",
      "fof_binary_nonassoc",
      "fof_binary_assoc",
      "fof_or_formula",
      "fof_and_formula",
      "fof_unary_formula",
      "fof_infix_unary",
      "fof_unit_formula",
      "fof_unitary_formula",
      "fof_quantified_formula",
      "fof_variable_list",
      "fof_atomic_formula",
      "fof_plain_atomic_formula",
      "fof_defined_atomic_formula",
      "fof_defined_plain_formula",
      "fof_defined_infix_formula",
      "fof_system_atomic_formula",
      "fof_plain_term",
      "fof_defined_term",
      "fof_defined_atomic_term",
      "fof_defined_plain_term",
      "fof_system_term",
      "fof_arguments",
      "fof_term",
      "fof_function_term",
      "fof_sequent",
      "fof_formula_tuple",
      "fof_formula_tuple_list",
      "comma_fof_logic_formula",
      "cnf_formula",
      "cnf_disjunction",
      "cnf_literal",
      "thf_quantifier",
      "thf_unary_connective",
      "th1_quantifier",
      "th0_quantifier",
      "subtype_sign",
      "tff_unary_connective",
      "tff_quantifier",
      "fof_quantifier",
      "nonassoc_connective",
      "assoc_connective",
      "unary_connective",
      "gentzen_arrow",
      "assignment",
      "identical",
      "type_constant",
      "type_functor",
      "defined_type",
      "atom",
      "untyped_atom",
      "defined_infix_pred",
      "infix_equality",
      "infix_inequality",
      "constant",
      "functor",
      "defined_constant",
      "defined_functor",
      "system_constant",
      "system_functor",
      "def_or_sys_constant",
      "th1_defined_term",
      "defined_term",
      "variable",
      "source",
      "sources",
      "dag_source",
      "inference_record",
      "inference_rule",
      "internal_source",
      "intro_type",
      "external_source",
      "file_source",
      "file_info",
      "theory",
      "theory_name",
      "creator_source",
      "creator_name",
      "parents",
      "parent_list",
      "comma_parent_info",
      "parent_info",
      "parent_details",
      "optional_info",
      "useful_info",
      "include",
      "include_optionals",
      "formula_selection",
      "name_list",
      "space_name",
      "general_term",
      "general_data",
      "general_function",
      "formula_data",
      "general_list",
      "general_terms",
      "comma_general_term",
      "name",
      "atomic_word",
      "atomic_defined_word",
      "atomic_system_word",
      "number",
      "file_name",
      "nothing"
    ];
    constructor(input) {
      super(input);
      this._interp = new Qn.atn.ParserATNSimulator(this, atn2, decisionsToDFA2, sharedContextCache);
      this.ruleNames = _TPTPParser.ruleNames;
      this.literalNames = _TPTPParser.literalNames;
      this.symbolicNames = _TPTPParser.symbolicNames;
    }
    sempred(localctx, ruleIndex, predIndex) {
      switch (ruleIndex) {
        case 17:
          return this.thf_or_formula_sempred(localctx, predIndex);
        case 18:
          return this.thf_and_formula_sempred(localctx, predIndex);
        case 19:
          return this.thf_apply_formula_sempred(localctx, predIndex);
        case 55:
          return this.thf_xprod_type_sempred(localctx, predIndex);
        case 56:
          return this.thf_union_type_sempred(localctx, predIndex);
        case 65:
          return this.tff_or_formula_sempred(localctx, predIndex);
        case 66:
          return this.tff_and_formula_sempred(localctx, predIndex);
        case 106:
          return this.tff_xprod_type_sempred(localctx, predIndex);
        case 131:
          return this.fof_or_formula_sempred(localctx, predIndex);
        case 132:
          return this.fof_and_formula_sempred(localctx, predIndex);
        case 158:
          return this.cnf_disjunction_sempred(localctx, predIndex);
        default:
          throw "No predicate with index:" + ruleIndex;
      }
    }
    thf_or_formula_sempred(localctx, predIndex) {
      switch (predIndex) {
        case 0:
          return this.precpred(this._ctx, 1);
        default:
          throw "No predicate with index:" + predIndex;
      }
    }
    thf_and_formula_sempred(localctx, predIndex) {
      switch (predIndex) {
        case 1:
          return this.precpred(this._ctx, 1);
        default:
          throw "No predicate with index:" + predIndex;
      }
    }
    thf_apply_formula_sempred(localctx, predIndex) {
      switch (predIndex) {
        case 2:
          return this.precpred(this._ctx, 1);
        default:
          throw "No predicate with index:" + predIndex;
      }
    }
    thf_xprod_type_sempred(localctx, predIndex) {
      switch (predIndex) {
        case 3:
          return this.precpred(this._ctx, 1);
        default:
          throw "No predicate with index:" + predIndex;
      }
    }
    thf_union_type_sempred(localctx, predIndex) {
      switch (predIndex) {
        case 4:
          return this.precpred(this._ctx, 1);
        default:
          throw "No predicate with index:" + predIndex;
      }
    }
    tff_or_formula_sempred(localctx, predIndex) {
      switch (predIndex) {
        case 5:
          return this.precpred(this._ctx, 1);
        default:
          throw "No predicate with index:" + predIndex;
      }
    }
    tff_and_formula_sempred(localctx, predIndex) {
      switch (predIndex) {
        case 6:
          return this.precpred(this._ctx, 1);
        default:
          throw "No predicate with index:" + predIndex;
      }
    }
    tff_xprod_type_sempred(localctx, predIndex) {
      switch (predIndex) {
        case 7:
          return this.precpred(this._ctx, 1);
        default:
          throw "No predicate with index:" + predIndex;
      }
    }
    fof_or_formula_sempred(localctx, predIndex) {
      switch (predIndex) {
        case 8:
          return this.precpred(this._ctx, 1);
        default:
          throw "No predicate with index:" + predIndex;
      }
    }
    fof_and_formula_sempred(localctx, predIndex) {
      switch (predIndex) {
        case 9:
          return this.precpred(this._ctx, 1);
        default:
          throw "No predicate with index:" + predIndex;
      }
    }
    cnf_disjunction_sempred(localctx, predIndex) {
      switch (predIndex) {
        case 10:
          return this.precpred(this._ctx, 1);
        default:
          throw "No predicate with index:" + predIndex;
      }
    }
    tptp_file() {
      let localctx = new Tptp_fileContext(this, this._ctx, this.state);
      this.enterRule(localctx, 0, _TPTPParser.RULE_tptp_file);
      var _la = 0;
      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 467;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while ((_la & ~31) === 0 && (1 << _la & 498) !== 0 || _la === 56) {
          this.state = 464;
          this.tptp_input();
          this.state = 469;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
        this.state = 470;
        this.match(_TPTPParser.EOF);
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    tptp_input() {
      let localctx = new Tptp_inputContext(this, this._ctx, this.state);
      this.enterRule(localctx, 2, _TPTPParser.RULE_tptp_input);
      try {
        this.state = 474;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
          case 1:
          case 4:
          case 5:
          case 6:
          case 7:
          case 8:
            this.enterOuterAlt(localctx, 1);
            this.state = 472;
            this.annotated_formula();
            break;
          case 56:
            this.enterOuterAlt(localctx, 2);
            this.state = 473;
            this.include();
            break;
          default:
            throw new Qn.error.NoViableAltException(this);
        }
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    annotated_formula() {
      let localctx = new Annotated_formulaContext(this, this._ctx, this.state);
      this.enterRule(localctx, 4, _TPTPParser.RULE_annotated_formula);
      try {
        this.state = 482;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
          case 4:
            this.enterOuterAlt(localctx, 1);
            this.state = 476;
            this.thf_annotated();
            break;
          case 5:
            this.enterOuterAlt(localctx, 2);
            this.state = 477;
            this.tff_annotated();
            break;
          case 6:
            this.enterOuterAlt(localctx, 3);
            this.state = 478;
            this.tcf_annotated();
            break;
          case 7:
            this.enterOuterAlt(localctx, 4);
            this.state = 479;
            this.fof_annotated();
            break;
          case 8:
            this.enterOuterAlt(localctx, 5);
            this.state = 480;
            this.cnf_annotated();
            break;
          case 1:
            this.enterOuterAlt(localctx, 6);
            this.state = 481;
            this.tpi_annotated();
            break;
          default:
            throw new Qn.error.NoViableAltException(this);
        }
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    tpi_annotated() {
      let localctx = new Tpi_annotatedContext(this, this._ctx, this.state);
      this.enterRule(localctx, 6, _TPTPParser.RULE_tpi_annotated);
      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 484;
        this.match(_TPTPParser.T__0);
        this.state = 485;
        this.name();
        this.state = 486;
        this.match(_TPTPParser.T__1);
        this.state = 487;
        this.formula_role();
        this.state = 488;
        this.match(_TPTPParser.T__1);
        this.state = 489;
        this.tpi_formula();
        this.state = 490;
        this.annotations();
        this.state = 491;
        this.match(_TPTPParser.T__2);
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    tpi_formula() {
      let localctx = new Tpi_formulaContext(this, this._ctx, this.state);
      this.enterRule(localctx, 8, _TPTPParser.RULE_tpi_formula);
      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 493;
        this.fof_formula();
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    thf_annotated() {
      let localctx = new Thf_annotatedContext(this, this._ctx, this.state);
      this.enterRule(localctx, 10, _TPTPParser.RULE_thf_annotated);
      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 495;
        this.match(_TPTPParser.T__3);
        this.state = 496;
        this.name();
        this.state = 497;
        this.match(_TPTPParser.T__1);
        this.state = 498;
        this.formula_role();
        this.state = 499;
        this.match(_TPTPParser.T__1);
        this.state = 500;
        this.thf_formula();
        this.state = 501;
        this.annotations();
        this.state = 502;
        this.match(_TPTPParser.T__2);
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    tff_annotated() {
      let localctx = new Tff_annotatedContext(this, this._ctx, this.state);
      this.enterRule(localctx, 12, _TPTPParser.RULE_tff_annotated);
      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 504;
        this.match(_TPTPParser.T__4);
        this.state = 505;
        this.name();
        this.state = 506;
        this.match(_TPTPParser.T__1);
        this.state = 507;
        this.formula_role();
        this.state = 508;
        this.match(_TPTPParser.T__1);
        this.state = 509;
        this.tff_formula();
        this.state = 510;
        this.annotations();
        this.state = 511;
        this.match(_TPTPParser.T__2);
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    tcf_annotated() {
      let localctx = new Tcf_annotatedContext(this, this._ctx, this.state);
      this.enterRule(localctx, 14, _TPTPParser.RULE_tcf_annotated);
      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 513;
        this.match(_TPTPParser.T__5);
        this.state = 514;
        this.name();
        this.state = 515;
        this.match(_TPTPParser.T__1);
        this.state = 516;
        this.formula_role();
        this.state = 517;
        this.match(_TPTPParser.T__1);
        this.state = 518;
        this.tcf_formula();
        this.state = 519;
        this.annotations();
        this.state = 520;
        this.match(_TPTPParser.T__2);
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    fof_annotated() {
      let localctx = new Fof_annotatedContext(this, this._ctx, this.state);
      this.enterRule(localctx, 16, _TPTPParser.RULE_fof_annotated);
      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 522;
        this.match(_TPTPParser.T__6);
        this.state = 523;
        this.name();
        this.state = 524;
        this.match(_TPTPParser.T__1);
        this.state = 525;
        this.formula_role();
        this.state = 526;
        this.match(_TPTPParser.T__1);
        this.state = 527;
        this.fof_formula();
        this.state = 528;
        this.annotations();
        this.state = 529;
        this.match(_TPTPParser.T__2);
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    cnf_annotated() {
      let localctx = new Cnf_annotatedContext(this, this._ctx, this.state);
      this.enterRule(localctx, 18, _TPTPParser.RULE_cnf_annotated);
      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 531;
        this.match(_TPTPParser.T__7);
        this.state = 532;
        this.name();
        this.state = 533;
        this.match(_TPTPParser.T__1);
        this.state = 534;
        this.formula_role();
        this.state = 535;
        this.match(_TPTPParser.T__1);
        this.state = 536;
        this.cnf_formula();
        this.state = 537;
        this.annotations();
        this.state = 538;
        this.match(_TPTPParser.T__2);
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    annotations() {
      let localctx = new AnnotationsContext(this, this._ctx, this.state);
      this.enterRule(localctx, 20, _TPTPParser.RULE_annotations);
      try {
        this.state = 545;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
          case 2:
            this.enterOuterAlt(localctx, 1);
            this.state = 540;
            this.match(_TPTPParser.T__1);
            this.state = 541;
            this.source();
            this.state = 542;
            this.optional_info();
            break;
          case 3:
            this.enterOuterAlt(localctx, 2);
            this.state = 544;
            this.nothing();
            break;
          default:
            throw new Qn.error.NoViableAltException(this);
        }
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    formula_role() {
      let localctx = new Formula_roleContext(this, this._ctx, this.state);
      this.enterRule(localctx, 22, _TPTPParser.RULE_formula_role);
      try {
        this.state = 551;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input, 4, this._ctx);
        switch (la_) {
          case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 547;
            this.match(_TPTPParser.Lower_word);
            break;
          case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 548;
            this.match(_TPTPParser.Lower_word);
            this.state = 549;
            this.match(_TPTPParser.T__8);
            this.state = 550;
            this.general_term();
            break;
        }
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    thf_formula() {
      let localctx = new Thf_formulaContext(this, this._ctx, this.state);
      this.enterRule(localctx, 24, _TPTPParser.RULE_thf_formula);
      try {
        this.state = 556;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input, 5, this._ctx);
        switch (la_) {
          case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 553;
            this.thf_logic_formula();
            break;
          case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 554;
            this.thf_atom_typing();
            break;
          case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 555;
            this.thf_subtype();
            break;
        }
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    thf_logic_formula() {
      let localctx = new Thf_logic_formulaContext(this, this._ctx, this.state);
      this.enterRule(localctx, 26, _TPTPParser.RULE_thf_logic_formula);
      try {
        this.state = 564;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input, 6, this._ctx);
        switch (la_) {
          case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 558;
            this.thf_unitary_formula();
            break;
          case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 559;
            this.thf_unary_formula();
            break;
          case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 560;
            this.thf_binary_formula();
            break;
          case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 561;
            this.thf_defined_infix();
            break;
          case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 562;
            this.thf_definition();
            break;
          case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 563;
            this.thf_sequent();
            break;
        }
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    thf_binary_formula() {
      let localctx = new Thf_binary_formulaContext(this, this._ctx, this.state);
      this.enterRule(localctx, 28, _TPTPParser.RULE_thf_binary_formula);
      try {
        this.state = 569;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input, 7, this._ctx);
        switch (la_) {
          case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 566;
            this.thf_binary_nonassoc();
            break;
          case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 567;
            this.thf_binary_assoc();
            break;
          case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 568;
            this.thf_binary_type();
            break;
        }
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    thf_binary_nonassoc() {
      let localctx = new Thf_binary_nonassocContext(this, this._ctx, this.state);
      this.enterRule(localctx, 30, _TPTPParser.RULE_thf_binary_nonassoc);
      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 571;
        this.thf_unit_formula();
        this.state = 572;
        this.nonassoc_connective();
        this.state = 573;
        this.thf_unit_formula();
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    thf_binary_assoc() {
      let localctx = new Thf_binary_assocContext(this, this._ctx, this.state);
      this.enterRule(localctx, 32, _TPTPParser.RULE_thf_binary_assoc);
      try {
        this.state = 578;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input, 8, this._ctx);
        switch (la_) {
          case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 575;
            this.thf_or_formula(0);
            break;
          case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 576;
            this.thf_and_formula(0);
            break;
          case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 577;
            this.thf_apply_formula(0);
            break;
        }
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    thf_or_formula(_p) {
      if (_p === void 0) {
        _p = 0;
      }
      const _parentctx = this._ctx;
      const _parentState = this.state;
      let localctx = new Thf_or_formulaContext(this, this._ctx, _parentState);
      let _prevctx = localctx;
      const _startState = 34;
      this.enterRecursionRule(localctx, 34, _TPTPParser.RULE_thf_or_formula, _p);
      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 581;
        this.thf_unit_formula();
        this.state = 582;
        this.match(_TPTPParser.Vline);
        this.state = 583;
        this.thf_unit_formula();
        this._ctx.stop = this._input.LT(-1);
        this.state = 590;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input, 9, this._ctx);
        while (_alt != 2 && _alt != Qn.atn.ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners !== null) {
              this.triggerExitRuleEvent();
            }
            _prevctx = localctx;
            localctx = new Thf_or_formulaContext(this, _parentctx, _parentState);
            this.pushNewRecursionContext(localctx, _startState, _TPTPParser.RULE_thf_or_formula);
            this.state = 585;
            if (!this.precpred(this._ctx, 1)) {
              throw new Qn.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
            }
            this.state = 586;
            this.match(_TPTPParser.Vline);
            this.state = 587;
            this.thf_unit_formula();
          }
          this.state = 592;
          this._errHandler.sync(this);
          _alt = this._interp.adaptivePredict(this._input, 9, this._ctx);
        }
      } catch (error) {
        if (error instanceof Qn.error.RecognitionException) {
          localctx.exception = error;
          this._errHandler.reportError(this, error);
          this._errHandler.recover(this, error);
        } else {
          throw error;
        }
      } finally {
        this.unrollRecursionContexts(_parentctx);
      }
      return localctx;
    }
    thf_and_formula(_p) {
      if (_p === void 0) {
        _p = 0;
      }
      const _parentctx = this._ctx;
      const _parentState = this.state;
      let localctx = new Thf_and_formulaContext(this, this._ctx, _parentState);
      let _prevctx = localctx;
      const _startState = 36;
      this.enterRecursionRule(localctx, 36, _TPTPParser.RULE_thf_and_formula, _p);
      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 594;
        this.thf_unit_formula();
        this.state = 595;
        this.match(_TPTPParser.T__9);
        this.state = 596;
        this.thf_unit_formula();
        this._ctx.stop = this._input.LT(-1);
        this.state = 603;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input, 10, this._ctx);
        while (_alt != 2 && _alt != Qn.atn.ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners !== null) {
              this.triggerExitRuleEvent();
            }
            _prevctx = localctx;
            localctx = new Thf_and_formulaContext(this, _parentctx, _parentState);
            this.pushNewRecursionContext(localctx, _startState, _TPTPParser.RULE_thf_and_formula);
            this.state = 598;
            if (!this.precpred(this._ctx, 1)) {
              throw new Qn.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
            }
            this.state = 599;
            this.match(_TPTPParser.T__9);
            this.state = 600;
            this.thf_unit_formula();
          }
          this.state = 605;
          this._errHandler.sync(this);
          _alt = this._interp.adaptivePredict(this._input, 10, this._ctx);
        }
      } catch (error) {
        if (error instanceof Qn.error.RecognitionException) {
          localctx.exception = error;
          this._errHandler.reportError(this, error);
          this._errHandler.recover(this, error);
        } else {
          throw error;
        }
      } finally {
        this.unrollRecursionContexts(_parentctx);
      }
      return localctx;
    }
    thf_apply_formula(_p) {
      if (_p === void 0) {
        _p = 0;
      }
      const _parentctx = this._ctx;
      const _parentState = this.state;
      let localctx = new Thf_apply_formulaContext(this, this._ctx, _parentState);
      let _prevctx = localctx;
      const _startState = 38;
      this.enterRecursionRule(localctx, 38, _TPTPParser.RULE_thf_apply_formula, _p);
      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 607;
        this.thf_unit_formula();
        this.state = 608;
        this.match(_TPTPParser.T__10);
        this.state = 609;
        this.thf_unit_formula();
        this._ctx.stop = this._input.LT(-1);
        this.state = 616;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input, 11, this._ctx);
        while (_alt != 2 && _alt != Qn.atn.ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners !== null) {
              this.triggerExitRuleEvent();
            }
            _prevctx = localctx;
            localctx = new Thf_apply_formulaContext(this, _parentctx, _parentState);
            this.pushNewRecursionContext(localctx, _startState, _TPTPParser.RULE_thf_apply_formula);
            this.state = 611;
            if (!this.precpred(this._ctx, 1)) {
              throw new Qn.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
            }
            this.state = 612;
            this.match(_TPTPParser.T__10);
            this.state = 613;
            this.thf_unit_formula();
          }
          this.state = 618;
          this._errHandler.sync(this);
          _alt = this._interp.adaptivePredict(this._input, 11, this._ctx);
        }
      } catch (error) {
        if (error instanceof Qn.error.RecognitionException) {
          localctx.exception = error;
          this._errHandler.reportError(this, error);
          this._errHandler.recover(this, error);
        } else {
          throw error;
        }
      } finally {
        this.unrollRecursionContexts(_parentctx);
      }
      return localctx;
    }
    thf_unit_formula() {
      let localctx = new Thf_unit_formulaContext(this, this._ctx, this.state);
      this.enterRule(localctx, 40, _TPTPParser.RULE_thf_unit_formula);
      try {
        this.state = 622;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input, 12, this._ctx);
        switch (la_) {
          case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 619;
            this.thf_unitary_formula();
            break;
          case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 620;
            this.thf_unary_formula();
            break;
          case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 621;
            this.thf_defined_infix();
            break;
        }
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    thf_preunit_formula() {
      let localctx = new Thf_preunit_formulaContext(this, this._ctx, this.state);
      this.enterRule(localctx, 42, _TPTPParser.RULE_thf_preunit_formula);
      try {
        this.state = 626;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
          case 12:
          case 14:
          case 17:
          case 18:
          case 19:
          case 20:
          case 27:
          case 29:
          case 30:
          case 31:
          case 32:
          case 34:
          case 45:
          case 46:
          case 47:
          case 48:
          case 49:
          case 66:
          case 67:
          case 68:
          case 69:
          case 70:
          case 71:
          case 77:
          case 78:
          case 81:
          case 84:
            this.enterOuterAlt(localctx, 1);
            this.state = 624;
            this.thf_unitary_formula();
            break;
          case 23:
          case 25:
          case 26:
          case 28:
          case 76:
            this.enterOuterAlt(localctx, 2);
            this.state = 625;
            this.thf_prefix_unary();
            break;
          default:
            throw new Qn.error.NoViableAltException(this);
        }
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    thf_unitary_formula() {
      let localctx = new Thf_unitary_formulaContext(this, this._ctx, this.state);
      this.enterRule(localctx, 44, _TPTPParser.RULE_thf_unitary_formula);
      try {
        this.state = 635;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input, 14, this._ctx);
        switch (la_) {
          case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 628;
            this.thf_quantified_formula();
            break;
          case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 629;
            this.thf_atomic_formula();
            break;
          case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 630;
            this.variable();
            break;
          case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 631;
            this.match(_TPTPParser.T__11);
            this.state = 632;
            this.thf_logic_formula();
            this.state = 633;
            this.match(_TPTPParser.T__12);
            break;
        }
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    thf_quantified_formula() {
      let localctx = new Thf_quantified_formulaContext(this, this._ctx, this.state);
      this.enterRule(localctx, 46, _TPTPParser.RULE_thf_quantified_formula);
      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 637;
        this.thf_quantification();
        this.state = 638;
        this.thf_unit_formula();
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    thf_quantification() {
      let localctx = new Thf_quantificationContext(this, this._ctx, this.state);
      this.enterRule(localctx, 48, _TPTPParser.RULE_thf_quantification);
      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 640;
        this.thf_quantifier();
        this.state = 641;
        this.match(_TPTPParser.T__13);
        this.state = 642;
        this.thf_variable_list();
        this.state = 643;
        this.match(_TPTPParser.T__14);
        this.state = 644;
        this.match(_TPTPParser.T__15);
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    thf_variable_list() {
      let localctx = new Thf_variable_listContext(this, this._ctx, this.state);
      this.enterRule(localctx, 50, _TPTPParser.RULE_thf_variable_list);
      try {
        this.state = 651;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input, 15, this._ctx);
        switch (la_) {
          case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 646;
            this.thf_typed_variable();
            break;
          case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 647;
            this.thf_typed_variable();
            this.state = 648;
            this.match(_TPTPParser.T__1);
            this.state = 649;
            this.thf_variable_list();
            break;
        }
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    thf_typed_variable() {
      let localctx = new Thf_typed_variableContext(this, this._ctx, this.state);
      this.enterRule(localctx, 52, _TPTPParser.RULE_thf_typed_variable);
      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 653;
        this.variable();
        this.state = 654;
        this.match(_TPTPParser.T__15);
        this.state = 655;
        this.thf_top_level_type();
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    thf_unary_formula() {
      let localctx = new Thf_unary_formulaContext(this, this._ctx, this.state);
      this.enterRule(localctx, 54, _TPTPParser.RULE_thf_unary_formula);
      try {
        this.state = 659;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
          case 23:
          case 25:
          case 26:
          case 28:
          case 76:
            this.enterOuterAlt(localctx, 1);
            this.state = 657;
            this.thf_prefix_unary();
            break;
          case 12:
          case 14:
          case 17:
          case 18:
          case 20:
          case 45:
          case 46:
          case 47:
          case 48:
          case 49:
          case 66:
          case 67:
          case 68:
          case 69:
          case 70:
          case 71:
          case 78:
          case 81:
          case 84:
            this.enterOuterAlt(localctx, 2);
            this.state = 658;
            this.thf_infix_unary();
            break;
          default:
            throw new Qn.error.NoViableAltException(this);
        }
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    thf_prefix_unary() {
      let localctx = new Thf_prefix_unaryContext(this, this._ctx, this.state);
      this.enterRule(localctx, 56, _TPTPParser.RULE_thf_prefix_unary);
      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 661;
        this.thf_unary_connective();
        this.state = 662;
        this.thf_preunit_formula();
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    thf_infix_unary() {
      let localctx = new Thf_infix_unaryContext(this, this._ctx, this.state);
      this.enterRule(localctx, 58, _TPTPParser.RULE_thf_infix_unary);
      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 664;
        this.thf_unitary_term();
        this.state = 665;
        this.infix_inequality();
        this.state = 666;
        this.thf_unitary_term();
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    thf_atomic_formula() {
      let localctx = new Thf_atomic_formulaContext(this, this._ctx, this.state);
      this.enterRule(localctx, 60, _TPTPParser.RULE_thf_atomic_formula);
      try {
        this.state = 672;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input, 17, this._ctx);
        switch (la_) {
          case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 668;
            this.thf_plain_atomic();
            break;
          case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 669;
            this.thf_defined_atomic();
            break;
          case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 670;
            this.thf_system_atomic();
            break;
          case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 671;
            this.thf_fof_function();
            break;
        }
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    thf_plain_atomic() {
      let localctx = new Thf_plain_atomicContext(this, this._ctx, this.state);
      this.enterRule(localctx, 62, _TPTPParser.RULE_thf_plain_atomic);
      try {
        this.state = 676;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
          case 66:
          case 71:
            this.enterOuterAlt(localctx, 1);
            this.state = 674;
            this.constant();
            break;
          case 14:
          case 18:
            this.enterOuterAlt(localctx, 2);
            this.state = 675;
            this.thf_tuple();
            break;
          default:
            throw new Qn.error.NoViableAltException(this);
        }
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    thf_defined_atomic() {
      let localctx = new Thf_defined_atomicContext(this, this._ctx, this.state);
      this.enterRule(localctx, 64, _TPTPParser.RULE_thf_defined_atomic);
      try {
        this.state = 686;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
          case 68:
            this.enterOuterAlt(localctx, 1);
            this.state = 678;
            this.defined_constant();
            break;
          case 45:
          case 46:
          case 47:
          case 48:
          case 49:
          case 67:
          case 78:
          case 81:
          case 84:
            this.enterOuterAlt(localctx, 2);
            this.state = 679;
            this.thf_defined_term();
            break;
          case 12:
            this.enterOuterAlt(localctx, 3);
            this.state = 680;
            this.match(_TPTPParser.T__11);
            this.state = 681;
            this.thf_conn_term();
            this.state = 682;
            this.match(_TPTPParser.T__12);
            break;
          case 20:
            this.enterOuterAlt(localctx, 4);
            this.state = 684;
            this.nhf_long_connective();
            break;
          case 17:
            this.enterOuterAlt(localctx, 5);
            this.state = 685;
            this.thf_let();
            break;
          default:
            throw new Qn.error.NoViableAltException(this);
        }
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    thf_defined_term() {
      let localctx = new Thf_defined_termContext(this, this._ctx, this.state);
      this.enterRule(localctx, 66, _TPTPParser.RULE_thf_defined_term);
      try {
        this.state = 690;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
          case 67:
          case 78:
          case 81:
          case 84:
            this.enterOuterAlt(localctx, 1);
            this.state = 688;
            this.defined_term();
            break;
          case 45:
          case 46:
          case 47:
          case 48:
          case 49:
            this.enterOuterAlt(localctx, 2);
            this.state = 689;
            this.th1_defined_term();
            break;
          default:
            throw new Qn.error.NoViableAltException(this);
        }
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    thf_defined_infix() {
      let localctx = new Thf_defined_infixContext(this, this._ctx, this.state);
      this.enterRule(localctx, 68, _TPTPParser.RULE_thf_defined_infix);
      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 692;
        this.thf_unitary_term();
        this.state = 693;
        this.defined_infix_pred();
        this.state = 694;
        this.thf_unitary_term();
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    thf_system_atomic() {
      let localctx = new Thf_system_atomicContext(this, this._ctx, this.state);
      this.enterRule(localctx, 70, _TPTPParser.RULE_thf_system_atomic);
      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 696;
        this.system_constant();
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    thf_let() {
      let localctx = new Thf_letContext(this, this._ctx, this.state);
      this.enterRule(localctx, 72, _TPTPParser.RULE_thf_let);
      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 698;
        this.match(_TPTPParser.T__16);
        this.state = 699;
        this.thf_let_types();
        this.state = 700;
        this.match(_TPTPParser.T__1);
        this.state = 701;
        this.thf_let_defns();
        this.state = 702;
        this.match(_TPTPParser.T__1);
        this.state = 703;
        this.thf_logic_formula();
        this.state = 704;
        this.match(_TPTPParser.T__12);
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    thf_let_types() {
      let localctx = new Thf_let_typesContext(this, this._ctx, this.state);
      this.enterRule(localctx, 74, _TPTPParser.RULE_thf_let_types);
      try {
        this.state = 711;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
          case 12:
          case 66:
          case 69:
          case 71:
            this.enterOuterAlt(localctx, 1);
            this.state = 706;
            this.thf_atom_typing();
            break;
          case 14:
            this.enterOuterAlt(localctx, 2);
            this.state = 707;
            this.match(_TPTPParser.T__13);
            this.state = 708;
            this.thf_atom_typing_list();
            this.state = 709;
            this.match(_TPTPParser.T__14);
            break;
          default:
            throw new Qn.error.NoViableAltException(this);
        }
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    thf_atom_typing_list() {
      let localctx = new Thf_atom_typing_listContext(this, this._ctx, this.state);
      this.enterRule(localctx, 76, _TPTPParser.RULE_thf_atom_typing_list);
      try {
        this.state = 718;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input, 22, this._ctx);
        switch (la_) {
          case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 713;
            this.thf_atom_typing();
            break;
          case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 714;
            this.thf_atom_typing();
            this.state = 715;
            this.match(_TPTPParser.T__1);
            this.state = 716;
            this.thf_atom_typing_list();
            break;
        }
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    thf_let_defns() {
      let localctx = new Thf_let_defnsContext(this, this._ctx, this.state);
      this.enterRule(localctx, 78, _TPTPParser.RULE_thf_let_defns);
      try {
        this.state = 725;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input, 23, this._ctx);
        switch (la_) {
          case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 720;
            this.thf_let_defn();
            break;
          case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 721;
            this.match(_TPTPParser.T__13);
            this.state = 722;
            this.thf_let_defn_list();
            this.state = 723;
            this.match(_TPTPParser.T__14);
            break;
        }
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    thf_let_defn() {
      let localctx = new Thf_let_defnContext(this, this._ctx, this.state);
      this.enterRule(localctx, 80, _TPTPParser.RULE_thf_let_defn);
      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 727;
        this.thf_logic_formula();
        this.state = 728;
        this.assignment();
        this.state = 729;
        this.thf_logic_formula();
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    thf_let_defn_list() {
      let localctx = new Thf_let_defn_listContext(this, this._ctx, this.state);
      this.enterRule(localctx, 82, _TPTPParser.RULE_thf_let_defn_list);
      try {
        this.state = 736;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input, 24, this._ctx);
        switch (la_) {
          case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 731;
            this.thf_let_defn();
            break;
          case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 732;
            this.thf_let_defn();
            this.state = 733;
            this.match(_TPTPParser.T__1);
            this.state = 734;
            this.thf_let_defn_list();
            break;
        }
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    thf_unitary_term() {
      let localctx = new Thf_unitary_termContext(this, this._ctx, this.state);
      this.enterRule(localctx, 84, _TPTPParser.RULE_thf_unitary_term);
      try {
        this.state = 744;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input, 25, this._ctx);
        switch (la_) {
          case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 738;
            this.thf_atomic_formula();
            break;
          case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 739;
            this.variable();
            break;
          case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 740;
            this.match(_TPTPParser.T__11);
            this.state = 741;
            this.thf_logic_formula();
            this.state = 742;
            this.match(_TPTPParser.T__12);
            break;
        }
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    thf_conn_term() {
      let localctx = new Thf_conn_termContext(this, this._ctx, this.state);
      this.enterRule(localctx, 86, _TPTPParser.RULE_thf_conn_term);
      try {
        this.state = 751;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input, 26, this._ctx);
        switch (la_) {
          case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 746;
            this.nonassoc_connective();
            break;
          case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 747;
            this.assoc_connective();
            break;
          case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 748;
            this.infix_equality();
            break;
          case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 749;
            this.infix_inequality();
            break;
          case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 750;
            this.thf_unary_connective();
            break;
        }
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    thf_tuple() {
      let localctx = new Thf_tupleContext(this, this._ctx, this.state);
      this.enterRule(localctx, 88, _TPTPParser.RULE_thf_tuple);
      try {
        this.state = 758;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
          case 18:
            this.enterOuterAlt(localctx, 1);
            this.state = 753;
            this.match(_TPTPParser.T__17);
            break;
          case 14:
            this.enterOuterAlt(localctx, 2);
            this.state = 754;
            this.match(_TPTPParser.T__13);
            this.state = 755;
            this.thf_formula_list();
            this.state = 756;
            this.match(_TPTPParser.T__14);
            break;
          default:
            throw new Qn.error.NoViableAltException(this);
        }
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    thf_fof_function() {
      let localctx = new Thf_fof_functionContext(this, this._ctx, this.state);
      this.enterRule(localctx, 90, _TPTPParser.RULE_thf_fof_function);
      try {
        this.state = 775;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
          case 66:
          case 71:
            this.enterOuterAlt(localctx, 1);
            this.state = 760;
            this.functor();
            this.state = 761;
            this.match(_TPTPParser.T__11);
            this.state = 762;
            this.thf_arguments();
            this.state = 763;
            this.match(_TPTPParser.T__12);
            break;
          case 68:
            this.enterOuterAlt(localctx, 2);
            this.state = 765;
            this.defined_functor();
            this.state = 766;
            this.match(_TPTPParser.T__11);
            this.state = 767;
            this.thf_arguments();
            this.state = 768;
            this.match(_TPTPParser.T__12);
            break;
          case 69:
            this.enterOuterAlt(localctx, 3);
            this.state = 770;
            this.system_functor();
            this.state = 771;
            this.match(_TPTPParser.T__11);
            this.state = 772;
            this.thf_arguments();
            this.state = 773;
            this.match(_TPTPParser.T__12);
            break;
          default:
            throw new Qn.error.NoViableAltException(this);
        }
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    thf_arguments() {
      let localctx = new Thf_argumentsContext(this, this._ctx, this.state);
      this.enterRule(localctx, 92, _TPTPParser.RULE_thf_arguments);
      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 777;
        this.thf_formula_list();
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    thf_formula_list() {
      let localctx = new Thf_formula_listContext(this, this._ctx, this.state);
      this.enterRule(localctx, 94, _TPTPParser.RULE_thf_formula_list);
      var _la = 0;
      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 779;
        this.thf_logic_formula();
        this.state = 783;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === 2) {
          this.state = 780;
          this.comma_thf_logic_formula();
          this.state = 785;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    comma_thf_logic_formula() {
      let localctx = new Comma_thf_logic_formulaContext(this, this._ctx, this.state);
      this.enterRule(localctx, 96, _TPTPParser.RULE_comma_thf_logic_formula);
      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 786;
        this.match(_TPTPParser.T__1);
        this.state = 787;
        this.thf_logic_formula();
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    thf_atom_typing() {
      let localctx = new Thf_atom_typingContext(this, this._ctx, this.state);
      this.enterRule(localctx, 98, _TPTPParser.RULE_thf_atom_typing);
      try {
        this.state = 797;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
          case 66:
          case 69:
          case 71:
            this.enterOuterAlt(localctx, 1);
            this.state = 789;
            this.untyped_atom();
            this.state = 790;
            this.match(_TPTPParser.T__15);
            this.state = 791;
            this.thf_top_level_type();
            break;
          case 12:
            this.enterOuterAlt(localctx, 2);
            this.state = 793;
            this.match(_TPTPParser.T__11);
            this.state = 794;
            this.thf_atom_typing();
            this.state = 795;
            this.match(_TPTPParser.T__12);
            break;
          default:
            throw new Qn.error.NoViableAltException(this);
        }
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    thf_top_level_type() {
      let localctx = new Thf_top_level_typeContext(this, this._ctx, this.state);
      this.enterRule(localctx, 100, _TPTPParser.RULE_thf_top_level_type);
      try {
        this.state = 802;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input, 31, this._ctx);
        switch (la_) {
          case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 799;
            this.thf_unitary_type();
            break;
          case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 800;
            this.thf_mapping_type();
            break;
          case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 801;
            this.thf_apply_type();
            break;
        }
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    thf_unitary_type() {
      let localctx = new Thf_unitary_typeContext(this, this._ctx, this.state);
      this.enterRule(localctx, 102, _TPTPParser.RULE_thf_unitary_type);
      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 804;
        this.thf_unitary_formula();
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    thf_apply_type() {
      let localctx = new Thf_apply_typeContext(this, this._ctx, this.state);
      this.enterRule(localctx, 104, _TPTPParser.RULE_thf_apply_type);
      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 806;
        this.thf_apply_formula(0);
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    thf_binary_type() {
      let localctx = new Thf_binary_typeContext(this, this._ctx, this.state);
      this.enterRule(localctx, 106, _TPTPParser.RULE_thf_binary_type);
      try {
        this.state = 811;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input, 32, this._ctx);
        switch (la_) {
          case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 808;
            this.thf_mapping_type();
            break;
          case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 809;
            this.thf_xprod_type(0);
            break;
          case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 810;
            this.thf_union_type(0);
            break;
        }
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    thf_mapping_type() {
      let localctx = new Thf_mapping_typeContext(this, this._ctx, this.state);
      this.enterRule(localctx, 108, _TPTPParser.RULE_thf_mapping_type);
      try {
        this.state = 821;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input, 33, this._ctx);
        switch (la_) {
          case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 813;
            this.thf_unitary_type();
            this.state = 814;
            this.match(_TPTPParser.Arrow);
            this.state = 815;
            this.thf_unitary_type();
            break;
          case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 817;
            this.thf_unitary_type();
            this.state = 818;
            this.match(_TPTPParser.Arrow);
            this.state = 819;
            this.thf_mapping_type();
            break;
        }
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    thf_xprod_type(_p) {
      if (_p === void 0) {
        _p = 0;
      }
      const _parentctx = this._ctx;
      const _parentState = this.state;
      let localctx = new Thf_xprod_typeContext(this, this._ctx, _parentState);
      let _prevctx = localctx;
      const _startState = 110;
      this.enterRecursionRule(localctx, 110, _TPTPParser.RULE_thf_xprod_type, _p);
      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 824;
        this.thf_unitary_type();
        this.state = 825;
        this.match(_TPTPParser.Star);
        this.state = 826;
        this.thf_unitary_type();
        this._ctx.stop = this._input.LT(-1);
        this.state = 833;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input, 34, this._ctx);
        while (_alt != 2 && _alt != Qn.atn.ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners !== null) {
              this.triggerExitRuleEvent();
            }
            _prevctx = localctx;
            localctx = new Thf_xprod_typeContext(this, _parentctx, _parentState);
            this.pushNewRecursionContext(localctx, _startState, _TPTPParser.RULE_thf_xprod_type);
            this.state = 828;
            if (!this.precpred(this._ctx, 1)) {
              throw new Qn.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
            }
            this.state = 829;
            this.match(_TPTPParser.Star);
            this.state = 830;
            this.thf_unitary_type();
          }
          this.state = 835;
          this._errHandler.sync(this);
          _alt = this._interp.adaptivePredict(this._input, 34, this._ctx);
        }
      } catch (error) {
        if (error instanceof Qn.error.RecognitionException) {
          localctx.exception = error;
          this._errHandler.reportError(this, error);
          this._errHandler.recover(this, error);
        } else {
          throw error;
        }
      } finally {
        this.unrollRecursionContexts(_parentctx);
      }
      return localctx;
    }
    thf_union_type(_p) {
      if (_p === void 0) {
        _p = 0;
      }
      const _parentctx = this._ctx;
      const _parentState = this.state;
      let localctx = new Thf_union_typeContext(this, this._ctx, _parentState);
      let _prevctx = localctx;
      const _startState = 112;
      this.enterRecursionRule(localctx, 112, _TPTPParser.RULE_thf_union_type, _p);
      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 837;
        this.thf_unitary_type();
        this.state = 838;
        this.match(_TPTPParser.Plus);
        this.state = 839;
        this.thf_unitary_type();
        this._ctx.stop = this._input.LT(-1);
        this.state = 846;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input, 35, this._ctx);
        while (_alt != 2 && _alt != Qn.atn.ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners !== null) {
              this.triggerExitRuleEvent();
            }
            _prevctx = localctx;
            localctx = new Thf_union_typeContext(this, _parentctx, _parentState);
            this.pushNewRecursionContext(localctx, _startState, _TPTPParser.RULE_thf_union_type);
            this.state = 841;
            if (!this.precpred(this._ctx, 1)) {
              throw new Qn.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
            }
            this.state = 842;
            this.match(_TPTPParser.Plus);
            this.state = 843;
            this.thf_unitary_type();
          }
          this.state = 848;
          this._errHandler.sync(this);
          _alt = this._interp.adaptivePredict(this._input, 35, this._ctx);
        }
      } catch (error) {
        if (error instanceof Qn.error.RecognitionException) {
          localctx.exception = error;
          this._errHandler.reportError(this, error);
          this._errHandler.recover(this, error);
        } else {
          throw error;
        }
      } finally {
        this.unrollRecursionContexts(_parentctx);
      }
      return localctx;
    }
    thf_subtype() {
      let localctx = new Thf_subtypeContext(this, this._ctx, this.state);
      this.enterRule(localctx, 114, _TPTPParser.RULE_thf_subtype);
      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 849;
        this.untyped_atom();
        this.state = 850;
        this.subtype_sign();
        this.state = 851;
        this.atom();
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    thf_definition() {
      let localctx = new Thf_definitionContext(this, this._ctx, this.state);
      this.enterRule(localctx, 116, _TPTPParser.RULE_thf_definition);
      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 853;
        this.thf_atomic_formula();
        this.state = 854;
        this.identical();
        this.state = 855;
        this.thf_logic_formula();
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    thf_sequent() {
      let localctx = new Thf_sequentContext(this, this._ctx, this.state);
      this.enterRule(localctx, 118, _TPTPParser.RULE_thf_sequent);
      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 857;
        this.thf_tuple();
        this.state = 858;
        this.gentzen_arrow();
        this.state = 859;
        this.thf_tuple();
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    tff_formula() {
      let localctx = new Tff_formulaContext(this, this._ctx, this.state);
      this.enterRule(localctx, 120, _TPTPParser.RULE_tff_formula);
      try {
        this.state = 864;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input, 36, this._ctx);
        switch (la_) {
          case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 861;
            this.tff_logic_formula();
            break;
          case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 862;
            this.tff_atom_typing();
            break;
          case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 863;
            this.tff_subtype();
            break;
        }
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    tff_logic_formula() {
      let localctx = new Tff_logic_formulaContext(this, this._ctx, this.state);
      this.enterRule(localctx, 122, _TPTPParser.RULE_tff_logic_formula);
      try {
        this.state = 872;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input, 37, this._ctx);
        switch (la_) {
          case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 866;
            this.tff_unitary_formula();
            break;
          case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 867;
            this.tff_unary_formula();
            break;
          case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 868;
            this.tff_binary_formula();
            break;
          case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 869;
            this.tff_defined_infix();
            break;
          case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 870;
            this.txf_definition();
            break;
          case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 871;
            this.txf_sequent();
            break;
        }
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    tff_binary_formula() {
      let localctx = new Tff_binary_formulaContext(this, this._ctx, this.state);
      this.enterRule(localctx, 124, _TPTPParser.RULE_tff_binary_formula);
      try {
        this.state = 876;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input, 38, this._ctx);
        switch (la_) {
          case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 874;
            this.tff_binary_nonassoc();
            break;
          case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 875;
            this.tff_binary_assoc();
            break;
        }
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    tff_binary_nonassoc() {
      let localctx = new Tff_binary_nonassocContext(this, this._ctx, this.state);
      this.enterRule(localctx, 126, _TPTPParser.RULE_tff_binary_nonassoc);
      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 878;
        this.tff_unit_formula();
        this.state = 879;
        this.nonassoc_connective();
        this.state = 880;
        this.tff_unit_formula();
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    tff_binary_assoc() {
      let localctx = new Tff_binary_assocContext(this, this._ctx, this.state);
      this.enterRule(localctx, 128, _TPTPParser.RULE_tff_binary_assoc);
      try {
        this.state = 884;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input, 39, this._ctx);
        switch (la_) {
          case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 882;
            this.tff_or_formula(0);
            break;
          case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 883;
            this.tff_and_formula(0);
            break;
        }
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    tff_or_formula(_p) {
      if (_p === void 0) {
        _p = 0;
      }
      const _parentctx = this._ctx;
      const _parentState = this.state;
      let localctx = new Tff_or_formulaContext(this, this._ctx, _parentState);
      let _prevctx = localctx;
      const _startState = 130;
      this.enterRecursionRule(localctx, 130, _TPTPParser.RULE_tff_or_formula, _p);
      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 887;
        this.tff_unit_formula();
        this.state = 888;
        this.match(_TPTPParser.Vline);
        this.state = 889;
        this.tff_unit_formula();
        this._ctx.stop = this._input.LT(-1);
        this.state = 896;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input, 40, this._ctx);
        while (_alt != 2 && _alt != Qn.atn.ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners !== null) {
              this.triggerExitRuleEvent();
            }
            _prevctx = localctx;
            localctx = new Tff_or_formulaContext(this, _parentctx, _parentState);
            this.pushNewRecursionContext(localctx, _startState, _TPTPParser.RULE_tff_or_formula);
            this.state = 891;
            if (!this.precpred(this._ctx, 1)) {
              throw new Qn.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
            }
            this.state = 892;
            this.match(_TPTPParser.Vline);
            this.state = 893;
            this.tff_unit_formula();
          }
          this.state = 898;
          this._errHandler.sync(this);
          _alt = this._interp.adaptivePredict(this._input, 40, this._ctx);
        }
      } catch (error) {
        if (error instanceof Qn.error.RecognitionException) {
          localctx.exception = error;
          this._errHandler.reportError(this, error);
          this._errHandler.recover(this, error);
        } else {
          throw error;
        }
      } finally {
        this.unrollRecursionContexts(_parentctx);
      }
      return localctx;
    }
    tff_and_formula(_p) {
      if (_p === void 0) {
        _p = 0;
      }
      const _parentctx = this._ctx;
      const _parentState = this.state;
      let localctx = new Tff_and_formulaContext(this, this._ctx, _parentState);
      let _prevctx = localctx;
      const _startState = 132;
      this.enterRecursionRule(localctx, 132, _TPTPParser.RULE_tff_and_formula, _p);
      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 900;
        this.tff_unit_formula();
        this.state = 901;
        this.match(_TPTPParser.T__9);
        this.state = 902;
        this.tff_unit_formula();
        this._ctx.stop = this._input.LT(-1);
        this.state = 909;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input, 41, this._ctx);
        while (_alt != 2 && _alt != Qn.atn.ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners !== null) {
              this.triggerExitRuleEvent();
            }
            _prevctx = localctx;
            localctx = new Tff_and_formulaContext(this, _parentctx, _parentState);
            this.pushNewRecursionContext(localctx, _startState, _TPTPParser.RULE_tff_and_formula);
            this.state = 904;
            if (!this.precpred(this._ctx, 1)) {
              throw new Qn.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
            }
            this.state = 905;
            this.match(_TPTPParser.T__9);
            this.state = 906;
            this.tff_unit_formula();
          }
          this.state = 911;
          this._errHandler.sync(this);
          _alt = this._interp.adaptivePredict(this._input, 41, this._ctx);
        }
      } catch (error) {
        if (error instanceof Qn.error.RecognitionException) {
          localctx.exception = error;
          this._errHandler.reportError(this, error);
          this._errHandler.recover(this, error);
        } else {
          throw error;
        }
      } finally {
        this.unrollRecursionContexts(_parentctx);
      }
      return localctx;
    }
    tff_unit_formula() {
      let localctx = new Tff_unit_formulaContext(this, this._ctx, this.state);
      this.enterRule(localctx, 134, _TPTPParser.RULE_tff_unit_formula);
      try {
        this.state = 915;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input, 42, this._ctx);
        switch (la_) {
          case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 912;
            this.tff_unitary_formula();
            break;
          case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 913;
            this.tff_unary_formula();
            break;
          case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 914;
            this.tff_defined_infix();
            break;
        }
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    tff_preunit_formula() {
      let localctx = new Tff_preunit_formulaContext(this, this._ctx, this.state);
      this.enterRule(localctx, 136, _TPTPParser.RULE_tff_preunit_formula);
      try {
        this.state = 919;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
          case 12:
          case 17:
          case 20:
          case 27:
          case 34:
          case 66:
          case 68:
          case 69:
          case 70:
          case 71:
          case 77:
            this.enterOuterAlt(localctx, 1);
            this.state = 917;
            this.tff_unitary_formula();
            break;
          case 23:
          case 25:
          case 26:
          case 28:
          case 76:
            this.enterOuterAlt(localctx, 2);
            this.state = 918;
            this.tff_prefix_unary();
            break;
          default:
            throw new Qn.error.NoViableAltException(this);
        }
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    tff_unitary_formula() {
      let localctx = new Tff_unitary_formulaContext(this, this._ctx, this.state);
      this.enterRule(localctx, 138, _TPTPParser.RULE_tff_unitary_formula);
      try {
        this.state = 928;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
          case 27:
          case 34:
          case 77:
            this.enterOuterAlt(localctx, 1);
            this.state = 921;
            this.tff_quantified_formula();
            break;
          case 17:
          case 20:
          case 66:
          case 68:
          case 69:
          case 71:
            this.enterOuterAlt(localctx, 2);
            this.state = 922;
            this.tff_atomic_formula();
            break;
          case 70:
            this.enterOuterAlt(localctx, 3);
            this.state = 923;
            this.txf_unitary_formula();
            break;
          case 12:
            this.enterOuterAlt(localctx, 4);
            this.state = 924;
            this.match(_TPTPParser.T__11);
            this.state = 925;
            this.tff_logic_formula();
            this.state = 926;
            this.match(_TPTPParser.T__12);
            break;
          default:
            throw new Qn.error.NoViableAltException(this);
        }
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    txf_unitary_formula() {
      let localctx = new Txf_unitary_formulaContext(this, this._ctx, this.state);
      this.enterRule(localctx, 140, _TPTPParser.RULE_txf_unitary_formula);
      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 930;
        this.variable();
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    tff_quantified_formula() {
      let localctx = new Tff_quantified_formulaContext(this, this._ctx, this.state);
      this.enterRule(localctx, 142, _TPTPParser.RULE_tff_quantified_formula);
      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 932;
        this.tff_quantifier();
        this.state = 933;
        this.match(_TPTPParser.T__13);
        this.state = 934;
        this.tff_variable_list();
        this.state = 935;
        this.match(_TPTPParser.T__14);
        this.state = 936;
        this.match(_TPTPParser.T__15);
        this.state = 937;
        this.tff_unit_formula();
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    tff_variable_list() {
      let localctx = new Tff_variable_listContext(this, this._ctx, this.state);
      this.enterRule(localctx, 144, _TPTPParser.RULE_tff_variable_list);
      try {
        this.state = 944;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input, 45, this._ctx);
        switch (la_) {
          case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 939;
            this.tff_variable();
            break;
          case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 940;
            this.tff_variable();
            this.state = 941;
            this.match(_TPTPParser.T__1);
            this.state = 942;
            this.tff_variable_list();
            break;
        }
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    tff_variable() {
      let localctx = new Tff_variableContext(this, this._ctx, this.state);
      this.enterRule(localctx, 146, _TPTPParser.RULE_tff_variable);
      try {
        this.state = 948;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input, 46, this._ctx);
        switch (la_) {
          case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 946;
            this.tff_typed_variable();
            break;
          case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 947;
            this.variable();
            break;
        }
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    tff_typed_variable() {
      let localctx = new Tff_typed_variableContext(this, this._ctx, this.state);
      this.enterRule(localctx, 148, _TPTPParser.RULE_tff_typed_variable);
      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 950;
        this.variable();
        this.state = 951;
        this.match(_TPTPParser.T__15);
        this.state = 952;
        this.tff_atomic_type();
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    tff_unary_formula() {
      let localctx = new Tff_unary_formulaContext(this, this._ctx, this.state);
      this.enterRule(localctx, 150, _TPTPParser.RULE_tff_unary_formula);
      try {
        this.state = 956;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
          case 23:
          case 25:
          case 26:
          case 28:
          case 76:
            this.enterOuterAlt(localctx, 1);
            this.state = 954;
            this.tff_prefix_unary();
            break;
          case 12:
          case 14:
          case 17:
          case 18:
          case 20:
          case 66:
          case 67:
          case 68:
          case 69:
          case 70:
          case 71:
          case 78:
          case 81:
          case 84:
            this.enterOuterAlt(localctx, 2);
            this.state = 955;
            this.tff_infix_unary();
            break;
          default:
            throw new Qn.error.NoViableAltException(this);
        }
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    tff_prefix_unary() {
      let localctx = new Tff_prefix_unaryContext(this, this._ctx, this.state);
      this.enterRule(localctx, 152, _TPTPParser.RULE_tff_prefix_unary);
      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 958;
        this.tff_unary_connective();
        this.state = 959;
        this.tff_preunit_formula();
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    tff_infix_unary() {
      let localctx = new Tff_infix_unaryContext(this, this._ctx, this.state);
      this.enterRule(localctx, 154, _TPTPParser.RULE_tff_infix_unary);
      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 961;
        this.tff_unitary_term();
        this.state = 962;
        this.infix_inequality();
        this.state = 963;
        this.tff_unitary_term();
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    tff_atomic_formula() {
      let localctx = new Tff_atomic_formulaContext(this, this._ctx, this.state);
      this.enterRule(localctx, 156, _TPTPParser.RULE_tff_atomic_formula);
      try {
        this.state = 968;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
          case 66:
          case 71:
            this.enterOuterAlt(localctx, 1);
            this.state = 965;
            this.tff_plain_atomic();
            break;
          case 17:
          case 20:
          case 68:
            this.enterOuterAlt(localctx, 2);
            this.state = 966;
            this.tff_defined_atomic();
            break;
          case 69:
            this.enterOuterAlt(localctx, 3);
            this.state = 967;
            this.tff_system_atomic();
            break;
          default:
            throw new Qn.error.NoViableAltException(this);
        }
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    tff_plain_atomic() {
      let localctx = new Tff_plain_atomicContext(this, this._ctx, this.state);
      this.enterRule(localctx, 158, _TPTPParser.RULE_tff_plain_atomic);
      try {
        this.state = 976;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input, 49, this._ctx);
        switch (la_) {
          case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 970;
            this.constant();
            break;
          case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 971;
            this.functor();
            this.state = 972;
            this.match(_TPTPParser.T__11);
            this.state = 973;
            this.tff_arguments();
            this.state = 974;
            this.match(_TPTPParser.T__12);
            break;
        }
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    tff_defined_atomic() {
      let localctx = new Tff_defined_atomicContext(this, this._ctx, this.state);
      this.enterRule(localctx, 160, _TPTPParser.RULE_tff_defined_atomic);
      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 978;
        this.tff_defined_plain();
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    tff_defined_plain() {
      let localctx = new Tff_defined_plainContext(this, this._ctx, this.state);
      this.enterRule(localctx, 162, _TPTPParser.RULE_tff_defined_plain);
      try {
        this.state = 988;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input, 50, this._ctx);
        switch (la_) {
          case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 980;
            this.defined_constant();
            break;
          case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 981;
            this.defined_functor();
            this.state = 982;
            this.match(_TPTPParser.T__11);
            this.state = 983;
            this.tff_arguments();
            this.state = 984;
            this.match(_TPTPParser.T__12);
            break;
          case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 986;
            this.nxf_atom();
            break;
          case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 987;
            this.txf_let();
            break;
        }
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    tff_defined_infix() {
      let localctx = new Tff_defined_infixContext(this, this._ctx, this.state);
      this.enterRule(localctx, 164, _TPTPParser.RULE_tff_defined_infix);
      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 990;
        this.tff_unitary_term();
        this.state = 991;
        this.defined_infix_pred();
        this.state = 992;
        this.tff_unitary_term();
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    tff_system_atomic() {
      let localctx = new Tff_system_atomicContext(this, this._ctx, this.state);
      this.enterRule(localctx, 166, _TPTPParser.RULE_tff_system_atomic);
      try {
        this.state = 1e3;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input, 51, this._ctx);
        switch (la_) {
          case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 994;
            this.system_constant();
            break;
          case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 995;
            this.system_functor();
            this.state = 996;
            this.match(_TPTPParser.T__11);
            this.state = 997;
            this.tff_arguments();
            this.state = 998;
            this.match(_TPTPParser.T__12);
            break;
        }
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    txf_let() {
      let localctx = new Txf_letContext(this, this._ctx, this.state);
      this.enterRule(localctx, 168, _TPTPParser.RULE_txf_let);
      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 1002;
        this.match(_TPTPParser.T__16);
        this.state = 1003;
        this.txf_let_types();
        this.state = 1004;
        this.match(_TPTPParser.T__1);
        this.state = 1005;
        this.txf_let_defns();
        this.state = 1006;
        this.match(_TPTPParser.T__1);
        this.state = 1007;
        this.tff_term();
        this.state = 1008;
        this.match(_TPTPParser.T__12);
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    txf_let_types() {
      let localctx = new Txf_let_typesContext(this, this._ctx, this.state);
      this.enterRule(localctx, 170, _TPTPParser.RULE_txf_let_types);
      try {
        this.state = 1015;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
          case 12:
          case 66:
          case 69:
          case 71:
            this.enterOuterAlt(localctx, 1);
            this.state = 1010;
            this.tff_atom_typing();
            break;
          case 14:
            this.enterOuterAlt(localctx, 2);
            this.state = 1011;
            this.match(_TPTPParser.T__13);
            this.state = 1012;
            this.tff_atom_typing_list();
            this.state = 1013;
            this.match(_TPTPParser.T__14);
            break;
          default:
            throw new Qn.error.NoViableAltException(this);
        }
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    tff_atom_typing_list() {
      let localctx = new Tff_atom_typing_listContext(this, this._ctx, this.state);
      this.enterRule(localctx, 172, _TPTPParser.RULE_tff_atom_typing_list);
      try {
        this.state = 1022;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input, 53, this._ctx);
        switch (la_) {
          case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 1017;
            this.tff_atom_typing();
            break;
          case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 1018;
            this.tff_atom_typing();
            this.state = 1019;
            this.match(_TPTPParser.T__1);
            this.state = 1020;
            this.tff_atom_typing_list();
            break;
        }
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    txf_let_defns() {
      let localctx = new Txf_let_defnsContext(this, this._ctx, this.state);
      this.enterRule(localctx, 174, _TPTPParser.RULE_txf_let_defns);
      try {
        this.state = 1029;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input, 54, this._ctx);
        switch (la_) {
          case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 1024;
            this.txf_let_defn();
            break;
          case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 1025;
            this.match(_TPTPParser.T__13);
            this.state = 1026;
            this.txf_let_defn_list();
            this.state = 1027;
            this.match(_TPTPParser.T__14);
            break;
        }
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    txf_let_defn() {
      let localctx = new Txf_let_defnContext(this, this._ctx, this.state);
      this.enterRule(localctx, 176, _TPTPParser.RULE_txf_let_defn);
      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 1031;
        this.txf_let_LHS();
        this.state = 1032;
        this.assignment();
        this.state = 1033;
        this.tff_term();
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    txf_let_LHS() {
      let localctx = new Txf_let_LHSContext(this, this._ctx, this.state);
      this.enterRule(localctx, 178, _TPTPParser.RULE_txf_let_LHS);
      try {
        this.state = 1037;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
          case 66:
          case 71:
            this.enterOuterAlt(localctx, 1);
            this.state = 1035;
            this.tff_plain_atomic();
            break;
          case 14:
          case 18:
            this.enterOuterAlt(localctx, 2);
            this.state = 1036;
            this.txf_tuple();
            break;
          default:
            throw new Qn.error.NoViableAltException(this);
        }
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    txf_let_defn_list() {
      let localctx = new Txf_let_defn_listContext(this, this._ctx, this.state);
      this.enterRule(localctx, 180, _TPTPParser.RULE_txf_let_defn_list);
      try {
        this.state = 1044;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input, 56, this._ctx);
        switch (la_) {
          case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 1039;
            this.txf_let_defn();
            break;
          case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 1040;
            this.txf_let_defn();
            this.state = 1041;
            this.match(_TPTPParser.T__1);
            this.state = 1042;
            this.txf_let_defn_list();
            break;
        }
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    nxf_atom() {
      let localctx = new Nxf_atomContext(this, this._ctx, this.state);
      this.enterRule(localctx, 182, _TPTPParser.RULE_nxf_atom);
      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 1046;
        this.nxf_long_connective();
        this.state = 1047;
        this.match(_TPTPParser.T__10);
        this.state = 1048;
        this.match(_TPTPParser.T__11);
        this.state = 1049;
        this.tff_arguments();
        this.state = 1050;
        this.match(_TPTPParser.T__12);
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    tff_term() {
      let localctx = new Tff_termContext(this, this._ctx, this.state);
      this.enterRule(localctx, 184, _TPTPParser.RULE_tff_term);
      try {
        this.state = 1055;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input, 57, this._ctx);
        switch (la_) {
          case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 1052;
            this.tff_logic_formula();
            break;
          case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 1053;
            this.defined_term();
            break;
          case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 1054;
            this.txf_tuple();
            break;
        }
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    tff_unitary_term() {
      let localctx = new Tff_unitary_termContext(this, this._ctx, this.state);
      this.enterRule(localctx, 186, _TPTPParser.RULE_tff_unitary_term);
      try {
        this.state = 1065;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
          case 17:
          case 20:
          case 66:
          case 68:
          case 69:
          case 71:
            this.enterOuterAlt(localctx, 1);
            this.state = 1057;
            this.tff_atomic_formula();
            break;
          case 67:
          case 78:
          case 81:
          case 84:
            this.enterOuterAlt(localctx, 2);
            this.state = 1058;
            this.defined_term();
            break;
          case 14:
          case 18:
            this.enterOuterAlt(localctx, 3);
            this.state = 1059;
            this.txf_tuple();
            break;
          case 70:
            this.enterOuterAlt(localctx, 4);
            this.state = 1060;
            this.variable();
            break;
          case 12:
            this.enterOuterAlt(localctx, 5);
            this.state = 1061;
            this.match(_TPTPParser.T__11);
            this.state = 1062;
            this.tff_logic_formula();
            this.state = 1063;
            this.match(_TPTPParser.T__12);
            break;
          default:
            throw new Qn.error.NoViableAltException(this);
        }
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    txf_tuple() {
      let localctx = new Txf_tupleContext(this, this._ctx, this.state);
      this.enterRule(localctx, 188, _TPTPParser.RULE_txf_tuple);
      try {
        this.state = 1072;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
          case 18:
            this.enterOuterAlt(localctx, 1);
            this.state = 1067;
            this.match(_TPTPParser.T__17);
            break;
          case 14:
            this.enterOuterAlt(localctx, 2);
            this.state = 1068;
            this.match(_TPTPParser.T__13);
            this.state = 1069;
            this.tff_arguments();
            this.state = 1070;
            this.match(_TPTPParser.T__14);
            break;
          default:
            throw new Qn.error.NoViableAltException(this);
        }
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    tff_arguments() {
      let localctx = new Tff_argumentsContext(this, this._ctx, this.state);
      this.enterRule(localctx, 190, _TPTPParser.RULE_tff_arguments);
      var _la = 0;
      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 1074;
        this.tff_term();
        this.state = 1078;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === 2) {
          this.state = 1075;
          this.comma_tff_term();
          this.state = 1080;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    comma_tff_term() {
      let localctx = new Comma_tff_termContext(this, this._ctx, this.state);
      this.enterRule(localctx, 192, _TPTPParser.RULE_comma_tff_term);
      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 1081;
        this.match(_TPTPParser.T__1);
        this.state = 1082;
        this.tff_term();
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    tff_atom_typing() {
      let localctx = new Tff_atom_typingContext(this, this._ctx, this.state);
      this.enterRule(localctx, 194, _TPTPParser.RULE_tff_atom_typing);
      try {
        this.state = 1092;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
          case 66:
          case 69:
          case 71:
            this.enterOuterAlt(localctx, 1);
            this.state = 1084;
            this.untyped_atom();
            this.state = 1085;
            this.match(_TPTPParser.T__15);
            this.state = 1086;
            this.tff_top_level_type();
            break;
          case 12:
            this.enterOuterAlt(localctx, 2);
            this.state = 1088;
            this.match(_TPTPParser.T__11);
            this.state = 1089;
            this.tff_atom_typing();
            this.state = 1090;
            this.match(_TPTPParser.T__12);
            break;
          default:
            throw new Qn.error.NoViableAltException(this);
        }
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    tff_top_level_type() {
      let localctx = new Tff_top_level_typeContext(this, this._ctx, this.state);
      this.enterRule(localctx, 196, _TPTPParser.RULE_tff_top_level_type);
      try {
        this.state = 1096;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input, 62, this._ctx);
        switch (la_) {
          case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 1094;
            this.tff_atomic_type();
            break;
          case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 1095;
            this.tff_non_atomic_type();
            break;
        }
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    tff_non_atomic_type() {
      let localctx = new Tff_non_atomic_typeContext(this, this._ctx, this.state);
      this.enterRule(localctx, 198, _TPTPParser.RULE_tff_non_atomic_type);
      try {
        this.state = 1104;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input, 63, this._ctx);
        switch (la_) {
          case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 1098;
            this.tff_mapping_type();
            break;
          case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 1099;
            this.tf1_quantified_type();
            break;
          case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 1100;
            this.match(_TPTPParser.T__11);
            this.state = 1101;
            this.tff_non_atomic_type();
            this.state = 1102;
            this.match(_TPTPParser.T__12);
            break;
        }
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    tf1_quantified_type() {
      let localctx = new Tf1_quantified_typeContext(this, this._ctx, this.state);
      this.enterRule(localctx, 200, _TPTPParser.RULE_tf1_quantified_type);
      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 1106;
        this.match(_TPTPParser.T__18);
        this.state = 1107;
        this.match(_TPTPParser.T__13);
        this.state = 1108;
        this.tff_variable_list();
        this.state = 1109;
        this.match(_TPTPParser.T__14);
        this.state = 1110;
        this.match(_TPTPParser.T__15);
        this.state = 1111;
        this.tff_monotype();
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    tff_monotype() {
      let localctx = new Tff_monotypeContext(this, this._ctx, this.state);
      this.enterRule(localctx, 202, _TPTPParser.RULE_tff_monotype);
      try {
        this.state = 1119;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input, 64, this._ctx);
        switch (la_) {
          case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 1113;
            this.tff_atomic_type();
            break;
          case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 1114;
            this.match(_TPTPParser.T__11);
            this.state = 1115;
            this.tff_mapping_type();
            this.state = 1116;
            this.match(_TPTPParser.T__12);
            break;
          case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 1118;
            this.tf1_quantified_type();
            break;
        }
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    tff_unitary_type() {
      let localctx = new Tff_unitary_typeContext(this, this._ctx, this.state);
      this.enterRule(localctx, 204, _TPTPParser.RULE_tff_unitary_type);
      try {
        this.state = 1126;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input, 65, this._ctx);
        switch (la_) {
          case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 1121;
            this.tff_atomic_type();
            break;
          case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 1122;
            this.match(_TPTPParser.T__11);
            this.state = 1123;
            this.tff_xprod_type(0);
            this.state = 1124;
            this.match(_TPTPParser.T__12);
            break;
        }
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    tff_atomic_type() {
      let localctx = new Tff_atomic_typeContext(this, this._ctx, this.state);
      this.enterRule(localctx, 206, _TPTPParser.RULE_tff_atomic_type);
      try {
        this.state = 1141;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input, 66, this._ctx);
        switch (la_) {
          case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 1128;
            this.type_constant();
            break;
          case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 1129;
            this.defined_type();
            break;
          case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 1130;
            this.variable();
            break;
          case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 1131;
            this.type_functor();
            this.state = 1132;
            this.match(_TPTPParser.T__11);
            this.state = 1133;
            this.tff_type_arguments();
            this.state = 1134;
            this.match(_TPTPParser.T__12);
            break;
          case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 1136;
            this.match(_TPTPParser.T__11);
            this.state = 1137;
            this.tff_atomic_type();
            this.state = 1138;
            this.match(_TPTPParser.T__12);
            break;
          case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 1140;
            this.txf_tuple_type();
            break;
        }
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    tff_type_arguments() {
      let localctx = new Tff_type_argumentsContext(this, this._ctx, this.state);
      this.enterRule(localctx, 208, _TPTPParser.RULE_tff_type_arguments);
      try {
        this.state = 1148;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input, 67, this._ctx);
        switch (la_) {
          case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 1143;
            this.tff_atomic_type();
            break;
          case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 1144;
            this.tff_atomic_type();
            this.state = 1145;
            this.match(_TPTPParser.T__1);
            this.state = 1146;
            this.tff_type_arguments();
            break;
        }
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    tff_mapping_type() {
      let localctx = new Tff_mapping_typeContext(this, this._ctx, this.state);
      this.enterRule(localctx, 210, _TPTPParser.RULE_tff_mapping_type);
      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 1150;
        this.tff_unitary_type();
        this.state = 1151;
        this.match(_TPTPParser.Arrow);
        this.state = 1152;
        this.tff_atomic_type();
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    tff_xprod_type(_p) {
      if (_p === void 0) {
        _p = 0;
      }
      const _parentctx = this._ctx;
      const _parentState = this.state;
      let localctx = new Tff_xprod_typeContext(this, this._ctx, _parentState);
      let _prevctx = localctx;
      const _startState = 212;
      this.enterRecursionRule(localctx, 212, _TPTPParser.RULE_tff_xprod_type, _p);
      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 1155;
        this.tff_unitary_type();
        this.state = 1156;
        this.match(_TPTPParser.Star);
        this.state = 1157;
        this.tff_atomic_type();
        this._ctx.stop = this._input.LT(-1);
        this.state = 1164;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input, 68, this._ctx);
        while (_alt != 2 && _alt != Qn.atn.ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners !== null) {
              this.triggerExitRuleEvent();
            }
            _prevctx = localctx;
            localctx = new Tff_xprod_typeContext(this, _parentctx, _parentState);
            this.pushNewRecursionContext(localctx, _startState, _TPTPParser.RULE_tff_xprod_type);
            this.state = 1159;
            if (!this.precpred(this._ctx, 1)) {
              throw new Qn.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
            }
            this.state = 1160;
            this.match(_TPTPParser.Star);
            this.state = 1161;
            this.tff_atomic_type();
          }
          this.state = 1166;
          this._errHandler.sync(this);
          _alt = this._interp.adaptivePredict(this._input, 68, this._ctx);
        }
      } catch (error) {
        if (error instanceof Qn.error.RecognitionException) {
          localctx.exception = error;
          this._errHandler.reportError(this, error);
          this._errHandler.recover(this, error);
        } else {
          throw error;
        }
      } finally {
        this.unrollRecursionContexts(_parentctx);
      }
      return localctx;
    }
    txf_tuple_type() {
      let localctx = new Txf_tuple_typeContext(this, this._ctx, this.state);
      this.enterRule(localctx, 214, _TPTPParser.RULE_txf_tuple_type);
      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 1167;
        this.match(_TPTPParser.T__13);
        this.state = 1168;
        this.tff_type_list();
        this.state = 1169;
        this.match(_TPTPParser.T__14);
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    tff_type_list() {
      let localctx = new Tff_type_listContext(this, this._ctx, this.state);
      this.enterRule(localctx, 216, _TPTPParser.RULE_tff_type_list);
      try {
        this.state = 1176;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input, 69, this._ctx);
        switch (la_) {
          case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 1171;
            this.tff_top_level_type();
            break;
          case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 1172;
            this.tff_top_level_type();
            this.state = 1173;
            this.match(_TPTPParser.T__1);
            this.state = 1174;
            this.tff_type_list();
            break;
        }
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    tff_subtype() {
      let localctx = new Tff_subtypeContext(this, this._ctx, this.state);
      this.enterRule(localctx, 218, _TPTPParser.RULE_tff_subtype);
      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 1178;
        this.untyped_atom();
        this.state = 1179;
        this.subtype_sign();
        this.state = 1180;
        this.atom();
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    txf_definition() {
      let localctx = new Txf_definitionContext(this, this._ctx, this.state);
      this.enterRule(localctx, 220, _TPTPParser.RULE_txf_definition);
      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 1182;
        this.tff_atomic_formula();
        this.state = 1183;
        this.identical();
        this.state = 1184;
        this.tff_term();
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    txf_sequent() {
      let localctx = new Txf_sequentContext(this, this._ctx, this.state);
      this.enterRule(localctx, 222, _TPTPParser.RULE_txf_sequent);
      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 1186;
        this.txf_tuple();
        this.state = 1187;
        this.gentzen_arrow();
        this.state = 1188;
        this.txf_tuple();
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    nhf_long_connective() {
      let localctx = new Nhf_long_connectiveContext(this, this._ctx, this.state);
      this.enterRule(localctx, 224, _TPTPParser.RULE_nhf_long_connective);
      try {
        this.state = 1200;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input, 70, this._ctx);
        switch (la_) {
          case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 1190;
            this.match(_TPTPParser.T__19);
            this.state = 1191;
            this.ntf_connective_name();
            this.state = 1192;
            this.match(_TPTPParser.T__20);
            break;
          case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 1194;
            this.match(_TPTPParser.T__19);
            this.state = 1195;
            this.ntf_connective_name();
            this.state = 1196;
            this.match(_TPTPParser.T__11);
            this.state = 1197;
            this.nhf_parameter_list();
            this.state = 1198;
            this.match(_TPTPParser.T__21);
            break;
        }
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    nhf_parameter_list() {
      let localctx = new Nhf_parameter_listContext(this, this._ctx, this.state);
      this.enterRule(localctx, 226, _TPTPParser.RULE_nhf_parameter_list);
      try {
        this.state = 1207;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input, 71, this._ctx);
        switch (la_) {
          case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 1202;
            this.nhf_parameter();
            break;
          case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 1203;
            this.nhf_parameter();
            this.state = 1204;
            this.match(_TPTPParser.T__1);
            this.state = 1205;
            this.nhf_parameter_list();
            break;
        }
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    nhf_parameter() {
      let localctx = new Nhf_parameterContext(this, this._ctx, this.state);
      this.enterRule(localctx, 228, _TPTPParser.RULE_nhf_parameter);
      try {
        this.state = 1211;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
          case 77:
            this.enterOuterAlt(localctx, 1);
            this.state = 1209;
            this.ntf_index();
            break;
          case 12:
          case 14:
          case 17:
          case 18:
          case 20:
          case 45:
          case 46:
          case 47:
          case 48:
          case 49:
          case 66:
          case 67:
          case 68:
          case 69:
          case 71:
          case 78:
          case 81:
          case 84:
            this.enterOuterAlt(localctx, 2);
            this.state = 1210;
            this.nhf_key_pair();
            break;
          default:
            throw new Qn.error.NoViableAltException(this);
        }
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    nhf_key_pair() {
      let localctx = new Nhf_key_pairContext(this, this._ctx, this.state);
      this.enterRule(localctx, 230, _TPTPParser.RULE_nhf_key_pair);
      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 1213;
        this.thf_definition();
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    nxf_long_connective() {
      let localctx = new Nxf_long_connectiveContext(this, this._ctx, this.state);
      this.enterRule(localctx, 232, _TPTPParser.RULE_nxf_long_connective);
      try {
        this.state = 1225;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input, 73, this._ctx);
        switch (la_) {
          case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 1215;
            this.match(_TPTPParser.T__19);
            this.state = 1216;
            this.ntf_connective_name();
            this.state = 1217;
            this.match(_TPTPParser.T__20);
            break;
          case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 1219;
            this.match(_TPTPParser.T__19);
            this.state = 1220;
            this.ntf_connective_name();
            this.state = 1221;
            this.match(_TPTPParser.T__11);
            this.state = 1222;
            this.nxf_parameter_list();
            this.state = 1223;
            this.match(_TPTPParser.T__21);
            break;
        }
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    nxf_parameter_list() {
      let localctx = new Nxf_parameter_listContext(this, this._ctx, this.state);
      this.enterRule(localctx, 234, _TPTPParser.RULE_nxf_parameter_list);
      try {
        this.state = 1232;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input, 74, this._ctx);
        switch (la_) {
          case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 1227;
            this.nxf_parameter();
            break;
          case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 1228;
            this.nxf_parameter();
            this.state = 1229;
            this.match(_TPTPParser.T__1);
            this.state = 1230;
            this.nxf_parameter_list();
            break;
        }
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    nxf_parameter() {
      let localctx = new Nxf_parameterContext(this, this._ctx, this.state);
      this.enterRule(localctx, 236, _TPTPParser.RULE_nxf_parameter);
      try {
        this.state = 1236;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
          case 77:
            this.enterOuterAlt(localctx, 1);
            this.state = 1234;
            this.ntf_index();
            break;
          case 17:
          case 20:
          case 66:
          case 68:
          case 69:
          case 71:
            this.enterOuterAlt(localctx, 2);
            this.state = 1235;
            this.nxf_key_pair();
            break;
          default:
            throw new Qn.error.NoViableAltException(this);
        }
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    nxf_key_pair() {
      let localctx = new Nxf_key_pairContext(this, this._ctx, this.state);
      this.enterRule(localctx, 238, _TPTPParser.RULE_nxf_key_pair);
      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 1238;
        this.txf_definition();
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    ntf_connective_name() {
      let localctx = new Ntf_connective_nameContext(this, this._ctx, this.state);
      this.enterRule(localctx, 240, _TPTPParser.RULE_ntf_connective_name);
      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 1240;
        this.def_or_sys_constant();
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    ntf_index() {
      let localctx = new Ntf_indexContext(this, this._ctx, this.state);
      this.enterRule(localctx, 242, _TPTPParser.RULE_ntf_index);
      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 1242;
        this.match(_TPTPParser.Hash);
        this.state = 1243;
        this.tff_unitary_term();
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    ntf_short_connective() {
      let localctx = new Ntf_short_connectiveContext(this, this._ctx, this.state);
      this.enterRule(localctx, 244, _TPTPParser.RULE_ntf_short_connective);
      try {
        this.state = 1251;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
          case 23:
            this.enterOuterAlt(localctx, 1);
            this.state = 1245;
            this.match(_TPTPParser.T__22);
            break;
          case 76:
            this.enterOuterAlt(localctx, 2);
            this.state = 1246;
            this.match(_TPTPParser.Less_sign);
            this.state = 1247;
            this.match(_TPTPParser.T__23);
            this.state = 1248;
            this.match(_TPTPParser.Arrow);
            break;
          case 25:
            this.enterOuterAlt(localctx, 3);
            this.state = 1249;
            this.match(_TPTPParser.T__24);
            break;
          case 26:
            this.enterOuterAlt(localctx, 4);
            this.state = 1250;
            this.match(_TPTPParser.T__25);
            break;
          default:
            throw new Qn.error.NoViableAltException(this);
        }
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    tcf_formula() {
      let localctx = new Tcf_formulaContext(this, this._ctx, this.state);
      this.enterRule(localctx, 246, _TPTPParser.RULE_tcf_formula);
      try {
        this.state = 1255;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input, 77, this._ctx);
        switch (la_) {
          case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 1253;
            this.tcf_logic_formula();
            break;
          case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 1254;
            this.tff_atom_typing();
            break;
        }
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    tcf_logic_formula() {
      let localctx = new Tcf_logic_formulaContext(this, this._ctx, this.state);
      this.enterRule(localctx, 248, _TPTPParser.RULE_tcf_logic_formula);
      try {
        this.state = 1259;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
          case 27:
            this.enterOuterAlt(localctx, 1);
            this.state = 1257;
            this.tcf_quantified_formula();
            break;
          case 12:
          case 28:
          case 66:
          case 67:
          case 68:
          case 69:
          case 70:
          case 71:
          case 78:
          case 81:
          case 84:
            this.enterOuterAlt(localctx, 2);
            this.state = 1258;
            this.cnf_formula();
            break;
          default:
            throw new Qn.error.NoViableAltException(this);
        }
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    tcf_quantified_formula() {
      let localctx = new Tcf_quantified_formulaContext(this, this._ctx, this.state);
      this.enterRule(localctx, 250, _TPTPParser.RULE_tcf_quantified_formula);
      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 1261;
        this.match(_TPTPParser.T__26);
        this.state = 1262;
        this.match(_TPTPParser.T__13);
        this.state = 1263;
        this.tff_variable_list();
        this.state = 1264;
        this.match(_TPTPParser.T__14);
        this.state = 1265;
        this.match(_TPTPParser.T__15);
        this.state = 1266;
        this.tcf_logic_formula();
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    fof_formula() {
      let localctx = new Fof_formulaContext(this, this._ctx, this.state);
      this.enterRule(localctx, 252, _TPTPParser.RULE_fof_formula);
      try {
        this.state = 1270;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input, 79, this._ctx);
        switch (la_) {
          case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 1268;
            this.fof_logic_formula();
            break;
          case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 1269;
            this.fof_sequent();
            break;
        }
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    fof_logic_formula() {
      let localctx = new Fof_logic_formulaContext(this, this._ctx, this.state);
      this.enterRule(localctx, 254, _TPTPParser.RULE_fof_logic_formula);
      try {
        this.state = 1275;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input, 80, this._ctx);
        switch (la_) {
          case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 1272;
            this.fof_binary_formula();
            break;
          case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 1273;
            this.fof_unary_formula();
            break;
          case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 1274;
            this.fof_unitary_formula();
            break;
        }
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    fof_binary_formula() {
      let localctx = new Fof_binary_formulaContext(this, this._ctx, this.state);
      this.enterRule(localctx, 256, _TPTPParser.RULE_fof_binary_formula);
      try {
        this.state = 1279;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input, 81, this._ctx);
        switch (la_) {
          case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 1277;
            this.fof_binary_nonassoc();
            break;
          case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 1278;
            this.fof_binary_assoc();
            break;
        }
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    fof_binary_nonassoc() {
      let localctx = new Fof_binary_nonassocContext(this, this._ctx, this.state);
      this.enterRule(localctx, 258, _TPTPParser.RULE_fof_binary_nonassoc);
      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 1281;
        this.fof_unit_formula();
        this.state = 1282;
        this.nonassoc_connective();
        this.state = 1283;
        this.fof_unit_formula();
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    fof_binary_assoc() {
      let localctx = new Fof_binary_assocContext(this, this._ctx, this.state);
      this.enterRule(localctx, 260, _TPTPParser.RULE_fof_binary_assoc);
      try {
        this.state = 1287;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input, 82, this._ctx);
        switch (la_) {
          case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 1285;
            this.fof_or_formula(0);
            break;
          case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 1286;
            this.fof_and_formula(0);
            break;
        }
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    fof_or_formula(_p) {
      if (_p === void 0) {
        _p = 0;
      }
      const _parentctx = this._ctx;
      const _parentState = this.state;
      let localctx = new Fof_or_formulaContext(this, this._ctx, _parentState);
      let _prevctx = localctx;
      const _startState = 262;
      this.enterRecursionRule(localctx, 262, _TPTPParser.RULE_fof_or_formula, _p);
      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 1290;
        this.fof_unit_formula();
        this.state = 1291;
        this.match(_TPTPParser.Vline);
        this.state = 1292;
        this.fof_unit_formula();
        this._ctx.stop = this._input.LT(-1);
        this.state = 1299;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input, 83, this._ctx);
        while (_alt != 2 && _alt != Qn.atn.ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners !== null) {
              this.triggerExitRuleEvent();
            }
            _prevctx = localctx;
            localctx = new Fof_or_formulaContext(this, _parentctx, _parentState);
            this.pushNewRecursionContext(localctx, _startState, _TPTPParser.RULE_fof_or_formula);
            this.state = 1294;
            if (!this.precpred(this._ctx, 1)) {
              throw new Qn.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
            }
            this.state = 1295;
            this.match(_TPTPParser.Vline);
            this.state = 1296;
            this.fof_unit_formula();
          }
          this.state = 1301;
          this._errHandler.sync(this);
          _alt = this._interp.adaptivePredict(this._input, 83, this._ctx);
        }
      } catch (error) {
        if (error instanceof Qn.error.RecognitionException) {
          localctx.exception = error;
          this._errHandler.reportError(this, error);
          this._errHandler.recover(this, error);
        } else {
          throw error;
        }
      } finally {
        this.unrollRecursionContexts(_parentctx);
      }
      return localctx;
    }
    fof_and_formula(_p) {
      if (_p === void 0) {
        _p = 0;
      }
      const _parentctx = this._ctx;
      const _parentState = this.state;
      let localctx = new Fof_and_formulaContext(this, this._ctx, _parentState);
      let _prevctx = localctx;
      const _startState = 264;
      this.enterRecursionRule(localctx, 264, _TPTPParser.RULE_fof_and_formula, _p);
      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 1303;
        this.fof_unit_formula();
        this.state = 1304;
        this.match(_TPTPParser.T__9);
        this.state = 1305;
        this.fof_unit_formula();
        this._ctx.stop = this._input.LT(-1);
        this.state = 1312;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input, 84, this._ctx);
        while (_alt != 2 && _alt != Qn.atn.ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners !== null) {
              this.triggerExitRuleEvent();
            }
            _prevctx = localctx;
            localctx = new Fof_and_formulaContext(this, _parentctx, _parentState);
            this.pushNewRecursionContext(localctx, _startState, _TPTPParser.RULE_fof_and_formula);
            this.state = 1307;
            if (!this.precpred(this._ctx, 1)) {
              throw new Qn.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
            }
            this.state = 1308;
            this.match(_TPTPParser.T__9);
            this.state = 1309;
            this.fof_unit_formula();
          }
          this.state = 1314;
          this._errHandler.sync(this);
          _alt = this._interp.adaptivePredict(this._input, 84, this._ctx);
        }
      } catch (error) {
        if (error instanceof Qn.error.RecognitionException) {
          localctx.exception = error;
          this._errHandler.reportError(this, error);
          this._errHandler.recover(this, error);
        } else {
          throw error;
        }
      } finally {
        this.unrollRecursionContexts(_parentctx);
      }
      return localctx;
    }
    fof_unary_formula() {
      let localctx = new Fof_unary_formulaContext(this, this._ctx, this.state);
      this.enterRule(localctx, 266, _TPTPParser.RULE_fof_unary_formula);
      try {
        this.state = 1319;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
          case 28:
            this.enterOuterAlt(localctx, 1);
            this.state = 1315;
            this.unary_connective();
            this.state = 1316;
            this.fof_unit_formula();
            break;
          case 66:
          case 67:
          case 68:
          case 69:
          case 70:
          case 71:
          case 78:
          case 81:
          case 84:
            this.enterOuterAlt(localctx, 2);
            this.state = 1318;
            this.fof_infix_unary();
            break;
          default:
            throw new Qn.error.NoViableAltException(this);
        }
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    fof_infix_unary() {
      let localctx = new Fof_infix_unaryContext(this, this._ctx, this.state);
      this.enterRule(localctx, 268, _TPTPParser.RULE_fof_infix_unary);
      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 1321;
        this.fof_term();
        this.state = 1322;
        this.infix_inequality();
        this.state = 1323;
        this.fof_term();
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    fof_unit_formula() {
      let localctx = new Fof_unit_formulaContext(this, this._ctx, this.state);
      this.enterRule(localctx, 270, _TPTPParser.RULE_fof_unit_formula);
      try {
        this.state = 1327;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input, 86, this._ctx);
        switch (la_) {
          case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 1325;
            this.fof_unitary_formula();
            break;
          case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 1326;
            this.fof_unary_formula();
            break;
        }
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    fof_unitary_formula() {
      let localctx = new Fof_unitary_formulaContext(this, this._ctx, this.state);
      this.enterRule(localctx, 272, _TPTPParser.RULE_fof_unitary_formula);
      try {
        this.state = 1335;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
          case 27:
          case 34:
          case 77:
            this.enterOuterAlt(localctx, 1);
            this.state = 1329;
            this.fof_quantified_formula();
            break;
          case 66:
          case 67:
          case 68:
          case 69:
          case 70:
          case 71:
          case 78:
          case 81:
          case 84:
            this.enterOuterAlt(localctx, 2);
            this.state = 1330;
            this.fof_atomic_formula();
            break;
          case 12:
            this.enterOuterAlt(localctx, 3);
            this.state = 1331;
            this.match(_TPTPParser.T__11);
            this.state = 1332;
            this.fof_logic_formula();
            this.state = 1333;
            this.match(_TPTPParser.T__12);
            break;
          default:
            throw new Qn.error.NoViableAltException(this);
        }
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    fof_quantified_formula() {
      let localctx = new Fof_quantified_formulaContext(this, this._ctx, this.state);
      this.enterRule(localctx, 274, _TPTPParser.RULE_fof_quantified_formula);
      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 1337;
        this.fof_quantifier();
        this.state = 1338;
        this.match(_TPTPParser.T__13);
        this.state = 1339;
        this.fof_variable_list();
        this.state = 1340;
        this.match(_TPTPParser.T__14);
        this.state = 1341;
        this.match(_TPTPParser.T__15);
        this.state = 1342;
        this.fof_unit_formula();
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    fof_variable_list() {
      let localctx = new Fof_variable_listContext(this, this._ctx, this.state);
      this.enterRule(localctx, 276, _TPTPParser.RULE_fof_variable_list);
      try {
        this.state = 1349;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input, 88, this._ctx);
        switch (la_) {
          case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 1344;
            this.variable();
            break;
          case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 1345;
            this.variable();
            this.state = 1346;
            this.match(_TPTPParser.T__1);
            this.state = 1347;
            this.fof_variable_list();
            break;
        }
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    fof_atomic_formula() {
      let localctx = new Fof_atomic_formulaContext(this, this._ctx, this.state);
      this.enterRule(localctx, 278, _TPTPParser.RULE_fof_atomic_formula);
      try {
        this.state = 1354;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input, 89, this._ctx);
        switch (la_) {
          case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 1351;
            this.fof_plain_atomic_formula();
            break;
          case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 1352;
            this.fof_defined_atomic_formula();
            break;
          case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 1353;
            this.fof_system_atomic_formula();
            break;
        }
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    fof_plain_atomic_formula() {
      let localctx = new Fof_plain_atomic_formulaContext(this, this._ctx, this.state);
      this.enterRule(localctx, 280, _TPTPParser.RULE_fof_plain_atomic_formula);
      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 1356;
        this.fof_plain_term();
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    fof_defined_atomic_formula() {
      let localctx = new Fof_defined_atomic_formulaContext(this, this._ctx, this.state);
      this.enterRule(localctx, 282, _TPTPParser.RULE_fof_defined_atomic_formula);
      try {
        this.state = 1360;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input, 90, this._ctx);
        switch (la_) {
          case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 1358;
            this.fof_defined_plain_formula();
            break;
          case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 1359;
            this.fof_defined_infix_formula();
            break;
        }
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    fof_defined_plain_formula() {
      let localctx = new Fof_defined_plain_formulaContext(this, this._ctx, this.state);
      this.enterRule(localctx, 284, _TPTPParser.RULE_fof_defined_plain_formula);
      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 1362;
        this.fof_defined_plain_term();
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    fof_defined_infix_formula() {
      let localctx = new Fof_defined_infix_formulaContext(this, this._ctx, this.state);
      this.enterRule(localctx, 286, _TPTPParser.RULE_fof_defined_infix_formula);
      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 1364;
        this.fof_term();
        this.state = 1365;
        this.defined_infix_pred();
        this.state = 1366;
        this.fof_term();
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    fof_system_atomic_formula() {
      let localctx = new Fof_system_atomic_formulaContext(this, this._ctx, this.state);
      this.enterRule(localctx, 288, _TPTPParser.RULE_fof_system_atomic_formula);
      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 1368;
        this.fof_system_term();
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    fof_plain_term() {
      let localctx = new Fof_plain_termContext(this, this._ctx, this.state);
      this.enterRule(localctx, 290, _TPTPParser.RULE_fof_plain_term);
      try {
        this.state = 1376;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input, 91, this._ctx);
        switch (la_) {
          case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 1370;
            this.constant();
            break;
          case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 1371;
            this.functor();
            this.state = 1372;
            this.match(_TPTPParser.T__11);
            this.state = 1373;
            this.fof_arguments();
            this.state = 1374;
            this.match(_TPTPParser.T__12);
            break;
        }
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    fof_defined_term() {
      let localctx = new Fof_defined_termContext(this, this._ctx, this.state);
      this.enterRule(localctx, 292, _TPTPParser.RULE_fof_defined_term);
      try {
        this.state = 1380;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
          case 67:
          case 78:
          case 81:
          case 84:
            this.enterOuterAlt(localctx, 1);
            this.state = 1378;
            this.defined_term();
            break;
          case 68:
            this.enterOuterAlt(localctx, 2);
            this.state = 1379;
            this.fof_defined_atomic_term();
            break;
          default:
            throw new Qn.error.NoViableAltException(this);
        }
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    fof_defined_atomic_term() {
      let localctx = new Fof_defined_atomic_termContext(this, this._ctx, this.state);
      this.enterRule(localctx, 294, _TPTPParser.RULE_fof_defined_atomic_term);
      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 1382;
        this.fof_defined_plain_term();
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    fof_defined_plain_term() {
      let localctx = new Fof_defined_plain_termContext(this, this._ctx, this.state);
      this.enterRule(localctx, 296, _TPTPParser.RULE_fof_defined_plain_term);
      try {
        this.state = 1390;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input, 93, this._ctx);
        switch (la_) {
          case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 1384;
            this.defined_constant();
            break;
          case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 1385;
            this.defined_functor();
            this.state = 1386;
            this.match(_TPTPParser.T__11);
            this.state = 1387;
            this.fof_arguments();
            this.state = 1388;
            this.match(_TPTPParser.T__12);
            break;
        }
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    fof_system_term() {
      let localctx = new Fof_system_termContext(this, this._ctx, this.state);
      this.enterRule(localctx, 298, _TPTPParser.RULE_fof_system_term);
      try {
        this.state = 1398;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input, 94, this._ctx);
        switch (la_) {
          case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 1392;
            this.system_constant();
            break;
          case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 1393;
            this.system_functor();
            this.state = 1394;
            this.match(_TPTPParser.T__11);
            this.state = 1395;
            this.fof_arguments();
            this.state = 1396;
            this.match(_TPTPParser.T__12);
            break;
        }
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    fof_arguments() {
      let localctx = new Fof_argumentsContext(this, this._ctx, this.state);
      this.enterRule(localctx, 300, _TPTPParser.RULE_fof_arguments);
      try {
        this.state = 1405;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input, 95, this._ctx);
        switch (la_) {
          case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 1400;
            this.fof_term();
            break;
          case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 1401;
            this.fof_term();
            this.state = 1402;
            this.match(_TPTPParser.T__1);
            this.state = 1403;
            this.fof_arguments();
            break;
        }
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    fof_term() {
      let localctx = new Fof_termContext(this, this._ctx, this.state);
      this.enterRule(localctx, 302, _TPTPParser.RULE_fof_term);
      try {
        this.state = 1409;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
          case 66:
          case 67:
          case 68:
          case 69:
          case 71:
          case 78:
          case 81:
          case 84:
            this.enterOuterAlt(localctx, 1);
            this.state = 1407;
            this.fof_function_term();
            break;
          case 70:
            this.enterOuterAlt(localctx, 2);
            this.state = 1408;
            this.variable();
            break;
          default:
            throw new Qn.error.NoViableAltException(this);
        }
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    fof_function_term() {
      let localctx = new Fof_function_termContext(this, this._ctx, this.state);
      this.enterRule(localctx, 304, _TPTPParser.RULE_fof_function_term);
      try {
        this.state = 1414;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
          case 66:
          case 71:
            this.enterOuterAlt(localctx, 1);
            this.state = 1411;
            this.fof_plain_term();
            break;
          case 67:
          case 68:
          case 78:
          case 81:
          case 84:
            this.enterOuterAlt(localctx, 2);
            this.state = 1412;
            this.fof_defined_term();
            break;
          case 69:
            this.enterOuterAlt(localctx, 3);
            this.state = 1413;
            this.fof_system_term();
            break;
          default:
            throw new Qn.error.NoViableAltException(this);
        }
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    fof_sequent() {
      let localctx = new Fof_sequentContext(this, this._ctx, this.state);
      this.enterRule(localctx, 306, _TPTPParser.RULE_fof_sequent);
      try {
        this.state = 1424;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
          case 14:
          case 18:
            this.enterOuterAlt(localctx, 1);
            this.state = 1416;
            this.fof_formula_tuple();
            this.state = 1417;
            this.gentzen_arrow();
            this.state = 1418;
            this.fof_formula_tuple();
            break;
          case 12:
            this.enterOuterAlt(localctx, 2);
            this.state = 1420;
            this.match(_TPTPParser.T__11);
            this.state = 1421;
            this.fof_sequent();
            this.state = 1422;
            this.match(_TPTPParser.T__12);
            break;
          default:
            throw new Qn.error.NoViableAltException(this);
        }
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    fof_formula_tuple() {
      let localctx = new Fof_formula_tupleContext(this, this._ctx, this.state);
      this.enterRule(localctx, 308, _TPTPParser.RULE_fof_formula_tuple);
      try {
        this.state = 1431;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
          case 18:
            this.enterOuterAlt(localctx, 1);
            this.state = 1426;
            this.match(_TPTPParser.T__17);
            break;
          case 14:
            this.enterOuterAlt(localctx, 2);
            this.state = 1427;
            this.match(_TPTPParser.T__13);
            this.state = 1428;
            this.fof_formula_tuple_list();
            this.state = 1429;
            this.match(_TPTPParser.T__14);
            break;
          default:
            throw new Qn.error.NoViableAltException(this);
        }
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    fof_formula_tuple_list() {
      let localctx = new Fof_formula_tuple_listContext(this, this._ctx, this.state);
      this.enterRule(localctx, 310, _TPTPParser.RULE_fof_formula_tuple_list);
      var _la = 0;
      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 1433;
        this.fof_logic_formula();
        this.state = 1437;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === 2) {
          this.state = 1434;
          this.comma_fof_logic_formula();
          this.state = 1439;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    comma_fof_logic_formula() {
      let localctx = new Comma_fof_logic_formulaContext(this, this._ctx, this.state);
      this.enterRule(localctx, 312, _TPTPParser.RULE_comma_fof_logic_formula);
      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 1440;
        this.match(_TPTPParser.T__1);
        this.state = 1441;
        this.fof_logic_formula();
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    cnf_formula() {
      let localctx = new Cnf_formulaContext(this, this._ctx, this.state);
      this.enterRule(localctx, 314, _TPTPParser.RULE_cnf_formula);
      try {
        this.state = 1448;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
          case 28:
          case 66:
          case 67:
          case 68:
          case 69:
          case 70:
          case 71:
          case 78:
          case 81:
          case 84:
            this.enterOuterAlt(localctx, 1);
            this.state = 1443;
            this.cnf_disjunction(0);
            break;
          case 12:
            this.enterOuterAlt(localctx, 2);
            this.state = 1444;
            this.match(_TPTPParser.T__11);
            this.state = 1445;
            this.cnf_formula();
            this.state = 1446;
            this.match(_TPTPParser.T__12);
            break;
          default:
            throw new Qn.error.NoViableAltException(this);
        }
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    cnf_disjunction(_p) {
      if (_p === void 0) {
        _p = 0;
      }
      const _parentctx = this._ctx;
      const _parentState = this.state;
      let localctx = new Cnf_disjunctionContext(this, this._ctx, _parentState);
      let _prevctx = localctx;
      const _startState = 316;
      this.enterRecursionRule(localctx, 316, _TPTPParser.RULE_cnf_disjunction, _p);
      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 1451;
        this.cnf_literal();
        this._ctx.stop = this._input.LT(-1);
        this.state = 1458;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input, 102, this._ctx);
        while (_alt != 2 && _alt != Qn.atn.ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners !== null) {
              this.triggerExitRuleEvent();
            }
            _prevctx = localctx;
            localctx = new Cnf_disjunctionContext(this, _parentctx, _parentState);
            this.pushNewRecursionContext(localctx, _startState, _TPTPParser.RULE_cnf_disjunction);
            this.state = 1453;
            if (!this.precpred(this._ctx, 1)) {
              throw new Qn.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
            }
            this.state = 1454;
            this.match(_TPTPParser.Vline);
            this.state = 1455;
            this.cnf_literal();
          }
          this.state = 1460;
          this._errHandler.sync(this);
          _alt = this._interp.adaptivePredict(this._input, 102, this._ctx);
        }
      } catch (error) {
        if (error instanceof Qn.error.RecognitionException) {
          localctx.exception = error;
          this._errHandler.reportError(this, error);
          this._errHandler.recover(this, error);
        } else {
          throw error;
        }
      } finally {
        this.unrollRecursionContexts(_parentctx);
      }
      return localctx;
    }
    cnf_literal() {
      let localctx = new Cnf_literalContext(this, this._ctx, this.state);
      this.enterRule(localctx, 318, _TPTPParser.RULE_cnf_literal);
      try {
        this.state = 1470;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input, 103, this._ctx);
        switch (la_) {
          case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 1461;
            this.fof_atomic_formula();
            break;
          case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 1462;
            this.match(_TPTPParser.T__27);
            this.state = 1463;
            this.fof_atomic_formula();
            break;
          case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 1464;
            this.match(_TPTPParser.T__27);
            this.state = 1465;
            this.match(_TPTPParser.T__11);
            this.state = 1466;
            this.fof_atomic_formula();
            this.state = 1467;
            this.match(_TPTPParser.T__12);
            break;
          case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 1469;
            this.fof_infix_unary();
            break;
        }
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    thf_quantifier() {
      let localctx = new Thf_quantifierContext(this, this._ctx, this.state);
      this.enterRule(localctx, 320, _TPTPParser.RULE_thf_quantifier);
      try {
        this.state = 1475;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
          case 27:
          case 34:
          case 77:
            this.enterOuterAlt(localctx, 1);
            this.state = 1472;
            this.fof_quantifier();
            break;
          case 30:
          case 31:
          case 32:
            this.enterOuterAlt(localctx, 2);
            this.state = 1473;
            this.th0_quantifier();
            break;
          case 19:
          case 29:
            this.enterOuterAlt(localctx, 3);
            this.state = 1474;
            this.th1_quantifier();
            break;
          default:
            throw new Qn.error.NoViableAltException(this);
        }
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    thf_unary_connective() {
      let localctx = new Thf_unary_connectiveContext(this, this._ctx, this.state);
      this.enterRule(localctx, 322, _TPTPParser.RULE_thf_unary_connective);
      try {
        this.state = 1479;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
          case 28:
            this.enterOuterAlt(localctx, 1);
            this.state = 1477;
            this.unary_connective();
            break;
          case 23:
          case 25:
          case 26:
          case 76:
            this.enterOuterAlt(localctx, 2);
            this.state = 1478;
            this.ntf_short_connective();
            break;
          default:
            throw new Qn.error.NoViableAltException(this);
        }
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    th1_quantifier() {
      let localctx = new Th1_quantifierContext(this, this._ctx, this.state);
      this.enterRule(localctx, 324, _TPTPParser.RULE_th1_quantifier);
      var _la = 0;
      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 1481;
        _la = this._input.LA(1);
        if (!(_la === 19 || _la === 29)) {
          this._errHandler.recoverInline(this);
        } else {
          this._errHandler.reportMatch(this);
          this.consume();
        }
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    th0_quantifier() {
      let localctx = new Th0_quantifierContext(this, this._ctx, this.state);
      this.enterRule(localctx, 326, _TPTPParser.RULE_th0_quantifier);
      var _la = 0;
      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 1483;
        _la = this._input.LA(1);
        if (!((_la - 30 & ~31) === 0 && (1 << _la - 30 & 7) !== 0)) {
          this._errHandler.recoverInline(this);
        } else {
          this._errHandler.reportMatch(this);
          this.consume();
        }
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    subtype_sign() {
      let localctx = new Subtype_signContext(this, this._ctx, this.state);
      this.enterRule(localctx, 328, _TPTPParser.RULE_subtype_sign);
      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 1485;
        this.match(_TPTPParser.T__32);
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    tff_unary_connective() {
      let localctx = new Tff_unary_connectiveContext(this, this._ctx, this.state);
      this.enterRule(localctx, 330, _TPTPParser.RULE_tff_unary_connective);
      try {
        this.state = 1489;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
          case 28:
            this.enterOuterAlt(localctx, 1);
            this.state = 1487;
            this.unary_connective();
            break;
          case 23:
          case 25:
          case 26:
          case 76:
            this.enterOuterAlt(localctx, 2);
            this.state = 1488;
            this.ntf_short_connective();
            break;
          default:
            throw new Qn.error.NoViableAltException(this);
        }
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    tff_quantifier() {
      let localctx = new Tff_quantifierContext(this, this._ctx, this.state);
      this.enterRule(localctx, 332, _TPTPParser.RULE_tff_quantifier);
      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 1491;
        this.fof_quantifier();
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    fof_quantifier() {
      let localctx = new Fof_quantifierContext(this, this._ctx, this.state);
      this.enterRule(localctx, 334, _TPTPParser.RULE_fof_quantifier);
      var _la = 0;
      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 1493;
        _la = this._input.LA(1);
        if (!(_la === 27 || _la === 34 || _la === 77)) {
          this._errHandler.recoverInline(this);
        } else {
          this._errHandler.reportMatch(this);
          this.consume();
        }
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    nonassoc_connective() {
      let localctx = new Nonassoc_connectiveContext(this, this._ctx, this.state);
      this.enterRule(localctx, 336, _TPTPParser.RULE_nonassoc_connective);
      try {
        this.state = 1502;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
          case 35:
            this.enterOuterAlt(localctx, 1);
            this.state = 1495;
            this.match(_TPTPParser.T__34);
            break;
          case 36:
            this.enterOuterAlt(localctx, 2);
            this.state = 1496;
            this.match(_TPTPParser.T__35);
            break;
          case 37:
            this.enterOuterAlt(localctx, 3);
            this.state = 1497;
            this.match(_TPTPParser.T__36);
            break;
          case 38:
            this.enterOuterAlt(localctx, 4);
            this.state = 1498;
            this.match(_TPTPParser.T__37);
            break;
          case 28:
            this.enterOuterAlt(localctx, 5);
            this.state = 1499;
            this.match(_TPTPParser.T__27);
            this.state = 1500;
            this.match(_TPTPParser.Vline);
            break;
          case 39:
            this.enterOuterAlt(localctx, 6);
            this.state = 1501;
            this.match(_TPTPParser.T__38);
            break;
          default:
            throw new Qn.error.NoViableAltException(this);
        }
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    assoc_connective() {
      let localctx = new Assoc_connectiveContext(this, this._ctx, this.state);
      this.enterRule(localctx, 338, _TPTPParser.RULE_assoc_connective);
      var _la = 0;
      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 1504;
        _la = this._input.LA(1);
        if (!(_la === 10 || _la === 72)) {
          this._errHandler.recoverInline(this);
        } else {
          this._errHandler.reportMatch(this);
          this.consume();
        }
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    unary_connective() {
      let localctx = new Unary_connectiveContext(this, this._ctx, this.state);
      this.enterRule(localctx, 340, _TPTPParser.RULE_unary_connective);
      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 1506;
        this.match(_TPTPParser.T__27);
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    gentzen_arrow() {
      let localctx = new Gentzen_arrowContext(this, this._ctx, this.state);
      this.enterRule(localctx, 342, _TPTPParser.RULE_gentzen_arrow);
      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 1508;
        this.match(_TPTPParser.T__39);
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    assignment() {
      let localctx = new AssignmentContext(this, this._ctx, this.state);
      this.enterRule(localctx, 344, _TPTPParser.RULE_assignment);
      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 1510;
        this.match(_TPTPParser.T__40);
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    identical() {
      let localctx = new IdenticalContext(this, this._ctx, this.state);
      this.enterRule(localctx, 346, _TPTPParser.RULE_identical);
      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 1512;
        this.match(_TPTPParser.T__41);
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    type_constant() {
      let localctx = new Type_constantContext(this, this._ctx, this.state);
      this.enterRule(localctx, 348, _TPTPParser.RULE_type_constant);
      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 1514;
        this.type_functor();
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    type_functor() {
      let localctx = new Type_functorContext(this, this._ctx, this.state);
      this.enterRule(localctx, 350, _TPTPParser.RULE_type_functor);
      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 1516;
        this.atomic_word();
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    defined_type() {
      let localctx = new Defined_typeContext(this, this._ctx, this.state);
      this.enterRule(localctx, 352, _TPTPParser.RULE_defined_type);
      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 1518;
        this.atomic_defined_word();
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    atom() {
      let localctx = new AtomContext(this, this._ctx, this.state);
      this.enterRule(localctx, 354, _TPTPParser.RULE_atom);
      try {
        this.state = 1522;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
          case 66:
          case 69:
          case 71:
            this.enterOuterAlt(localctx, 1);
            this.state = 1520;
            this.untyped_atom();
            break;
          case 68:
            this.enterOuterAlt(localctx, 2);
            this.state = 1521;
            this.defined_constant();
            break;
          default:
            throw new Qn.error.NoViableAltException(this);
        }
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    untyped_atom() {
      let localctx = new Untyped_atomContext(this, this._ctx, this.state);
      this.enterRule(localctx, 356, _TPTPParser.RULE_untyped_atom);
      try {
        this.state = 1526;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
          case 66:
          case 71:
            this.enterOuterAlt(localctx, 1);
            this.state = 1524;
            this.constant();
            break;
          case 69:
            this.enterOuterAlt(localctx, 2);
            this.state = 1525;
            this.system_constant();
            break;
          default:
            throw new Qn.error.NoViableAltException(this);
        }
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    defined_infix_pred() {
      let localctx = new Defined_infix_predContext(this, this._ctx, this.state);
      this.enterRule(localctx, 358, _TPTPParser.RULE_defined_infix_pred);
      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 1528;
        this.infix_equality();
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    infix_equality() {
      let localctx = new Infix_equalityContext(this, this._ctx, this.state);
      this.enterRule(localctx, 360, _TPTPParser.RULE_infix_equality);
      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 1530;
        this.match(_TPTPParser.T__42);
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    infix_inequality() {
      let localctx = new Infix_inequalityContext(this, this._ctx, this.state);
      this.enterRule(localctx, 362, _TPTPParser.RULE_infix_inequality);
      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 1532;
        this.match(_TPTPParser.T__43);
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    constant() {
      let localctx = new ConstantContext(this, this._ctx, this.state);
      this.enterRule(localctx, 364, _TPTPParser.RULE_constant);
      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 1534;
        this.functor();
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    functor() {
      let localctx = new FunctorContext(this, this._ctx, this.state);
      this.enterRule(localctx, 366, _TPTPParser.RULE_functor);
      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 1536;
        this.atomic_word();
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    defined_constant() {
      let localctx = new Defined_constantContext(this, this._ctx, this.state);
      this.enterRule(localctx, 368, _TPTPParser.RULE_defined_constant);
      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 1538;
        this.defined_functor();
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    defined_functor() {
      let localctx = new Defined_functorContext(this, this._ctx, this.state);
      this.enterRule(localctx, 370, _TPTPParser.RULE_defined_functor);
      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 1540;
        this.atomic_defined_word();
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    system_constant() {
      let localctx = new System_constantContext(this, this._ctx, this.state);
      this.enterRule(localctx, 372, _TPTPParser.RULE_system_constant);
      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 1542;
        this.system_functor();
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    system_functor() {
      let localctx = new System_functorContext(this, this._ctx, this.state);
      this.enterRule(localctx, 374, _TPTPParser.RULE_system_functor);
      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 1544;
        this.atomic_system_word();
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    def_or_sys_constant() {
      let localctx = new Def_or_sys_constantContext(this, this._ctx, this.state);
      this.enterRule(localctx, 376, _TPTPParser.RULE_def_or_sys_constant);
      try {
        this.state = 1548;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
          case 68:
            this.enterOuterAlt(localctx, 1);
            this.state = 1546;
            this.defined_constant();
            break;
          case 69:
            this.enterOuterAlt(localctx, 2);
            this.state = 1547;
            this.system_constant();
            break;
          default:
            throw new Qn.error.NoViableAltException(this);
        }
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    th1_defined_term() {
      let localctx = new Th1_defined_termContext(this, this._ctx, this.state);
      this.enterRule(localctx, 378, _TPTPParser.RULE_th1_defined_term);
      var _la = 0;
      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 1550;
        _la = this._input.LA(1);
        if (!((_la - 45 & ~31) === 0 && (1 << _la - 45 & 31) !== 0)) {
          this._errHandler.recoverInline(this);
        } else {
          this._errHandler.reportMatch(this);
          this.consume();
        }
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    defined_term() {
      let localctx = new Defined_termContext(this, this._ctx, this.state);
      this.enterRule(localctx, 380, _TPTPParser.RULE_defined_term);
      try {
        this.state = 1554;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
          case 78:
          case 81:
          case 84:
            this.enterOuterAlt(localctx, 1);
            this.state = 1552;
            this.number();
            break;
          case 67:
            this.enterOuterAlt(localctx, 2);
            this.state = 1553;
            this.match(_TPTPParser.Distinct_object);
            break;
          default:
            throw new Qn.error.NoViableAltException(this);
        }
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    variable() {
      let localctx = new VariableContext(this, this._ctx, this.state);
      this.enterRule(localctx, 382, _TPTPParser.RULE_variable);
      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 1556;
        this.match(_TPTPParser.Upper_word);
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    source() {
      let localctx = new SourceContext(this, this._ctx, this.state);
      this.enterRule(localctx, 384, _TPTPParser.RULE_source);
      try {
        this.state = 1566;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
          case 51:
          case 66:
          case 71:
          case 84:
            this.enterOuterAlt(localctx, 1);
            this.state = 1558;
            this.dag_source();
            break;
          case 52:
            this.enterOuterAlt(localctx, 2);
            this.state = 1559;
            this.internal_source();
            break;
          case 53:
          case 54:
          case 55:
            this.enterOuterAlt(localctx, 3);
            this.state = 1560;
            this.external_source();
            break;
          case 50:
            this.enterOuterAlt(localctx, 4);
            this.state = 1561;
            this.match(_TPTPParser.T__49);
            break;
          case 14:
            this.enterOuterAlt(localctx, 5);
            this.state = 1562;
            this.match(_TPTPParser.T__13);
            this.state = 1563;
            this.sources();
            this.state = 1564;
            this.match(_TPTPParser.T__14);
            break;
          default:
            throw new Qn.error.NoViableAltException(this);
        }
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    sources() {
      let localctx = new SourcesContext(this, this._ctx, this.state);
      this.enterRule(localctx, 386, _TPTPParser.RULE_sources);
      try {
        this.state = 1573;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input, 113, this._ctx);
        switch (la_) {
          case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 1568;
            this.source();
            break;
          case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 1569;
            this.source();
            this.state = 1570;
            this.match(_TPTPParser.T__1);
            this.state = 1571;
            this.sources();
            break;
        }
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    dag_source() {
      let localctx = new Dag_sourceContext(this, this._ctx, this.state);
      this.enterRule(localctx, 388, _TPTPParser.RULE_dag_source);
      try {
        this.state = 1577;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
          case 66:
          case 71:
          case 84:
            this.enterOuterAlt(localctx, 1);
            this.state = 1575;
            this.name();
            break;
          case 51:
            this.enterOuterAlt(localctx, 2);
            this.state = 1576;
            this.inference_record();
            break;
          default:
            throw new Qn.error.NoViableAltException(this);
        }
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    inference_record() {
      let localctx = new Inference_recordContext(this, this._ctx, this.state);
      this.enterRule(localctx, 390, _TPTPParser.RULE_inference_record);
      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 1579;
        this.match(_TPTPParser.T__50);
        this.state = 1580;
        this.inference_rule();
        this.state = 1581;
        this.match(_TPTPParser.T__1);
        this.state = 1582;
        this.useful_info();
        this.state = 1583;
        this.match(_TPTPParser.T__1);
        this.state = 1584;
        this.parents();
        this.state = 1585;
        this.match(_TPTPParser.T__12);
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    inference_rule() {
      let localctx = new Inference_ruleContext(this, this._ctx, this.state);
      this.enterRule(localctx, 392, _TPTPParser.RULE_inference_rule);
      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 1587;
        this.atomic_word();
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    internal_source() {
      let localctx = new Internal_sourceContext(this, this._ctx, this.state);
      this.enterRule(localctx, 394, _TPTPParser.RULE_internal_source);
      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 1589;
        this.match(_TPTPParser.T__51);
        this.state = 1590;
        this.intro_type();
        this.state = 1591;
        this.match(_TPTPParser.T__1);
        this.state = 1592;
        this.useful_info();
        this.state = 1593;
        this.match(_TPTPParser.T__1);
        this.state = 1594;
        this.parents();
        this.state = 1595;
        this.match(_TPTPParser.T__12);
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    intro_type() {
      let localctx = new Intro_typeContext(this, this._ctx, this.state);
      this.enterRule(localctx, 396, _TPTPParser.RULE_intro_type);
      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 1597;
        this.atomic_word();
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    external_source() {
      let localctx = new External_sourceContext(this, this._ctx, this.state);
      this.enterRule(localctx, 398, _TPTPParser.RULE_external_source);
      try {
        this.state = 1602;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
          case 53:
            this.enterOuterAlt(localctx, 1);
            this.state = 1599;
            this.file_source();
            break;
          case 54:
            this.enterOuterAlt(localctx, 2);
            this.state = 1600;
            this.theory();
            break;
          case 55:
            this.enterOuterAlt(localctx, 3);
            this.state = 1601;
            this.creator_source();
            break;
          default:
            throw new Qn.error.NoViableAltException(this);
        }
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    file_source() {
      let localctx = new File_sourceContext(this, this._ctx, this.state);
      this.enterRule(localctx, 400, _TPTPParser.RULE_file_source);
      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 1604;
        this.match(_TPTPParser.T__52);
        this.state = 1605;
        this.file_name();
        this.state = 1606;
        this.file_info();
        this.state = 1607;
        this.match(_TPTPParser.T__12);
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    file_info() {
      let localctx = new File_infoContext(this, this._ctx, this.state);
      this.enterRule(localctx, 402, _TPTPParser.RULE_file_info);
      try {
        this.state = 1612;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
          case 2:
            this.enterOuterAlt(localctx, 1);
            this.state = 1609;
            this.match(_TPTPParser.T__1);
            this.state = 1610;
            this.name();
            break;
          case 13:
            this.enterOuterAlt(localctx, 2);
            this.state = 1611;
            this.nothing();
            break;
          default:
            throw new Qn.error.NoViableAltException(this);
        }
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    theory() {
      let localctx = new TheoryContext(this, this._ctx, this.state);
      this.enterRule(localctx, 404, _TPTPParser.RULE_theory);
      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 1614;
        this.match(_TPTPParser.T__53);
        this.state = 1615;
        this.theory_name();
        this.state = 1616;
        this.optional_info();
        this.state = 1617;
        this.match(_TPTPParser.T__12);
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    theory_name() {
      let localctx = new Theory_nameContext(this, this._ctx, this.state);
      this.enterRule(localctx, 406, _TPTPParser.RULE_theory_name);
      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 1619;
        this.atomic_word();
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    creator_source() {
      let localctx = new Creator_sourceContext(this, this._ctx, this.state);
      this.enterRule(localctx, 408, _TPTPParser.RULE_creator_source);
      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 1621;
        this.match(_TPTPParser.T__54);
        this.state = 1622;
        this.creator_name();
        this.state = 1623;
        this.match(_TPTPParser.T__1);
        this.state = 1624;
        this.useful_info();
        this.state = 1625;
        this.match(_TPTPParser.T__1);
        this.state = 1626;
        this.parents();
        this.state = 1627;
        this.match(_TPTPParser.T__12);
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    creator_name() {
      let localctx = new Creator_nameContext(this, this._ctx, this.state);
      this.enterRule(localctx, 410, _TPTPParser.RULE_creator_name);
      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 1629;
        this.atomic_word();
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    parents() {
      let localctx = new ParentsContext(this, this._ctx, this.state);
      this.enterRule(localctx, 412, _TPTPParser.RULE_parents);
      try {
        this.state = 1636;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
          case 18:
            this.enterOuterAlt(localctx, 1);
            this.state = 1631;
            this.match(_TPTPParser.T__17);
            break;
          case 14:
            this.enterOuterAlt(localctx, 2);
            this.state = 1632;
            this.match(_TPTPParser.T__13);
            this.state = 1633;
            this.parent_list();
            this.state = 1634;
            this.match(_TPTPParser.T__14);
            break;
          default:
            throw new Qn.error.NoViableAltException(this);
        }
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    parent_list() {
      let localctx = new Parent_listContext(this, this._ctx, this.state);
      this.enterRule(localctx, 414, _TPTPParser.RULE_parent_list);
      var _la = 0;
      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 1638;
        this.parent_info();
        this.state = 1642;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === 2) {
          this.state = 1639;
          this.comma_parent_info();
          this.state = 1644;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    comma_parent_info() {
      let localctx = new Comma_parent_infoContext(this, this._ctx, this.state);
      this.enterRule(localctx, 416, _TPTPParser.RULE_comma_parent_info);
      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 1645;
        this.match(_TPTPParser.T__1);
        this.state = 1646;
        this.parent_info();
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    parent_info() {
      let localctx = new Parent_infoContext(this, this._ctx, this.state);
      this.enterRule(localctx, 418, _TPTPParser.RULE_parent_info);
      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 1648;
        this.source();
        this.state = 1649;
        this.parent_details();
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    parent_details() {
      let localctx = new Parent_detailsContext(this, this._ctx, this.state);
      this.enterRule(localctx, 420, _TPTPParser.RULE_parent_details);
      try {
        this.state = 1654;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
          case 16:
            this.enterOuterAlt(localctx, 1);
            this.state = 1651;
            this.match(_TPTPParser.T__15);
            this.state = 1652;
            this.general_list();
            break;
          case 2:
          case 15:
            this.enterOuterAlt(localctx, 2);
            this.state = 1653;
            this.nothing();
            break;
          default:
            throw new Qn.error.NoViableAltException(this);
        }
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    optional_info() {
      let localctx = new Optional_infoContext(this, this._ctx, this.state);
      this.enterRule(localctx, 422, _TPTPParser.RULE_optional_info);
      try {
        this.state = 1659;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
          case 2:
            this.enterOuterAlt(localctx, 1);
            this.state = 1656;
            this.match(_TPTPParser.T__1);
            this.state = 1657;
            this.useful_info();
            break;
          case 3:
          case 13:
            this.enterOuterAlt(localctx, 2);
            this.state = 1658;
            this.nothing();
            break;
          default:
            throw new Qn.error.NoViableAltException(this);
        }
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    useful_info() {
      let localctx = new Useful_infoContext(this, this._ctx, this.state);
      this.enterRule(localctx, 424, _TPTPParser.RULE_useful_info);
      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 1661;
        this.general_list();
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    include() {
      let localctx = new IncludeContext(this, this._ctx, this.state);
      this.enterRule(localctx, 426, _TPTPParser.RULE_include);
      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 1663;
        this.match(_TPTPParser.T__55);
        this.state = 1664;
        this.file_name();
        this.state = 1665;
        this.include_optionals();
        this.state = 1666;
        this.match(_TPTPParser.T__2);
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    include_optionals() {
      let localctx = new Include_optionalsContext(this, this._ctx, this.state);
      this.enterRule(localctx, 428, _TPTPParser.RULE_include_optionals);
      try {
        this.state = 1676;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input, 121, this._ctx);
        switch (la_) {
          case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 1668;
            this.nothing();
            break;
          case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 1669;
            this.match(_TPTPParser.T__1);
            this.state = 1670;
            this.formula_selection();
            break;
          case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 1671;
            this.match(_TPTPParser.T__1);
            this.state = 1672;
            this.formula_selection();
            this.state = 1673;
            this.match(_TPTPParser.T__1);
            this.state = 1674;
            this.space_name();
            break;
        }
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    formula_selection() {
      let localctx = new Formula_selectionContext(this, this._ctx, this.state);
      this.enterRule(localctx, 430, _TPTPParser.RULE_formula_selection);
      try {
        this.state = 1683;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
          case 14:
            this.enterOuterAlt(localctx, 1);
            this.state = 1678;
            this.match(_TPTPParser.T__13);
            this.state = 1679;
            this.name_list();
            this.state = 1680;
            this.match(_TPTPParser.T__14);
            break;
          case 73:
            this.enterOuterAlt(localctx, 2);
            this.state = 1682;
            this.match(_TPTPParser.Star);
            break;
          default:
            throw new Qn.error.NoViableAltException(this);
        }
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    name_list() {
      let localctx = new Name_listContext(this, this._ctx, this.state);
      this.enterRule(localctx, 432, _TPTPParser.RULE_name_list);
      try {
        this.state = 1690;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input, 123, this._ctx);
        switch (la_) {
          case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 1685;
            this.name();
            break;
          case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 1686;
            this.name();
            this.state = 1687;
            this.match(_TPTPParser.T__1);
            this.state = 1688;
            this.name_list();
            break;
        }
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    space_name() {
      let localctx = new Space_nameContext(this, this._ctx, this.state);
      this.enterRule(localctx, 434, _TPTPParser.RULE_space_name);
      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 1692;
        this.name();
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    general_term() {
      let localctx = new General_termContext(this, this._ctx, this.state);
      this.enterRule(localctx, 436, _TPTPParser.RULE_general_term);
      try {
        this.state = 1700;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input, 124, this._ctx);
        switch (la_) {
          case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 1694;
            this.general_data();
            break;
          case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 1695;
            this.general_data();
            this.state = 1696;
            this.match(_TPTPParser.T__15);
            this.state = 1697;
            this.general_term();
            break;
          case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 1699;
            this.general_list();
            break;
        }
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    general_data() {
      let localctx = new General_dataContext(this, this._ctx, this.state);
      this.enterRule(localctx, 438, _TPTPParser.RULE_general_data);
      try {
        this.state = 1708;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input, 125, this._ctx);
        switch (la_) {
          case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 1702;
            this.atomic_word();
            break;
          case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 1703;
            this.general_function();
            break;
          case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 1704;
            this.variable();
            break;
          case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 1705;
            this.number();
            break;
          case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 1706;
            this.match(_TPTPParser.Distinct_object);
            break;
          case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 1707;
            this.formula_data();
            break;
        }
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    general_function() {
      let localctx = new General_functionContext(this, this._ctx, this.state);
      this.enterRule(localctx, 440, _TPTPParser.RULE_general_function);
      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 1710;
        this.atomic_word();
        this.state = 1711;
        this.match(_TPTPParser.T__11);
        this.state = 1712;
        this.general_terms();
        this.state = 1713;
        this.match(_TPTPParser.T__12);
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    formula_data() {
      let localctx = new Formula_dataContext(this, this._ctx, this.state);
      this.enterRule(localctx, 442, _TPTPParser.RULE_formula_data);
      try {
        this.state = 1735;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
          case 57:
            this.enterOuterAlt(localctx, 1);
            this.state = 1715;
            this.match(_TPTPParser.T__56);
            this.state = 1716;
            this.thf_formula();
            this.state = 1717;
            this.match(_TPTPParser.T__12);
            break;
          case 58:
            this.enterOuterAlt(localctx, 2);
            this.state = 1719;
            this.match(_TPTPParser.T__57);
            this.state = 1720;
            this.tff_formula();
            this.state = 1721;
            this.match(_TPTPParser.T__12);
            break;
          case 59:
            this.enterOuterAlt(localctx, 3);
            this.state = 1723;
            this.match(_TPTPParser.T__58);
            this.state = 1724;
            this.fof_formula();
            this.state = 1725;
            this.match(_TPTPParser.T__12);
            break;
          case 60:
            this.enterOuterAlt(localctx, 4);
            this.state = 1727;
            this.match(_TPTPParser.T__59);
            this.state = 1728;
            this.cnf_formula();
            this.state = 1729;
            this.match(_TPTPParser.T__12);
            break;
          case 61:
            this.enterOuterAlt(localctx, 5);
            this.state = 1731;
            this.match(_TPTPParser.T__60);
            this.state = 1732;
            this.fof_term();
            this.state = 1733;
            this.match(_TPTPParser.T__12);
            break;
          default:
            throw new Qn.error.NoViableAltException(this);
        }
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    general_list() {
      let localctx = new General_listContext(this, this._ctx, this.state);
      this.enterRule(localctx, 444, _TPTPParser.RULE_general_list);
      try {
        this.state = 1742;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
          case 18:
            this.enterOuterAlt(localctx, 1);
            this.state = 1737;
            this.match(_TPTPParser.T__17);
            break;
          case 14:
            this.enterOuterAlt(localctx, 2);
            this.state = 1738;
            this.match(_TPTPParser.T__13);
            this.state = 1739;
            this.general_terms();
            this.state = 1740;
            this.match(_TPTPParser.T__14);
            break;
          default:
            throw new Qn.error.NoViableAltException(this);
        }
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    general_terms() {
      let localctx = new General_termsContext(this, this._ctx, this.state);
      this.enterRule(localctx, 446, _TPTPParser.RULE_general_terms);
      var _la = 0;
      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 1744;
        this.general_term();
        this.state = 1748;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === 2) {
          this.state = 1745;
          this.comma_general_term();
          this.state = 1750;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    comma_general_term() {
      let localctx = new Comma_general_termContext(this, this._ctx, this.state);
      this.enterRule(localctx, 448, _TPTPParser.RULE_comma_general_term);
      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 1751;
        this.match(_TPTPParser.T__1);
        this.state = 1752;
        this.general_term();
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    name() {
      let localctx = new NameContext(this, this._ctx, this.state);
      this.enterRule(localctx, 450, _TPTPParser.RULE_name);
      try {
        this.state = 1756;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
          case 66:
          case 71:
            this.enterOuterAlt(localctx, 1);
            this.state = 1754;
            this.atomic_word();
            break;
          case 84:
            this.enterOuterAlt(localctx, 2);
            this.state = 1755;
            this.match(_TPTPParser.Integer);
            break;
          default:
            throw new Qn.error.NoViableAltException(this);
        }
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    atomic_word() {
      let localctx = new Atomic_wordContext(this, this._ctx, this.state);
      this.enterRule(localctx, 452, _TPTPParser.RULE_atomic_word);
      var _la = 0;
      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 1758;
        _la = this._input.LA(1);
        if (!(_la === 66 || _la === 71)) {
          this._errHandler.recoverInline(this);
        } else {
          this._errHandler.reportMatch(this);
          this.consume();
        }
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    atomic_defined_word() {
      let localctx = new Atomic_defined_wordContext(this, this._ctx, this.state);
      this.enterRule(localctx, 454, _TPTPParser.RULE_atomic_defined_word);
      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 1760;
        this.match(_TPTPParser.Dollar_word);
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    atomic_system_word() {
      let localctx = new Atomic_system_wordContext(this, this._ctx, this.state);
      this.enterRule(localctx, 456, _TPTPParser.RULE_atomic_system_word);
      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 1762;
        this.match(_TPTPParser.Dollar_dollar_word);
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    number() {
      let localctx = new NumberContext(this, this._ctx, this.state);
      this.enterRule(localctx, 458, _TPTPParser.RULE_number);
      var _la = 0;
      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 1764;
        _la = this._input.LA(1);
        if (!((_la - 78 & ~31) === 0 && (1 << _la - 78 & 73) !== 0)) {
          this._errHandler.recoverInline(this);
        } else {
          this._errHandler.reportMatch(this);
          this.consume();
        }
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    file_name() {
      let localctx = new File_nameContext(this, this._ctx, this.state);
      this.enterRule(localctx, 460, _TPTPParser.RULE_file_name);
      try {
        this.enterOuterAlt(localctx, 1);
        this.state = 1766;
        this.atomic_word();
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
    nothing() {
      let localctx = new NothingContext(this, this._ctx, this.state);
      this.enterRule(localctx, 462, _TPTPParser.RULE_nothing);
      try {
        this.enterOuterAlt(localctx, 1);
      } catch (re2) {
        if (re2 instanceof Qn.error.RecognitionException) {
          localctx.exception = re2;
          this._errHandler.reportError(this, re2);
          this._errHandler.recover(this, re2);
        } else {
          throw re2;
        }
      } finally {
        this.exitRule();
      }
      return localctx;
    }
  };
  TPTPParser.EOF = Qn.Token.EOF;
  TPTPParser.T__0 = 1;
  TPTPParser.T__1 = 2;
  TPTPParser.T__2 = 3;
  TPTPParser.T__3 = 4;
  TPTPParser.T__4 = 5;
  TPTPParser.T__5 = 6;
  TPTPParser.T__6 = 7;
  TPTPParser.T__7 = 8;
  TPTPParser.T__8 = 9;
  TPTPParser.T__9 = 10;
  TPTPParser.T__10 = 11;
  TPTPParser.T__11 = 12;
  TPTPParser.T__12 = 13;
  TPTPParser.T__13 = 14;
  TPTPParser.T__14 = 15;
  TPTPParser.T__15 = 16;
  TPTPParser.T__16 = 17;
  TPTPParser.T__17 = 18;
  TPTPParser.T__18 = 19;
  TPTPParser.T__19 = 20;
  TPTPParser.T__20 = 21;
  TPTPParser.T__21 = 22;
  TPTPParser.T__22 = 23;
  TPTPParser.T__23 = 24;
  TPTPParser.T__24 = 25;
  TPTPParser.T__25 = 26;
  TPTPParser.T__26 = 27;
  TPTPParser.T__27 = 28;
  TPTPParser.T__28 = 29;
  TPTPParser.T__29 = 30;
  TPTPParser.T__30 = 31;
  TPTPParser.T__31 = 32;
  TPTPParser.T__32 = 33;
  TPTPParser.T__33 = 34;
  TPTPParser.T__34 = 35;
  TPTPParser.T__35 = 36;
  TPTPParser.T__36 = 37;
  TPTPParser.T__37 = 38;
  TPTPParser.T__38 = 39;
  TPTPParser.T__39 = 40;
  TPTPParser.T__40 = 41;
  TPTPParser.T__41 = 42;
  TPTPParser.T__42 = 43;
  TPTPParser.T__43 = 44;
  TPTPParser.T__44 = 45;
  TPTPParser.T__45 = 46;
  TPTPParser.T__46 = 47;
  TPTPParser.T__47 = 48;
  TPTPParser.T__48 = 49;
  TPTPParser.T__49 = 50;
  TPTPParser.T__50 = 51;
  TPTPParser.T__51 = 52;
  TPTPParser.T__52 = 53;
  TPTPParser.T__53 = 54;
  TPTPParser.T__54 = 55;
  TPTPParser.T__55 = 56;
  TPTPParser.T__56 = 57;
  TPTPParser.T__57 = 58;
  TPTPParser.T__58 = 59;
  TPTPParser.T__59 = 60;
  TPTPParser.T__60 = 61;
  TPTPParser.WS = 62;
  TPTPParser.Comment_line = 63;
  TPTPParser.Comment_block = 64;
  TPTPParser.Not_star_slash = 65;
  TPTPParser.Single_quoted = 66;
  TPTPParser.Distinct_object = 67;
  TPTPParser.Dollar_word = 68;
  TPTPParser.Dollar_dollar_word = 69;
  TPTPParser.Upper_word = 70;
  TPTPParser.Lower_word = 71;
  TPTPParser.Vline = 72;
  TPTPParser.Star = 73;
  TPTPParser.Plus = 74;
  TPTPParser.Arrow = 75;
  TPTPParser.Less_sign = 76;
  TPTPParser.Hash = 77;
  TPTPParser.Real = 78;
  TPTPParser.Signed_real = 79;
  TPTPParser.Unsigned_real = 80;
  TPTPParser.Rational = 81;
  TPTPParser.Signed_rational = 82;
  TPTPParser.Unsigned_rational = 83;
  TPTPParser.Integer = 84;
  TPTPParser.Signed_integer = 85;
  TPTPParser.Unsigned_integer = 86;
  TPTPParser.Decimal = 87;
  TPTPParser.Positive_decimal = 88;
  TPTPParser.Decimal_exponent = 89;
  TPTPParser.Decimal_fraction = 90;
  TPTPParser.Dot_decimal = 91;
  TPTPParser.Exp_integer = 92;
  TPTPParser.Signed_exp_integer = 93;
  TPTPParser.Unsigned_exp_integer = 94;
  TPTPParser.Slash = 95;
  TPTPParser.Slosh = 96;
  TPTPParser.Percentage_sign = 97;
  TPTPParser.Double_quote = 98;
  TPTPParser.Single_quote = 99;
  TPTPParser.Dot = 100;
  TPTPParser.Slash_char = 101;
  TPTPParser.Slosh_char = 102;
  TPTPParser.Zero_numeric = 103;
  TPTPParser.Dollar = 104;
  TPTPParser.Printable_char = 105;
  TPTPParser.Viewable_char = 106;
  TPTPParser.RULE_tptp_file = 0;
  TPTPParser.RULE_tptp_input = 1;
  TPTPParser.RULE_annotated_formula = 2;
  TPTPParser.RULE_tpi_annotated = 3;
  TPTPParser.RULE_tpi_formula = 4;
  TPTPParser.RULE_thf_annotated = 5;
  TPTPParser.RULE_tff_annotated = 6;
  TPTPParser.RULE_tcf_annotated = 7;
  TPTPParser.RULE_fof_annotated = 8;
  TPTPParser.RULE_cnf_annotated = 9;
  TPTPParser.RULE_annotations = 10;
  TPTPParser.RULE_formula_role = 11;
  TPTPParser.RULE_thf_formula = 12;
  TPTPParser.RULE_thf_logic_formula = 13;
  TPTPParser.RULE_thf_binary_formula = 14;
  TPTPParser.RULE_thf_binary_nonassoc = 15;
  TPTPParser.RULE_thf_binary_assoc = 16;
  TPTPParser.RULE_thf_or_formula = 17;
  TPTPParser.RULE_thf_and_formula = 18;
  TPTPParser.RULE_thf_apply_formula = 19;
  TPTPParser.RULE_thf_unit_formula = 20;
  TPTPParser.RULE_thf_preunit_formula = 21;
  TPTPParser.RULE_thf_unitary_formula = 22;
  TPTPParser.RULE_thf_quantified_formula = 23;
  TPTPParser.RULE_thf_quantification = 24;
  TPTPParser.RULE_thf_variable_list = 25;
  TPTPParser.RULE_thf_typed_variable = 26;
  TPTPParser.RULE_thf_unary_formula = 27;
  TPTPParser.RULE_thf_prefix_unary = 28;
  TPTPParser.RULE_thf_infix_unary = 29;
  TPTPParser.RULE_thf_atomic_formula = 30;
  TPTPParser.RULE_thf_plain_atomic = 31;
  TPTPParser.RULE_thf_defined_atomic = 32;
  TPTPParser.RULE_thf_defined_term = 33;
  TPTPParser.RULE_thf_defined_infix = 34;
  TPTPParser.RULE_thf_system_atomic = 35;
  TPTPParser.RULE_thf_let = 36;
  TPTPParser.RULE_thf_let_types = 37;
  TPTPParser.RULE_thf_atom_typing_list = 38;
  TPTPParser.RULE_thf_let_defns = 39;
  TPTPParser.RULE_thf_let_defn = 40;
  TPTPParser.RULE_thf_let_defn_list = 41;
  TPTPParser.RULE_thf_unitary_term = 42;
  TPTPParser.RULE_thf_conn_term = 43;
  TPTPParser.RULE_thf_tuple = 44;
  TPTPParser.RULE_thf_fof_function = 45;
  TPTPParser.RULE_thf_arguments = 46;
  TPTPParser.RULE_thf_formula_list = 47;
  TPTPParser.RULE_comma_thf_logic_formula = 48;
  TPTPParser.RULE_thf_atom_typing = 49;
  TPTPParser.RULE_thf_top_level_type = 50;
  TPTPParser.RULE_thf_unitary_type = 51;
  TPTPParser.RULE_thf_apply_type = 52;
  TPTPParser.RULE_thf_binary_type = 53;
  TPTPParser.RULE_thf_mapping_type = 54;
  TPTPParser.RULE_thf_xprod_type = 55;
  TPTPParser.RULE_thf_union_type = 56;
  TPTPParser.RULE_thf_subtype = 57;
  TPTPParser.RULE_thf_definition = 58;
  TPTPParser.RULE_thf_sequent = 59;
  TPTPParser.RULE_tff_formula = 60;
  TPTPParser.RULE_tff_logic_formula = 61;
  TPTPParser.RULE_tff_binary_formula = 62;
  TPTPParser.RULE_tff_binary_nonassoc = 63;
  TPTPParser.RULE_tff_binary_assoc = 64;
  TPTPParser.RULE_tff_or_formula = 65;
  TPTPParser.RULE_tff_and_formula = 66;
  TPTPParser.RULE_tff_unit_formula = 67;
  TPTPParser.RULE_tff_preunit_formula = 68;
  TPTPParser.RULE_tff_unitary_formula = 69;
  TPTPParser.RULE_txf_unitary_formula = 70;
  TPTPParser.RULE_tff_quantified_formula = 71;
  TPTPParser.RULE_tff_variable_list = 72;
  TPTPParser.RULE_tff_variable = 73;
  TPTPParser.RULE_tff_typed_variable = 74;
  TPTPParser.RULE_tff_unary_formula = 75;
  TPTPParser.RULE_tff_prefix_unary = 76;
  TPTPParser.RULE_tff_infix_unary = 77;
  TPTPParser.RULE_tff_atomic_formula = 78;
  TPTPParser.RULE_tff_plain_atomic = 79;
  TPTPParser.RULE_tff_defined_atomic = 80;
  TPTPParser.RULE_tff_defined_plain = 81;
  TPTPParser.RULE_tff_defined_infix = 82;
  TPTPParser.RULE_tff_system_atomic = 83;
  TPTPParser.RULE_txf_let = 84;
  TPTPParser.RULE_txf_let_types = 85;
  TPTPParser.RULE_tff_atom_typing_list = 86;
  TPTPParser.RULE_txf_let_defns = 87;
  TPTPParser.RULE_txf_let_defn = 88;
  TPTPParser.RULE_txf_let_LHS = 89;
  TPTPParser.RULE_txf_let_defn_list = 90;
  TPTPParser.RULE_nxf_atom = 91;
  TPTPParser.RULE_tff_term = 92;
  TPTPParser.RULE_tff_unitary_term = 93;
  TPTPParser.RULE_txf_tuple = 94;
  TPTPParser.RULE_tff_arguments = 95;
  TPTPParser.RULE_comma_tff_term = 96;
  TPTPParser.RULE_tff_atom_typing = 97;
  TPTPParser.RULE_tff_top_level_type = 98;
  TPTPParser.RULE_tff_non_atomic_type = 99;
  TPTPParser.RULE_tf1_quantified_type = 100;
  TPTPParser.RULE_tff_monotype = 101;
  TPTPParser.RULE_tff_unitary_type = 102;
  TPTPParser.RULE_tff_atomic_type = 103;
  TPTPParser.RULE_tff_type_arguments = 104;
  TPTPParser.RULE_tff_mapping_type = 105;
  TPTPParser.RULE_tff_xprod_type = 106;
  TPTPParser.RULE_txf_tuple_type = 107;
  TPTPParser.RULE_tff_type_list = 108;
  TPTPParser.RULE_tff_subtype = 109;
  TPTPParser.RULE_txf_definition = 110;
  TPTPParser.RULE_txf_sequent = 111;
  TPTPParser.RULE_nhf_long_connective = 112;
  TPTPParser.RULE_nhf_parameter_list = 113;
  TPTPParser.RULE_nhf_parameter = 114;
  TPTPParser.RULE_nhf_key_pair = 115;
  TPTPParser.RULE_nxf_long_connective = 116;
  TPTPParser.RULE_nxf_parameter_list = 117;
  TPTPParser.RULE_nxf_parameter = 118;
  TPTPParser.RULE_nxf_key_pair = 119;
  TPTPParser.RULE_ntf_connective_name = 120;
  TPTPParser.RULE_ntf_index = 121;
  TPTPParser.RULE_ntf_short_connective = 122;
  TPTPParser.RULE_tcf_formula = 123;
  TPTPParser.RULE_tcf_logic_formula = 124;
  TPTPParser.RULE_tcf_quantified_formula = 125;
  TPTPParser.RULE_fof_formula = 126;
  TPTPParser.RULE_fof_logic_formula = 127;
  TPTPParser.RULE_fof_binary_formula = 128;
  TPTPParser.RULE_fof_binary_nonassoc = 129;
  TPTPParser.RULE_fof_binary_assoc = 130;
  TPTPParser.RULE_fof_or_formula = 131;
  TPTPParser.RULE_fof_and_formula = 132;
  TPTPParser.RULE_fof_unary_formula = 133;
  TPTPParser.RULE_fof_infix_unary = 134;
  TPTPParser.RULE_fof_unit_formula = 135;
  TPTPParser.RULE_fof_unitary_formula = 136;
  TPTPParser.RULE_fof_quantified_formula = 137;
  TPTPParser.RULE_fof_variable_list = 138;
  TPTPParser.RULE_fof_atomic_formula = 139;
  TPTPParser.RULE_fof_plain_atomic_formula = 140;
  TPTPParser.RULE_fof_defined_atomic_formula = 141;
  TPTPParser.RULE_fof_defined_plain_formula = 142;
  TPTPParser.RULE_fof_defined_infix_formula = 143;
  TPTPParser.RULE_fof_system_atomic_formula = 144;
  TPTPParser.RULE_fof_plain_term = 145;
  TPTPParser.RULE_fof_defined_term = 146;
  TPTPParser.RULE_fof_defined_atomic_term = 147;
  TPTPParser.RULE_fof_defined_plain_term = 148;
  TPTPParser.RULE_fof_system_term = 149;
  TPTPParser.RULE_fof_arguments = 150;
  TPTPParser.RULE_fof_term = 151;
  TPTPParser.RULE_fof_function_term = 152;
  TPTPParser.RULE_fof_sequent = 153;
  TPTPParser.RULE_fof_formula_tuple = 154;
  TPTPParser.RULE_fof_formula_tuple_list = 155;
  TPTPParser.RULE_comma_fof_logic_formula = 156;
  TPTPParser.RULE_cnf_formula = 157;
  TPTPParser.RULE_cnf_disjunction = 158;
  TPTPParser.RULE_cnf_literal = 159;
  TPTPParser.RULE_thf_quantifier = 160;
  TPTPParser.RULE_thf_unary_connective = 161;
  TPTPParser.RULE_th1_quantifier = 162;
  TPTPParser.RULE_th0_quantifier = 163;
  TPTPParser.RULE_subtype_sign = 164;
  TPTPParser.RULE_tff_unary_connective = 165;
  TPTPParser.RULE_tff_quantifier = 166;
  TPTPParser.RULE_fof_quantifier = 167;
  TPTPParser.RULE_nonassoc_connective = 168;
  TPTPParser.RULE_assoc_connective = 169;
  TPTPParser.RULE_unary_connective = 170;
  TPTPParser.RULE_gentzen_arrow = 171;
  TPTPParser.RULE_assignment = 172;
  TPTPParser.RULE_identical = 173;
  TPTPParser.RULE_type_constant = 174;
  TPTPParser.RULE_type_functor = 175;
  TPTPParser.RULE_defined_type = 176;
  TPTPParser.RULE_atom = 177;
  TPTPParser.RULE_untyped_atom = 178;
  TPTPParser.RULE_defined_infix_pred = 179;
  TPTPParser.RULE_infix_equality = 180;
  TPTPParser.RULE_infix_inequality = 181;
  TPTPParser.RULE_constant = 182;
  TPTPParser.RULE_functor = 183;
  TPTPParser.RULE_defined_constant = 184;
  TPTPParser.RULE_defined_functor = 185;
  TPTPParser.RULE_system_constant = 186;
  TPTPParser.RULE_system_functor = 187;
  TPTPParser.RULE_def_or_sys_constant = 188;
  TPTPParser.RULE_th1_defined_term = 189;
  TPTPParser.RULE_defined_term = 190;
  TPTPParser.RULE_variable = 191;
  TPTPParser.RULE_source = 192;
  TPTPParser.RULE_sources = 193;
  TPTPParser.RULE_dag_source = 194;
  TPTPParser.RULE_inference_record = 195;
  TPTPParser.RULE_inference_rule = 196;
  TPTPParser.RULE_internal_source = 197;
  TPTPParser.RULE_intro_type = 198;
  TPTPParser.RULE_external_source = 199;
  TPTPParser.RULE_file_source = 200;
  TPTPParser.RULE_file_info = 201;
  TPTPParser.RULE_theory = 202;
  TPTPParser.RULE_theory_name = 203;
  TPTPParser.RULE_creator_source = 204;
  TPTPParser.RULE_creator_name = 205;
  TPTPParser.RULE_parents = 206;
  TPTPParser.RULE_parent_list = 207;
  TPTPParser.RULE_comma_parent_info = 208;
  TPTPParser.RULE_parent_info = 209;
  TPTPParser.RULE_parent_details = 210;
  TPTPParser.RULE_optional_info = 211;
  TPTPParser.RULE_useful_info = 212;
  TPTPParser.RULE_include = 213;
  TPTPParser.RULE_include_optionals = 214;
  TPTPParser.RULE_formula_selection = 215;
  TPTPParser.RULE_name_list = 216;
  TPTPParser.RULE_space_name = 217;
  TPTPParser.RULE_general_term = 218;
  TPTPParser.RULE_general_data = 219;
  TPTPParser.RULE_general_function = 220;
  TPTPParser.RULE_formula_data = 221;
  TPTPParser.RULE_general_list = 222;
  TPTPParser.RULE_general_terms = 223;
  TPTPParser.RULE_comma_general_term = 224;
  TPTPParser.RULE_name = 225;
  TPTPParser.RULE_atomic_word = 226;
  TPTPParser.RULE_atomic_defined_word = 227;
  TPTPParser.RULE_atomic_system_word = 228;
  TPTPParser.RULE_number = 229;
  TPTPParser.RULE_file_name = 230;
  TPTPParser.RULE_nothing = 231;
  var Tptp_fileContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_tptp_file;
    }
    EOF() {
      return this.getToken(TPTPParser.EOF, 0);
    }
    tptp_input = function(i2) {
      if (i2 === void 0) {
        i2 = null;
      }
      if (i2 === null) {
        return this.getTypedRuleContexts(Tptp_inputContext);
      } else {
        return this.getTypedRuleContext(Tptp_inputContext, i2);
      }
    };
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterTptp_file(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitTptp_file(this);
      }
    }
  };
  var Tptp_inputContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_tptp_input;
    }
    annotated_formula() {
      return this.getTypedRuleContext(Annotated_formulaContext, 0);
    }
    include() {
      return this.getTypedRuleContext(IncludeContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterTptp_input(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitTptp_input(this);
      }
    }
  };
  var Annotated_formulaContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_annotated_formula;
    }
    thf_annotated() {
      return this.getTypedRuleContext(Thf_annotatedContext, 0);
    }
    tff_annotated() {
      return this.getTypedRuleContext(Tff_annotatedContext, 0);
    }
    tcf_annotated() {
      return this.getTypedRuleContext(Tcf_annotatedContext, 0);
    }
    fof_annotated() {
      return this.getTypedRuleContext(Fof_annotatedContext, 0);
    }
    cnf_annotated() {
      return this.getTypedRuleContext(Cnf_annotatedContext, 0);
    }
    tpi_annotated() {
      return this.getTypedRuleContext(Tpi_annotatedContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterAnnotated_formula(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitAnnotated_formula(this);
      }
    }
  };
  var Tpi_annotatedContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_tpi_annotated;
    }
    name() {
      return this.getTypedRuleContext(NameContext, 0);
    }
    formula_role() {
      return this.getTypedRuleContext(Formula_roleContext, 0);
    }
    tpi_formula() {
      return this.getTypedRuleContext(Tpi_formulaContext, 0);
    }
    annotations() {
      return this.getTypedRuleContext(AnnotationsContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterTpi_annotated(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitTpi_annotated(this);
      }
    }
  };
  var Tpi_formulaContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_tpi_formula;
    }
    fof_formula() {
      return this.getTypedRuleContext(Fof_formulaContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterTpi_formula(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitTpi_formula(this);
      }
    }
  };
  var Thf_annotatedContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_thf_annotated;
    }
    name() {
      return this.getTypedRuleContext(NameContext, 0);
    }
    formula_role() {
      return this.getTypedRuleContext(Formula_roleContext, 0);
    }
    thf_formula() {
      return this.getTypedRuleContext(Thf_formulaContext, 0);
    }
    annotations() {
      return this.getTypedRuleContext(AnnotationsContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterThf_annotated(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitThf_annotated(this);
      }
    }
  };
  var Tff_annotatedContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_tff_annotated;
    }
    name() {
      return this.getTypedRuleContext(NameContext, 0);
    }
    formula_role() {
      return this.getTypedRuleContext(Formula_roleContext, 0);
    }
    tff_formula() {
      return this.getTypedRuleContext(Tff_formulaContext, 0);
    }
    annotations() {
      return this.getTypedRuleContext(AnnotationsContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterTff_annotated(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitTff_annotated(this);
      }
    }
  };
  var Tcf_annotatedContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_tcf_annotated;
    }
    name() {
      return this.getTypedRuleContext(NameContext, 0);
    }
    formula_role() {
      return this.getTypedRuleContext(Formula_roleContext, 0);
    }
    tcf_formula() {
      return this.getTypedRuleContext(Tcf_formulaContext, 0);
    }
    annotations() {
      return this.getTypedRuleContext(AnnotationsContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterTcf_annotated(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitTcf_annotated(this);
      }
    }
  };
  var Fof_annotatedContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_fof_annotated;
    }
    name() {
      return this.getTypedRuleContext(NameContext, 0);
    }
    formula_role() {
      return this.getTypedRuleContext(Formula_roleContext, 0);
    }
    fof_formula() {
      return this.getTypedRuleContext(Fof_formulaContext, 0);
    }
    annotations() {
      return this.getTypedRuleContext(AnnotationsContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterFof_annotated(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitFof_annotated(this);
      }
    }
  };
  var Cnf_annotatedContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_cnf_annotated;
    }
    name() {
      return this.getTypedRuleContext(NameContext, 0);
    }
    formula_role() {
      return this.getTypedRuleContext(Formula_roleContext, 0);
    }
    cnf_formula() {
      return this.getTypedRuleContext(Cnf_formulaContext, 0);
    }
    annotations() {
      return this.getTypedRuleContext(AnnotationsContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterCnf_annotated(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitCnf_annotated(this);
      }
    }
  };
  var AnnotationsContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_annotations;
    }
    source() {
      return this.getTypedRuleContext(SourceContext, 0);
    }
    optional_info() {
      return this.getTypedRuleContext(Optional_infoContext, 0);
    }
    nothing() {
      return this.getTypedRuleContext(NothingContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterAnnotations(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitAnnotations(this);
      }
    }
  };
  var Formula_roleContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_formula_role;
    }
    Lower_word() {
      return this.getToken(TPTPParser.Lower_word, 0);
    }
    general_term() {
      return this.getTypedRuleContext(General_termContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterFormula_role(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitFormula_role(this);
      }
    }
  };
  var Thf_formulaContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_thf_formula;
    }
    thf_logic_formula() {
      return this.getTypedRuleContext(Thf_logic_formulaContext, 0);
    }
    thf_atom_typing() {
      return this.getTypedRuleContext(Thf_atom_typingContext, 0);
    }
    thf_subtype() {
      return this.getTypedRuleContext(Thf_subtypeContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterThf_formula(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitThf_formula(this);
      }
    }
  };
  var Thf_logic_formulaContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_thf_logic_formula;
    }
    thf_unitary_formula() {
      return this.getTypedRuleContext(Thf_unitary_formulaContext, 0);
    }
    thf_unary_formula() {
      return this.getTypedRuleContext(Thf_unary_formulaContext, 0);
    }
    thf_binary_formula() {
      return this.getTypedRuleContext(Thf_binary_formulaContext, 0);
    }
    thf_defined_infix() {
      return this.getTypedRuleContext(Thf_defined_infixContext, 0);
    }
    thf_definition() {
      return this.getTypedRuleContext(Thf_definitionContext, 0);
    }
    thf_sequent() {
      return this.getTypedRuleContext(Thf_sequentContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterThf_logic_formula(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitThf_logic_formula(this);
      }
    }
  };
  var Thf_binary_formulaContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_thf_binary_formula;
    }
    thf_binary_nonassoc() {
      return this.getTypedRuleContext(Thf_binary_nonassocContext, 0);
    }
    thf_binary_assoc() {
      return this.getTypedRuleContext(Thf_binary_assocContext, 0);
    }
    thf_binary_type() {
      return this.getTypedRuleContext(Thf_binary_typeContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterThf_binary_formula(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitThf_binary_formula(this);
      }
    }
  };
  var Thf_binary_nonassocContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_thf_binary_nonassoc;
    }
    thf_unit_formula = function(i2) {
      if (i2 === void 0) {
        i2 = null;
      }
      if (i2 === null) {
        return this.getTypedRuleContexts(Thf_unit_formulaContext);
      } else {
        return this.getTypedRuleContext(Thf_unit_formulaContext, i2);
      }
    };
    nonassoc_connective() {
      return this.getTypedRuleContext(Nonassoc_connectiveContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterThf_binary_nonassoc(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitThf_binary_nonassoc(this);
      }
    }
  };
  var Thf_binary_assocContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_thf_binary_assoc;
    }
    thf_or_formula() {
      return this.getTypedRuleContext(Thf_or_formulaContext, 0);
    }
    thf_and_formula() {
      return this.getTypedRuleContext(Thf_and_formulaContext, 0);
    }
    thf_apply_formula() {
      return this.getTypedRuleContext(Thf_apply_formulaContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterThf_binary_assoc(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitThf_binary_assoc(this);
      }
    }
  };
  var Thf_or_formulaContext = class _Thf_or_formulaContext extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_thf_or_formula;
    }
    thf_unit_formula = function(i2) {
      if (i2 === void 0) {
        i2 = null;
      }
      if (i2 === null) {
        return this.getTypedRuleContexts(Thf_unit_formulaContext);
      } else {
        return this.getTypedRuleContext(Thf_unit_formulaContext, i2);
      }
    };
    Vline() {
      return this.getToken(TPTPParser.Vline, 0);
    }
    thf_or_formula() {
      return this.getTypedRuleContext(_Thf_or_formulaContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterThf_or_formula(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitThf_or_formula(this);
      }
    }
  };
  var Thf_and_formulaContext = class _Thf_and_formulaContext extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_thf_and_formula;
    }
    thf_unit_formula = function(i2) {
      if (i2 === void 0) {
        i2 = null;
      }
      if (i2 === null) {
        return this.getTypedRuleContexts(Thf_unit_formulaContext);
      } else {
        return this.getTypedRuleContext(Thf_unit_formulaContext, i2);
      }
    };
    thf_and_formula() {
      return this.getTypedRuleContext(_Thf_and_formulaContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterThf_and_formula(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitThf_and_formula(this);
      }
    }
  };
  var Thf_apply_formulaContext = class _Thf_apply_formulaContext extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_thf_apply_formula;
    }
    thf_unit_formula = function(i2) {
      if (i2 === void 0) {
        i2 = null;
      }
      if (i2 === null) {
        return this.getTypedRuleContexts(Thf_unit_formulaContext);
      } else {
        return this.getTypedRuleContext(Thf_unit_formulaContext, i2);
      }
    };
    thf_apply_formula() {
      return this.getTypedRuleContext(_Thf_apply_formulaContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterThf_apply_formula(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitThf_apply_formula(this);
      }
    }
  };
  var Thf_unit_formulaContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_thf_unit_formula;
    }
    thf_unitary_formula() {
      return this.getTypedRuleContext(Thf_unitary_formulaContext, 0);
    }
    thf_unary_formula() {
      return this.getTypedRuleContext(Thf_unary_formulaContext, 0);
    }
    thf_defined_infix() {
      return this.getTypedRuleContext(Thf_defined_infixContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterThf_unit_formula(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitThf_unit_formula(this);
      }
    }
  };
  var Thf_preunit_formulaContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_thf_preunit_formula;
    }
    thf_unitary_formula() {
      return this.getTypedRuleContext(Thf_unitary_formulaContext, 0);
    }
    thf_prefix_unary() {
      return this.getTypedRuleContext(Thf_prefix_unaryContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterThf_preunit_formula(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitThf_preunit_formula(this);
      }
    }
  };
  var Thf_unitary_formulaContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_thf_unitary_formula;
    }
    thf_quantified_formula() {
      return this.getTypedRuleContext(Thf_quantified_formulaContext, 0);
    }
    thf_atomic_formula() {
      return this.getTypedRuleContext(Thf_atomic_formulaContext, 0);
    }
    variable() {
      return this.getTypedRuleContext(VariableContext, 0);
    }
    thf_logic_formula() {
      return this.getTypedRuleContext(Thf_logic_formulaContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterThf_unitary_formula(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitThf_unitary_formula(this);
      }
    }
  };
  var Thf_quantified_formulaContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_thf_quantified_formula;
    }
    thf_quantification() {
      return this.getTypedRuleContext(Thf_quantificationContext, 0);
    }
    thf_unit_formula() {
      return this.getTypedRuleContext(Thf_unit_formulaContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterThf_quantified_formula(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitThf_quantified_formula(this);
      }
    }
  };
  var Thf_quantificationContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_thf_quantification;
    }
    thf_quantifier() {
      return this.getTypedRuleContext(Thf_quantifierContext, 0);
    }
    thf_variable_list() {
      return this.getTypedRuleContext(Thf_variable_listContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterThf_quantification(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitThf_quantification(this);
      }
    }
  };
  var Thf_variable_listContext = class _Thf_variable_listContext extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_thf_variable_list;
    }
    thf_typed_variable() {
      return this.getTypedRuleContext(Thf_typed_variableContext, 0);
    }
    thf_variable_list() {
      return this.getTypedRuleContext(_Thf_variable_listContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterThf_variable_list(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitThf_variable_list(this);
      }
    }
  };
  var Thf_typed_variableContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_thf_typed_variable;
    }
    variable() {
      return this.getTypedRuleContext(VariableContext, 0);
    }
    thf_top_level_type() {
      return this.getTypedRuleContext(Thf_top_level_typeContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterThf_typed_variable(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitThf_typed_variable(this);
      }
    }
  };
  var Thf_unary_formulaContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_thf_unary_formula;
    }
    thf_prefix_unary() {
      return this.getTypedRuleContext(Thf_prefix_unaryContext, 0);
    }
    thf_infix_unary() {
      return this.getTypedRuleContext(Thf_infix_unaryContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterThf_unary_formula(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitThf_unary_formula(this);
      }
    }
  };
  var Thf_prefix_unaryContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_thf_prefix_unary;
    }
    thf_unary_connective() {
      return this.getTypedRuleContext(Thf_unary_connectiveContext, 0);
    }
    thf_preunit_formula() {
      return this.getTypedRuleContext(Thf_preunit_formulaContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterThf_prefix_unary(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitThf_prefix_unary(this);
      }
    }
  };
  var Thf_infix_unaryContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_thf_infix_unary;
    }
    thf_unitary_term = function(i2) {
      if (i2 === void 0) {
        i2 = null;
      }
      if (i2 === null) {
        return this.getTypedRuleContexts(Thf_unitary_termContext);
      } else {
        return this.getTypedRuleContext(Thf_unitary_termContext, i2);
      }
    };
    infix_inequality() {
      return this.getTypedRuleContext(Infix_inequalityContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterThf_infix_unary(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitThf_infix_unary(this);
      }
    }
  };
  var Thf_atomic_formulaContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_thf_atomic_formula;
    }
    thf_plain_atomic() {
      return this.getTypedRuleContext(Thf_plain_atomicContext, 0);
    }
    thf_defined_atomic() {
      return this.getTypedRuleContext(Thf_defined_atomicContext, 0);
    }
    thf_system_atomic() {
      return this.getTypedRuleContext(Thf_system_atomicContext, 0);
    }
    thf_fof_function() {
      return this.getTypedRuleContext(Thf_fof_functionContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterThf_atomic_formula(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitThf_atomic_formula(this);
      }
    }
  };
  var Thf_plain_atomicContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_thf_plain_atomic;
    }
    constant() {
      return this.getTypedRuleContext(ConstantContext, 0);
    }
    thf_tuple() {
      return this.getTypedRuleContext(Thf_tupleContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterThf_plain_atomic(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitThf_plain_atomic(this);
      }
    }
  };
  var Thf_defined_atomicContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_thf_defined_atomic;
    }
    defined_constant() {
      return this.getTypedRuleContext(Defined_constantContext, 0);
    }
    thf_defined_term() {
      return this.getTypedRuleContext(Thf_defined_termContext, 0);
    }
    thf_conn_term() {
      return this.getTypedRuleContext(Thf_conn_termContext, 0);
    }
    nhf_long_connective() {
      return this.getTypedRuleContext(Nhf_long_connectiveContext, 0);
    }
    thf_let() {
      return this.getTypedRuleContext(Thf_letContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterThf_defined_atomic(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitThf_defined_atomic(this);
      }
    }
  };
  var Thf_defined_termContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_thf_defined_term;
    }
    defined_term() {
      return this.getTypedRuleContext(Defined_termContext, 0);
    }
    th1_defined_term() {
      return this.getTypedRuleContext(Th1_defined_termContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterThf_defined_term(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitThf_defined_term(this);
      }
    }
  };
  var Thf_defined_infixContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_thf_defined_infix;
    }
    thf_unitary_term = function(i2) {
      if (i2 === void 0) {
        i2 = null;
      }
      if (i2 === null) {
        return this.getTypedRuleContexts(Thf_unitary_termContext);
      } else {
        return this.getTypedRuleContext(Thf_unitary_termContext, i2);
      }
    };
    defined_infix_pred() {
      return this.getTypedRuleContext(Defined_infix_predContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterThf_defined_infix(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitThf_defined_infix(this);
      }
    }
  };
  var Thf_system_atomicContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_thf_system_atomic;
    }
    system_constant() {
      return this.getTypedRuleContext(System_constantContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterThf_system_atomic(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitThf_system_atomic(this);
      }
    }
  };
  var Thf_letContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_thf_let;
    }
    thf_let_types() {
      return this.getTypedRuleContext(Thf_let_typesContext, 0);
    }
    thf_let_defns() {
      return this.getTypedRuleContext(Thf_let_defnsContext, 0);
    }
    thf_logic_formula() {
      return this.getTypedRuleContext(Thf_logic_formulaContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterThf_let(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitThf_let(this);
      }
    }
  };
  var Thf_let_typesContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_thf_let_types;
    }
    thf_atom_typing() {
      return this.getTypedRuleContext(Thf_atom_typingContext, 0);
    }
    thf_atom_typing_list() {
      return this.getTypedRuleContext(Thf_atom_typing_listContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterThf_let_types(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitThf_let_types(this);
      }
    }
  };
  var Thf_atom_typing_listContext = class _Thf_atom_typing_listContext extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_thf_atom_typing_list;
    }
    thf_atom_typing() {
      return this.getTypedRuleContext(Thf_atom_typingContext, 0);
    }
    thf_atom_typing_list() {
      return this.getTypedRuleContext(_Thf_atom_typing_listContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterThf_atom_typing_list(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitThf_atom_typing_list(this);
      }
    }
  };
  var Thf_let_defnsContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_thf_let_defns;
    }
    thf_let_defn() {
      return this.getTypedRuleContext(Thf_let_defnContext, 0);
    }
    thf_let_defn_list() {
      return this.getTypedRuleContext(Thf_let_defn_listContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterThf_let_defns(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitThf_let_defns(this);
      }
    }
  };
  var Thf_let_defnContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_thf_let_defn;
    }
    thf_logic_formula = function(i2) {
      if (i2 === void 0) {
        i2 = null;
      }
      if (i2 === null) {
        return this.getTypedRuleContexts(Thf_logic_formulaContext);
      } else {
        return this.getTypedRuleContext(Thf_logic_formulaContext, i2);
      }
    };
    assignment() {
      return this.getTypedRuleContext(AssignmentContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterThf_let_defn(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitThf_let_defn(this);
      }
    }
  };
  var Thf_let_defn_listContext = class _Thf_let_defn_listContext extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_thf_let_defn_list;
    }
    thf_let_defn() {
      return this.getTypedRuleContext(Thf_let_defnContext, 0);
    }
    thf_let_defn_list() {
      return this.getTypedRuleContext(_Thf_let_defn_listContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterThf_let_defn_list(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitThf_let_defn_list(this);
      }
    }
  };
  var Thf_unitary_termContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_thf_unitary_term;
    }
    thf_atomic_formula() {
      return this.getTypedRuleContext(Thf_atomic_formulaContext, 0);
    }
    variable() {
      return this.getTypedRuleContext(VariableContext, 0);
    }
    thf_logic_formula() {
      return this.getTypedRuleContext(Thf_logic_formulaContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterThf_unitary_term(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitThf_unitary_term(this);
      }
    }
  };
  var Thf_conn_termContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_thf_conn_term;
    }
    nonassoc_connective() {
      return this.getTypedRuleContext(Nonassoc_connectiveContext, 0);
    }
    assoc_connective() {
      return this.getTypedRuleContext(Assoc_connectiveContext, 0);
    }
    infix_equality() {
      return this.getTypedRuleContext(Infix_equalityContext, 0);
    }
    infix_inequality() {
      return this.getTypedRuleContext(Infix_inequalityContext, 0);
    }
    thf_unary_connective() {
      return this.getTypedRuleContext(Thf_unary_connectiveContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterThf_conn_term(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitThf_conn_term(this);
      }
    }
  };
  var Thf_tupleContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_thf_tuple;
    }
    thf_formula_list() {
      return this.getTypedRuleContext(Thf_formula_listContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterThf_tuple(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitThf_tuple(this);
      }
    }
  };
  var Thf_fof_functionContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_thf_fof_function;
    }
    functor() {
      return this.getTypedRuleContext(FunctorContext, 0);
    }
    thf_arguments() {
      return this.getTypedRuleContext(Thf_argumentsContext, 0);
    }
    defined_functor() {
      return this.getTypedRuleContext(Defined_functorContext, 0);
    }
    system_functor() {
      return this.getTypedRuleContext(System_functorContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterThf_fof_function(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitThf_fof_function(this);
      }
    }
  };
  var Thf_argumentsContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_thf_arguments;
    }
    thf_formula_list() {
      return this.getTypedRuleContext(Thf_formula_listContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterThf_arguments(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitThf_arguments(this);
      }
    }
  };
  var Thf_formula_listContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_thf_formula_list;
    }
    thf_logic_formula() {
      return this.getTypedRuleContext(Thf_logic_formulaContext, 0);
    }
    comma_thf_logic_formula = function(i2) {
      if (i2 === void 0) {
        i2 = null;
      }
      if (i2 === null) {
        return this.getTypedRuleContexts(Comma_thf_logic_formulaContext);
      } else {
        return this.getTypedRuleContext(Comma_thf_logic_formulaContext, i2);
      }
    };
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterThf_formula_list(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitThf_formula_list(this);
      }
    }
  };
  var Comma_thf_logic_formulaContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_comma_thf_logic_formula;
    }
    thf_logic_formula() {
      return this.getTypedRuleContext(Thf_logic_formulaContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterComma_thf_logic_formula(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitComma_thf_logic_formula(this);
      }
    }
  };
  var Thf_atom_typingContext = class _Thf_atom_typingContext extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_thf_atom_typing;
    }
    untyped_atom() {
      return this.getTypedRuleContext(Untyped_atomContext, 0);
    }
    thf_top_level_type() {
      return this.getTypedRuleContext(Thf_top_level_typeContext, 0);
    }
    thf_atom_typing() {
      return this.getTypedRuleContext(_Thf_atom_typingContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterThf_atom_typing(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitThf_atom_typing(this);
      }
    }
  };
  var Thf_top_level_typeContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_thf_top_level_type;
    }
    thf_unitary_type() {
      return this.getTypedRuleContext(Thf_unitary_typeContext, 0);
    }
    thf_mapping_type() {
      return this.getTypedRuleContext(Thf_mapping_typeContext, 0);
    }
    thf_apply_type() {
      return this.getTypedRuleContext(Thf_apply_typeContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterThf_top_level_type(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitThf_top_level_type(this);
      }
    }
  };
  var Thf_unitary_typeContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_thf_unitary_type;
    }
    thf_unitary_formula() {
      return this.getTypedRuleContext(Thf_unitary_formulaContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterThf_unitary_type(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitThf_unitary_type(this);
      }
    }
  };
  var Thf_apply_typeContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_thf_apply_type;
    }
    thf_apply_formula() {
      return this.getTypedRuleContext(Thf_apply_formulaContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterThf_apply_type(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitThf_apply_type(this);
      }
    }
  };
  var Thf_binary_typeContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_thf_binary_type;
    }
    thf_mapping_type() {
      return this.getTypedRuleContext(Thf_mapping_typeContext, 0);
    }
    thf_xprod_type() {
      return this.getTypedRuleContext(Thf_xprod_typeContext, 0);
    }
    thf_union_type() {
      return this.getTypedRuleContext(Thf_union_typeContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterThf_binary_type(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitThf_binary_type(this);
      }
    }
  };
  var Thf_mapping_typeContext = class _Thf_mapping_typeContext extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_thf_mapping_type;
    }
    thf_unitary_type = function(i2) {
      if (i2 === void 0) {
        i2 = null;
      }
      if (i2 === null) {
        return this.getTypedRuleContexts(Thf_unitary_typeContext);
      } else {
        return this.getTypedRuleContext(Thf_unitary_typeContext, i2);
      }
    };
    Arrow() {
      return this.getToken(TPTPParser.Arrow, 0);
    }
    thf_mapping_type() {
      return this.getTypedRuleContext(_Thf_mapping_typeContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterThf_mapping_type(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitThf_mapping_type(this);
      }
    }
  };
  var Thf_xprod_typeContext = class _Thf_xprod_typeContext extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_thf_xprod_type;
    }
    thf_unitary_type = function(i2) {
      if (i2 === void 0) {
        i2 = null;
      }
      if (i2 === null) {
        return this.getTypedRuleContexts(Thf_unitary_typeContext);
      } else {
        return this.getTypedRuleContext(Thf_unitary_typeContext, i2);
      }
    };
    Star() {
      return this.getToken(TPTPParser.Star, 0);
    }
    thf_xprod_type() {
      return this.getTypedRuleContext(_Thf_xprod_typeContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterThf_xprod_type(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitThf_xprod_type(this);
      }
    }
  };
  var Thf_union_typeContext = class _Thf_union_typeContext extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_thf_union_type;
    }
    thf_unitary_type = function(i2) {
      if (i2 === void 0) {
        i2 = null;
      }
      if (i2 === null) {
        return this.getTypedRuleContexts(Thf_unitary_typeContext);
      } else {
        return this.getTypedRuleContext(Thf_unitary_typeContext, i2);
      }
    };
    Plus() {
      return this.getToken(TPTPParser.Plus, 0);
    }
    thf_union_type() {
      return this.getTypedRuleContext(_Thf_union_typeContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterThf_union_type(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitThf_union_type(this);
      }
    }
  };
  var Thf_subtypeContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_thf_subtype;
    }
    untyped_atom() {
      return this.getTypedRuleContext(Untyped_atomContext, 0);
    }
    subtype_sign() {
      return this.getTypedRuleContext(Subtype_signContext, 0);
    }
    atom() {
      return this.getTypedRuleContext(AtomContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterThf_subtype(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitThf_subtype(this);
      }
    }
  };
  var Thf_definitionContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_thf_definition;
    }
    thf_atomic_formula() {
      return this.getTypedRuleContext(Thf_atomic_formulaContext, 0);
    }
    identical() {
      return this.getTypedRuleContext(IdenticalContext, 0);
    }
    thf_logic_formula() {
      return this.getTypedRuleContext(Thf_logic_formulaContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterThf_definition(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitThf_definition(this);
      }
    }
  };
  var Thf_sequentContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_thf_sequent;
    }
    thf_tuple = function(i2) {
      if (i2 === void 0) {
        i2 = null;
      }
      if (i2 === null) {
        return this.getTypedRuleContexts(Thf_tupleContext);
      } else {
        return this.getTypedRuleContext(Thf_tupleContext, i2);
      }
    };
    gentzen_arrow() {
      return this.getTypedRuleContext(Gentzen_arrowContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterThf_sequent(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitThf_sequent(this);
      }
    }
  };
  var Tff_formulaContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_tff_formula;
    }
    tff_logic_formula() {
      return this.getTypedRuleContext(Tff_logic_formulaContext, 0);
    }
    tff_atom_typing() {
      return this.getTypedRuleContext(Tff_atom_typingContext, 0);
    }
    tff_subtype() {
      return this.getTypedRuleContext(Tff_subtypeContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterTff_formula(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitTff_formula(this);
      }
    }
  };
  var Tff_logic_formulaContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_tff_logic_formula;
    }
    tff_unitary_formula() {
      return this.getTypedRuleContext(Tff_unitary_formulaContext, 0);
    }
    tff_unary_formula() {
      return this.getTypedRuleContext(Tff_unary_formulaContext, 0);
    }
    tff_binary_formula() {
      return this.getTypedRuleContext(Tff_binary_formulaContext, 0);
    }
    tff_defined_infix() {
      return this.getTypedRuleContext(Tff_defined_infixContext, 0);
    }
    txf_definition() {
      return this.getTypedRuleContext(Txf_definitionContext, 0);
    }
    txf_sequent() {
      return this.getTypedRuleContext(Txf_sequentContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterTff_logic_formula(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitTff_logic_formula(this);
      }
    }
  };
  var Tff_binary_formulaContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_tff_binary_formula;
    }
    tff_binary_nonassoc() {
      return this.getTypedRuleContext(Tff_binary_nonassocContext, 0);
    }
    tff_binary_assoc() {
      return this.getTypedRuleContext(Tff_binary_assocContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterTff_binary_formula(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitTff_binary_formula(this);
      }
    }
  };
  var Tff_binary_nonassocContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_tff_binary_nonassoc;
    }
    tff_unit_formula = function(i2) {
      if (i2 === void 0) {
        i2 = null;
      }
      if (i2 === null) {
        return this.getTypedRuleContexts(Tff_unit_formulaContext);
      } else {
        return this.getTypedRuleContext(Tff_unit_formulaContext, i2);
      }
    };
    nonassoc_connective() {
      return this.getTypedRuleContext(Nonassoc_connectiveContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterTff_binary_nonassoc(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitTff_binary_nonassoc(this);
      }
    }
  };
  var Tff_binary_assocContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_tff_binary_assoc;
    }
    tff_or_formula() {
      return this.getTypedRuleContext(Tff_or_formulaContext, 0);
    }
    tff_and_formula() {
      return this.getTypedRuleContext(Tff_and_formulaContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterTff_binary_assoc(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitTff_binary_assoc(this);
      }
    }
  };
  var Tff_or_formulaContext = class _Tff_or_formulaContext extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_tff_or_formula;
    }
    tff_unit_formula = function(i2) {
      if (i2 === void 0) {
        i2 = null;
      }
      if (i2 === null) {
        return this.getTypedRuleContexts(Tff_unit_formulaContext);
      } else {
        return this.getTypedRuleContext(Tff_unit_formulaContext, i2);
      }
    };
    Vline() {
      return this.getToken(TPTPParser.Vline, 0);
    }
    tff_or_formula() {
      return this.getTypedRuleContext(_Tff_or_formulaContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterTff_or_formula(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitTff_or_formula(this);
      }
    }
  };
  var Tff_and_formulaContext = class _Tff_and_formulaContext extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_tff_and_formula;
    }
    tff_unit_formula = function(i2) {
      if (i2 === void 0) {
        i2 = null;
      }
      if (i2 === null) {
        return this.getTypedRuleContexts(Tff_unit_formulaContext);
      } else {
        return this.getTypedRuleContext(Tff_unit_formulaContext, i2);
      }
    };
    tff_and_formula() {
      return this.getTypedRuleContext(_Tff_and_formulaContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterTff_and_formula(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitTff_and_formula(this);
      }
    }
  };
  var Tff_unit_formulaContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_tff_unit_formula;
    }
    tff_unitary_formula() {
      return this.getTypedRuleContext(Tff_unitary_formulaContext, 0);
    }
    tff_unary_formula() {
      return this.getTypedRuleContext(Tff_unary_formulaContext, 0);
    }
    tff_defined_infix() {
      return this.getTypedRuleContext(Tff_defined_infixContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterTff_unit_formula(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitTff_unit_formula(this);
      }
    }
  };
  var Tff_preunit_formulaContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_tff_preunit_formula;
    }
    tff_unitary_formula() {
      return this.getTypedRuleContext(Tff_unitary_formulaContext, 0);
    }
    tff_prefix_unary() {
      return this.getTypedRuleContext(Tff_prefix_unaryContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterTff_preunit_formula(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitTff_preunit_formula(this);
      }
    }
  };
  var Tff_unitary_formulaContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_tff_unitary_formula;
    }
    tff_quantified_formula() {
      return this.getTypedRuleContext(Tff_quantified_formulaContext, 0);
    }
    tff_atomic_formula() {
      return this.getTypedRuleContext(Tff_atomic_formulaContext, 0);
    }
    txf_unitary_formula() {
      return this.getTypedRuleContext(Txf_unitary_formulaContext, 0);
    }
    tff_logic_formula() {
      return this.getTypedRuleContext(Tff_logic_formulaContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterTff_unitary_formula(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitTff_unitary_formula(this);
      }
    }
  };
  var Txf_unitary_formulaContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_txf_unitary_formula;
    }
    variable() {
      return this.getTypedRuleContext(VariableContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterTxf_unitary_formula(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitTxf_unitary_formula(this);
      }
    }
  };
  var Tff_quantified_formulaContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_tff_quantified_formula;
    }
    tff_quantifier() {
      return this.getTypedRuleContext(Tff_quantifierContext, 0);
    }
    tff_variable_list() {
      return this.getTypedRuleContext(Tff_variable_listContext, 0);
    }
    tff_unit_formula() {
      return this.getTypedRuleContext(Tff_unit_formulaContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterTff_quantified_formula(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitTff_quantified_formula(this);
      }
    }
  };
  var Tff_variable_listContext = class _Tff_variable_listContext extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_tff_variable_list;
    }
    tff_variable() {
      return this.getTypedRuleContext(Tff_variableContext, 0);
    }
    tff_variable_list() {
      return this.getTypedRuleContext(_Tff_variable_listContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterTff_variable_list(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitTff_variable_list(this);
      }
    }
  };
  var Tff_variableContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_tff_variable;
    }
    tff_typed_variable() {
      return this.getTypedRuleContext(Tff_typed_variableContext, 0);
    }
    variable() {
      return this.getTypedRuleContext(VariableContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterTff_variable(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitTff_variable(this);
      }
    }
  };
  var Tff_typed_variableContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_tff_typed_variable;
    }
    variable() {
      return this.getTypedRuleContext(VariableContext, 0);
    }
    tff_atomic_type() {
      return this.getTypedRuleContext(Tff_atomic_typeContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterTff_typed_variable(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitTff_typed_variable(this);
      }
    }
  };
  var Tff_unary_formulaContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_tff_unary_formula;
    }
    tff_prefix_unary() {
      return this.getTypedRuleContext(Tff_prefix_unaryContext, 0);
    }
    tff_infix_unary() {
      return this.getTypedRuleContext(Tff_infix_unaryContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterTff_unary_formula(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitTff_unary_formula(this);
      }
    }
  };
  var Tff_prefix_unaryContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_tff_prefix_unary;
    }
    tff_unary_connective() {
      return this.getTypedRuleContext(Tff_unary_connectiveContext, 0);
    }
    tff_preunit_formula() {
      return this.getTypedRuleContext(Tff_preunit_formulaContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterTff_prefix_unary(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitTff_prefix_unary(this);
      }
    }
  };
  var Tff_infix_unaryContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_tff_infix_unary;
    }
    tff_unitary_term = function(i2) {
      if (i2 === void 0) {
        i2 = null;
      }
      if (i2 === null) {
        return this.getTypedRuleContexts(Tff_unitary_termContext);
      } else {
        return this.getTypedRuleContext(Tff_unitary_termContext, i2);
      }
    };
    infix_inequality() {
      return this.getTypedRuleContext(Infix_inequalityContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterTff_infix_unary(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitTff_infix_unary(this);
      }
    }
  };
  var Tff_atomic_formulaContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_tff_atomic_formula;
    }
    tff_plain_atomic() {
      return this.getTypedRuleContext(Tff_plain_atomicContext, 0);
    }
    tff_defined_atomic() {
      return this.getTypedRuleContext(Tff_defined_atomicContext, 0);
    }
    tff_system_atomic() {
      return this.getTypedRuleContext(Tff_system_atomicContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterTff_atomic_formula(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitTff_atomic_formula(this);
      }
    }
  };
  var Tff_plain_atomicContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_tff_plain_atomic;
    }
    constant() {
      return this.getTypedRuleContext(ConstantContext, 0);
    }
    functor() {
      return this.getTypedRuleContext(FunctorContext, 0);
    }
    tff_arguments() {
      return this.getTypedRuleContext(Tff_argumentsContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterTff_plain_atomic(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitTff_plain_atomic(this);
      }
    }
  };
  var Tff_defined_atomicContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_tff_defined_atomic;
    }
    tff_defined_plain() {
      return this.getTypedRuleContext(Tff_defined_plainContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterTff_defined_atomic(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitTff_defined_atomic(this);
      }
    }
  };
  var Tff_defined_plainContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_tff_defined_plain;
    }
    defined_constant() {
      return this.getTypedRuleContext(Defined_constantContext, 0);
    }
    defined_functor() {
      return this.getTypedRuleContext(Defined_functorContext, 0);
    }
    tff_arguments() {
      return this.getTypedRuleContext(Tff_argumentsContext, 0);
    }
    nxf_atom() {
      return this.getTypedRuleContext(Nxf_atomContext, 0);
    }
    txf_let() {
      return this.getTypedRuleContext(Txf_letContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterTff_defined_plain(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitTff_defined_plain(this);
      }
    }
  };
  var Tff_defined_infixContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_tff_defined_infix;
    }
    tff_unitary_term = function(i2) {
      if (i2 === void 0) {
        i2 = null;
      }
      if (i2 === null) {
        return this.getTypedRuleContexts(Tff_unitary_termContext);
      } else {
        return this.getTypedRuleContext(Tff_unitary_termContext, i2);
      }
    };
    defined_infix_pred() {
      return this.getTypedRuleContext(Defined_infix_predContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterTff_defined_infix(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitTff_defined_infix(this);
      }
    }
  };
  var Tff_system_atomicContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_tff_system_atomic;
    }
    system_constant() {
      return this.getTypedRuleContext(System_constantContext, 0);
    }
    system_functor() {
      return this.getTypedRuleContext(System_functorContext, 0);
    }
    tff_arguments() {
      return this.getTypedRuleContext(Tff_argumentsContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterTff_system_atomic(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitTff_system_atomic(this);
      }
    }
  };
  var Txf_letContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_txf_let;
    }
    txf_let_types() {
      return this.getTypedRuleContext(Txf_let_typesContext, 0);
    }
    txf_let_defns() {
      return this.getTypedRuleContext(Txf_let_defnsContext, 0);
    }
    tff_term() {
      return this.getTypedRuleContext(Tff_termContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterTxf_let(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitTxf_let(this);
      }
    }
  };
  var Txf_let_typesContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_txf_let_types;
    }
    tff_atom_typing() {
      return this.getTypedRuleContext(Tff_atom_typingContext, 0);
    }
    tff_atom_typing_list() {
      return this.getTypedRuleContext(Tff_atom_typing_listContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterTxf_let_types(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitTxf_let_types(this);
      }
    }
  };
  var Tff_atom_typing_listContext = class _Tff_atom_typing_listContext extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_tff_atom_typing_list;
    }
    tff_atom_typing() {
      return this.getTypedRuleContext(Tff_atom_typingContext, 0);
    }
    tff_atom_typing_list() {
      return this.getTypedRuleContext(_Tff_atom_typing_listContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterTff_atom_typing_list(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitTff_atom_typing_list(this);
      }
    }
  };
  var Txf_let_defnsContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_txf_let_defns;
    }
    txf_let_defn() {
      return this.getTypedRuleContext(Txf_let_defnContext, 0);
    }
    txf_let_defn_list() {
      return this.getTypedRuleContext(Txf_let_defn_listContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterTxf_let_defns(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitTxf_let_defns(this);
      }
    }
  };
  var Txf_let_defnContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_txf_let_defn;
    }
    txf_let_LHS() {
      return this.getTypedRuleContext(Txf_let_LHSContext, 0);
    }
    assignment() {
      return this.getTypedRuleContext(AssignmentContext, 0);
    }
    tff_term() {
      return this.getTypedRuleContext(Tff_termContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterTxf_let_defn(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitTxf_let_defn(this);
      }
    }
  };
  var Txf_let_LHSContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_txf_let_LHS;
    }
    tff_plain_atomic() {
      return this.getTypedRuleContext(Tff_plain_atomicContext, 0);
    }
    txf_tuple() {
      return this.getTypedRuleContext(Txf_tupleContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterTxf_let_LHS(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitTxf_let_LHS(this);
      }
    }
  };
  var Txf_let_defn_listContext = class _Txf_let_defn_listContext extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_txf_let_defn_list;
    }
    txf_let_defn() {
      return this.getTypedRuleContext(Txf_let_defnContext, 0);
    }
    txf_let_defn_list() {
      return this.getTypedRuleContext(_Txf_let_defn_listContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterTxf_let_defn_list(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitTxf_let_defn_list(this);
      }
    }
  };
  var Nxf_atomContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_nxf_atom;
    }
    nxf_long_connective() {
      return this.getTypedRuleContext(Nxf_long_connectiveContext, 0);
    }
    tff_arguments() {
      return this.getTypedRuleContext(Tff_argumentsContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterNxf_atom(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitNxf_atom(this);
      }
    }
  };
  var Tff_termContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_tff_term;
    }
    tff_logic_formula() {
      return this.getTypedRuleContext(Tff_logic_formulaContext, 0);
    }
    defined_term() {
      return this.getTypedRuleContext(Defined_termContext, 0);
    }
    txf_tuple() {
      return this.getTypedRuleContext(Txf_tupleContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterTff_term(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitTff_term(this);
      }
    }
  };
  var Tff_unitary_termContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_tff_unitary_term;
    }
    tff_atomic_formula() {
      return this.getTypedRuleContext(Tff_atomic_formulaContext, 0);
    }
    defined_term() {
      return this.getTypedRuleContext(Defined_termContext, 0);
    }
    txf_tuple() {
      return this.getTypedRuleContext(Txf_tupleContext, 0);
    }
    variable() {
      return this.getTypedRuleContext(VariableContext, 0);
    }
    tff_logic_formula() {
      return this.getTypedRuleContext(Tff_logic_formulaContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterTff_unitary_term(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitTff_unitary_term(this);
      }
    }
  };
  var Txf_tupleContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_txf_tuple;
    }
    tff_arguments() {
      return this.getTypedRuleContext(Tff_argumentsContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterTxf_tuple(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitTxf_tuple(this);
      }
    }
  };
  var Tff_argumentsContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_tff_arguments;
    }
    tff_term() {
      return this.getTypedRuleContext(Tff_termContext, 0);
    }
    comma_tff_term = function(i2) {
      if (i2 === void 0) {
        i2 = null;
      }
      if (i2 === null) {
        return this.getTypedRuleContexts(Comma_tff_termContext);
      } else {
        return this.getTypedRuleContext(Comma_tff_termContext, i2);
      }
    };
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterTff_arguments(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitTff_arguments(this);
      }
    }
  };
  var Comma_tff_termContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_comma_tff_term;
    }
    tff_term() {
      return this.getTypedRuleContext(Tff_termContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterComma_tff_term(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitComma_tff_term(this);
      }
    }
  };
  var Tff_atom_typingContext = class _Tff_atom_typingContext extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_tff_atom_typing;
    }
    untyped_atom() {
      return this.getTypedRuleContext(Untyped_atomContext, 0);
    }
    tff_top_level_type() {
      return this.getTypedRuleContext(Tff_top_level_typeContext, 0);
    }
    tff_atom_typing() {
      return this.getTypedRuleContext(_Tff_atom_typingContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterTff_atom_typing(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitTff_atom_typing(this);
      }
    }
  };
  var Tff_top_level_typeContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_tff_top_level_type;
    }
    tff_atomic_type() {
      return this.getTypedRuleContext(Tff_atomic_typeContext, 0);
    }
    tff_non_atomic_type() {
      return this.getTypedRuleContext(Tff_non_atomic_typeContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterTff_top_level_type(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitTff_top_level_type(this);
      }
    }
  };
  var Tff_non_atomic_typeContext = class _Tff_non_atomic_typeContext extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_tff_non_atomic_type;
    }
    tff_mapping_type() {
      return this.getTypedRuleContext(Tff_mapping_typeContext, 0);
    }
    tf1_quantified_type() {
      return this.getTypedRuleContext(Tf1_quantified_typeContext, 0);
    }
    tff_non_atomic_type() {
      return this.getTypedRuleContext(_Tff_non_atomic_typeContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterTff_non_atomic_type(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitTff_non_atomic_type(this);
      }
    }
  };
  var Tf1_quantified_typeContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_tf1_quantified_type;
    }
    tff_variable_list() {
      return this.getTypedRuleContext(Tff_variable_listContext, 0);
    }
    tff_monotype() {
      return this.getTypedRuleContext(Tff_monotypeContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterTf1_quantified_type(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitTf1_quantified_type(this);
      }
    }
  };
  var Tff_monotypeContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_tff_monotype;
    }
    tff_atomic_type() {
      return this.getTypedRuleContext(Tff_atomic_typeContext, 0);
    }
    tff_mapping_type() {
      return this.getTypedRuleContext(Tff_mapping_typeContext, 0);
    }
    tf1_quantified_type() {
      return this.getTypedRuleContext(Tf1_quantified_typeContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterTff_monotype(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitTff_monotype(this);
      }
    }
  };
  var Tff_unitary_typeContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_tff_unitary_type;
    }
    tff_atomic_type() {
      return this.getTypedRuleContext(Tff_atomic_typeContext, 0);
    }
    tff_xprod_type() {
      return this.getTypedRuleContext(Tff_xprod_typeContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterTff_unitary_type(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitTff_unitary_type(this);
      }
    }
  };
  var Tff_atomic_typeContext = class _Tff_atomic_typeContext extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_tff_atomic_type;
    }
    type_constant() {
      return this.getTypedRuleContext(Type_constantContext, 0);
    }
    defined_type() {
      return this.getTypedRuleContext(Defined_typeContext, 0);
    }
    variable() {
      return this.getTypedRuleContext(VariableContext, 0);
    }
    type_functor() {
      return this.getTypedRuleContext(Type_functorContext, 0);
    }
    tff_type_arguments() {
      return this.getTypedRuleContext(Tff_type_argumentsContext, 0);
    }
    tff_atomic_type() {
      return this.getTypedRuleContext(_Tff_atomic_typeContext, 0);
    }
    txf_tuple_type() {
      return this.getTypedRuleContext(Txf_tuple_typeContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterTff_atomic_type(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitTff_atomic_type(this);
      }
    }
  };
  var Tff_type_argumentsContext = class _Tff_type_argumentsContext extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_tff_type_arguments;
    }
    tff_atomic_type() {
      return this.getTypedRuleContext(Tff_atomic_typeContext, 0);
    }
    tff_type_arguments() {
      return this.getTypedRuleContext(_Tff_type_argumentsContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterTff_type_arguments(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitTff_type_arguments(this);
      }
    }
  };
  var Tff_mapping_typeContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_tff_mapping_type;
    }
    tff_unitary_type() {
      return this.getTypedRuleContext(Tff_unitary_typeContext, 0);
    }
    Arrow() {
      return this.getToken(TPTPParser.Arrow, 0);
    }
    tff_atomic_type() {
      return this.getTypedRuleContext(Tff_atomic_typeContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterTff_mapping_type(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitTff_mapping_type(this);
      }
    }
  };
  var Tff_xprod_typeContext = class _Tff_xprod_typeContext extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_tff_xprod_type;
    }
    tff_unitary_type() {
      return this.getTypedRuleContext(Tff_unitary_typeContext, 0);
    }
    Star() {
      return this.getToken(TPTPParser.Star, 0);
    }
    tff_atomic_type() {
      return this.getTypedRuleContext(Tff_atomic_typeContext, 0);
    }
    tff_xprod_type() {
      return this.getTypedRuleContext(_Tff_xprod_typeContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterTff_xprod_type(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitTff_xprod_type(this);
      }
    }
  };
  var Txf_tuple_typeContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_txf_tuple_type;
    }
    tff_type_list() {
      return this.getTypedRuleContext(Tff_type_listContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterTxf_tuple_type(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitTxf_tuple_type(this);
      }
    }
  };
  var Tff_type_listContext = class _Tff_type_listContext extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_tff_type_list;
    }
    tff_top_level_type() {
      return this.getTypedRuleContext(Tff_top_level_typeContext, 0);
    }
    tff_type_list() {
      return this.getTypedRuleContext(_Tff_type_listContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterTff_type_list(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitTff_type_list(this);
      }
    }
  };
  var Tff_subtypeContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_tff_subtype;
    }
    untyped_atom() {
      return this.getTypedRuleContext(Untyped_atomContext, 0);
    }
    subtype_sign() {
      return this.getTypedRuleContext(Subtype_signContext, 0);
    }
    atom() {
      return this.getTypedRuleContext(AtomContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterTff_subtype(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitTff_subtype(this);
      }
    }
  };
  var Txf_definitionContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_txf_definition;
    }
    tff_atomic_formula() {
      return this.getTypedRuleContext(Tff_atomic_formulaContext, 0);
    }
    identical() {
      return this.getTypedRuleContext(IdenticalContext, 0);
    }
    tff_term() {
      return this.getTypedRuleContext(Tff_termContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterTxf_definition(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitTxf_definition(this);
      }
    }
  };
  var Txf_sequentContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_txf_sequent;
    }
    txf_tuple = function(i2) {
      if (i2 === void 0) {
        i2 = null;
      }
      if (i2 === null) {
        return this.getTypedRuleContexts(Txf_tupleContext);
      } else {
        return this.getTypedRuleContext(Txf_tupleContext, i2);
      }
    };
    gentzen_arrow() {
      return this.getTypedRuleContext(Gentzen_arrowContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterTxf_sequent(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitTxf_sequent(this);
      }
    }
  };
  var Nhf_long_connectiveContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_nhf_long_connective;
    }
    ntf_connective_name() {
      return this.getTypedRuleContext(Ntf_connective_nameContext, 0);
    }
    nhf_parameter_list() {
      return this.getTypedRuleContext(Nhf_parameter_listContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterNhf_long_connective(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitNhf_long_connective(this);
      }
    }
  };
  var Nhf_parameter_listContext = class _Nhf_parameter_listContext extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_nhf_parameter_list;
    }
    nhf_parameter() {
      return this.getTypedRuleContext(Nhf_parameterContext, 0);
    }
    nhf_parameter_list() {
      return this.getTypedRuleContext(_Nhf_parameter_listContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterNhf_parameter_list(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitNhf_parameter_list(this);
      }
    }
  };
  var Nhf_parameterContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_nhf_parameter;
    }
    ntf_index() {
      return this.getTypedRuleContext(Ntf_indexContext, 0);
    }
    nhf_key_pair() {
      return this.getTypedRuleContext(Nhf_key_pairContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterNhf_parameter(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitNhf_parameter(this);
      }
    }
  };
  var Nhf_key_pairContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_nhf_key_pair;
    }
    thf_definition() {
      return this.getTypedRuleContext(Thf_definitionContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterNhf_key_pair(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitNhf_key_pair(this);
      }
    }
  };
  var Nxf_long_connectiveContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_nxf_long_connective;
    }
    ntf_connective_name() {
      return this.getTypedRuleContext(Ntf_connective_nameContext, 0);
    }
    nxf_parameter_list() {
      return this.getTypedRuleContext(Nxf_parameter_listContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterNxf_long_connective(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitNxf_long_connective(this);
      }
    }
  };
  var Nxf_parameter_listContext = class _Nxf_parameter_listContext extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_nxf_parameter_list;
    }
    nxf_parameter() {
      return this.getTypedRuleContext(Nxf_parameterContext, 0);
    }
    nxf_parameter_list() {
      return this.getTypedRuleContext(_Nxf_parameter_listContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterNxf_parameter_list(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitNxf_parameter_list(this);
      }
    }
  };
  var Nxf_parameterContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_nxf_parameter;
    }
    ntf_index() {
      return this.getTypedRuleContext(Ntf_indexContext, 0);
    }
    nxf_key_pair() {
      return this.getTypedRuleContext(Nxf_key_pairContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterNxf_parameter(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitNxf_parameter(this);
      }
    }
  };
  var Nxf_key_pairContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_nxf_key_pair;
    }
    txf_definition() {
      return this.getTypedRuleContext(Txf_definitionContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterNxf_key_pair(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitNxf_key_pair(this);
      }
    }
  };
  var Ntf_connective_nameContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_ntf_connective_name;
    }
    def_or_sys_constant() {
      return this.getTypedRuleContext(Def_or_sys_constantContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterNtf_connective_name(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitNtf_connective_name(this);
      }
    }
  };
  var Ntf_indexContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_ntf_index;
    }
    Hash() {
      return this.getToken(TPTPParser.Hash, 0);
    }
    tff_unitary_term() {
      return this.getTypedRuleContext(Tff_unitary_termContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterNtf_index(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitNtf_index(this);
      }
    }
  };
  var Ntf_short_connectiveContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_ntf_short_connective;
    }
    Less_sign() {
      return this.getToken(TPTPParser.Less_sign, 0);
    }
    Arrow() {
      return this.getToken(TPTPParser.Arrow, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterNtf_short_connective(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitNtf_short_connective(this);
      }
    }
  };
  var Tcf_formulaContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_tcf_formula;
    }
    tcf_logic_formula() {
      return this.getTypedRuleContext(Tcf_logic_formulaContext, 0);
    }
    tff_atom_typing() {
      return this.getTypedRuleContext(Tff_atom_typingContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterTcf_formula(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitTcf_formula(this);
      }
    }
  };
  var Tcf_logic_formulaContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_tcf_logic_formula;
    }
    tcf_quantified_formula() {
      return this.getTypedRuleContext(Tcf_quantified_formulaContext, 0);
    }
    cnf_formula() {
      return this.getTypedRuleContext(Cnf_formulaContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterTcf_logic_formula(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitTcf_logic_formula(this);
      }
    }
  };
  var Tcf_quantified_formulaContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_tcf_quantified_formula;
    }
    tff_variable_list() {
      return this.getTypedRuleContext(Tff_variable_listContext, 0);
    }
    tcf_logic_formula() {
      return this.getTypedRuleContext(Tcf_logic_formulaContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterTcf_quantified_formula(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitTcf_quantified_formula(this);
      }
    }
  };
  var Fof_formulaContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_fof_formula;
    }
    fof_logic_formula() {
      return this.getTypedRuleContext(Fof_logic_formulaContext, 0);
    }
    fof_sequent() {
      return this.getTypedRuleContext(Fof_sequentContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterFof_formula(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitFof_formula(this);
      }
    }
  };
  var Fof_logic_formulaContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_fof_logic_formula;
    }
    fof_binary_formula() {
      return this.getTypedRuleContext(Fof_binary_formulaContext, 0);
    }
    fof_unary_formula() {
      return this.getTypedRuleContext(Fof_unary_formulaContext, 0);
    }
    fof_unitary_formula() {
      return this.getTypedRuleContext(Fof_unitary_formulaContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterFof_logic_formula(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitFof_logic_formula(this);
      }
    }
  };
  var Fof_binary_formulaContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_fof_binary_formula;
    }
    fof_binary_nonassoc() {
      return this.getTypedRuleContext(Fof_binary_nonassocContext, 0);
    }
    fof_binary_assoc() {
      return this.getTypedRuleContext(Fof_binary_assocContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterFof_binary_formula(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitFof_binary_formula(this);
      }
    }
  };
  var Fof_binary_nonassocContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_fof_binary_nonassoc;
    }
    fof_unit_formula = function(i2) {
      if (i2 === void 0) {
        i2 = null;
      }
      if (i2 === null) {
        return this.getTypedRuleContexts(Fof_unit_formulaContext);
      } else {
        return this.getTypedRuleContext(Fof_unit_formulaContext, i2);
      }
    };
    nonassoc_connective() {
      return this.getTypedRuleContext(Nonassoc_connectiveContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterFof_binary_nonassoc(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitFof_binary_nonassoc(this);
      }
    }
  };
  var Fof_binary_assocContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_fof_binary_assoc;
    }
    fof_or_formula() {
      return this.getTypedRuleContext(Fof_or_formulaContext, 0);
    }
    fof_and_formula() {
      return this.getTypedRuleContext(Fof_and_formulaContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterFof_binary_assoc(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitFof_binary_assoc(this);
      }
    }
  };
  var Fof_or_formulaContext = class _Fof_or_formulaContext extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_fof_or_formula;
    }
    fof_unit_formula = function(i2) {
      if (i2 === void 0) {
        i2 = null;
      }
      if (i2 === null) {
        return this.getTypedRuleContexts(Fof_unit_formulaContext);
      } else {
        return this.getTypedRuleContext(Fof_unit_formulaContext, i2);
      }
    };
    Vline() {
      return this.getToken(TPTPParser.Vline, 0);
    }
    fof_or_formula() {
      return this.getTypedRuleContext(_Fof_or_formulaContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterFof_or_formula(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitFof_or_formula(this);
      }
    }
  };
  var Fof_and_formulaContext = class _Fof_and_formulaContext extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_fof_and_formula;
    }
    fof_unit_formula = function(i2) {
      if (i2 === void 0) {
        i2 = null;
      }
      if (i2 === null) {
        return this.getTypedRuleContexts(Fof_unit_formulaContext);
      } else {
        return this.getTypedRuleContext(Fof_unit_formulaContext, i2);
      }
    };
    fof_and_formula() {
      return this.getTypedRuleContext(_Fof_and_formulaContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterFof_and_formula(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitFof_and_formula(this);
      }
    }
  };
  var Fof_unary_formulaContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_fof_unary_formula;
    }
    unary_connective() {
      return this.getTypedRuleContext(Unary_connectiveContext, 0);
    }
    fof_unit_formula() {
      return this.getTypedRuleContext(Fof_unit_formulaContext, 0);
    }
    fof_infix_unary() {
      return this.getTypedRuleContext(Fof_infix_unaryContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterFof_unary_formula(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitFof_unary_formula(this);
      }
    }
  };
  var Fof_infix_unaryContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_fof_infix_unary;
    }
    fof_term = function(i2) {
      if (i2 === void 0) {
        i2 = null;
      }
      if (i2 === null) {
        return this.getTypedRuleContexts(Fof_termContext);
      } else {
        return this.getTypedRuleContext(Fof_termContext, i2);
      }
    };
    infix_inequality() {
      return this.getTypedRuleContext(Infix_inequalityContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterFof_infix_unary(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitFof_infix_unary(this);
      }
    }
  };
  var Fof_unit_formulaContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_fof_unit_formula;
    }
    fof_unitary_formula() {
      return this.getTypedRuleContext(Fof_unitary_formulaContext, 0);
    }
    fof_unary_formula() {
      return this.getTypedRuleContext(Fof_unary_formulaContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterFof_unit_formula(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitFof_unit_formula(this);
      }
    }
  };
  var Fof_unitary_formulaContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_fof_unitary_formula;
    }
    fof_quantified_formula() {
      return this.getTypedRuleContext(Fof_quantified_formulaContext, 0);
    }
    fof_atomic_formula() {
      return this.getTypedRuleContext(Fof_atomic_formulaContext, 0);
    }
    fof_logic_formula() {
      return this.getTypedRuleContext(Fof_logic_formulaContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterFof_unitary_formula(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitFof_unitary_formula(this);
      }
    }
  };
  var Fof_quantified_formulaContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_fof_quantified_formula;
    }
    fof_quantifier() {
      return this.getTypedRuleContext(Fof_quantifierContext, 0);
    }
    fof_variable_list() {
      return this.getTypedRuleContext(Fof_variable_listContext, 0);
    }
    fof_unit_formula() {
      return this.getTypedRuleContext(Fof_unit_formulaContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterFof_quantified_formula(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitFof_quantified_formula(this);
      }
    }
  };
  var Fof_variable_listContext = class _Fof_variable_listContext extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_fof_variable_list;
    }
    variable() {
      return this.getTypedRuleContext(VariableContext, 0);
    }
    fof_variable_list() {
      return this.getTypedRuleContext(_Fof_variable_listContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterFof_variable_list(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitFof_variable_list(this);
      }
    }
  };
  var Fof_atomic_formulaContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_fof_atomic_formula;
    }
    fof_plain_atomic_formula() {
      return this.getTypedRuleContext(Fof_plain_atomic_formulaContext, 0);
    }
    fof_defined_atomic_formula() {
      return this.getTypedRuleContext(Fof_defined_atomic_formulaContext, 0);
    }
    fof_system_atomic_formula() {
      return this.getTypedRuleContext(Fof_system_atomic_formulaContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterFof_atomic_formula(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitFof_atomic_formula(this);
      }
    }
  };
  var Fof_plain_atomic_formulaContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_fof_plain_atomic_formula;
    }
    fof_plain_term() {
      return this.getTypedRuleContext(Fof_plain_termContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterFof_plain_atomic_formula(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitFof_plain_atomic_formula(this);
      }
    }
  };
  var Fof_defined_atomic_formulaContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_fof_defined_atomic_formula;
    }
    fof_defined_plain_formula() {
      return this.getTypedRuleContext(Fof_defined_plain_formulaContext, 0);
    }
    fof_defined_infix_formula() {
      return this.getTypedRuleContext(Fof_defined_infix_formulaContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterFof_defined_atomic_formula(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitFof_defined_atomic_formula(this);
      }
    }
  };
  var Fof_defined_plain_formulaContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_fof_defined_plain_formula;
    }
    fof_defined_plain_term() {
      return this.getTypedRuleContext(Fof_defined_plain_termContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterFof_defined_plain_formula(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitFof_defined_plain_formula(this);
      }
    }
  };
  var Fof_defined_infix_formulaContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_fof_defined_infix_formula;
    }
    fof_term = function(i2) {
      if (i2 === void 0) {
        i2 = null;
      }
      if (i2 === null) {
        return this.getTypedRuleContexts(Fof_termContext);
      } else {
        return this.getTypedRuleContext(Fof_termContext, i2);
      }
    };
    defined_infix_pred() {
      return this.getTypedRuleContext(Defined_infix_predContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterFof_defined_infix_formula(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitFof_defined_infix_formula(this);
      }
    }
  };
  var Fof_system_atomic_formulaContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_fof_system_atomic_formula;
    }
    fof_system_term() {
      return this.getTypedRuleContext(Fof_system_termContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterFof_system_atomic_formula(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitFof_system_atomic_formula(this);
      }
    }
  };
  var Fof_plain_termContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_fof_plain_term;
    }
    constant() {
      return this.getTypedRuleContext(ConstantContext, 0);
    }
    functor() {
      return this.getTypedRuleContext(FunctorContext, 0);
    }
    fof_arguments() {
      return this.getTypedRuleContext(Fof_argumentsContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterFof_plain_term(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitFof_plain_term(this);
      }
    }
  };
  var Fof_defined_termContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_fof_defined_term;
    }
    defined_term() {
      return this.getTypedRuleContext(Defined_termContext, 0);
    }
    fof_defined_atomic_term() {
      return this.getTypedRuleContext(Fof_defined_atomic_termContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterFof_defined_term(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitFof_defined_term(this);
      }
    }
  };
  var Fof_defined_atomic_termContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_fof_defined_atomic_term;
    }
    fof_defined_plain_term() {
      return this.getTypedRuleContext(Fof_defined_plain_termContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterFof_defined_atomic_term(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitFof_defined_atomic_term(this);
      }
    }
  };
  var Fof_defined_plain_termContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_fof_defined_plain_term;
    }
    defined_constant() {
      return this.getTypedRuleContext(Defined_constantContext, 0);
    }
    defined_functor() {
      return this.getTypedRuleContext(Defined_functorContext, 0);
    }
    fof_arguments() {
      return this.getTypedRuleContext(Fof_argumentsContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterFof_defined_plain_term(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitFof_defined_plain_term(this);
      }
    }
  };
  var Fof_system_termContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_fof_system_term;
    }
    system_constant() {
      return this.getTypedRuleContext(System_constantContext, 0);
    }
    system_functor() {
      return this.getTypedRuleContext(System_functorContext, 0);
    }
    fof_arguments() {
      return this.getTypedRuleContext(Fof_argumentsContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterFof_system_term(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitFof_system_term(this);
      }
    }
  };
  var Fof_argumentsContext = class _Fof_argumentsContext extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_fof_arguments;
    }
    fof_term() {
      return this.getTypedRuleContext(Fof_termContext, 0);
    }
    fof_arguments() {
      return this.getTypedRuleContext(_Fof_argumentsContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterFof_arguments(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitFof_arguments(this);
      }
    }
  };
  var Fof_termContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_fof_term;
    }
    fof_function_term() {
      return this.getTypedRuleContext(Fof_function_termContext, 0);
    }
    variable() {
      return this.getTypedRuleContext(VariableContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterFof_term(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitFof_term(this);
      }
    }
  };
  var Fof_function_termContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_fof_function_term;
    }
    fof_plain_term() {
      return this.getTypedRuleContext(Fof_plain_termContext, 0);
    }
    fof_defined_term() {
      return this.getTypedRuleContext(Fof_defined_termContext, 0);
    }
    fof_system_term() {
      return this.getTypedRuleContext(Fof_system_termContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterFof_function_term(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitFof_function_term(this);
      }
    }
  };
  var Fof_sequentContext = class _Fof_sequentContext extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_fof_sequent;
    }
    fof_formula_tuple = function(i2) {
      if (i2 === void 0) {
        i2 = null;
      }
      if (i2 === null) {
        return this.getTypedRuleContexts(Fof_formula_tupleContext);
      } else {
        return this.getTypedRuleContext(Fof_formula_tupleContext, i2);
      }
    };
    gentzen_arrow() {
      return this.getTypedRuleContext(Gentzen_arrowContext, 0);
    }
    fof_sequent() {
      return this.getTypedRuleContext(_Fof_sequentContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterFof_sequent(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitFof_sequent(this);
      }
    }
  };
  var Fof_formula_tupleContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_fof_formula_tuple;
    }
    fof_formula_tuple_list() {
      return this.getTypedRuleContext(Fof_formula_tuple_listContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterFof_formula_tuple(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitFof_formula_tuple(this);
      }
    }
  };
  var Fof_formula_tuple_listContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_fof_formula_tuple_list;
    }
    fof_logic_formula() {
      return this.getTypedRuleContext(Fof_logic_formulaContext, 0);
    }
    comma_fof_logic_formula = function(i2) {
      if (i2 === void 0) {
        i2 = null;
      }
      if (i2 === null) {
        return this.getTypedRuleContexts(Comma_fof_logic_formulaContext);
      } else {
        return this.getTypedRuleContext(Comma_fof_logic_formulaContext, i2);
      }
    };
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterFof_formula_tuple_list(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitFof_formula_tuple_list(this);
      }
    }
  };
  var Comma_fof_logic_formulaContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_comma_fof_logic_formula;
    }
    fof_logic_formula() {
      return this.getTypedRuleContext(Fof_logic_formulaContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterComma_fof_logic_formula(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitComma_fof_logic_formula(this);
      }
    }
  };
  var Cnf_formulaContext = class _Cnf_formulaContext extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_cnf_formula;
    }
    cnf_disjunction() {
      return this.getTypedRuleContext(Cnf_disjunctionContext, 0);
    }
    cnf_formula() {
      return this.getTypedRuleContext(_Cnf_formulaContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterCnf_formula(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitCnf_formula(this);
      }
    }
  };
  var Cnf_disjunctionContext = class _Cnf_disjunctionContext extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_cnf_disjunction;
    }
    cnf_literal() {
      return this.getTypedRuleContext(Cnf_literalContext, 0);
    }
    cnf_disjunction() {
      return this.getTypedRuleContext(_Cnf_disjunctionContext, 0);
    }
    Vline() {
      return this.getToken(TPTPParser.Vline, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterCnf_disjunction(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitCnf_disjunction(this);
      }
    }
  };
  var Cnf_literalContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_cnf_literal;
    }
    fof_atomic_formula() {
      return this.getTypedRuleContext(Fof_atomic_formulaContext, 0);
    }
    fof_infix_unary() {
      return this.getTypedRuleContext(Fof_infix_unaryContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterCnf_literal(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitCnf_literal(this);
      }
    }
  };
  var Thf_quantifierContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_thf_quantifier;
    }
    fof_quantifier() {
      return this.getTypedRuleContext(Fof_quantifierContext, 0);
    }
    th0_quantifier() {
      return this.getTypedRuleContext(Th0_quantifierContext, 0);
    }
    th1_quantifier() {
      return this.getTypedRuleContext(Th1_quantifierContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterThf_quantifier(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitThf_quantifier(this);
      }
    }
  };
  var Thf_unary_connectiveContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_thf_unary_connective;
    }
    unary_connective() {
      return this.getTypedRuleContext(Unary_connectiveContext, 0);
    }
    ntf_short_connective() {
      return this.getTypedRuleContext(Ntf_short_connectiveContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterThf_unary_connective(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitThf_unary_connective(this);
      }
    }
  };
  var Th1_quantifierContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_th1_quantifier;
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterTh1_quantifier(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitTh1_quantifier(this);
      }
    }
  };
  var Th0_quantifierContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_th0_quantifier;
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterTh0_quantifier(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitTh0_quantifier(this);
      }
    }
  };
  var Subtype_signContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_subtype_sign;
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterSubtype_sign(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitSubtype_sign(this);
      }
    }
  };
  var Tff_unary_connectiveContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_tff_unary_connective;
    }
    unary_connective() {
      return this.getTypedRuleContext(Unary_connectiveContext, 0);
    }
    ntf_short_connective() {
      return this.getTypedRuleContext(Ntf_short_connectiveContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterTff_unary_connective(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitTff_unary_connective(this);
      }
    }
  };
  var Tff_quantifierContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_tff_quantifier;
    }
    fof_quantifier() {
      return this.getTypedRuleContext(Fof_quantifierContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterTff_quantifier(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitTff_quantifier(this);
      }
    }
  };
  var Fof_quantifierContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_fof_quantifier;
    }
    Hash() {
      return this.getToken(TPTPParser.Hash, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterFof_quantifier(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitFof_quantifier(this);
      }
    }
  };
  var Nonassoc_connectiveContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_nonassoc_connective;
    }
    Vline() {
      return this.getToken(TPTPParser.Vline, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterNonassoc_connective(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitNonassoc_connective(this);
      }
    }
  };
  var Assoc_connectiveContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_assoc_connective;
    }
    Vline() {
      return this.getToken(TPTPParser.Vline, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterAssoc_connective(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitAssoc_connective(this);
      }
    }
  };
  var Unary_connectiveContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_unary_connective;
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterUnary_connective(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitUnary_connective(this);
      }
    }
  };
  var Gentzen_arrowContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_gentzen_arrow;
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterGentzen_arrow(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitGentzen_arrow(this);
      }
    }
  };
  var AssignmentContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_assignment;
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterAssignment(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitAssignment(this);
      }
    }
  };
  var IdenticalContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_identical;
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterIdentical(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitIdentical(this);
      }
    }
  };
  var Type_constantContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_type_constant;
    }
    type_functor() {
      return this.getTypedRuleContext(Type_functorContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterType_constant(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitType_constant(this);
      }
    }
  };
  var Type_functorContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_type_functor;
    }
    atomic_word() {
      return this.getTypedRuleContext(Atomic_wordContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterType_functor(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitType_functor(this);
      }
    }
  };
  var Defined_typeContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_defined_type;
    }
    atomic_defined_word() {
      return this.getTypedRuleContext(Atomic_defined_wordContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterDefined_type(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitDefined_type(this);
      }
    }
  };
  var AtomContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_atom;
    }
    untyped_atom() {
      return this.getTypedRuleContext(Untyped_atomContext, 0);
    }
    defined_constant() {
      return this.getTypedRuleContext(Defined_constantContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterAtom(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitAtom(this);
      }
    }
  };
  var Untyped_atomContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_untyped_atom;
    }
    constant() {
      return this.getTypedRuleContext(ConstantContext, 0);
    }
    system_constant() {
      return this.getTypedRuleContext(System_constantContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterUntyped_atom(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitUntyped_atom(this);
      }
    }
  };
  var Defined_infix_predContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_defined_infix_pred;
    }
    infix_equality() {
      return this.getTypedRuleContext(Infix_equalityContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterDefined_infix_pred(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitDefined_infix_pred(this);
      }
    }
  };
  var Infix_equalityContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_infix_equality;
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterInfix_equality(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitInfix_equality(this);
      }
    }
  };
  var Infix_inequalityContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_infix_inequality;
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterInfix_inequality(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitInfix_inequality(this);
      }
    }
  };
  var ConstantContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_constant;
    }
    functor() {
      return this.getTypedRuleContext(FunctorContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterConstant(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitConstant(this);
      }
    }
  };
  var FunctorContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_functor;
    }
    atomic_word() {
      return this.getTypedRuleContext(Atomic_wordContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterFunctor(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitFunctor(this);
      }
    }
  };
  var Defined_constantContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_defined_constant;
    }
    defined_functor() {
      return this.getTypedRuleContext(Defined_functorContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterDefined_constant(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitDefined_constant(this);
      }
    }
  };
  var Defined_functorContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_defined_functor;
    }
    atomic_defined_word() {
      return this.getTypedRuleContext(Atomic_defined_wordContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterDefined_functor(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitDefined_functor(this);
      }
    }
  };
  var System_constantContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_system_constant;
    }
    system_functor() {
      return this.getTypedRuleContext(System_functorContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterSystem_constant(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitSystem_constant(this);
      }
    }
  };
  var System_functorContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_system_functor;
    }
    atomic_system_word() {
      return this.getTypedRuleContext(Atomic_system_wordContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterSystem_functor(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitSystem_functor(this);
      }
    }
  };
  var Def_or_sys_constantContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_def_or_sys_constant;
    }
    defined_constant() {
      return this.getTypedRuleContext(Defined_constantContext, 0);
    }
    system_constant() {
      return this.getTypedRuleContext(System_constantContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterDef_or_sys_constant(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitDef_or_sys_constant(this);
      }
    }
  };
  var Th1_defined_termContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_th1_defined_term;
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterTh1_defined_term(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitTh1_defined_term(this);
      }
    }
  };
  var Defined_termContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_defined_term;
    }
    number() {
      return this.getTypedRuleContext(NumberContext, 0);
    }
    Distinct_object() {
      return this.getToken(TPTPParser.Distinct_object, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterDefined_term(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitDefined_term(this);
      }
    }
  };
  var VariableContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_variable;
    }
    Upper_word() {
      return this.getToken(TPTPParser.Upper_word, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterVariable(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitVariable(this);
      }
    }
  };
  var SourceContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_source;
    }
    dag_source() {
      return this.getTypedRuleContext(Dag_sourceContext, 0);
    }
    internal_source() {
      return this.getTypedRuleContext(Internal_sourceContext, 0);
    }
    external_source() {
      return this.getTypedRuleContext(External_sourceContext, 0);
    }
    sources() {
      return this.getTypedRuleContext(SourcesContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterSource(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitSource(this);
      }
    }
  };
  var SourcesContext = class _SourcesContext extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_sources;
    }
    source() {
      return this.getTypedRuleContext(SourceContext, 0);
    }
    sources() {
      return this.getTypedRuleContext(_SourcesContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterSources(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitSources(this);
      }
    }
  };
  var Dag_sourceContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_dag_source;
    }
    name() {
      return this.getTypedRuleContext(NameContext, 0);
    }
    inference_record() {
      return this.getTypedRuleContext(Inference_recordContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterDag_source(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitDag_source(this);
      }
    }
  };
  var Inference_recordContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_inference_record;
    }
    inference_rule() {
      return this.getTypedRuleContext(Inference_ruleContext, 0);
    }
    useful_info() {
      return this.getTypedRuleContext(Useful_infoContext, 0);
    }
    parents() {
      return this.getTypedRuleContext(ParentsContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterInference_record(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitInference_record(this);
      }
    }
  };
  var Inference_ruleContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_inference_rule;
    }
    atomic_word() {
      return this.getTypedRuleContext(Atomic_wordContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterInference_rule(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitInference_rule(this);
      }
    }
  };
  var Internal_sourceContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_internal_source;
    }
    intro_type() {
      return this.getTypedRuleContext(Intro_typeContext, 0);
    }
    useful_info() {
      return this.getTypedRuleContext(Useful_infoContext, 0);
    }
    parents() {
      return this.getTypedRuleContext(ParentsContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterInternal_source(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitInternal_source(this);
      }
    }
  };
  var Intro_typeContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_intro_type;
    }
    atomic_word() {
      return this.getTypedRuleContext(Atomic_wordContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterIntro_type(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitIntro_type(this);
      }
    }
  };
  var External_sourceContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_external_source;
    }
    file_source() {
      return this.getTypedRuleContext(File_sourceContext, 0);
    }
    theory() {
      return this.getTypedRuleContext(TheoryContext, 0);
    }
    creator_source() {
      return this.getTypedRuleContext(Creator_sourceContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterExternal_source(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitExternal_source(this);
      }
    }
  };
  var File_sourceContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_file_source;
    }
    file_name() {
      return this.getTypedRuleContext(File_nameContext, 0);
    }
    file_info() {
      return this.getTypedRuleContext(File_infoContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterFile_source(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitFile_source(this);
      }
    }
  };
  var File_infoContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_file_info;
    }
    name() {
      return this.getTypedRuleContext(NameContext, 0);
    }
    nothing() {
      return this.getTypedRuleContext(NothingContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterFile_info(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitFile_info(this);
      }
    }
  };
  var TheoryContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_theory;
    }
    theory_name() {
      return this.getTypedRuleContext(Theory_nameContext, 0);
    }
    optional_info() {
      return this.getTypedRuleContext(Optional_infoContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterTheory(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitTheory(this);
      }
    }
  };
  var Theory_nameContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_theory_name;
    }
    atomic_word() {
      return this.getTypedRuleContext(Atomic_wordContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterTheory_name(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitTheory_name(this);
      }
    }
  };
  var Creator_sourceContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_creator_source;
    }
    creator_name() {
      return this.getTypedRuleContext(Creator_nameContext, 0);
    }
    useful_info() {
      return this.getTypedRuleContext(Useful_infoContext, 0);
    }
    parents() {
      return this.getTypedRuleContext(ParentsContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterCreator_source(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitCreator_source(this);
      }
    }
  };
  var Creator_nameContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_creator_name;
    }
    atomic_word() {
      return this.getTypedRuleContext(Atomic_wordContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterCreator_name(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitCreator_name(this);
      }
    }
  };
  var ParentsContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_parents;
    }
    parent_list() {
      return this.getTypedRuleContext(Parent_listContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterParents(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitParents(this);
      }
    }
  };
  var Parent_listContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_parent_list;
    }
    parent_info() {
      return this.getTypedRuleContext(Parent_infoContext, 0);
    }
    comma_parent_info = function(i2) {
      if (i2 === void 0) {
        i2 = null;
      }
      if (i2 === null) {
        return this.getTypedRuleContexts(Comma_parent_infoContext);
      } else {
        return this.getTypedRuleContext(Comma_parent_infoContext, i2);
      }
    };
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterParent_list(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitParent_list(this);
      }
    }
  };
  var Comma_parent_infoContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_comma_parent_info;
    }
    parent_info() {
      return this.getTypedRuleContext(Parent_infoContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterComma_parent_info(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitComma_parent_info(this);
      }
    }
  };
  var Parent_infoContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_parent_info;
    }
    source() {
      return this.getTypedRuleContext(SourceContext, 0);
    }
    parent_details() {
      return this.getTypedRuleContext(Parent_detailsContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterParent_info(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitParent_info(this);
      }
    }
  };
  var Parent_detailsContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_parent_details;
    }
    general_list() {
      return this.getTypedRuleContext(General_listContext, 0);
    }
    nothing() {
      return this.getTypedRuleContext(NothingContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterParent_details(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitParent_details(this);
      }
    }
  };
  var Optional_infoContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_optional_info;
    }
    useful_info() {
      return this.getTypedRuleContext(Useful_infoContext, 0);
    }
    nothing() {
      return this.getTypedRuleContext(NothingContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterOptional_info(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitOptional_info(this);
      }
    }
  };
  var Useful_infoContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_useful_info;
    }
    general_list() {
      return this.getTypedRuleContext(General_listContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterUseful_info(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitUseful_info(this);
      }
    }
  };
  var IncludeContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_include;
    }
    file_name() {
      return this.getTypedRuleContext(File_nameContext, 0);
    }
    include_optionals() {
      return this.getTypedRuleContext(Include_optionalsContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterInclude(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitInclude(this);
      }
    }
  };
  var Include_optionalsContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_include_optionals;
    }
    nothing() {
      return this.getTypedRuleContext(NothingContext, 0);
    }
    formula_selection() {
      return this.getTypedRuleContext(Formula_selectionContext, 0);
    }
    space_name() {
      return this.getTypedRuleContext(Space_nameContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterInclude_optionals(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitInclude_optionals(this);
      }
    }
  };
  var Formula_selectionContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_formula_selection;
    }
    name_list() {
      return this.getTypedRuleContext(Name_listContext, 0);
    }
    Star() {
      return this.getToken(TPTPParser.Star, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterFormula_selection(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitFormula_selection(this);
      }
    }
  };
  var Name_listContext = class _Name_listContext extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_name_list;
    }
    name() {
      return this.getTypedRuleContext(NameContext, 0);
    }
    name_list() {
      return this.getTypedRuleContext(_Name_listContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterName_list(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitName_list(this);
      }
    }
  };
  var Space_nameContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_space_name;
    }
    name() {
      return this.getTypedRuleContext(NameContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterSpace_name(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitSpace_name(this);
      }
    }
  };
  var General_termContext = class _General_termContext extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_general_term;
    }
    general_data() {
      return this.getTypedRuleContext(General_dataContext, 0);
    }
    general_term() {
      return this.getTypedRuleContext(_General_termContext, 0);
    }
    general_list() {
      return this.getTypedRuleContext(General_listContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterGeneral_term(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitGeneral_term(this);
      }
    }
  };
  var General_dataContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_general_data;
    }
    atomic_word() {
      return this.getTypedRuleContext(Atomic_wordContext, 0);
    }
    general_function() {
      return this.getTypedRuleContext(General_functionContext, 0);
    }
    variable() {
      return this.getTypedRuleContext(VariableContext, 0);
    }
    number() {
      return this.getTypedRuleContext(NumberContext, 0);
    }
    Distinct_object() {
      return this.getToken(TPTPParser.Distinct_object, 0);
    }
    formula_data() {
      return this.getTypedRuleContext(Formula_dataContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterGeneral_data(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitGeneral_data(this);
      }
    }
  };
  var General_functionContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_general_function;
    }
    atomic_word() {
      return this.getTypedRuleContext(Atomic_wordContext, 0);
    }
    general_terms() {
      return this.getTypedRuleContext(General_termsContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterGeneral_function(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitGeneral_function(this);
      }
    }
  };
  var Formula_dataContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_formula_data;
    }
    thf_formula() {
      return this.getTypedRuleContext(Thf_formulaContext, 0);
    }
    tff_formula() {
      return this.getTypedRuleContext(Tff_formulaContext, 0);
    }
    fof_formula() {
      return this.getTypedRuleContext(Fof_formulaContext, 0);
    }
    cnf_formula() {
      return this.getTypedRuleContext(Cnf_formulaContext, 0);
    }
    fof_term() {
      return this.getTypedRuleContext(Fof_termContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterFormula_data(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitFormula_data(this);
      }
    }
  };
  var General_listContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_general_list;
    }
    general_terms() {
      return this.getTypedRuleContext(General_termsContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterGeneral_list(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitGeneral_list(this);
      }
    }
  };
  var General_termsContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_general_terms;
    }
    general_term() {
      return this.getTypedRuleContext(General_termContext, 0);
    }
    comma_general_term = function(i2) {
      if (i2 === void 0) {
        i2 = null;
      }
      if (i2 === null) {
        return this.getTypedRuleContexts(Comma_general_termContext);
      } else {
        return this.getTypedRuleContext(Comma_general_termContext, i2);
      }
    };
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterGeneral_terms(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitGeneral_terms(this);
      }
    }
  };
  var Comma_general_termContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_comma_general_term;
    }
    general_term() {
      return this.getTypedRuleContext(General_termContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterComma_general_term(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitComma_general_term(this);
      }
    }
  };
  var NameContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_name;
    }
    atomic_word() {
      return this.getTypedRuleContext(Atomic_wordContext, 0);
    }
    Integer() {
      return this.getToken(TPTPParser.Integer, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterName(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitName(this);
      }
    }
  };
  var Atomic_wordContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_atomic_word;
    }
    Lower_word() {
      return this.getToken(TPTPParser.Lower_word, 0);
    }
    Single_quoted() {
      return this.getToken(TPTPParser.Single_quoted, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterAtomic_word(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitAtomic_word(this);
      }
    }
  };
  var Atomic_defined_wordContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_atomic_defined_word;
    }
    Dollar_word() {
      return this.getToken(TPTPParser.Dollar_word, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterAtomic_defined_word(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitAtomic_defined_word(this);
      }
    }
  };
  var Atomic_system_wordContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_atomic_system_word;
    }
    Dollar_dollar_word() {
      return this.getToken(TPTPParser.Dollar_dollar_word, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterAtomic_system_word(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitAtomic_system_word(this);
      }
    }
  };
  var NumberContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_number;
    }
    Integer() {
      return this.getToken(TPTPParser.Integer, 0);
    }
    Rational() {
      return this.getToken(TPTPParser.Rational, 0);
    }
    Real() {
      return this.getToken(TPTPParser.Real, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterNumber(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitNumber(this);
      }
    }
  };
  var File_nameContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_file_name;
    }
    atomic_word() {
      return this.getTypedRuleContext(Atomic_wordContext, 0);
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterFile_name(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitFile_name(this);
      }
    }
  };
  var NothingContext = class extends Qn.ParserRuleContext {
    constructor(parser, parent, invokingState) {
      if (parent === void 0) {
        parent = null;
      }
      if (invokingState === void 0 || invokingState === null) {
        invokingState = -1;
      }
      super(parent, invokingState);
      this.parser = parser;
      this.ruleIndex = TPTPParser.RULE_nothing;
    }
    enterRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.enterNothing(this);
      }
    }
    exitRule(listener) {
      if (listener instanceof TPTPListener) {
        listener.exitNothing(this);
      }
    }
  };
  TPTPParser.Tptp_fileContext = Tptp_fileContext;
  TPTPParser.Tptp_inputContext = Tptp_inputContext;
  TPTPParser.Annotated_formulaContext = Annotated_formulaContext;
  TPTPParser.Tpi_annotatedContext = Tpi_annotatedContext;
  TPTPParser.Tpi_formulaContext = Tpi_formulaContext;
  TPTPParser.Thf_annotatedContext = Thf_annotatedContext;
  TPTPParser.Tff_annotatedContext = Tff_annotatedContext;
  TPTPParser.Tcf_annotatedContext = Tcf_annotatedContext;
  TPTPParser.Fof_annotatedContext = Fof_annotatedContext;
  TPTPParser.Cnf_annotatedContext = Cnf_annotatedContext;
  TPTPParser.AnnotationsContext = AnnotationsContext;
  TPTPParser.Formula_roleContext = Formula_roleContext;
  TPTPParser.Thf_formulaContext = Thf_formulaContext;
  TPTPParser.Thf_logic_formulaContext = Thf_logic_formulaContext;
  TPTPParser.Thf_binary_formulaContext = Thf_binary_formulaContext;
  TPTPParser.Thf_binary_nonassocContext = Thf_binary_nonassocContext;
  TPTPParser.Thf_binary_assocContext = Thf_binary_assocContext;
  TPTPParser.Thf_or_formulaContext = Thf_or_formulaContext;
  TPTPParser.Thf_and_formulaContext = Thf_and_formulaContext;
  TPTPParser.Thf_apply_formulaContext = Thf_apply_formulaContext;
  TPTPParser.Thf_unit_formulaContext = Thf_unit_formulaContext;
  TPTPParser.Thf_preunit_formulaContext = Thf_preunit_formulaContext;
  TPTPParser.Thf_unitary_formulaContext = Thf_unitary_formulaContext;
  TPTPParser.Thf_quantified_formulaContext = Thf_quantified_formulaContext;
  TPTPParser.Thf_quantificationContext = Thf_quantificationContext;
  TPTPParser.Thf_variable_listContext = Thf_variable_listContext;
  TPTPParser.Thf_typed_variableContext = Thf_typed_variableContext;
  TPTPParser.Thf_unary_formulaContext = Thf_unary_formulaContext;
  TPTPParser.Thf_prefix_unaryContext = Thf_prefix_unaryContext;
  TPTPParser.Thf_infix_unaryContext = Thf_infix_unaryContext;
  TPTPParser.Thf_atomic_formulaContext = Thf_atomic_formulaContext;
  TPTPParser.Thf_plain_atomicContext = Thf_plain_atomicContext;
  TPTPParser.Thf_defined_atomicContext = Thf_defined_atomicContext;
  TPTPParser.Thf_defined_termContext = Thf_defined_termContext;
  TPTPParser.Thf_defined_infixContext = Thf_defined_infixContext;
  TPTPParser.Thf_system_atomicContext = Thf_system_atomicContext;
  TPTPParser.Thf_letContext = Thf_letContext;
  TPTPParser.Thf_let_typesContext = Thf_let_typesContext;
  TPTPParser.Thf_atom_typing_listContext = Thf_atom_typing_listContext;
  TPTPParser.Thf_let_defnsContext = Thf_let_defnsContext;
  TPTPParser.Thf_let_defnContext = Thf_let_defnContext;
  TPTPParser.Thf_let_defn_listContext = Thf_let_defn_listContext;
  TPTPParser.Thf_unitary_termContext = Thf_unitary_termContext;
  TPTPParser.Thf_conn_termContext = Thf_conn_termContext;
  TPTPParser.Thf_tupleContext = Thf_tupleContext;
  TPTPParser.Thf_fof_functionContext = Thf_fof_functionContext;
  TPTPParser.Thf_argumentsContext = Thf_argumentsContext;
  TPTPParser.Thf_formula_listContext = Thf_formula_listContext;
  TPTPParser.Comma_thf_logic_formulaContext = Comma_thf_logic_formulaContext;
  TPTPParser.Thf_atom_typingContext = Thf_atom_typingContext;
  TPTPParser.Thf_top_level_typeContext = Thf_top_level_typeContext;
  TPTPParser.Thf_unitary_typeContext = Thf_unitary_typeContext;
  TPTPParser.Thf_apply_typeContext = Thf_apply_typeContext;
  TPTPParser.Thf_binary_typeContext = Thf_binary_typeContext;
  TPTPParser.Thf_mapping_typeContext = Thf_mapping_typeContext;
  TPTPParser.Thf_xprod_typeContext = Thf_xprod_typeContext;
  TPTPParser.Thf_union_typeContext = Thf_union_typeContext;
  TPTPParser.Thf_subtypeContext = Thf_subtypeContext;
  TPTPParser.Thf_definitionContext = Thf_definitionContext;
  TPTPParser.Thf_sequentContext = Thf_sequentContext;
  TPTPParser.Tff_formulaContext = Tff_formulaContext;
  TPTPParser.Tff_logic_formulaContext = Tff_logic_formulaContext;
  TPTPParser.Tff_binary_formulaContext = Tff_binary_formulaContext;
  TPTPParser.Tff_binary_nonassocContext = Tff_binary_nonassocContext;
  TPTPParser.Tff_binary_assocContext = Tff_binary_assocContext;
  TPTPParser.Tff_or_formulaContext = Tff_or_formulaContext;
  TPTPParser.Tff_and_formulaContext = Tff_and_formulaContext;
  TPTPParser.Tff_unit_formulaContext = Tff_unit_formulaContext;
  TPTPParser.Tff_preunit_formulaContext = Tff_preunit_formulaContext;
  TPTPParser.Tff_unitary_formulaContext = Tff_unitary_formulaContext;
  TPTPParser.Txf_unitary_formulaContext = Txf_unitary_formulaContext;
  TPTPParser.Tff_quantified_formulaContext = Tff_quantified_formulaContext;
  TPTPParser.Tff_variable_listContext = Tff_variable_listContext;
  TPTPParser.Tff_variableContext = Tff_variableContext;
  TPTPParser.Tff_typed_variableContext = Tff_typed_variableContext;
  TPTPParser.Tff_unary_formulaContext = Tff_unary_formulaContext;
  TPTPParser.Tff_prefix_unaryContext = Tff_prefix_unaryContext;
  TPTPParser.Tff_infix_unaryContext = Tff_infix_unaryContext;
  TPTPParser.Tff_atomic_formulaContext = Tff_atomic_formulaContext;
  TPTPParser.Tff_plain_atomicContext = Tff_plain_atomicContext;
  TPTPParser.Tff_defined_atomicContext = Tff_defined_atomicContext;
  TPTPParser.Tff_defined_plainContext = Tff_defined_plainContext;
  TPTPParser.Tff_defined_infixContext = Tff_defined_infixContext;
  TPTPParser.Tff_system_atomicContext = Tff_system_atomicContext;
  TPTPParser.Txf_letContext = Txf_letContext;
  TPTPParser.Txf_let_typesContext = Txf_let_typesContext;
  TPTPParser.Tff_atom_typing_listContext = Tff_atom_typing_listContext;
  TPTPParser.Txf_let_defnsContext = Txf_let_defnsContext;
  TPTPParser.Txf_let_defnContext = Txf_let_defnContext;
  TPTPParser.Txf_let_LHSContext = Txf_let_LHSContext;
  TPTPParser.Txf_let_defn_listContext = Txf_let_defn_listContext;
  TPTPParser.Nxf_atomContext = Nxf_atomContext;
  TPTPParser.Tff_termContext = Tff_termContext;
  TPTPParser.Tff_unitary_termContext = Tff_unitary_termContext;
  TPTPParser.Txf_tupleContext = Txf_tupleContext;
  TPTPParser.Tff_argumentsContext = Tff_argumentsContext;
  TPTPParser.Comma_tff_termContext = Comma_tff_termContext;
  TPTPParser.Tff_atom_typingContext = Tff_atom_typingContext;
  TPTPParser.Tff_top_level_typeContext = Tff_top_level_typeContext;
  TPTPParser.Tff_non_atomic_typeContext = Tff_non_atomic_typeContext;
  TPTPParser.Tf1_quantified_typeContext = Tf1_quantified_typeContext;
  TPTPParser.Tff_monotypeContext = Tff_monotypeContext;
  TPTPParser.Tff_unitary_typeContext = Tff_unitary_typeContext;
  TPTPParser.Tff_atomic_typeContext = Tff_atomic_typeContext;
  TPTPParser.Tff_type_argumentsContext = Tff_type_argumentsContext;
  TPTPParser.Tff_mapping_typeContext = Tff_mapping_typeContext;
  TPTPParser.Tff_xprod_typeContext = Tff_xprod_typeContext;
  TPTPParser.Txf_tuple_typeContext = Txf_tuple_typeContext;
  TPTPParser.Tff_type_listContext = Tff_type_listContext;
  TPTPParser.Tff_subtypeContext = Tff_subtypeContext;
  TPTPParser.Txf_definitionContext = Txf_definitionContext;
  TPTPParser.Txf_sequentContext = Txf_sequentContext;
  TPTPParser.Nhf_long_connectiveContext = Nhf_long_connectiveContext;
  TPTPParser.Nhf_parameter_listContext = Nhf_parameter_listContext;
  TPTPParser.Nhf_parameterContext = Nhf_parameterContext;
  TPTPParser.Nhf_key_pairContext = Nhf_key_pairContext;
  TPTPParser.Nxf_long_connectiveContext = Nxf_long_connectiveContext;
  TPTPParser.Nxf_parameter_listContext = Nxf_parameter_listContext;
  TPTPParser.Nxf_parameterContext = Nxf_parameterContext;
  TPTPParser.Nxf_key_pairContext = Nxf_key_pairContext;
  TPTPParser.Ntf_connective_nameContext = Ntf_connective_nameContext;
  TPTPParser.Ntf_indexContext = Ntf_indexContext;
  TPTPParser.Ntf_short_connectiveContext = Ntf_short_connectiveContext;
  TPTPParser.Tcf_formulaContext = Tcf_formulaContext;
  TPTPParser.Tcf_logic_formulaContext = Tcf_logic_formulaContext;
  TPTPParser.Tcf_quantified_formulaContext = Tcf_quantified_formulaContext;
  TPTPParser.Fof_formulaContext = Fof_formulaContext;
  TPTPParser.Fof_logic_formulaContext = Fof_logic_formulaContext;
  TPTPParser.Fof_binary_formulaContext = Fof_binary_formulaContext;
  TPTPParser.Fof_binary_nonassocContext = Fof_binary_nonassocContext;
  TPTPParser.Fof_binary_assocContext = Fof_binary_assocContext;
  TPTPParser.Fof_or_formulaContext = Fof_or_formulaContext;
  TPTPParser.Fof_and_formulaContext = Fof_and_formulaContext;
  TPTPParser.Fof_unary_formulaContext = Fof_unary_formulaContext;
  TPTPParser.Fof_infix_unaryContext = Fof_infix_unaryContext;
  TPTPParser.Fof_unit_formulaContext = Fof_unit_formulaContext;
  TPTPParser.Fof_unitary_formulaContext = Fof_unitary_formulaContext;
  TPTPParser.Fof_quantified_formulaContext = Fof_quantified_formulaContext;
  TPTPParser.Fof_variable_listContext = Fof_variable_listContext;
  TPTPParser.Fof_atomic_formulaContext = Fof_atomic_formulaContext;
  TPTPParser.Fof_plain_atomic_formulaContext = Fof_plain_atomic_formulaContext;
  TPTPParser.Fof_defined_atomic_formulaContext = Fof_defined_atomic_formulaContext;
  TPTPParser.Fof_defined_plain_formulaContext = Fof_defined_plain_formulaContext;
  TPTPParser.Fof_defined_infix_formulaContext = Fof_defined_infix_formulaContext;
  TPTPParser.Fof_system_atomic_formulaContext = Fof_system_atomic_formulaContext;
  TPTPParser.Fof_plain_termContext = Fof_plain_termContext;
  TPTPParser.Fof_defined_termContext = Fof_defined_termContext;
  TPTPParser.Fof_defined_atomic_termContext = Fof_defined_atomic_termContext;
  TPTPParser.Fof_defined_plain_termContext = Fof_defined_plain_termContext;
  TPTPParser.Fof_system_termContext = Fof_system_termContext;
  TPTPParser.Fof_argumentsContext = Fof_argumentsContext;
  TPTPParser.Fof_termContext = Fof_termContext;
  TPTPParser.Fof_function_termContext = Fof_function_termContext;
  TPTPParser.Fof_sequentContext = Fof_sequentContext;
  TPTPParser.Fof_formula_tupleContext = Fof_formula_tupleContext;
  TPTPParser.Fof_formula_tuple_listContext = Fof_formula_tuple_listContext;
  TPTPParser.Comma_fof_logic_formulaContext = Comma_fof_logic_formulaContext;
  TPTPParser.Cnf_formulaContext = Cnf_formulaContext;
  TPTPParser.Cnf_disjunctionContext = Cnf_disjunctionContext;
  TPTPParser.Cnf_literalContext = Cnf_literalContext;
  TPTPParser.Thf_quantifierContext = Thf_quantifierContext;
  TPTPParser.Thf_unary_connectiveContext = Thf_unary_connectiveContext;
  TPTPParser.Th1_quantifierContext = Th1_quantifierContext;
  TPTPParser.Th0_quantifierContext = Th0_quantifierContext;
  TPTPParser.Subtype_signContext = Subtype_signContext;
  TPTPParser.Tff_unary_connectiveContext = Tff_unary_connectiveContext;
  TPTPParser.Tff_quantifierContext = Tff_quantifierContext;
  TPTPParser.Fof_quantifierContext = Fof_quantifierContext;
  TPTPParser.Nonassoc_connectiveContext = Nonassoc_connectiveContext;
  TPTPParser.Assoc_connectiveContext = Assoc_connectiveContext;
  TPTPParser.Unary_connectiveContext = Unary_connectiveContext;
  TPTPParser.Gentzen_arrowContext = Gentzen_arrowContext;
  TPTPParser.AssignmentContext = AssignmentContext;
  TPTPParser.IdenticalContext = IdenticalContext;
  TPTPParser.Type_constantContext = Type_constantContext;
  TPTPParser.Type_functorContext = Type_functorContext;
  TPTPParser.Defined_typeContext = Defined_typeContext;
  TPTPParser.AtomContext = AtomContext;
  TPTPParser.Untyped_atomContext = Untyped_atomContext;
  TPTPParser.Defined_infix_predContext = Defined_infix_predContext;
  TPTPParser.Infix_equalityContext = Infix_equalityContext;
  TPTPParser.Infix_inequalityContext = Infix_inequalityContext;
  TPTPParser.ConstantContext = ConstantContext;
  TPTPParser.FunctorContext = FunctorContext;
  TPTPParser.Defined_constantContext = Defined_constantContext;
  TPTPParser.Defined_functorContext = Defined_functorContext;
  TPTPParser.System_constantContext = System_constantContext;
  TPTPParser.System_functorContext = System_functorContext;
  TPTPParser.Def_or_sys_constantContext = Def_or_sys_constantContext;
  TPTPParser.Th1_defined_termContext = Th1_defined_termContext;
  TPTPParser.Defined_termContext = Defined_termContext;
  TPTPParser.VariableContext = VariableContext;
  TPTPParser.SourceContext = SourceContext;
  TPTPParser.SourcesContext = SourcesContext;
  TPTPParser.Dag_sourceContext = Dag_sourceContext;
  TPTPParser.Inference_recordContext = Inference_recordContext;
  TPTPParser.Inference_ruleContext = Inference_ruleContext;
  TPTPParser.Internal_sourceContext = Internal_sourceContext;
  TPTPParser.Intro_typeContext = Intro_typeContext;
  TPTPParser.External_sourceContext = External_sourceContext;
  TPTPParser.File_sourceContext = File_sourceContext;
  TPTPParser.File_infoContext = File_infoContext;
  TPTPParser.TheoryContext = TheoryContext;
  TPTPParser.Theory_nameContext = Theory_nameContext;
  TPTPParser.Creator_sourceContext = Creator_sourceContext;
  TPTPParser.Creator_nameContext = Creator_nameContext;
  TPTPParser.ParentsContext = ParentsContext;
  TPTPParser.Parent_listContext = Parent_listContext;
  TPTPParser.Comma_parent_infoContext = Comma_parent_infoContext;
  TPTPParser.Parent_infoContext = Parent_infoContext;
  TPTPParser.Parent_detailsContext = Parent_detailsContext;
  TPTPParser.Optional_infoContext = Optional_infoContext;
  TPTPParser.Useful_infoContext = Useful_infoContext;
  TPTPParser.IncludeContext = IncludeContext;
  TPTPParser.Include_optionalsContext = Include_optionalsContext;
  TPTPParser.Formula_selectionContext = Formula_selectionContext;
  TPTPParser.Name_listContext = Name_listContext;
  TPTPParser.Space_nameContext = Space_nameContext;
  TPTPParser.General_termContext = General_termContext;
  TPTPParser.General_dataContext = General_dataContext;
  TPTPParser.General_functionContext = General_functionContext;
  TPTPParser.Formula_dataContext = Formula_dataContext;
  TPTPParser.General_listContext = General_listContext;
  TPTPParser.General_termsContext = General_termsContext;
  TPTPParser.Comma_general_termContext = Comma_general_termContext;
  TPTPParser.NameContext = NameContext;
  TPTPParser.Atomic_wordContext = Atomic_wordContext;
  TPTPParser.Atomic_defined_wordContext = Atomic_defined_wordContext;
  TPTPParser.Atomic_system_wordContext = Atomic_system_wordContext;
  TPTPParser.NumberContext = NumberContext;
  TPTPParser.File_nameContext = File_nameContext;
  TPTPParser.NothingContext = NothingContext;

  // parserIDV.js
  window.antlr4 = antlr4_exports;
  function stripParens(formula) {
    return formula.replace(/\s+/g, "").replace(/[()]/g, "");
  }
  function interpretationLabel(node) {
    let s2 = node.formula.replace(/"/g, '\\"');
    let lastColonPos = s2.lastIndexOf(":");
    let beforeColon = s2.substr(0, lastColonPos).trim();
    if (beforeColon.startsWith("'") && beforeColon.endsWith("'")) {
      return s2.split("'")[1];
    }
    return lastColonPos == -1 ? s2 : beforeColon;
  }
  function getNodeShape(node) {
    let shapeMap = {
      axiom: "invtriangle",
      conjecture: "house",
      negated_conjecture: "invhouse",
      plain: "ellipse",
      hypothesis: "diamond"
    };
    if (stripParens(node.formula) == "$false") {
      return "box";
    }
    if (window.interpretation && stripParens(node.formula) == "$true") {
      return "box";
    }
    return shapeMap[node.role];
  }
  function getNodeColor(node) {
    let colorMap = {
      thf: "blue",
      tff: "orange",
      tcf: "grey30",
      fof: "green",
      cnf: "red"
    };
    return colorMap[node.type];
  }
  function scaleFromInterestingness2(interestingness) {
    interestingness = +interestingness;
    let defaultSize = 1;
    if ([-1, void 0].includes(interestingness)) {
      return defaultSize;
    } else {
      return 0.5 * (1 + interestingness) + 0.5;
    }
  }
  window.scaleFromInterestingness = scaleFromInterestingness2;
  function getParentsFromSource(source, node) {
    let dag = source.dag_source();
    let sources = source.sources();
    if (sources !== null) {
      for (let s2 of sources) {
        getParentsFromSource(s2, node);
      }
    } else if (dag === null) {
      return;
    }
    if (dag.inference_record()) {
      let inference_record = dag.inference_record();
      node.inference_record = inference_record.getText();
      let parent_list = [inference_record.parents().parent_list().parent_info()];
      window.parent_list = parent_list;
      window.inference_record = inference_record;
      parent_list = parent_list.concat(
        inference_record.parents().parent_list().comma_parent_info().map((comma_info) => comma_info.parent_info())
      );
      for (let i2 = 0; i2 < parent_list.length; i2++) {
        let p2 = parent_list[i2];
        let ps = p2.source();
        if (ps.dag_source()) {
          if (ps.dag_source().name()) {
            node.parents.push(ps.getText());
          } else {
            try {
              let sources2 = [];
              window.ps = ps;
              let parents = ps.dag_source().inference_record().parents().parent_list().parent_info();
              parents = [parents, ...ps.dag_source().inference_record().parents().parent_list().comma_parent_info().map((x2) => x2.parent_info())];
              sources2 = parents.map((x2) => x2.source());
              for (let s2 of sources2) {
                getParentsFromSource(s2, node);
              }
            } catch (e2) {
              console.log(`failed to parse dag source: ${ps.dag_source().getText()}`);
              console.log(e2);
            }
          }
        } else if (ps.sources()) {
          let sources2 = ps.sources().source();
          for (let s2 of sources2) {
            getParentsFromSource(s2, node);
          }
        } else {
          console.log(`${node.name} has source ${source}`);
        }
      }
    } else if (dag.name()) {
      node.parents.push(dag.name().getText());
    }
  }
  window.getParentsFromSource = getParentsFromSource;
  function getNodeLevel(source, node) {
    let regex = /level\(([0-9]+)\)/;
    try {
      node.level = parseInt(node.inference_record.match(regex)[1]);
    } catch (e2) {
      window.source = source;
      node.level = parseInt(
        source.internal_source().getText().match(regex)[1]
      );
    }
  }
  var Formatter = class extends TPTPListener {
    constructor() {
      super();
      this.node_map = {};
    }
    enterThf_annotated(ctx) {
      this.process(ctx, "thf");
    }
    enterTff_annotated(ctx) {
      this.process(ctx, "tff");
    }
    enterTcf_annotated(ctx) {
      this.process(ctx, "tcf");
    }
    enterFof_annotated(ctx) {
      this.process(ctx, "fof");
    }
    enterCnf_annotated(ctx) {
      this.process(ctx, "cnf");
      window.ctx = ctx;
    }
    process(ctx, type) {
      let role = ctx.formula_role().getText();
      if (!["conjecture", "negated_conjecture", "axiom", "plain", "type", "theorem", "hypothesis"].includes(role)) {
        return;
      }
      let node = {
        name: ctx.name().getText(),
        type,
        role,
        formula: ctx[`${type}_formula`]().getText(),
        parents: [],
        inference_record: "",
        info: {},
        level: void 0,
        tptp: ctx.parentCtx.parentCtx.getText()
      };
      try {
        let info = ctx.annotations().optional_info().useful_info().general_list().general_terms().getText().split(",");
        let infoObj = {};
        for (let s2 of info) {
          let [key, value] = s2.split("(");
          value = value.substring(0, value.length - 1);
          infoObj[key] = value;
        }
        node.info = infoObj;
      } catch (e2) {
      }
      let source;
      try {
        source = ctx.annotations().source();
        getParentsFromSource(source, node);
      } catch (e2) {
      }
      try {
        getNodeLevel(source, node);
      } catch (e2) {
      }
      this.node_map[node.name] = node;
    }
  };
  function abbreviate(label) {
    if (label.length > 7) {
      return label.substring(0, 4) + "...";
    }
    return label;
  }
  function nodeToGV(s2) {
    return function(node) {
      let label = window.interpretation ? interpretationLabel(node) : node.name;
      label = node.graphviz.inviz ? "" : abbreviate(label);
      s2.push(`"${node.name}" [
			fixedsize=true,
			label="${label}",
			${node.graphviz.invis ? "style=invis," : ""}
			shape=${node.graphviz.invis ? "point" : node.graphviz.shape},
			color="${node.graphviz.color}",
			fillcolor="${node.graphviz.fillcolor}",
			width="${node.graphviz.width}",
			height="${node.graphviz.height}",
			penwidth="3.0"
		]`);
    };
  }
  var proofToGV = function(nodes) {
    function isTopRow(type) {
      return function(node) {
        return node.parents.every(function(parentName) {
          let parent = nodes[parentName];
          if (parent === void 0) {
            return false;
          }
          let parentType = nodes[parentName].type;
          return parentType != type || top_row.includes(parent);
        });
      };
    }
    let nodeList = Object.values(nodes);
    let gvLines = [];
    let top_row = [];
    let others = nodeList;
    if (!window.interpretation) {
      top_row = nodeList.filter((e2) => e2.parents.length == 0);
      others = nodeList.filter((e2) => e2.parents.length != 0);
    }
    window.ns = {};
    let langs = ["thf", "tff", "tcf", "fof", "cnf"];
    for (let lang of langs) {
      ns[lang] = others.filter((e2) => e2.type == lang);
      ns[`top_${lang}`] = ns[lang].filter(isTopRow(lang));
    }
    gvLines.push("digraph G {");
    gvLines.push('node [style=filled, fontname="JetBrains Mono", fontsize=10];');
    gvLines.push('newrank="true"');
    let clusterColor = "transparent";
    gvLines.push("subgraph clusterAxioms {");
    gvLines.push(`pencolor=${clusterColor}`);
    top_row.forEach(nodeToGV(gvLines));
    if (!window.interpretation)
      gvLines.push("}");
    for (let lang of langs) {
      if (!window.interpretation) {
        gvLines.push(`subgraph cluster${lang}s {`);
        gvLines.push(`pencolor=${clusterColor}`);
      }
      ns[lang].forEach(nodeToGV(gvLines));
      if (!window.interpretation) {
        gvLines.push(`{rank=same; ` + ns[`top_${lang}`].map((e2) => `"${e2.name}"`).join(" ") + `}`);
        gvLines.push(`}`);
      }
    }
    window.levels = {};
    for (let node of nodeList) {
      if (typeof node.level == "number") {
        if (!Object.keys(levels).includes(`${node.level}`)) {
          console.log(`Level ${node.level} not in levels, making new`);
          levels[node.level] = [];
        }
        levels[node.level].push(node.name);
      }
    }
    for (const [level, names] of Object.entries(levels)) {
      gvLines.push(`{rank=same; ${names.map((x2) => `"${x2}"`).join(" ")}}`);
    }
    for (let node of nodeList) {
      let arrowOrNot = node.graphviz.invis ? " [dir=none] " : "";
      node.parents.forEach(function(p2) {
        gvLines.push(`"${p2}" -> "${node.name}"` + arrowOrNot);
      });
    }
    gvLines.push("}");
    return gvLines.join("\n");
  };
  var parseProof = function(proofText) {
    let chars = new Qn.InputStream(proofText);
    let lexer = new TPTPLexer(chars);
    let tokens = new Qn.CommonTokenStream(lexer);
    let parser = new TPTPParser(tokens);
    parser.buildParseTrees = true;
    let formatter = new Formatter();
    let tree;
    console.log("Beginning parsing...");
    while (tree = parser.tptp_input()) {
      if (tree.getText() == "<EOF>") break;
      Qn.tree.ParseTreeWalker.DEFAULT.walk(formatter, tree);
    }
    console.log("Finished parsing!");
    let nm = formatter.node_map;
    window.formatter = formatter;
    for (let name of Object.keys(nm)) {
      let node = nm[name];
      node.graphviz = {
        shape: getNodeShape(node),
        color: getNodeColor(node),
        fillcolor: "#c0c0c0"
      };
      if (node.info["interesting"] !== void 0) {
        node.graphviz.width = scaleFromInterestingness2(node.info.interesting);
        node.graphviz.height = scaleFromInterestingness2(node.info.interesting);
      }
      if (node.children === void 0) {
        node.children = [];
      }
      let parentsCopy = Array.from(node["parents"]);
      for (let parentName of parentsCopy) {
        if (parentName in nm) {
          if (nm[parentName]["children"] === void 0) {
            nm[parentName]["children"] = [name];
          } else {
            nm[parentName]["children"].push(name);
          }
        } else {
          console.log(`Error: ${parentName} was a parentNode of ${node["name"]}, but is not in the map!`);
          while (node["parents"].includes(parentName)) {
            console.log(`Removing ${parentName} from ${node.name}'s parents`);
            let location = node["parents"].indexOf(parentName);
            node["parents"].splice(location, 1);
          }
        }
      }
    }
    return nm;
  };

  // helpersIDV.js
  function choose(choices) {
    var index = Math.floor(Math.random() * choices.length);
    return choices[index];
  }
  window.choose = choose;
  function htmlDecode(value) {
    let el = document.createElement("textarea");
    el.innerHTML = value;
    return el.innerText;
  }
  function showLoadingSpinner() {
    document.getElementById("loadingSymbol").classList.remove("hidden");
  }
  function hideLoadingSpinner() {
    document.getElementById("loadingSymbol").classList.add("hidden");
  }
  function ancestors(node, depth = 0, proofObj = window.proof) {
    let l2 = [];
    let queue = [[node, depth]];
    let interpretationOffset = node.level;
    let nodeName;
    while (queue.length > 0) {
      [node, depth] = queue.shift();
      let parents = node.parents.map((name) => [proofObj[name], window.interpretation ? proofObj[name].level - interpretationOffset : depth - 1]);
      l2.push(...parents);
      queue.push(...parents);
    }
    return l2;
  }
  window.ancestors = ancestors;
  function descendants(node, depth = 0, proofObj = window.proof) {
    let l2 = [];
    let queue = [[node, depth]];
    let interpretationOffset = node.level;
    let nodeName;
    while (queue.length > 0) {
      [node, depth] = queue.shift();
      let children = node.children.map((name) => [proofObj[name], window.interpretation ? proofObj[name].level - interpretationOffset : depth + 1]);
      l2.push(...children);
      queue.push(...children);
    }
    return l2;
  }
  window.descendants = descendants;
  function assignColorToNode(color, node) {
    try {
      node.graphviz.fillcolor = color;
      node.svgNode.style.fill = color;
    } catch (e2) {
    }
  }
  function nodeIsUninteresting(node) {
    if (node.children.length == 0) {
      return false;
    }
    let anc = ancestors(originalProof[node.name], 0, originalProof).map(function(vals) {
      return vals[0].role;
    });
    if (window.hideConjecture) {
      if (["conjecture", "negated_conjecture"].includes(node.role)) {
        return true;
      } else if (anc.includes("conjecture") || anc.includes("negated_conjecture")) {
        return true;
      }
    }
    return +node.info.interesting < window.interestFilterVal && ![-1, void 0].includes(+node.info.interesting);
  }
  var graphviz = d3.select("#graph").graphviz();
  window.graphviz = graphviz;
  graphviz.zoomScaleExtent([0.01, 100]);
  graphviz.transition(function() {
    return d3.transition("main").duration(500);
  });
  graphviz.engine("dot");
  function getNodeName(hovered) {
    return window.interpretation ? hovered.querySelector("text").getAttribute("proofKey") : hovered.querySelector("title").innerHTML;
  }
  function showGV(dot) {
    showLoadingSpinner();
    graphviz.renderDot(htmlDecode(dot));
    graphviz.on("end", function() {
      for (let node of document.querySelectorAll("g.node")) {
        node.addEventListener("mouseenter", nodeHoverEventListener);
        let nodeName = getNodeName(node);
        try {
          window.proof[nodeName].svgNode = node.querySelector("polygon, ellipse");
        } catch (e2) {
          window.nodeName = nodeName;
        }
      }
      hideLoadingSpinner();
    });
  }
  function nodeHoverEventListener(e2) {
    if (e2.buttons != 0) {
      return;
    }
    let nodeName = getNodeName(e2.currentTarget);
    let node = proof[nodeName];
    let nodeInfo = document.getElementById("nodeInfo");
    let tptpTextareaOpen = "";
    try {
      tptpTextareaOpen = document.getElementById("tptpNodeStatement").classList.contains("open") ? "open" : "";
    } catch (e3) {
    }
    let interestingnessHTML = "";
    if (node.info.interesting != void 0) {
      interestingnessHTML = `<b>Interestingness: </b>${node.info.interesting}<br>`;
    }
    nodeInfo.innerHTML = `<hr>
		<b>Name:</b> ${node["name"]}<br>
		<b>Type:</b> ${node["type"]}<br>
		<b>Role:</b> ${node["role"]}<br>
		${interestingnessHTML}
		<b>Formula:</b> ${node["formula"]}<br>
		<b>Inference Record:</b> ${node["inference_record"]}
		<hr>

		<div class="box">
			<h4 id="tptpNodeStatement" 
				class="settingsHeader ${tptpTextareaOpen}" 
				onclick="collapseBox(this)">
					Full TPTP Statement: 
					<span class="triangle"></span>
			</h4>
			<textarea id="tptpTextarea" class="${tptpTextareaOpen}">${node["tptp"]}</textarea>
		</div>
  `;
    recolorNodesByInterest();
    function colorHelper(depth, min, max) {
      let startColor = [255, 0, 0];
      let midColor = [255, 255, 255];
      let endColor = [0, 0, 255];
      let frac, r2, g2, b2;
      if (depth < 0) {
        frac = (depth - min) / (0 - min);
        r2 = Math.round(startColor[0] + frac * (midColor[0] - startColor[0]));
        g2 = Math.round(startColor[1] + frac * (midColor[1] - startColor[1]));
        b2 = Math.round(startColor[2] + frac * (midColor[2] - startColor[2]));
      } else if (depth > 0) {
        frac = 1 - (max - depth) / max;
        r2 = Math.round(midColor[0] + frac * (endColor[0] - midColor[0]));
        g2 = Math.round(midColor[1] + frac * (endColor[1] - midColor[1]));
        b2 = Math.round(midColor[2] + frac * (endColor[2] - midColor[2]));
      } else {
        [r2, g2, b2] = midColor;
      }
      function hex(v2) {
        return v2.toString(16).length == 2 ? v2.toString(16) : "0" + v2.toString(16);
      }
      return `#${hex(r2)}${hex(g2)}${hex(b2)}`;
    }
    let anc = ancestors(node);
    let minDepth = 0;
    anc.forEach(function(a2) {
      if (a2[1] < minDepth) {
        minDepth = a2[1];
      }
    });
    let des = descendants(node);
    let maxDepth = 0;
    des.forEach(function(d2) {
      if (d2[1] > maxDepth) {
        maxDepth = d2[1];
      }
    });
    for (let [a2, depth] of anc) {
      if (a2.graphviz.fillcolor != "#000000")
        assignColorToNode(colorHelper(depth, minDepth, maxDepth), a2);
    }
    for (let [d2, depth] of des) {
      if (d2.graphviz.fillcolor != "#000000")
        assignColorToNode(colorHelper(depth, minDepth, maxDepth), d2);
    }
    if (node.graphviz.fillcolor != "#000000")
      assignColorToNode(colorHelper(0, minDepth, maxDepth), node);
  }
  function assignInterestingnessToHeightAndWidth() {
    for (let node of Object.values(window.proof)) {
      if (window.interestScalingBool && node.info.interesting !== void 0) {
        node.graphviz.width = scaleFromInterestingness(node.info.interesting);
        node.graphviz.height = scaleFromInterestingness(node.info.interesting);
      } else {
        node.graphviz.width = void 0;
        node.graphviz.height = void 0;
      }
    }
  }
  window.assignInterestingnessToHeightAndWidth = assignInterestingnessToHeightAndWidth;
  function getInterest() {
    showLoadingSpinner();
    Array.from(document.querySelectorAll(".interestHidden")).map((x2) => x2.style.display = "block");
    if (!window.interestScalingBool) {
      toggleInterestScaling();
    }
    const formData = new FormData();
    formData.append("ProblemSource", "FORMULAE");
    formData.append("FORMULAEProblem", document.getElementById("proofText").innerText);
    formData.append("SolutionFormat", "TPTP");
    formData.append("QuietFlag", "-q01");
    formData.append("SubmitButton", "ProcessSolution");
    formData.append("System___AGInTRater---0.0", "AGInTRater---0.0");
    formData.append("TimeLimit___AGInTRater---0.0", "60");
    formData.append("Transform___AGInTRater---0.0", "none");
    formData.append("Format___AGInTRater---0.0", "tptp:raw");
    formData.append("Command___AGInTRater---0.0", "AGInTRater -c %s");
    fetch("https://tptp.org/cgi-bin/SystemOnTPTPFormReply", {
      method: "POST",
      body: formData
    }).then((response) => response.text()).then(function(response) {
      console.log(response);
      return response;
    }).then(function(text) {
      const begin = text.indexOf("<PRE>") + 5;
      const end = text.indexOf("</PRE>");
      text = text.slice(begin, end);
      text = htmlDecode(text);
      let interestProof = parseProof(text);
      for (let key of Object.keys(originalProof)) {
        originalProof[key].info.interesting = interestProof[key].info.interesting;
      }
      redrawNodesByInterest();
    }).catch(function(v2) {
      alert("Failed to query TPTP for interestingness!");
    }).finally(function(v2) {
      hideLoadingSpinner();
    });
  }
  window.getInterest = getInterest;
  function toggleInterestScaling() {
    let el = document.querySelector("#interestScaleToggle");
    if (el.innerText.includes("Disable")) {
      el.innerText = el.innerText.replace("Disable", "Enable");
    } else {
      el.innerText = el.innerText.replace("Enable", "Disable");
    }
    window.interestScalingBool = !window.interestScalingBool;
    renderInterest();
  }
  window.toggleInterestScaling = toggleInterestScaling;
  function renderInterest() {
    assignInterestingnessToHeightAndWidth();
    showGV(proofToGV(window.proof));
  }
  window.renderInterest = renderInterest;
  function recolorNodesByInterest() {
    window.interestFilterVal = document.getElementById("interestingnessSlider").value;
    for (let key of Object.keys(proof)) {
      let node = proof[key];
      if (nodeIsUninteresting(node)) {
        assignColorToNode("#000000", node);
      } else {
        assignColorToNode("#c0c0c0", node);
      }
    }
    assignInterestingnessToHeightAndWidth();
  }
  window.recolorNodesByInterest = recolorNodesByInterest;
  function redrawNodesByInterest() {
    window.interestFilterVal = document.getElementById("interestingnessSlider").value;
    window.proof = JSON.parse(JSON.stringify(originalProof));
    assignInterestingnessToHeightAndWidth();
    for (let node of Object.values(window.proof)) {
      if (nodeIsUninteresting(node)) {
        for (let parentName of node.parents) {
          let parent = proof[parentName];
          parent.children.splice(parent.children.indexOf(node.name), 1);
          parent.children.push(...node.children);
          parent.children = Array.from(new Set(parent.children));
        }
        for (let childName of node.children) {
          let child = proof[childName];
          child.parents.splice(child.parents.indexOf(node.name), 1);
          child.parents.push(...node.parents);
          child.parents = Array.from(new Set(child.parents));
        }
        delete window.proof[node.name];
      }
    }
    showGV(proofToGV(window.proof));
  }
  window.redrawNodesByInterest = redrawNodesByInterest;
  function resetGraph() {
    document.getElementById("interestingnessSlider").value = -1;
    let hideConjNodesButton = document.getElementById("hideConjNodesButton");
    hideConjNodesButton.innerText = hideConjNodesButton.innerText.replace("Show", "Blacken");
    window.hideConjecture = false;
    redrawNodesByInterest();
  }
  window.resetGraph = resetGraph;
  function toggleConjectureVisible(el) {
    if (el.innerText.includes("Blacken")) {
      el.innerText = el.innerText.replace("Blacken", "Show");
    } else {
      el.innerText = el.innerText.replace("Show", "Blacken");
    }
    window.hideConjecture = !window.hideConjecture;
    recolorNodesByInterest();
  }
  window.toggleConjectureVisible = toggleConjectureVisible;
  window.parseProof = parseProof;
  window.proofToGV = proofToGV;
  window.showGV = showGV;
  window.collapseBox = function(title) {
    let el = title.parentNode.children[1];
    let open = title.classList.contains("open");
    if (open) {
      title.classList.remove("open");
      el.style.height = "0px";
      el.style.display = "none";
    } else {
      title.classList.add("open");
      el.style.height = "auto";
      el.style.display = "block";
    }
  };
})();
