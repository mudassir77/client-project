(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [733], {
        7091: function (e, n, t) {
            "use strict";

            function r() {
                return (r = Object.assign || function (e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = arguments[n];
                        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                    }
                    return e
                }).apply(this, arguments)
            }

            function o(e, n) {
                if (null == e) return {};
                var t, r, o = {},
                    i = Object.keys(e);
                for (r = 0; r < i.length; r++) t = i[r], n.indexOf(t) >= 0 || (o[t] = e[t]);
                return o
            }

            function i(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function a(e, n) {
                var t;
                if ("undefined" === typeof Symbol || null == e[Symbol.iterator]) {
                    if (Array.isArray(e) || (t = function (e, n) {
                        if (e) {
                            if ("string" === typeof e) return i(e, n);
                            var t = Object.prototype.toString.call(e).slice(8, -1);
                            return "Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t ? Array.from(e) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? i(e, n) : void 0
                        }
                    }(e)) || n && e && "number" === typeof e.length) {
                        t && (e = t);
                        var r = 0;
                        return function () {
                            return r >= e.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: e[r++]
                            }
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                return (t = e[Symbol.iterator]()).next.bind(t)
            }
            t.d(n, {
                V: function () {
                    return le
                }
            });
            var u, c, l, f = t(7294);

            function s(e, n) {
                if (e in n) {
                    for (var t = n[e], r = arguments.length, o = new Array(r > 2 ? r - 2 : 0), i = 2; i < r; i++) o[i - 2] = arguments[i];
                    return "function" === typeof t ? t.apply(void 0, o) : t
                }
                var a = new Error('Tried to handle "' + e + '" but there is no handler defined. Only defined handlers are: ' + Object.keys(n).map((function (e) {
                    return '"' + e + '"'
                })).join(", ") + ".");
                throw Error.captureStackTrace && Error.captureStackTrace(a, s), a
            }

            function d(e) {
                var n = e.props,
                    t = e.slot,
                    i = e.defaultTag,
                    a = e.features,
                    l = e.visible,
                    f = void 0 === l || l,
                    d = e.name;
                if (f) return v(n, t, i, d);
                var p = null != a ? a : u.None;
                if (p & u.Static) {
                    var m = n.static,
                        y = void 0 !== m && m,
                        h = o(n, ["static"]);
                    if (y) return v(h, t, i, d)
                }
                if (p & u.RenderStrategy) {
                    var g, w = n.unmount,
                        b = void 0 === w || w,
                        E = o(n, ["unmount"]);
                    return s(b ? c.Unmount : c.Hidden, ((g = {})[c.Unmount] = function () {
                        return null
                    }, g[c.Hidden] = function () {
                        return v(r({}, E, {
                            hidden: !0,
                            style: {
                                display: "none"
                            }
                        }), t, i, d)
                    }, g))
                }
                return v(n, t, i, d)
            }

            function v(e, n, t, r) {
                var i;
                void 0 === n && (n = {});
                var u = m(e, ["unmount", "static"]),
                    c = u.as,
                    l = void 0 === c ? t : c,
                    s = u.children,
                    d = u.refName,
                    v = void 0 === d ? "ref" : d,
                    p = o(u, ["as", "children", "refName"]),
                    y = void 0 !== e.ref ? ((i = {})[v] = e.ref, i) : {},
                    h = "function" === typeof s ? s(n) : s;
                if (p.className && "function" === typeof p.className && (p.className = p.className(n)), l === f.Fragment && Object.keys(p).length > 0) {
                    if (!(0, f.isValidElement)(h) || Array.isArray(h) && h.length > 1) throw new Error(['Passing props on "Fragment"!', "", "The current component <" + r + ' /> is rendering a "Fragment".', "However we need to passthrough the following props:", Object.keys(p).map((function (e) {
                        return "  - " + e
                    })).join("\n"), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map((function (e) {
                        return "  - " + e
                    })).join("\n")].join("\n"));
                    return (0, f.cloneElement)(h, Object.assign({}, function (e, n, t) {
                        for (var r, o = Object.assign({}, e), i = function () {
                            var t, i = r.value;
                            void 0 !== e[i] && void 0 !== n[i] && Object.assign(o, ((t = {})[i] = function (t) {
                                t.defaultPrevented || e[i](t), t.defaultPrevented || n[i](t)
                            }, t))
                        }, u = a(t); !(r = u()).done;) i();
                        return o
                    }(function (e) {
                        var n = Object.assign({}, e);
                        for (var t in n) void 0 === n[t] && delete n[t];
                        return n
                    }(m(p, ["ref"])), h.props, ["onClick"]), y))
                }
                return (0, f.createElement)(l, Object.assign({}, m(p, ["ref"]), l !== f.Fragment && y), h)
            }

            function p(e) {
                var n;
                return Object.assign((0, f.forwardRef)(e), {
                    displayName: null != (n = e.displayName) ? n : e.name
                })
            }

            function m(e, n) {
                void 0 === n && (n = []);
                for (var t, r = Object.assign({}, e), o = a(n); !(t = o()).done;) {
                    var i = t.value;
                    i in r && delete r[i]
                }
                return r
            }

            function y() {
                for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++) n[t] = arguments[t];
                var r = (0, f.useRef)(n);
                return (0, f.useEffect)((function () {
                    r.current = n
                }), [n]), (0, f.useCallback)((function (e) {
                    for (var n, t = a(r.current); !(n = t()).done;) {
                        var o = n.value;
                        null != o && ("function" === typeof o ? o(e) : o.current = e)
                    }
                }), [r])
            }

            function h(e) {
                for (var n, t, r = e.parentElement, o = null; r && !(r instanceof HTMLFieldSetElement);) r instanceof HTMLLegendElement && (o = r), r = r.parentElement;
                var i = null != (n = "" === (null == (t = r) ? void 0 : t.getAttribute("disabled"))) && n;
                return (!i || ! function (e) {
                    if (!e) return !1;
                    var n = e.previousElementSibling;
                    for (; null !== n;) {
                        if (n instanceof HTMLLegendElement) return !1;
                        n = n.previousElementSibling
                    }
                    return !0
                }(o)) && i
            } ! function (e) {
                e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static"
            }(u || (u = {})),
                function (e) {
                    e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden"
                }(c || (c = {})),
                function (e) {
                    e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab"
                }(l || (l = {}));
            var g = {
                serverHandoffComplete: !1
            };

            function w() {
                var e = (0, f.useState)(g.serverHandoffComplete),
                    n = e[0],
                    t = e[1];
                return (0, f.useEffect)((function () {
                    !0 !== n && t(!0)
                }), [n]), (0, f.useEffect)((function () {
                    !1 === g.serverHandoffComplete && (g.serverHandoffComplete = !0)
                }), []), n
            }
            var b = "undefined" !== typeof window ? f.useLayoutEffect : f.useEffect,
                E = 0;

            function C() {
                return ++E
            }

            function S() {
                var e = w(),
                    n = (0, f.useState)(e ? C : null),
                    t = n[0],
                    r = n[1];
                return b((function () {
                    null === t && r(C())
                }), [t]), null != t ? "" + t : void 0
            }

            function T(e, n, t) {
                var r = (0, f.useRef)(n);
                r.current = n, (0, f.useEffect)((function () {
                    function n(e) {
                        r.current.call(window, e)
                    }
                    return window.addEventListener(e, n, t),
                        function () {
                            return window.removeEventListener(e, n, t)
                        }
                }), [e, t])
            }
            var O, x, R, A, k, N = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((function (e) {
                return e + ":not([tabindex='-1'])"
            })).join(",");

            function F(e) {
                null == e || e.focus({
                    preventScroll: !0
                })
            }

            function L(e, n) {
                var t = Array.isArray(e) ? e.slice().sort((function (e, n) {
                    var t = e.compareDocumentPosition(n);
                    return t & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : t & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0
                })) : function (e) {
                    return void 0 === e && (e = document.body), null == e ? [] : Array.from(e.querySelectorAll(N))
                }(e),
                    r = document.activeElement,
                    o = function () {
                        if (n & (O.First | O.Next)) return R.Next;
                        if (n & (O.Previous | O.Last)) return R.Previous;
                        throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")
                    }(),
                    i = function () {
                        if (n & O.First) return 0;
                        if (n & O.Previous) return Math.max(0, t.indexOf(r)) - 1;
                        if (n & O.Next) return Math.max(0, t.indexOf(r)) + 1;
                        if (n & O.Last) return t.length - 1;
                        throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")
                    }(),
                    a = n & O.NoScroll ? {
                        preventScroll: !0
                    } : {},
                    u = 0,
                    c = t.length,
                    l = void 0;
                do {
                    var f;
                    if (u >= c || u + c <= 0) return x.Error;
                    var s = i + u;
                    if (n & O.WrapAround) s = (s + c) % c;
                    else {
                        if (s < 0) return x.Underflow;
                        if (s >= c) return x.Overflow
                    }
                    null == (f = l = t[s]) || f.focus(a), u += o
                } while (l !== document.activeElement);
                return l.hasAttribute("tabindex") || l.setAttribute("tabindex", "0"), x.Success
            }

            function P(e, n, t) {
                void 0 === n && (n = k.All);
                var r = void 0 === t ? {} : t,
                    o = r.initialFocus,
                    i = r.containers,
                    u = (0, f.useRef)("undefined" !== typeof window ? document.activeElement : null),
                    c = (0, f.useRef)(null),
                    s = function () {
                        var e = (0, f.useRef)(!1);
                        return (0, f.useEffect)((function () {
                            return e.current = !0,
                                function () {
                                    e.current = !1
                                }
                        }), []), e
                    }(),
                    d = Boolean(n & k.RestoreFocus),
                    v = Boolean(n & k.InitialFocus);
                (0, f.useEffect)((function () {
                    d && (u.current = document.activeElement)
                }), [d]), (0, f.useEffect)((function () {
                    if (d) return function () {
                        F(u.current), u.current = null
                    }
                }), [d]), (0, f.useEffect)((function () {
                    if (v && e.current) {
                        var n = document.activeElement;
                        if (null == o ? void 0 : o.current) {
                            if ((null == o ? void 0 : o.current) === n) return void (c.current = n)
                        } else if (e.current.contains(n)) return void (c.current = n);
                        (null == o ? void 0 : o.current) ? F(o.current) : L(e.current, O.First) === x.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), c.current = document.activeElement
                    }
                }), [e, o, v]), T("keydown", (function (t) {
                    n & k.TabLock && e.current && t.key === l.Tab && (t.preventDefault(), L(e.current, (t.shiftKey ? O.Previous : O.Next) | O.WrapAround) === x.Success && (c.current = document.activeElement))
                })), T("focus", (function (t) {
                    if (n & k.FocusLock) {
                        var r = new Set(null == i ? void 0 : i.current);
                        if (r.add(e), r.size) {
                            var o = c.current;
                            if (o && s.current) {
                                var u = t.target;
                                u && u instanceof HTMLElement ? ! function (e, n) {
                                    for (var t, r = a(e); !(t = r()).done;) {
                                        var o;
                                        if (null == (o = t.value.current) ? void 0 : o.contains(n)) return !0
                                    }
                                    return !1
                                }(r, u) ? (t.preventDefault(), t.stopPropagation(), F(o)) : (c.current = u, F(u)) : F(c.current)
                            }
                        }
                    }
                }), !0)
            } ! function (e) {
                e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll"
            }(O || (O = {})),
                function (e) {
                    e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow"
                }(x || (x = {})),
                function (e) {
                    e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next"
                }(R || (R = {})),
                function (e) {
                    e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose"
                }(A || (A = {})),
                function (e) {
                    e[e.None = 1] = "None", e[e.InitialFocus = 2] = "InitialFocus", e[e.TabLock = 4] = "TabLock", e[e.FocusLock = 8] = "FocusLock", e[e.RestoreFocus = 16] = "RestoreFocus", e[e.All = 30] = "All"
                }(k || (k = {}));
            var j = new Set,
                M = new Map;

            function D(e) {
                e.setAttribute("aria-hidden", "true"), e.inert = !0
            }

            function I(e) {
                var n = M.get(e);
                n && (null === n["aria-hidden"] ? e.removeAttribute("aria-hidden") : e.setAttribute("aria-hidden", n["aria-hidden"]), e.inert = n.inert)
            }
            var H = (0, f.createContext)(!1);

            function U(e) {
                return f.createElement(H.Provider, {
                    value: e.force
                }, e.children)
            }
            var z = t(3935);

            function _() {
                var e = (0, f.useContext)(H),
                    n = (0, f.useContext)(Y),
                    t = (0, f.useState)((function () {
                        if (!e && null !== n) return null;
                        if ("undefined" === typeof window) return null;
                        var t = document.getElementById("headlessui-portal-root");
                        if (t) return t;
                        var r = document.createElement("div");
                        return r.setAttribute("id", "headlessui-portal-root"), document.body.appendChild(r)
                    })),
                    r = t[0],
                    o = t[1];
                return (0, f.useEffect)((function () {
                    null !== r && (document.body.contains(r) || document.body.appendChild(r))
                }), [r]), (0, f.useEffect)((function () {
                    e || null !== n && o(n.current)
                }), [n, o, e]), r
            }
            var q = f.Fragment;

            function B(e) {
                var n = e,
                    t = _(),
                    r = (0, f.useState)((function () {
                        return "undefined" === typeof window ? null : document.createElement("div")
                    }))[0],
                    o = w();
                return b((function () {
                    if (t && r) return t.appendChild(r),
                        function () {
                            var e;
                            t && (r && (t.removeChild(r), t.childNodes.length <= 0 && (null == (e = t.parentElement) || e.removeChild(t))))
                        }
                }), [t, r]), o && t && r ? (0, z.createPortal)(d({
                    props: n,
                    defaultTag: q,
                    name: "Portal"
                }), r) : null
            }
            var W = f.Fragment,
                Y = (0, f.createContext)(null);
            B.Group = function (e) {
                var n = e.target,
                    t = o(e, ["target"]);
                return f.createElement(Y.Provider, {
                    value: n
                }, d({
                    props: t,
                    defaultTag: W,
                    name: "Popover.Group"
                }))
            };
            var G = (0, f.createContext)(null);

            function K() {
                var e = (0, f.useContext)(G);
                if (null === e) {
                    var n = new Error("You used a <Description /> component, but it is not inside a relevant parent.");
                    throw Error.captureStackTrace && Error.captureStackTrace(n, K), n
                }
                return e
            }
            var V, $ = (0, f.createContext)(null);
            $.displayName = "OpenClosedContext",
                function (e) {
                    e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed"
                }(V || (V = {}));
            var X, Z, Q, J, ee = (0, f.createContext)((function () { }));

            function ne(e) {
                var n = e.children,
                    t = e.onUpdate,
                    r = e.type,
                    o = e.element,
                    i = (0, f.useContext)(ee),
                    a = (0, f.useCallback)((function () {
                        for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                        null == t || t.apply(void 0, n), i.apply(void 0, n)
                    }), [i, t]);
                return b((function () {
                    return a(X.Add, r, o),
                        function () {
                            return a(X.Remove, r, o)
                        }
                }), [a, r, o]), f.createElement(ee.Provider, {
                    value: a
                }, n)
            }
            ee.displayName = "StackContext",
                function (e) {
                    e[e.Add = 0] = "Add", e[e.Remove = 1] = "Remove"
                }(X || (X = {})),
                function (e) {
                    e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed"
                }(Q || (Q = {})),
                function (e) {
                    e[e.SetTitleId = 0] = "SetTitleId"
                }(J || (J = {}));
            var te = ((Z = {})[J.SetTitleId] = function (e, n) {
                return e.titleId === n.id ? e : r({}, e, {
                    titleId: n.id
                })
            }, Z),
                re = (0, f.createContext)(null);

            function oe(e) {
                var n = (0, f.useContext)(re);
                if (null === n) {
                    var t = new Error("<" + e + " /> is missing a parent <" + le.displayName + " /> component.");
                    throw Error.captureStackTrace && Error.captureStackTrace(t, oe), t
                }
                return n
            }

            function ie(e, n) {
                return s(n.type, te, e, n)
            }
            re.displayName = "DialogContext";
            var ae = u.RenderStrategy | u.Static,
                ue = p((function (e, n) {
                    var t, i = e.open,
                        u = e.onClose,
                        c = e.initialFocus,
                        v = o(e, ["open", "onClose", "initialFocus"]),
                        p = (0, f.useState)(0),
                        m = p[0],
                        h = p[1],
                        g = (0, f.useContext)($);
                    void 0 === i && null !== g && (i = s(g, ((t = {})[V.Open] = !0, t[V.Closed] = !1, t)));
                    var E = (0, f.useRef)(new Set),
                        C = (0, f.useRef)(null),
                        O = y(C, n),
                        x = e.hasOwnProperty("open") || null !== g,
                        R = e.hasOwnProperty("onClose");
                    if (!x && !R) throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");
                    if (!x) throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");
                    if (!R) throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");
                    if ("boolean" !== typeof i) throw new Error("You provided an `open` prop to the `Dialog`, but the value is not a boolean. Received: " + i);
                    if ("function" !== typeof u) throw new Error("You provided an `onClose` prop to the `Dialog`, but the value is not a function. Received: " + u);
                    var A = i ? Q.Open : Q.Closed,
                        N = null !== g ? g === V.Open : A === Q.Open,
                        F = (0, f.useReducer)(ie, {
                            titleId: null,
                            descriptionId: null
                        }),
                        L = F[0],
                        H = F[1],
                        z = (0, f.useCallback)((function () {
                            return u(!1)
                        }), [u]),
                        _ = (0, f.useCallback)((function (e) {
                            return H({
                                type: J.SetTitleId,
                                id: e
                            })
                        }), [H]),
                        q = w() && A === Q.Open,
                        W = m > 1,
                        Y = null !== (0, f.useContext)(re);
                    P(C, q ? s(W ? "parent" : "leaf", {
                        parent: k.RestoreFocus,
                        leaf: k.All
                    }) : k.None, {
                        initialFocus: c,
                        containers: E
                    }),
                        function (e, n) {
                            void 0 === n && (n = !0), b((function () {
                                if (n && e.current) {
                                    var t = e.current;
                                    j.add(t);
                                    for (var r, o = a(M.keys()); !(r = o()).done;) {
                                        var i = r.value;
                                        i.contains(t) && (I(i), M.delete(i))
                                    }
                                    return document.querySelectorAll("body > *").forEach((function (e) {
                                        if (e instanceof HTMLElement) {
                                            for (var n, t = a(j); !(n = t()).done;) {
                                                var r = n.value;
                                                if (e.contains(r)) return
                                            }
                                            1 === j.size && (M.set(e, {
                                                "aria-hidden": e.getAttribute("aria-hidden"),
                                                inert: e.inert
                                            }), D(e))
                                        }
                                    })),
                                        function () {
                                            if (j.delete(t), j.size > 0) document.querySelectorAll("body > *").forEach((function (e) {
                                                if (e instanceof HTMLElement && !M.has(e)) {
                                                    for (var n, t = a(j); !(n = t()).done;) {
                                                        var r = n.value;
                                                        if (e.contains(r)) return
                                                    }
                                                    M.set(e, {
                                                        "aria-hidden": e.getAttribute("aria-hidden"),
                                                        inert: e.inert
                                                    }), D(e)
                                                }
                                            }));
                                            else
                                                for (var e, n = a(M.keys()); !(e = n()).done;) {
                                                    var r = e.value;
                                                    I(r), M.delete(r)
                                                }
                                        }
                                }
                            }), [n])
                        }(C, !!W && q), T("mousedown", (function (e) {
                            var n, t = e.target;
                            A === Q.Open && (W || (null == (n = C.current) ? void 0 : n.contains(t)) || z())
                        })), T("keydown", (function (e) {
                            e.key === l.Escape && A === Q.Open && (W || (e.preventDefault(), e.stopPropagation(), z()))
                        })), (0, f.useEffect)((function () {
                            if (A === Q.Open && !Y) {
                                var e = document.documentElement.style.overflow,
                                    n = document.documentElement.style.paddingRight,
                                    t = window.innerWidth - document.documentElement.clientWidth;
                                return document.documentElement.style.overflow = "hidden", document.documentElement.style.paddingRight = t + "px",
                                    function () {
                                        document.documentElement.style.overflow = e, document.documentElement.style.paddingRight = n
                                    }
                            }
                        }), [A, Y]), (0, f.useEffect)((function () {
                            if (A === Q.Open && C.current) {
                                var e = new IntersectionObserver((function (e) {
                                    for (var n, t = a(e); !(n = t()).done;) {
                                        var r = n.value;
                                        0 === r.boundingClientRect.x && 0 === r.boundingClientRect.y && 0 === r.boundingClientRect.width && 0 === r.boundingClientRect.height && z()
                                    }
                                }));
                                return e.observe(C.current),
                                    function () {
                                        return e.disconnect()
                                    }
                            }
                        }), [A, C, z]);
                    var K = function () {
                        var e = (0, f.useState)([]),
                            n = e[0],
                            t = e[1];
                        return [n.length > 0 ? n.join(" ") : void 0, (0, f.useMemo)((function () {
                            return function (e) {
                                var n = (0, f.useCallback)((function (e) {
                                    return t((function (n) {
                                        return [].concat(n, [e])
                                    })),
                                        function () {
                                            return t((function (n) {
                                                var t = n.slice(),
                                                    r = t.indexOf(e);
                                                return -1 !== r && t.splice(r, 1), t
                                            }))
                                        }
                                }), []),
                                    r = (0, f.useMemo)((function () {
                                        return {
                                            register: n,
                                            slot: e.slot,
                                            name: e.name,
                                            props: e.props
                                        }
                                    }), [n, e.slot, e.name, e.props]);
                                return f.createElement(G.Provider, {
                                    value: r
                                }, e.children)
                            }
                        }), [t])]
                    }(),
                        Z = K[0],
                        ee = K[1],
                        te = "headlessui-dialog-" + S(),
                        oe = (0, f.useMemo)((function () {
                            return [{
                                dialogState: A,
                                close: z,
                                setTitleId: _
                            }, L]
                        }), [A, L, z, _]),
                        ue = (0, f.useMemo)((function () {
                            return {
                                open: A === Q.Open
                            }
                        }), [A]),
                        ce = {
                            ref: O,
                            id: te,
                            role: "dialog",
                            "aria-modal": A === Q.Open || void 0,
                            "aria-labelledby": L.titleId,
                            "aria-describedby": Z,
                            onClick: function (e) {
                                e.stopPropagation()
                            }
                        },
                        le = v;
                    return f.createElement(ne, {
                        type: "Dialog",
                        element: C,
                        onUpdate: (0, f.useCallback)((function (e, n, t) {
                            var r;
                            "Dialog" === n && s(e, ((r = {})[X.Add] = function () {
                                E.current.add(t), h((function (e) {
                                    return e + 1
                                }))
                            }, r[X.Remove] = function () {
                                E.current.add(t), h((function (e) {
                                    return e - 1
                                }))
                            }, r))
                        }), [])
                    }, f.createElement(U, {
                        force: !0
                    }, f.createElement(B, null, f.createElement(re.Provider, {
                        value: oe
                    }, f.createElement(B.Group, {
                        target: C
                    }, f.createElement(U, {
                        force: !1
                    }, f.createElement(ee, {
                        slot: ue,
                        name: "Dialog.Description"
                    }, d({
                        props: r({}, le, ce),
                        slot: ue,
                        defaultTag: "div",
                        features: ae,
                        visible: N,
                        name: "Dialog"
                    }))))))))
                })),
                ce = p((function e(n, t) {
                    var o = oe([le.displayName, e.name].join("."))[0],
                        i = o.dialogState,
                        a = o.close,
                        u = y(t),
                        c = "headlessui-dialog-overlay-" + S(),
                        l = (0, f.useCallback)((function (e) {
                            if (e.target === e.currentTarget) {
                                if (h(e.currentTarget)) return e.preventDefault();
                                e.preventDefault(), e.stopPropagation(), a()
                            }
                        }), [a]),
                        s = (0, f.useMemo)((function () {
                            return {
                                open: i === Q.Open
                            }
                        }), [i]);
                    return d({
                        props: r({}, n, {
                            ref: u,
                            id: c,
                            "aria-hidden": !0,
                            onClick: l
                        }),
                        slot: s,
                        defaultTag: "div",
                        name: "Dialog.Overlay"
                    })
                }));
            var le = Object.assign(ue, {
                Overlay: ce,
                Title: function e(n) {
                    var t = oe([le.displayName, e.name].join("."))[0],
                        o = t.dialogState,
                        i = t.setTitleId,
                        a = "headlessui-dialog-title-" + S();
                    (0, f.useEffect)((function () {
                        return i(a),
                            function () {
                                return i(null)
                            }
                    }), [a, i]);
                    var u = (0, f.useMemo)((function () {
                        return {
                            open: o === Q.Open
                        }
                    }), [o]);
                    return d({
                        props: r({}, n, {
                            id: a
                        }),
                        slot: u,
                        defaultTag: "h2",
                        name: "Dialog.Title"
                    })
                },
                Description: function (e) {
                    var n = K(),
                        t = "headlessui-description-" + S();
                    b((function () {
                        return n.register(t)
                    }), [t, n.register]);
                    var o = e,
                        i = r({}, n.props, {
                            id: t
                        });
                    return d({
                        props: r({}, o, i),
                        slot: n.slot || {},
                        defaultTag: "p",
                        name: n.name || "Description"
                    })
                }
            })
        },
        4184: function (e, n) {
            var t;
            ! function () {
                "use strict";
                var r = {}.hasOwnProperty;

                function o() {
                    for (var e = [], n = 0; n < arguments.length; n++) {
                        var t = arguments[n];
                        if (t) {
                            var i = typeof t;
                            if ("string" === i || "number" === i) e.push(t);
                            else if (Array.isArray(t)) {
                                if (t.length) {
                                    var a = o.apply(null, t);
                                    a && e.push(a)
                                }
                            } else if ("object" === i)
                                if (t.toString === Object.prototype.toString)
                                    for (var u in t) r.call(t, u) && t[u] && e.push(u);
                                else e.push(t.toString())
                        }
                    }
                    return e.join(" ")
                }
                e.exports ? (o.default = o, e.exports = o) : void 0 === (t = function () {
                    return o
                }.apply(n, [])) || (e.exports = t)
            }()
        },
        1217: function (e, n, t) {
            "use strict";
            t.d(n, {
                Pi: function () {
                    return S
                }
            });
            var r = t(8949),
                o = t(7294);
            if (!o.useState) throw new Error("mobx-react-lite requires React with Hooks support");
            if (!r.rC) throw new Error("mobx-react-lite@3 requires mobx at least version 6 to be available");
            var i = t(3935);

            function a(e) {
                e()
            }

            function u(e) {
                return (0, r.Gf)(e)
            }
            var c = "undefined" === typeof FinalizationRegistry ? void 0 : FinalizationRegistry;

            function l(e) {
                return {
                    reaction: e,
                    mounted: !1,
                    changedBeforeMount: !1,
                    cleanAt: Date.now() + f
                }
            }
            var f = 1e4;
            var s = function (e) {
                var n = "function" === typeof Symbol && Symbol.iterator,
                    t = n && e[n],
                    r = 0;
                if (t) return t.call(e);
                if (e && "number" === typeof e.length) return {
                    next: function () {
                        return e && r >= e.length && (e = void 0), {
                            value: e && e[r++],
                            done: !e
                        }
                    }
                };
                throw new TypeError(n ? "Object is not iterable." : "Symbol.iterator is not defined.")
            };
            var d = c ? function (e) {
                var n = new Map,
                    t = 1,
                    r = new e((function (e) {
                        var t = n.get(e);
                        t && (t.reaction.dispose(), n.delete(e))
                    }));
                return {
                    addReactionToTrack: function (e, o, i) {
                        var a = t++;
                        return r.register(i, a, e), e.current = l(o), e.current.finalizationRegistryCleanupToken = a, n.set(a, e.current), e.current
                    },
                    recordReactionAsCommitted: function (e) {
                        r.unregister(e), e.current && e.current.finalizationRegistryCleanupToken && n.delete(e.current.finalizationRegistryCleanupToken)
                    },
                    forceCleanupTimerToRunNowForTests: function () { },
                    resetCleanupScheduleForTests: function () { }
                }
            }(c) : function () {
                var e, n = new Set;

                function t() {
                    void 0 === e && (e = setTimeout(r, 1e4))
                }

                function r() {
                    e = void 0;
                    var r = Date.now();
                    n.forEach((function (e) {
                        var t = e.current;
                        t && r >= t.cleanAt && (t.reaction.dispose(), e.current = null, n.delete(e))
                    })), n.size > 0 && t()
                }
                return {
                    addReactionToTrack: function (e, r, o) {
                        var i;
                        return e.current = l(r), i = e, n.add(i), t(), e.current
                    },
                    recordReactionAsCommitted: function (e) {
                        n.delete(e)
                    },
                    forceCleanupTimerToRunNowForTests: function () {
                        e && (clearTimeout(e), r())
                    },
                    resetCleanupScheduleForTests: function () {
                        var t, r;
                        if (n.size > 0) {
                            try {
                                for (var o = s(n), i = o.next(); !i.done; i = o.next()) {
                                    var a = i.value,
                                        u = a.current;
                                    u && (u.reaction.dispose(), a.current = null)
                                }
                            } catch (c) {
                                t = {
                                    error: c
                                }
                            } finally {
                                try {
                                    i && !i.done && (r = o.return) && r.call(o)
                                } finally {
                                    if (t) throw t.error
                                }
                            }
                            n.clear()
                        }
                        e && (clearTimeout(e), e = void 0)
                    }
                }
            }(),
                v = d.addReactionToTrack,
                p = d.recordReactionAsCommitted,
                m = (d.resetCleanupScheduleForTests, d.forceCleanupTimerToRunNowForTests, !1);

            function y() {
                return m
            }
            var h = function (e, n) {
                var t = "function" === typeof Symbol && e[Symbol.iterator];
                if (!t) return e;
                var r, o, i = t.call(e),
                    a = [];
                try {
                    for (;
                        (void 0 === n || n-- > 0) && !(r = i.next()).done;) a.push(r.value)
                } catch (u) {
                    o = {
                        error: u
                    }
                } finally {
                    try {
                        r && !r.done && (t = i.return) && t.call(i)
                    } finally {
                        if (o) throw o.error
                    }
                }
                return a
            };

            function g(e) {
                return "observer".concat(e)
            }
            var w = function () { };

            function b() {
                return new w
            }

            function E(e, n) {
                if (void 0 === n && (n = "observed"), y()) return e();
                var t = h(o.useState(b), 1)[0],
                    i = h(o.useState(), 2)[1],
                    a = function () {
                        return i([])
                    },
                    c = o.useRef(null);
                if (!c.current) var l = new r.le(g(n), (function () {
                    f.mounted ? a() : f.changedBeforeMount = !0
                })),
                    f = v(c, l, t);
                var s, d, m = c.current.reaction;
                if (o.useDebugValue(m, u), o.useEffect((function () {
                    return p(c), c.current ? (c.current.mounted = !0, c.current.changedBeforeMount && (c.current.changedBeforeMount = !1, a())) : (c.current = {
                        reaction: new r.le(g(n), (function () {
                            a()
                        })),
                        mounted: !0,
                        changedBeforeMount: !1,
                        cleanAt: 1 / 0
                    }, a()),
                        function () {
                            c.current.reaction.dispose(), c.current = null
                        }
                }), []), m.track((function () {
                    try {
                        s = e()
                    } catch (n) {
                        d = n
                    }
                })), d) throw d;
                return s
            }
            var C = function () {
                return (C = Object.assign || function (e) {
                    for (var n, t = 1, r = arguments.length; t < r; t++)
                        for (var o in n = arguments[t]) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
                    return e
                }).apply(this, arguments)
            };

            function S(e, n) {
                if (y()) return e;
                var t, r, i, a = C({
                    forwardRef: !1
                }, n),
                    u = e.displayName || e.name,
                    c = function (n, t) {
                        return E((function () {
                            return e(n, t)
                        }), u)
                    };
                return "" !== u && (c.displayName = u), e.contextTypes && (c.contextTypes = e.contextTypes), t = a.forwardRef ? (0, o.memo)((0, o.forwardRef)(c)) : (0, o.memo)(c), r = e, i = t, Object.keys(r).forEach((function (e) {
                    T[e] || Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(r, e))
                })), t
            }
            var T = {
                $$typeof: !0,
                render: !0,
                compare: !0,
                type: !0,
                displayName: !0
            };
            var O;
            (O = i.unstable_batchedUpdates) || (O = a), (0, r.jQ)({
                reactionScheduler: O
            })
        },
        8418: function (e, n, t) {
            "use strict";

            function r(e, n) {
                return function (e) {
                    if (Array.isArray(e)) return e
                }(e) || function (e, n) {
                    var t = [],
                        r = !0,
                        o = !1,
                        i = void 0;
                    try {
                        for (var a, u = e[Symbol.iterator](); !(r = (a = u.next()).done) && (t.push(a.value), !n || t.length !== n); r = !0);
                    } catch (c) {
                        o = !0, i = c
                    } finally {
                        try {
                            r || null == u.return || u.return()
                        } finally {
                            if (o) throw i
                        }
                    }
                    return t
                }(e, n) || function () {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                }()
            }
            n.default = void 0;
            var o, i = (o = t(7294)) && o.__esModule ? o : {
                default: o
            },
                a = t(6273),
                u = t(387),
                c = t(7190);
            var l = {};

            function f(e, n, t, r) {
                if (e && a.isLocalURL(n)) {
                    e.prefetch(n, t, r).catch((function (e) {
                        0
                    }));
                    var o = r && "undefined" !== typeof r.locale ? r.locale : e && e.locale;
                    l[n + "%" + t + (o ? "%" + o : "")] = !0
                }
            }
            var s = function (e) {
                var n, t = !1 !== e.prefetch,
                    o = u.useRouter(),
                    s = i.default.useMemo((function () {
                        var n = r(a.resolveHref(o, e.href, !0), 2),
                            t = n[0],
                            i = n[1];
                        return {
                            href: t,
                            as: e.as ? a.resolveHref(o, e.as) : i || t
                        }
                    }), [o, e.href, e.as]),
                    d = s.href,
                    v = s.as,
                    p = e.children,
                    m = e.replace,
                    y = e.shallow,
                    h = e.scroll,
                    g = e.locale;
                "string" === typeof p && (p = i.default.createElement("a", null, p));
                var w = (n = i.default.Children.only(p)) && "object" === typeof n && n.ref,
                    b = r(c.useIntersection({
                        rootMargin: "200px"
                    }), 2),
                    E = b[0],
                    C = b[1],
                    S = i.default.useCallback((function (e) {
                        E(e), w && ("function" === typeof w ? w(e) : "object" === typeof w && (w.current = e))
                    }), [w, E]);
                i.default.useEffect((function () {
                    var e = C && t && a.isLocalURL(d),
                        n = "undefined" !== typeof g ? g : o && o.locale,
                        r = l[d + "%" + v + (n ? "%" + n : "")];
                    e && !r && f(o, d, v, {
                        locale: n
                    })
                }), [v, d, C, g, t, o]);
                var T = {
                    ref: S,
                    onClick: function (e) {
                        n.props && "function" === typeof n.props.onClick && n.props.onClick(e), e.defaultPrevented || function (e, n, t, r, o, i, u, c) {
                            ("A" !== e.currentTarget.nodeName || ! function (e) {
                                var n = e.currentTarget.target;
                                return n && "_self" !== n || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.nativeEvent && 2 === e.nativeEvent.which
                            }(e) && a.isLocalURL(t)) && (e.preventDefault(), null == u && r.indexOf("#") >= 0 && (u = !1), n[o ? "replace" : "push"](t, r, {
                                shallow: i,
                                locale: c,
                                scroll: u
                            }))
                        }(e, o, d, v, m, y, h, g)
                    },
                    onMouseEnter: function (e) {
                        n.props && "function" === typeof n.props.onMouseEnter && n.props.onMouseEnter(e), a.isLocalURL(d) && f(o, d, v, {
                            priority: !0
                        })
                    }
                };
                if (e.passHref || "a" === n.type && !("href" in n.props)) {
                    var O = "undefined" !== typeof g ? g : o && o.locale,
                        x = o && o.isLocaleDomain && a.getDomainLocale(v, O, o && o.locales, o && o.domainLocales);
                    T.href = x || a.addBasePath(a.addLocale(v, O, o && o.defaultLocale))
                }
                return i.default.cloneElement(n, T)
            };
            n.default = s
        },
        7190: function (e, n, t) {
            "use strict";

            function r(e, n) {
                return function (e) {
                    if (Array.isArray(e)) return e
                }(e) || function (e, n) {
                    var t = [],
                        r = !0,
                        o = !1,
                        i = void 0;
                    try {
                        for (var a, u = e[Symbol.iterator](); !(r = (a = u.next()).done) && (t.push(a.value), !n || t.length !== n); r = !0);
                    } catch (c) {
                        o = !0, i = c
                    } finally {
                        try {
                            r || null == u.return || u.return()
                        } finally {
                            if (o) throw i
                        }
                    }
                    return t
                }(e, n) || function () {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                }()
            }
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.useIntersection = function (e) {
                var n = e.rootMargin,
                    t = e.disabled || !a,
                    c = o.useRef(),
                    l = r(o.useState(!1), 2),
                    f = l[0],
                    s = l[1],
                    d = o.useCallback((function (e) {
                        c.current && (c.current(), c.current = void 0), t || f || e && e.tagName && (c.current = function (e, n, t) {
                            var r = function (e) {
                                var n = e.rootMargin || "",
                                    t = u.get(n);
                                if (t) return t;
                                var r = new Map,
                                    o = new IntersectionObserver((function (e) {
                                        e.forEach((function (e) {
                                            var n = r.get(e.target),
                                                t = e.isIntersecting || e.intersectionRatio > 0;
                                            n && t && n(t)
                                        }))
                                    }), e);
                                return u.set(n, t = {
                                    id: n,
                                    observer: o,
                                    elements: r
                                }), t
                            }(t),
                                o = r.id,
                                i = r.observer,
                                a = r.elements;
                            return a.set(e, n), i.observe(e),
                                function () {
                                    a.delete(e), i.unobserve(e), 0 === a.size && (i.disconnect(), u.delete(o))
                                }
                        }(e, (function (e) {
                            return e && s(e)
                        }), {
                            rootMargin: n
                        }))
                    }), [t, n, f]);
                return o.useEffect((function () {
                    if (!a && !f) {
                        var e = i.requestIdleCallback((function () {
                            return s(!0)
                        }));
                        return function () {
                            return i.cancelIdleCallback(e)
                        }
                    }
                }), [f]), [d, f]
            };
            var o = t(7294),
                i = t(9311),
                a = "undefined" !== typeof IntersectionObserver;
            var u = new Map
        },
        9008: function (e, n, t) {
            e.exports = t(5443)
        },
        1664: function (e, n, t) {
            e.exports = t(8418)
        },
        7005: function (e, n, t) {
            var r = t(7294);

            function o(e) {
                return e && "object" === typeof e && "default" in e ? e : {
                    default: e
                }
            }
            var i = o(r),
                a = function () {
                    return (a = Object.assign || function (e) {
                        for (var n, t = 1, r = arguments.length; t < r; t++)
                            for (var o in n = arguments[t]) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
                        return e
                    }).apply(this, arguments)
                };
            ! function (e) {
                if (!e || "undefined" === typeof window) return;
                const n = document.createElement("style");
                n.setAttribute("type", "text/css"), n.innerHTML = e, document.head.appendChild(n)
            }('.marquee-container {\n  overflow-x: hidden !important;\n  display: flex !important;\n  flex-direction: row !important;\n  position: relative;\n  width: 100%;\n}\n.marquee-container:hover div {\n  animation-play-state: var(--pause-on-hover);\n}\n.marquee-container:active div {\n  animation-play-state: var(--pause-on-click);\n}\n\n.overlay {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n.overlay::before, .overlay::after {\n  background: linear-gradient(to right, var(--gradient-color));\n  content: "";\n  height: 100%;\n  position: absolute;\n  width: var(--gradient-width);\n  z-index: 2;\n}\n.overlay::after {\n  right: 0;\n  top: 0;\n  transform: rotateZ(180deg);\n}\n.overlay::before {\n  left: 0;\n  top: 0;\n}\n\n.marquee {\n  flex: 0 0 auto;\n  min-width: 100%;\n  z-index: 1;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);\n  animation-play-state: var(--play);\n  animation-delay: var(--delay);\n  animation-direction: var(--direction);\n}\n@keyframes scroll {\n  0% {\n    transform: translateX(0%);\n  }\n  100% {\n    transform: translateX(-100%);\n  }\n}');
            n.Z = function (e) {
                var n, t, o, u, c = e.style,
                    l = void 0 === c ? {} : c,
                    f = e.className,
                    s = void 0 === f ? "" : f,
                    d = e.play,
                    v = void 0 === d || d,
                    p = e.pauseOnHover,
                    m = void 0 !== p && p,
                    y = e.pauseOnClick,
                    h = void 0 !== y && y,
                    g = e.direction,
                    w = void 0 === g ? "left" : g,
                    b = e.speed,
                    E = void 0 === b ? 20 : b,
                    C = e.delay,
                    S = void 0 === C ? 0 : C,
                    T = e.loop,
                    O = void 0 === T ? 0 : T,
                    x = e.gradient,
                    R = void 0 === x || x,
                    A = e.gradientColor,
                    k = void 0 === A ? [255, 255, 255] : A,
                    N = e.gradientWidth,
                    F = void 0 === N ? 200 : N,
                    L = e.onFinish,
                    P = e.onCycleComplete,
                    j = e.children,
                    M = r.useState(0),
                    D = M[0],
                    I = M[1],
                    H = r.useState(0),
                    U = H[0],
                    z = H[1],
                    _ = r.useState(0),
                    q = _[0],
                    B = _[1],
                    W = r.useState(!1),
                    Y = W[0],
                    G = W[1],
                    K = r.useRef(null),
                    V = r.useRef(null),
                    $ = function () {
                        V.current && K.current && (I(K.current.getBoundingClientRect().width), z(V.current.getBoundingClientRect().width)), B(U < D ? D / E : U / E)
                    };
                r.useEffect((function () {
                    return $(), window.addEventListener("resize", $),
                        function () {
                            window.removeEventListener("resize", $)
                        }
                })), r.useEffect((function () {
                    G(!0)
                }), []);
                var X = "rgba(" + k[0] + ", " + k[1] + ", " + k[2];
                return i.default.createElement(r.Fragment, null, Y ? i.default.createElement("div", {
                    ref: K,
                    style: a(a({}, l), (n = {}, n["--pause-on-hover"] = m ? "paused" : "running", n["--pause-on-click"] = h ? "paused" : "running", n)),
                    className: s + " marquee-container"
                }, R && i.default.createElement("div", {
                    style: (t = {}, t["--gradient-color"] = X + ", 1), " + X + ", 0)", t["--gradient-width"] = "number" === typeof F ? F + "px" : F, t),
                    className: "overlay"
                }), i.default.createElement("div", {
                    ref: V,
                    style: (o = {}, o["--play"] = v ? "running" : "paused", o["--direction"] = "left" === w ? "normal" : "reverse", o["--duration"] = q + "s", o["--delay"] = S + "s", o["--iteration-count"] = O ? "" + O : "infinite", o),
                    className: "marquee",
                    onAnimationIteration: P,
                    onAnimationEnd: L
                }, j), i.default.createElement("div", {
                    style: (u = {}, u["--play"] = v ? "running" : "paused", u["--direction"] = "left" === w ? "normal" : "reverse", u["--duration"] = q + "s", u["--delay"] = S + "s", u["--iteration-count"] = O ? "" + O : "infinite", u),
                    className: "marquee"
                }, j)) : null)
            }
        }
    }
]);