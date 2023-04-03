import { warn as ue, defineComponent as ee, ref as m, watch as A, onMounted as de, onBeforeUnmount as pe, openBlock as B, createElementBlock as H, createElementVNode as L, normalizeClass as ve, createCommentVNode as F } from "vue";
const fe = "@sangtian152/vue3-sign", ge = "sangtian152", me = "0.0.2", he = "lib/vue3-sign.umd.js", be = "lib/vue3-sign.mjs", we = {
  ".": {
    import: "./lib/vue3-sign.mjs",
    require: "./lib/vue3-sign.umd.cjs"
  }
}, ye = "lib/index.d.ts", Ee = "MIT", Ce = "https://sangtian152.github.io/vue3-sign", xe = [
  "lib"
], De = {
  dev: "vuepress dev docs",
  build: "npm run build:lib && npm run build:docs",
  "build:docs": "vuepress build docs",
  "build:lib": "vue-tsc --noEmit --skipLibCheck && vite build --outDir lib",
  "build:esm": "gulp --require sucrase/register/ts -f build/gulpfile.ts"
}, ke = {}, Se = {
  vue: "^3.2.47"
}, _e = {
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
  license: Ee,
  homepage: Ce,
  files: xe,
  scripts: De,
  dependencies: ke,
  peerDependencies: Se,
  devDependencies: _e
}, y = function(e) {
  return typeof e == "string";
}, Le = function(e) {
  return typeof e == "number";
}, $e = function(e) {
  let o = -1;
  const r = e ? e.length : 0, l = {};
  for (; ++o < r; ) {
    const c = e[o];
    l[c[0]] = c[1];
  }
  return l;
}, S = typeof window < "u" && "ontouchstart" in window, D = function() {
  return {
    tapstart: S ? "touchstart" : "mousedown",
    tapmove: S ? "touchmove" : "mousemove",
    tapend: S ? "touchend" : "mouseup"
  };
}, I = function(e, o) {
  try {
    let r = S ? e.targetTouches[0].pageX : e.offsetX, l = S ? e.targetTouches[0].pageY : e.offsetY;
    if (S) {
      let c = o;
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
}, E = {
  print: (e, o, r) => y(o) || typeof r == "boolean",
  pretty: (e, o, r) => y(o) && y(e) || typeof r == "string",
  primary: (e, o) => y(e) || typeof o == "boolean",
  success: (e, o) => y(e) || typeof o == "boolean",
  info: (e, o) => y(e) || typeof o == "boolean",
  warning: (e, o) => y(e) || typeof o == "boolean",
  danger: (e, o) => y(e) || typeof o == "boolean"
};
function k(e = "default") {
  let o = "";
  switch (e) {
    case "primary":
      o = "#2d8cf0";
      break;
    case "success":
      o = "#19be6b";
      break;
    case "info":
      o = "#909399";
      break;
    case "warning":
      o = "#ff9900";
      break;
    case "danger":
      o = "#ff4d4f";
      break;
    case "default":
      o = "#35495E";
      break;
    default:
      o = e;
      break;
  }
  return o;
}
E.print = function(e, o = "default", r = !1) {
  return typeof e == "object" ? (console.dir(e), !0) : (r ? console.log(
    `%c ${e} `,
    `background:${k(o)}; padding: 2px; border-radius: 4px;color: #fff;`
  ) : console.log(
    `%c ${e} `,
    `color: ${k(o)};`
  ), !0);
};
E.pretty = function(e, o, r = "primary") {
  return console.log(
    `%c ${e} %c ${o} %c`,
    `background:${k(r)};border:1px solid ${k(r)}; padding: 1px; border-radius: 4px 0 0 4px; color: #fff;`,
    `border:1px solid ${k(r)}; padding: 1px; border-radius: 0 4px 4px 0; color: ${k(r)};`,
    "background:transparent"
  ), !0;
};
E.primary = function(e, o = !1) {
  return this.print && this.print(e, "primary", o), !0;
};
E.success = function(e, o = !1) {
  return this.print && this.print(e, "success", o), !0;
};
E.info = function(e, o = !1) {
  return this.print && this.print(e, "info", o), !0;
};
E.warning = function(e, o = !1) {
  return this.print && this.print(e, "warning", o), !0;
};
E.danger = function(e, o = !1) {
  return this.print && this.print(e, "danger", o), !0;
};
const Ne = {
  async install(e) {
    e.config.globalProperties.$log = E, E.pretty("[" + G.name + "] " + G.version, "success");
  }
};
process.env.NODE_ENV !== "production" && Object.freeze({});
process.env.NODE_ENV !== "production" && Object.freeze([]);
const Oe = (e) => e !== null && typeof e == "object", Q = Symbol("wrapper"), Z = "__elPropsReservedKey";
function Pe(e, o) {
  if (!Oe(e) || e[Z])
    return e;
  const { values: r, required: l, default: c, type: h, validator: u } = e, b = r || u ? (g) => {
    let w = !1, C = [];
    if (r && (C = [...r, c], w = w || C.includes(g)), u && (w = w || u(g)), !w && C.length > 0) {
      const _ = [...new Set(C)].map((R) => JSON.stringify(R)).join(", ");
      ue(
        `Invalid prop: validation failed${o ? ` for prop "${o}"` : ""}. Expected one of [${_}], got value ${JSON.stringify(
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
const ze = (e) => $e(
  Object.entries(e).map(([o, r]) => [
    o,
    Pe(r, o)
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
}), $ = /* @__PURE__ */ ee({
  ...He,
  props: Ie,
  emits: Re,
  setup(e, { expose: o, emit: r }) {
    const l = e, c = m(0), h = m(0);
    A(() => l.canvasWidth, (t) => {
      c.value = t;
    }), A(() => l.canvasHeight, (t) => {
      h.value = t;
    });
    const u = m(), b = m();
    de(() => {
      const t = u.value;
      t.style.background = l.bgColor, b.value = t.getContext("2d"), _(!0), document.onmouseup = () => {
        N();
      };
      const { tapstart: n, tapend: s } = D();
      if (document.addEventListener(s, N), t.addEventListener(n, ne, { passive: !1 }), typeof window < "u") {
        const a = "onorientationchange" in window ? "orientationchange" : "resize";
        window.addEventListener(a, _, !1);
      }
    }), pe(() => {
      const { tapend: t } = D();
      if (document.removeEventListener(t, N), typeof window < "u") {
        const n = "onorientationchange" in window ? "orientationchange" : "resize";
        window.removeEventListener(n, _, !1);
      }
    });
    const g = m(!1), w = (t) => {
      g.value = t, g.value ? le(u.value) : ie(u.value);
    }, C = m(!1), _ = (t) => {
      const n = window.orientation;
      C.value = n == 0 || n == 180, setTimeout(() => {
        const s = window.innerWidth, a = window.innerHeight;
        C ? R(s, a) : te(s, a);
      }, 50), t !== !0 && r("orientationchange", n);
    }, R = (t, n) => {
      c.value = t - 40, h.value = n / 2;
    }, te = (t, n) => {
      c.value = t - 40, h.value = n - 120;
    }, j = m(!1), T = m(!1), V = m(0), W = m(0), ne = (t) => {
      if (t.cancelable && t.preventDefault(), g.value)
        return;
      const n = I(t, u.value);
      if (n) {
        j.value = !0, T.value = !0, V.value = n.x, W.value = n.y;
        const d = b.value;
        d.lineCap = "round", d.lineJoin = "round", d.strokeStyle = l.lineColor, d.lineWidth = l.lineWidth, X(n, "source-over");
      }
      const { tapmove: s, tapend: a } = D(), i = u.value;
      i.addEventListener(s, M, { passive: !1 }), i.addEventListener(a, Y, { passive: !1 });
    }, M = (t) => {
      if (t.cancelable && t.preventDefault(), g.value || !j.value)
        return;
      const n = I(t, u.value);
      n && (X(n, null), W.value = n.y, V.value = n.x);
    }, Y = (t) => {
      if (t.cancelable && t.preventDefault(), g.value)
        return;
      const n = u.value, { tapmove: s, tapend: a } = D();
      n.removeEventListener(s, M), n.removeEventListener(a, Y);
    }, X = ({ x: t, y: n }, s) => {
      const a = b.value;
      s && (a.globalCompositeOperation = s), a.beginPath(), a.moveTo(V.value, W.value), a.lineTo(t, n), a.stroke(), a.closePath();
    }, N = () => {
      j.value = !1;
    }, q = () => new Promise((n, s) => {
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
        const f = oe(d.data), v = document.createElement("canvas"), x = v.getContext("2d");
        v.width = f[2] - f[0], v.height = f[3] - f[1];
        const ce = i.getImageData(...f);
        x.globalCompositeOperation = "destination-over", x.putImageData(ce, 0, 0), x.fillStyle = l.imgBgColor, x.fillRect(0, 0, v.width, v.height), p = v.toDataURL(), v.width > 0 && v.height > 0 ? n(p) : s("Warning: Not Signned!");
      }
      w(g.value), n(p);
    }), oe = (t) => {
      const n = u.value;
      for (var s = n.width, a = 0, i = n.height, d = 0, p = 0; p < n.width; p++)
        for (var f = 0; f < n.height; f++) {
          var v = (p + n.width * f) * 4;
          (t[v] > 0 || t[v + 1] > 0 || t[v + 2] || t[v + 3] > 0) && (d = Math.max(f, d), a = Math.max(p, a), i = Math.min(f, i), s = Math.min(p, s));
        }
      return s++, a++, i++, d++, [s, i, a, d];
    }, ae = () => {
      J(), r("on-clear");
    }, O = m(""), se = () => {
      let t = u.value, n = !0;
      l.beforeDone && typeof l.beforeDone == "function" && (n = l.beforeDone(t)), n && q().then((s) => {
        O.value = s, r("on-done", O.value);
      }).catch(() => {
        O.value = "", r("on-done", "");
      });
    }, J = () => {
      T.value = !1, w(g.value);
      const t = u.value;
      b.value.clearRect(
        0,
        0,
        t.width,
        t.height
      ), O.value = "", N();
    }, re = async () => await q(), ie = (t) => {
      const { tapstart: n } = D();
      b.value.globalCompositeOperation = "source-over", t.removeEventListener(n, K);
    }, le = (t) => {
      if (!l.erasable)
        return;
      const { tapstart: n } = D(), s = b.value;
      s.lineCap = "round", s.lineJoin = "round", s.lineWidth = l.eraserRadius * 2, s.globalCompositeOperation = "destination-out", t.addEventListener(n, K, {
        passive: !1
      });
    }, P = m(0), z = m(0), K = (t) => {
      t.preventDefault();
      const n = u.value, { tapmove: s, tapend: a } = D();
      let i, d, p = I(t, n);
      P.value = p.x, z.value = p.y, U(P.value, z.value), n.addEventListener(s, v, { passive: !1 }), n.addEventListener(a, f, { passive: !1 });
      function f() {
        n.removeEventListener(s, v), n.removeEventListener(a, f);
      }
      function v(x) {
        x.preventDefault(), p = I(x, n), p && (i = p.x, d = p.y, U(P.value, z.value, i, d), P.value = i, z.value = d);
      }
    }, U = (t, n, s, a) => {
      const i = b.value;
      i.save(), i.beginPath(), s !== void 0 && a !== void 0 ? (i.arc(t, n, l.eraserRadius, 0, 2 * Math.PI), i.fill()) : (i.moveTo(t, n), i.lineTo(s, a), i.stroke()), i.restore();
    };
    return o({
      clear: J,
      done: re
    }), (t, n) => (B(), H("div", je, [
      t.erasable ? (B(), H("div", Te, [
        L("span", {
          class: ve(["iconfont", "icon-eraser", { active: g.value }]),
          onClick: n[0] || (n[0] = (s) => w(!g.value))
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
          class: "zm-button zm-button--mini",
          onClick: ae
        }, " 清空 "),
        L("button", {
          class: "zm-button zm-button--mini",
          onClick: se
        }, " 完成 ")
      ])) : F("", !0)
    ]));
  }
});
$.install = function(e) {
  e.component($.name, $);
};
const Me = [
  $
], Ye = function(e) {
  Me.forEach((o) => {
    e.component(o.name, o);
  }), e.use(Ne);
}, qe = {
  install: Ye,
  Vue3Sign: $
};
export {
  $ as Vue3Sign,
  qe as default
};
