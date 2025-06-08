(self.webpackChunkmobile_bg_web_personal = self.webpackChunkmobile_bg_web_personal || []).push([
    [5171], {
        46905: function(e) {
            e.exports = {
                wrap: "wrap-179iQ",
                check: "check-2iLsx",
                checkbox: "checkbox-1236G",
                enhanceUnCheckBox: "enhanceUnCheckBox-3lcg3",
                bolderUnCheckBox: "bolderUnCheckBox-10F4v",
                all: "all-2j8LT",
                priceWrap: "priceWrap-1hTbJ",
                btn: "btn-3EmZo",
                price: "price-3xai1",
                priceInner: "priceInner-1rTAw"
            }
        },
        18813: function(e) {
            e.exports = {
                emptyContainer: "emptyContainer-1jEYR",
                title: "title-166ng",
                desc: "desc-2zA2v",
                icon: "icon-1YbgJ"
            }
        },
        45276: function(e) {
            e.exports = {
                col: "col-2x6-h",
                wrap: "wrap-24tfv",
                checkbox: "checkbox-3Vrpr",
                disabled: "disabled-MXMXO",
                imgWrap: "imgWrap-3pANe",
                img: "img-7h-fG",
                content: "content-37Xws",
                name: "name-2tMg5",
                fade1: "fade1-sIWkh",
                fade2: "fade2-3eV-Y",
                desc: "desc-1KHGM",
                marketPriceStr: "marketPriceStr-1ljyV",
                gift: "gift-1wXYB",
                amount: "amount-3r1WS",
                qtyText: "qtyText-fkqd3",
                qtyAmount: "qtyAmount-Buiw6",
                smallFont: "smallFont-102Vs",
                options: "options-3ZFEm",
                bottomText: "bottomText-2WJPS",
                warn: "warn-3DxU9"
            }
        },
        77568: function(e) {
            e.exports = {
                giftSplitLine: "giftSplitLine-13CSp"
            }
        },
        99767: function(e) {
            e.exports = {
                wrap: "wrap-3MSs1",
                allowClick: "allowClick-3Bi65",
                arrow: "arrow-10zTd"
            }
        },
        58704: function(e) {
            e.exports = {
                priceWrap: "priceWrap-1jxCT",
                skuPrice: "skuPrice-3w2bz",
                marketPriceStr: "marketPriceStr-1mcug",
                was: "was-2gKrw",
                icon: "icon-1n9av"
            }
        },
        31609: function(e) {
            e.exports = {
                col: "col-3PhOB",
                bottomText: "bottomText-3dXYw",
                warningIcon: "warningIcon-3RSzI",
                warn: "warn-3p565",
                imgWrap: "imgWrap-1ME7R",
                img: "img-3hbJd",
                checkboxWrap: "checkboxWrap-elKOR",
                checkbox: "checkbox-2R64b",
                enhanceUnCheckBox: "enhanceUnCheckBox-BI_7g",
                bolderUnCheckBox: "bolderUnCheckBox-18E_a",
                content: "content-3eQs-",
                name: "name-2pURa",
                specPriceAndCount: "specPriceAndCount-1ojZ4",
                desc: "desc-1DSbM",
                options: "options-3YnUU",
                priceWrap: "priceWrap-ITWAN",
                marketPriceStr: "marketPriceStr-29nDl",
                fade1: "fade1-1p-iQ",
                fade2: "fade2-3tYt9",
                input: "input-3IKWg",
                select: "select-3w3oK"
            }
        },
        63661: function(e) {
            e.exports = {
                wrap: "wrap-192fu",
                titleArea: "titleArea-A2ZEb",
                arrow: "arrow-2TDAP",
                subtitle: "subtitle-dsS7r",
                img: "img-37shU",
                groupLogo: "groupLogo-D6qgq",
                pointer: "pointer-2X6q0",
                groupTagItem: "groupTagItem-2re8V",
                groupTitleContent: "groupTitleContent-3oHw7",
                inFrontOfArrow: "inFrontOfArrow-vhS1e",
                bgTag: "bgTag-2ovvk",
                noImportCharges: "noImportCharges-1qSEW",
                groupTagIcon: "groupTagIcon-1AbxH",
                borderTag: "borderTag-2TEQP",
                groupTagDash: "groupTagDash-Gh17l",
                groupInfo: "groupInfo-2UE9h",
                singleLine: "singleLine-2WNW2"
            }
        },
        12895: function(e) {
            e.exports = {
                icon: "icon-aaxZR",
                warning: "warning-YA4NQ"
            }
        },
        82941: function(e) {
            e.exports = {
                wrap: "wrap-BZoRD",
                inner: "inner-3nmkj",
                saved: "saved-1LE_x"
            }
        },
        86202: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return Ge
                }
            });
            var a = n(33514),
                r = n(7350),
                l = n.n(r),
                c = n(63066),
                o = n(51833),
                s = n(78113),
                i = n(83921),
                m = (n(44114), n(32485)),
                p = n.n(m),
                u = n(97582),
                d = n(78830),
                g = n(10644),
                E = n(87837),
                k = n(10147),
                h = n(21696),
                f = n(46905),
                b = n.n(f);
            const x = {
                    page_el_sn: 201081
                },
                y = (0, a.memo)((e => {
                    let {
                        isAllChecked: t,
                        disabled: n
                    } = e;
                    const {
                        t: r
                    } = (0, u.B)("bec-fe.web-ui", {
                        keyPrefix: "ShoppingCart"
                    }), [{
                        discountInfo: l
                    }, {
                        handleSelectAll: c
                    }] = (0, s.Fx)(), {
                        orderAmountText: i
                    } = l ? .orderAmountDto || {}, {
                        cartCheckedAmount: m
                    } = (0, o.l5)(), f = r(1 === m ? "GotoCartBtn_one" : "GotoCartBtn_other", {
                        num: m
                    }), y = (0, a.useMemo)((() => {
                        const e = (e => {
                            const t = [];
                            if (!e ? .length) return t;
                            let n = e ? .[0].combineId,
                                a = [];
                            return e.forEach((e => {
                                n === e.combineId || !n && !e.combineId ? a.push(e) : (t.push([...a]), a = [e], n = e.combineId)
                            })), a.length && t.push(a), t
                        })(i);
                        return a.createElement("div", {
                            className: b().priceWrap
                        }, e.map(((e, t) => {
                            const n = 1 === e ? .[0].combineId,
                                r = e.map(((e, t) => {
                                    const {
                                        text: n
                                    } = e;
                                    return n ? a.createElement("span", {
                                        key: `${n}${t+1}`
                                    }, n) : null
                                }));
                            return n ? a.createElement("span", {
                                key: t,
                                className: b().priceInner
                            }, r) : a.createElement(a.Fragment, {
                                key: t
                            }, r)
                        })))
                    }), [i]), {
                        onMouseDown: I,
                        onClick: N
                    } = (0, d.E)({
                        scene: 10003,
                        grayConfig: (0, h.rR)("cp124366")
                    }), {
                        hitExp: w
                    } = (0, h.rR)("cp204719", "cp204720", "cp202428") || {}, {
                        hitExp: T
                    } = (0, h.rR)("cp207901", "cp207902", "cp207900") || {}, C = !t && !n;
                    return a.createElement("div", {
                        className: b().wrap
                    }, a.createElement("div", {
                        className: b().check
                    }, a.createElement(g.Sc, {
                        logger: x,
                        className: p()(b().checkbox, 1 === w && C ? b().enhanceUnCheckBox : "", 1 === T && C ? b().bolderUnCheckBox : ""),
                        disabled: n,
                        isChecked: t,
                        toggleCheck: c
                    }), a.createElement("div", {
                        className: b().all
                    }, r("All")), a.createElement("div", {
                        className: b().price
                    }, y)), a.createElement(E.nU, {
                        page_el_sn: 201079
                    }, a.createElement(k.A, {
                        accessibility: !0,
                        autoScale: !0,
                        size: "xl",
                        className: b().btn,
                        onClick: N,
                        onMouseDown: I
                    }, f)))
                }));
            y.displayName = "Bottom";
            var I = y,
                N = n(3768),
                w = n(18813),
                T = n.n(w),
                C = (0, a.memo)((() => {
                    const {
                        t: e
                    } = (0, u.B)("bec-fe.web-ui", {
                        keyPrefix: "ShoppingCart"
                    });
                    return a.createElement("div", {
                        className: T().emptyContainer
                    }, a.createElement(N.A, {
                        className: T().icon
                    }), a.createElement("div", {
                        className: T().title
                    }, e("CartEmpty")))
                })),
                A = n(14511),
                v = n(13852),
                _ = n(27258),
                S = n(38869),
                P = n(2526),
                L = n(55609),
                M = n(32834),
                U = n(20162),
                R = n(82370),
                B = n(25190),
                O = n(53075),
                W = n(30463),
                G = n(14242),
                D = n(52248),
                F = n(12895),
                z = n.n(F);
            const V = e => a.createElement(D.ib, (0, G.A)({
                className: z().warning
            }, e, {
                path: "M512 0c282.8 0 512 229.2 512 512 0 282.8-229.2 512-512 512-282.8 0-512-229.2-512-512 0-282.8 229.2-512 512-512z m0 78.8c-239.3 0-433.2 194-433.2 433.2 0 239.3 194 433.2 433.2 433.2 239.3 0 433.2-194 433.2-433.2 0-239.3-194-433.2-433.2-433.2z m0 578.9c39.2 0 70.9 31.7 70.9 70.9 0 39.2-31.7 70.9-70.9 70.9-39.2 0-70.9-31.7-70.9-70.9 0-39.2 31.7-70.9 70.9-70.9z m0.1-476.5c26.1 0 47.3 21.2 47.3 47.2l0 299.4c0 26.1-21.2 47.3-47.3 47.2-26.1 0-47.3-21.2-47.2-47.2l0-299.4c0-26.1 21.2-47.3 47.2-47.2z"
            }));
            var $ = n(45276),
                q = n.n($);
            var Y = (0, A.W4)({
                    name: "FreeGiftItem"
                })((e => {
                    let {
                        giftItem: t
                    } = e;
                    const {
                        t: n
                    } = (0, u.B)("bec-fe.web-ui", {
                        keyPrefix: "RepickPopup"
                    }), {
                        t: r
                    } = (0, u.B)("bec-fe.web-ui", {
                        keyPrefix: "ShoppingCart"
                    }), {
                        style: l
                    } = (0, h.rR)("cp162938") || {}, {
                        freeGiftTextDisplayItem: o,
                        goodsSkuVo: s,
                        promotionTypeAndSn: i,
                        promotionSn: m,
                        errorMsgTextDisplayItem: d,
                        unavailableTextDisplayItem: E
                    } = t || {}, {
                        skuInfo: k,
                        baseGoodsInfo: f,
                        style: b,
                        isSelected: x
                    } = s || {}, y = b === c.bk.NORMAL, {
                        goodsName: I,
                        goodsId: N,
                        linkUrl: w
                    } = f || {}, {
                        skuId: T,
                        skuThumbUrl: C,
                        skuSpec: A,
                        marketPriceText: G
                    } = k || {}, D = (0, a.useMemo)((() => (0, v.rE)({
                        goods_id: N,
                        sku_id: T,
                        _oak_free_gift: 1,
                        _oak_activity_sn: m,
                        promotion: i
                    }, "string" == typeof w ? (0, O.YU)(w) : "")), [N, T, m, i, w]), F = () => {
                        D && (0, W.MJ)(D, B.qe ? {} : {
                            openTarget: "_blank"
                        })
                    }, z = b === c.bk.SKU_RESELECT, $ = (0, a.useMemo)((() => y ? null : E ? .displayItems ? .filter((e => 0 === e.displayType)) ? .map((e => e.text)) ? .join("")), [E, y]), Y = r("Qty") ? .length > L.w;
                    return a.createElement(a.Fragment, null, a.createElement("div", {
                        className: p()(q().col, q().wrap)
                    }, a.createElement(g.Sc, {
                        className: p()(q().checkbox, x ? "" : q().disabled),
                        toggleCheck: () => {
                            const e = d ? .displayItems ? .reduce(((e, t) => e + t.text), "");
                            e && (U.A.warning(e), (0, _.OS)({
                                page_el_sn: 206725,
                                op: "click",
                                sku_id: T,
                                goods_id: N
                            }))
                        },
                        isChecked: x
                    }), a.createElement(S.n, {
                        className: q().imgWrap,
                        onClick: F
                    }, a.createElement(R.Ay, {
                        className: q().img,
                        src: C,
                        lazy: !0,
                        alt: I,
                        resizeWidth: 500,
                        kind: 1
                    })), a.createElement("div", {
                        className: q().content
                    }, a.createElement(P.N_, {
                        url: D,
                        className: p()(q().name, 1 === l && q().fade1, 2 === l && q().fade2),
                        onClick: F
                    }, I), z ? null : a.createElement("div", {
                        className: q().desc
                    }, A ? .map(((e, t) => a.createElement(a.Fragment, {
                        key: t
                    }, !!t && a.createElement("span", null, "/"), a.createElement("span", null, e.specValue))))), a.createElement("div", {
                        className: q().options
                    }, a.createElement("div", {
                        className: q().gift
                    }, o ? .displayItems ? .map((e => e.text)) ? .join(""), a.createElement("div", {
                        className: q().marketPriceStr
                    }, (0, M.N)(G)[0])), a.createElement(S.n, {
                        className: p()(q().amount, Y && q().smallFont),
                        onClick: () => {
                            U.A.warning(n("giftQtyClick"))
                        }
                    }, a.createElement("span", {
                        className: q().qtyText
                    }, r("Qty"), ":"), a.createElement("span", {
                        className: q().qtyAmount
                    }, "1"))))), $ ? a.createElement("div", {
                        className: p()(q().bottomText, q().wrap)
                    }, a.createElement(V, null), a.createElement("div", {
                        className: q().warn
                    }, $)) : null)
                })),
                j = n(77568),
                J = n.n(j);
            var Q = (0, A.eE)()((e => {
                    let {
                        giftInfoList: t,
                        showLine: n
                    } = e;
                    return t ? .length ? a.createElement(a.Fragment, null, t ? .map(((e, t) => a.createElement(Y, {
                        key: t,
                        giftItem: e
                    }))), n ? a.createElement("div", {
                        className: J().giftSplitLine
                    }) : null) : null
                })),
                K = n(17642),
                H = n(85131),
                X = n(21349),
                Z = n(99315),
                ee = n(50878),
                te = n(85312),
                ne = n(33719),
                ae = n(27092),
                re = n(79573),
                le = n(84983),
                ce = n(74069),
                oe = n(99767),
                se = n.n(oe);
            const ie = e => {
                const {
                    data: t
                } = e, {
                    skuPriceBenefitVo: n,
                    mallInfo: r
                } = t || {}, {
                    richBenefitText: l
                } = n || {}, {
                    mallId: o
                } = r || {}, {
                    displayItems: s,
                    actionInfo: i
                } = l || {}, {
                    actionType: m
                } = i || {}, u = m === c.ld.READ_MALL_COLLECT_COUPONS_LAYER && o, d = u, g = (0, ee.w)((() => {
                    u && (0, W.MJ)((0, O.YU)((0, re.m)({
                        queriesObj: {
                            mall_collect_id: o
                        }
                    })))
                }));
                return s ? .length && u ? a.createElement(S.n, {
                    className: p()(se().wrap, d && se().allowClick),
                    onClick: g
                }, a.createElement(le.Op, {
                    richTexts: s
                }), d ? a.createElement(ae.A, {
                    className: se().arrow
                }) : null) : null
            };
            ie.displayName = "Panel-AfterPrice";
            var me = (0, ce.A)((0, A.W4)({
                    name: "Panel-AfterPrice"
                }), a.memo)(ie),
                pe = n(78459),
                ue = n(58704),
                de = n.n(ue);
            const ge = e => {
                const {
                    data: t
                } = e, {
                    baseGoodsInfo: n,
                    skuInfo: r,
                    style: l
                } = t || {}, {
                    goodsId: o
                } = n || {}, {
                    skuPriceText: s,
                    marketPriceText: i,
                    priceExplanationVo: m
                } = r || {};
                return o && l !== c.bk.DISABLED ? a.createElement("div", {
                    className: p()(de().priceWrap)
                }, a.createElement("div", {
                    className: de().skuPrice
                }, a.createElement(le.Op, {
                    richTexts: s
                })), i ? .length ? a.createElement("div", {
                    className: de().marketPriceStr
                }, a.createElement(le.Op, {
                    richTexts: i
                })) : null, a.createElement(pe.Ay, {
                    priceExplanationVo: m,
                    className: de().was,
                    iconClassName: de().icon
                })) : null
            };
            ge.displayName = "Panel-PriceArea";
            var Ee = (0, ce.A)((0, A.W4)({
                    name: "Panel-PriceArea"
                }), a.memo)(ge),
                ke = n(31609),
                he = n.n(ke);
            const fe = 201076,
                be = {
                    page_el_sn: 201080
                },
                xe = e => {
                    let {
                        data: t,
                        index: n
                    } = e;
                    const {
                        t: r
                    } = (0, u.B)("bec-fe.web-ui", {
                        keyPrefix: "ShoppingCart"
                    }), [{
                        cartSortVo: o
                    }, {
                        reportSelectModify: m,
                        reportSkuModify: d,
                        reportRemoveModify: k,
                        reportAddModify: f
                    }] = (0, s.Fx)(), {
                        style: b
                    } = (0, h.rR)("cp162938") || {}, {
                        hitExp: x
                    } = (0, h.rR)("cp204719", "cp204720", "cp202428") || {}, {
                        hitExp: y
                    } = (0, h.rR)("cp207901", "cp207902", "cp207900") || {}, I = 1 === (0, h.rR)("cp192736") ? .style, {
                        baseGoodsInfo: N,
                        skuInfo: w,
                        isSelected: T,
                        style: C,
                        bottomDescription: A,
                        listUnPurchaseToast: L
                    } = t || {}, {
                        goodsId: M,
                        goodsName: R,
                        linkUrl: B,
                        goodsEnergyInfo: G,
                        recSortTrackingKey: D,
                        chargeDisplayInfo: F
                    } = N || {}, {
                        skuId: z,
                        skuSpec: $,
                        amount: q,
                        skuThumbUrl: Y,
                        skuQuantity: j
                    } = w || {}, J = o ? .selectedSortType === c.Cl.recommend && !!D, [Q, ae] = (0, ne.A)(T), re = (0, a.useCallback)(l()((e => {
                        ae(e), m([t], e).then((t => {
                            t ? .cartOperateInfo ? .success && null !== t || ae(!e)
                        }))
                    }), 300), [t]), le = (0, a.useMemo)((() => ({
                        idx: n,
                        goods_id: M
                    })), [M, n]), ce = (0, a.useMemo)((() => (0, O.YU)(B || (0, v.rE)({
                        goods_id: M,
                        sku_id: z
                    }, "/goods.html"))), [M, B, z]), oe = (0, ee.w)((() => {
                        (0, _.OS)({
                            page_el_sn: fe,
                            op: "click",
                            ...le
                        }), J && (0, K.o)(M, D), (0, W.MJ)(ce)
                    })), se = (0, a.useMemo)((() => A ? .detailText ? .map((e => e ? .text)).join("") || ""), [A]), ie = (0, a.useRef)(null), pe = (0, ee.w)((() => ie.current ? .resetValue ? .())), ue = (0, ee.w)((() => ie.current ? .hideSelector ? .()));
                    (0, a.useEffect)((() => {
                        const e = (0, i.dr)((() => ue()));
                        return () => e ? .()
                    }), []);
                    const de = (0, ee.w)((async () => {
                            const e = await k([t], {}),
                                {
                                    success: n
                                } = e ? .cartOperateInfo || {};
                            n || pe()
                        })),
                        ge = (0, ee.w)((async e => {
                            const n = await d(t, {
                                amount: e
                            });
                            n ? .cartOperateInfo ? .success || pe()
                        })),
                        ke = (0, ee.w)((async e => {
                            let {
                                value: t,
                                isOverRange: n
                            } = e;
                            n && U.A.warning(L || r("ListUnPurchaseToast")), 0 !== t ? t !== q && ge(t) : de()
                        })),
                        xe = (0, ee.w)((e => {
                            let {
                                value: t,
                                inputNum: n
                            } = e;
                            n > j && U.A.warning(L || r("ListUnPurchaseToast")), 0 !== t ? t !== q && (ie.current ? .hideSelector(), ge(t)) : de()
                        })),
                        ye = (0, ee.w)((e => {
                            e && pe()
                        }));
                    return M && C !== c.bk.DISABLED ? a.createElement(a.Fragment, null, a.createElement(E.nU, {
                        page_el_sn: fe,
                        useClick: !1,
                        others: le
                    }, a.createElement("div", {
                        className: he().col
                    }, a.createElement(S.n, {
                        className: he().checkboxWrap
                    }, a.createElement(g.Sc, {
                        logger: be,
                        className: p()(he().checkbox, 1 !== x || Q ? "" : he().enhanceUnCheckBox, 1 !== y || Q ? "" : he().bolderUnCheckBox),
                        toggleCheck: re,
                        isChecked: Q
                    })), a.createElement(S.n, {
                        className: he().imgWrap,
                        onClick: oe
                    }, a.createElement(H.MB, {
                        className: he().img,
                        src: Y,
                        lazy: !0,
                        alt: R
                    }), a.createElement(X.A, {
                        url: G ? .engThumbUrl,
                        size: "m",
                        goodsId: M,
                        chargerData: F,
                        pos: 2
                    }), a.createElement(K.n, {
                        goodsId: M,
                        skuId: z,
                        recSortTrackingKey: D,
                        isUseImpr: J
                    })), a.createElement("div", {
                        className: he().content
                    }, a.createElement(P.N_, {
                        url: ce,
                        className: p()(he().name, 1 === b && he().fade1, 2 === b && he().fade2),
                        onClick: oe
                    }, R), a.createElement("div", {
                        className: he().specPriceAndCount
                    }, a.createElement("div", {
                        className: he().desc
                    }, $ ? .map(((e, t) => a.createElement(a.Fragment, {
                        key: e.specValue || `${t+1}`
                    }, !!t && a.createElement("span", null, "/"), a.createElement("span", null, e.specValue))))), a.createElement("div", {
                        className: he().options
                    }, a.createElement(Ee, {
                        data: t
                    }), a.createElement("div", {
                        className: he().select
                    }, a.createElement(Z.A, {
                        ref: ie,
                        value: q,
                        min: 0,
                        onChange: I ? xe : ke,
                        appendToBody: !0,
                        mountPopupWhenInit: !0,
                        enableScrollHide: !0,
                        onPopoverVisibleChange: ye,
                        adapted: !0,
                        disableInput: te.Q,
                        data: t,
                        reportSkuModify: d,
                        reportAddModify: f,
                        isNewWebUiQty: I
                    })))), a.createElement(me, {
                        data: t
                    })))), se ? a.createElement("div", {
                        className: p()(he().bottomText)
                    }, a.createElement(V, {
                        className: he().warningIcon
                    }), a.createElement("span", {
                        className: he().warn
                    }, se)) : null) : null
                };
            var ye = (0, a.memo)(xe),
                Ie = n(46694),
                Ne = n(36125),
                we = n(98648),
                Te = n(63661),
                Ce = n.n(Te);
            const Ae = 1,
                ve = 2;
            var _e = function(e) {
                return e[e.NO_IMPORT_CHARGES = 4] = "NO_IMPORT_CHARGES", e
            }(_e || {});
            const Se = e => {
                    const {
                        displayType: t
                    } = e || {};
                    return [Ne.l.ROUND_IMAGE, Ne.l.IMAGE].includes(t) ? {
                        style: {
                            marginBottom: "-2px",
                            verticalAlign: "text-bottom"
                        }
                    } : {}
                },
                Pe = e => {
                    const {
                        displayType: t,
                        url: n
                    } = e || {};
                    return t === Ne.l.ROUND_IMAGE && n ? {
                        node: a.createElement("div", {
                            className: Ce().groupLogo,
                            key: n
                        }, a.createElement(R.Ay, {
                            src: n,
                            resizeWidth: 48,
                            alt: "",
                            "aria-hidden": !0
                        }))
                    } : t === Ne.l.IMAGE ? {
                        className: Ce().img
                    } : {}
                },
                Le = e => {
                    const {
                        displayType: t,
                        text: n,
                        color: a
                    } = e || {};
                    return "|" === n ? .trim() ? {
                        style: {
                            background: a
                        },
                        className: Ce().groupTagDash
                    } : t === Ne.l.IMAGE ? {
                        className: Ce().groupTagIcon
                    } : {}
                },
                Me = e => {
                    let {
                        group: t
                    } = e;
                    const {
                        groupBenefits: n,
                        groupJumpUrl: r,
                        mallId: l
                    } = t || {}, {
                        richBenefits: o
                    } = n ? .[0] || {}, {
                        displayItems: s,
                        actionInfo: i
                    } = o || {}, {
                        actionType: m
                    } = i || {};
                    if (!s ? .length) return null;
                    const u = m === c.ld.READ_MALL_COLLECT_COUPONS_LAYER && l,
                        d = m === c.ld.READ_URL && r,
                        g = u || d;
                    return a.createElement(E.nU, {
                        page_el_sn: 232961
                    }, a.createElement(S.n, {
                        className: p()(Ce().subtitle, g && Ce().pointer),
                        onClick: e => {
                            e ? .stopPropagation(), u ? (0, W.MJ)((0, O.YU)((0, re.m)({
                                queriesObj: {
                                    mall_collect_id: l
                                }
                            }))) : d && (0, W.MJ)(r)
                        }
                    }, a.createElement(le.Op, {
                        richTexts: s,
                        uiGenerate: Pe,
                        ignoreFontSize: !0
                    }), g ? a.createElement(ae.A, {
                        className: Ce().arrow
                    }) : null))
                },
                Ue = (0, a.memo)((e => {
                    const {
                        isRTL: t
                    } = (0, Ie.Sz)(), [{
                        giftInfoList: n
                    }] = (0, s.Fx)(["giftInfoList"]), {
                        group: r
                    } = e, {
                        groupTitle: l,
                        groupType: o,
                        groupJumpUrl: i,
                        groupTags: m,
                        groupLogo: u
                    } = r || {}, {
                        goodsList: d,
                        gotoMall: g,
                        diffIdx: k
                    } = (0, we.R)({
                        group: r
                    }), h = o === c.ws.Temu && n ? .length || 0;
                    if (!d.length && !h) return null;
                    return a.createElement(a.Fragment, null, a.createElement("div", {
                        className: Ce().wrap
                    }, a.createElement(S.n, {
                        className: p()(Ce().titleArea),
                        onClick: g
                    }, (() => {
                        let e = 0;
                        m ? .length ? e = 5 : i && (e = 1);
                        const n = (m || []).map((e => e ? .tagType)).filter(Boolean).join(",");
                        return a.createElement(E.nU, {
                            page_el_sn: 232958,
                            others: {
                                labels_type: n
                            }
                        }, a.createElement("div", {
                            className: p()(Ce().groupTitleContent, i && Ce().pointer)
                        }, a.createElement("div", {
                            className: Ce().groupInfo
                        }, l ? .length ? (e = u ? 4 : e, a.createElement("span", {
                            style: {
                                [t ? "marginLeft" : "marginRight"]: `${e}px`,
                                ...(0, B.i$)(l)
                            },
                            className: Ce().singleLine
                        }, a.createElement(le.Op, {
                            richTexts: l,
                            uiGenerate: Se
                        }))) : null, u ? a.createElement("div", {
                            className: Ce().groupLogo,
                            style: {
                                [t ? "marginLeft" : "marginRight"]: `${e}px`
                            }
                        }, a.createElement(R.Ay, {
                            alt: "",
                            "aria-hidden": !0,
                            src: u,
                            resizeWidth: 48
                        })) : null), (m || []).map(((e, t) => {
                            const {
                                tagText: n,
                                tagStyle: r,
                                tagType: l
                            } = e || {};
                            if (!n ? .length) return null;
                            const c = (0, le.vu)(n),
                                o = l === _e.NO_IMPORT_CHARGES;
                            return a.createElement("div", {
                                key: c || t + 1,
                                className: p()(Ce().groupTagItem, {
                                    [Ce().inFrontOfArrow]: t === m ? .length - 1,
                                    [Ce().borderTag]: r === ve,
                                    [Ce().bgTag]: r === Ae,
                                    [Ce().noImportCharges]: o
                                })
                            }, a.createElement(le.Op, {
                                richTexts: n,
                                uiGenerate: Le
                            }))
                        })), i ? a.createElement(ae.A, {
                            alt: "",
                            "aria-hidden": !0,
                            className: Ce().arrow
                        }) : null))
                    })(), a.createElement(Me, {
                        group: r
                    }))), h ? n ? .map(((e, t) => a.createElement(Y, {
                        giftItem: e,
                        key: t,
                        index: t + k
                    }))) : null, d.map(((e, t) => a.createElement(ye, {
                        key: `${e?.skuInfo?.skuId}/${e?.baseGoodsInfo?.goodsId}/${t+1}`,
                        data: e,
                        index: t + k + h
                    }))))
                }));
            Ue.displayName = "GroupGoodsList";
            var Re = (0, A.W4)({
                    name: "GroupGoodsList"
                })(Ue),
                Be = n(82941),
                Oe = n.n(Be);
            const We = (0, a.memo)((() => {
                const [{
                    isGroupCart: e,
                    isInitd: t,
                    cartList: n,
                    cartGroupVo: r,
                    frontControlMap: m,
                    giftInfoList: p
                }] = (0, s.Fx)(), {
                    validSelectMaxNum: u
                } = m || {}, {
                    cartCheckedNum: d
                } = (0, o.l5)(), g = (0, a.useMemo)((() => +u && d >= +u ? d > 0 : !n.some((e => e ? .style === c.bk.NORMAL && !e ? .isSelected))), [u, d, n]);
                return (0, a.useEffect)((() => {
                    const e = document.querySelector(`.${Oe().inner}`),
                        a = l()((() => {
                            (0, i.UX)()
                        }), 50);
                    return n.length && t && e ? .addEventListener("scroll", a), () => {
                        e ? .removeEventListener("scroll", a)
                    }
                }), [n, t]), n ? .length || p ? .length ? a.createElement("div", {
                    className: Oe().wrap
                }, a.createElement("div", {
                    className: Oe().inner,
                    id: "floatSCP",
                    "data-scroll": !0
                }, e ? a.createElement(a.Fragment, null, r ? .groups ? .map(((e, t) => {
                    const {
                        groupType: n,
                        groupId: r
                    } = e || {};
                    return a.createElement(Re, {
                        key: `${r}/${n}/${t}`,
                        group: e
                    })
                }))) : a.createElement(a.Fragment, null, a.createElement(Q, {
                    giftInfoList: p || [],
                    showLine: !!n.length
                }), n ? .map(((e, t) => a.createElement(ye, {
                    key: `${e?.skuInfo?.skuId}/${e?.baseGoodsInfo?.goodsId}/${t}`,
                    data: e,
                    index: t
                }))))), a.createElement(I, {
                    isAllChecked: g,
                    disabled: !n.length
                })) : a.createElement(C, null)
            }));
            We.displayName = "MainPanel";
            var Ge = We
        }
    }
]);
//# sourceMappingURL=http://temudebug.com/sourcemaps/assets/modernjs/biz_layout_sc_float_b839337b6597928c00c4.js.map