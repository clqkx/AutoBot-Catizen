/**
* @vue/shared v3.4.20
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Bs(e, t) {
    const n = new Set(e.split(","));
    return t ? r=>n.has(r.toLowerCase()) : r=>n.has(r)
}
const Ge = {}
  , $r = []
  , qt = ()=>{}
  , a0 = ()=>!1
  , _i = e=>e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97)
  , bc = e=>e.startsWith("onUpdate:")
  , ft = Object.assign
  , Ec = (e,t)=>{
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1)
}
  , l0 = Object.prototype.hasOwnProperty
  , xe = (e,t)=>l0.call(e, t)
  , ce = Array.isArray
  , eo = e=>bi(e) === "[object Map]"
  , Vh = e=>bi(e) === "[object Set]"
  , c0 = e=>bi(e) === "[object RegExp]"
  , pe = e=>typeof e == "function"
  , Xe = e=>typeof e == "string"
  , Eo = e=>typeof e == "symbol"
  , ze = e=>e !== null && typeof e == "object"
  , Sc = e=>(ze(e) || pe(e)) && pe(e.then) && pe(e.catch)
  , Bh = Object.prototype.toString
  , bi = e=>Bh.call(e)
  , u0 = e=>bi(e).slice(8, -1)
  , Hh = e=>bi(e) === "[object Object]"
  , wc = e=>Xe(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e
  , to = Bs(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted")
  , Hs = e=>{
    const t = Object.create(null);
    return n=>t[n] || (t[n] = e(n))
}
  , f0 = /-(\w)/g
  , Tn = Hs(e=>e.replace(f0, (t,n)=>n ? n.toUpperCase() : ""))
  , d0 = /\B([A-Z])/g
  , Hr = Hs(e=>e.replace(d0, "-$1").toLowerCase())
  , js = Hs(e=>e.charAt(0).toUpperCase() + e.slice(1))
  , Ea = Hs(e=>e ? `on${js(e)}` : "")
  , fr = (e,t)=>!Object.is(e, t)
  , no = (e,t)=>{
    for (let n = 0; n < e.length; n++)
        e[n](t)
}
  , hs = (e,t,n)=>{
    Object.defineProperty(e, t, {
        configurable: !0,
        enumerable: !1,
        value: n
    })
}
  , rl = e=>{
    const t = parseFloat(e);
    return isNaN(t) ? e : t
}
  , jh = e=>{
    const t = Xe(e) ? Number(e) : NaN;
    return isNaN(t) ? e : t
}
;
let Fu;
const Kh = ()=>Fu || (Fu = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function En(e) {
    if (ce(e)) {
        const t = {};
        for (let n = 0; n < e.length; n++) {
            const r = e[n]
              , o = Xe(r) ? g0(r) : En(r);
            if (o)
                for (const i in o)
                    t[i] = o[i]
        }
        return t
    } else if (Xe(e) || ze(e))
        return e
}
const h0 = /;(?![^(]*\))/g
  , p0 = /:([^]+)/
  , m0 = /\/\*[^]*?\*\//g;
function g0(e) {
    const t = {};
    return e.replace(m0, "").split(h0).forEach(n=>{
        if (n) {
            const r = n.split(p0);
            r.length > 1 && (t[r[0].trim()] = r[1].trim())
        }
    }
    ),
    t
}
function kt(e) {
    let t = "";
    if (Xe(e))
        t = e;
    else if (ce(e))
        for (let n = 0; n < e.length; n++) {
            const r = kt(e[n]);
            r && (t += r + " ")
        }
    else if (ze(e))
        for (const n in e)
            e[n] && (t += n + " ");
    return t.trim()
}
function zt(e) {
    if (!e)
        return null;
    let {class: t, style: n} = e;
    return t && !Xe(t) && (e.class = kt(t)),
    n && (e.style = En(n)),
    e
}
const y0 = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot"
  , v0 = Bs(y0)
  , _0 = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly"
  , b0 = Bs(_0);
function qh(e) {
    return !!e || e === ""
}
const In = e=>Xe(e) ? e : e == null ? "" : ce(e) || ze(e) && (e.toString === Bh || !pe(e.toString)) ? JSON.stringify(e, Yh, 2) : String(e)
  , Yh = (e,t)=>t && t.__v_isRef ? Yh(e, t.value) : eo(t) ? {
    [`Map(${t.size})`]: [...t.entries()].reduce((n,[r,o],i)=>(n[Sa(r, i) + " =>"] = o,
    n), {})
} : Vh(t) ? {
    [`Set(${t.size})`]: [...t.values()].map(n=>Sa(n))
} : Eo(t) ? Sa(t) : ze(t) && !ce(t) && !Hh(t) ? String(t) : t
  , Sa = (e,t="")=>{
    var n;
    return Eo(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
}
;
/**
* @vue/reactivity v3.4.20
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let xt;
class Wh {
    constructor(t=!1) {
        this.detached = t,
        this._active = !0,
        this.effects = [],
        this.cleanups = [],
        this.parent = xt,
        !t && xt && (this.index = (xt.scopes || (xt.scopes = [])).push(this) - 1)
    }
    get active() {
        return this._active
    }
    run(t) {
        if (this._active) {
            const n = xt;
            try {
                return xt = this,
                t()
            } finally {
                xt = n
            }
        }
    }
    on() {
        xt = this
    }
    off() {
        xt = this.parent
    }
    stop(t) {
        if (this._active) {
            let n, r;
            for (n = 0,
            r = this.effects.length; n < r; n++)
                this.effects[n].stop();
            for (n = 0,
            r = this.cleanups.length; n < r; n++)
                this.cleanups[n]();
            if (this.scopes)
                for (n = 0,
                r = this.scopes.length; n < r; n++)
                    this.scopes[n].stop(!0);
            if (!this.detached && this.parent && !t) {
                const o = this.parent.scopes.pop();
                o && o !== this && (this.parent.scopes[this.index] = o,
                o.index = this.index)
            }
            this.parent = void 0,
            this._active = !1
        }
    }
}
function Ei(e) {
    return new Wh(e)
}
function E0(e, t=xt) {
    t && t.active && t.effects.push(e)
}
function Si() {
    return xt
}
function Ks(e) {
    xt && xt.cleanups.push(e)
}
let Pr;
class Tc {
    constructor(t, n, r, o) {
        this.fn = t,
        this.trigger = n,
        this.scheduler = r,
        this.active = !0,
        this.deps = [],
        this._dirtyLevel = 4,
        this._trackId = 0,
        this._runnings = 0,
        this._shouldSchedule = !1,
        this._depsLength = 0,
        E0(this, o)
    }
    get dirty() {
        if (this._dirtyLevel === 2 || this._dirtyLevel === 3) {
            this._dirtyLevel = 1,
            jr();
            for (let t = 0; t < this._depsLength; t++) {
                const n = this.deps[t];
                if (n.computed && (S0(n.computed),
                this._dirtyLevel >= 4))
                    break
            }
            this._dirtyLevel === 1 && (this._dirtyLevel = 0),
            Kr()
        }
        return this._dirtyLevel >= 4
    }
    set dirty(t) {
        this._dirtyLevel = t ? 4 : 0
    }
    run() {
        if (this._dirtyLevel = 0,
        !this.active)
            return this.fn();
        let t = sr
          , n = Pr;
        try {
            return sr = !0,
            Pr = this,
            this._runnings++,
            Uu(this),
            this.fn()
        } finally {
            Vu(this),
            this._runnings--,
            Pr = n,
            sr = t
        }
    }
    stop() {
        var t;
        this.active && (Uu(this),
        Vu(this),
        (t = this.onStop) == null || t.call(this),
        this.active = !1)
    }
}
function S0(e) {
    return e.value
}
function Uu(e) {
    e._trackId++,
    e._depsLength = 0
}
function Vu(e) {
    if (e.deps.length > e._depsLength) {
        for (let t = e._depsLength; t < e.deps.length; t++)
            Jh(e.deps[t], e);
        e.deps.length = e._depsLength
    }
}
function Jh(e, t) {
    const n = e.get(t);
    n !== void 0 && t._trackId !== n && (e.delete(t),
    e.size === 0 && e.cleanup())
}
let sr = !0
  , ol = 0;
const zh = [];
function jr() {
    zh.push(sr),
    sr = !1
}
function Kr() {
    const e = zh.pop();
    sr = e === void 0 ? !0 : e
}
function kc() {
    ol++
}
function Ac() {
    for (ol--; !ol && il.length; )
        il.shift()()
}
function Gh(e, t, n) {
    if (t.get(e) !== e._trackId) {
        t.set(e, e._trackId);
        const r = e.deps[e._depsLength];
        r !== t ? (r && Jh(r, e),
        e.deps[e._depsLength++] = t) : e._depsLength++
    }
}
const il = [];
function Qh(e, t, n) {
    kc();
    for (const r of e.keys()) {
        let o;
        r._dirtyLevel < t && (o ?? (o = e.get(r) === r._trackId)) && (r._shouldSchedule || (r._shouldSchedule = r._dirtyLevel === 0),
        r._dirtyLevel = t),
        r._shouldSchedule && (o ?? (o = e.get(r) === r._trackId)) && (r.trigger(),
        (!r._runnings || r.allowRecurse) && r._dirtyLevel !== 2 && (r._shouldSchedule = !1,
        r.scheduler && il.push(r.scheduler)))
    }
    Ac()
}
const Xh = (e,t)=>{
    const n = new Map;
    return n.cleanup = e,
    n.computed = t,
    n
}
  , ps = new WeakMap
  , Ir = Symbol("")
  , sl = Symbol("");
function It(e, t, n) {
    if (sr && Pr) {
        let r = ps.get(e);
        r || ps.set(e, r = new Map);
        let o = r.get(n);
        o || r.set(n, o = Xh(()=>r.delete(n))),
        Gh(Pr, o)
    }
}
function xn(e, t, n, r, o, i) {
    const s = ps.get(e);
    if (!s)
        return;
    let a = [];
    if (t === "clear")
        a = [...s.values()];
    else if (n === "length" && ce(e)) {
        const l = Number(r);
        s.forEach((c,u)=>{
            (u === "length" || !Eo(u) && u >= l) && a.push(c)
        }
        )
    } else
        switch (n !== void 0 && a.push(s.get(n)),
        t) {
        case "add":
            ce(e) ? wc(n) && a.push(s.get("length")) : (a.push(s.get(Ir)),
            eo(e) && a.push(s.get(sl)));
            break;
        case "delete":
            ce(e) || (a.push(s.get(Ir)),
            eo(e) && a.push(s.get(sl)));
            break;
        case "set":
            eo(e) && a.push(s.get(Ir));
            break
        }
    kc();
    for (const l of a)
        l && Qh(l, 4);
    Ac()
}
function w0(e, t) {
    var n;
    return (n = ps.get(e)) == null ? void 0 : n.get(t)
}
const T0 = Bs("__proto__,__v_isRef,__isVue")
  , Zh = new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e !== "arguments" && e !== "caller").map(e=>Symbol[e]).filter(Eo))
  , Bu = k0();
function k0() {
    const e = {};
    return ["includes", "indexOf", "lastIndexOf"].forEach(t=>{
        e[t] = function(...n) {
            const r = _e(this);
            for (let i = 0, s = this.length; i < s; i++)
                It(r, "get", i + "");
            const o = r[t](...n);
            return o === -1 || o === !1 ? r[t](...n.map(_e)) : o
        }
    }
    ),
    ["push", "pop", "shift", "unshift", "splice"].forEach(t=>{
        e[t] = function(...n) {
            jr(),
            kc();
            const r = _e(this)[t].apply(this, n);
            return Ac(),
            Kr(),
            r
        }
    }
    ),
    e
}
function A0(e) {
    const t = _e(this);
    return It(t, "has", e),
    t.hasOwnProperty(e)
}
class $h {
    constructor(t=!1, n=!1) {
        this._isReadonly = t,
        this._isShallow = n
    }
    get(t, n, r) {
        const o = this._isReadonly
          , i = this._isShallow;
        if (n === "__v_isReactive")
            return !o;
        if (n === "__v_isReadonly")
            return o;
        if (n === "__v_isShallow")
            return i;
        if (n === "__v_raw")
            return r === (o ? i ? V0 : rp : i ? np : tp).get(t) || Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
        const s = ce(t);
        if (!o) {
            if (s && xe(Bu, n))
                return Reflect.get(Bu, n, r);
            if (n === "hasOwnProperty")
                return A0
        }
        const a = Reflect.get(t, n, r);
        return (Eo(n) ? Zh.has(n) : T0(n)) || (o || It(t, "get", n),
        i) ? a : et(a) ? s && wc(n) ? a : a.value : ze(a) ? o ? Cr(a) : yt(a) : a
    }
}
class ep extends $h {
    constructor(t=!1) {
        super(!1, t)
    }
    set(t, n, r, o) {
        let i = t[n];
        if (!this._isShallow) {
            const l = xr(i);
            if (!ms(r) && !xr(r) && (i = _e(i),
            r = _e(r)),
            !ce(t) && et(i) && !et(r))
                return l ? !1 : (i.value = r,
                !0)
        }
        const s = ce(t) && wc(n) ? Number(n) < t.length : xe(t, n)
          , a = Reflect.set(t, n, r, o);
        return t === _e(o) && (s ? fr(r, i) && xn(t, "set", n, r) : xn(t, "add", n, r)),
        a
    }
    deleteProperty(t, n) {
        const r = xe(t, n);
        t[n];
        const o = Reflect.deleteProperty(t, n);
        return o && r && xn(t, "delete", n, void 0),
        o
    }
    has(t, n) {
        const r = Reflect.has(t, n);
        return (!Eo(n) || !Zh.has(n)) && It(t, "has", n),
        r
    }
    ownKeys(t) {
        return It(t, "iterate", ce(t) ? "length" : Ir),
        Reflect.ownKeys(t)
    }
}
class L0 extends $h {
    constructor(t=!1) {
        super(!0, t)
    }
    set(t, n) {
        return !0
    }
    deleteProperty(t, n) {
        return !0
    }
}
const C0 = new ep
  , O0 = new L0
  , R0 = new ep(!0)
  , Lc = e=>e
  , qs = e=>Reflect.getPrototypeOf(e);
function Ui(e, t, n=!1, r=!1) {
    e = e.__v_raw;
    const o = _e(e)
      , i = _e(t);
    n || (fr(t, i) && It(o, "get", t),
    It(o, "get", i));
    const {has: s} = qs(o)
      , a = r ? Lc : n ? Rc : ei;
    if (s.call(o, t))
        return a(e.get(t));
    if (s.call(o, i))
        return a(e.get(i));
    e !== o && e.get(t)
}
function Vi(e, t=!1) {
    const n = this.__v_raw
      , r = _e(n)
      , o = _e(e);
    return t || (fr(e, o) && It(r, "has", e),
    It(r, "has", o)),
    e === o ? n.has(e) : n.has(e) || n.has(o)
}
function Bi(e, t=!1) {
    return e = e.__v_raw,
    !t && It(_e(e), "iterate", Ir),
    Reflect.get(e, "size", e)
}
function Hu(e) {
    e = _e(e);
    const t = _e(this);
    return qs(t).has.call(t, e) || (t.add(e),
    xn(t, "add", e, e)),
    this
}
function ju(e, t) {
    t = _e(t);
    const n = _e(this)
      , {has: r, get: o} = qs(n);
    let i = r.call(n, e);
    i || (e = _e(e),
    i = r.call(n, e));
    const s = o.call(n, e);
    return n.set(e, t),
    i ? fr(t, s) && xn(n, "set", e, t) : xn(n, "add", e, t),
    this
}
function Ku(e) {
    const t = _e(this)
      , {has: n, get: r} = qs(t);
    let o = n.call(t, e);
    o || (e = _e(e),
    o = n.call(t, e)),
    r && r.call(t, e);
    const i = t.delete(e);
    return o && xn(t, "delete", e, void 0),
    i
}
function qu() {
    const e = _e(this)
      , t = e.size !== 0
      , n = e.clear();
    return t && xn(e, "clear", void 0, void 0),
    n
}
function Hi(e, t) {
    return function(r, o) {
        const i = this
          , s = i.__v_raw
          , a = _e(s)
          , l = t ? Lc : e ? Rc : ei;
        return !e && It(a, "iterate", Ir),
        s.forEach((c,u)=>r.call(o, l(c), l(u), i))
    }
}
function ji(e, t, n) {
    return function(...r) {
        const o = this.__v_raw
          , i = _e(o)
          , s = eo(i)
          , a = e === "entries" || e === Symbol.iterator && s
          , l = e === "keys" && s
          , c = o[e](...r)
          , u = n ? Lc : t ? Rc : ei;
        return !t && It(i, "iterate", l ? sl : Ir),
        {
            next() {
                const {value: f, done: d} = c.next();
                return d ? {
                    value: f,
                    done: d
                } : {
                    value: a ? [u(f[0]), u(f[1])] : u(f),
                    done: d
                }
            },
            [Symbol.iterator]() {
                return this
            }
        }
    }
}
function jn(e) {
    return function(...t) {
        return e === "delete" ? !1 : e === "clear" ? void 0 : this
    }
}
function P0() {
    const e = {
        get(i) {
            return Ui(this, i)
        },
        get size() {
            return Bi(this)
        },
        has: Vi,
        add: Hu,
        set: ju,
        delete: Ku,
        clear: qu,
        forEach: Hi(!1, !1)
    }
      , t = {
        get(i) {
            return Ui(this, i, !1, !0)
        },
        get size() {
            return Bi(this)
        },
        has: Vi,
        add: Hu,
        set: ju,
        delete: Ku,
        clear: qu,
        forEach: Hi(!1, !0)
    }
      , n = {
        get(i) {
            return Ui(this, i, !0)
        },
        get size() {
            return Bi(this, !0)
        },
        has(i) {
            return Vi.call(this, i, !0)
        },
        add: jn("add"),
        set: jn("set"),
        delete: jn("delete"),
        clear: jn("clear"),
        forEach: Hi(!0, !1)
    }
      , r = {
        get(i) {
            return Ui(this, i, !0, !0)
        },
        get size() {
            return Bi(this, !0)
        },
        has(i) {
            return Vi.call(this, i, !0)
        },
        add: jn("add"),
        set: jn("set"),
        delete: jn("delete"),
        clear: jn("clear"),
        forEach: Hi(!0, !0)
    };
    return ["keys", "values", "entries", Symbol.iterator].forEach(i=>{
        e[i] = ji(i, !1, !1),
        n[i] = ji(i, !0, !1),
        t[i] = ji(i, !1, !0),
        r[i] = ji(i, !0, !0)
    }
    ),
    [e, n, t, r]
}
const [I0,M0,N0,D0] = P0();
function Cc(e, t) {
    const n = t ? e ? D0 : N0 : e ? M0 : I0;
    return (r,o,i)=>o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? r : Reflect.get(xe(n, o) && o in r ? n : r, o, i)
}
const x0 = {
    get: Cc(!1, !1)
}
  , F0 = {
    get: Cc(!1, !0)
}
  , U0 = {
    get: Cc(!0, !1)
}
  , tp = new WeakMap
  , np = new WeakMap
  , rp = new WeakMap
  , V0 = new WeakMap;
function B0(e) {
    switch (e) {
    case "Object":
    case "Array":
        return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
        return 2;
    default:
        return 0
    }
}
function H0(e) {
    return e.__v_skip || !Object.isExtensible(e) ? 0 : B0(u0(e))
}
function yt(e) {
    return xr(e) ? e : Oc(e, !1, C0, x0, tp)
}
function So(e) {
    return Oc(e, !1, R0, F0, np)
}
function Cr(e) {
    return Oc(e, !0, O0, U0, rp)
}
function Oc(e, t, n, r, o) {
    if (!ze(e) || e.__v_raw && !(t && e.__v_isReactive))
        return e;
    const i = o.get(e);
    if (i)
        return i;
    const s = H0(e);
    if (s === 0)
        return e;
    const a = new Proxy(e,s === 2 ? r : n);
    return o.set(e, a),
    a
}
function ar(e) {
    return xr(e) ? ar(e.__v_raw) : !!(e && e.__v_isReactive)
}
function xr(e) {
    return !!(e && e.__v_isReadonly)
}
function ms(e) {
    return !!(e && e.__v_isShallow)
}
function op(e) {
    return ar(e) || xr(e)
}
function _e(e) {
    const t = e && e.__v_raw;
    return t ? _e(t) : e
}
function at(e) {
    return Object.isExtensible(e) && hs(e, "__v_skip", !0),
    e
}
const ei = e=>ze(e) ? yt(e) : e
  , Rc = e=>ze(e) ? Cr(e) : e;
class ip {
    constructor(t, n, r, o) {
        this.getter = t,
        this._setter = n,
        this.dep = void 0,
        this.__v_isRef = !0,
        this.__v_isReadonly = !1,
        this.effect = new Tc(()=>t(this._value),()=>ro(this, this.effect._dirtyLevel === 2 ? 2 : 3)),
        this.effect.computed = this,
        this.effect.active = this._cacheable = !o,
        this.__v_isReadonly = r
    }
    get value() {
        const t = _e(this);
        return (!t._cacheable || t.effect.dirty) && fr(t._value, t._value = t.effect.run()) && ro(t, 4),
        Pc(t),
        t.effect._dirtyLevel >= 2 && ro(t, 2),
        t._value
    }
    set value(t) {
        this._setter(t)
    }
    get _dirty() {
        return this.effect.dirty
    }
    set _dirty(t) {
        this.effect.dirty = t
    }
}
function j0(e, t, n=!1) {
    let r, o;
    const i = pe(e);
    return i ? (r = e,
    o = qt) : (r = e.get,
    o = e.set),
    new ip(r,o,i || !o,n)
}
function Pc(e) {
    var t;
    sr && Pr && (e = _e(e),
    Gh(Pr, (t = e.dep) != null ? t : e.dep = Xh(()=>e.dep = void 0, e instanceof ip ? e : void 0)))
}
function ro(e, t=4, n) {
    e = _e(e);
    const r = e.dep;
    r && Qh(r, t)
}
function et(e) {
    return !!(e && e.__v_isRef === !0)
}
function ye(e) {
    return sp(e, !1)
}
function on(e) {
    return sp(e, !0)
}
function sp(e, t) {
    return et(e) ? e : new K0(e,t)
}
class K0 {
    constructor(t, n) {
        this.__v_isShallow = n,
        this.dep = void 0,
        this.__v_isRef = !0,
        this._rawValue = n ? t : _e(t),
        this._value = n ? t : ei(t)
    }
    get value() {
        return Pc(this),
        this._value
    }
    set value(t) {
        const n = this.__v_isShallow || ms(t) || xr(t);
        t = n ? t : _e(t),
        fr(t, this._rawValue) && (this._rawValue = t,
        this._value = n ? t : ei(t),
        ro(this, 4))
    }
}
function ap(e) {
    ro(e, 4)
}
function z(e) {
    return et(e) ? e.value : e
}
const q0 = {
    get: (e,t,n)=>z(Reflect.get(e, t, n)),
    set: (e,t,n,r)=>{
        const o = e[t];
        return et(o) && !et(n) ? (o.value = n,
        !0) : Reflect.set(e, t, n, r)
    }
};
function lp(e) {
    return ar(e) ? e : new Proxy(e,q0)
}
class Y0 {
    constructor(t) {
        this.dep = void 0,
        this.__v_isRef = !0;
        const {get: n, set: r} = t(()=>Pc(this), ()=>ro(this));
        this._get = n,
        this._set = r
    }
    get value() {
        return this._get()
    }
    set value(t) {
        this._set(t)
    }
}
function cp(e) {
    return new Y0(e)
}
function Ic(e) {
    const t = ce(e) ? new Array(e.length) : {};
    for (const n in e)
        t[n] = up(e, n);
    return t
}
class W0 {
    constructor(t, n, r) {
        this._object = t,
        this._key = n,
        this._defaultValue = r,
        this.__v_isRef = !0
    }
    get value() {
        const t = this._object[this._key];
        return t === void 0 ? this._defaultValue : t
    }
    set value(t) {
        this._object[this._key] = t
    }
    get dep() {
        return w0(_e(this._object), this._key)
    }
}
class J0 {
    constructor(t) {
        this._getter = t,
        this.__v_isRef = !0,
        this.__v_isReadonly = !0
    }
    get value() {
        return this._getter()
    }
}
function Xr(e, t, n) {
    return et(e) ? e : pe(e) ? new J0(e) : ze(e) && arguments.length > 1 ? up(e, t, n) : ye(e)
}
function up(e, t, n) {
    const r = e[t];
    return et(r) ? r : new W0(e,t,n)
}
/**
* @vue/runtime-core v3.4.20
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function lr(e, t, n, r) {
    try {
        return r ? e(...r) : e()
    } catch (o) {
        wi(o, t, n)
    }
}
function Jt(e, t, n, r) {
    if (pe(e)) {
        const i = lr(e, t, n, r);
        return i && Sc(i) && i.catch(s=>{
            wi(s, t, n)
        }
        ),
        i
    }
    const o = [];
    for (let i = 0; i < e.length; i++)
        o.push(Jt(e[i], t, n, r));
    return o
}
function wi(e, t, n, r=!0) {
    const o = t ? t.vnode : null;
    if (t) {
        let i = t.parent;
        const s = t.proxy
          , a = `https://vuejs.org/error-reference/#runtime-${n}`;
        for (; i; ) {
            const c = i.ec;
            if (c) {
                for (let u = 0; u < c.length; u++)
                    if (c[u](e, s, a) === !1)
                        return
            }
            i = i.parent
        }
        const l = t.appContext.config.errorHandler;
        if (l) {
            lr(l, null, 10, [e, s, a]);
            return
        }
    }
    z0(e, n, o, r)
}
function z0(e, t, n, r=!0) {
    console.error(e)
}
let ti = !1
  , al = !1;
const bt = [];
let vn = 0;
const oo = [];
let Zn = null
  , Lr = 0;
const fp = Promise.resolve();
let Mc = null;
function Ft(e) {
    const t = Mc || fp;
    return e ? t.then(this ? e.bind(this) : e) : t
}
function G0(e) {
    let t = vn + 1
      , n = bt.length;
    for (; t < n; ) {
        const r = t + n >>> 1
          , o = bt[r]
          , i = ni(o);
        i < e || i === e && o.pre ? t = r + 1 : n = r
    }
    return t
}
function Nc(e) {
    (!bt.length || !bt.includes(e, ti && e.allowRecurse ? vn + 1 : vn)) && (e.id == null ? bt.push(e) : bt.splice(G0(e.id), 0, e),
    dp())
}
function dp() {
    !ti && !al && (al = !0,
    Mc = fp.then(hp))
}
function Q0(e) {
    const t = bt.indexOf(e);
    t > vn && bt.splice(t, 1)
}
function ll(e) {
    ce(e) ? oo.push(...e) : (!Zn || !Zn.includes(e, e.allowRecurse ? Lr + 1 : Lr)) && oo.push(e),
    dp()
}
function Yu(e, t, n=ti ? vn + 1 : 0) {
    for (; n < bt.length; n++) {
        const r = bt[n];
        if (r && r.pre) {
            if (e && r.id !== e.uid)
                continue;
            bt.splice(n, 1),
            n--,
            r()
        }
    }
}
function gs(e) {
    if (oo.length) {
        const t = [...new Set(oo)].sort((n,r)=>ni(n) - ni(r));
        if (oo.length = 0,
        Zn) {
            Zn.push(...t);
            return
        }
        for (Zn = t,
        Lr = 0; Lr < Zn.length; Lr++)
            Zn[Lr]();
        Zn = null,
        Lr = 0
    }
}
const ni = e=>e.id == null ? 1 / 0 : e.id
  , X0 = (e,t)=>{
    const n = ni(e) - ni(t);
    if (n === 0) {
        if (e.pre && !t.pre)
            return -1;
        if (t.pre && !e.pre)
            return 1
    }
    return n
}
;
function hp(e) {
    al = !1,
    ti = !0,
    bt.sort(X0);
    try {
        for (vn = 0; vn < bt.length; vn++) {
            const t = bt[vn];
            t && t.active !== !1 && lr(t, null, 14)
        }
    } finally {
        vn = 0,
        bt.length = 0,
        gs(),
        ti = !1,
        Mc = null,
        (bt.length || oo.length) && hp()
    }
}
function Z0(e, t, ...n) {
    if (e.isUnmounted)
        return;
    const r = e.vnode.props || Ge;
    let o = n;
    const i = t.startsWith("update:")
      , s = i && t.slice(7);
    if (s && s in r) {
        const u = `${s === "modelValue" ? "model" : s}Modifiers`
          , {number: f, trim: d} = r[u] || Ge;
        d && (o = n.map(m=>Xe(m) ? m.trim() : m)),
        f && (o = n.map(rl))
    }
    let a, l = r[a = Ea(t)] || r[a = Ea(Tn(t))];
    !l && i && (l = r[a = Ea(Hr(t))]),
    l && Jt(l, e, 6, o);
    const c = r[a + "Once"];
    if (c) {
        if (!e.emitted)
            e.emitted = {};
        else if (e.emitted[a])
            return;
        e.emitted[a] = !0,
        Jt(c, e, 6, o)
    }
}
function pp(e, t, n=!1) {
    const r = t.emitsCache
      , o = r.get(e);
    if (o !== void 0)
        return o;
    const i = e.emits;
    let s = {}
      , a = !1;
    if (!pe(e)) {
        const l = c=>{
            const u = pp(c, t, !0);
            u && (a = !0,
            ft(s, u))
        }
        ;
        !n && t.mixins.length && t.mixins.forEach(l),
        e.extends && l(e.extends),
        e.mixins && e.mixins.forEach(l)
    }
    return !i && !a ? (ze(e) && r.set(e, null),
    null) : (ce(i) ? i.forEach(l=>s[l] = null) : ft(s, i),
    ze(e) && r.set(e, s),
    s)
}
function Ys(e, t) {
    return !e || !_i(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""),
    xe(e, t[0].toLowerCase() + t.slice(1)) || xe(e, Hr(t)) || xe(e, t))
}
let lt = null
  , Ws = null;
function ys(e) {
    const t = lt;
    return lt = e,
    Ws = e && e.type.__scopeId || null,
    t
}
function $0(e) {
    Ws = e
}
function ev() {
    Ws = null
}
const tv = e=>Gt;
function Gt(e, t=lt, n) {
    if (!t || e._n)
        return e;
    const r = (...o)=>{
        r._d && sf(-1);
        const i = ys(t);
        let s;
        try {
            s = e(...o)
        } finally {
            ys(i),
            r._d && sf(1)
        }
        return s
    }
    ;
    return r._n = !0,
    r._c = !0,
    r._d = !0,
    r
}
function wa(e) {
    const {type: t, vnode: n, proxy: r, withProxy: o, props: i, propsOptions: [s], slots: a, attrs: l, emit: c, render: u, renderCache: f, data: d, setupState: m, ctx: _, inheritAttrs: b} = e;
    let w, g;
    const E = ys(e);
    try {
        if (n.shapeFlag & 4) {
            const y = o || r
              , S = y;
            w = Ht(u.call(S, y, f, i, m, d, _)),
            g = l
        } else {
            const y = t;
            w = Ht(y.length > 1 ? y(i, {
                attrs: l,
                slots: a,
                emit: c
            }) : y(i, null)),
            g = t.props ? l : rv(l)
        }
    } catch (y) {
        Fo.length = 0,
        wi(y, e, 1),
        w = We(Lt)
    }
    let p = w;
    if (g && b !== !1) {
        const y = Object.keys(g)
          , {shapeFlag: S} = p;
        y.length && S & 7 && (s && y.some(bc) && (g = ov(g, s)),
        p = Un(p, g))
    }
    return n.dirs && (p = Un(p),
    p.dirs = p.dirs ? p.dirs.concat(n.dirs) : n.dirs),
    n.transition && (p.transition = n.transition),
    w = p,
    ys(E),
    w
}
function nv(e, t=!0) {
    let n;
    for (let r = 0; r < e.length; r++) {
        const o = e[r];
        if (uo(o)) {
            if (o.type !== Lt || o.children === "v-if") {
                if (n)
                    return;
                n = o
            }
        } else
            return
    }
    return n
}
const rv = e=>{
    let t;
    for (const n in e)
        (n === "class" || n === "style" || _i(n)) && ((t || (t = {}))[n] = e[n]);
    return t
}
  , ov = (e,t)=>{
    const n = {};
    for (const r in e)
        (!bc(r) || !(r.slice(9)in t)) && (n[r] = e[r]);
    return n
}
;
function iv(e, t, n) {
    const {props: r, children: o, component: i} = e
      , {props: s, children: a, patchFlag: l} = t
      , c = i.emitsOptions;
    if (t.dirs || t.transition)
        return !0;
    if (n && l >= 0) {
        if (l & 1024)
            return !0;
        if (l & 16)
            return r ? Wu(r, s, c) : !!s;
        if (l & 8) {
            const u = t.dynamicProps;
            for (let f = 0; f < u.length; f++) {
                const d = u[f];
                if (s[d] !== r[d] && !Ys(c, d))
                    return !0
            }
        }
    } else
        return (o || a) && (!a || !a.$stable) ? !0 : r === s ? !1 : r ? s ? Wu(r, s, c) : !0 : !!s;
    return !1
}
function Wu(e, t, n) {
    const r = Object.keys(t);
    if (r.length !== Object.keys(e).length)
        return !0;
    for (let o = 0; o < r.length; o++) {
        const i = r[o];
        if (t[i] !== e[i] && !Ys(n, i))
            return !0
    }
    return !1
}
function Dc({vnode: e, parent: t}, n) {
    for (; t; ) {
        const r = t.subTree;
        if (r.suspense && r.suspense.activeBranch === e && (r.el = e.el),
        r === e)
            (e = t.vnode).el = n,
            t = t.parent;
        else
            break
    }
}
const xc = "components"
  , sv = "directives";
function Fr(e, t) {
    return Fc(xc, e, !0, t) || e
}
const mp = Symbol.for("v-ndc");
function cl(e) {
    return Xe(e) ? Fc(xc, e, !1) || e : e || mp
}
function zI(e) {
    return Fc(sv, e)
}
function Fc(e, t, n=!0, r=!1) {
    const o = lt || pt;
    if (o) {
        const i = o.type;
        if (e === xc) {
            const a = El(i, !1);
            if (a && (a === t || a === Tn(t) || a === js(Tn(t))))
                return i
        }
        const s = Ju(o[e] || i[e], t) || Ju(o.appContext[e], t);
        return !s && r ? i : s
    }
}
function Ju(e, t) {
    return e && (e[t] || e[Tn(t)] || e[js(Tn(t))])
}
const gp = e=>e.__isSuspense;
let ul = 0;
const av = {
    name: "Suspense",
    __isSuspense: !0,
    process(e, t, n, r, o, i, s, a, l, c) {
        if (e == null)
            lv(t, n, r, o, i, s, a, l, c);
        else {
            if (i && i.deps > 0) {
                t.suspense = e.suspense,
                t.suspense.vnode = t,
                t.el = e.el;
                return
            }
            cv(e, t, n, r, o, s, a, l, c)
        }
    },
    hydrate: uv,
    create: Vc,
    normalize: fv
}
  , Uc = av;
function ri(e, t) {
    const n = e.props && e.props[t];
    pe(n) && n()
}
function lv(e, t, n, r, o, i, s, a, l) {
    const {p: c, o: {createElement: u}} = l
      , f = u("div")
      , d = e.suspense = Vc(e, o, r, t, f, n, i, s, a, l);
    c(null, d.pendingBranch = e.ssContent, f, null, r, d, i, s),
    d.deps > 0 ? (ri(e, "onPending"),
    ri(e, "onFallback"),
    c(null, e.ssFallback, t, n, r, null, i, s),
    io(d, e.ssFallback)) : d.resolve(!1, !0)
}
function cv(e, t, n, r, o, i, s, a, {p: l, um: c, o: {createElement: u}}) {
    const f = t.suspense = e.suspense;
    f.vnode = t,
    t.el = e.el;
    const d = t.ssContent
      , m = t.ssFallback
      , {activeBranch: _, pendingBranch: b, isInFallback: w, isHydrating: g} = f;
    if (b)
        f.pendingBranch = d,
        en(d, b) ? (l(b, d, f.hiddenContainer, null, o, f, i, s, a),
        f.deps <= 0 ? f.resolve() : w && (g || (l(_, m, n, r, o, null, i, s, a),
        io(f, m)))) : (f.pendingId = ul++,
        g ? (f.isHydrating = !1,
        f.activeBranch = b) : c(b, o, f),
        f.deps = 0,
        f.effects.length = 0,
        f.hiddenContainer = u("div"),
        w ? (l(null, d, f.hiddenContainer, null, o, f, i, s, a),
        f.deps <= 0 ? f.resolve() : (l(_, m, n, r, o, null, i, s, a),
        io(f, m))) : _ && en(d, _) ? (l(_, d, n, r, o, f, i, s, a),
        f.resolve(!0)) : (l(null, d, f.hiddenContainer, null, o, f, i, s, a),
        f.deps <= 0 && f.resolve()));
    else if (_ && en(d, _))
        l(_, d, n, r, o, f, i, s, a),
        io(f, d);
    else if (ri(t, "onPending"),
    f.pendingBranch = d,
    d.shapeFlag & 512 ? f.pendingId = d.component.suspenseId : f.pendingId = ul++,
    l(null, d, f.hiddenContainer, null, o, f, i, s, a),
    f.deps <= 0)
        f.resolve();
    else {
        const {timeout: E, pendingId: p} = f;
        E > 0 ? setTimeout(()=>{
            f.pendingId === p && f.fallback(m)
        }
        , E) : E === 0 && f.fallback(m)
    }
}
function Vc(e, t, n, r, o, i, s, a, l, c, u=!1) {
    const {p: f, m: d, um: m, n: _, o: {parentNode: b, remove: w}} = c;
    let g;
    const E = dv(e);
    E && t != null && t.pendingBranch && (g = t.pendingId,
    t.deps++);
    const p = e.props ? jh(e.props.timeout) : void 0
      , y = i
      , S = {
        vnode: e,
        parent: t,
        parentComponent: n,
        namespace: s,
        container: r,
        hiddenContainer: o,
        deps: 0,
        pendingId: ul++,
        timeout: typeof p == "number" ? p : -1,
        activeBranch: null,
        pendingBranch: null,
        isInFallback: !u,
        isHydrating: u,
        isUnmounted: !1,
        effects: [],
        resolve(T=!1, A=!1) {
            const {vnode: L, activeBranch: O, pendingBranch: I, pendingId: V, effects: x, parentComponent: X, container: Y} = S;
            let j = !1;
            S.isHydrating ? S.isHydrating = !1 : T || (j = O && I.transition && I.transition.mode === "out-in",
            j && (O.transition.afterLeave = ()=>{
                V === S.pendingId && (d(I, Y, i === y ? _(O) : i, 0),
                ll(x))
            }
            ),
            O && (b(O.el) !== S.hiddenContainer && (i = _(O)),
            m(O, X, S, !0)),
            j || d(I, Y, i, 0)),
            io(S, I),
            S.pendingBranch = null,
            S.isInFallback = !1;
            let M = S.parent
              , K = !1;
            for (; M; ) {
                if (M.pendingBranch) {
                    M.effects.push(...x),
                    K = !0;
                    break
                }
                M = M.parent
            }
            !K && !j && ll(x),
            S.effects = [],
            E && t && t.pendingBranch && g === t.pendingId && (t.deps--,
            t.deps === 0 && !A && t.resolve()),
            ri(L, "onResolve")
        },
        fallback(T) {
            if (!S.pendingBranch)
                return;
            const {vnode: A, activeBranch: L, parentComponent: O, container: I, namespace: V} = S;
            ri(A, "onFallback");
            const x = _(L)
              , X = ()=>{
                S.isInFallback && (f(null, T, I, x, O, null, V, a, l),
                io(S, T))
            }
              , Y = T.transition && T.transition.mode === "out-in";
            Y && (L.transition.afterLeave = X),
            S.isInFallback = !0,
            m(L, O, null, !0),
            Y || X()
        },
        move(T, A, L) {
            S.activeBranch && d(S.activeBranch, T, A, L),
            S.container = T
        },
        next() {
            return S.activeBranch && _(S.activeBranch)
        },
        registerDep(T, A) {
            const L = !!S.pendingBranch;
            L && S.deps++;
            const O = T.vnode.el;
            T.asyncDep.catch(I=>{
                wi(I, T, 0)
            }
            ).then(I=>{
                if (T.isUnmounted || S.isUnmounted || S.pendingId !== T.suspenseId)
                    return;
                T.asyncResolved = !0;
                const {vnode: V} = T;
                bl(T, I, !1),
                O && (V.el = O);
                const x = !O && T.subTree.el;
                A(T, V, b(O || T.subTree.el), O ? null : _(T.subTree), S, s, l),
                x && w(x),
                Dc(T, V.el),
                L && --S.deps === 0 && S.resolve()
            }
            )
        },
        unmount(T, A) {
            S.isUnmounted = !0,
            S.activeBranch && m(S.activeBranch, n, T, A),
            S.pendingBranch && m(S.pendingBranch, n, T, A)
        }
    };
    return S
}
function uv(e, t, n, r, o, i, s, a, l) {
    const c = t.suspense = Vc(t, r, n, e.parentNode, document.createElement("div"), null, o, i, s, a, !0)
      , u = l(e, c.pendingBranch = t.ssContent, n, c, i, s);
    return c.deps === 0 && c.resolve(!1, !0),
    u
}
function fv(e) {
    const {shapeFlag: t, children: n} = e
      , r = t & 32;
    e.ssContent = zu(r ? n.default : n),
    e.ssFallback = r ? zu(n.fallback) : We(Lt)
}
function zu(e) {
    let t;
    if (pe(e)) {
        const n = co && e._c;
        n && (e._d = !1,
        he()),
        e = e(),
        n && (e._d = !0,
        t = Yt,
        Up())
    }
    return ce(e) && (e = nv(e)),
    e = Ht(e),
    t && !e.dynamicChildren && (e.dynamicChildren = t.filter(n=>n !== e)),
    e
}
function yp(e, t) {
    t && t.pendingBranch ? ce(e) ? t.effects.push(...e) : t.effects.push(e) : ll(e)
}
function io(e, t) {
    e.activeBranch = t;
    const {vnode: n, parentComponent: r} = e;
    let o = t.el;
    for (; !o && t.component; )
        t = t.component.subTree,
        o = t.el;
    n.el = o,
    r && r.subTree === n && (r.vnode.el = o,
    Dc(r, o))
}
function dv(e) {
    var t;
    return ((t = e.props) == null ? void 0 : t.suspensible) != null && e.props.suspensible !== !1
}
const hv = Symbol.for("v-scx")
  , pv = ()=>gt(hv);
function mv(e, t) {
    return Bc(e, null, t)
}
const Ki = {};
function Ue(e, t, n) {
    return Bc(e, t, n)
}
function Bc(e, t, {immediate: n, deep: r, flush: o, once: i, onTrack: s, onTrigger: a}=Ge) {
    if (t && i) {
        const T = t;
        t = (...A)=>{
            T(...A),
            S()
        }
    }
    const l = pt
      , c = T=>r === !0 ? T : Or(T, r === !1 ? 1 : void 0);
    let u, f = !1, d = !1;
    if (et(e) ? (u = ()=>e.value,
    f = ms(e)) : ar(e) ? (u = ()=>c(e),
    f = !0) : ce(e) ? (d = !0,
    f = e.some(T=>ar(T) || ms(T)),
    u = ()=>e.map(T=>{
        if (et(T))
            return T.value;
        if (ar(T))
            return c(T);
        if (pe(T))
            return lr(T, l, 2)
    }
    )) : pe(e) ? t ? u = ()=>lr(e, l, 2) : u = ()=>(m && m(),
    Jt(e, l, 3, [_])) : u = qt,
    t && r) {
        const T = u;
        u = ()=>Or(T())
    }
    let m, _ = T=>{
        m = p.onStop = ()=>{
            lr(T, l, 4),
            m = p.onStop = void 0
        }
    }
    , b;
    if (Zs)
        if (_ = qt,
        t ? n && Jt(t, l, 3, [u(), d ? [] : void 0, _]) : u(),
        o === "sync") {
            const T = pv();
            b = T.__watcherHandles || (T.__watcherHandles = [])
        } else
            return qt;
    let w = d ? new Array(e.length).fill(Ki) : Ki;
    const g = ()=>{
        if (!(!p.active || !p.dirty))
            if (t) {
                const T = p.run();
                (r || f || (d ? T.some((A,L)=>fr(A, w[L])) : fr(T, w))) && (m && m(),
                Jt(t, l, 3, [T, w === Ki ? void 0 : d && w[0] === Ki ? [] : w, _]),
                w = T)
            } else
                p.run()
    }
    ;
    g.allowRecurse = !!t;
    let E;
    o === "sync" ? E = g : o === "post" ? E = ()=>vt(g, l && l.suspense) : (g.pre = !0,
    l && (g.id = l.uid),
    E = ()=>Nc(g));
    const p = new Tc(u,qt,E)
      , y = Si()
      , S = ()=>{
        p.stop(),
        y && Ec(y.effects, p)
    }
    ;
    return t ? n ? g() : w = p.run() : o === "post" ? vt(p.run.bind(p), l && l.suspense) : p.run(),
    b && b.push(S),
    S
}
function gv(e, t, n) {
    const r = this.proxy
      , o = Xe(e) ? e.includes(".") ? vp(r, e) : ()=>r[e] : e.bind(r, r);
    let i;
    pe(t) ? i = t : (i = t.handler,
    n = t);
    const s = Vr(this)
      , a = Bc(o, i.bind(r), n);
    return s(),
    a
}
function vp(e, t) {
    const n = t.split(".");
    return ()=>{
        let r = e;
        for (let o = 0; o < n.length && r; o++)
            r = r[n[o]];
        return r
    }
}
function Or(e, t, n=0, r) {
    if (!ze(e) || e.__v_skip)
        return e;
    if (t && t > 0) {
        if (n >= t)
            return e;
        n++
    }
    if (r = r || new Set,
    r.has(e))
        return e;
    if (r.add(e),
    et(e))
        Or(e.value, t, n, r);
    else if (ce(e))
        for (let o = 0; o < e.length; o++)
            Or(e[o], t, n, r);
    else if (Vh(e) || eo(e))
        e.forEach(o=>{
            Or(o, t, n, r)
        }
        );
    else if (Hh(e))
        for (const o in e)
            Or(e[o], t, n, r);
    return e
}
function GI(e, t) {
    if (lt === null)
        return e;
    const n = $s(lt) || lt.proxy
      , r = e.dirs || (e.dirs = []);
    for (let o = 0; o < t.length; o++) {
        let[i,s,a,l=Ge] = t[o];
        i && (pe(i) && (i = {
            mounted: i,
            updated: i
        }),
        i.deep && Or(s),
        r.push({
            dir: i,
            instance: n,
            value: s,
            oldValue: void 0,
            arg: a,
            modifiers: l
        }))
    }
    return e
}
function gn(e, t, n, r) {
    const o = e.dirs
      , i = t && t.dirs;
    for (let s = 0; s < o.length; s++) {
        const a = o[s];
        i && (a.oldValue = i[s].value);
        let l = a.dir[r];
        l && (jr(),
        Jt(l, n, 8, [e.el, a, e, t]),
        Kr())
    }
}
const $n = Symbol("_leaveCb")
  , qi = Symbol("_enterCb");
function yv() {
    const e = {
        isMounted: !1,
        isLeaving: !1,
        isUnmounting: !1,
        leavingVNodes: new Map
    };
    return Xt(()=>{
        e.isMounted = !0
    }
    ),
    ln(()=>{
        e.isUnmounting = !0
    }
    ),
    e
}
const Vt = [Function, Array]
  , _p = {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: Vt,
    onEnter: Vt,
    onAfterEnter: Vt,
    onEnterCancelled: Vt,
    onBeforeLeave: Vt,
    onLeave: Vt,
    onAfterLeave: Vt,
    onLeaveCancelled: Vt,
    onBeforeAppear: Vt,
    onAppear: Vt,
    onAfterAppear: Vt,
    onAppearCancelled: Vt
}
  , vv = {
    name: "BaseTransition",
    props: _p,
    setup(e, {slots: t}) {
        const n = cn()
          , r = yv();
        return ()=>{
            const o = t.default && Ep(t.default(), !0);
            if (!o || !o.length)
                return;
            let i = o[0];
            if (o.length > 1) {
                for (const d of o)
                    if (d.type !== Lt) {
                        i = d;
                        break
                    }
            }
            const s = _e(e)
              , {mode: a} = s;
            if (r.isLeaving)
                return Ta(i);
            const l = Gu(i);
            if (!l)
                return Ta(i);
            const c = fl(l, s, r, n);
            vs(l, c);
            const u = n.subTree
              , f = u && Gu(u);
            if (f && f.type !== Lt && !en(l, f)) {
                const d = fl(f, s, r, n);
                if (vs(f, d),
                a === "out-in")
                    return r.isLeaving = !0,
                    d.afterLeave = ()=>{
                        r.isLeaving = !1,
                        n.update.active !== !1 && (n.effect.dirty = !0,
                        n.update())
                    }
                    ,
                    Ta(i);
                a === "in-out" && l.type !== Lt && (d.delayLeave = (m,_,b)=>{
                    const w = bp(r, f);
                    w[String(f.key)] = f,
                    m[$n] = ()=>{
                        _(),
                        m[$n] = void 0,
                        delete c.delayedLeave
                    }
                    ,
                    c.delayedLeave = b
                }
                )
            }
            return i
        }
    }
}
  , _v = vv;
function bp(e, t) {
    const {leavingVNodes: n} = e;
    let r = n.get(t.type);
    return r || (r = Object.create(null),
    n.set(t.type, r)),
    r
}
function fl(e, t, n, r) {
    const {appear: o, mode: i, persisted: s=!1, onBeforeEnter: a, onEnter: l, onAfterEnter: c, onEnterCancelled: u, onBeforeLeave: f, onLeave: d, onAfterLeave: m, onLeaveCancelled: _, onBeforeAppear: b, onAppear: w, onAfterAppear: g, onAppearCancelled: E} = t
      , p = String(e.key)
      , y = bp(n, e)
      , S = (L,O)=>{
        L && Jt(L, r, 9, O)
    }
      , T = (L,O)=>{
        const I = O[1];
        S(L, O),
        ce(L) ? L.every(V=>V.length <= 1) && I() : L.length <= 1 && I()
    }
      , A = {
        mode: i,
        persisted: s,
        beforeEnter(L) {
            let O = a;
            if (!n.isMounted)
                if (o)
                    O = b || a;
                else
                    return;
            L[$n] && L[$n](!0);
            const I = y[p];
            I && en(e, I) && I.el[$n] && I.el[$n](),
            S(O, [L])
        },
        enter(L) {
            let O = l
              , I = c
              , V = u;
            if (!n.isMounted)
                if (o)
                    O = w || l,
                    I = g || c,
                    V = E || u;
                else
                    return;
            let x = !1;
            const X = L[qi] = Y=>{
                x || (x = !0,
                Y ? S(V, [L]) : S(I, [L]),
                A.delayedLeave && A.delayedLeave(),
                L[qi] = void 0)
            }
            ;
            O ? T(O, [L, X]) : X()
        },
        leave(L, O) {
            const I = String(e.key);
            if (L[qi] && L[qi](!0),
            n.isUnmounting)
                return O();
            S(f, [L]);
            let V = !1;
            const x = L[$n] = X=>{
                V || (V = !0,
                O(),
                X ? S(_, [L]) : S(m, [L]),
                L[$n] = void 0,
                y[I] === e && delete y[I])
            }
            ;
            y[I] = e,
            d ? T(d, [L, x]) : x()
        },
        clone(L) {
            return fl(L, t, n, r)
        }
    };
    return A
}
function Ta(e) {
    if (Js(e))
        return e = Un(e),
        e.children = null,
        e
}
function Gu(e) {
    return Js(e) ? e.children ? e.children[0] : void 0 : e
}
function vs(e, t) {
    e.shapeFlag & 6 && e.component ? vs(e.component.subTree, t) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent),
    e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t
}
function Ep(e, t=!1, n) {
    let r = []
      , o = 0;
    for (let i = 0; i < e.length; i++) {
        let s = e[i];
        const a = n == null ? s.key : String(n) + String(s.key != null ? s.key : i);
        s.type === ct ? (s.patchFlag & 128 && o++,
        r = r.concat(Ep(s.children, t, a))) : (t || s.type !== Lt) && r.push(a != null ? Un(s, {
            key: a
        }) : s)
    }
    if (o > 1)
        for (let i = 0; i < r.length; i++)
            r[i].patchFlag = -2;
    return r
}
/*! #__NO_SIDE_EFFECTS__ */
function Te(e, t) {
    return pe(e) ? ft({
        name: e.name
    }, t, {
        setup: e
    }) : e
}
const Mr = e=>!!e.type.__asyncLoader
  , Js = e=>e.type.__isKeepAlive
  , bv = {
    name: "KeepAlive",
    __isKeepAlive: !0,
    props: {
        include: [String, RegExp, Array],
        exclude: [String, RegExp, Array],
        max: [String, Number]
    },
    setup(e, {slots: t}) {
        const n = cn()
          , r = n.ctx;
        if (!r.renderer)
            return ()=>{
                const E = t.default && t.default();
                return E && E.length === 1 ? E[0] : E
            }
            ;
        const o = new Map
          , i = new Set;
        let s = null;
        const a = n.suspense
          , {renderer: {p: l, m: c, um: u, o: {createElement: f}}} = r
          , d = f("div");
        r.activate = (E,p,y,S,T)=>{
            const A = E.component;
            c(E, p, y, 0, a),
            l(A.vnode, E, p, y, A, a, S, E.slotScopeIds, T),
            vt(()=>{
                A.isDeactivated = !1,
                A.a && no(A.a);
                const L = E.props && E.props.onVnodeMounted;
                L && Rt(L, A.parent, E)
            }
            , a)
        }
        ,
        r.deactivate = E=>{
            const p = E.component;
            c(E, d, null, 1, a),
            vt(()=>{
                p.da && no(p.da);
                const y = E.props && E.props.onVnodeUnmounted;
                y && Rt(y, p.parent, E),
                p.isDeactivated = !0
            }
            , a)
        }
        ;
        function m(E) {
            ka(E),
            u(E, n, a, !0)
        }
        function _(E) {
            o.forEach((p,y)=>{
                const S = El(p.type);
                S && (!E || !E(S)) && b(y)
            }
            )
        }
        function b(E) {
            const p = o.get(E);
            !s || !en(p, s) ? m(p) : s && ka(s),
            o.delete(E),
            i.delete(E)
        }
        Ue(()=>[e.include, e.exclude], ([E,p])=>{
            E && _(y=>Io(E, y)),
            p && _(y=>!Io(p, y))
        }
        , {
            flush: "post",
            deep: !0
        });
        let w = null;
        const g = ()=>{
            w != null && o.set(w, Aa(n.subTree))
        }
        ;
        return Xt(g),
        Hc(g),
        ln(()=>{
            o.forEach(E=>{
                const {subTree: p, suspense: y} = n
                  , S = Aa(p);
                if (E.type === S.type && E.key === S.key) {
                    ka(S);
                    const T = S.component.da;
                    T && vt(T, y);
                    return
                }
                m(E)
            }
            )
        }
        ),
        ()=>{
            if (w = null,
            !t.default)
                return null;
            const E = t.default()
              , p = E[0];
            if (E.length > 1)
                return s = null,
                E;
            if (!uo(p) || !(p.shapeFlag & 4) && !(p.shapeFlag & 128))
                return s = null,
                p;
            let y = Aa(p);
            const S = y.type
              , T = El(Mr(y) ? y.type.__asyncResolved || {} : S)
              , {include: A, exclude: L, max: O} = e;
            if (A && (!T || !Io(A, T)) || L && T && Io(L, T))
                return s = y,
                p;
            const I = y.key == null ? S : y.key
              , V = o.get(I);
            return y.el && (y = Un(y),
            p.shapeFlag & 128 && (p.ssContent = y)),
            w = I,
            V ? (y.el = V.el,
            y.component = V.component,
            y.transition && vs(y, y.transition),
            y.shapeFlag |= 512,
            i.delete(I),
            i.add(I)) : (i.add(I),
            O && i.size > parseInt(O, 10) && b(i.values().next().value)),
            y.shapeFlag |= 256,
            s = y,
            gp(p.type) ? p : y
        }
    }
}
  , Ev = bv;
function Io(e, t) {
    return ce(e) ? e.some(n=>Io(n, t)) : Xe(e) ? e.split(",").includes(t) : c0(e) ? e.test(t) : !1
}
function Sp(e, t) {
    Tp(e, "a", t)
}
function wp(e, t) {
    Tp(e, "da", t)
}
function Tp(e, t, n=pt) {
    const r = e.__wdc || (e.__wdc = ()=>{
        let o = n;
        for (; o; ) {
            if (o.isDeactivated)
                return;
            o = o.parent
        }
        return e()
    }
    );
    if (zs(t, r, n),
    n) {
        let o = n.parent;
        for (; o && o.parent; )
            Js(o.parent.vnode) && Sv(r, t, n, o),
            o = o.parent
    }
}
function Sv(e, t, n, r) {
    const o = zs(t, e, r, !0);
    Gs(()=>{
        Ec(r[t], o)
    }
    , n)
}
function ka(e) {
    e.shapeFlag &= -257,
    e.shapeFlag &= -513
}
function Aa(e) {
    return e.shapeFlag & 128 ? e.ssContent : e
}
function zs(e, t, n=pt, r=!1) {
    if (n) {
        const o = n[e] || (n[e] = [])
          , i = t.__weh || (t.__weh = (...s)=>{
            if (n.isUnmounted)
                return;
            jr();
            const a = Vr(n)
              , l = Jt(t, n, e, s);
            return a(),
            Kr(),
            l
        }
        );
        return r ? o.unshift(i) : o.push(i),
        i
    }
}
const Vn = e=>(t,n=pt)=>(!Zs || e === "sp") && zs(e, (...r)=>t(...r), n)
  , wv = Vn("bm")
  , Xt = Vn("m")
  , Tv = Vn("bu")
  , Hc = Vn("u")
  , ln = Vn("bum")
  , Gs = Vn("um")
  , kv = Vn("sp")
  , Av = Vn("rtg")
  , Lv = Vn("rtc");
function kp(e, t=pt) {
    zs("ec", e, t)
}
function Cv(e, t, n, r) {
    let o;
    const i = n && n[r];
    if (ce(e) || Xe(e)) {
        o = new Array(e.length);
        for (let s = 0, a = e.length; s < a; s++)
            o[s] = t(e[s], s, void 0, i && i[s])
    } else if (typeof e == "number") {
        o = new Array(e);
        for (let s = 0; s < e; s++)
            o[s] = t(s + 1, s, void 0, i && i[s])
    } else if (ze(e))
        if (e[Symbol.iterator])
            o = Array.from(e, (s,a)=>t(s, a, void 0, i && i[a]));
        else {
            const s = Object.keys(e);
            o = new Array(s.length);
            for (let a = 0, l = s.length; a < l; a++) {
                const c = s[a];
                o[a] = t(e[c], c, a, i && i[a])
            }
        }
    else
        o = [];
    return n && (n[r] = o),
    o
}
function dr(e, t, n={}, r, o) {
    if (lt.isCE || lt.parent && Mr(lt.parent) && lt.parent.isCE)
        return t !== "default" && (n.name = t),
        We("slot", n, r && r());
    let i = e[t];
    i && i._c && (i._d = !1),
    he();
    const s = i && Ap(i(n))
      , a = ht(ct, {
        key: n.key || s && s.key || `_${t}`
    }, s || (r ? r() : []), s && e._ === 1 ? 64 : -2);
    return !o && a.scopeId && (a.slotScopeIds = [a.scopeId + "-s"]),
    i && i._c && (i._d = !0),
    a
}
function Ap(e) {
    return e.some(t=>uo(t) ? !(t.type === Lt || t.type === ct && !Ap(t.children)) : !0) ? e : null
}
const dl = e=>e ? jp(e) ? $s(e) || e.proxy : dl(e.parent) : null
  , Do = ft(Object.create(null), {
    $: e=>e,
    $el: e=>e.vnode.el,
    $data: e=>e.data,
    $props: e=>e.props,
    $attrs: e=>e.attrs,
    $slots: e=>e.slots,
    $refs: e=>e.refs,
    $parent: e=>dl(e.parent),
    $root: e=>dl(e.root),
    $emit: e=>e.emit,
    $options: e=>jc(e),
    $forceUpdate: e=>e.f || (e.f = ()=>{
        e.effect.dirty = !0,
        Nc(e.update)
    }
    ),
    $nextTick: e=>e.n || (e.n = Ft.bind(e.proxy)),
    $watch: e=>gv.bind(e)
})
  , La = (e,t)=>e !== Ge && !e.__isScriptSetup && xe(e, t)
  , Ov = {
    get({_: e}, t) {
        const {ctx: n, setupState: r, data: o, props: i, accessCache: s, type: a, appContext: l} = e;
        let c;
        if (t[0] !== "$") {
            const m = s[t];
            if (m !== void 0)
                switch (m) {
                case 1:
                    return r[t];
                case 2:
                    return o[t];
                case 4:
                    return n[t];
                case 3:
                    return i[t]
                }
            else {
                if (La(r, t))
                    return s[t] = 1,
                    r[t];
                if (o !== Ge && xe(o, t))
                    return s[t] = 2,
                    o[t];
                if ((c = e.propsOptions[0]) && xe(c, t))
                    return s[t] = 3,
                    i[t];
                if (n !== Ge && xe(n, t))
                    return s[t] = 4,
                    n[t];
                pl && (s[t] = 0)
            }
        }
        const u = Do[t];
        let f, d;
        if (u)
            return t === "$attrs" && It(e, "get", t),
            u(e);
        if ((f = a.__cssModules) && (f = f[t]))
            return f;
        if (n !== Ge && xe(n, t))
            return s[t] = 4,
            n[t];
        if (d = l.config.globalProperties,
        xe(d, t))
            return d[t]
    },
    set({_: e}, t, n) {
        const {data: r, setupState: o, ctx: i} = e;
        return La(o, t) ? (o[t] = n,
        !0) : r !== Ge && xe(r, t) ? (r[t] = n,
        !0) : xe(e.props, t) || t[0] === "$" && t.slice(1)in e ? !1 : (i[t] = n,
        !0)
    },
    has({_: {data: e, setupState: t, accessCache: n, ctx: r, appContext: o, propsOptions: i}}, s) {
        let a;
        return !!n[s] || e !== Ge && xe(e, s) || La(t, s) || (a = i[0]) && xe(a, s) || xe(r, s) || xe(Do, s) || xe(o.config.globalProperties, s)
    },
    defineProperty(e, t, n) {
        return n.get != null ? e._.accessCache[t] = 0 : xe(n, "value") && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
    }
};
function Rv() {
    return Pv().slots
}
function Pv() {
    const e = cn();
    return e.setupContext || (e.setupContext = qp(e))
}
function hl(e) {
    return ce(e) ? e.reduce((t,n)=>(t[n] = null,
    t), {}) : e
}
function Qs(e, t) {
    const n = hl(e);
    for (const r in t) {
        if (r.startsWith("__skip"))
            continue;
        let o = n[r];
        o ? ce(o) || pe(o) ? o = n[r] = {
            type: o,
            default: t[r]
        } : o.default = t[r] : o === null && (o = n[r] = {
            default: t[r]
        }),
        o && t[`__skip_${r}`] && (o.skipFactory = !0)
    }
    return n
}
function Iv(e) {
    const t = cn();
    let n = e();
    return _l(),
    Sc(n) && (n = n.catch(r=>{
        throw Vr(t),
        r
    }
    )),
    [n, ()=>Vr(t)]
}
let pl = !0;
function Mv(e) {
    const t = jc(e)
      , n = e.proxy
      , r = e.ctx;
    pl = !1,
    t.beforeCreate && Qu(t.beforeCreate, e, "bc");
    const {data: o, computed: i, methods: s, watch: a, provide: l, inject: c, created: u, beforeMount: f, mounted: d, beforeUpdate: m, updated: _, activated: b, deactivated: w, beforeDestroy: g, beforeUnmount: E, destroyed: p, unmounted: y, render: S, renderTracked: T, renderTriggered: A, errorCaptured: L, serverPrefetch: O, expose: I, inheritAttrs: V, components: x, directives: X, filters: Y} = t;
    if (c && Nv(c, r, null),
    s)
        for (const K in s) {
            const F = s[K];
            pe(F) && (r[K] = F.bind(n))
        }
    if (o) {
        const K = o.call(n, n);
        ze(K) && (e.data = yt(K))
    }
    if (pl = !0,
    i)
        for (const K in i) {
            const F = i[K]
              , se = pe(F) ? F.bind(n, n) : pe(F.get) ? F.get.bind(n, n) : qt
              , H = !pe(F) && pe(F.set) ? F.set.bind(n) : qt
              , ae = le({
                get: se,
                set: H
            });
            Object.defineProperty(r, K, {
                enumerable: !0,
                configurable: !0,
                get: ()=>ae.value,
                set: ge=>ae.value = ge
            })
        }
    if (a)
        for (const K in a)
            Lp(a[K], r, n, K);
    if (l) {
        const K = pe(l) ? l.call(n) : l;
        Reflect.ownKeys(K).forEach(F=>{
            Nr(F, K[F])
        }
        )
    }
    u && Qu(u, e, "c");
    function M(K, F) {
        ce(F) ? F.forEach(se=>K(se.bind(n))) : F && K(F.bind(n))
    }
    if (M(wv, f),
    M(Xt, d),
    M(Tv, m),
    M(Hc, _),
    M(Sp, b),
    M(wp, w),
    M(kp, L),
    M(Lv, T),
    M(Av, A),
    M(ln, E),
    M(Gs, y),
    M(kv, O),
    ce(I))
        if (I.length) {
            const K = e.exposed || (e.exposed = {});
            I.forEach(F=>{
                Object.defineProperty(K, F, {
                    get: ()=>n[F],
                    set: se=>n[F] = se
                })
            }
            )
        } else
            e.exposed || (e.exposed = {});
    S && e.render === qt && (e.render = S),
    V != null && (e.inheritAttrs = V),
    x && (e.components = x),
    X && (e.directives = X)
}
function Nv(e, t, n=qt) {
    ce(e) && (e = ml(e));
    for (const r in e) {
        const o = e[r];
        let i;
        ze(o) ? "default"in o ? i = gt(o.from || r, o.default, !0) : i = gt(o.from || r) : i = gt(o),
        et(i) ? Object.defineProperty(t, r, {
            enumerable: !0,
            configurable: !0,
            get: ()=>i.value,
            set: s=>i.value = s
        }) : t[r] = i
    }
}
function Qu(e, t, n) {
    Jt(ce(e) ? e.map(r=>r.bind(t.proxy)) : e.bind(t.proxy), t, n)
}
function Lp(e, t, n, r) {
    const o = r.includes(".") ? vp(n, r) : ()=>n[r];
    if (Xe(e)) {
        const i = t[e];
        pe(i) && Ue(o, i)
    } else if (pe(e))
        Ue(o, e.bind(n));
    else if (ze(e))
        if (ce(e))
            e.forEach(i=>Lp(i, t, n, r));
        else {
            const i = pe(e.handler) ? e.handler.bind(n) : t[e.handler];
            pe(i) && Ue(o, i, e)
        }
}
function jc(e) {
    const t = e.type
      , {mixins: n, extends: r} = t
      , {mixins: o, optionsCache: i, config: {optionMergeStrategies: s}} = e.appContext
      , a = i.get(t);
    let l;
    return a ? l = a : !o.length && !n && !r ? l = t : (l = {},
    o.length && o.forEach(c=>_s(l, c, s, !0)),
    _s(l, t, s)),
    ze(t) && i.set(t, l),
    l
}
function _s(e, t, n, r=!1) {
    const {mixins: o, extends: i} = t;
    i && _s(e, i, n, !0),
    o && o.forEach(s=>_s(e, s, n, !0));
    for (const s in t)
        if (!(r && s === "expose")) {
            const a = Dv[s] || n && n[s];
            e[s] = a ? a(e[s], t[s]) : t[s]
        }
    return e
}
const Dv = {
    data: Xu,
    props: Zu,
    emits: Zu,
    methods: Mo,
    computed: Mo,
    beforeCreate: wt,
    created: wt,
    beforeMount: wt,
    mounted: wt,
    beforeUpdate: wt,
    updated: wt,
    beforeDestroy: wt,
    beforeUnmount: wt,
    destroyed: wt,
    unmounted: wt,
    activated: wt,
    deactivated: wt,
    errorCaptured: wt,
    serverPrefetch: wt,
    components: Mo,
    directives: Mo,
    watch: Fv,
    provide: Xu,
    inject: xv
};
function Xu(e, t) {
    return t ? e ? function() {
        return ft(pe(e) ? e.call(this, this) : e, pe(t) ? t.call(this, this) : t)
    }
    : t : e
}
function xv(e, t) {
    return Mo(ml(e), ml(t))
}
function ml(e) {
    if (ce(e)) {
        const t = {};
        for (let n = 0; n < e.length; n++)
            t[e[n]] = e[n];
        return t
    }
    return e
}
function wt(e, t) {
    return e ? [...new Set([].concat(e, t))] : t
}
function Mo(e, t) {
    return e ? ft(Object.create(null), e, t) : t
}
function Zu(e, t) {
    return e ? ce(e) && ce(t) ? [...new Set([...e, ...t])] : ft(Object.create(null), hl(e), hl(t ?? {})) : t
}
function Fv(e, t) {
    if (!e)
        return t;
    if (!t)
        return e;
    const n = ft(Object.create(null), e);
    for (const r in t)
        n[r] = wt(e[r], t[r]);
    return n
}
function Cp() {
    return {
        app: null,
        config: {
            isNativeTag: a0,
            performance: !1,
            globalProperties: {},
            optionMergeStrategies: {},
            errorHandler: void 0,
            warnHandler: void 0,
            compilerOptions: {}
        },
        mixins: [],
        components: {},
        directives: {},
        provides: Object.create(null),
        optionsCache: new WeakMap,
        propsCache: new WeakMap,
        emitsCache: new WeakMap
    }
}
let Uv = 0;
function Vv(e, t) {
    return function(r, o=null) {
        pe(r) || (r = ft({}, r)),
        o != null && !ze(o) && (o = null);
        const i = Cp()
          , s = new WeakSet;
        let a = !1;
        const l = i.app = {
            _uid: Uv++,
            _component: r,
            _props: o,
            _container: null,
            _context: i,
            _instance: null,
            version: Yp,
            get config() {
                return i.config
            },
            set config(c) {},
            use(c, ...u) {
                return s.has(c) || (c && pe(c.install) ? (s.add(c),
                c.install(l, ...u)) : pe(c) && (s.add(c),
                c(l, ...u))),
                l
            },
            mixin(c) {
                return i.mixins.includes(c) || i.mixins.push(c),
                l
            },
            component(c, u) {
                return u ? (i.components[c] = u,
                l) : i.components[c]
            },
            directive(c, u) {
                return u ? (i.directives[c] = u,
                l) : i.directives[c]
            },
            mount(c, u, f) {
                if (!a) {
                    const d = We(r, o);
                    return d.appContext = i,
                    f === !0 ? f = "svg" : f === !1 && (f = void 0),
                    u && t ? t(d, c) : e(d, c, f),
                    a = !0,
                    l._container = c,
                    c.__vue_app__ = l,
                    $s(d.component) || d.component.proxy
                }
            },
            unmount() {
                a && (e(null, l._container),
                delete l._container.__vue_app__)
            },
            provide(c, u) {
                return i.provides[c] = u,
                l
            },
            runWithContext(c) {
                const u = so;
                so = l;
                try {
                    return c()
                } finally {
                    so = u
                }
            }
        };
        return l
    }
}
let so = null;
function Nr(e, t) {
    if (pt) {
        let n = pt.provides;
        const r = pt.parent && pt.parent.provides;
        r === n && (n = pt.provides = Object.create(r)),
        n[e] = t
    }
}
function gt(e, t, n=!1) {
    const r = pt || lt;
    if (r || so) {
        const o = r ? r.parent == null ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : so._context.provides;
        if (o && e in o)
            return o[e];
        if (arguments.length > 1)
            return n && pe(t) ? t.call(r && r.proxy) : t
    }
}
function Kc() {
    return !!(pt || lt || so)
}
function Bv(e, t, n, r=!1) {
    const o = {}
      , i = {};
    hs(i, Xs, 1),
    e.propsDefaults = Object.create(null),
    Op(e, t, o, i);
    for (const s in e.propsOptions[0])
        s in o || (o[s] = void 0);
    n ? e.props = r ? o : So(o) : e.type.props ? e.props = o : e.props = i,
    e.attrs = i
}
function Hv(e, t, n, r) {
    const {props: o, attrs: i, vnode: {patchFlag: s}} = e
      , a = _e(o)
      , [l] = e.propsOptions;
    let c = !1;
    if ((r || s > 0) && !(s & 16)) {
        if (s & 8) {
            const u = e.vnode.dynamicProps;
            for (let f = 0; f < u.length; f++) {
                let d = u[f];
                if (Ys(e.emitsOptions, d))
                    continue;
                const m = t[d];
                if (l)
                    if (xe(i, d))
                        m !== i[d] && (i[d] = m,
                        c = !0);
                    else {
                        const _ = Tn(d);
                        o[_] = gl(l, a, _, m, e, !1)
                    }
                else
                    m !== i[d] && (i[d] = m,
                    c = !0)
            }
        }
    } else {
        Op(e, t, o, i) && (c = !0);
        let u;
        for (const f in a)
            (!t || !xe(t, f) && ((u = Hr(f)) === f || !xe(t, u))) && (l ? n && (n[f] !== void 0 || n[u] !== void 0) && (o[f] = gl(l, a, f, void 0, e, !0)) : delete o[f]);
        if (i !== a)
            for (const f in i)
                (!t || !xe(t, f)) && (delete i[f],
                c = !0)
    }
    c && xn(e, "set", "$attrs")
}
function Op(e, t, n, r) {
    const [o,i] = e.propsOptions;
    let s = !1, a;
    if (t)
        for (let l in t) {
            if (to(l))
                continue;
            const c = t[l];
            let u;
            o && xe(o, u = Tn(l)) ? !i || !i.includes(u) ? n[u] = c : (a || (a = {}))[u] = c : Ys(e.emitsOptions, l) || (!(l in r) || c !== r[l]) && (r[l] = c,
            s = !0)
        }
    if (i) {
        const l = _e(n)
          , c = a || Ge;
        for (let u = 0; u < i.length; u++) {
            const f = i[u];
            n[f] = gl(o, l, f, c[f], e, !xe(c, f))
        }
    }
    return s
}
function gl(e, t, n, r, o, i) {
    const s = e[n];
    if (s != null) {
        const a = xe(s, "default");
        if (a && r === void 0) {
            const l = s.default;
            if (s.type !== Function && !s.skipFactory && pe(l)) {
                const {propsDefaults: c} = o;
                if (n in c)
                    r = c[n];
                else {
                    const u = Vr(o);
                    r = c[n] = l.call(null, t),
                    u()
                }
            } else
                r = l
        }
        s[0] && (i && !a ? r = !1 : s[1] && (r === "" || r === Hr(n)) && (r = !0))
    }
    return r
}
function Rp(e, t, n=!1) {
    const r = t.propsCache
      , o = r.get(e);
    if (o)
        return o;
    const i = e.props
      , s = {}
      , a = [];
    let l = !1;
    if (!pe(e)) {
        const u = f=>{
            l = !0;
            const [d,m] = Rp(f, t, !0);
            ft(s, d),
            m && a.push(...m)
        }
        ;
        !n && t.mixins.length && t.mixins.forEach(u),
        e.extends && u(e.extends),
        e.mixins && e.mixins.forEach(u)
    }
    if (!i && !l)
        return ze(e) && r.set(e, $r),
        $r;
    if (ce(i))
        for (let u = 0; u < i.length; u++) {
            const f = Tn(i[u]);
            $u(f) && (s[f] = Ge)
        }
    else if (i)
        for (const u in i) {
            const f = Tn(u);
            if ($u(f)) {
                const d = i[u]
                  , m = s[f] = ce(d) || pe(d) ? {
                    type: d
                } : ft({}, d);
                if (m) {
                    const _ = nf(Boolean, m.type)
                      , b = nf(String, m.type);
                    m[0] = _ > -1,
                    m[1] = b < 0 || _ < b,
                    (_ > -1 || xe(m, "default")) && a.push(f)
                }
            }
        }
    const c = [s, a];
    return ze(e) && r.set(e, c),
    c
}
function $u(e) {
    return e[0] !== "$" && !to(e)
}
function ef(e) {
    return e === null ? "null" : typeof e == "function" ? e.name || "" : typeof e == "object" && e.constructor && e.constructor.name || ""
}
function tf(e, t) {
    return ef(e) === ef(t)
}
function nf(e, t) {
    return ce(t) ? t.findIndex(n=>tf(n, e)) : pe(t) && tf(t, e) ? 0 : -1
}
const Pp = e=>e[0] === "_" || e === "$stable"
  , qc = e=>ce(e) ? e.map(Ht) : [Ht(e)]
  , jv = (e,t,n)=>{
    if (t._n)
        return t;
    const r = Gt((...o)=>qc(t(...o)), n);
    return r._c = !1,
    r
}
  , Ip = (e,t,n)=>{
    const r = e._ctx;
    for (const o in e) {
        if (Pp(o))
            continue;
        const i = e[o];
        if (pe(i))
            t[o] = jv(o, i, r);
        else if (i != null) {
            const s = qc(i);
            t[o] = ()=>s
        }
    }
}
  , Mp = (e,t)=>{
    const n = qc(t);
    e.slots.default = ()=>n
}
  , Kv = (e,t)=>{
    if (e.vnode.shapeFlag & 32) {
        const n = t._;
        n ? (e.slots = _e(t),
        hs(t, "_", n)) : Ip(t, e.slots = {})
    } else
        e.slots = {},
        t && Mp(e, t);
    hs(e.slots, Xs, 1)
}
  , qv = (e,t,n)=>{
    const {vnode: r, slots: o} = e;
    let i = !0
      , s = Ge;
    if (r.shapeFlag & 32) {
        const a = t._;
        a ? n && a === 1 ? i = !1 : (ft(o, t),
        !n && a === 1 && delete o._) : (i = !t.$stable,
        Ip(t, o)),
        s = t
    } else
        t && (Mp(e, t),
        s = {
            default: 1
        });
    if (i)
        for (const a in o)
            !Pp(a) && s[a] == null && delete o[a]
}
;
function bs(e, t, n, r, o=!1) {
    if (ce(e)) {
        e.forEach((d,m)=>bs(d, t && (ce(t) ? t[m] : t), n, r, o));
        return
    }
    if (Mr(r) && !o)
        return;
    const i = r.shapeFlag & 4 ? $s(r.component) || r.component.proxy : r.el
      , s = o ? null : i
      , {i: a, r: l} = e
      , c = t && t.r
      , u = a.refs === Ge ? a.refs = {} : a.refs
      , f = a.setupState;
    if (c != null && c !== l && (Xe(c) ? (u[c] = null,
    xe(f, c) && (f[c] = null)) : et(c) && (c.value = null)),
    pe(l))
        lr(l, a, 12, [s, u]);
    else {
        const d = Xe(l)
          , m = et(l);
        if (d || m) {
            const _ = ()=>{
                if (e.f) {
                    const b = d ? xe(f, l) ? f[l] : u[l] : l.value;
                    o ? ce(b) && Ec(b, i) : ce(b) ? b.includes(i) || b.push(i) : d ? (u[l] = [i],
                    xe(f, l) && (f[l] = u[l])) : (l.value = [i],
                    e.k && (u[e.k] = l.value))
                } else
                    d ? (u[l] = s,
                    xe(f, l) && (f[l] = s)) : m && (l.value = s,
                    e.k && (u[e.k] = s))
            }
            ;
            s ? (_.id = -1,
            vt(_, n)) : _()
        }
    }
}
let Kn = !1;
const Yv = e=>e.namespaceURI.includes("svg") && e.tagName !== "foreignObject"
  , Wv = e=>e.namespaceURI.includes("MathML")
  , Yi = e=>{
    if (Yv(e))
        return "svg";
    if (Wv(e))
        return "mathml"
}
  , Wi = e=>e.nodeType === 8;
function Jv(e) {
    const {mt: t, p: n, o: {patchProp: r, createText: o, nextSibling: i, parentNode: s, remove: a, insert: l, createComment: c}} = e
      , u = (p,y)=>{
        if (!y.hasChildNodes()) {
            n(null, p, y),
            gs(),
            y._vnode = p;
            return
        }
        Kn = !1,
        f(y.firstChild, p, null, null, null),
        gs(),
        y._vnode = p,
        Kn && console.error("Hydration completed but contains mismatches.")
    }
      , f = (p,y,S,T,A,L=!1)=>{
        const O = Wi(p) && p.data === "["
          , I = ()=>b(p, y, S, T, A, O)
          , {type: V, ref: x, shapeFlag: X, patchFlag: Y} = y;
        let j = p.nodeType;
        y.el = p,
        Y === -2 && (L = !1,
        y.dynamicChildren = null);
        let M = null;
        switch (V) {
        case Ur:
            j !== 3 ? y.children === "" ? (l(y.el = o(""), s(p), p),
            M = p) : M = I() : (p.data !== y.children && (Kn = !0,
            p.data = y.children),
            M = i(p));
            break;
        case Lt:
            E(p) ? (M = i(p),
            g(y.el = p.content.firstChild, p, S)) : j !== 8 || O ? M = I() : M = i(p);
            break;
        case rs:
            if (O && (p = i(p),
            j = p.nodeType),
            j === 1 || j === 3) {
                M = p;
                const K = !y.children.length;
                for (let F = 0; F < y.staticCount; F++)
                    K && (y.children += M.nodeType === 1 ? M.outerHTML : M.data),
                    F === y.staticCount - 1 && (y.anchor = M),
                    M = i(M);
                return O ? i(M) : M
            } else
                I();
            break;
        case ct:
            O ? M = _(p, y, S, T, A, L) : M = I();
            break;
        default:
            if (X & 1)
                (j !== 1 || y.type.toLowerCase() !== p.tagName.toLowerCase()) && !E(p) ? M = I() : M = d(p, y, S, T, A, L);
            else if (X & 6) {
                y.slotScopeIds = A;
                const K = s(p);
                if (O ? M = w(p) : Wi(p) && p.data === "teleport start" ? M = w(p, p.data, "teleport end") : M = i(p),
                t(y, K, null, S, T, Yi(K), L),
                Mr(y)) {
                    let F;
                    O ? (F = We(ct),
                    F.anchor = M ? M.previousSibling : K.lastChild) : F = p.nodeType === 3 ? Hp("") : We("div"),
                    F.el = p,
                    y.component.subTree = F
                }
            } else
                X & 64 ? j !== 8 ? M = I() : M = y.type.hydrate(p, y, S, T, A, L, e, m) : X & 128 && (M = y.type.hydrate(p, y, S, T, Yi(s(p)), A, L, e, f))
        }
        return x != null && bs(x, null, T, y),
        M
    }
      , d = (p,y,S,T,A,L)=>{
        L = L || !!y.dynamicChildren;
        const {type: O, props: I, patchFlag: V, shapeFlag: x, dirs: X, transition: Y} = y
          , j = O === "input" || O === "option";
        if (j || V !== -1) {
            X && gn(y, null, S, "created");
            let M = !1;
            if (E(p)) {
                M = Dp(T, Y) && S && S.vnode.props && S.vnode.props.appear;
                const F = p.content.firstChild;
                M && Y.beforeEnter(F),
                g(F, p, S),
                y.el = p = F
            }
            if (x & 16 && !(I && (I.innerHTML || I.textContent))) {
                let F = m(p.firstChild, y, p, S, T, A, L);
                for (; F; ) {
                    Kn = !0;
                    const se = F;
                    F = F.nextSibling,
                    a(se)
                }
            } else
                x & 8 && p.textContent !== y.children && (Kn = !0,
                p.textContent = y.children);
            if (I)
                if (j || !L || V & 48)
                    for (const F in I)
                        (j && (F.endsWith("value") || F === "indeterminate") || _i(F) && !to(F) || F[0] === ".") && r(p, F, null, I[F], void 0, void 0, S);
                else
                    I.onClick && r(p, "onClick", null, I.onClick, void 0, void 0, S);
            let K;
            (K = I && I.onVnodeBeforeMount) && Rt(K, S, y),
            X && gn(y, null, S, "beforeMount"),
            ((K = I && I.onVnodeMounted) || X || M) && yp(()=>{
                K && Rt(K, S, y),
                M && Y.enter(p),
                X && gn(y, null, S, "mounted")
            }
            , T)
        }
        return p.nextSibling
    }
      , m = (p,y,S,T,A,L,O)=>{
        O = O || !!y.dynamicChildren;
        const I = y.children
          , V = I.length;
        for (let x = 0; x < V; x++) {
            const X = O ? I[x] : I[x] = Ht(I[x]);
            if (p)
                p = f(p, X, T, A, L, O);
            else {
                if (X.type === Ur && !X.children)
                    continue;
                Kn = !0,
                n(null, X, S, null, T, A, Yi(S), L)
            }
        }
        return p
    }
      , _ = (p,y,S,T,A,L)=>{
        const {slotScopeIds: O} = y;
        O && (A = A ? A.concat(O) : O);
        const I = s(p)
          , V = m(i(p), y, I, S, T, A, L);
        return V && Wi(V) && V.data === "]" ? i(y.anchor = V) : (Kn = !0,
        l(y.anchor = c("]"), I, V),
        V)
    }
      , b = (p,y,S,T,A,L)=>{
        if (Kn = !0,
        y.el = null,
        L) {
            const V = w(p);
            for (; ; ) {
                const x = i(p);
                if (x && x !== V)
                    a(x);
                else
                    break
            }
        }
        const O = i(p)
          , I = s(p);
        return a(p),
        n(null, y, I, O, S, T, Yi(I), A),
        O
    }
      , w = (p,y="[",S="]")=>{
        let T = 0;
        for (; p; )
            if (p = i(p),
            p && Wi(p) && (p.data === y && T++,
            p.data === S)) {
                if (T === 0)
                    return i(p);
                T--
            }
        return p
    }
      , g = (p,y,S)=>{
        const T = y.parentNode;
        T && T.replaceChild(p, y);
        let A = S;
        for (; A; )
            A.vnode.el === y && (A.vnode.el = A.subTree.el = p),
            A = A.parent
    }
      , E = p=>p.nodeType === 1 && p.tagName.toLowerCase() === "template";
    return [u, f]
}
const vt = yp;
function zv(e) {
    return Np(e)
}
function Gv(e) {
    return Np(e, Jv)
}
function Np(e, t) {
    const n = Kh();
    n.__VUE__ = !0;
    const {insert: r, remove: o, patchProp: i, createElement: s, createText: a, createComment: l, setText: c, setElementText: u, parentNode: f, nextSibling: d, setScopeId: m=qt, insertStaticContent: _} = e
      , b = (h,v,k,R=null,N=null,q=null,Q=void 0,J=null,$=!!v.dynamicChildren)=>{
        if (h === v)
            return;
        h && !en(h, v) && (R = B(h),
        ge(h, N, q, !0),
        h = null),
        v.patchFlag === -2 && ($ = !1,
        v.dynamicChildren = null);
        const {type: W, ref: oe, shapeFlag: re} = v;
        switch (W) {
        case Ur:
            w(h, v, k, R);
            break;
        case Lt:
            g(h, v, k, R);
            break;
        case rs:
            h == null && E(v, k, R, Q);
            break;
        case ct:
            x(h, v, k, R, N, q, Q, J, $);
            break;
        default:
            re & 1 ? S(h, v, k, R, N, q, Q, J, $) : re & 6 ? X(h, v, k, R, N, q, Q, J, $) : (re & 64 || re & 128) && W.process(h, v, k, R, N, q, Q, J, $, Z)
        }
        oe != null && N && bs(oe, h && h.ref, q, v || h, !v)
    }
      , w = (h,v,k,R)=>{
        if (h == null)
            r(v.el = a(v.children), k, R);
        else {
            const N = v.el = h.el;
            v.children !== h.children && c(N, v.children)
        }
    }
      , g = (h,v,k,R)=>{
        h == null ? r(v.el = l(v.children || ""), k, R) : v.el = h.el
    }
      , E = (h,v,k,R)=>{
        [h.el,h.anchor] = _(h.children, v, k, R, h.el, h.anchor)
    }
      , p = ({el: h, anchor: v},k,R)=>{
        let N;
        for (; h && h !== v; )
            N = d(h),
            r(h, k, R),
            h = N;
        r(v, k, R)
    }
      , y = ({el: h, anchor: v})=>{
        let k;
        for (; h && h !== v; )
            k = d(h),
            o(h),
            h = k;
        o(v)
    }
      , S = (h,v,k,R,N,q,Q,J,$)=>{
        v.type === "svg" ? Q = "svg" : v.type === "math" && (Q = "mathml"),
        h == null ? T(v, k, R, N, q, Q, J, $) : O(h, v, N, q, Q, J, $)
    }
      , T = (h,v,k,R,N,q,Q,J)=>{
        let $, W;
        const {props: oe, shapeFlag: re, transition: P, dirs: U} = h;
        if ($ = h.el = s(h.type, q, oe && oe.is, oe),
        re & 8 ? u($, h.children) : re & 16 && L(h.children, $, null, R, N, Ca(h, q), Q, J),
        U && gn(h, null, R, "created"),
        A($, h, h.scopeId, Q, R),
        oe) {
            for (const fe in oe)
                fe !== "value" && !to(fe) && i($, fe, null, oe[fe], q, h.children, R, N, Je);
            "value"in oe && i($, "value", null, oe.value, q),
            (W = oe.onVnodeBeforeMount) && Rt(W, R, h)
        }
        U && gn(h, null, R, "beforeMount");
        const ie = Dp(N, P);
        ie && P.beforeEnter($),
        r($, v, k),
        ((W = oe && oe.onVnodeMounted) || ie || U) && vt(()=>{
            W && Rt(W, R, h),
            ie && P.enter($),
            U && gn(h, null, R, "mounted")
        }
        , N)
    }
      , A = (h,v,k,R,N)=>{
        if (k && m(h, k),
        R)
            for (let q = 0; q < R.length; q++)
                m(h, R[q]);
        if (N) {
            let q = N.subTree;
            if (v === q) {
                const Q = N.vnode;
                A(h, Q, Q.scopeId, Q.slotScopeIds, N.parent)
            }
        }
    }
      , L = (h,v,k,R,N,q,Q,J,$=0)=>{
        for (let W = $; W < h.length; W++) {
            const oe = h[W] = J ? er(h[W]) : Ht(h[W]);
            b(null, oe, v, k, R, N, q, Q, J)
        }
    }
      , O = (h,v,k,R,N,q,Q)=>{
        const J = v.el = h.el;
        let {patchFlag: $, dynamicChildren: W, dirs: oe} = v;
        $ |= h.patchFlag & 16;
        const re = h.props || Ge
          , P = v.props || Ge;
        let U;
        if (k && vr(k, !1),
        (U = P.onVnodeBeforeUpdate) && Rt(U, k, v, h),
        oe && gn(v, h, k, "beforeUpdate"),
        k && vr(k, !0),
        W ? I(h.dynamicChildren, W, J, k, R, Ca(v, N), q) : Q || F(h, v, J, null, k, R, Ca(v, N), q, !1),
        $ > 0) {
            if ($ & 16)
                V(J, v, re, P, k, R, N);
            else if ($ & 2 && re.class !== P.class && i(J, "class", null, P.class, N),
            $ & 4 && i(J, "style", re.style, P.style, N),
            $ & 8) {
                const ie = v.dynamicProps;
                for (let fe = 0; fe < ie.length; fe++) {
                    const Be = ie[fe]
                      , Ze = re[Be]
                      , dt = P[Be];
                    (dt !== Ze || Be === "value") && i(J, Be, Ze, dt, N, h.children, k, R, Je)
                }
            }
            $ & 1 && h.children !== v.children && u(J, v.children)
        } else
            !Q && W == null && V(J, v, re, P, k, R, N);
        ((U = P.onVnodeUpdated) || oe) && vt(()=>{
            U && Rt(U, k, v, h),
            oe && gn(v, h, k, "updated")
        }
        , R)
    }
      , I = (h,v,k,R,N,q,Q)=>{
        for (let J = 0; J < v.length; J++) {
            const $ = h[J]
              , W = v[J]
              , oe = $.el && ($.type === ct || !en($, W) || $.shapeFlag & 70) ? f($.el) : k;
            b($, W, oe, null, R, N, q, Q, !0)
        }
    }
      , V = (h,v,k,R,N,q,Q)=>{
        if (k !== R) {
            if (k !== Ge)
                for (const J in k)
                    !to(J) && !(J in R) && i(h, J, k[J], null, Q, v.children, N, q, Je);
            for (const J in R) {
                if (to(J))
                    continue;
                const $ = R[J]
                  , W = k[J];
                $ !== W && J !== "value" && i(h, J, W, $, Q, v.children, N, q, Je)
            }
            "value"in R && i(h, "value", k.value, R.value, Q)
        }
    }
      , x = (h,v,k,R,N,q,Q,J,$)=>{
        const W = v.el = h ? h.el : a("")
          , oe = v.anchor = h ? h.anchor : a("");
        let {patchFlag: re, dynamicChildren: P, slotScopeIds: U} = v;
        U && (J = J ? J.concat(U) : U),
        h == null ? (r(W, k, R),
        r(oe, k, R),
        L(v.children || [], k, oe, N, q, Q, J, $)) : re > 0 && re & 64 && P && h.dynamicChildren ? (I(h.dynamicChildren, P, k, N, q, Q, J),
        (v.key != null || N && v === N.subTree) && Yc(h, v, !0)) : F(h, v, k, oe, N, q, Q, J, $)
    }
      , X = (h,v,k,R,N,q,Q,J,$)=>{
        v.slotScopeIds = J,
        h == null ? v.shapeFlag & 512 ? N.ctx.activate(v, k, R, Q, $) : Y(v, k, R, N, q, Q, $) : j(h, v, $)
    }
      , Y = (h,v,k,R,N,q,Q)=>{
        const J = h.component = o_(h, R, N);
        if (Js(h) && (J.ctx.renderer = Z),
        i_(J),
        J.asyncDep) {
            if (N && N.registerDep(J, M),
            !h.el) {
                const $ = J.subTree = We(Lt);
                g(null, $, v, k)
            }
        } else
            M(J, h, v, k, N, q, Q)
    }
      , j = (h,v,k)=>{
        const R = v.component = h.component;
        if (iv(h, v, k))
            if (R.asyncDep && !R.asyncResolved) {
                K(R, v, k);
                return
            } else
                R.next = v,
                Q0(R.update),
                R.effect.dirty = !0,
                R.update();
        else
            v.el = h.el,
            R.vnode = v
    }
      , M = (h,v,k,R,N,q,Q)=>{
        const J = ()=>{
            if (h.isMounted) {
                let {next: oe, bu: re, u: P, parent: U, vnode: ie} = h;
                {
                    const Hn = xp(h);
                    if (Hn) {
                        oe && (oe.el = ie.el,
                        K(h, oe, Q)),
                        Hn.asyncDep.then(()=>{
                            h.isUnmounted || J()
                        }
                        );
                        return
                    }
                }
                let fe = oe, Be;
                vr(h, !1),
                oe ? (oe.el = ie.el,
                K(h, oe, Q)) : oe = ie,
                re && no(re),
                (Be = oe.props && oe.props.onVnodeBeforeUpdate) && Rt(Be, U, oe, ie),
                vr(h, !0);
                const Ze = wa(h)
                  , dt = h.subTree;
                h.subTree = Ze,
                b(dt, Ze, f(dt.el), B(dt), h, N, q),
                oe.el = Ze.el,
                fe === null && Dc(h, Ze.el),
                P && vt(P, N),
                (Be = oe.props && oe.props.onVnodeUpdated) && vt(()=>Rt(Be, U, oe, ie), N)
            } else {
                let oe;
                const {el: re, props: P} = v
                  , {bm: U, m: ie, parent: fe} = h
                  , Be = Mr(v);
                if (vr(h, !1),
                U && no(U),
                !Be && (oe = P && P.onVnodeBeforeMount) && Rt(oe, fe, v),
                vr(h, !0),
                re && Ee) {
                    const Ze = ()=>{
                        h.subTree = wa(h),
                        Ee(re, h.subTree, h, N, null)
                    }
                    ;
                    Be ? v.type.__asyncLoader().then(()=>!h.isUnmounted && Ze()) : Ze()
                } else {
                    const Ze = h.subTree = wa(h);
                    b(null, Ze, k, R, h, N, q),
                    v.el = Ze.el
                }
                if (ie && vt(ie, N),
                !Be && (oe = P && P.onVnodeMounted)) {
                    const Ze = v;
                    vt(()=>Rt(oe, fe, Ze), N)
                }
                (v.shapeFlag & 256 || fe && Mr(fe.vnode) && fe.vnode.shapeFlag & 256) && h.a && vt(h.a, N),
                h.isMounted = !0,
                v = k = R = null
            }
        }
          , $ = h.effect = new Tc(J,qt,()=>Nc(W),h.scope)
          , W = h.update = ()=>{
            $.dirty && $.run()
        }
        ;
        W.id = h.uid,
        vr(h, !0),
        W()
    }
      , K = (h,v,k)=>{
        v.component = h;
        const R = h.vnode.props;
        h.vnode = v,
        h.next = null,
        Hv(h, v.props, R, k),
        qv(h, v.children, k),
        jr(),
        Yu(h),
        Kr()
    }
      , F = (h,v,k,R,N,q,Q,J,$=!1)=>{
        const W = h && h.children
          , oe = h ? h.shapeFlag : 0
          , re = v.children
          , {patchFlag: P, shapeFlag: U} = v;
        if (P > 0) {
            if (P & 128) {
                H(W, re, k, R, N, q, Q, J, $);
                return
            } else if (P & 256) {
                se(W, re, k, R, N, q, Q, J, $);
                return
            }
        }
        U & 8 ? (oe & 16 && Je(W, N, q),
        re !== W && u(k, re)) : oe & 16 ? U & 16 ? H(W, re, k, R, N, q, Q, J, $) : Je(W, N, q, !0) : (oe & 8 && u(k, ""),
        U & 16 && L(re, k, R, N, q, Q, J, $))
    }
      , se = (h,v,k,R,N,q,Q,J,$)=>{
        h = h || $r,
        v = v || $r;
        const W = h.length
          , oe = v.length
          , re = Math.min(W, oe);
        let P;
        for (P = 0; P < re; P++) {
            const U = v[P] = $ ? er(v[P]) : Ht(v[P]);
            b(h[P], U, k, null, N, q, Q, J, $)
        }
        W > oe ? Je(h, N, q, !0, !1, re) : L(v, k, R, N, q, Q, J, $, re)
    }
      , H = (h,v,k,R,N,q,Q,J,$)=>{
        let W = 0;
        const oe = v.length;
        let re = h.length - 1
          , P = oe - 1;
        for (; W <= re && W <= P; ) {
            const U = h[W]
              , ie = v[W] = $ ? er(v[W]) : Ht(v[W]);
            if (en(U, ie))
                b(U, ie, k, null, N, q, Q, J, $);
            else
                break;
            W++
        }
        for (; W <= re && W <= P; ) {
            const U = h[re]
              , ie = v[P] = $ ? er(v[P]) : Ht(v[P]);
            if (en(U, ie))
                b(U, ie, k, null, N, q, Q, J, $);
            else
                break;
            re--,
            P--
        }
        if (W > re) {
            if (W <= P) {
                const U = P + 1
                  , ie = U < oe ? v[U].el : R;
                for (; W <= P; )
                    b(null, v[W] = $ ? er(v[W]) : Ht(v[W]), k, ie, N, q, Q, J, $),
                    W++
            }
        } else if (W > P)
            for (; W <= re; )
                ge(h[W], N, q, !0),
                W++;
        else {
            const U = W
              , ie = W
              , fe = new Map;
            for (W = ie; W <= P; W++) {
                const Nt = v[W] = $ ? er(v[W]) : Ht(v[W]);
                Nt.key != null && fe.set(Nt.key, W)
            }
            let Be, Ze = 0;
            const dt = P - ie + 1;
            let Hn = !1
              , ba = 0;
            const Ao = new Array(dt);
            for (W = 0; W < dt; W++)
                Ao[W] = 0;
            for (W = U; W <= re; W++) {
                const Nt = h[W];
                if (Ze >= dt) {
                    ge(Nt, N, q, !0);
                    continue
                }
                let fn;
                if (Nt.key != null)
                    fn = fe.get(Nt.key);
                else
                    for (Be = ie; Be <= P; Be++)
                        if (Ao[Be - ie] === 0 && en(Nt, v[Be])) {
                            fn = Be;
                            break
                        }
                fn === void 0 ? ge(Nt, N, q, !0) : (Ao[fn - ie] = W + 1,
                fn >= ba ? ba = fn : Hn = !0,
                b(Nt, v[fn], k, null, N, q, Q, J, $),
                Ze++)
            }
            const Du = Hn ? Qv(Ao) : $r;
            for (Be = Du.length - 1,
            W = dt - 1; W >= 0; W--) {
                const Nt = ie + W
                  , fn = v[Nt]
                  , xu = Nt + 1 < oe ? v[Nt + 1].el : R;
                Ao[W] === 0 ? b(null, fn, k, xu, N, q, Q, J, $) : Hn && (Be < 0 || W !== Du[Be] ? ae(fn, k, xu, 2) : Be--)
            }
        }
    }
      , ae = (h,v,k,R,N=null)=>{
        const {el: q, type: Q, transition: J, children: $, shapeFlag: W} = h;
        if (W & 6) {
            ae(h.component.subTree, v, k, R);
            return
        }
        if (W & 128) {
            h.suspense.move(v, k, R);
            return
        }
        if (W & 64) {
            Q.move(h, v, k, Z);
            return
        }
        if (Q === ct) {
            r(q, v, k);
            for (let re = 0; re < $.length; re++)
                ae($[re], v, k, R);
            r(h.anchor, v, k);
            return
        }
        if (Q === rs) {
            p(h, v, k);
            return
        }
        if (R !== 2 && W & 1 && J)
            if (R === 0)
                J.beforeEnter(q),
                r(q, v, k),
                vt(()=>J.enter(q), N);
            else {
                const {leave: re, delayLeave: P, afterLeave: U} = J
                  , ie = ()=>r(q, v, k)
                  , fe = ()=>{
                    re(q, ()=>{
                        ie(),
                        U && U()
                    }
                    )
                }
                ;
                P ? P(q, ie, fe) : fe()
            }
        else
            r(q, v, k)
    }
      , ge = (h,v,k,R=!1,N=!1)=>{
        const {type: q, props: Q, ref: J, children: $, dynamicChildren: W, shapeFlag: oe, patchFlag: re, dirs: P} = h;
        if (J != null && bs(J, null, k, h, !0),
        oe & 256) {
            v.ctx.deactivate(h);
            return
        }
        const U = oe & 1 && P
          , ie = !Mr(h);
        let fe;
        if (ie && (fe = Q && Q.onVnodeBeforeUnmount) && Rt(fe, v, h),
        oe & 6)
            nt(h.component, k, R);
        else {
            if (oe & 128) {
                h.suspense.unmount(k, R);
                return
            }
            U && gn(h, null, v, "beforeUnmount"),
            oe & 64 ? h.type.remove(h, v, k, N, Z, R) : W && (q !== ct || re > 0 && re & 64) ? Je(W, v, k, !1, !0) : (q === ct && re & 384 || !N && oe & 16) && Je($, v, k),
            R && Ve(h)
        }
        (ie && (fe = Q && Q.onVnodeUnmounted) || U) && vt(()=>{
            fe && Rt(fe, v, h),
            U && gn(h, null, v, "unmounted")
        }
        , k)
    }
      , Ve = h=>{
        const {type: v, el: k, anchor: R, transition: N} = h;
        if (v === ct) {
            je(k, R);
            return
        }
        if (v === rs) {
            y(h);
            return
        }
        const q = ()=>{
            o(k),
            N && !N.persisted && N.afterLeave && N.afterLeave()
        }
        ;
        if (h.shapeFlag & 1 && N && !N.persisted) {
            const {leave: Q, delayLeave: J} = N
              , $ = ()=>Q(k, q);
            J ? J(h.el, q, $) : $()
        } else
            q()
    }
      , je = (h,v)=>{
        let k;
        for (; h !== v; )
            k = d(h),
            o(h),
            h = k;
        o(v)
    }
      , nt = (h,v,k)=>{
        const {bum: R, scope: N, update: q, subTree: Q, um: J} = h;
        R && no(R),
        N.stop(),
        q && (q.active = !1,
        ge(Q, h, v, k)),
        J && vt(J, v),
        vt(()=>{
            h.isUnmounted = !0
        }
        , v),
        v && v.pendingBranch && !v.isUnmounted && h.asyncDep && !h.asyncResolved && h.suspenseId === v.pendingId && (v.deps--,
        v.deps === 0 && v.resolve())
    }
      , Je = (h,v,k,R=!1,N=!1,q=0)=>{
        for (let Q = q; Q < h.length; Q++)
            ge(h[Q], v, k, R, N)
    }
      , B = h=>h.shapeFlag & 6 ? B(h.component.subTree) : h.shapeFlag & 128 ? h.suspense.next() : d(h.anchor || h.el);
    let ee = !1;
    const G = (h,v,k)=>{
        h == null ? v._vnode && ge(v._vnode, null, null, !0) : b(v._vnode || null, h, v, null, null, null, k),
        ee || (ee = !0,
        Yu(),
        gs(),
        ee = !1),
        v._vnode = h
    }
      , Z = {
        p: b,
        um: ge,
        m: ae,
        r: Ve,
        mt: Y,
        mc: L,
        pc: F,
        pbc: I,
        n: B,
        o: e
    };
    let me, Ee;
    return t && ([me,Ee] = t(Z)),
    {
        render: G,
        hydrate: me,
        createApp: Vv(G, me)
    }
}
function Ca({type: e, props: t}, n) {
    return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n
}
function vr({effect: e, update: t}, n) {
    e.allowRecurse = t.allowRecurse = n
}
function Dp(e, t) {
    return (!e || e && !e.pendingBranch) && t && !t.persisted
}
function Yc(e, t, n=!1) {
    const r = e.children
      , o = t.children;
    if (ce(r) && ce(o))
        for (let i = 0; i < r.length; i++) {
            const s = r[i];
            let a = o[i];
            a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = o[i] = er(o[i]),
            a.el = s.el),
            n || Yc(s, a)),
            a.type === Ur && (a.el = s.el)
        }
}
function Qv(e) {
    const t = e.slice()
      , n = [0];
    let r, o, i, s, a;
    const l = e.length;
    for (r = 0; r < l; r++) {
        const c = e[r];
        if (c !== 0) {
            if (o = n[n.length - 1],
            e[o] < c) {
                t[r] = o,
                n.push(r);
                continue
            }
            for (i = 0,
            s = n.length - 1; i < s; )
                a = i + s >> 1,
                e[n[a]] < c ? i = a + 1 : s = a;
            c < e[n[i]] && (i > 0 && (t[r] = n[i - 1]),
            n[i] = r)
        }
    }
    for (i = n.length,
    s = n[i - 1]; i-- > 0; )
        n[i] = s,
        s = t[s];
    return n
}
function xp(e) {
    const t = e.subTree.component;
    if (t)
        return t.asyncDep && !t.asyncResolved ? t : xp(t)
}
const Xv = e=>e.__isTeleport
  , xo = e=>e && (e.disabled || e.disabled === "")
  , rf = e=>typeof SVGElement < "u" && e instanceof SVGElement
  , of = e=>typeof MathMLElement == "function" && e instanceof MathMLElement
  , yl = (e,t)=>{
    const n = e && e.to;
    return Xe(n) ? t ? t(n) : null : n
}
  , Zv = {
    name: "Teleport",
    __isTeleport: !0,
    process(e, t, n, r, o, i, s, a, l, c) {
        const {mc: u, pc: f, pbc: d, o: {insert: m, querySelector: _, createText: b, createComment: w}} = c
          , g = xo(t.props);
        let {shapeFlag: E, children: p, dynamicChildren: y} = t;
        if (e == null) {
            const S = t.el = b("")
              , T = t.anchor = b("");
            m(S, n, r),
            m(T, n, r);
            const A = t.target = yl(t.props, _)
              , L = t.targetAnchor = b("");
            A && (m(L, A),
            s === "svg" || rf(A) ? s = "svg" : (s === "mathml" || of(A)) && (s = "mathml"));
            const O = (I,V)=>{
                E & 16 && u(p, I, V, o, i, s, a, l)
            }
            ;
            g ? O(n, T) : A && O(A, L)
        } else {
            t.el = e.el;
            const S = t.anchor = e.anchor
              , T = t.target = e.target
              , A = t.targetAnchor = e.targetAnchor
              , L = xo(e.props)
              , O = L ? n : T
              , I = L ? S : A;
            if (s === "svg" || rf(T) ? s = "svg" : (s === "mathml" || of(T)) && (s = "mathml"),
            y ? (d(e.dynamicChildren, y, O, o, i, s, a),
            Yc(e, t, !0)) : l || f(e, t, O, I, o, i, s, a, !1),
            g)
                L ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : Ji(t, n, S, c, 1);
            else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
                const V = t.target = yl(t.props, _);
                V && Ji(t, V, null, c, 0)
            } else
                L && Ji(t, T, A, c, 1)
        }
        Fp(t)
    },
    remove(e, t, n, r, {um: o, o: {remove: i}}, s) {
        const {shapeFlag: a, children: l, anchor: c, targetAnchor: u, target: f, props: d} = e;
        if (f && i(u),
        s && i(c),
        a & 16) {
            const m = s || !xo(d);
            for (let _ = 0; _ < l.length; _++) {
                const b = l[_];
                o(b, t, n, m, !!b.dynamicChildren)
            }
        }
    },
    move: Ji,
    hydrate: $v
};
function Ji(e, t, n, {o: {insert: r}, m: o}, i=2) {
    i === 0 && r(e.targetAnchor, t, n);
    const {el: s, anchor: a, shapeFlag: l, children: c, props: u} = e
      , f = i === 2;
    if (f && r(s, t, n),
    (!f || xo(u)) && l & 16)
        for (let d = 0; d < c.length; d++)
            o(c[d], t, n, 2);
    f && r(a, t, n)
}
function $v(e, t, n, r, o, i, {o: {nextSibling: s, parentNode: a, querySelector: l}}, c) {
    const u = t.target = yl(t.props, l);
    if (u) {
        const f = u._lpa || u.firstChild;
        if (t.shapeFlag & 16)
            if (xo(t.props))
                t.anchor = c(s(e), t, a(e), n, r, o, i),
                t.targetAnchor = f;
            else {
                t.anchor = s(e);
                let d = f;
                for (; d; )
                    if (d = s(d),
                    d && d.nodeType === 8 && d.data === "teleport anchor") {
                        t.targetAnchor = d,
                        u._lpa = t.targetAnchor && s(t.targetAnchor);
                        break
                    }
                c(f, t, u, n, r, o, i)
            }
        Fp(t)
    }
    return t.anchor && s(t.anchor)
}
const e_ = Zv;
function Fp(e) {
    const t = e.ctx;
    if (t && t.ut) {
        let n = e.children[0].el;
        for (; n && n !== e.targetAnchor; )
            n.nodeType === 1 && n.setAttribute("data-v-owner", t.uid),
            n = n.nextSibling;
        t.ut()
    }
}
const ct = Symbol.for("v-fgt")
  , Ur = Symbol.for("v-txt")
  , Lt = Symbol.for("v-cmt")
  , rs = Symbol.for("v-stc")
  , Fo = [];
let Yt = null;
function he(e=!1) {
    Fo.push(Yt = e ? null : [])
}
function Up() {
    Fo.pop(),
    Yt = Fo[Fo.length - 1] || null
}
let co = 1;
function sf(e) {
    co += e
}
function Vp(e) {
    return e.dynamicChildren = co > 0 ? Yt || $r : null,
    Up(),
    co > 0 && Yt && Yt.push(e),
    e
}
function Ye(e, t, n, r, o, i) {
    return Vp(de(e, t, n, r, o, i, !0))
}
function ht(e, t, n, r, o) {
    return Vp(We(e, t, n, r, o, !0))
}
function uo(e) {
    return e ? e.__v_isVNode === !0 : !1
}
function en(e, t) {
    return e.type === t.type && e.key === t.key
}
const Xs = "__vInternal"
  , Bp = ({key: e})=>e ?? null
  , os = ({ref: e, ref_key: t, ref_for: n})=>(typeof e == "number" && (e = "" + e),
e != null ? Xe(e) || et(e) || pe(e) ? {
    i: lt,
    r: e,
    k: t,
    f: !!n
} : e : null);
function de(e, t=null, n=null, r=0, o=null, i=e === ct ? 0 : 1, s=!1, a=!1) {
    const l = {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e,
        props: t,
        key: t && Bp(t),
        ref: t && os(t),
        scopeId: Ws,
        slotScopeIds: null,
        children: n,
        component: null,
        suspense: null,
        ssContent: null,
        ssFallback: null,
        dirs: null,
        transition: null,
        el: null,
        anchor: null,
        target: null,
        targetAnchor: null,
        staticCount: 0,
        shapeFlag: i,
        patchFlag: r,
        dynamicProps: o,
        dynamicChildren: null,
        appContext: null,
        ctx: lt
    };
    return a ? (Wc(l, n),
    i & 128 && e.normalize(l)) : n && (l.shapeFlag |= Xe(n) ? 8 : 16),
    co > 0 && !s && Yt && (l.patchFlag > 0 || i & 6) && l.patchFlag !== 32 && Yt.push(l),
    l
}
const We = t_;
function t_(e, t=null, n=null, r=0, o=null, i=!1) {
    if ((!e || e === mp) && (e = Lt),
    uo(e)) {
        const a = Un(e, t, !0);
        return n && Wc(a, n),
        co > 0 && !i && Yt && (a.shapeFlag & 6 ? Yt[Yt.indexOf(e)] = a : Yt.push(a)),
        a.patchFlag |= -2,
        a
    }
    if (l_(e) && (e = e.__vccOpts),
    t) {
        t = Ut(t);
        let {class: a, style: l} = t;
        a && !Xe(a) && (t.class = kt(a)),
        ze(l) && (op(l) && !ce(l) && (l = ft({}, l)),
        t.style = En(l))
    }
    const s = Xe(e) ? 1 : gp(e) ? 128 : Xv(e) ? 64 : ze(e) ? 4 : pe(e) ? 2 : 0;
    return de(e, t, n, r, o, s, i, !0)
}
function Ut(e) {
    return e ? op(e) || Xs in e ? ft({}, e) : e : null
}
function Un(e, t, n=!1) {
    const {props: r, ref: o, patchFlag: i, children: s} = e
      , a = t ? fo(r || {}, t) : r;
    return {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e.type,
        props: a,
        key: a && Bp(a),
        ref: t && t.ref ? n && o ? ce(o) ? o.concat(os(t)) : [o, os(t)] : os(t) : o,
        scopeId: e.scopeId,
        slotScopeIds: e.slotScopeIds,
        children: s,
        target: e.target,
        targetAnchor: e.targetAnchor,
        staticCount: e.staticCount,
        shapeFlag: e.shapeFlag,
        patchFlag: t && e.type !== ct ? i === -1 ? 16 : i | 16 : i,
        dynamicProps: e.dynamicProps,
        dynamicChildren: e.dynamicChildren,
        appContext: e.appContext,
        dirs: e.dirs,
        transition: e.transition,
        component: e.component,
        suspense: e.suspense,
        ssContent: e.ssContent && Un(e.ssContent),
        ssFallback: e.ssFallback && Un(e.ssFallback),
        el: e.el,
        anchor: e.anchor,
        ctx: e.ctx,
        ce: e.ce
    }
}
function Hp(e=" ", t=0) {
    return We(Ur, null, e, t)
}
function yn(e="", t=!1) {
    return t ? (he(),
    ht(Lt, null, e)) : We(Lt, null, e)
}
function Ht(e) {
    return e == null || typeof e == "boolean" ? We(Lt) : ce(e) ? We(ct, null, e.slice()) : typeof e == "object" ? er(e) : We(Ur, null, String(e))
}
function er(e) {
    return e.el === null && e.patchFlag !== -1 || e.memo ? e : Un(e)
}
function Wc(e, t) {
    let n = 0;
    const {shapeFlag: r} = e;
    if (t == null)
        t = null;
    else if (ce(t))
        n = 16;
    else if (typeof t == "object")
        if (r & 65) {
            const o = t.default;
            o && (o._c && (o._d = !1),
            Wc(e, o()),
            o._c && (o._d = !0));
            return
        } else {
            n = 32;
            const o = t._;
            !o && !(Xs in t) ? t._ctx = lt : o === 3 && lt && (lt.slots._ === 1 ? t._ = 1 : (t._ = 2,
            e.patchFlag |= 1024))
        }
    else
        pe(t) ? (t = {
            default: t,
            _ctx: lt
        },
        n = 32) : (t = String(t),
        r & 64 ? (n = 16,
        t = [Hp(t)]) : n = 8);
    e.children = t,
    e.shapeFlag |= n
}
function fo(...e) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
        const r = e[n];
        for (const o in r)
            if (o === "class")
                t.class !== r.class && (t.class = kt([t.class, r.class]));
            else if (o === "style")
                t.style = En([t.style, r.style]);
            else if (_i(o)) {
                const i = t[o]
                  , s = r[o];
                s && i !== s && !(ce(i) && i.includes(s)) && (t[o] = i ? [].concat(i, s) : s)
            } else
                o !== "" && (t[o] = r[o])
    }
    return t
}
function Rt(e, t, n, r=null) {
    Jt(e, t, 7, [n, r])
}
const n_ = Cp();
let r_ = 0;
function o_(e, t, n) {
    const r = e.type
      , o = (t ? t.appContext : e.appContext) || n_
      , i = {
        uid: r_++,
        vnode: e,
        type: r,
        parent: t,
        appContext: o,
        root: null,
        next: null,
        subTree: null,
        effect: null,
        update: null,
        scope: new Wh(!0),
        render: null,
        proxy: null,
        exposed: null,
        exposeProxy: null,
        withProxy: null,
        provides: t ? t.provides : Object.create(o.provides),
        accessCache: null,
        renderCache: [],
        components: null,
        directives: null,
        propsOptions: Rp(r, o),
        emitsOptions: pp(r, o),
        emit: null,
        emitted: null,
        propsDefaults: Ge,
        inheritAttrs: r.inheritAttrs,
        ctx: Ge,
        data: Ge,
        props: Ge,
        attrs: Ge,
        slots: Ge,
        refs: Ge,
        setupState: Ge,
        setupContext: null,
        attrsProxy: null,
        slotsProxy: null,
        suspense: n,
        suspenseId: n ? n.pendingId : 0,
        asyncDep: null,
        asyncResolved: !1,
        isMounted: !1,
        isUnmounted: !1,
        isDeactivated: !1,
        bc: null,
        c: null,
        bm: null,
        m: null,
        bu: null,
        u: null,
        um: null,
        bum: null,
        da: null,
        a: null,
        rtg: null,
        rtc: null,
        ec: null,
        sp: null
    };
    return i.ctx = {
        _: i
    },
    i.root = t ? t.root : i,
    i.emit = Z0.bind(null, i),
    e.ce && e.ce(i),
    i
}
let pt = null;
const cn = ()=>pt || lt;
let Es, vl;
{
    const e = Kh()
      , t = (n,r)=>{
        let o;
        return (o = e[n]) || (o = e[n] = []),
        o.push(r),
        i=>{
            o.length > 1 ? o.forEach(s=>s(i)) : o[0](i)
        }
    }
    ;
    Es = t("__VUE_INSTANCE_SETTERS__", n=>pt = n),
    vl = t("__VUE_SSR_SETTERS__", n=>Zs = n)
}
const Vr = e=>{
    const t = pt;
    return Es(e),
    e.scope.on(),
    ()=>{
        e.scope.off(),
        Es(t)
    }
}
  , _l = ()=>{
    pt && pt.scope.off(),
    Es(null)
}
;
function jp(e) {
    return e.vnode.shapeFlag & 4
}
let Zs = !1;
function i_(e, t=!1) {
    t && vl(t);
    const {props: n, children: r} = e.vnode
      , o = jp(e);
    Bv(e, n, o, t),
    Kv(e, r);
    const i = o ? s_(e, t) : void 0;
    return t && vl(!1),
    i
}
function s_(e, t) {
    const n = e.type;
    e.accessCache = Object.create(null),
    e.proxy = at(new Proxy(e.ctx,Ov));
    const {setup: r} = n;
    if (r) {
        const o = e.setupContext = r.length > 1 ? qp(e) : null
          , i = Vr(e);
        jr();
        const s = lr(r, e, 0, [e.props, o]);
        if (Kr(),
        i(),
        Sc(s)) {
            if (s.then(_l, _l),
            t)
                return s.then(a=>{
                    bl(e, a, t)
                }
                ).catch(a=>{
                    wi(a, e, 0)
                }
                );
            e.asyncDep = s
        } else
            bl(e, s, t)
    } else
        Kp(e, t)
}
function bl(e, t, n) {
    pe(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : ze(t) && (e.setupState = lp(t)),
    Kp(e, n)
}
let af;
function Kp(e, t, n) {
    const r = e.type;
    if (!e.render) {
        if (!t && af && !r.render) {
            const o = r.template || jc(e).template;
            if (o) {
                const {isCustomElement: i, compilerOptions: s} = e.appContext.config
                  , {delimiters: a, compilerOptions: l} = r
                  , c = ft(ft({
                    isCustomElement: i,
                    delimiters: a
                }, s), l);
                r.render = af(o, c)
            }
        }
        e.render = r.render || qt
    }
    {
        const o = Vr(e);
        jr();
        try {
            Mv(e)
        } finally {
            Kr(),
            o()
        }
    }
}
function a_(e) {
    return e.attrsProxy || (e.attrsProxy = new Proxy(e.attrs,{
        get(t, n) {
            return It(e, "get", "$attrs"),
            t[n]
        }
    }))
}
function qp(e) {
    const t = n=>{
        e.exposed = n || {}
    }
    ;
    return {
        get attrs() {
            return a_(e)
        },
        slots: e.slots,
        emit: e.emit,
        expose: t
    }
}
function $s(e) {
    if (e.exposed)
        return e.exposeProxy || (e.exposeProxy = new Proxy(lp(at(e.exposed)),{
            get(t, n) {
                if (n in t)
                    return t[n];
                if (n in Do)
                    return Do[n](e)
            },
            has(t, n) {
                return n in t || n in Do
            }
        }))
}
function El(e, t=!0) {
    return pe(e) ? e.displayName || e.name : e.name || t && e.__name
}
function l_(e) {
    return pe(e) && "__vccOpts"in e
}
const le = (e,t)=>j0(e, t, Zs);
function ot(e, t, n) {
    const r = arguments.length;
    return r === 2 ? ze(t) && !ce(t) ? uo(t) ? We(e, null, [t]) : We(e, t) : We(e, null, t) : (r > 3 ? n = Array.prototype.slice.call(arguments, 2) : r === 3 && uo(n) && (n = [n]),
    We(e, t, n))
}
const Yp = "3.4.20";
/**
* @vue/runtime-dom v3.4.20
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const c_ = "http://www.w3.org/2000/svg"
  , u_ = "http://www.w3.org/1998/Math/MathML"
  , tr = typeof document < "u" ? document : null
  , lf = tr && tr.createElement("template")
  , f_ = {
    insert: (e,t,n)=>{
        t.insertBefore(e, n || null)
    }
    ,
    remove: e=>{
        const t = e.parentNode;
        t && t.removeChild(e)
    }
    ,
    createElement: (e,t,n,r)=>{
        const o = t === "svg" ? tr.createElementNS(c_, e) : t === "mathml" ? tr.createElementNS(u_, e) : tr.createElement(e, n ? {
            is: n
        } : void 0);
        return e === "select" && r && r.multiple != null && o.setAttribute("multiple", r.multiple),
        o
    }
    ,
    createText: e=>tr.createTextNode(e),
    createComment: e=>tr.createComment(e),
    setText: (e,t)=>{
        e.nodeValue = t
    }
    ,
    setElementText: (e,t)=>{
        e.textContent = t
    }
    ,
    parentNode: e=>e.parentNode,
    nextSibling: e=>e.nextSibling,
    querySelector: e=>tr.querySelector(e),
    setScopeId(e, t) {
        e.setAttribute(t, "")
    },
    insertStaticContent(e, t, n, r, o, i) {
        const s = n ? n.previousSibling : t.lastChild;
        if (o && (o === i || o.nextSibling))
            for (; t.insertBefore(o.cloneNode(!0), n),
            !(o === i || !(o = o.nextSibling)); )
                ;
        else {
            lf.innerHTML = r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e;
            const a = lf.content;
            if (r === "svg" || r === "mathml") {
                const l = a.firstChild;
                for (; l.firstChild; )
                    a.appendChild(l.firstChild);
                a.removeChild(l)
            }
            t.insertBefore(a, n)
        }
        return [s ? s.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild]
    }
}
  , qn = "transition"
  , Lo = "animation"
  , oi = Symbol("_vtc")
  , Ti = (e,{slots: t})=>ot(_v, d_(e), t);
Ti.displayName = "Transition";
const Wp = {
    name: String,
    type: String,
    css: {
        type: Boolean,
        default: !0
    },
    duration: [String, Number, Object],
    enterFromClass: String,
    enterActiveClass: String,
    enterToClass: String,
    appearFromClass: String,
    appearActiveClass: String,
    appearToClass: String,
    leaveFromClass: String,
    leaveActiveClass: String,
    leaveToClass: String
};
Ti.props = ft({}, _p, Wp);
const _r = (e,t=[])=>{
    ce(e) ? e.forEach(n=>n(...t)) : e && e(...t)
}
  , cf = e=>e ? ce(e) ? e.some(t=>t.length > 1) : e.length > 1 : !1;
function d_(e) {
    const t = {};
    for (const x in e)
        x in Wp || (t[x] = e[x]);
    if (e.css === !1)
        return t;
    const {name: n="v", type: r, duration: o, enterFromClass: i=`${n}-enter-from`, enterActiveClass: s=`${n}-enter-active`, enterToClass: a=`${n}-enter-to`, appearFromClass: l=i, appearActiveClass: c=s, appearToClass: u=a, leaveFromClass: f=`${n}-leave-from`, leaveActiveClass: d=`${n}-leave-active`, leaveToClass: m=`${n}-leave-to`} = e
      , _ = h_(o)
      , b = _ && _[0]
      , w = _ && _[1]
      , {onBeforeEnter: g, onEnter: E, onEnterCancelled: p, onLeave: y, onLeaveCancelled: S, onBeforeAppear: T=g, onAppear: A=E, onAppearCancelled: L=p} = t
      , O = (x,X,Y)=>{
        br(x, X ? u : a),
        br(x, X ? c : s),
        Y && Y()
    }
      , I = (x,X)=>{
        x._isLeaving = !1,
        br(x, f),
        br(x, m),
        br(x, d),
        X && X()
    }
      , V = x=>(X,Y)=>{
        const j = x ? A : E
          , M = ()=>O(X, x, Y);
        _r(j, [X, M]),
        uf(()=>{
            br(X, x ? l : i),
            Yn(X, x ? u : a),
            cf(j) || ff(X, r, b, M)
        }
        )
    }
    ;
    return ft(t, {
        onBeforeEnter(x) {
            _r(g, [x]),
            Yn(x, i),
            Yn(x, s)
        },
        onBeforeAppear(x) {
            _r(T, [x]),
            Yn(x, l),
            Yn(x, c)
        },
        onEnter: V(!1),
        onAppear: V(!0),
        onLeave(x, X) {
            x._isLeaving = !0;
            const Y = ()=>I(x, X);
            Yn(x, f),
            g_(),
            Yn(x, d),
            uf(()=>{
                x._isLeaving && (br(x, f),
                Yn(x, m),
                cf(y) || ff(x, r, w, Y))
            }
            ),
            _r(y, [x, Y])
        },
        onEnterCancelled(x) {
            O(x, !1),
            _r(p, [x])
        },
        onAppearCancelled(x) {
            O(x, !0),
            _r(L, [x])
        },
        onLeaveCancelled(x) {
            I(x),
            _r(S, [x])
        }
    })
}
function h_(e) {
    if (e == null)
        return null;
    if (ze(e))
        return [Oa(e.enter), Oa(e.leave)];
    {
        const t = Oa(e);
        return [t, t]
    }
}
function Oa(e) {
    return jh(e)
}
function Yn(e, t) {
    t.split(/\s+/).forEach(n=>n && e.classList.add(n)),
    (e[oi] || (e[oi] = new Set)).add(t)
}
function br(e, t) {
    t.split(/\s+/).forEach(r=>r && e.classList.remove(r));
    const n = e[oi];
    n && (n.delete(t),
    n.size || (e[oi] = void 0))
}
function uf(e) {
    requestAnimationFrame(()=>{
        requestAnimationFrame(e)
    }
    )
}
let p_ = 0;
function ff(e, t, n, r) {
    const o = e._endId = ++p_
      , i = ()=>{
        o === e._endId && r()
    }
    ;
    if (n)
        return setTimeout(i, n);
    const {type: s, timeout: a, propCount: l} = m_(e, t);
    if (!s)
        return r();
    const c = s + "end";
    let u = 0;
    const f = ()=>{
        e.removeEventListener(c, d),
        i()
    }
      , d = m=>{
        m.target === e && ++u >= l && f()
    }
    ;
    setTimeout(()=>{
        u < l && f()
    }
    , a + 1),
    e.addEventListener(c, d)
}
function m_(e, t) {
    const n = window.getComputedStyle(e)
      , r = _=>(n[_] || "").split(", ")
      , o = r(`${qn}Delay`)
      , i = r(`${qn}Duration`)
      , s = df(o, i)
      , a = r(`${Lo}Delay`)
      , l = r(`${Lo}Duration`)
      , c = df(a, l);
    let u = null
      , f = 0
      , d = 0;
    t === qn ? s > 0 && (u = qn,
    f = s,
    d = i.length) : t === Lo ? c > 0 && (u = Lo,
    f = c,
    d = l.length) : (f = Math.max(s, c),
    u = f > 0 ? s > c ? qn : Lo : null,
    d = u ? u === qn ? i.length : l.length : 0);
    const m = u === qn && /\b(transform|all)(,|$)/.test(r(`${qn}Property`).toString());
    return {
        type: u,
        timeout: f,
        propCount: d,
        hasTransform: m
    }
}
function df(e, t) {
    for (; e.length < t.length; )
        e = e.concat(e);
    return Math.max(...t.map((n,r)=>hf(n) + hf(e[r])))
}
function hf(e) {
    return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3
}
function g_() {
    return document.body.offsetHeight
}
function y_(e, t, n) {
    const r = e[oi];
    r && (t = (t ? [t, ...r] : [...r]).join(" ")),
    t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t
}
const Ss = Symbol("_vod")
  , Jp = Symbol("_vsh")
  , QI = {
    beforeMount(e, {value: t}, {transition: n}) {
        e[Ss] = e.style.display === "none" ? "" : e.style.display,
        n && t ? n.beforeEnter(e) : Co(e, t)
    },
    mounted(e, {value: t}, {transition: n}) {
        n && t && n.enter(e)
    },
    updated(e, {value: t, oldValue: n}, {transition: r}) {
        !t != !n && (r ? t ? (r.beforeEnter(e),
        Co(e, !0),
        r.enter(e)) : r.leave(e, ()=>{
            Co(e, !1)
        }
        ) : Co(e, t))
    },
    beforeUnmount(e, {value: t}) {
        Co(e, t)
    }
};
function Co(e, t) {
    e.style.display = t ? e[Ss] : "none",
    e[Jp] = !t
}
const v_ = Symbol("")
  , __ = /(^|;)\s*display\s*:/;
function b_(e, t, n) {
    const r = e.style
      , o = Xe(n);
    let i = !1;
    if (n && !o) {
        if (t)
            if (Xe(t))
                for (const s of t.split(";")) {
                    const a = s.slice(0, s.indexOf(":")).trim();
                    n[a] == null && is(r, a, "")
                }
            else
                for (const s in t)
                    n[s] == null && is(r, s, "");
        for (const s in n)
            s === "display" && (i = !0),
            is(r, s, n[s])
    } else if (o) {
        if (t !== n) {
            const s = r[v_];
            s && (n += ";" + s),
            r.cssText = n,
            i = __.test(n)
        }
    } else
        t && e.removeAttribute("style");
    Ss in e && (e[Ss] = i ? r.display : "",
    e[Jp] && (r.display = "none"))
}
const pf = /\s*!important$/;
function is(e, t, n) {
    if (ce(n))
        n.forEach(r=>is(e, t, r));
    else if (n == null && (n = ""),
    t.startsWith("--"))
        e.setProperty(t, n);
    else {
        const r = E_(e, t);
        pf.test(n) ? e.setProperty(Hr(r), n.replace(pf, ""), "important") : e[r] = n
    }
}
const mf = ["Webkit", "Moz", "ms"]
  , Ra = {};
function E_(e, t) {
    const n = Ra[t];
    if (n)
        return n;
    let r = Tn(t);
    if (r !== "filter" && r in e)
        return Ra[t] = r;
    r = js(r);
    for (let o = 0; o < mf.length; o++) {
        const i = mf[o] + r;
        if (i in e)
            return Ra[t] = i
    }
    return t
}
const gf = "http://www.w3.org/1999/xlink";
function S_(e, t, n, r, o) {
    if (r && t.startsWith("xlink:"))
        n == null ? e.removeAttributeNS(gf, t.slice(6, t.length)) : e.setAttributeNS(gf, t, n);
    else {
        const i = b0(t);
        n == null || i && !qh(n) ? e.removeAttribute(t) : e.setAttribute(t, i ? "" : n)
    }
}
function w_(e, t, n, r, o, i, s) {
    if (t === "innerHTML" || t === "textContent") {
        r && s(r, o, i),
        e[t] = n ?? "";
        return
    }
    const a = e.tagName;
    if (t === "value" && a !== "PROGRESS" && !a.includes("-")) {
        e._value = n;
        const c = a === "OPTION" ? e.getAttribute("value") || "" : e.value
          , u = n ?? "";
        c !== u && (e.value = u),
        n == null && e.removeAttribute(t);
        return
    }
    let l = !1;
    if (n === "" || n == null) {
        const c = typeof e[t];
        c === "boolean" ? n = qh(n) : n == null && c === "string" ? (n = "",
        l = !0) : c === "number" && (n = 0,
        l = !0)
    }
    try {
        e[t] = n
    } catch {}
    l && e.removeAttribute(t)
}
function zr(e, t, n, r) {
    e.addEventListener(t, n, r)
}
function T_(e, t, n, r) {
    e.removeEventListener(t, n, r)
}
const yf = Symbol("_vei");
function k_(e, t, n, r, o=null) {
    const i = e[yf] || (e[yf] = {})
      , s = i[t];
    if (r && s)
        s.value = r;
    else {
        const [a,l] = A_(t);
        if (r) {
            const c = i[t] = O_(r, o);
            zr(e, a, c, l)
        } else
            s && (T_(e, a, s, l),
            i[t] = void 0)
    }
}
const vf = /(?:Once|Passive|Capture)$/;
function A_(e) {
    let t;
    if (vf.test(e)) {
        t = {};
        let r;
        for (; r = e.match(vf); )
            e = e.slice(0, e.length - r[0].length),
            t[r[0].toLowerCase()] = !0
    }
    return [e[2] === ":" ? e.slice(3) : Hr(e.slice(2)), t]
}
let Pa = 0;
const L_ = Promise.resolve()
  , C_ = ()=>Pa || (L_.then(()=>Pa = 0),
Pa = Date.now());
function O_(e, t) {
    const n = r=>{
        if (!r._vts)
            r._vts = Date.now();
        else if (r._vts <= n.attached)
            return;
        Jt(R_(r, n.value), t, 5, [r])
    }
    ;
    return n.value = e,
    n.attached = C_(),
    n
}
function R_(e, t) {
    if (ce(t)) {
        const n = e.stopImmediatePropagation;
        return e.stopImmediatePropagation = ()=>{
            n.call(e),
            e._stopped = !0
        }
        ,
        t.map(r=>o=>!o._stopped && r && r(o))
    } else
        return t
}
const _f = e=>e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123
  , P_ = (e,t,n,r,o,i,s,a,l)=>{
    const c = o === "svg";
    t === "class" ? y_(e, r, c) : t === "style" ? b_(e, n, r) : _i(t) ? bc(t) || k_(e, t, n, r, s) : (t[0] === "." ? (t = t.slice(1),
    !0) : t[0] === "^" ? (t = t.slice(1),
    !1) : I_(e, t, r, c)) ? w_(e, t, r, i, s, a, l) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r),
    S_(e, t, r, c))
}
;
function I_(e, t, n, r) {
    if (r)
        return !!(t === "innerHTML" || t === "textContent" || t in e && _f(t) && pe(n));
    if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
        return !1;
    if (t === "width" || t === "height") {
        const o = e.tagName;
        if (o === "IMG" || o === "VIDEO" || o === "CANVAS" || o === "SOURCE")
            return !1
    }
    return _f(t) && Xe(n) ? !1 : t in e
}
const bf = e=>{
    const t = e.props["onUpdate:modelValue"] || !1;
    return ce(t) ? n=>no(t, n) : t
}
;
function M_(e) {
    e.target.composing = !0
}
function Ef(e) {
    const t = e.target;
    t.composing && (t.composing = !1,
    t.dispatchEvent(new Event("input")))
}
const Ia = Symbol("_assign")
  , XI = {
    created(e, {modifiers: {lazy: t, trim: n, number: r}}, o) {
        e[Ia] = bf(o);
        const i = r || o.props && o.props.type === "number";
        zr(e, t ? "change" : "input", s=>{
            if (s.target.composing)
                return;
            let a = e.value;
            n && (a = a.trim()),
            i && (a = rl(a)),
            e[Ia](a)
        }
        ),
        n && zr(e, "change", ()=>{
            e.value = e.value.trim()
        }
        ),
        t || (zr(e, "compositionstart", M_),
        zr(e, "compositionend", Ef),
        zr(e, "change", Ef))
    },
    mounted(e, {value: t}) {
        e.value = t ?? ""
    },
    beforeUpdate(e, {value: t, modifiers: {lazy: n, trim: r, number: o}}, i) {
        if (e[Ia] = bf(i),
        e.composing)
            return;
        const s = o || e.type === "number" ? rl(e.value) : e.value
          , a = t ?? "";
        s !== a && (document.activeElement === e && e.type !== "range" && (n || r && e.value.trim() === a) || (e.value = a))
    }
}
  , N_ = ["ctrl", "shift", "alt", "meta"]
  , D_ = {
    stop: e=>e.stopPropagation(),
    prevent: e=>e.preventDefault(),
    self: e=>e.target !== e.currentTarget,
    ctrl: e=>!e.ctrlKey,
    shift: e=>!e.shiftKey,
    alt: e=>!e.altKey,
    meta: e=>!e.metaKey,
    left: e=>"button"in e && e.button !== 0,
    middle: e=>"button"in e && e.button !== 1,
    right: e=>"button"in e && e.button !== 2,
    exact: (e,t)=>N_.some(n=>e[`${n}Key`] && !t.includes(n))
}
  , ZI = (e,t)=>{
    const n = e._withMods || (e._withMods = {})
      , r = t.join(".");
    return n[r] || (n[r] = (o,...i)=>{
        for (let s = 0; s < t.length; s++) {
            const a = D_[t[s]];
            if (a && a(o, t))
                return
        }
        return e(o, ...i)
    }
    )
}
  , x_ = {
    esc: "escape",
    space: " ",
    up: "arrow-up",
    left: "arrow-left",
    right: "arrow-right",
    down: "arrow-down",
    delete: "backspace"
}
  , F_ = (e,t)=>{
    const n = e._withKeys || (e._withKeys = {})
      , r = t.join(".");
    return n[r] || (n[r] = o=>{
        if (!("key"in o))
            return;
        const i = Hr(o.key);
        if (t.some(s=>s === i || x_[s] === i))
            return e(o)
    }
    )
}
  , zp = ft({
    patchProp: P_
}, f_);
let Uo, Sf = !1;
function U_() {
    return Uo || (Uo = zv(zp))
}
function V_() {
    return Uo = Sf ? Uo : Gv(zp),
    Sf = !0,
    Uo
}
const Gp = (...e)=>{
    const t = U_().createApp(...e)
      , {mount: n} = t;
    return t.mount = r=>{
        const o = Xp(r);
        if (!o)
            return;
        const i = t._component;
        !pe(i) && !i.render && !i.template && (i.template = o.innerHTML),
        o.innerHTML = "";
        const s = n(o, !1, Qp(o));
        return o instanceof Element && (o.removeAttribute("v-cloak"),
        o.setAttribute("data-v-app", "")),
        s
    }
    ,
    t
}
  , B_ = (...e)=>{
    const t = V_().createApp(...e)
      , {mount: n} = t;
    return t.mount = r=>{
        const o = Xp(r);
        if (o)
            return n(o, !0, Qp(o))
    }
    ,
    t
}
;
function Qp(e) {
    if (e instanceof SVGElement)
        return "svg";
    if (typeof MathMLElement == "function" && e instanceof MathMLElement)
        return "mathml"
}
function Xp(e) {
    return Xe(e) ? document.querySelector(e) : e
}
const H_ = /#/g
  , j_ = /&/g
  , K_ = /\//g
  , q_ = /=/g
  , Jc = /\+/g
  , Y_ = /%5e/gi
  , W_ = /%60/gi
  , J_ = /%7c/gi
  , z_ = /%20/gi;
function G_(e) {
    return encodeURI("" + e).replace(J_, "|")
}
function Sl(e) {
    return G_(typeof e == "string" ? e : JSON.stringify(e)).replace(Jc, "%2B").replace(z_, "+").replace(H_, "%23").replace(j_, "%26").replace(W_, "`").replace(Y_, "^").replace(K_, "%2F")
}
function Ma(e) {
    return Sl(e).replace(q_, "%3D")
}
function ws(e="") {
    try {
        return decodeURIComponent("" + e)
    } catch {
        return "" + e
    }
}
function Q_(e) {
    return ws(e.replace(Jc, " "))
}
function X_(e) {
    return ws(e.replace(Jc, " "))
}
function zc(e="") {
    const t = {};
    e[0] === "?" && (e = e.slice(1));
    for (const n of e.split("&")) {
        const r = n.match(/([^=]+)=?(.*)/) || [];
        if (r.length < 2)
            continue;
        const o = Q_(r[1]);
        if (o === "__proto__" || o === "constructor")
            continue;
        const i = X_(r[2] || "");
        t[o] === void 0 ? t[o] = i : Array.isArray(t[o]) ? t[o].push(i) : t[o] = [t[o], i]
    }
    return t
}
function Z_(e, t) {
    return (typeof t == "number" || typeof t == "boolean") && (t = String(t)),
    t ? Array.isArray(t) ? t.map(n=>`${Ma(e)}=${Sl(n)}`).join("&") : `${Ma(e)}=${Sl(t)}` : Ma(e)
}
function $_(e) {
    return Object.keys(e).filter(t=>e[t] !== void 0).map(t=>Z_(t, e[t])).filter(Boolean).join("&")
}
const eb = /^[\s\w\0+.-]{2,}:([/\\]{1,2})/
  , tb = /^[\s\w\0+.-]{2,}:([/\\]{2})?/
  , nb = /^([/\\]\s*){2,}[^/\\]/
  , rb = /^[\s\0]*(blob|data|javascript|vbscript):$/i
  , ob = /\/$|\/\?|\/#/
  , ib = /^\.?\//;
function An(e, t={}) {
    return typeof t == "boolean" && (t = {
        acceptRelative: t
    }),
    t.strict ? eb.test(e) : tb.test(e) || (t.acceptRelative ? nb.test(e) : !1)
}
function sb(e) {
    return !!e && rb.test(e)
}
function wl(e="", t) {
    return t ? ob.test(e) : e.endsWith("/")
}
function ki(e="", t) {
    if (!t)
        return (wl(e) ? e.slice(0, -1) : e) || "/";
    if (!wl(e, !0))
        return e || "/";
    let n = e
      , r = "";
    const o = e.indexOf("#");
    o >= 0 && (n = e.slice(0, o),
    r = e.slice(o));
    const [i,...s] = n.split("?");
    return (i.slice(0, -1) || "/") + (s.length > 0 ? `?${s.join("?")}` : "") + r
}
function ii(e="", t) {
    if (!t)
        return e.endsWith("/") ? e : e + "/";
    if (wl(e, !0))
        return e || "/";
    let n = e
      , r = "";
    const o = e.indexOf("#");
    if (o >= 0 && (n = e.slice(0, o),
    r = e.slice(o),
    !n))
        return r;
    const [i,...s] = n.split("?");
    return i + "/" + (s.length > 0 ? `?${s.join("?")}` : "") + r
}
function ab(e="") {
    return e.startsWith("/")
}
function wf(e="") {
    return ab(e) ? e : "/" + e
}
function lb(e, t) {
    if ($p(t) || An(e))
        return e;
    const n = ki(t);
    return e.startsWith(n) ? e : wo(n, e)
}
function Tf(e, t) {
    if ($p(t))
        return e;
    const n = ki(t);
    if (!e.startsWith(n))
        return e;
    const r = e.slice(n.length);
    return r[0] === "/" ? r : "/" + r
}
function Zp(e, t) {
    const n = Ai(e)
      , r = {
        ...zc(n.search),
        ...t
    };
    return n.search = $_(r),
    ub(n)
}
function $p(e) {
    return !e || e === "/"
}
function cb(e) {
    return e && e !== "/"
}
function wo(e, ...t) {
    let n = e || "";
    for (const r of t.filter(o=>cb(o)))
        if (n) {
            const o = r.replace(ib, "");
            n = ii(n) + o
        } else
            n = r;
    return n
}
function Tl(e, t, n={}) {
    return n.trailingSlash || (e = ii(e),
    t = ii(t)),
    n.leadingSlash || (e = wf(e),
    t = wf(t)),
    n.encoding || (e = ws(e),
    t = ws(t)),
    e === t
}
const em = Symbol.for("ufo:protocolRelative");
function Ai(e="", t) {
    const n = e.match(/^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i);
    if (n) {
        const [,f,d=""] = n;
        return {
            protocol: f.toLowerCase(),
            pathname: d,
            href: f + d,
            auth: "",
            host: "",
            search: "",
            hash: ""
        }
    }
    if (!An(e, {
        acceptRelative: !0
    }))
        return t ? Ai(t + e) : kl(e);
    const [,r="",o,i=""] = e.replace(/\\/g, "/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/) || []
      , [,s="",a=""] = i.match(/([^#/?]*)(.*)?/) || []
      , {pathname: l, search: c, hash: u} = kl(a.replace(/\/(?=[A-Za-z]:)/, ""));
    return {
        protocol: r.toLowerCase(),
        auth: o ? o.slice(0, Math.max(0, o.length - 1)) : "",
        host: s,
        pathname: l,
        search: c,
        hash: u,
        [em]: !r
    }
}
function kl(e="") {
    const [t="",n="",r=""] = (e.match(/([^#?]*)(\?[^#]*)?(#.*)?/) || []).splice(1);
    return {
        pathname: t,
        search: n,
        hash: r
    }
}
function ub(e) {
    const t = e.pathname || ""
      , n = e.search ? (e.search.startsWith("?") ? "" : "?") + e.search : ""
      , r = e.hash || ""
      , o = e.auth ? e.auth + "@" : ""
      , i = e.host || "";
    return (e.protocol || e[em] ? (e.protocol || "") + "//" : "") + o + i + t + n + r
}
const fb = ()=>{
    var e;
    return ((e = window == null ? void 0 : window.__NUXT__) == null ? void 0 : e.config) || {}
}
  , Ts = fb().app
  , db = ()=>Ts.baseURL
  , hb = ()=>Ts.buildAssetsDir
  , Gc = (...e)=>wo(tm(), hb(), ...e)
  , tm = (...e)=>{
    const t = Ts.cdnURL || Ts.baseURL;
    return e.length ? wo(t, ...e) : t
}
;
globalThis.__buildAssetsURL = Gc,
globalThis.__publicAssetsURL = tm;
const pb = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/
  , mb = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/
  , gb = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
function yb(e, t) {
    if (e === "__proto__" || e === "constructor" && t && typeof t == "object" && "prototype"in t) {
        vb(e);
        return
    }
    return t
}
function vb(e) {
    console.warn(`[destr] Dropping "${e}" key to prevent prototype pollution.`)
}
function si(e, t={}) {
    if (typeof e != "string")
        return e;
    const n = e.trim();
    if (e[0] === '"' && e.endsWith('"') && !e.includes("\\"))
        return n.slice(1, -1);
    if (n.length <= 9) {
        const r = n.toLowerCase();
        if (r === "true")
            return !0;
        if (r === "false")
            return !1;
        if (r === "undefined")
            return;
        if (r === "null")
            return null;
        if (r === "nan")
            return Number.NaN;
        if (r === "infinity")
            return Number.POSITIVE_INFINITY;
        if (r === "-infinity")
            return Number.NEGATIVE_INFINITY
    }
    if (!gb.test(e)) {
        if (t.strict)
            throw new SyntaxError("[destr] Invalid JSON");
        return e
    }
    try {
        if (pb.test(e) || mb.test(e)) {
            if (t.strict)
                throw new Error("[destr] Possible prototype pollution");
            return JSON.parse(e, yb)
        }
        return JSON.parse(e)
    } catch (r) {
        if (t.strict)
            throw r;
        return e
    }
}
class _b extends Error {
    constructor(t, n) {
        super(t, n),
        this.name = "FetchError",
        n != null && n.cause && !this.cause && (this.cause = n.cause)
    }
}
function bb(e) {
    var l, c, u, f, d;
    const t = ((l = e.error) == null ? void 0 : l.message) || ((c = e.error) == null ? void 0 : c.toString()) || ""
      , n = ((u = e.request) == null ? void 0 : u.method) || ((f = e.options) == null ? void 0 : f.method) || "GET"
      , r = ((d = e.request) == null ? void 0 : d.url) || String(e.request) || "/"
      , o = `[${n}] ${JSON.stringify(r)}`
      , i = e.response ? `${e.response.status} ${e.response.statusText}` : "<no response>"
      , s = `${o}: ${i}${t ? ` ${t}` : ""}`
      , a = new _b(s,e.error ? {
        cause: e.error
    } : void 0);
    for (const m of ["request", "options", "response"])
        Object.defineProperty(a, m, {
            get() {
                return e[m]
            }
        });
    for (const [m,_] of [["data", "_data"], ["status", "status"], ["statusCode", "status"], ["statusText", "statusText"], ["statusMessage", "statusText"]])
        Object.defineProperty(a, m, {
            get() {
                return e.response && e.response[_]
            }
        });
    return a
}
const Eb = new Set(Object.freeze(["PATCH", "POST", "PUT", "DELETE"]));
function kf(e="GET") {
    return Eb.has(e.toUpperCase())
}
function Sb(e) {
    if (e === void 0)
        return !1;
    const t = typeof e;
    return t === "string" || t === "number" || t === "boolean" || t === null ? !0 : t !== "object" ? !1 : Array.isArray(e) ? !0 : e.buffer ? !1 : e.constructor && e.constructor.name === "Object" || typeof e.toJSON == "function"
}
const wb = new Set(["image/svg", "application/xml", "application/xhtml", "application/html"])
  , Tb = /^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;
function kb(e="") {
    if (!e)
        return "json";
    const t = e.split(";").shift() || "";
    return Tb.test(t) ? "json" : wb.has(t) || t.startsWith("text/") ? "text" : "blob"
}
function Ab(e, t, n=globalThis.Headers) {
    const r = {
        ...t,
        ...e
    };
    if (t != null && t.params && (e != null && e.params) && (r.params = {
        ...t == null ? void 0 : t.params,
        ...e == null ? void 0 : e.params
    }),
    t != null && t.query && (e != null && e.query) && (r.query = {
        ...t == null ? void 0 : t.query,
        ...e == null ? void 0 : e.query
    }),
    t != null && t.headers && (e != null && e.headers)) {
        r.headers = new n((t == null ? void 0 : t.headers) || {});
        for (const [o,i] of new n((e == null ? void 0 : e.headers) || {}))
            r.headers.set(o, i)
    }
    return r
}
const Lb = new Set([408, 409, 425, 429, 500, 502, 503, 504])
  , Cb = new Set([101, 204, 205, 304]);
function nm(e={}) {
    const {fetch: t=globalThis.fetch, Headers: n=globalThis.Headers, AbortController: r=globalThis.AbortController} = e;
    async function o(a) {
        const l = a.error && a.error.name === "AbortError" && !a.options.timeout || !1;
        if (a.options.retry !== !1 && !l) {
            let u;
            typeof a.options.retry == "number" ? u = a.options.retry : u = kf(a.options.method) ? 0 : 1;
            const f = a.response && a.response.status || 500;
            if (u > 0 && (Array.isArray(a.options.retryStatusCodes) ? a.options.retryStatusCodes.includes(f) : Lb.has(f))) {
                const d = a.options.retryDelay || 0;
                return d > 0 && await new Promise(m=>setTimeout(m, d)),
                i(a.request, {
                    ...a.options,
                    retry: u - 1,
                    timeout: a.options.timeout
                })
            }
        }
        const c = bb(a);
        throw Error.captureStackTrace && Error.captureStackTrace(c, i),
        c
    }
    const i = async function(l, c={}) {
        var d;
        const u = {
            request: l,
            options: Ab(c, e.defaults, n),
            response: void 0,
            error: void 0
        };
        if (u.options.method = (d = u.options.method) == null ? void 0 : d.toUpperCase(),
        u.options.onRequest && await u.options.onRequest(u),
        typeof u.request == "string" && (u.options.baseURL && (u.request = lb(u.request, u.options.baseURL)),
        (u.options.query || u.options.params) && (u.request = Zp(u.request, {
            ...u.options.params,
            ...u.options.query
        }))),
        u.options.body && kf(u.options.method) && (Sb(u.options.body) ? (u.options.body = typeof u.options.body == "string" ? u.options.body : JSON.stringify(u.options.body),
        u.options.headers = new n(u.options.headers || {}),
        u.options.headers.has("content-type") || u.options.headers.set("content-type", "application/json"),
        u.options.headers.has("accept") || u.options.headers.set("accept", "application/json")) : ("pipeTo"in u.options.body && typeof u.options.body.pipeTo == "function" || typeof u.options.body.pipe == "function") && ("duplex"in u.options || (u.options.duplex = "half"))),
        !u.options.signal && u.options.timeout) {
            const m = new r;
            setTimeout(()=>m.abort(), u.options.timeout),
            u.options.signal = m.signal
        }
        try {
            u.response = await t(u.request, u.options)
        } catch (m) {
            return u.error = m,
            u.options.onRequestError && await u.options.onRequestError(u),
            await o(u)
        }
        if (u.response.body && !Cb.has(u.response.status) && u.options.method !== "HEAD") {
            const m = (u.options.parseResponse ? "json" : u.options.responseType) || kb(u.response.headers.get("content-type") || "");
            switch (m) {
            case "json":
                {
                    const _ = await u.response.text()
                      , b = u.options.parseResponse || si;
                    u.response._data = b(_);
                    break
                }
            case "stream":
                {
                    u.response._data = u.response.body;
                    break
                }
            default:
                u.response._data = await u.response[m]()
            }
        }
        return u.options.onResponse && await u.options.onResponse(u),
        !u.options.ignoreResponseError && u.response.status >= 400 && u.response.status < 600 ? (u.options.onResponseError && await u.options.onResponseError(u),
        await o(u)) : u.response
    }
      , s = async function(l, c) {
        return (await i(l, c))._data
    };
    return s.raw = i,
    s.native = (...a)=>t(...a),
    s.create = (a={})=>nm({
        ...e,
        defaults: {
            ...e.defaults,
            ...a
        }
    }),
    s
}
const Qc = function() {
    if (typeof globalThis < "u")
        return globalThis;
    if (typeof self < "u")
        return self;
    if (typeof window < "u")
        return window;
    if (typeof global < "u")
        return global;
    throw new Error("unable to locate global object")
}()
  , Ob = Qc.fetch || (()=>Promise.reject(new Error("[ofetch] global.fetch is not supported!")))
  , Rb = Qc.Headers
  , Pb = Qc.AbortController
  , Ib = nm({
    fetch: Ob,
    Headers: Rb,
    AbortController: Pb
})
  , Mb = Ib;
globalThis.$fetch || (globalThis.$fetch = Mb.create({
    baseURL: db()
}));
function Al(e, t={}, n) {
    for (const r in e) {
        const o = e[r]
          , i = n ? `${n}:${r}` : r;
        typeof o == "object" && o !== null ? Al(o, t, i) : typeof o == "function" && (t[i] = o)
    }
    return t
}
const Nb = {
    run: e=>e()
}
  , Db = ()=>Nb
  , rm = typeof console.createTask < "u" ? console.createTask : Db;
function xb(e, t) {
    const n = t.shift()
      , r = rm(n);
    return e.reduce((o,i)=>o.then(()=>r.run(()=>i(...t))), Promise.resolve())
}
function Fb(e, t) {
    const n = t.shift()
      , r = rm(n);
    return Promise.all(e.map(o=>r.run(()=>o(...t))))
}
function Na(e, t) {
    for (const n of [...e])
        n(t)
}
class Ub {
    constructor() {
        this._hooks = {},
        this._before = void 0,
        this._after = void 0,
        this._deprecatedMessages = void 0,
        this._deprecatedHooks = {},
        this.hook = this.hook.bind(this),
        this.callHook = this.callHook.bind(this),
        this.callHookWith = this.callHookWith.bind(this)
    }
    hook(t, n, r={}) {
        if (!t || typeof n != "function")
            return ()=>{}
            ;
        const o = t;
        let i;
        for (; this._deprecatedHooks[t]; )
            i = this._deprecatedHooks[t],
            t = i.to;
        if (i && !r.allowDeprecated) {
            let s = i.message;
            s || (s = `${o} hook has been deprecated` + (i.to ? `, please use ${i.to}` : "")),
            this._deprecatedMessages || (this._deprecatedMessages = new Set),
            this._deprecatedMessages.has(s) || (console.warn(s),
            this._deprecatedMessages.add(s))
        }
        if (!n.name)
            try {
                Object.defineProperty(n, "name", {
                    get: ()=>"_" + t.replace(/\W+/g, "_") + "_hook_cb",
                    configurable: !0
                })
            } catch {}
        return this._hooks[t] = this._hooks[t] || [],
        this._hooks[t].push(n),
        ()=>{
            n && (this.removeHook(t, n),
            n = void 0)
        }
    }
    hookOnce(t, n) {
        let r, o = (...i)=>(typeof r == "function" && r(),
        r = void 0,
        o = void 0,
        n(...i));
        return r = this.hook(t, o),
        r
    }
    removeHook(t, n) {
        if (this._hooks[t]) {
            const r = this._hooks[t].indexOf(n);
            r !== -1 && this._hooks[t].splice(r, 1),
            this._hooks[t].length === 0 && delete this._hooks[t]
        }
    }
    deprecateHook(t, n) {
        this._deprecatedHooks[t] = typeof n == "string" ? {
            to: n
        } : n;
        const r = this._hooks[t] || [];
        delete this._hooks[t];
        for (const o of r)
            this.hook(t, o)
    }
    deprecateHooks(t) {
        Object.assign(this._deprecatedHooks, t);
        for (const n in t)
            this.deprecateHook(n, t[n])
    }
    addHooks(t) {
        const n = Al(t)
          , r = Object.keys(n).map(o=>this.hook(o, n[o]));
        return ()=>{
            for (const o of r.splice(0, r.length))
                o()
        }
    }
    removeHooks(t) {
        const n = Al(t);
        for (const r in n)
            this.removeHook(r, n[r])
    }
    removeAllHooks() {
        for (const t in this._hooks)
            delete this._hooks[t]
    }
    callHook(t, ...n) {
        return n.unshift(t),
        this.callHookWith(xb, t, ...n)
    }
    callHookParallel(t, ...n) {
        return n.unshift(t),
        this.callHookWith(Fb, t, ...n)
    }
    callHookWith(t, n, ...r) {
        const o = this._before || this._after ? {
            name: n,
            args: r,
            context: {}
        } : void 0;
        this._before && Na(this._before, o);
        const i = t(n in this._hooks ? [...this._hooks[n]] : [], r);
        return i instanceof Promise ? i.finally(()=>{
            this._after && o && Na(this._after, o)
        }
        ) : (this._after && o && Na(this._after, o),
        i)
    }
    beforeEach(t) {
        return this._before = this._before || [],
        this._before.push(t),
        ()=>{
            if (this._before !== void 0) {
                const n = this._before.indexOf(t);
                n !== -1 && this._before.splice(n, 1)
            }
        }
    }
    afterEach(t) {
        return this._after = this._after || [],
        this._after.push(t),
        ()=>{
            if (this._after !== void 0) {
                const n = this._after.indexOf(t);
                n !== -1 && this._after.splice(n, 1)
            }
        }
    }
}
function om() {
    return new Ub
}
function Vb(e={}) {
    let t, n = !1;
    const r = s=>{
        if (t && t !== s)
            throw new Error("Context conflict")
    }
    ;
    let o;
    if (e.asyncContext) {
        const s = e.AsyncLocalStorage || globalThis.AsyncLocalStorage;
        s ? o = new s : console.warn("[unctx] `AsyncLocalStorage` is not provided.")
    }
    const i = ()=>{
        if (o && t === void 0) {
            const s = o.getStore();
            if (s !== void 0)
                return s
        }
        return t
    }
    ;
    return {
        use: ()=>{
            const s = i();
            if (s === void 0)
                throw new Error("Context is not available");
            return s
        }
        ,
        tryUse: ()=>i(),
        set: (s,a)=>{
            a || r(s),
            t = s,
            n = !0
        }
        ,
        unset: ()=>{
            t = void 0,
            n = !1
        }
        ,
        call: (s,a)=>{
            r(s),
            t = s;
            try {
                return o ? o.run(s, a) : a()
            } finally {
                n || (t = void 0)
            }
        }
        ,
        async callAsync(s, a) {
            t = s;
            const l = ()=>{
                t = s
            }
              , c = ()=>t === s ? l : void 0;
            Ll.add(c);
            try {
                const u = o ? o.run(s, a) : a();
                return n || (t = void 0),
                await u
            } finally {
                Ll.delete(c)
            }
        }
    }
}
function Bb(e={}) {
    const t = {};
    return {
        get(n, r={}) {
            return t[n] || (t[n] = Vb({
                ...e,
                ...r
            })),
            t[n],
            t[n]
        }
    }
}
const ks = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof global < "u" ? global : typeof window < "u" ? window : {}
  , Af = "__unctx__"
  , Hb = ks[Af] || (ks[Af] = Bb())
  , jb = (e,t={})=>Hb.get(e, t)
  , Lf = "__unctx_async_handlers__"
  , Ll = ks[Lf] || (ks[Lf] = new Set);
function _n(e) {
    const t = [];
    for (const o of Ll) {
        const i = o();
        i && t.push(i)
    }
    const n = ()=>{
        for (const o of t)
            o()
    }
    ;
    let r = e();
    return r && typeof r == "object" && "catch"in r && (r = r.catch(o=>{
        throw n(),
        o
    }
    )),
    [r, n]
}
const im = jb("nuxt-app", {
    asyncContext: !1
})
  , Kb = "__nuxt_plugin";
function qb(e) {
    let t = 0;
    const n = {
        _scope: Ei(),
        provide: void 0,
        globalName: "nuxt",
        versions: {
            get nuxt() {
                return "3.10.3"
            },
            get vue() {
                return n.vueApp.version
            }
        },
        payload: yt({
            data: {},
            state: {},
            once: new Set,
            _errors: {},
            ...window.__NUXT__ ?? {}
        }),
        static: {
            data: {}
        },
        runWithContext: o=>n._scope.run(()=>Jb(n, o)),
        isHydrating: !0,
        deferHydration() {
            if (!n.isHydrating)
                return ()=>{}
                ;
            t++;
            let o = !1;
            return ()=>{
                if (!o && (o = !0,
                t--,
                t === 0))
                    return n.isHydrating = !1,
                    n.callHook("app:suspense:resolve")
            }
        },
        _asyncDataPromises: {},
        _asyncData: {},
        _payloadRevivers: {},
        ...e
    };
    n.hooks = om(),
    n.hook = n.hooks.hook,
    n.callHook = n.hooks.callHook,
    n.provide = (o,i)=>{
        const s = "$" + o;
        zi(n, s, i),
        zi(n.vueApp.config.globalProperties, s, i)
    }
    ,
    zi(n.vueApp, "$nuxt", n),
    zi(n.vueApp.config.globalProperties, "$nuxt", n);
    {
        window.addEventListener("nuxt.preloadError", i=>{
            n.callHook("app:chunkError", {
                error: i.payload
            })
        }
        ),
        window.useNuxtApp = window.useNuxtApp || ne;
        const o = n.hook("app:error", (...i)=>{
            console.error("[nuxt] error caught during app initialization", ...i)
        }
        );
        n.hook("app:mounted", o)
    }
    const r = yt(n.payload.config);
    return n.provide("config", r),
    n
}
async function Yb(e, t) {
    if (t.hooks && e.hooks.addHooks(t.hooks),
    typeof t == "function") {
        const {provide: n} = await e.runWithContext(()=>t(e)) || {};
        if (n && typeof n == "object")
            for (const r in n)
                e.provide(r, n[r])
    }
}
async function Wb(e, t) {
    const n = []
      , r = []
      , o = []
      , i = [];
    let s = 0;
    async function a(l) {
        var u;
        const c = ((u = l.dependsOn) == null ? void 0 : u.filter(f=>t.some(d=>d._name === f) && !n.includes(f))) ?? [];
        if (c.length > 0)
            r.push([new Set(c), l]);
        else {
            const f = Yb(e, l).then(async()=>{
                l._name && (n.push(l._name),
                await Promise.all(r.map(async([d,m])=>{
                    d.has(l._name) && (d.delete(l._name),
                    d.size === 0 && (s++,
                    await a(m)))
                }
                )))
            }
            );
            l.parallel ? o.push(f.catch(d=>i.push(d))) : await f
        }
    }
    for (const l of t)
        await a(l);
    if (await Promise.all(o),
    s)
        for (let l = 0; l < s; l++)
            await Promise.all(o);
    if (i.length)
        throw i[0]
}
function Et(e) {
    if (typeof e == "function")
        return e;
    const t = e._name || e.name;
    return delete e.name,
    Object.assign(e.setup || (()=>{}
    ), e, {
        [Kb]: !0,
        _name: t
    })
}
function Jb(e, t, n) {
    const r = ()=>n ? t(...n) : t();
    return im.set(e),
    e.vueApp.runWithContext(r)
}
function zb() {
    var t;
    let e;
    return Kc() && (e = (t = cn()) == null ? void 0 : t.appContext.app.$nuxt),
    e = e || im.tryUse(),
    e || null
}
function ne() {
    const e = zb();
    if (!e)
        throw new Error("[nuxt] instance unavailable");
    return e
}
function Ln(e) {
    return ne().$config
}
function zi(e, t, n) {
    Object.defineProperty(e, t, {
        get: ()=>n
    })
}
const Gi = /^[\u0009\u0020-\u007E\u0080-\u00FF]+$/;
function Gb(e, t) {
    if (typeof e != "string")
        throw new TypeError("argument str must be a string");
    const n = {}
      , o = (t || {}).decode || Zb;
    let i = 0;
    for (; i < e.length; ) {
        const s = e.indexOf("=", i);
        if (s === -1)
            break;
        let a = e.indexOf(";", i);
        if (a === -1)
            a = e.length;
        else if (a < s) {
            i = e.lastIndexOf(";", s - 1) + 1;
            continue
        }
        const l = e.slice(i, s).trim();
        if (n[l] === void 0) {
            let c = e.slice(s + 1, a).trim();
            c.codePointAt(0) === 34 && (c = c.slice(1, -1)),
            n[l] = Xb(c, o)
        }
        i = a + 1
    }
    return n
}
function Cf(e, t, n) {
    const r = n || {}
      , o = r.encode || $b;
    if (typeof o != "function")
        throw new TypeError("option encode is invalid");
    if (!Gi.test(e))
        throw new TypeError("argument name is invalid");
    const i = o(t);
    if (i && !Gi.test(i))
        throw new TypeError("argument val is invalid");
    let s = e + "=" + i;
    if (r.maxAge !== void 0 && r.maxAge !== null) {
        const a = r.maxAge - 0;
        if (Number.isNaN(a) || !Number.isFinite(a))
            throw new TypeError("option maxAge is invalid");
        s += "; Max-Age=" + Math.floor(a)
    }
    if (r.domain) {
        if (!Gi.test(r.domain))
            throw new TypeError("option domain is invalid");
        s += "; Domain=" + r.domain
    }
    if (r.path) {
        if (!Gi.test(r.path))
            throw new TypeError("option path is invalid");
        s += "; Path=" + r.path
    }
    if (r.expires) {
        if (!Qb(r.expires) || Number.isNaN(r.expires.valueOf()))
            throw new TypeError("option expires is invalid");
        s += "; Expires=" + r.expires.toUTCString()
    }
    if (r.httpOnly && (s += "; HttpOnly"),
    r.secure && (s += "; Secure"),
    r.priority)
        switch (typeof r.priority == "string" ? r.priority.toLowerCase() : r.priority) {
        case "low":
            s += "; Priority=Low";
            break;
        case "medium":
            s += "; Priority=Medium";
            break;
        case "high":
            s += "; Priority=High";
            break;
        default:
            throw new TypeError("option priority is invalid")
        }
    if (r.sameSite)
        switch (typeof r.sameSite == "string" ? r.sameSite.toLowerCase() : r.sameSite) {
        case !0:
            s += "; SameSite=Strict";
            break;
        case "lax":
            s += "; SameSite=Lax";
            break;
        case "strict":
            s += "; SameSite=Strict";
            break;
        case "none":
            s += "; SameSite=None";
            break;
        default:
            throw new TypeError("option sameSite is invalid")
        }
    return s
}
function Qb(e) {
    return Object.prototype.toString.call(e) === "[object Date]" || e instanceof Date
}
function Xb(e, t) {
    try {
        return t(e)
    } catch {
        return e
    }
}
function Zb(e) {
    return e.includes("%") ? decodeURIComponent(e) : e
}
function $b(e) {
    return encodeURIComponent(e)
}
const Of = Object.freeze({
    ignoreUnknown: !1,
    respectType: !1,
    respectFunctionNames: !1,
    respectFunctionProperties: !1,
    unorderedObjects: !0,
    unorderedArrays: !1,
    unorderedSets: !1,
    excludeKeys: void 0,
    excludeValues: void 0,
    replacer: void 0
});
function Rf(e, t) {
    t ? t = {
        ...Of,
        ...t
    } : t = Of;
    const n = sm(t);
    return n.dispatch(e),
    n.toString()
}
const eE = Object.freeze(["prototype", "__proto__", "constructor"]);
function sm(e) {
    let t = ""
      , n = new Map;
    const r = o=>{
        t += o
    }
    ;
    return {
        toString() {
            return t
        },
        getContext() {
            return n
        },
        dispatch(o) {
            return e.replacer && (o = e.replacer(o)),
            this[o === null ? "null" : typeof o](o)
        },
        object(o) {
            if (o && typeof o.toJSON == "function")
                return this.object(o.toJSON());
            const i = Object.prototype.toString.call(o);
            let s = "";
            const a = i.length;
            a < 10 ? s = "unknown:[" + i + "]" : s = i.slice(8, a - 1),
            s = s.toLowerCase();
            let l = null;
            if ((l = n.get(o)) === void 0)
                n.set(o, n.size);
            else
                return this.dispatch("[CIRCULAR:" + l + "]");
            if (typeof Buffer < "u" && Buffer.isBuffer && Buffer.isBuffer(o))
                return r("buffer:"),
                r(o.toString("utf8"));
            if (s !== "object" && s !== "function" && s !== "asyncfunction")
                this[s] ? this[s](o) : e.ignoreUnknown || this.unkown(o, s);
            else {
                let c = Object.keys(o);
                e.unorderedObjects && (c = c.sort());
                let u = [];
                e.respectType !== !1 && !Pf(o) && (u = eE),
                e.excludeKeys && (c = c.filter(d=>!e.excludeKeys(d)),
                u = u.filter(d=>!e.excludeKeys(d))),
                r("object:" + (c.length + u.length) + ":");
                const f = d=>{
                    this.dispatch(d),
                    r(":"),
                    e.excludeValues || this.dispatch(o[d]),
                    r(",")
                }
                ;
                for (const d of c)
                    f(d);
                for (const d of u)
                    f(d)
            }
        },
        array(o, i) {
            if (i = i === void 0 ? e.unorderedArrays !== !1 : i,
            r("array:" + o.length + ":"),
            !i || o.length <= 1) {
                for (const l of o)
                    this.dispatch(l);
                return
            }
            const s = new Map
              , a = o.map(l=>{
                const c = sm(e);
                c.dispatch(l);
                for (const [u,f] of c.getContext())
                    s.set(u, f);
                return c.toString()
            }
            );
            return n = s,
            a.sort(),
            this.array(a, !1)
        },
        date(o) {
            return r("date:" + o.toJSON())
        },
        symbol(o) {
            return r("symbol:" + o.toString())
        },
        unkown(o, i) {
            if (r(i),
            !!o && (r(":"),
            o && typeof o.entries == "function"))
                return this.array(Array.from(o.entries()), !0)
        },
        error(o) {
            return r("error:" + o.toString())
        },
        boolean(o) {
            return r("bool:" + o)
        },
        string(o) {
            r("string:" + o.length + ":"),
            r(o)
        },
        function(o) {
            r("fn:"),
            Pf(o) ? this.dispatch("[native]") : this.dispatch(o.toString()),
            e.respectFunctionNames !== !1 && this.dispatch("function-name:" + String(o.name)),
            e.respectFunctionProperties && this.object(o)
        },
        number(o) {
            return r("number:" + o)
        },
        xml(o) {
            return r("xml:" + o.toString())
        },
        null() {
            return r("Null")
        },
        undefined() {
            return r("Undefined")
        },
        regexp(o) {
            return r("regex:" + o.toString())
        },
        uint8array(o) {
            return r("uint8array:"),
            this.dispatch(Array.prototype.slice.call(o))
        },
        uint8clampedarray(o) {
            return r("uint8clampedarray:"),
            this.dispatch(Array.prototype.slice.call(o))
        },
        int8array(o) {
            return r("int8array:"),
            this.dispatch(Array.prototype.slice.call(o))
        },
        uint16array(o) {
            return r("uint16array:"),
            this.dispatch(Array.prototype.slice.call(o))
        },
        int16array(o) {
            return r("int16array:"),
            this.dispatch(Array.prototype.slice.call(o))
        },
        uint32array(o) {
            return r("uint32array:"),
            this.dispatch(Array.prototype.slice.call(o))
        },
        int32array(o) {
            return r("int32array:"),
            this.dispatch(Array.prototype.slice.call(o))
        },
        float32array(o) {
            return r("float32array:"),
            this.dispatch(Array.prototype.slice.call(o))
        },
        float64array(o) {
            return r("float64array:"),
            this.dispatch(Array.prototype.slice.call(o))
        },
        arraybuffer(o) {
            return r("arraybuffer:"),
            this.dispatch(new Uint8Array(o))
        },
        url(o) {
            return r("url:" + o.toString())
        },
        map(o) {
            r("map:");
            const i = [...o];
            return this.array(i, e.unorderedSets !== !1)
        },
        set(o) {
            r("set:");
            const i = [...o];
            return this.array(i, e.unorderedSets !== !1)
        },
        file(o) {
            return r("file:"),
            this.dispatch([o.name, o.size, o.type, o.lastModfied])
        },
        blob() {
            if (e.ignoreUnknown)
                return r("[blob]");
            throw new Error(`Hashing Blob objects is currently not supported
Use "options.replacer" or "options.ignoreUnknown"
`)
        },
        domwindow() {
            return r("domwindow")
        },
        bigint(o) {
            return r("bigint:" + o.toString())
        },
        process() {
            return r("process")
        },
        timer() {
            return r("timer")
        },
        pipe() {
            return r("pipe")
        },
        tcp() {
            return r("tcp")
        },
        udp() {
            return r("udp")
        },
        tty() {
            return r("tty")
        },
        statwatcher() {
            return r("statwatcher")
        },
        securecontext() {
            return r("securecontext")
        },
        connection() {
            return r("connection")
        },
        zlib() {
            return r("zlib")
        },
        context() {
            return r("context")
        },
        nodescript() {
            return r("nodescript")
        },
        httpparser() {
            return r("httpparser")
        },
        dataview() {
            return r("dataview")
        },
        signal() {
            return r("signal")
        },
        fsevent() {
            return r("fsevent")
        },
        tlswrap() {
            return r("tlswrap")
        }
    }
}
const am = "[native code] }"
  , tE = am.length;
function Pf(e) {
    return typeof e != "function" ? !1 : Function.prototype.toString.call(e).slice(-tE) === am
}
function nE(e, t, n={}) {
    return e === t || Rf(e, n) === Rf(t, n)
}
function rE(e) {
    return {
        ctx: {
            table: e
        },
        matchAll: t=>cm(t, e)
    }
}
function lm(e) {
    const t = {};
    for (const n in e)
        t[n] = n === "dynamic" ? new Map(Object.entries(e[n]).map(([r,o])=>[r, lm(o)])) : new Map(Object.entries(e[n]));
    return t
}
function oE(e) {
    return rE(lm(e))
}
function cm(e, t) {
    const n = [];
    for (const [o,i] of If(t.wildcard))
        e.startsWith(o) && n.push(i);
    for (const [o,i] of If(t.dynamic))
        if (e.startsWith(o + "/")) {
            const s = "/" + e.slice(o.length).split("/").splice(2).join("/");
            n.push(...cm(s, i))
        }
    const r = t.static.get(e);
    return r && n.push(r),
    n.filter(Boolean)
}
function If(e) {
    return [...e.entries()].sort((t,n)=>t[0].length - n[0].length)
}
function Da(e) {
    if (e === null || typeof e != "object")
        return !1;
    const t = Object.getPrototypeOf(e);
    return t !== null && t !== Object.prototype && Object.getPrototypeOf(t) !== null || Symbol.iterator in e ? !1 : Symbol.toStringTag in e ? Object.prototype.toString.call(e) === "[object Module]" : !0
}
function Cl(e, t, n=".", r) {
    if (!Da(t))
        return Cl(e, {}, n, r);
    const o = Object.assign({}, t);
    for (const i in e) {
        if (i === "__proto__" || i === "constructor")
            continue;
        const s = e[i];
        s != null && (r && r(o, i, s, n) || (Array.isArray(s) && Array.isArray(o[i]) ? o[i] = [...s, ...o[i]] : Da(s) && Da(o[i]) ? o[i] = Cl(s, o[i], (n ? `${n}.` : "") + i.toString(), r) : o[i] = s))
    }
    return o
}
function um(e) {
    return (...t)=>t.reduce((n,r)=>Cl(n, r, "", e), {})
}
const Xc = um()
  , iE = um((e,t,n)=>{
    if (e[t] !== void 0 && typeof n == "function")
        return e[t] = n(e[t]),
        !0
}
);
function sE(e, t) {
    try {
        return t in e
    } catch {
        return !1
    }
}
var aE = Object.defineProperty
  , lE = (e,t,n)=>t in e ? aE(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : e[t] = n
  , kr = (e,t,n)=>(lE(e, typeof t != "symbol" ? t + "" : t, n),
n);
class Ol extends Error {
    constructor(t, n={}) {
        super(t, n),
        kr(this, "statusCode", 500),
        kr(this, "fatal", !1),
        kr(this, "unhandled", !1),
        kr(this, "statusMessage"),
        kr(this, "data"),
        kr(this, "cause"),
        n.cause && !this.cause && (this.cause = n.cause)
    }
    toJSON() {
        const t = {
            message: this.message,
            statusCode: Pl(this.statusCode, 500)
        };
        return this.statusMessage && (t.statusMessage = fm(this.statusMessage)),
        this.data !== void 0 && (t.data = this.data),
        t
    }
}
kr(Ol, "__h3_error__", !0);
function Rl(e) {
    if (typeof e == "string")
        return new Ol(e);
    if (cE(e))
        return e;
    const t = new Ol(e.message ?? e.statusMessage ?? "",{
        cause: e.cause || e
    });
    if (sE(e, "stack"))
        try {
            Object.defineProperty(t, "stack", {
                get() {
                    return e.stack
                }
            })
        } catch {
            try {
                t.stack = e.stack
            } catch {}
        }
    if (e.data && (t.data = e.data),
    e.statusCode ? t.statusCode = Pl(e.statusCode, t.statusCode) : e.status && (t.statusCode = Pl(e.status, t.statusCode)),
    e.statusMessage ? t.statusMessage = e.statusMessage : e.statusText && (t.statusMessage = e.statusText),
    t.statusMessage) {
        const n = t.statusMessage;
        fm(t.statusMessage) !== n && console.warn("[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default.")
    }
    return e.fatal !== void 0 && (t.fatal = e.fatal),
    e.unhandled !== void 0 && (t.unhandled = e.unhandled),
    t
}
function cE(e) {
    var t;
    return ((t = e == null ? void 0 : e.constructor) == null ? void 0 : t.__h3_error__) === !0
}
const uE = /[^\u0009\u0020-\u007E]/g;
function fm(e="") {
    return e.replace(uE, "")
}
function Pl(e, t=200) {
    return !e || (typeof e == "string" && (e = Number.parseInt(e, 10)),
    e < 100 || e > 999) ? t : e
}
const dm = Symbol("layout-meta")
  , Li = Symbol("route")
  , Mt = ()=>{
    var e;
    return (e = ne()) == null ? void 0 : e.$router
}
  , ea = ()=>Kc() ? gt(Li, ne()._route) : ne()._route;
const fE = (e,t,n={})=>{
    const r = ne()
      , o = n.global || typeof e != "string"
      , i = typeof e != "string" ? e : t;
    if (!i) {
        console.warn("[nuxt] No route middleware passed to `addRouteMiddleware`.", e);
        return
    }
    o ? r._middleware.global.push(i) : r._middleware.named[e] = i
}
  , dE = ()=>{
    try {
        if (ne()._processingMiddleware)
            return !0
    } catch {
        return !0
    }
    return !1
}
  , Ci = (e,t)=>{
    e || (e = "/");
    const n = typeof e == "string" ? e : Zp(e.path || "/", e.query || {}) + (e.hash || "");
    if (t != null && t.open) {
        {
            const {target: a="_blank", windowFeatures: l={}} = t.open
              , c = Object.entries(l).filter(([u,f])=>f !== void 0).map(([u,f])=>`${u.toLowerCase()}=${f}`).join(", ");
            open(n, a, c)
        }
        return Promise.resolve()
    }
    const r = (t == null ? void 0 : t.external) || An(n, {
        acceptRelative: !0
    });
    if (r) {
        if (!(t != null && t.external))
            throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");
        const a = Ai(n).protocol;
        if (a && sb(a))
            throw new Error(`Cannot navigate to a URL with '${a}' protocol.`)
    }
    const o = dE();
    if (!r && o)
        return e;
    const i = Mt()
      , s = ne();
    return r ? (s._scope.stop(),
    t != null && t.replace ? location.replace(n) : location.href = n,
    o ? s.isHydrating ? new Promise(()=>{}
    ) : !1 : Promise.resolve()) : t != null && t.replace ? i.replace(e) : i.push(e)
}
  , hm = "__nuxt_error"
  , ta = ()=>Xr(ne().payload, "error")
  , Zr = e=>{
    const t = na(e);
    try {
        const n = ne()
          , r = ta();
        n.hooks.callHook("app:error", t),
        r.value = r.value || t
    } catch {
        throw t
    }
    return t
}
  , hE = async(e={})=>{
    const t = ne()
      , n = ta();
    t.callHook("app:error:cleared", e),
    e.redirect && await Mt().replace(e.redirect),
    n.value = null
}
  , pE = e=>!!e && typeof e == "object" && hm in e
  , na = e=>{
    const t = Rl(e);
    return Object.defineProperty(t, hm, {
        value: !0,
        configurable: !1,
        writable: !1
    }),
    t
}
  , mE = "modulepreload"
  , gE = function(e, t) {
    return e[0] === "." ? new URL(e,t).href : e
}
  , Mf = {}
  , yE = function(t, n, r) {
    let o = Promise.resolve();
    if (n && n.length > 0) {
        const i = document.getElementsByTagName("link");
        o = Promise.all(n.map(s=>{
            if (s = gE(s, r),
            s in Mf)
                return;
            Mf[s] = !0;
            const a = s.endsWith(".css")
              , l = a ? '[rel="stylesheet"]' : "";
            if (!!r)
                for (let f = i.length - 1; f >= 0; f--) {
                    const d = i[f];
                    if (d.href === s && (!a || d.rel === "stylesheet"))
                        return
                }
            else if (document.querySelector(`link[href="${s}"]${l}`))
                return;
            const u = document.createElement("link");
            if (u.rel = a ? "stylesheet" : mE,
            a || (u.as = "script",
            u.crossOrigin = ""),
            u.href = s,
            document.head.appendChild(u),
            a)
                return new Promise((f,d)=>{
                    u.addEventListener("load", f),
                    u.addEventListener("error", ()=>d(new Error(`Unable to preload CSS for ${s}`)))
                }
                )
        }
        ))
    }
    return o.then(()=>t()).catch(i=>{
        const s = new Event("vite:preloadError",{
            cancelable: !0
        });
        if (s.payload = i,
        window.dispatchEvent(s),
        !s.defaultPrevented)
            throw i
    }
    )
}
  , C = (...e)=>yE(...e).catch(t=>{
    const n = new Event("nuxt.preloadError");
    throw n.payload = t,
    window.dispatchEvent(n),
    t
}
)
  , vE = -1
  , _E = -2
  , bE = -3
  , EE = -4
  , SE = -5
  , wE = -6;
function TE(e, t) {
    return kE(JSON.parse(e), t)
}
function kE(e, t) {
    if (typeof e == "number")
        return o(e, !0);
    if (!Array.isArray(e) || e.length === 0)
        throw new Error("Invalid input");
    const n = e
      , r = Array(n.length);
    function o(i, s=!1) {
        if (i === vE)
            return;
        if (i === bE)
            return NaN;
        if (i === EE)
            return 1 / 0;
        if (i === SE)
            return -1 / 0;
        if (i === wE)
            return -0;
        if (s)
            throw new Error("Invalid input");
        if (i in r)
            return r[i];
        const a = n[i];
        if (!a || typeof a != "object")
            r[i] = a;
        else if (Array.isArray(a))
            if (typeof a[0] == "string") {
                const l = a[0]
                  , c = t == null ? void 0 : t[l];
                if (c)
                    return r[i] = c(o(a[1]));
                switch (l) {
                case "Date":
                    r[i] = new Date(a[1]);
                    break;
                case "Set":
                    const u = new Set;
                    r[i] = u;
                    for (let m = 1; m < a.length; m += 1)
                        u.add(o(a[m]));
                    break;
                case "Map":
                    const f = new Map;
                    r[i] = f;
                    for (let m = 1; m < a.length; m += 2)
                        f.set(o(a[m]), o(a[m + 1]));
                    break;
                case "RegExp":
                    r[i] = new RegExp(a[1],a[2]);
                    break;
                case "Object":
                    r[i] = Object(a[1]);
                    break;
                case "BigInt":
                    r[i] = BigInt(a[1]);
                    break;
                case "null":
                    const d = Object.create(null);
                    r[i] = d;
                    for (let m = 1; m < a.length; m += 2)
                        d[a[m]] = o(a[m + 1]);
                    break;
                default:
                    throw new Error(`Unknown type ${l}`)
                }
            } else {
                const l = new Array(a.length);
                r[i] = l;
                for (let c = 0; c < a.length; c += 1) {
                    const u = a[c];
                    u !== _E && (l[c] = o(u))
                }
            }
        else {
            const l = {};
            r[i] = l;
            for (const c in a) {
                const u = a[c];
                l[c] = o(u)
            }
        }
        return r[i]
    }
    return o(0)
}
function AE(e) {
    return Array.isArray(e) ? e : [e]
}
const LE = ["title", "titleTemplate", "script", "style", "noscript"]
  , ss = ["base", "meta", "link", "style", "script", "noscript"]
  , CE = ["title", "titleTemplate", "templateParams", "base", "htmlAttrs", "bodyAttrs", "meta", "link", "style", "script", "noscript"]
  , OE = ["base", "title", "titleTemplate", "bodyAttrs", "htmlAttrs", "templateParams"]
  , pm = ["tagPosition", "tagPriority", "tagDuplicateStrategy", "children", "innerHTML", "textContent", "processTemplateParams"]
  , RE = typeof window < "u";
function Zc(e) {
    let t = 9;
    for (let n = 0; n < e.length; )
        t = Math.imul(t ^ e.charCodeAt(n++), 9 ** 9);
    return ((t ^ t >>> 9) + 65536).toString(16).substring(1, 8).toLowerCase()
}
function Nf(e) {
    return e._h || Zc(e._d ? e._d : `${e.tag}:${e.textContent || e.innerHTML || ""}:${Object.entries(e.props).map(([t,n])=>`${t}:${String(n)}`).join(",")}`)
}
function mm(e, t) {
    const {props: n, tag: r} = e;
    if (OE.includes(r))
        return r;
    if (r === "link" && n.rel === "canonical")
        return "canonical";
    if (n.charset)
        return "charset";
    const o = ["id"];
    r === "meta" && o.push("name", "property", "http-equiv");
    for (const i of o)
        if (typeof n[i] < "u") {
            const s = String(n[i]);
            return t && !t(s) ? !1 : `${r}:${i}:${s}`
        }
    return !1
}
function Df(e, t) {
    return e == null ? t || null : typeof e == "function" ? e(t) : e
}
function gm(e, t) {
    const n = []
      , r = t.resolveKeyData || (i=>i.key)
      , o = t.resolveValueData || (i=>i.value);
    for (const [i,s] of Object.entries(e))
        n.push(...(Array.isArray(s) ? s : [s]).map(a=>{
            const l = {
                key: i,
                value: a
            }
              , c = o(l);
            return typeof c == "object" ? gm(c, t) : Array.isArray(c) ? c : {
                [typeof t.key == "function" ? t.key(l) : t.key]: r(l),
                [typeof t.value == "function" ? t.value(l) : t.value]: c
            }
        }
        ).flat());
    return n
}
function ym(e, t) {
    return Object.entries(e).map(([n,r])=>{
        if (typeof r == "object" && (r = ym(r, t)),
        t.resolve) {
            const o = t.resolve({
                key: n,
                value: r
            });
            if (o)
                return o
        }
        return typeof r == "number" && (r = r.toString()),
        typeof r == "string" && t.wrapValue && (r = r.replace(new RegExp(t.wrapValue,"g"), `\\${t.wrapValue}`),
        r = `${t.wrapValue}${r}${t.wrapValue}`),
        `${n}${t.keyValueSeparator || ""}${r}`
    }
    ).join(t.entrySeparator || "")
}
const St = e=>({
    keyValue: e,
    metaKey: "property"
})
  , xa = e=>({
    keyValue: e
})
  , $c = {
    appleItunesApp: {
        unpack: {
            entrySeparator: ", ",
            resolve({key: e, value: t}) {
                return `${Mn(e)}=${t}`
            }
        }
    },
    articleExpirationTime: St("article:expiration_time"),
    articleModifiedTime: St("article:modified_time"),
    articlePublishedTime: St("article:published_time"),
    bookReleaseDate: St("book:release_date"),
    charset: {
        metaKey: "charset"
    },
    contentSecurityPolicy: {
        unpack: {
            entrySeparator: "; ",
            resolve({key: e, value: t}) {
                return `${Mn(e)} ${t}`
            }
        },
        metaKey: "http-equiv"
    },
    contentType: {
        metaKey: "http-equiv"
    },
    defaultStyle: {
        metaKey: "http-equiv"
    },
    fbAppId: St("fb:app_id"),
    msapplicationConfig: xa("msapplication-Config"),
    msapplicationTileColor: xa("msapplication-TileColor"),
    msapplicationTileImage: xa("msapplication-TileImage"),
    ogAudioSecureUrl: St("og:audio:secure_url"),
    ogAudioUrl: St("og:audio"),
    ogImageSecureUrl: St("og:image:secure_url"),
    ogImageUrl: St("og:image"),
    ogSiteName: St("og:site_name"),
    ogVideoSecureUrl: St("og:video:secure_url"),
    ogVideoUrl: St("og:video"),
    profileFirstName: St("profile:first_name"),
    profileLastName: St("profile:last_name"),
    profileUsername: St("profile:username"),
    refresh: {
        metaKey: "http-equiv",
        unpack: {
            entrySeparator: ";",
            resolve({key: e, value: t}) {
                if (e === "seconds")
                    return `${t}`
            }
        }
    },
    robots: {
        unpack: {
            entrySeparator: ", ",
            resolve({key: e, value: t}) {
                return typeof t == "boolean" ? `${Mn(e)}` : `${Mn(e)}:${t}`
            }
        }
    },
    xUaCompatible: {
        metaKey: "http-equiv"
    }
}
  , vm = ["og", "book", "article", "profile"];
function _m(e) {
    var n;
    const t = Mn(e).split(":")[0];
    return vm.includes(t) ? "property" : ((n = $c[e]) == null ? void 0 : n.metaKey) || "name"
}
function PE(e) {
    var t;
    return ((t = $c[e]) == null ? void 0 : t.keyValue) || Mn(e)
}
function Mn(e) {
    const t = e.replace(/([A-Z])/g, "-$1").toLowerCase()
      , n = t.split("-")[0];
    return vm.includes(n) || n === "twitter" ? e.replace(/([A-Z])/g, ":$1").toLowerCase() : t
}
function Il(e) {
    if (Array.isArray(e))
        return e.map(n=>Il(n));
    if (typeof e != "object" || Array.isArray(e))
        return e;
    const t = {};
    for (const [n,r] of Object.entries(e))
        t[Mn(n)] = Il(r);
    return t
}
function IE(e, t) {
    const n = $c[t];
    return t === "refresh" ? `${e.seconds};url=${e.url}` : ym(Il(e), {
        keyValueSeparator: "=",
        entrySeparator: ", ",
        resolve({value: r, key: o}) {
            if (r === null)
                return "";
            if (typeof r == "boolean")
                return `${o}`
        },
        ...n == null ? void 0 : n.unpack
    })
}
const bm = ["og:image", "og:video", "og:audio", "twitter:image"];
function Em(e) {
    const t = {};
    return Object.entries(e).forEach(([n,r])=>{
        String(r) !== "false" && n && (t[n] = r)
    }
    ),
    t
}
function xf(e, t) {
    const n = Em(t)
      , r = Mn(e)
      , o = _m(r);
    if (bm.includes(r)) {
        const i = {};
        return Object.entries(n).forEach(([s,a])=>{
            i[`${e}${s === "url" ? "" : `${s.charAt(0).toUpperCase()}${s.slice(1)}`}`] = a
        }
        ),
        Sm(i).sort((s,a)=>{
            var l, c;
            return (((l = s[o]) == null ? void 0 : l.length) || 0) - (((c = a[o]) == null ? void 0 : c.length) || 0)
        }
        )
    }
    return [{
        [o]: r,
        ...n
    }]
}
function Sm(e) {
    const t = []
      , n = {};
    Object.entries(e).forEach(([o,i])=>{
        if (!Array.isArray(i)) {
            if (typeof i == "object" && i) {
                if (bm.includes(Mn(o))) {
                    t.push(...xf(o, i));
                    return
                }
                n[o] = Em(i)
            } else
                n[o] = i;
            return
        }
        i.forEach(s=>{
            t.push(...typeof s == "string" ? Sm({
                [o]: s
            }) : xf(o, s))
        }
        )
    }
    );
    const r = gm(n, {
        key({key: o}) {
            return _m(o)
        },
        value({key: o}) {
            return o === "charset" ? "charset" : "content"
        },
        resolveKeyData({key: o}) {
            return PE(o)
        },
        resolveValueData({value: o, key: i}) {
            return o === null ? "_null" : typeof o == "object" ? IE(o, i) : typeof o == "number" ? o.toString() : o
        }
    });
    return [...t, ...r].map(o=>(o.content === "_null" && (o.content = null),
    o))
}
async function ME(e, t, n) {
    const r = {
        tag: e,
        props: await wm(typeof t == "object" && typeof t != "function" && !(t instanceof Promise) ? {
            ...t
        } : {
            [["script", "noscript", "style"].includes(e) ? "innerHTML" : "textContent"]: t
        }, ["templateParams", "titleTemplate"].includes(e))
    };
    return pm.forEach(o=>{
        const i = typeof r.props[o] < "u" ? r.props[o] : n[o];
        typeof i < "u" && ((!["innerHTML", "textContent", "children"].includes(o) || LE.includes(r.tag)) && (r[o === "children" ? "innerHTML" : o] = i),
        delete r.props[o])
    }
    ),
    r.props.body && (r.tagPosition = "bodyClose",
    delete r.props.body),
    r.tag === "script" && typeof r.innerHTML == "object" && (r.innerHTML = JSON.stringify(r.innerHTML),
    r.props.type = r.props.type || "application/json"),
    Array.isArray(r.props.content) ? r.props.content.map(o=>({
        ...r,
        props: {
            ...r.props,
            content: o
        }
    })) : r
}
function NE(e) {
    return typeof e == "object" && !Array.isArray(e) && (e = Object.keys(e).filter(t=>e[t])),
    (Array.isArray(e) ? e.join(" ") : e).split(" ").filter(t=>t.trim()).filter(Boolean).join(" ")
}
async function wm(e, t) {
    for (const n of Object.keys(e)) {
        if (n === "class") {
            e[n] = NE(e[n]);
            continue
        }
        if (e[n]instanceof Promise && (e[n] = await e[n]),
        !t && !pm.includes(n)) {
            const r = String(e[n])
              , o = n.startsWith("data-");
            r === "true" || r === "" ? e[n] = o ? "true" : !0 : e[n] || (o && r === "false" ? e[n] = "false" : delete e[n])
        }
    }
    return e
}
const DE = 10;
async function xE(e) {
    const t = [];
    return Object.entries(e.resolvedInput).filter(([n,r])=>typeof r < "u" && CE.includes(n)).forEach(([n,r])=>{
        const o = AE(r);
        t.push(...o.map(i=>ME(n, i, e)).flat())
    }
    ),
    (await Promise.all(t)).flat().filter(Boolean).map((n,r)=>(n._e = e._i,
    e.mode && (n._m = e.mode),
    n._p = (e._i << DE) + r,
    n))
}
const Ff = {
    base: -10,
    title: 10
}
  , Uf = {
    critical: -80,
    high: -10,
    low: 20
};
function As(e) {
    let t = 100;
    const n = e.tagPriority;
    return typeof n == "number" ? n : (e.tag === "meta" ? (e.props["http-equiv"] === "content-security-policy" && (t = -30),
    e.props.charset && (t = -20),
    e.props.name === "viewport" && (t = -15)) : e.tag === "link" && e.props.rel === "preconnect" ? t = 20 : e.tag in Ff && (t = Ff[e.tag]),
    typeof n == "string" && n in Uf ? t + Uf[n] : t)
}
const FE = [{
    prefix: "before:",
    offset: -1
}, {
    prefix: "after:",
    offset: 1
}]
  , Tm = ["onload", "onerror", "onabort", "onprogress", "onloadstart"]
  , Wn = "%separator";
function as(e, t, n) {
    if (typeof e != "string" || !e.includes("%"))
        return e;
    function r(s) {
        let a;
        return ["s", "pageTitle"].includes(s) ? a = t.pageTitle : s.includes(".") ? a = s.split(".").reduce((l,c)=>l && l[c] || void 0, t) : a = t[s],
        typeof a < "u" ? (a || "").replace(/"/g, '\\"') : !1
    }
    let o = e;
    try {
        o = decodeURI(e)
    } catch {}
    return (o.match(/%(\w+\.+\w+)|%(\w+)/g) || []).sort().reverse().forEach(s=>{
        const a = r(s.slice(1));
        typeof a == "string" && (e = e.replace(new RegExp(`\\${s}(\\W|$)`,"g"), (l,c)=>`${a}${c}`).trim())
    }
    ),
    e.includes(Wn) && (e.endsWith(Wn) && (e = e.slice(0, -Wn.length).trim()),
    e.startsWith(Wn) && (e = e.slice(Wn.length).trim()),
    e = e.replace(new RegExp(`\\${Wn}\\s*\\${Wn}`,"g"), Wn),
    e = as(e, {
        separator: n
    }, n)),
    e
}
async function UE(e) {
    const t = {
        tag: e.tagName.toLowerCase(),
        props: await wm(e.getAttributeNames().reduce((n,r)=>({
            ...n,
            [r]: e.getAttribute(r)
        }), {})),
        innerHTML: e.innerHTML
    };
    return t._d = mm(t),
    t
}
async function km(e, t={}) {
    var u;
    const n = t.document || e.resolvedOptions.document;
    if (!n)
        return;
    const r = {
        shouldRender: e.dirty,
        tags: []
    };
    if (await e.hooks.callHook("dom:beforeRender", r),
    !r.shouldRender)
        return;
    const o = (await e.resolveTags()).map(f=>({
        tag: f,
        id: ss.includes(f.tag) ? Nf(f) : f.tag,
        shouldRender: !0
    }));
    let i = e._dom;
    if (!i) {
        i = {
            elMap: {
                htmlAttrs: n.documentElement,
                bodyAttrs: n.body
            }
        };
        for (const f of ["body", "head"]) {
            const d = (u = n == null ? void 0 : n[f]) == null ? void 0 : u.children;
            for (const m of [...d].filter(_=>ss.includes(_.tagName.toLowerCase())))
                i.elMap[m.getAttribute("data-hid") || Nf(await UE(m))] = m
        }
    }
    i.pendingSideEffects = {
        ...i.sideEffects || {}
    },
    i.sideEffects = {};
    function s(f, d, m) {
        const _ = `${f}:${d}`;
        i.sideEffects[_] = m,
        delete i.pendingSideEffects[_]
    }
    function a({id: f, $el: d, tag: m}) {
        const _ = m.tag.endsWith("Attrs");
        i.elMap[f] = d,
        _ || (["textContent", "innerHTML"].forEach(b=>{
            m[b] && m[b] !== d[b] && (d[b] = m[b])
        }
        ),
        s(f, "el", ()=>{
            i.elMap[f].remove(),
            delete i.elMap[f]
        }
        )),
        Object.entries(m.props).forEach(([b,w])=>{
            const g = `attr:${b}`;
            if (b === "class")
                for (const E of (w || "").split(" ").filter(Boolean))
                    _ && s(f, `${g}:${E}`, ()=>d.classList.remove(E)),
                    !d.classList.contains(E) && d.classList.add(E);
            else
                d.getAttribute(b) !== w && d.setAttribute(b, w === !0 ? "" : String(w)),
                _ && s(f, g, ()=>d.removeAttribute(b))
        }
        )
    }
    const l = []
      , c = {
        bodyClose: void 0,
        bodyOpen: void 0,
        head: void 0
    };
    for (const f of o) {
        const {tag: d, shouldRender: m, id: _} = f;
        if (m) {
            if (d.tag === "title") {
                n.title = d.textContent;
                continue
            }
            f.$el = f.$el || i.elMap[_],
            f.$el ? a(f) : ss.includes(d.tag) && l.push(f)
        }
    }
    for (const f of l) {
        const d = f.tag.tagPosition || "head";
        f.$el = n.createElement(f.tag.tag),
        a(f),
        c[d] = c[d] || n.createDocumentFragment(),
        c[d].appendChild(f.$el)
    }
    for (const f of o)
        await e.hooks.callHook("dom:renderTag", f, n, s);
    c.head && n.head.appendChild(c.head),
    c.bodyOpen && n.body.insertBefore(c.bodyOpen, n.body.firstChild),
    c.bodyClose && n.body.appendChild(c.bodyClose),
    Object.values(i.pendingSideEffects).forEach(f=>f()),
    e._dom = i,
    e.dirty = !1,
    await e.hooks.callHook("dom:rendered", {
        renders: o
    })
}
async function VE(e, t={}) {
    const n = t.delayFn || (r=>setTimeout(r, 10));
    return e._domUpdatePromise = e._domUpdatePromise || new Promise(r=>n(async()=>{
        await km(e, t),
        delete e._domUpdatePromise,
        r()
    }
    ))
}
function BE(e) {
    return t=>{
        var r, o;
        const n = ((o = (r = t.resolvedOptions.document) == null ? void 0 : r.head.querySelector('script[id="unhead:payload"]')) == null ? void 0 : o.innerHTML) || !1;
        return n && t.push(JSON.parse(n)),
        {
            mode: "client",
            hooks: {
                "entries:updated": function(i) {
                    VE(i, e)
                }
            }
        }
    }
}
const HE = ["templateParams", "htmlAttrs", "bodyAttrs"]
  , jE = {
    hooks: {
        "tag:normalise": function({tag: e}) {
            ["hid", "vmid", "key"].forEach(r=>{
                e.props[r] && (e.key = e.props[r],
                delete e.props[r])
            }
            );
            const n = mm(e) || (e.key ? `${e.tag}:${e.key}` : !1);
            n && (e._d = n)
        },
        "tags:resolve": function(e) {
            const t = {};
            e.tags.forEach(r=>{
                const o = (r.key ? `${r.tag}:${r.key}` : r._d) || r._p
                  , i = t[o];
                if (i) {
                    let a = r == null ? void 0 : r.tagDuplicateStrategy;
                    if (!a && HE.includes(r.tag) && (a = "merge"),
                    a === "merge") {
                        const l = i.props;
                        ["class", "style"].forEach(c=>{
                            l[c] && (r.props[c] ? (c === "style" && !l[c].endsWith(";") && (l[c] += ";"),
                            r.props[c] = `${l[c]} ${r.props[c]}`) : r.props[c] = l[c])
                        }
                        ),
                        t[o].props = {
                            ...l,
                            ...r.props
                        };
                        return
                    } else if (r._e === i._e) {
                        i._duped = i._duped || [],
                        r._d = `${i._d}:${i._duped.length + 1}`,
                        i._duped.push(r);
                        return
                    } else if (As(r) > As(i))
                        return
                }
                const s = Object.keys(r.props).length + (r.innerHTML ? 1 : 0) + (r.textContent ? 1 : 0);
                if (ss.includes(r.tag) && s === 0) {
                    delete t[o];
                    return
                }
                t[o] = r
            }
            );
            const n = [];
            Object.values(t).forEach(r=>{
                const o = r._duped;
                delete r._duped,
                n.push(r),
                o && n.push(...o)
            }
            ),
            e.tags = n,
            e.tags = e.tags.filter(r=>!(r.tag === "meta" && (r.props.name || r.props.property) && !r.props.content))
        }
    }
}
  , KE = {
    mode: "server",
    hooks: {
        "tags:resolve": function(e) {
            const t = {};
            e.tags.filter(n=>["titleTemplate", "templateParams", "title"].includes(n.tag) && n._m === "server").forEach(n=>{
                t[n.tag] = n.tag.startsWith("title") ? n.textContent : n.props
            }
            ),
            Object.keys(t).length && e.tags.push({
                tag: "script",
                innerHTML: JSON.stringify(t),
                props: {
                    id: "unhead:payload",
                    type: "application/json"
                }
            })
        }
    }
}
  , qE = ["script", "link", "bodyAttrs"];
function YE(e) {
    const t = {}
      , n = {};
    return Object.entries(e.props).forEach(([r,o])=>{
        r.startsWith("on") && typeof o == "function" ? (Tm.includes(r) && (t[r] = `this.dataset.${r} = true`),
        n[r] = o) : t[r] = o
    }
    ),
    {
        props: t,
        eventHandlers: n
    }
}
const WE = e=>({
    hooks: {
        "tags:resolve": function(t) {
            for (const n of t.tags)
                if (qE.includes(n.tag)) {
                    const {props: r, eventHandlers: o} = YE(n);
                    n.props = r,
                    Object.keys(o).length && ((n.props.src || n.props.href) && (n.key = n.key || Zc(n.props.src || n.props.href)),
                    n._eventHandlers = o)
                }
        },
        "dom:renderTag": function(t, n, r) {
            if (!t.tag._eventHandlers)
                return;
            const o = t.tag.tag === "bodyAttrs" ? n.defaultView : t.$el;
            Object.entries(t.tag._eventHandlers).forEach(([i,s])=>{
                const a = `${t.tag._d || t.tag._p}:${i}`
                  , l = i.slice(2).toLowerCase()
                  , c = `data-h-${l}`;
                if (r(t.id, a, ()=>{}
                ),
                t.$el.hasAttribute(c))
                    return;
                t.$el.setAttribute(c, "");
                let u;
                const f = d=>{
                    s(d),
                    u == null || u.disconnect()
                }
                ;
                i in t.$el.dataset ? f(new Event(i.replace("on", ""))) : Tm.includes(i) && typeof MutationObserver < "u" ? (u = new MutationObserver(d=>{
                    d.some(_=>_.attributeName === `data-${i}`) && (f(new Event(i.replace("on", ""))),
                    u == null || u.disconnect())
                }
                ),
                u.observe(t.$el, {
                    attributes: !0
                })) : o.addEventListener(l, f),
                r(t.id, a, ()=>{
                    u == null || u.disconnect(),
                    o.removeEventListener(l, f),
                    t.$el.removeAttribute(c)
                }
                )
            }
            )
        }
    }
})
  , JE = ["link", "style", "script", "noscript"]
  , zE = {
    hooks: {
        "tag:normalise": ({tag: e})=>{
            e.key && JE.includes(e.tag) && (e.props["data-hid"] = e._h = Zc(e.key))
        }
    }
}
  , GE = {
    hooks: {
        "tags:resolve": e=>{
            const t = n=>{
                var r;
                return (r = e.tags.find(o=>o._d === n)) == null ? void 0 : r._p
            }
            ;
            for (const {prefix: n, offset: r} of FE)
                for (const o of e.tags.filter(i=>typeof i.tagPriority == "string" && i.tagPriority.startsWith(n))) {
                    const i = t(o.tagPriority.replace(n, ""));
                    typeof i < "u" && (o._p = i + r)
                }
            e.tags.sort((n,r)=>n._p - r._p).sort((n,r)=>As(n) - As(r))
        }
    }
}
  , QE = {
    meta: "content",
    link: "href",
    htmlAttrs: "lang"
}
  , XE = e=>({
    hooks: {
        "tags:resolve": t=>{
            var a;
            const {tags: n} = t
              , r = (a = n.find(l=>l.tag === "title")) == null ? void 0 : a.textContent
              , o = n.findIndex(l=>l.tag === "templateParams")
              , i = o !== -1 ? n[o].props : {}
              , s = i.separator || "|";
            delete i.separator,
            i.pageTitle = as(i.pageTitle || r || "", i, s);
            for (const l of n.filter(c=>c.processTemplateParams !== !1)) {
                const c = QE[l.tag];
                c && typeof l.props[c] == "string" ? l.props[c] = as(l.props[c], i, s) : (l.processTemplateParams === !0 || ["titleTemplate", "title"].includes(l.tag)) && ["innerHTML", "textContent"].forEach(u=>{
                    typeof l[u] == "string" && (l[u] = as(l[u], i, s))
                }
                )
            }
            e._templateParams = i,
            e._separator = s,
            t.tags = n.filter(l=>l.tag !== "templateParams")
        }
    }
})
  , ZE = {
    hooks: {
        "tags:resolve": e=>{
            const {tags: t} = e;
            let n = t.findIndex(o=>o.tag === "titleTemplate");
            const r = t.findIndex(o=>o.tag === "title");
            if (r !== -1 && n !== -1) {
                const o = Df(t[n].textContent, t[r].textContent);
                o !== null ? t[r].textContent = o || t[r].textContent : delete t[r]
            } else if (n !== -1) {
                const o = Df(t[n].textContent);
                o !== null && (t[n].textContent = o,
                t[n].tag = "title",
                n = -1)
            }
            n !== -1 && delete t[n],
            e.tags = t.filter(Boolean)
        }
    }
}
  , $E = {
    hooks: {
        "tags:afterResolve": function(e) {
            for (const t of e.tags)
                typeof t.innerHTML == "string" && (t.innerHTML && ["application/ld+json", "application/json"].includes(t.props.type) ? t.innerHTML = t.innerHTML.replace(/</g, "\\u003C") : t.innerHTML = t.innerHTML.replace(new RegExp(`</${t.tag}`,"g"), `<\\/${t.tag}`))
        }
    }
};
let Am;
function eS(e={}) {
    const t = tS(e);
    return t.use(BE()),
    Am = t
}
function Vf(e, t) {
    return !e || e === "server" && t || e === "client" && !t
}
function tS(e={}) {
    const t = om();
    t.addHooks(e.hooks || {}),
    e.document = e.document || (RE ? document : void 0);
    const n = !e.document
      , r = ()=>{
        a.dirty = !0,
        t.callHook("entries:updated", a)
    }
    ;
    let o = 0
      , i = [];
    const s = []
      , a = {
        plugins: s,
        dirty: !1,
        resolvedOptions: e,
        hooks: t,
        headEntries() {
            return i
        },
        use(l) {
            const c = typeof l == "function" ? l(a) : l;
            (!c.key || !s.some(u=>u.key === c.key)) && (s.push(c),
            Vf(c.mode, n) && t.addHooks(c.hooks || {}))
        },
        push(l, c) {
            c == null || delete c.head;
            const u = {
                _i: o++,
                input: l,
                ...c
            };
            return Vf(u.mode, n) && (i.push(u),
            r()),
            {
                dispose() {
                    i = i.filter(f=>f._i !== u._i),
                    t.callHook("entries:updated", a),
                    r()
                },
                patch(f) {
                    i = i.map(d=>(d._i === u._i && (d.input = u.input = f),
                    d)),
                    r()
                }
            }
        },
        async resolveTags() {
            const l = {
                tags: [],
                entries: [...i]
            };
            await t.callHook("entries:resolve", l);
            for (const c of l.entries) {
                const u = c.resolvedInput || c.input;
                if (c.resolvedInput = await (c.transform ? c.transform(u) : u),
                c.resolvedInput)
                    for (const f of await xE(c)) {
                        const d = {
                            tag: f,
                            entry: c,
                            resolvedOptions: a.resolvedOptions
                        };
                        await t.callHook("tag:normalise", d),
                        l.tags.push(d.tag)
                    }
            }
            return await t.callHook("tags:beforeResolve", l),
            await t.callHook("tags:resolve", l),
            await t.callHook("tags:afterResolve", l),
            l.tags
        },
        ssr: n
    };
    return [jE, KE, WE, zE, GE, XE, ZE, $E, ...(e == null ? void 0 : e.plugins) || []].forEach(l=>a.use(l)),
    a.hooks.callHook("init", a),
    a
}
function nS() {
    return Am
}
const rS = Yp.startsWith("3");
function oS(e) {
    return typeof e == "function" ? e() : z(e)
}
function Ls(e, t="") {
    if (e instanceof Promise)
        return e;
    const n = oS(e);
    return !e || !n ? n : Array.isArray(n) ? n.map(r=>Ls(r, t)) : typeof n == "object" ? Object.fromEntries(Object.entries(n).map(([r,o])=>r === "titleTemplate" || r.startsWith("on") ? [r, z(o)] : [r, Ls(o, r)])) : n
}
const iS = {
    hooks: {
        "entries:resolve": function(e) {
            for (const t of e.entries)
                t.resolvedInput = Ls(t.input)
        }
    }
}
  , Lm = "usehead";
function sS(e) {
    return {
        install(n) {
            rS && (n.config.globalProperties.$unhead = e,
            n.config.globalProperties.$head = e,
            n.provide(Lm, e))
        }
    }.install
}
function aS(e={}) {
    e.domDelayFn = e.domDelayFn || (n=>Ft(()=>setTimeout(()=>n(), 0)));
    const t = eS(e);
    return t.use(iS),
    t.install = sS(t),
    t
}
const Ml = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}
  , Nl = "__unhead_injection_handler__";
function lS(e) {
    Ml[Nl] = e
}
function cS() {
    if (Nl in Ml)
        return Ml[Nl]();
    const e = gt(Lm);
    return e || nS()
}
function uS(e, t={}) {
    const n = t.head || cS();
    if (n)
        return n.ssr ? n.push(e, t) : fS(n, e, t)
}
function fS(e, t, n={}) {
    const r = ye(!1)
      , o = ye({});
    mv(()=>{
        o.value = r.value ? {} : Ls(t)
    }
    );
    const i = e.push(o.value, n);
    return Ue(o, a=>{
        i.patch(a)
    }
    ),
    cn() && (ln(()=>{
        i.dispose()
    }
    ),
    wp(()=>{
        r.value = !0
    }
    ),
    Sp(()=>{
        r.value = !1
    }
    )),
    i
}
function pn(e) {
    if (typeof e != "object")
        return e;
    var t, n, r = Object.prototype.toString.call(e);
    if (r === "[object Object]") {
        if (e.constructor !== Object && typeof e.constructor == "function") {
            n = new e.constructor;
            for (t in e)
                e.hasOwnProperty(t) && n[t] !== e[t] && (n[t] = pn(e[t]))
        } else {
            n = {};
            for (t in e)
                t === "__proto__" ? Object.defineProperty(n, t, {
                    value: pn(e[t]),
                    configurable: !0,
                    enumerable: !0,
                    writable: !0
                }) : n[t] = pn(e[t])
        }
        return n
    }
    if (r === "[object Array]") {
        for (t = e.length,
        n = Array(t); t--; )
            n[t] = pn(e[t]);
        return n
    }
    return r === "[object Set]" ? (n = new Set,
    e.forEach(function(o) {
        n.add(pn(o))
    }),
    n) : r === "[object Map]" ? (n = new Map,
    e.forEach(function(o, i) {
        n.set(pn(i), pn(o))
    }),
    n) : r === "[object Date]" ? new Date(+e) : r === "[object RegExp]" ? (n = new RegExp(e.source,e.flags),
    n.lastIndex = e.lastIndex,
    n) : r === "[object DataView]" ? new e.constructor(pn(e.buffer)) : r === "[object ArrayBuffer]" ? e.slice(0) : r.slice(-6) === "Array]" ? new e.constructor(e) : e
}
const dS = {
    nuxt: {
        buildId: "a6270ef2-7865-4b21-a02c-4f53bd791e26"
    }
}
  , hS = iE(dS);
function pS() {
    const e = ne();
    return e._appConfig || (e._appConfig = yt(hS)),
    e._appConfig
}
const mS = !1
  , Dl = !1
  , gS = !1
  , yS = {
    activeClass: "is-active",
    exactActiveClass: "is-exact-active",
    componentName: "NuxtLink"
}
  , vS = "#__nuxt";
let ls, Cm;
function _S() {
    var t;
    const e = (t = pS().nuxt) == null ? void 0 : t.buildId;
    return ls = $fetch(Gc(`builds/meta/${e}.json`)),
    ls.then(n=>{
        Cm = oE(n.matcher)
    }
    ),
    ls
}
function ra() {
    return ls || _S()
}
async function Om(e) {
    return await ra(),
    Xc({}, ...Cm.matchAll(e).reverse())
}
function Bf(e, t={}) {
    const n = bS(e, t)
      , r = ne()
      , o = r._payloadCache = r._payloadCache || {};
    return n in o || (o[n] = ES(e).then(i=>i ? Rm(n).then(s=>s || (delete o[n],
    null)) : (o[n] = null,
    null))),
    o[n]
}
const Hf = "json";
function bS(e, t={}) {
    const n = new URL(e,"http://localhost");
    if (n.host !== "localhost" || An(n.pathname, {
        acceptRelative: !0
    }))
        throw new Error("Payload URL must not include hostname: " + e);
    const r = t.hash || (t.fresh ? Date.now() : "");
    return wo(Ln().app.baseURL, n.pathname, r ? `_payload.${r}.${Hf}` : `_payload.${Hf}`)
}
async function Rm(e) {
    const t = fetch(e).then(n=>n.text().then(Pm));
    try {
        return await t
    } catch (n) {
        console.warn("[nuxt] Cannot load payload ", e, n)
    }
    return null
}
async function ES(e=ea().path) {
    if (e = ki(e),
    (await ra()).prerendered.includes(e))
        return !0;
    const n = await Om(e);
    return !!n.prerender && !n.redirect
}
let Qi = null;
async function SS() {
    if (Qi)
        return Qi;
    const e = document.getElementById("__NUXT_DATA__");
    if (!e)
        return {};
    const t = await Pm(e.textContent || "")
      , n = e.dataset.src ? await Rm(e.dataset.src) : void 0;
    return Qi = {
        ...t,
        ...n,
        ...window.__NUXT__
    },
    Qi
}
async function Pm(e) {
    return await TE(e, ne()._payloadRevivers)
}
function wS(e, t) {
    ne()._payloadRevivers[e] = t
}
const jf = {
    NuxtError: e=>na(e),
    EmptyShallowRef: e=>on(e === "_" ? void 0 : e === "0n" ? BigInt(0) : si(e)),
    EmptyRef: e=>ye(e === "_" ? void 0 : e === "0n" ? BigInt(0) : si(e)),
    ShallowRef: e=>on(e),
    ShallowReactive: e=>So(e),
    Ref: e=>ye(e),
    Reactive: e=>yt(e)
}
  , TS = Et({
    name: "nuxt:revive-payload:client",
    order: -30,
    async setup(e) {
        let t, n;
        for (const r in jf)
            wS(r, jf[r]);
        Object.assign(e.payload, ([t,n] = _n(()=>e.runWithContext(SS)),
        t = await t,
        n(),
        t)),
        window.__NUXT__ = e.payload
    }
})
  , kS = []
  , AS = Et({
    name: "nuxt:head",
    enforce: "pre",
    setup(e) {
        const t = aS({
            plugins: kS
        });
        lS(()=>ne().vueApp._context.provides.usehead),
        e.vueApp.use(t);
        {
            let n = !0;
            const r = async()=>{
                n = !1,
                await km(t)
            }
            ;
            t.hooks.hook("dom:beforeRender", o=>{
                o.shouldRender = !n
            }
            ),
            e.hooks.hook("page:start", ()=>{
                n = !0
            }
            ),
            e.hooks.hook("page:finish", ()=>{
                e.isHydrating || r()
            }
            ),
            e.hooks.hook("app:error", r),
            e.hooks.hook("app:suspense:resolve", r)
        }
    }
});
/*!
  * vue-router v4.3.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */
const Gr = typeof document < "u";
function LS(e) {
    return e.__esModule || e[Symbol.toStringTag] === "Module"
}
const Ke = Object.assign;
function Fa(e, t) {
    const n = {};
    for (const r in t) {
        const o = t[r];
        n[r] = sn(o) ? o.map(e) : e(o)
    }
    return n
}
const Vo = ()=>{}
  , sn = Array.isArray
  , Im = /#/g
  , CS = /&/g
  , OS = /\//g
  , RS = /=/g
  , PS = /\?/g
  , Mm = /\+/g
  , IS = /%5B/g
  , MS = /%5D/g
  , Nm = /%5E/g
  , NS = /%60/g
  , Dm = /%7B/g
  , DS = /%7C/g
  , xm = /%7D/g
  , xS = /%20/g;
function eu(e) {
    return encodeURI("" + e).replace(DS, "|").replace(IS, "[").replace(MS, "]")
}
function FS(e) {
    return eu(e).replace(Dm, "{").replace(xm, "}").replace(Nm, "^")
}
function xl(e) {
    return eu(e).replace(Mm, "%2B").replace(xS, "+").replace(Im, "%23").replace(CS, "%26").replace(NS, "`").replace(Dm, "{").replace(xm, "}").replace(Nm, "^")
}
function US(e) {
    return xl(e).replace(RS, "%3D")
}
function VS(e) {
    return eu(e).replace(Im, "%23").replace(PS, "%3F")
}
function BS(e) {
    return e == null ? "" : VS(e).replace(OS, "%2F")
}
function ai(e) {
    try {
        return decodeURIComponent("" + e)
    } catch {}
    return "" + e
}
const HS = /\/$/
  , jS = e=>e.replace(HS, "");
function Ua(e, t, n="/") {
    let r, o = {}, i = "", s = "";
    const a = t.indexOf("#");
    let l = t.indexOf("?");
    return a < l && a >= 0 && (l = -1),
    l > -1 && (r = t.slice(0, l),
    i = t.slice(l + 1, a > -1 ? a : t.length),
    o = e(i)),
    a > -1 && (r = r || t.slice(0, a),
    s = t.slice(a, t.length)),
    r = WS(r ?? t, n),
    {
        fullPath: r + (i && "?") + i + s,
        path: r,
        query: o,
        hash: ai(s)
    }
}
function KS(e, t) {
    const n = t.query ? e(t.query) : "";
    return t.path + (n && "?") + n + (t.hash || "")
}
function Kf(e, t) {
    return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/"
}
function qS(e, t, n) {
    const r = t.matched.length - 1
      , o = n.matched.length - 1;
    return r > -1 && r === o && ho(t.matched[r], n.matched[o]) && Fm(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash
}
function ho(e, t) {
    return (e.aliasOf || e) === (t.aliasOf || t)
}
function Fm(e, t) {
    if (Object.keys(e).length !== Object.keys(t).length)
        return !1;
    for (const n in e)
        if (!YS(e[n], t[n]))
            return !1;
    return !0
}
function YS(e, t) {
    return sn(e) ? qf(e, t) : sn(t) ? qf(t, e) : e === t
}
function qf(e, t) {
    return sn(t) ? e.length === t.length && e.every((n,r)=>n === t[r]) : e.length === 1 && e[0] === t
}
function WS(e, t) {
    if (e.startsWith("/"))
        return e;
    if (!e)
        return t;
    const n = t.split("/")
      , r = e.split("/")
      , o = r[r.length - 1];
    (o === ".." || o === ".") && r.push("");
    let i = n.length - 1, s, a;
    for (s = 0; s < r.length; s++)
        if (a = r[s],
        a !== ".")
            if (a === "..")
                i > 1 && i--;
            else
                break;
    return n.slice(0, i).join("/") + "/" + r.slice(s).join("/")
}
var li;
(function(e) {
    e.pop = "pop",
    e.push = "push"
}
)(li || (li = {}));
var Bo;
(function(e) {
    e.back = "back",
    e.forward = "forward",
    e.unknown = ""
}
)(Bo || (Bo = {}));
function JS(e) {
    if (!e)
        if (Gr) {
            const t = document.querySelector("base");
            e = t && t.getAttribute("href") || "/",
            e = e.replace(/^\w+:\/\/[^\/]+/, "")
        } else
            e = "/";
    return e[0] !== "/" && e[0] !== "#" && (e = "/" + e),
    jS(e)
}
const zS = /^[^#]+#/;
function GS(e, t) {
    return e.replace(zS, "#") + t
}
function QS(e, t) {
    const n = document.documentElement.getBoundingClientRect()
      , r = e.getBoundingClientRect();
    return {
        behavior: t.behavior,
        left: r.left - n.left - (t.left || 0),
        top: r.top - n.top - (t.top || 0)
    }
}
const oa = ()=>({
    left: window.scrollX,
    top: window.scrollY
});
function XS(e) {
    let t;
    if ("el"in e) {
        const n = e.el
          , r = typeof n == "string" && n.startsWith("#")
          , o = typeof n == "string" ? r ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
        if (!o)
            return;
        t = QS(o, e)
    } else
        t = e;
    "scrollBehavior"in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.scrollX, t.top != null ? t.top : window.scrollY)
}
function Yf(e, t) {
    return (history.state ? history.state.position - t : -1) + e
}
const Fl = new Map;
function ZS(e, t) {
    Fl.set(e, t)
}
function $S(e) {
    const t = Fl.get(e);
    return Fl.delete(e),
    t
}
let ew = ()=>location.protocol + "//" + location.host;
function Um(e, t) {
    const {pathname: n, search: r, hash: o} = t
      , i = e.indexOf("#");
    if (i > -1) {
        let a = o.includes(e.slice(i)) ? e.slice(i).length : 1
          , l = o.slice(a);
        return l[0] !== "/" && (l = "/" + l),
        Kf(l, "")
    }
    return Kf(n, e) + r + o
}
function tw(e, t, n, r) {
    let o = []
      , i = []
      , s = null;
    const a = ({state: d})=>{
        const m = Um(e, location)
          , _ = n.value
          , b = t.value;
        let w = 0;
        if (d) {
            if (n.value = m,
            t.value = d,
            s && s === _) {
                s = null;
                return
            }
            w = b ? d.position - b.position : 0
        } else
            r(m);
        o.forEach(g=>{
            g(n.value, _, {
                delta: w,
                type: li.pop,
                direction: w ? w > 0 ? Bo.forward : Bo.back : Bo.unknown
            })
        }
        )
    }
    ;
    function l() {
        s = n.value
    }
    function c(d) {
        o.push(d);
        const m = ()=>{
            const _ = o.indexOf(d);
            _ > -1 && o.splice(_, 1)
        }
        ;
        return i.push(m),
        m
    }
    function u() {
        const {history: d} = window;
        d.state && d.replaceState(Ke({}, d.state, {
            scroll: oa()
        }), "")
    }
    function f() {
        for (const d of i)
            d();
        i = [],
        window.removeEventListener("popstate", a),
        window.removeEventListener("beforeunload", u)
    }
    return window.addEventListener("popstate", a),
    window.addEventListener("beforeunload", u, {
        passive: !0
    }),
    {
        pauseListeners: l,
        listen: c,
        destroy: f
    }
}
function Wf(e, t, n, r=!1, o=!1) {
    return {
        back: e,
        current: t,
        forward: n,
        replaced: r,
        position: window.history.length,
        scroll: o ? oa() : null
    }
}
function nw(e) {
    const {history: t, location: n} = window
      , r = {
        value: Um(e, n)
    }
      , o = {
        value: t.state
    };
    o.value || i(r.value, {
        back: null,
        current: r.value,
        forward: null,
        position: t.length - 1,
        replaced: !0,
        scroll: null
    }, !0);
    function i(l, c, u) {
        const f = e.indexOf("#")
          , d = f > -1 ? (n.host && document.querySelector("base") ? e : e.slice(f)) + l : ew() + e + l;
        try {
            t[u ? "replaceState" : "pushState"](c, "", d),
            o.value = c
        } catch (m) {
            console.error(m),
            n[u ? "replace" : "assign"](d)
        }
    }
    function s(l, c) {
        const u = Ke({}, t.state, Wf(o.value.back, l, o.value.forward, !0), c, {
            position: o.value.position
        });
        i(l, u, !0),
        r.value = l
    }
    function a(l, c) {
        const u = Ke({}, o.value, t.state, {
            forward: l,
            scroll: oa()
        });
        i(u.current, u, !0);
        const f = Ke({}, Wf(r.value, l, null), {
            position: u.position + 1
        }, c);
        i(l, f, !1),
        r.value = l
    }
    return {
        location: r,
        state: o,
        push: a,
        replace: s
    }
}
function Vm(e) {
    e = JS(e);
    const t = nw(e)
      , n = tw(e, t.state, t.location, t.replace);
    function r(i, s=!0) {
        s || n.pauseListeners(),
        history.go(i)
    }
    const o = Ke({
        location: "",
        base: e,
        go: r,
        createHref: GS.bind(null, e)
    }, t, n);
    return Object.defineProperty(o, "location", {
        enumerable: !0,
        get: ()=>t.location.value
    }),
    Object.defineProperty(o, "state", {
        enumerable: !0,
        get: ()=>t.state.value
    }),
    o
}
function rw(e) {
    return e = location.host ? e || location.pathname + location.search : "",
    e.includes("#") || (e += "#"),
    Vm(e)
}
function ow(e) {
    return typeof e == "string" || e && typeof e == "object"
}
function Bm(e) {
    return typeof e == "string" || typeof e == "symbol"
}
const Zt = {
    path: "/",
    name: void 0,
    params: {},
    query: {},
    hash: "",
    fullPath: "/",
    matched: [],
    meta: {},
    redirectedFrom: void 0
}
  , Hm = Symbol("");
var Jf;
(function(e) {
    e[e.aborted = 4] = "aborted",
    e[e.cancelled = 8] = "cancelled",
    e[e.duplicated = 16] = "duplicated"
}
)(Jf || (Jf = {}));
function po(e, t) {
    return Ke(new Error, {
        type: e,
        [Hm]: !0
    }, t)
}
function Cn(e, t) {
    return e instanceof Error && Hm in e && (t == null || !!(e.type & t))
}
const zf = "[^/]+?"
  , iw = {
    sensitive: !1,
    strict: !1,
    start: !0,
    end: !0
}
  , sw = /[.+*?^${}()[\]/\\]/g;
function aw(e, t) {
    const n = Ke({}, iw, t)
      , r = [];
    let o = n.start ? "^" : "";
    const i = [];
    for (const c of e) {
        const u = c.length ? [] : [90];
        n.strict && !c.length && (o += "/");
        for (let f = 0; f < c.length; f++) {
            const d = c[f];
            let m = 40 + (n.sensitive ? .25 : 0);
            if (d.type === 0)
                f || (o += "/"),
                o += d.value.replace(sw, "\\$&"),
                m += 40;
            else if (d.type === 1) {
                const {value: _, repeatable: b, optional: w, regexp: g} = d;
                i.push({
                    name: _,
                    repeatable: b,
                    optional: w
                });
                const E = g || zf;
                if (E !== zf) {
                    m += 10;
                    try {
                        new RegExp(`(${E})`)
                    } catch (y) {
                        throw new Error(`Invalid custom RegExp for param "${_}" (${E}): ` + y.message)
                    }
                }
                let p = b ? `((?:${E})(?:/(?:${E}))*)` : `(${E})`;
                f || (p = w && c.length < 2 ? `(?:/${p})` : "/" + p),
                w && (p += "?"),
                o += p,
                m += 20,
                w && (m += -8),
                b && (m += -20),
                E === ".*" && (m += -50)
            }
            u.push(m)
        }
        r.push(u)
    }
    if (n.strict && n.end) {
        const c = r.length - 1;
        r[c][r[c].length - 1] += .7000000000000001
    }
    n.strict || (o += "/?"),
    n.end ? o += "$" : n.strict && (o += "(?:/|$)");
    const s = new RegExp(o,n.sensitive ? "" : "i");
    function a(c) {
        const u = c.match(s)
          , f = {};
        if (!u)
            return null;
        for (let d = 1; d < u.length; d++) {
            const m = u[d] || ""
              , _ = i[d - 1];
            f[_.name] = m && _.repeatable ? m.split("/") : m
        }
        return f
    }
    function l(c) {
        let u = ""
          , f = !1;
        for (const d of e) {
            (!f || !u.endsWith("/")) && (u += "/"),
            f = !1;
            for (const m of d)
                if (m.type === 0)
                    u += m.value;
                else if (m.type === 1) {
                    const {value: _, repeatable: b, optional: w} = m
                      , g = _ in c ? c[_] : "";
                    if (sn(g) && !b)
                        throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);
                    const E = sn(g) ? g.join("/") : g;
                    if (!E)
                        if (w)
                            d.length < 2 && (u.endsWith("/") ? u = u.slice(0, -1) : f = !0);
                        else
                            throw new Error(`Missing required param "${_}"`);
                    u += E
                }
        }
        return u || "/"
    }
    return {
        re: s,
        score: r,
        keys: i,
        parse: a,
        stringify: l
    }
}
function lw(e, t) {
    let n = 0;
    for (; n < e.length && n < t.length; ) {
        const r = t[n] - e[n];
        if (r)
            return r;
        n++
    }
    return e.length < t.length ? e.length === 1 && e[0] === 80 ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === 80 ? 1 : -1 : 0
}
function cw(e, t) {
    let n = 0;
    const r = e.score
      , o = t.score;
    for (; n < r.length && n < o.length; ) {
        const i = lw(r[n], o[n]);
        if (i)
            return i;
        n++
    }
    if (Math.abs(o.length - r.length) === 1) {
        if (Gf(r))
            return 1;
        if (Gf(o))
            return -1
    }
    return o.length - r.length
}
function Gf(e) {
    const t = e[e.length - 1];
    return e.length > 0 && t[t.length - 1] < 0
}
const uw = {
    type: 0,
    value: ""
}
  , fw = /[a-zA-Z0-9_]/;
function dw(e) {
    if (!e)
        return [[]];
    if (e === "/")
        return [[uw]];
    if (!e.startsWith("/"))
        throw new Error(`Invalid path "${e}"`);
    function t(m) {
        throw new Error(`ERR (${n})/"${c}": ${m}`)
    }
    let n = 0
      , r = n;
    const o = [];
    let i;
    function s() {
        i && o.push(i),
        i = []
    }
    let a = 0, l, c = "", u = "";
    function f() {
        c && (n === 0 ? i.push({
            type: 0,
            value: c
        }) : n === 1 || n === 2 || n === 3 ? (i.length > 1 && (l === "*" || l === "+") && t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),
        i.push({
            type: 1,
            value: c,
            regexp: u,
            repeatable: l === "*" || l === "+",
            optional: l === "*" || l === "?"
        })) : t("Invalid state to consume buffer"),
        c = "")
    }
    function d() {
        c += l
    }
    for (; a < e.length; ) {
        if (l = e[a++],
        l === "\\" && n !== 2) {
            r = n,
            n = 4;
            continue
        }
        switch (n) {
        case 0:
            l === "/" ? (c && f(),
            s()) : l === ":" ? (f(),
            n = 1) : d();
            break;
        case 4:
            d(),
            n = r;
            break;
        case 1:
            l === "(" ? n = 2 : fw.test(l) ? d() : (f(),
            n = 0,
            l !== "*" && l !== "?" && l !== "+" && a--);
            break;
        case 2:
            l === ")" ? u[u.length - 1] == "\\" ? u = u.slice(0, -1) + l : n = 3 : u += l;
            break;
        case 3:
            f(),
            n = 0,
            l !== "*" && l !== "?" && l !== "+" && a--,
            u = "";
            break;
        default:
            t("Unknown state");
            break
        }
    }
    return n === 2 && t(`Unfinished custom RegExp for param "${c}"`),
    f(),
    s(),
    o
}
function hw(e, t, n) {
    const r = aw(dw(e.path), n)
      , o = Ke(r, {
        record: e,
        parent: t,
        children: [],
        alias: []
    });
    return t && !o.record.aliasOf == !t.record.aliasOf && t.children.push(o),
    o
}
function pw(e, t) {
    const n = []
      , r = new Map;
    t = Zf({
        strict: !1,
        end: !0,
        sensitive: !1
    }, t);
    function o(u) {
        return r.get(u)
    }
    function i(u, f, d) {
        const m = !d
          , _ = mw(u);
        _.aliasOf = d && d.record;
        const b = Zf(t, u)
          , w = [_];
        if ("alias"in u) {
            const p = typeof u.alias == "string" ? [u.alias] : u.alias;
            for (const y of p)
                w.push(Ke({}, _, {
                    components: d ? d.record.components : _.components,
                    path: y,
                    aliasOf: d ? d.record : _
                }))
        }
        let g, E;
        for (const p of w) {
            const {path: y} = p;
            if (f && y[0] !== "/") {
                const S = f.record.path
                  , T = S[S.length - 1] === "/" ? "" : "/";
                p.path = f.record.path + (y && T + y)
            }
            if (g = hw(p, f, b),
            d ? d.alias.push(g) : (E = E || g,
            E !== g && E.alias.push(g),
            m && u.name && !Xf(g) && s(u.name)),
            _.children) {
                const S = _.children;
                for (let T = 0; T < S.length; T++)
                    i(S[T], g, d && d.children[T])
            }
            d = d || g,
            (g.record.components && Object.keys(g.record.components).length || g.record.name || g.record.redirect) && l(g)
        }
        return E ? ()=>{
            s(E)
        }
        : Vo
    }
    function s(u) {
        if (Bm(u)) {
            const f = r.get(u);
            f && (r.delete(u),
            n.splice(n.indexOf(f), 1),
            f.children.forEach(s),
            f.alias.forEach(s))
        } else {
            const f = n.indexOf(u);
            f > -1 && (n.splice(f, 1),
            u.record.name && r.delete(u.record.name),
            u.children.forEach(s),
            u.alias.forEach(s))
        }
    }
    function a() {
        return n
    }
    function l(u) {
        let f = 0;
        for (; f < n.length && cw(u, n[f]) >= 0 && (u.record.path !== n[f].record.path || !jm(u, n[f])); )
            f++;
        n.splice(f, 0, u),
        u.record.name && !Xf(u) && r.set(u.record.name, u)
    }
    function c(u, f) {
        let d, m = {}, _, b;
        if ("name"in u && u.name) {
            if (d = r.get(u.name),
            !d)
                throw po(1, {
                    location: u
                });
            b = d.record.name,
            m = Ke(Qf(f.params, d.keys.filter(E=>!E.optional).concat(d.parent ? d.parent.keys.filter(E=>E.optional) : []).map(E=>E.name)), u.params && Qf(u.params, d.keys.map(E=>E.name))),
            _ = d.stringify(m)
        } else if (u.path != null)
            _ = u.path,
            d = n.find(E=>E.re.test(_)),
            d && (m = d.parse(_),
            b = d.record.name);
        else {
            if (d = f.name ? r.get(f.name) : n.find(E=>E.re.test(f.path)),
            !d)
                throw po(1, {
                    location: u,
                    currentLocation: f
                });
            b = d.record.name,
            m = Ke({}, f.params, u.params),
            _ = d.stringify(m)
        }
        const w = [];
        let g = d;
        for (; g; )
            w.unshift(g.record),
            g = g.parent;
        return {
            name: b,
            path: _,
            params: m,
            matched: w,
            meta: yw(w)
        }
    }
    return e.forEach(u=>i(u)),
    {
        addRoute: i,
        resolve: c,
        removeRoute: s,
        getRoutes: a,
        getRecordMatcher: o
    }
}
function Qf(e, t) {
    const n = {};
    for (const r of t)
        r in e && (n[r] = e[r]);
    return n
}
function mw(e) {
    return {
        path: e.path,
        redirect: e.redirect,
        name: e.name,
        meta: e.meta || {},
        aliasOf: void 0,
        beforeEnter: e.beforeEnter,
        props: gw(e),
        children: e.children || [],
        instances: {},
        leaveGuards: new Set,
        updateGuards: new Set,
        enterCallbacks: {},
        components: "components"in e ? e.components || null : e.component && {
            default: e.component
        }
    }
}
function gw(e) {
    const t = {}
      , n = e.props || !1;
    if ("component"in e)
        t.default = n;
    else
        for (const r in e.components)
            t[r] = typeof n == "object" ? n[r] : n;
    return t
}
function Xf(e) {
    for (; e; ) {
        if (e.record.aliasOf)
            return !0;
        e = e.parent
    }
    return !1
}
function yw(e) {
    return e.reduce((t,n)=>Ke(t, n.meta), {})
}
function Zf(e, t) {
    const n = {};
    for (const r in e)
        n[r] = r in t ? t[r] : e[r];
    return n
}
function jm(e, t) {
    return t.children.some(n=>n === e || jm(e, n))
}
function vw(e) {
    const t = {};
    if (e === "" || e === "?")
        return t;
    const r = (e[0] === "?" ? e.slice(1) : e).split("&");
    for (let o = 0; o < r.length; ++o) {
        const i = r[o].replace(Mm, " ")
          , s = i.indexOf("=")
          , a = ai(s < 0 ? i : i.slice(0, s))
          , l = s < 0 ? null : ai(i.slice(s + 1));
        if (a in t) {
            let c = t[a];
            sn(c) || (c = t[a] = [c]),
            c.push(l)
        } else
            t[a] = l
    }
    return t
}
function $f(e) {
    let t = "";
    for (let n in e) {
        const r = e[n];
        if (n = US(n),
        r == null) {
            r !== void 0 && (t += (t.length ? "&" : "") + n);
            continue
        }
        (sn(r) ? r.map(i=>i && xl(i)) : [r && xl(r)]).forEach(i=>{
            i !== void 0 && (t += (t.length ? "&" : "") + n,
            i != null && (t += "=" + i))
        }
        )
    }
    return t
}
function _w(e) {
    const t = {};
    for (const n in e) {
        const r = e[n];
        r !== void 0 && (t[n] = sn(r) ? r.map(o=>o == null ? null : "" + o) : r == null ? r : "" + r)
    }
    return t
}
const bw = Symbol("")
  , ed = Symbol("")
  , tu = Symbol("")
  , nu = Symbol("")
  , Ul = Symbol("");
function Oo() {
    let e = [];
    function t(r) {
        return e.push(r),
        ()=>{
            const o = e.indexOf(r);
            o > -1 && e.splice(o, 1)
        }
    }
    function n() {
        e = []
    }
    return {
        add: t,
        list: ()=>e.slice(),
        reset: n
    }
}
function nr(e, t, n, r, o, i=s=>s()) {
    const s = r && (r.enterCallbacks[o] = r.enterCallbacks[o] || []);
    return ()=>new Promise((a,l)=>{
        const c = d=>{
            d === !1 ? l(po(4, {
                from: n,
                to: t
            })) : d instanceof Error ? l(d) : ow(d) ? l(po(2, {
                from: t,
                to: d
            })) : (s && r.enterCallbacks[o] === s && typeof d == "function" && s.push(d),
            a())
        }
          , u = i(()=>e.call(r && r.instances[o], t, n, c));
        let f = Promise.resolve(u);
        e.length < 3 && (f = f.then(c)),
        f.catch(d=>l(d))
    }
    )
}
function Va(e, t, n, r, o=i=>i()) {
    const i = [];
    for (const s of e)
        for (const a in s.components) {
            let l = s.components[a];
            if (!(t !== "beforeRouteEnter" && !s.instances[a]))
                if (Ew(l)) {
                    const u = (l.__vccOpts || l)[t];
                    u && i.push(nr(u, n, r, s, a, o))
                } else {
                    let c = l();
                    i.push(()=>c.then(u=>{
                        if (!u)
                            return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${s.path}"`));
                        const f = LS(u) ? u.default : u;
                        s.components[a] = f;
                        const m = (f.__vccOpts || f)[t];
                        return m && nr(m, n, r, s, a, o)()
                    }
                    ))
                }
        }
    return i
}
function Ew(e) {
    return typeof e == "object" || "displayName"in e || "props"in e || "__vccOpts"in e
}
function td(e) {
    const t = gt(tu)
      , n = gt(nu)
      , r = le(()=>t.resolve(z(e.to)))
      , o = le(()=>{
        const {matched: l} = r.value
          , {length: c} = l
          , u = l[c - 1]
          , f = n.matched;
        if (!u || !f.length)
            return -1;
        const d = f.findIndex(ho.bind(null, u));
        if (d > -1)
            return d;
        const m = nd(l[c - 2]);
        return c > 1 && nd(u) === m && f[f.length - 1].path !== m ? f.findIndex(ho.bind(null, l[c - 2])) : d
    }
    )
      , i = le(()=>o.value > -1 && kw(n.params, r.value.params))
      , s = le(()=>o.value > -1 && o.value === n.matched.length - 1 && Fm(n.params, r.value.params));
    function a(l={}) {
        return Tw(l) ? t[z(e.replace) ? "replace" : "push"](z(e.to)).catch(Vo) : Promise.resolve()
    }
    return {
        route: r,
        href: le(()=>r.value.href),
        isActive: i,
        isExactActive: s,
        navigate: a
    }
}
const Sw = Te({
    name: "RouterLink",
    compatConfig: {
        MODE: 3
    },
    props: {
        to: {
            type: [String, Object],
            required: !0
        },
        replace: Boolean,
        activeClass: String,
        exactActiveClass: String,
        custom: Boolean,
        ariaCurrentValue: {
            type: String,
            default: "page"
        }
    },
    useLink: td,
    setup(e, {slots: t}) {
        const n = yt(td(e))
          , {options: r} = gt(tu)
          , o = le(()=>({
            [rd(e.activeClass, r.linkActiveClass, "router-link-active")]: n.isActive,
            [rd(e.exactActiveClass, r.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
        }));
        return ()=>{
            const i = t.default && t.default(n);
            return e.custom ? i : ot("a", {
                "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
                href: n.href,
                onClick: n.navigate,
                class: o.value
            }, i)
        }
    }
})
  , ww = Sw;
function Tw(e) {
    if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
        if (e.currentTarget && e.currentTarget.getAttribute) {
            const t = e.currentTarget.getAttribute("target");
            if (/\b_blank\b/i.test(t))
                return
        }
        return e.preventDefault && e.preventDefault(),
        !0
    }
}
function kw(e, t) {
    for (const n in t) {
        const r = t[n]
          , o = e[n];
        if (typeof r == "string") {
            if (r !== o)
                return !1
        } else if (!sn(o) || o.length !== r.length || r.some((i,s)=>i !== o[s]))
            return !1
    }
    return !0
}
function nd(e) {
    return e ? e.aliasOf ? e.aliasOf.path : e.path : ""
}
const rd = (e,t,n)=>e ?? t ?? n
  , Aw = Te({
    name: "RouterView",
    inheritAttrs: !1,
    props: {
        name: {
            type: String,
            default: "default"
        },
        route: Object
    },
    compatConfig: {
        MODE: 3
    },
    setup(e, {attrs: t, slots: n}) {
        const r = gt(Ul)
          , o = le(()=>e.route || r.value)
          , i = gt(ed, 0)
          , s = le(()=>{
            let c = z(i);
            const {matched: u} = o.value;
            let f;
            for (; (f = u[c]) && !f.components; )
                c++;
            return c
        }
        )
          , a = le(()=>o.value.matched[s.value]);
        Nr(ed, le(()=>s.value + 1)),
        Nr(bw, a),
        Nr(Ul, o);
        const l = ye();
        return Ue(()=>[l.value, a.value, e.name], ([c,u,f],[d,m,_])=>{
            u && (u.instances[f] = c,
            m && m !== u && c && c === d && (u.leaveGuards.size || (u.leaveGuards = m.leaveGuards),
            u.updateGuards.size || (u.updateGuards = m.updateGuards))),
            c && u && (!m || !ho(u, m) || !d) && (u.enterCallbacks[f] || []).forEach(b=>b(c))
        }
        , {
            flush: "post"
        }),
        ()=>{
            const c = o.value
              , u = e.name
              , f = a.value
              , d = f && f.components[u];
            if (!d)
                return od(n.default, {
                    Component: d,
                    route: c
                });
            const m = f.props[u]
              , _ = m ? m === !0 ? c.params : typeof m == "function" ? m(c) : m : null
              , w = ot(d, Ke({}, _, t, {
                onVnodeUnmounted: g=>{
                    g.component.isUnmounted && (f.instances[u] = null)
                }
                ,
                ref: l
            }));
            return od(n.default, {
                Component: w,
                route: c
            }) || w
        }
    }
});
function od(e, t) {
    if (!e)
        return null;
    const n = e(t);
    return n.length === 1 ? n[0] : n
}
const Km = Aw;
function Lw(e) {
    const t = pw(e.routes, e)
      , n = e.parseQuery || vw
      , r = e.stringifyQuery || $f
      , o = e.history
      , i = Oo()
      , s = Oo()
      , a = Oo()
      , l = on(Zt);
    let c = Zt;
    Gr && e.scrollBehavior && "scrollRestoration"in history && (history.scrollRestoration = "manual");
    const u = Fa.bind(null, B=>"" + B)
      , f = Fa.bind(null, BS)
      , d = Fa.bind(null, ai);
    function m(B, ee) {
        let G, Z;
        return Bm(B) ? (G = t.getRecordMatcher(B),
        Z = ee) : Z = B,
        t.addRoute(Z, G)
    }
    function _(B) {
        const ee = t.getRecordMatcher(B);
        ee && t.removeRoute(ee)
    }
    function b() {
        return t.getRoutes().map(B=>B.record)
    }
    function w(B) {
        return !!t.getRecordMatcher(B)
    }
    function g(B, ee) {
        if (ee = Ke({}, ee || l.value),
        typeof B == "string") {
            const v = Ua(n, B, ee.path)
              , k = t.resolve({
                path: v.path
            }, ee)
              , R = o.createHref(v.fullPath);
            return Ke(v, k, {
                params: d(k.params),
                hash: ai(v.hash),
                redirectedFrom: void 0,
                href: R
            })
        }
        let G;
        if (B.path != null)
            G = Ke({}, B, {
                path: Ua(n, B.path, ee.path).path
            });
        else {
            const v = Ke({}, B.params);
            for (const k in v)
                v[k] == null && delete v[k];
            G = Ke({}, B, {
                params: f(v)
            }),
            ee.params = f(ee.params)
        }
        const Z = t.resolve(G, ee)
          , me = B.hash || "";
        Z.params = u(d(Z.params));
        const Ee = KS(r, Ke({}, B, {
            hash: FS(me),
            path: Z.path
        }))
          , h = o.createHref(Ee);
        return Ke({
            fullPath: Ee,
            hash: me,
            query: r === $f ? _w(B.query) : B.query || {}
        }, Z, {
            redirectedFrom: void 0,
            href: h
        })
    }
    function E(B) {
        return typeof B == "string" ? Ua(n, B, l.value.path) : Ke({}, B)
    }
    function p(B, ee) {
        if (c !== B)
            return po(8, {
                from: ee,
                to: B
            })
    }
    function y(B) {
        return A(B)
    }
    function S(B) {
        return y(Ke(E(B), {
            replace: !0
        }))
    }
    function T(B) {
        const ee = B.matched[B.matched.length - 1];
        if (ee && ee.redirect) {
            const {redirect: G} = ee;
            let Z = typeof G == "function" ? G(B) : G;
            return typeof Z == "string" && (Z = Z.includes("?") || Z.includes("#") ? Z = E(Z) : {
                path: Z
            },
            Z.params = {}),
            Ke({
                query: B.query,
                hash: B.hash,
                params: Z.path != null ? {} : B.params
            }, Z)
        }
    }
    function A(B, ee) {
        const G = c = g(B)
          , Z = l.value
          , me = B.state
          , Ee = B.force
          , h = B.replace === !0
          , v = T(G);
        if (v)
            return A(Ke(E(v), {
                state: typeof v == "object" ? Ke({}, me, v.state) : me,
                force: Ee,
                replace: h
            }), ee || G);
        const k = G;
        k.redirectedFrom = ee;
        let R;
        return !Ee && qS(r, Z, G) && (R = po(16, {
            to: k,
            from: Z
        }),
        ae(Z, Z, !0, !1)),
        (R ? Promise.resolve(R) : I(k, Z)).catch(N=>Cn(N) ? Cn(N, 2) ? N : H(N) : F(N, k, Z)).then(N=>{
            if (N) {
                if (Cn(N, 2))
                    return A(Ke({
                        replace: h
                    }, E(N.to), {
                        state: typeof N.to == "object" ? Ke({}, me, N.to.state) : me,
                        force: Ee
                    }), ee || k)
            } else
                N = x(k, Z, !0, h, me);
            return V(k, Z, N),
            N
        }
        )
    }
    function L(B, ee) {
        const G = p(B, ee);
        return G ? Promise.reject(G) : Promise.resolve()
    }
    function O(B) {
        const ee = je.values().next().value;
        return ee && typeof ee.runWithContext == "function" ? ee.runWithContext(B) : B()
    }
    function I(B, ee) {
        let G;
        const [Z,me,Ee] = Cw(B, ee);
        G = Va(Z.reverse(), "beforeRouteLeave", B, ee);
        for (const v of Z)
            v.leaveGuards.forEach(k=>{
                G.push(nr(k, B, ee))
            }
            );
        const h = L.bind(null, B, ee);
        return G.push(h),
        Je(G).then(()=>{
            G = [];
            for (const v of i.list())
                G.push(nr(v, B, ee));
            return G.push(h),
            Je(G)
        }
        ).then(()=>{
            G = Va(me, "beforeRouteUpdate", B, ee);
            for (const v of me)
                v.updateGuards.forEach(k=>{
                    G.push(nr(k, B, ee))
                }
                );
            return G.push(h),
            Je(G)
        }
        ).then(()=>{
            G = [];
            for (const v of Ee)
                if (v.beforeEnter)
                    if (sn(v.beforeEnter))
                        for (const k of v.beforeEnter)
                            G.push(nr(k, B, ee));
                    else
                        G.push(nr(v.beforeEnter, B, ee));
            return G.push(h),
            Je(G)
        }
        ).then(()=>(B.matched.forEach(v=>v.enterCallbacks = {}),
        G = Va(Ee, "beforeRouteEnter", B, ee, O),
        G.push(h),
        Je(G))).then(()=>{
            G = [];
            for (const v of s.list())
                G.push(nr(v, B, ee));
            return G.push(h),
            Je(G)
        }
        ).catch(v=>Cn(v, 8) ? v : Promise.reject(v))
    }
    function V(B, ee, G) {
        a.list().forEach(Z=>O(()=>Z(B, ee, G)))
    }
    function x(B, ee, G, Z, me) {
        const Ee = p(B, ee);
        if (Ee)
            return Ee;
        const h = ee === Zt
          , v = Gr ? history.state : {};
        G && (Z || h ? o.replace(B.fullPath, Ke({
            scroll: h && v && v.scroll
        }, me)) : o.push(B.fullPath, me)),
        l.value = B,
        ae(B, ee, G, h),
        H()
    }
    let X;
    function Y() {
        X || (X = o.listen((B,ee,G)=>{
            if (!nt.listening)
                return;
            const Z = g(B)
              , me = T(Z);
            if (me) {
                A(Ke(me, {
                    replace: !0
                }), Z).catch(Vo);
                return
            }
            c = Z;
            const Ee = l.value;
            Gr && ZS(Yf(Ee.fullPath, G.delta), oa()),
            I(Z, Ee).catch(h=>Cn(h, 12) ? h : Cn(h, 2) ? (A(h.to, Z).then(v=>{
                Cn(v, 20) && !G.delta && G.type === li.pop && o.go(-1, !1)
            }
            ).catch(Vo),
            Promise.reject()) : (G.delta && o.go(-G.delta, !1),
            F(h, Z, Ee))).then(h=>{
                h = h || x(Z, Ee, !1),
                h && (G.delta && !Cn(h, 8) ? o.go(-G.delta, !1) : G.type === li.pop && Cn(h, 20) && o.go(-1, !1)),
                V(Z, Ee, h)
            }
            ).catch(Vo)
        }
        ))
    }
    let j = Oo(), M = Oo(), K;
    function F(B, ee, G) {
        H(B);
        const Z = M.list();
        return Z.length ? Z.forEach(me=>me(B, ee, G)) : console.error(B),
        Promise.reject(B)
    }
    function se() {
        return K && l.value !== Zt ? Promise.resolve() : new Promise((B,ee)=>{
            j.add([B, ee])
        }
        )
    }
    function H(B) {
        return K || (K = !B,
        Y(),
        j.list().forEach(([ee,G])=>B ? G(B) : ee()),
        j.reset()),
        B
    }
    function ae(B, ee, G, Z) {
        const {scrollBehavior: me} = e;
        if (!Gr || !me)
            return Promise.resolve();
        const Ee = !G && $S(Yf(B.fullPath, 0)) || (Z || !G) && history.state && history.state.scroll || null;
        return Ft().then(()=>me(B, ee, Ee)).then(h=>h && XS(h)).catch(h=>F(h, B, ee))
    }
    const ge = B=>o.go(B);
    let Ve;
    const je = new Set
      , nt = {
        currentRoute: l,
        listening: !0,
        addRoute: m,
        removeRoute: _,
        hasRoute: w,
        getRoutes: b,
        resolve: g,
        options: e,
        push: y,
        replace: S,
        go: ge,
        back: ()=>ge(-1),
        forward: ()=>ge(1),
        beforeEach: i.add,
        beforeResolve: s.add,
        afterEach: a.add,
        onError: M.add,
        isReady: se,
        install(B) {
            const ee = this;
            B.component("RouterLink", ww),
            B.component("RouterView", Km),
            B.config.globalProperties.$router = ee,
            Object.defineProperty(B.config.globalProperties, "$route", {
                enumerable: !0,
                get: ()=>z(l)
            }),
            Gr && !Ve && l.value === Zt && (Ve = !0,
            y(o.location).catch(me=>{}
            ));
            const G = {};
            for (const me in Zt)
                Object.defineProperty(G, me, {
                    get: ()=>l.value[me],
                    enumerable: !0
                });
            B.provide(tu, ee),
            B.provide(nu, So(G)),
            B.provide(Ul, l);
            const Z = B.unmount;
            je.add(B),
            B.unmount = function() {
                je.delete(B),
                je.size < 1 && (c = Zt,
                X && X(),
                X = null,
                l.value = Zt,
                Ve = !1,
                K = !1),
                Z()
            }
        }
    };
    function Je(B) {
        return B.reduce((ee,G)=>ee.then(()=>O(G)), Promise.resolve())
    }
    return nt
}
function Cw(e, t) {
    const n = []
      , r = []
      , o = []
      , i = Math.max(t.matched.length, e.matched.length);
    for (let s = 0; s < i; s++) {
        const a = t.matched[s];
        a && (e.matched.find(c=>ho(c, a)) ? r.push(a) : n.push(a));
        const l = e.matched[s];
        l && (t.matched.find(c=>ho(c, l)) || o.push(l))
    }
    return [n, r, o]
}
function Ow() {
    return gt(nu)
}
const Rw = (e,t)=>t.path.replace(/(:\w+)\([^)]+\)/g, "$1").replace(/(:\w+)[?+*]/g, "$1").replace(/:\w+/g, n=>{
    var r;
    return ((r = e.params[n.slice(1)]) == null ? void 0 : r.toString()) || ""
}
)
  , Vl = (e,t)=>{
    const n = e.route.matched.find(o=>{
        var i;
        return ((i = o.components) == null ? void 0 : i.default) === e.Component.type
    }
    )
      , r = t ?? (n == null ? void 0 : n.meta.key) ?? (n && Rw(e.route, n));
    return typeof r == "function" ? r(e.route) : r
}
  , Pw = (e,t)=>({
    default: ()=>e ? ot(Ev, e === !0 ? {} : e, t) : t
});
function ru(e) {
    return Array.isArray(e) ? e : [e]
}
const ke = null
  , Ae = null
  , Le = null
  , Ce = null
  , Oe = null
  , Re = null
  , Pe = null
  , Ie = null
  , Me = null
  , Ne = null
  , De = null
  , D = {
    layout: "main"
}
  , id = [{
    name: "clicker-airdrop___en",
    path: "/clicker/airdrop",
    meta: {},
    alias: [],
    redirect: ke == null ? void 0 : ke.redirect,
    component: ()=>C(()=>import("./airdrop.BD-byWYX.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-airdrop___es",
    path: "/es/clicker/airdrop",
    meta: {},
    alias: [],
    redirect: ke == null ? void 0 : ke.redirect,
    component: ()=>C(()=>import("./airdrop.BD-byWYX.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-airdrop___hi",
    path: "/hi/clicker/airdrop",
    meta: {},
    alias: [],
    redirect: ke == null ? void 0 : ke.redirect,
    component: ()=>C(()=>import("./airdrop.BD-byWYX.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-airdrop___id",
    path: "/id/clicker/airdrop",
    meta: {},
    alias: [],
    redirect: ke == null ? void 0 : ke.redirect,
    component: ()=>C(()=>import("./airdrop.BD-byWYX.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-airdrop___pt",
    path: "/pt/clicker/airdrop",
    meta: {},
    alias: [],
    redirect: ke == null ? void 0 : ke.redirect,
    component: ()=>C(()=>import("./airdrop.BD-byWYX.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-airdrop___ru",
    path: "/ru/clicker/airdrop",
    meta: {},
    alias: [],
    redirect: ke == null ? void 0 : ke.redirect,
    component: ()=>C(()=>import("./airdrop.BD-byWYX.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-airdrop___th",
    path: "/th/clicker/airdrop",
    meta: {},
    alias: [],
    redirect: ke == null ? void 0 : ke.redirect,
    component: ()=>C(()=>import("./airdrop.BD-byWYX.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-airdrop___tl",
    path: "/tl/clicker/airdrop",
    meta: {},
    alias: [],
    redirect: ke == null ? void 0 : ke.redirect,
    component: ()=>C(()=>import("./airdrop.BD-byWYX.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-airdrop___tr",
    path: "/tr/clicker/airdrop",
    meta: {},
    alias: [],
    redirect: ke == null ? void 0 : ke.redirect,
    component: ()=>C(()=>import("./airdrop.BD-byWYX.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-airdrop___vi",
    path: "/vi/clicker/airdrop",
    meta: {},
    alias: [],
    redirect: ke == null ? void 0 : ke.redirect,
    component: ()=>C(()=>import("./airdrop.BD-byWYX.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-airdrop___uz",
    path: "/uz/clicker/airdrop",
    meta: {},
    alias: [],
    redirect: ke == null ? void 0 : ke.redirect,
    component: ()=>C(()=>import("./airdrop.BD-byWYX.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-boost___en",
    path: "/clicker/boost",
    meta: {},
    alias: [],
    redirect: Ae == null ? void 0 : Ae.redirect,
    component: ()=>C(()=>import("./boost.BTsbowmt.js"), __vite__mapDeps([0, 1, 2, 3]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-boost___es",
    path: "/es/clicker/boost",
    meta: {},
    alias: [],
    redirect: Ae == null ? void 0 : Ae.redirect,
    component: ()=>C(()=>import("./boost.BTsbowmt.js"), __vite__mapDeps([0, 1, 2, 3]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-boost___hi",
    path: "/hi/clicker/boost",
    meta: {},
    alias: [],
    redirect: Ae == null ? void 0 : Ae.redirect,
    component: ()=>C(()=>import("./boost.BTsbowmt.js"), __vite__mapDeps([0, 1, 2, 3]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-boost___id",
    path: "/id/clicker/boost",
    meta: {},
    alias: [],
    redirect: Ae == null ? void 0 : Ae.redirect,
    component: ()=>C(()=>import("./boost.BTsbowmt.js"), __vite__mapDeps([0, 1, 2, 3]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-boost___pt",
    path: "/pt/clicker/boost",
    meta: {},
    alias: [],
    redirect: Ae == null ? void 0 : Ae.redirect,
    component: ()=>C(()=>import("./boost.BTsbowmt.js"), __vite__mapDeps([0, 1, 2, 3]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-boost___ru",
    path: "/ru/clicker/boost",
    meta: {},
    alias: [],
    redirect: Ae == null ? void 0 : Ae.redirect,
    component: ()=>C(()=>import("./boost.BTsbowmt.js"), __vite__mapDeps([0, 1, 2, 3]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-boost___th",
    path: "/th/clicker/boost",
    meta: {},
    alias: [],
    redirect: Ae == null ? void 0 : Ae.redirect,
    component: ()=>C(()=>import("./boost.BTsbowmt.js"), __vite__mapDeps([0, 1, 2, 3]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-boost___tl",
    path: "/tl/clicker/boost",
    meta: {},
    alias: [],
    redirect: Ae == null ? void 0 : Ae.redirect,
    component: ()=>C(()=>import("./boost.BTsbowmt.js"), __vite__mapDeps([0, 1, 2, 3]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-boost___tr",
    path: "/tr/clicker/boost",
    meta: {},
    alias: [],
    redirect: Ae == null ? void 0 : Ae.redirect,
    component: ()=>C(()=>import("./boost.BTsbowmt.js"), __vite__mapDeps([0, 1, 2, 3]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-boost___vi",
    path: "/vi/clicker/boost",
    meta: {},
    alias: [],
    redirect: Ae == null ? void 0 : Ae.redirect,
    component: ()=>C(()=>import("./boost.BTsbowmt.js"), __vite__mapDeps([0, 1, 2, 3]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-boost___uz",
    path: "/uz/clicker/boost",
    meta: {},
    alias: [],
    redirect: Ae == null ? void 0 : Ae.redirect,
    component: ()=>C(()=>import("./boost.BTsbowmt.js"), __vite__mapDeps([0, 1, 2, 3]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-earn___en",
    path: "/clicker/earn",
    meta: {},
    alias: [],
    redirect: Le == null ? void 0 : Le.redirect,
    component: ()=>C(()=>import("./earn.DFvntXns.js"), __vite__mapDeps([4, 5, 2, 6, 3]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-earn___es",
    path: "/es/clicker/earn",
    meta: {},
    alias: [],
    redirect: Le == null ? void 0 : Le.redirect,
    component: ()=>C(()=>import("./earn.DFvntXns.js"), __vite__mapDeps([4, 5, 2, 6, 3]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-earn___hi",
    path: "/hi/clicker/earn",
    meta: {},
    alias: [],
    redirect: Le == null ? void 0 : Le.redirect,
    component: ()=>C(()=>import("./earn.DFvntXns.js"), __vite__mapDeps([4, 5, 2, 6, 3]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-earn___id",
    path: "/id/clicker/earn",
    meta: {},
    alias: [],
    redirect: Le == null ? void 0 : Le.redirect,
    component: ()=>C(()=>import("./earn.DFvntXns.js"), __vite__mapDeps([4, 5, 2, 6, 3]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-earn___pt",
    path: "/pt/clicker/earn",
    meta: {},
    alias: [],
    redirect: Le == null ? void 0 : Le.redirect,
    component: ()=>C(()=>import("./earn.DFvntXns.js"), __vite__mapDeps([4, 5, 2, 6, 3]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-earn___ru",
    path: "/ru/clicker/earn",
    meta: {},
    alias: [],
    redirect: Le == null ? void 0 : Le.redirect,
    component: ()=>C(()=>import("./earn.DFvntXns.js"), __vite__mapDeps([4, 5, 2, 6, 3]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-earn___th",
    path: "/th/clicker/earn",
    meta: {},
    alias: [],
    redirect: Le == null ? void 0 : Le.redirect,
    component: ()=>C(()=>import("./earn.DFvntXns.js"), __vite__mapDeps([4, 5, 2, 6, 3]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-earn___tl",
    path: "/tl/clicker/earn",
    meta: {},
    alias: [],
    redirect: Le == null ? void 0 : Le.redirect,
    component: ()=>C(()=>import("./earn.DFvntXns.js"), __vite__mapDeps([4, 5, 2, 6, 3]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-earn___tr",
    path: "/tr/clicker/earn",
    meta: {},
    alias: [],
    redirect: Le == null ? void 0 : Le.redirect,
    component: ()=>C(()=>import("./earn.DFvntXns.js"), __vite__mapDeps([4, 5, 2, 6, 3]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-earn___vi",
    path: "/vi/clicker/earn",
    meta: {},
    alias: [],
    redirect: Le == null ? void 0 : Le.redirect,
    component: ()=>C(()=>import("./earn.DFvntXns.js"), __vite__mapDeps([4, 5, 2, 6, 3]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-earn___uz",
    path: "/uz/clicker/earn",
    meta: {},
    alias: [],
    redirect: Le == null ? void 0 : Le.redirect,
    component: ()=>C(()=>import("./earn.DFvntXns.js"), __vite__mapDeps([4, 5, 2, 6, 3]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-friends___en",
    path: "/clicker/friends",
    meta: {},
    alias: [],
    redirect: Ce == null ? void 0 : Ce.redirect,
    component: ()=>C(()=>import("./friends.BaLMyo6k.js"), __vite__mapDeps([7, 3, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-friends___es",
    path: "/es/clicker/friends",
    meta: {},
    alias: [],
    redirect: Ce == null ? void 0 : Ce.redirect,
    component: ()=>C(()=>import("./friends.BaLMyo6k.js"), __vite__mapDeps([7, 3, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-friends___hi",
    path: "/hi/clicker/friends",
    meta: {},
    alias: [],
    redirect: Ce == null ? void 0 : Ce.redirect,
    component: ()=>C(()=>import("./friends.BaLMyo6k.js"), __vite__mapDeps([7, 3, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-friends___id",
    path: "/id/clicker/friends",
    meta: {},
    alias: [],
    redirect: Ce == null ? void 0 : Ce.redirect,
    component: ()=>C(()=>import("./friends.BaLMyo6k.js"), __vite__mapDeps([7, 3, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-friends___pt",
    path: "/pt/clicker/friends",
    meta: {},
    alias: [],
    redirect: Ce == null ? void 0 : Ce.redirect,
    component: ()=>C(()=>import("./friends.BaLMyo6k.js"), __vite__mapDeps([7, 3, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-friends___ru",
    path: "/ru/clicker/friends",
    meta: {},
    alias: [],
    redirect: Ce == null ? void 0 : Ce.redirect,
    component: ()=>C(()=>import("./friends.BaLMyo6k.js"), __vite__mapDeps([7, 3, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-friends___th",
    path: "/th/clicker/friends",
    meta: {},
    alias: [],
    redirect: Ce == null ? void 0 : Ce.redirect,
    component: ()=>C(()=>import("./friends.BaLMyo6k.js"), __vite__mapDeps([7, 3, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-friends___tl",
    path: "/tl/clicker/friends",
    meta: {},
    alias: [],
    redirect: Ce == null ? void 0 : Ce.redirect,
    component: ()=>C(()=>import("./friends.BaLMyo6k.js"), __vite__mapDeps([7, 3, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-friends___tr",
    path: "/tr/clicker/friends",
    meta: {},
    alias: [],
    redirect: Ce == null ? void 0 : Ce.redirect,
    component: ()=>C(()=>import("./friends.BaLMyo6k.js"), __vite__mapDeps([7, 3, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-friends___vi",
    path: "/vi/clicker/friends",
    meta: {},
    alias: [],
    redirect: Ce == null ? void 0 : Ce.redirect,
    component: ()=>C(()=>import("./friends.BaLMyo6k.js"), __vite__mapDeps([7, 3, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-friends___uz",
    path: "/uz/clicker/friends",
    meta: {},
    alias: [],
    redirect: Ce == null ? void 0 : Ce.redirect,
    component: ()=>C(()=>import("./friends.BaLMyo6k.js"), __vite__mapDeps([7, 3, 2]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker___en",
    path: "/clicker",
    meta: {},
    alias: [],
    redirect: Oe == null ? void 0 : Oe.redirect,
    component: ()=>C(()=>import("./index.CDZPa_F4.js"), __vite__mapDeps([8, 2, 9, 10, 11, 6, 12, 13, 14, 1, 15]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker___es",
    path: "/es/clicker",
    meta: {},
    alias: [],
    redirect: Oe == null ? void 0 : Oe.redirect,
    component: ()=>C(()=>import("./index.CDZPa_F4.js"), __vite__mapDeps([8, 2, 9, 10, 11, 6, 12, 13, 14, 1, 15]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker___hi",
    path: "/hi/clicker",
    meta: {},
    alias: [],
    redirect: Oe == null ? void 0 : Oe.redirect,
    component: ()=>C(()=>import("./index.CDZPa_F4.js"), __vite__mapDeps([8, 2, 9, 10, 11, 6, 12, 13, 14, 1, 15]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker___id",
    path: "/id/clicker",
    meta: {},
    alias: [],
    redirect: Oe == null ? void 0 : Oe.redirect,
    component: ()=>C(()=>import("./index.CDZPa_F4.js"), __vite__mapDeps([8, 2, 9, 10, 11, 6, 12, 13, 14, 1, 15]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker___pt",
    path: "/pt/clicker",
    meta: {},
    alias: [],
    redirect: Oe == null ? void 0 : Oe.redirect,
    component: ()=>C(()=>import("./index.CDZPa_F4.js"), __vite__mapDeps([8, 2, 9, 10, 11, 6, 12, 13, 14, 1, 15]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker___ru",
    path: "/ru/clicker",
    meta: {},
    alias: [],
    redirect: Oe == null ? void 0 : Oe.redirect,
    component: ()=>C(()=>import("./index.CDZPa_F4.js"), __vite__mapDeps([8, 2, 9, 10, 11, 6, 12, 13, 14, 1, 15]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker___th",
    path: "/th/clicker",
    meta: {},
    alias: [],
    redirect: Oe == null ? void 0 : Oe.redirect,
    component: ()=>C(()=>import("./index.CDZPa_F4.js"), __vite__mapDeps([8, 2, 9, 10, 11, 6, 12, 13, 14, 1, 15]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker___tl",
    path: "/tl/clicker",
    meta: {},
    alias: [],
    redirect: Oe == null ? void 0 : Oe.redirect,
    component: ()=>C(()=>import("./index.CDZPa_F4.js"), __vite__mapDeps([8, 2, 9, 10, 11, 6, 12, 13, 14, 1, 15]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker___tr",
    path: "/tr/clicker",
    meta: {},
    alias: [],
    redirect: Oe == null ? void 0 : Oe.redirect,
    component: ()=>C(()=>import("./index.CDZPa_F4.js"), __vite__mapDeps([8, 2, 9, 10, 11, 6, 12, 13, 14, 1, 15]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker___vi",
    path: "/vi/clicker",
    meta: {},
    alias: [],
    redirect: Oe == null ? void 0 : Oe.redirect,
    component: ()=>C(()=>import("./index.CDZPa_F4.js"), __vite__mapDeps([8, 2, 9, 10, 11, 6, 12, 13, 14, 1, 15]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker___uz",
    path: "/uz/clicker",
    meta: {},
    alias: [],
    redirect: Oe == null ? void 0 : Oe.redirect,
    component: ()=>C(()=>import("./index.CDZPa_F4.js"), __vite__mapDeps([8, 2, 9, 10, 11, 6, 12, 13, 14, 1, 15]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-league___en",
    path: "/clicker/league",
    meta: {},
    alias: [],
    redirect: Re == null ? void 0 : Re.redirect,
    component: ()=>C(()=>import("./index.BYFBRsnz.js"), __vite__mapDeps([16, 3, 9, 2, 10, 11]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-league___es",
    path: "/es/clicker/league",
    meta: {},
    alias: [],
    redirect: Re == null ? void 0 : Re.redirect,
    component: ()=>C(()=>import("./index.BYFBRsnz.js"), __vite__mapDeps([16, 3, 9, 2, 10, 11]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-league___hi",
    path: "/hi/clicker/league",
    meta: {},
    alias: [],
    redirect: Re == null ? void 0 : Re.redirect,
    component: ()=>C(()=>import("./index.BYFBRsnz.js"), __vite__mapDeps([16, 3, 9, 2, 10, 11]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-league___id",
    path: "/id/clicker/league",
    meta: {},
    alias: [],
    redirect: Re == null ? void 0 : Re.redirect,
    component: ()=>C(()=>import("./index.BYFBRsnz.js"), __vite__mapDeps([16, 3, 9, 2, 10, 11]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-league___pt",
    path: "/pt/clicker/league",
    meta: {},
    alias: [],
    redirect: Re == null ? void 0 : Re.redirect,
    component: ()=>C(()=>import("./index.BYFBRsnz.js"), __vite__mapDeps([16, 3, 9, 2, 10, 11]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-league___ru",
    path: "/ru/clicker/league",
    meta: {},
    alias: [],
    redirect: Re == null ? void 0 : Re.redirect,
    component: ()=>C(()=>import("./index.BYFBRsnz.js"), __vite__mapDeps([16, 3, 9, 2, 10, 11]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-league___th",
    path: "/th/clicker/league",
    meta: {},
    alias: [],
    redirect: Re == null ? void 0 : Re.redirect,
    component: ()=>C(()=>import("./index.BYFBRsnz.js"), __vite__mapDeps([16, 3, 9, 2, 10, 11]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-league___tl",
    path: "/tl/clicker/league",
    meta: {},
    alias: [],
    redirect: Re == null ? void 0 : Re.redirect,
    component: ()=>C(()=>import("./index.BYFBRsnz.js"), __vite__mapDeps([16, 3, 9, 2, 10, 11]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-league___tr",
    path: "/tr/clicker/league",
    meta: {},
    alias: [],
    redirect: Re == null ? void 0 : Re.redirect,
    component: ()=>C(()=>import("./index.BYFBRsnz.js"), __vite__mapDeps([16, 3, 9, 2, 10, 11]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-league___vi",
    path: "/vi/clicker/league",
    meta: {},
    alias: [],
    redirect: Re == null ? void 0 : Re.redirect,
    component: ()=>C(()=>import("./index.BYFBRsnz.js"), __vite__mapDeps([16, 3, 9, 2, 10, 11]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-league___uz",
    path: "/uz/clicker/league",
    meta: {},
    alias: [],
    redirect: Re == null ? void 0 : Re.redirect,
    component: ()=>C(()=>import("./index.BYFBRsnz.js"), __vite__mapDeps([16, 3, 9, 2, 10, 11]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-mine___en",
    path: "/clicker/mine",
    meta: {},
    alias: [],
    redirect: Pe == null ? void 0 : Pe.redirect,
    component: ()=>C(()=>import("./mine.B1P0P3_v.js"), __vite__mapDeps([17, 12, 2, 13, 14, 1, 3]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-mine___es",
    path: "/es/clicker/mine",
    meta: {},
    alias: [],
    redirect: Pe == null ? void 0 : Pe.redirect,
    component: ()=>C(()=>import("./mine.B1P0P3_v.js"), __vite__mapDeps([17, 12, 2, 13, 14, 1, 3]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-mine___hi",
    path: "/hi/clicker/mine",
    meta: {},
    alias: [],
    redirect: Pe == null ? void 0 : Pe.redirect,
    component: ()=>C(()=>import("./mine.B1P0P3_v.js"), __vite__mapDeps([17, 12, 2, 13, 14, 1, 3]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-mine___id",
    path: "/id/clicker/mine",
    meta: {},
    alias: [],
    redirect: Pe == null ? void 0 : Pe.redirect,
    component: ()=>C(()=>import("./mine.B1P0P3_v.js"), __vite__mapDeps([17, 12, 2, 13, 14, 1, 3]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-mine___pt",
    path: "/pt/clicker/mine",
    meta: {},
    alias: [],
    redirect: Pe == null ? void 0 : Pe.redirect,
    component: ()=>C(()=>import("./mine.B1P0P3_v.js"), __vite__mapDeps([17, 12, 2, 13, 14, 1, 3]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-mine___ru",
    path: "/ru/clicker/mine",
    meta: {},
    alias: [],
    redirect: Pe == null ? void 0 : Pe.redirect,
    component: ()=>C(()=>import("./mine.B1P0P3_v.js"), __vite__mapDeps([17, 12, 2, 13, 14, 1, 3]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-mine___th",
    path: "/th/clicker/mine",
    meta: {},
    alias: [],
    redirect: Pe == null ? void 0 : Pe.redirect,
    component: ()=>C(()=>import("./mine.B1P0P3_v.js"), __vite__mapDeps([17, 12, 2, 13, 14, 1, 3]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-mine___tl",
    path: "/tl/clicker/mine",
    meta: {},
    alias: [],
    redirect: Pe == null ? void 0 : Pe.redirect,
    component: ()=>C(()=>import("./mine.B1P0P3_v.js"), __vite__mapDeps([17, 12, 2, 13, 14, 1, 3]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-mine___tr",
    path: "/tr/clicker/mine",
    meta: {},
    alias: [],
    redirect: Pe == null ? void 0 : Pe.redirect,
    component: ()=>C(()=>import("./mine.B1P0P3_v.js"), __vite__mapDeps([17, 12, 2, 13, 14, 1, 3]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-mine___vi",
    path: "/vi/clicker/mine",
    meta: {},
    alias: [],
    redirect: Pe == null ? void 0 : Pe.redirect,
    component: ()=>C(()=>import("./mine.B1P0P3_v.js"), __vite__mapDeps([17, 12, 2, 13, 14, 1, 3]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-mine___uz",
    path: "/uz/clicker/mine",
    meta: {},
    alias: [],
    redirect: Pe == null ? void 0 : Pe.redirect,
    component: ()=>C(()=>import("./mine.B1P0P3_v.js"), __vite__mapDeps([17, 12, 2, 13, 14, 1, 3]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-bingx___en",
    path: "/clicker/settings/bingx",
    meta: {},
    alias: [],
    redirect: Ie == null ? void 0 : Ie.redirect,
    component: ()=>C(()=>import("./bingx.DK3AuM5N.js"), __vite__mapDeps([18, 3, 9, 2, 13]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-bingx___es",
    path: "/es/clicker/settings/bingx",
    meta: {},
    alias: [],
    redirect: Ie == null ? void 0 : Ie.redirect,
    component: ()=>C(()=>import("./bingx.DK3AuM5N.js"), __vite__mapDeps([18, 3, 9, 2, 13]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-bingx___hi",
    path: "/hi/clicker/settings/bingx",
    meta: {},
    alias: [],
    redirect: Ie == null ? void 0 : Ie.redirect,
    component: ()=>C(()=>import("./bingx.DK3AuM5N.js"), __vite__mapDeps([18, 3, 9, 2, 13]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-bingx___id",
    path: "/id/clicker/settings/bingx",
    meta: {},
    alias: [],
    redirect: Ie == null ? void 0 : Ie.redirect,
    component: ()=>C(()=>import("./bingx.DK3AuM5N.js"), __vite__mapDeps([18, 3, 9, 2, 13]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-bingx___pt",
    path: "/pt/clicker/settings/bingx",
    meta: {},
    alias: [],
    redirect: Ie == null ? void 0 : Ie.redirect,
    component: ()=>C(()=>import("./bingx.DK3AuM5N.js"), __vite__mapDeps([18, 3, 9, 2, 13]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-bingx___ru",
    path: "/ru/clicker/settings/bingx",
    meta: {},
    alias: [],
    redirect: Ie == null ? void 0 : Ie.redirect,
    component: ()=>C(()=>import("./bingx.DK3AuM5N.js"), __vite__mapDeps([18, 3, 9, 2, 13]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-bingx___th",
    path: "/th/clicker/settings/bingx",
    meta: {},
    alias: [],
    redirect: Ie == null ? void 0 : Ie.redirect,
    component: ()=>C(()=>import("./bingx.DK3AuM5N.js"), __vite__mapDeps([18, 3, 9, 2, 13]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-bingx___tl",
    path: "/tl/clicker/settings/bingx",
    meta: {},
    alias: [],
    redirect: Ie == null ? void 0 : Ie.redirect,
    component: ()=>C(()=>import("./bingx.DK3AuM5N.js"), __vite__mapDeps([18, 3, 9, 2, 13]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-bingx___tr",
    path: "/tr/clicker/settings/bingx",
    meta: {},
    alias: [],
    redirect: Ie == null ? void 0 : Ie.redirect,
    component: ()=>C(()=>import("./bingx.DK3AuM5N.js"), __vite__mapDeps([18, 3, 9, 2, 13]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-bingx___vi",
    path: "/vi/clicker/settings/bingx",
    meta: {},
    alias: [],
    redirect: Ie == null ? void 0 : Ie.redirect,
    component: ()=>C(()=>import("./bingx.DK3AuM5N.js"), __vite__mapDeps([18, 3, 9, 2, 13]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-bingx___uz",
    path: "/uz/clicker/settings/bingx",
    meta: {},
    alias: [],
    redirect: Ie == null ? void 0 : Ie.redirect,
    component: ()=>C(()=>import("./bingx.DK3AuM5N.js"), __vite__mapDeps([18, 3, 9, 2, 13]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-exchange___en",
    path: "/clicker/settings/exchange",
    meta: {},
    alias: [],
    redirect: Me == null ? void 0 : Me.redirect,
    component: ()=>C(()=>import("./exchange.3Ns99bV-.js"), __vite__mapDeps([19, 9]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-exchange___es",
    path: "/es/clicker/settings/exchange",
    meta: {},
    alias: [],
    redirect: Me == null ? void 0 : Me.redirect,
    component: ()=>C(()=>import("./exchange.3Ns99bV-.js"), __vite__mapDeps([19, 9]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-exchange___hi",
    path: "/hi/clicker/settings/exchange",
    meta: {},
    alias: [],
    redirect: Me == null ? void 0 : Me.redirect,
    component: ()=>C(()=>import("./exchange.3Ns99bV-.js"), __vite__mapDeps([19, 9]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-exchange___id",
    path: "/id/clicker/settings/exchange",
    meta: {},
    alias: [],
    redirect: Me == null ? void 0 : Me.redirect,
    component: ()=>C(()=>import("./exchange.3Ns99bV-.js"), __vite__mapDeps([19, 9]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-exchange___pt",
    path: "/pt/clicker/settings/exchange",
    meta: {},
    alias: [],
    redirect: Me == null ? void 0 : Me.redirect,
    component: ()=>C(()=>import("./exchange.3Ns99bV-.js"), __vite__mapDeps([19, 9]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-exchange___ru",
    path: "/ru/clicker/settings/exchange",
    meta: {},
    alias: [],
    redirect: Me == null ? void 0 : Me.redirect,
    component: ()=>C(()=>import("./exchange.3Ns99bV-.js"), __vite__mapDeps([19, 9]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-exchange___th",
    path: "/th/clicker/settings/exchange",
    meta: {},
    alias: [],
    redirect: Me == null ? void 0 : Me.redirect,
    component: ()=>C(()=>import("./exchange.3Ns99bV-.js"), __vite__mapDeps([19, 9]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-exchange___tl",
    path: "/tl/clicker/settings/exchange",
    meta: {},
    alias: [],
    redirect: Me == null ? void 0 : Me.redirect,
    component: ()=>C(()=>import("./exchange.3Ns99bV-.js"), __vite__mapDeps([19, 9]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-exchange___tr",
    path: "/tr/clicker/settings/exchange",
    meta: {},
    alias: [],
    redirect: Me == null ? void 0 : Me.redirect,
    component: ()=>C(()=>import("./exchange.3Ns99bV-.js"), __vite__mapDeps([19, 9]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-exchange___vi",
    path: "/vi/clicker/settings/exchange",
    meta: {},
    alias: [],
    redirect: Me == null ? void 0 : Me.redirect,
    component: ()=>C(()=>import("./exchange.3Ns99bV-.js"), __vite__mapDeps([19, 9]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-exchange___uz",
    path: "/uz/clicker/settings/exchange",
    meta: {},
    alias: [],
    redirect: Me == null ? void 0 : Me.redirect,
    component: ()=>C(()=>import("./exchange.3Ns99bV-.js"), __vite__mapDeps([19, 9]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings___en",
    path: "/clicker/settings",
    meta: {},
    alias: [],
    redirect: Ne == null ? void 0 : Ne.redirect,
    component: ()=>C(()=>import("./index.BAM75Bwm.js"), __vite__mapDeps([20, 13, 14]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings___es",
    path: "/es/clicker/settings",
    meta: {},
    alias: [],
    redirect: Ne == null ? void 0 : Ne.redirect,
    component: ()=>C(()=>import("./index.BAM75Bwm.js"), __vite__mapDeps([20, 13, 14]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings___hi",
    path: "/hi/clicker/settings",
    meta: {},
    alias: [],
    redirect: Ne == null ? void 0 : Ne.redirect,
    component: ()=>C(()=>import("./index.BAM75Bwm.js"), __vite__mapDeps([20, 13, 14]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings___id",
    path: "/id/clicker/settings",
    meta: {},
    alias: [],
    redirect: Ne == null ? void 0 : Ne.redirect,
    component: ()=>C(()=>import("./index.BAM75Bwm.js"), __vite__mapDeps([20, 13, 14]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings___pt",
    path: "/pt/clicker/settings",
    meta: {},
    alias: [],
    redirect: Ne == null ? void 0 : Ne.redirect,
    component: ()=>C(()=>import("./index.BAM75Bwm.js"), __vite__mapDeps([20, 13, 14]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings___ru",
    path: "/ru/clicker/settings",
    meta: {},
    alias: [],
    redirect: Ne == null ? void 0 : Ne.redirect,
    component: ()=>C(()=>import("./index.BAM75Bwm.js"), __vite__mapDeps([20, 13, 14]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings___th",
    path: "/th/clicker/settings",
    meta: {},
    alias: [],
    redirect: Ne == null ? void 0 : Ne.redirect,
    component: ()=>C(()=>import("./index.BAM75Bwm.js"), __vite__mapDeps([20, 13, 14]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings___tl",
    path: "/tl/clicker/settings",
    meta: {},
    alias: [],
    redirect: Ne == null ? void 0 : Ne.redirect,
    component: ()=>C(()=>import("./index.BAM75Bwm.js"), __vite__mapDeps([20, 13, 14]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings___tr",
    path: "/tr/clicker/settings",
    meta: {},
    alias: [],
    redirect: Ne == null ? void 0 : Ne.redirect,
    component: ()=>C(()=>import("./index.BAM75Bwm.js"), __vite__mapDeps([20, 13, 14]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings___vi",
    path: "/vi/clicker/settings",
    meta: {},
    alias: [],
    redirect: Ne == null ? void 0 : Ne.redirect,
    component: ()=>C(()=>import("./index.BAM75Bwm.js"), __vite__mapDeps([20, 13, 14]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings___uz",
    path: "/uz/clicker/settings",
    meta: {},
    alias: [],
    redirect: Ne == null ? void 0 : Ne.redirect,
    component: ()=>C(()=>import("./index.BAM75Bwm.js"), __vite__mapDeps([20, 13, 14]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-language___en",
    path: "/clicker/settings/language",
    meta: {},
    alias: [],
    redirect: De == null ? void 0 : De.redirect,
    component: ()=>C(()=>import("./language.GTFg-aQK.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-language___es",
    path: "/es/clicker/settings/language",
    meta: {},
    alias: [],
    redirect: De == null ? void 0 : De.redirect,
    component: ()=>C(()=>import("./language.GTFg-aQK.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-language___hi",
    path: "/hi/clicker/settings/language",
    meta: {},
    alias: [],
    redirect: De == null ? void 0 : De.redirect,
    component: ()=>C(()=>import("./language.GTFg-aQK.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-language___id",
    path: "/id/clicker/settings/language",
    meta: {},
    alias: [],
    redirect: De == null ? void 0 : De.redirect,
    component: ()=>C(()=>import("./language.GTFg-aQK.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-language___pt",
    path: "/pt/clicker/settings/language",
    meta: {},
    alias: [],
    redirect: De == null ? void 0 : De.redirect,
    component: ()=>C(()=>import("./language.GTFg-aQK.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-language___ru",
    path: "/ru/clicker/settings/language",
    meta: {},
    alias: [],
    redirect: De == null ? void 0 : De.redirect,
    component: ()=>C(()=>import("./language.GTFg-aQK.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-language___th",
    path: "/th/clicker/settings/language",
    meta: {},
    alias: [],
    redirect: De == null ? void 0 : De.redirect,
    component: ()=>C(()=>import("./language.GTFg-aQK.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-language___tl",
    path: "/tl/clicker/settings/language",
    meta: {},
    alias: [],
    redirect: De == null ? void 0 : De.redirect,
    component: ()=>C(()=>import("./language.GTFg-aQK.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-language___tr",
    path: "/tr/clicker/settings/language",
    meta: {},
    alias: [],
    redirect: De == null ? void 0 : De.redirect,
    component: ()=>C(()=>import("./language.GTFg-aQK.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-language___vi",
    path: "/vi/clicker/settings/language",
    meta: {},
    alias: [],
    redirect: De == null ? void 0 : De.redirect,
    component: ()=>C(()=>import("./language.GTFg-aQK.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}, {
    name: "clicker-settings-language___uz",
    path: "/uz/clicker/settings/language",
    meta: {},
    alias: [],
    redirect: De == null ? void 0 : De.redirect,
    component: ()=>C(()=>import("./language.GTFg-aQK.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}, {
    name: (D == null ? void 0 : D.name) ?? "index___en",
    path: (D == null ? void 0 : D.path) ?? "/",
    meta: D || {},
    alias: (D == null ? void 0 : D.alias) || [],
    redirect: D == null ? void 0 : D.redirect,
    component: ()=>C(()=>import("./index.DA075uC-.js"), __vite__mapDeps([21, 9]), import.meta.url).then(e=>e.default || e)
}, {
    name: (D == null ? void 0 : D.name) ?? "index___es",
    path: (D == null ? void 0 : D.path) ?? "/es",
    meta: D || {},
    alias: (D == null ? void 0 : D.alias) || [],
    redirect: D == null ? void 0 : D.redirect,
    component: ()=>C(()=>import("./index.DA075uC-.js"), __vite__mapDeps([21, 9]), import.meta.url).then(e=>e.default || e)
}, {
    name: (D == null ? void 0 : D.name) ?? "index___hi",
    path: (D == null ? void 0 : D.path) ?? "/hi",
    meta: D || {},
    alias: (D == null ? void 0 : D.alias) || [],
    redirect: D == null ? void 0 : D.redirect,
    component: ()=>C(()=>import("./index.DA075uC-.js"), __vite__mapDeps([21, 9]), import.meta.url).then(e=>e.default || e)
}, {
    name: (D == null ? void 0 : D.name) ?? "index___id",
    path: (D == null ? void 0 : D.path) ?? "/id",
    meta: D || {},
    alias: (D == null ? void 0 : D.alias) || [],
    redirect: D == null ? void 0 : D.redirect,
    component: ()=>C(()=>import("./index.DA075uC-.js"), __vite__mapDeps([21, 9]), import.meta.url).then(e=>e.default || e)
}, {
    name: (D == null ? void 0 : D.name) ?? "index___pt",
    path: (D == null ? void 0 : D.path) ?? "/pt",
    meta: D || {},
    alias: (D == null ? void 0 : D.alias) || [],
    redirect: D == null ? void 0 : D.redirect,
    component: ()=>C(()=>import("./index.DA075uC-.js"), __vite__mapDeps([21, 9]), import.meta.url).then(e=>e.default || e)
}, {
    name: (D == null ? void 0 : D.name) ?? "index___ru",
    path: (D == null ? void 0 : D.path) ?? "/ru",
    meta: D || {},
    alias: (D == null ? void 0 : D.alias) || [],
    redirect: D == null ? void 0 : D.redirect,
    component: ()=>C(()=>import("./index.DA075uC-.js"), __vite__mapDeps([21, 9]), import.meta.url).then(e=>e.default || e)
}, {
    name: (D == null ? void 0 : D.name) ?? "index___th",
    path: (D == null ? void 0 : D.path) ?? "/th",
    meta: D || {},
    alias: (D == null ? void 0 : D.alias) || [],
    redirect: D == null ? void 0 : D.redirect,
    component: ()=>C(()=>import("./index.DA075uC-.js"), __vite__mapDeps([21, 9]), import.meta.url).then(e=>e.default || e)
}, {
    name: (D == null ? void 0 : D.name) ?? "index___tl",
    path: (D == null ? void 0 : D.path) ?? "/tl",
    meta: D || {},
    alias: (D == null ? void 0 : D.alias) || [],
    redirect: D == null ? void 0 : D.redirect,
    component: ()=>C(()=>import("./index.DA075uC-.js"), __vite__mapDeps([21, 9]), import.meta.url).then(e=>e.default || e)
}, {
    name: (D == null ? void 0 : D.name) ?? "index___tr",
    path: (D == null ? void 0 : D.path) ?? "/tr",
    meta: D || {},
    alias: (D == null ? void 0 : D.alias) || [],
    redirect: D == null ? void 0 : D.redirect,
    component: ()=>C(()=>import("./index.DA075uC-.js"), __vite__mapDeps([21, 9]), import.meta.url).then(e=>e.default || e)
}, {
    name: (D == null ? void 0 : D.name) ?? "index___vi",
    path: (D == null ? void 0 : D.path) ?? "/vi",
    meta: D || {},
    alias: (D == null ? void 0 : D.alias) || [],
    redirect: D == null ? void 0 : D.redirect,
    component: ()=>C(()=>import("./index.DA075uC-.js"), __vite__mapDeps([21, 9]), import.meta.url).then(e=>e.default || e)
}, {
    name: (D == null ? void 0 : D.name) ?? "index___uz",
    path: (D == null ? void 0 : D.path) ?? "/uz",
    meta: D || {},
    alias: (D == null ? void 0 : D.alias) || [],
    redirect: D == null ? void 0 : D.redirect,
    component: ()=>C(()=>import("./index.DA075uC-.js"), __vite__mapDeps([21, 9]), import.meta.url).then(e=>e.default || e)
}]
  , qm = (e,t,n)=>(t = t === !0 ? {} : t,
{
    default: ()=>{
        var r;
        return t ? ot(e, t, n) : (r = n.default) == null ? void 0 : r.call(n)
    }
});
function sd(e) {
    const t = (e == null ? void 0 : e.meta.key) ?? e.path.replace(/(:\w+)\([^)]+\)/g, "$1").replace(/(:\w+)[?+*]/g, "$1").replace(/:\w+/g, n=>{
        var r;
        return ((r = e.params[n.slice(1)]) == null ? void 0 : r.toString()) || ""
    }
    );
    return typeof t == "function" ? t(e) : t
}
function Iw(e, t) {
    return e === t || t === Zt ? !1 : sd(e) !== sd(t) ? !0 : !e.matched.every((r,o)=>{
        var i, s;
        return r.components && r.components.default === ((s = (i = t.matched[o]) == null ? void 0 : i.components) == null ? void 0 : s.default)
    }
    )
}
const Mw = {
    scrollBehavior(e, t, n) {
        var c;
        const r = ne()
          , o = ((c = Mt().options) == null ? void 0 : c.scrollBehaviorType) ?? "auto";
        let i = n || void 0;
        const s = typeof e.meta.scrollToTop == "function" ? e.meta.scrollToTop(e, t) : e.meta.scrollToTop;
        if (!i && t && e && s !== !1 && Iw(e, t) && (i = {
            left: 0,
            top: 0
        }),
        e.path === t.path)
            return t.hash && !e.hash ? {
                left: 0,
                top: 0
            } : e.hash ? {
                el: e.hash,
                top: ad(e.hash),
                behavior: o
            } : !1;
        const a = u=>!!(u.meta.pageTransition ?? Dl)
          , l = a(t) && a(e) ? "page:transition:finish" : "page:finish";
        return new Promise(u=>{
            r.hooks.hookOnce(l, async()=>{
                await new Promise(f=>setTimeout(f, 0)),
                e.hash && (i = {
                    el: e.hash,
                    top: ad(e.hash),
                    behavior: o
                }),
                u(i)
            }
            )
        }
        )
    }
};
function ad(e) {
    try {
        const t = document.querySelector(e);
        if (t)
            return parseFloat(getComputedStyle(t).scrollMarginTop)
    } catch {}
    return 0
}
const Nw = {
    hashMode: !1,
    scrollBehaviorType: "auto"
}
  , Dt = {
    ...Nw,
    ...Mw
}
  , Dw = async e=>{
    var l;
    let t, n;
    if (!((l = e.meta) != null && l.validate))
        return;
    const r = ne()
      , o = Mt();
    if (([t,n] = _n(()=>Promise.resolve(e.meta.validate(e))),
    t = await t,
    n(),
    t) === !0)
        return;
    const s = na({
        statusCode: 404,
        statusMessage: `Page Not Found: ${e.fullPath}`,
        data: {
            path: e.fullPath
        }
    })
      , a = o.beforeResolve(c=>{
        if (a(),
        c === e) {
            const u = o.afterEach(async()=>{
                u(),
                await r.runWithContext(()=>Zr(s)),
                window.history.pushState({}, "", e.fullPath)
            }
            );
            return !1
        }
    }
    )
}
  , mn = window.setInterval;
/*!
  * shared v9.9.1
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */
const Cs = typeof window < "u"
  , pr = (e,t=!1)=>t ? Symbol.for(e) : Symbol(e)
  , xw = (e,t,n)=>Fw({
    l: e,
    k: t,
    s: n
})
  , Fw = e=>JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027")
  , mt = e=>typeof e == "number" && isFinite(e)
  , Uw = e=>Wm(e) === "[object Date]"
  , Os = e=>Wm(e) === "[object RegExp]"
  , ia = e=>we(e) && Object.keys(e).length === 0
  , it = Object.assign;
let ld;
const ou = ()=>ld || (ld = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function cd(e) {
    return e.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;")
}
const Vw = Object.prototype.hasOwnProperty;
function Rs(e, t) {
    return Vw.call(e, t)
}
const rt = Array.isArray
  , qe = e=>typeof e == "function"
  , te = e=>typeof e == "string"
  , $e = e=>typeof e == "boolean"
  , Bw = e=>typeof e == "symbol"
  , be = e=>e !== null && typeof e == "object"
  , Hw = e=>be(e) && qe(e.then) && qe(e.catch)
  , Ym = Object.prototype.toString
  , Wm = e=>Ym.call(e)
  , we = e=>{
    if (!be(e))
        return !1;
    const t = Object.getPrototypeOf(e);
    return t === null || t.constructor === Object
}
  , jw = e=>e == null ? "" : rt(e) || we(e) && e.toString === Ym ? JSON.stringify(e, null, 2) : String(e);
function iu(e, t="") {
    return e.reduce((n,r,o)=>o === 0 ? n + r : n + t + r, "")
}
function su(e) {
    let t = e;
    return ()=>++t
}
function Kw(e, t) {
    typeof console < "u" && (console.warn("[intlify] " + e),
    t && console.warn(t.stack))
}
const Xi = e=>!be(e) || rt(e);
function Dr(e, t) {
    if (Xi(e) || Xi(t))
        throw new Error("Invalid value");
    const n = [{
        src: e,
        des: t
    }];
    for (; n.length; ) {
        const {src: r, des: o} = n.pop();
        Object.keys(r).forEach(i=>{
            Xi(r[i]) || Xi(o[i]) ? o[i] = r[i] : n.push({
                src: r[i],
                des: o[i]
            })
        }
        )
    }
}
/*!
  * message-compiler v9.9.1
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */
function qw(e, t, n) {
    return {
        line: e,
        column: t,
        offset: n
    }
}
function Bl(e, t, n) {
    const r = {
        start: e,
        end: t
    };
    return n != null && (r.source = n),
    r
}
const He = {
    EXPECTED_TOKEN: 1,
    INVALID_TOKEN_IN_PLACEHOLDER: 2,
    UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER: 3,
    UNKNOWN_ESCAPE_SEQUENCE: 4,
    INVALID_UNICODE_ESCAPE_SEQUENCE: 5,
    UNBALANCED_CLOSING_BRACE: 6,
    UNTERMINATED_CLOSING_BRACE: 7,
    EMPTY_PLACEHOLDER: 8,
    NOT_ALLOW_NEST_PLACEHOLDER: 9,
    INVALID_LINKED_FORMAT: 10,
    MUST_HAVE_MESSAGES_IN_PLURAL: 11,
    UNEXPECTED_EMPTY_LINKED_MODIFIER: 12,
    UNEXPECTED_EMPTY_LINKED_KEY: 13,
    UNEXPECTED_LEXICAL_ANALYSIS: 14,
    UNHANDLED_CODEGEN_NODE_TYPE: 15,
    UNHANDLED_MINIFIER_NODE_TYPE: 16,
    __EXTEND_POINT__: 17
};
function sa(e, t, n={}) {
    const {domain: r, messages: o, args: i} = n
      , s = e
      , a = new SyntaxError(String(s));
    return a.code = e,
    t && (a.location = t),
    a.domain = r,
    a
}
function Yw(e) {
    throw e
}
const On = " "
  , Ww = "\r"
  , Tt = `
`
  , Jw = "\u2028"
  , zw = "\u2029";
function Gw(e) {
    const t = e;
    let n = 0
      , r = 1
      , o = 1
      , i = 0;
    const s = A=>t[A] === Ww && t[A + 1] === Tt
      , a = A=>t[A] === Tt
      , l = A=>t[A] === zw
      , c = A=>t[A] === Jw
      , u = A=>s(A) || a(A) || l(A) || c(A)
      , f = ()=>n
      , d = ()=>r
      , m = ()=>o
      , _ = ()=>i
      , b = A=>s(A) || l(A) || c(A) ? Tt : t[A]
      , w = ()=>b(n)
      , g = ()=>b(n + i);
    function E() {
        return i = 0,
        u(n) && (r++,
        o = 0),
        s(n) && n++,
        n++,
        o++,
        t[n]
    }
    function p() {
        return s(n + i) && i++,
        i++,
        t[n + i]
    }
    function y() {
        n = 0,
        r = 1,
        o = 1,
        i = 0
    }
    function S(A=0) {
        i = A
    }
    function T() {
        const A = n + i;
        for (; A !== n; )
            E();
        i = 0
    }
    return {
        index: f,
        line: d,
        column: m,
        peekOffset: _,
        charAt: b,
        currentChar: w,
        currentPeek: g,
        next: E,
        peek: p,
        reset: y,
        resetPeek: S,
        skipToPeek: T
    }
}
const Jn = void 0
  , Qw = "."
  , ud = "'"
  , Xw = "tokenizer";
function Zw(e, t={}) {
    const n = t.location !== !1
      , r = Gw(e)
      , o = ()=>r.index()
      , i = ()=>qw(r.line(), r.column(), r.index())
      , s = i()
      , a = o()
      , l = {
        currentType: 14,
        offset: a,
        startLoc: s,
        endLoc: s,
        lastType: 14,
        lastOffset: a,
        lastStartLoc: s,
        lastEndLoc: s,
        braceNest: 0,
        inLinked: !1,
        text: ""
    }
      , c = ()=>l
      , {onError: u} = t;
    function f(h, v, k, ...R) {
        const N = c();
        if (v.column += k,
        v.offset += k,
        u) {
            const q = n ? Bl(N.startLoc, v) : null
              , Q = sa(h, q, {
                domain: Xw,
                args: R
            });
            u(Q)
        }
    }
    function d(h, v, k) {
        h.endLoc = i(),
        h.currentType = v;
        const R = {
            type: v
        };
        return n && (R.loc = Bl(h.startLoc, h.endLoc)),
        k != null && (R.value = k),
        R
    }
    const m = h=>d(h, 14);
    function _(h, v) {
        return h.currentChar() === v ? (h.next(),
        v) : (f(He.EXPECTED_TOKEN, i(), 0, v),
        "")
    }
    function b(h) {
        let v = "";
        for (; h.currentPeek() === On || h.currentPeek() === Tt; )
            v += h.currentPeek(),
            h.peek();
        return v
    }
    function w(h) {
        const v = b(h);
        return h.skipToPeek(),
        v
    }
    function g(h) {
        if (h === Jn)
            return !1;
        const v = h.charCodeAt(0);
        return v >= 97 && v <= 122 || v >= 65 && v <= 90 || v === 95
    }
    function E(h) {
        if (h === Jn)
            return !1;
        const v = h.charCodeAt(0);
        return v >= 48 && v <= 57
    }
    function p(h, v) {
        const {currentType: k} = v;
        if (k !== 2)
            return !1;
        b(h);
        const R = g(h.currentPeek());
        return h.resetPeek(),
        R
    }
    function y(h, v) {
        const {currentType: k} = v;
        if (k !== 2)
            return !1;
        b(h);
        const R = h.currentPeek() === "-" ? h.peek() : h.currentPeek()
          , N = E(R);
        return h.resetPeek(),
        N
    }
    function S(h, v) {
        const {currentType: k} = v;
        if (k !== 2)
            return !1;
        b(h);
        const R = h.currentPeek() === ud;
        return h.resetPeek(),
        R
    }
    function T(h, v) {
        const {currentType: k} = v;
        if (k !== 8)
            return !1;
        b(h);
        const R = h.currentPeek() === ".";
        return h.resetPeek(),
        R
    }
    function A(h, v) {
        const {currentType: k} = v;
        if (k !== 9)
            return !1;
        b(h);
        const R = g(h.currentPeek());
        return h.resetPeek(),
        R
    }
    function L(h, v) {
        const {currentType: k} = v;
        if (!(k === 8 || k === 12))
            return !1;
        b(h);
        const R = h.currentPeek() === ":";
        return h.resetPeek(),
        R
    }
    function O(h, v) {
        const {currentType: k} = v;
        if (k !== 10)
            return !1;
        const R = ()=>{
            const q = h.currentPeek();
            return q === "{" ? g(h.peek()) : q === "@" || q === "%" || q === "|" || q === ":" || q === "." || q === On || !q ? !1 : q === Tt ? (h.peek(),
            R()) : g(q)
        }
          , N = R();
        return h.resetPeek(),
        N
    }
    function I(h) {
        b(h);
        const v = h.currentPeek() === "|";
        return h.resetPeek(),
        v
    }
    function V(h) {
        const v = b(h)
          , k = h.currentPeek() === "%" && h.peek() === "{";
        return h.resetPeek(),
        {
            isModulo: k,
            hasSpace: v.length > 0
        }
    }
    function x(h, v=!0) {
        const k = (N=!1,q="",Q=!1)=>{
            const J = h.currentPeek();
            return J === "{" ? q === "%" ? !1 : N : J === "@" || !J ? q === "%" ? !0 : N : J === "%" ? (h.peek(),
            k(N, "%", !0)) : J === "|" ? q === "%" || Q ? !0 : !(q === On || q === Tt) : J === On ? (h.peek(),
            k(!0, On, Q)) : J === Tt ? (h.peek(),
            k(!0, Tt, Q)) : !0
        }
          , R = k();
        return v && h.resetPeek(),
        R
    }
    function X(h, v) {
        const k = h.currentChar();
        return k === Jn ? Jn : v(k) ? (h.next(),
        k) : null
    }
    function Y(h) {
        return X(h, k=>{
            const R = k.charCodeAt(0);
            return R >= 97 && R <= 122 || R >= 65 && R <= 90 || R >= 48 && R <= 57 || R === 95 || R === 36
        }
        )
    }
    function j(h) {
        return X(h, k=>{
            const R = k.charCodeAt(0);
            return R >= 48 && R <= 57
        }
        )
    }
    function M(h) {
        return X(h, k=>{
            const R = k.charCodeAt(0);
            return R >= 48 && R <= 57 || R >= 65 && R <= 70 || R >= 97 && R <= 102
        }
        )
    }
    function K(h) {
        let v = ""
          , k = "";
        for (; v = j(h); )
            k += v;
        return k
    }
    function F(h) {
        w(h);
        const v = h.currentChar();
        return v !== "%" && f(He.EXPECTED_TOKEN, i(), 0, v),
        h.next(),
        "%"
    }
    function se(h) {
        let v = "";
        for (; ; ) {
            const k = h.currentChar();
            if (k === "{" || k === "}" || k === "@" || k === "|" || !k)
                break;
            if (k === "%")
                if (x(h))
                    v += k,
                    h.next();
                else
                    break;
            else if (k === On || k === Tt)
                if (x(h))
                    v += k,
                    h.next();
                else {
                    if (I(h))
                        break;
                    v += k,
                    h.next()
                }
            else
                v += k,
                h.next()
        }
        return v
    }
    function H(h) {
        w(h);
        let v = ""
          , k = "";
        for (; v = Y(h); )
            k += v;
        return h.currentChar() === Jn && f(He.UNTERMINATED_CLOSING_BRACE, i(), 0),
        k
    }
    function ae(h) {
        w(h);
        let v = "";
        return h.currentChar() === "-" ? (h.next(),
        v += `-${K(h)}`) : v += K(h),
        h.currentChar() === Jn && f(He.UNTERMINATED_CLOSING_BRACE, i(), 0),
        v
    }
    function ge(h) {
        w(h),
        _(h, "'");
        let v = ""
          , k = "";
        const R = q=>q !== ud && q !== Tt;
        for (; v = X(h, R); )
            v === "\\" ? k += Ve(h) : k += v;
        const N = h.currentChar();
        return N === Tt || N === Jn ? (f(He.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, i(), 0),
        N === Tt && (h.next(),
        _(h, "'")),
        k) : (_(h, "'"),
        k)
    }
    function Ve(h) {
        const v = h.currentChar();
        switch (v) {
        case "\\":
        case "'":
            return h.next(),
            `\\${v}`;
        case "u":
            return je(h, v, 4);
        case "U":
            return je(h, v, 6);
        default:
            return f(He.UNKNOWN_ESCAPE_SEQUENCE, i(), 0, v),
            ""
        }
    }
    function je(h, v, k) {
        _(h, v);
        let R = "";
        for (let N = 0; N < k; N++) {
            const q = M(h);
            if (!q) {
                f(He.INVALID_UNICODE_ESCAPE_SEQUENCE, i(), 0, `\\${v}${R}${h.currentChar()}`);
                break
            }
            R += q
        }
        return `\\${v}${R}`
    }
    function nt(h) {
        w(h);
        let v = ""
          , k = "";
        const R = N=>N !== "{" && N !== "}" && N !== On && N !== Tt;
        for (; v = X(h, R); )
            k += v;
        return k
    }
    function Je(h) {
        let v = ""
          , k = "";
        for (; v = Y(h); )
            k += v;
        return k
    }
    function B(h) {
        const v = (k=!1,R)=>{
            const N = h.currentChar();
            return N === "{" || N === "%" || N === "@" || N === "|" || N === "(" || N === ")" || !N || N === On ? R : N === Tt || N === Qw ? (R += N,
            h.next(),
            v(k, R)) : (R += N,
            h.next(),
            v(!0, R))
        }
        ;
        return v(!1, "")
    }
    function ee(h) {
        w(h);
        const v = _(h, "|");
        return w(h),
        v
    }
    function G(h, v) {
        let k = null;
        switch (h.currentChar()) {
        case "{":
            return v.braceNest >= 1 && f(He.NOT_ALLOW_NEST_PLACEHOLDER, i(), 0),
            h.next(),
            k = d(v, 2, "{"),
            w(h),
            v.braceNest++,
            k;
        case "}":
            return v.braceNest > 0 && v.currentType === 2 && f(He.EMPTY_PLACEHOLDER, i(), 0),
            h.next(),
            k = d(v, 3, "}"),
            v.braceNest--,
            v.braceNest > 0 && w(h),
            v.inLinked && v.braceNest === 0 && (v.inLinked = !1),
            k;
        case "@":
            return v.braceNest > 0 && f(He.UNTERMINATED_CLOSING_BRACE, i(), 0),
            k = Z(h, v) || m(v),
            v.braceNest = 0,
            k;
        default:
            let N = !0
              , q = !0
              , Q = !0;
            if (I(h))
                return v.braceNest > 0 && f(He.UNTERMINATED_CLOSING_BRACE, i(), 0),
                k = d(v, 1, ee(h)),
                v.braceNest = 0,
                v.inLinked = !1,
                k;
            if (v.braceNest > 0 && (v.currentType === 5 || v.currentType === 6 || v.currentType === 7))
                return f(He.UNTERMINATED_CLOSING_BRACE, i(), 0),
                v.braceNest = 0,
                me(h, v);
            if (N = p(h, v))
                return k = d(v, 5, H(h)),
                w(h),
                k;
            if (q = y(h, v))
                return k = d(v, 6, ae(h)),
                w(h),
                k;
            if (Q = S(h, v))
                return k = d(v, 7, ge(h)),
                w(h),
                k;
            if (!N && !q && !Q)
                return k = d(v, 13, nt(h)),
                f(He.INVALID_TOKEN_IN_PLACEHOLDER, i(), 0, k.value),
                w(h),
                k;
            break
        }
        return k
    }
    function Z(h, v) {
        const {currentType: k} = v;
        let R = null;
        const N = h.currentChar();
        switch ((k === 8 || k === 9 || k === 12 || k === 10) && (N === Tt || N === On) && f(He.INVALID_LINKED_FORMAT, i(), 0),
        N) {
        case "@":
            return h.next(),
            R = d(v, 8, "@"),
            v.inLinked = !0,
            R;
        case ".":
            return w(h),
            h.next(),
            d(v, 9, ".");
        case ":":
            return w(h),
            h.next(),
            d(v, 10, ":");
        default:
            return I(h) ? (R = d(v, 1, ee(h)),
            v.braceNest = 0,
            v.inLinked = !1,
            R) : T(h, v) || L(h, v) ? (w(h),
            Z(h, v)) : A(h, v) ? (w(h),
            d(v, 12, Je(h))) : O(h, v) ? (w(h),
            N === "{" ? G(h, v) || R : d(v, 11, B(h))) : (k === 8 && f(He.INVALID_LINKED_FORMAT, i(), 0),
            v.braceNest = 0,
            v.inLinked = !1,
            me(h, v))
        }
    }
    function me(h, v) {
        let k = {
            type: 14
        };
        if (v.braceNest > 0)
            return G(h, v) || m(v);
        if (v.inLinked)
            return Z(h, v) || m(v);
        switch (h.currentChar()) {
        case "{":
            return G(h, v) || m(v);
        case "}":
            return f(He.UNBALANCED_CLOSING_BRACE, i(), 0),
            h.next(),
            d(v, 3, "}");
        case "@":
            return Z(h, v) || m(v);
        default:
            if (I(h))
                return k = d(v, 1, ee(h)),
                v.braceNest = 0,
                v.inLinked = !1,
                k;
            const {isModulo: N, hasSpace: q} = V(h);
            if (N)
                return q ? d(v, 0, se(h)) : d(v, 4, F(h));
            if (x(h))
                return d(v, 0, se(h));
            break
        }
        return k
    }
    function Ee() {
        const {currentType: h, offset: v, startLoc: k, endLoc: R} = l;
        return l.lastType = h,
        l.lastOffset = v,
        l.lastStartLoc = k,
        l.lastEndLoc = R,
        l.offset = o(),
        l.startLoc = i(),
        r.currentChar() === Jn ? d(l, 14) : me(r, l)
    }
    return {
        nextToken: Ee,
        currentOffset: o,
        currentPosition: i,
        context: c
    }
}
const $w = "parser"
  , eT = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function tT(e, t, n) {
    switch (e) {
    case "\\\\":
        return "\\";
    case "\\'":
        return "'";
    default:
        {
            const r = parseInt(t || n, 16);
            return r <= 55295 || r >= 57344 ? String.fromCodePoint(r) : "�"
        }
    }
}
function nT(e={}) {
    const t = e.location !== !1
      , {onError: n} = e;
    function r(g, E, p, y, ...S) {
        const T = g.currentPosition();
        if (T.offset += y,
        T.column += y,
        n) {
            const A = t ? Bl(p, T) : null
              , L = sa(E, A, {
                domain: $w,
                args: S
            });
            n(L)
        }
    }
    function o(g, E, p) {
        const y = {
            type: g
        };
        return t && (y.start = E,
        y.end = E,
        y.loc = {
            start: p,
            end: p
        }),
        y
    }
    function i(g, E, p, y) {
        y && (g.type = y),
        t && (g.end = E,
        g.loc && (g.loc.end = p))
    }
    function s(g, E) {
        const p = g.context()
          , y = o(3, p.offset, p.startLoc);
        return y.value = E,
        i(y, g.currentOffset(), g.currentPosition()),
        y
    }
    function a(g, E) {
        const p = g.context()
          , {lastOffset: y, lastStartLoc: S} = p
          , T = o(5, y, S);
        return T.index = parseInt(E, 10),
        g.nextToken(),
        i(T, g.currentOffset(), g.currentPosition()),
        T
    }
    function l(g, E) {
        const p = g.context()
          , {lastOffset: y, lastStartLoc: S} = p
          , T = o(4, y, S);
        return T.key = E,
        g.nextToken(),
        i(T, g.currentOffset(), g.currentPosition()),
        T
    }
    function c(g, E) {
        const p = g.context()
          , {lastOffset: y, lastStartLoc: S} = p
          , T = o(9, y, S);
        return T.value = E.replace(eT, tT),
        g.nextToken(),
        i(T, g.currentOffset(), g.currentPosition()),
        T
    }
    function u(g) {
        const E = g.nextToken()
          , p = g.context()
          , {lastOffset: y, lastStartLoc: S} = p
          , T = o(8, y, S);
        return E.type !== 12 ? (r(g, He.UNEXPECTED_EMPTY_LINKED_MODIFIER, p.lastStartLoc, 0),
        T.value = "",
        i(T, y, S),
        {
            nextConsumeToken: E,
            node: T
        }) : (E.value == null && r(g, He.UNEXPECTED_LEXICAL_ANALYSIS, p.lastStartLoc, 0, dn(E)),
        T.value = E.value || "",
        i(T, g.currentOffset(), g.currentPosition()),
        {
            node: T
        })
    }
    function f(g, E) {
        const p = g.context()
          , y = o(7, p.offset, p.startLoc);
        return y.value = E,
        i(y, g.currentOffset(), g.currentPosition()),
        y
    }
    function d(g) {
        const E = g.context()
          , p = o(6, E.offset, E.startLoc);
        let y = g.nextToken();
        if (y.type === 9) {
            const S = u(g);
            p.modifier = S.node,
            y = S.nextConsumeToken || g.nextToken()
        }
        switch (y.type !== 10 && r(g, He.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, dn(y)),
        y = g.nextToken(),
        y.type === 2 && (y = g.nextToken()),
        y.type) {
        case 11:
            y.value == null && r(g, He.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, dn(y)),
            p.key = f(g, y.value || "");
            break;
        case 5:
            y.value == null && r(g, He.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, dn(y)),
            p.key = l(g, y.value || "");
            break;
        case 6:
            y.value == null && r(g, He.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, dn(y)),
            p.key = a(g, y.value || "");
            break;
        case 7:
            y.value == null && r(g, He.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, dn(y)),
            p.key = c(g, y.value || "");
            break;
        default:
            r(g, He.UNEXPECTED_EMPTY_LINKED_KEY, E.lastStartLoc, 0);
            const S = g.context()
              , T = o(7, S.offset, S.startLoc);
            return T.value = "",
            i(T, S.offset, S.startLoc),
            p.key = T,
            i(p, S.offset, S.startLoc),
            {
                nextConsumeToken: y,
                node: p
            }
        }
        return i(p, g.currentOffset(), g.currentPosition()),
        {
            node: p
        }
    }
    function m(g) {
        const E = g.context()
          , p = E.currentType === 1 ? g.currentOffset() : E.offset
          , y = E.currentType === 1 ? E.endLoc : E.startLoc
          , S = o(2, p, y);
        S.items = [];
        let T = null;
        do {
            const O = T || g.nextToken();
            switch (T = null,
            O.type) {
            case 0:
                O.value == null && r(g, He.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, dn(O)),
                S.items.push(s(g, O.value || ""));
                break;
            case 6:
                O.value == null && r(g, He.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, dn(O)),
                S.items.push(a(g, O.value || ""));
                break;
            case 5:
                O.value == null && r(g, He.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, dn(O)),
                S.items.push(l(g, O.value || ""));
                break;
            case 7:
                O.value == null && r(g, He.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, dn(O)),
                S.items.push(c(g, O.value || ""));
                break;
            case 8:
                const I = d(g);
                S.items.push(I.node),
                T = I.nextConsumeToken || null;
                break
            }
        } while (E.currentType !== 14 && E.currentType !== 1);
        const A = E.currentType === 1 ? E.lastOffset : g.currentOffset()
          , L = E.currentType === 1 ? E.lastEndLoc : g.currentPosition();
        return i(S, A, L),
        S
    }
    function _(g, E, p, y) {
        const S = g.context();
        let T = y.items.length === 0;
        const A = o(1, E, p);
        A.cases = [],
        A.cases.push(y);
        do {
            const L = m(g);
            T || (T = L.items.length === 0),
            A.cases.push(L)
        } while (S.currentType !== 14);
        return T && r(g, He.MUST_HAVE_MESSAGES_IN_PLURAL, p, 0),
        i(A, g.currentOffset(), g.currentPosition()),
        A
    }
    function b(g) {
        const E = g.context()
          , {offset: p, startLoc: y} = E
          , S = m(g);
        return E.currentType === 14 ? S : _(g, p, y, S)
    }
    function w(g) {
        const E = Zw(g, it({}, e))
          , p = E.context()
          , y = o(0, p.offset, p.startLoc);
        return t && y.loc && (y.loc.source = g),
        y.body = b(E),
        e.onCacheKey && (y.cacheKey = e.onCacheKey(g)),
        p.currentType !== 14 && r(E, He.UNEXPECTED_LEXICAL_ANALYSIS, p.lastStartLoc, 0, g[p.offset] || ""),
        i(y, E.currentOffset(), E.currentPosition()),
        y
    }
    return {
        parse: w
    }
}
function dn(e) {
    if (e.type === 14)
        return "EOF";
    const t = (e.value || "").replace(/\r?\n/gu, "\\n");
    return t.length > 10 ? t.slice(0, 9) + "…" : t
}
function rT(e, t={}) {
    const n = {
        ast: e,
        helpers: new Set
    };
    return {
        context: ()=>n,
        helper: i=>(n.helpers.add(i),
        i)
    }
}
function fd(e, t) {
    for (let n = 0; n < e.length; n++)
        au(e[n], t)
}
function au(e, t) {
    switch (e.type) {
    case 1:
        fd(e.cases, t),
        t.helper("plural");
        break;
    case 2:
        fd(e.items, t);
        break;
    case 6:
        au(e.key, t),
        t.helper("linked"),
        t.helper("type");
        break;
    case 5:
        t.helper("interpolate"),
        t.helper("list");
        break;
    case 4:
        t.helper("interpolate"),
        t.helper("named");
        break
    }
}
function oT(e, t={}) {
    const n = rT(e);
    n.helper("normalize"),
    e.body && au(e.body, n);
    const r = n.context();
    e.helpers = Array.from(r.helpers)
}
function iT(e) {
    const t = e.body;
    return t.type === 2 ? dd(t) : t.cases.forEach(n=>dd(n)),
    e
}
function dd(e) {
    if (e.items.length === 1) {
        const t = e.items[0];
        (t.type === 3 || t.type === 9) && (e.static = t.value,
        delete t.value)
    } else {
        const t = [];
        for (let n = 0; n < e.items.length; n++) {
            const r = e.items[n];
            if (!(r.type === 3 || r.type === 9) || r.value == null)
                break;
            t.push(r.value)
        }
        if (t.length === e.items.length) {
            e.static = iu(t);
            for (let n = 0; n < e.items.length; n++) {
                const r = e.items[n];
                (r.type === 3 || r.type === 9) && delete r.value
            }
        }
    }
}
function Qr(e) {
    switch (e.t = e.type,
    e.type) {
    case 0:
        const t = e;
        Qr(t.body),
        t.b = t.body,
        delete t.body;
        break;
    case 1:
        const n = e
          , r = n.cases;
        for (let u = 0; u < r.length; u++)
            Qr(r[u]);
        n.c = r,
        delete n.cases;
        break;
    case 2:
        const o = e
          , i = o.items;
        for (let u = 0; u < i.length; u++)
            Qr(i[u]);
        o.i = i,
        delete o.items,
        o.static && (o.s = o.static,
        delete o.static);
        break;
    case 3:
    case 9:
    case 8:
    case 7:
        const s = e;
        s.value && (s.v = s.value,
        delete s.value);
        break;
    case 6:
        const a = e;
        Qr(a.key),
        a.k = a.key,
        delete a.key,
        a.modifier && (Qr(a.modifier),
        a.m = a.modifier,
        delete a.modifier);
        break;
    case 5:
        const l = e;
        l.i = l.index,
        delete l.index;
        break;
    case 4:
        const c = e;
        c.k = c.key,
        delete c.key;
        break
    }
    delete e.type
}
function sT(e, t) {
    const {sourceMap: n, filename: r, breakLineCode: o, needIndent: i} = t
      , s = t.location !== !1
      , a = {
        filename: r,
        code: "",
        column: 1,
        line: 1,
        offset: 0,
        map: void 0,
        breakLineCode: o,
        needIndent: i,
        indentLevel: 0
    };
    s && e.loc && (a.source = e.loc.source);
    const l = ()=>a;
    function c(w, g) {
        a.code += w
    }
    function u(w, g=!0) {
        const E = g ? o : "";
        c(i ? E + "  ".repeat(w) : E)
    }
    function f(w=!0) {
        const g = ++a.indentLevel;
        w && u(g)
    }
    function d(w=!0) {
        const g = --a.indentLevel;
        w && u(g)
    }
    function m() {
        u(a.indentLevel)
    }
    return {
        context: l,
        push: c,
        indent: f,
        deindent: d,
        newline: m,
        helper: w=>`_${w}`,
        needIndent: ()=>a.needIndent
    }
}
function aT(e, t) {
    const {helper: n} = e;
    e.push(`${n("linked")}(`),
    mo(e, t.key),
    t.modifier ? (e.push(", "),
    mo(e, t.modifier),
    e.push(", _type")) : e.push(", undefined, _type"),
    e.push(")")
}
function lT(e, t) {
    const {helper: n, needIndent: r} = e;
    e.push(`${n("normalize")}([`),
    e.indent(r());
    const o = t.items.length;
    for (let i = 0; i < o && (mo(e, t.items[i]),
    i !== o - 1); i++)
        e.push(", ");
    e.deindent(r()),
    e.push("])")
}
function cT(e, t) {
    const {helper: n, needIndent: r} = e;
    if (t.cases.length > 1) {
        e.push(`${n("plural")}([`),
        e.indent(r());
        const o = t.cases.length;
        for (let i = 0; i < o && (mo(e, t.cases[i]),
        i !== o - 1); i++)
            e.push(", ");
        e.deindent(r()),
        e.push("])")
    }
}
function uT(e, t) {
    t.body ? mo(e, t.body) : e.push("null")
}
function mo(e, t) {
    const {helper: n} = e;
    switch (t.type) {
    case 0:
        uT(e, t);
        break;
    case 1:
        cT(e, t);
        break;
    case 2:
        lT(e, t);
        break;
    case 6:
        aT(e, t);
        break;
    case 8:
        e.push(JSON.stringify(t.value), t);
        break;
    case 7:
        e.push(JSON.stringify(t.value), t);
        break;
    case 5:
        e.push(`${n("interpolate")}(${n("list")}(${t.index}))`, t);
        break;
    case 4:
        e.push(`${n("interpolate")}(${n("named")}(${JSON.stringify(t.key)}))`, t);
        break;
    case 9:
        e.push(JSON.stringify(t.value), t);
        break;
    case 3:
        e.push(JSON.stringify(t.value), t);
        break
    }
}
const fT = (e,t={})=>{
    const n = te(t.mode) ? t.mode : "normal"
      , r = te(t.filename) ? t.filename : "message.intl"
      , o = !!t.sourceMap
      , i = t.breakLineCode != null ? t.breakLineCode : n === "arrow" ? ";" : `
`
      , s = t.needIndent ? t.needIndent : n !== "arrow"
      , a = e.helpers || []
      , l = sT(e, {
        mode: n,
        filename: r,
        sourceMap: o,
        breakLineCode: i,
        needIndent: s
    });
    l.push(n === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"),
    l.indent(s),
    a.length > 0 && (l.push(`const { ${iu(a.map(f=>`${f}: _${f}`), ", ")} } = ctx`),
    l.newline()),
    l.push("return "),
    mo(l, e),
    l.deindent(s),
    l.push("}"),
    delete e.helpers;
    const {code: c, map: u} = l.context();
    return {
        ast: e,
        code: c,
        map: u ? u.toJSON() : void 0
    }
}
;
function dT(e, t={}) {
    const n = it({}, t)
      , r = !!n.jit
      , o = !!n.minify
      , i = n.optimize == null ? !0 : n.optimize
      , a = nT(n).parse(e);
    return r ? (i && iT(a),
    o && Qr(a),
    {
        ast: a,
        code: ""
    }) : (oT(a, n),
    fT(a, n))
}
/*!
  * core-base v9.9.1
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */
function hT() {
    typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (ou().__INTLIFY_PROD_DEVTOOLS__ = !1)
}
const mr = [];
mr[0] = {
    w: [0],
    i: [3, 0],
    "[": [4],
    o: [7]
};
mr[1] = {
    w: [1],
    ".": [2],
    "[": [4],
    o: [7]
};
mr[2] = {
    w: [2],
    i: [3, 0],
    0: [3, 0]
};
mr[3] = {
    i: [3, 0],
    0: [3, 0],
    w: [1, 1],
    ".": [2, 1],
    "[": [4, 1],
    o: [7, 1]
};
mr[4] = {
    "'": [5, 0],
    '"': [6, 0],
    "[": [4, 2],
    "]": [1, 3],
    o: 8,
    l: [4, 0]
};
mr[5] = {
    "'": [4, 0],
    o: 8,
    l: [5, 0]
};
mr[6] = {
    '"': [4, 0],
    o: 8,
    l: [6, 0]
};
const pT = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function mT(e) {
    return pT.test(e)
}
function gT(e) {
    const t = e.charCodeAt(0)
      , n = e.charCodeAt(e.length - 1);
    return t === n && (t === 34 || t === 39) ? e.slice(1, -1) : e
}
function yT(e) {
    if (e == null)
        return "o";
    switch (e.charCodeAt(0)) {
    case 91:
    case 93:
    case 46:
    case 34:
    case 39:
        return e;
    case 95:
    case 36:
    case 45:
        return "i";
    case 9:
    case 10:
    case 13:
    case 160:
    case 65279:
    case 8232:
    case 8233:
        return "w"
    }
    return "i"
}
function vT(e) {
    const t = e.trim();
    return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : mT(t) ? gT(t) : "*" + t
}
function _T(e) {
    const t = [];
    let n = -1, r = 0, o = 0, i, s, a, l, c, u, f;
    const d = [];
    d[0] = ()=>{
        s === void 0 ? s = a : s += a
    }
    ,
    d[1] = ()=>{
        s !== void 0 && (t.push(s),
        s = void 0)
    }
    ,
    d[2] = ()=>{
        d[0](),
        o++
    }
    ,
    d[3] = ()=>{
        if (o > 0)
            o--,
            r = 4,
            d[0]();
        else {
            if (o = 0,
            s === void 0 || (s = vT(s),
            s === !1))
                return !1;
            d[1]()
        }
    }
    ;
    function m() {
        const _ = e[n + 1];
        if (r === 5 && _ === "'" || r === 6 && _ === '"')
            return n++,
            a = "\\" + _,
            d[0](),
            !0
    }
    for (; r !== null; )
        if (n++,
        i = e[n],
        !(i === "\\" && m())) {
            if (l = yT(i),
            f = mr[r],
            c = f[l] || f.l || 8,
            c === 8 || (r = c[0],
            c[1] !== void 0 && (u = d[c[1]],
            u && (a = i,
            u() === !1))))
                return;
            if (r === 7)
                return t
        }
}
const hd = new Map;
function bT(e, t) {
    return be(e) ? e[t] : null
}
function ET(e, t) {
    if (!be(e))
        return null;
    let n = hd.get(t);
    if (n || (n = _T(t),
    n && hd.set(t, n)),
    !n)
        return null;
    const r = n.length;
    let o = e
      , i = 0;
    for (; i < r; ) {
        const s = o[n[i]];
        if (s === void 0 || qe(o))
            return null;
        o = s,
        i++
    }
    return o
}
const ST = e=>e
  , wT = e=>""
  , TT = "text"
  , kT = e=>e.length === 0 ? "" : iu(e)
  , AT = jw;
function pd(e, t) {
    return e = Math.abs(e),
    t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0
}
function LT(e) {
    const t = mt(e.pluralIndex) ? e.pluralIndex : -1;
    return e.named && (mt(e.named.count) || mt(e.named.n)) ? mt(e.named.count) ? e.named.count : mt(e.named.n) ? e.named.n : t : t
}
function CT(e, t) {
    t.count || (t.count = e),
    t.n || (t.n = e)
}
function OT(e={}) {
    const t = e.locale
      , n = LT(e)
      , r = be(e.pluralRules) && te(t) && qe(e.pluralRules[t]) ? e.pluralRules[t] : pd
      , o = be(e.pluralRules) && te(t) && qe(e.pluralRules[t]) ? pd : void 0
      , i = g=>g[r(n, g.length, o)]
      , s = e.list || []
      , a = g=>s[g]
      , l = e.named || {};
    mt(e.pluralIndex) && CT(n, l);
    const c = g=>l[g];
    function u(g) {
        const E = qe(e.messages) ? e.messages(g) : be(e.messages) ? e.messages[g] : !1;
        return E || (e.parent ? e.parent.message(g) : wT)
    }
    const f = g=>e.modifiers ? e.modifiers[g] : ST
      , d = we(e.processor) && qe(e.processor.normalize) ? e.processor.normalize : kT
      , m = we(e.processor) && qe(e.processor.interpolate) ? e.processor.interpolate : AT
      , _ = we(e.processor) && te(e.processor.type) ? e.processor.type : TT
      , w = {
        list: a,
        named: c,
        plural: i,
        linked: (g,...E)=>{
            const [p,y] = E;
            let S = "text"
              , T = "";
            E.length === 1 ? be(p) ? (T = p.modifier || T,
            S = p.type || S) : te(p) && (T = p || T) : E.length === 2 && (te(p) && (T = p || T),
            te(y) && (S = y || S));
            const A = u(g)(w)
              , L = S === "vnode" && rt(A) && T ? A[0] : A;
            return T ? f(T)(L, S) : L
        }
        ,
        message: u,
        type: _,
        interpolate: m,
        normalize: d,
        values: it({}, s, l)
    };
    return w
}
let ci = null;
function RT(e) {
    ci = e
}
function PT(e, t, n) {
    ci && ci.emit("i18n:init", {
        timestamp: Date.now(),
        i18n: e,
        version: t,
        meta: n
    })
}
const IT = MT("function:translate");
function MT(e) {
    return t=>ci && ci.emit(e, t)
}
const NT = {
    NOT_FOUND_KEY: 1,
    FALLBACK_TO_TRANSLATE: 2,
    CANNOT_FORMAT_NUMBER: 3,
    FALLBACK_TO_NUMBER_FORMAT: 4,
    CANNOT_FORMAT_DATE: 5,
    FALLBACK_TO_DATE_FORMAT: 6,
    EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER: 7,
    __EXTEND_POINT__: 8
}
  , Jm = He.__EXTEND_POINT__
  , Er = su(Jm)
  , bn = {
    INVALID_ARGUMENT: Jm,
    INVALID_DATE_ARGUMENT: Er(),
    INVALID_ISO_DATE_ARGUMENT: Er(),
    NOT_SUPPORT_NON_STRING_MESSAGE: Er(),
    NOT_SUPPORT_LOCALE_PROMISE_VALUE: Er(),
    NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: Er(),
    NOT_SUPPORT_LOCALE_TYPE: Er(),
    __EXTEND_POINT__: Er()
};
function Nn(e) {
    return sa(e, null, void 0)
}
function lu(e, t) {
    return t.locale != null ? md(t.locale) : md(e.locale)
}
let Ba;
function md(e) {
    if (te(e))
        return e;
    if (qe(e)) {
        if (e.resolvedOnce && Ba != null)
            return Ba;
        if (e.constructor.name === "Function") {
            const t = e();
            if (Hw(t))
                throw Nn(bn.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
            return Ba = t
        } else
            throw Nn(bn.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION)
    } else
        throw Nn(bn.NOT_SUPPORT_LOCALE_TYPE)
}
function DT(e, t, n) {
    return [...new Set([n, ...rt(t) ? t : be(t) ? Object.keys(t) : te(t) ? [t] : [n]])]
}
function zm(e, t, n) {
    const r = te(n) ? n : Ps
      , o = e;
    o.__localeChainCache || (o.__localeChainCache = new Map);
    let i = o.__localeChainCache.get(r);
    if (!i) {
        i = [];
        let s = [n];
        for (; rt(s); )
            s = gd(i, s, t);
        const a = rt(t) || !we(t) ? t : t.default ? t.default : null;
        s = te(a) ? [a] : a,
        rt(s) && gd(i, s, !1),
        o.__localeChainCache.set(r, i)
    }
    return i
}
function gd(e, t, n) {
    let r = !0;
    for (let o = 0; o < t.length && $e(r); o++) {
        const i = t[o];
        te(i) && (r = xT(e, t[o], n))
    }
    return r
}
function xT(e, t, n) {
    let r;
    const o = t.split("-");
    do {
        const i = o.join("-");
        r = FT(e, i, n),
        o.splice(-1, 1)
    } while (o.length && r === !0);
    return r
}
function FT(e, t, n) {
    let r = !1;
    if (!e.includes(t) && (r = !0,
    t)) {
        r = t[t.length - 1] !== "!";
        const o = t.replace(/!/g, "");
        e.push(o),
        (rt(n) || we(n)) && n[o] && (r = n[o])
    }
    return r
}
const UT = "9.9.1"
  , aa = -1
  , Ps = "en-US"
  , yd = ""
  , vd = e=>`${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function VT() {
    return {
        upper: (e,t)=>t === "text" && te(e) ? e.toUpperCase() : t === "vnode" && be(e) && "__v_isVNode"in e ? e.children.toUpperCase() : e,
        lower: (e,t)=>t === "text" && te(e) ? e.toLowerCase() : t === "vnode" && be(e) && "__v_isVNode"in e ? e.children.toLowerCase() : e,
        capitalize: (e,t)=>t === "text" && te(e) ? vd(e) : t === "vnode" && be(e) && "__v_isVNode"in e ? vd(e.children) : e
    }
}
let Gm;
function BT(e) {
    Gm = e
}
let Qm;
function HT(e) {
    Qm = e
}
let Xm;
function jT(e) {
    Xm = e
}
let Zm = null;
const KT = e=>{
    Zm = e
}
  , qT = ()=>Zm;
let $m = null;
const _d = e=>{
    $m = e
}
  , YT = ()=>$m;
let bd = 0;
function WT(e={}) {
    const t = qe(e.onWarn) ? e.onWarn : Kw
      , n = te(e.version) ? e.version : UT
      , r = te(e.locale) || qe(e.locale) ? e.locale : Ps
      , o = qe(r) ? Ps : r
      , i = rt(e.fallbackLocale) || we(e.fallbackLocale) || te(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : o
      , s = we(e.messages) ? e.messages : {
        [o]: {}
    }
      , a = we(e.datetimeFormats) ? e.datetimeFormats : {
        [o]: {}
    }
      , l = we(e.numberFormats) ? e.numberFormats : {
        [o]: {}
    }
      , c = it({}, e.modifiers || {}, VT())
      , u = e.pluralRules || {}
      , f = qe(e.missing) ? e.missing : null
      , d = $e(e.missingWarn) || Os(e.missingWarn) ? e.missingWarn : !0
      , m = $e(e.fallbackWarn) || Os(e.fallbackWarn) ? e.fallbackWarn : !0
      , _ = !!e.fallbackFormat
      , b = !!e.unresolving
      , w = qe(e.postTranslation) ? e.postTranslation : null
      , g = we(e.processor) ? e.processor : null
      , E = $e(e.warnHtmlMessage) ? e.warnHtmlMessage : !0
      , p = !!e.escapeParameter
      , y = qe(e.messageCompiler) ? e.messageCompiler : Gm
      , S = qe(e.messageResolver) ? e.messageResolver : Qm || bT
      , T = qe(e.localeFallbacker) ? e.localeFallbacker : Xm || DT
      , A = be(e.fallbackContext) ? e.fallbackContext : void 0
      , L = e
      , O = be(L.__datetimeFormatters) ? L.__datetimeFormatters : new Map
      , I = be(L.__numberFormatters) ? L.__numberFormatters : new Map
      , V = be(L.__meta) ? L.__meta : {};
    bd++;
    const x = {
        version: n,
        cid: bd,
        locale: r,
        fallbackLocale: i,
        messages: s,
        modifiers: c,
        pluralRules: u,
        missing: f,
        missingWarn: d,
        fallbackWarn: m,
        fallbackFormat: _,
        unresolving: b,
        postTranslation: w,
        processor: g,
        warnHtmlMessage: E,
        escapeParameter: p,
        messageCompiler: y,
        messageResolver: S,
        localeFallbacker: T,
        fallbackContext: A,
        onWarn: t,
        __meta: V
    };
    return x.datetimeFormats = a,
    x.numberFormats = l,
    x.__datetimeFormatters = O,
    x.__numberFormatters = I,
    __INTLIFY_PROD_DEVTOOLS__ && PT(x, n, V),
    x
}
function cu(e, t, n, r, o) {
    const {missing: i, onWarn: s} = e;
    if (i !== null) {
        const a = i(e, n, t, o);
        return te(a) ? a : t
    } else
        return t
}
function Ro(e, t, n) {
    const r = e;
    r.__localeChainCache = new Map,
    e.localeFallbacker(e, n, t)
}
function Ha(e) {
    return n=>JT(n, e)
}
function JT(e, t) {
    const n = t.b || t.body;
    if ((n.t || n.type) === 1) {
        const r = n
          , o = r.c || r.cases;
        return e.plural(o.reduce((i,s)=>[...i, Ed(e, s)], []))
    } else
        return Ed(e, n)
}
function Ed(e, t) {
    const n = t.s || t.static;
    if (n)
        return e.type === "text" ? n : e.normalize([n]);
    {
        const r = (t.i || t.items).reduce((o,i)=>[...o, Hl(e, i)], []);
        return e.normalize(r)
    }
}
function Hl(e, t) {
    const n = t.t || t.type;
    switch (n) {
    case 3:
        const r = t;
        return r.v || r.value;
    case 9:
        const o = t;
        return o.v || o.value;
    case 4:
        const i = t;
        return e.interpolate(e.named(i.k || i.key));
    case 5:
        const s = t;
        return e.interpolate(e.list(s.i != null ? s.i : s.index));
    case 6:
        const a = t
          , l = a.m || a.modifier;
        return e.linked(Hl(e, a.k || a.key), l ? Hl(e, l) : void 0, e.type);
    case 7:
        const c = t;
        return c.v || c.value;
    case 8:
        const u = t;
        return u.v || u.value;
    default:
        throw new Error(`unhandled node type on format message part: ${n}`)
    }
}
const zT = e=>e;
let Zi = Object.create(null);
const go = e=>be(e) && (e.t === 0 || e.type === 0) && ("b"in e || "body"in e);
function GT(e, t={}) {
    let n = !1;
    const r = t.onError || Yw;
    return t.onError = o=>{
        n = !0,
        r(o)
    }
    ,
    {
        ...dT(e, t),
        detectError: n
    }
}
function QT(e, t) {
    if (te(e)) {
        $e(t.warnHtmlMessage) && t.warnHtmlMessage;
        const r = (t.onCacheKey || zT)(e)
          , o = Zi[r];
        if (o)
            return o;
        const {ast: i, detectError: s} = GT(e, {
            ...t,
            location: !1,
            jit: !0
        })
          , a = Ha(i);
        return s ? a : Zi[r] = a
    } else {
        const n = e.cacheKey;
        if (n) {
            const r = Zi[n];
            return r || (Zi[n] = Ha(e))
        } else
            return Ha(e)
    }
}
const Sd = ()=>""
  , jt = e=>qe(e);
function wd(e, ...t) {
    const {fallbackFormat: n, postTranslation: r, unresolving: o, messageCompiler: i, fallbackLocale: s, messages: a} = e
      , [l,c] = jl(...t)
      , u = $e(c.missingWarn) ? c.missingWarn : e.missingWarn
      , f = $e(c.fallbackWarn) ? c.fallbackWarn : e.fallbackWarn
      , d = $e(c.escapeParameter) ? c.escapeParameter : e.escapeParameter
      , m = !!c.resolvedMessage
      , _ = te(c.default) || $e(c.default) ? $e(c.default) ? i ? l : ()=>l : c.default : n ? i ? l : ()=>l : ""
      , b = n || _ !== ""
      , w = lu(e, c);
    d && XT(c);
    let[g,E,p] = m ? [l, w, a[w] || {}] : eg(e, l, w, s, f, u)
      , y = g
      , S = l;
    if (!m && !(te(y) || go(y) || jt(y)) && b && (y = _,
    S = y),
    !m && (!(te(y) || go(y) || jt(y)) || !te(E)))
        return o ? aa : l;
    let T = !1;
    const A = ()=>{
        T = !0
    }
      , L = jt(y) ? y : tg(e, l, E, y, S, A);
    if (T)
        return y;
    const O = e1(e, E, p, c)
      , I = OT(O)
      , V = ZT(e, L, I)
      , x = r ? r(V, l) : V;
    if (__INTLIFY_PROD_DEVTOOLS__) {
        const X = {
            timestamp: Date.now(),
            key: te(l) ? l : jt(y) ? y.key : "",
            locale: E || (jt(y) ? y.locale : ""),
            format: te(y) ? y : jt(y) ? y.source : "",
            message: x
        };
        X.meta = it({}, e.__meta, qT() || {}),
        IT(X)
    }
    return x
}
function XT(e) {
    rt(e.list) ? e.list = e.list.map(t=>te(t) ? cd(t) : t) : be(e.named) && Object.keys(e.named).forEach(t=>{
        te(e.named[t]) && (e.named[t] = cd(e.named[t]))
    }
    )
}
function eg(e, t, n, r, o, i) {
    const {messages: s, onWarn: a, messageResolver: l, localeFallbacker: c} = e
      , u = c(e, r, n);
    let f = {}, d, m = null;
    const _ = "translate";
    for (let b = 0; b < u.length && (d = u[b],
    f = s[d] || {},
    (m = l(f, t)) === null && (m = f[t]),
    !(te(m) || go(m) || jt(m))); b++) {
        const w = cu(e, t, d, i, _);
        w !== t && (m = w)
    }
    return [m, d, f]
}
function tg(e, t, n, r, o, i) {
    const {messageCompiler: s, warnHtmlMessage: a} = e;
    if (jt(r)) {
        const c = r;
        return c.locale = c.locale || n,
        c.key = c.key || t,
        c
    }
    if (s == null) {
        const c = ()=>r;
        return c.locale = n,
        c.key = t,
        c
    }
    const l = s(r, $T(e, n, o, r, a, i));
    return l.locale = n,
    l.key = t,
    l.source = r,
    l
}
function ZT(e, t, n) {
    return t(n)
}
function jl(...e) {
    const [t,n,r] = e
      , o = {};
    if (!te(t) && !mt(t) && !jt(t) && !go(t))
        throw Nn(bn.INVALID_ARGUMENT);
    const i = mt(t) ? String(t) : (jt(t),
    t);
    return mt(n) ? o.plural = n : te(n) ? o.default = n : we(n) && !ia(n) ? o.named = n : rt(n) && (o.list = n),
    mt(r) ? o.plural = r : te(r) ? o.default = r : we(r) && it(o, r),
    [i, o]
}
function $T(e, t, n, r, o, i) {
    return {
        locale: t,
        key: n,
        warnHtmlMessage: o,
        onError: s=>{
            throw i && i(s),
            s
        }
        ,
        onCacheKey: s=>xw(t, n, s)
    }
}
function e1(e, t, n, r) {
    const {modifiers: o, pluralRules: i, messageResolver: s, fallbackLocale: a, fallbackWarn: l, missingWarn: c, fallbackContext: u} = e
      , d = {
        locale: t,
        modifiers: o,
        pluralRules: i,
        messages: m=>{
            let _ = s(n, m);
            if (_ == null && u) {
                const [,,b] = eg(u, m, t, a, l, c);
                _ = s(b, m)
            }
            if (te(_) || go(_)) {
                let b = !1;
                const g = tg(e, m, t, _, m, ()=>{
                    b = !0
                }
                );
                return b ? Sd : g
            } else
                return jt(_) ? _ : Sd
        }
    };
    return e.processor && (d.processor = e.processor),
    r.list && (d.list = r.list),
    r.named && (d.named = r.named),
    mt(r.plural) && (d.pluralIndex = r.plural),
    d
}
function Td(e, ...t) {
    const {datetimeFormats: n, unresolving: r, fallbackLocale: o, onWarn: i, localeFallbacker: s} = e
      , {__datetimeFormatters: a} = e
      , [l,c,u,f] = Kl(...t)
      , d = $e(u.missingWarn) ? u.missingWarn : e.missingWarn;
    $e(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn;
    const m = !!u.part
      , _ = lu(e, u)
      , b = s(e, o, _);
    if (!te(l) || l === "")
        return new Intl.DateTimeFormat(_,f).format(c);
    let w = {}, g, E = null;
    const p = "datetime format";
    for (let T = 0; T < b.length && (g = b[T],
    w = n[g] || {},
    E = w[l],
    !we(E)); T++)
        cu(e, l, g, d, p);
    if (!we(E) || !te(g))
        return r ? aa : l;
    let y = `${g}__${l}`;
    ia(f) || (y = `${y}__${JSON.stringify(f)}`);
    let S = a.get(y);
    return S || (S = new Intl.DateTimeFormat(g,it({}, E, f)),
    a.set(y, S)),
    m ? S.formatToParts(c) : S.format(c)
}
const ng = ["localeMatcher", "weekday", "era", "year", "month", "day", "hour", "minute", "second", "timeZoneName", "formatMatcher", "hour12", "timeZone", "dateStyle", "timeStyle", "calendar", "dayPeriod", "numberingSystem", "hourCycle", "fractionalSecondDigits"];
function Kl(...e) {
    const [t,n,r,o] = e
      , i = {};
    let s = {}, a;
    if (te(t)) {
        const l = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
        if (!l)
            throw Nn(bn.INVALID_ISO_DATE_ARGUMENT);
        const c = l[3] ? l[3].trim().startsWith("T") ? `${l[1].trim()}${l[3].trim()}` : `${l[1].trim()}T${l[3].trim()}` : l[1].trim();
        a = new Date(c);
        try {
            a.toISOString()
        } catch {
            throw Nn(bn.INVALID_ISO_DATE_ARGUMENT)
        }
    } else if (Uw(t)) {
        if (isNaN(t.getTime()))
            throw Nn(bn.INVALID_DATE_ARGUMENT);
        a = t
    } else if (mt(t))
        a = t;
    else
        throw Nn(bn.INVALID_ARGUMENT);
    return te(n) ? i.key = n : we(n) && Object.keys(n).forEach(l=>{
        ng.includes(l) ? s[l] = n[l] : i[l] = n[l]
    }
    ),
    te(r) ? i.locale = r : we(r) && (s = r),
    we(o) && (s = o),
    [i.key || "", a, i, s]
}
function kd(e, t, n) {
    const r = e;
    for (const o in n) {
        const i = `${t}__${o}`;
        r.__datetimeFormatters.has(i) && r.__datetimeFormatters.delete(i)
    }
}
function Ad(e, ...t) {
    const {numberFormats: n, unresolving: r, fallbackLocale: o, onWarn: i, localeFallbacker: s} = e
      , {__numberFormatters: a} = e
      , [l,c,u,f] = ql(...t)
      , d = $e(u.missingWarn) ? u.missingWarn : e.missingWarn;
    $e(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn;
    const m = !!u.part
      , _ = lu(e, u)
      , b = s(e, o, _);
    if (!te(l) || l === "")
        return new Intl.NumberFormat(_,f).format(c);
    let w = {}, g, E = null;
    const p = "number format";
    for (let T = 0; T < b.length && (g = b[T],
    w = n[g] || {},
    E = w[l],
    !we(E)); T++)
        cu(e, l, g, d, p);
    if (!we(E) || !te(g))
        return r ? aa : l;
    let y = `${g}__${l}`;
    ia(f) || (y = `${y}__${JSON.stringify(f)}`);
    let S = a.get(y);
    return S || (S = new Intl.NumberFormat(g,it({}, E, f)),
    a.set(y, S)),
    m ? S.formatToParts(c) : S.format(c)
}
const rg = ["localeMatcher", "style", "currency", "currencyDisplay", "currencySign", "useGrouping", "minimumIntegerDigits", "minimumFractionDigits", "maximumFractionDigits", "minimumSignificantDigits", "maximumSignificantDigits", "compactDisplay", "notation", "signDisplay", "unit", "unitDisplay", "roundingMode", "roundingPriority", "roundingIncrement", "trailingZeroDisplay"];
function ql(...e) {
    const [t,n,r,o] = e
      , i = {};
    let s = {};
    if (!mt(t))
        throw Nn(bn.INVALID_ARGUMENT);
    const a = t;
    return te(n) ? i.key = n : we(n) && Object.keys(n).forEach(l=>{
        rg.includes(l) ? s[l] = n[l] : i[l] = n[l]
    }
    ),
    te(r) ? i.locale = r : we(r) && (s = r),
    we(o) && (s = o),
    [i.key || "", a, i, s]
}
function Ld(e, t, n) {
    const r = e;
    for (const o in n) {
        const i = `${t}__${o}`;
        r.__numberFormatters.has(i) && r.__numberFormatters.delete(i)
    }
}
hT();
/*!
  * vue-i18n v9.9.1
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */
const t1 = "9.9.1";
function n1() {
    typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (ou().__INTLIFY_PROD_DEVTOOLS__ = !1)
}
const og = NT.__EXTEND_POINT__
  , zn = su(og);
zn(),
zn(),
zn(),
zn(),
zn(),
zn(),
zn(),
zn();
const ig = bn.__EXTEND_POINT__
  , Ct = su(ig)
  , Qt = {
    UNEXPECTED_RETURN_TYPE: ig,
    INVALID_ARGUMENT: Ct(),
    MUST_BE_CALL_SETUP_TOP: Ct(),
    NOT_INSTALLED: Ct(),
    NOT_AVAILABLE_IN_LEGACY_MODE: Ct(),
    REQUIRED_VALUE: Ct(),
    INVALID_VALUE: Ct(),
    CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN: Ct(),
    NOT_INSTALLED_WITH_PROVIDE: Ct(),
    UNEXPECTED_ERROR: Ct(),
    NOT_COMPATIBLE_LEGACY_VUE_I18N: Ct(),
    BRIDGE_SUPPORT_VUE_2_ONLY: Ct(),
    MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION: Ct(),
    NOT_AVAILABLE_COMPOSITION_IN_LEGACY: Ct(),
    __EXTEND_POINT__: Ct()
};
function an(e, ...t) {
    return sa(e, null, void 0)
}
const Yl = pr("__translateVNode")
  , Wl = pr("__datetimeParts")
  , Jl = pr("__numberParts")
  , r1 = pr("__setPluralRules")
  , o1 = pr("__injectWithOption")
  , zl = pr("__dispose");
function ui(e) {
    if (!be(e))
        return e;
    for (const t in e)
        if (Rs(e, t))
            if (!t.includes("."))
                be(e[t]) && ui(e[t]);
            else {
                const n = t.split(".")
                  , r = n.length - 1;
                let o = e
                  , i = !1;
                for (let s = 0; s < r; s++) {
                    if (n[s]in o || (o[n[s]] = {}),
                    !be(o[n[s]])) {
                        i = !0;
                        break
                    }
                    o = o[n[s]]
                }
                i || (o[n[r]] = e[t],
                delete e[t]),
                be(o[n[r]]) && ui(o[n[r]])
            }
    return e
}
function sg(e, t) {
    const {messages: n, __i18n: r, messageResolver: o, flatJson: i} = t
      , s = we(n) ? n : rt(r) ? {} : {
        [e]: {}
    };
    if (rt(r) && r.forEach(a=>{
        if ("locale"in a && "resource"in a) {
            const {locale: l, resource: c} = a;
            l ? (s[l] = s[l] || {},
            Dr(c, s[l])) : Dr(c, s)
        } else
            te(a) && Dr(JSON.parse(a), s)
    }
    ),
    o == null && i)
        for (const a in s)
            Rs(s, a) && ui(s[a]);
    return s
}
function ag(e) {
    return e.type
}
function i1(e, t, n) {
    let r = be(t.messages) ? t.messages : {};
    "__i18nGlobal"in n && (r = sg(e.locale.value, {
        messages: r,
        __i18n: n.__i18nGlobal
    }));
    const o = Object.keys(r);
    o.length && o.forEach(i=>{
        e.mergeLocaleMessage(i, r[i])
    }
    );
    {
        if (be(t.datetimeFormats)) {
            const i = Object.keys(t.datetimeFormats);
            i.length && i.forEach(s=>{
                e.mergeDateTimeFormat(s, t.datetimeFormats[s])
            }
            )
        }
        if (be(t.numberFormats)) {
            const i = Object.keys(t.numberFormats);
            i.length && i.forEach(s=>{
                e.mergeNumberFormat(s, t.numberFormats[s])
            }
            )
        }
    }
}
function Cd(e) {
    return We(Ur, null, e, 0)
}
const Od = "__INTLIFY_META__"
  , Rd = ()=>[]
  , s1 = ()=>!1;
let Pd = 0;
function Id(e) {
    return (t,n,r,o)=>e(n, r, cn() || void 0, o)
}
const a1 = ()=>{
    const e = cn();
    let t = null;
    return e && (t = ag(e)[Od]) ? {
        [Od]: t
    } : null
}
;
function lg(e={}, t) {
    const {__root: n, __injectWithOption: r} = e
      , o = n === void 0
      , i = e.flatJson
      , s = Cs ? ye : on;
    let a = $e(e.inheritLocale) ? e.inheritLocale : !0;
    const l = s(n && a ? n.locale.value : te(e.locale) ? e.locale : Ps)
      , c = s(n && a ? n.fallbackLocale.value : te(e.fallbackLocale) || rt(e.fallbackLocale) || we(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : l.value)
      , u = s(sg(l.value, e))
      , f = s(we(e.datetimeFormats) ? e.datetimeFormats : {
        [l.value]: {}
    })
      , d = s(we(e.numberFormats) ? e.numberFormats : {
        [l.value]: {}
    });
    let m = n ? n.missingWarn : $e(e.missingWarn) || Os(e.missingWarn) ? e.missingWarn : !0
      , _ = n ? n.fallbackWarn : $e(e.fallbackWarn) || Os(e.fallbackWarn) ? e.fallbackWarn : !0
      , b = n ? n.fallbackRoot : $e(e.fallbackRoot) ? e.fallbackRoot : !0
      , w = !!e.fallbackFormat
      , g = qe(e.missing) ? e.missing : null
      , E = qe(e.missing) ? Id(e.missing) : null
      , p = qe(e.postTranslation) ? e.postTranslation : null
      , y = n ? n.warnHtmlMessage : $e(e.warnHtmlMessage) ? e.warnHtmlMessage : !0
      , S = !!e.escapeParameter;
    const T = n ? n.modifiers : we(e.modifiers) ? e.modifiers : {};
    let A = e.pluralRules || n && n.pluralRules, L;
    L = (()=>{
        o && _d(null);
        const P = {
            version: t1,
            locale: l.value,
            fallbackLocale: c.value,
            messages: u.value,
            modifiers: T,
            pluralRules: A,
            missing: E === null ? void 0 : E,
            missingWarn: m,
            fallbackWarn: _,
            fallbackFormat: w,
            unresolving: !0,
            postTranslation: p === null ? void 0 : p,
            warnHtmlMessage: y,
            escapeParameter: S,
            messageResolver: e.messageResolver,
            messageCompiler: e.messageCompiler,
            __meta: {
                framework: "vue"
            }
        };
        P.datetimeFormats = f.value,
        P.numberFormats = d.value,
        P.__datetimeFormatters = we(L) ? L.__datetimeFormatters : void 0,
        P.__numberFormatters = we(L) ? L.__numberFormatters : void 0;
        const U = WT(P);
        return o && _d(U),
        U
    }
    )(),
    Ro(L, l.value, c.value);
    function I() {
        return [l.value, c.value, u.value, f.value, d.value]
    }
    const V = le({
        get: ()=>l.value,
        set: P=>{
            l.value = P,
            L.locale = l.value
        }
    })
      , x = le({
        get: ()=>c.value,
        set: P=>{
            c.value = P,
            L.fallbackLocale = c.value,
            Ro(L, l.value, P)
        }
    })
      , X = le(()=>u.value)
      , Y = le(()=>f.value)
      , j = le(()=>d.value);
    function M() {
        return qe(p) ? p : null
    }
    function K(P) {
        p = P,
        L.postTranslation = P
    }
    function F() {
        return g
    }
    function se(P) {
        P !== null && (E = Id(P)),
        g = P,
        L.missing = E
    }
    const H = (P,U,ie,fe,Be,Ze)=>{
        I();
        let dt;
        try {
            __INTLIFY_PROD_DEVTOOLS__,
            o || (L.fallbackContext = n ? YT() : void 0),
            dt = P(L)
        } finally {
            __INTLIFY_PROD_DEVTOOLS__,
            o || (L.fallbackContext = void 0)
        }
        if (ie !== "translate exists" && mt(dt) && dt === aa || ie === "translate exists" && !dt) {
            const [Hn,ba] = U();
            return n && b ? fe(n) : Be(Hn)
        } else {
            if (Ze(dt))
                return dt;
            throw an(Qt.UNEXPECTED_RETURN_TYPE)
        }
    }
    ;
    function ae(...P) {
        return H(U=>Reflect.apply(wd, null, [U, ...P]), ()=>jl(...P), "translate", U=>Reflect.apply(U.t, U, [...P]), U=>U, U=>te(U))
    }
    function ge(...P) {
        const [U,ie,fe] = P;
        if (fe && !be(fe))
            throw an(Qt.INVALID_ARGUMENT);
        return ae(U, ie, it({
            resolvedMessage: !0
        }, fe || {}))
    }
    function Ve(...P) {
        return H(U=>Reflect.apply(Td, null, [U, ...P]), ()=>Kl(...P), "datetime format", U=>Reflect.apply(U.d, U, [...P]), ()=>yd, U=>te(U))
    }
    function je(...P) {
        return H(U=>Reflect.apply(Ad, null, [U, ...P]), ()=>ql(...P), "number format", U=>Reflect.apply(U.n, U, [...P]), ()=>yd, U=>te(U))
    }
    function nt(P) {
        return P.map(U=>te(U) || mt(U) || $e(U) ? Cd(String(U)) : U)
    }
    const B = {
        normalize: nt,
        interpolate: P=>P,
        type: "vnode"
    };
    function ee(...P) {
        return H(U=>{
            let ie;
            const fe = U;
            try {
                fe.processor = B,
                ie = Reflect.apply(wd, null, [fe, ...P])
            } finally {
                fe.processor = null
            }
            return ie
        }
        , ()=>jl(...P), "translate", U=>U[Yl](...P), U=>[Cd(U)], U=>rt(U))
    }
    function G(...P) {
        return H(U=>Reflect.apply(Ad, null, [U, ...P]), ()=>ql(...P), "number format", U=>U[Jl](...P), Rd, U=>te(U) || rt(U))
    }
    function Z(...P) {
        return H(U=>Reflect.apply(Td, null, [U, ...P]), ()=>Kl(...P), "datetime format", U=>U[Wl](...P), Rd, U=>te(U) || rt(U))
    }
    function me(P) {
        A = P,
        L.pluralRules = A
    }
    function Ee(P, U) {
        return H(()=>{
            if (!P)
                return !1;
            const ie = te(U) ? U : l.value
              , fe = k(ie)
              , Be = L.messageResolver(fe, P);
            return go(Be) || jt(Be) || te(Be)
        }
        , ()=>[P], "translate exists", ie=>Reflect.apply(ie.te, ie, [P, U]), s1, ie=>$e(ie))
    }
    function h(P) {
        let U = null;
        const ie = zm(L, c.value, l.value);
        for (let fe = 0; fe < ie.length; fe++) {
            const Be = u.value[ie[fe]] || {}
              , Ze = L.messageResolver(Be, P);
            if (Ze != null) {
                U = Ze;
                break
            }
        }
        return U
    }
    function v(P) {
        const U = h(P);
        return U ?? (n ? n.tm(P) || {} : {})
    }
    function k(P) {
        return u.value[P] || {}
    }
    function R(P, U) {
        if (i) {
            const ie = {
                [P]: U
            };
            for (const fe in ie)
                Rs(ie, fe) && ui(ie[fe]);
            U = ie[P]
        }
        u.value[P] = U,
        L.messages = u.value
    }
    function N(P, U) {
        u.value[P] = u.value[P] || {};
        const ie = {
            [P]: U
        };
        if (i)
            for (const fe in ie)
                Rs(ie, fe) && ui(ie[fe]);
        U = ie[P],
        Dr(U, u.value[P]),
        L.messages = u.value
    }
    function q(P) {
        return f.value[P] || {}
    }
    function Q(P, U) {
        f.value[P] = U,
        L.datetimeFormats = f.value,
        kd(L, P, U)
    }
    function J(P, U) {
        f.value[P] = it(f.value[P] || {}, U),
        L.datetimeFormats = f.value,
        kd(L, P, U)
    }
    function $(P) {
        return d.value[P] || {}
    }
    function W(P, U) {
        d.value[P] = U,
        L.numberFormats = d.value,
        Ld(L, P, U)
    }
    function oe(P, U) {
        d.value[P] = it(d.value[P] || {}, U),
        L.numberFormats = d.value,
        Ld(L, P, U)
    }
    Pd++,
    n && Cs && (Ue(n.locale, P=>{
        a && (l.value = P,
        L.locale = P,
        Ro(L, l.value, c.value))
    }
    ),
    Ue(n.fallbackLocale, P=>{
        a && (c.value = P,
        L.fallbackLocale = P,
        Ro(L, l.value, c.value))
    }
    ));
    const re = {
        id: Pd,
        locale: V,
        fallbackLocale: x,
        get inheritLocale() {
            return a
        },
        set inheritLocale(P) {
            a = P,
            P && n && (l.value = n.locale.value,
            c.value = n.fallbackLocale.value,
            Ro(L, l.value, c.value))
        },
        get availableLocales() {
            return Object.keys(u.value).sort()
        },
        messages: X,
        get modifiers() {
            return T
        },
        get pluralRules() {
            return A || {}
        },
        get isGlobal() {
            return o
        },
        get missingWarn() {
            return m
        },
        set missingWarn(P) {
            m = P,
            L.missingWarn = m
        },
        get fallbackWarn() {
            return _
        },
        set fallbackWarn(P) {
            _ = P,
            L.fallbackWarn = _
        },
        get fallbackRoot() {
            return b
        },
        set fallbackRoot(P) {
            b = P
        },
        get fallbackFormat() {
            return w
        },
        set fallbackFormat(P) {
            w = P,
            L.fallbackFormat = w
        },
        get warnHtmlMessage() {
            return y
        },
        set warnHtmlMessage(P) {
            y = P,
            L.warnHtmlMessage = P
        },
        get escapeParameter() {
            return S
        },
        set escapeParameter(P) {
            S = P,
            L.escapeParameter = P
        },
        t: ae,
        getLocaleMessage: k,
        setLocaleMessage: R,
        mergeLocaleMessage: N,
        getPostTranslationHandler: M,
        setPostTranslationHandler: K,
        getMissingHandler: F,
        setMissingHandler: se,
        [r1]: me
    };
    return re.datetimeFormats = Y,
    re.numberFormats = j,
    re.rt = ge,
    re.te = Ee,
    re.tm = v,
    re.d = Ve,
    re.n = je,
    re.getDateTimeFormat = q,
    re.setDateTimeFormat = Q,
    re.mergeDateTimeFormat = J,
    re.getNumberFormat = $,
    re.setNumberFormat = W,
    re.mergeNumberFormat = oe,
    re[o1] = r,
    re[Yl] = ee,
    re[Wl] = Z,
    re[Jl] = G,
    re
}
const uu = {
    tag: {
        type: [String, Object]
    },
    locale: {
        type: String
    },
    scope: {
        type: String,
        validator: e=>e === "parent" || e === "global",
        default: "parent"
    },
    i18n: {
        type: Object
    }
};
function l1({slots: e}, t) {
    return t.length === 1 && t[0] === "default" ? (e.default ? e.default() : []).reduce((r,o)=>[...r, ...o.type === ct ? o.children : [o]], []) : t.reduce((n,r)=>{
        const o = e[r];
        return o && (n[r] = o()),
        n
    }
    , {})
}
function cg(e) {
    return ct
}
const c1 = Te({
    name: "i18n-t",
    props: it({
        keypath: {
            type: String,
            required: !0
        },
        plural: {
            type: [Number, String],
            validator: e=>mt(e) || !isNaN(e)
        }
    }, uu),
    setup(e, t) {
        const {slots: n, attrs: r} = t
          , o = e.i18n || la({
            useScope: e.scope,
            __useComponent: !0
        });
        return ()=>{
            const i = Object.keys(n).filter(f=>f !== "_")
              , s = {};
            e.locale && (s.locale = e.locale),
            e.plural !== void 0 && (s.plural = te(e.plural) ? +e.plural : e.plural);
            const a = l1(t, i)
              , l = o[Yl](e.keypath, a, s)
              , c = it({}, r)
              , u = te(e.tag) || be(e.tag) ? e.tag : cg();
            return ot(u, c, l)
        }
    }
})
  , Md = c1;
function u1(e) {
    return rt(e) && !te(e[0])
}
function ug(e, t, n, r) {
    const {slots: o, attrs: i} = t;
    return ()=>{
        const s = {
            part: !0
        };
        let a = {};
        e.locale && (s.locale = e.locale),
        te(e.format) ? s.key = e.format : be(e.format) && (te(e.format.key) && (s.key = e.format.key),
        a = Object.keys(e.format).reduce((d,m)=>n.includes(m) ? it({}, d, {
            [m]: e.format[m]
        }) : d, {}));
        const l = r(e.value, s, a);
        let c = [s.key];
        rt(l) ? c = l.map((d,m)=>{
            const _ = o[d.type]
              , b = _ ? _({
                [d.type]: d.value,
                index: m,
                parts: l
            }) : [d.value];
            return u1(b) && (b[0].key = `${d.type}-${m}`),
            b
        }
        ) : te(l) && (c = [l]);
        const u = it({}, i)
          , f = te(e.tag) || be(e.tag) ? e.tag : cg();
        return ot(f, u, c)
    }
}
const f1 = Te({
    name: "i18n-n",
    props: it({
        value: {
            type: Number,
            required: !0
        },
        format: {
            type: [String, Object]
        }
    }, uu),
    setup(e, t) {
        const n = e.i18n || la({
            useScope: "parent",
            __useComponent: !0
        });
        return ug(e, t, rg, (...r)=>n[Jl](...r))
    }
})
  , Nd = f1
  , d1 = Te({
    name: "i18n-d",
    props: it({
        value: {
            type: [Number, Date],
            required: !0
        },
        format: {
            type: [String, Object]
        }
    }, uu),
    setup(e, t) {
        const n = e.i18n || la({
            useScope: "parent",
            __useComponent: !0
        });
        return ug(e, t, ng, (...r)=>n[Wl](...r))
    }
})
  , Dd = d1;
function h1(e, t) {
    const n = e;
    if (e.mode === "composition")
        return n.__getInstance(t) || e.global;
    {
        const r = n.__getInstance(t);
        return r != null ? r.__composer : e.global.__composer
    }
}
function p1(e) {
    const t = s=>{
        const {instance: a, modifiers: l, value: c} = s;
        if (!a || !a.$)
            throw an(Qt.UNEXPECTED_ERROR);
        const u = h1(e, a.$)
          , f = xd(c);
        return [Reflect.apply(u.t, u, [...Fd(f)]), u]
    }
    ;
    return {
        created: (s,a)=>{
            const [l,c] = t(a);
            Cs && e.global === c && (s.__i18nWatcher = Ue(c.locale, ()=>{
                a.instance && a.instance.$forceUpdate()
            }
            )),
            s.__composer = c,
            s.textContent = l
        }
        ,
        unmounted: s=>{
            Cs && s.__i18nWatcher && (s.__i18nWatcher(),
            s.__i18nWatcher = void 0,
            delete s.__i18nWatcher),
            s.__composer && (s.__composer = void 0,
            delete s.__composer)
        }
        ,
        beforeUpdate: (s,{value: a})=>{
            if (s.__composer) {
                const l = s.__composer
                  , c = xd(a);
                s.textContent = Reflect.apply(l.t, l, [...Fd(c)])
            }
        }
        ,
        getSSRProps: s=>{
            const [a] = t(s);
            return {
                textContent: a
            }
        }
    }
}
function xd(e) {
    if (te(e))
        return {
            path: e
        };
    if (we(e)) {
        if (!("path"in e))
            throw an(Qt.REQUIRED_VALUE, "path");
        return e
    } else
        throw an(Qt.INVALID_VALUE)
}
function Fd(e) {
    const {path: t, locale: n, args: r, choice: o, plural: i} = e
      , s = {}
      , a = r || {};
    return te(n) && (s.locale = n),
    mt(o) && (s.plural = o),
    mt(i) && (s.plural = i),
    [t, a, s]
}
function m1(e, t, ...n) {
    const r = we(n[0]) ? n[0] : {}
      , o = !!r.useI18nComponentName;
    ($e(r.globalInstall) ? r.globalInstall : !0) && ([o ? "i18n" : Md.name, "I18nT"].forEach(s=>e.component(s, Md)),
    [Nd.name, "I18nN"].forEach(s=>e.component(s, Nd)),
    [Dd.name, "I18nD"].forEach(s=>e.component(s, Dd))),
    e.directive("t", p1(t))
}
const g1 = pr("global-vue-i18n");
function y1(e={}, t) {
    const n = $e(e.globalInjection) ? e.globalInjection : !0
      , r = !0
      , o = new Map
      , [i,s] = v1(e)
      , a = pr("");
    function l(f) {
        return o.get(f) || null
    }
    function c(f, d) {
        o.set(f, d)
    }
    function u(f) {
        o.delete(f)
    }
    {
        const f = {
            get mode() {
                return "composition"
            },
            get allowComposition() {
                return r
            },
            async install(d, ...m) {
                if (d.__VUE_I18N_SYMBOL__ = a,
                d.provide(d.__VUE_I18N_SYMBOL__, f),
                we(m[0])) {
                    const w = m[0];
                    f.__composerExtend = w.__composerExtend,
                    f.__vueI18nExtend = w.__vueI18nExtend
                }
                let _ = null;
                n && (_ = A1(d, f.global)),
                m1(d, f, ...m);
                const b = d.unmount;
                d.unmount = ()=>{
                    _ && _(),
                    f.dispose(),
                    b()
                }
            },
            get global() {
                return s
            },
            dispose() {
                i.stop()
            },
            __instances: o,
            __getInstance: l,
            __setInstance: c,
            __deleteInstance: u
        };
        return f
    }
}
function la(e={}) {
    const t = cn();
    if (t == null)
        throw an(Qt.MUST_BE_CALL_SETUP_TOP);
    if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__)
        throw an(Qt.NOT_INSTALLED);
    const n = _1(t)
      , r = E1(n)
      , o = ag(t)
      , i = b1(e, o);
    if (i === "global")
        return i1(r, e, o),
        r;
    if (i === "parent") {
        let l = S1(n, t, e.__useComponent);
        return l == null && (l = r),
        l
    }
    const s = n;
    let a = s.__getInstance(t);
    if (a == null) {
        const l = it({}, e);
        "__i18n"in o && (l.__i18n = o.__i18n),
        r && (l.__root = r),
        a = lg(l),
        s.__composerExtend && (a[zl] = s.__composerExtend(a)),
        T1(s, t, a),
        s.__setInstance(t, a)
    }
    return a
}
function v1(e, t, n) {
    const r = Ei();
    {
        const o = r.run(()=>lg(e));
        if (o == null)
            throw an(Qt.UNEXPECTED_ERROR);
        return [r, o]
    }
}
function _1(e) {
    {
        const t = gt(e.isCE ? g1 : e.appContext.app.__VUE_I18N_SYMBOL__);
        if (!t)
            throw an(e.isCE ? Qt.NOT_INSTALLED_WITH_PROVIDE : Qt.UNEXPECTED_ERROR);
        return t
    }
}
function b1(e, t) {
    return ia(e) ? "__i18n"in t ? "local" : "global" : e.useScope ? e.useScope : "local"
}
function E1(e) {
    return e.mode === "composition" ? e.global : e.global.__composer
}
function S1(e, t, n=!1) {
    let r = null;
    const o = t.root;
    let i = w1(t, n);
    for (; i != null; ) {
        const s = e;
        if (e.mode === "composition" && (r = s.__getInstance(i)),
        r != null || o === i)
            break;
        i = i.parent
    }
    return r
}
function w1(e, t=!1) {
    return e == null ? null : t && e.vnode.ctx || e.parent
}
function T1(e, t, n) {
    Xt(()=>{}
    , t),
    Gs(()=>{
        const r = n;
        e.__deleteInstance(t);
        const o = r[zl];
        o && (o(),
        delete r[zl])
    }
    , t)
}
const k1 = ["locale", "fallbackLocale", "availableLocales"]
  , Ud = ["t", "rt", "d", "n", "tm", "te"];
function A1(e, t) {
    const n = Object.create(null);
    return k1.forEach(o=>{
        const i = Object.getOwnPropertyDescriptor(t, o);
        if (!i)
            throw an(Qt.UNEXPECTED_ERROR);
        const s = et(i.value) ? {
            get() {
                return i.value.value
            },
            set(a) {
                i.value.value = a
            }
        } : {
            get() {
                return i.get && i.get()
            }
        };
        Object.defineProperty(n, o, s)
    }
    ),
    e.config.globalProperties.$i18n = n,
    Ud.forEach(o=>{
        const i = Object.getOwnPropertyDescriptor(t, o);
        if (!i || !i.value)
            throw an(Qt.UNEXPECTED_ERROR);
        Object.defineProperty(e.config.globalProperties, `$${o}`, i)
    }
    ),
    ()=>{
        delete e.config.globalProperties.$i18n,
        Ud.forEach(o=>{
            delete e.config.globalProperties[`$${o}`]
        }
        )
    }
}
n1();
BT(QT);
HT(ET);
jT(zm);
if (__INTLIFY_PROD_DEVTOOLS__) {
    const e = ou();
    e.__INTLIFY__ = !0,
    RT(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__)
}
var L1 = Object.defineProperty
  , C1 = Object.defineProperties
  , O1 = Object.getOwnPropertyDescriptors
  , Vd = Object.getOwnPropertySymbols
  , R1 = Object.prototype.hasOwnProperty
  , P1 = Object.prototype.propertyIsEnumerable
  , Bd = (e,t,n)=>t in e ? L1(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : e[t] = n
  , ue = (e,t)=>{
    for (var n in t || (t = {}))
        R1.call(t, n) && Bd(e, n, t[n]);
    if (Vd)
        for (var n of Vd(t))
            P1.call(t, n) && Bd(e, n, t[n]);
    return e
}
  , Qe = (e,t)=>C1(e, O1(t));
const $t = "Notivue__"
  , I1 = 6e3
  , Fe = {
    SUCCESS: "success",
    ERROR: "error",
    WARNING: "warning",
    INFO: "info",
    PROMISE: "promise",
    PROMISE_RESOLVE: "promise-resolve",
    PROMISE_REJECT: "promise-reject"
}
  , fi = {
    title: "",
    message: "",
    duration: I1,
    ariaLive: "polite",
    ariaRole: "status"
}
  , Gl = Qe(ue({}, fi), {
    ariaLive: "assertive",
    ariaRole: "alert"
})
  , M1 = Qe(ue({}, fi), {
    duration: 1 / 0
})
  , N1 = Qe(ue({}, Gl), {
    ariaLive: "polite"
})
  , D1 = ue({}, fi)
  , x1 = {
    [Fe.SUCCESS]: fi,
    [Fe.ERROR]: Gl,
    [Fe.WARNING]: N1,
    [Fe.INFO]: D1,
    [Fe.PROMISE]: M1,
    [Fe.PROMISE_RESOLVE]: fi,
    [Fe.PROMISE_REJECT]: Gl
}
  , fg = {
    pauseOnHover: !0,
    pauseOnTouch: !0,
    pauseOnTabChange: !0,
    enqueue: !1,
    position: "top-center",
    teleportTo: "body",
    notifications: x1,
    limit: 1 / 0,
    animations: {
        enter: $t + "enter",
        leave: $t + "leave",
        clearAll: $t + "clearAll"
    }
}
  , Fn = U1();
function F1(e) {
    Object.assign(Fn, e)
}
function dg(e) {
    let t = 0;
    function n(r, o, i=`${t++}`) {
        return typeof r == "string" && (r = {
            message: r
        }),
        e.push(Qe(ue({}, r), {
            id: i,
            type: o
        })),
        {
            id: i,
            clear: ()=>e.clear(i),
            destroy: ()=>e.clear(i, {
                isDestroy: !0
            })
        }
    }
    return {
        success: r=>n(r, Fe.SUCCESS),
        error: r=>n(r, Fe.ERROR),
        warning: r=>n(r, Fe.WARNING),
        info: r=>n(r, Fe.INFO),
        promise: r=>{
            const {id: o, clear: i, destroy: s} = n(r, Fe.PROMISE);
            return {
                resolve: a=>n(a, Fe.PROMISE_RESOLVE, o),
                reject: a=>n(a, Fe.PROMISE_REJECT, o),
                success: a=>n(a, Fe.PROMISE_RESOLVE, o),
                error: a=>n(a, Fe.PROMISE_REJECT, o),
                clear: i,
                destroy: s
            }
        }
        ,
        load(r) {
            return this.promise(r)
        },
        clearAll: ()=>e.clearAll(),
        destroyAll: ()=>e.destroyAll()
    }
}
function U1() {
    const e = new Proxy({},{
        get: ()=>()=>{}
    });
    return dg(e)
}
function V1(e) {
    Ue(e.config.isTopAlign, ()=>{
        e.animations.updatePositions({
            isImmediate: !0
        })
    }
    , {
        flush: "post"
    }),
    Ue(()=>e.items.length, ()=>{
        e.animations.updatePositions()
    }
    , {
        flush: "post"
    }),
    Ue(()=>e.items.length === 0 && e.queue.length === 0, t=>{
        t && (e.timeouts.reset(),
        e.elements.setRootAttrs({}))
    }
    , {
        flush: "post"
    }),
    Ue(()=>e.config.animations.value.enter, (t,n)=>{
        t !== n && e.animations.resetTransitionData()
    }
    )
}
const B1 = typeof window > "u";
function rr(e) {
    return e.pointerType === "mouse"
}
function fu(e, t) {
    const n = ue({}, e);
    for (const r in t)
        t.hasOwnProperty(r) && (j1(t[r]) ? n[r] = fu(e[r], t[r]) : n[r] = t[r]);
    return n
}
function H1(e, t) {
    return t.props || (t.props = {}),
    ue(ue(ue(ue({}, e[t.type]), e.global), t), t.type === "promise" ? {
        duration: 1 / 0
    } : {})
}
function j1(e) {
    if (Object.prototype.toString.call(e) !== "[object Object]")
        return !1;
    const t = Object.getPrototypeOf(e);
    return t === null || Object.getPrototypeOf(t) === null
}
function K1(e, t) {
    return Ic(yt(fu(e, t)))
}
function q1(e) {
    return Object.entries(e).reduce((t,[n,{value: r}])=>Qe(ue({}, t), {
        [n]: _e(r)
    }), {})
}
const Y1 = ["timeout", "resumedAt", "remaining", "animationAttrs", "positionStyles"];
function hg(e) {
    return Object.fromEntries(Object.entries(e).filter(([t])=>!Y1.includes(t)))
}
function pg(e) {
    return `${e.title ? `${e.title}: ` : ""}${e.message}`
}
function W1(e) {
    const t = K1(fg, e)
      , n = le(()=>t.position.value.startsWith("top"));
    function r(o) {
        typeof o == "function" && (o = o(q1(t)));
        for (const i of Object.keys(o))
            typeof t[i].value == "object" ? t[i].value = fu(t[i].value, o[i]) : t[i].value = o[i]
    }
    return Qe(ue({}, t), {
        isTopAlign: n,
        update: r
    })
}
function J1() {
    return {
        entries: on([]),
        get length() {
            return this.entries.value.length
        },
        add(e) {
            this.entries.value.push(e),
            this.triggerRef()
        },
        get(e) {
            return this.entries.value.find(t=>t.id === e)
        },
        update(e, t) {
            var n;
            Object.assign((n = this.get(e)) != null ? n : {}, t)
        },
        triggerRef() {
            ap(this.entries)
        },
        remove(e) {
            this.entries.value = this.entries.value.filter(t=>t.id !== e)
        },
        clear() {
            this.entries.value = []
        }
    }
}
function z1(e, t) {
    return {
        entries: on([]),
        get length() {
            return this.entries.value.length
        },
        add(n) {
            this.entries.value.unshift(n),
            this.triggerRef()
        },
        addFromQueue() {
            const n = Qe(ue({}, t.entries.value[0]), {
                timeout: t.entries.value[0].timeout(),
                createdAt: Date.now()
            });
            t.remove(n.id),
            this.add(n)
        },
        get(n) {
            return this.entries.value.find(r=>r.id === n)
        },
        update(n, r) {
            var o;
            Object.assign((o = this.get(n)) != null ? o : {}, r)
        },
        triggerRef() {
            ap(this.entries)
        },
        updateAll(n) {
            this.entries.value = this.entries.value.map(n)
        },
        remove(n) {
            this.entries.value = this.entries.value.filter(r=>r.id !== n),
            t.length > 0 && this.length < e.limit.value && Ft(()=>this.addFromQueue())
        },
        clear() {
            this.entries.value = [],
            t.clear()
        }
    }
}
function G1() {
    return {
        root: ye(null),
        rootAttrs: on({}),
        setRootAttrs(e) {
            this.rootAttrs.value = e
        },
        items: ye([]),
        getSortedItems() {
            return this.items.value.sort((e,t)=>+t.dataset.notivueId - +e.dataset.notivueId)
        },
        containers: ye([])
    }
}
function Q1(e, t, n) {
    return {
        isReducedMotion: ye(!1),
        transitionData: null,
        setReducedMotion(r) {
            this.isReducedMotion.value = r
        },
        getTransitionData() {
            return this.transitionData || this.setTransitionData(),
            this.transitionData
        },
        resetTransitionData() {
            this.transitionData = null
        },
        setTransitionData() {
            var r;
            const o = e.animations.value.enter
              , i = o ? (r = n.root.value) == null ? void 0 : r.querySelector(`.${o}`) : null;
            if (!i)
                this.transitionData = {
                    duration: "0s",
                    easing: "ease"
                };
            else {
                const s = window.getComputedStyle(i);
                this.transitionData = {
                    duration: s.animationDuration,
                    easing: s.animationTimingFunction
                }
            }
        },
        playLeave(r, {isDestroy: o=!1, isUserTriggered: i=!1}={}) {
            const s = t.get(r);
            window.clearTimeout(s == null ? void 0 : s.timeout);
            function a() {
                var c;
                t.remove(r),
                (c = s == null ? void 0 : s[i ? "onManualClear" : "onAutoClear"]) == null || c.call(s, hg(s))
            }
            const {leave: l=""} = e.animations.value;
            if (!s || !l || o || this.isReducedMotion.value)
                return a();
            t.update(r, {
                positionStyles: Qe(ue({}, s.positionStyles), {
                    zIndex: -1
                }),
                animationAttrs: {
                    class: l,
                    onAnimationend: a
                }
            }),
            this.updatePositions()
        },
        playClearAll() {
            const {clearAll: r=""} = e.animations.value;
            if (t.entries.value.forEach(o=>window.clearTimeout(o.timeout)),
            !r || this.isReducedMotion.value)
                return t.clear();
            n.setRootAttrs({
                class: r,
                onAnimationend: ()=>t.clear()
            })
        },
        updatePositions({isImmediate: r=!1}={}) {
            const o = this.isReducedMotion.value || r
              , i = e.animations.value.leave;
            let s = 0;
            for (const a of n.getSortedItems()) {
                const l = a.dataset.notivueId
                  , c = t.get(l);
                if (!a || !c || c.animationAttrs.class === i)
                    continue;
                const {duration: u, easing: f} = this.getTransitionData();
                t.update(l, {
                    positionStyles: ue({
                        willChange: "transform",
                        transform: `translate3d(0, ${s}px, 0)`
                    }, o ? {
                        transition: "none"
                    } : {
                        transitionDuration: u,
                        transitionTimingFunction: f
                    })
                }),
                s += (e.isTopAlign.value ? 1 : -1) * a.clientHeight
            }
            t.triggerRef()
        }
    }
}
function X1(e, t) {
    return {
        isStreamPaused: ye(!1),
        isStreamFocused: ye(!1),
        debounceTimeout: void 0,
        setStreamPause(n=!0) {
            this.isStreamPaused.value = n
        },
        setStreamFocus(n=!0) {
            this.isStreamFocused.value = n
        },
        clearDebounceTimeout() {
            window.clearTimeout(this.debounceTimeout)
        },
        reset() {
            this.clearDebounceTimeout(),
            this.setStreamPause(!1),
            this.setStreamFocus(!1)
        },
        create(n, r) {
            if (Number.isFinite(r) && r > 0)
                return window.setTimeout(()=>t.playLeave(n), r)
        },
        pause() {
            e.length === 0 || this.isStreamPaused.value || (e.updateAll(n=>{
                if (window.clearTimeout(n.timeout),
                !n.timeout)
                    return n;
                let r = 0;
                return n.remaining == null ? r = n.duration - (Date.now() - n.createdAt) : r = n.remaining - (Date.now() - n.resumedAt),
                Qe(ue({}, n), {
                    remaining: r
                })
            }
            ),
            this.setStreamPause())
        },
        resume() {
            e.length === 0 || !this.isStreamPaused.value || (e.updateAll(n=>{
                var r;
                return window.clearTimeout(n.timeout),
                n.timeout ? Qe(ue({}, n), {
                    timeout: this.create(n.id, (r = n.remaining) != null ? r : n.duration),
                    resumedAt: Date.now()
                }) : n
            }
            ),
            this.setStreamPause(!1))
        },
        resumeWithDebounce(n) {
            this.debounceTimeout = window.setTimeout(()=>{
                this.resume()
            }
            , n)
        }
    }
}
function Z1({config: e, items: t, queue: n, animations: r, timeouts: o}) {
    return {
        destroyAll() {
            t.clear()
        },
        clearAll() {
            r.playClearAll()
        },
        clear(i, {isDestroy: s=!1}={}) {
            var a;
            ((a = t.entries.value[t.entries.value.length - 1]) == null ? void 0 : a.id) === i && o.resume(),
            r.playLeave(i, {
                isUserTriggered: !0,
                isDestroy: s
            })
        },
        push(i) {
            const s = Date.now()
              , a = H1(e.notifications.value, i)
              , l = ()=>o.create(a.id, a.duration);
            if ([Fe.PROMISE_RESOLVE, Fe.PROMISE_REJECT].includes(i.type))
                n.get(a.id) ? (n.update(a.id, Qe(ue({}, a), {
                    createdAt: s,
                    timeout: l
                })),
                n.triggerRef()) : (t.update(a.id, Qe(ue({}, a), {
                    createdAt: s,
                    timeout: l()
                })),
                t.triggerRef());
            else {
                const c = e.enqueue.value
                  , u = t.length >= e.limit.value;
                !c && u && t.entries.value.slice(e.limit.value - 1).forEach(({id: m})=>o.create(m, 1));
                const f = c && !i.skipQueue && u
                  , d = Qe(ue({}, a), {
                    createdAt: s,
                    animationAttrs: {
                        class: r.isReducedMotion.value ? "" : e.animations.value.enter,
                        onAnimationend() {
                            t.update(a.id, {
                                animationAttrs: {
                                    class: "",
                                    onAnimationend: void 0
                                }
                            })
                        }
                    },
                    timeout: f ? l : l(),
                    clear: ()=>this.clear(a.id),
                    destroy: ()=>this.clear(a.id, {
                        isDestroy: !0
                    })
                });
                f ? n.add(d) : t.add(d)
            }
        }
    }
}
const mg = Symbol("");
function $1(e={}) {
    const t = W1(e)
      , n = J1()
      , r = z1(t, n)
      , o = G1()
      , i = Q1(t, r, o)
      , s = X1(r, i)
      , a = {
        config: t,
        queue: n,
        items: r,
        elements: o,
        animations: i,
        timeouts: s
    }
      , l = Z1(a)
      , c = Object.freeze(dg(l));
    return F1(c),
    V1(a),
    {
        install(u) {
            u.config.globalProperties.$push = c,
            u.provide(mg, a)
        }
    }
}
function gr() {
    return gt(mg)
}
function ek() {
    return B1 ? Qe(ue({}, Ic(yt(fg))), {
        isTopAlign: le(()=>!0),
        update: ()=>{}
    }) : gr().config
}
const gg = {
    listAriaLabel: "Notifications"
}
  , tk = Te({
    setup(e, {slots: t, attrs: n}) {
        const r = ye(!1);
        return Xt(()=>r.value = !0),
        ()=>{
            var o;
            return r.value ? (o = t.default) == null ? void 0 : o.call(t) : Ye("span", n, "")
        }
    }
})
  , nk = ["role", "aria-live"]
  , rk = Te({
    __name: "AriaLive",
    props: {
        item: {}
    },
    setup(e) {
        const t = e
          , n = {
            position: "absolute",
            width: "1px",
            height: "1px",
            padding: "0",
            margin: "-1px",
            overflow: "hidden",
            clip: "rect(0, 0, 0, 0)",
            whiteSpace: "nowrap",
            border: "0"
        };
        return (r,o)=>(he(),
        Ye("div", {
            style: n,
            role: t.item.ariaRole,
            "aria-live": t.item.ariaLive,
            key: `${r.item.id}_${r.item.type}`
        }, In(z(pg)(t.item)), 9, nk))
    }
});
function ok() {
    const {timeouts: e, config: t} = gr();
    function n(o) {
        rr(o) && e.pause()
    }
    function r(o) {
        rr(o) && e.resume()
    }
    return le(()=>t.pauseOnHover.value && !e.isStreamFocused.value ? {
        onPointerenter: n,
        onPointerleave: r
    } : {})
}
function ik() {
    const {timeouts: e, config: t} = gr();
    function n(r) {
        rr(r) || (e.clearDebounceTimeout(),
        e.pause(),
        e.resumeWithDebounce(2e3))
    }
    return ln(()=>{
        e.clearDebounceTimeout()
    }
    ),
    le(()=>t.pauseOnTouch.value && !e.isStreamFocused.value ? {
        onPointerdown: n
    } : {})
}
const ja = {
    boxSizing: "border-box"
}
  , Ka = {
    list: Qe(ue({}, ja), {
        display: "flex",
        justifyContent: "center",
        listStyle: "none",
        margin: "0 auto",
        maxWidth: "var(--nv-root-width, 100%)",
        padding: "0",
        pointerEvents: "none",
        position: "fixed",
        zIndex: "var(--nv-z, 500)"
    }),
    listItem: Qe(ue({}, ja), {
        display: "flex",
        margin: "0",
        position: "absolute",
        transitionProperty: "transform",
        width: "100%"
    }),
    itemContainer: Qe(ue({}, ja), {
        maxWidth: "100%",
        padding: "0 0 var(--nv-gap, 0.75rem) 0",
        pointerEvents: "auto"
    })
};
function sk() {
    const {isTopAlign: e, position: t} = ek()
      , n = le(()=>{
        const o = e.value
          , i = [`var(--nv-root-top, ${o ? "1.25rem" : "0px"})`, "var(--nv-root-right, 1.25rem)", `var(--nv-root-bottom, ${o ? "0px" : "1.25rem"})`, "var(--nv-root-left, 1.25rem)"]
          , s = i.map(a=>`calc(-1 * ${a})`);
        return o ? s.splice(2, 1, "0px") : s.splice(0, 1, "0px"),
        {
            inset: i.join(" "),
            clipPath: `inset(${s.join(" ")})`
        }
    }
    )
      , r = le(()=>({
        [e.value ? "top" : "bottom"]: "0",
        justifyContent: `var(--nv-root-x-align, ${t.value.endsWith("left") ? "flex-start" : t.value.endsWith("right") ? "flex-end" : "center"})`
    }));
    return le(()=>({
        list: ue(ue({}, Ka.list), n.value),
        listItem: ue(ue({}, Ka.listItem), r.value),
        itemContainer: Ka.itemContainer
    }))
}
function ak(e) {
    function t() {
        window.matchMedia("(max-width: 1100px)").matches && e()
    }
    Xt(()=>{
        window.addEventListener("resize", t)
    }
    ),
    ln(()=>{
        window.removeEventListener("resize", t)
    }
    )
}
function lk(e, t) {
    let n;
    const r = new Set;
    Xt(()=>{
        n = new ResizeObserver((o,i)=>{
            o.forEach(s=>{
                r.has(s.target) ? (t(),
                r.delete(s.target),
                i.unobserve(s.target)) : r.add(s.target)
            }
            )
        }
        )
    }
    ),
    Ue(e, o=>{
        o.length > 0 && o.forEach(i=>n == null ? void 0 : n.observe(i))
    }
    , {
        flush: "post"
    }),
    ln(()=>{
        n == null || n.disconnect()
    }
    )
}
function ck() {
    const {elements: e, animations: t} = gr();
    ak(()=>t.updatePositions({
        isImmediate: !0
    })),
    lk(e.items.value, ()=>t.updatePositions())
}
function uk() {
    const {items: e, config: t, timeouts: n} = gr();
    function r() {
        n.isStreamFocused.value || (document.visibilityState === "visible" ? t.pauseOnTabChange.value && n.resume() : t.pauseOnTabChange.value ? n.pause() : e.clear())
    }
    Xt(()=>{
        document.addEventListener("visibilitychange", r)
    }
    ),
    ln(()=>{
        document.removeEventListener("visibilitychange", r)
    }
    )
}
function fk() {
    const {animations: e} = gr()
      , t = window.matchMedia("(prefers-reduced-motion: reduce)")
      , n = ()=>e.setReducedMotion(t.matches);
    Xt(()=>{
        var r;
        n(),
        (r = t.addEventListener) == null || r.call(t, "change", n)
    }
    ),
    ln(()=>{
        var r;
        (r = t.removeEventListener) == null || r.call(t, "change", n)
    }
    )
}
const dk = ["data-notivue-align", "aria-label"]
  , hk = ["data-notivue-id", "aria-setsize", "aria-posinset"]
  , pk = ["aria-label", "tabindex", "data-notivue-container"]
  , mk = Te({
    __name: "NotivueImpl",
    props: Qs({
        class: {},
        containersTabIndex: {},
        listAriaLabel: {},
        styles: {}
    }, gg),
    setup(e) {
        const t = e
          , {config: n, items: r, elements: o} = gr()
          , i = sk()
          , s = ok()
          , a = ik();
        return fk(),
        uk(),
        ck(),
        (l,c)=>{
            var u;
            return he(),
            ht(e_, {
                to: z(n).teleportTo.value === !1 ? void 0 : z(n).teleportTo.value,
                disabled: z(n).teleportTo.value === !1
            }, [z(r).length > 0 ? (he(),
            Ye("ol", fo({
                key: 0
            }, ue(ue(ue({}, z(s)), z(a)), z(o).rootAttrs.value), {
                "data-notivue-align": z(n).isTopAlign.value ? "top" : "bottom",
                "aria-label": t.listAriaLabel,
                ref: z(o).root,
                class: t.class,
                style: ue(ue({}, z(i).list), (u = t.styles) == null ? void 0 : u.list)
            }), [(he(!0),
            Ye(ct, null, Cv(z(r).entries.value, (f,d)=>{
                var m, _, b, w;
                return he(),
                Ye("li", {
                    tabindex: "-1",
                    key: f.id,
                    "data-notivue-id": f.id,
                    "aria-setsize": z(r).length,
                    "aria-posinset": d + 1,
                    ref_for: !0,
                    ref: z(o).items,
                    style: En(ue(ue(ue({}, z(i).listItem), f.positionStyles), (m = t.styles) == null ? void 0 : m.listItem))
                }, [f.ariaLiveOnly ? (he(),
                ht(rk, {
                    key: 0,
                    item: f
                }, null, 8, ["item"])) : (he(),
                Ye("div", fo({
                    key: 1
                }, f.animationAttrs, {
                    "aria-label": z(pg)(f),
                    tabindex: (b = (_ = l.containersTabIndex) == null ? void 0 : _[f.id]) != null ? b : -1,
                    "data-notivue-container": f.id,
                    ref_for: !0,
                    ref: z(o).containers,
                    style: ue(ue({}, z(i).itemContainer), (w = t.styles) == null ? void 0 : w.itemContainer)
                }), [dr(l.$slots, "default", zt(Ut(z(hg)(f))))], 16, pk))], 12, hk)
            }
            ), 128))], 16, dk)) : yn("", !0)], 8, ["to", "disabled"])
        }
    }
})
  , $I = Te({
    __name: "Notivue",
    props: Qs({
        class: {},
        containersTabIndex: {},
        listAriaLabel: {},
        styles: {}
    }, gg),
    setup(e) {
        const t = e;
        return (n,r)=>(he(),
        ht(z(tk), null, {
            default: Gt(()=>[We(mk, zt(Ut(t)), {
                default: Gt(o=>[dr(n.$slots, "default", zt(Ut(o)))]),
                _: 3
            }, 16)]),
            _: 3
        }))
    }
})
  , gk = {
    touchOnly: !1,
    exclude: "a, button",
    disabled: !1,
    threshold: .5
}
  , yk = 300
  , qa = {
    Mouse: 200,
    Touch: 1e3,
    TouchExternal: 1400
}
  , eM = Te({
    __name: "NotivueSwipe",
    props: Qs({
        item: {},
        touchOnly: {
            type: Boolean
        },
        exclude: {},
        disabled: {
            type: Boolean
        },
        threshold: {},
        destroy: {
            type: Boolean
        }
    }, gk),
    setup(e) {
        const {items: t, timeouts: n, elements: r, animations: o} = gr()
          , i = e
          , s = Xr(i, "touchOnly")
          , a = Xr(i, "exclude")
          , l = Xr(i, "disabled")
          , c = Xr(i, "threshold")
          , u = le(()=>i.item.type === Fe.PROMISE)
          , f = le(()=>!n.isStreamFocused.value && !l.value && !u.value && i.item.duration < 1 / 0)
          , d = ye(null)
          , m = {
            isPressed: !1,
            isClearing: !1,
            startX: 0,
            currentX: 0
        }
          , _ = So(m)
          , b = on({});
        function w(H) {
            Object.assign(_, H)
        }
        function g(H) {
            b.value = ue(ue({}, b.value), H)
        }
        function E() {
            b.value = {}
        }
        Ue(()=>t.length, (H,ae)=>{
            H !== ae && _.isPressed && (T(),
            w(m))
        }
        , {
            flush: "post"
        });
        function p() {
            d.value && (g({
                touchAction: "none",
                userSelect: "none",
                cursor: "grab"
            }),
            d.value.querySelectorAll("*").forEach(H=>{
                H instanceof HTMLElement && (H.style.userSelect = "none",
                H.style.touchAction = "none")
            }
            ))
        }
        function y() {
            d.value && (E(),
            d.value.querySelectorAll("*").forEach(H=>{
                H instanceof HTMLElement && (H.style.userSelect = "auto",
                H.style.touchAction = "auto")
            }
            ))
        }
        function S(H) {
            return !(s.value && H.pointerType !== "touch")
        }
        function T() {
            g({
                transition: o.isReducedMotion.value ? "none" : `${yk}ms cubic-bezier(0.76, 0, 0.24, 1)`,
                transform: "translate3d(0px, 0px, 0px)",
                opacity: "1"
            })
        }
        function A(H) {
            if (!r.root.value || !d.value)
                return !1;
            const {clientWidth: ae, offsetLeft: ge} = d.value
              , Ve = ge + r.root.value.offsetLeft
              , je = Ve + ae;
            return H.clientX > Ve && H.clientX < je
        }
        function L(H) {
            return rr(H) ? qa.Mouse : qa.Touch
        }
        function O() {
            n.clearDebounceTimeout(),
            n.pause()
        }
        function I(H) {
            n.clearDebounceTimeout(),
            n.resumeWithDebounce(H)
        }
        function V(H) {
            S(H) || y()
        }
        function x(H) {
            if (S(H) && (H.stopPropagation(),
            !!d.value && H.button === 0 && !(_.isPressed || _.isClearing))) {
                if (a.value && Array.from(d.value.querySelectorAll(a.value)).includes(H.target)) {
                    rr(H) || (O(),
                    I(qa.TouchExternal));
                    return
                }
                rr(H) || O(),
                w({
                    startX: H.clientX,
                    isPressed: !0
                })
            }
        }
        function X(H) {
            if (!S(H) || (H.stopPropagation(),
            !_.isPressed || _.isClearing))
                return;
            const {clientWidth: ae} = d.value;
            g({
                transition: "none",
                transform: `translate3d(${_.currentX}px, 0px, 0px)`,
                opacity: `${1 - Math.abs(_.currentX) / ae * (1 / c.value)}`
            }),
            w({
                currentX: H.clientX - _.startX
            }),
            Math.abs(_.currentX) > ae * c.value && (_.isClearing = !0,
            Y(H))
        }
        function Y(H) {
            if (i.item.destroy(),
            rr(H) && A(H)) {
                const ae = r.getSortedItems();
                ae[ae.length - 1].contains(d.value) || O()
            } else
                I(L(H));
            w({
                isClearing: !1
            })
        }
        function j(H) {
            S(H) && (H.stopPropagation(),
            !(!_.isPressed || _.isClearing) && (rr(H) && A(H) ? O() : I(L(H)),
            T(),
            w({
                startX: 0,
                currentX: 0,
                isPressed: !1
            })))
        }
        function M(H) {
            S(H) && (H.stopPropagation(),
            !(!_.isPressed || _.isClearing) && (T(),
            w({
                startX: 0,
                currentX: 0,
                isPressed: !1
            }),
            I(L(H))))
        }
        const K = [["pointerenter", V], ["pointerdown", x], ["pointermove", X], ["pointerup", j], ["pointerleave", M]];
        function F() {
            d.value && K.forEach(([H,ae])=>{
                d.value.addEventListener(H, ae)
            }
            )
        }
        function se() {
            d.value && K.forEach(([H,ae])=>{
                d.value.removeEventListener(H, ae)
            }
            )
        }
        return Ue(f, (H,ae,ge)=>{
            Ft(()=>{
                H && (p(),
                Ft(F))
            }
            ),
            ge(()=>{
                se(),
                y()
            }
            )
        }
        , {
            immediate: !0,
            flush: "post"
        }),
        ln(se),
        (H,ae)=>l.value ? dr(H.$slots, "default", {
            key: 1
        }) : (he(),
        Ye("div", {
            key: 0,
            ref_key: "itemRef",
            ref: d,
            style: En(b.value)
        }, [dr(H.$slots, "default")], 4))
    }
})
  , vk = de("path", {
    d: "M6,-0c-3.308,-0 -6,2.692 -6,6c-0,3.308 2.692,6 6,6c3.308,-0 6,-2.692 6,-6c-0,-3.308 -2.692,-6 -6,-6Zm3.123,3.989l-3.877,4.616c-0.086,0.102 -0.213,0.162 -0.346,0.164l-0.008,0c-0.131,0 -0.256,-0.055 -0.343,-0.153l-1.662,-1.846c-0.081,-0.085 -0.126,-0.199 -0.126,-0.316c0,-0.254 0.209,-0.462 0.462,-0.462c0.135,0 0.263,0.059 0.35,0.161l1.307,1.451l3.536,-4.209c0.087,-0.101 0.215,-0.159 0.349,-0.159c0.253,-0 0.461,0.208 0.461,0.461c0,0.107 -0.036,0.21 -0.103,0.292Z"
}, null, -1)
  , _k = [vk]
  , Hd = Te({
    __name: "SuccessIcon",
    setup(e) {
        return (t,n)=>(he(),
        Ye("svg", zt(Ut(z(To))), _k, 16))
    }
})
  , bk = de("path", {
    d: "M6,-0c-3.308,-0 -6,2.692 -6,6c-0,3.308 2.692,6 6,6c3.308,-0 6,-2.692 6,-6c-0,-3.308 -2.692,-6 -6,-6Zm-0,9.228c-0.316,0 -0.577,-0.26 -0.577,-0.577c0,-0.316 0.261,-0.577 0.577,-0.577c0.316,0 0.577,0.261 0.577,0.577c-0,0.317 -0.261,0.577 -0.577,0.577Zm0.627,-5.802l-0.166,3.519c-0,0.253 -0.208,0.462 -0.462,0.462c-0.253,-0 -0.461,-0.209 -0.461,-0.462l-0.166,-3.518l0,-0.001c-0,-0.009 -0,-0.018 -0,-0.027c-0,-0.344 0.283,-0.627 0.627,-0.627c0.344,0 0.627,0.283 0.627,0.627c-0,0.009 -0,0.018 -0.001,0.027l0.002,-0Z"
}, null, -1)
  , Ek = [bk]
  , Ya = Te({
    __name: "ErrorIcon",
    setup(e) {
        return (t,n)=>(he(),
        Ye("svg", zt(Ut(z(To))), Ek, 16))
    }
})
  , Sk = de("path", {
    d: "M6,0c-3.308,0 -6,2.692 -6,6c0,3.308 2.692,6 6,6c3.308,0 6,-2.692 6,-6c0,-3.308 -2.692,-6 -6,-6Zm0,2.46c0.428,0 0.78,0.352 0.78,0.78c-0,0.428 -0.352,0.78 -0.78,0.78c-0.428,0 -0.78,-0.352 -0.78,-0.78c0,-0.428 0.352,-0.78 0.78,-0.78Zm1.44,6.78l-2.64,0c-0.263,0 -0.48,-0.217 -0.48,-0.48c0,-0.263 0.217,-0.48 0.48,-0.48l0.84,0l0,-2.64l-0.48,0c-0.263,0 -0.48,-0.217 -0.48,-0.48c0,-0.263 0.217,-0.48 0.48,-0.48l0.96,0c0.263,0 0.48,0.217 0.48,0.48l0,3.12l0.84,0c0.263,0 0.48,0.217 0.48,0.48c0,0.263 -0.217,0.48 -0.48,0.48Z"
}, null, -1)
  , wk = [Sk]
  , Tk = Te({
    __name: "InfoIcon",
    setup(e) {
        return (t,n)=>(he(),
        Ye("svg", zt(Ut(z(To))), wk, 16))
    }
})
  , kk = de("path", {
    d: "M11.963,6.037c-0,3.292 -2.671,5.963 -5.963,5.963c-3.292,0 -5.963,-2.671 -5.963,-5.963c0,-3.292 2.671,-5.962 5.963,-5.962c3.292,-0 5.963,2.67 5.963,5.962Zm-0.918,0c0,-2.785 -2.26,-5.045 -5.045,-5.045c-2.785,0 -5.045,2.26 -5.045,5.045c-0,2.786 2.26,5.046 5.045,5.046c2.785,-0 5.045,-2.26 5.045,-5.046Z"
}, null, -1)
  , Ak = de("path", {
    d: "M8.401,3.449c0.163,-0.194 0.452,-0.219 0.646,-0.056c0.194,0.163 0.219,0.452 0.056,0.646l-3.853,4.587c-0.085,0.101 -0.21,0.161 -0.343,0.163c-0.133,0.003 -0.26,-0.053 -0.349,-0.151l-1.651,-1.835c-0.169,-0.188 -0.154,-0.479 0.034,-0.648c0.188,-0.169 0.479,-0.154 0.648,0.034l1.298,1.443l3.514,-4.183Z"
}, null, -1)
  , Lk = [kk, Ak]
  , jd = Te({
    __name: "SuccessOutlineIcon",
    setup(e) {
        return (t,n)=>(he(),
        Ye("svg", zt(Ut(z(To))), Lk, 16))
    }
})
  , Ck = de("path", {
    d: "M12, 6c0, 3.313 -2.687, 6 -6, 6c-3.313,-0 -6,-2.688 -6,-6c0,-3.313 2.688,-6 6,-6c3.313,-0 6,2.687 6,6Zm-0.923,-0c-0,-2.803 -2.274,-5.077 -5.077,-5.077c-2.803,0 -5.077,2.274 -5.077,5.077c0,2.803 2.274,5.077 5.077,5.077c2.803,-0 5.077,-2.274 5.077,-5.077Z"
}, null, -1)
  , Ok = de("path", {
    d: "M5.373,3.426c-0,-0.009 -0,-0.019 -0,-0.028c-0,-0.342 0.279,-0.624 0.621,-0.627c0.002,-0 0.004,-0 0.006,-0c0.344,-0 0.627,0.283 0.627,0.627c-0,0.009 -0,0.019 -0.001,0.028l0,0.001l-0.165,3.518c-0.012,0.246 -0.215,0.44 -0.461,0.44c-0.246,-0 -0.449,-0.194 -0.461,-0.44l-0.166,-3.518l0,-0.001Z"
}, null, -1)
  , Rk = de("path", {
    d: "M6,9.228c-0.316,0 -0.577,-0.26 -0.577,-0.577c0,-0.316 0.261,-0.577 0.577,-0.577c0.316,0 0.577,0.261 0.577,0.577c-0,0.317 -0.261,0.577 -0.577,0.577Z"
}, null, -1)
  , Pk = [Ck, Ok, Rk]
  , Wa = Te({
    __name: "ErrorOutlineIcon",
    setup(e) {
        return (t,n)=>(he(),
        Ye("svg", zt(Ut(z(To))), Pk, 16))
    }
})
  , Ik = de("path", {
    d: "M6, 0c3.313, 0 6, 2.687 6, 6c-0, 3.313 -2.687, 6 -6, 6c-3.313,-0 -6,-2.687 -6,-6c0,-3.313 2.687,-6 6,-6Zm0, 0.96c-2.783, 0 -5.04, 2.257 -5.04, 5.04c0, 2.783 2.257, 5.04 5.04, 5.04c2.783, 0 5.04,-2.257 5.04,-5.04c-0,-2.783 -2.257,-5.04 -5.04,-5.04Z"
}, null, -1)
  , Mk = de("path", {
    d: "M6.6, 8.28l0.84, 0c0.265, 0 0.48, 0.215 0.48, 0.48c-0, 0.265 -0.215, 0.48 -0.48, 0.48l-2.64,-0c-0.265, 0 -0.48,-0.215 -0.48,-0.48c-0,-0.265 0.215,-0.48 0.48,-0.48l0.84, 0l-0,-2.64l-0.48, 0c-0.265, 0 -0.48,-0.215 -0.48,-0.48c-0,-0.265 0.215,-0.48 0.48,-0.48l0.96, 0c0.265, 0 0.48, 0.215 0.48, 0.48l-0, 3.12Z"
}, null, -1)
  , Nk = de("path", {
    d: "M6, 2.46c-0.428, 0 -0.78, 0.352 -0.78, 0.78c-0, 0.428 0.352, 0.78 0.78, 0.78c0.428, 0 0.78,-0.352 0.78,-0.78c-0,-0.428 -0.352,-0.78 -0.78,-0.78Z"
}, null, -1)
  , Dk = [Ik, Mk, Nk]
  , xk = Te({
    __name: "InfoOutlineIcon",
    setup(e) {
        return (t,n)=>(he(),
        Ye("svg", zt(Ut(z(To))), Dk, 16))
    }
})
  , Fk = de("path", {
    d: "M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z",
    opacity: ".25"
}, null, -1)
  , Uk = de("path", {
    d: "M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z",
    class: "Notivue__spinner"
}, null, -1)
  , Vk = [Fk, Uk]
  , yg = Te({
    __name: "PromiseIcon",
    setup(e) {
        return (t,n)=>(he(),
        Ye("svg", zt(Ut(Qe(ue({}, z(du)), {
            width: 28,
            height: 28,
            fill: "currentColor"
        }))), Vk, 16))
    }
})
  , Bk = de("line", {
    x1: "18",
    y1: "6",
    x2: "6",
    y2: "18"
}, null, -1)
  , Hk = de("line", {
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
}, null, -1)
  , jk = [Bk, Hk]
  , vg = Te({
    __name: "CloseIcon",
    setup(e) {
        return (t,n)=>(he(),
        Ye("svg", zt(Ut(z(Kk))), jk, 16))
    }
})
  , du = {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    "aria-hidden": "true"
}
  , To = Qe(ue({}, du), {
    fill: "currentColor",
    viewBox: "0 0 12 12"
})
  , Kk = Qe(ue({}, du), {
    stroke: "currentColor",
    "stroke-width": 2,
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
})
  , qk = {
    [Fe.SUCCESS]: at(Hd),
    [Fe.ERROR]: at(Ya),
    [Fe.INFO]: at(Tk),
    [Fe.WARNING]: at(Ya),
    [Fe.PROMISE]: at(yg),
    [Fe.PROMISE_RESOLVE]: at(Hd),
    [Fe.PROMISE_REJECT]: at(Ya),
    close: at(vg)
};
Fe.SUCCESS + "",
at(jd),
Fe.ERROR + "",
at(Wa),
Fe.INFO + "",
at(xk),
Fe.WARNING + "",
at(Wa),
Fe.PROMISE + "",
at(yg),
Fe.PROMISE_RESOLVE + "",
at(jd),
Fe.PROMISE_REJECT + "",
at(Wa),
at(vg);
const Oi = {
    "--nv-width": "350px",
    "--nv-spacing": "0.625rem",
    "--nv-radius": "0.625rem",
    "--nv-icon-size": "1.25rem",
    "--nv-title-size": "0.925rem",
    "--nv-message-size": "0.925rem",
    "--nv-tip-width": "0px",
    "--nv-y-align": "center"
}
  , hu = {
    "--nv-shadow": "rgba(0, 0, 0, 0.06) 0px 4px 6px -1px, rgba(0, 0, 0, 0.03) 0px 2px 4px -1px"
}
  , Yk = Qe(ue(ue({}, Oi), hu), {
    "--nv-global-bg": "#FFF",
    "--nv-global-fg": "#171717",
    "--nv-success-accent": "#28B780",
    "--nv-error-accent": "#E74C3C",
    "--nv-warning-accent": "#F59E0B",
    "--nv-info-accent": "#3E8EFF",
    "--nv-promise-accent": "#171717"
});
Qe(ue(ue({}, Oi), hu), {
    "--nv-success-bg": "#E9FAEF",
    "--nv-success-accent": "#059669",
    "--nv-success-fg": "#057452",
    "--nv-error-bg": "#FEEFEF",
    "--nv-error-accent": "#E6523C",
    "--nv-error-fg": "#C5412C",
    "--nv-warning-bg": "#FFF0D8",
    "--nv-warning-accent": "#F48533",
    "--nv-warning-fg": "#81471D",
    "--nv-info-bg": "#DEF0FA",
    "--nv-info-accent": "#1F70AC",
    "--nv-info-fg": "#1F70AC",
    "--nv-promise-bg": "#FFF",
    "--nv-promise-accent": "#334155",
    "--nv-promise-fg": "#334155"
});
Qe(ue(ue({}, Oi), hu), {
    "--nv-global-accent": "#FFF",
    "--nv-global-fg": "#FFF",
    "--nv-success-bg": "#178570",
    "--nv-error-bg": "#C94430",
    "--nv-info-bg": "#117AAE",
    "--nv-warning-bg": "#FFE556",
    "--nv-warning-fg": "#4F5358",
    "--nv-warning-accent": "#4F5358",
    "--nv-promise-bg": "#FFF",
    "--nv-promise-fg": "#334155",
    "--nv-promise-accent": "#64748B"
});
Qe(ue({}, Oi), {
    "--nv-border-width": "1px",
    "--nv-global-bg": "#1F1F1F",
    "--nv-global-border": "#414141",
    "--nv-global-fg": "#D0D0D0",
    "--nv-success-accent": "#8EF997",
    "--nv-error-accent": "#FF7777",
    "--nv-warning-accent": "#FFE554",
    "--nv-info-accent": "#5FD4FF",
    "--nv-promise-accent": "#D0D0D0"
});
const tM = Qe(ue({}, Oi), {
    "--nv-border-width": "1px",
    "--nv-global-bg": "#20252E",
    "--nv-global-border": "#353b45",
    "--nv-global-fg": "#dfdfdf",
    "--nv-success-accent": "#34D399",
    "--nv-error-accent": "#FF7777",
    "--nv-warning-accent": "#FFE554",
    "--nv-info-accent": "#5FD4FF",
    "--nv-promise-accent": "#D0D0D0"
})
  , Rn = {
    NOTIFICATION: $t + "notification",
    ICON: $t + "icon",
    CONTENT: $t + "content",
    TITLE: $t + "content-title",
    MESSAGE: $t + "content-message",
    CLOSE: $t + "close",
    CLOSE_ICON: $t + "close-icon",
    TRANSITION: $t + "transition"
}
  , Wk = {
    icons: ()=>qk,
    theme: ()=>Yk,
    hideClose: !1,
    closeAriaLabel: "Close"
}
  , Jk = ["data-notivue", "data-notivue-has-title"]
  , zk = ["aria-live", "role"]
  , Gk = ["textContent"]
  , Qk = ["textContent"]
  , Xk = ["aria-label"]
  , Zk = ["textContent"]
  , nM = Te({
    __name: "Notifications",
    props: Qs({
        item: {},
        icons: {},
        theme: {},
        closeAriaLabel: {},
        hideClose: {
            type: Boolean
        }
    }, Wk),
    setup(e) {
        const t = e
          , n = on(t.icons[t.item.type])
          , r = t.icons.close;
        return Ue(()=>t.item.type, o=>n.value = t.icons[o], {
            flush: "sync"
        }),
        (o,i)=>(he(),
        Ye("div", {
            class: kt(z(Rn).NOTIFICATION),
            "data-notivue": o.item.type,
            "data-notivue-has-title": !!o.item.title,
            style: En(o.theme)
        }, [n.value ? (he(),
        Ye(ct, {
            key: 0
        }, [typeof n.value == "object" ? (he(),
        ht(Ti, {
            key: 0,
            name: z(Rn).TRANSITION,
            mode: "out-in"
        }, {
            default: Gt(()=>[typeof n.value == "object" ? (he(),
            ht(cl(n.value), {
                key: 0,
                class: kt(z(Rn).ICON),
                "aria-hidden": "true"
            }, null, 8, ["class"])) : yn("", !0)]),
            _: 1
        }, 8, ["name"])) : typeof n.value == "string" ? (he(),
        Ye("div", {
            key: 1,
            class: kt(z(Rn).ICON),
            "aria-hidden": "true"
        }, In(n.value), 3)) : yn("", !0)], 64)) : yn("", !0), de("div", {
            class: kt(z(Rn).CONTENT),
            "aria-live": o.item.ariaLive,
            role: o.item.ariaRole,
            "aria-atomic": "true"
        }, [o.item.title ? (he(),
        Ye("h3", {
            key: 0,
            class: kt(z(Rn).TITLE),
            textContent: In(z(o.item.title))
        }, null, 10, Gk)) : yn("", !0), de("p", {
            class: kt(z(Rn).MESSAGE),
            textContent: In(z(o.item.message))
        }, null, 10, Qk)], 10, zk), !t.hideClose && z(r) && o.item.type !== "promise" ? (he(),
        Ye("button", {
            key: 1,
            class: kt(z(Rn).CLOSE),
            "aria-label": o.closeAriaLabel,
            type: "button",
            tabindex: "-1",
            onClick: i[0] || (i[0] = (...s)=>o.item.clear && o.item.clear(...s))
        }, [typeof z(r) == "object" ? (he(),
        ht(cl(z(r)), {
            key: 0,
            class: kt(z(Rn).CLOSE_ICON)
        }, null, 8, ["class"])) : typeof z(r) == "string" ? (he(),
        Ye("div", {
            key: 1,
            "aria-hidden": "true",
            textContent: In(z(r))
        }, null, 8, Zk)) : yn("", !0)], 10, Xk)) : yn("", !0)], 14, Jk))
    }
})
  , $k = !1;
/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */
let _g;
const Ri = e=>_g = e
  , bg = Symbol();
function Ql(e) {
    return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function"
}
var Ho;
(function(e) {
    e.direct = "direct",
    e.patchObject = "patch object",
    e.patchFunction = "patch function"
}
)(Ho || (Ho = {}));
function eA() {
    const e = Ei(!0)
      , t = e.run(()=>ye({}));
    let n = []
      , r = [];
    const o = at({
        install(i) {
            Ri(o),
            o._a = i,
            i.provide(bg, o),
            i.config.globalProperties.$pinia = o,
            r.forEach(s=>n.push(s)),
            r = []
        },
        use(i) {
            return !this._a && !$k ? r.push(i) : n.push(i),
            this
        },
        _p: n,
        _a: null,
        _e: e,
        _s: new Map,
        state: t
    });
    return o
}
const Eg = ()=>{}
;
function Kd(e, t, n, r=Eg) {
    e.push(t);
    const o = ()=>{
        const i = e.indexOf(t);
        i > -1 && (e.splice(i, 1),
        r())
    }
    ;
    return !n && Si() && Ks(o),
    o
}
function Wr(e, ...t) {
    e.slice().forEach(n=>{
        n(...t)
    }
    )
}
const tA = e=>e();
function Xl(e, t) {
    e instanceof Map && t instanceof Map && t.forEach((n,r)=>e.set(r, n)),
    e instanceof Set && t instanceof Set && t.forEach(e.add, e);
    for (const n in t) {
        if (!t.hasOwnProperty(n))
            continue;
        const r = t[n]
          , o = e[n];
        Ql(o) && Ql(r) && e.hasOwnProperty(n) && !et(r) && !ar(r) ? e[n] = Xl(o, r) : e[n] = r
    }
    return e
}
const nA = Symbol();
function rA(e) {
    return !Ql(e) || !e.hasOwnProperty(nA)
}
const {assign: Gn} = Object;
function oA(e) {
    return !!(et(e) && e.effect)
}
function iA(e, t, n, r) {
    const {state: o, actions: i, getters: s} = t
      , a = n.state.value[e];
    let l;
    function c() {
        a || (n.state.value[e] = o ? o() : {});
        const u = Ic(n.state.value[e]);
        return Gn(u, i, Object.keys(s || {}).reduce((f,d)=>(f[d] = at(le(()=>{
            Ri(n);
            const m = n._s.get(e);
            return s[d].call(m, m)
        }
        )),
        f), {}))
    }
    return l = Sg(e, c, t, n, r, !0),
    l
}
function Sg(e, t, n={}, r, o, i) {
    let s;
    const a = Gn({
        actions: {}
    }, n)
      , l = {
        deep: !0
    };
    let c, u, f = [], d = [], m;
    const _ = r.state.value[e];
    !i && !_ && (r.state.value[e] = {}),
    ye({});
    let b;
    function w(L) {
        let O;
        c = u = !1,
        typeof L == "function" ? (L(r.state.value[e]),
        O = {
            type: Ho.patchFunction,
            storeId: e,
            events: m
        }) : (Xl(r.state.value[e], L),
        O = {
            type: Ho.patchObject,
            payload: L,
            storeId: e,
            events: m
        });
        const I = b = Symbol();
        Ft().then(()=>{
            b === I && (c = !0)
        }
        ),
        u = !0,
        Wr(f, O, r.state.value[e])
    }
    const g = i ? function() {
        const {state: O} = n
          , I = O ? O() : {};
        this.$patch(V=>{
            Gn(V, I)
        }
        )
    }
    : Eg;
    function E() {
        s.stop(),
        f = [],
        d = [],
        r._s.delete(e)
    }
    function p(L, O) {
        return function() {
            Ri(r);
            const I = Array.from(arguments)
              , V = []
              , x = [];
            function X(M) {
                V.push(M)
            }
            function Y(M) {
                x.push(M)
            }
            Wr(d, {
                args: I,
                name: L,
                store: S,
                after: X,
                onError: Y
            });
            let j;
            try {
                j = O.apply(this && this.$id === e ? this : S, I)
            } catch (M) {
                throw Wr(x, M),
                M
            }
            return j instanceof Promise ? j.then(M=>(Wr(V, M),
            M)).catch(M=>(Wr(x, M),
            Promise.reject(M))) : (Wr(V, j),
            j)
        }
    }
    const y = {
        _p: r,
        $id: e,
        $onAction: Kd.bind(null, d),
        $patch: w,
        $reset: g,
        $subscribe(L, O={}) {
            const I = Kd(f, L, O.detached, ()=>V())
              , V = s.run(()=>Ue(()=>r.state.value[e], x=>{
                (O.flush === "sync" ? u : c) && L({
                    storeId: e,
                    type: Ho.direct,
                    events: m
                }, x)
            }
            , Gn({}, l, O)));
            return I
        },
        $dispose: E
    }
      , S = yt(y);
    r._s.set(e, S);
    const A = (r._a && r._a.runWithContext || tA)(()=>r._e.run(()=>(s = Ei()).run(t)));
    for (const L in A) {
        const O = A[L];
        if (et(O) && !oA(O) || ar(O))
            i || (_ && rA(O) && (et(O) ? O.value = _[L] : Xl(O, _[L])),
            r.state.value[e][L] = O);
        else if (typeof O == "function") {
            const I = p(L, O);
            A[L] = I,
            a.actions[L] = O
        }
    }
    return Gn(S, A),
    Gn(_e(S), A),
    Object.defineProperty(S, "$state", {
        get: ()=>r.state.value[e],
        set: L=>{
            w(O=>{
                Gn(O, L)
            }
            )
        }
    }),
    r._p.forEach(L=>{
        Gn(S, s.run(()=>L({
            store: S,
            app: r._a,
            pinia: r,
            options: a
        })))
    }
    ),
    _ && i && n.hydrate && n.hydrate(S.$state, _),
    c = !0,
    u = !0,
    S
}
function qr(e, t, n) {
    let r, o;
    const i = typeof t == "function";
    typeof e == "string" ? (r = e,
    o = i ? n : t) : (o = e,
    r = e.id);
    function s(a, l) {
        const c = Kc();
        return a = a || (c ? gt(bg, null) : null),
        a && Ri(a),
        a = _g,
        a._s.has(r) || (i ? Sg(r, t, o, a) : iA(r, o, a)),
        a._s.get(r)
    }
    return s.$id = r,
    s
}
const st = qr("helper", {
    state: ()=>({}),
    actions: {
        camelToSnake(e) {
            return e.replace(/(?:^|\.?)([A-Z])/g, (t,n)=>"_" + n.toLowerCase()).replace(/^_/, "")
        },
        compareWithEmptyOldArray(e, t) {
            return e.filter(o=>o !== null).length === t ? !0 : e.find(o=>o !== null) !== void 0
        },
        composeTelegramName(e) {
            let t = e == null ? void 0 : e.firstName;
            return e != null && e.lastName && t && (t = `${t} ${e == null ? void 0 : e.lastName}`),
            !t && (e != null && e.username) && (t = e == null ? void 0 : e.username),
            t || (t = "User"),
            t
        },
        composeUsername(e, t, n) {
            let r = e;
            return t && r && (r = `${r} ${t}`),
            !r && n && (r = n),
            r || (r = "User"),
            r
        },
        getLocaleForDate() {
            const {locale: e} = la();
            return e.value === "tl" ? "tl-ph" : e.value
        },
        getNowTimestamp() {
            return Math.floor(new Date().getTime() / 1e3) + Dn().dtServer
        },
        getNowTimestampWithMS() {
            return new Date().getTime()
        },
        getSecondsUntilMidnightUTC() {
            const e = new Date
              , t = new Date(e);
            return t.setUTCHours(24, 0, 0, 0),
            Math.floor((t.getTime() - e.getTime()) / 1e3)
        },
        getTelegramAvatar(e, t=0, n=160) {
            var i, s;
            const r = {
                160: 0,
                320: 1,
                640: 1
            }
              , o = (s = (i = e == null ? void 0 : e.photos) == null ? void 0 : i[t]) == null ? void 0 : s[r[n]];
            return o && `${ne().$config.public.cdnUrl}/${o.fileUniqueId}.jpg`
        },
        numberFormat(e, t=!0) {
            t = e < 1e3 ? !1 : t;
            const n = t ? 2 : 0
              , r = ["", "K", "M", "B", "T", "Qua", "Qui", "S"]
              , o = Math.abs(e)
              , i = o < 1 ? 0 : Math.floor(Math.log10(o) / 3)
              , s = r[i] ?? "😈"
              , a = e / Math.pow(10, i * 3)
              , l = Math.pow(10, n)
              , c = new Intl.NumberFormat(ne().$i18n.locale.value,{
                maximumFractionDigits: n,
                minimumFractionDigits: 0
            }).format(t ? Math.floor(a * l) / l : Math.floor(e));
            return t ? `${c}${s}` : c
        },
        padWithZero(e) {
            return e.toString().padStart(2, "0")
        },
        secondsToHours(e) {
            const t = e / 3600;
            return Math.round(t * 100) / 100
        },
        showErrorPush() {
            Fn.error({
                message: `${ne().$i18n.t("messages.oops")}`
            })
        },
        changeRandomCharToUppercase(e) {
            const t = "https://t.me/";
            let n = !1
              , r = e;
            e.startsWith(t) && (n = !0,
            r = e.substring(t.length));
            let o;
            do
                o = Math.floor(Math.random() * r.length);
            while (r.charAt(o) === "_");
            let i = r.charAt(o);
            return i === i.toUpperCase() ? i = i.toLowerCase() : i = i.toUpperCase(),
            r = r.substring(0, o) + i + r.substring(o + 1),
            n && (r = t + r),
            r
        },
        trackEvent(e, t=null) {
            const n = {
                ...t && {
                    ...t
                }
            };
            try {
                ne().$config.public.appEnv !== "production" ? console.info(`Sending ${e} event to GA4`, n) : gtag("event", e, n)
            } catch (r) {
                ne().$config.public.appEnv !== "production" && console.error(`Error sending ${e} event to GA4:`, r)
            }
            try {
                ne().$config.public.appEnv !== "production" ? console.info(`Sending ${e} event to Facebook Pixel`, n) : ne().$fb.track(e, n)
            } catch (r) {
                ne().$config.public.appEnv !== "production" && console.error(`Error sending ${e} event to Facebook Pixel:`, r)
            }
        }
    }
});
var tt = (e=>(e.SYNC_TAPS = "hk_sync_taps",
e.SYNC_TIMESTAMP_TAPS = "hk_sync_timestamp",
e.SYNC_AVAILABLE_TAPS = "hk_sync_available_taps",
e.EARN_TASKS = "hk_earn_task",
e.BINGX = "hk_bingx",
e.SUBSCRIBE_MEDIUM = "hk_subscribe_medium",
e.SUBSCRIBE_DISCORD = "hk_subscribe_discord",
e.SETTINGS = "hk_settings",
e.AUTH_TOKEN = "authToken",
e))(tt || {})
  , Bt = (e=>(e[e.BALANCE_ANIMATION_SPEED = 50] = "BALANCE_ANIMATION_SPEED",
e[e.CALC_INTERVAL = 1e3] = "CALC_INTERVAL",
e[e.SYNC_INTERVAL = 36e5] = "SYNC_INTERVAL",
e[e.TAP_INTERVAL = 3e3] = "TAP_INTERVAL",
e[e.REFERRAL_REFRESH_TIME = 60] = "REFERRAL_REFRESH_TIME",
e.GAME_NAME = "Hamster Kombat",
e.DEFAULT_EXCHANGE = "hamster",
e))(Bt || {})
  , sA = (e=>(e.REPEATEDLY = "Repeatedly",
e.ONCE = "Once",
e))(sA || {})
  , Zl = (e=>(e.BOOST = "/images/boost.png",
e.COIN_STAR = "/images/coin-star.png",
e.HAMSTER = "/images/hamster.png",
e.HAMSTER_KID = "/images/hamster-kid.png",
e.NO_AVATAR = "/images/user-avatar.png",
e.TOKEN = "/images/icons/hamster-coin.png",
e.TOKEN_WEBP = "/images/icons/hamster-coin.webp",
e))(Zl || {})
  , aA = (e=>(e.ByTrust = "ByTrust",
e.ByUpgrade = "ByUpgrade",
e.ByUserCount = "ByUserCount",
e.ReferralCount = "ReferralCount",
e.MoreReferralsCount = "MoreReferralsCount",
e))(aA || {})
  , lA = (e=>(e.Markets = "Markets",
e.PR_Team = "PR&Team",
e.Specials = "Specials",
e.Legal = "Legal",
e))(lA || {})
  , cA = (e=>(e.blockchain_life_2024 = "blockchain_life_2024",
e.save_hamsters_from_drowning = "save_hamsters_from_drowning",
e.taker_carlson_interview = "taker_carlson_interview",
e.token2049 = "token2049",
e.usdt_on_ton = "usdt_on_ton",
e.villa_for_dev_team = "villa_for_dev_team",
e.success_with_tucker = "success_with_tucker",
e.dao = "dao",
e.short_squeeze = "short_squeeze",
e.long_squeeze = "long_squeeze",
e.two_chairs = "two_chairs",
e.bogdanoff = "bogdanoff",
e.forbes = "forbes",
e.apps_center_listing = "apps_center_listing",
e.bitcoin_halving = "bitcoin_halving",
e.lambo = "lambo",
e.security_team = "security_team",
e.ux_ui_team = "ux_ui_team",
e.antihacking_shield = "antihacking_shield",
e.support_team = "support_team",
e.qa_team = "qa_team",
e.risk_management_team = "risk_management_team",
e.security_audition = "security_audition",
e.anonymous_transactions_ban = "anonymous_transactions_ban",
e.blocking_suspicious_accounts = "blocking_suspicious_accounts",
e.special_hamster_conference = "special_hamster_conference",
e.contract_with_football_club = "contract_with_football_club",
e.dubai_office = "dubai_office",
e.joe_rogan_podcast = "joe_rogan_podcast",
e.venom_blockchain = "venom_blockchain",
e.notcoin_listing = "notcoin_listing",
e.hamster_ai = "hamster_ai",
e.p2p_trading = "p2p_trading",
e.trading_bots = "trading_bots",
e.nft_collection_launch = "nft_collection_launch",
e.top10_global = "top10_global",
e.licence_nigeria = "licence_nigeria",
e.licence_asia = "licence_asia",
e.licence_australia = "licence_australia",
e.licence_europe = "licence_europe",
e.licence_north_america = "licence_north_america",
e.licence_south_america = "licence_south_america",
e.licence_uae = "licence_uae",
e.fan_tokens = "fan_tokens",
e.meme_coins = "meme_coins",
e.sec_transparancy = "sec_transparancy",
e.bitcoin_pizza_day = "bitcoin_pizza_day",
e.staking = "staking",
e.btc_pairs = "btc_pairs",
e.eth_pairs = "eth_pairs",
e.top_10_cmc_pairs = "top_10_cmc_pairs",
e.gamefi_tokens = "gamefi_tokens",
e["defi2.0_tokens"] = "defi2.0_tokens",
e.socialfi_tokens = "socialfi_tokens",
e.shit_coins = "shit_coins",
e.margin_trading_x10 = "margin_trading_x10",
e.margin_trading_x20 = "margin_trading_x20",
e.margin_trading_x30 = "margin_trading_x30",
e.margin_trading_x50 = "margin_trading_x50",
e.margin_trading_x75 = "margin_trading_x75",
e.margin_trading_x100 = "margin_trading_x100",
e.derivatives = "derivatives",
e.prediction_markets = "prediction_markets",
e.web3_integration = "web3_integration",
e.facebook_ads = "facebook_ads",
e.x = "x",
e.youtube = "youtube",
e.instagram = "instagram",
e.tiktok = "tiktok",
e.reddit = "reddit",
e.influencers = "influencers",
e.ceo = "ceo",
e.it_team = "it_team",
e.marketing = "marketing",
e.partnership_program = "partnership_program",
e.product_team = "product_team",
e.bisdev_team = "bisdev_team",
e.two_factor_authentication = "two_factor_authentication",
e.kyc = "kyc",
e.kyb = "kyb",
e.legal_opinion = "legal_opinion",
e.anti_money_loundering = "anti_money_loundering",
e.ceo_21m = "ceo_21m",
e.hamster_daily_show = "hamster_daily_show",
e.hamster_youtube_channel = "hamster_youtube_channel",
e.hamster_youtube_gold_button = "hamster_youtube_gold_button",
e))(cA || {})
  , uA = (e=>(e.FULL_ENERGY = "BoostFullAvailableTaps",
e))(uA || {})
  , fA = (e=>(e[e.Bronze = 1] = "Bronze",
e[e.Silver = 2] = "Silver",
e[e.Gold = 3] = "Gold",
e[e.Platinum = 4] = "Platinum",
e[e.Diamond = 5] = "Diamond",
e[e.Epic = 6] = "Epic",
e[e.Legendary = 7] = "Legendary",
e[e.Master = 8] = "Master",
e[e.Grandmaster = 9] = "Grandmaster",
e))(fA || {})
  , dA = (e=>(e.MINERS = "miners",
e.SQUADS = "squads",
e))(dA || {})
  , hA = (e=>(e.DAY = "day",
e.WEEK = "week",
e.MONTH = "month",
e))(hA || {})
  , pA = (e=>(e.SUBSCRIBE_TELEGRAM_CHANNEL = "subscribe_telegram_channel",
e.SUBSCRIBE_TELEGRAM_GROUP = "subscribe_telegram_group",
e.SUBSCRIBE_X_ACCOUNT = "subscribe_x_account",
e.GLEAM_TASKS = "gleam_tasks",
e.INVITE_FRIENDS = "invite_friends",
e.PIN_BOT = "pin_bot",
e.STREAK_DAYS = "streak_days",
e.SELECT_EXCHANGE = "select_exchange",
e.EXCHANGE_SIGNUP_VIA_FRIEND_LINK = "exchange_signup_via_friend_link",
e.SUBSCRIBE_MEDIUM = "subscribe_medium",
e.SUBSCRIBE_DISCORD = "subscribe_discord",
e.ADD_OUR_BOT = "add_our_bot",
e))(pA || {})
  , mA = (e=>(e.My = "my",
e.New = "new",
e.Missed = "missed",
e))(mA || {})
  , gA = (e=>(e.BINGX = "bingx",
e))(gA || {})
  , Pi = (e=>(e.LANDING = "/",
e.GAME_INDEX = "/clicker",
e.GAME_FRIENDS = "/clicker/friends",
e.GAME_AIRDROP = "/clicker/airdrop",
e.GAME_BOOST = "/clicker/boost",
e.GAME_EARN = "/clicker/earn",
e.GAME_MINE = "/clicker/mine",
e.GAME_LEAGUE = "/clicker/league",
e.GAME_SETTINGS = "/clicker/settings",
e.GAME_SETTINGS_BINGX = "/clicker/settings/bingx",
e.GAME_SETTINGS_EXCHANGE = "/clicker/settings/exchange",
e.GAME_SETTINGS_LANGUAGE = "/clicker/settings/language",
e))(Pi || {})
  , wg = (e=>(e.ONBOARDING_START = "onboarding_start",
e.ONBOARDING_SLIDE = "onboarding_slide",
e.ONBOARDING_PLAY_BUTTON = "onboarding_play_button",
e.ONBOARDING_SHAVE_BUTTON = "onboarding_shave_button",
e.ONBOARDING_CEO_BUTTON = "onboarding_ceo_button",
e.ONBOARDING_SELECT_EXCHANGE = "onboarding_select_exchange",
e.CLICK_INVITE_FRIEND = "click_invite_friend",
e.CLICK_COPY_INVITE_FRIEND = "click_copy_invite_friend",
e.REFERRAL_ADDED = "referral_added",
e.REFERRAL_SHOW_DIALOG_JOIN_BOT = "referral_show_dialog_join_bot",
e.REFERRAL_CLICK_DIALOG_JOIN_BOT = "referral_click_dialog_join_bot",
e.DAILY_COMBO_FOUND_1 = "daily_combo_found_1",
e.DAILY_COMBO_FOUND_2 = "daily_combo_found_2",
e.DAILY_COMBO_FOUND_3 = "daily_combo_found_3",
e.DAILY_COMBO_CLAIMED = "daily_combo_claimed",
e.DAILY_COMBO_CLICK_OPEN_CLAIM_MANUAL = "daily_combo_click_open_claim_manual",
e.DAILY_COMBO_CLICK_INFO = "daily_combo_click_info",
e))(wg || {});
const At = {
    get: Po("GET"),
    post: Po("POST"),
    patch: Po("PATCH"),
    put: Po("PUT"),
    delete: Po("DELETE")
};
function Po(e) {
    return async(t,n,r={})=>{
        const o = Ko()
          , i = o.token
          , s = Ln();
        r = {
            onError: ()=>{}
            ,
            onRequest: ()=>{}
            ,
            onRequestError: ()=>{}
            ,
            onResponse: ()=>{}
            ,
            onResponseError: l=>{}
            ,
            ...r
        };
        const a = {
            ...n,
            method: e,
            baseURL: n != null && n.baseURL ? n.baseURL : s.public.apiBase,
            headers: {
                Authorization: i ? `Bearer ${i}` : `${tt.AUTH_TOKEN} is empty, store token ${i}`,
                ...n == null ? void 0 : n.headers
            },
            async onRequest({request: l, options: c}) {
                s.public.appEnv !== "production" && console.log("%c Request => ", "background: #16161a; color: #f2f2f2; line-height: 20px;", l),
                r.onRequest()
            },
            async onRequestError({request: l, options: c, error: u}) {
                s.public.appEnv !== "production" && console.log("%c Request error => ", "background: #16161a; color: #ff0000; line-height: 20px;", l),
                Fn.error({
                    title: ne().$i18n.t("messages.network_error_title"),
                    message: ne().$i18n.t("messages.network_error_description")
                }),
                r.onRequestError(),
                r.onError()
            },
            async onResponse({request: l, response: c, options: u}) {
                s.public.appEnv !== "production" && console.log(`%c Response ${c.status} => `, "background: #16161a; color: #4CD964; line-height: 20px;", l),
                r.onResponse()
            },
            async onResponseError(l) {
                s.public.appEnv !== "production" && console.log("%c Response error => ", "background: #16161a; color: #ff0000; line-height: 20px;", l.request);
                const c = l.response._data;
                ((c == null ? void 0 : c.error_code) === "NOT_FOUND_CLICKER_USER" || (c == null ? void 0 : c.error_code) === "BAD_AUTH_TOKEN" || (c == null ? void 0 : c.error_code) === "NOT_EXANGE_SELECT ") && setTimeout(()=>{
                    o.logout()
                }
                , 1e3),
                [401].includes(l.response.status) && i && o.logout(),
                r.onResponseError(),
                r.onError()
            }
        };
        return await $fetch(t, a)
    }
}
const Pn = qr("config", {
    state: ()=>({
        maxPassiveDtSeconds: null,
        maxPassiveDtSeconds_local: 0,
        exchanges: [],
        userLevels_balanceCoins: [],
        levelUpEarnPerTap: null,
        levelUpMaxTaps: null,
        guidLink: null,
        referralBonus: {}
    }),
    actions: {
        async postConfig() {
            return await At.post("/clicker/config", {}).then(e=>{
                var t, n, r, o, i, s;
                return (t = e == null ? void 0 : e.clickerConfig) != null && t.maxPassiveDtSeconds && this.setMaxPassiveDtSeconds(e.clickerConfig.maxPassiveDtSeconds),
                (n = e == null ? void 0 : e.clickerConfig) != null && n.exchanges && this.setExchanges(e.clickerConfig.exchanges),
                (r = e == null ? void 0 : e.clickerConfig) != null && r.userLevels_balanceCoins && this.setUserLevelsBalanceCoins(e.clickerConfig.userLevels_balanceCoins),
                (o = e == null ? void 0 : e.clickerConfig) != null && o.levelUp && this.setLevelUp(e.clickerConfig.levelUp),
                (i = e == null ? void 0 : e.clickerConfig) != null && i.guidLink && this.setGuidLink(e.clickerConfig.guidLink),
                (s = e == null ? void 0 : e.clickerConfig) != null && s.referral && this.setReferralBonus(e.clickerConfig.referral),
                e
            }
            )
        },
        setMaxPassiveDtSeconds(e) {
            this.maxPassiveDtSeconds = e
        },
        setExchanges(e=[]) {
            this.exchanges = e
        },
        setUserLevelsBalanceCoins(e=[]) {
            this.userLevels_balanceCoins = e
        },
        setLevelUp(e) {
            this.levelUpEarnPerTap = e.earnPerTap,
            this.levelUpMaxTaps = e.maxTaps
        },
        setGuidLink(e) {
            try {
                const t = new Map;
                for (const n of Object.keys(e))
                    t.set(n, e[n]);
                this.guidLink = t
            } catch (t) {
                console.log(t)
            }
        },
        setReferralBonus(e) {
            this.referralBonus = e
        }
    },
    getters: {
        getGuidLink() {
            var n, r;
            const e = ne().$i18n.locale;
            let t = (n = this.guidLink) == null ? void 0 : n.get(e);
            return t || (t = (r = this.guidLink) == null ? void 0 : r.get("en")),
            t ?? "#"
        }
    }
})
  , yA = {
    path: "/",
    watch: !0,
    decode: e=>si(decodeURIComponent(e)),
    encode: e=>encodeURIComponent(typeof e == "string" ? e : JSON.stringify(e))
};
function vA(e, t) {
    var l;
    const n = {
        ...yA,
        ...t
    }
      , r = qd(n) || {};
    let o;
    n.maxAge !== void 0 ? o = n.maxAge * 1e3 : n.expires && (o = n.expires.getTime() - Date.now());
    const i = o !== void 0 && o <= 0
      , s = pn(i ? void 0 : r[e] ?? ((l = n.default) == null ? void 0 : l.call(n)))
      , a = o && !i ? EA(s, o) : ye(s);
    {
        const c = typeof BroadcastChannel > "u" ? null : new BroadcastChannel(`nuxt:cookies:${e}`)
          , u = ()=>{
            n.readonly || nE(a.value, r[e]) || (bA(e, a.value, n),
            r[e] = pn(a.value),
            c == null || c.postMessage({
                value: n.encode(a.value)
            }))
        }
          , f = m=>{
            var b;
            const _ = m.refresh ? (b = qd(n)) == null ? void 0 : b[e] : n.decode(m.value);
            d = !0,
            r[e] = a.value = _,
            Ft(()=>{
                d = !1
            }
            )
        }
        ;
        let d = !1;
        Si() && Ks(()=>{
            d = !0,
            u(),
            c == null || c.close()
        }
        ),
        c && (c.onmessage = ({data: m})=>f(m)),
        n.watch ? Ue(a, ()=>{
            d || u()
        }
        , {
            deep: n.watch !== "shallow"
        }) : u()
    }
    return a
}
function qd(e={}) {
    return Gb(document.cookie, e)
}
function _A(e, t, n={}) {
    return t == null ? Cf(e, t, {
        ...n,
        maxAge: -1
    }) : Cf(e, t, n)
}
function bA(e, t, n={}) {
    document.cookie = _A(e, t, n)
}
const Yd = 2147483647;
function EA(e, t) {
    let n, r = 0;
    return Si() && Ks(()=>{
        clearTimeout(n)
    }
    ),
    cp((o,i)=>{
        function s() {
            clearTimeout(n);
            const a = t - r
              , l = a < Yd ? a : Yd;
            n = setTimeout(()=>{
                if (r += l,
                r < t)
                    return s();
                e = void 0,
                i()
            }
            , l)
        }
        return {
            get() {
                return o(),
                e
            },
            set(a) {
                s(),
                e = a,
                i()
            }
        }
    }
    )
}
const Br = ["en", "es", "hi", "id", "pt", "ru", "th", "tl", "tr", "vi", "uz"]
  , $l = {
    en: [{
        key: "../locales/en.json",
        load: ()=>C(()=>import("./en.DG3HFrVD.js"), __vite__mapDeps([]), import.meta.url),
        cache: !0
    }],
    es: [{
        key: "../locales/es.json",
        load: ()=>C(()=>import("./es.0wiG1lyt.js"), __vite__mapDeps([]), import.meta.url),
        cache: !0
    }],
    hi: [{
        key: "../locales/hi.json",
        load: ()=>C(()=>import("./hi.C-5wMy22.js"), __vite__mapDeps([]), import.meta.url),
        cache: !0
    }],
    id: [{
        key: "../locales/id.json",
        load: ()=>C(()=>import("./id.23VC_bZL.js"), __vite__mapDeps([]), import.meta.url),
        cache: !0
    }],
    pt: [{
        key: "../locales/pt.json",
        load: ()=>C(()=>import("./pt.KaNM69F_.js"), __vite__mapDeps([]), import.meta.url),
        cache: !0
    }],
    ru: [{
        key: "../locales/ru.json",
        load: ()=>C(()=>import("./ru.BG7K5CzN.js"), __vite__mapDeps([]), import.meta.url),
        cache: !0
    }],
    th: [{
        key: "../locales/th.json",
        load: ()=>C(()=>import("./th.Dqd95vBE.js"), __vite__mapDeps([]), import.meta.url),
        cache: !0
    }],
    tl: [{
        key: "../locales/tl.json",
        load: ()=>C(()=>import("./tl.COn7jpEk.js"), __vite__mapDeps([]), import.meta.url),
        cache: !0
    }],
    tr: [{
        key: "../locales/tr.json",
        load: ()=>C(()=>import("./tr.DEZDqyX8.js"), __vite__mapDeps([]), import.meta.url),
        cache: !0
    }],
    vi: [{
        key: "../locales/vi.json",
        load: ()=>C(()=>import("./vi.ClJy7b5Z.js"), __vite__mapDeps([]), import.meta.url),
        cache: !0
    }],
    uz: [{
        key: "../locales/uz.json",
        load: ()=>C(()=>import("./uz.BhU6JiUm.js"), __vite__mapDeps([]), import.meta.url),
        cache: !0
    }]
}
  , SA = [()=>C(()=>import("./i18n.config.Da3zEwKd.js"), __vite__mapDeps([]), import.meta.url)]
  , ut = {
    experimental: {
        localeDetector: ""
    },
    bundle: {
        compositionOnly: !0,
        runtimeOnly: !1,
        fullInstall: !0,
        dropMessageCompiler: !1
    },
    compilation: {
        jit: !0,
        strictMessage: !1,
        escapeHtml: !1
    },
    customBlocks: {
        defaultSFCLang: "json",
        globalSFCScope: !1
    },
    vueI18n: "./i18n.config.ts",
    locales: [{
        code: "en",
        name: "English",
        files: ["locales/en.json"]
    }, {
        code: "es",
        name: "Español",
        files: ["locales/es.json"]
    }, {
        code: "hi",
        name: "हिन्दी (Hindi)",
        files: ["locales/hi.json"]
    }, {
        code: "id",
        name: "Bahasa Indonesia",
        files: ["locales/id.json"]
    }, {
        code: "pt",
        name: "Português",
        files: ["locales/pt.json"]
    }, {
        code: "ru",
        name: "Русский",
        files: ["locales/ru.json"]
    }, {
        code: "th",
        name: "ภาษาไทย (Thai)",
        files: ["locales/th.json"]
    }, {
        code: "tl",
        name: "Tagalog",
        files: ["locales/tl.json"]
    }, {
        code: "tr",
        name: "Türkçe",
        files: ["locales/tr.json"]
    }, {
        code: "vi",
        name: "Tiếng Việt",
        files: ["locales/vi.json"]
    }, {
        code: "uz",
        name: "O'zbekcha",
        files: ["locales/uz.json"]
    }],
    defaultLocale: "en",
    defaultDirection: "ltr",
    routesNameSeparator: "___",
    trailingSlash: !1,
    defaultLocaleRouteNameSuffix: "default",
    strategy: "prefix_except_default",
    lazy: !0,
    langDir: "locales",
    rootRedirect: null,
    detectBrowserLanguage: {
        alwaysRedirect: !0,
        cookieCrossOrigin: !1,
        cookieDomain: null,
        cookieKey: "i18n_redirected",
        cookieSecure: !1,
        fallbackLocale: "en",
        redirectOn: "root",
        useCookie: !0
    },
    differentDomains: !1,
    baseUrl: "",
    dynamicRouteParams: !1,
    customRoutes: "page",
    pages: {},
    skipSettingLocaleOnNavigate: !1,
    types: "composition",
    debug: !1,
    parallelPlugin: !1,
    i18nModules: []
}
  , ca = {
    experimental: {
        localeDetector: ""
    },
    bundle: {
        compositionOnly: !0,
        runtimeOnly: !1,
        fullInstall: !0,
        dropMessageCompiler: !1
    },
    compilation: {
        jit: !0,
        strictMessage: !0,
        escapeHtml: !1
    },
    customBlocks: {
        defaultSFCLang: "json",
        globalSFCScope: !1
    },
    vueI18n: "",
    locales: [],
    defaultLocale: "",
    defaultDirection: "ltr",
    routesNameSeparator: "___",
    trailingSlash: !1,
    defaultLocaleRouteNameSuffix: "default",
    strategy: "prefix_except_default",
    lazy: !1,
    langDir: null,
    rootRedirect: null,
    detectBrowserLanguage: {
        alwaysRedirect: !1,
        cookieCrossOrigin: !1,
        cookieDomain: null,
        cookieKey: "i18n_redirected",
        cookieSecure: !1,
        fallbackLocale: "",
        redirectOn: "root",
        useCookie: !0
    },
    differentDomains: !1,
    baseUrl: "",
    dynamicRouteParams: !1,
    customRoutes: "page",
    pages: {},
    skipSettingLocaleOnNavigate: !1,
    types: "composition",
    debug: !1,
    parallelPlugin: !1
}
  , pu = [{
    code: "en",
    name: "English",
    files: [{
        path: "locales/en.json"
    }]
}, {
    code: "es",
    name: "Español",
    files: [{
        path: "locales/es.json"
    }]
}, {
    code: "hi",
    name: "हिन्दी (Hindi)",
    files: [{
        path: "locales/hi.json"
    }]
}, {
    code: "id",
    name: "Bahasa Indonesia",
    files: [{
        path: "locales/id.json"
    }]
}, {
    code: "pt",
    name: "Português",
    files: [{
        path: "locales/pt.json"
    }]
}, {
    code: "ru",
    name: "Русский",
    files: [{
        path: "locales/ru.json"
    }]
}, {
    code: "th",
    name: "ภาษาไทย (Thai)",
    files: [{
        path: "locales/th.json"
    }]
}, {
    code: "tl",
    name: "Tagalog",
    files: [{
        path: "locales/tl.json"
    }]
}, {
    code: "tr",
    name: "Türkçe",
    files: [{
        path: "locales/tr.json"
    }]
}, {
    code: "vi",
    name: "Tiếng Việt",
    files: [{
        path: "locales/vi.json"
    }]
}, {
    code: "uz",
    name: "O'zbekcha",
    files: [{
        path: "locales/uz.json"
    }]
}]
  , wA = !1
  , TA = {
    PREFIX: "prefix",
    PREFIX_EXCEPT_DEFAULT: "prefix_except_default",
    PREFIX_AND_DEFAULT: "prefix_and_default",
    NO_PREFIX: "no_prefix"
}
  , kA = ""
  , AA = "nuxtI18n"
  , LA = typeof window < "u";
function CA(e) {
    e = e || [];
    const t = [];
    for (const n of e)
        te(n) ? t.push({
            code: n
        }) : t.push(n);
    return t
}
function OA(e) {
    return e != null && "global"in e && "mode"in e
}
function RA(e) {
    return e != null && !("__composer"in e) && "locale"in e && et(e.locale)
}
function Tg(e) {
    return e != null && "__composer"in e
}
function yr(e) {
    return OA(e) ? e.global : e
}
function yo(e) {
    const t = yr(e);
    return RA(t) ? t : Tg(t) ? t.__composer : t
}
function ua(e) {
    return z(yr(e).locale)
}
function PA(e) {
    return z(yr(e).locales)
}
function IA(e) {
    return z(yr(e).localeCodes)
}
function kg(e, t) {
    const n = yr(e);
    et(n.locale) ? n.locale.value = t : n.locale = t
}
function Ag(e) {
    return te(e) ? e : Bw(e) ? e.toString() : "(null)"
}
function Wd(e, t, {defaultLocale: n, strategy: r, routesNameSeparator: o, defaultLocaleRouteNameSuffix: i}) {
    let s = Ag(e) + (r === "no_prefix" ? "" : o + t);
    return t === n && r === "prefix_and_default" && (s += o + i),
    s
}
function Jd(e, t) {
    return qe(e) ? e(t) : e
}
function MA(e, t) {
    const n = [];
    for (const [r,o] of t.entries()) {
        const i = e.find(s=>s.iso.toLowerCase() === o.toLowerCase());
        if (i) {
            n.push({
                code: i.code,
                score: 1 - r / t.length
            });
            break
        }
    }
    for (const [r,o] of t.entries()) {
        const i = o.split("-")[0].toLowerCase()
          , s = e.find(a=>a.iso.split("-")[0].toLowerCase() === i);
        if (s) {
            n.push({
                code: s.code,
                score: .999 - r / t.length
            });
            break
        }
    }
    return n
}
const NA = MA;
function DA(e, t) {
    return e.score === t.score ? t.code.length - e.code.length : t.score - e.score
}
const xA = DA;
function FA(e, t, {matcher: n=NA, comparer: r=xA}={}) {
    const o = [];
    for (const s of e) {
        const {code: a} = s
          , l = s.iso || a;
        o.push({
            code: a,
            iso: l
        })
    }
    const i = n(o, t);
    return i.length > 1 && i.sort(r),
    i.length ? i[0].code : ""
}
function ec(e) {
    return new RegExp(`^/(${e.join("|")})(?:/|$)`,"i")
}
const jo = new Map;
async function UA(e, t) {
    const n = {
        messages: {}
    };
    for (const r of e) {
        const {default: o} = await r()
          , i = typeof o == "function" ? await t.runWithContext(async()=>await o()) : o;
        Dr(i, n)
    }
    return n
}
function Lg(e, t) {
    let n = [];
    if (rt(e))
        n = e;
    else if (be(e)) {
        const r = [...t, "default"];
        for (const o of r)
            e[o] && (n = [...n, ...e[o].filter(Boolean)])
    } else
        te(e) && t.every(r=>r !== e) && n.push(e);
    return n
}
async function VA(e, t, n) {
    const {defaultLocale: r, initialLocale: o, localeCodes: i, fallbackLocale: s, lazy: a} = n;
    if (a && s) {
        const c = Lg(s, [r, o]);
        await Promise.all(c.map(u=>zd(u, t, e)))
    }
    const l = a ? [...new Set().add(r).add(o)] : i;
    return await Promise.all(l.map(c=>zd(c, t, e))),
    e
}
async function BA(e, {key: t, load: n}) {
    let r = null;
    try {
        const o = await n().then(i=>i.default || i);
        qe(o) ? r = await o(e) : (r = o,
        r != null && jo && jo.set(t, r))
    } catch (o) {
        console.error("Failed locale loading: " + o.message)
    }
    return r
}
async function tc(e, t, n) {
    const r = t[e];
    if (r == null) {
        console.warn("Could not find messages for locale code: " + e);
        return
    }
    const o = {};
    for (const i of r) {
        let s = null;
        jo && jo.has(i.key) && i.cache ? s = jo.get(i.key) : s = await BA(e, i),
        s != null && Dr(s, o)
    }
    n(e, o)
}
async function zd(e, t, n) {
    await tc(e, t, (o,i)=>{
        const s = n[o] || {};
        Dr(i, s),
        n[o] = s
    }
    )
}
function HA(e, t) {
    return [e.slice(0, t), e.slice(t)]
}
function jA(e) {
    const {fullPath: t, query: n, hash: r, name: o, path: i, params: s, meta: a, redirectedFrom: l, matched: c} = e;
    return {
        fullPath: t,
        params: s,
        query: n,
        hash: r,
        name: o,
        path: i,
        meta: a,
        matched: c,
        redirectedFrom: l
    }
}
function KA({router: e}, t, n, r) {
    var c, u;
    if (n !== "prefix")
        return e.resolve(t);
    const [o,i] = HA(t.path, 1)
      , s = `${o}${r}${i === "" ? i : `/${i}`}`
      , a = (u = (c = e.options) == null ? void 0 : c.routes) == null ? void 0 : u.find(f=>f.path === s);
    if (a == null)
        return t;
    const l = it({}, t, a);
    return l.path = s,
    e.resolve(l)
}
const qA = new Set(["prefix_and_default", "prefix_except_default"]);
function YA(e) {
    const {currentLocale: t, defaultLocale: n, strategy: r} = e;
    return !(t === n && qA.has(r)) && r !== "no_prefix"
}
const WA = YA;
function vo(e) {
    const {routesNameSeparator: t} = ut
      , n = z(e);
    return n == null || !n.name ? void 0 : Ag(n.name).split(t)[0]
}
function fa(e, t, n) {
    var o;
    if (typeof t == "string" && An(t, {
        acceptRelative: !0
    }))
        return t;
    const r = da(e, t, n);
    return r == null ? "" : ((o = r.redirectedFrom) == null ? void 0 : o.fullPath) || r.fullPath
}
function mu(e, t, n) {
    return da(e, t, n) ?? void 0
}
function JA(e, t, n) {
    return da(e, t, n) ?? void 0
}
function da(e, t, n) {
    const {router: r, i18n: o} = e
      , i = n || ua(o)
      , {routesNameSeparator: s, defaultLocale: a, defaultLocaleRouteNameSuffix: l, strategy: c, trailingSlash: u} = ut
      , f = lL();
    let d;
    if (te(t))
        if (t[0] === "/") {
            const {pathname: b, search: w, hash: g} = kl(t)
              , E = zc(w);
            d = {
                path: b,
                query: E,
                hash: g
            }
        } else
            d = {
                name: t
            };
    else
        d = t;
    let m = it({}, d);
    if ((b=>"path"in b && !!b.path && !("name"in b))(m)) {
        const b = KA(e, m, c, i)
          , w = vo(b);
        te(w) ? (m = {
            name: Wd(w, i, {
                defaultLocale: a,
                strategy: c,
                routesNameSeparator: s,
                defaultLocaleRouteNameSuffix: l
            }),
            params: b.params,
            query: b.query,
            hash: b.hash
        },
        m.state = b.state) : (f({
            currentLocale: i,
            defaultLocale: a,
            strategy: c
        }) && (m.path = `/${i}${m.path}`),
        m.path = u ? ii(m.path, !0) : ki(m.path, !0))
    } else
        !m.name && !("path"in m) && (m.name = vo(r.currentRoute.value)),
        m.name = Wd(m.name, i, {
            defaultLocale: a,
            strategy: c,
            routesNameSeparator: s,
            defaultLocaleRouteNameSuffix: l
        });
    try {
        const b = r.resolve(m);
        return b.name ? b : r.resolve(t)
    } catch (b) {
        if (typeof b == "object" && "type"in b && b.type === 1)
            return null
    }
}
const zA = e=>e;
function GA(e) {
    var n;
    const t = e.meta || {};
    return ((n = z(t)) == null ? void 0 : n[AA]) || {}
}
function _o(e, t, n) {
    const r = n ?? e.router.currentRoute.value
      , o = vo(r);
    if (!o)
        return "";
    const i = cL()
      , s = jA(r)
      , a = GA(r)[t]
      , l = {
        ...s,
        name: o,
        params: {
            ...s.params,
            ...a
        }
    }
      , c = fa(e, l, t);
    return i(c, t)
}
function Cg(e, {addDirAttribute: t=!1, addSeoAttributes: n=!0, identifierAttribute: r="hid"}) {
    const {defaultDirection: o} = ut
      , i = yo(e.i18n)
      , s = {
        htmlAttrs: {},
        link: [],
        meta: []
    };
    if (z(i.locales) == null || z(i.baseUrl) == null)
        return s;
    const a = ua(e.i18n)
      , l = PA(e.i18n)
      , c = CA(l).find(d=>d.code === a) || {
        code: a
    }
      , u = c.iso
      , f = c.dir || o;
    return t && (s.htmlAttrs.dir = f),
    n && a && z(i.locales) && (u && (s.htmlAttrs.lang = u),
    s.link.push(...QA(e, z(l), r), ...XA(e, r, n)),
    s.meta.push(...ZA(e, r, n), ...$A(c, u, r), ...eL(z(l), u, r))),
    s
}
function gu() {
    const e = yo(ne().$i18n);
    return z(e.baseUrl)
}
function QA(e, t, n) {
    const r = gu()
      , {defaultLocale: o, strategy: i} = ut
      , s = [];
    if (i === TA.NO_PREFIX)
        return s;
    const a = new Map;
    for (const l of t) {
        const c = l.iso;
        if (!c) {
            console.warn("Locale ISO code is required to generate alternate link");
            continue
        }
        const [u,f] = c.split("-");
        u && f && (l.isCatchallLocale || !a.has(u)) && a.set(u, l),
        a.set(c, l)
    }
    for (const [l,c] of a.entries()) {
        const u = _o(e, c.code);
        u && s.push({
            [n]: `i18n-alt-${l}`,
            rel: "alternate",
            href: nc(u, r),
            hreflang: l
        })
    }
    if (o) {
        const l = _o(e, o);
        l && s.push({
            [n]: "i18n-xd",
            rel: "alternate",
            href: nc(l, r),
            hreflang: "x-default"
        })
    }
    return s
}
function Og(e, t, n) {
    const r = e.router.currentRoute.value
      , o = mu(e, {
        ...r,
        name: vo(r)
    });
    if (!o)
        return "";
    let i = nc(o.path, t);
    const s = be(n) && n.canonicalQueries || []
      , a = o.query
      , l = new URLSearchParams;
    for (const u of s)
        if (u in a) {
            const f = a[u];
            rt(f) ? f.forEach(d=>l.append(u, d || "")) : l.append(u, f || "")
        }
    const c = l.toString();
    return c && (i = `${i}?${c}`),
    i
}
function XA(e, t, n) {
    const r = gu()
      , o = Og(e, r, n);
    return o ? [{
        [t]: "i18n-can",
        rel: "canonical",
        href: o
    }] : []
}
function ZA(e, t, n) {
    const r = gu()
      , o = Og(e, r, n);
    return o ? [{
        [t]: "i18n-og-url",
        property: "og:url",
        content: o
    }] : []
}
function $A(e, t, n) {
    return !e || !t ? [] : [{
        [n]: "i18n-og",
        property: "og:locale",
        content: Rg(t)
    }]
}
function eL(e, t, n) {
    return e.filter(o=>o.iso && o.iso !== t).map(o=>({
        [n]: `i18n-og-alt-${o.iso}`,
        property: "og:locale:alternate",
        content: Rg(o.iso)
    }))
}
function Rg(e) {
    return (e || "").replace(/-/g, "_")
}
function nc(e, t) {
    return e.match(/^https?:\/\//) ? e : t + e
}
function tL(e, t) {
    return Ii(e, "setLocale", t)
}
function nL(e, t) {
    return Ii(e, "setLocaleCookie", t)
}
function rL(e, t, n) {
    return Ii(e, "mergeLocaleMessage", t, n)
}
function oL(e, t, n, r, o) {
    return Ii(e, "onBeforeLanguageSwitch", t, n, r, o)
}
function iL(e, t, n) {
    return Ii(e, "onLanguageSwitched", t, n)
}
function yu(e) {
    return {
        i18n: e ?? ne().$i18n,
        router: Mt(),
        runtimeConfig: Ln()
    }
}
async function Gd(e, t, n=!1) {
    const r = ut.differentDomains
      , o = (ut.detectBrowserLanguage && ut.detectBrowserLanguage.useCookie) ?? ca.detectBrowserLanguage.useCookie
      , i = ne();
    let s = !1;
    const a = ua(t);
    if (!e)
        return [s, a];
    if (!n && r)
        return [s, a];
    if (a === e)
        return [s, a];
    const l = await oL(t, a, e, n, i)
      , c = IA(t);
    if (l && c && c.includes(l)) {
        if (l === a)
            return [s, a];
        e = l
    }
    const u = fL(t, "fallbackLocale");
    {
        const f = (d,m)=>rL(t, d, m);
        if (u) {
            const d = Lg(u, [e]);
            await Promise.all(d.map(m=>tc(m, $l, f)))
        }
        await tc(e, $l, f)
    }
    return o && nL(t, e),
    kg(t, e),
    await iL(t, a, e),
    s = !0,
    [s, a]
}
function Qd(e, t, n, r, o) {
    const {strategy: i, defaultLocale: s, differentDomains: a, detectBrowserLanguage: l} = ut
      , c = qe(r) ? r() : r
      , {ssg: u, callType: f, firstAccess: d, localeCookie: m} = o
      , {locale: _, stat: b, reason: w, from: g} = l ? Mg(e, n, o, c) : Ig;
    if (w === "detect_ignore_on_ssg")
        return c;
    if ((g === "navigator_or_header" || g === "cookie" || g === "fallback") && _)
        return _;
    let E = _;
    return E || (a ? E = gL(pu) : i !== "no_prefix" ? E = t(e) : l || (E = c)),
    !E && l && l.useCookie && (E = m.value || ""),
    E || (E = s || ""),
    E
}
function Xd({route: e, targetLocale: t, routeLocaleGetter: n, calledWithRouting: r=!1}) {
    const o = ne()
      , i = yu()
      , {strategy: s, differentDomains: a} = ut;
    let l = "";
    const {fullPath: c} = e.to;
    if (!a && (r || s !== "no_prefix") && n(e.to) !== t) {
        const u = o.$switchLocalePath(t) || o.$localePath(c, t);
        te(u) && u && !Tl(u, c) && !u.startsWith("//") && (l = e.from && e.from.fullPath === u ? "" : u)
    }
    if ((a || !0) && n(e.to) !== t) {
        const u = _o(i, t, e.to);
        te(u) && u && !Tl(u, c) && !u.startsWith("//") && (l = u)
    }
    return l
}
function sL(e) {
    return be(e) && "path"in e && "statusCode"in e
}
function Zd(e, t) {
    return Ci(e, {
        redirectCode: t
    })
}
async function $d(e, {status: t=302, enableNavigate: n=!1}={}) {
    const r = ca.rootRedirect
      , {i18n: o, locale: i, route: s} = e;
    let {redirectPath: a} = e;
    if (s.path === "/" && r)
        return te(r) ? a = "/" + r : sL(r) && (a = "/" + r.path,
        t = r.statusCode),
        Zd(a, t);
    if (a)
        return Zd(a, t)
}
function aL(e, t) {
    Jr(e, "$i18n", yr(t)),
    Jr(e, "$getRouteBaseName", vo),
    Jr(e, "$localePath", Kt(fa)),
    Jr(e, "$localeRoute", Kt(mu)),
    Jr(e, "$switchLocalePath", Kt(_o)),
    Jr(e, "$localeHead", Kt(Cg))
}
function lL() {
    return e=>WA(e) && !ut.differentDomains
}
function cL() {
    return (e,t)=>zA(e)
}
function uL() {
    return ()=>{
        var i;
        const e = ne()
          , t = Ln()
          , n = ut.baseUrl;
        if (qe(n))
            return n(e);
        const r = ut.defaultLocale;
        qe(r) && r();
        const o = (i = t == null ? void 0 : t.public) == null ? void 0 : i.i18n;
        return o != null && o.baseUrl ? o.baseUrl : n
    }
}
function Ii(e, t, ...n) {
    const r = yr(e)
      , [o,i] = [r, r[t]];
    return Reflect.apply(i, o, [...n])
}
function fL(e, t) {
    const n = yr(e);
    return z(n[t])
}
function Jr(e, t, n) {
    Object.defineProperty(e, t, {
        get: ()=>n
    })
}
function Kt(e, t=yu()) {
    return (...n)=>e(t, ...n)
}
function Pg() {
    let e;
    return navigator.languages && (e = FA(pu, navigator.languages)),
    e
}
function dL() {
    const e = ut.detectBrowserLanguage
      , t = e && e.cookieKey || ca.detectBrowserLanguage.cookieKey
      , n = new Date
      , r = {
        expires: new Date(n.setDate(n.getDate() + 365)),
        path: "/",
        sameSite: e && e.cookieCrossOrigin ? "none" : "lax",
        secure: e && e.cookieCrossOrigin || e && e.cookieSecure
    };
    return e && e.cookieDomain && (r.domain = e.cookieDomain),
    vA(t, r)
}
function hL(e) {
    const t = ut.detectBrowserLanguage;
    if (!t || !t.useCookie)
        return;
    const n = e.value ?? void 0;
    if (n && Br.includes(n))
        return n
}
function pL(e, t) {
    const {useCookie: n} = ut.detectBrowserLanguage || ca.detectBrowserLanguage;
    n && (e.value = t)
}
const Ig = {
    locale: "",
    stat: !1,
    reason: "unknown",
    from: "unknown"
};
function Mg(e, t, n, r="") {
    const {strategy: o} = ut
      , {ssg: i, callType: s, firstAccess: a, localeCookie: l} = n;
    if (o === "no_prefix" && i === "ssg_ignore")
        return {
            locale: "",
            stat: !0,
            reason: "detect_ignore_on_ssg"
        };
    if (!a)
        return {
            locale: o === "no_prefix" ? r : "",
            stat: !1,
            reason: "first_access_only"
        };
    const {redirectOn: c, alwaysRedirect: u, useCookie: f, fallbackLocale: d} = ut.detectBrowserLanguage
      , m = te(e) ? e : e.path;
    if (o !== "no_prefix") {
        if (c === "root") {
            if (m !== "/")
                return {
                    locale: "",
                    stat: !1,
                    reason: "not_redirect_on_root"
                }
        } else if (c === "no prefix" && !u && m.match(ec(Br)))
            return {
                locale: "",
                stat: !1,
                reason: "not_redirect_on_no_prefix"
            }
    }
    let _ = "unknown", b, w;
    f && (w = b = l.value,
    _ = "cookie"),
    w || (w = Pg(),
    _ = "navigator_or_header");
    const g = w || d;
    !w && d && (_ = "fallback");
    const E = r || t;
    if (g && (!f || u || !b)) {
        if (o === "no_prefix")
            return {
                locale: g,
                stat: !0,
                from: _
            };
        if (s === "setup" && g !== E)
            return {
                locale: g,
                stat: !0,
                from: _
            };
        if (u) {
            const p = m === "/"
              , y = c === "all"
              , S = c === "no prefix" && !m.match(ec(Br));
            if (p || y || S)
                return {
                    locale: g,
                    stat: !0,
                    from: _
                }
        }
    }
    return i === "ssg_setup" && g ? {
        locale: g,
        stat: !0,
        from: _
    } : (_ === "navigator_or_header" || _ === "cookie") && g ? {
        locale: g,
        stat: !0,
        from: _
    } : {
        locale: "",
        stat: !1,
        reason: "not_found_match"
    }
}
function mL() {
    let e;
    return e = window.location.host,
    e
}
function gL(e) {
    let t = mL() || "";
    if (t) {
        const n = e.find(r=>{
            if (r && r.domain) {
                let o = r.domain;
                return An(r.domain) && (o = r.domain.replace(/(http|https):\/\//, "")),
                o === t
            }
            return !1
        }
        );
        if (n)
            return n.code;
        t = ""
    }
    return t
}
function Ng() {
    return Kt(fa)
}
function rM() {
    return Kt(_o)
}
const cs = qr("ui", {
    state: ()=>({
        bottomSheetOpen: !1,
        notificationLevelUp: null,
        onboarding: !1,
        onboardingStep: 1,
        showLanguageSwitcher: !1,
        taskNotification: !1,
        link_twitter: "https://twitter.com/hamster_kombat",
        link_telegram: "https://t.me/hamster_kombat",
        link_whitepaper: "",
        link_discord: "https://discord.gg/d2Q6VH8Psp",
        link_medium: "https://medium.com/@hamster_kombat",
        link_telegram_chat: "https://t.me/hamster_kombat_chat",
        progress_loading: 0
    }),
    actions: {
        async copyText(e) {
            const t = Fn.promise({
                title: ne().$i18n.t("messages.process_request")
            });
            try {
                await navigator.clipboard.writeText(e),
                t == null || t.success(ne().$i18n.t("messages.copy_success"))
            } catch (n) {
                t == null || t.reject(ne().$i18n.t("messages.copy_error")),
                console.log(n)
            }
        },
        goBackButton() {
            const {$event: e} = ne()
              , t = Ng();
            this.bottomSheetOpen ? e("bs:close") : Ci(t(Pi.GAME_INDEX))
        },
        rejectNotificationLevelUp() {
            this.notificationLevelUp !== null && (this.notificationLevelUp.reject(ne().$i18n.t("messages.oops")),
            this.notificationLevelUp = null,
            Dn().setStop(!1))
        },
        setBottomSheetOpen(e) {
            this.bottomSheetOpen = e
        },
        setOnboarding(e) {
            this.onboarding = e
        },
        setProgressLoading(e) {
            this.progress_loading = e,
            this.progress_loading >= 100 && (this.progress_loading = 100)
        }
    }
})
  , oM = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF0AAABdCAMAAADwr5rxAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAMAUExURUdwTOXT11Nsym+B0kFVqVNbquifXktmxjhGmWum3+TXxE5twNx8M9hSmOuuok9nvt/g6NJiauydidzd5eKPVVVcpUJmrVdaqGBwttyzxS5Goklkw96CO+2qYOqqq++zb05ms+Hi6eHYy9/g59ZzOOiUmUxszODi6ODi6dV0Vl6Bz93f5+XOjEBIk+XMpeyua+bKnvLAeumgVys1iOacYFhhr0ZjveiUoUxow1B+ykhkzc5HjuOVWebTmzlHnNZZl93f5uCEN8xnROSTTNzd4+mkn9NuMHaO1tRyPN7g58hMcdl4Mdt6OMdqRO+ZzMfK2y4niearmNdwd2l4yCcxmOmatVlZm5E6VeCAMdxurWp8zltAc+KMju6uqtJSkT5vuoCAkCFbtPCZ0ZCCp+TNiONcoFOIzDlntO+ybRgmlhQikhEejhsqmx8vn+Dh5xtdui1ArBQbgeqiYB4ng2N60DxStyo3ljE/nmJ2yyM0o3WFwu2tbBIciDFFsdlzKT1MqllxzRhYt0JavFBnxSYwjeOPRumfXTJvwSEuleebV1ttwuXOgkhhwu+3deWVUSVHmAccax5UrQ08nFqT0yY3pyk7qgsnfEhXryBJoTVKteWQkE5px9NjHjZFqh1kwlRnuylnvTVnueOXkeDFgFBftM9cGixiuDuBz0+ByBYdduCpjh8XePK9g+qinBw9lBZNsBBEpQs2kuahkGaB01WJy3J8yeS2ieKxjuablOuxoeCIQEVQoCt2zCVWs++2sEN1wctoOj9coD2H1F5zxjt6y36OyNZrJ3F6tvPAfOeiaOK8ieKVhyYiaEAhS+SIjMdSFy44fu+urWp0ugouil9yqlqc3EqQ19/BhCITaLBGHYNRXIyay1l+u+XPjerCmOSNiYx8seuqm6Gjw2+R1C9Sn3Gd25+xzsxySLqYit56f8RPXNpvdoeSx4k5LRcWVOi8m3cwSbM+S52UolEqV2daeuh+vY5sdefCienMl4hztuFsrOKBhWxnkd3BdLxeK9eZa4cXiccAAABodFJOUwAF/v4PHClD/v4Wfv7+Tl02/hIiHwT+CDIOcHD++zbBm79Eib36iu2dDUD8tbKSbdNW3c6f6cAp3Nqtk7l0itXTfAX5YaNscqByKzPk5/2lW7m/xurg8fxJfZ/78/Fj7/7HZvPdr+31m22KbgAACBFJREFUaN7t2HdUU2kaBvAL0mERRFCaCCqKjr33cSxjn953ys42qgmEFMIQSEJIiJQUCQEMIRAJofcqTRBEhKEIKoMiIMUyOo5l+s6+X4I7e3ZnBa6c/SsP5+RET/jx8H5v7o1imC666KKLLrr8XzPP2NHR3NHd3dhwpmWD2du26IfRAgMD0cOH82eU3pQEaFGPuFgsLqLRAmfNenWmbONtGrqoqGf4/PnzdHFRQ9iM8cbb9MMCi2ZBisRD9+h04Gn6ScAvnyl7eGRkZHhWUg+dTi+i03vCAqPYRYFv2b7okrijgxw2zbh8+XKxKa26tzZeLssohr8jswNpL1h+PmxJYMmIuP+rr87TL/f3RIkI3HMqLjqFQCK/4cMXwh2TwsJoJcPin4dGEd8szmCHUnPJbP2wsAYan8p/SzM699m4tv91GUufVlJiatd8bwjp9GKxfpI2+nwaLT50C7zIQU4L2zp1fo7l2rVrzVCpTTIvGR/0+mb6vXuANxf3spOS2OyoqCg2v4HWQN0Ir3pbFsrim09NXu3iGe3p6Rkd7WJkDgOIolD5XeL+ZpDlXfwqcW0UCgu+2A0NfOVKDDP0/8LHl7hwCraRi+ezBHv+OQm2paSBSpErTGFh4uO7qjJ6WchmscgslpzPlyuhsu16kto/fPbk+GrP3/Dgm2x9Pp9WQqdRKVXpPf31JqG14nN5ZESTE8hkllwuVyoRagj8yklt+w2/9UY4m908XpY5XkKjhpvkclW951TC3FAyJAFCZinlynil5kpmYGAwKT7XZUJGxQHnf1t6AWW8hA98uEQi6abINHRISEgCOV6pjI+HQ9Wb0nEarUO2cwwnAuzgH8DOzr5wITs7Oni8S04JD5XJiLIQDU2EIB4CZ2mF2S+Y9CcYOUPlSKfTdWNjTs4tP3RlZqNEB3AYp5ueylk8HjFEGyIxLi6OKAtFURpjVvbY9h8tJ9MPcJxjGHV1dccOLj42fvNmdDTYwUCfOfPltY+ULDLJK46oSdwpiJaP32igtwzDDm+f99wd//xze4/FFnVjdccOHMZeNTUdjYYgW4M/osJZJpC8g6B03KkgCNKBjzfXW7Zskta2m48fP/7OnLlHxxYfgT8uL+4dQm+nSIsmLX4pnCqDiRP9vf0Q7QcJOkUN7aJ3Nb+29MTLkw3lrz8+efLkAwzzwNAGbDr7LdqaGCiuxUkUKoyaGOKn9gbYFwI8hUoNHTqBYjWJvvsPkO3a5zbYnz6DlXHmMLTNv75ECqec0o7aW+3t6+XlBTwP6VXK15DuOsnCfIL0w5qnbqDXc5wDKpua6h63XdPilKCJ+Kt9vL2Rz+NRqCZVC82Wgr7C1ea5ut4Hu3d/on0KZ+Qg/Zlj0dT0tL9ecr9NTQoP5/k9i6/aH3jweeEUatVGQ8z1xMv7bOyt3MyeX1/PDP1+Zq5L4ZBNJI/Hniq4iltSIQXhGh2NG1oL/H1QfdBNqhyhzCJ4/RTeqWZWixa5rjixAn6IQ4eggEAgCIXVKdxcwHkTNGpNEsDl1tsLVd8E37VoapcBQ1vMxhWd0aHl7o0pIkkBk4n0RhWFx/N9hkNtLzXwJDgLk3fRzchqSviuBAdYF80Zmfaqirn53YhnErgqVdC/ivug8O6r/WFc1Cp06bWZWnWHt19Hvyfgo6OjPaqMWtSewGQmnz3X6Afj1hT3+QLiTbqvRtV3TfsWvW/pofl/t8swFasyFIhPJxAQ/2+4P4zlEiypyUqDaeuH9mHYQju7/pFeLre6WyAipGh4rvcE7g9Rkzrgzbt+3vQ/XrjBchlssavni1XJhDyJQJSu5at9JvCsrKxHfR0dHeun3xzT02yAsV39LbnqLFOYLxDkp2j5IO1UsrKufsPgPF7pgAPH9OzRo4d5/a1YRWNKnlAkEORpeZUX4GBf/dqiMuZX3P8oWLB/Sfub796KjU0/m5wnLBBImFzENyo0xduuWXBiYlpW47P1LD/u7Mxpt+5DPJeZn98t6E4GnpncSEX4P5wAj2xx0cOlW3bWwFfOT9bvxcbGJifniUQSGL2GV6ivttVVIjwiIHguHnzzx4UDnZ01OYm373wDPIGZL9LMhpvOZFZT25o0eGRES4sRHn3/4GBNTU5OeWL73YePYnOlTCgPs0mp5RLy8qRtpys1eEBLC57uCyoArxkcSFyy5Cfrhx2xucK8/AKRRJLfWKuolsZ29DEQDvo6PNXfeFBRU1EI3cuXtN+F2eTmVsNoCiTdioxahVBav+sgB+EBERtw4G43HpQVtpYX5pSnJrbftn74kTRXWi0V5cNjMeI/nTd3L8IjI/Fs5JobpQgfrMhJTUxst77z3kJpbrpQKO3rs8sAPt0ROxKJmnP24jjUtd+VXizNzCysqMhJHEgcuGt9x9BcKuWm1395ZuyzvxVvnY3Z7gA8gFO5A0f1l6K/u3GjtCyzIqd1YABGc9faAzP/NEPRd4Zx9H3MAK5v76PqHItKHNXd0tJOfo/0zFQIjOb2m3A/Xr51qxPj6BHtS9ah5gyLPXiqnzx5/fuLSC8s1/B/1C61gdGGie3eA80rGYzFHtPHzU6CfuUi4gvLy1NbU9/Z/B+veGVdQATCX8FRfSfov1wBvgz41tbU/Zv/62Py3kgnBuMgHhwN5pe0NOBLyyoGW99Y8DsflDcAvgfftfcv0D0NcuXBmlWWlr97hZ2zw+IAzrvGquvXr8PWrFnl9r+v3fZGeO9JZjvXvLRq5wLd/ynqoosuuuiiiy4zln8CKN5Vg+k/orIAAAAASUVORK5CYII="
  , iM = "data:image/webp;base64,UklGRnYnAABXRUJQVlA4WAoAAAAQAAAA0wAA0wAAQUxQSAkbAAABHIJsm9Wf+7lCRExAE4YvtLHRtm3amqTzRaT5RVqhtI2ybbvSRtlVobJt207bth1KK9JogT5+7H3Oe9/DV/gVERPgK5AkS7Zt24LS+YOaXy8WQ/TDLbL6ZBARE7D8v/UTbnSHL7nf957xR098/ste/drXve41r3zJcx//x2d+z7d/wV2uf+R47MSbfNP3/vPrP4SMJSkZe9+L//H7vvhGR46frvN157z8o6ZRKiXjEBk/+qyzvuik45+TvuyXXneZ1SpVTOaKIgqvPvMLr3kcc/NHPfbSVslYUVEJMwVDuuTv7nPT45Jbfc+rRSppEtqxRKWapHjOA089zjh63+dcppKSrZWxlFKlUgxRpo/+hqscP9zz9z4GQeaNklZRRBjmUIq857fveFxw9W99FoJMmwlRKINKVChNkWR8zFedeNgd/YHXo6KKRNC6sZTMpCIJIYi84t7XOcyudcbbBBVaVSIKUZRmSWgilHnCuQ++ymF19CcvzDRJpaIohSTzRkkllVbVREO9+UFXOowu/9DzzIMMiUJEqkijKpWiJJilMIyv/fYTDp0vfiGaUNIsqszSuuZKSlM1jDJtwhM/+3C5yT9eUpSiSjMapMEGbUkbqWSWKhEu/uNrHyI/clEiUkqrNEgj7dCgKZVCGylFlTr3PkcOiTs8PRXaTtVEcwgpqxMSKlVmqpSIpH87+TA48rOfItMoMqQk07KhkdRQJMq8JKVKpFB86HtOPPBOe4YyNocoDaMqQ0UJlVRIsFIZV1IakurRNzrgHnIRRARDlUQhSIhMszEUZWMTKJRMU8778oPs6G+ZVoo2Uiok86xmY5lma4WkIUJFEX7+hAPr9FdHJYKQiqhsyxhUShuysShjaSiFVEOee8oB9Q3vIfNGUjROKhKCTJMKMm+W6aSgigwqq+ff+UB61CdNikhalWkpZSyKtKrSpEqZVqiEKKpWQj70gAPoD6SoogYG1ARhBYZKEUIVSdGscWIYTSoV9YsHzZWfRZGiGJpUNGRrUMFKqJAgmRaZpyJFRZD60yMHyrVfoVlpo0pKkaQQNClRqZJpRUGqVCmqVKR1VTzlqgfITc4LjZoqVQoV1USISqoUFUOpzCvjCpJJQqiSyuuveWCcfKHViTYqVKKUspr1EhKZNomiJFtjiEaZprdc+4D48z9FlBJKbqEKEaeRUmhTqk5uJLcfbiFVE+W8Gx4If/4XQockajg+nxkplBTRFhJK529WmmqGN9zoAPjz7yh0Var8mKhEp3oEnaIEpekmooi0HJOU6atvsO9u8i/qVKhURDWqUCHP6iiqRCqqJEpRClF4laRiFl51dJ9d/1UhOikVqUS5hyq9pauvozSVIlKIIkSqpI2S/7rivrrKUyoK6anKTVtR6Upp6P9Ke1RIodC0g9IfHdlPv19U6Vpp0vXSlErTsnxSKpVyIHKQo0oZIvzcPjozVlLBkXytpJJyk1FShSg5mkqli4zc3JRIJYoH7JtvvIyGx7brFKSrVNJHVXJKyQOJIIUg7zY0UCqf/Ix9cqu3Wy0MUuvXJEhuQRU1kLJEIQrOsxOajRElXHj6vjjlTea5TfdbpM470mqU0hGVVCqlKNUq8yDSEGXMU66xD478hbFSNdxCamgUUiG0SakgDTqKKiqRSpBbIpoakuTX98EPo5QSqkT2Kj6UL0LIrNwgSBJHZvk9ERmQ8eJv3XN3fT8ZoxKVzCC7Cr0UqaJSRTozKjVKc4SqUciYkipS7zx9j13xTaFKRQWRfK8siVSaKkg+hNI1yyNEyh5SkyIheeoe+7VMkyQJEZLQEXpROFIlCYncCE0JQjmk0ihoFA1U37unPvfiRlVqXClChXIqKjSaIlRROZ206So0qlScmjRLRVMfuvkeuty5JY1SfShCIZWkOqVCitKRtgqlrJa2KhKSSqWtUirPO3Hv/GKkEVLeodd03FKSisj3Q9GV9IESlHISyrii0fyhe+amFyuzltChgyiZSTkqVZpEKoZBFT7kcSsEVUhlHKJy0bX3yotNSySVavUooVTkZDgSUYrXLSSEKLOkiyopGxtRRR63R+4tKlVQSBURSkQSQUSOys7pUyllVyp5hkMqlEqUQhn77D1x0vkqGiVdlXUrNySkZDdPIUTUUW5F4lSkioQkRVEDIgled8JeOIMIrRMUEVIpiVKSz5klqEiW26B0oYqEqDCIRCNl2r33wMmfMpYiqUJyqlTJuEg/U9qkooSUqNJUlCaloiEpjRpVqd539WP3+0WjSvtclTZFTkUZMtJVoZKSG5VIkqJKqRiVKmMpzUnK9xyz00yHSGJQyg155lDkQaGi0JFRiFAUVQjlzFTmGTMoFH3k6LH6a0qiuUpJJElUVJqiN5Uj0dXbDGlqhNKPEtGkSEISZx+jmxFal66ulN6aVJocpNzUkBwoujhJVEIlJZWkSENRpSkfPXpsfq8JMoSositRFiISVRQUERU9kRAijr6TRFRBGRNlIMWPH5PTGUqVTCKlQvlanSppjgoRmWXn9wccKKpX1iNjSqneddVj8WNqRVBmkttJ61a5OcjN11R+7DTy7CAhEQytbAzD+OBjcPSTSCGSoXws5SZkViny6JfMWpl5FFVupWJEZl8iKbM3XWH3votUqKgGj4RGBZV0lSKhlZCKZBfpQ7qilMptqoIenUoh+aLde6k0ashqIh5mlMyedkiodIQUoZCHEqUL0dREncwKFdR/79pnKtlBpNyWIoVKV+kJuZUSXV1VpCISlDhFPcpIilJImoPTdutP0LrSRKr0keRoKl2JTpXeKg/RihRKfKjMKo8gKU0pqTN36ehFKpUUlVr0q5KuyrAccpNErUpaeXaH40RvoiKlr5C3XnF3vgsSaqYouYmKcxOkpCKPQoogbSHK5/IIyiycBodSUsn0C3fn39KoNUkppXsKXTMVSpUoCrmdVDJTPie3K4jKUZRZoeGk8hu7crNPkSAqY5AEQW5uI/mcm5R3yueyIyFJCFEWwUpueVe85+huPLBQlLI5lFRJdE9uKr2KUp6JUki5KTc3I4pQqahOZqvTHN+0G4+XVFJJKirRhYhyS4kSoSBtUXYoNzzyrKSkI4Wu+tRJkclv78JpHzE2VSSCLokOieRW8mNXFKIhiEhSaJVKyu2gpJC8lyLp/Gvu7NuVKsxkBb1lZpZEJfpklspNPoYIKpUoKZVKKTsEiejINF+8s7+kpKjJONQRRRWdElGkoCXKLrqKIreIILdCBCWErjxbEVL83I6u+FZRUlSUIkmVqFQUqVJJSFKUGVWSSsVrdupDdJWmnlJrqpRCz9vRZyipSKUylL6SqNRQiQ6aVEEjlSqVpioRpVeV0qVilCQ3XWnIx0/ayY+w0pqZIdI9O62KkhC5J1KQIBJyo+OkpGQeKbdCEWQ2hAfs5D+jUWQ9z1BFkBRSpVSRUqm8E1WIyE3uEfXQkyq5la+hGhTxBzt584wBNVmtD9WpoJL3iUpOFCUK2QWtmUh2hSo6EUq1Uk1IvWwH90QhhewEVe6Q6JIGopId5Gt0Zh9CKiVSVOZo7KIooYiPX2nbgxVVklRaK1JKLTSlRr1yE4oeIUikJEKlUKogoooo6ajQqEF85bbfNm2VTItUKq0iRUVRdiqVEolqdFAUKujlEJQ0EEp+bQrRWduemUiUhFTuUIVycw/dNStkhuogSXeQfBwlcSp9pdNLhcr4t5uOXIBKlUZBvayKJgoRpFQkFelJkdIlVaJSaS99d1SniOjz8NpNd0aaS1HGKqcoPXWlklKk/ZikVGOmHClpUkTTMDRJUH0Q4sOX2/L1omStIZJCF6IiKl0zVImGg4KgpKIySI6olHCk72YpGbTSHbacEc21SqlOZaRCV2kjVaJi5PT5S/sUY6pU0R3iURJEkkbpu7b8vkaNVjPQVjgVJFQSGqpooMpB9EAq9zR1aVIZ6VEoSqpkKH5my5NFlSJqMLHKB11CkY+V9Ko0CcksK9IQDyGqlFKSXcJBiviTLW8gohWVgTZVJEkJ+tA1u0RiRWQWrQZeQumqqCI3RPQkGZ++5SMQGSe2FwQlCTpCkZmQpZAbtSKpIJQgEpGSJERnZh+KyHkbrnIZSlRkcyRSglCPmdtQ4cyzw8Mh75QuJbvcJFKPd5EM5cMbbqFSpEqINBEZtRCkIp1SBdWaoWNUqCKUKkgqUSrK7K50UokquOwqa5+fqJQMIUQTKkmrkCNVRE+JhhDZg1KRokLJu6CiZITKzZCCnL72HaaTkVDFQp0EdfTVDeUoI52GUCMppY/q/FXVuUpFVGvRp699T6KsJYUklSpSBYmU41EhKqXkptQSpSJdlZ6yWIoXIR9oSn3N2pk0nUgZGulSUSqlkEoqhUhPEV3qlFBK6anK2pqaIyrpUkkVqdxn7ReMWUGKTCtpqJLQo4gQiihRUIZ3GVL0RCRSDClVVLoqyVgq6VFrv4YopCjrSZdKTkKUMVMNEjqpCJ1//iGzBHFSoUkKCkUXgkSTSvGTa78jCppEWqkE4ficlE4oNwZyi5CZj6eHfAx6KPI18mww//m1308qqUTGiBUVQhVJKeiUE7KjFJWuj9nRJkUlQo9KKCJCkUn0q2t/iFTGrCekq5QuKVmRAZ0KUVS6VKRXkuRRRXaFiq4qgsxKQ6nfWPsDY1FRNMy7HEQkNwkhfzPkJgj5OaIkFCpRHSI7pCSlQsZfX/v9NqiURKWSVamMpHG1qkepQymVdKkThZAaqc610pRUZoRSKvzK2u+gBlmNMlYqEr7cyKOSr6kUlZMeCJlHRlBUSleVREHKzVhBfn7tN8iQeVBmmixBQiEJKu/KDLqKQ6TsvFIluxBJgrxHJdPCT639IorQpE1IlYqKopJbCKWRz0UqqeSGRhGSxjMV3XOpQhKEUsn3rZ01KaWCQhSqkKiositRSSSz6KTCuGlVRJCSICUqItJ1cyOVkkLuv/YoWhkRQkpFFWRXiHNFkZvPuR8QVFBQRQ1CykoUkSrlVigVvmbt2yITVZRKelN1ki5VyqCK0mdKV0miNCklHpUUlb6qlIIqvZWoz1j7/A2qaFD40KODftSPDlJDKgRFFpIqKW0ihaJKlEqSUilVdLO1W1ubro2lMDxuKamkEEpZeRYkZQapSG5llhtKQZssJBIicdmV1q52WRBWUImo0khSdkKQLrpKQih7BCGRIEFXNTqkD7cgqUmp4mPLxg9TkbLCkEapRBWtSqWGlHNR0eigzEonhUVBEaFQBIVUkCASzt1yHtJMhJAGFMkugjQVoU+WQpIddNSSDqJSiqQKoYTSSamCZ2x5gipNooEyrh4Vut7lhCrFDyqUlOdJRo2ip4qkikh2bpKS8Ndb/hAJStQw7RL1ITO1UpLbMIRCkFeSv1i5oUEJyddTJZLJz205YxhJQalBKopUKhUVQuSUSjVSZSYfc4si1EPpuo2iD0mFNCoV99vyHUqRChERFXI2bRqpkyKjgnwQjRYlKSQUlbRJqZAqpKKSVt1pyx1RaUoVpVkpFaeUKjOdUpK2VKmkDkKXnpKq81TSlkRRqmSkSvKJE7Ysb1dpqg0hp/Qpj76uRBlGVAkSVarjIaqlLVR6qyyU1tVLls1Pl8qQFBItazoacpSjKEZRJHQqQ5p0hZBEkkp6Kxyv0Yx/2/Z7UYiywyYF5Sa3RHmoIIiCFCTnXWZuUEW5JW0lN/mYKMhPb3vEYKgIrWSVUoUKVZQg52PK8yXPBKWRllNqBOWoUAmdhqrJF2+7FypVopDkRpWiJEcKpcisoZBICEpHZFZBFlR0yu6qMoukweDia2xb3kbQVAS5SZEkJQ8SeeadMZPKTJ4lGTeI5BbNA3mQiJi9cNnhv0EYRKhJl1KqNFe6NHYvJDdUh9CZbkKVVKmUdJVOq3RRhT/byRlKGg3I/GgYU6igUF8QlEKhhFJmUeh0vDgVhah8zB2V4d47uSeNUppCoXSJVykllU5UjZtCRKnck4pSSVIqKZXjVCqlQqe5kktvuJOrXlhplFRQ+lEqcqQNubkps6dEHSWktzpTRKlSpdBUVI9S8MJlx3+SYmVEwpGiTUVfVyuVUlFRJBKFUuUmlZUqKl1VSqUoKUMV/eLO7tOoUEWt6aNyi/KhPtRxVCSqU+7hoFQpOCWKKkWVBlKlSqu+dGc3+XBpFCqzKhFFJaKtMiMJigRJZFihiZIk+iiNK5VHFA0pnHutnS1PblRRRaahpCsZioJCcqsElQiyijzzDMohxanQlBl0SA3UXyy7+D3SKMpqqIJKUVCpVEg0pCg71YnS08eIQhUpN5FU6QtSognfshs3+9hKNiQiBSv6pBREQkiklKjskNuiEpGzqWKp5CaFNMs7rr8by6NDKiUqHoioIIXkmRKSyiGkpFRBKqVPhaqlUnKTSqSgKRV/vuzqQxSNNFg/icpNJUqUmxmskt0UuZmNZ6pU5CZU0TVTCVXIV+3O0YshGauhjvYoiQ/JM0JQ7ilJlOgRpCghISpN5ZZ8TLlDnHv53Vl+u6jSumnlUASV1FFJsqOpq/PRTZpqleaCUVIqKgl9JJ2z7PLnJmWGSUnSVUlHmlCiEHKiJ5WyKzeSoahiJKOygjIgJbnNbp34MjSnMiDCuShBUSqO5BkHoi0hRgmF5KaiVIqfiCpppCctu/7AiUgZI4ISJajcVGaZUTIjNzcvZGcWSVRuSVfKu4wrfOXuHf2IgoakSREKUW5R5UQ+oE4i5WPklk4RUU5UOhE9T4mmgwtO3L3lHGRMNp5nZzZ0/d1x8+7sPCO3Qt75nuzsdIUHLsfwZEEZi1BJIpV0pDiFGqVUJGgEoYOipKS7oiIVXVTIbRN87OixWP4IGgc7HQoyD0XysAfJDYo+kCOCUER2qORml8rOTy7H9JaXQlQpfZpFIpJSpcpufXwUyjMOCRLK50YyciNVlMqnbnJsln8aVBpRr1YNqdCmqNUdRaJyCymiKFKlQh+qKJ/LTCV+cTnGN720SipDilAiuR1FFFElRNG5qZzKDRJ6ilFJpCCSOpEohXzihsdq+XsoKalUSaJUqpBKKfpImlStHqXqVEtfRQpdVcKjp5T6/uWY3/CTUiXJUaGKEl2lUuhJRQqJ/i5VyFLRR+0lqUQ5RfXeaxy75ZdQQiXvgkZXNCWFUhlCb1mkahSlV0olGCUzVBKn4hHLHrzG+4YiydeECmFIyrMSIZpUsivJEaXsrlQv2UFTU+EtV9gLy3esCYrGLNL4uApSBClJQShFR2+hkCJ9fSg4RWY+bdmbLzQmQooekqjQaBm3fG3VUL4eapU8Q+KREJkjPXrZo3f9VCNKEQ1FhShVFNWqQoVCSMnYlVS6VG4lXcrmiiqiwgdO3SvLrxCl0mg1qyUMhBIilYQWSaIGXaFJQh/J50JKqRI/tezZq13QdEJRNWkUNFWlN9oKVaooclPps1D1BUpKFYo0Eb36yN5ZvuIyFaWGVsYgZdBQESWjkJQ2VWblA1JRZSQKZdJcKvTR2yx7+ReVUpRKRVMphZ5SKSqlNEURHd3zVOlSadI1SVTRVJWzlj19nVcnzTXKRAYpVaSnOqnildLTrRxS6UuFQmm+QsnM84/sreWuH0mUFclYzaJJlUqVkT7SEqmolJLS1qOokqiUlMhAF5667PUf1oqiCpHMS5IoDkRTlIiQd8WIckvXDRokNEIZ7rvs/b+VKqSpDGNQClWolEopO6kTNbrnikrIybukkIyN6HeXfXjDNyqUyobtpVRETkQlIbMa1DKkUoqUfMxA0qQU9bzr7IflTheliUpTqtaIU6mSeoQuEUfuqJJSoon0UFSSSpXK+act+/PexihlIKhJir4gmaWJkqT7g5TeDvUw0YRQuORzlv36s0IjKZIxEkLJ6AlHkrQpqRwhXe8UQoJKE0T6nmX//rVBq0rKNOSGIohRiSpKUlEkVOmNFtmZKZoKP7/s42s+hQw2FCSTUkqiSikpVZToKV09RRdCklZTaYr608vvp+VGr0WpbCiVlLEpHT0qVLovlROlSoWEqMxKaavoGVdd9vep70ShuWSabI3iKCo6pHQJQqrIQUJBUkkVwUS95jrLfj/1PVKqSIUSSic0lJDc3KJERpCRZ0IkQhWaytibb7js/9PfHQbzRAm5mSFNNHWdSDR1iRozQtDUWspbT14OwtPeLdMiISTzauRjiIogKaWrcBBKDxpdY6pE599oORhPe2ehUdUkpGX4XNGm0la6QqSQ20lUkqRIcv4NloPy5PNQFEGpAcnuk2HmHilJHpl5ludRGUJed93l4Lz+uagkmRfydzveKSgihOzGO0RmxQR52tWWg/Qaz8esolEI6YdQKT0iqSgEHUmnJLdKSqGUR19+OVhP+EORQYMo6a5OZtB5lpQguQk1OB0lJY3kZ5eD92xIVkqpZFYiakQQvUXqREGkq60TlaE+/qDlIP66d4gqZVApqUgWEXQlFCSGHoqUypnaird9wXIw3+Fcg0YrFV1VCHknkYQ+GFSqtFKOBfXC05aD+pp/Y56hCVWqOPK1zHLLMzc3cnPmkdFlv3SV5QB/+AeUJFVUUqhUNDpSygyh1JmNKiUqUZkXfctysN/yVbIeKbvSNdMhz5CZ70UD5RZ0nnTqctBf7RcuaRYqKFGRKOqUKlGKWpVSekuCWvjwGUeWQ/DOL5tJSYlUMlaSTGOWoig0HwxKJRKUp95uORwvf8aHpUIVrWskbUQloQoaTcoK0pRU7//B5fA8+Z8GBW1XqokMUw0plUaZrWsQChf/9XWXQ/XbX5tQlEpFMxSsTWdSqZSkGKI0jM/9ouWwveZDzk1JU0OZSCNkonHIsEpbRaP0uvtfbjmEb/ij51OU0nattJ2mUFSJwmBCXfBjV18O6VN/5r3GjIVCJPOskExSpDSdmOHCHzu6HOI3edT5TUIpY0OUVhUqQuMgKuvlDd9zdDnkr3nflyADmqoyJLQ6hNZVCZrU0771istx4JHP+rNPmmdaCSXjwExrNgbhk796zyPL8eKN7/2qCQ3rlRKpUkRJqibNetZ3n7QcX97uR98Y1UoJIpFCKJVQSPKKH7j5cjx6m+99FppNy7RgElRKMnTxk77ntOX49eSv/633TRo1SjSqZMzaBb/8NddajntP/+qff8UlJlIolKEiyCde9RNfc+PluPmEu3zlLzzh3E8hkxRUyMfOf/RPft3NL7cch59w6ud+7YPO+dN/f9pL3/LO9130gfe99y2vfNo//95PPegbP+0GR5b/tw4AVlA4IEYMAAAwSQCdASrUANQAPpE+mUe/o6KhLtarg/ASCUEOAZb00B9ACINL/sFP+/L88e7P7riwk52vfRvt9fNv5yX4ze/jeRfQA6WT/A4Ed+C36MUvZbZ7WZoURJlnffrLieP7/b8FH6l7Kfu/k1b3/dBg8Y8+UEwr/07hWfzQRrBM8fyo072SXU5fpmtH+Q+UT06oX073Q56HP/dG7C+83H2HCrdToNjNUsYB2IZ9/Zd2nt0SsvViuzwQ/lvegTp6BLkWy9zjPpQY+wzz1yCBmR9z7P+iSA9IIRrqssk/ctOGr2sOXTsUvWZNo6fTqTqOLagIj132LLoLvMXIMb38PdnudPUAgOPwSEdkHjS9+jeA/168/EM5d6dNOFyBQR57TH4kfvvc/oqNxUiOoS+493/hVpMrZ45KfADcNhk3mcY0FqYPMisMi49IVqg1UYR7Z10O6Cr4USQFJfGI71cVRJMUlQ8IGwnPqk8DL55wgQLaOztqVQaT/OWjm63/jBt/YUQ2yPXr0/zUJNoDAZYOaEbnkbSKh4A8m/PNj3FwhV4+W8r94R+GSRV/rI8wVftYH7zNq0jbMGFW7eh1kL/gIPPFTzeA5ZeKuMriBmOD0BVirDOul+TuY6ShfYog+ephtvIDbTedwQYSJ8ncOI2Lek5ZjZCgRpMP1eIboGKLxWWJP438TxnJub87IdYjsZ6tgfuAAYkAPXV8mv+EkKCh6CNJgOw/fkZddlm9LtcMmUbgH5kC5HL+OAaPyam9ea8FzwSmmuGRsx7ppbtjGWzMhrfJWl7RKAAA/s1wAi/4AM2C2SknZC7Zmi3BfGSPuJhXwxn4GOkrynydx7sgJXjGvmMnyLkXIJvTGHRpW6k9KYJ8lFNGPRrOEZTSS5YwalOEAfYBfQYI6WwTJgLv+1gE8LR2SbrY6ZBj31oOwrnfTns4FNLOr9JA/PxNk/ATY2RZJw3QmOjVHDoAkOMpKo5+UrRjXA/IqkFX9f9Gtxl59/c7tDdqYxADM3iRyczmFZEnDXQQBcXZPLLZqso+85R7FUJ9sew+pUM0sIxpngKQRIXwNECyrLSDDdvreJfVWGw5zmj0na/4ujnKYXPHAOpUwSkNI2rQ0oicHy6uRia0uzc3kpy+f2JwS28Zs3y27tymb8RUp9pVOzmbeN0adffXUpNq1kpQI9LerKWswGNmxIjtX/1qv1292SlJYk92eFL/Df1B6VDbH8nRHmg1R6SCaJD9XlqAxU8mRc/JpLEOW6RAfXD0K6IRV1j1t+HUPcBxbIOkPWrzml2/1pgWODEQeV/Lo9ACoYjfUZll+GuUChLkmNzbKI0wALz4nbPghU9ioCYyQdTSgRzzzZN67HYMYI1VYYnUw2YlyeejbtMcoYgGVDJe/vfPkCIyt00VSr/8bab0je65PwF6mfD3YeUDrw4VOAAI8NL4idQXhBw8ukCWEtEBMZB5wNLRt5in5rztYZEcqWLthsG6BooU1CQ1kiy5r9U8+bbrjK1NAodeIuM4qeMLqbPolyDf4OZimY7qN4yZkKtvjxoD8nnvG8AZvoq+ZoJMIy4f5wKY3ouFOa15V7lVT8gXkefIqlqmig7KkQdOkeasJrkJVcVfRCrrSzxNLeIZvBHibyU3KbRamKoOkl+0ngz44dluYYfpYb0WHsG+mSPZS5H9vJkTXb+mp0mTWuN9lVSXnxsRhP/tE8CCdBk5E4eC8T3OJwXFgjE7ZRZpt9bUYGSYm7Ul56DRITp8wnIVXkvFX6e1kudGlc32qY98ZfhH0gY3JzLAKdmunvC9LGF4eqTEaNMrJ8kYwafOC32c1GFUv4noBMLXspYyfjKl+oe2hjiKXf9ApKQbmc9XhIxCJikb53npUzWR/KhVLBLj+4UYOWdvggBxaIvHGdrVE5r9dZzu7p5qzwh6Aap/RiNDzi2H5urEMA+lZJTf8eFEkYYxvYCBIUDNNx0AOHMMwBfqIT2u7bI8s1y+HQBsmZo//rLzRwG5L0nXoxJqQ7iJtdNuePxVHM8JAt6uN6+ePdncswxFOF0wD5nhvcq6mixjc8/Tlm05492fEhpUuyNsrrdEqCS2aSVtL9HJecXh2Mm7cFZI19vLkCezb83IyGrNCrmOCj8bvTX5LnWtYmMNRAWtvxeHsQazL5Y0dLOcXf+ZWH/hM5mst97oSBpcMfcdMshngk6l2NinLMSAe5uANEJqzVyZ9ZGshz6HA/cwO73R1cvFUDJco70CwDTHluriv8eNX+XYAc2Cy4G50NOGOPAHtrt4zS+wFNnZkCV3jCjaIyfMsCzLLpnm7R+6UodWZ6qSov+IQK7oK3l1capqQJiwLAXnpHDicfNyzqNnkEdbP80yLse3dMeYwLAUSxkPd3A/jKtCi692aKZlizNk+TIwpb4bq5/O1Prhh79zJ6YveNQ2plOdqEUgMy5e5urVTKkWd3EYLaOwe+7pQt8/dXZIp9/CVOLLc8LylWLr8mjQtU2ETCEfsDPuJLzkohsw+UbDTkyPc7o7ar4K2/YpynATBODeoy5DrIFVtTunQZnjSV9+934/plZrjzbr7ExjS9BCjRkwSBUihkcMnj/hnhmYxKKZqAQzgdCIxDeUlmDcjJqKVmE4aq1V4H/6fU0W5ODlV+EdJG+w3rUK2+XkNpdEUGJ/lApN2tgRQFllj+y/KXJMHBAsJWrxvTDUhF1LhPIorB6LXG80KSioUWZ7nCJeILJ4+1V8DlEKNSS4MMAmPfozPPi2zgXwrUtKacn01vjaMMrgDOwknsf60rqBlDtBBc1KPchx8ArA11q6wVRQr9lTI54YcrPBa8apjCwmV3BdmWvmHIQOQrIdOhxgijFWRpzSsY2rAqV0H29siq0De8qqPtQ/6IzK9GYGdSah4N/5LBEmAQBOqmIuy/l/ojhR/0Q4UCKWahVACUzwzfbwYvj+hdGhdQWmMscUtghzAdThmM5RqM+cIhjsCr2fCAPO0kZM3/q52nmLiMrqShEj+n5j+UKtHhbxyUiwPq85iXIzLXNdqYEyjw4eRw4GXF+fzLmYePk7imgtxQ8NDVOgOhkaRka0cCxDlnTq+CTujlswk/KIUrrOIc6UUyKfZnDSbbIkQEFilr1AjbmabmdPVYOp+ySWrU/j3ZINAYM+/+dYJgUiWsaQu3cP8FOu5q0L2dxFZ94cS2h4duraTnsT+udbWOLKzY9C0J+eC6bDrQL379UCu5eJcZq12kv+KcJtfxdFeL9xpMO/ATrxiKOmYJYTr0SxZDl6DDKCAViHiuoAB/G31slY4dW4W7wXcbVpV5JTbTJPno8wEpc/wpd+K3DRHBJK74Woop1B4//btQBTraTM/Nzv/x53jv/bKOPEJ4O/pGLSQ/Wwh40KMicneSnh3tCPW8YJnjcErh6DmnasFoGKdoAUE1ciGN45JzIRFVQeZ8AAkRHL9yLfdPz/j2FPaZl9P/abN5/2j8ftZyiIbSchu2/dXfIj/HrpmXu5KYV4pnMt0BJOF7MWmCExPwXqQ6rWZRTfqmINj2/awkQY6++zekSx3N2IBPYm8C1Uqrg6sDh5gBGohhujeurxIJfzkKWLyUYWUwax+iuh/9DeFmFlPyXiEXYLCJbeLmVFjXnqSuYqXoFexTYnR+Q3pYobkWcZBfBxBUbO+uaNd6cCVyOyjMPewVFpZuhCjjjpjdAEcjPcXVRicxJwk5V9P6Y7i6+APrCugyf6+UDVm1IkDnx+01Ncn1IoKbmOYTwPsB0V0W8xpFnfCGLzdoez2+osFiWYiYg99vJpWuQyrjMgAtZTafh8iIDa/X3XaiEAfYiK7u7AP8yPRO9AEYqYbRtfm4a1VCdWQf5VDxu1JE2I9T3r4s1u9W47dPhVo5/D8Z1jGPAH6coqQSU89jvrn/6fS//6c6/fJqt5xddMEAJ5gwu9JAAAAO1T4gAzEVpD9IQNWLXRZbyvKg+hoJZTTwJ9fALazjPdm/ORaQ+rmtCZ6c2PEU8sn2kTOh+mavIKGWOpXcC8pXx96RiLNHsWHQ04e9thVByhMqsbqhydz2pkMZnKTPkQchxwRcFgWAEv97uz2BG//oe66eMuu7o/gDx/HL5E6PJ1SzzQkAEQlf+huFV437D6rkTNUgAAAA6T+HUO21HV6shVShYamxhJn96LqLbuY/WgwWo/+d19xIjEHCarz3+EHoIWIG7rAAO0AAAA"
  , yL = "data:image/png;base64,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"
  , sM = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACABAMAAAAxEHz4AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAhUExURUdwTP///////////////////////////////////////48EzvsAAAALdFJOUwDMFbBPL5m/ZniGseNS7gAABBFJREFUaN7tWM9v0zAUDlkyut28tMnaU6YCYzs1FUM7dhrTYKcUJvHjtG4TXMk2OJcBQ9y6CcSODCHBn4kd24ndxPbLkLiQ79Kqjr88v/f8vfdqWTVq1Kihgn2WeIdh6cpOFJSvSNhGGH5cXHBHZGXRtH8epWgX3mSP6MrEQPCOPobulVpGqA0eQBxjeaGRLcSQE2C8kReeZAv6M9zkjy1OOcE+5yuvtQRD9pRP99u7Dz9ssa8RW1oAEYxp4BPyPfgZil5oQQhSB9wacav9geAGCIFHXnk3yfyGvNP8EHqCpfSZPv7mCPsxA7GhC/DBDDfAHiEJxKvUhJ6WoMENeIqmsMZN0OeBSx7BL3NQATgwbkJXdcCWN4UrIYDcww3jXSBhmIiZL5swb/KhZc2lLtwoI8CW2cn0JSsios+VICDMnlGRuj0WzCJwdGb7Zk0clLqQudENQbqKFAiBwjyvItgDEiypCFpAgisVQRtYWlT700AC4CgJ0ABEMKsmgHnxhprgCEQwVBPAwrChJmiCCM7VBLA4MjV8GwnxO6CfnQoEi2JG/2D3ywMR0Df3xIQKWdGsQrDHv9B9s/+QYBWpCbAzjHAjHYEXg9OonMDcpTWQnsAo65mYYHFOBB2YASbjnJD2QnmaCBdkAmoTMX4LBd4/k2vkdcQIJkvLEIIjYxIa4AFimOHw8e3NCmfolvU11ib8DNMVJW338h7VGAe7pJ6XGaasL47isG5Js6NuEsXeEP/27DRXSSSkOaggnKRxGReFvgUqCMHXMOUkT7+IQOVBCgId3BrMEY50ig4gD/ng111jEboC5GLJfsvmIZOyITSlQVCSrU5kIhDCvU8nnmOaia/ozLOKDKOfK+eq+4uNn3jkbMey2hgIgjgblS8sayXzST7ExHofrOWjcounVzpMd2FOTO/gNvK2rjhB+0GUHiuLRKjNA3IH75CPOU4wJlrXz00ItJlILiupbxNiEiWICRepam6S3TL1XWiyWV8gCFOxO5EeUd/GMROG76Rb6pGi1mb994CrZks3uvv8PXhKdy7JtPhowKSiyaWhpxPlIz7xNAunI/mxrKtuNrOzKyiqdJP67HShRpW9XBf2CiOIT8/Q1lW2Vq6tqQkrF2ICDVJPL+gq00QokB3MkGAa95tQUmZ1PQZ+UygqG2aLPLFp8MmV07VqQ1+SBRyu9+uS3OM4jHTDr9OU5o2FwhCGHTvUdkkDqTo0C3KPfdyoMLO1C7/41Wa2oCj35rlNqrBpzq5Um9ukmS14iZFUm9ucRNcfBYDJsasj2If0+5/U+09gs7Ny+O4A/0BQMfixZf0NQwe8HzMUu0u0HlpV8HyqOfQ+Vv6He0eg8L6EVnXYu58PMMnx/cut62yvUaNGjf8PfwAoSwbZp4082gAAAABJRU5ErkJggg=="
  , aM = "data:image/png;base64,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"
  , lM = "data:image/png;base64,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"
  , cM = "data:image/png;base64,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"
  , vL = qr("boost", {
    state: ()=>({
        boostsForBuy: [],
        fullEnergyInterval: null,
        fullEnergySecondsCountdown: 0,
        fullEnergyTimerText: "",
        timestamp_full_energy: 0
    }),
    actions: {
        getBoostDescription(e) {
            switch (e.id) {
            case "BoostEarnPerTap":
                return ne().$i18n.t("boost.description_tap");
            case "BoostMaxTaps":
                return ne().$i18n.t("boost.description_energy");
            default:
                return ne().$i18n.t("boost.boost")
            }
        },
        getBoostImage(e) {
            switch (e) {
            case "BoostEarnPerTap":
                return "/images/boost-multitap.png?v=1";
            case "BoostMaxTaps":
                return "/images/boost-energy.png";
            default:
                return yL
            }
        },
        getBoostName(e) {
            switch (e) {
            case "BoostEarnPerTap":
                return ne().$i18n.t("boost.boost_multitap");
            case "BoostMaxTaps":
                return ne().$i18n.t("boost.boost_energy_limit");
            default:
                return ne().$i18n.t("boost.boost")
            }
        },
        getBoostTarget(e) {
            switch (e.id) {
            case "BoostEarnPerTap":
                return ne().$i18n.t("boost.target_tap", {
                    number: e.earnPerTapDelta,
                    level: e.level + 1
                });
            case "BoostMaxTaps":
                return ne().$i18n.t("boost.target_energy", {
                    number: e.maxTapsDelta,
                    level: e.level + 1
                });
            default:
                return ne().$i18n.t("boost.boost")
            }
        },
        async postBoostsForBuy() {
            return await At.post("/clicker/boosts-for-buy", {}).then(e=>{
                e != null && e.boostsForBuy && this.setBoostsForBuy(e.boostsForBuy);
                const {$event: t} = ne();
                return t("boosts-update:success"),
                e
            }
            ).catch(e=>{
                Fn.error({
                    title: ne().$i18n.t("messages.request_error"),
                    message: ne().$i18n.t("messages.no_boosts")
                })
            }
            )
        },
        async postBuyBoost(e) {
            return await At.post("/clicker/buy-boost", {
                body: {
                    boostId: e,
                    timestamp: st().getNowTimestamp()
                }
            }).then(t=>(Dn().setUserResponseData(t),
            t != null && t.upgradesForBuy && rc().setUpgradesForBuy(t.upgradesForBuy),
            t != null && t.boostsForBuy && this.setBoostsForBuy(t.boostsForBuy),
            st().trackEvent(st().camelToSnake(e)),
            t))
        },
        resetFullEnergyTimer() {
            this.fullEnergyInterval && clearInterval(this.fullEnergyInterval),
            this.fullEnergyInterval = null,
            this.setFullEnergySecondsCountdown(),
            this.setFullEnergyTimerText(),
            this.timestamp_full_energy = 0
        },
        setBoostsForBuy(e=[]) {
            e.length && (this.boostsForBuy = e)
        },
        setFullEnergySecondsCountdown(e=0) {
            this.fullEnergySecondsCountdown = e
        },
        setFullEnergyTimerText(e="") {
            this.fullEnergyTimerText = e
        }
    }
})
  , rc = qr("upgrade", {
    state: ()=>({
        myUpgrades: {},
        upgradesForBuy: [],
        sections: [],
        cooldowns: {},
        dailyCombo: null,
        dailyComboCount: 3,
        dailyComboInterval: null,
        dailyComboSuccess: !1
    }),
    actions: {
        cooldownAddUpgrade(e, t, n) {
            this.cooldowns[e] = {
                totalCooldownSeconds: n,
                cooldownSeconds: t,
                intervalId: void 0,
                timestamp: st().getNowTimestampWithMS()
            }
        },
        cooldownStartTimer(e) {
            const t = this.cooldowns[e];
            t && t.intervalId === void 0 && (t.intervalId = mn(()=>{
                if (t.cooldownSeconds > 0) {
                    const n = st().getNowTimestampWithMS()
                      , r = n - ((t == null ? void 0 : t.timestamp) ?? n);
                    r > 100 && (t.cooldownSeconds = parseFloat(t.cooldownSeconds.toFixed(2)) - r / 1e3),
                    t.timestamp = n,
                    t.cooldownSeconds -= .05,
                    t.cooldownSeconds <= 0 && (t.cooldownSeconds = 0,
                    this.cooldownStopTimer(e))
                }
            }
            , 50))
        },
        cooldownStopTimer(e) {
            const t = this.cooldowns[e];
            t && t.intervalId !== void 0 && (t.intervalId && clearInterval(t.intervalId),
            delete this.cooldowns[e],
            this.upgradesForBuy.map(n=>(n.id === e && (n.cooldownSeconds = 0),
            n)))
        },
        getUpgradeById(e) {
            return this.upgradesForBuy.find(t=>t.id === e)
        },
        async postBuyUpgrade(e) {
            return await At.post("/clicker/buy-upgrade", {
                body: {
                    upgradeId: e,
                    timestamp: st().getNowTimestampWithMS()
                }
            }).then(t=>{
                var r, o;
                Dn().setUserResponseData(t),
                t != null && t.upgradesForBuy && this.setUpgradesForBuy(t.upgradesForBuy),
                t != null && t.boostsForBuy && vL().setBoostsForBuy(t.boostsForBuy),
                t != null && t.dailyCombo && this.setDailyCombo(t.dailyCombo);
                const n = ((o = (r = this.upgradesForBuy) == null ? void 0 : r.find(i=>i.id === e)) == null ? void 0 : o.level) ?? 1;
                return st().trackEvent(`mine_${st().camelToSnake(e)}`, {
                    level: n - 1
                }),
                t
            }
            )
        },
        async postClaimDailyCombo() {
            return await At.post("/clicker/claim-daily-combo", {}).then(e=>(Dn().setUserResponseData(e),
            e != null && e.dailyCombo && this.setDailyCombo(e.dailyCombo),
            e))
        },
        async postUpgradesForBuy() {
            return await At.post("/clicker/upgrades-for-buy", {}).then(e=>(e != null && e.upgradesForBuy && this.setUpgradesForBuy(e.upgradesForBuy),
            e != null && e.sections && this.setSections(e.sections),
            e != null && e.dailyCombo && this.setDailyCombo(e.dailyCombo),
            e)).catch(e=>{
                Fn.error({
                    title: ne().$i18n.t("messages.request_error"),
                    message: ne().$i18n.t("messages.no_upgrades")
                })
            }
            )
        },
        setDailyCombo(e) {
            const t = {
                ...this.dailyCombo
            };
            this.isDailyComboHasNewOpenedItems((e == null ? void 0 : e.upgradeIds) ?? [], (t == null ? void 0 : t.upgradeIds) ?? []) && !Dn().first_time_load && setTimeout(()=>{
                this.setDailyComboSuccess(!0)
            }
            , 200),
            this.dailyCombo = e,
            e.upgradeIds && (this.dailyCombo.upgradeIds = Array.from({
                length: this.dailyComboCount
            }, (n,r)=>{
                var o, i;
                return ((i = (o = this.dailyCombo) == null ? void 0 : o.upgradeIds) == null ? void 0 : i[r]) || null
            }
            )),
            e.remainSeconds && this.startDailyComboInterval(),
            this.getDailyComboNotClaimed && !Dn().first_time_load && (st().trackEvent(wg.DAILY_COMBO_FOUND_3),
            setTimeout(()=>{
                const {$event: n} = ne();
                n("daily-combo:claim")
            }
            , 1e3))
        },
        isDailyComboHasNewOpenedItems(e, t) {
            if (!Array.isArray(t) || t.length === 0)
                return st().compareWithEmptyOldArray(e, this.dailyComboCount);
            const n = e.filter(a=>a !== null).sort()
              , r = t.filter(a=>a !== null).sort();
            if (JSON.stringify(n) === JSON.stringify(r))
                return !1;
            const i = e.find(a=>a !== null && !t.filter(l=>l !== null).includes(a))
              , s = e.filter(a=>a !== null).length === this.dailyComboCount;
            return !!(i && !s)
        },
        setSections(e=[]) {
            e.length && (this.sections = e)
        },
        setUpgradesForBuy(e=[]) {
            e.length && (this.upgradesForBuy = e);
            let t = !1;
            if (this.upgradesForBuy.forEach(n=>{
                n.cooldownSeconds && n.totalCooldownSeconds && (t = !0,
                this.cooldowns[n.id] ? (this.cooldowns[n.id].cooldownSeconds = n.cooldownSeconds,
                this.cooldowns[n.id].totalCooldownSeconds = n.totalCooldownSeconds,
                this.cooldowns[n.id].timestamp = st().getNowTimestampWithMS()) : (this.cooldownAddUpgrade(n.id, n.cooldownSeconds, n.totalCooldownSeconds),
                this.cooldownStartTimer(n.id)))
            }
            ),
            t) {
                const {$event: n} = ne();
                n("upgrade:update-timers")
            }
        },
        resetDailyComboInterval() {
            this.dailyComboInterval && clearInterval(this.dailyComboInterval),
            this.dailyComboInterval = null
        },
        startDailyComboInterval() {
            this.resetDailyComboInterval(),
            this.dailyComboInterval = mn(()=>{
                var e;
                (e = this.dailyCombo) != null && e.remainSeconds && (this.dailyCombo.remainSeconds -= 1,
                this.dailyCombo.remainSeconds <= 0 && (this.dailyCombo.remainSeconds = 0,
                this.resetDailyComboInterval(),
                setTimeout(()=>{
                    this.postUpgradesForBuy()
                }
                )))
            }
            , 1e3)
        },
        setDailyComboSuccess(e) {
            this.dailyComboSuccess = e
        },
        setMyUpgrades(e) {
            this.myUpgrades = e
        },
        isMyUpgrade(e) {
            var t;
            return (((t = this.myUpgrades[e]) == null ? void 0 : t.level) ?? 0) > 0
        }
    },
    getters: {
        getDailyComboNotClaimed() {
            var e, t;
            return !!this.dailyCombo && !(this.dailyCombo.isClaimed ?? !1) && ((e = this.dailyCombo.upgradeIds) == null ? void 0 : e.length) === this.dailyComboCount && !((t = this.dailyCombo.upgradeIds) != null && t.some(n=>n === null))
        },
        getDailyComboClaimed() {
            var e, t;
            return !!this.dailyCombo && (this.dailyCombo.isClaimed ?? !1) && ((e = this.dailyCombo.upgradeIds) == null ? void 0 : e.length) === this.dailyComboCount && !((t = this.dailyCombo.upgradeIds) != null && t.some(n=>n === null))
        }
    }
})
  , Dn = qr("clicker", {
    state: ()=>({
        animate_interval: null,
        availableTaps: null,
        balanceCoins: null,
        balanceTarget: null,
        coinsToLevelUp: 0,
        currentExchange: null,
        dtServer: 0,
        earnPassivePerHour: null,
        earnPassivePerSec: null,
        earnPerTap: null,
        exchangeId: null,
        exchangeRefLinks: {},
        first_time_load: !1,
        id: null,
        lastPassiveEarn: 0,
        lastSyncUpdate: null,
        level: null,
        maxTaps: null,
        nickname: null,
        referral: null,
        stop: !1,
        sync_tap_timeout: null,
        tapDuration: 0,
        tap_interval: null,
        tapsRecoverPerSec: null,
        timer_energy: null,
        timer_leveUp: null,
        timer_passive: null,
        timer_sync: null,
        timestamp_energy: 0,
        timestamp_passive: 0,
        totalCoins: 0
    }),
    actions: {
        addBalance(e) {
            const r = (_e(this.balanceCoins) ?? 0) + e
              , o = e / 50
              , i = Math.floor(800 / e * o);
            let s = mn(()=>{
                this.balanceCoins += o,
                this.balanceCoins >= r && (this.balanceCoins = r,
                clearInterval(s),
                s = null)
            }
            , i)
        },
        animateBalance() {
            this.balanceCoins < this.balanceTarget && (this.animate_interval = mn(()=>{
                if (this.balanceCoins >= this.balanceTarget) {
                    clearInterval(this.animate_interval),
                    this.animate_interval = null;
                    return
                }
                this.balanceCoins++
            }
            , Bt.BALANCE_ANIMATION_SPEED)),
            this.balanceTarget < this.balanceCoins && (this.animate_interval = mn(()=>{
                if (this.balanceTarget >= this.balanceCoins) {
                    clearInterval(this.animate_interval),
                    this.animate_interval = null;
                    return
                }
                this.balanceCoins--
            }
            , Bt.BALANCE_ANIMATION_SPEED))
        },
        calcEnergy() {
            let e = 1;
            const t = st().getNowTimestamp();
            this.timestamp_energy && t - this.timestamp_energy > 1 && (e = t - this.timestamp_energy);
            const n = Math.min(this.availableTaps + e * this.tapsRecoverPerSec, this.maxTaps);
            this.setAvailableTaps(n),
            this.timestamp_energy = t
        },
        calcPassive() {
            if (Pn().maxPassiveDtSeconds_local <= (Pn().maxPassiveDtSeconds ?? 28800)) {
                let e = 1;
                const t = st().getNowTimestamp();
                this.timestamp_passive && t - this.timestamp_passive > 1 && (e = t - this.timestamp_passive);
                const n = this.earnPassivePerSec ?? 0;
                this.totalCoins = this.totalCoins + e * n,
                this.balanceCoins = this.balanceCoins + e * n,
                Pn().maxPassiveDtSeconds_local += e,
                this.timestamp_passive = t
            }
        },
        checkLevelUp() {
            this.coinsToLevelUp && this.coinsToLevelUp <= this.balanceCoins && this.timer_leveUp !== null && !Ko().loading && (this.setStop(!0),
            this.timerLevelUpReset(),
            cs().notificationLevelUp = Fn.promise({
                title: ne().$i18n.t("messages.level_up_processing")
            }),
            this.earnStartInterval())
        },
        earn() {
            this.animate_interval !== null && (clearInterval(this.animate_interval),
            this.animate_interval = null,
            this.balanceCoins = this.balanceTarget),
            this.tap_interval === null && (this.tap_interval = mn(()=>{
                this.tapDuration += 1
            }
            , 1e3)),
            this.balanceTarget = this.balanceCoins + this.earnPerTap,
            this.animateBalance(),
            this.storageSyncTapsAdd(1),
            this.sync_tap_timeout !== null && (clearTimeout(this.sync_tap_timeout),
            this.sync_tap_timeout = null),
            this.availableTaps = Math.max(0, this.availableTaps - this.earnPerTap),
            this.sync_tap_timeout = setTimeout(()=>{
                this.earnStartInterval()
            }
            , Bt.TAP_INTERVAL)
        },
        async earnStartInterval() {
            ne().$config.public.appEnv !== "production" && console.log(`Tap duration: ${this.tapDuration},
              taps: ${this.storageSyncTapsGet()},
              energy lost: ${this.storageSyncTapsGet() * this.earnPerTap},
              energy filled: ${this.tapsRecoverPerSec * this.tapDuration}
              current energy: ${this.availableTaps}
              lastSyncUpdate: ${this.lastSyncUpdate}
              current timestamp: ${st().getNowTimestamp()}
              timestamp dt: ${st().getNowTimestamp() - this.lastSyncUpdate}
            `),
            await this.postTap(this.storageSyncTapsGet()),
            clearTimeout(this.sync_tap_timeout),
            this.sync_tap_timeout = null,
            this.tapDuration = 0,
            clearInterval(this.tap_interval),
            this.tap_interval = null
        },
        getHamsterImageByLevel(e=1) {
            return `/images/hamster/${e > 9 ? 9 : e}.png?v=1`
        },
        async postExchangeReferralStat(e=0) {
            return await At.post("/clicker/exchangeRefLink-stat", {
                body: {
                    offset: e
                }
            })
        },
        async postSendReferralLink() {
            return await At.post("/clicker/send-referral-link-to-bot", {})
        },
        async postSync() {
            return await At.post("/clicker/sync", {}).then(e=>(this.setUserResponseData(e),
            e))
        },
        async postTap(e, t=!1) {
            const n = localStorage.getItem(tt.SYNC_TIMESTAMP_TAPS)
              , r = localStorage.getItem(tt.SYNC_AVAILABLE_TAPS);
            return await At.post("/clicker/tap", {
                body: {
                    count: e,
                    availableTaps: t ? r ? Number(r) : 2e3 : this.availableTaps,
                    timestamp: t && n ? Number(n) : st().getNowTimestamp()
                }
            }).then(o=>{
                this.sync_tap_timeout = null,
                this.setUserResponseData(o),
                this.storageSyncTapsSubtract(e);
                const i = st().getNowTimestamp() - this.lastSyncUpdate;
                return i > 1 && (this.availableTaps = Math.min(this.maxTaps, this.availableTaps + this.earnPerTap * i)),
                this.timer_leveUp || this.timerLevelUpStart(),
                o
            }
            ).catch(o=>{
                Fn.error({
                    title: ne().$i18n.t("messages.request_error"),
                    message: ne().$i18n.t("messages.no_tap")
                }),
                cs().rejectNotificationLevelUp()
            }
            )
        },
        async postUserExchangeId(e) {
            return await At.post("/clicker/select-exchange", {
                body: {
                    exchangeId: e
                }
            }).then(t=>(this.setUserResponseData(t),
            t))
        },
        async postUserClaimDailyCombo(e) {
            return await At.post("/clicker/claim-daily-combo", {}).then(t=>(this.setUserResponseData(t),
            t))
        },
        setAvailableTaps(e) {
            this.availableTaps = e,
            localStorage.setItem(tt.SYNC_AVAILABLE_TAPS, String(e))
        },
        setBalanceCoins(e) {
            this.balanceCoins = e
        },
        setCurrentExchange(e) {
            this.currentExchange = e
        },
        setEarnPassivePerHour(e) {
            this.earnPassivePerHour = e
        },
        setEarnPassivePerSec(e) {
            this.earnPassivePerSec = e
        },
        setEarnPerTap(e) {
            this.earnPerTap = e
        },
        setExchangeId(e) {
            var t;
            if (this.exchangeId = e,
            e) {
                const n = (t = Pn().exchanges) == null ? void 0 : t.find(r=>r.id === e);
                n && this.setCurrentExchange(n)
            }
        },
        setExchangeRefLinks(e={}) {
            this.exchangeRefLinks = e
        },
        setFirstTimeLoad(e) {
            this.first_time_load = e
        },
        setId(e) {
            this.id = e
        },
        setLastPassiveEarn(e) {
            this.lastPassiveEarn = e
        },
        setLastSyncUpdate(e) {
            this.lastSyncUpdate = e,
            this.dtServer = Math.floor(new Date().getTime() / 1e3) - e,
            Pn().maxPassiveDtSeconds_local = 0
        },
        setLevel(e) {
            var t, n;
            this.level = e,
            this.coinsToLevelUp = (n = (t = Pn().userLevels_balanceCoins) == null ? void 0 : t.find(r=>r.level === this.level)) == null ? void 0 : n.coinsToLeveUp
        },
        setMaxTaps(e) {
            this.maxTaps = e
        },
        setNickname(e) {
            this.nickname = e
        },
        setReferral(e) {
            this.referral = e
        },
        setStop(e) {
            this.stop = e
        },
        setTapsRecoverPerSec(e) {
            this.tapsRecoverPerSec = e
        },
        setTotalCoins(e) {
            this.totalCoins = e
        },
        setUserResponseData(e) {
            var t, n, r, o, i, s, a, l, c, u, f, d, m, _, b, w, g, E, p;
            if ((t = e == null ? void 0 : e.clickerUser) != null && t.id && this.setId(e.clickerUser.id),
            (n = e == null ? void 0 : e.clickerUser) != null && n.totalCoins && this.setTotalCoins(e.clickerUser.totalCoins),
            (r = e == null ? void 0 : e.clickerUser) != null && r.balanceCoins && (this.first_time_load ? (o = e == null ? void 0 : e.clickerUser) != null && o.lastPassiveEarn && ((i = e == null ? void 0 : e.clickerUser) == null ? void 0 : i.lastPassiveEarn) > 1 ? (this.setBalanceCoins(e.clickerUser.balanceCoins - e.clickerUser.lastPassiveEarn),
            this.setLastPassiveEarn(e.clickerUser.lastPassiveEarn)) : this.setBalanceCoins(e.clickerUser.balanceCoins) : Ko().loading || this.setBalanceCoins(e.clickerUser.balanceCoins)),
            Number.isFinite((s = e == null ? void 0 : e.clickerUser) == null ? void 0 : s.availableTaps) && this.setAvailableTaps(e.clickerUser.availableTaps),
            (a = e == null ? void 0 : e.clickerUser) != null && a.earnPerTap && this.setEarnPerTap(e.clickerUser.earnPerTap),
            (l = e == null ? void 0 : e.clickerUser) != null && l.earnPassivePerSec && this.setEarnPassivePerSec(e.clickerUser.earnPassivePerSec),
            (c = e == null ? void 0 : e.clickerUser) != null && c.earnPassivePerHour && this.setEarnPassivePerHour(e.clickerUser.earnPassivePerHour),
            (u = e == null ? void 0 : e.clickerUser) != null && u.tapsRecoverPerSec && this.setTapsRecoverPerSec(e.clickerUser.tapsRecoverPerSec),
            (f = e == null ? void 0 : e.clickerUser) != null && f.lastSyncUpdate && this.setLastSyncUpdate(e.clickerUser.lastSyncUpdate),
            (d = e == null ? void 0 : e.clickerUser) != null && d.exchangeId && this.setExchangeId(e.clickerUser.exchangeId),
            (m = e == null ? void 0 : e.clickerUser) != null && m.upgradesForBuy && rc().setUpgradesForBuy(e.clickerUser.upgradesForBuy),
            (_ = e == null ? void 0 : e.clickerUser) != null && _.upgrades && rc().setMyUpgrades(e.clickerUser.upgrades),
            (b = e == null ? void 0 : e.clickerUser) != null && b.maxTaps && this.setMaxTaps(e.clickerUser.maxTaps),
            (w = e == null ? void 0 : e.clickerUser) != null && w.referral && this.setReferral(e.clickerUser.referral),
            (g = e == null ? void 0 : e.clickerUser) != null && g.level) {
                const y = (E = e == null ? void 0 : e.clickerUser) == null ? void 0 : E.level;
                if (this.level && this.level < y) {
                    const {$event: S} = ne();
                    S("level-up:success")
                }
                setTimeout(()=>{
                    this.setLevel(y)
                }
                , 50)
            }
            (p = e == null ? void 0 : e.clickerUser) != null && p.exchangeRefLinks && this.setExchangeRefLinks(e.clickerUser.exchangeRefLinks)
        },
        startTimers() {
            Ko().error || (this.timerEnergyStart(),
            this.timerLevelUpStart(),
            this.timerPassiveStart(),
            this.timerSyncStart())
        },
        storageSyncTapsAdd(e) {
            const t = localStorage.getItem(tt.SYNC_TAPS)
              , n = t ? parseInt(t) ?? 0 : 0;
            localStorage.setItem(tt.SYNC_TAPS, String(n + e)),
            localStorage.setItem(tt.SYNC_TIMESTAMP_TAPS, String(st().getNowTimestamp()))
        },
        storageSyncTapsGet() {
            const e = localStorage.getItem(tt.SYNC_TAPS);
            return e ? parseInt(e) ?? 0 : 0
        },
        storageSyncTapsReset() {
            localStorage.removeItem(tt.SYNC_TAPS)
        },
        storageSyncTapsSet(e) {
            localStorage.setItem(tt.SYNC_TAPS, String(e))
        },
        storageSyncTapsSubtract(e) {
            const t = localStorage.getItem(tt.SYNC_TAPS)
              , n = t ? parseInt(t) ?? 0 : 0;
            localStorage.setItem(tt.SYNC_TAPS, String(Math.max(0, n - e)))
        },
        timerEnergyReset() {
            this.timer_energy && clearInterval(this.timer_energy),
            this.timer_energy = null
        },
        timerEnergyStart() {
            this.timer_energy = mn(this.calcEnergy, Bt.CALC_INTERVAL)
        },
        timerLevelUpReset() {
            this.timer_leveUp && clearInterval(this.timer_leveUp),
            this.timer_leveUp = null
        },
        timerLevelUpStart() {
            this.level !== this.getMaxUserLevel && this.timer_leveUp === null && (this.timer_leveUp = mn(this.checkLevelUp, Bt.CALC_INTERVAL))
        },
        timerPassiveReset() {
            this.timer_passive && clearInterval(this.timer_passive),
            this.timer_passive = null
        },
        timerPassiveStart() {
            this.timer_passive = mn(this.calcPassive, Bt.CALC_INTERVAL)
        },
        timerSyncReset() {
            this.timer_sync && clearInterval(this.timer_sync),
            this.timer_sync = null
        },
        timerSyncStart() {
            this.timer_sync = mn(()=>{
                this.postSync().catch(e=>{
                    Fn.error({
                        title: ne().$i18n.t("messages.request_error"),
                        message: ne().$i18n.t("messages.no_sync")
                    }),
                    cs().rejectNotificationLevelUp()
                }
                )
            }
            , Bt.SYNC_INTERVAL)
        },
        getCoinsToLevelUpByLevel(e) {
            var t, n;
            return ((n = (t = Pn().userLevels_balanceCoins) == null ? void 0 : t.find(r=>r.level === e)) == null ? void 0 : n.coinsToLeveUp) ?? 0
        }
    },
    getters: {
        getHamsterImage() {
            return `/images/hamster/${(this.level ?? 1) > 9 ? 9 : this.level ?? 1}.png?v=1`
        },
        getMaxUserLevel() {
            let e = 0;
            for (const t of Pn().userLevels_balanceCoins)
                t.level !== null && (e = Math.max(e, t.level));
            return e
        },
        getProgressLevel() {
            var n;
            let e = 0;
            const t = (n = Pn().userLevels_balanceCoins) == null ? void 0 : n.find(r=>r.level === this.level);
            return this.level === this.getMaxUserLevel && (e = 100),
            this.level && this.level !== this.getMaxUserLevel && t && (e = this.balanceCoins * 100 / t.coinsToLeveUp),
            Math.min(e, 100)
        },
        getUserBalanceFormatted() {
            return st().numberFormat(this.balanceCoins, !1)
        }
    }
});
window.rc = rc
window.Dn = Dn
class No extends Error {
}
No.prototype.name = "InvalidTokenError";
function _L(e) {
    return decodeURIComponent(atob(e).replace(/(.)/g, (t,n)=>{
        let r = n.charCodeAt(0).toString(16).toUpperCase();
        return r.length < 2 && (r = "0" + r),
        "%" + r
    }
    ))
}
function bL(e) {
    let t = e.replace(/-/g, "+").replace(/_/g, "/");
    switch (t.length % 4) {
    case 0:
        break;
    case 2:
        t += "==";
        break;
    case 3:
        t += "=";
        break;
    default:
        throw new Error("base64 string is not of the correct length")
    }
    try {
        return _L(t)
    } catch {
        return atob(t)
    }
}
function eh(e, t) {
    if (typeof e != "string")
        throw new No("Invalid token specified: must be a string");
    t || (t = {});
    const n = t.header === !0 ? 0 : 1
      , r = e.split(".")[n];
    if (typeof r != "string")
        throw new No(`Invalid token specified: missing part #${n + 1}`);
    let o;
    try {
        o = bL(r)
    } catch (i) {
        throw new No(`Invalid token specified: invalid base64 for part #${n + 1} (${i.message})`)
    }
    try {
        return JSON.parse(o)
    } catch (i) {
        throw new No(`Invalid token specified: invalid json for part #${n + 1} (${i.message})`)
    }
}
const Ko = qr("auth", {
    state: ()=>({
        token: localStorage.getItem(tt.AUTH_TOKEN) ?? null,
        authenticated: !1,
        error: !1,
        is_telegram: !1,
        loading: !0,
        redirect: "/",
        refresh: !1,
        telegram_user: {},
        telegram_hash: "",
        telegram_platform: "",
        telegram_version: "",
        start_param: new Map,
        opened_by_miniapp: !1
    }),
    actions: {
        async check() {
            this.authenticated = !!localStorage.getItem(tt.AUTH_TOKEN)
        },
        composeUsername() {
            let e = this.telegram_user.firstName;
            this.telegram_user.lastName && e && (e = `${e} ${this.telegram_user.lastName}`),
            !e && this.telegram_user.username && (e = this.telegram_user.username),
            e || (e = "User"),
            Dn().setNickname(e)
        },
        getMyAvatar(e=0, t=160) {
            var o, i;
            const n = {
                160: 0,
                320: 1,
                640: 1
            }
              , r = (i = (o = this.telegram_user.photos) == null ? void 0 : o[e]) == null ? void 0 : i[n[t]];
            return r && `${ne().$config.public.cdnUrl}/${r.fileUniqueId}.jpg`
        },
        isExpiredToken(e) {
            if (e && eh(e)) {
                const t = eh(e).exp;
                return new Date().getTime() > t * 1e3
            }
            return !1
        },
        logout(e=!0) {
            this.authenticated = !1,
            this.token = null,
            localStorage.removeItem(tt.AUTH_TOKEN),
            localStorage.removeItem(tt.SYNC_AVAILABLE_TAPS),
            localStorage.removeItem(tt.SYNC_TIMESTAMP_TAPS),
            localStorage.removeItem(tt.SYNC_TAPS),
            localStorage.removeItem(tt.EARN_TASKS),
            localStorage.removeItem(tt.SETTINGS),
            e && (Ci(Pi.GAME_INDEX),
            setTimeout(()=>{
                window.location.reload()
            }
            , 500))
        },
        async postGetMe() {
            return await At.post("/auth/me-telegram", {}).then(e=>(e.telegramUser && (this.setTelegramUser(e.telegramUser),
            this.composeUsername()),
            e))
        },
        async postLogin(e) {
            return await At.post("/auth/auth-by-telegram-webapp", {
                body: e
            }).then(t=>{
                if (t.authToken) {
                    const n = t.authToken;
                    localStorage.setItem(tt.AUTH_TOKEN, n),
                    this.setToken(n)
                }
                return t
            }
            )
        },
        async postAddReferral(e) {
            return await At.post("/clicker/add-referral", {
                body: {
                    friendUserId: e
                }
            }).then(t=>t)
        },
        setAuthenticated(e) {
            this.authenticated = e
        },
        setError(e) {
            this.error = e
        },
        setLoading(e) {
            this.loading = e
        },
        setRedirect(e="/") {
            this.redirect = e
        },
        setRefresh(e) {
            this.refresh = e
        },
        setTelegram(e) {
            this.is_telegram = e
        },
        setTelegramUser(e) {
            this.telegram_user = e
        },
        setToken(e) {
            this.token = e
        },
        setStartParam(e) {
            this.start_param = e
        },
        parseParameters(e) {
            const t = new Map;
            return e.split("__").forEach(r=>{
                const o = r.match(/[a-zA-Z]+|[0-9]+/g);
                if (o && o.length === 2) {
                    const [i,s] = o;
                    t.set(i, s)
                }
            }
            ),
            t
        }
    },
    getters: {}
})
  , EL = async(e,t)=>{
    var o, i;
    const n = ne();
    Ko(n.$pinia);
    const r = Dn(n.$pinia);
    e && !((i = (o = e.name) == null ? void 0 : o.toString()) != null && i.includes("index")) && !r.exchangeId && Ci(Pi.GAME_SETTINGS_EXCHANGE)
}
  , SL = async e=>{
    let t, n;
    const r = ([t,n] = _n(()=>Om(e.path)),
    t = await t,
    n(),
    t);
    if (r.redirect)
        return r.redirect
}
  , wL = [Dw, EL, SL]
  , qo = {};
function TL(e, t, n) {
    const {pathname: r, search: o, hash: i} = t
      , s = e.indexOf("#");
    if (s > -1) {
        const c = i.includes(e.slice(s)) ? e.slice(s).length : 1;
        let u = i.slice(c);
        return u[0] !== "/" && (u = "/" + u),
        Tf(u, "")
    }
    const a = Tf(r, e)
      , l = !n || Tl(a, n, {
        trailingSlash: !0
    }) ? a : n;
    return l + (l.includes("?") ? "" : o) + i
}
const kL = Et({
    name: "nuxt:router",
    enforce: "pre",
    async setup(e) {
        var b, w;
        let t, n, r = Ln().app.baseURL;
        Dt.hashMode && !r.includes("#") && (r += "#");
        const o = ((b = Dt.history) == null ? void 0 : b.call(Dt, r)) ?? (Dt.hashMode ? rw(r) : Vm(r))
          , i = ((w = Dt.routes) == null ? void 0 : w.call(Dt, id)) ?? id;
        let s;
        const a = TL(r, window.location, e.payload.path)
          , l = Lw({
            ...Dt,
            scrollBehavior: (g,E,p)=>{
                if (E === Zt) {
                    s = p;
                    return
                }
                if (Dt.scrollBehavior) {
                    if (l.options.scrollBehavior = Dt.scrollBehavior,
                    "scrollRestoration"in window.history) {
                        const y = l.beforeEach(()=>{
                            y(),
                            window.history.scrollRestoration = "manual"
                        }
                        )
                    }
                    return Dt.scrollBehavior(g, Zt, s || p)
                }
            }
            ,
            history: o,
            routes: i
        });
        "scrollRestoration"in window.history && (window.history.scrollRestoration = "auto"),
        e.vueApp.use(l);
        const c = on(l.currentRoute.value);
        l.afterEach((g,E)=>{
            c.value = E
        }
        ),
        Object.defineProperty(e.vueApp.config.globalProperties, "previousRoute", {
            get: ()=>c.value
        });
        const u = on(l.resolve(a))
          , f = ()=>{
            u.value = l.currentRoute.value
        }
        ;
        e.hook("page:finish", f),
        l.afterEach((g,E)=>{
            var p, y, S, T;
            ((y = (p = g.matched[0]) == null ? void 0 : p.components) == null ? void 0 : y.default) === ((T = (S = E.matched[0]) == null ? void 0 : S.components) == null ? void 0 : T.default) && f()
        }
        );
        const d = {};
        for (const g in u.value)
            Object.defineProperty(d, g, {
                get: ()=>u.value[g]
            });
        e._route = So(d),
        e._middleware = e._middleware || {
            global: [],
            named: {}
        };
        const m = ta();
        try {
            [t,n] = _n(()=>l.isReady()),
            await t,
            n()
        } catch (g) {
            [t,n] = _n(()=>e.runWithContext(()=>Zr(g))),
            await t,
            n()
        }
        const _ = e.payload.state._layout;
        return l.beforeEach(async(g,E)=>{
            var p;
            await e.callHook("page:loading:start"),
            g.meta = yt(g.meta),
            e.isHydrating && _ && !xr(g.meta.layout) && (g.meta.layout = _),
            e._processingMiddleware = !0;
            {
                const y = new Set([...wL, ...e._middleware.global]);
                for (const S of g.matched) {
                    const T = S.meta.middleware;
                    if (T)
                        for (const A of ru(T))
                            y.add(A)
                }
                for (const S of y) {
                    const T = typeof S == "string" ? e._middleware.named[S] || await ((p = qo[S]) == null ? void 0 : p.call(qo).then(L=>L.default || L)) : S;
                    if (!T)
                        throw new Error(`Unknown route middleware: '${S}'.`);
                    const A = await e.runWithContext(()=>T(g, E));
                    if (!e.payload.serverRendered && e.isHydrating && (A === !1 || A instanceof Error)) {
                        const L = A || Rl({
                            statusCode: 404,
                            statusMessage: `Page Not Found: ${a}`
                        });
                        return await e.runWithContext(()=>Zr(L)),
                        !1
                    }
                    if (A !== !0 && (A || A === !1))
                        return A
                }
            }
        }
        ),
        l.onError(async()=>{
            delete e._processingMiddleware,
            await e.callHook("page:loading:end")
        }
        ),
        l.afterEach(async(g,E,p)=>{
            delete e._processingMiddleware,
            !e.isHydrating && m.value && await e.runWithContext(hE),
            p && await e.callHook("page:loading:end"),
            g.matched.length === 0 && await e.runWithContext(()=>Zr(Rl({
                statusCode: 404,
                fatal: !1,
                statusMessage: `Page not found: ${g.fullPath}`,
                data: {
                    path: g.fullPath
                }
            })))
        }
        ),
        e.hooks.hookOnce("app:created", async()=>{
            try {
                const g = l.resolve(a);
                "name"in g && (g.name = void 0),
                await l.replace({
                    ...g,
                    force: !0
                }),
                l.options.scrollBehavior = Dt.scrollBehavior
            } catch (g) {
                await e.runWithContext(()=>Zr(g))
            }
        }
        ),
        {
            provide: {
                router: l
            }
        }
    }
})
  , oc = globalThis.requestIdleCallback || (e=>{
    const t = Date.now()
      , n = {
        didTimeout: !1,
        timeRemaining: ()=>Math.max(0, 50 - (Date.now() - t))
    };
    return setTimeout(()=>{
        e(n)
    }
    , 1)
}
)
  , AL = globalThis.cancelIdleCallback || (e=>{
    clearTimeout(e)
}
)
  , vu = e=>{
    const t = ne();
    t.isHydrating ? t.hooks.hookOnce("app:suspense:resolve", ()=>{
        oc(e)
    }
    ) : oc(e)
}
  , LL = Et({
    name: "nuxt:payload",
    setup(e) {
        Mt().beforeResolve(async(t,n)=>{
            if (t.path === n.path)
                return;
            const r = await Bf(t.path);
            r && Object.assign(e.static.data, r.data)
        }
        ),
        vu(()=>{
            var t;
            e.hooks.hook("link:prefetch", async n=>{
                Ai(n).protocol || await Bf(n)
            }
            ),
            ((t = navigator.connection) == null ? void 0 : t.effectiveType) !== "slow-2g" && setTimeout(ra, 1e3)
        }
        )
    }
})
  , CL = Et(e=>{
    let t;
    async function n() {
        const r = await ra();
        t && clearTimeout(t),
        t = setTimeout(n, 1e3 * 60 * 60);
        const o = await $fetch(Gc("builds/latest.json") + `?${Date.now()}`);
        o.id !== r.id && e.hooks.callHook("app:manifest:update", o)
    }
    vu(()=>{
        t = setTimeout(n, 1e3 * 60 * 60)
    }
    )
}
);
async function Dg(e, t=Mt()) {
    const {path: n, matched: r} = t.resolve(e);
    if (!r.length || (t._routePreloaded || (t._routePreloaded = new Set),
    t._routePreloaded.has(n)))
        return;
    const o = t._preloadPromises = t._preloadPromises || [];
    if (o.length > 4)
        return Promise.all(o).then(()=>Dg(e, t));
    t._routePreloaded.add(n);
    const i = r.map(s=>{
        var a;
        return (a = s.components) == null ? void 0 : a.default
    }
    ).filter(s=>typeof s == "function");
    for (const s of i) {
        const a = Promise.resolve(s()).catch(()=>{}
        ).finally(()=>o.splice(o.indexOf(a)));
        o.push(a)
    }
    await Promise.all(o)
}
function OL(e={}) {
    const t = e.path || window.location.pathname;
    let n = {};
    try {
        n = si(sessionStorage.getItem("nuxt:reload") || "{}")
    } catch {}
    if (e.force || (n == null ? void 0 : n.path) !== t || (n == null ? void 0 : n.expires) < Date.now()) {
        try {
            sessionStorage.setItem("nuxt:reload", JSON.stringify({
                path: t,
                expires: Date.now() + (e.ttl ?? 1e4)
            }))
        } catch {}
        if (e.persistState)
            try {
                sessionStorage.setItem("nuxt:reload:state", JSON.stringify({
                    state: ne().payload.state
                }))
            } catch {}
        window.location.pathname !== t ? window.location.href = t : window.location.reload()
    }
}
const RL = (...e)=>e.find(t=>t !== void 0);
function xg(e) {
    const t = e.componentName || "NuxtLink";
    function n(r, o) {
        if (!r || e.trailingSlash !== "append" && e.trailingSlash !== "remove")
            return r;
        if (typeof r == "string")
            return th(r, e.trailingSlash);
        const i = "path"in r && r.path !== void 0 ? r.path : o(r).path
          , s = {
            ...r,
            path: th(i, e.trailingSlash)
        };
        return "name"in s && delete s.name,
        s
    }
    return Te({
        name: t,
        props: {
            to: {
                type: [String, Object],
                default: void 0,
                required: !1
            },
            href: {
                type: [String, Object],
                default: void 0,
                required: !1
            },
            target: {
                type: String,
                default: void 0,
                required: !1
            },
            rel: {
                type: String,
                default: void 0,
                required: !1
            },
            noRel: {
                type: Boolean,
                default: void 0,
                required: !1
            },
            prefetch: {
                type: Boolean,
                default: void 0,
                required: !1
            },
            noPrefetch: {
                type: Boolean,
                default: void 0,
                required: !1
            },
            activeClass: {
                type: String,
                default: void 0,
                required: !1
            },
            exactActiveClass: {
                type: String,
                default: void 0,
                required: !1
            },
            prefetchedClass: {
                type: String,
                default: void 0,
                required: !1
            },
            replace: {
                type: Boolean,
                default: void 0,
                required: !1
            },
            ariaCurrentValue: {
                type: String,
                default: void 0,
                required: !1
            },
            external: {
                type: Boolean,
                default: void 0,
                required: !1
            },
            custom: {
                type: Boolean,
                default: void 0,
                required: !1
            }
        },
        setup(r, {slots: o}) {
            const i = Mt()
              , s = Ln()
              , a = le(()=>{
                const _ = r.to || r.href || "";
                return n(_, i.resolve)
            }
            )
              , l = le(()=>typeof a.value == "string" && An(a.value, {
                acceptRelative: !0
            }))
              , c = le(()=>r.target && r.target !== "_self")
              , u = le(()=>r.external || c.value ? !0 : typeof a.value == "object" ? !1 : a.value === "" || l.value)
              , f = ye(!1)
              , d = ye(null)
              , m = _=>{
                var b;
                d.value = r.custom ? (b = _ == null ? void 0 : _.$el) == null ? void 0 : b.nextElementSibling : _ == null ? void 0 : _.$el
            }
            ;
            if (r.prefetch !== !1 && r.noPrefetch !== !0 && r.target !== "_blank" && !IL()) {
                const b = ne();
                let w, g = null;
                Xt(()=>{
                    const E = PL();
                    vu(()=>{
                        w = oc(()=>{
                            var p;
                            (p = d == null ? void 0 : d.value) != null && p.tagName && (g = E.observe(d.value, async()=>{
                                g == null || g(),
                                g = null;
                                const y = typeof a.value == "string" ? a.value : i.resolve(a.value).fullPath;
                                await Promise.all([b.hooks.callHook("link:prefetch", y).catch(()=>{}
                                ), !u.value && Dg(a.value, i).catch(()=>{}
                                )]),
                                f.value = !0
                            }
                            ))
                        }
                        )
                    }
                    )
                }
                ),
                ln(()=>{
                    w && AL(w),
                    g == null || g(),
                    g = null
                }
                )
            }
            return ()=>{
                var g, E;
                if (!u.value) {
                    const p = {
                        ref: m,
                        to: a.value,
                        activeClass: r.activeClass || e.activeClass,
                        exactActiveClass: r.exactActiveClass || e.exactActiveClass,
                        replace: r.replace,
                        ariaCurrentValue: r.ariaCurrentValue,
                        custom: r.custom
                    };
                    return r.custom || (f.value && (p.class = r.prefetchedClass || e.prefetchedClass),
                    p.rel = r.rel || void 0),
                    ot(Fr("RouterLink"), p, o.default)
                }
                const _ = typeof a.value == "object" ? ((g = i.resolve(a.value)) == null ? void 0 : g.href) ?? null : a.value && !r.external && !l.value ? n(wo(s.app.baseURL, a.value), i.resolve) : a.value || null
                  , b = r.target || null
                  , w = RL(r.noRel ? "" : r.rel, e.externalRelAttribute, l.value || c.value ? "noopener noreferrer" : "") || null;
                if (r.custom) {
                    if (!o.default)
                        return null;
                    const p = ()=>Ci(_, {
                        replace: r.replace,
                        external: r.external
                    });
                    return o.default({
                        href: _,
                        navigate: p,
                        get route() {
                            if (!_)
                                return;
                            const y = Ai(_);
                            return {
                                path: y.pathname,
                                fullPath: y.pathname,
                                get query() {
                                    return zc(y.search)
                                },
                                hash: y.hash,
                                params: {},
                                name: void 0,
                                matched: [],
                                redirectedFrom: void 0,
                                meta: {},
                                href: _
                            }
                        },
                        rel: w,
                        target: b,
                        isExternal: u.value,
                        isActive: !1,
                        isExactActive: !1
                    })
                }
                return ot("a", {
                    ref: d,
                    href: _,
                    rel: w,
                    target: b
                }, (E = o.default) == null ? void 0 : E.call(o))
            }
        }
    })
}
const uM = xg(yS);
function th(e, t) {
    const n = t === "append" ? ii : ki;
    return An(e) && !e.startsWith("http") ? e : n(e, !0)
}
function PL() {
    const e = ne();
    if (e._observer)
        return e._observer;
    let t = null;
    const n = new Map
      , r = (i,s)=>(t || (t = new IntersectionObserver(a=>{
        for (const l of a) {
            const c = n.get(l.target);
            (l.isIntersecting || l.intersectionRatio > 0) && c && c()
        }
    }
    )),
    n.set(i, s),
    t.observe(i),
    ()=>{
        n.delete(i),
        t.unobserve(i),
        n.size === 0 && (t.disconnect(),
        t = null)
    }
    );
    return e._observer = {
        observe: r
    }
}
function IL() {
    const e = navigator.connection;
    return !!(e && (e.saveData || /2g/.test(e.effectiveType)))
}
const ML = Et(e=>{
    const t = eA();
    return e.vueApp.use(t),
    Ri(t),
    e.payload && e.payload.pinia && (t.state.value = e.payload.pinia),
    {
        provide: {
            pinia: t
        }
    }
}
)
  , NL = Et({
    name: "nuxt:global-components"
})
  , or = {
    default: ()=>C(()=>import("./default.OT0SLtLW.js"), __vite__mapDeps([22, 5, 9, 2, 13, 6, 14, 3]), import.meta.url).then(e=>e.default || e),
    main: ()=>C(()=>import("./main.Bn2sptAv.js"), __vite__mapDeps([]), import.meta.url).then(e=>e.default || e)
}
  , DL = Et({
    name: "nuxt:prefetch",
    setup(e) {
        const t = Mt();
        e.hooks.hook("app:mounted", ()=>{
            t.beforeEach(async n=>{
                var o;
                const r = (o = n == null ? void 0 : n.meta) == null ? void 0 : o.layout;
                r && typeof or[r] == "function" && await or[r]()
            }
            )
        }
        ),
        e.hooks.hook("link:prefetch", n=>{
            if (An(n))
                return;
            const r = t.resolve(n);
            if (!r)
                return;
            const o = r.meta.layout;
            let i = ru(r.meta.middleware);
            i = i.filter(s=>typeof s == "string");
            for (const s of i)
                typeof qo[s] == "function" && qo[s]();
            o && typeof or[o] == "function" && or[o]()
        }
        )
    }
});
class xL {
    constructor(t) {
        this.eventsQueue = [],
        this.fqbLoaded = !1,
        this.options = t,
        this.fbq = null,
        this.isEnabled = !t.disabled
    }
    setFbq(t) {
        this.fbq = t,
        this.fqbLoaded = !0,
        this.send()
    }
    setPixelId(t) {
        this.options.pixelId = t,
        this.init()
    }
    setUserData(t) {
        this.userData = t
    }
    enable() {
        this.isEnabled = !0,
        this.init(),
        this.track()
    }
    disable() {
        this.isEnabled = !1
    }
    init() {
        this.query("init", this.options.pixelId, this.userData || void 0)
    }
    track(t=null, n=null, r=null) {
        t || (t = this.options.track),
        r ? this.query("track", t, n, r) : this.query("track", t, n)
    }
    query(t, n, r=null, o=null) {
        this.options.debug && ic("Command:", t, "Option:", n, "Additional parameters:", r, "EventID:", o),
        this.isEnabled && (this.eventsQueue.push({
            cmd: t,
            option: n,
            parameters: r,
            eventID: o
        }),
        this.send())
    }
    send() {
        if (this.fqbLoaded)
            for (; this.eventsQueue.length; ) {
                let t = this.eventsQueue.shift();
                this.options.debug && ic("Send event: ", t),
                t.eventID ? this.fbq(t.cmd, t.option, t.parameters, t.eventID) : t.parameters ? this.fbq(t.cmd, t.option, t.parameters) : this.fbq(t.cmd, t.option)
            }
    }
}
function ic(...e) {
    console.info.apply(this, ["[@nuxtjs/meta-pixel]", ...e])
}
const FL = Et(e=>{
    const n = Ln().public.facebook
      , r = Mt()
      , o = n.dev && !n.debug;
    o && ic('You are running in development mode. Set "debug: true" in your nuxt.config.js if you would like to trigger tracking events in local.');
    const i = n
      , s = new xL(i);
    typeof window < "u" && ((a,l,c,u,f,d,m)=>{
        if (a.fbq)
            return;
        f = a.fbq = function() {
            f.callMethod ? f.callMethod.apply(f, arguments) : f.queue.push(arguments)
        }
        ,
        a._fbq || (a._fbq = f),
        f.push = f,
        f.loaded = !0,
        f.version = i.version,
        f.queue = [],
        d = l.createElement(c),
        d.async = !0,
        d.defer = !0,
        d.src = u,
        m = l.getElementsByTagName("body")[0],
        m.parentNode.appendChild(d, m);
        let _ = ()=>{
            s.setFbq(fbq),
            !o && !i.disabled && (i.manualMode && fbq("set", "autoConfig", !1, i.pixelId),
            fbq("init", i.pixelId),
            fbq("track", i.track))
        }
        ;
        d.readyState ? d.onreadystatechange = function() {
            (d.readyState === "loaded" || d.readyState === "complete") && (d.onreadystatechange = null,
            _())
        }
        : d.onload = _
    }
    )(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js"),
    r && r.afterEach(({path: a})=>{
        const l = n;
        l.pixelId !== s.options.pixelId && s.setPixelId(l.pixelId),
        n.autoPageView && s.track("PageView")
    }
    ),
    e.provide("fb", s)
}
);
var _t = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ko(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var Fg = {
    exports: {}
};
(function(e, t) {
    (function(n, r) {
        e.exports = r()
    }
    )(_t, function() {
        var n = 1e3
          , r = 6e4
          , o = 36e5
          , i = "millisecond"
          , s = "second"
          , a = "minute"
          , l = "hour"
          , c = "day"
          , u = "week"
          , f = "month"
          , d = "quarter"
          , m = "year"
          , _ = "date"
          , b = "Invalid Date"
          , w = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/
          , g = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g
          , E = {
            name: "en",
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            ordinal: function(Y) {
                var j = ["th", "st", "nd", "rd"]
                  , M = Y % 100;
                return "[" + Y + (j[(M - 20) % 10] || j[M] || j[0]) + "]"
            }
        }
          , p = function(Y, j, M) {
            var K = String(Y);
            return !K || K.length >= j ? Y : "" + Array(j + 1 - K.length).join(M) + Y
        }
          , y = {
            s: p,
            z: function(Y) {
                var j = -Y.utcOffset()
                  , M = Math.abs(j)
                  , K = Math.floor(M / 60)
                  , F = M % 60;
                return (j <= 0 ? "+" : "-") + p(K, 2, "0") + ":" + p(F, 2, "0")
            },
            m: function Y(j, M) {
                if (j.date() < M.date())
                    return -Y(M, j);
                var K = 12 * (M.year() - j.year()) + (M.month() - j.month())
                  , F = j.clone().add(K, f)
                  , se = M - F < 0
                  , H = j.clone().add(K + (se ? -1 : 1), f);
                return +(-(K + (M - F) / (se ? F - H : H - F)) || 0)
            },
            a: function(Y) {
                return Y < 0 ? Math.ceil(Y) || 0 : Math.floor(Y)
            },
            p: function(Y) {
                return {
                    M: f,
                    y: m,
                    w: u,
                    d: c,
                    D: _,
                    h: l,
                    m: a,
                    s,
                    ms: i,
                    Q: d
                }[Y] || String(Y || "").toLowerCase().replace(/s$/, "")
            },
            u: function(Y) {
                return Y === void 0
            }
        }
          , S = "en"
          , T = {};
        T[S] = E;
        var A = "$isDayjsObject"
          , L = function(Y) {
            return Y instanceof x || !(!Y || !Y[A])
        }
          , O = function Y(j, M, K) {
            var F;
            if (!j)
                return S;
            if (typeof j == "string") {
                var se = j.toLowerCase();
                T[se] && (F = se),
                M && (T[se] = M,
                F = se);
                var H = j.split("-");
                if (!F && H.length > 1)
                    return Y(H[0])
            } else {
                var ae = j.name;
                T[ae] = j,
                F = ae
            }
            return !K && F && (S = F),
            F || !K && S
        }
          , I = function(Y, j) {
            if (L(Y))
                return Y.clone();
            var M = typeof j == "object" ? j : {};
            return M.date = Y,
            M.args = arguments,
            new x(M)
        }
          , V = y;
        V.l = O,
        V.i = L,
        V.w = function(Y, j) {
            return I(Y, {
                locale: j.$L,
                utc: j.$u,
                x: j.$x,
                $offset: j.$offset
            })
        }
        ;
        var x = function() {
            function Y(M) {
                this.$L = O(M.locale, null, !0),
                this.parse(M),
                this.$x = this.$x || M.x || {},
                this[A] = !0
            }
            var j = Y.prototype;
            return j.parse = function(M) {
                this.$d = function(K) {
                    var F = K.date
                      , se = K.utc;
                    if (F === null)
                        return new Date(NaN);
                    if (V.u(F))
                        return new Date;
                    if (F instanceof Date)
                        return new Date(F);
                    if (typeof F == "string" && !/Z$/i.test(F)) {
                        var H = F.match(w);
                        if (H) {
                            var ae = H[2] - 1 || 0
                              , ge = (H[7] || "0").substring(0, 3);
                            return se ? new Date(Date.UTC(H[1], ae, H[3] || 1, H[4] || 0, H[5] || 0, H[6] || 0, ge)) : new Date(H[1],ae,H[3] || 1,H[4] || 0,H[5] || 0,H[6] || 0,ge)
                        }
                    }
                    return new Date(F)
                }(M),
                this.init()
            }
            ,
            j.init = function() {
                var M = this.$d;
                this.$y = M.getFullYear(),
                this.$M = M.getMonth(),
                this.$D = M.getDate(),
                this.$W = M.getDay(),
                this.$H = M.getHours(),
                this.$m = M.getMinutes(),
                this.$s = M.getSeconds(),
                this.$ms = M.getMilliseconds()
            }
            ,
            j.$utils = function() {
                return V
            }
            ,
            j.isValid = function() {
                return this.$d.toString() !== b
            }
            ,
            j.isSame = function(M, K) {
                var F = I(M);
                return this.startOf(K) <= F && F <= this.endOf(K)
            }
            ,
            j.isAfter = function(M, K) {
                return I(M) < this.startOf(K)
            }
            ,
            j.isBefore = function(M, K) {
                return this.endOf(K) < I(M)
            }
            ,
            j.$g = function(M, K, F) {
                return V.u(M) ? this[K] : this.set(F, M)
            }
            ,
            j.unix = function() {
                return Math.floor(this.valueOf() / 1e3)
            }
            ,
            j.valueOf = function() {
                return this.$d.getTime()
            }
            ,
            j.startOf = function(M, K) {
                var F = this
                  , se = !!V.u(K) || K
                  , H = V.p(M)
                  , ae = function(G, Z) {
                    var me = V.w(F.$u ? Date.UTC(F.$y, Z, G) : new Date(F.$y,Z,G), F);
                    return se ? me : me.endOf(c)
                }
                  , ge = function(G, Z) {
                    return V.w(F.toDate()[G].apply(F.toDate("s"), (se ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(Z)), F)
                }
                  , Ve = this.$W
                  , je = this.$M
                  , nt = this.$D
                  , Je = "set" + (this.$u ? "UTC" : "");
                switch (H) {
                case m:
                    return se ? ae(1, 0) : ae(31, 11);
                case f:
                    return se ? ae(1, je) : ae(0, je + 1);
                case u:
                    var B = this.$locale().weekStart || 0
                      , ee = (Ve < B ? Ve + 7 : Ve) - B;
                    return ae(se ? nt - ee : nt + (6 - ee), je);
                case c:
                case _:
                    return ge(Je + "Hours", 0);
                case l:
                    return ge(Je + "Minutes", 1);
                case a:
                    return ge(Je + "Seconds", 2);
                case s:
                    return ge(Je + "Milliseconds", 3);
                default:
                    return this.clone()
                }
            }
            ,
            j.endOf = function(M) {
                return this.startOf(M, !1)
            }
            ,
            j.$set = function(M, K) {
                var F, se = V.p(M), H = "set" + (this.$u ? "UTC" : ""), ae = (F = {},
                F[c] = H + "Date",
                F[_] = H + "Date",
                F[f] = H + "Month",
                F[m] = H + "FullYear",
                F[l] = H + "Hours",
                F[a] = H + "Minutes",
                F[s] = H + "Seconds",
                F[i] = H + "Milliseconds",
                F)[se], ge = se === c ? this.$D + (K - this.$W) : K;
                if (se === f || se === m) {
                    var Ve = this.clone().set(_, 1);
                    Ve.$d[ae](ge),
                    Ve.init(),
                    this.$d = Ve.set(_, Math.min(this.$D, Ve.daysInMonth())).$d
                } else
                    ae && this.$d[ae](ge);
                return this.init(),
                this
            }
            ,
            j.set = function(M, K) {
                return this.clone().$set(M, K)
            }
            ,
            j.get = function(M) {
                return this[V.p(M)]()
            }
            ,
            j.add = function(M, K) {
                var F, se = this;
                M = Number(M);
                var H = V.p(K)
                  , ae = function(je) {
                    var nt = I(se);
                    return V.w(nt.date(nt.date() + Math.round(je * M)), se)
                };
                if (H === f)
                    return this.set(f, this.$M + M);
                if (H === m)
                    return this.set(m, this.$y + M);
                if (H === c)
                    return ae(1);
                if (H === u)
                    return ae(7);
                var ge = (F = {},
                F[a] = r,
                F[l] = o,
                F[s] = n,
                F)[H] || 1
                  , Ve = this.$d.getTime() + M * ge;
                return V.w(Ve, this)
            }
            ,
            j.subtract = function(M, K) {
                return this.add(-1 * M, K)
            }
            ,
            j.format = function(M) {
                var K = this
                  , F = this.$locale();
                if (!this.isValid())
                    return F.invalidDate || b;
                var se = M || "YYYY-MM-DDTHH:mm:ssZ"
                  , H = V.z(this)
                  , ae = this.$H
                  , ge = this.$m
                  , Ve = this.$M
                  , je = F.weekdays
                  , nt = F.months
                  , Je = F.meridiem
                  , B = function(Z, me, Ee, h) {
                    return Z && (Z[me] || Z(K, se)) || Ee[me].slice(0, h)
                }
                  , ee = function(Z) {
                    return V.s(ae % 12 || 12, Z, "0")
                }
                  , G = Je || function(Z, me, Ee) {
                    var h = Z < 12 ? "AM" : "PM";
                    return Ee ? h.toLowerCase() : h
                }
                ;
                return se.replace(g, function(Z, me) {
                    return me || function(Ee) {
                        switch (Ee) {
                        case "YY":
                            return String(K.$y).slice(-2);
                        case "YYYY":
                            return V.s(K.$y, 4, "0");
                        case "M":
                            return Ve + 1;
                        case "MM":
                            return V.s(Ve + 1, 2, "0");
                        case "MMM":
                            return B(F.monthsShort, Ve, nt, 3);
                        case "MMMM":
                            return B(nt, Ve);
                        case "D":
                            return K.$D;
                        case "DD":
                            return V.s(K.$D, 2, "0");
                        case "d":
                            return String(K.$W);
                        case "dd":
                            return B(F.weekdaysMin, K.$W, je, 2);
                        case "ddd":
                            return B(F.weekdaysShort, K.$W, je, 3);
                        case "dddd":
                            return je[K.$W];
                        case "H":
                            return String(ae);
                        case "HH":
                            return V.s(ae, 2, "0");
                        case "h":
                            return ee(1);
                        case "hh":
                            return ee(2);
                        case "a":
                            return G(ae, ge, !0);
                        case "A":
                            return G(ae, ge, !1);
                        case "m":
                            return String(ge);
                        case "mm":
                            return V.s(ge, 2, "0");
                        case "s":
                            return String(K.$s);
                        case "ss":
                            return V.s(K.$s, 2, "0");
                        case "SSS":
                            return V.s(K.$ms, 3, "0");
                        case "Z":
                            return H
                        }
                        return null
                    }(Z) || H.replace(":", "")
                })
            }
            ,
            j.utcOffset = function() {
                return 15 * -Math.round(this.$d.getTimezoneOffset() / 15)
            }
            ,
            j.diff = function(M, K, F) {
                var se, H = this, ae = V.p(K), ge = I(M), Ve = (ge.utcOffset() - this.utcOffset()) * r, je = this - ge, nt = function() {
                    return V.m(H, ge)
                };
                switch (ae) {
                case m:
                    se = nt() / 12;
                    break;
                case f:
                    se = nt();
                    break;
                case d:
                    se = nt() / 3;
                    break;
                case u:
                    se = (je - Ve) / 6048e5;
                    break;
                case c:
                    se = (je - Ve) / 864e5;
                    break;
                case l:
                    se = je / o;
                    break;
                case a:
                    se = je / r;
                    break;
                case s:
                    se = je / n;
                    break;
                default:
                    se = je
                }
                return F ? se : V.a(se)
            }
            ,
            j.daysInMonth = function() {
                return this.endOf(f).$D
            }
            ,
            j.$locale = function() {
                return T[this.$L]
            }
            ,
            j.locale = function(M, K) {
                if (!M)
                    return this.$L;
                var F = this.clone()
                  , se = O(M, K, !0);
                return se && (F.$L = se),
                F
            }
            ,
            j.clone = function() {
                return V.w(this.$d, this)
            }
            ,
            j.toDate = function() {
                return new Date(this.valueOf())
            }
            ,
            j.toJSON = function() {
                return this.isValid() ? this.toISOString() : null
            }
            ,
            j.toISOString = function() {
                return this.$d.toISOString()
            }
            ,
            j.toString = function() {
                return this.$d.toUTCString()
            }
            ,
            Y
        }()
          , X = x.prototype;
        return I.prototype = X,
        [["$ms", i], ["$s", s], ["$m", a], ["$H", l], ["$W", c], ["$M", f], ["$y", m], ["$D", _]].forEach(function(Y) {
            X[Y[1]] = function(j) {
                return this.$g(j, Y[0], Y[1])
            }
        }),
        I.extend = function(Y, j) {
            return Y.$i || (Y(j, x, I),
            Y.$i = !0),
            I
        }
        ,
        I.locale = O,
        I.isDayjs = L,
        I.unix = function(Y) {
            return I(1e3 * Y)
        }
        ,
        I.en = T[S],
        I.Ls = T,
        I.p = {},
        I
    })
}
)(Fg);
var un = Fg.exports;
const Bn = ko(un);
var Ug = {
    exports: {}
};
(function(e, t) {
    (function(n, r) {
        e.exports = r()
    }
    )(_t, function() {
        return function(n, r, o) {
            o.updateLocale = function(i, s) {
                var a = o.Ls[i];
                if (a)
                    return (s ? Object.keys(s) : []).forEach(function(l) {
                        a[l] = s[l]
                    }),
                    a
            }
        }
    })
}
)(Ug);
var UL = Ug.exports;
const VL = ko(UL);
var BL = {
    exports: {}
};
(function(e, t) {
    (function(n, r) {
        e.exports = r()
    }
    )(_t, function() {
        return {
            name: "en",
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            ordinal: function(n) {
                var r = ["th", "st", "nd", "rd"]
                  , o = n % 100;
                return "[" + n + (r[(o - 20) % 10] || r[o] || r[0]) + "]"
            }
        }
    })
}
)(BL);
var HL = {
    exports: {}
};
(function(e, t) {
    (function(n, r) {
        e.exports = r(un)
    }
    )(_t, function(n) {
        function r(s) {
            return s && typeof s == "object" && "default"in s ? s : {
                default: s
            }
        }
        var o = r(n)
          , i = {
            name: "es",
            monthsShort: "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
            weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
            weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
            weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
            months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
            weekStart: 1,
            formats: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D [de] MMMM [de] YYYY",
                LLL: "D [de] MMMM [de] YYYY H:mm",
                LLLL: "dddd, D [de] MMMM [de] YYYY H:mm"
            },
            relativeTime: {
                future: "en %s",
                past: "hace %s",
                s: "unos segundos",
                m: "un minuto",
                mm: "%d minutos",
                h: "una hora",
                hh: "%d horas",
                d: "un día",
                dd: "%d días",
                M: "un mes",
                MM: "%d meses",
                y: "un año",
                yy: "%d años"
            },
            ordinal: function(s) {
                return s + "º"
            }
        };
        return o.default.locale(i, null, !0),
        i
    })
}
)(HL);
var jL = {
    exports: {}
};
(function(e, t) {
    (function(n, r) {
        e.exports = r(un)
    }
    )(_t, function(n) {
        function r(s) {
            return s && typeof s == "object" && "default"in s ? s : {
                default: s
            }
        }
        var o = r(n)
          , i = {
            name: "hi",
            weekdays: "रविवार_सोमवार_मंगलवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),
            months: "जनवरी_फ़रवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितम्बर_अक्टूबर_नवम्बर_दिसम्बर".split("_"),
            weekdaysShort: "रवि_सोम_मंगल_बुध_गुरू_शुक्र_शनि".split("_"),
            monthsShort: "जन._फ़र._मार्च_अप्रै._मई_जून_जुल._अग._सित._अक्टू._नव._दिस.".split("_"),
            weekdaysMin: "र_सो_मं_बु_गु_शु_श".split("_"),
            ordinal: function(s) {
                return s
            },
            formats: {
                LT: "A h:mm बजे",
                LTS: "A h:mm:ss बजे",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm बजे",
                LLLL: "dddd, D MMMM YYYY, A h:mm बजे"
            },
            relativeTime: {
                future: "%s में",
                past: "%s पहले",
                s: "कुछ ही क्षण",
                m: "एक मिनट",
                mm: "%d मिनट",
                h: "एक घंटा",
                hh: "%d घंटे",
                d: "एक दिन",
                dd: "%d दिन",
                M: "एक महीने",
                MM: "%d महीने",
                y: "एक वर्ष",
                yy: "%d वर्ष"
            }
        };
        return o.default.locale(i, null, !0),
        i
    })
}
)(jL);
var KL = {
    exports: {}
};
(function(e, t) {
    (function(n, r) {
        e.exports = r(un)
    }
    )(_t, function(n) {
        function r(s) {
            return s && typeof s == "object" && "default"in s ? s : {
                default: s
            }
        }
        var o = r(n)
          , i = {
            name: "id",
            weekdays: "Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu".split("_"),
            months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split("_"),
            weekdaysShort: "Min_Sen_Sel_Rab_Kam_Jum_Sab".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Agt_Sep_Okt_Nov_Des".split("_"),
            weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sb".split("_"),
            weekStart: 1,
            formats: {
                LT: "HH.mm",
                LTS: "HH.mm.ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY [pukul] HH.mm",
                LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
            },
            relativeTime: {
                future: "dalam %s",
                past: "%s yang lalu",
                s: "beberapa detik",
                m: "semenit",
                mm: "%d menit",
                h: "sejam",
                hh: "%d jam",
                d: "sehari",
                dd: "%d hari",
                M: "sebulan",
                MM: "%d bulan",
                y: "setahun",
                yy: "%d tahun"
            },
            ordinal: function(s) {
                return s + "."
            }
        };
        return o.default.locale(i, null, !0),
        i
    })
}
)(KL);
var qL = {
    exports: {}
};
(function(e, t) {
    (function(n, r) {
        e.exports = r(un)
    }
    )(_t, function(n) {
        function r(s) {
            return s && typeof s == "object" && "default"in s ? s : {
                default: s
            }
        }
        var o = r(n)
          , i = {
            name: "pt",
            weekdays: "domingo_segunda-feira_terça-feira_quarta-feira_quinta-feira_sexta-feira_sábado".split("_"),
            weekdaysShort: "dom_seg_ter_qua_qui_sex_sab".split("_"),
            weekdaysMin: "Do_2ª_3ª_4ª_5ª_6ª_Sa".split("_"),
            months: "janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"),
            monthsShort: "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"),
            ordinal: function(s) {
                return s + "º"
            },
            weekStart: 1,
            yearStart: 4,
            formats: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D [de] MMMM [de] YYYY",
                LLL: "D [de] MMMM [de] YYYY [às] HH:mm",
                LLLL: "dddd, D [de] MMMM [de] YYYY [às] HH:mm"
            },
            relativeTime: {
                future: "em %s",
                past: "há %s",
                s: "alguns segundos",
                m: "um minuto",
                mm: "%d minutos",
                h: "uma hora",
                hh: "%d horas",
                d: "um dia",
                dd: "%d dias",
                M: "um mês",
                MM: "%d meses",
                y: "um ano",
                yy: "%d anos"
            }
        };
        return o.default.locale(i, null, !0),
        i
    })
}
)(qL);
var YL = {
    exports: {}
};
(function(e, t) {
    (function(n, r) {
        e.exports = r(un)
    }
    )(_t, function(n) {
        function r(_) {
            return _ && typeof _ == "object" && "default"in _ ? _ : {
                default: _
            }
        }
        var o = r(n)
          , i = "января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split("_")
          , s = "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_")
          , a = "янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.".split("_")
          , l = "янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.".split("_")
          , c = /D[oD]?(\[[^[\]]*\]|\s)+MMMM?/;
        function u(_, b, w) {
            var g, E;
            return w === "m" ? b ? "минута" : "минуту" : _ + " " + (g = +_,
            E = {
                mm: b ? "минута_минуты_минут" : "минуту_минуты_минут",
                hh: "час_часа_часов",
                dd: "день_дня_дней",
                MM: "месяц_месяца_месяцев",
                yy: "год_года_лет"
            }[w].split("_"),
            g % 10 == 1 && g % 100 != 11 ? E[0] : g % 10 >= 2 && g % 10 <= 4 && (g % 100 < 10 || g % 100 >= 20) ? E[1] : E[2])
        }
        var f = function(_, b) {
            return c.test(b) ? i[_.month()] : s[_.month()]
        };
        f.s = s,
        f.f = i;
        var d = function(_, b) {
            return c.test(b) ? a[_.month()] : l[_.month()]
        };
        d.s = l,
        d.f = a;
        var m = {
            name: "ru",
            weekdays: "воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_"),
            weekdaysShort: "вск_пнд_втр_срд_чтв_птн_сбт".split("_"),
            weekdaysMin: "вс_пн_вт_ср_чт_пт_сб".split("_"),
            months: f,
            monthsShort: d,
            weekStart: 1,
            yearStart: 4,
            formats: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY г.",
                LLL: "D MMMM YYYY г., H:mm",
                LLLL: "dddd, D MMMM YYYY г., H:mm"
            },
            relativeTime: {
                future: "через %s",
                past: "%s назад",
                s: "несколько секунд",
                m: u,
                mm: u,
                h: "час",
                hh: u,
                d: "день",
                dd: u,
                M: "месяц",
                MM: u,
                y: "год",
                yy: u
            },
            ordinal: function(_) {
                return _
            },
            meridiem: function(_) {
                return _ < 4 ? "ночи" : _ < 12 ? "утра" : _ < 17 ? "дня" : "вечера"
            }
        };
        return o.default.locale(m, null, !0),
        m
    })
}
)(YL);
var WL = {
    exports: {}
};
(function(e, t) {
    (function(n, r) {
        e.exports = r(un)
    }
    )(_t, function(n) {
        function r(s) {
            return s && typeof s == "object" && "default"in s ? s : {
                default: s
            }
        }
        var o = r(n)
          , i = {
            name: "th",
            weekdays: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์".split("_"),
            weekdaysShort: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัส_ศุกร์_เสาร์".split("_"),
            weekdaysMin: "อา._จ._อ._พ._พฤ._ศ._ส.".split("_"),
            months: "มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม".split("_"),
            monthsShort: "ม.ค._ก.พ._มี.ค._เม.ย._พ.ค._มิ.ย._ก.ค._ส.ค._ก.ย._ต.ค._พ.ย._ธ.ค.".split("_"),
            formats: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY เวลา H:mm",
                LLLL: "วันddddที่ D MMMM YYYY เวลา H:mm"
            },
            relativeTime: {
                future: "อีก %s",
                past: "%sที่แล้ว",
                s: "ไม่กี่วินาที",
                m: "1 นาที",
                mm: "%d นาที",
                h: "1 ชั่วโมง",
                hh: "%d ชั่วโมง",
                d: "1 วัน",
                dd: "%d วัน",
                M: "1 เดือน",
                MM: "%d เดือน",
                y: "1 ปี",
                yy: "%d ปี"
            },
            ordinal: function(s) {
                return s + "."
            }
        };
        return o.default.locale(i, null, !0),
        i
    })
}
)(WL);
var JL = {
    exports: {}
};
(function(e, t) {
    (function(n, r) {
        e.exports = r(un)
    }
    )(_t, function(n) {
        function r(s) {
            return s && typeof s == "object" && "default"in s ? s : {
                default: s
            }
        }
        var o = r(n)
          , i = {
            name: "tl-ph",
            weekdays: "Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado".split("_"),
            months: "Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre".split("_"),
            weekStart: 1,
            weekdaysShort: "Lin_Lun_Mar_Miy_Huw_Biy_Sab".split("_"),
            monthsShort: "Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis".split("_"),
            weekdaysMin: "Li_Lu_Ma_Mi_Hu_Bi_Sab".split("_"),
            ordinal: function(s) {
                return s
            },
            formats: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "MM/D/YYYY",
                LL: "MMMM D, YYYY",
                LLL: "MMMM D, YYYY HH:mm",
                LLLL: "dddd, MMMM DD, YYYY HH:mm"
            },
            relativeTime: {
                future: "sa loob ng %s",
                past: "%s ang nakalipas",
                s: "ilang segundo",
                m: "isang minuto",
                mm: "%d minuto",
                h: "isang oras",
                hh: "%d oras",
                d: "isang araw",
                dd: "%d araw",
                M: "isang buwan",
                MM: "%d buwan",
                y: "isang taon",
                yy: "%d taon"
            }
        };
        return o.default.locale(i, null, !0),
        i
    })
}
)(JL);
var zL = {
    exports: {}
};
(function(e, t) {
    (function(n, r) {
        e.exports = r(un)
    }
    )(_t, function(n) {
        function r(s) {
            return s && typeof s == "object" && "default"in s ? s : {
                default: s
            }
        }
        var o = r(n)
          , i = {
            name: "tr",
            weekdays: "Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi".split("_"),
            weekdaysShort: "Paz_Pts_Sal_Çar_Per_Cum_Cts".split("_"),
            weekdaysMin: "Pz_Pt_Sa_Ça_Pe_Cu_Ct".split("_"),
            months: "Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık".split("_"),
            monthsShort: "Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara".split("_"),
            weekStart: 1,
            formats: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            relativeTime: {
                future: "%s sonra",
                past: "%s önce",
                s: "birkaç saniye",
                m: "bir dakika",
                mm: "%d dakika",
                h: "bir saat",
                hh: "%d saat",
                d: "bir gün",
                dd: "%d gün",
                M: "bir ay",
                MM: "%d ay",
                y: "bir yıl",
                yy: "%d yıl"
            },
            ordinal: function(s) {
                return s + "."
            }
        };
        return o.default.locale(i, null, !0),
        i
    })
}
)(zL);
var GL = {
    exports: {}
};
(function(e, t) {
    (function(n, r) {
        e.exports = r(un)
    }
    )(_t, function(n) {
        function r(s) {
            return s && typeof s == "object" && "default"in s ? s : {
                default: s
            }
        }
        var o = r(n)
          , i = {
            name: "vi",
            weekdays: "chủ nhật_thứ hai_thứ ba_thứ tư_thứ năm_thứ sáu_thứ bảy".split("_"),
            months: "tháng 1_tháng 2_tháng 3_tháng 4_tháng 5_tháng 6_tháng 7_tháng 8_tháng 9_tháng 10_tháng 11_tháng 12".split("_"),
            weekStart: 1,
            weekdaysShort: "CN_T2_T3_T4_T5_T6_T7".split("_"),
            monthsShort: "Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12".split("_"),
            weekdaysMin: "CN_T2_T3_T4_T5_T6_T7".split("_"),
            ordinal: function(s) {
                return s
            },
            formats: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM [năm] YYYY",
                LLL: "D MMMM [năm] YYYY HH:mm",
                LLLL: "dddd, D MMMM [năm] YYYY HH:mm",
                l: "DD/M/YYYY",
                ll: "D MMM YYYY",
                lll: "D MMM YYYY HH:mm",
                llll: "ddd, D MMM YYYY HH:mm"
            },
            relativeTime: {
                future: "%s tới",
                past: "%s trước",
                s: "vài giây",
                m: "một phút",
                mm: "%d phút",
                h: "một giờ",
                hh: "%d giờ",
                d: "một ngày",
                dd: "%d ngày",
                M: "một tháng",
                MM: "%d tháng",
                y: "một năm",
                yy: "%d năm"
            }
        };
        return o.default.locale(i, null, !0),
        i
    })
}
)(GL);
var QL = {
    exports: {}
};
(function(e, t) {
    (function(n, r) {
        e.exports = r(un)
    }
    )(_t, function(n) {
        function r(s) {
            return s && typeof s == "object" && "default"in s ? s : {
                default: s
            }
        }
        var o = r(n)
          , i = {
            name: "uz",
            weekdays: "Якшанба_Душанба_Сешанба_Чоршанба_Пайшанба_Жума_Шанба".split("_"),
            months: "январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр".split("_"),
            weekStart: 1,
            weekdaysShort: "Якш_Душ_Сеш_Чор_Пай_Жум_Шан".split("_"),
            monthsShort: "янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек".split("_"),
            weekdaysMin: "Як_Ду_Се_Чо_Па_Жу_Ша".split("_"),
            ordinal: function(s) {
                return s
            },
            formats: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "D MMMM YYYY, dddd HH:mm"
            },
            relativeTime: {
                future: "Якин %s ичида",
                past: "%s олдин",
                s: "фурсат",
                m: "бир дакика",
                mm: "%d дакика",
                h: "бир соат",
                hh: "%d соат",
                d: "бир кун",
                dd: "%d кун",
                M: "бир ой",
                MM: "%d ой",
                y: "бир йил",
                yy: "%d йил"
            }
        };
        return o.default.locale(i, null, !0),
        i
    })
}
)(QL);
var Vg = {
    exports: {}
};
(function(e, t) {
    (function(n, r) {
        e.exports = r()
    }
    )(_t, function() {
        return function(n, r, o) {
            n = n || {};
            var i = r.prototype
              , s = {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            };
            function a(c, u, f, d) {
                return i.fromToBase(c, u, f, d)
            }
            o.en.relativeTime = s,
            i.fromToBase = function(c, u, f, d, m) {
                for (var _, b, w, g = f.$locale().relativeTime || s, E = n.thresholds || [{
                    l: "s",
                    r: 44,
                    d: "second"
                }, {
                    l: "m",
                    r: 89
                }, {
                    l: "mm",
                    r: 44,
                    d: "minute"
                }, {
                    l: "h",
                    r: 89
                }, {
                    l: "hh",
                    r: 21,
                    d: "hour"
                }, {
                    l: "d",
                    r: 35
                }, {
                    l: "dd",
                    r: 25,
                    d: "day"
                }, {
                    l: "M",
                    r: 45
                }, {
                    l: "MM",
                    r: 10,
                    d: "month"
                }, {
                    l: "y",
                    r: 17
                }, {
                    l: "yy",
                    d: "year"
                }], p = E.length, y = 0; y < p; y += 1) {
                    var S = E[y];
                    S.d && (_ = d ? o(c).diff(f, S.d, !0) : f.diff(c, S.d, !0));
                    var T = (n.rounding || Math.round)(Math.abs(_));
                    if (w = _ > 0,
                    T <= S.r || !S.r) {
                        T <= 1 && y > 0 && (S = E[y - 1]);
                        var A = g[S.l];
                        m && (T = m("" + T)),
                        b = typeof A == "string" ? A.replace("%d", T) : A(T, u, S.l, w);
                        break
                    }
                }
                if (u)
                    return b;
                var L = w ? g.future : g.past;
                return typeof L == "function" ? L(b) : L.replace("%s", b)
            }
            ,
            i.to = function(c, u) {
                return a(c, u, this, !0)
            }
            ,
            i.from = function(c, u) {
                return a(c, u, this)
            }
            ;
            var l = function(c) {
                return c.$u ? o.utc() : o()
            };
            i.toNow = function(c) {
                return this.to(l(this), c)
            }
            ,
            i.fromNow = function(c) {
                return this.from(l(this), c)
            }
        }
    })
}
)(Vg);
var XL = Vg.exports;
const ZL = ko(XL);
var Bg = {
    exports: {}
};
(function(e, t) {
    (function(n, r) {
        e.exports = r()
    }
    )(_t, function() {
        var n = "minute"
          , r = /[+-]\d\d(?::?\d\d)?/g
          , o = /([+-]|\d\d)/g;
        return function(i, s, a) {
            var l = s.prototype;
            a.utc = function(b) {
                var w = {
                    date: b,
                    utc: !0,
                    args: arguments
                };
                return new s(w)
            }
            ,
            l.utc = function(b) {
                var w = a(this.toDate(), {
                    locale: this.$L,
                    utc: !0
                });
                return b ? w.add(this.utcOffset(), n) : w
            }
            ,
            l.local = function() {
                return a(this.toDate(), {
                    locale: this.$L,
                    utc: !1
                })
            }
            ;
            var c = l.parse;
            l.parse = function(b) {
                b.utc && (this.$u = !0),
                this.$utils().u(b.$offset) || (this.$offset = b.$offset),
                c.call(this, b)
            }
            ;
            var u = l.init;
            l.init = function() {
                if (this.$u) {
                    var b = this.$d;
                    this.$y = b.getUTCFullYear(),
                    this.$M = b.getUTCMonth(),
                    this.$D = b.getUTCDate(),
                    this.$W = b.getUTCDay(),
                    this.$H = b.getUTCHours(),
                    this.$m = b.getUTCMinutes(),
                    this.$s = b.getUTCSeconds(),
                    this.$ms = b.getUTCMilliseconds()
                } else
                    u.call(this)
            }
            ;
            var f = l.utcOffset;
            l.utcOffset = function(b, w) {
                var g = this.$utils().u;
                if (g(b))
                    return this.$u ? 0 : g(this.$offset) ? f.call(this) : this.$offset;
                if (typeof b == "string" && (b = function(S) {
                    S === void 0 && (S = "");
                    var T = S.match(r);
                    if (!T)
                        return null;
                    var A = ("" + T[0]).match(o) || ["-", 0, 0]
                      , L = A[0]
                      , O = 60 * +A[1] + +A[2];
                    return O === 0 ? 0 : L === "+" ? O : -O
                }(b),
                b === null))
                    return this;
                var E = Math.abs(b) <= 16 ? 60 * b : b
                  , p = this;
                if (w)
                    return p.$offset = E,
                    p.$u = b === 0,
                    p;
                if (b !== 0) {
                    var y = this.$u ? this.toDate().getTimezoneOffset() : -1 * this.utcOffset();
                    (p = this.local().add(E + y, n)).$offset = E,
                    p.$x.$localOffset = y
                } else
                    p = this.utc();
                return p
            }
            ;
            var d = l.format;
            l.format = function(b) {
                var w = b || (this.$u ? "YYYY-MM-DDTHH:mm:ss[Z]" : "");
                return d.call(this, w)
            }
            ,
            l.valueOf = function() {
                var b = this.$utils().u(this.$offset) ? 0 : this.$offset + (this.$x.$localOffset || this.$d.getTimezoneOffset());
                return this.$d.valueOf() - 6e4 * b
            }
            ,
            l.isUTC = function() {
                return !!this.$u
            }
            ,
            l.toISOString = function() {
                return this.toDate().toISOString()
            }
            ,
            l.toString = function() {
                return this.toDate().toUTCString()
            }
            ;
            var m = l.toDate;
            l.toDate = function(b) {
                return b === "s" && this.$offset ? a(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate() : m.call(this)
            }
            ;
            var _ = l.diff;
            l.diff = function(b, w, g) {
                if (b && this.$u === b.$u)
                    return _.call(this, b, w, g);
                var E = this.local()
                  , p = a(b).local();
                return _.call(E, p, w, g)
            }
        }
    })
}
)(Bg);
var $L = Bg.exports;
const eC = ko($L);
var Hg = {
    exports: {}
};
(function(e, t) {
    (function(n, r) {
        e.exports = r()
    }
    )(_t, function() {
        var n = {
            year: 0,
            month: 1,
            day: 2,
            hour: 3,
            minute: 4,
            second: 5
        }
          , r = {};
        return function(o, i, s) {
            var a, l = function(d, m, _) {
                _ === void 0 && (_ = {});
                var b = new Date(d)
                  , w = function(g, E) {
                    E === void 0 && (E = {});
                    var p = E.timeZoneName || "short"
                      , y = g + "|" + p
                      , S = r[y];
                    return S || (S = new Intl.DateTimeFormat("en-US",{
                        hour12: !1,
                        timeZone: g,
                        year: "numeric",
                        month: "2-digit",
                        day: "2-digit",
                        hour: "2-digit",
                        minute: "2-digit",
                        second: "2-digit",
                        timeZoneName: p
                    }),
                    r[y] = S),
                    S
                }(m, _);
                return w.formatToParts(b)
            }, c = function(d, m) {
                for (var _ = l(d, m), b = [], w = 0; w < _.length; w += 1) {
                    var g = _[w]
                      , E = g.type
                      , p = g.value
                      , y = n[E];
                    y >= 0 && (b[y] = parseInt(p, 10))
                }
                var S = b[3]
                  , T = S === 24 ? 0 : S
                  , A = b[0] + "-" + b[1] + "-" + b[2] + " " + T + ":" + b[4] + ":" + b[5] + ":000"
                  , L = +d;
                return (s.utc(A).valueOf() - (L -= L % 1e3)) / 6e4
            }, u = i.prototype;
            u.tz = function(d, m) {
                d === void 0 && (d = a);
                var _ = this.utcOffset()
                  , b = this.toDate()
                  , w = b.toLocaleString("en-US", {
                    timeZone: d
                })
                  , g = Math.round((b - new Date(w)) / 1e3 / 60)
                  , E = s(w, {
                    locale: this.$L
                }).$set("millisecond", this.$ms).utcOffset(15 * -Math.round(b.getTimezoneOffset() / 15) - g, !0);
                if (m) {
                    var p = E.utcOffset();
                    E = E.add(_ - p, "minute")
                }
                return E.$x.$timezone = d,
                E
            }
            ,
            u.offsetName = function(d) {
                var m = this.$x.$timezone || s.tz.guess()
                  , _ = l(this.valueOf(), m, {
                    timeZoneName: d
                }).find(function(b) {
                    return b.type.toLowerCase() === "timezonename"
                });
                return _ && _.value
            }
            ;
            var f = u.startOf;
            u.startOf = function(d, m) {
                if (!this.$x || !this.$x.$timezone)
                    return f.call(this, d, m);
                var _ = s(this.format("YYYY-MM-DD HH:mm:ss:SSS"), {
                    locale: this.$L
                });
                return f.call(_, d, m).tz(this.$x.$timezone, !0)
            }
            ,
            s.tz = function(d, m, _) {
                var b = _ && m
                  , w = _ || m || a
                  , g = c(+s(), w);
                if (typeof d != "string")
                    return s(d).tz(w);
                var E = function(T, A, L) {
                    var O = T - 60 * A * 1e3
                      , I = c(O, L);
                    if (A === I)
                        return [O, A];
                    var V = c(O -= 60 * (I - A) * 1e3, L);
                    return I === V ? [O, I] : [T - 60 * Math.min(I, V) * 1e3, Math.max(I, V)]
                }(s.utc(d, b).valueOf(), g, w)
                  , p = E[0]
                  , y = E[1]
                  , S = s(p).utcOffset(y);
                return S.$x.$timezone = w,
                S
            }
            ,
            s.tz.guess = function() {
                return Intl.DateTimeFormat().resolvedOptions().timeZone
            }
            ,
            s.tz.setDefault = function(d) {
                a = d
            }
        }
    })
}
)(Hg);
var tC = Hg.exports;
const nC = ko(tC);
var jg = {
    exports: {}
};
(function(e, t) {
    (function(n, r) {
        e.exports = r()
    }
    )(_t, function() {
        var n = {
            LTS: "h:mm:ss A",
            LT: "h:mm A",
            L: "MM/DD/YYYY",
            LL: "MMMM D, YYYY",
            LLL: "MMMM D, YYYY h:mm A",
            LLLL: "dddd, MMMM D, YYYY h:mm A"
        };
        return function(r, o, i) {
            var s = o.prototype
              , a = s.format;
            i.en.formats = n,
            s.format = function(l) {
                l === void 0 && (l = "YYYY-MM-DDTHH:mm:ssZ");
                var c = this.$locale().formats
                  , u = function(f, d) {
                    return f.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(m, _, b) {
                        var w = b && b.toUpperCase();
                        return _ || d[b] || n[b] || d[w].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(g, E, p) {
                            return E || p.slice(1)
                        })
                    })
                }(l, c === void 0 ? {} : c);
                return a.call(this, u)
            }
        }
    })
}
)(jg);
var rC = jg.exports;
const oC = ko(rC);
Bn.extend(VL);
Bn.extend(ZL);
Bn.extend(eC);
Bn.extend(nC);
Bn.extend(oC);
Bn.tz.setDefault("Europe/Moscow");
Bn.updateLocale("en");
Bn.locale("en");
const iC = Et(async e=>e.provide("dayjs", Bn))
  , sC = ["top", "right", "bottom", "left"]
  , nh = ["start", "end"]
  , rh = sC.reduce((e,t)=>e.concat(t, t + "-" + nh[0], t + "-" + nh[1]), [])
  , di = Math.min
  , Ar = Math.max
  , aC = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
}
  , lC = {
    start: "end",
    end: "start"
};
function sc(e, t, n) {
    return Ar(e, di(t, n))
}
function Yr(e, t) {
    return typeof e == "function" ? e(t) : e
}
function kn(e) {
    return e.split("-")[0]
}
function nn(e) {
    return e.split("-")[1]
}
function Kg(e) {
    return e === "x" ? "y" : "x"
}
function _u(e) {
    return e === "y" ? "height" : "width"
}
function Mi(e) {
    return ["top", "bottom"].includes(kn(e)) ? "y" : "x"
}
function bu(e) {
    return Kg(Mi(e))
}
function qg(e, t, n) {
    n === void 0 && (n = !1);
    const r = nn(e)
      , o = bu(e)
      , i = _u(o);
    let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
    return t.reference[i] > t.floating[i] && (s = Ms(s)),
    [s, Ms(s)]
}
function cC(e) {
    const t = Ms(e);
    return [Is(e), t, Is(t)]
}
function Is(e) {
    return e.replace(/start|end/g, t=>lC[t])
}
function uC(e, t, n) {
    const r = ["left", "right"]
      , o = ["right", "left"]
      , i = ["top", "bottom"]
      , s = ["bottom", "top"];
    switch (e) {
    case "top":
    case "bottom":
        return n ? t ? o : r : t ? r : o;
    case "left":
    case "right":
        return t ? i : s;
    default:
        return []
    }
}
function fC(e, t, n, r) {
    const o = nn(e);
    let i = uC(kn(e), n === "start", r);
    return o && (i = i.map(s=>s + "-" + o),
    t && (i = i.concat(i.map(Is)))),
    i
}
function Ms(e) {
    return e.replace(/left|right|bottom|top/g, t=>aC[t])
}
function dC(e) {
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...e
    }
}
function Yg(e) {
    return typeof e != "number" ? dC(e) : {
        top: e,
        right: e,
        bottom: e,
        left: e
    }
}
function Yo(e) {
    const {x: t, y: n, width: r, height: o} = e;
    return {
        width: r,
        height: o,
        top: n,
        left: t,
        right: t + r,
        bottom: n + o,
        x: t,
        y: n
    }
}
function oh(e, t, n) {
    let {reference: r, floating: o} = e;
    const i = Mi(t)
      , s = bu(t)
      , a = _u(s)
      , l = kn(t)
      , c = i === "y"
      , u = r.x + r.width / 2 - o.width / 2
      , f = r.y + r.height / 2 - o.height / 2
      , d = r[a] / 2 - o[a] / 2;
    let m;
    switch (l) {
    case "top":
        m = {
            x: u,
            y: r.y - o.height
        };
        break;
    case "bottom":
        m = {
            x: u,
            y: r.y + r.height
        };
        break;
    case "right":
        m = {
            x: r.x + r.width,
            y: f
        };
        break;
    case "left":
        m = {
            x: r.x - o.width,
            y: f
        };
        break;
    default:
        m = {
            x: r.x,
            y: r.y
        }
    }
    switch (nn(t)) {
    case "start":
        m[s] -= d * (n && c ? -1 : 1);
        break;
    case "end":
        m[s] += d * (n && c ? -1 : 1);
        break
    }
    return m
}
const hC = async(e,t,n)=>{
    const {placement: r="bottom", strategy: o="absolute", middleware: i=[], platform: s} = n
      , a = i.filter(Boolean)
      , l = await (s.isRTL == null ? void 0 : s.isRTL(t));
    let c = await s.getElementRects({
        reference: e,
        floating: t,
        strategy: o
    })
      , {x: u, y: f} = oh(c, r, l)
      , d = r
      , m = {}
      , _ = 0;
    for (let b = 0; b < a.length; b++) {
        const {name: w, fn: g} = a[b]
          , {x: E, y: p, data: y, reset: S} = await g({
            x: u,
            y: f,
            initialPlacement: r,
            placement: d,
            strategy: o,
            middlewareData: m,
            rects: c,
            platform: s,
            elements: {
                reference: e,
                floating: t
            }
        });
        u = E ?? u,
        f = p ?? f,
        m = {
            ...m,
            [w]: {
                ...m[w],
                ...y
            }
        },
        S && _ <= 50 && (_++,
        typeof S == "object" && (S.placement && (d = S.placement),
        S.rects && (c = S.rects === !0 ? await s.getElementRects({
            reference: e,
            floating: t,
            strategy: o
        }) : S.rects),
        {x: u, y: f} = oh(c, d, l)),
        b = -1)
    }
    return {
        x: u,
        y: f,
        placement: d,
        strategy: o,
        middlewareData: m
    }
}
;
async function ha(e, t) {
    var n;
    t === void 0 && (t = {});
    const {x: r, y: o, platform: i, rects: s, elements: a, strategy: l} = e
      , {boundary: c="clippingAncestors", rootBoundary: u="viewport", elementContext: f="floating", altBoundary: d=!1, padding: m=0} = Yr(t, e)
      , _ = Yg(m)
      , w = a[d ? f === "floating" ? "reference" : "floating" : f]
      , g = Yo(await i.getClippingRect({
        element: (n = await (i.isElement == null ? void 0 : i.isElement(w))) == null || n ? w : w.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(a.floating)),
        boundary: c,
        rootBoundary: u,
        strategy: l
    }))
      , E = f === "floating" ? {
        x: r,
        y: o,
        width: s.floating.width,
        height: s.floating.height
    } : s.reference
      , p = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(a.floating))
      , y = await (i.isElement == null ? void 0 : i.isElement(p)) ? await (i.getScale == null ? void 0 : i.getScale(p)) || {
        x: 1,
        y: 1
    } : {
        x: 1,
        y: 1
    }
      , S = Yo(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
        elements: a,
        rect: E,
        offsetParent: p,
        strategy: l
    }) : E);
    return {
        top: (g.top - S.top + _.top) / y.y,
        bottom: (S.bottom - g.bottom + _.bottom) / y.y,
        left: (g.left - S.left + _.left) / y.x,
        right: (S.right - g.right + _.right) / y.x
    }
}
const pC = e=>({
    name: "arrow",
    options: e,
    async fn(t) {
        const {x: n, y: r, placement: o, rects: i, platform: s, elements: a, middlewareData: l} = t
          , {element: c, padding: u=0} = Yr(e, t) || {};
        if (c == null)
            return {};
        const f = Yg(u)
          , d = {
            x: n,
            y: r
        }
          , m = bu(o)
          , _ = _u(m)
          , b = await s.getDimensions(c)
          , w = m === "y"
          , g = w ? "top" : "left"
          , E = w ? "bottom" : "right"
          , p = w ? "clientHeight" : "clientWidth"
          , y = i.reference[_] + i.reference[m] - d[m] - i.floating[_]
          , S = d[m] - i.reference[m]
          , T = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(c));
        let A = T ? T[p] : 0;
        (!A || !await (s.isElement == null ? void 0 : s.isElement(T))) && (A = a.floating[p] || i.floating[_]);
        const L = y / 2 - S / 2
          , O = A / 2 - b[_] / 2 - 1
          , I = di(f[g], O)
          , V = di(f[E], O)
          , x = I
          , X = A - b[_] - V
          , Y = A / 2 - b[_] / 2 + L
          , j = sc(x, Y, X)
          , M = !l.arrow && nn(o) != null && Y !== j && i.reference[_] / 2 - (Y < x ? I : V) - b[_] / 2 < 0
          , K = M ? Y < x ? Y - x : Y - X : 0;
        return {
            [m]: d[m] + K,
            data: {
                [m]: j,
                centerOffset: Y - j - K,
                ...M && {
                    alignmentOffset: K
                }
            },
            reset: M
        }
    }
});
function mC(e, t, n) {
    return (e ? [...n.filter(o=>nn(o) === e), ...n.filter(o=>nn(o) !== e)] : n.filter(o=>kn(o) === o)).filter(o=>e ? nn(o) === e || (t ? Is(o) !== o : !1) : !0)
}
const gC = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "autoPlacement",
        options: e,
        async fn(t) {
            var n, r, o;
            const {rects: i, middlewareData: s, placement: a, platform: l, elements: c} = t
              , {crossAxis: u=!1, alignment: f, allowedPlacements: d=rh, autoAlignment: m=!0, ..._} = Yr(e, t)
              , b = f !== void 0 || d === rh ? mC(f || null, m, d) : d
              , w = await ha(t, _)
              , g = ((n = s.autoPlacement) == null ? void 0 : n.index) || 0
              , E = b[g];
            if (E == null)
                return {};
            const p = qg(E, i, await (l.isRTL == null ? void 0 : l.isRTL(c.floating)));
            if (a !== E)
                return {
                    reset: {
                        placement: b[0]
                    }
                };
            const y = [w[kn(E)], w[p[0]], w[p[1]]]
              , S = [...((r = s.autoPlacement) == null ? void 0 : r.overflows) || [], {
                placement: E,
                overflows: y
            }]
              , T = b[g + 1];
            if (T)
                return {
                    data: {
                        index: g + 1,
                        overflows: S
                    },
                    reset: {
                        placement: T
                    }
                };
            const A = S.map(I=>{
                const V = nn(I.placement);
                return [I.placement, V && u ? I.overflows.slice(0, 2).reduce((x,X)=>x + X, 0) : I.overflows[0], I.overflows]
            }
            ).sort((I,V)=>I[1] - V[1])
              , O = ((o = A.filter(I=>I[2].slice(0, nn(I[0]) ? 2 : 3).every(V=>V <= 0))[0]) == null ? void 0 : o[0]) || A[0][0];
            return O !== a ? {
                data: {
                    index: g + 1,
                    overflows: S
                },
                reset: {
                    placement: O
                }
            } : {}
        }
    }
}
  , yC = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "flip",
        options: e,
        async fn(t) {
            var n, r;
            const {placement: o, middlewareData: i, rects: s, initialPlacement: a, platform: l, elements: c} = t
              , {mainAxis: u=!0, crossAxis: f=!0, fallbackPlacements: d, fallbackStrategy: m="bestFit", fallbackAxisSideDirection: _="none", flipAlignment: b=!0, ...w} = Yr(e, t);
            if ((n = i.arrow) != null && n.alignmentOffset)
                return {};
            const g = kn(o)
              , E = kn(a) === a
              , p = await (l.isRTL == null ? void 0 : l.isRTL(c.floating))
              , y = d || (E || !b ? [Ms(a)] : cC(a));
            !d && _ !== "none" && y.push(...fC(a, b, _, p));
            const S = [a, ...y]
              , T = await ha(t, w)
              , A = [];
            let L = ((r = i.flip) == null ? void 0 : r.overflows) || [];
            if (u && A.push(T[g]),
            f) {
                const x = qg(o, s, p);
                A.push(T[x[0]], T[x[1]])
            }
            if (L = [...L, {
                placement: o,
                overflows: A
            }],
            !A.every(x=>x <= 0)) {
                var O, I;
                const x = (((O = i.flip) == null ? void 0 : O.index) || 0) + 1
                  , X = S[x];
                if (X)
                    return {
                        data: {
                            index: x,
                            overflows: L
                        },
                        reset: {
                            placement: X
                        }
                    };
                let Y = (I = L.filter(j=>j.overflows[0] <= 0).sort((j,M)=>j.overflows[1] - M.overflows[1])[0]) == null ? void 0 : I.placement;
                if (!Y)
                    switch (m) {
                    case "bestFit":
                        {
                            var V;
                            const j = (V = L.map(M=>[M.placement, M.overflows.filter(K=>K > 0).reduce((K,F)=>K + F, 0)]).sort((M,K)=>M[1] - K[1])[0]) == null ? void 0 : V[0];
                            j && (Y = j);
                            break
                        }
                    case "initialPlacement":
                        Y = a;
                        break
                    }
                if (o !== Y)
                    return {
                        reset: {
                            placement: Y
                        }
                    }
            }
            return {}
        }
    }
};
async function vC(e, t) {
    const {placement: n, platform: r, elements: o} = e
      , i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating))
      , s = kn(n)
      , a = nn(n)
      , l = Mi(n) === "y"
      , c = ["left", "top"].includes(s) ? -1 : 1
      , u = i && l ? -1 : 1
      , f = Yr(t, e);
    let {mainAxis: d, crossAxis: m, alignmentAxis: _} = typeof f == "number" ? {
        mainAxis: f,
        crossAxis: 0,
        alignmentAxis: null
    } : {
        mainAxis: 0,
        crossAxis: 0,
        alignmentAxis: null,
        ...f
    };
    return a && typeof _ == "number" && (m = a === "end" ? _ * -1 : _),
    l ? {
        x: m * u,
        y: d * c
    } : {
        x: d * c,
        y: m * u
    }
}
const _C = function(e) {
    return e === void 0 && (e = 0),
    {
        name: "offset",
        options: e,
        async fn(t) {
            var n, r;
            const {x: o, y: i, placement: s, middlewareData: a} = t
              , l = await vC(t, e);
            return s === ((n = a.offset) == null ? void 0 : n.placement) && (r = a.arrow) != null && r.alignmentOffset ? {} : {
                x: o + l.x,
                y: i + l.y,
                data: {
                    ...l,
                    placement: s
                }
            }
        }
    }
}
  , bC = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "shift",
        options: e,
        async fn(t) {
            const {x: n, y: r, placement: o} = t
              , {mainAxis: i=!0, crossAxis: s=!1, limiter: a={
                fn: w=>{
                    let {x: g, y: E} = w;
                    return {
                        x: g,
                        y: E
                    }
                }
            }, ...l} = Yr(e, t)
              , c = {
                x: n,
                y: r
            }
              , u = await ha(t, l)
              , f = Mi(kn(o))
              , d = Kg(f);
            let m = c[d]
              , _ = c[f];
            if (i) {
                const w = d === "y" ? "top" : "left"
                  , g = d === "y" ? "bottom" : "right"
                  , E = m + u[w]
                  , p = m - u[g];
                m = sc(E, m, p)
            }
            if (s) {
                const w = f === "y" ? "top" : "left"
                  , g = f === "y" ? "bottom" : "right"
                  , E = _ + u[w]
                  , p = _ - u[g];
                _ = sc(E, _, p)
            }
            const b = a.fn({
                ...t,
                [d]: m,
                [f]: _
            });
            return {
                ...b,
                data: {
                    x: b.x - n,
                    y: b.y - r
                }
            }
        }
    }
}
  , EC = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "size",
        options: e,
        async fn(t) {
            const {placement: n, rects: r, platform: o, elements: i} = t
              , {apply: s=()=>{}
            , ...a} = Yr(e, t)
              , l = await ha(t, a)
              , c = kn(n)
              , u = nn(n)
              , f = Mi(n) === "y"
              , {width: d, height: m} = r.floating;
            let _, b;
            c === "top" || c === "bottom" ? (_ = c,
            b = u === (await (o.isRTL == null ? void 0 : o.isRTL(i.floating)) ? "start" : "end") ? "left" : "right") : (b = c,
            _ = u === "end" ? "top" : "bottom");
            const w = m - l[_]
              , g = d - l[b]
              , E = !t.middlewareData.shift;
            let p = w
              , y = g;
            if (f) {
                const T = d - l.left - l.right;
                y = u || E ? di(g, T) : T
            } else {
                const T = m - l.top - l.bottom;
                p = u || E ? di(w, T) : T
            }
            if (E && !u) {
                const T = Ar(l.left, 0)
                  , A = Ar(l.right, 0)
                  , L = Ar(l.top, 0)
                  , O = Ar(l.bottom, 0);
                f ? y = d - 2 * (T !== 0 || A !== 0 ? T + A : Ar(l.left, l.right)) : p = m - 2 * (L !== 0 || O !== 0 ? L + O : Ar(l.top, l.bottom))
            }
            await s({
                ...t,
                availableWidth: y,
                availableHeight: p
            });
            const S = await o.getDimensions(i.floating);
            return d !== S.width || m !== S.height ? {
                reset: {
                    rects: !0
                }
            } : {}
        }
    }
};
function Wt(e) {
    var t;
    return ((t = e.ownerDocument) == null ? void 0 : t.defaultView) || window
}
function Sn(e) {
    return Wt(e).getComputedStyle(e)
}
const ih = Math.min
  , Wo = Math.max
  , Ns = Math.round;
function Wg(e) {
    const t = Sn(e);
    let n = parseFloat(t.width)
      , r = parseFloat(t.height);
    const o = e.offsetWidth
      , i = e.offsetHeight
      , s = Ns(n) !== o || Ns(r) !== i;
    return s && (n = o,
    r = i),
    {
        width: n,
        height: r,
        fallback: s
    }
}
function hr(e) {
    return zg(e) ? (e.nodeName || "").toLowerCase() : ""
}
let $i;
function Jg() {
    if ($i)
        return $i;
    const e = navigator.userAgentData;
    return e && Array.isArray(e.brands) ? ($i = e.brands.map(t=>t.brand + "/" + t.version).join(" "),
    $i) : navigator.userAgent
}
function wn(e) {
    return e instanceof Wt(e).HTMLElement
}
function cr(e) {
    return e instanceof Wt(e).Element
}
function zg(e) {
    return e instanceof Wt(e).Node
}
function sh(e) {
    return typeof ShadowRoot > "u" ? !1 : e instanceof Wt(e).ShadowRoot || e instanceof ShadowRoot
}
function pa(e) {
    const {overflow: t, overflowX: n, overflowY: r, display: o} = Sn(e);
    return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o)
}
function SC(e) {
    return ["table", "td", "th"].includes(hr(e))
}
function ac(e) {
    const t = /firefox/i.test(Jg())
      , n = Sn(e)
      , r = n.backdropFilter || n.WebkitBackdropFilter;
    return n.transform !== "none" || n.perspective !== "none" || !!r && r !== "none" || t && n.willChange === "filter" || t && !!n.filter && n.filter !== "none" || ["transform", "perspective"].some(o=>n.willChange.includes(o)) || ["paint", "layout", "strict", "content"].some(o=>{
        const i = n.contain;
        return i != null && i.includes(o)
    }
    )
}
function Gg() {
    return !/^((?!chrome|android).)*safari/i.test(Jg())
}
function Eu(e) {
    return ["html", "body", "#document"].includes(hr(e))
}
function Qg(e) {
    return cr(e) ? e : e.contextElement
}
const Xg = {
    x: 1,
    y: 1
};
function ao(e) {
    const t = Qg(e);
    if (!wn(t))
        return Xg;
    const n = t.getBoundingClientRect()
      , {width: r, height: o, fallback: i} = Wg(t);
    let s = (i ? Ns(n.width) : n.width) / r
      , a = (i ? Ns(n.height) : n.height) / o;
    return s && Number.isFinite(s) || (s = 1),
    a && Number.isFinite(a) || (a = 1),
    {
        x: s,
        y: a
    }
}
function hi(e, t, n, r) {
    var o, i;
    t === void 0 && (t = !1),
    n === void 0 && (n = !1);
    const s = e.getBoundingClientRect()
      , a = Qg(e);
    let l = Xg;
    t && (r ? cr(r) && (l = ao(r)) : l = ao(e));
    const c = a ? Wt(a) : window
      , u = !Gg() && n;
    let f = (s.left + (u && ((o = c.visualViewport) == null ? void 0 : o.offsetLeft) || 0)) / l.x
      , d = (s.top + (u && ((i = c.visualViewport) == null ? void 0 : i.offsetTop) || 0)) / l.y
      , m = s.width / l.x
      , _ = s.height / l.y;
    if (a) {
        const b = Wt(a)
          , w = r && cr(r) ? Wt(r) : r;
        let g = b.frameElement;
        for (; g && r && w !== b; ) {
            const E = ao(g)
              , p = g.getBoundingClientRect()
              , y = getComputedStyle(g);
            p.x += (g.clientLeft + parseFloat(y.paddingLeft)) * E.x,
            p.y += (g.clientTop + parseFloat(y.paddingTop)) * E.y,
            f *= E.x,
            d *= E.y,
            m *= E.x,
            _ *= E.y,
            f += p.x,
            d += p.y,
            g = Wt(g).frameElement
        }
    }
    return {
        width: m,
        height: _,
        top: d,
        right: f + m,
        bottom: d + _,
        left: f,
        x: f,
        y: d
    }
}
function ur(e) {
    return ((zg(e) ? e.ownerDocument : e.document) || window.document).documentElement
}
function ma(e) {
    return cr(e) ? {
        scrollLeft: e.scrollLeft,
        scrollTop: e.scrollTop
    } : {
        scrollLeft: e.pageXOffset,
        scrollTop: e.pageYOffset
    }
}
function Zg(e) {
    return hi(ur(e)).left + ma(e).scrollLeft
}
function pi(e) {
    if (hr(e) === "html")
        return e;
    const t = e.assignedSlot || e.parentNode || sh(e) && e.host || ur(e);
    return sh(t) ? t.host : t
}
function $g(e) {
    const t = pi(e);
    return Eu(t) ? t.ownerDocument.body : wn(t) && pa(t) ? t : $g(t)
}
function Ds(e, t) {
    var n;
    t === void 0 && (t = []);
    const r = $g(e)
      , o = r === ((n = e.ownerDocument) == null ? void 0 : n.body)
      , i = Wt(r);
    return o ? t.concat(i, i.visualViewport || [], pa(r) ? r : []) : t.concat(r, Ds(r))
}
function ah(e, t, n) {
    return t === "viewport" ? Yo(function(r, o) {
        const i = Wt(r)
          , s = ur(r)
          , a = i.visualViewport;
        let l = s.clientWidth
          , c = s.clientHeight
          , u = 0
          , f = 0;
        if (a) {
            l = a.width,
            c = a.height;
            const d = Gg();
            (d || !d && o === "fixed") && (u = a.offsetLeft,
            f = a.offsetTop)
        }
        return {
            width: l,
            height: c,
            x: u,
            y: f
        }
    }(e, n)) : cr(t) ? Yo(function(r, o) {
        const i = hi(r, !0, o === "fixed")
          , s = i.top + r.clientTop
          , a = i.left + r.clientLeft
          , l = wn(r) ? ao(r) : {
            x: 1,
            y: 1
        };
        return {
            width: r.clientWidth * l.x,
            height: r.clientHeight * l.y,
            x: a * l.x,
            y: s * l.y
        }
    }(t, n)) : Yo(function(r) {
        const o = ur(r)
          , i = ma(r)
          , s = r.ownerDocument.body
          , a = Wo(o.scrollWidth, o.clientWidth, s.scrollWidth, s.clientWidth)
          , l = Wo(o.scrollHeight, o.clientHeight, s.scrollHeight, s.clientHeight);
        let c = -i.scrollLeft + Zg(r);
        const u = -i.scrollTop;
        return Sn(s).direction === "rtl" && (c += Wo(o.clientWidth, s.clientWidth) - a),
        {
            width: a,
            height: l,
            x: c,
            y: u
        }
    }(ur(e)))
}
function lh(e) {
    return wn(e) && Sn(e).position !== "fixed" ? e.offsetParent : null
}
function ch(e) {
    const t = Wt(e);
    let n = lh(e);
    for (; n && SC(n) && Sn(n).position === "static"; )
        n = lh(n);
    return n && (hr(n) === "html" || hr(n) === "body" && Sn(n).position === "static" && !ac(n)) ? t : n || function(r) {
        let o = pi(r);
        for (; wn(o) && !Eu(o); ) {
            if (ac(o))
                return o;
            o = pi(o)
        }
        return null
    }(e) || t
}
function wC(e, t, n) {
    const r = wn(t)
      , o = ur(t)
      , i = hi(e, !0, n === "fixed", t);
    let s = {
        scrollLeft: 0,
        scrollTop: 0
    };
    const a = {
        x: 0,
        y: 0
    };
    if (r || !r && n !== "fixed")
        if ((hr(t) !== "body" || pa(o)) && (s = ma(t)),
        wn(t)) {
            const l = hi(t, !0);
            a.x = l.x + t.clientLeft,
            a.y = l.y + t.clientTop
        } else
            o && (a.x = Zg(o));
    return {
        x: i.left + s.scrollLeft - a.x,
        y: i.top + s.scrollTop - a.y,
        width: i.width,
        height: i.height
    }
}
const TC = {
    getClippingRect: function(e) {
        let {element: t, boundary: n, rootBoundary: r, strategy: o} = e;
        const i = n === "clippingAncestors" ? function(c, u) {
            const f = u.get(c);
            if (f)
                return f;
            let d = Ds(c).filter(w=>cr(w) && hr(w) !== "body")
              , m = null;
            const _ = Sn(c).position === "fixed";
            let b = _ ? pi(c) : c;
            for (; cr(b) && !Eu(b); ) {
                const w = Sn(b)
                  , g = ac(b);
                (_ ? g || m : g || w.position !== "static" || !m || !["absolute", "fixed"].includes(m.position)) ? m = w : d = d.filter(E=>E !== b),
                b = pi(b)
            }
            return u.set(c, d),
            d
        }(t, this._c) : [].concat(n)
          , s = [...i, r]
          , a = s[0]
          , l = s.reduce((c,u)=>{
            const f = ah(t, u, o);
            return c.top = Wo(f.top, c.top),
            c.right = ih(f.right, c.right),
            c.bottom = ih(f.bottom, c.bottom),
            c.left = Wo(f.left, c.left),
            c
        }
        , ah(t, a, o));
        return {
            width: l.right - l.left,
            height: l.bottom - l.top,
            x: l.left,
            y: l.top
        }
    },
    convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
        let {rect: t, offsetParent: n, strategy: r} = e;
        const o = wn(n)
          , i = ur(n);
        if (n === i)
            return t;
        let s = {
            scrollLeft: 0,
            scrollTop: 0
        }
          , a = {
            x: 1,
            y: 1
        };
        const l = {
            x: 0,
            y: 0
        };
        if ((o || !o && r !== "fixed") && ((hr(n) !== "body" || pa(i)) && (s = ma(n)),
        wn(n))) {
            const c = hi(n);
            a = ao(n),
            l.x = c.x + n.clientLeft,
            l.y = c.y + n.clientTop
        }
        return {
            width: t.width * a.x,
            height: t.height * a.y,
            x: t.x * a.x - s.scrollLeft * a.x + l.x,
            y: t.y * a.y - s.scrollTop * a.y + l.y
        }
    },
    isElement: cr,
    getDimensions: function(e) {
        return wn(e) ? Wg(e) : e.getBoundingClientRect()
    },
    getOffsetParent: ch,
    getDocumentElement: ur,
    getScale: ao,
    async getElementRects(e) {
        let {reference: t, floating: n, strategy: r} = e;
        const o = this.getOffsetParent || ch
          , i = this.getDimensions;
        return {
            reference: wC(t, await o(n), r),
            floating: {
                x: 0,
                y: 0,
                ...await i(n)
            }
        }
    },
    getClientRects: e=>Array.from(e.getClientRects()),
    isRTL: e=>Sn(e).direction === "rtl"
}
  , kC = (e,t,n)=>{
    const r = new Map
      , o = {
        platform: TC,
        ...n
    }
      , i = {
        ...o.platform,
        _c: r
    };
    return hC(e, t, {
        ...o,
        platform: i
    })
}
;
function ey(e, t) {
    for (const n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (typeof t[n] == "object" && e[n] ? ey(e[n], t[n]) : e[n] = t[n])
}
const rn = {
    disabled: !1,
    distance: 5,
    skidding: 0,
    container: "body",
    boundary: void 0,
    instantMove: !1,
    disposeTimeout: 150,
    popperTriggers: [],
    strategy: "absolute",
    preventOverflow: !0,
    flip: !0,
    shift: !0,
    overflowPadding: 0,
    arrowPadding: 0,
    arrowOverflow: !0,
    autoHideOnMousedown: !1,
    themes: {
        tooltip: {
            placement: "top",
            triggers: ["hover", "focus", "touch"],
            hideTriggers: e=>[...e, "click"],
            delay: {
                show: 200,
                hide: 0
            },
            handleResize: !1,
            html: !1,
            loadingContent: "..."
        },
        dropdown: {
            placement: "bottom",
            triggers: ["click"],
            delay: 0,
            handleResize: !0,
            autoHide: !0
        },
        menu: {
            $extend: "dropdown",
            triggers: ["hover", "focus"],
            popperTriggers: ["hover"],
            delay: {
                show: 0,
                hide: 400
            }
        }
    }
};
function mi(e, t) {
    let n = rn.themes[e] || {}, r;
    do
        r = n[t],
        typeof r > "u" ? n.$extend ? n = rn.themes[n.$extend] || {} : (n = null,
        r = rn[t]) : n = null;
    while (n);
    return r
}
function AC(e) {
    const t = [e];
    let n = rn.themes[e] || {};
    do
        n.$extend && !n.$resetCss ? (t.push(n.$extend),
        n = rn.themes[n.$extend] || {}) : n = null;
    while (n);
    return t.map(r=>`v-popper--theme-${r}`)
}
function uh(e) {
    const t = [e];
    let n = rn.themes[e] || {};
    do
        n.$extend ? (t.push(n.$extend),
        n = rn.themes[n.$extend] || {}) : n = null;
    while (n);
    return t
}
let bo = !1;
if (typeof window < "u") {
    bo = !1;
    try {
        const e = Object.defineProperty({}, "passive", {
            get() {
                bo = !0
            }
        });
        window.addEventListener("test", null, e)
    } catch {}
}
let ty = !1;
typeof window < "u" && typeof navigator < "u" && (ty = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream);
const ny = ["auto", "top", "bottom", "left", "right"].reduce((e,t)=>e.concat([t, `${t}-start`, `${t}-end`]), [])
  , fh = {
    hover: "mouseenter",
    focus: "focus",
    click: "click",
    touch: "touchstart",
    pointer: "pointerdown"
}
  , dh = {
    hover: "mouseleave",
    focus: "blur",
    click: "click",
    touch: "touchend",
    pointer: "pointerup"
};
function hh(e, t) {
    const n = e.indexOf(t);
    n !== -1 && e.splice(n, 1)
}
function Ja() {
    return new Promise(e=>requestAnimationFrame(()=>{
        requestAnimationFrame(e)
    }
    ))
}
const tn = [];
let Sr = null;
const ph = {};
function mh(e) {
    let t = ph[e];
    return t || (t = ph[e] = []),
    t
}
let lc = function() {};
typeof window < "u" && (lc = window.Element);
function Se(e) {
    return function(t) {
        return mi(t.theme, e)
    }
}
const za = "__floating-vue__popper"
  , ry = ()=>Te({
    name: "VPopper",
    provide() {
        return {
            [za]: {
                parentPopper: this
            }
        }
    },
    inject: {
        [za]: {
            default: null
        }
    },
    props: {
        theme: {
            type: String,
            required: !0
        },
        targetNodes: {
            type: Function,
            required: !0
        },
        referenceNode: {
            type: Function,
            default: null
        },
        popperNode: {
            type: Function,
            required: !0
        },
        shown: {
            type: Boolean,
            default: !1
        },
        showGroup: {
            type: String,
            default: null
        },
        ariaId: {
            default: null
        },
        disabled: {
            type: Boolean,
            default: Se("disabled")
        },
        positioningDisabled: {
            type: Boolean,
            default: Se("positioningDisabled")
        },
        placement: {
            type: String,
            default: Se("placement"),
            validator: e=>ny.includes(e)
        },
        delay: {
            type: [String, Number, Object],
            default: Se("delay")
        },
        distance: {
            type: [Number, String],
            default: Se("distance")
        },
        skidding: {
            type: [Number, String],
            default: Se("skidding")
        },
        triggers: {
            type: Array,
            default: Se("triggers")
        },
        showTriggers: {
            type: [Array, Function],
            default: Se("showTriggers")
        },
        hideTriggers: {
            type: [Array, Function],
            default: Se("hideTriggers")
        },
        popperTriggers: {
            type: Array,
            default: Se("popperTriggers")
        },
        popperShowTriggers: {
            type: [Array, Function],
            default: Se("popperShowTriggers")
        },
        popperHideTriggers: {
            type: [Array, Function],
            default: Se("popperHideTriggers")
        },
        container: {
            type: [String, Object, lc, Boolean],
            default: Se("container")
        },
        boundary: {
            type: [String, lc],
            default: Se("boundary")
        },
        strategy: {
            type: String,
            validator: e=>["absolute", "fixed"].includes(e),
            default: Se("strategy")
        },
        autoHide: {
            type: [Boolean, Function],
            default: Se("autoHide")
        },
        handleResize: {
            type: Boolean,
            default: Se("handleResize")
        },
        instantMove: {
            type: Boolean,
            default: Se("instantMove")
        },
        eagerMount: {
            type: Boolean,
            default: Se("eagerMount")
        },
        popperClass: {
            type: [String, Array, Object],
            default: Se("popperClass")
        },
        computeTransformOrigin: {
            type: Boolean,
            default: Se("computeTransformOrigin")
        },
        autoMinSize: {
            type: Boolean,
            default: Se("autoMinSize")
        },
        autoSize: {
            type: [Boolean, String],
            default: Se("autoSize")
        },
        autoMaxSize: {
            type: Boolean,
            default: Se("autoMaxSize")
        },
        autoBoundaryMaxSize: {
            type: Boolean,
            default: Se("autoBoundaryMaxSize")
        },
        preventOverflow: {
            type: Boolean,
            default: Se("preventOverflow")
        },
        overflowPadding: {
            type: [Number, String],
            default: Se("overflowPadding")
        },
        arrowPadding: {
            type: [Number, String],
            default: Se("arrowPadding")
        },
        arrowOverflow: {
            type: Boolean,
            default: Se("arrowOverflow")
        },
        flip: {
            type: Boolean,
            default: Se("flip")
        },
        shift: {
            type: Boolean,
            default: Se("shift")
        },
        shiftCrossAxis: {
            type: Boolean,
            default: Se("shiftCrossAxis")
        },
        noAutoFocus: {
            type: Boolean,
            default: Se("noAutoFocus")
        },
        disposeTimeout: {
            type: Number,
            default: Se("disposeTimeout")
        }
    },
    emits: {
        show: ()=>!0,
        hide: ()=>!0,
        "update:shown": e=>!0,
        "apply-show": ()=>!0,
        "apply-hide": ()=>!0,
        "close-group": ()=>!0,
        "close-directive": ()=>!0,
        "auto-hide": ()=>!0,
        resize: ()=>!0
    },
    data() {
        return {
            isShown: !1,
            isMounted: !1,
            skipTransition: !1,
            classes: {
                showFrom: !1,
                showTo: !1,
                hideFrom: !1,
                hideTo: !0
            },
            result: {
                x: 0,
                y: 0,
                placement: "",
                strategy: this.strategy,
                arrow: {
                    x: 0,
                    y: 0,
                    centerOffset: 0
                },
                transformOrigin: null
            },
            randomId: `popper_${[Math.random(), Date.now()].map(e=>e.toString(36).substring(2, 10)).join("_")}`,
            shownChildren: new Set,
            lastAutoHide: !0,
            pendingHide: !1,
            containsGlobalTarget: !1,
            isDisposed: !0,
            mouseDownContains: !1
        }
    },
    computed: {
        popperId() {
            return this.ariaId != null ? this.ariaId : this.randomId
        },
        shouldMountContent() {
            return this.eagerMount || this.isMounted
        },
        slotData() {
            return {
                popperId: this.popperId,
                isShown: this.isShown,
                shouldMountContent: this.shouldMountContent,
                skipTransition: this.skipTransition,
                autoHide: typeof this.autoHide == "function" ? this.lastAutoHide : this.autoHide,
                show: this.show,
                hide: this.hide,
                handleResize: this.handleResize,
                onResize: this.onResize,
                classes: {
                    ...this.classes,
                    popperClass: this.popperClass
                },
                result: this.positioningDisabled ? null : this.result,
                attrs: this.$attrs
            }
        },
        parentPopper() {
            var e;
            return (e = this[za]) == null ? void 0 : e.parentPopper
        },
        hasPopperShowTriggerHover() {
            var e, t;
            return ((e = this.popperTriggers) == null ? void 0 : e.includes("hover")) || ((t = this.popperShowTriggers) == null ? void 0 : t.includes("hover"))
        }
    },
    watch: {
        shown: "$_autoShowHide",
        disabled(e) {
            e ? this.dispose() : this.init()
        },
        async container() {
            this.isShown && (this.$_ensureTeleport(),
            await this.$_computePosition())
        },
        triggers: {
            handler: "$_refreshListeners",
            deep: !0
        },
        positioningDisabled: "$_refreshListeners",
        ...["placement", "distance", "skidding", "boundary", "strategy", "overflowPadding", "arrowPadding", "preventOverflow", "shift", "shiftCrossAxis", "flip"].reduce((e,t)=>(e[t] = "$_computePosition",
        e), {})
    },
    created() {
        this.autoMinSize && console.warn('[floating-vue] `autoMinSize` option is deprecated. Use `autoSize="min"` instead.'),
        this.autoMaxSize && console.warn("[floating-vue] `autoMaxSize` option is deprecated. Use `autoBoundaryMaxSize` instead.")
    },
    mounted() {
        this.init(),
        this.$_detachPopperNode()
    },
    activated() {
        this.$_autoShowHide()
    },
    deactivated() {
        this.hide()
    },
    beforeUnmount() {
        this.dispose()
    },
    methods: {
        show({event: e=null, skipDelay: t=!1, force: n=!1}={}) {
            var r, o;
            (r = this.parentPopper) != null && r.lockedChild && this.parentPopper.lockedChild !== this || (this.pendingHide = !1,
            (n || !this.disabled) && (((o = this.parentPopper) == null ? void 0 : o.lockedChild) === this && (this.parentPopper.lockedChild = null),
            this.$_scheduleShow(e, t),
            this.$emit("show"),
            this.$_showFrameLocked = !0,
            requestAnimationFrame(()=>{
                this.$_showFrameLocked = !1
            }
            )),
            this.$emit("update:shown", !0))
        },
        hide({event: e=null, skipDelay: t=!1}={}) {
            var n;
            if (!this.$_hideInProgress) {
                if (this.shownChildren.size > 0) {
                    this.pendingHide = !0;
                    return
                }
                if (this.hasPopperShowTriggerHover && this.$_isAimingPopper()) {
                    this.parentPopper && (this.parentPopper.lockedChild = this,
                    clearTimeout(this.parentPopper.lockedChildTimer),
                    this.parentPopper.lockedChildTimer = setTimeout(()=>{
                        this.parentPopper.lockedChild === this && (this.parentPopper.lockedChild.hide({
                            skipDelay: t
                        }),
                        this.parentPopper.lockedChild = null)
                    }
                    , 1e3));
                    return
                }
                ((n = this.parentPopper) == null ? void 0 : n.lockedChild) === this && (this.parentPopper.lockedChild = null),
                this.pendingHide = !1,
                this.$_scheduleHide(e, t),
                this.$emit("hide"),
                this.$emit("update:shown", !1)
            }
        },
        init() {
            var e;
            this.isDisposed && (this.isDisposed = !1,
            this.isMounted = !1,
            this.$_events = [],
            this.$_preventShow = !1,
            this.$_referenceNode = ((e = this.referenceNode) == null ? void 0 : e.call(this)) ?? this.$el,
            this.$_targetNodes = this.targetNodes().filter(t=>t.nodeType === t.ELEMENT_NODE),
            this.$_popperNode = this.popperNode(),
            this.$_innerNode = this.$_popperNode.querySelector(".v-popper__inner"),
            this.$_arrowNode = this.$_popperNode.querySelector(".v-popper__arrow-container"),
            this.$_swapTargetAttrs("title", "data-original-title"),
            this.$_detachPopperNode(),
            this.triggers.length && this.$_addEventListeners(),
            this.shown && this.show())
        },
        dispose() {
            this.isDisposed || (this.isDisposed = !0,
            this.$_removeEventListeners(),
            this.hide({
                skipDelay: !0
            }),
            this.$_detachPopperNode(),
            this.isMounted = !1,
            this.isShown = !1,
            this.$_updateParentShownChildren(!1),
            this.$_swapTargetAttrs("data-original-title", "title"))
        },
        async onResize() {
            this.isShown && (await this.$_computePosition(),
            this.$emit("resize"))
        },
        async $_computePosition() {
            if (this.isDisposed || this.positioningDisabled)
                return;
            const e = {
                strategy: this.strategy,
                middleware: []
            };
            (this.distance || this.skidding) && e.middleware.push(_C({
                mainAxis: this.distance,
                crossAxis: this.skidding
            }));
            const t = this.placement.startsWith("auto");
            if (t ? e.middleware.push(gC({
                alignment: this.placement.split("-")[1] ?? ""
            })) : e.placement = this.placement,
            this.preventOverflow && (this.shift && e.middleware.push(bC({
                padding: this.overflowPadding,
                boundary: this.boundary,
                crossAxis: this.shiftCrossAxis
            })),
            !t && this.flip && e.middleware.push(yC({
                padding: this.overflowPadding,
                boundary: this.boundary
            }))),
            e.middleware.push(pC({
                element: this.$_arrowNode,
                padding: this.arrowPadding
            })),
            this.arrowOverflow && e.middleware.push({
                name: "arrowOverflow",
                fn: ({placement: r, rects: o, middlewareData: i})=>{
                    let s;
                    const {centerOffset: a} = i.arrow;
                    return r.startsWith("top") || r.startsWith("bottom") ? s = Math.abs(a) > o.reference.width / 2 : s = Math.abs(a) > o.reference.height / 2,
                    {
                        data: {
                            overflow: s
                        }
                    }
                }
            }),
            this.autoMinSize || this.autoSize) {
                const r = this.autoSize ? this.autoSize : this.autoMinSize ? "min" : null;
                e.middleware.push({
                    name: "autoSize",
                    fn: ({rects: o, placement: i, middlewareData: s})=>{
                        var a;
                        if ((a = s.autoSize) != null && a.skip)
                            return {};
                        let l, c;
                        return i.startsWith("top") || i.startsWith("bottom") ? l = o.reference.width : c = o.reference.height,
                        this.$_innerNode.style[r === "min" ? "minWidth" : r === "max" ? "maxWidth" : "width"] = l != null ? `${l}px` : null,
                        this.$_innerNode.style[r === "min" ? "minHeight" : r === "max" ? "maxHeight" : "height"] = c != null ? `${c}px` : null,
                        {
                            data: {
                                skip: !0
                            },
                            reset: {
                                rects: !0
                            }
                        }
                    }
                })
            }
            (this.autoMaxSize || this.autoBoundaryMaxSize) && (this.$_innerNode.style.maxWidth = null,
            this.$_innerNode.style.maxHeight = null,
            e.middleware.push(EC({
                boundary: this.boundary,
                padding: this.overflowPadding,
                apply: ({availableWidth: r, availableHeight: o})=>{
                    this.$_innerNode.style.maxWidth = r != null ? `${r}px` : null,
                    this.$_innerNode.style.maxHeight = o != null ? `${o}px` : null
                }
            })));
            const n = await kC(this.$_referenceNode, this.$_popperNode, e);
            Object.assign(this.result, {
                x: n.x,
                y: n.y,
                placement: n.placement,
                strategy: n.strategy,
                arrow: {
                    ...n.middlewareData.arrow,
                    ...n.middlewareData.arrowOverflow
                }
            })
        },
        $_scheduleShow(e, t=!1) {
            if (this.$_updateParentShownChildren(!0),
            this.$_hideInProgress = !1,
            clearTimeout(this.$_scheduleTimer),
            Sr && this.instantMove && Sr.instantMove && Sr !== this.parentPopper) {
                Sr.$_applyHide(!0),
                this.$_applyShow(!0);
                return
            }
            t ? this.$_applyShow() : this.$_scheduleTimer = setTimeout(this.$_applyShow.bind(this), this.$_computeDelay("show"))
        },
        $_scheduleHide(e, t=!1) {
            if (this.shownChildren.size > 0) {
                this.pendingHide = !0;
                return
            }
            this.$_updateParentShownChildren(!1),
            this.$_hideInProgress = !0,
            clearTimeout(this.$_scheduleTimer),
            this.isShown && (Sr = this),
            t ? this.$_applyHide() : this.$_scheduleTimer = setTimeout(this.$_applyHide.bind(this), this.$_computeDelay("hide"))
        },
        $_computeDelay(e) {
            const t = this.delay;
            return parseInt(t && t[e] || t || 0)
        },
        async $_applyShow(e=!1) {
            clearTimeout(this.$_disposeTimer),
            clearTimeout(this.$_scheduleTimer),
            this.skipTransition = e,
            !this.isShown && (this.$_ensureTeleport(),
            await Ja(),
            await this.$_computePosition(),
            await this.$_applyShowEffect(),
            this.positioningDisabled || this.$_registerEventListeners([...Ds(this.$_referenceNode), ...Ds(this.$_popperNode)], "scroll", ()=>{
                this.$_computePosition()
            }
            ))
        },
        async $_applyShowEffect() {
            if (this.$_hideInProgress)
                return;
            if (this.computeTransformOrigin) {
                const t = this.$_referenceNode.getBoundingClientRect()
                  , n = this.$_popperNode.querySelector(".v-popper__wrapper")
                  , r = n.parentNode.getBoundingClientRect()
                  , o = t.x + t.width / 2 - (r.left + n.offsetLeft)
                  , i = t.y + t.height / 2 - (r.top + n.offsetTop);
                this.result.transformOrigin = `${o}px ${i}px`
            }
            this.isShown = !0,
            this.$_applyAttrsToTarget({
                "aria-describedby": this.popperId,
                "data-popper-shown": ""
            });
            const e = this.showGroup;
            if (e) {
                let t;
                for (let n = 0; n < tn.length; n++)
                    t = tn[n],
                    t.showGroup !== e && (t.hide(),
                    t.$emit("close-group"))
            }
            tn.push(this),
            document.body.classList.add("v-popper--some-open");
            for (const t of uh(this.theme))
                mh(t).push(this),
                document.body.classList.add(`v-popper--some-open--${t}`);
            this.$emit("apply-show"),
            this.classes.showFrom = !0,
            this.classes.showTo = !1,
            this.classes.hideFrom = !1,
            this.classes.hideTo = !1,
            await Ja(),
            this.classes.showFrom = !1,
            this.classes.showTo = !0,
            this.noAutoFocus || this.$_popperNode.focus()
        },
        async $_applyHide(e=!1) {
            if (this.shownChildren.size > 0) {
                this.pendingHide = !0,
                this.$_hideInProgress = !1;
                return
            }
            if (clearTimeout(this.$_scheduleTimer),
            !this.isShown)
                return;
            this.skipTransition = e,
            hh(tn, this),
            tn.length === 0 && document.body.classList.remove("v-popper--some-open");
            for (const n of uh(this.theme)) {
                const r = mh(n);
                hh(r, this),
                r.length === 0 && document.body.classList.remove(`v-popper--some-open--${n}`)
            }
            Sr === this && (Sr = null),
            this.isShown = !1,
            this.$_applyAttrsToTarget({
                "aria-describedby": void 0,
                "data-popper-shown": void 0
            }),
            clearTimeout(this.$_disposeTimer);
            const t = this.disposeTimeout;
            t !== null && (this.$_disposeTimer = setTimeout(()=>{
                this.$_popperNode && (this.$_detachPopperNode(),
                this.isMounted = !1)
            }
            , t)),
            this.$_removeEventListeners("scroll"),
            this.$emit("apply-hide"),
            this.classes.showFrom = !1,
            this.classes.showTo = !1,
            this.classes.hideFrom = !0,
            this.classes.hideTo = !1,
            await Ja(),
            this.classes.hideFrom = !1,
            this.classes.hideTo = !0
        },
        $_autoShowHide() {
            this.shown ? this.show() : this.hide()
        },
        $_ensureTeleport() {
            if (this.isDisposed)
                return;
            let e = this.container;
            if (typeof e == "string" ? e = window.document.querySelector(e) : e === !1 && (e = this.$_targetNodes[0].parentNode),
            !e)
                throw new Error("No container for popover: " + this.container);
            e.appendChild(this.$_popperNode),
            this.isMounted = !0
        },
        $_addEventListeners() {
            const e = n=>{
                this.isShown && !this.$_hideInProgress || (n.usedByTooltip = !0,
                !this.$_preventShow && this.show({
                    event: n
                }))
            }
            ;
            this.$_registerTriggerListeners(this.$_targetNodes, fh, this.triggers, this.showTriggers, e),
            this.$_registerTriggerListeners([this.$_popperNode], fh, this.popperTriggers, this.popperShowTriggers, e);
            const t = n=>{
                n.usedByTooltip || this.hide({
                    event: n
                })
            }
            ;
            this.$_registerTriggerListeners(this.$_targetNodes, dh, this.triggers, this.hideTriggers, t),
            this.$_registerTriggerListeners([this.$_popperNode], dh, this.popperTriggers, this.popperHideTriggers, t)
        },
        $_registerEventListeners(e, t, n) {
            this.$_events.push({
                targetNodes: e,
                eventType: t,
                handler: n
            }),
            e.forEach(r=>r.addEventListener(t, n, bo ? {
                passive: !0
            } : void 0))
        },
        $_registerTriggerListeners(e, t, n, r, o) {
            let i = n;
            r != null && (i = typeof r == "function" ? r(i) : r),
            i.forEach(s=>{
                const a = t[s];
                a && this.$_registerEventListeners(e, a, o)
            }
            )
        },
        $_removeEventListeners(e) {
            const t = [];
            this.$_events.forEach(n=>{
                const {targetNodes: r, eventType: o, handler: i} = n;
                !e || e === o ? r.forEach(s=>s.removeEventListener(o, i)) : t.push(n)
            }
            ),
            this.$_events = t
        },
        $_refreshListeners() {
            this.isDisposed || (this.$_removeEventListeners(),
            this.$_addEventListeners())
        },
        $_handleGlobalClose(e, t=!1) {
            this.$_showFrameLocked || (this.hide({
                event: e
            }),
            e.closePopover ? this.$emit("close-directive") : this.$emit("auto-hide"),
            t && (this.$_preventShow = !0,
            setTimeout(()=>{
                this.$_preventShow = !1
            }
            , 300)))
        },
        $_detachPopperNode() {
            this.$_popperNode.parentNode && this.$_popperNode.parentNode.removeChild(this.$_popperNode)
        },
        $_swapTargetAttrs(e, t) {
            for (const n of this.$_targetNodes) {
                const r = n.getAttribute(e);
                r && (n.removeAttribute(e),
                n.setAttribute(t, r))
            }
        },
        $_applyAttrsToTarget(e) {
            for (const t of this.$_targetNodes)
                for (const n in e) {
                    const r = e[n];
                    r == null ? t.removeAttribute(n) : t.setAttribute(n, r)
                }
        },
        $_updateParentShownChildren(e) {
            let t = this.parentPopper;
            for (; t; )
                e ? t.shownChildren.add(this.randomId) : (t.shownChildren.delete(this.randomId),
                t.pendingHide && t.hide()),
                t = t.parentPopper
        },
        $_isAimingPopper() {
            const e = this.$_referenceNode.getBoundingClientRect();
            if (Jo >= e.left && Jo <= e.right && zo >= e.top && zo <= e.bottom) {
                const t = this.$_popperNode.getBoundingClientRect()
                  , n = Jo - Qn
                  , r = zo - Xn
                  , o = t.left + t.width / 2 - Qn + (t.top + t.height / 2) - Xn + t.width + t.height
                  , i = Qn + n * o
                  , s = Xn + r * o;
                return es(Qn, Xn, i, s, t.left, t.top, t.left, t.bottom) || es(Qn, Xn, i, s, t.left, t.top, t.right, t.top) || es(Qn, Xn, i, s, t.right, t.top, t.right, t.bottom) || es(Qn, Xn, i, s, t.left, t.bottom, t.right, t.bottom)
            }
            return !1
        }
    },
    render() {
        return this.$slots.default(this.slotData)
    }
});
if (typeof document < "u" && typeof window < "u") {
    if (ty) {
        const e = bo ? {
            passive: !0,
            capture: !0
        } : !0;
        document.addEventListener("touchstart", t=>gh(t, !0), e),
        document.addEventListener("touchend", t=>yh(t, !0), e)
    } else
        window.addEventListener("mousedown", e=>gh(e, !1), !0),
        window.addEventListener("click", e=>yh(e, !1), !0);
    window.addEventListener("resize", CC)
}
function gh(e, t) {
    if (rn.autoHideOnMousedown)
        oy(e, t);
    else
        for (let n = 0; n < tn.length; n++) {
            const r = tn[n];
            try {
                r.mouseDownContains = r.popperNode().contains(e.target)
            } catch {}
        }
}
function yh(e, t) {
    rn.autoHideOnMousedown || oy(e, t)
}
function oy(e, t) {
    const n = {};
    for (let r = tn.length - 1; r >= 0; r--) {
        const o = tn[r];
        try {
            const i = o.containsGlobalTarget = o.mouseDownContains || o.popperNode().contains(e.target);
            o.pendingHide = !1,
            requestAnimationFrame(()=>{
                if (o.pendingHide = !1,
                !n[o.randomId] && vh(o, i, e)) {
                    if (o.$_handleGlobalClose(e, t),
                    !e.closeAllPopover && e.closePopover && i) {
                        let a = o.parentPopper;
                        for (; a; )
                            n[a.randomId] = !0,
                            a = a.parentPopper;
                        return
                    }
                    let s = o.parentPopper;
                    for (; s && vh(s, s.containsGlobalTarget, e); )
                        s.$_handleGlobalClose(e, t),
                        s = s.parentPopper
                }
            }
            )
        } catch {}
    }
}
function vh(e, t, n) {
    return n.closeAllPopover || n.closePopover && t || LC(e, n) && !t
}
function LC(e, t) {
    if (typeof e.autoHide == "function") {
        const n = e.autoHide(t);
        return e.lastAutoHide = n,
        n
    }
    return e.autoHide
}
function CC() {
    for (let e = 0; e < tn.length; e++)
        tn[e].$_computePosition()
}
let Qn = 0
  , Xn = 0
  , Jo = 0
  , zo = 0;
typeof window < "u" && window.addEventListener("mousemove", e=>{
    Qn = Jo,
    Xn = zo,
    Jo = e.clientX,
    zo = e.clientY
}
, bo ? {
    passive: !0
} : void 0);
function es(e, t, n, r, o, i, s, a) {
    const l = ((s - o) * (t - i) - (a - i) * (e - o)) / ((a - i) * (n - e) - (s - o) * (r - t))
      , c = ((n - e) * (t - i) - (r - t) * (e - o)) / ((a - i) * (n - e) - (s - o) * (r - t));
    return l >= 0 && l <= 1 && c >= 0 && c <= 1
}
const OC = {
    extends: ry()
}
  , ga = (e,t)=>{
    const n = e.__vccOpts || e;
    for (const [r,o] of t)
        n[r] = o;
    return n
}
;
function RC(e, t, n, r, o, i) {
    return he(),
    Ye("div", {
        ref: "reference",
        class: kt(["v-popper", {
            "v-popper--shown": e.slotData.isShown
        }])
    }, [dr(e.$slots, "default", zt(Ut(e.slotData)))], 2)
}
const PC = ga(OC, [["render", RC]]);
function IC() {
    var e = window.navigator.userAgent
      , t = e.indexOf("MSIE ");
    if (t > 0)
        return parseInt(e.substring(t + 5, e.indexOf(".", t)), 10);
    var n = e.indexOf("Trident/");
    if (n > 0) {
        var r = e.indexOf("rv:");
        return parseInt(e.substring(r + 3, e.indexOf(".", r)), 10)
    }
    var o = e.indexOf("Edge/");
    return o > 0 ? parseInt(e.substring(o + 5, e.indexOf(".", o)), 10) : -1
}
let us;
function cc() {
    cc.init || (cc.init = !0,
    us = IC() !== -1)
}
var ya = {
    name: "ResizeObserver",
    props: {
        emitOnMount: {
            type: Boolean,
            default: !1
        },
        ignoreWidth: {
            type: Boolean,
            default: !1
        },
        ignoreHeight: {
            type: Boolean,
            default: !1
        }
    },
    emits: ["notify"],
    mounted() {
        cc(),
        Ft(()=>{
            this._w = this.$el.offsetWidth,
            this._h = this.$el.offsetHeight,
            this.emitOnMount && this.emitSize()
        }
        );
        const e = document.createElement("object");
        this._resizeObject = e,
        e.setAttribute("aria-hidden", "true"),
        e.setAttribute("tabindex", -1),
        e.onload = this.addResizeHandlers,
        e.type = "text/html",
        us && this.$el.appendChild(e),
        e.data = "about:blank",
        us || this.$el.appendChild(e)
    },
    beforeUnmount() {
        this.removeResizeHandlers()
    },
    methods: {
        compareAndNotify() {
            (!this.ignoreWidth && this._w !== this.$el.offsetWidth || !this.ignoreHeight && this._h !== this.$el.offsetHeight) && (this._w = this.$el.offsetWidth,
            this._h = this.$el.offsetHeight,
            this.emitSize())
        },
        emitSize() {
            this.$emit("notify", {
                width: this._w,
                height: this._h
            })
        },
        addResizeHandlers() {
            this._resizeObject.contentDocument.defaultView.addEventListener("resize", this.compareAndNotify),
            this.compareAndNotify()
        },
        removeResizeHandlers() {
            this._resizeObject && this._resizeObject.onload && (!us && this._resizeObject.contentDocument && this._resizeObject.contentDocument.defaultView.removeEventListener("resize", this.compareAndNotify),
            this.$el.removeChild(this._resizeObject),
            this._resizeObject.onload = null,
            this._resizeObject = null)
        }
    }
};
const MC = tv();
$0("data-v-b329ee4c");
const NC = {
    class: "resize-observer",
    tabindex: "-1"
};
ev();
const DC = MC((e,t,n,r,o,i)=>(he(),
ht("div", NC)));
ya.render = DC;
ya.__scopeId = "data-v-b329ee4c";
ya.__file = "src/components/ResizeObserver.vue";
const iy = (e="theme")=>({
    computed: {
        themeClass() {
            return AC(this[e])
        }
    }
})
  , xC = Te({
    name: "VPopperContent",
    components: {
        ResizeObserver: ya
    },
    mixins: [iy()],
    props: {
        popperId: String,
        theme: String,
        shown: Boolean,
        mounted: Boolean,
        skipTransition: Boolean,
        autoHide: Boolean,
        handleResize: Boolean,
        classes: Object,
        result: Object
    },
    emits: ["hide", "resize"],
    methods: {
        toPx(e) {
            return e != null && !isNaN(e) ? `${e}px` : null
        }
    }
})
  , FC = ["id", "aria-hidden", "tabindex", "data-popper-placement"]
  , UC = {
    ref: "inner",
    class: "v-popper__inner"
}
  , VC = de("div", {
    class: "v-popper__arrow-outer"
}, null, -1)
  , BC = de("div", {
    class: "v-popper__arrow-inner"
}, null, -1)
  , HC = [VC, BC];
function jC(e, t, n, r, o, i) {
    const s = Fr("ResizeObserver");
    return he(),
    Ye("div", {
        id: e.popperId,
        ref: "popover",
        class: kt(["v-popper__popper", [e.themeClass, e.classes.popperClass, {
            "v-popper__popper--shown": e.shown,
            "v-popper__popper--hidden": !e.shown,
            "v-popper__popper--show-from": e.classes.showFrom,
            "v-popper__popper--show-to": e.classes.showTo,
            "v-popper__popper--hide-from": e.classes.hideFrom,
            "v-popper__popper--hide-to": e.classes.hideTo,
            "v-popper__popper--skip-transition": e.skipTransition,
            "v-popper__popper--arrow-overflow": e.result && e.result.arrow.overflow,
            "v-popper__popper--no-positioning": !e.result
        }]]),
        style: En(e.result ? {
            position: e.result.strategy,
            transform: `translate3d(${Math.round(e.result.x)}px,${Math.round(e.result.y)}px,0)`
        } : void 0),
        "aria-hidden": e.shown ? "false" : "true",
        tabindex: e.autoHide ? 0 : void 0,
        "data-popper-placement": e.result ? e.result.placement : void 0,
        onKeyup: t[2] || (t[2] = F_(a=>e.autoHide && e.$emit("hide"), ["esc"]))
    }, [de("div", {
        class: "v-popper__backdrop",
        onClick: t[0] || (t[0] = a=>e.autoHide && e.$emit("hide"))
    }), de("div", {
        class: "v-popper__wrapper",
        style: En(e.result ? {
            transformOrigin: e.result.transformOrigin
        } : void 0)
    }, [de("div", UC, [e.mounted ? (he(),
    Ye(ct, {
        key: 0
    }, [de("div", null, [dr(e.$slots, "default")]), e.handleResize ? (he(),
    ht(s, {
        key: 0,
        onNotify: t[1] || (t[1] = a=>e.$emit("resize", a))
    })) : yn("", !0)], 64)) : yn("", !0)], 512), de("div", {
        ref: "arrow",
        class: "v-popper__arrow-container",
        style: En(e.result ? {
            left: e.toPx(e.result.arrow.x),
            top: e.toPx(e.result.arrow.y)
        } : void 0)
    }, HC, 4)], 4)], 46, FC)
}
const sy = ga(xC, [["render", jC]])
  , ay = {
    methods: {
        show(...e) {
            return this.$refs.popper.show(...e)
        },
        hide(...e) {
            return this.$refs.popper.hide(...e)
        },
        dispose(...e) {
            return this.$refs.popper.dispose(...e)
        },
        onResize(...e) {
            return this.$refs.popper.onResize(...e)
        }
    }
};
let uc = function() {};
typeof window < "u" && (uc = window.Element);
const KC = Te({
    name: "VPopperWrapper",
    components: {
        Popper: PC,
        PopperContent: sy
    },
    mixins: [ay, iy("finalTheme")],
    props: {
        theme: {
            type: String,
            default: null
        },
        referenceNode: {
            type: Function,
            default: null
        },
        shown: {
            type: Boolean,
            default: !1
        },
        showGroup: {
            type: String,
            default: null
        },
        ariaId: {
            default: null
        },
        disabled: {
            type: Boolean,
            default: void 0
        },
        positioningDisabled: {
            type: Boolean,
            default: void 0
        },
        placement: {
            type: String,
            default: void 0
        },
        delay: {
            type: [String, Number, Object],
            default: void 0
        },
        distance: {
            type: [Number, String],
            default: void 0
        },
        skidding: {
            type: [Number, String],
            default: void 0
        },
        triggers: {
            type: Array,
            default: void 0
        },
        showTriggers: {
            type: [Array, Function],
            default: void 0
        },
        hideTriggers: {
            type: [Array, Function],
            default: void 0
        },
        popperTriggers: {
            type: Array,
            default: void 0
        },
        popperShowTriggers: {
            type: [Array, Function],
            default: void 0
        },
        popperHideTriggers: {
            type: [Array, Function],
            default: void 0
        },
        container: {
            type: [String, Object, uc, Boolean],
            default: void 0
        },
        boundary: {
            type: [String, uc],
            default: void 0
        },
        strategy: {
            type: String,
            default: void 0
        },
        autoHide: {
            type: [Boolean, Function],
            default: void 0
        },
        handleResize: {
            type: Boolean,
            default: void 0
        },
        instantMove: {
            type: Boolean,
            default: void 0
        },
        eagerMount: {
            type: Boolean,
            default: void 0
        },
        popperClass: {
            type: [String, Array, Object],
            default: void 0
        },
        computeTransformOrigin: {
            type: Boolean,
            default: void 0
        },
        autoMinSize: {
            type: Boolean,
            default: void 0
        },
        autoSize: {
            type: [Boolean, String],
            default: void 0
        },
        autoMaxSize: {
            type: Boolean,
            default: void 0
        },
        autoBoundaryMaxSize: {
            type: Boolean,
            default: void 0
        },
        preventOverflow: {
            type: Boolean,
            default: void 0
        },
        overflowPadding: {
            type: [Number, String],
            default: void 0
        },
        arrowPadding: {
            type: [Number, String],
            default: void 0
        },
        arrowOverflow: {
            type: Boolean,
            default: void 0
        },
        flip: {
            type: Boolean,
            default: void 0
        },
        shift: {
            type: Boolean,
            default: void 0
        },
        shiftCrossAxis: {
            type: Boolean,
            default: void 0
        },
        noAutoFocus: {
            type: Boolean,
            default: void 0
        },
        disposeTimeout: {
            type: Number,
            default: void 0
        }
    },
    emits: {
        show: ()=>!0,
        hide: ()=>!0,
        "update:shown": e=>!0,
        "apply-show": ()=>!0,
        "apply-hide": ()=>!0,
        "close-group": ()=>!0,
        "close-directive": ()=>!0,
        "auto-hide": ()=>!0,
        resize: ()=>!0
    },
    computed: {
        finalTheme() {
            return this.theme ?? this.$options.vPopperTheme
        }
    },
    methods: {
        getTargetNodes() {
            return Array.from(this.$el.children).filter(e=>e !== this.$refs.popperContent.$el)
        }
    }
});
function qC(e, t, n, r, o, i) {
    const s = Fr("PopperContent")
      , a = Fr("Popper");
    return he(),
    ht(a, fo({
        ref: "popper"
    }, e.$props, {
        theme: e.finalTheme,
        "target-nodes": e.getTargetNodes,
        "popper-node": ()=>e.$refs.popperContent.$el,
        class: [e.themeClass],
        onShow: t[0] || (t[0] = ()=>e.$emit("show")),
        onHide: t[1] || (t[1] = ()=>e.$emit("hide")),
        "onUpdate:shown": t[2] || (t[2] = l=>e.$emit("update:shown", l)),
        onApplyShow: t[3] || (t[3] = ()=>e.$emit("apply-show")),
        onApplyHide: t[4] || (t[4] = ()=>e.$emit("apply-hide")),
        onCloseGroup: t[5] || (t[5] = ()=>e.$emit("close-group")),
        onCloseDirective: t[6] || (t[6] = ()=>e.$emit("close-directive")),
        onAutoHide: t[7] || (t[7] = ()=>e.$emit("auto-hide")),
        onResize: t[8] || (t[8] = ()=>e.$emit("resize"))
    }), {
        default: Gt(({popperId: l, isShown: c, shouldMountContent: u, skipTransition: f, autoHide: d, show: m, hide: _, handleResize: b, onResize: w, classes: g, result: E})=>[dr(e.$slots, "default", {
            shown: c,
            show: m,
            hide: _
        }), We(s, {
            ref: "popperContent",
            "popper-id": l,
            theme: e.finalTheme,
            shown: c,
            mounted: u,
            "skip-transition": f,
            "auto-hide": d,
            "handle-resize": b,
            classes: g,
            result: E,
            onHide: _,
            onResize: w
        }, {
            default: Gt(()=>[dr(e.$slots, "popper", {
                shown: c,
                hide: _
            })]),
            _: 2
        }, 1032, ["popper-id", "theme", "shown", "mounted", "skip-transition", "auto-hide", "handle-resize", "classes", "result", "onHide", "onResize"])]),
        _: 3
    }, 16, ["theme", "target-nodes", "popper-node", "class"])
}
const Su = ga(KC, [["render", qC]])
  , YC = {
    ...Su,
    name: "VDropdown",
    vPopperTheme: "dropdown"
}
  , WC = {
    ...Su,
    name: "VMenu",
    vPopperTheme: "menu"
}
  , JC = {
    ...Su,
    name: "VTooltip",
    vPopperTheme: "tooltip"
}
  , zC = Te({
    name: "VTooltipDirective",
    components: {
        Popper: ry(),
        PopperContent: sy
    },
    mixins: [ay],
    inheritAttrs: !1,
    props: {
        theme: {
            type: String,
            default: "tooltip"
        },
        html: {
            type: Boolean,
            default: e=>mi(e.theme, "html")
        },
        content: {
            type: [String, Number, Function],
            default: null
        },
        loadingContent: {
            type: String,
            default: e=>mi(e.theme, "loadingContent")
        },
        targetNodes: {
            type: Function,
            required: !0
        }
    },
    data() {
        return {
            asyncContent: null
        }
    },
    computed: {
        isContentAsync() {
            return typeof this.content == "function"
        },
        loading() {
            return this.isContentAsync && this.asyncContent == null
        },
        finalContent() {
            return this.isContentAsync ? this.loading ? this.loadingContent : this.asyncContent : this.content
        }
    },
    watch: {
        content: {
            handler() {
                this.fetchContent(!0)
            },
            immediate: !0
        },
        async finalContent() {
            await this.$nextTick(),
            this.$refs.popper.onResize()
        }
    },
    created() {
        this.$_fetchId = 0
    },
    methods: {
        fetchContent(e) {
            if (typeof this.content == "function" && this.$_isShown && (e || !this.$_loading && this.asyncContent == null)) {
                this.asyncContent = null,
                this.$_loading = !0;
                const t = ++this.$_fetchId
                  , n = this.content(this);
                n.then ? n.then(r=>this.onResult(t, r)) : this.onResult(t, n)
            }
        },
        onResult(e, t) {
            e === this.$_fetchId && (this.$_loading = !1,
            this.asyncContent = t)
        },
        onShow() {
            this.$_isShown = !0,
            this.fetchContent()
        },
        onHide() {
            this.$_isShown = !1
        }
    }
})
  , GC = ["innerHTML"]
  , QC = ["textContent"];
function XC(e, t, n, r, o, i) {
    const s = Fr("PopperContent")
      , a = Fr("Popper");
    return he(),
    ht(a, fo({
        ref: "popper"
    }, e.$attrs, {
        theme: e.theme,
        "target-nodes": e.targetNodes,
        "popper-node": ()=>e.$refs.popperContent.$el,
        onApplyShow: e.onShow,
        onApplyHide: e.onHide
    }), {
        default: Gt(({popperId: l, isShown: c, shouldMountContent: u, skipTransition: f, autoHide: d, hide: m, handleResize: _, onResize: b, classes: w, result: g})=>[We(s, {
            ref: "popperContent",
            class: kt({
                "v-popper--tooltip-loading": e.loading
            }),
            "popper-id": l,
            theme: e.theme,
            shown: c,
            mounted: u,
            "skip-transition": f,
            "auto-hide": d,
            "handle-resize": _,
            classes: w,
            result: g,
            onHide: m,
            onResize: b
        }, {
            default: Gt(()=>[e.html ? (he(),
            Ye("div", {
                key: 0,
                innerHTML: e.finalContent
            }, null, 8, GC)) : (he(),
            Ye("div", {
                key: 1,
                textContent: In(e.finalContent)
            }, null, 8, QC))]),
            _: 2
        }, 1032, ["class", "popper-id", "theme", "shown", "mounted", "skip-transition", "auto-hide", "handle-resize", "classes", "result", "onHide", "onResize"])]),
        _: 1
    }, 16, ["theme", "target-nodes", "popper-node", "onApplyShow", "onApplyHide"])
}
const ZC = ga(zC, [["render", XC]])
  , ly = "v-popper--has-tooltip";
function $C(e, t) {
    let n = e.placement;
    if (!n && t)
        for (const r of ny)
            t[r] && (n = r);
    return n || (n = mi(e.theme || "tooltip", "placement")),
    n
}
function cy(e, t, n) {
    let r;
    const o = typeof t;
    return o === "string" ? r = {
        content: t
    } : t && o === "object" ? r = t : r = {
        content: !1
    },
    r.placement = $C(r, n),
    r.targetNodes = ()=>[e],
    r.referenceNode = ()=>e,
    r
}
let Ga, gi, eO = 0;
function tO() {
    if (Ga)
        return;
    gi = ye([]),
    Ga = Gp({
        name: "VTooltipDirectiveApp",
        setup() {
            return {
                directives: gi
            }
        },
        render() {
            return this.directives.map(t=>ot(ZC, {
                ...t.options,
                shown: t.shown || t.options.shown,
                key: t.id
            }))
        },
        devtools: {
            hide: !0
        }
    });
    const e = document.createElement("div");
    document.body.appendChild(e),
    Ga.mount(e)
}
function nO(e, t, n) {
    tO();
    const r = ye(cy(e, t, n))
      , o = ye(!1)
      , i = {
        id: eO++,
        options: r,
        shown: o
    };
    return gi.value.push(i),
    e.classList && e.classList.add(ly),
    e.$_popper = {
        options: r,
        item: i,
        show() {
            o.value = !0
        },
        hide() {
            o.value = !1
        }
    }
}
function uy(e) {
    if (e.$_popper) {
        const t = gi.value.indexOf(e.$_popper.item);
        t !== -1 && gi.value.splice(t, 1),
        delete e.$_popper,
        delete e.$_popperOldShown,
        delete e.$_popperMountTarget
    }
    e.classList && e.classList.remove(ly)
}
function _h(e, {value: t, modifiers: n}) {
    const r = cy(e, t, n);
    if (!r.content || mi(r.theme || "tooltip", "disabled"))
        uy(e);
    else {
        let o;
        e.$_popper ? (o = e.$_popper,
        o.options.value = r) : o = nO(e, t, n),
        typeof t.shown < "u" && t.shown !== e.$_popperOldShown && (e.$_popperOldShown = t.shown,
        t.shown ? o.show() : o.hide())
    }
}
const rO = {
    beforeMount: _h,
    updated: _h,
    beforeUnmount(e) {
        uy(e)
    }
};
function bh(e) {
    e.addEventListener("mousedown", xs),
    e.addEventListener("click", xs),
    e.addEventListener("touchstart", fy, bo ? {
        passive: !0
    } : !1)
}
function Eh(e) {
    e.removeEventListener("mousedown", xs),
    e.removeEventListener("click", xs),
    e.removeEventListener("touchstart", fy),
    e.removeEventListener("touchend", dy),
    e.removeEventListener("touchcancel", hy)
}
function xs(e) {
    const t = e.currentTarget;
    e.closePopover = !t.$_vclosepopover_touch,
    e.closeAllPopover = t.$_closePopoverModifiers && !!t.$_closePopoverModifiers.all
}
function fy(e) {
    if (e.changedTouches.length === 1) {
        const t = e.currentTarget;
        t.$_vclosepopover_touch = !0;
        const n = e.changedTouches[0];
        t.$_vclosepopover_touchPoint = n,
        t.addEventListener("touchend", dy),
        t.addEventListener("touchcancel", hy)
    }
}
function dy(e) {
    const t = e.currentTarget;
    if (t.$_vclosepopover_touch = !1,
    e.changedTouches.length === 1) {
        const n = e.changedTouches[0]
          , r = t.$_vclosepopover_touchPoint;
        e.closePopover = Math.abs(n.screenY - r.screenY) < 20 && Math.abs(n.screenX - r.screenX) < 20,
        e.closeAllPopover = t.$_closePopoverModifiers && !!t.$_closePopoverModifiers.all
    }
}
function hy(e) {
    const t = e.currentTarget;
    t.$_vclosepopover_touch = !1
}
const oO = {
    beforeMount(e, {value: t, modifiers: n}) {
        e.$_closePopoverModifiers = n,
        (typeof t > "u" || t) && bh(e)
    },
    updated(e, {value: t, oldValue: n, modifiers: r}) {
        e.$_closePopoverModifiers = r,
        t !== n && (typeof t > "u" || t ? bh(e) : Eh(e))
    },
    beforeUnmount(e) {
        Eh(e)
    }
};
function iO(e, t={}) {
    e.$_vTooltipInstalled || (e.$_vTooltipInstalled = !0,
    ey(rn, t),
    e.directive("tooltip", rO),
    e.directive("close-popper", oO),
    e.component("VTooltip", JC),
    e.component("VDropdown", YC),
    e.component("VMenu", WC))
}
const sO = {
    version: "5.2.2",
    install: iO,
    options: rn
}
  , aO = Et(e=>{
    e.vueApp.use(sO)
}
);
function py(e) {
    if (e == null)
        return 1 / 0;
    if (typeof e == "object")
        for (let t in e)
            e[t] = py(e[t]);
    return e
}
const lO = Et(({vueApp: e})=>{
    var o;
    const t = ((o = Ln().public) == null ? void 0 : o.notivue) || {}
      , n = py(JSON.parse(JSON.stringify(t)));
    delete n.addPlugin;
    const r = $1(n);
    e.use(r)
}
);
function cO(e, {locales: t=[], localeCodes: n=[], baseUrl: r=kA, hooks: o={}, context: i={}}={}) {
    const s = Ei()
      , a = e.install;
    return e.install = (l,...c)=>{
        const u = dO(c[0]) ? it({}, c[0]) : {
            inject: !0
        };
        u.inject == null && (u.inject = !0);
        const f = u.__composerExtend;
        if (u.__composerExtend = b=>{
            const w = yo(e);
            b.locales = le(()=>w.locales.value),
            b.localeCodes = le(()=>w.localeCodes.value),
            b.baseUrl = le(()=>w.baseUrl.value);
            let g;
            return qe(f) && (g = Reflect.apply(f, u, [b])),
            ()=>{
                g && g()
            }
        }
        ,
        e.mode === "legacy") {
            const b = u.__vueI18nExtend;
            u.__vueI18nExtend = w=>{
                Sh(w, o.onExtendVueI18n);
                let g;
                return qe(b) && (g = Reflect.apply(b, u, [w])),
                ()=>{
                    g && g()
                }
            }
        }
        c[0] = u,
        Reflect.apply(a, e, [l, ...c]);
        const d = yo(e);
        s.run(()=>{
            uO(d, {
                locales: t,
                localeCodes: n,
                baseUrl: r,
                hooks: o,
                context: i
            }),
            e.mode === "legacy" && Tg(e.global) && Sh(e.global, o.onExtendVueI18n)
        }
        );
        const m = l
          , _ = e.mode === "composition" ? m.config.globalProperties.$i18n : null;
        if (_ && fO(_, d, o.onExtendExportedGlobal),
        u.inject) {
            const b = yu(e);
            l.mixin({
                methods: {
                    getRouteBaseName: vo,
                    resolveRoute: Kt(da, b),
                    localePath: Kt(fa, b),
                    localeRoute: Kt(mu, b),
                    localeLocation: Kt(JA, b),
                    switchLocalePath: Kt(_o, b),
                    localeHead: Kt(Cg, b)
                }
            })
        }
        if (m.unmount) {
            const b = m.unmount;
            m.unmount = ()=>{
                s.stop(),
                b()
            }
        }
    }
    ,
    s
}
function uO(e, t) {
    const {locales: n, localeCodes: r, baseUrl: o, context: i} = t
      , s = ye(n)
      , a = ye(r)
      , l = ye("");
    e.locales = le(()=>s.value),
    e.localeCodes = le(()=>a.value),
    e.baseUrl = le(()=>l.value),
    LA ? Ue(e.locale, ()=>{
        l.value = Jd(o, i)
    }
    , {
        immediate: !0
    }) : l.value = Jd(o, i),
    t.hooks && t.hooks.onExtendComposer && t.hooks.onExtendComposer(e)
}
function my(e, t, n) {
    const r = [{
        locales: {
            get() {
                return e.locales.value
            }
        },
        localeCodes: {
            get() {
                return e.localeCodes.value
            }
        },
        baseUrl: {
            get() {
                return e.baseUrl.value
            }
        }
    }];
    n && r.push(n(e));
    for (const o of r)
        for (const [i,s] of Object.entries(o))
            Object.defineProperty(t, i, s)
}
function fO(e, t, n) {
    my(t, e, n)
}
function Sh(e, t) {
    const n = yo(e);
    my(n, e, t)
}
function dO(e) {
    return be(e) && ("inject"in e || "__composerExtend"in e || "__vueI18nExtend"in e)
}
function hO() {
    const {routesNameSeparator: e, defaultLocaleRouteNameSuffix: t} = ut
      , n = `(${Br.join("|")})`
      , r = `(?:${e}${t})?`
      , o = new RegExp(`${e}${n}${r}$`,"i")
      , i = ec(Br);
    return a=>{
        if (be(a)) {
            if (a.name) {
                const c = (te(a.name) ? a.name : a.name.toString()).match(o);
                if (c && c.length > 1)
                    return c[1]
            } else if (a.path) {
                const l = a.path.match(i);
                if (l && l.length > 1)
                    return l[1]
            }
        } else if (te(a)) {
            const l = a.match(i);
            if (l && l.length > 1)
                return l[1]
        }
        return ""
    }
}
const pO = Et({
    name: "i18n:plugin",
    parallel: wA,
    async setup(e) {
        let t, n;
        const r = ea()
          , {vueApp: o} = e
          , i = e
          , s = {
            ...ut
        };
        s.baseUrl = uL();
        const a = ([t,n] = _n(()=>UA(SA, ne())),
        t = await t,
        n(),
        t);
        a.messages = a.messages || {},
        a.fallbackLocale = a.fallbackLocale ?? !1;
        const l = hO()
          , c = p=>p || a.locale || "en-US"
          , u = dL();
        let f = Qd(r, l, a.locale, c(s.defaultLocale), {
            ssg: s.strategy === "no_prefix" ? "ssg_ignore" : "normal",
            callType: "setup",
            firstAccess: !0,
            localeCookie: u
        });
        a.messages = ([t,n] = _n(()=>VA(a.messages, $l, {
            localeCodes: Br,
            initialLocale: f,
            lazy: s.lazy,
            defaultLocale: s.defaultLocale,
            fallbackLocale: a.fallbackLocale
        })),
        t = await t,
        n(),
        t),
        f = c(f);
        const d = y1({
            ...a,
            locale: f
        });
        let m = !0;
        const _ = p=>f !== p && m;
        let b = !0;
        const w = ()=>b;
        w() && s.strategy === "no_prefix" && e.hook("app:mounted", async()=>{
            const {locale: p, stat: y, reason: S, from: T} = s.detectBrowserLanguage ? Mg(r, a.locale, {
                ssg: "ssg_setup",
                callType: "setup",
                firstAccess: !0,
                localeCookie: u
            }, f) : Ig;
            tL(d, p),
            b = !1
        }
        ),
        cO(d, {
            locales: s.locales,
            localeCodes: Br,
            baseUrl: s.baseUrl,
            context: i,
            hooks: {
                onExtendComposer(p) {
                    p.strategy = s.strategy,
                    p.localeProperties = le(()=>pu.find(y=>y.code === p.locale.value) || {
                        code: p.locale.value
                    }),
                    p.setLocale = async y=>{
                        const S = _(y)
                          , [T] = await Gd(y, d, S);
                        T && S && (m = !1);
                        const A = await i.runWithContext(()=>Xd({
                            route: {
                                to: r
                            },
                            targetLocale: y,
                            routeLocaleGetter: l
                        }));
                        await i.runWithContext(async()=>await $d({
                            i18n: d,
                            redirectPath: A,
                            locale: y,
                            route: r
                        }, {
                            enableNavigate: !0
                        }))
                    }
                    ,
                    p.differentDomains = s.differentDomains,
                    p.defaultLocale = s.defaultLocale,
                    p.getBrowserLocale = ()=>Pg(),
                    p.getLocaleCookie = ()=>hL(u),
                    p.setLocaleCookie = y=>pL(u, y),
                    p.onBeforeLanguageSwitch = (y,S,T,A)=>e.callHook("i18n:beforeLocaleSwitch", {
                        oldLocale: y,
                        newLocale: S,
                        initialSetup: T,
                        context: A
                    }),
                    p.onLanguageSwitched = (y,S)=>e.callHook("i18n:localeSwitched", {
                        oldLocale: y,
                        newLocale: S
                    }),
                    p.finalizePendingLocaleChange = async()=>{
                        d.__pendingLocale && (kg(d, d.__pendingLocale),
                        d.__resolvePendingLocalePromise && await d.__resolvePendingLocalePromise(),
                        d.__pendingLocale = void 0)
                    }
                    ,
                    p.waitForPendingLocaleChange = async()=>{
                        d.__pendingLocale && d.__pendingLocalePromise && await d.__pendingLocalePromise
                    }
                },
                onExtendExportedGlobal(p) {
                    return {
                        strategy: {
                            get() {
                                return p.strategy
                            }
                        },
                        localeProperties: {
                            get() {
                                return p.localeProperties.value
                            }
                        },
                        setLocale: {
                            get() {
                                return async y=>Reflect.apply(p.setLocale, p, [y])
                            }
                        },
                        differentDomains: {
                            get() {
                                return p.differentDomains
                            }
                        },
                        defaultLocale: {
                            get() {
                                return p.defaultLocale
                            }
                        },
                        getBrowserLocale: {
                            get() {
                                return ()=>Reflect.apply(p.getBrowserLocale, p, [])
                            }
                        },
                        getLocaleCookie: {
                            get() {
                                return ()=>Reflect.apply(p.getLocaleCookie, p, [])
                            }
                        },
                        setLocaleCookie: {
                            get() {
                                return y=>Reflect.apply(p.setLocaleCookie, p, [y])
                            }
                        },
                        onBeforeLanguageSwitch: {
                            get() {
                                return (y,S,T,A)=>Reflect.apply(p.onBeforeLanguageSwitch, p, [y, S, T, A])
                            }
                        },
                        onLanguageSwitched: {
                            get() {
                                return (y,S)=>Reflect.apply(p.onLanguageSwitched, p, [y, S])
                            }
                        },
                        finalizePendingLocaleChange: {
                            get() {
                                return ()=>Reflect.apply(p.finalizePendingLocaleChange, p, [])
                            }
                        },
                        waitForPendingLocaleChange: {
                            get() {
                                return ()=>Reflect.apply(p.waitForPendingLocaleChange, p, [])
                            }
                        }
                    }
                },
                onExtendVueI18n(p) {
                    return {
                        strategy: {
                            get() {
                                return p.strategy
                            }
                        },
                        localeProperties: {
                            get() {
                                return p.localeProperties.value
                            }
                        },
                        setLocale: {
                            get() {
                                return async y=>Reflect.apply(p.setLocale, p, [y])
                            }
                        },
                        differentDomains: {
                            get() {
                                return p.differentDomains
                            }
                        },
                        defaultLocale: {
                            get() {
                                return p.defaultLocale
                            }
                        },
                        getBrowserLocale: {
                            get() {
                                return ()=>Reflect.apply(p.getBrowserLocale, p, [])
                            }
                        },
                        getLocaleCookie: {
                            get() {
                                return ()=>Reflect.apply(p.getLocaleCookie, p, [])
                            }
                        },
                        setLocaleCookie: {
                            get() {
                                return y=>Reflect.apply(p.setLocaleCookie, p, [y])
                            }
                        },
                        onBeforeLanguageSwitch: {
                            get() {
                                return (y,S,T,A)=>Reflect.apply(p.onBeforeLanguageSwitch, p, [y, S, T, A])
                            }
                        },
                        onLanguageSwitched: {
                            get() {
                                return (y,S)=>Reflect.apply(p.onLanguageSwitched, p, [y, S])
                            }
                        },
                        finalizePendingLocaleChange: {
                            get() {
                                return ()=>Reflect.apply(p.finalizePendingLocaleChange, p, [])
                            }
                        },
                        waitForPendingLocaleChange: {
                            get() {
                                return ()=>Reflect.apply(p.waitForPendingLocaleChange, p, [])
                            }
                        }
                    }
                }
            }
        });
        const g = {
            __composerExtend: p=>{
                const y = yo(d);
                return p.strategy = y.strategy,
                p.localeProperties = le(()=>y.localeProperties.value),
                p.setLocale = y.setLocale,
                p.differentDomains = y.differentDomains,
                p.getBrowserLocale = y.getBrowserLocale,
                p.getLocaleCookie = y.getLocaleCookie,
                p.setLocaleCookie = y.setLocaleCookie,
                p.onBeforeLanguageSwitch = y.onBeforeLanguageSwitch,
                p.onLanguageSwitched = y.onLanguageSwitched,
                p.finalizePendingLocaleChange = y.finalizePendingLocaleChange,
                p.waitForPendingLocaleChange = y.waitForPendingLocaleChange,
                ()=>{}
            }
        };
        o.use(d, g),
        aL(i, d);
        let E = 0;
        fE("locale-changing", async(p,y)=>{
            let S, T;
            const A = Qd(p, l, a.locale, ()=>ua(d) || c(s.defaultLocale), {
                ssg: w() && s.strategy === "no_prefix" ? "ssg_ignore" : "normal",
                callType: "routing",
                firstAccess: E === 0,
                localeCookie: u
            })
              , L = _(A)
              , [O] = ([S,T] = _n(()=>Gd(A, d, L)),
            S = await S,
            T(),
            S);
            O && L && (m = !1);
            const I = ([S,T] = _n(()=>i.runWithContext(()=>Xd({
                route: {
                    to: p,
                    from: y
                },
                targetLocale: A,
                routeLocaleGetter: s.strategy === "no_prefix" ? ()=>A : l,
                calledWithRouting: !0
            }))),
            S = await S,
            T(),
            S);
            return E++,
            [S,T] = _n(()=>i.runWithContext(async()=>$d({
                i18n: d,
                redirectPath: I,
                locale: A,
                route: p
            }))),
            S = await S,
            T(),
            S
        }
        , {
            global: !0
        })
    }
});
function gy(e) {
    return Si() ? (Ks(e),
    !0) : !1
}
function wu(e) {
    return typeof e == "function" ? e() : z(e)
}
const mO = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const gO = e=>e != null
  , yO = Object.prototype.toString
  , Fs = e=>yO.call(e) === "[object Object]"
  , Go = ()=>{}
;
function yy(e) {
    return e || cn()
}
function vO(...e) {
    if (e.length !== 1)
        return Xr(...e);
    const t = e[0];
    return typeof t == "function" ? Cr(cp(()=>({
        get: t,
        set: Go
    }))) : ye(t)
}
function _O(e, t=!0, n) {
    yy() ? Xt(e, n) : t ? e() : Ft(e)
}
function bO(e, t) {
    yy(t) && Gs(e, t)
}
function Qo(e) {
    var t;
    const n = wu(e);
    return (t = n == null ? void 0 : n.$el) != null ? t : n
}
const vy = mO ? window : void 0;
function Ot(...e) {
    let t, n, r, o;
    if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([n,r,o] = e,
    t = vy) : [t,n,r,o] = e,
    !t)
        return Go;
    Array.isArray(n) || (n = [n]),
    Array.isArray(r) || (r = [r]);
    const i = []
      , s = ()=>{
        i.forEach(u=>u()),
        i.length = 0
    }
      , a = (u,f,d,m)=>(u.addEventListener(f, d, m),
    ()=>u.removeEventListener(f, d, m))
      , l = Ue(()=>[Qo(t), wu(o)], ([u,f])=>{
        if (s(),
        !u)
            return;
        const d = Fs(f) ? {
            ...f
        } : f;
        i.push(...n.flatMap(m=>r.map(_=>a(u, m, _, d))))
    }
    , {
        immediate: !0,
        flush: "post"
    })
      , c = ()=>{
        l(),
        s()
    }
    ;
    return gy(c),
    c
}
function EO() {
    const e = ye(!1)
      , t = cn();
    return t && Xt(()=>{
        e.value = !0
    }
    , t),
    e
}
function SO(e) {
    const t = EO();
    return le(()=>(t.value,
    !!e()))
}
function wO(e, t, n={}) {
    const {root: r, rootMargin: o="0px", threshold: i=.1, window: s=vy, immediate: a=!0} = n
      , l = SO(()=>s && "IntersectionObserver"in s)
      , c = le(()=>{
        const _ = wu(e);
        return (Array.isArray(_) ? _ : [_]).map(Qo).filter(gO)
    }
    );
    let u = Go;
    const f = ye(a)
      , d = l.value ? Ue(()=>[c.value, Qo(r), f.value], ([_,b])=>{
        if (u(),
        !f.value || !_.length)
            return;
        const w = new IntersectionObserver(t,{
            root: Qo(b),
            rootMargin: o,
            threshold: i
        });
        _.forEach(g=>g && w.observe(g)),
        u = ()=>{
            w.disconnect(),
            u = Go
        }
    }
    , {
        immediate: a,
        flush: "post"
    }) : Go
      , m = ()=>{
        u(),
        d(),
        f.value = !1
    }
    ;
    return gy(m),
    {
        isSupported: l,
        isActive: f,
        pause() {
            u(),
            f.value = !1
        },
        resume() {
            f.value = !0
        },
        stop: m
    }
}
function fM(e, t={}) {
    const n = vO(e)
      , {threshold: r=50, onSwipe: o, onSwipeEnd: i, onSwipeStart: s, disableTextSelect: a=!1} = t
      , l = yt({
        x: 0,
        y: 0
    })
      , c = (A,L)=>{
        l.x = A,
        l.y = L
    }
      , u = yt({
        x: 0,
        y: 0
    })
      , f = (A,L)=>{
        u.x = A,
        u.y = L
    }
      , d = le(()=>l.x - u.x)
      , m = le(()=>l.y - u.y)
      , {max: _, abs: b} = Math
      , w = le(()=>_(b(d.value), b(m.value)) >= r)
      , g = ye(!1)
      , E = ye(!1)
      , p = le(()=>w.value ? b(d.value) > b(m.value) ? d.value > 0 ? "left" : "right" : m.value > 0 ? "up" : "down" : "none")
      , y = A=>{
        var L, O, I;
        const V = A.buttons === 0
          , x = A.buttons === 1;
        return (I = (O = (L = t.pointerTypes) == null ? void 0 : L.includes(A.pointerType)) != null ? O : V || x) != null ? I : !0
    }
      , S = [Ot(e, "pointerdown", A=>{
        if (!y(A))
            return;
        E.value = !0;
        const L = A.target;
        L == null || L.setPointerCapture(A.pointerId);
        const {clientX: O, clientY: I} = A;
        c(O, I),
        f(O, I),
        s == null || s(A)
    }
    ), Ot(e, "pointermove", A=>{
        if (!y(A) || !E.value)
            return;
        const {clientX: L, clientY: O} = A;
        f(L, O),
        !g.value && w.value && (g.value = !0),
        g.value && (o == null || o(A))
    }
    ), Ot(e, "pointerup", A=>{
        y(A) && (g.value && (i == null || i(A, p.value)),
        E.value = !1,
        g.value = !1)
    }
    )];
    _O(()=>{
        var A, L, O, I, V, x, X, Y;
        (L = (A = n.value) == null ? void 0 : A.style) == null || L.setProperty("touch-action", "none"),
        a && ((I = (O = n.value) == null ? void 0 : O.style) == null || I.setProperty("-webkit-user-select", "none"),
        (x = (V = n.value) == null ? void 0 : V.style) == null || x.setProperty("-ms-user-select", "none"),
        (Y = (X = n.value) == null ? void 0 : X.style) == null || Y.setProperty("user-select", "none"))
    }
    );
    const T = ()=>S.forEach(A=>A());
    return {
        isSwiping: Cr(g),
        direction: Cr(p),
        posStart: Cr(l),
        posEnd: Cr(u),
        distanceX: d,
        distanceY: m,
        stop: T
    }
}
const _y = 1 / 60 * 1e3
  , TO = typeof performance < "u" ? ()=>performance.now() : ()=>Date.now()
  , by = typeof window < "u" ? e=>window.requestAnimationFrame(e) : e=>setTimeout(()=>e(TO()), _y);
function kO(e) {
    let t = []
      , n = []
      , r = 0
      , o = !1
      , i = !1;
    const s = new WeakSet
      , a = {
        schedule: (l,c=!1,u=!1)=>{
            const f = u && o
              , d = f ? t : n;
            return c && s.add(l),
            d.indexOf(l) === -1 && (d.push(l),
            f && o && (r = t.length)),
            l
        }
        ,
        cancel: l=>{
            const c = n.indexOf(l);
            c !== -1 && n.splice(c, 1),
            s.delete(l)
        }
        ,
        process: l=>{
            if (o) {
                i = !0;
                return
            }
            if (o = !0,
            [t,n] = [n, t],
            n.length = 0,
            r = t.length,
            r)
                for (let c = 0; c < r; c++) {
                    const u = t[c];
                    u(l),
                    s.has(u) && (a.schedule(u),
                    e())
                }
            o = !1,
            i && (i = !1,
            a.process(l))
        }
    };
    return a
}
const AO = 40;
let fc = !0
  , yi = !1
  , dc = !1;
const lo = {
    delta: 0,
    timestamp: 0
}
  , Ni = ["read", "update", "preRender", "render", "postRender"]
  , va = Ni.reduce((e,t)=>(e[t] = kO(()=>yi = !0),
e), {})
  , hc = Ni.reduce((e,t)=>{
    const n = va[t];
    return e[t] = (r,o=!1,i=!1)=>(yi || OO(),
    n.schedule(r, o, i)),
    e
}
, {})
  , LO = Ni.reduce((e,t)=>(e[t] = va[t].cancel,
e), {});
Ni.reduce((e,t)=>(e[t] = ()=>va[t].process(lo),
e), {});
const CO = e=>va[e].process(lo)
  , Ey = e=>{
    yi = !1,
    lo.delta = fc ? _y : Math.max(Math.min(e - lo.timestamp, AO), 1),
    lo.timestamp = e,
    dc = !0,
    Ni.forEach(CO),
    dc = !1,
    yi && (fc = !1,
    by(Ey))
}
  , OO = ()=>{
    yi = !0,
    fc = !0,
    dc || by(Ey)
}
  , Sy = ()=>lo;
function wy(e, t) {
    var n = {};
    for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
            t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
    return n
}
var wh = function() {};
const pc = (e,t,n)=>Math.min(Math.max(n, e), t)
  , Qa = .001
  , RO = .01
  , PO = 10
  , IO = .05
  , MO = 1;
function NO({duration: e=800, bounce: t=.25, velocity: n=0, mass: r=1}) {
    let o, i, s = 1 - t;
    s = pc(IO, MO, s),
    e = pc(RO, PO, e / 1e3),
    s < 1 ? (o = c=>{
        const u = c * s
          , f = u * e
          , d = u - n
          , m = mc(c, s)
          , _ = Math.exp(-f);
        return Qa - d / m * _
    }
    ,
    i = c=>{
        const f = c * s * e
          , d = f * n + n
          , m = Math.pow(s, 2) * Math.pow(c, 2) * e
          , _ = Math.exp(-f)
          , b = mc(Math.pow(c, 2), s);
        return (-o(c) + Qa > 0 ? -1 : 1) * ((d - m) * _) / b
    }
    ) : (o = c=>{
        const u = Math.exp(-c * e)
          , f = (c - n) * e + 1;
        return -Qa + u * f
    }
    ,
    i = c=>{
        const u = Math.exp(-c * e)
          , f = (n - c) * (e * e);
        return u * f
    }
    );
    const a = 5 / e
      , l = xO(o, i, a);
    if (e = e * 1e3,
    isNaN(l))
        return {
            stiffness: 100,
            damping: 10,
            duration: e
        };
    {
        const c = Math.pow(l, 2) * r;
        return {
            stiffness: c,
            damping: s * 2 * Math.sqrt(r * c),
            duration: e
        }
    }
}
const DO = 12;
function xO(e, t, n) {
    let r = n;
    for (let o = 1; o < DO; o++)
        r = r - e(r) / t(r);
    return r
}
function mc(e, t) {
    return e * Math.sqrt(1 - t * t)
}
const FO = ["duration", "bounce"]
  , UO = ["stiffness", "damping", "mass"];
function Th(e, t) {
    return t.some(n=>e[n] !== void 0)
}
function VO(e) {
    let t = Object.assign({
        velocity: 0,
        stiffness: 100,
        damping: 10,
        mass: 1,
        isResolvedFromDuration: !1
    }, e);
    if (!Th(e, UO) && Th(e, FO)) {
        const n = NO(e);
        t = Object.assign(Object.assign(Object.assign({}, t), n), {
            velocity: 0,
            mass: 1
        }),
        t.isResolvedFromDuration = !0
    }
    return t
}
function Tu(e) {
    var {from: t=0, to: n=1, restSpeed: r=2, restDelta: o} = e
      , i = wy(e, ["from", "to", "restSpeed", "restDelta"]);
    const s = {
        done: !1,
        value: t
    };
    let {stiffness: a, damping: l, mass: c, velocity: u, duration: f, isResolvedFromDuration: d} = VO(i)
      , m = kh
      , _ = kh;
    function b() {
        const w = u ? -(u / 1e3) : 0
          , g = n - t
          , E = l / (2 * Math.sqrt(a * c))
          , p = Math.sqrt(a / c) / 1e3;
        if (o === void 0 && (o = Math.min(Math.abs(n - t) / 100, .4)),
        E < 1) {
            const y = mc(p, E);
            m = S=>{
                const T = Math.exp(-E * p * S);
                return n - T * ((w + E * p * g) / y * Math.sin(y * S) + g * Math.cos(y * S))
            }
            ,
            _ = S=>{
                const T = Math.exp(-E * p * S);
                return E * p * T * (Math.sin(y * S) * (w + E * p * g) / y + g * Math.cos(y * S)) - T * (Math.cos(y * S) * (w + E * p * g) - y * g * Math.sin(y * S))
            }
        } else if (E === 1)
            m = y=>n - Math.exp(-p * y) * (g + (w + p * g) * y);
        else {
            const y = p * Math.sqrt(E * E - 1);
            m = S=>{
                const T = Math.exp(-E * p * S)
                  , A = Math.min(y * S, 300);
                return n - T * ((w + E * p * g) * Math.sinh(A) + y * g * Math.cosh(A)) / y
            }
        }
    }
    return b(),
    {
        next: w=>{
            const g = m(w);
            if (d)
                s.done = w >= f;
            else {
                const E = _(w) * 1e3
                  , p = Math.abs(E) <= r
                  , y = Math.abs(n - g) <= o;
                s.done = p && y
            }
            return s.value = s.done ? n : g,
            s
        }
        ,
        flipTarget: ()=>{
            u = -u,
            [t,n] = [n, t],
            b()
        }
    }
}
Tu.needsInterpolation = (e,t)=>typeof e == "string" || typeof t == "string";
const kh = e=>0
  , Ty = (e,t,n)=>{
    const r = t - e;
    return r === 0 ? 1 : (n - e) / r
}
  , ku = (e,t,n)=>-n * e + n * t + e
  , ky = (e,t)=>n=>Math.max(Math.min(n, t), e)
  , Xo = e=>e % 1 ? Number(e.toFixed(5)) : e
  , vi = /(-)?([\d]*\.?[\d])+/g
  , gc = /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi
  , BO = /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function Di(e) {
    return typeof e == "string"
}
const xi = {
    test: e=>typeof e == "number",
    parse: parseFloat,
    transform: e=>e
}
  , Zo = Object.assign(Object.assign({}, xi), {
    transform: ky(0, 1)
})
  , ts = Object.assign(Object.assign({}, xi), {
    default: 1
})
  , Au = e=>({
    test: t=>Di(t) && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: t=>`${t}${e}`
})
  , wr = Au("deg")
  , $o = Au("%")
  , ve = Au("px")
  , Ah = Object.assign(Object.assign({}, $o), {
    parse: e=>$o.parse(e) / 100,
    transform: e=>$o.transform(e * 100)
})
  , Lu = (e,t)=>n=>!!(Di(n) && BO.test(n) && n.startsWith(e) || t && Object.prototype.hasOwnProperty.call(n, t))
  , Ay = (e,t,n)=>r=>{
    if (!Di(r))
        return r;
    const [o,i,s,a] = r.match(vi);
    return {
        [e]: parseFloat(o),
        [t]: parseFloat(i),
        [n]: parseFloat(s),
        alpha: a !== void 0 ? parseFloat(a) : 1
    }
}
  , Rr = {
    test: Lu("hsl", "hue"),
    parse: Ay("hue", "saturation", "lightness"),
    transform: ({hue: e, saturation: t, lightness: n, alpha: r=1})=>"hsla(" + Math.round(e) + ", " + $o.transform(Xo(t)) + ", " + $o.transform(Xo(n)) + ", " + Xo(Zo.transform(r)) + ")"
}
  , HO = ky(0, 255)
  , Xa = Object.assign(Object.assign({}, xi), {
    transform: e=>Math.round(HO(e))
})
  , ir = {
    test: Lu("rgb", "red"),
    parse: Ay("red", "green", "blue"),
    transform: ({red: e, green: t, blue: n, alpha: r=1})=>"rgba(" + Xa.transform(e) + ", " + Xa.transform(t) + ", " + Xa.transform(n) + ", " + Xo(Zo.transform(r)) + ")"
};
function jO(e) {
    let t = ""
      , n = ""
      , r = ""
      , o = "";
    return e.length > 5 ? (t = e.substr(1, 2),
    n = e.substr(3, 2),
    r = e.substr(5, 2),
    o = e.substr(7, 2)) : (t = e.substr(1, 1),
    n = e.substr(2, 1),
    r = e.substr(3, 1),
    o = e.substr(4, 1),
    t += t,
    n += n,
    r += r,
    o += o),
    {
        red: parseInt(t, 16),
        green: parseInt(n, 16),
        blue: parseInt(r, 16),
        alpha: o ? parseInt(o, 16) / 255 : 1
    }
}
const yc = {
    test: Lu("#"),
    parse: jO,
    transform: ir.transform
}
  , Pt = {
    test: e=>ir.test(e) || yc.test(e) || Rr.test(e),
    parse: e=>ir.test(e) ? ir.parse(e) : Rr.test(e) ? Rr.parse(e) : yc.parse(e),
    transform: e=>Di(e) ? e : e.hasOwnProperty("red") ? ir.transform(e) : Rr.transform(e)
}
  , Ly = "${c}"
  , Cy = "${n}";
function KO(e) {
    var t, n, r, o;
    return isNaN(e) && Di(e) && ((n = (t = e.match(vi)) === null || t === void 0 ? void 0 : t.length) !== null && n !== void 0 ? n : 0) + ((o = (r = e.match(gc)) === null || r === void 0 ? void 0 : r.length) !== null && o !== void 0 ? o : 0) > 0
}
function Oy(e) {
    typeof e == "number" && (e = `${e}`);
    const t = [];
    let n = 0;
    const r = e.match(gc);
    r && (n = r.length,
    e = e.replace(gc, Ly),
    t.push(...r.map(Pt.parse)));
    const o = e.match(vi);
    return o && (e = e.replace(vi, Cy),
    t.push(...o.map(xi.parse))),
    {
        values: t,
        numColors: n,
        tokenised: e
    }
}
function Ry(e) {
    return Oy(e).values
}
function Py(e) {
    const {values: t, numColors: n, tokenised: r} = Oy(e)
      , o = t.length;
    return i=>{
        let s = r;
        for (let a = 0; a < o; a++)
            s = s.replace(a < n ? Ly : Cy, a < n ? Pt.transform(i[a]) : Xo(i[a]));
        return s
    }
}
const qO = e=>typeof e == "number" ? 0 : e;
function YO(e) {
    const t = Ry(e);
    return Py(e)(t.map(qO))
}
const Fi = {
    test: KO,
    parse: Ry,
    createTransformer: Py,
    getAnimatableNone: YO
}
  , WO = new Set(["brightness", "contrast", "saturate", "opacity"]);
function JO(e) {
    let[t,n] = e.slice(0, -1).split("(");
    if (t === "drop-shadow")
        return e;
    const [r] = n.match(vi) || [];
    if (!r)
        return e;
    const o = n.replace(r, "");
    let i = WO.has(t) ? 1 : 0;
    return r !== n && (i *= 100),
    t + "(" + i + o + ")"
}
const zO = /([a-z-]*)\(.*?\)/g
  , vc = Object.assign(Object.assign({}, Fi), {
    getAnimatableNone: e=>{
        const t = e.match(zO);
        return t ? t.map(JO).join(" ") : e
    }
});
function Za(e, t, n) {
    return n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
}
function Lh({hue: e, saturation: t, lightness: n, alpha: r}) {
    e /= 360,
    t /= 100,
    n /= 100;
    let o = 0
      , i = 0
      , s = 0;
    if (!t)
        o = i = s = n;
    else {
        const a = n < .5 ? n * (1 + t) : n + t - n * t
          , l = 2 * n - a;
        o = Za(l, a, e + 1 / 3),
        i = Za(l, a, e),
        s = Za(l, a, e - 1 / 3)
    }
    return {
        red: Math.round(o * 255),
        green: Math.round(i * 255),
        blue: Math.round(s * 255),
        alpha: r
    }
}
const GO = (e,t,n)=>{
    const r = e * e
      , o = t * t;
    return Math.sqrt(Math.max(0, n * (o - r) + r))
}
  , QO = [yc, ir, Rr]
  , Ch = e=>QO.find(t=>t.test(e))
  , Iy = (e,t)=>{
    let n = Ch(e)
      , r = Ch(t)
      , o = n.parse(e)
      , i = r.parse(t);
    n === Rr && (o = Lh(o),
    n = ir),
    r === Rr && (i = Lh(i),
    r = ir);
    const s = Object.assign({}, o);
    return a=>{
        for (const l in s)
            l !== "alpha" && (s[l] = GO(o[l], i[l], a));
        return s.alpha = ku(o.alpha, i.alpha, a),
        n.transform(s)
    }
}
  , XO = e=>typeof e == "number"
  , ZO = (e,t)=>n=>t(e(n))
  , My = (...e)=>e.reduce(ZO);
function Ny(e, t) {
    return XO(e) ? n=>ku(e, t, n) : Pt.test(e) ? Iy(e, t) : xy(e, t)
}
const Dy = (e,t)=>{
    const n = [...e]
      , r = n.length
      , o = e.map((i,s)=>Ny(i, t[s]));
    return i=>{
        for (let s = 0; s < r; s++)
            n[s] = o[s](i);
        return n
    }
}
  , $O = (e,t)=>{
    const n = Object.assign(Object.assign({}, e), t)
      , r = {};
    for (const o in n)
        e[o] !== void 0 && t[o] !== void 0 && (r[o] = Ny(e[o], t[o]));
    return o=>{
        for (const i in r)
            n[i] = r[i](o);
        return n
    }
}
;
function Oh(e) {
    const t = Fi.parse(e)
      , n = t.length;
    let r = 0
      , o = 0
      , i = 0;
    for (let s = 0; s < n; s++)
        r || typeof t[s] == "number" ? r++ : t[s].hue !== void 0 ? i++ : o++;
    return {
        parsed: t,
        numNumbers: r,
        numRGB: o,
        numHSL: i
    }
}
const xy = (e,t)=>{
    const n = Fi.createTransformer(t)
      , r = Oh(e)
      , o = Oh(t);
    return r.numHSL === o.numHSL && r.numRGB === o.numRGB && r.numNumbers >= o.numNumbers ? My(Dy(r.parsed, o.parsed), n) : s=>`${s > 0 ? t : e}`
}
  , eR = (e,t)=>n=>ku(e, t, n);
function tR(e) {
    if (typeof e == "number")
        return eR;
    if (typeof e == "string")
        return Pt.test(e) ? Iy : xy;
    if (Array.isArray(e))
        return Dy;
    if (typeof e == "object")
        return $O
}
function nR(e, t, n) {
    const r = []
      , o = n || tR(e[0])
      , i = e.length - 1;
    for (let s = 0; s < i; s++) {
        let a = o(e[s], e[s + 1]);
        if (t) {
            const l = Array.isArray(t) ? t[s] : t;
            a = My(l, a)
        }
        r.push(a)
    }
    return r
}
function rR([e,t], [n]) {
    return r=>n(Ty(e, t, r))
}
function oR(e, t) {
    const n = e.length
      , r = n - 1;
    return o=>{
        let i = 0
          , s = !1;
        if (o <= e[0] ? s = !0 : o >= e[r] && (i = r - 1,
        s = !0),
        !s) {
            let l = 1;
            for (; l < n && !(e[l] > o || l === r); l++)
                ;
            i = l - 1
        }
        const a = Ty(e[i], e[i + 1], o);
        return t[i](a)
    }
}
function Fy(e, t, {clamp: n=!0, ease: r, mixer: o}={}) {
    const i = e.length;
    wh(i === t.length),
    wh(!r || !Array.isArray(r) || r.length === i - 1),
    e[0] > e[i - 1] && (e = [].concat(e),
    t = [].concat(t),
    e.reverse(),
    t.reverse());
    const s = nR(t, r, o)
      , a = i === 2 ? rR(e, s) : oR(e, s);
    return n ? l=>a(pc(e[0], e[i - 1], l)) : a
}
const _a = e=>t=>1 - e(1 - t)
  , Cu = e=>t=>t <= .5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2
  , iR = e=>t=>Math.pow(t, e)
  , Uy = e=>t=>t * t * ((e + 1) * t - e)
  , sR = e=>{
    const t = Uy(e);
    return n=>(n *= 2) < 1 ? .5 * t(n) : .5 * (2 - Math.pow(2, -10 * (n - 1)))
}
  , Vy = 1.525
  , aR = 4 / 11
  , lR = 8 / 11
  , cR = 9 / 10
  , By = e=>e
  , Ou = iR(2)
  , uR = _a(Ou)
  , Hy = Cu(Ou)
  , jy = e=>1 - Math.sin(Math.acos(e))
  , Ky = _a(jy)
  , fR = Cu(Ky)
  , Ru = Uy(Vy)
  , dR = _a(Ru)
  , hR = Cu(Ru)
  , pR = sR(Vy)
  , mR = 4356 / 361
  , gR = 35442 / 1805
  , yR = 16061 / 1805
  , Us = e=>{
    if (e === 1 || e === 0)
        return e;
    const t = e * e;
    return e < aR ? 7.5625 * t : e < lR ? 9.075 * t - 9.9 * e + 3.4 : e < cR ? mR * t - gR * e + yR : 10.8 * e * e - 20.52 * e + 10.72
}
  , vR = _a(Us)
  , _R = e=>e < .5 ? .5 * (1 - Us(1 - e * 2)) : .5 * Us(e * 2 - 1) + .5;
function bR(e, t) {
    return e.map(()=>t || Hy).splice(0, e.length - 1)
}
function ER(e) {
    const t = e.length;
    return e.map((n,r)=>r !== 0 ? r / (t - 1) : 0)
}
function SR(e, t) {
    return e.map(n=>n * t)
}
function fs({from: e=0, to: t=1, ease: n, offset: r, duration: o=300}) {
    const i = {
        done: !1,
        value: e
    }
      , s = Array.isArray(t) ? t : [e, t]
      , a = SR(r && r.length === s.length ? r : ER(s), o);
    function l() {
        return Fy(a, s, {
            ease: Array.isArray(n) ? n : bR(s, n)
        })
    }
    let c = l();
    return {
        next: u=>(i.value = c(u),
        i.done = u >= o,
        i),
        flipTarget: ()=>{
            s.reverse(),
            c = l()
        }
    }
}
function wR({velocity: e=0, from: t=0, power: n=.8, timeConstant: r=350, restDelta: o=.5, modifyTarget: i}) {
    const s = {
        done: !1,
        value: t
    };
    let a = n * e;
    const l = t + a
      , c = i === void 0 ? l : i(l);
    return c !== l && (a = c - t),
    {
        next: u=>{
            const f = -a * Math.exp(-u / r);
            return s.done = !(f > o || f < -o),
            s.value = s.done ? c : c + f,
            s
        }
        ,
        flipTarget: ()=>{}
    }
}
const Rh = {
    keyframes: fs,
    spring: Tu,
    decay: wR
};
function TR(e) {
    if (Array.isArray(e.to))
        return fs;
    if (Rh[e.type])
        return Rh[e.type];
    const t = new Set(Object.keys(e));
    return t.has("ease") || t.has("duration") && !t.has("dampingRatio") ? fs : t.has("dampingRatio") || t.has("stiffness") || t.has("mass") || t.has("damping") || t.has("restSpeed") || t.has("restDelta") ? Tu : fs
}
function qy(e, t, n=0) {
    return e - t - n
}
function kR(e, t, n=0, r=!0) {
    return r ? qy(t + -e, t, n) : t - (e - t) + n
}
function AR(e, t, n, r) {
    return r ? e >= t + n : e <= -n
}
const LR = e=>{
    const t = ({delta: n})=>e(n);
    return {
        start: ()=>hc.update(t, !0),
        stop: ()=>LO.update(t)
    }
}
;
function Yy(e) {
    var t, n, {from: r, autoplay: o=!0, driver: i=LR, elapsed: s=0, repeat: a=0, repeatType: l="loop", repeatDelay: c=0, onPlay: u, onStop: f, onComplete: d, onRepeat: m, onUpdate: _} = e, b = wy(e, ["from", "autoplay", "driver", "elapsed", "repeat", "repeatType", "repeatDelay", "onPlay", "onStop", "onComplete", "onRepeat", "onUpdate"]);
    let {to: w} = b, g, E = 0, p = b.duration, y, S = !1, T = !0, A;
    const L = TR(b);
    !((n = (t = L).needsInterpolation) === null || n === void 0) && n.call(t, r, w) && (A = Fy([0, 100], [r, w], {
        clamp: !1
    }),
    r = 0,
    w = 100);
    const O = L(Object.assign(Object.assign({}, b), {
        from: r,
        to: w
    }));
    function I() {
        E++,
        l === "reverse" ? (T = E % 2 === 0,
        s = kR(s, p, c, T)) : (s = qy(s, p, c),
        l === "mirror" && O.flipTarget()),
        S = !1,
        m && m()
    }
    function V() {
        g.stop(),
        d && d()
    }
    function x(Y) {
        if (T || (Y = -Y),
        s += Y,
        !S) {
            const j = O.next(Math.max(0, s));
            y = j.value,
            A && (y = A(y)),
            S = T ? j.done : s <= 0
        }
        _ == null || _(y),
        S && (E === 0 && (p ?? (p = s)),
        E < a ? AR(s, p, c, T) && I() : V())
    }
    function X() {
        u == null || u(),
        g = i(x),
        g.start()
    }
    return o && X(),
    {
        stop: ()=>{
            f == null || f(),
            g.stop()
        }
    }
}
function Wy(e, t) {
    return t ? e * (1e3 / t) : 0
}
function CR({from: e=0, velocity: t=0, min: n, max: r, power: o=.8, timeConstant: i=750, bounceStiffness: s=500, bounceDamping: a=10, restDelta: l=1, modifyTarget: c, driver: u, onUpdate: f, onComplete: d, onStop: m}) {
    let _;
    function b(p) {
        return n !== void 0 && p < n || r !== void 0 && p > r
    }
    function w(p) {
        return n === void 0 ? r : r === void 0 || Math.abs(n - p) < Math.abs(r - p) ? n : r
    }
    function g(p) {
        _ == null || _.stop(),
        _ = Yy(Object.assign(Object.assign({}, p), {
            driver: u,
            onUpdate: y=>{
                var S;
                f == null || f(y),
                (S = p.onUpdate) === null || S === void 0 || S.call(p, y)
            }
            ,
            onComplete: d,
            onStop: m
        }))
    }
    function E(p) {
        g(Object.assign({
            type: "spring",
            stiffness: s,
            damping: a,
            restDelta: l
        }, p))
    }
    if (b(e))
        E({
            from: e,
            velocity: t,
            to: w(e)
        });
    else {
        let p = o * t + e;
        typeof c < "u" && (p = c(p));
        const y = w(p)
          , S = y === n ? -1 : 1;
        let T, A;
        const L = O=>{
            T = A,
            A = O,
            t = Wy(O - T, Sy().delta),
            (S === 1 && O > y || S === -1 && O < y) && E({
                from: O,
                to: y,
                velocity: t
            })
        }
        ;
        g({
            type: "decay",
            from: e,
            velocity: t,
            timeConstant: i,
            power: o,
            restDelta: l,
            modifyTarget: c,
            onUpdate: b(p) ? L : void 0
        })
    }
    return {
        stop: ()=>_ == null ? void 0 : _.stop()
    }
}
const Jy = (e,t)=>1 - 3 * t + 3 * e
  , zy = (e,t)=>3 * t - 6 * e
  , Gy = e=>3 * e
  , Vs = (e,t,n)=>((Jy(t, n) * e + zy(t, n)) * e + Gy(t)) * e
  , Qy = (e,t,n)=>3 * Jy(t, n) * e * e + 2 * zy(t, n) * e + Gy(t)
  , OR = 1e-7
  , RR = 10;
function PR(e, t, n, r, o) {
    let i, s, a = 0;
    do
        s = t + (n - t) / 2,
        i = Vs(s, r, o) - e,
        i > 0 ? n = s : t = s;
    while (Math.abs(i) > OR && ++a < RR);
    return s
}
const IR = 8
  , MR = .001;
function NR(e, t, n, r) {
    for (let o = 0; o < IR; ++o) {
        const i = Qy(t, n, r);
        if (i === 0)
            return t;
        const s = Vs(t, n, r) - e;
        t -= s / i
    }
    return t
}
const ds = 11
  , ns = 1 / (ds - 1);
function DR(e, t, n, r) {
    if (e === t && n === r)
        return By;
    const o = new Float32Array(ds);
    for (let s = 0; s < ds; ++s)
        o[s] = Vs(s * ns, e, n);
    function i(s) {
        let a = 0
          , l = 1;
        const c = ds - 1;
        for (; l !== c && o[l] <= s; ++l)
            a += ns;
        --l;
        const u = (s - o[l]) / (o[l + 1] - o[l])
          , f = a + u * ns
          , d = Qy(f, e, n);
        return d >= MR ? NR(s, f, e, n) : d === 0 ? f : PR(s, a, a + ns, e, n)
    }
    return s=>s === 0 || s === 1 ? s : Vs(i(s), t, r)
}
const $a = {};
var xR = Object.defineProperty
  , FR = (e,t,n)=>t in e ? xR(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : e[t] = n
  , UR = (e,t,n)=>(FR(e, typeof t != "symbol" ? t + "" : t, n),
n);
class VR {
    constructor() {
        UR(this, "subscriptions", new Set)
    }
    add(t) {
        return this.subscriptions.add(t),
        ()=>this.subscriptions.delete(t)
    }
    notify(t, n, r) {
        if (this.subscriptions.size)
            for (const o of this.subscriptions)
                o(t, n, r)
    }
    clear() {
        this.subscriptions.clear()
    }
}
var BR = Object.defineProperty
  , HR = (e,t,n)=>t in e ? BR(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : e[t] = n
  , hn = (e,t,n)=>(HR(e, typeof t != "symbol" ? t + "" : t, n),
n);
function Ph(e) {
    return !isNaN(parseFloat(e))
}
class jR {
    constructor(t) {
        hn(this, "current"),
        hn(this, "prev"),
        hn(this, "timeDelta", 0),
        hn(this, "lastUpdated", 0),
        hn(this, "updateSubscribers", new VR),
        hn(this, "stopAnimation"),
        hn(this, "canTrackVelocity", !1),
        hn(this, "updateAndNotify", n=>{
            this.prev = this.current,
            this.current = n;
            const {delta: r, timestamp: o} = Sy();
            this.lastUpdated !== o && (this.timeDelta = r,
            this.lastUpdated = o),
            hc.postRender(this.scheduleVelocityCheck),
            this.updateSubscribers.notify(this.current)
        }
        ),
        hn(this, "scheduleVelocityCheck", ()=>hc.postRender(this.velocityCheck)),
        hn(this, "velocityCheck", ({timestamp: n})=>{
            this.canTrackVelocity || (this.canTrackVelocity = Ph(this.current)),
            n !== this.lastUpdated && (this.prev = this.current)
        }
        ),
        this.prev = this.current = t,
        this.canTrackVelocity = Ph(this.current)
    }
    onChange(t) {
        return this.updateSubscribers.add(t)
    }
    clearListeners() {
        this.updateSubscribers.clear()
    }
    set(t) {
        this.updateAndNotify(t)
    }
    get() {
        return this.current
    }
    getPrevious() {
        return this.prev
    }
    getVelocity() {
        return this.canTrackVelocity ? Wy(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta) : 0
    }
    start(t) {
        return this.stop(),
        new Promise(n=>{
            const {stop: r} = t(n);
            this.stopAnimation = r
        }
        ).then(()=>this.clearAnimation())
    }
    stop() {
        this.stopAnimation && this.stopAnimation(),
        this.clearAnimation()
    }
    isAnimating() {
        return !!this.stopAnimation
    }
    clearAnimation() {
        this.stopAnimation = null
    }
    destroy() {
        this.updateSubscribers.clear(),
        this.stop()
    }
}
function KR(e) {
    return new jR(e)
}
const {isArray: qR} = Array;
function YR() {
    const e = ye({})
      , t = r=>{
        const o = i=>{
            e.value[i] && (e.value[i].stop(),
            e.value[i].destroy(),
            delete e.value[i])
        }
        ;
        r ? qR(r) ? r.forEach(o) : o(r) : Object.keys(e.value).forEach(o)
    }
      , n = (r,o,i)=>{
        if (e.value[r])
            return e.value[r];
        const s = KR(o);
        return s.onChange(a=>i[r] = a),
        e.value[r] = s,
        s
    }
    ;
    return bO(t),
    {
        motionValues: e,
        get: n,
        stop: t
    }
}
function WR(e) {
    return Array.isArray(e)
}
function Tr() {
    return {
        type: "spring",
        stiffness: 500,
        damping: 25,
        restDelta: .5,
        restSpeed: 10
    }
}
function el(e) {
    return {
        type: "spring",
        stiffness: 550,
        damping: e === 0 ? 2 * Math.sqrt(550) : 30,
        restDelta: .01,
        restSpeed: 10
    }
}
function JR(e) {
    return {
        type: "spring",
        stiffness: 550,
        damping: e === 0 ? 100 : 30,
        restDelta: .01,
        restSpeed: 10
    }
}
function tl() {
    return {
        type: "keyframes",
        ease: "linear",
        duration: 300
    }
}
function zR(e) {
    return {
        type: "keyframes",
        duration: 800,
        values: e
    }
}
const Ih = {
    default: JR,
    x: Tr,
    y: Tr,
    z: Tr,
    rotate: Tr,
    rotateX: Tr,
    rotateY: Tr,
    rotateZ: Tr,
    scaleX: el,
    scaleY: el,
    scale: el,
    backgroundColor: tl,
    color: tl,
    opacity: tl
};
function Xy(e, t) {
    let n;
    return WR(t) ? n = zR : n = Ih[e] || Ih.default,
    {
        to: t,
        ...n(t)
    }
}
const Mh = {
    ...xi,
    transform: Math.round
}
  , Zy = {
    color: Pt,
    backgroundColor: Pt,
    outlineColor: Pt,
    fill: Pt,
    stroke: Pt,
    borderColor: Pt,
    borderTopColor: Pt,
    borderRightColor: Pt,
    borderBottomColor: Pt,
    borderLeftColor: Pt,
    borderWidth: ve,
    borderTopWidth: ve,
    borderRightWidth: ve,
    borderBottomWidth: ve,
    borderLeftWidth: ve,
    borderRadius: ve,
    radius: ve,
    borderTopLeftRadius: ve,
    borderTopRightRadius: ve,
    borderBottomRightRadius: ve,
    borderBottomLeftRadius: ve,
    width: ve,
    maxWidth: ve,
    height: ve,
    maxHeight: ve,
    size: ve,
    top: ve,
    right: ve,
    bottom: ve,
    left: ve,
    padding: ve,
    paddingTop: ve,
    paddingRight: ve,
    paddingBottom: ve,
    paddingLeft: ve,
    margin: ve,
    marginTop: ve,
    marginRight: ve,
    marginBottom: ve,
    marginLeft: ve,
    rotate: wr,
    rotateX: wr,
    rotateY: wr,
    rotateZ: wr,
    scale: ts,
    scaleX: ts,
    scaleY: ts,
    scaleZ: ts,
    skew: wr,
    skewX: wr,
    skewY: wr,
    distance: ve,
    translateX: ve,
    translateY: ve,
    translateZ: ve,
    x: ve,
    y: ve,
    z: ve,
    perspective: ve,
    transformPerspective: ve,
    opacity: Zo,
    originX: Ah,
    originY: Ah,
    originZ: ve,
    zIndex: Mh,
    filter: vc,
    WebkitFilter: vc,
    fillOpacity: Zo,
    strokeOpacity: Zo,
    numOctaves: Mh
}
  , Pu = e=>Zy[e];
function $y(e, t) {
    return t && typeof e == "number" && t.transform ? t.transform(e) : e
}
function GR(e, t) {
    let n = Pu(e);
    return n !== vc && (n = Fi),
    n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
}
const QR = {
    linear: By,
    easeIn: Ou,
    easeInOut: Hy,
    easeOut: uR,
    circIn: jy,
    circInOut: fR,
    circOut: Ky,
    backIn: Ru,
    backInOut: hR,
    backOut: dR,
    anticipate: pR,
    bounceIn: vR,
    bounceInOut: _R,
    bounceOut: Us
};
function Nh(e) {
    if (Array.isArray(e)) {
        const [t,n,r,o] = e;
        return DR(t, n, r, o)
    } else if (typeof e == "string")
        return QR[e];
    return e
}
function XR(e) {
    return Array.isArray(e) && typeof e[0] != "number"
}
function Dh(e, t) {
    return e === "zIndex" ? !1 : !!(typeof t == "number" || Array.isArray(t) || typeof t == "string" && Fi.test(t) && !t.startsWith("url("))
}
function ZR(e) {
    return Array.isArray(e.to) && e.to[0] === null && (e.to = [...e.to],
    e.to[0] = e.from),
    e
}
function $R({ease: e, times: t, delay: n, ...r}) {
    const o = {
        ...r
    };
    return t && (o.offset = t),
    e && (o.ease = XR(e) ? e.map(Nh) : Nh(e)),
    n && (o.elapsed = -n),
    o
}
function eP(e, t, n) {
    return Array.isArray(t.to) && (e.duration || (e.duration = 800)),
    ZR(t),
    tP(e) || (e = {
        ...e,
        ...Xy(n, t.to)
    }),
    {
        ...t,
        ...$R(e)
    }
}
function tP({delay: e, repeat: t, repeatType: n, repeatDelay: r, from: o, ...i}) {
    return !!Object.keys(i).length
}
function nP(e, t) {
    return e[t] || e.default || e
}
function rP(e, t, n, r, o) {
    const i = nP(r, e);
    let s = i.from === null || i.from === void 0 ? t.get() : i.from;
    const a = Dh(e, n);
    s === "none" && a && typeof n == "string" && (s = GR(e, n));
    const l = Dh(e, s);
    function c(f) {
        const d = {
            from: s,
            to: n,
            velocity: r.velocity ? r.velocity : t.getVelocity(),
            onUpdate: m=>t.set(m)
        };
        return i.type === "inertia" || i.type === "decay" ? CR({
            ...d,
            ...i
        }) : Yy({
            ...eP(i, d, e),
            onUpdate: m=>{
                d.onUpdate(m),
                i.onUpdate && i.onUpdate(m)
            }
            ,
            onComplete: ()=>{
                r.onComplete && r.onComplete(),
                o && o(),
                f && f()
            }
        })
    }
    function u(f) {
        return t.set(n),
        r.onComplete && r.onComplete(),
        o && o(),
        f && f(),
        {
            stop: ()=>{}
        }
    }
    return !l || !a || i.type === !1 ? u : c
}
function oP() {
    const {motionValues: e, stop: t, get: n} = YR();
    return {
        motionValues: e,
        stop: t,
        push: (o,i,s,a={},l)=>{
            const c = s[o]
              , u = n(o, c, s);
            if (a && a.immediate) {
                u.set(i);
                return
            }
            const f = rP(o, u, i, a, l);
            u.start(f)
        }
    }
}
function iP(e, t={}, {motionValues: n, push: r, stop: o}=oP()) {
    const i = z(t)
      , s = ye(!1);
    Ue(n, f=>{
        s.value = Object.values(f).filter(d=>d.isAnimating()).length > 0
    }
    , {
        immediate: !0,
        deep: !0
    });
    const a = f=>{
        if (!i || !i[f])
            throw new Error(`The variant ${f} does not exist.`);
        return i[f]
    }
      , l = f=>(typeof f == "string" && (f = a(f)),
    Promise.all(Object.entries(f).map(([d,m])=>{
        if (d !== "transition")
            return new Promise(_=>r(d, m, e, f.transition || Xy(d, f[d]), _))
    }
    ).filter(Boolean)));
    return {
        isAnimating: s,
        apply: l,
        set: f=>{
            const d = Fs(f) ? f : a(f);
            Object.entries(d).forEach(([m,_])=>{
                m !== "transition" && r(m, _, e, {
                    immediate: !0
                })
            }
            )
        }
        ,
        leave: async f=>{
            let d;
            if (i && (i.leave && (d = i.leave),
            !i.leave && i.initial && (d = i.initial)),
            !d) {
                f();
                return
            }
            await l(d),
            f()
        }
        ,
        stop: o
    }
}
const Iu = typeof window < "u"
  , sP = ()=>Iu && window.onpointerdown === null
  , aP = ()=>Iu && window.ontouchstart === null
  , lP = ()=>Iu && window.onmousedown === null;
function cP({target: e, state: t, variants: n, apply: r}) {
    const o = z(n)
      , i = ye(!1)
      , s = ye(!1)
      , a = ye(!1)
      , l = le(()=>{
        let u = [];
        return o && (o.hovered && (u = [...u, ...Object.keys(o.hovered)]),
        o.tapped && (u = [...u, ...Object.keys(o.tapped)]),
        o.focused && (u = [...u, ...Object.keys(o.focused)])),
        u
    }
    )
      , c = le(()=>{
        const u = {};
        Object.assign(u, t.value),
        i.value && o.hovered && Object.assign(u, o.hovered),
        s.value && o.tapped && Object.assign(u, o.tapped),
        a.value && o.focused && Object.assign(u, o.focused);
        for (const f in u)
            l.value.includes(f) || delete u[f];
        return u
    }
    );
    o.hovered && (Ot(e, "mouseenter", ()=>i.value = !0),
    Ot(e, "mouseleave", ()=>{
        i.value = !1,
        s.value = !1
    }
    ),
    Ot(e, "mouseout", ()=>{
        i.value = !1,
        s.value = !1
    }
    )),
    o.tapped && (lP() && (Ot(e, "mousedown", ()=>s.value = !0),
    Ot(e, "mouseup", ()=>s.value = !1)),
    sP() && (Ot(e, "pointerdown", ()=>s.value = !0),
    Ot(e, "pointerup", ()=>s.value = !1)),
    aP() && (Ot(e, "touchstart", ()=>s.value = !0),
    Ot(e, "touchend", ()=>s.value = !1))),
    o.focused && (Ot(e, "focus", ()=>a.value = !0),
    Ot(e, "blur", ()=>a.value = !1)),
    Ue(c, r)
}
function uP({set: e, target: t, variants: n, variant: r}) {
    const o = z(n);
    Ue(()=>t, ()=>{
        o && (o.initial && e("initial"),
        o.enter && (r.value = "enter"))
    }
    , {
        immediate: !0,
        flush: "pre"
    })
}
function fP({state: e, apply: t}) {
    Ue(e, n=>{
        n && t(n)
    }
    , {
        immediate: !0
    })
}
function e0({target: e, variants: t, variant: n}) {
    const r = z(t);
    r && (r.visible || r.visibleOnce) && wO(e, ([{isIntersecting: o}])=>{
        r.visible ? o ? n.value = "visible" : n.value = "initial" : r.visibleOnce && (o && n.value !== "visibleOnce" ? n.value = "visibleOnce" : n.value || (n.value = "initial"))
    }
    )
}
function dP(e, t={
    syncVariants: !0,
    lifeCycleHooks: !0,
    visibilityHooks: !0,
    eventListeners: !0
}) {
    t.lifeCycleHooks && uP(e),
    t.syncVariants && fP(e),
    t.visibilityHooks && e0(e),
    t.eventListeners && cP(e)
}
function t0(e={}) {
    const t = yt({
        ...e
    })
      , n = ye({});
    return Ue(t, ()=>{
        const r = {};
        for (const [o,i] of Object.entries(t)) {
            const s = Pu(o)
              , a = $y(i, s);
            r[o] = a
        }
        n.value = r
    }
    , {
        immediate: !0,
        deep: !0
    }),
    {
        state: t,
        style: n
    }
}
function Mu(e, t) {
    Ue(()=>Qo(e), n=>{
        n && t(n)
    }
    , {
        immediate: !0
    })
}
const hP = {
    x: "translateX",
    y: "translateY",
    z: "translateZ"
};
function n0(e={}, t=!0) {
    const n = yt({
        ...e
    })
      , r = ye("");
    return Ue(n, o=>{
        let i = ""
          , s = !1;
        if (t && (o.x || o.y || o.z)) {
            const a = [o.x || 0, o.y || 0, o.z || 0].map(ve.transform).join(",");
            i += `translate3d(${a}) `,
            s = !0
        }
        for (const [a,l] of Object.entries(o)) {
            if (t && (a === "x" || a === "y" || a === "z"))
                continue;
            const c = Pu(a)
              , u = $y(l, c);
            i += `${hP[a] || a}(${u}) `
        }
        t && !s && (i += "translateZ(0px) "),
        r.value = i.trim()
    }
    , {
        immediate: !0,
        deep: !0
    }),
    {
        state: n,
        transform: r
    }
}
const pP = ["", "X", "Y", "Z"]
  , mP = ["perspective", "translate", "scale", "rotate", "skew"]
  , r0 = ["transformPerspective", "x", "y", "z"];
mP.forEach(e=>{
    pP.forEach(t=>{
        const n = e + t;
        r0.push(n)
    }
    )
}
);
const gP = new Set(r0);
function Nu(e) {
    return gP.has(e)
}
const yP = new Set(["originX", "originY", "originZ"]);
function o0(e) {
    return yP.has(e)
}
function vP(e) {
    const t = {}
      , n = {};
    return Object.entries(e).forEach(([r,o])=>{
        Nu(r) || o0(r) ? t[r] = o : n[r] = o
    }
    ),
    {
        transform: t,
        style: n
    }
}
function i0(e) {
    const {transform: t, style: n} = vP(e)
      , {transform: r} = n0(t)
      , {style: o} = t0(n);
    return r.value && (o.value.transform = r.value),
    o.value
}
function _P(e, t) {
    let n, r;
    const {state: o, style: i} = t0();
    return Mu(e, s=>{
        r = s;
        for (const a of Object.keys(Zy))
            s.style[a] === null || s.style[a] === "" || Nu(a) || o0(a) || (o[a] = s.style[a]);
        n && Object.entries(n).forEach(([a,l])=>s.style[a] = l),
        t && t(o)
    }
    ),
    Ue(i, s=>{
        if (!r) {
            n = s;
            return
        }
        for (const a in s)
            r.style[a] = s[a]
    }
    , {
        immediate: !0
    }),
    {
        style: o
    }
}
function bP(e) {
    const t = e.trim().split(/\) |\)/);
    if (t.length === 1)
        return {};
    const n = r=>r.endsWith("px") || r.endsWith("deg") ? parseFloat(r) : isNaN(Number(r)) ? Number(r) : r;
    return t.reduce((r,o)=>{
        if (!o)
            return r;
        const [i,s] = o.split("(")
          , l = s.split(",").map(u=>n(u.endsWith(")") ? u.replace(")", "") : u.trim()))
          , c = l.length === 1 ? l[0] : l;
        return {
            ...r,
            [i]: c
        }
    }
    , {})
}
function EP(e, t) {
    Object.entries(bP(t)).forEach(([n,r])=>{
        const o = ["x", "y", "z"];
        if (n === "translate3d") {
            if (r === 0) {
                o.forEach(i=>e[i] = 0);
                return
            }
            r.forEach((i,s)=>e[o[s]] = i);
            return
        }
        if (r = parseFloat(r),
        n === "translateX") {
            e.x = r;
            return
        }
        if (n === "translateY") {
            e.y = r;
            return
        }
        if (n === "translateZ") {
            e.z = r;
            return
        }
        e[n] = r
    }
    )
}
function SP(e, t) {
    let n, r;
    const {state: o, transform: i} = n0();
    return Mu(e, s=>{
        r = s,
        s.style.transform && EP(o, s.style.transform),
        n && (s.style.transform = n),
        t && t(o)
    }
    ),
    Ue(i, s=>{
        if (!r) {
            n = s;
            return
        }
        r.style.transform = s
    }
    , {
        immediate: !0
    }),
    {
        transform: o
    }
}
function wP(e, t) {
    const n = yt({})
      , r = s=>Object.entries(s).forEach(([a,l])=>n[a] = l)
      , {style: o} = _P(e, r)
      , {transform: i} = SP(e, r);
    return Ue(n, s=>{
        Object.entries(s).forEach(([a,l])=>{
            const c = Nu(a) ? i : o;
            c[a] && c[a] === l || (c[a] = l)
        }
        )
    }
    , {
        immediate: !0,
        deep: !0
    }),
    Mu(e, ()=>t && r(t)),
    {
        motionProperties: n,
        style: o,
        transform: i
    }
}
function TP(e={}) {
    const t = z(e)
      , n = ye();
    return {
        state: le(()=>{
            if (n.value)
                return t[n.value]
        }
        ),
        variant: n
    }
}
function s0(e, t={}, n) {
    const {motionProperties: r} = wP(e)
      , {variant: o, state: i} = TP(t)
      , s = iP(r, t)
      , a = {
        target: e,
        variant: o,
        variants: t,
        state: i,
        motionProperties: r,
        ...s
    };
    return dP(a, n),
    a
}
const kP = ["initial", "enter", "leave", "visible", "visible-once", "visibleOnce", "hovered", "tapped", "focused", "delay"];
function AP(e, t) {
    const n = e.props ? e.props : e.data && e.data.attrs ? e.data.attrs : {};
    n && (n.variants && Fs(n.variants) && (t.value = {
        ...t.value,
        ...n.variants
    }),
    kP.forEach(r=>{
        if (r === "delay") {
            if (n && n[r] && typeof n[r] == "number") {
                const o = n[r];
                t && t.value && (t.value.enter && (t.value.enter.transition || (t.value.enter.transition = {}),
                t.value.enter.transition = {
                    delay: o,
                    ...t.value.enter.transition
                }),
                t.value.visible && (t.value.visible.transition || (t.value.visible.transition = {}),
                t.value.visible.transition = {
                    delay: o,
                    ...t.value.visible.transition
                }),
                t.value.visibleOnce && (t.value.visibleOnce.transition || (t.value.visibleOnce.transition = {}),
                t.value.visibleOnce.transition = {
                    delay: o,
                    ...t.value.visibleOnce.transition
                }))
            }
            return
        }
        if (n && n[r] && Fs(n[r])) {
            const o = n[r];
            r === "visible-once" && (r = "visibleOnce"),
            t.value[r] = o
        }
    }
    ))
}
function nl(e) {
    return {
        created: (r,o,i)=>{
            const s = o.value && typeof o.value == "string" ? o.value : i.key;
            s && $a[s] && $a[s].stop();
            const a = ye(e || {});
            typeof o.value == "object" && (a.value = o.value),
            AP(i, a);
            const c = s0(r, a, {
                eventListeners: !0,
                lifeCycleHooks: !0,
                syncVariants: !0,
                visibilityHooks: !1
            });
            r.motionInstance = c,
            s && ($a[s] = c)
        }
        ,
        mounted: (r,o,i)=>{
            r.motionInstance && e0(r.motionInstance)
        }
        ,
        getSSRProps(r, o) {
            let {initial: i} = r.value || o && (o == null ? void 0 : o.props) || {};
            i = z(i);
            const s = Xc((e == null ? void 0 : e.initial) || {}, i || {});
            return !s || Object.keys(s).length === 0 ? void 0 : {
                style: i0(s)
            }
        }
    }
}
const LP = {
    initial: {
        opacity: 0
    },
    enter: {
        opacity: 1
    }
}
  , CP = {
    initial: {
        opacity: 0
    },
    visible: {
        opacity: 1
    }
}
  , OP = {
    initial: {
        opacity: 0
    },
    visibleOnce: {
        opacity: 1
    }
}
  , RP = {
    initial: {
        scale: 0,
        opacity: 0
    },
    enter: {
        scale: 1,
        opacity: 1
    }
}
  , PP = {
    initial: {
        scale: 0,
        opacity: 0
    },
    visible: {
        scale: 1,
        opacity: 1
    }
}
  , IP = {
    initial: {
        scale: 0,
        opacity: 0
    },
    visibleOnce: {
        scale: 1,
        opacity: 1
    }
}
  , MP = {
    initial: {
        x: -100,
        rotate: 90,
        opacity: 0
    },
    enter: {
        x: 0,
        rotate: 0,
        opacity: 1
    }
}
  , NP = {
    initial: {
        x: -100,
        rotate: 90,
        opacity: 0
    },
    visible: {
        x: 0,
        rotate: 0,
        opacity: 1
    }
}
  , DP = {
    initial: {
        x: -100,
        rotate: 90,
        opacity: 0
    },
    visibleOnce: {
        x: 0,
        rotate: 0,
        opacity: 1
    }
}
  , xP = {
    initial: {
        x: 100,
        rotate: -90,
        opacity: 0
    },
    enter: {
        x: 0,
        rotate: 0,
        opacity: 1
    }
}
  , FP = {
    initial: {
        x: 100,
        rotate: -90,
        opacity: 0
    },
    visible: {
        x: 0,
        rotate: 0,
        opacity: 1
    }
}
  , UP = {
    initial: {
        x: 100,
        rotate: -90,
        opacity: 0
    },
    visibleOnce: {
        x: 0,
        rotate: 0,
        opacity: 1
    }
}
  , VP = {
    initial: {
        y: -100,
        rotate: -90,
        opacity: 0
    },
    enter: {
        y: 0,
        rotate: 0,
        opacity: 1
    }
}
  , BP = {
    initial: {
        y: -100,
        rotate: -90,
        opacity: 0
    },
    visible: {
        y: 0,
        rotate: 0,
        opacity: 1
    }
}
  , HP = {
    initial: {
        y: -100,
        rotate: -90,
        opacity: 0
    },
    visibleOnce: {
        y: 0,
        rotate: 0,
        opacity: 1
    }
}
  , jP = {
    initial: {
        y: 100,
        rotate: 90,
        opacity: 0
    },
    enter: {
        y: 0,
        rotate: 0,
        opacity: 1
    }
}
  , KP = {
    initial: {
        y: 100,
        rotate: 90,
        opacity: 0
    },
    visible: {
        y: 0,
        rotate: 0,
        opacity: 1
    }
}
  , qP = {
    initial: {
        y: 100,
        rotate: 90,
        opacity: 0
    },
    visibleOnce: {
        y: 0,
        rotate: 0,
        opacity: 1
    }
}
  , YP = {
    initial: {
        x: -100,
        opacity: 0
    },
    enter: {
        x: 0,
        opacity: 1
    }
}
  , WP = {
    initial: {
        x: -100,
        opacity: 0
    },
    visible: {
        x: 0,
        opacity: 1
    }
}
  , JP = {
    initial: {
        x: -100,
        opacity: 0
    },
    visibleOnce: {
        x: 0,
        opacity: 1
    }
}
  , zP = {
    initial: {
        x: 100,
        opacity: 0
    },
    enter: {
        x: 0,
        opacity: 1
    }
}
  , GP = {
    initial: {
        x: 100,
        opacity: 0
    },
    visible: {
        x: 0,
        opacity: 1
    }
}
  , QP = {
    initial: {
        x: 100,
        opacity: 0
    },
    visibleOnce: {
        x: 0,
        opacity: 1
    }
}
  , XP = {
    initial: {
        y: -100,
        opacity: 0
    },
    enter: {
        y: 0,
        opacity: 1
    }
}
  , ZP = {
    initial: {
        y: -100,
        opacity: 0
    },
    visible: {
        y: 0,
        opacity: 1
    }
}
  , $P = {
    initial: {
        y: -100,
        opacity: 0
    },
    visibleOnce: {
        y: 0,
        opacity: 1
    }
}
  , eI = {
    initial: {
        y: 100,
        opacity: 0
    },
    enter: {
        y: 0,
        opacity: 1
    }
}
  , tI = {
    initial: {
        y: 100,
        opacity: 0
    },
    visible: {
        y: 0,
        opacity: 1
    }
}
  , nI = {
    initial: {
        y: 100,
        opacity: 0
    },
    visibleOnce: {
        y: 0,
        opacity: 1
    }
}
  , _c = {
    __proto__: null,
    fade: LP,
    fadeVisible: CP,
    fadeVisibleOnce: OP,
    pop: RP,
    popVisible: PP,
    popVisibleOnce: IP,
    rollBottom: jP,
    rollLeft: MP,
    rollRight: xP,
    rollTop: VP,
    rollVisibleBottom: KP,
    rollVisibleLeft: NP,
    rollVisibleOnceBottom: qP,
    rollVisibleOnceLeft: DP,
    rollVisibleOnceRight: UP,
    rollVisibleOnceTop: HP,
    rollVisibleRight: FP,
    rollVisibleTop: BP,
    slideBottom: eI,
    slideLeft: YP,
    slideRight: zP,
    slideTop: XP,
    slideVisibleBottom: tI,
    slideVisibleLeft: WP,
    slideVisibleOnceBottom: nI,
    slideVisibleOnceLeft: JP,
    slideVisibleOnceRight: QP,
    slideVisibleOnceTop: $P,
    slideVisibleRight: GP,
    slideVisibleTop: ZP
}
  , rI = Te({
    props: {
        is: {
            type: [String, Object],
            required: !1
        },
        preset: {
            type: String,
            required: !1
        },
        instance: {
            type: Object,
            required: !1
        },
        variants: {
            type: Object,
            required: !1
        },
        initial: {
            type: Object,
            required: !1
        },
        enter: {
            type: Object,
            required: !1
        },
        leave: {
            type: Object,
            required: !1
        },
        visible: {
            type: Object,
            required: !1
        },
        visibleOnce: {
            type: Object,
            required: !1
        },
        hovered: {
            type: Object,
            required: !1
        },
        tapped: {
            type: Object,
            required: !1
        },
        focused: {
            type: Object,
            required: !1
        },
        delay: {
            type: [Number, String],
            required: !1
        }
    },
    setup(e) {
        var a;
        const t = Rv()
          , n = yt({});
        if (!e.is && !t.default)
            return ()=>ot("div", {});
        const r = le(()=>{
            let l;
            return e.preset && (l = _c[e.preset]),
            l
        }
        )
          , o = le(()=>({
            initial: e.initial,
            enter: e.enter,
            leave: e.leave,
            visible: e.visible,
            visibleOnce: e.visibleOnce,
            hovered: e.hovered,
            tapped: e.tapped,
            focused: e.focused
        }))
          , i = le(()=>{
            const l = {
                ...o.value,
                ...r.value || {},
                ...e.variants || {}
            };
            return e.delay && (l.enter.transition = {
                ...l.enter.transition
            },
            l.enter.transition.delay = parseInt(e.delay)),
            l
        }
        )
          , s = le(()=>{
            if (!e.is)
                return;
            let l = e.is;
            return typeof s.value == "string" && !v0(l) && (l = Fr(l)),
            l
        }
        );
        if (((a = process == null ? void 0 : process.env) == null ? void 0 : a.NODE_ENV) === "development" || process != null && process.dev) {
            const l = c=>{
                var u;
                (u = c.variants) != null && u.initial && c.set("initial"),
                setTimeout(()=>{
                    var f, d, m;
                    (f = c.variants) != null && f.enter && c.apply("enter"),
                    (d = c.variants) != null && d.visible && c.apply("visible"),
                    (m = c.variants) != null && m.visibleOnce && c.apply("visibleOnce")
                }
                , 10)
            }
            ;
            Hc(()=>Object.entries(n).forEach(([c,u])=>l(u)))
        }
        return {
            slots: t,
            component: s,
            motionConfig: i,
            instances: n
        }
    },
    render({slots: e, motionConfig: t, instances: n, component: r}) {
        var a;
        const o = i0(t.initial || {})
          , i = (l,c)=>(l.props || (l.props = {}),
        l.props.style = o,
        l.props.onVnodeMounted = ({el: u})=>{
            const f = s0(u, t);
            n[c] = f
        }
        ,
        l);
        if (r) {
            const l = ot(r, void 0, e);
            return i(l, 0),
            l
        }
        return (((a = e.default) == null ? void 0 : a.call(e)) || []).map((l,c)=>i(l, c))
    }
});
function oI(e) {
    const t = "àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;"
      , n = "aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------"
      , r = new RegExp(t.split("").join("|"),"g");
    return e.toString().replace(/[A-Z]/g, o=>`-${o}`).toLowerCase().replace(/\s+/g, "-").replace(r, o=>n.charAt(t.indexOf(o))).replace(/&/g, "-and-").replace(/[^\w\-]+/g, "").replace(/\-\-+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
}
const iI = {
    install(e, t) {
        if (e.directive("motion", nl()),
        e.component("Motion", rI),
        !t || t && !t.excludePresets)
            for (const n in _c) {
                const r = _c[n];
                e.directive(`motion-${oI(n)}`, nl(r))
            }
        if (t && t.directives)
            for (const n in t.directives) {
                const r = t.directives[n];
                !r.initial && __DEV__ && console.warn(`Your directive v-motion-${n} is missing initial variant!`),
                e.directive(`motion-${n}`, nl(r))
            }
    }
}
  , sI = Et(e=>{
    const t = Ln();
    e.vueApp.use(iI, t.public.motion)
}
)
  , aI = Et({
    name: "nuxt:chunk-reload",
    setup(e) {
        const t = Mt()
          , n = Ln()
          , r = new Set;
        t.beforeEach(()=>{
            r.clear()
        }
        ),
        e.hook("app:chunkError", ({error: i})=>{
            r.add(i)
        }
        );
        function o(i) {
            const a = "href"in i && i.href[0] === "#" ? n.app.baseURL + i.href : wo(n.app.baseURL, i.fullPath);
            OL({
                path: a,
                persistState: !0
            })
        }
        e.hook("app:manifest:update", ()=>{
            t.beforeResolve(o)
        }
        ),
        t.onError((i,s)=>{
            r.has(i) && o(s)
        }
        )
    }
});
function lI(e) {
    return {
        all: e = e || new Map,
        on: function(t, n) {
            var r = e.get(t);
            r ? r.push(n) : e.set(t, [n])
        },
        off: function(t, n) {
            var r = e.get(t);
            r && (n ? r.splice(r.indexOf(n) >>> 0, 1) : e.set(t, []))
        },
        emit: function(t, n) {
            var r = e.get(t);
            r && r.slice().map(function(o) {
                o(n)
            }),
            (r = e.get("*")) && r.slice().map(function(o) {
                o(t, n)
            })
        }
    }
}
const cI = Et(()=>{
    const e = lI();
    return {
        provide: {
            event: e.emit,
            listen: e.on,
            stopListen: e.off
        }
    }
}
)
  , uI = [TS, AS, kL, LL, CL, ML, NL, DL, FL, iC, aO, lO, pO, sI, aI, cI]
  , fI = Te({
    props: {
        vnode: {
            type: Object,
            required: !0
        },
        route: {
            type: Object,
            required: !0
        },
        vnodeRef: Object,
        renderKey: String,
        trackRootNodes: Boolean
    },
    setup(e) {
        const t = e.renderKey
          , n = e.route
          , r = {};
        for (const o in e.route)
            Object.defineProperty(r, o, {
                get: ()=>t === e.renderKey ? e.route[o] : n[o]
            });
        return Nr(Li, So(r)),
        ()=>ot(e.vnode, {
            ref: e.vnodeRef
        })
    }
})
  , dI = Te({
    name: "NuxtPage",
    inheritAttrs: !1,
    props: {
        name: {
            type: String
        },
        transition: {
            type: [Boolean, Object],
            default: void 0
        },
        keepalive: {
            type: [Boolean, Object],
            default: void 0
        },
        route: {
            type: Object
        },
        pageKey: {
            type: [Function, String],
            default: null
        }
    },
    setup(e, {attrs: t, expose: n}) {
        const r = ne()
          , o = ye()
          , i = gt(Li, null);
        let s;
        n({
            pageRef: o
        });
        const a = gt(dm, null);
        let l;
        const c = r.deferHydration();
        if (r.isHydrating) {
            const u = r.hooks.hookOnce("app:error", c);
            Mt().beforeEach(u)
        }
        return e.pageKey && Ue(()=>e.pageKey, (u,f)=>{
            u !== f && r.callHook("page:loading:start")
        }
        ),
        ()=>ot(Km, {
            name: e.name,
            route: e.route,
            ...t
        }, {
            default: u=>{
                const f = pI(i, u.route, u.Component)
                  , d = i && i.matched.length === u.route.matched.length;
                if (!u.Component) {
                    if (l && !d)
                        return l;
                    c();
                    return
                }
                if (l && a && !a.isCurrent(u.route))
                    return l;
                if (f && i && (!a || a != null && a.isCurrent(i)))
                    return d ? l : null;
                const m = Vl(u, e.pageKey);
                !r.isHydrating && !mI(i, u.route, u.Component) && s === m && r.callHook("page:loading:end"),
                s = m;
                const _ = !!(e.transition ?? u.route.meta.pageTransition ?? Dl)
                  , b = _ && hI([e.transition, u.route.meta.pageTransition, Dl, {
                    onAfterLeave: ()=>{
                        r.callHook("page:transition:finish", u.Component)
                    }
                }].filter(Boolean))
                  , w = e.keepalive ?? u.route.meta.keepalive ?? gS;
                return l = qm(Ti, _ && b, Pw(w, ot(Uc, {
                    suspensible: !0,
                    onPending: ()=>r.callHook("page:start", u.Component),
                    onResolve: ()=>{
                        Ft(()=>r.callHook("page:finish", u.Component).then(()=>r.callHook("page:loading:end")).finally(c))
                    }
                }, {
                    default: ()=>{
                        const g = ot(fI, {
                            key: m || void 0,
                            vnode: u.Component,
                            route: u.route,
                            renderKey: m || void 0,
                            trackRootNodes: _,
                            vnodeRef: o
                        });
                        return w && (g.type.name = u.Component.type.name || u.Component.type.__name || "RouteProvider"),
                        g
                    }
                }))).default(),
                l
            }
        })
    }
});
function hI(e) {
    const t = e.map(n=>({
        ...n,
        onAfterLeave: n.onAfterLeave ? ru(n.onAfterLeave) : void 0
    }));
    return Xc(...t)
}
function pI(e, t, n) {
    if (!e)
        return !1;
    const r = t.matched.findIndex(o=>{
        var i;
        return ((i = o.components) == null ? void 0 : i.default) === (n == null ? void 0 : n.type)
    }
    );
    return !r || r === -1 ? !1 : t.matched.slice(0, r).some((o,i)=>{
        var s, a, l;
        return ((s = o.components) == null ? void 0 : s.default) !== ((l = (a = e.matched[i]) == null ? void 0 : a.components) == null ? void 0 : l.default)
    }
    ) || n && Vl({
        route: t,
        Component: n
    }) !== Vl({
        route: e,
        Component: n
    })
}
function mI(e, t, n) {
    return e ? t.matched.findIndex(o=>{
        var i;
        return ((i = o.components) == null ? void 0 : i.default) === (n == null ? void 0 : n.type)
    }
    ) < t.matched.length - 1 : !1
}
const gI = Te({
    name: "LayoutLoader",
    inheritAttrs: !1,
    props: {
        name: String,
        layoutProps: Object
    },
    async setup(e, t) {
        const n = await or[e.name]().then(r=>r.default || r);
        return ()=>ot(n, e.layoutProps, t.slots)
    }
})
  , yI = Te({
    name: "NuxtLayout",
    inheritAttrs: !1,
    props: {
        name: {
            type: [String, Boolean, Object],
            default: null
        },
        fallback: {
            type: [String, Object],
            default: null
        }
    },
    setup(e, t) {
        const n = ne()
          , r = gt(Li)
          , o = r === ea() ? Ow() : r
          , i = le(()=>{
            let l = z(e.name) ?? o.meta.layout ?? "default";
            return l && !(l in or) && e.fallback && (l = z(e.fallback)),
            l
        }
        )
          , s = ye();
        t.expose({
            layoutRef: s
        });
        const a = n.deferHydration();
        if (n.isHydrating) {
            const l = n.hooks.hookOnce("app:error", a);
            Mt().beforeEach(l)
        }
        return ()=>{
            const l = i.value && i.value in or
              , c = o.meta.layoutTransition ?? mS;
            return qm(Ti, l && c, {
                default: ()=>ot(Uc, {
                    suspensible: !0,
                    onResolve: ()=>{
                        Ft(a)
                    }
                }, {
                    default: ()=>ot(vI, {
                        layoutProps: fo(t.attrs, {
                            ref: s
                        }),
                        key: i.value || void 0,
                        name: i.value,
                        shouldProvide: !e.name,
                        hasTransition: !!c
                    }, t.slots)
                })
            }).default()
        }
    }
})
  , vI = Te({
    name: "NuxtLayoutProvider",
    inheritAttrs: !1,
    props: {
        name: {
            type: [String, Boolean]
        },
        layoutProps: {
            type: Object
        },
        hasTransition: {
            type: Boolean
        },
        shouldProvide: {
            type: Boolean
        }
    },
    setup(e, t) {
        const n = e.name;
        return e.shouldProvide && Nr(dm, {
            isCurrent: r=>n === (r.meta.layout ?? "default")
        }),
        ()=>{
            var r, o;
            return !n || typeof n == "string" && !(n in or) ? (o = (r = t.slots).default) == null ? void 0 : o.call(r) : ot(gI, {
                key: n,
                layoutProps: e.layoutProps,
                name: n
            }, t.slots)
        }
    }
})
  , _I = (e,t)=>{
    const n = e.__vccOpts || e;
    for (const [r,o] of t)
        n[r] = o;
    return n
}
  , bI = {};
function EI(e, t) {
    const n = dI
      , r = yI;
    return he(),
    ht(r, null, {
        default: Gt(()=>[We(n)]),
        _: 1
    })
}
const SI = _I(bI, [["render", EI]])
  , wI = ["innerHTML"]
  , TI = Te({
    __name: "Icon",
    props: {
        name: {}
    },
    async setup(e) {
        let t, n;
        const r = e
          , o = Object.fromEntries(Object.entries(Object.assign({
            "/assets/svg/icons/alarm.svg": ()=>C(()=>import("./alarm.DhXSImdX.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default),
            "/assets/svg/icons/app-bar-boost.svg": ()=>C(()=>import("./app-bar-boost.CCdq5ioD.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default),
            "/assets/svg/icons/app-bar-earn.svg": ()=>C(()=>import("./app-bar-earn.Bb212ucL.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default),
            "/assets/svg/icons/app-bar-friends.svg": ()=>C(()=>import("./app-bar-friends.CTyi4Yjj.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default),
            "/assets/svg/icons/app-bar-mine.svg": ()=>C(()=>import("./app-bar-mine.BkoJ97Sz.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default),
            "/assets/svg/icons/arrow-onboarding.svg": ()=>C(()=>import("./arrow-onboarding.BJzvMlow.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default),
            "/assets/svg/icons/caret-right.svg": ()=>C(()=>import("./caret-right.Be5C5AdH.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default),
            "/assets/svg/icons/check.svg": ()=>C(()=>import("./check.DpGtnzuV.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default),
            "/assets/svg/icons/clock.svg": ()=>C(()=>import("./clock.BeWcAb1-.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default),
            "/assets/svg/icons/close.svg": ()=>C(()=>import("./close.KB0mydBa.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default),
            "/assets/svg/icons/complete.svg": ()=>C(()=>import("./complete.lDxhBE40.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default),
            "/assets/svg/icons/copy.svg": ()=>C(()=>import("./copy.CjcTersn.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default),
            "/assets/svg/icons/energy.svg": ()=>C(()=>import("./energy.DhIj__pU.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default),
            "/assets/svg/icons/friends.svg": ()=>C(()=>import("./friends.D9yHF85E.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default),
            "/assets/svg/icons/glow.svg": ()=>C(()=>import("./glow.DR87XU47.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default),
            "/assets/svg/icons/gr.svg": ()=>C(()=>import("./gr.CE-S70jU.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default),
            "/assets/svg/icons/heart.svg": ()=>C(()=>import("./heart.uEUhPDEu.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default),
            "/assets/svg/icons/info.svg": ()=>C(()=>import("./info.CwbDISi0.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default),
            "/assets/svg/icons/ln-arrow.svg": ()=>C(()=>import("./ln-arrow.C4l_4b2T.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default),
            "/assets/svg/icons/ln-discord.svg": ()=>C(()=>import("./ln-discord.DNbmOmlO.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default),
            "/assets/svg/icons/ln-medium.svg": ()=>C(()=>import("./ln-medium.BrOe8wIZ.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default),
            "/assets/svg/icons/ln-telegram.svg": ()=>C(()=>import("./ln-telegram.cBOmGQCr.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default),
            "/assets/svg/icons/ln-x.svg": ()=>C(()=>import("./ln-x.CY3XRqZj.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default),
            "/assets/svg/icons/loading-background.svg": ()=>C(()=>import("./loading-background.DLKaIbsv.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default),
            "/assets/svg/icons/loading-image.svg": ()=>C(()=>import("./loading-image.DD2lTtqq.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default),
            "/assets/svg/icons/loading.svg": ()=>C(()=>import("./loading.D5-YfgbB.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default),
            "/assets/svg/icons/lock.svg": ()=>C(()=>import("./lock.FuE0uKjd.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default),
            "/assets/svg/icons/marketing.svg": ()=>C(()=>import("./marketing.DuScj3hO.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default),
            "/assets/svg/icons/markets.svg": ()=>C(()=>import("./markets.Bq8f52NT.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default),
            "/assets/svg/icons/refresh.svg": ()=>C(()=>import("./refresh.BvInaMMK.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default),
            "/assets/svg/icons/robots.svg": ()=>C(()=>import("./robots.BmOab4DB.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default),
            "/assets/svg/icons/settings.svg": ()=>C(()=>import("./settings.CezmlWen.js"), __vite__mapDeps([]), import.meta.url).then(s=>s.default)
        })).map(([s,a])=>[s.split("/").pop().split(".").shift(), a]))
          , i = r.name && ([t,n] = Iv(()=>{
            var s;
            return (s = o == null ? void 0 : o[r.name]) == null ? void 0 : s.call(o)
        }
        ),
        t = await t,
        n(),
        t);
        return (s,a)=>z(i) ? (he(),
        Ye("div", {
            key: 0,
            class: "icon",
            innerHTML: z(i)
        }, null, 8, wI)) : yn("", !0)
    }
})
  , kI = {
    class: "is-token"
}
  , AI = ["srcset", "alt"]
  , LI = ["src", "alt"]
  , CI = Te({
    __name: "Token",
    setup(e) {
        return (t,n)=>(he(),
        Ye("picture", kI, [de("source", {
            srcset: z(Zl).TOKEN_WEBP,
            type: "image/webp",
            alt: z(Bt).GAME_NAME
        }, null, 8, AI), de("img", {
            class: "img-responsive",
            src: z(Zl).TOKEN,
            alt: z(Bt).GAME_NAME
        }, null, 8, LI)]))
    }
})
  , xh = xg({
    componentName: "NuxtLinkLocale"
})
  , OI = Te({
    name: "NuxtLinkLocale",
    props: {
        ...xh.props,
        locale: {
            type: String,
            default: void 0,
            required: !1
        }
    },
    setup(e, {slots: t}) {
        const n = Ng()
          , r = le(()=>{
            const s = e.to ?? e.href;
            return s != null ? n(s, e.locale) : s
        }
        )
          , o = le(()=>{
            if (e.external || e.target && e.target !== "_self")
                return !0;
            const s = e.to ?? e.href;
            return typeof s == "object" ? !1 : s === "" || s == null || An(s, {
                acceptRelative: !0
            })
        }
        )
          , i = ()=>{
            const s = {
                ...e
            };
            return o.value || (s.to = r.value),
            delete s.href,
            delete s.locale,
            s
        }
        ;
        return ()=>ot(xh, i(), t.default)
    }
})
  , RI = {
    class: "ln"
}
  , PI = {
    class: "ln-header"
}
  , II = {
    class: "ln-header-left"
}
  , MI = {
    class: "ln-header-social"
}
  , NI = ["href"]
  , DI = ["href"]
  , xI = ["innerHTML"]
  , FI = {
    class: "ln-header-center"
}
  , UI = {
    class: "ln-header-center-logo"
}
  , VI = {
    class: "ln-header-right"
}
  , BI = {
    class: "button"
}
  , HI = ["innerHTML"]
  , jI = de("span", null, "coming soon", -1)
  , KI = {
    class: "ln-content"
}
  , qI = {
    class: "ln-content-button"
}
  , YI = ["innerHTML"]
  , WI = de("div", {
    class: "ln-bottom"
}, null, -1)
  , JI = Te({
    __name: "error",
    props: {
        error: Object
    },
    setup(e) {
        var r;
        const t = cs();
        return uS({
            title: `${((r = e.error) == null ? void 0 : r.statusCode) ?? 500} - ${Bt.GAME_NAME}`
        }),
        (o,i)=>{
            var c;
            const s = TI
              , a = CI
              , l = OI;
            return he(),
            Ye("main", RI, [de("div", PI, [de("div", II, [de("div", MI, [de("a", {
                class: "is-x",
                href: z(t).link_twitter,
                target: "_blank"
            }, [We(s, {
                name: "ln-x"
            })], 8, NI), de("a", {
                class: "is-telegram",
                href: z(t).link_telegram,
                target: "_blank"
            }, [We(s, {
                name: "ln-telegram"
            })], 8, DI), de("p", {
                innerHTML: o.$t("landing.join_us")
            }, null, 8, xI)])]), de("div", FI, [de("div", UI, [We(a)]), de("p", null, In(z(Bt).GAME_NAME), 1)]), de("div", VI, [de("button", BI, [de("p", {
                innerHTML: o.$t("landing.whitepaper")
            }, null, 8, HI), We(s, {
                class: "is-ln-arrow",
                name: "ln-arrow"
            }), jI])])]), de("div", KI, [de("h1", null, In(e.error.statusCode ?? 500), 1), de("p", null, In(((c = e.error) == null ? void 0 : c.statusMessage) ?? ""), 1), de("div", qI, [We(l, {
                class: "button",
                to: z(Pi).LANDING
            }, {
                default: Gt(()=>[de("span", {
                    innerHTML: o.$t("buttons.home")
                }, null, 8, YI)]),
                _: 1
            }, 8, ["to"])])]), WI])
        }
    }
})
  , Fh = {
    __name: "nuxt-root",
    setup(e) {
        const t = ()=>null
          , n = ne()
          , r = n.deferHydration();
        if (n.isHydrating) {
            const a = n.hooks.hookOnce("app:error", r);
            Mt().beforeEach(a)
        }
        const o = !1;
        Nr(Li, ea()),
        n.hooks.callHookWith(a=>a.map(l=>l()), "vue:setup");
        const i = ta();
        kp((a,l,c)=>{
            if (n.hooks.callHook("vue:error", a, l, c).catch(u=>console.error("[nuxt] Error in `vue:error` hook", u)),
            pE(a) && (a.fatal || a.unhandled))
                return n.runWithContext(()=>Zr(a)),
                !1
        }
        );
        const s = !1;
        return (a,l)=>(he(),
        ht(Uc, {
            onResolve: z(r)
        }, {
            default: Gt(()=>[z(i) ? (he(),
            ht(z(JI), {
                key: 0,
                error: z(i)
            }, null, 8, ["error"])) : z(s) ? (he(),
            ht(z(t), {
                key: 1,
                context: z(s)
            }, null, 8, ["context"])) : z(o) ? (he(),
            ht(cl(z(o)), {
                key: 2
            })) : (he(),
            ht(z(SI), {
                key: 3
            }))]),
            _: 1
        }, 8, ["onResolve"]))
    }
};
let Uh;
{
    let e;
    Uh = async function() {
        var s, a;
        if (e)
            return e;
        const r = !!((s = window.__NUXT__) != null && s.serverRendered || ((a = document.getElementById("__NUXT_DATA__")) == null ? void 0 : a.dataset.ssr) === "true") ? B_(Fh) : Gp(Fh)
          , o = qb({
            vueApp: r
        });
        async function i(l) {
            await o.callHook("app:error", l),
            o.payload.error = o.payload.error || na(l)
        }
        r.config.errorHandler = i;
        try {
            await Wb(o, uI)
        } catch (l) {
            i(l)
        }
        try {
            await o.hooks.callHook("app:created", r),
            await o.hooks.callHook("app:beforeMount", r),
            r.mount(vS),
            await o.hooks.callHook("app:mounted", r),
            await Ft()
        } catch (l) {
            i(l)
        }
        return r.config.errorHandler === i && (r.config.errorHandler = void 0),
        r
    }
    ,
    e = Uh().catch(t=>{
        throw console.error("Error while mounting app:", t),
        t
    }
    )
}
export {At as $, Xt as A, In as B, at as C, _I as D, Pn as E, ct as F, uM as G, pA as H, oM as I, OI as J, Bn as K, cs as L, iM as M, sM as N, fA as O, sA as P, qr as Q, Bt as R, tt as S, rc as T, Pi as U, Ko as V, Hp as W, QI as X, wg as Y, aM as Z, TI as _, de as a, lM as a0, En as a1, Nr as a2, Gt as a3, ZI as a4, dA as a5, hA as a6, Hc as a7, Ue as a8, Ft as a9, vA as aA, dI as aB, $I as aC, nM as aD, eM as aE, cM as aF, Gs as aG, Cr as aH, ot as aa, Tv as ab, C as ac, yL as ad, cA as ae, Iv as af, Fr as ag, lA as ah, aA as ai, mA as aj, yt as ak, gA as al, et as am, XI as an, rM as ao, uS as ap, Sm as aq, Zl as ar, Ln as as, fM as at, dr as au, Ti as av, cl as aw, fo as ax, ea as ay, tM as az, We as b, Ye as c, Te as d, Cv as e, CI as f, ht as g, yn as h, Dn as i, st as j, vL as k, Ng as l, ye as m, kt as n, he as o, le as p, z as q, zI as r, Fn as s, ne as t, la as u, mn as v, GI as w, Ci as x, uA as y, ln as z};
function __vite__mapDeps(indexes) {
    if (!__vite__mapDeps.viteFileDeps) {
        __vite__mapDeps.viteFileDeps = ["./boost.BTsbowmt.js", "./BalanceLarge.vue.U1LZyPSZ.js", "./Price.vue.Bu1QPlIu.js", "./Preloader.BIljklAv.js", "./earn.DFvntXns.js", "./Image.vue.DsmBB2n5.js", "./earn.BV8cuZv0.js", "./friends.BaLMyo6k.js", "./index.CDZPa_F4.js", "./image.vue.DHTIodWt.js", "./effect-fade.BCqZGDo5.js", "./effect-fade.vkSr05gD.css", "./Earn.vue.CKypGHAd.js", "./settings.DCNpRgLM.js", "./index.es.DgrUV-VS.js", "./index.Bw5XmvsK.css", "./index.BYFBRsnz.js", "./mine.B1P0P3_v.js", "./bingx.DK3AuM5N.js", "./exchange.3Ns99bV-.js", "./index.BAM75Bwm.js", "./index.DA075uC-.js", "./default.OT0SLtLW.js"]
    }
    return indexes.map((i)=>__vite__mapDeps.viteFileDeps[i])
}
