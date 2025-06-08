(self.webpackChunkmobile_bg_web_personal = self.webpackChunkmobile_bg_web_personal || []).push([
    [957], {
        8267: function(e) {
            e.exports = {
                wrapS: "wrapS-54wuM",
                icon: "icon-25ULm",
                wrapM: "wrapM-1WpFO",
                wrap: "wrap-2A05c",
                static: "static-2TIl2"
            }
        },
        94689: function(e) {
            e.exports = {
                countWrap: "countWrap-2nTTE",
                amount: "amount-Dbn6k",
                arrowWrap: "arrowWrap-iijoi",
                arrow: "arrow-2lJW_",
                selectTitle: "selectTitle-2B2sp",
                small: "small-bFk3u",
                normal: "normal-3Qywj",
                smallFont: "smallFont-3byVS"
            }
        },
        61096: function(e) {
            e.exports = {
                qty: "qty-5bb3B",
                qtyInput: "qtyInput-3IQA3",
                dropdown: "dropdown-1O-lW",
                normalType: "normalType-1yJm_",
                smalldropdown: "smalldropdown-K7v8b",
                select: "select-2TsZ4",
                smallType: "smallType-vNL36",
                arrow: "arrow-4VzFX",
                item: "item-2pB3J",
                itemIcon: "itemIcon-25oZR",
                smallFont: "smallFont-Pba1A",
                smallInput: "smallInput-3Mw0a"
            }
        },
        62745: function(e) {
            e.exports = {
                wrap: "wrap-2FkAD",
                line: "line-2J7AW",
                overlayWrap: "overlayWrap-1yf4l"
            }
        },
        88588: function(e) {
            e.exports = {
                wrap: "wrap-2DLjO",
                inner: "inner-EqZDA",
                rrpMarque: "rrpMarque-1WqaH",
                rrpMarqueAnim: "rrpMarqueAnim-1AFLT",
                interactionWrap: "interactionWrap-14ojc",
                trigger: "trigger-365pS"
            }
        },
        13330: function(e) {
            e.exports = {
                imprAnchor: "imprAnchor-2pw1N"
            }
        },
        81928: function(e) {
            e.exports = {
                wrap: "wrap-3fTqn",
                popupCls: "popupCls-1S8RA",
                item: "item-2NTSh",
                left: "left-1tgy9",
                right: "right-3ziJt",
                hide: "hide-pjUx9",
                wrapOne: "wrapOne-BktY1",
                noActive: "noActive-1sPjV"
            }
        },
        25019: function(e) {
            e.exports = {
                dropdown: "dropdown-3DsYi"
            }
        },
        13526: function(e) {
            e.exports = {
                root: "root-1XYK_",
                item: "item-qJZAr",
                selectWrap: "selectWrap-zSx-i",
                arrowWrap: "arrowWrap-37Rc_",
                arrow: "arrow-1O_5W",
                open: "open-r4ZHf",
                itemIcon: "itemIcon-ZjzT7",
                itemDisabled: "itemDisabled-15hnC",
                input: "input-IH88D"
            }
        },
        95775: function(e) {
            e.exports = {
                dropdown: "dropdown-1LEgL",
                top: "top-3HZiE",
                bottom: "bottom-1EoNM",
                dropdownInner: "dropdownInner-3RQd1",
                selectWrap: "selectWrap-2_6e1",
                input: "input-3rRk6",
                arrowWrap: "arrowWrap-1CL2R",
                arrow: "arrow-1luXU",
                open: "open-2-nR2",
                small: "small-2Dcld",
                item: "item-1lih6",
                itemIcon: "itemIcon-1cUcL",
                itemDisabled: "itemDisabled-1nf7x"
            }
        },
        71547: function(e, t, n) {
            "use strict";
            n.d(t, {
                A: function() {
                    return o
                }
            });
            var r = n(33514);

            function o(e, t) {
                const n = (0, r.useRef)(!1);
                (0, r.useEffect)((() => {
                    if (n.current) return e();
                    n.current = !0
                }), t)
            }
        },
        98648: function(e, t, n) {
            "use strict";
            n.d(t, {
                R: function() {
                    return u
                }
            });
            var r = n(33514),
                o = n(50878),
                a = n(30463),
                s = n(63066),
                i = n(78113),
                l = n(54013);
            const u = e => {
                const [{
                    goodsSkuList: t,
                    giftInfoList: n,
                    cartGroupVo: u
                }] = (0, i.Fx)(), c = l.K7.cartController, {
                    isSidebar: m,
                    group: d
                } = e || {}, {
                    groupId: p,
                    groupJumpUrl: f,
                    pcSideBarGroupTitle: w,
                    groupTitle: y
                } = d || {}, v = n ? .length || 0, {
                    goodsList: E,
                    diffIdx: g
                } = (0, r.useMemo)((() => {
                    const {
                        groups: e = []
                    } = u || {};
                    return {
                        diffIdx: (() => {
                            let t = 0;
                            return e ? .find((e => e ? .groupId === p || (e ? .groupType === s.ws.Temu && (t += v), t += c.getIdxs({
                                groupId: e ? .groupId
                            }) ? .length || 0, !1))), t || 0
                        })(),
                        goodsList: p && c.getIdxs({
                            groupId: p
                        }) ? .map((e => t[e])) || []
                    }
                }), [c, u, v, t, p]), N = (0, o.w)((() => {
                    f && (0, a.MJ)(f)
                })), I = ((m ? w : y) || []).find((e => e ? .textFormat ? .color)) ? .textFormat ? .color;
                return {
                    goodsList: E,
                    gotoMall: N,
                    titleBaseColor: I,
                    diffIdx: g
                }
            }
        },
        33719: function(e, t, n) {
            "use strict";
            var r = n(33514);
            t.A = function(e) {
                const [t, n] = (0, r.useState)(e);
                return (0, r.useEffect)((() => {
                    n(e)
                }), [e]), [t, n]
            }
        },
        21349: function(e, t, n) {
            "use strict";
            var r = n(33514),
                o = n(32485),
                a = n.n(o),
                s = n(14511),
                i = n(85283),
                l = n(13281),
                u = n(82370),
                c = n(8267),
                m = n.n(c),
                d = function(e) {
                    return e.small = "s", e.medium = "m", e
                }(d || {}),
                p = function(e) {
                    return e[e.SIDE = 1] = "SIDE", e[e.PANEL = 2] = "PANEL", e[e.LIMIT_POPUP = 3] = "LIMIT_POPUP", e[e.WISHLIST = 4] = "WISHLIST", e[e.OTHER = 0] = "OTHER", e
                }(p || {});
            const f = (0, r.forwardRef)(((e, t) => {
                let {
                    url: n,
                    onClick: o,
                    size: s = d.medium,
                    goodsId: c,
                    className: f,
                    chargerData: w,
                    pos: y = p.OTHER,
                    isStatic: v
                } = e;
                const {
                    isShowChargerTag: E,
                    iconInfo: g,
                    className: N
                } = (e => {
                    const {
                        iconInfo: t,
                        className: n
                    } = e || {}, {
                        leftIconUrl: r,
                        rightIconUrl: o
                    } = t || {};
                    return {
                        isShowChargerTag: !(!r && !o),
                        iconInfo: t,
                        className: n
                    }
                })(w), I = v ? m().static : "";
                if (E) {
                    let e = 1;
                    [p.PANEL, p.LIMIT_POPUP].includes(y) ? e = 0 : y === p.WISHLIST && (e = [1, 2]);
                    const t = Array.isArray(e) ? e : [e],
                        n = Array.isArray(N) ? N : [N];
                    return t.map(((e, t) => r.createElement(i.A, {
                        key: `${e}-${t+1}`,
                        data: g,
                        type: e,
                        className: a()(n[t], I)
                    })))
                }
                if (!n) return null;
                return r.createElement("div", {
                    onClick: e => {
                        e ? .stopPropagation(), (0, l.G)({
                            goods_id: c,
                            tabIndex: 0
                        }), o ? .()
                    },
                    className: a()(m().wrap, s === d.small && m().wrapS, s === d.medium && m().wrapM, f, I),
                    ref: t,
                    role: "button",
                    tabIndex: 0
                }, r.createElement(u.Ay, {
                    src: n,
                    className: m().icon,
                    alt: ""
                }))
            }));
            t.A = (0, s.W4)({
                name: "EnergyTag"
            })((0, r.memo)(f))
        },
        55609: function(e, t, n) {
            "use strict";
            n.d(t, {
                w: function() {
                    return c
                }
            });
            var r = n(33514),
                o = n(32485),
                a = n.n(o),
                s = n(97582),
                i = n(20657),
                l = n(94689),
                u = n.n(l);
            const c = 7;
            t.A = function(e) {
                let {
                    onClick: t,
                    onMouseDown: n,
                    amount: o,
                    type: l,
                    prefix: m
                } = e;
                const {
                    t: d
                } = (0, s.B)("bec-fe.web-ui", {
                    keyPrefix: "ShoppingCart"
                }), p = "small" === l, f = null == m && !p && d("Qty") ? .length > c;
                return r.createElement("div", {
                    className: a()(u().countWrap, {
                        [u().small]: p,
                        [u().normal]: !p,
                        [u().smallFont]: f
                    }),
                    onClick: t,
                    onMouseDown: n,
                    role: "button",
                    tabIndex: 0
                }, m ? ? r.createElement("div", {
                    className: u().selectTitle
                }, d("Qty")), r.createElement("div", {
                    className: u().amount
                }, o), r.createElement("div", {
                    className: u().arrowWrap
                }, r.createElement(i.A, {
                    className: u().arrow
                })))
            }
        },
        99315: function(e, t, n) {
            "use strict";
            n.d(t, {
                A: function() {
                    return Q
                }
            });
            var r = n(14242),
                o = n(33514),
                a = n(32485),
                s = n.n(a),
                i = n(97582),
                l = n(99523),
                u = n(19618),
                c = n(45805),
                m = n(50878),
                d = (n(44114), n(14511)),
                p = n(20657),
                f = n(88468),
                w = n(1747),
                y = n(46694);
            const v = e => {
                try {
                    const t = e || navigator.userAgent;
                    return !!/iPad|Android(?!.*Mobile)|Tablet|PlayBook|Silk/i.test(t) || "ontouchstart" in document
                } catch (e) {}
                return !1
            };
            var E = function() {
                    const {
                        userAgent: e
                    } = (0, y.Sz)(), [t, n] = (0, o.useState)((() => v(e)));
                    return (0, o.useEffect)((() => {
                        n(v())
                    }), []), !!t
                },
                g = n(70994),
                N = n(98514),
                I = n(25019),
                h = n.n(I);
            const b = 4,
                S = (e, t) => {
                    let {
                        isOpen: n,
                        setIsOpen: a,
                        dropdownMargin: i = b,
                        defaultDirection: l,
                        rootProps: u,
                        dropdownProps: c,
                        children: d,
                        overlay: p
                    } = e;
                    const [f, w] = (0, o.useState)(l), y = (0, o.useRef)(null), v = (0, N.W)(null, (() => {
                        u ? .onMouseDown()
                    }));
                    (0, o.useImperativeHandle)(t, (() => ({
                        root: v.current
                    })), [v]);
                    const E = (0, m.w)((() => {
                        a(!1)
                    }));
                    (0, o.useEffect)((() => {
                        function e(e) {
                            const t = y.current,
                                n = v.current;
                            !t || t ? .contains ? .(e.target) || n ? .contains ? .(e.target) || a(!1)
                        }
                        const t = () => {
                            E()
                        };
                        return n ? (document.addEventListener("mousedown", e), window.addEventListener("scroll", t), window.addEventListener("resize", t)) : document.removeEventListener("mousedown", e), () => {
                            window.removeEventListener("scroll", t), window.removeEventListener("resize", t), document.removeEventListener("mousedown", e)
                        }
                    }), [n]), (0, o.useLayoutEffect)((() => {
                        if (n && y.current) {
                            const e = window.innerHeight,
                                t = y.current.offsetHeight,
                                n = v.current ? .getBoundingClientRect();
                            w((n ? .bottom || 0 + i + t) > e && e - (n ? .top || 0) + i + t > e ? "down" : (n ? .bottom || 0) + i + t > e ? "up" : l)
                        }
                    }), [n]);
                    return o.createElement(o.Fragment, null, o.createElement("div", (0, r.A)({}, u, {
                        ref: v
                    }), d), n ? o.createElement(g.A, null, o.createElement("div", (0, r.A)({}, c, {
                        className: s()(h().dropdown, c ? .className),
                        ref: y,
                        style: (() => {
                            const e = v.current ? .getBoundingClientRect();
                            if (!e) return {};
                            const t = c ? .style || {};
                            return { ...t,
                                top: "down" === f ? `${e.bottom+i}px` : "auto",
                                bottom: "up" === f ? `${(window.visualViewport?.height||window.innerHeight)-e.top+i}px` : "auto",
                                left: `${e.left}px`,
                                minWidth: `${t?.minWidth??e.width}px`,
                                position: "fixed"
                            }
                        })()
                    }), p)) : null)
                };
            var A = (0, o.forwardRef)(S);
            var C = e => {
                    const t = (0, o.useRef)(null),
                        n = (0, o.useRef)(null),
                        r = (0, m.w)((r => {
                            if ("Tab" === r.key) {
                                if (r.shiftKey) return document.activeElement === e ? .current ? .element && (n.current ? .focus ? .(), r.preventDefault()), void(document.activeElement === t.current && (e.current ? .element ? .focus(), r.preventDefault()));
                                document.activeElement === n.current ? (e.current ? .element ? .focus(), r.preventDefault()) : document.activeElement === e.current ? .element && (t.current ? .focus ? .(), r.preventDefault())
                            }
                        }));
                    return {
                        firstElRef: t,
                        lastElRef: n,
                        handleKeyDown: r
                    }
                },
                T = n(95775),
                k = n.n(T);
            const M = (0, o.memo)((0, o.forwardRef)(((e, t) => {
                    const {
                        value: n,
                        inputMax: r,
                        onConfirm: a,
                        inputClassName: i,
                        inputStyle: l,
                        disableInput: u,
                        onInputClick: c,
                        onMouseDown: m,
                        inputMin: d = 0
                    } = e, [p, f] = (0, o.useState)(n), w = (0, o.useRef)(null);
                    (0, o.useEffect)((() => {
                        f(n)
                    }), [n]), (0, o.useImperativeHandle)(t, (() => ({
                        setInputVal: e => {
                            f(e)
                        },
                        blur: () => {
                            w.current ? .blur()
                        },
                        click: () => {
                            w.current ? .click()
                        },
                        element: w.current
                    })));
                    return o.createElement("input", {
                        ref: w,
                        onClick: c,
                        value: p,
                        className: s()(k().input, i),
                        style: l,
                        onChange: e => {
                            let t = parseInt(`${e.target.value||0}`);
                            isNaN(t) || (t < d && (t = d), r && t >= r && (t = r), f(t))
                        },
                        onKeyUp: e => {
                            13 == +e.keyCode && w.current ? .blur()
                        },
                        onBlur: () => {
                            a(p)
                        },
                        "aria-label": `${p}`,
                        readOnly: !!u,
                        onMouseDown: m
                    })
                }))),
                D = (e, t) => {
                    let {
                        max: n,
                        min: r,
                        value: o,
                        type: a,
                        disabledList: i
                    } = e;
                    return new Array(0 === r ? n + 1 : n).fill(null).map(((e, n) => {
                        const l = n + r,
                            u = `${l}`,
                            c = (i || []).includes(l),
                            m = "small" === a;
                        return {
                            "data-val": u,
                            unique: u,
                            node: u,
                            active: o === l,
                            num: l,
                            iconClassName: s()({
                                [k().itemIcon]: m
                            }),
                            className: s()({
                                [k().item]: m,
                                [k().itemDisabled]: c
                            }),
                            ...t
                        }
                    }))
                },
                x = () => null,
                R = (0, o.forwardRef)(((e, t) => {
                    const {
                        type: n = "normal",
                        placement: a = "bottom",
                        value: i,
                        max: l,
                        min: u,
                        width: c,
                        listHeight: y,
                        arrowWidth: v,
                        onChange: E,
                        selectClassName: g,
                        selectStyle: I,
                        prefix: h,
                        onPopoverVisibleChange: b,
                        enableScrollHide: S,
                        className: A,
                        innerClassName: C,
                        outerClassName: T,
                        innerStyle: R,
                        disabledList: _,
                        adapted: W,
                        arrowClassName: O,
                        defaultDisabledReplacement: P,
                        ...L
                    } = e, z = (0, o.useRef)(), H = (0, o.useRef)(null), V = (0, m.w)((() => H.current || {
                        close: x,
                        delaySetPopupVisible: x
                    })), q = (0, N.W)(null, (() => z.current ? .click())), [B, U, F] = (0, w.A)(i);
                    (0, o.useEffect)((() => {
                        U(i)
                    }), [i]);
                    const [, Q, J] = (0, w.A)(B);
                    (0, o.useEffect)((() => {
                        Q(i)
                    }), [i]);
                    const $ = (0, m.w)((() => {
                            W ? V() ? .delaySetPopupVisible ? .(!1, 0) : V().close()
                        })),
                        K = (0, m.w)((() => {
                            z.current ? .click()
                        }));
                    (0, o.useImperativeHandle)(t, (() => ({
                        resetValue: () => U(J()),
                        hideSelector: $,
                        showSelector: K,
                        getQtyEle: () => q.current
                    })));
                    const [G, j] = (0, o.useState)(!1), Z = (0, m.w)((e => {
                        b ? .(e), j(e), S && (!e && document.removeEventListener("scroll", $), e && document.addEventListener("scroll", $))
                    })), Y = (0, m.w)(((e, t) => {
                        let n = !1,
                            r = e;
                        return isNaN(e) ? r = F() : F() !== e && (e < u ? (r = P ? ? u, n = !0) : e > l ? (r = l, n = !0) : (_ || []).includes(e) && (r = t ? F() : P ? ? F())), {
                            num: r,
                            isOverRange: n,
                            inputNum: e
                        }
                    })), X = (0, m.w)(((e, t) => {
                        const {
                            num: n,
                            isOverRange: r,
                            inputNum: o
                        } = Y(e, t);
                        U(n), z.current ? .setInputVal(n), E ? .({
                            value: n,
                            isOverRange: r,
                            inputNum: o,
                            fromClick: t
                        }), ((_ || []).includes(e) && void 0 !== P && !t || !(_ || []).includes(e)) && V().close()
                    })), ee = (0, o.useMemo)((() => ({
                        timer: null
                    })), []), te = (0, m.w)((() => {
                        ee.timer && clearTimeout(ee.timer), ee.timer = setTimeout((() => {
                            ee.timer = null
                        }), 100)
                    })), ne = (0, o.useMemo)((() => ({
                        timer: null
                    })), []), re = (0, m.w)((e => {
                        ee.timer || (ne.timer && clearTimeout(ne.timer), ne.timer = setTimeout((() => {
                            X(e, !1)
                        }), 100))
                    })), oe = (0, m.w)((e => {
                        ne.timer && clearTimeout(ne.timer);
                        const {
                            num: t,
                            active: n
                        } = e || {};
                        n || X(t, !0)
                    })), ae = (0, o.useMemo)((() => ({
                        width: c ? ? ("small" === n ? 72 : 104),
                        ...I
                    })), [I, c, n]), se = (0, o.useMemo)((() => ({
                        width: v
                    })), [v]), ie = (0, o.useMemo)((() => ({
                        maxHeight: y ? ? ("small" === n ? 153 : void 0),
                        ...R
                    })), [y, n, R]);
                    return o.createElement(d.Ay, null, o.createElement(f.A, (0, r.A)({
                        ref: H,
                        list: D({
                            value: B,
                            min: u,
                            max: l,
                            type: n,
                            disabledList: _
                        }, {
                            onMouseDown: te
                        }),
                        trigger: ["click"],
                        hideArrow: !0,
                        dynamic: !0,
                        className: s()(k().dropdown, A),
                        outerClassName: T,
                        innerClassName: s()(k().dropdownInner, C),
                        width: ae.width,
                        innerStyle: ie,
                        onItemClick: oe,
                        placement: a,
                        onPopoverVisibleChange: Z,
                        adapted: W
                    }, L), o.createElement("div", {
                        className: s()(k().selectWrap, g, {
                            [k().small]: "small" === n
                        }),
                        style: ae,
                        ref: q,
                        tabIndex: 0,
                        role: "button"
                    }, o.createElement("div", {
                        onMouseDown: e => e.preventDefault()
                    }, h), o.createElement(M, (0, r.A)({}, e, {
                        value: B,
                        onConfirm: re,
                        ref: z
                    })), o.createElement("div", {
                        style: se,
                        className: s()(k().arrowWrap, O),
                        onMouseDown: e => e.preventDefault()
                    }, o.createElement(p.A, {
                        alt: "",
                        "aria-hidden": !0,
                        style: se,
                        className: s()(k().arrow, {
                            [k().open]: G
                        })
                    })))))
                }));
            R.defaultProps = {
                value: 1,
                min: 0,
                max: 99,
                inputMax: 99,
                arrowWidth: 11,
                placement: "bottom"
            };
            var _ = n(13526),
                W = n.n(_);
            const O = 4;

            function P(e, t) {
                let {
                    min: n = 1,
                    max: a = 10,
                    onChange: i,
                    onInputChange: l,
                    disableBelow: u,
                    defaultDirection: c = "down",
                    value: d,
                    prefix: y,
                    onPopoverVisibleChange: v,
                    arrowClassName: g,
                    inputClassName: N,
                    dropdownMargin: I = O,
                    dropdownProps: h,
                    rootProps: b,
                    getItemProps: S
                } = e;
                const [T, k, D] = (0, w.A)(d), [x, R] = (0, o.useState)(!1), _ = (0, o.useRef)(null), P = (0, o.useRef)(null), L = E(), [, z, H] = (0, w.A)(T);
                (0, o.useEffect)((() => {
                    k(d)
                }), [d]), (0, o.useEffect)((() => {
                    z(d)
                }), [d]);
                const V = (0, m.w)((() => {
                        R(!1), P.current ? .blur()
                    })),
                    q = e => {
                        k(e), P.current ? .setInputVal(e)
                    },
                    B = e => {
                        let t = e;
                        return isNaN(e) ? t = D() : D() !== e && (e < n ? t = n : e > a && (t = a)), t
                    },
                    U = (0, m.w)((e => {
                        const t = B(e),
                            n = +i ? .({
                                value: t,
                                inputNum: e
                            });
                        q(isNaN(n) ? t : n)
                    })),
                    F = (0, o.useMemo)((() => ({
                        timer: null
                    })), []),
                    Q = (0, m.w)((e => {
                        e.stopPropagation(), F.timer && clearTimeout(F.timer), F.timer = setTimeout((() => {
                            F.timer = null
                        }), 100)
                    })),
                    J = (0, m.w)((e => {
                        if (F.timer) return;
                        const t = B(e),
                            n = "function" == typeof l ? l : i,
                            r = +n ? .({
                                value: t,
                                inputNum: e
                            });
                        q(isNaN(r) ? t : r)
                    })),
                    {
                        firstElRef: $,
                        lastElRef: K,
                        handleKeyDown: G
                    } = C(P ? .current ? .element),
                    j = (0, o.useMemo)((() => {
                        const e = [];
                        for (let t = n; t <= a; t++) {
                            const i = u && t < u && 0 !== t,
                                l = S ? .({
                                    index: t,
                                    isDisabled: i
                                }) || {};
                            e.push(o.createElement(f.t, (0, r.A)({
                                onClick: () => {
                                    l.onClick ? .(), U(t)
                                },
                                active: T === t,
                                className: s()({
                                    [W().itemDisabled]: i
                                }, l ? .className),
                                node: t
                            }, l, {
                                ref: t === n ? $ : t === a ? K : null
                            })))
                        }
                        return e
                    }), [n, a, u, S, T, $, K, U]);
                (0, o.useEffect)((() => {
                    x ? (setTimeout((() => {
                        !L && P.current ? .element ? .focus()
                    }), 0), document.addEventListener("keydown", G)) : (!L && P.current ? .blur(), document.removeEventListener("keydown", G));
                    const e = v ? .(x, {
                        hideSelector: V
                    });
                    return () => {
                        document.removeEventListener("keydown", G), e ? .()
                    }
                }), [x]), (0, o.useImperativeHandle)(t, (() => ({
                    resetValue: () => q(H()),
                    hideSelector: V,
                    showSelector: () => R(!0),
                    getQtyEle: () => _.current ? .root,
                    inputRef: P
                })), []);
                return o.createElement(A, {
                    isOpen: x,
                    setIsOpen: R,
                    ref: _,
                    defaultDirection: c,
                    overlay: j,
                    dropdownProps: { ...h,
                        onMouseDown: Q
                    },
                    rootProps: { ...b,
                        className: s()(W().selectWrap, b ? .className),
                        onMouseDown: () => {
                            const e = P.current ? .element;
                            if (e) {
                                const t = e ? .getBoundingClientRect(),
                                    n = window.innerHeight;
                                let r = 0;
                                t.bottom > n ? r = t.bottom - n : t.top < 0 && (r = t.top), window.scrollBy({
                                    top: r
                                });
                                const o = () => {
                                    R((e => !e))
                                };
                                r ? setTimeout(o, 100) : o()
                            }
                        }
                    },
                    dropdownMargin: I
                }, o.createElement(o.Fragment, null, y, o.createElement(M, {
                    value: T,
                    onConfirm: J,
                    ref: P,
                    disableInput: L,
                    inputClassName: s()(W().input, N),
                    onMouseDown: e => {
                        e.preventDefault()
                    },
                    inputMin: n
                }), o.createElement("div", {
                    className: s()(W().arrowWrap, g)
                }, o.createElement(p.A, {
                    alt: "",
                    "aria-hidden": !0,
                    className: s()(W().arrow, {
                        [W().open]: x
                    })
                }))))
            }
            var L = (0, d.W4)({
                    name: "WebUIQty"
                })((0, o.memo)((0, o.forwardRef)(P))),
                z = n(47478),
                H = n(54201),
                V = n(55609),
                q = n(61096),
                B = n.n(q);
            const U = (e, t) => {
                    const {
                        reportSkuModify: n,
                        reportAddModify: r
                    } = t || {}, {
                        skuInfo: o,
                        baseGoodsInfo: a,
                        style: s
                    } = e || {}, {
                        goodsId: i
                    } = a || {}, {
                        skuId: d,
                        amount: p,
                        customizedSnapshotInfo: f,
                        isCustomizedSku: w
                    } = o || {}, y = s !== z.bk.NORMAL, v = {
                        cartScene: 5,
                        params: {
                            goods_id: i,
                            _oak_stage: 1,
                            _oak_sku_id: d,
                            _oak_page_source: 505,
                            _oak_support_button_type_list: y ? [l.SD.addToCart] : [l.SD.addToCart, l.SD.addNewOption]
                        },
                        defaultSkuId: y ? void 0 : d,
                        defaultGoodsNumber: p,
                        skuCustomizedInfo: {
                            cartQueryCustomizedInfo: f
                        },
                        frontControl: {
                            supportPersonalize: !0
                        },
                        cartIsCustomizeGoods: !!w,
                        hideSidebarRec: !0,
                        cartDataType: 1,
                        pageSn: z.LM,
                        callback: t => {
                            if (t.error) return (0, u.Ku)(t.error);
                            const {
                                goodsNumber: o,
                                skuId: a,
                                customizedInfoDict: s,
                                skuButtonType: i,
                                customizedInfo: c
                            } = t || {}, {
                                customizedOperateType: m,
                                customizedSnapshots: p
                            } = s ? .optCustomizedInfo || {}, f = (0, H.qi)({
                                customizedOperateType: m,
                                customizedSnapshots: p
                            });
                            i === l.SD.addNewOption || a !== d && w ? r ? .({
                                amount: o,
                                sku_id: a,
                                extra_map: {
                                    customized_info: c
                                },
                                modify_biz_type: 1,
                                customized_operate_info: f
                            }, {
                                data: e,
                                cart_scene: 204
                            }) : n ? .(e, {
                                amount: o,
                                newSkuId: a,
                                customizedOperateInfo: f,
                                customizedInfo: c
                            })
                        },
                        showLoadingDelayTime: 0
                    };
                    return {
                        showSku: (0, m.w)((() => c.hb.show(v)))
                    }
                },
                F = (e, t) => {
                    let {
                        data: n,
                        prefix: a,
                        reportSkuModify: l,
                        reportAddModify: u,
                        type: c,
                        ...d
                    } = e;
                    const {
                        t: p
                    } = (0, i.B)("bec-fe.web-ui", {
                        keyPrefix: "ShoppingCart"
                    }), {
                        skuInfo: f
                    } = n || {}, {
                        amount: w,
                        skuQuantity: y,
                        isCustomizedSku: v
                    } = f || {}, E = (0, o.useRef)();
                    (0, o.useImperativeHandle)(t, (() => E.current), []);
                    const {
                        showSku: g
                    } = U(n, {
                        reportAddModify: u,
                        reportSkuModify: l
                    }), N = (0, m.w)((() => {
                        g()
                    })), I = "small" === c, h = null == a && !I && p("Qty") ? .length > V.w;
                    return v ? o.createElement(V.A, {
                        amount: w,
                        onClick: N,
                        type: c,
                        prefix: a
                    }) : o.createElement(L, (0, r.A)({
                        max: Math.min(y, 99),
                        min: 1,
                        value: w,
                        prefix: a ? ? o.createElement("div", {
                            className: B().qty
                        }, p("Qty")),
                        inputClassName: B().qtyInput,
                        arrowClassName: B().arrow
                    }, d, {
                        rootProps: {
                            className: s()(B().select, {
                                [B().normalType]: !I,
                                [B().smallType]: I,
                                [B().smallFont]: h
                            })
                        },
                        dropdownProps: {
                            className: s()({
                                [B().smalldropdown]: I
                            })
                        },
                        getItemProps: () => ({
                            className: s()({
                                [B().item]: I
                            }),
                            iconClassName: s()({
                                [B().itemIcon]: I
                            })
                        }),
                        ref: E
                    }))
                };
            var Q = (0, o.forwardRef)(F)
        },
        78459: function(e, t, n) {
            "use strict";
            n.d(t, {
                Ay: function() {
                    return h
                }
            });
            var r = n(33514),
                o = n(32485),
                a = n.n(o),
                s = n(14511),
                i = n(84983),
                l = n(71298),
                u = n(2404),
                c = n.n(u),
                m = n(71547),
                d = n(1747),
                p = n(50878),
                f = n(84973),
                w = n(18647),
                y = n(62745),
                v = n.n(y);
            const E = e => {
                const {
                    data: t
                } = e;
                return r.createElement("div", {
                    className: v().wrap
                }, t.map((e => r.createElement("div", {
                    className: v().line
                }, r.createElement(i.Op, {
                    richTexts: e
                })))))
            };
            var g = (0, s.W4)({
                    name: "RRPExplainPopover"
                })((e => {
                    const {
                        actionType: t,
                        children: n,
                        actionTypeDataMap: o
                    } = e, a = (0, r.useRef)(), s = (0, r.useMemo)((() => o ? .[t]), [t, o]), [i, l, u] = (0, d.A)((() => {
                        const {
                            popData: e
                        } = s || {}, {
                            desc: t
                        } = e || {};
                        return t ? .length ? t : null
                    })), y = (0, r.useMemo)((() => i ? r.createElement(E, {
                        data: i
                    }) : null), [i]), g = (0, p.w)((e => {
                        const {
                            popData: t
                        } = e || {}, {
                            desc: n
                        } = t || {};
                        n ? .length && n.some((e => e ? .length)) && !c()(u(), n) && l(n)
                    })), N = (0, p.w)((async () => {
                        s || (g(w.A.instance.getExistingActionTypeDataMap(t)), g(await w.A.instance.getActionTypeDataMap(t)))
                    })), I = (0, r.useRef)(!1), h = (0, p.w)((() => {
                        N(), I.current = !0
                    })), b = !!i;
                    (0, m.A)((() => {
                        s && g(s)
                    }), [s, g]), (0, r.useEffect)((() => {
                        b && I.current && a.current ? .delaySetPopupVisible(!0)
                    }), [b]);
                    const S = (0, r.useMemo)((() => r.cloneElement(n, {
                        onMouseEnter: N,
                        onTouchEnd: h
                    })), [n, N, h]);
                    return i ? r.createElement(f.A, {
                        appendToBody: !0,
                        adapted: !0,
                        mountPopupWhenInit: !0,
                        overlay: y,
                        ref: a,
                        containerClassName: v().overlayWrap
                    }, S) : S
                })),
                N = n(88588),
                I = n.n(N);
            var h = (0, s.W4)({
                name: "CartRRPExplain"
            })((e => {
                const {
                    priceExplanationVo: t,
                    isShowPlaceHolder: n,
                    className: o,
                    actionTypeDataMap: s,
                    iconClassName: u
                } = e, {
                    displayItems: c,
                    iconDisplayItems: m,
                    actionType: d,
                    isShowRRPExplain: p
                } = (e => {
                    const {
                        priceExplanationVo: t
                    } = e, {
                        displayItems: n,
                        iconItem: r
                    } = t || {}, {
                        displayItems: o,
                        actionInfo: a
                    } = r || {}, {
                        actionType: s
                    } = a || {};
                    return {
                        displayItems: n,
                        iconDisplayItems: o,
                        actionType: s,
                        isShowRRPExplain: !!(n ? .length && o ? .length && s)
                    }
                })({
                    priceExplanationVo: t
                }), f = (0, i.vu)(c);
                return p ? r.createElement("div", {
                    className: a()(I().wrap, o),
                    "aria-label": f
                }, r.createElement("div", {
                    className: I().inner
                }, r.createElement(l.A, {
                    deps: [c],
                    className: I().rrpMarque,
                    marqueeCls: I().rrpMarqueAnim
                }, r.createElement(i.Op, {
                    richTexts: c
                })), r.createElement("div", {
                    className: a()(I().interactionWrap, u)
                }, r.createElement(i.Op, {
                    richTexts: m
                }), r.createElement(g, {
                    actionType: d,
                    actionTypeDataMap: s
                }, r.createElement("div", {
                    className: I().trigger
                }))))) : n ? r.createElement("div", {
                    className: a()(I().wrap, o)
                }) : null
            }))
        },
        17642: function(e, t, n) {
            "use strict";
            n.d(t, {
                n: function() {
                    return m
                },
                o: function() {
                    return d
                }
            });
            var r = n(33514),
                o = n(27258),
                a = n(50878),
                s = n(97246),
                i = n(27214),
                l = n(13330),
                u = n.n(l);
            const c = "242689",
                m = e => {
                    const {
                        goodsId: t,
                        skuId: n,
                        recSortTrackingKey: l,
                        isUseImpr: m = !1
                    } = e, d = (0, a.w)((async () => {
                        const e = await (0, s.E0)(l) || {};
                        (0, s.TC)(n), (0, o.WW)({
                            page_el_sn: c,
                            goods_id: t,
                            ...{ ...e,
                                prec: void 0,
                                p_rec: JSON.stringify(e.prec)
                            }
                        })
                    }));
                    (0, r.useEffect)((() => () => (0, s.aW)(n)), [n]);
                    return !l || !n || !m || (0, s.id)(n) ? null : r.createElement(i.M, {
                        event: "rec_sort_sku_impr",
                        sendBizLogger: d
                    }, r.createElement("div", {
                        className: u().imprAnchor
                    }))
                },
                d = async (e, t) => {
                    const n = await (0, s.E0)(t) || {};
                    (0, o.E0)({
                        page_el_sn: c,
                        goods_id: e,
                        ...{ ...n,
                            prec: void 0,
                            p_rec: JSON.stringify(n.prec)
                        }
                    })
                }
        },
        99523: function(e, t, n) {
            "use strict";
            n.d(t, {
                $2: function() {
                    return r
                },
                O4: function() {
                    return o
                },
                SD: function() {
                    return a
                },
                oi: function() {
                    return s
                }
            });
            let r = function(e) {
                    return e[e.Normal = 1] = "Normal", e[e.OffShelf = 2] = "OffShelf", e[e.SoldOut = 3] = "SoldOut", e[e.Delete = 4] = "Delete", e[e.Risk = 5] = "Risk", e
                }({}),
                o = function(e) {
                    return e[e.NotExist = 49001] = "NotExist", e[e.NeedVerify = 54001] = "NeedVerify", e[e.GOODS_NO_QUANTITY = 60002] = "GOODS_NO_QUANTITY", e
                }({}),
                a = function(e) {
                    return e[e.addToCart = 1] = "addToCart", e[e.addOrder = 3] = "addOrder", e[e.buyNow = 7] = "buyNow", e[e.addNewOption = 101] = "addNewOption", e
                }({}),
                s = function(e) {
                    return e[e.Add = 1] = "Add", e[e.Update = 2] = "Update", e[e.Delete = 3] = "Delete", e
                }({})
        },
        88468: function(e, t, n) {
            "use strict";
            n.d(t, {
                t: function() {
                    return p
                }
            });
            var r = n(14242),
                o = n(33514),
                a = n(32485),
                s = n.n(a),
                i = n(14511),
                l = n(38869),
                u = n(84973),
                c = n(52248),
                m = n(81928),
                d = n.n(m);
            const p = (0, o.memo)((0, o.forwardRef)(((e, t) => {
                    const {
                        className: n,
                        iconClassName: a,
                        style: i,
                        node: u,
                        active: m,
                        ...p
                    } = e;
                    return o.createElement(l.n, (0, r.A)({
                        className: s()(d().item, n),
                        style: i
                    }, p, {
                        ref: t
                    }), o.createElement("div", {
                        className: d().left
                    }, u), o.createElement(c.ce, {
                        className: s()(d().right, a, !m && d().hide)
                    }))
                }))),
                f = (0, o.forwardRef)(((e, t) => {
                    const {
                        list: n,
                        onItemClick: a,
                        width: l,
                        innerStyle: c,
                        style: m,
                        innerClassName: f,
                        ...w
                    } = e, y = (0, o.useMemo)((() => {
                        if (!n ? .length) return null;
                        const e = n.length <= 1;
                        let t = !1;
                        const i = n.map(((e, n) => {
                            const {
                                unique: s,
                                node: i,
                                active: l
                            } = e || {};
                            return i ? (l && (t = !0), o.createElement(p, (0, r.A)({}, e, {
                                key: s || n,
                                onClick: () => a ? .(e, n)
                            }))) : null
                        }));
                        return o.createElement("div", {
                            className: s()(d().wrap, {
                                [d().wrapOne]: e,
                                [d().noActive]: !t
                            })
                        }, i)
                    }), [n, a]), v = (0, o.useMemo)((() => ({ ...c,
                        ...l ? {
                            width: l,
                            maxWidth: "unset"
                        } : {}
                    })), [l, c]);
                    return o.createElement(i.Ay, null, o.createElement(u.A, (0, r.A)({
                        ref: t,
                        animation: !e.hideArrow,
                        animationType: "fadeWithScale"
                    }, w, {
                        overlay: y,
                        style: {
                            bottom: 0,
                            ...m
                        },
                        innerStyle: v,
                        innerClassName: s()(d().popupCls, f)
                    })))
                }));
            t.A = f
        },
        1747: function(e, t, n) {
            "use strict";
            n.d(t, {
                A: function() {
                    return o
                }
            });
            var r = n(33514);

            function o(e) {
                const [t, n] = (0, r.useState)(e), o = (0, r.useRef)(t);
                return [t, (0, r.useCallback)((e => {
                    n(e), o.current = e
                }), []), (0, r.useCallback)((() => o.current), [])]
            }
        }
    }
]);
//# sourceMappingURL=http://temudebug.com/sourcemaps/assets/modernjs/957_1a17cbf9505608ab00d7.js.map