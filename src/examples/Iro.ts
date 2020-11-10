/*!
 * iro.js v5.2.3
 * 2016-2020 James Daniel
 * Licensed under MPL 2.0
 * github.com/jaames/iro.js
 */

let n;
let u;
let t;
let i;
let r;
let o;
const f = {};
const e = [];
const c = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|^--/i;
function s(n, l) {
  for (const u in l) {
    n[u] = l[u];
  }
  return n;
}
function a(n) {
  const l = n.parentNode;
  l && l.removeChild(n);
}
function h(n, l, u) {
  let t;
  let i;
  let r;
  let o;
  const f = arguments;
  if (((l = s({}, l)), arguments.length > 3)) {
    for (u = [u], t = 3; t < arguments.length; t++) {
      u.push(f[t]);
    }
  }
  if ((u != null && (l.children = u), n != null && n.defaultProps != null)) {
    for (i in n.defaultProps) {
      void 0 === l[i] && (l[i] = n.defaultProps[i]);
    }
  }
  return (o = l.key), (r = l.ref) != null && delete l.ref, o != null && delete l.key, v(n, l, o, r);
}
function v(l, u, t, i) {
  const r = {
    type: l,
    props: u,
    key: t,
    ref: i,
    __k: null,
    __p: null,
    __b: 0,
    __e: null,
    l: null,
    __c: null,
    constructor: void 0,
  };
  return n.vnode && n.vnode(r), r;
}
function d(n) {
  return n.children;
}
function y(n) {
  if (n == null || typeof n === 'boolean') {
    return null;
  }
  if (typeof n === 'string' || typeof n === 'number') {
    return v(null, n, null, null);
  }
  if (n.__e != null || n.__c != null) {
    const l = v(n.type, n.props, n.key, null);
    return (l.__e = n.__e), l;
  }
  return n;
}
function m(n, l) {
  (this.props = n), (this.context = l);
}
function w(n, l) {
  if (l == null) {
    return n.__p ? w(n.__p, n.__p.__k.indexOf(n) + 1) : null;
  }
  for (var u; l < n.__k.length; l++) {
    if ((u = n.__k[l]) != null && u.__e != null) {
      return u.__e;
    }
  }
  return typeof n.type === 'function' ? w(n) : null;
}
function g(n) {
  let l;
  let u;
  if ((n = n.__p) != null && n.__c != null) {
    for (n.__e = n.__c.base = null, l = 0; l < n.__k.length; l++) {
      if ((u = n.__k[l]) != null && u.__e != null) {
        n.__e = n.__c.base = u.__e;
        break;
      }
    }
    return g(n);
  }
}
function k(l) {
  ((!l.__d && (l.__d = !0) && u.push(l) === 1) || i !== n.debounceRendering) &&
    ((i = n.debounceRendering), (n.debounceRendering || t)(_));
}
function _() {
  let n;
  let l;
  let t;
  let i;
  let r;
  let o;
  let f;
  let e;
  for (
    u.sort(function (n, l) {
      return l.__v.__b - n.__v.__b;
    });
    (n = u.pop());

  ) {
    n.__d &&
      ((t = void 0),
      (i = void 0),
      (o = (r = (l = n).__v).__e),
      (f = l.__P),
      (e = l.u),
      (l.u = !1),
      f &&
        ((t = []),
        (i = $(f, r, s({}, r), l.__n, void 0 !== f.ownerSVGElement, null, t, e, o == null ? w(r) : o)),
        j(t, r),
        i != o && g(r)));
  }
}
function b(n, l, u, t, i, r, o, c, s) {
  let h;
  let v;
  let p;
  let d;
  let y;
  let m;
  let g;
  const k = (u && u.__k) || e;
  const _ = k.length;
  if (
    (c == f && (c = r != null ? r[0] : _ ? w(u, 0) : null),
    (h = 0),
    (l.__k = x(l.__k, function (u) {
      if (u != null) {
        if (((u.__p = l), (u.__b = l.__b + 1), (p = k[h]) === null || (p && u.key == p.key && u.type === p.type))) {
          k[h] = void 0;
        } else {
          for (v = 0; v < _; v++) {
            if ((p = k[v]) && u.key == p.key && u.type === p.type) {
              k[v] = void 0;
              break;
            }
            p = null;
          }
        }
        if (
          ((d = $(n, u, (p = p || f), t, i, r, o, null, c, s)),
          (v = u.ref) && p.ref != v && (g || (g = [])).push(v, u.__c || d, u),
          d != null)
        ) {
          if ((m == null && (m = d), u.l != null)) {
            (d = u.l), (u.l = null);
          } else if (r == p || d != c || d.parentNode == null) {
            n: if (c == null || c.parentNode !== n) {
              n.appendChild(d);
            } else {
              for (y = c, v = 0; (y = y.nextSibling) && v < _; v += 2) {
                if (y == d) {
                  break n;
                }
              }
              n.insertBefore(d, c);
            }
            l.type == 'option' && (n.value = '');
          }
          (c = d.nextSibling), typeof l.type === 'function' && (l.l = d);
        }
      }
      return h++, u;
    })),
    (l.__e = m),
    r != null && typeof l.type !== 'function')
  ) {
    for (h = r.length; h--; ) {
      r[h] != null && a(r[h]);
    }
  }
  for (h = _; h--; ) {
    k[h] != null && D(k[h], k[h]);
  }
  if (g) {
    for (h = 0; h < g.length; h++) {
      A(g[h], g[++h], g[++h]);
    }
  }
}
function x(n, l, u) {
  if ((u == null && (u = []), n == null || typeof n === 'boolean')) {
    l && u.push(l(null));
  } else if (Array.isArray(n)) {
    for (let t = 0; t < n.length; t++) {
      x(n[t], l, u);
    }
  } else {
    u.push(l ? l(y(n)) : n);
  }
  return u;
}
function C(n, l, u, t, i) {
  let r;
  for (r in u) {
    r in l || N(n, r, null, u[r], t);
  }
  for (r in l) {
    (i && typeof l[r] !== 'function') || r === 'value' || r === 'checked' || u[r] === l[r] || N(n, r, l[r], u[r], t);
  }
}
function P(n, l, u) {
  l[0] === '-'
    ? n.setProperty(l, u)
    : (n[l] = typeof u === 'number' && !1 === c.test(l) ? `${u}px` : u == null ? '' : u);
}
function N(n, l, u, t, i) {
  let r;
  let o;
  let f;
  let e;
  let c;
  if ((l = i ? (l === 'className' ? 'class' : l) : l === 'class' ? 'className' : l) === 'key' || l === 'children');
  else if (l === 'style') {
    if (((r = n.style), typeof u === 'string')) {
      r.cssText = u;
    } else {
      if ((typeof t === 'string' && ((r.cssText = ''), (t = null)), t)) {
        for (o in t) {
          (u && o in u) || P(r, o, '');
        }
      }
      if (u) {
        for (f in u) {
          (t && u[f] === t[f]) || P(r, f, u[f]);
        }
      }
    }
  } else {
    l[0] === 'o' && l[1] === 'n'
      ? ((e = l !== (l = l.replace(/Capture$/, ''))),
        (c = l.toLowerCase()),
        (l = (c in n ? c : l).slice(2)),
        u ? (t || n.addEventListener(l, T, e), ((n.t || (n.t = {}))[l] = u)) : n.removeEventListener(l, T, e))
      : l !== 'list' && l !== 'tagName' && l !== 'form' && !i && l in n
      ? (n[l] = u == null ? '' : u)
      : typeof u !== 'function' &&
        l !== 'dangerouslySetInnerHTML' &&
        (l !== (l = l.replace(/^xlink:?/, ''))
          ? u == null || !1 === u
            ? n.removeAttributeNS('http://www.w3.org/1999/xlink', l.toLowerCase())
            : n.setAttributeNS('http://www.w3.org/1999/xlink', l.toLowerCase(), u)
          : u == null || !1 === u
          ? n.removeAttribute(l)
          : n.setAttribute(l, u));
  }
}
function T(l) {
  return this.t[l.type](n.event ? n.event(l) : l);
}
function $(l, u, t, i, r, o, f, e, c, a) {
  let h;
  let v;
  let p;
  let y;
  let w;
  let g;
  let k;
  let _;
  let C;
  let P;
  const N = u.type;
  if (void 0 !== u.constructor) {
    return null;
  }
  (h = n.__b) && h(u);
  try {
    n: if (typeof N === 'function') {
      if (
        ((_ = u.props),
        (C = (h = N.contextType) && i[h.__c]),
        (P = h ? (C ? C.props.value : h.__p) : i),
        t.__c
          ? (k = (v = u.__c = t.__c).__p = v.__E)
          : ('prototype' in N && N.prototype.render
              ? (u.__c = v = new N(_, P))
              : ((u.__c = v = new m(_, P)), (v.constructor = N), (v.render = H)),
            C && C.sub(v),
            (v.props = _),
            v.state || (v.state = {}),
            (v.context = P),
            (v.__n = i),
            (p = v.__d = !0),
            (v.__h = [])),
        v.__s == null && (v.__s = v.state),
        N.getDerivedStateFromProps != null &&
          s(v.__s == v.state ? (v.__s = s({}, v.__s)) : v.__s, N.getDerivedStateFromProps(_, v.__s)),
        p)
      ) {
        N.getDerivedStateFromProps == null && v.componentWillMount != null && v.componentWillMount(),
          v.componentDidMount != null && f.push(v);
      } else {
        if (
          (N.getDerivedStateFromProps == null &&
            e == null &&
            v.componentWillReceiveProps != null &&
            v.componentWillReceiveProps(_, P),
          !e && v.shouldComponentUpdate != null && !1 === v.shouldComponentUpdate(_, v.__s, P))
        ) {
          for (
            v.props = _,
              v.state = v.__s,
              v.__d = !1,
              v.__v = u,
              u.__e = c != null ? (c !== t.__e ? c : t.__e) : null,
              u.__k = t.__k,
              h = 0;
            h < u.__k.length;
            h++
          ) {
            u.__k[h] && (u.__k[h].__p = u);
          }
          break n;
        }
        v.componentWillUpdate != null && v.componentWillUpdate(_, v.__s, P);
      }
      for (
        y = v.props,
          w = v.state,
          v.context = P,
          v.props = _,
          v.state = v.__s,
          (h = n.__r) && h(u),
          v.__d = !1,
          v.__v = u,
          v.__P = l,
          h = v.render(v.props, v.state, v.context),
          u.__k = x(h != null && h.type == d && h.key == null ? h.props.children : h),
          v.getChildContext != null && (i = s(s({}, i), v.getChildContext())),
          p || v.getSnapshotBeforeUpdate == null || (g = v.getSnapshotBeforeUpdate(y, w)),
          b(l, u, t, i, r, o, f, c, a),
          v.base = u.__e;
        (h = v.__h.pop());

      ) {
        v.__s && (v.state = v.__s), h.call(v);
      }
      p || y == null || v.componentDidUpdate == null || v.componentDidUpdate(y, w, g), k && (v.__E = v.__p = null);
    } else {
      u.__e = z(t.__e, u, t, i, r, o, f, a);
    }
    (h = n.diffed) && h(u);
  } catch (l) {
    n.__e(l, u, t);
  }
  return u.__e;
}
function j(l, u) {
  for (var t; (t = l.pop()); ) {
    try {
      t.componentDidMount();
    } catch (l) {
      n.__e(l, t.__v);
    }
  }
  n.__c && n.__c(u);
}
function z(n, l, u, t, i, r, o, c) {
  let s;
  let a;
  let h;
  let v;
  let p = u.props;
  const d = l.props;
  if (((i = l.type === 'svg' || i), n == null && r != null)) {
    for (s = 0; s < r.length; s++) {
      if ((a = r[s]) != null && (l.type === null ? a.nodeType === 3 : a.localName === l.type)) {
        (n = a), (r[s] = null);
        break;
      }
    }
  }
  if (n == null) {
    if (l.type === null) {
      return document.createTextNode(d);
    }
    (n = i ? document.createElementNS('http://www.w3.org/2000/svg', l.type) : document.createElement(l.type)),
      (r = null);
  }
  return (
    l.type === null
      ? p !== d && (r != null && (r[r.indexOf(n)] = null), (n.data = d))
      : l !== u &&
        (r != null && (r = e.slice.call(n.childNodes)),
        (h = (p = u.props || f).dangerouslySetInnerHTML),
        (v = d.dangerouslySetInnerHTML),
        c || ((v || h) && ((v && h && v.__html == h.__html) || (n.innerHTML = (v && v.__html) || ''))),
        C(n, d, p, i, c),
        (l.__k = l.props.children),
        v || b(n, l, u, t, l.type !== 'foreignObject' && i, r, o, f, c),
        c ||
          ('value' in d && void 0 !== d.value && d.value !== n.value && (n.value = d.value == null ? '' : d.value),
          'checked' in d && void 0 !== d.checked && d.checked !== n.checked && (n.checked = d.checked))),
    n
  );
}
function A(l, u, t) {
  try {
    typeof l === 'function' ? l(u) : (l.current = u);
  } catch (l) {
    n.__e(l, t);
  }
}
function D(l, u, t) {
  let i;
  let r;
  let o;
  if (
    (n.unmount && n.unmount(l),
    (i = l.ref) && A(i, null, u),
    t || typeof l.type === 'function' || (t = (r = l.__e) != null),
    (l.__e = l.l = null),
    (i = l.__c) != null)
  ) {
    if (i.componentWillUnmount) {
      try {
        i.componentWillUnmount();
      } catch (l) {
        n.__e(l, u);
      }
    }
    i.base = i.__P = null;
  }
  if ((i = l.__k)) {
    for (o = 0; o < i.length; o++) {
      i[o] && D(i[o], u, t);
    }
  }
  r != null && a(r);
}
function H(n, l, u) {
  return this.constructor(n, u);
}
function I(l, u, t) {
  let i;
  let o;
  let c;
  n.__p && n.__p(l, u),
    (o = (i = t === r) ? null : (t && t.__k) || u.__k),
    (l = h(d, null, [l])),
    (c = []),
    $(
      u,
      i ? (u.__k = l) : ((t || u).__k = l),
      o || f,
      f,
      void 0 !== u.ownerSVGElement,
      t && !i ? [t] : o ? null : e.slice.call(u.childNodes),
      c,
      !1,
      t || f,
      i,
    ),
    j(c, l);
}
(n = {}),
  (m.prototype.setState = function (n, l) {
    const u = (this.__s !== this.state && this.__s) || (this.__s = s({}, this.state));
    (typeof n !== 'function' || (n = n(u, this.props))) && s(u, n),
      n != null && this.__v && ((this.u = !1), l && this.__h.push(l), k(this));
  }),
  (m.prototype.forceUpdate = function (n) {
    this.__v && (n && this.__h.push(n), (this.u = !0), k(this));
  }),
  (m.prototype.render = d),
  (u = []),
  (t = typeof Promise === 'function' ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout),
  (i = n.debounceRendering),
  (n.__e = function (n, l, u) {
    for (var t; (l = l.__p); ) {
      if ((t = l.__c) && !t.__p) {
        try {
          if (t.constructor && t.constructor.getDerivedStateFromError != null) {
            t.setState(t.constructor.getDerivedStateFromError(n));
          } else {
            if (t.componentDidCatch == null) {
              continue;
            }
            t.componentDidCatch(n);
          }
          return k((t.__E = t));
        } catch (l) {
          n = l;
        }
      }
    }
    throw n;
  }),
  (r = f),
  (o = 0);

