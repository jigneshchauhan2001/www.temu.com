/**
 * Copyright (c) 2023 Apple Inc. All rights reserved.
 * 
 * # Sign In with Apple License
 * 
 * **IMPORTANT:** This Sign In with Apple software is supplied to you by Apple Inc. ("Apple") in consideration of your agreement to the following terms, and your use, reproduction, or installation of this Apple software constitutes acceptance of these terms. If you do not agree with these terms, please do not use, reproduce or install this Apple software.
 * 
 * This software is licensed to you only for use with Sign In with Apple that you are authorized or legally permitted to embed or display on your website.
 *
 * The Sign In with Apple software is only licensed and intended for the purposes set forth above and may not be used for other purposes or in other contexts without Apple's prior written permission. For the sake of clarity, you may not and agree not to or enable others to, modify or create derivative works of the Sign In with Apple software.
 *
 * You may only use the Sign In with Apple software if you are enrolled in the Apple Developer Program.
 * 
 * Neither the name, trademarks, service marks or logos of Apple Inc. may be used to endorse or promote products, services without specific prior written permission from Apple. Except as expressly stated in this notice, no other rights or licenses, express or implied, are granted by Apple herein.
 * 
 * The Sign In with Apple software software is provided by Apple on an "AS IS" basis. APPLE MAKES NO WARRANTIES, EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION THE IMPLIED WARRANTIES OF NON-INFRINGEMENT, MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE, REGARDING THE SIGN IN WITH APPLE SOFTWARE OR ITS USE AND OPERATION ALONE OR IN COMBINATION WITH YOUR PRODUCTS, SYSTEMS, OR SERVICES.  APPLE DOES NOT WARRANT THAT THE SIGN IN WITH APPLE SOFTWARE WILL MEET YOUR REQUIREMENTS, THAT THE OPERATION OF THE SIGN IN WITH APPLE SOFTWARE WILL BE UNINTERRUPTED OR ERROR-FREE, THAT DEFECTS IN THE SIGN IN WITH APPLE SOFTWARE WILL BE CORRECTED, OR THAT THE SIGN IN WITH APPLE SOFTWARE WILL BE COMPATIBLE WITH FUTURE APPLE PRODUCTS, SOFTWARE OR SERVICES. NO ORAL OR WRITTEN INFORMATION OR ADVICE GIVEN BY APPLE OR AN APPLE AUTHORIZED REPRESENTATIVE WILL CREATE A WARRANTY.
 * 
 * IN NO EVENT SHALL APPLE BE LIABLE FOR ANY DIRECT, SPECIAL, INDIRECT, INCIDENTAL OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) RELATING TO OR ARISING IN ANY WAY OUT OF THE USE, REPRODUCTION, OR INSTALLATION, OF THE SIGN IN WITH APPLE SOFTWARE BY YOU OR OTHERS, HOWEVER CAUSED AND WHETHER UNDER THEORY OF CONTRACT, TORT (INCLUDING NEGLIGENCE), STRICT LIABILITY OR OTHERWISE, EVEN IF APPLE HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGE. SOME JURISDICTIONS DO NOT ALLOW THE LIMITATION OF LIABILITY FOR PERSONAL INJURY, OR OF INCIDENTAL OR CONSEQUENTIAL DAMAGES, SO THIS LIMITATION MAY NOT APPLY TO YOU. In no event shall Apple's total liability to you for all damages (other than as may be required by applicable law in cases involving personal injury) exceed the amount of fifty dollars ($50.00). The foregoing limitations will apply even if the above stated remedy fails of its essential purpose.
 * 
 * **ACKNOWLEDGEMENTS:**
 * https://appleid.cdn-apple.com/appleauth/static/jsapi/appleid/1/acknowledgements.txt
 * 
 * v1.5.5
 */

