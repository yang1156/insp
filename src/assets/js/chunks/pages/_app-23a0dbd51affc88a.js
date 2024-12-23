(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[2888], {
    94184: function (e, t) {
        var n;
        !function () {
            "use strict";
            var r = {}.hasOwnProperty;

            function a() {
                for (var e = [], t = 0; t < arguments.length; t++) {
                    var n = arguments[t];
                    if (n) {
                        var o = typeof n;
                        if ("string" === o || "number" === o) e.push(n); else if (Array.isArray(n)) {
                            if (n.length) {
                                var s = a.apply(null, n);
                                s && e.push(s)
                            }
                        } else if ("object" === o) {
                            if (n.toString === Object.prototype.toString) for (var i in n) r.call(n, i) && n[i] && e.push(i); else e.push(n.toString())
                        }
                    }
                }
                return e.join(" ")
            }

            e.exports ? (a.default = a, e.exports = a) : void 0 !== (n = (function () {
                return a
            }).apply(t, [])) && (e.exports = n)
        }()
    }, 62705: function (e, t, n) {
        var r = n(55639).Symbol;
        e.exports = r
    }, 29932: function (e) {
        e.exports = function (e, t) {
            for (var n = -1, r = null == e ? 0 : e.length, a = Array(r); ++n < r;) a[n] = t(e[n], n, e);
            return a
        }
    }, 44239: function (e, t, n) {
        var r = n(62705), a = n(89607), o = n(2333), s = r ? r.toStringTag : void 0;
        e.exports = function (e) {
            return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : s && s in Object(e) ? a(e) : o(e)
        }
    }, 80531: function (e, t, n) {
        var r = n(62705), a = n(29932), o = n(1469), s = n(33448), i = 1 / 0, l = r ? r.prototype : void 0,
            c = l ? l.toString : void 0;
        e.exports = function e(t) {
            if ("string" == typeof t) return t;
            if (o(t)) return a(t, e) + "";
            if (s(t)) return c ? c.call(t) : "";
            var n = t + "";
            return "0" == n && 1 / t == -i ? "-0" : n
        }
    }, 31957: function (e, t, n) {
        var r = "object" == typeof n.g && n.g && n.g.Object === Object && n.g;
        e.exports = r
    }, 89607: function (e, t, n) {
        var r = n(62705), a = Object.prototype, o = a.hasOwnProperty, s = a.toString, i = r ? r.toStringTag : void 0;
        e.exports = function (e) {
            var t = o.call(e, i), n = e[i];
            try {
                e[i] = void 0;
                var r = !0
            } catch (e) {
            }
            var a = s.call(e);
            return r && (t ? e[i] = n : delete e[i]), a
        }
    }, 2333: function (e) {
        var t = Object.prototype.toString;
        e.exports = function (e) {
            return t.call(e)
        }
    }, 55639: function (e, t, n) {
        var r = n(31957), a = "object" == typeof self && self && self.Object === Object && self,
            o = r || a || Function("return this")();
        e.exports = o
    }, 1469: function (e) {
        var t = Array.isArray;
        e.exports = t
    }, 37005: function (e) {
        e.exports = function (e) {
            return null != e && "object" == typeof e
        }
    }, 33448: function (e, t, n) {
        var r = n(44239), a = n(37005);
        e.exports = function (e) {
            return "symbol" == typeof e || a(e) && "[object Symbol]" == r(e)
        }
    }, 79833: function (e, t, n) {
        var r = n(80531);
        e.exports = function (e) {
            return null == e ? "" : r(e)
        }
    }, 73955: function (e, t, n) {
        var r = n(79833), a = 0;
        e.exports = function (e) {
            var t = ++a;
            return r(e) + t
        }
    }, 6840: function (e, t, n) {
        (window.__NEXT_P = window.__NEXT_P || []).push(["/_app", function () {
            return n(57076)
        }])
    }, 34095: function (e, t, n) {
        "use strict";
        n.d(t, {
            Z: function () {
                return l
            }
        });
        var r = n(85893), a = n(94184), o = n.n(a), s = n(93402), i = n.n(s);

        function l(e) {
            let {icon: t, block: n} = e;
            return (0, r.jsx)("svg", {
                className: o()(i().icon, {[i()["icon--block"]]: n}),
                "aria-hidden": "true",
                viewBox: "0 0 24 24",
                width: "24",
                height: "24",
                children: function (e) {
                    switch (e) {
                        case"envelope":
                        case"contact":
                        case"email":
                            return (0, r.jsx)("path", {
                                fill: "currentColor",
                                d: "M2 6C2 4.89543 2.89543 4 4 4H20C21.1046 4 22 4.89543 22 6V18C22 19.1046 21.1046 20 20 20H4C2.89543 20 2 19.1046 2 18V6ZM5.51859 6L12 11.6712L18.4814 6H5.51859ZM20 7.32877L12.6585 13.7526C12.2815 14.0825 11.7185 14.0825 11.3415 13.7526L4 7.32877V18H20V7.32877Z"
                            });
                        case"chevron-down":
                            return (0, r.jsx)("path", {
                                fill: "currentColor",
                                d: "M5.29289 9.29289C5.68342 8.90237 6.31658 8.90237 6.70711 9.29289L12 14.5858L17.2929 9.29289C17.6834 8.90237 18.3166 8.90237 18.7071 9.29289C19.0976 9.68342 19.0976 10.3166 18.7071 10.7071L12.7071 16.7071C12.3166 17.0976 11.6834 17.0976 11.2929 16.7071L5.29289 10.7071C4.90237 10.3166 4.90237 9.68342 5.29289 9.29289Z"
                            });
                        case"chevron-left":
                        case"previous":
                            return (0, r.jsx)("path", {
                                fill: "currentColor",
                                d: "M14.7071 5.29289C15.0976 5.68342 15.0976 6.31658 14.7071 6.70711L9.41421 12L14.7071 17.2929C15.0976 17.6834 15.0976 18.3166 14.7071 18.7071C14.3166 19.0976 13.6834 19.0976 13.2929 18.7071L7.29289 12.7071C6.90237 12.3166 6.90237 11.6834 7.29289 11.2929L13.2929 5.29289C13.6834 4.90237 14.3166 4.90237 14.7071 5.29289Z"
                            });
                        case"chevron-right":
                        case"next":
                            return (0, r.jsx)("path", {
                                fill: "currentColor",
                                d: "M9.29289 18.7071C8.90237 18.3166 8.90237 17.6834 9.29289 17.2929L14.5858 12L9.29289 6.70711C8.90237 6.31658 8.90237 5.68342 9.29289 5.29289C9.68342 4.90237 10.3166 4.90237 10.7071 5.29289L16.7071 11.2929C17.0976 11.6834 17.0976 12.3166 16.7071 12.7071L10.7071 18.7071C10.3166 19.0976 9.68342 19.0976 9.29289 18.7071Z"
                            });
                        case"close":
                            return (0, r.jsx)("path", {
                                xmlns: "http://www.w3.org/2000/svg",
                                d: "M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z",
                                fill: "currentColor"
                            });
                        case"info":
                            return (0, r.jsxs)(r.Fragment, {
                                children: [(0, r.jsx)("g", {
                                    clipPath: "url(#a)",
                                    children: (0, r.jsx)("path", {
                                        d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm1 15h-2v-6h2v6Zm0-8h-2V7h2v2Z",
                                        fill: "#CC4242"
                                    })
                                }), (0, r.jsx)("defs", {
                                    children: (0, r.jsx)("clipPath", {
                                        id: "a",
                                        children: (0, r.jsx)("path", {fill: "#fff", d: "M0 0h24v24H0z"})
                                    })
                                })]
                            });
                        case"instagram":
                            return (0, r.jsxs)(r.Fragment, {
                                children: [(0, r.jsx)("path", {
                                    fill: "currentColor",
                                    fillRule: "evenodd",
                                    clipRule: "evenodd",
                                    d: "M11.312 7.01672C11.8418 6.89298 12.3778 6.89451 12.9074 7.02131C15.0178 7.4079 16.6203 9.03897 16.9864 11.2356C16.988 11.2454 16.9895 11.2552 16.9908 11.2649C17.3645 14.0048 15.4896 16.5153 12.7351 16.8909C9.99628 17.2644 7.48671 15.3911 7.10962 12.6383C6.73766 10.0221 8.57754 7.41955 11.312 7.01672ZM11.7426 8.97019C11.9833 8.91 12.2167 8.91 12.4575 8.97019C12.4802 8.97588 12.5032 8.98076 12.5262 8.98483C13.7948 9.2087 14.7747 10.166 15.0111 11.5497C15.229 13.204 14.1056 14.6855 12.4649 14.9092C10.8048 15.1356 9.31523 14.0104 9.09085 12.3649L9.08997 12.3586C8.86626 10.7927 9.99985 9.21387 11.6351 8.99088C11.6713 8.98595 11.7071 8.97904 11.7426 8.97019Z"
                                }), (0, r.jsx)("path", {
                                    fill: "currentColor",
                                    fillRule: "evenodd",
                                    clipRule: "evenodd",
                                    d: "M7 1C3.64772 1 1 3.64772 1 7V17C1 20.3523 3.64772 23 7 23H17C20.3523 23 23 20.3523 23 17V7C23 3.64772 20.3523 1 17 1H7ZM3 7C3 4.75228 4.75228 3 7 3H17C19.2477 3 21 4.75228 21 7V17C21 19.2477 19.2477 21 17 21H7C4.75228 21 3 19.2477 3 17V7Z"
                                })]
                            });
                        case"link":
                            return (0, r.jsx)("path", {
                                fill: "currentColor",
                                d: "M8 8C5.75228 8 4 9.75228 4 12C4 14.2477 5.75228 16 8 16H10C10.5523 16 11 16.4477 11 17C11 17.5523 10.5523 18 10 18H8C4.64772 18 2 15.3523 2 12C2 8.64772 4.64772 6 8 6H10C10.5523 6 11 6.44772 11 7C11 7.55228 10.5523 8 10 8H8ZM13 7C13 6.44772 13.4477 6 14 6H16C19.3523 6 22 8.64772 22 12C22 15.3523 19.3523 18 16 18H14C13.4477 18 13 17.5523 13 17C13 16.4477 13.4477 16 14 16H16C18.2477 16 20 14.2477 20 12C20 9.75228 18.2477 8 16 8H14C13.4477 8 13 7.55228 13 7ZM7 12C7 11.4477 7.44772 11 8 11H16C16.5523 11 17 11.4477 17 12C17 12.5523 16.5523 13 16 13H8C7.44772 13 7 12.5523 7 12Z"
                            });
                        case"messages":
                            return (0, r.jsx)("path", {
                                fill: "currentColor",
                                d: "M2 6C2 4.89543 2.89543 4 4 4H20C21.1046 4 22 4.89543 22 6V17C22 18.1046 21.1046 19 20 19H15.4142L12.7071 21.7071C12.3166 22.0976 11.6834 22.0976 11.2929 21.7071L8.58579 19H4C2.89543 19 2 18.1046 2 17V6ZM20 6H4V17H9C9.26522 17 9.51957 17.1054 9.70711 17.2929L12 19.5858L14.2929 17.2929C14.4804 17.1054 14.7348 17 15 17H20V6ZM6 9.5C6 8.94772 6.44772 8.5 7 8.5H17C17.5523 8.5 18 8.94772 18 9.5C18 10.0523 17.5523 10.5 17 10.5H7C6.44772 10.5 6 10.0523 6 9.5ZM6 13.5C6 12.9477 6.44772 12.5 7 12.5H13C13.5523 12.5 14 12.9477 14 13.5C14 14.0523 13.5523 14.5 13 14.5H7C6.44772 14.5 6 14.0523 6 13.5Z"
                            });
                        case"people":
                        case"users":
                            return (0, r.jsx)("path", {
                                fill: "currentColor",
                                d: "M10 4C7.79086 4 6 5.79086 6 8C6 10.2091 7.79086 12 10 12C12.2091 12 14 10.2091 14 8C14 5.79086 12.2091 4 10 4ZM4 8C4 4.68629 6.68629 2 10 2C13.3137 2 16 4.68629 16 8C16 11.3137 13.3137 14 10 14C6.68629 14 4 11.3137 4 8ZM16.8284 3.75736C17.219 3.36683 17.8521 3.36683 18.2426 3.75736C20.5858 6.10051 20.5858 9.8995 18.2426 12.2426C17.8521 12.6332 17.219 12.6332 16.8284 12.2426C16.4379 11.8521 16.4379 11.219 16.8284 10.8284C18.3905 9.26633 18.3905 6.73367 16.8284 5.17157C16.4379 4.78105 16.4379 4.14788 16.8284 3.75736ZM17.5299 16.7575C17.6638 16.2217 18.2067 15.8959 18.7425 16.0299C20.0705 16.3618 20.911 17.2109 21.3944 18.1778C21.8622 19.1133 22 20.1571 22 21C22 21.5523 21.5523 22 21 22C20.4477 22 20 21.5523 20 21C20 20.3429 19.8878 19.6367 19.6056 19.0722C19.339 18.5391 18.9295 18.1382 18.2575 17.9701C17.7217 17.8362 17.3959 17.2933 17.5299 16.7575ZM6.5 18C5.24054 18 4 19.2135 4 21C4 21.5523 3.55228 22 3 22C2.44772 22 2 21.5523 2 21C2 18.3682 3.89347 16 6.5 16H13.5C16.1065 16 18 18.3682 18 21C18 21.5523 17.5523 22 17 22C16.4477 22 16 21.5523 16 21C16 19.2135 14.7595 18 13.5 18H6.5Z"
                            });
                        case"share":
                            return (0, r.jsx)("path", {
                                fill: "currentColor",
                                d: "M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92c0-1.61-1.31-2.92-2.92-2.92zM18 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM6 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm12 7.02c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"
                            });
                        case"twitter":
                            return (0, r.jsx)("path", {
                                fill: "currentColor",
                                d: "M22.4 6.00011C21.6 6.30011 20.8 6.60011 20 6.70011C20.9 6.20011 21.5 5.40011 21.8 4.40011C21 4.90011 20.1 5.20011 19.1 5.40011C17.5 3.70011 14.9 3.60011 13.2 5.20011C12.1 6.20011 11.6 7.80011 12 9.20011C8.7 9.00011 5.5 7.40011 3.4 4.80011C3 5.40011 2.9 6.10011 2.9 6.90011C2.9 8.30011 3.6 9.60011 4.8 10.4001C4 10.3001 3.4 10.2001 2.8 9.80011V9.90011C2.8 11.9001 4.2 13.6001 6.2 14.0001C5.6 14.2001 4.9 14.2001 4.3 14.1001C4.8 15.8001 6.4 17.0001 8.2 17.0001C6.4 18.4001 4.2 19.0001 2 18.7001C3.9 19.9001 6.1 20.6001 8.4 20.6001C16.1 20.6001 20.3 14.2001 20.3 8.70011C20.3 8.50011 20.3 8.30011 20.3 8.20011C21.1 7.50011 21.8 6.80011 22.4 6.00011Z"
                            });
                        default:
                            return ""
                    }
                }(t)
            })
        }
    }, 46691: function (e, t) {
        "use strict";
        var n, r, a, o;
        Object.defineProperty(t, "__esModule", {value: !0}), function (e, t) {
            for (var n in t) Object.defineProperty(e, n, {enumerable: !0, get: t[n]})
        }(t, {
            ACTION_FAST_REFRESH: function () {
                return p
            }, ACTION_NAVIGATE: function () {
                return i
            }, ACTION_PREFETCH: function () {
                return u
            }, ACTION_REFRESH: function () {
                return s
            }, ACTION_RESTORE: function () {
                return l
            }, ACTION_SERVER_ACTION: function () {
                return d
            }, ACTION_SERVER_PATCH: function () {
                return c
            }, PrefetchCacheEntryStatus: function () {
                return r
            }, PrefetchKind: function () {
                return n
            }, isThenable: function () {
                return g
            }
        });
        let s = "refresh", i = "navigate", l = "restore", c = "server-patch", u = "prefetch", p = "fast-refresh",
            d = "server-action";

        function g(e) {
            return e && ("object" == typeof e || "function" == typeof e) && "function" == typeof e.then
        }

        (a = n || (n = {})).AUTO = "auto", a.FULL = "full", a.TEMPORARY = "temporary", (o = r || (r = {})).fresh = "fresh", o.reusable = "reusable", o.expired = "expired", o.stale = "stale", ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {value: !0}), Object.assign(t.default, t), e.exports = t.default)
    }, 64318: function (e, t, n) {
        "use strict";

        function r(e, t, n, r) {
            return !1
        }

        Object.defineProperty(t, "__esModule", {value: !0}), Object.defineProperty(t, "getDomainLocale", {
            enumerable: !0,
            get: function () {
                return r
            }
        }), n(98364), ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {value: !0}), Object.assign(t.default, t), e.exports = t.default)
    }, 26541: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), Object.defineProperty(t, "Image", {
            enumerable: !0,
            get: function () {
                return v
            }
        });
        let r = n(38754), a = n(61757), o = n(85893), s = a._(n(67294)), i = r._(n(73935)), l = r._(n(7828)),
            c = n(17367), u = n(27903), p = n(54938);
        n(1997);
        let d = n(9953), g = r._(n(56663)), f = {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
            path: "/_next/image",
            loader: "default",
            dangerouslyAllowSVG: !1,
            unoptimized: !1
        };

        function y(e, t, n, r, a, o, s) {
            let i = null == e ? void 0 : e.src;
            e && e["data-loaded-src"] !== i && (e["data-loaded-src"] = i, ("decode" in e ? e.decode() : Promise.resolve()).catch(() => {
            }).then(() => {
                if (e.parentElement && e.isConnected) {
                    if ("empty" !== t && a(!0), null == n ? void 0 : n.current) {
                        let t = new Event("load");
                        Object.defineProperty(t, "target", {writable: !1, value: e});
                        let r = !1, a = !1;
                        n.current({
                            ...t,
                            nativeEvent: t,
                            currentTarget: e,
                            target: e,
                            isDefaultPrevented: () => r,
                            isPropagationStopped: () => a,
                            persist: () => {
                            },
                            preventDefault: () => {
                                r = !0, t.preventDefault()
                            },
                            stopPropagation: () => {
                                a = !0, t.stopPropagation()
                            }
                        })
                    }
                    (null == r ? void 0 : r.current) && r.current(e)
                }
            }))
        }

        function b(e) {
            return s.use ? {fetchPriority: e} : {fetchpriority: e}
        }

        let h = (0, s.forwardRef)((e, t) => {
            let {
                src: n,
                srcSet: r,
                sizes: a,
                height: i,
                width: l,
                decoding: c,
                className: u,
                style: p,
                fetchPriority: d,
                placeholder: g,
                loading: f,
                unoptimized: h,
                fill: m,
                onLoadRef: v,
                onLoadingCompleteRef: x,
                setBlurComplete: w,
                setShowAltText: k,
                sizesInput: E,
                onLoad: _,
                onError: S,
                ...C
            } = e;
            return (0, o.jsx)("img", {
                ...C, ...b(d),
                loading: f,
                width: l,
                height: i,
                decoding: c,
                "data-nimg": m ? "fill" : "1",
                className: u,
                style: p,
                sizes: a,
                srcSet: r,
                src: n,
                ref: (0, s.useCallback)(e => {
                    t && ("function" == typeof t ? t(e) : "object" == typeof t && (t.current = e)), e && (S && (e.src = e.src), e.complete && y(e, g, v, x, w, h, E))
                }, [n, g, v, x, w, S, h, E, t]),
                onLoad: e => {
                    y(e.currentTarget, g, v, x, w, h, E)
                },
                onError: e => {
                    k(!0), "empty" !== g && w(!0), S && S(e)
                }
            })
        });

        function m(e) {
            let {isAppRouter: t, imgAttributes: n} = e, r = {
                as: "image",
                imageSrcSet: n.srcSet,
                imageSizes: n.sizes,
                crossOrigin: n.crossOrigin,
                referrerPolicy: n.referrerPolicy, ...b(n.fetchPriority)
            };
            return t && i.default.preload ? (i.default.preload(n.src, r), null) : (0, o.jsx)(l.default, {
                children: (0, o.jsx)("link", {
                    rel: "preload",
                    href: n.srcSet ? void 0 : n.src, ...r
                }, "__nimg-" + n.src + n.srcSet + n.sizes)
            })
        }

        let v = (0, s.forwardRef)((e, t) => {
            let n = (0, s.useContext)(d.RouterContext), r = (0, s.useContext)(p.ImageConfigContext),
                a = (0, s.useMemo)(() => {
                    let e = f || r || u.imageConfigDefault,
                        t = [...e.deviceSizes, ...e.imageSizes].sort((e, t) => e - t),
                        n = e.deviceSizes.sort((e, t) => e - t);
                    return {...e, allSizes: t, deviceSizes: n}
                }, [r]), {onLoad: i, onLoadingComplete: l} = e, y = (0, s.useRef)(i);
            (0, s.useEffect)(() => {
                y.current = i
            }, [i]);
            let b = (0, s.useRef)(l);
            (0, s.useEffect)(() => {
                b.current = l
            }, [l]);
            let [v, x] = (0, s.useState)(!1), [w, k] = (0, s.useState)(!1), {
                props: E,
                meta: _
            } = (0, c.getImgProps)(e, {defaultLoader: g.default, imgConf: a, blurComplete: v, showAltText: w});
            return (0, o.jsxs)(o.Fragment, {
                children: [(0, o.jsx)(h, {
                    ...E,
                    unoptimized: _.unoptimized,
                    placeholder: _.placeholder,
                    fill: _.fill,
                    onLoadRef: y,
                    onLoadingCompleteRef: b,
                    setBlurComplete: x,
                    setShowAltText: k,
                    sizesInput: e.sizes,
                    ref: t
                }), _.priority ? (0, o.jsx)(m, {isAppRouter: !n, imgAttributes: E}) : null]
            })
        });
        ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {value: !0}), Object.assign(t.default, t), e.exports = t.default)
    }, 89577: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), Object.defineProperty(t, "default", {
            enumerable: !0,
            get: function () {
                return x
            }
        });
        let r = n(38754), a = n(85893), o = r._(n(67294)), s = n(71401), i = n(2045), l = n(27420), c = n(57201),
            u = n(11443), p = n(9953), d = n(15320), g = n(52905), f = n(64318), y = n(90953), b = n(46691),
            h = new Set;

        function m(e, t, n, r, a, o) {
            if (o || (0, i.isLocalURL)(t)) {
                if (!r.bypassPrefetchedCheck) {
                    let a = t + "%" + n + "%" + (void 0 !== r.locale ? r.locale : "locale" in e ? e.locale : void 0);
                    if (h.has(a)) return;
                    h.add(a)
                }
                (async () => o ? e.prefetch(t, a) : e.prefetch(t, n, r))().catch(e => {
                })
            }
        }

        function v(e) {
            return "string" == typeof e ? e : (0, l.formatUrl)(e)
        }

        let x = o.default.forwardRef(function (e, t) {
            let n, r;
            let {
                href: l,
                as: h,
                children: x,
                prefetch: w = null,
                passHref: k,
                replace: E,
                shallow: _,
                scroll: S,
                locale: C,
                onClick: A,
                onMouseEnter: F,
                onTouchStart: j,
                legacyBehavior: R = !1,
                ...O
            } = e;
            n = x, R && ("string" == typeof n || "number" == typeof n) && (n = (0, a.jsx)("a", {children: n}));
            let L = o.default.useContext(p.RouterContext), T = o.default.useContext(d.AppRouterContext),
                I = null != L ? L : T, N = !L, D = !1 !== w,
                P = null === w ? b.PrefetchKind.AUTO : b.PrefetchKind.FULL, {href: B, as: M} = o.default.useMemo(() => {
                    if (!L) {
                        let e = v(l);
                        return {href: e, as: h ? v(h) : e}
                    }
                    let [e, t] = (0, s.resolveHref)(L, l, !0);
                    return {href: e, as: h ? (0, s.resolveHref)(L, h) : t || e}
                }, [L, l, h]), z = o.default.useRef(B), $ = o.default.useRef(M);
            R && (r = o.default.Children.only(n));
            let U = R ? r && "object" == typeof r && r.ref : t, [H, G, Z] = (0, g.useIntersection)({rootMargin: "200px"}),
                V = o.default.useCallback(e => {
                    ($.current !== M || z.current !== B) && (Z(), $.current = M, z.current = B), H(e), U && ("function" == typeof U ? U(e) : "object" == typeof U && (U.current = e))
                }, [M, U, B, Z, H]);
            o.default.useEffect(() => {
                I && G && D && m(I, B, M, {locale: C}, {kind: P}, N)
            }, [M, B, G, C, D, null == L ? void 0 : L.locale, I, N, P]);
            let W = {
                ref: V, onClick(e) {
                    R || "function" != typeof A || A(e), R && r.props && "function" == typeof r.props.onClick && r.props.onClick(e), I && !e.defaultPrevented && function (e, t, n, r, a, s, l, c, u) {
                        let {nodeName: p} = e.currentTarget;
                        if ("A" === p.toUpperCase() && (function (e) {
                            let t = e.currentTarget.getAttribute("target");
                            return t && "_self" !== t || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.nativeEvent && 2 === e.nativeEvent.which
                        }(e) || !u && !(0, i.isLocalURL)(n))) return;
                        e.preventDefault();
                        let d = () => {
                            let e = null == l || l;
                            "beforePopState" in t ? t[a ? "replace" : "push"](n, r, {
                                shallow: s,
                                locale: c,
                                scroll: e
                            }) : t[a ? "replace" : "push"](r || n, {scroll: e})
                        };
                        u ? o.default.startTransition(d) : d()
                    }(e, I, B, M, E, _, S, C, N)
                }, onMouseEnter(e) {
                    R || "function" != typeof F || F(e), R && r.props && "function" == typeof r.props.onMouseEnter && r.props.onMouseEnter(e), I && (D || !N) && m(I, B, M, {
                        locale: C,
                        priority: !0,
                        bypassPrefetchedCheck: !0
                    }, {kind: P}, N)
                }, onTouchStart: function (e) {
                    R || "function" != typeof j || j(e), R && r.props && "function" == typeof r.props.onTouchStart && r.props.onTouchStart(e), I && (D || !N) && m(I, B, M, {
                        locale: C,
                        priority: !0,
                        bypassPrefetchedCheck: !0
                    }, {kind: P}, N)
                }
            };
            if ((0, c.isAbsoluteUrl)(M)) W.href = M; else if (!R || k || "a" === r.type && !("href" in r.props)) {
                let e = void 0 !== C ? C : null == L ? void 0 : L.locale,
                    t = (null == L ? void 0 : L.isLocaleDomain) && (0, f.getDomainLocale)(M, e, null == L ? void 0 : L.locales, null == L ? void 0 : L.domainLocales);
                W.href = t || (0, y.addBasePath)((0, u.addLocale)(M, e, null == L ? void 0 : L.defaultLocale))
            }
            return R ? o.default.cloneElement(r, W) : (0, a.jsx)("a", {...O, ...W, children: n})
        });
        ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {value: !0}), Object.assign(t.default, t), e.exports = t.default)
    }, 52905: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), Object.defineProperty(t, "useIntersection", {
            enumerable: !0,
            get: function () {
                return l
            }
        });
        let r = n(67294), a = n(33815), o = "function" == typeof IntersectionObserver, s = new Map, i = [];

        function l(e) {
            let {rootRef: t, rootMargin: n, disabled: l} = e, c = l || !o, [u, p] = (0, r.useState)(!1),
                d = (0, r.useRef)(null), g = (0, r.useCallback)(e => {
                    d.current = e
                }, []);
            return (0, r.useEffect)(() => {
                if (o) {
                    if (c || u) return;
                    let e = d.current;
                    if (e && e.tagName) return function (e, t, n) {
                        let {id: r, observer: a, elements: o} = function (e) {
                            let t;
                            let n = {root: e.root || null, margin: e.rootMargin || ""},
                                r = i.find(e => e.root === n.root && e.margin === n.margin);
                            if (r && (t = s.get(r))) return t;
                            let a = new Map;
                            return t = {
                                id: n, observer: new IntersectionObserver(e => {
                                    e.forEach(e => {
                                        let t = a.get(e.target), n = e.isIntersecting || e.intersectionRatio > 0;
                                        t && n && t(n)
                                    })
                                }, e), elements: a
                            }, i.push(n), s.set(n, t), t
                        }(n);
                        return o.set(e, t), a.observe(e), function () {
                            if (o.delete(e), a.unobserve(e), 0 === o.size) {
                                a.disconnect(), s.delete(r);
                                let e = i.findIndex(e => e.root === r.root && e.margin === r.margin);
                                e > -1 && i.splice(e, 1)
                            }
                        }
                    }(e, e => e && p(e), {root: null == t ? void 0 : t.current, rootMargin: n})
                } else if (!u) {
                    let e = (0, a.requestIdleCallback)(() => p(!0));
                    return () => (0, a.cancelIdleCallback)(e)
                }
            }, [c, n, t, u, d.current]), [g, u, (0, r.useCallback)(() => {
                p(!1)
            }, [])]
        }

        ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {value: !0}), Object.assign(t.default, t), e.exports = t.default)
    }, 17367: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), Object.defineProperty(t, "getImgProps", {
            enumerable: !0,
            get: function () {
                return i
            }
        }), n(1997);
        let r = n(69919), a = n(27903);

        function o(e) {
            return void 0 !== e.default
        }

        function s(e) {
            return void 0 === e ? e : "number" == typeof e ? Number.isFinite(e) ? e : NaN : "string" == typeof e && /^[0-9]+$/.test(e) ? parseInt(e, 10) : NaN
        }

        function i(e, t) {
            var n;
            let i, l, c, {
                src: u,
                sizes: p,
                unoptimized: d = !1,
                priority: g = !1,
                loading: f,
                className: y,
                quality: b,
                width: h,
                height: m,
                fill: v = !1,
                style: x,
                overrideSrc: w,
                onLoad: k,
                onLoadingComplete: E,
                placeholder: _ = "empty",
                blurDataURL: S,
                fetchPriority: C,
                layout: A,
                objectFit: F,
                objectPosition: j,
                lazyBoundary: R,
                lazyRoot: O,
                ...L
            } = e, {imgConf: T, showAltText: I, blurComplete: N, defaultLoader: D} = t, P = T || a.imageConfigDefault;
            if ("allSizes" in P) i = P; else {
                let e = [...P.deviceSizes, ...P.imageSizes].sort((e, t) => e - t),
                    t = P.deviceSizes.sort((e, t) => e - t);
                i = {...P, allSizes: e, deviceSizes: t}
            }
            if (void 0 === D) throw Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config");
            let B = L.loader || D;
            delete L.loader, delete L.srcSet;
            let M = "__next_img_default" in B;
            if (M) {
                if ("custom" === i.loader) throw Error('Image with src "' + u + '" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')
            } else {
                let e = B;
                B = t => {
                    let {config: n, ...r} = t;
                    return e(r)
                }
            }
            if (A) {
                "fill" === A && (v = !0);
                let e = {intrinsic: {maxWidth: "100%", height: "auto"}, responsive: {width: "100%", height: "auto"}}[A];
                e && (x = {...x, ...e});
                let t = {responsive: "100vw", fill: "100vw"}[A];
                t && !p && (p = t)
            }
            let z = "", $ = s(h), U = s(m);
            if ("object" == typeof (n = u) && (o(n) || void 0 !== n.src)) {
                let e = o(u) ? u.default : u;
                if (!e.src) throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received " + JSON.stringify(e));
                if (!e.height || !e.width) throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received " + JSON.stringify(e));
                if (l = e.blurWidth, c = e.blurHeight, S = S || e.blurDataURL, z = e.src, !v) {
                    if ($ || U) {
                        if ($ && !U) {
                            let t = $ / e.width;
                            U = Math.round(e.height * t)
                        } else if (!$ && U) {
                            let t = U / e.height;
                            $ = Math.round(e.width * t)
                        }
                    } else $ = e.width, U = e.height
                }
            }
            let H = !g && ("lazy" === f || void 0 === f);
            (!(u = "string" == typeof u ? u : z) || u.startsWith("data:") || u.startsWith("blob:")) && (d = !0, H = !1), i.unoptimized && (d = !0), M && u.endsWith(".svg") && !i.dangerouslyAllowSVG && (d = !0), g && (C = "high");
            let G = s(b), Z = Object.assign(v ? {
                    position: "absolute",
                    height: "100%",
                    width: "100%",
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 0,
                    objectFit: F,
                    objectPosition: j
                } : {}, I ? {} : {color: "transparent"}, x),
                V = N || "empty" === _ ? null : "blur" === _ ? 'url("data:image/svg+xml;charset=utf-8,' + (0, r.getImageBlurSvg)({
                    widthInt: $,
                    heightInt: U,
                    blurWidth: l,
                    blurHeight: c,
                    blurDataURL: S || "",
                    objectFit: Z.objectFit
                }) + '")' : 'url("' + _ + '")', W = V ? {
                    backgroundSize: Z.objectFit || "cover",
                    backgroundPosition: Z.objectPosition || "50% 50%",
                    backgroundRepeat: "no-repeat",
                    backgroundImage: V
                } : {}, q = function (e) {
                    let {config: t, src: n, unoptimized: r, width: a, quality: o, sizes: s, loader: i} = e;
                    if (r) return {src: n, srcSet: void 0, sizes: void 0};
                    let {widths: l, kind: c} = function (e, t, n) {
                        let {deviceSizes: r, allSizes: a} = e;
                        if (n) {
                            let e = /(^|\s)(1?\d?\d)vw/g, t = [];
                            for (let r; r = e.exec(n); r) t.push(parseInt(r[2]));
                            if (t.length) {
                                let e = .01 * Math.min(...t);
                                return {widths: a.filter(t => t >= r[0] * e), kind: "w"}
                            }
                            return {widths: a, kind: "w"}
                        }
                        return "number" != typeof t ? {
                            widths: r,
                            kind: "w"
                        } : {widths: [...new Set([t, 2 * t].map(e => a.find(t => t >= e) || a[a.length - 1]))], kind: "x"}
                    }(t, a, s), u = l.length - 1;
                    return {
                        sizes: s || "w" !== c ? s : "100vw",
                        srcSet: l.map((e, r) => i({
                            config: t,
                            src: n,
                            quality: o,
                            width: e
                        }) + " " + ("w" === c ? e : r + 1) + c).join(", "),
                        src: i({config: t, src: n, quality: o, width: l[u]})
                    }
                }({config: i, src: u, unoptimized: d, width: $, quality: G, sizes: p, loader: B});
            return {
                props: {
                    ...L,
                    loading: H ? "lazy" : f,
                    fetchPriority: C,
                    width: $,
                    height: U,
                    decoding: "async",
                    className: y,
                    style: {...Z, ...W},
                    sizes: q.sizes,
                    srcSet: q.srcSet,
                    src: w || q.src
                }, meta: {unoptimized: d, priority: g, placeholder: _, fill: v}
            }
        }
    }, 69919: function (e, t) {
        "use strict";

        function n(e) {
            let {widthInt: t, heightInt: n, blurWidth: r, blurHeight: a, blurDataURL: o, objectFit: s} = e,
                i = r ? 40 * r : t, l = a ? 40 * a : n, c = i && l ? "viewBox='0 0 " + i + " " + l + "'" : "";
            return "%3Csvg xmlns='http://www.w3.org/2000/svg' " + c + "%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='" + (c ? "none" : "contain" === s ? "xMidYMid" : "cover" === s ? "xMidYMid slice" : "none") + "' style='filter: url(%23b);' href='" + o + "'/%3E%3C/svg%3E"
        }

        Object.defineProperty(t, "__esModule", {value: !0}), Object.defineProperty(t, "getImageBlurSvg", {
            enumerable: !0,
            get: function () {
                return n
            }
        })
    }, 35666: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), function (e, t) {
            for (var n in t) Object.defineProperty(e, n, {enumerable: !0, get: t[n]})
        }(t, {
            default: function () {
                return l
            }, getImageProps: function () {
                return i
            }
        });
        let r = n(38754), a = n(17367), o = n(26541), s = r._(n(56663));

        function i(e) {
            let {props: t} = (0, a.getImgProps)(e, {
                defaultLoader: s.default,
                imgConf: {
                    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
                    path: "/_next/image",
                    loader: "default",
                    dangerouslyAllowSVG: !1,
                    unoptimized: !1
                }
            });
            for (let [e, n] of Object.entries(t)) void 0 === n && delete t[e];
            return {props: t}
        }

        let l = o.Image
    }, 56663: function (e, t) {
        "use strict";

        function n(e) {
            let {config: t, src: n, width: r, quality: a} = e;
            return t.path + "?url=" + encodeURIComponent(n) + "&w=" + r + "&q=" + (a || 75)
        }

        Object.defineProperty(t, "__esModule", {value: !0}), Object.defineProperty(t, "default", {
            enumerable: !0,
            get: function () {
                return r
            }
        }), n.__next_img_default = !0;
        let r = n
    }, 57076: function (e, t, n) {
        "use strict";
        let r, a, o, s, i;
        n.r(t), n.d(t, {
            default: function () {
                return e1
            }
        });
        var l, c, u, p, d, g, f, y, b, h, m, v, x, w, k, E, _ = n(85893), S = n(67294), C = n(11151), A = n(9008),
            F = n.n(A), j = n(11163), R = n(94184), O = n.n(R), L = n(73955), T = n.n(L), I = function () {
                for (var e, t, n = 0, r = "", a = arguments.length; n < a; n++) (e = arguments[n]) && (t = function e(t) {
                    var n, r, a = "";
                    if ("string" == typeof t || "number" == typeof t) a += t; else if ("object" == typeof t) {
                        if (Array.isArray(t)) {
                            var o = t.length;
                            for (n = 0; n < o; n++) t[n] && (r = e(t[n])) && (a && (a += " "), a += r)
                        } else for (r in t) t[r] && (a && (a += " "), a += r)
                    }
                    return a
                }(e)) && (r && (r += " "), r += t);
                return r
            }, N = Object.create, D = Object.defineProperty, P = Object.defineProperties,
            B = Object.getOwnPropertyDescriptor, M = Object.getOwnPropertyDescriptors, z = Object.getOwnPropertyNames,
            $ = Object.getOwnPropertySymbols, U = Object.getPrototypeOf, H = Object.prototype.hasOwnProperty,
            G = Object.prototype.propertyIsEnumerable,
            Z = (e, t, n) => t in e ? D(e, t, {enumerable: !0, configurable: !0, writable: !0, value: n}) : e[t] = n,
            V = (e, t) => {
                for (var n in t || (t = {})) H.call(t, n) && Z(e, n, t[n]);
                if ($) for (var n of $(t)) G.call(t, n) && Z(e, n, t[n]);
                return e
            }, W = (e, t) => P(e, M(t)), q = (e, t) => {
                var n = {};
                for (var r in e) H.call(e, r) && 0 > t.indexOf(r) && (n[r] = e[r]);
                if (null != e && $) for (var r of $(e)) 0 > t.indexOf(r) && G.call(e, r) && (n[r] = e[r]);
                return n
            }, Y = (i = null != (o = (r = {
                "../../node_modules/.pnpm/prismjs@1.29.0_patch_hash=vrxx3pzkik6jpmgpayxfjunetu/node_modules/prismjs/prism.js"(e, t) {
                    var n = function () {
                        var e = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i, t = 0, n = {}, r = {
                            util: {
                                encode: function e(t) {
                                    return t instanceof a ? new a(t.type, e(t.content), t.alias) : Array.isArray(t) ? t.map(e) : t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ")
                                }, type: function (e) {
                                    return Object.prototype.toString.call(e).slice(8, -1)
                                }, objId: function (e) {
                                    return e.__id || Object.defineProperty(e, "__id", {value: ++t}), e.__id
                                }, clone: function e(t, n) {
                                    var a, o;
                                    switch (n = n || {}, r.util.type(t)) {
                                        case"Object":
                                            if (n[o = r.util.objId(t)]) return n[o];
                                            for (var s in a = {}, n[o] = a, t) t.hasOwnProperty(s) && (a[s] = e(t[s], n));
                                            return a;
                                        case"Array":
                                            if (n[o = r.util.objId(t)]) return n[o];
                                            return a = [], n[o] = a, t.forEach(function (t, r) {
                                                a[r] = e(t, n)
                                            }), a;
                                        default:
                                            return t
                                    }
                                }, getLanguage: function (t) {
                                    for (; t;) {
                                        var n = e.exec(t.className);
                                        if (n) return n[1].toLowerCase();
                                        t = t.parentElement
                                    }
                                    return "none"
                                }, setLanguage: function (t, n) {
                                    t.className = t.className.replace(RegExp(e, "gi"), ""), t.classList.add("language-" + n)
                                }, isActive: function (e, t, n) {
                                    for (var r = "no-" + t; e;) {
                                        var a = e.classList;
                                        if (a.contains(t)) return !0;
                                        if (a.contains(r)) return !1;
                                        e = e.parentElement
                                    }
                                    return !!n
                                }
                            }, languages: {
                                plain: n, plaintext: n, text: n, txt: n, extend: function (e, t) {
                                    var n = r.util.clone(r.languages[e]);
                                    for (var a in t) n[a] = t[a];
                                    return n
                                }, insertBefore: function (e, t, n, a) {
                                    var o = (a = a || r.languages)[e], s = {};
                                    for (var i in o) if (o.hasOwnProperty(i)) {
                                        if (i == t) for (var l in n) n.hasOwnProperty(l) && (s[l] = n[l]);
                                        n.hasOwnProperty(i) || (s[i] = o[i])
                                    }
                                    var c = a[e];
                                    return a[e] = s, r.languages.DFS(r.languages, function (t, n) {
                                        n === c && t != e && (this[t] = s)
                                    }), s
                                }, DFS: function e(t, n, a, o) {
                                    o = o || {};
                                    var s = r.util.objId;
                                    for (var i in t) if (t.hasOwnProperty(i)) {
                                        n.call(t, i, t[i], a || i);
                                        var l = t[i], c = r.util.type(l);
                                        "Object" !== c || o[s(l)] ? "Array" !== c || o[s(l)] || (o[s(l)] = !0, e(l, n, i, o)) : (o[s(l)] = !0, e(l, n, null, o))
                                    }
                                }
                            }, plugins: {}, highlight: function (e, t, n) {
                                var o = {code: e, grammar: t, language: n};
                                if (r.hooks.run("before-tokenize", o), !o.grammar) throw Error('The language "' + o.language + '" has no grammar.');
                                return o.tokens = r.tokenize(o.code, o.grammar), r.hooks.run("after-tokenize", o), a.stringify(r.util.encode(o.tokens), o.language)
                            }, tokenize: function (e, t) {
                                var n = t.rest;
                                if (n) {
                                    for (var l in n) t[l] = n[l];
                                    delete t.rest
                                }
                                var c = new s;
                                return i(c, c.head, e), function e(t, n, s, l, c, u) {
                                    for (var p in s) if (s.hasOwnProperty(p) && s[p]) {
                                        var d = s[p];
                                        d = Array.isArray(d) ? d : [d];
                                        for (var g = 0; g < d.length; ++g) {
                                            if (u && u.cause == p + "," + g) return;
                                            var f = d[g], y = f.inside, b = !!f.lookbehind, h = !!f.greedy, m = f.alias;
                                            if (h && !f.pattern.global) {
                                                var v = f.pattern.toString().match(/[imsuy]*$/)[0];
                                                f.pattern = RegExp(f.pattern.source, v + "g")
                                            }
                                            for (var x = f.pattern || f, w = l.next, k = c; w !== n.tail && (!u || !(k >= u.reach)); k += w.value.length, w = w.next) {
                                                var E, _ = w.value;
                                                if (n.length > t.length) return;
                                                if (!(_ instanceof a)) {
                                                    var S = 1;
                                                    if (h) {
                                                        if (!(E = o(x, k, t, b)) || E.index >= t.length) break;
                                                        var C = E.index, A = E.index + E[0].length, F = k;
                                                        for (F += w.value.length; C >= F;) F += (w = w.next).value.length;
                                                        if (F -= w.value.length, k = F, w.value instanceof a) continue;
                                                        for (var j = w; j !== n.tail && (F < A || "string" == typeof j.value); j = j.next) S++, F += j.value.length;
                                                        S--, _ = t.slice(k, F), E.index -= k
                                                    } else if (!(E = o(x, 0, _, b))) continue;
                                                    var C = E.index, R = E[0], O = _.slice(0, C), L = _.slice(C + R.length),
                                                        T = k + _.length;
                                                    u && T > u.reach && (u.reach = T);
                                                    var I = w.prev;
                                                    if (O && (I = i(n, I, O), k += O.length), function (e, t, n) {
                                                        for (var r = t.next, a = 0; a < n && r !== e.tail; a++) r = r.next;
                                                        t.next = r, r.prev = t, e.length -= a
                                                    }(n, I, S), w = i(n, I, new a(p, y ? r.tokenize(R, y) : R, m, R)), L && i(n, w, L), S > 1) {
                                                        var N = {cause: p + "," + g, reach: T};
                                                        e(t, n, s, w.prev, k, N), u && N.reach > u.reach && (u.reach = N.reach)
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }(e, c, t, c.head, 0), function (e) {
                                    for (var t = [], n = e.head.next; n !== e.tail;) t.push(n.value), n = n.next;
                                    return t
                                }(c)
                            }, hooks: {
                                all: {}, add: function (e, t) {
                                    var n = r.hooks.all;
                                    n[e] = n[e] || [], n[e].push(t)
                                }, run: function (e, t) {
                                    var n = r.hooks.all[e];
                                    if (n && n.length) for (var a, o = 0; a = n[o++];) a(t)
                                }
                            }, Token: a
                        };

                        function a(e, t, n, r) {
                            this.type = e, this.content = t, this.alias = n, this.length = 0 | (r || "").length
                        }

                        function o(e, t, n, r) {
                            e.lastIndex = t;
                            var a = e.exec(n);
                            if (a && r && a[1]) {
                                var o = a[1].length;
                                a.index += o, a[0] = a[0].slice(o)
                            }
                            return a
                        }

                        function s() {
                            var e = {value: null, prev: null, next: null}, t = {value: null, prev: e, next: null};
                            e.next = t, this.head = e, this.tail = t, this.length = 0
                        }

                        function i(e, t, n) {
                            var r = t.next, a = {value: n, prev: t, next: r};
                            return t.next = a, r.prev = a, e.length++, a
                        }

                        return a.stringify = function e(t, n) {
                            if ("string" == typeof t) return t;
                            if (Array.isArray(t)) {
                                var a = "";
                                return t.forEach(function (t) {
                                    a += e(t, n)
                                }), a
                            }
                            var o = {
                                type: t.type,
                                content: e(t.content, n),
                                tag: "span",
                                classes: ["token", t.type],
                                attributes: {},
                                language: n
                            }, s = t.alias;
                            s && (Array.isArray(s) ? Array.prototype.push.apply(o.classes, s) : o.classes.push(s)), r.hooks.run("wrap", o);
                            var i = "";
                            for (var l in o.attributes) i += " " + l + '="' + (o.attributes[l] || "").replace(/"/g, "&quot;") + '"';
                            return "<" + o.tag + ' class="' + o.classes.join(" ") + '"' + i + ">" + o.content + "</" + o.tag + ">"
                        }, r
                    }();
                    t.exports = n, n.default = n
                }
            }, function () {
                return a || (0, r[z(r)[0]])((a = {exports: {}}).exports, a), a.exports
            })()) ? N(U(o)) : {}, ((e, t, n, r) => {
                if (t && "object" == typeof t || "function" == typeof t) for (let a of z(t)) H.call(e, a) || a === n || D(e, a, {
                    get: () => t[a],
                    enumerable: !(r = B(t, a)) || r.enumerable
                });
                return e
            })(!s && o && o.__esModule ? i : D(i, "default", {value: o, enumerable: !0}), o));
        Y.languages.markup = {
            comment: {pattern: /<!--(?:(?!<!--)[\s\S])*?-->/, greedy: !0},
            prolog: {pattern: /<\?[\s\S]+?\?>/, greedy: !0},
            doctype: {
                pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
                greedy: !0,
                inside: {
                    "internal-subset": {
                        pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
                        lookbehind: !0,
                        greedy: !0,
                        inside: null
                    },
                    string: {pattern: /"[^"]*"|'[^']*'/, greedy: !0},
                    punctuation: /^<!|>$|[[\]]/,
                    "doctype-tag": /^DOCTYPE/i,
                    name: /[^\s<>'"]+/
                }
            },
            cdata: {pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, greedy: !0},
            tag: {
                pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
                greedy: !0,
                inside: {
                    tag: {pattern: /^<\/?[^\s>\/]+/, inside: {punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/}},
                    "special-attr": [],
                    "attr-value": {
                        pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
                        inside: {
                            punctuation: [{pattern: /^=/, alias: "attr-equals"}, {
                                pattern: /^(\s*)["']|["']$/,
                                lookbehind: !0
                            }]
                        }
                    },
                    punctuation: /\/?>/,
                    "attr-name": {pattern: /[^\s>\/]+/, inside: {namespace: /^[^\s>\/:]+:/}}
                }
            },
            entity: [{pattern: /&[\da-z]{1,8};/i, alias: "named-entity"}, /&#x?[\da-f]{1,8};/i]
        }, Y.languages.markup.tag.inside["attr-value"].inside.entity = Y.languages.markup.entity, Y.languages.markup.doctype.inside["internal-subset"].inside = Y.languages.markup, Y.hooks.add("wrap", function (e) {
            "entity" === e.type && (e.attributes.title = e.content.replace(/&amp;/, "&"))
        }), Object.defineProperty(Y.languages.markup.tag, "addInlined", {
            value: function (e, t) {
                var n = {}, n = (n["language-" + t] = {
                    pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
                    lookbehind: !0,
                    inside: Y.languages[t]
                }, n.cdata = /^<!\[CDATA\[|\]\]>$/i, {
                    "included-cdata": {
                        pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
                        inside: n
                    }
                }), t = (n["language-" + t] = {pattern: /[\s\S]+/, inside: Y.languages[t]}, {});
                t[e] = {
                    pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function () {
                        return e
                    }), "i"), lookbehind: !0, greedy: !0, inside: n
                }, Y.languages.insertBefore("markup", "cdata", t)
            }
        }), Object.defineProperty(Y.languages.markup.tag, "addAttribute", {
            value: function (e, t) {
                Y.languages.markup.tag.inside["special-attr"].push({
                    pattern: RegExp(/(^|["'\s])/.source + "(?:" + e + ")" + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source, "i"),
                    lookbehind: !0,
                    inside: {
                        "attr-name": /^[^\s=]+/,
                        "attr-value": {
                            pattern: /=[\s\S]+/,
                            inside: {
                                value: {
                                    pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
                                    lookbehind: !0,
                                    alias: [t, "language-" + t],
                                    inside: Y.languages[t]
                                }, punctuation: [{pattern: /^=/, alias: "attr-equals"}, /"|'/]
                            }
                        }
                    }
                })
            }
        }), Y.languages.html = Y.languages.markup, Y.languages.mathml = Y.languages.markup, Y.languages.svg = Y.languages.markup, Y.languages.xml = Y.languages.extend("markup", {}), Y.languages.ssml = Y.languages.xml, Y.languages.atom = Y.languages.xml, Y.languages.rss = Y.languages.xml, l = {
            pattern: /\\[\\(){}[\]^$+*?|.]/,
            alias: "escape"
        }, u = RegExp((u = "(?:[^\\\\-]|" + (c = /\\(?:x[\da-fA-F]{2}|u[\da-fA-F]{4}|u\{[\da-fA-F]+\}|0[0-7]{0,2}|[123][0-7]{2}|c[a-zA-Z]|.)/).source + ")") + "-" + u), p = {
            pattern: /(<|')[^<>']+(?=[>']$)/,
            lookbehind: !0,
            alias: "variable"
        }, Y.languages.regex = {
            "char-class": {
                pattern: /((?:^|[^\\])(?:\\\\)*)\[(?:[^\\\]]|\\[\s\S])*\]/,
                lookbehind: !0,
                inside: {
                    "char-class-negation": {pattern: /(^\[)\^/, lookbehind: !0, alias: "operator"},
                    "char-class-punctuation": {pattern: /^\[|\]$/, alias: "punctuation"},
                    range: {pattern: u, inside: {escape: c, "range-punctuation": {pattern: /-/, alias: "operator"}}},
                    "special-escape": l,
                    "char-set": {pattern: /\\[wsd]|\\p\{[^{}]+\}/i, alias: "class-name"},
                    escape: c
                }
            },
            "special-escape": l,
            "char-set": {pattern: /\.|\\[wsd]|\\p\{[^{}]+\}/i, alias: "class-name"},
            backreference: [{pattern: /\\(?![123][0-7]{2})[1-9]/, alias: "keyword"}, {
                pattern: /\\k<[^<>']+>/,
                alias: "keyword",
                inside: {"group-name": p}
            }],
            anchor: {pattern: /[$^]|\\[ABbGZz]/, alias: "function"},
            escape: c,
            group: [{
                pattern: /\((?:\?(?:<[^<>']+>|'[^<>']+'|[>:]|<?[=!]|[idmnsuxU]+(?:-[idmnsuxU]+)?:?))?/,
                alias: "punctuation",
                inside: {"group-name": p}
            }, {pattern: /\)/, alias: "punctuation"}],
            quantifier: {pattern: /(?:[+*?]|\{\d+(?:,\d*)?\})[?+]?/, alias: "number"},
            alternation: {pattern: /\|/, alias: "keyword"}
        }, Y.languages.clike = {
            comment: [{
                pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
                lookbehind: !0,
                greedy: !0
            }, {pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0}],
            string: {pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, greedy: !0},
            "class-name": {
                pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
                lookbehind: !0,
                inside: {punctuation: /[.\\]/}
            },
            keyword: /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
            boolean: /\b(?:false|true)\b/,
            function: /\b\w+(?=\()/,
            number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
            operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
            punctuation: /[{}[\];(),.:]/
        }, Y.languages.javascript = Y.languages.extend("clike", {
            "class-name": [Y.languages.clike["class-name"], {
                pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
                lookbehind: !0
            }],
            keyword: [{
                pattern: /((?:^|\})\s*)catch\b/,
                lookbehind: !0
            }, {
                pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
                lookbehind: !0
            }],
            function: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
            number: {
                pattern: RegExp(/(^|[^\w$])/.source + "(?:" + /NaN|Infinity/.source + "|" + /0[bB][01]+(?:_[01]+)*n?/.source + "|" + /0[oO][0-7]+(?:_[0-7]+)*n?/.source + "|" + /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source + "|" + /\d+(?:_\d+)*n/.source + "|" + /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source + ")" + /(?![\w$])/.source),
                lookbehind: !0
            },
            operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
        }), Y.languages.javascript["class-name"][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/, Y.languages.insertBefore("javascript", "keyword", {
            regex: {
                pattern: RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source + /\//.source + "(?:" + /(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source + "|" + /(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source + ")" + /(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),
                lookbehind: !0,
                greedy: !0,
                inside: {
                    "regex-source": {
                        pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
                        lookbehind: !0,
                        alias: "language-regex",
                        inside: Y.languages.regex
                    }, "regex-delimiter": /^\/|\/$/, "regex-flags": /^[a-z]+$/
                }
            },
            "function-variable": {
                pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
                alias: "function"
            },
            parameter: [{
                pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
                lookbehind: !0,
                inside: Y.languages.javascript
            }, {
                pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
                lookbehind: !0,
                inside: Y.languages.javascript
            }, {
                pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
                lookbehind: !0,
                inside: Y.languages.javascript
            }, {
                pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
                lookbehind: !0,
                inside: Y.languages.javascript
            }],
            constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
        }), Y.languages.insertBefore("javascript", "string", {
            hashbang: {
                pattern: /^#!.*/,
                greedy: !0,
                alias: "comment"
            },
            "template-string": {
                pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
                greedy: !0,
                inside: {
                    "template-punctuation": {pattern: /^`|`$/, alias: "string"},
                    interpolation: {
                        pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
                        lookbehind: !0,
                        inside: {
                            "interpolation-punctuation": {pattern: /^\$\{|\}$/, alias: "punctuation"},
                            rest: Y.languages.javascript
                        }
                    },
                    string: /[\s\S]+/
                }
            },
            "string-property": {
                pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
                lookbehind: !0,
                greedy: !0,
                alias: "property"
            }
        }), Y.languages.insertBefore("javascript", "operator", {
            "literal-property": {
                pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
                lookbehind: !0,
                alias: "property"
            }
        }), Y.languages.markup && (Y.languages.markup.tag.addInlined("script", "javascript"), Y.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source, "javascript")), Y.languages.js = Y.languages.javascript, Y.languages.actionscript = Y.languages.extend("javascript", {
            keyword: /\b(?:as|break|case|catch|class|const|default|delete|do|dynamic|each|else|extends|final|finally|for|function|get|if|implements|import|in|include|instanceof|interface|internal|is|namespace|native|new|null|override|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|use|var|void|while|with)\b/,
            operator: /\+\+|--|(?:[+\-*\/%^]|&&?|\|\|?|<<?|>>?>?|[!=]=?)=?|[~?@]/
        }), Y.languages.actionscript["class-name"].alias = "function", delete Y.languages.actionscript.parameter, delete Y.languages.actionscript["literal-property"], Y.languages.markup && Y.languages.insertBefore("actionscript", "string", {
            xml: {
                pattern: /(^|[^.])<\/?\w+(?:\s+[^\s>\/=]+=("|')(?:\\[\s\S]|(?!\2)[^\\])*\2)*\s*\/?>/,
                lookbehind: !0,
                inside: Y.languages.markup
            }
        }), d = /#(?!\{).+/, g = {
            pattern: /#\{[^}]+\}/,
            alias: "variable"
        }, Y.languages.coffeescript = Y.languages.extend("javascript", {
            comment: d,
            string: [{pattern: /'(?:\\[\s\S]|[^\\'])*'/, greedy: !0}, {
                pattern: /"(?:\\[\s\S]|[^\\"])*"/,
                greedy: !0,
                inside: {interpolation: g}
            }],
            keyword: /\b(?:and|break|by|catch|class|continue|debugger|delete|do|each|else|extend|extends|false|finally|for|if|in|instanceof|is|isnt|let|loop|namespace|new|no|not|null|of|off|on|or|own|return|super|switch|then|this|throw|true|try|typeof|undefined|unless|until|when|while|window|with|yes|yield)\b/,
            "class-member": {pattern: /@(?!\d)\w+/, alias: "variable"}
        }), Y.languages.insertBefore("coffeescript", "comment", {
            "multiline-comment": {
                pattern: /###[\s\S]+?###/,
                alias: "comment"
            }, "block-regex": {pattern: /\/{3}[\s\S]*?\/{3}/, alias: "regex", inside: {comment: d, interpolation: g}}
        }), Y.languages.insertBefore("coffeescript", "string", {
            "inline-javascript": {
                pattern: /`(?:\\[\s\S]|[^\\`])*`/,
                inside: {
                    delimiter: {pattern: /^`|`$/, alias: "punctuation"},
                    script: {pattern: /[\s\S]+/, alias: "language-javascript", inside: Y.languages.javascript}
                }
            },
            "multiline-string": [{pattern: /'''[\s\S]*?'''/, greedy: !0, alias: "string"}, {
                pattern: /"""[\s\S]*?"""/,
                greedy: !0,
                alias: "string",
                inside: {interpolation: g}
            }]
        }), Y.languages.insertBefore("coffeescript", "keyword", {property: /(?!\d)\w+(?=\s*:(?!:))/}), delete Y.languages.coffeescript["template-string"], Y.languages.coffee = Y.languages.coffeescript, Object.defineProperty(f = Y.languages.javadoclike = {
            parameter: {
                pattern: /(^[\t ]*(?:\/{3}|\*|\/\*\*)\s*@(?:arg|arguments|param)\s+)\w+/m,
                lookbehind: !0
            },
            keyword: {pattern: /(^[\t ]*(?:\/{3}|\*|\/\*\*)\s*|\{)@[a-z][a-zA-Z-]+\b/m, lookbehind: !0},
            punctuation: /[{}]/
        }, "addSupport", {
            value: function (e, t) {
                (e = "string" == typeof e ? [e] : e).forEach(function (e) {
                    var n = function (e) {
                        e.inside || (e.inside = {}), e.inside.rest = t
                    }, r = "doc-comment";
                    if (a = Y.languages[e]) {
                        var a, o = a[r];
                        if ((o = o || (a = Y.languages.insertBefore(e, "comment", {
                            "doc-comment": {
                                pattern: /(^|[^\\])\/\*\*[^/][\s\S]*?(?:\*\/|$)/,
                                lookbehind: !0,
                                alias: "comment"
                            }
                        }))[r]) instanceof RegExp && (o = a[r] = {pattern: o}), Array.isArray(o)) for (var s = 0, i = o.length; s < i; s++) o[s] instanceof RegExp && (o[s] = {pattern: o[s]}), n(o[s]); else n(o)
                    }
                })
            }
        }), f.addSupport(["java", "javascript", "php"], f), y = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/, Y.languages.css = {
            comment: /\/\*[\s\S]*?\*\//,
            atrule: {
                pattern: RegExp("@[\\w-](?:" + /[^;{\s"']|\s+(?!\s)/.source + "|" + y.source + ")*?" + /(?:;|(?=\s*\{))/.source),
                inside: {
                    rule: /^@[\w-]+/,
                    "selector-function-argument": {
                        pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
                        lookbehind: !0,
                        alias: "selector"
                    },
                    keyword: {pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/, lookbehind: !0}
                }
            },
            url: {
                pattern: RegExp("\\burl\\((?:" + y.source + "|" + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ")\\)", "i"),
                greedy: !0,
                inside: {
                    function: /^url/i,
                    punctuation: /^\(|\)$/,
                    string: {pattern: RegExp("^" + y.source + "$"), alias: "url"}
                }
            },
            selector: {
                pattern: RegExp("(^|[{}\\s])[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|" + y.source + ")*(?=\\s*\\{)"),
                lookbehind: !0
            },
            string: {pattern: y, greedy: !0},
            property: {
                pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
                lookbehind: !0
            },
            important: /!important\b/i,
            function: {pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i, lookbehind: !0},
            punctuation: /[(){};:,]/
        }, Y.languages.css.atrule.inside.rest = Y.languages.css, (y = Y.languages.markup) && (y.tag.addInlined("style", "css"), y.tag.addAttribute("style", "css")), function (e) {
            var t = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, t = (e.languages.css.selector = {
                    pattern: e.languages.css.selector.pattern,
                    lookbehind: !0,
                    inside: t = {
                        "pseudo-element": /:(?:after|before|first-letter|first-line|selection)|::[-\w]+/,
                        "pseudo-class": /:[-\w]+/,
                        class: /\.[-\w]+/,
                        id: /#[-\w]+/,
                        attribute: {
                            pattern: RegExp("\\[(?:[^[\\]\"']|" + t.source + ")*\\]"),
                            greedy: !0,
                            inside: {
                                punctuation: /^\[|\]$/,
                                "case-sensitivity": {pattern: /(\s)[si]$/i, lookbehind: !0, alias: "keyword"},
                                namespace: {
                                    pattern: /^(\s*)(?:(?!\s)[-*\w\xA0-\uFFFF])*\|(?!=)/,
                                    lookbehind: !0,
                                    inside: {punctuation: /\|$/}
                                },
                                "attr-name": {pattern: /^(\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+/, lookbehind: !0},
                                "attr-value": [t, {pattern: /(=\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+(?=\s*$)/, lookbehind: !0}],
                                operator: /[|~*^$]?=/
                            }
                        },
                        "n-th": [{
                            pattern: /(\(\s*)[+-]?\d*[\dn](?:\s*[+-]\s*\d+)?(?=\s*\))/,
                            lookbehind: !0,
                            inside: {number: /[\dn]+/, operator: /[+-]/}
                        }, {pattern: /(\(\s*)(?:even|odd)(?=\s*\))/i, lookbehind: !0}],
                        combinator: />|\+|~|\|\|/,
                        punctuation: /[(),]/
                    }
                }, e.languages.css.atrule.inside["selector-function-argument"].inside = t, e.languages.insertBefore("css", "property", {
                    variable: {
                        pattern: /(^|[^-\w\xA0-\uFFFF])--(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*/i,
                        lookbehind: !0
                    }
                }), {pattern: /(\b\d+)(?:%|[a-z]+(?![\w-]))/, lookbehind: !0}),
                n = {pattern: /(^|[^\w.-])-?(?:\d+(?:\.\d+)?|\.\d+)/, lookbehind: !0};
            e.languages.insertBefore("css", "function", {
                operator: {pattern: /(\s)[+\-*\/](?=\s)/, lookbehind: !0},
                hexcode: {pattern: /\B#[\da-f]{3,8}\b/i, alias: "color"},
                color: [{
                    pattern: /(^|[^\w-])(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|RebeccaPurple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)(?![\w-])/i,
                    lookbehind: !0
                }, {
                    pattern: /\b(?:hsl|rgb)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:hsl|rgb)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i,
                    inside: {unit: t, number: n, function: /[\w-]+(?=\()/, punctuation: /[(),]/}
                }],
                entity: /\\[\da-f]{1,8}/i,
                unit: t,
                number: n
            })
        }(Y), function (e) {
            var t = /[*&][^\s[\]{},]+/,
                n = /!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/,
                r = "(?:" + n.source + "(?:[ 	]+" + t.source + ")?|" + t.source + "(?:[ 	]+" + n.source + ")?)",
                a = /(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(/<PLAIN>/g, function () {
                    return /[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/.source
                }), o = /"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;

            function s(e, t) {
                return t = (t || "").replace(/m/g, "") + "m", RegExp(/([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\]|\}|(?:[\r\n]\s*)?#))/.source.replace(/<<prop>>/g, function () {
                    return r
                }).replace(/<<value>>/g, function () {
                    return e
                }), t)
            }

            e.languages.yaml = {
                scalar: {
                    pattern: RegExp(/([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(/<<prop>>/g, function () {
                        return r
                    })), lookbehind: !0, alias: "string"
                },
                comment: /#.*/,
                key: {
                    pattern: RegExp(/((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source.replace(/<<prop>>/g, function () {
                        return r
                    }).replace(/<<key>>/g, function () {
                        return "(?:" + a + "|" + o + ")"
                    })), lookbehind: !0, greedy: !0, alias: "atrule"
                },
                directive: {pattern: /(^[ \t]*)%.+/m, lookbehind: !0, alias: "important"},
                datetime: {
                    pattern: s(/\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/.source),
                    lookbehind: !0,
                    alias: "number"
                },
                boolean: {pattern: s(/false|true/.source, "i"), lookbehind: !0, alias: "important"},
                null: {pattern: s(/null|~/.source, "i"), lookbehind: !0, alias: "important"},
                string: {pattern: s(o), lookbehind: !0, greedy: !0},
                number: {
                    pattern: s(/[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/.source, "i"),
                    lookbehind: !0
                },
                tag: n,
                important: t,
                punctuation: /---|[:[\]{}\-,|>?]|\.\.\./
            }, e.languages.yml = e.languages.yaml
        }(Y), function (e) {
            var t = /(?:\\.|[^\\\n\r]|(?:\n|\r\n?)(?![\r\n]))/.source;

            function n(e) {
                return e = e.replace(/<inner>/g, function () {
                    return t
                }), RegExp(/((?:^|[^\\])(?:\\{2})*)/.source + "(?:" + e + ")")
            }

            var r = /(?:\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\|\r\n`])+/.source,
                a = /\|?__(?:\|__)+\|?(?:(?:\n|\r\n?)|(?![\s\S]))/.source.replace(/__/g, function () {
                    return r
                }), o = /\|?[ \t]*:?-{3,}:?[ \t]*(?:\|[ \t]*:?-{3,}:?[ \t]*)+\|?(?:\n|\r\n?)/.source,
                s = (e.languages.markdown = e.languages.extend("markup", {}), e.languages.insertBefore("markdown", "prolog", {
                    "front-matter-block": {
                        pattern: /(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/,
                        lookbehind: !0,
                        greedy: !0,
                        inside: {
                            punctuation: /^---|---$/,
                            "front-matter": {
                                pattern: /\S+(?:\s+\S+)*/,
                                alias: ["yaml", "language-yaml"],
                                inside: e.languages.yaml
                            }
                        }
                    },
                    blockquote: {pattern: /^>(?:[\t ]*>)*/m, alias: "punctuation"},
                    table: {
                        pattern: RegExp("^" + a + o + "(?:" + a + ")*", "m"),
                        inside: {
                            "table-data-rows": {
                                pattern: RegExp("^(" + a + o + ")(?:" + a + ")*$"),
                                lookbehind: !0,
                                inside: {
                                    "table-data": {pattern: RegExp(r), inside: e.languages.markdown},
                                    punctuation: /\|/
                                }
                            },
                            "table-line": {
                                pattern: RegExp("^(" + a + ")" + o + "$"),
                                lookbehind: !0,
                                inside: {punctuation: /\||:?-{3,}:?/}
                            },
                            "table-header-row": {
                                pattern: RegExp("^" + a + "$"),
                                inside: {
                                    "table-header": {
                                        pattern: RegExp(r),
                                        alias: "important",
                                        inside: e.languages.markdown
                                    }, punctuation: /\|/
                                }
                            }
                        }
                    },
                    code: [{
                        pattern: /((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/,
                        lookbehind: !0,
                        alias: "keyword"
                    }, {
                        pattern: /^```[\s\S]*?^```$/m,
                        greedy: !0,
                        inside: {
                            "code-block": {
                                pattern: /^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m,
                                lookbehind: !0
                            }, "code-language": {pattern: /^(```).+/, lookbehind: !0}, punctuation: /```/
                        }
                    }],
                    title: [{
                        pattern: /\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m,
                        alias: "important",
                        inside: {punctuation: /==+$|--+$/}
                    }, {pattern: /(^\s*)#.+/m, lookbehind: !0, alias: "important", inside: {punctuation: /^#+|#+$/}}],
                    hr: {pattern: /(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m, lookbehind: !0, alias: "punctuation"},
                    list: {pattern: /(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m, lookbehind: !0, alias: "punctuation"},
                    "url-reference": {
                        pattern: /!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,
                        inside: {
                            variable: {pattern: /^(!?\[)[^\]]+/, lookbehind: !0},
                            string: /(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,
                            punctuation: /^[\[\]!:]|[<>]/
                        },
                        alias: "url"
                    },
                    bold: {
                        pattern: n(/\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\b|\*\*(?:(?!\*)<inner>|\*(?:(?!\*)<inner>)+\*)+\*\*/.source),
                        lookbehind: !0,
                        greedy: !0,
                        inside: {
                            content: {pattern: /(^..)[\s\S]+(?=..$)/, lookbehind: !0, inside: {}},
                            punctuation: /\*\*|__/
                        }
                    },
                    italic: {
                        pattern: n(/\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\b|\*(?:(?!\*)<inner>|\*\*(?:(?!\*)<inner>)+\*\*)+\*/.source),
                        lookbehind: !0,
                        greedy: !0,
                        inside: {
                            content: {pattern: /(^.)[\s\S]+(?=.$)/, lookbehind: !0, inside: {}},
                            punctuation: /[*_]/
                        }
                    },
                    strike: {
                        pattern: n(/(~~?)(?:(?!~)<inner>)+\2/.source),
                        lookbehind: !0,
                        greedy: !0,
                        inside: {
                            content: {pattern: /(^~~?)[\s\S]+(?=\1$)/, lookbehind: !0, inside: {}},
                            punctuation: /~~?/
                        }
                    },
                    "code-snippet": {
                        pattern: /(^|[^\\`])(?:``[^`\r\n]+(?:`[^`\r\n]+)*``(?!`)|`[^`\r\n]+`(?!`))/,
                        lookbehind: !0,
                        greedy: !0,
                        alias: ["code", "keyword"]
                    },
                    url: {
                        pattern: n(/!?\[(?:(?!\])<inner>)+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)|[ \t]?\[(?:(?!\])<inner>)+\])/.source),
                        lookbehind: !0,
                        greedy: !0,
                        inside: {
                            operator: /^!/,
                            content: {pattern: /(^\[)[^\]]+(?=\])/, lookbehind: !0, inside: {}},
                            variable: {pattern: /(^\][ \t]?\[)[^\]]+(?=\]$)/, lookbehind: !0},
                            url: {pattern: /(^\]\()[^\s)]+/, lookbehind: !0},
                            string: {pattern: /(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/, lookbehind: !0}
                        }
                    }
                }), ["url", "bold", "italic", "strike"].forEach(function (t) {
                    ["url", "bold", "italic", "strike", "code-snippet"].forEach(function (n) {
                        t !== n && (e.languages.markdown[t].inside.content.inside[n] = e.languages.markdown[n])
                    })
                }), e.hooks.add("after-tokenize", function (e) {
                    "markdown" !== e.language && "md" !== e.language || function e(t) {
                        if (t && "string" != typeof t) for (var n = 0, r = t.length; n < r; n++) {
                            var a, o = t[n];
                            "code" !== o.type ? e(o.content) : (a = o.content[1], o = o.content[3], a && o && "code-language" === a.type && "code-block" === o.type && "string" == typeof a.content && (a = a.content.replace(/\b#/g, "sharp").replace(/\b\+\+/g, "pp"), a = "language-" + (a = (/[a-z][\w-]*/i.exec(a) || [""])[0].toLowerCase()), o.alias ? "string" == typeof o.alias ? o.alias = [o.alias, a] : o.alias.push(a) : o.alias = [a]))
                        }
                    }(e.tokens)
                }), e.hooks.add("wrap", function (t) {
                    if ("code-block" === t.type) {
                        for (var n = "", r = 0, a = t.classes.length; r < a; r++) {
                            var o = t.classes[r], o = /language-(.+)/.exec(o);
                            if (o) {
                                n = o[1];
                                break
                            }
                        }
                        var c, u = e.languages[n];
                        u ? t.content = e.highlight((0, t.content).replace(s, "").replace(/&(\w{1,8}|#x?[\da-f]{1,8});/gi, function (e, t) {
                            return "#" === (t = t.toLowerCase())[0] ? l("x" === t[1] ? parseInt(t.slice(2), 16) : Number(t.slice(1))) : i[t] || e
                        }), u, n) : n && "none" !== n && e.plugins.autoloader && (c = "md-" + new Date().valueOf() + "-" + Math.floor(1e16 * Math.random()), t.attributes.id = c, e.plugins.autoloader.loadLanguages(n, function () {
                            var t = document.getElementById(c);
                            t && (t.innerHTML = e.highlight(t.textContent, e.languages[n], n))
                        }))
                    }
                }), RegExp(e.languages.markup.tag.pattern.source, "gi")), i = {amp: "&", lt: "<", gt: ">", quot: '"'},
                l = String.fromCodePoint || String.fromCharCode;
            e.languages.md = e.languages.markdown
        }(Y), Y.languages.graphql = {
            comment: /#.*/,
            description: {
                pattern: /(?:"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*")(?=\s*[a-z_])/i,
                greedy: !0,
                alias: "string",
                inside: {
                    "language-markdown": {
                        pattern: /(^"(?:"")?)(?!\1)[\s\S]+(?=\1$)/,
                        lookbehind: !0,
                        inside: Y.languages.markdown
                    }
                }
            },
            string: {pattern: /"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*"/, greedy: !0},
            number: /(?:\B-|\b)\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
            boolean: /\b(?:false|true)\b/,
            variable: /\$[a-z_]\w*/i,
            directive: {pattern: /@[a-z_]\w*/i, alias: "function"},
            "attr-name": {pattern: /\b[a-z_]\w*(?=\s*(?:\((?:[^()"]|"(?:\\.|[^\\"\r\n])*")*\))?:)/i, greedy: !0},
            "atom-input": {pattern: /\b[A-Z]\w*Input\b/, alias: "class-name"},
            scalar: /\b(?:Boolean|Float|ID|Int|String)\b/,
            constant: /\b[A-Z][A-Z_\d]*\b/,
            "class-name": {
                pattern: /(\b(?:enum|implements|interface|on|scalar|type|union)\s+|&\s*|:\s*|\[)[A-Z_]\w*/,
                lookbehind: !0
            },
            fragment: {pattern: /(\bfragment\s+|\.{3}\s*(?!on\b))[a-zA-Z_]\w*/, lookbehind: !0, alias: "function"},
            "definition-mutation": {pattern: /(\bmutation\s+)[a-zA-Z_]\w*/, lookbehind: !0, alias: "function"},
            "definition-query": {pattern: /(\bquery\s+)[a-zA-Z_]\w*/, lookbehind: !0, alias: "function"},
            keyword: /\b(?:directive|enum|extend|fragment|implements|input|interface|mutation|on|query|repeatable|scalar|schema|subscription|type|union)\b/,
            operator: /[!=|&]|\.{3}/,
            "property-query": /\w+(?=\s*\()/,
            object: /\w+(?=\s*\{)/,
            punctuation: /[!(){}\[\]:=,]/,
            property: /\w+/
        }, Y.hooks.add("after-tokenize", function (e) {
            if ("graphql" === e.language) for (var t = e.tokens.filter(function (e) {
                return "string" != typeof e && "comment" !== e.type && "scalar" !== e.type
            }), n = 0; n < t.length;) {
                var r = t[n++];
                if ("keyword" === r.type && "mutation" === r.content) {
                    var a = [];
                    if (u(["definition-mutation", "punctuation"]) && "(" === t[n + 1].content) {
                        n += 2;
                        var o = p(/^\($/, /^\)$/);
                        if (-1 === o) continue;
                        for (; n < o; n++) {
                            var s = t[n + 0];
                            "variable" === s.type && (d(s, "variable-input"), a.push(s.content))
                        }
                        n = o + 1
                    }
                    if (u(["punctuation", "property-query"]) && "{" === t[n + 0].content && (d(t[++n + 0], "property-mutation"), 0 < a.length)) {
                        var i = p(/^\{$/, /^\}$/);
                        if (-1 !== i) for (var l = n; l < i; l++) {
                            var c = t[l];
                            "variable" === c.type && 0 <= a.indexOf(c.content) && d(c, "variable-input")
                        }
                    }
                }
            }

            function u(e, r) {
                r = r || 0;
                for (var a = 0; a < e.length; a++) {
                    var o = t[n + (a + r)];
                    if (!o || o.type !== e[a]) return
                }
                return 1
            }

            function p(e, r) {
                for (var a = 1, o = n; o < t.length; o++) {
                    var s = t[o], i = s.content;
                    if ("punctuation" === s.type && "string" == typeof i) {
                        if (e.test(i)) a++; else if (r.test(i) && 0 == --a) return o
                    }
                }
                return -1
            }

            function d(e, t) {
                var n = e.alias;
                n ? Array.isArray(n) || (e.alias = n = [n]) : e.alias = n = [], n.push(t)
            }
        }), Y.languages.sql = {
            comment: {pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/, lookbehind: !0},
            variable: [{pattern: /@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/, greedy: !0}, /@[\w.$]+/],
            string: {pattern: /(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\]|\2\2)*\2/, greedy: !0, lookbehind: !0},
            identifier: {
                pattern: /(^|[^@\\])`(?:\\[\s\S]|[^`\\]|``)*`/,
                greedy: !0,
                lookbehind: !0,
                inside: {punctuation: /^`|`$/}
            },
            function: /\b(?:AVG|COUNT|FIRST|FORMAT|LAST|LCASE|LEN|MAX|MID|MIN|MOD|NOW|ROUND|SUM|UCASE)(?=\s*\()/i,
            keyword: /\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR(?:ACTER|SET)?|CHECK(?:POINT)?|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMNS?|COMMENT|COMMIT(?:TED)?|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS(?:TABLE)?|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|CYCLE|DATA(?:BASES?)?|DATE(?:TIME)?|DAY|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITERS?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE|ELSE(?:IF)?|ENABLE|ENCLOSED|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPED?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|HOUR|IDENTITY(?:COL|_INSERT)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTERVAL|INTO|INVOKER|ISOLATION|ITERATE|JOIN|KEYS?|KILL|LANGUAGE|LAST|LEAVE|LEFT|LEVEL|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|LOOP|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MINUTE|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL|NATURAL|NCHAR|NEXT|NO|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREPARE|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READS?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEAT(?:ABLE)?|REPLACE|REPLICATION|REQUIRE|RESIGNAL|RESTORE|RESTRICT|RETURN(?:ING|S)?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SECOND|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|SQL|START(?:ING)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED|TEXT(?:SIZE)?|THEN|TIME(?:STAMP)?|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNLOCK|UNPIVOT|UNSIGNED|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?|YEAR)\b/i,
            boolean: /\b(?:FALSE|NULL|TRUE)\b/i,
            number: /\b0x[\da-f]+\b|\b\d+(?:\.\d*)?|\B\.\d+\b/i,
            operator: /[-+*\/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|DIV|ILIKE|IN|IS|LIKE|NOT|OR|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,
            punctuation: /[;[\]()`,.]/
        }, function (e) {
            var t = e.languages.javascript["template-string"], n = t.pattern.source, r = t.inside.interpolation,
                a = r.inside["interpolation-punctuation"], o = r.pattern.source;

            function s(t, r) {
                if (e.languages[t]) return {
                    pattern: RegExp("((?:" + r + ")\\s*)" + n),
                    lookbehind: !0,
                    greedy: !0,
                    inside: {
                        "template-punctuation": {pattern: /^`|`$/, alias: "string"},
                        "embedded-code": {pattern: /[\s\S]+/, alias: t}
                    }
                }
            }

            function i(t, n, r) {
                return t = {
                    code: t,
                    grammar: n,
                    language: r
                }, e.hooks.run("before-tokenize", t), t.tokens = e.tokenize(t.code, t.grammar), e.hooks.run("after-tokenize", t), t.tokens
            }

            e.languages.javascript["template-string"] = [s("css", /\b(?:styled(?:\([^)]*\))?(?:\s*\.\s*\w+(?:\([^)]*\))*)*|css(?:\s*\.\s*(?:global|resolve))?|createGlobalStyle|keyframes)/.source), s("html", /\bhtml|\.\s*(?:inner|outer)HTML\s*\+?=/.source), s("svg", /\bsvg/.source), s("markdown", /\b(?:markdown|md)/.source), s("graphql", /\b(?:gql|graphql(?:\s*\.\s*experimental)?)/.source), s("sql", /\bsql/.source), t].filter(Boolean);
            var l = {javascript: !0, js: !0, typescript: !0, ts: !0, jsx: !0, tsx: !0};
            e.hooks.add("after-tokenize", function (t) {
                t.language in l && function t(n) {
                    for (var s = 0, l = n.length; s < l; s++) {
                        var c, u, p, d = n[s];
                        "string" != typeof d && (Array.isArray(c = d.content) ? "template-string" === d.type ? (d = c[1], 3 === c.length && "string" != typeof d && "embedded-code" === d.type && (u = function e(t) {
                            return "string" == typeof t ? t : Array.isArray(t) ? t.map(e).join("") : e(t.content)
                        }(d), d = Array.isArray(d = d.alias) ? d[0] : d, p = e.languages[d]) && (c[1] = function (t, n, s) {
                            var l = e.tokenize(t, {interpolation: {pattern: RegExp(o), lookbehind: !0}}), c = 0, u = {},
                                l = i(l.map(function (e) {
                                    if ("string" == typeof e) return e;
                                    for (var n, r, e = e.content; -1 !== t.indexOf((r = c++, n = "___" + s.toUpperCase() + "_" + r + "___"));) ;
                                    return u[n] = e, n
                                }).join(""), n, s), p = Object.keys(u);
                            return c = 0, function t(n) {
                                for (var o = 0; o < n.length; o++) {
                                    if (c >= p.length) return;
                                    var s, l, d, g, f, y, b, h = n[o];
                                    "string" == typeof h || "string" == typeof h.content ? (s = p[c], -1 !== (b = (y = "string" == typeof h ? h : h.content).indexOf(s)) && (++c, l = y.substring(0, b), f = u[s], d = void 0, (g = {})["interpolation-punctuation"] = a, 3 === (g = e.tokenize(f, g)).length && ((d = [1, 1]).push.apply(d, i(g[1], e.languages.javascript, "javascript")), g.splice.apply(g, d)), d = new e.Token("interpolation", g, r.alias, f), g = y.substring(b + s.length), f = [], l && f.push(l), f.push(d), g && (t(y = [g]), f.push.apply(f, y)), "string" == typeof h ? (n.splice.apply(n, [o, 1].concat(f)), o += f.length - 1) : h.content = f)) : Array.isArray(b = h.content) ? t(b) : t([b])
                                }
                            }(l), new e.Token(s, l, "language-" + s, t)
                        }(u, p, d))) : t(c) : "string" != typeof c && t([c]))
                    }
                }(t.tokens)
            })
        }(Y), Y.languages.typescript = Y.languages.extend("javascript", {
            "class-name": {
                pattern: /(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,
                lookbehind: !0,
                greedy: !0,
                inside: null
            }, builtin: /\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/
        }), Y.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/, /\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/, /\btype\b(?=\s*(?:[\{*]|$))/), delete Y.languages.typescript.parameter, delete Y.languages.typescript["literal-property"], b = Y.languages.extend("typescript", {}), delete b["class-name"], Y.languages.typescript["class-name"].inside = b, Y.languages.insertBefore("typescript", "function", {
            decorator: {
                pattern: /@[$\w\xA0-\uFFFF]+/,
                inside: {at: {pattern: /^@/, alias: "operator"}, function: /^[\s\S]+/}
            },
            "generic-function": {
                pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,
                greedy: !0,
                inside: {
                    function: /^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,
                    generic: {pattern: /<[\s\S]+/, alias: "class-name", inside: b}
                }
            }
        }), Y.languages.ts = Y.languages.typescript, h = Y.languages.javascript, v = "(@(?:arg|argument|param|property)\\s+(?:" + (m = /\{(?:[^{}]|\{(?:[^{}]|\{[^{}]*\})*\})+\}/.source) + "\\s+)?)", Y.languages.jsdoc = Y.languages.extend("javadoclike", {
            parameter: {
                pattern: RegExp(v + /(?:(?!\s)[$\w\xA0-\uFFFF.])+(?=\s|$)/.source),
                lookbehind: !0,
                inside: {punctuation: /\./}
            }
        }), Y.languages.insertBefore("jsdoc", "keyword", {
            "optional-parameter": {
                pattern: RegExp(v + /\[(?:(?!\s)[$\w\xA0-\uFFFF.])+(?:=[^[\]]+)?\](?=\s|$)/.source),
                lookbehind: !0,
                inside: {
                    parameter: {pattern: /(^\[)[$\w\xA0-\uFFFF\.]+/, lookbehind: !0, inside: {punctuation: /\./}},
                    code: {pattern: /(=)[\s\S]*(?=\]$)/, lookbehind: !0, inside: h, alias: "language-javascript"},
                    punctuation: /[=[\]]/
                }
            },
            "class-name": [{
                pattern: RegExp(/(@(?:augments|class|extends|interface|memberof!?|template|this|typedef)\s+(?:<TYPE>\s+)?)[A-Z]\w*(?:\.[A-Z]\w*)*/.source.replace(/<TYPE>/g, function () {
                    return m
                })), lookbehind: !0, inside: {punctuation: /\./}
            }, {
                pattern: RegExp("(@[a-z]+\\s+)" + m),
                lookbehind: !0,
                inside: {
                    string: h.string,
                    number: h.number,
                    boolean: h.boolean,
                    keyword: Y.languages.typescript.keyword,
                    operator: /=>|\.\.\.|[&|?:*]/,
                    punctuation: /[.,;=<>{}()[\]]/
                }
            }],
            example: {
                pattern: /(@example\s+(?!\s))(?:[^@\s]|\s+(?!\s))+?(?=\s*(?:\*\s*)?(?:@\w|\*\/))/,
                lookbehind: !0,
                inside: {
                    code: {
                        pattern: /^([\t ]*(?:\*\s*)?)\S.*$/m,
                        lookbehind: !0,
                        inside: h,
                        alias: "language-javascript"
                    }
                }
            }
        }), Y.languages.javadoclike.addSupport("javascript", Y.languages.jsdoc), Y.languages.flow = Y.languages.extend("javascript", {}), Y.languages.insertBefore("flow", "keyword", {
            type: [{
                pattern: /\b(?:[Bb]oolean|Function|[Nn]umber|[Ss]tring|[Ss]ymbol|any|mixed|null|void)\b/,
                alias: "class-name"
            }]
        }), Y.languages.flow["function-variable"].pattern = /(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=\s*(?:function\b|(?:\([^()]*\)(?:\s*:\s*\w+)?|(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/i, delete Y.languages.flow.parameter, Y.languages.insertBefore("flow", "operator", {
            "flow-punctuation": {
                pattern: /\{\||\|\}/,
                alias: "punctuation"
            }
        }), Array.isArray(Y.languages.flow.keyword) || (Y.languages.flow.keyword = [Y.languages.flow.keyword]), Y.languages.flow.keyword.unshift({
            pattern: /(^|[^$]\b)(?:Class|declare|opaque|type)\b(?!\$)/,
            lookbehind: !0
        }, {
            pattern: /(^|[^$]\B)\$(?:Diff|Enum|Exact|Keys|ObjMap|PropertyType|Record|Shape|Subtype|Supertype|await)\b(?!\$)/,
            lookbehind: !0
        }), Y.languages.n4js = Y.languages.extend("javascript", {keyword: /\b(?:Array|any|boolean|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|false|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|module|new|null|number|package|private|protected|public|return|set|static|string|super|switch|this|throw|true|try|typeof|var|void|while|with|yield)\b/}), Y.languages.insertBefore("n4js", "constant", {
            annotation: {
                pattern: /@+\w+/,
                alias: "operator"
            }
        }), Y.languages.n4jsd = Y.languages.n4js, function (e) {
            function t(e, t) {
                return RegExp(e.replace(/<ID>/g, function () {
                    return /(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/.source
                }), t)
            }

            e.languages.insertBefore("javascript", "function-variable", {
                "method-variable": {
                    pattern: RegExp("(\\.\\s*)" + e.languages.javascript["function-variable"].pattern.source),
                    lookbehind: !0,
                    alias: ["function-variable", "method", "function", "property-access"]
                }
            }), e.languages.insertBefore("javascript", "function", {
                method: {
                    pattern: RegExp("(\\.\\s*)" + e.languages.javascript.function.source),
                    lookbehind: !0,
                    alias: ["function", "property-access"]
                }
            }), e.languages.insertBefore("javascript", "constant", {
                "known-class-name": [{
                    pattern: /\b(?:(?:Float(?:32|64)|(?:Int|Uint)(?:8|16|32)|Uint8Clamped)?Array|ArrayBuffer|BigInt|Boolean|DataView|Date|Error|Function|Intl|JSON|(?:Weak)?(?:Map|Set)|Math|Number|Object|Promise|Proxy|Reflect|RegExp|String|Symbol|WebAssembly)\b/,
                    alias: "class-name"
                }, {pattern: /\b(?:[A-Z]\w*)Error\b/, alias: "class-name"}]
            }), e.languages.insertBefore("javascript", "keyword", {
                imports: {
                    pattern: t(/(\bimport\b\s*)(?:<ID>(?:\s*,\s*(?:\*\s*as\s+<ID>|\{[^{}]*\}))?|\*\s*as\s+<ID>|\{[^{}]*\})(?=\s*\bfrom\b)/.source),
                    lookbehind: !0,
                    inside: e.languages.javascript
                },
                exports: {
                    pattern: t(/(\bexport\b\s*)(?:\*(?:\s*as\s+<ID>)?(?=\s*\bfrom\b)|\{[^{}]*\})/.source),
                    lookbehind: !0,
                    inside: e.languages.javascript
                }
            }), e.languages.javascript.keyword.unshift({
                pattern: /\b(?:as|default|export|from|import)\b/,
                alias: "module"
            }, {
                pattern: /\b(?:await|break|catch|continue|do|else|finally|for|if|return|switch|throw|try|while|yield)\b/,
                alias: "control-flow"
            }, {pattern: /\bnull\b/, alias: ["null", "nil"]}, {
                pattern: /\bundefined\b/,
                alias: "nil"
            }), e.languages.insertBefore("javascript", "operator", {
                spread: {pattern: /\.{3}/, alias: "operator"},
                arrow: {pattern: /=>/, alias: "operator"}
            }), e.languages.insertBefore("javascript", "punctuation", {
                "property-access": {
                    pattern: t(/(\.\s*)#?<ID>/.source),
                    lookbehind: !0
                },
                "maybe-class-name": {pattern: /(^|[^$\w\xA0-\uFFFF])[A-Z][$\w\xA0-\uFFFF]+/, lookbehind: !0},
                dom: {
                    pattern: /\b(?:document|(?:local|session)Storage|location|navigator|performance|window)\b/,
                    alias: "variable"
                },
                console: {pattern: /\bconsole(?=\s*\.)/, alias: "class-name"}
            });
            for (var n = ["function", "function-variable", "method", "method-variable", "property-access"], r = 0; r < n.length; r++) {
                var a = n[r], o = e.languages.javascript[a],
                    a = (o = "RegExp" === e.util.type(o) ? e.languages.javascript[a] = {pattern: o} : o).inside || {};
                (o.inside = a)["maybe-class-name"] = /^[A-Z][\s\S]*/
            }
        }(Y), function (e) {
            var t = e.util.clone(e.languages.javascript), n = /(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source,
                r = /(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source,
                a = /(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;

            function o(e, t) {
                return RegExp(e = e.replace(/<S>/g, function () {
                    return n
                }).replace(/<BRACES>/g, function () {
                    return r
                }).replace(/<SPREAD>/g, function () {
                    return a
                }), t)
            }

            a = o(a).source, e.languages.jsx = e.languages.extend("markup", t), e.languages.jsx.tag.pattern = o(/<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source), e.languages.jsx.tag.inside.tag.pattern = /^<\/?[^\s>\/]*/, e.languages.jsx.tag.inside["attr-value"].pattern = /=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/, e.languages.jsx.tag.inside.tag.inside["class-name"] = /^[A-Z]\w*(?:\.[A-Z]\w*)*$/, e.languages.jsx.tag.inside.comment = t.comment, e.languages.insertBefore("inside", "attr-name", {
                spread: {
                    pattern: o(/<SPREAD>/.source),
                    inside: e.languages.jsx
                }
            }, e.languages.jsx.tag), e.languages.insertBefore("inside", "special-attr", {
                script: {
                    pattern: o(/=<BRACES>/.source),
                    alias: "language-javascript",
                    inside: {"script-punctuation": {pattern: /^=(?=\{)/, alias: "punctuation"}, rest: e.languages.jsx}
                }
            }, e.languages.jsx.tag);
            var s = function (e) {
                return e ? "string" == typeof e ? e : "string" == typeof e.content ? e.content : e.content.map(s).join("") : ""
            };
            e.hooks.add("after-tokenize", function (t) {
                "jsx" !== t.language && "tsx" !== t.language || function t(n) {
                    for (var r = [], a = 0; a < n.length; a++) {
                        var o = n[a], i = !1;
                        "string" != typeof o && ("tag" === o.type && o.content[0] && "tag" === o.content[0].type ? "</" === o.content[0].content[0].content ? 0 < r.length && r[r.length - 1].tagName === s(o.content[0].content[1]) && r.pop() : "/>" !== o.content[o.content.length - 1].content && r.push({
                            tagName: s(o.content[0].content[1]),
                            openedBraces: 0
                        }) : 0 < r.length && "punctuation" === o.type && "{" === o.content ? r[r.length - 1].openedBraces++ : 0 < r.length && 0 < r[r.length - 1].openedBraces && "punctuation" === o.type && "}" === o.content ? r[r.length - 1].openedBraces-- : i = !0), (i || "string" == typeof o) && 0 < r.length && 0 === r[r.length - 1].openedBraces && (i = s(o), a < n.length - 1 && ("string" == typeof n[a + 1] || "plain-text" === n[a + 1].type) && (i += s(n[a + 1]), n.splice(a + 1, 1)), 0 < a && ("string" == typeof n[a - 1] || "plain-text" === n[a - 1].type) && (i = s(n[a - 1]) + i, n.splice(a - 1, 1), a--), n[a] = new e.Token("plain-text", i, null, i)), o.content && "string" != typeof o.content && t(o.content)
                    }
                }(t.tokens)
            })
        }(Y), x = Y.util.clone(Y.languages.typescript), (Y.languages.tsx = Y.languages.extend("jsx", x), delete Y.languages.tsx.parameter, delete Y.languages.tsx["literal-property"], x = Y.languages.tsx.tag).pattern = RegExp(/(^|[^\w$]|(?=<\/))/.source + "(?:" + x.pattern.source + ")", x.pattern.flags), x.lookbehind = !0, Y.languages.swift = {
            comment: {
                pattern: /(^|[^\\:])(?:\/\/.*|\/\*(?:[^/*]|\/(?!\*)|\*(?!\/)|\/\*(?:[^*]|\*(?!\/))*\*\/)*\*\/)/,
                lookbehind: !0,
                greedy: !0
            },
            "string-literal": [{
                pattern: RegExp(/(^|[^"#])/.source + "(?:" + /"(?:\\(?:\((?:[^()]|\([^()]*\))*\)|\r\n|[^(])|[^\\\r\n"])*"/.source + "|" + /"""(?:\\(?:\((?:[^()]|\([^()]*\))*\)|[^(])|[^\\"]|"(?!""))*"""/.source + ")" + /(?!["#])/.source),
                lookbehind: !0,
                greedy: !0,
                inside: {
                    interpolation: {pattern: /(\\\()(?:[^()]|\([^()]*\))*(?=\))/, lookbehind: !0, inside: null},
                    "interpolation-punctuation": {pattern: /^\)|\\\($/, alias: "punctuation"},
                    punctuation: /\\(?=[\r\n])/,
                    string: /[\s\S]+/
                }
            }, {
                pattern: RegExp(/(^|[^"#])(#+)/.source + "(?:" + /"(?:\\(?:#+\((?:[^()]|\([^()]*\))*\)|\r\n|[^#])|[^\\\r\n])*?"/.source + "|" + /"""(?:\\(?:#+\((?:[^()]|\([^()]*\))*\)|[^#])|[^\\])*?"""/.source + ")\\2"),
                lookbehind: !0,
                greedy: !0,
                inside: {
                    interpolation: {pattern: /(\\#+\()(?:[^()]|\([^()]*\))*(?=\))/, lookbehind: !0, inside: null},
                    "interpolation-punctuation": {pattern: /^\)|\\#+\($/, alias: "punctuation"},
                    string: /[\s\S]+/
                }
            }],
            directive: {
                pattern: RegExp(/#/.source + "(?:" + /(?:elseif|if)\b/.source + "(?:[ 	]*" + /(?:![ \t]*)?(?:\b\w+\b(?:[ \t]*\((?:[^()]|\([^()]*\))*\))?|\((?:[^()]|\([^()]*\))*\))(?:[ \t]*(?:&&|\|\|))?/.source + ")+|" + /(?:else|endif)\b/.source + ")"),
                alias: "property",
                inside: {
                    "directive-name": /^#\w+/,
                    boolean: /\b(?:false|true)\b/,
                    number: /\b\d+(?:\.\d+)*\b/,
                    operator: /!|&&|\|\||[<>]=?/,
                    punctuation: /[(),]/
                }
            },
            literal: {
                pattern: /#(?:colorLiteral|column|dsohandle|file(?:ID|Literal|Path)?|function|imageLiteral|line)\b/,
                alias: "constant"
            },
            "other-directive": {pattern: /#\w+\b/, alias: "property"},
            attribute: {pattern: /@\w+/, alias: "atrule"},
            "function-definition": {pattern: /(\bfunc\s+)\w+/, lookbehind: !0, alias: "function"},
            label: {
                pattern: /\b(break|continue)\s+\w+|\b[a-zA-Z_]\w*(?=\s*:\s*(?:for|repeat|while)\b)/,
                lookbehind: !0,
                alias: "important"
            },
            keyword: /\b(?:Any|Protocol|Self|Type|actor|as|assignment|associatedtype|associativity|async|await|break|case|catch|class|continue|convenience|default|defer|deinit|didSet|do|dynamic|else|enum|extension|fallthrough|fileprivate|final|for|func|get|guard|higherThan|if|import|in|indirect|infix|init|inout|internal|is|isolated|lazy|left|let|lowerThan|mutating|none|nonisolated|nonmutating|open|operator|optional|override|postfix|precedencegroup|prefix|private|protocol|public|repeat|required|rethrows|return|right|safe|self|set|some|static|struct|subscript|super|switch|throw|throws|try|typealias|unowned|unsafe|var|weak|where|while|willSet)\b/,
            boolean: /\b(?:false|true)\b/,
            nil: {pattern: /\bnil\b/, alias: "constant"},
            "short-argument": /\$\d+\b/,
            omit: {pattern: /\b_\b/, alias: "keyword"},
            number: /\b(?:[\d_]+(?:\.[\de_]+)?|0x[a-f0-9_]+(?:\.[a-f0-9p_]+)?|0b[01_]+|0o[0-7_]+)\b/i,
            "class-name": /\b[A-Z](?:[A-Z_\d]*[a-z]\w*)?\b/,
            function: /\b[a-z_]\w*(?=\s*\()/i,
            constant: /\b(?:[A-Z_]{2,}|k[A-Z][A-Za-z_]+)\b/,
            operator: /[-+*/%=!<>&|^~?]+|\.[.\-+*/%=!<>&|^~?]+/,
            punctuation: /[{}[\]();,.:\\]/
        }, Y.languages.swift["string-literal"].forEach(function (e) {
            e.inside.interpolation.inside = Y.languages.swift
        }), Y.languages.kotlin = Y.languages.extend("clike", {
            keyword: {
                pattern: /(^|[^.])\b(?:abstract|actual|annotation|as|break|by|catch|class|companion|const|constructor|continue|crossinline|data|do|dynamic|else|enum|expect|external|final|finally|for|fun|get|if|import|in|infix|init|inline|inner|interface|internal|is|lateinit|noinline|null|object|open|operator|out|override|package|private|protected|public|reified|return|sealed|set|super|suspend|tailrec|this|throw|to|try|typealias|val|var|vararg|when|where|while)\b/,
                lookbehind: !0
            },
            function: [{
                pattern: /(?:`[^\r\n`]+`|\b\w+)(?=\s*\()/,
                greedy: !0
            }, {pattern: /(\.)(?:`[^\r\n`]+`|\w+)(?=\s*\{)/, lookbehind: !0, greedy: !0}],
            number: /\b(?:0[xX][\da-fA-F]+(?:_[\da-fA-F]+)*|0[bB][01]+(?:_[01]+)*|\d+(?:_\d+)*(?:\.\d+(?:_\d+)*)?(?:[eE][+-]?\d+(?:_\d+)*)?[fFL]?)\b/,
            operator: /\+[+=]?|-[-=>]?|==?=?|!(?:!|==?)?|[\/*%<>]=?|[?:]:?|\.\.|&&|\|\||\b(?:and|inv|or|shl|shr|ushr|xor)\b/
        }), delete Y.languages.kotlin["class-name"], w = {
            "interpolation-punctuation": {
                pattern: /^\$\{?|\}$/,
                alias: "punctuation"
            }, expression: {pattern: /[\s\S]+/, inside: Y.languages.kotlin}
        }, Y.languages.insertBefore("kotlin", "string", {
            "string-literal": [{
                pattern: /"""(?:[^$]|\$(?:(?!\{)|\{[^{}]*\}))*?"""/,
                alias: "multiline",
                inside: {interpolation: {pattern: /\$(?:[a-z_]\w*|\{[^{}]*\})/i, inside: w}, string: /[\s\S]+/}
            }, {
                pattern: /"(?:[^"\\\r\n$]|\\.|\$(?:(?!\{)|\{[^{}]*\}))*"/,
                alias: "singleline",
                inside: {
                    interpolation: {
                        pattern: /((?:^|[^\\])(?:\\{2})*)\$(?:[a-z_]\w*|\{[^{}]*\})/i,
                        lookbehind: !0,
                        inside: w
                    }, string: /[\s\S]+/
                }
            }], char: {pattern: /'(?:[^'\\\r\n]|\\(?:.|u[a-fA-F0-9]{0,4}))'/, greedy: !0}
        }), delete Y.languages.kotlin.string, Y.languages.insertBefore("kotlin", "keyword", {
            annotation: {
                pattern: /\B@(?:\w+:)?(?:[A-Z]\w*|\[[^\]]+\])/,
                alias: "builtin"
            }
        }), Y.languages.insertBefore("kotlin", "function", {
            label: {
                pattern: /\b\w+@|@\w+\b/,
                alias: "symbol"
            }
        }), Y.languages.kt = Y.languages.kotlin, Y.languages.kts = Y.languages.kotlin, Y.languages.c = Y.languages.extend("clike", {
            comment: {
                pattern: /\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/,
                greedy: !0
            },
            string: {pattern: /"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/, greedy: !0},
            "class-name": {
                pattern: /(\b(?:enum|struct)\s+(?:__attribute__\s*\(\([\s\S]*?\)\)\s*)?)\w+|\b[a-z]\w*_t\b/,
                lookbehind: !0
            },
            keyword: /\b(?:_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|__attribute__|asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|inline|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|typeof|union|unsigned|void|volatile|while)\b/,
            function: /\b[a-z_]\w*(?=\s*\()/i,
            number: /(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ful]{0,4}/i,
            operator: />>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/
        }), Y.languages.insertBefore("c", "string", {
            char: {
                pattern: /'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n]){0,32}'/,
                greedy: !0
            }
        }), Y.languages.insertBefore("c", "string", {
            macro: {
                pattern: /(^[\t ]*)#\s*[a-z](?:[^\r\n\\/]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|\\(?:\r\n|[\s\S]))*/im,
                lookbehind: !0,
                greedy: !0,
                alias: "property",
                inside: {
                    string: [{pattern: /^(#\s*include\s*)<[^>]+>/, lookbehind: !0}, Y.languages.c.string],
                    char: Y.languages.c.char,
                    comment: Y.languages.c.comment,
                    "macro-name": [{
                        pattern: /(^#\s*define\s+)\w+\b(?!\()/i,
                        lookbehind: !0
                    }, {pattern: /(^#\s*define\s+)\w+\b(?=\()/i, lookbehind: !0, alias: "function"}],
                    directive: {pattern: /^(#\s*)[a-z]+/, lookbehind: !0, alias: "keyword"},
                    "directive-hash": /^#/,
                    punctuation: /##|\\(?=[\r\n])/,
                    expression: {pattern: /\S[\s\S]*/, inside: Y.languages.c}
                }
            }
        }), Y.languages.insertBefore("c", "function", {constant: /\b(?:EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|__DATE__|__FILE__|__LINE__|__TIMESTAMP__|__TIME__|__func__|stderr|stdin|stdout)\b/}), delete Y.languages.c.boolean, Y.languages.objectivec = Y.languages.extend("c", {
            string: {
                pattern: /@?"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,
                greedy: !0
            },
            keyword: /\b(?:asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|in|inline|int|long|register|return|self|short|signed|sizeof|static|struct|super|switch|typedef|typeof|union|unsigned|void|volatile|while)\b|(?:@interface|@end|@implementation|@protocol|@class|@public|@protected|@private|@property|@try|@catch|@finally|@throw|@synthesize|@dynamic|@selector)\b/,
            operator: /-[->]?|\+\+?|!=?|<<?=?|>>?=?|==?|&&?|\|\|?|[~^%?*\/@]/
        }), delete Y.languages.objectivec["class-name"], Y.languages.objc = Y.languages.objectivec, Y.languages.reason = Y.languages.extend("clike", {
            string: {
                pattern: /"(?:\\(?:\r\n|[\s\S])|[^\\\r\n"])*"/,
                greedy: !0
            },
            "class-name": /\b[A-Z]\w*/,
            keyword: /\b(?:and|as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|method|module|mutable|new|nonrec|object|of|open|or|private|rec|sig|struct|switch|then|to|try|type|val|virtual|when|while|with)\b/,
            operator: /\.{3}|:[:=]|\|>|->|=(?:==?|>)?|<=?|>=?|[|^?'#!~`]|[+\-*\/]\.?|\b(?:asr|land|lor|lsl|lsr|lxor|mod)\b/
        }), Y.languages.insertBefore("reason", "class-name", {
            char: {
                pattern: /'(?:\\x[\da-f]{2}|\\o[0-3][0-7][0-7]|\\\d{3}|\\.|[^'\\\r\n])'/,
                greedy: !0
            }, constructor: /\b[A-Z]\w*\b(?!\s*\.)/, label: {pattern: /\b[a-z]\w*(?=::)/, alias: "symbol"}
        }),delete Y.languages.reason.function,function (e) {
            for (var t = /\/\*(?:[^*/]|\*(?!\/)|\/(?!\*)|<self>)*\*\//.source, n = 0; n < 2; n++) t = t.replace(/<self>/g, function () {
                return t
            });
            t = t.replace(/<self>/g, function () {
                return /[^\s\S]/.source
            }), e.languages.rust = {
                comment: [{
                    pattern: RegExp(/(^|[^\\])/.source + t),
                    lookbehind: !0,
                    greedy: !0
                }, {pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0}],
                string: {pattern: /b?"(?:\\[\s\S]|[^\\"])*"|b?r(#*)"(?:[^"]|"(?!\1))*"\1/, greedy: !0},
                char: {pattern: /b?'(?:\\(?:x[0-7][\da-fA-F]|u\{(?:[\da-fA-F]_*){1,6}\}|.)|[^\\\r\n\t'])'/, greedy: !0},
                attribute: {
                    pattern: /#!?\[(?:[^\[\]"]|"(?:\\[\s\S]|[^\\"])*")*\]/,
                    greedy: !0,
                    alias: "attr-name",
                    inside: {string: null}
                },
                "closure-params": {
                    pattern: /([=(,:]\s*|\bmove\s*)\|[^|]*\||\|[^|]*\|(?=\s*(?:\{|->))/,
                    lookbehind: !0,
                    greedy: !0,
                    inside: {"closure-punctuation": {pattern: /^\||\|$/, alias: "punctuation"}, rest: null}
                },
                "lifetime-annotation": {pattern: /'\w+/, alias: "symbol"},
                "fragment-specifier": {pattern: /(\$\w+:)[a-z]+/, lookbehind: !0, alias: "punctuation"},
                variable: /\$\w+/,
                "function-definition": {pattern: /(\bfn\s+)\w+/, lookbehind: !0, alias: "function"},
                "type-definition": {
                    pattern: /(\b(?:enum|struct|trait|type|union)\s+)\w+/,
                    lookbehind: !0,
                    alias: "class-name"
                },
                "module-declaration": [{
                    pattern: /(\b(?:crate|mod)\s+)[a-z][a-z_\d]*/,
                    lookbehind: !0,
                    alias: "namespace"
                }, {
                    pattern: /(\b(?:crate|self|super)\s*)::\s*[a-z][a-z_\d]*\b(?:\s*::(?:\s*[a-z][a-z_\d]*\s*::)*)?/,
                    lookbehind: !0,
                    alias: "namespace",
                    inside: {punctuation: /::/}
                }],
                keyword: [/\b(?:Self|abstract|as|async|await|become|box|break|const|continue|crate|do|dyn|else|enum|extern|final|fn|for|if|impl|in|let|loop|macro|match|mod|move|mut|override|priv|pub|ref|return|self|static|struct|super|trait|try|type|typeof|union|unsafe|unsized|use|virtual|where|while|yield)\b/, /\b(?:bool|char|f(?:32|64)|[ui](?:8|16|32|64|128|size)|str)\b/],
                function: /\b[a-z_]\w*(?=\s*(?:::\s*<|\())/,
                macro: {pattern: /\b\w+!/, alias: "property"},
                constant: /\b[A-Z_][A-Z_\d]+\b/,
                "class-name": /\b[A-Z]\w*\b/,
                namespace: {
                    pattern: /(?:\b[a-z][a-z_\d]*\s*::\s*)*\b[a-z][a-z_\d]*\s*::(?!\s*<)/,
                    inside: {punctuation: /::/}
                },
                number: /\b(?:0x[\dA-Fa-f](?:_?[\dA-Fa-f])*|0o[0-7](?:_?[0-7])*|0b[01](?:_?[01])*|(?:(?:\d(?:_?\d)*)?\.)?\d(?:_?\d)*(?:[Ee][+-]?\d+)?)(?:_?(?:f32|f64|[iu](?:8|16|32|64|size)?))?\b/,
                boolean: /\b(?:false|true)\b/,
                punctuation: /->|\.\.=|\.{1,3}|::|[{}[\];(),:]/,
                operator: /[-+*\/%!^]=?|=[=>]?|&[&=]?|\|[|=]?|<<?=?|>>?=?|[@?]/
            }, e.languages.rust["closure-params"].inside.rest = e.languages.rust, e.languages.rust.attribute.inside.string = e.languages.rust.string
        }(Y),Y.languages.go = Y.languages.extend("clike", {
            string: {
                pattern: /(^|[^\\])"(?:\\.|[^"\\\r\n])*"|`[^`]*`/,
                lookbehind: !0,
                greedy: !0
            },
            keyword: /\b(?:break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go(?:to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)\b/,
            boolean: /\b(?:_|false|iota|nil|true)\b/,
            number: [/\b0(?:b[01_]+|o[0-7_]+)i?\b/i, /\b0x(?:[a-f\d_]+(?:\.[a-f\d_]*)?|\.[a-f\d_]+)(?:p[+-]?\d+(?:_\d+)*)?i?(?!\w)/i, /(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?[\d_]+)?i?(?!\w)/i],
            operator: /[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./,
            builtin: /\b(?:append|bool|byte|cap|close|complex|complex(?:64|128)|copy|delete|error|float(?:32|64)|u?int(?:8|16|32|64)?|imag|len|make|new|panic|print(?:ln)?|real|recover|rune|string|uintptr)\b/
        }),Y.languages.insertBefore("go", "string", {
            char: {
                pattern: /'(?:\\.|[^'\\\r\n]){0,10}'/,
                greedy: !0
            }
        }),delete Y.languages.go["class-name"],k = /\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|char8_t|class|co_await|co_return|co_yield|compl|concept|const|const_cast|consteval|constexpr|constinit|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|final|float|for|friend|goto|if|import|inline|int|int16_t|int32_t|int64_t|int8_t|long|module|mutable|namespace|new|noexcept|nullptr|operator|override|private|protected|public|register|reinterpret_cast|requires|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|uint16_t|uint32_t|uint64_t|uint8_t|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/,E = /\b(?!<keyword>)\w+(?:\s*\.\s*\w+)*\b/.source.replace(/<keyword>/g, function () {
            return k.source
        }),Y.languages.cpp = Y.languages.extend("c", {
            "class-name": [{
                pattern: RegExp(/(\b(?:class|concept|enum|struct|typename)\s+)(?!<keyword>)\w+/.source.replace(/<keyword>/g, function () {
                    return k.source
                })), lookbehind: !0
            }, /\b[A-Z]\w*(?=\s*::\s*\w+\s*\()/, /\b[A-Z_]\w*(?=\s*::\s*~\w+\s*\()/i, /\b\w+(?=\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>\s*::\s*\w+\s*\()/],
            keyword: k,
            number: {
                pattern: /(?:\b0b[01']+|\b0x(?:[\da-f']+(?:\.[\da-f']*)?|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+(?:\.[\d']*)?|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]{0,4}/i,
                greedy: !0
            },
            operator: />>=?|<<=?|->|--|\+\+|&&|\|\||[?:~]|<=>|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/,
            boolean: /\b(?:false|true)\b/
        }),Y.languages.insertBefore("cpp", "string", {
            module: {
                pattern: RegExp(/(\b(?:import|module)\s+)/.source + "(?:" + /"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|<[^<>\r\n]*>/.source + "|" + /<mod-name>(?:\s*:\s*<mod-name>)?|:\s*<mod-name>/.source.replace(/<mod-name>/g, function () {
                    return E
                }) + ")"),
                lookbehind: !0,
                greedy: !0,
                inside: {string: /^[<"][\s\S]+/, operator: /:/, punctuation: /\./}
            }, "raw-string": {pattern: /R"([^()\\ ]{0,16})\([\s\S]*?\)\1"/, alias: "string", greedy: !0}
        }),Y.languages.insertBefore("cpp", "keyword", {
            "generic-function": {
                pattern: /\b(?!operator\b)[a-z_]\w*\s*<(?:[^<>]|<[^<>]*>)*>(?=\s*\()/i,
                inside: {function: /^\w+/, generic: {pattern: /<[\s\S]+/, alias: "class-name", inside: Y.languages.cpp}}
            }
        }),Y.languages.insertBefore("cpp", "operator", {
            "double-colon": {
                pattern: /::/,
                alias: "punctuation"
            }
        }),Y.languages.insertBefore("cpp", "class-name", {
            "base-clause": {
                pattern: /(\b(?:class|struct)\s+\w+\s*:\s*)[^;{}"'\s]+(?:\s+[^;{}"'\s]+)*(?=\s*[;{])/,
                lookbehind: !0,
                greedy: !0,
                inside: Y.languages.extend("cpp", {})
            }
        }),Y.languages.insertBefore("inside", "double-colon", {"class-name": /\b[a-z_]\w*\b(?!\s*::)/i}, Y.languages.cpp["base-clause"]),Y.languages.python = {
            comment: {pattern: /(^|[^\\])#.*/, lookbehind: !0, greedy: !0},
            "string-interpolation": {
                pattern: /(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,
                greedy: !0,
                inside: {
                    interpolation: {
                        pattern: /((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,
                        lookbehind: !0,
                        inside: {
                            "format-spec": {pattern: /(:)[^:(){}]+(?=\}$)/, lookbehind: !0},
                            "conversion-option": {pattern: /![sra](?=[:}]$)/, alias: "punctuation"},
                            rest: null
                        }
                    }, string: /[\s\S]+/
                }
            },
            "triple-quoted-string": {pattern: /(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i, greedy: !0, alias: "string"},
            string: {pattern: /(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i, greedy: !0},
            function: {pattern: /((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g, lookbehind: !0},
            "class-name": {pattern: /(\bclass\s+)\w+/i, lookbehind: !0},
            decorator: {
                pattern: /(^[\t ]*)@\w+(?:\.\w+)*/m,
                lookbehind: !0,
                alias: ["annotation", "punctuation"],
                inside: {punctuation: /\./}
            },
            keyword: /\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,
            builtin: /\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,
            boolean: /\b(?:False|None|True)\b/,
            number: /\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,
            operator: /[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,
            punctuation: /[{}[\];(),.:]/
        },Y.languages.python["string-interpolation"].inside.interpolation.inside.rest = Y.languages.python,Y.languages.py = Y.languages.python,((e, t) => {
            for (var n in t) D(e, n, {get: t[n], enumerable: !0})
        })({}, {
            dracula: () => K,
            duotoneDark: () => X,
            duotoneLight: () => J,
            github: () => Q,
            jettwaveDark: () => ed,
            jettwaveLight: () => eg,
            nightOwl: () => ee,
            nightOwlLight: () => et,
            oceanicNext: () => ea,
            okaidia: () => eo,
            oneDark: () => ef,
            oneLight: () => ey,
            palenight: () => es,
            shadesOfPurple: () => ei,
            synthwave84: () => el,
            ultramin: () => ec,
            vsDark: () => eu,
            vsLight: () => ep
        });
        var K = {
            plain: {color: "#F8F8F2", backgroundColor: "#282A36"},
            styles: [{
                types: ["prolog", "constant", "builtin"],
                style: {color: "rgb(189, 147, 249)"}
            }, {types: ["inserted", "function"], style: {color: "rgb(80, 250, 123)"}}, {
                types: ["deleted"],
                style: {color: "rgb(255, 85, 85)"}
            }, {types: ["changed"], style: {color: "rgb(255, 184, 108)"}}, {
                types: ["punctuation", "symbol"],
                style: {color: "rgb(248, 248, 242)"}
            }, {
                types: ["string", "char", "tag", "selector"],
                style: {color: "rgb(255, 121, 198)"}
            }, {
                types: ["keyword", "variable"],
                style: {color: "rgb(189, 147, 249)", fontStyle: "italic"}
            }, {types: ["comment"], style: {color: "rgb(98, 114, 164)"}}, {
                types: ["attr-name"],
                style: {color: "rgb(241, 250, 140)"}
            }]
        }, X = {
            plain: {backgroundColor: "#2a2734", color: "#9a86fd"},
            styles: [{
                types: ["comment", "prolog", "doctype", "cdata", "punctuation"],
                style: {color: "#6c6783"}
            }, {types: ["namespace"], style: {opacity: .7}}, {
                types: ["tag", "operator", "number"],
                style: {color: "#e09142"}
            }, {
                types: ["property", "function"],
                style: {color: "#9a86fd"}
            }, {types: ["tag-id", "selector", "atrule-id"], style: {color: "#eeebff"}}, {
                types: ["attr-name"],
                style: {color: "#c4b9fe"}
            }, {
                types: ["boolean", "string", "entity", "url", "attr-value", "keyword", "control", "directive", "unit", "statement", "regex", "atrule", "placeholder", "variable"],
                style: {color: "#ffcc99"}
            }, {types: ["deleted"], style: {textDecorationLine: "line-through"}}, {
                types: ["inserted"],
                style: {textDecorationLine: "underline"}
            }, {types: ["italic"], style: {fontStyle: "italic"}}, {
                types: ["important", "bold"],
                style: {fontWeight: "bold"}
            }, {types: ["important"], style: {color: "#c4b9fe"}}]
        }, J = {
            plain: {backgroundColor: "#faf8f5", color: "#728fcb"},
            styles: [{
                types: ["comment", "prolog", "doctype", "cdata", "punctuation"],
                style: {color: "#b6ad9a"}
            }, {types: ["namespace"], style: {opacity: .7}}, {
                types: ["tag", "operator", "number"],
                style: {color: "#063289"}
            }, {
                types: ["property", "function"],
                style: {color: "#b29762"}
            }, {types: ["tag-id", "selector", "atrule-id"], style: {color: "#2d2006"}}, {
                types: ["attr-name"],
                style: {color: "#896724"}
            }, {
                types: ["boolean", "string", "entity", "url", "attr-value", "keyword", "control", "directive", "unit", "statement", "regex", "atrule"],
                style: {color: "#728fcb"}
            }, {types: ["placeholder", "variable"], style: {color: "#93abdc"}}, {
                types: ["deleted"],
                style: {textDecorationLine: "line-through"}
            }, {types: ["inserted"], style: {textDecorationLine: "underline"}}, {
                types: ["italic"],
                style: {fontStyle: "italic"}
            }, {types: ["important", "bold"], style: {fontWeight: "bold"}}, {
                types: ["important"],
                style: {color: "#896724"}
            }]
        }, Q = {
            plain: {color: "#393A34", backgroundColor: "#f6f8fa"},
            styles: [{
                types: ["comment", "prolog", "doctype", "cdata"],
                style: {color: "#999988", fontStyle: "italic"}
            }, {types: ["namespace"], style: {opacity: .7}}, {
                types: ["string", "attr-value"],
                style: {color: "#e3116c"}
            }, {
                types: ["punctuation", "operator"],
                style: {color: "#393A34"}
            }, {
                types: ["entity", "url", "symbol", "number", "boolean", "variable", "constant", "property", "regex", "inserted"],
                style: {color: "#36acaa"}
            }, {
                types: ["atrule", "keyword", "attr-name", "selector"],
                style: {color: "#00a4db"}
            }, {types: ["function", "deleted", "tag"], style: {color: "#d73a49"}}, {
                types: ["function-variable"],
                style: {color: "#6f42c1"}
            }, {types: ["tag", "selector", "keyword"], style: {color: "#00009f"}}]
        }, ee = {
            plain: {color: "#d6deeb", backgroundColor: "#011627"},
            styles: [{
                types: ["changed"],
                style: {color: "rgb(162, 191, 252)", fontStyle: "italic"}
            }, {
                types: ["deleted"],
                style: {color: "rgba(239, 83, 80, 0.56)", fontStyle: "italic"}
            }, {
                types: ["inserted", "attr-name"],
                style: {color: "rgb(173, 219, 103)", fontStyle: "italic"}
            }, {
                types: ["comment"],
                style: {color: "rgb(99, 119, 119)", fontStyle: "italic"}
            }, {types: ["string", "url"], style: {color: "rgb(173, 219, 103)"}}, {
                types: ["variable"],
                style: {color: "rgb(214, 222, 235)"}
            }, {
                types: ["number"],
                style: {color: "rgb(247, 140, 108)"}
            }, {
                types: ["builtin", "char", "constant", "function"],
                style: {color: "rgb(130, 170, 255)"}
            }, {types: ["punctuation"], style: {color: "rgb(199, 146, 234)"}}, {
                types: ["selector", "doctype"],
                style: {color: "rgb(199, 146, 234)", fontStyle: "italic"}
            }, {types: ["class-name"], style: {color: "rgb(255, 203, 139)"}}, {
                types: ["tag", "operator", "keyword"],
                style: {color: "rgb(127, 219, 202)"}
            }, {types: ["boolean"], style: {color: "rgb(255, 88, 116)"}}, {
                types: ["property"],
                style: {color: "rgb(128, 203, 196)"}
            }, {types: ["namespace"], style: {color: "rgb(178, 204, 214)"}}]
        }, et = {
            plain: {color: "#403f53", backgroundColor: "#FBFBFB"},
            styles: [{
                types: ["changed"],
                style: {color: "rgb(162, 191, 252)", fontStyle: "italic"}
            }, {
                types: ["deleted"],
                style: {color: "rgba(239, 83, 80, 0.56)", fontStyle: "italic"}
            }, {
                types: ["inserted", "attr-name"],
                style: {color: "rgb(72, 118, 214)", fontStyle: "italic"}
            }, {
                types: ["comment"],
                style: {color: "rgb(152, 159, 177)", fontStyle: "italic"}
            }, {
                types: ["string", "builtin", "char", "constant", "url"],
                style: {color: "rgb(72, 118, 214)"}
            }, {types: ["variable"], style: {color: "rgb(201, 103, 101)"}}, {
                types: ["number"],
                style: {color: "rgb(170, 9, 130)"}
            }, {
                types: ["punctuation"],
                style: {color: "rgb(153, 76, 195)"}
            }, {
                types: ["function", "selector", "doctype"],
                style: {color: "rgb(153, 76, 195)", fontStyle: "italic"}
            }, {types: ["class-name"], style: {color: "rgb(17, 17, 17)"}}, {
                types: ["tag"],
                style: {color: "rgb(153, 76, 195)"}
            }, {
                types: ["operator", "property", "keyword", "namespace"],
                style: {color: "rgb(12, 150, 155)"}
            }, {types: ["boolean"], style: {color: "rgb(188, 84, 84)"}}]
        }, en = "#c5a5c5", er = "#8dc891", ea = {
            plain: {backgroundColor: "#282c34", color: "#ffffff"},
            styles: [{types: ["attr-name"], style: {color: en}}, {
                types: ["attr-value"],
                style: {color: er}
            }, {
                types: ["comment", "block-comment", "prolog", "doctype", "cdata", "shebang"],
                style: {color: "#999999"}
            }, {
                types: ["property", "number", "function-name", "constant", "symbol", "deleted"],
                style: {color: "#5a9bcf"}
            }, {types: ["boolean"], style: {color: "#ff8b50"}}, {
                types: ["tag"],
                style: {color: "#fc929e"}
            }, {types: ["string"], style: {color: er}}, {
                types: ["punctuation"],
                style: {color: er}
            }, {types: ["selector", "char", "builtin", "inserted"], style: {color: "#D8DEE9"}}, {
                types: ["function"],
                style: {color: "#79b6f2"}
            }, {types: ["operator", "entity", "url", "variable"], style: {color: "#d7deea"}}, {
                types: ["keyword"],
                style: {color: en}
            }, {types: ["atrule", "class-name"], style: {color: "#FAC863"}}, {
                types: ["important"],
                style: {fontWeight: "400"}
            }, {types: ["bold"], style: {fontWeight: "bold"}}, {
                types: ["italic"],
                style: {fontStyle: "italic"}
            }, {types: ["namespace"], style: {opacity: .7}}]
        }, eo = {
            plain: {color: "#f8f8f2", backgroundColor: "#272822"},
            styles: [{
                types: ["changed"],
                style: {color: "rgb(162, 191, 252)", fontStyle: "italic"}
            }, {types: ["deleted"], style: {color: "#f92672", fontStyle: "italic"}}, {
                types: ["inserted"],
                style: {color: "rgb(173, 219, 103)", fontStyle: "italic"}
            }, {types: ["comment"], style: {color: "#8292a2", fontStyle: "italic"}}, {
                types: ["string", "url"],
                style: {color: "#a6e22e"}
            }, {types: ["variable"], style: {color: "#f8f8f2"}}, {
                types: ["number"],
                style: {color: "#ae81ff"}
            }, {
                types: ["builtin", "char", "constant", "function", "class-name"],
                style: {color: "#e6db74"}
            }, {types: ["punctuation"], style: {color: "#f8f8f2"}}, {
                types: ["selector", "doctype"],
                style: {color: "#a6e22e", fontStyle: "italic"}
            }, {types: ["tag", "operator", "keyword"], style: {color: "#66d9ef"}}, {
                types: ["boolean"],
                style: {color: "#ae81ff"}
            }, {types: ["namespace"], style: {color: "rgb(178, 204, 214)", opacity: .7}}, {
                types: ["tag", "property"],
                style: {color: "#f92672"}
            }, {types: ["attr-name"], style: {color: "#a6e22e !important"}}, {
                types: ["doctype"],
                style: {color: "#8292a2"}
            }, {types: ["rule"], style: {color: "#e6db74"}}]
        }, es = {
            plain: {color: "#bfc7d5", backgroundColor: "#292d3e"},
            styles: [{
                types: ["comment"],
                style: {color: "rgb(105, 112, 152)", fontStyle: "italic"}
            }, {types: ["string", "inserted"], style: {color: "rgb(195, 232, 141)"}}, {
                types: ["number"],
                style: {color: "rgb(247, 140, 108)"}
            }, {
                types: ["builtin", "char", "constant", "function"],
                style: {color: "rgb(130, 170, 255)"}
            }, {types: ["punctuation", "selector"], style: {color: "rgb(199, 146, 234)"}}, {
                types: ["variable"],
                style: {color: "rgb(191, 199, 213)"}
            }, {types: ["class-name", "attr-name"], style: {color: "rgb(255, 203, 107)"}}, {
                types: ["tag", "deleted"],
                style: {color: "rgb(255, 85, 114)"}
            }, {types: ["operator"], style: {color: "rgb(137, 221, 255)"}}, {
                types: ["boolean"],
                style: {color: "rgb(255, 88, 116)"}
            }, {types: ["keyword"], style: {fontStyle: "italic"}}, {
                types: ["doctype"],
                style: {color: "rgb(199, 146, 234)", fontStyle: "italic"}
            }, {types: ["namespace"], style: {color: "rgb(178, 204, 214)"}}, {
                types: ["url"],
                style: {color: "rgb(221, 221, 221)"}
            }]
        }, ei = {
            plain: {color: "#9EFEFF", backgroundColor: "#2D2A55"},
            styles: [{types: ["changed"], style: {color: "rgb(255, 238, 128)"}}, {
                types: ["deleted"],
                style: {color: "rgba(239, 83, 80, 0.56)"}
            }, {types: ["inserted"], style: {color: "rgb(173, 219, 103)"}}, {
                types: ["comment"],
                style: {color: "rgb(179, 98, 255)", fontStyle: "italic"}
            }, {types: ["punctuation"], style: {color: "rgb(255, 255, 255)"}}, {
                types: ["constant"],
                style: {color: "rgb(255, 98, 140)"}
            }, {types: ["string", "url"], style: {color: "rgb(165, 255, 144)"}}, {
                types: ["variable"],
                style: {color: "rgb(255, 238, 128)"}
            }, {types: ["number", "boolean"], style: {color: "rgb(255, 98, 140)"}}, {
                types: ["attr-name"],
                style: {color: "rgb(255, 180, 84)"}
            }, {
                types: ["keyword", "operator", "property", "namespace", "tag", "selector", "doctype"],
                style: {color: "rgb(255, 157, 0)"}
            }, {types: ["builtin", "char", "constant", "function", "class-name"], style: {color: "rgb(250, 208, 0)"}}]
        }, el = {
            plain: {
                backgroundColor: "linear-gradient(to bottom, #2a2139 75%, #34294f)",
                backgroundImage: "#34294f",
                color: "#f92aad",
                textShadow: "0 0 2px #100c0f, 0 0 5px #dc078e33, 0 0 10px #fff3"
            },
            styles: [{
                types: ["comment", "block-comment", "prolog", "doctype", "cdata"],
                style: {color: "#495495", fontStyle: "italic"}
            }, {
                types: ["punctuation"],
                style: {color: "#ccc"}
            }, {
                types: ["tag", "attr-name", "namespace", "number", "unit", "hexcode", "deleted"],
                style: {color: "#e2777a"}
            }, {
                types: ["property", "selector"],
                style: {color: "#72f1b8", textShadow: "0 0 2px #100c0f, 0 0 10px #257c5575, 0 0 35px #21272475"}
            }, {types: ["function-name"], style: {color: "#6196cc"}}, {
                types: ["boolean", "selector-id", "function"],
                style: {
                    color: "#fdfdfd",
                    textShadow: "0 0 2px #001716, 0 0 3px #03edf975, 0 0 5px #03edf975, 0 0 8px #03edf975"
                }
            }, {
                types: ["class-name", "maybe-class-name", "builtin"],
                style: {
                    color: "#fff5f6",
                    textShadow: "0 0 2px #000, 0 0 10px #fc1f2c75, 0 0 5px #fc1f2c75, 0 0 25px #fc1f2c75"
                }
            }, {
                types: ["constant", "symbol"],
                style: {color: "#f92aad", textShadow: "0 0 2px #100c0f, 0 0 5px #dc078e33, 0 0 10px #fff3"}
            }, {
                types: ["important", "atrule", "keyword", "selector-class"],
                style: {color: "#f4eee4", textShadow: "0 0 2px #393a33, 0 0 8px #f39f0575, 0 0 2px #f39f0575"}
            }, {
                types: ["string", "char", "attr-value", "regex", "variable"],
                style: {color: "#f87c32"}
            }, {types: ["parameter"], style: {fontStyle: "italic"}}, {
                types: ["entity", "url"],
                style: {color: "#67cdcc"}
            }, {types: ["operator"], style: {color: "ffffffee"}}, {
                types: ["important", "bold"],
                style: {fontWeight: "bold"}
            }, {types: ["italic"], style: {fontStyle: "italic"}}, {
                types: ["entity"],
                style: {cursor: "help"}
            }, {types: ["inserted"], style: {color: "green"}}]
        }, ec = {
            plain: {color: "#282a2e", backgroundColor: "#ffffff"},
            styles: [{
                types: ["comment"],
                style: {color: "rgb(197, 200, 198)"}
            }, {
                types: ["string", "number", "builtin", "variable"],
                style: {color: "rgb(150, 152, 150)"}
            }, {types: ["class-name", "function", "tag", "attr-name"], style: {color: "rgb(40, 42, 46)"}}]
        }, eu = {
            plain: {color: "#9CDCFE", backgroundColor: "#1E1E1E"},
            styles: [{types: ["prolog"], style: {color: "rgb(0, 0, 128)"}}, {
                types: ["comment"],
                style: {color: "rgb(106, 153, 85)"}
            }, {
                types: ["builtin", "changed", "keyword", "interpolation-punctuation"],
                style: {color: "rgb(86, 156, 214)"}
            }, {types: ["number", "inserted"], style: {color: "rgb(181, 206, 168)"}}, {
                types: ["constant"],
                style: {color: "rgb(100, 102, 149)"}
            }, {
                types: ["attr-name", "variable"],
                style: {color: "rgb(156, 220, 254)"}
            }, {
                types: ["deleted", "string", "attr-value", "template-punctuation"],
                style: {color: "rgb(206, 145, 120)"}
            }, {types: ["selector"], style: {color: "rgb(215, 186, 125)"}}, {
                types: ["tag"],
                style: {color: "rgb(78, 201, 176)"}
            }, {
                types: ["tag"],
                languages: ["markup"],
                style: {color: "rgb(86, 156, 214)"}
            }, {types: ["punctuation", "operator"], style: {color: "rgb(212, 212, 212)"}}, {
                types: ["punctuation"],
                languages: ["markup"],
                style: {color: "#808080"}
            }, {types: ["function"], style: {color: "rgb(220, 220, 170)"}}, {
                types: ["class-name"],
                style: {color: "rgb(78, 201, 176)"}
            }, {types: ["char"], style: {color: "rgb(209, 105, 105)"}}]
        }, ep = {
            plain: {color: "#000000", backgroundColor: "#ffffff"},
            styles: [{types: ["comment"], style: {color: "rgb(0, 128, 0)"}}, {
                types: ["builtin"],
                style: {color: "rgb(0, 112, 193)"}
            }, {types: ["number", "variable", "inserted"], style: {color: "rgb(9, 134, 88)"}}, {
                types: ["operator"],
                style: {color: "rgb(0, 0, 0)"}
            }, {types: ["constant", "char"], style: {color: "rgb(129, 31, 63)"}}, {
                types: ["tag"],
                style: {color: "rgb(128, 0, 0)"}
            }, {types: ["attr-name"], style: {color: "rgb(255, 0, 0)"}}, {
                types: ["deleted", "string"],
                style: {color: "rgb(163, 21, 21)"}
            }, {types: ["changed", "punctuation"], style: {color: "rgb(4, 81, 165)"}}, {
                types: ["function", "keyword"],
                style: {color: "rgb(0, 0, 255)"}
            }, {types: ["class-name"], style: {color: "rgb(38, 127, 153)"}}]
        }, ed = {
            plain: {color: "#f8fafc", backgroundColor: "#011627"},
            styles: [{types: ["prolog"], style: {color: "#000080"}}, {
                types: ["comment"],
                style: {color: "#6A9955"}
            }, {
                types: ["builtin", "changed", "keyword", "interpolation-punctuation"],
                style: {color: "#569CD6"}
            }, {types: ["number", "inserted"], style: {color: "#B5CEA8"}}, {
                types: ["constant"],
                style: {color: "#f8fafc"}
            }, {
                types: ["attr-name", "variable"],
                style: {color: "#9CDCFE"}
            }, {
                types: ["deleted", "string", "attr-value", "template-punctuation"],
                style: {color: "#cbd5e1"}
            }, {types: ["selector"], style: {color: "#D7BA7D"}}, {
                types: ["tag"],
                style: {color: "#0ea5e9"}
            }, {types: ["tag"], languages: ["markup"], style: {color: "#0ea5e9"}}, {
                types: ["punctuation", "operator"],
                style: {color: "#D4D4D4"}
            }, {types: ["punctuation"], languages: ["markup"], style: {color: "#808080"}}, {
                types: ["function"],
                style: {color: "#7dd3fc"}
            }, {types: ["class-name"], style: {color: "#0ea5e9"}}, {types: ["char"], style: {color: "#D16969"}}]
        }, eg = {
            plain: {color: "#0f172a", backgroundColor: "#f1f5f9"},
            styles: [{types: ["prolog"], style: {color: "#000080"}}, {
                types: ["comment"],
                style: {color: "#6A9955"}
            }, {
                types: ["builtin", "changed", "keyword", "interpolation-punctuation"],
                style: {color: "#0c4a6e"}
            }, {types: ["number", "inserted"], style: {color: "#B5CEA8"}}, {
                types: ["constant"],
                style: {color: "#0f172a"}
            }, {
                types: ["attr-name", "variable"],
                style: {color: "#0c4a6e"}
            }, {
                types: ["deleted", "string", "attr-value", "template-punctuation"],
                style: {color: "#64748b"}
            }, {types: ["selector"], style: {color: "#D7BA7D"}}, {
                types: ["tag"],
                style: {color: "#0ea5e9"}
            }, {types: ["tag"], languages: ["markup"], style: {color: "#0ea5e9"}}, {
                types: ["punctuation", "operator"],
                style: {color: "#475569"}
            }, {types: ["punctuation"], languages: ["markup"], style: {color: "#808080"}}, {
                types: ["function"],
                style: {color: "#0e7490"}
            }, {types: ["class-name"], style: {color: "#0ea5e9"}}, {types: ["char"], style: {color: "#D16969"}}]
        }, ef = {
            plain: {
                backgroundColor: "hsl(220, 13%, 18%)",
                color: "hsl(220, 14%, 71%)",
                textShadow: "0 1px rgba(0, 0, 0, 0.3)"
            },
            styles: [{
                types: ["comment", "prolog", "cdata"],
                style: {color: "hsl(220, 10%, 40%)"}
            }, {
                types: ["doctype", "punctuation", "entity"],
                style: {color: "hsl(220, 14%, 71%)"}
            }, {
                types: ["attr-name", "class-name", "maybe-class-name", "boolean", "constant", "number", "atrule"],
                style: {color: "hsl(29, 54%, 61%)"}
            }, {
                types: ["keyword"],
                style: {color: "hsl(286, 60%, 67%)"}
            }, {
                types: ["property", "tag", "symbol", "deleted", "important"],
                style: {color: "hsl(355, 65%, 65%)"}
            }, {
                types: ["selector", "string", "char", "builtin", "inserted", "regex", "attr-value"],
                style: {color: "hsl(95, 38%, 62%)"}
            }, {types: ["variable", "operator", "function"], style: {color: "hsl(207, 82%, 66%)"}}, {
                types: ["url"],
                style: {color: "hsl(187, 47%, 55%)"}
            }, {types: ["deleted"], style: {textDecorationLine: "line-through"}}, {
                types: ["inserted"],
                style: {textDecorationLine: "underline"}
            }, {types: ["italic"], style: {fontStyle: "italic"}}, {
                types: ["important", "bold"],
                style: {fontWeight: "bold"}
            }, {types: ["important"], style: {color: "hsl(220, 14%, 71%)"}}]
        }, ey = {
            plain: {backgroundColor: "hsl(230, 1%, 98%)", color: "hsl(230, 8%, 24%)"},
            styles: [{
                types: ["comment", "prolog", "cdata"],
                style: {color: "hsl(230, 4%, 64%)"}
            }, {
                types: ["doctype", "punctuation", "entity"],
                style: {color: "hsl(230, 8%, 24%)"}
            }, {
                types: ["attr-name", "class-name", "boolean", "constant", "number", "atrule"],
                style: {color: "hsl(35, 99%, 36%)"}
            }, {
                types: ["keyword"],
                style: {color: "hsl(301, 63%, 40%)"}
            }, {
                types: ["property", "tag", "symbol", "deleted", "important"],
                style: {color: "hsl(5, 74%, 59%)"}
            }, {
                types: ["selector", "string", "char", "builtin", "inserted", "regex", "attr-value", "punctuation"],
                style: {color: "hsl(119, 34%, 47%)"}
            }, {types: ["variable", "operator", "function"], style: {color: "hsl(221, 87%, 60%)"}}, {
                types: ["url"],
                style: {color: "hsl(198, 99%, 37%)"}
            }, {types: ["deleted"], style: {textDecorationLine: "line-through"}}, {
                types: ["inserted"],
                style: {textDecorationLine: "underline"}
            }, {types: ["italic"], style: {fontStyle: "italic"}}, {
                types: ["important", "bold"],
                style: {fontWeight: "bold"}
            }, {types: ["important"], style: {color: "hsl(230, 8%, 24%)"}}]
        }, eb = (e, t) => {
            let {plain: n} = e, r = e.styles.reduce((e, n) => {
                let {languages: r, style: a} = n;
                return r && !r.includes(t) || n.types.forEach(t => {
                    let n = V(V({}, e[t]), a);
                    e[t] = n
                }), e
            }, {});
            return r.root = n, r.plain = W(V({}, n), {backgroundColor: void 0}), r
        }, eh = (e, t) => {
            let [n, r] = (0, S.useState)(eb(t, e)), a = (0, S.useRef)(), o = (0, S.useRef)();
            return (0, S.useEffect)(() => {
                (t !== a.current || e !== o.current) && (a.current = t, o.current = e, r(eb(t, e)))
            }, [e, t]), n
        }, em = e => (0, S.useCallback)(t => {
            var {className: n, style: r, line: a} = t;
            let o = W(V({}, q(t, ["className", "style", "line"])), {className: I("token-line", n)});
            return "object" == typeof e && "plain" in e && (o.style = e.plain), "object" == typeof r && (o.style = V(V({}, o.style || {}), r)), o
        }, [e]), ev = e => {
            let t = (0, S.useCallback)(({types: t, empty: n}) => {
                if (null != e) return 1 === t.length && "plain" === t[0] ? null != n ? {display: "inline-block"} : void 0 : 1 === t.length && null != n ? e[t[0]] : Object.assign(null != n ? {display: "inline-block"} : {}, ...t.map(t => e[t]))
            }, [e]);
            return (0, S.useCallback)(e => {
                var {token: n, className: r, style: a} = e;
                let o = W(V({}, q(e, ["token", "className", "style"])), {
                    className: I("token", ...n.types, r),
                    children: n.content,
                    style: t(n)
                });
                return null != a && (o.style = V(V({}, o.style || {}), a)), o
            }, [t])
        }, ex = /\r\n|\r|\n/, ew = e => {
            0 === e.length ? e.push({
                types: ["plain"],
                content: "\n",
                empty: !0
            }) : 1 === e.length && "" === e[0].content && (e[0].content = "\n", e[0].empty = !0)
        }, ek = (e, t) => {
            let n = e.length;
            return n > 0 && e[n - 1] === t ? e : e.concat(t)
        }, eE = e => {
            let t = [[]], n = [e], r = [0], a = [e.length], o = 0, s = 0, i = [], l = [i];
            for (; s > -1;) {
                for (; (o = r[s]++) < a[s];) {
                    let e;
                    let c = t[s], u = n[s][o];
                    if ("string" == typeof u ? (c = s > 0 ? c : ["plain"], e = u) : (c = ek(c, u.type), u.alias && (c = ek(c, u.alias)), e = u.content), "string" != typeof e) {
                        s++, t.push(c), n.push(e), r.push(0), a.push(e.length);
                        continue
                    }
                    let p = e.split(ex), d = p.length;
                    i.push({types: c, content: p[0]});
                    for (let e = 1; e < d; e++) ew(i), l.push(i = []), i.push({types: c, content: p[e]})
                }
                s--, t.pop(), n.pop(), r.pop(), a.pop()
            }
            return ew(i), l
        }, e_ = ({prism: e, code: t, grammar: n, language: r}) => {
            let a = (0, S.useRef)(e);
            return (0, S.useMemo)(() => {
                if (null == n) return eE([t]);
                let e = {code: t, grammar: n, language: r, tokens: []};
                return a.current.hooks.run("before-tokenize", e), e.tokens = a.current.tokenize(t, n), a.current.hooks.run("after-tokenize", e), eE(e.tokens)
            }, [t, n, r])
        }, eS = ({children: e, language: t, code: n, theme: r, prism: a}) => {
            let o = t.toLowerCase(), s = eh(o, r), i = em(s), l = ev(s), c = a.languages[o];
            return e({
                tokens: e_({prism: a, language: o, code: n, grammar: c}),
                className: `prism-code language-${o}`,
                style: null != s ? s.root : {},
                getLineProps: i,
                getTokenProps: l
            })
        }, eC = e => (0, S.createElement)(eS, W(V({}, e), {
            prism: e.prism || Y,
            theme: e.theme || eu,
            code: e.code,
            language: e.language
        })), eA = n(2935), eF = n.n(eA);
        let ej = {
            plain: {color: "var(--color-body)", backgroundColor: "var(--color-gray-light)"},
            styles: [{
                types: ["comment", "prolog", "doctype", "cdata"],
                style: {color: "var(--color-gray-3)", fontStyle: "italic"}
            }, {types: ["namespace"], style: {opacity: .7}}, {
                types: ["string", "attr-value"],
                style: {color: "var(--color-red)"}
            }, {
                types: ["punctuation", "operator"],
                style: {color: "var(--color-body)"}
            }, {
                types: ["entity", "url", "symbol", "number", "boolean", "variable", "constant", "property", "regex", "inserted"],
                style: {color: "var(--color-purple)"}
            }, {
                types: ["atrule", "keyword", "attr-name", "selector"],
                style: {color: "var(--color-green)"}
            }, {
                types: ["function", "deleted", "tag"],
                style: {color: "var(--color-blue)"}
            }, {
                types: ["function-variable"],
                style: {color: "var(--color-purple)"}
            }, {types: ["tag", "selector", "keyword"], style: {color: "var(--color-blue)"}}]
        };

        function eR(e) {
            var t;
            let {children: r, className: a} = e,
                o = null !== (t = null == a ? void 0 : a.replace(/language-/, "")) && void 0 !== t ? t : "", [s, i] = (0, S.useState)(!1);
            return ((0, S.useEffect)(() => {
                (async function () {
                    (void 0 !== n.g ? n.g : window).Prism = Y, await n.e(2447).then(n.t.bind(n, 92447, 23)), await n.e(5251).then(n.t.bind(n, 15251, 23)), i(!0)
                })()
            }, []), o) ? (0, _.jsx)("div", {
                className: eF().code,
                children: (0, _.jsx)(eC, {
                    code: r, language: o, theme: ej, children: e => {
                        let {className: t, style: n, tokens: r, getLineProps: a, getTokenProps: o} = e;
                        return (0, _.jsx)("pre", {
                            className: O()(eF().code__pre, t),
                            style: n,
                            tabIndex: 0,
                            role: "region",
                            "aria-label": "Scrollable code block ".concat(T()("id-")),
                            children: r.map((e, t) => (0, _.jsx)("div", {
                                ...a({line: e, key: t}),
                                children: e.map((e, t) => (0, _.jsx)("span", {...o({token: e, key: t})}, t))
                            }, t))
                        })
                    }
                })
            }) : (0, _.jsx)("code", {className: a, children: r})
        }

        eR.defaultProps = {className: ""};
        var eO = n(85094), eL = n.n(eO), eT = n(34095);

        function eI(e) {
            let {as: t, children: n, ...r} = e,
                a = n ? n.toString().toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "") : "";
            return (0, _.jsxs)(t, {
                className: eL()["anchor-heading"],
                id: a, ...r,
                children: [n, " ", (0, _.jsx)("a", {
                    className: eL()["anchor-heading__link"],
                    href: "#".concat(a),
                    "aria-label": "Link to this heading",
                    children: (0, _.jsx)(eT.Z, {icon: "link"})
                })]
            })
        }

        var eN = n(41664), eD = n.n(eN), eP = n(78378), eB = n.n(eP);

        function eM(e) {
            let {children: t, ...n} = e, [r, a] = (0, S.useState)(!1), [o, s] = (0, S.useState)(0);
            return (0, S.useEffect)(() => {
                let e = e => {
                    let t = e.target;
                    s(t.documentElement.scrollTop), a(t.documentElement.scrollTop > o)
                };
                return window.addEventListener("scroll", e), () => window.removeEventListener("scroll", e)
            }, [o]), (0, _.jsx)("header", {
                className: O()(eB().navbar, {[eB()["navbar--scrolled"]]: o > 0}), ...n,
                children: (0, _.jsx)("div", {className: eB().navbar__content, children: t})
            })
        }

        var ez = n(68562), e$ = n.n(ez), eU = n(60526), eH = n.n(eU);

        function eG(e) {
            let {baseline: t} = e;
            return (0, _.jsxs)("svg", {
                className: O()(eH().logo, {[eH()["logo--baseline"]]: t}),
                xmlns: "http://www.w3.org/2000/svg",
                x: "0px",
                y: "0px",
                viewBox: "0 0 76 32",
                "aria-labelledby": "logo",
                role: "img",
                children: [(0, _.jsx)("title", {
                    id: "logo",
                    children: "Etch"
                }), (0, _.jsxs)("g", {
                    children: [(0, _.jsx)("path", {
                        fill: "#F06",
                        d: "M0 4L0 20 16 4z"
                    }), (0, _.jsx)("path", {fill: "#F06", d: "M0 12L0 28 16 28z"}), (0, _.jsx)("path", {
                        fill: "#F66",
                        d: "M0 12L0 28 16 12z"
                    })]
                }), (0, _.jsxs)("g", {
                    children: [(0, _.jsx)("path", {
                        fill: "#F06",
                        d: "M20 4H28V20H20z"
                    }), (0, _.jsx)("path", {fill: "#F06", d: "M20 12L20 28 36 28z"}), (0, _.jsx)("path", {
                        fill: "#F66",
                        d: "M20 12L20 28 36 12z"
                    })]
                }), (0, _.jsxs)("g", {
                    children: [(0, _.jsx)("path", {
                        fill: "#F06",
                        d: "M40 12L40 28 56 28z"
                    }), (0, _.jsx)("path", {fill: "#F66", d: "M40 12L40 28 56 12z"})]
                }), (0, _.jsxs)("g", {
                    children: [(0, _.jsx)("path", {
                        fill: "#F06",
                        d: "M60 4H68V20H60z"
                    }), (0, _.jsx)("path", {
                        fill: "#F06",
                        d: "M72 12L60 12 60 16 76 32 76 16z"
                    }), (0, _.jsx)("path", {fill: "#F66", d: "M60 12L60 32 76 16 72 12z"})]
                })]
            })
        }

        var eZ = n(83458), eV = n.n(eZ);

        function eW(e) {
            let {count: t} = e;
            return (0, _.jsxs)(eD(), {
                href: "/jobs",
                className: eV().hiring,
                "aria-label": t ? "Jobs: ".concat(t, " available") : "Jobs",
                children: [(0, _.jsx)("span", {
                    className: eV().hiring__text,
                    children: "Jobs"
                }), t && t > 0 && (0, _.jsx)("span", {className: eV().hiring__icon, children: t})]
            })
        }

        function eq() {
            let {pathname: e} = (0, j.useRouter)();
            return (0, _.jsxs)("nav", {
                className: e$().nav,
                children: [(0, _.jsx)("div", {
                    className: e$().nav__logo,
                    children: (0, _.jsx)(eD(), {href: "/", children: (0, _.jsx)(eG, {baseline: !0})})
                }), (0, _.jsxs)("div", {
                    className: e$().nav__links,
                    children: [(0, _.jsx)(eD(), {
                        href: "/team",
                        className: O()(e$().nav__link, {[e$()["nav__link--active"]]: e.includes("/team")}),
                        children: "Team"
                    }), (0, _.jsx)(eD(), {
                        href: "/blog",
                        className: O()(e$().nav__link, {[e$()["nav__link--active"]]: e.includes("/blog")}),
                        children: "Blog"
                    })]
                }), (0, _.jsx)("div", {className: e$().nav__hiring, children: (0, _.jsx)(eW, {count: 1})})]
            })
        }

        function eY(e) {
            let {children: t} = e;
            return (0, _.jsxs)("diamond-app", {
                header: "sticky",
                children: [(0, _.jsx)(eM, {
                    slot: "header",
                    children: (0, _.jsx)(eq, {})
                }), (0, _.jsx)("main", {children: t}), (0, _.jsxs)("etch-footer", {
                    slot: "footer",
                    children: [(0, _.jsx)("span", {
                        slot: "about",
                        children: "Etch is a web software consultancy based in the UK"
                    }), (0, _.jsxs)("span", {
                        slot: "copyright",
                        children: ["\xa92012-2024 Etch Software Ltd -", " ", (0, _.jsx)("diamond-link", {
                            variant: "underline",
                            children: (0, _.jsx)(eD(), {href: "/policies", children: "Policies"})
                        })]
                    })]
                })]
            })
        }

        var eK = n(25675), eX = n.n(eK);

        function eJ(e) {
            let {...t} = e, {src: n, alt: r} = t;
            return (0, _.jsx)("diamond-img", {
                "object-fit": "contain",
                block: !0,
                responsive: !0,
                children: (0, _.jsx)(eX(), {src: n, alt: r, width: 800, height: 600, ...t})
            })
        }

        function eQ() {
            return (0, _.jsx)(F(), {
                children: (0, _.jsx)("script", {
                    type: "application/ld+json",
                    dangerouslySetInnerHTML: {
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Organization",
                            name: "Etch",
                            url: "https://etch.co/",
                            logo: "https://etch.co/images/logo.svg",
                            foundingDate: "2012-09-10",
                            founders: [{"@type": "Person", name: "Jim Ramsden"}, {
                                "@type": "Person",
                                name: "Gavyn McKenzie"
                            }],
                            address: {
                                "@type": "PostalAddress",
                                streetAddress: "Office 35, 30 Saint Dunstans Street",
                                addressLocality: "Canterbury",
                                postalCode: "CT2 8HG",
                                addressCountry: "GB"
                            },
                            contactPoint: {
                                "@type": "ContactPoint",
                                contactType: "customer support",
                                telephone: "[+4402080680380]",
                                email: "support@etch.co"
                            },
                            sameAs: ["https://twitter.com/etch", "https://www.linkedin.com/company/etch-team", "https://www.instagram.com/etch.team/"]
                        })
                    }
                }, "schema-structured-data")
            })
        }

        function e0(e) {
            let {...t} = e, {children: n, href: r, ...a} = t, o = r.startsWith("/");
            return (0, _.jsx)("a", {
                href: r, ...o ? {} : {target: "_blank", rel: "noopener noreferrer"}, ...a,
                children: n
            })
        }

        n(95703), n(32107);
        var e1 = function (e) {
            let {Component: t, pageProps: n} = e, [r, a] = (0, S.useState)(!1), o = (0, j.useRouter)(), s = o.asPath;
            (0, S.useEffect)(() => {
                console.info("\uD83D\uDC4B\uD83C\uDFFC We see you peeking. Want to come work for us? https://etch.co/jobs"), setTimeout(() => {
                    a(!0)
                }, 750)
            }, []);
            let i = "https://etch.co".concat(o.asPath.split("?")[0].split("#")[0]);
            return (0, _.jsxs)(eY, {
                children: [(0, _.jsx)(eQ, {}), (0, _.jsxs)(F(), {
                    children: [(0, _.jsx)("meta", {charSet: "utf-8"}), (0, _.jsx)("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1, viewport-fit=cover"
                    }), (0, _.jsx)("title", {children: "Make Better Software | Etch Software Studio"}), (0, _.jsx)("meta", {
                        name: "application-name",
                        content: "Etch Software Studio"
                    }), (0, _.jsx)("meta", {
                        name: "description",
                        content: "Hardworking team of Designers and Developers. Our services include UX Consultancy, UI Design, Front-end Development, Software Engineering, Maintenance and Support."
                    }, "description"), (0, _.jsx)("meta", {
                        name: "twitter:card",
                        content: "summary_large_image"
                    }), (0, _.jsx)("meta", {
                        name: "twitter:domain",
                        content: "etch.co"
                    }), (0, _.jsx)("meta", {
                        name: "twitter:creator",
                        content: "@etch"
                    }), (0, _.jsx)("meta", {
                        name: "twitter:title",
                        content: "Etch Software Studio – Web App Design & Development"
                    }, "twitter-title"), (0, _.jsx)("meta", {
                        name: "twitter:description",
                        content: "Hardworking team of Designers and Developers. Our services include UX Consultancy, UI Design, Front-end Development, Software Engineering, Maintenance and Support."
                    }, "twitter-description"), (0, _.jsx)("meta", {
                        name: "twitter:image",
                        content: "/og/twitter-card.png"
                    }, "twitter-image"), (0, _.jsx)("meta", {
                        property: "og:site_name",
                        content: "Etch Software Studio"
                    }), (0, _.jsx)("meta", {
                        property: "og:title",
                        content: "Etch Software Studio – Web App Design & Development"
                    }, "og-title"), (0, _.jsx)("meta", {
                        property: "og:description",
                        content: "Hardworking team of Designers and Developers. Our services include UX Consultancy, UI Design, Front-end Development, Software Engineering, Maintenance and Support."
                    }, "og-description"), (0, _.jsx)("meta", {
                        property: "og:url",
                        content: "https://etch.co"
                    }, "og-url"), (0, _.jsx)("meta", {
                        property: "og:image",
                        content: "/og/card.png"
                    }, "og-image"), (0, _.jsx)("link", {
                        rel: "canonical",
                        href: i
                    }, "canonical"), (0, _.jsx)("script", {
                        defer: !0,
                        src: "https://analytics.eu.umami.is/script.js",
                        "data-website-id": "45ebc9a9-a2a0-41ac-8073-4cfd58950018"
                    })]
                }), !r && (0, _.jsx)("style", {dangerouslySetInnerHTML: {__html: "\n              :root {\n                --diamond-transition-enter-duration: 0s;\n              }\n            "}}), (0, _.jsx)(C.Zo, {
                    components: {
                        h1: e => (0, _.jsx)(eI, {as: "h1", ...e}),
                        h2: e => (0, _.jsx)(eI, {as: "h2", ...e}),
                        h3: e => (0, _.jsx)(eI, {as: "h3", ...e}),
                        h4: e => (0, _.jsx)(eI, {as: "h4", ...e}),
                        h5: e => (0, _.jsx)(eI, {as: "h5", ...e}),
                        h6: e => (0, _.jsx)(eI, {as: "h6", ...e}),
                        code: eR,
                        img: eJ,
                        a: e0
                    }, children: (0, S.createElement)(t, {...n, key: s})
                })]
            })
        }
    }, 2935: function (e) {
        e.exports = {code: "code_code__PIwZw", code__pre: "code_code__pre__plW2V"}
    }, 85094: function (e) {
        e.exports = {
            "anchor-heading__link": "AnchorHeading_anchor-heading__link__hNRBv",
            "anchor-heading": "AnchorHeading_anchor-heading__Qtjc9"
        }
    }, 78378: function (e) {
        e.exports = {
            navbar: "navbar_navbar__5_Czo",
            navbar__content: "navbar_navbar__content__70y_4",
            "navbar--scrolled": "navbar_navbar--scrolled__fPECz"
        }
    }, 93402: function (e) {
        e.exports = {icon: "icon_icon__jIUBp", "icon--block": "icon_icon--block__CiUgH"}
    }, 60526: function (e) {
        e.exports = {logo: "logo_logo__tqpDL", "logo--baseline": "logo_logo--baseline__9sE_9"}
    }, 83458: function (e) {
        e.exports = {hiring: "Hiring_hiring__K0mrF", hiring__icon: "Hiring_hiring__icon__wUm6O"}
    }, 68562: function (e) {
        e.exports = {
            nav: "Nav_nav__0C7nx",
            nav__links: "Nav_nav__links__fuqBK",
            nav__link: "Nav_nav__link__4sVzR",
            "nav__link--active": "Nav_nav__link--active__dGsWO"
        }
    }, 95703: function () {
    }, 32107: function () {
    }, 9008: function (e, t, n) {
        e.exports = n(7828)
    }, 25675: function (e, t, n) {
        e.exports = n(35666)
    }, 41664: function (e, t, n) {
        e.exports = n(89577)
    }, 11163: function (e, t, n) {
        e.exports = n(9090)
    }, 11151: function (e, t, n) {
        "use strict";
        n.d(t, {
            Zo: function () {
                return i
            }, ah: function () {
                return o
            }
        });
        var r = n(67294);
        let a = r.createContext({});

        function o(e) {
            let t = r.useContext(a);
            return r.useMemo(() => "function" == typeof e ? e(t) : {...t, ...e}, [t, e])
        }

        let s = {};

        function i({components: e, children: t, disableParentContext: n}) {
            let i;
            return i = n ? "function" == typeof e ? e({}) : e || s : o(e), r.createElement(a.Provider, {value: i}, t)
        }
    }
}, function (e) {
    var t = function (t) {
        return e(e.s = t)
    };
    e.O(0, [9774, 179], function () {
        return t(6840), t(9090)
    }), _N_E = e.O()
}]);
