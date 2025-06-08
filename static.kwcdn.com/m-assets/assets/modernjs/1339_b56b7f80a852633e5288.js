(self.webpackChunkmobile_bg_web_personal = self.webpackChunkmobile_bg_web_personal || []).push([
    [1339], {
        38245: function(e) {
            e.exports = {
                successPanel: "successPanel-3lhoo",
                successIcon: "successIcon-1EXHa",
                accountCard: "accountCard-1fcqF",
                title: "title-13V6v",
                desc: "desc-DC0Mi",
                btn: "btn-2CMTn",
                highLight: "highLight-1CSHl",
                mobileText: "mobileText-sxPRt"
            }
        },
        25072: function(e) {
            e.exports = {
                pswInput: "pswInput-3j0SM",
                errorMsgWrap: "errorMsgWrap-2Sw-3",
                submitBtn: "submitBtn-2SmXq",
                highLight: "highLight-1MmJ3"
            }
        },
        58807: function(e) {
            e.exports = {
                successPanel: "successPanel-2eYkZ",
                successIcon: "successIcon-2noga",
                accountCard: "accountCard-XnoU8",
                title: "title-HCXDA",
                desc: "desc-x5dun",
                btn: "btn-fWoWP",
                highLight: "highLight-1s5vd",
                directLogin: "directLogin-2PKUw",
                linkIcon: "linkIcon-17oRH"
            }
        },
        92183: function(e) {
            e.exports = {
                accountWrap: "accountWrap-3ph-K",
                noActiveStyle: "noActiveStyle-1h78v",
                avatar: "avatar-2zNhg",
                accountText: "accountText-1-VGv",
                nickName: "nickName-3tlOb",
                email: "email-3UDQj",
                linkIcon: "linkIcon-2v0U3"
            }
        },
        40560: function(e) {
            e.exports = {
                title: "title-xF8uX",
                btn: "btn-3ts28",
                save: "save-17mug",
                cancel: "cancel-2AqoI"
            }
        },
        20614: function(e) {
            e.exports = {
                form: "form-34yDo",
                btn: "btn-Lsawa",
                tip: "tip-1N4F2"
            }
        },
        75608: function(e) {
            e.exports = {
                verifyItemWrap: "verifyItemWrap-Hm9r8",
                verifyTitle: "verifyTitle-2Eulp",
                verifyDesc: "verifyDesc-2-3Rt",
                content: "content-2s_v3",
                thirdInfoWrap: "thirdInfoWrap-OeTrO",
                icon: "icon-1iPPi",
                nickName: "nickName-jm84f",
                email: "email-1XfcX",
                linkIcon: "linkIcon-3QOxX",
                disable: "disable-p6ptM",
                disableTip: "disableTip-5eYTP",
                disableIcon: "disableIcon-3sxQ5",
                mobile: "mobile-3edj6"
            }
        },
        94354: function(e) {
            e.exports = {
                container: "container-20VW2",
                phoneCode: "phoneCode-ThFio",
                downArrow: "downArrow-2Fcn2",
                selectorContainer: "selectorContainer-re0YZ",
                containerTriangle: "containerTriangle-34qgA",
                content: "content-1kSCI",
                loading: "loading-1xWgt",
                showSelecotr: "showSelecotr-34Cm1",
                item: "item-gOuPw",
                phoneCodeItem: "phoneCodeItem-2D_kQ",
                mask: "mask-1xhS7",
                selectWrapper: "selectWrapper-1XXwr",
                selectFlag: "selectFlag-goH2W",
                selectIcon: "selectIcon-1sX_L"
            }
        },
        64469: function(e) {
            e.exports = {
                inputGroup: "inputGroup-11MMG",
                clearInput: "clearInput-25LeY",
                withClear: "withClear-1WdgL"
            }
        },
        63611: function(e) {
            e.exports = {
                inputGroup: "inputGroup-1sPAg",
                inputBox: "inputBox-1N2P8",
                label: "label-2JJok"
            }
        },
        79401: function(e, t, n) {
            "use strict";
            n.d(t, {
                A: function() {
                    return p
                }
            });
            var i = n(33514),
                r = n(14242),
                s = n(97582),
                a = n(10941),
                o = n(32167),
                c = n(76371),
                l = n(20614),
                u = n.n(l);
            var d = e => {
                    let {
                        btnText: t,
                        onSubmit: n,
                        ...l
                    } = e;
                    const {
                        t: d
                    } = (0, s.B)("bec-fe.account-dialog-pc"), {
                        empty: m,
                        unvalid: p
                    } = d("emailInput", {
                        returnObjects: !0
                    }), [_, E] = (0, i.useState)(""), f = (0, i.useRef)(""), I = async e => {
                        e.preventDefault(), e.stopPropagation();
                        const t = f.current || "";
                        if (!t.length) return void E(m);
                        const i = await n({
                                email: t
                            }),
                            {
                                success: r,
                                error: s
                            } = i || {};
                        r || E(s ? .message)
                    };
                    return i.createElement(i.Fragment, null, i.createElement("form", {
                        className: u().form,
                        onSubmit: I
                    }, i.createElement(a.A, (0, r.A)({}, l, {
                        onChange: e => {
                            f.current = e, E("")
                        }
                    })), _ && i.createElement(c.A, {
                        tip: _,
                        className: u().tip
                    })), i.createElement(o.A, {
                        onClick: I,
                        className: u().btn
                    }, t))
                },
                m = n(69878);
            var p = e => {
                let {
                    globalData: t,
                    stepVo: n
                } = e;
                const {
                    t: r
                } = t || {}, {
                    i18Key: s,
                    handlers: a,
                    title: o,
                    text: c,
                    btnText: l,
                    contentAfterBtn: u
                } = n || {}, p = r(s, {
                    returnObjects: !0
                }), {
                    onSubmit: _
                } = a || {}, {
                    title: E,
                    desc: f,
                    inputLabel: I,
                    btnText: g,
                    placeholder: C
                } = p || {};
                return i.createElement(i.Fragment, null, i.createElement(m.A, {
                    title: o || E
                }, c || f), i.createElement(d, {
                    title: I,
                    btnText: l || g,
                    onSubmit: _,
                    autoFocus: !0,
                    placeholder: C
                }), u)
            }
        },
        35953: function(e, t, n) {
            "use strict";
            var i = n(33514),
                r = n(69878),
                s = n(68207);
            t.A = e => {
                let {
                    globalData: t,
                    stepVo: n
                } = e;
                const {
                    t: a,
                    phoneCodeVo: o
                } = t || {}, {
                    i18Key: c,
                    handlers: l
                } = n || {}, u = a(c, {
                    returnObjects: !0
                }), {
                    onSubmit: d
                } = l || {}, {
                    title: m,
                    desc: p,
                    inputLabel: _,
                    btnText: E
                } = u || {};
                return i.createElement(i.Fragment, null, i.createElement(r.A, {
                    title: m
                }, p), i.createElement(s.A, {
                    title: _,
                    btnText: E,
                    onSubmit: d,
                    value: {
                        phoneCodeVo: o
                    }
                }))
            }
        },
        11e3: function(e, t, n) {
            "use strict";
            var i = n(33514),
                r = n(27258),
                s = n(34477),
                a = n(32167),
                o = n(16351),
                c = n(69878),
                l = n(43989),
                u = n(76371),
                d = n(76699),
                m = n(25072),
                p = n.n(m);
            t.A = e => {
                let {
                    globalData: t,
                    stepVo: n
                } = e;
                const m = (0, i.useRef)(),
                    [_, E] = (0, i.useState)(),
                    {
                        i18Key: f = "passwordInput",
                        handlers: I,
                        stepData: g,
                        metricsInfo: C
                    } = n || {},
                    {
                        onSubmit: h
                    } = I || {},
                    {
                        t: y,
                        accountInfo: A
                    } = t || {},
                    {
                        nickName: S,
                        nick_name: b
                    } = A || {},
                    N = y(f, {
                        returnObjects: !0,
                        val: `#${S||b}#`
                    }),
                    {
                        title: L,
                        desc: v,
                        btnText: w,
                        noNickNameDesc: O
                    } = N || {},
                    D = S || b ? v : O,
                    P = (0, l.A)(D, p().highLight);
                return i.createElement(i.Fragment, null, i.createElement(c.A, {
                    title: L
                }, P), i.createElement(o.A, {
                    className: p().pswInput,
                    ref: m,
                    onChange: e => {
                        E("")
                    },
                    onFocus: () => {
                        C ? .inputBtn && (0, r.E0)({
                            page_el_sn: C ? .inputBtn
                        })
                    }
                }), _ && i.createElement(u.A, {
                    tip: _,
                    className: p().errorMsgWrap
                }), i.createElement(a.A, {
                    className: p().submitBtn,
                    onClick: async () => {
                        try {
                            C ? .submitBtn && (0, r.E0)({
                                page_el_sn: C ? .submitBtn
                            });
                            const e = await h({
                                    password: m ? .current ? .value,
                                    ...g
                                }),
                                {
                                    success: t,
                                    error: n
                                } = e || {};
                            !t && n && E(n ? .message || y("error")), (0, d.Nq)({
                                event: "PasswordPanel",
                                subEvent: "onSubmitClick",
                                tags: {
                                    success: !!t
                                }
                            })
                        } catch (e) {
                            (0, s.fL)(e), E(y("error"))
                        }
                    }
                }, w))
            }
        },
        34289: function(e, t, n) {
            "use strict";
            n.d(t, {
                A: function() {
                    return D
                }
            });
            var i = n(33514),
                r = n(13852),
                s = n(34477),
                a = n(64632),
                o = n(27258),
                c = n(68480),
                l = n(20162),
                u = n(86901),
                d = n(76699),
                m = n(70093),
                p = n(69878),
                _ = n(42133),
                E = n(32485),
                f = n.n(E),
                I = n(63815),
                g = n(97582),
                C = n(50579),
                h = n(14242),
                y = n(67388);
            const A = i.forwardRef(((e, t) => {
                const {
                    t: n,
                    i18n: r
                } = (0, g.B)("bec-fe.svg-icons-pc");
                return i.createElement(y.i, (0, h.A)({
                    ref: t,
                    fill: "#0a8800"
                }, e, {
                    path: ["M457.2 61c27.7-11.1 58.7-11.3 86.6-0.4l324.9 125.6c29 11.2 47.8 39.5 46.9 70.6l-6.5 214.4c-4.2 137.7-72.5 265.5-184.7 345.4l-85.3 60.8c-81.8 58.2-191.5 58.2-273.3 0l-80.4-57.3c-114.3-81.4-183-212.4-184.9-352.7l-2.8-212c-0.4-30.3 17.9-57.8 46.1-69.1z m64.4 56.9c-13.4-5.2-28.2-5.1-41.6 0.2l-313.4 125.3c-4.6 1.8-7.5 6.3-7.5 11.1l2.9 212c1.6 120.8 60.7 233.5 159.1 303.6l80.4 57.2c60.4 43 141.5 43 201.9 0l85.4-60.8c96.5-68.8 155.3-178.7 158.9-297.1l6.4-214.5c0.1-5-2.9-9.6-7.5-11.4z m169.1 261.2l3.8 3.2c12 12 12 31.4 0 43.5l-188.3 188.3c-12 12-31.4 12-43.4 0l-115.9-115.9c-12-12-12-31.4 0-43.4 12-12 31.4-12 43.5 0l94.1 94.1 166.5-166.6c10.8-10.8 27.6-11.9 39.7-3.2z"],
                    "aria-label": e["aria-label"] ? ? (r.exists("aria-label.ShangxiangBaozhang", {
                        ns: "bec-fe.svg-icons-pc"
                    }) ? n("aria-label.ShangxiangBaozhang") : void 0),
                    rtlPath: []
                }))
            }));
            A.supportRtl = !1;
            var S = A,
                b = n(27092),
                N = n(4174),
                L = n(75608),
                v = n.n(L);
            const w = e => {
                let {
                    data: t,
                    onSubmit: n
                } = e;
                const {
                    t: r
                } = (0, g.B)("bec-fe.account-dialog-pc", {
                    keyPrefix: "verifySelectPanel.verifyItem"
                }), {
                    nickName: s,
                    emailDes: a,
                    type: o,
                    mobileDes: l,
                    telCode: u,
                    challengeQuestionStatus: d
                } = t || {}, m = (0, i.useMemo)((() => c.C7[o]), [o]);
                (0, i.useEffect)((() => {
                    m ? .init()
                }), [m]);
                const p = u && l ? `+${u} ${l}` : l,
                    E = r(o, {
                        returnObjects: !0,
                        val: `#${p||a}#`
                    }),
                    h = [_.P.CHALLENGE_QUESTION, _.P.MOBILE_CHALLENGE_QUESTIONS].includes(o),
                    y = o in c.$g,
                    A = h && 1 !== d,
                    L = c.Gt[o],
                    {
                        title: w,
                        desc: O,
                        disableTip: D
                    } = E || {},
                    P = O ? .split("#") ? .map(((e, t) => t % 2 ? i.createElement("span", {
                        dir: "ltr",
                        className: p ? v().mobile : ""
                    }, e) : e)),
                    B = A ? "#AAA" : "#222";
                return i.createElement(i.Fragment, null, i.createElement("div", {
                    className: f()(v().verifyItemWrap, {
                        [v().disable]: A
                    }),
                    onClick: async () => {
                        if (A) return;
                        let e;
                        y && ((0, I.Nx)(), m ? .hasInit || await m.init(), (0, I.jD)(), e = await m.requestFormatAuthInfo()), n && await n({
                            data: t,
                            authInfo: e
                        })
                    }
                }, i.createElement("div", {
                    className: v().content
                }, i.createElement("div", {
                    className: v().verifyTitle
                }, h && i.createElement(S, {
                    className: v().icon,
                    fill: B
                }), w), P && i.createElement("div", {
                    className: v().verifyDesc
                }, P), y && i.createElement("div", {
                    className: v().thirdInfoWrap
                }, L && i.createElement(C.Ay, {
                    alt: "",
                    src: L,
                    className: v().icon
                }), s && i.createElement("span", {
                    className: v().nickName
                }, s), a && i.createElement("span", {
                    className: v().email
                }, a))), i.createElement(b.A, {
                    className: v().linkIcon
                })), A && D && i.createElement("div", {
                    className: v().disableTip
                }, i.createElement(N.A, {
                    className: v().disableIcon,
                    fill: B
                }), D))
            };
            var O = (0, i.memo)(w);
            var D = e => {
                let {
                    globalData: t,
                    stepVo: n
                } = e;
                const {
                    data: E,
                    i18Key: f = "verifySelectPanel",
                    handlers: I,
                    metricsInfo: g,
                    stepData: C
                } = n || {}, {
                    t: h
                } = t || {}, {
                    verifyList: y
                } = C || {}, A = y || E, [S, b] = (0, i.useState)({
                    show: !1
                }), N = h(f, {
                    returnObjects: !0
                }), {
                    title: L,
                    desc: v,
                    noVerifyItemDesc: w
                } = N || {}, {
                    onSubmit: D,
                    questionJump: P,
                    verifyQuestion: B
                } = I || {}, R = (0, i.useRef)(!1), k = async e => {
                    let {
                        data: t,
                        authInfo: n
                    } = e;
                    if (!R.current) {
                        R.current = !0;
                        try {
                            const {
                                type: e
                            } = t || {}, i = g ? .[e];
                            i && (0, o.E0)({
                                page_el_sn: i
                            });
                            const s = e in c.$g,
                                u = [_.P.CHALLENGE_QUESTION, _.P.MOBILE_CHALLENGE_QUESTIONS].includes(e);
                            if (!s && !u) {
                                const i = await D({
                                        data: t,
                                        authInfo: n
                                    }),
                                    {
                                        success: r
                                    } = i || {};
                                (0, d.Nq)({
                                    event: "VerifySelector",
                                    tags: {
                                        success: !!r
                                    },
                                    type: e
                                })
                            }
                            if (s) {
                                const i = await D({
                                        data: t,
                                        authInfo: n
                                    }),
                                    {
                                        success: r,
                                        result: s,
                                        error: a
                                    } = i || {},
                                    {
                                        status: o
                                    } = s || {};
                                if ((0, d.Nq)({
                                        event: "VerifySelector",
                                        tags: {
                                            success: !!r
                                        },
                                        type: e
                                    }), !r && a) return l.A.error(a ? .message || h("systemBusy"));
                                1 === o && b({
                                    show: !0,
                                    ...t
                                })
                            }
                            if (u) {
                                const n = await P({
                                        data: t
                                    }),
                                    {
                                        verify_auth_token: i,
                                        message: s,
                                        verifyAuthToken: o
                                    } = n ? .error ? .response ? .data || {};
                                if ((0, d.Nq)({
                                        event: "VerifySelector",
                                        tags: {
                                            success: !!i || !!o
                                        },
                                        type: e
                                    }), !i && !o) return l.A.error(s || h("systemBusy"));
                                const c = await (0, a._4)({
                                    url: `/bgn_verification.html?${(0,r.Zq)({VerifyAuthToken:i||o,from:location.href,type:"window",VerifyAuthType:54002})}`
                                });
                                (0, d.Nq)({
                                    event: "VerifySelector",
                                    subEvent: "openPopIframe",
                                    tags: {
                                        success: c
                                    }
                                });
                                const u = await B({
                                        isSuccess: c,
                                        verify_auth_token: i || o
                                    }),
                                    {
                                        success: m
                                    } = u || {};
                                (0, d.Nq)({
                                    event: "VerifySelector",
                                    subEvent: "verifyQuestion",
                                    tags: {
                                        success: !!m
                                    }
                                })
                            }
                        } catch (e) {
                            (0, s.fL)(e)
                        } finally {
                            R.current = !1
                        }
                    }
                }, M = A ? .length ? v : w;
                return i.createElement(i.Fragment, null, i.createElement(p.A, {
                    title: L
                }, M), !!A ? .length && i.createElement(u.A.ScrollContainer, {
                    placement: "bottom"
                }, A ? .map(((e, t) => {
                    const {
                        type: n
                    } = e || {};
                    return i.createElement(O, {
                        data: e,
                        key: n,
                        onSubmit: k
                    })
                }))), S ? .show && i.createElement(m.A, {
                    emailDes: S ? .emailDes,
                    avatar: S ? .avatar,
                    nickName: S ? .nickName,
                    thirdType: S ? .type,
                    dealAuthInfo: e => {
                        b({
                            show: !1
                        }), k({
                            data: S,
                            authInfo: e
                        })
                    },
                    onCancel: () => {
                        b({
                            show: !1
                        })
                    }
                }))
            }
        },
        16638: function(e, t, n) {
            "use strict";
            n.d(t, {
                CI: function() {
                    return o
                },
                E5: function() {
                    return c
                },
                HG: function() {
                    return i
                },
                I4: function() {
                    return l
                },
                P: function() {
                    return d
                },
                ll: function() {
                    return u
                },
                mS: function() {
                    return a
                },
                r5: function() {
                    return r
                },
                x9: function() {
                    return s
                }
            });
            var i = function(e) {
                    return e.VERIFY_SELECTOR = "VERIFY_SELECTOR", e.VERIFY_BY_PASSWORD = "VERIFY_BY_PASSWORD", e.VERIFY_BY_MOBILE = "VERIFY_BY_MOBILE", e.VERIFY_BY_EMAIL = "VERIFY_BY_EMAIL", e.VERIFY_SUCCESS = "VERIFY_SUCCESS", e.PHONE_INPUT_ADD = "PHONE_INPUT_ADD", e.PHONE_INPUT_CHANGE = "PHONE_INPUT_CHANGE", e.EMAIL_INPUT_ADD = "EMAIL_INPUT_ADD", e.EMAIL_INPUT_CHANGE = "EMAIL_INPUT_CHANGE", e.VERIFY_MOBILE_CODE = "VERIFY_MOBILE_CODE", e.VERIFY_EMAIL_CODE = "VERIFY_EMAIL_CODE", e.VERIFY_EMAIL_ADD_CODE = "VERIFY_EMAIL_ADD_CODE", e.VERIFY_MOBILE_ADD_CODE = "VERIFY_MOBILE_ADD_CODE", e.BIND_SUCCESS_PANEL = "BIND_SUCCESS_PANEL", e.VERIFY_LOGIN = "VERIFY_LOGIN", e
                }(i || {}),
                r = function(e) {
                    return e.MOBILE_BIND = "MOBILE_BIND", e.MOBILE_CHANGE_BIND = "MOBILE_CHANGE_BIND", e.MAIL_BIND = "MAIL_BIND", e.MAIL_CHANGE_BIND = "MAIL_CHANGE_BIND", e.LOGIN = "LOGIN", e
                }(r || {}),
                s = function(e) {
                    return e.ACCOUNT_RECOVER = "ACCOUNT_RECOVER", e
                }(s || {});
            const a = {
                    MAIL_VERIFY_CODE: 207496,
                    MAIL_PASSWORD: 207497,
                    GOOGLE: 207499,
                    FACEBOOK: 207498,
                    APPLE: 207500,
                    TWITTER: 207501,
                    CHALLENGE_QUESTION: 207502,
                    MAIL_VERIFY_CODE_INPUT: 207503,
                    MAIL_VERIFY_CODE_RESEND: 207504,
                    MAIL_PASSWORD_INPUT: 207505,
                    MAIL_PASSWORD_SUBMIT: 207506
                },
                o = {
                    CLOSE_SUCCESS_PANEL: 208441,
                    MOBILE_BIND: 208439,
                    MOBILE_CHANGE_BIND: 208440,
                    MAIL_BIND: 208437,
                    MAIL_CHANGE_BIND: 208438,
                    LOGIN: 208436,
                    DIRECT_LOGIN: 215523
                };
            var c = function(e) {
                return e.MAIL = "MAIL", e.MOBILE = "MOBILE", e.ORDER = "ORDER", e
            }(c || {});
            const l = [{
                    regionId: 37,
                    regionName: "Canada",
                    regionShortName: "CA",
                    phoneCode: "1"
                }, {
                    regionId: 211,
                    regionName: "United States",
                    regionShortName: "US",
                    phoneCode: "1"
                }],
                u = "account-verify",
                d = {
                    success: 0,
                    fail: 1,
                    two_factor_auth: 9
                }
        },
        33623: function(e, t, n) {
            "use strict";
            n.d(t, {
                A: function() {
                    return te
                }
            });
            var i = n(33514),
                r = n(97582),
                s = n(63815),
                a = n(27258),
                o = n(20162),
                c = n(34477),
                l = n(12400),
                u = n(1762),
                d = n(70255),
                m = n(42133),
                p = n(16638),
                _ = n(55920);
            const E = (0, i.createContext)({}),
                f = "0.4.8" ? .split("-") ? .[0] || "",
                I = e => {
                    let {
                        children: t,
                        accountInfo: n,
                        verifyParams: r,
                        verifyList: s
                    } = e;
                    const {
                        suin: a
                    } = n || {}, {
                        login_scene: o,
                        login_source: I,
                        ticket: g,
                        query_type: C,
                        login_app_id: h
                    } = r || {}, [y, A] = (0, i.useState)(g), S = {
                        login_scene: o,
                        login_source: I,
                        ticket: y
                    }, b = (0, i.useRef)(), [N, L] = (0, i.useState)(s), v = async (e, t) => {
                        const {
                            code: n,
                            type: i,
                            id: r,
                            password: s,
                            key_version: a,
                            sign: o
                        } = e || {};
                        if ([m.P.APPLE, m.P.FACEBOOK, m.P.GOOGLE, m.P.TWITTER, m.P.LINE, m.P.KAKAO].includes(i) && !t ? .code && !t ? .access_token) return;
                        const c = i === m.P.MOBILE,
                            d = {
                                [c ? "mobile_id" : "email_id"]: r,
                                login_app_id: c ? u.s.mobile : u.s.mail
                            },
                            E = {
                                ticket: g,
                                query_type: C,
                                type: i,
                                code: n,
                                password: s,
                                key_version: a,
                                sign: o,
                                ...d,
                                ...t || {}
                            },
                            f = await _.P0(E),
                            {
                                status: I
                            } = f ? .result || {};
                        if (I === p.P.two_factor_auth) {
                            const {
                                twoFactorAuthType: e,
                                twoFactorAuthTicket: t,
                                twoFactorAuthScene: n
                            } = f ? .result || {};
                            if (!await (0, l.qA)({
                                    stay: !1,
                                    two_factor_auth_ticket: t,
                                    two_factor_auth_type: e,
                                    two_factor_auth_scene: n
                                })) return;
                            return _.P0({ ...E,
                                type: m.P.TWO_FACTOR_AUTH
                            })
                        }
                        return f
                    }, w = async e => {
                        const {
                            isSuccess: t,
                            ...n
                        } = e || {};
                        if (!t) return;
                        const i = await _.An({
                                account_dialog_version: f,
                                ...n
                            }),
                            {
                                result: r
                            } = i || {},
                            {
                                status: s,
                                ticket: c
                            } = r || {};
                        if (s === p.P.two_factor_auth) {
                            const {
                                two_factor_auth_type: t,
                                twoFactorAuthType: n,
                                two_factor_auth_ticket: r,
                                twoFactorAuthTicket: s,
                                two_factor_auth_scene: a,
                                twoFactorAuthScene: o
                            } = i ? .result || {};
                            if (!await (0, l.qA)({
                                    stay: !1,
                                    two_factor_auth_ticket: r || s,
                                    two_factor_auth_type: t || n,
                                    two_factor_auth_scene: a || o
                                })) return;
                            return w({ ...e,
                                type: m.P.TWO_FACTOR_AUTH,
                                ticket: c
                            })
                        }
                        if (s !== p.P.success) {
                            const e = await _.WI({
                                    process_type: p.x9.ACCOUNT_RECOVER,
                                    suin: a,
                                    query_type: C,
                                    login_scene: o,
                                    login_source: I
                                }),
                                {
                                    success: t,
                                    result: n
                                } = e || {},
                                {
                                    loginInfoList: r,
                                    ticket: s
                                } = n || {};
                            return t && s && (L(r), A(g)), { ...i || {},
                                success: !1
                            }
                        }
                        return i
                    }, O = {
                        handlers: {
                            sendVerifyAccountEmailCode: e => {
                                const {
                                    id: t,
                                    resend: n = !1
                                } = e || {};
                                return _.sm({ ...S,
                                    login_app_id: u.s.mail,
                                    email_id: t,
                                    resend: n
                                })
                            },
                            sendVerifyAccountMobileCode: e => {
                                const {
                                    id: t,
                                    resend: n = !1
                                } = e || {};
                                return _.ez({ ...S,
                                    login_app_id: u.s.mobile,
                                    mobile_id: t,
                                    resend: n
                                })
                            },
                            verifyAccount: v,
                            queryQuestionJump: async () => await _.HS({
                                bind_app_id: h,
                                type: p.x9.ACCOUNT_RECOVER,
                                query_type: C,
                                ticket: g,
                                suin: a
                            }),
                            dealQuestionVerifyResult: w,
                            onPwdSubmit: async e => {
                                if (!b.isLock) {
                                    b.isLock = !0;
                                    try {
                                        const {
                                            password: t,
                                            id: n,
                                            type: i
                                        } = e || {}, r = await _.Fk({ ...S,
                                            ticket: g,
                                            login_app_id: u.s.mail,
                                            email_id: n
                                        }), {
                                            success: s,
                                            result: a
                                        } = r || {}, {
                                            pubKey: o,
                                            salt: c,
                                            nonce: l,
                                            serverTime: m,
                                            keyVersion: p,
                                            sign: E
                                        } = a || {};
                                        if (!s || !a) return r;
                                        const f = await (0, d.A)(t, o, c, l, m);
                                        return await v({
                                            password: f,
                                            key_version: p,
                                            sign: E,
                                            id: n,
                                            type: i
                                        })
                                    } catch (e) {
                                        (0, c.fL)(e, {
                                            event: "onPwdSubmit"
                                        })
                                    } finally {
                                        b.isLock = !1
                                    }
                                }
                            },
                            requestMobileChangeCode: async e => {
                                const {
                                    mobile: t,
                                    tel_location_id: n,
                                    tel_code: i,
                                    resend: r = !1
                                } = e || {};
                                return await _.Id({
                                    bind_app_id: u.s.mobile,
                                    ticket: g,
                                    mobile: t,
                                    tel_location_id: n,
                                    tel_code: i,
                                    resend: r
                                })
                            },
                            verifyAndBindChangeMobile: async e => {
                                const {
                                    code: t
                                } = e || {};
                                return await _.vg({
                                    bind_app_id: u.s.mobile,
                                    ticket: g,
                                    code: t
                                })
                            },
                            requestEmailChangeCode: e => {
                                const {
                                    email: t,
                                    resend: n = !1
                                } = e || {};
                                return _.es({
                                    ticket: g,
                                    bind_app_id: u.s.mail,
                                    email: t,
                                    resend: n
                                })
                            },
                            verifyEmailChangeCode: e => {
                                const {
                                    email: t,
                                    code: n
                                } = e || {};
                                return _.N_({
                                    ticket: g,
                                    bind_app_id: u.s.mail,
                                    email: t,
                                    code: n
                                })
                            },
                            requestEmailAddCode: e => {
                                const {
                                    email: t,
                                    resend: n = !1
                                } = e || {};
                                return _.Rr({
                                    ticket: g,
                                    bind_app_id: u.s.mail,
                                    email: t,
                                    resend: n
                                })
                            },
                            verifyEmailAddCode: e => {
                                const {
                                    email: t,
                                    code: n
                                } = e || {};
                                return _.A3({
                                    ticket: g,
                                    bind_app_id: u.s.mail,
                                    email: t,
                                    code: n
                                })
                            },
                            sendAddMobileCode: async e => {
                                const {
                                    mobile: t,
                                    tel_code: n,
                                    tel_location_id: i,
                                    resend: r = !1
                                } = e || {};
                                return await _.jJ({
                                    ticket: g,
                                    mobile: t,
                                    tel_location_id: i,
                                    tel_code: n,
                                    bind_app_id: u.s.mobile,
                                    resend: r
                                })
                            },
                            verifyAndBindAddMobile: async e => {
                                const {
                                    tel_location_id: t,
                                    mobile: n,
                                    mobile_des: i,
                                    tel_code: r,
                                    resend: s = !1,
                                    code: a
                                } = e || {};
                                return await _.k1({
                                    ticket: g,
                                    bind_app_id: u.s.mobile,
                                    mobile: n || i,
                                    tel_location_id: t,
                                    tel_code: r,
                                    code: a,
                                    resend: s
                                })
                            },
                            requestMobileCodeBeforeLogin: async e => {
                                const {
                                    mobile_id: t,
                                    resend: n = !1
                                } = e || {};
                                return _.B7({ ...S,
                                    login_app_id: u.s.mobile,
                                    mobile_id: t,
                                    resend: n
                                })
                            },
                            verifyCodeBeforeLogin: async e => {
                                const {
                                    type: t,
                                    login_app_id: n,
                                    email_id: i,
                                    mobile_id: r,
                                    code: s
                                } = e || {};
                                return _.fS({
                                    ticket: g,
                                    query_type: C,
                                    type: t,
                                    login_app_id: n,
                                    email_id: i,
                                    mobile_id: r,
                                    code: s
                                })
                            },
                            requestMailCodeBeforeLogin: async e => {
                                const {
                                    email_id: t,
                                    resend: n = !1
                                } = e || {};
                                return _.uk({ ...S,
                                    login_app_id: u.s.mail,
                                    email_id: t,
                                    resend: n
                                })
                            }
                        },
                        data: {
                            accountInfo: n,
                            verifyParams: { ...r || {},
                                login_app_id: h
                            },
                            verifyList: N
                        }
                    };
                    return i.createElement(E.Provider, {
                        value: O
                    }, t)
                };
            var g = n(7173),
                C = n(68480),
                h = n(32485),
                y = n.n(h),
                A = n(95789),
                S = n(86901),
                b = n(10147),
                N = n(1528),
                L = n(40560),
                v = n.n(L);
            var w = n(68554),
                O = n(34289),
                D = n(4341),
                P = n(11e3),
                B = n(50063),
                R = n(32167),
                k = n(27092),
                M = n(14242),
                T = n(50579);
            var F = function(e) {
                    const {
                        src: t,
                        onClick: n,
                        className: r = "",
                        ...s
                    } = e;
                    return t ? i.createElement(T.Ay, (0, M.A)({
                        alt: "",
                        src: t,
                        onClick: n,
                        className: r
                    }, s)) : i.createElement("div", {
                        className: r,
                        onClick: n
                    })
                },
                V = n(66345),
                G = n(92183),
                H = n.n(G);
            var x = e => {
                    let {
                        accountInfo: t,
                        onClick: n = () => {},
                        hideLink: r = !1,
                        className: s = ""
                    } = e;
                    const {
                        emailDes: a = "",
                        nickName: o = "",
                        avatar: c,
                        mobileDes: l,
                        telCode: u,
                        email: d = "",
                        displayMobile: m = ""
                    } = t || {}, p = d || m || a || (u && l ? `+${u} ${l}` : "");
                    return i.createElement("div", {
                        className: y()(H().accountWrap, s, {
                            [H().noActiveStyle]: r
                        }),
                        onClick: () => {
                            r || n ? .(t)
                        }
                    }, i.createElement(F, {
                        alt: "",
                        src: c,
                        className: H().avatar
                    }), i.createElement("div", {
                        className: H().accountText
                    }, i.createElement("div", {
                        className: H().nickName
                    }, o), p && i.createElement("div", {
                        className: H().email
                    }, p)), !r && i.createElement(V.UU, {
                        className: H().linkIcon
                    }))
                },
                U = n(43989),
                Y = n(76699),
                q = n(58807),
                W = n.n(q);
            var K = e => {
                    let {
                        globalData: t,
                        stepVo: n
                    } = e;
                    const {
                        t: r
                    } = t || {}, {
                        i18Key: s = "verifySuccess",
                        stepData: o,
                        handlers: c,
                        metricsInfo: l
                    } = n || {}, {
                        onSubmit: u,
                        onGoShoppingBtnClick: d
                    } = c || {}, {
                        email: m,
                        nextViewType: _,
                        nickName: E,
                        avatar: f,
                        displayMobile: I,
                        canLogin: g,
                        appCode: C
                    } = o || {}, {
                        directLoginSn: h
                    } = l || {}, y = r(s, {
                        returnObjects: !0,
                        val: `#${m||I}#`
                    }), {
                        title: A,
                        notNow: S
                    } = y || {}, {
                        desc: b,
                        btnText: N
                    } = y[_] || {}, L = (0, U.A)(b, W().highLight), v = g && C && _ !== p.r5.LOGIN;
                    return i.createElement("div", {
                        className: W().successPanel
                    }, i.createElement(V.SL, {
                        className: W().successIcon,
                        fillColor: "#fb7701"
                    }), i.createElement("div", {
                        className: W().title
                    }, A), i.createElement("div", {
                        className: W().desc
                    }, L), i.createElement(x, {
                        accountInfo: {
                            emailDes: m,
                            nickName: E,
                            avatar: f
                        },
                        hideLink: !0,
                        className: W().accountCard
                    }), i.createElement(R.A, {
                        className: W().btn,
                        onClick: () => ((0, Y.Nq)({
                            event: "VerifySuccess",
                            subEvent: "onSubmitHandler"
                        }), u({ ...o
                        }))
                    }, N), v && i.createElement(B.Ay, {
                        payload: {
                            page_el_sn: h
                        }
                    }, i.createElement("div", {
                        className: W().directLogin,
                        onClick: () => ((0, Y.Nq)({
                            event: "VerifySuccess",
                            subEvent: "onDirectLoginBtnHandler"
                        }), h && (0, a.E0)({
                            page_el_sn: h
                        }), d({ ...o
                        }))
                    }, i.createElement("span", null, S), i.createElement(k.A, {
                        className: W().linkIcon
                    }))))
                },
                $ = n(35953),
                Q = n(79401);
            n(25440);
            const j = [1];
            var J = n(38245),
                X = n.n(J);
            var z = e => {
                    let {
                        globalData: t,
                        stepVo: n
                    } = e;
                    const {
                        t: r,
                        verifiedAccountInfo: s
                    } = t || {}, {
                        nextViewType: a,
                        email: o,
                        displayMobile: c
                    } = s || {}, {
                        i18Key: l,
                        stepData: u,
                        handlers: d
                    } = n || {}, {
                        onSubmit: m
                    } = d || {}, {
                        email: p,
                        mobile: _,
                        tel_code: E
                    } = u || {}, f = E && _ ? `+${E} ${function(e,t){if(!j.includes(+t))return e;const n=e?.replace(/\s/g,"")||"";return n?.replace(/^(\d{0,3})(\d{0,3})(\d*)$/g,((e,t,n,i)=>` ($ {
                        t
                    }) $ {
                        n
                    } - $ {
                        i
                    }
                    `.trim()))}(_,E)}`: _, I = r(l, {
                        returnObjects: !0,
                        oldVal: `#${o||c}#`,
                        newVal: `#${p||f}#`
                    }), {
                        title: g,
                        desc: C,
                        btnText: h
                    } = I ? .[a] || {}, y = !!f, A = (0, U.A)(C, y ? X().mobileText : X().highLight);
                    return i.createElement("div", {
                        className: X().successPanel
                    }, i.createElement(V.SL, {
                        className: X().successIcon,
                        fillColor: "#fb7701"
                    }), i.createElement("div", {
                        className: X().title
                    }, g), i.createElement("div", {
                        className: X().desc
                    }, A), i.createElement(R.A, {
                        className: X().btn,
                        onClick: () => ((0, Y.Nq)({
                            event: "BindSuccess",
                            subEvent: "onSubmitHandler"
                        }), m({ ...u
                        }))
                    }, h))
                },
                Z = n(83836);
            var ee = e => {
                let {
                    phoneCodeVo: t,
                    onSuccess: n,
                    onClose: c,
                    popupProps: l,
                    onBack: d,
                    withDialog: _,
                    initStep: f = p.HG.VERIFY_SELECTOR,
                    nextViewType: I
                } = e;
                const {
                    t: h
                } = (0, r.B)("bec-fe.account-dialog-pc"), L = (0, i.useRef)(), B = (0, i.useRef)(), R = (0, i.useRef)(), {
                    handlers: k,
                    data: M
                } = (0, i.useContext)(E), {
                    accountInfo: T,
                    verifyParams: F,
                    verifyList: V
                } = M || {}, {
                    sendVerifyAccountEmailCode: G,
                    sendVerifyAccountMobileCode: H,
                    verifyAccount: x,
                    queryQuestionJump: U,
                    dealQuestionVerifyResult: Y,
                    onPwdSubmit: q,
                    requestMobileChangeCode: W,
                    verifyAndBindChangeMobile: j,
                    requestEmailChangeCode: J,
                    verifyEmailChangeCode: X,
                    verifyEmailAddCode: ee,
                    requestEmailAddCode: te,
                    sendAddMobileCode: ne,
                    verifyAndBindAddMobile: ie,
                    requestMobileCodeBeforeLogin: re,
                    requestMailCodeBeforeLogin: se,
                    verifyCodeBeforeLogin: ae
                } = k || {}, oe = h("Cancel"), ce = h("Continue"), le = async e => {
                    if (R.current) return;
                    R.current = !0;
                    const {
                        ticket: t,
                        login_source: i,
                        login_scene: r,
                        login_app_id: s
                    } = F || {};
                    try {
                        const a = await n({
                            login_source: i,
                            login_scene: r,
                            login_app_id: s,
                            ticket: t,
                            ...e || {}
                        });
                        return !a && (R.current = !1), a
                    } catch (e) {
                        R.current = !1
                    }
                }, ue = async e => {
                    let {
                        code: t,
                        id: n,
                        type: i
                    } = e;
                    const r = await x({
                            code: t,
                            id: n,
                            type: i
                        }),
                        {
                            success: s,
                            result: a
                        } = r || {};
                    return s && L.current.setStepForward(p.HG.VERIFY_SUCCESS, a), r
                }, de = async e => {
                    const t = await W(e),
                        {
                            success: n
                        } = t || {};
                    return n && L.current.setStepForward(p.HG.VERIFY_MOBILE_CODE, e), t
                }, me = async e => {
                    const t = await te(e),
                        {
                            success: n
                        } = t || {};
                    return n && L.current.setStepForward(p.HG.VERIFY_EMAIL_ADD_CODE, e), t
                }, pe = async e => {
                    const t = await ne(e),
                        {
                            success: n
                        } = t || {};
                    return n && L.current.setStepForward(p.HG.VERIFY_MOBILE_ADD_CODE, e), t
                }, _e = () => (L.current.setStepBack(), {
                    success: !0
                });
                return i.createElement(g.Ay, {
                    initStep: f,
                    globalData: {
                        accountInfo: T,
                        phoneCodeVo: t,
                        popupProps: l,
                        verifiedAccountInfo: {
                            nextViewType: I
                        }
                    },
                    onClose: async function() {
                        let {
                            step: e,
                            stepVo: t
                        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        const {
                            stepData: n
                        } = t || {}, {
                            nextViewType: i
                        } = n || {};
                        if (e === p.HG.VERIFY_SUCCESS && (0, a.E0)({
                                page_el_sn: p.CI.CLOSE_SUCCESS_PANEL
                            }), e !== p.HG.BIND_SUCCESS_PANEL)
                            if (i !== p.r5.LOGIN || e !== p.HG.VERIFY_SUCCESS) c();
                            else {
                                const {
                                    type: e,
                                    id: t
                                } = B.current || {};
                                le({
                                    [e === m.P.MOBILE ? "mobile_id" : "email_id"]: t
                                })
                            }
                        else le(n)
                    },
                    onBack: d,
                    stepsDetailMap: {
                        [p.HG.VERIFY_SELECTOR]: {
                            handlers: {
                                onSubmit: async e => {
                                    let {
                                        data: t,
                                        authInfo: n
                                    } = e;
                                    const {
                                        type: i
                                    } = t || {};
                                    if (B.current = t, [m.P.MAIL_VERIFY_CODE, m.P.MOBILE].includes(i)) {
                                        const e = i === m.P.MAIL_VERIFY_CODE,
                                            n = e ? p.HG.VERIFY_BY_EMAIL : p.HG.VERIFY_BY_MOBILE,
                                            r = e ? G : H;
                                        (0, s.Nx)();
                                        const a = await r({ ...t
                                        });
                                        (0, s.jD)();
                                        const {
                                            success: c,
                                            error: l
                                        } = a || {};
                                        return c || o.A.error(l ? .message || h("systemBusy")), c && L.current.setStepForward(n, { ...t,
                                            tipsVo: (0, Z.uc)(a ? .result ? .emailCodeTipsVo),
                                            showTips: !0
                                        }), a
                                    }
                                    if (i === m.P.MAIL_PASSWORD) return L.current.setStepForward(p.HG.VERIFY_BY_PASSWORD, t), {
                                        success: !0
                                    };
                                    if (i in C.$g) {
                                        const e = await x(t, n),
                                            {
                                                success: i,
                                                result: r
                                            } = e || {};
                                        return i && 0 === r ? .status && L.current.setStepForward(p.HG.VERIFY_SUCCESS, r), e
                                    }
                                },
                                questionJump: () => (B.current = V ? .find((e => e ? .type === m.P.CHALLENGE_QUESTION)), U()),
                                verifyQuestion: async e => {
                                    let {
                                        isSuccess: t,
                                        verify_auth_token: n
                                    } = e;
                                    const i = await Y({
                                            isSuccess: t,
                                            verify_auth_token: n
                                        }),
                                        {
                                            success: r,
                                            result: s
                                        } = i || {};
                                    return r && L.current.setStepForward(p.HG.VERIFY_SUCCESS, s), i
                                }
                            },
                            metricsInfo: p.mS,
                            data: V,
                            showBack: !!d,
                            Comp: O.A
                        },
                        [p.HG.VERIFY_BY_EMAIL]: {
                            handlers: {
                                onSubmit: ue,
                                onReSend: G,
                                onMoreVerifyClick: _e
                            },
                            metricsInfo: {
                                resendSn: p.mS.MAIL_VERIFY_CODE_RESEND,
                                inputBtn: p.mS.MAIL_VERIFY_CODE_INPUT
                            },
                            unfoldTips: !0,
                            verifyCodeType: w.$.EMAIL,
                            i18Key: "verifyCode.email",
                            Comp: D.A
                        },
                        [p.HG.VERIFY_BY_MOBILE]: {
                            handlers: {
                                onSubmit: ue,
                                onReSend: H,
                                onMoreVerifyClick: _e
                            },
                            unfoldTips: !0,
                            i18Key: "verifyCode.mobile",
                            Comp: D.A
                        },
                        [p.HG.VERIFY_BY_PASSWORD]: {
                            handlers: {
                                onSubmit: async e => {
                                    const t = await q(e),
                                        {
                                            success: n,
                                            result: i
                                        } = t || {};
                                    return n && L.current.setStepForward(p.HG.VERIFY_SUCCESS, i), t
                                }
                            },
                            metricsInfo: {
                                submitBtn: p.mS.MAIL_PASSWORD,
                                inputBtn: p.mS.MAIL_PASSWORD_INPUT
                            },
                            i18Key: "passwordInput",
                            Comp: P.A
                        },
                        [p.HG.VERIFY_SUCCESS]: {
                            handlers: {
                                onSubmit: async e => {
                                    const {
                                        nextViewType: t,
                                        deleteAccountApplied: n,
                                        deleteAccountAppliedText: r
                                    } = e || {};
                                    L.current.setGlobal({
                                        verifiedAccountInfo: e
                                    });
                                    const {
                                        type: s,
                                        id: a
                                    } = B.current || {}, o = {
                                        [s === m.P.MOBILE ? "mobile_id" : "email_id"]: a
                                    };
                                    if (t !== p.r5.LOGIN) {
                                        if (n) {
                                            const e = await
                                            function() {
                                                let {
                                                    text: e = "",
                                                    confirmText: t = "",
                                                    cancelText: n = ""
                                                } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                                return new Promise((r => {
                                                    const s = (0, A.A)(i.createElement(S.A, {
                                                        onClose: () => {
                                                            s(), r(!1)
                                                        }
                                                    }, i.createElement("div", {
                                                        className: v().wrap
                                                    }, i.createElement("div", {
                                                        className: v().title
                                                    }, e), i.createElement(b.A, {
                                                        className: y()(v().btn, v().save),
                                                        onClick: () => {
                                                            s(), r(!0)
                                                        }
                                                    }, t), i.createElement(b.A, {
                                                        className: y()(v().btn, v().cancel),
                                                        type: N.el.border,
                                                        onClick: () => {
                                                            s(), r(!1)
                                                        }
                                                    }, n))))
                                                }))
                                            }({
                                                text: r,
                                                confirmText: ce,
                                                cancelText: oe
                                            });
                                            if (!e) return
                                        }
                                        t !== p.r5.MOBILE_BIND ? (t === p.r5.MOBILE_CHANGE_BIND && L.current.setStepForward(p.HG.PHONE_INPUT_CHANGE), t === p.r5.MAIL_BIND && L.current.setStepForward(p.HG.EMAIL_INPUT_ADD), t === p.r5.MAIL_CHANGE_BIND && L.current.setStepForward(p.HG.EMAIL_INPUT_CHANGE)) : L.current.setStepForward(p.HG.PHONE_INPUT_ADD)
                                    } else le(o)
                                },
                                onGoShoppingBtnClick: async e => {
                                    const {
                                        appCode: t,
                                        emailId: n,
                                        mobileId: i
                                    } = e || {}, {
                                        type: r
                                    } = B.current || {};
                                    if (r === m.P.CHALLENGE_QUESTION) await (async e => {
                                        const {
                                            mobileId: t,
                                            emailId: n,
                                            appCode: i,
                                            email: r,
                                            displayMobile: s
                                        } = e || {}, a = i === m.P.MOBILE, c = a ? re : se, l = {
                                            mobile_id: t,
                                            email_id: n
                                        }, u = await c(l), {
                                            error: d,
                                            result: _
                                        } = u || {};
                                        return d ? .message ? o.A.error(d ? .message || h("systemBusy")) : (L.current.setStepForward(p.HG.VERIFY_LOGIN, {
                                            emailDes: r,
                                            displayMobile: s,
                                            email_id: n,
                                            mobile_id: t,
                                            app_code: i,
                                            verifyCodeType: a ? w.$.MOBILE : w.$.EMAIL
                                        }), { ..._ || {}
                                        })
                                    })(e);
                                    else {
                                        const e = {
                                            login_app_id: u.s[t.toLocaleLowerCase()],
                                            email_id: n,
                                            mobile_id: i
                                        };
                                        await le(e)
                                    }
                                }
                            },
                            metricsInfo: {
                                directLoginSn: p.CI.DIRECT_LOGIN
                            },
                            showBack: !1,
                            i18Key: "verifySuccess",
                            Comp: K
                        },
                        [p.HG.PHONE_INPUT_CHANGE]: {
                            handlers: {
                                onSubmit: de
                            },
                            showBack: !1,
                            i18Key: "phoneInput.modify",
                            Comp: $.A
                        },
                        [p.HG.VERIFY_MOBILE_CODE]: {
                            handlers: {
                                onSubmit: async e => {
                                    const t = await j(e),
                                        {
                                            success: n
                                        } = t || {};
                                    return n && L.current.setStepForward(p.HG.BIND_SUCCESS_PANEL, e), t
                                },
                                onReSend: de
                            },
                            i18Key: "verifyCode.mobile",
                            Comp: D.A
                        },
                        [p.HG.EMAIL_INPUT_CHANGE]: {
                            handlers: {
                                onSubmit: async e => {
                                    const t = await J(e),
                                        {
                                            success: n
                                        } = t || {};
                                    return n && L.current.setStepForward(p.HG.VERIFY_EMAIL_CODE, e), t
                                }
                            },
                            showBack: !1,
                            i18Key: "emailInput.modify",
                            Comp: Q.A
                        },
                        [p.HG.VERIFY_EMAIL_CODE]: {
                            handlers: {
                                onSubmit: async e => {
                                    const t = await X(e),
                                        {
                                            success: n
                                        } = t || {};
                                    return n && L.current.setStepForward(p.HG.BIND_SUCCESS_PANEL, e), t
                                },
                                onReSend: J
                            },
                            i18Key: "verifyCode.email",
                            Comp: D.A
                        },
                        [p.HG.BIND_SUCCESS_PANEL]: {
                            showBack: !1,
                            handlers: {
                                onSubmit: async e => {
                                    const {
                                        email: t,
                                        mobile: n,
                                        tel_code: i,
                                        tel_location_id: r
                                    } = e || {};
                                    await le({
                                        email: t,
                                        mobile: n,
                                        tel_code: i,
                                        tel_location_id: r
                                    })
                                }
                            },
                            i18Key: "bindSuccess",
                            Comp: z
                        },
                        [p.HG.EMAIL_INPUT_ADD]: {
                            handlers: {
                                onSubmit: me
                            },
                            showBack: !1,
                            i18Key: "emailInput.add",
                            Comp: Q.A
                        },
                        [p.HG.VERIFY_EMAIL_ADD_CODE]: {
                            handlers: {
                                onSubmit: async e => {
                                    const t = await ee(e),
                                        {
                                            success: n
                                        } = t || {};
                                    return n && L.current.setStepForward(p.HG.BIND_SUCCESS_PANEL, e), t
                                },
                                onReSend: me
                            },
                            i18Key: "verifyCode.email",
                            Comp: D.A
                        },
                        [p.HG.PHONE_INPUT_ADD]: {
                            handlers: {
                                onSubmit: pe
                            },
                            showBack: !1,
                            i18Key: "phoneInput.add",
                            Comp: $.A
                        },
                        [p.HG.VERIFY_MOBILE_ADD_CODE]: {
                            handlers: {
                                onSubmit: async e => {
                                    const t = await ie(e),
                                        {
                                            success: n
                                        } = t || {};
                                    return n && L.current.setStepForward(p.HG.BIND_SUCCESS_PANEL, e), t
                                },
                                onReSend: pe
                            },
                            i18Key: "verifyCode.mobile",
                            Comp: D.A
                        },
                        [p.HG.VERIFY_LOGIN]: {
                            handlers: {
                                onSubmit: async e => {
                                    const {
                                        mobile_id: t,
                                        email_id: n,
                                        code: i,
                                        app_code: r
                                    } = e || {}, a = r === m.P.MOBILE, o = u.s[r.toLocaleLowerCase()], l = a ? m.P.MOBILE : m.P.MAIL_VERIFY_CODE;
                                    (0, s.Nx)();
                                    const d = await ae({
                                        type: l,
                                        login_app_id: o,
                                        email_id: n,
                                        mobile_id: t,
                                        code: i
                                    });
                                    (0, s.jD)();
                                    const {
                                        success: p
                                    } = d || {};
                                    if (!p) return d;
                                    return !await le({
                                        login_app_id: u.s[r.toLocaleLowerCase()],
                                        email_id: n,
                                        mobile_id: t
                                    }) && c ? .(), {
                                        success: !0,
                                        shouldNotSetStep: !0
                                    }
                                },
                                onReSend: async e => {
                                    const {
                                        app_code: t
                                    } = e || {};
                                    return (t === m.P.MOBILE ? re : se)(e)
                                }
                            },
                            Comp: D.A
                        }
                    },
                    ref: L,
                    withDialog: _
                })
            };
            var te = e => {
                let {
                    prepareInfo: t,
                    onSuccess: n,
                    onClose: r,
                    popupProps: s,
                    onBack: a,
                    withDialog: o
                } = e;
                const {
                    verifyParams: c,
                    accountInfo: l,
                    verifyList: u,
                    phoneCodeVo: d,
                    initStep: m,
                    nextViewType: p
                } = t || {};
                return i.createElement(I, {
                    verifyParams: c,
                    accountInfo: l,
                    verifyList: u
                }, i.createElement(ee, {
                    onSuccess: n,
                    onClose: r,
                    phoneCodeVo: d,
                    popupProps: s,
                    onBack: a,
                    withDialog: o,
                    initStep: m,
                    nextViewType: p
                }))
            }
        },
        96025: function(e, t, n) {
            "use strict";
            n.d(t, {
                $: function() {
                    return c
                }
            });
            var i = n(76699),
                r = n(55920),
                s = n(1762),
                a = n(16638);
            const o = {
                    [a.E5.MAIL]: s.s.mail,
                    [a.E5.MOBILE]: s.s.mobile,
                    [a.E5.ORDER]: s.s.mail
                },
                c = async e => {
                    let {
                        login_scene: t,
                        login_source: n,
                        query_type: s,
                        accountInfo: c,
                        ticket: l,
                        verify_step: u,
                        next_view_type: d
                    } = e;
                    if (u) return {
                        success: !0,
                        verifyParams: {
                            ticket: l,
                            query_type: s,
                            login_app_id: o[s],
                            login_source: n,
                            login_scene: t
                        },
                        initStep: u,
                        nextViewType: d
                    };
                    const {
                        suin: m
                    } = c || {}, p = r.WI({
                        process_type: a.x9.ACCOUNT_RECOVER,
                        suin: m,
                        query_type: s,
                        login_scene: t,
                        login_source: n
                    }), _ = r.U$(), [E, f] = await Promise.all([p, _]), I = f ? .result || a.I4, g = I ? .filter ? .((e => e.is_default_region)) ? .[0] || I[0], {
                        phoneCode: C,
                        regionId: h,
                        regionShortName: y
                    } = g || {}, {
                        success: A,
                        result: S,
                        error: b
                    } = E || {}, {
                        loginInfoList: N,
                        ticket: L
                    } = S || {};
                    return (0, i.Nq)({
                        event: a.ll,
                        subEvent: "prepareVerifyInfo",
                        tags: {
                            success: !!A
                        }
                    }), A ? {
                        success: !0,
                        verifyParams: {
                            login_scene: t,
                            login_source: n,
                            ticket: L,
                            query_type: s,
                            login_app_id: o[s]
                        },
                        accountInfo: c,
                        verifyList: N,
                        phoneCodeVo: {
                            phoneCode: C,
                            regionId: h,
                            regionShortName: y
                        }
                    } : {
                        success: !1,
                        error: b
                    }
                }
        },
        55920: function(e, t, n) {
            "use strict";
            n.d(t, {
                U$: function() {
                    return b
                },
                Fk: function() {
                    return D
                },
                HS: function() {
                    return P
                },
                WI: function() {
                    return S
                },
                uk: function() {
                    return H
                },
                B7: function() {
                    return G
                },
                Rr: function() {
                    return R
                },
                jJ: function() {
                    return F
                },
                es: function() {
                    return w
                },
                Id: function() {
                    return M
                },
                sm: function() {
                    return N
                },
                ez: function() {
                    return L
                },
                P0: function() {
                    return v
                },
                A3: function() {
                    return k
                },
                k1: function() {
                    return V
                },
                N_: function() {
                    return O
                },
                vg: function() {
                    return T
                },
                fS: function() {
                    return x
                },
                An: function() {
                    return B
                }
            });
            var i = n(82045);
            const r = "/api/bg/sigerus/account/lifecycle/login_info_list/query",
                s = "/api/bg/sigerus/account/lifecycle/mobile_code/request",
                a = "/api/bg/sigerus/account/lifecycle/email_code/request",
                o = "/api/bg/sigerus/account/lifecycle/pub_key/request",
                c = "/api/bg/sigerus/account/lifecycle/security_questions/jump",
                l = "/api/bg/sigerus/account/lifecycle/security_questions/verify",
                u = "/api/bg/sigerus/account/lifecycle/identity/verify",
                d = "/api/bg/sigerus/account/lifecycle/security/mobile_code/request",
                m = "/api/bg/sigerus/account/lifecycle/security/email_code/request",
                p = "/api/bg/sigerus/account/lifecycle/security/identity/verify",
                _ = "/api/bg/sigerus/account/lifecycle/mobile_bind/code/request",
                E = "/api/bg/sigerus/account/lifecycle/mobile_bind/code/verify",
                f = "/api/bg/sigerus/account/lifecycle/new_mobile_code/request",
                I = "/api/bg/sigerus/account/lifecycle/new_mobile_code/verify",
                g = "/api/bg/sigerus/account/lifecycle/email_bind/code/request",
                C = "/api/bg/sigerus/account/lifecycle/email_bind/code/verify",
                h = "/api/bg/sigerus/account/lifecycle/email_change_bind/new_email_code/request",
                y = "/api/bg/sigerus/account/lifecycle/email_change_bind/new_email/bind",
                A = {
                    useResponseCamel: !0
                },
                S = e => (0, i.SA)({
                    url: r,
                    params: e
                }, A),
                b = () => (0, i.bE)({
                    url: "/api/bg/huygens/region/phoneCodes",
                    params: {},
                    config: A
                }),
                N = e => (0, i.SA)({
                    url: a,
                    params: e
                }, A),
                L = e => (0, i.SA)({
                    url: s,
                    params: e
                }, A),
                v = e => (0, i.SA)({
                    url: u,
                    params: e
                }, { ...A,
                    useSigerusEncrypt: !0
                }),
                w = e => (0, i.SA)({
                    url: h,
                    params: e
                }, { ...A,
                    useSigerusEncrypt: !0
                }),
                O = e => (0, i.SA)({
                    url: y,
                    params: e
                }, { ...A,
                    useSigerusEncrypt: !0
                }),
                D = e => (0, i.SA)({
                    url: o,
                    params: e
                }, A),
                P = e => (0, i.SA)({
                    url: c,
                    params: e
                }, { ...A,
                    useSigerusEncrypt: !0
                }),
                B = e => (0, i.SA)({
                    url: l,
                    params: e
                }, A),
                R = e => (0, i.SA)({
                    url: g,
                    params: e
                }, { ...A,
                    useSigerusEncrypt: !0
                }),
                k = e => (0, i.SA)({
                    url: C,
                    params: e
                }, { ...A,
                    useSigerusEncrypt: !0
                }),
                M = e => (0, i.SA)({
                    url: f,
                    params: e
                }, { ...A,
                    useSigerusEncrypt: !0
                }),
                T = e => (0, i.SA)({
                    url: I,
                    params: e
                }, A),
                F = e => (0, i.SA)({
                    url: _,
                    params: e
                }, { ...A,
                    useSigerusEncrypt: !0
                }),
                V = e => (0, i.SA)({
                    url: E,
                    params: e
                }, { ...A,
                    useSigerusEncrypt: !0
                }),
                G = e => (0, i.SA)({
                    url: d,
                    params: e
                }),
                H = e => (0, i.SA)({
                    url: m,
                    params: e
                }),
                x = e => (0, i.SA)({
                    url: p,
                    params: e
                })
        },
        68207: function(e, t, n) {
            "use strict";
            var i = n(14242),
                r = n(33514),
                s = n(97582),
                a = n(69222),
                o = n(32167),
                c = n(76371),
                l = n(20614),
                u = n.n(l);
            t.A = e => {
                let {
                    btnText: t,
                    onSubmit: n,
                    value: l,
                    inputBottomNode: d = "",
                    ...m
                } = e;
                const {
                    t: p
                } = (0, s.B)("bec-fe.account-dialog-pc"), {
                    empty: _
                } = p("phoneInput"), [E, f] = (0, r.useState)(""), I = (0, r.useRef)(), g = async e => {
                    e.preventDefault(), e.stopPropagation();
                    const {
                        mobile: t,
                        phoneCodeVo: i
                    } = I.current || {};
                    if (!t ? .length) return void f(_);
                    const {
                        phoneCode: r,
                        regionId: s
                    } = i || {}, a = await n({
                        mobile: t,
                        tel_location_id: s,
                        tel_code: r
                    }), {
                        success: o,
                        error: c
                    } = a || {};
                    o || f(c ? .message)
                };
                return r.createElement(r.Fragment, null, r.createElement("form", {
                    className: u().form,
                    onSubmit: g
                }, r.createElement(a.A, (0, i.A)({}, m, {
                    value: l,
                    onChange: e => {
                        I.current = e, f("")
                    }
                })), E && r.createElement(c.A, {
                    tip: E,
                    className: u().tip
                }), d), r.createElement(o.A, {
                    onClick: g,
                    className: u().btn
                }, t))
            }
        },
        42133: function(e, t, n) {
            "use strict";
            n.d(t, {
                P: function() {
                    return i
                }
            });
            const i = {
                MAIL: "MAIL",
                MOBILE: "MOBILE",
                FACEBOOK: "FACEBOOK",
                GOOGLE: "GOOGLE",
                TWITTER: "TWITTER",
                APPLE: "APPLE",
                LINE: "LINE",
                KAKAO: "KAKAO",
                CHALLENGE_QUESTION: "CHALLENGE_QUESTION",
                MAIL_PASSWORD: "MAIL_PASSWORD",
                MAIL_VERIFY_CODE: "MAIL_VERIFY_CODE",
                MOBILE_CHALLENGE_QUESTIONS: "MOBILE_CHALLENGE_QUESTIONS",
                TWO_FACTOR_AUTH: "TWO_FACTOR_AUTH"
            }
        },
        40639: function(e, t, n) {
            "use strict";
            var i = n(14242),
                r = n(33514),
                s = n(97582),
                a = n(67388);
            const o = r.forwardRef(((e, t) => {
                const {
                    t: n,
                    i18n: o
                } = (0, s.B)("bec-fe.svg-icons-pc");
                return r.createElement(a.i, (0, i.A)({
                    ref: t,
                    fill: "#222222"
                }, e, {
                    path: ["M833.3 246.6c25.1-24.9 65.6-24.7 90.5 0.4 22.6 22.8 24.5 58.4 5.9 83.3l-6.3 7.2-496.3 492.2c-22.8 22.6-58.2 24.5-83.2 6l-7.2-6.2-245.5-246.1c-25-25-24.9-65.5 0.1-90.5 22.8-22.7 58.3-24.7 83.4-6.1l7.1 6.2 200.4 200.8 451.1-447.2z"],
                    "aria-label": e["aria-label"] ? ? (o.exists("aria-label.TishiZhengque", {
                        ns: "bec-fe.svg-icons-pc"
                    }) ? n("aria-label.TishiZhengque") : void 0),
                    rtlPath: []
                }))
            }));
            o.supportRtl = !1, t.A = o
        },
        78854: function(e, t, n) {
            "use strict";
            n.d(t, {
                J: function() {
                    return s
                },
                t: function() {
                    return a
                }
            });
            var i = n(20302);
            let r = null;

            function s(e) {
                if (r) return Promise.resolve(r);
                const t = {
                    url: "/api/bg/huygens/region/phoneCodes",
                    params: {},
                    config: {
                        useResponseCamel: !0
                    }
                };
                return (() => (0, i.SA)(t))().then((e => (e ? .result ? .length > 0 && (r = e), e))).catch((() => {}))
            }

            function a(e) {
                return s().then((e => {
                    return t = e ? .result ? .filter ? .((e => e.is_default_region)) ? .[0] ? ? {}, {
                        regionShortName: t ? .region_short_name,
                        regionId: t ? .region_id,
                        phoneCode: t ? .phone_code
                    };
                    var t
                }))
            }
        },
        12966: function(e, t, n) {
            "use strict";
            n(16280);
            var i = n(33514),
                r = n(32485),
                s = n.n(r),
                a = n(11572),
                o = n(34477),
                c = n(27258),
                l = n(50063),
                u = n(20657),
                d = n(40639),
                m = n(82370),
                p = n(78854),
                _ = n(94354),
                E = n.n(_);
            t.A = e => {
                const {
                    value: t,
                    onChange: n,
                    hidden: r = !1,
                    regionId: _,
                    filterPhoneCodeListFn: f,
                    wrapCls: I,
                    phoneCodeList: g
                } = e, [C, h] = (0, i.useState)(!1), [y, A] = (0, i.useState)({}), [S, b] = (0, i.useState)(!1), [N, L] = (0, i.useState)(g);
                (0, i.useEffect)((() => {
                    t ? .regionShortName || S || !y ? .regionShortName || (n ? .(y), b(!0))
                }), [S, t, n, y]);
                const v = (0, i.useCallback)((() => {
                        C || (0, c.E0)({
                            page_el_sn: 200071
                        }), h(!C)
                    }), [C]),
                    w = (0, i.useCallback)((e => {
                        (0, c.E0)({
                            page_el_sn: 200082
                        }), n(e)
                    }), [n]);
                return (0, i.useEffect)((() => {
                    if (N) return;
                    (async () => {
                        try {
                            const e = await (0, p.J)();
                            if (!e.success) return;
                            const t = e.result || [];
                            L("function" == typeof f ? f(t) : t);
                            const i = t ? .filter ? .((e => e.isDefaultRegion)) ? .[0];
                            i && (n(i), A(i))
                        } catch (e) {
                            (0, o.fL)(new Error("getPhoneCodesListError"), { ...e
                            })
                        }
                    })()
                }), []), i.createElement(l.Ay, {
                    payload: {
                        page_el_sn: 200080
                    }
                }, i.createElement("div", {
                    className: s()(E().container, I, {
                        [E().showSelecotr]: C
                    }),
                    onClick: v,
                    style: {
                        display: r ? "none" : "flex"
                    },
                    role: "button",
                    tabIndex: 0
                }, t ? .regionShortName || "", !!t ? .phoneCode && i.createElement(l.Ay, {
                    payload: {
                        page_el_sn: 200071
                    }
                }, i.createElement("span", {
                    className: E().phoneCode
                }, t ? .phoneCode || "", i.createElement(u.A, {
                    className: E().downArrow
                }))), !!C && i.createElement(i.Fragment, null, i.createElement("div", {
                    className: E().mask,
                    onClick: v,
                    "aria-hidden": !0
                }), i.createElement("div", {
                    className: E().selectorContainer
                }, i.createElement(m.Ay, {
                    "aria-hidden": !0,
                    alt: "",
                    src: "https://aimg.kwcdn.com/upload_aimg/upload_aimg/personal/272c7d20-cdfb-40a5-8955-1cbc7a526722.png.slim.png",
                    className: E().containerTriangle
                }), i.createElement("div", {
                    className: E().content
                }, !N ? .length && i.createElement(a.A, {
                    hideBg: !0,
                    className: E().loading
                }), N ? .map((e => {
                    const n = e.regionId === t ? .regionId;
                    return i.createElement("div", {
                        key: e.regionId,
                        className: s()(E().item, {
                            [E().selectWrapper]: n
                        }),
                        onClick: () => w(e),
                        role: "button",
                        tabIndex: 0
                    }, e.regionName, i.createElement("span", {
                        dir: "ltr",
                        className: E().phoneCodeItem
                    }, " ", "+", e.phoneCode), !!n && i.createElement("span", {
                        className: E().selectFlag
                    }, i.createElement(d.A, {
                        className: E().selectIcon
                    })))
                })))))))
            }
        },
        69222: function(e, t, n) {
            "use strict";
            n.d(t, {
                A: function() {
                    return b
                }
            });
            var i = n(33514),
                r = n(32485),
                s = n.n(r),
                a = n(14780),
                o = (n(25440), n(13609), n(56733)),
                c = n(36556);
            const l = [o.gq.jp, o.gq.kr],
                u = [1];

            function d(e) {
                return (e || "").toString().replace(/[^\d]*/g, "")
            }
            const m = function(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : c.H;
                if (!n) return e;
                const i = e ? .replace(/\s/g, "") || "",
                    r = n[t];
                if (!r) return i;
                const s = r.find((e => i.match(e.regex))) ? .format_rule ? .split ? .("|") ? .map((e => +e)) ? ? [];
                let a = i.match(/^(0+)/g) ? .[0] ? .length ? ? 0;
                if (l.includes(t) && 1 === a && (a = 0), a && s.unshift(a), !s.length) return i;
                let o = 0;
                return s.reduce(((e, t) => t ? (o += t, `${e.slice(0,o)} ${e.slice(o++)}`.trim()) : e), i)
            };

            function p(e, t, n) {
                let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : c.H;
                if (u.includes(+t) && n === o.gq.us) {
                    const t = e ? .replace(/\s/g, "") || "";
                    return t ? .replace(/^(\d{0,3})(\d{0,3})(\d*)$/g, ((e, t, n, i) => `(${t})${n}-${i}`.trim()))
                }
                return i ? m(e, n, i) : e
            }
            var _ = n(12966),
                E = n(14242),
                f = n(80240),
                I = n(64469),
                g = n.n(I);

            function C(e, t) {
                let n = d(e);
                return n = m(n, t, c.H), n
            }
            class h extends i.Component {
                constructor(e) {
                    super(e), this.inputRef = (0, i.createRef)(), this.inputSelection = {}, this.handleChange = () => {
                        const {
                            value: e,
                            onChange: t,
                            regionId: n
                        } = this.props, i = C(e, n), {
                            mobile: r
                        } = this, s = r.length > i.length;
                        if (this.inputRef && this.inputRef.current) {
                            const {
                                selectionStart: e,
                                selectionEnd: t
                            } = this.inputRef.current, n = " " === r.charAt(e - 1) && s ? e + 1 : e, i = " " === r.charAt(e - 1) && s ? t + 1 : t;
                            this.inputSelection = {
                                start: n,
                                end: i
                            }
                        }
                        setTimeout((() => {
                            t(d(r))
                        }), 0)
                    }, this.handleClear = () => {
                        const {
                            onChange: e
                        } = this.props;
                        this.inputDom && (this.inputDom.value = "", this.inputDom.focus()), e ? .("")
                    }, this.handleFocus = e => {
                        const {
                            onFocus: t
                        } = this.props;
                        this.setState({
                            focus: !0
                        }), t ? .(e)
                    }, this.handleBlur = e => {
                        const {
                            onBlur: t
                        } = this.props;
                        this.setState({
                            focus: !0
                        }), t ? .(e)
                    }, this.state = {
                        focus: !1
                    }
                }
                componentDidMount() {
                    const {
                        autoFocus: e
                    } = this.props;
                    e && this.inputRef.current ? .focus()
                }
                componentDidUpdate() {
                    const {
                        value: e,
                        regionId: t
                    } = this.props, n = C(e, t), {
                        inputSelection: i
                    } = this;
                    if (i && i.start < n.length) {
                        const e = this.inputRef.current || {};
                        e.selectionStart = i.start, e.selectionEnd = i.end, this.inputSelection = null
                    }
                }
                get inputDom() {
                    return this.inputRef.current || {}
                }
                get mobile() {
                    const {
                        regionId: e
                    } = this.props;
                    return C(this.inputDom.value || "", e)
                }
                render() {
                    const {
                        className: e,
                        value: t,
                        regionId: n,
                        placeholder: r,
                        inputProps: a = {}
                    } = this.props, o = this.state.focus && t ? .length > 0;
                    return i.createElement("div", {
                        className: s()(g().inputGroup, e, {
                            [g().withClear]: o
                        })
                    }, i.createElement("input", (0, E.A)({
                        ref: this.inputRef,
                        placeholder: r,
                        type: "tel",
                        value: C(t, n),
                        onChange: this.handleChange,
                        onBlur: this.handleBlur,
                        onFocus: this.handleFocus
                    }, a)), !!o && i.createElement(f.A, {
                        className: g().clearInput,
                        onMouseDown: this.handleClear,
                        onClick: this.handleClear
                    }))
                }
            }
            var y = h,
                A = n(63611),
                S = n.n(A);
            var b = e => {
                const {
                    value: t = {},
                    onChange: n,
                    autoFocus: r,
                    title: o,
                    codeSelectorCls: l,
                    numberInputCls: u,
                    validateInfo: d,
                    filterPhoneCodeListFn: m,
                    placeholder: E,
                    required: f,
                    onFocus: I,
                    onBlur: g,
                    inputProps: C = {},
                    titleClassName: h,
                    formItemClassName: A,
                    phoneCodeList: b
                } = e, [N, L] = (0, i.useState)(t), {
                    mobile: v = "",
                    phoneCodeVo: w = {}
                } = N, O = (0, i.useCallback)((e => {
                    L(e), n ? .(e)
                }), [n]);
                (0, i.useEffect)((() => {
                    (0, c.D)()
                }), []);
                const D = (0, i.useCallback)((e => {
                        const {
                            phoneCode: t,
                            regionId: n
                        } = e || {}, i = p(v, t, n, c.H);
                        O({ ...N,
                            phoneCodeVo: e,
                            displayMobile: i
                        })
                    }), [v, O, N]),
                    P = (0, i.useCallback)((e => {
                        const {
                            phoneCode: t,
                            regionId: n
                        } = N ? .phoneCodeVo || {}, i = p(e, t, n, c.H);
                        O({ ...N,
                            mobile: e,
                            displayMobile: i
                        })
                    }), [N, O]);
                return i.createElement(a.A, {
                    title: o,
                    validateInfo: d,
                    required: f,
                    formItemClassName: A,
                    titleClassName: h
                }, i.createElement("div", {
                    className: S().inputGroup,
                    dir: "ltr"
                }, i.createElement(_.A, {
                    onChange: D,
                    value: w,
                    wrapCls: l,
                    regionId: w ? .regionId,
                    filterPhoneCodeListFn: m,
                    phoneCodeList: b
                }), i.createElement(y, {
                    regionId: w ? .regionId,
                    autoFocus: r,
                    className: s()(S().inputBox, u),
                    placeholder: E,
                    value: v,
                    onChange: P,
                    onFocus: I,
                    onBlur: g,
                    inputProps: C
                })))
            }
        }
    }
]);
//# sourceMappingURL=http://temudebug.com/sourcemaps/assets/modernjs/1339_b56b7f80a852633e5288.js.map