// Some regular expressions for rgb() and hsl() Colors are borrowed from tinyColor
// https://github.com/bgrins/TinyColor
// Kelvin temperature math borrowed from Neil Barlett's implementation
// from https://github.com/neilbartlett/color-temperature
// https://www.w3.org/TR/css3-values/#integers
const CSS_INTEGER = '[-\\+]?\\d+%?'; // http://www.w3.org/TR/css3-values/#number-value

const CSS_NUMBER = '[-\\+]?\\d*\\.\\d+%?'; // Allow positive/negative integer/number. Don't capture the either/or, just the entire outcome

const CSS_UNIT = `(?:${CSS_NUMBER})|(?:${CSS_INTEGER})`; // Parse function params
// Parens and commas are optional, and this also allows for whitespace between numbers

const PERMISSIVE_MATCH_3 = `[\\s|\\(]+(${CSS_UNIT})[,|\\s]+(${CSS_UNIT})[,|\\s]+(${CSS_UNIT})\\s*\\)?`;
const PERMISSIVE_MATCH_4 = `[\\s|\\(]+(${CSS_UNIT})[,|\\s]+(${CSS_UNIT})[,|\\s]+(${CSS_UNIT})[,|\\s]+(${CSS_UNIT})\\s*\\)?`; // Regex patterns for functional color strings

const REGEX_FUNCTIONAL_RGB = new RegExp(`rgb${PERMISSIVE_MATCH_3}`);
const REGEX_FUNCTIONAL_RGBA = new RegExp(`rgba${PERMISSIVE_MATCH_4}`);
const REGEX_FUNCTIONAL_HSL = new RegExp(`hsl${PERMISSIVE_MATCH_3}`);
const REGEX_FUNCTIONAL_HSLA = new RegExp(`hsla${PERMISSIVE_MATCH_4}`); // Color string parsing regex

const HEX_START = '^(?:#?|0x?)';
const HEX_INT_SINGLE = '([0-9a-fA-F]{1})';
const HEX_INT_DOUBLE = '([0-9a-fA-F]{2})';
const REGEX_HEX_3 = new RegExp(`${HEX_START + HEX_INT_SINGLE + HEX_INT_SINGLE + HEX_INT_SINGLE}$`);
const REGEX_HEX_4 = new RegExp(`${HEX_START + HEX_INT_SINGLE + HEX_INT_SINGLE + HEX_INT_SINGLE + HEX_INT_SINGLE}$`);
const REGEX_HEX_6 = new RegExp(`${HEX_START + HEX_INT_DOUBLE + HEX_INT_DOUBLE + HEX_INT_DOUBLE}$`);
const REGEX_HEX_8 = new RegExp(`${HEX_START + HEX_INT_DOUBLE + HEX_INT_DOUBLE + HEX_INT_DOUBLE + HEX_INT_DOUBLE}$`); // Kelvin temperature bounds

const KELVIN_MIN = 1000;
const KELVIN_MAX = 40000; // Math shorthands

const { log } = Math;
const { round } = Math;
const { floor } = Math;
/**
 * @desc Clamp a number between a min and max value
 * @param num - input value
 * @param min - min allowed value
 * @param max - max allowed value
 */