! function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t((e = e || self).AppleID = {})
}(this, function(e) {
    "use strict";

    function t(e, t, i) {
        return t in e ? Object.defineProperty(e, t, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = i, e
    }
    var i, o = function(e) {
            return "[object Array]" === Object.prototype.toString.call(e)
        },
        n = function(e, t) {
            var i = "string" == typeof e ? document.getElementById(e) : e;
            if (null !== i) return i.innerHTML = t, i
        },
        A = function(e, t) {
            var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
            ("string" == typeof t || o(t)) && (i = t, t = {}), i || (i = "");
            var n = "";
            for (var A in t) void 0 !== t[A] && t.hasOwnProperty(A) && (n += " " + A + '="' + t[A] + '"');
            return o(i) && (i = i.join("")), "<" + e + n + ">" + i + "</" + e + ">"
        },
        r = function(e) {
            var t = "";
            for (var i in e) e[i] && e.hasOwnProperty(i) && (t += " " + i + ": " + e[i] + ";");
            return t
        },
        l = function(e) {
            return "number" != typeof e || isNaN(e) ? "100%" : Math.floor(e) + "px"
        },
        d = function(e) {
            var t = e.color,
                i = e.borderRadius,
                o = void 0 === i ? 15 : i,
                n = e.border,
                d = void 0 !== n && n,
                c = e.width,
                h = void 0 === c ? "100%" : c,
                s = e.height,
                g = void 0 === s ? "100%" : s,
                u = e.isSquare,
                f = void 0 !== u && u;
            return A("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                style: r({
                    overflow: "visible"
                }),
                width: l(h),
                height: l(g),
                viewBox: f ? "0 0 50 50" : void 0,
                preserveAspectRatio: f ? "xMidYMin meet" : void 0
            }, A("rect", {
                width: l(h),
                height: l(g),
                ry: "".concat(o, "%"),
                fill: a(t),
                stroke: d ? "black" : void 0,
                "stroke-width": d ? "1" : void 0,
                "stroke-linecap": d ? "round" : void 0
            }))
        },
        c = function(e) {
            return "black" === e ? "#fff" : "#000"
        },
        a = function(e) {
            return "black" === e ? "#000" : "#fff"
        },
        h = {
            "sign-in": {
                text: "Sign in with Apple",
                centerAlignBoundingBox: {
                    x: 0,
                    y: -11,
                    width: 111.046875,
                    height: 14
                },
                leftAlignBoundingBox: {
                    x: 0,
                    y: -12,
                    width: 106.53125,
                    height: 15
                },
                fontFamily: "applied-button-font-0",
                rtl: !1,
                letterSpacing: "-.022em"
            },
            continue: {
                text: "Continue with Apple",
                centerAlignBoundingBox: {
                    x: 0,
                    y: -11,
                    width: 123.6875,
                    height: 14
                },
                leftAlignBoundingBox: {
                    x: 0,
                    y: -12,
                    width: 120.25,
                    height: 15
                },
                fontFamily: "applied-button-font-0",
                rtl: !1,
                letterSpacing: "-.022em"
            },
            "sign-up": {
                text: "Sign up with Apple",
                centerAlignBoundingBox: {
                    x: 0,
                    y: -11,
                    width: 115.40625,
                    height: 14
                },
                leftAlignBoundingBox: {
                    x: 0,
                    y: -12,
                    width: 111.25,
                    height: 15
                },
                fontFamily: "applied-button-font-0",
                rtl: !1,
                letterSpacing: "-.022em"
            }
        },
        s = function(e) {
            return h
        },
        g = function(e) {
            var t = e.color,
                i = void 0 === t ? "black" : t,
                o = e.type,
                n = void 0 === o ? "sign-in" : o,
                a = e.border,
                h = void 0 !== a && a,
                g = e.width,
                u = e.height,
                f = e.borderRadius,
                p = (e.locale, s()[n]),
                v = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "black",
                        i = s()[e],
                        o = i.text,
                        n = i.rtl,
                        A = i.fontFamily,
                        r = i.centerAlignBoundingBox,
                        l = r.width,
                        d = r.height,
                        a = r.y,
                        h = r.x;
                    return '\n  <svg xmlns="http://www.w3.org/2000/svg" style="pointer-events: none; overflow: visible;" width="100%" height="100%">\n    <g>\n      <svg xmlns="http://www.w3.org/2000/svg" style="overflow: visible;" width="100%" height="50%" y="25%" viewBox="'.concat(h, " ").concat(a, " ").concat(l, " ").concat(d, '" fill="').concat(c(t), '">\n        <defs>\n          <style>\n            ').concat('\n  @font-face {\n    font-family: "applied-button-font-0";\n    src: url(data:application/x-font-woff;charset=utf-8;base64,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) format("woff")\n  }', '\n          </style>\n        </defs>\n        <text font-size="12px" ').concat("0em" !== i.letterSpacing ? 'textLength="'.concat(l, '"') : "", ' font-family="').concat(A, '" direction="').concat(n ? "rtl" : "ltr", '"> ').concat(o, "</text>\n      </svg>\n    </g>\n  </svg>\n  ")
                }(n, i),
                w = r({
                    "font-synthesis": "none",
                    "-moz-font-feature-settings": "kern",
                    "-webkit-font-smoothing": "antialiased",
                    "-moz-osx-font-smoothing": "grayscale",
                    width: l(g),
                    height: l(u),
                    "min-width": "130px",
                    "max-width": "375px",
                    "min-height": "30px",
                    "max-height": "64px",
                    position: "relative",
                    "letter-spacing": "initial"
                });
            return A("div", {
                style: w,
                role: "button",
                tabindex: "0",
                "aria-label": p.text
            }, "\n    ".concat(A("div", {
                style: r({
                    "padding-right": "8%",
                    "padding-left": "8%",
                    position: "absolute",
                    "box-sizing": "border-box",
                    width: "100%",
                    height: "100%"
                })
            }, v), "\n    ").concat(A("div", {
                style: r({
                    padding: h ? "1px" : void 0,
                    width: "100%",
                    height: "100%",
                    "box-sizing": "border-box"
                })
            }, d({
                color: i,
                borderRadius: f,
                border: h
            })), "\n    "))
        },
        u = [],
        f = [],
        p = function(e, t) {
            var i = u.indexOf(e);
            if (i >= 0) {
                var o = f[i];
                if (o) return o[t]
            }
        },
        v = function(e, t, i) {
            var o = u.indexOf(e);
            if (o < 0) {
                var n = {};
                n[t] = i, u.push(e), f.push(n)
            } else f[o] || (f[o] = {}), f[o][t] = i
        },
        w = [],
        C = !1,
        b = function(e) {
            if (null === e) return null;
            var t = e.getBoundingClientRect();
            return {
                width: t.width,
                height: t.height
            }
        },
        x = function(e) {
            return e.contentBoxSize ? {
                width: e.contentBoxSize.inlineSize,
                height: e.contentBoxSize.blockSize
            } : {
                width: e.contentRect.width,
                height: e.contentRect.height
            }
        },
        B = function(e) {
            var t, i, o = p(e, "lastScheduleResizeCheckSize"),
                n = o || b(e),
                A = p(e, "lastKnownSize");
            A && (i = n, (t = A).width === i.width && t.height === i.height) || (p(e, "resizeCallback")(n), v(e, "lastKnownSize", n));
            v(e, "resizeCheckIsScheduled", !1)
        },
        z = function(e, t) {
            v(e, "lastScheduleResizeCheckSize", t), p(e, "resizeCheckIsScheduled") || (v(e, "resizeCheckIsScheduled", !0), "function" == typeof requestAnimationFrame ? window.requestAnimationFrame(function() {
                B(e)
            }) : setTimeout(function() {
                B(e)
            }, 1e3 / 60))
        },
        m = function(e, t) {
            v(e, "resizeCallback", t), p(e, "isObserved") || (v(e, "isObserved", !0), "undefined" != typeof ResizeObserver ? (i || (i = new ResizeObserver(function(e) {
                var t = !0,
                    i = !1,
                    o = void 0;
                try {
                    for (var n, A = e[Symbol.iterator](); !(t = (n = A.next()).done); t = !0) {
                        var r = n.value;
                        z(r.target, x(r))
                    }
                } catch (e) {
                    i = !0, o = e
                } finally {
                    try {
                        t || null == A.return || A.return()
                    } finally {
                        if (i) throw o
                    }
                }
            })), i.observe(e)) : C || (window.addEventListener("resize", function() {
                w.forEach(function(e) {
                    return z(e)
                })
            }), "undefined" != typeof MutationObserver && new MutationObserver(function() {
                w.forEach(function(e) {
                    return z(e)
                })
            }).observe(document, {
                attributes: !0,
                childList: !0,
                characterData: !0,
                subtree: !0
            }), C = !0), w.push(e))
        },
        M = {
            small: {
                height: 44,
                width: 24,
                logoWidth: 12,
                path: "M12.2337427,16.9879688 C12.8896607,16.9879688 13.7118677,16.5445313 14.2014966,15.9532812 C14.6449341,15.4174609 14.968274,14.6691602 14.968274,13.9208594 C14.968274,13.8192383 14.9590357,13.7176172 14.9405591,13.6344727 C14.2107349,13.6621875 13.3330982,14.1241016 12.8065162,14.7430664 C12.3907935,15.2142188 12.012024,15.9532812 12.012024,16.7108203 C12.012024,16.8216797 12.0305005,16.9325391 12.0397388,16.9694922 C12.0859302,16.9787305 12.1598365,16.9879688 12.2337427,16.9879688 Z M9.92417241,28.1662891 C10.8202857,28.1662891 11.2175318,27.5658008 12.3353638,27.5658008 C13.4716724,27.5658008 13.721106,28.1478125 14.7188404,28.1478125 C15.6980982,28.1478125 16.3540162,27.2424609 16.972981,26.3555859 C17.6658521,25.339375 17.9522388,24.3416406 17.9707154,24.2954492 C17.9060474,24.2769727 16.0306763,23.5101953 16.0306763,21.3576758 C16.0306763,19.491543 17.5088013,18.6508594 17.5919459,18.5861914 C16.612688,17.1819727 15.1253248,17.1450195 14.7188404,17.1450195 C13.6194849,17.1450195 12.7233716,17.8101758 12.1598365,17.8101758 C11.5501099,17.8101758 10.7463794,17.1819727 9.79483648,17.1819727 C7.98413335,17.1819727 6.14571538,18.6785742 6.14571538,21.5054883 C6.14571538,23.2607617 6.8293482,25.1176563 7.67003179,26.3186328 C8.39061773,27.3348438 9.01882085,28.1662891 9.92417241,28.1662891 Z"
            },
            medium: {
                height: 44,
                width: 31,
                logoWidth: 17,
                path: "M15.7099491,14.8846154 C16.5675461,14.8846154 17.642562,14.3048315 18.28274,13.5317864 C18.8625238,12.8312142 19.2852829,11.852829 19.2852829,10.8744437 C19.2852829,10.7415766 19.2732041,10.6087095 19.2490464,10.5 C18.2948188,10.5362365 17.1473299,11.140178 16.4588366,11.9494596 C15.9152893,12.56548 15.4200572,13.5317864 15.4200572,14.5222505 C15.4200572,14.6671964 15.4442149,14.8121424 15.4562937,14.8604577 C15.5166879,14.8725366 15.6133185,14.8846154 15.7099491,14.8846154 Z M12.6902416,29.5 C13.8618881,29.5 14.3812778,28.714876 15.8428163,28.714876 C17.3285124,28.714876 17.6546408,29.4758423 18.9591545,29.4758423 C20.2395105,29.4758423 21.0971074,28.292117 21.9063891,27.1325493 C22.8123013,25.8038779 23.1867451,24.4993643 23.2109027,24.4389701 C23.1263509,24.4148125 20.6743484,23.4122695 20.6743484,20.5979021 C20.6743484,18.1579784 22.6069612,17.0588048 22.7156707,16.974253 C21.4353147,15.1382708 19.490623,15.0899555 18.9591545,15.0899555 C17.5217737,15.0899555 16.3501271,15.9596313 15.6133185,15.9596313 C14.8161157,15.9596313 13.7652575,15.1382708 12.521138,15.1382708 C10.1536872,15.1382708 7.75,17.0950413 7.75,20.7911634 C7.75,23.0861411 8.64383344,25.513986 9.74300699,27.0842339 C10.6851558,28.4129053 11.5065162,29.5 12.6902416,29.5 Z"
            },
            large: {
                height: 44,
                width: 39,
                logoWidth: 21,
                path: "M19.8196726,13.1384615 C20.902953,13.1384615 22.2608678,12.406103 23.0695137,11.4296249 C23.8018722,10.5446917 24.3358837,9.30883662 24.3358837,8.07298156 C24.3358837,7.9051494 24.3206262,7.73731723 24.2901113,7.6 C23.0847711,7.64577241 21.6353115,8.4086459 20.7656357,9.43089638 C20.0790496,10.2090273 19.4534933,11.4296249 19.4534933,12.6807374 C19.4534933,12.8638271 19.4840083,13.0469167 19.4992657,13.1079466 C19.5755531,13.1232041 19.6976128,13.1384615 19.8196726,13.1384615 Z M16.0053051,31.6 C17.4852797,31.6 18.1413509,30.6082645 19.9875048,30.6082645 C21.8641736,30.6082645 22.2761252,31.5694851 23.923932,31.5694851 C25.5412238,31.5694851 26.6245041,30.074253 27.6467546,28.6095359 C28.7910648,26.9312142 29.2640464,25.2834075 29.2945613,25.2071202 C29.1877591,25.1766052 26.0904927,23.9102352 26.0904927,20.3552448 C26.0904927,17.2732359 28.5316879,15.8848061 28.6690051,15.7780038 C27.0517133,13.4588684 24.5952606,13.3978385 23.923932,13.3978385 C22.1082931,13.3978385 20.6283185,14.4963764 19.6976128,14.4963764 C18.6906198,14.4963764 17.36322,13.4588684 15.7917006,13.4588684 C12.8012365,13.4588684 9.765,15.9305785 9.765,20.5993643 C9.765,23.4982835 10.8940528,26.565035 12.2824825,28.548506 C13.4725652,30.2268277 14.5100731,31.6 16.0053051,31.6 Z"
            }
        },
        y = function(e, t, i, o) {
            var n = M[e],
                r = (n.width - n.logoWidth) / 2;
            return A("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                height: l(o),
                width: l(i),
                viewBox: "".concat(r, " 0 ").concat(n.logoWidth, " ").concat(n.height)
            }, A("g", {
                stroke: "none",
                "stroke-width": "1",
                fill: "none",
                "fill-rule": "evenodd"
            }, A("path", {
                fill: c(t),
                "fill-rule": "nonzero",
                d: n.path
            })))
        },
        E = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "black",
                i = arguments.length > 3 ? arguments[3] : void 0,
                o = arguments.length > 4 ? arguments[4] : void 0,
                n = s()[e],
                d = n.text,
                a = n.rtl,
                h = n.fontFamily,
                g = n.leftAlignBoundingBox,
                u = g.width,
                f = g.x;
            return A("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                style: r({
                    overflow: "visible"
                }),
                width: l(i),
                height: l(o),
                preserveAspectRatio: a ? "xMaxYMid meet" : "xMinYMid meet",
                viewBox: "".concat(f, " ").concat(-30 * .655, " ").concat(u, " ").concat(30),
                fill: "".concat(c(t))
            }, [A("defs", A("style", '\n  @font-face {\n    font-family: "applied-button-font-0";\n    src: url(data:application/x-font-woff;charset=utf-8;base64,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) format("woff")\n  }')), A("text", {
                "font-size": "13px",
                textLength: "0em" !== n.letterSpacing ? u : void 0,
                "font-family": h,
                direction: a ? "rtl" : "ltr"
            }, d)])
        },
        D = function(e) {
            return "number" == typeof e && !isNaN(e)
        },
        I = function(e, t) {
            return t ? "left" === e ? "right" : "left" : e
        },
        S = function(e) {
            var t = e.width,
                i = e.height,
                o = e.logoSize,
                n = e.labelPosition,
                A = e.logoPosition;
            (t = Math.floor(t)) > 375 ? t = 375 : t < 130 && (t = 130), (i = Math.floor(i)) > 64 ? i = 64 : i < 30 && (i = 30), n = Math.floor(n), A = Math.floor(A);
            var r, l, d = (l = i / (r = M[o]).height, Math.floor(r.logoWidth * l)),
                c = Math.floor(.5 * d),
                a = Math.floor(.7 * d),
                h = c + d + a,
                s = Math.floor(t / 2);
            n > s ? n = s : n < h && (n = h);
            var g = n - a - d;
            A > g ? A = g : A < c && (A = c);
            var u = A,
                f = Math.floor(.08 * t),
                p = n - u - d;
            return {
                width: t,
                height: i,
                leftMargin: u,
                logoWidth: d,
                middleMargin: p,
                labelWidth: t - u - f - p - d,
                rightMargin: f,
                contentWidth: t - f - u
            }
        },
        Y = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                i = e.id,
                o = void 0 === i ? "appleid-button" : i,
                c = e.color,
                a = void 0 === c ? "black" : c,
                h = e.type,
                g = void 0 === h ? "sign-in" : h,
                u = e.border,
                f = void 0 !== u && u,
                p = e.width,
                v = void 0 === p ? "100%" : p,
                w = e.height,
                C = void 0 === w ? "100%" : w,
                x = e.borderRadius,
                B = void 0 === x ? 15 : x,
                z = e.labelPosition,
                M = void 0 === z ? 0 : z,
                Y = e.logoPosition,
                P = void 0 === Y ? 0 : Y,
                R = e.logoSize,
                G = void 0 === R ? "small" : R,
                F = e.locale,
                X = void 0 === F ? "" : F,
                Z = document.getElementById(o),
                U = "100%" === v,
                L = "100%" === C;
            if (U || L) {
                var k = b(Z);
                v = U ? k.width : v, C = L ? k.height : C, m(Z, function(e) {
                    ! function(e, t) {
                        var i = t.width,
                            o = t.height,
                            n = t.logoPosition,
                            A = t.labelPosition,
                            r = t.logoSize,
                            d = (t.locale, t.type),
                            c = s()[d].rtl,
                            a = e.firstChild.childNodes,
                            h = a[0],
                            g = a[1],
                            u = S({
                                width: i,
                                height: o,
                                logoSize: r,
                                labelPosition: A,
                                logoPosition: n
                            });
                        h.style.width = l(u.contentWidth), h.style.height = l(u.height), h.style["padding-".concat(I("right", c))] = l(u.rightMargin), h.style["padding-".concat(I("left", c))] = l(u.leftMargin);
                        var f = h.childNodes,
                            p = f[0],
                            v = f[1],
                            w = f[2];
                        p.setAttribute("width", l(u.logoWidth)), p.setAttribute("height", l(u.height)), v.style.width = l(u.middleMargin), v.style.height = l(u.height), w.setAttribute("width", l(u.labelWidth)), w.setAttribute("height", l(u.height)), g.setAttribute("width", l(u.width)), g.setAttribute("height", l(u.height)), g.firstChild.setAttribute("width", l(u.width)), g.firstChild.setAttribute("height", l(u.height))
                    }(Z, {
                        width: U ? e.width : v,
                        height: L ? e.height : C,
                        logoPosition: P,
                        labelPosition: M,
                        logoSize: G,
                        locale: X,
                        type: g
                    })
                })
            }
            var N = function(e) {
                var i, o = e.color,
                    n = e.type,
                    c = e.border,
                    a = e.width,
                    h = e.height,
                    g = e.borderRadius,
                    u = e.labelPosition,
                    f = e.logoPosition,
                    p = e.logoSize,
                    v = e.locale;
                if (!D(a) || !D(h)) throw new Error("width and height have to be numbers");
                if (!D(u) || !D(f)) throw new Error("labelPosition and logoPosition have to be numbers");
                var w = s()[n],
                    C = w.rtl,
                    b = S({
                        width: a,
                        height: h,
                        logoSize: p,
                        labelPosition: u,
                        logoPosition: f
                    }),
                    x = [y(p, o, b.logoWidth, b.height), A("span", {
                        style: r({
                            display: "inline-block",
                            width: l(b.middleMargin),
                            height: l(b.height)
                        })
                    }), E(n, o, v, b.labelWidth, h)];
                return C && x.reverse(), A("div", {
                    style: r({
                        "font-synthesis": "none",
                        "-moz-font-feature-settings": "kern",
                        "-webkit-font-smoothing": "antialiased",
                        "-moz-osx-font-smoothing": "grayscale",
                        position: "relative",
                        "letter-spacing": "initial"
                    }),
                    role: "button",
                    tabindex: "0",
                    "aria-label": w.text
                }, [A("div", {
                    style: r((i = {
                        position: "absolute",
                        "box-sizing": "content-box",
                        "-webkit-box-sizing": "content-box",
                        "-moz-box-sizing": "content-box",
                        width: l(b.contentWidth),
                        height: l(h)
                    }, t(i, "padding-".concat(I("right", C)), l(b.rightMargin)), t(i, "padding-".concat(I("left", C)), l(b.leftMargin)), i))
                }, x), d({
                    color: o,
                    borderRadius: g,
                    border: c,
                    width: b.width,
                    height: b.height
                })])
            }({
                color: a,
                type: g,
                border: f,
                width: v,
                height: C,
                borderRadius: B,
                labelPosition: M,
                logoPosition: P,
                logoSize: G,
                locale: X
            });
            n(Z, N)
        },
        P = function(e) {
            var t = e.color,
                i = void 0 === t ? "black" : t,
                o = e.size,
                n = e.border,
                a = void 0 !== n && n,
                h = e.borderRadius,
                g = (e.locale, s()["sign-in"]),
                u = function(e) {
                    return '\n  <svg xmlns="http://www.w3.org/2000/svg" style="overflow:visible" width="100%" height="100%" viewBox="6 6 44 44">\n      <g fill="none" fill-rule="evenodd">\n          <path fill="'.concat(c(e), '" fill-rule="nonzero" d="M28.2226562,20.3846154 C29.0546875,20.3846154 30.0976562,19.8048315 30.71875,19.0317864 C31.28125,18.3312142 31.6914062,17.352829 31.6914062,16.3744437 C31.6914062,16.2415766 31.6796875,16.1087095 31.65625,16 C30.7304687,16.0362365 29.6171875,16.640178 28.9492187,17.4494596 C28.421875,18.06548 27.9414062,19.0317864 27.9414062,20.0222505 C27.9414062,20.1671964 27.9648438,20.3121424 27.9765625,20.3604577 C28.0351562,20.3725366 28.1289062,20.3846154 28.2226562,20.3846154 Z M25.2929688,35 C26.4296875,35 26.9335938,34.214876 28.3515625,34.214876 C29.7929688,34.214876 30.109375,34.9758423 31.375,34.9758423 C32.6171875,34.9758423 33.4492188,33.792117 34.234375,32.6325493 C35.1132812,31.3038779 35.4765625,29.9993643 35.5,29.9389701 C35.4179688,29.9148125 33.0390625,28.9122695 33.0390625,26.0979021 C33.0390625,23.6579784 34.9140625,22.5588048 35.0195312,22.474253 C33.7773438,20.6382708 31.890625,20.5899555 31.375,20.5899555 C29.9804688,20.5899555 28.84375,21.4596313 28.1289062,21.4596313 C27.3554688,21.4596313 26.3359375,20.6382708 25.1289062,20.6382708 C22.8320312,20.6382708 20.5,22.5950413 20.5,26.2911634 C20.5,28.5861411 21.3671875,31.013986 22.4335938,32.5842339 C23.3476562,33.9129053 24.1445312,35 25.2929688,35 Z"></path>\n      </g>\n  </svg>')
                }(i),
                f = r({
                    "font-synthesis": "none",
                    "-moz-font-feature-settings": "kern",
                    "-webkit-font-smoothing": "antialiased",
                    "-moz-osx-font-smoothing": "grayscale",
                    width: l(o),
                    height: l(o),
                    "min-width": "30px",
                    "max-width": "64px",
                    "min-height": "30px",
                    "max-height": "64px",
                    position: "relative"
                });
            return A("div", {
                style: f,
                role: "button",
                tabindex: "0",
                "aria-label": g.text
            }, "\n    ".concat(A("div", {
                style: r({
                    position: "absolute",
                    "box-sizing": "border-box",
                    width: "100%",
                    height: "100%"
                })
            }, u), "\n    ").concat(A("div", {
                style: r({
                    padding: a ? "1px" : void 0,
                    width: "100%",
                    height: "100%",
                    "box-sizing": "border-box"
                })
            }, d({
                color: i,
                borderRadius: h,
                border: a,
                isSquare: !0
            })), "\n    "))
        },
        R = ["0", "0"],
        G = function() {
            for (var e = {}, t = 0; t < arguments.length; t += 1)
                for (var i = t < 0 || arguments.length <= t ? void 0 : arguments[t], o = Object.keys(i), n = 0; n < o.length; n += 1) {
                    var A = o[n];
                    e[A] = i[A]
                }
            return e
        },
        F = {
            isInit: !1
        },
        X = {
            baseURI: "https://appleid.apple.com",
            path: "/auth/authorize",
            originURI: "",
            env: "prod",
            usePopup: !1,
            responseType: "code id_token",
            responseMode: "form_post",
            client: {
                clientId: "",
                scope: "",
                redirectURI: "",
                state: "",
                nonce: ""
            }
        },
        Z = "user_trigger_new_signin_flow",
        U = "popup_closed_by_user",
        L = "popup_blocked_by_browser",
        k = "AppleIDSigInLoaded",
        N = "AppleIDSignInOnSuccess",
        K = "AppleIDSignInOnFailure",
        W = function(e) {
            var t = "".concat(e.baseURI).concat(e.path, "?client_id=") + encodeURIComponent(e.client.clientId) + "&redirect_uri=" + encodeURIComponent(e.client.redirectURI) + "&response_type=" + encodeURIComponent(e.responseType);
            return ["state", "scope", "nonce"].forEach(function(i) {
                e.client[i] && (t = "".concat(t, "&").concat(i, "=").concat(encodeURIComponent(e.client[i])))
            }), e.client.codeChallenge && (t += "&code_challenge=".concat(encodeURIComponent(e.client.codeChallenge))), e.client.codeChallengeMethod && (t += "&code_challenge_method=".concat(encodeURIComponent(e.client.codeChallengeMethod))), t = (t = (t = e.usePopup ? t + "&response_mode=" + encodeURIComponent("web_message") : t + "&response_mode=" + encodeURIComponent(e.responseMode)) + "&frame_id=" + "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
                var t = 16 * Math.random() | 0;
                return ("x" == e ? t : 3 & t | 8).toString(16)
            })) + "&m=" + R[0] + R[1], t += "&v=1.5.5"
        },
        j = {},
        O = {},
        H = {},
        Q = function(e) {
            j[e] && (j[e] = null), V(e, "closed"), H[e] && (clearInterval(H[e]), H[e] = null)
        },
        T = function(e) {
            return O[e] || (O[e] = []), O[e]
        },
        V = function(e, t) {
            T(e).forEach(function(e) {
                return e(t)
            })
        },
        q = function(e, t) {
            var i = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width,
                o = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;
            return {
                left: i / 2 - e / 2 + window.screenLeft,
                top: o / 2 - t / 2 + window.screenTop
            }
        },
        J = q(700, 700).left,
        _ = q(700, 700).top,
        $ = {
            strWindowFeatures: "width=".concat(700, ",height=").concat(700, ",left=").concat(J, ",top=").concat(_, ",resizable=no,location=no,menubar=no"),
            windowName: "AppleAuthentication"
        },
        ee = function() {
            var e;
            j[e = $.windowName] && ("function" == typeof j[e].close && j[e].close(), Q(e))
        },
        te = function(e) {
            return ee(), t = e, i = $.windowName, o = $.strWindowFeatures, (n = window.open(t, i, o)) && (j[i] = n, H[i] = setInterval(function() {
                n.closed && Q(i)
            }, 300)), n;
            var t, i, o, n
        },
        ie = function(e) {
            return function(e, t) {
                T(e).push(t)
            }($.windowName, e)
        },
        oe = [],
        ne = [],
        Ae = function(e) {
            var t = oe.indexOf(e);
            oe.splice(t, 1), ne.splice(t, 1)
        },
        re = function(e) {
            var t = oe.indexOf(e);
            return ne[t]
        },
        le = function(e) {
            return -1 !== oe.indexOf(e)
        },
        de = function() {
            var e, t, i;
            return function(e, t) {
                oe.push(e), ne.push(t)
            }(e = new Promise(function(e, o) {
                i = e, t = o
            }), {
                reject: t,
                resolve: i
            }), e
        },
        ce = {},
        ae = X.baseURI;
    window.addEventListener("message", function(e) {
        try {
            if (e.origin !== ae) return;
            var t = JSON.parse(e.data);
            t.method in ce && ce[t.method](t.data)
        } catch (e) {}
    }, !1);
    var he = function(e) {
            "dev" === e.env && (ae = e.baseURI)
        },
        se = function(e, t) {
            ce[e] = t
        },
        ge = function(e, t) {
            document.dispatchEvent(function(e, t) {
                return new CustomEvent(e, {
                    detail: t
                })
            }(e, t))
        },
        ue = null,
        fe = !0,
        pe = !1,
        ve = function() {
            return le(ue)
        },
        we = function(e) {
            ge(N, e), ve() && fe && function(e, t) {
                le(e) && (re(e).resolve(t), Ae(e))
            }(ue, e)
        },
        Ce = function(e) {
            var t, i;
            ge(K, e), ve() && fe && (i = e, le(t = ue) && (re(t).reject(i), Ae(t)))
        };
    ie(function(e) {
        "closed" === e && pe && (Ce({
            error: U
        }), pe = !1)
    }), se("oauthDone", function(e) {
        ! function(e) {
            "error" in e ? Ce(e) : we(e), pe = !1, ee()
        }(e)
    });
    var be, xe, Be = function(e) {
            var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            ve() && Ce({
                error: Z
            }), fe = t, "2" !== R[1] && (R[1] = "1");
            var i = W(e);
            R[1] = "0";
            var o, n, A = !!window.Promise;
            if (e.usePopup) {
                if (t && !A) throw new Error("Promise is required to use popup, please use polyfill.");
                if (te(i)) {
                    if (pe = !0, t) return n = de(), ue = n
                } else if (ge(K, {
                        error: L
                    }), t) return Promise.reject({
                    error: L
                })
            } else o = i, window.location.assign(o)
        },
        ze = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : X;
            ["scope", "state", "nonce", "usePopup", "codeChallenge", "codeChallengeMethod"].forEach(function(i) {
                if (e[i])
                    if ("usePopup" === i) {
                        if ("boolean" != typeof e[i]) throw new Error('The "' + i + '" should be boolean.');
                        t[i] = e[i]
                    } else {
                        if ("string" != typeof e[i]) throw new Error('The "' + i + '" should be a string.');
                        t.client[i] = e[i]
                    }
            })
        },
        me = function() {
            var e, t, i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                o = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                n = X;
            if (!F.isInit) throw new Error('The "init" function must be called first.');
            if (i) {
                if (!(i instanceof Object) || Array.isArray(i)) throw new Error('The "signinConfig" must be "object".');
                e = i, (t = Object.create(X)).client = Object.create(X.client), e.scope && "string" == typeof e.scope && (t.client.scope = e.scope), e.redirectURI && "string" == typeof e.redirectURI && (t.client.redirectURI = e.redirectURI), ze(i, n = t)
            }
            return Be(n, o)
        },
        Me = function(e) {
            if (!e.clientId || "string" != typeof e.clientId) throw new Error('The "clientId" should be a string.');
            if (X.client.clientId = e.clientId, !e.redirectURI || "string" != typeof e.redirectURI) throw new Error('The "redirectURI" should be a string.');
            X.client.redirectURI = e.redirectURI, ze(e), Se(), F.isInit = !0
        },
        ye = function() {
            R[1] = "2", me(null, !1)
        },
        Ee = function() {
            ye()
        },
        De = function(e) {
            32 === e.keyCode ? e.preventDefault() : 13 === e.keyCode && (e.preventDefault(), ye())
        },
        Ie = function(e) {
            32 === e.keyCode && (e.preventDefault(), ye())
        },
        Se = function() {
            var e, t, i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                o = (e = i.id, document.getElementById(e || "appleid-signin"));
            if (o) {
                (t = o) && t.firstChild && t.removeChild(t.firstChild);
                var A = function(e) {
                        var t, i, o, n, A, r = e.dataset,
                            l = "center-align",
                            d = "black",
                            c = !0,
                            a = "sign-in",
                            h = "small",
                            s = 15;
                        return null != r && (r.locale && (l = r.locale), r.mode && (l = r.mode), r.color && (d = r.color), r.border && (c = "false" !== r.border), r.type && (a = r.type), r.logoSize && (h = r.logoSize), r.borderRadius && !isNaN(parseInt(r.borderRadius, 10)) && (s = parseInt(r.borderRadius, 10)), "100%" === r.width ? t = r.width : r.width && !isNaN(parseInt(r.width, 10)) && (t = parseInt(r.width, 10)), "100%" === r.height ? i = r.height : r.height && !isNaN(parseInt(r.height, 10)) && (i = parseInt(r.height, 10)), "100%" === r.size ? o = r.size : r.size && !isNaN(parseInt(r.size, 10)) && (o = parseInt(r.size, 10)), r.logoPosition && !isNaN(parseInt(r.logoPosition, 10)) && (n = parseInt(r.logoPosition, 10)), r.labelPosition && !isNaN(parseInt(r.labelPosition, 10)) && (A = parseInt(r.labelPosition, 10))), "sign in" === a && (a = "sign-in"), {
                            mode: l,
                            locale: "",
                            color: d,
                            border: c,
                            type: a,
                            borderRadius: s,
                            width: t,
                            height: i,
                            size: o,
                            logoPosition: n,
                            labelPosition: A,
                            logoSize: h
                        }
                    }(o),
                    r = G({
                        id: "appleid-signin"
                    }, A, i);
                "center-align" === A.mode ? function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = e.id,
                        i = void 0 === t ? "appleid-button" : t,
                        o = e.color,
                        A = void 0 === o ? "black" : o,
                        r = e.type,
                        l = void 0 === r ? "sign-in" : r,
                        d = e.border,
                        c = void 0 !== d && d,
                        a = e.width,
                        h = void 0 === a ? "100%" : a,
                        s = e.height,
                        u = void 0 === s ? "100%" : s,
                        f = e.borderRadius,
                        p = void 0 === f ? 15 : f,
                        v = e.locale,
                        w = g({
                            color: A,
                            type: l,
                            border: c,
                            width: h,
                            height: u,
                            borderRadius: p,
                            locale: void 0 === v ? "" : v
                        });
                    n(i, w)
                }(r) : "left-align" === A.mode ? Y(r) : "logo-only" === A.mode && function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = e.id,
                        i = void 0 === t ? "appleid-button" : t,
                        o = e.color,
                        A = void 0 === o ? "black" : o,
                        r = e.size,
                        l = void 0 === r ? "100%" : r,
                        d = e.border,
                        c = void 0 !== d && d,
                        a = e.borderRadius,
                        h = void 0 === a ? 15 : a,
                        s = e.locale,
                        g = P({
                            color: A,
                            size: l,
                            border: c,
                            borderRadius: h,
                            locale: void 0 === s ? "" : s
                        });
                    n(i, g)
                }(r), o.addEventListener("click", Ee), o.addEventListener("keydown", De), o.addEventListener("keyup", Ie)
            }
        };
    ! function(e) {
        e.ClientId = "appleid-signin-client-id", e.Scope = "appleid-signin-scope", e.RedirectURI = "appleid-signin-redirect-uri", e.State = "appleid-signin-state", e.Nonce = "appleid-signin-nonce", e.UsePopup = "appleid-signin-use-popup", e.CodeChallenge = "appleid-signin-code-challenge", e.CodeChallengeMethod = "appleid-signin-code-challenge-method", e.DEV_URI = "appleid-signin-dev-uri", e.DEV_ENV = "appleid-signin-dev-env", e.DEV_PATH = "appleid-signin-dev-path"
    }(be || (be = {}));
    var Ye, Pe = function() {
            if (!xe) {
                xe = {};
                for (var e = function() {
                        var e = {};
                        return Object.keys(be).forEach(function(t) {
                            return e[be[t]] = !0
                        }), e
                    }(), t = document.getElementsByTagName("meta"), i = "", o = 0; o < t.length; o++) e[i = t[o].getAttribute("name")] && (xe[i] = t[o].getAttribute("content"))
            }
            return xe
        },
        Re = {},
        Ge = {
            init: function(e) {
                "2" === R[0] ? R[0] = "3" : R[0] = "1", Re = G({}, Re, e), Me(e)
            },
            signIn: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                return me(e)
            },
            renderButton: Se
        },
        Fe = function() {
            if (t = Pe(), Object.keys(t).length > 0) {
                "1" === R[0] ? R[0] = "4" : R[0] = "2";
                var e = function() {
                    var e = {
                            clientId: "",
                            scope: "",
                            redirectURI: "",
                            state: "",
                            nonce: ""
                        },
                        t = Pe();
                    t[be.ClientId] && (e.clientId = t[be.ClientId]), t[be.Scope] && (e.scope = t[be.Scope]), t[be.RedirectURI] && (e.redirectURI = t[be.RedirectURI]), t[be.State] && (e.state = t[be.State]), t[be.Nonce] && (e.nonce = t[be.Nonce]), t[be.UsePopup] && (e.usePopup = "true" === t[be.UsePopup]), t[be.CodeChallenge] && (e.codeChallenge = t[be.CodeChallenge]), t[be.CodeChallengeMethod] && (e.codeChallengeMethod = t[be.CodeChallengeMethod]);
                    var i = t[be.DEV_ENV],
                        o = t[be.DEV_PATH],
                        n = t[be.DEV_URI];
                    return (i || o || n) && (i && (X.env = i), o && (X.path = o), n && (X.baseURI = n, he(X))), e
                }();
                Me(G({}, e, Re))
            }
            var t
        };
    "complete" === document.readyState || "loaded" === document.readyState || "interactive" === document.readyState ? Fe() : document.addEventListener("DOMContentLoaded", function() {
        Fe()
    }), Ye = k, setTimeout(function() {
        return ge(Ye)
    }), e.auth = Ge, Object.defineProperty(e, "__esModule", {
        value: !0
    })
});