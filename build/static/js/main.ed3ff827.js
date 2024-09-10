/*! For license information please see main.ed3ff827.js.LICENSE.txt */
(() => {
  "use strict";
  var e = {
      764: (e, n, t) => {
        var r = t(565),
          a = t(611);
        function o(e) {
          for (
            var n =
                "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
              t = 1;
            t < arguments.length;
            t++
          )
            n += "&args[]=" + encodeURIComponent(arguments[t]);
          return (
            "Minified React error #" +
            e +
            "; visit " +
            n +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
          );
        }
        var l = new Set(),
          i = {};
        function u(e, n) {
          s(e, n), s(e + "Capture", n);
        }
        function s(e, n) {
          for (i[e] = n, e = 0; e < n.length; e++) l.add(n[e]);
        }
        var c = !(
            "undefined" === typeof window ||
            "undefined" === typeof window.document ||
            "undefined" === typeof window.document.createElement
          ),
          f = Object.prototype.hasOwnProperty,
          d =
            /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
          p = {},
          h = {};
        function m(e, n, t, r, a, o, l) {
          (this.acceptsBooleans = 2 === n || 3 === n || 4 === n),
            (this.attributeName = r),
            (this.attributeNamespace = a),
            (this.mustUseProperty = t),
            (this.propertyName = e),
            (this.type = n),
            (this.sanitizeURL = o),
            (this.removeEmptyString = l);
        }
        var g = {};
        "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
          .split(" ")
          .forEach(function (e) {
            g[e] = new m(e, 0, !1, e, null, !1, !1);
          }),
          [
            ["acceptCharset", "accept-charset"],
            ["className", "class"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
          ].forEach(function (e) {
            var n = e[0];
            g[n] = new m(n, 1, !1, e[1], null, !1, !1);
          }),
          ["contentEditable", "draggable", "spellCheck", "value"].forEach(
            function (e) {
              g[e] = new m(e, 2, !1, e.toLowerCase(), null, !1, !1);
            }
          ),
          [
            "autoReverse",
            "externalResourcesRequired",
            "focusable",
            "preserveAlpha",
          ].forEach(function (e) {
            g[e] = new m(e, 2, !1, e, null, !1, !1);
          }),
          "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
            .split(" ")
            .forEach(function (e) {
              g[e] = new m(e, 3, !1, e.toLowerCase(), null, !1, !1);
            }),
          ["checked", "multiple", "muted", "selected"].forEach(function (e) {
            g[e] = new m(e, 3, !0, e, null, !1, !1);
          }),
          ["capture", "download"].forEach(function (e) {
            g[e] = new m(e, 4, !1, e, null, !1, !1);
          }),
          ["cols", "rows", "size", "span"].forEach(function (e) {
            g[e] = new m(e, 6, !1, e, null, !1, !1);
          }),
          ["rowSpan", "start"].forEach(function (e) {
            g[e] = new m(e, 5, !1, e.toLowerCase(), null, !1, !1);
          });
        var v = /[\-:]([a-z])/g;
        function y(e) {
          return e[1].toUpperCase();
        }
        function b(e, n, t, r) {
          var a = g.hasOwnProperty(n) ? g[n] : null;
          (null !== a
            ? 0 !== a.type
            : r ||
              !(2 < n.length) ||
              ("o" !== n[0] && "O" !== n[0]) ||
              ("n" !== n[1] && "N" !== n[1])) &&
            ((function (e, n, t, r) {
              if (
                null === n ||
                "undefined" === typeof n ||
                (function (e, n, t, r) {
                  if (null !== t && 0 === t.type) return !1;
                  switch (typeof n) {
                    case "function":
                    case "symbol":
                      return !0;
                    case "boolean":
                      return (
                        !r &&
                        (null !== t
                          ? !t.acceptsBooleans
                          : "data-" !== (e = e.toLowerCase().slice(0, 5)) &&
                            "aria-" !== e)
                      );
                    default:
                      return !1;
                  }
                })(e, n, t, r)
              )
                return !0;
              if (r) return !1;
              if (null !== t)
                switch (t.type) {
                  case 3:
                    return !n;
                  case 4:
                    return !1 === n;
                  case 5:
                    return isNaN(n);
                  case 6:
                    return isNaN(n) || 1 > n;
                }
              return !1;
            })(n, t, a, r) && (t = null),
            r || null === a
              ? (function (e) {
                  return (
                    !!f.call(h, e) ||
                    (!f.call(p, e) &&
                      (d.test(e) ? (h[e] = !0) : ((p[e] = !0), !1)))
                  );
                })(n) &&
                (null === t ? e.removeAttribute(n) : e.setAttribute(n, "" + t))
              : a.mustUseProperty
              ? (e[a.propertyName] = null === t ? 3 !== a.type && "" : t)
              : ((n = a.attributeName),
                (r = a.attributeNamespace),
                null === t
                  ? e.removeAttribute(n)
                  : ((t =
                      3 === (a = a.type) || (4 === a && !0 === t)
                        ? ""
                        : "" + t),
                    r ? e.setAttributeNS(r, n, t) : e.setAttribute(n, t))));
        }
        "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
          .split(" ")
          .forEach(function (e) {
            var n = e.replace(v, y);
            g[n] = new m(n, 1, !1, e, null, !1, !1);
          }),
          "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
            .split(" ")
            .forEach(function (e) {
              var n = e.replace(v, y);
              g[n] = new m(n, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
            }),
          ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
            var n = e.replace(v, y);
            g[n] = new m(
              n,
              1,
              !1,
              e,
              "http://www.w3.org/XML/1998/namespace",
              !1,
              !1
            );
          }),
          ["tabIndex", "crossOrigin"].forEach(function (e) {
            g[e] = new m(e, 1, !1, e.toLowerCase(), null, !1, !1);
          }),
          (g.xlinkHref = new m(
            "xlinkHref",
            1,
            !1,
            "xlink:href",
            "http://www.w3.org/1999/xlink",
            !0,
            !1
          )),
          ["src", "href", "action", "formAction"].forEach(function (e) {
            g[e] = new m(e, 1, !1, e.toLowerCase(), null, !0, !0);
          });
        var w = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
          k = Symbol.for("react.element"),
          S = Symbol.for("react.portal"),
          E = Symbol.for("react.fragment"),
          x = Symbol.for("react.strict_mode"),
          C = Symbol.for("react.profiler"),
          _ = Symbol.for("react.provider"),
          N = Symbol.for("react.context"),
          T = Symbol.for("react.forward_ref"),
          O = Symbol.for("react.suspense"),
          I = Symbol.for("react.suspense_list"),
          P = Symbol.for("react.memo"),
          R = Symbol.for("react.lazy");
        Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode");
        var L = Symbol.for("react.offscreen");
        Symbol.for("react.legacy_hidden"),
          Symbol.for("react.cache"),
          Symbol.for("react.tracing_marker");
        var z = Symbol.iterator;
        function M(e) {
          return null === e || "object" !== typeof e
            ? null
            : "function" === typeof (e = (z && e[z]) || e["@@iterator"])
            ? e
            : null;
        }
        var A,
          F = Object.assign;
        function D(e) {
          if (void 0 === A)
            try {
              throw Error();
            } catch (t) {
              var n = t.stack.trim().match(/\n( *(at )?)/);
              A = (n && n[1]) || "";
            }
          return "\n" + A + e;
        }
        var j = !1;
        function U(e, n) {
          if (!e || j) return "";
          j = !0;
          var t = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          try {
            if (n)
              if (
                ((n = function () {
                  throw Error();
                }),
                Object.defineProperty(n.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                "object" === typeof Reflect && Reflect.construct)
              ) {
                try {
                  Reflect.construct(n, []);
                } catch (s) {
                  var r = s;
                }
                Reflect.construct(e, [], n);
              } else {
                try {
                  n.call();
                } catch (s) {
                  r = s;
                }
                e.call(n.prototype);
              }
            else {
              try {
                throw Error();
              } catch (s) {
                r = s;
              }
              e();
            }
          } catch (s) {
            if (s && r && "string" === typeof s.stack) {
              for (
                var a = s.stack.split("\n"),
                  o = r.stack.split("\n"),
                  l = a.length - 1,
                  i = o.length - 1;
                1 <= l && 0 <= i && a[l] !== o[i];

              )
                i--;
              for (; 1 <= l && 0 <= i; l--, i--)
                if (a[l] !== o[i]) {
                  if (1 !== l || 1 !== i)
                    do {
                      if ((l--, 0 > --i || a[l] !== o[i])) {
                        var u = "\n" + a[l].replace(" at new ", " at ");
                        return (
                          e.displayName &&
                            u.includes("<anonymous>") &&
                            (u = u.replace("<anonymous>", e.displayName)),
                          u
                        );
                      }
                    } while (1 <= l && 0 <= i);
                  break;
                }
            }
          } finally {
            (j = !1), (Error.prepareStackTrace = t);
          }
          return (e = e ? e.displayName || e.name : "") ? D(e) : "";
        }
        function $(e) {
          switch (e.tag) {
            case 5:
              return D(e.type);
            case 16:
              return D("Lazy");
            case 13:
              return D("Suspense");
            case 19:
              return D("SuspenseList");
            case 0:
            case 2:
            case 15:
              return (e = U(e.type, !1));
            case 11:
              return (e = U(e.type.render, !1));
            case 1:
              return (e = U(e.type, !0));
            default:
              return "";
          }
        }
        function H(e) {
          if (null == e) return null;
          if ("function" === typeof e) return e.displayName || e.name || null;
          if ("string" === typeof e) return e;
          switch (e) {
            case E:
              return "Fragment";
            case S:
              return "Portal";
            case C:
              return "Profiler";
            case x:
              return "StrictMode";
            case O:
              return "Suspense";
            case I:
              return "SuspenseList";
          }
          if ("object" === typeof e)
            switch (e.$$typeof) {
              case N:
                return (e.displayName || "Context") + ".Consumer";
              case _:
                return (e._context.displayName || "Context") + ".Provider";
              case T:
                var n = e.render;
                return (
                  (e = e.displayName) ||
                    (e =
                      "" !== (e = n.displayName || n.name || "")
                        ? "ForwardRef(" + e + ")"
                        : "ForwardRef"),
                  e
                );
              case P:
                return null !== (n = e.displayName || null)
                  ? n
                  : H(e.type) || "Memo";
              case R:
                (n = e._payload), (e = e._init);
                try {
                  return H(e(n));
                } catch (t) {}
            }
          return null;
        }
        function B(e) {
          var n = e.type;
          switch (e.tag) {
            case 24:
              return "Cache";
            case 9:
              return (n.displayName || "Context") + ".Consumer";
            case 10:
              return (n._context.displayName || "Context") + ".Provider";
            case 18:
              return "DehydratedFragment";
            case 11:
              return (
                (e = (e = n.render).displayName || e.name || ""),
                n.displayName ||
                  ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef")
              );
            case 7:
              return "Fragment";
            case 5:
              return n;
            case 4:
              return "Portal";
            case 3:
              return "Root";
            case 6:
              return "Text";
            case 16:
              return H(n);
            case 8:
              return n === x ? "StrictMode" : "Mode";
            case 22:
              return "Offscreen";
            case 12:
              return "Profiler";
            case 21:
              return "Scope";
            case 13:
              return "Suspense";
            case 19:
              return "SuspenseList";
            case 25:
              return "TracingMarker";
            case 1:
            case 0:
            case 17:
            case 2:
            case 14:
            case 15:
              if ("function" === typeof n)
                return n.displayName || n.name || null;
              if ("string" === typeof n) return n;
          }
          return null;
        }
        function V(e) {
          switch (typeof e) {
            case "boolean":
            case "number":
            case "string":
            case "undefined":
            case "object":
              return e;
            default:
              return "";
          }
        }
        function W(e) {
          var n = e.type;
          return (
            (e = e.nodeName) &&
            "input" === e.toLowerCase() &&
            ("checkbox" === n || "radio" === n)
          );
        }
        function Y(e) {
          e._valueTracker ||
            (e._valueTracker = (function (e) {
              var n = W(e) ? "checked" : "value",
                t = Object.getOwnPropertyDescriptor(e.constructor.prototype, n),
                r = "" + e[n];
              if (
                !e.hasOwnProperty(n) &&
                "undefined" !== typeof t &&
                "function" === typeof t.get &&
                "function" === typeof t.set
              ) {
                var a = t.get,
                  o = t.set;
                return (
                  Object.defineProperty(e, n, {
                    configurable: !0,
                    get: function () {
                      return a.call(this);
                    },
                    set: function (e) {
                      (r = "" + e), o.call(this, e);
                    },
                  }),
                  Object.defineProperty(e, n, { enumerable: t.enumerable }),
                  {
                    getValue: function () {
                      return r;
                    },
                    setValue: function (e) {
                      r = "" + e;
                    },
                    stopTracking: function () {
                      (e._valueTracker = null), delete e[n];
                    },
                  }
                );
              }
            })(e));
        }
        function Q(e) {
          if (!e) return !1;
          var n = e._valueTracker;
          if (!n) return !0;
          var t = n.getValue(),
            r = "";
          return (
            e && (r = W(e) ? (e.checked ? "true" : "false") : e.value),
            (e = r) !== t && (n.setValue(e), !0)
          );
        }
        function K(e) {
          if (
            "undefined" ===
            typeof (e =
              e || ("undefined" !== typeof document ? document : void 0))
          )
            return null;
          try {
            return e.activeElement || e.body;
          } catch (n) {
            return e.body;
          }
        }
        function q(e, n) {
          var t = n.checked;
          return F({}, n, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: null != t ? t : e._wrapperState.initialChecked,
          });
        }
        function G(e, n) {
          var t = null == n.defaultValue ? "" : n.defaultValue,
            r = null != n.checked ? n.checked : n.defaultChecked;
          (t = V(null != n.value ? n.value : t)),
            (e._wrapperState = {
              initialChecked: r,
              initialValue: t,
              controlled:
                "checkbox" === n.type || "radio" === n.type
                  ? null != n.checked
                  : null != n.value,
            });
        }
        function X(e, n) {
          null != (n = n.checked) && b(e, "checked", n, !1);
        }
        function J(e, n) {
          X(e, n);
          var t = V(n.value),
            r = n.type;
          if (null != t)
            "number" === r
              ? ((0 === t && "" === e.value) || e.value != t) &&
                (e.value = "" + t)
              : e.value !== "" + t && (e.value = "" + t);
          else if ("submit" === r || "reset" === r)
            return void e.removeAttribute("value");
          n.hasOwnProperty("value")
            ? ee(e, n.type, t)
            : n.hasOwnProperty("defaultValue") &&
              ee(e, n.type, V(n.defaultValue)),
            null == n.checked &&
              null != n.defaultChecked &&
              (e.defaultChecked = !!n.defaultChecked);
        }
        function Z(e, n, t) {
          if (n.hasOwnProperty("value") || n.hasOwnProperty("defaultValue")) {
            var r = n.type;
            if (
              !(
                ("submit" !== r && "reset" !== r) ||
                (void 0 !== n.value && null !== n.value)
              )
            )
              return;
            (n = "" + e._wrapperState.initialValue),
              t || n === e.value || (e.value = n),
              (e.defaultValue = n);
          }
          "" !== (t = e.name) && (e.name = ""),
            (e.defaultChecked = !!e._wrapperState.initialChecked),
            "" !== t && (e.name = t);
        }
        function ee(e, n, t) {
          ("number" === n && K(e.ownerDocument) === e) ||
            (null == t
              ? (e.defaultValue = "" + e._wrapperState.initialValue)
              : e.defaultValue !== "" + t && (e.defaultValue = "" + t));
        }
        var ne = Array.isArray;
        function te(e, n, t, r) {
          if (((e = e.options), n)) {
            n = {};
            for (var a = 0; a < t.length; a++) n["$" + t[a]] = !0;
            for (t = 0; t < e.length; t++)
              (a = n.hasOwnProperty("$" + e[t].value)),
                e[t].selected !== a && (e[t].selected = a),
                a && r && (e[t].defaultSelected = !0);
          } else {
            for (t = "" + V(t), n = null, a = 0; a < e.length; a++) {
              if (e[a].value === t)
                return (
                  (e[a].selected = !0), void (r && (e[a].defaultSelected = !0))
                );
              null !== n || e[a].disabled || (n = e[a]);
            }
            null !== n && (n.selected = !0);
          }
        }
        function re(e, n) {
          if (null != n.dangerouslySetInnerHTML) throw Error(o(91));
          return F({}, n, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue,
          });
        }
        function ae(e, n) {
          var t = n.value;
          if (null == t) {
            if (((t = n.children), (n = n.defaultValue), null != t)) {
              if (null != n) throw Error(o(92));
              if (ne(t)) {
                if (1 < t.length) throw Error(o(93));
                t = t[0];
              }
              n = t;
            }
            null == n && (n = ""), (t = n);
          }
          e._wrapperState = { initialValue: V(t) };
        }
        function oe(e, n) {
          var t = V(n.value),
            r = V(n.defaultValue);
          null != t &&
            ((t = "" + t) !== e.value && (e.value = t),
            null == n.defaultValue &&
              e.defaultValue !== t &&
              (e.defaultValue = t)),
            null != r && (e.defaultValue = "" + r);
        }
        function le(e) {
          var n = e.textContent;
          n === e._wrapperState.initialValue &&
            "" !== n &&
            null !== n &&
            (e.value = n);
        }
        function ie(e) {
          switch (e) {
            case "svg":
              return "http://www.w3.org/2000/svg";
            case "math":
              return "http://www.w3.org/1998/Math/MathML";
            default:
              return "http://www.w3.org/1999/xhtml";
          }
        }
        function ue(e, n) {
          return null == e || "http://www.w3.org/1999/xhtml" === e
            ? ie(n)
            : "http://www.w3.org/2000/svg" === e && "foreignObject" === n
            ? "http://www.w3.org/1999/xhtml"
            : e;
        }
        var se,
          ce,
          fe =
            ((ce = function (e, n) {
              if (
                "http://www.w3.org/2000/svg" !== e.namespaceURI ||
                "innerHTML" in e
              )
                e.innerHTML = n;
              else {
                for (
                  (se = se || document.createElement("div")).innerHTML =
                    "<svg>" + n.valueOf().toString() + "</svg>",
                    n = se.firstChild;
                  e.firstChild;

                )
                  e.removeChild(e.firstChild);
                for (; n.firstChild; ) e.appendChild(n.firstChild);
              }
            }),
            "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction
              ? function (e, n, t, r) {
                  MSApp.execUnsafeLocalFunction(function () {
                    return ce(e, n);
                  });
                }
              : ce);
        function de(e, n) {
          if (n) {
            var t = e.firstChild;
            if (t && t === e.lastChild && 3 === t.nodeType)
              return void (t.nodeValue = n);
          }
          e.textContent = n;
        }
        var pe = {
            animationIterationCount: !0,
            aspectRatio: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            columns: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridArea: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSpan: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnSpan: !0,
            gridColumnStart: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0,
          },
          he = ["Webkit", "ms", "Moz", "O"];
        function me(e, n, t) {
          return null == n || "boolean" === typeof n || "" === n
            ? ""
            : t ||
              "number" !== typeof n ||
              0 === n ||
              (pe.hasOwnProperty(e) && pe[e])
            ? ("" + n).trim()
            : n + "px";
        }
        function ge(e, n) {
          for (var t in ((e = e.style), n))
            if (n.hasOwnProperty(t)) {
              var r = 0 === t.indexOf("--"),
                a = me(t, n[t], r);
              "float" === t && (t = "cssFloat"),
                r ? e.setProperty(t, a) : (e[t] = a);
            }
        }
        Object.keys(pe).forEach(function (e) {
          he.forEach(function (n) {
            (n = n + e.charAt(0).toUpperCase() + e.substring(1)),
              (pe[n] = pe[e]);
          });
        });
        var ve = F(
          { menuitem: !0 },
          {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            keygen: !0,
            link: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0,
          }
        );
        function ye(e, n) {
          if (n) {
            if (
              ve[e] &&
              (null != n.children || null != n.dangerouslySetInnerHTML)
            )
              throw Error(o(137, e));
            if (null != n.dangerouslySetInnerHTML) {
              if (null != n.children) throw Error(o(60));
              if (
                "object" !== typeof n.dangerouslySetInnerHTML ||
                !("__html" in n.dangerouslySetInnerHTML)
              )
                throw Error(o(61));
            }
            if (null != n.style && "object" !== typeof n.style)
              throw Error(o(62));
          }
        }
        function be(e, n) {
          if (-1 === e.indexOf("-")) return "string" === typeof n.is;
          switch (e) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
              return !1;
            default:
              return !0;
          }
        }
        var we = null;
        function ke(e) {
          return (
            (e = e.target || e.srcElement || window).correspondingUseElement &&
              (e = e.correspondingUseElement),
            3 === e.nodeType ? e.parentNode : e
          );
        }
        var Se = null,
          Ee = null,
          xe = null;
        function Ce(e) {
          if ((e = ba(e))) {
            if ("function" !== typeof Se) throw Error(o(280));
            var n = e.stateNode;
            n && ((n = ka(n)), Se(e.stateNode, e.type, n));
          }
        }
        function _e(e) {
          Ee ? (xe ? xe.push(e) : (xe = [e])) : (Ee = e);
        }
        function Ne() {
          if (Ee) {
            var e = Ee,
              n = xe;
            if (((xe = Ee = null), Ce(e), n))
              for (e = 0; e < n.length; e++) Ce(n[e]);
          }
        }
        function Te(e, n) {
          return e(n);
        }
        function Oe() {}
        var Ie = !1;
        function Pe(e, n, t) {
          if (Ie) return e(n, t);
          Ie = !0;
          try {
            return Te(e, n, t);
          } finally {
            (Ie = !1), (null !== Ee || null !== xe) && (Oe(), Ne());
          }
        }
        function Re(e, n) {
          var t = e.stateNode;
          if (null === t) return null;
          var r = ka(t);
          if (null === r) return null;
          t = r[n];
          e: switch (n) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
              (r = !r.disabled) ||
                (r = !(
                  "button" === (e = e.type) ||
                  "input" === e ||
                  "select" === e ||
                  "textarea" === e
                )),
                (e = !r);
              break e;
            default:
              e = !1;
          }
          if (e) return null;
          if (t && "function" !== typeof t) throw Error(o(231, n, typeof t));
          return t;
        }
        var Le = !1;
        if (c)
          try {
            var ze = {};
            Object.defineProperty(ze, "passive", {
              get: function () {
                Le = !0;
              },
            }),
              window.addEventListener("test", ze, ze),
              window.removeEventListener("test", ze, ze);
          } catch (ce) {
            Le = !1;
          }
        function Me(e, n, t, r, a, o, l, i, u) {
          var s = Array.prototype.slice.call(arguments, 3);
          try {
            n.apply(t, s);
          } catch (c) {
            this.onError(c);
          }
        }
        var Ae = !1,
          Fe = null,
          De = !1,
          je = null,
          Ue = {
            onError: function (e) {
              (Ae = !0), (Fe = e);
            },
          };
        function $e(e, n, t, r, a, o, l, i, u) {
          (Ae = !1), (Fe = null), Me.apply(Ue, arguments);
        }
        function He(e) {
          var n = e,
            t = e;
          if (e.alternate) for (; n.return; ) n = n.return;
          else {
            e = n;
            do {
              0 !== (4098 & (n = e).flags) && (t = n.return), (e = n.return);
            } while (e);
          }
          return 3 === n.tag ? t : null;
        }
        function Be(e) {
          if (13 === e.tag) {
            var n = e.memoizedState;
            if (
              (null === n &&
                null !== (e = e.alternate) &&
                (n = e.memoizedState),
              null !== n)
            )
              return n.dehydrated;
          }
          return null;
        }
        function Ve(e) {
          if (He(e) !== e) throw Error(o(188));
        }
        function We(e) {
          return null !==
            (e = (function (e) {
              var n = e.alternate;
              if (!n) {
                if (null === (n = He(e))) throw Error(o(188));
                return n !== e ? null : e;
              }
              for (var t = e, r = n; ; ) {
                var a = t.return;
                if (null === a) break;
                var l = a.alternate;
                if (null === l) {
                  if (null !== (r = a.return)) {
                    t = r;
                    continue;
                  }
                  break;
                }
                if (a.child === l.child) {
                  for (l = a.child; l; ) {
                    if (l === t) return Ve(a), e;
                    if (l === r) return Ve(a), n;
                    l = l.sibling;
                  }
                  throw Error(o(188));
                }
                if (t.return !== r.return) (t = a), (r = l);
                else {
                  for (var i = !1, u = a.child; u; ) {
                    if (u === t) {
                      (i = !0), (t = a), (r = l);
                      break;
                    }
                    if (u === r) {
                      (i = !0), (r = a), (t = l);
                      break;
                    }
                    u = u.sibling;
                  }
                  if (!i) {
                    for (u = l.child; u; ) {
                      if (u === t) {
                        (i = !0), (t = l), (r = a);
                        break;
                      }
                      if (u === r) {
                        (i = !0), (r = l), (t = a);
                        break;
                      }
                      u = u.sibling;
                    }
                    if (!i) throw Error(o(189));
                  }
                }
                if (t.alternate !== r) throw Error(o(190));
              }
              if (3 !== t.tag) throw Error(o(188));
              return t.stateNode.current === t ? e : n;
            })(e))
            ? Ye(e)
            : null;
        }
        function Ye(e) {
          if (5 === e.tag || 6 === e.tag) return e;
          for (e = e.child; null !== e; ) {
            var n = Ye(e);
            if (null !== n) return n;
            e = e.sibling;
          }
          return null;
        }
        var Qe = a.unstable_scheduleCallback,
          Ke = a.unstable_cancelCallback,
          qe = a.unstable_shouldYield,
          Ge = a.unstable_requestPaint,
          Xe = a.unstable_now,
          Je = a.unstable_getCurrentPriorityLevel,
          Ze = a.unstable_ImmediatePriority,
          en = a.unstable_UserBlockingPriority,
          nn = a.unstable_NormalPriority,
          tn = a.unstable_LowPriority,
          rn = a.unstable_IdlePriority,
          an = null,
          on = null;
        var ln = Math.clz32
            ? Math.clz32
            : function (e) {
                return (e >>>= 0), 0 === e ? 32 : (31 - ((un(e) / sn) | 0)) | 0;
              },
          un = Math.log,
          sn = Math.LN2;
        var cn = 64,
          fn = 4194304;
        function dn(e) {
          switch (e & -e) {
            case 1:
              return 1;
            case 2:
              return 2;
            case 4:
              return 4;
            case 8:
              return 8;
            case 16:
              return 16;
            case 32:
              return 32;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return 4194240 & e;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              return 130023424 & e;
            case 134217728:
              return 134217728;
            case 268435456:
              return 268435456;
            case 536870912:
              return 536870912;
            case 1073741824:
              return 1073741824;
            default:
              return e;
          }
        }
        function pn(e, n) {
          var t = e.pendingLanes;
          if (0 === t) return 0;
          var r = 0,
            a = e.suspendedLanes,
            o = e.pingedLanes,
            l = 268435455 & t;
          if (0 !== l) {
            var i = l & ~a;
            0 !== i ? (r = dn(i)) : 0 !== (o &= l) && (r = dn(o));
          } else 0 !== (l = t & ~a) ? (r = dn(l)) : 0 !== o && (r = dn(o));
          if (0 === r) return 0;
          if (
            0 !== n &&
            n !== r &&
            0 === (n & a) &&
            ((a = r & -r) >= (o = n & -n) || (16 === a && 0 !== (4194240 & o)))
          )
            return n;
          if ((0 !== (4 & r) && (r |= 16 & t), 0 !== (n = e.entangledLanes)))
            for (e = e.entanglements, n &= r; 0 < n; )
              (a = 1 << (t = 31 - ln(n))), (r |= e[t]), (n &= ~a);
          return r;
        }
        function hn(e, n) {
          switch (e) {
            case 1:
            case 2:
            case 4:
              return n + 250;
            case 8:
            case 16:
            case 32:
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return n + 5e3;
            default:
              return -1;
          }
        }
        function mn(e) {
          return 0 !== (e = -1073741825 & e.pendingLanes)
            ? e
            : 1073741824 & e
            ? 1073741824
            : 0;
        }
        function gn() {
          var e = cn;
          return 0 === (4194240 & (cn <<= 1)) && (cn = 64), e;
        }
        function vn(e) {
          for (var n = [], t = 0; 31 > t; t++) n.push(e);
          return n;
        }
        function yn(e, n, t) {
          (e.pendingLanes |= n),
            536870912 !== n && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
            ((e = e.eventTimes)[(n = 31 - ln(n))] = t);
        }
        function bn(e, n) {
          var t = (e.entangledLanes |= n);
          for (e = e.entanglements; t; ) {
            var r = 31 - ln(t),
              a = 1 << r;
            (a & n) | (e[r] & n) && (e[r] |= n), (t &= ~a);
          }
        }
        var wn = 0;
        function kn(e) {
          return 1 < (e &= -e)
            ? 4 < e
              ? 0 !== (268435455 & e)
                ? 16
                : 536870912
              : 4
            : 1;
        }
        var Sn,
          En,
          xn,
          Cn,
          _n,
          Nn = !1,
          Tn = [],
          On = null,
          In = null,
          Pn = null,
          Rn = new Map(),
          Ln = new Map(),
          zn = [],
          Mn =
            "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
              " "
            );
        function An(e, n) {
          switch (e) {
            case "focusin":
            case "focusout":
              On = null;
              break;
            case "dragenter":
            case "dragleave":
              In = null;
              break;
            case "mouseover":
            case "mouseout":
              Pn = null;
              break;
            case "pointerover":
            case "pointerout":
              Rn.delete(n.pointerId);
              break;
            case "gotpointercapture":
            case "lostpointercapture":
              Ln.delete(n.pointerId);
          }
        }
        function Fn(e, n, t, r, a, o) {
          return null === e || e.nativeEvent !== o
            ? ((e = {
                blockedOn: n,
                domEventName: t,
                eventSystemFlags: r,
                nativeEvent: o,
                targetContainers: [a],
              }),
              null !== n && null !== (n = ba(n)) && En(n),
              e)
            : ((e.eventSystemFlags |= r),
              (n = e.targetContainers),
              null !== a && -1 === n.indexOf(a) && n.push(a),
              e);
        }
        function Dn(e) {
          var n = ya(e.target);
          if (null !== n) {
            var t = He(n);
            if (null !== t)
              if (13 === (n = t.tag)) {
                if (null !== (n = Be(t)))
                  return (
                    (e.blockedOn = n),
                    void _n(e.priority, function () {
                      xn(t);
                    })
                  );
              } else if (
                3 === n &&
                t.stateNode.current.memoizedState.isDehydrated
              )
                return void (e.blockedOn =
                  3 === t.tag ? t.stateNode.containerInfo : null);
          }
          e.blockedOn = null;
        }
        function jn(e) {
          if (null !== e.blockedOn) return !1;
          for (var n = e.targetContainers; 0 < n.length; ) {
            var t = Gn(e.domEventName, e.eventSystemFlags, n[0], e.nativeEvent);
            if (null !== t)
              return null !== (n = ba(t)) && En(n), (e.blockedOn = t), !1;
            var r = new (t = e.nativeEvent).constructor(t.type, t);
            (we = r), t.target.dispatchEvent(r), (we = null), n.shift();
          }
          return !0;
        }
        function Un(e, n, t) {
          jn(e) && t.delete(n);
        }
        function $n() {
          (Nn = !1),
            null !== On && jn(On) && (On = null),
            null !== In && jn(In) && (In = null),
            null !== Pn && jn(Pn) && (Pn = null),
            Rn.forEach(Un),
            Ln.forEach(Un);
        }
        function Hn(e, n) {
          e.blockedOn === n &&
            ((e.blockedOn = null),
            Nn ||
              ((Nn = !0),
              a.unstable_scheduleCallback(a.unstable_NormalPriority, $n)));
        }
        function Bn(e) {
          function n(n) {
            return Hn(n, e);
          }
          if (0 < Tn.length) {
            Hn(Tn[0], e);
            for (var t = 1; t < Tn.length; t++) {
              var r = Tn[t];
              r.blockedOn === e && (r.blockedOn = null);
            }
          }
          for (
            null !== On && Hn(On, e),
              null !== In && Hn(In, e),
              null !== Pn && Hn(Pn, e),
              Rn.forEach(n),
              Ln.forEach(n),
              t = 0;
            t < zn.length;
            t++
          )
            (r = zn[t]).blockedOn === e && (r.blockedOn = null);
          for (; 0 < zn.length && null === (t = zn[0]).blockedOn; )
            Dn(t), null === t.blockedOn && zn.shift();
        }
        var Vn = w.ReactCurrentBatchConfig,
          Wn = !0;
        function Yn(e, n, t, r) {
          var a = wn,
            o = Vn.transition;
          Vn.transition = null;
          try {
            (wn = 1), Kn(e, n, t, r);
          } finally {
            (wn = a), (Vn.transition = o);
          }
        }
        function Qn(e, n, t, r) {
          var a = wn,
            o = Vn.transition;
          Vn.transition = null;
          try {
            (wn = 4), Kn(e, n, t, r);
          } finally {
            (wn = a), (Vn.transition = o);
          }
        }
        function Kn(e, n, t, r) {
          if (Wn) {
            var a = Gn(e, n, t, r);
            if (null === a) Vr(e, n, r, qn, t), An(e, r);
            else if (
              (function (e, n, t, r, a) {
                switch (n) {
                  case "focusin":
                    return (On = Fn(On, e, n, t, r, a)), !0;
                  case "dragenter":
                    return (In = Fn(In, e, n, t, r, a)), !0;
                  case "mouseover":
                    return (Pn = Fn(Pn, e, n, t, r, a)), !0;
                  case "pointerover":
                    var o = a.pointerId;
                    return Rn.set(o, Fn(Rn.get(o) || null, e, n, t, r, a)), !0;
                  case "gotpointercapture":
                    return (
                      (o = a.pointerId),
                      Ln.set(o, Fn(Ln.get(o) || null, e, n, t, r, a)),
                      !0
                    );
                }
                return !1;
              })(a, e, n, t, r)
            )
              r.stopPropagation();
            else if ((An(e, r), 4 & n && -1 < Mn.indexOf(e))) {
              for (; null !== a; ) {
                var o = ba(a);
                if (
                  (null !== o && Sn(o),
                  null === (o = Gn(e, n, t, r)) && Vr(e, n, r, qn, t),
                  o === a)
                )
                  break;
                a = o;
              }
              null !== a && r.stopPropagation();
            } else Vr(e, n, r, null, t);
          }
        }
        var qn = null;
        function Gn(e, n, t, r) {
          if (((qn = null), null !== (e = ya((e = ke(r))))))
            if (null === (n = He(e))) e = null;
            else if (13 === (t = n.tag)) {
              if (null !== (e = Be(n))) return e;
              e = null;
            } else if (3 === t) {
              if (n.stateNode.current.memoizedState.isDehydrated)
                return 3 === n.tag ? n.stateNode.containerInfo : null;
              e = null;
            } else n !== e && (e = null);
          return (qn = e), null;
        }
        function Xn(e) {
          switch (e) {
            case "cancel":
            case "click":
            case "close":
            case "contextmenu":
            case "copy":
            case "cut":
            case "auxclick":
            case "dblclick":
            case "dragend":
            case "dragstart":
            case "drop":
            case "focusin":
            case "focusout":
            case "input":
            case "invalid":
            case "keydown":
            case "keypress":
            case "keyup":
            case "mousedown":
            case "mouseup":
            case "paste":
            case "pause":
            case "play":
            case "pointercancel":
            case "pointerdown":
            case "pointerup":
            case "ratechange":
            case "reset":
            case "resize":
            case "seeked":
            case "submit":
            case "touchcancel":
            case "touchend":
            case "touchstart":
            case "volumechange":
            case "change":
            case "selectionchange":
            case "textInput":
            case "compositionstart":
            case "compositionend":
            case "compositionupdate":
            case "beforeblur":
            case "afterblur":
            case "beforeinput":
            case "blur":
            case "fullscreenchange":
            case "focus":
            case "hashchange":
            case "popstate":
            case "select":
            case "selectstart":
              return 1;
            case "drag":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "mousemove":
            case "mouseout":
            case "mouseover":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "scroll":
            case "toggle":
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave":
              return 4;
            case "message":
              switch (Je()) {
                case Ze:
                  return 1;
                case en:
                  return 4;
                case nn:
                case tn:
                  return 16;
                case rn:
                  return 536870912;
                default:
                  return 16;
              }
            default:
              return 16;
          }
        }
        var Jn = null,
          Zn = null,
          et = null;
        function nt() {
          if (et) return et;
          var e,
            n,
            t = Zn,
            r = t.length,
            a = "value" in Jn ? Jn.value : Jn.textContent,
            o = a.length;
          for (e = 0; e < r && t[e] === a[e]; e++);
          var l = r - e;
          for (n = 1; n <= l && t[r - n] === a[o - n]; n++);
          return (et = a.slice(e, 1 < n ? 1 - n : void 0));
        }
        function tt(e) {
          var n = e.keyCode;
          return (
            "charCode" in e
              ? 0 === (e = e.charCode) && 13 === n && (e = 13)
              : (e = n),
            10 === e && (e = 13),
            32 <= e || 13 === e ? e : 0
          );
        }
        function rt() {
          return !0;
        }
        function at() {
          return !1;
        }
        function ot(e) {
          function n(n, t, r, a, o) {
            for (var l in ((this._reactName = n),
            (this._targetInst = r),
            (this.type = t),
            (this.nativeEvent = a),
            (this.target = o),
            (this.currentTarget = null),
            e))
              e.hasOwnProperty(l) && ((n = e[l]), (this[l] = n ? n(a) : a[l]));
            return (
              (this.isDefaultPrevented = (
                null != a.defaultPrevented
                  ? a.defaultPrevented
                  : !1 === a.returnValue
              )
                ? rt
                : at),
              (this.isPropagationStopped = at),
              this
            );
          }
          return (
            F(n.prototype, {
              preventDefault: function () {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e &&
                  (e.preventDefault
                    ? e.preventDefault()
                    : "unknown" !== typeof e.returnValue &&
                      (e.returnValue = !1),
                  (this.isDefaultPrevented = rt));
              },
              stopPropagation: function () {
                var e = this.nativeEvent;
                e &&
                  (e.stopPropagation
                    ? e.stopPropagation()
                    : "unknown" !== typeof e.cancelBubble &&
                      (e.cancelBubble = !0),
                  (this.isPropagationStopped = rt));
              },
              persist: function () {},
              isPersistent: rt,
            }),
            n
          );
        }
        var lt,
          it,
          ut,
          st = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (e) {
              return e.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0,
          },
          ct = ot(st),
          ft = F({}, st, { view: 0, detail: 0 }),
          dt = ot(ft),
          pt = F({}, ft, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: Ct,
            button: 0,
            buttons: 0,
            relatedTarget: function (e) {
              return void 0 === e.relatedTarget
                ? e.fromElement === e.srcElement
                  ? e.toElement
                  : e.fromElement
                : e.relatedTarget;
            },
            movementX: function (e) {
              return "movementX" in e
                ? e.movementX
                : (e !== ut &&
                    (ut && "mousemove" === e.type
                      ? ((lt = e.screenX - ut.screenX),
                        (it = e.screenY - ut.screenY))
                      : (it = lt = 0),
                    (ut = e)),
                  lt);
            },
            movementY: function (e) {
              return "movementY" in e ? e.movementY : it;
            },
          }),
          ht = ot(pt),
          mt = ot(F({}, pt, { dataTransfer: 0 })),
          gt = ot(F({}, ft, { relatedTarget: 0 })),
          vt = ot(
            F({}, st, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          yt = F({}, st, {
            clipboardData: function (e) {
              return "clipboardData" in e
                ? e.clipboardData
                : window.clipboardData;
            },
          }),
          bt = ot(yt),
          wt = ot(F({}, st, { data: 0 })),
          kt = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified",
          },
          St = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta",
          },
          Et = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey",
          };
        function xt(e) {
          var n = this.nativeEvent;
          return n.getModifierState
            ? n.getModifierState(e)
            : !!(e = Et[e]) && !!n[e];
        }
        function Ct() {
          return xt;
        }
        var _t = F({}, ft, {
            key: function (e) {
              if (e.key) {
                var n = kt[e.key] || e.key;
                if ("Unidentified" !== n) return n;
              }
              return "keypress" === e.type
                ? 13 === (e = tt(e))
                  ? "Enter"
                  : String.fromCharCode(e)
                : "keydown" === e.type || "keyup" === e.type
                ? St[e.keyCode] || "Unidentified"
                : "";
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: Ct,
            charCode: function (e) {
              return "keypress" === e.type ? tt(e) : 0;
            },
            keyCode: function (e) {
              return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
            },
            which: function (e) {
              return "keypress" === e.type
                ? tt(e)
                : "keydown" === e.type || "keyup" === e.type
                ? e.keyCode
                : 0;
            },
          }),
          Nt = ot(_t),
          Tt = ot(
            F({}, pt, {
              pointerId: 0,
              width: 0,
              height: 0,
              pressure: 0,
              tangentialPressure: 0,
              tiltX: 0,
              tiltY: 0,
              twist: 0,
              pointerType: 0,
              isPrimary: 0,
            })
          ),
          Ot = ot(
            F({}, ft, {
              touches: 0,
              targetTouches: 0,
              changedTouches: 0,
              altKey: 0,
              metaKey: 0,
              ctrlKey: 0,
              shiftKey: 0,
              getModifierState: Ct,
            })
          ),
          It = ot(
            F({}, st, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          Pt = F({}, pt, {
            deltaX: function (e) {
              return "deltaX" in e
                ? e.deltaX
                : "wheelDeltaX" in e
                ? -e.wheelDeltaX
                : 0;
            },
            deltaY: function (e) {
              return "deltaY" in e
                ? e.deltaY
                : "wheelDeltaY" in e
                ? -e.wheelDeltaY
                : "wheelDelta" in e
                ? -e.wheelDelta
                : 0;
            },
            deltaZ: 0,
            deltaMode: 0,
          }),
          Rt = ot(Pt),
          Lt = [9, 13, 27, 32],
          zt = c && "CompositionEvent" in window,
          Mt = null;
        c && "documentMode" in document && (Mt = document.documentMode);
        var At = c && "TextEvent" in window && !Mt,
          Ft = c && (!zt || (Mt && 8 < Mt && 11 >= Mt)),
          Dt = String.fromCharCode(32),
          jt = !1;
        function Ut(e, n) {
          switch (e) {
            case "keyup":
              return -1 !== Lt.indexOf(n.keyCode);
            case "keydown":
              return 229 !== n.keyCode;
            case "keypress":
            case "mousedown":
            case "focusout":
              return !0;
            default:
              return !1;
          }
        }
        function $t(e) {
          return "object" === typeof (e = e.detail) && "data" in e
            ? e.data
            : null;
        }
        var Ht = !1;
        var Bt = {
          color: !0,
          date: !0,
          datetime: !0,
          "datetime-local": !0,
          email: !0,
          month: !0,
          number: !0,
          password: !0,
          range: !0,
          search: !0,
          tel: !0,
          text: !0,
          time: !0,
          url: !0,
          week: !0,
        };
        function Vt(e) {
          var n = e && e.nodeName && e.nodeName.toLowerCase();
          return "input" === n ? !!Bt[e.type] : "textarea" === n;
        }
        function Wt(e, n, t, r) {
          _e(r),
            0 < (n = Yr(n, "onChange")).length &&
              ((t = new ct("onChange", "change", null, t, r)),
              e.push({ event: t, listeners: n }));
        }
        var Yt = null,
          Qt = null;
        function Kt(e) {
          Dr(e, 0);
        }
        function qt(e) {
          if (Q(wa(e))) return e;
        }
        function Gt(e, n) {
          if ("change" === e) return n;
        }
        var Xt = !1;
        if (c) {
          var Jt;
          if (c) {
            var Zt = "oninput" in document;
            if (!Zt) {
              var er = document.createElement("div");
              er.setAttribute("oninput", "return;"),
                (Zt = "function" === typeof er.oninput);
            }
            Jt = Zt;
          } else Jt = !1;
          Xt = Jt && (!document.documentMode || 9 < document.documentMode);
        }
        function nr() {
          Yt && (Yt.detachEvent("onpropertychange", tr), (Qt = Yt = null));
        }
        function tr(e) {
          if ("value" === e.propertyName && qt(Qt)) {
            var n = [];
            Wt(n, Qt, e, ke(e)), Pe(Kt, n);
          }
        }
        function rr(e, n, t) {
          "focusin" === e
            ? (nr(), (Qt = t), (Yt = n).attachEvent("onpropertychange", tr))
            : "focusout" === e && nr();
        }
        function ar(e) {
          if ("selectionchange" === e || "keyup" === e || "keydown" === e)
            return qt(Qt);
        }
        function or(e, n) {
          if ("click" === e) return qt(n);
        }
        function lr(e, n) {
          if ("input" === e || "change" === e) return qt(n);
        }
        var ir =
          "function" === typeof Object.is
            ? Object.is
            : function (e, n) {
                return (
                  (e === n && (0 !== e || 1 / e === 1 / n)) ||
                  (e !== e && n !== n)
                );
              };
        function ur(e, n) {
          if (ir(e, n)) return !0;
          if (
            "object" !== typeof e ||
            null === e ||
            "object" !== typeof n ||
            null === n
          )
            return !1;
          var t = Object.keys(e),
            r = Object.keys(n);
          if (t.length !== r.length) return !1;
          for (r = 0; r < t.length; r++) {
            var a = t[r];
            if (!f.call(n, a) || !ir(e[a], n[a])) return !1;
          }
          return !0;
        }
        function sr(e) {
          for (; e && e.firstChild; ) e = e.firstChild;
          return e;
        }
        function cr(e, n) {
          var t,
            r = sr(e);
          for (e = 0; r; ) {
            if (3 === r.nodeType) {
              if (((t = e + r.textContent.length), e <= n && t >= n))
                return { node: r, offset: n - e };
              e = t;
            }
            e: {
              for (; r; ) {
                if (r.nextSibling) {
                  r = r.nextSibling;
                  break e;
                }
                r = r.parentNode;
              }
              r = void 0;
            }
            r = sr(r);
          }
        }
        function fr(e, n) {
          return (
            !(!e || !n) &&
            (e === n ||
              ((!e || 3 !== e.nodeType) &&
                (n && 3 === n.nodeType
                  ? fr(e, n.parentNode)
                  : "contains" in e
                  ? e.contains(n)
                  : !!e.compareDocumentPosition &&
                    !!(16 & e.compareDocumentPosition(n)))))
          );
        }
        function dr() {
          for (var e = window, n = K(); n instanceof e.HTMLIFrameElement; ) {
            try {
              var t = "string" === typeof n.contentWindow.location.href;
            } catch (r) {
              t = !1;
            }
            if (!t) break;
            n = K((e = n.contentWindow).document);
          }
          return n;
        }
        function pr(e) {
          var n = e && e.nodeName && e.nodeName.toLowerCase();
          return (
            n &&
            (("input" === n &&
              ("text" === e.type ||
                "search" === e.type ||
                "tel" === e.type ||
                "url" === e.type ||
                "password" === e.type)) ||
              "textarea" === n ||
              "true" === e.contentEditable)
          );
        }
        function hr(e) {
          var n = dr(),
            t = e.focusedElem,
            r = e.selectionRange;
          if (
            n !== t &&
            t &&
            t.ownerDocument &&
            fr(t.ownerDocument.documentElement, t)
          ) {
            if (null !== r && pr(t))
              if (
                ((n = r.start),
                void 0 === (e = r.end) && (e = n),
                "selectionStart" in t)
              )
                (t.selectionStart = n),
                  (t.selectionEnd = Math.min(e, t.value.length));
              else if (
                (e =
                  ((n = t.ownerDocument || document) && n.defaultView) ||
                  window).getSelection
              ) {
                e = e.getSelection();
                var a = t.textContent.length,
                  o = Math.min(r.start, a);
                (r = void 0 === r.end ? o : Math.min(r.end, a)),
                  !e.extend && o > r && ((a = r), (r = o), (o = a)),
                  (a = cr(t, o));
                var l = cr(t, r);
                a &&
                  l &&
                  (1 !== e.rangeCount ||
                    e.anchorNode !== a.node ||
                    e.anchorOffset !== a.offset ||
                    e.focusNode !== l.node ||
                    e.focusOffset !== l.offset) &&
                  ((n = n.createRange()).setStart(a.node, a.offset),
                  e.removeAllRanges(),
                  o > r
                    ? (e.addRange(n), e.extend(l.node, l.offset))
                    : (n.setEnd(l.node, l.offset), e.addRange(n)));
              }
            for (n = [], e = t; (e = e.parentNode); )
              1 === e.nodeType &&
                n.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
            for (
              "function" === typeof t.focus && t.focus(), t = 0;
              t < n.length;
              t++
            )
              ((e = n[t]).element.scrollLeft = e.left),
                (e.element.scrollTop = e.top);
          }
        }
        var mr = c && "documentMode" in document && 11 >= document.documentMode,
          gr = null,
          vr = null,
          yr = null,
          br = !1;
        function wr(e, n, t) {
          var r =
            t.window === t
              ? t.document
              : 9 === t.nodeType
              ? t
              : t.ownerDocument;
          br ||
            null == gr ||
            gr !== K(r) ||
            ("selectionStart" in (r = gr) && pr(r)
              ? (r = { start: r.selectionStart, end: r.selectionEnd })
              : (r = {
                  anchorNode: (r = (
                    (r.ownerDocument && r.ownerDocument.defaultView) ||
                    window
                  ).getSelection()).anchorNode,
                  anchorOffset: r.anchorOffset,
                  focusNode: r.focusNode,
                  focusOffset: r.focusOffset,
                }),
            (yr && ur(yr, r)) ||
              ((yr = r),
              0 < (r = Yr(vr, "onSelect")).length &&
                ((n = new ct("onSelect", "select", null, n, t)),
                e.push({ event: n, listeners: r }),
                (n.target = gr))));
        }
        function kr(e, n) {
          var t = {};
          return (
            (t[e.toLowerCase()] = n.toLowerCase()),
            (t["Webkit" + e] = "webkit" + n),
            (t["Moz" + e] = "moz" + n),
            t
          );
        }
        var Sr = {
            animationend: kr("Animation", "AnimationEnd"),
            animationiteration: kr("Animation", "AnimationIteration"),
            animationstart: kr("Animation", "AnimationStart"),
            transitionend: kr("Transition", "TransitionEnd"),
          },
          Er = {},
          xr = {};
        function Cr(e) {
          if (Er[e]) return Er[e];
          if (!Sr[e]) return e;
          var n,
            t = Sr[e];
          for (n in t)
            if (t.hasOwnProperty(n) && n in xr) return (Er[e] = t[n]);
          return e;
        }
        c &&
          ((xr = document.createElement("div").style),
          "AnimationEvent" in window ||
            (delete Sr.animationend.animation,
            delete Sr.animationiteration.animation,
            delete Sr.animationstart.animation),
          "TransitionEvent" in window || delete Sr.transitionend.transition);
        var _r = Cr("animationend"),
          Nr = Cr("animationiteration"),
          Tr = Cr("animationstart"),
          Or = Cr("transitionend"),
          Ir = new Map(),
          Pr =
            "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
              " "
            );
        function Rr(e, n) {
          Ir.set(e, n), u(n, [e]);
        }
        for (var Lr = 0; Lr < Pr.length; Lr++) {
          var zr = Pr[Lr];
          Rr(zr.toLowerCase(), "on" + (zr[0].toUpperCase() + zr.slice(1)));
        }
        Rr(_r, "onAnimationEnd"),
          Rr(Nr, "onAnimationIteration"),
          Rr(Tr, "onAnimationStart"),
          Rr("dblclick", "onDoubleClick"),
          Rr("focusin", "onFocus"),
          Rr("focusout", "onBlur"),
          Rr(Or, "onTransitionEnd"),
          s("onMouseEnter", ["mouseout", "mouseover"]),
          s("onMouseLeave", ["mouseout", "mouseover"]),
          s("onPointerEnter", ["pointerout", "pointerover"]),
          s("onPointerLeave", ["pointerout", "pointerover"]),
          u(
            "onChange",
            "change click focusin focusout input keydown keyup selectionchange".split(
              " "
            )
          ),
          u(
            "onSelect",
            "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
              " "
            )
          ),
          u("onBeforeInput", [
            "compositionend",
            "keypress",
            "textInput",
            "paste",
          ]),
          u(
            "onCompositionEnd",
            "compositionend focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          u(
            "onCompositionStart",
            "compositionstart focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          u(
            "onCompositionUpdate",
            "compositionupdate focusout keydown keypress keyup mousedown".split(
              " "
            )
          );
        var Mr =
            "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
              " "
            ),
          Ar = new Set(
            "cancel close invalid load scroll toggle".split(" ").concat(Mr)
          );
        function Fr(e, n, t) {
          var r = e.type || "unknown-event";
          (e.currentTarget = t),
            (function (e, n, t, r, a, l, i, u, s) {
              if (($e.apply(this, arguments), Ae)) {
                if (!Ae) throw Error(o(198));
                var c = Fe;
                (Ae = !1), (Fe = null), De || ((De = !0), (je = c));
              }
            })(r, n, void 0, e),
            (e.currentTarget = null);
        }
        function Dr(e, n) {
          n = 0 !== (4 & n);
          for (var t = 0; t < e.length; t++) {
            var r = e[t],
              a = r.event;
            r = r.listeners;
            e: {
              var o = void 0;
              if (n)
                for (var l = r.length - 1; 0 <= l; l--) {
                  var i = r[l],
                    u = i.instance,
                    s = i.currentTarget;
                  if (((i = i.listener), u !== o && a.isPropagationStopped()))
                    break e;
                  Fr(a, i, s), (o = u);
                }
              else
                for (l = 0; l < r.length; l++) {
                  if (
                    ((u = (i = r[l]).instance),
                    (s = i.currentTarget),
                    (i = i.listener),
                    u !== o && a.isPropagationStopped())
                  )
                    break e;
                  Fr(a, i, s), (o = u);
                }
            }
          }
          if (De) throw ((e = je), (De = !1), (je = null), e);
        }
        function jr(e, n) {
          var t = n[ma];
          void 0 === t && (t = n[ma] = new Set());
          var r = e + "__bubble";
          t.has(r) || (Br(n, e, 2, !1), t.add(r));
        }
        function Ur(e, n, t) {
          var r = 0;
          n && (r |= 4), Br(t, e, r, n);
        }
        var $r = "_reactListening" + Math.random().toString(36).slice(2);
        function Hr(e) {
          if (!e[$r]) {
            (e[$r] = !0),
              l.forEach(function (n) {
                "selectionchange" !== n &&
                  (Ar.has(n) || Ur(n, !1, e), Ur(n, !0, e));
              });
            var n = 9 === e.nodeType ? e : e.ownerDocument;
            null === n || n[$r] || ((n[$r] = !0), Ur("selectionchange", !1, n));
          }
        }
        function Br(e, n, t, r) {
          switch (Xn(n)) {
            case 1:
              var a = Yn;
              break;
            case 4:
              a = Qn;
              break;
            default:
              a = Kn;
          }
          (t = a.bind(null, n, t, e)),
            (a = void 0),
            !Le ||
              ("touchstart" !== n && "touchmove" !== n && "wheel" !== n) ||
              (a = !0),
            r
              ? void 0 !== a
                ? e.addEventListener(n, t, { capture: !0, passive: a })
                : e.addEventListener(n, t, !0)
              : void 0 !== a
              ? e.addEventListener(n, t, { passive: a })
              : e.addEventListener(n, t, !1);
        }
        function Vr(e, n, t, r, a) {
          var o = r;
          if (0 === (1 & n) && 0 === (2 & n) && null !== r)
            e: for (;;) {
              if (null === r) return;
              var l = r.tag;
              if (3 === l || 4 === l) {
                var i = r.stateNode.containerInfo;
                if (i === a || (8 === i.nodeType && i.parentNode === a)) break;
                if (4 === l)
                  for (l = r.return; null !== l; ) {
                    var u = l.tag;
                    if (
                      (3 === u || 4 === u) &&
                      ((u = l.stateNode.containerInfo) === a ||
                        (8 === u.nodeType && u.parentNode === a))
                    )
                      return;
                    l = l.return;
                  }
                for (; null !== i; ) {
                  if (null === (l = ya(i))) return;
                  if (5 === (u = l.tag) || 6 === u) {
                    r = o = l;
                    continue e;
                  }
                  i = i.parentNode;
                }
              }
              r = r.return;
            }
          Pe(function () {
            var r = o,
              a = ke(t),
              l = [];
            e: {
              var i = Ir.get(e);
              if (void 0 !== i) {
                var u = ct,
                  s = e;
                switch (e) {
                  case "keypress":
                    if (0 === tt(t)) break e;
                  case "keydown":
                  case "keyup":
                    u = Nt;
                    break;
                  case "focusin":
                    (s = "focus"), (u = gt);
                    break;
                  case "focusout":
                    (s = "blur"), (u = gt);
                    break;
                  case "beforeblur":
                  case "afterblur":
                    u = gt;
                    break;
                  case "click":
                    if (2 === t.button) break e;
                  case "auxclick":
                  case "dblclick":
                  case "mousedown":
                  case "mousemove":
                  case "mouseup":
                  case "mouseout":
                  case "mouseover":
                  case "contextmenu":
                    u = ht;
                    break;
                  case "drag":
                  case "dragend":
                  case "dragenter":
                  case "dragexit":
                  case "dragleave":
                  case "dragover":
                  case "dragstart":
                  case "drop":
                    u = mt;
                    break;
                  case "touchcancel":
                  case "touchend":
                  case "touchmove":
                  case "touchstart":
                    u = Ot;
                    break;
                  case _r:
                  case Nr:
                  case Tr:
                    u = vt;
                    break;
                  case Or:
                    u = It;
                    break;
                  case "scroll":
                    u = dt;
                    break;
                  case "wheel":
                    u = Rt;
                    break;
                  case "copy":
                  case "cut":
                  case "paste":
                    u = bt;
                    break;
                  case "gotpointercapture":
                  case "lostpointercapture":
                  case "pointercancel":
                  case "pointerdown":
                  case "pointermove":
                  case "pointerout":
                  case "pointerover":
                  case "pointerup":
                    u = Tt;
                }
                var c = 0 !== (4 & n),
                  f = !c && "scroll" === e,
                  d = c ? (null !== i ? i + "Capture" : null) : i;
                c = [];
                for (var p, h = r; null !== h; ) {
                  var m = (p = h).stateNode;
                  if (
                    (5 === p.tag &&
                      null !== m &&
                      ((p = m),
                      null !== d &&
                        null != (m = Re(h, d)) &&
                        c.push(Wr(h, m, p))),
                    f)
                  )
                    break;
                  h = h.return;
                }
                0 < c.length &&
                  ((i = new u(i, s, null, t, a)),
                  l.push({ event: i, listeners: c }));
              }
            }
            if (0 === (7 & n)) {
              if (
                ((u = "mouseout" === e || "pointerout" === e),
                (!(i = "mouseover" === e || "pointerover" === e) ||
                  t === we ||
                  !(s = t.relatedTarget || t.fromElement) ||
                  (!ya(s) && !s[ha])) &&
                  (u || i) &&
                  ((i =
                    a.window === a
                      ? a
                      : (i = a.ownerDocument)
                      ? i.defaultView || i.parentWindow
                      : window),
                  u
                    ? ((u = r),
                      null !==
                        (s = (s = t.relatedTarget || t.toElement)
                          ? ya(s)
                          : null) &&
                        (s !== (f = He(s)) || (5 !== s.tag && 6 !== s.tag)) &&
                        (s = null))
                    : ((u = null), (s = r)),
                  u !== s))
              ) {
                if (
                  ((c = ht),
                  (m = "onMouseLeave"),
                  (d = "onMouseEnter"),
                  (h = "mouse"),
                  ("pointerout" !== e && "pointerover" !== e) ||
                    ((c = Tt),
                    (m = "onPointerLeave"),
                    (d = "onPointerEnter"),
                    (h = "pointer")),
                  (f = null == u ? i : wa(u)),
                  (p = null == s ? i : wa(s)),
                  ((i = new c(m, h + "leave", u, t, a)).target = f),
                  (i.relatedTarget = p),
                  (m = null),
                  ya(a) === r &&
                    (((c = new c(d, h + "enter", s, t, a)).target = p),
                    (c.relatedTarget = f),
                    (m = c)),
                  (f = m),
                  u && s)
                )
                  e: {
                    for (d = s, h = 0, p = c = u; p; p = Qr(p)) h++;
                    for (p = 0, m = d; m; m = Qr(m)) p++;
                    for (; 0 < h - p; ) (c = Qr(c)), h--;
                    for (; 0 < p - h; ) (d = Qr(d)), p--;
                    for (; h--; ) {
                      if (c === d || (null !== d && c === d.alternate)) break e;
                      (c = Qr(c)), (d = Qr(d));
                    }
                    c = null;
                  }
                else c = null;
                null !== u && Kr(l, i, u, c, !1),
                  null !== s && null !== f && Kr(l, f, s, c, !0);
              }
              if (
                "select" ===
                  (u =
                    (i = r ? wa(r) : window).nodeName &&
                    i.nodeName.toLowerCase()) ||
                ("input" === u && "file" === i.type)
              )
                var g = Gt;
              else if (Vt(i))
                if (Xt) g = lr;
                else {
                  g = ar;
                  var v = rr;
                }
              else
                (u = i.nodeName) &&
                  "input" === u.toLowerCase() &&
                  ("checkbox" === i.type || "radio" === i.type) &&
                  (g = or);
              switch (
                (g && (g = g(e, r))
                  ? Wt(l, g, t, a)
                  : (v && v(e, i, r),
                    "focusout" === e &&
                      (v = i._wrapperState) &&
                      v.controlled &&
                      "number" === i.type &&
                      ee(i, "number", i.value)),
                (v = r ? wa(r) : window),
                e)
              ) {
                case "focusin":
                  (Vt(v) || "true" === v.contentEditable) &&
                    ((gr = v), (vr = r), (yr = null));
                  break;
                case "focusout":
                  yr = vr = gr = null;
                  break;
                case "mousedown":
                  br = !0;
                  break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                  (br = !1), wr(l, t, a);
                  break;
                case "selectionchange":
                  if (mr) break;
                case "keydown":
                case "keyup":
                  wr(l, t, a);
              }
              var y;
              if (zt)
                e: {
                  switch (e) {
                    case "compositionstart":
                      var b = "onCompositionStart";
                      break e;
                    case "compositionend":
                      b = "onCompositionEnd";
                      break e;
                    case "compositionupdate":
                      b = "onCompositionUpdate";
                      break e;
                  }
                  b = void 0;
                }
              else
                Ht
                  ? Ut(e, t) && (b = "onCompositionEnd")
                  : "keydown" === e &&
                    229 === t.keyCode &&
                    (b = "onCompositionStart");
              b &&
                (Ft &&
                  "ko" !== t.locale &&
                  (Ht || "onCompositionStart" !== b
                    ? "onCompositionEnd" === b && Ht && (y = nt())
                    : ((Zn = "value" in (Jn = a) ? Jn.value : Jn.textContent),
                      (Ht = !0))),
                0 < (v = Yr(r, b)).length &&
                  ((b = new wt(b, e, null, t, a)),
                  l.push({ event: b, listeners: v }),
                  y ? (b.data = y) : null !== (y = $t(t)) && (b.data = y))),
                (y = At
                  ? (function (e, n) {
                      switch (e) {
                        case "compositionend":
                          return $t(n);
                        case "keypress":
                          return 32 !== n.which ? null : ((jt = !0), Dt);
                        case "textInput":
                          return (e = n.data) === Dt && jt ? null : e;
                        default:
                          return null;
                      }
                    })(e, t)
                  : (function (e, n) {
                      if (Ht)
                        return "compositionend" === e || (!zt && Ut(e, n))
                          ? ((e = nt()), (et = Zn = Jn = null), (Ht = !1), e)
                          : null;
                      switch (e) {
                        case "paste":
                        default:
                          return null;
                        case "keypress":
                          if (
                            !(n.ctrlKey || n.altKey || n.metaKey) ||
                            (n.ctrlKey && n.altKey)
                          ) {
                            if (n.char && 1 < n.char.length) return n.char;
                            if (n.which) return String.fromCharCode(n.which);
                          }
                          return null;
                        case "compositionend":
                          return Ft && "ko" !== n.locale ? null : n.data;
                      }
                    })(e, t)) &&
                  0 < (r = Yr(r, "onBeforeInput")).length &&
                  ((a = new wt("onBeforeInput", "beforeinput", null, t, a)),
                  l.push({ event: a, listeners: r }),
                  (a.data = y));
            }
            Dr(l, n);
          });
        }
        function Wr(e, n, t) {
          return { instance: e, listener: n, currentTarget: t };
        }
        function Yr(e, n) {
          for (var t = n + "Capture", r = []; null !== e; ) {
            var a = e,
              o = a.stateNode;
            5 === a.tag &&
              null !== o &&
              ((a = o),
              null != (o = Re(e, t)) && r.unshift(Wr(e, o, a)),
              null != (o = Re(e, n)) && r.push(Wr(e, o, a))),
              (e = e.return);
          }
          return r;
        }
        function Qr(e) {
          if (null === e) return null;
          do {
            e = e.return;
          } while (e && 5 !== e.tag);
          return e || null;
        }
        function Kr(e, n, t, r, a) {
          for (var o = n._reactName, l = []; null !== t && t !== r; ) {
            var i = t,
              u = i.alternate,
              s = i.stateNode;
            if (null !== u && u === r) break;
            5 === i.tag &&
              null !== s &&
              ((i = s),
              a
                ? null != (u = Re(t, o)) && l.unshift(Wr(t, u, i))
                : a || (null != (u = Re(t, o)) && l.push(Wr(t, u, i)))),
              (t = t.return);
          }
          0 !== l.length && e.push({ event: n, listeners: l });
        }
        var qr = /\r\n?/g,
          Gr = /\u0000|\uFFFD/g;
        function Xr(e) {
          return ("string" === typeof e ? e : "" + e)
            .replace(qr, "\n")
            .replace(Gr, "");
        }
        function Jr(e, n, t) {
          if (((n = Xr(n)), Xr(e) !== n && t)) throw Error(o(425));
        }
        function Zr() {}
        var ea = null,
          na = null;
        function ta(e, n) {
          return (
            "textarea" === e ||
            "noscript" === e ||
            "string" === typeof n.children ||
            "number" === typeof n.children ||
            ("object" === typeof n.dangerouslySetInnerHTML &&
              null !== n.dangerouslySetInnerHTML &&
              null != n.dangerouslySetInnerHTML.__html)
          );
        }
        var ra = "function" === typeof setTimeout ? setTimeout : void 0,
          aa = "function" === typeof clearTimeout ? clearTimeout : void 0,
          oa = "function" === typeof Promise ? Promise : void 0,
          la =
            "function" === typeof queueMicrotask
              ? queueMicrotask
              : "undefined" !== typeof oa
              ? function (e) {
                  return oa.resolve(null).then(e).catch(ia);
                }
              : ra;
        function ia(e) {
          setTimeout(function () {
            throw e;
          });
        }
        function ua(e, n) {
          var t = n,
            r = 0;
          do {
            var a = t.nextSibling;
            if ((e.removeChild(t), a && 8 === a.nodeType))
              if ("/$" === (t = a.data)) {
                if (0 === r) return e.removeChild(a), void Bn(n);
                r--;
              } else ("$" !== t && "$?" !== t && "$!" !== t) || r++;
            t = a;
          } while (t);
          Bn(n);
        }
        function sa(e) {
          for (; null != e; e = e.nextSibling) {
            var n = e.nodeType;
            if (1 === n || 3 === n) break;
            if (8 === n) {
              if ("$" === (n = e.data) || "$!" === n || "$?" === n) break;
              if ("/$" === n) return null;
            }
          }
          return e;
        }
        function ca(e) {
          e = e.previousSibling;
          for (var n = 0; e; ) {
            if (8 === e.nodeType) {
              var t = e.data;
              if ("$" === t || "$!" === t || "$?" === t) {
                if (0 === n) return e;
                n--;
              } else "/$" === t && n++;
            }
            e = e.previousSibling;
          }
          return null;
        }
        var fa = Math.random().toString(36).slice(2),
          da = "__reactFiber$" + fa,
          pa = "__reactProps$" + fa,
          ha = "__reactContainer$" + fa,
          ma = "__reactEvents$" + fa,
          ga = "__reactListeners$" + fa,
          va = "__reactHandles$" + fa;
        function ya(e) {
          var n = e[da];
          if (n) return n;
          for (var t = e.parentNode; t; ) {
            if ((n = t[ha] || t[da])) {
              if (
                ((t = n.alternate),
                null !== n.child || (null !== t && null !== t.child))
              )
                for (e = ca(e); null !== e; ) {
                  if ((t = e[da])) return t;
                  e = ca(e);
                }
              return n;
            }
            t = (e = t).parentNode;
          }
          return null;
        }
        function ba(e) {
          return !(e = e[da] || e[ha]) ||
            (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
            ? null
            : e;
        }
        function wa(e) {
          if (5 === e.tag || 6 === e.tag) return e.stateNode;
          throw Error(o(33));
        }
        function ka(e) {
          return e[pa] || null;
        }
        var Sa = [],
          Ea = -1;
        function xa(e) {
          return { current: e };
        }
        function Ca(e) {
          0 > Ea || ((e.current = Sa[Ea]), (Sa[Ea] = null), Ea--);
        }
        function _a(e, n) {
          Ea++, (Sa[Ea] = e.current), (e.current = n);
        }
        var Na = {},
          Ta = xa(Na),
          Oa = xa(!1),
          Ia = Na;
        function Pa(e, n) {
          var t = e.type.contextTypes;
          if (!t) return Na;
          var r = e.stateNode;
          if (r && r.__reactInternalMemoizedUnmaskedChildContext === n)
            return r.__reactInternalMemoizedMaskedChildContext;
          var a,
            o = {};
          for (a in t) o[a] = n[a];
          return (
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                n),
              (e.__reactInternalMemoizedMaskedChildContext = o)),
            o
          );
        }
        function Ra(e) {
          return null !== (e = e.childContextTypes) && void 0 !== e;
        }
        function La() {
          Ca(Oa), Ca(Ta);
        }
        function za(e, n, t) {
          if (Ta.current !== Na) throw Error(o(168));
          _a(Ta, n), _a(Oa, t);
        }
        function Ma(e, n, t) {
          var r = e.stateNode;
          if (
            ((n = n.childContextTypes), "function" !== typeof r.getChildContext)
          )
            return t;
          for (var a in (r = r.getChildContext()))
            if (!(a in n)) throw Error(o(108, B(e) || "Unknown", a));
          return F({}, t, r);
        }
        function Aa(e) {
          return (
            (e =
              ((e = e.stateNode) &&
                e.__reactInternalMemoizedMergedChildContext) ||
              Na),
            (Ia = Ta.current),
            _a(Ta, e),
            _a(Oa, Oa.current),
            !0
          );
        }
        function Fa(e, n, t) {
          var r = e.stateNode;
          if (!r) throw Error(o(169));
          t
            ? ((e = Ma(e, n, Ia)),
              (r.__reactInternalMemoizedMergedChildContext = e),
              Ca(Oa),
              Ca(Ta),
              _a(Ta, e))
            : Ca(Oa),
            _a(Oa, t);
        }
        var Da = null,
          ja = !1,
          Ua = !1;
        function $a(e) {
          null === Da ? (Da = [e]) : Da.push(e);
        }
        function Ha() {
          if (!Ua && null !== Da) {
            Ua = !0;
            var e = 0,
              n = wn;
            try {
              var t = Da;
              for (wn = 1; e < t.length; e++) {
                var r = t[e];
                do {
                  r = r(!0);
                } while (null !== r);
              }
              (Da = null), (ja = !1);
            } catch (a) {
              throw (null !== Da && (Da = Da.slice(e + 1)), Qe(Ze, Ha), a);
            } finally {
              (wn = n), (Ua = !1);
            }
          }
          return null;
        }
        var Ba = [],
          Va = 0,
          Wa = null,
          Ya = 0,
          Qa = [],
          Ka = 0,
          qa = null,
          Ga = 1,
          Xa = "";
        function Ja(e, n) {
          (Ba[Va++] = Ya), (Ba[Va++] = Wa), (Wa = e), (Ya = n);
        }
        function Za(e, n, t) {
          (Qa[Ka++] = Ga), (Qa[Ka++] = Xa), (Qa[Ka++] = qa), (qa = e);
          var r = Ga;
          e = Xa;
          var a = 32 - ln(r) - 1;
          (r &= ~(1 << a)), (t += 1);
          var o = 32 - ln(n) + a;
          if (30 < o) {
            var l = a - (a % 5);
            (o = (r & ((1 << l) - 1)).toString(32)),
              (r >>= l),
              (a -= l),
              (Ga = (1 << (32 - ln(n) + a)) | (t << a) | r),
              (Xa = o + e);
          } else (Ga = (1 << o) | (t << a) | r), (Xa = e);
        }
        function eo(e) {
          null !== e.return && (Ja(e, 1), Za(e, 1, 0));
        }
        function no(e) {
          for (; e === Wa; )
            (Wa = Ba[--Va]), (Ba[Va] = null), (Ya = Ba[--Va]), (Ba[Va] = null);
          for (; e === qa; )
            (qa = Qa[--Ka]),
              (Qa[Ka] = null),
              (Xa = Qa[--Ka]),
              (Qa[Ka] = null),
              (Ga = Qa[--Ka]),
              (Qa[Ka] = null);
        }
        var to = null,
          ro = null,
          ao = !1,
          oo = null;
        function lo(e, n) {
          var t = Ps(5, null, null, 0);
          (t.elementType = "DELETED"),
            (t.stateNode = n),
            (t.return = e),
            null === (n = e.deletions)
              ? ((e.deletions = [t]), (e.flags |= 16))
              : n.push(t);
        }
        function io(e, n) {
          switch (e.tag) {
            case 5:
              var t = e.type;
              return (
                null !==
                  (n =
                    1 !== n.nodeType ||
                    t.toLowerCase() !== n.nodeName.toLowerCase()
                      ? null
                      : n) &&
                ((e.stateNode = n), (to = e), (ro = sa(n.firstChild)), !0)
              );
            case 6:
              return (
                null !==
                  (n = "" === e.pendingProps || 3 !== n.nodeType ? null : n) &&
                ((e.stateNode = n), (to = e), (ro = null), !0)
              );
            case 13:
              return (
                null !== (n = 8 !== n.nodeType ? null : n) &&
                ((t = null !== qa ? { id: Ga, overflow: Xa } : null),
                (e.memoizedState = {
                  dehydrated: n,
                  treeContext: t,
                  retryLane: 1073741824,
                }),
                ((t = Ps(18, null, null, 0)).stateNode = n),
                (t.return = e),
                (e.child = t),
                (to = e),
                (ro = null),
                !0)
              );
            default:
              return !1;
          }
        }
        function uo(e) {
          return 0 !== (1 & e.mode) && 0 === (128 & e.flags);
        }
        function so(e) {
          if (ao) {
            var n = ro;
            if (n) {
              var t = n;
              if (!io(e, n)) {
                if (uo(e)) throw Error(o(418));
                n = sa(t.nextSibling);
                var r = to;
                n && io(e, n)
                  ? lo(r, t)
                  : ((e.flags = (-4097 & e.flags) | 2), (ao = !1), (to = e));
              }
            } else {
              if (uo(e)) throw Error(o(418));
              (e.flags = (-4097 & e.flags) | 2), (ao = !1), (to = e);
            }
          }
        }
        function co(e) {
          for (
            e = e.return;
            null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;

          )
            e = e.return;
          to = e;
        }
        function fo(e) {
          if (e !== to) return !1;
          if (!ao) return co(e), (ao = !0), !1;
          var n;
          if (
            ((n = 3 !== e.tag) &&
              !(n = 5 !== e.tag) &&
              (n =
                "head" !== (n = e.type) &&
                "body" !== n &&
                !ta(e.type, e.memoizedProps)),
            n && (n = ro))
          ) {
            if (uo(e)) throw (po(), Error(o(418)));
            for (; n; ) lo(e, n), (n = sa(n.nextSibling));
          }
          if ((co(e), 13 === e.tag)) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
              throw Error(o(317));
            e: {
              for (e = e.nextSibling, n = 0; e; ) {
                if (8 === e.nodeType) {
                  var t = e.data;
                  if ("/$" === t) {
                    if (0 === n) {
                      ro = sa(e.nextSibling);
                      break e;
                    }
                    n--;
                  } else ("$" !== t && "$!" !== t && "$?" !== t) || n++;
                }
                e = e.nextSibling;
              }
              ro = null;
            }
          } else ro = to ? sa(e.stateNode.nextSibling) : null;
          return !0;
        }
        function po() {
          for (var e = ro; e; ) e = sa(e.nextSibling);
        }
        function ho() {
          (ro = to = null), (ao = !1);
        }
        function mo(e) {
          null === oo ? (oo = [e]) : oo.push(e);
        }
        var go = w.ReactCurrentBatchConfig;
        function vo(e, n, t) {
          if (
            null !== (e = t.ref) &&
            "function" !== typeof e &&
            "object" !== typeof e
          ) {
            if (t._owner) {
              if ((t = t._owner)) {
                if (1 !== t.tag) throw Error(o(309));
                var r = t.stateNode;
              }
              if (!r) throw Error(o(147, e));
              var a = r,
                l = "" + e;
              return null !== n &&
                null !== n.ref &&
                "function" === typeof n.ref &&
                n.ref._stringRef === l
                ? n.ref
                : ((n = function (e) {
                    var n = a.refs;
                    null === e ? delete n[l] : (n[l] = e);
                  }),
                  (n._stringRef = l),
                  n);
            }
            if ("string" !== typeof e) throw Error(o(284));
            if (!t._owner) throw Error(o(290, e));
          }
          return e;
        }
        function yo(e, n) {
          throw (
            ((e = Object.prototype.toString.call(n)),
            Error(
              o(
                31,
                "[object Object]" === e
                  ? "object with keys {" + Object.keys(n).join(", ") + "}"
                  : e
              )
            ))
          );
        }
        function bo(e) {
          return (0, e._init)(e._payload);
        }
        function wo(e) {
          function n(n, t) {
            if (e) {
              var r = n.deletions;
              null === r ? ((n.deletions = [t]), (n.flags |= 16)) : r.push(t);
            }
          }
          function t(t, r) {
            if (!e) return null;
            for (; null !== r; ) n(t, r), (r = r.sibling);
            return null;
          }
          function r(e, n) {
            for (e = new Map(); null !== n; )
              null !== n.key ? e.set(n.key, n) : e.set(n.index, n),
                (n = n.sibling);
            return e;
          }
          function a(e, n) {
            return ((e = Ls(e, n)).index = 0), (e.sibling = null), e;
          }
          function l(n, t, r) {
            return (
              (n.index = r),
              e
                ? null !== (r = n.alternate)
                  ? (r = r.index) < t
                    ? ((n.flags |= 2), t)
                    : r
                  : ((n.flags |= 2), t)
                : ((n.flags |= 1048576), t)
            );
          }
          function i(n) {
            return e && null === n.alternate && (n.flags |= 2), n;
          }
          function u(e, n, t, r) {
            return null === n || 6 !== n.tag
              ? (((n = Fs(t, e.mode, r)).return = e), n)
              : (((n = a(n, t)).return = e), n);
          }
          function s(e, n, t, r) {
            var o = t.type;
            return o === E
              ? f(e, n, t.props.children, r, t.key)
              : null !== n &&
                (n.elementType === o ||
                  ("object" === typeof o &&
                    null !== o &&
                    o.$$typeof === R &&
                    bo(o) === n.type))
              ? (((r = a(n, t.props)).ref = vo(e, n, t)), (r.return = e), r)
              : (((r = zs(t.type, t.key, t.props, null, e.mode, r)).ref = vo(
                  e,
                  n,
                  t
                )),
                (r.return = e),
                r);
          }
          function c(e, n, t, r) {
            return null === n ||
              4 !== n.tag ||
              n.stateNode.containerInfo !== t.containerInfo ||
              n.stateNode.implementation !== t.implementation
              ? (((n = Ds(t, e.mode, r)).return = e), n)
              : (((n = a(n, t.children || [])).return = e), n);
          }
          function f(e, n, t, r, o) {
            return null === n || 7 !== n.tag
              ? (((n = Ms(t, e.mode, r, o)).return = e), n)
              : (((n = a(n, t)).return = e), n);
          }
          function d(e, n, t) {
            if (("string" === typeof n && "" !== n) || "number" === typeof n)
              return ((n = Fs("" + n, e.mode, t)).return = e), n;
            if ("object" === typeof n && null !== n) {
              switch (n.$$typeof) {
                case k:
                  return (
                    ((t = zs(n.type, n.key, n.props, null, e.mode, t)).ref = vo(
                      e,
                      null,
                      n
                    )),
                    (t.return = e),
                    t
                  );
                case S:
                  return ((n = Ds(n, e.mode, t)).return = e), n;
                case R:
                  return d(e, (0, n._init)(n._payload), t);
              }
              if (ne(n) || M(n))
                return ((n = Ms(n, e.mode, t, null)).return = e), n;
              yo(e, n);
            }
            return null;
          }
          function p(e, n, t, r) {
            var a = null !== n ? n.key : null;
            if (("string" === typeof t && "" !== t) || "number" === typeof t)
              return null !== a ? null : u(e, n, "" + t, r);
            if ("object" === typeof t && null !== t) {
              switch (t.$$typeof) {
                case k:
                  return t.key === a ? s(e, n, t, r) : null;
                case S:
                  return t.key === a ? c(e, n, t, r) : null;
                case R:
                  return p(e, n, (a = t._init)(t._payload), r);
              }
              if (ne(t) || M(t)) return null !== a ? null : f(e, n, t, r, null);
              yo(e, t);
            }
            return null;
          }
          function h(e, n, t, r, a) {
            if (("string" === typeof r && "" !== r) || "number" === typeof r)
              return u(n, (e = e.get(t) || null), "" + r, a);
            if ("object" === typeof r && null !== r) {
              switch (r.$$typeof) {
                case k:
                  return s(
                    n,
                    (e = e.get(null === r.key ? t : r.key) || null),
                    r,
                    a
                  );
                case S:
                  return c(
                    n,
                    (e = e.get(null === r.key ? t : r.key) || null),
                    r,
                    a
                  );
                case R:
                  return h(e, n, t, (0, r._init)(r._payload), a);
              }
              if (ne(r) || M(r))
                return f(n, (e = e.get(t) || null), r, a, null);
              yo(n, r);
            }
            return null;
          }
          function m(a, o, i, u) {
            for (
              var s = null, c = null, f = o, m = (o = 0), g = null;
              null !== f && m < i.length;
              m++
            ) {
              f.index > m ? ((g = f), (f = null)) : (g = f.sibling);
              var v = p(a, f, i[m], u);
              if (null === v) {
                null === f && (f = g);
                break;
              }
              e && f && null === v.alternate && n(a, f),
                (o = l(v, o, m)),
                null === c ? (s = v) : (c.sibling = v),
                (c = v),
                (f = g);
            }
            if (m === i.length) return t(a, f), ao && Ja(a, m), s;
            if (null === f) {
              for (; m < i.length; m++)
                null !== (f = d(a, i[m], u)) &&
                  ((o = l(f, o, m)),
                  null === c ? (s = f) : (c.sibling = f),
                  (c = f));
              return ao && Ja(a, m), s;
            }
            for (f = r(a, f); m < i.length; m++)
              null !== (g = h(f, a, m, i[m], u)) &&
                (e &&
                  null !== g.alternate &&
                  f.delete(null === g.key ? m : g.key),
                (o = l(g, o, m)),
                null === c ? (s = g) : (c.sibling = g),
                (c = g));
            return (
              e &&
                f.forEach(function (e) {
                  return n(a, e);
                }),
              ao && Ja(a, m),
              s
            );
          }
          function g(a, i, u, s) {
            var c = M(u);
            if ("function" !== typeof c) throw Error(o(150));
            if (null == (u = c.call(u))) throw Error(o(151));
            for (
              var f = (c = null), m = i, g = (i = 0), v = null, y = u.next();
              null !== m && !y.done;
              g++, y = u.next()
            ) {
              m.index > g ? ((v = m), (m = null)) : (v = m.sibling);
              var b = p(a, m, y.value, s);
              if (null === b) {
                null === m && (m = v);
                break;
              }
              e && m && null === b.alternate && n(a, m),
                (i = l(b, i, g)),
                null === f ? (c = b) : (f.sibling = b),
                (f = b),
                (m = v);
            }
            if (y.done) return t(a, m), ao && Ja(a, g), c;
            if (null === m) {
              for (; !y.done; g++, y = u.next())
                null !== (y = d(a, y.value, s)) &&
                  ((i = l(y, i, g)),
                  null === f ? (c = y) : (f.sibling = y),
                  (f = y));
              return ao && Ja(a, g), c;
            }
            for (m = r(a, m); !y.done; g++, y = u.next())
              null !== (y = h(m, a, g, y.value, s)) &&
                (e &&
                  null !== y.alternate &&
                  m.delete(null === y.key ? g : y.key),
                (i = l(y, i, g)),
                null === f ? (c = y) : (f.sibling = y),
                (f = y));
            return (
              e &&
                m.forEach(function (e) {
                  return n(a, e);
                }),
              ao && Ja(a, g),
              c
            );
          }
          return function e(r, o, l, u) {
            if (
              ("object" === typeof l &&
                null !== l &&
                l.type === E &&
                null === l.key &&
                (l = l.props.children),
              "object" === typeof l && null !== l)
            ) {
              switch (l.$$typeof) {
                case k:
                  e: {
                    for (var s = l.key, c = o; null !== c; ) {
                      if (c.key === s) {
                        if ((s = l.type) === E) {
                          if (7 === c.tag) {
                            t(r, c.sibling),
                              ((o = a(c, l.props.children)).return = r),
                              (r = o);
                            break e;
                          }
                        } else if (
                          c.elementType === s ||
                          ("object" === typeof s &&
                            null !== s &&
                            s.$$typeof === R &&
                            bo(s) === c.type)
                        ) {
                          t(r, c.sibling),
                            ((o = a(c, l.props)).ref = vo(r, c, l)),
                            (o.return = r),
                            (r = o);
                          break e;
                        }
                        t(r, c);
                        break;
                      }
                      n(r, c), (c = c.sibling);
                    }
                    l.type === E
                      ? (((o = Ms(l.props.children, r.mode, u, l.key)).return =
                          r),
                        (r = o))
                      : (((u = zs(
                          l.type,
                          l.key,
                          l.props,
                          null,
                          r.mode,
                          u
                        )).ref = vo(r, o, l)),
                        (u.return = r),
                        (r = u));
                  }
                  return i(r);
                case S:
                  e: {
                    for (c = l.key; null !== o; ) {
                      if (o.key === c) {
                        if (
                          4 === o.tag &&
                          o.stateNode.containerInfo === l.containerInfo &&
                          o.stateNode.implementation === l.implementation
                        ) {
                          t(r, o.sibling),
                            ((o = a(o, l.children || [])).return = r),
                            (r = o);
                          break e;
                        }
                        t(r, o);
                        break;
                      }
                      n(r, o), (o = o.sibling);
                    }
                    ((o = Ds(l, r.mode, u)).return = r), (r = o);
                  }
                  return i(r);
                case R:
                  return e(r, o, (c = l._init)(l._payload), u);
              }
              if (ne(l)) return m(r, o, l, u);
              if (M(l)) return g(r, o, l, u);
              yo(r, l);
            }
            return ("string" === typeof l && "" !== l) || "number" === typeof l
              ? ((l = "" + l),
                null !== o && 6 === o.tag
                  ? (t(r, o.sibling), ((o = a(o, l)).return = r), (r = o))
                  : (t(r, o), ((o = Fs(l, r.mode, u)).return = r), (r = o)),
                i(r))
              : t(r, o);
          };
        }
        var ko = wo(!0),
          So = wo(!1),
          Eo = xa(null),
          xo = null,
          Co = null,
          _o = null;
        function No() {
          _o = Co = xo = null;
        }
        function To(e) {
          var n = Eo.current;
          Ca(Eo), (e._currentValue = n);
        }
        function Oo(e, n, t) {
          for (; null !== e; ) {
            var r = e.alternate;
            if (
              ((e.childLanes & n) !== n
                ? ((e.childLanes |= n), null !== r && (r.childLanes |= n))
                : null !== r && (r.childLanes & n) !== n && (r.childLanes |= n),
              e === t)
            )
              break;
            e = e.return;
          }
        }
        function Io(e, n) {
          (xo = e),
            (_o = Co = null),
            null !== (e = e.dependencies) &&
              null !== e.firstContext &&
              (0 !== (e.lanes & n) && (bi = !0), (e.firstContext = null));
        }
        function Po(e) {
          var n = e._currentValue;
          if (_o !== e)
            if (
              ((e = { context: e, memoizedValue: n, next: null }), null === Co)
            ) {
              if (null === xo) throw Error(o(308));
              (Co = e), (xo.dependencies = { lanes: 0, firstContext: e });
            } else Co = Co.next = e;
          return n;
        }
        var Ro = null;
        function Lo(e) {
          null === Ro ? (Ro = [e]) : Ro.push(e);
        }
        function zo(e, n, t, r) {
          var a = n.interleaved;
          return (
            null === a
              ? ((t.next = t), Lo(n))
              : ((t.next = a.next), (a.next = t)),
            (n.interleaved = t),
            Mo(e, r)
          );
        }
        function Mo(e, n) {
          e.lanes |= n;
          var t = e.alternate;
          for (null !== t && (t.lanes |= n), t = e, e = e.return; null !== e; )
            (e.childLanes |= n),
              null !== (t = e.alternate) && (t.childLanes |= n),
              (t = e),
              (e = e.return);
          return 3 === t.tag ? t.stateNode : null;
        }
        var Ao = !1;
        function Fo(e) {
          e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null, interleaved: null, lanes: 0 },
            effects: null,
          };
        }
        function Do(e, n) {
          (e = e.updateQueue),
            n.updateQueue === e &&
              (n.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                effects: e.effects,
              });
        }
        function jo(e, n) {
          return {
            eventTime: e,
            lane: n,
            tag: 0,
            payload: null,
            callback: null,
            next: null,
          };
        }
        function Uo(e, n, t) {
          var r = e.updateQueue;
          if (null === r) return null;
          if (((r = r.shared), 0 !== (2 & Tu))) {
            var a = r.pending;
            return (
              null === a ? (n.next = n) : ((n.next = a.next), (a.next = n)),
              (r.pending = n),
              Mo(e, t)
            );
          }
          return (
            null === (a = r.interleaved)
              ? ((n.next = n), Lo(r))
              : ((n.next = a.next), (a.next = n)),
            (r.interleaved = n),
            Mo(e, t)
          );
        }
        function $o(e, n, t) {
          if (
            null !== (n = n.updateQueue) &&
            ((n = n.shared), 0 !== (4194240 & t))
          ) {
            var r = n.lanes;
            (t |= r &= e.pendingLanes), (n.lanes = t), bn(e, t);
          }
        }
        function Ho(e, n) {
          var t = e.updateQueue,
            r = e.alternate;
          if (null !== r && t === (r = r.updateQueue)) {
            var a = null,
              o = null;
            if (null !== (t = t.firstBaseUpdate)) {
              do {
                var l = {
                  eventTime: t.eventTime,
                  lane: t.lane,
                  tag: t.tag,
                  payload: t.payload,
                  callback: t.callback,
                  next: null,
                };
                null === o ? (a = o = l) : (o = o.next = l), (t = t.next);
              } while (null !== t);
              null === o ? (a = o = n) : (o = o.next = n);
            } else a = o = n;
            return (
              (t = {
                baseState: r.baseState,
                firstBaseUpdate: a,
                lastBaseUpdate: o,
                shared: r.shared,
                effects: r.effects,
              }),
              void (e.updateQueue = t)
            );
          }
          null === (e = t.lastBaseUpdate)
            ? (t.firstBaseUpdate = n)
            : (e.next = n),
            (t.lastBaseUpdate = n);
        }
        function Bo(e, n, t, r) {
          var a = e.updateQueue;
          Ao = !1;
          var o = a.firstBaseUpdate,
            l = a.lastBaseUpdate,
            i = a.shared.pending;
          if (null !== i) {
            a.shared.pending = null;
            var u = i,
              s = u.next;
            (u.next = null), null === l ? (o = s) : (l.next = s), (l = u);
            var c = e.alternate;
            null !== c &&
              (i = (c = c.updateQueue).lastBaseUpdate) !== l &&
              (null === i ? (c.firstBaseUpdate = s) : (i.next = s),
              (c.lastBaseUpdate = u));
          }
          if (null !== o) {
            var f = a.baseState;
            for (l = 0, c = s = u = null, i = o; ; ) {
              var d = i.lane,
                p = i.eventTime;
              if ((r & d) === d) {
                null !== c &&
                  (c = c.next =
                    {
                      eventTime: p,
                      lane: 0,
                      tag: i.tag,
                      payload: i.payload,
                      callback: i.callback,
                      next: null,
                    });
                e: {
                  var h = e,
                    m = i;
                  switch (((d = n), (p = t), m.tag)) {
                    case 1:
                      if ("function" === typeof (h = m.payload)) {
                        f = h.call(p, f, d);
                        break e;
                      }
                      f = h;
                      break e;
                    case 3:
                      h.flags = (-65537 & h.flags) | 128;
                    case 0:
                      if (
                        null ===
                          (d =
                            "function" === typeof (h = m.payload)
                              ? h.call(p, f, d)
                              : h) ||
                        void 0 === d
                      )
                        break e;
                      f = F({}, f, d);
                      break e;
                    case 2:
                      Ao = !0;
                  }
                }
                null !== i.callback &&
                  0 !== i.lane &&
                  ((e.flags |= 64),
                  null === (d = a.effects) ? (a.effects = [i]) : d.push(i));
              } else
                (p = {
                  eventTime: p,
                  lane: d,
                  tag: i.tag,
                  payload: i.payload,
                  callback: i.callback,
                  next: null,
                }),
                  null === c ? ((s = c = p), (u = f)) : (c = c.next = p),
                  (l |= d);
              if (null === (i = i.next)) {
                if (null === (i = a.shared.pending)) break;
                (i = (d = i).next),
                  (d.next = null),
                  (a.lastBaseUpdate = d),
                  (a.shared.pending = null);
              }
            }
            if (
              (null === c && (u = f),
              (a.baseState = u),
              (a.firstBaseUpdate = s),
              (a.lastBaseUpdate = c),
              null !== (n = a.shared.interleaved))
            ) {
              a = n;
              do {
                (l |= a.lane), (a = a.next);
              } while (a !== n);
            } else null === o && (a.shared.lanes = 0);
            (Au |= l), (e.lanes = l), (e.memoizedState = f);
          }
        }
        function Vo(e, n, t) {
          if (((e = n.effects), (n.effects = null), null !== e))
            for (n = 0; n < e.length; n++) {
              var r = e[n],
                a = r.callback;
              if (null !== a) {
                if (((r.callback = null), (r = t), "function" !== typeof a))
                  throw Error(o(191, a));
                a.call(r);
              }
            }
        }
        var Wo = {},
          Yo = xa(Wo),
          Qo = xa(Wo),
          Ko = xa(Wo);
        function qo(e) {
          if (e === Wo) throw Error(o(174));
          return e;
        }
        function Go(e, n) {
          switch ((_a(Ko, n), _a(Qo, e), _a(Yo, Wo), (e = n.nodeType))) {
            case 9:
            case 11:
              n = (n = n.documentElement) ? n.namespaceURI : ue(null, "");
              break;
            default:
              n = ue(
                (n = (e = 8 === e ? n.parentNode : n).namespaceURI || null),
                (e = e.tagName)
              );
          }
          Ca(Yo), _a(Yo, n);
        }
        function Xo() {
          Ca(Yo), Ca(Qo), Ca(Ko);
        }
        function Jo(e) {
          qo(Ko.current);
          var n = qo(Yo.current),
            t = ue(n, e.type);
          n !== t && (_a(Qo, e), _a(Yo, t));
        }
        function Zo(e) {
          Qo.current === e && (Ca(Yo), Ca(Qo));
        }
        var el = xa(0);
        function nl(e) {
          for (var n = e; null !== n; ) {
            if (13 === n.tag) {
              var t = n.memoizedState;
              if (
                null !== t &&
                (null === (t = t.dehydrated) ||
                  "$?" === t.data ||
                  "$!" === t.data)
              )
                return n;
            } else if (19 === n.tag && void 0 !== n.memoizedProps.revealOrder) {
              if (0 !== (128 & n.flags)) return n;
            } else if (null !== n.child) {
              (n.child.return = n), (n = n.child);
              continue;
            }
            if (n === e) break;
            for (; null === n.sibling; ) {
              if (null === n.return || n.return === e) return null;
              n = n.return;
            }
            (n.sibling.return = n.return), (n = n.sibling);
          }
          return null;
        }
        var tl = [];
        function rl() {
          for (var e = 0; e < tl.length; e++)
            tl[e]._workInProgressVersionPrimary = null;
          tl.length = 0;
        }
        var al = w.ReactCurrentDispatcher,
          ol = w.ReactCurrentBatchConfig,
          ll = 0,
          il = null,
          ul = null,
          sl = null,
          cl = !1,
          fl = !1,
          dl = 0,
          pl = 0;
        function hl() {
          throw Error(o(321));
        }
        function ml(e, n) {
          if (null === n) return !1;
          for (var t = 0; t < n.length && t < e.length; t++)
            if (!ir(e[t], n[t])) return !1;
          return !0;
        }
        function gl(e, n, t, r, a, l) {
          if (
            ((ll = l),
            (il = n),
            (n.memoizedState = null),
            (n.updateQueue = null),
            (n.lanes = 0),
            (al.current = null === e || null === e.memoizedState ? Zl : ei),
            (e = t(r, a)),
            fl)
          ) {
            l = 0;
            do {
              if (((fl = !1), (dl = 0), 25 <= l)) throw Error(o(301));
              (l += 1),
                (sl = ul = null),
                (n.updateQueue = null),
                (al.current = ni),
                (e = t(r, a));
            } while (fl);
          }
          if (
            ((al.current = Jl),
            (n = null !== ul && null !== ul.next),
            (ll = 0),
            (sl = ul = il = null),
            (cl = !1),
            n)
          )
            throw Error(o(300));
          return e;
        }
        function vl() {
          var e = 0 !== dl;
          return (dl = 0), e;
        }
        function yl() {
          var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
          };
          return (
            null === sl ? (il.memoizedState = sl = e) : (sl = sl.next = e), sl
          );
        }
        function bl() {
          if (null === ul) {
            var e = il.alternate;
            e = null !== e ? e.memoizedState : null;
          } else e = ul.next;
          var n = null === sl ? il.memoizedState : sl.next;
          if (null !== n) (sl = n), (ul = e);
          else {
            if (null === e) throw Error(o(310));
            (e = {
              memoizedState: (ul = e).memoizedState,
              baseState: ul.baseState,
              baseQueue: ul.baseQueue,
              queue: ul.queue,
              next: null,
            }),
              null === sl ? (il.memoizedState = sl = e) : (sl = sl.next = e);
          }
          return sl;
        }
        function wl(e, n) {
          return "function" === typeof n ? n(e) : n;
        }
        function kl(e) {
          var n = bl(),
            t = n.queue;
          if (null === t) throw Error(o(311));
          t.lastRenderedReducer = e;
          var r = ul,
            a = r.baseQueue,
            l = t.pending;
          if (null !== l) {
            if (null !== a) {
              var i = a.next;
              (a.next = l.next), (l.next = i);
            }
            (r.baseQueue = a = l), (t.pending = null);
          }
          if (null !== a) {
            (l = a.next), (r = r.baseState);
            var u = (i = null),
              s = null,
              c = l;
            do {
              var f = c.lane;
              if ((ll & f) === f)
                null !== s &&
                  (s = s.next =
                    {
                      lane: 0,
                      action: c.action,
                      hasEagerState: c.hasEagerState,
                      eagerState: c.eagerState,
                      next: null,
                    }),
                  (r = c.hasEagerState ? c.eagerState : e(r, c.action));
              else {
                var d = {
                  lane: f,
                  action: c.action,
                  hasEagerState: c.hasEagerState,
                  eagerState: c.eagerState,
                  next: null,
                };
                null === s ? ((u = s = d), (i = r)) : (s = s.next = d),
                  (il.lanes |= f),
                  (Au |= f);
              }
              c = c.next;
            } while (null !== c && c !== l);
            null === s ? (i = r) : (s.next = u),
              ir(r, n.memoizedState) || (bi = !0),
              (n.memoizedState = r),
              (n.baseState = i),
              (n.baseQueue = s),
              (t.lastRenderedState = r);
          }
          if (null !== (e = t.interleaved)) {
            a = e;
            do {
              (l = a.lane), (il.lanes |= l), (Au |= l), (a = a.next);
            } while (a !== e);
          } else null === a && (t.lanes = 0);
          return [n.memoizedState, t.dispatch];
        }
        function Sl(e) {
          var n = bl(),
            t = n.queue;
          if (null === t) throw Error(o(311));
          t.lastRenderedReducer = e;
          var r = t.dispatch,
            a = t.pending,
            l = n.memoizedState;
          if (null !== a) {
            t.pending = null;
            var i = (a = a.next);
            do {
              (l = e(l, i.action)), (i = i.next);
            } while (i !== a);
            ir(l, n.memoizedState) || (bi = !0),
              (n.memoizedState = l),
              null === n.baseQueue && (n.baseState = l),
              (t.lastRenderedState = l);
          }
          return [l, r];
        }
        function El() {}
        function xl(e, n) {
          var t = il,
            r = bl(),
            a = n(),
            l = !ir(r.memoizedState, a);
          if (
            (l && ((r.memoizedState = a), (bi = !0)),
            (r = r.queue),
            Al(Nl.bind(null, t, r, e), [e]),
            r.getSnapshot !== n ||
              l ||
              (null !== sl && 1 & sl.memoizedState.tag))
          ) {
            if (
              ((t.flags |= 2048),
              Pl(9, _l.bind(null, t, r, a, n), void 0, null),
              null === Ou)
            )
              throw Error(o(349));
            0 !== (30 & ll) || Cl(t, n, a);
          }
          return a;
        }
        function Cl(e, n, t) {
          (e.flags |= 16384),
            (e = { getSnapshot: n, value: t }),
            null === (n = il.updateQueue)
              ? ((n = { lastEffect: null, stores: null }),
                (il.updateQueue = n),
                (n.stores = [e]))
              : null === (t = n.stores)
              ? (n.stores = [e])
              : t.push(e);
        }
        function _l(e, n, t, r) {
          (n.value = t), (n.getSnapshot = r), Tl(n) && Ol(e);
        }
        function Nl(e, n, t) {
          return t(function () {
            Tl(n) && Ol(e);
          });
        }
        function Tl(e) {
          var n = e.getSnapshot;
          e = e.value;
          try {
            var t = n();
            return !ir(e, t);
          } catch (r) {
            return !0;
          }
        }
        function Ol(e) {
          var n = Mo(e, 1);
          null !== n && ts(n, e, 1, -1);
        }
        function Il(e) {
          var n = yl();
          return (
            "function" === typeof e && (e = e()),
            (n.memoizedState = n.baseState = e),
            (e = {
              pending: null,
              interleaved: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: wl,
              lastRenderedState: e,
            }),
            (n.queue = e),
            (e = e.dispatch = Kl.bind(null, il, e)),
            [n.memoizedState, e]
          );
        }
        function Pl(e, n, t, r) {
          return (
            (e = { tag: e, create: n, destroy: t, deps: r, next: null }),
            null === (n = il.updateQueue)
              ? ((n = { lastEffect: null, stores: null }),
                (il.updateQueue = n),
                (n.lastEffect = e.next = e))
              : null === (t = n.lastEffect)
              ? (n.lastEffect = e.next = e)
              : ((r = t.next), (t.next = e), (e.next = r), (n.lastEffect = e)),
            e
          );
        }
        function Rl() {
          return bl().memoizedState;
        }
        function Ll(e, n, t, r) {
          var a = yl();
          (il.flags |= e),
            (a.memoizedState = Pl(1 | n, t, void 0, void 0 === r ? null : r));
        }
        function zl(e, n, t, r) {
          var a = bl();
          r = void 0 === r ? null : r;
          var o = void 0;
          if (null !== ul) {
            var l = ul.memoizedState;
            if (((o = l.destroy), null !== r && ml(r, l.deps)))
              return void (a.memoizedState = Pl(n, t, o, r));
          }
          (il.flags |= e), (a.memoizedState = Pl(1 | n, t, o, r));
        }
        function Ml(e, n) {
          return Ll(8390656, 8, e, n);
        }
        function Al(e, n) {
          return zl(2048, 8, e, n);
        }
        function Fl(e, n) {
          return zl(4, 2, e, n);
        }
        function Dl(e, n) {
          return zl(4, 4, e, n);
        }
        function jl(e, n) {
          return "function" === typeof n
            ? ((e = e()),
              n(e),
              function () {
                n(null);
              })
            : null !== n && void 0 !== n
            ? ((e = e()),
              (n.current = e),
              function () {
                n.current = null;
              })
            : void 0;
        }
        function Ul(e, n, t) {
          return (
            (t = null !== t && void 0 !== t ? t.concat([e]) : null),
            zl(4, 4, jl.bind(null, n, e), t)
          );
        }
        function $l() {}
        function Hl(e, n) {
          var t = bl();
          n = void 0 === n ? null : n;
          var r = t.memoizedState;
          return null !== r && null !== n && ml(n, r[1])
            ? r[0]
            : ((t.memoizedState = [e, n]), e);
        }
        function Bl(e, n) {
          var t = bl();
          n = void 0 === n ? null : n;
          var r = t.memoizedState;
          return null !== r && null !== n && ml(n, r[1])
            ? r[0]
            : ((e = e()), (t.memoizedState = [e, n]), e);
        }
        function Vl(e, n, t) {
          return 0 === (21 & ll)
            ? (e.baseState && ((e.baseState = !1), (bi = !0)),
              (e.memoizedState = t))
            : (ir(t, n) ||
                ((t = gn()), (il.lanes |= t), (Au |= t), (e.baseState = !0)),
              n);
        }
        function Wl(e, n) {
          var t = wn;
          (wn = 0 !== t && 4 > t ? t : 4), e(!0);
          var r = ol.transition;
          ol.transition = {};
          try {
            e(!1), n();
          } finally {
            (wn = t), (ol.transition = r);
          }
        }
        function Yl() {
          return bl().memoizedState;
        }
        function Ql(e, n, t) {
          var r = ns(e);
          if (
            ((t = {
              lane: r,
              action: t,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            }),
            ql(e))
          )
            Gl(n, t);
          else if (null !== (t = zo(e, n, t, r))) {
            ts(t, e, r, es()), Xl(t, n, r);
          }
        }
        function Kl(e, n, t) {
          var r = ns(e),
            a = {
              lane: r,
              action: t,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            };
          if (ql(e)) Gl(n, a);
          else {
            var o = e.alternate;
            if (
              0 === e.lanes &&
              (null === o || 0 === o.lanes) &&
              null !== (o = n.lastRenderedReducer)
            )
              try {
                var l = n.lastRenderedState,
                  i = o(l, t);
                if (((a.hasEagerState = !0), (a.eagerState = i), ir(i, l))) {
                  var u = n.interleaved;
                  return (
                    null === u
                      ? ((a.next = a), Lo(n))
                      : ((a.next = u.next), (u.next = a)),
                    void (n.interleaved = a)
                  );
                }
              } catch (s) {}
            null !== (t = zo(e, n, a, r)) &&
              (ts(t, e, r, (a = es())), Xl(t, n, r));
          }
        }
        function ql(e) {
          var n = e.alternate;
          return e === il || (null !== n && n === il);
        }
        function Gl(e, n) {
          fl = cl = !0;
          var t = e.pending;
          null === t ? (n.next = n) : ((n.next = t.next), (t.next = n)),
            (e.pending = n);
        }
        function Xl(e, n, t) {
          if (0 !== (4194240 & t)) {
            var r = n.lanes;
            (t |= r &= e.pendingLanes), (n.lanes = t), bn(e, t);
          }
        }
        var Jl = {
            readContext: Po,
            useCallback: hl,
            useContext: hl,
            useEffect: hl,
            useImperativeHandle: hl,
            useInsertionEffect: hl,
            useLayoutEffect: hl,
            useMemo: hl,
            useReducer: hl,
            useRef: hl,
            useState: hl,
            useDebugValue: hl,
            useDeferredValue: hl,
            useTransition: hl,
            useMutableSource: hl,
            useSyncExternalStore: hl,
            useId: hl,
            unstable_isNewReconciler: !1,
          },
          Zl = {
            readContext: Po,
            useCallback: function (e, n) {
              return (yl().memoizedState = [e, void 0 === n ? null : n]), e;
            },
            useContext: Po,
            useEffect: Ml,
            useImperativeHandle: function (e, n, t) {
              return (
                (t = null !== t && void 0 !== t ? t.concat([e]) : null),
                Ll(4194308, 4, jl.bind(null, n, e), t)
              );
            },
            useLayoutEffect: function (e, n) {
              return Ll(4194308, 4, e, n);
            },
            useInsertionEffect: function (e, n) {
              return Ll(4, 2, e, n);
            },
            useMemo: function (e, n) {
              var t = yl();
              return (
                (n = void 0 === n ? null : n),
                (e = e()),
                (t.memoizedState = [e, n]),
                e
              );
            },
            useReducer: function (e, n, t) {
              var r = yl();
              return (
                (n = void 0 !== t ? t(n) : n),
                (r.memoizedState = r.baseState = n),
                (e = {
                  pending: null,
                  interleaved: null,
                  lanes: 0,
                  dispatch: null,
                  lastRenderedReducer: e,
                  lastRenderedState: n,
                }),
                (r.queue = e),
                (e = e.dispatch = Ql.bind(null, il, e)),
                [r.memoizedState, e]
              );
            },
            useRef: function (e) {
              return (e = { current: e }), (yl().memoizedState = e);
            },
            useState: Il,
            useDebugValue: $l,
            useDeferredValue: function (e) {
              return (yl().memoizedState = e);
            },
            useTransition: function () {
              var e = Il(!1),
                n = e[0];
              return (
                (e = Wl.bind(null, e[1])), (yl().memoizedState = e), [n, e]
              );
            },
            useMutableSource: function () {},
            useSyncExternalStore: function (e, n, t) {
              var r = il,
                a = yl();
              if (ao) {
                if (void 0 === t) throw Error(o(407));
                t = t();
              } else {
                if (((t = n()), null === Ou)) throw Error(o(349));
                0 !== (30 & ll) || Cl(r, n, t);
              }
              a.memoizedState = t;
              var l = { value: t, getSnapshot: n };
              return (
                (a.queue = l),
                Ml(Nl.bind(null, r, l, e), [e]),
                (r.flags |= 2048),
                Pl(9, _l.bind(null, r, l, t, n), void 0, null),
                t
              );
            },
            useId: function () {
              var e = yl(),
                n = Ou.identifierPrefix;
              if (ao) {
                var t = Xa;
                (n =
                  ":" +
                  n +
                  "R" +
                  (t = (Ga & ~(1 << (32 - ln(Ga) - 1))).toString(32) + t)),
                  0 < (t = dl++) && (n += "H" + t.toString(32)),
                  (n += ":");
              } else n = ":" + n + "r" + (t = pl++).toString(32) + ":";
              return (e.memoizedState = n);
            },
            unstable_isNewReconciler: !1,
          },
          ei = {
            readContext: Po,
            useCallback: Hl,
            useContext: Po,
            useEffect: Al,
            useImperativeHandle: Ul,
            useInsertionEffect: Fl,
            useLayoutEffect: Dl,
            useMemo: Bl,
            useReducer: kl,
            useRef: Rl,
            useState: function () {
              return kl(wl);
            },
            useDebugValue: $l,
            useDeferredValue: function (e) {
              return Vl(bl(), ul.memoizedState, e);
            },
            useTransition: function () {
              return [kl(wl)[0], bl().memoizedState];
            },
            useMutableSource: El,
            useSyncExternalStore: xl,
            useId: Yl,
            unstable_isNewReconciler: !1,
          },
          ni = {
            readContext: Po,
            useCallback: Hl,
            useContext: Po,
            useEffect: Al,
            useImperativeHandle: Ul,
            useInsertionEffect: Fl,
            useLayoutEffect: Dl,
            useMemo: Bl,
            useReducer: Sl,
            useRef: Rl,
            useState: function () {
              return Sl(wl);
            },
            useDebugValue: $l,
            useDeferredValue: function (e) {
              var n = bl();
              return null === ul
                ? (n.memoizedState = e)
                : Vl(n, ul.memoizedState, e);
            },
            useTransition: function () {
              return [Sl(wl)[0], bl().memoizedState];
            },
            useMutableSource: El,
            useSyncExternalStore: xl,
            useId: Yl,
            unstable_isNewReconciler: !1,
          };
        function ti(e, n) {
          if (e && e.defaultProps) {
            for (var t in ((n = F({}, n)), (e = e.defaultProps)))
              void 0 === n[t] && (n[t] = e[t]);
            return n;
          }
          return n;
        }
        function ri(e, n, t, r) {
          (t =
            null === (t = t(r, (n = e.memoizedState))) || void 0 === t
              ? n
              : F({}, n, t)),
            (e.memoizedState = t),
            0 === e.lanes && (e.updateQueue.baseState = t);
        }
        var ai = {
          isMounted: function (e) {
            return !!(e = e._reactInternals) && He(e) === e;
          },
          enqueueSetState: function (e, n, t) {
            e = e._reactInternals;
            var r = es(),
              a = ns(e),
              o = jo(r, a);
            (o.payload = n),
              void 0 !== t && null !== t && (o.callback = t),
              null !== (n = Uo(e, o, a)) && (ts(n, e, a, r), $o(n, e, a));
          },
          enqueueReplaceState: function (e, n, t) {
            e = e._reactInternals;
            var r = es(),
              a = ns(e),
              o = jo(r, a);
            (o.tag = 1),
              (o.payload = n),
              void 0 !== t && null !== t && (o.callback = t),
              null !== (n = Uo(e, o, a)) && (ts(n, e, a, r), $o(n, e, a));
          },
          enqueueForceUpdate: function (e, n) {
            e = e._reactInternals;
            var t = es(),
              r = ns(e),
              a = jo(t, r);
            (a.tag = 2),
              void 0 !== n && null !== n && (a.callback = n),
              null !== (n = Uo(e, a, r)) && (ts(n, e, r, t), $o(n, e, r));
          },
        };
        function oi(e, n, t, r, a, o, l) {
          return "function" === typeof (e = e.stateNode).shouldComponentUpdate
            ? e.shouldComponentUpdate(r, o, l)
            : !n.prototype ||
                !n.prototype.isPureReactComponent ||
                !ur(t, r) ||
                !ur(a, o);
        }
        function li(e, n, t) {
          var r = !1,
            a = Na,
            o = n.contextType;
          return (
            "object" === typeof o && null !== o
              ? (o = Po(o))
              : ((a = Ra(n) ? Ia : Ta.current),
                (o = (r = null !== (r = n.contextTypes) && void 0 !== r)
                  ? Pa(e, a)
                  : Na)),
            (n = new n(t, o)),
            (e.memoizedState =
              null !== n.state && void 0 !== n.state ? n.state : null),
            (n.updater = ai),
            (e.stateNode = n),
            (n._reactInternals = e),
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                a),
              (e.__reactInternalMemoizedMaskedChildContext = o)),
            n
          );
        }
        function ii(e, n, t, r) {
          (e = n.state),
            "function" === typeof n.componentWillReceiveProps &&
              n.componentWillReceiveProps(t, r),
            "function" === typeof n.UNSAFE_componentWillReceiveProps &&
              n.UNSAFE_componentWillReceiveProps(t, r),
            n.state !== e && ai.enqueueReplaceState(n, n.state, null);
        }
        function ui(e, n, t, r) {
          var a = e.stateNode;
          (a.props = t), (a.state = e.memoizedState), (a.refs = {}), Fo(e);
          var o = n.contextType;
          "object" === typeof o && null !== o
            ? (a.context = Po(o))
            : ((o = Ra(n) ? Ia : Ta.current), (a.context = Pa(e, o))),
            (a.state = e.memoizedState),
            "function" === typeof (o = n.getDerivedStateFromProps) &&
              (ri(e, n, o, t), (a.state = e.memoizedState)),
            "function" === typeof n.getDerivedStateFromProps ||
              "function" === typeof a.getSnapshotBeforeUpdate ||
              ("function" !== typeof a.UNSAFE_componentWillMount &&
                "function" !== typeof a.componentWillMount) ||
              ((n = a.state),
              "function" === typeof a.componentWillMount &&
                a.componentWillMount(),
              "function" === typeof a.UNSAFE_componentWillMount &&
                a.UNSAFE_componentWillMount(),
              n !== a.state && ai.enqueueReplaceState(a, a.state, null),
              Bo(e, t, a, r),
              (a.state = e.memoizedState)),
            "function" === typeof a.componentDidMount && (e.flags |= 4194308);
        }
        function si(e, n) {
          try {
            var t = "",
              r = n;
            do {
              (t += $(r)), (r = r.return);
            } while (r);
            var a = t;
          } catch (o) {
            a = "\nError generating stack: " + o.message + "\n" + o.stack;
          }
          return { value: e, source: n, stack: a, digest: null };
        }
        function ci(e, n, t) {
          return {
            value: e,
            source: null,
            stack: null != t ? t : null,
            digest: null != n ? n : null,
          };
        }
        function fi(e, n) {
          try {
            console.error(n.value);
          } catch (t) {
            setTimeout(function () {
              throw t;
            });
          }
        }
        var di = "function" === typeof WeakMap ? WeakMap : Map;
        function pi(e, n, t) {
          ((t = jo(-1, t)).tag = 3), (t.payload = { element: null });
          var r = n.value;
          return (
            (t.callback = function () {
              Vu || ((Vu = !0), (Wu = r)), fi(0, n);
            }),
            t
          );
        }
        function hi(e, n, t) {
          (t = jo(-1, t)).tag = 3;
          var r = e.type.getDerivedStateFromError;
          if ("function" === typeof r) {
            var a = n.value;
            (t.payload = function () {
              return r(a);
            }),
              (t.callback = function () {
                fi(0, n);
              });
          }
          var o = e.stateNode;
          return (
            null !== o &&
              "function" === typeof o.componentDidCatch &&
              (t.callback = function () {
                fi(0, n),
                  "function" !== typeof r &&
                    (null === Yu ? (Yu = new Set([this])) : Yu.add(this));
                var e = n.stack;
                this.componentDidCatch(n.value, {
                  componentStack: null !== e ? e : "",
                });
              }),
            t
          );
        }
        function mi(e, n, t) {
          var r = e.pingCache;
          if (null === r) {
            r = e.pingCache = new di();
            var a = new Set();
            r.set(n, a);
          } else void 0 === (a = r.get(n)) && ((a = new Set()), r.set(n, a));
          a.has(t) || (a.add(t), (e = Cs.bind(null, e, n, t)), n.then(e, e));
        }
        function gi(e) {
          do {
            var n;
            if (
              ((n = 13 === e.tag) &&
                (n = null === (n = e.memoizedState) || null !== n.dehydrated),
              n)
            )
              return e;
            e = e.return;
          } while (null !== e);
          return null;
        }
        function vi(e, n, t, r, a) {
          return 0 === (1 & e.mode)
            ? (e === n
                ? (e.flags |= 65536)
                : ((e.flags |= 128),
                  (t.flags |= 131072),
                  (t.flags &= -52805),
                  1 === t.tag &&
                    (null === t.alternate
                      ? (t.tag = 17)
                      : (((n = jo(-1, 1)).tag = 2), Uo(t, n, 1))),
                  (t.lanes |= 1)),
              e)
            : ((e.flags |= 65536), (e.lanes = a), e);
        }
        var yi = w.ReactCurrentOwner,
          bi = !1;
        function wi(e, n, t, r) {
          n.child = null === e ? So(n, null, t, r) : ko(n, e.child, t, r);
        }
        function ki(e, n, t, r, a) {
          t = t.render;
          var o = n.ref;
          return (
            Io(n, a),
            (r = gl(e, n, t, r, o, a)),
            (t = vl()),
            null === e || bi
              ? (ao && t && eo(n), (n.flags |= 1), wi(e, n, r, a), n.child)
              : ((n.updateQueue = e.updateQueue),
                (n.flags &= -2053),
                (e.lanes &= ~a),
                Vi(e, n, a))
          );
        }
        function Si(e, n, t, r, a) {
          if (null === e) {
            var o = t.type;
            return "function" !== typeof o ||
              Rs(o) ||
              void 0 !== o.defaultProps ||
              null !== t.compare ||
              void 0 !== t.defaultProps
              ? (((e = zs(t.type, null, r, n, n.mode, a)).ref = n.ref),
                (e.return = n),
                (n.child = e))
              : ((n.tag = 15), (n.type = o), Ei(e, n, o, r, a));
          }
          if (((o = e.child), 0 === (e.lanes & a))) {
            var l = o.memoizedProps;
            if (
              (t = null !== (t = t.compare) ? t : ur)(l, r) &&
              e.ref === n.ref
            )
              return Vi(e, n, a);
          }
          return (
            (n.flags |= 1),
            ((e = Ls(o, r)).ref = n.ref),
            (e.return = n),
            (n.child = e)
          );
        }
        function Ei(e, n, t, r, a) {
          if (null !== e) {
            var o = e.memoizedProps;
            if (ur(o, r) && e.ref === n.ref) {
              if (((bi = !1), (n.pendingProps = r = o), 0 === (e.lanes & a)))
                return (n.lanes = e.lanes), Vi(e, n, a);
              0 !== (131072 & e.flags) && (bi = !0);
            }
          }
          return _i(e, n, t, r, a);
        }
        function xi(e, n, t) {
          var r = n.pendingProps,
            a = r.children,
            o = null !== e ? e.memoizedState : null;
          if ("hidden" === r.mode)
            if (0 === (1 & n.mode))
              (n.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                _a(Lu, Ru),
                (Ru |= t);
            else {
              if (0 === (1073741824 & t))
                return (
                  (e = null !== o ? o.baseLanes | t : t),
                  (n.lanes = n.childLanes = 1073741824),
                  (n.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null,
                  }),
                  (n.updateQueue = null),
                  _a(Lu, Ru),
                  (Ru |= e),
                  null
                );
              (n.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                (r = null !== o ? o.baseLanes : t),
                _a(Lu, Ru),
                (Ru |= r);
            }
          else
            null !== o
              ? ((r = o.baseLanes | t), (n.memoizedState = null))
              : (r = t),
              _a(Lu, Ru),
              (Ru |= r);
          return wi(e, n, a, t), n.child;
        }
        function Ci(e, n) {
          var t = n.ref;
          ((null === e && null !== t) || (null !== e && e.ref !== t)) &&
            ((n.flags |= 512), (n.flags |= 2097152));
        }
        function _i(e, n, t, r, a) {
          var o = Ra(t) ? Ia : Ta.current;
          return (
            (o = Pa(n, o)),
            Io(n, a),
            (t = gl(e, n, t, r, o, a)),
            (r = vl()),
            null === e || bi
              ? (ao && r && eo(n), (n.flags |= 1), wi(e, n, t, a), n.child)
              : ((n.updateQueue = e.updateQueue),
                (n.flags &= -2053),
                (e.lanes &= ~a),
                Vi(e, n, a))
          );
        }
        function Ni(e, n, t, r, a) {
          if (Ra(t)) {
            var o = !0;
            Aa(n);
          } else o = !1;
          if ((Io(n, a), null === n.stateNode))
            Bi(e, n), li(n, t, r), ui(n, t, r, a), (r = !0);
          else if (null === e) {
            var l = n.stateNode,
              i = n.memoizedProps;
            l.props = i;
            var u = l.context,
              s = t.contextType;
            "object" === typeof s && null !== s
              ? (s = Po(s))
              : (s = Pa(n, (s = Ra(t) ? Ia : Ta.current)));
            var c = t.getDerivedStateFromProps,
              f =
                "function" === typeof c ||
                "function" === typeof l.getSnapshotBeforeUpdate;
            f ||
              ("function" !== typeof l.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof l.componentWillReceiveProps) ||
              ((i !== r || u !== s) && ii(n, l, r, s)),
              (Ao = !1);
            var d = n.memoizedState;
            (l.state = d),
              Bo(n, r, l, a),
              (u = n.memoizedState),
              i !== r || d !== u || Oa.current || Ao
                ? ("function" === typeof c &&
                    (ri(n, t, c, r), (u = n.memoizedState)),
                  (i = Ao || oi(n, t, i, r, d, u, s))
                    ? (f ||
                        ("function" !== typeof l.UNSAFE_componentWillMount &&
                          "function" !== typeof l.componentWillMount) ||
                        ("function" === typeof l.componentWillMount &&
                          l.componentWillMount(),
                        "function" === typeof l.UNSAFE_componentWillMount &&
                          l.UNSAFE_componentWillMount()),
                      "function" === typeof l.componentDidMount &&
                        (n.flags |= 4194308))
                    : ("function" === typeof l.componentDidMount &&
                        (n.flags |= 4194308),
                      (n.memoizedProps = r),
                      (n.memoizedState = u)),
                  (l.props = r),
                  (l.state = u),
                  (l.context = s),
                  (r = i))
                : ("function" === typeof l.componentDidMount &&
                    (n.flags |= 4194308),
                  (r = !1));
          } else {
            (l = n.stateNode),
              Do(e, n),
              (i = n.memoizedProps),
              (s = n.type === n.elementType ? i : ti(n.type, i)),
              (l.props = s),
              (f = n.pendingProps),
              (d = l.context),
              "object" === typeof (u = t.contextType) && null !== u
                ? (u = Po(u))
                : (u = Pa(n, (u = Ra(t) ? Ia : Ta.current)));
            var p = t.getDerivedStateFromProps;
            (c =
              "function" === typeof p ||
              "function" === typeof l.getSnapshotBeforeUpdate) ||
              ("function" !== typeof l.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof l.componentWillReceiveProps) ||
              ((i !== f || d !== u) && ii(n, l, r, u)),
              (Ao = !1),
              (d = n.memoizedState),
              (l.state = d),
              Bo(n, r, l, a);
            var h = n.memoizedState;
            i !== f || d !== h || Oa.current || Ao
              ? ("function" === typeof p &&
                  (ri(n, t, p, r), (h = n.memoizedState)),
                (s = Ao || oi(n, t, s, r, d, h, u) || !1)
                  ? (c ||
                      ("function" !== typeof l.UNSAFE_componentWillUpdate &&
                        "function" !== typeof l.componentWillUpdate) ||
                      ("function" === typeof l.componentWillUpdate &&
                        l.componentWillUpdate(r, h, u),
                      "function" === typeof l.UNSAFE_componentWillUpdate &&
                        l.UNSAFE_componentWillUpdate(r, h, u)),
                    "function" === typeof l.componentDidUpdate &&
                      (n.flags |= 4),
                    "function" === typeof l.getSnapshotBeforeUpdate &&
                      (n.flags |= 1024))
                  : ("function" !== typeof l.componentDidUpdate ||
                      (i === e.memoizedProps && d === e.memoizedState) ||
                      (n.flags |= 4),
                    "function" !== typeof l.getSnapshotBeforeUpdate ||
                      (i === e.memoizedProps && d === e.memoizedState) ||
                      (n.flags |= 1024),
                    (n.memoizedProps = r),
                    (n.memoizedState = h)),
                (l.props = r),
                (l.state = h),
                (l.context = u),
                (r = s))
              : ("function" !== typeof l.componentDidUpdate ||
                  (i === e.memoizedProps && d === e.memoizedState) ||
                  (n.flags |= 4),
                "function" !== typeof l.getSnapshotBeforeUpdate ||
                  (i === e.memoizedProps && d === e.memoizedState) ||
                  (n.flags |= 1024),
                (r = !1));
          }
          return Ti(e, n, t, r, o, a);
        }
        function Ti(e, n, t, r, a, o) {
          Ci(e, n);
          var l = 0 !== (128 & n.flags);
          if (!r && !l) return a && Fa(n, t, !1), Vi(e, n, o);
          (r = n.stateNode), (yi.current = n);
          var i =
            l && "function" !== typeof t.getDerivedStateFromError
              ? null
              : r.render();
          return (
            (n.flags |= 1),
            null !== e && l
              ? ((n.child = ko(n, e.child, null, o)),
                (n.child = ko(n, null, i, o)))
              : wi(e, n, i, o),
            (n.memoizedState = r.state),
            a && Fa(n, t, !0),
            n.child
          );
        }
        function Oi(e) {
          var n = e.stateNode;
          n.pendingContext
            ? za(0, n.pendingContext, n.pendingContext !== n.context)
            : n.context && za(0, n.context, !1),
            Go(e, n.containerInfo);
        }
        function Ii(e, n, t, r, a) {
          return ho(), mo(a), (n.flags |= 256), wi(e, n, t, r), n.child;
        }
        var Pi,
          Ri,
          Li,
          zi,
          Mi = { dehydrated: null, treeContext: null, retryLane: 0 };
        function Ai(e) {
          return { baseLanes: e, cachePool: null, transitions: null };
        }
        function Fi(e, n, t) {
          var r,
            a = n.pendingProps,
            l = el.current,
            i = !1,
            u = 0 !== (128 & n.flags);
          if (
            ((r = u) ||
              (r = (null === e || null !== e.memoizedState) && 0 !== (2 & l)),
            r
              ? ((i = !0), (n.flags &= -129))
              : (null !== e && null === e.memoizedState) || (l |= 1),
            _a(el, 1 & l),
            null === e)
          )
            return (
              so(n),
              null !== (e = n.memoizedState) && null !== (e = e.dehydrated)
                ? (0 === (1 & n.mode)
                    ? (n.lanes = 1)
                    : "$!" === e.data
                    ? (n.lanes = 8)
                    : (n.lanes = 1073741824),
                  null)
                : ((u = a.children),
                  (e = a.fallback),
                  i
                    ? ((a = n.mode),
                      (i = n.child),
                      (u = { mode: "hidden", children: u }),
                      0 === (1 & a) && null !== i
                        ? ((i.childLanes = 0), (i.pendingProps = u))
                        : (i = As(u, a, 0, null)),
                      (e = Ms(e, a, t, null)),
                      (i.return = n),
                      (e.return = n),
                      (i.sibling = e),
                      (n.child = i),
                      (n.child.memoizedState = Ai(t)),
                      (n.memoizedState = Mi),
                      e)
                    : Di(n, u))
            );
          if (null !== (l = e.memoizedState) && null !== (r = l.dehydrated))
            return (function (e, n, t, r, a, l, i) {
              if (t)
                return 256 & n.flags
                  ? ((n.flags &= -257), ji(e, n, i, (r = ci(Error(o(422))))))
                  : null !== n.memoizedState
                  ? ((n.child = e.child), (n.flags |= 128), null)
                  : ((l = r.fallback),
                    (a = n.mode),
                    (r = As(
                      { mode: "visible", children: r.children },
                      a,
                      0,
                      null
                    )),
                    ((l = Ms(l, a, i, null)).flags |= 2),
                    (r.return = n),
                    (l.return = n),
                    (r.sibling = l),
                    (n.child = r),
                    0 !== (1 & n.mode) && ko(n, e.child, null, i),
                    (n.child.memoizedState = Ai(i)),
                    (n.memoizedState = Mi),
                    l);
              if (0 === (1 & n.mode)) return ji(e, n, i, null);
              if ("$!" === a.data) {
                if ((r = a.nextSibling && a.nextSibling.dataset))
                  var u = r.dgst;
                return (
                  (r = u), ji(e, n, i, (r = ci((l = Error(o(419))), r, void 0)))
                );
              }
              if (((u = 0 !== (i & e.childLanes)), bi || u)) {
                if (null !== (r = Ou)) {
                  switch (i & -i) {
                    case 4:
                      a = 2;
                      break;
                    case 16:
                      a = 8;
                      break;
                    case 64:
                    case 128:
                    case 256:
                    case 512:
                    case 1024:
                    case 2048:
                    case 4096:
                    case 8192:
                    case 16384:
                    case 32768:
                    case 65536:
                    case 131072:
                    case 262144:
                    case 524288:
                    case 1048576:
                    case 2097152:
                    case 4194304:
                    case 8388608:
                    case 16777216:
                    case 33554432:
                    case 67108864:
                      a = 32;
                      break;
                    case 536870912:
                      a = 268435456;
                      break;
                    default:
                      a = 0;
                  }
                  0 !== (a = 0 !== (a & (r.suspendedLanes | i)) ? 0 : a) &&
                    a !== l.retryLane &&
                    ((l.retryLane = a), Mo(e, a), ts(r, e, a, -1));
                }
                return ms(), ji(e, n, i, (r = ci(Error(o(421)))));
              }
              return "$?" === a.data
                ? ((n.flags |= 128),
                  (n.child = e.child),
                  (n = Ns.bind(null, e)),
                  (a._reactRetry = n),
                  null)
                : ((e = l.treeContext),
                  (ro = sa(a.nextSibling)),
                  (to = n),
                  (ao = !0),
                  (oo = null),
                  null !== e &&
                    ((Qa[Ka++] = Ga),
                    (Qa[Ka++] = Xa),
                    (Qa[Ka++] = qa),
                    (Ga = e.id),
                    (Xa = e.overflow),
                    (qa = n)),
                  (n = Di(n, r.children)),
                  (n.flags |= 4096),
                  n);
            })(e, n, u, a, r, l, t);
          if (i) {
            (i = a.fallback), (u = n.mode), (r = (l = e.child).sibling);
            var s = { mode: "hidden", children: a.children };
            return (
              0 === (1 & u) && n.child !== l
                ? (((a = n.child).childLanes = 0),
                  (a.pendingProps = s),
                  (n.deletions = null))
                : ((a = Ls(l, s)).subtreeFlags = 14680064 & l.subtreeFlags),
              null !== r
                ? (i = Ls(r, i))
                : ((i = Ms(i, u, t, null)).flags |= 2),
              (i.return = n),
              (a.return = n),
              (a.sibling = i),
              (n.child = a),
              (a = i),
              (i = n.child),
              (u =
                null === (u = e.child.memoizedState)
                  ? Ai(t)
                  : {
                      baseLanes: u.baseLanes | t,
                      cachePool: null,
                      transitions: u.transitions,
                    }),
              (i.memoizedState = u),
              (i.childLanes = e.childLanes & ~t),
              (n.memoizedState = Mi),
              a
            );
          }
          return (
            (e = (i = e.child).sibling),
            (a = Ls(i, { mode: "visible", children: a.children })),
            0 === (1 & n.mode) && (a.lanes = t),
            (a.return = n),
            (a.sibling = null),
            null !== e &&
              (null === (t = n.deletions)
                ? ((n.deletions = [e]), (n.flags |= 16))
                : t.push(e)),
            (n.child = a),
            (n.memoizedState = null),
            a
          );
        }
        function Di(e, n) {
          return (
            ((n = As(
              { mode: "visible", children: n },
              e.mode,
              0,
              null
            )).return = e),
            (e.child = n)
          );
        }
        function ji(e, n, t, r) {
          return (
            null !== r && mo(r),
            ko(n, e.child, null, t),
            ((e = Di(n, n.pendingProps.children)).flags |= 2),
            (n.memoizedState = null),
            e
          );
        }
        function Ui(e, n, t) {
          e.lanes |= n;
          var r = e.alternate;
          null !== r && (r.lanes |= n), Oo(e.return, n, t);
        }
        function $i(e, n, t, r, a) {
          var o = e.memoizedState;
          null === o
            ? (e.memoizedState = {
                isBackwards: n,
                rendering: null,
                renderingStartTime: 0,
                last: r,
                tail: t,
                tailMode: a,
              })
            : ((o.isBackwards = n),
              (o.rendering = null),
              (o.renderingStartTime = 0),
              (o.last = r),
              (o.tail = t),
              (o.tailMode = a));
        }
        function Hi(e, n, t) {
          var r = n.pendingProps,
            a = r.revealOrder,
            o = r.tail;
          if ((wi(e, n, r.children, t), 0 !== (2 & (r = el.current))))
            (r = (1 & r) | 2), (n.flags |= 128);
          else {
            if (null !== e && 0 !== (128 & e.flags))
              e: for (e = n.child; null !== e; ) {
                if (13 === e.tag) null !== e.memoizedState && Ui(e, t, n);
                else if (19 === e.tag) Ui(e, t, n);
                else if (null !== e.child) {
                  (e.child.return = e), (e = e.child);
                  continue;
                }
                if (e === n) break e;
                for (; null === e.sibling; ) {
                  if (null === e.return || e.return === n) break e;
                  e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
              }
            r &= 1;
          }
          if ((_a(el, r), 0 === (1 & n.mode))) n.memoizedState = null;
          else
            switch (a) {
              case "forwards":
                for (t = n.child, a = null; null !== t; )
                  null !== (e = t.alternate) && null === nl(e) && (a = t),
                    (t = t.sibling);
                null === (t = a)
                  ? ((a = n.child), (n.child = null))
                  : ((a = t.sibling), (t.sibling = null)),
                  $i(n, !1, a, t, o);
                break;
              case "backwards":
                for (t = null, a = n.child, n.child = null; null !== a; ) {
                  if (null !== (e = a.alternate) && null === nl(e)) {
                    n.child = a;
                    break;
                  }
                  (e = a.sibling), (a.sibling = t), (t = a), (a = e);
                }
                $i(n, !0, t, null, o);
                break;
              case "together":
                $i(n, !1, null, null, void 0);
                break;
              default:
                n.memoizedState = null;
            }
          return n.child;
        }
        function Bi(e, n) {
          0 === (1 & n.mode) &&
            null !== e &&
            ((e.alternate = null), (n.alternate = null), (n.flags |= 2));
        }
        function Vi(e, n, t) {
          if (
            (null !== e && (n.dependencies = e.dependencies),
            (Au |= n.lanes),
            0 === (t & n.childLanes))
          )
            return null;
          if (null !== e && n.child !== e.child) throw Error(o(153));
          if (null !== n.child) {
            for (
              t = Ls((e = n.child), e.pendingProps), n.child = t, t.return = n;
              null !== e.sibling;

            )
              (e = e.sibling),
                ((t = t.sibling = Ls(e, e.pendingProps)).return = n);
            t.sibling = null;
          }
          return n.child;
        }
        function Wi(e, n) {
          if (!ao)
            switch (e.tailMode) {
              case "hidden":
                n = e.tail;
                for (var t = null; null !== n; )
                  null !== n.alternate && (t = n), (n = n.sibling);
                null === t ? (e.tail = null) : (t.sibling = null);
                break;
              case "collapsed":
                t = e.tail;
                for (var r = null; null !== t; )
                  null !== t.alternate && (r = t), (t = t.sibling);
                null === r
                  ? n || null === e.tail
                    ? (e.tail = null)
                    : (e.tail.sibling = null)
                  : (r.sibling = null);
            }
        }
        function Yi(e) {
          var n = null !== e.alternate && e.alternate.child === e.child,
            t = 0,
            r = 0;
          if (n)
            for (var a = e.child; null !== a; )
              (t |= a.lanes | a.childLanes),
                (r |= 14680064 & a.subtreeFlags),
                (r |= 14680064 & a.flags),
                (a.return = e),
                (a = a.sibling);
          else
            for (a = e.child; null !== a; )
              (t |= a.lanes | a.childLanes),
                (r |= a.subtreeFlags),
                (r |= a.flags),
                (a.return = e),
                (a = a.sibling);
          return (e.subtreeFlags |= r), (e.childLanes = t), n;
        }
        function Qi(e, n, t) {
          var r = n.pendingProps;
          switch ((no(n), n.tag)) {
            case 2:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
              return Yi(n), null;
            case 1:
            case 17:
              return Ra(n.type) && La(), Yi(n), null;
            case 3:
              return (
                (r = n.stateNode),
                Xo(),
                Ca(Oa),
                Ca(Ta),
                rl(),
                r.pendingContext &&
                  ((r.context = r.pendingContext), (r.pendingContext = null)),
                (null !== e && null !== e.child) ||
                  (fo(n)
                    ? (n.flags |= 4)
                    : null === e ||
                      (e.memoizedState.isDehydrated && 0 === (256 & n.flags)) ||
                      ((n.flags |= 1024),
                      null !== oo && (ls(oo), (oo = null)))),
                Ri(e, n),
                Yi(n),
                null
              );
            case 5:
              Zo(n);
              var a = qo(Ko.current);
              if (((t = n.type), null !== e && null != n.stateNode))
                Li(e, n, t, r, a),
                  e.ref !== n.ref && ((n.flags |= 512), (n.flags |= 2097152));
              else {
                if (!r) {
                  if (null === n.stateNode) throw Error(o(166));
                  return Yi(n), null;
                }
                if (((e = qo(Yo.current)), fo(n))) {
                  (r = n.stateNode), (t = n.type);
                  var l = n.memoizedProps;
                  switch (
                    ((r[da] = n), (r[pa] = l), (e = 0 !== (1 & n.mode)), t)
                  ) {
                    case "dialog":
                      jr("cancel", r), jr("close", r);
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      jr("load", r);
                      break;
                    case "video":
                    case "audio":
                      for (a = 0; a < Mr.length; a++) jr(Mr[a], r);
                      break;
                    case "source":
                      jr("error", r);
                      break;
                    case "img":
                    case "image":
                    case "link":
                      jr("error", r), jr("load", r);
                      break;
                    case "details":
                      jr("toggle", r);
                      break;
                    case "input":
                      G(r, l), jr("invalid", r);
                      break;
                    case "select":
                      (r._wrapperState = { wasMultiple: !!l.multiple }),
                        jr("invalid", r);
                      break;
                    case "textarea":
                      ae(r, l), jr("invalid", r);
                  }
                  for (var u in (ye(t, l), (a = null), l))
                    if (l.hasOwnProperty(u)) {
                      var s = l[u];
                      "children" === u
                        ? "string" === typeof s
                          ? r.textContent !== s &&
                            (!0 !== l.suppressHydrationWarning &&
                              Jr(r.textContent, s, e),
                            (a = ["children", s]))
                          : "number" === typeof s &&
                            r.textContent !== "" + s &&
                            (!0 !== l.suppressHydrationWarning &&
                              Jr(r.textContent, s, e),
                            (a = ["children", "" + s]))
                        : i.hasOwnProperty(u) &&
                          null != s &&
                          "onScroll" === u &&
                          jr("scroll", r);
                    }
                  switch (t) {
                    case "input":
                      Y(r), Z(r, l, !0);
                      break;
                    case "textarea":
                      Y(r), le(r);
                      break;
                    case "select":
                    case "option":
                      break;
                    default:
                      "function" === typeof l.onClick && (r.onclick = Zr);
                  }
                  (r = a), (n.updateQueue = r), null !== r && (n.flags |= 4);
                } else {
                  (u = 9 === a.nodeType ? a : a.ownerDocument),
                    "http://www.w3.org/1999/xhtml" === e && (e = ie(t)),
                    "http://www.w3.org/1999/xhtml" === e
                      ? "script" === t
                        ? (((e = u.createElement("div")).innerHTML =
                            "<script></script>"),
                          (e = e.removeChild(e.firstChild)))
                        : "string" === typeof r.is
                        ? (e = u.createElement(t, { is: r.is }))
                        : ((e = u.createElement(t)),
                          "select" === t &&
                            ((u = e),
                            r.multiple
                              ? (u.multiple = !0)
                              : r.size && (u.size = r.size)))
                      : (e = u.createElementNS(e, t)),
                    (e[da] = n),
                    (e[pa] = r),
                    Pi(e, n, !1, !1),
                    (n.stateNode = e);
                  e: {
                    switch (((u = be(t, r)), t)) {
                      case "dialog":
                        jr("cancel", e), jr("close", e), (a = r);
                        break;
                      case "iframe":
                      case "object":
                      case "embed":
                        jr("load", e), (a = r);
                        break;
                      case "video":
                      case "audio":
                        for (a = 0; a < Mr.length; a++) jr(Mr[a], e);
                        a = r;
                        break;
                      case "source":
                        jr("error", e), (a = r);
                        break;
                      case "img":
                      case "image":
                      case "link":
                        jr("error", e), jr("load", e), (a = r);
                        break;
                      case "details":
                        jr("toggle", e), (a = r);
                        break;
                      case "input":
                        G(e, r), (a = q(e, r)), jr("invalid", e);
                        break;
                      case "option":
                      default:
                        a = r;
                        break;
                      case "select":
                        (e._wrapperState = { wasMultiple: !!r.multiple }),
                          (a = F({}, r, { value: void 0 })),
                          jr("invalid", e);
                        break;
                      case "textarea":
                        ae(e, r), (a = re(e, r)), jr("invalid", e);
                    }
                    for (l in (ye(t, a), (s = a)))
                      if (s.hasOwnProperty(l)) {
                        var c = s[l];
                        "style" === l
                          ? ge(e, c)
                          : "dangerouslySetInnerHTML" === l
                          ? null != (c = c ? c.__html : void 0) && fe(e, c)
                          : "children" === l
                          ? "string" === typeof c
                            ? ("textarea" !== t || "" !== c) && de(e, c)
                            : "number" === typeof c && de(e, "" + c)
                          : "suppressContentEditableWarning" !== l &&
                            "suppressHydrationWarning" !== l &&
                            "autoFocus" !== l &&
                            (i.hasOwnProperty(l)
                              ? null != c && "onScroll" === l && jr("scroll", e)
                              : null != c && b(e, l, c, u));
                      }
                    switch (t) {
                      case "input":
                        Y(e), Z(e, r, !1);
                        break;
                      case "textarea":
                        Y(e), le(e);
                        break;
                      case "option":
                        null != r.value &&
                          e.setAttribute("value", "" + V(r.value));
                        break;
                      case "select":
                        (e.multiple = !!r.multiple),
                          null != (l = r.value)
                            ? te(e, !!r.multiple, l, !1)
                            : null != r.defaultValue &&
                              te(e, !!r.multiple, r.defaultValue, !0);
                        break;
                      default:
                        "function" === typeof a.onClick && (e.onclick = Zr);
                    }
                    switch (t) {
                      case "button":
                      case "input":
                      case "select":
                      case "textarea":
                        r = !!r.autoFocus;
                        break e;
                      case "img":
                        r = !0;
                        break e;
                      default:
                        r = !1;
                    }
                  }
                  r && (n.flags |= 4);
                }
                null !== n.ref && ((n.flags |= 512), (n.flags |= 2097152));
              }
              return Yi(n), null;
            case 6:
              if (e && null != n.stateNode) zi(e, n, e.memoizedProps, r);
              else {
                if ("string" !== typeof r && null === n.stateNode)
                  throw Error(o(166));
                if (((t = qo(Ko.current)), qo(Yo.current), fo(n))) {
                  if (
                    ((r = n.stateNode),
                    (t = n.memoizedProps),
                    (r[da] = n),
                    (l = r.nodeValue !== t) && null !== (e = to))
                  )
                    switch (e.tag) {
                      case 3:
                        Jr(r.nodeValue, t, 0 !== (1 & e.mode));
                        break;
                      case 5:
                        !0 !== e.memoizedProps.suppressHydrationWarning &&
                          Jr(r.nodeValue, t, 0 !== (1 & e.mode));
                    }
                  l && (n.flags |= 4);
                } else
                  ((r = (9 === t.nodeType ? t : t.ownerDocument).createTextNode(
                    r
                  ))[da] = n),
                    (n.stateNode = r);
              }
              return Yi(n), null;
            case 13:
              if (
                (Ca(el),
                (r = n.memoizedState),
                null === e ||
                  (null !== e.memoizedState &&
                    null !== e.memoizedState.dehydrated))
              ) {
                if (
                  ao &&
                  null !== ro &&
                  0 !== (1 & n.mode) &&
                  0 === (128 & n.flags)
                )
                  po(), ho(), (n.flags |= 98560), (l = !1);
                else if (((l = fo(n)), null !== r && null !== r.dehydrated)) {
                  if (null === e) {
                    if (!l) throw Error(o(318));
                    if (
                      !(l =
                        null !== (l = n.memoizedState) ? l.dehydrated : null)
                    )
                      throw Error(o(317));
                    l[da] = n;
                  } else
                    ho(),
                      0 === (128 & n.flags) && (n.memoizedState = null),
                      (n.flags |= 4);
                  Yi(n), (l = !1);
                } else null !== oo && (ls(oo), (oo = null)), (l = !0);
                if (!l) return 65536 & n.flags ? n : null;
              }
              return 0 !== (128 & n.flags)
                ? ((n.lanes = t), n)
                : ((r = null !== r) !==
                    (null !== e && null !== e.memoizedState) &&
                    r &&
                    ((n.child.flags |= 8192),
                    0 !== (1 & n.mode) &&
                      (null === e || 0 !== (1 & el.current)
                        ? 0 === zu && (zu = 3)
                        : ms())),
                  null !== n.updateQueue && (n.flags |= 4),
                  Yi(n),
                  null);
            case 4:
              return (
                Xo(),
                Ri(e, n),
                null === e && Hr(n.stateNode.containerInfo),
                Yi(n),
                null
              );
            case 10:
              return To(n.type._context), Yi(n), null;
            case 19:
              if ((Ca(el), null === (l = n.memoizedState))) return Yi(n), null;
              if (((r = 0 !== (128 & n.flags)), null === (u = l.rendering)))
                if (r) Wi(l, !1);
                else {
                  if (0 !== zu || (null !== e && 0 !== (128 & e.flags)))
                    for (e = n.child; null !== e; ) {
                      if (null !== (u = nl(e))) {
                        for (
                          n.flags |= 128,
                            Wi(l, !1),
                            null !== (r = u.updateQueue) &&
                              ((n.updateQueue = r), (n.flags |= 4)),
                            n.subtreeFlags = 0,
                            r = t,
                            t = n.child;
                          null !== t;

                        )
                          (e = r),
                            ((l = t).flags &= 14680066),
                            null === (u = l.alternate)
                              ? ((l.childLanes = 0),
                                (l.lanes = e),
                                (l.child = null),
                                (l.subtreeFlags = 0),
                                (l.memoizedProps = null),
                                (l.memoizedState = null),
                                (l.updateQueue = null),
                                (l.dependencies = null),
                                (l.stateNode = null))
                              : ((l.childLanes = u.childLanes),
                                (l.lanes = u.lanes),
                                (l.child = u.child),
                                (l.subtreeFlags = 0),
                                (l.deletions = null),
                                (l.memoizedProps = u.memoizedProps),
                                (l.memoizedState = u.memoizedState),
                                (l.updateQueue = u.updateQueue),
                                (l.type = u.type),
                                (e = u.dependencies),
                                (l.dependencies =
                                  null === e
                                    ? null
                                    : {
                                        lanes: e.lanes,
                                        firstContext: e.firstContext,
                                      })),
                            (t = t.sibling);
                        return _a(el, (1 & el.current) | 2), n.child;
                      }
                      e = e.sibling;
                    }
                  null !== l.tail &&
                    Xe() > Hu &&
                    ((n.flags |= 128),
                    (r = !0),
                    Wi(l, !1),
                    (n.lanes = 4194304));
                }
              else {
                if (!r)
                  if (null !== (e = nl(u))) {
                    if (
                      ((n.flags |= 128),
                      (r = !0),
                      null !== (t = e.updateQueue) &&
                        ((n.updateQueue = t), (n.flags |= 4)),
                      Wi(l, !0),
                      null === l.tail &&
                        "hidden" === l.tailMode &&
                        !u.alternate &&
                        !ao)
                    )
                      return Yi(n), null;
                  } else
                    2 * Xe() - l.renderingStartTime > Hu &&
                      1073741824 !== t &&
                      ((n.flags |= 128),
                      (r = !0),
                      Wi(l, !1),
                      (n.lanes = 4194304));
                l.isBackwards
                  ? ((u.sibling = n.child), (n.child = u))
                  : (null !== (t = l.last) ? (t.sibling = u) : (n.child = u),
                    (l.last = u));
              }
              return null !== l.tail
                ? ((n = l.tail),
                  (l.rendering = n),
                  (l.tail = n.sibling),
                  (l.renderingStartTime = Xe()),
                  (n.sibling = null),
                  (t = el.current),
                  _a(el, r ? (1 & t) | 2 : 1 & t),
                  n)
                : (Yi(n), null);
            case 22:
            case 23:
              return (
                fs(),
                (r = null !== n.memoizedState),
                null !== e &&
                  (null !== e.memoizedState) !== r &&
                  (n.flags |= 8192),
                r && 0 !== (1 & n.mode)
                  ? 0 !== (1073741824 & Ru) &&
                    (Yi(n), 6 & n.subtreeFlags && (n.flags |= 8192))
                  : Yi(n),
                null
              );
            case 24:
            case 25:
              return null;
          }
          throw Error(o(156, n.tag));
        }
        function Ki(e, n) {
          switch ((no(n), n.tag)) {
            case 1:
              return (
                Ra(n.type) && La(),
                65536 & (e = n.flags)
                  ? ((n.flags = (-65537 & e) | 128), n)
                  : null
              );
            case 3:
              return (
                Xo(),
                Ca(Oa),
                Ca(Ta),
                rl(),
                0 !== (65536 & (e = n.flags)) && 0 === (128 & e)
                  ? ((n.flags = (-65537 & e) | 128), n)
                  : null
              );
            case 5:
              return Zo(n), null;
            case 13:
              if (
                (Ca(el),
                null !== (e = n.memoizedState) && null !== e.dehydrated)
              ) {
                if (null === n.alternate) throw Error(o(340));
                ho();
              }
              return 65536 & (e = n.flags)
                ? ((n.flags = (-65537 & e) | 128), n)
                : null;
            case 19:
              return Ca(el), null;
            case 4:
              return Xo(), null;
            case 10:
              return To(n.type._context), null;
            case 22:
            case 23:
              return fs(), null;
            default:
              return null;
          }
        }
        (Pi = function (e, n) {
          for (var t = n.child; null !== t; ) {
            if (5 === t.tag || 6 === t.tag) e.appendChild(t.stateNode);
            else if (4 !== t.tag && null !== t.child) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === n) break;
            for (; null === t.sibling; ) {
              if (null === t.return || t.return === n) return;
              t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
          }
        }),
          (Ri = function () {}),
          (Li = function (e, n, t, r) {
            var a = e.memoizedProps;
            if (a !== r) {
              (e = n.stateNode), qo(Yo.current);
              var o,
                l = null;
              switch (t) {
                case "input":
                  (a = q(e, a)), (r = q(e, r)), (l = []);
                  break;
                case "select":
                  (a = F({}, a, { value: void 0 })),
                    (r = F({}, r, { value: void 0 })),
                    (l = []);
                  break;
                case "textarea":
                  (a = re(e, a)), (r = re(e, r)), (l = []);
                  break;
                default:
                  "function" !== typeof a.onClick &&
                    "function" === typeof r.onClick &&
                    (e.onclick = Zr);
              }
              for (c in (ye(t, r), (t = null), a))
                if (!r.hasOwnProperty(c) && a.hasOwnProperty(c) && null != a[c])
                  if ("style" === c) {
                    var u = a[c];
                    for (o in u)
                      u.hasOwnProperty(o) && (t || (t = {}), (t[o] = ""));
                  } else
                    "dangerouslySetInnerHTML" !== c &&
                      "children" !== c &&
                      "suppressContentEditableWarning" !== c &&
                      "suppressHydrationWarning" !== c &&
                      "autoFocus" !== c &&
                      (i.hasOwnProperty(c)
                        ? l || (l = [])
                        : (l = l || []).push(c, null));
              for (c in r) {
                var s = r[c];
                if (
                  ((u = null != a ? a[c] : void 0),
                  r.hasOwnProperty(c) && s !== u && (null != s || null != u))
                )
                  if ("style" === c)
                    if (u) {
                      for (o in u)
                        !u.hasOwnProperty(o) ||
                          (s && s.hasOwnProperty(o)) ||
                          (t || (t = {}), (t[o] = ""));
                      for (o in s)
                        s.hasOwnProperty(o) &&
                          u[o] !== s[o] &&
                          (t || (t = {}), (t[o] = s[o]));
                    } else t || (l || (l = []), l.push(c, t)), (t = s);
                  else
                    "dangerouslySetInnerHTML" === c
                      ? ((s = s ? s.__html : void 0),
                        (u = u ? u.__html : void 0),
                        null != s && u !== s && (l = l || []).push(c, s))
                      : "children" === c
                      ? ("string" !== typeof s && "number" !== typeof s) ||
                        (l = l || []).push(c, "" + s)
                      : "suppressContentEditableWarning" !== c &&
                        "suppressHydrationWarning" !== c &&
                        (i.hasOwnProperty(c)
                          ? (null != s && "onScroll" === c && jr("scroll", e),
                            l || u === s || (l = []))
                          : (l = l || []).push(c, s));
              }
              t && (l = l || []).push("style", t);
              var c = l;
              (n.updateQueue = c) && (n.flags |= 4);
            }
          }),
          (zi = function (e, n, t, r) {
            t !== r && (n.flags |= 4);
          });
        var qi = !1,
          Gi = !1,
          Xi = "function" === typeof WeakSet ? WeakSet : Set,
          Ji = null;
        function Zi(e, n) {
          var t = e.ref;
          if (null !== t)
            if ("function" === typeof t)
              try {
                t(null);
              } catch (r) {
                xs(e, n, r);
              }
            else t.current = null;
        }
        function eu(e, n, t) {
          try {
            t();
          } catch (r) {
            xs(e, n, r);
          }
        }
        var nu = !1;
        function tu(e, n, t) {
          var r = n.updateQueue;
          if (null !== (r = null !== r ? r.lastEffect : null)) {
            var a = (r = r.next);
            do {
              if ((a.tag & e) === e) {
                var o = a.destroy;
                (a.destroy = void 0), void 0 !== o && eu(n, t, o);
              }
              a = a.next;
            } while (a !== r);
          }
        }
        function ru(e, n) {
          if (
            null !== (n = null !== (n = n.updateQueue) ? n.lastEffect : null)
          ) {
            var t = (n = n.next);
            do {
              if ((t.tag & e) === e) {
                var r = t.create;
                t.destroy = r();
              }
              t = t.next;
            } while (t !== n);
          }
        }
        function au(e) {
          var n = e.ref;
          if (null !== n) {
            var t = e.stateNode;
            e.tag, (e = t), "function" === typeof n ? n(e) : (n.current = e);
          }
        }
        function ou(e) {
          var n = e.alternate;
          null !== n && ((e.alternate = null), ou(n)),
            (e.child = null),
            (e.deletions = null),
            (e.sibling = null),
            5 === e.tag &&
              null !== (n = e.stateNode) &&
              (delete n[da],
              delete n[pa],
              delete n[ma],
              delete n[ga],
              delete n[va]),
            (e.stateNode = null),
            (e.return = null),
            (e.dependencies = null),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.pendingProps = null),
            (e.stateNode = null),
            (e.updateQueue = null);
        }
        function lu(e) {
          return 5 === e.tag || 3 === e.tag || 4 === e.tag;
        }
        function iu(e) {
          e: for (;;) {
            for (; null === e.sibling; ) {
              if (null === e.return || lu(e.return)) return null;
              e = e.return;
            }
            for (
              e.sibling.return = e.return, e = e.sibling;
              5 !== e.tag && 6 !== e.tag && 18 !== e.tag;

            ) {
              if (2 & e.flags) continue e;
              if (null === e.child || 4 === e.tag) continue e;
              (e.child.return = e), (e = e.child);
            }
            if (!(2 & e.flags)) return e.stateNode;
          }
        }
        function uu(e, n, t) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode),
              n
                ? 8 === t.nodeType
                  ? t.parentNode.insertBefore(e, n)
                  : t.insertBefore(e, n)
                : (8 === t.nodeType
                    ? (n = t.parentNode).insertBefore(e, t)
                    : (n = t).appendChild(e),
                  (null !== (t = t._reactRootContainer) && void 0 !== t) ||
                    null !== n.onclick ||
                    (n.onclick = Zr));
          else if (4 !== r && null !== (e = e.child))
            for (uu(e, n, t), e = e.sibling; null !== e; )
              uu(e, n, t), (e = e.sibling);
        }
        function su(e, n, t) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode), n ? t.insertBefore(e, n) : t.appendChild(e);
          else if (4 !== r && null !== (e = e.child))
            for (su(e, n, t), e = e.sibling; null !== e; )
              su(e, n, t), (e = e.sibling);
        }
        var cu = null,
          fu = !1;
        function du(e, n, t) {
          for (t = t.child; null !== t; ) pu(e, n, t), (t = t.sibling);
        }
        function pu(e, n, t) {
          if (on && "function" === typeof on.onCommitFiberUnmount)
            try {
              on.onCommitFiberUnmount(an, t);
            } catch (i) {}
          switch (t.tag) {
            case 5:
              Gi || Zi(t, n);
            case 6:
              var r = cu,
                a = fu;
              (cu = null),
                du(e, n, t),
                (fu = a),
                null !== (cu = r) &&
                  (fu
                    ? ((e = cu),
                      (t = t.stateNode),
                      8 === e.nodeType
                        ? e.parentNode.removeChild(t)
                        : e.removeChild(t))
                    : cu.removeChild(t.stateNode));
              break;
            case 18:
              null !== cu &&
                (fu
                  ? ((e = cu),
                    (t = t.stateNode),
                    8 === e.nodeType
                      ? ua(e.parentNode, t)
                      : 1 === e.nodeType && ua(e, t),
                    Bn(e))
                  : ua(cu, t.stateNode));
              break;
            case 4:
              (r = cu),
                (a = fu),
                (cu = t.stateNode.containerInfo),
                (fu = !0),
                du(e, n, t),
                (cu = r),
                (fu = a);
              break;
            case 0:
            case 11:
            case 14:
            case 15:
              if (
                !Gi &&
                null !== (r = t.updateQueue) &&
                null !== (r = r.lastEffect)
              ) {
                a = r = r.next;
                do {
                  var o = a,
                    l = o.destroy;
                  (o = o.tag),
                    void 0 !== l &&
                      (0 !== (2 & o) || 0 !== (4 & o)) &&
                      eu(t, n, l),
                    (a = a.next);
                } while (a !== r);
              }
              du(e, n, t);
              break;
            case 1:
              if (
                !Gi &&
                (Zi(t, n),
                "function" === typeof (r = t.stateNode).componentWillUnmount)
              )
                try {
                  (r.props = t.memoizedProps),
                    (r.state = t.memoizedState),
                    r.componentWillUnmount();
                } catch (i) {
                  xs(t, n, i);
                }
              du(e, n, t);
              break;
            case 21:
              du(e, n, t);
              break;
            case 22:
              1 & t.mode
                ? ((Gi = (r = Gi) || null !== t.memoizedState),
                  du(e, n, t),
                  (Gi = r))
                : du(e, n, t);
              break;
            default:
              du(e, n, t);
          }
        }
        function hu(e) {
          var n = e.updateQueue;
          if (null !== n) {
            e.updateQueue = null;
            var t = e.stateNode;
            null === t && (t = e.stateNode = new Xi()),
              n.forEach(function (n) {
                var r = Ts.bind(null, e, n);
                t.has(n) || (t.add(n), n.then(r, r));
              });
          }
        }
        function mu(e, n) {
          var t = n.deletions;
          if (null !== t)
            for (var r = 0; r < t.length; r++) {
              var a = t[r];
              try {
                var l = e,
                  i = n,
                  u = i;
                e: for (; null !== u; ) {
                  switch (u.tag) {
                    case 5:
                      (cu = u.stateNode), (fu = !1);
                      break e;
                    case 3:
                    case 4:
                      (cu = u.stateNode.containerInfo), (fu = !0);
                      break e;
                  }
                  u = u.return;
                }
                if (null === cu) throw Error(o(160));
                pu(l, i, a), (cu = null), (fu = !1);
                var s = a.alternate;
                null !== s && (s.return = null), (a.return = null);
              } catch (c) {
                xs(a, n, c);
              }
            }
          if (12854 & n.subtreeFlags)
            for (n = n.child; null !== n; ) gu(n, e), (n = n.sibling);
        }
        function gu(e, n) {
          var t = e.alternate,
            r = e.flags;
          switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              if ((mu(n, e), vu(e), 4 & r)) {
                try {
                  tu(3, e, e.return), ru(3, e);
                } catch (g) {
                  xs(e, e.return, g);
                }
                try {
                  tu(5, e, e.return);
                } catch (g) {
                  xs(e, e.return, g);
                }
              }
              break;
            case 1:
              mu(n, e), vu(e), 512 & r && null !== t && Zi(t, t.return);
              break;
            case 5:
              if (
                (mu(n, e),
                vu(e),
                512 & r && null !== t && Zi(t, t.return),
                32 & e.flags)
              ) {
                var a = e.stateNode;
                try {
                  de(a, "");
                } catch (g) {
                  xs(e, e.return, g);
                }
              }
              if (4 & r && null != (a = e.stateNode)) {
                var l = e.memoizedProps,
                  i = null !== t ? t.memoizedProps : l,
                  u = e.type,
                  s = e.updateQueue;
                if (((e.updateQueue = null), null !== s))
                  try {
                    "input" === u &&
                      "radio" === l.type &&
                      null != l.name &&
                      X(a, l),
                      be(u, i);
                    var c = be(u, l);
                    for (i = 0; i < s.length; i += 2) {
                      var f = s[i],
                        d = s[i + 1];
                      "style" === f
                        ? ge(a, d)
                        : "dangerouslySetInnerHTML" === f
                        ? fe(a, d)
                        : "children" === f
                        ? de(a, d)
                        : b(a, f, d, c);
                    }
                    switch (u) {
                      case "input":
                        J(a, l);
                        break;
                      case "textarea":
                        oe(a, l);
                        break;
                      case "select":
                        var p = a._wrapperState.wasMultiple;
                        a._wrapperState.wasMultiple = !!l.multiple;
                        var h = l.value;
                        null != h
                          ? te(a, !!l.multiple, h, !1)
                          : p !== !!l.multiple &&
                            (null != l.defaultValue
                              ? te(a, !!l.multiple, l.defaultValue, !0)
                              : te(a, !!l.multiple, l.multiple ? [] : "", !1));
                    }
                    a[pa] = l;
                  } catch (g) {
                    xs(e, e.return, g);
                  }
              }
              break;
            case 6:
              if ((mu(n, e), vu(e), 4 & r)) {
                if (null === e.stateNode) throw Error(o(162));
                (a = e.stateNode), (l = e.memoizedProps);
                try {
                  a.nodeValue = l;
                } catch (g) {
                  xs(e, e.return, g);
                }
              }
              break;
            case 3:
              if (
                (mu(n, e),
                vu(e),
                4 & r && null !== t && t.memoizedState.isDehydrated)
              )
                try {
                  Bn(n.containerInfo);
                } catch (g) {
                  xs(e, e.return, g);
                }
              break;
            case 4:
            default:
              mu(n, e), vu(e);
              break;
            case 13:
              mu(n, e),
                vu(e),
                8192 & (a = e.child).flags &&
                  ((l = null !== a.memoizedState),
                  (a.stateNode.isHidden = l),
                  !l ||
                    (null !== a.alternate &&
                      null !== a.alternate.memoizedState) ||
                    ($u = Xe())),
                4 & r && hu(e);
              break;
            case 22:
              if (
                ((f = null !== t && null !== t.memoizedState),
                1 & e.mode
                  ? ((Gi = (c = Gi) || f), mu(n, e), (Gi = c))
                  : mu(n, e),
                vu(e),
                8192 & r)
              ) {
                if (
                  ((c = null !== e.memoizedState),
                  (e.stateNode.isHidden = c) && !f && 0 !== (1 & e.mode))
                )
                  for (Ji = e, f = e.child; null !== f; ) {
                    for (d = Ji = f; null !== Ji; ) {
                      switch (((h = (p = Ji).child), p.tag)) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                          tu(4, p, p.return);
                          break;
                        case 1:
                          Zi(p, p.return);
                          var m = p.stateNode;
                          if ("function" === typeof m.componentWillUnmount) {
                            (r = p), (t = p.return);
                            try {
                              (n = r),
                                (m.props = n.memoizedProps),
                                (m.state = n.memoizedState),
                                m.componentWillUnmount();
                            } catch (g) {
                              xs(r, t, g);
                            }
                          }
                          break;
                        case 5:
                          Zi(p, p.return);
                          break;
                        case 22:
                          if (null !== p.memoizedState) {
                            ku(d);
                            continue;
                          }
                      }
                      null !== h ? ((h.return = p), (Ji = h)) : ku(d);
                    }
                    f = f.sibling;
                  }
                e: for (f = null, d = e; ; ) {
                  if (5 === d.tag) {
                    if (null === f) {
                      f = d;
                      try {
                        (a = d.stateNode),
                          c
                            ? "function" === typeof (l = a.style).setProperty
                              ? l.setProperty("display", "none", "important")
                              : (l.display = "none")
                            : ((u = d.stateNode),
                              (i =
                                void 0 !== (s = d.memoizedProps.style) &&
                                null !== s &&
                                s.hasOwnProperty("display")
                                  ? s.display
                                  : null),
                              (u.style.display = me("display", i)));
                      } catch (g) {
                        xs(e, e.return, g);
                      }
                    }
                  } else if (6 === d.tag) {
                    if (null === f)
                      try {
                        d.stateNode.nodeValue = c ? "" : d.memoizedProps;
                      } catch (g) {
                        xs(e, e.return, g);
                      }
                  } else if (
                    ((22 !== d.tag && 23 !== d.tag) ||
                      null === d.memoizedState ||
                      d === e) &&
                    null !== d.child
                  ) {
                    (d.child.return = d), (d = d.child);
                    continue;
                  }
                  if (d === e) break e;
                  for (; null === d.sibling; ) {
                    if (null === d.return || d.return === e) break e;
                    f === d && (f = null), (d = d.return);
                  }
                  f === d && (f = null),
                    (d.sibling.return = d.return),
                    (d = d.sibling);
                }
              }
              break;
            case 19:
              mu(n, e), vu(e), 4 & r && hu(e);
            case 21:
          }
        }
        function vu(e) {
          var n = e.flags;
          if (2 & n) {
            try {
              e: {
                for (var t = e.return; null !== t; ) {
                  if (lu(t)) {
                    var r = t;
                    break e;
                  }
                  t = t.return;
                }
                throw Error(o(160));
              }
              switch (r.tag) {
                case 5:
                  var a = r.stateNode;
                  32 & r.flags && (de(a, ""), (r.flags &= -33)),
                    su(e, iu(e), a);
                  break;
                case 3:
                case 4:
                  var l = r.stateNode.containerInfo;
                  uu(e, iu(e), l);
                  break;
                default:
                  throw Error(o(161));
              }
            } catch (i) {
              xs(e, e.return, i);
            }
            e.flags &= -3;
          }
          4096 & n && (e.flags &= -4097);
        }
        function yu(e, n, t) {
          (Ji = e), bu(e, n, t);
        }
        function bu(e, n, t) {
          for (var r = 0 !== (1 & e.mode); null !== Ji; ) {
            var a = Ji,
              o = a.child;
            if (22 === a.tag && r) {
              var l = null !== a.memoizedState || qi;
              if (!l) {
                var i = a.alternate,
                  u = (null !== i && null !== i.memoizedState) || Gi;
                i = qi;
                var s = Gi;
                if (((qi = l), (Gi = u) && !s))
                  for (Ji = a; null !== Ji; )
                    (u = (l = Ji).child),
                      22 === l.tag && null !== l.memoizedState
                        ? Su(a)
                        : null !== u
                        ? ((u.return = l), (Ji = u))
                        : Su(a);
                for (; null !== o; ) (Ji = o), bu(o, n, t), (o = o.sibling);
                (Ji = a), (qi = i), (Gi = s);
              }
              wu(e);
            } else
              0 !== (8772 & a.subtreeFlags) && null !== o
                ? ((o.return = a), (Ji = o))
                : wu(e);
          }
        }
        function wu(e) {
          for (; null !== Ji; ) {
            var n = Ji;
            if (0 !== (8772 & n.flags)) {
              var t = n.alternate;
              try {
                if (0 !== (8772 & n.flags))
                  switch (n.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Gi || ru(5, n);
                      break;
                    case 1:
                      var r = n.stateNode;
                      if (4 & n.flags && !Gi)
                        if (null === t) r.componentDidMount();
                        else {
                          var a =
                            n.elementType === n.type
                              ? t.memoizedProps
                              : ti(n.type, t.memoizedProps);
                          r.componentDidUpdate(
                            a,
                            t.memoizedState,
                            r.__reactInternalSnapshotBeforeUpdate
                          );
                        }
                      var l = n.updateQueue;
                      null !== l && Vo(n, l, r);
                      break;
                    case 3:
                      var i = n.updateQueue;
                      if (null !== i) {
                        if (((t = null), null !== n.child))
                          switch (n.child.tag) {
                            case 5:
                            case 1:
                              t = n.child.stateNode;
                          }
                        Vo(n, i, t);
                      }
                      break;
                    case 5:
                      var u = n.stateNode;
                      if (null === t && 4 & n.flags) {
                        t = u;
                        var s = n.memoizedProps;
                        switch (n.type) {
                          case "button":
                          case "input":
                          case "select":
                          case "textarea":
                            s.autoFocus && t.focus();
                            break;
                          case "img":
                            s.src && (t.src = s.src);
                        }
                      }
                      break;
                    case 6:
                    case 4:
                    case 12:
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                      break;
                    case 13:
                      if (null === n.memoizedState) {
                        var c = n.alternate;
                        if (null !== c) {
                          var f = c.memoizedState;
                          if (null !== f) {
                            var d = f.dehydrated;
                            null !== d && Bn(d);
                          }
                        }
                      }
                      break;
                    default:
                      throw Error(o(163));
                  }
                Gi || (512 & n.flags && au(n));
              } catch (p) {
                xs(n, n.return, p);
              }
            }
            if (n === e) {
              Ji = null;
              break;
            }
            if (null !== (t = n.sibling)) {
              (t.return = n.return), (Ji = t);
              break;
            }
            Ji = n.return;
          }
        }
        function ku(e) {
          for (; null !== Ji; ) {
            var n = Ji;
            if (n === e) {
              Ji = null;
              break;
            }
            var t = n.sibling;
            if (null !== t) {
              (t.return = n.return), (Ji = t);
              break;
            }
            Ji = n.return;
          }
        }
        function Su(e) {
          for (; null !== Ji; ) {
            var n = Ji;
            try {
              switch (n.tag) {
                case 0:
                case 11:
                case 15:
                  var t = n.return;
                  try {
                    ru(4, n);
                  } catch (u) {
                    xs(n, t, u);
                  }
                  break;
                case 1:
                  var r = n.stateNode;
                  if ("function" === typeof r.componentDidMount) {
                    var a = n.return;
                    try {
                      r.componentDidMount();
                    } catch (u) {
                      xs(n, a, u);
                    }
                  }
                  var o = n.return;
                  try {
                    au(n);
                  } catch (u) {
                    xs(n, o, u);
                  }
                  break;
                case 5:
                  var l = n.return;
                  try {
                    au(n);
                  } catch (u) {
                    xs(n, l, u);
                  }
              }
            } catch (u) {
              xs(n, n.return, u);
            }
            if (n === e) {
              Ji = null;
              break;
            }
            var i = n.sibling;
            if (null !== i) {
              (i.return = n.return), (Ji = i);
              break;
            }
            Ji = n.return;
          }
        }
        var Eu,
          xu = Math.ceil,
          Cu = w.ReactCurrentDispatcher,
          _u = w.ReactCurrentOwner,
          Nu = w.ReactCurrentBatchConfig,
          Tu = 0,
          Ou = null,
          Iu = null,
          Pu = 0,
          Ru = 0,
          Lu = xa(0),
          zu = 0,
          Mu = null,
          Au = 0,
          Fu = 0,
          Du = 0,
          ju = null,
          Uu = null,
          $u = 0,
          Hu = 1 / 0,
          Bu = null,
          Vu = !1,
          Wu = null,
          Yu = null,
          Qu = !1,
          Ku = null,
          qu = 0,
          Gu = 0,
          Xu = null,
          Ju = -1,
          Zu = 0;
        function es() {
          return 0 !== (6 & Tu) ? Xe() : -1 !== Ju ? Ju : (Ju = Xe());
        }
        function ns(e) {
          return 0 === (1 & e.mode)
            ? 1
            : 0 !== (2 & Tu) && 0 !== Pu
            ? Pu & -Pu
            : null !== go.transition
            ? (0 === Zu && (Zu = gn()), Zu)
            : 0 !== (e = wn)
            ? e
            : (e = void 0 === (e = window.event) ? 16 : Xn(e.type));
        }
        function ts(e, n, t, r) {
          if (50 < Gu) throw ((Gu = 0), (Xu = null), Error(o(185)));
          yn(e, t, r),
            (0 !== (2 & Tu) && e === Ou) ||
              (e === Ou && (0 === (2 & Tu) && (Fu |= t), 4 === zu && is(e, Pu)),
              rs(e, r),
              1 === t &&
                0 === Tu &&
                0 === (1 & n.mode) &&
                ((Hu = Xe() + 500), ja && Ha()));
        }
        function rs(e, n) {
          var t = e.callbackNode;
          !(function (e, n) {
            for (
              var t = e.suspendedLanes,
                r = e.pingedLanes,
                a = e.expirationTimes,
                o = e.pendingLanes;
              0 < o;

            ) {
              var l = 31 - ln(o),
                i = 1 << l,
                u = a[l];
              -1 === u
                ? (0 !== (i & t) && 0 === (i & r)) || (a[l] = hn(i, n))
                : u <= n && (e.expiredLanes |= i),
                (o &= ~i);
            }
          })(e, n);
          var r = pn(e, e === Ou ? Pu : 0);
          if (0 === r)
            null !== t && Ke(t),
              (e.callbackNode = null),
              (e.callbackPriority = 0);
          else if (((n = r & -r), e.callbackPriority !== n)) {
            if ((null != t && Ke(t), 1 === n))
              0 === e.tag
                ? (function (e) {
                    (ja = !0), $a(e);
                  })(us.bind(null, e))
                : $a(us.bind(null, e)),
                la(function () {
                  0 === (6 & Tu) && Ha();
                }),
                (t = null);
            else {
              switch (kn(r)) {
                case 1:
                  t = Ze;
                  break;
                case 4:
                  t = en;
                  break;
                case 16:
                default:
                  t = nn;
                  break;
                case 536870912:
                  t = rn;
              }
              t = Os(t, as.bind(null, e));
            }
            (e.callbackPriority = n), (e.callbackNode = t);
          }
        }
        function as(e, n) {
          if (((Ju = -1), (Zu = 0), 0 !== (6 & Tu))) throw Error(o(327));
          var t = e.callbackNode;
          if (Ss() && e.callbackNode !== t) return null;
          var r = pn(e, e === Ou ? Pu : 0);
          if (0 === r) return null;
          if (0 !== (30 & r) || 0 !== (r & e.expiredLanes) || n) n = gs(e, r);
          else {
            n = r;
            var a = Tu;
            Tu |= 2;
            var l = hs();
            for (
              (Ou === e && Pu === n) ||
              ((Bu = null), (Hu = Xe() + 500), ds(e, n));
              ;

            )
              try {
                ys();
                break;
              } catch (u) {
                ps(e, u);
              }
            No(),
              (Cu.current = l),
              (Tu = a),
              null !== Iu ? (n = 0) : ((Ou = null), (Pu = 0), (n = zu));
          }
          if (0 !== n) {
            if (
              (2 === n && 0 !== (a = mn(e)) && ((r = a), (n = os(e, a))),
              1 === n)
            )
              throw ((t = Mu), ds(e, 0), is(e, r), rs(e, Xe()), t);
            if (6 === n) is(e, r);
            else {
              if (
                ((a = e.current.alternate),
                0 === (30 & r) &&
                  !(function (e) {
                    for (var n = e; ; ) {
                      if (16384 & n.flags) {
                        var t = n.updateQueue;
                        if (null !== t && null !== (t = t.stores))
                          for (var r = 0; r < t.length; r++) {
                            var a = t[r],
                              o = a.getSnapshot;
                            a = a.value;
                            try {
                              if (!ir(o(), a)) return !1;
                            } catch (i) {
                              return !1;
                            }
                          }
                      }
                      if (((t = n.child), 16384 & n.subtreeFlags && null !== t))
                        (t.return = n), (n = t);
                      else {
                        if (n === e) break;
                        for (; null === n.sibling; ) {
                          if (null === n.return || n.return === e) return !0;
                          n = n.return;
                        }
                        (n.sibling.return = n.return), (n = n.sibling);
                      }
                    }
                    return !0;
                  })(a) &&
                  (2 === (n = gs(e, r)) &&
                    0 !== (l = mn(e)) &&
                    ((r = l), (n = os(e, l))),
                  1 === n))
              )
                throw ((t = Mu), ds(e, 0), is(e, r), rs(e, Xe()), t);
              switch (((e.finishedWork = a), (e.finishedLanes = r), n)) {
                case 0:
                case 1:
                  throw Error(o(345));
                case 2:
                case 5:
                  ks(e, Uu, Bu);
                  break;
                case 3:
                  if (
                    (is(e, r),
                    (130023424 & r) === r && 10 < (n = $u + 500 - Xe()))
                  ) {
                    if (0 !== pn(e, 0)) break;
                    if (((a = e.suspendedLanes) & r) !== r) {
                      es(), (e.pingedLanes |= e.suspendedLanes & a);
                      break;
                    }
                    e.timeoutHandle = ra(ks.bind(null, e, Uu, Bu), n);
                    break;
                  }
                  ks(e, Uu, Bu);
                  break;
                case 4:
                  if ((is(e, r), (4194240 & r) === r)) break;
                  for (n = e.eventTimes, a = -1; 0 < r; ) {
                    var i = 31 - ln(r);
                    (l = 1 << i), (i = n[i]) > a && (a = i), (r &= ~l);
                  }
                  if (
                    ((r = a),
                    10 <
                      (r =
                        (120 > (r = Xe() - r)
                          ? 120
                          : 480 > r
                          ? 480
                          : 1080 > r
                          ? 1080
                          : 1920 > r
                          ? 1920
                          : 3e3 > r
                          ? 3e3
                          : 4320 > r
                          ? 4320
                          : 1960 * xu(r / 1960)) - r))
                  ) {
                    e.timeoutHandle = ra(ks.bind(null, e, Uu, Bu), r);
                    break;
                  }
                  ks(e, Uu, Bu);
                  break;
                default:
                  throw Error(o(329));
              }
            }
          }
          return rs(e, Xe()), e.callbackNode === t ? as.bind(null, e) : null;
        }
        function os(e, n) {
          var t = ju;
          return (
            e.current.memoizedState.isDehydrated && (ds(e, n).flags |= 256),
            2 !== (e = gs(e, n)) && ((n = Uu), (Uu = t), null !== n && ls(n)),
            e
          );
        }
        function ls(e) {
          null === Uu ? (Uu = e) : Uu.push.apply(Uu, e);
        }
        function is(e, n) {
          for (
            n &= ~Du,
              n &= ~Fu,
              e.suspendedLanes |= n,
              e.pingedLanes &= ~n,
              e = e.expirationTimes;
            0 < n;

          ) {
            var t = 31 - ln(n),
              r = 1 << t;
            (e[t] = -1), (n &= ~r);
          }
        }
        function us(e) {
          if (0 !== (6 & Tu)) throw Error(o(327));
          Ss();
          var n = pn(e, 0);
          if (0 === (1 & n)) return rs(e, Xe()), null;
          var t = gs(e, n);
          if (0 !== e.tag && 2 === t) {
            var r = mn(e);
            0 !== r && ((n = r), (t = os(e, r)));
          }
          if (1 === t) throw ((t = Mu), ds(e, 0), is(e, n), rs(e, Xe()), t);
          if (6 === t) throw Error(o(345));
          return (
            (e.finishedWork = e.current.alternate),
            (e.finishedLanes = n),
            ks(e, Uu, Bu),
            rs(e, Xe()),
            null
          );
        }
        function ss(e, n) {
          var t = Tu;
          Tu |= 1;
          try {
            return e(n);
          } finally {
            0 === (Tu = t) && ((Hu = Xe() + 500), ja && Ha());
          }
        }
        function cs(e) {
          null !== Ku && 0 === Ku.tag && 0 === (6 & Tu) && Ss();
          var n = Tu;
          Tu |= 1;
          var t = Nu.transition,
            r = wn;
          try {
            if (((Nu.transition = null), (wn = 1), e)) return e();
          } finally {
            (wn = r), (Nu.transition = t), 0 === (6 & (Tu = n)) && Ha();
          }
        }
        function fs() {
          (Ru = Lu.current), Ca(Lu);
        }
        function ds(e, n) {
          (e.finishedWork = null), (e.finishedLanes = 0);
          var t = e.timeoutHandle;
          if ((-1 !== t && ((e.timeoutHandle = -1), aa(t)), null !== Iu))
            for (t = Iu.return; null !== t; ) {
              var r = t;
              switch ((no(r), r.tag)) {
                case 1:
                  null !== (r = r.type.childContextTypes) &&
                    void 0 !== r &&
                    La();
                  break;
                case 3:
                  Xo(), Ca(Oa), Ca(Ta), rl();
                  break;
                case 5:
                  Zo(r);
                  break;
                case 4:
                  Xo();
                  break;
                case 13:
                case 19:
                  Ca(el);
                  break;
                case 10:
                  To(r.type._context);
                  break;
                case 22:
                case 23:
                  fs();
              }
              t = t.return;
            }
          if (
            ((Ou = e),
            (Iu = e = Ls(e.current, null)),
            (Pu = Ru = n),
            (zu = 0),
            (Mu = null),
            (Du = Fu = Au = 0),
            (Uu = ju = null),
            null !== Ro)
          ) {
            for (n = 0; n < Ro.length; n++)
              if (null !== (r = (t = Ro[n]).interleaved)) {
                t.interleaved = null;
                var a = r.next,
                  o = t.pending;
                if (null !== o) {
                  var l = o.next;
                  (o.next = a), (r.next = l);
                }
                t.pending = r;
              }
            Ro = null;
          }
          return e;
        }
        function ps(e, n) {
          for (;;) {
            var t = Iu;
            try {
              if ((No(), (al.current = Jl), cl)) {
                for (var r = il.memoizedState; null !== r; ) {
                  var a = r.queue;
                  null !== a && (a.pending = null), (r = r.next);
                }
                cl = !1;
              }
              if (
                ((ll = 0),
                (sl = ul = il = null),
                (fl = !1),
                (dl = 0),
                (_u.current = null),
                null === t || null === t.return)
              ) {
                (zu = 1), (Mu = n), (Iu = null);
                break;
              }
              e: {
                var l = e,
                  i = t.return,
                  u = t,
                  s = n;
                if (
                  ((n = Pu),
                  (u.flags |= 32768),
                  null !== s &&
                    "object" === typeof s &&
                    "function" === typeof s.then)
                ) {
                  var c = s,
                    f = u,
                    d = f.tag;
                  if (0 === (1 & f.mode) && (0 === d || 11 === d || 15 === d)) {
                    var p = f.alternate;
                    p
                      ? ((f.updateQueue = p.updateQueue),
                        (f.memoizedState = p.memoizedState),
                        (f.lanes = p.lanes))
                      : ((f.updateQueue = null), (f.memoizedState = null));
                  }
                  var h = gi(i);
                  if (null !== h) {
                    (h.flags &= -257),
                      vi(h, i, u, 0, n),
                      1 & h.mode && mi(l, c, n),
                      (s = c);
                    var m = (n = h).updateQueue;
                    if (null === m) {
                      var g = new Set();
                      g.add(s), (n.updateQueue = g);
                    } else m.add(s);
                    break e;
                  }
                  if (0 === (1 & n)) {
                    mi(l, c, n), ms();
                    break e;
                  }
                  s = Error(o(426));
                } else if (ao && 1 & u.mode) {
                  var v = gi(i);
                  if (null !== v) {
                    0 === (65536 & v.flags) && (v.flags |= 256),
                      vi(v, i, u, 0, n),
                      mo(si(s, u));
                    break e;
                  }
                }
                (l = s = si(s, u)),
                  4 !== zu && (zu = 2),
                  null === ju ? (ju = [l]) : ju.push(l),
                  (l = i);
                do {
                  switch (l.tag) {
                    case 3:
                      (l.flags |= 65536),
                        (n &= -n),
                        (l.lanes |= n),
                        Ho(l, pi(0, s, n));
                      break e;
                    case 1:
                      u = s;
                      var y = l.type,
                        b = l.stateNode;
                      if (
                        0 === (128 & l.flags) &&
                        ("function" === typeof y.getDerivedStateFromError ||
                          (null !== b &&
                            "function" === typeof b.componentDidCatch &&
                            (null === Yu || !Yu.has(b))))
                      ) {
                        (l.flags |= 65536),
                          (n &= -n),
                          (l.lanes |= n),
                          Ho(l, hi(l, u, n));
                        break e;
                      }
                  }
                  l = l.return;
                } while (null !== l);
              }
              ws(t);
            } catch (w) {
              (n = w), Iu === t && null !== t && (Iu = t = t.return);
              continue;
            }
            break;
          }
        }
        function hs() {
          var e = Cu.current;
          return (Cu.current = Jl), null === e ? Jl : e;
        }
        function ms() {
          (0 !== zu && 3 !== zu && 2 !== zu) || (zu = 4),
            null === Ou ||
              (0 === (268435455 & Au) && 0 === (268435455 & Fu)) ||
              is(Ou, Pu);
        }
        function gs(e, n) {
          var t = Tu;
          Tu |= 2;
          var r = hs();
          for ((Ou === e && Pu === n) || ((Bu = null), ds(e, n)); ; )
            try {
              vs();
              break;
            } catch (a) {
              ps(e, a);
            }
          if ((No(), (Tu = t), (Cu.current = r), null !== Iu))
            throw Error(o(261));
          return (Ou = null), (Pu = 0), zu;
        }
        function vs() {
          for (; null !== Iu; ) bs(Iu);
        }
        function ys() {
          for (; null !== Iu && !qe(); ) bs(Iu);
        }
        function bs(e) {
          var n = Eu(e.alternate, e, Ru);
          (e.memoizedProps = e.pendingProps),
            null === n ? ws(e) : (Iu = n),
            (_u.current = null);
        }
        function ws(e) {
          var n = e;
          do {
            var t = n.alternate;
            if (((e = n.return), 0 === (32768 & n.flags))) {
              if (null !== (t = Qi(t, n, Ru))) return void (Iu = t);
            } else {
              if (null !== (t = Ki(t, n)))
                return (t.flags &= 32767), void (Iu = t);
              if (null === e) return (zu = 6), void (Iu = null);
              (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
            }
            if (null !== (n = n.sibling)) return void (Iu = n);
            Iu = n = e;
          } while (null !== n);
          0 === zu && (zu = 5);
        }
        function ks(e, n, t) {
          var r = wn,
            a = Nu.transition;
          try {
            (Nu.transition = null),
              (wn = 1),
              (function (e, n, t, r) {
                do {
                  Ss();
                } while (null !== Ku);
                if (0 !== (6 & Tu)) throw Error(o(327));
                t = e.finishedWork;
                var a = e.finishedLanes;
                if (null === t) return null;
                if (
                  ((e.finishedWork = null),
                  (e.finishedLanes = 0),
                  t === e.current)
                )
                  throw Error(o(177));
                (e.callbackNode = null), (e.callbackPriority = 0);
                var l = t.lanes | t.childLanes;
                if (
                  ((function (e, n) {
                    var t = e.pendingLanes & ~n;
                    (e.pendingLanes = n),
                      (e.suspendedLanes = 0),
                      (e.pingedLanes = 0),
                      (e.expiredLanes &= n),
                      (e.mutableReadLanes &= n),
                      (e.entangledLanes &= n),
                      (n = e.entanglements);
                    var r = e.eventTimes;
                    for (e = e.expirationTimes; 0 < t; ) {
                      var a = 31 - ln(t),
                        o = 1 << a;
                      (n[a] = 0), (r[a] = -1), (e[a] = -1), (t &= ~o);
                    }
                  })(e, l),
                  e === Ou && ((Iu = Ou = null), (Pu = 0)),
                  (0 === (2064 & t.subtreeFlags) && 0 === (2064 & t.flags)) ||
                    Qu ||
                    ((Qu = !0),
                    Os(nn, function () {
                      return Ss(), null;
                    })),
                  (l = 0 !== (15990 & t.flags)),
                  0 !== (15990 & t.subtreeFlags) || l)
                ) {
                  (l = Nu.transition), (Nu.transition = null);
                  var i = wn;
                  wn = 1;
                  var u = Tu;
                  (Tu |= 4),
                    (_u.current = null),
                    (function (e, n) {
                      if (((ea = Wn), pr((e = dr())))) {
                        if ("selectionStart" in e)
                          var t = {
                            start: e.selectionStart,
                            end: e.selectionEnd,
                          };
                        else
                          e: {
                            var r =
                              (t =
                                ((t = e.ownerDocument) && t.defaultView) ||
                                window).getSelection && t.getSelection();
                            if (r && 0 !== r.rangeCount) {
                              t = r.anchorNode;
                              var a = r.anchorOffset,
                                l = r.focusNode;
                              r = r.focusOffset;
                              try {
                                t.nodeType, l.nodeType;
                              } catch (k) {
                                t = null;
                                break e;
                              }
                              var i = 0,
                                u = -1,
                                s = -1,
                                c = 0,
                                f = 0,
                                d = e,
                                p = null;
                              n: for (;;) {
                                for (
                                  var h;
                                  d !== t ||
                                    (0 !== a && 3 !== d.nodeType) ||
                                    (u = i + a),
                                    d !== l ||
                                      (0 !== r && 3 !== d.nodeType) ||
                                      (s = i + r),
                                    3 === d.nodeType &&
                                      (i += d.nodeValue.length),
                                    null !== (h = d.firstChild);

                                )
                                  (p = d), (d = h);
                                for (;;) {
                                  if (d === e) break n;
                                  if (
                                    (p === t && ++c === a && (u = i),
                                    p === l && ++f === r && (s = i),
                                    null !== (h = d.nextSibling))
                                  )
                                    break;
                                  p = (d = p).parentNode;
                                }
                                d = h;
                              }
                              t =
                                -1 === u || -1 === s
                                  ? null
                                  : { start: u, end: s };
                            } else t = null;
                          }
                        t = t || { start: 0, end: 0 };
                      } else t = null;
                      for (
                        na = { focusedElem: e, selectionRange: t },
                          Wn = !1,
                          Ji = n;
                        null !== Ji;

                      )
                        if (
                          ((e = (n = Ji).child),
                          0 !== (1028 & n.subtreeFlags) && null !== e)
                        )
                          (e.return = n), (Ji = e);
                        else
                          for (; null !== Ji; ) {
                            n = Ji;
                            try {
                              var m = n.alternate;
                              if (0 !== (1024 & n.flags))
                                switch (n.tag) {
                                  case 0:
                                  case 11:
                                  case 15:
                                  case 5:
                                  case 6:
                                  case 4:
                                  case 17:
                                    break;
                                  case 1:
                                    if (null !== m) {
                                      var g = m.memoizedProps,
                                        v = m.memoizedState,
                                        y = n.stateNode,
                                        b = y.getSnapshotBeforeUpdate(
                                          n.elementType === n.type
                                            ? g
                                            : ti(n.type, g),
                                          v
                                        );
                                      y.__reactInternalSnapshotBeforeUpdate = b;
                                    }
                                    break;
                                  case 3:
                                    var w = n.stateNode.containerInfo;
                                    1 === w.nodeType
                                      ? (w.textContent = "")
                                      : 9 === w.nodeType &&
                                        w.documentElement &&
                                        w.removeChild(w.documentElement);
                                    break;
                                  default:
                                    throw Error(o(163));
                                }
                            } catch (k) {
                              xs(n, n.return, k);
                            }
                            if (null !== (e = n.sibling)) {
                              (e.return = n.return), (Ji = e);
                              break;
                            }
                            Ji = n.return;
                          }
                      (m = nu), (nu = !1);
                    })(e, t),
                    gu(t, e),
                    hr(na),
                    (Wn = !!ea),
                    (na = ea = null),
                    (e.current = t),
                    yu(t, e, a),
                    Ge(),
                    (Tu = u),
                    (wn = i),
                    (Nu.transition = l);
                } else e.current = t;
                if (
                  (Qu && ((Qu = !1), (Ku = e), (qu = a)),
                  (l = e.pendingLanes),
                  0 === l && (Yu = null),
                  (function (e) {
                    if (on && "function" === typeof on.onCommitFiberRoot)
                      try {
                        on.onCommitFiberRoot(
                          an,
                          e,
                          void 0,
                          128 === (128 & e.current.flags)
                        );
                      } catch (n) {}
                  })(t.stateNode),
                  rs(e, Xe()),
                  null !== n)
                )
                  for (r = e.onRecoverableError, t = 0; t < n.length; t++)
                    (a = n[t]),
                      r(a.value, { componentStack: a.stack, digest: a.digest });
                if (Vu) throw ((Vu = !1), (e = Wu), (Wu = null), e);
                0 !== (1 & qu) && 0 !== e.tag && Ss(),
                  (l = e.pendingLanes),
                  0 !== (1 & l)
                    ? e === Xu
                      ? Gu++
                      : ((Gu = 0), (Xu = e))
                    : (Gu = 0),
                  Ha();
              })(e, n, t, r);
          } finally {
            (Nu.transition = a), (wn = r);
          }
          return null;
        }
        function Ss() {
          if (null !== Ku) {
            var e = kn(qu),
              n = Nu.transition,
              t = wn;
            try {
              if (((Nu.transition = null), (wn = 16 > e ? 16 : e), null === Ku))
                var r = !1;
              else {
                if (((e = Ku), (Ku = null), (qu = 0), 0 !== (6 & Tu)))
                  throw Error(o(331));
                var a = Tu;
                for (Tu |= 4, Ji = e.current; null !== Ji; ) {
                  var l = Ji,
                    i = l.child;
                  if (0 !== (16 & Ji.flags)) {
                    var u = l.deletions;
                    if (null !== u) {
                      for (var s = 0; s < u.length; s++) {
                        var c = u[s];
                        for (Ji = c; null !== Ji; ) {
                          var f = Ji;
                          switch (f.tag) {
                            case 0:
                            case 11:
                            case 15:
                              tu(8, f, l);
                          }
                          var d = f.child;
                          if (null !== d) (d.return = f), (Ji = d);
                          else
                            for (; null !== Ji; ) {
                              var p = (f = Ji).sibling,
                                h = f.return;
                              if ((ou(f), f === c)) {
                                Ji = null;
                                break;
                              }
                              if (null !== p) {
                                (p.return = h), (Ji = p);
                                break;
                              }
                              Ji = h;
                            }
                        }
                      }
                      var m = l.alternate;
                      if (null !== m) {
                        var g = m.child;
                        if (null !== g) {
                          m.child = null;
                          do {
                            var v = g.sibling;
                            (g.sibling = null), (g = v);
                          } while (null !== g);
                        }
                      }
                      Ji = l;
                    }
                  }
                  if (0 !== (2064 & l.subtreeFlags) && null !== i)
                    (i.return = l), (Ji = i);
                  else
                    e: for (; null !== Ji; ) {
                      if (0 !== (2048 & (l = Ji).flags))
                        switch (l.tag) {
                          case 0:
                          case 11:
                          case 15:
                            tu(9, l, l.return);
                        }
                      var y = l.sibling;
                      if (null !== y) {
                        (y.return = l.return), (Ji = y);
                        break e;
                      }
                      Ji = l.return;
                    }
                }
                var b = e.current;
                for (Ji = b; null !== Ji; ) {
                  var w = (i = Ji).child;
                  if (0 !== (2064 & i.subtreeFlags) && null !== w)
                    (w.return = i), (Ji = w);
                  else
                    e: for (i = b; null !== Ji; ) {
                      if (0 !== (2048 & (u = Ji).flags))
                        try {
                          switch (u.tag) {
                            case 0:
                            case 11:
                            case 15:
                              ru(9, u);
                          }
                        } catch (S) {
                          xs(u, u.return, S);
                        }
                      if (u === i) {
                        Ji = null;
                        break e;
                      }
                      var k = u.sibling;
                      if (null !== k) {
                        (k.return = u.return), (Ji = k);
                        break e;
                      }
                      Ji = u.return;
                    }
                }
                if (
                  ((Tu = a),
                  Ha(),
                  on && "function" === typeof on.onPostCommitFiberRoot)
                )
                  try {
                    on.onPostCommitFiberRoot(an, e);
                  } catch (S) {}
                r = !0;
              }
              return r;
            } finally {
              (wn = t), (Nu.transition = n);
            }
          }
          return !1;
        }
        function Es(e, n, t) {
          (e = Uo(e, (n = pi(0, (n = si(t, n)), 1)), 1)),
            (n = es()),
            null !== e && (yn(e, 1, n), rs(e, n));
        }
        function xs(e, n, t) {
          if (3 === e.tag) Es(e, e, t);
          else
            for (; null !== n; ) {
              if (3 === n.tag) {
                Es(n, e, t);
                break;
              }
              if (1 === n.tag) {
                var r = n.stateNode;
                if (
                  "function" === typeof n.type.getDerivedStateFromError ||
                  ("function" === typeof r.componentDidCatch &&
                    (null === Yu || !Yu.has(r)))
                ) {
                  (n = Uo(n, (e = hi(n, (e = si(t, e)), 1)), 1)),
                    (e = es()),
                    null !== n && (yn(n, 1, e), rs(n, e));
                  break;
                }
              }
              n = n.return;
            }
        }
        function Cs(e, n, t) {
          var r = e.pingCache;
          null !== r && r.delete(n),
            (n = es()),
            (e.pingedLanes |= e.suspendedLanes & t),
            Ou === e &&
              (Pu & t) === t &&
              (4 === zu ||
              (3 === zu && (130023424 & Pu) === Pu && 500 > Xe() - $u)
                ? ds(e, 0)
                : (Du |= t)),
            rs(e, n);
        }
        function _s(e, n) {
          0 === n &&
            (0 === (1 & e.mode)
              ? (n = 1)
              : ((n = fn), 0 === (130023424 & (fn <<= 1)) && (fn = 4194304)));
          var t = es();
          null !== (e = Mo(e, n)) && (yn(e, n, t), rs(e, t));
        }
        function Ns(e) {
          var n = e.memoizedState,
            t = 0;
          null !== n && (t = n.retryLane), _s(e, t);
        }
        function Ts(e, n) {
          var t = 0;
          switch (e.tag) {
            case 13:
              var r = e.stateNode,
                a = e.memoizedState;
              null !== a && (t = a.retryLane);
              break;
            case 19:
              r = e.stateNode;
              break;
            default:
              throw Error(o(314));
          }
          null !== r && r.delete(n), _s(e, t);
        }
        function Os(e, n) {
          return Qe(e, n);
        }
        function Is(e, n, t, r) {
          (this.tag = e),
            (this.key = t),
            (this.sibling =
              this.child =
              this.return =
              this.stateNode =
              this.type =
              this.elementType =
                null),
            (this.index = 0),
            (this.ref = null),
            (this.pendingProps = n),
            (this.dependencies =
              this.memoizedState =
              this.updateQueue =
              this.memoizedProps =
                null),
            (this.mode = r),
            (this.subtreeFlags = this.flags = 0),
            (this.deletions = null),
            (this.childLanes = this.lanes = 0),
            (this.alternate = null);
        }
        function Ps(e, n, t, r) {
          return new Is(e, n, t, r);
        }
        function Rs(e) {
          return !(!(e = e.prototype) || !e.isReactComponent);
        }
        function Ls(e, n) {
          var t = e.alternate;
          return (
            null === t
              ? (((t = Ps(e.tag, n, e.key, e.mode)).elementType =
                  e.elementType),
                (t.type = e.type),
                (t.stateNode = e.stateNode),
                (t.alternate = e),
                (e.alternate = t))
              : ((t.pendingProps = n),
                (t.type = e.type),
                (t.flags = 0),
                (t.subtreeFlags = 0),
                (t.deletions = null)),
            (t.flags = 14680064 & e.flags),
            (t.childLanes = e.childLanes),
            (t.lanes = e.lanes),
            (t.child = e.child),
            (t.memoizedProps = e.memoizedProps),
            (t.memoizedState = e.memoizedState),
            (t.updateQueue = e.updateQueue),
            (n = e.dependencies),
            (t.dependencies =
              null === n
                ? null
                : { lanes: n.lanes, firstContext: n.firstContext }),
            (t.sibling = e.sibling),
            (t.index = e.index),
            (t.ref = e.ref),
            t
          );
        }
        function zs(e, n, t, r, a, l) {
          var i = 2;
          if (((r = e), "function" === typeof e)) Rs(e) && (i = 1);
          else if ("string" === typeof e) i = 5;
          else
            e: switch (e) {
              case E:
                return Ms(t.children, a, l, n);
              case x:
                (i = 8), (a |= 8);
                break;
              case C:
                return (
                  ((e = Ps(12, t, n, 2 | a)).elementType = C), (e.lanes = l), e
                );
              case O:
                return (
                  ((e = Ps(13, t, n, a)).elementType = O), (e.lanes = l), e
                );
              case I:
                return (
                  ((e = Ps(19, t, n, a)).elementType = I), (e.lanes = l), e
                );
              case L:
                return As(t, a, l, n);
              default:
                if ("object" === typeof e && null !== e)
                  switch (e.$$typeof) {
                    case _:
                      i = 10;
                      break e;
                    case N:
                      i = 9;
                      break e;
                    case T:
                      i = 11;
                      break e;
                    case P:
                      i = 14;
                      break e;
                    case R:
                      (i = 16), (r = null);
                      break e;
                  }
                throw Error(o(130, null == e ? e : typeof e, ""));
            }
          return (
            ((n = Ps(i, t, n, a)).elementType = e),
            (n.type = r),
            (n.lanes = l),
            n
          );
        }
        function Ms(e, n, t, r) {
          return ((e = Ps(7, e, r, n)).lanes = t), e;
        }
        function As(e, n, t, r) {
          return (
            ((e = Ps(22, e, r, n)).elementType = L),
            (e.lanes = t),
            (e.stateNode = { isHidden: !1 }),
            e
          );
        }
        function Fs(e, n, t) {
          return ((e = Ps(6, e, null, n)).lanes = t), e;
        }
        function Ds(e, n, t) {
          return (
            ((n = Ps(
              4,
              null !== e.children ? e.children : [],
              e.key,
              n
            )).lanes = t),
            (n.stateNode = {
              containerInfo: e.containerInfo,
              pendingChildren: null,
              implementation: e.implementation,
            }),
            n
          );
        }
        function js(e, n, t, r, a) {
          (this.tag = n),
            (this.containerInfo = e),
            (this.finishedWork =
              this.pingCache =
              this.current =
              this.pendingChildren =
                null),
            (this.timeoutHandle = -1),
            (this.callbackNode = this.pendingContext = this.context = null),
            (this.callbackPriority = 0),
            (this.eventTimes = vn(0)),
            (this.expirationTimes = vn(-1)),
            (this.entangledLanes =
              this.finishedLanes =
              this.mutableReadLanes =
              this.expiredLanes =
              this.pingedLanes =
              this.suspendedLanes =
              this.pendingLanes =
                0),
            (this.entanglements = vn(0)),
            (this.identifierPrefix = r),
            (this.onRecoverableError = a),
            (this.mutableSourceEagerHydrationData = null);
        }
        function Us(e, n, t, r, a, o, l, i, u) {
          return (
            (e = new js(e, n, t, i, u)),
            1 === n ? ((n = 1), !0 === o && (n |= 8)) : (n = 0),
            (o = Ps(3, null, null, n)),
            (e.current = o),
            (o.stateNode = e),
            (o.memoizedState = {
              element: r,
              isDehydrated: t,
              cache: null,
              transitions: null,
              pendingSuspenseBoundaries: null,
            }),
            Fo(o),
            e
          );
        }
        function $s(e) {
          if (!e) return Na;
          e: {
            if (He((e = e._reactInternals)) !== e || 1 !== e.tag)
              throw Error(o(170));
            var n = e;
            do {
              switch (n.tag) {
                case 3:
                  n = n.stateNode.context;
                  break e;
                case 1:
                  if (Ra(n.type)) {
                    n = n.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e;
                  }
              }
              n = n.return;
            } while (null !== n);
            throw Error(o(171));
          }
          if (1 === e.tag) {
            var t = e.type;
            if (Ra(t)) return Ma(e, t, n);
          }
          return n;
        }
        function Hs(e, n, t, r, a, o, l, i, u) {
          return (
            ((e = Us(t, r, !0, e, 0, o, 0, i, u)).context = $s(null)),
            (t = e.current),
            ((o = jo((r = es()), (a = ns(t)))).callback =
              void 0 !== n && null !== n ? n : null),
            Uo(t, o, a),
            (e.current.lanes = a),
            yn(e, a, r),
            rs(e, r),
            e
          );
        }
        function Bs(e, n, t, r) {
          var a = n.current,
            o = es(),
            l = ns(a);
          return (
            (t = $s(t)),
            null === n.context ? (n.context = t) : (n.pendingContext = t),
            ((n = jo(o, l)).payload = { element: e }),
            null !== (r = void 0 === r ? null : r) && (n.callback = r),
            null !== (e = Uo(a, n, l)) && (ts(e, a, l, o), $o(e, a, l)),
            l
          );
        }
        function Vs(e) {
          return (e = e.current).child
            ? (e.child.tag, e.child.stateNode)
            : null;
        }
        function Ws(e, n) {
          if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var t = e.retryLane;
            e.retryLane = 0 !== t && t < n ? t : n;
          }
        }
        function Ys(e, n) {
          Ws(e, n), (e = e.alternate) && Ws(e, n);
        }
        Eu = function (e, n, t) {
          if (null !== e)
            if (e.memoizedProps !== n.pendingProps || Oa.current) bi = !0;
            else {
              if (0 === (e.lanes & t) && 0 === (128 & n.flags))
                return (
                  (bi = !1),
                  (function (e, n, t) {
                    switch (n.tag) {
                      case 3:
                        Oi(n), ho();
                        break;
                      case 5:
                        Jo(n);
                        break;
                      case 1:
                        Ra(n.type) && Aa(n);
                        break;
                      case 4:
                        Go(n, n.stateNode.containerInfo);
                        break;
                      case 10:
                        var r = n.type._context,
                          a = n.memoizedProps.value;
                        _a(Eo, r._currentValue), (r._currentValue = a);
                        break;
                      case 13:
                        if (null !== (r = n.memoizedState))
                          return null !== r.dehydrated
                            ? (_a(el, 1 & el.current), (n.flags |= 128), null)
                            : 0 !== (t & n.child.childLanes)
                            ? Fi(e, n, t)
                            : (_a(el, 1 & el.current),
                              null !== (e = Vi(e, n, t)) ? e.sibling : null);
                        _a(el, 1 & el.current);
                        break;
                      case 19:
                        if (
                          ((r = 0 !== (t & n.childLanes)),
                          0 !== (128 & e.flags))
                        ) {
                          if (r) return Hi(e, n, t);
                          n.flags |= 128;
                        }
                        if (
                          (null !== (a = n.memoizedState) &&
                            ((a.rendering = null),
                            (a.tail = null),
                            (a.lastEffect = null)),
                          _a(el, el.current),
                          r)
                        )
                          break;
                        return null;
                      case 22:
                      case 23:
                        return (n.lanes = 0), xi(e, n, t);
                    }
                    return Vi(e, n, t);
                  })(e, n, t)
                );
              bi = 0 !== (131072 & e.flags);
            }
          else (bi = !1), ao && 0 !== (1048576 & n.flags) && Za(n, Ya, n.index);
          switch (((n.lanes = 0), n.tag)) {
            case 2:
              var r = n.type;
              Bi(e, n), (e = n.pendingProps);
              var a = Pa(n, Ta.current);
              Io(n, t), (a = gl(null, n, r, e, a, t));
              var l = vl();
              return (
                (n.flags |= 1),
                "object" === typeof a &&
                null !== a &&
                "function" === typeof a.render &&
                void 0 === a.$$typeof
                  ? ((n.tag = 1),
                    (n.memoizedState = null),
                    (n.updateQueue = null),
                    Ra(r) ? ((l = !0), Aa(n)) : (l = !1),
                    (n.memoizedState =
                      null !== a.state && void 0 !== a.state ? a.state : null),
                    Fo(n),
                    (a.updater = ai),
                    (n.stateNode = a),
                    (a._reactInternals = n),
                    ui(n, r, e, t),
                    (n = Ti(null, n, r, !0, l, t)))
                  : ((n.tag = 0),
                    ao && l && eo(n),
                    wi(null, n, a, t),
                    (n = n.child)),
                n
              );
            case 16:
              r = n.elementType;
              e: {
                switch (
                  (Bi(e, n),
                  (e = n.pendingProps),
                  (r = (a = r._init)(r._payload)),
                  (n.type = r),
                  (a = n.tag =
                    (function (e) {
                      if ("function" === typeof e) return Rs(e) ? 1 : 0;
                      if (void 0 !== e && null !== e) {
                        if ((e = e.$$typeof) === T) return 11;
                        if (e === P) return 14;
                      }
                      return 2;
                    })(r)),
                  (e = ti(r, e)),
                  a)
                ) {
                  case 0:
                    n = _i(null, n, r, e, t);
                    break e;
                  case 1:
                    n = Ni(null, n, r, e, t);
                    break e;
                  case 11:
                    n = ki(null, n, r, e, t);
                    break e;
                  case 14:
                    n = Si(null, n, r, ti(r.type, e), t);
                    break e;
                }
                throw Error(o(306, r, ""));
              }
              return n;
            case 0:
              return (
                (r = n.type),
                (a = n.pendingProps),
                _i(e, n, r, (a = n.elementType === r ? a : ti(r, a)), t)
              );
            case 1:
              return (
                (r = n.type),
                (a = n.pendingProps),
                Ni(e, n, r, (a = n.elementType === r ? a : ti(r, a)), t)
              );
            case 3:
              e: {
                if ((Oi(n), null === e)) throw Error(o(387));
                (r = n.pendingProps),
                  (a = (l = n.memoizedState).element),
                  Do(e, n),
                  Bo(n, r, null, t);
                var i = n.memoizedState;
                if (((r = i.element), l.isDehydrated)) {
                  if (
                    ((l = {
                      element: r,
                      isDehydrated: !1,
                      cache: i.cache,
                      pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
                      transitions: i.transitions,
                    }),
                    (n.updateQueue.baseState = l),
                    (n.memoizedState = l),
                    256 & n.flags)
                  ) {
                    n = Ii(e, n, r, t, (a = si(Error(o(423)), n)));
                    break e;
                  }
                  if (r !== a) {
                    n = Ii(e, n, r, t, (a = si(Error(o(424)), n)));
                    break e;
                  }
                  for (
                    ro = sa(n.stateNode.containerInfo.firstChild),
                      to = n,
                      ao = !0,
                      oo = null,
                      t = So(n, null, r, t),
                      n.child = t;
                    t;

                  )
                    (t.flags = (-3 & t.flags) | 4096), (t = t.sibling);
                } else {
                  if ((ho(), r === a)) {
                    n = Vi(e, n, t);
                    break e;
                  }
                  wi(e, n, r, t);
                }
                n = n.child;
              }
              return n;
            case 5:
              return (
                Jo(n),
                null === e && so(n),
                (r = n.type),
                (a = n.pendingProps),
                (l = null !== e ? e.memoizedProps : null),
                (i = a.children),
                ta(r, a)
                  ? (i = null)
                  : null !== l && ta(r, l) && (n.flags |= 32),
                Ci(e, n),
                wi(e, n, i, t),
                n.child
              );
            case 6:
              return null === e && so(n), null;
            case 13:
              return Fi(e, n, t);
            case 4:
              return (
                Go(n, n.stateNode.containerInfo),
                (r = n.pendingProps),
                null === e ? (n.child = ko(n, null, r, t)) : wi(e, n, r, t),
                n.child
              );
            case 11:
              return (
                (r = n.type),
                (a = n.pendingProps),
                ki(e, n, r, (a = n.elementType === r ? a : ti(r, a)), t)
              );
            case 7:
              return wi(e, n, n.pendingProps, t), n.child;
            case 8:
            case 12:
              return wi(e, n, n.pendingProps.children, t), n.child;
            case 10:
              e: {
                if (
                  ((r = n.type._context),
                  (a = n.pendingProps),
                  (l = n.memoizedProps),
                  (i = a.value),
                  _a(Eo, r._currentValue),
                  (r._currentValue = i),
                  null !== l)
                )
                  if (ir(l.value, i)) {
                    if (l.children === a.children && !Oa.current) {
                      n = Vi(e, n, t);
                      break e;
                    }
                  } else
                    for (
                      null !== (l = n.child) && (l.return = n);
                      null !== l;

                    ) {
                      var u = l.dependencies;
                      if (null !== u) {
                        i = l.child;
                        for (var s = u.firstContext; null !== s; ) {
                          if (s.context === r) {
                            if (1 === l.tag) {
                              (s = jo(-1, t & -t)).tag = 2;
                              var c = l.updateQueue;
                              if (null !== c) {
                                var f = (c = c.shared).pending;
                                null === f
                                  ? (s.next = s)
                                  : ((s.next = f.next), (f.next = s)),
                                  (c.pending = s);
                              }
                            }
                            (l.lanes |= t),
                              null !== (s = l.alternate) && (s.lanes |= t),
                              Oo(l.return, t, n),
                              (u.lanes |= t);
                            break;
                          }
                          s = s.next;
                        }
                      } else if (10 === l.tag)
                        i = l.type === n.type ? null : l.child;
                      else if (18 === l.tag) {
                        if (null === (i = l.return)) throw Error(o(341));
                        (i.lanes |= t),
                          null !== (u = i.alternate) && (u.lanes |= t),
                          Oo(i, t, n),
                          (i = l.sibling);
                      } else i = l.child;
                      if (null !== i) i.return = l;
                      else
                        for (i = l; null !== i; ) {
                          if (i === n) {
                            i = null;
                            break;
                          }
                          if (null !== (l = i.sibling)) {
                            (l.return = i.return), (i = l);
                            break;
                          }
                          i = i.return;
                        }
                      l = i;
                    }
                wi(e, n, a.children, t), (n = n.child);
              }
              return n;
            case 9:
              return (
                (a = n.type),
                (r = n.pendingProps.children),
                Io(n, t),
                (r = r((a = Po(a)))),
                (n.flags |= 1),
                wi(e, n, r, t),
                n.child
              );
            case 14:
              return (
                (a = ti((r = n.type), n.pendingProps)),
                Si(e, n, r, (a = ti(r.type, a)), t)
              );
            case 15:
              return Ei(e, n, n.type, n.pendingProps, t);
            case 17:
              return (
                (r = n.type),
                (a = n.pendingProps),
                (a = n.elementType === r ? a : ti(r, a)),
                Bi(e, n),
                (n.tag = 1),
                Ra(r) ? ((e = !0), Aa(n)) : (e = !1),
                Io(n, t),
                li(n, r, a),
                ui(n, r, a, t),
                Ti(null, n, r, !0, e, t)
              );
            case 19:
              return Hi(e, n, t);
            case 22:
              return xi(e, n, t);
          }
          throw Error(o(156, n.tag));
        };
        var Qs =
          "function" === typeof reportError
            ? reportError
            : function (e) {
                console.error(e);
              };
        function Ks(e) {
          this._internalRoot = e;
        }
        function qs(e) {
          this._internalRoot = e;
        }
        function Gs(e) {
          return !(
            !e ||
            (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
          );
        }
        function Xs(e) {
          return !(
            !e ||
            (1 !== e.nodeType &&
              9 !== e.nodeType &&
              11 !== e.nodeType &&
              (8 !== e.nodeType ||
                " react-mount-point-unstable " !== e.nodeValue))
          );
        }
        function Js() {}
        function Zs(e, n, t, r, a) {
          var o = t._reactRootContainer;
          if (o) {
            var l = o;
            if ("function" === typeof a) {
              var i = a;
              a = function () {
                var e = Vs(l);
                i.call(e);
              };
            }
            Bs(n, l, e, a);
          } else
            l = (function (e, n, t, r, a) {
              if (a) {
                if ("function" === typeof r) {
                  var o = r;
                  r = function () {
                    var e = Vs(l);
                    o.call(e);
                  };
                }
                var l = Hs(n, r, e, 0, null, !1, 0, "", Js);
                return (
                  (e._reactRootContainer = l),
                  (e[ha] = l.current),
                  Hr(8 === e.nodeType ? e.parentNode : e),
                  cs(),
                  l
                );
              }
              for (; (a = e.lastChild); ) e.removeChild(a);
              if ("function" === typeof r) {
                var i = r;
                r = function () {
                  var e = Vs(u);
                  i.call(e);
                };
              }
              var u = Us(e, 0, !1, null, 0, !1, 0, "", Js);
              return (
                (e._reactRootContainer = u),
                (e[ha] = u.current),
                Hr(8 === e.nodeType ? e.parentNode : e),
                cs(function () {
                  Bs(n, u, t, r);
                }),
                u
              );
            })(t, n, e, a, r);
          return Vs(l);
        }
        (qs.prototype.render = Ks.prototype.render =
          function (e) {
            var n = this._internalRoot;
            if (null === n) throw Error(o(409));
            Bs(e, n, null, null);
          }),
          (qs.prototype.unmount = Ks.prototype.unmount =
            function () {
              var e = this._internalRoot;
              if (null !== e) {
                this._internalRoot = null;
                var n = e.containerInfo;
                cs(function () {
                  Bs(null, e, null, null);
                }),
                  (n[ha] = null);
              }
            }),
          (qs.prototype.unstable_scheduleHydration = function (e) {
            if (e) {
              var n = Cn();
              e = { blockedOn: null, target: e, priority: n };
              for (
                var t = 0;
                t < zn.length && 0 !== n && n < zn[t].priority;
                t++
              );
              zn.splice(t, 0, e), 0 === t && Dn(e);
            }
          }),
          (Sn = function (e) {
            switch (e.tag) {
              case 3:
                var n = e.stateNode;
                if (n.current.memoizedState.isDehydrated) {
                  var t = dn(n.pendingLanes);
                  0 !== t &&
                    (bn(n, 1 | t),
                    rs(n, Xe()),
                    0 === (6 & Tu) && ((Hu = Xe() + 500), Ha()));
                }
                break;
              case 13:
                cs(function () {
                  var n = Mo(e, 1);
                  if (null !== n) {
                    var t = es();
                    ts(n, e, 1, t);
                  }
                }),
                  Ys(e, 1);
            }
          }),
          (En = function (e) {
            if (13 === e.tag) {
              var n = Mo(e, 134217728);
              if (null !== n) ts(n, e, 134217728, es());
              Ys(e, 134217728);
            }
          }),
          (xn = function (e) {
            if (13 === e.tag) {
              var n = ns(e),
                t = Mo(e, n);
              if (null !== t) ts(t, e, n, es());
              Ys(e, n);
            }
          }),
          (Cn = function () {
            return wn;
          }),
          (_n = function (e, n) {
            var t = wn;
            try {
              return (wn = e), n();
            } finally {
              wn = t;
            }
          }),
          (Se = function (e, n, t) {
            switch (n) {
              case "input":
                if ((J(e, t), (n = t.name), "radio" === t.type && null != n)) {
                  for (t = e; t.parentNode; ) t = t.parentNode;
                  for (
                    t = t.querySelectorAll(
                      "input[name=" + JSON.stringify("" + n) + '][type="radio"]'
                    ),
                      n = 0;
                    n < t.length;
                    n++
                  ) {
                    var r = t[n];
                    if (r !== e && r.form === e.form) {
                      var a = ka(r);
                      if (!a) throw Error(o(90));
                      Q(r), J(r, a);
                    }
                  }
                }
                break;
              case "textarea":
                oe(e, t);
                break;
              case "select":
                null != (n = t.value) && te(e, !!t.multiple, n, !1);
            }
          }),
          (Te = ss),
          (Oe = cs);
        var ec = {
            usingClientEntryPoint: !1,
            Events: [ba, wa, ka, _e, Ne, ss],
          },
          nc = {
            findFiberByHostInstance: ya,
            bundleType: 0,
            version: "18.3.1",
            rendererPackageName: "react-dom",
          },
          tc = {
            bundleType: nc.bundleType,
            version: nc.version,
            rendererPackageName: nc.rendererPackageName,
            rendererConfig: nc.rendererConfig,
            overrideHookState: null,
            overrideHookStateDeletePath: null,
            overrideHookStateRenamePath: null,
            overrideProps: null,
            overridePropsDeletePath: null,
            overridePropsRenamePath: null,
            setErrorHandler: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: w.ReactCurrentDispatcher,
            findHostInstanceByFiber: function (e) {
              return null === (e = We(e)) ? null : e.stateNode;
            },
            findFiberByHostInstance:
              nc.findFiberByHostInstance ||
              function () {
                return null;
              },
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
            reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
          };
        if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
          var rc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (!rc.isDisabled && rc.supportsFiber)
            try {
              (an = rc.inject(tc)), (on = rc);
            } catch (ce) {}
        }
        (n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ec),
          (n.createPortal = function (e, n) {
            var t =
              2 < arguments.length && void 0 !== arguments[2]
                ? arguments[2]
                : null;
            if (!Gs(n)) throw Error(o(200));
            return (function (e, n, t) {
              var r =
                3 < arguments.length && void 0 !== arguments[3]
                  ? arguments[3]
                  : null;
              return {
                $$typeof: S,
                key: null == r ? null : "" + r,
                children: e,
                containerInfo: n,
                implementation: t,
              };
            })(e, n, null, t);
          }),
          (n.createRoot = function (e, n) {
            if (!Gs(e)) throw Error(o(299));
            var t = !1,
              r = "",
              a = Qs;
            return (
              null !== n &&
                void 0 !== n &&
                (!0 === n.unstable_strictMode && (t = !0),
                void 0 !== n.identifierPrefix && (r = n.identifierPrefix),
                void 0 !== n.onRecoverableError && (a = n.onRecoverableError)),
              (n = Us(e, 1, !1, null, 0, t, 0, r, a)),
              (e[ha] = n.current),
              Hr(8 === e.nodeType ? e.parentNode : e),
              new Ks(n)
            );
          }),
          (n.findDOMNode = function (e) {
            if (null == e) return null;
            if (1 === e.nodeType) return e;
            var n = e._reactInternals;
            if (void 0 === n) {
              if ("function" === typeof e.render) throw Error(o(188));
              throw ((e = Object.keys(e).join(",")), Error(o(268, e)));
            }
            return (e = null === (e = We(n)) ? null : e.stateNode);
          }),
          (n.flushSync = function (e) {
            return cs(e);
          }),
          (n.hydrate = function (e, n, t) {
            if (!Xs(n)) throw Error(o(200));
            return Zs(null, e, n, !0, t);
          }),
          (n.hydrateRoot = function (e, n, t) {
            if (!Gs(e)) throw Error(o(405));
            var r = (null != t && t.hydratedSources) || null,
              a = !1,
              l = "",
              i = Qs;
            if (
              (null !== t &&
                void 0 !== t &&
                (!0 === t.unstable_strictMode && (a = !0),
                void 0 !== t.identifierPrefix && (l = t.identifierPrefix),
                void 0 !== t.onRecoverableError && (i = t.onRecoverableError)),
              (n = Hs(n, null, e, 1, null != t ? t : null, a, 0, l, i)),
              (e[ha] = n.current),
              Hr(e),
              r)
            )
              for (e = 0; e < r.length; e++)
                (a = (a = (t = r[e])._getVersion)(t._source)),
                  null == n.mutableSourceEagerHydrationData
                    ? (n.mutableSourceEagerHydrationData = [t, a])
                    : n.mutableSourceEagerHydrationData.push(t, a);
            return new qs(n);
          }),
          (n.render = function (e, n, t) {
            if (!Xs(n)) throw Error(o(200));
            return Zs(null, e, n, !1, t);
          }),
          (n.unmountComponentAtNode = function (e) {
            if (!Xs(e)) throw Error(o(40));
            return (
              !!e._reactRootContainer &&
              (cs(function () {
                Zs(null, null, e, !1, function () {
                  (e._reactRootContainer = null), (e[ha] = null);
                });
              }),
              !0)
            );
          }),
          (n.unstable_batchedUpdates = ss),
          (n.unstable_renderSubtreeIntoContainer = function (e, n, t, r) {
            if (!Xs(t)) throw Error(o(200));
            if (null == e || void 0 === e._reactInternals) throw Error(o(38));
            return Zs(e, n, t, !1, r);
          }),
          (n.version = "18.3.1-next-f1338f8080-20240426");
      },
      501: (e, n, t) => {
        var r = t(396);
        (n.createRoot = r.createRoot), (n.hydrateRoot = r.hydrateRoot);
      },
      396: (e, n, t) => {
        !(function e() {
          if (
            "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
          )
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            } catch (n) {
              console.error(n);
            }
        })(),
          (e.exports = t(764));
      },
      643: (e, n, t) => {
        var r = t(565),
          a = Symbol.for("react.element"),
          o = Symbol.for("react.fragment"),
          l = Object.prototype.hasOwnProperty,
          i =
            r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
              .ReactCurrentOwner,
          u = { key: !0, ref: !0, __self: !0, __source: !0 };
        function s(e, n, t) {
          var r,
            o = {},
            s = null,
            c = null;
          for (r in (void 0 !== t && (s = "" + t),
          void 0 !== n.key && (s = "" + n.key),
          void 0 !== n.ref && (c = n.ref),
          n))
            l.call(n, r) && !u.hasOwnProperty(r) && (o[r] = n[r]);
          if (e && e.defaultProps)
            for (r in (n = e.defaultProps)) void 0 === o[r] && (o[r] = n[r]);
          return {
            $$typeof: a,
            type: e,
            key: s,
            ref: c,
            props: o,
            _owner: i.current,
          };
        }
        (n.Fragment = o), (n.jsx = s), (n.jsxs = s);
      },
      540: (e, n) => {
        var t = Symbol.for("react.element"),
          r = Symbol.for("react.portal"),
          a = Symbol.for("react.fragment"),
          o = Symbol.for("react.strict_mode"),
          l = Symbol.for("react.profiler"),
          i = Symbol.for("react.provider"),
          u = Symbol.for("react.context"),
          s = Symbol.for("react.forward_ref"),
          c = Symbol.for("react.suspense"),
          f = Symbol.for("react.memo"),
          d = Symbol.for("react.lazy"),
          p = Symbol.iterator;
        var h = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          m = Object.assign,
          g = {};
        function v(e, n, t) {
          (this.props = e),
            (this.context = n),
            (this.refs = g),
            (this.updater = t || h);
        }
        function y() {}
        function b(e, n, t) {
          (this.props = e),
            (this.context = n),
            (this.refs = g),
            (this.updater = t || h);
        }
        (v.prototype.isReactComponent = {}),
          (v.prototype.setState = function (e, n) {
            if ("object" !== typeof e && "function" !== typeof e && null != e)
              throw Error(
                "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
              );
            this.updater.enqueueSetState(this, e, n, "setState");
          }),
          (v.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, "forceUpdate");
          }),
          (y.prototype = v.prototype);
        var w = (b.prototype = new y());
        (w.constructor = b), m(w, v.prototype), (w.isPureReactComponent = !0);
        var k = Array.isArray,
          S = Object.prototype.hasOwnProperty,
          E = { current: null },
          x = { key: !0, ref: !0, __self: !0, __source: !0 };
        function C(e, n, r) {
          var a,
            o = {},
            l = null,
            i = null;
          if (null != n)
            for (a in (void 0 !== n.ref && (i = n.ref),
            void 0 !== n.key && (l = "" + n.key),
            n))
              S.call(n, a) && !x.hasOwnProperty(a) && (o[a] = n[a]);
          var u = arguments.length - 2;
          if (1 === u) o.children = r;
          else if (1 < u) {
            for (var s = Array(u), c = 0; c < u; c++) s[c] = arguments[c + 2];
            o.children = s;
          }
          if (e && e.defaultProps)
            for (a in (u = e.defaultProps)) void 0 === o[a] && (o[a] = u[a]);
          return {
            $$typeof: t,
            type: e,
            key: l,
            ref: i,
            props: o,
            _owner: E.current,
          };
        }
        function _(e) {
          return "object" === typeof e && null !== e && e.$$typeof === t;
        }
        var N = /\/+/g;
        function T(e, n) {
          return "object" === typeof e && null !== e && null != e.key
            ? (function (e) {
                var n = { "=": "=0", ":": "=2" };
                return (
                  "$" +
                  e.replace(/[=:]/g, function (e) {
                    return n[e];
                  })
                );
              })("" + e.key)
            : n.toString(36);
        }
        function O(e, n, a, o, l) {
          var i = typeof e;
          ("undefined" !== i && "boolean" !== i) || (e = null);
          var u = !1;
          if (null === e) u = !0;
          else
            switch (i) {
              case "string":
              case "number":
                u = !0;
                break;
              case "object":
                switch (e.$$typeof) {
                  case t:
                  case r:
                    u = !0;
                }
            }
          if (u)
            return (
              (l = l((u = e))),
              (e = "" === o ? "." + T(u, 0) : o),
              k(l)
                ? ((a = ""),
                  null != e && (a = e.replace(N, "$&/") + "/"),
                  O(l, n, a, "", function (e) {
                    return e;
                  }))
                : null != l &&
                  (_(l) &&
                    (l = (function (e, n) {
                      return {
                        $$typeof: t,
                        type: e.type,
                        key: n,
                        ref: e.ref,
                        props: e.props,
                        _owner: e._owner,
                      };
                    })(
                      l,
                      a +
                        (!l.key || (u && u.key === l.key)
                          ? ""
                          : ("" + l.key).replace(N, "$&/") + "/") +
                        e
                    )),
                  n.push(l)),
              1
            );
          if (((u = 0), (o = "" === o ? "." : o + ":"), k(e)))
            for (var s = 0; s < e.length; s++) {
              var c = o + T((i = e[s]), s);
              u += O(i, n, a, c, l);
            }
          else if (
            ((c = (function (e) {
              return null === e || "object" !== typeof e
                ? null
                : "function" === typeof (e = (p && e[p]) || e["@@iterator"])
                ? e
                : null;
            })(e)),
            "function" === typeof c)
          )
            for (e = c.call(e), s = 0; !(i = e.next()).done; )
              u += O((i = i.value), n, a, (c = o + T(i, s++)), l);
          else if ("object" === i)
            throw (
              ((n = String(e)),
              Error(
                "Objects are not valid as a React child (found: " +
                  ("[object Object]" === n
                    ? "object with keys {" + Object.keys(e).join(", ") + "}"
                    : n) +
                  "). If you meant to render a collection of children, use an array instead."
              ))
            );
          return u;
        }
        function I(e, n, t) {
          if (null == e) return e;
          var r = [],
            a = 0;
          return (
            O(e, r, "", "", function (e) {
              return n.call(t, e, a++);
            }),
            r
          );
        }
        function P(e) {
          if (-1 === e._status) {
            var n = e._result;
            (n = n()).then(
              function (n) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 1), (e._result = n));
              },
              function (n) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 2), (e._result = n));
              }
            ),
              -1 === e._status && ((e._status = 0), (e._result = n));
          }
          if (1 === e._status) return e._result.default;
          throw e._result;
        }
        var R = { current: null },
          L = { transition: null },
          z = {
            ReactCurrentDispatcher: R,
            ReactCurrentBatchConfig: L,
            ReactCurrentOwner: E,
          };
        function M() {
          throw Error(
            "act(...) is not supported in production builds of React."
          );
        }
        (n.Children = {
          map: I,
          forEach: function (e, n, t) {
            I(
              e,
              function () {
                n.apply(this, arguments);
              },
              t
            );
          },
          count: function (e) {
            var n = 0;
            return (
              I(e, function () {
                n++;
              }),
              n
            );
          },
          toArray: function (e) {
            return (
              I(e, function (e) {
                return e;
              }) || []
            );
          },
          only: function (e) {
            if (!_(e))
              throw Error(
                "React.Children.only expected to receive a single React element child."
              );
            return e;
          },
        }),
          (n.Component = v),
          (n.Fragment = a),
          (n.Profiler = l),
          (n.PureComponent = b),
          (n.StrictMode = o),
          (n.Suspense = c),
          (n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = z),
          (n.act = M),
          (n.cloneElement = function (e, n, r) {
            if (null === e || void 0 === e)
              throw Error(
                "React.cloneElement(...): The argument must be a React element, but you passed " +
                  e +
                  "."
              );
            var a = m({}, e.props),
              o = e.key,
              l = e.ref,
              i = e._owner;
            if (null != n) {
              if (
                (void 0 !== n.ref && ((l = n.ref), (i = E.current)),
                void 0 !== n.key && (o = "" + n.key),
                e.type && e.type.defaultProps)
              )
                var u = e.type.defaultProps;
              for (s in n)
                S.call(n, s) &&
                  !x.hasOwnProperty(s) &&
                  (a[s] = void 0 === n[s] && void 0 !== u ? u[s] : n[s]);
            }
            var s = arguments.length - 2;
            if (1 === s) a.children = r;
            else if (1 < s) {
              u = Array(s);
              for (var c = 0; c < s; c++) u[c] = arguments[c + 2];
              a.children = u;
            }
            return {
              $$typeof: t,
              type: e.type,
              key: o,
              ref: l,
              props: a,
              _owner: i,
            };
          }),
          (n.createContext = function (e) {
            return (
              ((e = {
                $$typeof: u,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
                _defaultValue: null,
                _globalName: null,
              }).Provider = { $$typeof: i, _context: e }),
              (e.Consumer = e)
            );
          }),
          (n.createElement = C),
          (n.createFactory = function (e) {
            var n = C.bind(null, e);
            return (n.type = e), n;
          }),
          (n.createRef = function () {
            return { current: null };
          }),
          (n.forwardRef = function (e) {
            return { $$typeof: s, render: e };
          }),
          (n.isValidElement = _),
          (n.lazy = function (e) {
            return {
              $$typeof: d,
              _payload: { _status: -1, _result: e },
              _init: P,
            };
          }),
          (n.memo = function (e, n) {
            return { $$typeof: f, type: e, compare: void 0 === n ? null : n };
          }),
          (n.startTransition = function (e) {
            var n = L.transition;
            L.transition = {};
            try {
              e();
            } finally {
              L.transition = n;
            }
          }),
          (n.unstable_act = M),
          (n.useCallback = function (e, n) {
            return R.current.useCallback(e, n);
          }),
          (n.useContext = function (e) {
            return R.current.useContext(e);
          }),
          (n.useDebugValue = function () {}),
          (n.useDeferredValue = function (e) {
            return R.current.useDeferredValue(e);
          }),
          (n.useEffect = function (e, n) {
            return R.current.useEffect(e, n);
          }),
          (n.useId = function () {
            return R.current.useId();
          }),
          (n.useImperativeHandle = function (e, n, t) {
            return R.current.useImperativeHandle(e, n, t);
          }),
          (n.useInsertionEffect = function (e, n) {
            return R.current.useInsertionEffect(e, n);
          }),
          (n.useLayoutEffect = function (e, n) {
            return R.current.useLayoutEffect(e, n);
          }),
          (n.useMemo = function (e, n) {
            return R.current.useMemo(e, n);
          }),
          (n.useReducer = function (e, n, t) {
            return R.current.useReducer(e, n, t);
          }),
          (n.useRef = function (e) {
            return R.current.useRef(e);
          }),
          (n.useState = function (e) {
            return R.current.useState(e);
          }),
          (n.useSyncExternalStore = function (e, n, t) {
            return R.current.useSyncExternalStore(e, n, t);
          }),
          (n.useTransition = function () {
            return R.current.useTransition();
          }),
          (n.version = "18.3.1");
      },
      565: (e, n, t) => {
        e.exports = t(540);
      },
      929: (e, n, t) => {
        e.exports = t(643);
      },
      508: (e, n) => {
        function t(e, n) {
          var t = e.length;
          e.push(n);
          e: for (; 0 < t; ) {
            var r = (t - 1) >>> 1,
              a = e[r];
            if (!(0 < o(a, n))) break e;
            (e[r] = n), (e[t] = a), (t = r);
          }
        }
        function r(e) {
          return 0 === e.length ? null : e[0];
        }
        function a(e) {
          if (0 === e.length) return null;
          var n = e[0],
            t = e.pop();
          if (t !== n) {
            e[0] = t;
            e: for (var r = 0, a = e.length, l = a >>> 1; r < l; ) {
              var i = 2 * (r + 1) - 1,
                u = e[i],
                s = i + 1,
                c = e[s];
              if (0 > o(u, t))
                s < a && 0 > o(c, u)
                  ? ((e[r] = c), (e[s] = t), (r = s))
                  : ((e[r] = u), (e[i] = t), (r = i));
              else {
                if (!(s < a && 0 > o(c, t))) break e;
                (e[r] = c), (e[s] = t), (r = s);
              }
            }
          }
          return n;
        }
        function o(e, n) {
          var t = e.sortIndex - n.sortIndex;
          return 0 !== t ? t : e.id - n.id;
        }
        if (
          "object" === typeof performance &&
          "function" === typeof performance.now
        ) {
          var l = performance;
          n.unstable_now = function () {
            return l.now();
          };
        } else {
          var i = Date,
            u = i.now();
          n.unstable_now = function () {
            return i.now() - u;
          };
        }
        var s = [],
          c = [],
          f = 1,
          d = null,
          p = 3,
          h = !1,
          m = !1,
          g = !1,
          v = "function" === typeof setTimeout ? setTimeout : null,
          y = "function" === typeof clearTimeout ? clearTimeout : null,
          b = "undefined" !== typeof setImmediate ? setImmediate : null;
        function w(e) {
          for (var n = r(c); null !== n; ) {
            if (null === n.callback) a(c);
            else {
              if (!(n.startTime <= e)) break;
              a(c), (n.sortIndex = n.expirationTime), t(s, n);
            }
            n = r(c);
          }
        }
        function k(e) {
          if (((g = !1), w(e), !m))
            if (null !== r(s)) (m = !0), L(S);
            else {
              var n = r(c);
              null !== n && z(k, n.startTime - e);
            }
        }
        function S(e, t) {
          (m = !1), g && ((g = !1), y(_), (_ = -1)), (h = !0);
          var o = p;
          try {
            for (
              w(t), d = r(s);
              null !== d && (!(d.expirationTime > t) || (e && !O()));

            ) {
              var l = d.callback;
              if ("function" === typeof l) {
                (d.callback = null), (p = d.priorityLevel);
                var i = l(d.expirationTime <= t);
                (t = n.unstable_now()),
                  "function" === typeof i
                    ? (d.callback = i)
                    : d === r(s) && a(s),
                  w(t);
              } else a(s);
              d = r(s);
            }
            if (null !== d) var u = !0;
            else {
              var f = r(c);
              null !== f && z(k, f.startTime - t), (u = !1);
            }
            return u;
          } finally {
            (d = null), (p = o), (h = !1);
          }
        }
        "undefined" !== typeof navigator &&
          void 0 !== navigator.scheduling &&
          void 0 !== navigator.scheduling.isInputPending &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        var E,
          x = !1,
          C = null,
          _ = -1,
          N = 5,
          T = -1;
        function O() {
          return !(n.unstable_now() - T < N);
        }
        function I() {
          if (null !== C) {
            var e = n.unstable_now();
            T = e;
            var t = !0;
            try {
              t = C(!0, e);
            } finally {
              t ? E() : ((x = !1), (C = null));
            }
          } else x = !1;
        }
        if ("function" === typeof b)
          E = function () {
            b(I);
          };
        else if ("undefined" !== typeof MessageChannel) {
          var P = new MessageChannel(),
            R = P.port2;
          (P.port1.onmessage = I),
            (E = function () {
              R.postMessage(null);
            });
        } else
          E = function () {
            v(I, 0);
          };
        function L(e) {
          (C = e), x || ((x = !0), E());
        }
        function z(e, t) {
          _ = v(function () {
            e(n.unstable_now());
          }, t);
        }
        (n.unstable_IdlePriority = 5),
          (n.unstable_ImmediatePriority = 1),
          (n.unstable_LowPriority = 4),
          (n.unstable_NormalPriority = 3),
          (n.unstable_Profiling = null),
          (n.unstable_UserBlockingPriority = 2),
          (n.unstable_cancelCallback = function (e) {
            e.callback = null;
          }),
          (n.unstable_continueExecution = function () {
            m || h || ((m = !0), L(S));
          }),
          (n.unstable_forceFrameRate = function (e) {
            0 > e || 125 < e
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (N = 0 < e ? Math.floor(1e3 / e) : 5);
          }),
          (n.unstable_getCurrentPriorityLevel = function () {
            return p;
          }),
          (n.unstable_getFirstCallbackNode = function () {
            return r(s);
          }),
          (n.unstable_next = function (e) {
            switch (p) {
              case 1:
              case 2:
              case 3:
                var n = 3;
                break;
              default:
                n = p;
            }
            var t = p;
            p = n;
            try {
              return e();
            } finally {
              p = t;
            }
          }),
          (n.unstable_pauseExecution = function () {}),
          (n.unstable_requestPaint = function () {}),
          (n.unstable_runWithPriority = function (e, n) {
            switch (e) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                e = 3;
            }
            var t = p;
            p = e;
            try {
              return n();
            } finally {
              p = t;
            }
          }),
          (n.unstable_scheduleCallback = function (e, a, o) {
            var l = n.unstable_now();
            switch (
              ("object" === typeof o && null !== o
                ? (o = "number" === typeof (o = o.delay) && 0 < o ? l + o : l)
                : (o = l),
              e)
            ) {
              case 1:
                var i = -1;
                break;
              case 2:
                i = 250;
                break;
              case 5:
                i = 1073741823;
                break;
              case 4:
                i = 1e4;
                break;
              default:
                i = 5e3;
            }
            return (
              (e = {
                id: f++,
                callback: a,
                priorityLevel: e,
                startTime: o,
                expirationTime: (i = o + i),
                sortIndex: -1,
              }),
              o > l
                ? ((e.sortIndex = o),
                  t(c, e),
                  null === r(s) &&
                    e === r(c) &&
                    (g ? (y(_), (_ = -1)) : (g = !0), z(k, o - l)))
                : ((e.sortIndex = i), t(s, e), m || h || ((m = !0), L(S))),
              e
            );
          }),
          (n.unstable_shouldYield = O),
          (n.unstable_wrapCallback = function (e) {
            var n = p;
            return function () {
              var t = p;
              p = n;
              try {
                return e.apply(this, arguments);
              } finally {
                p = t;
              }
            };
          });
      },
      611: (e, n, t) => {
        e.exports = t(508);
      },
    },
    n = {};
  function t(r) {
    var a = n[r];
    if (void 0 !== a) return a.exports;
    var o = (n[r] = { exports: {} });
    return e[r](o, o.exports, t), o.exports;
  }
  (t.m = e),
    (() => {
      var e,
        n = Object.getPrototypeOf
          ? (e) => Object.getPrototypeOf(e)
          : (e) => e.__proto__;
      t.t = function (r, a) {
        if ((1 & a && (r = this(r)), 8 & a)) return r;
        if ("object" === typeof r && r) {
          if (4 & a && r.__esModule) return r;
          if (16 & a && "function" === typeof r.then) return r;
        }
        var o = Object.create(null);
        t.r(o);
        var l = {};
        e = e || [null, n({}), n([]), n(n)];
        for (
          var i = 2 & a && r;
          "object" == typeof i && !~e.indexOf(i);
          i = n(i)
        )
          Object.getOwnPropertyNames(i).forEach((e) => (l[e] = () => r[e]));
        return (l.default = () => r), t.d(o, l), o;
      };
    })(),
    (t.d = (e, n) => {
      for (var r in n)
        t.o(n, r) &&
          !t.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: n[r] });
    }),
    (t.f = {}),
    (t.e = (e) =>
      Promise.all(Object.keys(t.f).reduce((n, r) => (t.f[r](e, n), n), []))),
    (t.u = (e) => "static/js/" + e + ".f1fb274d.chunk.js"),
    (t.miniCssF = (e) => {}),
    (t.o = (e, n) => Object.prototype.hasOwnProperty.call(e, n)),
    (() => {
      var e = {},
        n = "Magia:";
      t.l = (r, a, o, l) => {
        if (e[r]) e[r].push(a);
        else {
          var i, u;
          if (void 0 !== o)
            for (
              var s = document.getElementsByTagName("script"), c = 0;
              c < s.length;
              c++
            ) {
              var f = s[c];
              if (
                f.getAttribute("src") == r ||
                f.getAttribute("data-webpack") == n + o
              ) {
                i = f;
                break;
              }
            }
          i ||
            ((u = !0),
            ((i = document.createElement("script")).charset = "utf-8"),
            (i.timeout = 120),
            t.nc && i.setAttribute("nonce", t.nc),
            i.setAttribute("data-webpack", n + o),
            (i.src = r)),
            (e[r] = [a]);
          var d = (n, t) => {
              (i.onerror = i.onload = null), clearTimeout(p);
              var a = e[r];
              if (
                (delete e[r],
                i.parentNode && i.parentNode.removeChild(i),
                a && a.forEach((e) => e(t)),
                n)
              )
                return n(t);
            },
            p = setTimeout(
              d.bind(null, void 0, { type: "timeout", target: i }),
              12e4
            );
          (i.onerror = d.bind(null, i.onerror)),
            (i.onload = d.bind(null, i.onload)),
            u && document.head.appendChild(i);
        }
      };
    })(),
    (t.r = (e) => {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (t.p = "/"),
    (() => {
      var e = { 792: 0 };
      t.f.j = (n, r) => {
        var a = t.o(e, n) ? e[n] : void 0;
        if (0 !== a)
          if (a) r.push(a[2]);
          else {
            var o = new Promise((t, r) => (a = e[n] = [t, r]));
            r.push((a[2] = o));
            var l = t.p + t.u(n),
              i = new Error();
            t.l(
              l,
              (r) => {
                if (t.o(e, n) && (0 !== (a = e[n]) && (e[n] = void 0), a)) {
                  var o = r && ("load" === r.type ? "missing" : r.type),
                    l = r && r.target && r.target.src;
                  (i.message =
                    "Loading chunk " + n + " failed.\n(" + o + ": " + l + ")"),
                    (i.name = "ChunkLoadError"),
                    (i.type = o),
                    (i.request = l),
                    a[1](i);
                }
              },
              "chunk-" + n,
              n
            );
          }
      };
      var n = (n, r) => {
          var a,
            o,
            l = r[0],
            i = r[1],
            u = r[2],
            s = 0;
          if (l.some((n) => 0 !== e[n])) {
            for (a in i) t.o(i, a) && (t.m[a] = i[a]);
            if (u) u(t);
          }
          for (n && n(r); s < l.length; s++)
            (o = l[s]), t.o(e, o) && e[o] && e[o][0](), (e[o] = 0);
        },
        r = (self.webpackChunkMagia = self.webpackChunkMagia || []);
      r.forEach(n.bind(null, 0)), (r.push = n.bind(null, r.push.bind(r)));
    })();
  var r = t(565),
    a = t.t(r, 2),
    o = t(501),
    l = t(929);
  function i(e) {
    let {
      children: n,
      edit: t = {},
      background: a = "",
      RoseName: o = "",
      RoseID: i = "",
      autoLayout: u = !1,
      shadow: s = !1,
      shadowColor: c = "black",
      aspectRatio: f = null,
      atHover: d = !1,
      grid: p = !1,
      flex: h = !1,
      scaleAnimate: m = !1,
      childrenVisible: g = !0,
      onClick: v,
      ariaLabel: y,
      role: b,
      lazy: w = !1,
      AutoHandling: k = !1,
      outlineOffset: S = 0,
    } = e;
    const [E, x] = (0, r.useState)(!w);
    (0, r.useEffect)(() => {
      if (w) {
        const e = setTimeout(() => {
          x(!0);
        }, 200);
        return () => clearTimeout(e);
      }
    }, [w]);
    const C = u
        ? { padding: "0.8rem", margin: "0 auto", overflow: "hidden" }
        : {},
      _ = s ? { boxShadow: `0px 0px 9px 1px ${c}` } : {},
      N = f ? { aspectRatio: f } : {},
      T = p
        ? {
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(100px, 1fr))",
          }
        : h
        ? {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }
        : {},
      O = a ? { background: a } : {},
      I = k
        ? {
            background: "#1b85db",
            height: "3rem",
            minWidth: "11rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            border: "1px solid #1b85db",
            borderRadius: "7px",
            fontWeight: "bold",
            boxShadow:
              "#1b85db 0px 50px 100px -20px, #1b85db 0px 30px 60px -30px, #1b85db 0px -2px 6px 0px inset",
            outlineOffset: `${S}`,
            outlineStyle: "solid",
            outlineColor: "#1b85db",
            outlineWidth: "2px",
            cursor: "pointer",
          }
        : {},
      P = d ? "rosebox-hover" : "";
    return (0, l.jsxs)(l.Fragment, {
      children: [
        (0, l.jsx)("style", {
          children:
            "\n                .rosebox-hover {\n                    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out, background-color 0.3s ease-in-out;\n                }\n                .rosebox-hover:hover {\n                    transform: scale(1.05);\n                    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);\n                    background-color: rgba(240, 240, 240, 0.8);\n                }\n                .rosebox-scale-animate {\n                    animation: scale-down 0.6s ease-out forwards;\n                }\n                @keyframes scale-down {\n                    0% {\n                        transform: scale(2);\n                    }\n                    100% {\n                        transform: scale(0.9);\n                    }\n                }\n            ",
        }),
        g &&
          (0, l.jsx)("div", {
            "aria-label": y,
            role: b,
            onClick: () => {
              "function" === typeof v && v();
            },
            id: i,
            className: `${o} ${P} ${m ? "rosebox-scale-animate" : ""}`,
            style: { ...t, ...C, ..._, ...N, ...T, ...O, ...I },
            children: E ? n : (0, l.jsx)("div", { children: "Loading..." }),
          }),
      ],
    });
  }
  function u(e) {
    let {
      children: n,
      RoseName: t,
      RoseId: r,
      edit: a = {},
      speed: o = 2,
      color: i = "#fff",
      backgroundColor: u = "#000",
    } = e;
    return (0, l.jsxs)(l.Fragment, {
      children: [
        (0, l.jsx)("style", {
          children: `\n              .shiny-text {\n                  position: relative;\n                  display: inline-block;\n                  color: ${i};\n                  background-color: ${u};\n                  overflow: hidden;\n                  font-weight: bold;\n                  background-clip: text;\n                  -webkit-background-clip: text;\n                  color: transparent;\n              }\n              .shiny-text::before {\n                  content: '';\n                  position: absolute;\n                  top: 0;\n                  left: -100%;\n                  height: 100%;\n                  width: 100%;\n                  background: linear-gradient(120deg, transparent, rgba(255,255,255,0.7), transparent);\n                  transform: skewX(-15deg);\n              }\n              .shiny-text::before {\n                  animation: shiny-effect ${o}s infinite;\n              }\n              @keyframes shiny-effect {\n                  0% {\n                      left: -100%;\n                  }\n                  100% {\n                      left: 100%;\n                  }\n              }\n          `,
        }),
        (0, l.jsx)("div", {
          style: { ...a },
          id: r,
          className: `shiny-text ${t}`,
          children: n,
        }),
      ],
    });
  }
  function s(e) {
    let {
      children: n,
      RoseName: t,
      RoseId: r,
      edit: a = {},
      speed: o = 2,
      color: i = "#fff",
      backgroundColor: u = "#111",
      padding: s = "10px 20px",
      borderRadius: c = "5px",
      ShinyButtonEvent: f,
    } = e;
    return (0, l.jsxs)(l.Fragment, {
      children: [
        (0, l.jsx)("style", {
          children: `\n              .shiny-button {\n                  position: relative;\n                  display: inline-block;\n                  padding: ${s};\n                  background-color: ${u};\n                  color: ${i};\n                  font-weight: bold;\n                  text-transform: uppercase;\n                  overflow: hidden;\n                  border-radius: ${c};\n                  cursor: pointer;\n                  transition: background-color 0.3s, color 0.3s;\n                  ursor: pointer;\n                  border: 1px solid #353535;\n                  padding: .4em 1.2em;\n                  border-radius: 50px;\n                  transition: .3s ease;\n              }\n              .shiny-button::before {\n                  content: '';\n                  position: absolute;\n                  top: -100%;\n                  left: -100%;\n                  height: 100%;\n                  width: 100%;\n                  background: linear-gradient(120deg, transparent, rgba(255,255,255,0.7), transparent);\n                  transform: skewX(-15deg);\n                  transition: opacity 0.3s;\n              }\n              .shiny-button:hover::before {\n                  animation: shiny-effect ${o}s infinite;\n                  opacity: 1;\n              }\n              .shiny-button:hover {\n                  background-color: ${u};\n                  color: ${i};\n              }\n              @keyframes shiny-effect {\n                  0% {\n                      left: -100%;\n                  }\n                  100% {\n                      left: 100%;\n                  }\n              }\n          `,
        }),
        (0, l.jsx)("button", {
          onClick: () => {
            "function" === typeof f && f();
          },
          style: { ...a },
          id: r,
          className: `shiny-button ${t}`,
          children: n,
        }),
      ],
    });
  }
  function c(e) {
    let {
      children: n,
      RoseName: t,
      RoseId: a,
      initialWaveType: o = "character",
      edit: i = {},
      speed: u = 0.5,
      delay: s = 0.05,
      amplitude: c = 10,
      frequency: f = 0.5,
    } = e;
    const [d, p] = (0, r.useState)(o);
    (0, r.useEffect)(() => {
      const e = u + s * (n.split("").length || 1),
        t = setTimeout(() => {
          p("word");
        }, 1e3 * e + 200);
      return () => clearTimeout(t);
    }, [u, s, n]);
    const h = ("word" === d ? n.split(/(\s+)/) : n.split("")).map((e, n) =>
      (0, l.jsxs)(
        "span",
        {
          className: "WaveTextItem",
          style: { "--WaveTextItem-index": n },
          children: [" " === e ? "\xa0" : e, " "],
        },
        n
      )
    );
    return (0, l.jsxs)(l.Fragment, {
      children: [
        (0, l.jsx)("style", {
          children: `\n              .WaveTextItem {\n                  display: inline-block;\n                  opacity: 0;\n                  transform: translateY(${c}px);\n                  animation: waveAnimation ${u}s forwards;\n                  animation-delay: calc(var(--WaveTextItem-index) * ${s}s);\n              }\n\n              @keyframes waveAnimation {\n                  0% {\n                      opacity: 0;\n                      transform: translateY(${c}px);\n                  }\n                  50% {\n                      opacity: 1;\n                      transform: translateY(-${c}px);\n                  }\n                  100% {\n                      opacity: 1;\n                      transform: translateY(0);\n                  }\n              }\n          `,
        }),
        (0, l.jsx)("div", {
          style: { ...i },
          id: a,
          className: t,
          children: h,
        }),
      ],
    });
  }
  function f(e) {
    let {
      children: n,
      RoseID: t,
      RoseName: a = "random-animate",
      edit: o = {
        backgroundColor: "#EEE",
        height: "12rem",
        width: "12rem",
        borderRadius: "20px",
        padding: "1rem",
      },
      AnimatedType: i,
    } = e;
    const [u, s] = (0, r.useState)("");
    return (
      (0, r.useEffect)(() => {
        const e = [
          "fadeIn",
          "slideInLeft",
          "zoomIn",
          "rotateIn",
          "bounceIn",
          "flipInX",
          "flipInY",
          "lightSpeedIn",
          "rollIn",
          "jackInTheBox",
        ];
        if (i) s(i);
        else {
          const n = e[Math.floor(Math.random() * e.length)];
          s(n);
        }
      }, [i]),
      (0, l.jsxs)(l.Fragment, {
        children: [
          (0, l.jsx)("style", {
            children:
              "\n        .random-animate {\n          display: inline-block;\n        }\n\n        /* Add your keyframe animations here */\n        /* Fade In Animation */\n        @keyframes fadeIn {\n          from { opacity: 0; }\n          to { opacity: 1; }\n        }\n\n        .fadeIn {\n          animation: fadeIn 1s ease-in-out;\n        }\n\n        /* Slide In Left Animation */\n        @keyframes slideInLeft {\n          from { transform: translateX(-100%); opacity: 0; }\n          to { transform: translateX(0); opacity: 1; }\n        }\n\n        .slideInLeft {\n          animation: slideInLeft 1s ease-in-out;\n        }\n\n        /* Zoom In Animation */\n        @keyframes zoomIn {\n          from { transform: scale(0.5); opacity: 0; }\n          to { transform: scale(1); opacity: 1; }\n        }\n\n        .zoomIn {\n          animation: zoomIn 1s ease-in-out;\n        }\n\n        /* Rotate In Animation */\n        @keyframes rotateIn {\n          from { transform: rotate(-200deg); opacity: 0; }\n          to { transform: rotate(0); opacity: 1; }\n        }\n\n        .rotateIn {\n          animation: rotateIn 1s ease-in-out;\n        }\n\n        /* Bounce In Animation */\n        @keyframes bounceIn {\n          0%, 20%, 40%, 60%, 80%, 100% {\n            transform: translateY(0);\n          }\n          50% {\n            transform: translateY(-20px);\n          }\n        }\n\n        .bounceIn {\n          animation: bounceIn 1s ease-in-out;\n        }\n\n        /* Flip In X Animation */\n        @keyframes flipInX {\n          from {\n            transform: perspective(400px) rotateX(90deg);\n            opacity: 0;\n          }\n          to {\n            transform: perspective(400px) rotateX(0deg);\n            opacity: 1;\n          }\n        }\n\n        .flipInX {\n          animation: flipInX 1s ease-in-out;\n        }\n\n        /* Flip In Y Animation */\n        @keyframes flipInY {\n          from {\n            transform: perspective(400px) rotateY(90deg);\n            opacity: 0;\n          }\n          to {\n            transform: perspective(400px) rotateY(0deg);\n            opacity: 1;\n          }\n        }\n\n        .flipInY {\n          animation: flipInY 1s ease-in-out;\n        }\n\n        /* Light Speed In Animation */\n        @keyframes lightSpeedIn {\n          from { transform: translateX(100%) skewX(-30deg); opacity: 0; }\n          to { transform: translateX(0) skewX(0deg); opacity: 1; }\n        }\n\n        .lightSpeedIn {\n          animation: lightSpeedIn 1s ease-out;\n        }\n\n        /* Roll In Animation */\n        @keyframes rollIn {\n          from { transform: translateX(-100%) rotate(-120deg); opacity: 0; }\n          to { transform: translateX(0) rotate(0deg); opacity: 1; }\n        }\n\n        .rollIn {\n          animation: rollIn 1s ease-in-out;\n        }\n\n        /* Jack In The Box Animation */\n        @keyframes jackInTheBox {\n          from {\n            opacity: 0;\n            transform: scale(0.1) rotate(30deg);\n          }\n          50% {\n            transform: rotate(-10deg);\n          }\n          70% {\n            transform: rotate(3deg);\n          }\n          to {\n            opacity: 1;\n            transform: scale(1);\n          }\n        }\n\n        .jackInTheBox {\n          animation: jackInTheBox 1s ease-in-out;\n        }\n      ",
          }),
          (0, l.jsx)("div", {
            id: t,
            style: o,
            className: `${a} ${u}`,
            children: n,
          }),
        ],
      })
    );
  }
  var d, p, h;
  !(function (e) {
    (e.STRING = "STRING"),
      (e.NUMBER = "NUMBER"),
      (e.INTEGER = "INTEGER"),
      (e.BOOLEAN = "BOOLEAN"),
      (e.ARRAY = "ARRAY"),
      (e.OBJECT = "OBJECT");
  })(d || (d = {})),
    (function (e) {
      (e.LANGUAGE_UNSPECIFIED = "language_unspecified"), (e.PYTHON = "python");
    })(p || (p = {})),
    (function (e) {
      (e.OUTCOME_UNSPECIFIED = "outcome_unspecified"),
        (e.OUTCOME_OK = "outcome_ok"),
        (e.OUTCOME_FAILED = "outcome_failed"),
        (e.OUTCOME_DEADLINE_EXCEEDED = "outcome_deadline_exceeded");
    })(h || (h = {}));
  const m = ["user", "model", "function", "system"];
  var g, v, y, b, w, k, S;
  !(function (e) {
    (e.HARM_CATEGORY_UNSPECIFIED = "HARM_CATEGORY_UNSPECIFIED"),
      (e.HARM_CATEGORY_HATE_SPEECH = "HARM_CATEGORY_HATE_SPEECH"),
      (e.HARM_CATEGORY_SEXUALLY_EXPLICIT = "HARM_CATEGORY_SEXUALLY_EXPLICIT"),
      (e.HARM_CATEGORY_HARASSMENT = "HARM_CATEGORY_HARASSMENT"),
      (e.HARM_CATEGORY_DANGEROUS_CONTENT = "HARM_CATEGORY_DANGEROUS_CONTENT");
  })(g || (g = {})),
    (function (e) {
      (e.HARM_BLOCK_THRESHOLD_UNSPECIFIED = "HARM_BLOCK_THRESHOLD_UNSPECIFIED"),
        (e.BLOCK_LOW_AND_ABOVE = "BLOCK_LOW_AND_ABOVE"),
        (e.BLOCK_MEDIUM_AND_ABOVE = "BLOCK_MEDIUM_AND_ABOVE"),
        (e.BLOCK_ONLY_HIGH = "BLOCK_ONLY_HIGH"),
        (e.BLOCK_NONE = "BLOCK_NONE");
    })(v || (v = {})),
    (function (e) {
      (e.HARM_PROBABILITY_UNSPECIFIED = "HARM_PROBABILITY_UNSPECIFIED"),
        (e.NEGLIGIBLE = "NEGLIGIBLE"),
        (e.LOW = "LOW"),
        (e.MEDIUM = "MEDIUM"),
        (e.HIGH = "HIGH");
    })(y || (y = {})),
    (function (e) {
      (e.BLOCKED_REASON_UNSPECIFIED = "BLOCKED_REASON_UNSPECIFIED"),
        (e.SAFETY = "SAFETY"),
        (e.OTHER = "OTHER");
    })(b || (b = {})),
    (function (e) {
      (e.FINISH_REASON_UNSPECIFIED = "FINISH_REASON_UNSPECIFIED"),
        (e.STOP = "STOP"),
        (e.MAX_TOKENS = "MAX_TOKENS"),
        (e.SAFETY = "SAFETY"),
        (e.RECITATION = "RECITATION"),
        (e.LANGUAGE = "LANGUAGE"),
        (e.OTHER = "OTHER");
    })(w || (w = {})),
    (function (e) {
      (e.TASK_TYPE_UNSPECIFIED = "TASK_TYPE_UNSPECIFIED"),
        (e.RETRIEVAL_QUERY = "RETRIEVAL_QUERY"),
        (e.RETRIEVAL_DOCUMENT = "RETRIEVAL_DOCUMENT"),
        (e.SEMANTIC_SIMILARITY = "SEMANTIC_SIMILARITY"),
        (e.CLASSIFICATION = "CLASSIFICATION"),
        (e.CLUSTERING = "CLUSTERING");
    })(k || (k = {})),
    (function (e) {
      (e.MODE_UNSPECIFIED = "MODE_UNSPECIFIED"),
        (e.AUTO = "AUTO"),
        (e.ANY = "ANY"),
        (e.NONE = "NONE");
    })(S || (S = {}));
  class E extends Error {
    constructor(e) {
      super(`[GoogleGenerativeAI Error]: ${e}`);
    }
  }
  class x extends E {
    constructor(e, n) {
      super(e), (this.response = n);
    }
  }
  class C extends E {
    constructor(e, n, t, r) {
      super(e),
        (this.status = n),
        (this.statusText = t),
        (this.errorDetails = r);
    }
  }
  class _ extends E {}
  const N = "0.17.1",
    T = "genai-js";
  var O;
  !(function (e) {
    (e.GENERATE_CONTENT = "generateContent"),
      (e.STREAM_GENERATE_CONTENT = "streamGenerateContent"),
      (e.COUNT_TOKENS = "countTokens"),
      (e.EMBED_CONTENT = "embedContent"),
      (e.BATCH_EMBED_CONTENTS = "batchEmbedContents");
  })(O || (O = {}));
  class I {
    constructor(e, n, t, r, a) {
      (this.model = e),
        (this.task = n),
        (this.apiKey = t),
        (this.stream = r),
        (this.requestOptions = a);
    }
    toString() {
      var e, n;
      const t =
        (null === (e = this.requestOptions) || void 0 === e
          ? void 0
          : e.apiVersion) || "v1beta";
      let r = `${
        (null === (n = this.requestOptions) || void 0 === n
          ? void 0
          : n.baseUrl) || "https://generativelanguage.googleapis.com"
      }/${t}/${this.model}:${this.task}`;
      return this.stream && (r += "?alt=sse"), r;
    }
  }
  async function P(e) {
    var n;
    const t = new Headers();
    t.append("Content-Type", "application/json"),
      t.append(
        "x-goog-api-client",
        (function (e) {
          const n = [];
          return (
            (null === e || void 0 === e ? void 0 : e.apiClient) &&
              n.push(e.apiClient),
            n.push(`${T}/${N}`),
            n.join(" ")
          );
        })(e.requestOptions)
      ),
      t.append("x-goog-api-key", e.apiKey);
    let r =
      null === (n = e.requestOptions) || void 0 === n
        ? void 0
        : n.customHeaders;
    if (r) {
      if (!(r instanceof Headers))
        try {
          r = new Headers(r);
        } catch (a) {
          throw new _(
            `unable to convert customHeaders value ${JSON.stringify(
              r
            )} to Headers: ${a.message}`
          );
        }
      for (const [e, n] of r.entries()) {
        if ("x-goog-api-key" === e)
          throw new _(`Cannot set reserved header name ${e}`);
        if ("x-goog-api-client" === e)
          throw new _(
            `Header name ${e} can only be set using the apiClient field`
          );
        t.append(e, n);
      }
    }
    return t;
  }
  async function R(e, n, t, r, a) {
    let o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {},
      l =
        arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : fetch;
    const { url: i, fetchOptions: u } = await (async function (
      e,
      n,
      t,
      r,
      a,
      o
    ) {
      const l = new I(e, n, t, r, o);
      return {
        url: l.toString(),
        fetchOptions: Object.assign(Object.assign({}, L(o)), {
          method: "POST",
          headers: await P(l),
          body: a,
        }),
      };
    })(e, n, t, r, a, o);
    return (async function (e, n) {
      let t,
        r =
          arguments.length > 2 && void 0 !== arguments[2]
            ? arguments[2]
            : fetch;
      try {
        t = await r(e, n);
      } catch (a) {
        !(function (e, n) {
          let t = e;
          e instanceof C ||
            e instanceof _ ||
            ((t = new E(`Error fetching from ${n.toString()}: ${e.message}`)),
            (t.stack = e.stack));
          throw t;
        })(a, e);
      }
      t.ok ||
        (await (async function (e, n) {
          let t,
            r = "";
          try {
            const n = await e.json();
            (r = n.error.message),
              n.error.details &&
                ((r += ` ${JSON.stringify(n.error.details)}`),
                (t = n.error.details));
          } catch (a) {}
          throw new C(
            `Error fetching from ${n.toString()}: [${e.status} ${
              e.statusText
            }] ${r}`,
            e.status,
            e.statusText,
            t
          );
        })(t, e));
      return t;
    })(i, u, l);
  }
  function L(e) {
    const n = {};
    if (
      void 0 !== (null === e || void 0 === e ? void 0 : e.signal) ||
      (null === e || void 0 === e ? void 0 : e.timeout) >= 0
    ) {
      const t = new AbortController();
      (null === e || void 0 === e ? void 0 : e.timeout) >= 0 &&
        setTimeout(() => t.abort(), e.timeout),
        (null === e || void 0 === e ? void 0 : e.signal) &&
          e.signal.addEventListener("abort", () => {
            t.abort();
          }),
        (n.signal = t.signal);
    }
    return n;
  }
  function z(e) {
    return (
      (e.text = () => {
        if (e.candidates && e.candidates.length > 0) {
          if (
            (e.candidates.length > 1 &&
              console.warn(
                `This response had ${e.candidates.length} candidates. Returning text from the first candidate only. Access response.candidates directly to use the other candidates.`
              ),
            F(e.candidates[0]))
          )
            throw new x(`${D(e)}`, e);
          return (function (e) {
            var n, t, r, a;
            const o = [];
            if (
              null ===
                (t =
                  null === (n = e.candidates) || void 0 === n
                    ? void 0
                    : n[0].content) || void 0 === t
                ? void 0
                : t.parts
            )
              for (const l of null ===
                (a =
                  null === (r = e.candidates) || void 0 === r
                    ? void 0
                    : r[0].content) || void 0 === a
                ? void 0
                : a.parts)
                l.text && o.push(l.text),
                  l.executableCode &&
                    o.push("\n```python\n" + l.executableCode.code + "\n```\n"),
                  l.codeExecutionResult &&
                    o.push(
                      "\n```\n" + l.codeExecutionResult.output + "\n```\n"
                    );
            return o.length > 0 ? o.join("") : "";
          })(e);
        }
        if (e.promptFeedback) throw new x(`Text not available. ${D(e)}`, e);
        return "";
      }),
      (e.functionCall = () => {
        if (e.candidates && e.candidates.length > 0) {
          if (
            (e.candidates.length > 1 &&
              console.warn(
                `This response had ${e.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`
              ),
            F(e.candidates[0]))
          )
            throw new x(`${D(e)}`, e);
          return (
            console.warn(
              "response.functionCall() is deprecated. Use response.functionCalls() instead."
            ),
            M(e)[0]
          );
        }
        if (e.promptFeedback)
          throw new x(`Function call not available. ${D(e)}`, e);
      }),
      (e.functionCalls = () => {
        if (e.candidates && e.candidates.length > 0) {
          if (
            (e.candidates.length > 1 &&
              console.warn(
                `This response had ${e.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`
              ),
            F(e.candidates[0]))
          )
            throw new x(`${D(e)}`, e);
          return M(e);
        }
        if (e.promptFeedback)
          throw new x(`Function call not available. ${D(e)}`, e);
      }),
      e
    );
  }
  function M(e) {
    var n, t, r, a;
    const o = [];
    if (
      null ===
        (t =
          null === (n = e.candidates) || void 0 === n
            ? void 0
            : n[0].content) || void 0 === t
        ? void 0
        : t.parts
    )
      for (const l of null ===
        (a =
          null === (r = e.candidates) || void 0 === r
            ? void 0
            : r[0].content) || void 0 === a
        ? void 0
        : a.parts)
        l.functionCall && o.push(l.functionCall);
    return o.length > 0 ? o : void 0;
  }
  const A = [w.RECITATION, w.SAFETY, w.LANGUAGE];
  function F(e) {
    return !!e.finishReason && A.includes(e.finishReason);
  }
  function D(e) {
    var n, t, r;
    let a = "";
    if ((e.candidates && 0 !== e.candidates.length) || !e.promptFeedback) {
      if (null === (r = e.candidates) || void 0 === r ? void 0 : r[0]) {
        const n = e.candidates[0];
        F(n) &&
          ((a += `Candidate was blocked due to ${n.finishReason}`),
          n.finishMessage && (a += `: ${n.finishMessage}`));
      }
    } else
      (a += "Response was blocked"),
        (null === (n = e.promptFeedback) || void 0 === n
          ? void 0
          : n.blockReason) && (a += ` due to ${e.promptFeedback.blockReason}`),
        (null === (t = e.promptFeedback) || void 0 === t
          ? void 0
          : t.blockReasonMessage) &&
          (a += `: ${e.promptFeedback.blockReasonMessage}`);
    return a;
  }
  function j(e) {
    return this instanceof j ? ((this.v = e), this) : new j(e);
  }
  function U(e, n, t) {
    if (!Symbol.asyncIterator)
      throw new TypeError("Symbol.asyncIterator is not defined.");
    var r,
      a = t.apply(e, n || []),
      o = [];
    return (
      (r = {}),
      l("next"),
      l("throw"),
      l("return"),
      (r[Symbol.asyncIterator] = function () {
        return this;
      }),
      r
    );
    function l(e) {
      a[e] &&
        (r[e] = function (n) {
          return new Promise(function (t, r) {
            o.push([e, n, t, r]) > 1 || i(e, n);
          });
        });
    }
    function i(e, n) {
      try {
        (t = a[e](n)).value instanceof j
          ? Promise.resolve(t.value.v).then(u, s)
          : c(o[0][2], t);
      } catch (r) {
        c(o[0][3], r);
      }
      var t;
    }
    function u(e) {
      i("next", e);
    }
    function s(e) {
      i("throw", e);
    }
    function c(e, n) {
      e(n), o.shift(), o.length && i(o[0][0], o[0][1]);
    }
  }
  "function" === typeof SuppressedError && SuppressedError;
  const $ = /^data\: (.*)(?:\n\n|\r\r|\r\n\r\n)/;
  function H(e) {
    const n = (function (e) {
        const n = e.getReader();
        return new ReadableStream({
          start(e) {
            let t = "";
            return r();
            function r() {
              return n.read().then((n) => {
                let { value: a, done: o } = n;
                if (o)
                  return t.trim()
                    ? void e.error(new E("Failed to parse stream"))
                    : void e.close();
                t += a;
                let l,
                  i = t.match($);
                for (; i; ) {
                  try {
                    l = JSON.parse(i[1]);
                  } catch (u) {
                    return void e.error(
                      new E(`Error parsing JSON response: "${i[1]}"`)
                    );
                  }
                  e.enqueue(l),
                    (t = t.substring(i[0].length)),
                    (i = t.match($));
                }
                return r();
              });
            }
          },
        });
      })(e.body.pipeThrough(new TextDecoderStream("utf8", { fatal: !0 }))),
      [t, r] = n.tee();
    return { stream: V(t), response: B(r) };
  }
  async function B(e) {
    const n = [],
      t = e.getReader();
    for (;;) {
      const { done: e, value: r } = await t.read();
      if (e) return z(W(n));
      n.push(r);
    }
  }
  function V(e) {
    return U(this, arguments, function* () {
      const n = e.getReader();
      for (;;) {
        const { value: e, done: t } = yield j(n.read());
        if (t) break;
        yield yield j(z(e));
      }
    });
  }
  function W(e) {
    const n = e[e.length - 1],
      t = {
        promptFeedback: null === n || void 0 === n ? void 0 : n.promptFeedback,
      };
    for (const r of e) {
      if (r.candidates)
        for (const e of r.candidates) {
          const n = e.index;
          if (
            (t.candidates || (t.candidates = []),
            t.candidates[n] || (t.candidates[n] = { index: e.index }),
            (t.candidates[n].citationMetadata = e.citationMetadata),
            (t.candidates[n].finishReason = e.finishReason),
            (t.candidates[n].finishMessage = e.finishMessage),
            (t.candidates[n].safetyRatings = e.safetyRatings),
            e.content && e.content.parts)
          ) {
            t.candidates[n].content ||
              (t.candidates[n].content = {
                role: e.content.role || "user",
                parts: [],
              });
            const r = {};
            for (const a of e.content.parts)
              a.text && (r.text = a.text),
                a.functionCall && (r.functionCall = a.functionCall),
                a.executableCode && (r.executableCode = a.executableCode),
                a.codeExecutionResult &&
                  (r.codeExecutionResult = a.codeExecutionResult),
                0 === Object.keys(r).length && (r.text = ""),
                t.candidates[n].content.parts.push(r);
          }
        }
      r.usageMetadata && (t.usageMetadata = r.usageMetadata);
    }
    return t;
  }
  async function Y(e, n, t, r) {
    return H(
      await R(n, O.STREAM_GENERATE_CONTENT, e, !0, JSON.stringify(t), r)
    );
  }
  async function Q(e, n, t, r) {
    const a = await R(n, O.GENERATE_CONTENT, e, !1, JSON.stringify(t), r);
    return { response: z(await a.json()) };
  }
  function K(e) {
    if (null != e)
      return "string" === typeof e
        ? { role: "system", parts: [{ text: e }] }
        : e.text
        ? { role: "system", parts: [e] }
        : e.parts
        ? e.role
          ? e
          : { role: "system", parts: e.parts }
        : void 0;
  }
  function q(e) {
    let n = [];
    if ("string" === typeof e) n = [{ text: e }];
    else
      for (const t of e)
        "string" === typeof t ? n.push({ text: t }) : n.push(t);
    return (function (e) {
      const n = { role: "user", parts: [] },
        t = { role: "function", parts: [] };
      let r = !1,
        a = !1;
      for (const o of e)
        "functionResponse" in o
          ? (t.parts.push(o), (a = !0))
          : (n.parts.push(o), (r = !0));
      if (r && a)
        throw new E(
          "Within a single message, FunctionResponse cannot be mixed with other type of part in the request for sending chat message."
        );
      if (!r && !a)
        throw new E("No content is provided for sending chat message.");
      if (r) return n;
      return t;
    })(n);
  }
  function G(e) {
    let n;
    if (e.contents) n = e;
    else {
      n = { contents: [q(e)] };
    }
    return (
      e.systemInstruction && (n.systemInstruction = K(e.systemInstruction)), n
    );
  }
  const X = [
      "text",
      "inlineData",
      "functionCall",
      "functionResponse",
      "executableCode",
      "codeExecutionResult",
    ],
    J = {
      user: ["text", "inlineData"],
      function: ["functionResponse"],
      model: ["text", "functionCall", "executableCode", "codeExecutionResult"],
      system: ["text"],
    };
  const Z = "SILENT_ERROR";
  class ee {
    constructor(e, n, t) {
      let r =
        arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      (this.model = n),
        (this.params = t),
        (this._requestOptions = r),
        (this._history = []),
        (this._sendPromise = Promise.resolve()),
        (this._apiKey = e),
        (null === t || void 0 === t ? void 0 : t.history) &&
          (!(function (e) {
            let n = !1;
            for (const t of e) {
              const { role: e, parts: r } = t;
              if (!n && "user" !== e)
                throw new E(
                  `First content should be with role 'user', got ${e}`
                );
              if (!m.includes(e))
                throw new E(
                  `Each item should include role field. Got ${e} but valid roles are: ${JSON.stringify(
                    m
                  )}`
                );
              if (!Array.isArray(r))
                throw new E(
                  "Content should have 'parts' property with an array of Parts"
                );
              if (0 === r.length)
                throw new E("Each Content should have at least one part");
              const a = {
                text: 0,
                inlineData: 0,
                functionCall: 0,
                functionResponse: 0,
                fileData: 0,
                executableCode: 0,
                codeExecutionResult: 0,
              };
              for (const n of r) for (const e of X) e in n && (a[e] += 1);
              const o = J[e];
              for (const n of X)
                if (!o.includes(n) && a[n] > 0)
                  throw new E(
                    `Content with role '${e}' can't contain '${n}' part`
                  );
              n = !0;
            }
          })(t.history),
          (this._history = t.history));
    }
    async getHistory() {
      return await this._sendPromise, this._history;
    }
    async sendMessage(e) {
      let n =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      var t, r, a, o, l, i;
      await this._sendPromise;
      const u = q(e),
        s = {
          safetySettings:
            null === (t = this.params) || void 0 === t
              ? void 0
              : t.safetySettings,
          generationConfig:
            null === (r = this.params) || void 0 === r
              ? void 0
              : r.generationConfig,
          tools: null === (a = this.params) || void 0 === a ? void 0 : a.tools,
          toolConfig:
            null === (o = this.params) || void 0 === o ? void 0 : o.toolConfig,
          systemInstruction:
            null === (l = this.params) || void 0 === l
              ? void 0
              : l.systemInstruction,
          cachedContent:
            null === (i = this.params) || void 0 === i
              ? void 0
              : i.cachedContent,
          contents: [...this._history, u],
        },
        c = Object.assign(Object.assign({}, this._requestOptions), n);
      let f;
      return (
        (this._sendPromise = this._sendPromise
          .then(() => Q(this._apiKey, this.model, s, c))
          .then((e) => {
            var n;
            if (e.response.candidates && e.response.candidates.length > 0) {
              this._history.push(u);
              const t = Object.assign(
                { parts: [], role: "model" },
                null === (n = e.response.candidates) || void 0 === n
                  ? void 0
                  : n[0].content
              );
              this._history.push(t);
            } else {
              const n = D(e.response);
              n &&
                console.warn(
                  `sendMessage() was unsuccessful. ${n}. Inspect response object for details.`
                );
            }
            f = e;
          })),
        await this._sendPromise,
        f
      );
    }
    async sendMessageStream(e) {
      let n =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      var t, r, a, o, l, i;
      await this._sendPromise;
      const u = q(e),
        s = {
          safetySettings:
            null === (t = this.params) || void 0 === t
              ? void 0
              : t.safetySettings,
          generationConfig:
            null === (r = this.params) || void 0 === r
              ? void 0
              : r.generationConfig,
          tools: null === (a = this.params) || void 0 === a ? void 0 : a.tools,
          toolConfig:
            null === (o = this.params) || void 0 === o ? void 0 : o.toolConfig,
          systemInstruction:
            null === (l = this.params) || void 0 === l
              ? void 0
              : l.systemInstruction,
          cachedContent:
            null === (i = this.params) || void 0 === i
              ? void 0
              : i.cachedContent,
          contents: [...this._history, u],
        },
        c = Object.assign(Object.assign({}, this._requestOptions), n),
        f = Y(this._apiKey, this.model, s, c);
      return (
        (this._sendPromise = this._sendPromise
          .then(() => f)
          .catch((e) => {
            throw new Error(Z);
          })
          .then((e) => e.response)
          .then((e) => {
            if (e.candidates && e.candidates.length > 0) {
              this._history.push(u);
              const n = Object.assign({}, e.candidates[0].content);
              n.role || (n.role = "model"), this._history.push(n);
            } else {
              const n = D(e);
              n &&
                console.warn(
                  `sendMessageStream() was unsuccessful. ${n}. Inspect response object for details.`
                );
            }
          })
          .catch((e) => {
            e.message !== Z && console.error(e);
          })),
        f
      );
    }
  }
  class ne {
    constructor(e, n) {
      let t =
        arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      (this.apiKey = e),
        (this._requestOptions = t),
        n.model.includes("/")
          ? (this.model = n.model)
          : (this.model = `models/${n.model}`),
        (this.generationConfig = n.generationConfig || {}),
        (this.safetySettings = n.safetySettings || []),
        (this.tools = n.tools),
        (this.toolConfig = n.toolConfig),
        (this.systemInstruction = K(n.systemInstruction)),
        (this.cachedContent = n.cachedContent);
    }
    async generateContent(e) {
      let n =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      var t;
      const r = G(e),
        a = Object.assign(Object.assign({}, this._requestOptions), n);
      return Q(
        this.apiKey,
        this.model,
        Object.assign(
          {
            generationConfig: this.generationConfig,
            safetySettings: this.safetySettings,
            tools: this.tools,
            toolConfig: this.toolConfig,
            systemInstruction: this.systemInstruction,
            cachedContent:
              null === (t = this.cachedContent) || void 0 === t
                ? void 0
                : t.name,
          },
          r
        ),
        a
      );
    }
    async generateContentStream(e) {
      let n =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      var t;
      const r = G(e),
        a = Object.assign(Object.assign({}, this._requestOptions), n);
      return Y(
        this.apiKey,
        this.model,
        Object.assign(
          {
            generationConfig: this.generationConfig,
            safetySettings: this.safetySettings,
            tools: this.tools,
            toolConfig: this.toolConfig,
            systemInstruction: this.systemInstruction,
            cachedContent:
              null === (t = this.cachedContent) || void 0 === t
                ? void 0
                : t.name,
          },
          r
        ),
        a
      );
    }
    startChat(e) {
      var n;
      return new ee(
        this.apiKey,
        this.model,
        Object.assign(
          {
            generationConfig: this.generationConfig,
            safetySettings: this.safetySettings,
            tools: this.tools,
            toolConfig: this.toolConfig,
            systemInstruction: this.systemInstruction,
            cachedContent:
              null === (n = this.cachedContent) || void 0 === n
                ? void 0
                : n.name,
          },
          e
        ),
        this._requestOptions
      );
    }
    async countTokens(e) {
      let n =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const t = (function (e, n) {
          var t;
          let r = {
            model: null === n || void 0 === n ? void 0 : n.model,
            generationConfig:
              null === n || void 0 === n ? void 0 : n.generationConfig,
            safetySettings:
              null === n || void 0 === n ? void 0 : n.safetySettings,
            tools: null === n || void 0 === n ? void 0 : n.tools,
            toolConfig: null === n || void 0 === n ? void 0 : n.toolConfig,
            systemInstruction:
              null === n || void 0 === n ? void 0 : n.systemInstruction,
            cachedContent:
              null ===
                (t = null === n || void 0 === n ? void 0 : n.cachedContent) ||
              void 0 === t
                ? void 0
                : t.name,
            contents: [],
          };
          const a = null != e.generateContentRequest;
          if (e.contents) {
            if (a)
              throw new _(
                "CountTokensRequest must have one of contents or generateContentRequest, not both."
              );
            r.contents = e.contents;
          } else if (a)
            r = Object.assign(Object.assign({}, r), e.generateContentRequest);
          else {
            const n = q(e);
            r.contents = [n];
          }
          return { generateContentRequest: r };
        })(e, {
          model: this.model,
          generationConfig: this.generationConfig,
          safetySettings: this.safetySettings,
          tools: this.tools,
          toolConfig: this.toolConfig,
          systemInstruction: this.systemInstruction,
          cachedContent: this.cachedContent,
        }),
        r = Object.assign(Object.assign({}, this._requestOptions), n);
      return (async function (e, n, t, r) {
        return (await R(n, O.COUNT_TOKENS, e, !1, JSON.stringify(t), r)).json();
      })(this.apiKey, this.model, t, r);
    }
    async embedContent(e) {
      let n =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const t = (function (e) {
          if ("string" === typeof e || Array.isArray(e))
            return { content: q(e) };
          return e;
        })(e),
        r = Object.assign(Object.assign({}, this._requestOptions), n);
      return (async function (e, n, t, r) {
        return (
          await R(n, O.EMBED_CONTENT, e, !1, JSON.stringify(t), r)
        ).json();
      })(this.apiKey, this.model, t, r);
    }
    async batchEmbedContents(e) {
      let n =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const t = Object.assign(Object.assign({}, this._requestOptions), n);
      return (async function (e, n, t, r) {
        const a = t.requests.map((e) =>
          Object.assign(Object.assign({}, e), { model: n })
        );
        return (
          await R(
            n,
            O.BATCH_EMBED_CONTENTS,
            e,
            !1,
            JSON.stringify({ requests: a }),
            r
          )
        ).json();
      })(this.apiKey, this.model, e, t);
    }
  }
  class te {
    constructor(e) {
      this.apiKey = e;
    }
    getGenerativeModel(e, n) {
      if (!e.model)
        throw new E(
          "Must provide a model name. Example: genai.getGenerativeModel({ model: 'my-model-name' })"
        );
      return new ne(this.apiKey, e, n);
    }
    getGenerativeModelFromCachedContent(e, n) {
      if (!e.name) throw new _("Cached content must contain a `name` field.");
      if (!e.model) throw new _("Cached content must contain a `model` field.");
      const t = {
        model: e.model,
        tools: e.tools,
        toolConfig: e.toolConfig,
        systemInstruction: e.systemInstruction,
        cachedContent: e,
      };
      return new ne(this.apiKey, t, n);
    }
  }
  const re = t.p + "static/media/Avatar.67300af314f8b7912440.png";
  const ae = t.p + "static/media/setting.3abb942441822f7ba4d960722d1688a7.svg",
    oe = "AIzaSyAWOETDeqZyrTanHs7hClr_t698-3WgR_Q",
    le = () => {
      const [e, n] = (function (e, n) {
          const [t, a] = (0, r.useState)(() => {
            try {
              const t = window.localStorage.getItem(e);
              return t ? JSON.parse(t) : n;
            } catch (O) {
              return console.error(O), n;
            }
          });
          return [
            t,
            (n) => {
              try {
                const r = n instanceof Function ? n(t) : n;
                a(r), window.localStorage.setItem(e, JSON.stringify(r));
              } catch (O) {
                console.error(O);
              }
            },
          ];
        })("chatMessages", []),
        [t, a] = (0, r.useState)(""),
        [o, d] = (0, r.useState)(!1),
        p = (0, r.useRef)(null),
        [h, m] = (0, r.useState)(null),
        [g, v] = (0, r.useState)(!1);
      (0, r.useEffect)(() => {
        (async () => {
          if (oe)
            try {
              const e = new te(oe);
              m(e);
            } catch (O) {
              console.error("Error initializing Generative AI:", O);
            }
          else console.error("API key is missing");
        })();
      }, []),
        (0, r.useEffect)(() => {
          p.current && p.current.scrollIntoView({ behavior: "smooth" });
        }, [e]);
      const y = () => {
          const e = new Date();
          let n = e.getHours();
          const t = e.getMinutes(),
            r = n >= 12 ? "PM" : "AM";
          n = n % 12 || 12;
          return `${n}:${t < 10 ? `0${t}` : t} ${r}`;
        },
        b = (t) => {
          const r = e.filter((e, n) => n !== t);
          n(r);
        };
      let w;
      const k = (e) => {
          w = setTimeout(() => {
            ((e) => {
              b(e);
            })(e);
          }, 500);
        },
        S = () => {
          clearTimeout(w);
        },
        E =
          "ar" ===
          (function () {
            const [e, n] = (0, r.useState)("en");
            return (
              (0, r.useEffect)(() => {
                const e = navigator.language || navigator.userLanguage;
                n(e);
              }, []),
              e
            );
          })()
            ? "rtl"
            : "ltr",
        x = (function () {
          const [e, n] = (0, r.useState)("light");
          return (
            (0, r.useEffect)(() => {
              const e = window.matchMedia("(prefers-color-scheme: dark)"),
                t = (e) => {
                  n(e.matches ? "dark" : "light");
                };
              return (
                t(e),
                e.addEventListener("change", t),
                () => {
                  e.removeEventListener("change", t);
                }
              );
            }, []),
            e
          );
        })();
      (0, r.useEffect)(() => {
        document.body.style.backgroundColor =
          "dark" === x ? "black" : "transparent";
      }, [x]);
      const C = (function () {
          const [e, n] = (0, r.useState)(navigator.onLine);
          return (
            (0, r.useEffect)(() => {
              const e = () => n(!0),
                t = () => n(!1);
              return (
                window.addEventListener("online", e),
                window.addEventListener("offline", t),
                () => {
                  window.removeEventListener("online", e),
                    window.removeEventListener("offline", t);
                }
              );
            }, []),
            e
          );
        })(),
        { level: _, charging: N } = (() => {
          const [e, n] = (0, r.useState)({ level: null, charging: null });
          return (
            (0, r.useEffect)(() => {
              "getBattery" in navigator
                ? navigator.getBattery().then((e) => {
                    n({ level: e.level, charging: e.charging });
                    const t = () => {
                      n({ level: e.level, charging: e.charging });
                    };
                    return (
                      e.addEventListener("levelchange", t),
                      e.addEventListener("chargingchange", t),
                      () => {
                        e.removeEventListener("levelchange", t),
                          e.removeEventListener("chargingchange", t);
                      }
                    );
                  })
                : console.log(
                    "Battery Status API is not supported in this browser."
                  );
            }, []),
            e
          );
        })(),
        { country: T, error: O } = (() => {
          const [e, n] = (0, r.useState)(null),
            [t, a] = (0, r.useState)(!0),
            [o, l] = (0, r.useState)(null);
          return (
            (0, r.useEffect)(() => {
              (async () => {
                try {
                  const e = await fetch("https://ipapi.co/json/");
                  if (!e.ok) throw new Error("Failed to fetch country data");
                  const t = await e.json();
                  n(t.country_name);
                } catch (e) {
                  console.error("Error fetching the user's country:", e),
                    l("Could not determine your country.");
                } finally {
                  a(!1);
                }
              })();
            }, []),
            { country: e, loading: t, error: o }
          );
        })(),
        { continent: I } = (() => {
          const [e, n] = (0, r.useState)(null);
          return (
            (0, r.useEffect)(() => {
              navigator.geolocation
                ? navigator.geolocation.getCurrentPosition(
                    (e) => {
                      const { latitude: t, longitude: r } = e.coords,
                        a = ((e, n) => {
                          if (e && n) {
                            if (e >= -34 && e <= 37 && n >= -17 && n <= 51)
                              return "Africa";
                            if (e >= 10 && e <= 82 && n >= 25 && n <= 180)
                              return "Asia";
                            if (e >= 10 && e <= 83 && n >= -168 && n <= -52)
                              return "North America";
                            if (e >= -56 && e <= 13 && n >= -93 && n <= -32)
                              return "South America";
                            if (e >= -48 && e <= -12 && n >= 110 && n <= 180)
                              return "Australia";
                            if (e >= 35 && e <= 72 && n >= -25 && n <= 45)
                              return "Europe";
                            if (e >= -90 && e <= -60) return "Antarctica";
                          }
                          return "Unknown";
                        })(t, r);
                      n(a);
                    },
                    (e) => {
                      console.error("Error getting location:", e), n("Unknown");
                    }
                  )
                : n("Unknown");
            }, []),
            { continent: e }
          );
        })();
      return O
        ? (0, l.jsxs)("p", { children: ["Error: ", O] })
        : (0, l.jsxs)("div", {
            className: "chat-app",
            dir: E,
            children: [
              (0, l.jsxs)("div", {
                className: "chat-header",
                children: [
                  (0, l.jsxs)("div", {
                    className: "header-left",
                    children: [
                      (0, l.jsx)("img", {
                        src: re,
                        alt: "Avatar",
                        className: "avatar",
                      }),
                      (0, l.jsxs)(i, {
                        edit: { color: "black", fontWeight: "bold" },
                        children: [
                          "Magia ChatBot ",
                          (0, l.jsx)("span", {
                            children: C ? " Online " : " Offline ",
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, l.jsx)("div", {
                    className: "header-right",
                    children: (0, l.jsx)("details", {
                      onToggle: () => v((e) => !e),
                      children: (0, l.jsx)("summary", {
                        children: (0, l.jsx)("img", {
                          className: "settingIcon",
                          src: ae,
                        }),
                      }),
                    }),
                  }),
                ],
              }),
              (0, l.jsxs)("div", {
                className: "chat-body",
                children: [
                  (0, l.jsxs)("div", {
                    style: { fontSize: "1.2rem", textAlign: "start" },
                    children: [
                      e.map((e, n) =>
                        (0, l.jsxs)(
                          "div",
                          {
                            onDoubleClick: () => b(n),
                            onTouchStart: () => k(n),
                            onTouchEnd: S,
                            id: "SMS",
                            className: `message ${e.sender}`,
                            children: [
                              (0, l.jsxs)(f, {
                                edit: { all: "none" },
                                children: [e.text, "  "],
                              }),
                              (0, l.jsxs)("div", {
                                className: "message-time",
                                children: [" ", e.time],
                              }),
                            ],
                          },
                          n
                        )
                      ),
                      o &&
                        (0, l.jsx)("div", {
                          className: "message ai",
                          children: (0, l.jsx)(c, { children: "Loading..." }),
                        }),
                    ],
                  }),
                  (0, l.jsx)("div", { ref: p }),
                ],
              }),
              (0, l.jsxs)("form", {
                onSubmit: async (r) => {
                  if ((r.preventDefault(), "" !== t.trim() && h)) {
                    const r = y(),
                      l = [...e, { sender: "user", text: t, time: r }];
                    n(l), d(!0);
                    try {
                      var o;
                      const e = h.getGenerativeModel({
                          model: "gemini-1.5-flash",
                        }),
                        r = await e.generateContent(t),
                        a =
                          null !== r &&
                          void 0 !== r &&
                          null !== (o = r.response) &&
                          void 0 !== o &&
                          o.text
                            ? r.response.text()
                            : "Sorry, I didn't understand that.",
                        i = [...l, { sender: "ai", text: a, time: y() }];
                      n(i);
                    } catch (O) {
                      console.error(
                        "Error getting response from Generative AI:",
                        O
                      );
                      const t = [
                        ...l,
                        {
                          sender: "ai",
                          text: "Sorry, something went wrong. Please try again.",
                          time: y(),
                        },
                      ];
                      n(t);
                    } finally {
                      d(!1);
                    }
                    a("");
                  }
                },
                className: "chat-input",
                children: [
                  (0, l.jsx)("input", {
                    type: "text",
                    value: t,
                    onChange: (e) => a(e.target.value),
                    placeholder: "Type your message...",
                    disabled: o,
                  }),
                  (0, l.jsx)(s, {
                    edit: { height: "3rem", width: "10rem" },
                    disabled: o,
                    children: (0, l.jsx)(u, {
                      edit: { color: "white" },
                      children: o ? "Sending..." : "Send",
                    }),
                  }),
                ],
              }),
              g &&
                (0, l.jsxs)(i, {
                  RoseName: "infopop",
                  autoLayout: !0,
                  AutoHandling: !0,
                  children: [
                    (0, l.jsxs)("div", { children: ["Your Country is: ", T] }),
                    (0, l.jsxs)("div", {
                      children: [
                        "Your continent is ",
                        I || "Determining your location...",
                      ],
                    }),
                    (0, l.jsxs)("div", {
                      children: [
                        "Battery:",
                        " ",
                        null !== _
                          ? (0, l.jsxs)("div", {
                              children: [
                                (0, l.jsxs)("p", {
                                  children: [
                                    "Battery Level: ",
                                    Math.round(100 * _),
                                    "%",
                                  ],
                                }),
                                (0, l.jsx)("p", {
                                  children: N ? "Charging" : "Not Charging",
                                }),
                              ],
                            })
                          : (0, l.jsx)("p", {
                              children:
                                "Battery Status API not supported or unable to retrieve battery status.",
                            }),
                      ],
                    }),
                  ],
                }),
            ],
          });
    },
    ie = (e) => {
      e &&
        e instanceof Function &&
        t
          .e(511)
          .then(t.bind(t, 511))
          .then((n) => {
            let { getCLS: t, getFID: r, getFCP: a, getLCP: o, getTTFB: l } = n;
            t(e), r(e), a(e), o(e), l(e);
          });
    };
  var ue,
    se = t(396),
    ce = t.t(se, 2);
  function fe() {
    return (
      (fe = Object.assign
        ? Object.assign.bind()
        : function (e) {
            for (var n = 1; n < arguments.length; n++) {
              var t = arguments[n];
              for (var r in t)
                Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            }
            return e;
          }),
      fe.apply(this, arguments)
    );
  }
  !(function (e) {
    (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
  })(ue || (ue = {}));
  const de = "popstate";
  function pe(e, n) {
    if (!1 === e || null === e || "undefined" === typeof e) throw new Error(n);
  }
  function he(e, n) {
    return { usr: e.state, key: e.key, idx: n };
  }
  function me(e, n, t, r) {
    return (
      void 0 === t && (t = null),
      fe(
        {
          pathname: "string" === typeof e ? e : e.pathname,
          search: "",
          hash: "",
        },
        "string" === typeof n ? ve(n) : n,
        {
          state: t,
          key: (n && n.key) || r || Math.random().toString(36).substr(2, 8),
        }
      )
    );
  }
  function ge(e) {
    let { pathname: n = "/", search: t = "", hash: r = "" } = e;
    return (
      t && "?" !== t && (n += "?" === t.charAt(0) ? t : "?" + t),
      r && "#" !== r && (n += "#" === r.charAt(0) ? r : "#" + r),
      n
    );
  }
  function ve(e) {
    let n = {};
    if (e) {
      let t = e.indexOf("#");
      t >= 0 && ((n.hash = e.substr(t)), (e = e.substr(0, t)));
      let r = e.indexOf("?");
      r >= 0 && ((n.search = e.substr(r)), (e = e.substr(0, r))),
        e && (n.pathname = e);
    }
    return n;
  }
  function ye(e, n, t, r) {
    void 0 === r && (r = {});
    let { window: a = document.defaultView, v5Compat: o = !1 } = r,
      l = a.history,
      i = ue.Pop,
      u = null,
      s = c();
    function c() {
      return (l.state || { idx: null }).idx;
    }
    function f() {
      i = ue.Pop;
      let e = c(),
        n = null == e ? null : e - s;
      (s = e), u && u({ action: i, location: p.location, delta: n });
    }
    function d(e) {
      let n =
          "null" !== a.location.origin ? a.location.origin : a.location.href,
        t = "string" === typeof e ? e : ge(e);
      return (
        (t = t.replace(/ $/, "%20")),
        pe(
          n,
          "No window.location.(origin|href) available to create URL for href: " +
            t
        ),
        new URL(t, n)
      );
    }
    null == s && ((s = 0), l.replaceState(fe({}, l.state, { idx: s }), ""));
    let p = {
      get action() {
        return i;
      },
      get location() {
        return e(a, l);
      },
      listen(e) {
        if (u) throw new Error("A history only accepts one active listener");
        return (
          a.addEventListener(de, f),
          (u = e),
          () => {
            a.removeEventListener(de, f), (u = null);
          }
        );
      },
      createHref: (e) => n(a, e),
      createURL: d,
      encodeLocation(e) {
        let n = d(e);
        return { pathname: n.pathname, search: n.search, hash: n.hash };
      },
      push: function (e, n) {
        i = ue.Push;
        let r = me(p.location, e, n);
        t && t(r, e), (s = c() + 1);
        let f = he(r, s),
          d = p.createHref(r);
        try {
          l.pushState(f, "", d);
        } catch (h) {
          if (h instanceof DOMException && "DataCloneError" === h.name) throw h;
          a.location.assign(d);
        }
        o && u && u({ action: i, location: p.location, delta: 1 });
      },
      replace: function (e, n) {
        i = ue.Replace;
        let r = me(p.location, e, n);
        t && t(r, e), (s = c());
        let a = he(r, s),
          f = p.createHref(r);
        l.replaceState(a, "", f),
          o && u && u({ action: i, location: p.location, delta: 0 });
      },
      go: (e) => l.go(e),
    };
    return p;
  }
  var be;
  !(function (e) {
    (e.data = "data"),
      (e.deferred = "deferred"),
      (e.redirect = "redirect"),
      (e.error = "error");
  })(be || (be = {}));
  new Set(["lazy", "caseSensitive", "path", "id", "index", "children"]);
  function we(e, n) {
    if ("/" === n) return e;
    if (!e.toLowerCase().startsWith(n.toLowerCase())) return null;
    let t = n.endsWith("/") ? n.length - 1 : n.length,
      r = e.charAt(t);
    return r && "/" !== r ? null : e.slice(t) || "/";
  }
  Error;
  const ke = ["post", "put", "patch", "delete"],
    Se = (new Set(ke), ["get", ...ke]);
  new Set(Se), new Set([301, 302, 303, 307, 308]), new Set([307, 308]);
  Symbol("deferred");
  function Ee() {
    return (
      (Ee = Object.assign
        ? Object.assign.bind()
        : function (e) {
            for (var n = 1; n < arguments.length; n++) {
              var t = arguments[n];
              for (var r in t)
                Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            }
            return e;
          }),
      Ee.apply(this, arguments)
    );
  }
  const xe = r.createContext(null);
  const Ce = r.createContext(null);
  function _e() {
    return null != r.useContext(Ce);
  }
  r.Component;
  a.startTransition;
  function Ne(e) {
    let {
      basename: n = "/",
      children: t = null,
      location: a,
      navigationType: o = ue.Pop,
      navigator: l,
      static: i = !1,
      future: u,
    } = e;
    _e() && pe(!1);
    let s = n.replace(/^\/*/, "/"),
      c = r.useMemo(
        () => ({
          basename: s,
          navigator: l,
          static: i,
          future: Ee({ v7_relativeSplatPath: !1 }, u),
        }),
        [s, u, l, i]
      );
    "string" === typeof a && (a = ve(a));
    let {
        pathname: f = "/",
        search: d = "",
        hash: p = "",
        state: h = null,
        key: m = "default",
      } = a,
      g = r.useMemo(() => {
        let e = we(f, s);
        return null == e
          ? null
          : {
              location: { pathname: e, search: d, hash: p, state: h, key: m },
              navigationType: o,
            };
      }, [s, f, d, p, h, m, o]);
    return null == g
      ? null
      : r.createElement(
          xe.Provider,
          { value: c },
          r.createElement(Ce.Provider, { children: t, value: g })
        );
  }
  new Promise(() => {});
  r.Component;
  new Set([
    "application/x-www-form-urlencoded",
    "multipart/form-data",
    "text/plain",
  ]);
  try {
    window.__reactRouterVersion = "6";
  } catch (Re) {}
  new Map();
  const Te = a.startTransition;
  ce.flushSync, a.useId;
  function Oe(e) {
    let { basename: n, children: t, future: a, window: o } = e,
      l = r.useRef();
    var i;
    null == l.current &&
      (l.current =
        (void 0 === (i = { window: o, v5Compat: !0 }) && (i = {}),
        ye(
          function (e, n) {
            let { pathname: t, search: r, hash: a } = e.location;
            return me(
              "",
              { pathname: t, search: r, hash: a },
              (n.state && n.state.usr) || null,
              (n.state && n.state.key) || "default"
            );
          },
          function (e, n) {
            return "string" === typeof n ? n : ge(n);
          },
          null,
          i
        )));
    let u = l.current,
      [s, c] = r.useState({ action: u.action, location: u.location }),
      { v7_startTransition: f } = a || {},
      d = r.useCallback(
        (e) => {
          f && Te ? Te(() => c(e)) : c(e);
        },
        [c, f]
      );
    return (
      r.useLayoutEffect(() => u.listen(d), [u, d]),
      r.createElement(Ne, {
        basename: n,
        children: t,
        location: s.location,
        navigationType: s.action,
        navigator: u,
        future: a,
      })
    );
  }
  "undefined" !== typeof window &&
    "undefined" !== typeof window.document &&
    window.document.createElement;
  var Ie, Pe;
  (function (e) {
    (e.UseScrollRestoration = "useScrollRestoration"),
      (e.UseSubmit = "useSubmit"),
      (e.UseSubmitFetcher = "useSubmitFetcher"),
      (e.UseFetcher = "useFetcher"),
      (e.useViewTransitionState = "useViewTransitionState");
  })(Ie || (Ie = {})),
    (function (e) {
      (e.UseFetcher = "useFetcher"),
        (e.UseFetchers = "useFetchers"),
        (e.UseScrollRestoration = "useScrollRestoration");
    })(Pe || (Pe = {}));
  o.createRoot(document.getElementById("root")).render(
    (0, l.jsx)(Oe, {
      children: (0, l.jsx)(r.StrictMode, { children: (0, l.jsx)(le, {}) }),
    })
  ),
    ie();
})();
//# sourceMappingURL=main.ed3ff827.js.map
