
function PxLoaderImage(t, e, i) {
    var n = this,
        s = null;
    this.img = new Image, this.tags = e, this.priority = i;
    var o = function () {
            "complete" === n.img.readyState && (l(), s.onLoad(n))
        },
        r = function () {
            l(), s.onLoad(n)
        },
        a = function () {
            l(), s.onError(n)
        },
        l = function () {
            n.unbind("load", r), n.unbind("readystatechange", o), n.unbind("error", a)
        };
    this.start = function (e) {
        s = e, n.bind("load", r), n.bind("readystatechange", o), n.bind("error", a), n.img.src = t
    }, this.checkStatus = function () {
        n.img.complete && (l(), s.onLoad(n))
    }, this.onTimeout = function () {
        l(), n.img.complete ? s.onLoad(n) : s.onTimeout(n)
    }, this.getName = function () {
        return t
    }, this.bind = function (t, e) {
        n.img.addEventListener ? n.img.addEventListener(t, e, !1) : n.img.attachEvent && n.img.attachEvent("on" + t, e)
    }, this.unbind = function (t, e) {
        n.img.removeEventListener ? n.img.removeEventListener(t, e, !1) : n.img.detachEvent && n.img.detachEvent("on" + t, e)
    }
}

function PxLoaderVideo(t, e, i) {
    var n = this,
        s = null;
    this.readyEventName = "canplaythrough";
    try {
        this.vid = new Video
    } catch (o) {
        this.vid = document.createElement("video")
    }
    this.tags = e, this.priority = i;
    var r = function () {
            (4 === n.vid.readyState || 2 === n.vid.readyState) && (u(), s.onLoad(n))
        },
        a = function () {
            u(), s.onLoad(n)
        },
        l = function () {
            u(), s.onError(n)
        },
        u = function () {
            n.unbind("load", a), n.unbind(n.readyEventName, r), n.unbind("error", l)
        };
    this.start = function (e) {
        s = e, n.bind("load", a), n.bind(n.readyEventName, r), n.bind("error", l), n.bind("suspend", a), n.vid.src = t, n.vid.load()
    }, this.checkStatus = function () {
        (4 === n.vid.readyState || 2 === n.vid.readyState) && (u(), s.onLoad(n))
    }, this.onTimeout = function () {
        u(), 4 !== n.vid.readyState ? s.onLoad(n) : s.onTimeout(n)
    }, this.getName = function () {
        return t
    }, this.bind = function (t, e) {
        n.vid.addEventListener ? n.vid.addEventListener(t, e, !1) : n.vid.attachEvent && n.vid.attachEvent("on" + t, e)
    }, this.unbind = function (t, e) {
        n.vid.removeEventListener ? n.vid.removeEventListener(t, e, !1) : n.vid.detachEvent && n.vid.detachEvent("on" + t, e)
    }
}

function PxLoaderSound(t, e, i, n) {
    var s = this,
        o = null;
    this.tags = i, this.priority = n, this.sound = soundManager.createSound({
        id: t,
        url: e,
        autoLoad: !0,
        onload: function () {},
        canplay: function () {},
        onsuspend: function () {},
        whileloading: function () {
            var t = this.bytesLoaded,
                e = this.bytesTotal
        }
    }), this.start = function (t) {
        o = t;
        var e = navigator.userAgent.match(/(ipad|iphone|ipod)/i);
        e || this.sound.load()
    }, this.checkStatus = function () {
        switch (s.sound.readyState) {
        case 0:
            break;
        case 1:
            break;
        case 2:
            o.onError(s);
            break;
        case 3:
            o.onLoad(s)
        }
    }, this.onTimeout = function () {}, this.getName = function () {
        return e
    }
}

function getFirstChild(t) {
        for (var e in t) return t[e]
    }! function (t, e) {
        "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function (t) {
            if (!t.document) throw new Error("jQuery requires a window with a document");
            return e(t)
        } : e(t)
    }("undefined" != typeof window ? window : this, function (t, e) {
        function i(t) {
            var e = t.length,
                i = oe.type(t);
            return "function" === i || oe.isWindow(t) ? !1 : 1 === t.nodeType && e ? !0 : "array" === i || 0 === e || "number" == typeof e && e > 0 && e - 1 in t
        }

        function n(t, e, i) {
            if (oe.isFunction(e)) return oe.grep(t, function (t, n) {
                return !!e.call(t, n, t) !== i
            });
            if (e.nodeType) return oe.grep(t, function (t) {
                return t === e !== i
            });
            if ("string" == typeof e) {
                if (de.test(e)) return oe.filter(e, t, i);
                e = oe.filter(e, t)
            }
            return oe.grep(t, function (t) {
                return oe.inArray(t, e) >= 0 !== i
            })
        }

        function s(t, e) {
            do t = t[e]; while (t && 1 !== t.nodeType);
            return t
        }

        function o(t) {
            var e = be[t] = {};
            return oe.each(t.match(xe) || [], function (t, i) {
                e[i] = !0
            }), e
        }

        function r() {
            me.addEventListener ? (me.removeEventListener("DOMContentLoaded", a, !1), t.removeEventListener("load", a, !1)) : (me.detachEvent("onreadystatechange", a), t.detachEvent("onload", a))
        }

        function a() {
            (me.addEventListener || "load" === event.type || "complete" === me.readyState) && (r(), oe.ready())
        }

        function l(t, e, i) {
            if (void 0 === i && 1 === t.nodeType) {
                var n = "data-" + e.replace(Ce, "-$1")
                    .toLowerCase();
                if (i = t.getAttribute(n), "string" == typeof i) {
                    try {
                        i = "true" === i ? !0 : "false" === i ? !1 : "null" === i ? null : +i + "" === i ? +i : Se.test(i) ? oe.parseJSON(i) : i
                    } catch (s) {}
                    oe.data(t, e, i)
                } else i = void 0
            }
            return i
        }

        function u(t) {
            var e;
            for (e in t)
                if (("data" !== e || !oe.isEmptyObject(t[e])) && "toJSON" !== e) return !1;
            return !0
        }

        function h(t, e, i, n) {
            if (oe.acceptData(t)) {
                var s, o, r = oe.expando,
                    a = t.nodeType,
                    l = a ? oe.cache : t,
                    u = a ? t[r] : t[r] && r;
                if (u && l[u] && (n || l[u].data) || void 0 !== i || "string" != typeof e) return u || (u = a ? t[r] = Q.pop() || oe.guid++ : r), l[u] || (l[u] = a ? {} : {
                    toJSON: oe.noop
                }), ("object" == typeof e || "function" == typeof e) && (n ? l[u] = oe.extend(l[u], e) : l[u].data = oe.extend(l[u].data, e)), o = l[u], n || (o.data || (o.data = {}), o = o.data), void 0 !== i && (o[oe.camelCase(e)] = i), "string" == typeof e ? (s = o[e], null == s && (s = o[oe.camelCase(e)])) : s = o, s
            }
        }

        function c(t, e, i) {
            if (oe.acceptData(t)) {
                var n, s, o = t.nodeType,
                    r = o ? oe.cache : t,
                    a = o ? t[oe.expando] : oe.expando;
                if (r[a]) {
                    if (e && (n = i ? r[a] : r[a].data)) {
                        oe.isArray(e) ? e = e.concat(oe.map(e, oe.camelCase)) : e in n ? e = [e] : (e = oe.camelCase(e), e = e in n ? [e] : e.split(" ")), s = e.length;
                        for (; s--;) delete n[e[s]];
                        if (i ? !u(n) : !oe.isEmptyObject(n)) return
                    }(i || (delete r[a].data, u(r[a]))) && (o ? oe.cleanData([t], !0) : ne.deleteExpando || r != r.window ? delete r[a] : r[a] = null)
                }
            }
        }

        function p() {
            return !0
        }

        function d() {
            return !1
        }

        function f() {
            try {
                return me.activeElement
            } catch (t) {}
        }

        function m(t) {
            var e = Fe.split("|"),
                i = t.createDocumentFragment();
            if (i.createElement)
                for (; e.length;) i.createElement(e.pop());
            return i
        }

        function g(t, e) {
            var i, n, s = 0,
                o = typeof t.getElementsByTagName !== Te ? t.getElementsByTagName(e || "*") : typeof t.querySelectorAll !== Te ? t.querySelectorAll(e || "*") : void 0;
            if (!o)
                for (o = [], i = t.childNodes || t; null != (n = i[s]); s++) !e || oe.nodeName(n, e) ? o.push(n) : oe.merge(o, g(n, e));
            return void 0 === e || e && oe.nodeName(t, e) ? oe.merge([t], o) : o
        }

        function v(t) {
            Le.test(t.type) && (t.defaultChecked = t.checked)
        }

        function y(t, e) {
            return oe.nodeName(t, "table") && oe.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
        }

        function _(t) {
            return t.type = (null !== oe.find.attr(t, "type")) + "/" + t.type, t
        }

        function x(t) {
            var e = We.exec(t.type);
            return e ? t.type = e[1] : t.removeAttribute("type"), t
        }

        function b(t, e) {
            for (var i, n = 0; null != (i = t[n]); n++) oe._data(i, "globalEval", !e || oe._data(e[n], "globalEval"))
        }

        function w(t, e) {
            if (1 === e.nodeType && oe.hasData(t)) {
                var i, n, s, o = oe._data(t),
                    r = oe._data(e, o),
                    a = o.events;
                if (a) {
                    delete r.handle, r.events = {};
                    for (i in a)
                        for (n = 0, s = a[i].length; s > n; n++) oe.event.add(e, i, a[i][n])
                }
                r.data && (r.data = oe.extend({}, r.data))
            }
        }

        function T(t, e) {
            var i, n, s;
            if (1 === e.nodeType) {
                if (i = e.nodeName.toLowerCase(), !ne.noCloneEvent && e[oe.expando]) {
                    s = oe._data(e);
                    for (n in s.events) oe.removeEvent(e, n, s.handle);
                    e.removeAttribute(oe.expando)
                }
                "script" === i && e.text !== t.text ? (_(e)
                    .text = t.text, x(e)) : "object" === i ? (e.parentNode && (e.outerHTML = t.outerHTML), ne.html5Clone && t.innerHTML && !oe.trim(e.innerHTML) && (e.innerHTML = t.innerHTML)) : "input" === i && Le.test(t.type) ? (e.defaultChecked = e.checked = t.checked, e.value !== t.value && (e.value = t.value)) : "option" === i ? e.defaultSelected = e.selected = t.defaultSelected : ("input" === i || "textarea" === i) && (e.defaultValue = t.defaultValue)
            }
        }

        function M(e, i) {
            var n, s = oe(i.createElement(e))
                .appendTo(i.body),
                o = t.getDefaultComputedStyle && (n = t.getDefaultComputedStyle(s[0])) ? n.display : oe.css(s[0], "display");
            return s.detach(), o
        }

        function S(t) {
            var e = me,
                i = Ke[t];
            return i || (i = M(t, e), "none" !== i && i || (Je = (Je || oe("<iframe frameborder='0' width='0' height='0'/>"))
                .appendTo(e.documentElement), e = (Je[0].contentWindow || Je[0].contentDocument)
                .document, e.write(), e.close(), i = M(t, e), Je.detach()), Ke[t] = i), i
        }

        function C(t, e) {
            return {
                get: function () {
                    var i = t();
                    return null != i ? i ? void delete this.get : (this.get = e)
                        .apply(this, arguments) : void 0
                }
            }
        }

        function A(t, e) {
            if (e in t) return e;
            for (var i = e.charAt(0)
                    .toUpperCase() + e.slice(1), n = e, s = pi.length; s--;)
                if (e = pi[s] + i, e in t) return e;
            return n
        }

        function E(t, e) {
            for (var i, n, s, o = [], r = 0, a = t.length; a > r; r++) n = t[r], n.style && (o[r] = oe._data(n, "olddisplay"), i = n.style.display, e ? (o[r] || "none" !== i || (n.style.display = ""), "" === n.style.display && ke(n) && (o[r] = oe._data(n, "olddisplay", S(n.nodeName)))) : (s = ke(n), (i && "none" !== i || !s) && oe._data(n, "olddisplay", s ? i : oe.css(n, "display"))));
            for (r = 0; a > r; r++) n = t[r], n.style && (e && "none" !== n.style.display && "" !== n.style.display || (n.style.display = e ? o[r] || "" : "none"));
            return t
        }

        function k(t, e, i) {
            var n = li.exec(e);
            return n ? Math.max(0, n[1] - (i || 0)) + (n[2] || "px") : e
        }

        function O(t, e, i, n, s) {
            for (var o = i === (n ? "border" : "content") ? 4 : "width" === e ? 1 : 0, r = 0; 4 > o; o += 2) "margin" === i && (r += oe.css(t, i + Ee[o], !0, s)), n ? ("content" === i && (r -= oe.css(t, "padding" + Ee[o], !0, s)), "margin" !== i && (r -= oe.css(t, "border" + Ee[o] + "Width", !0, s))) : (r += oe.css(t, "padding" + Ee[o], !0, s), "padding" !== i && (r += oe.css(t, "border" + Ee[o] + "Width", !0, s)));
            return r
        }

        function L(t, e, i) {
            var n = !0,
                s = "width" === e ? t.offsetWidth : t.offsetHeight,
                o = ii(t),
                r = ne.boxSizing && "border-box" === oe.css(t, "boxSizing", !1, o);
            if (0 >= s || null == s) {
                if (s = ni(t, e, o), (0 > s || null == s) && (s = t.style[e]), ei.test(s)) return s;
                n = r && (ne.boxSizingReliable() || s === t.style[e]), s = parseFloat(s) || 0
            }
            return s + O(t, e, i || (r ? "border" : "content"), n, o) + "px"
        }

        function I(t, e, i, n, s) {
            return new I.prototype.init(t, e, i, n, s)
        }

        function P() {
            return setTimeout(function () {
                di = void 0
            }), di = oe.now()
        }

        function H(t, e) {
            var i, n = {
                    height: t
                },
                s = 0;
            for (e = e ? 1 : 0; 4 > s; s += 2 - e) i = Ee[s], n["margin" + i] = n["padding" + i] = t;
            return e && (n.opacity = n.width = t), n
        }

        function N(t, e, i) {
            for (var n, s = (_i[e] || [])
                    .concat(_i["*"]), o = 0, r = s.length; r > o; o++)
                if (n = s[o].call(i, e, t)) return n
        }

        function F(t, e, i) {
            var n, s, o, r, a, l, u, h, c = this,
                p = {},
                d = t.style,
                f = t.nodeType && ke(t),
                m = oe._data(t, "fxshow");
            i.queue || (a = oe._queueHooks(t, "fx"), null == a.unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function () {
                a.unqueued || l()
            }), a.unqueued++, c.always(function () {
                c.always(function () {
                    a.unqueued--, oe.queue(t, "fx")
                        .length || a.empty.fire()
                })
            })), 1 === t.nodeType && ("height" in e || "width" in e) && (i.overflow = [d.overflow, d.overflowX, d.overflowY], u = oe.css(t, "display"), h = "none" === u ? oe._data(t, "olddisplay") || S(t.nodeName) : u, "inline" === h && "none" === oe.css(t, "float") && (ne.inlineBlockNeedsLayout && "inline" !== S(t.nodeName) ? d.zoom = 1 : d.display = "inline-block")), i.overflow && (d.overflow = "hidden", ne.shrinkWrapBlocks() || c.always(function () {
                d.overflow = i.overflow[0], d.overflowX = i.overflow[1], d.overflowY = i.overflow[2]
            }));
            for (n in e)
                if (s = e[n], mi.exec(s)) {
                    if (delete e[n], o = o || "toggle" === s, s === (f ? "hide" : "show")) {
                        if ("show" !== s || !m || void 0 === m[n]) continue;
                        f = !0
                    }
                    p[n] = m && m[n] || oe.style(t, n)
                } else u = void 0;
            if (oe.isEmptyObject(p)) "inline" === ("none" === u ? S(t.nodeName) : u) && (d.display = u);
            else {
                m ? "hidden" in m && (f = m.hidden) : m = oe._data(t, "fxshow", {}), o && (m.hidden = !f), f ? oe(t)
                    .show() : c.done(function () {
                        oe(t)
                            .hide()
                    }), c.done(function () {
                        var e;
                        oe._removeData(t, "fxshow");
                        for (e in p) oe.style(t, e, p[e])
                    });
                for (n in p) r = N(f ? m[n] : 0, n, c), n in m || (m[n] = r.start, f && (r.end = r.start, r.start = "width" === n || "height" === n ? 1 : 0))
            }
        }

        function D(t, e) {
            var i, n, s, o, r;
            for (i in t)
                if (n = oe.camelCase(i), s = e[n], o = t[i], oe.isArray(o) && (s = o[1], o = t[i] = o[0]), i !== n && (t[n] = o, delete t[i]), r = oe.cssHooks[n], r && "expand" in r) {
                    o = r.expand(o), delete t[n];
                    for (i in o) i in t || (t[i] = o[i], e[i] = s)
                } else e[n] = s
        }

        function R(t, e, i) {
            var n, s, o = 0,
                r = yi.length,
                a = oe.Deferred()
                .always(function () {
                    delete l.elem
                }),
                l = function () {
                    if (s) return !1;
                    for (var e = di || P(), i = Math.max(0, u.startTime + u.duration - e), n = i / u.duration || 0, o = 1 - n, r = 0, l = u.tweens.length; l > r; r++) u.tweens[r].run(o);
                    return a.notifyWith(t, [u, o, i]), 1 > o && l ? i : (a.resolveWith(t, [u]), !1)
                },
                u = a.promise({
                    elem: t,
                    props: oe.extend({}, e),
                    opts: oe.extend(!0, {
                        specialEasing: {}
                    }, i),
                    originalProperties: e,
                    originalOptions: i,
                    startTime: di || P(),
                    duration: i.duration,
                    tweens: [],
                    createTween: function (e, i) {
                        var n = oe.Tween(t, u.opts, e, i, u.opts.specialEasing[e] || u.opts.easing);
                        return u.tweens.push(n), n
                    },
                    stop: function (e) {
                        var i = 0,
                            n = e ? u.tweens.length : 0;
                        if (s) return this;
                        for (s = !0; n > i; i++) u.tweens[i].run(1);
                        return e ? a.resolveWith(t, [u, e]) : a.rejectWith(t, [u, e]), this
                    }
                }),
                h = u.props;
            for (D(h, u.opts.specialEasing); r > o; o++)
                if (n = yi[o].call(u, t, h, u.opts)) return n;
            return oe.map(h, N, u), oe.isFunction(u.opts.start) && u.opts.start.call(t, u), oe.fx.timer(oe.extend(l, {
                    elem: t,
                    anim: u,
                    queue: u.opts.queue
                })), u.progress(u.opts.progress)
                .done(u.opts.done, u.opts.complete)
                .fail(u.opts.fail)
                .always(u.opts.always)
        }

        function B(t) {
            return function (e, i) {
                "string" != typeof e && (i = e, e = "*");
                var n, s = 0,
                    o = e.toLowerCase()
                    .match(xe) || [];
                if (oe.isFunction(i))
                    for (; n = o[s++];) "+" === n.charAt(0) ? (n = n.slice(1) || "*", (t[n] = t[n] || [])
                            .unshift(i)) : (t[n] = t[n] || [])
                        .push(i)
            }
        }

        function z(t, e, i, n) {
            function s(a) {
                var l;
                return o[a] = !0, oe.each(t[a] || [], function (t, a) {
                    var u = a(e, i, n);
                    return "string" != typeof u || r || o[u] ? r ? !(l = u) : void 0 : (e.dataTypes.unshift(u), s(u), !1)
                }), l
            }
            var o = {},
                r = t === Xi;
            return s(e.dataTypes[0]) || !o["*"] && s("*")
        }

        function j(t, e) {
            var i, n, s = oe.ajaxSettings.flatOptions || {};
            for (n in e) void 0 !== e[n] && ((s[n] ? t : i || (i = {}))[n] = e[n]);
            return i && oe.extend(!0, t, i), t
        }

        function q(t, e, i) {
            for (var n, s, o, r, a = t.contents, l = t.dataTypes;
                "*" === l[0];) l.shift(), void 0 === s && (s = t.mimeType || e.getResponseHeader("Content-Type"));
            if (s)
                for (r in a)
                    if (a[r] && a[r].test(s)) {
                        l.unshift(r);
                        break
                    }
            if (l[0] in i) o = l[0];
            else {
                for (r in i) {
                    if (!l[0] || t.converters[r + " " + l[0]]) {
                        o = r;
                        break
                    }
                    n || (n = r)
                }
                o = o || n
            }
            return o ? (o !== l[0] && l.unshift(o), i[o]) : void 0
        }

        function X(t, e, i, n) {
            var s, o, r, a, l, u = {},
                h = t.dataTypes.slice();
            if (h[1])
                for (r in t.converters) u[r.toLowerCase()] = t.converters[r];
            for (o = h.shift(); o;)
                if (t.responseFields[o] && (i[t.responseFields[o]] = e), !l && n && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = o, o = h.shift())
                    if ("*" === o) o = l;
                    else if ("*" !== l && l !== o) {
                if (r = u[l + " " + o] || u["* " + o], !r)
                    for (s in u)
                        if (a = s.split(" "), a[1] === o && (r = u[l + " " + a[0]] || u["* " + a[0]])) {
                            r === !0 ? r = u[s] : u[s] !== !0 && (o = a[0], h.unshift(a[1]));
                            break
                        }
                if (r !== !0)
                    if (r && t["throws"]) e = r(e);
                    else try {
                        e = r(e)
                    } catch (c) {
                        return {
                            state: "parsererror",
                            error: r ? c : "No conversion from " + l + " to " + o
                        }
                    }
            }
            return {
                state: "success",
                data: e
            }
        }

        function U(t, e, i, n) {
            var s;
            if (oe.isArray(e)) oe.each(e, function (e, s) {
                i || Wi.test(t) ? n(t, s) : U(t + "[" + ("object" == typeof s ? e : "") + "]", s, i, n)
            });
            else if (i || "object" !== oe.type(e)) n(t, e);
            else
                for (s in e) U(t + "[" + s + "]", e[s], i, n)
        }

        function V() {
            try {
                return new t.XMLHttpRequest
            } catch (e) {}
        }

        function W() {
            try {
                return new t.ActiveXObject("Microsoft.XMLHTTP")
            } catch (e) {}
        }

        function Y(t) {
            return oe.isWindow(t) ? t : 9 === t.nodeType ? t.defaultView || t.parentWindow : !1
        }
        var Q = [],
            G = Q.slice,
            Z = Q.concat,
            J = Q.push,
            K = Q.indexOf,
            te = {},
            ee = te.toString,
            ie = te.hasOwnProperty,
            ne = {},
            se = "1.11.1",
            oe = function (t, e) {
                return new oe.fn.init(t, e)
            },
            re = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            ae = /^-ms-/,
            le = /-([\da-z])/gi,
            ue = function (t, e) {
                return e.toUpperCase()
            };
        oe.fn = oe.prototype = {
            jquery: se,
            constructor: oe,
            selector: "",
            length: 0,
            toArray: function () {
                return G.call(this)
            },
            get: function (t) {
                return null != t ? 0 > t ? this[t + this.length] : this[t] : G.call(this)
            },
            pushStack: function (t) {
                var e = oe.merge(this.constructor(), t);
                return e.prevObject = this, e.context = this.context, e
            },
            each: function (t, e) {
                return oe.each(this, t, e)
            },
            map: function (t) {
                return this.pushStack(oe.map(this, function (e, i) {
                    return t.call(e, i, e)
                }))
            },
            slice: function () {
                return this.pushStack(G.apply(this, arguments))
            },
            first: function () {
                return this.eq(0)
            },
            last: function () {
                return this.eq(-1)
            },
            eq: function (t) {
                var e = this.length,
                    i = +t + (0 > t ? e : 0);
                return this.pushStack(i >= 0 && e > i ? [this[i]] : [])
            },
            end: function () {
                return this.prevObject || this.constructor(null)
            },
            push: J,
            sort: Q.sort,
            splice: Q.splice
        }, oe.extend = oe.fn.extend = function () {
            var t, e, i, n, s, o, r = arguments[0] || {},
                a = 1,
                l = arguments.length,
                u = !1;
            for ("boolean" == typeof r && (u = r, r = arguments[a] || {}, a++), "object" == typeof r || oe.isFunction(r) || (r = {}), a === l && (r = this, a--); l > a; a++)
                if (null != (s = arguments[a]))
                    for (n in s) t = r[n], i = s[n], r !== i && (u && i && (oe.isPlainObject(i) || (e = oe.isArray(i))) ? (e ? (e = !1, o = t && oe.isArray(t) ? t : []) : o = t && oe.isPlainObject(t) ? t : {}, r[n] = oe.extend(u, o, i)) : void 0 !== i && (r[n] = i));
            return r
        }, oe.extend({
            expando: "jQuery" + (se + Math.random())
                .replace(/\D/g, ""),
            isReady: !0,
            error: function (t) {
                throw new Error(t)
            },
            noop: function () {},
            isFunction: function (t) {
                return "function" === oe.type(t)
            },
            isArray: Array.isArray || function (t) {
                return "array" === oe.type(t)
            },
            isWindow: function (t) {
                return null != t && t == t.window
            },
            isNumeric: function (t) {
                return !oe.isArray(t) && t - parseFloat(t) >= 0
            },
            isEmptyObject: function (t) {
                var e;
                for (e in t) return !1;
                return !0
            },
            isPlainObject: function (t) {
                var e;
                if (!t || "object" !== oe.type(t) || t.nodeType || oe.isWindow(t)) return !1;
                try {
                    if (t.constructor && !ie.call(t, "constructor") && !ie.call(t.constructor.prototype, "isPrototypeOf")) return !1
                } catch (i) {
                    return !1
                }
                if (ne.ownLast)
                    for (e in t) return ie.call(t, e);
                for (e in t);
                return void 0 === e || ie.call(t, e)
            },
            type: function (t) {
                return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? te[ee.call(t)] || "object" : typeof t
            },
            globalEval: function (e) {
                e && oe.trim(e) && (t.execScript || function (e) {
                    t.eval.call(t, e)
                })(e)
            },
            camelCase: function (t) {
                return t.replace(ae, "ms-")
                    .replace(le, ue)
            },
            nodeName: function (t, e) {
                return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
            },
            each: function (t, e, n) {
                var s, o = 0,
                    r = t.length,
                    a = i(t);
                if (n) {
                    if (a)
                        for (; r > o && (s = e.apply(t[o], n), s !== !1); o++);
                    else
                        for (o in t)
                            if (s = e.apply(t[o], n), s === !1) break
                } else if (a)
                    for (; r > o && (s = e.call(t[o], o, t[o]), s !== !1); o++);
                else
                    for (o in t)
                        if (s = e.call(t[o], o, t[o]), s === !1) break; return t
            },
            trim: function (t) {
                return null == t ? "" : (t + "")
                    .replace(re, "")
            },
            makeArray: function (t, e) {
                var n = e || [];
                return null != t && (i(Object(t)) ? oe.merge(n, "string" == typeof t ? [t] : t) : J.call(n, t)), n
            },
            inArray: function (t, e, i) {
                var n;
                if (e) {
                    if (K) return K.call(e, t, i);
                    for (n = e.length, i = i ? 0 > i ? Math.max(0, n + i) : i : 0; n > i; i++)
                        if (i in e && e[i] === t) return i
                }
                return -1
            },
            merge: function (t, e) {
                for (var i = +e.length, n = 0, s = t.length; i > n;) t[s++] = e[n++];
                if (i !== i)
                    for (; void 0 !== e[n];) t[s++] = e[n++];
                return t.length = s, t
            },
            grep: function (t, e, i) {
                for (var n, s = [], o = 0, r = t.length, a = !i; r > o; o++) n = !e(t[o], o), n !== a && s.push(t[o]);
                return s
            },
            map: function (t, e, n) {
                var s, o = 0,
                    r = t.length,
                    a = i(t),
                    l = [];
                if (a)
                    for (; r > o; o++) s = e(t[o], o, n), null != s && l.push(s);
                else
                    for (o in t) s = e(t[o], o, n), null != s && l.push(s);
                return Z.apply([], l)
            },
            guid: 1,
            proxy: function (t, e) {
                var i, n, s;
                return "string" == typeof e && (s = t[e], e = t, t = s), oe.isFunction(t) ? (i = G.call(arguments, 2), n = function () {
                    return t.apply(e || this, i.concat(G.call(arguments)))
                }, n.guid = t.guid = t.guid || oe.guid++, n) : void 0
            },
            now: function () {
                return +new Date
            },
            support: ne
        }), oe.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (t, e) {
            te["[object " + e + "]"] = e.toLowerCase()
        });
        var he = function (t) {
            function e(t, e, i, n) {
                var s, o, r, a, l, u, c, d, f, m;
                if ((e ? e.ownerDocument || e : z) !== I && L(e), e = e || I, i = i || [], !t || "string" != typeof t) return i;
                if (1 !== (a = e.nodeType) && 9 !== a) return [];
                if (H && !n) {
                    if (s = ye.exec(t))
                        if (r = s[1]) {
                            if (9 === a) {
                                if (o = e.getElementById(r), !o || !o.parentNode) return i;
                                if (o.id === r) return i.push(o), i
                            } else if (e.ownerDocument && (o = e.ownerDocument.getElementById(r)) && R(e, o) && o.id === r) return i.push(o), i
                        } else {
                            if (s[2]) return te.apply(i, e.getElementsByTagName(t)), i;
                            if ((r = s[3]) && b.getElementsByClassName && e.getElementsByClassName) return te.apply(i, e.getElementsByClassName(r)), i
                        }
                    if (b.qsa && (!N || !N.test(t))) {
                        if (d = c = B, f = e, m = 9 === a && t, 1 === a && "object" !== e.nodeName.toLowerCase()) {
                            for (u = S(t), (c = e.getAttribute("id")) ? d = c.replace(xe, "\\$&") : e.setAttribute("id", d), d = "[id='" + d + "'] ", l = u.length; l--;) u[l] = d + p(u[l]);
                            f = _e.test(t) && h(e.parentNode) || e, m = u.join(",")
                        }
                        if (m) try {
                            return te.apply(i, f.querySelectorAll(m)), i
                        } catch (g) {} finally {
                            c || e.removeAttribute("id")
                        }
                    }
                }
                return A(t.replace(ue, "$1"), e, i, n)
            }

            function i() {
                function t(i, n) {
                    return e.push(i + " ") > w.cacheLength && delete t[e.shift()], t[i + " "] = n
                }
                var e = [];
                return t
            }

            function n(t) {
                return t[B] = !0, t
            }

            function s(t) {
                var e = I.createElement("div");
                try {
                    return !!t(e)
                } catch (i) {
                    return !1
                } finally {
                    e.parentNode && e.parentNode.removeChild(e), e = null
                }
            }

            function o(t, e) {
                for (var i = t.split("|"), n = t.length; n--;) w.attrHandle[i[n]] = e
            }

            function r(t, e) {
                var i = e && t,
                    n = i && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || Q) - (~t.sourceIndex || Q);
                if (n) return n;
                if (i)
                    for (; i = i.nextSibling;)
                        if (i === e) return -1;
                return t ? 1 : -1
            }

            function a(t) {
                return function (e) {
                    var i = e.nodeName.toLowerCase();
                    return "input" === i && e.type === t
                }
            }

            function l(t) {
                return function (e) {
                    var i = e.nodeName.toLowerCase();
                    return ("input" === i || "button" === i) && e.type === t
                }
            }

            function u(t) {
                return n(function (e) {
                    return e = +e, n(function (i, n) {
                        for (var s, o = t([], i.length, e), r = o.length; r--;) i[s = o[r]] && (i[s] = !(n[s] = i[s]))
                    })
                })
            }

            function h(t) {
                return t && typeof t.getElementsByTagName !== Y && t
            }

            function c() {}

            function p(t) {
                for (var e = 0, i = t.length, n = ""; i > e; e++) n += t[e].value;
                return n
            }

            function d(t, e, i) {
                var n = e.dir,
                    s = i && "parentNode" === n,
                    o = q++;
                return e.first ? function (e, i, o) {
                    for (; e = e[n];)
                        if (1 === e.nodeType || s) return t(e, i, o)
                } : function (e, i, r) {
                    var a, l, u = [j, o];
                    if (r) {
                        for (; e = e[n];)
                            if ((1 === e.nodeType || s) && t(e, i, r)) return !0
                    } else
                        for (; e = e[n];)
                            if (1 === e.nodeType || s) {
                                if (l = e[B] || (e[B] = {}), (a = l[n]) && a[0] === j && a[1] === o) return u[2] = a[2];
                                if (l[n] = u, u[2] = t(e, i, r)) return !0
                            }
                }
            }

            function f(t) {
                return t.length > 1 ? function (e, i, n) {
                    for (var s = t.length; s--;)
                        if (!t[s](e, i, n)) return !1;
                    return !0
                } : t[0]
            }

            function m(t, i, n) {
                for (var s = 0, o = i.length; o > s; s++) e(t, i[s], n);
                return n
            }

            function g(t, e, i, n, s) {
                for (var o, r = [], a = 0, l = t.length, u = null != e; l > a; a++)(o = t[a]) && (!i || i(o, n, s)) && (r.push(o), u && e.push(a));
                return r
            }

            function v(t, e, i, s, o, r) {
                return s && !s[B] && (s = v(s)), o && !o[B] && (o = v(o, r)), n(function (n, r, a, l) {
                    var u, h, c, p = [],
                        d = [],
                        f = r.length,
                        v = n || m(e || "*", a.nodeType ? [a] : a, []),
                        y = !t || !n && e ? v : g(v, p, t, a, l),
                        _ = i ? o || (n ? t : f || s) ? [] : r : y;
                    if (i && i(y, _, a, l), s)
                        for (u = g(_, d), s(u, [], a, l), h = u.length; h--;)(c = u[h]) && (_[d[h]] = !(y[d[h]] = c));
                    if (n) {
                        if (o || t) {
                            if (o) {
                                for (u = [], h = _.length; h--;)(c = _[h]) && u.push(y[h] = c);
                                o(null, _ = [], u, l)
                            }
                            for (h = _.length; h--;)(c = _[h]) && (u = o ? ie.call(n, c) : p[h]) > -1 && (n[u] = !(r[u] = c))
                        }
                    } else _ = g(_ === r ? _.splice(f, _.length) : _), o ? o(null, r, _, l) : te.apply(r, _)
                })
            }

            function y(t) {
                for (var e, i, n, s = t.length, o = w.relative[t[0].type], r = o || w.relative[" "], a = o ? 1 : 0, l = d(function (t) {
                        return t === e
                    }, r, !0), u = d(function (t) {
                        return ie.call(e, t) > -1
                    }, r, !0), h = [function (t, i, n) {
                        return !o && (n || i !== E) || ((e = i)
                            .nodeType ? l(t, i, n) : u(t, i, n))
                    }]; s > a; a++)
                    if (i = w.relative[t[a].type]) h = [d(f(h), i)];
                    else {
                        if (i = w.filter[t[a].type].apply(null, t[a].matches), i[B]) {
                            for (n = ++a; s > n && !w.relative[t[n].type]; n++);
                            return v(a > 1 && f(h), a > 1 && p(t.slice(0, a - 1)
                                    .concat({
                                        value: " " === t[a - 2].type ? "*" : ""
                                    }))
                                .replace(ue, "$1"), i, n > a && y(t.slice(a, n)), s > n && y(t = t.slice(n)), s > n && p(t))
                        }
                        h.push(i)
                    }
                return f(h)
            }

            function _(t, i) {
                var s = i.length > 0,
                    o = t.length > 0,
                    r = function (n, r, a, l, u) {
                        var h, c, p, d = 0,
                            f = "0",
                            m = n && [],
                            v = [],
                            y = E,
                            _ = n || o && w.find.TAG("*", u),
                            x = j += null == y ? 1 : Math.random() || .1,
                            b = _.length;
                        for (u && (E = r !== I && r); f !== b && null != (h = _[f]); f++) {
                            if (o && h) {
                                for (c = 0; p = t[c++];)
                                    if (p(h, r, a)) {
                                        l.push(h);
                                        break
                                    }
                                u && (j = x)
                            }
                            s && ((h = !p && h) && d--, n && m.push(h))
                        }
                        if (d += f, s && f !== d) {
                            for (c = 0; p = i[c++];) p(m, v, r, a);
                            if (n) {
                                if (d > 0)
                                    for (; f--;) m[f] || v[f] || (v[f] = J.call(l));
                                v = g(v)
                            }
                            te.apply(l, v), u && !n && v.length > 0 && d + i.length > 1 && e.uniqueSort(l)
                        }
                        return u && (j = x, E = y), m
                    };
                return s ? n(r) : r
            }
            var x, b, w, T, M, S, C, A, E, k, O, L, I, P, H, N, F, D, R, B = "sizzle" + -new Date,
                z = t.document,
                j = 0,
                q = 0,
                X = i(),
                U = i(),
                V = i(),
                W = function (t, e) {
                    return t === e && (O = !0), 0
                },
                Y = "undefined",
                Q = 1 << 31,
                G = {}.hasOwnProperty,
                Z = [],
                J = Z.pop,
                K = Z.push,
                te = Z.push,
                ee = Z.slice,
                ie = Z.indexOf || function (t) {
                    for (var e = 0, i = this.length; i > e; e++)
                        if (this[e] === t) return e;
                    return -1
                },
                ne = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                se = "[\\x20\\t\\r\\n\\f]",
                oe = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                re = oe.replace("w", "w#"),
                ae = "\\[" + se + "*(" + oe + ")(?:" + se + "*([*^$|!~]?=)" + se + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + re + "))|)" + se + "*\\]",
                le = ":(" + oe + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ae + ")*)|.*)\\)|)",
                ue = new RegExp("^" + se + "+|((?:^|[^\\\\])(?:\\\\.)*)" + se + "+$", "g"),
                he = new RegExp("^" + se + "*," + se + "*"),
                ce = new RegExp("^" + se + "*([>+~]|" + se + ")" + se + "*"),
                pe = new RegExp("=" + se + "*([^\\]'\"]*?)" + se + "*\\]", "g"),
                de = new RegExp(le),
                fe = new RegExp("^" + re + "$"),
                me = {
                    ID: new RegExp("^#(" + oe + ")"),
                    CLASS: new RegExp("^\\.(" + oe + ")"),
                    TAG: new RegExp("^(" + oe.replace("w", "w*") + ")"),
                    ATTR: new RegExp("^" + ae),
                    PSEUDO: new RegExp("^" + le),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + se + "*(even|odd|(([+-]|)(\\d*)n|)" + se + "*(?:([+-]|)" + se + "*(\\d+)|))" + se + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + ne + ")$", "i"),
                    needsContext: new RegExp("^" + se + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + se + "*((?:-\\d)?\\d*)" + se + "*\\)|)(?=[^-]|$)", "i")
                },
                ge = /^(?:input|select|textarea|button)$/i,
                ve = /^h\d$/i,
                $ = /^[^{]+\{\s*\[native \w/,
                ye = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                _e = /[+~]/,
                xe = /'|\\/g,
                be = new RegExp("\\\\([\\da-f]{1,6}" + se + "?|(" + se + ")|.)", "ig"),
                we = function (t, e, i) {
                    var n = "0x" + e - 65536;
                    return n !== n || i ? e : 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
                };
            try {
                te.apply(Z = ee.call(z.childNodes), z.childNodes), Z[z.childNodes.length].nodeType
            } catch (Te) {
                te = {
                    apply: Z.length ? function (t, e) {
                        K.apply(t, ee.call(e))
                    } : function (t, e) {
                        for (var i = t.length, n = 0; t[i++] = e[n++];);
                        t.length = i - 1
                    }
                }
            }
            b = e.support = {}, M = e.isXML = function (t) {
                var e = t && (t.ownerDocument || t)
                    .documentElement;
                return e ? "HTML" !== e.nodeName : !1
            }, L = e.setDocument = function (t) {
                var e, i = t ? t.ownerDocument || t : z,
                    n = i.defaultView;
                return i !== I && 9 === i.nodeType && i.documentElement ? (I = i, P = i.documentElement, H = !M(i), n && n !== n.top && (n.addEventListener ? n.addEventListener("unload", function () {
                    L()
                }, !1) : n.attachEvent && n.attachEvent("onunload", function () {
                    L()
                })), b.attributes = s(function (t) {
                    return t.className = "i", !t.getAttribute("className")
                }), b.getElementsByTagName = s(function (t) {
                    return t.appendChild(i.createComment("")), !t.getElementsByTagName("*")
                        .length
                }), b.getElementsByClassName = $.test(i.getElementsByClassName) && s(function (t) {
                    return t.innerHTML = "<div class='a'></div><div class='a i'></div>", t.firstChild.className = "i", 2 === t.getElementsByClassName("i")
                        .length
                }), b.getById = s(function (t) {
                    return P.appendChild(t)
                        .id = B, !i.getElementsByName || !i.getElementsByName(B)
                        .length
                }), b.getById ? (w.find.ID = function (t, e) {
                    if (typeof e.getElementById !== Y && H) {
                        var i = e.getElementById(t);
                        return i && i.parentNode ? [i] : []
                    }
                }, w.filter.ID = function (t) {
                    var e = t.replace(be, we);
                    return function (t) {
                        return t.getAttribute("id") === e
                    }
                }) : (delete w.find.ID, w.filter.ID = function (t) {
                    var e = t.replace(be, we);
                    return function (t) {
                        var i = typeof t.getAttributeNode !== Y && t.getAttributeNode("id");
                        return i && i.value === e
                    }
                }), w.find.TAG = b.getElementsByTagName ? function (t, e) {
                    return typeof e.getElementsByTagName !== Y ? e.getElementsByTagName(t) : void 0
                } : function (t, e) {
                    var i, n = [],
                        s = 0,
                        o = e.getElementsByTagName(t);
                    if ("*" === t) {
                        for (; i = o[s++];) 1 === i.nodeType && n.push(i);
                        return n
                    }
                    return o
                }, w.find.CLASS = b.getElementsByClassName && function (t, e) {
                    return typeof e.getElementsByClassName !== Y && H ? e.getElementsByClassName(t) : void 0
                }, F = [], N = [], (b.qsa = $.test(i.querySelectorAll)) && (s(function (t) {
                    t.innerHTML = "<select msallowclip=''><option selected=''></option></select>", t.querySelectorAll("[msallowclip^='']")
                        .length && N.push("[*^$]=" + se + "*(?:''|\"\")"), t.querySelectorAll("[selected]")
                        .length || N.push("\\[" + se + "*(?:value|" + ne + ")"), t.querySelectorAll(":checked")
                        .length || N.push(":checked")
                }), s(function (t) {
                    var e = i.createElement("input");
                    e.setAttribute("type", "hidden"), t.appendChild(e)
                        .setAttribute("name", "D"), t.querySelectorAll("[name=d]")
                        .length && N.push("name" + se + "*[*^$|!~]?="), t.querySelectorAll(":enabled")
                        .length || N.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), N.push(",.*:")
                })), (b.matchesSelector = $.test(D = P.matches || P.webkitMatchesSelector || P.mozMatchesSelector || P.oMatchesSelector || P.msMatchesSelector)) && s(function (t) {
                    b.disconnectedMatch = D.call(t, "div"), D.call(t, "[s!='']:x"), F.push("!=", le)
                }), N = N.length && new RegExp(N.join("|")), F = F.length && new RegExp(F.join("|")), e = $.test(P.compareDocumentPosition), R = e || $.test(P.contains) ? function (t, e) {
                    var i = 9 === t.nodeType ? t.documentElement : t,
                        n = e && e.parentNode;
                    return t === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(n)))
                } : function (t, e) {
                    if (e)
                        for (; e = e.parentNode;)
                            if (e === t) return !0;
                    return !1
                }, W = e ? function (t, e) {
                    if (t === e) return O = !0, 0;
                    var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
                    return n ? n : (n = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & n || !b.sortDetached && e.compareDocumentPosition(t) === n ? t === i || t.ownerDocument === z && R(z, t) ? -1 : e === i || e.ownerDocument === z && R(z, e) ? 1 : k ? ie.call(k, t) - ie.call(k, e) : 0 : 4 & n ? -1 : 1)
                } : function (t, e) {
                    if (t === e) return O = !0, 0;
                    var n, s = 0,
                        o = t.parentNode,
                        a = e.parentNode,
                        l = [t],
                        u = [e];
                    if (!o || !a) return t === i ? -1 : e === i ? 1 : o ? -1 : a ? 1 : k ? ie.call(k, t) - ie.call(k, e) : 0;
                    if (o === a) return r(t, e);
                    for (n = t; n = n.parentNode;) l.unshift(n);
                    for (n = e; n = n.parentNode;) u.unshift(n);
                    for (; l[s] === u[s];) s++;
                    return s ? r(l[s], u[s]) : l[s] === z ? -1 : u[s] === z ? 1 : 0
                }, i) : I
            }, e.matches = function (t, i) {
                return e(t, null, null, i)
            }, e.matchesSelector = function (t, i) {
                if ((t.ownerDocument || t) !== I && L(t), i = i.replace(pe, "='$1']"), !(!b.matchesSelector || !H || F && F.test(i) || N && N.test(i))) try {
                    var n = D.call(t, i);
                    if (n || b.disconnectedMatch || t.document && 11 !== t.document.nodeType) return n
                } catch (s) {}
                return e(i, I, null, [t])
                    .length > 0
            }, e.contains = function (t, e) {
                return (t.ownerDocument || t) !== I && L(t), R(t, e)
            }, e.attr = function (t, e) {
                (t.ownerDocument || t) !== I && L(t);
                var i = w.attrHandle[e.toLowerCase()],
                    n = i && G.call(w.attrHandle, e.toLowerCase()) ? i(t, e, !H) : void 0;
                return void 0 !== n ? n : b.attributes || !H ? t.getAttribute(e) : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
            }, e.error = function (t) {
                throw new Error("Syntax error, unrecognized expression: " + t)
            }, e.uniqueSort = function (t) {
                var e, i = [],
                    n = 0,
                    s = 0;
                if (O = !b.detectDuplicates, k = !b.sortStable && t.slice(0), t.sort(W), O) {
                    for (; e = t[s++];) e === t[s] && (n = i.push(s));
                    for (; n--;) t.splice(i[n], 1)
                }
                return k = null, t
            }, T = e.getText = function (t) {
                var e, i = "",
                    n = 0,
                    s = t.nodeType;
                if (s) {
                    if (1 === s || 9 === s || 11 === s) {
                        if ("string" == typeof t.textContent) return t.textContent;
                        for (t = t.firstChild; t; t = t.nextSibling) i += T(t)
                    } else if (3 === s || 4 === s) return t.nodeValue
                } else
                    for (; e = t[n++];) i += T(e);
                return i
            }, w = e.selectors = {
                cacheLength: 50,
                createPseudo: n,
                match: me,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function (t) {
                        return t[1] = t[1].replace(be, we), t[3] = (t[3] || t[4] || t[5] || "")
                            .replace(be, we), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                    },
                    CHILD: function (t) {
                        return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
                    },
                    PSEUDO: function (t) {
                        var e, i = !t[6] && t[2];
                        return me.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : i && de.test(i) && (e = S(i, !0)) && (e = i.indexOf(")", i.length - e) - i.length) && (t[0] = t[0].slice(0, e), t[2] = i.slice(0, e)), t.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function (t) {
                        var e = t.replace(be, we)
                            .toLowerCase();
                        return "*" === t ? function () {
                            return !0
                        } : function (t) {
                            return t.nodeName && t.nodeName.toLowerCase() === e
                        }
                    },
                    CLASS: function (t) {
                        var e = X[t + " "];
                        return e || (e = new RegExp("(^|" + se + ")" + t + "(" + se + "|$)")) && X(t, function (t) {
                            return e.test("string" == typeof t.className && t.className || typeof t.getAttribute !== Y && t.getAttribute("class") || "")
                        })
                    },
                    ATTR: function (t, i, n) {
                        return function (s) {
                            var o = e.attr(s, t);
                            return null == o ? "!=" === i : i ? (o += "", "=" === i ? o === n : "!=" === i ? o !== n : "^=" === i ? n && 0 === o.indexOf(n) : "*=" === i ? n && o.indexOf(n) > -1 : "$=" === i ? n && o.slice(-n.length) === n : "~=" === i ? (" " + o + " ")
                                .indexOf(n) > -1 : "|=" === i ? o === n || o.slice(0, n.length + 1) === n + "-" : !1) : !0
                        }
                    },
                    CHILD: function (t, e, i, n, s) {
                        var o = "nth" !== t.slice(0, 3),
                            r = "last" !== t.slice(-4),
                            a = "of-type" === e;
                        return 1 === n && 0 === s ? function (t) {
                            return !!t.parentNode
                        } : function (e, i, l) {
                            var u, h, c, p, d, f, m = o !== r ? "nextSibling" : "previousSibling",
                                g = e.parentNode,
                                v = a && e.nodeName.toLowerCase(),
                                y = !l && !a;
                            if (g) {
                                if (o) {
                                    for (; m;) {
                                        for (c = e; c = c[m];)
                                            if (a ? c.nodeName.toLowerCase() === v : 1 === c.nodeType) return !1;
                                        f = m = "only" === t && !f && "nextSibling"
                                    }
                                    return !0
                                }
                                if (f = [r ? g.firstChild : g.lastChild], r && y) {
                                    for (h = g[B] || (g[B] = {}), u = h[t] || [], d = u[0] === j && u[1], p = u[0] === j && u[2], c = d && g.childNodes[d]; c = ++d && c && c[m] || (p = d = 0) || f.pop();)
                                        if (1 === c.nodeType && ++p && c === e) {
                                            h[t] = [j, d, p];
                                            break
                                        }
                                } else if (y && (u = (e[B] || (e[B] = {}))[t]) && u[0] === j) p = u[1];
                                else
                                    for (;
                                        (c = ++d && c && c[m] || (p = d = 0) || f.pop()) && ((a ? c.nodeName.toLowerCase() !== v : 1 !== c.nodeType) || !++p || (y && ((c[B] || (c[B] = {}))[t] = [j, p]), c !== e)););
                                return p -= s, p === n || p % n === 0 && p / n >= 0
                            }
                        }
                    },
                    PSEUDO: function (t, i) {
                        var s, o = w.pseudos[t] || w.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                        return o[B] ? o(i) : o.length > 1 ? (s = [t, t, "", i], w.setFilters.hasOwnProperty(t.toLowerCase()) ? n(function (t, e) {
                            for (var n, s = o(t, i), r = s.length; r--;) n = ie.call(t, s[r]), t[n] = !(e[n] = s[r])
                        }) : function (t) {
                            return o(t, 0, s)
                        }) : o
                    }
                },
                pseudos: {
                    not: n(function (t) {
                        var e = [],
                            i = [],
                            s = C(t.replace(ue, "$1"));
                        return s[B] ? n(function (t, e, i, n) {
                            for (var o, r = s(t, null, n, []), a = t.length; a--;)(o = r[a]) && (t[a] = !(e[a] = o))
                        }) : function (t, n, o) {
                            return e[0] = t, s(e, null, o, i), !i.pop()
                        }
                    }),
                    has: n(function (t) {
                        return function (i) {
                            return e(t, i)
                                .length > 0
                        }
                    }),
                    contains: n(function (t) {
                        return function (e) {
                            return (e.textContent || e.innerText || T(e))
                                .indexOf(t) > -1
                        }
                    }),
                    lang: n(function (t) {
                        return fe.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(be, we)
                            .toLowerCase(),
                            function (e) {
                                var i;
                                do
                                    if (i = H ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return i = i.toLowerCase(), i === t || 0 === i.indexOf(t + "-");
                                while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                    }),
                    target: function (e) {
                        var i = t.location && t.location.hash;
                        return i && i.slice(1) === e.id
                    },
                    root: function (t) {
                        return t === P
                    },
                    focus: function (t) {
                        return t === I.activeElement && (!I.hasFocus || I.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                    },
                    enabled: function (t) {
                        return t.disabled === !1
                    },
                    disabled: function (t) {
                        return t.disabled === !0
                    },
                    checked: function (t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && !!t.checked || "option" === e && !!t.selected
                    },
                    selected: function (t) {
                        return t.parentNode && t.parentNode.selectedIndex, t.selected === !0
                    },
                    empty: function (t) {
                        for (t = t.firstChild; t; t = t.nextSibling)
                            if (t.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function (t) {
                        return !w.pseudos.empty(t)
                    },
                    header: function (t) {
                        return ve.test(t.nodeName)
                    },
                    input: function (t) {
                        return ge.test(t.nodeName)
                    },
                    button: function (t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && "button" === t.type || "button" === e
                    },
                    text: function (t) {
                        var e;
                        return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                    },
                    first: u(function () {
                        return [0]
                    }),
                    last: u(function (t, e) {
                        return [e - 1]
                    }),
                    eq: u(function (t, e, i) {
                        return [0 > i ? i + e : i]
                    }),
                    even: u(function (t, e) {
                        for (var i = 0; e > i; i += 2) t.push(i);
                        return t
                    }),
                    odd: u(function (t, e) {
                        for (var i = 1; e > i; i += 2) t.push(i);
                        return t
                    }),
                    lt: u(function (t, e, i) {
                        for (var n = 0 > i ? i + e : i; --n >= 0;) t.push(n);
                        return t
                    }),
                    gt: u(function (t, e, i) {
                        for (var n = 0 > i ? i + e : i; ++n < e;) t.push(n);
                        return t
                    })
                }
            }, w.pseudos.nth = w.pseudos.eq;
            for (x in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) w.pseudos[x] = a(x);
            for (x in {
                    submit: !0,
                    reset: !0
                }) w.pseudos[x] = l(x);
            return c.prototype = w.filters = w.pseudos, w.setFilters = new c, S = e.tokenize = function (t, i) {
                    var n, s, o, r, a, l, u, h = U[t + " "];
                    if (h) return i ? 0 : h.slice(0);
                    for (a = t, l = [], u = w.preFilter; a;) {
                        (!n || (s = he.exec(a))) && (s && (a = a.slice(s[0].length) || a), l.push(o = [])), n = !1, (s = ce.exec(a)) && (n = s.shift(), o.push({
                            value: n,
                            type: s[0].replace(ue, " ")
                        }), a = a.slice(n.length));
                        for (r in w.filter) !(s = me[r].exec(a)) || u[r] && !(s = u[r](s)) || (n = s.shift(), o.push({
                            value: n,
                            type: r,
                            matches: s
                        }), a = a.slice(n.length));
                        if (!n) break
                    }
                    return i ? a.length : a ? e.error(t) : U(t, l)
                        .slice(0)
                }, C = e.compile = function (t, e) {
                    var i, n = [],
                        s = [],
                        o = V[t + " "];
                    if (!o) {
                        for (e || (e = S(t)), i = e.length; i--;) o = y(e[i]), o[B] ? n.push(o) : s.push(o);
                        o = V(t, _(s, n)), o.selector = t
                    }
                    return o
                }, A = e.select = function (t, e, i, n) {
                    var s, o, r, a, l, u = "function" == typeof t && t,
                        c = !n && S(t = u.selector || t);
                    if (i = i || [], 1 === c.length) {
                        if (o = c[0] = c[0].slice(0), o.length > 2 && "ID" === (r = o[0])
                            .type && b.getById && 9 === e.nodeType && H && w.relative[o[1].type]) {
                            if (e = (w.find.ID(r.matches[0].replace(be, we), e) || [])[0], !e) return i;
                            u && (e = e.parentNode), t = t.slice(o.shift()
                                .value.length)
                        }
                        for (s = me.needsContext.test(t) ? 0 : o.length; s-- && (r = o[s], !w.relative[a = r.type]);)
                            if ((l = w.find[a]) && (n = l(r.matches[0].replace(be, we), _e.test(o[0].type) && h(e.parentNode) || e))) {
                                if (o.splice(s, 1), t = n.length && p(o), !t) return te.apply(i, n), i;
                                break
                            }
                    }
                    return (u || C(t, c))(n, e, !H, i, _e.test(t) && h(e.parentNode) || e), i
                }, b.sortStable = B.split("")
                .sort(W)
                .join("") === B, b.detectDuplicates = !!O, L(), b.sortDetached = s(function (t) {
                    return 1 & t.compareDocumentPosition(I.createElement("div"))
                }), s(function (t) {
                    return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
                }) || o("type|href|height|width", function (t, e, i) {
                    return i ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
                }), b.attributes && s(function (t) {
                    return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
                }) || o("value", function (t, e, i) {
                    return i || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue
                }), s(function (t) {
                    return null == t.getAttribute("disabled")
                }) || o(ne, function (t, e, i) {
                    var n;
                    return i ? void 0 : t[e] === !0 ? e.toLowerCase() : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
                }), e
        }(t);
        oe.find = he, oe.expr = he.selectors, oe.expr[":"] = oe.expr.pseudos, oe.unique = he.uniqueSort, oe.text = he.getText, oe.isXMLDoc = he.isXML, oe.contains = he.contains;
        var ce = oe.expr.match.needsContext,
            pe = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
            de = /^.[^:#\[\.,]*$/;
        oe.filter = function (t, e, i) {
            var n = e[0];
            return i && (t = ":not(" + t + ")"), 1 === e.length && 1 === n.nodeType ? oe.find.matchesSelector(n, t) ? [n] : [] : oe.find.matches(t, oe.grep(e, function (t) {
                return 1 === t.nodeType
            }))
        }, oe.fn.extend({
            find: function (t) {
                var e, i = [],
                    n = this,
                    s = n.length;
                if ("string" != typeof t) return this.pushStack(oe(t)
                    .filter(function () {
                        for (e = 0; s > e; e++)
                            if (oe.contains(n[e], this)) return !0
                    }));
                for (e = 0; s > e; e++) oe.find(t, n[e], i);
                return i = this.pushStack(s > 1 ? oe.unique(i) : i), i.selector = this.selector ? this.selector + " " + t : t, i
            },
            filter: function (t) {
                return this.pushStack(n(this, t || [], !1))
            },
            not: function (t) {
                return this.pushStack(n(this, t || [], !0))
            },
            is: function (t) {
                return !!n(this, "string" == typeof t && ce.test(t) ? oe(t) : t || [], !1)
                    .length
            }
        });
        var fe, me = t.document,
            ge = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
            ve = oe.fn.init = function (t, e) {
                var i, n;
                if (!t) return this;
                if ("string" == typeof t) {
                    if (i = "<" === t.charAt(0) && ">" === t.charAt(t.length - 1) && t.length >= 3 ? [null, t, null] : ge.exec(t), !i || !i[1] && e) return !e || e.jquery ? (e || fe)
                        .find(t) : this.constructor(e)
                        .find(t);
                    if (i[1]) {
                        if (e = e instanceof oe ? e[0] : e, oe.merge(this, oe.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e : me, !0)), pe.test(i[1]) && oe.isPlainObject(e))
                            for (i in e) oe.isFunction(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
                        return this
                    }
                    if (n = me.getElementById(i[2]), n && n.parentNode) {
                        if (n.id !== i[2]) return fe.find(t);
                        this.length = 1, this[0] = n
                    }
                    return this.context = me, this.selector = t, this
                }
                return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : oe.isFunction(t) ? "undefined" != typeof fe.ready ? fe.ready(t) : t(oe) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), oe.makeArray(t, this))
            };
        ve.prototype = oe.fn, fe = oe(me);
        var ye = /^(?:parents|prev(?:Until|All))/,
            _e = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        oe.extend({
            dir: function (t, e, i) {
                for (var n = [], s = t[e]; s && 9 !== s.nodeType && (void 0 === i || 1 !== s.nodeType || !oe(s)
                        .is(i));) 1 === s.nodeType && n.push(s), s = s[e];
                return n
            },
            sibling: function (t, e) {
                for (var i = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && i.push(t);
                return i
            }
        }), oe.fn.extend({
            has: function (t) {
                var e, i = oe(t, this),
                    n = i.length;
                return this.filter(function () {
                    for (e = 0; n > e; e++)
                        if (oe.contains(this, i[e])) return !0
                })
            },
            closest: function (t, e) {
                for (var i, n = 0, s = this.length, o = [], r = ce.test(t) || "string" != typeof t ? oe(t, e || this.context) : 0; s > n; n++)
                    for (i = this[n]; i && i !== e; i = i.parentNode)
                        if (i.nodeType < 11 && (r ? r.index(i) > -1 : 1 === i.nodeType && oe.find.matchesSelector(i, t))) {
                            o.push(i);
                            break
                        }
                return this.pushStack(o.length > 1 ? oe.unique(o) : o)
            },
            index: function (t) {
                return t ? "string" == typeof t ? oe.inArray(this[0], oe(t)) : oe.inArray(t.jquery ? t[0] : t, this) : this[0] && this[0].parentNode ? this.first()
                    .prevAll()
                    .length : -1
            },
            add: function (t, e) {
                return this.pushStack(oe.unique(oe.merge(this.get(), oe(t, e))))
            },
            addBack: function (t) {
                return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
            }
        }), oe.each({
            parent: function (t) {
                var e = t.parentNode;
                return e && 11 !== e.nodeType ? e : null
            },
            parents: function (t) {
                return oe.dir(t, "parentNode")
            },
            parentsUntil: function (t, e, i) {
                return oe.dir(t, "parentNode", i)
            },
            next: function (t) {
                return s(t, "nextSibling")
            },
            prev: function (t) {
                return s(t, "previousSibling")
            },
            nextAll: function (t) {
                return oe.dir(t, "nextSibling")
            },
            prevAll: function (t) {
                return oe.dir(t, "previousSibling")
            },
            nextUntil: function (t, e, i) {
                return oe.dir(t, "nextSibling", i)
            },
            prevUntil: function (t, e, i) {
                return oe.dir(t, "previousSibling", i)
            },
            siblings: function (t) {
                return oe.sibling((t.parentNode || {})
                    .firstChild, t)
            },
            children: function (t) {
                return oe.sibling(t.firstChild)
            },
            contents: function (t) {
                return oe.nodeName(t, "iframe") ? t.contentDocument || t.contentWindow.document : oe.merge([], t.childNodes)
            }
        }, function (t, e) {
            oe.fn[t] = function (i, n) {
                var s = oe.map(this, e, i);
                return "Until" !== t.slice(-5) && (n = i), n && "string" == typeof n && (s = oe.filter(n, s)), this.length > 1 && (_e[t] || (s = oe.unique(s)), ye.test(t) && (s = s.reverse())), this.pushStack(s)
            }
        });
        var xe = /\S+/g,
            be = {};
        oe.Callbacks = function (t) {
            t = "string" == typeof t ? be[t] || o(t) : oe.extend({}, t);
            var e, i, n, s, r, a, l = [],
                u = !t.once && [],
                h = function (o) {
                    for (i = t.memory && o, n = !0, r = a || 0, a = 0, s = l.length, e = !0; l && s > r; r++)
                        if (l[r].apply(o[0], o[1]) === !1 && t.stopOnFalse) {
                            i = !1;
                            break
                        }
                    e = !1, l && (u ? u.length && h(u.shift()) : i ? l = [] : c.disable())
                },
                c = {
                    add: function () {
                        if (l) {
                            var n = l.length;
                            ! function o(e) {
                                oe.each(e, function (e, i) {
                                    var n = oe.type(i);
                                    "function" === n ? t.unique && c.has(i) || l.push(i) : i && i.length && "string" !== n && o(i)
                                })
                            }(arguments), e ? s = l.length : i && (a = n, h(i))
                        }
                        return this
                    },
                    remove: function () {
                        return l && oe.each(arguments, function (t, i) {
                            for (var n;
                                (n = oe.inArray(i, l, n)) > -1;) l.splice(n, 1), e && (s >= n && s--, r >= n && r--)
                        }), this
                    },
                    has: function (t) {
                        return t ? oe.inArray(t, l) > -1 : !(!l || !l.length)
                    },
                    empty: function () {
                        return l = [], s = 0, this
                    },
                    disable: function () {
                        return l = u = i = void 0, this
                    },
                    disabled: function () {
                        return !l
                    },
                    lock: function () {
                        return u = void 0, i || c.disable(), this
                    },
                    locked: function () {
                        return !u
                    },
                    fireWith: function (t, i) {
                        return !l || n && !u || (i = i || [], i = [t, i.slice ? i.slice() : i], e ? u.push(i) : h(i)), this
                    },
                    fire: function () {
                        return c.fireWith(this, arguments), this
                    },
                    fired: function () {
                        return !!n
                    }
                };
            return c
        }, oe.extend({
            Deferred: function (t) {
                var e = [
                        ["resolve", "done", oe.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", oe.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", oe.Callbacks("memory")]
                    ],
                    i = "pending",
                    n = {
                        state: function () {
                            return i
                        },
                        always: function () {
                            return s.done(arguments)
                                .fail(arguments), this
                        },
                        then: function () {
                            var t = arguments;
                            return oe.Deferred(function (i) {
                                    oe.each(e, function (e, o) {
                                        var r = oe.isFunction(t[e]) && t[e];
                                        s[o[1]](function () {
                                            var t = r && r.apply(this, arguments);
                                            t && oe.isFunction(t.promise) ? t.promise()
                                                .done(i.resolve)
                                                .fail(i.reject)
                                                .progress(i.notify) : i[o[0] + "With"](this === n ? i.promise() : this, r ? [t] : arguments)
                                        })
                                    }), t = null
                                })
                                .promise()
                        },
                        promise: function (t) {
                            return null != t ? oe.extend(t, n) : n
                        }
                    },
                    s = {};
                return n.pipe = n.then, oe.each(e, function (t, o) {
                    var r = o[2],
                        a = o[3];
                    n[o[1]] = r.add, a && r.add(function () {
                        i = a
                    }, e[1 ^ t][2].disable, e[2][2].lock), s[o[0]] = function () {
                        return s[o[0] + "With"](this === s ? n : this, arguments), this
                    }, s[o[0] + "With"] = r.fireWith
                }), n.promise(s), t && t.call(s, s), s
            },
            when: function (t) {
                var e = 0,
                    i = G.call(arguments),
                    n = i.length,
                    s = 1 !== n || t && oe.isFunction(t.promise) ? n : 0,
                    o = 1 === s ? t : oe.Deferred(),
                    r = function (t, e, i) {
                        return function (n) {
                            e[t] = this, i[t] = arguments.length > 1 ? G.call(arguments) : n, i === a ? o.notifyWith(e, i) : --s || o.resolveWith(e, i)
                        }
                    },
                    a, l, u;
                if (n > 1)
                    for (a = new Array(n), l = new Array(n), u = new Array(n); n > e; e++) i[e] && oe.isFunction(i[e].promise) ? i[e].promise()
                        .done(r(e, u, i))
                        .fail(o.reject)
                        .progress(r(e, l, a)) : --s;
                return s || o.resolveWith(u, i), o.promise()
            }
        });
        var we;
        oe.fn.ready = function (t) {
            return oe.ready.promise()
                .done(t), this
        }, oe.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function (t) {
                t ? oe.readyWait++ : oe.ready(!0)
            },
            ready: function (t) {
                if (t === !0 ? !--oe.readyWait : !oe.isReady) {
                    if (!me.body) return setTimeout(oe.ready);
                    oe.isReady = !0, t !== !0 && --oe.readyWait > 0 || (we.resolveWith(me, [oe]), oe.fn.triggerHandler && (oe(me)
                        .triggerHandler("ready"), oe(me)
                        .off("ready")))
                }
            }
        }), oe.ready.promise = function (e) {
            if (!we)
                if (we = oe.Deferred(), "complete" === me.readyState) setTimeout(oe.ready);
                else if (me.addEventListener) me.addEventListener("DOMContentLoaded", a, !1), t.addEventListener("load", a, !1);
            else {
                me.attachEvent("onreadystatechange", a), t.attachEvent("onload", a);
                var i = !1;
                try {
                    i = null == t.frameElement && me.documentElement
                } catch (n) {}
                i && i.doScroll && ! function s() {
                    if (!oe.isReady) {
                        try {
                            i.doScroll("left")
                        } catch (t) {
                            return setTimeout(s, 50)
                        }
                        r(), oe.ready()
                    }
                }()
            }
            return we.promise(e)
        };
        var Te = "undefined",
            Me;
        for (Me in oe(ne)) break;
        ne.ownLast = "0" !== Me, ne.inlineBlockNeedsLayout = !1, oe(function () {
                var t, e, i, n;
                i = me.getElementsByTagName("body")[0], i && i.style && (e = me.createElement("div"), n = me.createElement("div"), n.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", i.appendChild(n)
                    .appendChild(e), typeof e.style.zoom !== Te && (e.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", ne.inlineBlockNeedsLayout = t = 3 === e.offsetWidth, t && (i.style.zoom = 1)), i.removeChild(n))
            }),
            function () {
                var t = me.createElement("div");
                if (null == ne.deleteExpando) {
                    ne.deleteExpando = !0;
                    try {
                        delete t.test
                    } catch (e) {
                        ne.deleteExpando = !1
                    }
                }
                t = null
            }(), oe.acceptData = function (t) {
                var e = oe.noData[(t.nodeName + " ")
                        .toLowerCase()],
                    i = +t.nodeType || 1;
                return 1 !== i && 9 !== i ? !1 : !e || e !== !0 && t.getAttribute("classid") === e
            };
        var Se = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            Ce = /([A-Z])/g;
        oe.extend({
            cache: {},
            noData: {
                "applet ": !0,
                "embed ": !0,
                "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
            },
            hasData: function (t) {
                return t = t.nodeType ? oe.cache[t[oe.expando]] : t[oe.expando], !!t && !u(t)
            },
            data: function (t, e, i) {
                return h(t, e, i)
            },
            removeData: function (t, e) {
                return c(t, e)
            },
            _data: function (t, e, i) {
                return h(t, e, i, !0)
            },
            _removeData: function (t, e) {
                return c(t, e, !0)
            }
        }), oe.fn.extend({
            data: function (t, e) {
                var i, n, s, o = this[0],
                    r = o && o.attributes;
                if (void 0 === t) {
                    if (this.length && (s = oe.data(o), 1 === o.nodeType && !oe._data(o, "parsedAttrs"))) {
                        for (i = r.length; i--;) r[i] && (n = r[i].name, 0 === n.indexOf("data-") && (n = oe.camelCase(n.slice(5)), l(o, n, s[n])));
                        oe._data(o, "parsedAttrs", !0)
                    }
                    return s
                }
                return "object" == typeof t ? this.each(function () {
                    oe.data(this, t)
                }) : arguments.length > 1 ? this.each(function () {
                    oe.data(this, t, e)
                }) : o ? l(o, t, oe.data(o, t)) : void 0
            },
            removeData: function (t) {
                return this.each(function () {
                    oe.removeData(this, t)
                })
            }
        }), oe.extend({
            queue: function (t, e, i) {
                var n;
                return t ? (e = (e || "fx") + "queue", n = oe._data(t, e), i && (!n || oe.isArray(i) ? n = oe._data(t, e, oe.makeArray(i)) : n.push(i)), n || []) : void 0
            },
            dequeue: function (t, e) {
                e = e || "fx";
                var i = oe.queue(t, e),
                    n = i.length,
                    s = i.shift(),
                    o = oe._queueHooks(t, e),
                    r = function () {
                        oe.dequeue(t, e)
                    };
                "inprogress" === s && (s = i.shift(), n--), s && ("fx" === e && i.unshift("inprogress"), delete o.stop, s.call(t, r, o)), !n && o && o.empty.fire()
            },
            _queueHooks: function (t, e) {
                var i = e + "queueHooks";
                return oe._data(t, i) || oe._data(t, i, {
                    empty: oe.Callbacks("once memory")
                        .add(function () {
                            oe._removeData(t, e + "queue"), oe._removeData(t, i)
                        })
                })
            }
        }), oe.fn.extend({
            queue: function (t, e) {
                var i = 2;
                return "string" != typeof t && (e = t, t = "fx", i--), arguments.length < i ? oe.queue(this[0], t) : void 0 === e ? this : this.each(function () {
                    var i = oe.queue(this, t, e);
                    oe._queueHooks(this, t), "fx" === t && "inprogress" !== i[0] && oe.dequeue(this, t)
                })
            },
            dequeue: function (t) {
                return this.each(function () {
                    oe.dequeue(this, t)
                })
            },
            clearQueue: function (t) {
                return this.queue(t || "fx", [])
            },
            promise: function (t, e) {
                var i, n = 1,
                    s = oe.Deferred(),
                    o = this,
                    r = this.length,
                    a = function () {
                        --n || s.resolveWith(o, [o])
                    };
                for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; r--;) i = oe._data(o[r], t + "queueHooks"), i && i.empty && (n++, i.empty.add(a));
                return a(), s.promise(e)
            }
        });
        var Ae = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            Ee = ["Top", "Right", "Bottom", "Left"],
            ke = function (t, e) {
                return t = e || t, "none" === oe.css(t, "display") || !oe.contains(t.ownerDocument, t)
            },
            Oe = oe.access = function (t, e, i, n, s, o, r) {
                var a = 0,
                    l = t.length,
                    u = null == i;
                if ("object" === oe.type(i)) {
                    s = !0;
                    for (a in i) oe.access(t, e, a, i[a], !0, o, r)
                } else if (void 0 !== n && (s = !0, oe.isFunction(n) || (r = !0), u && (r ? (e.call(t, n), e = null) : (u = e, e = function (t, e, i) {
                        return u.call(oe(t), i)
                    })), e))
                    for (; l > a; a++) e(t[a], i, r ? n : n.call(t[a], a, e(t[a], i)));
                return s ? t : u ? e.call(t) : l ? e(t[0], i) : o
            },
            Le = /^(?:checkbox|radio)$/i;
        ! function () {
            var t = me.createElement("input"),
                e = me.createElement("div"),
                i = me.createDocumentFragment();
            if (e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", ne.leadingWhitespace = 3 === e.firstChild.nodeType, ne.tbody = !e.getElementsByTagName("tbody")
                .length, ne.htmlSerialize = !!e.getElementsByTagName("link")
                .length, ne.html5Clone = "<:nav></:nav>" !== me.createElement("nav")
                .cloneNode(!0)
                .outerHTML, t.type = "checkbox", t.checked = !0, i.appendChild(t), ne.appendChecked = t.checked, e.innerHTML = "<textarea>x</textarea>", ne.noCloneChecked = !!e.cloneNode(!0)
                .lastChild.defaultValue, i.appendChild(e), e.innerHTML = "<input type='radio' checked='checked' name='t'/>", ne.checkClone = e.cloneNode(!0)
                .cloneNode(!0)
                .lastChild.checked, ne.noCloneEvent = !0, e.attachEvent && (e.attachEvent("onclick", function () {
                        ne.noCloneEvent = !1
                    }), e.cloneNode(!0)
                    .click()), null == ne.deleteExpando) {
                ne.deleteExpando = !0;
                try {
                    delete e.test
                } catch (n) {
                    ne.deleteExpando = !1
                }
            }
        }(),
        function () {
            var e, i, n = me.createElement("div");
            for (e in {
                    submit: !0,
                    change: !0,
                    focusin: !0
                }) i = "on" + e, (ne[e + "Bubbles"] = i in t) || (n.setAttribute(i, "t"), ne[e + "Bubbles"] = n.attributes[i].expando === !1);
            n = null
        }();
        var Ie = /^(?:input|select|textarea)$/i,
            Pe = /^key/,
            He = /^(?:mouse|pointer|contextmenu)|click/,
            $ = /^(?:focusinfocus|focusoutblur)$/,
            Ne = /^([^.]*)(?:\.(.+)|)$/;
        oe.event = {
            global: {},
            add: function (t, e, i, n, s) {
                var o, r, a, l, u, h, c, p, d, f, m, g = oe._data(t);
                if (g) {
                    for (i.handler && (l = i, i = l.handler, s = l.selector), i.guid || (i.guid = oe.guid++), (r = g.events) || (r = g.events = {}), (h = g.handle) || (h = g.handle = function (t) {
                            return typeof oe === Te || t && oe.event.triggered === t.type ? void 0 : oe.event.dispatch.apply(h.elem, arguments)
                        }, h.elem = t), e = (e || "")
                        .match(xe) || [""], a = e.length; a--;) o = Ne.exec(e[a]) || [], d = m = o[1], f = (o[2] || "")
                        .split(".")
                        .sort(), d && (u = oe.event.special[d] || {}, d = (s ? u.delegateType : u.bindType) || d, u = oe.event.special[d] || {}, c = oe.extend({
                            type: d,
                            origType: m,
                            data: n,
                            handler: i,
                            guid: i.guid,
                            selector: s,
                            needsContext: s && oe.expr.match.needsContext.test(s),
                            namespace: f.join(".")
                        }, l), (p = r[d]) || (p = r[d] = [], p.delegateCount = 0, u.setup && u.setup.call(t, n, f, h) !== !1 || (t.addEventListener ? t.addEventListener(d, h, !1) : t.attachEvent && t.attachEvent("on" + d, h))), u.add && (u.add.call(t, c), c.handler.guid || (c.handler.guid = i.guid)), s ? p.splice(p.delegateCount++, 0, c) : p.push(c), oe.event.global[d] = !0);
                    t = null
                }
            },
            remove: function (t, e, i, n, s) {
                var o, r, a, l, u, h, c, p, d, f, m, g = oe.hasData(t) && oe._data(t);
                if (g && (h = g.events)) {
                    for (e = (e || "")
                        .match(xe) || [""], u = e.length; u--;)
                        if (a = Ne.exec(e[u]) || [], d = m = a[1], f = (a[2] || "")
                            .split(".")
                            .sort(), d) {
                            for (c = oe.event.special[d] || {}, d = (n ? c.delegateType : c.bindType) || d, p = h[d] || [], a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = o = p.length; o--;) r = p[o], !s && m !== r.origType || i && i.guid !== r.guid || a && !a.test(r.namespace) || n && n !== r.selector && ("**" !== n || !r.selector) || (p.splice(o, 1), r.selector && p.delegateCount--, c.remove && c.remove.call(t, r));
                            l && !p.length && (c.teardown && c.teardown.call(t, f, g.handle) !== !1 || oe.removeEvent(t, d, g.handle), delete h[d])
                        } else
                            for (d in h) oe.event.remove(t, d + e[u], i, n, !0);
                    oe.isEmptyObject(h) && (delete g.handle, oe._removeData(t, "events"))
                }
            },
            trigger: function (e, i, n, s) {
                var o, r, a, l, u, h, c, p = [n || me],
                    d = ie.call(e, "type") ? e.type : e,
                    f = ie.call(e, "namespace") ? e.namespace.split(".") : [];
                if (a = h = n = n || me, 3 !== n.nodeType && 8 !== n.nodeType && !$.test(d + oe.event.triggered) && (d.indexOf(".") >= 0 && (f = d.split("."), d = f.shift(), f.sort()), r = d.indexOf(":") < 0 && "on" + d, e = e[oe.expando] ? e : new oe.Event(d, "object" == typeof e && e), e.isTrigger = s ? 2 : 3, e.namespace = f.join("."), e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), i = null == i ? [e] : oe.makeArray(i, [e]), u = oe.event.special[d] || {}, s || !u.trigger || u.trigger.apply(n, i) !== !1)) {
                    if (!s && !u.noBubble && !oe.isWindow(n)) {
                        for (l = u.delegateType || d, $.test(l + d) || (a = a.parentNode); a; a = a.parentNode) p.push(a), h = a;
                        h === (n.ownerDocument || me) && p.push(h.defaultView || h.parentWindow || t)
                    }
                    for (c = 0;
                        (a = p[c++]) && !e.isPropagationStopped();) e.type = c > 1 ? l : u.bindType || d, o = (oe._data(a, "events") || {})[e.type] && oe._data(a, "handle"), o && o.apply(a, i), o = r && a[r], o && o.apply && oe.acceptData(a) && (e.result = o.apply(a, i), e.result === !1 && e.preventDefault());
                    if (e.type = d, !s && !e.isDefaultPrevented() && (!u._default || u._default.apply(p.pop(), i) === !1) && oe.acceptData(n) && r && n[d] && !oe.isWindow(n)) {
                        h = n[r], h && (n[r] = null), oe.event.triggered = d;
                        try {
                            n[d]()
                        } catch (m) {}
                        oe.event.triggered = void 0, h && (n[r] = h)
                    }
                    return e.result
                }
            },
            dispatch: function (t) {
                t = oe.event.fix(t);
                var e, i, n, s, o, r = [],
                    a = G.call(arguments),
                    l = (oe._data(this, "events") || {})[t.type] || [],
                    u = oe.event.special[t.type] || {};
                if (a[0] = t, t.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, t) !== !1) {
                    for (r = oe.event.handlers.call(this, t, l), e = 0;
                        (s = r[e++]) && !t.isPropagationStopped();)
                        for (t.currentTarget = s.elem, o = 0;
                            (n = s.handlers[o++]) && !t.isImmediatePropagationStopped();)(!t.namespace_re || t.namespace_re.test(n.namespace)) && (t.handleObj = n, t.data = n.data, i = ((oe.event.special[n.origType] || {})
                                .handle || n.handler)
                            .apply(s.elem, a), void 0 !== i && (t.result = i) === !1 && (t.preventDefault(), t.stopPropagation()));
                    return u.postDispatch && u.postDispatch.call(this, t), t.result
                }
            },
            handlers: function (t, e) {
                var i, n, s, o, r = [],
                    a = e.delegateCount,
                    l = t.target;
                if (a && l.nodeType && (!t.button || "click" !== t.type))
                    for (; l != this; l = l.parentNode || this)
                        if (1 === l.nodeType && (l.disabled !== !0 || "click" !== t.type)) {
                            for (s = [], o = 0; a > o; o++) n = e[o], i = n.selector + " ", void 0 === s[i] && (s[i] = n.needsContext ? oe(i, this)
                                .index(l) >= 0 : oe.find(i, this, null, [l])
                                .length), s[i] && s.push(n);
                            s.length && r.push({
                                elem: l,
                                handlers: s
                            })
                        }
                return a < e.length && r.push({
                    elem: this,
                    handlers: e.slice(a)
                }), r
            },
            fix: function (t) {
                if (t[oe.expando]) return t;
                var e, i, n, s = t.type,
                    o = t,
                    r = this.fixHooks[s];
                for (r || (this.fixHooks[s] = r = He.test(s) ? this.mouseHooks : Pe.test(s) ? this.keyHooks : {}), n = r.props ? this.props.concat(r.props) : this.props, t = new oe.Event(o), e = n.length; e--;) i = n[e], t[i] = o[i];
                return t.target || (t.target = o.srcElement || me), 3 === t.target.nodeType && (t.target = t.target.parentNode), t.metaKey = !!t.metaKey, r.filter ? r.filter(t, o) : t
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function (t, e) {
                    return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function (t, e) {
                    var i, n, s, o = e.button,
                        r = e.fromElement;
                    return null == t.pageX && null != e.clientX && (n = t.target.ownerDocument || me, s = n.documentElement, i = n.body, t.pageX = e.clientX + (s && s.scrollLeft || i && i.scrollLeft || 0) - (s && s.clientLeft || i && i.clientLeft || 0), t.pageY = e.clientY + (s && s.scrollTop || i && i.scrollTop || 0) - (s && s.clientTop || i && i.clientTop || 0)), !t.relatedTarget && r && (t.relatedTarget = r === t.target ? e.toElement : r), t.which || void 0 === o || (t.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), t
                }
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function () {
                        if (this !== f() && this.focus) try {
                            return this.focus(), !1
                        } catch (t) {}
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function () {
                        return this === f() && this.blur ? (this.blur(), !1) : void 0
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function () {
                        return oe.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                    },
                    _default: function (t) {
                        return oe.nodeName(t.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function (t) {
                        void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                    }
                }
            },
            simulate: function (t, e, i, n) {
                var s = oe.extend(new oe.Event, i, {
                    type: t,
                    isSimulated: !0,
                    originalEvent: {}
                });
                n ? oe.event.trigger(s, null, e) : oe.event.dispatch.call(e, s), s.isDefaultPrevented() && i.preventDefault()
            }
        }, oe.removeEvent = me.removeEventListener ? function (t, e, i) {
            t.removeEventListener && t.removeEventListener(e, i, !1)
        } : function (t, e, i) {
            var n = "on" + e;
            t.detachEvent && (typeof t[n] === Te && (t[n] = null), t.detachEvent(n, i))
        }, oe.Event = function (t, e) {
            return this instanceof oe.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && t.returnValue === !1 ? p : d) : this.type = t, e && oe.extend(this, e), this.timeStamp = t && t.timeStamp || oe.now(), void(this[oe.expando] = !0)) : new oe.Event(t, e)
        }, oe.Event.prototype = {
            isDefaultPrevented: d,
            isPropagationStopped: d,
            isImmediatePropagationStopped: d,
            preventDefault: function () {
                var t = this.originalEvent;
                this.isDefaultPrevented = p, t && (t.preventDefault ? t.preventDefault() : t.returnValue = !1)
            },
            stopPropagation: function () {
                var t = this.originalEvent;
                this.isPropagationStopped = p, t && (t.stopPropagation && t.stopPropagation(), t.cancelBubble = !0)
            },
            stopImmediatePropagation: function () {
                var t = this.originalEvent;
                this.isImmediatePropagationStopped = p, t && t.stopImmediatePropagation && t.stopImmediatePropagation(), this.stopPropagation()
            }
        }, oe.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function (t, e) {
            oe.event.special[t] = {
                delegateType: e,
                bindType: e,
                handle: function (t) {
                    var i, n = this,
                        s = t.relatedTarget,
                        o = t.handleObj;
                    return (!s || s !== n && !oe.contains(n, s)) && (t.type = o.origType, i = o.handler.apply(this, arguments), t.type = e), i
                }
            }
        }), ne.submitBubbles || (oe.event.special.submit = {
            setup: function () {
                return oe.nodeName(this, "form") ? !1 : void oe.event.add(this, "click._submit keypress._submit", function (t) {
                    var e = t.target,
                        i = oe.nodeName(e, "input") || oe.nodeName(e, "button") ? e.form : void 0;
                    i && !oe._data(i, "submitBubbles") && (oe.event.add(i, "submit._submit", function (t) {
                        t._submit_bubble = !0
                    }), oe._data(i, "submitBubbles", !0))
                })
            },
            postDispatch: function (t) {
                t._submit_bubble && (delete t._submit_bubble, this.parentNode && !t.isTrigger && oe.event.simulate("submit", this.parentNode, t, !0))
            },
            teardown: function () {
                return oe.nodeName(this, "form") ? !1 : void oe.event.remove(this, "._submit")
            }
        }), ne.changeBubbles || (oe.event.special.change = {
            setup: function () {
                return Ie.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (oe.event.add(this, "propertychange._change", function (t) {
                    "checked" === t.originalEvent.propertyName && (this._just_changed = !0)
                }), oe.event.add(this, "click._change", function (t) {
                    this._just_changed && !t.isTrigger && (this._just_changed = !1), oe.event.simulate("change", this, t, !0)
                })), !1) : void oe.event.add(this, "beforeactivate._change", function (t) {
                    var e = t.target;
                    Ie.test(e.nodeName) && !oe._data(e, "changeBubbles") && (oe.event.add(e, "change._change", function (t) {
                        !this.parentNode || t.isSimulated || t.isTrigger || oe.event.simulate("change", this.parentNode, t, !0)
                    }), oe._data(e, "changeBubbles", !0))
                })
            },
            handle: function (t) {
                var e = t.target;
                return this !== e || t.isSimulated || t.isTrigger || "radio" !== e.type && "checkbox" !== e.type ? t.handleObj.handler.apply(this, arguments) : void 0
            },
            teardown: function () {
                return oe.event.remove(this, "._change"), !Ie.test(this.nodeName)
            }
        }), ne.focusinBubbles || oe.each({
            focus: "focusin",
            blur: "focusout"
        }, function (t, e) {
            var i = function (t) {
                oe.event.simulate(e, t.target, oe.event.fix(t), !0)
            };
            oe.event.special[e] = {
                setup: function () {
                    var n = this.ownerDocument || this,
                        s = oe._data(n, e);
                    s || n.addEventListener(t, i, !0), oe._data(n, e, (s || 0) + 1)
                },
                teardown: function () {
                    var n = this.ownerDocument || this,
                        s = oe._data(n, e) - 1;
                    s ? oe._data(n, e, s) : (n.removeEventListener(t, i, !0), oe._removeData(n, e))
                }
            }
        }), oe.fn.extend({
            on: function (t, e, i, n, s) {
                var o, r;
                if ("object" == typeof t) {
                    "string" != typeof e && (i = i || e, e = void 0);
                    for (o in t) this.on(o, e, i, t[o], s);
                    return this
                }
                if (null == i && null == n ? (n = e, i = e = void 0) : null == n && ("string" == typeof e ? (n = i, i = void 0) : (n = i, i = e, e = void 0)), n === !1) n = d;
                else if (!n) return this;
                return 1 === s && (r = n, n = function (t) {
                    return oe()
                        .off(t), r.apply(this, arguments)
                }, n.guid = r.guid || (r.guid = oe.guid++)), this.each(function () {
                    oe.event.add(this, t, n, i, e)
                })
            },
            one: function (t, e, i, n) {
                return this.on(t, e, i, n, 1)
            },
            off: function (t, e, i) {
                var n, s;
                if (t && t.preventDefault && t.handleObj) return n = t.handleObj, oe(t.delegateTarget)
                    .off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
                if ("object" == typeof t) {
                    for (s in t) this.off(s, e, t[s]);
                    return this
                }
                return (e === !1 || "function" == typeof e) && (i = e, e = void 0), i === !1 && (i = d), this.each(function () {
                    oe.event.remove(this, t, i, e)
                })
            },
            trigger: function (t, e) {
                return this.each(function () {
                    oe.event.trigger(t, e, this)
                })
            },
            triggerHandler: function (t, e) {
                var i = this[0];
                return i ? oe.event.trigger(t, e, i, !0) : void 0
            }
        });
        var Fe = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
            De = / jQuery\d+="(?:null|\d+)"/g,
            Re = new RegExp("<(?:" + Fe + ")[\\s/>]", "i"),
            Be = /^\s+/,
            ze = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
            je = /<([\w:]+)/,
            qe = /<tbody/i,
            Xe = /<|&#?\w+;/,
            $e = /<(?:script|style|link)/i,
            Ue = /checked\s*(?:[^=]|=\s*.checked.)/i,
            Ve = /^$|\/(?:java|ecma)script/i,
            We = /^true\/(.*)/,
            Ye = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
            Qe = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                legend: [1, "<fieldset>", "</fieldset>"],
                area: [1, "<map>", "</map>"],
                param: [1, "<object>", "</object>"],
                thead: [1, "<table>", "</table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: ne.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
            },
            Ge = m(me),
            Ze = Ge.appendChild(me.createElement("div"));
        Qe.optgroup = Qe.option, Qe.tbody = Qe.tfoot = Qe.colgroup = Qe.caption = Qe.thead, Qe.th = Qe.td, oe.extend({
            clone: function (t, e, i) {
                var n, s, o, r, a, l = oe.contains(t.ownerDocument, t);
                if (ne.html5Clone || oe.isXMLDoc(t) || !Re.test("<" + t.nodeName + ">") ? o = t.cloneNode(!0) : (Ze.innerHTML = t.outerHTML, Ze.removeChild(o = Ze.firstChild)), !(ne.noCloneEvent && ne.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || oe.isXMLDoc(t)))
                    for (n = g(o), a = g(t), r = 0; null != (s = a[r]); ++r) n[r] && T(s, n[r]);
                if (e)
                    if (i)
                        for (a = a || g(t), n = n || g(o), r = 0; null != (s = a[r]); r++) w(s, n[r]);
                    else w(t, o);
                return n = g(o, "script"), n.length > 0 && b(n, !l && g(t, "script")), n = a = s = null, o
            },
            buildFragment: function (t, e, i, n) {
                for (var s, o, r, a, l, u, h, c = t.length, p = m(e), d = [], f = 0; c > f; f++)
                    if (o = t[f], o || 0 === o)
                        if ("object" === oe.type(o)) oe.merge(d, o.nodeType ? [o] : o);
                        else if (Xe.test(o)) {
                    for (a = a || p.appendChild(e.createElement("div")), l = (je.exec(o) || ["", ""])[1].toLowerCase(), h = Qe[l] || Qe._default, a.innerHTML = h[1] + o.replace(ze, "<$1></$2>") + h[2], s = h[0]; s--;) a = a.lastChild;
                    if (!ne.leadingWhitespace && Be.test(o) && d.push(e.createTextNode(Be.exec(o)[0])), !ne.tbody)
                        for (o = "table" !== l || qe.test(o) ? "<table>" !== h[1] || qe.test(o) ? 0 : a : a.firstChild, s = o && o.childNodes.length; s--;) oe.nodeName(u = o.childNodes[s], "tbody") && !u.childNodes.length && o.removeChild(u);
                    for (oe.merge(d, a.childNodes), a.textContent = ""; a.firstChild;) a.removeChild(a.firstChild);
                    a = p.lastChild
                } else d.push(e.createTextNode(o));
                for (a && p.removeChild(a), ne.appendChecked || oe.grep(g(d, "input"), v), f = 0; o = d[f++];)
                    if ((!n || -1 === oe.inArray(o, n)) && (r = oe.contains(o.ownerDocument, o), a = g(p.appendChild(o), "script"), r && b(a), i))
                        for (s = 0; o = a[s++];) Ve.test(o.type || "") && i.push(o);
                return a = null, p
            },
            cleanData: function (t, e) {
                for (var i, n, s, o, r = 0, a = oe.expando, l = oe.cache, u = ne.deleteExpando, h = oe.event.special; null != (i = t[r]); r++)
                    if ((e || oe.acceptData(i)) && (s = i[a], o = s && l[s])) {
                        if (o.events)
                            for (n in o.events) h[n] ? oe.event.remove(i, n) : oe.removeEvent(i, n, o.handle);
                        l[s] && (delete l[s], u ? delete i[a] : typeof i.removeAttribute !== Te ? i.removeAttribute(a) : i[a] = null, Q.push(s))
                    }
            }
        }), oe.fn.extend({
            text: function (t) {
                return Oe(this, function (t) {
                    return void 0 === t ? oe.text(this) : this.empty()
                        .append((this[0] && this[0].ownerDocument || me)
                            .createTextNode(t))
                }, null, t, arguments.length)
            },
            append: function () {
                return this.domManip(arguments, function (t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = y(this, t);
                        e.appendChild(t)
                    }
                })
            },
            prepend: function () {
                return this.domManip(arguments, function (t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = y(this, t);
                        e.insertBefore(t, e.firstChild)
                    }
                })
            },
            before: function () {
                return this.domManip(arguments, function (t) {
                    this.parentNode && this.parentNode.insertBefore(t, this)
                })
            },
            after: function () {
                return this.domManip(arguments, function (t) {
                    this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
                })
            },
            remove: function (t, e) {
                for (var i, n = t ? oe.filter(t, this) : this, s = 0; null != (i = n[s]); s++) e || 1 !== i.nodeType || oe.cleanData(g(i)), i.parentNode && (e && oe.contains(i.ownerDocument, i) && b(g(i, "script")), i.parentNode.removeChild(i));
                return this
            },
            empty: function () {
                for (var t, e = 0; null != (t = this[e]); e++) {
                    for (1 === t.nodeType && oe.cleanData(g(t, !1)); t.firstChild;) t.removeChild(t.firstChild);
                    t.options && oe.nodeName(t, "select") && (t.options.length = 0)
                }
                return this
            },
            clone: function (t, e) {
                return t = null == t ? !1 : t, e = null == e ? t : e, this.map(function () {
                    return oe.clone(this, t, e)
                })
            },
            html: function (t) {
                return Oe(this, function (t) {
                    var e = this[0] || {},
                        i = 0,
                        n = this.length;
                    if (void 0 === t) return 1 === e.nodeType ? e.innerHTML.replace(De, "") : void 0;
                    if (!("string" != typeof t || $e.test(t) || !ne.htmlSerialize && Re.test(t) || !ne.leadingWhitespace && Be.test(t) || Qe[(je.exec(t) || ["", ""])[1].toLowerCase()])) {
                        t = t.replace(ze, "<$1></$2>");
                        try {
                            for (; n > i; i++) e = this[i] || {}, 1 === e.nodeType && (oe.cleanData(g(e, !1)), e.innerHTML = t);
                            e = 0
                        } catch (s) {}
                    }
                    e && this.empty()
                        .append(t)
                }, null, t, arguments.length)
            },
            replaceWith: function () {
                var t = arguments[0];
                return this.domManip(arguments, function (e) {
                    t = this.parentNode, oe.cleanData(g(this)), t && t.replaceChild(e, this)
                }), t && (t.length || t.nodeType) ? this : this.remove()
            },
            detach: function (t) {
                return this.remove(t, !0)
            },
            domManip: function (t, e) {
                t = Z.apply([], t);
                var i, n, s, o, r, a, l = 0,
                    u = this.length,
                    h = this,
                    c = u - 1,
                    p = t[0],
                    d = oe.isFunction(p);
                if (d || u > 1 && "string" == typeof p && !ne.checkClone && Ue.test(p)) return this.each(function (i) {
                    var n = h.eq(i);
                    d && (t[0] = p.call(this, i, n.html())), n.domManip(t, e)
                });
                if (u && (a = oe.buildFragment(t, this[0].ownerDocument, !1, this), i = a.firstChild, 1 === a.childNodes.length && (a = i), i)) {
                    for (o = oe.map(g(a, "script"), _), s = o.length; u > l; l++) n = a, l !== c && (n = oe.clone(n, !0, !0), s && oe.merge(o, g(n, "script"))), e.call(this[l], n, l);
                    if (s)
                        for (r = o[o.length - 1].ownerDocument, oe.map(o, x), l = 0; s > l; l++) n = o[l], Ve.test(n.type || "") && !oe._data(n, "globalEval") && oe.contains(r, n) && (n.src ? oe._evalUrl && oe._evalUrl(n.src) : oe.globalEval((n.text || n.textContent || n.innerHTML || "")
                            .replace(Ye, "")));
                    a = i = null
                }
                return this
            }
        }), oe.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function (t, e) {
            oe.fn[t] = function (t) {
                for (var i, n = 0, s = [], o = oe(t), r = o.length - 1; r >= n; n++) i = n === r ? this : this.clone(!0), oe(o[n])[e](i), J.apply(s, i.get());
                return this.pushStack(s)
            }
        });
        var Je, Ke = {};
        ! function () {
            var t;
            ne.shrinkWrapBlocks = function () {
                if (null != t) return t;
                t = !1;
                var e, i, n;
                return i = me.getElementsByTagName("body")[0], i && i.style ? (e = me.createElement("div"), n = me.createElement("div"), n.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", i.appendChild(n)
                    .appendChild(e), typeof e.style.zoom !== Te && (e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", e.appendChild(me.createElement("div"))
                        .style.width = "5px", t = 3 !== e.offsetWidth), i.removeChild(n), t) : void 0
            }
        }();
        var ti = /^margin/,
            ei = new RegExp("^(" + Ae + ")(?!px)[a-z%]+$", "i"),
            ii, ni, si = /^(top|right|bottom|left)$/;
        t.getComputedStyle ? (ii = function (t) {
            return t.ownerDocument.defaultView.getComputedStyle(t, null)
        }, ni = function (t, e, i) {
            var n, s, o, r, a = t.style;
            return i = i || ii(t), r = i ? i.getPropertyValue(e) || i[e] : void 0, i && ("" !== r || oe.contains(t.ownerDocument, t) || (r = oe.style(t, e)), ei.test(r) && ti.test(e) && (n = a.width, s = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = r, r = i.width, a.width = n, a.minWidth = s, a.maxWidth = o)), void 0 === r ? r : r + ""
        }) : me.documentElement.currentStyle && (ii = function (t) {
            return t.currentStyle
        }, ni = function (t, e, i) {
            var n, s, o, r, a = t.style;
            return i = i || ii(t), r = i ? i[e] : void 0, null == r && a && a[e] && (r = a[e]), ei.test(r) && !si.test(e) && (n = a.left, s = t.runtimeStyle, o = s && s.left, o && (s.left = t.currentStyle.left), a.left = "fontSize" === e ? "1em" : r, r = a.pixelLeft + "px", a.left = n, o && (s.left = o)), void 0 === r ? r : r + "" || "auto"
        }), ! function () {
            function e() {
                var e, i, n, s;
                i = me.getElementsByTagName("body")[0], i && i.style && (e = me.createElement("div"), n = me.createElement("div"), n.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", i.appendChild(n)
                    .appendChild(e), e.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", o = r = !1, l = !0, t.getComputedStyle && (o = "1%" !== (t.getComputedStyle(e, null) || {})
                        .top, r = "4px" === (t.getComputedStyle(e, null) || {
                            width: "4px"
                        })
                        .width, s = e.appendChild(me.createElement("div")), s.style.cssText = e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", s.style.marginRight = s.style.width = "0", e.style.width = "1px", l = !parseFloat((t.getComputedStyle(s, null) || {})
                            .marginRight)), e.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", s = e.getElementsByTagName("td"), s[0].style.cssText = "margin:0;border:0;padding:0;display:none", a = 0 === s[0].offsetHeight, a && (s[0].style.display = "", s[1].style.display = "none", a = 0 === s[0].offsetHeight), i.removeChild(n))
            }
            var i, n, s, o, r, a, l;
            i = me.createElement("div"), i.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", s = i.getElementsByTagName("a")[0], (n = s && s.style) && (n.cssText = "float:left;opacity:.5", ne.opacity = "0.5" === n.opacity, ne.cssFloat = !!n.cssFloat, i.style.backgroundClip = "content-box", i.cloneNode(!0)
                .style.backgroundClip = "", ne.clearCloneStyle = "content-box" === i.style.backgroundClip, ne.boxSizing = "" === n.boxSizing || "" === n.MozBoxSizing || "" === n.WebkitBoxSizing, oe.extend(ne, {
                    reliableHiddenOffsets: function () {
                        return null == a && e(), a
                    },
                    boxSizingReliable: function () {
                        return null == r && e(), r
                    },
                    pixelPosition: function () {
                        return null == o && e(), o
                    },
                    reliableMarginRight: function () {
                        return null == l && e(), l
                    }
                }))
        }(), oe.swap = function (t, e, i, n) {
            var s, o, r = {};
            for (o in e) r[o] = t.style[o], t.style[o] = e[o];
            s = i.apply(t, n || []);
            for (o in e) t.style[o] = r[o];
            return s
        };
        var oi = /alpha\([^)]*\)/i,
            ri = /opacity\s*=\s*([^)]*)/,
            ai = /^(none|table(?!-c[ea]).+)/,
            li = new RegExp("^(" + Ae + ")(.*)$", "i"),
            ui = new RegExp("^([+-])=(" + Ae + ")", "i"),
            hi = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            ci = {
                letterSpacing: "0",
                fontWeight: "400"
            },
            pi = ["Webkit", "O", "Moz", "ms"];
        oe.extend({
            cssHooks: {
                opacity: {
                    get: function (t, e) {
                        if (e) {
                            var i = ni(t, "opacity");
                            return "" === i ? "1" : i
                        }
                    }
                }
            },
            cssNumber: {
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                "float": ne.cssFloat ? "cssFloat" : "styleFloat"
            },
            style: function (t, e, i, n) {
                if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                    var s, o, r, a = oe.camelCase(e),
                        l = t.style;
                    if (e = oe.cssProps[a] || (oe.cssProps[a] = A(l, a)), r = oe.cssHooks[e] || oe.cssHooks[a], void 0 === i) return r && "get" in r && void 0 !== (s = r.get(t, !1, n)) ? s : l[e];
                    if (o = typeof i, "string" === o && (s = ui.exec(i)) && (i = (s[1] + 1) * s[2] + parseFloat(oe.css(t, e)), o = "number"), null != i && i === i && ("number" !== o || oe.cssNumber[a] || (i += "px"), ne.clearCloneStyle || "" !== i || 0 !== e.indexOf("background") || (l[e] = "inherit"), !(r && "set" in r && void 0 === (i = r.set(t, i, n))))) try {
                        l[e] = i
                    } catch (u) {}
                }
            },
            css: function (t, e, i, n) {
                var s, o, r, a = oe.camelCase(e);
                return e = oe.cssProps[a] || (oe.cssProps[a] = A(t.style, a)), r = oe.cssHooks[e] || oe.cssHooks[a], r && "get" in r && (o = r.get(t, !0, i)), void 0 === o && (o = ni(t, e, n)), "normal" === o && e in ci && (o = ci[e]), "" === i || i ? (s = parseFloat(o), i === !0 || oe.isNumeric(s) ? s || 0 : o) : o
            }
        }), oe.each(["height", "width"], function (t, e) {
            oe.cssHooks[e] = {
                get: function (t, i, n) {
                    return i ? ai.test(oe.css(t, "display")) && 0 === t.offsetWidth ? oe.swap(t, hi, function () {
                        return L(t, e, n)
                    }) : L(t, e, n) : void 0
                },
                set: function (t, i, n) {
                    var s = n && ii(t);
                    return k(t, i, n ? O(t, e, n, ne.boxSizing && "border-box" === oe.css(t, "boxSizing", !1, s), s) : 0)
                }
            }
        }), ne.opacity || (oe.cssHooks.opacity = {
            get: function (t, e) {
                return ri.test((e && t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : e ? "1" : ""
            },
            set: function (t, e) {
                var i = t.style,
                    n = t.currentStyle,
                    s = oe.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")" : "",
                    o = n && n.filter || i.filter || "";
                i.zoom = 1, (e >= 1 || "" === e) && "" === oe.trim(o.replace(oi, "")) && i.removeAttribute && (i.removeAttribute("filter"), "" === e || n && !n.filter) || (i.filter = oi.test(o) ? o.replace(oi, s) : o + " " + s)
            }
        }), oe.cssHooks.marginRight = C(ne.reliableMarginRight, function (t, e) {
            return e ? oe.swap(t, {
                display: "inline-block"
            }, ni, [t, "marginRight"]) : void 0
        }), oe.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function (t, e) {
            oe.cssHooks[t + e] = {
                expand: function (i) {
                    for (var n = 0, s = {}, o = "string" == typeof i ? i.split(" ") : [i]; 4 > n; n++) s[t + Ee[n] + e] = o[n] || o[n - 2] || o[0];
                    return s
                }
            }, ti.test(t) || (oe.cssHooks[t + e].set = k)
        }), oe.fn.extend({
            css: function (t, e) {
                return Oe(this, function (t, e, i) {
                    var n, s, o = {},
                        r = 0;
                    if (oe.isArray(e)) {
                        for (n = ii(t), s = e.length; s > r; r++) o[e[r]] = oe.css(t, e[r], !1, n);
                        return o
                    }
                    return void 0 !== i ? oe.style(t, e, i) : oe.css(t, e)
                }, t, e, arguments.length > 1)
            },
            show: function () {
                return E(this, !0)
            },
            hide: function () {
                return E(this)
            },
            toggle: function (t) {
                return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function () {
                    ke(this) ? oe(this)
                        .show() : oe(this)
                        .hide()
                })
            }
        }), oe.Tween = I, I.prototype = {
            constructor: I,
            init: function (t, e, i, n, s, o) {
                this.elem = t, this.prop = i, this.easing = s || "swing", this.options = e, this.start = this.now = this.cur(), this.end = n, this.unit = o || (oe.cssNumber[i] ? "" : "px")
            },
            cur: function () {
                var t = I.propHooks[this.prop];
                return t && t.get ? t.get(this) : I.propHooks._default.get(this)
            },
            run: function (t) {
                var e, i = I.propHooks[this.prop];
                return this.pos = e = this.options.duration ? oe.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : I.propHooks._default.set(this), this
            }
        }, I.prototype.init.prototype = I.prototype, I.propHooks = {
            _default: {
                get: function (t) {
                    var e;
                    return null == t.elem[t.prop] || t.elem.style && null != t.elem.style[t.prop] ? (e = oe.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0) : t.elem[t.prop]
                },
                set: function (t) {
                    oe.fx.step[t.prop] ? oe.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[oe.cssProps[t.prop]] || oe.cssHooks[t.prop]) ? oe.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now
                }
            }
        }, I.propHooks.scrollTop = I.propHooks.scrollLeft = {
            set: function (t) {
                t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
            }
        }, oe.easing = {
            linear: function (t) {
                return t
            },
            swing: function (t) {
                return .5 - Math.cos(t * Math.PI) / 2
            }
        }, oe.fx = I.prototype.init, oe.fx.step = {};
        var di, fi, mi = /^(?:toggle|show|hide)$/,
            gi = new RegExp("^(?:([+-])=|)(" + Ae + ")([a-z%]*)$", "i"),
            vi = /queueHooks$/,
            yi = [F],
            _i = {
                "*": [function (t, e) {
                    var i = this.createTween(t, e),
                        n = i.cur(),
                        s = gi.exec(e),
                        o = s && s[3] || (oe.cssNumber[t] ? "" : "px"),
                        r = (oe.cssNumber[t] || "px" !== o && +n) && gi.exec(oe.css(i.elem, t)),
                        a = 1,
                        l = 20;
                    if (r && r[3] !== o) {
                        o = o || r[3], s = s || [], r = +n || 1;
                        do a = a || ".5", r /= a, oe.style(i.elem, t, r + o); while (a !== (a = i.cur() / n) && 1 !== a && --l)
                    }
                    return s && (r = i.start = +r || +n || 0, i.unit = o, i.end = s[1] ? r + (s[1] + 1) * s[2] : +s[2]), i
                }]
            };
        oe.Animation = oe.extend(R, {
                tweener: function (t, e) {
                    oe.isFunction(t) ? (e = t, t = ["*"]) : t = t.split(" ");
                    for (var i, n = 0, s = t.length; s > n; n++) i = t[n], _i[i] = _i[i] || [], _i[i].unshift(e)
                },
                prefilter: function (t, e) {
                    e ? yi.unshift(t) : yi.push(t)
                }
            }), oe.speed = function (t, e, i) {
                var n = t && "object" == typeof t ? oe.extend({}, t) : {
                    complete: i || !i && e || oe.isFunction(t) && t,
                    duration: t,
                    easing: i && e || e && !oe.isFunction(e) && e
                };
                return n.duration = oe.fx.off ? 0 : "number" == typeof n.duration ? n.duration : n.duration in oe.fx.speeds ? oe.fx.speeds[n.duration] : oe.fx.speeds._default, (null == n.queue || n.queue === !0) && (n.queue = "fx"), n.old = n.complete, n.complete = function () {
                    oe.isFunction(n.old) && n.old.call(this), n.queue && oe.dequeue(this, n.queue)
                }, n
            }, oe.fn.extend({
                fadeTo: function (t, e, i, n) {
                    return this.filter(ke)
                        .css("opacity", 0)
                        .show()
                        .end()
                        .animate({
                            opacity: e
                        }, t, i, n)
                },
                animate: function (t, e, i, n) {
                    var s = oe.isEmptyObject(t),
                        o = oe.speed(e, i, n),
                        r = function () {
                            var e = R(this, oe.extend({}, t), o);
                            (s || oe._data(this, "finish")) && e.stop(!0)
                        };
                    return r.finish = r, s || o.queue === !1 ? this.each(r) : this.queue(o.queue, r)
                },
                stop: function (t, e, i) {
                    var n = function (t) {
                        var e = t.stop;
                        delete t.stop, e(i)
                    };
                    return "string" != typeof t && (i = e, e = t, t = void 0), e && t !== !1 && this.queue(t || "fx", []), this.each(function () {
                        var e = !0,
                            s = null != t && t + "queueHooks",
                            o = oe.timers,
                            r = oe._data(this);
                        if (s) r[s] && r[s].stop && n(r[s]);
                        else
                            for (s in r) r[s] && r[s].stop && vi.test(s) && n(r[s]);
                        for (s = o.length; s--;) o[s].elem !== this || null != t && o[s].queue !== t || (o[s].anim.stop(i), e = !1, o.splice(s, 1));
                        (e || !i) && oe.dequeue(this, t)
                    })
                },
                finish: function (t) {
                    return t !== !1 && (t = t || "fx"), this.each(function () {
                        var e, i = oe._data(this),
                            n = i[t + "queue"],
                            s = i[t + "queueHooks"],
                            o = oe.timers,
                            r = n ? n.length : 0;
                        for (i.finish = !0, oe.queue(this, t, []), s && s.stop && s.stop.call(this, !0), e = o.length; e--;) o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0), o.splice(e, 1));
                        for (e = 0; r > e; e++) n[e] && n[e].finish && n[e].finish.call(this);
                        delete i.finish
                    })
                }
            }), oe.each(["toggle", "show", "hide"], function (t, e) {
                var i = oe.fn[e];
                oe.fn[e] = function (t, n, s) {
                    return null == t || "boolean" == typeof t ? i.apply(this, arguments) : this.animate(H(e, !0), t, n, s)
                }
            }), oe.each({
                slideDown: H("show"),
                slideUp: H("hide"),
                slideToggle: H("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, function (t, e) {
                oe.fn[t] = function (t, i, n) {
                    return this.animate(e, t, i, n)
                }
            }), oe.timers = [], oe.fx.tick = function () {
                var t, e = oe.timers,
                    i = 0;
                for (di = oe.now(); i < e.length; i++) t = e[i], t() || e[i] !== t || e.splice(i--, 1);
                e.length || oe.fx.stop(), di = void 0
            }, oe.fx.timer = function (t) {
                oe.timers.push(t), t() ? oe.fx.start() : oe.timers.pop()
            }, oe.fx.interval = 13, oe.fx.start = function () {
                fi || (fi = setInterval(oe.fx.tick, oe.fx.interval))
            }, oe.fx.stop = function () {
                clearInterval(fi), fi = null
            }, oe.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            }, oe.fn.delay = function (t, e) {
                return t = oe.fx ? oe.fx.speeds[t] || t : t, e = e || "fx", this.queue(e, function (e, i) {
                    var n = setTimeout(e, t);
                    i.stop = function () {
                        clearTimeout(n)
                    }
                })
            },
            function () {
                var t, e, i, n, s;
                e = me.createElement("div"), e.setAttribute("className", "t"), e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = e.getElementsByTagName("a")[0], i = me.createElement("select"), s = i.appendChild(me.createElement("option")), t = e.getElementsByTagName("input")[0], n.style.cssText = "top:1px", ne.getSetAttribute = "t" !== e.className, ne.style = /top/.test(n.getAttribute("style")), ne.hrefNormalized = "/a" === n.getAttribute("href"), ne.checkOn = !!t.value, ne.optSelected = s.selected, ne.enctype = !!me.createElement("form")
                    .enctype, i.disabled = !0, ne.optDisabled = !s.disabled, t = me.createElement("input"), t.setAttribute("value", ""), ne.input = "" === t.getAttribute("value"), t.value = "t", t.setAttribute("type", "radio"), ne.radioValue = "t" === t.value
            }();
        var xi = /\r/g;
        oe.fn.extend({
            val: function (t) {
                var e, i, n, s = this[0];
                return arguments.length ? (n = oe.isFunction(t), this.each(function (i) {
                    var s;
                    1 === this.nodeType && (s = n ? t.call(this, i, oe(this)
                        .val()) : t, null == s ? s = "" : "number" == typeof s ? s += "" : oe.isArray(s) && (s = oe.map(s, function (t) {
                        return null == t ? "" : t + ""
                    })), e = oe.valHooks[this.type] || oe.valHooks[this.nodeName.toLowerCase()], e && "set" in e && void 0 !== e.set(this, s, "value") || (this.value = s))
                })) : s ? (e = oe.valHooks[s.type] || oe.valHooks[s.nodeName.toLowerCase()], e && "get" in e && void 0 !== (i = e.get(s, "value")) ? i : (i = s.value, "string" == typeof i ? i.replace(xi, "") : null == i ? "" : i)) : void 0
            }
        }), oe.extend({
            valHooks: {
                option: {
                    get: function (t) {
                        var e = oe.find.attr(t, "value");
                        return null != e ? e : oe.trim(oe.text(t))
                    }
                },
                select: {
                    get: function (t) {
                        for (var e, i, n = t.options, s = t.selectedIndex, o = "select-one" === t.type || 0 > s, r = o ? null : [], a = o ? s + 1 : n.length, l = 0 > s ? a : o ? s : 0; a > l; l++)
                            if (i = n[l], !(!i.selected && l !== s || (ne.optDisabled ? i.disabled : null !== i.getAttribute("disabled")) || i.parentNode.disabled && oe.nodeName(i.parentNode, "optgroup"))) {
                                if (e = oe(i)
                                    .val(), o) return e;
                                r.push(e)
                            }
                        return r
                    },
                    set: function (t, e) {
                        for (var i, n, s = t.options, o = oe.makeArray(e), r = s.length; r--;)
                            if (n = s[r], oe.inArray(oe.valHooks.option.get(n), o) >= 0) try {
                                n.selected = i = !0
                            } catch (a) {
                                n.scrollHeight
                            } else n.selected = !1;
                        return i || (t.selectedIndex = -1), s
                    }
                }
            }
        }), oe.each(["radio", "checkbox"], function () {
            oe.valHooks[this] = {
                set: function (t, e) {
                    return oe.isArray(e) ? t.checked = oe.inArray(oe(t)
                        .val(), e) >= 0 : void 0
                }
            }, ne.checkOn || (oe.valHooks[this].get = function (t) {
                return null === t.getAttribute("value") ? "on" : t.value
            })
        });
        var bi, wi, Ti = oe.expr.attrHandle,
            Mi = /^(?:checked|selected)$/i,
            Si = ne.getSetAttribute,
            Ci = ne.input;
        oe.fn.extend({
            attr: function (t, e) {
                return Oe(this, oe.attr, t, e, arguments.length > 1)
            },
            removeAttr: function (t) {
                return this.each(function () {
                    oe.removeAttr(this, t)
                })
            }
        }), oe.extend({
            attr: function (t, e, i) {
                var n, s, o = t.nodeType;
                return t && 3 !== o && 8 !== o && 2 !== o ? typeof t.getAttribute === Te ? oe.prop(t, e, i) : (1 === o && oe.isXMLDoc(t) || (e = e.toLowerCase(), n = oe.attrHooks[e] || (oe.expr.match.bool.test(e) ? wi : bi)), void 0 === i ? n && "get" in n && null !== (s = n.get(t, e)) ? s : (s = oe.find.attr(t, e), null == s ? void 0 : s) : null !== i ? n && "set" in n && void 0 !== (s = n.set(t, i, e)) ? s : (t.setAttribute(e, i + ""), i) : void oe.removeAttr(t, e)) : void 0
            },
            removeAttr: function (t, e) {
                var i, n, s = 0,
                    o = e && e.match(xe);
                if (o && 1 === t.nodeType)
                    for (; i = o[s++];) n = oe.propFix[i] || i, oe.expr.match.bool.test(i) ? Ci && Si || !Mi.test(i) ? t[n] = !1 : t[oe.camelCase("default-" + i)] = t[n] = !1 : oe.attr(t, i, ""), t.removeAttribute(Si ? i : n)
            },
            attrHooks: {
                type: {
                    set: function (t, e) {
                        if (!ne.radioValue && "radio" === e && oe.nodeName(t, "input")) {
                            var i = t.value;
                            return t.setAttribute("type", e), i && (t.value = i), e
                        }
                    }
                }
            }
        }), wi = {
            set: function (t, e, i) {
                return e === !1 ? oe.removeAttr(t, i) : Ci && Si || !Mi.test(i) ? t.setAttribute(!Si && oe.propFix[i] || i, i) : t[oe.camelCase("default-" + i)] = t[i] = !0, i
            }
        }, oe.each(oe.expr.match.bool.source.match(/\w+/g), function (t, e) {
            var i = Ti[e] || oe.find.attr;
            Ti[e] = Ci && Si || !Mi.test(e) ? function (t, e, n) {
                var s, o;
                return n || (o = Ti[e], Ti[e] = s, s = null != i(t, e, n) ? e.toLowerCase() : null, Ti[e] = o), s
            } : function (t, e, i) {
                return i ? void 0 : t[oe.camelCase("default-" + e)] ? e.toLowerCase() : null
            }
        }), Ci && Si || (oe.attrHooks.value = {
            set: function (t, e, i) {
                return oe.nodeName(t, "input") ? void(t.defaultValue = e) : bi && bi.set(t, e, i)
            }
        }), Si || (bi = {
            set: function (t, e, i) {
                var n = t.getAttributeNode(i);
                return n || t.setAttributeNode(n = t.ownerDocument.createAttribute(i)), n.value = e += "", "value" === i || e === t.getAttribute(i) ? e : void 0
            }
        }, Ti.id = Ti.name = Ti.coords = function (t, e, i) {
            var n;
            return i ? void 0 : (n = t.getAttributeNode(e)) && "" !== n.value ? n.value : null
        }, oe.valHooks.button = {
            get: function (t, e) {
                var i = t.getAttributeNode(e);
                return i && i.specified ? i.value : void 0
            },
            set: bi.set
        }, oe.attrHooks.contenteditable = {
            set: function (t, e, i) {
                bi.set(t, "" === e ? !1 : e, i)
            }
        }, oe.each(["width", "height"], function (t, e) {
            oe.attrHooks[e] = {
                set: function (t, i) {
                    return "" === i ? (t.setAttribute(e, "auto"), i) : void 0
                }
            }
        })), ne.style || (oe.attrHooks.style = {
            get: function (t) {
                return t.style.cssText || void 0
            },
            set: function (t, e) {
                return t.style.cssText = e + ""
            }
        });
        var Ai = /^(?:input|select|textarea|button|object)$/i,
            Ei = /^(?:a|area)$/i;
        oe.fn.extend({
            prop: function (t, e) {
                return Oe(this, oe.prop, t, e, arguments.length > 1)
            },
            removeProp: function (t) {
                return t = oe.propFix[t] || t, this.each(function () {
                    try {
                        this[t] = void 0, delete this[t]
                    } catch (e) {}
                })
            }
        }), oe.extend({
            propFix: {
                "for": "htmlFor",
                "class": "className"
            },
            prop: function (t, e, i) {
                var n, s, o, r = t.nodeType;
                return t && 3 !== r && 8 !== r && 2 !== r ? (o = 1 !== r || !oe.isXMLDoc(t), o && (e = oe.propFix[e] || e, s = oe.propHooks[e]), void 0 !== i ? s && "set" in s && void 0 !== (n = s.set(t, i, e)) ? n : t[e] = i : s && "get" in s && null !== (n = s.get(t, e)) ? n : t[e]) : void 0
            },
            propHooks: {
                tabIndex: {
                    get: function (t) {
                        var e = oe.find.attr(t, "tabindex");
                        return e ? parseInt(e, 10) : Ai.test(t.nodeName) || Ei.test(t.nodeName) && t.href ? 0 : -1
                    }
                }
            }
        }), ne.hrefNormalized || oe.each(["href", "src"], function (t, e) {
            oe.propHooks[e] = {
                get: function (t) {
                    return t.getAttribute(e, 4)
                }
            }
        }), ne.optSelected || (oe.propHooks.selected = {
            get: function (t) {
                var e = t.parentNode;
                return e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex), null
            }
        }), oe.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
            oe.propFix[this.toLowerCase()] = this
        }), ne.enctype || (oe.propFix.enctype = "encoding");
        var ki = /[\t\r\n\f]/g;
        oe.fn.extend({
            addClass: function (t) {
                var e, i, n, s, o, r, a = 0,
                    l = this.length,
                    u = "string" == typeof t && t;
                if (oe.isFunction(t)) return this.each(function (e) {
                    oe(this)
                        .addClass(t.call(this, e, this.className))
                });
                if (u)
                    for (e = (t || "")
                        .match(xe) || []; l > a; a++)
                        if (i = this[a], n = 1 === i.nodeType && (i.className ? (" " + i.className + " ")
                                .replace(ki, " ") : " ")) {
                            for (o = 0; s = e[o++];) n.indexOf(" " + s + " ") < 0 && (n += s + " ");
                            r = oe.trim(n), i.className !== r && (i.className = r)
                        }
                return this
            },
            removeClass: function (t) {
                var e, i, n, s, o, r, a = 0,
                    l = this.length,
                    u = 0 === arguments.length || "string" == typeof t && t;
                if (oe.isFunction(t)) return this.each(function (e) {
                    oe(this)
                        .removeClass(t.call(this, e, this.className))
                });
                if (u)
                    for (e = (t || "")
                        .match(xe) || []; l > a; a++)
                        if (i = this[a], n = 1 === i.nodeType && (i.className ? (" " + i.className + " ")
                                .replace(ki, " ") : "")) {
                            for (o = 0; s = e[o++];)
                                for (; n.indexOf(" " + s + " ") >= 0;) n = n.replace(" " + s + " ", " ");
                            r = t ? oe.trim(n) : "", i.className !== r && (i.className = r)
                        }
                return this
            },
            toggleClass: function (t, e) {
                var i = typeof t;
                return "boolean" == typeof e && "string" === i ? e ? this.addClass(t) : this.removeClass(t) : this.each(oe.isFunction(t) ? function (i) {
                    oe(this)
                        .toggleClass(t.call(this, i, this.className, e), e)
                } : function () {
                    if ("string" === i)
                        for (var e, n = 0, s = oe(this), o = t.match(xe) || []; e = o[n++];) s.hasClass(e) ? s.removeClass(e) : s.addClass(e);
                    else(i === Te || "boolean" === i) && (this.className && oe._data(this, "__className__", this.className), this.className = this.className || t === !1 ? "" : oe._data(this, "__className__") || "")
                })
            },
            hasClass: function (t) {
                for (var e = " " + t + " ", i = 0, n = this.length; n > i; i++)
                    if (1 === this[i].nodeType && (" " + this[i].className + " ")
                        .replace(ki, " ")
                        .indexOf(e) >= 0) return !0;
                return !1
            }
        }), oe.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (t, e) {
            oe.fn[e] = function (t, i) {
                return arguments.length > 0 ? this.on(e, null, t, i) : this.trigger(e)
            }
        }), oe.fn.extend({
            hover: function (t, e) {
                return this.mouseenter(t)
                    .mouseleave(e || t)
            },
            bind: function (t, e, i) {
                return this.on(t, null, e, i)
            },
            unbind: function (t, e) {
                return this.off(t, null, e)
            },
            delegate: function (t, e, i, n) {
                return this.on(e, t, i, n)
            },
            undelegate: function (t, e, i) {
                return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", i)
            }
        });
        var Oi = oe.now(),
            Li = /\?/,
            Ii = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
        oe.parseJSON = function (e) {
            if (t.JSON && t.JSON.parse) return t.JSON.parse(e + "");
            var i, n = null,
                s = oe.trim(e + "");
            return s && !oe.trim(s.replace(Ii, function (t, e, s, o) {
                return i && e && (n = 0), 0 === n ? t : (i = s || e, n += !o - !s, "")
            })) ? Function("return " + s)() : oe.error("Invalid JSON: " + e)
        }, oe.parseXML = function (e) {
            var i, n;
            if (!e || "string" != typeof e) return null;
            try {
                t.DOMParser ? (n = new DOMParser, i = n.parseFromString(e, "text/xml")) : (i = new ActiveXObject("Microsoft.XMLDOM"), i.async = "false", i.loadXML(e))
            } catch (s) {
                i = void 0
            }
            return i && i.documentElement && !i.getElementsByTagName("parsererror")
                .length || oe.error("Invalid XML: " + e), i
        };
        var Pi, Hi, Ni = /#.*$/,
            Fi = /([?&])_=[^&]*/,
            Di = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
            Ri = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            Bi = /^(?:GET|HEAD)$/,
            zi = /^\/\//,
            ji = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
            qi = {},
            Xi = {},
            $i = "*/".concat("*");
        try {
            Hi = location.href
        } catch (Ui) {
            Hi = me.createElement("a"), Hi.href = "", Hi = Hi.href
        }
        Pi = ji.exec(Hi.toLowerCase()) || [], oe.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: Hi,
                type: "GET",
                isLocal: Ri.test(Pi[1]),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": $i,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /xml/,
                    html: /html/,
                    json: /json/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": oe.parseJSON,
                    "text xml": oe.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function (t, e) {
                return e ? j(j(t, oe.ajaxSettings), e) : j(oe.ajaxSettings, t)
            },
            ajaxPrefilter: B(qi),
            ajaxTransport: B(Xi),
            ajax: function (t, e) {
                function i(t, e, i, n) {
                    var s, h, v, y, x, w = e;
                    2 !== _ && (_ = 2, a && clearTimeout(a), u = void 0, r = n || "", b.readyState = t > 0 ? 4 : 0, s = t >= 200 && 300 > t || 304 === t, i && (y = q(c, b, i)), y = X(c, y, b, s), s ? (c.ifModified && (x = b.getResponseHeader("Last-Modified"), x && (oe.lastModified[o] = x), x = b.getResponseHeader("etag"), x && (oe.etag[o] = x)), 204 === t || "HEAD" === c.type ? w = "nocontent" : 304 === t ? w = "notmodified" : (w = y.state, h = y.data, v = y.error, s = !v)) : (v = w, (t || !w) && (w = "error", 0 > t && (t = 0))), b.status = t, b.statusText = (e || w) + "", s ? f.resolveWith(p, [h, w, b]) : f.rejectWith(p, [b, w, v]), b.statusCode(g), g = void 0, l && d.trigger(s ? "ajaxSuccess" : "ajaxError", [b, c, s ? h : v]), m.fireWith(p, [b, w]), l && (d.trigger("ajaxComplete", [b, c]), --oe.active || oe.event.trigger("ajaxStop")))
                }
                "object" == typeof t && (e = t, t = void 0), e = e || {};
                var n, s, o, r, a, l, u, h, c = oe.ajaxSetup({}, e),
                    p = c.context || c,
                    d = c.context && (p.nodeType || p.jquery) ? oe(p) : oe.event,
                    f = oe.Deferred(),
                    m = oe.Callbacks("once memory"),
                    g = c.statusCode || {},
                    v = {},
                    y = {},
                    _ = 0,
                    x = "canceled",
                    b = {
                        readyState: 0,
                        getResponseHeader: function (t) {
                            var e;
                            if (2 === _) {
                                if (!h)
                                    for (h = {}; e = Di.exec(r);) h[e[1].toLowerCase()] = e[2];
                                e = h[t.toLowerCase()]
                            }
                            return null == e ? null : e
                        },
                        getAllResponseHeaders: function () {
                            return 2 === _ ? r : null
                        },
                        setRequestHeader: function (t, e) {
                            var i = t.toLowerCase();
                            return _ || (t = y[i] = y[i] || t, v[t] = e), this
                        },
                        overrideMimeType: function (t) {
                            return _ || (c.mimeType = t), this
                        },
                        statusCode: function (t) {
                            var e;
                            if (t)
                                if (2 > _)
                                    for (e in t) g[e] = [g[e], t[e]];
                                else b.always(t[b.status]);
                            return this
                        },
                        abort: function (t) {
                            var e = t || x;
                            return u && u.abort(e), i(0, e), this
                        }
                    };
                if (f.promise(b)
                    .complete = m.add, b.success = b.done, b.error = b.fail, c.url = ((t || c.url || Hi) + "")
                    .replace(Ni, "")
                    .replace(zi, Pi[1] + "//"), c.type = e.method || e.type || c.method || c.type, c.dataTypes = oe.trim(c.dataType || "*")
                    .toLowerCase()
                    .match(xe) || [""], null == c.crossDomain && (n = ji.exec(c.url.toLowerCase()), c.crossDomain = !(!n || n[1] === Pi[1] && n[2] === Pi[2] && (n[3] || ("http:" === n[1] ? "80" : "443")) === (Pi[3] || ("http:" === Pi[1] ? "80" : "443")))), c.data && c.processData && "string" != typeof c.data && (c.data = oe.param(c.data, c.traditional)), z(qi, c, e, b), 2 === _) return b;
                l = c.global, l && 0 === oe.active++ && oe.event.trigger("ajaxStart"), c.type = c.type.toUpperCase(), c.hasContent = !Bi.test(c.type), o = c.url, c.hasContent || (c.data && (o = c.url += (Li.test(o) ? "&" : "?") + c.data, delete c.data), c.cache === !1 && (c.url = Fi.test(o) ? o.replace(Fi, "$1_=" + Oi++) : o + (Li.test(o) ? "&" : "?") + "_=" + Oi++)), c.ifModified && (oe.lastModified[o] && b.setRequestHeader("If-Modified-Since", oe.lastModified[o]), oe.etag[o] && b.setRequestHeader("If-None-Match", oe.etag[o])), (c.data && c.hasContent && c.contentType !== !1 || e.contentType) && b.setRequestHeader("Content-Type", c.contentType), b.setRequestHeader("Accept", c.dataTypes[0] && c.accepts[c.dataTypes[0]] ? c.accepts[c.dataTypes[0]] + ("*" !== c.dataTypes[0] ? ", " + $i + "; q=0.01" : "") : c.accepts["*"]);
                for (s in c.headers) b.setRequestHeader(s, c.headers[s]);
                if (c.beforeSend && (c.beforeSend.call(p, b, c) === !1 || 2 === _)) return b.abort();
                x = "abort";
                for (s in {
                        success: 1,
                        error: 1,
                        complete: 1
                    }) b[s](c[s]);
                if (u = z(Xi, c, e, b)) {
                    b.readyState = 1, l && d.trigger("ajaxSend", [b, c]), c.async && c.timeout > 0 && (a = setTimeout(function () {
                        b.abort("timeout")
                    }, c.timeout));
                    try {
                        _ = 1, u.send(v, i)
                    } catch (w) {
                        if (!(2 > _)) throw w;
                        i(-1, w)
                    }
                } else i(-1, "No Transport");
                return b
            },
            getJSON: function (t, e, i) {
                return oe.get(t, e, i, "json")
            },
            getScript: function (t, e) {
                return oe.get(t, void 0, e, "script")
            }
        }), oe.each(["get", "post"], function (t, e) {
            oe[e] = function (t, i, n, s) {
                return oe.isFunction(i) && (s = s || n, n = i, i = void 0), oe.ajax({
                    url: t,
                    type: e,
                    dataType: s,
                    data: i,
                    success: n
                })
            }
        }), oe.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (t, e) {
            oe.fn[e] = function (t) {
                return this.on(e, t)
            }
        }), oe._evalUrl = function (t) {
            return oe.ajax({
                url: t,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                "throws": !0
            })
        }, oe.fn.extend({
            wrapAll: function (t) {
                if (oe.isFunction(t)) return this.each(function (e) {
                    oe(this)
                        .wrapAll(t.call(this, e))
                });
                if (this[0]) {
                    var e = oe(t, this[0].ownerDocument)
                        .eq(0)
                        .clone(!0);
                    this[0].parentNode && e.insertBefore(this[0]), e.map(function () {
                            for (var t = this; t.firstChild && 1 === t.firstChild.nodeType;) t = t.firstChild;
                            return t
                        })
                        .append(this)
                }
                return this
            },
            wrapInner: function (t) {
                return this.each(oe.isFunction(t) ? function (e) {
                    oe(this)
                        .wrapInner(t.call(this, e))
                } : function () {
                    var e = oe(this),
                        i = e.contents();
                    i.length ? i.wrapAll(t) : e.append(t)
                })
            },
            wrap: function (t) {
                var e = oe.isFunction(t);
                return this.each(function (i) {
                    oe(this)
                        .wrapAll(e ? t.call(this, i) : t)
                })
            },
            unwrap: function () {
                return this.parent()
                    .each(function () {
                        oe.nodeName(this, "body") || oe(this)
                            .replaceWith(this.childNodes)
                    })
                    .end()
            }
        }), oe.expr.filters.hidden = function (t) {
            return t.offsetWidth <= 0 && t.offsetHeight <= 0 || !ne.reliableHiddenOffsets() && "none" === (t.style && t.style.display || oe.css(t, "display"))
        }, oe.expr.filters.visible = function (t) {
            return !oe.expr.filters.hidden(t)
        };
        var Vi = /%20/g,
            Wi = /\[\]$/,
            Yi = /\r?\n/g,
            Qi = /^(?:submit|button|image|reset|file)$/i,
            Gi = /^(?:input|select|textarea|keygen)/i;
        oe.param = function (t, e) {
            var i, n = [],
                s = function (t, e) {
                    e = oe.isFunction(e) ? e() : null == e ? "" : e, n[n.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
                };
            if (void 0 === e && (e = oe.ajaxSettings && oe.ajaxSettings.traditional), oe.isArray(t) || t.jquery && !oe.isPlainObject(t)) oe.each(t, function () {
                s(this.name, this.value)
            });
            else
                for (i in t) U(i, t[i], e, s);
            return n.join("&")
                .replace(Vi, "+")
        }, oe.fn.extend({
            serialize: function () {
                return oe.param(this.serializeArray())
            },
            serializeArray: function () {
                return this.map(function () {
                        var t = oe.prop(this, "elements");
                        return t ? oe.makeArray(t) : this
                    })
                    .filter(function () {
                        var t = this.type;
                        return this.name && !oe(this)
                            .is(":disabled") && Gi.test(this.nodeName) && !Qi.test(t) && (this.checked || !Le.test(t))
                    })
                    .map(function (t, e) {
                        var i = oe(this)
                            .val();
                        return null == i ? null : oe.isArray(i) ? oe.map(i, function (t) {
                            return {
                                name: e.name,
                                value: t.replace(Yi, "\r\n")
                            }
                        }) : {
                            name: e.name,
                            value: i.replace(Yi, "\r\n")
                        }
                    })
                    .get()
            }
        }), oe.ajaxSettings.xhr = void 0 !== t.ActiveXObject ? function () {
            return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && V() || W()
        } : V;
        var Zi = 0,
            Ji = {},
            Ki = oe.ajaxSettings.xhr();
        t.ActiveXObject && oe(t)
            .on("unload", function () {
                for (var t in Ji) Ji[t](void 0, !0)
            }), ne.cors = !!Ki && "withCredentials" in Ki, Ki = ne.ajax = !!Ki, Ki && oe.ajaxTransport(function (t) {
                if (!t.crossDomain || ne.cors) {
                    var e;
                    return {
                        send: function (i, n) {
                            var s, o = t.xhr(),
                                r = ++Zi;
                            if (o.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                                for (s in t.xhrFields) o[s] = t.xhrFields[s];
                            t.mimeType && o.overrideMimeType && o.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                            for (s in i) void 0 !== i[s] && o.setRequestHeader(s, i[s] + "");
                            o.send(t.hasContent && t.data || null), e = function (i, s) {
                                var a, l, u;
                                if (e && (s || 4 === o.readyState))
                                    if (delete Ji[r], e = void 0, o.onreadystatechange = oe.noop, s) 4 !== o.readyState && o.abort();
                                    else {
                                        u = {}, a = o.status, "string" == typeof o.responseText && (u.text = o.responseText);
                                        try {
                                            l = o.statusText
                                        } catch (h) {
                                            l = ""
                                        }
                                        a || !t.isLocal || t.crossDomain ? 1223 === a && (a = 204) : a = u.text ? 200 : 404
                                    }
                                u && n(a, l, u, o.getAllResponseHeaders())
                            }, t.async ? 4 === o.readyState ? setTimeout(e) : o.onreadystatechange = Ji[r] = e : e()
                        },
                        abort: function () {
                            e && e(void 0, !0)
                        }
                    }
                }
            }), oe.ajaxSetup({
                accepts: {
                    script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
                },
                contents: {
                    script: /(?:java|ecma)script/
                },
                converters: {
                    "text script": function (t) {
                        return oe.globalEval(t), t
                    }
                }
            }), oe.ajaxPrefilter("script", function (t) {
                void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET", t.global = !1)
            }), oe.ajaxTransport("script", function (t) {
                if (t.crossDomain) {
                    var e, i = me.head || oe("head")[0] || me.documentElement;
                    return {
                        send: function (n, s) {
                            e = me.createElement("script"), e.async = !0, t.scriptCharset && (e.charset = t.scriptCharset), e.src = t.url, e.onload = e.onreadystatechange = function (t, i) {
                                (i || !e.readyState || /loaded|complete/.test(e.readyState)) && (e.onload = e.onreadystatechange = null, e.parentNode && e.parentNode.removeChild(e), e = null, i || s(200, "success"))
                            }, i.insertBefore(e, i.firstChild)
                        },
                        abort: function () {
                            e && e.onload(void 0, !0)
                        }
                    }
                }
            });
        var tn = [],
            en = /(=)\?(?=&|$)|\?\?/;
        oe.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function () {
                var t = tn.pop() || oe.expando + "_" + Oi++;
                return this[t] = !0, t
            }
        }), oe.ajaxPrefilter("json jsonp", function (e, i, n) {
            var s, o, r, a = e.jsonp !== !1 && (en.test(e.url) ? "url" : "string" == typeof e.data && !(e.contentType || "")
                .indexOf("application/x-www-form-urlencoded") && en.test(e.data) && "data");
            return a || "jsonp" === e.dataTypes[0] ? (s = e.jsonpCallback = oe.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(en, "$1" + s) : e.jsonp !== !1 && (e.url += (Li.test(e.url) ? "&" : "?") + e.jsonp + "=" + s), e.converters["script json"] = function () {
                return r || oe.error(s + " was not called"), r[0]
            }, e.dataTypes[0] = "json", o = t[s], t[s] = function () {
                r = arguments
            }, n.always(function () {
                t[s] = o, e[s] && (e.jsonpCallback = i.jsonpCallback, tn.push(s)), r && oe.isFunction(o) && o(r[0]), r = o = void 0
            }), "script") : void 0
        }), oe.parseHTML = function (t, e, i) {
            if (!t || "string" != typeof t) return null;
            "boolean" == typeof e && (i = e, e = !1), e = e || me;
            var n = pe.exec(t),
                s = !i && [];
            return n ? [e.createElement(n[1])] : (n = oe.buildFragment([t], e, s), s && s.length && oe(s)
                .remove(), oe.merge([], n.childNodes))
        };
        var nn = oe.fn.load;
        oe.fn.load = function (t, e, i) {
            if ("string" != typeof t && nn) return nn.apply(this, arguments);
            var n, s, o, r = this,
                a = t.indexOf(" ");
            return a >= 0 && (n = oe.trim(t.slice(a, t.length)), t = t.slice(0, a)), oe.isFunction(e) ? (i = e, e = void 0) : e && "object" == typeof e && (o = "POST"), r.length > 0 && oe.ajax({
                    url: t,
                    type: o,
                    dataType: "html",
                    data: e
                })
                .done(function (t) {
                    s = arguments, r.html(n ? oe("<div>")
                        .append(oe.parseHTML(t))
                        .find(n) : t)
                })
                .complete(i && function (t, e) {
                    r.each(i, s || [t.responseText, e, t])
                }), this
        }, oe.expr.filters.animated = function (t) {
            return oe.grep(oe.timers, function (e) {
                    return t === e.elem
                })
                .length
        };
        var sn = t.document.documentElement;
        oe.offset = {
            setOffset: function (t, e, i) {
                var n, s, o, r, a, l, u, h = oe.css(t, "position"),
                    c = oe(t),
                    p = {};
                "static" === h && (t.style.position = "relative"), a = c.offset(), o = oe.css(t, "top"), l = oe.css(t, "left"), u = ("absolute" === h || "fixed" === h) && oe.inArray("auto", [o, l]) > -1, u ? (n = c.position(), r = n.top, s = n.left) : (r = parseFloat(o) || 0, s = parseFloat(l) || 0), oe.isFunction(e) && (e = e.call(t, i, a)), null != e.top && (p.top = e.top - a.top + r), null != e.left && (p.left = e.left - a.left + s), "using" in e ? e.using.call(t, p) : c.css(p)
            }
        }, oe.fn.extend({
            offset: function (t) {
                if (arguments.length) return void 0 === t ? this : this.each(function (e) {
                    oe.offset.setOffset(this, t, e)
                });
                var e, i, n = {
                        top: 0,
                        left: 0
                    },
                    s = this[0],
                    o = s && s.ownerDocument;
                return o ? (e = o.documentElement, oe.contains(e, s) ? (typeof s.getBoundingClientRect !== Te && (n = s.getBoundingClientRect()), i = Y(o), {
                    top: n.top + (i.pageYOffset || e.scrollTop) - (e.clientTop || 0),
                    left: n.left + (i.pageXOffset || e.scrollLeft) - (e.clientLeft || 0)
                }) : n) : void 0
            },
            position: function () {
                if (this[0]) {
                    var t, e, i = {
                            top: 0,
                            left: 0
                        },
                        n = this[0];
                    return "fixed" === oe.css(n, "position") ? e = n.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), oe.nodeName(t[0], "html") || (i = t.offset()), i.top += oe.css(t[0], "borderTopWidth", !0), i.left += oe.css(t[0], "borderLeftWidth", !0)), {
                        top: e.top - i.top - oe.css(n, "marginTop", !0),
                        left: e.left - i.left - oe.css(n, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function () {
                return this.map(function () {
                    for (var t = this.offsetParent || sn; t && !oe.nodeName(t, "html") && "static" === oe.css(t, "position");) t = t.offsetParent;
                    return t || sn
                })
            }
        }), oe.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function (t, e) {
            var i = /Y/.test(e);
            oe.fn[t] = function (n) {
                return Oe(this, function (t, n, s) {
                    var o = Y(t);
                    return void 0 === s ? o ? e in o ? o[e] : o.document.documentElement[n] : t[n] : void(o ? o.scrollTo(i ? oe(o)
                        .scrollLeft() : s, i ? s : oe(o)
                        .scrollTop()) : t[n] = s)
                }, t, n, arguments.length, null)
            }
        }), oe.each(["top", "left"], function (t, e) {
            oe.cssHooks[e] = C(ne.pixelPosition, function (t, i) {
                return i ? (i = ni(t, e), ei.test(i) ? oe(t)
                    .position()[e] + "px" : i) : void 0
            })
        }), oe.each({
            Height: "height",
            Width: "width"
        }, function (t, e) {
            oe.each({
                padding: "inner" + t,
                content: e,
                "": "outer" + t
            }, function (i, n) {
                oe.fn[n] = function (n, s) {
                    var o = arguments.length && (i || "boolean" != typeof n),
                        r = i || (n === !0 || s === !0 ? "margin" : "border");
                    return Oe(this, function (e, i, n) {
                        var s;
                        return oe.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (s = e.documentElement, Math.max(e.body["scroll" + t], s["scroll" + t], e.body["offset" + t], s["offset" + t], s["client" + t])) : void 0 === n ? oe.css(e, i, r) : oe.style(e, i, n, r)
                    }, e, o ? n : void 0, o, null)
                }
            })
        }), oe.fn.size = function () {
            return this.length
        }, oe.fn.andSelf = oe.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
            return oe
        });
        var on = t.jQuery,
            rn = t.$;
        return oe.noConflict = function (e) {
            return t.$ === oe && (t.$ = rn), e && t.jQuery === oe && (t.jQuery = on), oe
        }, typeof e === Te && (t.jQuery = t.$ = oe), oe
    }), void 0 === jQuery.migrateMute && (jQuery.migrateMute = !0),
    function (t, e, i) {
        function n(i) {
            var n = e.console;
            o[i] || (o[i] = !0, t.migrateWarnings.push(i), n && n.warn && !t.migrateMute && (n.warn("JQMIGRATE: " + i), t.migrateTrace && n.trace && n.trace()))
        }

        function s(e, s, o, r) {
            if (Object.defineProperty) try {
                return Object.defineProperty(e, s, {
                    configurable: !0,
                    enumerable: !0,
                    get: function () {
                        return n(r), o
                    },
                    set: function (t) {
                        n(r), o = t
                    }
                }), i
            } catch (a) {}
            t._definePropertyBroken = !0, e[s] = o
        }
        var o = {};
        t.migrateWarnings = [], !t.migrateMute && e.console && e.console.log && e.console.log("JQMIGRATE: Logging is active"), t.migrateTrace === i && (t.migrateTrace = !0), t.migrateReset = function () {
            o = {}, t.migrateWarnings.length = 0
        }, "BackCompat" === document.compatMode && n("jQuery is not compatible with Quirks Mode");
        var r = t("<input/>", {
                size: 1
            })
            .attr("size") && t.attrFn,
            a = t.attr,
            l = t.attrHooks.value && t.attrHooks.value.get || function () {
                return null
            },
            u = t.attrHooks.value && t.attrHooks.value.set || function () {
                return i
            },
            h = /^(?:input|button)$/i,
            c = /^[238]$/,
            p = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
            d = /^(?:checked|selected)$/i;
        s(t, "attrFn", r || {}, "jQuery.attrFn is deprecated"), t.attr = function (e, s, o, l) {
            var u = s.toLowerCase(),
                f = e && e.nodeType;
            return l && (4 > a.length && n("jQuery.fn.attr( props, pass ) is deprecated"), e && !c.test(f) && (r ? s in r : t.isFunction(t.fn[s]))) ? t(e)[s](o) : ("type" === s && o !== i && h.test(e.nodeName) && e.parentNode && n("Can't change the 'type' of an input or button in IE 6/7/8"), !t.attrHooks[u] && p.test(u) && (t.attrHooks[u] = {
                get: function (e, n) {
                    var s, o = t.prop(e, n);
                    return o === !0 || "boolean" != typeof o && (s = e.getAttributeNode(n)) && s.nodeValue !== !1 ? n.toLowerCase() : i
                },
                set: function (e, i, n) {
                    var s;
                    return i === !1 ? t.removeAttr(e, n) : (s = t.propFix[n] || n, s in e && (e[s] = !0), e.setAttribute(n, n.toLowerCase())), n
                }
            }, d.test(u) && n("jQuery.fn.attr('" + u + "') may use property instead of attribute")), a.call(t, e, s, o))
        }, t.attrHooks.value = {
            get: function (t, e) {
                var i = (t.nodeName || "")
                    .toLowerCase();
                return "button" === i ? l.apply(this, arguments) : ("input" !== i && "option" !== i && n("jQuery.fn.attr('value') no longer gets properties"), e in t ? t.value : null)
            },
            set: function (t, e) {
                var s = (t.nodeName || "")
                    .toLowerCase();
                return "button" === s ? u.apply(this, arguments) : ("input" !== s && "option" !== s && n("jQuery.fn.attr('value', val) no longer sets properties"), t.value = e, i)
            }
        };
        var f, m, g = t.fn.init,
            v = t.parseJSON,
            y = /^([^<]*)(<[\w\W]+>)([^>]*)$/;
        t.fn.init = function (e, i, s) {
            var o;
            return e && "string" == typeof e && !t.isPlainObject(i) && (o = y.exec(t.trim(e))) && o[0] && ("<" !== e.charAt(0) && n("$(html) HTML strings must start with '<' character"), o[3] && n("$(html) HTML text after last tag is ignored"), "#" === o[0].charAt(0) && (n("HTML string cannot start with a '#' character"), t.error("JQMIGRATE: Invalid selector string (XSS)")), i && i.context && (i = i.context), t.parseHTML) ? g.call(this, t.parseHTML(o[2], i, !0), i, s) : g.apply(this, arguments)
        }, t.fn.init.prototype = t.fn, t.parseJSON = function (t) {
            return t || null === t ? v.apply(this, arguments) : (n("jQuery.parseJSON requires a valid JSON string"), null)
        }, t.uaMatch = function (t) {
            t = t.toLowerCase();
            var e = /(chrome)[ \/]([\w.]+)/.exec(t) || /(webkit)[ \/]([\w.]+)/.exec(t) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(t) || /(msie) ([\w.]+)/.exec(t) || 0 > t.indexOf("compatible") && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(t) || [];
            return {
                browser: e[1] || "",
                version: e[2] || "0"
            }
        }, t.browser || (f = t.uaMatch(navigator.userAgent), m = {}, f.browser && (m[f.browser] = !0, m.version = f.version), m.chrome ? m.webkit = !0 : m.webkit && (m.safari = !0), t.browser = m), s(t, "browser", t.browser, "jQuery.browser is deprecated"), t.sub = function () {
            function e(t, i) {
                return new e.fn.init(t, i)
            }
            t.extend(!0, e, this), e.superclass = this, e.fn = e.prototype = this(), e.fn.constructor = e, e.sub = this.sub, e.fn.init = function (n, s) {
                return s && s instanceof t && !(s instanceof e) && (s = e(s)), t.fn.init.call(this, n, s, i)
            }, e.fn.init.prototype = e.fn;
            var i = e(document);
            return n("jQuery.sub() is deprecated"), e
        }, t.ajaxSetup({
            converters: {
                "text json": t.parseJSON
            }
        });
        var _ = t.fn.data;
        t.fn.data = function (e) {
            var s, o, r = this[0];
            return !r || "events" !== e || 1 !== arguments.length || (s = t.data(r, e), o = t._data(r, e), s !== i && s !== o || o === i) ? _.apply(this, arguments) : (n("Use of jQuery.fn.data('events') is deprecated"), o)
        };
        var x = /\/(java|ecma)script/i,
            b = t.fn.andSelf || t.fn.addBack;
        t.fn.andSelf = function () {
            return n("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"), b.apply(this, arguments)
        }, t.clean || (t.clean = function (e, s, o, r) {
            s = s || document, s = !s.nodeType && s[0] || s, s = s.ownerDocument || s, n("jQuery.clean() is deprecated");
            var a, l, u, h, c = [];
            if (t.merge(c, t.buildFragment(e, s)
                    .childNodes), o)
                for (u = function (t) {
                        return !t.type || x.test(t.type) ? r ? r.push(t.parentNode ? t.parentNode.removeChild(t) : t) : o.appendChild(t) : i
                    }, a = 0; null != (l = c[a]); a++) t.nodeName(l, "script") && u(l) || (o.appendChild(l), l.getElementsByTagName !== i && (h = t.grep(t.merge([], l.getElementsByTagName("script")), u), c.splice.apply(c, [a + 1, 0].concat(h)), a += h.length));
            return c
        });
        var w = t.event.add,
            T = t.event.remove,
            M = t.event.trigger,
            S = t.fn.toggle,
            C = t.fn.live,
            A = t.fn.die,
            E = "ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",
            k = RegExp("\\b(?:" + E + ")\\b"),
            O = /(?:^|\s)hover(\.\S+|)\b/,
            L = function (e) {
                return "string" != typeof e || t.event.special.hover ? e : (O.test(e) && n("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"), e && e.replace(O, "mouseenter$1 mouseleave$1"))
            };
        t.event.props && "attrChange" !== t.event.props[0] && t.event.props.unshift("attrChange", "attrName", "relatedNode", "srcElement"), t.event.dispatch && s(t.event, "handle", t.event.dispatch, "jQuery.event.handle is undocumented and deprecated"), t.event.add = function (t, e, i, s, o) {
            t !== document && k.test(e) && n("AJAX events should be attached to document: " + e), w.call(this, t, L(e || ""), i, s, o)
        }, t.event.remove = function (t, e, i, n, s) {
            T.call(this, t, L(e) || "", i, n, s)
        }, t.fn.error = function () {
            var t = Array.prototype.slice.call(arguments, 0);
            return n("jQuery.fn.error() is deprecated"), t.splice(0, 0, "error"), arguments.length ? this.bind.apply(this, t) : (this.triggerHandler.apply(this, t), this)
        }, t.fn.toggle = function (e, i) {
            if (!t.isFunction(e) || !t.isFunction(i)) return S.apply(this, arguments);
            n("jQuery.fn.toggle(handler, handler...) is deprecated");
            var s = arguments,
                o = e.guid || t.guid++,
                r = 0,
                a = function (i) {
                    var n = (t._data(this, "lastToggle" + e.guid) || 0) % r;
                    return t._data(this, "lastToggle" + e.guid, n + 1), i.preventDefault(), s[n].apply(this, arguments) || !1
                };
            for (a.guid = o; s.length > r;) s[r++].guid = o;
            return this.click(a)
        }, t.fn.live = function (e, i, s) {
            return n("jQuery.fn.live() is deprecated"), C ? C.apply(this, arguments) : (t(this.context)
                .on(e, this.selector, i, s), this)
        }, t.fn.die = function (e, i) {
            return n("jQuery.fn.die() is deprecated"), A ? A.apply(this, arguments) : (t(this.context)
                .off(e, this.selector || "**", i), this)
        }, t.event.trigger = function (t, e, i, s) {
            return i || k.test(t) || n("Global events are undocumented and deprecated"), M.call(this, t, e, i || document, s)
        }, t.each(E.split("|"), function (e, i) {
            t.event.special[i] = {
                setup: function () {
                    var e = this;
                    return e !== document && (t.event.add(document, i + "." + t.guid, function () {
                        t.event.trigger(i, null, e, !0)
                    }), t._data(this, i, t.guid++)), !1
                },
                teardown: function () {
                    return this !== document && t.event.remove(document, i + "." + t._data(this, i)), !1
                }
            }
        })
    }(jQuery, window),
    function () {
        var t = {
                supportsFullScreen: !1,
                isFullScreen: function () {
                    return !1
                },
                requestFullScreen: function () {},
                cancelFullScreen: function () {},
                fullScreenEventName: "",
                prefix: ""
            },
            e = "webkit moz o ms khtml".split(" ");
        if ("undefined" != typeof document.cancelFullScreen) t.supportsFullScreen = !0;
        else
            for (var i = 0, n = e.length; n > i; i++)
                if (t.prefix = e[i], "undefined" != typeof document[t.prefix + "CancelFullScreen"]) {
                    t.supportsFullScreen = !0;
                    break
                }
        t.supportsFullScreen && (t.fullScreenEventName = t.prefix + "fullscreenchange", t.isFullScreen = function () {
            switch (this.prefix) {
            case "":
                return document.fullScreen;
            case "webkit":
                return document.webkitIsFullScreen;
            default:
                return document[this.prefix + "FullScreen"]
            }
        }, t.requestFullScreen = function (t) {
            return "" === this.prefix ? t.requestFullScreen() : t[this.prefix + "RequestFullScreen"]()
        }, t.cancelFullScreen = function (t) {
            return "" === this.prefix ? document.cancelFullScreen() : document[this.prefix + "CancelFullScreen"]()
        }), "undefined" != typeof jQuery && (jQuery.fn.requestFullScreen = function () {
            return this.each(function () {
                t.supportsFullScreen && t.requestFullScreen(this)
            })
        }), window.fullScreenApi = t
    }(),
    function () {
        var t = Math,
            e = /webkit/i.test(navigator.appVersion) ? "webkit" : /firefox/i.test(navigator.userAgent) ? "Moz" : "opera" in window ? "O" : "",
            i = "WebKitCSSMatrix" in window && "m11" in new WebKitCSSMatrix,
            n = "ontouchstart" in window,
            s = e + "Transform" in document.documentElement.style,
            o = /android/gi.test(navigator.appVersion),
            r = /iphone|ipad/gi.test(navigator.appVersion),
            a = /playbook/gi.test(navigator.appVersion),
            l = r || a,
            u = function () {
                return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (t) {
                    return setTimeout(t, 1)
                }
            }(),
            h = function () {
                return window.cancelRequestAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || clearTimeout
            }(),
            c = "onorientationchange" in window ? "orientationchange" : "resize",
            p = n ? "touchstart" : "mousedown",
            d = n ? "touchmove" : "mousemove",
            f = n ? "touchend" : "mouseup",
            m = n ? "touchcancel" : "mouseup",
            g = "Moz" == e ? "DOMMouseScroll" : "mousewheel",
            v = "translate" + (i ? "3d(" : "("),
            y = i ? ",0)" : ")",
            _ = function (t, a) {
                var u = this,
                    h = document,
                    d;
                u.wrapper = "object" == typeof t ? t : h.getElementById(t), u.wrapper.style.overflow = "hidden", u.scroller = u.wrapper.children[0], u.options = {
                    hScroll: !0,
                    vScroll: !0,
                    bounce: !0,
                    bounceLock: !1,
                    momentum: !0,
                    lockDirection: !0,
                    useTransform: !0,
                    useTransition: !1,
                    topOffset: 0,
                    checkDOMChanges: !1,
                    hScrollbar: !0,
                    vScrollbar: !0,
                    fixedScrollbar: o,
                    hideScrollbar: r,
                    fadeScrollbar: r && i,
                    scrollbarClass: "",
                    zoom: !1,
                    zoomMin: 1,
                    zoomMax: 4,
                    doubleTapZoom: 2,
                    wheelAction: "scroll",
                    snap: !1,
                    snapThreshold: 1,
                    onRefresh: null,
                    onBeforeScrollStart: function (t) {
                        t.preventDefault()
                    },
                    onScrollStart: null,
                    onBeforeScrollMove: null,
                    onScrollMove: null,
                    onBeforeScrollEnd: null,
                    onScrollEnd: null,
                    onTouchEnd: null,
                    onDestroy: null,
                    onZoomStart: null,
                    onZoom: null,
                    onZoomEnd: null
                };
                for (d in a) u.options[d] = a[d];
                u.options.useTransform = s ? u.options.useTransform : !1, u.options.hScrollbar = u.options.hScroll && u.options.hScrollbar, u.options.vScrollbar = u.options.vScroll && u.options.vScrollbar, u.options.zoom = u.options.useTransform && u.options.zoom, u.options.useTransition = l && u.options.useTransition, u.scroller.style[e + "TransitionProperty"] = u.options.useTransform ? "-" + e.toLowerCase() + "-transform" : "top left", u.scroller.style[e + "TransitionDuration"] = "0", u.scroller.style[e + "TransformOrigin"] = "0 0", u.options.useTransition && (u.scroller.style[e + "TransitionTimingFunction"] = "cubic-bezier(0.33,0.66,0.66,1)"), u.options.useTransform ? u.scroller.style[e + "Transform"] = v + "0,0" + y : u.scroller.style.cssText += ";position:absolute;top:0;left:0", u.options.useTransition && (u.options.fixedScrollbar = !0), u.refresh(), u._bind(c, window), u._bind(p), n || (u._bind("mouseout", u.wrapper), u._bind(g)), u.options.checkDOMChanges && (u.checkDOMTime = setInterval(function () {
                    u._checkDOMChanges()
                }, 500))
            };
        _.prototype = {
            enabled: !0,
            x: 0,
            y: 0,
            steps: [],
            scale: 1,
            currPageX: 0,
            currPageY: 0,
            pagesX: [],
            pagesY: [],
            aniTime: null,
            wheelZoomCount: 0,
            handleEvent: function (t) {
                var e = this;
                switch (t.type) {
                case p:
                    if (!n && 0 !== t.button) return;
                    e._start(t);
                    break;
                case d:
                    e._move(t);
                    break;
                case f:
                case m:
                    e._end(t);
                    break;
                case c:
                    e._resize();
                    break;
                case g:
                    e._wheel(t);
                    break;
                case "mouseout":
                    e._mouseout(t);
                    break;
                case "webkitTransitionEnd":
                    e._transitionEnd(t)
                }
            },
            _checkDOMChanges: function () {
                this.moved || this.zoomed || this.animating || this.scrollerW == this.scroller.offsetWidth * this.scale && this.scrollerH == this.scroller.offsetHeight * this.scale || this.refresh()
            },
            _scrollbar: function (i) {
                var n = this,
                    o = document,
                    r;
                return n[i + "Scrollbar"] ? (n[i + "ScrollbarWrapper"] || (r = o.createElement("div"), n.options.scrollbarClass ? r.className = n.options.scrollbarClass + i.toUpperCase() : r.style.cssText = "position:absolute;z-index:100;" + ("h" == i ? "height:7px;bottom:1px;left:2px;right:" + (n.vScrollbar ? "7" : "2") + "px" : "width:7px;bottom:" + (n.hScrollbar ? "7" : "2") + "px;top:2px;right:1px"), r.style.cssText += ";pointer-events:none;-" + e + "-transition-property:opacity;-" + e + "-transition-duration:" + (n.options.fadeScrollbar ? "350ms" : "0") + ";overflow:hidden;opacity:" + (n.options.hideScrollbar ? "0" : "1"), n.wrapper.appendChild(r), n[i + "ScrollbarWrapper"] = r, r = o.createElement("div"), n.options.scrollbarClass || (r.style.cssText = "position:absolute;z-index:100;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);-" + e + "-background-clip:padding-box;-" + e + "-box-sizing:border-box;" + ("h" == i ? "height:100%" : "width:100%") + ";-" + e + "-border-radius:3px;border-radius:3px"), r.style.cssText += ";pointer-events:none;-" + e + "-transition-property:-" + e + "-transform;-" + e + "-transition-timing-function:cubic-bezier(0.33,0.66,0.66,1);-" + e + "-transition-duration:0;-" + e + "-transform:" + v + "0,0" + y, n.options.useTransition && (r.style.cssText += ";-" + e + "-transition-timing-function:cubic-bezier(0.33,0.66,0.66,1)"), n[i + "ScrollbarWrapper"].appendChild(r), n[i + "ScrollbarIndicator"] = r), "h" == i ? (n.hScrollbarSize = n.hScrollbarWrapper.clientWidth, n.hScrollbarIndicatorSize = t.max(t.round(n.hScrollbarSize * n.hScrollbarSize / n.scrollerW), 8), n.hScrollbarIndicator.style.width = n.hScrollbarIndicatorSize + "px", n.hScrollbarMaxScroll = n.hScrollbarSize - n.hScrollbarIndicatorSize, n.hScrollbarProp = n.hScrollbarMaxScroll / n.maxScrollX) : (n.vScrollbarSize = n.vScrollbarWrapper.clientHeight, n.vScrollbarIndicatorSize = t.max(t.round(n.vScrollbarSize * n.vScrollbarSize / n.scrollerH), 8), n.vScrollbarIndicator.style.height = n.vScrollbarIndicatorSize + "px", n.vScrollbarMaxScroll = n.vScrollbarSize - n.vScrollbarIndicatorSize, n.vScrollbarProp = n.vScrollbarMaxScroll / n.maxScrollY), void n._scrollbarPos(i, !0)) : void(n[i + "ScrollbarWrapper"] && (s && (n[i + "ScrollbarIndicator"].style[e + "Transform"] = ""), n[i + "ScrollbarWrapper"].parentNode.removeChild(n[i + "ScrollbarWrapper"]), n[i + "ScrollbarWrapper"] = null, n[i + "ScrollbarIndicator"] = null))
            },
            _resize: function () {
                var t = this;
                setTimeout(function () {
                    t.refresh()
                }, o ? 200 : 0)
            },
            _pos: function (i, n) {
                i = this.hScroll ? i : 0, n = this.vScroll ? n : 0, this.options.useTransform ? this.scroller.style[e + "Transform"] = v + i + "px," + n + "px" + y + " scale(" + this.scale + ")" : (i = t.round(i), n = t.round(n), this.scroller.style.left = i + "px", this.scroller.style.top = n + "px"), this.x = i, this.y = n, this._scrollbarPos("h"), this._scrollbarPos("v")
            },
            _scrollbarPos: function (i, n) {
                var s = this,
                    o = "h" == i ? s.x : s.y,
                    r;
                s[i + "Scrollbar"] && (o = s[i + "ScrollbarProp"] * o, 0 > o ? (s.options.fixedScrollbar || (r = s[i + "ScrollbarIndicatorSize"] + t.round(3 * o), 8 > r && (r = 8), s[i + "ScrollbarIndicator"].style["h" == i ? "width" : "height"] = r + "px"), o = 0) : o > s[i + "ScrollbarMaxScroll"] && (s.options.fixedScrollbar ? o = s[i + "ScrollbarMaxScroll"] : (r = s[i + "ScrollbarIndicatorSize"] - t.round(3 * (o - s[i + "ScrollbarMaxScroll"])), 8 > r && (r = 8), s[i + "ScrollbarIndicator"].style["h" == i ? "width" : "height"] = r + "px", o = s[i + "ScrollbarMaxScroll"] + (s[i + "ScrollbarIndicatorSize"] - r))), s[i + "ScrollbarWrapper"].style[e + "TransitionDelay"] = "0", s[i + "ScrollbarWrapper"].style.opacity = n && s.options.hideScrollbar ? "0" : "1", s[i + "ScrollbarIndicator"].style[e + "Transform"] = v + ("h" == i ? o + "px,0" : "0," + o + "px") + y)
            },
            _start: function (i) {
                var s = this,
                    o = n ? i.touches[0] : i,
                    r, a, l, u, c;
                s.enabled && (s.options.onBeforeScrollStart && s.options.onBeforeScrollStart.call(s, i), (s.options.useTransition || s.options.zoom) && s._transitionTime(0), s.moved = !1, s.animating = !1, s.zoomed = !1, s.distX = 0, s.distY = 0, s.absDistX = 0, s.absDistY = 0, s.dirX = 0, s.dirY = 0, s.options.zoom && n && i.touches.length > 1 && (u = t.abs(i.touches[0].pageX - i.touches[1].pageX), c = t.abs(i.touches[0].pageY - i.touches[1].pageY), s.touchesDistStart = t.sqrt(u * u + c * c), s.originX = t.abs(i.touches[0].pageX + i.touches[1].pageX - 2 * s.wrapperOffsetLeft) / 2 - s.x, s.originY = t.abs(i.touches[0].pageY + i.touches[1].pageY - 2 * s.wrapperOffsetTop) / 2 - s.y, s.options.onZoomStart && s.options.onZoomStart.call(s, i)), s.options.momentum && (s.options.useTransform ? (r = getComputedStyle(s.scroller, null)[e + "Transform"].replace(/[^0-9-.,]/g, "")
                    .split(","), a = 1 * r[4], l = 1 * r[5]) : (a = 1 * getComputedStyle(s.scroller, null)
                    .left.replace(/[^0-9-]/g, ""), l = 1 * getComputedStyle(s.scroller, null)
                    .top.replace(/[^0-9-]/g, "")), (a != s.x || l != s.y) && (s.options.useTransition ? s._unbind("webkitTransitionEnd") : h(s.aniTime), s.steps = [], s._pos(a, l))), s.absStartX = s.x, s.absStartY = s.y, s.startX = s.x, s.startY = s.y, s.pointX = o.pageX, s.pointY = o.pageY, s.startTime = i.timeStamp || Date.now(), s.options.onScrollStart && s.options.onScrollStart.call(s, i), s._bind(d), s._bind(f), s._bind(m))
            },
            _move: function (i) {
                var s = this,
                    o = n ? i.touches[0] : i,
                    r = o.pageX - s.pointX,
                    a = o.pageY - s.pointY,
                    l = s.x + r,
                    u = s.y + a,
                    h, c, p, d = i.timeStamp || Date.now();
                return s.options.onBeforeScrollMove && s.options.onBeforeScrollMove.call(s, i), s.options.zoom && n && i.touches.length > 1 ? (h = t.abs(i.touches[0].pageX - i.touches[1].pageX), c = t.abs(i.touches[0].pageY - i.touches[1].pageY), s.touchesDist = t.sqrt(h * h + c * c), s.zoomed = !0, p = 1 / s.touchesDistStart * s.touchesDist * this.scale, p < s.options.zoomMin ? p = .5 * s.options.zoomMin * Math.pow(2, p / s.options.zoomMin) : p > s.options.zoomMax && (p = 2 * s.options.zoomMax * Math.pow(.5, s.options.zoomMax / p)), s.lastScale = p / this.scale, l = this.originX - this.originX * s.lastScale + this.x, u = this.originY - this.originY * s.lastScale + this.y, this.scroller.style[e + "Transform"] = v + l + "px," + u + "px" + y + " scale(" + p + ")", void(s.options.onZoom && s.options.onZoom.call(s, i))) : (s.pointX = o.pageX, s.pointY = o.pageY, (l > 0 || l < s.maxScrollX) && (l = s.options.bounce ? s.x + r / 2 : l >= 0 || s.maxScrollX >= 0 ? 0 : s.maxScrollX), (u > s.minScrollY || u < s.maxScrollY) && (u = s.options.bounce ? s.y + a / 2 : u >= s.minScrollY || s.maxScrollY >= 0 ? s.minScrollY : s.maxScrollY), s.absDistX < 6 && s.absDistY < 6 ? (s.distX += r, s.distY += a, s.absDistX = t.abs(s.distX), void(s.absDistY = t.abs(s.distY))) : (s.options.lockDirection && (s.absDistX > s.absDistY + 5 ? (u = s.y, a = 0) : s.absDistY > s.absDistX + 5 && (l = s.x, r = 0)), s.moved = !0, s._pos(l, u), s.dirX = r > 0 ? -1 : 0 > r ? 1 : 0, s.dirY = a > 0 ? -1 : 0 > a ? 1 : 0, d - s.startTime > 300 && (s.startTime = d, s.startX = s.x, s.startY = s.y), void(s.options.onScrollMove && s.options.onScrollMove.call(s, i))))
            },
            _end: function (i) {
                if (!n || 0 == i.touches.length) {
                    var s = this,
                        o = n ? i.changedTouches[0] : i,
                        r, a, l = {
                            dist: 0,
                            time: 0
                        },
                        u = {
                            dist: 0,
                            time: 0
                        },
                        h = (i.timeStamp || Date.now()) - s.startTime,
                        c = s.x,
                        p = s.y,
                        g, _, x, b, w;
                    if (s._unbind(d), s._unbind(f), s._unbind(m), s.options.onBeforeScrollEnd && s.options.onBeforeScrollEnd.call(s, i), s.zoomed) return w = s.scale * s.lastScale, w = Math.max(s.options.zoomMin, w), w = Math.min(s.options.zoomMax, w), s.lastScale = w / s.scale, s.scale = w, s.x = s.originX - s.originX * s.lastScale + s.x, s.y = s.originY - s.originY * s.lastScale + s.y, s.scroller.style[e + "TransitionDuration"] = "200ms", s.scroller.style[e + "Transform"] = v + s.x + "px," + s.y + "px" + y + " scale(" + s.scale + ")", s.zoomed = !1, s.refresh(), void(s.options.onZoomEnd && s.options.onZoomEnd.call(s, i));
                    if (!s.moved) return n && (s.doubleTapTimer && s.options.zoom ? (clearTimeout(s.doubleTapTimer), s.doubleTapTimer = null, s.options.onZoomStart && s.options.onZoomStart.call(s, i), s.zoom(s.pointX, s.pointY, 1 == s.scale ? s.options.doubleTapZoom : 1), s.options.onZoomEnd && setTimeout(function () {
                        s.options.onZoomEnd.call(s, i)
                    }, 200)) : s.doubleTapTimer = setTimeout(function () {
                        for (s.doubleTapTimer = null, r = o.target; 1 != r.nodeType;) r = r.parentNode;
                        "SELECT" != r.tagName && "INPUT" != r.tagName && "TEXTAREA" != r.tagName && (a = document.createEvent("MouseEvents"), a.initMouseEvent("click", !0, !0, i.view, 1, o.screenX, o.screenY, o.clientX, o.clientY, i.ctrlKey, i.altKey, i.shiftKey, i.metaKey, 0, null), a._fake = !0, r.dispatchEvent(a))
                    }, s.options.zoom ? 250 : 0)), s._resetPos(200), void(s.options.onTouchEnd && s.options.onTouchEnd.call(s, i));
                    if (300 > h && s.options.momentum && (l = c ? s._momentum(c - s.startX, h, -s.x, s.scrollerW - s.wrapperW + s.x, s.options.bounce ? s.wrapperW : 0) : l, u = p ? s._momentum(p - s.startY, h, -s.y, s.maxScrollY < 0 ? s.scrollerH - s.wrapperH + s.y - s.minScrollY : 0, s.options.bounce ? s.wrapperH : 0) : u, c = s.x + l.dist, p = s.y + u.dist, (s.x > 0 && c > 0 || s.x < s.maxScrollX && c < s.maxScrollX) && (l = {
                            dist: 0,
                            time: 0
                        }), (s.y > s.minScrollY && p > s.minScrollY || s.y < s.maxScrollY && p < s.maxScrollY) && (u = {
                            dist: 0,
                            time: 0
                        })), l.dist || u.dist) return x = t.max(t.max(l.time, u.time), 10), s.options.snap && (g = c - s.absStartX, _ = p - s.absStartY, t.abs(g) < s.options.snapThreshold && t.abs(_) < s.options.snapThreshold ? s.scrollTo(s.absStartX, s.absStartY, 200) : (b = s._snap(c, p), c = b.x, p = b.y, x = t.max(b.time, x))), s.scrollTo(t.round(c), t.round(p), x), void(s.options.onTouchEnd && s.options.onTouchEnd.call(s, i));
                    if (s.options.snap) return g = c - s.absStartX, _ = p - s.absStartY, t.abs(g) < s.options.snapThreshold && t.abs(_) < s.options.snapThreshold ? s.scrollTo(s.absStartX, s.absStartY, 200) : (b = s._snap(s.x, s.y), (b.x != s.x || b.y != s.y) && s.scrollTo(b.x, b.y, b.time)), void(s.options.onTouchEnd && s.options.onTouchEnd.call(s, i));
                    s._resetPos(200), s.options.onTouchEnd && s.options.onTouchEnd.call(s, i)
                }
            },
            _resetPos: function (t) {
                var i = this,
                    n = i.x >= 0 ? 0 : i.x < i.maxScrollX ? i.maxScrollX : i.x,
                    s = i.y >= i.minScrollY || i.maxScrollY > 0 ? i.minScrollY : i.y < i.maxScrollY ? i.maxScrollY : i.y;
                return n == i.x && s == i.y ? (i.moved && (i.moved = !1, i.options.onScrollEnd && i.options.onScrollEnd.call(i)), i.hScrollbar && i.options.hideScrollbar && ("webkit" == e && (i.hScrollbarWrapper.style[e + "TransitionDelay"] = "300ms"), i.hScrollbarWrapper.style.opacity = "0"), void(i.vScrollbar && i.options.hideScrollbar && ("webkit" == e && (i.vScrollbarWrapper.style[e + "TransitionDelay"] = "300ms"), i.vScrollbarWrapper.style.opacity = "0"))) : void i.scrollTo(n, s, t || 0)
            },
            _wheel: function (t) {
                var e = this,
                    i, n, s, o, r;
                return "wheelDeltaX" in t ? (i = t.wheelDeltaX / 12, n = t.wheelDeltaY / 12) : i = n = "detail" in t ? 3 * -t.detail : -t.wheelDelta, "zoom" == e.options.wheelAction ? (r = e.scale * Math.pow(2, 1 / 3 * (n ? n / Math.abs(n) : 0)), r < e.options.zoomMin && (r = e.options.zoomMin), r > e.options.zoomMax && (r = e.options.zoomMax), void(r != e.scale && (!e.wheelZoomCount && e.options.onZoomStart && e.options.onZoomStart.call(e, t), e.wheelZoomCount++, e.zoom(t.pageX, t.pageY, r, 400), setTimeout(function () {
                    e.wheelZoomCount--, !e.wheelZoomCount && e.options.onZoomEnd && e.options.onZoomEnd.call(e, t)
                }, 400)))) : (s = e.x + i, o = e.y + n, s > 0 ? s = 0 : s < e.maxScrollX && (s = e.maxScrollX), o > e.minScrollY ? o = e.minScrollY : o < e.maxScrollY && (o = e.maxScrollY), void e.scrollTo(s, o, 0))
            },
            _mouseout: function (t) {
                var e = t.relatedTarget;
                if (!e) return void this._end(t);
                for (; e = e.parentNode;)
                    if (e == this.wrapper) return;
                this._end(t)
            },
            _transitionEnd: function (t) {
                var e = this;
                t.target == e.scroller && (e._unbind("webkitTransitionEnd"), e._startAni())
            },
            _startAni: function () {
                var e = this,
                    i = e.x,
                    n = e.y,
                    s = Date.now(),
                    o, r;
                if (!e.animating) return e.steps.length ? (o = e.steps.shift(), o.x == i && o.y == n && (o.time = 0), e.animating = !0, e.moved = !0, e.options.useTransition ? (e._transitionTime(o.time), e._pos(o.x, o.y), e.animating = !1, void(o.time ? e._bind("webkitTransitionEnd") : e._resetPos(0))) : void
                    function a() {
                        var l = Date.now(),
                            h, c;
                        return l >= s + o.time ? (e._pos(o.x, o.y), e.animating = !1, e.options.onAnimationEnd && e.options.onAnimationEnd.call(e), void e._startAni()) : (l = (l - s) / o.time - 1, r = t.sqrt(1 - l * l), h = (o.x - i) * r + i, c = (o.y - n) * r + n, e._pos(h, c), void(e.animating && (e.aniTime = u(a))))
                    }()) : void e._resetPos(400)
            },
            _transitionTime: function (t) {
                t += "ms", this.scroller.style[e + "TransitionDuration"] = t, this.hScrollbar && (this.hScrollbarIndicator.style[e + "TransitionDuration"] = t), this.vScrollbar && (this.vScrollbarIndicator.style[e + "TransitionDuration"] = t)
            },
            _momentum: function (e, i, n, s, o) {
                var r = .0012,
                    a = t.abs(e) / i,
                    l = a * a / (2 * r),
                    u = 0,
                    h = 0;
                return e > 0 && l > n ? (h = o / (6 / (l / a * r)), n += h, a = a * n / l, l = n) : 0 > e && l > s && (h = o / (6 / (l / a * r)), s += h, a = a * s / l, l = s), l *= 0 > e ? -1 : 1, u = a / r, {
                    dist: l,
                    time: t.round(u)
                }
            },
            _offset: function (t) {
                for (var e = -t.offsetLeft, i = -t.offsetTop; t = t.offsetParent;) e -= t.offsetLeft, i -= t.offsetTop;
                return t != this.wrapper && (e *= this.scale, i *= this.scale), {
                    left: e,
                    top: i
                }
            },
            _snap: function (e, i) {
                var n = this,
                    s, o, r, a, l, u;
                for (r = n.pagesX.length - 1, s = 0, o = n.pagesX.length; o > s; s++)
                    if (e >= n.pagesX[s]) {
                        r = s;
                        break
                    }
                for (r == n.currPageX && r > 0 && n.dirX < 0 && r--, e = n.pagesX[r], l = t.abs(e - n.pagesX[n.currPageX]), l = l ? t.abs(n.x - e) / l * 500 : 0, n.currPageX = r, r = n.pagesY.length - 1, s = 0; r > s; s++)
                    if (i >= n.pagesY[s]) {
                        r = s;
                        break
                    }
                return r == n.currPageY && r > 0 && n.dirY < 0 && r--, i = n.pagesY[r], u = t.abs(i - n.pagesY[n.currPageY]), u = u ? t.abs(n.y - i) / u * 500 : 0, n.currPageY = r, a = t.round(t.max(l, u)) || 200, {
                    x: e,
                    y: i,
                    time: a
                }
            },
            _bind: function (t, e, i) {
                (e || this.scroller)
                .addEventListener(t, this, !!i)
            },
            _unbind: function (t, e, i) {
                (e || this.scroller)
                .removeEventListener(t, this, !!i)
            },
            destroy: function () {
                var t = this;
                t.scroller.style[e + "Transform"] = "", t.hScrollbar = !1, t.vScrollbar = !1, t._scrollbar("h"), t._scrollbar("v"), t._unbind(c, window), t._unbind(p), t._unbind(d), t._unbind(f), t._unbind(m), t.options.hasTouch && (t._unbind("mouseout", t.wrapper), t._unbind(g)), t.options.useTransition && t._unbind("webkitTransitionEnd"), t.options.checkDOMChanges && clearInterval(t.checkDOMTime), t.options.onDestroy && t.options.onDestroy.call(t)
            },
            refresh: function () {
                var i = this,
                    n, s, o, r, a = 0,
                    l = 0;
                if (i.scale < i.options.zoomMin && (i.scale = i.options.zoomMin), i.wrapperW = i.wrapper.clientWidth || 1, i.wrapperH = i.wrapper.clientHeight || 1, i.minScrollY = -i.options.topOffset || 0, i.scrollerW = t.round(i.scroller.offsetWidth * i.scale), i.scrollerH = t.round((i.scroller.offsetHeight + i.minScrollY) * i.scale), i.maxScrollX = i.wrapperW - i.scrollerW, i.maxScrollY = i.wrapperH - i.scrollerH + i.minScrollY, i.dirX = 0, i.dirY = 0, i.options.onRefresh && i.options.onRefresh.call(i), i.hScroll = i.options.hScroll && i.maxScrollX < 0, i.vScroll = i.options.vScroll && (!i.options.bounceLock && !i.hScroll || i.scrollerH > i.wrapperH), i.hScrollbar = i.hScroll && i.options.hScrollbar, i.vScrollbar = i.vScroll && i.options.vScrollbar && i.scrollerH > i.wrapperH, n = i._offset(i.wrapper), i.wrapperOffsetLeft = -n.left, i.wrapperOffsetTop = -n.top, "string" == typeof i.options.snap)
                    for (i.pagesX = [], i.pagesY = [], r = i.scroller.querySelectorAll(i.options.snap), s = 0, o = r.length; o > s; s++) a = i._offset(r[s]), a.left += i.wrapperOffsetLeft, a.top += i.wrapperOffsetTop, i.pagesX[s] = a.left < i.maxScrollX ? i.maxScrollX : a.left * i.scale, i.pagesY[s] = a.top < i.maxScrollY ? i.maxScrollY : a.top * i.scale;
                else if (i.options.snap) {
                    for (i.pagesX = []; a >= i.maxScrollX;) i.pagesX[l] = a, a -= i.wrapperW, l++;
                    for (i.maxScrollX % i.wrapperW && (i.pagesX[i.pagesX.length] = i.maxScrollX - i.pagesX[i.pagesX.length - 1] + i.pagesX[i.pagesX.length - 1]), a = 0, l = 0, i.pagesY = []; a >= i.maxScrollY;) i.pagesY[l] = a, a -= i.wrapperH, l++;
                    i.maxScrollY % i.wrapperH && (i.pagesY[i.pagesY.length] = i.maxScrollY - i.pagesY[i.pagesY.length - 1] + i.pagesY[i.pagesY.length - 1])
                }
                i._scrollbar("h"), i._scrollbar("v"), i.zoomed || (i.scroller.style[e + "TransitionDuration"] = "0", i._resetPos(200))
            },
            scrollTo: function (t, e, i, n) {
                var s = this,
                    o = t,
                    r, a;
                for (s.stop(), o.length || (o = [{
                        x: t,
                        y: e,
                        time: i,
                        relative: n
                    }]), r = 0, a = o.length; a > r; r++) o[r].relative && (o[r].x = s.x - o[r].x, o[r].y = s.y - o[r].y), s.steps.push({
                    x: o[r].x,
                    y: o[r].y,
                    time: o[r].time || 0
                });
                s._startAni()
            },
            scrollToElement: function (e, i) {
                var n = this,
                    s;
                e = e.nodeType ? e : n.scroller.querySelector(e), e && (s = n._offset(e), s.left += n.wrapperOffsetLeft, s.top += n.wrapperOffsetTop, s.left = s.left > 0 ? 0 : s.left < n.maxScrollX ? n.maxScrollX : s.left, s.top = s.top > n.minScrollY ? n.minScrollY : s.top < n.maxScrollY ? n.maxScrollY : s.top, i = void 0 === i ? t.max(2 * t.abs(s.left), 2 * t.abs(s.top)) : i, n.scrollTo(s.left, s.top, i))
            },
            scrollToPage: function (t, e, i) {
                var n = this,
                    s, o;
                n.options.onScrollStart && n.options.onScrollStart.call(n), n.options.snap ? (t = "next" == t ? n.currPageX + 1 : "prev" == t ? n.currPageX - 1 : t, e = "next" == e ? n.currPageY + 1 : "prev" == e ? n.currPageY - 1 : e, t = 0 > t ? 0 : t > n.pagesX.length - 1 ? n.pagesX.length - 1 : t, e = 0 > e ? 0 : e > n.pagesY.length - 1 ? n.pagesY.length - 1 : e, n.currPageX = t, n.currPageY = e, s = n.pagesX[t], o = n.pagesY[e]) : (s = -n.wrapperW * t, o = -n.wrapperH * e, s < n.maxScrollX && (s = n.maxScrollX), o < n.maxScrollY && (o = n.maxScrollY)), n.scrollTo(s, o, i || 400)
            },
            disable: function () {
                this.enabled = !1, this._unbind(d), this._unbind(f), this._unbind(m)
            },
            enable: function () {
                this.enabled = !0
            },
            stop: function () {
                this.options.useTransition ? this._unbind("webkitTransitionEnd") : h(this.aniTime), this.steps = [], this.moved = !1, this.animating = !1
            },
            zoom: function (t, i, n, s) {
                var o = this,
                    r = n / o.scale;
                o.options.useTransform && (o.zoomed = !0, s = void 0 === s ? 200 : s, t = t - o.wrapperOffsetLeft - o.x, i = i - o.wrapperOffsetTop - o.y, o.x = t - t * r + o.x, o.y = i - i * r + o.y, o.scale = n, o.refresh(), o.x = o.x > 0 ? 0 : o.x < o.maxScrollX ? o.maxScrollX : o.x, o.y = o.y > o.minScrollY ? o.minScrollY : o.y < o.maxScrollY ? o.maxScrollY : o.y, o.scroller.style[e + "TransitionDuration"] = s + "ms", o.scroller.style[e + "Transform"] = v + o.x + "px," + o.y + "px" + y + " scale(" + n + ")", o.zoomed = !1)
            },
            isReady: function () {
                return !this.moved && !this.zoomed && !this.animating
            }
        }, "undefined" != typeof exports ? exports.iScroll = _ : window.iScroll = _
    }(),
    function ($) {
        "use strict";
        var t = $(window),
            e = "scrollpanel",
            i = {
                prefix: "sp-",
                onScroll: null
            },
            n = function (t, e) {
                var n = this;
                n.$el = $(t), n.settings = $.extend({}, i, e);
                var s = n.settings.prefix;
                n.scrollCallback = n.settings.onScroll, n.mouseOffsetY = 0, n.updateId = 0, n.scrollProxy = $.proxy(n.scroll, n), n.$el.css("position") && "static" !== n.$el.css("position") || n.$el.css("position", "relative"), n.$scrollbar = $('<div class="' + s + 'scrollbar" />'), n.$thumb = $('<div class="' + s + 'thumb" />')
                    .appendTo(n.$scrollbar), n.$el.addClass(s + "host")
                    .wrapInner('<div class="' + s + 'viewport"><div class="' + s + 'container" /></div>')
                    .append(n.$scrollbar), n.$viewport = n.$el.find("> ." + s + "viewport"), n.$container = n.$viewport.find("> ." + s + "container"), n.$el.on("mousewheel", function (t, e, i, s) {
                        var o = n.$viewport.scrollTop() - 50 * s;
                        n.$viewport.scrollTop(o), n.update(), t.preventDefault(), t.stopPropagation()
                    })
                    .on("scroll", function () {
                        n.update()
                    }), n.$viewport.css({
                        paddingRight: n.$scrollbar.outerWidth(!0),
                        height: n.$el.height(),
                        overflow: "hidden"
                    }), n.$container.css({
                        overflow: "hidden"
                    }), n.$scrollbar.css({
                        position: "absolute",
                        top: 0,
                        right: 0,
                        overflow: "hidden"
                    })
                    .on("mousedown", function (t) {
                        n.mouseOffsetY = n.$thumb.outerHeight() / 2, n.onMousedown(t)
                    })
                    .each(function () {
                        n.onselectstart = function () {
                            return !1
                        }
                    }), n.$thumb.css({
                        position: "absolute",
                        left: 0,
                        width: "100%"
                    })
                    .on("mousedown", function (t) {
                        n.mouseOffsetY = t.pageY - n.$thumb.offset()
                            .top, n.onMousedown(t)
                    }), n.update()
            };
        $.extend(n.prototype, {
            update: function (t) {
                var e = this;
                e.updateId && !t ? (clearInterval(e.updateId), e.updateId = 0) : !e.updateId && t && (e.updateId = setInterval(function () {
                    e.update(!0)
                }, 50)), e.$viewport.css("height", e.$el.height());
                var i = e.$el.height(),
                    n = e.$container.outerHeight(),
                    s = e.$viewport.scrollTop(),
                    o = s / n,
                    r = Math.min(i / n, 1),
                    a = e.$scrollbar.height();
                1 > r ? (e.$scrollbar.css({
                        height: e.$el.innerHeight() + a - e.$scrollbar.outerHeight(!0)
                    })
                    .fadeIn(50), e.$thumb.css({
                        top: a * o,
                        height: a * r
                    })) : e.$scrollbar.fadeOut(50)
            },
            scroll: function (t) {
                var e = this,
                    i = (t.pageY - e.$scrollbar.offset()
                        .top - e.mouseOffsetY) / e.$scrollbar.height(),
                    n = e.$container.outerHeight() * i;
                e.$viewport.scrollTop(n), e.update(), t.preventDefault(), t.stopPropagation()
            },
            scrollToTop: function () {
                var t = this;
                t.$viewport.scrollTop(0), t.update()
            },
            onMousedown: function (e) {
                var i = this;
                i.scroll(e), i.$scrollbar.addClass("active"), t.on("mousemove", i.scrollProxy)
                    .one("mouseup", function (e) {
                        i.$scrollbar.removeClass("active"), t.off("mousemove", i.scrollProxy), i.scroll(e)
                    })
            }
        }), $.fn[e] = function (t, i) {
            return this.each(function () {
                var s = $(this),
                    o = s.data(e);
                o || (o = new n(this, t), o.update(), s.data(e, o)), "update" === t && o.update(i)
            })
        }
    }(jQuery),
    function ($) {
        function t(t) {
            var e = t || window.event,
                i = [].slice.call(arguments, 1),
                n = 0,
                s = !0,
                o = 0,
                r = 0;
            return t = $.event.fix(e), t.type = "mousewheel", e.wheelDelta && (n = e.wheelDelta / 120), e.detail && (n = -e.detail / 3), r = n, void 0 !== e.axis && e.axis === e.HORIZONTAL_AXIS && (r = 0, o = -1 * n), void 0 !== e.wheelDeltaY && (r = e.wheelDeltaY / 120), void 0 !== e.wheelDeltaX && (o = -1 * e.wheelDeltaX / 120), i.unshift(t, n, o, r), ($.event.dispatch || $.event.handle)
                .apply(this, i)
        }
        var e = ["DOMMouseScroll", "mousewheel"];
        if ($.event.fixHooks)
            for (var i = e.length; i;) $.event.fixHooks[e[--i]] = $.event.mouseHooks;
        $.event.special.mousewheel = {
            setup: function () {
                if (this.addEventListener)
                    for (var i = e.length; i;) this.addEventListener(e[--i], t, !1);
                else this.onmousewheel = t
            },
            teardown: function () {
                if (this.removeEventListener)
                    for (var i = e.length; i;) this.removeEventListener(e[--i], t, !1);
                else this.onmousewheel = null
            }
        }, $.fn.extend({
            mousewheel: function (t) {
                return t ? this.bind("mousewheel", t) : this.trigger("mousewheel")
            },
            unmousewheel: function (t) {
                return this.unbind("mousewheel", t)
            }
        })
    }(jQuery), jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
        def: "easeOutQuad",
        swing: function (t, e, i, n, s) {
            return jQuery.easing[jQuery.easing.def](t, e, i, n, s)
        },
        easeInQuad: function (t, e, i, n, s) {
            return n * (e /= s) * e + i
        },
        easeOutQuad: function (t, e, i, n, s) {
            return -n * (e /= s) * (e - 2) + i
        },
        easeInOutQuad: function (t, e, i, n, s) {
            return (e /= s / 2) < 1 ? n / 2 * e * e + i : -n / 2 * (--e * (e - 2) - 1) + i
        },
        easeInCubic: function (t, e, i, n, s) {
            return n * (e /= s) * e * e + i
        },
        easeOutCubic: function (t, e, i, n, s) {
            return n * ((e = e / s - 1) * e * e + 1) + i
        },
        easeInOutCubic: function (t, e, i, n, s) {
            return (e /= s / 2) < 1 ? n / 2 * e * e * e + i : n / 2 * ((e -= 2) * e * e + 2) + i
        },
        easeInQuart: function (t, e, i, n, s) {
            return n * (e /= s) * e * e * e + i
        },
        easeOutQuart: function (t, e, i, n, s) {
            return -n * ((e = e / s - 1) * e * e * e - 1) + i
        },
        easeInOutQuart: function (t, e, i, n, s) {
            return (e /= s / 2) < 1 ? n / 2 * e * e * e * e + i : -n / 2 * ((e -= 2) * e * e * e - 2) + i
        },
        easeInQuint: function (t, e, i, n, s) {
            return n * (e /= s) * e * e * e * e + i
        },
        easeOutQuint: function (t, e, i, n, s) {
            return n * ((e = e / s - 1) * e * e * e * e + 1) + i
        },
        easeInOutQuint: function (t, e, i, n, s) {
            return (e /= s / 2) < 1 ? n / 2 * e * e * e * e * e + i : n / 2 * ((e -= 2) * e * e * e * e + 2) + i
        },
        easeInSine: function (t, e, i, n, s) {
            return -n * Math.cos(e / s * (Math.PI / 2)) + n + i
        },
        easeOutSine: function (t, e, i, n, s) {
            return n * Math.sin(e / s * (Math.PI / 2)) + i
        },
        easeInOutSine: function (t, e, i, n, s) {
            return -n / 2 * (Math.cos(Math.PI * e / s) - 1) + i
        },
        easeInExpo: function (t, e, i, n, s) {
            return 0 == e ? i : n * Math.pow(2, 10 * (e / s - 1)) + i
        },
        easeOutExpo: function (t, e, i, n, s) {
            return e == s ? i + n : n * (-Math.pow(2, -10 * e / s) + 1) + i
        },
        easeInOutExpo: function (t, e, i, n, s) {
            return 0 == e ? i : e == s ? i + n : (e /= s / 2) < 1 ? n / 2 * Math.pow(2, 10 * (e - 1)) + i : n / 2 * (-Math.pow(2, -10 * --e) + 2) + i
        },
        easeInCirc: function (t, e, i, n, s) {
            return -n * (Math.sqrt(1 - (e /= s) * e) - 1) + i
        },
        easeOutCirc: function (t, e, i, n, s) {
            return n * Math.sqrt(1 - (e = e / s - 1) * e) + i
        },
        easeInOutCirc: function (t, e, i, n, s) {
            return (e /= s / 2) < 1 ? -n / 2 * (Math.sqrt(1 - e * e) - 1) + i : n / 2 * (Math.sqrt(1 - (e -= 2) * e) + 1) + i
        },
        easeInElastic: function (t, e, i, n, s) {
            var o = 1.70158,
                r = 0,
                a = n;
            if (0 == e) return i;
            if (1 == (e /= s)) return i + n;
            if (r || (r = .3 * s), a < Math.abs(n)) {
                a = n;
                var o = r / 4
            } else var o = r / (2 * Math.PI) * Math.asin(n / a);
            return -(a * Math.pow(2, 10 * (e -= 1)) * Math.sin(2 * (e * s - o) * Math.PI / r)) + i
        },
        easeOutElastic: function (t, e, i, n, s) {
            var o = 1.70158,
                r = 0,
                a = n;
            if (0 == e) return i;
            if (1 == (e /= s)) return i + n;
            if (r || (r = .3 * s), a < Math.abs(n)) {
                a = n;
                var o = r / 4
            } else var o = r / (2 * Math.PI) * Math.asin(n / a);
            return a * Math.pow(2, -10 * e) * Math.sin(2 * (e * s - o) * Math.PI / r) + n + i
        },
        easeInOutElastic: function (t, e, i, n, s) {
            var o = 1.70158,
                r = 0,
                a = n;
            if (0 == e) return i;
            if (2 == (e /= s / 2)) return i + n;
            if (r || (r = .3 * s * 1.5), a < Math.abs(n)) {
                a = n;
                var o = r / 4
            } else var o = r / (2 * Math.PI) * Math.asin(n / a);
            return 1 > e ? -.5 * a * Math.pow(2, 10 * (e -= 1)) * Math.sin(2 * (e * s - o) * Math.PI / r) + i : a * Math.pow(2, -10 * (e -= 1)) * Math.sin(2 * (e * s - o) * Math.PI / r) * .5 + n + i
        },
        easeInBack: function (t, e, i, n, s, o) {
            return void 0 == o && (o = 1.70158), n * (e /= s) * e * ((o + 1) * e - o) + i
        },
        easeOutBack: function (t, e, i, n, s, o) {
            return void 0 == o && (o = 1.70158), n * ((e = e / s - 1) * e * ((o + 1) * e + o) + 1) + i
        },
        easeInOutBack: function (t, e, i, n, s, o) {
            return void 0 == o && (o = 1.70158), (e /= s / 2) < 1 ? n / 2 * e * e * (((o *= 1.525) + 1) * e - o) + i : n / 2 * ((e -= 2) * e * (((o *= 1.525) + 1) * e + o) + 2) + i
        },
        easeInBounce: function (t, e, i, n, s) {
            return n - jQuery.easing.easeOutBounce(t, s - e, 0, n, s) + i
        },
        easeOutBounce: function (t, e, i, n, s) {
            return (e /= s) < 1 / 2.75 ? 7.5625 * n * e * e + i : 2 / 2.75 > e ? n * (7.5625 * (e -= 1.5 / 2.75) * e + .75) + i : 2.5 / 2.75 > e ? n * (7.5625 * (e -= 2.25 / 2.75) * e + .9375) + i : n * (7.5625 * (e -= 2.625 / 2.75) * e + .984375) + i
        },
        easeInOutBounce: function (t, e, i, n, s) {
            return s / 2 > e ? .5 * jQuery.easing.easeInBounce(t, 2 * e, 0, n, s) + i : .5 * jQuery.easing.easeOutBounce(t, 2 * e - s, 0, n, s) + .5 * n + i
        }
    }),
    function (t) {
        function e(e, i) {
            var n = navigator.userAgent.toLowerCase(),
                s = t.browser,
                o = this,
                r = s.webkit;
            n.indexOf("android"), o.isIPAD = n.match(/(ipad)/);
            for (var a = document.createElement("div")
                    .style, l = ["webkit", "Moz", "ms", "O"], u = "", h = 0, c, n = 0; n < l.length; n++) c = l[n], !u && c + "Transform" in a && (u = c), c = c.toLowerCase(), window.requestAnimationFrame || (window.requestAnimationFrame = window[c + "RequestAnimationFrame"], window.cancelAnimationFrame = window[c + "CancelAnimationFrame"] || window[c + "CancelRequestAnimationFrame"]);
            window.requestAnimationFrame || (window.requestAnimationFrame = function (t) {
                    var e = (new Date)
                        .getTime(),
                        i = Math.max(0, 16 - (e - h)),
                        n = window.setTimeout(function () {
                            t(e + i)
                        }, i);
                    return h = e + i, n
                }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function (t) {
                    clearTimeout(t)
                }), o.slider = t(e), o.ev = t({}), o._a = t(document), o.st = t.extend({}, t.fn.royalSlider.defaults, i), o._b = o.st.transitionSpeed, !o.st.allowCSS3 || r && !o.st.allowCSS3OnWebkit || (n = u + (u ? "T" : "t"), o._c = n + "ransform" in a && n + "ransition" in a, o._c && (o._d = u + (u ? "P" : "p") + "erspective" in a)), u = u.toLowerCase(), o._e = "-" + u + "-", o._f = "vertical" === o.st.slidesOrientation ? !1 : !0, o._g = o._f ? "left" : "top", o._h = o._f ? "width" : "height", o._i = -1, o._j = "fade" === o.st.transitionType ? !1 : !0, o._j || (o.st.sliderDrag = !1, o._k = 10), o._l = 0, o._m = 0, t.each(t.rsModules, function (t, e) {
                    e.call(o)
                }), o.slides = [], o._n = 0, (o.st.slides ? t(o.st.slides) : o.slider.children()
                    .detach())
                .each(function () {
                    o._o(this, !0)
                }), o.st.randomizeSlides && o.slides.sort(function () {
                    return .5 - Math.random()
                }), o.numSlides = o.slides.length, o._p(), o.st.startSlideId > o.numSlides - 1 && (o.st.startSlideId = o.numSlides - 1), o.staticSlideId = o.currSlideId = o._q = o.st.startSlideId, o.currSlide = o.slides[o.currSlideId], o._r = 0, o.slider.addClass((o._f ? "rsHor" : "rsVer") + (o._j ? "" : " rsFade")), a = '<div class="rsOverflow"><div class="rsContainer">', o.slidesSpacing = o.st.slidesSpacing, o._s = (o._f ? o.slider.width() : o.slider.height()) + o.st.slidesSpacing, o._t = Boolean(0 < o._u), 1 >= o.numSlides && (o._v = !1), o._w = o._v && o._j ? 2 === o.numSlides ? 1 : 2 : 0, o._x = 6 > o.numSlides ? o.numSlides : 6, o._y = 0, o._z = 0, o.slidesJQ = [];
            for (n = 0; n < o.numSlides; n++) o.slidesJQ.push(t('<div style="' + (o._j ? "" : n !== o.currSlideId ? "z-index: 0; display:none; opacity: 0; position: absolute;  left: 0; top: 0;" : "z-index: 0;  position: absolute; left: 0; top: 0;") + '" class="rsSlide "></div>'));
            o.slider.html(a + "</div></div>"), o._a1 = o.slider.children(".rsOverflow"), o._b1 = o._a1.children(".rsContainer"), o._c1 = t('<div class="rsPreloader"></div>'), n = o._b1.children(".rsSlide"), o._d1 = o.slidesJQ[o.currSlideId], o._e1 = 0, "ontouchstart" in window || "createTouch" in document ? (o.hasTouch = !0, o._f1 = "touchstart.rs", o._g1 = "touchmove.rs", o._h1 = "touchend.rs", o._i1 = "touchcancel.rs", o._j1 = .5) : (o.hasTouch = !1, o._j1 = .2, o.st.sliderDrag && (s.msie || s.opera ? o._k1 = o._l1 = "move" : s.mozilla ? (o._k1 = "-moz-grab", o._l1 = "-moz-grabbing") : r && -1 != navigator.platform.indexOf("Mac") && (o._k1 = "-webkit-grab", o._l1 = "-webkit-grabbing"), o._m1()), o._f1 = "mousedown.rs", o._g1 = "mousemove.rs", o._h1 = "mouseup.rs", o._i1 = "mouseup.rs"), o._c ? (o._n1 = "transition-property", o._o1 = "transition-duration", o._p1 = "transition-timing-function", o._q1 = o._r1 = o._e + "transform", o._d ? (r && o.slider.addClass("rsWebkit3d"), o._s1 = "translate3d(", o._t1 = "px, ", o._u1 = "px, 0px)") : (o._s1 = "translate(", o._t1 = "px, ", o._u1 = "px)"), o._j ? o._b1[o._e + o._n1] = o._e + "transform" : (s = {}, s[o._e + o._n1] = "opacity", s[o._e + o._o1] = o.st.transitionSpeed + "ms", s[o._e + o._p1] = o.st.css3easeInOut, n.css(s))) : (o._r1 = "left", o._q1 = "top");
            var p;
            t(window)
                .on("resize.rs", function () {
                    p && clearTimeout(p), p = setTimeout(function () {
                        o.updateSliderSize()
                    }, 50)
                }), o.ev.trigger("rsAfterPropsSetup"), o.updateSliderSize(), o.st.keyboardNavEnabled && o._v1(), o.st.arrowsNavHideOnTouch && o.hasTouch && (o.st.arrowsNav = !1), o.st.arrowsNav && (s = o.st.controlsInside ? o._a1 : o.slider, t('<div class="rsArrow rsArrowLeft"><div class="rsArrowIcn"></div></div><div class="rsArrow rsArrowRight"><div class="rsArrowIcn"></div></div>')
                    .appendTo(s), o._w1 = s.children(".rsArrowLeft")
                    .click(function (t) {
                        t.preventDefault(), o.prev()
                    }), o._x1 = s.children(".rsArrowRight")
                    .click(function (t) {
                        t.preventDefault(), o.next()
                    }), o.st.arrowsNavAutoHide && !o.hasTouch && (o._w1.addClass("rsHidden"), o._x1.addClass("rsHidden"), s.one("mousemove.arrowshover", function () {
                        o._w1.removeClass("rsHidden"), o._x1.removeClass("rsHidden")
                    }), s.hover(function () {
                        o._y1 || (o._w1.removeClass("rsHidden"), o._x1.removeClass("rsHidden"))
                    }, function () {
                        o._y1 || (o._w1.addClass("rsHidden"), o._x1.addClass("rsHidden"))
                    })), o.ev.on("rsOnUpdateNav", function () {
                        o._z1()
                    }), o._z1()), o._a2 = !o.hasTouch && o.st.sliderDrag || o.hasTouch && o.st.sliderTouch, o._a2 ? o._b1.on(o._f1, function (t) {
                    o._b2(t)
                }) : o.dragSuccess = !1;
            var d = ["rsPlayBtnIcon", "rsPlayBtn", "rsCloseVideoBtn", "rsCloseVideoIcn"];
            o._b1.click(function (e) {
                if (!o.dragSuccess) {
                    var i = t(e.target)
                        .attr("class");
                    if (-1 !== t.inArray(i, d) && o.toggleVideo()) return !1;
                    if (o.st.navigateByClick && !o._c2) {
                        if (t(e.target)
                            .closest(".rsNoDrag", o._d1)
                            .length) return !0;
                        o._d2(e)
                    }
                    o.ev.trigger("rsSlideClick")
                }
            }), o.ev.trigger("rsAfterInit")
        }
        t.rsModules || (t.rsModules = {}), e.prototype = {
            _d2: function (t) {
                0 < t[this._f ? "pageX" : "pageY"] - this._e2 ? this.next() : this.prev()
            },
            _p: function () {
                var t;
                t = this.st.numImagesToPreload, (this._v = this.st.loop) && (2 === this.numSlides ? (this._v = !1, this.st.loopRewind = !0) : 2 > this.numSlides && (this.st.loopRewind = this._v = !1)), this._v && t > 0 && (4 >= this.numSlides ? t = 1 : this.st.numImagesToPreload > (this.numSlides - 1) / 2 && (t = Math.floor((this.numSlides - 1) / 2))), this._u = t
            },
            _o: function (e, i) {
                function n(t, e) {
                    o.image = t.attr(e ? e : "src"), o.caption = e ? t.contents() : t.attr("alt"), o.videoURL = t.attr("data-rsVideo")
                }
                var s, o = {};
                return this._f2 = e = t(e), this.ev.trigger("rsBeforeParseNode", [e, o]), o.stopParsing ? void 0 : (e = this._f2, o.id = this._n, o.contentAdded = !1, this._n++, o.hasCover || (e.hasClass("rsImg") ? (tempEl = e, s = !0) : (tempEl = e.find(".rsImg"), tempEl.length && (s = !0)), s ? (o.bigImage = tempEl.attr("data-rsBigImg"), tempEl.is("a") ? n(tempEl, "href") : tempEl.is("img") && n(tempEl)) : e.is("img") && (e.addClass("rsImg"), n(e))), tempEl = e.find(".rsCaption"), tempEl.length && (o.caption = tempEl.remove()), o.image || (o.isLoaded = !0, o.isRendered = !1, o.isLoading = !1), o.content = e, this.ev.trigger("rsAfterParseNode", [e, o]), i && this.slides.push(o), o)
            },
            _v1: function () {
                function t(t) {
                    37 === t ? e.prev() : 39 === t && e.next()
                }
                var e = this,
                    i, n;
                e._a.on("keydown.rskb", function (s) {
                        e._g2 || (n = s.keyCode, 37 !== n && 39 !== n || i) || (t(n), i = setInterval(function () {
                            t(n)
                        }, 700))
                    })
                    .on("keyup.rskb", function () {
                        i && (clearInterval(i), i = null)
                    })
            },
            goTo: function (t, e) {
                t !== this.currSlideId && this._h2(t, this.st.transitionSpeed, !0, !e)
            },
            destroy: function (t) {
                var e = this;
                e.ev.trigger("rsBeforeDestroy"), e._a.off("keydown.rskb keyup.rskb " + e._g1 + " " + e._h1), e._b1.on(e._f1, function (t) {
                    e._b2(t)
                }), e.slider.data("royalSlider", ""), t && e.slider.remove()
            },
            _i2: function (e, i) {
                function n(i, n, r) {
                    i.isAdded ? (s(n, i), o(n, i)) : (r || (r = a.slidesJQ[n]), i.holder ? r = i.holder : (r = a.slidesJQ[n] = t(r), i.holder = r), i.appendOnLoaded = !1, o(n, i, r), s(n, i), a._k2(i, r, e), appended = i.isAdded = !0)
                }

                function s(t, i) {
                    i.contentAdded || (a.setItemHtml(i, e), e || (i.contentAdded = !0))
                }

                function o(t, e, i) {
                    a._j && (i || (i = a.slidesJQ[t]), i.css(a._g, (t + a._z + d) * a._s))
                }

                function r(t) {
                    if (h) {
                        if (t > c - 1) return r(t - c);
                        if (0 > t) return r(c + t)
                    }
                    return t
                }
                var a = this,
                    l, u, h = a._v,
                    c = a.numSlides;
                if (!isNaN(i)) return r(i);
                var p = a.currSlideId,
                    d, f = e ? Math.abs(a._j2 - a.currSlideId) >= a.numSlides - 1 ? 0 : 1 : a._u,
                    m = Math.min(2, f),
                    g = !1,
                    v = !1,
                    y;
                for (u = p; p + 1 + m > u; u++)
                    if (y = r(u), (l = a.slides[y]) && (!l.isAdded || !l.positionSet)) {
                        g = !0;
                        break
                    }
                for (u = p - 1; u > p - 1 - m; u--)
                    if (y = r(u), (l = a.slides[y]) && (!l.isAdded || !l.positionSet)) {
                        v = !0;
                        break
                    }
                if (g)
                    for (u = p; p + f + 1 > u; u++) y = r(u), d = Math.floor((a._q - (p - u)) / a.numSlides) * a.numSlides, (l = a.slides[y]) && n(l, y);
                if (v)
                    for (u = p - 1; u > p - 1 - f; u--) y = r(u), d = Math.floor((a._q - (p - u)) / c) * c, (l = a.slides[y]) && n(l, y);
                if (!e)
                    for (m = r(p - f), p = r(p + f), f = m > p ? 0 : m, u = 0; c > u; u++) m > p && u > m - 1 || !(f > u || u > p) || (l = a.slides[u]) && l.holder && (l.holder.detach(), l.isAdded = !1)
            },
            setItemHtml: function (e, i) {
                function n() {
                    o.isWaiting = !0, e.holder.html(s._c1.clone()), o.slideId = -99
                }
                var s = this,
                    o = e.holder,
                    r = function (e) {
                        var o = e.sizeType;
                        return function (r) {
                            var a = e.content,
                                l = e.holder;
                            if (r) {
                                var u = r.currentTarget;
                                if (t(u)
                                    .off("load error"), "error" === r.type) return e.isLoaded = !0, e.image = "", e.isLoading = !1, a.addClass("rsSlideError"), l.html(a), e.holder.trigger("rsAfterContentSet"), void s.ev.trigger("rsAfterContentSet", e)
                            }
                            if (e.image) {
                                if (e.bigImage && e.sizeType !== o) return void("med" === o ? e.isMedLoading = !1 : "big" === o ? e.isBigLoading = !1 : e.isMedLoading = e.isLoading = !1);
                                if (e.isLoaded) {
                                    if (!e.isRendered && i) return void n();
                                    s._l2(e)
                                } else {
                                    var h;
                                    a.hasClass("rsImg") ? (h = !0, r = a) : (h = !1, r = a.find(".rsImg")), r.length && r.is("a") && (h ? a = t('<img class="rsImg" src="' + e.image + '" />') : a.find(".rsImg")
                                        .replaceWith('<img class="rsImg" src="' + e.image + '" />'), e.content = a), e.iW = u.width, 0 < e.iW && (e.iH = u.height, e.isLoaded = !0, e.isLoading = !1, s._l2(e))
                                }
                            } else {
                                if (!s._t && i && !e.isRendered) return e.isRendered = !0, void n();
                                e.isLoaded = !0, e.isLoading = !1
                            }
                            u = e.id - s._l, i || e.appendOnLoaded || !s.st.fadeinLoadedSlide || 0 !== u && (!s._m2 && !s._g2 || -1 !== u && 1 !== u) ? l.html(a) : (a.css(s._e + "transition", "opacity 400ms ease-in-out")
                                    .css({
                                        visibility: "visible",
                                        opacity: 0
                                    }), l.html(a), setTimeout(function () {
                                        a.css("opacity", 1)
                                    }, 6)), e.isRendered = !0, l.find("a")
                                .off("click.rs")
                                .on("click.rs", function () {
                                    return s.dragSuccess ? !1 : (s._c2 = !0, void setTimeout(function () {
                                        s._c2 = !1
                                    }, 3))
                                }), e.holder.trigger("rsAfterContentSet"), s.ev.trigger("rsAfterContentSet", e), e.appendOnLoaded && s._k2(e, a, i)
                        }
                    };
                if (e.isLoaded) r(e)();
                else if (i) n();
                else if (e.image)
                    if (e.isLoading) {
                        var a = 1,
                            l = function () {
                                if (e.isLoading)
                                    if (e.isLoaded) r(e)();
                                    else {
                                        if (0 === a % 50) {
                                            var t = e.imageLoader;
                                            if (t.complete && void 0 !== t.naturalWidth && 0 !== t.naturalWidth && 0 !== t.naturalHeight) return void r(e)()
                                        }
                                        a > 300 || (setTimeout(l, 400), a++)
                                    }
                            };
                        l(e.sizeType)
                    } else {
                        var u = t("<img/>"),
                            h = e.image;
                        i ? n() : e.isLoading || (h || (h = u.attr("src"), u = t("<img/>")), e.holder.html(s._c1.clone()), e.isLoading = !0, e.imageLoader = u, u.one("load error", r(e))
                            .attr("src", h))
                    } else r(e)()
            },
            _k2: function (t, e, i) {
                var n = t.holder,
                    s = t.id - this._l;
                !this._j || i || !this.st.fadeinLoadedSlide || 0 !== s && (!this._m2 && !this._g2 || -1 !== s && 1 !== s) ? this._b1.append(n) : (e = t.content, e.css(this._e + "transition", "opacity 400ms ease-in-out")
                    .css({
                        visibility: "visible",
                        opacity: 0
                    }), this._b1.append(n), setTimeout(function () {
                        e.css("opacity", 1)
                    }, 6)), t.appendOnLoaded = !1
            },
            _b2: function (e, i) {
                var n = this,
                    s;
                if (n.dragSuccess = !1, t(e.target)
                    .closest(".rsNoDrag", n._d1)
                    .length) return !0;
                if (i || n._m2 && n._n2(), n._g2) n.hasTouch && (n._o2 = !0);
                else {
                    if (n.hasTouch && (n._o2 = !1), n._p2(), n.hasTouch) {
                        var o = e.originalEvent.touches;
                        if (!(o && 0 < o.length)) return;
                        s = o[0], 1 < o.length && (n._o2 = !0)
                    } else s = e, e.preventDefault();
                    n._g2 = !0, n._a.on(n._g1, function (t) {
                            n._q2(t, i)
                        })
                        .on(n._h1, function (t) {
                            n._r2(t, i)
                        }), n._s2 = "", n._t2 = !1, n._u2 = s.pageX, n._v2 = s.pageY, n._w2 = n._r = (i ? n._x2 : n._f) ? s.pageX : s.pageY, n._y2 = 0, n._z2 = 0, n._a3 = i ? n._b3 : n._m, n._c3 = (new Date)
                        .getTime(), n.hasTouch && n._a1.on(n._i1, function (t) {
                            n._r2(t, i)
                        })
                }
            },
            _d3: function (t, e) {
                if (this._e3) {
                    var i = this._f3,
                        n = t.pageX - this._u2,
                        s = t.pageY - this._v2,
                        o = this._a3 + n,
                        r = this._a3 + s,
                        a = e ? this._x2 : this._f,
                        o = a ? o : r,
                        l = this._s2;
                    this._t2 = !0, this._u2 = t.pageX, this._v2 = t.pageY, r = a ? this._u2 : this._v2, "x" === l && 0 !== n ? this._y2 = n > 0 ? 1 : -1 : "y" === l && 0 !== s && (this._z2 = s > 0 ? 1 : -1), n = a ? n : s, e ? o > this._g3 ? o = this._a3 + n * this._j1 : o < this._h3 && (o = this._a3 + n * this._j1) : this._v || (0 >= this.currSlideId && 0 < r - this._w2 && (o = this._a3 + n * this._j1), this.currSlideId >= this.numSlides - 1 && 0 > r - this._w2 && (o = this._a3 + n * this._j1)), this._a3 = o, 200 < i - this._c3 && (this._c3 = i, this._r = r), e ? this._j3(this._a3) : this._j && this._i3(this._a3)
                }
            },
            _q2: function (t, e) {
                var i = this;
                if (i.hasTouch) {
                    if (i._k3) return;
                    var n = t.originalEvent.touches;
                    if (!n) return;
                    if (1 < n.length) return;
                    point = n[0]
                } else point = t;
                if (i._t2 || (i._c && (e ? i._l3 : i._b1)
                        .css(i._e + i._o1, "0s"),
                        function o() {
                            i._g2 && (i._m3 = requestAnimationFrame(o), i._n3 && i._d3(i._n3, e))
                        }()), i._e3) t.preventDefault(), i._f3 = (new Date)
                    .getTime(), i._n3 = point;
                else {
                    var n = e ? i._x2 : i._f,
                        s = Math.abs(point.pageX - i._u2) - Math.abs(point.pageY - i._v2) - (n ? -7 : 7);
                    if (s > 7) {
                        if (n) t.preventDefault(), i._s2 = "x";
                        else if (i.hasTouch) return void i._o3();
                        i._e3 = !0
                    } else if (-7 > s) {
                        if (n) {
                            if (i.hasTouch) return void i._o3()
                        } else t.preventDefault(), i._s2 = "y";
                        i._e3 = !0
                    }
                }
            },
            _o3: function () {
                this._k3 = !0, this._t2 = this._g2 = !1, this._r2()
            },
            _r2: function (e, i) {
                function n(t) {
                    return 100 > t ? 100 : t > 500 ? 500 : t
                }

                function s(t, e) {
                    (o._j || i) && (l = (-o._q - o._z) * o._s, u = Math.abs(o._m - l), o._b = u / e, t && (o._b += 250), o._b = n(o._b), o._q3(l, !1))
                }
                var o = this,
                    r, a, l, u;
                if (o.ev.trigger("rsDragRelease"), o._n3 = null, o._g2 = !1, o._k3 = !1, o._e3 = !1, o._f3 = 0, cancelAnimationFrame(o._m3), o._t2 && (i ? o._j3(o._a3) : o._j && o._i3(o._a3)), o._a.off(o._g1)
                    .off(o._h1), o.hasTouch && o._a1.off(o._i1), o._m1(), !o._t2 && !o._o2 && i && o._p3) {
                    var h = t(e.target)
                        .closest(".rsNavItem");
                    h.length && o.goTo(h.index())
                } else if (a = i ? o._x2 : o._f, o._t2 && !("y" === o._s2 && a || "x" === o._s2 && !a)) {
                    o.dragSuccess = !0, o._s2 = "";
                    var c = o.st.minSlideOffset;
                    r = o.hasTouch ? e.originalEvent.changedTouches[0] : e;
                    var p = a ? r.pageX : r.pageY,
                        d = o._w2;
                    r = o._r;
                    var f = o.currSlideId,
                        m = o.numSlides,
                        g = a ? o._y2 : o._z2,
                        v = o._v;
                    if (Math.abs(p - d), r = p - r, a = (new Date)
                        .getTime() - o._c3, a = Math.abs(r) / a, 0 === g || 1 >= m) s(!0, a);
                    else {
                        if (!v && !i)
                            if (0 >= f) {
                                if (g > 0) return void s(!0, a)
                            } else if (f >= m - 1 && 0 > g) return void s(!0, a);
                        if (i) {
                            if (l = o._b3, l > o._g3) l = o._g3;
                            else if (l < o._h3) l = o._h3;
                            else {
                                if (c = a * a / .006, h = -o._b3, p = o._r3 - o._s3 + o._b3, r > 0 && c > h ? (h += o._s3 / (15 / (.003 * (c / a))), a = a * h / c, c = h) : 0 > r && c > p && (p += o._s3 / (15 / (.003 * (c / a))), a = a * p / c, c = p), h = Math.max(Math.round(a / .003), 50), l += c * (0 > r ? -1 : 1), l > o._g3) return void o._t3(l, h, !0, o._g3, 200);
                                if (l < o._h3) return void o._t3(l, h, !0, o._h3, 200)
                            }
                            o._t3(l, h, !0)
                        } else p > d + c ? 0 > g ? s(!1, a) : o._h2("prev", n(Math.abs(o._m - (-o._q - o._z + 1) * o._s) / a), !1, !0, !0) : d - c > p ? g > 0 ? s(!1, a) : o._h2("next", n(Math.abs(o._m - (-o._q - o._z - 1) * o._s) / a), !1, !0, !0) : s(!1, a)
                    }
                }
            },
            _i3: function (t) {
                t = this._m = t, this._c ? this._b1.css(this._r1, this._s1 + (this._f ? t + this._t1 + 0 : 0 + this._t1 + t) + this._u1) : this._b1.css(this._f ? this._r1 : this._q1, t)
            },
            updateSliderSize: function (t) {
                var e, i;
                if (this.st.beforeResize && this.st.beforeResize.call(this), this.st.autoScaleSlider) {
                    var n = this.st.autoScaleSliderWidth,
                        s = this.st.autoScaleSliderHeight;
                    this.st.autoScaleHeight ? (e = this.slider.width(), e != this.width && (this.slider.css("height", e * (s / n)), e = this.slider.width()), i = this.slider.height()) : (i = this.slider.height(), i != this.height && (this.slider.css("width", i * (n / s)), i = this.slider.height()), e = this.slider.width())
                } else e = this.slider.width(), i = this.slider.height();
                if (this._e2 = this.slider.offset(), this._e2 = this._e2[this._g], t || e != this.width || i != this.height) {
                    for (this.width = e, this.height = i, this._u3 = e, this._v3 = i, this.ev.trigger("rsBeforeSizeSet"), this._a1.css({
                            width: this._u3,
                            height: this._v3
                        }), this._s = (this._f ? this._u3 : this._v3) + this.st.slidesSpacing, this._w3 = this.st.imageScalePadding, e = 0; e < this.slides.length; e++) t = this.slides[e], t.positionSet = !1, t && t.image && t.isLoaded && (t.isRendered = !1, this._l2(t));
                    if (this._x3)
                        for (e = 0; e < this._x3.length; e++) t = this._x3[e], t.holder.css(this._g, (t.id + this._z) * this._s);
                    this._i2(), this._j && (this._c && this._b1.css(this._e + "transition-duration", "0s"), this._i3((-this._q - this._z) * this._s)), this.ev.trigger("rsOnUpdateNav"), this.st.afterResize && this.st.afterResize.call(this)
                }
            },
            setSlidesOrientation: function () {},
            appendSlide: function (t, e) {
                var i = this._o(t);
                (isNaN(e) || e > this.numSlides) && (e = this.numSlides), this.slides.splice(e, 0, i), this.slidesJQ.splice(e, 0, '<div style="' + (this._j ? "position: absolute;" : "z-index: 0; display:none; opacity: 0; position: absolute;  left: 0; top: 0;") + '" class="rsSlide"></div>'), e < this.currSlideId && this.currSlideId++, this.ev.trigger("rsOnAppendSlide", [i, e]), this._z3(e), e === this.currSlideId && this.ev.trigger("rsAfterSlideChange")
            },
            removeSlide: function (t) {
                var e = this.slides[t];
                e && (e.holder && e.holder.remove(), t < this.currSlideId && this.currSlideId++, this.slides.splice(t, 1), this.slidesJQ.splice(t, 1), this.ev.trigger("rsOnRemoveSlide", [t]), this._z3(t), t === this.currSlideId && this.ev.trigger("rsAfterSlideChange"))
            },
            _z3: function () {
                var t = this,
                    e = t.numSlides,
                    e = 0 >= t._q ? 0 : Math.floor(t._q / e);
                for (t.numSlides = t.slides.length, 0 === t.numSlides ? (t.currSlideId = t._z = t._q = 0, t.currSlide = t._a4 = null) : t._q = e * t.numSlides + t.currSlideId, e = 0; e < t.numSlides; e++) t.slides[e].id = e;
                t.currSlide = t.slides[t.currSlideId], t._d1 = t.slidesJQ[t.currSlideId], t.currSlideId >= t.numSlides ? t.goTo(t.numSlides - 1) : 0 > t.currSlideId && t.goTo(0), t._p(), t._j && t._v && t._b1.css(t._e + t._o1, "0ms"), t._b4 && clearTimeout(t._b4), t._b4 = setTimeout(function () {
                    t._j && t._i3((-t._q - t._z) * t._s), t._i2(), t._j || t._d1.css({
                        display: "block",
                        opacity: 1
                    })
                }, 14), t.ev.trigger("rsOnUpdateNav")
            },
            _m1: function () {
                !this.hasTouch && this._j && (this._k1 ? this._a1.css("cursor", this._k1) : (this._a1.removeClass("grabbing-cursor"), this._a1.addClass("grab-cursor")))
            },
            _p2: function () {
                !this.hasTouch && this._j && (this._l1 ? this._a1.css("cursor", this._l1) : (this._a1.removeClass("grab-cursor"), this._a1.addClass("grabbing-cursor")))
            },
            next: function (t) {
                this._h2("next", this.st.transitionSpeed, !0, !t)
            },
            prev: function (t) {
                this._h2("prev", this.st.transitionSpeed, !0, !t)
            },
            _h2: function (t, e, i, n, s) {
                var o = this,
                    r, a, l;
                if (o._d4 && o.stopVideo(), o.ev.trigger("rsBeforeMove", [t, n]), newItemId = "next" === t ? o.currSlideId + 1 : "prev" === t ? o.currSlideId - 1 : t = parseInt(t, 10), !o._v) {
                    if (0 > newItemId) return void o._e4("left", !n);
                    if (newItemId >= o.numSlides) return void o._e4("right", !n)
                }
                o._m2 && (o._n2(), i = !1), a = newItemId - o.currSlideId, l = o._j2 = o.currSlideId;
                var u = o.currSlideId + a,
                    n = o._q,
                    h;
                o._v ? (u = o._i2(!1, u), n += a) : n = u, o._l = u, o._a4 = o.slidesJQ[o.currSlideId], o._q = n, o.currSlideId = o._l, o.currSlide = o.slides[o.currSlideId], o._d1 = o.slidesJQ[o.currSlideId], u = Boolean(a > 0), a = Math.abs(a);
                var c = Math.floor(l / o._u),
                    p = Math.floor((l + (u ? 2 : -2)) / o._u),
                    c = (u ? Math.max(c, p) : Math.min(c, p)) * o._u + (u ? o._u - 1 : 0);
                if (c > o.numSlides - 1 ? c = o.numSlides - 1 : 0 > c && (c = 0), l = u ? c - l : l - c, l > o._u && (l = o._u), a > l + 2)
                    for (o._z += (a - (l + 2)) * (u ? -1 : 1), e *= 1.4, l = 0; l < o.numSlides; l++) o.slides[l].positionSet = !1;
                o._b = e, o._i2(!0), s || (h = !0), r = (-n - o._z) * o._s, h ? setTimeout(function () {
                    o._c4 = !1, o._q3(r, t, !1, i), o.ev.trigger("rsOnUpdateNav")
                }, 0) : (o._q3(r, t, !1, i), o.ev.trigger("rsOnUpdateNav"))
            },
            _z1: function () {
                this.st.arrowsNav && (1 >= this.numSlides ? (this._w1.css("display", "none"), this._x1.css("display", "none")) : (this._w1.css("display", "block"), this._x1.css("display", "block"), !this._v && !this.st.loopRewind && (0 === this.currSlideId ? this._w1.addClass("rsArrowDisabled") : this._w1.removeClass("rsArrowDisabled"), this.currSlideId === this.numSlides - 1 ? this._x1.addClass("rsArrowDisabled") : this._x1.removeClass("rsArrowDisabled"))))
            },
            _q3: function (e, i, n, s, o) {
                function r() {
                    var t;
                    l && (t = l.data("rsTimeout")) && (l !== u && l.css({
                        opacity: 0,
                        display: "none",
                        zIndex: 0
                    }), clearTimeout(t), l.data("rsTimeout", "")), (t = u.data("rsTimeout")) && (clearTimeout(t), u.data("rsTimeout", ""))
                }
                var a = this,
                    l, u, h = {};
                isNaN(a._b) && (a._b = 400), a._m = a._a3 = e, a.ev.trigger("rsBeforeAnimStart"), a.st.beforeSlideChange && a.st.beforeSlideChange.call(a), a._c ? a._j ? (h[a._e + a._o1] = a._b + "ms", h[a._e + a._p1] = s ? t.rsCSS3Easing[a.st.easeInOut] : t.rsCSS3Easing[a.st.easeOut], a._b1.css(h), setTimeout(function () {
                    a._i3(e)
                }, a.hasTouch ? 5 : 0)) : (a._b = a.st.transitionSpeed, l = a._a4, u = a._d1, u.data("rsTimeout") && u.css("opacity", 0), r(), l && l.data("rsTimeout", setTimeout(function () {
                    h[a._e + a._o1] = "0ms", h.zIndex = 0, h.display = "none", l.data("rsTimeout", ""), l.css(h), setTimeout(function () {
                        l.css("opacity", 0)
                    }, 16)
                }, a._b + 60)), h.display = "block", h.zIndex = a._k, h.opacity = 0, h[a._e + a._o1] = "0ms", h[a._e + a._p1] = t.rsCSS3Easing[a.st.easeInOut], u.css(h), u.data("rsTimeout", setTimeout(function () {
                    u.css(a._e + a._o1, a._b + "ms"), u.data("rsTimeout", setTimeout(function () {
                        u.css("opacity", 1), u.data("rsTimeout", "")
                    }, 20))
                }, 20))) : a._j ? (h[a._f ? a._r1 : a._q1] = e + "px", a._b1.animate(h, a._b, s ? a.st.easeInOut : a.st.easeOut)) : (l = a._a4, u = a._d1, u.stop(!0, !0)
                    .css({
                        opacity: 0,
                        display: "block",
                        zIndex: a._k
                    }), a._b = a.st.transitionSpeed, u.animate({
                        opacity: 1
                    }, a._b, a.st.easeInOut), r(), l && l.data("rsTimeout", setTimeout(function () {
                        l.stop(!0, !0)
                            .css({
                                opacity: 0,
                                display: "none",
                                zIndex: 0
                            })
                    }, a._b + 60))), a._m2 = !0, a.loadingTimeout && clearTimeout(a.loadingTimeout), a.loadingTimeout = o ? setTimeout(function () {
                    a.loadingTimeout = null, o.call()
                }, a._b + 60) : setTimeout(function () {
                    a.loadingTimeout = null, a._f4(i)
                }, a._b + 60)
            },
            _n2: function () {
                if (this._m2 = !1, clearTimeout(this.loadingTimeout), this._j)
                    if (this._c) {
                        var t = this._m,
                            e = this._a3 = this._g4();
                        this._b1.css(this._e + this._o1, "0ms"), t !== e && this._i3(e)
                    } else this._b1.stop(!0), this._m = parseInt(this._b1.css(this._r1), 10);
                else 20 < this._k ? this._k = 10 : this._k++
            },
            _g4: function () {
                var t = window.getComputedStyle(this._b1.get(0), null)
                    .getPropertyValue(this._e + "transform")
                    .replace(/^matrix\(/i, "")
                    .split(/, |\)$/g);
                return parseInt(t[this._f ? 4 : 5], 10)
            },
            _h4: function (t, e) {
                return this._c ? this._s1 + (e ? t + this._t1 + 0 : 0 + this._t1 + t) + this._u1 : t
            },
            _f4: function () {
                this._j || (this._d1.css("z-index", 0), this._k = 10), this._m2 = !1, this.staticSlideId = this.currSlideId, this._i2(), this._i4 = !1, this.ev.trigger("rsAfterSlideChange"), this.st.afterSlideChange && this.st.afterSlideChange.call(this)
            },
            _e4: function (t, e) {
                var i = this,
                    n = (-i._q - i._z) * i._s;
                if (moveDist = 30, 0 !== i.numSlides)
                    if (i.st.loopRewind) "left" === t ? i.goTo(i.numSlides - 1, e) : i.goTo(0, e);
                    else if (!i._m2 && i._j && 0 !== moveDist) {
                    i._b = 200;
                    var s = function () {
                        i._m2 = !1
                    };
                    i._q3(n + ("left" === t ? moveDist : -moveDist), "", !1, !0, function () {
                        i._m2 = !1, i._q3(n, "", !1, !0, s)
                    })
                }
            },
            _l2: function (t) {
                if (!t.isRendered) {
                    var e = t.content,
                        i = "rsImg",
                        n, s = this.st.imageAlignCenter,
                        o = this.st.imageScaleMode,
                        r;
                    t.videoURL && (i = "rsVideoContainer", "fill" !== o ? n = !0 : (r = e, r.hasClass(i) || (r = r.find("." + i)), r.css({
                        width: "100%",
                        height: "100%"
                    }), i = "rsImg")), e.hasClass(i) || (e = e.find("." + i));
                    var a = t.iW,
                        i = t.iH;
                    if (t.isRendered = !0, "none" !== o || s) {
                        bMargin = "fill" !== o ? this._w3 : 0, t = this._u3 - 2 * bMargin, r = this._v3 - 2 * bMargin;
                        var l, u, h = {};
                        "fit-if-smaller" === o && (a > t || i > r) && (o = "fit"), ("fill" === o || "fit" === o) && (l = t / a, u = r / i, l = "fill" == o ? l > u ? l : u : "fit" == o ? u > l ? l : u : 1, a = Math.ceil(a * l, 10), i = Math.ceil(i * l, 10)), "none" !== o && (h.width = a, h.height = i, n && e.find(".rsImg")
                            .css({
                                width: "100%",
                                height: "100%"
                            })), s && (h.marginLeft = Math.floor((t - a) / 2) + bMargin, h.marginTop = Math.floor((r - i) / 2) + bMargin), e.css(h)
                    }
                }
            }
        }, t.rsProto = e.prototype, t.fn.royalSlider = function (i) {
            var n = arguments;
            return this.each(function () {
                var s = t(this);
                if ("object" != typeof i && i) {
                    if ((s = s.data("royalSlider")) && s[i]) return s[i].apply(s, Array.prototype.slice.call(n, 1))
                } else s.data("royalSlider") || s.data("royalSlider", new e(s, i))
            })
        }, t.fn.royalSlider.defaults = {
            slidesSpacing: 8,
            startSlideId: 0,
            loop: !1,
            loopRewind: !1,
            numImagesToPreload: 4,
            fadeinLoadedSlide: !0,
            slidesOrientation: "horizontal",
            transitionType: "move",
            transitionSpeed: 600,
            controlNavigation: "bullets",
            controlsInside: !0,
            arrowsNav: !0,
            arrowsNavAutoHide: !0,
            navigateByClick: !0,
            randomizeSlides: !1,
            sliderDrag: !0,
            sliderTouch: !0,
            keyboardNavEnabled: !1,
            fadeInAfterLoaded: !0,
            allowCSS3: !0,
            allowCSS3OnWebkit: !0,
            addActiveClass: !1,
            autoHeight: !1,
            easeOut: "easeOutSine",
            easeInOut: "easeInOutSine",
            minSlideOffset: 10,
            imageScaleMode: "fit-if-smaller",
            imageAlignCenter: !0,
            imageScalePadding: 4,
            autoScaleSlider: !1,
            autoScaleSliderWidth: 800,
            autoScaleSliderHeight: 400,
            autoScaleHeight: !0,
            arrowsNavHideOnTouch: !1,
            globalCaption: !1,
            beforeSlideChange: null,
            afterSlideChange: null,
            beforeResize: null,
            afterResize: null
        }, t.rsCSS3Easing = {
            easeOutSine: "cubic-bezier(0.390, 0.575, 0.565, 1.000)",
            easeInOutSine: "cubic-bezier(0.445, 0.050, 0.550, 0.950)"
        }, t.extend(jQuery.easing, {
            easeInOutSine: function (t, e, i, n, s) {
                return -n / 2 * (Math.cos(Math.PI * e / s) - 1) + i
            },
            easeOutSine: function (t, e, i, n, s) {
                return n * Math.sin(e / s * (Math.PI / 2)) + i
            },
            easeOutCubic: function (t, e, i, n, s) {
                return n * ((e = e / s - 1) * e * e + 1) + i
            }
        })
    }(jQuery, window),
    function (t) {
        t.extend(t.rsProto, {
            _f5: function () {
                var e = this;
                "bullets" === e.st.controlNavigation && (e.ev.one("rsAfterPropsSetup", function () {
                    e._g5 = !0, e.slider.addClass("rsWithBullets");
                    for (var i = '<div class="rsNav rsBullets">', n = 0; n < e.numSlides; n++) i += '<div class="rsNavItem rsBullet"><span class=""></span></div>';
                    i = t(i + "</div>"), e._t4 = i, e._h5 = i.children(), e.slider.append(i), e._t4.click(function (i) {
                        i = t(i.target)
                            .closest(".rsNavItem"), i.length && e.goTo(i.index())
                    })
                }), e.ev.on("rsOnAppendSlide", function (t, i, n) {
                    n >= e.numSlides ? e._t4.append('<div class="rsNavItem rsBullet"><span class=""></span></div>') : e._h5.eq(n)
                        .before('<div class="rsNavItem rsBullet"><span class=""></span></div>'), e._h5 = e._t4.children()
                }), e.ev.on("rsOnRemoveSlide", function (t, i) {
                    var n = e._h5.eq(i);
                    n && (n.remove(), e._h5 = e._t4.children())
                }), e.ev.on("rsOnUpdateNav", function () {
                    var i = e.currSlideId;
                    e._i5 && e._i5.removeClass("rsNavSelected"), i = t(e._h5[i]), i.addClass("rsNavSelected"), e._i5 = i
                }))
            }
        }), t.rsModules.bullets = t.rsProto._f5
    }(jQuery),
    function (t) {
        t.extend(t.rsProto, {
            _y5: function () {
                var e = this;
                "thumbnails" === e.st.controlNavigation && (e._z5 = {
                    drag: !0,
                    touch: !0,
                    orientation: "horizontal",
                    navigation: !0,
                    arrows: !0,
                    arrowLeft: null,
                    arrowRight: null,
                    spacing: 4,
                    arrowsAutoHide: !1,
                    appendSpan: !1,
                    transitionSpeed: 600,
                    autoCenter: !0,
                    fitInViewport: !0,
                    firstMargin: !0
                }, e.st.thumbs = t.extend({}, e._z5, e.st.thumbs), e.ev.on("rsBeforeParseNode", function (e, i, n) {
                    i = t(i), n.thumbnail = i.find(".rsTmb")
                        .remove(), n.thumbnail.length ? n.thumbnail = t(document.createElement("div"))
                        .append(n.thumbnail)
                        .html() : (n.thumbnail = i.attr("data-rsTmb"), n.thumbnail || (n.thumbnail = i.find(".rsImg")
                            .attr("data-rsTmb")), n.thumbnail = n.thumbnail ? '<img src="' + n.thumbnail + '"/>' : "")
                }), e.ev.one("rsAfterPropsSetup", function () {
                    e._a6()
                }), e.ev.on("rsOnUpdateNav", function () {
                    var i = e.currSlideId,
                        n;
                    e._i5 && e._i5.removeClass("rsNavSelected"), n = t(e._h5[i]), n.addClass("rsNavSelected"), e._b6 && e._c6(i), e._i5 = n
                }), e.ev.on("rsOnAppendSlide", function (t, i, n) {
                    t = "<div" + e._d6 + ' class="rsNavItem rsThumb">' + e._e6 + i.thumbnail + "</div>", n >= e.numSlides ? e._l3.append(t) : e._h5.eq(n)
                        .before(t), e._h5 = e._l3.children(), e.updateThumbsSize()
                }), e.ev.on("rsOnRemoveSlide", function (t, i) {
                    var n = e._h5.eq(i);
                    n && (n.remove(), e._h5 = e._l3.children(), e.updateThumbsSize())
                }))
            },
            _a6: function () {
                var e = this,
                    i = "rsThumbs",
                    n = "",
                    s, o, r = e.st.thumbs.spacing;
                e._g5 = !0, r > 0 ? (s = r + "px ", s = ' style="margin: 0 ' + s + s + '0;"') : s = "", e._d6 = s, e._x2 = "vertical" === e.st.thumbs.orientation ? !1 : !0, e._b3 = 0, e._f6 = !1, e._g6 = !1, e._b6 = !1, e._h6 = e.st.thumbs.arrows && e.st.thumbs.navigation, o = e._x2 ? "Hor" : "Ver", e.slider.addClass("rsWithThumbs rsWithThumbs" + o), n += '<div class="rsNav rsThumbs rsThumbs' + o + '"><div class="' + i + 'Container">', e._e6 = e.st.thumbs.appendSpan ? '<span class="thumbIco"></span>' : "";
                for (var a = 0; a < e.numSlides; a++) o = e.slides[a], n += "<div" + s + ' class="rsNavItem rsThumb">' + e._e6 + o.thumbnail + "</div>";
                n = t(n + "</div></div>"), e._l3 = t(n)
                    .find("." + i + "Container"), e._h6 && (i += "Arrow", e.st.thumbs.arrowLeft ? e._i6 = e.st.thumbs.arrowLeft : (e._i6 = t('<div class="' + i + " " + i + 'Left"><div class="' + i + 'Icn"></div></div>'), n.append(e._i6)), e.st.thumbs.arrowRight ? e._j6 = e.st.thumbs.arrowRight : (e._j6 = t('<div class="' + i + " " + i + 'Right"><div class="' + i + 'Icn"></div></div>'), n.append(e._j6)), e._i6.click(function () {
                        var t = (Math.floor(e._b3 / e._k6) + e._l6) * e._k6;
                        e._t3(t > e._g3 ? e._g3 : t)
                    }), e._j6.click(function () {
                        var t = (Math.floor(e._b3 / e._k6) - e._l6) * e._k6;
                        e._t3(t < e._h3 ? e._h3 : t)
                    }), e.st.thumbs.arrowsAutoHide && !e.hasTouch && (e._i6.css("opacity", 0), e._j6.css("opacity", 0), n.one("mousemove.rsarrowshover", function () {
                        e._b6 && (e._i6.css("opacity", 1), e._j6.css("opacity", 1))
                    }), n.hover(function () {
                        e._b6 && (e._i6.css("opacity", 1), e._j6.css("opacity", 1))
                    }, function () {
                        e._b6 && (e._i6.css("opacity", 0), e._j6.css("opacity", 0))
                    }))), e._t4 = n, e._h5 = e._l3.children(), e.slider.append(n), e._p3 = !0, e._m6 = r, e.st.thumbs.navigation && e._c && e._l3.css(e._e + "transition-property", e._e + "transform"), e._t4.click(function (i) {
                        e._g6 || (i = t(i.target)
                            .closest(".rsNavItem"), i.length && e.goTo(i.index()))
                    }), e.ev.off("rsBeforeSizeSet.thumbs")
                    .on("rsBeforeSizeSet.thumbs", function () {
                        e._n6 = e._x2 ? e._v3 : e._u3, e.updateThumbsSize()
                    })
            },
            updateThumbsSize: function () {
                var t = this,
                    e = t._h5.first(),
                    i = {},
                    n = t._h5.length;
                t._k6 = (t._x2 ? e.outerWidth() : e.outerHeight()) + t._m6, t._r3 = n * t._k6 - t._m6, i[t._x2 ? "width" : "height"] = t._r3 + t._m6, t._s3 = t._x2 ? t._t4.width() : t._t4.height(), t._h3 = -(t._r3 - t._s3) - (t.st.thumbs.firstMargin ? t._m6 : 0), t._g3 = t.st.thumbs.firstMargin ? t._m6 : 0, t._l6 = Math.floor(t._s3 / t._k6), t._r3 < t._s3 ? (t.st.thumbs.autoCenter && t._j3((t._s3 - t._r3) / 2), t.st.thumbs.arrows && t._i6 && (t._i6.addClass("rsThumbsArrowDisabled"), t._j6.addClass("rsThumbsArrowDisabled")), t._b6 = !1, t._g6 = !1, t._t4.off(t._f1)) : t.st.thumbs.navigation && !t._b6 && (t._b6 = !0, !t.hasTouch && t.st.thumbs.drag || t.hasTouch && t.st.thumbs.touch) && (t._g6 = !0, t._t4.on(t._f1, function (e) {
                    t._b2(e, !0)
                })), t._l3.css(i), t._p3 && (t.isFullscreen || t.st.thumbs.fitInViewport) && (t._x2 ? t._v3 = t._n6 - t._t4.outerHeight() : t._u3 = t._n6 - t._t4.outerWidth())
            },
            setThumbsOrientation: function (t, e) {
                this._p3 && (this.st.thumbs.orientation = t, this._t4.remove(), this.slider.removeClass("rsWithThumbsHor rsWithThumbsVer"), this._a6(), this._t4.off(this._f1), e || this.updateSliderSize(!0))
            },
            _j3: function (t) {
                this._b3 = t, this._c ? this._l3.css(this._r1, this._s1 + (this._x2 ? t + this._t1 + 0 : 0 + this._t1 + t) + this._u1) : this._l3.css(this._x2 ? this._r1 : this._q1, t)
            },
            _t3: function (e, i, n, s, o) {
                var r = this;
                if (r._b6) {
                    i || (i = r.st.thumbs.transitionSpeed), r._b3 = e, r._o6 && clearTimeout(r._o6), r._f6 && (r._c || r._l3.stop(), n = !0);
                    var a = {};
                    r._f6 = !0, r._c ? (a[r._e + "transition-duration"] = i + "ms", a[r._e + "transition-timing-function"] = n ? t.rsCSS3Easing[r.st.easeOut] : t.rsCSS3Easing[r.st.easeInOut], r._l3.css(a), r._j3(e)) : (a[r._x2 ? r._r1 : r._q1] = e + "px", r._l3.animate(a, i, n ? "easeOutCubic" : r.st.easeInOut)), s && (r._b3 = s), r._p6(), r._o6 = setTimeout(function () {
                        r._f6 = !1, o && (r._t3(s, o, !0), o = null)
                    }, i)
                }
            },
            _p6: function () {
                this._h6 && (this._b3 === this._g3 ? this._i6.addClass("rsThumbsArrowDisabled") : this._i6.removeClass("rsThumbsArrowDisabled"), this._b3 === this._h3 ? this._j6.addClass("rsThumbsArrowDisabled") : this._j6.removeClass("rsThumbsArrowDisabled"))
            },
            _c6: function (t, e) {
                var i = 0,
                    n, s = t * this._k6 + 2 * this._k6 - this._m6 + this._g3,
                    o = Math.floor(this._b3 / this._k6);
                this._b6 && (s + this._b3 > this._s3 ? (t === this.numSlides - 1 && (i = 1), o = -t + this._l6 - 2 + i, n = o * this._k6 + this._s3 % this._k6 + this._m6 - this._g3) : 0 !== t ? (t - 1) * this._k6 <= -this._b3 + this._g3 && t - 1 <= this.numSlides - this._l6 && (n = (-t + 1) * this._k6 + this._g3) : n = this._g3, n !== this._b3 && (i = void 0 === n ? this._b3 : n, i > this._g3 ? this._j3(this._g3) : i < this._h3 ? this._j3(this._h3) : void 0 !== n && (e ? this._j3(n) : this._t3(n))), this._p6())
            }
        }), t.rsModules.thumbnails = t.rsProto._y5
    }(jQuery),
    function (t) {
        t.extend(t.rsProto, {
            _w5: function () {
                var e = this;
                "tabs" === e.st.controlNavigation && (e.ev.on("rsBeforeParseNode", function (e, i, n) {
                    i = t(i), n.thumbnail = i.find(".rsTmb")
                        .remove(), n.thumbnail.length ? n.thumbnail = t(document.createElement("div"))
                        .append(n.thumbnail)
                        .html() : (n.thumbnail = i.attr("data-rsTmb"), n.thumbnail || (n.thumbnail = i.find(".rsImg")
                            .attr("data-rsTmb")), n.thumbnail = n.thumbnail ? '<img src="' + n.thumbnail + '"/>' : "")
                }), e.ev.one("rsAfterPropsSetup", function () {
                    e._x5()
                }), e.ev.on("rsOnAppendSlide", function (t, i, n) {
                    n >= e.numSlides ? e._t4.append('<div class="rsNavItem rsTab">' + i.thumbnail + "</div>") : e._h5.eq(n)
                        .before('<div class="rsNavItem rsTab">' + item.thumbnail + "</div>"), e._h5 = e._t4.children()
                }), e.ev.on("rsOnRemoveSlide", function (t, i) {
                    var n = e._h5.eq(i);
                    n && (n.remove(), e._h5 = e._t4.children())
                }), e.ev.on("rsOnUpdateNav", function () {
                    var i = e.currSlideId;
                    e._i5 && e._i5.removeClass("rsNavSelected"), i = t(e._h5[i]), i.addClass("rsNavSelected"), e._i5 = i
                }))
            },
            _x5: function () {
                var e = this,
                    i, n;
                e._g5 = !0, i = '<div class="rsNav rsTabs">';
                for (var s = 0; s < e.numSlides; s++) s === e.numSlides - 1 && (style = ""), n = e.slides[s], i += '<div class="rsNavItem rsTab">' + n.thumbnail + "</div>";
                i = t(i + "</div>"), e._t4 = i, e._h5 = i.find(".rsNavItem"), e.slider.append(i), e._t4.click(function (i) {
                    i = t(i.target)
                        .closest(".rsNavItem"), i.length && e.goTo(i.index())
                })
            }
        }), t.rsModules.tabs = t.rsProto._w5
    }(jQuery),
    function (t) {
        t.extend(t.rsProto, {
            _l5: function () {
                var e = this;
                e._m5 = {
                    enabled: !1,
                    keyboardNav: !0,
                    buttonFS: !0,
                    nativeFS: !1,
                    doubleTap: !0
                }, e.st.fullscreen = t.extend({}, e._m5, e.st.fullscreen), e.st.fullscreen.enabled && e.ev.one("rsBeforeSizeSet", function () {
                    e._n5()
                })
            },
            _n5: function () {
                var e = this;
                if (e._o5 = !e.st.keyboardNavEnabled && e.st.fullscreen.keyboardNav, e.st.fullscreen.nativeFS) {
                    e._p5 = {
                        supportsFullScreen: !1,
                        isFullScreen: function () {
                            return !1
                        },
                        requestFullScreen: function () {},
                        cancelFullScreen: function () {},
                        fullScreenEventName: "",
                        prefix: ""
                    };
                    var i = ["webkit", "moz", "o", "ms", "khtml"];
                    if ("undefined" != typeof document.cancelFullScreen) e._p5.supportsFullScreen = !0;
                    else
                        for (var n = 0; n < i.length; n++)
                            if (e._p5.prefix = i[n], "undefined" != typeof document[e._p5.prefix + "CancelFullScreen"]) {
                                e._p5.supportsFullScreen = !0;
                                break
                            }
                    e._p5.supportsFullScreen ? (e._p5.fullScreenEventName = e._p5.prefix + "fullscreenchange.rs", e._p5.isFullScreen = function () {
                        switch (this.prefix) {
                        case "":
                            return document.fullScreen;
                        case "webkit":
                            return document.webkitIsFullScreen;
                        default:
                            return document[this.prefix + "FullScreen"]
                        }
                    }, e._p5.requestFullScreen = function (t) {
                        return "" === this.prefix ? t.requestFullScreen() : t[this.prefix + "RequestFullScreen"]()
                    }, e._p5.cancelFullScreen = function () {
                        return "" === this.prefix ? document.cancelFullScreen() : document[this.prefix + "CancelFullScreen"]()
                    }) : e._p5 = !1
                }
                e.st.fullscreen.buttonFS && (e._q5 = t('<div class="rsFullscreenBtn"><div class="rsFullscreenIcn"></div></div>')
                    .appendTo(e.st.controlsInside ? e._a1 : e.slider)
                    .on("click.rs", function () {
                        e.isFullscreen ? e.exitFullscreen() : e.enterFullscreen()
                    }))
            },
            enterFullscreen: function (e) {
                var i = this;
                if (i._p5) {
                    if (!e) return i._a.on(i._p5.fullScreenEventName, function () {
                        i._p5.isFullScreen() ? i.enterFullscreen(!0) : i.exitFullscreen(!0)
                    }), void i._p5.requestFullScreen(t("html")[0]);
                    i._p5.requestFullScreen(t("html")[0])
                }
                if (!i._r5) {
                    i._r5 = !0, i._a.on("keyup.rsfullscreen", function (t) {
                            27 === t.keyCode && i.exitFullscreen()
                        }), i._o5 && i._v1(), i._s5 = t("html")
                        .attr("style"), i._t5 = t("body")
                        .attr("style"), i._u5 = i.slider.attr("style"), t("body, html")
                        .css({
                            overflow: "hidden",
                            height: "100%",
                            width: "100%",
                            margin: "0",
                            padding: "0"
                        }), i.slider.addClass("rsFullscreen");
                    var n;
                    for (n = 0; n < i.numSlides; n++)
                        if (e = i.slides[n], e.isRendered = !1, e.bigImage) {
                            e.isMedLoaded = e.isLoaded, e.isMedLoading = e.isLoading, e.medImage = e.image, e.medIW = e.iW, e.medIH = e.iH, e.slideId = -99, e.bigImage !== e.medImage && (e.sizeType = "big"), e.isLoaded = e.isBigLoaded, e.isLoading = e.isBigLoading, e.image = e.bigImage, e.iW = e.bigIW, e.iH = e.bigIH, e.contentAdded = !1;
                            var s = e.isLoaded ? '<img class="rsImg" src="' + e.image + '"/>' : '<a class="rsImg" href="' + e.image + '"></a>';
                            e.content.hasClass("rsImg") ? e.content = t(s) : e.content.find(".rsImg")
                                .replaceWith(s)
                        }
                    i.isFullscreen = !0, setTimeout(function () {
                        i._r5 = !1, i.updateSliderSize(), i.ev.trigger("rsEnterFullscreen")
                    }, 100)
                }
            },
            exitFullscreen: function (e) {
                var i = this;
                if (i._p5) {
                    if (!e) return void i._p5.cancelFullScreen(t("html")[0]);
                    i._a.off(i._p5.fullScreenEventName)
                }
                if (!i._r5) {
                    i._r5 = !0, i._a.off("keyup.rsfullscreen"), i._o5 && i._a.off("keydown.rskb"), t("html")
                        .attr("style", i._s5 || ""), t("body")
                        .attr("style", i._t5 || ""), i.slider.removeClass("rsFullscreen");
                    var n;
                    for (n = 0; n < i.numSlides; n++)
                        if (e = i.slides[n], e.isRendered = !1, e.bigImage) {
                            e.slideId = -99, e.isBigLoaded = e.isLoaded, e.isBigLoading = e.isLoading, e.bigImage = e.image, e.bigIW = e.iW, e.bigIH = e.iH, e.isLoaded = e.isMedLoaded, e.isLoading = e.isMedLoading, e.image = e.medImage, e.iW = e.medIW, e.iH = e.medIH, e.contentAdded = !1;
                            var s = e.isLoaded ? '<img class="rsImg" src="' + e.image + '"/>' : '<a class="rsImg" href="' + e.image + '"></a>';
                            e.content.hasClass("rsImg") ? e.content = t(s) : e.content.find(".rsImg")
                                .replaceWith(s), e.holder && e.holder.html(e.content), e.bigImage !== e.medImage && (e.sizeType = "med")
                        }
                    i.isFullscreen = !1, setTimeout(function () {
                        i._r5 = !1, i.updateSliderSize(), i.ev.trigger("rsExitFullscreen")
                    }, 100)
                }
            }
        }), t.rsModules.fullscreen = t.rsProto._l5
    }(jQuery),
    function (t) {
        t.extend(t.rsProto, {
            _u4: function () {
                var e = this,
                    i;
                e._v4 = {
                    enabled: !1,
                    stopAtAction: !0,
                    pauseOnHover: !0,
                    delay: 2e3
                }, !e.st.autoPlay && e.st.autoplay && (e.st.autoPlay = e.st.autoplay), e.st.autoPlay = t.extend({}, e._v4, e.st.autoPlay), e.st.autoPlay.enabled && (e.ev.on("rsBeforeParseNode", function (e, n, s) {
                    n = t(n), (i = n.attr("data-rsDelay")) && (s.customDelay = parseInt(i, 10))
                }), e.ev.one("rsAfterInit", function () {
                    e._w4()
                }), e.ev.on("rsBeforeDestroy", function () {
                    e.stopAutoPlay()
                }))
            },
            _w4: function () {
                var t = this;
                t.startAutoPlay(), t.ev.on("rsAfterContentSet", function (e, i) {
                    !t._g2 && !t._m2 && t._x4 && i === t.currSlide && t._y4()
                }), t.ev.on("rsDragRelease", function () {
                    t._x4 && t._z4 && (t._z4 = !1, t._y4())
                }), t.ev.on("rsAfterSlideChange", function () {
                    t._x4 && t._z4 && (t._z4 = !1, t.currSlide.isLoaded && t._y4())
                }), t.ev.on("rsDragStart", function () {
                    t._x4 && (t.st.autoPlay.stopAtAction ? t.stopAutoPlay() : (t._z4 = !0, t._a5()))
                }), t.ev.on("rsBeforeMove", function (e, i, n) {
                    t._x4 && (n && t.st.autoPlay.stopAtAction ? t.stopAutoPlay() : (t._z4 = !0, t._a5()))
                }), t._b5 = !1, t.ev.on("rsVideoStop", function () {
                    t._x4 && (t._b5 = !1, t._y4())
                }), t.ev.on("rsVideoPlay", function () {
                    t._x4 && (t._z4 = !1, t._a5(), t._b5 = !0)
                }), t.st.autoPlay.pauseOnHover && (t._c5 = !1, t.slider.hover(function () {
                    t._x4 && (t._z4 = !1, t._a5(), t._c5 = !0)
                }, function () {
                    t._x4 && (t._c5 = !1, t._y4())
                }))
            },
            toggleAutoPlay: function () {
                this._x4 ? this.stopAutoPlay() : this.startAutoPlay()
            },
            startAutoPlay: function () {
                this._x4 = !0, this.currSlide.isLoaded && this._y4()
            },
            stopAutoPlay: function () {
                this._b5 = this._c5 = this._z4 = this._x4 = !1, this._a5()
            },
            _y4: function () {
                var t = this;
                !t._c5 && !t._b5 && (t._d5 = !0, t._e5 && clearTimeout(t._e5), t._e5 = setTimeout(function () {
                    var e;
                    !t._v && !t.st.loopRewind && (e = !0, t.st.loopRewind = !0), t.next(!0), e && (t.st.loopRewind = !1)
                }, t.currSlide.customDelay ? t.currSlide.customDelay : t.st.autoPlay.delay))
            },
            _a5: function () {
                !this._c5 && !this._b5 && (this._d5 = !1, this._e5 && (clearTimeout(this._e5), this._e5 = null))
            }
        }), t.rsModules.autoplay = t.rsProto._u4
    }(jQuery),
    function (t) {
        t.extend(t.rsProto, {
            _q6: function () {
                var e = this;
                e._r6 = {
                    autoHideArrows: !0,
                    autoHideControlNav: !1,
                    autoHideBlocks: !1,
                    youTubeCode: '<iframe src="http://www.youtube.com/embed/%id%?rel=1&autoplay=1&showinfo=0&autoplay=1&wmode=transparent" frameborder="no"></iframe>',
                    vimeoCode: '<iframe src="http://player.vimeo.com/video/%id%?byline=0&amp;portrait=0&amp;autoplay=1" frameborder="no" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>'
                }, e.st.video = t.extend({}, e._r6, e.st.video), e.ev.on("rsBeforeSizeSet", function () {
                    e._d4 && setTimeout(function () {
                        var t = e._d1,
                            t = t.hasClass("rsVideoContainer") ? t : t.find(".rsVideoContainer");
                        e._s6.css({
                            width: t.width(),
                            height: t.height()
                        })
                    }, 32)
                });
                var i = t.browser.mozilla;
                e.ev.on("rsAfterParseNode", function (n, s, o) {
                    if (n = t(s), o.videoURL) {
                        i && (e._c = e._d = !1);
                        var s = t('<div class="rsVideoContainer"></div>'),
                            r = t('<div class="rsBtnCenterer"><div class="rsPlayBtn"><div class="rsPlayBtnIcon"></div></div></div>');
                        n.hasClass("rsImg") ? o.content = s.append(n)
                            .append(r) : o.content.find(".rsImg")
                            .wrap(s)
                            .after(r)
                    }
                })
            },
            toggleVideo: function () {
                return this._d4 ? this.stopVideo() : this.playVideo()
            },
            playVideo: function () {
                var e = this;
                if (!e._d4) {
                    var i = e.currSlide;
                    if (!i.videoURL) return !1;
                    var n = e._t6 = i.content,
                        i = i.videoURL,
                        s, o;
                    return i.match(/youtu\.be/i) || i.match(/youtube\.com\/watch/i) ? (o = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/, (o = i.match(o)) && 11 == o[7].length && (s = o[7]), void 0 !== s && (e._s6 = e.st.video.youTubeCode.replace("%id%", s))) : i.match(/vimeo\.com/i) && (o = /\/\/(www\.)?vimeo.com\/(\d+)($|\/)/, (o = i.match(o)) && (s = o[2]), void 0 !== s && (e._s6 = e.st.video.vimeoCode.replace("%id%", s))), e.videoObj = t(e._s6), e.ev.trigger("rsOnCreateVideoElement", [i]), e.videoObj.length && (e._s6 = t('<div class="rsVideoFrameHolder"><div class="rsPreloader"></div><div class="rsCloseVideoBtn"><div class="rsCloseVideoIcn"></div></div></div>'), e._s6.find(".rsPreloader")
                        .after(e.videoObj), n = n.hasClass("rsVideoContainer") ? n : n.find(".rsVideoContainer"), e._s6.css({
                            width: n.width(),
                            height: n.height()
                        })
                        .find(".rsCloseVideoBtn")
                        .off("click.rsv")
                        .on("click.rsv", function (t) {
                            return e.stopVideo(), t.preventDefault(), t.stopPropagation(), !1
                        }), n.append(e._s6), e.isIPAD && n.addClass("rsIOSVideo"), e._w1 && e.st.video.autoHideArrows && (e._w1.addClass("rsHidden"), e._x1.addClass("rsHidden"), e._y1 = !0), e._t4 && e.st.video.autoHideControlNav && e._t4.addClass("rsHidden"), e.st.video.autoHideBlocks && e.currSlide.animBlocks && e.currSlide.animBlocks.addClass("rsHidden"), setTimeout(function () {
                            e._s6.addClass("rsVideoActive")
                        }, 10), e.ev.trigger("rsVideoPlay"), e._d4 = !0), !0
                }
                return !1
            },
            stopVideo: function () {
                var t = this;
                return t._d4 ? (t.isIPAD && t.slider.find(".rsCloseVideoBtn")
                    .remove(), t._w1 && t.st.video.autoHideArrows && (t._w1.removeClass("rsHidden"), t._x1.removeClass("rsHidden"), t._y1 = !1), t._t4 && t.st.video.autoHideControlNav && t._t4.removeClass("rsHidden"), t.st.video.autoHideBlocks && t.currSlide.animBlocks && t.currSlide.animBlocks.removeClass("rsHidden"), setTimeout(function () {
                        t.ev.trigger("rsOnDestroyVideoElement", [t.videoObj]);
                        var e = t._s6.find("iframe");
                        e.length && e.attr("src", ""), t._s6.remove()
                    }, 16), t.ev.trigger("rsVideoStop"), t._d4 = !1, !0) : !1
            }
        }), t.rsModules.video = t.rsProto._q6
    }(jQuery),
    function (t) {
        t.extend(t.rsProto, {
            _k4: function () {
                function e() {
                    var t = i.currSlide;
                    if (i.currSlide && i.currSlide.isLoaded && i._o4 !== t) {
                        if (0 < i._n4.length) {
                            for (n = 0; n < i._n4.length; n++) clearTimeout(i._n4[n]);
                            i._n4 = []
                        }
                        if (0 < i._m4.length) {
                            var e;
                            for (n = 0; n < i._m4.length; n++)(e = i._m4[n]) && (i._c ? (e.block.css(i._e + i._o1, "0s"), e.block.css(e.css)) : e.running ? e.block.stop(!0, !0) : e.block.css(e.css), i._o4 = null, t.animBlocksDisplayed = !1);
                            i._m4 = []
                        }
                        t.animBlocks && (t.animBlocksDisplayed = !0, i._o4 = t, i._p4(t.animBlocks))
                    }
                }
                var i = this,
                    n;
                i._l4 = {
                    fadeEffect: !0,
                    moveEffect: "top",
                    moveOffset: 20,
                    speed: 400,
                    easing: "easeOutSine",
                    delay: 200
                }, i.st.block = t.extend({}, i._l4, i.st.block), i._m4 = [], i._n4 = [], i.ev.on("rsAfterInit", function () {
                    e()
                }), i.ev.on("rsBeforeParseNode", function (e, i, n) {
                    i = t(i), n.animBlocks = i.find(".rsABlock")
                        .css("display", "none"), n.animBlocks.length || (n.animBlocks = i.hasClass("rsABlock") ? i.css("display", "none") : !1)
                }), i.ev.on("rsAfterContentSet", function (t, n) {
                    n.id === i.currSlideId && setTimeout(function () {
                        e()
                    }, i.st.fadeinLoadedSlide ? 300 : 0)
                }), i.ev.on("rsAfterSlideChange", function () {
                    e()
                })
            },
            _q4: function (t, e) {
                setTimeout(function () {
                    t.css(e)
                }, 6)
            },
            _p4: function (e) {
                var i = this,
                    n, s, o, r;
                i._n4 = [], e.each(function (e) {
                    n = t(this), s = {}, o = {}, r = null;
                    var a = n.data("move-offset");
                    if (isNaN(a) && (a = i.st.block.moveOffset), a > 0) {
                        var l = n.data("move-effect");
                        if (l ? (l = l.toLowerCase(), "none" === l ? l = !1 : "left" !== l && "top" !== l && "bottom" !== l && "right" !== l && (l = i.st.block.moveEffect, "none" === l && (l = !1))) : l = i.st.block.moveEffect, l) {
                            var u;
                            u = "right" === l || "left" === l ? !0 : !1;
                            var h, c;
                            isOppositeProp = !1, i._c ? (h = 0, c = i._r1) : (u ? isNaN(parseInt(n.css("right"), 10)) ? c = "left" : (c = "right", isOppositeProp = !0) : isNaN(parseInt(n.css("bottom"), 10)) ? c = "top" : (c = "bottom", isOppositeProp = !0), c = "margin-" + c, isOppositeProp && (a = -a), h = parseInt(n.css(c), 10)), o[c] = i._h4("top" === l || "left" === l ? h - a : h + a, u), s[c] = i._h4(h, u)
                        }
                    }(a = n.attr("data-fade-effect")) ? ("none" === a.toLowerCase() || "false" === a.toLowerCase()) && (a = !1) : a = i.st.block.fadeEffect, a && (o.opacity = 0, s.opacity = 1), (a || l) && (r = {}, r.hasFade = Boolean(a), Boolean(l) && (r.moveProp = c, r.hasMove = !0), r.speed = n.data("speed"), isNaN(r.speed) && (r.speed = i.st.block.speed), r.easing = n.data("easing"), r.easing || (r.easing = i.st.block.easing), r.css3Easing = t.rsCSS3Easing[r.easing], r.delay = n.data("delay"), isNaN(r.delay) && (r.delay = i.st.block.delay * e)), l = {}, i._c && (l[i._e + i._o1] = "0ms"), l.moveProp = s.moveProp, l.opacity = s.opacity, l.display = "none", i._m4.push({
                        block: n,
                        css: l
                    }), i._q4(n, o), i._n4.push(setTimeout(function (t, e, n, s) {
                        return function () {
                            if (t.css("display", "block"), n) {
                                var o = {};
                                if (i._c) {
                                    var r = "";
                                    n.hasMove && (r += n.moveProp), n.hasFade && (n.hasMove && (r += ", "), r += "opacity"), o[i._e + i._n1] = r, o[i._e + i._o1] = n.speed + "ms", o[i._e + i._p1] = n.css3Easing, t.css(o), setTimeout(function () {
                                        t.css(e)
                                    }, 24)
                                } else setTimeout(function () {
                                    t.animate(e, n.speed, n.easing)
                                }, 16)
                            }
                            delete i._n4[s]
                        }
                    }(n, s, r, e), 6 >= r.delay ? 12 : r.delay))
                })
            }
        }), t.rsModules.animatedBlocks = t.rsProto._k4
    }(jQuery),
    function (t) {
        t.extend(t.rsProto, {
            _r4: function () {
                var t = this;
                if (t.st.autoHeight) {
                    var e, i;
                    t.slider.addClass("rsAutoHeight"), t.ev.on("rsAfterInit", function () {
                        setTimeout(function () {
                            n(!1), setTimeout(function () {
                                t.slider.append('<div id="clear" style="clear:both;"></div>'), t._c && t._a1.css(t._e + "transition", "height " + t.st.transitionSpeed + "ms ease-in-out")
                            }, 16)
                        }, 16)
                    }), t.ev.on("rsBeforeAnimStart", function () {
                        n(!0)
                    }), t.ev.on("rsBeforeSizeSet", function () {
                        setTimeout(function () {
                            n(!1)
                        }, 16)
                    });
                    var n = function (s) {
                        var o = t.slides[t.currSlideId];
                        e = o.holder, o.isLoaded ? e && (i = e.height(), 0 !== i && void 0 !== i && (t._v3 = i, t._c || !s ? t._a1.css("height", i) : t._a1.stop(!0, !0)
                                .animate({
                                    height: i
                                }, t.st.transitionSpeed))) : t.ev.off("rsAfterContentSet.rsAutoHeight")
                            .on("rsAfterContentSet.rsAutoHeight", function (t, e) {
                                o === e && n()
                            })
                    }
                }
            }
        }), t.rsModules.autoHeight = t.rsProto._r4
    }(jQuery),
    function (t) {
        t.extend(t.rsProto, {
            _v5: function () {
                var e = this;
                e.st.globalCaption && (e.ev.on("rsAfterInit", function () {
                    e.globalCaption = t('<div class="rsGCaption"></div>')
                        .appendTo(e.slider), e.globalCaption.html(e.currSlide.caption)
                }), e.ev.on("rsBeforeAnimStart", function () {
                    e.globalCaption.html(e.currSlide.caption)
                }))
            }
        }), t.rsModules.globalCaption = t.rsProto._v5
    }(jQuery),
    function (t) {
        t.rsProto._j4 = function () {
            var t, e = this;
            if (e.st.addActiveClass) {
                e.ev.on("rsBeforeMove", function () {
                    i()
                }), e.ev.on("rsAfterInit", function () {
                    i()
                });
                var i = function () {
                    t && clearTimeout(t), t = setTimeout(function () {
                        e._a4 && e._a4.removeClass("rsActiveSlide"), e._d1 && e._d1.addClass("rsActiveSlide"), t = null
                    }, 50)
                }
            }
        }, t.rsModules.activeClass = t.rsProto._j4
    }(jQuery),
    function (t) {
        t.extend(t.rsProto, {
            _j5: function () {
                var e = this,
                    i, n, s;
                if (e._k5 = {
                        enabled: !1,
                        change: !1,
                        prefix: ""
                    }, e.st.deeplinking = t.extend({}, e._k5, e.st.deeplinking), e.st.deeplinking.enabled) {
                    var o = e.st.deeplinking.change,
                        r = "#" + e.st.deeplinking.prefix,
                        a = function () {
                            var t = window.location.hash;
                            return t && (t = parseInt(t.substring(r.length), 10), t >= 0) ? t - 1 : -1
                        },
                        l = a(); - 1 !== l && (e.st.startSlideId = l), o && t(window)
                        .on("hashchange.rs", function () {
                            if (!i) {
                                var t = a();
                                0 > t || (t > e.numSlides - 1 && (t = e.numSlides - 1), e.goTo(t))
                            }
                        }), e.ev.on("rsAfterSlideChange", function () {
                            n && clearTimeout(n), s && clearTimeout(s), s = setTimeout(function () {
                                i = !0, window.location.hash = r + (e.currSlideId + 1), n = setTimeout(function () {
                                    i = !1, n = 0
                                }, 60)
                            }, 750)
                        })
                }
            }
        }), t.rsModules.deeplinking = t.rsProto._j5
    }(jQuery),
    function (t, e, i) {
        function n(t) {
            return t = t || location.href, "#" + t.replace(/^[^#]*#?(.*)$/, "$1")
        }
        var s = document,
            o, r = t.event.special,
            a = s.documentMode,
            l = "onhashchange" in e && (a === i || a > 7);
        t.fn.hashchange = function (t) {
            return t ? this.bind("hashchange", t) : this.trigger("hashchange")
        }, t.fn.hashchange.delay = 50, r.hashchange = t.extend(r.hashchange, {
            setup: function () {
                return l ? !1 : void t(o.start)
            },
            teardown: function () {
                return l ? !1 : void t(o.stop)
            }
        });
        var u = function () {
                var i = n(),
                    s = d(c);
                i !== c ? (p(c = i, s), t(e)
                    .trigger("hashchange")) : s !== c && (location.href = location.href.replace(/#.*/, "") + s), h = setTimeout(u, t.fn.hashchange.delay)
            },
            r = {},
            h, c = n(),
            p = a = function (t) {
                return t
            },
            d = a;
        if (r.start = function () {
                h || u()
            }, r.stop = function () {
                h && clearTimeout(h), h = i
            }, t.browser.msie && !l) {
            var f, m;
            r.start = function () {
                f || (m = (m = t.fn.hashchange.src) && m + n(), f = t('<iframe tabindex="-1" title="empty"/>')
                    .hide()
                    .one("load", function () {
                        m || p(n()), u()
                    })
                    .attr("src", m || "javascript:0")
                    .insertAfter("body")[0].contentWindow, s.onpropertychange = function () {
                        try {
                            "title" === event.propertyName && (f.document.title = s.title)
                        } catch (t) {}
                    })
            }, r.stop = a, d = function () {
                return n(f.location.href)
            }, p = function (e, i) {
                var n = f.document,
                    o = t.fn.hashchange.domain;
                e !== i && (n.title = s.title, n.open(), o && n.write('<script>document.domain="' + o + '"</script>'), n.close(), f.location.hash = e)
            }
        }
        o = r
    }(jQuery, this),
    function ($) {
        $.fn.agegate = function (t) {
            var e = "undefined" != typeof $.cookie;
            return this.each(function () {
                var i = $.extend({}, $.fn.agegate.defaults, t);
                if (e && null !== $.cookie("age_gate")) {
                    if ("underage" === $.cookie("age_gate")) return void i.underage();
                    if ("legal" === $.cookie("age_gate")) return void i.legal();
                    $.cookie("age_gate", null)
                }
                var n = $("<div/>")
                    .attr({
                        id: i.container_id
                    }),
                    s = $("<strong/>")
                    .text(i.title),
                    o = $("<select/>")
                    .attr({
                        id: "agegate-day",
                        name: "agegate-day"
                    })
                    .append(function () {
                        for (var t = "", e = 1; 32 > e; e++) t += '<option value="' + e + '">' + e + "</option>";
                        return t
                    }),
                    r = $("<select/>")
                    .attr({
                        id: "agegate-month",
                        name: "agegate-month"
                    })
                    .append(function () {
                        for (var t = "", e = 0; 12 > e; e++) t += '<option value="' + e + '">' + i.month_names[e] + "</option>";
                        return t
                    }),
                    a = $("<select/>")
                    .attr({
                        id: "agegate-year",
                        name: "agegate-year"
                    })
                    .append(function () {
                        for (var t = "", e = 2011; e > 1900; e--) t += '<option value="' + e + '">' + e + "</option>";
                        return t
                    }),
                    l = $("<div/>")
                    .attr({
                        type: "submit",
                        id: "verify",
                        name: "verify",
                        value: i.verify_text,
                        "class": i.verify_class
                    });
                $(l)
                    .html("VERIFY"), l.bind("click", function () {
                        var t = new Date;
                        t.setFullYear($("#agegate-year")
                            .val(), $("#agegate-month")
                            .val(), $("#agegate-day")
                            .val());
                        var n = new Date;
                        n.setFullYear(n.getFullYear() - i.age), 0 > n - t ? (i.underage(), e && $.cookie("age_gate", "underage")) : (i.legal(), e && $.cookie("age_gate", "legal"))
                    });
                var u = "<br/>";
                n.append(s)
                    .append(u + u)
                    .append(i.label_request)
                    .append(u + u)
                    .append(i.label_day)
                    .append(o)
                    .append(i.label_month)
                    .append(r)
                    .append(i.label_year)
                    .append(a)
                    .append(u)
                    .append(l), $(this)
                    .empty()
                    .append(n)
            })
        }, $.fn.agegate.defaults = {
            age: 18,
            container_id: "age-gate",
            verify_text: "Verify",
            verify_class: "submit",
            title: "Age-Restricted",
            label_day: "Day:",
            label_month: "Month:",
            label_year: "Year:",
            label_request: "Please Enter Your Birthday:",
            month_names: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            legal: function () {},
            underage: function () {}
        }
    }(jQuery), (window._gsQueue || (window._gsQueue = []))
    .push(function () {
        "use strict";
        window._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function (t, e, i) {
                var n = [].slice,
                    s = function (t, e, n) {
                        i.call(this, t, e, n), this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._dirty = !0, this.render = s.prototype.render
                    },
                    o = 1e-10,
                    r = i._internals.isSelector,
                    a = i._internals.isArray,
                    l = s.prototype = i.to({}, .1, {}),
                    u = [];
                s.version = "1.11.4", l.constructor = s, l.kill()
                    ._gc = !1, s.killTweensOf = s.killDelayedCallsTo = i.killTweensOf, s.getTweensOf = i.getTweensOf, s.ticker = i.ticker, l.invalidate = function () {
                        return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), i.prototype.invalidate.call(this)
                    }, l.updateTo = function (t, e) {
                        var n, s = this.ratio;
                        e && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay));
                        for (n in t) this.vars[n] = t[n];
                        if (this._initted)
                            if (e) this._initted = !1;
                            else if (this._gc && this._enabled(!0, !1), this._notifyPluginsOfEnabled && this._firstPT && i._onPluginEvent("_onDisable", this), this._time / this._duration > .998) {
                            var o = this._time;
                            this.render(0, !0, !1), this._initted = !1, this.render(o, !0, !1)
                        } else if (this._time > 0) {
                            this._initted = !1, this._init();
                            for (var r, a = 1 / (1 - s), l = this._firstPT; l;) r = l.s + l.c, l.c *= a, l.s = r - l.c, l = l._next
                        }
                        return this
                    }, l.render = function (t, e, i) {
                        this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
                        var n, s, r, a, l, h, c, p, d = this._dirty ? this.totalDuration() : this._totalDuration,
                            f = this._time,
                            m = this._totalTime,
                            g = this._cycle,
                            v = this._duration;
                        if (t >= d ? (this._totalTime = d, this._cycle = this._repeat, this._yoyo && 0 !== (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = v, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (n = !0, s = "onComplete"), 0 === v && (p = this._rawPrevTime, (0 === t || 0 > p || p === o) && p !== t && (i = !0, p > o && (s = "onReverseComplete")), this._rawPrevTime = p = !e || t || 0 === p ? t : o)) : 1e-7 > t ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== m || 0 === v && this._rawPrevTime > o) && (s = "onReverseComplete", n = this._reversed), 0 > t ? (this._active = !1, 0 === v && (this._rawPrevTime >= 0 && (i = !0), this._rawPrevTime = p = !e || t || 0 === this._rawPrevTime ? t : o)) : this._initted || (i = !0)) : (this._totalTime = this._time = t, 0 !== this._repeat && (a = v + this._repeatDelay, this._cycle = this._totalTime / a >> 0, 0 !== this._cycle && this._cycle === this._totalTime / a && this._cycle--, this._time = this._totalTime - this._cycle * a, this._yoyo && 0 !== (1 & this._cycle) && (this._time = v - this._time), this._time > v ? this._time = v : 0 > this._time && (this._time = 0)), this._easeType ? (l = this._time / v, h = this._easeType, c = this._easePower, (1 === h || 3 === h && l >= .5) && (l = 1 - l), 3 === h && (l *= 2), 1 === c ? l *= l : 2 === c ? l *= l * l : 3 === c ? l *= l * l * l : 4 === c && (l *= l * l * l * l), this.ratio = 1 === h ? 1 - l : 2 === h ? l : .5 > this._time / v ? l / 2 : 1 - l / 2) : this.ratio = this._ease.getRatio(this._time / v)), f === this._time && !i && g === this._cycle) return void(m !== this._totalTime && this._onUpdate && (e || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || u)));
                        if (!this._initted) {
                            if (this._init(), !this._initted || this._gc) return;
                            this._time && !n ? this.ratio = this._ease.getRatio(this._time / v) : n && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                        }
                        for (this._active || !this._paused && this._time !== f && t >= 0 && (this._active = !0), 0 === m && (this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : s || (s = "_dummyGS")), this.vars.onStart && (0 !== this._totalTime || 0 === v) && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || u))), r = this._firstPT; r;) r.f ? r.t[r.p](r.c * this.ratio + r.s) : r.t[r.p] = r.c * this.ratio + r.s, r = r._next;
                        this._onUpdate && (0 > t && this._startAt && this._startTime && this._startAt.render(t, e, i), e || (this._totalTime !== m || n) && this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || u)), this._cycle !== g && (e || this._gc || this.vars.onRepeat && this.vars.onRepeat.apply(this.vars.onRepeatScope || this, this.vars.onRepeatParams || u)), s && (this._gc || (0 > t && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(t, e, i), n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[s] && this.vars[s].apply(this.vars[s + "Scope"] || this, this.vars[s + "Params"] || u), 0 === v && this._rawPrevTime === o && p !== o && (this._rawPrevTime = 0)))
                    }, s.to = function (t, e, i) {
                        return new s(t, e, i)
                    }, s.from = function (t, e, i) {
                        return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new s(t, e, i)
                    }, s.fromTo = function (t, e, i, n) {
                        return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, new s(t, e, n)
                    }, s.staggerTo = s.allTo = function (t, e, o, l, h, c, p) {
                        l = l || 0;
                        var d, f, m, g, v = o.delay || 0,
                            y = [],
                            _ = function () {
                                o.onComplete && o.onComplete.apply(o.onCompleteScope || this, arguments), h.apply(p || this, c || u)
                            };
                        for (a(t) || ("string" == typeof t && (t = i.selector(t) || t), r(t) && (t = n.call(t, 0))), d = t.length, m = 0; d > m; m++) {
                            f = {};
                            for (g in o) f[g] = o[g];
                            f.delay = v, m === d - 1 && h && (f.onComplete = _), y[m] = new s(t[m], e, f), v += l
                        }
                        return y
                    }, s.staggerFrom = s.allFrom = function (t, e, i, n, o, r, a) {
                        return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, s.staggerTo(t, e, i, n, o, r, a)
                    }, s.staggerFromTo = s.allFromTo = function (t, e, i, n, o, r, a, l) {
                        return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, s.staggerTo(t, e, n, o, r, a, l)
                    }, s.delayedCall = function (t, e, i, n, o) {
                        return new s(e, 0, {
                            delay: t,
                            onComplete: e,
                            onCompleteParams: i,
                            onCompleteScope: n,
                            onReverseComplete: e,
                            onReverseCompleteParams: i,
                            onReverseCompleteScope: n,
                            immediateRender: !1,
                            useFrames: o,
                            overwrite: 0
                        })
                    }, s.set = function (t, e) {
                        return new s(t, 0, e)
                    }, s.isTweening = function (t) {
                        return i.getTweensOf(t, !0)
                            .length > 0
                    };
                var h = function (t, e) {
                        for (var n = [], s = 0, o = t._first; o;) o instanceof i ? n[s++] = o : (e && (n[s++] = o), n = n.concat(h(o, e)), s = n.length), o = o._next;
                        return n
                    },
                    c = s.getAllTweens = function (e) {
                        return h(t._rootTimeline, e)
                            .concat(h(t._rootFramesTimeline, e))
                    };
                s.killAll = function (t, i, n, s) {
                    null == i && (i = !0), null == n && (n = !0);
                    var o, r, a, l = c(0 != s),
                        u = l.length,
                        h = i && n && s;
                    for (a = 0; u > a; a++) r = l[a], (h || r instanceof e || (o = r.target === r.vars.onComplete) && n || i && !o) && (t ? r.totalTime(r.totalDuration()) : r._enabled(!1, !1))
                }, s.killChildTweensOf = function (t, e) {
                    if (null != t) {
                        var o, l, u, h, c, p = i._tweenLookup;
                        if ("string" == typeof t && (t = i.selector(t) || t), r(t) && (t = n.call(t, 0)), a(t))
                            for (h = t.length; --h > -1;) s.killChildTweensOf(t[h], e);
                        else {
                            o = [];
                            for (u in p)
                                for (l = p[u].target.parentNode; l;) l === t && (o = o.concat(p[u].tweens)), l = l.parentNode;
                            for (c = o.length, h = 0; c > h; h++) e && o[h].totalTime(o[h].totalDuration()), o[h]._enabled(!1, !1)
                        }
                    }
                };
                var p = function (t, i, n, s) {
                    i = i !== !1, n = n !== !1, s = s !== !1;
                    for (var o, r, a = c(s), l = i && n && s, u = a.length; --u > -1;) r = a[u], (l || r instanceof e || (o = r.target === r.vars.onComplete) && n || i && !o) && r.paused(t)
                };
                return s.pauseAll = function (t, e, i) {
                    p(!0, t, e, i)
                }, s.resumeAll = function (t, e, i) {
                    p(!1, t, e, i)
                }, s.globalTimeScale = function (e) {
                    var n = t._rootTimeline,
                        s = i.ticker.time;
                    return arguments.length ? (e = e || o, n._startTime = s - (s - n._startTime) * n._timeScale / e, n = t._rootFramesTimeline, s = i.ticker.frame, n._startTime = s - (s - n._startTime) * n._timeScale / e, n._timeScale = t._rootTimeline._timeScale = e, e) : n._timeScale
                }, l.progress = function (t) {
                    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), !1) : this._time / this.duration()
                }, l.totalProgress = function (t) {
                    return arguments.length ? this.totalTime(this.totalDuration() * t, !1) : this._totalTime / this.totalDuration()
                }, l.time = function (t, e) {
                    return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
                }, l.duration = function (e) {
                    return arguments.length ? t.prototype.duration.call(this, e) : this._duration
                }, l.totalDuration = function (t) {
                    return arguments.length ? -1 === this._repeat ? this : this.duration((t - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration)
                }, l.repeat = function (t) {
                    return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
                }, l.repeatDelay = function (t) {
                    return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
                }, l.yoyo = function (t) {
                    return arguments.length ? (this._yoyo = t, this) : this._yoyo
                }, s
            }, !0), window._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function (t, e, i) {
                var n = function (t) {
                        e.call(this, t), this._labels = {}, this.autoRemoveChildren = this.vars.autoRemoveChildren === !0, this.smoothChildTiming = this.vars.smoothChildTiming === !0, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;
                        var i, n, s = this.vars;
                        for (n in s) i = s[n], r(i) && -1 !== i.join("")
                            .indexOf("{self}") && (s[n] = this._swapSelfInParams(i));
                        r(s.tweens) && this.add(s.tweens, 0, s.align, s.stagger)
                    },
                    s = 1e-10,
                    o = i._internals.isSelector,
                    r = i._internals.isArray,
                    a = [],
                    l = function (t) {
                        var e, i = {};
                        for (e in t) i[e] = t[e];
                        return i
                    },
                    u = function (t, e, i, n) {
                        t._timeline.pause(t._startTime), e && e.apply(n || t._timeline, i || a)
                    },
                    h = a.slice,
                    c = n.prototype = new e;
                return n.version = "1.11.4", c.constructor = n, c.kill()
                    ._gc = !1, c.to = function (t, e, n, s) {
                        return e ? this.add(new i(t, e, n), s) : this.set(t, n, s)
                    }, c.from = function (t, e, n, s) {
                        return this.add(i.from(t, e, n), s)
                    }, c.fromTo = function (t, e, n, s, o) {
                        return e ? this.add(i.fromTo(t, e, n, s), o) : this.set(t, s, o)
                    }, c.staggerTo = function (t, e, s, r, a, u, c, p) {
                        var d, f = new n({
                            onComplete: u,
                            onCompleteParams: c,
                            onCompleteScope: p,
                            smoothChildTiming: this.smoothChildTiming
                        });
                        for ("string" == typeof t && (t = i.selector(t) || t), o(t) && (t = h.call(t, 0)), r = r || 0, d = 0; t.length > d; d++) s.startAt && (s.startAt = l(s.startAt)), f.to(t[d], e, l(s), d * r);
                        return this.add(f, a)
                    }, c.staggerFrom = function (t, e, i, n, s, o, r, a) {
                        return i.immediateRender = 0 != i.immediateRender, i.runBackwards = !0, this.staggerTo(t, e, i, n, s, o, r, a)
                    }, c.staggerFromTo = function (t, e, i, n, s, o, r, a, l) {
                        return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, this.staggerTo(t, e, n, s, o, r, a, l)
                    }, c.call = function (t, e, n, s) {
                        return this.add(i.delayedCall(0, t, e, n), s)
                    }, c.set = function (t, e, n) {
                        return n = this._parseTimeOrLabel(n, 0, !0), null == e.immediateRender && (e.immediateRender = n === this._time && !this._paused), this.add(new i(t, 0, e), n)
                    }, n.exportRoot = function (t, e) {
                        t = t || {}, null == t.smoothChildTiming && (t.smoothChildTiming = !0);
                        var s, o, r = new n(t),
                            a = r._timeline;
                        for (null == e && (e = !0), a._remove(r, !0), r._startTime = 0, r._rawPrevTime = r._time = r._totalTime = a._time, s = a._first; s;) o = s._next, e && s instanceof i && s.target === s.vars.onComplete || r.add(s, s._startTime - s._delay), s = o;
                        return a.add(r, 0), r
                    }, c.add = function (s, o, a, l) {
                        var u, h, c, p, d, f;
                        if ("number" != typeof o && (o = this._parseTimeOrLabel(o, 0, !0, s)), !(s instanceof t)) {
                            if (s instanceof Array || s && s.push && r(s)) {
                                for (a = a || "normal", l = l || 0, u = o, h = s.length, c = 0; h > c; c++) r(p = s[c]) && (p = new n({
                                    tweens: p
                                })), this.add(p, u), "string" != typeof p && "function" != typeof p && ("sequence" === a ? u = p._startTime + p.totalDuration() / p._timeScale : "start" === a && (p._startTime -= p.delay())), u += l;
                                return this._uncache(!0)
                            }
                            if ("string" == typeof s) return this.addLabel(s, o);
                            if ("function" != typeof s) throw "Cannot add " + s + " into the timeline; it is not a tween, timeline, function, or string.";
                            s = i.delayedCall(0, s)
                        }
                        if (e.prototype.add.call(this, s, o), this._gc && !this._paused && this._duration < this.duration())
                            for (d = this, f = d.rawTime() > s._startTime; d._gc && d._timeline;) d._timeline.smoothChildTiming && f ? d.totalTime(d._totalTime, !0) : d._enabled(!0, !1), d = d._timeline;
                        return this
                    }, c.remove = function (e) {
                        if (e instanceof t) return this._remove(e, !1);
                        if (e instanceof Array || e && e.push && r(e)) {
                            for (var i = e.length; --i > -1;) this.remove(e[i]);
                            return this
                        }
                        return "string" == typeof e ? this.removeLabel(e) : this.kill(null, e)
                    }, c._remove = function (t, i) {
                        e.prototype._remove.call(this, t, i);
                        var n = this._last;
                        return n ? this._time > n._startTime + n._totalDuration / n._timeScale && (this._time = this.duration(), this._totalTime = this._totalDuration) : this._time = this._totalTime = 0, this
                    }, c.append = function (t, e) {
                        return this.add(t, this._parseTimeOrLabel(null, e, !0, t))
                    }, c.insert = c.insertMultiple = function (t, e, i, n) {
                        return this.add(t, e || 0, i, n)
                    }, c.appendMultiple = function (t, e, i, n) {
                        return this.add(t, this._parseTimeOrLabel(null, e, !0, t), i, n)
                    }, c.addLabel = function (t, e) {
                        return this._labels[t] = this._parseTimeOrLabel(e), this
                    }, c.addPause = function (t, e, i, n) {
                        return this.call(u, ["{self}", e, i, n], this, t)
                    }, c.removeLabel = function (t) {
                        return delete this._labels[t], this
                    }, c.getLabelTime = function (t) {
                        return null != this._labels[t] ? this._labels[t] : -1
                    }, c._parseTimeOrLabel = function (e, i, n, s) {
                        var o;
                        if (s instanceof t && s.timeline === this) this.remove(s);
                        else if (s && (s instanceof Array || s.push && r(s)))
                            for (o = s.length; --o > -1;) s[o] instanceof t && s[o].timeline === this && this.remove(s[o]);
                        if ("string" == typeof i) return this._parseTimeOrLabel(i, n && "number" == typeof e && null == this._labels[i] ? e - this.duration() : 0, n);
                        if (i = i || 0, "string" != typeof e || !isNaN(e) && null == this._labels[e]) null == e && (e = this.duration());
                        else {
                            if (o = e.indexOf("="), -1 === o) return null == this._labels[e] ? n ? this._labels[e] = this.duration() + i : i : this._labels[e] + i;
                            i = parseInt(e.charAt(o - 1) + "1", 10) * Number(e.substr(o + 1)), e = o > 1 ? this._parseTimeOrLabel(e.substr(0, o - 1), 0, n) : this.duration()
                        }
                        return Number(e) + i
                    }, c.seek = function (t, e) {
                        return this.totalTime("number" == typeof t ? t : this._parseTimeOrLabel(t), e !== !1)
                    }, c.stop = function () {
                        return this.paused(!0)
                    }, c.gotoAndPlay = function (t, e) {
                        return this.play(t, e)
                    }, c.gotoAndStop = function (t, e) {
                        return this.pause(t, e)
                    }, c.render = function (t, e, i) {
                        this._gc && this._enabled(!0, !1);
                        var n, o, r, l, u, h = this._dirty ? this.totalDuration() : this._totalDuration,
                            c = this._time,
                            p = this._startTime,
                            d = this._timeScale,
                            f = this._paused;
                        if (t >= h ? (this._totalTime = this._time = h, this._reversed || this._hasPausedChild() || (o = !0, l = "onComplete", 0 === this._duration && (0 === t || 0 > this._rawPrevTime || this._rawPrevTime === s) && this._rawPrevTime !== t && this._first && (u = !0, this._rawPrevTime > s && (l = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || 0 === this._rawPrevTime ? t : s, t = h + 1e-4) : 1e-7 > t ? (this._totalTime = this._time = 0, (0 !== c || 0 === this._duration && (this._rawPrevTime > s || 0 > t && this._rawPrevTime >= 0)) && (l = "onReverseComplete", o = this._reversed), 0 > t ? (this._active = !1, 0 === this._duration && this._rawPrevTime >= 0 && this._first && (u = !0), this._rawPrevTime = t) : (this._rawPrevTime = this._duration || !e || t || 0 === this._rawPrevTime ? t : s, t = 0, this._initted || (u = !0))) : this._totalTime = this._time = this._rawPrevTime = t, this._time !== c && this._first || i || u) {
                            if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== c && t > 0 && (this._active = !0), 0 === c && this.vars.onStart && 0 !== this._time && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || a)), this._time >= c)
                                for (n = this._first; n && (r = n._next, !this._paused || f);)(n._active || n._startTime <= this._time && !n._paused && !n._gc) && (n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = r;
                            else
                                for (n = this._last; n && (r = n._prev, !this._paused || f);)(n._active || c >= n._startTime && !n._paused && !n._gc) && (n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = r;
                            this._onUpdate && (e || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || a)), l && (this._gc || (p === this._startTime || d !== this._timeScale) && (0 === this._time || h >= this.totalDuration()) && (o && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[l] && this.vars[l].apply(this.vars[l + "Scope"] || this, this.vars[l + "Params"] || a)))
                        }
                    }, c._hasPausedChild = function () {
                        for (var t = this._first; t;) {
                            if (t._paused || t instanceof n && t._hasPausedChild()) return !0;
                            t = t._next
                        }
                        return !1
                    }, c.getChildren = function (t, e, n, s) {
                        s = s || -9999999999;
                        for (var o = [], r = this._first, a = 0; r;) s > r._startTime || (r instanceof i ? e !== !1 && (o[a++] = r) : (n !== !1 && (o[a++] = r), t !== !1 && (o = o.concat(r.getChildren(!0, e, n)), a = o.length))), r = r._next;
                        return o
                    }, c.getTweensOf = function (t, e) {
                        for (var n = i.getTweensOf(t), s = n.length, o = [], r = 0; --s > -1;)(n[s].timeline === this || e && this._contains(n[s])) && (o[r++] = n[s]);
                        return o
                    }, c._contains = function (t) {
                        for (var e = t.timeline; e;) {
                            if (e === this) return !0;
                            e = e.timeline
                        }
                        return !1
                    }, c.shiftChildren = function (t, e, i) {
                        i = i || 0;
                        for (var n, s = this._first, o = this._labels; s;) s._startTime >= i && (s._startTime += t), s = s._next;
                        if (e)
                            for (n in o) o[n] >= i && (o[n] += t);
                        return this._uncache(!0)
                    }, c._kill = function (t, e) {
                        if (!t && !e) return this._enabled(!1, !1);
                        for (var i = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1), n = i.length, s = !1; --n > -1;) i[n]._kill(t, e) && (s = !0);
                        return s
                    }, c.clear = function (t) {
                        var e = this.getChildren(!1, !0, !0),
                            i = e.length;
                        for (this._time = this._totalTime = 0; --i > -1;) e[i]._enabled(!1, !1);
                        return t !== !1 && (this._labels = {}), this._uncache(!0)
                    }, c.invalidate = function () {
                        for (var t = this._first; t;) t.invalidate(), t = t._next;
                        return this
                    }, c._enabled = function (t, i) {
                        if (t === this._gc)
                            for (var n = this._first; n;) n._enabled(t, !0), n = n._next;
                        return e.prototype._enabled.call(this, t, i)
                    }, c.duration = function (t) {
                        return arguments.length ? (0 !== this.duration() && 0 !== t && this.timeScale(this._duration / t), this) : (this._dirty && this.totalDuration(), this._duration)
                    }, c.totalDuration = function (t) {
                        if (!arguments.length) {
                            if (this._dirty) {
                                for (var e, i, n = 0, s = this._last, o = 999999999999; s;) e = s._prev, s._dirty && s.totalDuration(), s._startTime > o && this._sortChildren && !s._paused ? this.add(s, s._startTime - s._delay) : o = s._startTime, 0 > s._startTime && !s._paused && (n -= s._startTime, this._timeline.smoothChildTiming && (this._startTime += s._startTime / this._timeScale), this.shiftChildren(-s._startTime, !1, -9999999999), o = 0), i = s._startTime + s._totalDuration / s._timeScale, i > n && (n = i), s = e;
                                this._duration = this._totalDuration = n, this._dirty = !1
                            }
                            return this._totalDuration
                        }
                        return 0 !== this.totalDuration() && 0 !== t && this.timeScale(this._totalDuration / t), this
                    }, c.usesFrames = function () {
                        for (var e = this._timeline; e._timeline;) e = e._timeline;
                        return e === t._rootFramesTimeline
                    }, c.rawTime = function () {
                        return this._paused ? this._totalTime : (this._timeline.rawTime() - this._startTime) * this._timeScale
                    }, n
            }, !0), window._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function (t, e, i) {
                var n = function (e) {
                        t.call(this, e), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._dirty = !0
                    },
                    s = 1e-10,
                    o = [],
                    r = new i(null, null, 1, 0),
                    a = n.prototype = new t;
                return a.constructor = n, a.kill()
                    ._gc = !1, n.version = "1.11.4", a.invalidate = function () {
                        return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), t.prototype.invalidate.call(this)
                    }, a.addCallback = function (t, i, n, s) {
                        return this.add(e.delayedCall(0, t, n, s), i)
                    }, a.removeCallback = function (t, e) {
                        if (t)
                            if (null == e) this._kill(null, t);
                            else
                                for (var i = this.getTweensOf(t, !1), n = i.length, s = this._parseTimeOrLabel(e); --n > -1;) i[n]._startTime === s && i[n]._enabled(!1, !1);
                        return this
                    }, a.tweenTo = function (t, i) {
                        i = i || {};
                        var n, s, a, l = {
                            ease: r,
                            overwrite: 2,
                            useFrames: this.usesFrames(),
                            immediateRender: !1
                        };
                        for (s in i) l[s] = i[s];
                        return l.time = this._parseTimeOrLabel(t), n = Math.abs(Number(l.time) - this._time) / this._timeScale || .001, a = new e(this, n, l), l.onStart = function () {
                            a.target.paused(!0), a.vars.time !== a.target.time() && n === a.duration() && a.duration(Math.abs(a.vars.time - a.target.time()) / a.target._timeScale), i.onStart && i.onStart.apply(i.onStartScope || a, i.onStartParams || o)
                        }, a
                    }, a.tweenFromTo = function (t, e, i) {
                        i = i || {}, t = this._parseTimeOrLabel(t), i.startAt = {
                            onComplete: this.seek,
                            onCompleteParams: [t],
                            onCompleteScope: this
                        }, i.immediateRender = i.immediateRender !== !1;
                        var n = this.tweenTo(e, i);
                        return n.duration(Math.abs(n.vars.time - t) / this._timeScale || .001)
                    }, a.render = function (t, e, i) {
                        this._gc && this._enabled(!0, !1);
                        var n, r, a, l, u, h, c = this._dirty ? this.totalDuration() : this._totalDuration,
                            p = this._duration,
                            d = this._time,
                            f = this._totalTime,
                            m = this._startTime,
                            g = this._timeScale,
                            v = this._rawPrevTime,
                            y = this._paused,
                            _ = this._cycle;
                        if (t >= c ? (this._locked || (this._totalTime = c, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (r = !0, l = "onComplete", 0 === this._duration && (0 === t || 0 > v || v === s) && v !== t && this._first && (u = !0, v > s && (l = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || 0 === this._rawPrevTime ? t : s, this._yoyo && 0 !== (1 & this._cycle) ? this._time = t = 0 : (this._time = p, t = p + 1e-4)) : 1e-7 > t ? (this._locked || (this._totalTime = this._cycle = 0), this._time = 0, (0 !== d || 0 === p && (v > s || 0 > t && v >= 0) && !this._locked) && (l = "onReverseComplete", r = this._reversed), 0 > t ? (this._active = !1, 0 === p && v >= 0 && this._first && (u = !0), this._rawPrevTime = t) : (this._rawPrevTime = p || !e || t || 0 === this._rawPrevTime ? t : s, t = 0, this._initted || (u = !0))) : (0 === p && 0 > v && (u = !0), this._time = this._rawPrevTime = t, this._locked || (this._totalTime = t, 0 !== this._repeat && (h = p + this._repeatDelay, this._cycle = this._totalTime / h >> 0, 0 !== this._cycle && this._cycle === this._totalTime / h && this._cycle--, this._time = this._totalTime - this._cycle * h, this._yoyo && 0 !== (1 & this._cycle) && (this._time = p - this._time), this._time > p ? (this._time = p, t = p + 1e-4) : 0 > this._time ? this._time = t = 0 : t = this._time))), this._cycle !== _ && !this._locked) {
                            var x = this._yoyo && 0 !== (1 & _),
                                b = x === (this._yoyo && 0 !== (1 & this._cycle)),
                                w = this._totalTime,
                                T = this._cycle,
                                M = this._rawPrevTime,
                                S = this._time;
                            if (this._totalTime = _ * p, _ > this._cycle ? x = !x : this._totalTime += p, this._time = d, this._rawPrevTime = 0 === p ? v - 1e-4 : v, this._cycle = _, this._locked = !0, d = x ? 0 : p, this.render(d, e, 0 === p), e || this._gc || this.vars.onRepeat && this.vars.onRepeat.apply(this.vars.onRepeatScope || this, this.vars.onRepeatParams || o), b && (d = x ? p + 1e-4 : -1e-4, this.render(d, !0, !1)), this._locked = !1, this._paused && !y) return;
                            this._time = S, this._totalTime = w, this._cycle = T, this._rawPrevTime = M
                        }
                        if (!(this._time !== d && this._first || i || u)) return void(f !== this._totalTime && this._onUpdate && (e || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || o)));
                        if (this._initted || (this._initted = !0), this._active || !this._paused && this._totalTime !== f && t > 0 && (this._active = !0), 0 === f && this.vars.onStart && 0 !== this._totalTime && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || o)), this._time >= d)
                            for (n = this._first; n && (a = n._next, !this._paused || y);)(n._active || n._startTime <= this._time && !n._paused && !n._gc) && (n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = a;
                        else
                            for (n = this._last; n && (a = n._prev, !this._paused || y);)(n._active || d >= n._startTime && !n._paused && !n._gc) && (n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = a;
                        this._onUpdate && (e || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || o)), l && (this._locked || this._gc || (m === this._startTime || g !== this._timeScale) && (0 === this._time || c >= this.totalDuration()) && (r && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[l] && this.vars[l].apply(this.vars[l + "Scope"] || this, this.vars[l + "Params"] || o)))
                    }, a.getActive = function (t, e, i) {
                        null == t && (t = !0), null == e && (e = !0), null == i && (i = !1);
                        var n, s, o = [],
                            r = this.getChildren(t, e, i),
                            a = 0,
                            l = r.length;
                        for (n = 0; l > n; n++) s = r[n], s.isActive() && (o[a++] = s);
                        return o
                    }, a.getLabelAfter = function (t) {
                        t || 0 !== t && (t = this._time);
                        var e, i = this.getLabelsArray(),
                            n = i.length;
                        for (e = 0; n > e; e++)
                            if (i[e].time > t) return i[e].name;
                        return null
                    }, a.getLabelBefore = function (t) {
                        null == t && (t = this._time);
                        for (var e = this.getLabelsArray(), i = e.length; --i > -1;)
                            if (t > e[i].time) return e[i].name;
                        return null
                    }, a.getLabelsArray = function () {
                        var t, e = [],
                            i = 0;
                        for (t in this._labels) e[i++] = {
                            time: this._labels[t],
                            name: t
                        };
                        return e.sort(function (t, e) {
                            return t.time - e.time
                        }), e
                    }, a.progress = function (t) {
                        return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), !1) : this._time / this.duration()
                    }, a.totalProgress = function (t) {
                        return arguments.length ? this.totalTime(this.totalDuration() * t, !1) : this._totalTime / this.totalDuration()
                    }, a.totalDuration = function (e) {
                        return arguments.length ? -1 === this._repeat ? this : this.duration((e - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (t.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration)
                    }, a.time = function (t, e) {
                        return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
                    }, a.repeat = function (t) {
                        return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
                    }, a.repeatDelay = function (t) {
                        return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
                    }, a.yoyo = function (t) {
                        return arguments.length ? (this._yoyo = t, this) : this._yoyo
                    }, a.currentLabel = function (t) {
                        return arguments.length ? this.seek(t, !0) : this.getLabelBefore(this._time + 1e-8)
                    }, n
            }, !0),
            function () {
                var t = 180 / Math.PI,
                    e = [],
                    i = [],
                    n = [],
                    s = {},
                    o = function (t, e, i, n) {
                        this.a = t, this.b = e, this.c = i, this.d = n, this.da = n - t, this.ca = i - t, this.ba = e - t
                    },
                    r = ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",
                    a = function (t, e, i, n) {
                        var s = {
                                a: t
                            },
                            o = {},
                            r = {},
                            a = {
                                c: n
                            },
                            l = (t + e) / 2,
                            u = (e + i) / 2,
                            h = (i + n) / 2,
                            c = (l + u) / 2,
                            p = (u + h) / 2,
                            d = (p - c) / 8;
                        return s.b = l + (t - l) / 4, o.b = c + d, s.c = o.a = (s.b + o.b) / 2, o.c = r.a = (c + p) / 2, r.b = p - d, a.b = h + (n - h) / 4, r.c = a.a = (r.b + a.b) / 2, [s, o, r, a]
                    },
                    l = function (t, s, o, r, l) {
                        var u, h, c, p, d, f, m, g, v, y, _, x, b, w = t.length - 1,
                            T = 0,
                            M = t[0].a;
                        for (u = 0; w > u; u++) d = t[T], h = d.a, c = d.d, p = t[T + 1].d, l ? (_ = e[u], x = i[u], b = .25 * (x + _) * s / (r ? .5 : n[u] || .5), f = c - (c - h) * (r ? .5 * s : 0 !== _ ? b / _ : 0), m = c + (p - c) * (r ? .5 * s : 0 !== x ? b / x : 0), g = c - (f + ((m - f) * (3 * _ / (_ + x) + .5) / 4 || 0))) : (f = c - .5 * (c - h) * s, m = c + .5 * (p - c) * s, g = c - (f + m) / 2), f += g, m += g, d.c = v = f, d.b = 0 !== u ? M : M = d.a + .6 * (d.c - d.a), d.da = c - h, d.ca = v - h, d.ba = M - h, o ? (y = a(h, M, v, c), t.splice(T, 1, y[0], y[1], y[2], y[3]), T += 4) : T++, M = m;
                        d = t[T], d.b = M, d.c = M + .4 * (d.d - M), d.da = d.d - d.a, d.ca = d.c - d.a, d.ba = M - d.a, o && (y = a(d.a, M, d.c, d.d), t.splice(T, 1, y[0], y[1], y[2], y[3]))
                    },
                    u = function (t, n, s, r) {
                        var a, l, u, h, c, p, d = [];
                        if (r)
                            for (t = [r].concat(t), l = t.length; --l > -1;) "string" == typeof (p = t[l][n]) && "=" === p.charAt(1) && (t[l][n] = r[n] + Number(p.charAt(0) + p.substr(2)));
                        if (a = t.length - 2, 0 > a) return d[0] = new o(t[0][n], 0, 0, t[-1 > a ? 0 : 1][n]), d;
                        for (l = 0; a > l; l++) u = t[l][n], h = t[l + 1][n], d[l] = new o(u, 0, 0, h), s && (c = t[l + 2][n], e[l] = (e[l] || 0) + (h - u) * (h - u), i[l] = (i[l] || 0) + (c - h) * (c - h));
                        return d[l] = new o(t[l][n], 0, 0, t[l + 1][n]), d
                    },
                    h = function (t, o, a, h, c, p) {
                        var d, f, m, g, v, y, _, x, b = {},
                            w = [],
                            T = p || t[0];
                        c = "string" == typeof c ? "," + c + "," : r, null == o && (o = 1);
                        for (f in t[0]) w.push(f);
                        if (t.length > 1) {
                            for (x = t[t.length - 1], _ = !0, d = w.length; --d > -1;)
                                if (f = w[d], Math.abs(T[f] - x[f]) > .05) {
                                    _ = !1;
                                    break
                                }
                            _ && (t = t.concat(), p && t.unshift(p), t.push(t[1]), p = t[t.length - 3])
                        }
                        for (e.length = i.length = n.length = 0, d = w.length; --d > -1;) f = w[d], s[f] = -1 !== c.indexOf("," + f + ","), b[f] = u(t, f, s[f], p);
                        for (d = e.length; --d > -1;) e[d] = Math.sqrt(e[d]), i[d] = Math.sqrt(i[d]);
                        if (!h) {
                            for (d = w.length; --d > -1;)
                                if (s[f])
                                    for (m = b[w[d]], y = m.length - 1, g = 0; y > g; g++) v = m[g + 1].da / i[g] + m[g].da / e[g], n[g] = (n[g] || 0) + v * v;
                            for (d = n.length; --d > -1;) n[d] = Math.sqrt(n[d])
                        }
                        for (d = w.length, g = a ? 4 : 1; --d > -1;) f = w[d], m = b[f], l(m, o, a, h, s[f]), _ && (m.splice(0, g), m.splice(m.length - g, g));
                        return b
                    },
                    c = function (t, e, i) {
                        e = e || "soft";
                        var n, s, r, a, l, u, h, c, p, d, f, m = {},
                            g = "cubic" === e ? 3 : 2,
                            v = "soft" === e,
                            y = [];
                        if (v && i && (t = [i].concat(t)), null == t || g + 1 > t.length) throw "invalid Bezier data";
                        for (p in t[0]) y.push(p);
                        for (u = y.length; --u > -1;) {
                            for (p = y[u], m[p] = l = [], d = 0, c = t.length, h = 0; c > h; h++) n = null == i ? t[h][p] : "string" == typeof (f = t[h][p]) && "=" === f.charAt(1) ? i[p] + Number(f.charAt(0) + f.substr(2)) : Number(f), v && h > 1 && c - 1 > h && (l[d++] = (n + l[d - 2]) / 2), l[d++] = n;
                            for (c = d - g + 1, d = 0, h = 0; c > h; h += g) n = l[h], s = l[h + 1], r = l[h + 2], a = 2 === g ? 0 : l[h + 3], l[d++] = f = 3 === g ? new o(n, s, r, a) : new o(n, (2 * s + n) / 3, (2 * s + r) / 3, r);
                            l.length = d
                        }
                        return m
                    },
                    p = function (t, e, i) {
                        for (var n, s, o, r, a, l, u, h, c, p, d, f = 1 / i, m = t.length; --m > -1;)
                            for (p = t[m], o = p.a, r = p.d - o, a = p.c - o, l = p.b - o, n = s = 0, h = 1; i >= h; h++) u = f * h, c = 1 - u, n = s - (s = (u * u * r + 3 * c * (u * a + c * l)) * u), d = m * i + h - 1, e[d] = (e[d] || 0) + n * n
                    },
                    d = function (t, e) {
                        e = e >> 0 || 6;
                        var i, n, s, o, r = [],
                            a = [],
                            l = 0,
                            u = 0,
                            h = e - 1,
                            c = [],
                            d = [];
                        for (i in t) p(t[i], r, e);
                        for (s = r.length, n = 0; s > n; n++) l += Math.sqrt(r[n]), o = n % e, d[o] = l, o === h && (u += l, o = n / e >> 0, c[o] = d, a[o] = u, l = 0, d = []);
                        return {
                            length: u,
                            lengths: a,
                            segments: c
                        }
                    },
                    f = window._gsDefine.plugin({
                        propName: "bezier",
                        priority: -1,
                        API: 2,
                        global: !0,
                        init: function (t, e, i) {
                            this._target = t, e instanceof Array && (e = {
                                values: e
                            }), this._func = {}, this._round = {}, this._props = [], this._timeRes = null == e.timeResolution ? 6 : parseInt(e.timeResolution, 10);
                            var n, s, o, r, a, l = e.values || [],
                                u = {},
                                p = l[0],
                                f = e.autoRotate || i.vars.orientToBezier;
                            this._autoRotate = f ? f instanceof Array ? f : [
                                ["x", "y", "rotation", f === !0 ? 0 : Number(f) || 0]
                            ] : null;
                            for (n in p) this._props.push(n);
                            for (o = this._props.length; --o > -1;) n = this._props[o], this._overwriteProps.push(n), s = this._func[n] = "function" == typeof t[n], u[n] = s ? t[n.indexOf("set") || "function" != typeof t["get" + n.substr(3)] ? n : "get" + n.substr(3)]() : parseFloat(t[n]), a || u[n] !== l[0][n] && (a = u);
                            if (this._beziers = "cubic" !== e.type && "quadratic" !== e.type && "soft" !== e.type ? h(l, isNaN(e.curviness) ? 1 : e.curviness, !1, "thruBasic" === e.type, e.correlate, a) : c(l, e.type, u), this._segCount = this._beziers[n].length, this._timeRes) {
                                var m = d(this._beziers, this._timeRes);
                                this._length = m.length, this._lengths = m.lengths, this._segments = m.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length
                            }
                            if (f = this._autoRotate)
                                for (f[0] instanceof Array || (this._autoRotate = f = [f]), o = f.length; --o > -1;)
                                    for (r = 0; 3 > r; r++) n = f[o][r], this._func[n] = "function" == typeof t[n] ? t[n.indexOf("set") || "function" != typeof t["get" + n.substr(3)] ? n : "get" + n.substr(3)] : !1;
                            return !0
                        },
                        set: function (e) {
                            var i, n, s, o, r, a, l, u, h, c, p = this._segCount,
                                d = this._func,
                                f = this._target;
                            if (this._timeRes) {
                                if (h = this._lengths, c = this._curSeg, e *= this._length, s = this._li, e > this._l2 && p - 1 > s) {
                                    for (u = p - 1; u > s && e >= (this._l2 = h[++s]););
                                    this._l1 = h[s - 1], this._li = s, this._curSeg = c = this._segments[s], this._s2 = c[this._s1 = this._si = 0]
                                } else if (this._l1 > e && s > 0) {
                                    for (; s > 0 && (this._l1 = h[--s]) >= e;);
                                    0 === s && this._l1 > e ? this._l1 = 0 : s++, this._l2 = h[s], this._li = s, this._curSeg = c = this._segments[s], this._s1 = c[(this._si = c.length - 1) - 1] || 0, this._s2 = c[this._si]
                                }
                                if (i = s, e -= this._l1, s = this._si, e > this._s2 && c.length - 1 > s) {
                                    for (u = c.length - 1; u > s && e >= (this._s2 = c[++s]););
                                    this._s1 = c[s - 1], this._si = s
                                } else if (this._s1 > e && s > 0) {
                                    for (; s > 0 && (this._s1 = c[--s]) >= e;);
                                    0 === s && this._s1 > e ? this._s1 = 0 : s++, this._s2 = c[s], this._si = s
                                }
                                a = (s + (e - this._s1) / (this._s2 - this._s1)) * this._prec
                            } else i = 0 > e ? 0 : e >= 1 ? p - 1 : p * e >> 0, a = (e - i * (1 / p)) * p;
                            for (n = 1 - a, s = this._props.length; --s > -1;) o = this._props[s], r = this._beziers[o][i], l = (a * a * r.da + 3 * n * (a * r.ca + n * r.ba)) * a + r.a, this._round[o] && (l = l + (l > 0 ? .5 : -.5) >> 0), d[o] ? f[o](l) : f[o] = l;
                            if (this._autoRotate) {
                                var m, g, v, y, _, x, b, w = this._autoRotate;
                                for (s = w.length; --s > -1;) o = w[s][2], x = w[s][3] || 0, b = w[s][4] === !0 ? 1 : t, r = this._beziers[w[s][0]], m = this._beziers[w[s][1]], r && m && (r = r[i], m = m[i], g = r.a + (r.b - r.a) * a, y = r.b + (r.c - r.b) * a, g += (y - g) * a, y += (r.c + (r.d - r.c) * a - y) * a, v = m.a + (m.b - m.a) * a, _ = m.b + (m.c - m.b) * a, v += (_ - v) * a, _ += (m.c + (m.d - m.c) * a - _) * a, l = Math.atan2(_ - v, y - g) * b + x, d[o] ? f[o](l) : f[o] = l)
                            }
                        }
                    }),
                    m = f.prototype;
                f.bezierThrough = h, f.cubicToQuadratic = a, f._autoCSS = !0, f.quadraticToCubic = function (t, e, i) {
                    return new o(t, (2 * e + t) / 3, (2 * e + i) / 3, i)
                }, f._cssRegister = function () {
                    var t = window._gsDefine.globals.CSSPlugin;
                    if (t) {
                        var e = t._internals,
                            i = e._parseToProxy,
                            n = e._setPluginRatio,
                            s = e.CSSPropTween;
                        e._registerComplexSpecialProp("bezier", {
                            parser: function (t, e, o, r, a, l) {
                                e instanceof Array && (e = {
                                    values: e
                                }), l = new f;
                                var u, h, c, p = e.values,
                                    d = p.length - 1,
                                    m = [],
                                    g = {};
                                if (0 > d) return a;
                                for (u = 0; d >= u; u++) c = i(t, p[u], r, a, l, d !== u), m[u] = c.end;
                                for (h in e) g[h] = e[h];
                                return g.values = m, a = new s(t, "bezier", 0, 0, c.pt, 2), a.data = c, a.plugin = l, a.setRatio = n, 0 === g.autoRotate && (g.autoRotate = !0), !g.autoRotate || g.autoRotate instanceof Array || (u = g.autoRotate === !0 ? 0 : Number(g.autoRotate), g.autoRotate = null != c.end.left ? [
                                    ["left", "top", "rotation", u, !1]
                                ] : null != c.end.x ? [
                                    ["x", "y", "rotation", u, !1]
                                ] : !1), g.autoRotate && (r._transform || r._enableTransforms(!1), c.autoRotate = r._target._gsTransform), l._onInitTween(c.proxy, g, r._tween), a
                            }
                        })
                    }
                }, m._roundProps = function (t, e) {
                    for (var i = this._overwriteProps, n = i.length; --n > -1;)(t[i[n]] || t.bezier || t.bezierThrough) && (this._round[i[n]] = e)
                }, m._kill = function (t) {
                    var e, i, n = this._props;
                    for (e in this._beziers)
                        if (e in t)
                            for (delete this._beziers[e], delete this._func[e], i = n.length; --i > -1;) n[i] === e && n.splice(i, 1);
                    return this._super._kill.call(this, t)
                }
            }(), window._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function (t, e) {
                var i, n, s, o, r = function () {
                        t.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = r.prototype.setRatio
                    },
                    a = {},
                    l = r.prototype = new t("css");
                l.constructor = r, r.version = "1.11.4", r.API = 2, r.defaultTransformPerspective = 0, l = "px", r.suffixMap = {
                    top: l,
                    right: l,
                    bottom: l,
                    left: l,
                    width: l,
                    height: l,
                    fontSize: l,
                    padding: l,
                    margin: l,
                    perspective: l,
                    lineHeight: ""
                };
                var u, h, c, p, d, f, m = /(?:\d|\-\d|\.\d|\-\.\d)+/g,
                    g = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
                    v = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
                    y = /[^\d\-\.]/g,
                    _ = /(?:\d|\-|\+|=|#|\.)*/g,
                    x = /opacity *= *([^)]*)/,
                    b = /opacity:([^;]*)/,
                    w = /alpha\(opacity *=.+?\)/i,
                    T = /^(rgb|hsl)/,
                    M = /([A-Z])/g,
                    S = /-([a-z])/gi,
                    C = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
                    A = function (t, e) {
                        return e.toUpperCase()
                    },
                    E = /(?:Left|Right|Width)/i,
                    k = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
                    O = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
                    L = /,(?=[^\)]*(?:\(|$))/gi,
                    I = Math.PI / 180,
                    P = 180 / Math.PI,
                    H = {},
                    N = document,
                    F = N.createElement("div"),
                    D = N.createElement("img"),
                    R = r._internals = {
                        _specialProps: a
                    },
                    B = navigator.userAgent,
                    z = function () {
                        var t, e = B.indexOf("Android"),
                            i = N.createElement("div");
                        return c = -1 !== B.indexOf("Safari") && -1 === B.indexOf("Chrome") && (-1 === e || Number(B.substr(e + 8, 1)) > 3), d = c && 6 > Number(B.substr(B.indexOf("Version/") + 8, 1)), p = -1 !== B.indexOf("Firefox"), /MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(B) && (f = parseFloat(RegExp.$1)), i.innerHTML = "<a style='top:1px;opacity:.55;'>a</a>", t = i.getElementsByTagName("a")[0], t ? /^0.55/.test(t.style.opacity) : !1
                    }(),
                    j = function (t) {
                        return x.test("string" == typeof t ? t : (t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
                    },
                    q = function (t) {
                        window.console && console.log(t)
                    },
                    X = "",
                    U = "",
                    V = function (t, e) {
                        e = e || F;
                        var i, n, s = e.style;
                        if (void 0 !== s[t]) return t;
                        for (t = t.charAt(0)
                            .toUpperCase() + t.substr(1), i = ["O", "Moz", "ms", "Ms", "Webkit"], n = 5; --n > -1 && void 0 === s[i[n] + t];);
                        return n >= 0 ? (U = 3 === n ? "ms" : i[n], X = "-" + U.toLowerCase() + "-", U + t) : null
                    },
                    W = N.defaultView ? N.defaultView.getComputedStyle : function () {},
                    Y = r.getStyle = function (t, e, i, n, s) {
                        var o;
                        return z || "opacity" !== e ? (!n && t.style[e] ? o = t.style[e] : (i = i || W(t, null)) ? (t = i.getPropertyValue(e.replace(M, "-$1")
                            .toLowerCase()), o = t || i.length ? t : i[e]) : t.currentStyle && (o = t.currentStyle[e]), null == s || o && "none" !== o && "auto" !== o && "auto auto" !== o ? o : s) : j(t)
                    },
                    $ = function (t, e, i, n, s) {
                        if ("px" === n || !n) return i;
                        if ("auto" === n || !i) return 0;
                        var o, r = E.test(e),
                            a = t,
                            l = F.style,
                            u = 0 > i;
                        return u && (i = -i), "%" === n && -1 !== e.indexOf("border") ? o = i / 100 * (r ? t.clientWidth : t.clientHeight) : (l.cssText = "border:0 solid red;position:" + Y(t, "position") + ";line-height:0;", "%" !== n && a.appendChild ? l[r ? "borderLeftWidth" : "borderTopWidth"] = i + n : (a = t.parentNode || N.body, l[r ? "width" : "height"] = i + n), a.appendChild(F), o = parseFloat(F[r ? "offsetWidth" : "offsetHeight"]), a.removeChild(F), 0 !== o || s || (o = $(t, e, i, n, !0))), u ? -o : o
                    },
                    Q = function (t, e, i) {
                        if ("absolute" !== Y(t, "position", i)) return 0;
                        var n = "left" === e ? "Left" : "Top",
                            s = Y(t, "margin" + n, i);
                        return t["offset" + n] - ($(t, e, parseFloat(s), s.replace(_, "")) || 0)
                    },
                    G = function (t, e) {
                        var i, n, s = {};
                        if (e = e || W(t, null))
                            if (i = e.length)
                                for (; --i > -1;) s[e[i].replace(S, A)] = e.getPropertyValue(e[i]);
                            else
                                for (i in e) s[i] = e[i];
                        else if (e = t.currentStyle || t.style)
                            for (i in e) "string" == typeof i && void 0 !== s[i] && (s[i.replace(S, A)] = e[i]);
                        return z || (s.opacity = j(t)), n = Te(t, e, !1), s.rotation = n.rotation, s.skewX = n.skewX, s.scaleX = n.scaleX, s.scaleY = n.scaleY, s.x = n.x, s.y = n.y, we && (s.z = n.z, s.rotationX = n.rotationX, s.rotationY = n.rotationY, s.scaleZ = n.scaleZ), s.filters && delete s.filters, s
                    },
                    Z = function (t, e, i, n, s) {
                        var o, r, a, l = {},
                            u = t.style;
                        for (r in i) "cssText" !== r && "length" !== r && isNaN(r) && (e[r] !== (o = i[r]) || s && s[r]) && -1 === r.indexOf("Origin") && ("number" == typeof o || "string" == typeof o) && (l[r] = "auto" !== o || "left" !== r && "top" !== r ? "" !== o && "auto" !== o && "none" !== o || "string" != typeof e[r] || "" === e[r].replace(y, "") ? o : 0 : Q(t, r), void 0 !== u[r] && (a = new ce(u, r, u[r], a)));
                        if (n)
                            for (r in n) "className" !== r && (l[r] = n[r]);
                        return {
                            difs: l,
                            firstMPT: a
                        }
                    },
                    J = {
                        width: ["Left", "Right"],
                        height: ["Top", "Bottom"]
                    },
                    K = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
                    te = function (t, e, i) {
                        var n = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight),
                            s = J[e],
                            o = s.length;
                        for (i = i || W(t, null); --o > -1;) n -= parseFloat(Y(t, "padding" + s[o], i, !0)) || 0, n -= parseFloat(Y(t, "border" + s[o] + "Width", i, !0)) || 0;
                        return n
                    },
                    ee = function (t, e) {
                        (null == t || "" === t || "auto" === t || "auto auto" === t) && (t = "0 0");
                        var i = t.split(" "),
                            n = -1 !== t.indexOf("left") ? "0%" : -1 !== t.indexOf("right") ? "100%" : i[0],
                            s = -1 !== t.indexOf("top") ? "0%" : -1 !== t.indexOf("bottom") ? "100%" : i[1];
                        return null == s ? s = "0" : "center" === s && (s = "50%"), ("center" === n || isNaN(parseFloat(n)) && -1 === (n + "")
                            .indexOf("=")) && (n = "50%"), e && (e.oxp = -1 !== n.indexOf("%"), e.oyp = -1 !== s.indexOf("%"), e.oxr = "=" === n.charAt(1), e.oyr = "=" === s.charAt(1), e.ox = parseFloat(n.replace(y, "")), e.oy = parseFloat(s.replace(y, ""))), n + " " + s + (i.length > 2 ? " " + i[2] : "")
                    },
                    ie = function (t, e) {
                        return "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e)
                    },
                    ne = function (t, e) {
                        return null == t ? e : "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * Number(t.substr(2)) + e : parseFloat(t)
                    },
                    se = function (t, e, i, n) {
                        var s, o, r, a, l = 1e-6;
                        return null == t ? a = e : "number" == typeof t ? a = t : (s = 360, o = t.split("_"), r = Number(o[0].replace(y, "")) * (-1 === t.indexOf("rad") ? 1 : P) - ("=" === t.charAt(1) ? 0 : e), o.length && (n && (n[i] = e + r), -1 !== t.indexOf("short") && (r %= s, r !== r % (s / 2) && (r = 0 > r ? r + s : r - s)), -1 !== t.indexOf("_cw") && 0 > r ? r = (r + 9999999999 * s) % s - (0 | r / s) * s : -1 !== t.indexOf("ccw") && r > 0 && (r = (r - 9999999999 * s) % s - (0 | r / s) * s)), a = e + r), l > a && a > -l && (a = 0), a
                    },
                    oe = {
                        aqua: [0, 255, 255],
                        lime: [0, 255, 0],
                        silver: [192, 192, 192],
                        black: [0, 0, 0],
                        maroon: [128, 0, 0],
                        teal: [0, 128, 128],
                        blue: [0, 0, 255],
                        navy: [0, 0, 128],
                        white: [255, 255, 255],
                        fuchsia: [255, 0, 255],
                        olive: [128, 128, 0],
                        yellow: [255, 255, 0],
                        orange: [255, 165, 0],
                        gray: [128, 128, 128],
                        purple: [128, 0, 128],
                        green: [0, 128, 0],
                        red: [255, 0, 0],
                        pink: [255, 192, 203],
                        cyan: [0, 255, 255],
                        transparent: [255, 255, 255, 0]
                    },
                    re = function (t, e, i) {
                        return t = 0 > t ? t + 1 : t > 1 ? t - 1 : t, 0 | 255 * (1 > 6 * t ? e + 6 * (i - e) * t : .5 > t ? i : 2 > 3 * t ? e + 6 * (i - e) * (2 / 3 - t) : e) + .5
                    },
                    ae = function (t) {
                        var e, i, n, s, o, r;
                        return t && "" !== t ? "number" == typeof t ? [t >> 16, 255 & t >> 8, 255 & t] : ("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)), oe[t] ? oe[t] : "#" === t.charAt(0) ? (4 === t.length && (e = t.charAt(1), i = t.charAt(2), n = t.charAt(3), t = "#" + e + e + i + i + n + n), t = parseInt(t.substr(1), 16), [t >> 16, 255 & t >> 8, 255 & t]) : "hsl" === t.substr(0, 3) ? (t = t.match(m), s = Number(t[0]) % 360 / 360, o = Number(t[1]) / 100, r = Number(t[2]) / 100, i = .5 >= r ? r * (o + 1) : r + o - r * o, e = 2 * r - i, t.length > 3 && (t[3] = Number(t[3])), t[0] = re(s + 1 / 3, e, i), t[1] = re(s, e, i), t[2] = re(s - 1 / 3, e, i), t) : (t = t.match(m) || oe.transparent, t[0] = Number(t[0]), t[1] = Number(t[1]), t[2] = Number(t[2]), t.length > 3 && (t[3] = Number(t[3])), t)) : oe.black
                    },
                    le = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";
                for (l in oe) le += "|" + l + "\\b";
                le = RegExp(le + ")", "gi");
                var ue = function (t, e, i, n) {
                        if (null == t) return function (t) {
                            return t
                        };
                        var s, o = e ? (t.match(le) || [""])[0] : "",
                            r = t.split(o)
                            .join("")
                            .match(v) || [],
                            a = t.substr(0, t.indexOf(r[0])),
                            l = ")" === t.charAt(t.length - 1) ? ")" : "",
                            u = -1 !== t.indexOf(" ") ? " " : ",",
                            h = r.length,
                            c = h > 0 ? r[0].replace(m, "") : "";
                        return h ? s = e ? function (t) {
                            var e, p, d, f;
                            if ("number" == typeof t) t += c;
                            else if (n && L.test(t)) {
                                for (f = t.replace(L, "|")
                                    .split("|"), d = 0; f.length > d; d++) f[d] = s(f[d]);
                                return f.join(",")
                            }
                            if (e = (t.match(le) || [o])[0], p = t.split(e)
                                .join("")
                                .match(v) || [], d = p.length, h > d--)
                                for (; h > ++d;) p[d] = i ? p[0 | (d - 1) / 2] : r[d];
                            return a + p.join(u) + u + e + l + (-1 !== t.indexOf("inset") ? " inset" : "")
                        } : function (t) {
                            var e, o, p;
                            if ("number" == typeof t) t += c;
                            else if (n && L.test(t)) {
                                for (o = t.replace(L, "|")
                                    .split("|"), p = 0; o.length > p; p++) o[p] = s(o[p]);
                                return o.join(",")
                            }
                            if (e = t.match(v) || [], p = e.length, h > p--)
                                for (; h > ++p;) e[p] = i ? e[0 | (p - 1) / 2] : r[p];
                            return a + e.join(u) + l
                        } : function (t) {
                            return t
                        }
                    },
                    he = function (t) {
                        return t = t.split(","),
                            function (e, i, n, s, o, r, a) {
                                var l, u = (i + "")
                                    .split(" ");
                                for (a = {}, l = 0; 4 > l; l++) a[t[l]] = u[l] = u[l] || u[(l - 1) / 2 >> 0];
                                return s.parse(e, a, o, r)
                            }
                    },
                    ce = (R._setPluginRatio = function (t) {
                        this.plugin.setRatio(t);
                        for (var e, i, n, s, o = this.data, r = o.proxy, a = o.firstMPT, l = 1e-6; a;) e = r[a.v], a.r ? e = e > 0 ? 0 | e + .5 : 0 | e - .5 : l > e && e > -l && (e = 0), a.t[a.p] = e, a = a._next;
                        if (o.autoRotate && (o.autoRotate.rotation = r.rotation), 1 === t)
                            for (a = o.firstMPT; a;) {
                                if (i = a.t, i.type) {
                                    if (1 === i.type) {
                                        for (s = i.xs0 + i.s + i.xs1, n = 1; i.l > n; n++) s += i["xn" + n] + i["xs" + (n + 1)];
                                        i.e = s
                                    }
                                } else i.e = i.s + i.xs0;
                                a = a._next
                            }
                    }, function (t, e, i, n, s) {
                        this.t = t, this.p = e, this.v = i, this.r = s, n && (n._prev = this, this._next = n)
                    }),
                    pe = (R._parseToProxy = function (t, e, i, n, s, o) {
                        var r, a, l, u, h, c = n,
                            p = {},
                            d = {},
                            f = i._transform,
                            m = H;
                        for (i._transform = null, H = e, n = h = i.parse(t, e, n, s), H = m, o && (i._transform = f, c && (c._prev = null, c._prev && (c._prev._next = null))); n && n !== c;) {
                            if (1 >= n.type && (a = n.p, d[a] = n.s + n.c, p[a] = n.s, o || (u = new ce(n, "s", a, u, n.r), n.c = 0), 1 === n.type))
                                for (r = n.l; --r > 0;) l = "xn" + r, a = n.p + "_" + l, d[a] = n.data[l], p[a] = n[l], o || (u = new ce(n, l, a, u, n.rxp[l]));
                            n = n._next
                        }
                        return {
                            proxy: p,
                            end: d,
                            firstMPT: u,
                            pt: h
                        }
                    }, R.CSSPropTween = function (t, e, n, s, r, a, l, u, h, c, p) {
                        this.t = t, this.p = e, this.s = n, this.c = s, this.n = l || e, t instanceof pe || o.push(this.n), this.r = u, this.type = a || 0, h && (this.pr = h, i = !0), this.b = void 0 === c ? n : c, this.e = void 0 === p ? n + s : p, r && (this._next = r, r._prev = this)
                    }),
                    de = r.parseComplex = function (t, e, i, n, s, o, r, a, l, h) {
                        i = i || o || "", r = new pe(t, e, 0, 0, r, h ? 2 : 1, null, !1, a, i, n), n += "";
                        var c, p, d, f, v, y, _, x, b, w, M, S, C = i.split(", ")
                            .join(",")
                            .split(" "),
                            A = n.split(", ")
                            .join(",")
                            .split(" "),
                            E = C.length,
                            k = u !== !1;
                        for ((-1 !== n.indexOf(",") || -1 !== i.indexOf(",")) && (C = C.join(" ")
                                .replace(L, ", ")
                                .split(" "), A = A.join(" ")
                                .replace(L, ", ")
                                .split(" "), E = C.length), E !== A.length && (C = (o || "")
                                .split(" "), E = C.length), r.plugin = l, r.setRatio = h, c = 0; E > c; c++)
                            if (f = C[c], v = A[c], x = parseFloat(f), x || 0 === x) r.appendXtra("", x, ie(v, x), v.replace(g, ""), k && -1 !== v.indexOf("px"), !0);
                            else if (s && ("#" === f.charAt(0) || oe[f] || T.test(f))) S = "," === v.charAt(v.length - 1) ? ")," : ")", f = ae(f), v = ae(v), b = f.length + v.length > 6, b && !z && 0 === v[3] ? (r["xs" + r.l] += r.l ? " transparent" : "transparent", r.e = r.e.split(A[c])
                            .join("transparent")) : (z || (b = !1), r.appendXtra(b ? "rgba(" : "rgb(", f[0], v[0] - f[0], ",", !0, !0)
                            .appendXtra("", f[1], v[1] - f[1], ",", !0)
                            .appendXtra("", f[2], v[2] - f[2], b ? "," : S, !0), b && (f = 4 > f.length ? 1 : f[3], r.appendXtra("", f, (4 > v.length ? 1 : v[3]) - f, S, !1)));
                        else if (y = f.match(m)) {
                            if (_ = v.match(g), !_ || _.length !== y.length) return r;
                            for (d = 0, p = 0; y.length > p; p++) M = y[p], w = f.indexOf(M, d), r.appendXtra(f.substr(d, w - d), Number(M), ie(_[p], M), "", k && "px" === f.substr(w + M.length, 2), 0 === p), d = w + M.length;
                            r["xs" + r.l] += f.substr(d)
                        } else r["xs" + r.l] += r.l ? " " + f : f;
                        if (-1 !== n.indexOf("=") && r.data) {
                            for (S = r.xs0 + r.data.s, c = 1; r.l > c; c++) S += r["xs" + c] + r.data["xn" + c];
                            r.e = S + r["xs" + c]
                        }
                        return r.l || (r.type = -1, r.xs0 = r.e), r.xfirst || r
                    },
                    fe = 9;
                for (l = pe.prototype, l.l = l.pr = 0; --fe > 0;) l["xn" + fe] = 0, l["xs" + fe] = "";
                l.xs0 = "", l._next = l._prev = l.xfirst = l.data = l.plugin = l.setRatio = l.rxp = null, l.appendXtra = function (t, e, i, n, s, o) {
                    var r = this,
                        a = r.l;
                    return r["xs" + a] += o && a ? " " + t : t || "", i || 0 === a || r.plugin ? (r.l++, r.type = r.setRatio ? 2 : 1, r["xs" + r.l] = n || "", a > 0 ? (r.data["xn" + a] = e + i, r.rxp["xn" + a] = s, r["xn" + a] = e, r.plugin || (r.xfirst = new pe(r, "xn" + a, e, i, r.xfirst || r, 0, r.n, s, r.pr), r.xfirst.xs0 = 0), r) : (r.data = {
                        s: e + i
                    }, r.rxp = {}, r.s = e, r.c = i, r.r = s, r)) : (r["xs" + a] += e + (n || ""), r)
                };
                var me = function (t, e) {
                        e = e || {}, this.p = e.prefix ? V(t) || t : t, a[t] = a[this.p] = this, this.format = e.formatter || ue(e.defaultValue, e.color, e.collapsible, e.multi), e.parser && (this.parse = e.parser), this.clrs = e.color, this.multi = e.multi, this.keyword = e.keyword, this.dflt = e.defaultValue, this.pr = e.priority || 0
                    },
                    ge = R._registerComplexSpecialProp = function (t, e, i) {
                        "object" != typeof e && (e = {
                            parser: i
                        });
                        var n, s, o = t.split(","),
                            r = e.defaultValue;
                        for (i = i || [r], n = 0; o.length > n; n++) e.prefix = 0 === n && e.prefix, e.defaultValue = i[n] || r, s = new me(o[n], e)
                    },
                    ve = function (t) {
                        if (!a[t]) {
                            var e = t.charAt(0)
                                .toUpperCase() + t.substr(1) + "Plugin";
                            ge(t, {
                                parser: function (t, i, n, s, o, r, l) {
                                    var u = (window.GreenSockGlobals || window)
                                        .com.greensock.plugins[e];
                                    return u ? (u._cssRegister(), a[n].parse(t, i, n, s, o, r, l)) : (q("Error: " + e + " js file not loaded."), o)
                                }
                            })
                        }
                    };
                l = me.prototype, l.parseComplex = function (t, e, i, n, s, o) {
                    var r, a, l, u, h, c, p = this.keyword;
                    if (this.multi && (L.test(i) || L.test(e) ? (a = e.replace(L, "|")
                            .split("|"), l = i.replace(L, "|")
                            .split("|")) : p && (a = [e], l = [i])), l) {
                        for (u = l.length > a.length ? l.length : a.length, r = 0; u > r; r++) e = a[r] = a[r] || this.dflt, i = l[r] = l[r] || this.dflt, p && (h = e.indexOf(p), c = i.indexOf(p), h !== c && (i = -1 === c ? l : a, i[r] += " " + p));
                        e = a.join(", "), i = l.join(", ")
                    }
                    return de(t, this.p, e, i, this.clrs, this.dflt, n, this.pr, s, o)
                }, l.parse = function (t, e, i, n, o, r) {
                    return this.parseComplex(t.style, this.format(Y(t, this.p, s, !1, this.dflt)), this.format(e), o, r)
                }, r.registerSpecialProp = function (t, e, i) {
                    ge(t, {
                        parser: function (t, n, s, o, r, a) {
                            var l = new pe(t, s, 0, 0, r, 2, s, !1, i);
                            return l.plugin = a, l.setRatio = e(t, n, o._tween, s), l
                        },
                        priority: i
                    })
                };
                var ye = "scaleX,scaleY,scaleZ,x,y,z,skewX,rotation,rotationX,rotationY,perspective".split(","),
                    _e = V("transform"),
                    xe = X + "transform",
                    be = V("transformOrigin"),
                    we = null !== V("perspective"),
                    Te = function (t, e, i, n) {
                        if (t._gsTransform && i && !n) return t._gsTransform;
                        var s, o, a, l, u, h, c, p, d, f, m, g, v, y = i ? t._gsTransform || {
                                skewY: 0
                            } : {
                                skewY: 0
                            },
                            _ = 0 > y.scaleX,
                            x = 2e-5,
                            b = 1e5,
                            w = 179.99,
                            T = w * I,
                            M = we ? parseFloat(Y(t, be, e, !1, "0 0 0")
                                .split(" ")[2]) || y.zOrigin || 0 : 0;
                        for (_e ? s = Y(t, xe, e, !0) : t.currentStyle && (s = t.currentStyle.filter.match(k), s = s && 4 === s.length ? [s[0].substr(4), Number(s[2].substr(4)), Number(s[1].substr(4)), s[3].substr(4), y.x || 0, y.y || 0].join(",") : ""), o = (s || "")
                            .match(/(?:\-|\b)[\d\-\.e]+\b/gi) || [], a = o.length; --a > -1;) l = Number(o[a]), o[a] = (u = l - (l |= 0)) ? (0 | u * b + (0 > u ? -.5 : .5)) / b + l : l;
                        if (16 === o.length) {
                            var S = o[8],
                                C = o[9],
                                A = o[10],
                                E = o[12],
                                O = o[13],
                                L = o[14];
                            if (y.zOrigin && (L = -y.zOrigin, E = S * L - o[12], O = C * L - o[13], L = A * L + y.zOrigin - o[14]), !i || n || null == y.rotationX) {
                                var H, N, F, D, R, B, z, j = o[0],
                                    q = o[1],
                                    X = o[2],
                                    U = o[3],
                                    V = o[4],
                                    W = o[5],
                                    $ = o[6],
                                    Q = o[7],
                                    G = o[11],
                                    Z = Math.atan2($, A),
                                    J = -T > Z || Z > T;
                                y.rotationX = Z * P, Z && (D = Math.cos(-Z), R = Math.sin(-Z), H = V * D + S * R, N = W * D + C * R, F = $ * D + A * R, S = V * -R + S * D, C = W * -R + C * D, A = $ * -R + A * D, G = Q * -R + G * D, V = H, W = N, $ = F), Z = Math.atan2(S, j), y.rotationY = Z * P, Z && (B = -T > Z || Z > T, D = Math.cos(-Z), R = Math.sin(-Z), H = j * D - S * R, N = q * D - C * R, F = X * D - A * R, C = q * R + C * D, A = X * R + A * D, G = U * R + G * D, j = H, q = N, X = F), Z = Math.atan2(q, W), y.rotation = Z * P, Z && (z = -T > Z || Z > T, D = Math.cos(-Z), R = Math.sin(-Z), j = j * D + V * R, N = q * D + W * R, W = q * -R + W * D, $ = X * -R + $ * D, q = N), z && J ? y.rotation = y.rotationX = 0 : z && B ? y.rotation = y.rotationY = 0 : B && J && (y.rotationY = y.rotationX = 0), y.scaleX = (0 | Math.sqrt(j * j + q * q) * b + .5) / b, y.scaleY = (0 | Math.sqrt(W * W + C * C) * b + .5) / b, y.scaleZ = (0 | Math.sqrt($ * $ + A * A) * b + .5) / b, y.skewX = 0, y.perspective = G ? 1 / (0 > G ? -G : G) : 0, y.x = E, y.y = O, y.z = L
                            }
                        } else if (!(we && !n && o.length && y.x === o[4] && y.y === o[5] && (y.rotationX || y.rotationY) || void 0 !== y.x && "none" === Y(t, "display", e))) {
                            var K = o.length >= 6,
                                te = K ? o[0] : 1,
                                ee = o[1] || 0,
                                ie = o[2] || 0,
                                ne = K ? o[3] : 1;
                            y.x = o[4] || 0, y.y = o[5] || 0, h = Math.sqrt(te * te + ee * ee), c = Math.sqrt(ne * ne + ie * ie), p = te || ee ? Math.atan2(ee, te) * P : y.rotation || 0, d = ie || ne ? Math.atan2(ie, ne) * P + p : y.skewX || 0, f = h - Math.abs(y.scaleX || 0), m = c - Math.abs(y.scaleY || 0), Math.abs(d) > 90 && 270 > Math.abs(d) && (_ ? (h *= -1, d += 0 >= p ? 180 : -180, p += 0 >= p ? 180 : -180) : (c *= -1, d += 0 >= d ? 180 : -180)), g = (p - y.rotation) % 180, v = (d - y.skewX) % 180, (void 0 === y.skewX || f > x || -x > f || m > x || -x > m || g > -w && w > g && !1 | g * b || v > -w && w > v && !1 | v * b) && (y.scaleX = h, y.scaleY = c, y.rotation = p, y.skewX = d), we && (y.rotationX = y.rotationY = y.z = 0, y.perspective = parseFloat(r.defaultTransformPerspective) || 0, y.scaleZ = 1)
                        }
                        y.zOrigin = M;
                        for (a in y) x > y[a] && y[a] > -x && (y[a] = 0);
                        return i && (t._gsTransform = y), y
                    },
                    Me = function (t) {
                        var e, i, n = this.data,
                            s = -n.rotation * I,
                            o = s + n.skewX * I,
                            r = 1e5,
                            a = (0 | Math.cos(s) * n.scaleX * r) / r,
                            l = (0 | Math.sin(s) * n.scaleX * r) / r,
                            u = (0 | Math.sin(o) * -n.scaleY * r) / r,
                            h = (0 | Math.cos(o) * n.scaleY * r) / r,
                            c = this.t.style,
                            p = this.t.currentStyle;
                        if (p) {
                            i = l, l = -u, u = -i, e = p.filter, c.filter = "";
                            var d, m, g = this.t.offsetWidth,
                                v = this.t.offsetHeight,
                                y = "absolute" !== p.position,
                                b = "progid:DXImageTransform.Microsoft.Matrix(M11=" + a + ", M12=" + l + ", M21=" + u + ", M22=" + h,
                                w = n.x,
                                T = n.y;
                            if (null != n.ox && (d = (n.oxp ? .01 * g * n.ox : n.ox) - g / 2, m = (n.oyp ? .01 * v * n.oy : n.oy) - v / 2, w += d - (d * a + m * l), T += m - (d * u + m * h)), y ? (d = g / 2, m = v / 2, b += ", Dx=" + (d - (d * a + m * l) + w) + ", Dy=" + (m - (d * u + m * h) + T) + ")") : b += ", sizingMethod='auto expand')", c.filter = -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(") ? e.replace(O, b) : b + " " + e, (0 === t || 1 === t) && 1 === a && 0 === l && 0 === u && 1 === h && (y && -1 === b.indexOf("Dx=0, Dy=0") || x.test(e) && 100 !== parseFloat(RegExp.$1) || -1 === e.indexOf("gradient(" && e.indexOf("Alpha")) && c.removeAttribute("filter")), !y) {
                                var M, S, C, A = 8 > f ? 1 : -1;
                                for (d = n.ieOffsetX || 0, m = n.ieOffsetY || 0, n.ieOffsetX = Math.round((g - ((0 > a ? -a : a) * g + (0 > l ? -l : l) * v)) / 2 + w), n.ieOffsetY = Math.round((v - ((0 > h ? -h : h) * v + (0 > u ? -u : u) * g)) / 2 + T), fe = 0; 4 > fe; fe++) S = K[fe], M = p[S], i = -1 !== M.indexOf("px") ? parseFloat(M) : $(this.t, S, parseFloat(M), M.replace(_, "")) || 0, C = i !== n[S] ? 2 > fe ? -n.ieOffsetX : -n.ieOffsetY : 2 > fe ? d - n.ieOffsetX : m - n.ieOffsetY, c[S] = (n[S] = Math.round(i - C * (0 === fe || 2 === fe ? 1 : A))) + "px"
                            }
                        }
                    },
                    Se = function () {
                        var t, e, i, n, s, o, r, a, l, u, h, c, d, f, m, g, v, y, _, x, b, w, T, M = this.data,
                            S = this.t.style,
                            C = M.rotation * I,
                            A = M.scaleX,
                            E = M.scaleY,
                            k = M.scaleZ,
                            O = M.perspective;
                        if (p) {
                            var L = 1e-4;
                            L > A && A > -L && (A = k = 2e-5), L > E && E > -L && (E = k = 2e-5), !O || M.z || M.rotationX || M.rotationY || (O = 0)
                        }
                        if (C || M.skewX) y = Math.cos(C), _ = Math.sin(C), t = y, s = _, M.skewX && (C -= M.skewX * I, y = Math.cos(C), _ = Math.sin(C)), e = -_, o = y;
                        else {
                            if (!(M.rotationY || M.rotationX || 1 !== k || O)) return void(S[_e] = "translate3d(" + M.x + "px," + M.y + "px," + M.z + "px)" + (1 !== A || 1 !== E ? " scale(" + A + "," + E + ")" : ""));
                            t = o = 1, e = s = 0
                        }
                        h = 1, i = n = r = a = l = u = c = d = f = 0, m = O ? -1 / O : 0, g = M.zOrigin, v = 1e5, C = M.rotationY * I, C && (y = Math.cos(C), _ = Math.sin(C), l = h * -_, d = m * -_, i = t * _, r = s * _, h *= y, m *= y, t *= y, s *= y), C = M.rotationX * I, C && (y = Math.cos(C), _ = Math.sin(C), x = e * y + i * _, b = o * y + r * _, w = u * y + h * _, T = f * y + m * _, i = e * -_ + i * y, r = o * -_ + r * y, h = u * -_ + h * y, m = f * -_ + m * y, e = x, o = b, u = w, f = T), 1 !== k && (i *= k, r *= k, h *= k, m *= k), 1 !== E && (e *= E, o *= E, u *= E, f *= E), 1 !== A && (t *= A, s *= A, l *= A, d *= A), g && (c -= g, n = i * c, a = r * c, c = h * c + g), n = (x = (n += M.x) - (n |= 0)) ? (0 | x * v + (0 > x ? -.5 : .5)) / v + n : n, a = (x = (a += M.y) - (a |= 0)) ? (0 | x * v + (0 > x ? -.5 : .5)) / v + a : a, c = (x = (c += M.z) - (c |= 0)) ? (0 | x * v + (0 > x ? -.5 : .5)) / v + c : c, S[_e] = "matrix3d(" + [(0 | t * v) / v, (0 | s * v) / v, (0 | l * v) / v, (0 | d * v) / v, (0 | e * v) / v, (0 | o * v) / v, (0 | u * v) / v, (0 | f * v) / v, (0 | i * v) / v, (0 | r * v) / v, (0 | h * v) / v, (0 | m * v) / v, n, a, c, O ? 1 + -c / O : 1].join(",") + ")"
                    },
                    Ce = function (t) {
                        var e, i, n, s, o, r = this.data,
                            a = this.t,
                            l = a.style;
                        return r.rotationX || r.rotationY || r.z || r.force3D ? (this.setRatio = Se, void Se.call(this, t)) : void(r.rotation || r.skewX ? (e = r.rotation * I, i = e - r.skewX * I, n = 1e5, s = r.scaleX * n, o = r.scaleY * n, l[_e] = "matrix(" + (0 | Math.cos(e) * s) / n + "," + (0 | Math.sin(e) * s) / n + "," + (0 | Math.sin(i) * -o) / n + "," + (0 | Math.cos(i) * o) / n + "," + r.x + "," + r.y + ")") : l[_e] = "matrix(" + r.scaleX + ",0,0," + r.scaleY + "," + r.x + "," + r.y + ")")
                    };
                ge("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,transformPerspective,directionalRotation,parseTransform,force3D", {
                    parser: function (t, e, i, n, o, r, a) {
                        if (n._transform) return o;
                        var l, u, h, c, p, d, f, m = n._transform = Te(t, s, !0, a.parseTransform),
                            g = t.style,
                            v = 1e-6,
                            y = ye.length,
                            _ = a,
                            x = {};
                        if ("string" == typeof _.transform && _e) h = g.cssText, g[_e] = _.transform, g.display = "block", l = Te(t, null, !1), g.cssText = h;
                        else if ("object" == typeof _) {
                            if (l = {
                                    scaleX: ne(null != _.scaleX ? _.scaleX : _.scale, m.scaleX),
                                    scaleY: ne(null != _.scaleY ? _.scaleY : _.scale, m.scaleY),
                                    scaleZ: ne(_.scaleZ, m.scaleZ),
                                    x: ne(_.x, m.x),
                                    y: ne(_.y, m.y),
                                    z: ne(_.z, m.z),
                                    perspective: ne(_.transformPerspective, m.perspective)
                                }, f = _.directionalRotation, null != f)
                                if ("object" == typeof f)
                                    for (h in f) _[h] = f[h];
                                else _.rotation = f;
                            l.rotation = se("rotation" in _ ? _.rotation : "shortRotation" in _ ? _.shortRotation + "_short" : "rotationZ" in _ ? _.rotationZ : m.rotation, m.rotation, "rotation", x), we && (l.rotationX = se("rotationX" in _ ? _.rotationX : "shortRotationX" in _ ? _.shortRotationX + "_short" : m.rotationX || 0, m.rotationX, "rotationX", x), l.rotationY = se("rotationY" in _ ? _.rotationY : "shortRotationY" in _ ? _.shortRotationY + "_short" : m.rotationY || 0, m.rotationY, "rotationY", x)), l.skewX = null == _.skewX ? m.skewX : se(_.skewX, m.skewX), l.skewY = null == _.skewY ? m.skewY : se(_.skewY, m.skewY), (u = l.skewY - m.skewY) && (l.skewX += u, l.rotation += u)
                        }
                        for (we && null != _.force3D && (m.force3D = _.force3D, d = !0), p = m.force3D || m.z || m.rotationX || m.rotationY || l.z || l.rotationX || l.rotationY || l.perspective, p || null == _.scale || (l.scaleZ = 1); --y > -1;) i = ye[y], c = l[i] - m[i], (c > v || -v > c || null != H[i]) && (d = !0, o = new pe(m, i, m[i], c, o), i in x && (o.e = x[i]), o.xs0 = 0, o.plugin = r, n._overwriteProps.push(o.n));
                        return c = _.transformOrigin, (c || we && p && m.zOrigin) && (_e ? (d = !0, i = be, c = (c || Y(t, i, s, !1, "50% 50%")) + "", o = new pe(g, i, 0, 0, o, -1, "transformOrigin"), o.b = g[i], o.plugin = r, we ? (h = m.zOrigin, c = c.split(" "), m.zOrigin = (c.length > 2 && (0 === h || "0px" !== c[2]) ? parseFloat(c[2]) : h) || 0, o.xs0 = o.e = g[i] = c[0] + " " + (c[1] || "50%") + " 0px", o = new pe(m, "zOrigin", 0, 0, o, -1, o.n), o.b = h, o.xs0 = o.e = m.zOrigin) : o.xs0 = o.e = g[i] = c) : ee(c + "", m)), d && (n._transformType = p || 3 === this._transformType ? 3 : 2), o
                    },
                    prefix: !0
                }), ge("boxShadow", {
                    defaultValue: "0px 0px 0px 0px #999",
                    prefix: !0,
                    color: !0,
                    multi: !0,
                    keyword: "inset"
                }), ge("borderRadius", {
                    defaultValue: "0px",
                    parser: function (t, e, i, o, r) {
                        e = this.format(e);
                        var a, l, u, h, c, p, d, f, m, g, v, y, _, x, b, w, T = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                            M = t.style;
                        for (m = parseFloat(t.offsetWidth), g = parseFloat(t.offsetHeight), a = e.split(" "), l = 0; T.length > l; l++) this.p.indexOf("border") && (T[l] = V(T[l])), c = h = Y(t, T[l], s, !1, "0px"), -1 !== c.indexOf(" ") && (h = c.split(" "), c = h[0], h = h[1]), p = u = a[l], d = parseFloat(c), y = c.substr((d + "")
                            .length), _ = "=" === p.charAt(1), _ ? (f = parseInt(p.charAt(0) + "1", 10), p = p.substr(2), f *= parseFloat(p), v = p.substr((f + "")
                            .length - (0 > f ? 1 : 0)) || "") : (f = parseFloat(p), v = p.substr((f + "")
                            .length)), "" === v && (v = n[i] || y), v !== y && (x = $(t, "borderLeft", d, y), b = $(t, "borderTop", d, y), "%" === v ? (c = 100 * (x / m) + "%", h = 100 * (b / g) + "%") : "em" === v ? (w = $(t, "borderLeft", 1, "em"), c = x / w + "em", h = b / w + "em") : (c = x + "px", h = b + "px"), _ && (p = parseFloat(c) + f + v, u = parseFloat(h) + f + v)), r = de(M, T[l], c + " " + h, p + " " + u, !1, "0px", r);
                        return r
                    },
                    prefix: !0,
                    formatter: ue("0px 0px 0px 0px", !1, !0)
                }), ge("backgroundPosition", {
                    defaultValue: "0 0",
                    parser: function (t, e, i, n, o, r) {
                        var a, l, u, h, c, p, d = "background-position",
                            m = s || W(t, null),
                            g = this.format((m ? f ? m.getPropertyValue(d + "-x") + " " + m.getPropertyValue(d + "-y") : m.getPropertyValue(d) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"),
                            v = this.format(e);
                        if (-1 !== g.indexOf("%") != (-1 !== v.indexOf("%")) && (p = Y(t, "backgroundImage")
                                .replace(C, ""), p && "none" !== p)) {
                            for (a = g.split(" "), l = v.split(" "), D.setAttribute("src", p), u = 2; --u > -1;) g = a[u], h = -1 !== g.indexOf("%"), h !== (-1 !== l[u].indexOf("%")) && (c = 0 === u ? t.offsetWidth - D.width : t.offsetHeight - D.height, a[u] = h ? parseFloat(g) / 100 * c + "px" : 100 * (parseFloat(g) / c) + "%");
                            g = a.join(" ")
                        }
                        return this.parseComplex(t.style, g, v, o, r)
                    },
                    formatter: ee
                }), ge("backgroundSize", {
                    defaultValue: "0 0",
                    formatter: ee
                }), ge("perspective", {
                    defaultValue: "0px",
                    prefix: !0
                }), ge("perspectiveOrigin", {
                    defaultValue: "50% 50%",
                    prefix: !0
                }), ge("transformStyle", {
                    prefix: !0
                }), ge("backfaceVisibility", {
                    prefix: !0
                }), ge("userSelect", {
                    prefix: !0
                }), ge("margin", {
                    parser: he("marginTop,marginRight,marginBottom,marginLeft")
                }), ge("padding", {
                    parser: he("paddingTop,paddingRight,paddingBottom,paddingLeft")
                }), ge("clip", {
                    defaultValue: "rect(0px,0px,0px,0px)",
                    parser: function (t, e, i, n, o, r) {
                        var a, l, u;
                        return 9 > f ? (l = t.currentStyle, u = 8 > f ? " " : ",", a = "rect(" + l.clipTop + u + l.clipRight + u + l.clipBottom + u + l.clipLeft + ")", e = this.format(e)
                            .split(",")
                            .join(u)) : (a = this.format(Y(t, this.p, s, !1, this.dflt)), e = this.format(e)), this.parseComplex(t.style, a, e, o, r)
                    }
                }), ge("textShadow", {
                    defaultValue: "0px 0px 0px #999",
                    color: !0,
                    multi: !0
                }), ge("autoRound,strictUnits", {
                    parser: function (t, e, i, n, s) {
                        return s
                    }
                }), ge("border", {
                    defaultValue: "0px solid #000",
                    parser: function (t, e, i, n, o, r) {
                        return this.parseComplex(t.style, this.format(Y(t, "borderTopWidth", s, !1, "0px") + " " + Y(t, "borderTopStyle", s, !1, "solid") + " " + Y(t, "borderTopColor", s, !1, "#000")), this.format(e), o, r)
                    },
                    color: !0,
                    formatter: function (t) {
                        var e = t.split(" ");
                        return e[0] + " " + (e[1] || "solid") + " " + (t.match(le) || ["#000"])[0]
                    }
                }), ge("borderWidth", {
                    parser: he("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
                }), ge("float,cssFloat,styleFloat", {
                    parser: function (t, e, i, n, s) {
                        var o = t.style,
                            r = "cssFloat" in o ? "cssFloat" : "styleFloat";
                        return new pe(o, r, 0, 0, s, -1, i, !1, 0, o[r], e)
                    }
                });
                var Ae = function (t) {
                    var e, i = this.t,
                        n = i.filter || Y(this.data, "filter"),
                        s = 0 | this.s + this.c * t;
                    100 === s && (-1 === n.indexOf("atrix(") && -1 === n.indexOf("radient(") && -1 === n.indexOf("oader(") ? (i.removeAttribute("filter"), e = !Y(this.data, "filter")) : (i.filter = n.replace(w, ""), e = !0)), e || (this.xn1 && (i.filter = n = n || "alpha(opacity=" + s + ")"), -1 === n.indexOf("opacity") ? 0 === s && this.xn1 || (i.filter = n + " alpha(opacity=" + s + ")") : i.filter = n.replace(x, "opacity=" + s))
                };
                ge("opacity,alpha,autoAlpha", {
                    defaultValue: "1",
                    parser: function (t, e, i, n, o, r) {
                        var a = parseFloat(Y(t, "opacity", s, !1, "1")),
                            l = t.style,
                            u = "autoAlpha" === i;
                        return "string" == typeof e && "=" === e.charAt(1) && (e = ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + a), u && 1 === a && "hidden" === Y(t, "visibility", s) && 0 !== e && (a = 0), z ? o = new pe(l, "opacity", a, e - a, o) : (o = new pe(l, "opacity", 100 * a, 100 * (e - a), o), o.xn1 = u ? 1 : 0, l.zoom = 1, o.type = 2, o.b = "alpha(opacity=" + o.s + ")", o.e = "alpha(opacity=" + (o.s + o.c) + ")", o.data = t, o.plugin = r, o.setRatio = Ae), u && (o = new pe(l, "visibility", 0, 0, o, -1, null, !1, 0, 0 !== a ? "inherit" : "hidden", 0 === e ? "hidden" : "inherit"), o.xs0 = "inherit", n._overwriteProps.push(o.n), n._overwriteProps.push(i)), o
                    }
                });
                var Ee = function (t, e) {
                        e && (t.removeProperty ? t.removeProperty(e.replace(M, "-$1")
                            .toLowerCase()) : t.removeAttribute(e))
                    },
                    ke = function (t) {
                        if (this.t._gsClassPT = this, 1 === t || 0 === t) {
                            this.t.className = 0 === t ? this.b : this.e;
                            for (var e = this.data, i = this.t.style; e;) e.v ? i[e.p] = e.v : Ee(i, e.p), e = e._next;
                            1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null)
                        } else this.t.className !== this.e && (this.t.className = this.e)
                    };
                ge("className", {
                    parser: function (t, e, n, o, r, a, l) {
                        var u, h, c, p, d, f = t.className,
                            m = t.style.cssText;
                        if (r = o._classNamePT = new pe(t, n, 0, 0, r, 2), r.setRatio = ke, r.pr = -11, i = !0, r.b = f, h = G(t, s), c = t._gsClassPT) {
                            for (p = {}, d = c.data; d;) p[d.p] = 1, d = d._next;
                            c.setRatio(1)
                        }
                        return t._gsClassPT = r, r.e = "=" !== e.charAt(1) ? e : f.replace(RegExp("\\s*\\b" + e.substr(2) + "\\b"), "") + ("+" === e.charAt(0) ? " " + e.substr(2) : ""), o._tween._duration && (t.className = r.e, u = Z(t, h, G(t), l, p), t.className = f, r.data = u.firstMPT, t.style.cssText = m, r = r.xfirst = o.parse(t, u.difs, r, a)), r
                    }
                });
                var Oe = function (t) {
                    if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                        var e, i, n, s, o = this.t.style,
                            r = a.transform.parse;
                        if ("all" === this.e) o.cssText = "", s = !0;
                        else
                            for (e = this.e.split(","), n = e.length; --n > -1;) i = e[n], a[i] && (a[i].parse === r ? s = !0 : i = "transformOrigin" === i ? be : a[i].p), Ee(o, i);
                        s && (Ee(o, _e), this.t._gsTransform && delete this.t._gsTransform)
                    }
                };
                for (ge("clearProps", {
                        parser: function (t, e, n, s, o) {
                            return o = new pe(t, n, 0, 0, o, 2), o.setRatio = Oe, o.e = e, o.pr = -10, o.data = s._tween, i = !0, o
                        }
                    }), l = "bezier,throwProps,physicsProps,physics2D".split(","), fe = l.length; fe--;) ve(l[fe]);
                l = r.prototype, l._firstPT = null, l._onInitTween = function (t, e, a) {
                    if (!t.nodeType) return !1;
                    this._target = t, this._tween = a, this._vars = e, u = e.autoRound, i = !1, n = e.suffixMap || r.suffixMap, s = W(t, ""), o = this._overwriteProps;
                    var l, p, f, m, g, v, y, _, x, w = t.style;
                    if (h && "" === w.zIndex && (l = Y(t, "zIndex", s), ("auto" === l || "" === l) && (w.zIndex = 0)), "string" == typeof e && (m = w.cssText, l = G(t, s), w.cssText = m + ";" + e, l = Z(t, l, G(t))
                            .difs, !z && b.test(e) && (l.opacity = parseFloat(RegExp.$1)), e = l, w.cssText = m), this._firstPT = p = this.parse(t, e, null), this._transformType) {
                        for (x = 3 === this._transformType, _e ? c && (h = !0, "" === w.zIndex && (y = Y(t, "zIndex", s), ("auto" === y || "" === y) && (w.zIndex = 0)), d && (w.WebkitBackfaceVisibility = this._vars.WebkitBackfaceVisibility || (x ? "visible" : "hidden"))) : w.zoom = 1, f = p; f && f._next;) f = f._next;
                        _ = new pe(t, "transform", 0, 0, null, 2), this._linkCSSP(_, null, f), _.setRatio = x && we ? Se : _e ? Ce : Me, _.data = this._transform || Te(t, s, !0), o.pop()
                    }
                    if (i) {
                        for (; p;) {
                            for (v = p._next, f = m; f && f.pr > p.pr;) f = f._next;
                            (p._prev = f ? f._prev : g) ? p._prev._next = p: m = p, (p._next = f) ? f._prev = p : g = p, p = v
                        }
                        this._firstPT = m
                    }
                    return !0
                }, l.parse = function (t, e, i, o) {
                    var r, l, h, c, p, d, f, m, g, v, y = t.style;
                    for (r in e) d = e[r], l = a[r], l ? i = l.parse(t, d, r, this, i, o, e) : (p = Y(t, r, s) + "", g = "string" == typeof d, "color" === r || "fill" === r || "stroke" === r || -1 !== r.indexOf("Color") || g && T.test(d) ? (g || (d = ae(d), d = (d.length > 3 ? "rgba(" : "rgb(") + d.join(",") + ")"), i = de(y, r, p, d, !0, "transparent", i, 0, o)) : !g || -1 === d.indexOf(" ") && -1 === d.indexOf(",") ? (h = parseFloat(p), f = h || 0 === h ? p.substr((h + "")
                        .length) : "", ("" === p || "auto" === p) && ("width" === r || "height" === r ? (h = te(t, r, s), f = "px") : "left" === r || "top" === r ? (h = Q(t, r, s), f = "px") : (h = "opacity" !== r ? 0 : 1, f = "")), v = g && "=" === d.charAt(1), v ? (c = parseInt(d.charAt(0) + "1", 10), d = d.substr(2), c *= parseFloat(d), m = d.replace(_, "")) : (c = parseFloat(d), m = g ? d.substr((c + "")
                        .length) || "" : ""), "" === m && (m = r in n ? n[r] : f), d = c || 0 === c ? (v ? c + h : c) + m : e[r], f !== m && "" !== m && (c || 0 === c) && (h || 0 === h) && (h = $(t, r, h, f), "%" === m ? (h /= $(t, r, 100, "%") / 100, e.strictUnits !== !0 && (p = h + "%")) : "em" === m ? h /= $(t, r, 1, "em") : (c = $(t, r, c, m), m = "px"), v && (c || 0 === c) && (d = c + h + m)), v && (c += h), !h && 0 !== h || !c && 0 !== c ? void 0 !== y[r] && (d || "NaN" != d + "" && null != d) ? (i = new pe(y, r, c || h || 0, 0, i, -1, r, !1, 0, p, d), i.xs0 = "none" !== d || "display" !== r && -1 === r.indexOf("Style") ? d : p) : q("invalid " + r + " tween value: " + e[r]) : (i = new pe(y, r, h, c - h, i, 0, r, u !== !1 && ("px" === m || "zIndex" === r), 0, p, d), i.xs0 = m)) : i = de(y, r, p, d, !0, null, i, 0, o)), o && i && !i.plugin && (i.plugin = o);
                    return i
                }, l.setRatio = function (t) {
                    var e, i, n, s = this._firstPT,
                        o = 1e-6;
                    if (1 !== t || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                        if (t || this._tween._time !== this._tween._duration && 0 !== this._tween._time || this._tween._rawPrevTime === -1e-6)
                            for (; s;) {
                                if (e = s.c * t + s.s, s.r ? e = e > 0 ? 0 | e + .5 : 0 | e - .5 : o > e && e > -o && (e = 0), s.type)
                                    if (1 === s.type)
                                        if (n = s.l, 2 === n) s.t[s.p] = s.xs0 + e + s.xs1 + s.xn1 + s.xs2;
                                        else if (3 === n) s.t[s.p] = s.xs0 + e + s.xs1 + s.xn1 + s.xs2 + s.xn2 + s.xs3;
                                else if (4 === n) s.t[s.p] = s.xs0 + e + s.xs1 + s.xn1 + s.xs2 + s.xn2 + s.xs3 + s.xn3 + s.xs4;
                                else if (5 === n) s.t[s.p] = s.xs0 + e + s.xs1 + s.xn1 + s.xs2 + s.xn2 + s.xs3 + s.xn3 + s.xs4 + s.xn4 + s.xs5;
                                else {
                                    for (i = s.xs0 + e + s.xs1, n = 1; s.l > n; n++) i += s["xn" + n] + s["xs" + (n + 1)];
                                    s.t[s.p] = i
                                } else -1 === s.type ? s.t[s.p] = s.xs0 : s.setRatio && s.setRatio(t);
                                else s.t[s.p] = e + s.xs0;
                                s = s._next
                            } else
                                for (; s;) 2 !== s.type ? s.t[s.p] = s.b : s.setRatio(t), s = s._next;
                        else
                            for (; s;) 2 !== s.type ? s.t[s.p] = s.e : s.setRatio(t), s = s._next
                }, l._enableTransforms = function (t) {
                    this._transformType = t || 3 === this._transformType ? 3 : 2, this._transform = this._transform || Te(this._target, s, !0)
                }, l._linkCSSP = function (t, e, i, n) {
                    return t && (e && (e._prev = t), t._next && (t._next._prev = t._prev), t._prev ? t._prev._next = t._next : this._firstPT === t && (this._firstPT = t._next, n = !0), i ? i._next = t : n || null !== this._firstPT || (this._firstPT = t), t._next = e, t._prev = i), t
                }, l._kill = function (e) {
                    var i, n, s, o = e;
                    if (e.autoAlpha || e.alpha) {
                        o = {};
                        for (n in e) o[n] = e[n];
                        o.opacity = 1, o.autoAlpha && (o.visibility = 1)
                    }
                    return e.className && (i = this._classNamePT) && (s = i.xfirst, s && s._prev ? this._linkCSSP(s._prev, i._next, s._prev._prev) : s === this._firstPT && (this._firstPT = i._next), i._next && this._linkCSSP(i._next, i._next._next, s._prev), this._classNamePT = null), t.prototype._kill.call(this, o)
                };
                var Le = function (t, e, i) {
                    var n, s, o, r;
                    if (t.slice)
                        for (s = t.length; --s > -1;) Le(t[s], e, i);
                    else
                        for (n = t.childNodes, s = n.length; --s > -1;) o = n[s], r = o.type, o.style && (e.push(G(o)), i && i.push(o)), 1 !== r && 9 !== r && 11 !== r || !o.childNodes.length || Le(o, e, i)
                };
                return r.cascadeTo = function (t, i, n) {
                    var s, o, r, a = e.to(t, i, n),
                        l = [a],
                        u = [],
                        h = [],
                        c = [],
                        p = e._internals.reservedProps;
                    for (t = a._targets || a.target, Le(t, u, c), a.render(i, !0), Le(t, h), a.render(0, !0), a._enabled(!0), s = c.length; --s > -1;)
                        if (o = Z(c[s], u[s], h[s]), o.firstMPT) {
                            o = o.difs;
                            for (r in n) p[r] && (o[r] = n[r]);
                            l.push(e.to(c[s], i, o))
                        }
                    return l
                }, t.activate([r]), r
            }, !0),
            function () {
                var t = window._gsDefine.plugin({
                        propName: "roundProps",
                        priority: -1,
                        API: 2,
                        init: function (t, e, i) {
                            return this._tween = i, !0
                        }
                    }),
                    e = t.prototype;
                e._onInitAllProps = function () {
                    for (var t, e, i, n = this._tween, s = n.vars.roundProps instanceof Array ? n.vars.roundProps : n.vars.roundProps.split(","), o = s.length, r = {}, a = n._propLookup.roundProps; --o > -1;) r[s[o]] = 1;
                    for (o = s.length; --o > -1;)
                        for (t = s[o], e = n._firstPT; e;) i = e._next, e.pg ? e.t._roundProps(r, !0) : e.n === t && (this._add(e.t, t, e.s, e.c), i && (i._prev = e._prev), e._prev ? e._prev._next = i : n._firstPT === e && (n._firstPT = i), e._next = e._prev = null, n._propLookup[t] = a), e = i;
                    return !1
                }, e._add = function (t, e, i, n) {
                    this._addTween(t, e, i, i + n, e, !0), this._overwriteProps.push(e)
                }
            }(), window._gsDefine.plugin({
                propName: "attr",
                API: 2,
                version: "0.2.0",
                init: function (t, e) {
                    var i;
                    if ("function" != typeof t.setAttribute) return !1;
                    this._target = t, this._proxy = {};
                    for (i in e) this._addTween(this._proxy, i, parseFloat(t.getAttribute(i)), e[i], i) && this._overwriteProps.push(i);
                    return !0
                },
                set: function (t) {
                    this._super.setRatio.call(this, t);
                    for (var e, i = this._overwriteProps, n = i.length; --n > -1;) e = i[n], this._target.setAttribute(e, this._proxy[e] + "")
                }
            }), window._gsDefine.plugin({
                propName: "directionalRotation",
                API: 2,
                version: "0.2.0",
                init: function (t, e) {
                    "object" != typeof e && (e = {
                        rotation: e
                    }), this.finals = {};
                    var i, n, s, o, r, a, l = e.useRadians === !0 ? 2 * Math.PI : 360,
                        u = 1e-6;
                    for (i in e) "useRadians" !== i && (a = (e[i] + "")
                        .split("_"), n = a[0], s = parseFloat("function" != typeof t[i] ? t[i] : t[i.indexOf("set") || "function" != typeof t["get" + i.substr(3)] ? i : "get" + i.substr(3)]()), o = this.finals[i] = "string" == typeof n && "=" === n.charAt(1) ? s + parseInt(n.charAt(0) + "1", 10) * Number(n.substr(2)) : Number(n) || 0, r = o - s, a.length && (n = a.join("_"), -1 !== n.indexOf("short") && (r %= l, r !== r % (l / 2) && (r = 0 > r ? r + l : r - l)), -1 !== n.indexOf("_cw") && 0 > r ? r = (r + 9999999999 * l) % l - (0 | r / l) * l : -1 !== n.indexOf("ccw") && r > 0 && (r = (r - 9999999999 * l) % l - (0 | r / l) * l)), (r > u || -u > r) && (this._addTween(t, i, s, s + r, i), this._overwriteProps.push(i)));
                    return !0
                },
                set: function (t) {
                    var e;
                    if (1 !== t) this._super.setRatio.call(this, t);
                    else
                        for (e = this._firstPT; e;) e.f ? e.t[e.p](this.finals[e.p]) : e.t[e.p] = this.finals[e.p], e = e._next
                }
            })
            ._autoCSS = !0, window._gsDefine("easing.Back", ["easing.Ease"], function (t) {
                var e, i, n, s = window.GreenSockGlobals || window,
                    o = s.com.greensock,
                    r = 2 * Math.PI,
                    a = Math.PI / 2,
                    l = o._class,
                    u = function (e, i) {
                        var n = l("easing." + e, function () {}, !0),
                            s = n.prototype = new t;
                        return s.constructor = n, s.getRatio = i, n
                    },
                    h = t.register || function () {},
                    c = function (t, e, i, n) {
                        var s = l("easing." + t, {
                            easeOut: new e,
                            easeIn: new i,
                            easeInOut: new n
                        }, !0);
                        return h(s, t), s
                    },
                    p = function (t, e, i) {
                        this.t = t, this.v = e, i && (this.next = i, i.prev = this, this.c = i.v - e, this.gap = i.t - t)
                    },
                    d = function (e, i) {
                        var n = l("easing." + e, function (t) {
                                this._p1 = t || 0 === t ? t : 1.70158, this._p2 = 1.525 * this._p1
                            }, !0),
                            s = n.prototype = new t;
                        return s.constructor = n, s.getRatio = i, s.config = function (t) {
                            return new n(t)
                        }, n
                    },
                    f = c("Back", d("BackOut", function (t) {
                        return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1
                    }), d("BackIn", function (t) {
                        return t * t * ((this._p1 + 1) * t - this._p1)
                    }), d("BackInOut", function (t) {
                        return 1 > (t *= 2) ? .5 * t * t * ((this._p2 + 1) * t - this._p2) : .5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2)
                    })),
                    m = l("easing.SlowMo", function (t, e, i) {
                        e = e || 0 === e ? e : .7, null == t ? t = .7 : t > 1 && (t = 1), this._p = 1 !== t ? e : 0, this._p1 = (1 - t) / 2, this._p2 = t, this._p3 = this._p1 + this._p2, this._calcEnd = i === !0
                    }, !0),
                    g = m.prototype = new t;
                return g.constructor = m, g.getRatio = function (t) {
                    var e = t + (.5 - t) * this._p;
                    return this._p1 > t ? this._calcEnd ? 1 - (t = 1 - t / this._p1) * t : e - (t = 1 - t / this._p1) * t * t * t * e : t > this._p3 ? this._calcEnd ? 1 - (t = (t - this._p3) / this._p1) * t : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t : this._calcEnd ? 1 : e
                }, m.ease = new m(.7, .7), g.config = m.config = function (t, e, i) {
                    return new m(t, e, i)
                }, e = l("easing.SteppedEase", function (t) {
                    t = t || 1, this._p1 = 1 / t, this._p2 = t + 1
                }, !0), g = e.prototype = new t, g.constructor = e, g.getRatio = function (t) {
                    return 0 > t ? t = 0 : t >= 1 && (t = .999999999), (this._p2 * t >> 0) * this._p1
                }, g.config = e.config = function (t) {
                    return new e(t)
                }, i = l("easing.RoughEase", function (e) {
                    e = e || {};
                    for (var i, n, s, o, r, a, l = e.taper || "none", u = [], h = 0, c = 0 | (e.points || 20), d = c, f = e.randomize !== !1, m = e.clamp === !0, g = e.template instanceof t ? e.template : null, v = "number" == typeof e.strength ? .4 * e.strength : .4; --d > -1;) i = f ? Math.random() : 1 / c * d, n = g ? g.getRatio(i) : i, "none" === l ? s = v : "out" === l ? (o = 1 - i, s = o * o * v) : "in" === l ? s = i * i * v : .5 > i ? (o = 2 * i, s = .5 * o * o * v) : (o = 2 * (1 - i), s = .5 * o * o * v), f ? n += Math.random() * s - .5 * s : d % 2 ? n += .5 * s : n -= .5 * s, m && (n > 1 ? n = 1 : 0 > n && (n = 0)), u[h++] = {
                        x: i,
                        y: n
                    };
                    for (u.sort(function (t, e) {
                            return t.x - e.x
                        }), a = new p(1, 1, null), d = c; --d > -1;) r = u[d], a = new p(r.x, r.y, a);
                    this._prev = new p(0, 0, 0 !== a.t ? a : a.next)
                }, !0), g = i.prototype = new t, g.constructor = i, g.getRatio = function (t) {
                    var e = this._prev;
                    if (t > e.t) {
                        for (; e.next && t >= e.t;) e = e.next;
                        e = e.prev
                    } else
                        for (; e.prev && e.t >= t;) e = e.prev;
                    return this._prev = e, e.v + (t - e.t) / e.gap * e.c
                }, g.config = function (t) {
                    return new i(t)
                }, i.ease = new i, c("Bounce", u("BounceOut", function (t) {
                    return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
                }), u("BounceIn", function (t) {
                    return 1 / 2.75 > (t = 1 - t) ? 1 - 7.5625 * t * t : 2 / 2.75 > t ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : 2.5 / 2.75 > t ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
                }), u("BounceInOut", function (t) {
                    var e = .5 > t;
                    return t = e ? 1 - 2 * t : 2 * t - 1, t = 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375, e ? .5 * (1 - t) : .5 * t + .5
                })), c("Circ", u("CircOut", function (t) {
                    return Math.sqrt(1 - (t -= 1) * t)
                }), u("CircIn", function (t) {
                    return -(Math.sqrt(1 - t * t) - 1)
                }), u("CircInOut", function (t) {
                    return 1 > (t *= 2) ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
                })), n = function (e, i, n) {
                    var s = l("easing." + e, function (t, e) {
                            this._p1 = t || 1, this._p2 = e || n, this._p3 = this._p2 / r * (Math.asin(1 / this._p1) || 0)
                        }, !0),
                        o = s.prototype = new t;
                    return o.constructor = s, o.getRatio = i, o.config = function (t, e) {
                        return new s(t, e)
                    }, s
                }, c("Elastic", n("ElasticOut", function (t) {
                    return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * r / this._p2) + 1
                }, .3), n("ElasticIn", function (t) {
                    return -(this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * r / this._p2))
                }, .3), n("ElasticInOut", function (t) {
                    return 1 > (t *= 2) ? -.5 * this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * r / this._p2) : .5 * this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - this._p3) * r / this._p2) + 1
                }, .45)), c("Expo", u("ExpoOut", function (t) {
                    return 1 - Math.pow(2, -10 * t)
                }), u("ExpoIn", function (t) {
                    return Math.pow(2, 10 * (t - 1)) - .001
                }), u("ExpoInOut", function (t) {
                    return 1 > (t *= 2) ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
                })), c("Sine", u("SineOut", function (t) {
                    return Math.sin(t * a)
                }), u("SineIn", function (t) {
                    return -Math.cos(t * a) + 1
                }), u("SineInOut", function (t) {
                    return -.5 * (Math.cos(Math.PI * t) - 1)
                })), l("easing.EaseLookup", {
                    find: function (e) {
                        return t.map[e]
                    }
                }, !0), h(s.SlowMo, "SlowMo", "ease,"), h(i, "RoughEase", "ease,"), h(e, "SteppedEase", "ease,"), f
            }, !0)
    }),
    function (t) {
        "use strict";
        var e = t.GreenSockGlobals || t;
        if (!e.TweenLite) {
            var i, n, s, o, r, a = function (t) {
                    var i, n = t.split("."),
                        s = e;
                    for (i = 0; n.length > i; i++) s[n[i]] = s = s[n[i]] || {};
                    return s
                },
                l = a("com.greensock"),
                u = 1e-10,
                h = [].slice,
                c = function () {},
                p = function () {
                    var t = Object.prototype.toString,
                        e = t.call([]);
                    return function (i) {
                        return null != i && (i instanceof Array || "object" == typeof i && !!i.push && t.call(i) === e)
                    }
                }(),
                d = {},
                f = function (i, n, s, o) {
                    this.sc = d[i] ? d[i].sc : [], d[i] = this, this.gsClass = null, this.func = s;
                    var r = [];
                    this.check = function (l) {
                        for (var u, h, c, p, m = n.length, g = m; --m > -1;)(u = d[n[m]] || new f(n[m], []))
                            .gsClass ? (r[m] = u.gsClass, g--) : l && u.sc.push(this);
                        if (0 === g && s)
                            for (h = ("com.greensock." + i)
                                .split("."), c = h.pop(), p = a(h.join("."))[c] = this.gsClass = s.apply(s, r), o && (e[c] = p, "function" == typeof define && define.amd ? define((t.GreenSockAMDPath ? t.GreenSockAMDPath + "/" : "") + i.split(".")
                                    .join("/"), [],
                                    function () {
                                        return p
                                    }) : "undefined" != typeof module && module.exports && (module.exports = p)), m = 0; this.sc.length > m; m++) this.sc[m].check()
                    }, this.check(!0)
                },
                m = t._gsDefine = function (t, e, i, n) {
                    return new f(t, e, i, n)
                },
                g = l._class = function (t, e, i) {
                    return e = e || function () {}, m(t, [], function () {
                        return e
                    }, i), e
                };
            m.globals = e;
            var v = [0, 0, 1, 1],
                y = [],
                _ = g("easing.Ease", function (t, e, i, n) {
                    this._func = t, this._type = i || 0, this._power = n || 0, this._params = e ? v.concat(e) : v
                }, !0),
                x = _.map = {},
                b = _.register = function (t, e, i, n) {
                    for (var s, o, r, a, u = e.split(","), h = u.length, c = (i || "easeIn,easeOut,easeInOut")
                            .split(","); --h > -1;)
                        for (o = u[h], s = n ? g("easing." + o, null, !0) : l.easing[o] || {}, r = c.length; --r > -1;) a = c[r], x[o + "." + a] = x[a + o] = s[a] = t.getRatio ? t : t[a] || new t
                };
            for (s = _.prototype, s._calcEnd = !1, s.getRatio = function (t) {
                    if (this._func) return this._params[0] = t, this._func.apply(null, this._params);
                    var e = this._type,
                        i = this._power,
                        n = 1 === e ? 1 - t : 2 === e ? t : .5 > t ? 2 * t : 2 * (1 - t);
                    return 1 === i ? n *= n : 2 === i ? n *= n * n : 3 === i ? n *= n * n * n : 4 === i && (n *= n * n * n * n), 1 === e ? 1 - n : 2 === e ? n : .5 > t ? n / 2 : 1 - n / 2
                }, i = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], n = i.length; --n > -1;) s = i[n] + ",Power" + n, b(new _(null, null, 1, n), s, "easeOut", !0), b(new _(null, null, 2, n), s, "easeIn" + (0 === n ? ",easeNone" : "")), b(new _(null, null, 3, n), s, "easeInOut");
            x.linear = l.easing.Linear.easeIn, x.swing = l.easing.Quad.easeInOut;
            var w = g("events.EventDispatcher", function (t) {
                this._listeners = {}, this._eventTarget = t || this
            });
            s = w.prototype, s.addEventListener = function (t, e, i, n, s) {
                s = s || 0;
                var a, l, u = this._listeners[t],
                    h = 0;
                for (null == u && (this._listeners[t] = u = []), l = u.length; --l > -1;) a = u[l], a.c === e && a.s === i ? u.splice(l, 1) : 0 === h && s > a.pr && (h = l + 1);
                u.splice(h, 0, {
                    c: e,
                    s: i,
                    up: n,
                    pr: s
                }), this !== o || r || o.wake()
            }, s.removeEventListener = function (t, e) {
                var i, n = this._listeners[t];
                if (n)
                    for (i = n.length; --i > -1;)
                        if (n[i].c === e) return void n.splice(i, 1)
            }, s.dispatchEvent = function (t) {
                var e, i, n, s = this._listeners[t];
                if (s)
                    for (e = s.length, i = this._eventTarget; --e > -1;) n = s[e], n.up ? n.c.call(n.s || i, {
                        type: t,
                        target: i
                    }) : n.c.call(n.s || i)
            };
            var T = t.requestAnimationFrame,
                M = t.cancelAnimationFrame,
                S = Date.now || function () {
                    return (new Date)
                        .getTime()
                },
                C = S();
            for (i = ["ms", "moz", "webkit", "o"], n = i.length; --n > -1 && !T;) T = t[i[n] + "RequestAnimationFrame"], M = t[i[n] + "CancelAnimationFrame"] || t[i[n] + "CancelRequestAnimationFrame"];
            g("Ticker", function (t, e) {
                var i, n, s, a, l, u = this,
                    h = S(),
                    p = e !== !1 && T,
                    d = function (t) {
                        C = S(), u.time = (C - h) / 1e3;
                        var e, o = u.time - l;
                        (!i || o > 0 || t === !0) && (u.frame++, l += o + (o >= a ? .004 : a - o), e = !0), t !== !0 && (s = n(d)), e && u.dispatchEvent("tick")
                    };
                w.call(u), u.time = u.frame = 0, u.tick = function () {
                    d(!0)
                }, u.sleep = function () {
                    null != s && (p && M ? M(s) : clearTimeout(s), n = c, s = null, u === o && (r = !1))
                }, u.wake = function () {
                    null !== s && u.sleep(), n = 0 === i ? c : p && T ? T : function (t) {
                        return setTimeout(t, 0 | 1e3 * (l - u.time) + 1)
                    }, u === o && (r = !0), d(2)
                }, u.fps = function (t) {
                    return arguments.length ? (i = t, a = 1 / (i || 60), l = this.time + a, void u.wake()) : i
                }, u.useRAF = function (t) {
                    return arguments.length ? (u.sleep(), p = t, void u.fps(i)) : p
                }, u.fps(t), setTimeout(function () {
                    p && (!s || 5 > u.frame) && u.useRAF(!1)
                }, 1500)
            }), s = l.Ticker.prototype = new l.events.EventDispatcher, s.constructor = l.Ticker;
            var A = g("core.Animation", function (t, e) {
                if (this.vars = e = e || {}, this._duration = this._totalDuration = t || 0, this._delay = Number(e.delay) || 0, this._timeScale = 1, this._active = e.immediateRender === !0, this.data = e.data, this._reversed = e.reversed === !0, z) {
                    r || o.wake();
                    var i = this.vars.useFrames ? B : z;
                    i.add(this, i._time), this.vars.paused && this.paused(!0)
                }
            });
            o = A.ticker = new l.Ticker, s = A.prototype, s._dirty = s._gc = s._initted = s._paused = !1, s._totalTime = s._time = 0, s._rawPrevTime = -1, s._next = s._last = s._onUpdate = s._timeline = s.timeline = null, s._paused = !1;
            var E = function () {
                r && S() - C > 2e3 && o.wake(), setTimeout(E, 2e3)
            };
            E(), s.play = function (t, e) {
                return arguments.length && this.seek(t, e), this.reversed(!1)
                    .paused(!1)
            }, s.pause = function (t, e) {
                return arguments.length && this.seek(t, e), this.paused(!0)
            }, s.resume = function (t, e) {
                return arguments.length && this.seek(t, e), this.paused(!1)
            }, s.seek = function (t, e) {
                return this.totalTime(Number(t), e !== !1)
            }, s.restart = function (t, e) {
                return this.reversed(!1)
                    .paused(!1)
                    .totalTime(t ? -this._delay : 0, e !== !1, !0)
            }, s.reverse = function (t, e) {
                return arguments.length && this.seek(t || this.totalDuration(), e), this.reversed(!0)
                    .paused(!1)
            }, s.render = function () {}, s.invalidate = function () {
                return this
            }, s.isActive = function () {
                var t, e = this._timeline,
                    i = this._startTime;
                return !e || !this._gc && !this._paused && e.isActive() && (t = e.rawTime()) >= i && i + this.totalDuration() / this._timeScale > t
            }, s._enabled = function (t, e) {
                return r || o.wake(), this._gc = !t, this._active = this.isActive(), e !== !0 && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)), !1
            }, s._kill = function () {
                return this._enabled(!1, !1)
            }, s.kill = function (t, e) {
                return this._kill(t, e), this
            }, s._uncache = function (t) {
                for (var e = t ? this : this.timeline; e;) e._dirty = !0, e = e.timeline;
                return this
            }, s._swapSelfInParams = function (t) {
                for (var e = t.length, i = t.concat(); --e > -1;) "{self}" === t[e] && (i[e] = this);
                return i
            }, s.eventCallback = function (t, e, i, n) {
                if ("on" === (t || "")
                    .substr(0, 2)) {
                    var s = this.vars;
                    if (1 === arguments.length) return s[t];
                    null == e ? delete s[t] : (s[t] = e, s[t + "Params"] = p(i) && -1 !== i.join("")
                        .indexOf("{self}") ? this._swapSelfInParams(i) : i, s[t + "Scope"] = n), "onUpdate" === t && (this._onUpdate = e)
                }
                return this
            }, s.delay = function (t) {
                return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), this._delay = t, this) : this._delay
            }, s.duration = function (t) {
                return arguments.length ? (this._duration = this._totalDuration = t, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0), this) : (this._dirty = !1, this._duration)
            }, s.totalDuration = function (t) {
                return this._dirty = !1, arguments.length ? this.duration(t) : this._totalDuration
            }, s.time = function (t, e) {
                return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration : t, e)) : this._time
            }, s.totalTime = function (t, e, i) {
                if (r || o.wake(), !arguments.length) return this._totalTime;
                if (this._timeline) {
                    if (0 > t && !i && (t += this.totalDuration()), this._timeline.smoothChildTiming) {
                        this._dirty && this.totalDuration();
                        var n = this._totalDuration,
                            s = this._timeline;
                        if (t > n && !i && (t = n), this._startTime = (this._paused ? this._pauseTime : s._time) - (this._reversed ? n - t : t) / this._timeScale, s._dirty || this._uncache(!1), s._timeline)
                            for (; s._timeline;) s._timeline._time !== (s._startTime + s._totalTime) / s._timeScale && s.totalTime(s._totalTime, !0), s = s._timeline
                    }
                    this._gc && this._enabled(!0, !1), (this._totalTime !== t || 0 === this._duration) && this.render(t, e, !1)
                }
                return this
            }, s.progress = s.totalProgress = function (t, e) {
                return arguments.length ? this.totalTime(this.duration() * t, e) : this._time / this.duration()
            }, s.startTime = function (t) {
                return arguments.length ? (t !== this._startTime && (this._startTime = t, this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this) : this._startTime
            }, s.timeScale = function (t) {
                if (!arguments.length) return this._timeScale;
                if (t = t || u, this._timeline && this._timeline.smoothChildTiming) {
                    var e = this._pauseTime,
                        i = e || 0 === e ? e : this._timeline.totalTime();
                    this._startTime = i - (i - this._startTime) * this._timeScale / t
                }
                return this._timeScale = t, this._uncache(!1)
            }, s.reversed = function (t) {
                return arguments.length ? (t != this._reversed && (this._reversed = t, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
            }, s.paused = function (t) {
                if (!arguments.length) return this._paused;
                if (t != this._paused && this._timeline) {
                    r || t || o.wake();
                    var e = this._timeline,
                        i = e.rawTime(),
                        n = i - this._pauseTime;
                    !t && e.smoothChildTiming && (this._startTime += n, this._uncache(!1)), this._pauseTime = t ? i : null, this._paused = t, this._active = this.isActive(), !t && 0 !== n && this._initted && this.duration() && this.render(e.smoothChildTiming ? this._totalTime : (i - this._startTime) / this._timeScale, !0, !0)
                }
                return this._gc && !t && this._enabled(!0, !1), this
            };
            var k = g("core.SimpleTimeline", function (t) {
                A.call(this, 0, t), this.autoRemoveChildren = this.smoothChildTiming = !0
            });
            s = k.prototype = new A, s.constructor = k, s.kill()
                ._gc = !1, s._first = s._last = null, s._sortChildren = !1, s.add = s.insert = function (t, e) {
                    var i, n;
                    if (t._startTime = Number(e || 0) + t._delay, t._paused && this !== t._timeline && (t._pauseTime = t._startTime + (this.rawTime() - t._startTime) / t._timeScale), t.timeline && t.timeline._remove(t, !0), t.timeline = t._timeline = this, t._gc && t._enabled(!0, !0), i = this._last, this._sortChildren)
                        for (n = t._startTime; i && i._startTime > n;) i = i._prev;
                    return i ? (t._next = i._next, i._next = t) : (t._next = this._first, this._first = t), t._next ? t._next._prev = t : this._last = t, t._prev = i, this._timeline && this._uncache(!0), this
                }, s._remove = function (t, e) {
                    return t.timeline === this && (e || t._enabled(!1, !0), t.timeline = null, t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next), t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev), this._timeline && this._uncache(!0)), this
                }, s.render = function (t, e, i) {
                    var n, s = this._first;
                    for (this._totalTime = this._time = this._rawPrevTime = t; s;) n = s._next, (s._active || t >= s._startTime && !s._paused) && (s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)), s = n
                }, s.rawTime = function () {
                    return r || o.wake(), this._totalTime
                };
            var O = g("TweenLite", function (e, i, n) {
                    if (A.call(this, i, n), this.render = O.prototype.render, null == e) throw "Cannot tween a null target.";
                    this.target = e = "string" != typeof e ? e : O.selector(e) || e;
                    var s, o, r, a = e.jquery || e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType),
                        l = this.vars.overwrite;
                    if (this._overwrite = l = null == l ? R[O.defaultOverwrite] : "number" == typeof l ? l >> 0 : R[l], (a || e instanceof Array || e.push && p(e)) && "number" != typeof e[0])
                        for (this._targets = r = h.call(e, 0), this._propLookup = [], this._siblings = [], s = 0; r.length > s; s++) o = r[s], o ? "string" != typeof o ? o.length && o !== t && o[0] && (o[0] === t || o[0].nodeType && o[0].style && !o.nodeType) ? (r.splice(s--, 1), this._targets = r = r.concat(h.call(o, 0))) : (this._siblings[s] = j(o, this, !1), 1 === l && this._siblings[s].length > 1 && q(o, this, null, 1, this._siblings[s])) : (o = r[s--] = O.selector(o), "string" == typeof o && r.splice(s + 1, 1)) : r.splice(s--, 1);
                    else this._propLookup = {}, this._siblings = j(e, this, !1), 1 === l && this._siblings.length > 1 && q(e, this, null, 1, this._siblings);
                    (this.vars.immediateRender || 0 === i && 0 === this._delay && this.vars.immediateRender !== !1) && this.render(-this._delay, !1, !0)
                }, !0),
                L = function (e) {
                    return e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType)
                },
                I = function (t, e) {
                    var i, n = {};
                    for (i in t) D[i] || i in e && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!H[i] || H[i] && H[i]._autoCSS) || (n[i] = t[i], delete t[i]);
                    t.css = n
                };
            s = O.prototype = new A, s.constructor = O, s.kill()
                ._gc = !1, s.ratio = 0, s._firstPT = s._targets = s._overwrittenProps = s._startAt = null, s._notifyPluginsOfEnabled = !1, O.version = "1.11.4", O.defaultEase = s._ease = new _(null, null, 1, 1), O.defaultOverwrite = "auto", O.ticker = o, O.autoSleep = !0, O.selector = t.$ || t.jQuery || function (e) {
                    return t.$ ? (O.selector = t.$, t.$(e)) : t.document ? t.document.getElementById("#" === e.charAt(0) ? e.substr(1) : e) : e
                };
            var P = O._internals = {
                    isArray: p,
                    isSelector: L
                },
                H = O._plugins = {},
                N = O._tweenLookup = {},
                F = 0,
                D = P.reservedProps = {
                    ease: 1,
                    delay: 1,
                    overwrite: 1,
                    onComplete: 1,
                    onCompleteParams: 1,
                    onCompleteScope: 1,
                    useFrames: 1,
                    runBackwards: 1,
                    startAt: 1,
                    onUpdate: 1,
                    onUpdateParams: 1,
                    onUpdateScope: 1,
                    onStart: 1,
                    onStartParams: 1,
                    onStartScope: 1,
                    onReverseComplete: 1,
                    onReverseCompleteParams: 1,
                    onReverseCompleteScope: 1,
                    onRepeat: 1,
                    onRepeatParams: 1,
                    onRepeatScope: 1,
                    easeParams: 1,
                    yoyo: 1,
                    immediateRender: 1,
                    repeat: 1,
                    repeatDelay: 1,
                    data: 1,
                    paused: 1,
                    reversed: 1,
                    autoCSS: 1
                },
                R = {
                    none: 0,
                    all: 1,
                    auto: 2,
                    concurrent: 3,
                    allOnStart: 4,
                    preexisting: 5,
                    "true": 1,
                    "false": 0
                },
                B = A._rootFramesTimeline = new k,
                z = A._rootTimeline = new k;
            z._startTime = o.time, B._startTime = o.frame, z._active = B._active = !0, A._updateRoot = function () {
                if (z.render((o.time - z._startTime) * z._timeScale, !1, !1), B.render((o.frame - B._startTime) * B._timeScale, !1, !1), !(o.frame % 120)) {
                    var t, e, i;
                    for (i in N) {
                        for (e = N[i].tweens, t = e.length; --t > -1;) e[t]._gc && e.splice(t, 1);
                        0 === e.length && delete N[i]
                    }
                    if (i = z._first, (!i || i._paused) && O.autoSleep && !B._first && 1 === o._listeners.tick.length) {
                        for (; i && i._paused;) i = i._next;
                        i || o.sleep()
                    }
                }
            }, o.addEventListener("tick", A._updateRoot);
            var j = function (t, e, i) {
                    var n, s, o = t._gsTweenID;
                    if (N[o || (t._gsTweenID = o = "t" + F++)] || (N[o] = {
                            target: t,
                            tweens: []
                        }), e && (n = N[o].tweens, n[s = n.length] = e, i))
                        for (; --s > -1;) n[s] === e && n.splice(s, 1);
                    return N[o].tweens
                },
                q = function (t, e, i, n, s) {
                    var o, r, a, l;
                    if (1 === n || n >= 4) {
                        for (l = s.length, o = 0; l > o; o++)
                            if ((a = s[o]) !== e) a._gc || a._enabled(!1, !1) && (r = !0);
                            else if (5 === n) break;
                        return r
                    }
                    var h, c = e._startTime + u,
                        p = [],
                        d = 0,
                        f = 0 === e._duration;
                    for (o = s.length; --o > -1;)(a = s[o]) === e || a._gc || a._paused || (a._timeline !== e._timeline ? (h = h || X(e, 0, f), 0 === X(a, h, f) && (p[d++] = a)) : c >= a._startTime && a._startTime + a.totalDuration() / a._timeScale > c && ((f || !a._initted) && 2e-10 >= c - a._startTime || (p[d++] = a)));
                    for (o = d; --o > -1;) a = p[o], 2 === n && a._kill(i, t) && (r = !0), (2 !== n || !a._firstPT && a._initted) && a._enabled(!1, !1) && (r = !0);
                    return r
                },
                X = function (t, e, i) {
                    for (var n = t._timeline, s = n._timeScale, o = t._startTime; n._timeline;) {
                        if (o += n._startTime, s *= n._timeScale, n._paused) return -100;
                        n = n._timeline
                    }
                    return o /= s, o > e ? o - e : i && o === e || !t._initted && 2 * u > o - e ? u : (o += t.totalDuration() / t._timeScale / s) > e + u ? 0 : o - e - u
                };
            s._init = function () {
                var t, e, i, n, s = this.vars,
                    o = this._overwrittenProps,
                    r = this._duration,
                    a = s.immediateRender,
                    l = s.ease;
                if (s.startAt) {
                    if (this._startAt && this._startAt.render(-1, !0), s.startAt.overwrite = 0, s.startAt.immediateRender = !0, this._startAt = O.to(this.target, 0, s.startAt), a)
                        if (this._time > 0) this._startAt = null;
                        else if (0 !== r) return
                } else if (s.runBackwards && 0 !== r)
                    if (this._startAt) this._startAt.render(-1, !0), this._startAt = null;
                    else {
                        i = {};
                        for (n in s) D[n] && "autoCSS" !== n || (i[n] = s[n]);
                        if (i.overwrite = 0, i.data = "isFromStart", this._startAt = O.to(this.target, 0, i), s.immediateRender) {
                            if (0 === this._time) return
                        } else this._startAt.render(-1, !0)
                    }
                if (this._ease = l ? l instanceof _ ? s.easeParams instanceof Array ? l.config.apply(l, s.easeParams) : l : "function" == typeof l ? new _(l, s.easeParams) : x[l] || O.defaultEase : O.defaultEase, this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
                    for (t = this._targets.length; --t > -1;) this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], o ? o[t] : null) && (e = !0);
                else e = this._initProps(this.target, this._propLookup, this._siblings, o);
                if (e && O._onPluginEvent("_onInitAllProps", this), o && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), s.runBackwards)
                    for (i = this._firstPT; i;) i.s += i.c, i.c = -i.c, i = i._next;
                this._onUpdate = s.onUpdate, this._initted = !0
            }, s._initProps = function (e, i, n, s) {
                var o, r, a, l, u, h;
                if (null == e) return !1;
                this.vars.css || e.style && e !== t && e.nodeType && H.css && this.vars.autoCSS !== !1 && I(this.vars, e);
                for (o in this.vars) {
                    if (h = this.vars[o], D[o]) h && (h instanceof Array || h.push && p(h)) && -1 !== h.join("")
                        .indexOf("{self}") && (this.vars[o] = h = this._swapSelfInParams(h, this));
                    else if (H[o] && (l = new H[o])
                        ._onInitTween(e, this.vars[o], this)) {
                        for (this._firstPT = u = {
                                _next: this._firstPT,
                                t: l,
                                p: "setRatio",
                                s: 0,
                                c: 1,
                                f: !0,
                                n: o,
                                pg: !0,
                                pr: l._priority
                            }, r = l._overwriteProps.length; --r > -1;) i[l._overwriteProps[r]] = this._firstPT;
                        (l._priority || l._onInitAllProps) && (a = !0), (l._onDisable || l._onEnable) && (this._notifyPluginsOfEnabled = !0)
                    } else this._firstPT = i[o] = u = {
                        _next: this._firstPT,
                        t: e,
                        p: o,
                        f: "function" == typeof e[o],
                        n: o,
                        pg: !1,
                        pr: 0
                    }, u.s = u.f ? e[o.indexOf("set") || "function" != typeof e["get" + o.substr(3)] ? o : "get" + o.substr(3)]() : parseFloat(e[o]), u.c = "string" == typeof h && "=" === h.charAt(1) ? parseInt(h.charAt(0) + "1", 10) * Number(h.substr(2)) : Number(h) - u.s || 0;
                    u && u._next && (u._next._prev = u)
                }
                return s && this._kill(s, e) ? this._initProps(e, i, n, s) : this._overwrite > 1 && this._firstPT && n.length > 1 && q(e, this, i, this._overwrite, n) ? (this._kill(i, e), this._initProps(e, i, n, s)) : a
            }, s.render = function (t, e, i) {
                var n, s, o, r, a = this._time,
                    l = this._duration;
                if (t >= l) this._totalTime = this._time = l, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (n = !0, s = "onComplete"), 0 === l && (r = this._rawPrevTime, (0 === t || 0 > r || r === u) && r !== t && (i = !0, r > u && (s = "onReverseComplete")), this._rawPrevTime = r = !e || t || 0 === r ? t : u);
                else if (1e-7 > t) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== a || 0 === l && this._rawPrevTime > u) && (s = "onReverseComplete", n = this._reversed), 0 > t ? (this._active = !1, 0 === l && (this._rawPrevTime >= 0 && (i = !0), this._rawPrevTime = r = !e || t || 0 === this._rawPrevTime ? t : u)) : this._initted || (i = !0);
                else if (this._totalTime = this._time = t, this._easeType) {
                    var h = t / l,
                        c = this._easeType,
                        p = this._easePower;
                    (1 === c || 3 === c && h >= .5) && (h = 1 - h), 3 === c && (h *= 2), 1 === p ? h *= h : 2 === p ? h *= h * h : 3 === p ? h *= h * h * h : 4 === p && (h *= h * h * h * h), this.ratio = 1 === c ? 1 - h : 2 === c ? h : .5 > t / l ? h / 2 : 1 - h / 2
                } else this.ratio = this._ease.getRatio(t / l);
                if (this._time !== a || i) {
                    if (!this._initted) {
                        if (this._init(), !this._initted || this._gc) return;
                        this._time && !n ? this.ratio = this._ease.getRatio(this._time / l) : n && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                    }
                    for (this._active || !this._paused && this._time !== a && t >= 0 && (this._active = !0), 0 === a && (this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : s || (s = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === l) && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || y))), o = this._firstPT; o;) o.f ? o.t[o.p](o.c * this.ratio + o.s) : o.t[o.p] = o.c * this.ratio + o.s, o = o._next;
                    this._onUpdate && (0 > t && this._startAt && this._startTime && this._startAt.render(t, e, i), e || (this._time !== a || n) && this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || y)), s && (this._gc || (0 > t && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(t, e, i), n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[s] && this.vars[s].apply(this.vars[s + "Scope"] || this, this.vars[s + "Params"] || y), 0 === l && this._rawPrevTime === u && r !== u && (this._rawPrevTime = 0)))
                }
            }, s._kill = function (t, e) {
                if ("all" === t && (t = null), null == t && (null == e || e === this.target)) return this._enabled(!1, !1);
                e = "string" != typeof e ? e || this._targets || this.target : O.selector(e) || e;
                var i, n, s, o, r, a, l, u;
                if ((p(e) || L(e)) && "number" != typeof e[0])
                    for (i = e.length; --i > -1;) this._kill(t, e[i]) && (a = !0);
                else {
                    if (this._targets) {
                        for (i = this._targets.length; --i > -1;)
                            if (e === this._targets[i]) {
                                r = this._propLookup[i] || {}, this._overwrittenProps = this._overwrittenProps || [], n = this._overwrittenProps[i] = t ? this._overwrittenProps[i] || {} : "all";
                                break
                            }
                    } else {
                        if (e !== this.target) return !1;
                        r = this._propLookup, n = this._overwrittenProps = t ? this._overwrittenProps || {} : "all"
                    }
                    if (r) {
                        l = t || r, u = t !== n && "all" !== n && t !== r && ("object" != typeof t || !t._tempKill);
                        for (s in l)(o = r[s]) && (o.pg && o.t._kill(l) && (a = !0), o.pg && 0 !== o.t._overwriteProps.length || (o._prev ? o._prev._next = o._next : o === this._firstPT && (this._firstPT = o._next), o._next && (o._next._prev = o._prev), o._next = o._prev = null), delete r[s]), u && (n[s] = 1);
                        !this._firstPT && this._initted && this._enabled(!1, !1)
                    }
                }
                return a
            }, s.invalidate = function () {
                return this._notifyPluginsOfEnabled && O._onPluginEvent("_onDisable", this), this._firstPT = null, this._overwrittenProps = null, this._onUpdate = null, this._startAt = null, this._initted = this._active = this._notifyPluginsOfEnabled = !1, this._propLookup = this._targets ? {} : [], this
            }, s._enabled = function (t, e) {
                if (r || o.wake(), t && this._gc) {
                    var i, n = this._targets;
                    if (n)
                        for (i = n.length; --i > -1;) this._siblings[i] = j(n[i], this, !0);
                    else this._siblings = j(this.target, this, !0)
                }
                return A.prototype._enabled.call(this, t, e), this._notifyPluginsOfEnabled && this._firstPT ? O._onPluginEvent(t ? "_onEnable" : "_onDisable", this) : !1
            }, O.to = function (t, e, i) {
                return new O(t, e, i)
            }, O.from = function (t, e, i) {
                return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new O(t, e, i)
            }, O.fromTo = function (t, e, i, n) {
                return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, new O(t, e, n)
            }, O.delayedCall = function (t, e, i, n, s) {
                return new O(e, 0, {
                    delay: t,
                    onComplete: e,
                    onCompleteParams: i,
                    onCompleteScope: n,
                    onReverseComplete: e,
                    onReverseCompleteParams: i,
                    onReverseCompleteScope: n,
                    immediateRender: !1,
                    useFrames: s,
                    overwrite: 0
                })
            }, O.set = function (t, e) {
                return new O(t, 0, e)
            }, O.getTweensOf = function (t, e) {
                if (null == t) return [];
                t = "string" != typeof t ? t : O.selector(t) || t;
                var i, n, s, o;
                if ((p(t) || L(t)) && "number" != typeof t[0]) {
                    for (i = t.length, n = []; --i > -1;) n = n.concat(O.getTweensOf(t[i], e));
                    for (i = n.length; --i > -1;)
                        for (o = n[i], s = i; --s > -1;) o === n[s] && n.splice(i, 1)
                } else
                    for (n = j(t)
                        .concat(), i = n.length; --i > -1;)(n[i]._gc || e && !n[i].isActive()) && n.splice(i, 1);
                return n
            }, O.killTweensOf = O.killDelayedCallsTo = function (t, e, i) {
                "object" == typeof e && (i = e, e = !1);
                for (var n = O.getTweensOf(t, e), s = n.length; --s > -1;) n[s]._kill(i, t)
            };
            var U = g("plugins.TweenPlugin", function (t, e) {
                this._overwriteProps = (t || "")
                    .split(","), this._propName = this._overwriteProps[0], this._priority = e || 0, this._super = U.prototype
            }, !0);
            if (s = U.prototype, U.version = "1.10.1", U.API = 2, s._firstPT = null, s._addTween = function (t, e, i, n, s, o) {
                    var r, a;
                    return null != n && (r = "number" == typeof n || "=" !== n.charAt(1) ? Number(n) - i : parseInt(n.charAt(0) + "1", 10) * Number(n.substr(2))) ? (this._firstPT = a = {
                        _next: this._firstPT,
                        t: t,
                        p: e,
                        s: i,
                        c: r,
                        f: "function" == typeof t[e],
                        n: s || e,
                        r: o
                    }, a._next && (a._next._prev = a), a) : void 0
                }, s.setRatio = function (t) {
                    for (var e, i = this._firstPT, n = 1e-6; i;) e = i.c * t + i.s, i.r ? e = 0 | e + (e > 0 ? .5 : -.5) : n > e && e > -n && (e = 0), i.f ? i.t[i.p](e) : i.t[i.p] = e, i = i._next
                }, s._kill = function (t) {
                    var e, i = this._overwriteProps,
                        n = this._firstPT;
                    if (null != t[this._propName]) this._overwriteProps = [];
                    else
                        for (e = i.length; --e > -1;) null != t[i[e]] && i.splice(e, 1);
                    for (; n;) null != t[n.n] && (n._next && (n._next._prev = n._prev), n._prev ? (n._prev._next = n._next, n._prev = null) : this._firstPT === n && (this._firstPT = n._next)), n = n._next;
                    return !1
                }, s._roundProps = function (t, e) {
                    for (var i = this._firstPT; i;)(t[this._propName] || null != i.n && t[i.n.split(this._propName + "_")
                        .join("")]) && (i.r = e), i = i._next
                }, O._onPluginEvent = function (t, e) {
                    var i, n, s, o, r, a = e._firstPT;
                    if ("_onInitAllProps" === t) {
                        for (; a;) {
                            for (r = a._next, n = s; n && n.pr > a.pr;) n = n._next;
                            (a._prev = n ? n._prev : o) ? a._prev._next = a: s = a, (a._next = n) ? n._prev = a : o = a, a = r
                        }
                        a = e._firstPT = s
                    }
                    for (; a;) a.pg && "function" == typeof a.t[t] && a.t[t]() && (i = !0), a = a._next;
                    return i
                }, U.activate = function (t) {
                    for (var e = t.length; --e > -1;) t[e].API === U.API && (H[(new t[e])
                        ._propName] = t[e]);
                    return !0
                }, m.plugin = function (t) {
                    if (!(t && t.propName && t.init && t.API)) throw "illegal plugin definition.";
                    var e, i = t.propName,
                        n = t.priority || 0,
                        s = t.overwriteProps,
                        o = {
                            init: "_onInitTween",
                            set: "setRatio",
                            kill: "_kill",
                            round: "_roundProps",
                            initAll: "_onInitAllProps"
                        },
                        r = g("plugins." + i.charAt(0)
                            .toUpperCase() + i.substr(1) + "Plugin",
                            function () {
                                U.call(this, i, n), this._overwriteProps = s || []
                            }, t.global === !0),
                        a = r.prototype = new U(i);
                    a.constructor = r, r.API = t.API;
                    for (e in o) "function" == typeof t[e] && (a[o[e]] = t[e]);
                    return r.version = t.version, U.activate([r]), r
                }, i = t._gsQueue) {
                for (n = 0; i.length > n; n++) i[n]();
                for (s in d) d[s].func || t.console.log("GSAP encountered missing dependency: com.greensock." + s)
            }
            r = !1
        }
    }(window), window.Modernizr = function (t, e, i) {
        function n(t) {
            g.cssText = t
        }

        function s(t, e) {
            return n(_.join(t + ";") + (e || ""))
        }

        function o(t, e) {
            return typeof t === e
        }

        function r(t, e) {
            return !!~("" + t)
                .indexOf(e)
        }

        function a(t, e) {
            for (var n in t) {
                var s = t[n];
                if (!r(s, "-") && g[s] !== i) return "pfx" == e ? s : !0
            }
            return !1
        }

        function l(t, e, n) {
            for (var s in t) {
                var r = e[t[s]];
                if (r !== i) return n === !1 ? t[s] : o(r, "function") ? r.bind(n || e) : r
            }
            return !1
        }

        function u(t, e, i) {
            var n = t.charAt(0)
                .toUpperCase() + t.slice(1),
                s = (t + " " + b.join(n + " ") + n)
                .split(" ");
            return o(e, "string") || o(e, "undefined") ? a(s, e) : (s = (t + " " + w.join(n + " ") + n)
                .split(" "), l(s, e, i))
        }
        var h = "2.8.2",
            c = {},
            p = !0,
            d = e.documentElement,
            f = "modernizr",
            m = e.createElement(f),
            g = m.style,
            v, y = {}.toString,
            _ = " -webkit- -moz- -o- -ms- ".split(" "),
            x = "Webkit Moz O ms",
            b = x.split(" "),
            w = x.toLowerCase()
            .split(" "),
            T = {},
            M = {},
            S = {},
            C = [],
            A = C.slice,
            E, k = function (t, i, n, s) {
                var o, r, a, l, u = e.createElement("div"),
                    h = e.body,
                    c = h || e.createElement("body");
                if (parseInt(n, 10))
                    for (; n--;) a = e.createElement("div"), a.id = s ? s[n] : f + (n + 1), u.appendChild(a);
                return o = ["&#173;", '<style id="s', f, '">', t, "</style>"].join(""), u.id = f, (h ? u : c)
                    .innerHTML += o, c.appendChild(u), h || (c.style.background = "", c.style.overflow = "hidden", l = d.style.overflow, d.style.overflow = "hidden", d.appendChild(c)), r = i(u, t), h ? u.parentNode.removeChild(u) : (c.parentNode.removeChild(c), d.style.overflow = l), !!r
            },
            O = {}.hasOwnProperty,
            L;
        L = o(O, "undefined") || o(O.call, "undefined") ? function (t, e) {
            return e in t && o(t.constructor.prototype[e], "undefined")
        } : function (t, e) {
            return O.call(t, e)
        }, Function.prototype.bind || (Function.prototype.bind = function (t) {
            var e = this;
            if ("function" != typeof e) throw new TypeError;
            var i = A.call(arguments, 1),
                n = function () {
                    if (this instanceof n) {
                        var s = function () {};
                        s.prototype = e.prototype;
                        var o = new s,
                            r = e.apply(o, i.concat(A.call(arguments)));
                        return Object(r) === r ? r : o
                    }
                    return e.apply(t, i.concat(A.call(arguments)))
                };
            return n
        }), T.webgl = function () {
            return !!t.WebGLRenderingContext
        }, T.touch = function () {
            var i;
            return "ontouchstart" in t || t.DocumentTouch && e instanceof DocumentTouch ? i = !0 : k(["@media (", _.join("touch-enabled),("), f, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function (t) {
                i = 9 === t.offsetTop
            }), i
        }, T.cssanimations = function () {
            return u("animationName")
        }, T.csstransforms = function () {
            return !!u("transform")
        }, T.csstransforms3d = function () {
            var t = !!u("perspective");
            return t && "webkitPerspective" in d.style && k("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function (e, i) {
                t = 9 === e.offsetLeft && 3 === e.offsetHeight
            }), t
        }, T.csstransitions = function () {
            return u("transition")
        };
        for (var I in T) L(T, I) && (E = I.toLowerCase(), c[E] = T[I](), C.push((c[E] ? "" : "no-") + E));
        return c.addTest = function (t, e) {
                if ("object" == typeof t)
                    for (var n in t) L(t, n) && c.addTest(n, t[n]);
                else {
                    if (t = t.toLowerCase(), c[t] !== i) return c;
                    e = "function" == typeof e ? e() : e, "undefined" != typeof p && p && (d.className += " " + (e ? "" : "no-") + t), c[t] = e
                }
                return c
            }, n(""), m = v = null,
            function (t, e) {
                function i(t, e) {
                    var i = t.createElement("p"),
                        n = t.getElementsByTagName("head")[0] || t.documentElement;
                    return i.innerHTML = "x<style>" + e + "</style>", n.insertBefore(i.lastChild, n.firstChild)
                }

                function n() {
                    var t = y.elements;
                    return "string" == typeof t ? t.split(" ") : t
                }

                function s(t) {
                    var e = g[t[f]];
                    return e || (e = {}, m++, t[f] = m, g[m] = e), e
                }

                function o(t, i, n) {
                    if (i || (i = e), v) return i.createElement(t);
                    n || (n = s(i));
                    var o;
                    return o = n.cache[t] ? n.cache[t].cloneNode() : p.test(t) ? (n.cache[t] = n.createElem(t))
                        .cloneNode() : n.createElem(t), !o.canHaveChildren || c.test(t) || o.tagUrn ? o : n.frag.appendChild(o)
                }

                function r(t, i) {
                    if (t || (t = e), v) return t.createDocumentFragment();
                    i = i || s(t);
                    for (var o = i.frag.cloneNode(), r = 0, a = n(), l = a.length; l > r; r++) o.createElement(a[r]);
                    return o
                }

                function a(t, e) {
                    e.cache || (e.cache = {}, e.createElem = t.createElement, e.createFrag = t.createDocumentFragment, e.frag = e.createFrag()), t.createElement = function (i) {
                        return y.shivMethods ? o(i, t, e) : e.createElem(i)
                    }, t.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + n()
                        .join()
                        .replace(/[\w\-]+/g, function (t) {
                            return e.createElem(t), e.frag.createElement(t), 'c("' + t + '")'
                        }) + ");return n}")(y, e.frag)
                }

                function l(t) {
                    t || (t = e);
                    var n = s(t);
                    return y.shivCSS && !d && !n.hasCSS && (n.hasCSS = !!i(t, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), v || a(t, n), t
                }
                var u = "3.7.0",
                    h = t.html5 || {},
                    c = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
                    p = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
                    d, f = "_html5shiv",
                    m = 0,
                    g = {},
                    v;
                ! function () {
                    try {
                        var t = e.createElement("a");
                        t.innerHTML = "<xyz></xyz>", d = "hidden" in t, v = 1 == t.childNodes.length || function () {
                            e.createElement("a");
                            var t = e.createDocumentFragment();
                            return "undefined" == typeof t.cloneNode || "undefined" == typeof t.createDocumentFragment || "undefined" == typeof t.createElement
                        }()
                    } catch (i) {
                        d = !0, v = !0
                    }
                }();
                var y = {
                    elements: h.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
                    version: u,
                    shivCSS: h.shivCSS !== !1,
                    supportsUnknownElements: v,
                    shivMethods: h.shivMethods !== !1,
                    type: "default",
                    shivDocument: l,
                    createElement: o,
                    createDocumentFragment: r
                };
                t.html5 = y, l(e)
            }(this, e), c._version = h, c._prefixes = _, c._domPrefixes = w, c._cssomPrefixes = b, c.testProp = function (t) {
                return a([t])
            }, c.testAllProps = u, c.testStyles = k, c.prefixed = function (t, e, i) {
                return e ? u(t, e, i) : u(t, "pfx")
            }, d.className = d.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (p ? " js " + C.join(" ") : ""), c
    }(this, this.document),
    function (t, e, i) {
        function n(t) {
            return "[object Function]" == f.call(t)
        }

        function s(t) {
            return "string" == typeof t
        }

        function o() {}

        function r(t) {
            return !t || "loaded" == t || "complete" == t || "uninitialized" == t
        }

        function a() {
            var t = m.shift();
            g = 1, t ? t.t ? p(function () {
                ("c" == t.t ? A.injectCss : A.injectJs)(t.s, 0, t.a, t.x, t.e, 1)
            }, 0) : (t(), a()) : g = 0
        }

        function l(t, i, n, s, o, l, u) {
            function h(e) {
                if (!f && r(c.readyState) && (x.r = f = 1, !g && a(), c.onload = c.onreadystatechange = null, e)) {
                    "img" != t && p(function () {
                        _.removeChild(c)
                    }, 50);
                    for (var n in M[i]) M[i].hasOwnProperty(n) && M[i][n].onload()
                }
            }
            var u = u || A.errorTimeout,
                c = e.createElement(t),
                f = 0,
                v = 0,
                x = {
                    t: n,
                    s: i,
                    e: o,
                    a: l,
                    x: u
                };
            1 === M[i] && (v = 1, M[i] = []), "object" == t ? c.data = i : (c.src = i, c.type = t), c.width = c.height = "0", c.onerror = c.onload = c.onreadystatechange = function () {
                h.call(this, v)
            }, m.splice(s, 0, x), "img" != t && (v || 2 === M[i] ? (_.insertBefore(c, y ? null : d), p(h, u)) : M[i].push(c))
        }

        function u(t, e, i, n, o) {
            return g = 0, e = e || "j", s(t) ? l("c" == e ? b : x, t, e, this.i++, i, n, o) : (m.splice(this.i++, 0, t), 1 == m.length && a()), this
        }

        function h() {
            var t = A;
            return t.loader = {
                load: u,
                i: 0
            }, t
        }
        var c = e.documentElement,
            p = t.setTimeout,
            d = e.getElementsByTagName("script")[0],
            f = {}.toString,
            m = [],
            g = 0,
            v = "MozAppearance" in c.style,
            y = v && !!e.createRange()
            .compareNode,
            _ = y ? c : d.parentNode,
            c = t.opera && "[object Opera]" == f.call(t.opera),
            c = !!e.attachEvent && !c,
            x = v ? "object" : c ? "script" : "img",
            b = c ? "script" : x,
            w = Array.isArray || function (t) {
                return "[object Array]" == f.call(t)
            },
            T = [],
            M = {},
            S = {
                timeout: function (t, e) {
                    return e.length && (t.timeout = e[0]), t
                }
            },
            C, A;
        A = function (t) {
            function e(t) {
                var t = t.split("!"),
                    e = T.length,
                    i = t.pop(),
                    n = t.length,
                    i = {
                        url: i,
                        origUrl: i,
                        prefixes: t
                    },
                    s, o, r;
                for (o = 0; n > o; o++) r = t[o].split("="), (s = S[r.shift()]) && (i = s(i, r));
                for (o = 0; e > o; o++) i = T[o](i);
                return i
            }

            function r(t, s, o, r, a) {
                var l = e(t),
                    u = l.autoCallback;
                l.url.split(".")
                    .pop()
                    .split("?")
                    .shift(), l.bypass || (s && (s = n(s) ? s : s[t] || s[r] || s[t.split("/")
                        .pop()
                        .split("?")[0]]), l.instead ? l.instead(t, s, o, r, a) : (M[l.url] ? l.noexec = !0 : M[l.url] = 1, o.load(l.url, l.forceCSS || !l.forceJS && "css" == l.url.split(".")
                        .pop()
                        .split("?")
                        .shift() ? "c" : i, l.noexec, l.attrs, l.timeout), (n(s) || n(u)) && o.load(function () {
                        h(), s && s(l.origUrl, a, r), u && u(l.origUrl, a, r), M[l.url] = 2
                    })))
            }

            function a(t, e) {
                function i(t, i) {
                    if (t) {
                        if (s(t)) i || (u = function () {
                            var t = [].slice.call(arguments);
                            h.apply(this, t), c()
                        }), r(t, u, e, 0, a);
                        else if (Object(t) === t)
                            for (d in p = function () {
                                    var e = 0,
                                        i;
                                    for (i in t) t.hasOwnProperty(i) && e++;
                                    return e
                                }(), t) t.hasOwnProperty(d) && (!i && !--p && (n(u) ? u = function () {
                                var t = [].slice.call(arguments);
                                h.apply(this, t), c()
                            } : u[d] = function (t) {
                                return function () {
                                    var e = [].slice.call(arguments);
                                    t && t.apply(this, e), c()
                                }
                            }(h[d])), r(t[d], u, e, d, a))
                    } else !i && c()
                }
                var a = !!t.test,
                    l = t.load || t.both,
                    u = t.callback || o,
                    h = u,
                    c = t.complete || o,
                    p, d;
                i(a ? t.yep : t.nope, !!l), l && i(l)
            }
            var l, u, c = this.yepnope.loader;
            if (s(t)) r(t, 0, c, 0);
            else if (w(t))
                for (l = 0; l < t.length; l++) u = t[l], s(u) ? r(u, 0, c, 0) : w(u) ? A(u) : Object(u) === u && a(u, c);
            else Object(t) === t && a(t, c)
        }, A.addPrefix = function (t, e) {
            S[t] = e
        }, A.addFilter = function (t) {
            T.push(t)
        }, A.errorTimeout = 1e4, null == e.readyState && e.addEventListener && (e.readyState = "loading", e.addEventListener("DOMContentLoaded", C = function () {
            e.removeEventListener("DOMContentLoaded", C, 0), e.readyState = "complete"
        }, 0)), t.yepnope = h(), t.yepnope.executeStack = a, t.yepnope.injectJs = function (t, i, n, s, l, u) {
            var h = e.createElement("script"),
                c, f, s = s || A.errorTimeout;
            h.src = t;
            for (f in n) h.setAttribute(f, n[f]);
            i = u ? a : i || o, h.onreadystatechange = h.onload = function () {
                !c && r(h.readyState) && (c = 1, i(), h.onload = h.onreadystatechange = null)
            }, p(function () {
                c || (c = 1, i(1))
            }, s), l ? h.onload() : d.parentNode.insertBefore(h, d)
        }, t.yepnope.injectCss = function (t, i, n, s, r, l) {
            var s = e.createElement("link"),
                u, i = l ? a : i || o;
            s.href = t, s.rel = "stylesheet", s.type = "text/css";
            for (u in n) s.setAttribute(u, n[u]);
            r || (d.parentNode.insertBefore(s, d), p(i, 0))
        }
    }(this, document), Modernizr.load = function () {
        yepnope.apply(window, [].slice.call(arguments, 0))
    };
var H = H || {};
H.vendor = /webkit/i.test(navigator.appVersion) ? "webkit" : /firefox/i.test(navigator.userAgent) ? "Moz" : "opera" in window ? "O" : navigator.userAgent.indexOf("Trident") > -1 ? "ms" : "", H.ease = {}, H.ease.expoOut = ["cubic-bezier(0.230, 1.000, 0.320, 1.000)", Expo.easeOut], H.ease.expoInOut = ["cubic-bezier(0.860, 0.000, 0.070, 1.000)", Expo.easeInOut], H.has3d = Modernizr.csstransforms3d, H.hasTransitions = Modernizr.csstransitions, H.isIE9 = !1, H.isTouch = Modernizr.touch;
var transEndEventNames = {
    WebkitTransition: "webkitTransitionEnd",
    MozTransition: "transitionend",
    transition: "transitionend"
};
H.transEndEventName = transEndEventNames[Modernizr.prefixed("transition")], H.soundExt = "Moz" == H.vendor ? ".ogg" : ".mp3", H.videoExt = "Moz" == H.vendor ? ".ogv" : ".mp4", H.animate = function (t, e, n, s, o, r) {
    var a = 0;
    o && (a = o), setTimeout(function () {
        if (H.hasTransitions) {
            var o = !1,
                a = "";
            for (i in n) "pos" != i && "scale" != i && "rotate" != i || o ? a += "" != a ? "," + i : "" + i : (a += "" != a ? ",-" + H.vendor.toLowerCase() + "-transform " : "-" + H.vendor.toLowerCase() + "-transform ", o = !0);
            t.style[H.vendor + "TransitionProperty"] = a, t.style[H.vendor + "TransitionDuration"] = 1e3 * e + "ms", s && !H.isIE9 && (t.style[H.vendor + "TransitionTimingFunction"] = s[0]), o = !1;
            var l = "";
            for (i in n) "pos" == i ? (l += H.has3d ? "translate3d(" + n[i].left + "," + n[i].top + ",0px) " : "translate(" + n[i].left + "," + n[i].top + ") ", o = !0) : "scale" == i ? (l += "scale(" + n[i] + ") ", o = !0) : "rotate" == i ? (l += "rotate(" + n[i] + "deg) ", o = !0) : t.style[i] = n[i];
            if (o && (t.style[H.vendor + "Transform"] = l), r) {
                var u = function () {
                    t.removeEventListener(H.transEndEventName, u), r()
                };
                t.addEventListener(H.transEndEventName, u, !1)
            }
        } else {
            var h = {},
                c = Sine.easeOut;
            s && (c = s[1]);
            for (i in n) "pos" == i ? (h.marginLeft = n[i].left, h.marginTop = n[i].top) : h[i] = n[i];
            TweenMax.to(t, e, {
                css: h,
                ease: c,
                onComplete: r
            })
        }
    }, a)
}, H.clearCssTransition = function (t) {
    t.style[H.vendor + "Transition"] = "", H.isIE9 || (t.style[H.vendor + "TransitionDelay"] = "")
}, H.bind = function (t, e, i) {
    t.addEventListener ? t.addEventListener(e, i, !1) : t.attachEvent && t.attachEvent("on" + e, i)
}, H.unbind = function (t, e, i) {
    t.removeEventListener ? t.removeEventListener(e, i, !1) : t.detachEvent && t.detachEvent("on" + e, i)
}, H.createEl = function (t, e, n, s) {
    var o = document.createElement(t);
    for (i in e) "transform" == i ? o.style[H.vendor + "Transform"] = e[i] : o.style[i] = e[i];
    return s && o.setAttribute("class", s), n && n.appendChild(o), o
}, H.createImg = function (t, e, n, s, o) {
    if (null == s) {
        var r = new Image;
        r.src = t
    } else r = s.addImage(t);
    for (i in e) "transform" == i ? r.style[H.vendor + "Transform"] = e[i] : r.style[i] = e[i];
    return o && r.setAttribute("class", o), n && n.appendChild(r), r
}, H.createVideo = function (t, e, n, s, o) {
    if (null == s) {
        var r = document.createElement("video");
        r.src = t
    } else r = s.addVideo(t);
    for (i in e) "transform" == i ? r.style[H.vendor + "Transform"] = e[i] : r.style[i] = e[i];
    return o && r.setAttribute("class", o), n && n.appendChild(r), r
}, H.createLink = function (t, e, i) {
    var n = document.createElement("a");
    n.setAttribute("href", e), i && n.setAttribute("target", i);
    var s = $(t)
        .parent()[0];
    return s.removeChild(t), s.appendChild(n), n.appendChild(t), n
}, H.createScroll = function (t) {
    var e;
    if (H.isTouch) {
        var i = Math.floor(1e3 * Math.random());
        $(t)
            .wrapInner('<div id="' + i + 'viewport" />'), $("#" + i + "viewport")
            .css({
                height: $(t)
                    .height(),
                overflow: "hidden"
            }), e = new iScroll($("#" + i + "viewport")[0], {
                vScrollbar: !1,
                bounce: !0
            })
    } else e = $(t)
        .scrollpanel()
        .data("scrollpanel");
    return e
}, H.updateScroll = function (t) {
    t.refresh ? t.refresh() : t.update()
}, H.clear = function () {
    var t = document.createElement("div");
    return t.style.clear = "both", t
}, H.resizeToContainer = function (t, e, i, n, s, o) {
    var r, a, l = $(e)
        .width(),
        u = $(e)
        .height(),
        h = l / u,
        c = 1;
    o && (c = o), i > h ? (a = u * c, r = a * i) : (r = l * c, a = r / i), $(t)
        .css("width", r + "px"), $(t)
        .css("height", a + "px"), (1 == n || null == n) && $(t)
        .css("left", (l - r) / 2 + "px"), (1 == s || null == s) && $(t)
        .css("top", (u - a) / 2 + "px")
}, H.distance = function (t, e) {
    var i = t.x - e.x,
        n = t.y - e.y;
    return Math.sqrt(i * i + n * n)
};
var isMobile = {
    AndroidPhone: function () {
        return navigator.userAgent.match(/Android/i) && navigator.userAgent.match(/Mobile/i) ? !0 : !1
    },
    AndroidTablet: function () {
        return navigator.userAgent.match(/Android/i) && !navigator.userAgent.match(/Mobile/i) ? !0 : !1
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i) ? !0 : !1
    },
    iPad: function () {
        return navigator.userAgent.match(/iPad/i) ? !0 : !1
    },
    iPhone: function () {
        return navigator.userAgent.match(/iPhone|iPod/i) ? !0 : !1
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i) ? !0 : !1
    },
    any: function () {
        return isMobile.AndroidPhone() || isMobile.AndroidTablet() || isMobile.BlackBerry() || isMobile.iPad() || isMobile.Windows()
    }
};
isMobile.iPhone() || isMobile.BlackBerry() || isMobile.AndroidPhone() || isMobile.Windows() ? document.location = document.location.href.replace(document.location.hash, "") + "mobile/" + document.location.hash : isMobile.any();
try {
    jQuery.rsCSS3Easing && (jQuery.rsCSS3Easing.easeOutExpo = "cubic-bezier(0.165, 0.840, 0.440, 1.000)", jQuery.rsCSS3Easing.easeInOutExpo = "cubic-bezier(0.770, 0.000, 0.175, 1.000)")
} catch (e) {}
String.prototype.parseURL = function () {
        return this.replace(/[A-Za-z]+:\/\/[A-Za-z0-9-_]+\.[A-Za-z0-9-_:%&~\?\/.=]+/g, function (t) {
            return "<a href='" + t + "' target='_blank'>" + t + "</a>"
        })
    }, String.prototype.parseUsername = function () {
        return this.replace(/[@]+[A-Za-z0-9-_]+/g, function (t) {
            var e = t.replace("@", "");
            return "<a href='http://twitter.com/" + e + "' target='_blank'>" + t + "</a>"
        })
    }, String.prototype.parseTags = function () {
        return this.replace(/[#]+[A-Za-z0-9-_]+/g, function (t) {
            var e = t.replace("#", "%23");
            return "<a href='http://twitter.com/search?q=" + e + "&src=hash' target='_blank'>" + t + "</a>"
        })
    },
    function (t) {
        function e(t) {
            t = t || {}, this.settings = t, null == t.statusInterval && (t.statusInterval = 5e3), null == t.loggingDelay && (t.loggingDelay = 5e3), null == t.noProgressTimeout && (t.noProgressTimeout = 5e3);
            var e = [],
                n = [],
                s, o = Date.now(),
                r = {
                    QUEUED: 0,
                    WAITING: 1,
                    LOADED: 2,
                    ERROR: 3,
                    TIMEOUT: 4
                },
                a = function (t) {
                    return null == t ? [] : Array.isArray(t) ? t : [t]
                };
            this.add = function (t) {
                t.tags = new i(t.tags), null == t.priority && (t.priority = 1 / 0), e.push({
                    resource: t,
                    status: r.QUEUED
                })
            }, this.addProgressListener = function (t, e) {
                n.push({
                    callback: t,
                    tags: new i(e)
                })
            }, this.addCompletionListener = function (t, e) {
                n.push({
                    tags: new i(e),
                    callback: function (e) {
                        e.completedCount === e.totalCount && t(e)
                    }
                })
            };
            var l = function (t) {
                t = a(t);
                var e = function (e) {
                    for (var i = e.resource, n = 1 / 0, s = 0; s < i.tags.length; s++)
                        for (var o = 0; o < Math.min(t.length, n) && !(i.tags.all[s] === t[o] && n > o && (n = o, 0 === n)) && 0 !== n; o++);
                    return n
                };
                return function (t, i) {
                    var n = e(t),
                        s = e(i);
                    return s > n ? -1 : n > s ? 1 : t.priority < i.priority ? -1 : t.priority > i.priority ? 1 : 0
                }
            };
            this.start = function (t) {
                s = Date.now();
                var i = l(t);
                e.sort(i);
                for (var n = 0, o = e.length; o > n; n++) {
                    var a = e[n];
                    a.status = r.WAITING, a.resource.start(this)
                }
                setTimeout(u, 100)
            };
            var u = function () {
                for (var i = !1, n = Date.now() - o, s = n >= t.noProgressTimeout, a = n >= t.loggingDelay, l = 0, h = e.length; h > l; l++) {
                    var c = e[l];
                    c.status === r.WAITING && (c.resource.checkStatus && c.resource.checkStatus(), c.status === r.WAITING && (s ? c.resource.onTimeout() : i = !0))
                }
                a && i && p(), i && setTimeout(u, t.statusInterval)
            };
            this.isBusy = function () {
                for (var t = 0, i = e.length; i > t; t++)
                    if (e[t].status === r.QUEUED || e[t].status === r.WAITING) return !0;
                return !1
            };
            var h = function (t, i) {
                var s = null,
                    a, l, u, h, p;
                for (a = 0, l = e.length; l > a; a++)
                    if (e[a].resource === t) {
                        s = e[a];
                        break
                    }
                if (null != s && s.status === r.WAITING)
                    for (s.status = i, o = Date.now(), u = t.tags.length, a = 0, l = n.length; l > a; a++) h = n[a], p = 0 === h.tags.length ? !0 : t.tags.intersects(h.tags), p && c(s, h)
            };
            this.onLoad = function (t) {
                h(t, r.LOADED)
            }, this.onError = function (t) {
                h(t, r.ERROR)
            }, this.onTimeout = function (t) {
                h(t, r.TIMEOUT)
            };
            var c = function (t, i) {
                    var n = 0,
                        s = 0,
                        o, a, l, u;
                    for (o = 0, a = e.length; a > o; o++) l = e[o], u = !1, u = 0 === i.tags.length ? !0 : l.resource.tags.intersects(i.tags), u && (s++, (l.status === r.LOADED || l.status === r.ERROR || l.status === r.TIMEOUT) && n++);
                    i.callback({
                        resource: t.resource,
                        loaded: t.status === r.LOADED,
                        error: t.status === r.ERROR,
                        timeout: t.status === r.TIMEOUT,
                        completedCount: n,
                        totalCount: s
                    })
                },
                p = this.log = function (t) {
                    if (window.console) {
                        var i = Math.round((Date.now() - s) / 1e3);
                        window.console.log("PxLoader elapsed: " + i + " sec");
                        for (var n = 0, o = e.length; o > n; n++) {
                            var a = e[n];
                            if (t || a.status === r.WAITING) {
                                var l = "PxLoader: #" + n + " " + a.resource.getName();
                                switch (a.status) {
                                case r.QUEUED:
                                    l += " (Not Started)";
                                    break;
                                case r.WAITING:
                                    l += " (Waiting)";
                                    break;
                                case r.LOADED:
                                    l += " (Loaded)";
                                    break;
                                case r.ERROR:
                                    l += " (Error)";
                                    break;
                                case r.TIMEOUT:
                                    l += " (Timeout)"
                                }
                                a.resource.tags.length > 0 && (l += " Tags: [" + a.resource.tags.all.join(",") + "]"), window.console.log(l)
                            }
                        }
                    }
                }
        }

        function i(t) {
            if (this.all = [], this.first = null, this.length = 0, this.lookup = {}, t) {
                if (Array.isArray(t)) this.all = t.slice(0);
                else if ("object" == typeof t)
                    for (var e in t) t.hasOwnProperty(e) && this.all.push(e);
                else this.all.push(t);
                this.length = this.all.length, this.length > 0 && (this.first = this.all[0]);
                for (var i = 0; i < this.length; i++) this.lookup[this.all[i]] = !0
            }
        }
        i.prototype.intersects = function (t) {
            if (0 === this.length || 0 === t.length) return !1;
            if (1 === this.length && 1 === t.length) return this.first === t.first;
            if (t.length < this.length) return t.intersects(this);
            for (var e in this.lookup)
                if (t.lookup[e]) return !0;
            return !1
        }, "function" == typeof define && define.amd && define("PxLoader", [], function () {
            return e
        }), t.PxLoader = e
    }(this), Date.now || (Date.now = function t() {
        return (new Date)
            .getTime()
    }), Array.isArray || (Array.isArray = function (t) {
        return "[object Array]" === Object.prototype.toString.call(t)
    }), PxLoader.prototype.addImage = function (t, e, i) {
        var n = new PxLoaderImage(t, e, i);
        return this.add(n), n.img
    }, "function" == typeof define && define.amd && define("PxLoaderImage", [], function () {
        return PxLoaderImage
    }), PxLoader.prototype.addVideo = function (t, e, i) {
        var n = new PxLoaderVideo(t, e, i);
        return this.add(n), n.vid
    }, "function" == typeof define && define.amd && define("PxLoaderVideo", [], function () {
        return PxLoaderVideo
    }), PxLoader.prototype.addSound = function (t, e, i, n) {
        var s = new PxLoaderSound(t, e, i, n);
        return s.sound
    }, "function" == typeof define && define.amd && define("PxLoaderSound", [], function () {
        return PxLoaderSound
    }), /** @license*/
function (t, e) {
    "use strict";

    function i(i, n) {
        function s(t) {
            return a.preferFlash && Re && !a.ignoreFlash && a.flash[t] !== e && a.flash[t]
        }

        function o(t) {
            return function (e) {
                var i = this._s,
                    n;
                return i && i._a ? n = t.call(this, e) : (a._wD(i && i.id ? i.id + ": Ignoring " + e.type : p + "Ignoring " + e.type), n = null), n
            }
        }
        this.setupOptions = {
            url: i || null,
            flashVersion: 8,
            debugMode: !0,
            debugFlash: !1,
            useConsole: !0,
            consoleOnly: !0,
            waitForWindowLoad: !1,
            bgColor: "#ffffff",
            useHighPerformance: !1,
            flashPollingInterval: null,
            html5PollingInterval: null,
            flashLoadTimeout: 1e3,
            wmode: null,
            allowScriptAccess: "always",
            useFlashBlock: !1,
            useHTML5Audio: !0,
            html5Test: /^(probably|maybe)$/i,
            preferFlash: !0,
            noSWFCache: !1,
            idPrefix: "sound"
        }, this.defaultOptions = {
            autoLoad: !1,
            autoPlay: !1,
            from: null,
            loops: 1,
            onid3: null,
            onload: null,
            whileloading: null,
            onplay: null,
            onpause: null,
            onresume: null,
            whileplaying: null,
            onposition: null,
            onstop: null,
            onfailure: null,
            onfinish: null,
            multiShot: !0,
            multiShotEvents: !1,
            position: null,
            pan: 0,
            stream: !0,
            to: null,
            type: null,
            usePolicyFile: !1,
            volume: 100
        }, this.flash9Options = {
            isMovieStar: null,
            usePeakData: !1,
            useWaveformData: !1,
            useEQData: !1,
            onbufferchange: null,
            ondataerror: null
        }, this.movieStarOptions = {
            bufferTime: 3,
            serverURL: null,
            onconnect: null,
            duration: null
        }, this.audioFormats = {
            mp3: {
                type: ['audio/mpeg; codecs="mp3"', "audio/mpeg", "audio/mp3", "audio/MPA", "audio/mpa-robust"],
                required: !0
            },
            mp4: {
                related: ["aac", "m4a", "m4b"],
                type: ['audio/mp4; codecs="mp4a.40.2"', "audio/aac", "audio/x-m4a", "audio/MP4A-LATM", "audio/mpeg4-generic"],
                required: !1
            },
            ogg: {
                type: ["audio/ogg; codecs=vorbis"],
                required: !1
            },
            opus: {
                type: ["audio/ogg; codecs=opus", "audio/opus"],
                required: !1
            },
            wav: {
                type: ['audio/wav; codecs="1"', "audio/wav", "audio/wave", "audio/x-wav"],
                required: !1
            }
        }, this.movieID = "sm2-container", this.id = n || "sm2movie", this.debugID = "soundmanager-debug", this.debugURLParam = /([#?&])debug=1/i, this.versionNumber = "V2.97a.20130512", this.version = null, this.movieURL = null, this.altURL = null, this.swfLoaded = !1, this.enabled = !1, this.oMC = null, this.sounds = {}, this.soundIDs = [], this.muted = !1, this.didFlashBlock = !1, this.filePattern = null, this.filePatterns = {
            flash8: /\.mp3(\?.*)?$/i,
            flash9: /\.mp3(\?.*)?$/i
        }, this.features = {
            buffering: !1,
            peakData: !1,
            waveformData: !1,
            eqData: !1,
            movieStar: !1
        }, this.sandbox = {
            type: null,
            types: {
                remote: "remote (domain-based) rules",
                localWithFile: "local with file access (no internet access)",
                localWithNetwork: "local with network (internet access only, no local access)",
                localTrusted: "local, trusted (local+internet access)"
            },
            description: null,
            noRemote: null,
            noLocal: null
        }, this.html5 = {
            usingFlash: null
        }, this.flash = {}, this.html5Only = !1, this.ignoreFlash = !1;
        var r, a = this,
            l = null,
            u = null,
            h = "soundManager",
            c = h + ": ",
            p = "HTML5::",
            d, f = navigator.userAgent,
            m = t.location.href.toString(),
            g = document,
            v, y, _, x, b = [],
            w = !0,
            T, M = !1,
            S = !1,
            C = !1,
            A = !1,
            E = !1,
            k, O = 0,
            L, I, P, H, N, F, D, R, B, z, j, q, X, U, V, W, Y, Q, G, Z, J, K, te = ["log", "info", "warn", "error"],
            ee = 8,
            ie, ne, se, oe = null,
            re = null,
            ae, le, ue, he, ce, pe, de, fe, me, ge = !1,
            ve = !1,
            ye, _e, xe, be = 0,
            we = null,
            Te, Me = [],
            Se, Ce = null,
            Ae, Ee, ke, Oe, Le, Ie, Pe, He, Ne = Array.prototype.slice,
            Fe = !1,
            De, Re, Be, ze, je, qe, Xe, $e, Ue = 0,
            Ve = f.match(/(ipad|iphone|ipod)/i),
            We = f.match(/android/i),
            Ye = f.match(/msie/i),
            Qe = f.match(/webkit/i),
            Ge = f.match(/safari/i) && !f.match(/chrome/i),
            Ze = f.match(/opera/i),
            Je = f.match(/firefox/i),
            Ke = f.match(/(mobile|pre\/|xoom)/i) || Ve || We,
            ti = !m.match(/usehtml5audio/i) && !m.match(/sm2\-ignorebadua/i) && Ge && !f.match(/silk/i) && f.match(/OS X 10_6_([3-7])/i),
            ei = t.console !== e && console.log !== e,
            ii = g.hasFocus !== e ? g.hasFocus() : null,
            ni = Ge && (g.hasFocus === e || !g.hasFocus()),
            si = !ni,
            oi = /(mp3|mp4|mpa|m4a|m4b)/i,
            ri = 1e3,
            ai = "about:blank",
            li = g.location ? g.location.protocol.match(/http/i) : null,
            ui = li ? "" : "http://",
            hi = /^\s*audio\/(?:x-)?(?:mpeg4|aac|flv|mov|mp4||m4v|m4a|m4b|mp4v|3gp|3g2)\s*(?:$|;)/i,
            ci = ["mpeg4", "aac", "flv", "mov", "mp4", "m4v", "f4v", "m4a", "m4b", "mp4v", "3gp", "3g2"],
            pi = new RegExp("\\.(" + ci.join("|") + ")(\\?.*)?$", "i");
        this.mimePattern = /^\s*audio\/(?:x-)?(?:mp(?:eg|3))\s*(?:$|;)/i, this.useAltURL = !li, he = {
            swfBox: "sm2-object-box",
            swfDefault: "movieContainer",
            swfError: "swf_error",
            swfTimedout: "swf_timedout",
            swfLoaded: "swf_loaded",
            swfUnblocked: "swf_unblocked",
            sm2Debug: "sm2_debug",
            highPerf: "high_performance",
            flashDebug: "flash_debug"
        }, this.hasHTML5 = function () {
            try {
                return Audio !== e && (Ze && opera !== e && opera.version() < 10 ? new Audio(null) : new Audio)
                    .canPlayType !== e
            } catch (t) {
                return !1
            }
        }(), this.setup = function (t) {
            var i = !a.url;
            return t !== e && C && Ce && a.ok() && (t.flashVersion !== e || t.url !== e || t.html5Test !== e) && fe(ae("setupLate")), P(t), t && (i && Y && t.url !== e && a.beginDelayedInit(), Y || t.url === e || "complete" !== g.readyState || setTimeout(V, 1)), a
        }, this.ok = function () {
            return Ce ? C && !A : a.useHTML5Audio && a.hasHTML5
        }, this.supported = this.ok, this.getMovie = function (e) {
            return d(e) || g[e] || t[e]
        }, this.createSound = function (t, i) {
            function n() {
                return l = pe(l), a.sounds[l.id] = new r(l), a.soundIDs.push(l.id), a.sounds[l.id]
            }
            var s, o, l, c = null;
            if (s = h + ".createSound(): ", o = s + ae(C ? "notOK" : "notReady"), !C || !a.ok()) return fe(o), !1;
            if (i !== e && (t = {
                    id: t,
                    url: i
                }), l = I(t), l.url = Te(l.url), void 0 === l.id && (l.id = a.setupOptions.idPrefix + Ue++), l.id.toString()
                .charAt(0)
                .match(/^[0-9]$/) && a._wD(s + ae("badID", l.id), 2), a._wD(s + l.id + (l.url ? " (" + l.url + ")" : ""), 1), me(l.id, !0)) return a._wD(s + l.id + " exists", 1), a.sounds[l.id];
            if (Ee(l)) c = n(), a._wD(l.id + ": Using HTML5"), c._setup_html5(l);
            else {
                if (a.html5Only) return a._wD(l.id + ": No HTML5 support for this sound, and no Flash. Exiting."), n();
                if (a.html5.usingFlash && l.url && l.url.match(/data\:/i)) return a._wD(l.id + ": data: URIs not supported via Flash. Exiting."), n();
                x > 8 && (null === l.isMovieStar && (l.isMovieStar = !!(l.serverURL || (l.type ? l.type.match(hi) : !1) || l.url && l.url.match(pi))), l.isMovieStar && (a._wD(s + "using MovieStar handling"), l.loops > 1 && k("noNSLoop"))), l = de(l, s), c = n(), 8 === x ? u._createSound(l.id, l.loops || 1, l.usePolicyFile) : (u._createSound(l.id, l.url, l.usePeakData, l.useWaveformData, l.useEQData, l.isMovieStar, l.isMovieStar ? l.bufferTime : !1, l.loops || 1, l.serverURL, l.duration || null, l.autoPlay, !0, l.autoLoad, l.usePolicyFile), l.serverURL || (c.connected = !0, l.onconnect && l.onconnect.apply(c))), l.serverURL || !l.autoLoad && !l.autoPlay || c.load(l)
            }
            return !l.serverURL && l.autoPlay && c.play(), c
        }, this.destroySound = function (t, e) {
            if (!me(t)) return !1;
            var i = a.sounds[t],
                n;
            for (i._iO = {}, i.stop(), i.unload(), n = 0; n < a.soundIDs.length; n++)
                if (a.soundIDs[n] === t) {
                    a.soundIDs.splice(n, 1);
                    break
                }
            return e || i.destruct(!0), i = null, delete a.sounds[t], !0
        }, this.load = function (t, e) {
            return me(t) ? a.sounds[t].load(e) : !1
        }, this.unload = function (t) {
            return me(t) ? a.sounds[t].unload() : !1
        }, this.onPosition = function (t, e, i, n) {
            return me(t) ? a.sounds[t].onposition(e, i, n) : !1
        }, this.onposition = this.onPosition, this.clearOnPosition = function (t, e, i) {
            return me(t) ? a.sounds[t].clearOnPosition(e, i) : !1
        }, this.play = function (t, e) {
            var i = null,
                n = e && !(e instanceof Object);
            if (!C || !a.ok()) return fe(h + ".play(): " + ae(C ? "notOK" : "notReady")), !1;
            if (me(t, n)) n && (e = {
                url: e
            });
            else {
                if (!n) return !1;
                n && (e = {
                    url: e
                }), e && e.url && (a._wD(h + '.play(): Attempting to create "' + t + '"', 1), e.id = t, i = a.createSound(e)
                    .play())
            }
            return null === i && (i = a.sounds[t].play(e)), i
        }, this.start = this.play, this.setPosition = function (t, e) {
            return me(t) ? a.sounds[t].setPosition(e) : !1
        }, this.stop = function (t) {
            return me(t) ? (a._wD(h + ".stop(" + t + ")", 1), a.sounds[t].stop()) : !1
        }, this.stopAll = function () {
            var t;
            a._wD(h + ".stopAll()", 1);
            for (t in a.sounds) a.sounds.hasOwnProperty(t) && a.sounds[t].stop()
        }, this.pause = function (t) {
            return me(t) ? a.sounds[t].pause() : !1
        }, this.pauseAll = function () {
            var t;
            for (t = a.soundIDs.length - 1; t >= 0; t--) a.sounds[a.soundIDs[t]].pause()
        }, this.resume = function (t) {
            return me(t) ? a.sounds[t].resume() : !1
        }, this.resumeAll = function () {
            var t;
            for (t = a.soundIDs.length - 1; t >= 0; t--) a.sounds[a.soundIDs[t]].resume()
        }, this.togglePause = function (t) {
            return me(t) ? a.sounds[t].togglePause() : !1
        }, this.setPan = function (t, e) {
            return me(t) ? a.sounds[t].setPan(e) : !1
        }, this.setVolume = function (t, e) {
            return me(t) ? a.sounds[t].setVolume(e) : !1
        }, this.mute = function (t) {
            var e = 0;
            if (t instanceof String && (t = null), t) return me(t) ? (a._wD(h + '.mute(): Muting "' + t + '"'), a.sounds[t].mute()) : !1;
            for (a._wD(h + ".mute(): Muting all sounds"), e = a.soundIDs.length - 1; e >= 0; e--) a.sounds[a.soundIDs[e]].mute();
            return a.muted = !0, !0
        }, this.muteAll = function () {
            a.mute()
        }, this.unmute = function (t) {
            var e;
            if (t instanceof String && (t = null), t) return me(t) ? (a._wD(h + '.unmute(): Unmuting "' + t + '"'), a.sounds[t].unmute()) : !1;
            for (a._wD(h + ".unmute(): Unmuting all sounds"), e = a.soundIDs.length - 1; e >= 0; e--) a.sounds[a.soundIDs[e]].unmute();
            return a.muted = !1, !0
        }, this.unmuteAll = function () {
            a.unmute()
        }, this.toggleMute = function (t) {
            return me(t) ? a.sounds[t].toggleMute() : !1
        }, this.getMemoryUse = function () {
            var t = 0;
            return u && 8 !== x && (t = parseInt(u._getMemoryUse(), 10)), t
        }, this.disable = function (i) {
            var n;
            if (i === e && (i = !1), A) return !1;
            for (A = !0, k("shutdown", 1), n = a.soundIDs.length - 1; n >= 0; n--) ie(a.sounds[a.soundIDs[n]]);
            return L(i), He.remove(t, "load", D), !0
        }, this.canPlayMIME = function (t) {
            var e;
            return a.hasHTML5 && (e = ke({
                type: t
            })), !e && Ce && (e = t && a.ok() ? !!((x > 8 ? t.match(hi) : null) || t.match(a.mimePattern)) : null), e
        }, this.canPlayURL = function (t) {
            var e;
            return a.hasHTML5 && (e = ke({
                url: t
            })), !e && Ce && (e = t && a.ok() ? !!t.match(a.filePattern) : null), e
        }, this.canPlayLink = function (t) {
            return t.type !== e && t.type && a.canPlayMIME(t.type) ? !0 : a.canPlayURL(t.href)
        }, this.getSoundById = function (t, e) {
            if (!t) return null;
            var i = a.sounds[t];
            return i || e || a._wD(h + '.getSoundById(): Sound "' + t + '" not found.', 2), i
        }, this.onready = function (e, i) {
            var n = "onready",
                s = !1;
            if ("function" != typeof e) throw ae("needFunction", n);
            return C && a._wD(ae("queue", n)), i || (i = t), N(n, e, i), F(), s = !0, s
        }, this.ontimeout = function (e, i) {
            var n = "ontimeout",
                s = !1;
            if ("function" != typeof e) throw ae("needFunction", n);
            return C && a._wD(ae("queue", n)), i || (i = t), N(n, e, i), F({
                type: n
            }), s = !0, s
        }, this._writeDebug = function (t, i) {
            var n = "soundmanager-debug",
                s, o;
            return a.debugMode ? ei && a.useConsole && (i && "object" == typeof i ? console.log(t, i) : te[i] !== e ? console[te[i]](t) : console.log(t), a.consoleOnly) ? !0 : (s = d(n)) ? (o = g.createElement("div"), ++O % 2 === 0 && (o.className = "sm2-alt"), i = i === e ? 0 : parseInt(i, 10), o.appendChild(g.createTextNode(t)), i && (i >= 2 && (o.style.fontWeight = "bold"), 3 === i && (o.style.color = "#ff3333")), s.insertBefore(o, s.firstChild), s = null, !0) : !1 : !1
        }, -1 !== m.indexOf("sm2-debug=alert") && (this._writeDebug = function (e) {
            t.alert(e)
        }), this._wD = this._writeDebug, this._debug = function () {
            var t, e;
            for (k("currentObj", 1), t = 0, e = a.soundIDs.length; e > t; t++) a.sounds[a.soundIDs[t]]._debug()
        }, this.reboot = function (e, i) {
            a.soundIDs.length && a._wD("Destroying " + a.soundIDs.length + " SMSound object" + (1 !== a.soundIDs.length ? "s" : "") + "...");
            var n, s, o;
            for (n = a.soundIDs.length - 1; n >= 0; n--) a.sounds[a.soundIDs[n]].destruct();
            if (u) try {
                Ye && (re = u.innerHTML), oe = u.parentNode.removeChild(u)
            } catch (r) {
                k("badRemove", 2)
            }
            if (re = oe = Ce = u = null, a.enabled = Y = C = ge = ve = M = S = A = Fe = a.swfLoaded = !1, a.soundIDs = [], a.sounds = {}, Ue = 0, e) b = [];
            else
                for (n in b)
                    if (b.hasOwnProperty(n))
                        for (s = 0, o = b[n].length; o > s; s++) b[n][s].fired = !1; return i || a._wD(h + ": Rebooting..."), a.html5 = {
                usingFlash: null
            }, a.flash = {}, a.html5Only = !1, a.ignoreFlash = !1, t.setTimeout(function () {
                U(), i || a.beginDelayedInit()
            }, 20), a
        }, this.reset = function () {
            return k("reset"), a.reboot(!0, !0)
        }, this.getMoviePercent = function () {
            return u && "PercentLoaded" in u ? u.PercentLoaded() : null
        }, this.beginDelayedInit = function () {
            E = !0, V(), setTimeout(function () {
                return ve ? !1 : (G(), X(), ve = !0, !0)
            }, 20), R()
        }, this.destruct = function () {
            a._wD(h + ".destruct()"), a.disable(!0)
        }, r = function (t) {
            var i = this,
                n, s, o, r, h, c, p = !1,
                d = [],
                f = 0,
                m, g, v = null,
                y, _;
            y = {
                duration: null,
                time: null
            }, this.id = t.id, this.sID = this.id, this.url = t.url, this.options = I(t), this.instanceOptions = this.options, this._iO = this.instanceOptions, this.pan = this.options.pan, this.volume = this.options.volume, this.isHTML5 = !1, this._a = null, _ = this.url ? !1 : !0, this.id3 = {}, this._debug = function () {
                a._wD(i.id + ": Merged options:", i.options)
            }, this.load = function (t) {
                var n = null,
                    s;
                if (t !== e ? i._iO = I(t, i.options) : (t = i.options, i._iO = t, v && v !== i.url && (k("manURL"), i._iO.url = i.url, i.url = null)), i._iO.url || (i._iO.url = i.url), i._iO.url = Te(i._iO.url), i.instanceOptions = i._iO, s = i._iO, a._wD(i.id + ": load (" + s.url + ")"), !s.url && !i.url) return a._wD(i.id + ": load(): url is unassigned. Exiting.", 2), i;
                if (i.isHTML5 || 8 !== x || i.url || s.autoPlay || a._wD(i.id + ": Flash 8 load() limitation: Wait for onload() before calling play().", 1), s.url === i.url && 0 !== i.readyState && 2 !== i.readyState) return k("onURL", 1), 3 === i.readyState && s.onload && $e(i, function () {
                    s.onload.apply(i, [!!i.duration])
                }), i;
                if (i.loaded = !1, i.readyState = 1, i.playState = 0, i.id3 = {}, Ee(s)) n = i._setup_html5(s), n._called_load ? a._wD(i.id + ": Ignoring request to load again") : (i._html5_canplay = !1, i.url !== s.url && (a._wD(k("manURL") + ": " + s.url), i._a.src = s.url, i.setPosition(0)), i._a.autobuffer = "auto", i._a.preload = "auto", i._a._called_load = !0, s.autoPlay && i.play());
                else {
                    if (a.html5Only) return a._wD(i.id + ": No flash support. Exiting."), i;
                    if (i._iO.url && i._iO.url.match(/data\:/i)) return a._wD(i.id + ": data: URIs not supported via Flash. Exiting."), i;
                    try {
                        i.isHTML5 = !1, i._iO = de(pe(s)), s = i._iO, 8 === x ? u._load(i.id, s.url, s.stream, s.autoPlay, s.usePolicyFile) : u._load(i.id, s.url, !!s.stream, !!s.autoPlay, s.loops || 1, !!s.autoLoad, s.usePolicyFile)
                    } catch (o) {
                        k("smError", 2), T("onload", !1), Z({
                            type: "SMSOUND_LOAD_JS_EXCEPTION",
                            fatal: !0
                        })
                    }
                }
                return i.url = s.url, i
            }, this.unload = function () {
                return 0 !== i.readyState && (a._wD(i.id + ": unload()"), i.isHTML5 ? (r(), i._a && (i._a.pause(), v = Le(i._a))) : 8 === x ? u._unload(i.id, ai) : u._unload(i.id), n()), i
            }, this.destruct = function (t) {
                a._wD(i.id + ": Destruct"), i.isHTML5 ? (r(), i._a && (i._a.pause(), Le(i._a), Fe || o(), i._a._s = null, i._a = null)) : (i._iO.onfailure = null, u._destroySound(i.id)), t || a.destroySound(i.id, !0)
            }, this.play = function (t, n) {
                var s, o, r, l, d, f, m, v = !0,
                    y = null;
                if (s = i.id + ": play(): ", n = n === e ? !0 : n, t || (t = {}), i.url && (i._iO.url = i.url), i._iO = I(i._iO, i.options), i._iO = I(t, i._iO), i._iO.url = Te(i._iO.url), i.instanceOptions = i._iO, !i.isHTML5 && i._iO.serverURL && !i.connected) return i.getAutoPlay() || (a._wD(s + " Netstream not connected yet - setting autoPlay"), i.setAutoPlay(!0)), i;
                if (Ee(i._iO) && (i._setup_html5(i._iO), h()), 1 !== i.playState || i.paused || (o = i._iO.multiShot, o ? a._wD(s + "Already playing (multi-shot)", 1) : (a._wD(s + "Already playing (one-shot)", 1), i.isHTML5 && i.setPosition(i._iO.position), y = i)), null !== y) return y;
                if (t.url && t.url !== i.url && (i.readyState || i.isHTML5 || 8 !== x || !_ ? i.load(i._iO) : _ = !1), i.loaded ? a._wD(s.substr(0, s.lastIndexOf(":"))) : 0 === i.readyState ? (a._wD(s + "Attempting to load"), i.isHTML5 || a.html5Only ? i.isHTML5 ? i.load(i._iO) : (a._wD(s + "Unsupported type. Exiting."), y = i) : (i._iO.autoPlay = !0, i.load(i._iO)), i.instanceOptions = i._iO) : 2 === i.readyState ? (a._wD(s + "Could not load - exiting", 2), y = i) : a._wD(s + "Loading - attempting to play..."), null !== y) return y;
                if (!i.isHTML5 && 9 === x && i.position > 0 && i.position === i.duration && (a._wD(s + "Sound at end, resetting to position:0"), t.position = 0), i.paused && i.position >= 0 && (!i._iO.serverURL || i.position > 0)) a._wD(s + "Resuming from paused state", 1), i.resume();
                else {
                    if (i._iO = I(t, i._iO), null !== i._iO.from && null !== i._iO.to && 0 === i.instanceCount && 0 === i.playState && !i._iO.serverURL) {
                        if (l = function () {
                                i._iO = I(t, i._iO), i.play(i._iO)
                            }, i.isHTML5 && !i._html5_canplay ? (a._wD(s + "Beginning load for from/to case"), i.load({
                                oncanplay: l
                            }), y = !1) : i.isHTML5 || i.loaded || i.readyState && 2 === i.readyState || (a._wD(s + "Preloading for from/to case"), i.load({
                                onload: l
                            }), y = !1), null !== y) return y;
                        i._iO = g()
                    }(!i.instanceCount || i._iO.multiShotEvents || i.isHTML5 && i._iO.multiShot && !Fe || !i.isHTML5 && x > 8 && !i.getAutoPlay()) && i.instanceCount++, i._iO.onposition && 0 === i.playState && c(i), i.playState = 1, i.paused = !1, i.position = i._iO.position === e || isNaN(i._iO.position) ? 0 : i._iO.position, i.isHTML5 || (i._iO = de(pe(i._iO))), i._iO.onplay && n && (i._iO.onplay.apply(i), p = !0), i.setVolume(i._iO.volume, !0), i.setPan(i._iO.pan, !0), i.isHTML5 ? i.instanceCount < 2 ? (h(), r = i._setup_html5(), i.setPosition(i._iO.position), r.play()) : (a._wD(i.id + ": Cloning Audio() for instance #" + i.instanceCount + "..."), d = new Audio(i._iO.url), f = function () {
                        He.remove(d, "onended", f), i._onfinish(i), Le(d), d = null
                    }, m = function () {
                        He.remove(d, "canplay", m);
                        try {
                            d.currentTime = i._iO.position / ri
                        } catch (t) {
                            fe(i.id + ": multiShot play() failed to apply position of " + i._iO.position / ri)
                        }
                        d.play()
                    }, He.add(d, "ended", f), i._iO.position ? He.add(d, "canplay", m) : d.play()) : (v = u._start(i.id, i._iO.loops || 1, 9 === x ? i.position : i.position / ri, i._iO.multiShot || !1), 9 !== x || v || (a._wD(s + "No sound hardware, or 32-sound ceiling hit", 2), i._iO.onplayerror && i._iO.onplayerror.apply(i)))
                }
                return i
            }, this.start = this.play, this.stop = function (t) {
                var e = i._iO,
                    n;
                return 1 === i.playState && (a._wD(i.id + ": stop()"), i._onbufferchange(0), i._resetOnPosition(0), i.paused = !1, i.isHTML5 || (i.playState = 0), m(), e.to && i.clearOnPosition(e.to), i.isHTML5 ? i._a && (n = i.position, i.setPosition(0), i.position = n, i._a.pause(), i.playState = 0, i._onTimer(), r()) : (u._stop(i.id, t), e.serverURL && i.unload()), i.instanceCount = 0, i._iO = {}, e.onstop && e.onstop.apply(i)), i
            }, this.setAutoPlay = function (t) {
                a._wD(i.id + ": Autoplay turned " + (t ? "on" : "off")), i._iO.autoPlay = t, i.isHTML5 || (u._setAutoPlay(i.id, t), t && (i.instanceCount || 1 !== i.readyState || (i.instanceCount++, a._wD(i.id + ": Incremented instance count to " + i.instanceCount))))
            }, this.getAutoPlay = function () {
                return i._iO.autoPlay
            }, this.setPosition = function (t) {
                t === e && (t = 0);
                var n, s, o = i.isHTML5 ? Math.max(t, 0) : Math.min(i.duration || i._iO.duration, Math.max(t, 0));
                if (i.position = o, s = i.position / ri, i._resetOnPosition(i.position), i._iO.position = o, i.isHTML5) {
                    if (i._a) {
                        if (i._html5_canplay) {
                            if (i._a.currentTime !== s) {
                                a._wD(i.id + ": setPosition(" + s + ")");
                                try {
                                    i._a.currentTime = s, (0 === i.playState || i.paused) && i._a.pause()
                                } catch (r) {
                                    a._wD(i.id + ": setPosition(" + s + ") failed: " + r.message, 2)
                                }
                            }
                        } else if (s) return a._wD(i.id + ": setPosition(" + s + "): Cannot seek yet, sound not ready", 2), i;
                        i.paused && i._onTimer(!0)
                    }
                } else n = 9 === x ? i.position : s, i.readyState && 2 !== i.readyState && u._setPosition(i.id, n, i.paused || !i.playState, i._iO.multiShot);
                return i
            }, this.pause = function (t) {
                return i.paused || 0 === i.playState && 1 !== i.readyState ? i : (a._wD(i.id + ": pause()"), i.paused = !0, i.isHTML5 ? (i._setup_html5()
                    .pause(), r()) : (t || t === e) && u._pause(i.id, i._iO.multiShot), i._iO.onpause && i._iO.onpause.apply(i), i)
            }, this.resume = function () {
                var t = i._iO;
                return i.paused ? (a._wD(i.id + ": resume()"), i.paused = !1, i.playState = 1, i.isHTML5 ? (i._setup_html5()
                    .play(), h()) : (t.isMovieStar && !t.serverURL && i.setPosition(i.position), u._pause(i.id, t.multiShot)), !p && t.onplay ? (t.onplay.apply(i), p = !0) : t.onresume && t.onresume.apply(i), i) : i
            }, this.togglePause = function () {
                return a._wD(i.id + ": togglePause()"), 0 === i.playState ? (i.play({
                    position: 9 !== x || i.isHTML5 ? i.position / ri : i.position
                }), i) : (i.paused ? i.resume() : i.pause(), i)
            }, this.setPan = function (t, n) {
                return t === e && (t = 0), n === e && (n = !1), i.isHTML5 || u._setPan(i.id, t), i._iO.pan = t, n || (i.pan = t, i.options.pan = t), i
            }, this.setVolume = function (t, n) {
                return t === e && (t = 100), n === e && (n = !1), i.isHTML5 ? i._a && (i._a.volume = Math.max(0, Math.min(1, t / 100))) : u._setVolume(i.id, a.muted && !i.muted || i.muted ? 0 : t), i._iO.volume = t, n || (i.volume = t, i.options.volume = t), i
            }, this.mute = function () {
                return i.muted = !0, i.isHTML5 ? i._a && (i._a.muted = !0) : u._setVolume(i.id, 0), i
            }, this.unmute = function () {
                i.muted = !1;
                var t = i._iO.volume !== e;
                return i.isHTML5 ? i._a && (i._a.muted = !1) : u._setVolume(i.id, t ? i._iO.volume : i.options.volume), i
            }, this.toggleMute = function () {
                return i.muted ? i.unmute() : i.mute()
            }, this.onPosition = function (t, n, s) {
                return d.push({
                    position: parseInt(t, 10),
                    method: n,
                    scope: s !== e ? s : i,
                    fired: !1
                }), i
            }, this.onposition = this.onPosition, this.clearOnPosition = function (t, e) {
                var i;
                if (t = parseInt(t, 10), isNaN(t)) return !1;
                for (i = 0; i < d.length; i++) t === d[i].position && (e && e !== d[i].method || (d[i].fired && f--, d.splice(i, 1)))
            }, this._processOnPosition = function () {
                var t, e, n = d.length;
                if (!n || !i.playState || f >= n) return !1;
                for (t = n - 1; t >= 0; t--) e = d[t], !e.fired && i.position >= e.position && (e.fired = !0, f++, e.method.apply(e.scope, [e.position]));
                return !0
            }, this._resetOnPosition = function (t) {
                var e, i, n = d.length;
                if (!n) return !1;
                for (e = n - 1; e >= 0; e--) i = d[e], i.fired && t <= i.position && (i.fired = !1, f--);
                return !0
            }, g = function () {
                var t = i._iO,
                    e = t.from,
                    n = t.to,
                    s, o;
                return o = function () {
                    a._wD(i.id + ': "To" time of ' + n + " reached."), i.clearOnPosition(n, o), i.stop()
                }, s = function () {
                    a._wD(i.id + ': Playing "from" ' + e), null === n || isNaN(n) || i.onPosition(n, o)
                }, null === e || isNaN(e) || (t.position = e, t.multiShot = !1, s()), t
            }, c = function () {
                var t, e = i._iO.onposition;
                if (e)
                    for (t in e) e.hasOwnProperty(t) && i.onPosition(parseInt(t, 10), e[t])
            }, m = function () {
                var t, e = i._iO.onposition;
                if (e)
                    for (t in e) e.hasOwnProperty(t) && i.clearOnPosition(parseInt(t, 10))
            }, h = function () {
                i.isHTML5 && ye(i)
            }, r = function () {
                i.isHTML5 && _e(i)
            }, n = function (t) {
                t || (d = [], f = 0), p = !1, i._hasTimer = null, i._a = null, i._html5_canplay = !1, i.bytesLoaded = null, i.bytesTotal = null, i.duration = i._iO && i._iO.duration ? i._iO.duration : null, i.durationEstimate = null, i.buffered = [], i.eqData = [], i.eqData.left = [], i.eqData.right = [], i.failures = 0, i.isBuffering = !1, i.instanceOptions = {}, i.instanceCount = 0, i.loaded = !1, i.metadata = {}, i.readyState = 0, i.muted = !1, i.paused = !1, i.peakData = {
                    left: 0,
                    right: 0
                }, i.waveformData = {
                    left: [],
                    right: []
                }, i.playState = 0, i.position = null, i.id3 = {}
            }, n(), this._onTimer = function (t) {
                var e, n = !1,
                    s, o = {};
                return i._hasTimer || t ? (i._a && (t || (i.playState > 0 || 1 === i.readyState) && !i.paused) && (e = i._get_html5_duration(), e !== y.duration && (y.duration = e, i.duration = e, n = !0), i.durationEstimate = i.duration, s = i._a.currentTime * ri || 0, s !== y.time && (y.time = s, n = !0), (n || t) && i._whileplaying(s, o, o, o, o)), n) : void 0
            }, this._get_html5_duration = function () {
                var t = i._iO,
                    e = i._a && i._a.duration ? i._a.duration * ri : t && t.duration ? t.duration : null,
                    n = e && !isNaN(e) && 1 / 0 !== e ? e : null;
                return n
            }, this._apply_loop = function (t, e) {
                !t.loop && e > 1 && a._wD("Note: Native HTML5 looping is infinite.", 1), t.loop = e > 1 ? "loop" : ""
            }, this._setup_html5 = function (t) {
                var e = I(i._iO, t),
                    o = Fe ? l : i._a,
                    r = decodeURI(e.url),
                    a;
                if (Fe ? r === decodeURI(De) && (a = !0) : r === decodeURI(v) && (a = !0), o) {
                    if (o._s)
                        if (Fe) o._s && o._s.playState && !a && o._s.stop();
                        else if (!Fe && r === decodeURI(v)) return i._apply_loop(o, e.loops), o;
                    a || (n(!1), o.src = e.url, i.url = e.url, v = e.url, De = e.url, o._called_load = !1)
                } else i._a = e.autoLoad || e.autoPlay ? new Audio(e.url) : Ze && opera.version() < 10 ? new Audio(null) : new Audio, o = i._a, o._called_load = !1, Fe && (l = o);
                return i.isHTML5 = !0, i._a = o, o._s = i, s(), i._apply_loop(o, e.loops), e.autoLoad || e.autoPlay ? i.load() : (o.autobuffer = !1, o.preload = "auto"), o
            }, s = function () {
                function t(t, e, n) {
                    return i._a ? i._a.addEventListener(t, e, n || !1) : null
                }
                if (i._a._added_events) return !1;
                var e;
                i._a._added_events = !0;
                for (e in je) je.hasOwnProperty(e) && t(e, je[e]);
                return !0
            }, o = function () {
                function t(t, e, n) {
                    return i._a ? i._a.removeEventListener(t, e, n || !1) : null
                }
                var e;
                a._wD(i.id + ": Removing event listeners"), i._a._added_events = !1;
                for (e in je) je.hasOwnProperty(e) && t(e, je[e])
            }, this._onload = function (t) {
                var e, n = !!t || !i.isHTML5 && 8 === x && i.duration;
                return e = i.id + ": ", a._wD(e + (n ? "onload()" : "Failed to load / invalid sound?" + (i.duration ? " -" : " Zero-length duration reported.") + " (" + i.url + ")"), n ? 1 : 2), n || i.isHTML5 || (a.sandbox.noRemote === !0 && a._wD(e + ae("noNet"), 1), a.sandbox.noLocal === !0 && a._wD(e + ae("noLocal"), 1)), i.loaded = n, i.readyState = n ? 3 : 2, i._onbufferchange(0), i._iO.onload && $e(i, function () {
                    i._iO.onload.apply(i, [n])
                }), !0
            }, this._onbufferchange = function (t) {
                return 0 === i.playState ? !1 : t && i.isBuffering || !t && !i.isBuffering ? !1 : (i.isBuffering = 1 === t, i._iO.onbufferchange && (a._wD(i.id + ": Buffer state change: " + t), i._iO.onbufferchange.apply(i)), !0)
            }, this._onsuspend = function () {
                return i._iO.onsuspend && (a._wD(i.id + ": Playback suspended"), i._iO.onsuspend.apply(i)), !0
            }, this._onfailure = function (t, e, n) {
                i.failures++, a._wD(i.id + ": Failures = " + i.failures), i._iO.onfailure && 1 === i.failures ? i._iO.onfailure(i, t, e, n) : a._wD(i.id + ": Ignoring failure")
            }, this._onfinish = function () {
                var t = i._iO.onfinish;
                i._onbufferchange(0), i._resetOnPosition(0), i.instanceCount && (i.instanceCount--, i.instanceCount || (m(), i.playState = 0, i.paused = !1, i.instanceCount = 0, i.instanceOptions = {}, i._iO = {}, r(), i.isHTML5 && (i.position = 0)), (!i.instanceCount || i._iO.multiShotEvents) && t && (a._wD(i.id + ": onfinish()"), $e(i, function () {
                    t.apply(i)
                })))
            }, this._whileloading = function (t, e, n, s) {
                var o = i._iO;
                i.bytesLoaded = t, i.bytesTotal = e, i.duration = Math.floor(n), i.bufferLength = s, i.durationEstimate = i.isHTML5 || o.isMovieStar ? i.duration : o.duration ? i.duration > o.duration ? i.duration : o.duration : parseInt(i.bytesTotal / i.bytesLoaded * i.duration, 10), i.isHTML5 || (i.buffered = [{
                    start: 0,
                    end: i.duration
                }]), (3 !== i.readyState || i.isHTML5) && o.whileloading && o.whileloading.apply(i)
            }, this._whileplaying = function (t, n, s, o, r) {
                var a = i._iO,
                    l;
                return isNaN(t) || null === t ? !1 : (i.position = Math.max(0, t), i._processOnPosition(), !i.isHTML5 && x > 8 && (a.usePeakData && n !== e && n && (i.peakData = {
                    left: n.leftPeak,
                    right: n.rightPeak
                }), a.useWaveformData && s !== e && s && (i.waveformData = {
                    left: s.split(","),
                    right: o.split(",")
                }), a.useEQData && r !== e && r && r.leftEQ && (l = r.leftEQ.split(","), i.eqData = l, i.eqData.left = l, r.rightEQ !== e && r.rightEQ && (i.eqData.right = r.rightEQ.split(",")))), 1 === i.playState && (i.isHTML5 || 8 !== x || i.position || !i.isBuffering || i._onbufferchange(0), a.whileplaying && a.whileplaying.apply(i)), !0)
            }, this._oncaptiondata = function (t) {
                a._wD(i.id + ": Caption data received."), i.captiondata = t, i._iO.oncaptiondata && i._iO.oncaptiondata.apply(i, [t])
            }, this._onmetadata = function (t, e) {
                a._wD(i.id + ": Metadata received.");
                var n = {},
                    s, o;
                for (s = 0, o = t.length; o > s; s++) n[t[s]] = e[s];
                i.metadata = n, i._iO.onmetadata && i._iO.onmetadata.apply(i)
            }, this._onid3 = function (t, e) {
                a._wD(i.id + ": ID3 data received.");
                var n = [],
                    s, o;
                for (s = 0, o = t.length; o > s; s++) n[t[s]] = e[s];
                i.id3 = I(i.id3, n), i._iO.onid3 && i._iO.onid3.apply(i)
            }, this._onconnect = function (t) {
                t = 1 === t, a._wD(i.id + ": " + (t ? "Connected." : "Failed to connect? - " + i.url), t ? 1 : 2), i.connected = t, t && (i.failures = 0, me(i.id) && (i.getAutoPlay() ? i.play(e, i.getAutoPlay()) : i._iO.autoLoad && i.load()), i._iO.onconnect && i._iO.onconnect.apply(i, [t]))
            }, this._ondataerror = function (t) {
                i.playState > 0 && (a._wD(i.id + ": Data error: " + t), i._iO.ondataerror && i._iO.ondataerror.apply(i))
            }, this._debug()
        }, Q = function () {
            return g.body || g._docElement || g.getElementsByTagName("div")[0]
        }, d = function (t) {
            return g.getElementById(t)
        }, I = function (t, i) {
            var n = t || {},
                s, o;
            s = i === e ? a.defaultOptions : i;
            for (o in s) s.hasOwnProperty(o) && n[o] === e && (n[o] = "object" != typeof s[o] || null === s[o] ? s[o] : I(n[o], s[o]));
            return n
        }, $e = function (e, i) {
            e.isHTML5 || 8 !== x ? i() : t.setTimeout(i, 0)
        }, H = {
            onready: 1,
            ontimeout: 1,
            defaultOptions: 1,
            flash9Options: 1,
            movieStarOptions: 1
        }, P = function (t, i) {
            var n, s = !0,
                o = i !== e,
                r = a.setupOptions,
                l = H;
            if (t === e) {
                s = [];
                for (n in r) r.hasOwnProperty(n) && s.push(n);
                for (n in l) l.hasOwnProperty(n) && s.push("object" == typeof a[n] ? n + ": {...}" : a[n] instanceof Function ? n + ": function() {...}" : n);
                return a._wD(ae("setup", s.join(", "))), !1
            }
            for (n in t)
                if (t.hasOwnProperty(n))
                    if ("object" != typeof t[n] || null === t[n] || t[n] instanceof Array || t[n] instanceof RegExp) o && l[i] !== e ? a[i][n] = t[n] : r[n] !== e ? (a.setupOptions[n] = t[n], a[n] = t[n]) : l[n] === e ? (fe(ae(a[n] === e ? "setupUndef" : "setupError", n), 2), s = !1) : a[n] instanceof Function ? a[n].apply(a, t[n] instanceof Array ? t[n] : [t[n]]) : a[n] = t[n];
                    else {
                        if (l[n] !== e) return P(t[n], n);
                        fe(ae(a[n] === e ? "setupUndef" : "setupError", n), 2), s = !1
                    }
            return s
        }, He = function () {
            function e(t) {
                var e = Ne.call(t),
                    i = e.length;
                return o ? (e[1] = "on" + e[1], i > 3 && e.pop()) : 3 === i && e.push(!1), e
            }

            function i(t, e) {
                var i = t.shift(),
                    n = [r[e]];
                o ? i[n](t[0], t[1]) : i[n].apply(i, t)
            }

            function n() {
                i(e(arguments), "add")
            }

            function s() {
                i(e(arguments), "remove")
            }
            var o = t.attachEvent,
                r = {
                    add: o ? "attachEvent" : "addEventListener",
                    remove: o ? "detachEvent" : "removeEventListener"
                };
            return {
                add: n,
                remove: s
            }
        }(), je = {
            abort: o(function () {
                a._wD(this._s.id + ": abort")
            }),
            canplay: o(function () {
                var t = this._s,
                    i;
                if (t._html5_canplay) return !0;
                if (t._html5_canplay = !0, a._wD(t.id + ": canplay"), t._onbufferchange(0), i = t._iO.position === e || isNaN(t._iO.position) ? null : t._iO.position / ri, t.position && this.currentTime !== i) {
                    a._wD(t.id + ": canplay: Setting position to " + i);
                    try {
                        this.currentTime = i
                    } catch (n) {
                        a._wD(t.id + ": canplay: Setting position of " + i + " failed: " + n.message, 2)
                    }
                }
                t._iO._oncanplay && t._iO._oncanplay()
            }),
            canplaythrough: o(function () {
                var t = this._s;
                t.loaded || (t._onbufferchange(0), t._whileloading(t.bytesLoaded, t.bytesTotal, t._get_html5_duration()), t._onload(!0))
            }),
            ended: o(function () {
                var t = this._s;
                a._wD(t.id + ": ended"), t._onfinish()
            }),
            error: o(function () {
                a._wD(this._s.id + ": HTML5 error, code " + this.error.code), this._s._onload(!1)
            }),
            loadeddata: o(function () {
                var t = this._s;
                a._wD(t.id + ": loadeddata"), t._loaded || Ge || (t.duration = t._get_html5_duration())
            }),
            loadedmetadata: o(function () {
                a._wD(this._s.id + ": loadedmetadata")
            }),
            loadstart: o(function () {
                a._wD(this._s.id + ": loadstart"), this._s._onbufferchange(1)
            }),
            play: o(function () {
                this._s._onbufferchange(0)
            }),
            playing: o(function () {
                a._wD(this._s.id + ": playing"), this._s._onbufferchange(0)
            }),
            progress: o(function (t) {
                var e = this._s,
                    i, n, s, o = 0,
                    r = "progress" === t.type,
                    l = t.target.buffered,
                    u = t.loaded || 0,
                    h = t.total || 1;
                if (e.buffered = [], l && l.length) {
                    for (i = 0, n = l.length; n > i; i++) e.buffered.push({
                        start: l.start(i) * ri,
                        end: l.end(i) * ri
                    });
                    if (o = (l.end(0) - l.start(0)) * ri, u = Math.min(1, o / (t.target.duration * ri)), r && l.length > 1) {
                        for (s = [], n = l.length, i = 0; n > i; i++) s.push(t.target.buffered.start(i) * ri + "-" + t.target.buffered.end(i) * ri);
                        a._wD(this._s.id + ": progress, timeRanges: " + s.join(", "))
                    }
                    r && !isNaN(u) && a._wD(this._s.id + ": progress, " + Math.floor(100 * u) + "% loaded")
                }
                isNaN(u) || (e._onbufferchange(0), e._whileloading(u, h, e._get_html5_duration()), u && h && u === h && je.canplaythrough.call(this, t))
            }),
            ratechange: o(function () {
                a._wD(this._s.id + ": ratechange")
            }),
            suspend: o(function (t) {
                var e = this._s;
                a._wD(this._s.id + ": suspend"), je.progress.call(this, t), e._onsuspend()
            }),
            stalled: o(function () {
                a._wD(this._s.id + ": stalled")
            }),
            timeupdate: o(function () {
                this._s._onTimer()
            }),
            waiting: o(function () {
                var t = this._s;
                a._wD(this._s.id + ": waiting"), t._onbufferchange(1)
            })
        }, Ee = function (t) {
            var e;
            return e = t && (t.type || t.url || t.serverURL) ? t.serverURL || t.type && s(t.type) ? !1 : t.type ? ke({
                type: t.type
            }) : ke({
                url: t.url
            }) || a.html5Only || t.url.match(/data\:/i) : !1
        }, Le = function (t) {
            var e;
            return t && (e = Ge && !Ve ? null : Je ? ai : null, t.src = e, void 0 !== t._called_unload && (t._called_load = !1)), Fe && (De = null), e
        }, ke = function (t) {
            if (!a.useHTML5Audio || !a.hasHTML5) return !1;
            var i = t.url || null,
                n = t.type || null,
                o = a.audioFormats,
                r, l, u, h;
            if (n && a.html5[n] !== e) return a.html5[n] && !s(n);
            if (!Oe) {
                Oe = [];
                for (h in o) o.hasOwnProperty(h) && (Oe.push(h), o[h].related && (Oe = Oe.concat(o[h].related)));
                Oe = new RegExp("\\.(" + Oe.join("|") + ")(\\?.*)?$", "i")
            }
            return u = i ? i.toLowerCase()
                .match(Oe) : null, u && u.length ? u = u[1] : n ? (l = n.indexOf(";"), u = (-1 !== l ? n.substr(0, l) : n)
                    .substr(6)) : r = !1, u && a.html5[u] !== e ? r = a.html5[u] && !s(u) : (n = "audio/" + u, r = a.html5.canPlayType({
                    type: n
                }), a.html5[u] = r, r = r && a.html5[n] && !s(n)), r
        }, Pe = function () {
            function t(t) {
                var e, n, s, o = !1,
                    r = !1;
                if (!i || "function" != typeof i.canPlayType) return o;
                if (t instanceof Array) {
                    for (n = 0, s = t.length; s > n; n++)(a.html5[t[n]] || i.canPlayType(t[n])
                        .match(a.html5Test)) && (r = !0, a.html5[t[n]] = !0, a.flash[t[n]] = !!t[n].match(oi));
                    o = r
                } else e = i && "function" == typeof i.canPlayType ? i.canPlayType(t) : !1, o = !(!e || !e.match(a.html5Test));
                return o
            }
            if (!a.useHTML5Audio || !a.hasHTML5) return a.html5.usingFlash = !0, Ce = !0, !1;
            var i = Audio !== e ? Ze && opera.version() < 10 ? new Audio(null) : new Audio : null,
                n, s, o = {},
                r, l;
            r = a.audioFormats;
            for (n in r)
                if (r.hasOwnProperty(n) && (s = "audio/" + n, o[n] = t(r[n].type), o[s] = o[n], n.match(oi) ? (a.flash[n] = !0, a.flash[s] = !0) : (a.flash[n] = !1, a.flash[s] = !1), r[n] && r[n].related))
                    for (l = r[n].related.length - 1; l >= 0; l--) o["audio/" + r[n].related[l]] = o[n], a.html5[r[n].related[l]] = o[n], a.flash[r[n].related[l]] = o[n];
            return o.canPlayType = i ? t : null, a.html5 = I(a.html5, o), a.html5.usingFlash = Ae(), Ce = a.html5.usingFlash, !0
        }, q = {
            notReady: "Unavailable - wait until onready() has fired.",
            notOK: "Audio support is not available.",
            domError: h + "exception caught while appending SWF to DOM.",
            spcWmode: "Removing wmode, preventing known SWF loading issue(s)",
            swf404: c + "Verify that %s is a valid path.",
            tryDebug: "Try " + h + ".debugFlash = true for more security details (output goes to SWF.)",
            checkSWF: "See SWF output for more debug info.",
            localFail: c + "Non-HTTP page (" + g.location.protocol + " URL?) Review Flash player security settings for this special case:\nhttp://www.macromedia.com/support/documentation/en/flashplayer/help/settings_manager04.html\nMay need to add/allow path, eg. c:/sm2/ or /users/me/sm2/",
            waitFocus: c + "Special case: Waiting for SWF to load with window focus...",
            waitForever: c + "Waiting indefinitely for Flash (will recover if unblocked)...",
            waitSWF: c + "Waiting for 100% SWF load...",
            needFunction: c + "Function object expected for %s",
            badID: 'Sound ID "%s" should be a string, starting with a non-numeric character',
            currentObj: c + "_debug(): Current sound objects",
            waitOnload: c + "Waiting for window.onload()",
            docLoaded: c + "Document already loaded",
            onload: c + "initComplete(): calling soundManager.onload()",
            onloadOK: h + ".onload() complete",
            didInit: c + "init(): Already called?",
            secNote: "Flash security note: Network/internet URLs will not load due to security restrictions. Access can be configured via Flash Player Global Security Settings Page: http://www.macromedia.com/support/documentation/en/flashplayer/help/settings_manager04.html",
            badRemove: c + "Failed to remove Flash node.",
            shutdown: h + ".disable(): Shutting down",
            queue: c + "Queueing %s handler",
            smError: "SMSound.load(): Exception: JS-Flash communication failed, or JS error.",
            fbTimeout: "No flash response, applying ." + he.swfTimedout + " CSS...",
            fbLoaded: "Flash loaded",
            fbHandler: c + "flashBlockHandler()",
            manURL: "SMSound.load(): Using manually-assigned URL",
            onURL: h + ".load(): current URL already assigned.",
            badFV: h + '.flashVersion must be 8 or 9. "%s" is invalid. Reverting to %s.',
            as2loop: "Note: Setting stream:false so looping can work (flash 8 limitation)",
            noNSLoop: "Note: Looping not implemented for MovieStar formats",
            needfl9: "Note: Switching to flash 9, required for MP4 formats.",
            mfTimeout: "Setting flashLoadTimeout = 0 (infinite) for off-screen, mobile flash case",
            needFlash: c + "Fatal error: Flash is needed to play some required formats, but is not available.",
            gotFocus: c + "Got window focus.",
            policy: "Enabling usePolicyFile for data access",
            setup: h + ".setup(): allowed parameters: %s",
            setupError: h + '.setup(): "%s" cannot be assigned with this method.',
            setupUndef: h + '.setup(): Could not find option "%s"',
            setupLate: h + ".setup(): url, flashVersion and html5Test property changes will not take effect until reboot().",
            noURL: c + "Flash URL required. Call soundManager.setup({url:...}) to get started.",
            sm2Loaded: "SoundManager 2: Ready.",
            reset: h + ".reset(): Removing event callbacks",
            mobileUA: "Mobile UA detected, preferring HTML5 by default.",
            globalHTML5: "Using singleton HTML5 Audio() pattern for this device."
        }, ae = function () {
            var t = Ne.call(arguments),
                e = t.shift(),
                i = q && q[e] ? q[e] : "",
                n, s;
            if (i && t && t.length)
                for (n = 0, s = t.length; s > n; n++) i = i.replace("%s", t[n]);
            return i
        }, pe = function (t) {
            return 8 === x && t.loops > 1 && t.stream && (k("as2loop"), t.stream = !1), t
        }, de = function (t, e) {
            return t && !t.usePolicyFile && (t.onid3 || t.usePeakData || t.useWaveformData || t.useEQData) && (a._wD((e || "") + ae("policy")), t.usePolicyFile = !0), t
        }, fe = function (t) {
            ei && console.warn !== e ? console.warn(t) : a._wD(t)
        }, v = function () {
            return !1
        }, ie = function (t) {
            var e;
            for (e in t) t.hasOwnProperty(e) && "function" == typeof t[e] && (t[e] = v);
            e = null
        }, ne = function (t) {
            t === e && (t = !1), (A || t) && a.disable(t)
        }, se = function (t) {
            var e = null,
                i;
            if (t)
                if (t.match(/\.swf(\?.*)?$/i)) {
                    if (e = t.substr(t.toLowerCase()
                            .lastIndexOf(".swf?") + 4)) return t
                } else t.lastIndexOf("/") !== t.length - 1 && (t += "/");
            return i = (t && -1 !== t.lastIndexOf("/") ? t.substr(0, t.lastIndexOf("/") + 1) : "./") + a.movieURL, a.noSWFCache && (i += "?ts=" + (new Date)
                .getTime()), i
        }, z = function () {
            x = parseInt(a.flashVersion, 10), 8 !== x && 9 !== x && (a._wD(ae("badFV", x, ee)), a.flashVersion = x = ee);
            var t = a.debugMode || a.debugFlash ? "_debug.swf" : ".swf";
            a.useHTML5Audio && !a.html5Only && a.audioFormats.mp4.required && 9 > x && (a._wD(ae("needfl9")), a.flashVersion = x = 9), a.version = a.versionNumber + (a.html5Only ? " (HTML5-only mode)" : 9 === x ? " (AS3/Flash 9)" : " (AS2/Flash 8)"), x > 8 ? (a.defaultOptions = I(a.defaultOptions, a.flash9Options), a.features.buffering = !0, a.defaultOptions = I(a.defaultOptions, a.movieStarOptions), a.filePatterns.flash9 = new RegExp("\\.(mp3|" + ci.join("|") + ")(\\?.*)?$", "i"), a.features.movieStar = !0) : a.features.movieStar = !1, a.filePattern = a.filePatterns[8 !== x ? "flash9" : "flash8"], a.movieURL = (8 === x ? "soundmanager2.swf" : "soundmanager2_flash9.swf")
                .replace(".swf", t), a.features.peakData = a.features.waveformData = a.features.eqData = x > 8
        }, J = function (t, e) {
            return u ? void u._setPolling(t, e) : !1
        }, K = function () {
            if (a.debugURLParam.test(m) && (a.debugMode = !0), d(a.debugID)) return !1;
            var t, e, i, n, s;
            if (!(!a.debugMode || d(a.debugID) || ei && a.useConsole && a.consoleOnly)) {
                t = g.createElement("div"), t.id = a.debugID + "-toggle", n = {
                    position: "fixed",
                    bottom: "0px",
                    right: "0px",
                    width: "1.2em",
                    height: "1.2em",
                    lineHeight: "1.2em",
                    margin: "2px",
                    textAlign: "center",
                    border: "1px solid #999",
                    cursor: "pointer",
                    background: "#fff",
                    color: "#333",
                    zIndex: 10001
                }, t.appendChild(g.createTextNode("-")), t.onclick = ce, t.title = "Toggle SM2 debug console", f.match(/msie 6/i) && (t.style.position = "absolute", t.style.cursor = "hand");
                for (s in n) n.hasOwnProperty(s) && (t.style[s] = n[s]);
                if (e = g.createElement("div"), e.id = a.debugID, e.style.display = a.debugMode ? "block" : "none", a.debugMode && !d(t.id)) {
                    try {
                        i = Q(), i.appendChild(t)
                    } catch (o) {
                        throw new Error(ae("domError") + " \n" + o.toString())
                    }
                    i.appendChild(e)
                }
            }
            i = null
        }, me = this.getSoundById, k = function (t, e) {
            return t ? a._wD(ae(t), e) : ""
        }, ce = function () {
            var t = d(a.debugID),
                e = d(a.debugID + "-toggle");
            return t ? (w ? (e.innerHTML = "+", t.style.display = "none") : (e.innerHTML = "-", t.style.display = "block"), void(w = !w)) : !1
        }, T = function (i, n, s) {
            if (t.sm2Debugger !== e) try {
                sm2Debugger.handleEvent(i, n, s)
            } catch (o) {
                return !1
            }
            return !0
        }, ue = function () {
            var t = [];
            return a.debugMode && t.push(he.sm2Debug), a.debugFlash && t.push(he.flashDebug), a.useHighPerformance && t.push(he.highPerf), t.join(" ")
        }, le = function () {
            var t = ae("fbHandler"),
                e = a.getMoviePercent(),
                i = he,
                n = {
                    type: "FLASHBLOCK"
                };
            return a.html5Only ? !1 : void(a.ok() ? (a.didFlashBlock && a._wD(t + ": Unblocked"), a.oMC && (a.oMC.className = [ue(), i.swfDefault, i.swfLoaded + (a.didFlashBlock ? " " + i.swfUnblocked : "")].join(" "))) : (Ce && (a.oMC.className = ue() + " " + i.swfDefault + " " + (null === e ? i.swfTimedout : i.swfError), a._wD(t + ": " + ae("fbTimeout") + (e ? " (" + ae("fbLoaded") + ")" : ""))), a.didFlashBlock = !0, F({
                type: "ontimeout",
                ignoreInit: !0,
                error: n
            }), Z(n)))
        }, N = function (t, i, n) {
            b[t] === e && (b[t] = []), b[t].push({
                method: i,
                scope: n || null,
                fired: !1
            })
        }, F = function (t) {
            if (t || (t = {
                    type: a.ok() ? "onready" : "ontimeout"
                }), !C && t && !t.ignoreInit) return !1;
            if ("ontimeout" === t.type && (a.ok() || A && !t.ignoreInit)) return !1;
            var e = {
                    success: t && t.ignoreInit ? a.ok() : !A
                },
                i = t && t.type ? b[t.type] || [] : [],
                n = [],
                s, o, r = [e],
                l = Ce && !a.ok();
            for (t.error && (r[0].error = t.error), s = 0, o = i.length; o > s; s++) i[s].fired !== !0 && n.push(i[s]);
            if (n.length)
                for (s = 0, o = n.length; o > s; s++) n[s].scope ? n[s].method.apply(n[s].scope, r) : n[s].method.apply(this, r), l || (n[s].fired = !0);
            return !0
        }, D = function () {
            t.setTimeout(function () {
                a.useFlashBlock && le(), F(), "function" == typeof a.onload && (k("onload", 1), a.onload.apply(t), k("onloadOK", 1)), a.waitForWindowLoad && He.add(t, "load", D)
            }, 1)
        }, Be = function () {
            if (Re !== e) return Re;
            var i = !1,
                n = navigator,
                s = n.plugins,
                o, r, a, l = t.ActiveXObject;
            if (s && s.length) r = "application/x-shockwave-flash", a = n.mimeTypes, a && a[r] && a[r].enabledPlugin && a[r].enabledPlugin.description && (i = !0);
            else if (l !== e && !f.match(/MSAppHost/i)) {
                try {
                    o = new l("ShockwaveFlash.ShockwaveFlash")
                } catch (u) {
                    o = null
                }
                i = !!o, o = null
            }
            return Re = i, i
        }, Ae = function () {
            var t, e, i = a.audioFormats,
                n = Ve && !!f.match(/os (1|2|3_0|3_1)/i);
            if (n ? (a.hasHTML5 = !1, a.html5Only = !0, a.oMC && (a.oMC.style.display = "none")) : a.useHTML5Audio && (a.html5 && a.html5.canPlayType || (a._wD("SoundManager: No HTML5 Audio() support detected."), a.hasHTML5 = !1), ti && a._wD(c + "Note: Buggy HTML5 Audio in Safari on this OS X release, see https://bugs.webkit.org/show_bug.cgi?id=32159 - " + (Re ? "will use flash fallback for MP3/MP4, if available" : " would use flash fallback for MP3/MP4, but none detected."), 1)), a.useHTML5Audio && a.hasHTML5) {
                Se = !0;
                for (e in i) i.hasOwnProperty(e) && i[e].required && (a.html5.canPlayType(i[e].type) ? a.preferFlash && (a.flash[e] || a.flash[i[e].type]) && (t = !0) : (Se = !1, t = !0))
            }
            return a.ignoreFlash && (t = !1, Se = !0), a.html5Only = a.hasHTML5 && a.useHTML5Audio && !t, !a.html5Only
        }, Te = function (t) {
            var e, i, n = 0,
                s;
            if (t instanceof Array) {
                for (e = 0, i = t.length; i > e; e++)
                    if (t[e] instanceof Object) {
                        if (a.canPlayMIME(t[e].type)) {
                            n = e;
                            break
                        }
                    } else if (a.canPlayURL(t[e])) {
                    n = e;
                    break
                }
                t[n].url && (t[n] = t[n].url), s = t[n]
            } else s = t;
            return s
        }, ye = function (t) {
            t._hasTimer || (t._hasTimer = !0, !Ke && a.html5PollingInterval && (null === we && 0 === be && (we = setInterval(xe, a.html5PollingInterval)), be++))
        }, _e = function (t) {
            t._hasTimer && (t._hasTimer = !1, !Ke && a.html5PollingInterval && be--)
        }, xe = function () {
            var t;
            if (null !== we && !be) return clearInterval(we), we = null, !1;
            for (t = a.soundIDs.length - 1; t >= 0; t--) a.sounds[a.soundIDs[t]].isHTML5 && a.sounds[a.soundIDs[t]]._hasTimer && a.sounds[a.soundIDs[t]]._onTimer()
        }, Z = function (i) {
            i = i !== e ? i : {}, "function" == typeof a.onerror && a.onerror.apply(t, [{
                type: i.type !== e ? i.type : null
            }]), i.fatal !== e && i.fatal && a.disable()
        }, ze = function () {
            if (!ti || !Be()) return !1;
            var t = a.audioFormats,
                e, i;
            for (i in t)
                if (t.hasOwnProperty(i) && ("mp3" === i || "mp4" === i) && (a._wD(h + ": Using flash fallback for " + i + " format"), a.html5[i] = !1, t[i] && t[i].related))
                    for (e = t[i].related.length - 1; e >= 0; e--) a.html5[t[i].related[e]] = !1
        }, this._setSandboxType = function (t) {
            var i = a.sandbox;
            i.type = t, i.description = i.types[i.types[t] !== e ? t : "unknown"], "localWithFile" === i.type ? (i.noRemote = !0, i.noLocal = !1, k("secNote", 2)) : "localWithNetwork" === i.type ? (i.noRemote = !1, i.noLocal = !0) : "localTrusted" === i.type && (i.noRemote = !1, i.noLocal = !1)
        }, this._externalInterfaceOK = function (t) {
            if (a.swfLoaded) return !1;
            var e;
            return T("swf", !0), T("flashtojs", !0), a.swfLoaded = !0, ni = !1, ti && ze(), t && t.replace(/\+dev/i, "") === a.versionNumber.replace(/\+dev/i, "") ? void setTimeout(_, Ye ? 100 : 1) : (e = h + ': Fatal: JavaScript file build "' + a.versionNumber + '" does not match Flash SWF build "' + t + '" at ' + a.url + ". Ensure both are up-to-date.", setTimeout(function i() {
                throw new Error(e)
            }, 0), !1)
        }, G = function (t, i) {
            function n() {
                var t = [],
                    e, i = [],
                    n = " + ";
                e = "SoundManager " + a.version + (!a.html5Only && a.useHTML5Audio ? a.hasHTML5 ? " + HTML5 audio" : ", no HTML5 audio support" : ""), a.html5Only ? a.html5PollingInterval && t.push("html5PollingInterval (" + a.html5PollingInterval + "ms)") : (a.preferFlash && t.push("preferFlash"), a.useHighPerformance && t.push("useHighPerformance"), a.flashPollingInterval && t.push("flashPollingInterval (" + a.flashPollingInterval + "ms)"), a.html5PollingInterval && t.push("html5PollingInterval (" + a.html5PollingInterval + "ms)"), a.wmode && t.push("wmode (" + a.wmode + ")"), a.debugFlash && t.push("debugFlash"), a.useFlashBlock && t.push("flashBlock")), t.length && (i = i.concat([t.join(n)])), a._wD(e + (i.length ? n + i.join(", ") : ""), 1), qe()
            }

            function s(t, e) {
                return '<param name="' + t + '" value="' + e + '" />'
            }
            if (M && S) return !1;
            if (a.html5Only) return z(), n(), a.oMC = d(a.movieID), _(), M = !0, S = !0, !1;
            var o = i || a.url,
                r = a.altURL || o,
                l = "JS/Flash audio component (SoundManager 2)",
                u = Q(),
                h = ue(),
                c = null,
                p = g.getElementsByTagName("html")[0],
                m, v, y, x, b, w, T, C;
            if (c = p && p.dir && p.dir.match(/rtl/i), t = t === e ? a.id : t, z(), a.url = se(li ? o : r), i = a.url, a.wmode = !a.wmode && a.useHighPerformance ? "transparent" : a.wmode, null !== a.wmode && (f.match(/msie 8/i) || !Ye && !a.useHighPerformance) && navigator.platform.match(/win32|win64/i) && (Me.push(q.spcWmode), a.wmode = null), m = {
                    name: t,
                    id: t,
                    src: i,
                    quality: "high",
                    allowScriptAccess: a.allowScriptAccess,
                    bgcolor: a.bgColor,
                    pluginspage: ui + "www.macromedia.com/go/getflashplayer",
                    title: l,
                    type: "application/x-shockwave-flash",
                    wmode: a.wmode,
                    hasPriority: "true"
                }, a.debugFlash && (m.FlashVars = "debug=1"), a.wmode || delete m.wmode, Ye) v = g.createElement("div"), x = ['<object id="' + t + '" data="' + i + '" type="' + m.type + '" title="' + m.title + '" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="' + ui + 'download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,40,0">', s("movie", i), s("AllowScriptAccess", a.allowScriptAccess), s("quality", m.quality), a.wmode ? s("wmode", a.wmode) : "", s("bgcolor", a.bgColor), s("hasPriority", "true"), a.debugFlash ? s("FlashVars", m.FlashVars) : "", "</object>"].join("");
            else {
                v = g.createElement("embed");
                for (y in m) m.hasOwnProperty(y) && v.setAttribute(y, m[y])
            }
            if (K(), h = ue(), u = Q())
                if (a.oMC = d(a.movieID) || g.createElement("div"), a.oMC.id) C = a.oMC.className, a.oMC.className = (C ? C + " " : he.swfDefault) + (h ? " " + h : ""), a.oMC.appendChild(v), Ye && (b = a.oMC.appendChild(g.createElement("div")), b.className = he.swfBox, b.innerHTML = x), S = !0;
                else {
                    if (a.oMC.id = a.movieID, a.oMC.className = he.swfDefault + " " + h, w = null, b = null, a.useFlashBlock || (a.useHighPerformance ? w = {
                            position: "fixed",
                            width: "8px",
                            height: "8px",
                            bottom: "0px",
                            left: "0px",
                            overflow: "hidden"
                        } : (w = {
                            position: "absolute",
                            width: "6px",
                            height: "6px",
                            top: "-9999px",
                            left: "-9999px"
                        }, c && (w.left = Math.abs(parseInt(w.left, 10)) + "px"))), Qe && (a.oMC.style.zIndex = 1e4), !a.debugFlash)
                        for (T in w) w.hasOwnProperty(T) && (a.oMC.style[T] = w[T]);
                    try {
                        Ye || a.oMC.appendChild(v), u.appendChild(a.oMC), Ye && (b = a.oMC.appendChild(g.createElement("div")), b.className = he.swfBox, b.innerHTML = x), S = !0
                    } catch (A) {
                        throw new Error(ae("domError") + " \n" + A.toString())
                    }
                }
            return M = !0, n(), !0
        }, X = function () {
            return a.html5Only ? (G(), !1) : u ? !1 : a.url ? (u = a.getMovie(a.id), u || (oe ? (Ye ? a.oMC.innerHTML = re : a.oMC.appendChild(oe), oe = null, M = !0) : G(a.id, a.url), u = a.getMovie(a.id)), "function" == typeof a.oninitmovie && setTimeout(a.oninitmovie, 1), Xe(), !0) : (k("noURL"), !1)
        }, R = function () {
            setTimeout(B, 1e3)
        }, B = function () {
            var e, i = !1;
            return a.url ? ge ? !1 : (ge = !0, He.remove(t, "load", R), ni && !ii ? (k("waitFocus"), !1) : (C || (e = a.getMoviePercent(), e > 0 && 100 > e && (i = !0)), void setTimeout(function () {
                return e = a.getMoviePercent(), i ? (ge = !1, a._wD(ae("waitSWF")), t.setTimeout(R, 1), !1) : (C || (a._wD(h + ": No Flash response within expected time. Likely causes: " + (0 === e ? "SWF load failed, " : "") + "Flash blocked or JS-Flash security error." + (a.debugFlash ? " " + ae("checkSWF") : ""), 2), !li && e && (k("localFail", 2), a.debugFlash || k("tryDebug", 2)), 0 === e && a._wD(ae("swf404", a.url), 1), T("flashtojs", !1, " (Check flash security or flash blockers)")), void(!C && si && (null === e ? a.useFlashBlock || 0 === a.flashLoadTimeout ? (a.useFlashBlock && le(), k("waitForever")) : !a.useFlashBlock && Se ? t.setTimeout(function () {
                    fe(c + "useFlashBlock is false, 100% HTML5 mode is possible. Rebooting with preferFlash: false..."), a.setup({
                            preferFlash: !1
                        })
                        .reboot(), a.didFlashBlock = !0, a.beginDelayedInit()
                }, 1) : (k("waitForever"), F({
                    type: "ontimeout",
                    ignoreInit: !0
                })) : 0 === a.flashLoadTimeout ? k("waitForever") : ne(!0))))
            }, a.flashLoadTimeout))) : !1
        }, j = function () {
            function e() {
                He.remove(t, "focus", j)
            }
            return ii || !ni ? (e(), !0) : (si = !0, ii = !0, k("gotFocus"), ge = !1, R(), e(), !0)
        }, Xe = function () {
            Me.length && (a._wD("SoundManager 2: " + Me.join(" "), 1), Me = [])
        }, qe = function () {
            Xe();
            var t, e = [];
            if (a.useHTML5Audio && a.hasHTML5) {
                for (t in a.audioFormats) a.audioFormats.hasOwnProperty(t) && e.push(t + " = " + a.html5[t] + (!a.html5[t] && Ce && a.flash[t] ? " (using flash)" : a.preferFlash && a.flash[t] && Ce ? " (preferring flash)" : a.html5[t] ? "" : " (" + (a.audioFormats[t].required ? "required, " : "") + "and no flash support)"));
                a._wD("SoundManager 2 HTML5 support: " + e.join(", "), 1)
            }
        }, L = function (e) {
            if (C) return !1;
            if (a.html5Only) return k("sm2Loaded"), C = !0, D(), T("onload", !0), !0;
            var i = a.useFlashBlock && a.flashLoadTimeout && !a.getMoviePercent(),
                n = !0,
                s;
            return i || (C = !0, A && (s = {
                type: !Re && Ce ? "NO_FLASH" : "INIT_TIMEOUT"
            })), a._wD("SoundManager 2 " + (A ? "failed to load" : "loaded") + " (" + (A ? "Flash security/load error" : "OK") + ")", A ? 2 : 1), A || e ? (a.useFlashBlock && a.oMC && (a.oMC.className = ue() + " " + (null === a.getMoviePercent() ? he.swfTimedout : he.swfError)), F({
                type: "ontimeout",
                error: s,
                ignoreInit: !0
            }), T("onload", !1), Z(s), n = !1) : T("onload", !0), A || (a.waitForWindowLoad && !E ? (k("waitOnload"), He.add(t, "load", D)) : (a.waitForWindowLoad && E && k("docLoaded"), D())), n
        }, y = function () {
            var t, i = a.setupOptions;
            for (t in i) i.hasOwnProperty(t) && (a[t] === e ? a[t] = i[t] : a[t] !== i[t] && (a.setupOptions[t] = a[t]))
        }, _ = function () {
            function e() {
                He.remove(t, "load", a.beginDelayedInit)
            }
            if (C) return k("didInit"), !1;
            if (a.html5Only) return C || (e(), a.enabled = !0, L()), !0;
            X();
            try {
                u._externalInterfaceTest(!1), J(!0, a.flashPollingInterval || (a.useHighPerformance ? 10 : 50)), a.debugMode || u._disableDebug(), a.enabled = !0, T("jstoflash", !0), a.html5Only || He.add(t, "unload", v)
            } catch (i) {
                return a._wD("js/flash exception: " + i.toString()), T("jstoflash", !1), Z({
                    type: "JS_TO_FLASH_EXCEPTION",
                    fatal: !0
                }), ne(!0), L(), !1
            }
            return L(), e(), !0
        }, V = function () {
            return Y ? !1 : (Y = !0, y(), K(), function () {
                var t = "sm2-usehtml5audio=",
                    e = "sm2-preferflash=",
                    i = null,
                    n = null,
                    s = m.toLowerCase(); - 1 !== s.indexOf(t) && (i = "1" === s.charAt(s.indexOf(t) + t.length), ei && console.log((i ? "Enabling " : "Disabling ") + "useHTML5Audio via URL parameter"), a.setup({
                    useHTML5Audio: i
                })), -1 !== s.indexOf(e) && (n = "1" === s.charAt(s.indexOf(e) + e.length), ei && console.log((n ? "Enabling " : "Disabling ") + "preferFlash via URL parameter"), a.setup({
                    preferFlash: n
                }))
            }(), !Re && a.hasHTML5 && (a._wD("SoundManager: No Flash detected" + (a.useHTML5Audio ? ". Trying HTML5-only mode." : ", enabling HTML5."), 1), a.setup({
                useHTML5Audio: !0,
                preferFlash: !1
            })), Pe(), !Re && Ce && (Me.push(q.needFlash), a.setup({
                flashLoadTimeout: 1
            })), g.removeEventListener && g.removeEventListener("DOMContentLoaded", V, !1), X(), !0)
        }, Ie = function () {
            return "complete" === g.readyState && (V(), g.detachEvent("onreadystatechange", Ie)), !0
        }, W = function () {
            E = !0, He.remove(t, "load", W)
        }, U = function () {
            Ke && ((!a.setupOptions.useHTML5Audio || a.setupOptions.preferFlash) && Me.push(q.mobileUA), a.setupOptions.useHTML5Audio = !0, a.setupOptions.preferFlash = !1, (Ve || We && !f.match(/android\s2\.3/i)) && (Me.push(q.globalHTML5), Ve && (a.ignoreFlash = !0), Fe = !0))
        }, U(), Be(), He.add(t, "focus", j), He.add(t, "load", R), He.add(t, "load", W), g.addEventListener ? g.addEventListener("DOMContentLoaded", V, !1) : g.attachEvent ? g.attachEvent("onreadystatechange", Ie) : (T("onload", !1), Z({
            type: "NO_DOM2_EVENTS",
            fatal: !0
        }))
    }
    var n = null;
    void 0 !== t.SM2_DEFER && SM2_DEFER || (n = new i), t.SoundManager = i, t.soundManager = n
}(window),
function () {
    var t = this,
        e = t._,
        i = {},
        n = Array.prototype,
        s = Object.prototype,
        o = Function.prototype,
        r = n.push,
        a = n.slice,
        l = n.concat,
        u = s.toString,
        h = s.hasOwnProperty,
        c = n.forEach,
        p = n.map,
        d = n.reduce,
        f = n.reduceRight,
        m = n.filter,
        g = n.every,
        v = n.some,
        y = n.indexOf,
        _ = n.lastIndexOf,
        x = Array.isArray,
        b = Object.keys,
        w = o.bind,
        T = function (t) {
            return t instanceof T ? t : this instanceof T ? void(this._wrapped = t) : new T(t)
        };
    "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = T), exports._ = T) : t._ = T, T.VERSION = "1.5.1";
    var M = T.each = T.forEach = function (t, e, n) {
        if (null != t)
            if (c && t.forEach === c) t.forEach(e, n);
            else if (t.length === +t.length) {
            for (var s = 0, o = t.length; o > s; s++)
                if (e.call(n, t[s], s, t) === i) return
        } else
            for (var r in t)
                if (T.has(t, r) && e.call(n, t[r], r, t) === i) return
    };
    T.map = T.collect = function (t, e, i) {
        var n = [];
        return null == t ? n : p && t.map === p ? t.map(e, i) : (M(t, function (t, s, o) {
            n.push(e.call(i, t, s, o))
        }), n)
    };
    var S = "Reduce of empty array with no initial value";
    T.reduce = T.foldl = T.inject = function (t, e, i, n) {
        var s = arguments.length > 2;
        if (null == t && (t = []), d && t.reduce === d) return n && (e = T.bind(e, n)), s ? t.reduce(e, i) : t.reduce(e);
        if (M(t, function (t, o, r) {
                s ? i = e.call(n, i, t, o, r) : (i = t, s = !0)
            }), !s) throw new TypeError(S);
        return i
    }, T.reduceRight = T.foldr = function (t, e, i, n) {
        var s = arguments.length > 2;
        if (null == t && (t = []), f && t.reduceRight === f) return n && (e = T.bind(e, n)), s ? t.reduceRight(e, i) : t.reduceRight(e);
        var o = t.length;
        if (o !== +o) {
            var r = T.keys(t);
            o = r.length
        }
        if (M(t, function (a, l, u) {
                l = r ? r[--o] : --o, s ? i = e.call(n, i, t[l], l, u) : (i = t[l], s = !0)
            }), !s) throw new TypeError(S);
        return i
    }, T.find = T.detect = function (t, e, i) {
        var n;
        return C(t, function (t, s, o) {
            return e.call(i, t, s, o) ? (n = t, !0) : void 0
        }), n
    }, T.filter = T.select = function (t, e, i) {
        var n = [];
        return null == t ? n : m && t.filter === m ? t.filter(e, i) : (M(t, function (t, s, o) {
            e.call(i, t, s, o) && n.push(t)
        }), n)
    }, T.reject = function (t, e, i) {
        return T.filter(t, function (t, n, s) {
            return !e.call(i, t, n, s)
        }, i)
    }, T.every = T.all = function (t, e, n) {
        e || (e = T.identity);
        var s = !0;
        return null == t ? s : g && t.every === g ? t.every(e, n) : (M(t, function (t, o, r) {
            return (s = s && e.call(n, t, o, r)) ? void 0 : i
        }), !!s)
    };
    var C = T.some = T.any = function (t, e, n) {
        e || (e = T.identity);
        var s = !1;
        return null == t ? s : v && t.some === v ? t.some(e, n) : (M(t, function (t, o, r) {
            return s || (s = e.call(n, t, o, r)) ? i : void 0
        }), !!s)
    };
    T.contains = T.include = function (t, e) {
        return null == t ? !1 : y && t.indexOf === y ? -1 != t.indexOf(e) : C(t, function (t) {
            return t === e
        })
    }, T.invoke = function (t, e) {
        var i = a.call(arguments, 2),
            n = T.isFunction(e);
        return T.map(t, function (t) {
            return (n ? e : t[e])
                .apply(t, i)
        })
    }, T.pluck = function (t, e) {
        return T.map(t, function (t) {
            return t[e]
        })
    }, T.where = function (t, e, i) {
        return T.isEmpty(e) ? i ? void 0 : [] : T[i ? "find" : "filter"](t, function (t) {
            for (var i in e)
                if (e[i] !== t[i]) return !1;
            return !0
        })
    }, T.findWhere = function (t, e) {
        return T.where(t, e, !0)
    }, T.max = function (t, e, i) {
        if (!e && T.isArray(t) && t[0] === +t[0] && t.length < 65535) return Math.max.apply(Math, t);
        if (!e && T.isEmpty(t)) return -1 / 0;
        var n = {
            computed: -1 / 0,
            value: -1 / 0
        };
        return M(t, function (t, s, o) {
            var r = e ? e.call(i, t, s, o) : t;
            r > n.computed && (n = {
                value: t,
                computed: r
            })
        }), n.value
    }, T.min = function (t, e, i) {
        if (!e && T.isArray(t) && t[0] === +t[0] && t.length < 65535) return Math.min.apply(Math, t);
        if (!e && T.isEmpty(t)) return 1 / 0;
        var n = {
            computed: 1 / 0,
            value: 1 / 0
        };
        return M(t, function (t, s, o) {
            var r = e ? e.call(i, t, s, o) : t;
            r < n.computed && (n = {
                value: t,
                computed: r
            })
        }), n.value
    }, T.shuffle = function (t) {
        var e, i = 0,
            n = [];
        return M(t, function (t) {
            e = T.random(i++), n[i - 1] = n[e], n[e] = t
        }), n
    };
    var A = function (t) {
        return T.isFunction(t) ? t : function (e) {
            return e[t]
        }
    };
    T.sortBy = function (t, e, i) {
        var n = A(e);
        return T.pluck(T.map(t, function (t, e, s) {
                return {
                    value: t,
                    index: e,
                    criteria: n.call(i, t, e, s)
                }
            })
            .sort(function (t, e) {
                var i = t.criteria,
                    n = e.criteria;
                if (i !== n) {
                    if (i > n || void 0 === i) return 1;
                    if (n > i || void 0 === n) return -1
                }
                return t.index < e.index ? -1 : 1
            }), "value")
    };
    var E = function (t, e, i, n) {
        var s = {},
            o = A(null == e ? T.identity : e);
        return M(t, function (e, r) {
            var a = o.call(i, e, r, t);
            n(s, a, e)
        }), s
    };
    T.groupBy = function (t, e, i) {
        return E(t, e, i, function (t, e, i) {
            (T.has(t, e) ? t[e] : t[e] = [])
            .push(i)
        })
    }, T.countBy = function (t, e, i) {
        return E(t, e, i, function (t, e) {
            T.has(t, e) || (t[e] = 0), t[e] ++
        })
    }, T.sortedIndex = function (t, e, i, n) {
        i = null == i ? T.identity : A(i);
        for (var s = i.call(n, e), o = 0, r = t.length; r > o;) {
            var a = o + r >>> 1;
            i.call(n, t[a]) < s ? o = a + 1 : r = a
        }
        return o
    }, T.toArray = function (t) {
        return t ? T.isArray(t) ? a.call(t) : t.length === +t.length ? T.map(t, T.identity) : T.values(t) : []
    }, T.size = function (t) {
        return null == t ? 0 : t.length === +t.length ? t.length : T.keys(t)
            .length
    }, T.first = T.head = T.take = function (t, e, i) {
        return null == t ? void 0 : null == e || i ? t[0] : a.call(t, 0, e)
    }, T.initial = function (t, e, i) {
        return a.call(t, 0, t.length - (null == e || i ? 1 : e))
    }, T.last = function (t, e, i) {
        return null == t ? void 0 : null == e || i ? t[t.length - 1] : a.call(t, Math.max(t.length - e, 0))
    }, T.rest = T.tail = T.drop = function (t, e, i) {
        return a.call(t, null == e || i ? 1 : e)
    }, T.compact = function (t) {
        return T.filter(t, T.identity)
    };
    var k = function (t, e, i) {
        return e && T.every(t, T.isArray) ? l.apply(i, t) : (M(t, function (t) {
            T.isArray(t) || T.isArguments(t) ? e ? r.apply(i, t) : k(t, e, i) : i.push(t)
        }), i)
    };
    T.flatten = function (t, e) {
        return k(t, e, [])
    }, T.without = function (t) {
        return T.difference(t, a.call(arguments, 1))
    }, T.uniq = T.unique = function (t, e, i, n) {
        T.isFunction(e) && (n = i, i = e, e = !1);
        var s = i ? T.map(t, i, n) : t,
            o = [],
            r = [];
        return M(s, function (i, n) {
            (e ? n && r[r.length - 1] === i : T.contains(r, i)) || (r.push(i), o.push(t[n]))
        }), o
    }, T.union = function () {
        return T.uniq(T.flatten(arguments, !0))
    }, T.intersection = function (t) {
        var e = a.call(arguments, 1);
        return T.filter(T.uniq(t), function (t) {
            return T.every(e, function (e) {
                return T.indexOf(e, t) >= 0
            })
        })
    }, T.difference = function (t) {
        var e = l.apply(n, a.call(arguments, 1));
        return T.filter(t, function (t) {
            return !T.contains(e, t)
        })
    }, T.zip = function () {
        for (var t = T.max(T.pluck(arguments, "length")
                .concat(0)), e = new Array(t), i = 0; t > i; i++) e[i] = T.pluck(arguments, "" + i);
        return e
    }, T.object = function (t, e) {
        if (null == t) return {};
        for (var i = {}, n = 0, s = t.length; s > n; n++) e ? i[t[n]] = e[n] : i[t[n][0]] = t[n][1];
        return i
    }, T.indexOf = function (t, e, i) {
        if (null == t) return -1;
        var n = 0,
            s = t.length;
        if (i) {
            if ("number" != typeof i) return n = T.sortedIndex(t, e), t[n] === e ? n : -1;
            n = 0 > i ? Math.max(0, s + i) : i
        }
        if (y && t.indexOf === y) return t.indexOf(e, i);
        for (; s > n; n++)
            if (t[n] === e) return n;
        return -1
    }, T.lastIndexOf = function (t, e, i) {
        if (null == t) return -1;
        var n = null != i;
        if (_ && t.lastIndexOf === _) return n ? t.lastIndexOf(e, i) : t.lastIndexOf(e);
        for (var s = n ? i : t.length; s--;)
            if (t[s] === e) return s;
        return -1
    }, T.range = function (t, e, i) {
        arguments.length <= 1 && (e = t || 0, t = 0), i = arguments[2] || 1;
        for (var n = Math.max(Math.ceil((e - t) / i), 0), s = 0, o = new Array(n); n > s;) o[s++] = t, t += i;
        return o
    };
    var O = function () {};
    T.bind = function (t, e) {
        var i, n;
        if (w && t.bind === w) return w.apply(t, a.call(arguments, 1));
        if (!T.isFunction(t)) throw new TypeError;
        return i = a.call(arguments, 2), n = function () {
            if (!(this instanceof n)) return t.apply(e, i.concat(a.call(arguments)));
            O.prototype = t.prototype;
            var s = new O;
            O.prototype = null;
            var o = t.apply(s, i.concat(a.call(arguments)));
            return Object(o) === o ? o : s
        }
    }, T.partial = function (t) {
        var e = a.call(arguments, 1);
        return function () {
            return t.apply(this, e.concat(a.call(arguments)))
        }
    }, T.bindAll = function (t) {
        var e = a.call(arguments, 1);
        if (0 === e.length) throw new Error("bindAll must be passed function names");
        return M(e, function (e) {
            t[e] = T.bind(t[e], t)
        }), t
    }, T.memoize = function (t, e) {
        var i = {};
        return e || (e = T.identity),
            function () {
                var n = e.apply(this, arguments);
                return T.has(i, n) ? i[n] : i[n] = t.apply(this, arguments)
            }
    }, T.delay = function (t, e) {
        var i = a.call(arguments, 2);
        return setTimeout(function () {
            return t.apply(null, i)
        }, e)
    }, T.defer = function (t) {
        return T.delay.apply(T, [t, 1].concat(a.call(arguments, 1)))
    }, T.throttle = function (t, e, i) {
        var n, s, o, r = null,
            a = 0;
        i || (i = {});
        var l = function () {
            a = i.leading === !1 ? 0 : new Date, r = null, o = t.apply(n, s)
        };
        return function () {
            var u = new Date;
            a || i.leading !== !1 || (a = u);
            var h = e - (u - a);
            return n = this, s = arguments, 0 >= h ? (clearTimeout(r), r = null, a = u, o = t.apply(n, s)) : r || i.trailing === !1 || (r = setTimeout(l, h)), o
        }
    }, T.debounce = function (t, e, i) {
        var n, s = null;
        return function () {
            var o = this,
                r = arguments,
                a = function () {
                    s = null, i || (n = t.apply(o, r))
                },
                l = i && !s;
            return clearTimeout(s), s = setTimeout(a, e), l && (n = t.apply(o, r)), n
        }
    }, T.once = function (t) {
        var e = !1,
            i;
        return function () {
            return e ? i : (e = !0, i = t.apply(this, arguments), t = null, i)
        }
    }, T.wrap = function (t, e) {
        return function () {
            var i = [t];
            return r.apply(i, arguments), e.apply(this, i)
        }
    }, T.compose = function () {
        var t = arguments;
        return function () {
            for (var e = arguments, i = t.length - 1; i >= 0; i--) e = [t[i].apply(this, e)];
            return e[0]
        }
    }, T.after = function (t, e) {
        return function () {
            return --t < 1 ? e.apply(this, arguments) : void 0
        }
    }, T.keys = b || function (t) {
        if (t !== Object(t)) throw new TypeError("Invalid object");
        var e = [];
        for (var i in t) T.has(t, i) && e.push(i);
        return e
    }, T.values = function (t) {
        var e = [];
        for (var i in t) T.has(t, i) && e.push(t[i]);
        return e
    }, T.pairs = function (t) {
        var e = [];
        for (var i in t) T.has(t, i) && e.push([i, t[i]]);
        return e
    }, T.invert = function (t) {
        var e = {};
        for (var i in t) T.has(t, i) && (e[t[i]] = i);
        return e
    }, T.functions = T.methods = function (t) {
        var e = [];
        for (var i in t) T.isFunction(t[i]) && e.push(i);
        return e.sort()
    }, T.extend = function (t) {
        return M(a.call(arguments, 1), function (e) {
            if (e)
                for (var i in e) t[i] = e[i]
        }), t
    }, T.pick = function (t) {
        var e = {},
            i = l.apply(n, a.call(arguments, 1));
        return M(i, function (i) {
            i in t && (e[i] = t[i])
        }), e
    }, T.omit = function (t) {
        var e = {},
            i = l.apply(n, a.call(arguments, 1));
        for (var s in t) T.contains(i, s) || (e[s] = t[s]);
        return e
    }, T.defaults = function (t) {
        return M(a.call(arguments, 1), function (e) {
            if (e)
                for (var i in e) void 0 === t[i] && (t[i] = e[i])
        }), t
    }, T.clone = function (t) {
        return T.isObject(t) ? T.isArray(t) ? t.slice() : T.extend({}, t) : t
    }, T.tap = function (t, e) {
        return e(t), t
    };
    var L = function (t, e, i, n) {
        if (t === e) return 0 !== t || 1 / t == 1 / e;
        if (null == t || null == e) return t === e;
        t instanceof T && (t = t._wrapped), e instanceof T && (e = e._wrapped);
        var s = u.call(t);
        if (s != u.call(e)) return !1;
        switch (s) {
        case "[object String]":
            return t == String(e);
        case "[object Number]":
            return t != +t ? e != +e : 0 == t ? 1 / t == 1 / e : t == +e;
        case "[object Date]":
        case "[object Boolean]":
            return +t == +e;
        case "[object RegExp]":
            return t.source == e.source && t.global == e.global && t.multiline == e.multiline && t.ignoreCase == e.ignoreCase
        }
        if ("object" != typeof t || "object" != typeof e) return !1;
        for (var o = i.length; o--;)
            if (i[o] == t) return n[o] == e;
        var r = t.constructor,
            a = e.constructor;
        if (r !== a && !(T.isFunction(r) && r instanceof r && T.isFunction(a) && a instanceof a)) return !1;
        i.push(t), n.push(e);
        var l = 0,
            h = !0;
        if ("[object Array]" == s) {
            if (l = t.length, h = l == e.length)
                for (; l-- && (h = L(t[l], e[l], i, n)););
        } else {
            for (var c in t)
                if (T.has(t, c) && (l++, !(h = T.has(e, c) && L(t[c], e[c], i, n)))) break;
            if (h) {
                for (c in e)
                    if (T.has(e, c) && !l--) break;
                h = !l
            }
        }
        return i.pop(), n.pop(), h
    };
    T.isEqual = function (t, e) {
        return L(t, e, [], [])
    }, T.isEmpty = function (t) {
        if (null == t) return !0;
        if (T.isArray(t) || T.isString(t)) return 0 === t.length;
        for (var e in t)
            if (T.has(t, e)) return !1;
        return !0
    }, T.isElement = function (t) {
        return !(!t || 1 !== t.nodeType)
    }, T.isArray = x || function (t) {
        return "[object Array]" == u.call(t)
    }, T.isObject = function (t) {
        return t === Object(t)
    }, M(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function (t) {
        T["is" + t] = function (e) {
            return u.call(e) == "[object " + t + "]"
        }
    }), T.isArguments(arguments) || (T.isArguments = function (t) {
        return !(!t || !T.has(t, "callee"))
    }), "function" != typeof /./ && (T.isFunction = function (t) {
        return "function" == typeof t
    }), T.isFinite = function (t) {
        return isFinite(t) && !isNaN(parseFloat(t))
    }, T.isNaN = function (t) {
        return T.isNumber(t) && t != +t
    }, T.isBoolean = function (t) {
        return t === !0 || t === !1 || "[object Boolean]" == u.call(t)
    }, T.isNull = function (t) {
        return null === t
    }, T.isUndefined = function (t) {
        return void 0 === t
    }, T.has = function (t, e) {
        return h.call(t, e)
    }, T.noConflict = function () {
        return t._ = e, this
    }, T.identity = function (t) {
        return t
    }, T.times = function (t, e, i) {
        for (var n = Array(Math.max(0, t)), s = 0; t > s; s++) n[s] = e.call(i, s);
        return n
    }, T.random = function (t, e) {
        return null == e && (e = t, t = 0), t + Math.floor(Math.random() * (e - t + 1))
    };
    var I = {
        escape: {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;",
            "/": "&#x2F;"
        }
    };
    I.unescape = T.invert(I.escape);
    var P = {
        escape: new RegExp("[" + T.keys(I.escape)
            .join("") + "]", "g"),
        unescape: new RegExp("(" + T.keys(I.unescape)
            .join("|") + ")", "g")
    };
    T.each(["escape", "unescape"], function (t) {
        T[t] = function (e) {
            return null == e ? "" : ("" + e)
                .replace(P[t], function (e) {
                    return I[t][e]
                })
        }
    }), T.result = function (t, e) {
        if (null == t) return void 0;
        var i = t[e];
        return T.isFunction(i) ? i.call(t) : i
    }, T.mixin = function (t) {
        M(T.functions(t), function (e) {
            var i = T[e] = t[e];
            T.prototype[e] = function () {
                var t = [this._wrapped];
                return r.apply(t, arguments), R.call(this, i.apply(T, t))
            }
        })
    };
    var H = 0;
    T.uniqueId = function (t) {
        var e = ++H + "";
        return t ? t + e : e
    }, T.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    };
    var N = /(.)^/,
        F = {
            "'": "'",
            "\\": "\\",
            "\r": "r",
            "\n": "n",
            "	": "t",
            "\u2028": "u2028",
            "\u2029": "u2029"
        },
        D = /\\|'|\r|\n|\t|\u2028|\u2029/g;
    T.template = function (t, e, i) {
        var n;
        i = T.defaults({}, i, T.templateSettings);
        var s = new RegExp([(i.escape || N)
                .source, (i.interpolate || N)
                .source, (i.evaluate || N)
                .source
            ].join("|") + "|$", "g"),
            o = 0,
            r = "__p+='";
        t.replace(s, function (e, i, n, s, a) {
            return r += t.slice(o, a)
                .replace(D, function (t) {
                    return "\\" + F[t]
                }), i && (r += "'+\n((__t=(" + i + "))==null?'':_.escape(__t))+\n'"), n && (r += "'+\n((__t=(" + n + "))==null?'':__t)+\n'"), s && (r += "';\n" + s + "\n__p+='"), o = a + e.length, e
        }), r += "';\n", i.variable || (r = "with(obj||{}){\n" + r + "}\n"), r = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + r + "return __p;\n";
        try {
            n = new Function(i.variable || "obj", "_", r)
        } catch (a) {
            throw a.source = r, a
        }
        if (e) return n(e, T);
        var l = function (t) {
            return n.call(this, t, T)
        };
        return l.source = "function(" + (i.variable || "obj") + "){\n" + r + "}", l
    }, T.chain = function (t) {
        return T(t)
            .chain()
    };
    var R = function (t) {
        return this._chain ? T(t)
            .chain() : t
    };
    T.mixin(T), M(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function (t) {
        var e = n[t];
        T.prototype[t] = function () {
            var i = this._wrapped;
            return e.apply(i, arguments), "shift" != t && "splice" != t || 0 !== i.length || delete i[0], R.call(this, i)
        }
    }), M(["concat", "join", "slice"], function (t) {
        var e = n[t];
        T.prototype[t] = function () {
            return R.call(this, e.apply(this._wrapped, arguments))
        }
    }), T.extend(T.prototype, {
        chain: function () {
            return this._chain = !0, this
        },
        value: function () {
            return this._wrapped
        }
    })
}.call(this);
var Backbone = Backbone || {};
! function () {
    var t = [],
        e = t.slice,
        i = /\s+/,
        n = function (t, e, i) {
            var n, s = -1,
                o = e.length;
            switch (i.length) {
            case 0:
                for (; ++s < o;)(n = e[s])
                    .callback.call(n.ctx);
                return;
            case 1:
                for (; ++s < o;)(n = e[s])
                    .callback.call(n.ctx, i[0]);
                return;
            case 2:
                for (; ++s < o;)(n = e[s])
                    .callback.call(n.ctx, i[0], i[1]);
                return;
            case 3:
                for (; ++s < o;)(n = e[s])
                    .callback.call(n.ctx, i[0], i[1], i[2]);
                return;
            default:
                for (; ++s < o;)(n = e[s])
                    .callback.apply(n.ctx, i)
            }
        },
        s = Backbone.Events = {
            on: function (t, e, i) {
                this._events || (this._events = {});
                var n = this._events[t] || (this._events[t] = []);
                return n.push({
                    callback: e,
                    context: i,
                    ctx: i || this
                }), this
            },
            once: function (t, e, i) {
                var n = this,
                    s = _.once(function () {
                        n.off(t, s), e.apply(this, arguments)
                    });
                return s._callback = e, this.on(t, s, i), this
            },
            off: function (t, e, i) {
                var n, s, o, r, a, l, u, h;
                if (!this._events) return this;
                if (!t && !e && !i) return this._events = {}, this;
                for (r = t ? [t] : _.keys(this._events), a = 0, l = r.length; l > a; a++)
                    if (t = r[a], n = this._events[t]) {
                        if (o = [], e || i)
                            for (u = 0, h = n.length; h > u; u++) s = n[u], (e && e !== (s.callback._callback || s.callback) || i && i !== s.context) && o.push(s);
                        this._events[t] = o
                    }
                return this
            },
            trigger: function (t) {
                if (!this._events) return this;
                var i = e.call(arguments, 1),
                    s = this._events[t],
                    o = this._events.all;
                return s && n(this, s, i), o && n(this, o, arguments), this
            },
            listenTo: function (t, e, i) {
                var n = this._listeners || (this._listeners = {}),
                    s = t._listenerId || (t._listenerId = _.uniqueId("l"));
                return n[s] = t, t.on(e, i || this, this), this
            },
            stopListening: function (t, e, i) {
                var n = this._listeners;
                if (n) {
                    if (t) t.off(e, i, this), e || i || delete n[t._listenerId];
                    else {
                        for (var s in n) n[s].off(null, null, this);
                        this._listeners = {}
                    }
                    return this
                }
            }
        };
    s.bind = s.on, s.unbind = s.off, "undefined" != typeof exports && ("undefined" != typeof module && module.exports && (exports = module.exports = s), exports.Backbone = exports.Backbone || Backbone)
}(),
function () {
    function t(t, n) {
        var s = (new Date)
            .getTime(),
            o = Math.max(0, 16 - (s - i)),
            r = e.setTimeout(function () {
                t(s + o)
            }, o);
        return i = s + o, r
    }
    var e = this,
        i = 0,
        n = ["ms", "moz", "webkit", "o"];
    if ("undefined" != typeof exports) return "undefined" != typeof module && module.exports && (exports = module.exports = t), void(exports.requestAnimationFrame = t);
    for (var s = 0; s < n.length && !e.requestAnimationFrame; ++s) e.requestAnimationFrame = e[n[s] + "RequestAnimationFrame"], e.cancelAnimationFrame = e[n[s] + "CancelAnimationFrame"] || e[n[s] + "CancelRequestAnimationFrame"];
    e.requestAnimationFrame || (e.requestAnimationFrame = t), e.cancelAnimationFrame || (e.cancelAnimationFrame = function (t) {
        clearTimeout(t)
    })
}(),
function () {
    function t() {
        var t = document.body.getBoundingClientRect(),
            e = this.width = t.width,
            i = this.height = t.height;
        this.renderer.setSize(e, i, this.ratio), this.trigger(y.Events.resize, e, i)
    }

    function e() {
        return (i.performance && i.performance.now ? i.performance : Date)
            .now()
    }
    var i = this,
        n = i.Two || {},
        s = Math.sin,
        o = Math.cos,
        r = Math.atan2,
        a = Math.sqrt,
        l = Math.round,
        u = Math.abs,
        h = Math.PI,
        c = 2 * h,
        p = h / 2,
        d = Math.pow,
        f = Math.min,
        m = Math.max,
        g = 0,
        v = {
            hasEventListeners: _.isFunction(i.addEventListener),
            bind: function (t, e, i, n) {
                return this.hasEventListeners ? t.addEventListener(e, i, !!n) : t.attachEvent("on" + e, i), this
            },
            unbind: function (t, e, i, n) {
                return this.hasEventListeners ? t.removeEventListeners(e, i, !!n) : t.detachEvent("on" + e, i), this
            }
        },
        y = i.Two = function (e) {
            var n = _.defaults(e || {}, {
                fullscreen: !1,
                width: 640,
                height: 480,
                type: y.Types.svg,
                autostart: !1
            });
            if (_.each(n, function (t, e) {
                    "fullscreen" !== e && "width" !== e && "height" !== e && "autostart" !== e && (this[e] = t)
                }, this), _.isElement(n.domElement) && (this.type = y.Types[n.domElement.tagName.toLowerCase()]), this.renderer = new y[this.type](this), y.Utils.setPlaying.call(this, n.autostart), this.frameCount = 0, n.fullscreen) {
                var s = _.bind(t, this);
                _.extend(document.body.style, {
                    overflow: "hidden",
                    margin: 0,
                    padding: 0,
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    position: "fixed"
                }), _.extend(this.renderer.domElement.style, {
                    display: "block",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    position: "fixed"
                }), v.bind(i, "resize", s), s()
            } else _.isElement(n.domElement) || (this.renderer.setSize(n.width, n.height, this.ratio), this.width = n.width, this.height = n.height);
            this.scene = this.renderer.scene, y.Instances.push(this)
        };
    _.extend(y, {
        Array: i.Float32Array || Array,
        Types: {
            webgl: "WebGLRenderer",
            svg: "SVGRenderer",
            canvas: "CanvasRenderer"
        },
        Version: "v0.4.0",
        Identifier: "two_",
        Properties: {
            hierarchy: "hierarchy",
            demotion: "demotion"
        },
        Events: {
            play: "play",
            pause: "pause",
            update: "update",
            render: "render",
            resize: "resize",
            change: "change",
            remove: "remove",
            insert: "insert"
        },
        Commands: {
            move: "M",
            line: "L",
            curve: "C",
            close: "Z"
        },
        Resolution: 8,
        Instances: [],
        noConflict: function () {
            return i.Two = n, this
        },
        uniqueId: function () {
            var t = g;
            return g++, t
        },
        Utils: {
            release: function (t) {
                _.isObject(t) && (_.isFunction(t.unbind) && t.unbind(), t.vertices && (_.isFunction(t.vertices.unbind) && t.vertices.unbind(), _.each(t.vertices, function (t) {
                    _.isFunction(t.unbind) && t.unbind()
                })), t.children && _.each(t.children, function (t) {
                    y.Utils.release(t)
                }))
            },
            Curve: {
                CollinearityEpsilon: d(10, -30),
                RecursionLimit: 16,
                CuspLimit: 0,
                Tolerance: {
                    distance: .25,
                    angle: 0,
                    epsilon: .01
                },
                abscissas: [
                    [.5773502691896257],
                    [0, .7745966692414834],
                    [.33998104358485626, .8611363115940526],
                    [0, .5384693101056831, .906179845938664],
                    [.2386191860831969, .6612093864662645, .932469514203152],
                    [0, .4058451513773972, .7415311855993945, .9491079123427585],
                    [.1834346424956498, .525532409916329, .7966664774136267, .9602898564975363],
                    [0, .3242534234038089, .6133714327005904, .8360311073266358, .9681602395076261],
                    [.14887433898163122, .4333953941292472, .6794095682990244, .8650633666889845, .9739065285171717],
                    [0, .26954315595234496, .5190961292068118, .7301520055740494, .8870625997680953, .978228658146057],
                    [.1252334085114689, .3678314989981802, .5873179542866175, .7699026741943047, .9041172563704749, .9815606342467192],
                    [0, .2304583159551348, .44849275103644687, .6423493394403402, .8015780907333099, .9175983992229779, .9841830547185881],
                    [.10805494870734367, .31911236892788974, .5152486363581541, .6872929048116855, .827201315069765, .9284348836635735, .9862838086968123],
                    [0, .20119409399743451, .3941513470775634, .5709721726085388, .7244177313601701, .8482065834104272, .937273392400706, .9879925180204854],
                    [.09501250983763744, .2816035507792589, .45801677765722737, .6178762444026438, .755404408355003, .8656312023878318, .9445750230732326, .9894009349916499]
                ],
                weights: [
                    [1],
                    [.8888888888888888, .5555555555555556],
                    [.6521451548625461, .34785484513745385],
                    [.5688888888888889, .47862867049936647, .23692688505618908],
                    [.46791393457269104, .3607615730481386, .17132449237917036],
                    [.4179591836734694, .3818300505051189, .27970539148927664, .1294849661688697],
                    [.362683783378362, .31370664587788727, .22238103445337448, .10122853629037626],
                    [.3302393550012598, .31234707704000286, .26061069640293544, .1806481606948574, .08127438836157441],
                    [.29552422471475287, .26926671930999635, .21908636251598204, .1494513491505806, .06667134430868814],
                    [.2729250867779006, .26280454451024665, .23319376459199048, .18629021092773426, .1255803694649046, .05566856711617366],
                    [.24914704581340277, .2334925365383548, .20316742672306592, .16007832854334622, .10693932599531843, .04717533638651183],
                    [.2325515532308739, .22628318026289723, .2078160475368885, .17814598076194574, .13887351021978725, .09212149983772845, .04048400476531588],
                    [.2152638534631578, .2051984637212956, .18553839747793782, .15720316715819355, .12151857068790319, .08015808715976021, .03511946033175186],
                    [.2025782419255613, .19843148532711158, .1861610000155622, .16626920581699392, .13957067792615432, .10715922046717194, .07036604748810812, .03075324199611727],
                    [.1894506104550685, .18260341504492358, .16915651939500254, .14959598881657674, .12462897125553388, .09515851168249279, .062253523938647894, .027152459411754096]
                ]
            },
            devicePixelRatio: i.devicePixelRatio || 1,
            getBackingStoreRatio: function (t) {
                return t.webkitBackingStorePixelRatio || t.mozBackingStorePixelRatio || t.msBackingStorePixelRatio || t.oBackingStorePixelRatio || t.backingStorePixelRatio || 1
            },
            getRatio: function (t) {
                return y.Utils.devicePixelRatio / E(t)
            },
            setPlaying: function (t) {
                return this.playing = !!t, this
            },
            getComputedMatrix: function (t, e) {
                e = e && e.identity() || new y.Matrix;
                for (var i = t, n = []; i && i._matrix;) n.push(i._matrix), i = i.parent;
                return n.reverse(), _.each(n, function (t) {
                    var i = t.elements;
                    e.multiply(i[0], i[1], i[2], i[3], i[4], i[5], i[6], i[7], i[8], i[9])
                }), e
            },
            deltaTransformPoint: function (t, e, i) {
                var n = e * t.a + i * t.c + 0,
                    s = e * t.b + i * t.d + 0;
                return new y.Vector(n, s)
            },
            decomposeMatrix: function (t) {
                var e = y.Utils.deltaTransformPoint(t, 0, 1),
                    i = y.Utils.deltaTransformPoint(t, 1, 0),
                    n = 180 / Math.PI * Math.atan2(e.y, e.x) - 90,
                    s = 180 / Math.PI * Math.atan2(i.y, i.x);
                return {
                    translateX: t.e,
                    translateY: t.f,
                    scaleX: Math.sqrt(t.a * t.a + t.b * t.b),
                    scaleY: Math.sqrt(t.c * t.c + t.d * t.d),
                    skewX: n,
                    skewY: s,
                    rotation: n
                }
            },
            applySvgAttributes: function (t, e) {
                var i = {},
                    n = {},
                    s, o, r, a;
                if (getComputedStyle) {
                    var l = getComputedStyle(t);
                    for (s = l.length; s--;) o = l[s], r = l[o], void 0 !== r && (n[o] = r)
                }
                for (s = t.attributes.length; s--;) a = t.attributes[s], i[a.nodeName] = a.value;
                _.isUndefined(n.opacity) || (n["stroke-opacity"] = n.opacity, n["fill-opacity"] = n.opacity), _.extend(n, i), n.visible = !(_.isUndefined(n.display) && "none" === n.display) || _.isUndefined(n.visibility) && "hidden" === n.visibility;
                for (o in n) switch (r = n[o], o) {
                case "transform":
                    if ("none" === r) break;
                    var u = t.getCTM();
                    if (null === u) break;
                    var h = y.Utils.decomposeMatrix(t.getCTM());
                    e.translation.set(h.translateX, h.translateY), e.rotation = h.rotation, e.scale = h.scaleX, n.x && (e.translation.x = n.x), n.y && (e.translation.y = n.y);
                    break;
                case "visible":
                    e.visible = r;
                    break;
                case "stroke-linecap":
                    e.cap = r;
                    break;
                case "stroke-linejoin":
                    e.join = r;
                    break;
                case "stroke-miterlimit":
                    e.miter = r;
                    break;
                case "stroke-width":
                    e.linewidth = parseFloat(r);
                    break;
                case "stroke-opacity":
                case "fill-opacity":
                case "opacity":
                    e.opacity = parseFloat(r);
                    break;
                case "fill":
                case "stroke":
                    e[o] = "none" === r ? "transparent" : r;
                    break;
                case "id":
                    e.id = r;
                    break;
                case "class":
                    e.classList = r.split(" ")
                }
                return e
            },
            read: {
                svg: function () {
                    return y.Utils.read.g.apply(this, arguments)
                },
                g: function (t) {
                    var e = new y.Group;
                    y.Utils.applySvgAttributes(t, e);
                    for (var i = 0, n = t.childNodes.length; n > i; i++) {
                        var s = t.childNodes[i],
                            o = s.nodeName;
                        if (!o) return;
                        var r = o.replace(/svg\:/gi, "")
                            .toLowerCase();
                        if (r in y.Utils.read) {
                            var a = y.Utils.read[r].call(this, s);
                            e.add(a)
                        }
                    }
                    return e
                },
                polygon: function (t, e) {
                    var i = t.getAttribute("points"),
                        n = [];
                    i.replace(/(-?[\d\.?]+),(-?[\d\.?]+)/g, function (t, e, i) {
                        n.push(new y.Anchor(parseFloat(e), parseFloat(i)))
                    });
                    var s = new y.Polygon(n, !e)
                        .noStroke();
                    return s.fill = "black", y.Utils.applySvgAttributes(t, s)
                },
                polyline: function (t) {
                    return y.Utils.read.polygon(t, !0)
                },
                path: function (t) {
                    var e = t.getAttribute("d"),
                        i = new y.Anchor,
                        n, s, o = !1,
                        r = !1,
                        a = e.match(/[a-df-z][^a-df-z]*/gi),
                        l = a.length - 1;
                    _.each(a.slice(0), function (t, e) {
                        var i = t[0],
                            n = i.toLowerCase(),
                            s = t.slice(1)
                            .trim()
                            .split(/[\s,]+|(?=\s?[+\-])/),
                            o, r, l = [],
                            u;
                        switch (0 >= e && (a = []), n) {
                        case "h":
                        case "v":
                            s.length > 1 && (u = 1);
                            break;
                        case "m":
                        case "l":
                        case "t":
                            s.length > 2 && (u = 2);
                            break;
                        case "s":
                        case "q":
                            s.length > 4 && (u = 4);
                            break;
                        case "c":
                            s.length > 6 && (u = 6);
                            break;
                        case "a":
                        }
                        if (u) {
                            for (var h = 0, c = s.length, p = 0; c > h; h += u) {
                                var d = i;
                                if (p > 0) switch (i) {
                                case "m":
                                    d = "l";
                                    break;
                                case "M":
                                    d = "L"
                                }
                                l.push([d].concat(s.slice(h, h + u))
                                    .join(" ")), p++
                            }
                            a = Array.prototype.concat.apply(a, l)
                        } else a.push(t)
                    });
                    var u = _.flatten(_.map(a, function (t, e) {
                        var a, u, h, c = t[0],
                            p = c.toLowerCase();
                        s = t.slice(1)
                            .trim(), s = s.replace(/(-?\d+(?:\.\d*)?)[eE]([+\-]?\d+)/g, function (t, e, i) {
                                return parseFloat(e) * d(10, i)
                            }), s = s.split(/[\s,]+|(?=\s?[+\-])/), r = c === p;
                        var f, m, g, v, x, b, w, T, M;
                        switch (p) {
                        case "z":
                            e >= l ? o = !0 : (u = i.x, h = i.y, a = new y.Anchor(u, h, void 0, void 0, void 0, void 0, y.Commands.close));
                            break;
                        case "m":
                        case "l":
                            u = parseFloat(s[0]), h = parseFloat(s[1]), a = new y.Anchor(u, h, void 0, void 0, void 0, void 0, "m" === p ? y.Commands.move : y.Commands.line), r && a.addSelf(i), i = a;
                            break;
                        case "h":
                        case "v":
                            var S = "h" === p ? "x" : "y",
                                C = "x" === S ? "y" : "x";
                            a = new y.Anchor(void 0, void 0, void 0, void 0, void 0, void 0, y.Commands.line), a[S] = parseFloat(s[0]), a[C] = i[C], r && (a[S] += i[S]), i = a;
                            break;
                        case "c":
                        case "s":
                            f = i.x, m = i.y, n || (n = new y.Vector), "c" === p ? (g = parseFloat(s[0]), v = parseFloat(s[1]), x = parseFloat(s[2]), b = parseFloat(s[3]), w = parseFloat(s[4]), T = parseFloat(s[5])) : (M = I(i, n, r), g = M.x, v = M.y, x = parseFloat(s[0]), b = parseFloat(s[1]), w = parseFloat(s[2]), T = parseFloat(s[3])), r && (g += f, v += m, x += f, b += m, w += f, T += m), _.isObject(i.controls) || y.Anchor.AppendCurveProperties(i), i.controls.right.set(g - i.x, v - i.y), a = new y.Anchor(w, T, x - w, b - T, void 0, void 0, y.Commands.curve), i = a, n = a.controls.left;
                            break;
                        case "t":
                        case "q":
                            f = i.x, m = i.y, n || (n = new y.Vector), n.isZero() ? (g = f, v = m) : (g = n.x, m = n.y), "q" === p ? (x = parseFloat(s[0]), b = parseFloat(s[1]), w = parseFloat(s[1]), T = parseFloat(s[2])) : (M = I(i, n, r), x = M.x, b = M.y, w = parseFloat(s[0]), T = parseFloat(s[1])), r && (g += f, v += m, x += f, b += m, w += f, T += m), _.isObject(i.controls) || y.Anchor.AppendCurveProperties(i), i.controls.right.set(g - i.x, v - i.y), a = new y.Anchor(w, T, x - w, b - T, void 0, void 0, y.Commands.curve), i = a, n = a.controls.left;
                            break;
                        case "a":
                            throw new y.Utils.Error("not yet able to interpret Elliptical Arcs.")
                        }
                        return a
                    }));
                    if (!(u.length <= 1)) {
                        u = _.compact(u);
                        var h = new y.Polygon(u, o, void 0, !0)
                            .noStroke();
                        return h.fill = "black", y.Utils.applySvgAttributes(t, h)
                    }
                },
                circle: function (t) {
                    var e = parseFloat(t.getAttribute("cx")),
                        i = parseFloat(t.getAttribute("cy")),
                        n = parseFloat(t.getAttribute("r")),
                        r = y.Resolution,
                        a = _.map(_.range(r), function (t) {
                            var e = t / r,
                                i = e * c,
                                a = n * o(i),
                                l = n * s(i);
                            return new y.Anchor(a, l)
                        }, this),
                        l = new y.Polygon(a, !0, !0)
                        .noStroke();
                    return l.translation.set(e, i), l.fill = "black", y.Utils.applySvgAttributes(t, l)
                },
                ellipse: function (t) {
                    var e = parseFloat(t.getAttribute("cx")),
                        i = parseFloat(t.getAttribute("cy")),
                        n = parseFloat(t.getAttribute("rx")),
                        r = parseFloat(t.getAttribute("ry")),
                        a = y.Resolution,
                        l = _.map(_.range(a), function (t) {
                            var e = t / a,
                                i = e * c,
                                l = n * o(i),
                                u = r * s(i);
                            return new y.Anchor(l, u)
                        }, this),
                        u = new y.Polygon(l, !0, !0)
                        .noStroke();
                    return u.translation.set(e, i), u.fill = "black", y.Utils.applySvgAttributes(t, u)
                },
                rect: function (t) {
                    var e = parseFloat(t.getAttribute("x")),
                        i = parseFloat(t.getAttribute("y")),
                        n = parseFloat(t.getAttribute("width")),
                        s = parseFloat(t.getAttribute("height")),
                        o = n / 2,
                        r = s / 2,
                        a = [new y.Anchor(o, r), new y.Anchor(-o, r), new y.Anchor(-o, -r), new y.Anchor(o, -r)],
                        l = new y.Polygon(a, !0)
                        .noStroke();
                    return l.translation.set(e + o, i + r), l.fill = "black", y.Utils.applySvgAttributes(t, l)
                },
                line: function (t) {
                    var e = parseFloat(t.getAttribute("x1")),
                        i = parseFloat(t.getAttribute("y1")),
                        n = parseFloat(t.getAttribute("x2")),
                        s = parseFloat(t.getAttribute("y2")),
                        o = n - e,
                        r = s - i,
                        a = o / 2,
                        l = r / 2,
                        u = [new y.Anchor(-a, -l), new y.Anchor(a, l)],
                        h = new y.Polygon(u)
                        .noFill();
                    return h.translation.set(e + a, i + l), y.Utils.applySvgAttributes(t, h)
                }
            },
            subdivide: function (t, e, i, n, s, o, r, a, l) {
                l = l || y.Utils.Curve.RecursionLimit;
                var u = l + 1;
                return t === r && e === a ? [new y.Anchor(r, a)] : _.map(_.range(0, u), function (l) {
                    var h = l / u,
                        c = k(h, t, i, s, r),
                        p = k(h, e, n, o, a);
                    return new y.Anchor(c, p)
                })
            },
            getPointOnCubicBezier: function (t, e, i, n, s) {
                var o = 1 - t;
                return o * o * o * e + 3 * o * o * t * i + 3 * o * t * t * n + t * t * t * s
            },
            getCurveLength: function (t, e, i, n, s, o, r, l, u) {
                if (t === i && e === n && s === r && o === l) {
                    var h = r - t,
                        c = l - e;
                    return a(h * h + c * c)
                }
                var p = 9 * (i - s) + 3 * (r - t),
                    d = 6 * (t + s) - 12 * i,
                    f = 3 * (i - t),
                    m = 9 * (n - o) + 3 * (l - e),
                    g = 6 * (e + o) - 12 * n,
                    v = 3 * (n - e),
                    _ = function (t) {
                        var e = (p * t + d) * t + f,
                            i = (m * t + g) * t + v;
                        return a(e * e + i * i)
                    };
                return L(_, 0, 1, u || y.Utils.Curve.RecursionLimit)
            },
            integrate: function (t, e, i, n) {
                for (var s = y.Utils.Curve.abscissas[n - 2], o = y.Utils.Curve.weights[n - 2], r = .5 * (i - e), a = r + e, l = 0, u = n + 1 >> 1, h = 1 & n ? o[l++] * t(a) : 0; u > l;) {
                    var c = r * s[l];
                    h += o[l++] * (t(a + c) + t(a - c))
                }
                return r * h
            },
            getCurveFromPoints: function (t, e) {
                for (var i = t.length, n = i - 1, s = 0; i > s; s++) {
                    var o = t[s];
                    _.isObject(o.controls) || y.Anchor.AppendCurveProperties(o);
                    var r = e ? A(s - 1, i) : m(s - 1, 0),
                        a = e ? A(s + 1, i) : f(s + 1, n),
                        l = t[r],
                        u = o,
                        h = t[a];
                    T(l, u, h), u._command = 0 === s ? y.Commands.move : y.Commands.curve, u.controls.left.x = _.isNumber(u.controls.left.x) ? u.controls.left.x : u.x, u.controls.left.y = _.isNumber(u.controls.left.y) ? u.controls.left.y : u.y, u.controls.right.x = _.isNumber(u.controls.right.x) ? u.controls.right.x : u.x, u.controls.right.y = _.isNumber(u.controls.right.y) ? u.controls.right.y : u.y
                }
            },
            getControlPoints: function (t, e, i) {
                var n = w(t, e),
                    r = w(i, e),
                    a = x(t, e),
                    l = x(i, e),
                    u = (n + r) / 2;
                return e.u = _.isObject(e.controls.left) ? e.controls.left : new y.Vector(0, 0), e.v = _.isObject(e.controls.right) ? e.controls.right : new y.Vector(0, 0), 1e-4 > a || 1e-4 > l ? (e._relative || (e.controls.left.copy(e), e.controls.right.copy(e)), e) : (a *= .33, l *= .33, n > r ? u += p : u -= p, e.controls.left.x = o(u) * a, e.controls.left.y = s(u) * a, u -= h, e.controls.right.x = o(u) * l, e.controls.right.y = s(u) * l, e._relative || (e.controls.left.x += e.x, e.controls.left.y += e.y, e.controls.right.x += e.x, e.controls.right.y += e.y), e)
            },
            getReflection: function (t, e, i) {
                return new y.Vector(2 * t.x - (e.x + t.x) - (i ? t.x : 0), 2 * t.y - (e.y + t.y) - (i ? t.y : 0))
            },
            angleBetween: function (t, e) {
                var i, n;
                return arguments.length >= 4 ? (i = arguments[0] - arguments[2], n = arguments[1] - arguments[3], r(n, i)) : (i = t.x - e.x, n = t.y - e.y, r(n, i))
            },
            distanceBetweenSquared: function (t, e) {
                var i = t.x - e.x,
                    n = t.y - e.y;
                return i * i + n * n
            },
            distanceBetween: function (t, e) {
                return a(b(t, e))
            },
            toFixed: function (t) {
                return Math.floor(1e3 * t) / 1e3
            },
            mod: function (t, e) {
                for (; 0 > t;) t += e;
                return t % e
            },
            Collection: function () {
                Array.call(this), arguments.length > 1 ? Array.prototype.push.apply(this, arguments) : arguments[0] && Array.isArray(arguments[0]) && Array.prototype.push.apply(this, arguments[0])
            },
            Error: function (t) {
                this.name = "two.js", this.message = t
            }
        }
    }), y.Utils.Error.prototype = new Error, y.Utils.Error.prototype.constructor = y.Utils.Error, y.Utils.Collection.prototype = new Array, y.Utils.Collection.constructor = y.Utils.Collection, _.extend(y.Utils.Collection.prototype, Backbone.Events, {
        pop: function () {
            var t = Array.prototype.pop.apply(this, arguments);
            return this.trigger(y.Events.remove, [t]), t
        },
        shift: function () {
            var t = Array.prototype.shift.apply(this, arguments);
            return this.trigger(y.Events.remove, [t]), t
        },
        push: function () {
            var t = Array.prototype.push.apply(this, arguments);
            return this.trigger(y.Events.insert, arguments), t
        },
        unshift: function () {
            var t = Array.prototype.unshift.apply(this, arguments);
            return this.trigger(y.Events.insert, arguments), t
        },
        splice: function () {
            var t = Array.prototype.splice.apply(this, arguments),
                e;
            return this.trigger(y.Events.remove, t), arguments.length > 2 && (e = this.slice(arguments[0], arguments.length - 2), this.trigger(y.Events.insert, e)), t
        }
    });
    var x = y.Utils.distanceBetween,
        b = y.Utils.distanceBetweenSquared,
        w = y.Utils.angleBetween,
        T = y.Utils.getControlPoints,
        M = y.Utils.getCurveFromPoints,
        S = y.Utils.solveSegmentIntersection,
        C = y.Utils.decoupleShapes,
        A = y.Utils.mod,
        E = y.Utils.getBackingStoreRatio,
        k = y.Utils.getPointOnCubicBezier,
        O = y.Utils.getCurveLength,
        L = y.Utils.integrate,
        I = y.Utils.getReflection;
    _.extend(y.prototype, Backbone.Events, {
            appendTo: function (t) {
                return t.appendChild(this.renderer.domElement), this
            },
            play: function () {
                return y.Utils.setPlaying.call(this, !0), this.trigger(y.Events.play)
            },
            pause: function () {
                return this.playing = !1, this.trigger(y.Events.pause)
            },
            update: function () {
                var t = !!this._lastFrame,
                    i = e();
                this.frameCount++, t && (this.timeDelta = parseFloat((i - this._lastFrame)
                    .toFixed(3))), this._lastFrame = i;
                var n = this.width,
                    s = this.height,
                    o = this.renderer;
                return (n !== o.width || s !== o.height) && o.setSize(n, s, this.ratio), this.trigger(y.Events.update, this.frameCount, this.timeDelta), this.render()
            },
            render: function () {
                return this.renderer.render(), this.trigger(y.Events.render, this.frameCount)
            },
            add: function (t) {
                var e = t;
                return _.isArray(t) || (e = _.toArray(arguments)), this.scene.add(e), this
            },
            remove: function (t) {
                var e = t;
                return _.isArray(t) || (e = _.toArray(arguments)), this.scene.remove(e), this
            },
            clear: function () {
                return this.scene.remove(_.toArray(this.scene.children)), this
            },
            makeLine: function (t, e, i, n) {
                var s = i - t,
                    o = n - e,
                    r = s / 2,
                    a = o / 2,
                    l = [new y.Anchor(-r, -a), new y.Anchor(r, a)],
                    u = new y.Polygon(l)
                    .noFill();
                return u.translation.set(t + r, e + a), this.scene.add(u), u
            },
            makeRectangle: function (t, e, i, n) {
                var s = i / 2,
                    o = n / 2,
                    r = [new y.Anchor(-s, -o), new y.Anchor(s, -o), new y.Anchor(s, o), new y.Anchor(-s, o)],
                    a = new y.Polygon(r, !0);
                return a.translation.set(t, e), this.scene.add(a), a
            },
            makeCircle: function (t, e, i) {
                return this.makeEllipse(t, e, i, i)
            },
            makeEllipse: function (t, e, i, n) {
                var r = y.Resolution,
                    a = _.map(_.range(r), function (t) {
                        var e = t / r,
                            a = e * c,
                            l = i * o(a),
                            u = n * s(a);
                        return new y.Anchor(l, u)
                    }, this),
                    l = new y.Polygon(a, !0, !0);
                return l.translation.set(t, e), this.scene.add(l), l
            },
            makeCurve: function (t) {
                var e = arguments.length,
                    i = t;
                if (!_.isArray(t)) {
                    i = [];
                    for (var n = 0; e > n; n += 2) {
                        var s = arguments[n];
                        if (!_.isNumber(s)) break;
                        var o = arguments[n + 1];
                        i.push(new y.Anchor(s, o))
                    }
                }
                var r = arguments[e - 1],
                    a = new y.Polygon(i, !(_.isBoolean(r) ? r : void 0), !0),
                    l = a.getBoundingClientRect(),
                    u = l.left + l.width / 2,
                    h = l.top + l.height / 2;
                return _.each(a.vertices, function (t) {
                    t.x -= u, t.y -= h
                }), a.translation.set(u, h), this.scene.add(a), a
            },
            makePolygon: function (t) {
                var e = arguments.length,
                    i = t;
                if (!_.isArray(t)) {
                    i = [];
                    for (var n = 0; e > n; n += 2) {
                        var s = arguments[n];
                        if (!_.isNumber(s)) break;
                        var o = arguments[n + 1];
                        i.push(new y.Anchor(s, o))
                    }
                }
                var r = arguments[e - 1],
                    a = new y.Polygon(i, !(_.isBoolean(r) ? r : void 0)),
                    l = a.getBoundingClientRect();
                return a.center()
                    .translation.set(l.left + l.width / 2, l.top + l.height / 2), this.scene.add(a), a
            },
            makeGroup: function (t) {
                var e = t;
                _.isArray(t) || (e = _.toArray(arguments));
                var i = new y.Group;
                return this.scene.add(i), i.add(e), i
            },
            interpret: function (t, e) {
                var i = t.tagName.toLowerCase();
                if (!(i in y.Utils.read)) return null;
                var n = y.Utils.read[i].call(this, t);
                return this.add(e && n instanceof y.Group ? _.values(n.children) : n), n
            }
        }),
        function () {
            requestAnimationFrame(arguments.callee), y.Instances.forEach(function (t) {
                t.playing && t.update()
            })
        }(), "function" == typeof define && define.amd ? define(function () {
            return y
        }) : "undefined" != typeof module && module.exports && (module.exports = y)
}(),
function (t) {
    var e = t.Vector = function (t, e) {
        this.x = t || 0, this.y = e || 0
    };
    _.extend(e, {
        zero: new t.Vector
    }), _.extend(e.prototype, Backbone.Events, {
        set: function (t, e) {
            return this.x = t, this.y = e, this
        },
        copy: function (t) {
            return this.x = t.x, this.y = t.y, this
        },
        clear: function () {
            return this.x = 0, this.y = 0, this
        },
        clone: function () {
            return new e(this.x, this.y)
        },
        add: function (t, e) {
            return this.x = t.x + e.x, this.y = t.y + e.y, this
        },
        addSelf: function (t) {
            return this.x += t.x, this.y += t.y, this
        },
        sub: function (t, e) {
            return this.x = t.x - e.x, this.y = t.y - e.y, this
        },
        subSelf: function (t) {
            return this.x -= t.x, this.y -= t.y, this
        },
        multiplySelf: function (t) {
            return this.x *= t.x, this.y *= t.y, this
        },
        multiplyScalar: function (t) {
            return this.x *= t, this.y *= t, this
        },
        divideScalar: function (t) {
            return t ? (this.x /= t, this.y /= t) : this.set(0, 0), this
        },
        negate: function () {
            return this.multiplyScalar(-1)
        },
        dot: function (t) {
            return this.x * t.x + this.y * t.y
        },
        lengthSquared: function () {
            return this.x * this.x + this.y * this.y
        },
        length: function () {
            return Math.sqrt(this.lengthSquared())
        },
        normalize: function () {
            return this.divideScalar(this.length())
        },
        distanceTo: function (t) {
            return Math.sqrt(this.distanceToSquared(t))
        },
        distanceToSquared: function (t) {
            var e = this.x - t.x,
                i = this.y - t.y;
            return e * e + i * i
        },
        setLength: function (t) {
            return this.normalize()
                .multiplyScalar(t)
        },
        equals: function (t) {
            return this.distanceTo(t) < 1e-4
        },
        lerp: function (t, e) {
            var i = (t.x - this.x) * e + this.x,
                n = (t.y - this.y) * e + this.y;
            return this.set(i, n)
        },
        isZero: function () {
            return this.length() < 1e-4
        },
        toString: function () {
            return this.x + "," + this.y
        },
        toObject: function () {
            return {
                x: this.x,
                y: this.y
            }
        }
    });
    var i = {
            set: function (e, i) {
                return this._x = e, this._y = i, this.trigger(t.Events.change)
            },
            copy: function (e) {
                return this._x = e.x, this._y = e.y, this.trigger(t.Events.change)
            },
            clear: function () {
                return this._x = 0, this._y = 0, this.trigger(t.Events.change)
            },
            clone: function () {
                return new e(this._x, this._y)
            },
            add: function (e, i) {
                return this._x = e.x + i.x, this._y = e.y + i.y, this.trigger(t.Events.change)
            },
            addSelf: function (e) {
                return this._x += e.x, this._y += e.y, this.trigger(t.Events.change)
            },
            sub: function (e, i) {
                return this._x = e.x - i.x, this._y = e.y - i.y, this.trigger(t.Events.change)
            },
            subSelf: function (e) {
                return this._x -= e.x, this._y -= e.y, this.trigger(t.Events.change)
            },
            multiplySelf: function (e) {
                return this._x *= e.x, this._y *= e.y, this.trigger(t.Events.change)
            },
            multiplyScalar: function (e) {
                return this._x *= e, this._y *= e, this.trigger(t.Events.change)
            },
            divideScalar: function (e) {
                return e ? (this._x /= e, this._y /= e, this.trigger(t.Events.change)) : this.clear()
            },
            negate: function () {
                return this.multiplyScalar(-1)
            },
            dot: function (t) {
                return this._x * t.x + this._y * t.y
            },
            lengthSquared: function () {
                return this._x * this._x + this._y * this._y
            },
            length: function () {
                return Math.sqrt(this.lengthSquared())
            },
            normalize: function () {
                return this.divideScalar(this.length())
            },
            distanceTo: function (t) {
                return Math.sqrt(this.distanceToSquared(t))
            },
            distanceToSquared: function (t) {
                var e = this._x - t.x,
                    i = this._y - t.y;
                return e * e + i * i
            },
            setLength: function (t) {
                return this.normalize()
                    .multiplyScalar(t)
            },
            equals: function (t) {
                return this.distanceTo(t) < 1e-4
            },
            lerp: function (t, e) {
                var i = (t.x - this._x) * e + this._x,
                    n = (t.y - this._y) * e + this._y;
                return this.set(i, n)
            },
            isZero: function () {
                return this.length() < 1e-4
            },
            toString: function () {
                return this._x + "," + this._y
            },
            toObject: function () {
                return {
                    x: this._x,
                    y: this._y
                }
            }
        },
        n = {
            get: function () {
                return this._x
            },
            set: function (e) {
                this._x = e, this.trigger(t.Events.change, "x")
            }
        },
        s = {
            get: function () {
                return this._y
            },
            set: function (e) {
                this._y = e, this.trigger(t.Events.change, "y")
            }
        };
    t.Vector.prototype.bind = t.Vector.prototype.on = function () {
        return this._bound || (this._x = this.x, this._y = this.y, Object.defineProperty(this, "x", n), Object.defineProperty(this, "y", s), _.extend(this, i), this._bound = !0), Backbone.Events.bind.apply(this, arguments), this
    }
}(Two),
function (t) {
    var e = t.Commands,
        i = t.Anchor = function (n, s, o, r, a, l, u) {
            return t.Vector.call(this, n, s), this._broadcast = _.bind(function () {
                this.trigger(t.Events.change)
            }, this), this._command = u || e.move, this._relative = !0, u ? (i.AppendCurveProperties(this), _.isNumber(o) && (this.controls.left.x = o), _.isNumber(r) && (this.controls.left.y = r), _.isNumber(a) && (this.controls.right.x = a), void(_.isNumber(l) && (this.controls.right.y = l))) : this
        };
    _.extend(i, {
        AppendCurveProperties: function (e) {
            e.controls = {
                left: new t.Vector(0, 0),
                right: new t.Vector(0, 0)
            }
        }
    });
    var n = {
        listen: function () {
            return _.isObject(this.controls) || i.AppendCurveProperties(this), this.controls.left.bind(t.Events.change, this._broadcast), this.controls.right.bind(t.Events.change, this._broadcast), this
        },
        ignore: function () {
            return this.controls.left.unbind(t.Events.change, this._broadcast), this.controls.right.unbind(t.Events.change, this._broadcast), this
        },
        clone: function () {
            var e = this.controls,
                i = new t.Anchor(this.x, this.y, e && e.left.x, e && e.left.y, e && e.right.x, e && e.right.y, this.command);
            return i.relative = this._relative, i
        },
        toObject: function () {
            var t = {
                x: this.x,
                y: this.y
            };
            return this._command && (t.command = this._command), this._relative && (t.relative = this._relative), this.controls && (t.controls = {
                left: this.controls.left.toObject(),
                right: this.controls.right.toObject()
            }), t
        }
    };
    Object.defineProperty(i.prototype, "command", {
        get: function () {
            return this._command
        },
        set: function (n) {
            return this._command = n, this._command !== e.curve || _.isObject(this.controls) || i.AppendCurveProperties(this), this.trigger(t.Events.change)
        }
    }), Object.defineProperty(i.prototype, "relative", {
        get: function () {
            return this._relative
        },
        set: function (e) {
            return this._relative == e ? this : (this._relative = !!e, this.trigger(t.Events.change))
        }
    }), _.extend(i.prototype, t.Vector.prototype, n), t.Anchor.prototype.bind = t.Anchor.prototype.on = function () {
        t.Vector.prototype.bind.apply(this, arguments), _.extend(this, n)
    }, t.Anchor.prototype.unbind = t.Anchor.prototype.off = function () {
        t.Vector.prototype.unbind.apply(this, arguments), _.extend(this, n)
    }
}(Two),
function (t) {
    var e = Math.cos,
        i = Math.sin,
        n = Math.tan,
        s = t.Matrix = function (e, i, n, s, o, r) {
            this.elements = new t.Array(9);
            var a = e;
            _.isArray(a) || (a = _.toArray(arguments)), this.identity()
                .set(a)
        };
    _.extend(s, {
        Identity: [1, 0, 0, 0, 1, 0, 0, 0, 1],
        Multiply: function (e, i, n) {
            if (i.length <= 3) {
                var s, o, r, a = e,
                    l = i[0] || 0,
                    u = i[1] || 0,
                    h = i[2] || 0;
                return s = a[0] * l + a[1] * u + a[2] * h, o = a[3] * l + a[4] * u + a[5] * h, r = a[6] * l + a[7] * u + a[8] * h, {
                    x: s,
                    y: o,
                    z: r
                }
            }
            var c = e[0],
                p = e[1],
                d = e[2],
                f = e[3],
                m = e[4],
                g = e[5],
                v = e[6],
                y = e[7],
                _ = e[8],
                x = i[0],
                b = i[1],
                w = i[2],
                T = i[3],
                M = i[4],
                S = i[5],
                C = i[6],
                A = i[7],
                E = i[8];
            return n = n || new t.Array(9), n[0] = c * x + p * T + d * C, n[1] = c * b + p * M + d * A, n[2] = c * w + p * S + d * E, n[3] = f * x + m * T + g * C, n[4] = f * b + m * M + g * A, n[5] = f * w + m * S + g * E, n[6] = v * x + y * T + _ * C, n[7] = v * b + y * M + _ * A, n[8] = v * w + y * S + _ * E, n
        }
    }), _.extend(s.prototype, Backbone.Events, {
        set: function (e) {
            var i = e;
            return _.isArray(i) || (i = _.toArray(arguments)), _.extend(this.elements, i), this.trigger(t.Events.change)
        },
        identity: function () {
            return this.set(s.Identity), this
        },
        multiply: function (e, i, n, s, o, r, a, l, u) {
            var h = arguments,
                c = h.length;
            if (1 >= c) return _.each(this.elements, function (t, i) {
                this.elements[i] = t * e
            }, this), this.trigger(t.Events.change);
            if (3 >= c) {
                var p, d, f;
                return e = e || 0, i = i || 0, n = n || 0, o = this.elements, p = o[0] * e + o[1] * i + o[2] * n, d = o[3] * e + o[4] * i + o[5] * n, f = o[6] * e + o[7] * i + o[8] * n, {
                    x: p,
                    y: d,
                    z: f
                }
            }
            var m = this.elements,
                g = h,
                v = m[0],
                y = m[1],
                x = m[2],
                b = m[3],
                w = m[4],
                T = m[5],
                M = m[6],
                S = m[7],
                C = m[8],
                A = g[0],
                E = g[1],
                k = g[2],
                O = g[3],
                L = g[4],
                I = g[5],
                P = g[6],
                H = g[7],
                N = g[8];
            return this.elements[0] = v * A + y * O + x * P, this.elements[1] = v * E + y * L + x * H, this.elements[2] = v * k + y * I + x * N, this.elements[3] = b * A + w * O + T * P, this.elements[4] = b * E + w * L + T * H, this.elements[5] = b * k + w * I + T * N, this.elements[6] = M * A + S * O + C * P, this.elements[7] = M * E + S * L + C * H, this.elements[8] = M * k + S * I + C * N, this.trigger(t.Events.change)
        },
        inverse: function (e) {
            var i = this.elements;
            e = e || new t.Matrix;
            var n = i[0],
                s = i[1],
                o = i[2],
                r = i[3],
                a = i[4],
                l = i[5],
                u = i[6],
                h = i[7],
                c = i[8],
                p = c * a - l * h,
                d = -c * r + l * u,
                f = h * r - a * u,
                m = n * p + s * d + o * f;
            return m ? (m = 1 / m, e.elements[0] = p * m, e.elements[1] = (-c * s + o * h) * m, e.elements[2] = (l * s - o * a) * m, e.elements[3] = d * m, e.elements[4] = (c * n - o * u) * m, e.elements[5] = (-l * n + o * r) * m, e.elements[6] = f * m, e.elements[7] = (-h * n + s * u) * m, e.elements[8] = (a * n - s * r) * m, e) : null
        },
        scale: function (t, e) {
            var i = arguments.length;
            return 1 >= i && (e = t), this.multiply(t, 0, 0, 0, e, 0, 0, 0, 1)
        },
        rotate: function (t) {
            var n = e(t),
                s = i(t);
            return this.multiply(n, -s, 0, s, n, 0, 0, 0, 1)
        },
        translate: function (t, e) {
            return this.multiply(1, 0, t, 0, 1, e, 0, 0, 1)
        },
        skewX: function (t) {
            var e = n(t);
            return this.multiply(1, e, 0, 0, 1, 0, 0, 0, 1)
        },
        skewY: function (t) {
            var e = n(t);
            return this.multiply(1, 0, 0, e, 1, 0, 0, 0, 1)
        },
        toString: function (t) {
            var e = [];
            return this.toArray(t, e), e.join(" ")
        },
        toArray: function (t, e) {
            var i = this.elements,
                n = !!e,
                s = parseFloat(i[0].toFixed(3)),
                o = parseFloat(i[1].toFixed(3)),
                r = parseFloat(i[2].toFixed(3)),
                a = parseFloat(i[3].toFixed(3)),
                l = parseFloat(i[4].toFixed(3)),
                u = parseFloat(i[5].toFixed(3));
            if (t) {
                var h = parseFloat(i[6].toFixed(3)),
                    c = parseFloat(i[7].toFixed(3)),
                    p = parseFloat(i[8].toFixed(3));
                return n ? (e[0] = s, e[1] = a, e[2] = h, e[3] = o, e[4] = l, e[5] = c, e[6] = r, e[7] = u, void(e[8] = p)) : [s, a, h, o, l, c, r, u, p]
            }
            return n ? (e[0] = s, e[1] = a, e[2] = o, e[3] = l, e[4] = r, void(e[5] = u)) : [s, a, o, l, r, u]
        },
        clone: function () {
            var e, i, n, s, o, r, a, l, u;
            return e = this.elements[0], i = this.elements[1], n = this.elements[2], s = this.elements[3], o = this.elements[4], r = this.elements[5], a = this.elements[6], l = this.elements[7], u = this.elements[8], new t.Matrix(e, i, n, s, o, r, a, l, u)
        }
    })
}(Two),
function (t) {
    var e = t.Utils.mod,
        i = t.Utils.toFixed,
        n = {
            version: 1.1,
            ns: "http://www.w3.org/2000/svg",
            xlink: "http://www.w3.org/1999/xlink",
            createElement: function (t, e) {
                var i = t,
                    s = document.createElementNS(this.ns, i);
                return "svg" === i && (e = _.defaults(e || {}, {
                    version: this.version
                })), _.isObject(e) && n.setAttributes(s, e), s
            },
            setAttributes: function (t, e) {
                for (var i in e) t.setAttribute(i, e[i]);
                return this
            },
            removeAttributes: function (t, e) {
                for (var i in e) t.removeAttribute(i);
                return this
            },
            toString: function (n, s) {
                for (var o = n.length, r = o - 1, a, l = "", u = 0; o > u; u++) {
                    var h = n[u],
                        c, p = s ? e(u - 1, o) : Math.max(u - 1, 0),
                        d = s ? e(u + 1, o) : Math.min(u + 1, r),
                        f = n[p],
                        m = n[d],
                        g, v, y, _, x, b, w, T, M = i(h._x),
                        S = i(h._y);
                    switch (h._command) {
                    case t.Commands.close:
                        c = t.Commands.close;
                        break;
                    case t.Commands.curve:
                        x = f.controls && f.controls.right || f, b = h.controls && h.controls.left || h, f._relative ? (g = i(x.x + f.x), v = i(x.y + f.y)) : (g = i(x.x), v = i(x.y)), h._relative ? (y = i(b.x + h.x), _ = i(b.y + h.y)) : (y = i(b.x), _ = i(b.y)), c = (0 === u ? t.Commands.move : t.Commands.curve) + " " + g + " " + v + " " + y + " " + _ + " " + M + " " + S;
                        break;
                    case t.Commands.move:
                        a = h, c = t.Commands.move + " " + M + " " + S;
                        break;
                    default:
                        c = h._command + " " + M + " " + S
                    }
                    u >= r && s && (h._command === t.Commands.curve && (m = a, w = h.controls && h.controls.right || h, T = m.controls && m.controls.left || m, h._relative ? (g = i(w.x + h.x), v = i(w.y + h.y)) : (g = i(w.x), v = i(w.y)), m._relative ? (y = i(T.x + m.x), _ = i(T.y + m.y)) : (y = i(T.x), _ = i(T.y)), M = i(m.x), S = i(m.y), c += " C " + g + " " + v + " " + y + " " + _ + " " + M + " " + S), c += " Z"), l += c + " "
                }
                return l
            },
            getClip: function (t) {
                if (clip = t._renderer.clip, !clip) {
                    for (root = t; root.parent;) root = root.parent;
                    clip = t._renderer.clip = n.createElement("clipPath"), root.defs.appendChild(clip)
                }
                return clip
            },
            group: {
                appendChild: function (t) {
                    var e = this.domElement.querySelector("#" + t);
                    if (e) {
                        var i = e.nodeName;
                        if (i) {
                            var n = i.replace(/svg\:/gi, "")
                                .toLowerCase();
                            /clippath/.test(n) || this.elem.appendChild(e)
                        }
                    }
                },
                removeChild: function (t) {
                    var e = this.domElement.querySelector("#" + t);
                    if (e) {
                        var i = e.nodeName;
                        if (i) {
                            var n = i.replace(/svg\:/gi, "")
                                .toLowerCase();
                            /clippath/.test(n) || this.elem.removeChild(e)
                        }
                    }
                },
                renderChild: function (t) {
                    n[t._renderer.type].render.call(t, this)
                },
                render: function (t) {
                    if (this._update(), 0 === this._opacity && !this._flagOpacity) return this;
                    this._renderer.elem || (this._renderer.elem = n.createElement("g", {
                        id: this.id
                    }), t.appendChild(this._renderer.elem));
                    var e = this._matrix.manual || this._flagMatrix,
                        i = {
                            domElement: t,
                            elem: this._renderer.elem
                        };
                    e && this._renderer.elem.setAttribute("transform", "matrix(" + this._matrix.toString() + ")");
                    for (var s in this.children) {
                        var o = this.children[s];
                        n[o._renderer.type].render.call(o, t)
                    }
                    return this._flagOpacity && this._renderer.elem.setAttribute("opacity", this._opacity), this._flagAdditions && _.each(this.additions, n.group.appendChild, i), this._flagSubtractions && _.each(this.subtractions, n.group.removeChild, i), this._flagMask && (this._mask ? this._renderer.elem.setAttribute("clip-path", "url(#" + this._mask.id + ")") : this._renderer.elem.removeAttribute("clip-path")), this.flagReset()
                }
            },
            polygon: {
                render: function (t) {
                    if (this._update(), 0 === this._opacity && !this._flagOpacity) return this;
                    var e = {},
                        i = this._matrix.manual || this._flagMatrix;
                    if (i && (e.transform = "matrix(" + this._matrix.toString() + ")"), this._flagVertices) {
                        var s = n.toString(this._vertices, this._closed);
                        e.d = s
                    }
                    return this._flagFill && (e.fill = this._fill), this._flagStroke && (e.stroke = this._stroke), this._flagLinewidth && (e["stroke-width"] = this._linewidth), this._flagOpacity && (e["stroke-opacity"] = this._opacity, e["fill-opacity"] = this._opacity), this._flagVisible && (e.visibility = this._visible ? "visible" : "hidden"), this._flagCap && (e["stroke-linecap"] = this._cap), this._flagJoin && (e["stroke-linejoin"] = this._join), this._flagMiter && (e["stroke-miterlimit"] = this.miter), this._renderer.elem ? n.setAttributes(this._renderer.elem, e) : (e.id = this.id, this._renderer.elem = n.createElement("path", e), t.appendChild(this._renderer.elem)), this._flagClip && (clip = n.getClip(this), elem = this._renderer.elem, this._clip ? (elem.removeAttribute("id"), clip.setAttribute("id", this.id), clip.appendChild(elem)) : (clip.removeAttribute("id"), elem.setAttribute("id", this.id), this.parent._renderer.elem.appendChild(elem))), this.flagReset()
                }
            }
        },
        s = t[t.Types.svg] = function (e) {
            this.domElement = e.domElement || n.createElement("svg"), this.scene = new t.Group, this.scene.parent = this, this.defs = n.createElement("defs"), this.domElement.appendChild(this.defs)
        };
    _.extend(s, {
        Utils: n
    }), _.extend(s.prototype, Backbone.Events, {
        setSize: function (t, e) {
            return this.width = t, this.height = e, n.setAttributes(this.domElement, {
                width: t,
                height: e
            }), this
        },
        render: function () {
            return n.group.render.call(this.scene, this.domElement), this
        }
    })
}(Two),
function (t) {
    function e(t) {
        t.setTransform(1, 0, 0, 1, 0, 0)
    }
    var i = t.Utils.mod,
        n = t.Utils.toFixed,
        s = t.Utils.getRatio,
        o = {
            group: {
                renderChild: function (t) {
                    o[t._renderer.type].render.call(t, this.ctx, !0, this.clip)
                },
                render: function (t) {
                    this._update();
                    var e = this._matrix.elements,
                        i = this.parent;
                    this._renderer.opacity = this._opacity * (i && i._renderer ? i._renderer.opacity : 1);
                    var n = this._mask;
                    return this._renderer.context || (this._renderer.context = {}), this._renderer.context.ctx = t, t.save(), t.transform(e[0], e[3], e[1], e[4], e[2], e[5]), n && o[n._renderer.type].render.call(n, t, !0), _.each(this.children, o.group.renderChild, this._renderer.context), t.restore(), this.flagReset()
                }
            },
            polygon: {
                render: function (e, s, o) {
                    var r, a, l, u, h, c, p, d, f, m, g, v, y, x, b, w, T, M, S, C, A, E, k, O, L, I, P, H, N, F;
                    return this._update(), r = this._matrix.elements, a = this._stroke, l = this._linewidth, u = this._fill, h = this._opacity * this.parent._renderer.opacity, c = this._visible, p = this._cap, d = this._join, f = this._miter, m = this._closed, g = this._vertices, v = g.length, y = v - 1, F = this._clip, s || c && !F ? (e.save(), r && e.transform(r[0], r[3], r[1], r[4], r[2], r[5]), u && (e.fillStyle = u), a && (e.strokeStyle = a), l && (e.lineWidth = l), f && (e.miterLimit = f), d && (e.lineJoin = d), p && (e.lineCap = p), _.isNumber(h) && (e.globalAlpha = h), e.beginPath(), g.forEach(function (s, o) {
                        switch (P = n(s.x), H = n(s.y), s._command) {
                        case t.Commands.close:
                            e.closePath();
                            break;
                        case t.Commands.curve:
                            b = m ? i(o - 1, v) : Math.max(o - 1, 0), x = m ? i(o + 1, v) : Math.min(o + 1, y), w = g[b], T = g[x], k = w.controls && w.controls.right || w, O = s.controls && s.controls.left || s, w._relative ? (A = k.x + n(w.x), E = k.y + n(w.y)) : (A = n(k.x), E = n(k.y)), s._relative ? (S = O.x + n(s.x), C = O.y + n(s.y)) : (S = n(O.x), C = n(O.y)), e.bezierCurveTo(A, E, S, C, P, H), o >= y && m && (T = M, L = s.controls && s.controls.right || s, I = T.controls && T.controls.left || T, s._relative ? (A = L.x + n(s.x), E = L.y + n(s.y)) : (A = n(L.x), E = n(L.y)), T._relative ? (S = I.x + n(T.x), C = I.y + n(T.y)) : (S = n(I.x), C = n(I.y)), P = n(T.x), H = n(T.y), e.bezierCurveTo(A, E, S, C, P, H));
                            break;
                        case t.Commands.line:
                            e.lineTo(P, H);
                            break;
                        case t.Commands.move:
                            M = s, e.moveTo(P, H)
                        }
                    }), m && e.closePath(), F || o || (e.fill(), e.stroke()), e.restore(), F && !o && e.clip(), this.flagReset()) : this
                }
            }
        },
        r = t[t.Types.canvas] = function (e) {
            this.domElement = e.domElement || document.createElement("canvas"), this.ctx = this.domElement.getContext("2d"), this.overdraw = e.overdraw || !1, this.scene = new t.Group, this.scene.parent = this
        };
    _.extend(r, {
        Utils: o
    }), _.extend(r.prototype, Backbone.Events, {
        setSize: function (t, e, i) {
            return this.width = t, this.height = e, this.ratio = _.isUndefined(i) ? s(this.ctx) : i, this.domElement.width = t * this.ratio, this.domElement.height = e * this.ratio, _.extend(this.domElement.style, {
                width: t + "px",
                height: e + "px"
            }), this
        },
        render: function () {
            var t = 1 === this.ratio;
            return t || (this.ctx.save(), this.ctx.scale(this.ratio, this.ratio)), this.overdraw || this.ctx.clearRect(0, 0, this.width, this.height), o.group.render.call(this.scene, this.ctx), t || this.ctx.restore(), this
        }
    })
}(Two),
function (t) {
    var e = t.Matrix.Multiply,
        i = t.Utils.mod,
        n = [1, 0, 0, 0, 1, 0, 0, 0, 1],
        s = new t.Array(9),
        o = t.Utils.getRatio,
        r = t.Utils.toFixed,
        a = {
            canvas: document.createElement("canvas"),
            uv: new t.Array([0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1]),
            group: {
                renderChild: function (t) {
                    a[t._renderer.type].render.call(t, this.gl, this.program)
                },
                render: function (i, n) {
                    this._update();
                    var o = this.parent,
                        r = o._matrix && o._matrix.manual || o._flagMatrix,
                        l = this._matrix.manual || this._flagMatrix;
                    return (r || l) && (this._renderer.matrix || (this._renderer.matrix = new t.Array(9)), this._matrix.toArray(!0, s), e(s, o._renderer.matrix, this._renderer.matrix), this._renderer.scale = this._scale * o._renderer.scale, r && (this._flagMatrix = !0)), this._mask && (i.enable(i.STENCIL_TEST), i.stencilFunc(i.ALWAYS, 1, 1), i.colorMask(!1, !1, !1, !0), i.stencilOp(i.KEEP, i.KEEP, i.INCR), a[this._mask._renderer.type].render.call(this._mask, i, n, this), i.colorMask(!0, !0, !0, !0), i.stencilFunc(i.NOTEQUAL, 0, 1), i.stencilOp(i.KEEP, i.KEEP, i.KEEP)), this._flagOpacity = o._flagOpacity || this._flagOpacity, this._renderer.opacity = this._opacity * (o && o._renderer ? o._renderer.opacity : 1), _.each(this.children, a.group.renderChild, {
                        gl: i,
                        program: n
                    }), this._mask && (i.colorMask(!1, !1, !1, !1), i.stencilOp(i.KEEP, i.KEEP, i.DECR), a[this._mask._renderer.type].render.call(this._mask, i, n, this), i.colorMask(!0, !0, !0, !0), i.stencilFunc(i.NOTEQUAL, 0, 1), i.stencilOp(i.KEEP, i.KEEP, i.KEEP), i.disable(i.STENCIL_TEST)), this.flagReset()
                }
            },
            polygon: {
                render: function (i, n, o) {
                    if (!this._visible || !this._opacity) return this;
                    var r = this.parent,
                        l = r._matrix.manual || r._flagMatrix,
                        u = this._matrix.manual || this._flagMatrix,
                        h = this._flagVertices || this._flagFill || this._flagStroke || this._flagLinewidth || this._flagOpacity || r._flagOpacity || this._flagVisible || this._flagCap || this._flagJoin || this._flagMiter || this._flagScale;
                    return this._update(), (l || u) && (this._renderer.matrix || (this._renderer.matrix = new t.Array(9)), this._matrix.toArray(!0, s), e(s, r._renderer.matrix, this._renderer.matrix), this._renderer.scale = this._scale * r._renderer.scale), h && (this._renderer.rect || (this._renderer.rect = {}), this._renderer.triangles || (this._renderer.triangles = new t.Array(12)), this._renderer.opacity = this._opacity * r._renderer.opacity, a.getBoundingClientRect(this._vertices, this._linewidth, this._renderer.rect), a.getTriangles(this._renderer.rect, this._renderer.triangles), a.updateBuffer(i, this, n), a.updateTexture(i, this)), !this._clip || o ? (i.bindBuffer(i.ARRAY_BUFFER, this._renderer.textureCoordsBuffer), i.vertexAttribPointer(n.textureCoords, 2, i.FLOAT, !1, 0, 0), i.bindTexture(i.TEXTURE_2D, this._renderer.texture), i.uniformMatrix3fv(n.matrix, !1, this._renderer.matrix), i.bindBuffer(i.ARRAY_BUFFER, this._renderer.buffer), i.vertexAttribPointer(n.position, 2, i.FLOAT, !1, 0, 0), i.drawArrays(i.TRIANGLES, 0, 6), this.flagReset()) : void 0
                }
            },
            getBoundingClientRect: function (t, e, i) {
                var n = 1 / 0,
                    s = -1 / 0,
                    o = 1 / 0,
                    r = -1 / 0,
                    a, l;
                t.forEach(function (t) {
                    var e = t.x,
                        i = t.y,
                        a = t.controls,
                        l, u, h, c, p, d;
                    o = Math.min(i, o), n = Math.min(e, n), s = Math.max(e, s), r = Math.max(i, r), t.controls && (p = a.left, d = a.right, p && d && (l = t._relative ? p.x + e : p.x, u = t._relative ? p.y + i : p.y, h = t._relative ? d.x + e : d.x, c = t._relative ? d.y + i : d.y, l && u && h && c && (o = Math.min(u, c, o), n = Math.min(l, h, n), s = Math.max(l, h, s), r = Math.max(u, c, r))))
                }), _.isNumber(e) && (o -= e, n -= e, s += e, r += e), a = s - n, l = r - o, i.top = o, i.left = n, i.right = s, i.bottom = r, i.width = a, i.height = l, i.centroid || (i.centroid = {}), i.centroid.x = -n, i.centroid.y = -o
            },
            getTriangles: function (t, e) {
                var i = t.top,
                    n = t.left,
                    s = t.right,
                    o = t.bottom;
                e[0] = n, e[1] = i, e[2] = s, e[3] = i, e[4] = n, e[5] = o, e[6] = n, e[7] = o, e[8] = s, e[9] = i, e[10] = s, e[11] = o
            },
            updateCanvas: function (e) {
                var n = e._vertices,
                    s = this.canvas,
                    o = this.ctx,
                    a = e._renderer.scale,
                    l = e._stroke,
                    u = e._linewidth * a,
                    h = e._fill,
                    c = e._renderer.opacity || e._opacity,
                    p = e._cap,
                    d = e._join,
                    f = e._miter,
                    m = e._closed,
                    g = n.length,
                    v = g - 1;
                s.width = Math.max(Math.ceil(e._renderer.rect.width * a), 1), s.height = Math.max(Math.ceil(e._renderer.rect.height * a), 1);
                var y = e._renderer.rect.centroid,
                    x = y.x * a,
                    b = y.y * a;
                o.clearRect(0, 0, s.width, s.height), h && (o.fillStyle = h), l && (o.strokeStyle = l), u && (o.lineWidth = u), f && (o.miterLimit = f), d && (o.lineJoin = d), p && (o.lineCap = p), _.isNumber(c) && (o.globalAlpha = c);
                var w;
                o.beginPath(), n.forEach(function (e, s) {
                    var l, u, h, c, p, d, f, y, _, T, M, S, C, A;
                    switch (C = r(e.x * a + x), A = r(e.y * a + b), e._command) {
                    case t.Commands.close:
                        o.closePath();
                        break;
                    case t.Commands.curve:
                        u = m ? i(s - 1, g) : Math.max(s - 1, 0), l = m ? i(s + 1, g) : Math.min(s + 1, v), h = n[u], c = n[l], _ = h.controls && h.controls.right || h, T = e.controls && e.controls.left || e, h._relative ? (f = r((_.x + h.x) * a + x), y = r((_.y + h.y) * a + b)) : (f = r(_.x * a + x), y = r(_.y * a + b)), e._relative ? (p = r((T.x + e.x) * a + x), d = r((T.y + e.y) * a + b)) : (p = r(T.x * a + x), d = r(T.y * a + b)), o.bezierCurveTo(f, y, p, d, C, A), s >= v && m && (c = w, M = e.controls && e.controls.right || e, S = c.controls && c.controls.left || c, e._relative ? (f = r((M.x + e.x) * a + x), y = r((M.y + e.y) * a + b)) : (f = r(M.x * a + x), y = r(M.y * a + b)), c._relative ? (p = r((S.x + c.x) * a + x), d = r((S.y + c.y) * a + b)) : (p = r(S.x * a + x), d = r(S.y * a + b)), C = r(c.x * a + x), A = r(c.y * a + b), o.bezierCurveTo(f, y, p, d, C, A));
                        break;
                    case t.Commands.line:
                        o.lineTo(C, A);
                        break;
                    case t.Commands.move:
                        w = e, o.moveTo(C, A)
                    }
                }), m && o.closePath(), o.fill(), o.stroke()
            },
            updateTexture: function (t, e) {
                this.updateCanvas(e), e._renderer.texture && t.deleteTexture(e._renderer.texture), t.bindBuffer(t.ARRAY_BUFFER, e._renderer.textureCoordsBuffer), e._renderer.texture = t.createTexture(), t.bindTexture(t.TEXTURE_2D, e._renderer.texture), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.LINEAR), this.canvas.width <= 0 || this.canvas.height <= 0 || t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, t.RGBA, t.UNSIGNED_BYTE, this.canvas)
            },
            updateBuffer: function (t, e, i) {
                _.isObject(e._renderer.buffer) && t.deleteBuffer(e._renderer.buffer), e._renderer.buffer = t.createBuffer(), t.bindBuffer(t.ARRAY_BUFFER, e._renderer.buffer), t.enableVertexAttribArray(i.position), t.bufferData(t.ARRAY_BUFFER, e._renderer.triangles, t.STATIC_DRAW), _.isObject(e._renderer.textureCoordsBuffer) && t.deleteBuffer(e._renderer.textureCoordsBuffer), e._renderer.textureCoordsBuffer = t.createBuffer(), t.bindBuffer(t.ARRAY_BUFFER, e._renderer.textureCoordsBuffer), t.enableVertexAttribArray(i.textureCoords), t.bufferData(t.ARRAY_BUFFER, this.uv, t.STATIC_DRAW)
            },
            program: {
                create: function (e, i) {
                    var n, s, o;
                    if (n = e.createProgram(), _.each(i, function (t) {
                            e.attachShader(n, t)
                        }), e.linkProgram(n), s = e.getProgramParameter(n, e.LINK_STATUS), !s) throw o = e.getProgramInfoLog(n), e.deleteProgram(n), new t.Utils.Error("unable to link program: " + o);
                    return n
                }
            },
            shaders: {
                create: function (e, i, n) {
                    var s, o, r;
                    if (s = e.createShader(e[n]), e.shaderSource(s, i), e.compileShader(s), o = e.getShaderParameter(s, e.COMPILE_STATUS), !o) throw r = e.getShaderInfoLog(s), e.deleteShader(s), new t.Utils.Error("unable to compile shader " + s + ": " + r);
                    return s
                },
                types: {
                    vertex: "VERTEX_SHADER",
                    fragment: "FRAGMENT_SHADER"
                },
                vertex: ["attribute vec2 a_position;", "attribute vec2 a_textureCoords;", "", "uniform mat3 u_matrix;", "uniform vec2 u_resolution;", "", "varying vec2 v_textureCoords;", "", "void main() {", "   vec2 projected = (u_matrix * vec3(a_position, 1.0)).xy;", "   vec2 normal = projected / u_resolution;", "   vec2 clipspace = (normal * 2.0) - 1.0;", "", "   gl_Position = vec4(clipspace * vec2(1.0, -1.0), 0.0, 1.0);", "   v_textureCoords = a_textureCoords;", "}"].join("\n"),
                fragment: ["precision mediump float;", "", "uniform sampler2D u_image;", "varying vec2 v_textureCoords;", "", "void main() {", "  gl_FragColor = texture2D(u_image, v_textureCoords);", "}"].join("\n")
            }
        };
    a.ctx = a.canvas.getContext("2d");
    var l = t[t.Types.webgl] = function (e) {
        var i, s, o, r;
        if (this.domElement = e.domElement || document.createElement("canvas"), this.scene = new t.Group, this.scene.parent = this, this._renderer = {
                matrix: new t.Array(n),
                scale: 1,
                opacity: 1
            }, this._flagMatrix = !0, i = _.defaults(e || {}, {
                antialias: !1,
                alpha: !0,
                premultipliedAlpha: !0,
                stencil: !0,
                preserveDrawingBuffer: !0,
                overdraw: !1
            }), this.overdraw = i.overdraw, s = this.ctx = this.domElement.getContext("webgl", i) || this.domElement.getContext("experimental-webgl", i), !this.ctx) throw new t.Utils.Error("unable to create a webgl context. Try using another renderer.");
        o = a.shaders.create(s, a.shaders.vertex, a.shaders.types.vertex), r = a.shaders.create(s, a.shaders.fragment, a.shaders.types.fragment), this.program = a.program.create(s, [o, r]), s.useProgram(this.program), this.program.position = s.getAttribLocation(this.program, "a_position"), this.program.matrix = s.getUniformLocation(this.program, "u_matrix"), this.program.textureCoords = s.getAttribLocation(this.program, "a_textureCoords"), s.disable(s.DEPTH_TEST), s.enable(s.BLEND), s.blendEquationSeparate(s.FUNC_ADD, s.FUNC_ADD), s.blendFuncSeparate(s.SRC_ALPHA, s.ONE_MINUS_SRC_ALPHA, s.ONE, s.ONE_MINUS_SRC_ALPHA)
    };
    _.extend(l.prototype, Backbone.Events, {
        setSize: function (t, e, i) {
            this.width = t, this.height = e, this.ratio = _.isUndefined(i) ? o(this.ctx) : i, this.domElement.width = t * this.ratio, this.domElement.height = e * this.ratio, _.extend(this.domElement.style, {
                width: t + "px",
                height: e + "px"
            }), t *= this.ratio, e *= this.ratio, this._renderer.matrix[0] = this._renderer.matrix[4] = this._renderer.scale = this.ratio, this._flagMatrix = !0, this.ctx.viewport(0, 0, t, e);
            var n = this.ctx.getUniformLocation(this.program, "u_resolution");
            return this.ctx.uniform2f(n, t, e), this
        },
        render: function () {
            var t = this.ctx;
            return this.overdraw || t.clear(t.COLOR_BUFFER_BIT | t.DEPTH_BUFFER_BIT), a.group.render.call(this.scene, t, this.program), this._flagMatrix = !1, this
        }
    })
}(Two),
function (t) {
    var e = t.Shape = function () {
        this._renderer = {}, this.id = t.Identifier + t.uniqueId(), this.classList = [], this._matrix = new t.Matrix, this.translation = new t.Vector, this.translation.bind(t.Events.change, _.bind(e.FlagMatrix, this)), this.rotation = 0, this.scale = 1
    };
    _.extend(e, Backbone.Events, {
        FlagMatrix: function () {
            this._flagMatrix = !0
        },
        MakeObservable: function (t) {
            Object.defineProperty(t, "rotation", {
                get: function () {
                    return this._rotation
                },
                set: function (t) {
                    this._rotation = t, this._flagMatrix = !0
                }
            }), Object.defineProperty(t, "scale", {
                get: function () {
                    return this._scale
                },
                set: function (t) {
                    this._scale = t, this._flagMatrix = !0, this._flagScale = !0
                }
            })
        }
    }), _.extend(e.prototype, {
        _flagMatrix: !0,
        _rotation: 0,
        _scale: 1,
        addTo: function (t) {
            return t.add(this), this
        },
        clone: function () {
            var t = new e;
            return t.translation.copy(this.translation), t.rotation = this.rotation, t.scale = this.scale, _.each(e.Properties, function (e) {
                t[e] = this[e]
            }, this), t._update()
        },
        replaceParent: function (t) {
            var e = this.id,
                i;
            return this.parent && (delete this.parent.children[e], i = _.indexOf(parent.additions, e), i >= 0 && this.parent.additions.splice(i, 1), this.parent.subtractions.push(e), this._flagSubtractions = !0), t ? (t.children[e] = this, this.parent = t, t.additions.push(e), t._flagAdditions = !0) : delete this.parent, this
        },
        _update: function (t) {
            return !this._matrix.manual && this._flagMatrix && this._matrix.identity()
                .translate(this.translation.x, this.translation.y)
                .scale(this.scale)
                .rotate(this.rotation), t && this.parent && this.parent._update && this.parent._update(), this
        },
        flagReset: function () {
            return this._flagMatrix = this._flagScale = !1, this
        }
    }), e.MakeObservable(e.prototype)
}(Two),
function (t) {
    function e(e, i, n) {
        var s, o, r, a, l, u, h, c, p = i.controls && i.controls.right,
            d = e.controls && e.controls.left;
        return s = i.x, l = i.y, o = (p || i)
            .x, u = (p || i)
            .y, r = (d || e)
            .x, h = (d || e)
            .y, a = e.x, c = e.y, p && i._relative && (o += i.x, u += i.y), d && e._relative && (r += e.x, h += e.y), t.Utils.getCurveLength(s, l, o, u, r, h, a, c, n)
    }

    function i(e, i, n) {
        var s, o, r, a, l, u, h, c, p = i.controls && i.controls.right,
            d = e.controls && e.controls.left;
        return s = i.x, l = i.y, o = (p || i)
            .x, u = (p || i)
            .y, r = (d || e)
            .x, h = (d || e)
            .y, a = e.x, c = e.y, p && i._relative && (o += i.x, u += i.y), d && e._relative && (r += e.x, h += e.y), t.Utils.subdivide(s, l, o, u, r, h, a, c, n)
    }
    var n = Math.min,
        s = Math.max,
        o = Math.round,
        r = t.Utils.getComputedMatrix,
        a = {};
    _.each(t.Commands, function (t, e) {
        a[e] = new RegExp(t)
    });
    var l = t.Polygon = function (e, i, n, s) {
        t.Shape.call(this), this._renderer.type = "polygon", this._closed = !!i, this._curved = !!n, this.beginning = 0, this.ending = 1, this.fill = "#fff", this.stroke = "#000", this.linewidth = 1, this.opacity = 1, this.visible = !0, this.cap = "butt", this.join = "miter", this.miter = 4, this._vertices = [], this.vertices = e, this.automatic = !s
    };
    _.extend(l, {
        Properties: ["fill", "stroke", "linewidth", "opacity", "visible", "cap", "join", "miter", "closed", "curved", "automatic", "beginning", "ending"],
        FlagVertices: function () {
            this._flagVertices = !0, this._flagLength = !0
        },
        MakeObservable: function (e) {
            t.Shape.MakeObservable(e), _.each(l.Properties.slice(0, 8), function (t) {
                var i = "_" + t,
                    n = "_flag" + t.charAt(0)
                    .toUpperCase() + t.slice(1);
                Object.defineProperty(e, t, {
                    get: function () {
                        return this[i]
                    },
                    set: function (t) {
                        this[i] = t, this[n] = !0
                    }
                })
            }), Object.defineProperty(e, "length", {
                get: function () {
                    return this._flagLength && this._updateLength(), this._length
                }
            }), Object.defineProperty(e, "closed", {
                get: function () {
                    return this._closed
                },
                set: function (t) {
                    this._closed = !!t, this._flagVertices = !0
                }
            }), Object.defineProperty(e, "curved", {
                get: function () {
                    return this._curved
                },
                set: function (t) {
                    this._curved = !!t, this._flagVertices = !0
                }
            }), Object.defineProperty(e, "automatic", {
                get: function () {
                    return this._automatic
                },
                set: function (t) {
                    if (t !== this._automatic) {
                        this._automatic = !!t;
                        var e = this._automatic ? "ignore" : "listen";
                        _.each(this.vertices, function (t) {
                            t[e]()
                        })
                    }
                }
            }), Object.defineProperty(e, "beginning", {
                get: function () {
                    return this._beginning
                },
                set: function (t) {
                    this._beginning = n(s(t, 0), this._ending), this._flagVertices = !0
                }
            }), Object.defineProperty(e, "ending", {
                get: function () {
                    return this._ending
                },
                set: function (t) {
                    this._ending = n(s(t, this._beginning), 1), this._flagVertices = !0
                }
            }), Object.defineProperty(e, "vertices", {
                get: function () {
                    return this._collection
                },
                set: function (e) {
                    var i = _.bind(l.FlagVertices, this),
                        n = _.bind(function (e) {
                            for (var n = e.length; n--;) e[n].bind(t.Events.change, i);
                            i()
                        }, this),
                        s = _.bind(function (e) {
                            _.each(e, function (e) {
                                e.unbind(t.Events.change, i)
                            }, this), i()
                        }, this);
                    this._collection && this._collection.unbind(), this._collection = new t.Utils.Collection(e.slice(0)), this._collection.bind(t.Events.insert, n), this._collection.bind(t.Events.remove, s), n(this._collection)
                }
            }), Object.defineProperty(e, "clip", {
                get: function () {
                    return this._clip
                },
                set: function (t) {
                    this._clip = t, this._flagClip = !0
                }
            })
        }
    }), _.extend(l.prototype, t.Shape.prototype, {
        _flagVertices: !0,
        _flagLength: !0,
        _flagFill: !0,
        _flagStroke: !0,
        _flagLinewidth: !0,
        _flagOpacity: !0,
        _flagVisible: !0,
        _flagCap: !0,
        _flagJoin: !0,
        _flagMiter: !0,
        _flagClip: !1,
        _length: 0,
        _fill: "#fff",
        _stroke: "#000",
        _linewidth: 1,
        _opacity: 1,
        _visible: !0,
        _cap: "round",
        _join: "round",
        _miter: 4,
        _closed: !0,
        _curved: !1,
        _automatic: !0,
        _beginning: 0,
        _ending: 1,
        _clip: !1,
        clone: function (e) {
            e = e || this.parent;
            var i = _.map(this.vertices, function (t) {
                    return t.clone()
                }),
                n = new l(i, this.closed, this.curved, !this.automatic);
            return _.each(t.Shape.Properties, function (t) {
                n[t] = this[t]
            }, this), n.translation.copy(this.translation), n.rotation = this.rotation, n.scale = this.scale, e.add(n), n
        },
        toObject: function () {
            var e = {
                vertices: _.map(this.vertices, function (t) {
                    return t.toObject()
                })
            };
            return _.each(t.Shape.Properties, function (t) {
                e[t] = this[t]
            }, this), e.translation = this.translation.toObject, e.rotation = this.rotation, e.scale = this.scale, e
        },
        noFill: function () {
            return this.fill = "transparent", this
        },
        noStroke: function () {
            return this.stroke = "transparent", this
        },
        corner: function () {
            var t = this.getBoundingClientRect(!0);
            return t.centroid = {
                x: t.left + t.width / 2,
                y: t.top + t.height / 2
            }, _.each(this.vertices, function (e) {
                e.addSelf(t.centroid)
            }), this
        },
        center: function () {
            var t = this.getBoundingClientRect(!0);
            return t.centroid = {
                x: t.left + t.width / 2,
                y: t.top + t.height / 2
            }, _.each(this.vertices, function (e) {
                e.subSelf(t.centroid)
            }), this
        },
        remove: function () {
            return this.parent ? (this.parent.remove(this), this) : this
        },
        getBoundingClientRect: function (t) {
            this._update(!0);
            var e = t ? this._matrix : r(this),
                i = this.linewidth / 2,
                o, a, l = 1 / 0,
                u = -1 / 0,
                h = 1 / 0,
                c = -1 / 0;
            return _.each(this._vertices, function (t) {
                o = t.x, a = t.y, t = e.multiply(o, a, 1), h = n(t.y - i, h), l = n(t.x - i, l), u = s(t.x + i, u), c = s(t.y + i, c)
            }), {
                top: h,
                left: l,
                right: u,
                bottom: c,
                width: u - l,
                height: c - h
            }
        },
        getPointAt: function (e, i) {
            for (var n, s, o, r, a, l, u, h, c, p, d, f, m = this.length * Math.min(Math.max(e, 0), 1), g = this.vertices.length, v = g - 1, y = null, x = null, b = 0, w = this._lengths.length, T = 0; w > b; b++) {
                if (T + this._lengths[b] > m) {
                    y = this.vertices[this.closed ? t.Utils.mod(b, g) : b], x = this.vertices[Math.min(Math.max(b - 1, 0), v)], m -= T, e = m / this._lengths[b];
                    break
                }
                T += this._lengths[b]
            }
            return _.isNull(y) || _.isNull(x) ? null : (f = x.controls && x.controls.right, d = y.controls && y.controls.left, s = x.x, u = x.y, o = (f || x)
                .x, h = (f || x)
                .y, r = (d || y)
                .x, c = (d || y)
                .y, a = y.x, p = y.y, f && x._relative && (o += x.x, h += x.y), d && y._relative && (r += y.x, c += y.y), n = t.Utils.getPointOnCubicBezier(e, s, o, r, a), l = t.Utils.getPointOnCubicBezier(e, u, h, c, p), _.isObject(i) ? (i.x = n, i.y = l, i) : new t.Vector(n, l))
        },
        plot: function () {
            if (this.curved) return t.Utils.getCurveFromPoints(this._vertices, this.closed), this;
            for (var e = 0; e < this._vertices.length; e++) this._vertices[e]._command = 0 === e ? t.Commands.move : t.Commands.line;
            return this
        },
        subdivide: function (e) {
            this._update();
            var n = this.vertices.length - 1,
                s = this.vertices[n],
                o = this._closed || this.vertices[n]._command === t.Commands.close,
                r = [];
            return _.each(this.vertices, function (a, l) {
                if (0 >= l && !o) return void(s = a);
                if (a.command === t.Commands.move) return r.push(new t.Anchor(s.x, s.y)), l > 0 && (r[r.length - 1].command = t.Commands.line), void(s = a);
                var u = i(a, s, e);
                r = r.concat(u), _.each(u, function (e, i) {
                    e.command = 0 >= i && s.command === t.Commands.move ? t.Commands.move : t.Commands.line
                }), l >= n && (this._closed && this._automatic ? (s = a, u = i(a, s, e), r = r.concat(u), _.each(u, function (e, i) {
                    e.command = 0 >= i && s.command === t.Commands.move ? t.Commands.move : t.Commands.line
                })) : o && r.push(new t.Anchor(a.x, a.y)), r[r.length - 1].command = o ? t.Commands.close : t.Commands.line), s = a
            }, this), this._automatic = !1, this._curved = !1, this.vertices = r, this
        },
        _updateLength: function (i) {
            this._update();
            var n = this.vertices.length - 1,
                s = this.vertices[n],
                o = this._closed || this.vertices[n]._command === t.Commands.close,
                r = 0;
            return _.isUndefined(this._lengths) && (this._lengths = []), _.each(this.vertices, function (a, l) {
                return 0 >= l && !o || a.command === t.Commands.move ? (s = a, void(this._lengths[l] = 0)) : (this._lengths[l] = e(a, s, i), r += this._lengths[l], l >= n && o && (s = a, this._lengths[l + 1] = e(a, s, i), r += this._lengths[l + 1]), void(s = a))
            }, this), this._length = r, this
        },
        _update: function () {
            if (this._flagVertices) {
                var e = this.vertices.length,
                    i = e - 1,
                    n, s = o(this._beginning * i),
                    r = o(this._ending * i);
                this._vertices.length = 0;
                for (var a = s; r + 1 > a; a++) n = this.vertices[a], this._vertices.push(n);
                this._automatic && this.plot()
            }
            return t.Shape.prototype._update.call(this), this
        },
        flagReset: function () {
            return this._flagVertices = this._flagFill = this._flagStroke = this._flagLinewidth = this._flagOpacity = this._flagVisible = this._flagCap = this._flagJoin = this._flagMiter = this._flagClip = !1, t.Shape.prototype.flagReset.call(this), this
        }
    }), l.MakeObservable(l.prototype)
}(Two),
function (t) {
    var e = Math.min,
        i = Math.max,
        n = t.Group = function () {
            t.Shape.call(this, !0), this._renderer.type = "group", this.additions = [], this.subtractions = [], this.children = {}
        };
    _.extend(n, {
        MakeObservable: function (e) {
            var i = t.Polygon.Properties.slice(0),
                s = _.indexOf(i, "opacity");
            s >= 0 && (i.splice(s, 1), Object.defineProperty(e, "opacity", {
                get: function () {
                    return this._opacity
                },
                set: function (t) {
                    this._opacity = t, this._flagOpacity = !0
                }
            })), t.Shape.MakeObservable(e), n.MakeGetterSetters(e, i), Object.defineProperty(e, "mask", {
                get: function () {
                    return this._mask
                },
                set: function (t) {
                    this._mask = t, this._flagMask = !0, t.clip || (t.clip = !0)
                }
            })
        },
        MakeGetterSetters: function (t, e) {
            _.isArray(e) || (e = [e]), _.each(e, function (e) {
                n.MakeGetterSetter(t, e)
            })
        },
        MakeGetterSetter: function (t, e) {
            var i = "_" + e;
            Object.defineProperty(t, e, {
                get: function () {
                    return this[i]
                },
                set: function (t) {
                    this[i] = t, _.each(this.children, function (i) {
                        i[e] = t
                    })
                }
            })
        }
    }), _.extend(n.prototype, t.Shape.prototype, {
        _flagAdditions: !1,
        _flagSubtractions: !1,
        _flagOpacity: !0,
        _flagMask: !1,
        _fill: "#fff",
        _stroke: "#000",
        _linewidth: 1,
        _opacity: 1,
        _visible: !0,
        _cap: "round",
        _join: "round",
        _miter: 4,
        _closed: !0,
        _curved: !1,
        _automatic: !0,
        _beginning: 0,
        _ending: 1,
        _mask: null,
        clone: function (t) {
            t = t || this.parent;
            var e = new n;
            t.add(e);
            var i = _.map(this.children, function (t) {
                return t.clone(e)
            });
            return e.translation.copy(this.translation), e.rotation = this.rotation, e.scale = this.scale, e
        },
        toObject: function () {
            var t = {
                children: {},
                translation: this.translation.toObject(),
                rotation: this.rotation,
                scale: this.scale
            };
            return _.each(this.children, function (e, i) {
                t.children[i] = e.toObject()
            }, this), t
        },
        corner: function () {
            var t = this.getBoundingClientRect(!0),
                e = {
                    x: t.left,
                    y: t.top
                };
            return _.each(this.children, function (t) {
                t.translation.subSelf(e)
            }), this
        },
        center: function () {
            var t = this.getBoundingClientRect(!0);
            return t.centroid = {
                x: t.left + t.width / 2,
                y: t.top + t.height / 2
            }, _.each(this.children, function (e) {
                e.translation.subSelf(t.centroid)
            }), this
        },
        getById: function (t) {
            var e = function (t, i) {
                if (t.id === i) return t;
                for (var n in t.children) {
                    var s = e(t.children[n], i);
                    if (s) return s
                }
            };
            return e(this, t) || null
        },
        getByClassName: function (t) {
            var e = [],
                i = function (t, n) {
                    -1 != t.classList.indexOf(n) && e.push(t);
                    for (var s in t.children) i(t.children[s], n);
                    return e
                };
            return i(this, t)
        },
        getByType: function (e) {
            var i = [],
                n = function (e, s) {
                    for (var o in e.children) e.children[o] instanceof s ? i.push(e.children[o]) : e.children[o] instanceof t.Group && n(e.children[o], s);
                    return i
                };
            return n(this, e)
        },
        add: function (t) {
            var e = arguments.length,
                i = this.children,
                n = this.parent,
                s = this.additions,
                o, r, a;
            return _.isArray(t) || (t = _.toArray(arguments)), _.each(t, function (t) {
                t && (o = t.id, r = t.parent, _.isUndefined(i[o]) && (r && (delete r.children[o], a = _.indexOf(r.additions, o), a >= 0 && r.additions.splice(a, 1)), i[o] = t, t.parent = this, s.push(o), this._flagAdditions = !0))
            }, this), this
        },
        remove: function (t) {
            var e = arguments.length,
                i = this.children,
                n = this.parent,
                s = this.subtractions,
                o, r, a, l;
            return 0 >= e && n ? (n.remove(this), this) : (_.isArray(t) || (t = _.toArray(arguments)), _.each(t, function (t) {
                o = t.id, l = t.children, r = t.parent, o in i && (delete i[o], delete t.parent, a = _.indexOf(r.additions, o), a >= 0 && r.additions.splice(a, 1), s.push(o), this._flagSubtractions = !0)
            }, this), this)
        },
        getBoundingClientRect: function () {
            var t;
            this._update(!0);
            var n = 1 / 0,
                s = -1 / 0,
                o = 1 / 0,
                r = -1 / 0;
            return _.each(this.children, function (a) {
                t = a.getBoundingClientRect(), _.isNumber(t.top) && _.isNumber(t.left) && _.isNumber(t.right) && _.isNumber(t.bottom) && (o = e(t.top, o), n = e(t.left, n), s = i(t.right, s), r = i(t.bottom, r))
            }, this), {
                top: o,
                left: n,
                right: s,
                bottom: r,
                width: s - n,
                height: r - o
            }
        },
        noFill: function () {
            return _.each(this.children, function (t) {
                t.noFill()
            }), this
        },
        noStroke: function () {
            return _.each(this.children, function (t) {
                t.noStroke()
            }), this
        },
        subdivide: function () {
            var t = arguments;
            return _.each(this.children, function (e) {
                e.subdivide.apply(e, t)
            }), this
        },
        flagReset: function () {
            return this._flagAdditions && (this.additions.length = 0, this._flagAdditions = !1), this._flagSubtractions && (this.subtractions.length = 0, this._flagSubtractions = !1), this._flagMask = this._flagOpacity = !1, t.Shape.prototype.flagReset.call(this), this
        }
    }), n.MakeObservable(n.prototype)
}(Two);
var ImprovedNoise = function () {
        function t(t) {
            return t * t * t * (t * (6 * t - 15) + 10)
        }

        function e(t, e, i) {
            return e + t * (i - e)
        }

        function i(t, e, i, n) {
            var s = 15 & t,
                o = 8 > s ? e : i,
                r = 4 > s ? i : 12 == s || 14 == s ? e : n;
            return (0 == (1 & s) ? o : -o) + (0 == (2 & s) ? r : -r)
        }
        for (var n = [151, 160, 137, 91, 90, 15, 131, 13, 201, 95, 96, 53, 194, 233, 7, 225, 140, 36, 103, 30, 69, 142, 8, 99, 37, 240, 21, 10, 23, 190, 6, 148, 247, 120, 234, 75, 0, 26, 197, 62, 94, 252, 219, 203, 117, 35, 11, 32, 57, 177, 33, 88, 237, 149, 56, 87, 174, 20, 125, 136, 171, 168, 68, 175, 74, 165, 71, 134, 139, 48, 27, 166, 77, 146, 158, 231, 83, 111, 229, 122, 60, 211, 133, 230, 220, 105, 92, 41, 55, 46, 245, 40, 244, 102, 143, 54, 65, 25, 63, 161, 1, 216, 80, 73, 209, 76, 132, 187, 208, 89, 18, 169, 200, 196, 135, 130, 116, 188, 159, 86, 164, 100, 109, 198, 173, 186, 3, 64, 52, 217, 226, 250, 124, 123, 5, 202, 38, 147, 118, 126, 255, 82, 85, 212, 207, 206, 59, 227, 47, 16, 58, 17, 182, 189, 28, 42, 223, 183, 170, 213, 119, 248, 152, 2, 44, 154, 163, 70, 221, 153, 101, 155, 167, 43, 172, 9, 129, 22, 39, 253, 19, 98, 108, 110, 79, 113, 224, 232, 178, 185, 112, 104, 218, 246, 97, 228, 251, 34, 242, 193, 238, 210, 144, 12, 191, 179, 162, 241, 81, 51, 145, 235, 249, 14, 239, 107, 49, 192, 214, 31, 181, 199, 106, 157, 184, 84, 204, 176, 115, 121, 50, 45, 127, 4, 150, 254, 138, 236, 205, 93, 222, 114, 67, 29, 24, 72, 243, 141, 128, 195, 78, 66, 215, 61, 156, 180], s = 0; 256 > s; s++) n[256 + s] = n[s];
        return {
            noise: function (s, o, r) {
                var a = ~~s,
                    l = ~~o,
                    u = ~~r,
                    h = 255 & a,
                    c = 255 & l,
                    p = 255 & u;
                s -= a, o -= l, r -= u;
                var d = s - 1,
                    f = o - 1,
                    m = r - 1,
                    g = t(s),
                    v = t(o),
                    y = t(r),
                    _ = n[h] + c,
                    x = n[_] + p,
                    b = n[_ + 1] + p,
                    w = n[h + 1] + c,
                    T = n[w] + p,
                    M = n[w + 1] + p;
                return e(y, e(v, e(g, i(n[x], s, o, r), i(n[T], d, o, r)), e(g, i(n[b], s, f, r), i(n[M], d, f, r))), e(v, e(g, i(n[x + 1], s, o, m), i(n[T + 1], d, o, r - 1)), e(g, i(n[b + 1], s, f, m), i(n[M + 1], d, f, m))))
            }
        }
    },
    NC = NC || {};
NC.Sequence = function (t) {
    this.data = t.splice(0), this.shouldUpdateTrans = !1, this.shouldUpdateIntro = !1, this.shouldProgressTrans = !1, this.shouldProgressIntro = !1, this.shouldAnimOut = !0, this.shouldRespond = !1, this.shouldUpload = !0, this.monologueId = 1, this.stage = 0, this.isPaused = !1, this.isOnProgress = !1, this.quotes = [], this.police = {
        perc: 0
    }, this.firstRun = !0, this.init()
}, NC.Sequence.prototype = {
    init: function () {
        var t = this;
        this.el = H.createEl("div", {
                position: "absolute",
                top: "0px",
                left: "0px",
                width: "100%",
                height: "100%"
            }), this.currSeq = 0, this.nextSeq = 1, this.weather = new NC.WeatherWidget, this.el.appendChild(this.weather.el), this.scanner = new NC.PoliceScanner, this.el.appendChild(this.scanner.el), this.turnbyturn = new NC.TurnByTurn, this.el.appendChild(this.turnbyturn.el), this.volumeUp = new NC.VolumeUp, this.el.appendChild(this.volumeUp.el), this.volumeUp.animateIn(), this.buyTickets = H.createEl("div", {
                position: "absolute",
                top: "130px",
                left: "24px",
                zIndex: "50",
                cursor: "pointer",
                visibility: "hidden",
                opacity: "0",
                zIndex: "99"
            }, this.el), this.buyTicketsImg = H.createImg("assets/img/exp/buy-tickets.png", null, this.buyTickets), this.buyTicketsImgRo = H.createImg("assets/img/exp/buy-tickets-ro.jpg", {
                position: "absolute",
                top: "0",
                left: "0",
                opacity: "0"
            }, this.buyTickets), TweenMax.set(t.buyTicketsImgRo, {
                rotationX: -90,
                opacity: 0,
                transformOrigin: "50% 50% -28px",
                perspective: 400
            }), isMobile.any() || $(this.buyTickets)
            .hover(function () {
                TweenMax.to(t.buyTicketsImg, 1, {
                    rotationX: 90,
                    opacity: 0,
                    transformOrigin: "50% 50% -28px",
                    perspective: 400,
                    ease: Expo.easeOut
                }), TweenMax.to(t.buyTicketsImgRo, 1, {
                    rotationX: 0,
                    opacity: 1,
                    transformOrigin: "50% 50% -28px",
                    perspective: 400,
                    ease: Expo.easeOut
                })
            }, function () {
                TweenMax.to(t.buyTicketsImg, 1, {
                    rotationX: 0,
                    opacity: 1,
                    transformOrigin: "50% 50% -28px",
                    perspective: 400,
                    ease: Expo.easeOut
                }), TweenMax.to(t.buyTicketsImgRo, 1, {
                    rotationX: -90,
                    opacity: 0,
                    transformOrigin: "50% 50% -28px",
                    perspective: 400,
                    ease: Expo.easeOut
                })
            }), $(this.buyTickets)
            .click(function () {
                window.open("http://www.fandango.com/nightcrawler_175296/movieoverview", "_blank"), site.onExternal()
            }), this.quotesContainer = H.createEl("div", {
                position: "absolute",
                top: "0px",
                left: "0px",
                zIndex: "50"
            }, this.el);
        for (var e = 0; e < this.data[0].quotes.length; e++) {
            var i = t.data[0].quotes[e],
                n = H.createImg(i.img, {
                    position: "absolute",
                    marginLeft: "-280px",
                    marginTop: "-48px",
                    top: i.top + "%",
                    left: i.left + "%",
                    zIndex: "50",
                    visibility: "hidden",
                    opacity: "0"
                }, t.quotesContainer);
            t.quotes.push({
                data: i,
                el: n,
                hasShown: !1
            })
        }
    },
    reset: function () {
        this.shouldUpdateTrans = !1, this.shouldUpdateIntro = !1, this.shouldProgressTrans = !1, this.shouldProgressIntro = !1, this.shouldAnimOut = !0, this.shouldRespond = !1, this.shouldUpload = !0, soundManager.stop("seq" + (this.currSeq + 1) + "loop3"), this.currSeq = this.nextSeq, this.nextSeq = this.currSeq + 1, this.nextSeq >= this.data.length && (this.nextSeq = 0), this.stage = 0, this.load()
    },
    pause: function () {
        var t = this;
        switch (this.stage) {
        case 0:
            t.introVideo.pause(), site.bg && site.bg.pause();
            break;
        case 1:
            t.transVideo.pause(), t.shouldUpdateTrans = !1, t.map && t.map.pause();
            break;
        case 2:
            t.endScreen.pause()
        }
        site.cursor.pause(), soundManager.pauseAll(), TweenMax.pauseAll(), this.dots && TweenMax.to(this.dots, 1, {
            autoAlpha: 1
        }), TweenMax.to(this.weather.el, 1, {
            autoAlpha: 0
        }), TweenMax.to(this.buyTickets, 1, {
            autoAlpha: 0
        }), this.turnbyturn && TweenMax.to(this.turnbyturn.el, 1, {
            autoAlpha: 0
        }), TweenMax.to(this.scanner.el, 1, {
            autoAlpha: 0
        }), TweenMax.to(this.quotesContainer, 1, {
            autoAlpha: 0
        }), this.volumeUp && TweenMax.to(this.volumeUp.el, 1, {
            autoAlpha: 0
        }), this.isPaused = !0, TweenMax.to(site.fullscreen, .5, {
            autoAlpha: 0
        })
    },
    resume: function () {
        var t = this;
        switch (this.stage) {
        case 0:
            t.introVideo.play(), site.bg && site.bg.play();
            break;
        case 1:
            t.transVideo.play(), t.shouldUpdateTrans = !0, t.onUpdateTrans(), t.map && t.map.resume();
            break;
        case 2:
            t.endScreen.resume()
        }
        site.cursor.resume(), soundManager.resumeAll(), TweenMax.resumeAll(), this.dots && TweenMax.to(this.dots, 1, {
            autoAlpha: 0
        }), TweenMax.to(this.weather.el, 1, {
            autoAlpha: 1
        }), TweenMax.to(this.buyTickets, 1, {
            autoAlpha: 1
        }), TweenMax.to(this.turnbyturn.el, 1, {
            autoAlpha: 1
        }), TweenMax.to(this.scanner.el, 1, {
            autoAlpha: 1
        }), TweenMax.to(this.quotesContainer, 1, {
            autoAlpha: 1
        }), this.volumeUp && TweenMax.to(this.volumeUp.el, 1, {
            autoAlpha: 1
        }), this.isPaused = !1, TweenMax.to(site.fullscreen, .5, {
            autoAlpha: 1,
            delay: .5
        })
    },
    load: function () {
        var t = this;
        this.introVideo = H.createVideo(this.data[this.currSeq].intro + "" + H.videoExt + "?r=" + Math.floor(1e3 * Math.random()), {
                position: "absolute",
                opacity: "0"
            }, this.el), this.introVideo.preload = "auto", TweenMax.set(this.introVideo, {
                scale: 1.01
            }), this.dots = H.createImg("assets/img/map/dots.png", {
                position: "absolute",
                zIndex: "98",
                visibility: "hidden",
                opacity: "0"
            }, this.el), this.introVideo.play(), this.introVideo.pause(), $(t.introVideo)
            .bind("loadeddata", function () {
                $(t.introVideo)
                    .unbind("loadeddata"), t.shouldProgressIntro = !0, t.onProgressIntro()
            }), this.map = new NC.Map(this.data[this.currSeq], this), this.el.appendChild(this.map.el), this.resize()
    },
    onProgressIntro: function () {
        var t = this,
            e = t.introVideo.buffered.end(0) / t.introVideo.duration;
        e >= .5 ? (site.cursor.params.endAngle = 2 * Math.PI, this.shouldProgressIntro = !1, t.firstRun ? (t.volumeUp.animateOut(), site.cursor.goFullscreen(), $(window)
            .click(function () {
                fullScreenApi.supportsFullScreen && fullScreenApi.requestFullScreen(document.body)
            }), t.to = setTimeout(function () {
                $(window)
                    .unbind("click"), t.scanner.animateIn(), t.start(), site.onAllLoaded()
            }, 4e3)) : (TweenMax.to(site.cursor.params, .5, {
            startAngle: 2 * Math.PI,
            ease: Expo.easeOut
        }), t.start(), t.scanner.animateIn()), site.hideTitle(), t.weather.animateIn(), TweenMax.to(this.buyTickets, 2, {
            autoAlpha: 1,
            delay: .5
        })) : site.cursor.params.endAngle = t.firstRun ? 2 * Math.PI * (e / .5 / 2 + .5) : 2 * Math.PI * (e / .5), this.shouldProgressIntro && requestAnimationFrame($.proxy(this.onProgressIntro, this))
    },
    goVolume: function () {
        var t = this;
        site.cursor.goMainListen(), TweenMax.delayedCall(15, function () {
            t.volumeUp.animateOut(), t.scanner.animateIn(), t.start()
        }), site.onAllLoaded()
    },
    start: function () {
        var t = this;
        this.firstRun || TweenMax.to(t.endScreen.el, 1, {
            opacity: 0,
            onComplete: function () {
                t.el.removeChild(t.endScreen.el), delete t.endScreen, t.endScreen = null
            }
        }), site.cursor.goMainListen(), clearTimeout(this.to), this.introVideo.play(), TweenMax.to(this.introVideo, 1, {
            opacity: 1,
            onComplete: function () {
                site.hideLoader()
            }
        }), this.firstRun && (this.shouldUpdateIntro = !0, this.onUpdateIntro()), this.introVideo.loop = !0, this.shouldRespond = !1, 0 == this.currSeq ? (this.policeDelay = 27, this.firstRun && TweenMax.to(site.cursor.paramsBigYellow, 39, {
            endAngle: 2 * Math.PI,
            ease: Linear.easeNone,
            onComplete: function () {
                TweenMax.to(site.cursor.paramsBigYellow, 1, {
                    startAngle: 2 * Math.PI,
                    onComplete: function () {
                        site.cursor.paramsBigYellow.startAngle = site.cursor.paramsBigYellow.endAngle = 0
                    }
                })
            }
        })) : this.policeDelay = 16, t.firstPolice = !0, t.startPolice(), t.firstRun = !1, soundManager.play("seq" + (this.currSeq + 1) + "loop1", {
            loops: 1e4
        }), TweenMax.delayedCall(2, function () {
            soundManager.play("vo" + (t.currSeq + 1))
        })
    },
    onUpdateIntro: function () {
        var t = this;
        console.log(t.introVideo.currentTime);
        for (var e = 0; e < this.quotes.length; e++) {
            var i = t.quotes[e];
            t.introVideo.currentTime >= parseFloat(i.data.start) && t.introVideo.currentTime < parseFloat(i.data.end) && !i.hasShown && (i.hasShown = !0, TweenMax.to(i.el, 1, {
                autoAlpha: .9
            })), t.introVideo.currentTime >= parseFloat(i.data.end) && i.hasShown && (i.hasShown = !1, TweenMax.set(i.el, {
                autoAlpha: 0
            }), e == t.quotes.length - 1 && (t.shouldUpdateIntro = !1, t.el.removeChild(t.quotesContainer)))
        }
        this.shouldUpdateIntro && requestAnimationFrame($.proxy(this.onUpdateIntro, this))
    },
    startPolice: function () {
        var t = this;
        t.scanner.startFreq(), TweenMax.to(this.police, this.policeDelay, {
            perc: 1,
            ease: Linear.easeNone,
            onComplete: function () {
                t.firstPolice && (soundManager.play("policeLoop", {
                    loops: 1e4,
                    volume: 10
                }), t.firstPolice = !1), t.scanner.stopFreq(), t.respond(), t.police.perc = 0, soundManager.play("police" + Math.floor(8 * Math.random())), site.cursor.lineYellow()
            },
            onUpdate: function () {
                t.scanner.updatePerc(t.police.perc)
            }
        })
    },
    respond: function () {
        var t = this;
        this.policeDelay = 6, TweenMax.delayedCall(3.5, function () {
            t.shouldRespond ? (t.shouldRespond = !1, site.cursor.goRespond(), $(window)
                .click(function () {
                    t.onGo()
                }), TweenMax.delayedCall(13, function () {
                    site.cursor.lineGrey(), site.cursor.goListen(), $(window)
                        .unbind("click"), t.startPolice()
                })) : (t.shouldRespond = !0, site.cursor.lineGrey(), t.startPolice())
        })
    },
    onGo: function () {
        var t = this;
        this.shouldUpdateIntro = !1, soundManager.stop("policeLoop"), TweenMax.killTweensOf(this.police), TweenMax.killAll(!1, !1, !0, !0), site.cursor.lineGrey(), TweenMax.to(this.quotesContainer, .5, {
                autoAlpha: 0,
                onComplete: function () {
                    $.contains(t.el, t.quotesContainer) && t.el.removeChild(t.quotesContainer)
                }
            }), this.map.animateIn(), TweenMax.to(this.introVideo, 1, {
                opacity: .8
            }), TweenMax.to(this.dots, 1, {
                autoAlpha: 1,
                onComplete: function () {
                    t.transVideo = H.createVideo(t.data[t.currSeq].transition + "" + H.videoExt + "?r=" + Math.floor(1e3 * Math.random()), {
                            position: "absolute",
                            visibility: "hidden"
                        }, t.el), t.transVideo.preload = "auto", TweenMax.set(t.transVideo, {
                            scale: 1.01
                        }), t.transVideo.play(), t.transVideo.pause(), $(t.transVideo)
                        .bind("loadeddata", function () {
                            $(t.transVideo)
                                .unbind("loadeddata"), t.isOnProgress = !0, t.shouldProgressTrans = !0, t.onProgressTrans()
                        }), H.resizeToContainer(t.transVideo, t.el, 1e3 / 564), t.stage = 1
                }
            }), $(window)
            .unbind("click"), $(this.introVideo)
            .unbind("ended"), this.introVideo.pause(), site.cursor.goLoading(), soundManager.stop("seq" + (this.currSeq + 1) + "loop1"), soundManager.play("seq" + (this.currSeq + 1) + "loop2", {
                loops: 1e4
            })
    },
    onProgressTrans: function () {
        var t = this,
            e = t.transVideo.buffered.end(0) / t.transVideo.duration;
        if (e >= .17) TweenMax.to(site.cursor.params, .3, {
            endAngle: 2 * Math.PI
        }), site.cursor.loading.innerHTML = "100", t.shouldProgressTrans = !1, TweenMax.delayedCall(4, function () {
            t.startTransition(), t.turnbyturn.animateIn()
        }), t.map.startAnimation();
        else {
            TweenMax.to(site.cursor.params, .3, {
                endAngle: 2 * Math.PI * (e / .17)
            });
            var i = Math.floor(e / .17 * 100);
            site.cursor.loading.innerHTML = 10 > i ? "0" + i : "" + i
        }
        this.shouldProgressTrans && requestAnimationFrame($.proxy(this.onProgressTrans, this))
    },
    mute: function () {
        var t = this;
        2 == t.stage && this.endScreen.mute()
    },
    unmute: function () {
        var t = this;
        2 == t.stage && this.endScreen.unmute()
    },
    startTransition: function () {
        var t = this;
        t.isOnProgress = !1, site.cursor.goSearch(), TweenMax.delayedCall(2, function () {
            TweenMax.to(t.map.el, 2, {
                opacity: .2
            }), TweenMax.to(t.transVideo, 2, {
                opacity: 1
            }), TweenMax.to(t.map.trans, 2, {
                scale: 1.5
            }), t.map.el.style[H.vendor + "Filter"] = "blur(3px)", t.transVideo.style[H.vendor + "Filter"] = "", t.shouldCheckDist = !0
        }), this.transVideo.play(), this.transVideo.style.opacity = "0.2", this.transVideo.style.visibility = "visible", this.el.removeChild(this.introVideo), delete this.introVideo, this.introVideo = null, TweenMax.to(this.dots, 1, {
            autoAlpha: 0,
            onComplete: function () {
                t.el.removeChild(t.dots), delete t.dots, t.dots = null
            }
        }), this.endScreen = new NC.EndSequence(this.data[this.currSeq].end, this), this.el.appendChild(this.endScreen.el), this.endScreen.load(), this.shouldUpdateTrans = !0, this.onUpdateTrans()
    },
    onUpdateTrans: function () {
        var t = this,
            e = t.transVideo.duration - t.transVideo.currentTime,
            i = t.transVideo.currentTime / parseFloat(t.data[this.currSeq].timeToRec);
        i > 0 && 1 >= i ? t.map.updateRoute(i) : i > 1 && t.shouldAnimOut && (t.shouldAnimOut = !1, t.shouldCheckDist = !1, TweenMax.to(site.cursor.params2, .3, {
            size: 0,
            ease: Expo.easeOut
        }), TweenMax.delayedCall(2, function () {
            TweenMax.to(t.transVideo, 1, {
                opacity: 1
            }), t.transVideo.style[H.vendor + "Filter"] = "", t.map.animateOut(), t.turnbyturn.animateOut(), site.cursor.goRec(), t.scanner.animateOut(), TweenMax.delayedCall(1.1, function () {
                t.el.removeChild(t.map.el), delete t.map, t.map = null
            })
        }));
        var n = t.transVideo.currentTime / parseFloat(t.data[this.currSeq].timeToUpload);
        if (n > 1 && t.shouldUpload && (t.shouldUpload = !1, site.cursor.goUpload(), soundManager.stop("seq" + (this.currSeq + 1) + "loop2"), soundManager.play("seq" + (this.currSeq + 1) + "loop3", {
                loops: 1e4
            })), this.shouldCheckDist) {
            var s = H.distance({
                x: site.screenWidth / 2,
                y: site.screenHeight / 2
            }, {
                x: site.cursor.mX,
                y: site.cursor.mY
            });
            if (300 > s) {
                var o = 1 - s / 300;
                t.map.el.style.opacity = .8 * o + .2, t.map.el.style[H.vendor + "Filter"] = "blur(" + 3 * (1 - o) + "px)", t.transVideo.style.opacity = .4 * (1 - o) + .6, t.transVideo.style[H.vendor + "Filter"] = "blur(" + 7 * o + "px)", t.map.trans.mouseScale = o, TweenMax.to(site.cursor.params2, .3, {
                    size: 35 * (1 - o),
                    ease: Expo.easeOut
                })
            } else TweenMax.to(site.cursor.params2, .3, {
                size: 35,
                ease: Expo.easeOut
            })
        }
        3 > e && t.showEndScreen(), this.shouldUpdateTrans && requestAnimationFrame($.proxy(this.onUpdateTrans, this))
    },
    showEndScreen: function () {
        var t = this;
        this.shouldUpdateTrans = !1, H.resizeToContainer(this.endScreen.el, this.el, 1e3 / 564), this.endScreen.animateIn(), site.cursor.goPlay(), TweenMax.delayedCall(2.5, function () {
            t.transVideo.style.display = "none", t.el.removeChild(t.transVideo), delete t.transVideo, t.transVideo = null
        }), t.stage = 2
    },
    resize: function () {
        this.introVideo && H.resizeToContainer(this.introVideo, this.el, 1e3 / 564), this.transVideo && H.resizeToContainer(this.transVideo, this.el, 1e3 / 564), this.quotesContainer.style.width = site.screenWidth + "px", this.quotesContainer.style.height = site.screenHeight + "px", H.resizeToContainer(this.dots, this.el, 1600 / 900), this.map && this.map.resize(), this.endScreen && (H.resizeToContainer(this.endScreen.el, this.el, 1e3 / 564), this.endScreen.resize())
    }
};
var NC = NC || {};
NC.EndSequence = function (t, e) {
    this.ctx = e, this.data = t, this.shoulLoop = !1, this.isOpen = null, this.shouldShowAgain = !0, this.isOverAgain = !1, this.isAgainPlaying = !1, this.init()
}, NC.EndSequence.prototype = {
    init: function () {
        var t = this;
        this.el = H.createEl("div", {
            position: "absolute",
            visibility: "hidden"
        }), this.loop1 = new NC.EndSequenceLoop(this.data.loop1, this), this.el.appendChild(this.loop1.loopContainer), this.loop2 = new NC.EndSequenceLoop(this.data.loop2, this), this.el.appendChild(this.loop2.loopContainer), this.loop3 = new NC.EndSequenceLoop(this.data.loop3, this), this.el.appendChild(this.loop3.loopContainer), this.again = H.createEl("div", {
            position: "fixed",
            top: "0px",
            left: "0px",
            width: "180px",
            height: "100%",
            overflow: "hidden",
            zIndex: "90"
        }, this.el), this.againVideo = H.createVideo(this.data.again + "" + H.videoExt + "?r=" + Math.floor(1e3 * Math.random()), {
            position: "absolute"
        }, this.again), this.againVideo.preload = "auto", this.againVideo.muted = !0, TweenMax.set(this.again, {
            x: -180,
            visibility: "hidden"
        }), this.dots = H.createImg("assets/img/map/dots.png", {
            position: "absolute",
            zIndex: "100",
            opacity: "0",
            zIndex: "5"
        }, this.el)
    },
    load: function () {
        console.log("mute end screen");
        var t = this;
        this.loop1.load(), this.loop2.load(), this.loop3.load(), this.againVideo.play(), this.againVideo.pause(), this.againVideo.loop = !0
    },
    mute: function () {
        this.loop1.mute(), this.loop2.mute(), this.loop3.mute(), this.againVideo.muted = !0
    },
    unmute: function () {
        this.loop1.unmute(), this.loop2.unmute(), this.loop3.unmute()
    },
    pause: function () {
        var t = this;
        this.loop1.pause(), this.loop2.pause(), this.loop3.pause(), this.isAgainPlaying && this.againVideo.pause(), this.shouldLoop = !1, $(window)
            .unbind("click"), this.loop1.isOpen || this.loop2.isOpen || this.loop3.isOpen || (this.loop1.onOut(), this.loop2.onOut(), this.loop3.onOut(), TweenMax.to(this.loop2.loopContainer, .5, {
                opacity: .5
            }), TweenMax.to(this.loop3.loopContainer, .5, {
                opacity: .5
            }), TweenMax.to(this.loop1.loopContainer, .5, {
                opacity: .5
            }))
    },
    resume: function () {
        var t = this;
        this.loop1.resume(), this.loop2.resume(), this.loop3.resume(), this.isAgainPlaying && this.againVideo.play(), $(window)
            .click(function () {
                t.onClick()
            }), this.loop1.isOpen || this.loop2.isOpen || this.loop3.isOpen || (this.shouldLoop = !0, this.loop())
    },
    animateIn: function () {
        var t = this;
        this.start(), this.el.style.visibility = "visible", this.loop1.animateIn(0), this.loop2.animateIn(.5), this.loop3.animateIn(1), TweenMax.delayedCall(2.5, function () {
            t.shouldLoop = !0, t.loop(), TweenMax.to(t.dots, 1, {
                    opacity: 1
                }), $(window)
                .click(function () {
                    t.onClick()
                })
        })
    },
    animateOut: function () {
        var t = this;
        TweenMax.to(this.again, 1, {
            width: $(this.el)
                .width(),
            height: $(this.el)
                .height(),
            top: $(this.el)
                .offset()
                .top,
            left: $(this.el)
                .offset()
                .left,
            ease: Expo.easeInOut
        }), TweenMax.to(this.againVideo, 1, {
            width: $(this.el)
                .width(),
            height: $(this.el)
                .height(),
            top: 0,
            left: 0,
            ease: Expo.easeInOut,
            onComplete: function () {
                $(window)
                    .unbind("click"), t.loop1.loop.pause(), t.loop2.loop.pause(), t.loop3.loop.pause(), t.ctx.reset()
            }
        }), this.shouldLoop = !1
    },
    onClick: function () {
        var t = this;
        site.cursor.mY < site.screenHeight - 100 && (this.isOverAgain ? this.animateOut() : (this.isOpen ? (this.isOpen.close(), this.isOpen = null, TweenMax.delayedCall(1, function () {
                t.shouldLoop = !0, t.loop(), t.showAgain()
            }), soundManager.play("seq" + (this.ctx.currSeq + 1) + "loop3", {
                loops: 1e4
            })) : site.cursor.mY < site.screenHeight - 100 && (this.loop1.isOver && (this.shouldLoop = !1, this.isOpen = this.loop1, this.loop1.open()), this.loop2.isOver && (this.shouldLoop = !1, this.isOpen = this.loop2, this.loop2.open()), this.loop3.isOver && (this.shouldLoop = !1, this.isOpen = this.loop3, this.loop3.open()), TweenMax.to(this.again, .5, {
                x: -180,
                ease: Expo.easeOut,
                onComplete: function () {
                    t.again.style.visibility = "hidden", t.againVideo.pause()
                }
            }), soundManager.stop("seq" + (this.ctx.currSeq + 1) + "loop3")), $(window)
            .unbind("click"), TweenMax.delayedCall(1, function () {
                $(window)
                    .click(function () {
                        t.onClick()
                    })
            })))
    },
    closeOpenLoop: function () {
        var t = this;
        this.isOpen.close(), this.isOpen = null, TweenMax.delayedCall(1, function () {
                t.shouldLoop = !0, t.loop(), t.showAgain()
            }), soundManager.play("seq" + (this.ctx.currSeq + 1) + "loop3", {
                loops: 1e4
            }), $(window)
            .unbind("click"), TweenMax.delayedCall(1, function () {
                $(window)
                    .click(function () {
                        t.onClick()
                    })
            })
    },
    showAgain: function () {
        this.againVideo.play(), this.again.style.visibility = "visible", TweenMax.to(this.again, .5, {
            x: 0,
            ease: Expo.easeOut
        }), this.shouldShowAgain = !1, this.isAgainPlaying = !0
    },
    loop: function () {
        this.shouldShowAgain || (site.cursor.mX < 180 && !this.isOverAgain ? (site.cursor.goNightCrawl(), this.isOverAgain = !0, this.loop1.onOut(), this.loop2.onOut(), this.loop3.onOut(), TweenMax.to(this.loop2.loopContainer, .5, {
            opacity: .5
        }), TweenMax.to(this.loop3.loopContainer, .5, {
            opacity: .5
        }), TweenMax.to(this.loop1.loopContainer, .5, {
            opacity: .5
        })) : site.cursor.mX >= 180 && this.isOverAgain && (site.cursor.goPlayFromListen(), this.isOverAgain = !1)), this.isOverAgain || (site.cursor.mX - $(this.el)
            .offset()
            .left < $(this.el)
            .width() * (this.data.loop1.width / 100) + $(this.el)
            .width() * (this.data.loop1.left / 100) && site.cursor.mX - $(this.el)
            .offset()
            .left > $(this.el)
            .width() * (this.data.loop1.left / 100) && site.cursor.mY - $(this.el)
            .offset()
            .top < $(this.el)
            .height() * (this.data.loop1.height / 100) + $(this.el)
            .height() * (this.data.loop1.top / 100) && site.cursor.mY - $(this.el)
            .offset()
            .top > $(this.el)
            .height() * (this.data.loop1.top / 100) ? this.loop1.isOver || (this.loop1.onOver(), TweenMax.to(this.loop1.loopContainer, .5, {
                opacity: 1
            }), TweenMax.to(this.loop2.loopContainer, .5, {
                opacity: .5
            }), TweenMax.to(this.loop3.loopContainer, .5, {
                opacity: .5
            })) : this.loop1.isOver && this.loop1.onOut(), site.cursor.mX - $(this.el)
            .offset()
            .left < $(this.el)
            .width() * (this.data.loop2.width / 100) + $(this.el)
            .width() * (this.data.loop2.left / 100) && site.cursor.mX - $(this.el)
            .offset()
            .left > $(this.el)
            .width() * (this.data.loop2.left / 100) && site.cursor.mY - $(this.el)
            .offset()
            .top < $(this.el)
            .height() * (this.data.loop2.height / 100) + $(this.el)
            .height() * (this.data.loop2.top / 100) && site.cursor.mY - $(this.el)
            .offset()
            .top > $(this.el)
            .height() * (this.data.loop2.top / 100) ? this.loop2.isOver || (this.loop2.onOver(), TweenMax.to(this.loop1.loopContainer, .5, {
                opacity: .5
            }), TweenMax.to(this.loop2.loopContainer, .5, {
                opacity: 1
            }), TweenMax.to(this.loop3.loopContainer, .5, {
                opacity: .5
            })) : this.loop2.isOver && this.loop2.onOut(), site.cursor.mX - $(this.el)
            .offset()
            .left < $(this.el)
            .width() * (this.data.loop3.width / 100) + $(this.el)
            .width() * (this.data.loop3.left / 100) && site.cursor.mX - $(this.el)
            .offset()
            .left > $(this.el)
            .width() * (this.data.loop3.left / 100) && site.cursor.mY - $(this.el)
            .offset()
            .top < $(this.el)
            .height() * (this.data.loop3.height / 100) + $(this.el)
            .height() * (this.data.loop3.top / 100) && site.cursor.mY - $(this.el)
            .offset()
            .top > $(this.el)
            .height() * (this.data.loop3.top / 100) ? this.loop3.isOver || (this.loop3.onOver(), TweenMax.to(this.loop1.loopContainer, .5, {
                opacity: .5
            }), TweenMax.to(this.loop2.loopContainer, .5, {
                opacity: .5
            }), TweenMax.to(this.loop3.loopContainer, .5, {
                opacity: 1
            })) : this.loop3.isOver && this.loop3.onOut()), this.shouldLoop && requestAnimationFrame($.proxy(this.loop, this))
    },
    start: function () {
        var t = this;
        this.loop1.start(), this.loop2.start(), this.loop3.start(), this.resize()
    },
    resize: function () {
        this.loop1.resize(), this.loop2.resize(), this.loop3.resize(), H.resizeToContainer(this.dots, this.el, 1600 / 900), H.resizeToContainer(this.againVideo, this.again, 1e3 / 564, !0, !0, 1.01)
    }
};
var NC = NC || {};
NC.EndSequenceLoop = function (t, e) {
    this.data = t, this.ctx = e, this.isOver = !1, this.isOpen = !1, this.shouldProgress = !1, this.timecode = {
        value: 0
    }, this.init()
}, NC.EndSequenceLoop.prototype = {
    init: function () {
        var t = this;
        this.loopContainer = H.createEl("div", {
            top: t.data.top + "%",
            left: t.data.left + "%"
        }, this.el), this.loopContainer.style.position = "absolute", this.loopContainer.style.overflow = "hidden", this.loopWrapper = H.createEl("div", {
            position: "absolute",
            overflow: "hidden",
            top: "0px",
            left: "0px",
            width: "100%",
            height: "100%"
        }, this.loopContainer), this.loop = H.createVideo(this.data.video + "" + H.videoExt + "?r=" + Math.floor(1e3 * Math.random()), {
            position: "absolute"
        }, this.loopWrapper), this.loop.preload = "auto", this.loop.muted = !0
    },
    load: function () {
        var t = this;
        this.loop.play(), this.loop.pause()
    },
    pause: function () {
        this.isBigOpen ? this.bigLoop.pause() : this.loop.pause()
    },
    resume: function () {
        this.isBigOpen ? this.bigLoop.play() : this.loop.play()
    },
    mute: function () {
        this.bigLoop && (this.bigLoop.muted = !0)
    },
    unmute: function () {
        this.bigLoop && (this.bigLoop.muted = !1)
    },
    onOver: function () {
        var t = this;
        this.isOver = !0, TweenMax.to(site.cursor.paramsBigYellow, .5, {
            endAngle: 2 * Math.PI * (parseFloat(this.data.length) / 40),
            ease: Expo.easeOut
        }), TweenMax.to(site.cursor.paramsBigYellow, .5, {
            timecode: parseInt(this.data.length),
            onUpdate: function () {
                var t = "" + Math.floor(site.cursor.paramsBigYellow.timecode);
                Math.floor(site.cursor.paramsBigYellow.timecode) < 10 && (t = "0" + Math.floor(site.cursor.paramsBigYellow.timecode)), site.cursor.timecode.innerHTML = "00:00:00:" + t
            }
        }), this.loopContainer.style.zIndex = "10"
    },
    onOut: function () {
        this.isOver = !1, this.loopContainer.style.zIndex = "0"
    },
    open: function () {
        var t = this;
        this.loopContainer.style.zIndex = "50", this.isOpen = !0, this.loop.pause(), TweenMax.to([this.loopContainer, this.loopWrapper, this.loop], 2, {
            width: $(this.ctx.el)
                .width(),
            height: $(this.ctx.el)
                .height(),
            ease: Expo.easeInOut
        }), TweenMax.to(this.loopContainer, 2, {
            left: "0%",
            top: "0%",
            ease: Expo.easeInOut
        }), TweenMax.to(this.loop, 2, {
            left: "0px",
            top: "0px",
            ease: Expo.easeInOut,
            onComplete: function () {
                t.bigLoop = H.createVideo(t.data.videoBig + "" + H.videoExt + "?r=" + Math.floor(1e3 * Math.random()), {
                        position: "absolute",
                        visibility: "hidden"
                    }, t.loopContainer), t.bigLoop.preload = "auto", TweenMax.set(t.bigLoop, {
                        scale: 1.01
                    }), site.isMute && (t.bigLoop.muted = !0), H.resizeToContainer(t.bigLoop, t.loopContainer, 1e3 / 564, !0, !0, 1.01), t.bigLoop.play(), t.bigLoop.pause(), $(t.bigLoop)
                    .bind("ended", function () {
                        t.ctx.closeOpenLoop()
                    }), $(t.bigLoop)
                    .bind("loadeddata", function () {
                        $(t.bigLoop)
                            .unbind("loadeddata"), t.shouldProgress = !0, t.onProgress()
                    })
            }
        }), TweenMax.to(site.cursor.paramsBigYellow, .5, {
            startAngle: 2 * Math.PI,
            endAngle: 2 * Math.PI,
            ease: Expo.easeOut,
            onComplete: function () {
                site.cursor.paramsBigYellow.startAngle = 0, site.cursor.paramsBigYellow.endAngle = 0
            }
        }), site.cursor.goPlayLoading()
    },
    onProgress: function () {
        var t = this,
            e = t.bigLoop.buffered.end(0) / t.bigLoop.duration;
        console.log(e), e > .2 ? (this.shouldProgress = !1, this.showBigLoop(), site.cursor.params.endAngle = 2 * Math.PI, TweenMax.to(site.cursor.params, .3, {
            startAngle: 2 * Math.PI,
            ease: Expo.easeOut,
            onComplete: function () {
                site.cursor.params.startAngle = site.cursor.params.endAngle = 0
            }
        })) : site.cursor.params.endAngle = 2 * Math.PI * (e / .2), this.shouldProgress && requestAnimationFrame($.proxy(this.onProgress, this))
    },
    showBigLoop: function () {
        this.isBigOpen = !0, this.bigLoop.play(), this.bigLoop.style.visibility = "visible", site.cursor.goClose(), this.shouldUpdate = !0, this.onUpdate()
    },
    onUpdate: function () {
        var t = this;
        if (t.bigLoop) {
            var e = t.bigLoop.currentTime / t.bigLoop.duration;
            site.cursor.paramsBigYellow.endAngle = 2 * Math.PI * e, site.cursor.timecode.innerHTML = Math.floor(t.bigLoop.currentTime) < 10 ? "00:00:00:0" + Math.floor(t.bigLoop.currentTime) : "00:00:00:" + Math.floor(t.bigLoop.currentTime)
        }
        this.shouldUpdate && requestAnimationFrame($.proxy(this.onUpdate, this))
    },
    close: function () {
        var t = this;
        this.isOpen = !1, this.isOver = !1, this.isBigOpen = !1, TweenMax.to([this.loopContainer, this.loopWrapper], 1, {
            width: $(this.ctx.el)
                .width() * parseFloat(this.data.width / 100),
            height: $(this.ctx.el)
                .height() * parseFloat(this.data.height / 100),
            ease: Expo.easeInOut
        }), TweenMax.to(this.loopContainer, 1, {
            left: t.data.left + "%",
            top: t.data.top + "%",
            ease: Expo.easeInOut,
            onComplete: function () {
                t.loopContainer.style.zIndex = "0"
            }
        });
        var e, i, n = $(this.ctx.el)
            .width() * parseFloat(this.data.width / 100),
            s = $(this.ctx.el)
            .height() * parseFloat(this.data.height / 100),
            o = n / s,
            r = 1.01,
            a = 1e3 / 564;
        a > o ? (i = s * r, e = i * a) : (e = n * r, i = e / a), TweenMax.to(this.loop, 1, {
            width: e,
            height: i,
            top: (s - i) / 2,
            left: (n - e) / 2,
            ease: Expo.easeInOut
        }), this.bigLoop && (this.shouldProgress = !1, this.shouldUpdate = !1, this.bigLoop.pause(), this.loopContainer.removeChild(this.bigLoop), this.bigLoop = null), TweenMax.to(site.cursor.paramsBigYellow, .5, {
            endAngle: 2 * Math.PI,
            startAngle: 2 * Math.PI,
            ease: Expo.easeOut,
            onComplete: function () {
                site.cursor.paramsBigYellow.startAngle = site.cursor.paramsBigYellow.endAngle = 0
            }
        }), this.loop.play(), site.cursor.goBackPlay()
    },
    animateIn: function (t) {
        this.start(), "left" == this.data.animate ? TweenMax.set(this.loopContainer, {
            width: 0
        }) : (TweenMax.set(this.loopContainer, {
            width: 0,
            x: $(this.ctx.el)
                .width() * parseFloat(this.data.width / 100)
        }), TweenMax.set(this.loopWrapper, {
            x: -$(this.ctx.el)
                .width() * parseFloat(this.data.width / 100)
        })), TweenMax.to(this.loopContainer, 1.5, {
            x: 0,
            width: $(this.ctx.el)
                .width() * parseFloat(this.data.width / 100),
            ease: Expo.easeInOut,
            delay: t
        }), TweenMax.to(this.loopWrapper, 1.5, {
            x: 0,
            ease: Expo.easeInOut,
            delay: t
        })
    },
    start: function () {
        var t = this;
        this.loop.loop = !0, this.loop.play(), this.resize()
    },
    resize: function () {
        var t = this;
        this.isOpen ? (this.loopContainer.style.width = this.loopWrapper.style.width = this.loop.style.width = $(this.ctx.el)
            .width() + "px", this.loopContainer.style.height = this.loopWrapper.style.height = this.loop.style.height = $(this.ctx.el)
            .height() + "px") : (this.loopContainer.style.width = this.loopWrapper.style.width = $(this.ctx.el)
            .width() * parseFloat(this.data.width / 100) + "px", this.loopContainer.style.height = this.loopWrapper.style.height = $(this.ctx.el)
            .height() * parseFloat(this.data.height / 100) + "px", H.resizeToContainer(this.loop, this.loopContainer, 1e3 / 564, !0, !0, 1.01)), t.bigLoop && H.resizeToContainer(t.bigLoop, t.loopContainer, 1e3 / 564, !0, !0, 1.01)
    }
};
var NC = NC || {};
NC.Map = function (t, e) {
    this.context = e, this.data = t, this.prevAngle = 0, this.trans = {
        x: 0,
        y: 0,
        scale: 1,
        rotate: 0,
        mouseScale: 0
    }, this.transCenter = {
        x: 0,
        y: 0
    }, this.currTurn = 0, this.init()
}, NC.Map.prototype = {
    init: function () {
        var t = this;
        this.el = H.createEl("div", {
                position: "absolute",
                top: "0px",
                left: "0px",
                width: "100%",
                height: "100%",
                zIndex: "98",
                opacity: "0"
            }), this.wrapper = H.createEl("div", {
                position: "absolute",
                top: "0px",
                left: "0px",
                width: "100%",
                height: "100%"
            }, this.el), this.container = H.createEl("div", {
                position: "absolute",
                top: "0px",
                left: "0px",
                width: "1237px",
                height: "849px"
            }, this.wrapper), this.map = H.createEl("canvas", {
                position: "absolute",
                top: "0px",
                left: "0px"
            }, this.wrapper), this.map.width = site.screenWidth, this.map.height = site.screenHeight, this.ctx = this.map.getContext("2d"), this.mapImg = new Image, this.mapImg.src = "assets/img/map/map.png", this.gradient = new Image, this.gradient.src = "assets/img/map/gradient.png", this.two = new Two({
                width: 1237,
                height: 849,
                fullscreen: !0,
                type: Two.Types.svg
            })
            .appendTo(this.container), this.two.renderer.domElement.style.position = "absolute", this.two.renderer.domElement.style.left = "0px", this.two.renderer.domElement.style.top = "0px", this.groupPos = this.two.makeGroup(), this.groupScale = this.two.makeGroup(), $.get(this.data.route, function (e) {
                t.route1 = t.two.interpret($(e)
                    .find("svg")[0]), t.route1.stroke = "#c8ff00", t.route1.linewidth = 2, t.route1.ending = 0, t.route1Path = t.route1.clone(), t.route1Path.stroke = "#ffffff", t.route1Path.linewidth = 1.5, t.route1Path.noFill(), t.route1Path.ending = 0, t.group = t.two.makeGroup(), t.group.add(t.route1Path), t.group.add(t.route1), t.groupPos.add(t.group), t.two.update();
                var i = getFirstChild(t.route1.children),
                    n = getFirstChild(i.children);
                t.routeVertices = n.vertices, t.startGroup = t.two.makeGroup(), t.startCircleBg = t.two.makeCircle(t.routeVertices[0].x, t.routeVertices[0].y, 10), t.startCircleBg.fill = "rgba(0,0,0,0.2)", t.startCircleBg.stroke = "rgba(255,255,255,0.5)", t.startCircleBg.linewidth = 1, t.startGroup.add(t.startCircleBg), t.startCircle = t.two.makeCircle(t.routeVertices[0].x, t.routeVertices[0].y, 2), t.startCircle.fill = "#ffffff", t.startCircle.noStroke(), t.startGroup.add(t.startCircle), t.groupPos.add(t.startGroup), t.endGroup = t.two.makeGroup(), t.endCircleBg = t.two.makeCircle(t.routeVertices[t.routeVertices.length - 1].x, t.routeVertices[t.routeVertices.length - 1].y, 15), t.endCircleBg.fill = "rgba(0,0,0,0.2)", t.endCircleBg.stroke = "rgba(255,255,255,0.5)", t.endCircleBg.linewidth = 1, t.endGroup.add(t.endCircleBg), t.endCircle = t.two.makeCircle(t.routeVertices[t.routeVertices.length - 1].x, t.routeVertices[t.routeVertices.length - 1].y, 4), t.endCircle.fill = "#ffffff", t.endCircle.noStroke(), t.endGroup.add(t.endCircle), t.groupPos.add(t.endGroup), t.currentGroup = t.two.makeGroup(), t.currentGroup.translation.x = t.routeVertices[0].x, t.currentGroup.translation.y = t.routeVertices[0].y, t.currentCircleBg = t.two.makeCircle(0, 0, 30), t.currentCircleBg.fill = "rgba(0,0,0,0.2)", t.currentCircleBg.stroke = "rgba(255,255,255,0.5)", t.currentCircleBg.linewidth = 1, t.currentCircleBg.scale = 0, t.currentGroup.add(t.currentCircleBg), t.currentCircle = t.two.makeCircle(0, 0, 4), t.currentCircle.fill = "#ffffff", t.currentCircle.noStroke(), t.currentGroup.add(t.currentCircle), t.groupPos.add(t.currentGroup), t.groupScale.add(t.groupPos), TweenMax.to(t.currentCircleBg, 1.5, {
                    scale: 1,
                    ease: Expo.easeOut,
                    repeat: -1
                });
                var s = Math.abs(t.routeVertices[t.routeVertices.length - 1].x - t.routeVertices[0].x) / 2 + t.routeVertices[0].x,
                    o = Math.abs(t.routeVertices[t.routeVertices.length - 1].y - t.routeVertices[0].y) / 2 + t.routeVertices[t.routeVertices.length - 1].y;
                t.transCenter.x = s, t.transCenter.y = o, t.groupPos.translation.x = -s, t.groupPos.translation.y = -o, t.two.update()
            })
    },
    pause: function () {
        this.two && this.two.pause()
    },
    resume: function () {
        this.two && this.two.play()
    },
    animateIn: function () {
        var t = this;
        this.two.bind("update", function (e) {
                t.loop()
            })
            .play(), TweenMax.to(this.el, 1, {
                opacity: 1,
                delay: 1
            })
    },
    loop: function () {
        var t = this;
        t.trans.x = -t.transCenter.x + site.screenWidth / 2, t.trans.y = -t.transCenter.y + site.screenHeight / 2, t.groupPos.translation.x = -t.transCenter.x, t.groupPos.translation.y = -t.transCenter.y, t.groupScale.translation.x = site.screenWidth / 2, t.groupScale.translation.y = site.screenHeight / 2, t.groupScale.scale = t.trans.scale + t.trans.mouseScale, t.groupScale.rotation = t.trans.rotate * Math.PI / 180, t.ctx.globalCompositeOperation = "source-over", t.ctx.clearRect(0, 0, site.screenWidth, site.screenHeight), t.ctx.globalAlpha = .3, t.ctx.save(), t.ctx.translate(site.screenWidth / 2, site.screenHeight / 2), t.ctx.rotate(t.trans.rotate * Math.PI / 180), t.ctx.scale(t.trans.scale + t.trans.mouseScale, t.trans.scale + t.trans.mouseScale), t.ctx.translate(-site.screenWidth / 2, -site.screenHeight / 2), t.ctx.translate(t.trans.x, t.trans.y), t.ctx.drawImage(t.mapImg, -315, -321, 1876, 1505), t.ctx.restore(), t.ctx.globalAlpha = 1, t.ctx.globalCompositeOperation = "destination-out", t.ctx.drawImage(t.gradient, 0, 0, site.screenWidth, site.screenHeight)
    },
    animateOut: function () {
        var t = this;
        TweenMax.to(this.el, 1, {
            opacity: 0,
            onComplete: function () {
                t.two.clear(), t.two = null, TweenMax.killAll(), t.el.removeChild(t.wrapper)
            }
        })
    },
    updateRoute: function (t) {
        var e = this,
            i;
        if (1 > t) {
            if (i = Math.floor(this.routeVertices.length * t), i < this.routeVertices.length - 1) {
                var n = e.routeVertices[i],
                    s = e.routeVertices[i + 1],
                    o = (Math.atan2(-(s.y - n.y), s.x - n.x) - Math.PI / 2) * (180 / Math.PI);
                Math.abs(this.prevAngle - o) > 5 && (TweenMax.to(this.trans, 2, {
                    rotate: o,
                    ease: Expo.easeOut
                }), this.context.turnbyturn.streets.innerHTML = this.data.nav[this.currTurn].copy, this.context.turnbyturn.arrow.src = "assets/img/nav/" + this.data.nav[this.currTurn].type + ".png", this.currTurn++), this.prevAngle = o
            }
        } else i = this.routeVertices[this.routeVertices.length - 1], this.context.turnbyturn.stop();
        TweenMax.to(this.transCenter, 5, {
            x: e.routeVertices[i].x,
            y: e.routeVertices[i].y,
            ease: Expo.easeOut
        }), TweenMax.to(this.currentGroup.translation, 2, {
            x: e.routeVertices[i].x,
            y: e.routeVertices[i].y,
            ease: Expo.easeOut
        }), this.route1.ending = t - .001
    },
    startAnimation: function () {
        var t = this;
        TweenMax.to(this.route1Path, 1, {
            ending: 1,
            ease: Linear.easeNone,
            delay: 2
        }), TweenMax.to(this.transCenter, 3, {
            x: 210,
            y: 636,
            ease: Expo.easeInOut,
            delay: 2.5
        });
        var e = t.routeVertices[0],
            i = t.routeVertices[1],
            n = (Math.atan2(-(i.y - e.y), i.x - e.x) - Math.PI / 2) * (180 / Math.PI);
        TweenMax.to(this.trans, 3, {
            scale: 2,
            rotate: n,
            ease: Expo.easeInOut,
            delay: 2.5
        }), this.prevAngle = n, this.context.turnbyturn.streets.innerHTML = this.data.nav[0].copy, this.context.turnbyturn.arrow.src = "assets/img/nav/" + this.data.nav[0].type + ".png", this.currTurn++
    },
    resize: function () {
        this.map.width = site.screenWidth, this.map.height = site.screenHeight, this.ctx = this.map.getContext("2d")
    }
};
var NC = NC || {};
NC.Cursor = function () {
    this.params = {
        startAngle: 0,
        endAngle: 0,
        alpha: 1,
        color: "#ffff00"
    }, this.params2 = {
        startAngle: 0,
        endAngle: 0,
        size: 0
    }, this.paramsBig = {
        startAngle: 0,
        endAngle: 0
    }, this.paramsBigYellow = {
        startAngle: 0,
        endAngle: 0,
        timecode: 0
    }, this.noise = new ImprovedNoise, this.nSpeed = 0, this.isHidden = !1, this.shouldLoop = !0, this.isPaused = !1, this.init()
}, NC.Cursor.prototype = {
    init: function () {
        var t = this;
        this.el = H.createEl("div", {
            position: "absolute",
            top: "0px",
            left: "0px",
            marginLeft: "-35px",
            marginTop: "-35px",
            width: "70px",
            height: "70px",
            zIndex: "95",
            pointerEvents: "none"
        }), isMobile.any() && (this.el.style.left = "50%", this.el.style.top = "25%"), this.circle = H.createEl("div", {
            position: "absolute",
            top: "0px",
            left: "0px",
            width: "68px",
            height: "68px",
            borderRadius: "50%",
            overflow: "hidden"
        }, this.el), this.canvas = H.createEl("canvas", {
            position: "absolute",
            top: "50%",
            left: "50%",
            marginLeft: "-70px",
            marginTop: "-70px"
        }, this.el), this.canvas.width = 140, this.canvas.height = 140, this.ctx = this.canvas.getContext("2d"), this.ctx.webkitImageSmoothingEnabled = !0, this.mainLoading = H.createEl("div", {
            position: "absolute",
            top: "0px",
            paddingTop: "27px",
            left: "0px",
            width: "70px",
            height: "70px",
            textAlign: "center",
            fontSize: "10px",
            color: "#ffffff",
            opacity: "0",
            letterSpacing: "1px",
            fontFamily: "bebas-exp,sans-serif"
        }, this.circle), this.mainLoading.innerHTML = "LOADING", this.fullscreen = H.createEl("div", {
            position: "absolute",
            top: "0px",
            paddingTop: "17px",
            left: "0px",
            width: "70px",
            height: "70px",
            textAlign: "center",
            fontSize: "12px",
            color: "rgba(255,255,255,0.3)",
            opacity: "0",
            letterSpacing: "1px",
            fontFamily: "bebas-exp,sans-serif",
            fontWeight: "200"
        }, this.circle), this.fullscreen.innerHTML = "FULL<br/>SCREEN", this.listen = H.createEl("div", {
            position: "absolute",
            top: "0px",
            left: "0px",
            width: "70px",
            height: "70px",
            opacity: "0"
        }, this.el), this.listenLines = [];
        for (var e = 0; 6 > e; e++) {
            var i = H.createEl("div", {
                position: "absolute",
                top: "20px",
                height: "30px",
                width: "1px",
                left: 3 * e + 27 + "px",
                backgroundColor: "rgba(255,255,255,0.3)"
            }, t.listen);
            t.listenLines.push({
                el: i,
                offset: .5 * e
            })
        }
        this.respond = H.createImg("assets/img/cursor/respond.png", {
                position: "absolute",
                top: "0px",
                left: "0px",
                opacity: "0"
            }, this.circle, site.loader), this.respondRed = H.createImg("assets/img/cursor/respondRed.png", {
                position: "absolute",
                top: "0px",
                left: "0px",
                opacity: "0"
            }, this.circle, site.loader), this.loading = H.createEl("div", {
                position: "absolute",
                top: "0px",
                paddingTop: "20px",
                left: "0px",
                width: "70px",
                height: "70px",
                textAlign: "center",
                fontSize: "30px",
                color: "#ffffff",
                opacity: "0",
                fontFamily: "ds-italic-exp,sans-serif",
                fontWeight: "200"
            }, this.el), this.loading.innerHTML = "00", this.calcRoute = H.createEl("div", {
                position: "absolute",
                top: "110px",
                left: "45px",
                fontFamily: "bebas-exp,sans-serif",
                fontSize: "12px",
                color: "#ffffff",
                fontStyle: "italic",
                opacity: "0",
                width: "300px",
                letterSpacing: "1px"
            }, this.el), this.calcRoute.innerHTML = "CALCULATING  ROUTE...", this.search = H.createImg("assets/img/cursor/search.png", {
                position: "absolute",
                top: "-1px",
                left: "-1px",
                opacity: "0"
            }, this.el, site.loader), this.rec = H.createEl("div", {
                position: "absolute",
                top: "50%",
                left: "50%",
                width: "14px",
                height: "14px",
                marginLeft: "-7px",
                marginTop: "-7px",
                backgroundColor: "#ff0000",
                borderRadius: "50%"
            }, this.el), TweenMax.set(this.rec, {
                x: -4,
                y: -2,
                opacity: 0
            }), this.play = H.createImg("assets/img/cursor/play.png", {
                position: "absolute",
                top: "50%",
                left: "50%",
                marginLeft: "-10px",
                marginTop: "-10px",
                opacity: "0"
            }, this.el, site.loader), this.timecode = H.createEl("div", {
                position: "absolute",
                top: "-80px",
                left: "50%",
                width: "200px",
                marginLeft: "-100px",
                fontSize: "16px",
                fontFamily: "ds-italic-exp,sans-serif",
                color: "#ffffff",
                opacity: "0.5",
                textAlign: "center",
                opacity: "0"
            }, this.el), this.timecode.innerHTML = "00:00:00:00", this.close = H.createImg("assets/img/cursor/close.png", {
                position: "absolute",
                top: "50%",
                left: "50%",
                marginLeft: "-10px",
                marginTop: "-10px",
                opacity: "0"
            }, this.el, site.loader), this.upCopy = H.createEl("div", {
                position: "absolute",
                top: "0px",
                paddingTop: "17px",
                left: "0px",
                width: "70px",
                height: "70px",
                textAlign: "center",
                fontSize: "12px",
                color: "rgba(255,255,255,0.3)",
                opacity: "0",
                letterSpacing: "1px",
                fontFamily: "bebas-exp,sans-serif",
                fontWeight: "200"
            }, this.circle), this.upCopy.innerHTML = "UPLOAD<br/>FOOTAGE", this.completeCopy = H.createEl("div", {
                position: "absolute",
                top: "0px",
                paddingTop: "17px",
                left: "0px",
                width: "70px",
                height: "70px",
                textAlign: "center",
                fontSize: "12px",
                color: "rgba(255,255,255,0.3)",
                opacity: "0",
                letterSpacing: "1px",
                fontFamily: "bebas-exp,sans-serif",
                fontWeight: "200"
            }, this.circle), this.completeCopy.innerHTML = "UPLOAD<br/>COMPLETE", this.nightcrawl = H.createEl("div", {
                position: "absolute",
                top: "0px",
                paddingTop: "17px",
                left: "0px",
                width: "70px",
                height: "70px",
                textAlign: "center",
                fontSize: "12px",
                color: "rgba(255,255,255,0.3)",
                opacity: "0",
                letterSpacing: "1px",
                fontFamily: "bebas-exp,sans-serif",
                fontWeight: "200"
            }, this.circle), this.nightcrawl.innerHTML = "NIGHT<br/>CRAWL", this.captureFootage = H.createEl("div", {
                position: "absolute",
                top: "0px",
                paddingTop: "17px",
                left: "0px",
                width: "70px",
                height: "70px",
                textAlign: "center",
                fontSize: "12px",
                color: "rgba(255,255,255,0.3)",
                opacity: "0",
                letterSpacing: "1px",
                fontFamily: "bebas-exp,sans-serif",
                fontWeight: "200"
            }, this.circle), this.captureFootage.innerHTML = "CAPTURE<br/>FOOTAGE", this.download = H.createEl("div", {
                position: "absolute",
                width: "56px",
                height: "6px",
                top: "50%",
                left: "50%",
                marginLeft: "-28px",
                marginTop: "-3px",
                backgroundColor: "rgba(255,255,255,0.3)",
                opacity: "0"
            }, this.el), this.downloadBar = H.createEl("div", {
                position: "absolute",
                top: "0px",
                left: "0px",
                height: "6px",
                width: "0px",
                backgroundColor: "#ffffff"
            }, this.download), isMobile.any() || $(window)
            .mousemove(function (e) {
                t.onMove(e.originalEvent)
            }), this.loop()
    },
    animateIn: function () {
        TweenMax.to(this.params2, 1, {
            endAngle: 2 * Math.PI,
            ease: Expo.easeOut
        }), TweenMax.set(this.mainLoading, {
            x: 70,
            opacity: 1
        }), TweenMax.to(this.mainLoading, .6, {
            x: 0,
            ease: Expo.easeOut,
            delay: 1
        })
    },
    hide: function () {
        this.isHidden || (TweenMax.to(this.el, .5, {
            scale: 0,
            ease: Expo.easeOut
        }), document.body.style.cursor = "default", this.isHidden = !0)
    },
    show: function () {
        TweenMax.to(this.el, .5, {
            scale: 1,
            ease: Expo.easeOut
        }), document.body.style.cursor = "url(./assets/img/cursor/empty.png),default", this.isHidden = !1
    },
    loop: function () {
        var t = this;
        this.ctx.clearRect(0, 0, 140, 140), this.ctx.globalAlpha = .3, this.ctx.strokeStyle = "#ffffff", this.ctx.save(), this.ctx.translate(70, 70), this.ctx.rotate(-Math.PI / 2), this.ctx.lineWidth = 1, this.ctx.beginPath(), this.ctx.arc(0, 0, 34 + this.params2.size, this.params2.startAngle, this.params2.endAngle), this.ctx.stroke(), this.ctx.restore(), this.ctx.globalAlpha = this.params.alpha, this.ctx.strokeStyle = this.params.color, this.ctx.save(), this.ctx.translate(70, 70), this.ctx.rotate(-Math.PI / 2), this.ctx.lineWidth = 2, this.ctx.beginPath(), this.ctx.arc(0, 0, 34, this.params.startAngle, this.params.endAngle), this.ctx.stroke(), this.ctx.restore(), this.ctx.globalAlpha = .3, this.ctx.strokeStyle = "#ffffff", this.ctx.save(), this.ctx.translate(70, 70), this.ctx.rotate(-Math.PI / 2), this.ctx.lineWidth = 1, this.ctx.beginPath(), this.ctx.arc(0, 0, 67, this.paramsBig.startAngle, this.paramsBig.endAngle), this.ctx.stroke(), this.ctx.restore(), this.ctx.globalAlpha = 1, this.ctx.strokeStyle = "#ffff00", this.ctx.save(), this.ctx.translate(70, 70), this.ctx.rotate(-Math.PI / 2), this.ctx.lineWidth = 4, this.ctx.beginPath(), this.ctx.arc(0, 0, 67, this.paramsBigYellow.startAngle, this.paramsBigYellow.endAngle), this.ctx.stroke(), this.ctx.restore();
        for (var e = 0; e < this.listenLines.length; e++) {
            var i = t.listenLines[e],
                n = 2.5 * t.noise.noise(i.offset + t.nSpeed, 0, 0);
            TweenMax.set(i.el, {
                scaleY: n / 2 + .5
            })
        }
        t.nSpeed += .05, this.shouldLoop && requestAnimationFrame($.proxy(this.loop, this))
    },
    pause: function () {
        this.shouldLoop = !1, this.isPaused = !0
    },
    resume: function () {
        this.shouldLoop = !0, this.isPaused = !1, this.loop()
    },
    lineYellow: function () {
        for (var t = this, e = 0; e < this.listenLines.length; e++) {
            var i = t.listenLines[e];
            i.el.style.backgroundColor = "#ffff00"
        }
    },
    lineGrey: function () {
        for (var t = this, e = 0; e < this.listenLines.length; e++) {
            var i = t.listenLines[e];
            i.el.style.backgroundColor = "rgba(255,255,255,0.3)"
        }
    },
    onMove: function (t) {
        this.mX = t.clientX, this.mY = t.clientY, this.isPaused || (TweenMax.set(this.el, {
            x: this.mX,
            y: this.mY
        }), this.mX < 210 && this.mY < 180 || this.mY > site.screenHeight - 100 ? this.isHidden || this.hide() : this.isHidden && this.show())
    },
    goFullscreen: function () {
        console.log("goFullscreen"), TweenMax.to(this.params, .5, {
            startAngle: 2 * Math.PI,
            ease: Expo.easeOut
        }), TweenMax.killTweensOf(this.mainLoading), TweenMax.to(this.mainLoading, .6, {
            x: -70
        }), TweenMax.set(this.fullscreen, {
            x: 70,
            opacity: 1
        }), TweenMax.to(this.fullscreen, .6, {
            x: 0,
            ease: Expo.easeOut
        })
    },
    goMainListen: function () {
        TweenMax.to(this.fullscreen, .6, {
            x: -70
        }), TweenMax.to(this.nightcrawl, .6, {
            x: -70
        }), TweenMax.to(this.listen, .6, {
            opacity: 1,
            delay: .3
        })
    },
    goRespond: function () {
        var t = this;
        TweenMax.set(this.respond, {
            x: 70,
            opacity: 1
        }), TweenMax.set(this.respondRed, {
            x: 0,
            opacity: 0
        }), TweenMax.to(this.listen, .3, {
            opacity: 0
        }), TweenMax.to(this.respond, .6, {
            x: 0,
            ease: Expo.easeOut
        }), TweenMax.set(this.params, {
            startAngle: 0,
            endAngle: 0,
            ease: Expo.easeOut
        }), this.params.alpha = 0, this.params.endAngle = 2 * Math.PI, TweenMax.to(this.params, .3, {
            alpha: 1,
            yoyo: !0,
            repeat: 4,
            onComplete: function () {
                TweenMax.to(t.params, .3, {
                    alpha: 1
                }), TweenMax.to(t.params, 6, {
                    startAngle: 2 * Math.PI,
                    delay: 1,
                    onComplete: function () {
                        t.params.alpha = 0, t.params.endAngle = 2 * Math.PI, t.params.startAngle = 0, t.params.color = "#ff0000", t.respond.style.color = "#ff0000", TweenMax.to(t.respondRed, .5, {
                            alpha: 1
                        }), TweenMax.to(t.params, .5, {
                            alpha: 1,
                            yoyo: !0,
                            repeat: 5,
                            onComplete: function () {
                                t.params.endAngle = 0, t.params.startAngle = 0, t.params.color = "#ffff00"
                            }
                        })
                    }
                })
            }
        })
    },
    goListen: function () {
        var t = this;
        TweenMax.to(this.listen, .3, {
            opacity: 1,
            delay: .3
        }), TweenMax.to(this.respond, .6, {
            x: -70,
            ease: Expo.easeOut
        }), TweenMax.to(this.respondRed, .6, {
            x: -70,
            ease: Expo.easeOut,
            onComplete: function () {
                t.respondRed.style.opacity = "0"
            }
        })
    },
    goLoading: function () {
        var t = this;
        TweenMax.to(this.listen, .3, {
            opacity: 0
        }), TweenMax.to(this.loading, .3, {
            opacity: 1,
            delay: .3
        }), TweenMax.to(this.respond, .6, {
            x: -70,
            ease: Expo.easeOut
        }), TweenMax.to(this.respondRed, .6, {
            x: -70,
            ease: Expo.easeOut
        }), TweenMax.set(this.calcRoute, {
            x: -50
        }), TweenMax.to(this.calcRoute, 1, {
            opacity: 1,
            x: 0,
            ease: Expo.easeOut
        }), TweenMax.killTweensOf(this.params), TweenMax.to(this.params, .5, {
            alpha: 0,
            ease: Expo.easeOut,
            onComplete: function () {
                t.params.startAngle = 0, t.params.endAngle = 0, t.params.alpha = 1, t.params.color = "#ffff00"
            }
        })
    },
    goSearch: function () {
        TweenMax.to(this.loading, .3, {
            opacity: 0
        }), TweenMax.to(this.search, .3, {
            opacity: 1,
            delay: .3
        }), TweenMax.to(this.params, 1, {
            startAngle: 2 * Math.PI,
            endAngle: 2 * Math.PI,
            ease: Expo.easeOut
        }), TweenMax.to(this.calcRoute, 1, {
            opacity: 0,
            x: 50,
            ease: Expo.easeOut
        })
    },
    goRec: function () {
        var t = this;
        setTimeout(function () {
            TweenMax.to(t.rec, .5, {
                x: 0,
                y: 0,
                opacity: 1,
                ease: Expo.easeOut
            })
        }, 2500), setTimeout(function () {
            TweenMax.to(t.rec, .5, {
                opacity: 0,
                repeat: -1,
                yoyo: !0
            })
        }, 3800), TweenMax.to(this.search, .5, {
            opacity: 0,
            ease: Expo.easeOut
        }), TweenMax.set(this.captureFootage, {
            x: 70,
            opacity: 1
        }), TweenMax.to(this.captureFootage, .5, {
            x: 0,
            ease: Expo.easeOut,
            onComplete: function () {
                setTimeout(function () {
                    TweenMax.to(t.captureFootage, .5, {
                        x: -70,
                        ease: Expo.easeOut
                    })
                }, 2e3)
            }
        })
    },
    goUpload: function () {
        this.downloadBar.style.width = "0px", TweenMax.killTweensOf(this.rec), TweenMax.to(this.rec, .6, {
            opacity: 0
        }), TweenMax.to(this.download, .6, {
            opacity: 1,
            delay: 2
        }), TweenMax.to(this.download, .6, {
            opacity: 0,
            delay: 5
        }), TweenMax.to(this.downloadBar, 3, {
            width: "55px",
            delay: 2
        }), TweenMax.set(this.upCopy, {
            x: 70,
            opacity: 1
        }), TweenMax.to(this.upCopy, .5, {
            x: 0,
            ease: Expo.easeOut
        }), TweenMax.to(this.upCopy, .5, {
            x: -70,
            ease: Expo.easeOut,
            delay: 2
        }), TweenMax.set(this.completeCopy, {
            x: 70,
            opacity: 1
        }), TweenMax.to(this.completeCopy, .5, {
            x: 0,
            ease: Expo.easeOut,
            delay: 5
        })
    },
    goPlay: function () {
        var t = this;
        TweenMax.to(this.completeCopy, .5, {
            x: -70,
            ease: Expo.easeOut
        }), TweenMax.to(this.play, .6, {
            opacity: 1,
            delay: .3
        }), TweenMax.to(this.timecode, .6, {
            opacity: 1,
            delay: .3
        }), TweenMax.to(this.paramsBig, 1, {
            endAngle: 2 * Math.PI,
            ease: Expo.easeOut
        }), TweenMax.killTweensOf(this.params)
    },
    goPlayLoading: function () {
        TweenMax.to(this.play, .6, {
            opacity: 0
        }), TweenMax.set(this.mainLoading, {
            x: 70,
            opacity: 1
        }), TweenMax.to(this.mainLoading, .3, {
            x: 0,
            ease: Expo.easeOut,
            delay: .3
        })
    },
    goClose: function () {
        TweenMax.to(this.mainLoading, .3, {
            x: -70,
            ease: Expo.easeOut
        }), TweenMax.to(this.close, .6, {
            opacity: 1
        })
    },
    goBackPlay: function () {
        TweenMax.to(this.mainLoading, .3, {
            x: -70,
            ease: Expo.easeOut
        }), TweenMax.to(this.close, .6, {
            opacity: 0
        }), TweenMax.to(this.play, .6, {
            opacity: 1
        })
    },
    goNightCrawl: function () {
        TweenMax.to(this.play, .4, {
            opacity: 0
        }), TweenMax.set(this.nightcrawl, {
            x: 70,
            opacity: 1
        }), TweenMax.to(this.nightcrawl, .6, {
            x: 0,
            ease: Expo.easeOut
        }), TweenMax.to(this.timecode, .4, {
            opacity: 0,
            delay: .2
        }), TweenMax.killTweensOf(this.paramsBigYellow), TweenMax.to(this.paramsBig, .4, {
            endAngle: 0,
            ease: Expo.easeOut
        }), TweenMax.to(this.paramsBigYellow, .4, {
            endAngle: 0,
            ease: Expo.easeOut
        })
    },
    goBackListen: function () {
        TweenMax.to(this.play, .4, {
            opacity: 0
        }), TweenMax.to(this.listen, .4, {
            opacity: 1,
            delay: .2
        }), TweenMax.to(this.timecode, .4, {
            opacity: 0,
            delay: .2
        }), TweenMax.killTweensOf(this.paramsBigYellow), TweenMax.to(this.paramsBig, .4, {
            endAngle: 0,
            ease: Expo.easeOut
        }), TweenMax.to(this.paramsBigYellow, .4, {
            endAngle: 0,
            ease: Expo.easeOut
        })
    },
    goPlayFromListen: function () {
        var t = this;
        TweenMax.to(this.nightcrawl, .3, {
            x: -70,
            ease: Expo.easeOut
        }), TweenMax.to(this.play, .4, {
            opacity: 1,
            delay: .2
        }), TweenMax.to(this.timecode, .4, {
            opacity: 1,
            delay: .2
        }), TweenMax.to(this.paramsBig, .4, {
            endAngle: 2 * Math.PI,
            ease: Expo.easeOut
        }), t.params.startAngle = t.params.endAngle = 0
    }
};
var NC = NC || {};
NC.WeatherWidget = function (t) {
    this.init()
}, NC.WeatherWidget.prototype = {
    init: function () {
        var t = this;
        this.el = H.createEl("div", {
            position: "absolute",
            top: "0px",
            left: "0px",
            width: "210px",
            height: "140px",
            zIndex: "99"
        }), TweenMax.set(this.el, {
            x: -200
        }), this.location = H.createEl("div", {
            position: "relative",
            fontFamily: "Arial,sans-serif",
            fontSize: "16px",
            color: "rgba(255,255,255,0.8)",
            paddingLeft: "24px",
            marginTop: "17px"
        }, this.el), this.location.innerHTML = "Los Angeles, CA", this.containerTemp = H.createEl("div", {
            position: "absolute",
            top: "35px",
            left: "0px",
            opacity: "0"
        }, this.el), TweenMax.set(this.containerTemp, {
            rotationX: 0,
            opacity: 1,
            transformOrigin: "50% 50% -28px",
            perspective: 400
        });
        var e = new Date,
            i = e.getMinutes(),
            n, s;
        10 > i ? (n = "Monday 2:0" + i + " AM", s = "2:0" + i) : (n = "Monday 2:" + i + " AM", s = "2:" + i), this.caption = H.createEl("div", {
                position: "relative",
                fontFamily: "Arial,sans-serif",
                fontSize: "13px",
                color: "rgba(255,255,255,0.7)",
                paddingLeft: "24px",
                width: "210px",
                marginTop: "4px"
            }, this.containerTemp), this.caption.innerHTML = 'Clear Skies <span style="opacity:0.3;">' + n + "</span>", this.weatherImg = H.createImg("assets/img/exp/weather.png", {
                position: "relative",
                marginLeft: "20px",
                marginTop: "6px",
                opacity: "0.8"
            }, this.containerTemp), this.tempF = H.createEl("div", {
                position: "absolute",
                top: "17px",
                left: "70px",
                fontSize: "48px",
                fontFamily: "Arial,sans-serif",
                color: "rgba(255,255,255,0.8)"
            }, this.containerTemp), this.tempF.innerHTML = "75", this.f = H.createEl("div", {
                position: "absolute",
                top: "27px",
                left: "130px",
                fontSize: "12px",
                fontFamily: "Arial,sans-serif",
                color: "rgba(255,255,255,0.8)"
            }, this.containerTemp), this.f.innerHTML = "&deg;F", this.containerTime = H.createEl("div", {
                position: "absolute",
                top: "35px",
                left: "0px"
            }, this.el), TweenMax.set(this.containerTime, {
                rotationX: 90,
                opacity: 0,
                transformOrigin: "50% 50% -28px",
                perspective: 400
            }), this.caption2 = H.createEl("div", {
                position: "relative",
                fontFamily: "Arial,sans-serif",
                fontSize: "13px",
                color: "rgba(255,255,255,0.7)",
                paddingLeft: "24px",
                width: "210px",
                marginTop: "4px"
            }, this.containerTime), this.caption2.innerHTML = 'Monday <span style="opacity:0.3;">Clear Skies</span>', this.weatherImgSmall = H.createImg("assets/img/exp/weatherSmall.png", {
                position: "absolute",
                top: "3px",
                left: "147px",
                opacity: "0.4"
            }, this.containerTime), this.tempSmall = H.createEl("div", {
                position: "absolute",
                top: "3px",
                left: "167px",
                fontSize: "16px",
                fontFamily: "Arial,sans-serif",
                color: "rgba(255,255,255,0.4)"
            }, this.containerTime), this.tempSmall.innerHTML = "75&deg;", this.timeBig = H.createEl("div", {
                position: "absolute",
                top: "17px",
                left: "20px",
                fontSize: "48px",
                fontFamily: "Arial,sans-serif",
                color: "rgba(255,255,255,0.8)"
            }, this.containerTime), this.timeBig.innerHTML = s, this.am = H.createEl("div", {
                position: "absolute",
                top: "25px",
                left: "120px",
                fontSize: "20px",
                fontFamily: "arial,sans-serif",
                textDecoration: "underline",
                color: "rgba(255,255,255,0.8)"
            }, this.containerTime), this.am.innerHTML = "AM", setTimeout(function () {
                t.updateTime()
            }, 5e3), $.ajax({
                type: "GET",
                url: "http://api.openweathermap.org/data/2.5/weather?q=Los%20angeles",
                dataType: "json",
                success: $.proxy(t.onLoaded, t)
            }), $(this.el)
            .hover(function () {
                t.onOver()
            }, function () {
                t.onOut()
            })
    },
    onOver: function () {
        TweenMax.to(this.containerTime, 1, {
            rotationX: 0,
            opacity: 1,
            transformOrigin: "50% 50% -28px",
            perspective: 400,
            ease: Expo.easeOut
        }), TweenMax.to(this.containerTemp, 1, {
            rotationX: -90,
            opacity: 0,
            transformOrigin: "50% 50% -28px",
            perspective: 400,
            ease: Expo.easeOut
        })
    },
    onOut: function () {
        TweenMax.to(this.containerTime, 1, {
            rotationX: 90,
            opacity: 0,
            transformOrigin: "50% 50% -28px",
            perspective: 400,
            ease: Expo.easeOut
        }), TweenMax.to(this.containerTemp, 1, {
            rotationX: 0,
            opacity: 1,
            transformOrigin: "50% 50% -28px",
            perspective: 400,
            ease: Expo.easeOut
        })
    },
    onLoaded: function (t) {
        var e = this,
            i = 9 * (t.main.temp - 273.15) / 5 + 32;
        i = Math.floor(i.toFixed(2)), this.tempF.innerHTML = "" + i, this.tempSmall.innerHTML = "" + i + "&deg;"
    },
    toC: function () {
        var t = this;
        $(this.c)
            .unbind("click"), $(this.f)
            .click(function () {
                t.toF()
            }), this.c.style.opacity = "1", this.f.style.opacity = "0.3", TweenMax.to(this.tempC, 1, {
                rotationY: 0,
                opacity: 1,
                transformOrigin: "50% 50% -28px",
                perspective: 400,
                ease: Expo.easeOut
            }), TweenMax.to(this.tempF, 1, {
                rotationY: -90,
                opacity: .3,
                transformOrigin: "50% 50% -28px",
                perspective: 400,
                ease: Expo.easeOut
            })
    },
    toF: function () {
        var t = this;
        $(this.f)
            .unbind("click"), $(this.c)
            .click(function () {
                t.toC()
            }), this.f.style.opacity = "1", this.c.style.opacity = "0.3", TweenMax.to(this.tempC, 1, {
                rotationY: 90,
                opacity: .3,
                transformOrigin: "50% 50% -28px",
                perspective: 400,
                ease: Expo.easeOut
            }), TweenMax.to(this.tempF, 1, {
                rotationY: 0,
                opacity: 1,
                transformOrigin: "50% 50% -28px",
                perspective: 400,
                ease: Expo.easeOut
            })
    },
    animateIn: function () {
        TweenMax.to(this.el, 1, {
            x: 0,
            ease: Expo.easeOut
        })
    },
    updateTime: function () {
        var t = this,
            e = new Date,
            i = e.getMinutes(),
            n, s;
        10 > i ? (n = "Monday 2:0" + i + " AM", s = "2:0" + i) : (n = "Monday 2:" + i + " AM", s = "2:" + i), this.caption.innerHTML = 'Clear Skies <span style="opacity:0.3;">' + n + "</span>", this.timeBig.innerHTML = s, setTimeout(function () {
            t.updateTime()
        }, 5e3)
    }
};
var NC = NC || {};
NC.PoliceScanner = function () {
    this.init()
}, NC.PoliceScanner.prototype = {
    init: function () {
        var t = this;
        this.el = H.createEl("div", {
            position: "absolute",
            top: "50%",
            right: "5px",
            width: "202px",
            height: "108px",
            marginTop: "-54px",
            zIndex: "90"
        }), TweenMax.set(this.el, {
            x: 210
        }), this.title = H.createEl("div", {
            position: "absolute",
            top: "3px",
            left: "5px",
            fontFamily: "ds-italic-exp,sans-serif",
            fontSize: "12px",
            letterSpacing: "0.5px",
            color: "rgba(255,255,255,0.5)"
        }, this.el), this.title.innerHTML = "POLICE SCANNER", this.zeros = H.createEl("div", {
            position: "absolute",
            top: "20px",
            left: "25px",
            fontFamily: "ds-italic-exp,sans-serif",
            fontSize: "30px",
            letterSpacing: "0.5px",
            color: "rgba(255,255,255,0.2)"
        }, this.el), this.zeros.innerHTML = "888.888.888", this.zeros2 = H.createEl("div", {
            position: "absolute",
            top: "20px",
            left: "25px",
            fontFamily: "ds-italic-exp,sans-serif",
            fontSize: "30px",
            letterSpacing: "0.5px",
            color: "rgba(255,255,255,0.2)"
        }, this.el), this.zeros2.innerHTML = "XXX.XXX.XXX", this.nums = H.createEl("div", {
            position: "absolute",
            top: "20px",
            left: "25px",
            fontFamily: "ds-italic-exp,sans-serif",
            fontSize: "30px",
            letterSpacing: "0.5px",
            color: "rgba(255,255,255,0.6)"
        }, this.el), this.nums.innerHTML = "452.265.820", this.p = H.createEl("div", {
            position: "absolute",
            top: "27px",
            left: "7px",
            fontFamily: "ds-italic-exp,sans-serif",
            fontSize: "20px",
            letterSpacing: "0.5px",
            color: "rgba(255,255,255,0.3)"
        }, this.el), this.p.innerHTML = "P", this.hold = H.createEl("div", {
            position: "absolute",
            top: "52px",
            left: "2px",
            fontFamily: "bebas-exp,sans-serif",
            fontSize: "10px",
            letterSpacing: "0.35px",
            color: "rgba(255,255,255,0.3)",
            fontStyle: "italic"
        }, this.el), this.hold.innerHTML = "HOLD&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspSRCH&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspPRI L/O DLY DATA FLASH", this.colors = ["#fff300", "#ffe700", "#ffd100", "#ffbc00", "#ffa800", "#ff9200", "#ff7a00", "#ff6300", "#ff4900", "#ff3500", "#ff2200", "#ff0f00", "#ff0300"], this.colorsDiv = [];
        for (var e = 0; e < this.colors.length; e++) {
            var i = H.createEl("div", {
                position: "absolute",
                top: "80px",
                left: 3 + 13.5 * e + "px",
                width: "10px",
                height: "2px",
                backgroundColor: "rgba(255,255,255,0.2)"
            }, t.el);
            t.colorsDiv.push(i)
        }
        this.freqs = ["456.735.890", "435.825.637", "657.345.897", "900.783.576", "768.345.738", "886.944.024", "678.352.658"]
    },
    animateIn: function () {
        var t = this;
        this.el.style.visibility = "visible", t.nums.style.color = "rgba(255,255,255,0.6)", TweenMax.to(this.el, .5, {
            x: 0,
            ease: Expo.easeOut
        }), this.to = setTimeout(function () {
            t.changeFreq()
        }, 1e3 * Math.random() + 100)
    },
    startFreq: function () {
        var t = this;
        t.to || (this.to = setTimeout(function () {
            t.changeFreq()
        }, 1e3 * Math.random() + 100)), t.nums.style.color = "rgba(255,255,255,0.6)"
    },
    stopFreq: function () {
        var t = this;
        clearTimeout(t.to), t.to = null, t.nums.style.color = "#ff0000"
    },
    animateOut: function () {
        var t = this;
        TweenMax.to(this.el, .5, {
            x: 210,
            ease: Expo.easeOut,
            onComplete: function () {
                t.el.style.visibility = "hidden";
                for (var e = 0; e < t.colorsDiv.length; e++) {
                    var i = t.colorsDiv[e];
                    i.style.backgroundColor = "rgba(255,255,255,0.2)"
                }
                t.stopFreq(), t.to = null
            }
        })
    },
    changeFreq: function () {
        var t = this;
        this.nums.innerHTML = this.freqs[Math.floor(Math.random() * this.freqs.length)], this.to = setTimeout(function () {
            t.changeFreq()
        }, 1e3 * Math.random() + 100)
    },
    updatePerc: function (t) {
        for (var e = this, i = 0; i < this.colorsDiv.length; i++) {
            var n = e.colorsDiv[i];
            n.style.backgroundColor = i / e.colors.length < t ? e.colors[i] : "rgba(255,255,255,0.2)"
        }
    }
};
var NC = NC || {};
NC.TurnByTurn = function () {
    this.init(), this.mphData = {
        value: 0
    }
}, NC.TurnByTurn.prototype = {
    init: function () {
        var t = this;
        this.el = H.createEl("div", {
            position: "absolute",
            top: "20px",
            right: "25px",
            width: "250px",
            height: "80px",
            zIndex: "90",
            visibility: "hidden"
        }), TweenMax.set(this.el, {
            x: 260
        }), this.streets = H.createEl("div", {
            position: "absolute",
            top: "5px",
            right: "30px",
            width: "250px",
            textAlign: "right",
            fontFamily: "bebas-exp,sans-serif",
            fontSize: "12px",
            color: "#ffffff",
            fontStyle: "italic",
            letterSpacing: "1px",
            opacity: "0.5"
        }, this.el), this.streets.innerHTML = "HILL STREET & OLIVE STREET", this.num = H.createEl("div", {
            position: "absolute",
            top: "32px",
            right: "30px",
            fontSize: "30px",
            color: "#ffffff",
            fontFamily: "ds-italic-exp,sans-serif",
            opacity: "0.5"
        }, this.el), this.num.innerHTML = "0", this.mph = H.createEl("div", {
            position: "absolute",
            top: "43px",
            right: "0px",
            color: "#ffffff",
            fontStyle: "italic",
            fontFamily: "bebas-exp,sans-serif",
            fontSize: "11px",
            opacity: "0.5"
        }, this.el), this.mph.innerHTML = "MPH", this.arrow = H.createImg("assets/img/nav/arrowStraight.png", {
            position: "absolute",
            top: "0px",
            right: "0px"
        }, this.el)
    },
    animateIn: function () {
        var t = this;
        this.el.style.visibility = "visible", TweenMax.to(this.el, .5, {
            x: 0,
            ease: Expo.easeOut
        }), TweenMax.to(this.mphData, 2, {
            value: Math.floor(10 * Math.random() + 55),
            ease: Expo.easeIn,
            onComplete: function () {
                t.updateMPH()
            },
            onUpdate: function () {
                t.num.innerHTML = Math.floor(t.mphData.value) + ""
            }
        })
    },
    updateMPH: function () {
        var t = this;
        TweenMax.to(this.mphData, 1, {
            value: Math.floor(20 * Math.random() + 55),
            onComplete: function () {
                t.updateMPH()
            },
            onUpdate: function () {
                t.num.innerHTML = Math.floor(t.mphData.value) + ""
            }
        })
    },
    stop: function () {
        TweenMax.killTweensOf(this.mph), TweenMax.to(this.mphData, 1, {
            value: 0,
            ease: Expo.easeOut
        })
    },
    animateOut: function () {
        var t = this;
        TweenMax.to(this.el, .5, {
            x: 260,
            ease: Expo.easeOut,
            onComplete: function () {
                t.el.style.visibility = "hidden"
            }
        })
    }
};
var NC = NC || {};
NC.VolumeUp = function () {
    this.init(), this.numData = {
        value: 0
    }
}, NC.VolumeUp.prototype = {
    init: function () {
        var t = this;
        this.el = H.createEl("div", {
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "202px",
            height: "166px",
            marginTop: "-83px",
            marginLeft: "-101px",
            zIndex: "90",
            visibility: "hidden"
        }), this.volume = H.createImg("assets/img/volume.png", {
            position: "absolute",
            top: "0px",
            left: "50%",
            marginLeft: "-28px"
        }, this.el), this.tagline = H.createEl("div", {
            position: "absolute",
            top: "84px",
            left: "0px",
            width: "202px",
            textAlign: "center",
            fontFamily: "bebas-exp,sans-serif",
            fontSize: "14px",
            letterSpacing: "0px",
            color: "#ffff00"
        }, this.el), this.tagline.innerHTML = "TURN YOUR VOLUME UP", this.bottomline = H.createEl("div", {
            position: "absolute",
            top: "140px",
            left: "0px",
            width: "202px",
            textAlign: "center",
            fontFamily: "ds-italic-exp,sans-serif",
            fontSize: "13px",
            letterSpacing: "1px",
            color: "rgba(255,255,255,0.5)"
        }, this.el), this.bottomline.innerHTML = "ADJUSTING FREQUENCY", this.zeros = H.createEl("div", {
            position: "absolute",
            top: "110px",
            left: "0px",
            width: "202px",
            textAlign: "center",
            fontFamily: "ds-italic-exp,sans-serif",
            fontSize: "30px",
            letterSpacing: "0.5px",
            color: "rgba(255,255,255,0.2)"
        }, this.el), this.zeros.innerHTML = "888.888.888", this.zeros2 = H.createEl("div", {
            position: "absolute",
            top: "110px",
            left: "0px",
            width: "202px",
            textAlign: "center",
            fontFamily: "ds-italic-exp,sans-serif",
            fontSize: "30px",
            letterSpacing: "0.5px",
            color: "rgba(255,255,255,0.2)"
        }, this.el), this.zeros2.innerHTML = "XXX.XXX.XXX", this.nums = H.createEl("div", {
            position: "absolute",
            top: "110px",
            left: "0px",
            width: "202px",
            textAlign: "center",
            fontFamily: "ds-italic-exp,sans-serif",
            fontSize: "30px",
            letterSpacing: "0.5px",
            color: "rgba(255,255,255,0.6)"
        }, this.el), this.nums.innerHTML = "000.000.000"
    },
    animateIn: function () {
        var t = this;
        this.el.style.visibility = "visible", TweenMax.set(this.el, {
            y: 50,
            opacity: 0
        }), TweenMax.to(this.el, 1, {
            y: 0,
            opacity: 1,
            ease: Expo.easeOut
        }), TweenMax.delayedCall(.5, function () {
            soundManager.start("static")
        }), TweenMax.to(this.numData, 7, {
            bezier: [{
                value: 101214563
            }, {
                value: 746380029
            }, {
                value: 323047561
            }],
            ease: Expo.easeInOut,
            delay: 2,
            onUpdate: function () {
                Math.random() > .85 && t.updateNum()
            }
        })
    },
    updateNum: function () {
        for (var t = Math.floor(Math.abs(this.numData.value)) + "", e = 9 - t.length, i = 0; e > i; i++) t = "0" + t;
        t = t.replace(/1/g, "0"), t = [t.slice(0, 3), ".", t.slice(3)].join(""), t = [t.slice(0, 7), ".", t.slice(7)].join(""), this.nums.innerHTML = t
    },
    animateOut: function () {
        var t = this;
        t.bottomline.innerHTML = "FREQUENCY ADJUSTED", t.bottomline.style.color = "#ffff00", TweenMax.killTweensOf(this.numData), TweenMax.to(this.el, .5, {
            y: -50,
            opacity: 0,
            delay: 2,
            ease: Expo.easeOut,
            onComplete: function () {
                soundManager.stop("static"), t.el.style.display = "none"
            }
        })
    }
};
var NC = NC || {};
NC.EPKButton = function () {
    this.active, this.init()
}, NC.EPKButton.prototype = {
    init: function () {
        var t = this;
        this.el = H.createEl("div", {
                position: "absolute",
                width: "50px",
                height: "50px",
                bottom: "0px",
                left: "50%",
                marginLeft: "-25px",
                cursor: "pointer",
                opacity: "0",
                zIndex: "5000",
                background: "rgba(222,222,222,0)",
                visibility: "hidden"
            }), this.btnBorder = H.createEl("div", {
                position: "absolute",
                top: "10px",
                left: "4px",
                border: "1px solid rgba(255,255,255,0.4)",
                width: "45px",
                height: "31px"
            }, this.el), this.el.id = "epkBtn", this.lines = H.createEl("div", {
                position: "relative",
                width: "100%",
                height: "100%",
                left: "2px",
                background: "rgba(255,255,255,0)"
            }, this.el), this.line1 = H.createEl("div", {
                position: "absolute",
                top: "50%",
                left: "50%",
                width: "20px",
                marginLeft: "-10px",
                height: "1px",
                marginTop: "0px",
                backgroundColor: "#FFF"
            }, this.lines), TweenMax.set(this.line1, {
                y: -5
            }), this.line2 = H.createEl("div", {
                position: "absolute",
                top: "50%",
                left: "50%",
                width: "20px",
                marginLeft: "-10px",
                height: "1px",
                marginTop: "0px",
                backgroundColor: "#FFF"
            }, this.lines), TweenMax.set(this.line2, {
                y: 0
            }), this.line3 = H.createEl("div", {
                position: "absolute",
                top: "50%",
                left: "50%",
                width: "20px",
                marginLeft: "-10px",
                height: "1px",
                marginTop: "0px",
                backgroundColor: "#FFF"
            }, this.lines), TweenMax.set(this.line3, {
                y: 5
            }), this.backTo = H.createEl("div", {
                position: "absolute",
                top: "17px",
                left: "-100px",
                width: "250px",
                color: "#FFF",
                fontSize: "13px",
                letterSpacing: "1px",
                fontFamily: "MrAlex-Regular,Arial,sans-serif",
                borderRadius: "5px",
                textAlign: "center",
                letterSpacing: "1px",
                visibilty: "hidden",
                opacity: "0"
            }, this.el), this.backTo.innerHTML = "RETURN TO EXPERIENCE", isMobile.any() || $(this.el)
            .hover(function () {
                site.sfx("subNav"), TweenMax.to(t.el, .3, {
                    opacity: 1
                }), site.yt.active && site.yt.hideCursor(), t.active && (TweenMax.to(t.backTo, .3, {
                    autoAlpha: 1
                }), TweenMax.to(t.line1, .3, {
                    rotation: 90,
                    x: 70,
                    y: 0,
                    ease: Expo.easeOut
                }), TweenMax.to(t.line3, .3, {
                    rotation: -90,
                    x: -70,
                    y: 0,
                    ease: Expo.easeOut
                }))
            }, function () {
                TweenMax.to(t.el, .3, {
                    opacity: .5
                }), site.yt.active && site.yt.showCursor(), t.active && (TweenMax.to(t.backTo, .3, {
                    autoAlpha: 0
                }), TweenMax.to(t.line1, .3, {
                    rotation: 45,
                    x: 0,
                    y: 0,
                    ease: Expo.easeOut
                }), TweenMax.to(t.line3, .3, {
                    rotation: -45,
                    x: 0,
                    y: 0,
                    ease: Expo.easeOut
                }))
            }), $(this.el)
            .click(function () {
                t.active ? (TweenMax.to(t.line1, 1, {
                    rotation: 0,
                    x: 0,
                    y: -5,
                    ease: Expo.easeOut
                }), TweenMax.to(t.line2, 1, {
                    x: 0,
                    width: 20,
                    x: 0,
                    y: 0,
                    ease: Expo.easeOut
                }), TweenMax.to(t.line3, 1, {
                    rotation: 0,
                    x: 0,
                    y: 5,
                    ease: Expo.easeOut
                }), TweenMax.to(t.btnBorder, .5, {
                    autoAlpha: 1,
                    delay: .5
                }), TweenMax.to(t.backTo, .3, {
                    autoAlpha: 0
                }), isMobile.any() || (soundManager.play("transition"), setTimeout(function () {
                    soundManager.stop("loop1"), soundManager.stop("loop2"), soundManager.stop("loop3"), soundManager.stop("loop4"), soundManager.stop("loop5")
                }, 1e3)), site.yt.active && site.yt.close(), TweenMax.to(site.epk, .5, {
                    autoAlpha: 0,
                    delay: 1
                }), TweenMax.to(t.el, 1, {
                    bottom: 0
                }), site.nav.animateOut(), !isMobile.any(), t.active = !1, -1 != site.currPage && (site.pages[site.currPage].animateOut(), site.currPage = -1), setTimeout(function () {
                    $(".navItem")
                        .removeClass("navActive"), $(".navHeader h1")
                        .removeClass("navActive"), TweenMax.set(".navHeader h1", {
                            color: "#FFF"
                        }), site.sequence.resume(), document.body.style.cursor = "url(./assets/img/cursor/empty.png),default"
                }, 1e3), window.location.hash = "") : isMobile.any() ? (TweenMax.to(t.line1, 1, {
                    rotation: 45,
                    y: 0,
                    ease: Expo.easeOut
                }), TweenMax.to(t.line2, 1, {
                    x: 10,
                    width: 0,
                    ease: Expo.easeOut
                }), TweenMax.to(t.line3, 1, {
                    rotation: -45,
                    y: 0,
                    ease: Expo.easeOut
                }), TweenMax.to(t.btnBorder, .5, {
                    autoAlpha: 0
                }), TweenMax.set(site.epk, {
                    autoAlpha: 1
                }), TweenMax.to(t.el, 1, {
                    bottom: 135
                }), site.nav.animateIn(), t.active = !0) : site.sequence.isOnProgress || (site.sequence.pause(), document.body.style.cursor = "default", TweenMax.to(t.line1, 1, {
                    rotation: 45,
                    y: 0,
                    ease: Expo.easeOut
                }), TweenMax.to(t.line2, 1, {
                    x: 10,
                    width: 0,
                    ease: Expo.easeOut
                }), TweenMax.to(t.line3, 1, {
                    rotation: -45,
                    y: 0,
                    ease: Expo.easeOut
                }), TweenMax.to(t.btnBorder, .5, {
                    autoAlpha: 0
                }), TweenMax.set(site.epk, {
                    autoAlpha: 1
                }), TweenMax.to(t.el, 1, {
                    bottom: 135
                }), site.nav.animateIn(), isMobile.any() || (soundManager.play("transition"), setTimeout(function () {
                    soundManager.play("loop1")
                }, 500)), t.active = !0)
            })
    }
};
var NC = NC || {};
NC.Nav = function () {
    this.firstLoad = !0, this.mouseMove, this.vidBtns = [], this.navItems = [], this.active, this.animContentActive, this.animNavActive, this.navTween, this.navHeight = 375, this.testHit = !1, this.init()
}, NC.Nav.prototype = {
    init: function () {
        var t = this;
        this.el = H.createEl("div", {
            position: "absolute",
            top: "0px",
            left: "0px",
            width: "100%",
            overflow: "hidden",
            zIndex: "5000",
            background: "rgba(0,0,0,0)",
            visibilty: "hidden",
            opacity: "0"
        }), this.el.id = "nav", this.buttonsWrap = H.createEl("div", {
            position: "relative",
            width: "100%",
            left: "0",
            background: "rgba(255,255,255,0)"
        }, this.el), this.buttonsWrap.id = "navButtons", this.buttons = H.createEl("div", {
            position: "relative",
            width: "1000px",
            left: "50%",
            marginLeft: "-500px",
            top: "90px",
            color: "#FFF",
            fontSize: "13px"
        }, this.buttonsWrap), this.buttonsAbout = H.createEl("div", {
            marginLeft: "50px",
            width: "150px",
            cssFloat: "left"
        }, this.buttons, "navHeader"), this.buttonsAbout.innerHTML = "<h1>ABOUT</h1>", this.wrapper = H.createEl("div", null, this.buttonsAbout, "navWrapper");
        var e = [];
        for (i = 0; i < site.data.pages[0].info.length; i++) {
            var n = site.data.pages[0].info[i].title,
                s = new NC.NavButton(0, i, n, $(this.buttonsAbout)
                    .find("h1"));
            this.wrapper.appendChild(s.el), e.push(s)
        }
        this.navItems.push(e), this.buttonsVideos = H.createEl("div", {
            width: "140px",
            cssFloat: "left"
        }, this.buttons, "navHeader"), this.buttonsVideos.innerHTML = "<h1>VIDEOS</h1>", this.wrapper = H.createEl("div", null, this.buttonsVideos, "navWrapper");
        var o = [];
        for (i = 0; i < site.data.pages[1].videos.length; i++) {
            var n = site.data.pages[1].videos[i].navTitle,
                r = new NC.NavButton(1, i, n, $(this.buttonsVideos)
                    .find("h1"));
            this.wrapper.appendChild(r.el), this.vidBtns.push(r), o.push(r)
        }
        this.navItems.push(o), this.buttonsGallery = H.createEl("div", {
            width: "160px",
            cssFloat: "left"
        }, this.buttons, "navHeader"), this.buttonsGallery.innerHTML = "<h1>GALLERY</h1>", this.wrapper = H.createEl("div", null, this.buttonsGallery, "navWrapper");
        var a = [],
            n = site.data.pages[2].title,
            l = new NC.NavButton(2, 0, n, $(this.buttonsGallery)
                .find("h1"));
        this.wrapper.appendChild(l.el), a.push(l), this.navItems.push(a), this.buttonsCast = H.createEl("div", {
            width: "150px",
            cssFloat: "left"
        }, this.buttons, "navHeader"), this.buttonsCast.innerHTML = "<h1>CAST</h1>", this.wrapper = H.createEl("div", null, this.buttonsCast, "navWrapper");
        var u = [];
        for (i = 0; i < site.data.pages[3].actors.length; i++) {
            var n = site.data.pages[3].actors[i].name,
                h = new NC.NavButton(3, i, n, $(this.buttonsCast)
                    .find("h1"));
            this.wrapper.appendChild(h.el), u.push(h)
        }
        if (this.navItems.push(u), site.data.pages.length > 4) {
            this.buttonsTickets = H.createEl("div", {
                width: "215px",
                cssFloat: "left"
            }, this.buttons, "navHeader"), this.buttonsTickets.innerHTML = "<h1>GET TICKETS</h1>", this.wrapper = H.createEl("div", null, this.buttonsTickets, "navWrapper");
            var c = [],
                n = site.data.pages[4].title,
                p = new NC.NavButton(4, 0, n, $(this.buttonsTickets)
                    .find("h1"));
            this.wrapper.appendChild(p.el), c.push(p), this.navItems.push(c)
        }
        this.buttonsTumb = H.createEl("div", {
            width: "130px",
            cssFloat: "left"
        }, this.buttons, "navHeader"), this.buttonsTumb.innerHTML = "<h1>EXTRAS</h1>", this.wrapper = H.createEl("div", null, this.buttonsTumb, "navWrapper");
        var d = [],
            n = site.data.pages[5].title,
            f = new NC.NavButton(5, !1, n, $(this.buttonsTumb)
                .find("h1"));
        this.wrapper.appendChild(f.el), d.push(f), this.navItems.push(d);
        var n = site.data.pages[5].instagramTitle,
            m = new NC.NavButton("instagram", !1, n, $(this.buttonsTumb)
                .find("h1"));
        this.wrapper.appendChild(m.el), d.push(m), this.navItems.push(d), isMobile.any() || $("body")
            .on("mousemove", "#nav, #EPK>div", function (e) {
                t.mouseMove(e)
            })
    },
    mouseMove: function (t) {
        var e;
        e = .3 * site.screenHeight < this.navHeight ? .3 * site.screenHeight : this.navHeight, this.testHit && (console.log("test"), t.clientY < e && !this.active && !this.animNavActive && !this.animContentActive ? (console.log("here"), -1 != site.currPage && (this.focusNav(), site.yt.active && site.yt.hideCursor(), console.log("here2"))) : this.active && t.clientY > this.navHeight && !this.animNavActive && !this.animContentActive && (this.focusContent(), site.yt.active && site.yt.showCursor()))
    },
    focusNav: function () {
        var t = this;
        this.active = !0, this.animNavActive = !0, TweenMax.to(".navHeader h1", .5, {
            opacity: 1,
            delay: .5
        }), TweenMax.set("#nav", {
            height: 420,
            autoAlpha: 0
        }), TweenMax.to("#nav", 2, {
            autoAlpha: 1
        });
        var e = .5;
        for (i = 0; 4 > i; i++)
            for (e += .1, x = 0; x < this.navItems.length; x++) this.navItems[x].length > i && (TweenMax.killTweensOf(this.navItems[x][i].el), TweenMax.fromTo(this.navItems[x][i].el, .25, {
                y: -10 * i,
                opacity: 0
            }, {
                y: 0,
                opacity: 1,
                delay: e,
                ease: Expo.easeOut
            }), this.navItems[x][i].hoverOff());
        if (-1 != site.currPage && (TweenMax.to(site.pages[site.currPage].bg, .5, {
                opacity: .5
            }), TweenMax.to(site.pages[site.currPage].content, .5, {
                opacity: .3,
                zIndex: 1100
            }), (site.isChrome || site.isSafari) && 2 == site.currPage)) {
            var n = {
                "var": 0
            };
            TweenMax.to(n, .5, {
                "var": 5,
                onUpdate: function () {
                    2 == site.currPage && TweenMax.set(site.pages[site.currPage].sliderEl, {
                        webkitFilter: "blur(" + n.var+"px)"
                    })
                },
                ease: Expo.easeOut
            })
        }
        isMobile.any() && TweenMax.to("#nav", 3, {
            autoAlpha: 1,
            zIndex: 2e3
        }), TweenMax.set("#navButtons", {
            zIndex: 2e3
        }), setTimeout(function () {
            t.animNavActive = !1
        }, e)
    },
    focusContent: function (t) {
        var e = this;
        this.active = !1, this.animContentActive = !0;
        var n = 0,
            s = .1;
        for ((site.isChrome || site.isSafari) && (s = .3), i = 4; i >= 0; i--)
            for (n += .1, x = 0; x < this.navItems.length; x++) this.navItems[x].length > i && (TweenMax.killTweensOf(this.navItems[x][i].el), TweenMax.fromTo(this.navItems[x][i].el, .25, {
                y: 0,
                opacity: 1
            }, {
                y: -10 * i,
                opacity: 0,
                delay: n,
                ease: Expo.easeOut
            }));
        if (TweenMax.to(".navHeader h1", .5, {
                opacity: 0,
                delay: .5,
                onComplete: function () {
                    e.animContentActive = !1, TweenMax.set("#nav", {
                        height: "auto"
                    })
                }
            }), -1 != site.currPage)
            if (TweenMax.to(site.pages[site.currPage].bg, .5, {
                    opacity: 1
                }), TweenMax.to(site.pages[site.currPage].content, .5, {
                    opacity: 1,
                    zIndex: 2e3,
                    delay: n + .1
                }), site.firstClick || 2 != site.currPage) site.firstClick = !1;
            else if (site.isChrome || site.isSafari) {
            var o = {
                "var": 5
            };
            TweenMax.to(o, .5, {
                "var": 0,
                onUpdate: function () {
                    2 == site.currPage && TweenMax.set(site.pages[site.currPage].sliderEl, {
                        webkitFilter: "blur(" + o.var+"px)"
                    })
                },
                delay: n + .1,
                ease: Expo.easeOut
            })
        }
        TweenMax.set("#navButtons", {
            zIndex: 1100,
            delay: n + .1
        }), TweenMax.set("#nav", {
            autoAlpha: 0,
            delay: n + .1
        })
    },
    animateIn: function () {
        var t = this;
        this.firstLoad && (TweenMax.set(".navHeader h1", {
                opacity: 0,
                fontFamily: "MrAlex-Light",
                fontSize: 30,
                margin: "0 0 25px",
                color: "#FFF",
                fontWeight: "normal",
                letterSpacing: "1px"
            }), TweenMax.set(".navItem", {
                opacity: 0,
                fontFamily: "Bebas",
                fontSize: 18,
                lineHeight: "21px",
                marginBottom: 15
            }), TweenMax.set(".castAs", {
                fontSize: 9
            }), this.firstLoad = !1, $(".navItem")
            .click(function () {
                var e = $(".navItem")
                    .index(this);
                12 != e && 13 != e && (t.testHit = !0)
            })), TweenMax.to(this.el, .7, {
            autoAlpha: 1,
            onComplete: function () {
                t.focusNav()
            }
        }), this.testHit = !1, site.header.animateIn(), site.footer.animateIn()
    },
    animateOut: function () {
        TweenMax.to(this.el, .7, {
            autoAlpha: 0
        }), site.header.animateOut(), site.footer.animateOut(), this.focusContent()
    },
    resize: function () {
        var t = this;
        this.el.style.width = site.screenWidth + "px", isMobile.any() && H.resizeToContainer(this.bgImg, this.el, 1600 / 900)
    }
};
var NC = NC || {};
NC.NavButton = function (t, e, i, n) {
    this.pageID = t, this.ID = e, this.title = i, this.h1 = n, this.active, this.init()
}, NC.NavButton.prototype = {
    init: function () {
        var t = this;
        if (this.el = H.createEl("div", null, null, "navItem"), this.el.id = "navBtn-" + this.pageID + "-" + this.ID, TweenMax.set(this.el, {
                position: "relative",
                cursor: "pointer"
            }), 3 == this.pageID) TweenMax.set(this.el, {
            height: 42
        }), this.actor = H.createEl("div", null, this.el), this.actor.style.height = "21px", this.main = H.createEl("div", null, this.actor), this.hoverEl = H.createEl("div", null, this.actor), this.main.innerHTML = this.hoverEl.innerHTML = this.title, TweenMax.set(this.main, {
            position: "absolute",
            rotationX: 0,
            transformOrigin: "left top"
        }), TweenMax.set(this.hoverEl, {
            position: "absolute",
            color: "#f9f816",
            rotationX: 90,
            transformOrigin: "left bottom"
        }), this.character = H.createEl("div", null, this.el), this.character.style.height = "21px", this.main2 = H.createEl("div", null, this.character), this.hover2El = H.createEl("div", null, this.character), this.main2.innerHTML = this.hover2El.innerHTML = '<span class="castAs">AS</span> <span class="castCharBtn">' + site.data.pages[3].actors[this.ID].character + "</span>", TweenMax.set(this.main2, {
            position: "absolute",
            color: "#b2b2b2",
            rotationX: 0,
            transformOrigin: "left top"
        }), TweenMax.set(this.hover2El, {
            position: "absolute",
            color: "#FFF",
            rotationX: 90,
            transformOrigin: "left bottom"
        }), 3 == t.pageID && (this.el.style.cursor = "default");
        else if (5 == this.pageID) {
            TweenMax.set(this.el, {
                height: 42
            });
            var e = this.title.split("</span><span>");
            this.span = H.createEl("div", null, this.el), this.span.style.height = "21px", this.main = H.createEl("div", null, this.span), this.hoverEl = H.createEl("div", null, this.span), this.main.innerHTML = e[0] + "</span>", this.hoverEl.innerHTML = e[0] + "</span>", TweenMax.set(this.main, {
                position: "absolute",
                rotationX: 0,
                transformOrigin: "left top"
            }), TweenMax.set(this.hoverEl, {
                position: "absolute",
                color: "#f9f816",
                rotationX: 90,
                transformOrigin: "left bottom"
            }), this.span2 = H.createEl("div", null, this.el), this.span2.style.height = "21px", this.main2 = H.createEl("div", null, this.span2), this.hover2El = H.createEl("div", null, this.span2), this.main2.innerHTML = e[1], this.hover2El.innerHTML = e[1], TweenMax.set(this.main2, {
                position: "absolute",
                rotationX: 0,
                transformOrigin: "left top"
            }), TweenMax.set(this.hover2El, {
                position: "absolute",
                color: "#f9f816",
                rotationX: 90,
                transformOrigin: "left bottom"
            })
        } else TweenMax.set(this.el, {
            height: 21
        }), this.main = H.createEl("div", null, this.el), this.hoverEl = H.createEl("div", null, this.el), this.main.innerHTML = this.hoverEl.innerHTML = this.title, TweenMax.set(this.main, {
            position: "absolute",
            rotationX: 0,
            transformOrigin: "left top"
        }), TweenMax.set(this.hoverEl, {
            position: "absolute",
            color: "#f9f816",
            rotationX: 90,
            transformOrigin: "left bottom"
        }), 1 != t.pageID || site.data.pages[1].videos[t.ID].ytID || (this.hoverEl.innerHTML = "COMING SOON", this.el.style.cursor = "default", isMobile.any() && (this.el.style.display = "none"));
        this.overlay = H.createEl("div", null, this.el), TweenMax.set(this.overlay, {
                position: "relative",
                width: "100%",
                height: "100%"
            }), $(this.el)
            .click(function () {
                (1 != t.pageID || site.data.pages[1].videos[t.ID].ytID) && (3 == t.pageID || (isMobile.any() || soundManager.play("transition"), "instagram" == t.pageID ? (window.open(site.data.pages[5].instagramLink, "_blank"), site.onExternal()) : 5 == t.pageID ? (window.open("http://ifyouwanttowinthelottery.tumblr.com/", "_blank"), site.onExternal()) : (site.getPage(t.pageID, t.ID), $(".navItem")
                    .removeClass("navActive"), $(this)
                    .addClass("navActive"), site.nav.active && setTimeout(function () {
                        site.nav.focusContent(!1)
                    }, 100), isMobile.any() && (site.navToggleBtn.rotate(), site.navToggleBtn.active = !1))))
            }), isMobile.any() || 3 == t.pageID || $(this.el)
            .hover(function () {
                site.isSafari || (site.auNavRoll.play(), site.auNavRoll.currentTime = 0), site.nav.animActive || (5 == t.pageID ? (TweenMax.to(t.main, .8, {
                    rotationX: -90,
                    z: -20,
                    autoAlpha: 0,
                    ease: Expo.easeOut
                }), TweenMax.to(t.hoverEl, .8, {
                    rotationX: 0,
                    autoAlpha: 1,
                    ease: Expo.easeOut
                }), TweenMax.to(t.main2, .8, {
                    rotationX: -90,
                    z: -20,
                    autoAlpha: 0,
                    ease: Expo.easeOut,
                    delay: .1
                }), TweenMax.to(t.hover2El, .8, {
                    rotationX: 0,
                    autoAlpha: 1,
                    ease: Expo.easeOut,
                    delay: .1
                })) : (TweenMax.to(t.main, .8, {
                    rotationX: -90,
                    z: -20,
                    autoAlpha: 0,
                    ease: Expo.easeOut
                }), TweenMax.to(t.hoverEl, .8, {
                    rotationX: 0,
                    autoAlpha: 1,
                    ease: Expo.easeOut
                })), site.isSafari && soundManager.play("navRoll"))
            }, function () {
                site.nav.animActive || (5 == t.pageID ? (TweenMax.to(t.main, .8, {
                    rotationX: 0,
                    z: 0,
                    autoAlpha: 1,
                    ease: Expo.easeOut
                }), TweenMax.to(t.hoverEl, .8, {
                    rotationX: 90,
                    autoAlpha: 0,
                    ease: Expo.easeOut
                }), TweenMax.to(t.main2, .8, {
                    rotationX: 0,
                    z: 0,
                    autoAlpha: 1,
                    ease: Expo.easeOut,
                    delay: .1
                }), TweenMax.to(t.hover2El, .8, {
                    rotationX: 90,
                    autoAlpha: 0,
                    ease: Expo.easeOut,
                    delay: .1
                })) : (TweenMax.to(t.main, .8, {
                    rotationX: 0,
                    z: 0,
                    autoAlpha: 1,
                    ease: Expo.easeOut
                }), TweenMax.to(t.hoverEl, .8, {
                    rotationX: 90,
                    autoAlpha: 0,
                    ease: Expo.easeOut
                })))
            })
    },
    hoverOff: function () {
        var t = this;
        5 == t.pageID ? (TweenMax.set(t.main, {
            rotationX: 0,
            z: 0,
            autoAlpha: 1,
            ease: Expo.easeOut
        }), TweenMax.set(t.hoverEl, {
            rotationX: 90,
            autoAlpha: 0,
            ease: Expo.easeOut
        }), TweenMax.set(t.main2, {
            rotationX: 0,
            z: 0,
            autoAlpha: 1,
            ease: Expo.easeOut,
            delay: .1
        }), TweenMax.set(t.hover2El, {
            rotationX: 90,
            autoAlpha: 0,
            ease: Expo.easeOut,
            delay: .1
        })) : (TweenMax.set(t.main, {
            rotationX: 0,
            z: 0,
            autoAlpha: 1,
            ease: Expo.easeOut
        }), TweenMax.set(t.hoverEl, {
            rotationX: 90,
            autoAlpha: 0,
            ease: Expo.easeOut
        }))
    }
};
var NC = NC || {};
NC.Header = function () {
    this.init()
}, NC.Header.prototype = {
    init: function () {
        var t = this;
        this.el = H.createEl("div", {
            position: "absolute",
            width: "100%",
            height: "60px",
            top: "-60px"
        }), this.el.id = "header", this.tagline = H.createImg("assets/img/common/tagline.png", {
            position: "absolute",
            top: "40px",
            left: "50%",
            marginLeft: "-220px"
        }, this.el, site.loader), this.borderTop = H.createEl("div", {
            position: "absolute",
            width: "100%",
            height: "1px",
            opacity: ".2",
            borderTop: "solid 1px #FFF",
            top: "47px"
        }, this.el)
    },
    animateIn: function () {
        TweenMax.fromTo(this.el, 1, {
            top: -60
        }, {
            top: 0
        })
    },
    animateOut: function () {
        TweenMax.to(this.el, 1, {
            top: -60
        })
    }
};
var NC = NC || {};
NC.Footer = function () {
    this.init()
}, NC.Footer.prototype = {
    init: function () {
        var t = this;
        this.el = H.createEl("div", {
                position: "absolute",
                left: "0px",
                width: "100%",
                height: "75px",
                bottom: "-75px",
                zIndex: "5000"
            }), this.el.id = "footer", isMobile.any() || ($("body")
                .on("mouseenter", "#footer", function () {
                    site.yt.active && site.yt.hideCursor()
                }), $("body")
                .on("mouseleave", "#footer", function () {
                    site.yt.active && site.yt.showCursor()
                })), this.borderTop = H.createEl("div", {
                position: "absolute",
                top: "0px",
                left: "0px",
                width: "100%",
                height: "1px",
                background: "#FFF",
                opacity: ".2"
            }, this.el), this.title = H.createImg("assets/img/common/title.png", {
                position: "absolute",
                top: "-45px",
                left: "50%",
                marginLeft: "-170px",
                visibilty: "hidden",
                opacity: "0"
            }, this.el, site.loader), !isMobile.any(), isMobile.any() || $(this.muteBtn)
            .hover(function () {
                site.sfx("subNav"), TweenMax.to(t.muteBtn, .3, {
                    opacity: 1
                })
            }, function () {
                TweenMax.to(t.muteBtn, .3, {
                    opacity: .4
                })
            }), $(this.muteBtn)
            .click(function () {
                site.isMute ? (site.isMute = !1, site.yt.active || site.unmute(), TweenMax.to(t.muteLine, .3, {
                    y: 10,
                    height: 0
                })) : (site.isMute = !0, site.yt.active || site.mute(), TweenMax.to(t.muteLine, .3, {
                    y: 0,
                    height: 21
                }))
            }), this.openRoad = H.createEl("div", {
                position: "absolute",
                top: "23px",
                left: "100px",
                height: "50px",
                opacity: ".2",
                cursor: "pointer"
            }, this.el), this.openRoadImg = H.createImg("assets/img/footer/open-road.png", {
                padding: "10px 0"
            }, this.openRoad, site.loader), H.createLink(this.openRoad, "http://www.openroadfilms.com", "_blank"), isMobile.any() || $(this.openRoad)
            .hover(function () {
                site.sfx("subNav"), TweenMax.to(t.openRoad, .3, {
                    opacity: 1
                })
            }, function () {
                TweenMax.to(t.openRoad, .3, {
                    opacity: .2
                })
            }), $(this.openRoad)
            .click(function () {
                site.onExternal()
            }), this.shareBtn = H.createEl("div", {
                position: "absolute",
                top: "24px",
                left: "294px",
                padding: "5px 10px",
                fontFamily: "MrAlex-Bold",
                fontSize: "14px",
                letterSpacing: "1.5px",
                color: "#000",
                background: "rgb(255,255,255)",
                opacity: ".2",
                cursor: "pointer"
            }, this.el), this.shareBtn.innerHTML = "SHARE", isMobile.any() || $(this.shareBtn)
            .hover(function () {
                site.sfx("subNav"), TweenMax.to(t.shareBtn, .3, {
                    opacity: 1,
                    background: "rgb(248,247,22)"
                })
            }, function () {
                TweenMax.to(t.shareBtn, .3, {
                    opacity: .2,
                    background: "rgb(255,255,255)"
                })
            }), $(this.shareBtn)
            .click(function () {
                isMobile.any() || soundManager.play("transition"), site.share.animateIn(), site.yt.active && site.yt.pauseVid()
            }), this.follow = H.createEl("div", {
                position: "absolute",
                top: "22px",
                left: "375px",
                fontFamily: "MrAlex-Bold",
                fontSize: "12px",
                letterSpacing: "1.5px",
                color: "#FFF"
            }, this.el), this.follTitle = H.createEl("div", {
                position: "relative",
                cssFloat: "left",
                marginRight: "10px",
                marginTop: "8px",
                opacity: ".2"
            }, this.follow), this.follTitle.innerHTML = "FOLLOW US:", this.follFb = new NC.FollowButton("assets/img/footer/ico-fb.png", "https://www.facebook.com/NightcrawlerMovie"), this.follow.appendChild(this.follFb.el), this.follTw = new NC.FollowButton("assets/img/footer/ico-tw.png", "https://twitter.com/seenightcrawler"), this.follow.appendChild(this.follTw.el), this.follTb = new NC.FollowButton("assets/img/footer/ico-tb.png", "http://ifyouwanttowinthelottery.tumblr.com/"), this.follow.appendChild(this.follTb.el), this.follIg = new NC.FollowButton("assets/img/footer/ico-ig.png", "http://instagram.com/nightcrawlermovie"), this.follow.appendChild(this.follIg.el), this.legalBtns = H.createEl("div", {
                position: "absolute",
                bottom: "0",
                right: "37px",
                height: "46px"
            }, this.el), this.ratedBtn = H.createImg("assets/img/footer/rated.png", {
                position: "relative",
                top: "0px",
                cssFloat: "right",
                opacity: ".2"
            }, this.legalBtns), this.legalRat = new NC.LegalButton("FILM RATINGS", "http://www.filmratings.com/"), this.legalBtns.appendChild(this.legalRat.el), this.legalMpaa = new NC.LegalButton("MPAA.ORG", "http://www.mpaa.org/"), this.legalBtns.appendChild(this.legalMpaa.el), this.legalTerms = new NC.LegalButton("TERMS OF USE", "http://www.openroadfilms.com/#terms"), this.legalBtns.appendChild(this.legalTerms.el), this.legalPriv = new NC.LegalButton("PRIVACY POLICY", "http://www.openroadfilms.com/#privacy"), this.legalBtns.appendChild(this.legalPriv.el)
    },
    animateIn: function () {
        TweenMax.to(this.el, 1, {
            bottom: 0,
            delay: 0
        }), TweenMax.fromTo(this.title, 1.4, {
            y: 100
        }, {
            y: 0,
            autoAlpha: 1,
            ease: Expo.easeOut,
            delay: .5
        })
    },
    animateOut: function () {
        TweenMax.to(this.el, 1, {
            bottom: -75,
            delay: 0
        }), TweenMax.to(this.title, .6, {
            y: 100,
            autoAlpha: 0,
            delay: 0
        })
    },
    resize: function () {
        site.screenWidth < 1500 ? (this.shareBtn.style.left = "240px", this.follow.style.left = "320px", this.follow.style.top = "22px", site.screenWidth < 1400 && (this.follow.style.left = "30px", this.follow.style.top = "-40px")) : (this.shareBtn.style.left = "294px", this.follow.style.left = "375px", this.follow.style.top = "22px")
    }
}, NC.YT = function (t) {
    this.vidInterval, this.vidDur, this.vidTime, this.ytPlayer, this.active, this.vidID = [], this.vidHash = [], this.titleID = [], this.pagiButtons = [], this.vidActiveID, this.isPlaying, this.cursorActive, this.arrowCursorActive, this.shareCursorActive, this.arrowLeftActive, this.arrowRightActive, this.mute, this.mousemove, this.progBarWidth, this.data = t, this.init()
}, NC.YT.prototype = {
    init: function () {
        var t = this;
        this.el = site.isIE ? H.createEl("div", {
                position: "relative",
                background: "rgba(0,0,0,1)",
                opacity: "0",
                width: "100%",
                top: "60px",
                height: "100%",
                visibility: "hidden",
                overflow: "hidden"
            }) : H.createEl("div", {
                position: "relative",
                background: "rgba(0,0,0,1)",
                opacity: "0",
                width: "100%",
                height: "100%",
                visibility: "hidden",
                overflow: "hidden"
            }), $(this.el)
            .attr("id", "ytTrailer"), this.player = H.createEl("div", {}, this.el), $(this.player)
            .attr("id", "ytPlayer"), site.isIE || isMobile.any() || (this.vidOverlay = H.createEl("div", {
                position: "absolute",
                width: "100%",
                height: "100%",
                top: "0",
                left: "0"
            }, this.el)), this.controls = H.createEl("div", {
                position: "absolute",
                width: "900px",
                bottom: "160px",
                left: "50%",
                marginLeft: "-450px",
                zIndex: "110"
            }, site.videoControls), this.titles = H.createEl("div", {
                position: "absolute",
                left: "27px",
                top: "-5px",
                fontFamily: "Arial",
                fontSize: "14px",
                fontWeight: "bold",
                fontStyle: "italic",
                letterSpacing: "1px",
                color: "#ddd",
                width: "500px"
            }, this.controls), t.progBarWidth = 850;
        for (var e = 0; e < this.data.videos.length; e++) t.data.videos[e].ytID && (t.vidCount = e, t.vidID[e] = t.data.videos[e].ytID, t.vidHash[e] = t.data.videos[e].hashUrl);
        this.playControls = H.createEl("div", {
                position: "absolute",
                marginLeft: "-60px",
                marginTop: "-60px",
                cursor: "url(assets/img/cursor/empty.png),default",
                visibility: "hidden",
                opacity: "0"
            }, site.videoControls), isMobile.any() && TweenMax.set(this.playControls, {
                bottom: 265,
                left: 130
            }), this.canvas = H.createEl("canvas", {
                position: "absolute"
            }, this.playControls), this.canvas.width = 120, this.canvas.height = 120, this.ctx = this.canvas.getContext("2d"), this.ctx.lineWidth = 1, this.ctx.strokeStyle = "rgba(255,255,255,0.2)", this.ctx.beginPath(), this.ctx.arc(60, 60, 58, 0, 2 * Math.PI), this.ctx.stroke(), TweenMax.set(this.canvas, {
                rotation: -90
            }), this.playCircle = H.createImg("assets/img/video/ytplayer-play-btn-circle.png", {
                position: "absolute",
                top: "35px",
                left: "35px",
                cursor: "url(assets/img/cursor/empty.png),default"
            }, this.playControls, site.loader), this.playBtn = H.createImg("assets/img/video/ytplayer-play-btn.png", {
                position: "absolute",
                display: "none",
                marginLeft: "56px",
                marginTop: "51px"
            }, this.playControls, site.loader), this.pauseBtn = H.createImg("assets/img/video/ytplayer-pause-btn.png", {
                position: "absolute",
                cursor: "pointer",
                marginTop: "51px",
                marginLeft: "55px",
                display: "none",
                cursor: "url(assets/img/cursor/empty.png),default"
            }, this.playControls, site.loader), this.timeStamp = H.createEl("div", {
                position: "absolute",
                top: "-35px",
                left: "25px",
                color: "#FFF",
                fontFamily: "DS-DigiI, Arial",
                fontWeight: "bold",
                fontSize: "11px",
                opacity: ".3",
                letterSpacing: "1.5px"
            }, this.playControls), this.timeStamp.id = "timestamp", $(this.progress)
            .mousedown(function (e) {
                t.seek(e)
            }), $(this.playBtn)
            .click(function (e) {
                t.playVid()
            }), $(this.pauseBtn)
            .click(function (e) {
                t.playVid()
            }), $(this.vidOverlay)
            .click(function (e) {
                t.playVid()
            }), $(this.closeBtn)
            .click(function (e) {
                t.close()
            }), this.shareArea = H.createEl("div", {
                position: "absolute",
                left: "50%",
                top: "50%",
                width: "300px",
                height: "300px",
                marginTop: "-70px",
                marginLeft: "-150px",
                background: "rgba(255,255,255,0)"
            }, site.videoControls), this.shareArea.id = "shareArea", this.shareCursor = H.createImg("assets/img/cursor/share.png", {
                position: "absolute",
                marginTop: "-68px",
                marginLeft: "-68px",
                width: "135px",
                height: "135px",
                visibility: "hidden",
                opacity: "0",
                cursor: "url(assets/img/cursor/empty.png),default"
            }, site.videoControls, this.loader), isMobile.any() && TweenMax.set(this.shareCursor, {
                autoAlpha: 1,
                bottom: 100,
                right: 50
            }), $(this.shareCursor)
            .click(function () {
                isMobile.any() || soundManager.play("transition"), t.pauseVid(), site.videoShare.animateIn(t.vidActiveID)
            }), this.arrowCursor = H.createEl("div", {
                position: "absolute",
                width: "120px",
                height: "120px",
                marginTop: "-60px",
                marginLeft: "-60px",
                background: "rgba(255,255,255,0)",
                cursor: "url(assets/img/cursor/empty.png),default"
            }, site.videoControls), this.arrowLeft = H.createEl("div", {
                position: "absolute",
                width: "50px",
                height: "50px",
                marginTop: "35px",
                marginLeft: "35px",
                visibility: "hidden",
                opacity: "0",
                background: "rgba(255,255,255,0)",
                cursor: "url(assets/img/cursor/empty.png),default"
            }, this.arrowCursor), this.arrowLeftImg = H.createImg("assets/img/common/arrowLeft2.png", {
                position: "absolute",
                left: "50%",
                top: "50%",
                marginLeft: "-30px",
                marginTop: "-30px",
                cursor: "url(assets/img/cursor/empty.png),default"
            }, this.arrowLeft, this.loader), site.isIE && TweenMax.set(this.arrowLeftImg, {
                cursor: "pointer"
            }), $(this.arrowLeft)
            .click(function () {
                isMobile.any() || soundManager.play("transition"), t.vidActiveID--, t.vidActiveID < 0 && (t.vidActiveID = t.vidCount), t.switchVid(t.vidActiveID), console.log("click left")
            }), this.arrowRight = H.createEl("div", {
                position: "absolute",
                width: "50px",
                height: "50px",
                marginTop: "35px",
                marginLeft: "35px",
                visibility: "hidden",
                opacity: "0",
                background: "rgba(255,255,255,0)",
                cursor: "url(assets/img/cursor/empty.png),default"
            }, this.arrowCursor), this.arrowRightImg = H.createImg("assets/img/common/arrowRight2.png", {
                position: "absolute",
                left: "50%",
                top: "50%",
                marginLeft: "-30px",
                marginTop: "-30px",
                cursor: "url(assets/img/cursor/empty.png),default"
            }, this.arrowRight, this.loader), site.isIE && TweenMax.set(this.arrowRightImg, {
                cursor: "pointer"
            }), $(this.arrowRight)
            .click(function () {
                isMobile.any() || soundManager.play("transition"), t.vidActiveID++, t.vidActiveID > t.vidCount && (t.vidActiveID = 0), t.switchVid(t.vidActiveID), console.log("click right")
            }), isMobile.any() || site.isIE ? $(this.playCircle)
            .click(function (e) {
                t.playVid()
            }) : ($(window)
                .mousemove(function (e) {
                    site.yt.active && ((window.lastX !== e.clientX || window.lastY !== e.clientY) && site.yt.active && !site.isIE && t.mousemove(e), window.lastX = e.clientX, window.lastY = e.clientY)
                }), $(site.videoControls)
                .mousemove(function (e) {
                    t.cursorActive && TweenMax.set(t.playControls, {
                        top: window.lastY,
                        left: window.lastX
                    }), t.shareCursorActive && TweenMax.set(t.shareCursor, {
                        top: window.lastY,
                        left: window.lastX
                    }), t.arrowCursorActive && TweenMax.set(t.arrowCursor, {
                        top: window.lastY,
                        left: window.lastX
                    });
                    var i = $(t.shareArea)
                        .offset(),
                        n = i.left,
                        s = n + $(t.shareArea)
                        .innerWidth(),
                        o = i.top,
                        r = o + $(t.shareArea)
                        .innerHeight();
                    window.lastX < 150 || window.lastX > site.screenWidth - 150 ? (window.lastX < 150 && (t.arrowLeftActive || (t.arrowLeftActive = !0, t.arrowRightActive = !1, TweenMax.set(t.arrowLeft, {
                        autoAlpha: 1
                    }), TweenMax.set(t.arrowRight, {
                        autoAlpha: 0
                    }))), window.lastX > site.screenWidth - 150 && (t.arrowRightActive || (t.arrowRightActive = !0, t.arrowLeftActive = !1, TweenMax.set(t.arrowRight, {
                        autoAlpha: 1
                    }), TweenMax.set(t.arrowLeft, {
                        autoAlpha: 0
                    }))), t.arrowCursorActive || (t.showArrowCursor(), t.cursorActive && t.hideCursor(), t.shareCursorActive && t.hideShareCursor(), t.cursorActive = !1, t.shareCursorActive = !1, t.arrowCursorActive = !0)) : window.lastX < n || window.lastX > s ? t.cursorActive || (t.showVidCursor(), t.shareCursorActive && t.hideShareCursor(), t.arrowCursorActive && t.hideArrowCursor(), t.cursorActive = !0, t.shareCursorActive = !1, t.arrowCursorActive = !1) : t.shareCursorActive || (t.showShareCursor(), t.cursorActive && t.hideVidCursor(), t.arrowCursorActive && t.hideArrowCursor(), t.cursorActive = !1, t.shareCursorActive = !0, t.arrowCursorActive = !1)
                })), this.rbOverlay = H.createEl("div", {
                position: "absolute",
                width: "100%",
                height: "100%",
                visibility: "hidden",
                opacity: "0",
                background: "rgba(0,0,0,.8)",
                zIndex: "999999",
                textAlign: "center",
                color: "#FFF"
            }, document.body), this.rbAgeGate = H.createEl("div", {
                position: "absolute",
                width: "500px",
                height: "80px",
                top: "50%",
                left: "50%",
                marginTop: "-130px",
                marginLeft: "-250px"
            }, this.rbOverlay), $(this.rbAgeGate)
            .agegate({
                age: 18,
                legal: function () {
                    site.ageVerified = !0, t.switchVid(site.verifyVidID), TweenMax.to(t.rbOverlay, .5, {
                        autoAlpha: 0
                    })
                },
                underage: function () {
                    alert("Sorry, you must be at least " + this.age + " years old in order to continue."), $(".navItem")
                        .removeClass("navActive"), TweenMax.to(t.rbOverlay, .5, {
                            autoAlpha: 0
                        }), site.currItem = !1
                }
            })
    },
    timeToHHMMSS: function (t) {
        var e = parseInt(t, 10),
            i = Math.floor(e / 3600),
            n = Math.floor((e - 3600 * i) / 60),
            s = e - 3600 * i - 60 * n;
        return 10 > i && (i = "0" + i), 10 > n && (n = "0" + n), 10 > s && (s = "0" + s), t = "00:" + i + ":" + n + ":" + s
    },
    updatePerc: function (t) {
        this.ctx.lineWidth = 1, this.ctx.clearRect(0, 0, 120, 120), this.ctx.strokeStyle = "rgba(255,255,255,0.2)", this.ctx.beginPath(), this.ctx.arc(60, 60, 58, 0, 2 * Math.PI), this.ctx.stroke(), this.ctx.lineWidth = 4, this.ctx.strokeStyle = "#fff600", this.ctx.beginPath(), this.ctx.arc(60, 60, 58, 0, 2 * Math.PI * t), this.ctx.stroke()
    },
    close: function () {
        this.vidActiveID = !1, TweenMax.to(this.el, .8, {
            autoAlpha: 0,
            onComplete: function () {
                site.isIE ? $("#ytTrailer")
                    .empty() : ($("#ytPlayer")
                        .remove(), $("#ytTrailer")
                        .prepend('<div id="ytPlayer"></div>')), site.isMute || site.unmute()
            }
        }), site.yt.active = !1
    },
    switchVid: function (t) {
        var e = this;
        site.isIE ? e.loadSimplePlayer(t) : (TweenMax.to("#ytProgBar", .4, {
                autoAlpha: 0
            }), TweenMax.to("#ytPlayer", .8, {
                autoAlpha: 0,
                onComplete: function () {
                    $("#ytPlayer")
                        .remove(), $("#ytTrailer")
                        .prepend('<div id="ytPlayer"></div>'), e.loadPlayer(t)
                }
            }), $(".navItem")
            .removeClass("navActive"), $(site.nav.vidBtns[t].el)
            .addClass("navActive"))
    },
    seek: function (t) {
        var e = this,
            i = t.offsetX || t.clientX - $(t.target)
            .offset()
            .left,
            n = i / e.progBarWidth;
        isMobile.any() || (player.seekTo(e.vidDur * n), TweenMax.killTweensOf(this.progBar, !1), TweenMax.to(this.progBar, .4, {
            width: e.progBarWidth * n
        }))
    },
    verifyAge: function (t) {
        var e = this;
        t ? (site.ageVerified = !0, e.switchVid(site.verifyVidID), TweenMax.to(this.rbOverlay, .5, {
            autoAlpha: 0
        })) : (e.switchVid(0), TweenMax.to(this.rbOverlay, .5, {
            autoAlpha: 0
        }))
    },
    loadSimplePlayer: function (t) {
        var e = this;
        "7uaYhPpV7G4" != e.vidID[t] || site.ageVerified ? ($("#ytTrailer")
            .empty(), $("#ytTrailer")
            .append('<iframe width="100%" height="100%" src="//www.youtube.com/embed/' + e.vidID[t] + '?wmode=transparent&autoplay=1&autohide=1" frameborder="0" allowfullscreen></iframe>'), TweenMax.to("#ytTrailer, #ytPlayer", .4, {
                autoAlpha: 1
            }), TweenMax.to("#videos", .6, {
                autoAlpha: 1,
                delay: 2
            }), setTimeout(function () {}, 100), this.vidActiveID = t, site.deeplinkViaVid = !1, site.yt.active = !0) : (TweenMax.to(e.rbOverlay, .7, {
            autoAlpha: 1
        }), TweenMax.set("#agegate-day", {
            marginLeft: "10px",
            marginRight: "30px"
        }), TweenMax.set("#agegate-month", {
            marginLeft: "10px",
            marginRight: "30px"
        }), TweenMax.set("#agegate-year", {
            marginLeft: "10px",
            marginRight: "30px"
        }), site.verifyVidID = t)
    },
    loadPlayer: function (t) {
        var e = this;
        e.playBtn.style.display = "none", e.pauseBtn.style.display = "none", "7uaYhPpV7G4" != e.vidID[t] || site.ageVerified ? (player = new YT.Player("ytPlayer", {
            width: "100%",
            height: "100%",
            videoId: e.vidID[t],
            playerVars: {
                rel: 0,
                controls: 0,
                showinfo: 0,
                modestbranding: 0,
                allowfullscreen: !0,
                wmode: "transparent"
            },
            events: {
                onReady: e.onPlayerReady,
                onStateChange: e.onPlayerStateChange
            }
        }), TweenMax.to("#ytTrailer", .4, {
            autoAlpha: 1
        }), TweenMax.set("#ytProgBar", {
            width: 0
        }), TweenMax.to("#videos", .6, {
            opacity: 1,
            delay: 2
        }), isMobile.any() && TweenMax.set(site.videoControls, {
            autoAlpha: 0
        }), setTimeout(function () {}, 100), this.vidActiveID = t, site.deeplinkViaVid = !1, site.yt.active = !0) : (TweenMax.to(e.rbOverlay, .7, {
            autoAlpha: 1
        }), TweenMax.set("#agegate-day", {
            marginLeft: "10px",
            marginRight: "30px"
        }), TweenMax.set("#agegate-month", {
            marginLeft: "10px",
            marginRight: "30px"
        }), TweenMax.set("#agegate-year", {
            marginLeft: "10px",
            marginRight: "30px"
        }), site.verifyVidID = t)
    },
    switchPagination: function (t) {
        TweenMax.set(".ytPagiBtn", {
            background: "#e7e40d",
            cursor: "pointer"
        }), TweenMax.set(this.pagiButtons[t], {
            background: "#FFF",
            cursor: "default"
        })
    },
    onPlayerReady: function () {
        isMobile.any() ? TweenMax.to("#videos", .6, {
            autoAlpha: 1,
            delay: 2
        }) : (player.playVideo(), TweenMax.to("#videos", .6, {
            autoAlpha: 1,
            delay: 2
        }), player.seekTo(5), setTimeout(function () {
            site.yt.mousemove(), site.yt.showCursor()
        }, 2e3)), TweenMax.to("#ytPlayer", .4, {
            autoAlpha: 1,
            delay: 1
        }), TweenMax.to("#ytProgBar", .4, {
            autoAlpha: 1
        }), site.resize()
    },
    onPlayerStateChange: function (t) {
        var e = site.yt;
        0 == t.data ? (e.isPlaying = !1, "block" == e.arrowRight.style.display ? $(e.arrowRight)
            .trigger("click") : e.switchVid(0)) : 1 == t.data ? (e.isPlaying = !0, e.timeUpdate(), e.playBtn.style.display = "none", e.pauseBtn.style.display = "block", e.vidDur = player.getDuration(), TweenMax.set(site.videoControls, {
            autoAlpha: 1
        }), isMobile.any() && TweenMax.set(e.playControls, {
            autoAlpha: 1
        })) : 2 == t.data && (e.isPlaying = !1, e.playBtn.style.display = "block", e.pauseBtn.style.display = "none")
    },
    playVid: function () {
        isMobile.any() || soundManager.play("navRoll");
        var t = this;
        t.isPlaying ? (player.pauseVideo(), t.isPlaying = !1) : (player.playVideo(), t.isPlaying = !0)
    },
    pauseVid: function () {
        player.pauseVideo(), this.isPlaying = !1
    },
    timeUpdate: function () {
        var t = this;
        try {
            t.vidTime = player.getCurrentTime();
            var e = t.vidTime / t.vidDur;
            t.updatePerc(e), t.timeStamp.innerHTML = t.timeToHHMMSS(t.vidTime), setTimeout(function () {
                t.isPlaying && t.timeUpdate()
            }, 300)
        } catch (i) {}
    },
    fullscreen: function () {
        yt = document.getElementById("ytPlayer"), yt.webkitRequestFullScreen && yt.webkitRequestFullScreen(), yt.mozRequestFullScreen && yt.mozRequestFullScreen(), yt.requestFullScreen && yt.requestFullScreen()
    },
    resizePlayer: function () {
        var t = 850,
            e = 475,
            i = 128,
            n = site.screenHeight,
            s = site.screenWidth / n,
            o = 1 - i / e,
            r = e * o,
            a = t / r,
            l = n / r,
            u = t * l;
        if (h = -(e * l * (i / e / 2)), mLeft = -(t * l - site.screenWidth) / 2, TweenMax.set("#ytTrailer", {
                height: n
            }), a > s) TweenMax.set("#ytPlayer", {
            left: "50%",
            width: u,
            height: e * l,
            marginTop: h,
            marginLeft: mLeft
        });
        else {
            var e = site.screenWidth * o,
                h = -(e - n) / 2;
            TweenMax.set("#ytPlayer", {
                left: "0%",
                width: "100%",
                height: e,
                marginTop: h,
                marginLeft: 0
            })
        }
    },
    mousemove: function (t) {
        var e = this;
        isMobile.any() || (clearTimeout(this.mouseMove), TweenMax.to("#nav, #epkBtn, #footer, #header", .5, {
            opacity: 1
        }), TweenMax.to(site.videoControls, .5, {
            opacity: 1
        }), this.mouseMove = setTimeout(function () {
            site.yt.active && e.isPlaying && (TweenMax.to("#nav, #epkBtn, #footer, #header", 1, {
                opacity: 0
            }), TweenMax.to(site.videoControls, 1, {
                opacity: 0
            }))
        }, 2500))
    },
    setArrows: function () {
        var t = this;
        0 == t.vidActiveID ? (this.arrowLeft.style.display = "none", this.arrowLeftTitle.innerHTML = t.data.videos[t.vidCount].title) : (this.arrowLeft.style.display = "block", this.arrowLeftTitle.innerHTML = t.data.videos[t.vidActiveID - 1].title), t.vidActiveID == t.vidCount ? (this.arrowRight.style.display = "none", this.arrowRightTitle.innerHTML = t.data.videos[0].title) : (this.arrowRight.style.display = "block", this.arrowRightTitle.innerHTML = t.data.videos[t.vidActiveID + 1].title)
    },
    showCursor: function () {
        this.cursorActive ? this.showVidCursor() : this.shareCursorActive ? this.showShareCursor() : this.showArrowCursor()
    },
    hideCursor: function () {
        this.cursorActive ? this.hideVidCursor() : this.shareCursorActive ? this.hideShareCursor() : this.hideArrowCursor()
    },
    showVidCursor: function () {
        TweenMax.killTweensOf(this.playCircle), TweenMax.killTweensOf(this.playControls), TweenMax.killTweensOf(this.playBtn), TweenMax.killTweensOf(this.pauseBtn), TweenMax.killTweensOf(this.timeStamp), TweenMax.to(this.playCircle, .3, {
            scale: 1,
            x: 0,
            y: 0,
            autoAlpha: 1,
            delay: .15
        }), TweenMax.to(this.playControls, .3, {
            scale: 1,
            x: 0,
            y: 0,
            autoAlpha: 1
        }), this.isPlaying || TweenMax.to(this.playBtn, .3, {
            scale: 1,
            autoAlpha: 1,
            delay: .3
        }), this.isPlaying && TweenMax.to(this.pauseBtn, .3, {
            scale: 1,
            autoAlpha: 1,
            delay: .3
        }), TweenMax.fromTo(this.timeStamp, 2, {
            autoAlpha: 0
        }, {
            autoAlpha: .3,
            delay: .6
        })
    },
    hideVidCursor: function () {
        TweenMax.to(this.playCircle, .3, {
            scale: .4,
            x: 3,
            y: 3,
            autoAlpha: 0
        }), TweenMax.to(this.playControls, .3, {
            scale: .4,
            x: 30,
            y: 30,
            autoAlpha: 0,
            delay: .15
        }), this.isPlaying || TweenMax.to(this.playBtn, .3, {
            scale: .4,
            autoAlpha: 0
        }), this.isPlaying && TweenMax.to(this.pauseBtn, .3, {
            scale: .4,
            autoAlpha: 0
        })
    },
    showShareCursor: function () {
        TweenMax.to(this.shareCursor, .3, {
            scale: 1,
            autoAlpha: 1
        })
    },
    hideShareCursor: function () {
        TweenMax.to(this.shareCursor, .3, {
            scale: .5,
            autoAlpha: 0
        })
    },
    showArrowCursor: function () {
        TweenMax.to(this.arrowCursor, .3, {
            autoAlpha: 1
        })
    },
    hideArrowCursor: function () {
        TweenMax.to(this.arrowCursor, .3, {
            autoAlpha: 0
        })
    },
    resize: function () {
        var t = this;
        site.isIE ? this.el.style.height = site.screenHeight - 135 + "px" : setTimeout(function () {
            t.resizePlayer()
        }, 200)
    }
};
var NC = NC || {};
NC.Share = function (t) {
    this.data = t, this.el, this.init(), this.active, this.cursorActive, this.imgWidth
}, NC.Share.prototype = {
    init: function () {
        var t = this;
        this.el = H.createEl("div", {
                position: "absolute",
                top: "0px",
                left: "0px",
                overflow: "hidden",
                visibility: "hidden",
                opacity: "0",
                width: "100%",
                height: "100%",
                background: "rgba(33,33,22,.8)",
                zIndex: "6000"
            }), this.el.id = "Share", this.bg = H.createEl("div", {
                position: "absolute",
                top: "0px",
                left: "0px",
                width: "100%",
                height: "100%"
            }, this.el), isMobile.any() ? this.bgImg = H.createImg("assets/img/common/bg-city.jpg", {
                position: "absolute"
            }, this.bg, site.loader) : (this.bgVid = H.createVideo("assets/videos/NC_EPK_preloaderBG" + H.videoExt, {
                position: "absolute"
            }, this.bg, site.loader), this.bgVid.loop = !0), this.content = H.createEl("div", {
                position: "absolute",
                top: "0px",
                left: "0px",
                width: "100%",
                height: "100%"
            }, this.el), this.img = H.createImg("assets/img/share/share.jpg", {
                position: "absolute",
                top: "50%",
                marginTop: "-395px",
                left: "50%",
                marginLeft: "-263px",
                height: "auto"
            }, this.content, site.loader), this.shareButtons = H.createEl("div", {
                position: "absolute",
                top: "50%",
                left: "50%",
                width: "350px",
                height: "150px",
                marginLeft: "-147px",
                marginTop: "150px"
            }, this.el), this.shareTxt = H.createEl("div", {
                position: "absolute",
                left: "-8px",
                top: "-10px",
                width: "350px",
                color: "#6e6e6e",
                fontFamily: "Bebas",
                fontSize: "16px",
                letterSpacing: "1px"
            }, this.shareButtons), this.shareTxt.innerHTML = "SHARE THIS SITE ON YOUR FAVORITE SOCIAL NETWORK", this.buttons = H.createEl("div", {}, this.shareButtons), this.line1 = H.createEl("div", {
                position: "absolute",
                top: "44px",
                left: "-2020px",
                width: "2000px",
                height: "1px",
                borderTop: "solid 1px rgba(255,255,255,.2)"
            }, this.buttons), this.btnTb = new NC.ShareButton("tb", "assets/img/share/ico-tb.png"), this.buttons.appendChild(this.btnTb.el), this.btnFb = new NC.ShareButton("fb", "assets/img/share/ico-fb.png"), this.buttons.appendChild(this.btnFb.el), this.btnTw = new NC.ShareButton("tw", "assets/img/share/ico-tw.png"), this.buttons.appendChild(this.btnTw.el), this.btnPt = new NC.ShareButton("pt", "assets/img/share/ico-pt.png"), this.buttons.appendChild(this.btnPt.el), this.line2 = H.createEl("div", {
                position: "absolute",
                top: "44px",
                marginLeft: "300px",
                width: "2000px",
                height: "1px",
                borderTop: "solid 1px rgba(255,255,255,.2)"
            }, this.buttons), this.tagline = H.createImg("assets/img/share/tagline.png", {
                position: "absolute",
                top: "50%",
                left: "50%",
                marginTop: "278px",
                marginLeft: "-278px"
            }, this.el, site.loader), this.closeBtn = H.createImg("assets/img/share/close-btn.png", {
                position: "absolute",
                top: "90px",
                right: "120px",
                visibility: "hidden",
                opacity: "0",
                cursor: "url(assets/img/cursor/empty.png),default"
            }, this.content, site.loader), isMobile.any() && TweenMax.set(this.closeBtn, {
                autoAlpha: 1
            }), $(this.closeBtn)
            .click(function () {
                isMobile.any() || soundManager.play("transition"), t.animateOut()
            })
    },
    onMove: function (t) {
        var e = this;
        this.active && (t.clientX > 0 && t.clientX < site.screenWidth / 2 - this.imgWidth / 2 || t.clientX > site.screenWidth / 2 + this.imgWidth / 2 && t.clientX < site.screenWidth ? (this.cursorActive || (TweenMax.fromTo(this.closeBtn, .3, {
            scale: .7
        }, {
            scale: 1,
            autoAlpha: 1
        }), this.cursorActive = !0), TweenMax.set(e.closeBtn, {
            top: window.lastY - 68,
            left: window.lastX - 68
        })) : (TweenMax.to(this.closeBtn, .3, {
            scale: .7,
            autoAlpha: 0
        }), this.cursorActive = !1), window.lastX = t.clientX, window.lastY = t.clientY)
    },
    animateOut: function () {
        TweenMax.to(this.el, .7, {
            autoAlpha: 0
        }), isMobile.any() || (this.bgVid.pause(), TweenMax.to(this.closeBtn, .3, {
            autoAlpha: 0
        })), this.active = !1, this.cursorActive = !1, TweenMax.to(site.epkBtn.el, .3, {
            autoAlpha: 1
        })
    },
    animateIn: function (t) {
        TweenMax.to(site.epkBtn.el, .3, {
            autoAlpha: 0
        }), TweenMax.to(this.el, .7, {
            autoAlpha: 1
        }), TweenMax.fromTo(this.img, .5, {
            scale: .85,
            autoAlpha: 0
        }, {
            scale: 1,
            autoAlpha: 1,
            delay: .3
        }), site.isSafari ? TweenMax.staggerFromTo(".shareBtn", .3, {
            scale: .7,
            opacity: 0
        }, {
            scale: 1,
            opacity: 1,
            delay: .8
        }, .1) : TweenMax.staggerFromTo(".shareBtn", .3, {
            rotationY: -90
        }, {
            rotationY: 0,
            delay: .8
        }, .1), TweenMax.fromTo(this.tagline, .3, {
            scale: .98,
            autoAlpha: 0
        }, {
            scale: 1,
            autoAlpha: 1,
            delay: 1.2
        }), TweenMax.fromTo(this.shareTxt, .3, {
            scale: .95,
            autoAlpha: 0
        }, {
            scale: 1,
            autoAlpha: 1,
            delay: 1
        }), TweenMax.fromTo(this.img, .5, {
            scale: .85,
            autoAlpha: 0
        }, {
            scale: 1,
            autoAlpha: 1,
            delay: .3
        }), TweenMax.fromTo(this.line1, 1, {
            autoAlpha: 0
        }, {
            autoAlpha: 1,
            delay: 1
        }), TweenMax.fromTo(this.line2, 1, {
            autoAlpha: 0
        }, {
            autoAlpha: 1,
            delay: 1
        }), isMobile.any() || this.bgVid.play(), this.active = !0
    },
    resize: function () {
        var t = this;
        this.el.style.width = site.screenWidth + "px", this.el.style.height = site.screenHeight + "px", isMobile.any() ? H.resizeToContainer(this.bgImg, this.el, 1600 / 900) : H.resizeToContainer(this.bgVid, this.el, 1600 / 900), site.screenHeight < 900 ? (this.img.style.width = "400px", this.img.style.marginLeft = "-200px", this.img.style.marginTop = "-270px", this.tagline.style.marginTop = "260px", this.tagline.style.width = "400px", this.tagline.style.marginLeft = "-200px", this.imgWidth = 400) : (this.img.style.width = "525px", this.img.style.marginLeft = "-263px", this.img.style.marginTop = "-395px", this.tagline.style.marginTop = "278px", this.tagline.style.width = "555px", this.tagline.style.marginLeft = "-277px", this.imgWidth = 525)
    }
};
var NC = NC || {};
NC.LegalButton = function (t, e) {
    this.el, this.label = t, this.url = e, this.init()
}, NC.LegalButton.prototype = {
    init: function () {
        var t = this;
        this.el = H.createEl("div", {
                position: "relative",
                cssFloat: "right",
                marginRight: "22px",
                lineHeight: "22px",
                cursor: "pointer"
            }), this.link = H.createEl("div", {
                color: "#FFF",
                fontSize: "8px",
                opacity: ".2",
                fontFamily: "Arial, sans-serif",
                fontWeight: "bold"
            }, this.el), this.link.innerHTML = this.label, H.createLink(this.link, this.url, "_blank"), $(this.el)
            .click(function () {
                site.onExternal()
            }), isMobile.any() || $(this.el)
            .hover(function () {
                TweenMax.to(t.link, .3, {
                    opacity: 1
                }), site.sfx("subNav")
            }, function () {
                TweenMax.to(t.link, .3, {
                    opacity: .2
                })
            })
    }
};
var NC = NC || {};
NC.FollowButton = function (t, e) {
    this.el, this.img = t, this.url = e, this.init()
}, NC.FollowButton.prototype = {
    init: function () {
        var t = this;
        this.el = H.createEl("div", {
                position: "relative",
                cssFloat: "left",
                cursor: "pointer"
            }), this.img = H.createImg(this.img, {
                opacity: ".2",
                marginRight: "5px"
            }, this.el, site.loader), H.createLink(this.img, this.url, "_blank"), $(this.el)
            .click(function () {
                site.onExternal()
            }), isMobile.any() || $(this.el)
            .hover(function () {
                site.sfx("share"), TweenMax.to(t.img, .3, {
                    opacity: 1
                })
            }, function () {
                TweenMax.to(t.img, .3, {
                    opacity: .2
                })
            })
    }
};
var NC = NC || {};
NC.ShareButton = function (t, e) {
    this.type = t, this.img = e, this.active, this.init()
}, NC.ShareButton.prototype = {
    init: function () {
        var t = this;
        this.el = H.createEl("div", {
            position: "relative",
            marginTop: "20px",
            cssFloat: "left",
            width: "50px",
            height: "50px",
            border: "solid 1px rgba(255,255,255,.2)",
            cursor: "pointer",
            marginLeft: "10px",
            marginRight: "10px"
        }, null, "shareBtn"), TweenMax.set(this.el, {
            borderRadius: 25
        }), this.img = H.createImg(this.img, {
            position: "absolute",
            top: "12px",
            left: "12px"
        }, this.el);
        var e = site.baseURL,
            i = site.baseURL + "share.jpg";
        $(this.el)
            .click(function () {
                "tw" == t.type && window.open("https://twitter.com/intent/tweet?text=" + escape(site.data.share.twitter) + " http://www.nightcrawlerfilm.com", "", "width=450, height=430, left=" + (site.screenWidth - 450) / 2 + ", top=" + (site.screenHeight - 430) / 2), "tb" == t.type && window.open("http://www.tumblr.com/share/photo?clickthru=" + escape(e) + "&source=" + escape(i) + "&caption=" + escape(site.data.share.tumblrFacebook), "", "width=450, height=430, left=" + (site.screenWidth - 450) / 2 + ", top=" + (site.screenHeight - 430) / 2), "pt" == t.type && window.open("http://www.pinterest.com/pin/create/button/?url=" + escape(e) + "&description=" + escape(site.data.share.pinterest) + "&media=" + escape(i), "", "width=765, height=430, left=" + (site.screenWidth - 765) / 2 + ", top=" + (site.screenHeight - 430) / 2), "fb" == t.type && FB.ui({
                    method: "share_open_graph",
                    action_type: "og.likes",
                    action_properties: JSON.stringify({
                        object: e,
                        image: i,
                        description: escape(site.data.share.tumblrFacebook)
                    })
                }, function (t) {})
            }), isMobile.any() || $(this.el)
            .hover(function () {
                site.sfx("share"), TweenMax.fromTo(t.el, .3, {
                    borderColor: "rgba(255,255,255,.2)"
                }, {
                    borderColor: "rgba(248,240,14,1)"
                })
            }, function () {
                TweenMax.fromTo(t.el, .3, {
                    borderColor: "rgba(248,240,14,1)"
                }, {
                    borderColor: "rgba(255,255,255,.2)"
                })
            })
    }
};
var NC = NC || {};
NC.NavToggleButton = function () {
    this.active, this.init()
}, NC.NavToggleButton.prototype = {
    init: function () {
        var t = this;
        this.el = H.createEl("div", {
                position: "absolute",
                top: "90px",
                left: "50px",
                zIndex: "6000"
            }), this.img = H.createImg("assets/img/common/ico-nav-ipad.png", {}, this.el, site.loader), $(this.el)
            .click(function () {
                t.active ? (t.active = !1, site.nav.focusContent(), TweenMax.to(t.el, .3, {
                    rotation: 0
                })) : (t.active = !0, site.nav.focusNav(), TweenMax.to(t.el, .3, {
                    rotation: 90
                }))
            })
    },
    rotate: function () {
        TweenMax.to(this.el, .3, {
            rotation: 0
        })
    }
};
var NC = NC || {};
NC.RotateScreen = function () {
    this.el, this.init()
}, NC.RotateScreen.prototype = {
    init: function () {
        var t = this;
        this.el = H.createEl("div", {
            position: "absolute",
            top: "0px",
            left: "0px",
            width: "100%",
            height: "100%",
            display: "none",
            overflow: "hidden",
            zIndex: "11000",
            backgroundColor: "#000"
        }, document.body), this.graphic = H.createImg("assets/img/common/iconOrientation.png", {
            position: "absolute",
            top: "50%",
            left: "50%",
            marginLeft: "-155px",
            marginTop: "-165px"
        }, this.el), TweenMax.set(this.graphic, {
            scale: 1.5
        })
    },
    resize: function () {
        var t = this;
        this.el.style.display = $(window)
            .width() < $(window)
            .height() ? "block" : "none"
    }
};
var NC = NC || {};
NC.GalleryShare = function (t, e) {
    this.data = t, this.imgUrl = e, this.imgWidth, this.active, this.cursorActive, this.el, this.init()
}, NC.GalleryShare.prototype = {
    init: function () {
        var t = this;
        this.el = H.createEl("div", {
                position: "absolute",
                top: "0px",
                left: "0px",
                overflow: "hidden",
                visibility: "hidden",
                opacity: "0",
                width: "100%",
                height: "100%",
                background: "rgba(0,0,0,.85)",
                zIndex: "6000"
            }), this.el.id = "GalleryShare", this.bg = H.createEl("div", {
                position: "absolute",
                top: "0px",
                left: "0px",
                width: "100%",
                height: "100%"
            }, this.el), this.content = H.createEl("div", {
                position: "absolute",
                top: "0px",
                left: "0px",
                width: "100%",
                height: "100%"
            }, this.el), this.tagline = H.createImg("assets/img/share/gallery-tagline.png", {
                position: "absolute",
                top: "50%",
                left: "50%",
                marginTop: "-324px",
                marginLeft: "-277px"
            }, this.el, site.loader), this.shareImg = H.createEl("div", {
                position: "relative",
                top: "50%",
                marginTop: "-244px",
                left: "50%",
                marginLeft: "-263px",
                width: "570px",
                height: "420px",
                overflow: "hidden",
                visibility: "hidden",
                opacity: "0"
            }, this.el), this.imgWidth = 570, this.img = H.createImg("", {
                position: "absolute",
                left: "-86px",
                height: "100%",
                width: "auto"
            }, this.shareImg), this.shareButtons = H.createEl("div", {
                position: "absolute",
                top: "50%",
                left: "50%",
                width: "350px",
                height: "150px",
                marginLeft: "-144px",
                marginTop: "220px"
            }, this.el), this.shareTxt = H.createEl("div", {
                position: "absolute",
                left: "-13px",
                top: "-10px",
                width: "350px",
                color: "#6e6e6e",
                fontFamily: "Bebas",
                fontSize: "16px",
                letterSpacing: "1px"
            }, this.shareButtons), this.shareTxt.innerHTML = '<span style="color:#FFF">SHARE THIS IMAGE</span> <span>ON YOUR FAVORITE SOCIAL NETWORK</span>', this.buttons = H.createEl("div", {}, this.shareButtons), this.line1 = H.createEl("div", {
                position: "absolute",
                top: "44px",
                left: "-2020px",
                width: "2000px",
                height: "1px",
                borderTop: "solid 1px rgba(255,255,255,.2)"
            }, this.buttons), this.btnTb = new NC.GalleryShareButton("tb", "assets/img/share/ico-tb.png", t.imgUrl), this.buttons.appendChild(this.btnTb.el), this.btnFb = new NC.GalleryShareButton("fb", "assets/img/share/ico-fb.png", t.imgUrl), this.buttons.appendChild(this.btnFb.el), this.btnTw = new NC.GalleryShareButton("tw", "assets/img/share/ico-tw.png", t.imgUrl), this.buttons.appendChild(this.btnTw.el), this.btnPt = new NC.GalleryShareButton("pt", "assets/img/share/ico-pt.png", t.imgUrl), this.buttons.appendChild(this.btnPt.el), this.line2 = H.createEl("div", {
                position: "absolute",
                top: "44px",
                marginLeft: "300px",
                width: "2000px",
                height: "1px",
                borderTop: "solid 1px rgba(255,255,255,.2)"
            }, this.buttons), this.closeBtn = H.createImg("assets/img/share/close-btn.png", {
                position: "absolute",
                top: "90px",
                right: "120px",
                visibility: "hidden",
                opacity: "0",
                cursor: "url(assets/img/cursor/empty.png),default"
            }, this.content, site.loader), (isMobile.any() || site.isIE) && TweenMax.set(this.closeBtn, {
                autoAlpha: 1,
                cursor: "pointer"
            }), $(this.closeBtn)
            .click(function () {
                isMobile.any() || soundManager.play("transition"), t.animateOut()
            })
    },
    animateOut: function () {
        TweenMax.to(this.el, .7, {
            autoAlpha: 0
        }), TweenMax.to(site.header.el, .3, {
            opacity: 1
        }), TweenMax.to(site.footer.el, .3, {
            opacity: 1
        }), TweenMax.set("#nav", {
            display: "block"
        }), this.cursorActive = !1, isMobile.any() || TweenMax.to(this.closeBtn, .3, {
            autoAlpha: 0
        }), TweenMax.to(site.epkBtn.el, .3, {
            autoAlpha: 1
        }), this.active = !1
    },
    animateIn: function (t) {
        var e = this;
        TweenMax.to(site.epkBtn.el, .3, {
                autoAlpha: 0
            }), this.img.src = t, TweenMax.set(this.shareImg, {
                autoAlpha: 0
            }), $(this.img)
            .load(function () {
                $(e.img)
                    .unbind("load"), TweenMax.fromTo(e.shareImg, .5, {
                        scale: .85,
                        autoAlpha: 0
                    }, {
                        scale: 1,
                        autoAlpha: 1,
                        delay: .3
                    })
            }), site.galleryShareImage = t, TweenMax.fromTo(this.tagline, 1, {
                scale: .98,
                autoAlpha: 0
            }, {
                scale: 1,
                autoAlpha: 1,
                delay: 1
            }), TweenMax.fromTo(this.shareTxt, 1, {
                scale: .95,
                autoAlpha: 0
            }, {
                scale: 1,
                autoAlpha: 1,
                delay: 1.2
            }), site.isSafari ? TweenMax.staggerFromTo(".gallShareBtn", .3, {
                scale: .7,
                opacity: 0
            }, {
                scale: 1,
                opacity: 1,
                delay: .8
            }, .1) : TweenMax.staggerFromTo(".gallShareBtn", .3, {
                rotationY: -90
            }, {
                rotationY: 0,
                delay: .8
            }, .1), TweenMax.fromTo(this.line1, 1, {
                autoAlpha: 0
            }, {
                autoAlpha: 1,
                delay: 1
            }), TweenMax.fromTo(this.line2, 1, {
                autoAlpha: 0
            }, {
                autoAlpha: 1,
                delay: 1
            }), TweenMax.to(this.el, .7, {
                autoAlpha: 1
            }), TweenMax.to(site.header.el, .3, {
                opacity: 0
            }), TweenMax.to(site.footer.el, .3, {
                opacity: 0
            }), TweenMax.set("#nav", {
                display: "none"
            }), this.active = !0
    },
    onMove: function (t) {
        var e = this;
        this.active && (t.clientX > 0 && t.clientX < site.screenWidth / 2 - this.imgWidth / 2 || t.clientX > site.screenWidth / 2 + this.imgWidth / 2 && t.clientX < site.screenWidth ? (this.cursorActive || (TweenMax.fromTo(this.closeBtn, .3, {
            scale: .7
        }, {
            scale: 1,
            autoAlpha: 1
        }), this.cursorActive = !0), (window.lastX !== t.clientX || window.lastY !== t.clientY) && TweenMax.set(e.closeBtn, {
            top: window.lastY - 68,
            left: window.lastX - 68
        })) : (TweenMax.to(this.closeBtn, .3, {
            scale: .7,
            autoAlpha: 0
        }), this.cursorActive = !1), window.lastX = t.clientX, window.lastY = t.clientY)
    },
    resize: function () {
        var t = this;
        this.el.style.width = site.screenWidth + "px", this.el.style.height = site.screenHeight + "px", isMobile.any() ? H.resizeToContainer(this.bgImg, this.el, 1600 / 900) : H.resizeToContainer(this.bgVid, this.el, 1600 / 900), site.screenHeight < 700 ? (this.tagline.style.marginTop = "-260px", this.tagline.style.width = "400px", this.tagline.style.marginLeft = "-200px", this.shareImg.style.height = "360px", this.shareImg.style.width = "400px", this.shareImg.style.marginLeft = "-200px", this.shareImg.style.marginTop = "-200px", this.img.style.left = "-130px", this.imgWidth = 400) : (this.tagline.style.marginTop = "-324px", this.tagline.style.width = "555px", this.tagline.style.marginLeft = "-277px", this.shareImg.style.height = "420px", this.shareImg.style.width = "570px", this.shareImg.style.marginLeft = "-285px", this.shareImg.style.marginTop = "-244px", this.img.style.left = "-86px", this.imgWidth = 570)
    }
};
var NC = NC || {};
NC.GalleryShareButton = function (t, e, i) {
    this.type = t, this.img = e, this.shareImg = i, this.active, this.init()
}, NC.GalleryShareButton.prototype = {
    init: function () {
        var t = this;
        this.el = H.createEl("div", {
                position: "relative",
                marginTop: "20px",
                cssFloat: "left",
                width: "50px",
                height: "50px",
                border: "solid 1px rgba(255,255,255,.2)",
                cursor: "pointer",
                marginLeft: "10px",
                marginRight: "10px"
            }, null, "gallShareBtn"), TweenMax.set(this.el, {
                borderRadius: 25
            }), this.img = H.createImg(this.img, {
                position: "absolute",
                top: "12px",
                left: "12px"
            }, this.el), $(this.el)
            .click(function () {
                var e = site.baseURL,
                    i = e + site.galleryShareImage;
                "tw" == t.type && window.open("https://twitter.com/intent/tweet?text=" + escape(site.data.share.twitter) + " http://www.nightcrawlerfilm.com", "", "width=450, height=430, left=" + (site.screenWidth - 450) / 2 + ", top=" + (site.screenHeight - 430) / 2), "tb" == t.type && window.open("http://www.tumblr.com/share/photo?clickthru=" + escape(e) + "&source=" + escape(i) + "&caption=" + escape(site.data.share.tumblrFacebook), "", "width=450, height=430, left=" + (site.screenWidth - 450) / 2 + ", top=" + (site.screenHeight - 430) / 2), "pt" == t.type && window.open("http://www.pinterest.com/pin/create/button/?url=" + escape(e) + "&description=" + escape(site.data.share.pinterest) + "&media=" + escape(i), "", "width=765, height=430, left=" + (site.screenWidth - 765) / 2 + ", top=" + (site.screenHeight - 430) / 2), "fb" == t.type && FB.ui({
                    method: "share_open_graph",
                    action_type: "og.likes",
                    action_properties: JSON.stringify({
                        object: e,
                        image: i,
                        description: escape(site.data.share.tumblrFacebook)
                    })
                }, function (t) {})
            }), isMobile.any() || $(this.el)
            .hover(function () {
                site.sfx("share"), TweenMax.fromTo(t.el, .3, {
                    borderColor: "rgba(255,255,255,.2)"
                }, {
                    borderColor: "rgba(248,240,14,1)"
                })
            }, function () {
                TweenMax.fromTo(t.el, .3, {
                    borderColor: "rgba(248,240,14,1)"
                }, {
                    borderColor: "rgba(255,255,255,.2)"
                })
            })
    }
};
var NC = NC || {};
NC.Quote = function (t) {
    this.ID = t, this.active, this.init()
}, NC.Quote.prototype = {
    init: function () {
        var t = this;
        if (t.tmpID = this.ID, this.el = H.createEl("div", {
                position: "absolute",
                width: "100%",
                height: "148px",
                textAlign: "center",
                visibility: "hidden",
                opacity: "0",
                zIndex: "99"
            }), this.quote1 = H.createEl("div", {
                position: "absolute",
                width: "100%",
                textAlign: "center"
            }, this.el), 0 == this.ID) this.quoteImg = H.createImg(site.data.pages[0].info[0].quotes[t.tmpID].byImage, {
            position: "absolute",
            left: "50%",
            marginLeft: "-230px"
        }, this.quote1);
        else {
            this.quoteImg = H.createImg(site.data.pages[0].info[0].quotes[t.tmpID].byImage, {
                position: "absolute",
                left: "50%",
                marginLeft: "-175px"
            }, this.quote1);
            var e = [],
                i = site.data.pages[0].info[0].quotes[t.tmpID].quote;
            $(i)
                .each(function () {
                    e.push($(this)
                        .text())
                }), this.quoteLine1 = H.createEl("div", {
                    position: "absolute",
                    top: "55px",
                    width: "100%",
                    textAlign: "center",
                    fontSize: "35px",
                    color: "#FFF",
                    letterSpacing: "10px",
                    textTransform: "uppercase",
                    fontFamily: "Futura",
                    lineHeight: "35px"
                }, this.el), this.quoteLine1.innerHTML += '"' + e[0], this.quoteLine2 = H.createEl("div", {
                    position: "absolute",
                    top: "110px",
                    width: "100%",
                    textAlign: "center",
                    fontSize: "35px",
                    color: "#FFF",
                    letterSpacing: "10px",
                    textTransform: "uppercase",
                    fontFamily: "Futura",
                    lineHeight: "35px"
                }, this.el), e[1] ? this.quoteLine2.innerHTML = e[1] + '"' : (this.quoteLine1.innerHTML += '"', TweenMax.set(this.el, {
                    top: 35
                }))
        }
    }
};
var NC = NC || {};
NC.VideoShare = function (t, e) {
    this.data = t, this.imgUrl = e, this.imgWidth, this.active, this.cursorActive, this.el, this.init()
}, NC.VideoShare.prototype = {
    init: function () {
        var t = this;
        this.el = H.createEl("div", {
                position: "absolute",
                top: "0px",
                left: "0px",
                overflow: "hidden",
                visibility: "hidden",
                opacity: "0",
                width: "100%",
                height: "100%",
                background: "rgba(0,0,0,.85)",
                zIndex: "6000"
            }), this.el.id = "VideoShare", this.bg = H.createEl("div", {
                position: "absolute",
                top: "0px",
                left: "0px",
                width: "100%",
                height: "100%"
            }, this.el), this.content = H.createEl("div", {
                position: "absolute",
                top: "0px",
                left: "0px",
                width: "100%",
                height: "100%"
            }, this.el), this.tagline = H.createImg("assets/img/share/gallery-tagline.png", {
                position: "absolute",
                top: "50%",
                left: "50%",
                marginTop: "-315px",
                marginLeft: "-285px",
                width: "571px",
                height: "auto"
            }, this.el, site.loader), this.imgWidth = 570, this.img = H.createImg("assets/img/video/share.jpg", {
                position: "relative",
                top: "50%",
                marginTop: "-244px",
                left: "50%",
                marginLeft: "-282px",
                width: "571px",
                height: "auto",
                overflow: "hidden",
                visibility: "hidden",
                opacity: "0"
            }, this.el, site.loader), t.imgUrl = "assets/img/video/share.jpg", this.shareButtons = H.createEl("div", {
                position: "absolute",
                top: "50%",
                left: "50%",
                width: "350px",
                height: "150px",
                marginLeft: "-144px",
                marginTop: "220px"
            }, this.el), this.shareTxt = H.createEl("div", {
                position: "absolute",
                left: "-13px",
                top: "-10px",
                width: "350px",
                color: "#6e6e6e",
                fontFamily: "Bebas",
                fontSize: "16px",
                letterSpacing: "1px"
            }, this.shareButtons), this.shareTxt.innerHTML = '<span style="color:#FFF">SHARE THIS VIDEO</span> <span>ON YOUR FAVORITE SOCIAL NETWORK</span>', this.buttons = H.createEl("div", {}, this.shareButtons), this.line1 = H.createEl("div", {
                position: "absolute",
                top: "44px",
                left: "-2020px",
                width: "2000px",
                height: "1px",
                borderTop: "solid 1px rgba(255,255,255,.2)"
            }, this.buttons), this.btnTb = new NC.VideoShareButton("tb", "assets/img/share/ico-tb.png", t.imgUrl), this.buttons.appendChild(this.btnTb.el), this.btnFb = new NC.VideoShareButton("fb", "assets/img/share/ico-fb.png", t.imgUrl), this.buttons.appendChild(this.btnFb.el), this.btnTw = new NC.VideoShareButton("tw", "assets/img/share/ico-tw.png", t.imgUrl), this.buttons.appendChild(this.btnTw.el), this.btnPt = new NC.VideoShareButton("pt", "assets/img/share/ico-pt.png", t.imgUrl), this.buttons.appendChild(this.btnPt.el), this.line2 = H.createEl("div", {
                position: "absolute",
                top: "44px",
                marginLeft: "300px",
                width: "2000px",
                height: "1px",
                borderTop: "solid 1px rgba(255,255,255,.2)"
            }, this.buttons), this.closeBtn = H.createImg("assets/img/share/close-btn.png", {
                position: "absolute",
                top: "90px",
                right: "120px",
                visibility: "hidden",
                opacity: "0",
                cursor: "url(assets/img/cursor/empty.png),default"
            }, this.content, site.loader), isMobile.any() && TweenMax.set(this.closeBtn, {
                autoAlpha: 1
            }), $(this.closeBtn)
            .click(function () {
                isMobile.any() || soundManager.play("transition"), t.animateOut()
            })
    },
    animateOut: function () {
        TweenMax.to(this.el, .7, {
            autoAlpha: 0
        }), TweenMax.to(site.header.el, .3, {
            opacity: 1
        }), TweenMax.to(site.footer.el, .3, {
            opacity: 1
        }), TweenMax.set("#nav", {
            display: "block"
        }), this.cursorActive = !1, isMobile.any() || TweenMax.to(this.closeBtn, .3, {
            autoAlpha: 0
        }), TweenMax.to(site.epkBtn.el, .3, {
            autoAlpha: 1
        }), this.active = !1
    },
    animateIn: function (t) {
        TweenMax.to(site.epkBtn.el, .3, {
            autoAlpha: 0
        }), TweenMax.fromTo(this.tagline, 1, {
            scale: .98,
            autoAlpha: 0
        }, {
            scale: 1,
            autoAlpha: 1,
            delay: 1
        }), TweenMax.fromTo(this.shareTxt, 1, {
            scale: .95,
            autoAlpha: 0
        }, {
            scale: 1,
            autoAlpha: 1,
            delay: 1.2
        }), TweenMax.fromTo(this.img, .5, {
            scale: .85,
            autoAlpha: 0
        }, {
            scale: 1,
            autoAlpha: 1,
            delay: .3
        }), site.isSafari ? TweenMax.staggerFromTo(".vidShareBtn", .3, {
            scale: .7,
            opacity: 0
        }, {
            scale: 1,
            opacity: 1,
            delay: .8
        }, .1) : TweenMax.staggerFromTo(".vidShareBtn", .3, {
            rotationY: -90
        }, {
            rotationY: 0,
            delay: .8
        }, .1), TweenMax.fromTo(this.line1, 1, {
            autoAlpha: 0
        }, {
            autoAlpha: 1,
            delay: 1
        }), TweenMax.fromTo(this.line2, 1, {
            autoAlpha: 0
        }, {
            autoAlpha: 1,
            delay: 1
        }), TweenMax.to(this.el, .7, {
            autoAlpha: 1
        }), TweenMax.to(site.header.el, .3, {
            opacity: 0
        }), TweenMax.to(site.footer.el, .3, {
            opacity: 0
        }), TweenMax.set("#nav", {
            display: "none"
        }), this.active = !0
    },
    onMove: function (t) {
        var e = this;
        this.active && (t.clientX > 0 && t.clientX < site.screenWidth / 2 - this.imgWidth / 2 || t.clientX > site.screenWidth / 2 + this.imgWidth / 2 && t.clientX < site.screenWidth ? (this.cursorActive || (TweenMax.fromTo(this.closeBtn, .3, {
            scale: .7
        }, {
            scale: 1,
            autoAlpha: 1
        }), this.cursorActive = !0), TweenMax.set(e.closeBtn, {
            top: window.lastY - 68,
            left: window.lastX - 68
        })) : (TweenMax.to(this.closeBtn, .3, {
            scale: .7,
            autoAlpha: 0
        }), this.cursorActive = !1), window.lastX = t.clientX, window.lastY = t.clientY)
    },
    resize: function () {
        var t = this;
        this.el.style.width = site.screenWidth + "px", this.el.style.height = site.screenHeight + "px", isMobile.any() ? H.resizeToContainer(this.bgImg, this.el, 1600 / 900) : H.resizeToContainer(this.bgVid, this.el, 1600 / 900), site.screenHeight < 700 ? (this.tagline.style.marginTop = "-260px", this.tagline.style.width = "400px", this.tagline.style.marginLeft = "-200px", this.shareImg.style.height = "360px", this.shareImg.style.width = "400px", this.shareImg.style.marginLeft = "-200px", this.shareImg.style.marginTop = "-200px", this.img.style.left = "-130px", this.imgWidth = 400) : (this.tagline.style.marginTop = "-324px", this.tagline.style.width = "555px", this.tagline.style.marginLeft = "-277px", this.shareImg.style.height = "420px", this.shareImg.style.width = "570px", this.shareImg.style.marginLeft = "-285px", this.shareImg.style.marginTop = "-244px", this.img.style.left = "-86px", this.imgWidth = 570)
    }
};
var NC = NC || {};
NC.VideoShareButton = function (t, e, i) {
    this.type = t, this.img = e, this.shareImg = i, this.active, this.init()
}, NC.VideoShareButton.prototype = {
    init: function () {
        var t = this;
        this.el = H.createEl("div", {
                position: "relative",
                marginTop: "20px",
                cssFloat: "left",
                width: "50px",
                height: "50px",
                border: "solid 1px rgba(255,255,255,.2)",
                cursor: "pointer",
                marginLeft: "10px",
                marginRight: "10px"
            }, null, "vidShareBtn"), TweenMax.set(this.el, {
                borderRadius: 25
            }), this.img = H.createImg(this.img, {
                position: "absolute",
                top: "12px",
                left: "12px"
            }, this.el), $(this.el)
            .click(function () {
                var e = site.baseURL + t.shareImg,
                    i = site.baseURL + "#videos";
                "tw" == t.type && window.open("https://twitter.com/intent/tweet?text=" + escape(site.data.share.twitter) + " http://www.nightcrawlerfilm.com/" + escape("#videos"), "", "width=450, height=430, left=" + (site.screenWidth - 450) / 2 + ", top=" + (site.screenHeight - 430) / 2), "tb" == t.type && window.open("http://www.tumblr.com/share/photo?clickthru=" + escape(i) + "&source=" + escape(e) + "&caption=" + escape(site.data.share.tumblrFacebook), "", "width=450, height=430, left=" + (site.screenWidth - 450) / 2 + ", top=" + (site.screenHeight - 430) / 2), "pt" == t.type && window.open("http://www.pinterest.com/pin/create/button/?url=" + escape(i) + "&description=" + escape(site.data.share.pinterest) + "&media=" + escape(e), "", "width=765, height=430, left=" + (site.screenWidth - 765) / 2 + ", top=" + (site.screenHeight - 430) / 2), "fb" == t.type && FB.ui({
                    method: "share_open_graph",
                    action_type: "og.likes",
                    action_properties: JSON.stringify({
                        object: site.baseURL,
                        image: e,
                        description: escape(site.data.share.tumblrFacebook)
                    })
                }, function (t) {})
            }), isMobile.any() || $(this.el)
            .hover(function () {
                site.sfx("share"), TweenMax.fromTo(t.el, .3, {
                    borderColor: "rgba(255,255,255,.2)"
                }, {
                    borderColor: "rgba(248,240,14,1)"
                })
            }, function () {
                TweenMax.fromTo(t.el, .3, {
                    borderColor: "rgba(248,240,14,1)"
                }, {
                    borderColor: "rgba(255,255,255,.2)"
                })
            })
    }
};
var NC = NC || {};
NC.About = function (t) {
    this.data = t, this.el, this.synActive, this.cqActive, this.currQuote = 0, this.quotes = [], this.prevQuotes = [], this.nextQuotes = [], this.currQuotes = [], this.quoteScrollPos = 0, this.speedFactor = 1, this.cursorActive, this.quoteTimer, this.firstLoad = !0, this.init()
}, NC.About.prototype = {
    init: function () {
        var t = this;
        this.el = H.createEl("div", {
            position: "absolute",
            top: "0px",
            left: "0px",
            overflow: "hidden",
            visibility: "hidden",
            opacity: "0",
            width: "100%",
            height: "100%",
            background: "#000"
        }), this.el.id = "About", this.bg = H.createEl("div", {
            position: "absolute",
            top: "0px",
            left: "0px",
            width: "100%",
            height: "100%"
        }, this.el), this.bgQuote = H.createImg("assets/img/about/bg-quote.jpg", {
            position: "absolute"
        }, this.bg, site.loader), this.bgSynopsis = H.createImg("assets/img/about/bg-synopsis.jpg", {
            position: "absolute"
        }, this.bg, site.loader), TweenMax.set(this.bgSynopsis, {
            scale: 1.05
        }), this.content = H.createEl("div", {
            position: "absolute",
            top: "0px",
            left: "0px",
            width: "100%",
            height: "100%"
        }, this.el), this.quote = H.createEl("div", {
            position: "absolute",
            top: "0%",
            left: "0%",
            visibility: "hidden",
            opacity: "0",
            width: "100%",
            height: "100%",
            textAlign: "center",
            overflow: "auto"
        }, this.content), this.imgFader = H.createImg("assets/img/share/fader.png", {
            position: "absolute",
            bottom: "0",
            width: "100%",
            height: "349px"
        }, this.content);
        var e = new NC.Quote(0);
        t.prevQuotes.push(e.el);
        var e = new NC.Quote(1);
        t.prevQuotes.push(e.el);
        var e = new NC.Quote(2);
        t.prevQuotes.push(e.el);
        var e = new NC.Quote(3);
        t.prevQuotes.push(e.el);
        var e = new NC.Quote(4);
        t.prevQuotes.push(e.el);
        var e = new NC.Quote(5);
        t.prevQuotes.push(e.el);
        var e = new NC.Quote(0);
        t.currQuotes.push(e.el);
        var e = new NC.Quote(1);
        t.currQuotes.push(e.el);
        var e = new NC.Quote(2);
        t.currQuotes.push(e.el);
        var e = new NC.Quote(3);
        t.currQuotes.push(e.el);
        var e = new NC.Quote(4);
        t.currQuotes.push(e.el);
        var e = new NC.Quote(5);
        t.currQuotes.push(e.el);
        var e = new NC.Quote(0);
        t.nextQuotes.push(e.el);
        var e = new NC.Quote(1);
        t.nextQuotes.push(e.el);
        var e = new NC.Quote(2);
        t.nextQuotes.push(e.el);
        var e = new NC.Quote(3);
        t.nextQuotes.push(e.el);
        var e = new NC.Quote(4);
        t.nextQuotes.push(e.el);
        var e = new NC.Quote(5);
        for (t.nextQuotes.push(e.el), this.prevQuoteMask = H.createEl("div", {
                position: "absolute",
                top: "50%",
                marginTop: "-190px",
                left: "0",
                overflow: "hidden",
                width: "100%",
                height: "148px",
                background: "rgba(255,255,255,0)",
                opacity: .5
            }, this.quote), TweenMax.set(this.prevQuoteMask, {
                scale: .5
            }), i = 0; i < t.nextQuotes.length; i++) this.prevQuoteMask.appendChild(t.prevQuotes[i]);
        for (this.currQuoteMask = H.createEl("div", {
                position: "absolute",
                top: "50%",
                marginTop: "-60px",
                left: "0",
                overflow: "hidden",
                width: "100%",
                height: "148px",
                background: "rgba(255,255,255,0)"
            }, this.quote), i = 0; i < t.currQuotes.length; i++) this.currQuoteMask.appendChild(t.currQuotes[i]);
        for (this.nextQuoteMask = H.createEl("div", {
                position: "absolute",
                top: "50%",
                marginTop: "70px",
                left: "0",
                overflow: "hidden",
                width: "100%",
                height: "148px",
                background: "rgba(255,255,255,0)",
                opacity: .5
            }, this.quote), TweenMax.set(this.nextQuoteMask, {
                scale: .5
            }), i = 0; i < t.nextQuotes.length; i++) this.nextQuoteMask.appendChild(t.nextQuotes[i]);
        this.quoteControl = H.createEl("div", {
                position: "absolute",
                marginLeft: "-60px",
                marginTop: "-60px",
                width: "120px",
                height: "120px",
                cursor: "url(assets/img/cursor/empty.png),default",
                visibility: "hidden",
                opacity: "0",
                zIndex: "100"
            }, this.content), isMobile.any() && TweenMax.set(this.quoteControl, {
                bottom: 100,
                right: 60
            }), this.canvas = H.createEl("canvas", {
                position: "absolute",
                top: "25px",
                left: "25px",
                cursor: "url(assets/img/cursor/empty.png),default"
            }, this.quoteControl), this.canvas.width = 70, this.canvas.height = 70, this.ctx = this.canvas.getContext("2d"), this.ctx.lineWidth = 1, this.ctx.strokeStyle = "rgba(255,255,255,0.2)", this.ctx.beginPath(), this.ctx.arc(35, 35, 33, 0, 2 * Math.PI), this.ctx.stroke(), TweenMax.set(this.canvas, {
                rotation: -90
            }), this.arrowUp = H.createImg("assets/img/common/arrowUp.png", {
                position: "absolute",
                top: "53px",
                left: "53px",
                cursor: "url(assets/img/cursor/empty.png),default",
                visibility: "hidden",
                opacity: "0"
            }, this.quoteControl, site.loader), (isMobile.any() || site.isIE) && TweenMax.set(this.arrowUp, {
                autoAlpha: 1
            }), $(this.arrowUp)
            .click(function () {
                isMobile.any() || soundManager.play("subNav1"), t.nextQuote()
            }), this.arrowDown = H.createImg("assets/img/common/arrowDown.png", {
                position: "absolute",
                top: "53px",
                left: "53px",
                cursor: "url(assets/img/cursor/empty.png),default"
            }, this.quoteControl, site.loader), (isMobile.any() || site.isIE) && TweenMax.set(this.arrowDown, {
                autoAlpha: 0
            }), $(this.arrowDown)
            .click(function () {
                isMobile.any() || soundManager.play("subNav1"), t.prevQuote()
            }), this.synopsis = H.createEl("div", {
                position: "absolute",
                top: "0px",
                left: "0px",
                overflow: "hidden",
                visibility: "hidden",
                opacity: "0",
                width: "100%",
                height: "100%"
            }, this.content), this.synContent = H.createEl("div", {
                position: "absolute",
                top: "50%",
                left: "50%",
                width: "800px",
                height: "400px",
                marginTop: "-160px",
                marginLeft: "-283px",
                color: "#FFF",
                fontSize: "12px",
                fontFamily: "Arial",
                fontWeight: "bold",
                lineHeight: "22px",
                letterSpacing: "1px",
                background: "rgba(255,255,255,0)"
            }, this.synopsis), this.synContent.id = "synContent";
        var n;
        n = '<span style="left: 57px; top: 0px; color: yellow">Nightcrawler</span>', n += '<span style="left: 147px; top: 0px; ">Is a pulse-pounding thriller</span>', n += '<span style="left: 340px; top: 0px; ">-  set in the nocturnal underbelly of</span>', n += '<span style="left: 194px; top: 15px; ">contemporary  Los Angeles.</span>', n += "<span style=\"left: 119px; top: 53px; font-family: 'Verdana'; color: yellow; font-style: Italic\">Jake Gyllenhaal</span>", n += '<span style="left: 245px; top: 53px; color: #b6b2b2">stars as</span>', n += "<span style=\"left: 306px; top: 53px; font-family: 'Verdana'; letter-spacing:2px\">Lou Bloom</span>", n += "<span style=\"left: 398px; top: 53px; font-family: 'Verdana'; font-size: 11px\">,  a driven young man desperate for work who</span>", n += "<span style=\"left: 78px; top: 78px; font-family: 'Verdana'; font-size: 11px\">discovers the high-speed world of L.A. crime.</span>", n += '<span style="left: 22px; top: 113px; ">Finding a group of freelance camera crews who film crashes, fires,</span>', n += '<span style="left: 3px; top: 127px; ">murder and other mayhem,</span>', n += '<span style="left: 197px; top: 127px; ">Lou muscles into the cut-throat, dangerous</span>', n += '<span style="left: 19px; top: 141px; ">realm of nightcrawling</span>', n += '<span style="left: 178px; top: 141px; ">--</span>', n += '<span style="left: 202px; top: 141px; font-size: 11px ">Where each police siren wail equals a</span>', n += '<span style="left: 27px; top: 156px; font-size: 11px">possible windfall and victims are converted into dollars.</span>', n += '<span style="left: 64px; top: 184px; color: #909090">Aided by</span>', n += '<span style="left: 125px; top:184px; font-style: italic">Rene Russo</span>', n += '<span style="left: 208px; top: 184px; ">as Nina</span>', n += '<span style="left: 259px; top: 184px; color: #909090">, a veteran of the blood-sport that is local TV news, </span>', n += '<span style="left: 96px; top: 211px; color: #909090 ">Lou blurs the line between observer and participant to become the star</span>', n += '<span style="left: 75px; top: 234px; ">of his own story.</span>', n += '<span style="left: 99px; top: 268px; color: #878787">DIRECTOR/WRITER:</span>', n += '<span style="left: 235px; top: 268px; ">Dan Gilroy</span>', n += '<span style="left: 329px; top: 267px; color: #878787">PRODUCERS:</span>', n += '<span style="left: 422px; top: 267px; ">Jennifer Fox, Tony</span>', n += '<span style="left: 343px; top: 286px; ">Gilroy, Michel Litvak, Jake Gyllenhaal, </span>', n += '<span style="left: 331px; top: 306px; ">David Lancaster</span>', this.synContent.innerHTML = n
    },
    animateIn: function (t) {
        var e = this;
        TweenMax.set(this.quoteControl, {
            autoAlpha: 0
        }), isMobile.any() || (this.firstLoad && (TweenMax.set(this.quoteControl, {
                top: site.screenHeight - 150,
                left: site.screenWidth - 150
            }), this.firstLoad = !1), site.isIE || $(this.content)
            .mousemove($.proxy(this.onMove, this))), 1 != t ? (setTimeout(function () {
            TweenMax.to(e.quote, .5, {
                autoAlpha: 1
            })
        }, 1e3), TweenMax.set(this.bgQuote, {
            autoAlpha: 1
        }), TweenMax.set(this.bgSynopsis, {
            autoAlpha: 0
        }), TweenMax.set(this.synopsis, {
            autoAlpha: 0
        }), TweenMax.to(e.prevQuotes[e.currQuotes.length - 1], .7, {
            autoAlpha: 1,
            delay: .8
        }), TweenMax.to(e.currQuotes[0], .7, {
            autoAlpha: 1,
            delay: 1
        }), TweenMax.to(e.nextQuotes[1], .7, {
            autoAlpha: 1,
            delay: 1.2
        }), TweenMax.set(this.quoteControl, {
            autoAlpha: 1
        }), this.cqActive = !0) : (TweenMax.set(this.bgQuote, {
            autoAlpha: 0
        }), TweenMax.set(this.bgSynopsis, {
            autoAlpha: 1
        }), TweenMax.set(this.quote, {
            autoAlpha: 0
        }), TweenMax.set(this.synopsis, {
            autoAlpha: 1
        }), this.synActive = !0), TweenMax.to(this.el, 1.1, {
            autoAlpha: 1
        }), 1 == t && (TweenMax.set("#synContent span", {
                display: "block",
                position: "absolute"
            }), this.temp = 0, $("#synContent span")
            .each(function (t) {
                TweenMax.fromTo(this, 1.5, {
                    x: e.random(-150, 150),
                    y: e.random(-150, 150),
                    autoAlpha: 0,
                    scale: 2,
                    rotation: e.random(0, 0),
                    rotationX: e.random(90, 90),
                    rotationY: e.random(90, 90),
                    rotationZ: e.random(90, 90)
                }, {
                    x: 0,
                    y: 0,
                    autoAlpha: 1,
                    scale: 1,
                    delay: e.temp = e.temp + .075,
                    rotation: 0,
                    rotationX: 0,
                    rotationY: 0,
                    rotationZ: 0,
                    ease: Expo.easeOut
                })
            })), e.loopQuotes()
    },
    animateOut: function () {
        TweenMax.to(this.el, .7, {
                autoAlpha: 0
            }), $(this.content)
            .unbind("mousemove"), this.synActive = !1, this.cqActive = !1
    },
    loopQuotes: function () {
        var t = this,
            e = {
                "var": 0
            };
        TweenMax.to(e, 4, {
            "var": 100,
            onUpdate: function () {
                t.updatePerc(e.var / 100)
            },
            ease: Linear.easeNone
        }), clearTimeout(this.quoteTimer), this.quoteTimer = setTimeout(function () {
            t.nextQuote()
        }, 4e3)
    },
    nextQuote: function () {
        var t = this,
            e, i, n = t.currQuotes.length;
        TweenMax.to(t.currQuotes[t.currQuote], 1, {
            autoAlpha: 0,
            y: -150,
            ease: Expo.easeInOut
        }), e = t.currQuote - 1 == -1 ? n - 1 : t.currQuote - 1, TweenMax.to(t.prevQuotes[e], 1, {
            autoAlpha: 0,
            y: -150,
            ease: Expo.easeInOut
        }), i = t.currQuote + 1 == n ? 0 : t.currQuote + 1, TweenMax.to(t.nextQuotes[i], 1, {
            autoAlpha: 0,
            y: -150,
            ease: Expo.easeInOut
        }), t.currQuote++, e++, i++, t.currQuote == n && (t.currQuote = 0), e == n && (e = 0), i == n && (i = 0), TweenMax.fromTo(t.currQuotes[t.currQuote], 1, {
            autoAlpha: 0,
            y: 150
        }, {
            autoAlpha: 1,
            y: 0,
            ease: Expo.easeInOut
        }), TweenMax.fromTo(t.prevQuotes[e], 1, {
            autoAlpha: 0,
            y: 150
        }, {
            autoAlpha: 1,
            y: 0,
            ease: Expo.easeInOut
        }), TweenMax.fromTo(t.nextQuotes[i], 1, {
            autoAlpha: 0,
            y: 150
        }, {
            autoAlpha: 1,
            y: 0,
            ease: Expo.easeInOut
        }), t.cqActive && t.loopQuotes()
    },
    prevQuote: function () {
        var t = this,
            e, i, n = t.currQuotes.length;
        TweenMax.to(t.currQuotes[t.currQuote], 1, {
            autoAlpha: 0,
            y: 150,
            ease: Expo.easeInOut
        }), e = t.currQuote - 1 == -1 ? n - 1 : t.currQuote - 1, TweenMax.to(t.prevQuotes[e], 1, {
            autoAlpha: 0,
            y: 150,
            ease: Expo.easeInOut
        }), i = t.currQuote + 1 == n ? 0 : t.currQuote + 1, TweenMax.to(t.nextQuotes[i], 1, {
            autoAlpha: 0,
            y: 150,
            ease: Expo.easeInOut
        }), t.currQuote--, e--, i--, -1 == t.currQuote && (t.currQuote = n - 1), -1 == e && (e = n - 1), -1 == i && (i = n - 1), TweenMax.fromTo(t.currQuotes[t.currQuote], 1, {
            autoAlpha: 0,
            y: -150
        }, {
            autoAlpha: 1,
            y: 0,
            ease: Expo.easeInOut
        }), TweenMax.fromTo(t.prevQuotes[e], 1, {
            autoAlpha: 0,
            y: -150
        }, {
            autoAlpha: 1,
            y: 0,
            ease: Expo.easeInOut
        }), TweenMax.fromTo(t.nextQuotes[i], 1, {
            autoAlpha: 0,
            y: -150
        }, {
            autoAlpha: 1,
            y: 0,
            ease: Expo.easeInOut
        }), t.cqActive && t.loopQuotes()
    },
    updatePerc: function (t) {
        this.ctx.lineWidth = 1, this.ctx.clearRect(0, 0, 70, 70), this.ctx.strokeStyle = "rgba(255,255,255,0.2)", this.ctx.beginPath(), this.ctx.arc(35, 35, 33, 0, 2 * Math.PI), this.ctx.stroke(), this.ctx.lineWidth = 4, this.ctx.strokeStyle = "#fff600", this.ctx.beginPath(), this.ctx.arc(35, 35, 33, 0, 2 * Math.PI * t), this.ctx.stroke()
    },
    random: function (t, e) {
        return Math.floor(Math.random() * (e - t + 1) + t)
    },
    onMove: function (t) {
        if (this.cqActive) {
            this.cursorActive || window.lastX === t.clientX && window.lastY === t.clientY || (this.cursorActive = !0, TweenMax.to(this.quoteControl, .3, {
                scale: 1,
                autoAlpha: 1
            }));
            var e = site.screenHeight / 2 + 80,
                i = (site.screenHeight - 360) / 2,
                n = 360,
                s = 360 + i,
                o = 360 + i,
                r = site.screenHeight - 75;
            t.clientY < e ? (TweenMax.set(this.arrowUp, {
                autoAlpha: 1
            }), TweenMax.set(this.arrowDown, {
                autoAlpha: 0
            })) : (TweenMax.set(this.arrowUp, {
                autoAlpha: 0
            }), TweenMax.set(this.arrowDown, {
                autoAlpha: 1
            })), (window.lastX !== t.clientX || window.lastY !== t.clientY) && TweenMax.set(this.quoteControl, {
                top: t.clientY,
                left: t.clientX
            }), window.lastX = t.clientX, window.lastY = t.clientY
        } else this.synActive && (this.mX = t.clientX, this.mY = t.clientY, this.offsetX = -(this.mX - site.screenWidth / 2), this.offsetY = -(this.mY - site.screenHeight / 2), TweenMax.to(this.bgSynopsis, 2, {
            x: .05 * this.offsetX,
            y: .05 * this.offsetY,
            ease: Expo.easeOut
        }))
    },
    onNavFooterMove: function (t) {
        this.cqActive && (cursorOnContentEl = $(this.content)
            .is(":hover"), console.log("qwe" + cursorOnContentEl), cursorOnContentEl || this.cursorActive && this.hideCursor())
    },
    hideCursor: function () {
        TweenMax.to(this.quoteControl, .3, {
            scale: .7,
            opacity: 0
        }), this.cursorActive = !1
    },
    resize: function () {
        var t = this;
        this.el.style.width = site.screenWidth + "px", this.el.style.height = site.screenHeight + "px", H.resizeToContainer(this.bgQuote, this.el, 1600 / 900), H.resizeToContainer(this.bgSynopsis, this.el, 1600 / 900)
    }
};
var NC = NC || {};
NC.Video = function (t) {
    this.data = t, this.el, this.init()
}, NC.Video.prototype = {
    init: function () {
        var t = this;
        this.el = H.createEl("div", {
            position: "absolute",
            top: "0px",
            left: "0px",
            overflow: "hidden",
            visibility: "hidden",
            opacity: "0",
            width: "100%",
            height: "100%",
            background: "#000"
        }), this.el.id = "videos", site.pageVideo = this.el, this.bg = H.createEl("div", {
            position: "absolute",
            top: "0px",
            left: "0px",
            width: "100%",
            height: "100%"
        }, this.el), this.content = H.createEl("div", {
            position: "relative",
            top: "0px",
            left: "0px",
            width: "100%",
            height: "100%"
        }, this.el), this.content.id = "videoControls", site.videoControls = this.content, site.yt = new NC.YT(this.data), this.bg.appendChild(isMobile.any() ? site.yt.el : site.yt.el), this.ytInit = !0
    },
    animateOut: function () {
        TweenMax.to(this.el, .7, {
            autoAlpha: 0
        })
    },
    animateIn: function (t) {
        isMobile.any() ? TweenMax.set(this.el, {
            autoAlpha: 1
        }) : site.isMute || site.mute(), site.isIE ? site.yt.loadSimplePlayer(t) : site.yt.loadPlayer(t)
    },
    resize: function () {
        site.yt.resize()
    }
};
var NC = NC || {};
NC.Gallery = function (t) {
    this.data = t, this.el, this.active, this.shareCursorActive, this.rightCursorActive, this.leftCursorActive, this.shareImage, this.init()
}, NC.Gallery.prototype = {
    init: function () {
        var t = this;
        this.el = H.createEl("div", {
            position: "absolute",
            top: "0px",
            left: "0px",
            overflow: "hidden",
            visibility: "hidden",
            opacity: "0",
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,.8)"
        }), this.el.id = "Gallery", this.bg = H.createEl("div", {
            position: "absolute",
            top: "0px",
            left: "0px",
            width: "100%",
            height: "100%"
        }, this.el), this.content = H.createEl("div", {
            position: "absolute",
            top: "0px",
            left: "0px",
            width: "100%",
            height: "100%"
        }, this.el)
    },
    animateOut: function () {
        TweenMax.to(this.el, .7, {
            autoAlpha: 0,
            display: "none"
        }), this.active = !1
    },
    animateIn: function (t) {
        var e = this;
        if (this.active = !0, this.sliderEl) TweenMax.set(this.el, {
            display: "block"
        }), this.resize();
        else {
            this.sliderEl = H.createEl("div", {
                position: "absolute",
                left: "0px",
                top: "0px"
            }, this.content, "rsDefault");
            for (var i = 0; i < this.data.images.length; i++) var n = e.data.images[i].big,
                s = H.createEl("div", {}, e.sliderEl, "rsContent"),
                o = H.createImg(n, {
                    position: "absolute"
                }, s, null, "rsImg");
            var r = "bullets";
            this.slider = $(e.sliderEl)
                .royalSlider({
                    imageScaleMode: "fill",
                    keyboardNavEnabled: !1,
                    arrowsNavAutoHide: !1,
                    slidesSpacing: 0,
                    easeInOut: "easeInOutExpo",
                    easeOut: "easeOutExpo",
                    transitionSpeed: 1e3,
                    navigateByClick: !1,
                    arrowsNavHideOnTouch: !0,
                    loop: !0,
                    controlNavigation: r,
                    sliderDrag: !1,
                    arrowsNav: !1
                })
                .data("royalSlider"), this.arrowLeft = H.createEl("div", {
                    position: "absolute",
                    width: "100px",
                    height: "100px",
                    left: "20px",
                    top: "50%",
                    cursor: "url(assets/img/cursor/empty.png),default",
                    opacity: "0",
                    visibility: "hidden",
                    zIndex: "6000",
                    background: "rgba(255,255,255,0)"
                }, this.content), this.arrowLeftImg = H.createImg("assets/img/common/arrowLeft2.png", {
                    position: "absolute",
                    left: "50%",
                    top: "50%",
                    marginLeft: "-30px",
                    marginTop: "-30px"
                }, this.arrowLeft, this.loader), site.isIE && TweenMax.set(this.arrowLeftImg, {
                    cursor: "pointer"
                }), isMobile.any() || $(this.arrowLeft)
                .hover(function () {}, function () {}), $(this.arrowLeft)
                .click(function () {
                    isMobile.any() || soundManager.play("galleryLeft"), e.slider.prev()
                }), this.arrowRight = H.createEl("div", {
                    position: "absolute",
                    width: "100px",
                    height: "100px",
                    right: "20px",
                    top: "50%",
                    zIndex: "6000",
                    cursor: "url(assets/img/cursor/empty.png),default",
                    opacity: "0",
                    visibility: "hidden",
                    background: "rgba(255,255,255,0)"
                }, this.content), this.arrowRightImg = H.createImg("assets/img/common/arrowRight2.png", {
                    position: "absolute",
                    left: "50%",
                    top: "50%",
                    marginLeft: "-30px",
                    marginTop: "-30px"
                }, this.arrowRight, this.loader), site.isIE && TweenMax.set(this.arrowRightImg, {
                    cursor: "pointer"
                }), isMobile.any() || $(this.arrowRight)
                .hover(function () {}, function () {}), $(this.arrowRight)
                .click(function () {
                    isMobile.any() || soundManager.play("galleryRight"), e.slider.next()
                }), e.shareImage = e.data.images[0].big, this.slider.ev.on("rsBeforeAnimStart", function (t) {
                    e.shareImage = e.data.images[e.slider.currSlideId].big
                }), this.shareArea = H.createEl("div", {
                    position: "absolute",
                    left: "50%",
                    top: "50%",
                    width: "300px",
                    height: "300px",
                    marginTop: "-100px",
                    marginLeft: "-150px"
                }, this.content), this.shareArea.id = "shareArea", this.shareCursor = H.createImg("assets/img/cursor/share.png", {
                    position: "absolute",
                    width: "135px",
                    height: "135px",
                    visibility: "hidden",
                    opacity: "0",
                    cursor: "url(assets/img/cursor/empty.png),default"
                }, this.content, this.loader), (isMobile.any() || site.isIE) && TweenMax.set(this.shareCursor, {
                    autoAlpha: 1,
                    bottom: 100,
                    right: 50,
                    cursor: "pointer"
                }), $(this.shareCursor)
                .click(function () {
                    isMobile.any() || soundManager.play("transition"), site.galleryShare.animateIn(e.shareImage)
                })
        }
        TweenMax.to(this.el, .7, {
                autoAlpha: 1
            }), TweenMax.fromTo(".rsNav", .5, {
                scale: .8
            }, {
                scale: 1,
                delay: 1.4
            }), TweenMax.staggerFromTo(".rsNavItem", .3, {
                autoAlpha: 0
            }, {
                autoAlpha: 1,
                delay: 1.4
            }, .1), isMobile.any() || site.isIE ? (TweenMax.fromTo(this.arrowLeft, .5, {
                autoAlpha: 0,
                x: 50
            }, {
                autoAlpha: 1,
                x: 0,
                delay: 1
            }), TweenMax.fromTo(this.arrowRight, .5, {
                autoAlpha: 0,
                x: -50
            }, {
                autoAlpha: 1,
                x: 0,
                delay: 1
            })) : $(this.content)
            .mousemove(function (t) {
                e.onMove(t)
            }), this.tmpCount = 0
    },
    onNavFooterMove: function (t) {
        cursorOnContentEl = $(this.content)
            .is(":hover"), cursorOnContentEl || (this.leftCursorActive && this.hideCursorArrowLeft(), this.rightCursorActive && this.hideCursorArrowRight(), this.shareCursorActive && this.hideCursorShare())
    },
    onMove: function (t) {
        var e = this;
        if (this.active) {
            var i = $(this.shareArea)
                .offset(),
                n = i.left,
                s = n + $(this.shareArea)
                .innerWidth(),
                o = i.top,
                r = o + $(this.shareArea)
                .innerHeight(),
                a = $("#footer")
                .is(":hover");
            window.lastX < n ? (this.leftCursorActive || (this.leftCursorActive = !0, TweenMax.killTweensOf(this.arrowLeft), TweenMax.to(this.arrowLeft, .25, {
                scale: 1,
                autoAlpha: 1
            })), (window.lastX !== t.clientX || window.lastY !== t.clientY) && TweenMax.set(e.arrowLeft, {
                top: window.lastY - 50,
                left: window.lastX - 50
            })) : (TweenMax.killTweensOf(this.arrowLeft), TweenMax.to(this.arrowLeft, .25, {
                autoAlpha: 0
            }), this.leftCursorActive = !1), window.lastX > s ? (this.rightCursorActive || (this.rightCursorActive = !0, TweenMax.to(this.arrowRight, .25, {
                scale: 1,
                autoAlpha: 1
            })), (window.lastX !== t.clientX || window.lastY !== t.clientY) && TweenMax.set(e.arrowRight, {
                top: window.lastY - 50,
                left: window.lastX - 50
            })) : (TweenMax.to(this.arrowRight, .25, {
                autoAlpha: 0
            }), this.rightCursorActive = !1), this.shareCursorActive ? ((window.lastX !== t.clientX || window.lastY !== t.clientY) && TweenMax.set(e.shareCursor, {
                top: window.lastY - 68,
                left: window.lastX - 68
            }), (window.lastX < n || window.lastX > s || window.lastY < o || window.lastY > r) && (TweenMax.to(e.shareCursor, .25, {
                scale: .85,
                autoAlpha: 0
            }), e.shareCursorActive = !1)) : window.lastX > n && window.lastX < s && window.lastY > o && window.lastY < r && (TweenMax.fromTo(e.shareCursor, .3, {
                scale: .8,
                autoAlpha: 0
            }, {
                scale: 1,
                autoAlpha: 1
            }), e.shareCursorActive = !0), window.lastX = t.clientX, window.lastY = t.clientY
        }
    },
    hideCursorArrowLeft: function () {
        TweenMax.to(this.arrowLeft, .05, {
            autoAlpha: 0
        }), this.leftCursorActive = !1
    },
    hideCursorArrowRight: function () {
        TweenMax.to(this.arrowRight, .05, {
            autoAlpha: 0
        }), this.rightCursorActive = !1
    },
    hideCursorShare: function () {
        TweenMax.to(this.shareCursor, .25, {
            scale: .85,
            autoAlpha: 0
        }), this.shareCursorActive = !1
    },
    resize: function () {
        this.sliderEl && (this.sliderEl.style.width = site.screenWidth + "px", this.sliderEl.style.height = site.screenHeight + "px", this.slider.updateSliderSize())
    }
};
var NC = NC || {};
NC.Cast = function (t) {
    this.data = t, this.el, this.bgImgs = [], this.copies = [], this.castID, this.cursorActive, this.active, this.init()
}, NC.Cast.prototype = {
    init: function () {
        var t = this;
        this.el = H.createEl("div", {
            position: "absolute",
            top: "0px",
            left: "0px",
            overflow: "hidden",
            visibility: "hidden",
            opacity: "0",
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,.8)"
        }), this.el.id = "Cast", this.bg = H.createEl("div", {
            position: "absolute",
            top: "0px",
            left: "0px",
            width: "100%",
            height: "100%"
        }, this.el), this.bgImg = H.createImg("assets/img/cast/" + this.data.actors[0].id + ".jpg", null, this.bg, site.loader), TweenMax.set(this.bgImg, {
            scale: 1.05
        }), this.bgOverlay = H.createImg("assets/img/cast/" + this.data.actors[0].id + "-overlay.png", {
            position: "absolute",
            top: "50%",
            left: "50%",
            marginLeft: "-345px",
            marginTop: "-290px"
        }, this.bg, site.loader), this.content = H.createEl("div", {
            position: "absolute",
            top: "0px",
            left: "0px",
            width: "100%",
            height: "100%"
        }, this.el), this.copy = H.createEl("div", {
            position: "absolute",
            top: "360px",
            left: "50%",
            width: "800px",
            marginLeft: "-400px",
            color: "#FFF",
            fontSize: "12px",
            fontFamily: "Arial",
            fontWeight: "bold",
            lineHeight: "22px",
            letterSpacing: "1px"
        }, this.content);
        var e;
        e = '<div class="castContentBlock">', e += '<span style="left: 50px; top: 2px; font-size: 16px" class="castTitle">Jacob Benjamin "Jake" Gyllenhaal,</span>', e += '<span style="left: 299px; top:16px;font-size: 13px; font-family: Bebas;">AS</span>', e += '<span style="left: 321px; top: 17px; font-size: 22px; font-family: Bebas;">LOU BLOOM</span>', e += '<span style="left: 416px; top: 4px;">born December 19, 1980 is an</span>', e += '<span style="left: 124px; top: 36px;">American actor.</span>', e += '<span style="left: 65px; top: 78px;">The son of director Stephen Gyllenhaal and screenwriter Naomi Foner,</span>', e += '<span style="left: 543px; top: 78px; color:#a6a6a6;">Gyllenhaal began acting at the</span>', e += '<span style="left: 36px; top: 91px; color:#a6a6a6;">age of ten. Following his first lead role in 1999\'s October Sky,.</span>', e += '<span style="left: 0px; top: 113px;">he starred in the indie cult hit Donnie Darko (2001), in which he played a psychologically troubled teenager </span>', e += '<span style="left: 0px; top: 142px;">alongside his older sister, actress Maggie Gyllenhaal. In 2002, he starred in another indie film, </span>', e += '<span style="left: 678px; top: 142px; color:#a6a6a6;">The</span>', e += '<span style="left: 0px; top: 160px; color:#a6a6a6;">Good Girl.</span>', e += '<span style="left: 119px; top: 180px; color:#a6a6a6;">Gyllenhaal</span>', e += '<span style="left: 193px; top: 180px;">then played against type as a frustrated Marine in Jarhead (2005). The same year, his</span>', e += '<span style="left: 63px; top: 195px;">role as Jack Twist in Brokeback Mountain earned him critical acclaim.</span>', e += '<span style="left: 575px; top: 195px; color:#a6a6a6;">For his performance he won the</span>', e += '<span style="left: 49px; top: 210px; color:#a6a6a6;">BAFTA Award for Best Supporting Actor and was nominated for the Academy Award </span>', e += '<span style="left: 638px; top: 211px; font-size:10px; color:#a6a6a6;">in the same category.</span>', e += "</div>", this.copies.push(e);
        var i;
        i = '<div class="castContentBlock">', i += '<span style="left: 0px; top: 13px; font-size: 15px" class="castTitle">Rene Marie Russo,</span>', i += '<span style="left: 97px; top:0px;font-size: 13px; font-family: Bebas;">AS</span>', i += '<span style="left: 115px; top: 0px; font-size: 18px; font-family: Bebas;">NINA</span>', i += '<span style="left: 160px; top: 17px;">/&nbsp;&nbsp;&nbsp;&nbsp;born February 17, 1954 is an American actress, producer</span>', i += '<span style="left: 28px; top: 46px; color:#a6a6a6;">and former model.</span>', i += '<span style="left: 0px; top: 85px;">Russo is known for starring in a series of popular, big budget thrillers and action movies</span>', i += '<span style="left: 55px; top: 99px;"> throughout the 1990s. She made her big screen debut in the 1989 comedy</span>', i += '<span style="left: 550px; top: 99px; color:#a6a6a6;">film Major</span>', i += '<span style="left: 0px; top: 112px; color:#a6a6a6;">League and later co-starred in Mr. Destiny and One Good Cop.</span>', i += '<span style="left: 140px; top: 131px; color:#a6a6a6;">/In 1990s she had the female lead roles in&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;office hits include Lethal Weapon 3 (1992)</span>', i += '<span style="left: 78px; top: 149px;">In the Line of Fire (1993), Outbreak,Get Shorty (1995), Tin Cup (1996), Ransom</span>', i += '<span style="left: 14px; top: 179px;">(1996), Lethal Weapon 4 (1998) and The Thomas Crown Affair (1999). In 2005 she starred in the</span>', i += '<span style="left: 164px; top: 199px;">family comedy Yours,&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mine and Ours and later not appeared</span>', i += '<span style="left: 610px; top: 199px; color:#a6a6a6;">on-screen until 2011.</span>', i += "</div>", this.copies.push(i);
        var n;
        n = '<div class="castContentBlock" style="margin-left: 0px; margin-top: 75px">', n += '<span style="left: 194px; font-size: 18px" class="castTitle">Rizwan "Riz" Ahmed,</span>', n += '<span style="left: 380px; top:19px;font-size: 13px; font-family: Bebas;">AS</span>', n += '<span style="left: 399px; top: 20px; font-size: 18px; font-family: Bebas;">RICK</span>', n += '<span style="left: 429px; top: 7px;">born 1 December 1982.</span>', n += '<span style="left: 360px; top: 38px; color:#7e7e7e">British actor.</span>', n += '<span style="left: 152px; top: 74px;">&#92; also known as Riz MC, is a British actor and rapper from Wembley, London,</span>', n += '<span style="left: 182px; top: 94px;">of Pakistani heritage.</span>', n += '<span style="left: 322px; top: 87px; color:#7c7c7c">Shifty, Britz, Four Lions, Ill Manors and</span>', n += '<span style="left: 477px; top: 102px; color:#7c7c7c">The Reluctant Fundamentalist.</span>', n += '<span style="left: 0px; top: 109px; color:#7c7c7c">He has tarred in The Road to Guantanamo,</span>', n += "</div>", this.copies.push(n);
        var s;
        s = '<div class="castContentBlock" style="margin-left: 90px; margin-top: 50px">', s += '<span style="left: 253px; font-size: 13px; font-family: Bebas; color:#b7b7b7">AS</span>', s += '<span style="left: 270px; font-size: 18px; font-family: Bebas;">CHRIS DAY</span>', s += '<span style="left: 90px; top:20px; font-size: 15px" class="castTitle">William "Bill"</span>', s += '<span style="left: 200px; top:18px; font-size: 20px" class="castTitle">Paxton</span>', s += '<span style="left: 335px; top:20px;">born May 17, 1955.</span>', s += '<span style="left: 177px; top:31px;">American actor and film director.</span>', s += '<span style="left: 106px; top:62px;">He gained popularity after starring in a number of films, including Apollo 13,</span>', s += '<span style="left: 0px; top:78px;">Weird Science, Twister, Aliens, True Lies, and Titanic. </span>', s += '<span style="left: 372px; top:78px; color:#7c7c7c">Paxton starred in the HBO</span>', s += '<span style="left: 345px; top:100px; color:#7c7c7c">series Big Love (2006–2011) and was nominated for an Emmy</span>', s += '<span style="left: 400px; top:127px; color:#7c7c7c">Award for the miniseries Hatfields & McCoys.</span>', s += "</div>", this.copies.push(s), this.copy.id = "castContent", this.cursor = H.createEl("div", {
            position: "absolute",
            width: "130px",
            height: "130px",
            marginTop: "-65px",
            marginLeft: "-65px",
            cursor: "url(assets/img/cursor/empty.png),default",
            opacity: "0",
            visibility: "hidden",
            background: "rgba(255,255,255,0)"
        }, this.content);
        var o;
        o = isMobile.any() || site.isIE ? this.content : this.cursor, this.arrowLeft = H.createEl("div", {
                position: "absolute",
                width: "130px",
                height: "130px",
                cursor: "url(assets/img/cursor/empty.png),default",
                opacity: "0",
                visibility: "hidden",
                background: "rgba(255,255,255,0)"
            }, o), (isMobile.any() || site.isIE) && TweenMax.set(this.arrowLeft, {
                top: "50%",
                left: "0px",
                marginTop: -65,
                autoAlpha: 1,
                cursor: "pointer"
            }), this.arrowLeftImg = H.createImg("assets/img/common/arrowLeft2.png", {
                position: "absolute",
                left: "50%",
                top: "50%",
                marginLeft: "-30px",
                marginTop: "-30px",
                cursor: "url(assets/img/cursor/empty.png),default"
            }, this.arrowLeft, this.loader), $(this.arrowLeft)
            .click(function () {
                var e;
                e = 0 == t.castID ? 3 : t.castID - 1, $("#navBtn-3-" + e)
                    .trigger("click")
            }), this.arrowRight = H.createEl("div", {
                position: "absolute",
                width: "130px",
                height: "130px",
                cursor: "url(assets/img/cursor/empty.png),default",
                opacity: "0",
                visibility: "hidden",
                background: "rgba(255,255,255,0)"
            }, o), (isMobile.any() || site.isIE) && TweenMax.set(this.arrowRight, {
                top: "50%",
                right: 0,
                marginTop: -65,
                autoAlpha: 1,
                cursor: "pointer"
            }), this.arrowRightImg = H.createImg("assets/img/common/arrowRight2.png", {
                position: "absolute",
                left: "50%",
                top: "50%",
                marginLeft: "-30px",
                marginTop: "-30px",
                cursor: "url(assets/img/cursor/empty.png),default"
            }, this.arrowRight, this.loader), $(this.arrowRight)
            .click(function () {
                var e;
                e = 3 == t.castID ? 0 : t.castID + 1, $("#navBtn-3-" + e)
                    .trigger("click")
            })
    },
    animateOut: function () {
        this.active = !1, TweenMax.to(this.el, .7, {
            autoAlpha: 0
        }), TweenMax.to(this.bgImg, .7, {
            opacity: 0
        }), TweenMax.to(this.bgOverlay, .7, {
            opacity: 0
        })
    },
    animateIn: function (t) {
        var e = this;
        this.active = !0, isMobile.any() || site.isIE || $(this.content)
            .mousemove($.proxy(this.onMove, this)), !t && (t = 0), this.castID = t, this.bgImg.src = "assets/img/cast/" + this.data.actors[t].id + ".jpg", this.bgOverlay.src = "assets/img/cast/" + this.data.actors[t].id + "-overlay.png", $(e.bgImg)
            .load(function () {
                $(e.bgImg)
                    .unbind("load"), e.resize(), TweenMax.to(e.bgImg, .5, {
                        opacity: 1,
                        ease: Expo.easeOut
                    }), TweenMax.to(e.bgOverlay, .5, {
                        opacity: 1,
                        ease: Expo.easeOut,
                        delay: .5
                    })
            }), this.copy.innerHTML = this.copies[t], TweenMax.to(this.el, .7, {
                autoAlpha: 1
            }), TweenMax.set("#castContent span", {
                display: "inline-block",
                overflow: "hidden"
            }), this.temp = 0, $("#castContent span")
            .each(function (t) {
                TweenMax.fromTo(this, 1.5, {
                    x: e.random(-150, 150),
                    y: e.random(-150, 150),
                    autoAlpha: 0,
                    scale: 2,
                    rotation: e.random(0, 0),
                    rotationX: 90,
                    rotationY: 90,
                    rotationZ: 90
                }, {
                    x: 0,
                    y: 0,
                    autoAlpha: 1,
                    scale: 1,
                    delay: e.temp = e.temp + .075,
                    rotation: 0,
                    rotationX: 0,
                    rotationY: 0,
                    rotationZ: 0,
                    ease: Expo.easeOut
                })
            }), TweenMax.fromTo("#castInfoTitle", 2, {
                color: "rgb(255,255,255)"
            }, {
                color: "rgb(248,240,14)",
                delay: 1.2
            })
    },
    random: function (t, e) {
        return Math.floor(Math.random() * (e - t + 1) + t)
    },
    onNavFooterMove: function () {
        this.active && (cursorOnContentEl = $(this.content)
            .is(":hover"), cursorOnContentEl || this.cursorActive && this.hideCursor())
    },
    hideCursor: function () {
        TweenMax.set(this.cursor, {
            opacity: 0
        }), this.cursorActive = !1
    },
    onMove: function (t) {
        var e = this;
        if (this.active && (this.mX = t.clientX, this.mY = t.clientY, this.offsetX = -(this.mX - site.screenWidth / 2), this.offsetY = -(this.mY - site.screenHeight / 2), TweenMax.to(this.bgImg, 2, {
                x: .05 * this.offsetX,
                y: .05 * this.offsetY,
                ease: Expo.easeOut
            }), TweenMax.to(this.bgOverlay, 2, {
                x: .02 * this.offsetX,
                y: .02 * this.offsetY,
                ease: Expo.easeOut
            }), this.cursorActive || (this.cursorActive = !0, TweenMax.set(this.cursor, {
                autoAlpha: 1
            })), !site.isIE)) {
            var i = site.screenWidth / 2;
            TweenMax.set(e.cursor, {
                top: this.mY,
                left: this.mX
            }), this.mX < i ? (TweenMax.set(this.arrowLeft, {
                autoAlpha: 1
            }), TweenMax.set(this.arrowRight, {
                autoAlpha: 0
            })) : (TweenMax.set(this.arrowLeft, {
                autoAlpha: 0
            }), TweenMax.set(this.arrowRight, {
                autoAlpha: 1
            }))
        }
    },
    resize: function () {
        var t = this;
        this.el.style.width = site.screenWidth + "px", this.el.style.height = site.screenHeight + "px", H.resizeToContainer(this.bgImg, this.el, 1600 / 900), this.copy.style.top = site.screenHeight < 760 ? "180px" : site.screenHeight < 875 ? "260px" : "360px"
    }
};
var NC = NC || {};
NC.Tickets = function (t) {
    this.data = t, this.el, this.init()
}, NC.Tickets.prototype = {
    init: function () {
        var t = this;
        this.el = H.createEl("div", {
                position: "absolute",
                top: "0px",
                left: "0px",
                overflow: "hidden",
                visibility: "hidden",
                opacity: "0",
                width: "100%",
                height: "100%",
                background: "#000"
            }), this.el.id = "Tickets", this.bg = H.createEl("div", {
                position: "absolute",
                top: "0px",
                left: "0px",
                width: "100%",
                height: "100%"
            }, this.el), this.bgImg = H.createImg("assets/img/tickets/bg.jpg", {
                position: "absolute"
            }, this.bg), this.content = H.createEl("div", {
                position: "absolute",
                top: "0px",
                left: "0px",
                width: "100%",
                height: "100%"
            }, this.el), this.btns = H.createEl("div", {
                position: "absolute",
                top: "50%",
                left: "50%",
                marginTop: "12px",
                marginLeft: "270px"
            }, this.content), this.line = H.createEl("div", {
                position: "absolute",
                left: "-2012px",
                width: "2000px",
                height: "1px",
                cssFloat: "left",
                borderTop: "solid 1px #FFF",
                opacity: ".2",
                margin: "36px 6px"
            }, this.btns, "ticketsLine"), this.btnMF = H.createEl("div", {
                width: "70px",
                height: "70px",
                cssFloat: "left",
                border: "solid 1px rgba(255,255,255,.2)",
                cursor: "pointer"
            }, this.btns, "ticketsBtn"), TweenMax.set(this.btnMF, {
                borderRadius: 35
            }), this.iconMF = H.createImg("assets/img/tickets/ico-mf.png", {
                position: "relative",
                left: "21px",
                top: "21px"
            }, this.btnMF, site.loader), $(this.btnMF)
            .hover(function () {
                isMobile.any() || (site.sfx("subNav"), TweenMax.to(t.btnMF, .3, {
                    borderColor: "rgba(255,255,255,.7)",
                    background: "rgba(255,255,255,.1)"
                }))
            }, function () {
                isMobile.any() || TweenMax.to(t.btnMF, .3, {
                    borderColor: "rgba(255,255,255,.2)",
                    background: "rgba(255,255,255,0)"
                })
            }), $(this.btnMF)
            .click(function () {
                t.onMFClick()
            }), this.line = H.createEl("div", {
                width: "10px",
                height: "1px",
                cssFloat: "left",
                borderTop: "solid 1px #FFF",
                margin: "36px 6px",
                opacity: ".2"
            }, this.btns, "ticketsLine"), this.btnFan = H.createEl("div", {
                width: "70px",
                height: "70px",
                cssFloat: "left",
                border: "solid 1px rgba(255,255,255,.2)",
                cursor: "pointer"
            }, this.btns, "ticketsBtn"), TweenMax.set(this.btnFan, {
                borderRadius: 35
            }), this.iconFan = H.createImg("assets/img/tickets/ico-fadango.png", {
                position: "relative",
                left: "21px",
                top: "21px"
            }, this.btnFan, site.loader), $(this.btnFan)
            .hover(function () {
                isMobile.any() || (site.sfx("subNav"), TweenMax.to(t.btnFan, .3, {
                    borderColor: "rgba(255,255,255,.7)",
                    background: "rgba(255,255,255,.1)"
                }))
            }, function () {
                isMobile.any() || TweenMax.to(t.btnFan, .3, {
                    borderColor: "rgba(255,255,255,.2)",
                    background: "rgba(255,255,255,0)"
                })
            }), $(this.btnFan)
            .click(function () {
                t.onFandangoClick()
            }), this.line = H.createEl("div", {
                width: "10px",
                height: "1px",
                cssFloat: "left",
                borderTop: "solid 1px #FFF",
                margin: "36px 6px",
                opacity: ".2"
            }, this.btns, "ticketsLine"), this.btnMT = H.createEl("div", {
                width: "70px",
                height: "70px",
                cssFloat: "left",
                border: "solid 1px rgba(255,255,255,.2)",
                cursor: "pointer"
            }, this.btns, "ticketsBtn"), TweenMax.set(this.btnMT, {
                borderRadius: 35
            }), this.iconMT = H.createImg("assets/img/tickets/ico-mt.png", {
                position: "relative",
                left: "21px",
                top: "21px"
            }, this.btnMT, site.loader), $(this.btnMT)
            .hover(function () {
                isMobile.any() || (site.sfx("subNav"), TweenMax.to(t.btnMT, .3, {
                    borderColor: "rgba(255,255,255,.7)",
                    background: "rgba(255,255,255,.1)"
                }))
            }, function () {
                isMobile.any() || TweenMax.to(t.btnMT, .3, {
                    borderColor: "rgba(255,255,255,.2)",
                    background: "rgba(255,255,255,0)"
                })
            }), $(this.btnMT)
            .click(function () {
                t.onMTClick()
            }), this.line = H.createEl("div", {
                position: "absolute",
                left: "255px",
                width: "1000px",
                height: "1px",
                cssFloat: "left",
                borderTop: "solid 1px #FFF",
                margin: "36px 6px",
                opacity: ".2"
            }, this.btns, "ticketsLine"), this.title = H.createImg("assets/img/tickets/title.png", {
                position: "absolute",
                top: "50%",
                left: "50%",
                marginTop: "105px",
                marginLeft: "-68px"
            }, this.content), this.box = H.createEl("div", {
                position: "absolute",
                top: "50%",
                left: "50%",
                marginTop: "0",
                marginLeft: "-221px",
                width: "443px",
                height: "78px"
            }, this.content), this.boxImg = H.createImg("assets/img/tickets/box.png", {
                position: "absolute",
                zIndex: "0"
            }, this.box), this.input = new H.createEl("input", {
                position: "absolute",
                top: "32px",
                left: "147px",
                width: "290px",
                height: "45px",
                background: "none",
                border: "none",
                fontFamily: "Arial,sans-serif",
                fontSize: "14px",
                lineHeight: "14px",
                paddingTop: "35px",
                color: "#000",
                textAlign: "right",
                textTransform: "uppercase",
                letterSpacing: "3px",
                outline: "0",
                zIndex: "10"
            }, this.box), this.input.value = "", this.input.onfocus = $.proxy(this.onFocusZip, this), this.input.onblur = $.proxy(this.onBlurZip, this)
    },
    onFocusZip: function () {
        this.input.style.background = "#f9f816"
    },
    onBlurZip: function () {
        "" == this.input.value
    },
    onMFClick: function () {
        if (5 == this.input.value.length) {
            var t = "http://www.moviefone.com/movie/nightcrawler/20056380/main?locationQuery=";
            window.open(t + this.input.value), site.onExternal()
        } else alert("Invalid Zip Code")
    },
    onFandangoClick: function () {
        if (5 == this.input.value.length) {
            var t = "http://www.fandango.com/nightcrawler_175296/movietimes?location=";
            window.open(t + this.input.value), site.onExternal()
        } else alert("Invalid Zip Code")
    },
    onMTClick: function () {
        if (5 == this.input.value.length) {
            var t = "http://www.movietickets.com/movie?mid=189127&SearchRadius=20&tstate=0&SearchZip=";
            window.open(t + this.input.value), site.onExternal()
        } else alert("Invalid Zip Code")
    },
    animateOut: function () {
        TweenMax.to(this.el, .7, {
            autoAlpha: 0
        })
    },
    animateIn: function (t) {
        TweenMax.to(this.el, .7, {
            autoAlpha: 1
        }), TweenMax.fromTo(".ticketsLine", 1, {
            opacity: 0
        }, {
            opacity: .2,
            delay: 1.4
        }), TweenMax.staggerFromTo(".ticketsBtn", .3, {
            rotationY: -90
        }, {
            rotationY: 0,
            delay: 1
        }, .1), TweenMax.fromTo(this.box, .4, {
            x: -20,
            autoAlpha: 0
        }, {
            x: 0,
            autoAlpha: 1,
            delay: .5
        }), TweenMax.fromTo(this.title, .4, {
            x: -20,
            autoAlpha: 0
        }, {
            x: 0,
            autoAlpha: 1,
            delay: .7
        })
    },
    resize: function () {
        var t = this;
        this.el.style.width = site.screenWidth + "px", this.el.style.height = site.screenHeight + "px", H.resizeToContainer(this.bgImg, this.el, 1600 / 900), site.screenWidth < 1100 ? (this.btns.style.marginLeft = "220px", this.box.style.marginLeft = "-251px") : (this.btns.style.marginLeft = "270px", this.box.style.marginLeft = "-221px")
    }
};
var NC = NC || {};
NC.Tumblr = function (t) {
    this.data = t, this.el, this.init()
}, NC.Tumblr.prototype = {
    init: function () {
        var t = this;
        this.el = H.createEl("div", {
            position: "absolute",
            top: "0px",
            left: "0px",
            overflow: "hidden",
            visibility: "hidden",
            opacity: "0",
            width: "100%",
            height: "100%"
        }), this.el.id = "Tumblr", this.bg = H.createEl("div", {
            position: "absolute",
            top: "0px",
            left: "0px",
            width: "100%",
            height: "100%"
        }, this.el), this.bgImg = H.createImg("assets/img/tickets/bg.jpg", {
            position: "absolute"
        }, this.bg), this.content = H.createEl("div", {
            position: "absolute",
            top: "0px",
            left: "0px",
            width: "100%",
            height: "100%"
        }, this.el), this.title = H.createEl("div", {
            position: "absolute",
            bottom: "200px",
            left: "50%",
            width: "500px",
            marginLeft: "-250px",
            textAlign: "center",
            fontSize: "50px",
            color: "#FFF"
        }, this.content), this.title.innerHTML = "TUMBLR"
    },
    animateOut: function () {
        TweenMax.to(this.el, .7, {
            autoAlpha: 0
        })
    },
    animateIn: function (t) {
        TweenMax.set(this.el, {
            autoAlpha: 1
        })
    },
    resize: function () {
        var t = this;
        this.el.style.width = site.screenWidth + "px", this.el.style.height = site.screenHeight + "px", H.resizeToContainer(this.bgImg, this.el, 1600 / 900)
    }
};
var NC = NC || {};
NC.Site = function () {
    this.currPage = -1, this.currItem = -1, this.auSubNavID = 1, this.auShareID = 1, this.currSubID, this.isMute, this.pages = [], this.init()
}, NC.Site.prototype = {
    init: function () {
        var t = this;
        this.baseURL = baseURL, this.loader = new PxLoader, this.wrapper = H.createEl("div", {
                position: "absolute",
                top: "0px",
                left: "0px",
                overflow: "hidden"
            }, document.body), $.ajax({
                type: "GET",
                url: "json/site.json",
                dataType: "jsonp",
                crossDomain: "true",
                success: $.proxy(t.parseData, t),
                jsonpCallback: "callback"
            }), isMobile.any() ? this.bgImg = H.createImg("assets/img/common/bg-city.jpg", {
                position: "absolute"
            }, this.wrapper) : (this.bg = H.createVideo("assets/videos/loader/loader" + H.videoExt, {
                position: "absolute"
            }, this.wrapper), this.bg.loop = !0, this.bg.play()), this.title = H.createImg("assets/img/title.png", {
                position: "absolute",
                bottom: "0px",
                left: "50%",
                marginLeft: "-193px",
                zIndex: "100"
            }, this.wrapper), this.fullscreen = H.createImg("assets/img/ui/fullscreenPlus.png", {
                position: "absolute",
                bottom: "0px",
                right: "0px",
                zIndex: "101",
                cursor: "pointer"
            }, this.wrapper), $(this.fullscreen)
            .click(function () {
                fullScreenApi.supportsFullScreen && (console.log("has fullscreen"), console.log("is Fullscrenn ? " + fullScreenApi.isFullScreen()), fullScreenApi.isFullScreen() ? (fullScreenApi.cancelFullScreen(document.body), t.fullscreen.src = "assets/img/ui/fullscreenPlus.png") : (console.log("go fullscreen"), fullScreenApi.requestFullScreen(document.body), t.fullscreen.src = "assets/img/ui/fullscreenMinus.png"))
            }), $.browser.msie ? this.isIE = !0 : $.getScript("https://www.youtube.com/player_api"), this.isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor), this.isSafari = /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor)
    },
    parseData: function (t) {
        var e = this;
        this.data = t, isMobile.any() || (this.sequence = new NC.Sequence(this.data.sequences), this.wrapper.appendChild(this.sequence.el)), this.cursor = new NC.Cursor, this.wrapper.appendChild(this.cursor.el), this.cursor.animateIn(), this.epk = H.createEl("div", {
            position: "absolute",
            width: "100%",
            height: "100%",
            overflow: "hidden",
            visibility: "hidden",
            opacity: "0",
            background: "rgba(0,0,0,.4)",
            zIndex: "100"
        }, this.wrapper), this.epk.id = "EPK";
        for (var i = 0; i < this.data.pages.length; i++) {
            var n = e.data.pages[i],
                s;
            switch (n.type) {
            case "about":
                s = new NC.About(n);
                break;
            case "videos":
                s = new NC.Video(n);
                break;
            case "gallery":
                s = new NC.Gallery(n);
                break;
            case "cast":
                s = new NC.Cast(n);
                break;
            case "tickets":
                s = new NC.Tickets(n);
                break;
            case "tumblr":
                s = new NC.Tumblr(n)
            }
            e.epk.appendChild(s.el), e.pages.push(s)
        }
        this.nav = new NC.Nav, this.epk.appendChild(this.nav.el), this.epkBtn = new NC.EPKButton, isMobile.any() || this.wrapper.appendChild(this.epkBtn.el), isMobile.any() && (this.navToggleBtn = new NC.NavToggleButton, this.epk.appendChild(this.navToggleBtn.el)), this.footer = new NC.Footer, this.epk.appendChild(this.footer.el), this.header = new NC.Header, this.epk.appendChild(this.header.el), this.share = new NC.Share, this.epk.appendChild(this.share.el), this.galleryShare = new NC.GalleryShare, this.epk.appendChild(this.galleryShare.el), this.videoShare = new NC.VideoShare, this.epk.appendChild(this.videoShare.el), isMobile.any() ? TweenMax.delayedCall(1, function () {
            e.loader.start()
        }) : (this.muteBtn = H.createEl("div", {
                position: "absolute",
                bottom: "12px",
                left: "10px",
                width: "50px",
                height: "50px",
                opacity: ".4",
                cursor: "pointer",
                verticalAlign: "middle",
                zIndex: "110"
            }, this.wrapper), this.muteBtnImg = H.createImg("assets/img/footer/mute-btn.png", {
                position: "absolute",
                top: "12px",
                left: "12px"
            }, this.muteBtn, site.loader), this.muteLine = H.createEl("div", {
                position: "absolute",
                top: "13px",
                left: "25px",
                width: "1px",
                height: "0px",
                background: "#FFF"
            }, this.muteBtn), TweenMax.set(this.muteLine, {
                y: 10
            }), $(this.muteBtn)
            .hover(function () {
                site.sfx("subNav"), TweenMax.to(e.muteBtn, .3, {
                    opacity: 1
                })
            }, function () {
                TweenMax.to(e.muteBtn, .3, {
                    opacity: .4
                })
            }), $(this.muteBtn)
            .click(function () {
                site.isMute ? (site.isMute = !1, site.yt.active || site.unmute(), TweenMax.to(e.muteLine, .3, {
                    y: 10,
                    height: 0
                })) : (site.isMute = !0, site.yt.active || site.mute(), TweenMax.to(e.muteLine, .3, {
                    y: 0,
                    height: 21
                }))
            }), soundManager.setup({
                url: "js/libs/soundManager2/",
                flashVersion: 9,
                useHighPerformance: !0,
                flashLoadTimeout: 500,
                debugMode: !1,
                onready: function () {
                    soundManager.createSound({
                        id: "transition",
                        url: "assets/audio/NC_EPK_Nav_ExpandTrans_03" + H.soundExt,
                        autoLoad: !0
                    }), soundManager.createSound({
                        id: "navRoll",
                        url: "assets/audio/NC_EPK_NavClick_01" + H.soundExt,
                        autoLoad: !0
                    }), soundManager.createSound({
                        id: "subNav1",
                        url: "assets/audio/RollSet_01/NC_EPK_Roll_01a" + H.soundExt,
                        autoLoad: !0
                    }), soundManager.createSound({
                        id: "subNav2",
                        url: "assets/audio/RollSet_01/NC_EPK_Roll_01b" + H.soundExt,
                        autoLoad: !0
                    }), soundManager.createSound({
                        id: "subNav3",
                        url: "assets/audio/RollSet_01/NC_EPK_Roll_01c" + H.soundExt,
                        autoLoad: !0
                    }), soundManager.createSound({
                        id: "subNav4",
                        url: "assets/audio/RollSet_01/NC_EPK_Roll_01d" + H.soundExt,
                        autoLoad: !0
                    }), soundManager.createSound({
                        id: "share1",
                        url: "assets/audio/RollSet_02/NC_EPK_Roll_02a" + H.soundExt,
                        autoLoad: !0
                    }), soundManager.createSound({
                        id: "share2",
                        url: "assets/audio/RollSet_02/NC_EPK_Roll_02b" + H.soundExt,
                        autoLoad: !0
                    }), soundManager.createSound({
                        id: "share3",
                        url: "assets/audio/RollSet_02/NC_EPK_Roll_02c" + H.soundExt,
                        autoLoad: !0
                    }), soundManager.createSound({
                        id: "share4",
                        url: "assets/audio/RollSet_02/NC_EPK_Roll_02d" + H.soundExt,
                        autoLoad: !0
                    }), soundManager.createSound({
                        id: "share5",
                        url: "assets/audio/RollSet_02/NC_EPK_Roll_02e" + H.soundExt,
                        autoLoad: !0
                    }), soundManager.createSound({
                        id: "galleryLeft",
                        url: "assets/audio/NC_EPK_Gallery_LeftClick" + H.soundExt,
                        autoLoad: !0
                    }), soundManager.createSound({
                        id: "galleryRight",
                        url: "assets/audio/NC_EPK_Gallery_RightClick" + H.soundExt,
                        autoLoad: !0
                    }), soundManager.createSound({
                        id: "loop1",
                        url: "assets/audio/loops/Loop_01" + H.soundExt,
                        autoLoad: !0,
                        onfinish: function () {
                            soundManager.play("loop2")
                        }
                    }), soundManager.createSound({
                        id: "loop2",
                        url: "assets/audio/loops/Loop_04" + H.soundExt,
                        autoLoad: !0,
                        onfinish: function () {
                            soundManager.play("loop3")
                        }
                    }), soundManager.createSound({
                        id: "loop3",
                        url: "assets/audio/loops/Loop_A" + H.soundExt,
                        autoLoad: !0,
                        onfinish: function () {
                            soundManager.play("loop4")
                        }
                    }), soundManager.createSound({
                        id: "loop4",
                        url: "assets/audio/loops/Loop_B" + H.soundExt,
                        autoLoad: !0,
                        onfinish: function () {
                            soundManager.play("loop5")
                        }
                    }), soundManager.createSound({
                        id: "loop5",
                        url: "assets/audio/loops/Loop_B2" + H.soundExt,
                        autoLoad: !0,
                        onfinish: function () {
                            soundManager.play("loop1")
                        }
                    }), e.auNavRoll = new Audio("assets/audio/NC_EPK_NavClick_01" + H.soundExt), soundManager.createSound({
                        id: "seq1loop1",
                        url: "assets/audio/sequence1/loop1" + H.soundExt,
                        autoLoad: !0
                    }), soundManager.createSound({
                        id: "seq1loop2",
                        url: "assets/audio/sequence1/loop2" + H.soundExt,
                        autoLoad: !0
                    }), soundManager.createSound({
                        id: "seq1loop3",
                        url: "assets/audio/sequence1/loop3" + H.soundExt,
                        autoLoad: !0
                    }), soundManager.createSound({
                        id: "seq2loop1",
                        url: "assets/audio/sequence2/loop1" + H.soundExt,
                        autoLoad: !0
                    }), soundManager.createSound({
                        id: "seq2loop2",
                        url: "assets/audio/sequence2/loop2" + H.soundExt,
                        autoLoad: !0
                    }), soundManager.createSound({
                        id: "seq2loop3",
                        url: "assets/audio/sequence2/loop3" + H.soundExt,
                        autoLoad: !0
                    }), soundManager.createSound({
                        id: "seq3loop1",
                        url: "assets/audio/sequence3/loop1" + H.soundExt,
                        autoLoad: !0
                    }), soundManager.createSound({
                        id: "seq3loop2",
                        url: "assets/audio/sequence3/loop2" + H.soundExt,
                        autoLoad: !0
                    }), soundManager.createSound({
                        id: "seq3loop3",
                        url: "assets/audio/sequence3/loop3" + H.soundExt,
                        autoLoad: !0
                    }), soundManager.createSound({
                        id: "police1",
                        url: "assets/audio/police/01" + H.soundExt,
                        autoLoad: !0
                    }), soundManager.createSound({
                        id: "police2",
                        url: "assets/audio/police/02" + H.soundExt,
                        autoLoad: !0
                    }), soundManager.createSound({
                        id: "police3",
                        url: "assets/audio/police/03" + H.soundExt,
                        autoLoad: !0
                    }), soundManager.createSound({
                        id: "police4",
                        url: "assets/audio/police/04" + H.soundExt,
                        autoLoad: !0
                    }), soundManager.createSound({
                        id: "police5",
                        url: "assets/audio/police/05" + H.soundExt,
                        autoLoad: !0
                    }), soundManager.createSound({
                        id: "police6",
                        url: "assets/audio/police/06" + H.soundExt,
                        autoLoad: !0
                    }), soundManager.createSound({
                        id: "police7",
                        url: "assets/audio/police/07" + H.soundExt,
                        autoLoad: !0
                    }), soundManager.createSound({
                        id: "police8",
                        url: "assets/audio/police/08" + H.soundExt,
                        autoLoad: !0
                    }), soundManager.createSound({
                        id: "police9",
                        url: "assets/audio/police/09" + H.soundExt,
                        autoLoad: !0
                    }), soundManager.createSound({
                        id: "policeLoop",
                        url: "assets/audio/police/loop" + H.soundExt,
                        autoLoad: !0
                    }), soundManager.createSound({
                        id: "vo1",
                        url: "assets/audio/VO_01" + H.soundExt,
                        autoLoad: !0
                    }), soundManager.createSound({
                        id: "vo2",
                        url: "assets/audio/VO_02" + H.soundExt,
                        autoLoad: !0
                    }), soundManager.createSound({
                        id: "vo3",
                        url: "assets/audio/VO_03" + H.soundExt,
                        autoLoad: !0
                    }), soundManager.createSound({
                        id: "static",
                        url: "assets/audio/RadioStatic" + H.soundExt,
                        autoLoad: !0
                    }), TweenMax.delayedCall(1, function () {
                        e.loader.start()
                    })
                },
                ontimeout: function () {
                    soundManager.useHTML5Audio = !0, soundManager.preferFlash = !1, soundManager.reboot()
                }
            }), soundManager.defaultOptions = {
                multiShot: !0
            }), this.loader.addCompletionListener($.proxy(this.onLoaded, this)), this.loader.addProgressListener(function (t) {
            console.log(t.completedCount + "/" + t.totalCount);
            var e = t.completedCount / t.totalCount;
            site.cursor.params.endAngle = isMobile.any() ? 2 * Math.PI * e : 2 * Math.PI * (e / 2)
        }), this.overlay = H.createEl("div", {
            position: "fixed",
            top: "0px",
            left: "0px",
            zIndex: "99999",
            display: "none",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.8)",
            cursor: "pointer"
        }, document.body);
        var o = H.createEl("div", {
            position: "absolute",
            top: "50%",
            left: "50%",
            fontFamily: "Bebas,Arial,sans-serif",
            fontSize: "21px",
            letterSpacing: "1.5px",
            color: "#ffffff",
            marginTop: "-7px",
            marginLeft: "-200px",
            width: "400px",
            textAlign: "center",
            cursor: "pointer"
        }, this.overlay);
        o.innerHTML = "CLICK TO ACTIVATE", isMobile.any() && (this.rotateScreen = new NC.RotateScreen), isMobile.any() || site.isIE || ($(this.epk)
                .mousemove(function (t) {
                    e.pages[0].onNavFooterMove(t), e.pages[2].onNavFooterMove(t), e.pages[3].onNavFooterMove(t), e.share.onMove(t), site.galleryShare.onMove(t), site.videoShare.onMove(t)
                }), $(this.epkBtn.el)
                .mousemove(function (t) {
                    e.pages[0].onNavFooterMove(t), e.pages[2].onNavFooterMove(t), e.pages[3].onNavFooterMove(t), e.share.onMove(t), site.galleryShare.onMove(t), site.videoShare.onMove(t)
                })), $(window)
            .resize($.proxy(this.resize, this)), this.resize()
    },
    hideTitle: function () {
        TweenMax.to(this.title, 1, {
            autoAlpha: 0,
            y: 50,
            ease: Expo.easeOut
        })
    },
    hideLoader: function () {
        this.bg.pause(), this.bg.style.display = "none", this.bg = null
    },
    onLoaded: function () {
        isMobile.any() ? this.onAllLoaded() : this.sequence.load()
    },
    onAllLoaded: function () {
        var t = this;
        TweenMax.to(this.epkBtn.el, .5, {
            autoAlpha: .5
        }), "#trailer" == window.location.hash && (window.location.hash = "#videos"), "" != window.location.hash ? TweenMax.delayedCall(.5, function () {
            for (var e = 0; e < t.data.pages.length; e++) "#" + t.data.pages[e].type != window.location.hash || (t.epkBtn.el.click(), t.tempID = e, setTimeout(function () {
                site.firstClick = !0, $("#navBtn-" + t.tempID + "-0")
                    .trigger("click")
            }, 3e3), t.isDeeplink = !0, site.cursor.hide())
        }) : isMobile.any() && (this.hideTitle(), site.cursor.hide(), this.epkBtn.el.click())
    },
    getPage: function (t, e) {
        var i = this,
            n = 0;
        (i.currPage != t || i.currItem != e) && (site.yt.active && (site.yt.close(), n = 1e3), setTimeout(function () {
            -1 != i.currPage && i.pages[i.currPage].animateOut(), i.currPage = t, i.currItem = e, i.pages[i.currPage].animateIn(e), TweenMax.to(site.pages[site.currPage].content, .5, {
                opacity: 1
            }), window.location.hash = site.data.pages[site.currPage].type
        }, n))
    },
    onExternal: function () {
        var t = this;
        isMobile.any() || (site.mute(), site.yt.active && !site.isIE && site.yt.pauseVid(), this.overlay.style.display = "block", $(this.overlay)
            .click(function () {
                $(t.overlay)
                    .unbind("click"), t.overlay.style.display = "none", site.yt.active || site.isMute || site.unmute()
            }))
    },
    sfx: function (t) {
        isMobile.any() || ("subNav" == t ? (soundManager.play("subNav" + this.auSubNavID), this.auSubNavID++, 5 == this.auSubNavID && (this.auSubNavID = 1)) : "share" == t && (soundManager.play("share" + this.auShareID), this.auShareID++, 6 == this.auShareID && (this.auShareID = 1)))
    },
    mute: function () {
        var t = this;
        soundManager.mute(), this.sequence.mute()
    },
    unmute: function () {
        var t = this;
        soundManager.unmute(), this.sequence.unmute()
    },
    resize: function () {
        for (this.screenWidth = $(window)
            .width(), this.screenHeight = $(window)
            .height(), isMobile.any() && (this.screenHeight -= 20), this.wrapper.style.width = site.screenWidth + "px", this.wrapper.style.height = site.screenHeight + "px", i = 0; i < this.pages.length; i++) this.pages[i].resize();
        this.pages[4].resize(), isMobile.any() ? (this.rotateScreen.resize(), H.resizeToContainer(this.bgImg, this.wrapper, 1600 / 900)) : (this.sequence.resize(), H.resizeToContainer(this.bg, this.wrapper, 1600 / 900)), this.nav.resize(), this.share.resize(), this.galleryShare.resize(), this.footer.resize()
    }
};
var site;
$(document)
    .ready(function () {
        site = new NC.Site
    });
