(self.webpackChunkmobile_bg_web_personal = self.webpackChunkmobile_bg_web_personal || []).push([
    [4973], {
        56568: function(e) {
            e.exports = {
                wrapper: "wrapper-1dYK2"
            }
        },
        9600: function(e) {
            e.exports = {
                popover: "popover-2b2Se",
                inner: "inner-2RWBQ",
                isTextChild: "isTextChild-UoNFv",
                hideArrow: "hideArrow-3R8if",
                wrapper: "wrapper-3vr7b",
                arrow: "arrow-2ewe-",
                fadeIn: "fadeIn-3JhnW",
                "anim-fade-in": "anim-fade-in-7t9YM",
                fadeOut: "fadeOut-1XCCp",
                "anim-fade-out": "anim-fade-out-3QFmd",
                fadeInWithDirection: "fadeInWithDirection-1Gsgl",
                "anim-bottom": "anim-bottom-3src-",
                fadeOutWithDirection: "fadeOutWithDirection-2zDr1",
                "anim-bottom-reverse": "anim-bottom-reverse-25Il7",
                fadeInWithScale: "fadeInWithScale-kScgN",
                "anim-bottom-scale": "anim-bottom-scale-2XHG9",
                fadeOutWithScale: "fadeOutWithScale-3G7On",
                "anim-bottom-scale-reverse": "anim-bottom-scale-reverse-1QejD",
                top: "top-2DYPo",
                "anim-top": "anim-top-2BRyH",
                "anim-top-reverse": "anim-top-reverse-3j27p",
                "anim-top-scale": "anim-top-scale-IGIrO",
                "anim-top-scale-reverse": "anim-top-scale-reverse-18FQC",
                left: "left-1dQsT",
                "anim-left": "anim-left-2XYWk",
                "anim-left-reverse": "anim-left-reverse-fHZYC",
                "anim-left-scale": "anim-left-scale-1Pdo1",
                "anim-left-scale-reverse": "anim-left-scale-reverse-1YZE_",
                right: "right-2leuQ",
                "anim-right": "anim-right-DuBZa",
                "anim-right-reverse": "anim-right-reverse--hIWN",
                "anim-right-scale": "anim-right-scale-10GJL",
                "anim-right-scale-reverse": "anim-right-scale-reverse-2AtEV",
                visible: "visible-28pVA",
                closeIcon: "closeIcon-3TjPf",
                closeIconWrapper: "closeIconWrapper-uxzfS",
                closeHotArea: "closeHotArea-2YxEu",
                closePlaceCenter: "closePlaceCenter-3GB53",
                deepShadow: "deepShadow-2Vb2P"
            }
        },
        84973: function(e, t, o) {
            "use strict";
            o.d(t, {
                A: function() {
                    return _
                }
            });
            var i = o(14242),
                n = o(33514),
                s = o(32485),
                r = o.n(s),
                a = o(14511),
                l = o(38869),
                c = o(46694),
                p = o(19670),
                u = o(52248),
                h = o(89243);

            function d(e) {
                return e instanceof HTMLElement || e instanceof SVGElement
            }

            function f(e) {
                const t = function(e) {
                    return e && "object" == typeof e && d(e.nativeElement) ? e.nativeElement : d(e) ? e : null
                }(e);
                return t || (e instanceof n.Component ? h.findDOMNode ? .(e) : null)
            }
            var m = o(30985);
            const b = function() {
                    for (var e = arguments.length, t = new Array(e), o = 0; o < e; o++) t[o] = arguments[o];
                    return (0, n.useMemo)((() => function() {
                        for (var e = arguments.length, t = new Array(e), o = 0; o < e; o++) t[o] = arguments[o];
                        const i = t.filter(Boolean);
                        return i.length <= 1 ? i[0] : e => {
                            t.forEach((t => {
                                ((e, t) => {
                                    "function" == typeof e ? e(t) : "object" == typeof e && e && "current" in e && (e.current = t)
                                })(t, e)
                            }))
                        }
                    }(...t)), t)
                },
                v = e => {
                    if (!e) return !1;
                    if (t = e, (0, n.isValidElement)(t) && !(0, m.isFragment)(t) && e.props.propertyIsEnumerable("ref")) return !0;
                    var t;
                    const o = (0, m.isMemo)(e) ? e.type.type : e.type;
                    return !("function" == typeof o && !o.prototype ? .render && o.$$typeof !== m.ForwardRef) && !("function" == typeof e && !e.prototype ? .render && e.$$typeof !== m.ForwardRef)
                };
            class g extends n.Component {
                render() {
                    return this.props.children
                }
            }

            function C(e, t) {
                const {
                    children: o
                } = e, i = n.useRef(null), s = n.useRef(null), r = "function" == typeof o, a = r ? o(i) : o, l = !r && n.isValidElement(a) && v(a), c = l ? a.ref : null, p = b(c, i);
                return n.useImperativeHandle(t, (() => f(i.current) || (i.current && "object" == typeof i.current ? f(i.current ? .nativeElement) : null) || f(s.current))), n.createElement(g, {
                    ref: s
                }, l ? n.cloneElement(a, {
                    ref: p
                }) : a)
            }
            var P = n.forwardRef(C);

            function E(e, t) {
                const {
                    children: o
                } = e;
                return ("function" == typeof o ? [o] : n.Children.toArray(o)).map(((o, s) => {
                    const r = o ? .key || `observer-key-${s}`;
                    return n.createElement(P, (0, i.A)({}, e, {
                        key: r,
                        ref: 0 === s ? t : void 0
                    }), o)
                }))
            }
            var y = n.forwardRef(E);
            const T = (0, n.createContext)({
                    isVisible: !1
                }),
                S = e => {
                    let {
                        children: t,
                        isVisible: o,
                        OverlayWrapper: i
                    } = e;
                    return n.createElement(T.Provider, {
                        value: {
                            isVisible: o
                        }
                    }, i ? n.createElement(i, null, t) : t)
                },
                V = () => {},
                w = (0, n.createContext)({
                    contentPosInfo: {},
                    adaptedPlacement: "bottom",
                    setContentPosInfo: V,
                    setAdaptedPlacement: V
                }),
                k = () => (0, n.useContext)(w),
                O = e => {
                    let {
                        children: t,
                        placement: o
                    } = e;
                    const [i, s] = (0, n.useState)({
                        contentOffsetX: 0,
                        contentOffsetY: 0,
                        popupWidth: 0,
                        popupHeight: 0
                    }), [r, a] = (0, n.useState)(o || "bottom");
                    return n.createElement(w.Provider, {
                        value: {
                            contentPosInfo: i,
                            setContentPosInfo: s,
                            adaptedPlacement: r,
                            setAdaptedPlacement: a
                        }
                    }, t)
                };
            var W = o(50878);
            o(44114);

            function L(e) {
                return e ? .ownerDocument ? .defaultView || window || {}
            }

            function R(e, t, o) {
                const i = {
                    prevPlacement: "",
                    switchPlacement: "",
                    offsetX: 0,
                    offsetY: 0,
                    width: 0,
                    height: 0
                };
                if (!e) return i;
                const n = document ? .documentElement ? .clientWidth || 0,
                    s = document ? .documentElement ? .clientHeight || 0,
                    {
                        top: r,
                        bottom: a,
                        left: l,
                        right: c,
                        width: p,
                        height: u
                    } = e ? .getBoundingClientRect() || {};
                if (!(r || a || l || c || p || u)) return i;
                if (Object.assign(i, {
                        width: p,
                        height: u
                    }), (t ? .startsWith("top") || t ? .startsWith("bottom")) && (l < n && c >= n && Object.assign(i, {
                        offsetX: n - c - 20,
                        offsetY: 0
                    }), l <= 0 && c > 0 && Object.assign(i, {
                        offsetX: 20 - l,
                        offsetY: 0
                    })), (t ? .startsWith("left") || t ? .startsWith("right")) && (r < s && a >= s && Object.assign(i, {
                        offsetX: 0,
                        offsetY: s - a - 20
                    }), r <= 0 && a > 0 && Object.assign(i, {
                        offsetX: 0,
                        offsetY: 20 - r
                    })), t ? .startsWith("top") && r <= 0 && Object.assign(i, {
                        prevPlacement: "top",
                        switchPlacement: "bottom"
                    }), t ? .startsWith("bottom") && a >= s && Object.assign(i, {
                        prevPlacement: "bottom",
                        switchPlacement: "top"
                    }), t ? .startsWith("left")) {
                    (!o ? .isRTL && l <= 0 && c > 0 || o ? .isRTL && l < n && c >= n) && Object.assign(i, {
                        prevPlacement: "left",
                        switchPlacement: "right"
                    })
                }
                if (t ? .startsWith("right")) {
                    (!o ? .isRTL && l < n && c >= n || l <= 0 && c > 0) && Object.assign(i, {
                        prevPlacement: "right",
                        switchPlacement: "left"
                    })
                }
                return i
            }
            const N = (e, t, o) => t < e ? Math.round(e) : t > o ? Math.round(o) : Math.round(t);
            var x = o(48158);

            function M(e, t, o, i, n) {
                let {
                    enableScrollToHide: s,
                    onClose: r
                } = n;
                const a = (0, W.w)((() => {
                    i(), s && r ? .()
                }));
                (0, x.A)((() => {
                    if (e && t && o) {
                        const e = t,
                            o = function(e) {
                                const t = [];
                                let o = e ? .parentElement;
                                const i = ["hidden", "scroll", "clip", "auto"];
                                for (; o;) {
                                    const {
                                        overflowX: e,
                                        overflowY: n,
                                        overflow: s
                                    } = L(o) ? .getComputedStyle(o) || {};
                                    [e, n, s].some((e => i.includes(e))) && t.push(o), o = o.parentElement
                                }
                                return t
                            }(e),
                            n = L(e),
                            s = new Set([n, ...o]);
                        return s.forEach((e => {
                            e ? .addEventListener("scroll", a, {
                                passive: !0
                            })
                        })), n ? .addEventListener("resize", a, {
                            passive: !0
                        }), i(), () => {
                            s.forEach((e => {
                                e ? .removeEventListener("scroll", a), n ? .removeEventListener("resize", a)
                            }))
                        }
                    }
                }), [e, t, o])
            }
            var H = o(56568),
                I = o.n(H);

            function D(e) {
                return +e || 0
            }
            let Y;
            const A = e => {
                let {
                    className: t,
                    onClose: o,
                    popoverVisible: i,
                    children: s,
                    style: a,
                    originPlacement: l,
                    triggerNode: p,
                    popupNode: u,
                    size: h = "md",
                    appendToBody: d,
                    setParentState: f,
                    enableScrollToHide: m,
                    adapted: b
                } = e;
                const {
                    isRTL: v
                } = (0, c.Sz)() || {}, [g, C] = (0, n.useState)(!1), {
                    adaptedPlacement: P = l,
                    setAdaptedPlacement: E
                } = k() || {}, [y, T] = (0, n.useState)({}), S = (0, W.w)((() => {
                    if (null === p ? .offsetParent) return void o ? .();
                    if (!b && !d) return;
                    const [e, {
                        prevPlacement: t,
                        switchPlacement: n,
                        width: s,
                        height: r
                    }] = function(e, t, o, i) {
                        let n;
                        return e && (n = e.getBoundingClientRect ? .()), [n, R(t ? .current, o, i)]
                    }(p, u, P, {
                        isRTL: v
                    });
                    if (b && i && n && t) {
                        const e = P ? .replace(t, n);
                        e && (g ? clearTimeout(Y) : (E ? .(e), C(!0), Y = setTimeout((() => {
                            C(!1)
                        }), 20)))
                    }
                    if (!d) return;
                    const {
                        x: a,
                        y: l
                    } = function() {
                        let e = 0,
                            t = 0;
                        return window ? .pageXOffset ? (e = window ? .pageXOffset, t = window ? .pageYOffset) : (e = document.documentElement ? .scrollLeft || document.body ? .parentNode ? .scrollLeft || document.body ? .scrollLeft || 0, t = document.documentElement ? .scrollTop || document.body ? .parentNode ? .scrollTop || document.body ? .scrollTop || 0), {
                            x: e,
                            y: t
                        }
                    }(), {
                        offsetX: c,
                        offsetY: h
                    } = function(e, t, o, i) {
                        return o ? .startsWith("top") ? {
                            offsetX: e / 2,
                            offsetY: 0
                        } : o ? .startsWith("left") ? {
                            offsetX: i ? e : 0,
                            offsetY: t / 2
                        } : o ? .startsWith("right") ? {
                            offsetX: i ? 0 : e,
                            offsetY: t / 2
                        } : o ? .startsWith("bottom") ? {
                            offsetX: e / 2,
                            offsetY: t
                        } : {
                            offsetX: 0,
                            offsetY: 0
                        }
                    }(e ? .width || 0, e ? .height || 0, P, v);
                    T({
                        top: D(e ? .top) + D(l) + D(h),
                        left: D(e ? .left) + D(a) + D(c),
                        right: D(e ? .right) + D(a) - D(c)
                    })
                }));
                return (0, n.useEffect)((() => {
                    i || C(!1)
                }), [i]), (0, n.useEffect)((() => {
                    S()
                }), [P, p, u, s]), M(i, p, u, S, {
                    enableScrollToHide: m,
                    onClose: o
                }), (0, n.useEffect)((() => () => {
                    clearTimeout(Y)
                }), []), d ? n.createElement("div", {
                    style: {
                        top: y ? .top,
                        left: y ? .left,
                        ...v ? {
                            right: "unset"
                        } : {},
                        ...a
                    },
                    className: r()(I().wrapper, t)
                }, s) : s
            };
            var X = (0, n.memo)(A),
                j = o(70994);

            function B(e) {
                const {
                    children: t,
                    PortalComponentProps: o,
                    usePortal: i = !1,
                    isMountPopup: s,
                    mountPopupWhenInit: r,
                    unMountPopupWhenHide: a,
                    popoverVisible: l
                } = e;
                return !s && r || !l && a ? null : i ? n.createElement(j.A, o, t) : t
            }
            var $ = o(9600),
                F = o.n($);
            const z = (0, a.W4)({
                name: "InnerPopover"
            })((0, n.memo)((function(e) {
                const {
                    children: t,
                    isTextChild: o,
                    visible: s,
                    hideArrow: a,
                    closeIconCls: h,
                    showPopupClose: d = !1,
                    animation: f,
                    innerClassName: m,
                    innerStyle: b,
                    arrowClassName: v,
                    style: g,
                    className: C,
                    deepShadow: P,
                    animationType: E = "fadeWithDirection",
                    onCloseClick: y,
                    onClick: T,
                    onMouseLeave: V,
                    onMouseEnter: w,
                    setParentState: O,
                    originPlacement: W,
                    popupRef: L,
                    contentRef: x,
                    adapted: M,
                    OverlayWrapper: H
                } = e, [I, D] = (0, n.useState)(!0), [Y, A] = (0, n.useState)(!1), [X, j] = (0, n.useState)(!1), {
                    contentPosInfo: B,
                    setContentPosInfo: $,
                    adaptedPlacement: z = W,
                    setAdaptedPlacement: G
                } = k() || {}, {
                    contentOffsetX: _,
                    contentOffsetY: Q,
                    popupWidth: U,
                    popupHeight: Z
                } = B || {}, {
                    isRTL: J
                } = (0, c.Sz)() || {};
                (0, n.useEffect)((() => {
                    if (Y && x ? .current) {
                        const {
                            prevPlacement: e,
                            switchPlacement: t,
                            offsetX: o,
                            offsetY: i,
                            width: n,
                            height: s
                        } = R(x ? .current, z, {
                            isRTL: J
                        });
                        if (M && t && e) {
                            const o = z ? .replace(e, t);
                            o && G ? .(o)
                        }
                        $ ? .({
                            contentOffsetX: o,
                            contentOffsetY: i,
                            popupWidth: n,
                            popupHeight: s
                        })
                    }
                    Y && d && x ? .current && x ? .current ? .offsetHeight > 0 && j(x ? .current ? .offsetHeight <= 60), Y ? D(!1) : $ ? .({
                        contentOffsetX: 0,
                        contentOffsetY: 0,
                        popupWidth: 0,
                        popupHeight: 0
                    })
                }), [Y, d, x]), (0, n.useEffect)((() => {
                    const e = setTimeout((() => {
                        A(s), s || (G ? .(W), D(!0))
                    }), f && !s ? 300 : 0);
                    return () => {
                        clearTimeout(e)
                    }
                }), [s, f]);
                const [K, q] = (0, n.useMemo)((() => {
                    const e = {};
                    let t = "";
                    return z.indexOf("bottom") >= 0 ? (e.paddingTop = a ? 4 : 7, t = "bottom") : z.indexOf("top") >= 0 ? (e.paddingBottom = a ? 4 : 7, t = "top") : z.indexOf("left") >= 0 ? (e.paddingRight = a ? 4 : 7, t = "left") : z.indexOf("right") >= 0 && (e.paddingLeft = a ? 4 : 7, t = "right"), I && M && (e.opacity = 0), [e, t]
                }), [M, I, a, z]), ee = (0, n.useMemo)((() => {
                    let e = {};
                    if (z.indexOf("Bottom") >= 0 ? e.transform = "translateY(calc(-100% + 18px))" : z.indexOf("Top") >= 0 ? e.transform = "translateY(-18px)" : z.indexOf("Left") >= 0 ? (J && (e.left = "0"), e.transform = "translateX(-21px)") : z.indexOf("Right") >= 0 && (e.right = "-50%", e.transform = "translateX(21px)"), M && _ && U) {
                        e = {}, J && (e.left = "0");
                        const t = 21 - U,
                            o = -21;
                        z.indexOf("Left") >= 0 ? e.transform = `translateX(${N(t,-21+_,o)}px)` : z.indexOf("Right") >= 0 ? e.transform = `translateX(${N(t,21-U+_,o)}px)` : e.transform = `translateX(${N(t,-U/2+_,o)}px)`
                    }
                    if (M && Q && Z) {
                        e = {};
                        const t = 18 - Z,
                            o = -18;
                        z.indexOf("Bottom") >= 0 ? e.transform = `translateY(${N(t,18-Z+Q,o)}px)` : z.indexOf("Top") >= 0 ? e.transform = `translateY(${N(t,-18+Q,o)}px)` : e.transform = `translateY(${N(t,-Z/2+Q,o)}px)`
                    }
                    return { ...e,
                        ...b
                    }
                }), [b, z, U, Z, _, Q, M, J]), te = (0, n.useMemo)((() => o ? {
                    alt: t
                } : {}), [o, t]), [oe, ie] = (0, n.useMemo)((() => "fadeWithDirection" === E ? [F().fadeInWithDirection, F().fadeOutWithDirection] : "fadeWithScale" === E ? [F().fadeInWithScale, F().fadeOutWithScale] : [F().fadeIn, F().fadeOut]), [E]);
                return n.createElement(S, {
                    isVisible: Y,
                    OverlayWrapper: H
                }, n.createElement("div", {
                    ref: L,
                    className: r()(F().wrapper, F()[q], {
                        [F().hideArrow]: a,
                        [F().visible]: Y,
                        [oe]: s && f,
                        [ie]: !s && f,
                        [F().deepShadow]: P
                    }, C),
                    onMouseEnter: w,
                    onMouseLeave: V,
                    onClick: T,
                    style: { ...K,
                        ...g
                    },
                    role: "generic"
                }, a ? null : n.createElement(u.Uj, {
                    "aria-hidden": !0,
                    className: r()(F().arrow, v),
                    viewBox: "1 0 22 8"
                }), n.createElement("div", (0, i.A)({
                    className: r()(F().inner, o && F().isTextChild, m),
                    style: ee,
                    ref: x
                }, te), !!d && n.createElement(l.n, {
                    as: "span",
                    className: r()(F().closeHotArea, {
                        [F().closePlaceCenter]: X
                    }),
                    onClick: y
                }, n.createElement("i", {
                    className: r()(F().closeIconWrapper)
                }, n.createElement(p.A, {
                    "aria-hidden": !0,
                    className: r()(F().closeIcon, h)
                }))), t)))
            })));
            class G extends n.PureComponent {
                constructor() {
                    var e;
                    super(...arguments), e = this, this.wrapRef = n.createRef(), this.triggerNodeRef = n.createRef(), this.popupRef = n.createRef(), this.popupContentRef = n.createRef(), this.clickOutsideHandler = !1, this.touchOutsideHandler = !1, this.setWrapRef = e => {
                        this.wrapRef = e
                    }, this.setTriggerNodeRef = e => {
                        this.triggerNodeRef = e
                    }, this.setPopupRef = e => {
                        this.popupRef = e
                    }, this.state = {
                        prePopoverVisible: this.props.defaultVisible ? ? !1,
                        popoverVisible: this.props.defaultVisible ? ? !1
                    }, this.hasInited = () => {
                        const {
                            prePopoverVisible: e,
                            popoverVisible: t
                        } = this.state;
                        return !1 !== e || !1 !== t
                    }, this.setParentState = e => {
                        this.setState(e)
                    }, this.clearOutsideHandler = () => {
                        this.clickOutsideHandler && (document.removeEventListener("mousedown", this.onDocumentClick), this.clickOutsideHandler = !1), this.touchOutsideHandler && (document.removeEventListener("touchstart", this.onDocumentClick), this.touchOutsideHandler = !1)
                    }, this.onDocumentClick = e => {
                        const {
                            maskClosable: t,
                            enableSetVisibleAuto: o,
                            visible: i,
                            setVisibleFn: n
                        } = this.props || {};
                        if (!t) return;
                        const s = e.target,
                            r = this.popupRef,
                            a = this.triggerNodeRef;
                        r && r.contains && !r.contains(s) && a && a.contains && !a.contains(s) && (o && "boolean" == typeof i ? n ? .(!1) : this.close())
                    }, this.close = () => {
                        this.delaySetPopupVisible(!1, .01)
                    }, this.delayTimer = null, this.delaySetPopupVisible = function(t) {
                        const o = 1e3 * (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0);
                        e.clearDelayTimer(), o ? e.delayTimer = setTimeout((() => {
                            e.setPopupVisible(t), e.clearDelayTimer()
                        }), o) : e.setPopupVisible(t)
                    }, this.getChildCallback = e => this.props.children ? .props[e], this.getTargetCallback = e => this.props[e], this.touchEndLockSetVisible = !1, this.timeoutTouchEndLockSetVisible = null, this.onChildTouchEnd = e => {
                        this.state.popoverVisible || !this.props.trigger ? .includes("hover") || this.props.trigger ? .includes("click") || e.preventDefault(), this.getChildCallback("onTouchEnd") ? .(e), this.delaySetPopupVisible(!this.state.popoverVisible), this.touchEndLockSetVisible = !0, clearTimeout(this.timeoutTouchEndLockSetVisible), this.timeoutTouchEndLockSetVisible = setTimeout((() => {
                            this.touchEndLockSetVisible = !1
                        }), 310)
                    }, this.popupTouchEndLockSetVisible = !1, this.timeoutPopupTouchEndLockSetVisible = null, this.onPopupTouchEnd = e => {
                        this.getTargetCallback("onTouchEnd") ? .(e), this.popupTouchEndLockSetVisible = !0, clearTimeout(this.timeoutPopupTouchEndLockSetVisible), this.timeoutPopupTouchEndLockSetVisible = setTimeout((() => {
                            this.popupTouchEndLockSetVisible = !1
                        }), 310)
                    }, this.onChildMouseEnter = e => {
                        this.getChildCallback("onMouseEnter") ? .(e), this.touchEndLockSetVisible || this.delaySetPopupVisible(!0, this.props.mouseEnterDelay)
                    }, this.onChildMouseLeave = e => {
                        this.getChildCallback("onMouseLeave") ? .(e), this.delaySetPopupVisible(!1, this.props.mouseLeaveDelay)
                    }, this.onMouseEnter = e => {
                        this.getTargetCallback("onMouseEnter") ? .(e), this.popupTouchEndLockSetVisible || this.delaySetPopupVisible(!0, this.props.mouseEnterDelay)
                    }, this.onMouseLeave = e => {
                        this.getTargetCallback("onMouseLeave") ? .(e), this.delaySetPopupVisible(!1, this.props.mouseLeaveDelay)
                    }, this.onChildClick = e => {
                        e ? .stopPropagation(), this.getChildCallback("onClick") ? .(e), this.touchEndLockSetVisible || this.delaySetPopupVisible(!this.state.popoverVisible, .01)
                    }, this.onClick = e => {
                        this.getTargetCallback("onClick") ? .(e)
                    }, this.onCloseClick = e => {
                        this.getTargetCallback("onCloseClick") ? .(e), this.delaySetPopupVisible(!this.state.popoverVisible, .01)
                    }, this.getPopoverInnerProps = () => {
                        const e = {
                            visible: this.state.popoverVisible,
                            close: this.close,
                            isTextChild: !1,
                            popupRef: this.setPopupRef,
                            contentRef: this.popupContentRef,
                            originPlacement: this.props.placement,
                            setParentState: this.setState.bind(this)
                        };
                        return ["adapted", "animationType", "deepShadow", "closeIconCls", "showPopupClose", "arrowClassName", "style", "onCloseClick", "className", "animation", "hideArrow", "innerClassName", "innerStyle", "OverlayWrapper"].forEach((t => {
                            t in this.props && (e[t] = this.props[t])
                        })), "string" == typeof this.props.overlay && (e.isTextChild = !0), e
                    }
                }
                componentDidMount() {
                    "boolean" == typeof this.props.visible && this.delaySetPopupVisible(this.props.visible, .01)
                }
                componentDidUpdate(e, t, o) {
                    const i = this.props,
                        n = this.state;
                    if (e ? .overlay) {
                        if ("boolean" != typeof e.visible || (this.delaySetPopupVisible(!!this.props.visible, .01), i.enableSetVisibleAuto)) return n.popoverVisible ? (this.clickOutsideHandler || (document.addEventListener("mousedown", this.onDocumentClick), this.clickOutsideHandler = !0), void(this.touchOutsideHandler || (document.addEventListener("touchstart", this.onDocumentClick), this.touchOutsideHandler = !0))) : void this.clearOutsideHandler()
                    } else this.delaySetPopupVisible(!1, .01)
                }
                componentWillUnmount() {
                    this.clearDelayTimer(), this.clearOutsideHandler()
                }
                setPopupVisible(e) {
                    const {
                        popoverVisible: t
                    } = this.state;
                    t !== e && ("popoverVisible" in this.props || this.setState({
                        popoverVisible: e,
                        prePopoverVisible: t
                    }), this.props.onPopoverVisibleChange ? .(e))
                }
                clearDelayTimer() {
                    this.delayTimer && (clearTimeout(this.delayTimer), this.delayTimer = null)
                }
                render() {
                    const {
                        overlay: e,
                        children: t,
                        trigger: o,
                        visible: i,
                        outerClassName: s,
                        appendToBody: a,
                        placement: l = "bottom",
                        adapted: c,
                        mountPopupWhenInit: p,
                        unMountPopupWhenHide: u,
                        enableScrollToHide: h,
                        containerClassName: d
                    } = this.props, f = {}, m = this.getPopoverInnerProps();
                    "boolean" != typeof i && (o ? .includes("hover") && (f.onMouseEnter = this.onChildMouseEnter, f.onMouseLeave = this.onChildMouseLeave, m.onMouseEnter = this.onMouseEnter, m.onMouseLeave = this.onMouseLeave), o ? .includes("click") ? (f.onClick = this.onChildClick, m.onClick = this.onClick) : f.onTouchEnd = this.onChildTouchEnd, m.onCloseClick = this.onCloseClick, m.onTouchEnd = this.onPopupTouchEnd);
                    const b = !(!this.hasInited() || !e),
                        v = n.cloneElement(t, f),
                        g = b ? n.createElement(z, m, e) : null;
                    return n.createElement(O, {
                        placement: l
                    }, a ? n.createElement(n.Fragment, null, n.createElement(y, {
                        ref: this.setTriggerNodeRef
                    }, v), n.createElement(B, {
                        usePortal: !0,
                        isMountPopup: b,
                        mountPopupWhenInit: p,
                        unMountPopupWhenHide: u,
                        popoverVisible: this.state.popoverVisible
                    }, n.createElement(X, {
                        enableScrollToHide: h,
                        adapted: c,
                        appendToBody: a,
                        triggerNode: this.triggerNodeRef,
                        popoverVisible: this.state.popoverVisible,
                        onClose: this.close,
                        popupNode: this.popupContentRef,
                        originPlacement: l,
                        setParentState: this.setParentState,
                        className: d
                    }, g))) : n.createElement("div", {
                        ref: this.setWrapRef,
                        className: r()(F().popover, s)
                    }, n.createElement(y, {
                        ref: this.setTriggerNodeRef
                    }, v), n.createElement(X, {
                        enableScrollToHide: h,
                        adapted: c,
                        appendToBody: a,
                        triggerNode: this.triggerNodeRef,
                        popoverVisible: this.state.popoverVisible,
                        onClose: this.close,
                        popupNode: this.popupContentRef,
                        originPlacement: l,
                        setParentState: this.setParentState,
                        className: d
                    }, g)))
                }
            }
            G.defaultProps = {
                mouseEnterDelay: 0,
                mouseLeaveDelay: .15,
                placement: "bottom",
                trigger: ["hover"],
                hideArrow: !1,
                animation: !1,
                outsideCloseable: !1,
                maskClosable: !0,
                defaultVisible: !1,
                outerClassName: "",
                appendToBody: !1,
                enableSetVisibleAuto: !1,
                mountPopupWhenInit: !1,
                unMountPopupWhenHide: !1,
                setVisibleFn: e => {},
                containerClassName: ""
            };
            var _ = (0, n.forwardRef)((function(e, t) {
                return n.createElement(a.Ay, null, n.createElement(G, (0, i.A)({
                    ref: t
                }, e)))
            }))
        }
    }
]);
//# sourceMappingURL=http://temudebug.com/sourcemaps/assets/modernjs/4973_c2bf275485696ac5e3ca.js.map