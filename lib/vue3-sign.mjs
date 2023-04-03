import { warn as ue, defineComponent as ee, ref as m, watch as A, onMounted as de, onBeforeUnmount as pe, openBlock as B, createElementBlock as H, createElementVNode as L, normalizeClass as ve, createCommentVNode as F } from "vue";
const fe = "@sangtian152/vue3-sign", ge = "sangtian152", me = "0.0.1", he = "lib/vue3-sign.umd.js", be = "lib/vue3-sign.mjs", we = {
  ".": {
    import: "./lib/vue3-sign.mjs",
    require: "./lib/vue3-sign.umd.cjs"
  }
}, ye = "lib/index.d.ts", _e = "MIT", Ee = "https://sangtian152.github.io/vue3-sign", Ce = [
  "lib"
], xe = {
  dev: "vuepress dev docs",
  build: "npm run build:lib && npm run build:docs",
  "build:docs": "vuepress build docs",
  "build:lib": "vue-tsc --noEmit --skipLibCheck && vite build --outDir lib",
  "build:esm": "gulp --require sucrase/register/ts -f build/gulpfile.ts"
}, ke = {}, De = {
  vue: "^3.2.47"
}, Se = {
  "@rollup/plugin-json": "^6.0.0",
  "@rollup/plugin-node-resolve": "^15.0.1",
  "@types/gulp": "^4.0.10",
  "@types/gulp-sass": "^5.0.0",
  "@vitejs/plugin-vue": "^4.1.0",
  "@vuepress/client": "^2.0.0-beta.61",
  "element-plus": "^2.3.1",
  "escape-html": "^1.0.3",
  gulp: "^4.0.2",
  "gulp-rename": "^2.0.0",
  "gulp-sass": "^5.1.0",
  "markdown-it": "^13.0.1",
  "markdown-it-container": "^3.0.0",
  rollup: "^3.20.2",
  "rollup-plugin-terser": "^7.0.2",
  "rollup-plugin-typescript2": "^0.34.1",
  "rollup-plugin-vue": "^6.0.0",
  sass: "^1.60.0",
  "sass-loader": "^13.2.2",
  sucrase: "^3.31.0",
  typescript: "^4.9.3",
  "unplugin-element-plus": "^0.7.0",
  "unplugin-vue-define-options": "^1.3.2",
  vite: "^4.2.0",
  "vite-plugin-dts": "^2.1.0",
  "vue-tsc": "^1.2.0",
  vuepress: "^2.0.0-beta.61"
}, G = {
  name: fe,
  author: ge,
  private: !1,
  version: me,
  main: he,
  module: be,
  exports: we,
  typings: ye,
  license: _e,
  homepage: Ee,
  files: Ce,
  scripts: xe,
  dependencies: ke,
  peerDependencies: De,
  devDependencies: Se
}, y = function(e) {
  return typeof e == "string";
}, Le = function(e) {
  return typeof e == "number";
}, Oe = function(e) {
  let n = -1;
  const r = e ? e.length : 0, l = {};
  for (; ++n < r; ) {
    const c = e[n];
    l[c[0]] = c[1];
  }
  return l;
}, D = typeof window < "u" && "ontouchstart" in window, x = function() {
  return {
    tapstart: D ? "touchstart" : "mousedown",
    tapmove: D ? "touchmove" : "mousemove",
    tapend: D ? "touchend" : "mouseup"
  };
}, I = function(e, n) {
  try {
    let r = D ? e.targetTouches[0].pageX : e.offsetX, l = D ? e.targetTouches[0].pageY : e.offsetY;
    if (D) {
      let c = n;
      for (; c && c.tagName !== "BODY"; )
        r -= c.offsetLeft, l -= c.offsetTop, c = c.offsetParent;
    }
    return {
      x: r,
      y: l
    };
  } catch (r) {
    console.log(r);
  }
}, _ = {
  print: (e, n, r) => y(n) || typeof r == "boolean",
  pretty: (e, n, r) => y(n) && y(e) || typeof r == "string",
  primary: (e, n) => y(e) || typeof n == "boolean",
  success: (e, n) => y(e) || typeof n == "boolean",
  info: (e, n) => y(e) || typeof n == "boolean",
  warning: (e, n) => y(e) || typeof n == "boolean",
  danger: (e, n) => y(e) || typeof n == "boolean"
};
function k(e = "default") {
  let n = "";
  switch (e) {
    case "primary":
      n = "#2d8cf0";
      break;
    case "success":
      n = "#19be6b";
      break;
    case "info":
      n = "#909399";
      break;
    case "warning":
      n = "#ff9900";
      break;
    case "danger":
      n = "#ff4d4f";
      break;
    case "default":
      n = "#35495E";
      break;
    default:
      n = e;
      break;
  }
  return n;
}
_.print = function(e, n = "default", r = !1) {
  return typeof e == "object" ? (console.dir(e), !0) : (r ? console.log(
    `%c ${e} `,
    `background:${k(n)}; padding: 2px; border-radius: 4px;color: #fff;`
  ) : console.log(
    `%c ${e} `,
    `color: ${k(n)};`
  ), !0);
};
_.pretty = function(e, n, r = "primary") {
  return console.log(
    `%c ${e} %c ${n} %c`,
    `background:${k(r)};border:1px solid ${k(r)}; padding: 1px; border-radius: 4px 0 0 4px; color: #fff;`,
    `border:1px solid ${k(r)}; padding: 1px; border-radius: 0 4px 4px 0; color: ${k(r)};`,
    "background:transparent"
  ), !0;
};
_.primary = function(e, n = !1) {
  return this.print && this.print(e, "primary", n), !0;
};
_.success = function(e, n = !1) {
  return this.print && this.print(e, "success", n), !0;
};
_.info = function(e, n = !1) {
  return this.print && this.print(e, "info", n), !0;
};
_.warning = function(e, n = !1) {
  return this.print && this.print(e, "warning", n), !0;
};
_.danger = function(e, n = !1) {
  return this.print && this.print(e, "danger", n), !0;
};
const Ne = {
  async install(e) {
    e.config.globalProperties.$log = _, _.pretty("[" + G.name + "] " + G.version, "success");
  }
};
process.env.NODE_ENV !== "production" && Object.freeze({});
process.env.NODE_ENV !== "production" && Object.freeze([]);
const $e = (e) => e !== null && typeof e == "object", Q = Symbol("wrapper"), Z = "__elPropsReservedKey";
function Pe(e, n) {
  if (!$e(e) || e[Z])
    return e;
  const { values: r, required: l, default: c, type: h, validator: u } = e, b = r || u ? (g) => {
    let w = !1, E = [];
    if (r && (E = [...r, c], w = w || E.includes(g)), u && (w = w || u(g)), !w && E.length > 0) {
      const S = [...new Set(E)].map((R) => JSON.stringify(R)).join(", ");
      ue(
        `Invalid prop: validation failed${n ? ` for prop "${n}"` : ""}. Expected one of [${S}], got value ${JSON.stringify(
          g
        )}.`
      );
    }
    return w;
  } : void 0;
  return {
    type: typeof h == "object" && h !== null && Object.getOwnPropertySymbols(h).includes(Q) ? h[Q] : h,
    validator: b,
    [Z]: !0,
    default: c,
    required: !!l
  };
}
const ze = (e) => Oe(
  Object.entries(e).map(([n, r]) => [
    n,
    Pe(r, n)
  ])
), Ie = ze({
  canvasWidth: Number,
  canvasHeight: Number,
  lineColor: {
    type: String,
    default: "#000"
  },
  lineWidth: {
    type: Number,
    default: 3
  },
  bgColor: {
    type: String,
    default: "#f7f7f7"
  },
  imgBgColor: {
    type: String,
    default: "transparent"
  },
  crop: {
    type: Boolean,
    default: !0
  },
  footer: {
    type: Boolean,
    default: !0
  },
  beforeDone: Function,
  erasable: {
    type: Boolean,
    default: !0
  },
  eraserRadius: {
    type: Number,
    default: 6
  }
}), Re = {
  "on-clear": () => !0,
  "on-done": (e) => y(e),
  orientationchange: (e) => Le(e)
}, je = { class: "zm-sign" }, Te = {
  key: 0,
  class: "zm-sign-tool"
}, Ve = { class: "can_vans" }, We = ["width", "height"], Be = {
  key: 1,
  class: "zm-sign-handle"
}, He = ee({
  name: "Vue3Sign"
}), Me = /* @__PURE__ */ ee({
  ...He,
  props: Ie,
  emits: Re,
  setup(e, { expose: n, emit: r }) {
    const l = e, c = m(0), h = m(0);
    A(() => l.canvasWidth, (t) => {
      c.value = t;
    }), A(() => l.canvasHeight, (t) => {
      h.value = t;
    });
    const u = m(), b = m();
    de(() => {
      const t = u.value;
      t.style.background = l.bgColor, b.value = t.getContext("2d"), S(!0), document.onmouseup = () => {
        N();
      };
      const { tapstart: o, tapend: s } = x();
      if (document.addEventListener(s, N), t.addEventListener(o, ne, { passive: !1 }), typeof window < "u") {
        const a = "onorientationchange" in window ? "orientationchange" : "resize";
        window.addEventListener(a, S, !1);
      }
    }), pe(() => {
      const { tapend: t } = x();
      if (document.removeEventListener(t, N), typeof window < "u") {
        const o = "onorientationchange" in window ? "orientationchange" : "resize";
        window.removeEventListener(o, S, !1);
      }
    });
    const g = m(!1), w = (t) => {
      g.value = t, g.value ? le(u.value) : ie(u.value);
    }, E = m(!1), S = (t) => {
      const o = window.orientation;
      E.value = o == 0 || o == 180, setTimeout(() => {
        const s = window.innerWidth, a = window.innerHeight;
        E ? R(s, a) : te(s, a);
      }, 50), t !== !0 && r("orientationchange", o);
    }, R = (t, o) => {
      c.value = t - 40, h.value = o / 2;
    }, te = (t, o) => {
      c.value = t - 40, h.value = o - 120;
    }, j = m(!1), T = m(!1), V = m(0), W = m(0), ne = (t) => {
      if (t.cancelable && t.preventDefault(), g.value)
        return;
      const o = I(t, u.value);
      if (o) {
        j.value = !0, T.value = !0, V.value = o.x, W.value = o.y;
        const d = b.value;
        d.lineCap = "round", d.lineJoin = "round", d.strokeStyle = l.lineColor, d.lineWidth = l.lineWidth, X(o, "source-over");
      }
      const { tapmove: s, tapend: a } = x(), i = u.value;
      i.addEventListener(s, M, { passive: !1 }), i.addEventListener(a, Y, { passive: !1 });
    }, M = (t) => {
      if (t.cancelable && t.preventDefault(), g.value || !j.value)
        return;
      const o = I(t, u.value);
      o && (X(o, null), W.value = o.y, V.value = o.x);
    }, Y = (t) => {
      if (t.cancelable && t.preventDefault(), g.value)
        return;
      const o = u.value, { tapmove: s, tapend: a } = x();
      o.removeEventListener(s, M), o.removeEventListener(a, Y);
    }, X = ({ x: t, y: o }, s) => {
      const a = b.value;
      s && (a.globalCompositeOperation = s), a.beginPath(), a.moveTo(V.value, W.value), a.lineTo(t, o), a.stroke(), a.closePath();
    }, N = () => {
      j.value = !1;
    }, q = () => new Promise((o, s) => {
      if (!T.value) {
        s("Warning: Not Signned!");
        return;
      }
      const a = u.value, i = b.value, d = i.getImageData(
        0,
        0,
        a.width,
        a.height
      );
      i.globalCompositeOperation = "destination-over", i.fillStyle = l.bgColor, i.fillRect(0, 0, a.width, a.height);
      let p = a.toDataURL();
      if (i.clearRect(0, 0, a.width, a.height), i.putImageData(d, 0, 0), i.globalCompositeOperation = "source-over", l.crop) {
        const f = oe(d.data), v = document.createElement("canvas"), C = v.getContext("2d");
        v.width = f[2] - f[0], v.height = f[3] - f[1];
        const ce = i.getImageData(...f);
        C.globalCompositeOperation = "destination-over", C.putImageData(ce, 0, 0), C.fillStyle = l.imgBgColor, C.fillRect(0, 0, v.width, v.height), p = v.toDataURL(), v.width > 0 && v.height > 0 ? o(p) : s("Warning: Not Signned!");
      }
      w(g.value), o(p);
    }), oe = (t) => {
      const o = u.value;
      for (var s = o.width, a = 0, i = o.height, d = 0, p = 0; p < o.width; p++)
        for (var f = 0; f < o.height; f++) {
          var v = (p + o.width * f) * 4;
          (t[v] > 0 || t[v + 1] > 0 || t[v + 2] || t[v + 3] > 0) && (d = Math.max(f, d), a = Math.max(p, a), i = Math.min(f, i), s = Math.min(p, s));
        }
      return s++, a++, i++, d++, [s, i, a, d];
    }, ae = () => {
      J(), r("on-clear");
    }, $ = m(""), se = () => {
      let t = u.value, o = !0;
      l.beforeDone && typeof l.beforeDone == "function" && (o = l.beforeDone(t)), o && q().then((s) => {
        $.value = s, r("on-done", $.value);
      }).catch(() => {
        $.value = "", r("on-done", "");
      });
    }, J = () => {
      T.value = !1, w(g.value);
      const t = u.value;
      b.value.clearRect(
        0,
        0,
        t.width,
        t.height
      ), $.value = "", N();
    }, re = async () => await q(), ie = (t) => {
      const { tapstart: o } = x();
      b.value.globalCompositeOperation = "source-over", t.removeEventListener(o, K);
    }, le = (t) => {
      if (!l.erasable)
        return;
      const { tapstart: o } = x(), s = b.value;
      s.lineCap = "round", s.lineJoin = "round", s.lineWidth = l.eraserRadius * 2, s.globalCompositeOperation = "destination-out", t.addEventListener(o, K, {
        passive: !1
      });
    }, P = m(0), z = m(0), K = (t) => {
      t.preventDefault();
      const o = u.value, { tapmove: s, tapend: a } = x();
      let i, d, p = I(t, o);
      P.value = p.x, z.value = p.y, U(P.value, z.value), o.addEventListener(s, v, { passive: !1 }), o.addEventListener(a, f, { passive: !1 });
      function f() {
        o.removeEventListener(s, v), o.removeEventListener(a, f);
      }
      function v(C) {
        C.preventDefault(), p = I(C, o), p && (i = p.x, d = p.y, U(P.value, z.value, i, d), P.value = i, z.value = d);
      }
    }, U = (t, o, s, a) => {
      const i = b.value;
      i.save(), i.beginPath(), s !== void 0 && a !== void 0 ? (i.arc(t, o, l.eraserRadius, 0, 2 * Math.PI), i.fill()) : (i.moveTo(t, o), i.lineTo(s, a), i.stroke()), i.restore();
    };
    return n({
      clear: J,
      done: re
    }), (t, o) => (B(), H("div", je, [
      t.erasable ? (B(), H("div", Te, [
        L("span", {
          class: ve(["iconfont", "icon-eraser", { active: g.value }]),
          onClick: o[0] || (o[0] = (s) => w(!g.value))
        }, null, 2)
      ])) : F("", !0),
      L("div", Ve, [
        L("canvas", {
          ref_key: "canvasRef",
          ref: u,
          width: t.canvasWidth ? t.canvasWidth : c.value,
          height: t.canvasHeight ? t.canvasHeight : h.value
        }, null, 8, We)
      ]),
      t.footer ? (B(), H("div", Be, [
        L("button", {
          class: "zm-buttom zm-button--mini",
          onClick: ae
        }, " 清空 "),
        L("button", {
          class: "zm-buttom zm-button--mini",
          onClick: se
        }, " 完成 ")
      ])) : F("", !0)
    ]));
  }
});
const Ye = (e, n) => {
  const r = e.__vccOpts || e;
  for (const [l, c] of n)
    r[l] = c;
  return r;
}, O = /* @__PURE__ */ Ye(Me, [["__scopeId", "data-v-2701f584"]]);
O.install = function(e) {
  e.component(O.name, O);
};
const Xe = [
  O
], qe = function(e) {
  Xe.forEach((n) => {
    e.component(n.name, n);
  }), e.use(Ne);
}, Ke = {
  install: qe,
  Vue3Sign: O
};
export {
  O as Vue3Sign,
  Ke as default
};
