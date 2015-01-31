/* skel-layers.js v2.0.1 | (c) n33 | getskel.com | MIT licensed */
(function(e) {
    typeof define == "function" && define.amd ? define(["jquery", "skel"], e) : e(jQuery, skel)
})(function(e, t) {
    var n = "config",
        r = "cache",
        i = "setTimeout",
        s = "trigger",
        o = "_skel_layers_translateOrigin",
        u = "position",
        f = "_skel_layers_resetForms",
        l = "visibleWrapper",
        c = "$element",
        h = "_skel_layers_translate",
        p = "skel-layers-moved",
        d = "moveToVisibleWrapper",
        v = "_skel_layers_promote",
        m = "exclusiveLayer",
        g = "moveToHiddenWrapper",
        y = "_skel_layers_resume",
        b = "exclusive",
        w = "_skel_layers_demote",
        E = "center",
        S = "right",
        x = "_skel_layers_cssNumericValue",
        T = "bottom",
        N = "prototype",
        C = "speed",
        k = "css",
        L = "left",
        A = "_skel_layers_init",
        O = "wrapper",
        M = "_skel_layers_suspend",
        _ = "skel-layers-css-values",
        D = "width",
        P = "overflow-x",
        H = "_skel_layers_doTranslate",
        B = "hidestart",
        j = "transform",
        F = "layers",
        I = "showstart",
        q = "skel-layers-layer-z-index",
        R = "_height",
        U = "transition",
        z = null,
        W = "hiddenWrapper",
        X = "scrollTop",
        V = "skel-layers-css",
        $ = "children",
        J = ".skel-layers-fixed:not(.skel-layers-moved)",
        K = "height",
        Q = "showend",
        G = "hideend",
        Y = "iterate",
        Z = "auto",
        et = "unlockView",
        tt = "resetForms",
        nt = "deviceType",
        rt = "top",
        it = "touchstart.lock click.lock scroll.lock",
        st = "element",
        ot = "recalcW",
        ut = "hidden",
        at = "_width",
        ft = '<div id="skel-layers-placeholder-',
        lt = "_skel_layers_fadeOut",
        ct = "parent",
        ht = !0,
        pt = !1,
        dt = "length",
        vt = "_skel_layers_fadeIn",
        mt = "100%",
        gt = "padding-bottom",
        yt = "skel-layers-exclusiveVisible",
        bt = "blur",
        wt = "-webkit-tap-highlight-color",
        Et = "_skel_layers_uncss",
        St = "_skel_layers_recss",
        xt = "isInitialized",
        Tt = "easing",
        Nt = "useActive",
        Ct = "lockView",
        kt = "animation",
        Lt = "originalEvent",
        At = "skel-layers-layer-position",
        Ot = "#skel-layers-placeholder-",
        Mt = "animations",
        _t = "skel_layers_hiddenWrapper",
        Dt = "animate",
        Pt = "append",
        Ht = "-webkit-",
        Bt = "registerLocation",
        jt = "resize.lock scroll.lock",
        Ft = "skel-layers-layer-index",
        It = "orientationchange.lock",
        qt = "hasClass",
        Rt = "positions",
        Ut = "touchPosX",
        zt = "z-index",
        Wt = "stopPropagation",
        Xt = "_skel_layers_initializeCell",
        Vt = "breakpoints",
        $t = "touchPosY",
        Jt = "hide",
        Kt = "backface-visibility",
        Qt = "preventDefault",
        Gt = "canUseProperty",
        Yt = "undefined",
        Zt = "events",
        en = "window",
        tn = "-webkit-transition",
        nn = "_skel_layers_expandCell",
        rn = "addClass",
        sn = "recalcH",
        on = "visible",
        un = "_skel_layers_hasParent",
        an = "none",
        fn = "absolute",
        ln = "-moz-",
        cn = "-moz-transition",
        hn = "-ms-transition",
        pn = "opacity",
        dn = "removeClass",
        vn = "-o-transition",
        mn = "show",
        gn = "rgba(0,0,0,0)",
        yn = "-ms-",
        bn = "appendTo",
        wn = "data",
        En = "states",
        Sn = "s ",
        xn = "ios",
        Tn = "getArray",
        Nn = "object",
        Cn = "_skel_layers_xcss",
        kn = "x",
        Ln = "perspective",
        An = "-",
        On = "fixed",
        Mn = "mode",
        _n = "px",
        Dn = "overflow-y",
        Pn = "find",
        Hn = "side",
        Bn = "cell-size",
        jn = "isVisible",
        Fn = "*",
        In = "-o-",
        qn = "touches",
        Rn = "opacity ",
        Un = "body",
        zn = "relative",
        Wn = "html",
        Xn = "#",
        Vn = "attr",
        $n = "htmlbody";
    t.registerPlugin(F, function(e) {
        function fr(e, t, r) {
            var i, s, o = this;
            this.id = e, this.index = r, this[Zt] = {}, this[n] = {
                breakpoints: z,
                states: z,
                position: z,
                side: z,
                animation: an,
                orientation: an,
                width: Z,
                height: Z,
                maxWidth: mt,
                maxHeight: mt,
                zIndex: this.index,
                html: "",
                hidden: pt,
                exclusive: z,
                resetScroll: ht,
                resetForms: ht,
                swipeToHide: ht,
                clickToHide: pt
            }, ar._.extend(this[n], t), this[n][b] === z && (this[n][b] = this[n][ut]), this[st] = ar._.newDiv(this[n][Wn]), this[st].id = e, this[st]._layer = this, this[c] = z, this[Ut] = z, this[$t] = z, this[on] = pt, s = ar._.newElement(this.id, this[st], _t, 1), s.onAttach = function() {
                var e = this[Nn]._layer;
                e[xt]() || e.init(), e.resume()
            }, s.onDetach = function() {
                var e = this[Nn]._layer;
                e.suspend()
            }, o[n][En] && o[n][En] != ar._.sd ? (ar._.cacheElement(s), i = ar._[Tn](o[n][En]), ar._[Y](i, function(e) {
                ar._.addCachedElementToState(i[e], s)
            })) : o[n][Vt] ? (ar._.cacheElement(s), i = ar._[Tn](o[n][Vt]), ar._[Y](i, function(e) {
                ar._.addCachedElementToBreakpoint(i[e], s)
            })) : ar._.attachElement(s)
        }
        var ar;
        return typeof e == Yt ? pt : (e.fn[w] = function() {
            var t, n;
            if (this[dt] > 1) {
                for (t = 0; t < this[dt]; t++) e(this[t])[w]();
                return e(this)
            }
            return n = e(this), n[k](zt, n[wn](q))[wn](q, ""), n
        }, e.fn[nn] = function() {
            var t = e(this),
                n = t[ct](),
                r = 12;
            n[$]().each(function() {
                var t = e(this),
                    n = t[Vn]("class");
                n && n.match(/(\s+|^)([0-9]+)u(\s+|$)/) && (r -= parseInt(RegExp.$2))
            }), r > 0 && (t[Xt](), t[k](D, (t[wn](Bn) + r) / 12 * 100 + "%"))
        }, e.fn[un] = function() {
            return e(this).parents()[dt] > 0
        }, e.fn[Xt] = function() {
            var t = e(this);
            t[Vn]("class").match(/(\s+|^)([0-9]+)u(\s+|$)/) && t[wn](Bn, parseInt(RegExp.$2))
        }, e.fn[v] = function(t) {
            var r, i, s;
            if (this[dt] > 1) {
                for (r = 0; r < this[dt]; r++) e(this[r])[v](t);
                return e(this)
            }
            return i = e(this), isNaN(s = parseInt(i[wn](Ft))) && (s = 0), i[wn](q, i[k](zt))[k](zt, ar[n].baseZIndex + s + (t ? t : 1)), i
        }, e.fn[f] = function() {
            var t = e(this);
            return e(this)[Pn]("form").each(function() {
                this.reset()
            }), t
        }, e.fn[Cn] = function(t, n) {
            return e(this)[k](t, n)[k](ln + t, ln + n)[k](Ht + t, Ht + n)[k](In + t, In + n)[k](yn + t, yn + n)
        }, e.fn._skel_layers_xcssProperty = function(t, n) {
            return e(this)[k](t, n)[k](ln + t, n)[k](Ht + t, n)[k](In + t, n)[k](yn + t, n)
        }, e.fn._skel_layers_xcssValue = function(t, n) {
            return e(this)[k](t, n)[k](t, ln + n)[k](t, Ht + n)[k](t, In + n)[k](t, yn + n)
        }, e.fn[Et] = function() {
            var n = e(this),
                r = n[wn](V),
                i = {};
            if (!r || n[wn](_)) return n;
            t[Y](r, function(e) {
                var t = n[k](r[e]);
                t && (i[r[e]] = t, n[k](r[e], ""))
            }), n[wn](_, i)
        }, e.fn[St] = function() {
            var n = e(this),
                r = n[wn](_);
            if (!r) return n;
            t[Y](r, function(e) {
                n[k](e, r[e])
            }), n.removeData(_)
        }, fr[N][Mt] = {
            none: {
                show: function(e) {
                    var t = e[n],
                        r = e[c];
                    r[X](0)[v](t.zIndex)[mn](), t[tt] && r[f](), t[b] && ar[Ct](kn), e[d](), e[s](I), e[s](Q)
                },
                hide: function(e) {
                    var t = e[n],
                        r = e[c];
                    r[Pn](Fn)[s](bt, [ht]), t[b] && ar[et](kn), e[g](), r[w]()[Jt](), e[s](B), e[s](G)
                }
            },
            fade: {
                show: function(e) {
                    var t = e[n],
                        r = e[c];
                    r[X](0)[v](t.zIndex)[k](pn, 0)[mn](), t[tt] && r[f](), t[b] && ar[Ct](kn), e[d](), e[s](I), window[i](function() {
                        r[vt](function() {
                            e[s](Q)
                        })
                    }, 50)
                },
                hide: function(e) {
                    var t = e[n],
                        r = e[c];
                    r[Pn](Fn)[s](bt, [ht]), e[s](B), r[lt](function() {
                        t[b] && ar[et](kn), e[g](), r[w]()[Jt](), e[s](G)
                    })
                }
            },
            overlayX: {
                show: function(e) {
                    var t = e[n],
                        r = e[c];
                    r[X](0)[v](t.zIndex)[k](t[Hn], An + ar[ot](t[at]) + _n)[mn](), t[tt] && r[f](), t[b] && ar[Ct](kn), e[d](), e[s](I), window[i](function() {
                        r[h]((t[Hn] == S ? An : "") + ar[ot](t[at]), 0), window[i](function() {
                            e[s](Q)
                        }, ar[n][C])
                    }, 50)
                },
                hide: function(e) {
                    var t = e[n],
                        r = e[c];
                    r[Pn](Fn)[s](bt, [ht]), e[s](B), r[o](), window[i](function() {
                        t[b] && ar[et](kn), e[g](), r[w]()[Jt](), e[s](G)
                    }, ar[n][C] + 50)
                }
            },
            overlayY: {
                show: function(e) {
                    var t = e[n],
                        r = e[c];
                    r[X](0)[v](t.zIndex)[k](t[Hn], An + ar[ot](t[R]) + _n)[mn](), t[tt] && r[f](), t[b] && ar[Ct]("y"), e[d](), e[s](I), window[i](function() {
                        r[h](0, (t[Hn] == T ? An : "") + ar[ot](t[R])), window[i](function() {
                            e[s](Q)
                        }, ar[n][C])
                    }, 50)
                },
                hide: function(e) {
                    var t = e[n],
                        r = e[c];
                    r[Pn](Fn)[s](bt, [ht]), e[s](B), r[o](), window[i](function() {
                        t[b] && ar[et]("y"), e[g](), r[w]()[Jt](), e[s](G)
                    }, ar[n][C] + 50)
                }
            },
            pushX: {
                show: function(e) {
                    var t = e[n],
                        o = e[c],
                        u = ar[r][O].add(ar[r][l][$]());
                    o[X](0)[k](t[Hn], An + ar[ot](t[at]) + _n)[mn](), t[tt] && o[f](), u[v](), t[b] && ar[Ct](kn), e[d](), e[s](I), window[i](function() {
                        o.add(u)[h]((t[Hn] == S ? An : "") + ar[ot](t[at]), 0), window[i](function() {
                            e[s](Q)
                        }, ar[n][C])
                    }, 50)
                },
                hide: function(e) {
                    var t = e[n],
                        u = e[c],
                        a = ar[r][O].add(ar[r][l][$]());
                    u[Pn](Fn)[s](bt, [ht]), e[s](B), u.add(a)[o](), window[i](function() {
                        t[b] && ar[et](kn), u[Jt](), e[g](), a[w](), e[s](G)
                    }, ar[n][C] + 50)
                }
            },
            pushY: {
                show: function(e) {
                    var t = e[n],
                        o = e[c],
                        u = ar[r][O].add(ar[r][l][$]());
                    o[X](0)[k](t[Hn], An + ar[sn](t[R]) + _n)[mn](), t[tt] && o[f](), t[b] && ar[Ct]("y"), e[d](), e[s](I), window[i](function() {
                        o.add(u)[h](0, (t[Hn] == T ? An : "") + ar[sn](t[R])), window[i](function() {
                            e[s](Q)
                        }, ar[n][C])
                    }, 50)
                },
                hide: function(e) {
                    var t = e[n],
                        u = e[c],
                        a = ar[r][O].add(ar[r][l][$]());
                    u[Pn](Fn)[s](bt, [ht]), e[s](B), u.add(a)[o](), window[i](function() {
                        t[b] && ar[et]("y"), u[Jt](), e[g](), e[s](G)
                    }, ar[n][C] + 50)
                }
            },
            revealX: {
                show: function(e) {
                    var t = e[n],
                        o = e[c],
                        u = ar[r][O].add(ar[r][l][$]());
                    o[X](0)[mn](), t[tt] && o[f](), u[v](), t[b] && ar[Ct](kn), e[d](), e[s](I), window[i](function() {
                        u[h]((t[Hn] == S ? An : "") + ar[ot](t[at]), 0), window[i](function() {
                            e[s](Q)
                        }, ar[n][C])
                    }, 50)
                },
                hide: function(e) {
                    var t = e[n],
                        u = e[c],
                        a = ar[r][O].add(ar[r][l][$]());
                    u[Pn](Fn)[s](bt, [ht]), e[s](B), a[o](), window[i](function() {
                        t[b] && ar[et](kn), u[Jt](), a[w](), e[g](), e[s](G)
                    }, ar[n][C] + 50)
                }
            }
        }, fr[N][Rt] = {
            "top-left": {
                v: rt,
                h: L,
                side: L
            },
            "top-right": {
                v: rt,
                h: S,
                side: S
            },
            top: {
                v: rt,
                h: E,
                side: rt
            },
            "top-center": {
                v: rt,
                h: E,
                side: rt
            },
            "bottom-left": {
                v: T,
                h: L,
                side: L
            },
            "bottom-right": {
                v: T,
                h: S,
                side: S
            },
            bottom: {
                v: T,
                h: E,
                side: T
            },
            "bottom-center": {
                v: T,
                h: E,
                side: T
            },
            left: {
                v: E,
                h: L,
                side: L
            },
            "center-left": {
                v: E,
                h: L,
                side: L
            },
            right: {
                v: E,
                h: S,
                side: S
            },
            "center-right": {
                v: E,
                h: S,
                side: S
            },
            center: {
                v: E,
                h: E,
                side: pt
            },
            "center-center": {
                v: E,
                h: E,
                side: pt
            }
        }, fr[N].on = function(e, t) {
            this[Zt][e] || (this[Zt][e] = []), this[Zt][e].push(t)
        }, fr[N][s] = function(e) {
            var t;
            if (!this[Zt][e] || this[Zt][e][dt] == 0) return;
            t = this, ar._[Y](this[Zt][e], function(n) {
                t[Zt][e][n]()
            })
        }, fr[N][mn] = function() {
            var e, t, o, a, f;
            if (this[on]) {
                ar[r][l][Pt](this[st]);
                return
            }
            e = this, t = this[n], o = ar._[Nt](t[kt]), a = this[c], a[k]("max-width", "")[k]("max-height", "")[k](D, "")[k](K, ""), t[at] = ar._[Nt](t[D]), t[R] = ar._[Nt](t[K]), t[at] == Z && (t[at] = a.outerWidth() + 1), t[R] == Z && (t[R] = a.outerHeight() + 1);
            if (t.maxWidth != mt || t[D] == Z) t[at] = ar[ot](t[at]), t._maxWidth = ar[ot](ar._[Nt](t.maxWidth)), t[at] = Math.min(t[at], t._maxWidth);
            if (t.maxHeight != mt || t[K] == Z) t[R] = ar[sn](t[R]), t._maxHeight = ar[sn](ar._[Nt](t.maxHeight)), t[R] = Math.min(t[R], t._maxHeight);
            a[k](D, t[at])[k](K, t[R]), ar._.vars[nt] == xn && (t[R] == mt && !t[ut] && a[k](K, "-webkit-calc(" + t[R] + " + 70px)"), a.on(bt, "input,select,textarea", function(t, n) {
                if (n) return;
                window[i](function() {
                    ar[r][W][Pt](e[st]), window[i](function() {
                        ar[r][l][Pt](e[st])
                    }, 500)
                }, 500)
            })), f = this[Rt][t[u]], a[rn]("skel-layer-" + t[u])[wn](At, t[u]);
            switch (f.v) {
                case rt:
                    a[k](rt, 0);
                    break;
                case T:
                    a[k](T, 0);
                    break;
                case E:
                    a[k](rt, "50%")[k]("margin-top", An + ar.getHalf(t[R]))
            }
            switch (f.h) {
                case L:
                    a[k](L, 0);
                    break;
                case S:
                    a[k](S, 0);
                    break;
                case E:
                    a[k](L, "50%")[k]("margin-left", An + ar.getHalf(t[at]))
            }
            this[Mt][o][mn](this), t[b] && (ar[r][Un][rn](yt), ar[r][m] = this), this[on] = ht, this[s](mn)
        }, fr[N][Jt] = function() {
            var e, t;
            if (!this[on]) {
                ar[r][W][Pt](this[st]);
                return
            }
            e = this[n], t = ar._[Nt](e[kt]), t in this[Mt] || (t = an), this[Mt][t][Jt](this), e[b] && ar[r][m] === this && (ar[r][Un][dn](yt), ar[r][m] = z), this[s](Jt), this[on] = pt
        }, fr[N].init = function() {
            var t = this[n],
                r = e(this[st]),
                s = this;
            r[A](), r[Pn](Fn).each(function() {
                ar.parseInit(e(this))
            }), r[rn]("skel-layer")[wn](Ft, this.index)[k](zt, ar[n].baseZIndex)[k](u, On)[k]("-ms-overflow-style", "-ms-autohiding-scrollbar")[k]("-webkit-overflow-scrolling", "touch")[Jt]();
            switch (t.orientation) {
                case "vertical":
                    r[k](Dn, Z)[k](P, ut);
                    break;
                case "horizontal":
                    r[k](P, Z)[k](Dn, ut);
                    break;
                case an:
                default:
            }
            if (!t[u] || !(t[u] in this[Rt])) t[u] = "top-left";
            t[Hn] || (t[Hn] = this[Rt][t[u]][Hn]);
            if (!t[kt] || typeof t[kt] !== Nn && !(t[kt] in this[Mt])) t[kt] = an;
            t.clickToHide && r[Pn]("a")[k](wt, gn).on("click.skel-layers", function(t) {
                var r, o, u = e(this);
                if (u[qt]("skel-layers-ignore")) return;
                t[Qt](), t[Wt](), s[Jt]();
                if (u[qt]("skel-layers-ignoreHref")) return;
                r = u[Vn]("href"), o = u[Vn]("target"), typeof r !== Yt && r != "" && window[i](function() {
                    o == "_blank" && ar._.vars[nt] != "wp" ? window.open(r) : window.location.href = r
                }, ar[n][C] + 10)
            }), r.on("touchstart", function(e) {
                s[Ut] = e[Lt][qn][0].pageX, s[$t] = e[Lt][qn][0].pageY
            }).on("touchmove", function(e) {
                var n, i, o, u, a, f, l;
                if (s[Ut] === z || s[$t] === z) return;
                n = s[Ut] - e[Lt][qn][0].pageX, i = s[$t] - e[Lt][qn][0].pageY, o = r.outerHeight(), u = r.get(0).scrollHeight - r[X]();
                if (t[ut] && t.swipeToHide) {
                    a = pt, f = 20, l = 50;
                    switch (t[Hn]) {
                        case L:
                            a = i < f && i > -1 * f && n > l;
                            break;
                        case S:
                            a = i < f && i > -1 * f && n < -1 * l;
                            break;
                        case rt:
                            a = n < f && n > -1 * f && i > l;
                            break;
                        case T:
                            a = n < f && n > -1 * f && i < -1 * l
                    }
                    if (a) return s[Ut] = z, s[$t] = z, s[Jt](), pt
                }
                if (r[X]() == 0 && i < 0 || u > o - 2 && u < o + 2 && i > 0) return pt
            }), this[c] = r
        }, fr[N][xt] = function() {
            return this[c] !== z
        }, fr[N][jn] = function() {
            return this[c].is(":visible")
        }, fr[N][d] = function() {
            ar[r][l][Pt](this[c])
        }, fr[N][g] = function() {
            if (!this[c][un]()) return;
            ar[r][W][Pt](this[c])
        }, fr[N].resume = function(t) {
            if (!this[xt]()) return;
            this[c][Pn](Fn).each(function() {
                ar.parseResume(e(this))
            }), this[n][ut] || this[mn](t)
        }, fr[N].suspend = function() {
            if (!this[xt]()) return;
            this[c][o](), this[c][Pn](Fn).each(function() {
                ar.parseSuspend(e(this))
            }), this[on] && this[Jt]()
        }, ar = {
            cache: {
                visibleWrapper: z,
                body: z,
                exclusiveLayer: z,
                document: z,
                html: z,
                htmlbody: z,
                hiddenWrapper: z,
                layers: {},
                parent: z,
                window: z,
                wrapper: z
            },
            config: {
                baseZIndex: 1e4,
                layers: {},
                mode: u,
                speed: 500,
                easing: "ease",
                wrap: ht
            },
            eventType: "click touchend",
            layerIndex: 1,
            create: function(t, i, s) {
                var o, a;
                if (t in ar[r][F]) return;
                if (u in i) {
                    if (!i[Wn] && (o = e(Xn + t))[dt] == 0) return;
                    return ar[n].wrap || (ar[n].wrap = ht, ar.initWrappers()), a = new fr(t, i, ar.layerIndex++), ar[r][F][t] = a, o && (o[$]()[bn](a[st]), o.remove()), s || ar._.updateState(), a
                }
                return
            },
            destroy: function(i) {
                if (i in ar[r][F]) {
                    var s = ar[r][F][i];
                    return s.suspend(), s[n][En] && s[n][En] != ar._.sd && (a = ar._[Tn](s[n][En]), ar._[Y](a, function(e) {
                        ar._.removeCachedElementFromState(a[e], i)
                    })), s[n][Vt] && (a = ar._[Tn](s[n][Vt]), ar._[Y](a, function(e) {
                        ar._.removeCachedElementFromBreakpoint(a[e], i)
                    })), e(s[st]).remove(), delete ar[r][F][i], t.uncacheElement(i), ht
                }
                return
            },
            get: function(e) {
                if (e in ar[r][F]) return ar[r][F][e];
                return
            },
            hide: function(e) {
                ar[r][F][e][Jt]()
            },
            show: function(e) {
                ar[r][F][e][mn]()
            },
            toggle: function(e) {
                var t = ar[r][F][e];
                t[jn]() ? t[Jt]() : t[mn]()
            },
            getBaseFontSize: function() {
                return ar._.vars.IEVersion < 9 ? 16.5 : parseFloat(getComputedStyle(ar[r][Un].get(0)).fontSize)
            },
            getHalf: function(e) {
                var t = parseInt(e);
                return typeof e == "string" && e.charAt(e[dt] - 1) == "%" ? Math.floor(t / 2) + "%" : Math.floor(t / 2) + _n
            },
            lockView: function(e) {
                e == kn && ar[r][$n][k](P, ut), ar[n][Mn] != j && t.vars[nt] == xn && ar[r][ct][k](K, ar[r].document[K]()), ar[r][O].on(it, function(e) {
                    e[Qt](), e[Wt](), ar[r][m] && ar[r][m][Jt]()
                }), ar[r][en].on(It, function(e) {
                    ar[r][m] && ar[r][m][Jt]()
                }), ar._.vars.isMobile || window[i](function() {
                    ar[r][en].on(jt, function(e) {
                        ar[r][m] && ar[r][m][Jt]()
                    })
                }, ar[n][C] + 50)
            },
            parseInit: function(t) {
                var n, i, s = t.get(0),
                    o = t[Vn]("data-action"),
                    u = t[Vn]("data-args"),
                    a, f;
                o && u && (u = u.split(","));
                switch (o) {
                    case "toggleLayer":
                    case "layerToggle":
                        t[k](wt, gn)[k]("cursor", "pointer"), n = function(t) {
                            t[Qt](), t[Wt]();
                            if (ar[r][m]) return ar[r][m][Jt](), pt;
                            var n = e(this),
                                i = ar[r][F][u[0]];
                            i[jn]() ? i[Jt]() : i[mn]()
                        }, t.on(ar.eventType, n);
                        break;
                    case "navList":
                        a = e(Xn + u[0]), n = a[Pn]("a"), i = [], n.each(function() {
                            var t = e(this),
                                n, r;
                            n = Math.max(0, t.parents("li")[dt] - 1), r = t[Vn]("href"), i.push('<a class="link depth-' + n + '"' + (typeof r !== Yt && r != "" ? ' href="' + r + '"' : "") + '><span class="indent-' + n + '"></span>' + t.text() + "</a>")
                        }), i[dt] > 0 && t[Wn]("<nav>" + i.join("") + "</nav>");
                        break;
                    case "copyText":
                        a = e(Xn + u[0]), t[Wn](a.text());
                        break;
                    case "copyHTML":
                        a = e(Xn + u[0]), t[Wn](a[Wn]());
                        break;
                    case "moveElementContents":
                        a = e(Xn + u[0]), s[y] = function() {
                            a[$]().each(function() {
                                var n = e(this);
                                if (n[qt](p)) return;
                                t[Pt](n), n[rn](p), n[Et]()
                            })
                        }, s[M] = function() {
                            t[$]().each(function() {
                                var t = e(this);
                                if (!t[qt](p)) return;
                                a[Pt](t), t[dn](p), ar.refresh(t), t[St]()
                            })
                        }, s[y]();
                        break;
                    case "moveElement":
                        a = e(Xn + u[0]), s[y] = function() {
                            if (a[qt](p)) return;
                            e(ft + a[Vn]("id") + '" />').insertBefore(a), t[Pt](a), a[rn](p), a[Et]()
                        }, s[M] = function() {
                            if (!a[qt](p)) return;
                            e(Ot + a[Vn]("id")).replaceWith(a), a[dn](p), ar.refresh(a), a[St]()
                        }, s[y]();
                        break;
                    case "moveCell":
                        a = e(Xn + u[0]), f = e(Xn + u[1]), s[y] = function() {
                            e(ft + a[Vn]("id") + '" />').insertBefore(a), t[Pt](a), a[k](D, Z), f && f[nn]()
                        }, s[M] = function() {
                            e(Ot + a[Vn]("id")).replaceWith(a), a[k](D, ""), f && f[k](D, "")
                        }, s[y]();
                        break;
                    default:
                }
            },
            parseResume: function(e) {
                var t = e.get(0);
                t[y] && t[y]()
            },
            parseSuspend: function(e) {
                var t = e.get(0);
                t[M] && t[M]()
            },
            recalc: function(e, t) {
                var n = ar._.parseMeasurement(e),
                    r;
                switch (n[1]) {
                    case "%":
                        r = Math.floor(t * (n[0] / 100));
                        break;
                    case "em":
                        r = ar.getBaseFontSize() * n[0];
                        break;
                    default:
                    case _n:
                        r = n[0]
                }
                return r
            },
            recalcH: function(t) {
                return ar.recalc(t, e(window)[K]())
            },
            recalcW: function(t) {
                return ar.recalc(t, e(window)[D]())
            },
            refresh: function(t) {
                var n;
                t ? n = t.filter(J) : n = e(J), n[A](ht)[bn](ar[r][l])
            },
            unlockView: function(e) {
                e == kn && ar[r][$n][k](P, ""), ar[n][Mn] != j && t.vars[nt] == xn && ar[r][ct][k](K, ""), ar[r][O].off(it), ar[r][en].off(It), ar._.vars.isMobile || ar[r][en].off(jt)
            },
            init: function() {
                n in ar[n] && (ar._.extend(ar[n], ar[n][n]), delete ar[n][n]), ar._[Y](ar[n], function(e) {
                    ar[n][e] && typeof ar[n][e] == Nn && u in ar[n][e] && (ar[n][F][e] = ar[n][e], delete ar[n][e])
                }), typeof ar[n][Mn] == "function" && (ar[n][Mn] = ar[n][Mn]()), ar[n][Mn] == j && (!ar._[Gt](j) || !ar._[Gt](U)) && (ar[n][Mn] = u), ar[n][Mn] == u && !ar._[Gt](U) && (ar[n][Mn] = Dt), ar._.vars[nt] == "wp" && (ar[n][Mn] = Dt), ar[r][en] = e(window), e(function() {
                    ar.initAnimation(), ar.initObjects(), ar[n].wrap && ar.initWrappers(), ar.initLayers(), ar.initIncludes(), ar._.updateState()
                })
            },
            initIncludes: function() {
                e(".skel-layers-include").each(function() {
                    ar.parseInit(e(this))
                })
            },
            initLayers: function() {
                ar._[Y](ar[n][F], function(e) {
                    ar.create(e, ar[n][F][e], ht)
                })
            },
            initObjects: function() {
                ar[r].document = e(document), ar[r][Wn] = e(Wn), ar[r][Un] = e(Un), ar[r][$n] = e("html,body")
            },
            initAnimation: function() {
                ar[n][Mn] == Dt ? (e.fn[vt] = function(t) {
                    e(this).fadeTo(ar[n][C], 1, t)
                }, e.fn[lt] = function(t) {
                    e(this).fadeTo(ar[n][C], 0, t)
                }) : (e.fn[vt] = function(t) {
                    e(this)[k](pn, 1), t && window[i](t, ar[n][C] + 50)
                }, e.fn[lt] = function(t) {
                    e(this)[k](pn, 0), t && window[i](t, ar[n][C] + 50)
                });
                if (ar[n][Mn] == j) e.fn[o] = function() {
                    return e(this)[h](0, 0)
                }, e.fn[h] = function(t, n) {
                    return e(this)[k](j, "translate(" + t + "px, " + n + "px)")
                }, e.fn[A] = function() {
                    return e(this)[k](Kt, ut)[k](Ln, "500")[Cn](U, "transform " + ar[n][C] / 1e3 + Sn + ar[n][Tt] + "," + Rn + ar[n][C] / 1e3 + Sn + ar[n][Tt])[wn](V, [Kt, Ln, cn, tn, vn, hn, U])
                };
                else {
                    var s = [];
                    ar[n][Mn] == Dt ? (ar[r][en].resize(function() {
                        if (ar[n][C] != 0) {
                            var e = ar[n][C];
                            ar[n][C] = 0, window[i](function() {
                                ar[n][C] = e, s = []
                            }, 0)
                        }
                    }), ar[n][Tt].substr(0, 4) == "ease" ? (ar[n][Tt] = "swing", ar[n][C] = ar[n][C] * .65) : ar[n][Tt] = "linear", e.fn[H] = function(t, r) {
                        e(this)[Dt](t, ar[n][C], ar[n][Tt], r)
                    }, e.fn[A] = function(t) {
                        return e(this)[k](u, t ? On : fn)[wn](V, [u])
                    }) : (ar[r][en].resize(function() {
                        window[i](function() {
                            s = []
                        }, 0)
                    }), e.fn[H] = function(t, r) {
                        var s = e(this);
                        ar._[Y](t, function(e) {
                            s[k](e, t[e])
                        }), window[i](r, ar[n][C])
                    }, e.fn[A] = function(t) {
                        return e(this)[k](U, "top " + ar[n][C] / 1e3 + Sn + ar[n][Tt] + "," + "right " + ar[n][C] / 1e3 + Sn + ar[n][Tt] + "," + "bottom " + ar[n][C] / 1e3 + Sn + ar[n][Tt] + "," + "left " + ar[n][C] / 1e3 + Sn + ar[n][Tt] + "," + Rn + ar[n][C] / 1e3 + Sn + ar[n][Tt])[k](u, t ? On : fn)[wn](V, [cn, tn, vn, hn, U, u])
                    }), e[x] = function(e) {
                        return e && e.slice(-1) == "%" ? e : parseInt(e)
                    }, e.fn[o] = function() {
                        for (var t = 0; t < this[dt]; t++) {
                            var n = this[t],
                                i = e(n);
                            s[n.id] && i[H](s[n.id], function() {
                                ar._[Y](s[n.id], function(e) {
                                    i[k](e, s[n.id][e])
                                }), ar[r][ct][k](P, ""), ar[r][O][k](D, Z)[k](gt, 0)
                            })
                        }
                        return e(this)
                    }, e.fn[h] = function(n, i) {
                        var o, f, l, c;
                        n = parseInt(n), i = parseInt(i), n != 0 ? ((t.vars[nt] == xn ? ar[r][ct] : ar[r][Un])[k](P, ut), ar[r][O][k](D, ar[r][en][D]())) : l = function() {
                            (t.vars[nt] == xn ? ar[r][ct] : ar[r][Un])[k](P, ""), ar[r][O][k](D, Z)
                        }, i < 0 ? ar[r][O][k](gt, Math.abs(i)) : c = function() {
                            ar[r][O][k](gt, 0)
                        };
                        for (o = 0; o < this[dt]; o++) {
                            var h = this[o],
                                p = e(h),
                                d;
                            if (!s[h.id])
                                if (d = fr[N][Rt][p[wn](At)]) {
                                    s[h.id] = {};
                                    switch (d.v) {
                                        case E:
                                        case rt:
                                            s[h.id][rt] = e[x](h.style[rt]);
                                            break;
                                        case T:
                                            s[h.id][T] = e[x](h.style[T])
                                    }
                                    switch (d.h) {
                                        case E:
                                        case L:
                                            s[h.id][L] = e[x](h.style[L]);
                                            break;
                                        case S:
                                            s[h.id][S] = e[x](h.style[S])
                                    }
                                } else d = p[u](), s[h.id] = {
                                    top: d[rt],
                                    left: d[L]
                                };
                            a = {}, ar._[Y](s[h.id], function(e) {
                                var t;
                                switch (e) {
                                    case rt:
                                        t = ar[sn](s[h.id][e]) + i;
                                        break;
                                    case T:
                                        t = ar[sn](s[h.id][e]) - i;
                                        break;
                                    case L:
                                        t = ar[ot](s[h.id][e]) + n;
                                        break;
                                    case S:
                                        t = ar[ot](s[h.id][e]) - n
                                }
                                a[e] = t
                            }), p[H](a, function() {
                                l && l(), c && c()
                            })
                        }
                        return e(this)
                    }
                }
            },
            initWrappers: function() {
                ar[n][Mn] != j ? (ar[r][Un].wrapInner('<div id="skel-layers-parent" />'), ar[r][ct] = e("#skel-layers-parent"), ar[r][ct][k](u, fn)[k](L, 0)[k](rt, 0)[k]("min-height", mt)[k](D, mt)) : ar[r][ct] = ar[r][Un], ar[r][ct].wrapInner('<div id="skel-layers-wrapper" />'), ar[r][O] = e("#skel-layers-wrapper"), ar[r][O][k](u, zn)[k](L, 0)[k](S, 0)[k](rt, 0)[A](), ar[r][W] = e('<div id="skel-layers-hiddenWrapper" />')[bn](ar[r][ct]), ar[r][W][k](K, mt), ar[r][l] = e('<div id="skel-layers-visibleWrapper" />')[bn](ar[r][ct]), ar[r][l][k](u, zn), ar._[Bt](_t, ar[r][W][0]), ar._[Bt]("skel_layers_visibleWrapper", ar[r][l][0]), ar._[Bt]("skel_layers_wrapper", ar[r][O][0]), e("[autofocus]").focus(), ar.refresh()
            }
        }, ar)
    }(jQuery))
});