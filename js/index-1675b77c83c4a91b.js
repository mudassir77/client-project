(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [405], {
        5301: function (e, t, s) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/", function () {
                return s(7832)
            }])
        },
        1415: function (e, t, s) {
            "use strict";
            var n = s(5893),
                a = s(9008);
            t.Z = function (e) {
                var t = e.children;
                return (0, n.jsxs)("main", {
                    className: "font-fatfrank flex min-h-screen flex-col",
                    children: [(0, n.jsxs)(a.default, {
                        children: [(0, n.jsx)("title", {
                            children: "Space Walker"
                        }), (0, n.jsx)("meta", {
                            name: "description",
                            content: "Bing bong!"
                        }), (0, n.jsx)("meta", {
                            name: "viewport",
                            content: "width=device-width"
                        }), (0, n.jsx)("meta", {
                            charSet: "utf-8"
                        }), (0, n.jsx)("link", {
                            rel: "icon",
                            href: "/favicon.png"
                        }), (0, n.jsx)("link", {
                            rel: "apple-touch-icon",
                            href: "/apple-touch-icon.png"
                        }), (0, n.jsx)("meta", {
                            name: "twitter:title",
                            content: "Space Walkers"
                        }), (0, n.jsx)("meta", {
                            name: "twitter:card",
                            content: "summary_large_image"
                        }), (0, n.jsx)("meta", {
                            name: "twitter:site",
                            content: "@Invsble Walkers"
                        }), (0, n.jsx)("meta", {
                            name: "twitter:creator",
                            content: "@MotionMarkus"
                        }), (0, n.jsx)("meta", {
                            property: "og:title",
                            content: "space walkers"
                        }), (0, n.jsx)("meta", {
                            property: "og:description",
                            content: "Dropping February 2022. Bing bong!"
                        }), (0, n.jsx)("meta", {
                            property: "og:image",
                            content: "https://spacewalkers.io/IF_open-graph.png"
                        })]
                    }), t]
                })
            }
        },
        7832: function (e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function () {
                    return C
                }
            });
            var n = s(5893),
                a = s(1217),
                r = s(1664),
                i = s(7294),
                l = s(7005),
                c = s(1190),
                o = s(1415),
                d = s(4184),
                m = s.n(d),
                x = s(6869),
                h = {
                    crop: {
                        base: "https://rndmcharacters-s3.s3.amazonaws.com/spacewalkers-PFPs/",
                        ext: ".png"
                    },
                    still: {
                        base: "https://rndmcharacters-s3.s3.amazonaws.com/spacewalkers-stills/",
                        ext: ".png"
                    },
                    gif: {
                        base: "https://rcc.mypinata.cloud/ipfs/QmfU1ujuNubQh8UX1HL165Wbz9KFqQkjAdNo2ZaMQ2YG8T/",
                        ext: ".gif"
                    }
                };
            var u = s(7091);

            function f(e, t) {
                return function (e) {
                    if (Array.isArray(e)) return e
                }(e) || function (e, t) {
                    var s = [],
                        n = !0,
                        a = !1,
                        r = void 0;
                    try {
                        for (var i, l = e[Symbol.iterator](); !(n = (i = l.next()).done) && (s.push(i.value), !t || s.length !== t); n = !0);
                    } catch (c) {
                        a = !0, r = c
                    } finally {
                        try {
                            n || null == l.return || l.return()
                        } finally {
                            if (a) throw r
                        }
                    }
                    return s
                }(e, t) || function () {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                }()
            }
            var p = function (e) {
                var t = e.className,
                    s = f(function () {
                        var e = (0, i.useState)(!1),
                            t = e[0],
                            s = e[1];
                        return (0, i.useEffect)((function () {
                            return s(!0)
                        }), []), [t, s]
                    }(), 1)[0],
                    a = (0, i.useState)(!1),
                    r = a[0],
                    l = a[1],
                    c = f((0, x.$4)(), 2),
                    o = c[0],
                    d = o.data.connectors,
                    m = o.error,
                    h = o.loading,
                    p = c[1],
                    g = d.filter((function (e) {
                        return e.ready
                    }));
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsxs)("div", {
                        children: [(0, n.jsx)("button", {
                            className: t,
                            onClick: function (e) {
                                if (g.length > 1) return l(!0);
                                p(g[0])
                            },
                            children: "Connect wallet"
                        }), m && (0, n.jsxs)("div", {
                            className: "mt-2 text-sm text-red-500",
                            children: ["Failed to connect: ", m.message]
                        })]
                    }), (0, n.jsx)(u.V, {
                        open: s && r,
                        onClose: function () {
                            return l(!1)
                        },
                        className: "fixed inset-0 z-10 overflow-y-auto",
                        children: (0, n.jsxs)("div", {
                            className: "flex min-h-screen items-center justify-center",
                            children: [(0, n.jsx)(u.V.Overlay, {
                                className: "fixed inset-0 bg-black opacity-30"
                            }), (0, n.jsx)("div", {
                                className: "relative mx-auto max-w-sm overflow-hidden rounded-xl bg-white text-black shadow-lg",
                                children: (0, n.jsx)("div", {
                                    className: "flex flex-col space-y-2",
                                    children: g.map((function (e) {
                                        return (0, n.jsxs)("button", {
                                            disabled: s && h,
                                            onClick: function () {
                                                p(e)
                                            },
                                            className: "hover:bg-rainbow flex w-80 cursor-pointer items-center space-x-2 p-8 font-bold hover:text-white disabled:opacity-30",
                                            children: [(0, n.jsx)("img", {
                                                alt: e.name,
                                                src: "/".concat(e.name.replace(" ", "").toLowerCase(), ".svg"),
                                                className: "block h-5 w-5 rounded-md"
                                            }), (0, n.jsx)("span", {
                                                children: e.name
                                            })]
                                        }, e.id)
                                    }))
                                })
                            })]
                        })
                    })]
                })
            },
                g = s(8520),
                j = s.n(g);

            function w(e, t, s, n, a, r, i) {
                try {
                    var l = e[r](i),
                        c = l.value
                } catch (o) {
                    return void s(o)
                }
                l.done ? t(c) : Promise.resolve(c).then(n, a)
            }

            function v(e) {
                return function () {
                    var t = this,
                        s = arguments;
                    return new Promise((function (n, a) {
                        var r = e.apply(t, s);

                        function i(e) {
                            w(r, n, a, i, l, "next", e)
                        }

                        function l(e) {
                            w(r, n, a, i, l, "throw", e)
                        }
                        i(void 0)
                    }))
                }
            }

            function b(e) {
                return function (e, t, s) {
                    return N.apply(this, arguments)
                }("GET", e, void 0)
            }

            function N() {
                return (N = v(j().mark((function e(t, s, n) {
                    var a, r, i;
                    return j().wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return a = {
                                    method: t,
                                    credentials: "same-origin",
                                    headers: {
                                        "Content-Type": "application/json",
                                        Accept: "application/json"
                                    }
                                }, n && (a.body = JSON.stringify(n)), e.next = 5, fetch(s, a);
                            case 5:
                                return r = e.sent, e.next = 8, r.json();
                            case 8:
                                if (i = e.sent, !(r.status >= 200 && r.status <= 299)) {
                                    e.next = 13;
                                    break
                                }
                                return e.abrupt("return", i);
                            case 13:
                                throw i;
                            case 14:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function y(e, t) {
                return function (e) {
                    if (Array.isArray(e)) return e
                }(e) || function (e, t) {
                    var s = [],
                        n = !0,
                        a = !1,
                        r = void 0;
                    try {
                        for (var i, l = e[Symbol.iterator](); !(n = (i = l.next()).done) && (s.push(i.value), !t || s.length !== t); n = !0);
                    } catch (c) {
                        a = !0, r = c
                    } finally {
                        try {
                            n || null == l.return || l.return()
                        } finally {
                            if (a) throw r
                        }
                    }
                    return s
                }(e, t) || function () {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                }()
            }
            var k = function (e) {
                var t = e.asset,
                    s = (0, i.useState)("gif"),
                    a = s[0],
                    r = s[1],
                    l = [h[a].base, t.token_id, h[a].ext].join("");
                return (0, n.jsxs)("div", {
                    className: "relative w-full max-w-2xl",
                    children: [(0, n.jsxs)("div", {
                        className: "mb-2 flex items-center md:mb-4",
                        children: [(0, n.jsxs)("div", {
                            className: "flex-1",
                            children: ["#", t.token_id]
                        }), (0, n.jsx)("div", {
                            className: "flex-0",
                            children: (0, n.jsx)("a", {
                                href: t.permalink,
                                className: "flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 p-2 hover:bg-gray-300 md:h-12 md:w-12",
                                title: "View on OpenSea",
                                target: "_blank",
                                rel: "noreferrer",
                                children: (0, n.jsx)("img", {
                                    src: "/opensea-logo-filled.svg",
                                    alt: "OpenSea",
                                    className: "inline-block w-full"
                                })
                            })
                        })]
                    }), (0, n.jsxs)("div", {
                        className: "relative",
                        children: [(0, n.jsx)("img", {
                            src: l,
                            alt: "".concat(t.token_id)
                        }), (0, n.jsx)("div", {
                            className: "absolute right-3 bottom-3 text-right",
                            children: (0, n.jsxs)("a", {
                                href: l,
                                className: "btn space-x-4 bg-sea-700 text-sm text-white md:text-base",
                                download: "".concat(t.token_id, "_").concat(a),
                                children: [(0, n.jsx)("img", {
                                    src: "/dl_icon.svg",
                                    alt: "Download",
                                    className: "w-3 md:w-4"
                                }), (0, n.jsx)("span", {
                                    children: "Download"
                                })]
                            })
                        })]
                    }), (0, n.jsx)("div", {
                        className: "rounded-b-3xl bg-sea-100 p-5",
                        children: (0, n.jsxs)("div", {
                            className: "flex justify-center text-xs md:text-sm",
                            children: [(0, n.jsxs)("button", {
                                className: m()("btn rounded-r-none transition-colors", "crop" === a ? "bg-white" : "bg-sea-700 text-white hover:bg-sea-500"),
                                onClick: function () {
                                    return r("crop")
                                },
                                children: [(0, n.jsx)("span", {
                                    className: "hidden md:block",
                                    children: "Cropped PFP"
                                }), (0, n.jsx)("span", {
                                    className: "block md:hidden",
                                    children: "PFP"
                                })]
                            }), (0, n.jsxs)("button", {
                                className: m()("btn rounded-none transition-colors", "still" === a ? "bg-white" : "bg-sea-700 text-white hover:bg-sea-500"),
                                onClick: function () {
                                    return r("still")
                                },
                                children: [(0, n.jsx)("span", {
                                    className: "hidden md:block",
                                    children: "Still frame"
                                }), (0, n.jsx)("span", {
                                    className: "block md:hidden",
                                    children: "Still"
                                })]
                            }), (0, n.jsxs)("button", {
                                className: m()("btn rounded-l-none transition-colors", "gif" === a ? "bg-white" : "bg-sea-700 text-white hover:bg-sea-500"),
                                onClick: function () {
                                    return r("gif")
                                },
                                children: [(0, n.jsx)("span", {
                                    className: "hidden md:block",
                                    children: "Original GIF"
                                }), (0, n.jsx)("span", {
                                    className: "block md:hidden",
                                    children: "GIF"
                                })]
                            })]
                        })
                    })]
                }, t.token_id)
            },
                I = function () {
                    var e = y((0, x.mA)(), 1)[0].data,
                        t = (0, i.useState)([]),
                        s = t[0],
                        a = t[1];
                    (0, i.useEffect)((function () {
                        (null === e || void 0 === e ? void 0 : e.address) && b("/api/holding?address=".concat(e.address)).then(a, (function (e) {
                            console.error(e)
                        }))
                    }), [null === e || void 0 === e ? void 0 : e.address]);
                    var r = !!(null === e || void 0 === e ? void 0 : e.address);
                    return (0, n.jsxs)("div", {
                        children: [!r && (0, n.jsx)("div", {
                            className: "flex justify-center md:p-5",
                            children: (0, n.jsx)(p, {
                                className: "btn hover:bg-rainbow bg-sea-700 text-white",
                                children: "Connect wallet"
                            })
                        }), r && (0, n.jsx)("div", {
                            className: "grid grid-cols-1 justify-items-center space-y-8",
                            children: s.map((function (e) {
                                return (0, n.jsx)(k, {
                                    asset: e
                                }, e.token_id)
                            }))
                        })]
                    })
                };

            function S(e, t, s) {
                return t in e ? Object.defineProperty(e, t, {
                    value: s,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = s, e
            }

            function O(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var s = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(s);
                    "function" === typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(s).filter((function (e) {
                        return Object.getOwnPropertyDescriptor(s, e).enumerable
                    })))), n.forEach((function (t) {
                        S(e, t, s[t])
                    }))
                }
                return e
            }

            function _(e, t) {
                if (null == e) return {};
                var s, n, a = function (e, t) {
                    if (null == e) return {};
                    var s, n, a = {},
                        r = Object.keys(e);
                    for (n = 0; n < r.length; n++) s = r[n], t.indexOf(s) >= 0 || (a[s] = e[s]);
                    return a
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < r.length; n++) s = r[n], t.indexOf(s) >= 0 || Object.prototype.propertyIsEnumerable.call(e, s) && (a[s] = e[s])
                }
                return a
            }
            var E = (0, a.Pi)((function () {
                var e = (0, c.oR)().contractStatus,
                    t = "success" === e.state ? e.data.totalSupply : "\u2022";
                return (0, n.jsxs)("span", {
                    children: [6666, "/6666"]
                })
            })),
                F = function (e) {
                    var t = e.src,
                        s = e.poster,
                        a = _(e, ["src", "poster"]),
                        r = (0, i.useState)(!1),
                        l = r[0],
                        c = r[1];
                    return (0, i.useEffect)((function () {
                        if (t) {
                            c(!1);
                            var e = new Image;
                            e.src = t, e.onload = function () {
                                return c(!0)
                            }
                        }
                    }), [t]), l ? (0, n.jsx)("img", O({
                        alt: a.alt,
                        src: t
                    }, a)) : (0, n.jsx)("img", O({
                        alt: a.alt,
                        src: s
                    }, a))
                },
                P = function () {
                    return (0, n.jsx)("div", {
                        className: "h-36 md:h-48",
                        children: (0, n.jsx)("div", {
                            className: "absolute inset-0 z-10 flex w-full items-center justify-center bg-cover bg-center bg-no-repeat",
                            style: {
                                backgroundImage: 'url("/sold-out.svg")'
                            },
                            children: (0, n.jsx)("a", {
                                href: "https://opensea.io/collection/spacewalkers",
                                className: "rounded-full bg-sea-600 py-2 px-8 text-base uppercase md:text-3xl",
                                children: "Shop on OpenSea"
                            })
                        })
                    })
                },
                C = function () {
                    return (0, n.jsxs)(o.Z, {
                        children: [(0, n.jsx)("div", {
                            className: "text-outline-marquee bg-yellow-200 py-2 text-3xl text-yellow-200",
                            children: (0, n.jsx)(l.Z, {
                                direction: "right",
                                gradient: !1,
                                children: Array.from(new Array(30)).map((function (e, t) {
                                    return (0, n.jsx)("span", {
                                        className: "uppercase",
                                        children: "Sold out \xb7\xa0"
                                    }, t)
                                }))
                            })
                        }), (0, n.jsxs)("nav", {
                            className: "grid flex-none grid-cols-2 items-center p-5 lg:p-7",
                            children: [(0, n.jsx)("div", {
                                className: "flex",
                                children: (0, n.jsx)(r.default, {
                                    href: "/",
                                    children: (0, n.jsx)("a", {
                                        children: (0, n.jsx)("img", {
                                            src: "/handshake.svg",
                                            alt: "bing bong",
                                            className: "w-8 text-white md:w-12"
                                        })
                                    })
                                })
                            }), (0, n.jsxs)("div", {
                                className: "flex items-center justify-end space-x-4",
                                children: [(0, n.jsx)("a", {
                                    className: "",
                                    href: "https://twitter.com/Invsble Walkers",
                                    children: (0, n.jsx)("img", {
                                        src: "/twitter-logo.svg",
                                        alt: "Twitter",
                                        className: "w-6 text-white md:w-8"
                                    })
                                }), (0, n.jsx)("a", {
                                    className: "",
                                    href: "https://www.instagram.com/spacewalkers_io/",
                                    children: (0, n.jsx)("img", {
                                        src: "/instagram.svg",
                                        alt: "Instagram",
                                        className: "w-6 text-white md:w-8"
                                    })
                                }), (0, n.jsx)("a", {
                                    className: "",

                                    children: (0, n.jsx)("img", {
                                        src: "/discord-logo.svg",
                                        alt: "Discord",
                                        className: "w-6 text-white md:w-8"
                                    })
                                }), (0, n.jsx)("a", {
                                    className: "",
                                    href: "https://opensea.io/collection/spacewalkers",
                                    children: (0, n.jsx)("img", {
                                        src: "/opensea-logo.svg",
                                        alt: "OpenSea",
                                        className: "inline-block w-6 text-white md:w-8"
                                    })
                                }), (0, n.jsx)("a", {
                                    className: "",
                                    href: "https://etherscan.io/address/0x59468516a8259058bad1ca5f8f4bff190d30e066",
                                    children: (0, n.jsx)("img", {
                                        src: "/etherscan-logo.svg",
                                        alt: "Etherscan",
                                        className: "inline-block w-6 text-white md:w-8"
                                    })
                                })]
                            })]
                        }), (0, n.jsxs)("div", {
                            className: "grid md:items-center lg:grid-cols-2",
                            children: [(0, n.jsxs)("header", {
                                className: "font-fatfrank flex flex-col items-center justify-center text-center font-black",
                                children: [(0, n.jsxs)("h1", {
                                    className: "leading-solid text-6xl text-yellow-200 md:text-8xl",
                                    children: ["Space", (0, n.jsx)("br", {}), " Walkers"]
                                }), (0, n.jsx)("div", {
                                    className: "-mt-16 w-full md:-mt-32 md:w-[600px] lg:-mt-36",
                                    children: (0, n.jsx)(F, {
                                        src: "https://rndmcharacters-s3.s3.amazonaws.com/Space-montage-600w.gif",
                                        poster: "/Space-montage.png",
                                        alt: "Basketball"
                                    })
                                })]
                            }), (0, n.jsxs)("div", {
                                className: "",
                                children: [(0, n.jsxs)("h2", {
                                    className: "flex flex-col text-center text-5xl font-black text-sea-700 md:text-8xl",
                                    children: [(0, n.jsx)(E, {}), (0, n.jsx)("span", {
                                        className: "text-5xl text-white",
                                        children: "minted"
                                    })]
                                }), (0, n.jsxs)("div", {
                                    className: "space-y-4 p-4 text-center md:space-y-8",
                                    children: [(0, n.jsx)("div", {
                                        className: "h-2"
                                    }), (0, n.jsx)("div", {
                                        className: "relative w-full overflow-hidden rounded-3xl bg-sea-400 bg-opacity-30 p-6 py-12",
                                        children: (0, n.jsx)(P, {})
                                    }), (0, n.jsx)("div", {
                                        className: "h-6"
                                    })]
                                })]
                            })]
                        }), (0, n.jsx)("div", {
                            className: "font-fatfrank text-outline-marquee bg-yellow-200 py-2 text-3xl text-yellow-200",
                            children: (0, n.jsx)(l.Z, {
                                direction: "left",
                                gradient: !1,
                                children: Array.from(new Array(30)).map((function (e, t) {
                                    return (0, n.jsx)("span", {
                                        className: "uppercase",
                                        children: "Hiding in the metaverse \xb7\xa0"
                                    }, t)
                                }))
                            })
                        }), (0, n.jsxs)("div", {
                            className: "bg-white p-6 md:p-12 text-sea-700",
                            children: [(0, n.jsxs)("header", {
                                className: "space-y-2 text-center",
                                children: [(0, n.jsx)("h1", {
                                    className: "uppercase lg:text-6xl",
                                    children: "Your Space Walkers"
                                }), (0, n.jsx)("h2", {
                                    className: "text-sea-300",
                                    children: "Want to rock your friend as your PFP? Here are some crops that work great"
                                })]
                            }), (0, n.jsx)("div", {
                                className: "h-6"
                            }), (0, n.jsx)(I, {})]
                        }), (0, n.jsx)("div", {
                            className: "font-fatfrank text-outline-marquee bg-yellow-200 py-2 text-3xl text-yellow-200",
                            children: (0, n.jsx)(l.Z, {
                                direction: "right",
                                gradient: !1,
                                children: Array.from(new Array(30)).map((function (e, t) {
                                    return (0, n.jsx)("span", {
                                        className: "uppercase",
                                        children: "Hiding in the metaverse \xb7\xa0"
                                    }, t)
                                }))
                            })
                        }), (0, n.jsxs)("div", {
                            className: "grid gap-4 space-y-8 p-5 py-10 text-center md:grid-cols-2 md:space-y-0 md:p-16 md:py-32",
                            children: [(0, n.jsxs)("div", {
                                className: "space-y-4",
                                children: [(0, n.jsx)("img", {
                                    src: "/handshake.svg",
                                    className: "mx-auto w-24",
                                    alt: "Handshake"
                                }), (0, n.jsxs)("h3", {
                                    className: "font-fatfrank text-3xl text-yellow-200 md:text-5xl",
                                    children: ["Markus", (0, n.jsx)("br", {}), "Magnusson"]
                                }), (0, n.jsx)("p", {
                                    className: "mx-auto max-w-lg",
                                    children: "Space Walkers are thought up, drawn and animated by this one Swedish dude."
                                }), (0, n.jsx)("p", {
                                    children: (0, n.jsx)("a", {

                                        children: (0, n.jsx)("img", {
                                            src: "/twitter-logo.svg",
                                            alt: "Twitter",
                                            className: "inline-block w-6 text-white md:w-8"
                                        })
                                    })
                                })]
                            }), (0, n.jsxs)("div", {
                                className: "space-y-4",
                                children: [(0, n.jsx)("img", {
                                    src: "/rcc.png",
                                    className: "mx-auto w-24 rounded-full",
                                    alt: "Handshake"
                                }), (0, n.jsxs)("h3", {
                                    className: "font-fatfrank text-yellow-200 md:text-5xl",
                                    children: ["Random Character", (0, n.jsx)("br", {}), "Collective"]
                                }), (0, n.jsx)("p", {
                                    className: "mx-auto max-w-lg",
                                    children: "Space Walkers are a proud member of Random Character Collective. The internet's friendliest animator collective."
                                }), (0, n.jsx)("p", {
                                    children: (0, n.jsx)("a", {

                                        children: (0, n.jsx)("img", {
                                            src: "/twitter-logo.svg",
                                            alt: "Twitter",
                                            className: "inline-block w-6 text-white md:w-8"
                                        })
                                    })
                                })]
                            })]
                        }), (0, n.jsx)("div", {
                            className: "font-fatfrank text-outline-marquee bg-yellow-200 py-2 text-3xl uppercase text-yellow-200",
                            children: (0, n.jsx)(l.Z, {
                                direction: "left",
                                gradient: !1,
                                children: Array.from(new Array(30)).map((function (e, t) {
                                    return (0, n.jsx)("span", {
                                        children: "Nice to unsee you \xb7\xa0"
                                    }, t)
                                }))
                            })
                        }), (0, n.jsx)("nav", {
                            className: "p-10 lg:p-16",
                            children: (0, n.jsxs)("div", {
                                className: "mx-auto flex flex-col space-y-6 text-center",
                                children: [(0, n.jsx)(r.default, {
                                    href: "/",
                                    children: (0, n.jsx)("a", {
                                        children: (0, n.jsx)("img", {
                                            src: "/bingbong.svg",
                                            alt: "bing bong",
                                            className: "inline-block w-16 text-white md:w-24"
                                        })
                                    })
                                }), (0, n.jsxs)("div", {
                                    className: "space-x-4",
                                    children: [(0, n.jsx)("a", {
                                        className: "",

                                        children: (0, n.jsx)("img", {
                                            src: "/twitter-logo.svg",
                                            alt: "Twitter",
                                            className: "inline-block w-6 text-white md:w-8"
                                        })
                                    }), (0, n.jsx)("a", {
                                        className: "",

                                        children: (0, n.jsx)("img", {
                                            src: "/instagram.svg",
                                            alt: "Instagram",
                                            className: "inline-block w-6 text-white md:w-8"
                                        })
                                    }), (0, n.jsx)("a", {
                                        className: "",

                                        children: (0, n.jsx)("img", {
                                            src: "/discord-logo.svg",
                                            alt: "Discord",
                                            className: "inline-block w-6 text-white md:w-8"
                                        })
                                    }), (0, n.jsx)("a", {
                                        className: "",

                                        children: (0, n.jsx)("img", {
                                            src: "/opensea-logo.svg",
                                            alt: "OpenSea",
                                            className: "inline-block w-6 text-white md:w-8"
                                        })
                                    }), (0, n.jsx)("a", {
                                        className: "",

                                        children: (0, n.jsx)("img", {
                                            src: "/etherscan-logo.svg",
                                            alt: "Etherscan",
                                            className: "inline-block w-6 text-white md:w-8"
                                        })
                                    })]
                                }), (0, n.jsx)("div", {
                                    className: "h-2"
                                }), (0, n.jsxs)("div", {
                                    className: "flex justify-center space-x-4 text-base",
                                    children: [(0, n.jsx)(r.default, {
                                        href: "/provable-fairness",
                                        children: (0, n.jsx)("a", {
                                            className: "underline",
                                            children: "Provable fairness"
                                        })
                                    }), (0, n.jsx)(r.default, {
                                        href: "/terms",
                                        children: (0, n.jsx)("a", {
                                            className: "underline",
                                            children: "Terms & conditions"
                                        })
                                    })]
                                })]
                            })
                        })]
                    })
                }
        }
    },
    function (e) {
        e.O(0, [733, 774, 888, 179], (function () {
            return t = 5301, e(e.s = t);
            var t
        }));
        var t = e.O();
        _N_E = t
    }
]);