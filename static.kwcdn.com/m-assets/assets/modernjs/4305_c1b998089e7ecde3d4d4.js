(self.webpackChunkmobile_bg_web_personal = self.webpackChunkmobile_bg_web_personal || []).push([
    [4305], {
        28286: function(e) {
            e.exports = {
                popup: "popup-110I2",
                container: "container-iPOk0"
            }
        },
        20614: function(e) {
            e.exports = {
                form: "form-34yDo",
                btn: "btn-Lsawa",
                tip: "tip-1N4F2"
            }
        },
        10422: function(e) {
            e.exports = {
                container: "container-3DS2W",
                btn: "btn-3tuLp",
                highLight: "highLight-2yDeO"
            }
        },
        39758: function(e) {
            e.exports = {
                codeInputWrap: "codeInputWrap-3U33l",
                codeInput: "codeInput-3U8Qy",
                errorMsgWrap: "errorMsgWrap-1HGyv",
                tipWrap: "tipWrap-36dvB",
                highLight: "highLight-Lhrnv",
                tips: "tips-1x6A2"
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
        92069: function(e) {
            e.exports = {
                prefixClsRtl: "prefixClsRtl-2xXsv",
                head: "head-320IN",
                prefixClsSeparator: "prefixClsSeparator-1pb_9",
                arrow: "arrow-1YIW9",
                h1: "h1-2kzzJ",
                prefixClsLink: "prefixClsLink-2Knkn"
            }
        },
        60421: function(e, t, n) {
            "use strict";
            var o = n(33514),
                a = n(14511),
                r = n(4218);
            t.A = (0, a.Xc)((e => {
                let {
                    globalData: t,
                    stepVo: n
                } = e;
                const {
                    stepData: a,
                    handlers: s
                } = n || {}, {
                    data: c
                } = a || {}, {
                    onCancel: l,
                    onConfirm: i
                } = s || {};
                return o.createElement(r.A, {
                    onCancel: l,
                    onConfirm: i,
                    data: c
                })
            }))
        },
        79401: function(e, t, n) {
            "use strict";
            n.d(t, {
                A: function() {
                    return m
                }
            });
            var o = n(33514),
                a = n(14242),
                r = n(97582),
                s = n(10941),
                c = n(32167),
                l = n(76371),
                i = n(20614),
                u = n.n(i);
            var p = e => {
                    let {
                        btnText: t,
                        onSubmit: n,
                        ...i
                    } = e;
                    const {
                        t: p
                    } = (0, r.B)("bec-fe.account-dialog-pc"), {
                        empty: d,
                        unvalid: m
                    } = p("emailInput", {
                        returnObjects: !0
                    }), [h, f] = (0, o.useState)(""), b = (0, o.useRef)(""), C = async e => {
                        e.preventDefault(), e.stopPropagation();
                        const t = b.current || "";
                        if (!t.length) return void f(d);
                        const o = await n({
                                email: t
                            }),
                            {
                                success: a,
                                error: r
                            } = o || {};
                        a || f(r ? .message)
                    };
                    return o.createElement(o.Fragment, null, o.createElement("form", {
                        className: u().form,
                        onSubmit: C
                    }, o.createElement(s.A, (0, a.A)({}, i, {
                        onChange: e => {
                            b.current = e, f("")
                        }
                    })), h && o.createElement(l.A, {
                        tip: h,
                        className: u().tip
                    })), o.createElement(c.A, {
                        onClick: C,
                        className: u().btn
                    }, t))
                },
                d = n(69878);
            var m = e => {
                let {
                    globalData: t,
                    stepVo: n
                } = e;
                const {
                    t: a
                } = t || {}, {
                    i18Key: r,
                    handlers: s,
                    title: c,
                    text: l,
                    btnText: i,
                    contentAfterBtn: u
                } = n || {}, m = a(r, {
                    returnObjects: !0
                }), {
                    onSubmit: h
                } = s || {}, {
                    title: f,
                    desc: b,
                    inputLabel: C,
                    btnText: g,
                    placeholder: _
                } = m || {};
                return o.createElement(o.Fragment, null, o.createElement(d.A, {
                    title: c || f
                }, l || b), o.createElement(p, {
                    title: C,
                    btnText: i || g,
                    onSubmit: h,
                    autoFocus: !0,
                    placeholder: _
                }), u)
            }
        },
        42182: function(e, t, n) {
            "use strict";
            n.d(t, {
                NM: function() {
                    return l
                },
                mz: function() {
                    return c
                },
                U$: function() {
                    return i
                }
            });
            const o = "/api/bg/elmar/channel/query/all",
                a = "/api/bg/sigerus/mobile_rule/check",
                r = "/api/bg/huygens/region/phoneCodes";
            var s = n(82045);
            const c = () => (0, s.SA)({
                    url: o,
                    params: {
                        page_source: 6
                    }
                }),
                l = e => (0, s.SA)({
                    url: a,
                    params: e
                }, {
                    useSigerusEncrypt: !0
                }),
                i = () => (0, s.bE)({
                    url: r,
                    params: {}
                })
        },
        34805: function(e, t, n) {
            "use strict";
            n.d(t, {
                A: function() {
                    return E
                }
            });
            var o = n(33514);
            const a = "/api/bg/sigerus/account/email_bind/code/request",
                r = "/api/bg/sigerus/account/email_bind/code/verify",
                s = "/api/bg/sigerus/account/email_bind/email_back_bind";
            var c = n(82045);
            var l = n(1762),
                i = n(52523);
            const u = (0, o.createContext)({}),
                p = e => {
                    let {
                        children: t,
                        onClose: n,
                        onSuccess: p,
                        onBack: d,
                        prepareInfo: m
                    } = e;
                    const {
                        scene: h,
                        email: f,
                        extParams: b,
                        successToast: C,
                        emailInputProps: g,
                        supportEmailBack: _
                    } = m || {}, E = f ? i.HG.VERIFY_EMAIL_ADD_CODE : i.HG.EMAIL_INPUT_ADD, A = {
                        handler: {
                            requestMailCode: e => {
                                const {
                                    resend: t = !1,
                                    email: n
                                } = e || {};
                                return (e => (0, c.SA)({
                                    url: a,
                                    params: e
                                }, {
                                    useSigerusEncrypt: !0
                                }))({
                                    email: n || f,
                                    resend: t,
                                    bind_app_id: l.s.mail,
                                    scene: h,
                                    support_email_back: _
                                })
                            },
                            verifyMailCode: e => {
                                const {
                                    code: t,
                                    email: n
                                } = e || {};
                                return (e => (0, c.SA)({
                                    url: r,
                                    params: e
                                }, {
                                    useSigerusEncrypt: !0
                                }))({
                                    bind_app_id: l.s.mail,
                                    code: t,
                                    email: n || f,
                                    scene: h,
                                    ...b || {},
                                    support_email_back: _
                                })
                            },
                            mailBackBind: e => {
                                const {
                                    back_and_bind_ticket: t
                                } = e || {};
                                return (e => (0, c.SA)({
                                    url: s,
                                    params: e
                                }))({
                                    back_and_bind_ticket: t
                                })
                            },
                            onSuccess: p,
                            onClose: n,
                            onBack: d
                        },
                        data: {
                            email: f,
                            initStep: E,
                            successToast: C,
                            emailInputProps: g
                        }
                    };
                    return o.createElement(u.Provider, {
                        value: A
                    }, t)
                };
            var d = n(97582),
                m = n(20162),
                h = n(7173),
                f = n(79401),
                b = n(4341),
                C = n(60421),
                g = n(76699);
            var _ = () => {
                const {
                    data: e,
                    handler: t
                } = (0, o.useContext)(u), n = (0, o.useRef)(), [a] = (0, d.B)("bec-fe.account-dialog-pc"), r = a("successTip", {
                    returnObjects: !0
                }), {
                    initStep: s,
                    email: c,
                    successToast: l,
                    emailInputProps: p
                } = e || {}, {
                    requestMailCode: _,
                    verifyMailCode: E,
                    mailBackBind: A,
                    onSuccess: v,
                    onClose: S
                } = t || {};
                return o.createElement(h.Ay, {
                    initStep: s,
                    onClose: S,
                    stepsDetailMap: {
                        [i.HG.EMAIL_INPUT_ADD]: {
                            Comp: f.A,
                            handlers: {
                                onSubmit: async e => {
                                    const t = await _(e),
                                        {
                                            success: o
                                        } = t || {};
                                    return o && n.current ? .setStepForward(i.HG.VERIFY_EMAIL_ADD_CODE, e), t
                                }
                            },
                            i18Key: "emailInput.add",
                            ...p || {}
                        },
                        [i.HG.VERIFY_EMAIL_ADD_CODE]: {
                            Comp: b.A,
                            handlers: {
                                onSubmit: async e => {
                                    const t = await E(e),
                                        {
                                            success: o,
                                            result: a
                                        } = t || {},
                                        {
                                            status: s,
                                            ...c
                                        } = a || {};
                                    return s === i.vV.BEEN_BANDED ? n.current ? .setStepForward(i.HG.ACCOUNT_OCCUPIED, {
                                        data: c
                                    }) : (o && l && m.A.success(r ? .emailAdd), o && v(), t)
                                },
                                onReSend: _
                            },
                            data: {
                                email: c
                            },
                            i18Key: "verifyCode.email"
                        },
                        [i.HG.ACCOUNT_OCCUPIED]: {
                            Comp: C.A,
                            handlers: {
                                onConfirm: async e => {
                                    const t = await A(e),
                                        {
                                            success: n
                                        } = t || {};
                                    return n && ((0, g.Nq)({
                                        event: "back_bind_mail_add_success"
                                    }), l && m.A.success(r ? .emailAdd), v()), t
                                },
                                onCancel: S
                            }
                        }
                    },
                    ref: n
                })
            };
            var E = e => {
                let {
                    prepareInfo: t,
                    onSuccess: n,
                    onClose: a
                } = e;
                return o.createElement(p, {
                    prepareInfo: t,
                    onSuccess: n,
                    onClose: a
                }, o.createElement(_, null))
            }
        },
        68207: function(e, t, n) {
            "use strict";
            var o = n(14242),
                a = n(33514),
                r = n(97582),
                s = n(69222),
                c = n(32167),
                l = n(76371),
                i = n(20614),
                u = n.n(i);
            t.A = e => {
                let {
                    btnText: t,
                    onSubmit: n,
                    value: i,
                    inputBottomNode: p = "",
                    ...d
                } = e;
                const {
                    t: m
                } = (0, r.B)("bec-fe.account-dialog-pc"), {
                    empty: h
                } = m("phoneInput"), [f, b] = (0, a.useState)(""), C = (0, a.useRef)(), g = async e => {
                    e.preventDefault(), e.stopPropagation();
                    const {
                        mobile: t,
                        phoneCodeVo: o
                    } = C.current || {};
                    if (!t ? .length) return void b(h);
                    const {
                        phoneCode: a,
                        regionId: r
                    } = o || {}, s = await n({
                        mobile: t,
                        tel_location_id: r,
                        tel_code: a
                    }), {
                        success: c,
                        error: l
                    } = s || {};
                    c || b(l ? .message)
                };
                return a.createElement(a.Fragment, null, a.createElement("form", {
                    className: u().form,
                    onSubmit: g
                }, a.createElement(s.A, (0, o.A)({}, d, {
                    value: i,
                    onChange: e => {
                        C.current = e, b("")
                    }
                })), f && a.createElement(l.A, {
                    tip: f,
                    className: u().tip
                }), p), a.createElement(c.A, {
                    onClick: g,
                    className: u().btn
                }, t))
            }
        },
        40639: function(e, t, n) {
            "use strict";
            var o = n(14242),
                a = n(33514),
                r = n(97582),
                s = n(67388);
            const c = a.forwardRef(((e, t) => {
                const {
                    t: n,
                    i18n: c
                } = (0, r.B)("bec-fe.svg-icons-pc");
                return a.createElement(s.i, (0, o.A)({
                    ref: t,
                    fill: "#222222"
                }, e, {
                    path: ["M833.3 246.6c25.1-24.9 65.6-24.7 90.5 0.4 22.6 22.8 24.5 58.4 5.9 83.3l-6.3 7.2-496.3 492.2c-22.8 22.6-58.2 24.5-83.2 6l-7.2-6.2-245.5-246.1c-25-25-24.9-65.5 0.1-90.5 22.8-22.7 58.3-24.7 83.4-6.1l7.1 6.2 200.4 200.8 451.1-447.2z"],
                    "aria-label": e["aria-label"] ? ? (c.exists("aria-label.TishiZhengque", {
                        ns: "bec-fe.svg-icons-pc"
                    }) ? n("aria-label.TishiZhengque") : void 0),
                    rtlPath: []
                }))
            }));
            c.supportRtl = !1, t.A = c
        },
        78854: function(e, t, n) {
            "use strict";
            n.d(t, {
                J: function() {
                    return r
                },
                t: function() {
                    return s
                }
            });
            var o = n(20302);
            let a = null;

            function r(e) {
                if (a) return Promise.resolve(a);
                const t = {
                    url: "/api/bg/huygens/region/phoneCodes",
                    params: {},
                    config: {
                        useResponseCamel: !0
                    }
                };
                return (() => (0, o.SA)(t))().then((e => (e ? .result ? .length > 0 && (a = e), e))).catch((() => {}))
            }

            function s(e) {
                return r().then((e => {
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
            var o = n(33514),
                a = n(32485),
                r = n.n(a),
                s = n(11572),
                c = n(34477),
                l = n(27258),
                i = n(50063),
                u = n(20657),
                p = n(40639),
                d = n(82370),
                m = n(78854),
                h = n(94354),
                f = n.n(h);
            t.A = e => {
                const {
                    value: t,
                    onChange: n,
                    hidden: a = !1,
                    regionId: h,
                    filterPhoneCodeListFn: b,
                    wrapCls: C,
                    phoneCodeList: g
                } = e, [_, E] = (0, o.useState)(!1), [A, v] = (0, o.useState)({}), [S, y] = (0, o.useState)(!1), [I, k] = (0, o.useState)(g);
                (0, o.useEffect)((() => {
                    t ? .regionShortName || S || !A ? .regionShortName || (n ? .(A), y(!0))
                }), [S, t, n, A]);
                const N = (0, o.useCallback)((() => {
                        _ || (0, l.E0)({
                            page_el_sn: 200071
                        }), E(!_)
                    }), [_]),
                    D = (0, o.useCallback)((e => {
                        (0, l.E0)({
                            page_el_sn: 200082
                        }), n(e)
                    }), [n]);
                return (0, o.useEffect)((() => {
                    if (I) return;
                    (async () => {
                        try {
                            const e = await (0, m.J)();
                            if (!e.success) return;
                            const t = e.result || [];
                            k("function" == typeof b ? b(t) : t);
                            const o = t ? .filter ? .((e => e.isDefaultRegion)) ? .[0];
                            o && (n(o), v(o))
                        } catch (e) {
                            (0, c.fL)(new Error("getPhoneCodesListError"), { ...e
                            })
                        }
                    })()
                }), []), o.createElement(i.Ay, {
                    payload: {
                        page_el_sn: 200080
                    }
                }, o.createElement("div", {
                    className: r()(f().container, C, {
                        [f().showSelecotr]: _
                    }),
                    onClick: N,
                    style: {
                        display: a ? "none" : "flex"
                    },
                    role: "button",
                    tabIndex: 0
                }, t ? .regionShortName || "", !!t ? .phoneCode && o.createElement(i.Ay, {
                    payload: {
                        page_el_sn: 200071
                    }
                }, o.createElement("span", {
                    className: f().phoneCode
                }, t ? .phoneCode || "", o.createElement(u.A, {
                    className: f().downArrow
                }))), !!_ && o.createElement(o.Fragment, null, o.createElement("div", {
                    className: f().mask,
                    onClick: N,
                    "aria-hidden": !0
                }), o.createElement("div", {
                    className: f().selectorContainer
                }, o.createElement(d.Ay, {
                    "aria-hidden": !0,
                    alt: "",
                    src: "https://aimg.kwcdn.com/upload_aimg/upload_aimg/personal/272c7d20-cdfb-40a5-8955-1cbc7a526722.png.slim.png",
                    className: f().containerTriangle
                }), o.createElement("div", {
                    className: f().content
                }, !I ? .length && o.createElement(s.A, {
                    hideBg: !0,
                    className: f().loading
                }), I ? .map((e => {
                    const n = e.regionId === t ? .regionId;
                    return o.createElement("div", {
                        key: e.regionId,
                        className: r()(f().item, {
                            [f().selectWrapper]: n
                        }),
                        onClick: () => D(e),
                        role: "button",
                        tabIndex: 0
                    }, e.regionName, o.createElement("span", {
                        dir: "ltr",
                        className: f().phoneCodeItem
                    }, " ", "+", e.phoneCode), !!n && o.createElement("span", {
                        className: f().selectFlag
                    }, o.createElement(p.A, {
                        className: f().selectIcon
                    })))
                })))))))
            }
        },
        69222: function(e, t, n) {
            "use strict";
            n.d(t, {
                A: function() {
                    return y
                }
            });
            var o = n(33514),
                a = n(32485),
                r = n.n(a),
                s = n(14780),
                c = (n(25440), n(13609), n(56733)),
                l = n(36556);
            const i = [c.gq.jp, c.gq.kr],
                u = [1];

            function p(e) {
                return (e || "").toString().replace(/[^\d]*/g, "")
            }
            const d = function(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : l.H;
                if (!n) return e;
                const o = e ? .replace(/\s/g, "") || "",
                    a = n[t];
                if (!a) return o;
                const r = a.find((e => o.match(e.regex))) ? .format_rule ? .split ? .("|") ? .map((e => +e)) ? ? [];
                let s = o.match(/^(0+)/g) ? .[0] ? .length ? ? 0;
                if (i.includes(t) && 1 === s && (s = 0), s && r.unshift(s), !r.length) return o;
                let c = 0;
                return r.reduce(((e, t) => t ? (c += t, `${e.slice(0,c)} ${e.slice(c++)}`.trim()) : e), o)
            };

            function m(e, t, n) {
                let o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : l.H;
                if (u.includes(+t) && n === c.gq.us) {
                    const t = e ? .replace(/\s/g, "") || "";
                    return t ? .replace(/^(\d{0,3})(\d{0,3})(\d*)$/g, ((e, t, n, o) => `(${t})${n}-${o}`.trim()))
                }
                return o ? d(e, n, o) : e
            }
            var h = n(12966),
                f = n(14242),
                b = n(80240),
                C = n(64469),
                g = n.n(C);

            function _(e, t) {
                let n = p(e);
                return n = d(n, t, l.H), n
            }
            class E extends o.Component {
                constructor(e) {
                    super(e), this.inputRef = (0, o.createRef)(), this.inputSelection = {}, this.handleChange = () => {
                        const {
                            value: e,
                            onChange: t,
                            regionId: n
                        } = this.props, o = _(e, n), {
                            mobile: a
                        } = this, r = a.length > o.length;
                        if (this.inputRef && this.inputRef.current) {
                            const {
                                selectionStart: e,
                                selectionEnd: t
                            } = this.inputRef.current, n = " " === a.charAt(e - 1) && r ? e + 1 : e, o = " " === a.charAt(e - 1) && r ? t + 1 : t;
                            this.inputSelection = {
                                start: n,
                                end: o
                            }
                        }
                        setTimeout((() => {
                            t(p(a))
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
                    } = this.props, n = _(e, t), {
                        inputSelection: o
                    } = this;
                    if (o && o.start < n.length) {
                        const e = this.inputRef.current || {};
                        e.selectionStart = o.start, e.selectionEnd = o.end, this.inputSelection = null
                    }
                }
                get inputDom() {
                    return this.inputRef.current || {}
                }
                get mobile() {
                    const {
                        regionId: e
                    } = this.props;
                    return _(this.inputDom.value || "", e)
                }
                render() {
                    const {
                        className: e,
                        value: t,
                        regionId: n,
                        placeholder: a,
                        inputProps: s = {}
                    } = this.props, c = this.state.focus && t ? .length > 0;
                    return o.createElement("div", {
                        className: r()(g().inputGroup, e, {
                            [g().withClear]: c
                        })
                    }, o.createElement("input", (0, f.A)({
                        ref: this.inputRef,
                        placeholder: a,
                        type: "tel",
                        value: _(t, n),
                        onChange: this.handleChange,
                        onBlur: this.handleBlur,
                        onFocus: this.handleFocus
                    }, s)), !!c && o.createElement(b.A, {
                        className: g().clearInput,
                        onMouseDown: this.handleClear,
                        onClick: this.handleClear
                    }))
                }
            }
            var A = E,
                v = n(63611),
                S = n.n(v);
            var y = e => {
                const {
                    value: t = {},
                    onChange: n,
                    autoFocus: a,
                    title: c,
                    codeSelectorCls: i,
                    numberInputCls: u,
                    validateInfo: p,
                    filterPhoneCodeListFn: d,
                    placeholder: f,
                    required: b,
                    onFocus: C,
                    onBlur: g,
                    inputProps: _ = {},
                    titleClassName: E,
                    formItemClassName: v,
                    phoneCodeList: y
                } = e, [I, k] = (0, o.useState)(t), {
                    mobile: N = "",
                    phoneCodeVo: D = {}
                } = I, w = (0, o.useCallback)((e => {
                    k(e), n ? .(e)
                }), [n]);
                (0, o.useEffect)((() => {
                    (0, l.D)()
                }), []);
                const P = (0, o.useCallback)((e => {
                        const {
                            phoneCode: t,
                            regionId: n
                        } = e || {}, o = m(N, t, n, l.H);
                        w({ ...I,
                            phoneCodeVo: e,
                            displayMobile: o
                        })
                    }), [N, w, I]),
                    L = (0, o.useCallback)((e => {
                        const {
                            phoneCode: t,
                            regionId: n
                        } = I ? .phoneCodeVo || {}, o = m(e, t, n, l.H);
                        w({ ...I,
                            mobile: e,
                            displayMobile: o
                        })
                    }), [I, w]);
                return o.createElement(s.A, {
                    title: c,
                    validateInfo: p,
                    required: b,
                    formItemClassName: v,
                    titleClassName: E
                }, o.createElement("div", {
                    className: S().inputGroup,
                    dir: "ltr"
                }, o.createElement(h.A, {
                    onChange: P,
                    value: D,
                    wrapCls: i,
                    regionId: D ? .regionId,
                    filterPhoneCodeListFn: d,
                    phoneCodeList: y
                }), o.createElement(A, {
                    regionId: D ? .regionId,
                    autoFocus: a,
                    className: r()(S().inputBox, u),
                    placeholder: f,
                    value: N,
                    onChange: L,
                    onFocus: C,
                    onBlur: g,
                    inputProps: _
                })))
            }
        },
        45900: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PAGE_SOURCE: function() {
                    return g
                },
                default: function() {
                    return _
                },
                useShowMobilePopupAfterLogin: function() {
                    return f
                }
            });
            var o = n(33514),
                a = n(52523),
                r = n(34805),
                s = n(21633),
                c = n(26820);
            n(96074);
            const l = {
                checkShow: "/api/bg/elmar/channel/bind_mobile/entrance/check",
                uploadShow: "/api/bg/elmar/channel/bind_mobile/entrance/remove"
            };

            function i(e) {
                let {
                    url: t,
                    params: n = {},
                    requestContext: o = {}
                } = e;
                return (0, s.bE)({
                    url: t,
                    params: {
                        bind_app_id: c.s.mobile,
                        ...n
                    },
                    config: {
                        useAntiToken: !0
                    }
                })
            }
            const u = (0, o.createContext)({});
            var p = n(87152),
                d = n(50453),
                m = n(13852),
                h = n(56373);
            const f = () => ((0, o.useEffect)((() => {
                    (0, p.Ir)((() => {
                        d.Ay.replaceURL((0, m.rE)({
                            is_login_reload: 1
                        }, location.href))
                    }))
                }), []), null),
                b = e => {
                    let {
                        popType: t,
                        ...n
                    } = e;
                    switch (t) {
                        case a.hu.MOBILE_ADD:
                            return o.createElement(h.A, n);
                        case a.hu.MAIL_ADD:
                            return o.createElement(r.A, n);
                        default:
                            return null
                    }
                },
                C = {
                    3: a.hu.MOBILE_ADD,
                    5: a.hu.MAIL_ADD
                },
                g = {
                    PERSONAL: 0,
                    SETTING: 1,
                    SECURITY: 2,
                    USER: 3,
                    PRIVACY_SETTING: 4
                };
            var _ = e => {
                let {
                    popSuccess: t,
                    pageSource: n = g.SECURITY,
                    prepareInfo: a = {}
                } = e;
                const [r, s] = (0, o.useState)({
                    show: !1
                }), c = (0, o.useCallback)((() => {
                    s({
                        show: !1
                    }), d.Ay.replaceURL((0, m.rE)({
                        is_login_reload: null
                    }, location.href))
                }), []), p = (0, o.useCallback)((() => {
                    c(), t ? .()
                }), [t, c]), h = (0, o.useCallback)((() => {
                    ! function() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        i({
                            url: l.uploadShow,
                            params: e
                        })
                    }({
                        type: r ? .type,
                        page_source: n
                    }), c()
                }), [c, r ? .type, n]);
                (0, o.useEffect)((() => {
                    const e = (0, m.Xe)(location.href),
                        {
                            is_login_reload: t
                        } = e || {};
                    if (!t) return;
                    (async () => {
                        const e = await
                        function() {
                            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            return i({
                                url: l.checkShow,
                                params: e
                            })
                        }({
                            page_source: n
                        }), {
                            show: t,
                            type: o,
                            bindScene: a
                        } = e ? .result || {}, r = C[o];
                        t && r && s({
                            show: t,
                            type: o,
                            scene: a,
                            popType: r
                        })
                    })()
                }), []);
                const {
                    show: f,
                    popType: _,
                    scene: E
                } = r || {};
                return f ? o.createElement(u.Provider, {
                    value: {
                        popupSuccess: p,
                        closePopup: h,
                        show: f,
                        showNotNow: !0,
                        scene: E
                    }
                }, o.createElement(b, {
                    popType: _,
                    prepareInfo: { ...a,
                        scene: E,
                        successToast: !0,
                        supportMixSend: !0
                    },
                    onSuccess: p,
                    onClose: h
                })) : null
            }
        },
        56373: function(e, t, n) {
            "use strict";
            n.d(t, {
                A: function() {
                    return Y
                }
            });
            var o = n(14242),
                a = n(33514),
                r = n(1762),
                s = n(82045);
            const c = "/api/bg/sigerus/account/mobile_bind/code/request",
                l = "/api/bg/sigerus/account/mobile_bind/code/verify",
                i = "/api/bg/sigerus/account/mobile_bind/mobile_back_bind";
            var u = n(42182);
            const p = (0, a.createContext)({}),
                d = e => {
                    let {
                        children: t,
                        onClose: n,
                        onSuccess: o,
                        onBack: d,
                        prepareInfo: m
                    } = e;
                    const {
                        scene: h,
                        extParams: f,
                        supportMobileBack: b,
                        supportMixSend: C
                    } = m || {}, g = {
                        handler: {
                            requestMobileCode: e => {
                                const {
                                    tel_code: t,
                                    mobile: n,
                                    tel_location_id: o,
                                    resend: a
                                } = e || {};
                                return (e => (0, s.SA)({
                                    url: c,
                                    params: e
                                }, {
                                    useSigerusEncrypt: !0
                                }))({
                                    tel_code: t,
                                    mobile: n,
                                    tel_location_id: o,
                                    resend: a,
                                    bind_app_id: r.s.mobile,
                                    scene: h,
                                    ...f || {},
                                    support_mobile_back: b,
                                    support_mix_send: C
                                })
                            },
                            verifyMobileCode: e => {
                                const {
                                    code: t,
                                    mobile: n,
                                    tel_code: o,
                                    tel_location_id: a
                                } = e || {};
                                return (e => (0, s.SA)({
                                    url: l,
                                    params: e
                                }, {
                                    useSigerusEncrypt: !0
                                }))({
                                    bind_app_id: r.s.mobile,
                                    code: t,
                                    mobile: n,
                                    tel_code: o,
                                    tel_location_id: a,
                                    ...f || {},
                                    support_mobile_back: b
                                })
                            },
                            onSuccess: o,
                            onClose: n,
                            onBack: d,
                            checkMobile: e => {
                                const {
                                    tel_code: t,
                                    mobile: n,
                                    tel_location_id: o
                                } = e || {};
                                return u.NM({
                                    scene: h,
                                    mobile: n,
                                    bind_app_id: r.s.mobile,
                                    tel_code: t,
                                    tel_location_id: o
                                })
                            },
                            mobileAddBackBind: e => {
                                const {
                                    back_and_bind_ticket: t
                                } = e || {};
                                return (e => (0, s.SA)({
                                    url: i,
                                    params: e
                                }))({
                                    back_and_bind_ticket: t
                                })
                            }
                        }
                    };
                    return a.createElement(p.Provider, {
                        value: g
                    }, t)
                };
            var m = n(86901),
                h = n(52523);
            n(44114);
            var f = e => {
                    const {
                        stepKey: t,
                        stepData: n
                    } = e || {}, o = {
                        stepKey: t,
                        stepData: n
                    }, r = (0, a.useRef)([o]), [s, c] = (0, a.useState)(o);
                    return {
                        currentStep: s,
                        setStepNext: function(e) {
                            const t = {
                                stepKey: e,
                                stepData: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                            };
                            r.current.push(t), c(t)
                        },
                        setStepPrev: () => {
                            const e = r.current;
                            e.pop();
                            const t = e[e.length - 1];
                            c(t)
                        }
                    }
                },
                b = n(76699),
                C = n(97582),
                g = n(69878),
                _ = n(20162),
                E = n(10147),
                A = n(32167),
                v = n(48313),
                S = n(43989),
                y = n(10422),
                I = n.n(y);
            var k = e => {
                    let {
                        tel_code: t,
                        mobile: n,
                        tel_location_id: o,
                        onSubmit: r,
                        onCancel: s
                    } = e;
                    const {
                        t: c
                    } = (0, C.B)("bec-fe.account-dialog-pc"), l = t && n && o ? `+${t} ${(0,v.Rg)(n,t,o)}` : `+${t} ${n}`, i = c("mobileCheck", {
                        returnObjects: !0,
                        val: `#${l}#`
                    }), {
                        title: u,
                        desc: p,
                        cancelText: d,
                        confirmText: m
                    } = i || {}, h = (0, S.A)(p, I().highLight);
                    return a.createElement(a.Fragment, null, a.createElement(g.A, {
                        title: u
                    }, h), a.createElement("div", {
                        className: I().container
                    }, a.createElement(E.A, {
                        type: "border",
                        onClick: s,
                        className: I().btn
                    }, d), a.createElement(A.A, {
                        type: "main",
                        onClick: async () => {
                            const e = await r({
                                    tel_code: t,
                                    mobile: n,
                                    tel_location_id: o
                                }),
                                {
                                    success: a,
                                    error: s
                                } = e || {};
                            a || _.A.error(s ? .message || c("systemBusy"))
                        },
                        className: I().btn
                    }, m)))
                },
                N = n(68207);
            var D = e => {
                    let {
                        phoneCodeVo: t,
                        onSubmit: n,
                        title: o,
                        desc: r,
                        contentAfterTitle: s,
                        inputBottomNode: c
                    } = e;
                    const {
                        t: l
                    } = (0, C.B)("bec-fe.account-dialog-pc"), i = l("phoneInput.add", {
                        returnObjects: !0
                    }), {
                        inputLabel: u,
                        btnText: p
                    } = i || {}, d = "function" == typeof o ? o() : a.createElement(g.A, {
                        title: o || i ? .title
                    }, s, r || i ? .desc);
                    return a.createElement(a.Fragment, null, d, a.createElement(N.A, {
                        title: u,
                        btnText: p,
                        onSubmit: n,
                        value: {
                            phoneCodeVo: t
                        },
                        inputBottomNode: c
                    }))
                },
                w = n(63815),
                P = n(62259),
                L = n(49439),
                x = n(64886),
                B = n(76371),
                M = n(39758),
                T = n.n(M);
            const R = "MOBILE",
                F = "EMAIL",
                O = {
                    [F]: "verifyCode.email",
                    [R]: "verifyCode.mobile"
                };
            var G = e => {
                    let {
                        onSubmit: t,
                        onReSend: n,
                        verifyCodeType: o,
                        tel_code: r,
                        mobile: s,
                        tel_location_id: c,
                        tipsVo: l
                    } = e;
                    const {
                        t: i
                    } = (0, C.B)("bec-fe.account-dialog-pc"), u = O[o], p = r && s && c ? `+${r} ${(0,v.Rg)(s,r,c)}` : `+${r} ${s}`, d = i(u, {
                        returnObjects: !0,
                        val: `#${p}#`
                    }), {
                        title: m,
                        desc: h
                    } = d || {}, f = (0, S.A)(h, T().highLight), [E, A] = (0, a.useState)(), y = (0, a.useRef)();
                    (0, a.useEffect)((() => {
                        y.current ? .focus()
                    }), []);
                    return a.createElement(a.Fragment, null, a.createElement(g.A, {
                        title: m
                    }, f), a.createElement("div", {
                        className: T().codeInputWrap
                    }, a.createElement(P.A, {
                        className: T().codeInput,
                        handleCode: async e => {
                            try {
                                (0, w.Nx)();
                                const n = await t({
                                    code: e,
                                    tel_code: r,
                                    mobile: s,
                                    tel_location_id: c
                                });
                                (0, w.jD)();
                                const {
                                    success: o,
                                    error: a
                                } = n || {};
                                return !o && a && A(a ? .message || i("systemBusy")), (0, b.Nq)({
                                    event: "VerifyCodePanel",
                                    subEvent: "handleCode",
                                    tags: {
                                        success: !!o
                                    }
                                }), n
                            } catch (e) {
                                A(i("systemBusy"))
                            }
                        },
                        onChange: () => {
                            A("")
                        },
                        ref: y
                    }), a.createElement(L.A, {
                        reSendCode: async () => {
                            (0, w.Nx)();
                            const e = await n({
                                tel_code: r,
                                mobile: s,
                                tel_location_id: c,
                                resend: !0
                            });
                            (0, w.jD)();
                            const {
                                success: t,
                                error: o
                            } = e || {};
                            if ((0, b.Nq)({
                                    event: "VerifyCodePanel",
                                    subEvent: "reSendCode",
                                    tags: {
                                        success: !!t
                                    }
                                }), t) return e;
                            _.A.error(o ? .message || i("systemBusy"))
                        }
                    }), E && a.createElement(B.A, {
                        tip: E,
                        className: T().errorMsgWrap
                    }), !!l && a.createElement(x.h, {
                        tipsVo: l
                    })))
                },
                H = n(4218),
                U = n(28286),
                V = n.n(U);
            var $ = e => {
                let {
                    mobileInputProps: t,
                    popupProps: n
                } = e;
                const {
                    currentStep: r,
                    setStepNext: s,
                    setStepPrev: c
                } = f({
                    stepKey: h.HG.PHONE_INPUT_ADD
                }), {
                    stepKey: l,
                    stepData: i
                } = r || {}, {
                    handler: u,
                    data: d
                } = (0, a.useContext)(p), {
                    phoneCodeVo: C
                } = d || {}, {
                    requestMobileCode: g,
                    verifyMobileCode: _,
                    mobileAddBackBind: E,
                    onSuccess: A,
                    onClose: v,
                    checkMobile: S,
                    onBack: y
                } = u || {}, I = (0, a.useMemo)((() => l !== h.HG.PHONE_INPUT_ADD || !!y), [l, !!y]), N = (0, a.useCallback)((async e => {
                    const t = await S(e),
                        {
                            success: n
                        } = t || {};
                    return n && s(h.HG.MOBILE_CHECK, { ...e
                    }), t
                }), [S, s]), w = (0, a.useCallback)((async e => {
                    const t = await g(e),
                        {
                            success: n
                        } = t || {};
                    return n && s(h.HG.VERIFY_MOBILE_ADD_CODE, { ...e,
                        tipsVo: t.result ? .mobile_code_tips_vo
                    }), t
                }), [g, s]), P = async e => {
                    const t = await _(e),
                        {
                            success: n,
                            result: o
                        } = t || {},
                        {
                            status: a,
                            ...r
                        } = o || {};
                    return a === h.vV.BEEN_BANDED ? s(h.HG.ACCOUNT_OCCUPIED, {
                        data: r
                    }) : (n && A(), t)
                }, L = e => g(e), x = async e => {
                    let {
                        back_and_bind_ticket: t
                    } = e;
                    const n = await E({
                            back_and_bind_ticket: t
                        }),
                        {
                            success: o
                        } = n || {};
                    return o && ((0, b.Nq)({
                        event: "back_bind_mobile_add_success"
                    }), A()), n
                }, B = (0, a.useMemo)((() => l === h.HG.PHONE_INPUT_ADD ? a.createElement(D, (0, o.A)({
                    onSubmit: N,
                    phoneCodeVo: C
                }, t || {})) : l === h.HG.MOBILE_CHECK ? a.createElement(k, (0, o.A)({
                    onSubmit: w,
                    onCancel: c
                }, i)) : l === h.HG.VERIFY_MOBILE_ADD_CODE ? a.createElement(G, (0, o.A)({
                    onReSend: L,
                    verifyCodeType: R,
                    onSubmit: P,
                    onCancel: c
                }, i)) : l === h.HG.ACCOUNT_OCCUPIED ? a.createElement(H.A, {
                    onCancel: v,
                    onConfirm: x,
                    data: i.data
                }) : void 0), [l, N, C, t, w, c, i]);
                return a.createElement(m.A, (0, o.A)({
                    onClose: v,
                    containerProps: {
                        className: V().popup
                    }
                }, n), a.createElement(m.A.CloseButton, {
                    onClick: v
                }), a.createElement("div", {
                    className: V().container
                }, I && a.createElement(m.A.BackButton, {
                    onClick: c
                }), B))
            };
            var q = e => {
                    let {
                        prepareInfo: t,
                        onClose: n,
                        onSuccess: o,
                        popupProps: r,
                        onBack: s,
                        mobileInputProps: c
                    } = e;
                    return a.createElement(d, {
                        prepareInfo: t,
                        onClose: n,
                        onSuccess: o,
                        onBack: s
                    }, a.createElement($, {
                        mobileInputProps: c,
                        popupProps: r
                    }))
                },
                W = n(83052);
            var Y = function(e) {
                let {
                    onSuccess: t,
                    ...n
                } = e;
                return a.createElement(q, (0, o.A)({
                    onSuccess: () => {
                        t && t(), _.A.success((0, W.t)("successTips.mobileAdd", {
                            ns: "bgp_account_security"
                        }))
                    }
                }, n))
            }
        },
        32878: function(e, t, n) {
            "use strict";
            n.d(t, {
                A: function() {
                    return f
                }
            });
            var o = n(14242),
                a = n(32485),
                r = n.n(a),
                s = n(33514),
                c = n(52248),
                l = n(29227),
                i = n(13657),
                u = n(92069),
                p = n.n(u),
                d = n(40822),
                m = n(60839);
            var h = e => {
                let {
                    separator: t = "/",
                    children: n,
                    useSeo: a = !1,
                    homeLink: c,
                    linkUrl: i = "",
                    ...u
                } = e, h = "";
                h = "/" === i ? c || i : i ? `${c||""}${i}` : "";
                const f = (0, s.useCallback)((() => {
                    (0, m.hd)({
                        tags: {
                            type: m.gm.CATEGORY_3_ICON_CLICK
                        }
                    }), h && (0, l.MJ)(h)
                }), [u]);
                let b;
                return b = h ? s.createElement("a", (0, o.A)({
                    className: p().prefixClsLink,
                    href: h,
                    onClick: f
                }, u), n) : a ? s.createElement(d.H1, (0, o.A)({
                    className: r()(p().prefixClsLink, p().h1)
                }, u), n) : s.createElement("span", (0, o.A)({
                    className: p().prefixClsLink
                }, u), n), n ? s.createElement("li", null, b, t && s.createElement("span", {
                    className: p().prefixClsSeparator
                }, t)) : null
            };
            var f = e => {
                let {
                    separator: t = s.createElement(c.hu, {
                        className: p().arrow
                    }),
                    style: n,
                    className: a,
                    list: u = [],
                    useDefaultStyle: d = !1,
                    ...m
                } = e;
                const {
                    homeLink: f
                } = (0, i.Pj)();
                return s.createElement("nav", (0, o.A)({
                    className: r()(p().prefixClsRtl, a, {
                        [p().head]: d
                    }),
                    style: n
                }, m), s.createElement("ol", null, u ? .map(((e, n) => {
                    const o = e.href ? (0, l.YU)(e.href) : e.href;
                    return s.createElement(h, {
                        useSeo: e ? .useSeo,
                        linkUrl: o,
                        key: n,
                        separator: t,
                        homeLink: f
                    }, e.title)
                }))))
            }
        },
        26820: function(e, t, n) {
            "use strict";
            n.d(t, {
                s: function() {
                    return s
                }
            });
            var o = n(83735);
            const a = {
                    mobile: 101,
                    mail: 201
                },
                r = {
                    mobile: 102,
                    mail: 202
                };
            const s = function() {
                const {
                    isNativePlatform: e
                } = (0, o.tb)();
                return e ? a : r
            }()
        },
        4303: function(e, t, n) {
            "use strict";
            n.d(t, {
                A: function() {
                    return b
                }
            });
            var o = n(14242),
                a = n(33514),
                r = n(47116),
                s = n(79732),
                c = n(32036),
                l = n(34477),
                i = n(13657);
            const u = "visibilitychange";
            let p = !1,
                d = !1;
            var m = n(11963),
                h = n(7386),
                f = n(35614);
            var b = (0, r.PA)((e => {
                let {
                    children: t,
                    allInCenterLayout: n,
                    disableSeo: r,
                    enableSidebarLayout: b,
                    showCookiePrompt: C,
                    isPolicyLayout: g,
                    headerData: _,
                    ...E
                } = e;
                const A = (0, i.Pj)(),
                    {
                        connectEmailInfo: v,
                        $localInfo: S,
                        webLayoutData: y,
                        metaParams: I,
                        openGoogleTranslate: k
                    } = A,
                    {
                        headerData: N
                    } = y || {},
                    D = (0, a.useMemo)((() => ({
                        enableSidebarLayout: b,
                        enableFullSidebar: !0
                    })), [b]);
                var w;
                return (0, a.useEffect)((() => {
                    (0, m.A)();
                    try {
                        I && (0, c.A)({ ...I || {},
                            platform: 0,
                            origin_url: window.location.pathname
                        }, A.$axiosHttp), k && document.documentElement.removeAttribute("translate")
                    } catch (e) {
                        (0, l.fL)(e)
                    }
                }), []), w = () => (0, h.Ay)("refreshConfig"), (0, a.useEffect)((() => {
                    try {
                        if (p) return;
                        p = !0;
                        const e = "function" == typeof w ? w() : w,
                            {
                                enable: t = !1,
                                timeGap: n = 1800
                            } = e || {};
                        if (!(t && n >= 60)) return;
                        const o = Date.now(),
                            a = () => {
                                if ("visible" === document.visibilityState && Date.now() - o > 1e3 * n) {
                                    if (d) return;
                                    d = !0, r(), location.reload()
                                }
                            },
                            r = () => document.removeEventListener(u, a);
                        return document.addEventListener(u, a), r
                    } catch (e) {
                        (0, l.fL)(e)
                    }
                }), []), a.createElement(f.y.Provider, {
                    value: D
                }, a.createElement(s.P, (0, o.A)({
                    enableFixedActivityInfo: !0,
                    allInCenterLayout: n,
                    disableSeo: r,
                    connectEmailInfo: v,
                    toolBarData: {
                        showMessages: !g,
                        showMarketMsg: !g,
                        showFeedback: !0
                    },
                    showCookiePrompt: C
                }, y, {
                    headerData: { ...N,
                        ..._
                    }
                }, E), t))
            }))
        }
    }
]);
//# sourceMappingURL=http://temudebug.com/sourcemaps/assets/modernjs/4305_c1b998089e7ecde3d4d4.js.map