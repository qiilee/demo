/*!
 * jQuery Transit - CSS3 transitions and transformations
 * (c) 2011-2012 Rico Sta. Cruz <rico@ricostacruz.com>
 * MIT Licensed.
 *
 * http://ricostacruz.com/jquery.transit
 * http://github.com/rstacruz/jquery.transit
 */

/*!
 * modified for LovelyGallery
 */



(function(e) {
    function r(e) {
        if (e in t.style) return e;
        var n = ["Moz", "Webkit", "O", "ms"];
        var r = e.charAt(0).toUpperCase() + e.substr(1);
        if (e in t.style) {
            return e
        }
        for (var i = 0; i < n.length; ++i) {
            var s = n[i] + r;
            if (s in t.style) {
                return s
            }
        }
    }
    function i() {
        t.style[n.transform] = "";
        t.style[n.transform] = "rotateY(90deg)";
        return t.style[n.transform] !== ""
    }
    function f(e) {
        if (typeof e === "string") {
            this.parse(e)
        }
        return this
    }
    function l(e, t, n) {
        if (t === true) {
            e.queue(n)
        } else if (t) {
            e.queue(t, n)
        } else {
            n()
        }
    }
    function c(t) {
        var n = [];
        e.each(t, 
        function(t) {
            t = e.camelCase(t);
            t = e.transit.propertyMap[t] || e.cssProps[t] || t;
            t = d(t);
            if (e.inArray(t, n) === -1) {
                n.push(t)
            }
        });
        return n
    }
    function h(t, n, r, i) {
        var s = c(t);
        if (e.cssEase[r]) {
            r = e.cssEase[r]
        }
        var o = "" + m(n) + " " + r;
        if (parseInt(i, 10) > 0) {
            o += " " + m(i)
        }
        var u = [];
        e.each(s, 
        function(e, t) {
            u.push(t + " " + o)
        });
        return u.join(", ")
    }
    function p(t, r) {
        if (!r) {
            e.cssNumber[t] = true
        }
        e.transit.propertyMap[t] = n.transform;
        e.cssHooks[t] = {
            get: function(n) {
                var r = e(n).css("transit:transform");
                return r.get(t)
            },
            set: function(n, r) {
                var i = e(n).css("transit:transform");
                i.setFromString(t, r);
                e(n).css({
                    "transit:transform": i
                })
            }
        }
    }
    function d(e) {
        return e.replace(/([A-Z])/g, 
        function(e) {
            return "-" + e.toLowerCase()
        })
    }
    function v(e, t) {
        if (typeof e === "string" && !e.match(/^[\-0-9\.]+$/)) {
            return e
        } else {
            return "" + e + t
        }
    }
    function m(t) {
        var n = t;
        if (e.fx.speeds[n]) {
            n = e.fx.speeds[n]
        }
        return v(n, "ms")
    }
    e.transit = {
        version: "0.9.9",
        modifiedForlovelygallery: true,
        propertyMap: {
            marginLeft: "margin",
            marginRight: "margin",
            marginBottom: "margin",
            marginTop: "margin",
            paddingLeft: "padding",
            paddingRight: "padding",
            paddingBottom: "padding",
            paddingTop: "padding"
        },
        enabled: true,
        useTransitionEnd: false
    };
    var t = document.createElement("div");
    var n = {};
    var s = navigator.userAgent.toLowerCase().indexOf("chrome") > -1;
    n.transition = r("transition");
    n.transitionDelay = r("transitionDelay");
    n.transform = r("transform");
    n.transformOrigin = r("transformOrigin");
    n.transform3d = i();
    var o = {
        transition: "transitionEnd",
        MozTransition: "transitionend",
        OTransition: "oTransitionEnd",
        WebkitTransition: "webkitTransitionEnd",
        msTransition: "MSTransitionEnd"
    };
    var u = n.transitionEnd = o[n.transition] || null;
    for (var a in n) {
        if (n.hasOwnProperty(a) && typeof e.support[a] === "undefined") {
            e.support[a] = n[a]
        }
    }
    t = null;
    e.cssEase = {
        _default: "ease",
        "in": "ease-in",
        out: "ease-out",
        "in-out": "ease-in-out",
        snap: "cubic-bezier(0,1,.5,1)",
        easeInCubic: "cubic-bezier(.55, .055, .675, .19)",
        easeOutCubic: "cubic-bezier(.215,.61,.355,1)",
        easeInOutCubic: "cubic-bezier(.645,.045,.355,1)",
        easeInCirc: "cubic-bezier(.6,.04,.98,.335)",
        easeOutCirc: "cubic-bezier(.075,.82,.165,1)",
        easeInOutCirc: "cubic-bezier(.785,.135,.15,.86)",
        easeInExpo: "cubic-bezier(.95,.05,.795,.035)",
        easeOutExpo: "cubic-bezier(.19,1,.22,1)",
        easeInOutExpo: "cubic-bezier(1,0,0,1)",
        easeInQuad: "cubic-bezier(.55,.085,.68,.53)",
        easeOutQuad: "cubic-bezier(.25,.46,.45,.94)",
        easeInOutQuad: "cubic-bezier(.455,.03,.515,.955)",
        easeInQuart: "cubic-bezier(.895,.03,.685,.22)",
        easeOutQuart: "cubic-bezier(.165,.84,.44,1)",
        easeInOutQuart: "cubic-bezier(.77,0,.175,1)",
        easeInQuint: "cubic-bezier(.755,.05,.855,.06)",
        easeOutQuint: "cubic-bezier(.23,1,.32,1)",
        easeInOutQuint: "cubic-bezier(.86,0,.07,1)",
        easeInSine: "cubic-bezier(.47,0,.745,.715)",
        easeOutSine: "cubic-bezier(.39,.575,.565,1)",
        easeInOutSine: "cubic-bezier(.445,.05,.55,.95)",
        easeInBack: "cubic-bezier(.6,-.28,.735,.045)",
        easeOutBack: "cubic-bezier(.175, .885,.32,1.275)",
        easeInOutBack: "cubic-bezier(.68,-.55,.265,1.55)"
    };
    e.cssHooks["transit:transform"] = {
        get: function(t) {
            return e(t).data("transform") || new f
        },
        set: function(t, r) {
            var i = r;
            if (! (i instanceof f)) {
                i = new f(i)
            }
            if (n.transform === "WebkitTransform" && !s) {
                t.style[n.transform] = i.toString(true)
            } else {
                t.style[n.transform] = i.toString()
            }
            e(t).data("transform", i)
        }
    };
    e.cssHooks.transform = {
        set: e.cssHooks["transit:transform"].set
    };
    if (e.fn.jquery < "1.8") {
        e.cssHooks.transformOrigin = {
            get: function(e) {
                return e.style[n.transformOrigin]
            },
            set: function(e, t) {
                e.style[n.transformOrigin] = t
            }
        };
        e.cssHooks.transition = {
            get: function(e) {
                return e.style[n.transition]
            },
            set: function(e, t) {
                e.style[n.transition] = t
            }
        }
    }
    p("kmScale");
    p("kmRotate");
    p("scale");
    p("scale3d");
    p("translate");
    p("translate3d");
    p("rotate");
    p("rotateX");
    p("rotateY");
    p("rotate3d");
    p("perspective");
    p("skewX");
    p("skewY");
    p("x", true);
    p("y", true);
    f.prototype = {
        setFromString: function(e, t) {
            var n = typeof t === "string" ? t.split(",") : t.constructor === Array ? t: [t];
            n.unshift(e);
            f.prototype.set.apply(this, n)
        },
        set: function(e) {
            var t = Array.prototype.slice.apply(arguments, [1]);
            if (this.setter[e]) {
                this.setter[e].apply(this, t)
            } else {
                this[e] = t.join(",")
            }
        },
        get: function(e) {
            if (this.getter[e]) {
                return this.getter[e].apply(this)
            } else {
                return this[e] || 0
            }
        },
        setter: {
            kmRotate: function(e) {
                this.rotate = v(e, "deg")
            },
            kmScale: function(e, t) {
                if (t === undefined) {
                    t = e
                }
                this.scale = e + "," + t
            },
            rotate: function(e) {
                this.rotate = v(e, "deg")
            },
            rotateX: function(e) {
                this.rotateX = v(e, "deg")
            },
            rotateY: function(e) {
                this.rotateY = v(e, "deg")
            },
            scale: function(e, t) {
                if (t === undefined) {
                    t = e
                }
                this.scale = e + "," + t
            },
            scale3d: function(e, t, n) {
                if (t === undefined) {
                    t = e
                }
                if (n === undefined) {
                    n = e
                }
                this.scale3d = e + "," + t + "," + n
            },
            skewX: function(e) {
                this.skewX = v(e, "deg")
            },
            skewY: function(e) {
                this.skewY = v(e, "deg")
            },
            perspective: function(e) {
                this.perspective = v(e, "px")
            },
            x: function(e) {
                this.set("translate", e, null)
            },
            y: function(e) {
                this.set("translate", null, e)
            },
            t3dx: function(e) {
                this.set("translate3d", e, null, null)
            },
            t3dy: function(e) {
                this.set("translate3d", null, e, null)
            },
            t3dz: function(e) {
                this.set("translate3d", null, null, e)
            },
            translate: function(e, t) {
                if (this._translateX === undefined) {
                    this._translateX = 0
                }
                if (this._translateY === undefined) {
                    this._translateY = 0
                }
                if (e !== null && e !== undefined) {
                    this._translateX = v(e, "px")
                }
                if (t !== null && t !== undefined) {
                    this._translateY = v(t, "px")
                }
                this.translate = this._translateX + "," + this._translateY
            },
            translate3d: function(e, t, n) {
                if (this._translate3dX === undefined) {
                    this._translate3dX = 0
                }
                if (this._translate3dY === undefined) {
                    this._translate3dY = 0
                }
                if (this._translate3dZ === undefined) {
                    this._translate3dZ = 0
                }
                if (e !== null && e !== undefined) {
                    this._translate3dX = v(e, "px")
                }
                if (t !== null && t !== undefined) {
                    this._translate3dY = v(t, "px")
                }
                if (n !== null && n !== undefined) {
                    this._translate3dZ = v(n, "px")
                }
                this.translate3d = this._translate3dX + "," + this._translate3dY + "," + this._translate3dZ
            }
        },
        getter: {
            kmRotate: function() {
                var e = this.rotate || "0deg".split("deg")[0];
                return v(e, "deg")
            },
            kmScale: function() {
                var e = (this.scale || "1,1,1").split(",");
                if (e[0]) {
                    e[0] = parseFloat(e[0])
                }
                if (e[1]) {
                    e[1] = parseFloat(e[1])
                }
                if (e[2]) {
                    e[2] = parseFloat(e[2])
                }
                return e[0] === e[1] === e[2] ? e[0] : e
            },
            x: function() {
                return this._translateX || 0
            },
            y: function() {
                return this._translateY || 0
            },
            scale: function() {
                var e = (this.scale || "1,1,1").split(",");
                if (e[0]) {
                    e[0] = parseFloat(e[0])
                }
                if (e[1]) {
                    e[1] = parseFloat(e[1])
                }
                if (e[2]) {
                    e[2] = parseFloat(e[2])
                }
                return e[0] === e[1] === e[2] ? e[0] : e
            },
            rotate3d: function() {
                var e = (this.rotate3d || "0,0,0,0deg").split(",");
                for (var t = 0; t <= 3; ++t) {
                    if (e[t]) {
                        e[t] = parseFloat(e[t])
                    }
                }
                if (e[3]) {
                    e[3] = v(e[3], "deg")
                }
                return e
            }
        },
        parse: function(e) {
            var t = this;
            e.replace(/([a-zA-Z0-9]+)\((.*?)\)/g, 
            function(e, n, r) {
                t.setFromString(n, r)
            })
        },
        toString: function(e) {
            var t = [];
            for (var r in this) {
                if (this.hasOwnProperty(r)) {
                    if (!n.transform3d && (r === "rotateX" || r === "rotateY" || r === "perspective" || r === "transformOrigin")) {
                        continue
                    }
                    if (r[0] !== "_") {
                        if (e && r === "scale") {
                            t.push(r + "3d(" + this[r] + ",1)")
                        } else if (e && r === "translate") {
                            t.push(r + "3d(" + this[r] + ",0)")
                        } else {
                            t.push(r + "(" + this[r] + ")")
                        }
                    }
                }
            }
            return t.join(" ")
        }
    };
    e.fn.transition = e.fn.transit = function(t, r, i, s) {
        var o = this;
        var a = 0;
        var f = true;
        if (typeof r === "function") {
            s = r;
            r = undefined
        }
        if (typeof i === "function") {
            s = i;
            i = undefined
        }
        if (typeof t.easing !== "undefined") {
            i = t.easing;
            delete t.easing
        }
        if (typeof t.duration !== "undefined") {
            r = t.duration;
            delete t.duration
        }
        if (typeof t.complete !== "undefined") {
            s = t.complete;
            delete t.complete
        }
        if (typeof t.queue !== "undefined") {
            f = t.queue;
            delete t.queue
        }
        if (typeof t.delay !== "undefined") {
            a = t.delay;
            delete t.delay
        }
        if (typeof r === "undefined") {
            r = e.fx.speeds._default
        }
        if (typeof i === "undefined") {
            i = e.cssEase._default
        }
        r = m(r);
        var c = h(t, r, i, a);
        var p = e.transit.enabled && n.transition;
        var d = p ? parseInt(r, 10) + parseInt(a, 10) : 0;
        if (d === 0) {
            var v = function(e) {
                o.css(t);
                if (s) {
                    s.apply(o)
                }
                if (e) {
                    e()
                }
            };
            l(o, f, v);
            return o
        }
        var g = {};
        var y = function(r) {
            var i = false;
            var a = function() {
                if (i) {
                    o.unbind(u, a)
                }
                if (d > 0) {
                    o.each(function() {
                        this.style[n.transition] = g[this] || null
                    })
                }
                if (typeof s === "function") {
                    s.apply(o)
                }
                if (typeof r === "function") {
                    r()
                }
            };
            if (d > 0 && u && e.transit.useTransitionEnd) {
                i = true;
                o.bind(u, a)
            } else {
                window.setTimeout(a, d)
            }
            o.each(function() {
                if (d > 0) {
                    this.style[n.transition] = c
                }
                e(this).css(t)
            })
        };
        var b = function(e) {
            this.offsetWidth;
            y(e)
        };
        l(o, f, b);
        return this
    };
    e.transit.getTransitionValue = h
})(jQuery)