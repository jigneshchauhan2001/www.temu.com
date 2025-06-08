(self.webpackChunkmobile_bg_web_personal = self.webpackChunkmobile_bg_web_personal || []).push([
    [8300], {
        90837: function(n) {
            n.exports = {
                wrapper: "wrapper-mdnrP",
                circle: "circle-3jAL0",
                title: "title-3BaNV",
                button: "button-14GXr",
                disableClickButton: "disableClickButton-2ZMNV"
            }
        },
        77277: function(n, t, e) {
            "use strict";
            e.d(t, {
                Lh: function() {
                    return u
                },
                U8: function() {
                    return o
                },
                PV: function() {
                    return a
                },
                pr: function() {
                    return p
                },
                yt: function() {
                    return c
                },
                L: function() {
                    return s
                },
                pN: function() {
                    return i
                }
            });
            e(16280);
            var r = e(98403);
            const i = {
                    ns: "mobile-bg-policy.intellectual-property-policy-us-html",
                    regionIds: ["211"]
                },
                o = {
                    ns: "mobile-bg-policy.intellectual-property-policy-default-html",
                    regionIds: ["210", "192", "119", "100", "160", "42", "144", "185", "12", "128"],
                    isDefault: !0
                },
                s = {
                    ns: "mobile-bg-policy.intellectual-property-policy-middle-east-html",
                    regionIds: ["174", "209", "152", "165", "105", "101", "16", "97"]
                },
                u = {
                    ns: "mobile-bg-policy.intellectual-property-policy-canada-html",
                    regionIds: ["37"]
                },
                c = {
                    ns: "mobile-bg-policy.intellectual-property-policy-guatemala-html",
                    regionIds: ["84"]
                },
                a = {
                    ns: "mobile-bg-policy.intellectual-property-policy-eu-html",
                    regionIds: ["76", "69", "98", "141", "163", "79", "68", "20", "114", "13", "191", "96", "64", "180", "181", "108", "167", "52", "53", "32", "54", "90", "50", "113", "122", "162", "186"]
                },
                l = [i, o, s, u, c, a],
                g = l.filter((n => !n.isDefault)).flatMap((n => n.regionIds));

            function p() {
                return l.map((n => ({
                    ns: n.ns,
                    filter: t => {
                        let {
                            context: e,
                            isNodeLess: i
                        } = t;
                        if (i || e.isCSR) return !0;
                        const o = function(n) {
                            return n.query ? .region_id || n.__req.headers[r.Z3.REGION]
                        }(e);
                        return n.isDefault ? !g.includes(o) : n.regionIds.includes(o)
                    }
                })))
            }
        },
        98513: function(n, t, e) {
            "use strict";
            e.d(t, {
                C$: function() {
                    return S
                },
                D3: function() {
                    return Z
                },
                Do: function() {
                    return I
                },
                EE: function() {
                    return h
                },
                F_: function() {
                    return j
                },
                GH: function() {
                    return p
                },
                GQ: function() {
                    return m
                },
                GW: function() {
                    return l
                },
                HB: function() {
                    return M
                },
                J: function() {
                    return on
                },
                Ji: function() {
                    return U
                },
                LM: function() {
                    return b
                },
                Lh: function() {
                    return A
                },
                Lp: function() {
                    return X
                },
                M: function() {
                    return W
                },
                M$: function() {
                    return w
                },
                Nd: function() {
                    return a
                },
                O4: function() {
                    return B
                },
                OQ: function() {
                    return u
                },
                OZ: function() {
                    return gn
                },
                Pk: function() {
                    return pn
                },
                Q1: function() {
                    return O
                },
                R2: function() {
                    return an
                },
                S_: function() {
                    return x
                },
                Sq: function() {
                    return J
                },
                Tx: function() {
                    return d
                },
                U4: function() {
                    return c
                },
                U6: function() {
                    return sn
                },
                XE: function() {
                    return T
                },
                Xz: function() {
                    return en
                },
                Y4: function() {
                    return V
                },
                ZB: function() {
                    return yn
                },
                Zg: function() {
                    return y
                },
                _5: function() {
                    return ln
                },
                _p: function() {
                    return dn
                },
                d8: function() {
                    return fn
                },
                e3: function() {
                    return R
                },
                f7: function() {
                    return F
                },
                gb: function() {
                    return q
                },
                ho: function() {
                    return P
                },
                jr: function() {
                    return z
                },
                l8: function() {
                    return s
                },
                lY: function() {
                    return K
                },
                lw: function() {
                    return Y
                },
                nn: function() {
                    return G
                },
                oM: function() {
                    return mn
                },
                oc: function() {
                    return rn
                },
                og: function() {
                    return k
                },
                ph: function() {
                    return cn
                },
                pr: function() {
                    return _n
                },
                rF: function() {
                    return $
                },
                rc: function() {
                    return N
                },
                ry: function() {
                    return _
                },
                sy: function() {
                    return E
                },
                tP: function() {
                    return D
                },
                uc: function() {
                    return v
                },
                uz: function() {
                    return hn
                },
                vd: function() {
                    return tn
                },
                w$: function() {
                    return C
                },
                wG: function() {
                    return H
                },
                yF: function() {
                    return un
                },
                ye: function() {
                    return nn
                },
                yt: function() {
                    return Q
                },
                z5: function() {
                    return g
                },
                zE: function() {
                    return f
                },
                zb: function() {
                    return L
                }
            });
            var r = e(55106),
                i = e(9570),
                o = e(36295);
            const s = {
                    ns: "privacy-policy-colombia-html",
                    regionIds: [i.af]
                },
                u = {
                    ns: "privacy-policy-mauritius-html",
                    regionIds: [i.Lz]
                },
                c = {
                    ns: "privacy-policy-ukraine-html",
                    regionIds: [i.ny]
                },
                a = {
                    ns: "privacy-policy-kr-html",
                    regionIds: [i.yG],
                    version: "2"
                },
                l = {
                    ns: "privacy-policy-kr-v1_3-html",
                    regionIds: [i.yG],
                    version: "3"
                },
                g = {
                    ns: "mobile-bg-policy.privacy-policy-kr-v1_4-html",
                    regionIds: [i.yG],
                    version: "4"
                },
                p = {
                    ns: "mobile-bg-policy.privacy-policy-kr-v1_5-html",
                    regionIds: [i.yG],
                    version: "5"
                },
                f = {
                    ns: "mobile-bg-policy.privacy-policy-kr-v1_6-html",
                    regionIds: [i.yG]
                },
                d = {
                    ns: "privacy-policy-kazakhstan-html",
                    regionIds: [i.Q8]
                },
                m = {
                    ns: "mobile-bg-policy.privacy-policy-kuwait-html",
                    regionIds: [i.Hd]
                },
                y = {
                    ns: "mobile-bg-policy.privacy-policy-peru-html-v3",
                    regionIds: [i.KT]
                },
                h = {
                    ns: "mobile-bg-policy.privacy-policy-us-html_v3",
                    regionIds: [i.IF]
                },
                b = {
                    ns: "privacy-policy-morocco-html",
                    regionIds: [i.kJ]
                },
                _ = {
                    ns: "mobile-bg-policy.privacy-policy-kyrgyzstan-html",
                    regionIds: [i.ui]
                },
                v = {
                    ns: "mobile-bg-policy.privacy-policy-maldives-html",
                    regionIds: [i.XX]
                },
                I = {
                    ns: "mobile-bg-policy.privacy-policy-saudi-arabia-html",
                    regionIds: [i.yA]
                },
                S = {
                    ns: "mobile-bg-policy.privacy-policy-argentina-html",
                    regionIds: [i.Dm]
                },
                C = {
                    ns: "mobile-bg-policy.privacy-policy-south-africa-html",
                    regionIds: [i.Vu]
                },
                w = {
                    ns: "mobile-bg-policy.privacy-policy-philippines-html",
                    regionIds: [i.br]
                },
                E = {
                    ns: "mobile-bg-policy.privacy-policy-united-arab-html",
                    regionIds: [i.Ls]
                },
                N = {
                    ns: "mobile-bg-policy.privacy-policy-honduras-html",
                    regionIds: [i.ym]
                },
                O = {
                    ns: "mobile-bg-policy.privacy-policy-ghana-html",
                    regionIds: [i.f3]
                },
                L = {
                    ns: "mobile-bg-policy.privacy-policy-eu-v2-html",
                    regionIds: i.vq
                },
                k = {
                    ns: "privacy-policy-uk-v3-html",
                    regionIds: [i.qo],
                    version: "v3"
                },
                P = {
                    ns: "mobile-bg-policy.privacy-policy-uk-v4-html",
                    regionIds: [i.qo]
                },
                A = {
                    ns: "privacy-policy-canada-html",
                    regionIds: [i.Wh]
                },
                R = {
                    ns: "privacy-policy-mexico-html",
                    regionIds: [i.F9]
                },
                V = {
                    ns: "privacy-policy-nz-html",
                    regionIds: [i.PC]
                },
                D = {
                    ns: "privacy-policy-australia-html",
                    regionIds: [i._8],
                    version: "v1"
                },
                T = {
                    ns: "mobile-bg-policy.privacy-policy-australia-v2-html",
                    regionIds: [i._8]
                },
                x = {
                    ns: "privacy-policy-azerbaijan-html",
                    regionIds: [i.Z_]
                },
                H = {
                    ns: "privacy-policy-andorra-html",
                    regionIds: [i.HE, i.ON]
                },
                q = {
                    ns: "privacy-policy-armenia-html",
                    regionIds: [i.HJ]
                },
                $ = {
                    ns: "mobile-bg-policy.privacy-policy-uruguay-html-v1",
                    regionIds: [i.mV]
                },
                G = {
                    ns: "mobile-bg-policy.privacy-policy-dominican-html-v1",
                    regionIds: [i.E2]
                },
                z = {
                    ns: "privacy-policy-jp-html",
                    regionIds: [i.yR]
                },
                M = {
                    ns: "mobile-bg-policy.privacy-policy-georgia-html-v1",
                    regionIds: [i.Qg]
                },
                F = {
                    ns: "mobile-bg-policy.privacy-policy-puerto-rico-html-v2",
                    regionIds: [i.Mi, i.Dw, i.q9, i.Hl]
                },
                j = {
                    ns: "privacy-policy-serbia-html",
                    regionIds: [i.o, i.E7]
                },
                U = {
                    ns: "privacy-policy-turkey-html",
                    regionIds: [i.Is]
                },
                B = {
                    ns: "privacy-policy-algeria-html",
                    regionIds: [i.Fq]
                },
                J = {
                    ns: "privacy-policy-ecuador-html",
                    regionIds: [i.Tz]
                },
                W = {
                    ns: "privacy-policy-el-salvador-html",
                    regionIds: [i.xf]
                },
                K = {
                    ns: "privacy-policy-trinidad-and-tobago-html",
                    regionIds: [i._L]
                },
                Z = {
                    ns: "privacy-policy-brunei-html",
                    regionIds: [i.MA]
                },
                Q = {
                    ns: "mobile-bg-policy.privacy-policy-guatemala-html-v1",
                    regionIds: [i.Tk]
                },
                X = {
                    ns: "privacy-policy-mongolia-html",
                    regionIds: [i.m1]
                },
                Y = {
                    ns: "privacy-policy-albania-html",
                    regionIds: [i.Cn]
                },
                nn = {
                    ns: "privacy-policy-nigeria-html",
                    regionIds: [i.VC]
                },
                tn = {
                    ns: "privacy-policy-montenegro-html",
                    regionIds: [i.gQ]
                },
                en = {
                    ns: "mobile-bg-policy.privacy-policy-eu2-v2-html",
                    regionIds: i.LC
                },
                rn = {
                    ns: "mobile-bg-policy.privacy-policy-eu2-v2-html",
                    regionIds: [i.Ds],
                    version: "v2"
                },
                on = {
                    ns: "mobile-bg-policy.privacy-policy-sw-html",
                    regionIds: [i.Ds]
                },
                sn = {
                    ns: "mobile-bg-policy.privacy-policy-sriLanka-html",
                    regionIds: [i.dH]
                },
                un = {
                    ns: "mobile-bg-policy.privacy-policy-costa-rica-html-v1",
                    regionIds: [i.H4]
                },
                cn = {
                    ns: "privacy-policy-north-macedonia-html",
                    regionIds: [i.mG]
                },
                an = {
                    ns: "privacy-policy-vietnam-html",
                    regionIds: [i.Ol]
                },
                ln = {
                    ns: "privacy-policy-pakistan-html",
                    regionIds: [i.fw]
                },
                gn = {
                    ns: "privacy-policy-bosnia-html",
                    regionIds: [i.Xm]
                },
                pn = {
                    ns: "privacy-policy-uzbekistan-html",
                    regionIds: [i.Q]
                },
                fn = {
                    ns: "mobile-bg-policy.privacy-policy-brazil-html-v2",
                    regionIds: [i.Kt]
                },
                dn = {
                    ns: "mobile-bg-policy.privacy-policy-thailand-html-v1",
                    regionIds: [i.ZF]
                },
                mn = {
                    ns: "mobile-bg-policy.privacy-policy-chile-html-v1",
                    regionIds: [i.dT]
                },
                yn = {
                    ns: "mobile-bg-policy.privacy-policy-Israel-html",
                    regionIds: [i.e2]
                },
                hn = {
                    ns: "mobile-bg-policy.privacy-policy-malaysia-html-v1",
                    regionIds: [i.nA]
                },
                bn = [L, en, rn, on, s, u, c, a, l, g, p, f, d, m, y, h, b, hn, _, v, I, S, C, w, E, N, k, P, A, R, V, D, T, x, H, q, $, G, z, M, F, j, U, B, J, W, K, Z, Q, X, Y, nn, tn, sn, un, cn, an, ln, gn, pn, fn, dn, mn, yn, O];
            bn.filter((n => !n.isDefault)).flatMap((n => n.regionIds));

            function _n() {
                (0, r.r)("mobile-bg-web-personal");
                const n = (0, r.c)("privacy-policy-version-config"),
                    t = n ? .versionConfigs;
                return (Array.isArray(t) ? bn.concat(t) : bn).map((n => ({
                    ns: n.ns,
                    filter: t => {
                        let {
                            context: e,
                            isNodeLess: r
                        } = t;
                        if (r || e.isCSR) return !0;
                        const i = (0, o._)(e);
                        return n.regionIds.includes(i)
                    }
                })))
            }
        },
        9570: function(n, t, e) {
            "use strict";
            e.d(t, {
                Cn: function() {
                    return gn
                },
                Dm: function() {
                    return _
                },
                Ds: function() {
                    return D
                },
                Dw: function() {
                    return Q
                },
                E2: function() {
                    return W
                },
                E7: function() {
                    return en
                },
                F9: function() {
                    return G
                },
                Fq: function() {
                    return rn
                },
                H4: function() {
                    return mn
                },
                HE: function() {
                    return j
                },
                HJ: function() {
                    return B
                },
                Hd: function() {
                    return zn
                },
                Hl: function() {
                    return Y
                },
                IF: function() {
                    return p
                },
                Is: function() {
                    return tn
                },
                KT: function() {
                    return g
                },
                Kt: function() {
                    return In
                },
                LC: function() {
                    return Fn
                },
                Ls: function() {
                    return S
                },
                Lz: function() {
                    return s
                },
                MA: function() {
                    return cn
                },
                Mi: function() {
                    return Z
                },
                ON: function() {
                    return U
                },
                Ol: function() {
                    return hn
                },
                PC: function() {
                    return z
                },
                Q: function() {
                    return vn
                },
                Q8: function() {
                    return l
                },
                Qg: function() {
                    return o
                },
                Tk: function() {
                    return an
                },
                Tz: function() {
                    return on
                },
                VC: function() {
                    return pn
                },
                Vu: function() {
                    return v
                },
                Wh: function() {
                    return $
                },
                XX: function() {
                    return h
                },
                Xm: function() {
                    return _n
                },
                ZF: function() {
                    return Sn
                },
                Z_: function() {
                    return F
                },
                _8: function() {
                    return M
                },
                _L: function() {
                    return un
                },
                af: function() {
                    return i
                },
                br: function() {
                    return I
                },
                dH: function() {
                    return dn
                },
                dT: function() {
                    return Hn
                },
                e2: function() {
                    return qn
                },
                f3: function() {
                    return Gn
                },
                fw: function() {
                    return bn
                },
                gQ: function() {
                    return fn
                },
                kJ: function() {
                    return f
                },
                lP: function() {
                    return $n
                },
                m1: function() {
                    return ln
                },
                mG: function() {
                    return yn
                },
                mV: function() {
                    return J
                },
                nA: function() {
                    return Rn
                },
                ny: function() {
                    return u
                },
                o: function() {
                    return nn
                },
                q9: function() {
                    return X
                },
                qo: function() {
                    return T
                },
                ui: function() {
                    return y
                },
                vq: function() {
                    return Mn
                },
                x4: function() {
                    return xn
                },
                xf: function() {
                    return sn
                },
                yA: function() {
                    return b
                },
                yG: function() {
                    return c
                },
                yR: function() {
                    return K
                },
                ym: function() {
                    return C
                }
            });
            e(18107), e(67357);
            var r = e(56733);
            const i = String(r.gV.co.id),
                o = String(r.gV.ge.id),
                s = String(r.gV.mu.id),
                u = String(r.gV.ua.id),
                c = String(r.gV.kr.id),
                a = String(r.gV.is.id),
                l = String(r.gV.kz.id),
                g = String(r.gV.pe.id),
                p = String(r.gV.us.id),
                f = String(r.gV.ma.id),
                d = String(r.gV.es.id),
                m = String(r.gV.pl.id),
                y = String(r.gV.kg.id),
                h = String(r.gV.mv.id),
                b = String(r.gV.sa.id),
                _ = String(r.gV.ar.id),
                v = String(r.gV.za.id),
                I = String(r.gV.ph.id),
                S = String(r.gV.ae.id),
                C = String(r.gV.hn.id),
                w = String(r.gV.cz.id),
                E = String(r.gV.nl.id),
                N = String(r.gV.be.id),
                O = String(r.gV.no.id),
                L = String(r.gV.at.id),
                k = String(r.gV.pt.id),
                P = String(r.gV.se.id),
                A = String(r.gV.hu.id),
                R = String(r.gV.dk.id),
                V = String(r.gV.ro.id),
                D = String(r.gV.ch.id),
                T = String(r.gV.uk.id),
                x = String(r.gV.de.id),
                H = String(r.gV.fr.id),
                q = String(r.gV.it.id),
                $ = String(r.gV.ca.id),
                G = String(r.gV.mx.id),
                z = String(r.gV.nz.id),
                M = String(r.gV.au.id),
                F = String(r.gV.az.id),
                j = String(r.gV.ad.id),
                U = String(r.gV.md.id),
                B = String(r.gV.am.id),
                J = String(r.gV.uy.id),
                W = String(r.gV.do.id),
                K = String(r.gV.jp.id),
                Z = String(r.gV.pr.id),
                Q = String(r.gV.vi.id),
                X = String(r.gV.gu.id),
                Y = String(r.gV.mp.id),
                nn = String(r.gV.rs.id),
                tn = String(r.gV.tr.id),
                en = String(r.gV.pa.id),
                rn = String(r.gV.dz.id),
                on = String(r.gV.ec.id),
                sn = String(r.gV.sv.id),
                un = String(r.gV.tt.id),
                cn = String(r.gV.bn.id),
                an = String(r.gV.gt.id),
                ln = String(r.gV.mn.id),
                gn = String(r.gV.al.id),
                pn = String(r.gV.ng.id),
                fn = String(r.gV.me.id),
                dn = String(r.gV.lk.id),
                mn = String(r.gV.cr.id),
                yn = String(r.gV.mk.id),
                hn = String(r.gV.vn.id),
                bn = String(r.gV.pk.id),
                _n = String(r.gV.ba.id),
                vn = String(r.gV.uz.id),
                In = String(r.gV.br.id),
                Sn = String(r.gV.th.id),
                Cn = String(r.gV.bg.id),
                wn = String(r.gV.hr.id),
                En = String(r.gV.cy.id),
                Nn = String(r.gV.ee.id),
                On = String(r.gV.fi.id),
                Ln = String(r.gV.gr.id),
                kn = String(r.gV.lv.id),
                Pn = String(r.gV.lt.id),
                An = String(r.gV.lu.id),
                Rn = String(r.gV.my.id),
                Vn = String(r.gV.sk.id),
                Dn = String(r.gV.si.id),
                Tn = String(r.gV.mt.id),
                xn = String(r.gV.ie.id),
                Hn = String(r.gV.cl.id),
                qn = String(r.gV.il.id),
                $n = String(r.gV.li.id),
                Gn = String(r.gV.gh.id),
                zn = String(r.gV.kw.id),
                Mn = [x, d, H, q, w, L, m, Cn, wn, En, R, Nn, On, Ln, A, kn, Pn, An, E, k, V, Vn, Dn, P, Tn, xn, N],
                Fn = [O, a, $n]
        },
        36295: function(n, t, e) {
            "use strict";
            e.d(t, {
                _: function() {
                    return i
                }
            });
            var r = e(98403);

            function i(n) {
                return n.query ? .region_id || n.__req.headers[r.Z3.REGION]
            }
        },
        92718: function(n, t, e) {
            "use strict";
            e.d(t, {
                K: function() {
                    return i
                },
                w: function() {
                    return o
                }
            });
            var r = e(36295);
            const i = {
                private_policy_korea: [185],
                private_policy_oman: [152],
                private_policy_bahrain: [16],
                private_policy_jordan: [101],
                private_policy_qatar: [165],
                private_policy_malasia: [119]
            };

            function o() {
                return Object.keys(i).map((n => ({
                    ns: n,
                    filter: t => {
                        let {
                            context: e,
                            isNodeLess: o
                        } = t;
                        return !(!o && !e.isCSR) || i[n].includes(+(0, r._)(e))
                    }
                })))
            }
        },
        78505: function(n, t, e) {
            "use strict";
            e.d(t, {
                lw: function() {
                    return J
                },
                O4: function() {
                    return R
                },
                C$: function() {
                    return cn
                },
                gb: function() {
                    return w
                },
                VQ: function() {
                    return rn
                },
                Qh: function() {
                    return d
                },
                gr: function() {
                    return m
                },
                OZ: function() {
                    return z
                },
                d8: function() {
                    return D
                },
                a: function() {
                    return $
                },
                jF: function() {
                    return P
                },
                oM: function() {
                    return sn
                },
                D: function() {
                    return v
                },
                yF: function() {
                    return Q
                },
                CY: function() {
                    return K
                },
                q: function() {
                    return W
                },
                Dh: function() {
                    return N
                },
                Sq: function() {
                    return V
                },
                PV: function() {
                    return s
                },
                ix: function() {
                    return a
                },
                pr: function() {
                    return gn
                },
                m$: function() {
                    return l
                },
                yt: function() {
                    return G
                },
                B$: function() {
                    return I
                },
                pp: function() {
                    return nn
                },
                eY: function() {
                    return g
                },
                pP: function() {
                    return O
                },
                Nd: function() {
                    return L
                },
                GQ: function() {
                    return an
                },
                ry: function() {
                    return un
                },
                L: function() {
                    return on
                },
                TF: function() {
                    return C
                },
                Lp: function() {
                    return X
                },
                lW: function() {
                    return B
                },
                ww: function() {
                    return b
                },
                ye: function() {
                    return Z
                },
                ph: function() {
                    return U
                },
                $H: function() {
                    return tn
                },
                _5: function() {
                    return M
                },
                RK: function() {
                    return f
                },
                Zg: function() {
                    return S
                },
                zW: function() {
                    return u
                },
                Gy: function() {
                    return c
                },
                F_: function() {
                    return k
                },
                UJ: function() {
                    return _
                },
                a5: function() {
                    return p
                },
                U6: function() {
                    return Y
                },
                mv: function() {
                    return j
                },
                oc: function() {
                    return en
                },
                _p: function() {
                    return H
                },
                vW: function() {
                    return x
                },
                Ji: function() {
                    return A
                },
                VR: function() {
                    return y
                },
                V9: function() {
                    return h
                },
                rF: function() {
                    return E
                },
                JB: function() {
                    return T
                },
                z5: function() {
                    return q
                },
                R2: function() {
                    return F
                }
            });
            e(16280);
            var r = e(55106),
                i = e(98403);
            const o = ["113", "50", "90", "54", "32", "52", "167", "108", "64", "181", "114", "180", "68", "79", "96", "191", "20", "163", "141", "122"],
                s = {
                    ns: "mobile-bg-policy.terms-of-use-europe-v2-html",
                    regionIds: o
                },
                u = {
                    ns: "mobile-bg-policy.terms-of-use-europe-v2-html",
                    regionIds: ["162"],
                    version: "v2"
                },
                c = {
                    ns: "mobile-bg-policy.terms-of-use-poland-html",
                    regionIds: ["162"]
                },
                a = {
                    ns: "mobile-bg-policy.terms-of-use-france-html",
                    regionIds: ["69"]
                },
                l = {
                    ns: "mobile-bg-policy.terms-of-use-germany-v2-html",
                    regionIds: ["76"]
                },
                g = {
                    ns: "mobile-bg-policy.terms-of-use-italy-html",
                    regionIds: ["98"]
                },
                p = {
                    ns: "mobile-bg-policy.terms-of-use-spain-html",
                    regionIds: ["186"]
                },
                f = {
                    ns: "terms-of-use-europe-html",
                    regionIds: ["186", "98", "76", "69", "151", "162", ...o],
                    version: "v1"
                },
                d = {
                    ns: "terms-of-use-austria-html",
                    regionIds: ["13"],
                    version: "v1"
                },
                m = {
                    ns: "mobile-bg-policy.terms-of-use-austria-v2-html",
                    regionIds: ["13"]
                },
                y = {
                    ns: "terms-of-use-uk-html",
                    regionIds: ["210"],
                    version: "v1"
                },
                h = {
                    ns: "terms-of-use-uk_v2-html",
                    regionIds: ["210"]
                },
                b = {
                    ns: "terms-of-use-nz-v2-html",
                    regionIds: ["144"]
                },
                _ = {
                    ns: "mobile-bg-policy.terms-of-use-south-africa-html-v2",
                    regionIds: ["184"]
                },
                v = {
                    ns: "terms-of-use-columbia-html",
                    regionIds: ["45", "75", "126", "208", "5", "14", "102", "135"]
                },
                I = {
                    ns: "terms-of-use-iceland-html",
                    regionIds: ["91"],
                    version: "v1"
                },
                S = {
                    ns: "mobile-bg-policy.terms-of-use-peru-html",
                    regionIds: ["159"]
                },
                C = {
                    ns: "terms-of-use-moldova-html",
                    regionIds: ["130"]
                },
                w = {
                    ns: "terms-of-use-armenia-html",
                    regionIds: ["10"]
                },
                E = {
                    ns: "terms-of-use-uruguay-html",
                    regionIds: ["212"]
                },
                N = {
                    ns: "terms-of-use-dominica-html",
                    regionIds: ["57"]
                },
                O = {
                    ns: "terms-of-use-korea-html",
                    regionIds: ["185"],
                    version: "v1"
                },
                L = {
                    ns: "mobile-bg-policy.terms-of-use-korea-v2-html",
                    regionIds: ["185"]
                },
                k = {
                    ns: "terms-of-use-serbia-html",
                    regionIds: ["175", "156"]
                },
                P = {
                    ns: "mobile-bg-policy.terms-of-use-canada-v2-html",
                    regionIds: ["37"]
                },
                A = {
                    ns: "terms-of-use-turkey-html",
                    regionIds: ["203"]
                },
                R = {
                    ns: "terms-of-use-algeria-html",
                    regionIds: ["4"]
                },
                V = {
                    ns: "terms-of-use-ecuador-html",
                    regionIds: ["59", "61"]
                },
                D = {
                    ns: "terms-of-use-brazil-html",
                    regionIds: ["29"]
                },
                T = {
                    ns: "mobile-bg-policy.terms-of-use-us-html-v2",
                    regionIds: ["211", "164", "219", "83", "236"]
                },
                x = {
                    ns: "terms-of-use-trinidad-and-tobago-html",
                    regionIds: ["201"]
                },
                H = {
                    ns: "terms-of-use-thailand-html",
                    regionIds: ["197"]
                },
                q = {
                    ns: "terms-of-use-uzbekistan-html",
                    regionIds: ["213"]
                },
                $ = {
                    ns: "terms-of-use-brunei-html",
                    regionIds: ["31"]
                },
                G = {
                    ns: "terms-of-use-guatemala-html",
                    regionIds: ["84"]
                },
                z = {
                    ns: "terms-of-use-bosniaAndHerzegovina-html",
                    regionIds: ["26"]
                },
                M = {
                    ns: "terms-of-use-pakistan-html",
                    regionIds: ["153"]
                },
                F = {
                    ns: "terms-of-use-vietnam-html",
                    regionIds: ["217"]
                },
                j = {
                    ns: "terms-of-use-switzerland-html",
                    regionIds: ["192"],
                    version: "v1"
                },
                U = {
                    ns: "terms-of-use-montenegro-html",
                    regionIds: ["116"]
                },
                B = {
                    ns: "mobile-bg-policy.terms-of-use-montenegro-html-v2",
                    regionIds: ["134"]
                },
                J = {
                    ns: "terms-of-use-albania-html",
                    regionIds: ["3"]
                },
                W = {
                    ns: "terms-of-use-czech-html",
                    regionIds: ["53"],
                    version: "v1"
                },
                K = {
                    ns: "mobile-bg-policy.terms-of-use-czech-v2-html",
                    regionIds: ["53"]
                },
                Z = {
                    ns: "terms-of-use-nigeria-html",
                    regionIds: ["147"]
                },
                Q = {
                    ns: "terms-of-use-costaRica-html",
                    regionIds: ["49"]
                },
                X = {
                    ns: "terms-of-use-mongolia-html",
                    regionIds: ["132"]
                },
                Y = {
                    ns: "mobile-bg-policy.terms-of-use-sriLanka-html",
                    regionIds: ["187"]
                },
                nn = {
                    ns: "mobile-bg-policy.terms-of-use-iceland-html-v2",
                    regionIds: ["91"]
                },
                tn = {
                    ns: "mobile-bg-policy.terms-of-use-norway-html",
                    regionIds: ["151"]
                },
                en = {
                    ns: "mobile-bg-policy.terms-of-use-switzerland-html-v2",
                    regionIds: ["192"]
                },
                rn = {
                    ns: "terms-of-use-asian-html",
                    regionIds: ["128", "160"]
                },
                on = {
                    ns: "terms-of-use-middle-east-html",
                    regionIds: ["174", "209", "152", "16", "101", "165", "97", "119"]
                },
                sn = {
                    ns: "terms-of-use-chile-html",
                    regionIds: ["42"]
                },
                un = {
                    ns: "mobile-bg-policy.terms-of-use-kyrgyzstan-html",
                    regionIds: ["106"]
                },
                cn = {
                    ns: "mobile-bg-policy.terms-of-use-argentina-html",
                    regionIds: ["9"]
                },
                an = {
                    ns: "mobile-bg-policy.terms-of-use-kuwait-html",
                    regionIds: ["105"]
                },
                ln = [f, a, l, g, p, d, m, y, h, b, _, v, I, S, C, w, E, N, O, L, k, P, A, R, V, D, T, x, H, q, $, G, z, M, F, j, U, B, J, W, K, Z, Q, X, Y, nn, tn, en, s, u, c, rn, on, sn, un, an, cn];

            function gn() {
                (0, r.r)("mobile-bg-web-personal");
                const n = (0, r.c)("terms-of-use-version-config"),
                    t = n ? .versionConfigs;
                return (Array.isArray(t) ? ln.concat(t) : ln).map((n => ({
                    ns: n.ns,
                    filter: t => {
                        let {
                            context: e,
                            isNodeLess: r
                        } = t;
                        return !(!r && !e.isCSR) || n.regionIds.includes(function(n) {
                            return n.query ? .region_id || n.query ? .locale_override ? .split("~")[0] || n.__req.headers[i.Z3.REGION]
                        }(e)) && (!n.version || n.version === e.query ? .version)
                    }
                })))
            }
        },
        66378: function(n, t, e) {
            "use strict";
            e.d(t, {
                x: function() {
                    return r
                }
            });
            const r = [13, 20, 32, 50, 52, 53, 54, 64, 68, 69, 76, 79, 90, 96, 98, 108, 113, 114, 122, 141, 162, 163, 167, 180, 181, 186, 191]
        },
        13814: function(n, t, e) {
            "use strict";
            e.d(t, {
                T0: function() {
                    return s
                },
                _H: function() {
                    return u
                },
                jd: function() {
                    return i
                },
                wL: function() {
                    return o
                }
            });
            var r = e(41963);
            const i = {
                    requireLogin: !1,
                    title: () => "Temu",
                    pageProperty: {
                        pageSN: 22290,
                        pagePath: "/common-policy.html"
                    }
                },
                o = "mobile-bg-web-personal.common-policy",
                s = (0, r.a)(o),
                u = 54002
        },
        17165: function(n, t, e) {
            "use strict";
            e.d(t, {
                lE: function() {
                    return u
                },
                PV: function() {
                    return s
                },
                pr: function() {
                    return f
                },
                HB: function() {
                    return g
                },
                GQ: function() {
                    return a
                },
                Ji: function() {
                    return c
                },
                pN: function() {
                    return o
                },
                kf: function() {
                    return l
                }
            });
            e(16280);
            var r = e(55106),
                i = e(98403);
            const o = {
                    ns: "mobile-bg-policy.cookie-policy-html",
                    regionIds: ["211", "164", "219", "83", "236"]
                },
                s = {
                    ns: "cookie-policy-eu-html",
                    regionIds: ["210", "76", "69", "98", "141", "163", "79", "68", "20", "114", "13", "191", "192", "96", "64", "180", "181", "108", "167", "52", "53", "32", "54", "90", "50", "113", "151", "5", "122", "162", "186", "91", "112"]
                },
                u = {
                    ns: "mobile-bg-policy.cookie-policy-au-html",
                    regionIds: ["12"]
                },
                c = {
                    ns: "mobile-bg-policy.cookie-policy-tr-html",
                    regionIds: ["203"]
                },
                a = {
                    ns: "mobile-bg-policy.cookie-policy-kuwait-html",
                    regionIds: ["105"]
                },
                l = {
                    ns: "mobile-bg-policy.cookie-policy-za-html",
                    regionIds: ["37", "128", "208", "174", "209", "77", "184", "29", "197", "49", "57", "84", "159", "212", "119", "42", "100", "59", "147"]
                },
                g = {
                    ns: "mobile-bg-policy.cookie-policy-georgia-html",
                    regionIds: ["75"]
                },
                p = [o, s, u, c, l, a, g];

            function f() {
                (0, r.r)("mobile-bg-web-personal");
                const n = (0, r.c)("cookie-policy-version-config"),
                    t = n ? .versionConfigs;
                return (Array.isArray(t) ? p.concat(t) : p).map((n => ({
                    ns: n.ns,
                    filter: t => {
                        let {
                            context: e,
                            isNodeLess: r
                        } = t;
                        if (r || e.isCSR) return !0;
                        const o = function(n) {
                            return n.query ? .region_id || n.__req.headers[i.Z3.REGION]
                        }(e);
                        return n.regionIds.includes(o)
                    }
                })))
            }
        },
        42785: function(n, t, e) {
            "use strict";
            e.d(t, {
                VR: function() {
                    return o
                },
                pr: function() {
                    return c
                }
            });
            e(16280);
            var r = e(82930),
                i = e(18455);
            const o = {
                    ns: "digital-services-act-help-uk",
                    regionIds: [r.q]
                },
                s = [o],
                u = s.filter((n => !n.isDefault)).flatMap((n => n.regionIds));

            function c() {
                return s.map((n => ({
                    ns: n.ns,
                    filter: t => {
                        let {
                            context: e,
                            isNodeLess: r
                        } = t;
                        if (r || e.isCSR) return !0;
                        const o = (0, i._)(e);
                        return n.isDefault ? !u.includes(o) : n.regionIds.includes(o)
                    }
                })))
            }
        },
        82930: function(n, t, e) {
            "use strict";
            e.d(t, {
                S: function() {
                    return o
                },
                q: function() {
                    return i
                }
            });
            var r = e(56733);
            const i = String(r.gV.uk.id),
                o = [13, 20, 32, 50, 52, 53, 54, 64, 68, 69, 76, 79, 90, 96, 98, 108, 113, 114, 122, 141, 162, 163, 167, 180, 181, 186, 191]
        },
        18455: function(n, t, e) {
            "use strict";
            e.d(t, {
                _: function() {
                    return i
                }
            });
            var r = e(98403);

            function i(n) {
                return n.__req.headers[r.Z3.REGION]
            }
        },
        66681: function(n, t, e) {
            "use strict";
            e.d(t, {
                pr: function() {
                    return f
                },
                pN: function() {
                    return l
                },
                JB: function() {
                    return g
                }
            });
            e(16280);
            var r = e(56733);
            const i = String(r.gV.us.id),
                o = String(r.gV.pr.id),
                s = String(r.gV.vi.id),
                u = String(r.gV.gu.id),
                c = String(r.gV.mp.id);
            var a = e(17502);
            const l = {
                    ns: "privacy-policy-addendum-for-us-residents-html",
                    regionIds: [i, o, s, u, c],
                    version: "v1"
                },
                g = {
                    ns: "mobile-bg-policy.privacy-policy-addendum-for-us-residents-html-v2",
                    regionIds: [i, o, s, u, c]
                },
                p = [l, g];

            function f() {
                return p.map((n => ({
                    ns: n.ns,
                    filter: t => {
                        let {
                            context: e,
                            isNodeLess: r
                        } = t;
                        return !(!r && !e.isCSR) || n.regionIds.includes((0, a._)(e))
                    }
                })))
            }
        },
        17502: function(n, t, e) {
            "use strict";
            e.d(t, {
                _: function() {
                    return o
                },
                s: function() {
                    return s
                }
            });
            var r = e(98403),
                i = e(57646);

            function o(n) {
                return n.__req.headers[r.Z3.REGION]
            }

            function s(n, t, e, r) {
                const o = (0, i.s)(r, (n => "string" == typeof n ? n : n[e] || ""));
                return t.map((t => "string" == typeof t ? n(t, o) : "rawHtml" === t.type ? t.value : "")).join("")
            }
        },
        10614: function(n, t, e) {
            "use strict";
            e.d(t, {
                AR: function() {
                    return u
                },
                Bs: function() {
                    return a
                },
                PV: function() {
                    return o
                },
                Qh: function() {
                    return s
                },
                fq: function() {
                    return i
                },
                m$: function() {
                    return c
                },
                pr: function() {
                    return l
                }
            });
            e(16280);
            var r = e(16558);
            const i = {
                    ns: "mobile-bg-policy.summary-of-TOU-poland-html",
                    regionIds: ["162"]
                },
                o = {
                    ns: "summary-of-TOU-html",
                    regionIds: ["20", "32", "50", "52", "54", "64", "68", "79", "90", "96", "108", "113", "114", "122", "141", "163", "167", "180", "181", "191"]
                },
                s = {
                    ns: "summary-of-TOU-austria-html",
                    regionIds: ["13"]
                },
                u = {
                    ns: "summary-of-TOU-czech-republic-html",
                    regionIds: ["53"]
                },
                c = {
                    ns: "mobile-bg-policy.summary-of-TOU-germany-html",
                    regionIds: ["76", "69", "186", "98"]
                },
                a = [i, o, s, u, c];

            function l() {
                return a.map((n => ({
                    ns: n.ns,
                    filter: t => {
                        let {
                            context: e,
                            isNodeLess: i
                        } = t;
                        return !(!i && !e.isCSR) || n.regionIds.includes((0, r._)(e))
                    }
                })))
            }
        },
        16558: function(n, t, e) {
            "use strict";
            e.d(t, {
                _: function() {
                    return i
                }
            });
            var r = e(98403);

            function i(n) {
                return n.query ? .region_id || n.__req.headers[r.Z3.REGION] || n ? .localInfo ? .region
            }
        },
        36423: function(n, t, e) {
            e(25440);
            n.exports = {
                title: "Temu | Profile",
                pathPrefixWithoutSlash: "w",
                pathPrefix: "/w",
                homePath: "/",
                StaticRoute: {
                    Category: {
                        pagePath: "/w/shopping_category.html",
                        pageRegExp: ["^(?:/csr)?(?:/w)?/(?:\\w*-)*o1-(?<opt_id>\\d+)\\.html"]
                    },
                    CategoryThree: {
                        pagePath: "/w/category.html",
                        pageRegExp: ["^(?:/csr)?(?:/w)?/(?:\\w+-)+o(?:\\d+)-(?<opt_id>\\d+)\\.html"]
                    },
                    Result: {
                        pagePath: "/w/search_result.html",
                        pageRegExp: ["^(?:/csr)?(?:/w)?/(?<search_key>[\\w-]+)-s\\.html"]
                    }
                },
                DEFAULT_POLICY_NS_PREFIX: "mobile-bg-policy",
                transformParams: n => n && n.search_key ? { ...n,
                    search_key: n.search_key.replace(/-/g, " ")
                } : n
            }
        },
        96074: function(n, t, e) {
            "use strict";
            e.d(t, {
                Jm: function() {
                    return a
                },
                Su: function() {
                    return o
                },
                qi: function() {
                    return s
                },
                wu: function() {
                    return c
                },
                yp: function() {
                    return u
                }
            });
            e(44114), e(25440);
            const r = ["p_search", "p_rec", "pRec", "pSearch"];

            function i(n, t, e) {
                if (Array.isArray(t)) e = e || [], t.forEach((function(t, r) {
                    "object" == typeof t && null !== t ? e.push(i(n, t)) : null !== t && e.push(t)
                }));
                else {
                    e = e || {};
                    for (const o in t)
                        if (Object.prototype.hasOwnProperty.call(t, o)) {
                            if (r.includes(o)) {
                                e[n(o)] = "string" == typeof t[o] ? t[o] : JSON.stringify(t[o]);
                                continue
                            }
                            "object" == typeof t[o] && null !== t[o] ? e[n(o)] = i(n, t[o], Array.isArray(t[o]) ? [] : {}) : null !== t[o] && (e[n(o)] = t[o])
                        }
                }
                return e
            }

            function o(n) {
                return n.replace(/([A-Z])/g, (function(n, t) {
                    return "_" + t.toLowerCase()
                }))
            }

            function s(n, t) {
                return i(o, n, t)
            }

            function u(n) {
                return n.replace(/_(\w)/g, (function(n, t) {
                    return t.toUpperCase()
                }))
            }

            function c(n, t) {
                return i(u, n, t)
            }

            function a(n) {
                return "string" == typeof n ? n : JSON.stringify(n)
            }
        },
        80924: function(n, t, e) {
            "use strict";

            function r() {
                for (var n = arguments.length, t = new Array(n), e = 0; e < n; e++) t[e] = arguments[e];
                return 0 === t.length ? n => n : 1 === t.length ? t[0] : t.reduce(((n, t) => function() {
                    return n(t(...arguments))
                }))
            }
            e.d(t, {
                A: function() {
                    return r
                }
            })
        },
        90230: function(n, t, e) {
            "use strict";
            e.d(t, {
                L8: function() {
                    return f
                },
                N: function() {
                    return g
                },
                Vm: function() {
                    return l
                }
            });
            var r = e(14242),
                i = e(33514),
                o = e(95789),
                s = e(13852),
                u = e(94971),
                c = e(47739),
                a = e(29227);

            function l(n) {
                let {
                    onClose: t = () => {},
                    onSuccess: e = () => {},
                    loginScene: l,
                    ...g
                } = n;
                const p = +(0, u.Ri)("region"),
                    f = (0, o.A)(i.createElement(i.Suspense, null, i.createElement(c.Ay, (0, r.A)({
                        modalVisible: !0,
                        onCloseClick: () => {
                            f ? .(), t ? .()
                        },
                        regionId: p,
                        onSuccess: () => {
                            (0, a.ci)((0, s.rE)({
                                is_login_reload: "1"
                            }, location.href), null), e ? .()
                        },
                        loginScene: l
                    }, g))));
                return f
            }

            function g() {
                return {
                    errorCodeHandlers: {
                        40001: () => {}
                    }
                }
            }
            const p = n => {
                let t;
                if (Array.isArray(n) && n[0] instanceof Object) {
                    const {
                        status: e
                    } = n[0] ? .response || {};
                    switch (e) {
                        case 424:
                            t = 1;
                            break;
                        case 429:
                            t = 2
                    }
                }
                return t
            };

            function f(n) {
                return {
                    errorCodeHandlers: {
                        40001: function() {
                            for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
                            l({
                                onSuccess: () => {
                                    n ? .onSuccess ? n.onSuccess() : (0, a.Qw)()
                                },
                                onClose: () => {
                                    n ? .onClose ? n.onClose() : (0, a.Qw)("/")
                                },
                                loginScene: n ? .loginScene || p(e)
                            })
                        }
                    }
                }
            }
        },
        29227: function(n, t, e) {
            "use strict";
            e.d(t, {
                MJ: function() {
                    return c
                },
                Qw: function() {
                    return l
                },
                YU: function() {
                    return p
                },
                ci: function() {
                    return a
                },
                yQ: function() {
                    return g
                }
            });
            var r = e(50453),
                i = e(13852);

            function o(n, t) {
                (0, i.Xe)(t || window.location.href);
                const e = {};
                return Object.keys(e).length && (n = (0, i.rE)(e, n)), n
            }
            const s = {
                    hasLeave: !1
                },
                u = n => {
                    s.hasLeave = n
                };

            function c(n, t) {
                const {
                    disableRefreshOnReturn: e,
                    ...i
                } = t || {};
                return e && u(!1), n = o(n), r.Ay.uniformForward(n, i)
            }

            function a(n, t) {
                return r.Ay.replaceURL(n, t)
            }

            function l(n) {
                n = o(n), r.Ay.reload(n)
            }

            function g(n, t, e) {
                return r.Ay.back("string" == typeof n ? n : null, t, e)
            }
            const p = function() {
                let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                return n.startsWith("/") ? n : `/${n}`
            }
        },
        41963: function(n, t, e) {
            "use strict";
            e.d(t, {
                a: function() {
                    return r
                }
            });
            e(25440);
            const r = n => n.replace("mobile-bg-web-personal.", "")
        },
        57646: function(n, t, e) {
            "use strict";

            function r(n, t) {
                return Object.keys(n).reduce(((e, r) => (e[r] = t(n[r]), e)), {})
            }
            e.d(t, {
                s: function() {
                    return r
                }
            })
        },
        96707: function(n, t, e) {
            "use strict";
            e.d(t, {
                L: function() {
                    return o
                },
                w: function() {
                    return i
                }
            });
            e(16280);
            let r;
            const i = n => {
                    r = n
                },
                o = () => r ? .pageId
        },
        5220: function(n, t, e) {
            "use strict";
            e.d(t, {
                Pk: function() {
                    return c
                },
                WZ: function() {
                    return u
                },
                x6: function() {
                    return o
                },
                xQ: function() {
                    return i
                },
                yy: function() {
                    return s
                }
            });
            e(25440), e(16280), e(44114);
            var r = e(13852);
            const i = async n => {
                let {
                    loader: t,
                    errLoader: e
                } = n;
                try {
                    const {
                        default: n
                    } = await t();
                    return n
                } catch (n) {
                    const t = () => null;
                    if (e) {
                        const {
                            default: n
                        } = await e();
                        return n
                    }
                    return t
                }
            };

            function o(n, t) {
                if (!n) return t;
                try {
                    return JSON.parse(n) || t
                } catch (n) {
                    return t
                }
            }
            async function s(n) {
                await new Promise((t => setTimeout(t, n)))
            }
            const u = n => Number.isNaN(Number(n)) ? void 0 : Number(n);

            function c(n) {
                const t = Object.keys((0, r.Xe)(n)).filter((n => n.startsWith("_x_"))).reduce(((n, t) => ({ ...n,
                    [t]: void 0
                })), {});
                return (0, r.rE)(t, n)
            }
        },
        55106: function(n, t, e) {
            "use strict";
            e.d(t, {
                c: function() {
                    return u
                },
                r: function() {
                    return c
                }
            });
            var r = e(58156),
                i = e.n(r),
                o = (e(16280), e(34477));
            const s = {
                    leoNode: null,
                    projectName: ""
                },
                u = (n, t) => {
                    try {
                        return (n => i()(window, ["leoConfig", n]))(n)
                    } catch (n) {
                        (0, o.fL)(new Error(`custom read leo error: ${n.message}`))
                    }
                };

            function c(n) {
                if (!s.leoNode) {
                    if ("string" != typeof n || !n) throw new Error("projectName is string");
                    s.projectName = n
                }
            }
        },
        13657: function(n, t, e) {
            "use strict";
            e.d(t, {
                dD: function() {
                    return bn
                },
                LP: function() {
                    return k.LP
                },
                HF: function() {
                    return f
                },
                a3: function() {
                    return on
                },
                Pj: function() {
                    return k.Pj
                }
            });
            var r = e(33514),
                i = e(47116),
                o = e(14511),
                s = e(32485),
                u = e.n(s),
                c = e(97582),
                a = e(90837),
                l = e.n(a),
                g = e(34477);
            var p = function() {
                const [n, t] = (0, r.useState)(!0), [e, i] = (0, r.useState)(10), [o, s] = (0, r.useState)(!1), {
                    t: a
                } = (0, c.B)("global");
                return (0, r.useEffect)((() => {
                    ! function(n) {
                        try {
                            return sessionStorage.getItem(n)
                        } catch (n) {
                            return (0, g.fL)(n, {
                                error_message: "getSessionStorage error"
                            }), null
                        }
                    }("ErrorPageNotFirstRender") ? function(n, t) {
                        try {
                            sessionStorage.setItem(n, t)
                        } catch (n) {
                            (0, g.fL)(n, {
                                error_message: "setSessionStorage error"
                            })
                        }
                    }("ErrorPageNotFirstRender", "1") : (s(!0), t(!1), (() => {
                        let n = e;
                        const t = setInterval((() => {
                            n--, i(n), n <= 0 && (s(!1), clearInterval(t))
                        }), 1e3)
                    })())
                }), []), r.createElement("div", {
                    className: l().wrapper
                }, r.createElement("div", {
                    className: l().circle
                }), r.createElement("div", {
                    className: l().title
                }, a("loadErrorText")), r.createElement("div", {
                    className: u()(l().button, {
                        [l().disableClickButton]: e > 0 && !n
                    }),
                    onClick: () => {
                        o || (s(!0), location.reload())
                    }
                }, e > 0 && !n ? `${a("reload")}(${e}s)` : a("reload")))
            };

            function f(n, t) {
                let {
                    store: e
                } = n;
                return n => {
                    class s extends r.Component {
                        constructor() {
                            super(...arguments), this.state = {
                                hasError: !1
                            }
                        }
                        static createStore() {
                            return new e
                        }
                        componentDidMount() {
                            this.props.store.prepareClientData()
                        }
                        render() {
                            return r.createElement(n, this.props)
                        }
                    }
                    return s.displayName = `appProvider(${n.displayName||n.name})`, s.Store = e, s.pageConfig = { ...t
                    }, (0, o.W4)({
                        name: "App",
                        FallbackComponent: p
                    })((0, i.PA)(s))
                }
            }
            var d = e(43360),
                m = e(32370),
                y = e(28523),
                h = e(37451),
                b = e(13852),
                _ = e(82701);
            var v = e(36973),
                I = e(92717),
                S = e(47450),
                C = e(60512),
                w = e(96707),
                E = e(63560),
                N = e.n(E),
                O = e(4146),
                L = e.n(O),
                k = (e(86893), e(69834));
            var P = e(78505),
                A = e(98513),
                R = e(92718),
                V = e(77277),
                D = e(66681),
                T = e(42785);
            const x = ["/terms-of-use.html", "/bgp_terms_policy.html"],
                H = ["/privacy-and-cookie-policy.html", "/privacy-policy.html", "/bgp_private_policy.html"],
                q = ["/bgp_collect_information_explain.html"];
            e(44114), e(16280);
            const $ = [{
                ns: "collect-info-required-html",
                type: "collect_personal_information_required"
            }, {
                ns: "collect-info-for-advertising-html",
                type: "collect_personal_information_for_advertising_optional"
            }, {
                ns: "collect-info-for-marketing-html",
                type: "collect_personal_information_for_marketing_optional"
            }];
            var G = e(10614),
                z = e(17165),
                M = e(66378),
                F = e(98403);
            const j = [{
                ns: "mobile-bg-policy.bgp_transparency",
                regionIds: M.x
            }];
            var U = e(55106);
            var B = e(13814);
            const J = ["global", "bec-fe.web-ui", "bec-fe.bg-cui-empty", "bec-fe.chat", "bec-fe.account-dialog-pc", "bec-fe.web-layout", "bec-fe.bg-fun-web-widgets"],
                W = ["bec-fe.login-dialog"],
                K = ["form"],
                Z = [...J, "bgp_private_policy", "refund_popup", "private_policy_united_kingdom", ...(0, A.pr)(), ...(0, R.w)()],
                Q = [...J, "bgp_ip_policy", "refund_popup", ...(0, V.pr)()];
            var X = {
                defaultNS: "global",
                supportedLngs: ["en", "es", "fr", "de", "it", "es-ES", "ja", "ar", "pt", "ko", "sv", "nl", "pl", "cs", "pt-BR", "el", "he", "ro", "da", "fi", "sk", "nb", "hu", "lt", "hr", "bg", "lv", "et", "sl", "pt-US", "zu", "sr", "cnr", "is", "ca", "bs", "sq", "mk", "ru", "tr", "uk", "zh-TW", "fil", "kk", "ka", "ms", "az", "hy", "pt-PR", "pt-GU", "pt-MP", "pt-VI", "en-GB", "th", "zh-Hans", "zh-Hant", "uz", "vi", "ur", "si", "mn", "es-DE", "es-IT", "es-MA", "es-AD", "pt-IE", "es-FR", "es-GB", "es-CH", "pt-JP", "mt"],
                interpolation: {
                    escapeValue: !1
                },
                extraSumerNs: {
                    about_us: [...J, ...W, "about_us"],
                    bgp_account_pop: [...W, ...K, "bgp_account_pop", "global", "bec-fe.bg-cui-empty"],
                    bgp_account_security: [...J, ...W, ...K, "bgp_account_security", "bec-fe.tree-menu"],
                    bgp_close_account: [...J, "bgp_close_account", "bec-fe.tree-menu"],
                    bgp_footprint: [...J, ...W, "bec-fe.web-sku-selector", "footprint", "bec-fe.tree-menu"],
                    bgp_ip_policy: Q,
                    "w/bgp_ip_policy": Q,
                    "intellectual-property-policy": Q,
                    bgp_preferences: [...J, ...W, ...K, "bgp_notifications", "account_popup", "protocol_config", "bec-fe.tree-menu"],
                    "privacy-and-cookie-policy": Z,
                    "privacy-policy": Z,
                    bgp_private_policy: Z,
                    "w/bgp_private_policy": Z,
                    "return-and-refund-policy": [...J],
                    "shipping-info": [...J, "shipping_policy"],
                    "terms-of-use": [...J, "terms_policy", "terms_policy_america_1", "terms_policy_america_2", ...(0, P.pr)()],
                    "w/terms-of-use": [...J, "terms_policy", ...(0, P.pr)()],
                    careers: [...J, "careers", "bec-fe.tree-menu"],
                    "contact-us": [...J, ...W, "contact_us", "refund_popup"],
                    login: [...J, ...W, "login"],
                    bgp_user_profile: [...J, ...W, "bgp_user_profile", "bec-fe.tree-menu", "bec-fe.web-reviews"],
                    reset_password: [...J, ...W, "reset_password"],
                    bgp_law_enforcement_policy: [...J, "bgp_law_enforcement_policy"],
                    press: [...J, "press"],
                    "press-post": [...J, "press"],
                    "find-account-selector": [...J, "find-account-selector", "find-account-dialog", "form"],
                    "find-account": [...J, "find-account-selector", "find-account-dialog", "form"],
                    "find-account-result": [...J, "find-account-result", "find-account-dialog", "form"],
                    "change-region": [...J, "bec-fe.locale-switch", "change-region"],
                    "delivery-guarantee": [...J, "delivery-guarantee"],
                    "intellectual-property-complain": [...J, "intellectual-property-complain", "global"],
                    "privacy-policy-addendum-for-us-residents": [...(0, D.pr)()],
                    "digital-services-act-help": [...(0, T.pr)()],
                    bgp_collect_information_explain: [...$.map((n => ({
                        ns: n.ns,
                        filter: t => {
                            let {
                                context: e,
                                isNodeLess: r
                            } = t;
                            if (r || e.isCSR) return !0;
                            const {
                                query: i
                            } = e || {};
                            return !i.type || n.type === i.type
                        }
                    })))],
                    "summary-of-tou": [...(0, G.pr)()],
                    "cookie-and-similar-technologies-policy": [...(0, z.pr)()],
                    bgp_transparency: [...j.map((n => ({
                        ns: n.ns,
                        filter: t => {
                            let {
                                context: e,
                                isNodeLess: r
                            } = t;
                            if (r || e.isCSR) return !0;
                            const i = + function(n) {
                                return n.__req.headers[F.Z3.REGION]
                            }(e);
                            return n.regionIds.includes(i)
                        }
                    })))],
                    "common-policy": [... function() {
                        try {
                            (0, U.r)("mobile-bg-web-personal");
                            const n = (0, U.c)("commonPolicyConfig") || {};
                            return Object.entries(n).map((n => {
                                let [t, e] = n;
                                return e.filter((n => n.ns !== B.wL)).map((n => ({
                                    ns: n.ns,
                                    filter: e => {
                                        let {
                                            context: r,
                                            isNodeLess: i
                                        } = e;
                                        if (i || r.isCSR) return !0;
                                        return r.query ? .policy === t && (!!n.isDefault || n.regions ? .includes(+ function(n) {
                                            return n.__req.headers[F.Z3.REGION]
                                        }(r)))
                                    }
                                })))
                            })).flat()
                        } catch (n) {
                            return (0, g.fL)(new Error("common-policy generateNSFilter error!"), {
                                errorMsg: n ? .message,
                                full_url: location ? .href
                            }), []
                        }
                    }(), B.wL]
                },
                customLanguageDetector: n => {
                    let {
                        region: t,
                        language: e,
                        defaultResolvedLanguage: r,
                        req: i
                    } = n;
                    const o = i ? .query ? .language;
                    return (n => (n ? .url ? .split("?")[0], [...x, ...H, ...q].some((n => location.pathname.includes(n)))))(i) && o ? o : r
                }
            };
            async function Y(n) {
                (0, S.Om)();
                const {
                    Component: t
                } = n, e = t.pageConfig || {};
                window.__pmmPagePath = e.pageProperty ? .pagePath,
                    function(n) {
                        try {
                            const t = n.pageProperty ? .pv ? .keys;
                            if (!t) return;
                            const e = n.pageRegExp,
                                r = (0, b.Xe)(location.search);
                            if (e) {
                                const n = [].concat(e).concat(e.map((n => `/csr${n}`))).reduce(((n, t) => n || new d.A(t).exec(location.pathname)), null);
                                n && n.groups && Object.assign(r, { ...r,
                                    ...n.groups
                                })
                            }
                            const i = t.reduce(((n, t) => {
                                let e, i;
                                return "string" == typeof t ? (e = t, i = r[e]) : "object" == typeof t && (e = t.key, i = r[e], t.mapping && t.mapping.forEach((function(n) {
                                    null !== r[n] && (i = r[n])
                                })), null === i && null !== t.default && (i = t.default)), null !== e && null !== i && (n[e] = i), n
                            }), {});
                            if (delete n.pageProperty.pv, 0 === Object.keys(i).length) return;
                            n.pageProperty.extraPvParams = i, (0, _.As)(i)
                        } catch (n) {
                            setTimeout((() => {
                                (0, g.fL)(n)
                            }), 1e4)
                        }
                    }(e);
                const {
                    pageInfo: r
                } = await (0, v.K)(n, {
                    pmmAppInfo: window.pmmAppInfo,
                    ...e,
                    i18nConfig: X
                });
                (0, w.w)(r);
                const i = window.rawData || {};
                if (i.store) {
                    const n = window.__CHUNK_DATA__ || {};
                    Object.keys(n).forEach((t => {
                        ! function(n, t, e) {
                            const r = t.split(".");
                            r.pop();
                            const i = r.join(".");
                            (0, h.h5)((() => {
                                Object.entries(e || {}).forEach((t => {
                                    let [e, r] = t;
                                    i ? N()(n, `${i}.${e}`, r) : n[e] = r
                                }))
                            }))
                        }(i.store, t, n[t].data)
                    }));
                    const e = t.createStore(),
                        o = (0, I.b)({
                            pageInfo: r
                        });
                    o.localInfo = await (0, C.ON)(), e.fromJS(i.store, o), window.__INITIAL_PROPS__ = { ...window.rawData,
                        ...window.__INITIAL_PROPS__,
                        store: e
                    }
                }
            }
            window.Proxy || (0, h.jK)({
                useProxies: "never"
            });
            var nn = e(84222);
            const tn = n => {
                    const t = t => ((0, c.B)(["global", "bec-fe.login-dialog"]), r.createElement(i.Kq, t, r.createElement(n, t), r.createElement(nn.u, null))),
                        e = n.displayName || n.name;
                    return t.displayName = `withMobx(${e})`, L()(t, n), t
                },
                en = n => {
                    const t = t => r.createElement(r.Fragment, null, r.createElement(n, t), r.createElement(nn.u, null));
                    return t.displayName = `withPageWrapper(${n?.displayName||n?.name})`, L()(t, n), t
                };
            var rn = e(36423);
            const on = n => {
                const t = (0, m.o)({
                    Component: en(tn(n)),
                    getInitialProps: async t => {
                        const e = t.store = t.store || n.createStore(),
                            r = n ? .pageConfig || {},
                            {
                                pageRegExp: i
                            } = r;
                        if (i) {
                            const n = i.reduce(((n, e) => n || new d.A(e).exec(t.pathname)), null);
                            if (n && n.groups) {
                                const e = Object.getOwnPropertyDescriptor(t, "query").get;
                                Object.defineProperty(t, "query", {
                                    get() {
                                        return { ...e(),
                                            ...(0, rn.transformParams)(n.groups)
                                        }
                                    }
                                })
                            }
                        }
                        return await e.initData(t, r), t.__req ? .monitor ? .logFirstScreenDataLoad(), {
                            store: e
                        }
                    },
                    getChunkDataFetcher: async (t, e) => {
                        const r = t.store = t.store || window.__INITIAL_PROPS__ ? .store || n.createStore();
                        return r.getChunkDataFetcher ? .(t, e) || {}
                    },
                    ...n.pageConfig || {}
                });
                return {
                    page: t,
                    startClient: () => ((0, y.c)(), Y(t))
                }
            };
            var sn = e(96074),
                un = e(8515),
                cn = e(83735),
                an = e(5220);
            const ln = () => {
                const {
                    isNativePlatform: n
                } = (0, cn.tb)();
                return n
            };
            var gn = e(60839);
            const pn = n => 40001 === parseInt(n.errorCode, 10) || "needLogin" === n.errorMsg || "needLogin" === n.errorCode,
                fn = n => 54001 === parseInt(n.errorCode, 10),
                dn = n => {
                    if (["/login.html", "/w/login.html", "/web/login.html"].includes(window.location.pathname)) return n || {};
                    if (pn(n) || fn(n)) throw (0, gn.hd)({
                        tags: {
                            type: pn(n) ? gn.gm.LOGIN_ERROR : gn.gm.RISK_ERROR
                        }
                    }), n;
                    return n || {}
                };

            function mn(n) {
                5e4 !== n.errorCode && n.errorMsg && (0, un.A)(n.errorMsg)
            }

            function yn(n, t) {
                return t ? t(n) : {
                    error: dn(n)
                }
            }
            const hn = {
                $riskControlCrawler: null,
                lock: null
            };
            class bn {
                constructor(n, t) {
                    var e = this;
                    this.$axiosHttp = void 0, this.get = (n, t, e, r) => ((0, gn.hd)({
                        tags: {
                            url: n,
                            type: gn.gm.COMMON_GET
                        },
                        fields: t
                    }), this.$axiosHttp.get(n, {
                        params: t
                    }).then((n => {
                        const r = (0, sn.wu)(n);
                        return e ? e(r, t) : r
                    })).catch((n => yn(n, r)))), this.post = function(n) {
                        let {
                            useNativeAntiToken: t = !1,
                            useRawResponse: r = !1,
                            defaultErrorHandler: i = mn,
                            errorCodeHandlers: o,
                            useAntiToken: s = !1,
                            useResponseCamel: u = !0,
                            ...c
                        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, a = arguments.length > 2 ? arguments[2] : void 0, l = arguments.length > 3 ? arguments[3] : void 0, g = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
                        return (0, gn.hd)({
                            tags: {
                                url: n,
                                type: gn.gm.COMMON_POST
                            },
                            fields: c
                        }), e.$axiosHttp.post(n, c, {
                            useNativeAntiToken: t,
                            useRawResponse: r,
                            defaultErrorHandler: i,
                            errorCodeHandlers: o,
                            useAntiToken: s,
                            ...g
                        }).then((n => {
                            const t = u ? (0, sn.wu)(n) : n;
                            return a ? a(t, c) : t
                        })).catch((n => yn(n, l)))
                    }, this.baseGet = n => {
                        let {
                            url: t,
                            params: e,
                            format: r,
                            errorHandler: i
                        } = n;
                        return this.get(t, e, r, i)
                    }, this.basePost = n => {
                        let {
                            url: t,
                            params: e,
                            format: r,
                            errorHandler: i,
                            config: o
                        } = n;
                        return this.post(t, e, r, i, o)
                    }, this.postRisk = async n => {
                        let {
                            url: t,
                            params: e = {},
                            format: r,
                            errorHandler: i
                        } = n;
                        try {
                            return this.basePost({
                                url: t,
                                params: {
                                    useAntiToken: !0,
                                    ...e
                                },
                                format: r,
                                errorHandler: i
                            })
                        } catch (n) {
                            return Promise.reject(n)
                        }
                    }, this.getRisk = async n => {
                        let {
                            url: t,
                            params: e = {},
                            format: r,
                            errorHandler: i
                        } = n;
                        try {
                            return ln() ? e.useNativeAntiToken = !0 : e.anti_content = await this.getRiskInfo(), this.baseGet({
                                url: t,
                                params: e,
                                format: r,
                                errorHandler: i
                            })
                        } catch (n) {
                            return Promise.reject(n)
                        }
                    }, this.queryCartNum = () => this.postRisk({
                        url: "/api/bg/bg-uranus-api/uranus_cart/user_cart_num",
                        params: {
                            shipping_scene: 2
                        }
                    }).then((n => n ? .result ? .allAmountSum || 0)), this.queryRegionList = function() {
                        let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        return e.postRisk({
                            url: "/api/bg/huygens/region/list",
                            params: n
                        }).then((n => n ? .result ? .regions))
                    }, this.queryFooterData = function() {
                        let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        return e.baseGet({
                            url: "/api/bg/buffon/fuji/region/pay/icon",
                            params: n
                        }).then((n => n ? .supportedPayIconList || null))
                    }, this.$axiosHttp = n, this.addPlugins(t), ln() || this.initRiskControl()
                }
                addPlugins(n) {
                    const t = [];
                    t.push({
                        request: n => {
                            const t = (n.query, {});
                            return "get" === n.method ? n.params = Object.assign(t, n.params || {}) : n.data = Object.assign(t, n.data || {}), n
                        }
                    }), ((n, t) => {
                        t.forEach((t => {
                            n.interceptors.request.use(t.request), n.interceptors.response.use(t.response, t.responseError)
                        }))
                    })(this.$axiosHttp, t)
                }
                async initRiskControl() {
                    if (hn.lock) return hn.lock;
                    let n;
                    hn.lock = new Promise((t => {
                        n = t
                    }));
                    const [t, r] = await Promise.all([this.get("api/server/_stm", {
                        t: +new Date
                    }).then((n => n.serverTime)).catch((n => +new Date)), (0, an.xQ)({
                        loader: () => e.e(5403).then(e.bind(e, 76503))
                    })]);
                    hn.$riskControlCrawler = new r({
                        serverTime: t
                    }), n()
                }
                async getRiskInfo() {
                    return hn.$riskControlCrawler || await this.initRiskControl(), hn.$riskControlCrawler.messagePackSync ? .()
                }
                async queryMetaData() {
                    let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return this.basePost({
                        url: "/api/seo/get_page_seo_data",
                        params: n,
                        errorHandler: () => {}
                    }).then((n => n ? .result || null))
                }
                queryCreditBalance() {
                    return this.postRisk({
                        url: "/api/bg/buffon/asset/centre/balance",
                        params: {
                            errorCodeHandlers: {
                                40001: () => null
                            }
                        },
                        errorHandler: () => null
                    })
                }
                queryFeGrayConfig(n) {
                    return this.basePost({
                        url: "/api/firefly/exp-config",
                        params: n,
                        errorHandler: () => null
                    })
                }
            }
        },
        69834: function(n, t, e) {
            "use strict";
            e.d(t, {
                LP: function() {
                    return $
                },
                Pj: function() {
                    return G
                }
            });
            var r, i = e(33514),
                o = e(47116),
                s = e(13425),
                u = e(60055),
                c = (e(35639), e(13609), e(37451)),
                a = e(90230),
                l = e(7386),
                g = e(34643),
                p = e(41540);
            const f = Object.prototype.hasOwnProperty,
                d = "__ItemType__";
            let m = (r = class {
                static list() {
                    const n = c.sH.array([], {
                        deep: !1
                    });
                    return n[d] = this, n
                }
                constructor(n) {
                    this.getParent = void 0, this.setStoreData = (n, t) => {
                        this[n] = t
                    }, (0, c.Gn)(this), this.getParent = () => n
                }
                get $service() {
                    return this.$root.$service
                }
                get $parent() {
                    return this.getParent()
                }
                get $root() {
                    return this.$parent.$root || this.$parent
                }
                fromJS(n) {
                    return y(this, n, arguments.length > 1 && void 0 !== arguments[1] && arguments[1])
                }
                sendError(n) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                    return this.$root.sendError(n, t)
                }
            }, (0, u.A)(r.prototype, "$service", [c.EW], Object.getOwnPropertyDescriptor(r.prototype, "$service"), r.prototype), r);

            function y(n, t) {
                let e = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                return t && Object.keys(t) ? .forEach((r => {
                    if (f.call(t, r)) {
                        if (e && !(r in n)) return;
                        const i = n[r];
                        i instanceof m ? i.fromJS(t[r], e) : i instanceof Array && i.length && i[0] instanceof m ? n[r] = (t[r] || []).map((t => new i[0].constructor(n).fromJS(t, e))) : n[r] = i instanceof Array && d in i ? (t[r] || []).map((t => new i[d](n).fromJS(t, e))) : t[r]
                    }
                })), n
            }
            var h = e(37374),
                b = e(85015),
                _ = e.n(b),
                v = e(23546),
                I = e.n(v),
                S = (e(16280), e(97199)),
                C = e.n(S),
                w = e(34477);
            e(57747);

            function E(n) {
                I()(n) || (n = new Error(_()(n) ? n : JSON.stringify(n))),
                    function(n) {
                        if (!I()(n) && n && ["object", "number"].includes(typeof n.errorCode)) return;
                        const t = C().computeStackTrace(n);
                        (0, w.fL)(n, t)
                    }(n)
            }
            var N, O, L, k, P, A, R, V, D, T, x = e(70074);
            async function H(n, t, e) {
                if ("function" != typeof n) return Promise.all(Object.entries(n).map((async n => {
                    let [r, i] = n;
                    "function" == typeof i && (i = {
                        dump: !1,
                        loader: i
                    });
                    const o = i.loader,
                        s = await Promise.resolve(o(t, e));
                    (0, c.h5)((() => {
                        i.dump ? Object.assign(e, s) : e[r] = s
                    }))
                }))); {
                    const r = await n(t, e);
                    (0, c.h5)((() => Object.assign(e, r)))
                }
            }
            let q = function(n) {
                    return n.globalStyle = "global_style", n
                }({}),
                $ = (N = class {
                    constructor() {
                        this.$axiosHttp = void 0, this.$service = void 0, this.requestContext = void 0, this.$localInfo = void 0, this.extendHeaderData = {}, (0, s.A)(this, "abConfig", O, this), this.metaParams = void 0, this.openGoogleTranslate = void 0, (0, s.A)(this, "webpEnable", L, this), (0, s.A)(this, "headAndFootStaticConfigs", k, this), (0, s.A)(this, "menuData", P, this), (0, s.A)(this, "queryCommonConfigData", A, this), this.needHeaderData = !0, this.needActivityInfoData = !0, this.needTitleBar = !0, this.needSearchBar = !0, this.needCategory = !0, this.needUserInfo = !0, this.needSupport = !0, this.needRegion = !0, this.needShoppingCart = !0, this.userInfo = {}, this.userInfoPromise = void 0, (0, s.A)(this, "queryRegionData", R, this), this.needFootData = !0, this.categoryPromise = void 0, this.setStoreData = (n, t) => {
                            this[n] = t
                        }, this.hasOneLogin = !1, this.popLogin = n => {
                            if (this.hasOneLogin) return;
                            this.hasOneLogin = !0;
                            (0, a.Vm)({
                                onClose: () => {
                                    this.hasOneLogin = !1, n ? .onClose ? .()
                                },
                                onSuccess: () => {
                                    this.hasOneLogin = !1, n ? .onSuccess ? .()
                                },
                                axiosHttp: this.$axiosHttp
                            })
                        }, (0, s.A)(this, "queryABConfig", V, this), (0, s.A)(this, "webLayoutData", D, this), (0, s.A)(this, "queryLayoutData", T, this), (0, c.Gn)(this)
                    }
                    get homeLink() {
                        const n = this.webLayoutData ? .commonData ? .staticConfigs ? .homeLink ? .href ? ? "";
                        return n.endsWith("/") ? n.slice(0, n.length - 1) : n
                    }
                    initAxiosHttp(n) {
                        var t, e, r;
                        this.$axiosHttp = n.$axiosHttp, t = this, e = "requestContext", r = n, Object.defineProperty(t, e, {
                            value: r,
                            enumerable: !1,
                            configurable: !0,
                            writable: !0
                        })
                    }
                    initServices(n, t) {}
                    getDatasource() {
                        return []
                    }
                    async loadDatasource(n, t) {
                        return Array.isArray(n) ? n.reduce(((n, e) => n.then((() => H(e, t, this)))), Promise.resolve()) : H(n, t, this)
                    }
                    initData(n, t) {
                        this.initAxiosHttp(n), this.initServices(this.$axiosHttp, n);
                        const e = this.getDatasource();
                        return this.$localInfo = n.localInfo, this.webpEnable = n.isSupportWebp, this.metaParams = n.__req ? .$page ? .page ? .metaParams, Promise.all([this.loadDatasource(e, n), this.queryLayoutData(n, t), this.queryCommonConfigData(n)])
                    }
                    prepareClientData() {}
                    fromJS(n, t) {
                        const e = {},
                            r = n => n instanceof m,
                            i = n => n instanceof Array && n.length && n[0] instanceof m,
                            o = n => n instanceof Array && d in n;
                        if (n) {
                            for (const n in this) {
                                const t = this[n];
                                (r(t) || i(t) || o(t)) && (e[n] = t)
                            }
                            Object.assign(this, n)
                        }
                        for (const n in e) {
                            const t = e[n];
                            r(t) ? this[n] = t.fromJS(this[n]) : i(t) ? this[n] = (this[n] || []).map((n => new t[0].constructor(this).fromJS(n))) : o(t) && (this[n] = (this[n] || []).map((n => new t[d](this).fromJS(n))))
                        }
                        this.initAxiosHttp(t), this.initServices(this.$axiosHttp, t)
                    }
                    toJSON() {
                        return (0, c.HO)(this)
                    }
                    sendError(n) {
                        return E(n, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "", this.requestContext.__req)
                    }
                }, O = (0, u.A)(N.prototype, "abConfig", [c.sH], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: null
                }), (0, u.A)(N.prototype, "homeLink", [c.EW], Object.getOwnPropertyDescriptor(N.prototype, "homeLink"), N.prototype), L = (0, u.A)(N.prototype, "webpEnable", [c.sH], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return !1
                    }
                }), k = (0, u.A)(N.prototype, "headAndFootStaticConfigs", [c.sH], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return {}
                    }
                }), P = (0, u.A)(N.prototype, "menuData", [c.sH], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return []
                    }
                }), A = (0, u.A)(N.prototype, "queryCommonConfigData", [c.XI], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return async n => {
                            const t = await (0, p.k)(n, this.$axiosHttp),
                                e = (0, l.Ay)("commonConfigs", n.__res) || {},
                                r = (0, l.Ay)("open_google_translate", n.__res) || {};
                            let i = "",
                                o = !1;
                            try {
                                i = "object" == typeof window.__PageContext__ ? window.__PageContext__ ? .pagePath : "";
                                const t = i ? r[i] || r.all : null;
                                o = "A" === (0, x.M6)(t, n.cookies[g.e.ApiUid])
                            } catch (n) {
                                (0, w.fL)(n)
                            }(0, c.h5)((() => {
                                this.menuData = t, this.headAndFootStaticConfigs = e, this.openGoogleTranslate = o
                            }))
                        }
                    }
                }), R = (0, u.A)(N.prototype, "queryRegionData", [c.XI], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return async n => {
                            const {
                                currency: t,
                                region_id: e,
                                lang: r
                            } = n || {}, i = await this.$service.queryRegionList(), o = (i || []).findIndex((n => n ? .regionId === e));
                            let s = [],
                                u = "";
                            if (o >= 0) {
                                const n = i.splice(o, 1) || [],
                                    e = n[0] ? .supportedCurrencyList || [],
                                    c = n[0] ? .supportedLangList || [];
                                e.unshift(...e.splice(e.findIndex((n => n.currency === t)), 1)), c.unshift(...c.splice(c.findIndex((n => n.lang === r)), 1)), (n[0] || {}).defaultCurrency = e[0], (n[0] || {}).defaultLang = c[0], u = n[0] ? .imageUrl, s = n.concat(i)
                            }
                            return {
                                imageUrl: u,
                                regionList: s
                            }
                        }
                    }
                }), V = (0, u.A)(N.prototype, "queryABConfig", [c.XI], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        var n = this;
                        return async function() {
                            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [q.globalStyle];
                            const e = await n.$service.queryFeGrayConfig({
                                sceneList: t
                            });
                            if (e && e.success && e.result) return n.abConfig = e.result || {}, n.abConfig
                        }
                    }
                }), D = (0, u.A)(N.prototype, "webLayoutData", [c.sH], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return {}
                    }
                }), T = (0, u.A)(N.prototype, "queryLayoutData", [c.XI], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return async (n, t) => {
                            const {
                                pageSN: e
                            } = t ? .pageProperty || {}, r = await (0, h.T)(n, {
                                needActivityInfoData: this.needActivityInfoData,
                                needHeadData: this.needHeaderData,
                                needTitleBar: this.needTitleBar,
                                needSearchBar: this.needSearchBar,
                                needCategory: this.needCategory,
                                needFootData: this.needFootData,
                                extendHeaderData: this.extendHeaderData,
                                needUserInfo: this.needUserInfo,
                                needSupport: this.needSupport,
                                needRegion: this.needRegion,
                                needShoppingCart: this.needShoppingCart,
                                $axiosHttp: this.$axiosHttp,
                                getRiskInfo: this.$service ? .getRiskInfo ? .bind ? .(this.$service),
                                pageSn: e,
                                store: this
                            });
                            (0, c.h5)((() => {
                                this.webLayoutData = r
                            }))
                        }
                    }
                }), N);

            function G() {
                const {
                    store: n
                } = i.useContext(o.Db);
                return n || {}
            }
        },
        60839: function(n, t, e) {
            "use strict";
            e.d(t, {
                gm: function() {
                    return g
                },
                hd: function() {
                    return m
                }
            });
            var r = e(90179),
                i = e.n(r),
                o = e(69843),
                s = e.n(o),
                u = (e(16280), e(17376)),
                c = e(43266),
                a = e(34477),
                l = e(12600);
            let g = function(n) {
                return n.NEW_USER_POPUP = "NEW_USER_POPUP", n.NEW_USER_POPUP_CLOSE = "NEW_USER_POPUP_CLOSE", n.WEB_PUSH_POPUP = "WEB_PUSH_POPUP", n.COMMENT_POPUP = "COMMENT_POPUP", n.REC_CALL = "REC_CALL", n.REC_EMPTY_CALL = "REC_EMPTY_CALL", n.REC_FAIL_CALL = "REC_FAIL_CALL", n.COMMON_GET = "COMMON_GET", n.COMMON_POST = "COMMON_POST", n.CATEGORY_1_PV = "CATEGORY_1_PV", n.CATEGORY_2_PV = "CATEGORY_2_PV", n.CATEGORY_UNDEFINED_PV = "CATEGORY_UNDEFINED_PV", n.FILTER_SELECT_CLICK = "FILTER_SELECT_CLICK", n.FILTER_MORE_CLICK = "FILTER_MORE_CLICK", n.FILTER_CLICK = "FILTER_CLICK", n.CATEGORY_2_ICON_CLICK = "CATEGORY_2_ICON_CLICK", n.CATEGORY_3_ICON_CLICK = "CATEGORY_3_ICON_CLICK", n.UNBINDED_AND_NOT_LOGIN = "UNBINDED_AND_NOT_LOGIN", n.UNBINDED_AND_LOGIN = "UNBINDED_AND_LOGIN", n.BINDED_AND_LOGIN_AND_NOT_SAME_EMAI = "BINDED_AND_LOGIN_AND_NOT_SAME_EMAI", n.BINDED_AND_LOGIN_AND_SAME_EMAIl = "BINDED_AND_LOGIN_AND_SAME_EMAIl", n.BINDED_AND_NOT_LOGIN = "BINDED_AND_NOT_LOGIN", n.LOGIN_ERROR = "LOGIN_ERROR", n.RISK_ERROR = "RISK_ERROR", n
            }({});
            const p = {
                    200004: {
                        type: g.NEW_USER_POPUP,
                        tagMap: ["op", "page_el_sn"]
                    },
                    200005: {
                        type: g.NEW_USER_POPUP_CLOSE,
                        tagMap: ["op", "page_el_sn"]
                    },
                    202366: {
                        type: g.FILTER_CLICK,
                        tagMap: ["op", "page_el_sn"]
                    }
                },
                f = () => {};
            const d = new class {
                    constructor(n) {
                        var t = this;
                        let {
                            groupId: e,
                            appId: r,
                            bizSide: o,
                            config: l = {}
                        } = n;
                        if (this.groupId = void 0, this.appId = void 0, this.bizSide = void 0, this.config = {}, this.defaultTag = void 0, this.initDefaultTag = () => {
                                this.defaultTag = (0, u.cv)() || {}
                            }, this.errorLogger = n => {
                                0
                            }, this.validCoreParams = () => !!(this.groupId && this.appId && this.bizSide) || (this.errorLogger(new Error(`(groupId:${this.groupId},appId:${this.appId},bizSide:${this.bizSide})customTracking core param lose!`)), !1), this.customTracking = function() {
                                let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                try {
                                    0,
                                    t.defaultTag || t.initDefaultTag();
                                    const e = n ? .tags || {},
                                        r = n ? .fields || {},
                                        o = n ? .longFields || {},
                                        s = n ? .excludeFields || [];
                                    if (!e.type) return void t.errorLogger(new Error(`tag:${JSON.stringify(e)},field:${JSON.stringify(r)},longFields:${JSON.stringify(o)}:type key not exist`));
                                    const u = [{
                                        groupId: t.groupId,
                                        amplifyRate: 1,
                                        tags: { ...e,
                                            ...t.defaultTag || {}
                                        },
                                        fields: i()(r, s),
                                        longFields: o
                                    }];setTimeout((() => {
                                        (0, c.Ez)(u, {
                                            groupId: t.groupId,
                                            appId: t.appId,
                                            bizSide: t.bizSide
                                        })
                                    }), 0)
                                }
                                catch (n) {
                                    (0, a.fL)(n)
                                }
                            }, this.elSn2CustomTracking = n => {
                                try {
                                    0;
                                    const t = this.config ? .elSn2CustomConfig ? .[n ? .page_el_sn];
                                    if (!t) return;
                                    for (const e of t.tagMap || [])
                                        if (!e || s()(n ? .[e])) return void this.errorLogger(new Error(`param(${JSON.stringify(n)}) loss tag ${e}`));
                                    const e = (t ? .tagMap || []).reduce(((t, e) => (e && (t[e] = n[e]), t)), {});
                                    e.type = t.type, this.customTracking({
                                        tags: e,
                                        fields: n
                                    })
                                } catch (n) {
                                    (0, a.fL)(n)
                                }
                            }, this.groupId = e, this.appId = r, this.bizSide = o, this.config = l, !this.validCoreParams()) return this.customTracking = f, void(this.elSn2CustomTracking = f)
                    }
                }({
                    appId: l.sZ,
                    groupId: l.Iw,
                    bizSide: "consumer-platform-fe",
                    config: {
                        elSn2CustomConfig: p,
                        customConfig: {}
                    }
                }),
                {
                    customTracking: m,
                    elSn2CustomTracking: y
                } = d
        },
        12600: function(n, t, e) {
            "use strict";
            e.d(t, {
                $b: function() {
                    return c
                },
                Iw: function() {
                    return s
                },
                Wf: function() {
                    return u
                },
                XD: function() {
                    return i
                },
                oV: function() {
                    return r
                },
                sZ: function() {
                    return o
                }
            });
            const r = "__pft",
                i = "Custom",
                o = "100705",
                s = 90735,
                u = {
                    appId: o,
                    testAppId: "100646",
                    bizSide: "consumer-platform-fe"
                };
            let c = function(n) {
                return n[n.core = 0] = "core", n[n.checkpoint = 1] = "checkpoint", n[n.action = 2] = "action", n[n.normal = 3] = "normal", n
            }({})
        },
        50477: function() {}
    }
]);
//# sourceMappingURL=http://temudebug.com/sourcemaps/assets/modernjs/8300_f61a602539cbb0927bc4.js.map