function clamp(num, min, max) {
  return Math.min(Math.max(num, min), max);
}
/**
 * @desc Parse a css unit string - either regular int or a percentage number
 * @param str - css unit string
 * @param max - max unit value, used for calculating percentages
 */

function parseUnit(str, max) {
  const isPercentage = str.indexOf('%') > -1;
  const num = parseFloat(str);
  return isPercentage ? (max / 100) * num : num;
}
/**
 * @desc Parse hex str to an int
 * @param str - hex string to parse
 */

function parseHexInt(str) {
  return parseInt(str, 16);
}
/**
 * @desc Convert nunber into to 2-digit hex
 * @param int - number to convert
 */

function intToHex(int) {
  return int.toString(16).padStart(2, '0');
}

const IroColor = function IroColor(value, onChange) {
  // The default Color value
  this.$ = {
    h: 0,
    s: 0,
    v: 0,
    a: 1,
  };
  if (value) {
    this.set(value);
  } // The watch callback function for this Color will be stored here

  this.onChange = onChange;
  this.initialValue = { ...this.$ }; // copy initial value
};

const prototypeAccessors = {
  hsv: { configurable: true },
  hsva: { configurable: true },
  hue: { configurable: true },
  saturation: { configurable: true },
  value: { configurable: true },
  alpha: { configurable: true },
  kelvin: { configurable: true },
  red: { configurable: true },
  green: { configurable: true },
  blue: { configurable: true },
  rgb: { configurable: true },
  rgba: { configurable: true },
  hsl: { configurable: true },
  hsla: { configurable: true },
  rgbString: { configurable: true },
  rgbaString: { configurable: true },
  hexString: { configurable: true },
  hex8String: { configurable: true },
  hslString: { configurable: true },
  hslaString: { configurable: true },
};
/**
 * @desc Set the Color from any valid value
 * @param value - new color value
 */

IroColor.prototype.set = function set(value) {
  if (typeof value === 'string') {
    if (/^(?:#?|0x?)[0-9a-fA-F]{3,8}$/.test(value)) {
      this.hexString = value;
    } else if (/^rgba?/.test(value)) {
      this.rgbString = value;
    } else if (/^hsla?/.test(value)) {
      this.hslString = value;
    }
  } else if (typeof value === 'object') {
    if (value instanceof IroColor) {
      this.hsv = value.hsv;
    } else if (typeof value === 'object' && 'r' in value && 'g' in value && 'b' in value) {
      this.rgb = value;
    } else if (typeof value === 'object' && 'h' in value && 's' in value && 'v' in value) {
      this.hsv = value;
    } else if (typeof value === 'object' && 'h' in value && 's' in value && 'l' in value) {
      this.hsl = value;
    }
  } else {
    throw new Error('Invalid color value');
  }
};
/**
 * @desc Shortcut to set a specific channel value
 * @param format - hsv | hsl | rgb
 * @param channel - individual channel to set, for example if model = hsl, chanel = h | s | l
 * @param value - new value for the channel
 */

IroColor.prototype.setChannel = function setChannel(format, channel, value) {
  let obj;

  this[format] = { ...this[format], ...((obj = {}), (obj[channel] = value), obj) };
};
/**
 * @desc Reset color back to its initial value
 */

IroColor.prototype.reset = function reset() {
  this.hsva = this.initialValue;
};
/**
 * @desc make new Color instance with the same value as this one
 */

IroColor.prototype.clone = function clone() {
  return new IroColor(this);
};
/**
 * @desc remove color onChange
 */

IroColor.prototype.unbind = function unbind() {
  this.onChange = undefined;
};
/**
 * @desc Convert hsv object to rgb
 * @param hsv - hsv color object
 */

IroColor.hsvToRgb = function hsvToRgb(hsv) {
  const h = hsv.h / 60;
  const s = hsv.s / 100;
  const v = hsv.v / 100;
  const i = floor(h);
  const f = h - i;
  const p = v * (1 - s);
  const q = v * (1 - f * s);
  const t = v * (1 - (1 - f) * s);
  const mod = i % 6;
  const r = [v, q, p, p, t, v][mod];
  const g = [t, v, v, q, p, p][mod];
  const b = [p, p, t, v, v, q][mod];
  return {
    r: clamp(r * 255, 0, 255),
    g: clamp(g * 255, 0, 255),
    b: clamp(b * 255, 0, 255),
  };
};
/**
 * @desc Convert rgb object to hsv
 * @param rgb - rgb object
 */

IroColor.rgbToHsv = function rgbToHsv(rgb) {
  const r = rgb.r / 255;
  const g = rgb.g / 255;
  const b = rgb.b / 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const delta = max - min;
  let hue = 0;
  const value = max;
  const saturation = max === 0 ? 0 : delta / max;

  switch (max) {
    case min:
      hue = 0; // achromatic

      break;

    case r:
      hue = (g - b) / delta + (g < b ? 6 : 0);
      break;

    case g:
      hue = (b - r) / delta + 2;
      break;

    case b:
      hue = (r - g) / delta + 4;
      break;
  }

  return {
    h: (hue * 60) % 360,
    s: clamp(saturation * 100, 0, 100),
    v: clamp(value * 100, 0, 100),
  };
};
/**
 * @desc Convert hsv object to hsl
 * @param hsv - hsv object
 */

IroColor.hsvToHsl = function hsvToHsl(hsv) {
  const s = hsv.s / 100;
  const v = hsv.v / 100;
  const l = (2 - s) * v;
  const divisor = l <= 1 ? l : 2 - l; // Avoid division by zero when lightness is close to zero

  const saturation = divisor < 1e-9 ? 0 : (s * v) / divisor;
  return {
    h: hsv.h,
    s: clamp(saturation * 100, 0, 100),
    l: clamp(l * 50, 0, 100),
  };
};
/**
 * @desc Convert hsl object to hsv
 * @param hsl - hsl object
 */

IroColor.hslToHsv = function hslToHsv(hsl) {
  const l = hsl.l * 2;
  const s = (hsl.s * (l <= 100 ? l : 200 - l)) / 100; // Avoid division by zero when l + s is near 0

  const saturation = l + s < 1e-9 ? 0 : (2 * s) / (l + s);
  return {
    h: hsl.h,
    s: clamp(saturation * 100, 0, 100),
    v: clamp((l + s) / 2, 0, 100),
  };
};
/**
 * @desc Convert a kelvin temperature to an approx, RGB value
 * @param kelvin - kelvin temperature
 */

IroColor.kelvinToRgb = function kelvinToRgb(kelvin) {
  const temp = kelvin / 100;
  let r;
  let g;
  let b;

  if (temp < 66) {
    r = 255;
    g = -155.25485562709179 - 0.44596950469579133 * (g = temp - 2) + 104.49216199393888 * log(g);
    b = temp < 20 ? 0 : -254.76935184120902 + 0.8274096064007395 * (b = temp - 10) + 115.67994401066147 * log(b);
  } else {
    r = 351.97690566805693 + 0.114206453784165 * (r = temp - 55) - 40.25366309332127 * log(r);
    g = 325.4494125711974 + 0.07943456536662342 * (g = temp - 50) - 28.0852963507957 * log(g);
    b = 255;
  }

  return {
    r: clamp(floor(r), 0, 255),
    g: clamp(floor(g), 0, 255),
    b: clamp(floor(b), 0, 255),
  };
};
/**
 * @desc Convert an RGB color to an approximate kelvin temperature
 * @param kelvin - kelvin temperature
 */

IroColor.rgbToKelvin = function rgbToKelvin(rgb) {
  const { r } = rgb;
  const { b } = rgb;
  const eps = 0.4;
  let minTemp = KELVIN_MIN;
  let maxTemp = KELVIN_MAX;
  let temp;

  while (maxTemp - minTemp > eps) {
    temp = (maxTemp + minTemp) * 0.5;
    const rgb$1 = IroColor.kelvinToRgb(temp);

    if (rgb$1.b / rgb$1.r >= b / r) {
      maxTemp = temp;
    } else {
      minTemp = temp;
    }
  }

  return temp;
};

prototypeAccessors.hsv.get = function () {
  // value is cloned to allow changes to be made to the values before passing them back
  const value = this.$;
  return {
    h: value.h,
    s: value.s,
    v: value.v,
  };
};

prototypeAccessors.hsv.set = function (newValue) {
  const oldValue = this.$;
  newValue = { ...oldValue, ...newValue }; // If this Color is being watched for changes we need to compare the new and old values to check the difference
  // Otherwise we can just be lazy

  if (this.onChange) {
    // Compute changed values
    const changes = {
      h: false,
      v: false,
      s: false,
      a: false,
    };

    for (const key in oldValue) {
      changes[key] = newValue[key] != oldValue[key];
    }

    this.$ = newValue; // If the value has changed, call hook callback

    if (changes.h || changes.s || changes.v || changes.a) {
      this.onChange(this, changes);
    }
  } else {
    this.$ = newValue;
  }
};

prototypeAccessors.hsva.get = function () {
  return { ...this.$ };
};

prototypeAccessors.hsva.set = function (value) {
  this.hsv = value;
};

prototypeAccessors.hue.get = function () {
  return this.$.h;
};

prototypeAccessors.hue.set = function (value) {
  this.hsv = {
    h: value,
  };
};

prototypeAccessors.saturation.get = function () {
  return this.$.s;
};

prototypeAccessors.saturation.set = function (value) {
  this.hsv = {
    s: value,
  };
};

prototypeAccessors.value.get = function () {
  return this.$.v;
};

prototypeAccessors.value.set = function (value) {
  this.hsv = {
    v: value,
  };
};

prototypeAccessors.alpha.get = function () {
  return this.$.a;
};

prototypeAccessors.alpha.set = function (value) {
  this.hsv = { ...this.hsv, a: value };
};

prototypeAccessors.kelvin.get = function () {
  return IroColor.rgbToKelvin(this.rgb);
};

prototypeAccessors.kelvin.set = function (value) {
  this.rgb = IroColor.kelvinToRgb(value);
};

prototypeAccessors.red.get = function () {
  const { rgb } = this;
  return rgb.r;
};

prototypeAccessors.red.set = function (value) {
  this.rgb = { ...this.rgb, r: value };
};

prototypeAccessors.green.get = function () {
  const { rgb } = this;
  return rgb.g;
};

prototypeAccessors.green.set = function (value) {
  this.rgb = { ...this.rgb, g: value };
};

prototypeAccessors.blue.get = function () {
  const { rgb } = this;
  return rgb.b;
};

prototypeAccessors.blue.set = function (value) {
  this.rgb = { ...this.rgb, b: value };
};

prototypeAccessors.rgb.get = function () {
  const ref = IroColor.hsvToRgb(this.$);
  const { r } = ref;
  const { g } = ref;
  const { b } = ref;
  return {
    r: round(r),
    g: round(g),
    b: round(b),
  };
};

prototypeAccessors.rgb.set = function (value) {
  this.hsv = { ...IroColor.rgbToHsv(value), a: value.a === undefined ? 1 : value.a };
};

prototypeAccessors.rgba.get = function () {
  return { ...this.rgb, a: this.alpha };
};

prototypeAccessors.rgba.set = function (value) {
  this.rgb = value;
};

prototypeAccessors.hsl.get = function () {
  const ref = IroColor.hsvToHsl(this.$);
  const { h } = ref;
  const { s } = ref;
  const { l } = ref;
  return {
    h: round(h),
    s: round(s),
    l: round(l),
  };
};

prototypeAccessors.hsl.set = function (value) {
  this.hsv = { ...IroColor.hslToHsv(value), a: value.a === undefined ? 1 : value.a };
};

prototypeAccessors.hsla.get = function () {
  return { ...this.hsl, a: this.alpha };
};

prototypeAccessors.hsla.set = function (value) {
  this.hsl = value;
};

prototypeAccessors.rgbString.get = function () {
  const { rgb } = this;
  return `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
};

prototypeAccessors.rgbString.set = function (value) {
  let match;
  let r;
  let g;
  let b;
  let a = 1;

  if ((match = REGEX_FUNCTIONAL_RGB.exec(value))) {
    r = parseUnit(match[1], 255);
    g = parseUnit(match[2], 255);
    b = parseUnit(match[3], 255);
  } else if ((match = REGEX_FUNCTIONAL_RGBA.exec(value))) {
    r = parseUnit(match[1], 255);
    g = parseUnit(match[2], 255);
    b = parseUnit(match[3], 255);
    a = parseUnit(match[4], 1);
  }

  if (match) {
    this.rgb = {
      r,
      g,
      b,
      a,
    };
  } else {
    throw new Error('Invalid rgb string');
  }
};

prototypeAccessors.rgbaString.get = function () {
  const { rgba } = this;
  return `rgba(${rgba.r}, ${rgba.g}, ${rgba.b}, ${rgba.a})`;
};

prototypeAccessors.rgbaString.set = function (value) {
  this.rgbString = value;
};

prototypeAccessors.hexString.get = function () {
  const { rgb } = this;
  return `#${intToHex(rgb.r)}${intToHex(rgb.g)}${intToHex(rgb.b)}`;
};

prototypeAccessors.hexString.set = function (value) {
  let match;
  let r;
  let g;
  let b;
  let a = 255;

  if ((match = REGEX_HEX_3.exec(value))) {
    r = parseHexInt(match[1]) * 17;
    g = parseHexInt(match[2]) * 17;
    b = parseHexInt(match[3]) * 17;
  } else if ((match = REGEX_HEX_4.exec(value))) {
    r = parseHexInt(match[1]) * 17;
    g = parseHexInt(match[2]) * 17;
    b = parseHexInt(match[3]) * 17;
    a = parseHexInt(match[4]) * 17;
  } else if ((match = REGEX_HEX_6.exec(value))) {
    r = parseHexInt(match[1]);
    g = parseHexInt(match[2]);
    b = parseHexInt(match[3]);
  } else if ((match = REGEX_HEX_8.exec(value))) {
    r = parseHexInt(match[1]);
    g = parseHexInt(match[2]);
    b = parseHexInt(match[3]);
    a = parseHexInt(match[4]);
  }

  if (match) {
    this.rgb = {
      r,
      g,
      b,
      a: a / 255,
    };
  } else {
    throw new Error('Invalid hex string');
  }
};

prototypeAccessors.hex8String.get = function () {
  const { rgba } = this;
  return `#${intToHex(rgba.r)}${intToHex(rgba.g)}${intToHex(rgba.b)}${intToHex(floor(rgba.a * 255))}`;
};

prototypeAccessors.hex8String.set = function (value) {
  this.hexString = value;
};

prototypeAccessors.hslString.get = function () {
  const { hsl } = this;
  return `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`;
};

prototypeAccessors.hslString.set = function (value) {
  let match;
  let h;
  let s;
  let l;
  let a = 1;

  if ((match = REGEX_FUNCTIONAL_HSL.exec(value))) {
    h = parseUnit(match[1], 360);
    s = parseUnit(match[2], 100);
    l = parseUnit(match[3], 100);
  } else if ((match = REGEX_FUNCTIONAL_HSLA.exec(value))) {
    h = parseUnit(match[1], 360);
    s = parseUnit(match[2], 100);
    l = parseUnit(match[3], 100);
    a = parseUnit(match[4], 1);
  }

  if (match) {
    this.hsl = {
      h,
      s,
      l,
      a,
    };
  } else {
    throw new Error('Invalid hsl string');
  }
};

prototypeAccessors.hslaString.get = function () {
  const { hsla } = this;
  return `hsl(${hsla.h}, ${hsla.s}%, ${hsla.l}%, ${hsla.a})`;
};

prototypeAccessors.hslaString.set = function (value) {
  this.hslString = value;
};

Object.defineProperties(IroColor.prototype, prototypeAccessors);

const sliderDefaultOptions = {
  sliderShape: 'bar',
  sliderType: 'value',
  minTemperature: 2200,
  maxTemperature: 11000,
};
/**
 * @desc Get the bounding dimensions of the slider
 * @param props - slider props
 */

function getSliderDimensions(props) {
  const { width } = props;
  let { sliderSize } = props;
  const { borderWidth } = props;
  const { handleRadius } = props;
  const { padding } = props;
  const { sliderShape } = props;
  const ishorizontal = props.layoutDirection === 'horizontal'; // automatically calculate sliderSize if its not defined

  sliderSize = sliderSize || padding * 2 + handleRadius * 2 + borderWidth * 2;

  if (sliderShape === 'circle') {
    return {
      handleStart: props.padding + props.handleRadius,
      handleRange: width - padding * 2 - handleRadius * 2 - borderWidth * 2,
      width,
      height: width,
      cx: width / 2,
      cy: width / 2,
      radius: width / 2 - borderWidth / 2,
    };
  }
  return {
    handleStart: sliderSize / 2,
    handleRange: width - sliderSize,
    radius: sliderSize / 2,
    x: 0,
    y: 0,
    width: ishorizontal ? sliderSize : width,
    height: ishorizontal ? width : sliderSize,
  };
}
/**
 * @desc Get the current slider value for a given color, as a percentage
 * @param props - slider props
 * @param color
 */

function getCurrentSliderValue(props, color) {
  const { hsva } = color;
  const { rgb } = color;

  switch (props.sliderType) {
    case 'red':
      return rgb.r / 2.55;

    case 'green':
      return rgb.g / 2.55;

    case 'blue':
      return rgb.b / 2.55;

    case 'alpha':
      return hsva.a * 100;

    case 'kelvin':
      var { minTemperature } = props;
      var { maxTemperature } = props;
      var temperatureRange = maxTemperature - minTemperature;
      var percent = ((color.kelvin - minTemperature) / temperatureRange) * 100; // clmap percentage

      return Math.max(0, Math.min(percent, 100));

    case 'hue':
      return (hsva.h /= 3.6);

    case 'saturation':
      return hsva.s;

    case 'value':
    default:
      return hsva.v;
  }
}
/**
 * @desc Get the current slider value from user input
 * @param props - slider props
 * @param x - global input x position
 * @param y - global input y position
 */

function getSliderValueFromInput(props, x, y) {
  const ref = getSliderDimensions(props);
  const { handleRange } = ref;
  const { handleStart } = ref;
  let handlePos;

  if (props.layoutDirection === 'horizontal') {
    handlePos = -1 * y + handleRange + handleStart;
  } else {
    handlePos = x - handleStart;
  } // clamp handle position

  handlePos = Math.max(Math.min(handlePos, handleRange), 0);
  const percent = Math.round((100 / handleRange) * handlePos);

  switch (props.sliderType) {
    case 'kelvin':
      var { minTemperature } = props;
      var { maxTemperature } = props;
      var temperatureRange = maxTemperature - minTemperature;
      return minTemperature + temperatureRange * (percent / 100);

    case 'alpha':
      return percent / 100;

    case 'hue':
      return percent * 3.6;

    case 'red':
    case 'blue':
    case 'green':
      return percent * 2.55;

    default:
      return percent;
  }
}
/**
 * @desc Get the current handle position for a given color
 * @param props - slider props
 * @param color
 */

function getSliderHandlePosition(props, color) {
  const ref = getSliderDimensions(props);
  const { width } = ref;
  const { height } = ref;
  const { handleRange } = ref;
  const { handleStart } = ref;
  const ishorizontal = props.layoutDirection === 'horizontal';
  const sliderValue = getCurrentSliderValue(props, color);
  const midPoint = ishorizontal ? width / 2 : height / 2;
  let handlePos = handleStart + (sliderValue / 100) * handleRange;

  if (ishorizontal) {
    handlePos = -1 * handlePos + handleRange + handleStart * 2;
  }

  return {
    x: ishorizontal ? midPoint : handlePos,
    y: ishorizontal ? handlePos : midPoint,
  };
}
/**
 * @desc Get the gradient stops for a slider
 * @param props - slider props
 * @param color
 */

function getSliderGradient(props, color) {
  const { hsv } = color;
  const { rgb } = color;

  console.log('=================================', color);

  switch (props.sliderType) {
    case 'red':
      return [
        [0, `rgb(${0},${rgb.g},${rgb.b})`],
        [100, `rgb(${255},${rgb.g},${rgb.b})`],
      ];

    case 'green':
      return [
        [0, `rgb(${rgb.r},${0},${rgb.b})`],
        [100, `rgb(${rgb.r},${255},${rgb.b})`],
      ];

    case 'blue':
      return [
        [0, `rgb(${rgb.r},${rgb.g},${0})`],
        [100, `rgb(${rgb.r},${rgb.g},${255})`],
      ];

    case 'alpha':
      return [
        [0, `rgba(${rgb.r},${rgb.g},${rgb.b},0)`],
        [100, `rgb(${rgb.r},${rgb.g},${rgb.b})`],
      ];

    case 'kelvin':
      var stops = [];
      var min = props.minTemperature;
      var max = props.maxTemperature;
      var numStops = 8;
      var range = max - min;

      for (let kelvin = min, stop = 0; kelvin < max; kelvin += range / numStops, stop += 1) {
        const ref = IroColor.kelvinToRgb(kelvin);
        const { r } = ref;
        const { g } = ref;
        const { b } = ref;
        stops.push([(100 / numStops) * stop, `rgb(${r},${g},${b})`]);
      }

      return stops;

    case 'hue':
      return [
        [0, '#f00'],
        [16.666, '#ff0'],
        [33.333, '#0f0'],
        [50, '#0ff'],
        [66.666, '#00f'],
        [83.333, '#f0f'],
        [100, '#f00'],
      ];

    case 'saturation':
      var noSat = IroColor.hsvToHsl({
        h: hsv.h,
        s: 0,
        v: hsv.v,
      });
      var fullSat = IroColor.hsvToHsl({
        h: hsv.h,
        s: 100,
        v: hsv.v,
      });
      return [
        [0, `hsl(${noSat.h},${noSat.s}%,${noSat.l}%)`],
        [100, `hsl(${fullSat.h},${fullSat.s}%,${fullSat.l}%)`],
      ];

    case 'value':
    default:
      var hsl = IroColor.hsvToHsl({
        h: hsv.h,
        s: hsv.s,
        v: 100,
      });
      return [
        [0, '#000'],
        [100, `hsl(${hsl.h},${hsl.s}%,${hsl.l}%)`],
      ];
  }
}
/**
 * @desc Get the gradient coords for a slider
 * @param props - slider props
 */

function getSliderGradientCoords(props) {
  const ishorizontal = props.layoutDirection === 'horizontal';
  return {
    x1: '0%',
    y1: ishorizontal ? '100%' : '0%',
    x2: ishorizontal ? '0%' : '100%',
    y2: '0%',
  };
}

/**
 * @desc Get the point as the center of the wheel
 * @param props - wheel props
 */
function getWheelDimensions(props) {
  const rad = props.width / 2;
  return {
    width: props.width,
    radius: rad - props.borderWidth,
    cx: rad,
    cy: rad,
  };
}
/**
 * @desc Translate an angle according to wheelAngle and wheelDirection
 * @param props - wheel props
 * @param angle - input angle
 */

function translateWheelAngle(props, angle, invert) {
  const { wheelAngle } = props;
  const { wheelDirection } = props;

  if ((!invert && wheelDirection === 'clockwise') || (invert && wheelDirection === 'anticlockwise')) {
    angle = (invert ? 180 : 360) - (wheelAngle - angle);
  } else {
    angle = wheelAngle + angle;
  } // javascript's modulo operator doesn't produce positive numbers with negative input
  // https://dev.to/maurobringolf/a-neat-trick-to-compute-modulo-of-negative-numbers-111e

  return ((angle % 360) + 360) % 360;
}
/**
 * @desc Get the current handle position for a given color
 * @param props - wheel props
 * @param color
 */

function getWheelHandlePosition(props, color) {
  const { hsv } = color;
  const ref = getWheelDimensions(props);
  const { cx } = ref;
  const { cy } = ref;
  const handleRange = props.width / 2 - props.padding - props.handleRadius - props.borderWidth;
  const handleAngle = (180 + translateWheelAngle(props, hsv.h, true)) * (Math.PI / 180);
  const handleDist = (hsv.s / 100) * handleRange;
  const direction = props.wheelDirection === 'clockwise' ? -1 : 1;
  return {
    x: cx + handleDist * Math.cos(handleAngle) * direction,
    y: cy + handleDist * Math.sin(handleAngle) * direction,
  };
}
/**
 * @desc Get the current wheel value from user input
 * @param props - wheel props
 * @param x - global input x position
 * @param y - global input y position
 */

function getWheelValueFromInput(props, x, y) {
  const ref = getWheelDimensions(props);
  const { cx } = ref;
  const { cy } = ref;
  const handleRange = props.width / 2 - props.padding - props.handleRadius - props.borderWidth;
  x = cx - x;
  y = cy - y; // Calculate the hue by converting the angle to radians

  const hue = translateWheelAngle(props, Math.atan2(-y, -x) * (180 / Math.PI)); // Find the point's distance from the center of the wheel
  // This is used to show the saturation level

  const handleDist = Math.min(Math.sqrt(x * x + y * y), handleRange);
  return {
    h: Math.round(hue),
    s: Math.round((100 / handleRange) * handleDist),
  };
}
/**
 * @desc Get the bounding dimensions of the box
 * @param props - box props
 */

function getBoxDimensions(props) {
  const { width } = props;
  const { padding } = props;
  const { handleRadius } = props;
  return {
    width,
    height: width,
    radius: padding + handleRadius,
  };
}
/**
 * @desc Get the current box value from user input
 * @param props - box props
 * @param x - global input x position
 * @param y - global input y position
 */

function getBoxValueFromInput(props, x, y) {
  const ref = getBoxDimensions(props);
  const { width } = ref;
  const { height } = ref;
  const { radius } = ref;
  const handleStart = radius;
  const handleRangeX = width - radius * 2;
  const handleRangeY = height - radius * 2;
  const percentX = ((x - handleStart) / handleRangeX) * 100;
  const percentY = ((y - handleStart) / handleRangeY) * 100;
  return {
    s: Math.max(0, Math.min(percentX, 100)),
    v: Math.max(0, Math.min(100 - percentY, 100)),
  };
}
/**
 * @desc Get the current box handle position for a given color
 * @param props - box props
 * @param color
 */

function getBoxHandlePosition(props, color) {
  const ref = getBoxDimensions(props);
  const { width } = ref;
  const { height } = ref;
  const { radius } = ref;
  const { hsv } = color;
  const handleStart = radius;
  const handleRangeX = width - radius * 2;
  const handleRangeY = height - radius * 2;
  return {
    x: handleStart + (hsv.s / 100) * handleRangeX,
    y: handleStart + (handleRangeY - (hsv.v / 100) * handleRangeY),
  };
}
/**
 * @desc Get the gradient stops for a box
 * @param props - box props
 * @param color
 */

function getBoxGradients(props, color) {
  const { hue } = color;

  console.log('===============', props, color);
  return [
    // saturation gradient
    [
      [0, '#fff'],
      [100, `hsl(${hue},100%,50%)`],
    ], // lightness gradient
    [
      [0, 'rgba(0,0,0,0)'],
      [100, '#000'],
    ],
  ];
}

// Keep track of html <base> elements for resolveSvgUrl
// getElementsByTagName returns a live HTMLCollection, which stays in sync with the DOM tree
// So it only needs to be called once
let BASE_ELEMENTS;
/**
 * @desc Resolve an SVG reference URL
 * This is required to work around how Safari and iOS webviews handle gradient URLS under certain conditions
 * If a page is using a client-side routing library which makes use of the HTML <base> tag,
 * Safari won't be able to render SVG gradients properly (as they are referenced by URLs)
 * More info on the problem:
 * https://stackoverflow.com/questions/19742805/angular-and-svg-filters/19753427#19753427
 * https://github.com/jaames/iro.js/issues/18
 * https://github.com/jaames/iro.js/issues/45
 * https://github.com/jaames/iro.js/pull/89
 * @props url - SVG reference URL
 */

function resolveSvgUrl(url) {
  if (!BASE_ELEMENTS) {
    BASE_ELEMENTS = document.getElementsByTagName('base');
  } // Sniff useragent string to check if the user is running Safari

  const ua = window.navigator.userAgent;
  const isSafari = /^((?!chrome|android).)*safari/i.test(ua);
  const isIos = /iPhone|iPod|iPad/i.test(ua);
  const { location } = window;
  return (isSafari || isIos) && BASE_ELEMENTS.length > 0
    ? `${location.protocol}//${location.host}${location.pathname}${location.search}${url}`
    : url;
}
/**
 * @desc Get the path commands to draw an svg arc
 * @props cx - arc center point x
 * @props cy - arc center point y
 * @props radius - arc radius
 * @props startAngle - arc start angle
 * @props endAngle - arc end angle
 */

function getSvgArcPath(cx, cy, radius, startAngle, endAngle) {
  const largeArcFlag = endAngle - startAngle <= 180 ? 0 : 1;
  startAngle *= Math.PI / 180;
  endAngle *= Math.PI / 180;
  const x1 = cx + radius * Math.cos(endAngle);
  const y1 = cy + radius * Math.sin(endAngle);
  const x2 = cx + radius * Math.cos(startAngle);
  const y2 = cy + radius * Math.sin(startAngle);
  return `M ${x1} ${y1} A ${radius} ${radius} 0 ${largeArcFlag} 0 ${x2} ${y2}`;
}
/**
 * @desc Given a specifc (x, y) position, test if there's a handle there and return its index, else return null.
 *       This is used for components like the box and wheel which support multiple handles when multicolor is active
 * @props x - point x position
 * @props y - point y position
 * @props handlePositions - array of {x, y} coords for each handle
 */

function getHandleAtPoint(props, x, y, handlePositions) {
  for (let i = 0; i < handlePositions.length; i++) {
    const dX = handlePositions[i].x - x;
    const dY = handlePositions[i].y - y;
    const dist = Math.sqrt(dX * dX + dY * dY);

    if (dist < props.handleRadius) {
      return i;
    }
  }

  return null;
}

const iroColorPickerOptionDefaults = {
  width: 300,
  height: 300,
  handleRadius: 8,
  handleSvg: null,
  handleProps: {
    x: 0,
    y: 0,
  },
  color: '#fff',
  colors: [],
  borderColor: '#fff',
  borderWidth: 0,
  wheelLightness: true,
  wheelAngle: 0,
  wheelDirection: 'anticlockwise',
  layoutDirection: 'vertical',
  sliderSize: null,
  sliderMargin: 12,
  padding: 6,
};

const SECONDARY_EVENTS = [
  'mousemove' /* MouseMove */,
  'touchmove' /* TouchMove */,
  'mouseup' /* MouseUp */,
  'touchend' /* TouchEnd */,
];
// Base component class for iro UI components
// This extends the Preact component class to allow them to react to mouse/touch input events by themselves
const IroComponentBase = /* @__PURE__ */ (function (Component) {
  function IroComponentBase(props) {
    Component.call(this, props);
    // Generate unique ID for the component
    // This can be used to generate unique IDs for gradients, etc
    this.uid = (Math.random() + 1).toString(36).substring(5);
  }

  if (Component) IroComponentBase.__proto__ = Component;
  IroComponentBase.prototype = Object.create(Component && Component.prototype);
  IroComponentBase.prototype.constructor = IroComponentBase;
  IroComponentBase.prototype.render = function render(props) {
    const eventHandler = this.handleEvent.bind(this);
    const rootProps = {
      onMouseDown: eventHandler,
      // https://github.com/jaames/iro.js/issues/126
      // https://github.com/preactjs/preact/issues/2113#issuecomment-553408767
      ontouchstart: eventHandler,
    };
    const isHorizontal = props.layoutDirection === 'horizontal';
    const margin = props.margin === null ? props.sliderMargin : props.margin;
    const rootStyles = {
      overflow: 'visible',
      display: isHorizontal ? 'inline-block' : 'block',
    };
    // first component shouldn't have any margin
    if (props.index > 0) {
      rootStyles[isHorizontal ? 'marginLeft' : 'marginTop'] = margin;
    }
    return h(d, null, props.children(this.uid, rootProps, rootStyles));
  };
  // More info on handleEvent:
  // https://medium.com/@WebReflection/dom-handleevent-a-cross-platform-standard-since-year-2000-5bf17287fd38
  // TL;DR this lets us have a single point of entry for multiple events, and we can avoid callback/binding hell
  IroComponentBase.prototype.handleEvent = function handleEvent(e) {
    const this$1 = this;

    const inputHandler = this.props.onInput;
    // Get the screen position of the component
    const bounds = this.base.getBoundingClientRect();
    // Prefect default browser action
    e.preventDefault();
    // Detect if the event is a touch event by checking if it has the `touches` property
    // If it is a touch event, use the first touch input
    const point = e.touches ? e.changedTouches[0] : e;
    const x = point.clientX - bounds.left;
    const y = point.clientY - bounds.top;
    switch (e.type) {
      case 'mousedown' /* MouseDown */:
      case 'touchstart' /* TouchStart */:
        SECONDARY_EVENTS.forEach(function (event) {
          document.addEventListener(event, this$1, { passive: false });
        });
        inputHandler(x, y, 0 /* Start */);
        break;
      case 'mousemove' /* MouseMove */:
      case 'touchmove' /* TouchMove */:
        inputHandler(x, y, 1 /* Move */);
        break;
      case 'mouseup' /* MouseUp */:
      case 'touchend' /* TouchEnd */:
        inputHandler(x, y, 2 /* End */);
        SECONDARY_EVENTS.forEach(function (event) {
          document.removeEventListener(event, this$1);
        });
        break;
    }
  };

  return IroComponentBase;
})(m);

function IroHandle(props) {
  const radius = props.r;
  const { url } = props;

  console.log('bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb');

  return h(
    'svg',
    {
      className: `IroHandle IroHandle--${props.index} ${props.isActive ? 'IroHandle--isActive' : ''}`,
      x: props.x,
      y: props.y,
      style: {
        overflow: 'visible',
      },
    },
    url && h('use', { xlinkHref: resolveSvgUrl(url), ...props.props }),
    !url && h('circle', { r: radius, fill: 'none', 'stroke-width': 2, stroke: '#000' }),
    !url && h('circle', { r: radius - 2, fill: props.fill, 'stroke-width': 2, stroke: '#fff' }),
  );
}
IroHandle.defaultProps = {
  fill: 'none',
  x: 0,
  y: 0,
  r: 8,
  url: null,
  props: { x: 0, y: 0 },
};

function IroSlider(props) {
  const { activeIndex } = props;
  const activeColor =
    activeIndex !== undefined && activeIndex < props.colors.length ? props.colors[activeIndex] : props.color;
  const ref = getSliderDimensions(props);
  const { width } = ref;
  const { height } = ref;
  const { radius } = ref;
  const handlePos = getSliderHandlePosition(props, activeColor);
  const gradient = getSliderGradient(props, activeColor);
  const isAlpha = props.sliderType === 'alpha';
  function handleInput(x, y, type) {
    const value = getSliderValueFromInput(props, x, y);
    props.parent.inputActive = true;
    activeColor[props.sliderType] = value;
    props.onInput(type);
  }

  return h(IroComponentBase, { ...props, onInput: handleInput }, function (uid, rootProps, rootStyles) {
    return h(
      'svg',
      { ...rootProps, className: 'IroSlider', width, height, style: rootStyles },
      h(
        'defs',
        null,
        h(
          'linearGradient',
          { id: `g${uid}`, ...getSliderGradientCoords(props) },
          gradient.map(function (ref) {
            const offset = ref[0];
            const color = ref[1];

            return h('stop', { offset: `${offset}%`, 'stop-color': color });
          }),
        ),
        isAlpha &&
          h(
            'pattern',
            { id: `b${uid}`, width: '8', height: '8', patternUnits: 'userSpaceOnUse' },
            h('rect', { x: '0', y: '0', width: '8', height: '8', fill: '#fff' }),
            h('rect', { x: '0', y: '0', width: '4', height: '4', fill: '#ccc' }),
            h('rect', { x: '4', y: '4', width: '4', height: '4', fill: '#ccc' }),
          ),
        isAlpha &&
          h(
            'pattern',
            { id: `f${uid}`, width: '100%', height: '100%' },
            h('rect', { x: '0', y: '0', width: '100%', height: '100%', fill: `url(${resolveSvgUrl(`#b${uid}`)})` }),
            h('rect', { x: '0', y: '0', width: '100%', height: '100%', fill: `url(${resolveSvgUrl(`#g${uid}`)})` }),
          ),
      ),
      h('rect', {
        className: 'IroSliderBg',
        rx: radius,
        ry: radius,
        x: props.borderWidth / 2,
        y: props.borderWidth / 2,
        width: width - props.borderWidth,
        height: height - props.borderWidth,
        'stroke-width': props.borderWidth,
        stroke: props.borderColor,
        fill: `url(${resolveSvgUrl((isAlpha ? '#f' : '#g') + uid)})`,
      }),
      h(IroHandle, {
        isActive: true,
        index: activeColor.index,
        r: props.handleRadius,
        url: props.handleSvg,
        props: props.handleProps,
        x: handlePos.x,
        y: handlePos.y,
      }),
    );
  });
}
IroSlider.defaultProps = { ...sliderDefaultOptions };

function IroBox(props) {
  const ref = getBoxDimensions(props);
  const { width } = ref;
  const { height } = ref;
  const { radius } = ref;
  const { colors } = props;
  const colorPicker = props.parent;
  const { activeIndex } = props;
  const activeColor =
    activeIndex !== undefined && activeIndex < props.colors.length ? props.colors[activeIndex] : props.color;
  const gradients = getBoxGradients(props, activeColor);
  const handlePositions = colors.map(function (color) {
    return getBoxHandlePosition(props, color);
  });
  function handleInput(x, y, inputType) {
    if (inputType === 0 /* Start */) {
      // getHandleAtPoint() returns the index for the handle if the point 'hits' it, or null otherwise
      const activeHandle = getHandleAtPoint(props, x, y, handlePositions);
      // If the input hit a handle, set it as the active handle, but don't update the color
      if (activeHandle !== null) {
        colorPicker.setActiveColor(activeHandle);
      }
      // If the input didn't hit a handle, set the currently active handle to that position
      else {
        colorPicker.inputActive = true;
        activeColor.hsv = getBoxValueFromInput(props, x, y);
        props.onInput(inputType);
      }
    }
    // move is fired when the user has started dragging
    else if (inputType === 1 /* Move */) {
      colorPicker.inputActive = true;
      activeColor.hsv = getBoxValueFromInput(props, x, y);
    }
    // let the color picker fire input:start, input:move or input:end events
    props.onInput(inputType);
  }

  return h(IroComponentBase, { ...props, onInput: handleInput }, function (uid, rootProps, rootStyles) {
    return h(
      'svg',
      { ...rootProps, className: 'IroBox', width, height, style: rootStyles },
      h(
        'defs',
        null,
        h(
          'linearGradient',
          { id: `s${uid}`, x1: '0%', y1: '0%', x2: '100%', y2: '0%' },
          gradients[0].map(function (ref) {
            const offset = ref[0];
            const color = ref[1];

            return h('stop', { offset: `${offset}%`, 'stop-color': color });
          }),
        ),
        h(
          'linearGradient',
          { id: `l${uid}`, x1: '0%', y1: '0%', x2: '0%', y2: '100%' },
          gradients[1].map(function (ref) {
            const offset = ref[0];
            const color = ref[1];

            return h('stop', { offset: `${offset}%`, 'stop-color': color });
          }),
        ),
        h(
          'pattern',
          { id: `f${uid}`, width: '100%', height: '100%' },
          h('rect', { x: '0', y: '0', width: '100%', height: '100%', fill: `url(${resolveSvgUrl(`#s${uid}`)})` }),
          h('rect', { x: '0', y: '0', width: '100%', height: '100%', fill: `url(${resolveSvgUrl(`#l${uid}`)})` }),
        ),
      ),
      h('rect', {
        rx: radius,
        ry: radius,
        x: props.borderWidth / 2,
        y: props.borderWidth / 2,
        width: width - props.borderWidth,
        height: height - props.borderWidth,
        'stroke-width': props.borderWidth,
        stroke: props.borderColor,
        fill: `url(${resolveSvgUrl(`#f${uid}`)})`,
      }),
      colors
        .filter(function (color) {
          return color !== activeColor;
        })
        .map(function (color) {
          return h(IroHandle, {
            isActive: false,
            index: color.index,
            fill: color.hslString,
            r: props.handleRadius,
            url: props.handleSvg,
            props: props.handleProps,
            x: handlePositions[color.index].x,
            y: handlePositions[color.index].y,
          });
        }),
      h(IroHandle, {
        isActive: true,
        index: activeColor.index,
        fill: activeColor.hslString,
        r: props.handleRadius,
        url: props.handleSvg,
        props: props.handleProps,
        x: handlePositions[activeColor.index].x,
        y: handlePositions[activeColor.index].y,
      }),
    );
  });
}

const HUE_STEPS = Array.apply(null, { length: 360 }).map(function (_, index) {
  return index;
});
function IroWheel(props) {
  const ref = getWheelDimensions(props);
  const { width } = ref;
  const { radius } = ref;
  const { cx } = ref;
  const { cy } = ref;
  const { colors } = props;
  const { borderWidth } = props;
  const colorPicker = props.parent;
  const activeColor = props.color;
  const { hsv } = activeColor;
  const handlePositions = colors.map(function (color) {
    return getWheelHandlePosition(props, color);
  });
  function handleInput(x, y, inputType) {
    if (inputType === 0 /* Start */) {
      // getHandleAtPoint() returns the index for the handle if the point 'hits' it, or null otherwise
      const activeHandle = getHandleAtPoint(props, x, y, handlePositions);
      // If the input hit a handle, set it as the active handle, but don't update the color
      if (activeHandle !== null) {
        colorPicker.setActiveColor(activeHandle);
      }
      // If the input didn't hit a handle, set the currently active handle to that position
      else {
        colorPicker.inputActive = true;
        activeColor.hsv = getWheelValueFromInput(props, x, y);
        props.onInput(inputType);
      }
    }
    // move is fired when the user has started dragging
    else if (inputType === 1 /* Move */) {
      colorPicker.inputActive = true;
      activeColor.hsv = getWheelValueFromInput(props, x, y);
    }
    // let the color picker fire input:start, input:move or input:end events
    props.onInput(inputType);
  }

  return h(IroComponentBase, { ...props, onInput: handleInput }, function (uid, rootProps, rootStyles) {
    console.log('XXXXXXXXXXXXXXXXXXXXXXXXXXXX ');
    return h(
      'svg',
      { ...rootProps, className: 'IroWheel', width, height: width, style: rootStyles },
      h(
        'defs',
        null,
        h(
          'radialGradient',
          { id: uid },
          h('stop', { offset: '0%', 'stop-color': '#fff' }),
          h('stop', { offset: '30%', 'stop-color': '#fff', 'stop-opacity': '0.8' }),
          h('stop', { offset: '100%', 'stop-color': '#fff', 'stop-opacity': '0' }),
        ),
        h('filter', { id: 'GaussianBlur' }, h('feGaussianBlur', { in: 'SourceGraphic', stdDeviation: '30' })),
        h('filter', { id: 'GaussianBlur2' }, h('feGaussianBlur', { in: 'SourceGraphic', stdDeviation: '20' })),
      ),
      h(
        'g',
        { className: 'IroWheelHue', 'stroke-width': radius, fill: 'none' },
        HUE_STEPS.map(function (angle) {
          return h('path', {
            key: angle,
            d: getSvgArcPath(cx, cy, radius / 2, angle, angle + 1.5),
            stroke: `hsl(${translateWheelAngle(props, angle)}, 90%, 50%)`,
          });
        }),
      ),
      h('circle', {
        className: 'IroWheelSaturation',
        cx,
        cy,
        r: radius,
        fill: `url(${resolveSvgUrl(`#${uid}`)})`,
        filter: `url(${resolveSvgUrl('#GaussianBlur')})`,
      }),
      h('circle', {
        className: 'IroWheelSaturation2',
        cx,
        cy,
        r: radius,
        fill: `url(${resolveSvgUrl(`#${uid}`)})`,
        filter: `url(${resolveSvgUrl('#GaussianBlur2')})`,
      }),
      props.wheelLightness &&
        h('circle', { className: 'IroWheelLightness', cx, cy, r: radius, fill: '#000', opacity: 1 - hsv.v / 100 }),
      h('circle', {
        className: 'IroWheelBorder',
        cx,
        cy,
        r: radius,
        fill: 'none',
        stroke: props.borderColor,
        'stroke-width': borderWidth,
      }),
      colors
        .filter(function (color) {
          return color !== activeColor;
        })
        .map(function (color) {
          return h(IroHandle, {
            isActive: false,
            index: color.index,
            fill: color.hslString,
            r: props.handleRadius,
            url: props.handleSvg,
            props: props.handleProps,
            x: handlePositions[color.index].x,
            y: handlePositions[color.index].y,
          });
        }),
      h(IroHandle, {
        isActive: true,
        index: activeColor.index,
        fill: activeColor.hslString,
        r: props.handleRadius,
        url: props.handleSvg,
        props: props.handleProps,
        x: handlePositions[activeColor.index].x,
        y: handlePositions[activeColor.index].y,
      }),
    );
  });
}

// Turn a component into a widget
// This returns a factory function that can be used to create an instance of the widget component
// The first function param is a DOM element or CSS selector for the element to mount to,
// The second param is for config options which are passed to the component as props
// This factory function can also delay mounting the element into the DOM until the page is ready
function createWidget(WidgetComponent) {
  const widgetFactory = function (parent, props) {
    let widget; // will become an instance of the widget component class
    const widgetRoot = document.createElement('div');
    // Render widget into a temp DOM node
    I(
      h(WidgetComponent, {
        ref(ref) {
          return (widget = ref);
        },
        ...props,
      }),
      widgetRoot,
    );
    function mountWidget() {
      const container = parent instanceof Element ? parent : document.querySelector(parent);
      container.appendChild(widget.base);
      widget.onMount(container);
    }
    // Mount it into the DOM when the page document is ready
    if (document.readyState !== 'loading') {
      mountWidget();
    } else {
      document.addEventListener('DOMContentLoaded', mountWidget);
    }
    return widget;
  };
  // Allow the widget factory to inherit component prototype + static class methods
  // This makes it easier for plugin authors to extend the base widget component
  widgetFactory.prototype = WidgetComponent.prototype;
  Object.assign(widgetFactory, WidgetComponent);
  // Add reference to base component too
  widgetFactory.__component = WidgetComponent;
  return widgetFactory;
}

const IroColorPicker = /* @__PURE__ */ (function (Component) {
  function IroColorPicker(props) {
    const this$1 = this;

    Component.call(this, props);
    this.colors = [];
    this.inputActive = false;
    this.events = {};
    this.activeEvents = {};
    this.deferredEvents = {};
    this.id = props.id;
    const colors = props.colors.length > 0 ? props.colors : [props.color];
    colors.forEach(function (colorValue) {
      return this$1.addColor(colorValue);
    });
    this.setActiveColor(0);
    // Pass all the props into the component's state,
    // Except we want to add the color object and make sure that refs aren't passed down to children
    this.state = { ...props, color: this.color, colors: this.colors, layout: props.layout };
  }

  if (Component) IroColorPicker.__proto__ = Component;
  IroColorPicker.prototype = Object.create(Component && Component.prototype);
  IroColorPicker.prototype.constructor = IroColorPicker;
  // Plubic multicolor API
  /**
   * @desc Add a color to the color picker
   * @param color new color to add
   * @param index optional color index
   */
  IroColorPicker.prototype.addColor = function addColor(color, index) {
    if (index === void 0) index = this.colors.length;

    // Create a new iro.Color
    // Also bind it to onColorChange, so whenever the color changes it updates the color picker
    const newColor = new IroColor(color, this.onColorChange.bind(this));
    // Insert color @ the given index
    this.colors.splice(index, 0, newColor);
    // Reindex colors
    this.colors.forEach(function (color, index) {
      return (color.index = index);
    });
    // Update picker state if necessary
    if (this.state) {
      this.setState({ colors: this.colors });
    }
    // Fire color init event
    this.deferredEmit('color:init', newColor);
  };
  /**
   * @desc Remove a color from the color picker
   * @param index color index
   */
  IroColorPicker.prototype.removeColor = function removeColor(index) {
    const color = this.colors.splice(index, 1)[0];
    // Destroy the color object -- this unbinds it from the color picker
    color.unbind();
    // Reindex colors
    this.colors.forEach(function (color, index) {
      return (color.index = index);
    });
    // Update picker state if necessary
    if (this.state) {
      this.setState({ colors: this.colors });
    }
    // If the active color was removed, default active color to 0
    if (color.index === this.color.index) {
      this.setActiveColor(0);
    }
    // Fire color remove event
    this.emit('color:remove', color);
  };
  /**
   * @desc Set the currently active color
   * @param index color index
   */
  IroColorPicker.prototype.setActiveColor = function setActiveColor(index) {
    this.color = this.colors[index];
    if (this.state) {
      this.setState({ color: this.color });
    }
    // Fire color switch event
    this.emit('color:setActive', this.color);
  };
  /**
   * @desc Replace all of the current colorPicker colors
   * @param newColorValues list of new colors to add
   */
  IroColorPicker.prototype.setColors = function setColors(newColorValues) {
    const this$1 = this;

    // Unbind color events
    this.colors.forEach(function (color) {
      return color.unbind();
    });
    // Destroy old colors
    this.colors = [];
    // Add new colors
    newColorValues.forEach(function (colorValue) {
      return this$1.addColor(colorValue);
    });
    // Reset active color
    this.setActiveColor(0);
    this.emit('color:setAll', this.colors);
  };
  // Public ColorPicker events API
  /**
   * @desc Set a callback function for an event
   * @param eventList event(s) to listen to
   * @param callback - Function called when the event is fired
   */
  IroColorPicker.prototype.on = function on(eventList, callback) {
    const this$1 = this;

    const { events } = this;
    // eventList can be an eventType string or an array of eventType strings
    (!Array.isArray(eventList) ? [eventList] : eventList).forEach(function (eventType) {
      // Add event callback
      (events[eventType] || (events[eventType] = [])).push(callback);
      // Call deferred events
      // These are events that can be stored until a listener for them is added
      if (this$1.deferredEvents[eventType]) {
        // Deffered events store an array of arguments from when the event was called
        this$1.deferredEvents[eventType].forEach(function (args) {
          callback.apply(null, args);
        });
        // Clear deferred events
        this$1.deferredEvents[eventType] = [];
      }
    });
  };
  /**
   * @desc Remove a callback function for an event added with on()
   * @param eventList - event(s) to listen to
   * @param callback - original callback function to remove
   */
  IroColorPicker.prototype.off = function off(eventList, callback) {
    const this$1 = this;

    (!Array.isArray(eventList) ? [eventList] : eventList).forEach(function (eventType) {
      const callbackList = this$1.events[eventType];
      // this.emitHook('event:off', eventType, callback);
      if (callbackList) {
        callbackList.splice(callbackList.indexOf(callback), 1);
      }
    });
  };
  /**
   * @desc Emit an event
   * @param eventType event to emit
   */
  IroColorPicker.prototype.emit = function emit(eventType) {
    const this$1 = this;
    const args = [];
    let len = arguments.length - 1;
    while (len-- > 0) args[len] = arguments[len + 1];

    const { activeEvents } = this;
    const isEventActive = activeEvents.hasOwnProperty(eventType) ? activeEvents[eventType] : false;
    // Prevent event callbacks from firing if the event is already active
    // This stops infinite loops if something in an event callback causes the same event to be fired again
    // (e.g. setting the color inside a color:change callback)
    if (!isEventActive) {
      activeEvents[eventType] = true;
      const callbackList = this.events[eventType] || [];
      callbackList.forEach(function (fn) {
        return fn.apply(this$1, args);
      });
      activeEvents[eventType] = false;
    }
  };
  /**
   * @desc Emit an event now, or save it for when the relevent event listener is added
   * @param eventType - The name of the event to emit
   */
  IroColorPicker.prototype.deferredEmit = function deferredEmit(eventType) {
    let ref;

    const args = [];
    let len = arguments.length - 1;
    while (len-- > 0) args[len] = arguments[len + 1];
    const { deferredEvents } = this;
    (ref = this).emit.apply(ref, [eventType].concat(args));
    (deferredEvents[eventType] || (deferredEvents[eventType] = [])).push(args);
  };
  // Public utility methods
  IroColorPicker.prototype.setOptions = function setOptions(newOptions) {
    this.setState({ ...this.state, ...newOptions });
  };
  /**
   * @desc Resize the color picker
   * @param width - new width
   */
  IroColorPicker.prototype.resize = function resize(width) {
    this.setOptions({ width });
  };
  /**
   * @desc Reset the color picker to the initial color provided in the color picker options
   */
  IroColorPicker.prototype.reset = function reset() {
    this.colors.forEach(function (color) {
      return color.reset();
    });
    this.setState({ colors: this.colors });
  };
  /**
   * @desc Called by the createWidget wrapper when the element is mounted into the page
   * @param container - the container element for this ColorPicker instance
   */
  IroColorPicker.prototype.onMount = function onMount(container) {
    this.el = container;
    this.deferredEmit('mount', this);
  };
  // Internal methods
  /**
   * @desc React to a color update
   * @param color - current color
   * @param changes - shows which h,s,v,a color channels changed
   */
  IroColorPicker.prototype.onColorChange = function onColorChange(color, changes) {
    this.setState({ color: this.color });
    if (this.inputActive) {
      this.inputActive = false;
      this.emit('input:change', color, changes);
    }
    this.emit('color:change', color, changes);
  };
  /**
   * @desc Handle input from a UI control element
   * @param type - event type
   */
  IroColorPicker.prototype.emitInputEvent = function emitInputEvent(type) {
    if (type === 0 /* Start */) {
      this.emit('input:start', this.color);
    } else if (type === 1 /* Move */) {
      this.emit('input:move', this.color);
    } else if (type === 2 /* End */) {
      this.emit('input:end', this.color);
    }
  };
  IroColorPicker.prototype.render = function render(props, state) {
    const this$1 = this;

    let { layout } = state;
    // use layout shorthands
    if (!Array.isArray(layout)) {
      switch (layout) {
        // TODO: implement some?
        default:
          layout = [{ component: IroWheel }, { component: IroSlider }];
      }
      // add transparency slider to the layout
      if (state.transparency) {
        layout.push({
          component: IroSlider,
          options: {
            sliderType: 'alpha',
          },
        });
      }
    }
    return h(
      'div',
      {
        class: 'IroColorPicker',
        id: state.id,
        style: {
          display: state.display,
        },
      },
      layout.map(function (ref, componentIndex) {
        const UiComponent = ref.component;
        const { options } = ref;

        return h(UiComponent, {
          ...state,
          ...options,
          ref: undefined,
          onInput: this$1.emitInputEvent.bind(this$1),
          parent: this$1,
          index: componentIndex,
        });
      }),
    );
  };

  return IroColorPicker;
})(m);
IroColorPicker.defaultProps = {
  ...iroColorPickerOptionDefaults,
  colors: [],
  display: 'block',
  id: null,
  layout: 'default',
  margin: null,
};
const IroColorPickerWidget = createWidget(IroColorPicker);

let iro;
(function (iro) {
  iro.version = '5.2.3'; // replaced by @rollup/plugin-replace; see rollup.config.js
  iro.Color = IroColor;
  iro.ColorPicker = IroColorPickerWidget;
  let ui;
  (function (ui) {
    ui.h = h;
    ui.ComponentBase = IroComponentBase;
    ui.Handle = IroHandle;
    ui.Slider = IroSlider;
    ui.Wheel = IroWheel;
    ui.Box = IroBox;
  })((ui = iro.ui || (iro.ui = {})));
})(iro || (iro = {}));
const iro$1 = iro;

export default iro$1;
