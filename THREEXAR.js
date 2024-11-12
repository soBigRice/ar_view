import * as THREE$1 from "three";
const ArBaseControls = function(object3d) {
  this.id = ArBaseControls.id++;
  this.object3d = object3d;
  this.object3d.matrixAutoUpdate = false;
  this.object3d.visible = false;
};
ArBaseControls.id = 0;
ArBaseControls.prototype = Object.create(THREE$1.EventDispatcher.prototype);
ArBaseControls.prototype.update = function() {
  console.assert(false, "you need to implement your own update");
};
ArBaseControls.prototype.name = function() {
  console.assert(false, "you need to implement your own .name()");
  return "Not yet implemented - name()";
};
function WorkerWrapper(options) {
  return new Worker(
    "" + new URL("assets/arjs-markercontrols-nft.worker-txXnPT5Q.js", import.meta.url).href,
    {
      name: options == null ? void 0 : options.name
    }
  );
}
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
var ARToolkit$1 = { exports: {} };
/*! For license information please see ARToolkit.js.LICENSE.txt */
(function(module, exports) {
  !function(A, I) {
    module.exports = I();
  }("undefined" != typeof self ? self : commonjsGlobal, () => (() => {
    var A = { 230: (A2) => {
      A2.exports = "object" == typeof self ? self.FormData : window.FormData;
    }, 654: () => {
    }, 231: () => {
    }, 703: () => {
    }, 61: (A2, I2, g2) => {
      var B2 = g2(698).default;
      function C() {
        A2.exports = C = function() {
          return I3;
        }, A2.exports.__esModule = true, A2.exports.default = A2.exports;
        var I3 = {}, g3 = Object.prototype, Q = g3.hasOwnProperty, E = Object.defineProperty || function(A3, I4, g4) {
          A3[I4] = g4.value;
        }, i = "function" == typeof Symbol ? Symbol : {}, o = i.iterator || "@@iterator", D = i.asyncIterator || "@@asyncIterator", a = i.toStringTag || "@@toStringTag";
        function t(A3, I4, g4) {
          return Object.defineProperty(A3, I4, { value: g4, enumerable: true, configurable: true, writable: true }), A3[I4];
        }
        try {
          t({}, "");
        } catch (A3) {
          t = function(A4, I4, g4) {
            return A4[I4] = g4;
          };
        }
        function s(A3, I4, g4, B3) {
          var C2 = I4 && I4.prototype instanceof h ? I4 : h, Q2 = Object.create(C2.prototype), i2 = new J(B3 || []);
          return E(Q2, "_invoke", { value: c(A3, g4, i2) }), Q2;
        }
        function w(A3, I4, g4) {
          try {
            return { type: "normal", arg: A3.call(I4, g4) };
          } catch (A4) {
            return { type: "throw", arg: A4 };
          }
        }
        I3.wrap = s;
        var G = {};
        function h() {
        }
        function r() {
        }
        function R() {
        }
        var y = {};
        t(y, o, function() {
          return this;
        });
        var F = Object.getPrototypeOf, e = F && F(F(K([])));
        e && e !== g3 && Q.call(e, o) && (y = e);
        var M = R.prototype = h.prototype = Object.create(y);
        function n(A3) {
          ["next", "throw", "return"].forEach(function(I4) {
            t(A3, I4, function(A4) {
              return this._invoke(I4, A4);
            });
          });
        }
        function S(A3, I4) {
          function g4(C3, E2, i2, o2) {
            var D2 = w(A3[C3], A3, E2);
            if ("throw" !== D2.type) {
              var a2 = D2.arg, t2 = a2.value;
              return t2 && "object" == B2(t2) && Q.call(t2, "__await") ? I4.resolve(t2.__await).then(function(A4) {
                g4("next", A4, i2, o2);
              }, function(A4) {
                g4("throw", A4, i2, o2);
              }) : I4.resolve(t2).then(function(A4) {
                a2.value = A4, i2(a2);
              }, function(A4) {
                return g4("throw", A4, i2, o2);
              });
            }
            o2(D2.arg);
          }
          var C2;
          E(this, "_invoke", { value: function(A4, B3) {
            function Q2() {
              return new I4(function(I5, C3) {
                g4(A4, B3, I5, C3);
              });
            }
            return C2 = C2 ? C2.then(Q2, Q2) : Q2();
          } });
        }
        function c(A3, I4, g4) {
          var B3 = "suspendedStart";
          return function(C2, Q2) {
            if ("executing" === B3) throw new Error("Generator is already running");
            if ("completed" === B3) {
              if ("throw" === C2) throw Q2;
              return { value: void 0, done: true };
            }
            for (g4.method = C2, g4.arg = Q2; ; ) {
              var E2 = g4.delegate;
              if (E2) {
                var i2 = N(E2, g4);
                if (i2) {
                  if (i2 === G) continue;
                  return i2;
                }
              }
              if ("next" === g4.method) g4.sent = g4._sent = g4.arg;
              else if ("throw" === g4.method) {
                if ("suspendedStart" === B3) throw B3 = "completed", g4.arg;
                g4.dispatchException(g4.arg);
              } else "return" === g4.method && g4.abrupt("return", g4.arg);
              B3 = "executing";
              var o2 = w(A3, I4, g4);
              if ("normal" === o2.type) {
                if (B3 = g4.done ? "completed" : "suspendedYield", o2.arg === G) continue;
                return { value: o2.arg, done: g4.done };
              }
              "throw" === o2.type && (B3 = "completed", g4.method = "throw", g4.arg = o2.arg);
            }
          };
        }
        function N(A3, I4) {
          var g4 = I4.method, B3 = A3.iterator[g4];
          if (void 0 === B3) return I4.delegate = null, "throw" === g4 && A3.iterator.return && (I4.method = "return", I4.arg = void 0, N(A3, I4), "throw" === I4.method) || "return" !== g4 && (I4.method = "throw", I4.arg = new TypeError("The iterator does not provide a '" + g4 + "' method")), G;
          var C2 = w(B3, A3.iterator, I4.arg);
          if ("throw" === C2.type) return I4.method = "throw", I4.arg = C2.arg, I4.delegate = null, G;
          var Q2 = C2.arg;
          return Q2 ? Q2.done ? (I4[A3.resultName] = Q2.value, I4.next = A3.nextLoc, "return" !== I4.method && (I4.method = "next", I4.arg = void 0), I4.delegate = null, G) : Q2 : (I4.method = "throw", I4.arg = new TypeError("iterator result is not an object"), I4.delegate = null, G);
        }
        function k(A3) {
          var I4 = { tryLoc: A3[0] };
          1 in A3 && (I4.catchLoc = A3[1]), 2 in A3 && (I4.finallyLoc = A3[2], I4.afterLoc = A3[3]), this.tryEntries.push(I4);
        }
        function U(A3) {
          var I4 = A3.completion || {};
          I4.type = "normal", delete I4.arg, A3.completion = I4;
        }
        function J(A3) {
          this.tryEntries = [{ tryLoc: "root" }], A3.forEach(k, this), this.reset(true);
        }
        function K(A3) {
          if (A3) {
            var I4 = A3[o];
            if (I4) return I4.call(A3);
            if ("function" == typeof A3.next) return A3;
            if (!isNaN(A3.length)) {
              var g4 = -1, B3 = function I5() {
                for (; ++g4 < A3.length; ) if (Q.call(A3, g4)) return I5.value = A3[g4], I5.done = false, I5;
                return I5.value = void 0, I5.done = true, I5;
              };
              return B3.next = B3;
            }
          }
          return { next: Y };
        }
        function Y() {
          return { value: void 0, done: true };
        }
        return r.prototype = R, E(M, "constructor", { value: R, configurable: true }), E(R, "constructor", { value: r, configurable: true }), r.displayName = t(R, a, "GeneratorFunction"), I3.isGeneratorFunction = function(A3) {
          var I4 = "function" == typeof A3 && A3.constructor;
          return !!I4 && (I4 === r || "GeneratorFunction" === (I4.displayName || I4.name));
        }, I3.mark = function(A3) {
          return Object.setPrototypeOf ? Object.setPrototypeOf(A3, R) : (A3.__proto__ = R, t(A3, a, "GeneratorFunction")), A3.prototype = Object.create(M), A3;
        }, I3.awrap = function(A3) {
          return { __await: A3 };
        }, n(S.prototype), t(S.prototype, D, function() {
          return this;
        }), I3.AsyncIterator = S, I3.async = function(A3, g4, B3, C2, Q2) {
          void 0 === Q2 && (Q2 = Promise);
          var E2 = new S(s(A3, g4, B3, C2), Q2);
          return I3.isGeneratorFunction(g4) ? E2 : E2.next().then(function(A4) {
            return A4.done ? A4.value : E2.next();
          });
        }, n(M), t(M, a, "Generator"), t(M, o, function() {
          return this;
        }), t(M, "toString", function() {
          return "[object Generator]";
        }), I3.keys = function(A3) {
          var I4 = Object(A3), g4 = [];
          for (var B3 in I4) g4.push(B3);
          return g4.reverse(), function A4() {
            for (; g4.length; ) {
              var B4 = g4.pop();
              if (B4 in I4) return A4.value = B4, A4.done = false, A4;
            }
            return A4.done = true, A4;
          };
        }, I3.values = K, J.prototype = { constructor: J, reset: function(A3) {
          if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = false, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(U), !A3) for (var I4 in this) "t" === I4.charAt(0) && Q.call(this, I4) && !isNaN(+I4.slice(1)) && (this[I4] = void 0);
        }, stop: function() {
          this.done = true;
          var A3 = this.tryEntries[0].completion;
          if ("throw" === A3.type) throw A3.arg;
          return this.rval;
        }, dispatchException: function(A3) {
          if (this.done) throw A3;
          var I4 = this;
          function g4(g5, B4) {
            return E2.type = "throw", E2.arg = A3, I4.next = g5, B4 && (I4.method = "next", I4.arg = void 0), !!B4;
          }
          for (var B3 = this.tryEntries.length - 1; B3 >= 0; --B3) {
            var C2 = this.tryEntries[B3], E2 = C2.completion;
            if ("root" === C2.tryLoc) return g4("end");
            if (C2.tryLoc <= this.prev) {
              var i2 = Q.call(C2, "catchLoc"), o2 = Q.call(C2, "finallyLoc");
              if (i2 && o2) {
                if (this.prev < C2.catchLoc) return g4(C2.catchLoc, true);
                if (this.prev < C2.finallyLoc) return g4(C2.finallyLoc);
              } else if (i2) {
                if (this.prev < C2.catchLoc) return g4(C2.catchLoc, true);
              } else {
                if (!o2) throw new Error("try statement without catch or finally");
                if (this.prev < C2.finallyLoc) return g4(C2.finallyLoc);
              }
            }
          }
        }, abrupt: function(A3, I4) {
          for (var g4 = this.tryEntries.length - 1; g4 >= 0; --g4) {
            var B3 = this.tryEntries[g4];
            if (B3.tryLoc <= this.prev && Q.call(B3, "finallyLoc") && this.prev < B3.finallyLoc) {
              var C2 = B3;
              break;
            }
          }
          C2 && ("break" === A3 || "continue" === A3) && C2.tryLoc <= I4 && I4 <= C2.finallyLoc && (C2 = null);
          var E2 = C2 ? C2.completion : {};
          return E2.type = A3, E2.arg = I4, C2 ? (this.method = "next", this.next = C2.finallyLoc, G) : this.complete(E2);
        }, complete: function(A3, I4) {
          if ("throw" === A3.type) throw A3.arg;
          return "break" === A3.type || "continue" === A3.type ? this.next = A3.arg : "return" === A3.type ? (this.rval = this.arg = A3.arg, this.method = "return", this.next = "end") : "normal" === A3.type && I4 && (this.next = I4), G;
        }, finish: function(A3) {
          for (var I4 = this.tryEntries.length - 1; I4 >= 0; --I4) {
            var g4 = this.tryEntries[I4];
            if (g4.finallyLoc === A3) return this.complete(g4.completion, g4.afterLoc), U(g4), G;
          }
        }, catch: function(A3) {
          for (var I4 = this.tryEntries.length - 1; I4 >= 0; --I4) {
            var g4 = this.tryEntries[I4];
            if (g4.tryLoc === A3) {
              var B3 = g4.completion;
              if ("throw" === B3.type) {
                var C2 = B3.arg;
                U(g4);
              }
              return C2;
            }
          }
          throw new Error("illegal catch attempt");
        }, delegateYield: function(A3, I4, g4) {
          return this.delegate = { iterator: K(A3), resultName: I4, nextLoc: g4 }, "next" === this.method && (this.arg = void 0), G;
        } }, I3;
      }
      A2.exports = C, A2.exports.__esModule = true, A2.exports.default = A2.exports;
    }, 698: (A2) => {
      function I2(g2) {
        return A2.exports = I2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(A3) {
          return typeof A3;
        } : function(A3) {
          return A3 && "function" == typeof Symbol && A3.constructor === Symbol && A3 !== Symbol.prototype ? "symbol" : typeof A3;
        }, A2.exports.__esModule = true, A2.exports.default = A2.exports, I2(g2);
      }
      A2.exports = I2, A2.exports.__esModule = true, A2.exports.default = A2.exports;
    }, 687: (A2, I2, g2) => {
      var B2 = g2(61)();
      A2.exports = B2;
      try {
        regeneratorRuntime = B2;
      } catch (A3) {
        "object" == typeof globalThis ? globalThis.regeneratorRuntime = B2 : Function("r", "regeneratorRuntime = r")(B2);
      }
    } }, I = {};
    function g(B2) {
      var C = I[B2];
      if (void 0 !== C) return C.exports;
      var Q = I[B2] = { exports: {} };
      return A[B2](Q, Q.exports, g), Q.exports;
    }
    g.n = (A2) => {
      var I2 = A2 && A2.__esModule ? () => A2.default : () => A2;
      return g.d(I2, { a: I2 }), I2;
    }, g.d = (A2, I2) => {
      for (var B2 in I2) g.o(I2, B2) && !g.o(A2, B2) && Object.defineProperty(A2, B2, { enumerable: true, get: I2[B2] });
    }, g.g = function() {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (A2) {
        if ("object" == typeof window) return window;
      }
    }(), g.o = (A2, I2) => Object.prototype.hasOwnProperty.call(A2, I2);
    var B = {};
    return (() => {
      function A2(A3, I3, g2, B2, C2, Q2, E2) {
        try {
          var i2 = A3[Q2](E2), o2 = i2.value;
        } catch (A4) {
          return void g2(A4);
        }
        i2.done ? I3(o2) : Promise.resolve(o2).then(B2, C2);
      }
      function I2(I3) {
        return function() {
          var g2 = this, B2 = arguments;
          return new Promise(function(C2, Q2) {
            var E2 = I3.apply(g2, B2);
            function i2(I4) {
              A2(E2, C2, Q2, i2, o2, "next", I4);
            }
            function o2(I4) {
              A2(E2, C2, Q2, i2, o2, "throw", I4);
            }
            i2(void 0);
          });
        };
      }
      function C(A3, I3) {
        if (!(A3 instanceof I3)) throw new TypeError("Cannot call a class as a function");
      }
      function Q(A3) {
        return Q = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(A4) {
          return typeof A4;
        } : function(A4) {
          return A4 && "function" == typeof Symbol && A4.constructor === Symbol && A4 !== Symbol.prototype ? "symbol" : typeof A4;
        }, Q(A3);
      }
      function E(A3) {
        var I3 = function(A4, I4) {
          if ("object" !== Q(A4) || null === A4) return A4;
          var g2 = A4[Symbol.toPrimitive];
          if (void 0 !== g2) {
            var B2 = g2.call(A4, I4);
            if ("object" !== Q(B2)) return B2;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(A4);
        }(A3, "string");
        return "symbol" === Q(I3) ? I3 : String(I3);
      }
      function i(A3, I3) {
        for (var g2 = 0; g2 < I3.length; g2++) {
          var B2 = I3[g2];
          B2.enumerable = B2.enumerable || false, B2.configurable = true, "value" in B2 && (B2.writable = true), Object.defineProperty(A3, E(B2.key), B2);
        }
      }
      function o(A3, I3, g2) {
        return I3 && i(A3.prototype, I3), g2 && i(A3, g2), Object.defineProperty(A3, "prototype", { writable: false }), A3;
      }
      g.d(B, { default: () => BI });
      var D, a = g(687), t = g.n(a), s = (D = (D = "undefined" != typeof document && document.currentScript ? document.currentScript.src : void 0) || "/index.js", function(A3) {
        var I3, B2;
        (A3 = void 0 !== (A3 = A3 || {}) ? A3 : {}).ready = new Promise(function(A4, g2) {
          I3 = A4, B2 = g2;
        });
        var C2, E2, i2, o2, a2, t2, s2 = Object.assign({}, A3), G2 = "./this.program", h2 = function(A4, I4) {
          throw I4;
        }, r2 = "object" == ("undefined" == typeof window ? "undefined" : Q(window)), R2 = "function" == typeof importScripts, y2 = "object" == ("undefined" == typeof process ? "undefined" : Q(process)) && "object" == Q(process.versions) && "string" == typeof process.versions.node, F2 = "";
        y2 ? (F2 = R2 ? g(703).dirname(F2) + "/" : "//", t2 = function() {
          a2 || (o2 = g(231), a2 = g(703));
        }, C2 = function(A4, I4) {
          var g2 = pI(A4);
          return g2 ? I4 ? g2 : g2.toString() : (t2(), A4 = a2.normalize(A4), o2.readFileSync(A4, I4 ? void 0 : "utf8"));
        }, i2 = function(A4) {
          var I4 = C2(A4, true);
          return I4.buffer || (I4 = new Uint8Array(I4)), I4;
        }, E2 = function(A4, I4, g2) {
          var B3 = pI(A4);
          B3 && I4(B3), t2(), A4 = a2.normalize(A4), o2.readFile(A4, function(A5, B4) {
            A5 ? g2(A5) : I4(B4.buffer);
          });
        }, process.argv.length > 1 && (G2 = process.argv[1].replace(/\\/g, "/")), process.argv.slice(2), process.on("uncaughtException", function(A4) {
          if (!(A4 instanceof oA2)) throw A4;
        }), process.on("unhandledRejection", function(A4) {
          throw A4;
        }), h2 = function(A4, I4) {
          if (X2()) throw process.exitCode = A4, I4;
          var g2;
          (g2 = I4) instanceof oA2 || n2("exiting due to exception: " + g2), process.exit(A4);
        }, A3.inspect = function() {
          return "[Emscripten Module object]";
        }) : (r2 || R2) && (R2 ? F2 = self.location.href : "undefined" != typeof document && document.currentScript && (F2 = document.currentScript.src), D && (F2 = D), F2 = 0 !== F2.indexOf("blob:") ? F2.substr(0, F2.replace(/[?#].*/, "").lastIndexOf("/") + 1) : "", C2 = function(A4) {
          try {
            var I4 = new XMLHttpRequest();
            return I4.open("GET", A4, false), I4.send(null), I4.responseText;
          } catch (I5) {
            var g2 = pI(A4);
            if (g2) return function(A5) {
              for (var I6 = [], g3 = 0; g3 < A5.length; g3++) {
                var B3 = A5[g3];
                B3 > 255 && (B3 &= 255), I6.push(String.fromCharCode(B3));
              }
              return I6.join("");
            }(g2);
            throw I5;
          }
        }, R2 && (i2 = function(A4) {
          try {
            var I4 = new XMLHttpRequest();
            return I4.open("GET", A4, false), I4.responseType = "arraybuffer", I4.send(null), new Uint8Array(I4.response);
          } catch (I5) {
            var g2 = pI(A4);
            if (g2) return g2;
            throw I5;
          }
        }), E2 = function(A4, I4, g2) {
          var B3 = new XMLHttpRequest();
          B3.open("GET", A4, true), B3.responseType = "arraybuffer", B3.onload = function() {
            if (200 == B3.status || 0 == B3.status && B3.response) I4(B3.response);
            else {
              var C3 = pI(A4);
              C3 ? I4(C3.buffer) : g2();
            }
          }, B3.onerror = g2, B3.send(null);
        });
        var e2, M2 = A3.print || console.log.bind(console), n2 = A3.printErr || console.warn.bind(console);
        Object.assign(A3, s2), s2 = null, A3.arguments && A3.arguments, A3.thisProgram && (G2 = A3.thisProgram), A3.quit && (h2 = A3.quit), A3.wasmBinary && (e2 = A3.wasmBinary);
        var S2, c2 = A3.noExitRuntime || true;
        "object" != ("undefined" == typeof WebAssembly ? "undefined" : Q(WebAssembly)) && _2("no native wasm support detected");
        var N2 = false;
        function k2(A4, I4) {
          A4 || _2(I4);
        }
        var U2, J2, K2, Y2, L2, d2, l2, H2, q2, f2 = "undefined" != typeof TextDecoder ? new TextDecoder("utf8") : void 0;
        function u2(A4, I4, g2) {
          for (var B3 = I4 + g2, C3 = I4; A4[C3] && !(C3 >= B3); ) ++C3;
          if (C3 - I4 > 16 && A4.buffer && f2) return f2.decode(A4.subarray(I4, C3));
          for (var Q2 = ""; I4 < C3; ) {
            var E3 = A4[I4++];
            if (128 & E3) {
              var i3 = 63 & A4[I4++];
              if (192 != (224 & E3)) {
                var o3 = 63 & A4[I4++];
                if ((E3 = 224 == (240 & E3) ? (15 & E3) << 12 | i3 << 6 | o3 : (7 & E3) << 18 | i3 << 12 | o3 << 6 | 63 & A4[I4++]) < 65536) Q2 += String.fromCharCode(E3);
                else {
                  var D2 = E3 - 65536;
                  Q2 += String.fromCharCode(55296 | D2 >> 10, 56320 | 1023 & D2);
                }
              } else Q2 += String.fromCharCode((31 & E3) << 6 | i3);
            } else Q2 += String.fromCharCode(E3);
          }
          return Q2;
        }
        function m2(A4, I4) {
          return A4 ? u2(K2, A4, I4) : "";
        }
        function p2(A4, I4, g2, B3) {
          if (!(B3 > 0)) return 0;
          for (var C3 = g2, Q2 = g2 + B3 - 1, E3 = 0; E3 < A4.length; ++E3) {
            var i3 = A4.charCodeAt(E3);
            if (i3 >= 55296 && i3 <= 57343 && (i3 = 65536 + ((1023 & i3) << 10) | 1023 & A4.charCodeAt(++E3)), i3 <= 127) {
              if (g2 >= Q2) break;
              I4[g2++] = i3;
            } else if (i3 <= 2047) {
              if (g2 + 1 >= Q2) break;
              I4[g2++] = 192 | i3 >> 6, I4[g2++] = 128 | 63 & i3;
            } else if (i3 <= 65535) {
              if (g2 + 2 >= Q2) break;
              I4[g2++] = 224 | i3 >> 12, I4[g2++] = 128 | i3 >> 6 & 63, I4[g2++] = 128 | 63 & i3;
            } else {
              if (g2 + 3 >= Q2) break;
              I4[g2++] = 240 | i3 >> 18, I4[g2++] = 128 | i3 >> 12 & 63, I4[g2++] = 128 | i3 >> 6 & 63, I4[g2++] = 128 | 63 & i3;
            }
          }
          return I4[g2] = 0, g2 - C3;
        }
        function W2(A4) {
          for (var I4 = 0, g2 = 0; g2 < A4.length; ++g2) {
            var B3 = A4.charCodeAt(g2);
            B3 <= 127 ? I4++ : B3 <= 2047 ? I4 += 2 : B3 >= 55296 && B3 <= 57343 ? (I4 += 4, ++g2) : I4 += 3;
          }
          return I4;
        }
        function b2(I4) {
          U2 = I4, A3.HEAP8 = J2 = new Int8Array(I4), A3.HEAP16 = Y2 = new Int16Array(I4), A3.HEAP32 = d2 = new Int32Array(I4), A3.HEAPU8 = K2 = new Uint8Array(I4), A3.HEAPU16 = L2 = new Uint16Array(I4), A3.HEAPU32 = l2 = new Uint32Array(I4), A3.HEAPF32 = H2 = new Float32Array(I4), A3.HEAPF64 = q2 = new Float64Array(I4);
        }
        A3.INITIAL_MEMORY;
        var Z2, x2 = [], V2 = [], O2 = [];
        function X2() {
          return c2;
        }
        var T2 = 0, j2 = null;
        function P2(I4) {
          T2++, A3.monitorRunDependencies && A3.monitorRunDependencies(T2);
        }
        function z2(I4) {
          if (T2--, A3.monitorRunDependencies && A3.monitorRunDependencies(T2), 0 == T2 && j2) {
            var g2 = j2;
            j2 = null, g2();
          }
        }
        function _2(I4) {
          A3.onAbort && A3.onAbort(I4), n2(I4 = "Aborted(" + I4 + ")"), N2 = true, I4 += ". Build with -sASSERTIONS for more info.";
          var g2 = new WebAssembly.RuntimeError(I4);
          throw B2(g2), g2;
        }
        var $2, AA2, IA2, gA2, BA2 = "data:application/octet-stream;base64,";
        function CA2(A4) {
          return A4.startsWith(BA2);
        }
        function QA2(A4) {
          return A4.startsWith("file://");
        }
        function EA2(A4) {
          try {
            if (A4 == $2 && e2) return new Uint8Array(e2);
            var I4 = pI(A4);
            if (I4) return I4;
            if (i2) return i2(A4);
            throw "both async and sync fetching of the wasm failed";
          } catch (A5) {
            _2(A5);
          }
        }
        CA2($2 = "data:application/octet-stream;base64,AGFzbQEAAAABhwZfYAF/AX9gAX8AYAJ/fwBgAn9/AX9gA39/fwF/YAV/f39/fwBgA39/fwBgBH9/f38AYAR/f39/AX9gBn9/f39/fwF/YAV/f39/fwF/YAZ/f39/f38AYAd/f39/f39/AGAIf39/f39/f38Bf2AAAGAHf39/f39/fwF/YAABf2ABfQF9YAV/fn5+fgBgA39+fwF+YAJ/fABgAn19AX1gBX9/f39+AX9gCH9/f39/f39/AGADf39/AX1gCn9/f39/f39/f38Bf2ABfwF8YAp/f39/f39/f39/AGAEf35+fwBgA39/fQBgB39/f39/fn4Bf2AGf39/f35+AX9gA39/fABgAX8BfWAFf319f38Bf2AGf39/f39/AXxgAXwBfWACfH8BfGAGf399fX9/AX9gBX9/fX1/AGACf38BfWACf38BfGAJf39/f39/f39/AX9gA39/fwF+YAx/f39/f39/f39/f38Bf2AFf39+f38AYAZ/fH9/f38Bf2ABfwF+YAZ/f39/fn8Bf2APf39/f39/f39/f39/f39/AGALf39/f39/f39/f38Bf2AEf39/fwF+YAJ/fQBgBX9/f398AX9gAAF8YA1/f39/f39/f39/f39/AGADf319AX1gBX99fX9/AX1gBH19fX0BfWACf34AYAd/f39/fH9/AX9gBH5+fn4Bf2AEf39/fQBgAn5/AX9gAX0Bf2ADfHx/AXxgAnx8AXxgB39/f39/f30BfWAHf39/f39/fwF9YAN/fn8AYAN/f30BfWAMf39/f39/f39/f3x/AX9gAn5+AXxgBX9/f319AGAGfHx8fHx8AXxgA3x8fAF8YAN9fX0BfWAEf39/fgF+YAZ/fX19fX8Bf2ACfn4BfWADfn5+AX9gA39/fgBgAn9/AX5gBH9/fH8BfGACf30BfWACfX8Bf2ACfH8Bf2AOf39/f39/f39/f3x/f38Bf2AFf399fX8Bf2ADf399AX9gBn9/f39/fQBgBn98fH9/fwBgBH9+f38Bf2AEf39+fgBgA39/fwF8AqECMAFhAWEADgFhAWIAAQFhAWMABgFhAWQACwFhAWUABQFhAWYABgFhAWcAAAFhAWgAFwFhAWkABAFhAWoAAgFhAWsABQFhAWwABgFhAW0AAAFhAW4ACAFhAW8ABAFhAXAANgFhAXEAAgFhAXIABgFhAXMAIAFhAXQAAwFhAXUACAFhAXYABAFhAXcABgFhAXgACgFhAXkADAFhAXoACgFhAUEADgFhAUIAAAFhAUMAAwFhAUQAAwFhAUUABwFhAUYACAFhAUcABAFhAUgACAFhAUkAAgFhAUoABgFhAUsAAgFhAUwABQFhAU0AAgFhAU4AAwFhAU8AAQFhAVAAAQFhAVEACwFhAVIAAQFhAVMAGwFhAVQACwFhAVUANwFhAVYACAPACr4KAwEAAwEABwAABAMDAAAEAgADAgEAAQAQOAIDAwMDAgMAAAAAAAICATkhBgAQEgADCAAABgYBBAgAAAMDAAARAwMiAQMDDgEDBAIAAAADAQAAAxIGAAEAAhwFBwMDAAMCAwACCgACAwACAAMCAhIDADoDAAIEBAIYAwQCCgAAABQCAwEADgIEBAAAAAMCAAMAAgIjADskJAIAAQMDBgYUCB0BAAACAgoKCAQAAAAAAQoYIhUNDQcAACU8BgQGBgMABAMGDgACAgIJAAAHAwAcPQAIAwIAPh0BAwMCAAQAAAAADgECBwMBAgIJAAADAj8AAwMGQBEBAgMCAQADBAQGAg4BAwADAAgGAgMEAQgADgMDAAIEBgIDAxkAGQABAAEAAwBBQgYEJgEIQ0QDAgIKFQYEAAAAAwYBAgMAAgECABUCJwEKAAEGAwYDAgADAA0CAwIAAQADAwAIBAIMAgAGRQAACwMHDgYAAAQBKAYJFQIBAwICAwMDAgMCAQIEAgICBgJGRwMGBAIFBgACAAACBAIHAw8DDwcAAgIAAQACASMAAQAAAQNIEgMDCAUEBAIBAgsHAAACAgEFAAMHSQMpAgMHAAEAAAEAAgAQAwIDAEoCA0sAAAQAAANMFwACAQIGCCcGAwEAAQECAgIBAggAAgAIBAEDCAgBCwYHAwMqBgICBSsEAAQDAgADBCwFBCwFDk0ACAABAwADAQMBAAMDAQABTgYGAQAADQAGAgAAAAMAAQAAAAMCAQAABwEtBAAAAwIEAE8CCAISUAIDAQRRUgcSHBIGBwABDwolAAABAQAGAFMHAAARVBEAAS8AAQMBL1VWChEOBwEBAQIICANXAABYACYMARgBCQEBCAcBAgIABwQBAggDAwACAgEOAQoKCQABAAECBgkAAQICAxERAQECAygIASECGQAIAgMAAgEEWQMCAFoPBw0HAQECBwMAAgYAAgsAAQQBAgECAAIBAgICAwIQAwIBAQIHAgMEAwcBAlsCAgICAgMDAgMAAgICAgQABgECAwQAAAQDAQMGBAICAwIBAAMCAgIBAgECARECAAEBABUREQIDAQEDAQIAAgBcAw8DBgIECAAIMAkwCQMEAV0CAAgDBwUXBgYXAwErBgECAgMAAQIAAAoNDQoNDQAKDQADAQEGAAECAAEEMRsxBBsDAAACMgIDAAAGAjICAgILBQsLBQsLAAQMDAwMAAkEAwdeGDMICQgzCAYCCgQHCgMEAgMAAAIDBAIDAAACAQMEAAQBBAAEAQQEAi4TAwAEBBMQDgAHAQcHAgEHBwcHBwIBBAkJAQoKAQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUBAgECAQcHBwcHAQwMDAwCDAcMBwEBAQcHBwIDAwADAQEDAwMDAwMBAQMDAwMDAQEFBQUFBQUFBQUAAQAAAAMAAQEBAAICBAAAAwEGAwgEAwcGAB0GKSAAAgYDARAEAwQEAwgEBgYQAQAEAwUEAAADAwMEBAQAAgAAAwACAAIAAwIAAho0AAIaFBoUAAMDAwMAABABBgAAAwEBAwEDAQMBAQABAQEAABkqDwwKARAAAAAACwsLBQUFBAcHBwQEAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAICAgICAgAAAQEACgAKDQ0BCgoECAQDBAMBCgQIBAMEAwgICAQBAQELCwkeCR4PDwAPDw8PDQkJCQkJDQkJCQkJCh81FgoWCgoKHzUWChYKCgkJCQkJCQkJCQkJCQkJCQkJCQQHAgQHAXAB8QTxBAUHAQGAIICAAgYOAn8BQYDIxAILfwFBAAsHXREBVwIAAVgAwAQBWQA3AVoAMQFfAPUHASQBAAJhYQD3BwJiYQD2BwJjYQD3BAJkYQDbCQJlYQDaCQJmYQDfCQJnYQDZCQJoYQDYCQJpYQDXCQJqYQDWCQJrYQDVCQm/CQEAQQEL8AStCbAFiQn4CDb5CPMI9wj1CPYI9Aj1BuYB3wayBs4JhgTRCYcE0gnQCc8J5gFXzQnMCfYDV8sJygn2A1fJCcgJ9gPHCcYJzAWXCb8Jwwm9CbsJvAm6CbkJvgmgCZ8JogmhCZ0JngmcCZsJxAmaCZgJxQnCCacJpQmmCcEJwAm4CbcJtgm1CakJqAmrCaoJtAmzCbIJsQmwCa8JrgmsCaQJowmWCZUJlAnVBZMJuAGSCZEJkAmPCY4JjQmMCYsJiglXiAmHCYYJhQmECYMJggmBCYAJ/wj+CP0I/Aj7CPoI3gHsCPII8QjwCO8ItwXuCO0I6wjqCOkI6AjnCN4B5gjlCOQI4wjiCOEI4AjfCN4I3QikCKUIpginCKgIqQiqCKIIoQigCJ8IngidCJwImwiaCJkImAiXCJYIlQiUCJMIkgiRCJAIjwiOCI0IjAijCKsIrAitCN4B3AjbCNoI2QjYCNcI1gjVCNQI0wjSCNEI0AjPCM4IzQjMCMsIygiGAckIyAjHCMYIxQjECMMIwgjBCMAIvwi+CL0IvAi7CLoIuQi4CLcItgi1CLQIswiyCLEIsAivCK4IiwjgA4oIiQiICIcIhgisBasFhQjVAoQI3gGDCIIIgQiACP8H/gf9B/wH+wf6B94B+Qf4B6UF9AfzB/IH8QeGAe8H7gftB+wH6wfTA+oHgQPtBOwE6gSGAYYB6QfpBOgHhQPnB4UDhAPRA+gE5wSCA84D4gThBMwD5geBA+0E7ATqBIYBhgHlB+kE5AeFA+MHhQOEA9ED6ATnBIIDzgPiBOEE7wTUA+8E1APNAtQD3gHhB88E4AffB94H3QfPBNwHzATbB9oHywTZB9gH1wfWB8sE1QfMBNQH0wcx3gGuCpYHhgqECoIKgAr+CfwJ+gn4CfYJ9AnyCfAJ7gnsCZkHrwqtCpQHoQqgCp8KngqdCpwGnAqbCpoKnAeYCpcKlgqVCpQKhgGTCpIKigeRCo8KjgqNCosKiQqJB5AK0wm4CowKigqICuYBV1esCqsKqgqpCqgKpwqmCqUKnAakCqMKogpXkweTB/MClQSVBJkKlQRXkAePB/MChgGGAY4HmANXkAePB/MChgGGAY4HmANXjQeMB/MChgGGAYsHmANXjQeMB/MChgGGAYsHmAPmAVfSB9EH0AfmAVfPB+wK6wpX6grpCugK5wrJB8kH5grlCuQK4wriClfhCuAK3wreCsEHwQfdCtwK2wraCtkKV9gK1wrWCtUK1ArTCtIK0QpX0ArPCs4KzQrMCssKygrJCuYBV8gFyArHCsYKxQrECsMKhwqDCv8J8wnvCfsJ9wnmAVfIBcIKwQrACr8Kvgq9CoUKgQr9CfEJ7Qn5CfUJtASHB7wKtASHB7sKV70DvQO8AbwBvAGxB4YB9wH3AVe9A70DvAG8AbwBsQeGAfcB9wFXvAO8A7wBvAG8AbAHhgH3AfcBV7wDvAO8AbwBvAGwB4YB9wH3AVe6CrkKV7cKtgpXtQq0ClezCrIKV54HsQqBA1eeB7AKgQP/BnX/BvAH5gFX3gHeAesJV+oJ4AnjCekJV+EJ5AnoCVfiCeUJ5wlX5glX3QlX3AlX3gmnBNQJpwSnBAqi1Rm+CqUBAQd/IAEQhAEhAyMAQSBrIgIkAAJAIAJBGGogABCAAyIFLQAARQ0AIAJBCGogABC5BCEGIAAgACgCAEEMaygCAGoiBCgCBCEHIAQQugchCCACIAYoAgAgASABIANqIgMgASAHQbABcUEgRhsgAyAEIAgQ+AE2AhAgAkEQahD0AkUNACAAIAAoAgBBDGsoAgBqQQUQxQILIAUQzgIgAkEgaiQAIAALygwBB38CQCAARQ0AIABBCGsiAiAAQQRrKAIAIgFBeHEiAGohBQJAIAFBAXENACABQQNxRQ0BIAIgAigCACIBayICQbCjBCgCAEkNASAAIAFqIQBBtKMEKAIAIAJHBEAgAUH/AU0EQCACKAIIIgQgAUEDdiIBQQN0QcijBGpGGiAEIAIoAgwiA0YEQEGgowRBoKMEKAIAQX4gAXdxNgIADAMLIAQgAzYCDCADIAQ2AggMAgsgAigCGCEGAkAgAiACKAIMIgFHBEAgAigCCCIDIAE2AgwgASADNgIIDAELAkAgAkEUaiIEKAIAIgMNACACQRBqIgQoAgAiAw0AQQAhAQwBCwNAIAQhByADIgFBFGoiBCgCACIDDQAgAUEQaiEEIAEoAhAiAw0ACyAHQQA2AgALIAZFDQECQCACKAIcIgRBAnRB0KUEaiIDKAIAIAJGBEAgAyABNgIAIAENAUGkowRBpKMEKAIAQX4gBHdxNgIADAMLIAZBEEEUIAYoAhAgAkYbaiABNgIAIAFFDQILIAEgBjYCGCACKAIQIgMEQCABIAM2AhAgAyABNgIYCyACKAIUIgNFDQEgASADNgIUIAMgATYCGAwBCyAFKAIEIgFBA3FBA0cNAEGoowQgADYCACAFIAFBfnE2AgQgAiAAQQFyNgIEIAAgAmogADYCAA8LIAIgBU8NACAFKAIEIgFBAXFFDQACQCABQQJxRQRAQbijBCgCACAFRgRAQbijBCACNgIAQayjBEGsowQoAgAgAGoiADYCACACIABBAXI2AgQgAkG0owQoAgBHDQNBqKMEQQA2AgBBtKMEQQA2AgAPC0G0owQoAgAgBUYEQEG0owQgAjYCAEGoowRBqKMEKAIAIABqIgA2AgAgAiAAQQFyNgIEIAAgAmogADYCAA8LIAFBeHEgAGohAAJAIAFB/wFNBEAgBSgCCCIEIAFBA3YiAUEDdEHIowRqRhogBCAFKAIMIgNGBEBBoKMEQaCjBCgCAEF+IAF3cTYCAAwCCyAEIAM2AgwgAyAENgIIDAELIAUoAhghBgJAIAUgBSgCDCIBRwRAIAUoAggiA0GwowQoAgBJGiADIAE2AgwgASADNgIIDAELAkAgBUEUaiIEKAIAIgMNACAFQRBqIgQoAgAiAw0AQQAhAQwBCwNAIAQhByADIgFBFGoiBCgCACIDDQAgAUEQaiEEIAEoAhAiAw0ACyAHQQA2AgALIAZFDQACQCAFKAIcIgRBAnRB0KUEaiIDKAIAIAVGBEAgAyABNgIAIAENAUGkowRBpKMEKAIAQX4gBHdxNgIADAILIAZBEEEUIAYoAhAgBUYbaiABNgIAIAFFDQELIAEgBjYCGCAFKAIQIgMEQCABIAM2AhAgAyABNgIYCyAFKAIUIgNFDQAgASADNgIUIAMgATYCGAsgAiAAQQFyNgIEIAAgAmogADYCACACQbSjBCgCAEcNAUGoowQgADYCAA8LIAUgAUF+cTYCBCACIABBAXI2AgQgACACaiAANgIACyAAQf8BTQRAIABBeHFByKMEaiEBAn9BoKMEKAIAIgNBASAAQQN2dCIAcUUEQEGgowQgACADcjYCACABDAELIAEoAggLIQAgASACNgIIIAAgAjYCDCACIAE2AgwgAiAANgIIDwtBHyEEIABB////B00EQCAAQQh2IgEgAUGA/j9qQRB2QQhxIgR0IgEgAUGA4B9qQRB2QQRxIgN0IgEgAUGAgA9qQRB2QQJxIgF0QQ92IAMgBHIgAXJrIgFBAXQgACABQRVqdkEBcXJBHGohBAsgAiAENgIcIAJCADcCECAEQQJ0QdClBGohBwJAAkACQEGkowQoAgAiA0EBIAR0IgFxRQRAQaSjBCABIANyNgIAIAcgAjYCACACIAc2AhgMAQsgAEEAQRkgBEEBdmsgBEEfRht0IQQgBygCACEBA0AgASIDKAIEQXhxIABGDQIgBEEddiEBIARBAXQhBCADIAFBBHFqIgdBEGooAgAiAQ0ACyAHIAI2AhAgAiADNgIYCyACIAI2AgwgAiACNgIIDAELIAMoAggiACACNgIMIAMgAjYCCCACQQA2AhggAiADNgIMIAIgADYCCAtBwKMEQcCjBCgCAEEBayIAQX8gABs2AgALCwcAIABBCGoLvQEBBn8jAEEgayICJAAgAkEYaiIDIAAQgAMaAkAgAy0AAEUNACAAIAAoAgBBDGsoAgBqIgQoAgQaIAJBEGoiAyAEEE4gA0GYuAQQywEhBCADEEUgAkEIaiAAELkEIQUgACAAKAIAQQxrKAIAaiIGELoHIQcgAiAEIAUoAgAgBiAHIAEgBCgCACgCEBEKADYCECADEPQCRQ0AIAAgACgCAEEMaygCAGpBBRDFAgsgAkEYahDOAiACQSBqJAAgAAsIACAAEN8GGgsVACAAEK0BBEAgACgCBA8LIAAtAAsL0gMBBX8jAEEQayIAJAACQCACRQ0AQdD4AygCACABSg0AIAItAABFDQAgACADNgIMIwBBEGsiBSQAIAUgAzYCDAJAIAJFDQBB0PgDKAIAIAFKDQAgAi0AAEUNACAFIAUoAgwiAzYCCEEAQQAgAiADEIECIgZFDQAgAUEDTQRAIAFBAnRBoK0BaigCABCEAUEDaiEECyAEIAZqIgdBAWoiCBA3IQMgBARAIAUgAUECdEGgrQFqKAIANgIAIAMgBEEBakHVJSAFENoDGgsgAyAEaiAGQQFqIAIgBSgCDBCBAhoCQAJAQbCVBCgCACIBBEBBtJUEKAIARQ0BQbiVBCgCAEGMmgRHBEBBvJUEKAIAIgRFDQNBxJUEKAIAIgFBgCBBAEHAlQQtAAAbIgJPDQMgASAEaiEEIAIgAWtBBGsgB08EQCAEIAMgCBCJAxpBxJUEIAEgB2o2AgAMBAsgBEGu3LgBNgAAQcSVBCACNgIADAMLQcSVBCgCAEUNAUG8lQQoAgAgAREBAEHElQRBADYCAEGwlQQoAgAhAQwBC0Hg9wIoAgAhASADQQEgAxCEASABEM8BGgwBCyADIAERAQALIAMQMQsgBUEQaiQACyAAQRBqJAAL8S0BC38jAEEQayILJAACQAJAAkACQAJAAkACQAJAAkACQAJAIABB9AFNBEBBoKMEKAIAIgVBECAAQQtqQXhxIABBC0kbIgZBA3YiAHYiAUEDcQRAAkAgAUF/c0EBcSAAaiICQQN0IgFByKMEaiIAIAFB0KMEaigCACIBKAIIIgNGBEBBoKMEIAVBfiACd3E2AgAMAQsgAyAANgIMIAAgAzYCCAsgAUEIaiEAIAEgAkEDdCICQQNyNgIEIAEgAmoiASABKAIEQQFyNgIEDAwLIAZBqKMEKAIAIgdNDQEgAQRAAkBBAiAAdCICQQAgAmtyIAEgAHRxIgBBACAAa3FBAWsiACAAQQx2QRBxIgB2IgFBBXZBCHEiAiAAciABIAJ2IgBBAnZBBHEiAXIgACABdiIAQQF2QQJxIgFyIAAgAXYiAEEBdkEBcSIBciAAIAF2aiIBQQN0IgBByKMEaiICIABB0KMEaigCACIAKAIIIgNGBEBBoKMEIAVBfiABd3EiBTYCAAwBCyADIAI2AgwgAiADNgIICyAAIAZBA3I2AgQgACAGaiIIIAFBA3QiASAGayIDQQFyNgIEIAAgAWogAzYCACAHBEAgB0F4cUHIowRqIQFBtKMEKAIAIQICfyAFQQEgB0EDdnQiBHFFBEBBoKMEIAQgBXI2AgAgAQwBCyABKAIICyEEIAEgAjYCCCAEIAI2AgwgAiABNgIMIAIgBDYCCAsgAEEIaiEAQbSjBCAINgIAQaijBCADNgIADAwLQaSjBCgCACIKRQ0BIApBACAKa3FBAWsiACAAQQx2QRBxIgB2IgFBBXZBCHEiAiAAciABIAJ2IgBBAnZBBHEiAXIgACABdiIAQQF2QQJxIgFyIAAgAXYiAEEBdkEBcSIBciAAIAF2akECdEHQpQRqKAIAIgIoAgRBeHEgBmshBCACIQEDQAJAIAEoAhAiAEUEQCABKAIUIgBFDQELIAAoAgRBeHEgBmsiASAEIAEgBEkiARshBCAAIAIgARshAiAAIQEMAQsLIAIoAhghCSACIAIoAgwiA0cEQCACKAIIIgBBsKMEKAIASRogACADNgIMIAMgADYCCAwLCyACQRRqIgEoAgAiAEUEQCACKAIQIgBFDQMgAkEQaiEBCwNAIAEhCCAAIgNBFGoiASgCACIADQAgA0EQaiEBIAMoAhAiAA0ACyAIQQA2AgAMCgtBfyEGIABBv39LDQAgAEELaiIAQXhxIQZBpKMEKAIAIghFDQBBACAGayEEAkACQAJAAn9BACAGQYACSQ0AGkEfIAZB////B0sNABogAEEIdiIAIABBgP4/akEQdkEIcSIAdCIBIAFBgOAfakEQdkEEcSIBdCICIAJBgIAPakEQdkECcSICdEEPdiAAIAFyIAJyayIAQQF0IAYgAEEVanZBAXFyQRxqCyIHQQJ0QdClBGooAgAiAUUEQEEAIQAMAQtBACEAIAZBAEEZIAdBAXZrIAdBH0YbdCECA0ACQCABKAIEQXhxIAZrIgUgBE8NACABIQMgBSIEDQBBACEEIAEhAAwDCyAAIAEoAhQiBSAFIAEgAkEddkEEcWooAhAiAUYbIAAgBRshACACQQF0IQIgAQ0ACwsgACADckUEQEEAIQNBAiAHdCIAQQAgAGtyIAhxIgBFDQMgAEEAIABrcUEBayIAIABBDHZBEHEiAHYiAUEFdkEIcSICIAByIAEgAnYiAEECdkEEcSIBciAAIAF2IgBBAXZBAnEiAXIgACABdiIAQQF2QQFxIgFyIAAgAXZqQQJ0QdClBGooAgAhAAsgAEUNAQsDQCAAKAIEQXhxIAZrIgIgBEkhASACIAQgARshBCAAIAMgARshAyAAKAIQIgEEfyABBSAAKAIUCyIADQALCyADRQ0AIARBqKMEKAIAIAZrTw0AIAMoAhghByADIAMoAgwiAkcEQCADKAIIIgBBsKMEKAIASRogACACNgIMIAIgADYCCAwJCyADQRRqIgEoAgAiAEUEQCADKAIQIgBFDQMgA0EQaiEBCwNAIAEhBSAAIgJBFGoiASgCACIADQAgAkEQaiEBIAIoAhAiAA0ACyAFQQA2AgAMCAsgBkGoowQoAgAiAU0EQEG0owQoAgAhAAJAIAEgBmsiAkEQTwRAQaijBCACNgIAQbSjBCAAIAZqIgM2AgAgAyACQQFyNgIEIAAgAWogAjYCACAAIAZBA3I2AgQMAQtBtKMEQQA2AgBBqKMEQQA2AgAgACABQQNyNgIEIAAgAWoiASABKAIEQQFyNgIECyAAQQhqIQAMCgsgBkGsowQoAgAiAkkEQEGsowQgAiAGayIBNgIAQbijBEG4owQoAgAiACAGaiICNgIAIAIgAUEBcjYCBCAAIAZBA3I2AgQgAEEIaiEADAoLQQAhACAGQS9qIgQCf0H4pgQoAgAEQEGApwQoAgAMAQtBhKcEQn83AgBB/KYEQoCggICAgAQ3AgBB+KYEIAtBDGpBcHFB2KrVqgVzNgIAQYynBEEANgIAQdymBEEANgIAQYAgCyIBaiIFQQAgAWsiCHEiASAGTQ0JQdimBCgCACIDBEBB0KYEKAIAIgcgAWoiCSAHTSADIAlJcg0KC0HcpgQtAABBBHENBAJAAkBBuKMEKAIAIgMEQEHgpgQhAANAIAMgACgCACIHTwRAIAcgACgCBGogA0sNAwsgACgCCCIADQALC0EAEIACIgJBf0YNBSABIQVB/KYEKAIAIgBBAWsiAyACcQRAIAEgAmsgAiADakEAIABrcWohBQsgBSAGTSAFQf7///8HS3INBUHYpgQoAgAiAARAQdCmBCgCACIDIAVqIgggA00gACAISXINBgsgBRCAAiIAIAJHDQEMBwsgBSACayAIcSIFQf7///8HSw0EIAUQgAIiAiAAKAIAIAAoAgRqRg0DIAIhAAsgAEF/RiAGQTBqIAVNckUEQEGApwQoAgAiAiAEIAVrakEAIAJrcSICQf7///8HSwRAIAAhAgwHCyACEIACQX9HBEAgAiAFaiEFIAAhAgwHC0EAIAVrEIACGgwECyAAIgJBf0cNBQwDC0EAIQMMBwtBACECDAULIAJBf0cNAgtB3KYEQdymBCgCAEEEcjYCAAsgAUH+////B0sNASABEIACIgJBf0ZBABCAAiIAQX9GciAAIAJNcg0BIAAgAmsiBSAGQShqTQ0BC0HQpgRB0KYEKAIAIAVqIgA2AgBB1KYEKAIAIABJBEBB1KYEIAA2AgALAkACQAJAQbijBCgCACIEBEBB4KYEIQADQCACIAAoAgAiASAAKAIEIgNqRg0CIAAoAggiAA0ACwwCC0GwowQoAgAiAEEAIAAgAk0bRQRAQbCjBCACNgIAC0EAIQBB5KYEIAU2AgBB4KYEIAI2AgBBwKMEQX82AgBBxKMEQfimBCgCADYCAEHspgRBADYCAANAIABBA3QiAUHQowRqIAFByKMEaiIDNgIAIAFB1KMEaiADNgIAIABBAWoiAEEgRw0AC0GsowQgBUEoayIAQXggAmtBB3FBACACQQhqQQdxGyIBayIDNgIAQbijBCABIAJqIgE2AgAgASADQQFyNgIEIAAgAmpBKDYCBEG8owRBiKcEKAIANgIADAILIAAtAAxBCHEgASAES3IgAiAETXINACAAIAMgBWo2AgRBuKMEIARBeCAEa0EHcUEAIARBCGpBB3EbIgBqIgE2AgBBrKMEQayjBCgCACAFaiICIABrIgA2AgAgASAAQQFyNgIEIAIgBGpBKDYCBEG8owRBiKcEKAIANgIADAELQbCjBCgCACACSwRAQbCjBCACNgIACyACIAVqIQFB4KYEIQACQAJAAkACQAJAAkADQCABIAAoAgBHBEAgACgCCCIADQEMAgsLIAAtAAxBCHFFDQELQeCmBCEAA0AgBCAAKAIAIgFPBEAgASAAKAIEaiIDIARLDQMLIAAoAgghAAwACwALIAAgAjYCACAAIAAoAgQgBWo2AgQgAkF4IAJrQQdxQQAgAkEIakEHcRtqIgcgBkEDcjYCBCABQXggAWtBB3FBACABQQhqQQdxG2oiBSAGIAdqIgZrIQAgBCAFRgRAQbijBCAGNgIAQayjBEGsowQoAgAgAGoiADYCACAGIABBAXI2AgQMAwtBtKMEKAIAIAVGBEBBtKMEIAY2AgBBqKMEQaijBCgCACAAaiIANgIAIAYgAEEBcjYCBCAAIAZqIAA2AgAMAwsgBSgCBCIEQQNxQQFGBEAgBEF4cSEJAkAgBEH/AU0EQCAFKAIIIgEgBEEDdiIDQQN0QcijBGpGGiABIAUoAgwiAkYEQEGgowRBoKMEKAIAQX4gA3dxNgIADAILIAEgAjYCDCACIAE2AggMAQsgBSgCGCEIAkAgBSAFKAIMIgJHBEAgBSgCCCIBIAI2AgwgAiABNgIIDAELAkAgBUEUaiIEKAIAIgENACAFQRBqIgQoAgAiAQ0AQQAhAgwBCwNAIAQhAyABIgJBFGoiBCgCACIBDQAgAkEQaiEEIAIoAhAiAQ0ACyADQQA2AgALIAhFDQACQCAFKAIcIgFBAnRB0KUEaiIDKAIAIAVGBEAgAyACNgIAIAINAUGkowRBpKMEKAIAQX4gAXdxNgIADAILIAhBEEEUIAgoAhAgBUYbaiACNgIAIAJFDQELIAIgCDYCGCAFKAIQIgEEQCACIAE2AhAgASACNgIYCyAFKAIUIgFFDQAgAiABNgIUIAEgAjYCGAsgBSAJaiIFKAIEIQQgACAJaiEACyAFIARBfnE2AgQgBiAAQQFyNgIEIAAgBmogADYCACAAQf8BTQRAIABBeHFByKMEaiEBAn9BoKMEKAIAIgJBASAAQQN2dCIAcUUEQEGgowQgACACcjYCACABDAELIAEoAggLIQAgASAGNgIIIAAgBjYCDCAGIAE2AgwgBiAANgIIDAMLQR8hBCAAQf///wdNBEAgAEEIdiIBIAFBgP4/akEQdkEIcSIBdCICIAJBgOAfakEQdkEEcSICdCIDIANBgIAPakEQdkECcSIDdEEPdiABIAJyIANyayIBQQF0IAAgAUEVanZBAXFyQRxqIQQLIAYgBDYCHCAGQgA3AhAgBEECdEHQpQRqIQECQEGkowQoAgAiAkEBIAR0IgNxRQRAQaSjBCACIANyNgIAIAEgBjYCAAwBCyAAQQBBGSAEQQF2ayAEQR9GG3QhBCABKAIAIQIDQCACIgEoAgRBeHEgAEYNAyAEQR12IQIgBEEBdCEEIAEgAkEEcWoiAygCECICDQALIAMgBjYCEAsgBiABNgIYIAYgBjYCDCAGIAY2AggMAgtBrKMEIAVBKGsiAEF4IAJrQQdxQQAgAkEIakEHcRsiAWsiCDYCAEG4owQgASACaiIBNgIAIAEgCEEBcjYCBCAAIAJqQSg2AgRBvKMEQYinBCgCADYCACAEIANBJyADa0EHcUEAIANBJ2tBB3EbakEvayIAIAAgBEEQakkbIgFBGzYCBCABQeimBCkCADcCECABQeCmBCkCADcCCEHopgQgAUEIajYCAEHkpgQgBTYCAEHgpgQgAjYCAEHspgRBADYCACABQRhqIQADQCAAQQc2AgQgAEEIaiECIABBBGohACACIANJDQALIAEgBEYNAyABIAEoAgRBfnE2AgQgBCABIARrIgJBAXI2AgQgASACNgIAIAJB/wFNBEAgAkF4cUHIowRqIQACf0GgowQoAgAiAUEBIAJBA3Z0IgJxRQRAQaCjBCABIAJyNgIAIAAMAQsgACgCCAshASAAIAQ2AgggASAENgIMIAQgADYCDCAEIAE2AggMBAtBHyEAIAJB////B00EQCACQQh2IgAgAEGA/j9qQRB2QQhxIgB0IgEgAUGA4B9qQRB2QQRxIgF0IgMgA0GAgA9qQRB2QQJxIgN0QQ92IAAgAXIgA3JrIgBBAXQgAiAAQRVqdkEBcXJBHGohAAsgBCAANgIcIARCADcCECAAQQJ0QdClBGohAQJAQaSjBCgCACIDQQEgAHQiBXFFBEBBpKMEIAMgBXI2AgAgASAENgIADAELIAJBAEEZIABBAXZrIABBH0YbdCEAIAEoAgAhAwNAIAMiASgCBEF4cSACRg0EIABBHXYhAyAAQQF0IQAgASADQQRxaiIFKAIQIgMNAAsgBSAENgIQCyAEIAE2AhggBCAENgIMIAQgBDYCCAwDCyABKAIIIgAgBjYCDCABIAY2AgggBkEANgIYIAYgATYCDCAGIAA2AggLIAdBCGohAAwFCyABKAIIIgAgBDYCDCABIAQ2AgggBEEANgIYIAQgATYCDCAEIAA2AggLQayjBCgCACIAIAZNDQBBrKMEIAAgBmsiATYCAEG4owRBuKMEKAIAIgAgBmoiAjYCACACIAFBAXI2AgQgACAGQQNyNgIEIABBCGohAAwDC0GImQRBMDYCAEEAIQAMAgsCQCAHRQ0AAkAgAygCHCIAQQJ0QdClBGoiASgCACADRgRAIAEgAjYCACACDQFBpKMEIAhBfiAAd3EiCDYCAAwCCyAHQRBBFCAHKAIQIANGG2ogAjYCACACRQ0BCyACIAc2AhggAygCECIABEAgAiAANgIQIAAgAjYCGAsgAygCFCIARQ0AIAIgADYCFCAAIAI2AhgLAkAgBEEPTQRAIAMgBCAGaiIAQQNyNgIEIAAgA2oiACAAKAIEQQFyNgIEDAELIAMgBkEDcjYCBCADIAZqIgIgBEEBcjYCBCACIARqIAQ2AgAgBEH/AU0EQCAEQXhxQcijBGohAAJ/QaCjBCgCACIBQQEgBEEDdnQiBHFFBEBBoKMEIAEgBHI2AgAgAAwBCyAAKAIICyEBIAAgAjYCCCABIAI2AgwgAiAANgIMIAIgATYCCAwBC0EfIQAgBEH///8HTQRAIARBCHYiACAAQYD+P2pBEHZBCHEiAHQiASABQYDgH2pBEHZBBHEiAXQiBSAFQYCAD2pBEHZBAnEiBXRBD3YgACABciAFcmsiAEEBdCAEIABBFWp2QQFxckEcaiEACyACIAA2AhwgAkIANwIQIABBAnRB0KUEaiEBAkACQCAIQQEgAHQiBXFFBEBBpKMEIAUgCHI2AgAgASACNgIADAELIARBAEEZIABBAXZrIABBH0YbdCEAIAEoAgAhBgNAIAYiASgCBEF4cSAERg0CIABBHXYhBSAAQQF0IQAgASAFQQRxaiIFKAIQIgYNAAsgBSACNgIQCyACIAE2AhggAiACNgIMIAIgAjYCCAwBCyABKAIIIgAgAjYCDCABIAI2AgggAkEANgIYIAIgATYCDCACIAA2AggLIANBCGohAAwBCwJAIAlFDQACQCACKAIcIgBBAnRB0KUEaiIBKAIAIAJGBEAgASADNgIAIAMNAUGkowQgCkF+IAB3cTYCAAwCCyAJQRBBFCAJKAIQIAJGG2ogAzYCACADRQ0BCyADIAk2AhggAigCECIABEAgAyAANgIQIAAgAzYCGAsgAigCFCIARQ0AIAMgADYCFCAAIAM2AhgLAkAgBEEPTQRAIAIgBCAGaiIAQQNyNgIEIAAgAmoiACAAKAIEQQFyNgIEDAELIAIgBkEDcjYCBCACIAZqIgMgBEEBcjYCBCADIARqIAQ2AgAgBwRAIAdBeHFByKMEaiEAQbSjBCgCACEBAn9BASAHQQN2dCIGIAVxRQRAQaCjBCAFIAZyNgIAIAAMAQsgACgCCAshBSAAIAE2AgggBSABNgIMIAEgADYCDCABIAU2AggLQbSjBCADNgIAQaijBCAENgIACyACQQhqIQALIAtBEGokACAACx8BAX8gABCtAQRAIAAoAgAhASAAEP0BGiABEDELIAALKQEBfyACBEAgACEDA0AgAyABOgAAIANBAWohAyACQQFrIgINAAsLIAALDQAgACgCACABQQJ0agvJBAEHfwJAIAAoAtQDIgQoAhAiAkGAgAJOBEAgBCgCFCEDDAELIAQoAhQhAwNAIAQgA0EBayICNgIUAkAgA0EASgRAIAIhAwwBC0EAIQUgACgCuANFBEACQCAAKAIYIgIoAgQNACAAIAIoAgwRAAANACAAKAIAIgNBGTYCFCAAIAMoAgARAQALIAIgAigCBEEBazYCBCACIAIoAgAiAkEBajYCAAJAIAItAAAiBUH/AUcNAANAAkAgACgCGCICKAIEDQAgACACKAIMEQAADQAgACgCACIDQRk2AhQgACADKAIAEQEACyACIAIoAgRBAWs2AgQgAiACKAIAIgJBAWo2AgBB/wEhBSACLQAAIgJB/wFGDQALIAJFDQAgACACNgK4A0EAIQULIAQoAhQhAgsgBCACQQhqIgM2AhQgBCAEKAIMQQh0IAVyNgIMIAJBd0oNACAEIAJBCWoiAzYCFCADDQAgBEGAgAI2AhBBACEDCyAEIAQoAhBBAXQiAjYCECACQYCAAkgNAAsLIAQgAiABLQAAIgBB/wBxQQJ0QaC1AmooAgAiBUEQdSIGayICNgIQIAVBCHUhBwJAIAQoAgwiCCACIAN0IgNOBEAgBCAGNgIQIAQgCCADazYCDCAAQYABcSEDIAIgBkgEQCABIAMgB3M6AAAMAgsgASADIAVzOgAAIABBgAFzIQAMAQsgAkH//wFLDQAgAEGAAXEhAyACIAZIBEAgASADIAVzOgAAIABBgAFzIQAMAQsgASADIAdzOgAACyAAQQd2CwcAIABBDGoLEAAgACgCBCAAKAIAa0EDdQszAQF/IAIEQCAAIQMDQCADIAEtAAA6AAAgA0EBaiEDIAFBAWohASACQQFrIgINAAsLIAALkQEBBH8CQCABIAAQNSICSwRAIwBBEGsiBCQAIAEgAmsiAgRAIAAQVCEDIAAQNSIBIAJqIQUgAiADIAFrSwRAIAAgAyAFIANrIAEgARCxBAsgASAAEEAiA2ogAkEAEPwGIAAgBRCXAiAEQQA6AA8gAyAFaiAEQQ9qEJsBCyAEQRBqJAAMAQsgACAAEEAgARCBBwsLEgAgABCtAQRAIAAoAgAPCyAACwkAIAAQQCABagsQACAAQbDzAyABKAIAtxASCxIAIAAEQCAAKAIAEDEgABAxCws/AQJ/IwBBEGsiAiQAIAAhAUEAIQADQCAAQQNHBEAgASAAQQJ0akEANgIAIABBAWohAAwBCwsgAkEQaiQAIAELCwAgACgCABDiAhoLEAAgACgCBCAAKAIAa0ECdQslAQJ/IwBBEGsiACQAIABBCGoQ+gMQdygCACEBIABBEGokACABC64HAgZ/BH0CfSAAKAIYIQggACgCBCEFIAAoAgghBCAAKAIMIQcCQAJAAkACQAJAAkACQAJAAkACQAJAAn8gAYtDAAAAT10EQCABqAwBC0GAgICAeAsCfyABjiIJi0MAAABPXQRAIAmoDAELQYCAgIB4CyIARgRAAn8gAotDAAAAT10EQCACqAwBC0GAgICAeAshBiAGAn8gAo4iCYtDAAAAT10EQCAJqAwBC0GAgICAeAsiA0cNASADQQBIIAMgBE9yDQIgBCADQQFqIgZNDQMgAEEASCAAIAVPcg0EIAUgAEEBaiIETQ0FIASyIAGTIgogBrIgApMiC5QiCUMAAAAAYEUgCbtEcayL22gA8D9lRXINBiABIACykyIMIAuUIgFDAAAAAGBFIAG7RHGsi9toAPA/ZUVyDQcgCiACIAOykyIKlCICQwAAAABgRSACu0RxrIvbaADwP2VFcg0IIAwgCpQiCkMAAAAAYEUgCrtEcayL22gA8D9lRXINCSAKIAIgCSABkpKSu0RxrIvbaADwP2VFDQogCiAIIAMgB2xqIgMgB2oiBSAEQQJ0IgRqKgIAlCACIAUgAEECdCIAaioCAJQgCSAAIANqKgIAlCABIAMgBGoqAgCUkpKSDAwLQYCyBEHs0gEQMEGg0wEQMEGAHRAwQcUAEDNB8SAQMEHV1AEQMBA0DAoLQYCyBEHz1AEQMEGg0wEQMEGAHRAwQcYAEDNB8SAQMEHV1AEQMBA0DAkLQYCyBEGn1QEQMEGg0wEQMEGAHRAwQc8AEDNB8SAQMEHV1QEQMBA0DAgLQYCyBEHm1QEQMEGg0wEQMEGAHRAwQdAAEDNB8SAQMEGi1gEQMBA0DAcLQYCyBEG61gEQMEGg0wEQMEGAHRAwQdEAEDNB8SAQMEHn1gEQMBA0DAYLQYCyBEH41gEQMEGg0wEQMEGAHRAwQdIAEDNB8SAQMEGz1wEQMBA0DAULQYCyBEHL1wEQMEGg0wEQMEGAHRAwQd4AEDNB8SAQMEH61wEQMBA0DAQLQYCyBEGH2AEQMEGg0wEQMEGAHRAwQd8AEDNB8SAQMEH61wEQMBA0DAMLQYCyBEG22AEQMEGg0wEQMEGAHRAwQeAAEDNB8SAQMEH61wEQMBA0DAILQYCyBEHl2AEQMEGg0wEQMEGAHRAwQeEAEDNB8SAQMEH61wEQMBA0DAELQYCyBEGU2QEQMEGg0wEQMEGAHRAwQeIAEDNB8SAQMEH61wEQMBA0CxAAAAsLHAEBfyAAKAIAIQIgACABKAIANgIAIAEgAjYCAAsNACAAKAIAIAFBBXRqCykBAX8jAEEQayICJAAgAkEIaiAAIAEQlQYQdygCACEAIAJBEGokACAAC0UAIAEgACgCCE8EQEGAsgRB/dABEDBBotEBEDBBgB0QMEH8ABAzQfEgEDBBqtIBEDAQNBAAAAsgACgCGCAAKAIMIAFsagsNACAAKAIAIAFBA3RqCwwAIAAgAUEcahC3BAsJACAAIAEQqAELpgYCCn8BfSMAQSBrIgQkACAEIAAQ4wI2AhAgBEEYaiEIIwBBIGsiASQAQdyVBBA8GiAAKAIAIQVB3JUEEJQBIQMgAUEAOgAfAkACQCADRQ0AQdyVBCAFIAMQXyIGEDooAgAiAkUNAANAIAIoAgAiAkUNASAFIAIoAgRHBEAgAigCBCADEF8gBkcNAgtB3JUEEF4gAkEIaiAAEIwCRQ0ACwwBCyMAQRBrIgkkAEHclQQQMiEAIAFBEGpBiAQQWyAJQQhqIABBABCtAhCsAiICKAIAQQhqIQAgBCgCECEKIwBBEGsiByQAIAcgCjYCCCAAIAcoAggoAgA2AgAgAEEIakEAQfgDEDkiAEIANwLMASAAQgA3A8ABIABC/v///w83A/ABIABCADcC1AEgAEIANwLcASAAQaACahCNAhogAEHEAmoQUhogAEKAgICAgIDQx8AANwPYAiAAQq2G8diu3I2NPzcD0AIgAEHgAmoQUhogAEECNgLwAyAAQQA2AuwCIAdBEGokACACEFNBAToABCACKAIAIAU2AgQgAigCAEEANgIAIAlBEGokAEHclQQQPCgCACEAQdyVBBBeIQICQCADBEAgAEEBarMgAioCACADs5ReRQ0BCyABIAMQiwJBAXMgA0EBdHI2AgwgAQJ/QdyVBBA8KAIAQQFqs0HclQQQXioCAJWNIgtDAACAT10gC0MAAAAAYHEEQCALqQwBC0EACzYCCEHclQQgAUEMaiABQQhqEG8oAgAQrwIgBUHclQQQlAEiAxBfIQYLAkBB3JUEIAYQOigCACIARQRAIAEoAhBB5JUEKAIANgIAQeSVBCABKAIQNgIAQdyVBCAGEDpB5JUENgIAIAEoAhAoAgBFDQEgASgCECEAQdyVBCABKAIQKAIAKAIEIAMQXxA6IAA2AgAMAQsgASgCECAAKAIANgIAIAAgASgCEDYCAAsgAUEQaiIAELkBIQJB3JUEEDwiAyADKAIAQQFqNgIAIAFBAToAHyAAEL0FCyAIIAFBEGogAhB3IAFBH2oQrgIgAUEgaiQAIAgQbSEAIARBIGokACAAQQhqC9MBAgN/An4CQCAAKQNwIgRQRSAEIAApA3ggACgCBCIBIAAoAiwiAmusfCIFV3FFBEAgABCQAyIDQQBODQEgACgCLCECIAAoAgQhAQsgAEJ/NwNwIAAgATYCaCAAIAUgAiABa6x8NwN4QX8PCyAFQgF8IQUgACgCBCEBIAAoAgghAgJAIAApA3AiBFANACAEIAV9IgQgAiABa6xZDQAgASAEp2ohAgsgACACNgJoIAAgBSAAKAIsIgAgAWusfDcDeCAAIAFPBEAgAUEBayADOgAACyADCywBAX8jAEEQayIBJAAgAEIANwIAIAFBADYCDCAAQQhqEKUCIAFBEGokACAACwcAIABBBGoLGwEBf0EKIQEgABCtAQR/IAAQ/QFBAWsFQQoLC+UBAQV/AkAgARDEBCEDIAMgACIEELgEIgBNBEAgBBBAIgUhAiADIgAEfwJAIAEgAkYNACACIAFrIABBAnRPBEAgAEUNAQNAIAIgASgCADYCACACQQRqIQIgAUEEaiEBIABBAWsiAA0ACwwBCyAARQ0AA0AgAiAAQQFrIgBBAnQiBmogASAGaigCADYCACAADQALC0EABSACCxojAEEQayIAJAAgBCADEJcCIABBADYCDCAFIANBAnRqIABBDGoQqgEgAEEQaiQADAELIAQgACADIABrIAQQNSIAQQAgACADIAEQ+gYLC1MBAn8CQCABEIQBIQIgAiAAEFQiA00EQCAAEEAhAyACBEAgAyABIAIQ1AILIAAgAyACEIEHDAELIAAgAyACIANrIAAQNSIAQQAgACACIAEQ/QYLCwYAIAAQMQtgAQF/IwBBEGsiBSQAIAAgAyAEEPABIQAgBUEMaiAFQQhqIAEgAiADEJEEIAUqAgghASAAIAUqAgwgACgCBEECa7MQ7wIgASAAKAIIQQJrsxDvAhBIIQEgBUEQaiQAIAELCQAgACAAEOMFC0YAIAAgASoCCCABKgIAIAIqAgCUIAEqAgQgAioCBJSSkjgCACAAIAEqAhQgASoCDCACKgIAlCABKgIQIAIqAgSUkpI4AgQLMwEBfyAAQQEgABshAAJAA0AgABA3IgENAUH4xwQoAgAiAQRAIAERDgAMAQsLEAAACyABC/ECAQR/QZy5BC0AAARAQZi5BCgCAA8LIwBBIGsiAiQAAkACQANAIAJBCGogAEECdGoCf0EBIAB0Qf////8HcSIDQQFyRQRAIABBAnQoAgAMAQsgAEH8nQJB/a8CIAMbEMgECyIDNgIAIANBf0YNASAAQQFqIgBBBkcNAAtBABDHBEUEQEHInwMhASACQQhqQcifAxD5AkUNAkHgnwMhASACQQhqQeCfAxD5AkUNAkEAIQBB8LcELQAARQRAA0AgAEECdEHAtwRqIABB/a8CEMgENgIAIABBAWoiAEEGRw0AC0HwtwRBAToAAEHYtwRBwLcEKAIANgIAC0HAtwQhASACQQhqQcC3BBD5AkUNAkHYtwQhASACQQhqQdi3BBD5AkUNAkEYEDciAUUNAQsgASACKQMINwIAIAEgAikDGDcCECABIAIpAxA3AggMAQtBACEBCyACQSBqJAAgASEAQZy5BEEBOgAAQZi5BCAANgIAIAALyQoCBX8PfiMAQeAAayIFJAAgBEL///////8/gyEMIAIgBIVCgICAgICAgICAf4MhCiACQv///////z+DIg1CIIghDiAEQjCIp0H//wFxIQcCQAJAIAJCMIinQf//AXEiCUH//wFrQYKAfk8EQCAHQf//AWtBgYB+Sw0BCyABUCACQv///////////wCDIgtCgICAgICAwP//AFQgC0KAgICAgIDA//8AURtFBEAgAkKAgICAgIAghCEKDAILIANQIARC////////////AIMiAkKAgICAgIDA//8AVCACQoCAgICAgMD//wBRG0UEQCAEQoCAgICAgCCEIQogAyEBDAILIAEgC0KAgICAgIDA//8AhYRQBEAgAiADhFAEQEKAgICAgIDg//8AIQpCACEBDAMLIApCgICAgICAwP//AIQhCkIAIQEMAgsgAyACQoCAgICAgMD//wCFhFAEQCABIAuEIQJCACEBIAJQBEBCgICAgICA4P//ACEKDAMLIApCgICAgICAwP//AIQhCgwCCyABIAuEUARAQgAhAQwCCyACIAOEUARAQgAhAQwCCyALQv///////z9YBEAgBUHQAGogASANIAEgDSANUCIGG3kgBkEGdK18pyIGQQ9rEIgBQRAgBmshBiAFKQNYIg1CIIghDiAFKQNQIQELIAJC////////P1YNACAFQUBrIAMgDCADIAwgDFAiCBt5IAhBBnStfKciCEEPaxCIASAGIAhrQRBqIQYgBSkDSCEMIAUpA0AhAwsgA0IPhiILQoCA/v8PgyICIAFCIIgiBH4iECALQiCIIhMgAUL/////D4MiAX58Ig9CIIYiESABIAJ+fCILIBFUrSACIA1C/////w+DIg1+IhUgBCATfnwiESAMQg+GIhIgA0IxiIRC/////w+DIgMgAX58IhQgDyAQVK1CIIYgD0IgiIR8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aiAFIAZsbCABakoNCCAADwtBgLIEQfmMARAwQf+DARAwQYAdEDBBpQEQM0HxIBAwQcCOARAwEDQMCAtBgLIEQa+QARAwQf+DARAwQYAdEDBBpgEQM0HxIBAwQcCOARAwEDQMBwtBgLIEQeKSARAwQf+DARAwQYAdEDBBpwEQM0HxIBAwQZaTARAwEDQMBgtBgLIEQdeWARAwQf+DARAwQYAdEDBBqAEQM0HxIBAwQZaTARAwEDQMBQtBgLIEQcmYARAwQf+DARAwQYAdEDBBqQEQM0HxIBAwQY6bARAwEDQMBAtBgLIEQfmcARAwQf+DARAwQYAdEDBBqgEQM0HxIBAwQY6bARAwEDQMAwtBgLIEQaWfARAwQf+DARAwQYAdEDBBqwEQM0HxIBAwQa6gARAwEDQMAgtBgLIEQfKhARAwQf+DARAwQYAdEDBBrAEQM0HxIBAwQa6gARAwEDQMAQtBgLIEQaWlARAwQf+DARAwQYAdEDBBsAEQM0HxIBAwQZuKARAwEDQLEAAACwkAIAAQUygCAAsJACAAIAE2AgALIgEBfyMAQRBrIgIkACAAIAEgARCEARD7BiACQRBqJAAgAAsLACAAQcS5BBDLAQsRACAAIAEgASgCACgCFBECAAsPACAAIAAoAgAoAhARAAALEQAgACABIAAoAgAoAiwRAwALDAAgACABLQAAOgAACwkAIAAgAToACwvMCQIEfgR/IwBB8ABrIgokACAEQv///////////wCDIQUCQAJAIAFQIgkgAkL///////////8AgyIGQoCAgICAgMD//wB9QoCAgICAgMCAgH9UIAZQG0UEQCADQgBSIAVCgICAgICAwP//AH0iCEKAgICAgIDAgIB/ViAIQoCAgICAgMCAgH9RGw0BCyAJIAZCgICAgICAwP//AFQgBkKAgICAgIDA//8AURtFBEAgAkKAgICAgIAghCEEIAEhAwwCCyADUCAFQoCAgICAgMD//wBUIAVCgICAgICAwP//AFEbRQRAIARCgICAgICAIIQhBAwCCyABIAZCgICAgICAwP//AIWEUARAQoCAgICAgOD//wAgAiABIAOFIAIgBIVCgICAgICAgICAf4WEUCIJGyEEQgAgASAJGyEDDAILIAMgBUKAgICAgIDA//8AhYRQDQEgASAGhFAEQCADIAWEQgBSDQIgASAD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AKIiAaIgAERpUO7gQpP5PqJEJx4P6IfAVr+goiABREI6BeFTVaU/oiAARIFeDP3//9+/okQAAAAAAADwP6CgoLYLFQAgACABELUGIABBBGogAUEEahBJCxIAIAAQMigCACAAKAIAa0ECdQsSACAAKAIAIgAEQCAAEMIEGgsLEQAgACABKAIAEMIENgIAIAALQgEBfyAAKAIAIQIgARBhIQAgAkEIaiIBEEYgAEsEfyABIAAQOigCAEEARwVBAAtFBEAQdQALIAJBCGogABA6KAIACzYAIAIEfyACBEADQCAAIAEoAgA2AgAgAEEEaiEAIAFBBGohASACQQFrIgINAAsLQQAFIAALGgsQACACBEAgACABIAIQPhoLC/oBAgN+An8jAEEQayIFJAACfiABvSIDQv///////////wCDIgJCgICAgICAgAh9Qv/////////v/wBYBEAgAkI8hiEEIAJCBIhCgICAgICAgIA8fAwBCyACQoCAgICAgID4/wBaBEAgA0I8hiEEIANCBIhCgICAgICAwP//AIQMAQsgAlAEQEIADAELIAUgAkIAIAOnZ0EgaiACQiCIp2cgAkKAgICAEFQbIgZBMWoQiAEgBSkDACEEIAUpAwhCgICAgICAwACFQYz4ACAGa61CMIaECyECIAAgBDcDACAAIAIgA0KAgICAgICAgIB/g4Q3AwggBUEQaiQAC0IBAX8gASACbCEEIAQCfyADKAJMQQBIBEAgACAEIAMQ3QMMAQsgACAEIAMQ3QMLIgBGBEAgAkEAIAEbDwsgACABbgt3ACAAIAEqAgAgApQ4AgAgACABKgIEIAKUOAIEIAAgASoCCCAClDgCCCAAIAEqAgwgApQ4AgwgACABKgIQIAKUOAIQIAAgASoCFCAClDgCFCAAIAEqAhggApQ4AhggACABKgIcIAKUOAIcIAAgASoCICAClDgCIAs9AQF/IAAoAgQiAARAIAAQ4gIEQAJAIABBCGoiASgCAARAIAEQ9QNBf0cNAQsgACAAKAIAKAIQEQEACwsLCxEAIAAgACgCAEEIazYCACAACy4BAX8gABDsAiAAKAIABEAgABDTBiAAEDIaIAAoAgAhASAAELoBGiABEDELIAALDwAgABDnAUEEaiABEHcaC1kBAn8jAEEQayICJAAgABCtAQRAIAAoAgAhAyAAEP0BGiAD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AwwBCwsgACABNgIECygBAX9BBBAGEIQEIgBBkPYDNgIAIABBpPYDNgIAIABBlPcDQQ0QBQALDwAgACAAKAIAKAIkEQAACxEAIAAgASABKAIAKAIgEQIACxEAIAAgASABKAIAKAIsEQIACwwAIABBgoaAIDYAAAugAQEEfyMAQRBrIgckAAJAIABFDQAgBCgCDCEGIAIgAWsiCEEASgRAIAAgASAIEMMCIAhHDQELIAYgAyABayIBa0EAIAEgBkgbIgFBAEoEQCAAIAcgASAFEKIHIgUQQCABEMMCIQYgBRA4GiABIAZHDQELIAMgAmsiAUEASgRAIAAgAiABEMMCIAFHDQELIAQQnQcgACEJCyAHQRBqJAAgCQsuAQF/IwBBEGsiASQAIAFBCGogABBAIAAQNUECdGoQdygCACEAIAFBEGokACAACysBAX8jAEEQayIBJAAgAUEIaiAAEEAgABA1ahB3KAIAIQAgAUEQaiQAIAALFgAgACABIAIgAyAAKAIAKAIgEQgAGgspACAAQQh0QYCA/AdxIABBGHRyIABBCHZBgP4DcSAAQRh2cnIgACABGwsOACAAKAIIQf////8HcQtQAQF+AkAgA0HAAHEEQCACIANBQGqtiCEBQgAhAgwBCyADRQ0AIAJBwAAgA2uthiABIAOtIgSIhCEBIAIgBIghAgsgACABNwMAIAAgAjcDCAvbAQIBfwJ+QQEhBAJAIABCAFIgAUL///////////8AgyIFQoCAgICAgMD//wBWIAVCgICAgICAwP//AFEbDQAgAkIAUiADQv///////////wCDIgZCgICAgICAwP//AFYgBkKAgICAgIDA//8AURsNACAAIAKEIAUgBoSEUARAQQAPCyABIAODQgBZBEBBfyEEIAAgAlQgASADUyABIANRGw0BIAAgAoUgASADhYRCAFIPC0F/IQQgACACViABIANVIAEgA1EbDQAgACAChSABIAOFhEIAUiEECyAEC1IBAn9BjPsDKAIAIgEgAEEHakF4cSICaiEAAkAgAkEAIAAgAU0bDQAgAD8AQRB0SwRAIAAQG0UNAQtBjPsDIAA2AgAgAQ8LQYiZBEEwNgIAQX8LogEBAn8jAEGgAWsiBCQAQX8hBSAEIAFBAWtBACABGzYClAEgBCAAIARBngFqIAEbIgA2ApABIARBAEGQARA5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IAMgAToAACABEMMBC0F/ELsBRQ0AIABBADYCAAsLCQAgABCCAxAxC4sCAgd/AXwjAEEgayIGJAAgBiAEQQR0EDciCjYCECAKBEACQCAGIARBGGwQNyILNgIUIAtFDQAgBEEAIARBAEobIQwDQCAJIAxGRQRAIAogCUEEdCIHaiIIIAIgB2oiBysDADkDACAIIAcrAwg5AwggCyAJQRhsIghqIgcgAyAIaiIIKwMAOQMAIAcgCCsDCDkDCCAHIAgrAxA5AxAgCUEBaiEJDAELCyAGIAQ2AhggACgCACAGQRBqIAEgBSAGQQhqEN4CQQBIBEAgBkKAgICAwPD1y8EANwMICyAGKAIQEDEgBigCFBAxIAYrAwghDSAGQSBqJAAgDQ8LC0EAQQNB/g1BABA2QQEQAQALCAAgACgCEEULCQAgABCEAxAxCwoAIABBGHRBGHULFAAgAEHolAM2AgAgAEEEahBFIAALDAAgABDNAhogABAxCwkAIAAgARDwBAvTAwICfgJ/IwBBIGsiBCQAAkAgAUL///////////8AgyIDQoCAgICAgMCAPH0gA0KAgICAgIDA/8MAfVQEQCABQgSGIABCPIiEIQMgAEL//////////w+DIgBCgYCAgICAgIAIWgRAIANCgYCAgICAgIDAAHwhAgwCCyADQoCAgICAgICAQH0hAiAAQoCAgICAgICACFINASACIANCAYN8IQIMAQsgAFAgA0KAgICAgIDA//8AVCADQoCAgICAgMD//wBRG0UEQCABQgSGIABCPIiEQv////////8Dg0KAgICAgICA/P8AhCECDAELQoCAgICAgID4/wAhAiADQv///////7//wwBWDQBCACECIANCMIinIgVBkfcASQ0AIARBEGogACABQv///////z+DQoCAgICAgMAAhCICIAVBgfcAaxCIASAEIAAgAkGB+AAgBWsQ/gEgBCkDCEIEhiAEKQMAIgBCPIiEIQIgBCkDECAEKQMYhEIAUq0gAEL//////////w+DhCIAQoGAgICAgICACFoEQCACQgF8IQIMAQsgAEKAgICAgICAgAhSDQAgAkIBgyACfCECCyAEQSBqJAAgAiABQoCAgICAgICAgH+DhL8LRQEBfyMAQRBrIgUkACAFIAEgAiADIARCgICAgICAgICAf4UQnQEgBSkDACEBIAAgBSkDCDcDCCAAIAE3AwAgBUEQaiQAC4kCAAJAIAAEfyABQf8ATQ0BAkBB5JoEKAIAKAIARQRAIAFBgH9xQYC/A0YNAwwBCyABQf8PTQRAIAAgAUE/cUGAAXI6AAEgACABQQZ2QcABcjoAAEECDwsgAUGAQHFBgMADRyABQYCwA09xRQRAIAAgAUE/cUGAAXI6AAIgACABQQx2QeABcjoAACAAIAFBBnZBP3FBgAFyOgABQQMPCyABQYCABGtB//8/TQRAIAAgAUE/cUGAAXI6AAMgACABQRJ2QfABcjoAACAAIAFBBnZBP3FBgAFyOgACIAAgAUEMdkE/cUGAAXI6AAFBBA8LC0GImQRBGTYCAEF/BUEBCw8LIAAgAToAAEEBC9oBAQJ/AkAgAUH/AXEiAwRAIABBA3EEQANAIAAtAAAiAkUgAiABQf8BcUZyDQMgAEEBaiIAQQNxDQALCwJAIAAoAgAiAkF/cyACQYGChAhrcUGAgYKEeHENACADQYGChAhsIQMDQCACIANzIgJBf3MgAkGBgoQIa3FBgIGChHhxDQEgACgCBCECIABBBGohACACQYGChAhrIAJBf3NxQYCBgoR4cUUNAAsLA0AgACICLQAAIgMEQCACQQFqIQAgAyABQf8BcUcNAQsLIAIPCyAAEIQBIABqDwsgAAsqAQF/IwBBEGsiBCQAIAQgAzYCDCAAIAEgAiADEIECIQAgBEEQaiQAIAALrwEBBn8jAEHwAWsiByQAIAcgADYCAEEBIQYCQCADQQJIDQBBACABayEJIAAhBQNAIAAgBSAJaiIFIAQgA0ECayIKQQJ0aigCAGsiCCACEQMAQQBOBEAgACAFIAIRAwBBAE4NAgsgByAGQQJ0aiAIIAUgCCAFIAIRAwBBAE4iCBsiBTYCACAGQQFqIQYgA0EBayAKIAgbIgNBAUoNAAsLIAEgByAGEJAFIAdB8AFqJAAL4wEBAn8gAkEARyEDAkACQAJAIABBA3FFIAJFcg0AIAFB/wFxIQQDQCAALQAAIARGDQIgAkEBayICQQBHIQMgAEEBaiIAQQNxRQ0BIAINAAsLIANFDQELAkAgAC0AACABQf8BcUYgAkEESXJFBEAgAUH/AXFBgYKECGwhAwNAIAAoAgAgA3MiBEF/cyAEQYGChAhrcUGAgYKEeHENAiAAQQRqIQAgAkEEayICQQNLDQALCyACRQ0BCyABQf8BcSEBA0AgASAALQAARgRAIAAPCyAAQQFqIQAgAkEBayICDQALC0EAC8EBAQN/AkAgASACKAIQIgMEfyADBSACEJwFDQEgAigCEAsgAigCFCIFa0sEQCACIAAgASACKAIkEQQADwsCQCACKAJQQQBIBEBBACEDDAELIAEhBANAIAQiA0UEQEEAIQMMAgsgACADQQFrIgRqLQAAQQpHDQALIAIgACADIAIoAiQRBAAiBCADSQ0BIAAgA2ohACABIANrIQEgAigCFCEFCyAFIAAgARA+GiACIAIoAhQgAWo2AhQgASADaiEECyAEC44KAQ5/IAEoAhQhCSABKAIQIQMgASgCDCELIAEoAgghBSAAKALkAygCGCENAkAgASgCBCIHIAEoAgAiBkoEQCAGIQoDQCAFIAtMBEAgDSAKQQJ0aigCACEMIAUhAgNAIAMgCUwEQCAMIAJBBnRqIANBAXRqIQAgAyEEA0AgAC8BAARAIAEgCjYCAAwHCyAAQQJqIQAgBCAJRyEIIARBAWohBCAIDQALCyACIAtHIQAgAkEBaiECIAANAAsLIAcgCkchACAKQQFqIQogAA0ACwsgBiEKCwJAIAcgCkoEQCAHIQgDQCAFIAtMBEAgDSAIQQJ0aigCACEMIAUhAgNAIAMgCUwEQCAMIAJBBnRqIANBAXRqIQAgAyEEA0AgAC8BAARAIAEgCDYCBAwHCyAAQQJqIQAgBCAJRyEGIARBAWohBCAGDQALCyACIAtHIQAgAkEBaiECIAANAAsLIAggCkohACAIQQFrIQggAA0ACwsgByEICwJAIAUgC0gEQCAFIQYDQCAIIAoiAk4EQANAIAMgCUwEQCANIAJBAnRqKAIAIAZBBnRqIANBAXRqIQAgAyEEA0AgAC8BAARAIAEgBjYCCAwHCyAAQQJqIQAgBCAJRyEHIARBAWohBCAHDQALCyACIAhHIQAgAkEBaiECIAANAAsLIAYgC0chACAGQQFqIQYgAA0ACwsgBSEGCwJAIAYgC0gEQCALIQcDQCAIIAoiAk4EQANAIAMgCUwEQCANIAJBAnRqKAIAIAdBBnRqIANBAXRqIQAgAyEEA0AgAC8BAARAIAEgBzYCDAwHCyAAQQJqIQAgBCAJRyEFIARBAWohBCAFDQALCyACIAhHIQAgAkEBaiECIAANAAsLIAYgB0ghACAHQQFrIQcgAA0ACwsgCyEHCwJAIAMgCUgEQCAGQQZ0IQwgAyEFA0AgCCAKIgJOBEADQCAGIAdMBEAgDSACQQJ0aigCACAMaiAFQQF0aiEAIAYhBANAIAAvAQAEQCABIAU2AhAMBwsgAEFAayEAIAQgB0chCyAEQQFqIQQgCw0ACwsgAiAIRyEAIAJBAWohAiAADQALCyAFIAlHIQAgBUEBaiEFIAANAAsLIAMhBQsCQCAFIAlIBEAgBkEGdCEMIAkhAgNAIAggCiIDTgRAA0AgBiAHTARAIA0gA0ECdGooAgAgDGogAkEBdGohACAGIQQDQCAALwEABEAgASACNgIUDAcLIABBQGshACAEIAdHIQsgBEEBaiEEIAsNAAsLIAMgCEchACADQQFqIQMgAA0ACwsgAiAFSiEAIAJBAWshAiAADQALCyAJIQILIAEgByAGa0EMbCIAIABsIAggCmtBBHQiACAAbGogAiAFayIOQQN0IgAgAGxqNgIYQQAhBCAIIApOBEAgDkEBakEDcSEPA0AgBiAHTARAIA0gCkECdGooAgAhDCAGIQMDQCADIQsCQCACIAVIDQAgDCALQQZ0aiAFQQF0aiEDQQAhCSAFIQAgDwRAA0AgAEEBaiEAIAQgAy8BAEEAR2ohBCADQQJqIQMgCUEBaiIJIA9HDQALCyAOQQNJDQADQCAEIAMvAQBBAEdqIAMvAQJBAEdqIAMvAQRBAEdqIAMvAQZBAEdqIQQgA0EIaiEDIABBA2ohCSAAQQRqIQAgAiAJRw0ACwsgC0EBaiEDIAcgC0cNAAsLIAggCkchACAKQQFqIQogAA0ACwsgASAENgIcCywBAX8gABCNBSAAKAIABEAgABCHBSAAEDIaIAAoAgAhASAAENsBGiABEDELC8cCAQN/IAAoAgQhAwJAIAFBAk8EQCAAKAIAIgIgATYCGCACQQ82AhQgACAAKAIAKAIAEQEADAELIAFBAUcNACADKAJEIgIEQANAIAIoAigEQCACQQA2AiggACACQTBqIAIoAjgRAgALIAIoAiwiAg0ACwsgA0EANgJEIAMoAkgiAgRAA0AgAigCKARAIAJBADYCKCAAIAJBMGogAigCOBECAAsgAigCLCICDQALCyADQQA2AkgLIAMgAUECdGoiASIAKAI8IQIgAEEANgI8IAIEQANAIAIoAgAhACACKAIEIAIoAghqQRBqIQQgAhAxIAMgAygCTCAEazYCTCAAIgINAAsLIAEoAjQhAiABQQA2AjQgAgRAA0AgAigCACEAIAIoAgQgAigCCGpBEGohASACEDEgAyADKAJMIAFrNgJMIAAiAg0ACwsLvQMCAX8DfSMAQSBrIgYkACAFAn8CQAJAAkAgAUUNACAAIAEgBCoCCCIIIAQqAgwiCSAGQRxqIAZBEGoQ1gJBAEgNACAFAn8gBioCHCIHi0MAAABPXQRAIAeoDAELQYCAgIB4CzYCACAFAn8gBioCECIHi0MAAABPXQRAIAeoDAELQYCAgIB4CzYCBCACRQ0BIAAgAiAIIAkgBkEYaiAGQQxqENYCQQBIDQEgBQJ/IAYqAhwiByAHkiAGKgIYkyIHi0MAAABPXQRAIAeoDAELQYCAgIB4CzYCCCAFAn8gBioCECIHIAeSIAYqAgyTIgeLQwAAAE9dBEAgB6gMAQtBgICAgHgLNgIMIANFDQIgACADIAggCSAGQRRqIAZBCGoQ1gJBAEgNAiAFAn8gBioCFCAGKgIcQwAAQECUIAYqAhhDAABAwJSSkiIIi0MAAABPXQRAIAioDAELQYCAgIB4CzYCECAGKgIIIAYqAhBDAABAQJQgBioCDEMAAEDAlJKSIgiLQwAAAE9dBEAgCKgMBAtBgICAgHgMAwsgBUJ/NwIACyAFQn83AggLIAVBfzYCEEF/CzYCFCAGQSBqJAALTgECfSABKgIAIAAqAgCTIgQgBJQgASoCBCAAKgIEkyIEIASUkpEiBUMAAAAAXARAIAIgBCAFlTgCACADIAEqAgAgACoCAJMgBZU4AgALC4kDAQZ/IAAoAhgiASgCBCECIAEoAgAhBANAIAJFBEAgACABKAIMEQAARQRAQQAPCyABKAIAIQQgASgCBCECCyAEQQFqIQMgAkEBayECIAQtAABB/wFHBEADQCAAKALQAyIEIAQoAhhBAWo2AhggASACNgIEIAEgAzYCACACBH8gAgUgACABKAIMEQAARQRAQQAPCyABKAIAIQMgASgCBAtBAWshAiADLQAAIQQgA0EBaiEDIARB/wFHDQALCwNAIAIEfyACBSAAIAEoAgwRAABFBEBBAA8LIAEoAgAhAyABKAIEC0EBayECIAMtAAAhBSADQQFqIgQhAyAFQf8BRg0ACyAFRQRAIAAoAtADIgMgAygCGEECajYCGCABIAI2AgQgASAENgIADAELCyAAKALQAygCGCIDBEAgACgCACIGIAM2AhggBkH3ADYCFCAAKAIAIAU2AhwgAEF/IAAoAgAoAgQRAgAgACgC0ANBADYCGAsgACAFNgK4AyABIAI2AgQgASAENgIAQQELFAEBf0EIEFsiASAAKQIANwMAIAELJwEBfyMAQRBrIgIkACAAQQJB9LQCQfy0AkHpACABEAMgAkEQaiQACycBAX8jAEEQayICJAAgAEEDQdizAkGMswJB3gAgARADIAJBEGokAAsbAQF/IAAoAgAiAUUEQA8LIAEQMSAAQQA2AgAL/gMBCX8jAEEQayILJAACQAJAAkACQCACBEAgA0UNASAERQ0CIAAgARDYBSACIARsbCIFNgIMIAMgBWwiDCAAKAIURwRAIAwQWyEFIwBBEGsiDSQAIwBBIGsiBiQAIA1BCGoiCSAFNgIAIAZBGGogBRCoBiEKQRAQWyEHIwBBIGsiCCQAIAggBTYCDCAHEPcDIgdB5OIBNgIAIAdBDGogCEEIaiAIQQxqEKsCEKsCGiAIQSBqJAAgCSAHNgIEIAoQuQEaIAYgBTYCBCAGIAU2AgAgCigCACEFIApBADYCACAFBEAgBRAxCyAGQSBqJAAgCSAAQRhqEPgDIAkQ0QEgDUEQaiQAIAAoAhhFDQQgACgCGEUNBQsgACAMNgIUIAAgBDYCECAAIAM2AgggACACNgIEIAAgATYCACALQRBqJAAPC0GAsgRBpgkQMEHVExAwQYAdEDBB/wAQM0HxIBAwQb8jEDAQNBAAAAtBgLIEQd8qEDBB1RMQMEGAHRAwQYABEDNB8SAQMEGyLxAwEDQQAAALQYCyBEGoxQAQMEHVExAwQYAdEDBBggEQM0HxIBAwQbDJABAwEDQQAAALQYCyBEHk0QAQMEHVExAwQYAdEDBBlQEQM0HxIBAwQeXVABAwEDQQAAALQRAQBiALQZTbABCWARDlAkH42QFBDxAFAAujAQEFf0GIARA3IgEEQANAQQAhAyACQQNGRQRAA0AgA0EERkUEQCADQQN0IgQgASACQQV0IgVqaiAAIAVqIARqKwMAOQMAIANBAWohAwwBCwsgAkEBaiECDAELCyABQoCAgICAgIDwPzcDgAEgAUKAgICAgICAiMAANwN4IAFCgICAgMjC6/c/NwNwIAFCgICAgJqz5tw/NwNoIAFBCjYCYAsgAQsQACAAKAIAIAEoAgBrQQJ1C9oOAQx/IwBBIGsiDyQAAkAgAi0AZARAIA8gAEHIAGoiARDuAjYCCCAPQRhqIA9BCGoQngEhACACEKoCEL0CIQwgAhCqAhDuAiEOIAAoAgAhACMAQSBrIgckACAHIAA2AhggASgCACEAIAcgARC9AjYCACAAIAdBGGogBxDqA0ECdGohBAJAIAwgDhDsBSIFQQBMDQAgARAyKAIAIAEoAgQiBmtBAnUgBU4EQCAHIA42AgAgBiAEayIDQQJ1IgIgBUgEQCAHIAw2AgAgByACEOsFIAcoAgAhACMAQRBrIggkACAIIAEgBSACaxC6AiEJIAEQMiECIwBBEGsiCyQAIAsgDjYCACALIAA2AggDQCALQQhqIAsQfQRAIAIgCSgCBCALQQhqIgAoAgAQ7AEgABCHAiAJIAkoAgRBBGo2AgQMAQsLIAtBEGokACAJEHIgCEEQaiQAIANBAEwNAgsjAEEQayIJJAAgCSABIAYgBCABKAIEIgMgBCAFQQJ0amtqIgJrQQJ1ELoCIggoAgQhDSACIQADQCAAIAZPBEAgCBByIAIgBEcEQCADIAIgBGsiAGsgBCAAENQCCyAJQRBqJAAFIAEQMiANIAAQ7AEgCCANQQRqIg02AgQgAEEEaiEADAELCyAMIAcoAgAgBBDhAhoMAQsgARAyIQAgByABIAEQRiAFahCkAyAEIAEoAgBrQQJ1IAAQvAIhBiMAQSBrIgIkACACIAw2AhggAkEIaiAGQQhqIAwgDhDsBRCsAyEDA0AgAygCACADKAIERwRAIAYoAhAgAygCACACQRhqIgAoAgAQ7AEgAyADKAIAQQRqNgIAIAAQhwIMAQsLIAMQsgEgAkEgaiQAIAEQ8gIgBigCBCEAIAEQMiABKAIAIAQgBkEEaiIIEJQCIAEQMiEDIAEoAgQhAiAGQQhqIQkDQCACIARHBEAgAyAJKAIAIAQQ7AEgCSAJKAIAQQRqNgIAIARBBGohBAwBCwsgASAIEEkgAUEEaiAJEEkgARAyIAYQPBBJIAYgBigCBDYCACABIAEQRhC4AiAAIQQgBhC7AgsgBBCLBBogB0EgaiQADAELIA9BCGoQUiELIwBBIGsiDiQAQX8hCUF/IQ0gAkHoAGoiDBBGIQYjAEEQayIIJAAgDkEQaiIHQgA3AgAgCEEANgIMIAdBCGoQpQIgBgRAIAcQtQIgBkkEQBCwAgALIAcgBxAyIAYQiAQiAjYCACAHIAI2AgQgBxAyIAIgBkEDdGo2AgAgB0EAEKkDIAcgBhD8AwsgCEEQaiQAAkADQCAHED0gBE0EQCANQX9HBEAgCyAMIA0QOhCiA0EAIQQDQCAHED0gBE0NBAJAIAQgDUYNACAHIAQQTSgCBCAHIA0QTSgCBEYEQCALIAwgBBA6EKIDDAELIAcgBBBNIQgCQCABKAIEIAEQMigCAEcEQCABIAgQ7QIMAQsjAEEgayIJJAAgARAyIgIgCUEIaiABIAEQPUEBahD7AyABED0gAhC2AiIKKAIIIAgQtwIgCiAKKAIIQQhqNgIIIAEQ7AIgARAyIQggASgCACECIAEoAgQhBiAKQQRqIQUDQCACIAZHBEAgCCAFKAIAQQhrIAZBCGsiBhC3AiAFIAUoAgBBCGs2AgAMAQsLIAEgBRBJIAFBBGogCkEIahBJIAEQMiAKEDwQSSAKIAooAgQ2AgAgASABED0QqQMgCigCBCECA0AgAiAKKAIIRwRAIAooAhAaIAogCigCCEEIazYCCAwBCwsgCigCAARAIAooAhAaIAooAgAhAiAKELkGGiACEDELIAlBIGokAAsgARC9AiEJIAEQ7gIhCCMAQSBrIgYkACAGIAg2AhAgBiAJNgIYIAZBEGogBkEYahCoAyECIwBBIGsiBSQAIAUgCDYCECAFIAk2AhgCQCACQQJIDQAgBSAFQRhqIAJBAmtBAXYiAhDuATYCCCAFKAIIIAVBEGoQ0gEoAgAQpwJFDQAgBSAFKAIQKQIANwMAA0ACQCAFKAIQIAUoAggpAgA3AgAgBSAFKAIINgIQIAJFDQAgBSAFQRhqIAJBAWtBAm0iAhDuATYCCCAFKAIIIAUQpwINAQsLIAUoAhAgBSkDADcCAAsgBUEgaiQAIAZBIGokAAsgBEEBaiEEDAALAAsFIAwgBBA6KAIAQQRqIAMQoQMhCCAOQQhqIAwgBBA6KAIAIAgQ6wEhAiAHIAQQTSACKQMANwIAIAggCSAIIAlJIgIbIQkgBCANIAIbIQ0gBEEBaiEEDAELC0GAsgRB/7wBEDBBhYUBEDBBp8sAEDBBmwEQM0GH0gAQMEGCvgEQMBA0EAAACyAHEIoGIA5BIGokAEEAIQIDQCALEEYgAk0EQAJAIAAoAmQgACgCaE4NACABEO0FDQAgASgCACgCACECIAEQ7wUgACAAKAJkQQFqNgJkIAAgASACIAMQ6wMLIAsQfgUgACABIAsgAhA6KAIAIAMQ6wMgAkEBaiECDAELCwsgD0EgaiQAC1kBAX0gACACKgIIIAIqAgAgA5QgAioCBCAElJKSIAIqAiAgAioCGCADlCACKgIcIASUkpIiBZU4AgAgASACKgIUIAIqAgwgA5QgAioCECAElJKSIAWVOAIAC3QBAn8jAEEQayICJAAgAEIANwIAIAJBADYCDCAAQQhqEKUCIAEEQCAAEOoCIAFJBEAQkQIACyAAIAAQMiABELkCIgM2AgAgACADNgIEIAAQMiADIAFBAnRqNgIAIABBABC4AiAAIAEQrgMLIAJBEGokACAAC2ACA38BfCAAKAIEIgIgASgCBEYEQCACQQAgAkEAShshAgNAIAIgA0ZFBEAgA0EDdCIEIAAoAgBqKwMAIAEoAgAgBGorAwCiIAWgIQUgA0EBaiEDDAELCyAFDwtBABABAAsLACAAIAFBJBA+GgsKACABIABrQQxtC1gBAn8gAkEAIAJBAEobIQIDQCACIARHBEAgAyADKAIAQf2HDWxBw72aAWoiBTYCACAAIARBAnRqIAAgBUEQdkH//wFxIAFvQQJ0ahBJIARBAWohBAwBCwsLNAECf0EIEDciAQR/IAEgAEEDdBA3IgI2AgAgAkUEQCABEDFBAA8LIAEgADYCBCABBUEACwsNACAAKAIAGiAAEPoFC0gBAn8jAEEQayIBJAAjAEEQayICJAAgAkEIaiAAQQhqKAIAEHcoAgAhACACQRBqJAAgAUEIaiAAEHcoAgAhACABQRBqJAAgAAsTACAAIAAoAgBBAWsiADYCACAACxgBAX8jAEEQayIBJAAgABAxIAFBEGokAAsZACAAEIwGIgBBADYCCCAAQYDvAzYCACAACxQAIAAgARBJIABBBGogAUEEahBJCwcAIABBPGoLJAECfyMAQRBrIgAkACAAQQhqQQAQdygCACEBIABBEGokACABC1oBAn8jAEEQayICJAAgAiABNgIMIAEgABC1AiIDTQRAIAAQugEiACADQQF2SQRAIAIgAEEBdDYCCCACQQhqIAJBDGoQbygCACEDCyACQRBqJAAgAw8LELACAAtTAQN/IwBBEGsiAyQAIAMgACABELoGIgIoAgQhASACKAIIIQQDQCABIARGBEAgAhByIANBEGokAAUgABAyGiABEJcGIAIgAUEIaiIBNgIEDAELCwsJACAAIAEQngYLPAECfyMAQRBrIgEkACABQQhqIgIgACgCACgCAEFAaxCBBBogAigCABAyEF4hACACENEBIAFBEGokACAACxMAIAIgBaIgACADoiABIASioKALGQEBfyAAEI0BIQIgACABEOYEIAAgAhCbBgskACAAIAEoAgA2AgAgACABKAIEIgE2AgQgAQRAIAEQoAMLIAALFAAgAiACoiAAIACiIAEgAaKgoJ8LHQEBfyMAQRBrIgEkACAAEOcBIQAgAUEQaiQAIAALDQAgAEG49gM2AgAgAAuRAgIMfwF8QX8hCgJAIAEoAggiBiACKAIERw0AIAAoAgQiAyABKAIERw0AIAAoAggiByACKAIIRw0AQQAhCiADQQAgA0EAShshCyAHQQAgB0EAShshDCAGQQAgBkEAShshDSAAKAIAIQMDQCAEIAtGDQEgBCAGbCEOQQAhBQNAIAUgDEZFBEAgA0IANwMAIAIoAgAgBUEDdGohCCABKAIAIA5BA3RqIQlBACEARAAAAAAAAAAAIQ8DQCAAIA1GRQRAIAMgCSsDACAIKwMAoiAPoCIPOQMAIABBAWohACAJQQhqIQkgCCAHQQN0aiEIDAELCyAFQQFqIQUgA0EIaiEDDAELCyAEQQFqIQQMAAsACyAKCxUAIABBzNkBNgIAIABBBGoQlgQgAAtSAQJ/IABB3NkBNgIAIABBOGoQfiAAQSxqEH4gAEEgaiIBELQGIAEoAgAEQCABIAEoAgAQsAYgARAyGiABKAIAIQIgARCPAhogAhAxCyAAEIYECxkAIAFB/////wFLBEAQ8wEACyABQQN0EFsLDQAgACAClCABIAGUkwvJAgICfwF9AkACQCAGQQBMDQAgBSgCBCAGQQFqTQ0AIAdBAEwNASAHQQFqIgggBSgCCE8NASAFIAdBAWsQTCEJIAUgBxBMIQcgBSAIEEwhCCAAIAcgBkECdCIFaiIAKgIEIABBBGsiBioCAJNDAAAAP5Q4AgAgASAFIAhqIgEqAgAgBSAJaiIFKgIAk0MAAAA/lDgCACACIAYqAgAgACoCACIKIAqSkyAAKgIEkjgCACADIAUqAgAgACoCACIKIAqSkyABKgIAkjgCACAEIAVBBGsqAgAgASoCBJIgBSoCBCABQQRrKgIAkpNDAACAPpQ4AgAPC0GAsgRBmsYBEDBBlrcBEDBBgB0QMEGcAhAzQfEgEDBBx8ABEDAQNBAAAAtBgLIEQffGARAwQZa3ARAwQYAdEDBBnQIQM0HxIBAwQarCARAwEDQQAAALJAEBfyMAQRBrIgEkACABQQhqIAAQdygCACEAIAFBEGokACAACysAIAAoAgAaIAAoAgAgABC6AUEDdGoaIAAoAgAaIAAoAgAgABA9QQN0ahoLCQAgAEEkELcDC54BAQR/IAAQ2wYgABAyGiABQQRqIgMiAiACKAIAIAAoAgQgACgCACIEayICQVxtQSRsaiIFNgIAIAJBAEoEQCAFIAQgAhA+GgsgACADEEkgAEEEaiABQQhqEEkgABAyIAEQPBBJIAEgASgCBDYCACAAEIABGiAAKAIAGiAAKAIAIAAQ7wFBJGxqGiAAKAIAIAAQ7wFBJGxqGiAAKAIAGguJAQEFfwNAIAZBA0cEQCAAIAZBBHQiB2ohBEEAIQMDQCADQQRHBEAgA0ECdCIFIAIgB2pqIAQqAgggASAFaiIFKgIglCAEKgIAIAUqAgCUIAQqAgQgBSoCEJSSkjgCACADQQFqIQMMAQsLIAIgB2oiAyAEKgIMIAMqAgySOAIMIAZBAWohBgwBCwsLdgECfyMAQRBrIgUkACAFQQA2AgwgAEEMaiADENQBIAEEQCAAKAIQGiABQcfj8ThLBEAQ8wEACyABQSRsEFshBAsgACAENgIAIAAgBCACQSRsaiICNgIIIAAgAjYCBCAAEDwgBCABQSRsajYCACAFQRBqJAAgAAs4AQF9IAAgAkMAAIA/QQEgBHSylSIClCACQwAAAD+UQwAAAL+SIgWSOAIAIAEgAyAClCAFkjgCAAuMAQEFfwNAIAZBA0cEQCAAIAZBBXQiB2ohBEEAIQMDQCADQQRHBEAgA0EDdCIFIAIgB2pqIAQrAxAgASAFaiIFQUBrKwMAoiAEKwMAIAUrAwCiIAQrAwggBSsDIKKgoDkDACADQQFqIQMMAQsLIAIgB2oiAyAEKwMYIAMrAxigOQMYIAZBAWohBgwBCwsLCAAgACABEEoLFwEBfyAAEIABIQEgABDaBiAAIAEQ2AYLBABBAQsxAQF/IAAQ0gYgACgCAARAIAAgACgCABDQBiAAEDIaIAAoAgAhASAAEJACGiABEDELCywBAX8gABDbBiAAKAIABEAgABDaBiAAEDIaIAAoAgAhASAAEO8BGiABEDELCxgBAX8gABBGIQIgACABEMgGIAAgAhCtAwtUAQJ/IwBBIGsiAiQAAkAgABDvASABSQRAIAAQ1AYgAUkNASAAEDIhAyAAIAJBCGogASAAEIABIAMQkAQiABCOBCAAEI0ECyACQSBqJAAPCxCRAgAL5AcBB38gASAAEKIBIgJLBEAjAEEgayIIJAACQCABIAJrIgUgABAyKAIAIAAoAgRrQQV1TQRAIwBBEGsiAyQAIAMgADYCACADIAAoAgQiATYCBCADIAEgBUEFdGo2AgggAygCBCECIAMoAgghAQNAIAEgAkYEQCADEHIgA0EQaiQABSAAEDIaIAIQzgYgAyACQSBqIgI2AgQMAQsLDAELIAAQMiEHIAhBCGohAgJ/IAAQogEgBWohAyMAQRBrIgYkACAGIAM2AgwjAEEQayIEJAAgABAyGiAEQf///z82AgwgBEH/////BzYCCCAEQQxqIARBCGoQlQIoAgAhASAEQRBqJAAgASADTwRAIAAQkAIiAyABQQF2SQRAIAYgA0EBdDYCCCAGQQhqIAZBDGoQbygCACEBCyAGQRBqJAAgAQwBCxCRAgALIQYgABCiASEDQQAhASMAQRBrIgQkACAEQQA2AgwgAkEMaiAHENQBIAYEQCACKAIQGiAGQf///z9LBEAQ8wEACyAGQQV0EFshAQsgAiABNgIAIAIgASADQQV0aiIDNgIIIAIgAzYCBCACEDwgASAGQQV0ajYCACAEQRBqJAAjAEEQayIDJAAgAyACKAIINgIAIAIoAgghASADIAJBCGo2AgggAyABIAVBBXRqNgIEIAMoAgAhBQNAIAMoAgQgBUcEQCACKAIQGiADKAIAEM4GIAMgAygCAEEgaiIFNgIADAELCyADELIBIANBEGokACAAENIGIAAQMhogACgCACEDIAAoAgQhBSACQQRqIQcDQCADIAVHBEAgBygCAEEgayIEQgA3AgAgBEIANwIQIARCADcCCCAEQRhqIgEQswIaIAQgBUEgayIFKAIANgIA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CwALIAQgAjsBACACIANODQVBACEKIAxBACAMQQBKGyELIAAhAQNAIAogC0YNBiADIAEoAgBGBEAgASACNgIACyAKQQFqIQogAUEEaiEBDAALAAsgBEECay4BACIBQQBKBEAgA0ECdCAAakEEaygCACICIAFB//8DcUECdCAAakEEaygCACIDSgRAIAQgAzsBAEEAIQogDEEAIAxBAEobIQsgACEBA0AgCiALRgRAIAMhAgwHCyACIAEoAgBGBEAgASADNgIACyAKQQFqIQogAUEEaiEBDAALAAsgBCACOwEAIAIgA04NBEEAIQogDEEAIAxBAEobIQsgACEBA0AgCiALRg0FIAMgASgCAEYEQCABIAI2AgALIApBAWohCiABQQRqIQEMAAsACyAEIAM7AQAgA0EcbCAQaiICQRxrIgEgASgCAEEBajYCACACQRhrIgEgASgCACAJajYCACACQRRrIgEgASgCACAOajYCACAJIAJBEGsiASgCAEgEQCABIAk2AgALIAJBBGsgDjYCAAwFCyACQQBKBEAgBCACOwEAIAFBHGwgEGoiAkEcayIBIAEoAgBBAWo2AgAgAkEYayIBIAEoAgAgCWo2AgAgAkEUayIBIAEoAgAgDmo2AgAgCSACQQxrIgEoAgBKBEAgASAJNgIACyACQQRrIA42AgAMBQsgBEECay8BACICQRB0QRB1IgFBAEoEQCAEIAE7AQAgAkEcbCAQaiICQRxrIgEgASgCAEEBajYCACACQRhrIgEgASgCACAJajYCACACQRRrIgEgASgCACAOajYCACACQQxrIgEoAgAgCU4NBSABIAk2AgAMBQsgDEGAgAJOBEBBAEEDQeQLQQAQNkF/IQoMCQsgBCAMQQFqIgE7AQAgACAMQQJ0aiABQRB0QRB1NgIAIBAgDEEcbGoiAiAONgIYIAIgDjYCFCACIAk2AhAgAiAJNgIMIAIgDjYCCCACIAk2AgQgAkEBNgIAIAEhDAwECyAEQQA7AQAMAwsgBEEEaiEEIA5BAWohDiAGIAhqQQRqIQYMBQsgAkEQdEEQdUEcbCAQaiICQRxrIgEgASgCAEEBajYCACACQRhrIgEgASgCACAJajYCACACQRRrIgEgASgCACAOajYCAAwBCyACQRB0QRB1QRxsIBBqIgJBBGsgDjYCACACQRxrIgEgASgCAEEBajYCACACQRhrIgEgASgCACAJajYCACACQRRrIgEgASgCACAOajYCAAsgBEECaiEEIAZBAmohBiAJQQFqIQkMAAsACwsgDEEAIAxBAEobQQFqIQNBASEBQQEhBiAAIQkDQCABIANHBEACQCABIAkoAgAiAkYEQCAGIgpBAWohBgwBCyACQQJ0IABqQQRrKAIAIQoLIAkgCjYCACAJQQRqIQkgAUEBaiEBDAELCyAHIAZBAWsiCTYCCEEAIAlFDQEaIAdBjIAIaiEIIAdBDGpBACAJQQJ0EDkhBiAHQZCAKGpBACAJQQR0EDkhBUEAIQEDQCABIAlOBEBBACEJIAxBACAMQQBKGyEEA0AgBCAJRgRAQQAhCiAHKAIIIgBBACAAQQBKGyEAQQAhAQNAIAAgAUYNBSAFIAFBBHRqIgIgAisDACAGIAFBAnRqKAIAtyIXozkDACACIAIrAwggF6M5AwggAUEBaiEBDAALAAsgBiAAIAlBAnRqKAIAQQFrIgJBAnQiA2oiASABKAIAIBAgCUEcbGoiDCgCAGo2AgAgBSACQQR0IgFqIgIgAisDACAMKAIEt6A5AwAgAiACKwMIIAwoAgi3oDkDCCAMKAIMIgIgASAIaiIBKAIASARAIAEgAjYCAAsgDCgCECICIAggA0ECdCIDQQRyaiIBKAIASgRAIAEgAjYCAAsgDCgCFCICIAggA0EIcmoiASgCAEgEQCABIAI2AgALIAwoAhgiAiAIIANBDHJqIgEoAgBKBEAgASACNgIACyAJQQFqIQkMAAsABSAIIAFBBHRqIgIgEjYCACACQQA2AgQgAiAUNgIIIAJBADYCDCABQQFqIQEgBygCCCEJDAELAAsACyAKCw8LIAgEQAJ/IAAhBEEAIQMgASIGQQAgAUEAShshACAHKAIAIgEgAiIFQQFrIgsgBmxBAXRqIQkgASECA0AgACADRwRAIAlBADsBACACQQA7AQAgA0EBaiEDIAJBAmohAiAJQQJqIQkMAQsLIAVBACAFQQBKGyEMIAEgBkEBayIKQQF0aiEJQQAhAyABIQIDQCADIAxHBEAgCUEAOwEAIAJBADsBACADQQFqIQMgCSAGQQF0IgBqIQkgACACaiECDAELCyALQQEgC0EBShshEiAHQZCA0ABqIQ0gB0GQgMgAaiEAIAggBkEBaiICaiEIIAIgBGohDiAKQQEgCkEBShsiFEEBayEQIAEgAkEBdGohAkEAIAZrQQF0IRVBACEMQQEhDwJAA0AgDyASRwRAIA4gEGohFiAIIBBqIRFBASEJA0ACQAJAAkAgCSAURwRAIA4tAAAgCC0AAEsEQCACIBVqIgQvAQAiA0EQdEEQdSIBQQBKBEAgAiABOwEAIANBHGwgDWoiA0EEayAPNgIAIANBHGsiASABKAIAQQFqNgIAIANBGGsiASABKAIAIAlqNgIAIANBFGsiASABKAIAIA9qNgIADAULIARBAmsvAQAiA0EQdEEQdSEBIAQuAQIiBEEASgRAIAFBAEoEQCAEQQJ0IABqQQRrKAIAIgEgA0ECdCAAakEEaygCACIESgRAIAIgBDsBAEEAIQogDEEAIAxBAEobIQsgACEDA0AgCiALRgRAIAQhAQwICyABIAMoAgBGBEAgAyAENgIACyAKQQFqIQogA0EEaiEDDAALAAsgAiABOwEAIAEgBE4NBUEAIQogDEEAIAxBAEobIQsgACEDA0AgCiALRg0GIAQgAygCAEYEQCADIAE2AgALIApBAWohCiADQQRqIQMMAAsACyACQQJrLgEAIgNBAEoEQCAEQQJ0IABqQQRrKAIAIgEgA0H//wNxQQJ0IABqQQRrKAIAIgRKBEAgAiAEOwEAQQAhCiAMQQAgDEEAShshCyAAIQMDQCAKIAtGBEAgBCEBDAcLIAEgAygCAEYEQCADIAQ2AgALIApBAWohCiADQQRqIQMMAAsACyACIAE7AQAgASAETg0EQQAhCiAMQQAgDEEAShshCyAAIQMDQCAKIAtGDQUgBCADKAIARgRAIAMgATYCAAsgCkEBaiEKIANBBGohAwwACwALIAIgBDsBACAEQRxsIA1qIgNBHGsiASABKAIAQQFqNgIAIANBGGsiASABKAIAIAlqNgIAIANBFGsiASABKAIAIA9qNgIAIAkgA0EQayIBKAIASARAIAEgCTYCAAsgA0EEayAPNgIADAULIAFBAEoEQCACIAE7AQAgA0EcbCANaiIDQRxrIgEgASgCAEEBajYCACADQRhrIgEgASgCACAJajYCACADQRRrIgEgASgCACAPajYCACAJIANBDGsiASgCAEoEQCABIAk2AgALIANBBGsgDzYCAAwFCyACQQJrLwEAIgNBEHRBEHUiAUEASgRAIAIgATsBACADQRxsIA1qIgNBHGsiASABKAIAQQFqNgIAIANBGGsiASABKAIAIAlqNgIAIANBFGsiASABKAIAIA9qNgIAIANBDGsiASgCACAJTg0FIAEgCTYCAAwFCyAMQYCAAk4EQEEAQQNB5AtBABA2QX8hCgwJCyACIAxBAWoiATsBACAAIAxBAnRqIAFBEHRBEHU2AgAgDSAMQRxsaiIDIA82AhggAyAPNgIUIAMgCTYCECADIAk2AgwgAyAPNgIIIAMgCTYCBCADQQE2AgAgASEMDAQLIAJBADsBAAwDCyACQQRqIQIgEUECaiEIIBZBAmohDiAPQQFqIQ8MBQsgAUEQdEEQdUEcbCANaiIDQRxrIgEgASgCAEEBajYCACADQRhrIgEgASgCACAJajYCACADQRRrIgEgASgCACAPajYCAAwBCyABQRB0QRB1QRxsIA1qIgNBBGsgDzYCACADQRxrIgEgASgCAEEBajYCACADQRhrIgEgASgCACAJajYCACADQRRrIgEgASgCACAPajYCAAsgAkECaiECIAhBAWohCCAOQQFqIQ4gCUEBaiEJDAALAAsLIAxBACAMQQBKG0EBaiECQQEhA0EBIQggACEJA0AgAiADRwRAAkAgAyAJKAIAIgFGBEAgCCIKQQFqIQgMAQsgAUECdCAAakEEaygCACEKCyAJIAo2AgAgCUEEaiEJIANBAWohAwwBCwsgByAIQQFrIgk2AghBACAJRQ0BGiAHQYyACGohCiAHQQxqQQAgCUECdBA5IQsgB0GQgChqQQAgCUEEdBA5IQhBACEDA0AgAyAJTgRAQQAhCSAMQQAgDEEAShshBANAIAQgCUYEQEEAIQogBygCCCIAQQAgAEEAShshAEEAIQMDQCAAIANGDQUgCCADQQR0aiIBIAErAwAgCyADQQJ0aigCALciF6M5AwAgASABKwMIIBejOQMIIANBAWohAwwACwALIAsgACAJQQJ0aigCAEEBayICQQJ0IgNqIgEgASgCACANIAlBHGxqIgUoAgBqNgIAIAggAkEEdCIBaiICIAIrAwAgBSgCBLegOQMAIAIgAisDCCAFKAIIt6A5AwggBSgCDCICIAEgCmoiASgCAEgEQCABIAI2AgALIAUoAhAiAiAKIANBAnQiA0EEcmoiASgCAEoEQCABIAI2AgALIAUoAhQiAiAKIANBCHJqIgEoAgBIBEAgASACNgIACyAFKAIYIgIgCiADQQxyaiIBKAIASgRAIAEgAjYCAAsgCUEBaiEJDAALAAUgCiADQQR0aiIBIAY2AgAgAUEANgIEIAEgBTYCCCABQQA2AgwgA0EBaiEDIAcoAgghCQwBCwALAAsgCgsPCyAGRQRAAn8gACEEQQAhAyABIghBACABQQBKGyEAIAcoAgAiASACIgZBAWsiCSAIbEEBdGohCyABIQIDQCAAIANHBEAgC0EAOwEAIAJBADsBACADQQFqIQMgAkECaiECIAtBAmohCwwBCwsgBkEAIAZBAEobIQwgASAIQQFrIgpBAXRqIQtBACEDIAEhAgNAIAMgDEcEQCALQQA7AQAgAkEAOwEAIANBAWohAyALIAhBAXQiAGohCyAAIAJqIQIMAQsLIAlBASAJQQFKGyEQIAdBkIDQAGohDiAHQZCAyABqIQAgBCAIQQFqIgJqIQwgCkEBIApBAUobIhJBAWshFCABIAJBAXRqIQJBACAIa0EBdCEVQQAhCkEBIQ0CQANAIA0gEEcEQCAMIBRqIRZBASELA0ACQAJAAkAgCyASRwRAIAUgDC0AAEgEQCACIBVqIgQvAQAiA0EQdEEQdSIBQQBKBEAgAiABOwEAIANBHGwgDmoiA0EEayANNgIAIANBHGsiASABKAIAQQFqNgIAIANBGGsiASABKAIAIAtqNgIAIANBFGsiASABKAIAIA1qNgIADAULIARBAmsvAQAiA0EQdEEQdSEBIAQuAQIiBEEASgRAIAFBAEoEQCAEQQJ0IABqQQRrKAIAIgEgA0ECdCAAakEEaygCACIESgRAIAIgBDsBAEEAIQkgCkEAIApBAEobIREgACEDA0AgCSARRgRAIAQhAQwICyABIAMoAgBGBEAgAyAENgIACyAJQQFqIQkgA0EEaiEDDAALAAsgAiABOwEAIAEgBE4NBUEAIQkgCkEAIApBAEobIREgACEDA0AgCSARRg0GIAQgAygCAEYEQCADIAE2AgALIAlBAWohCSADQQRqIQMMAAsACyACQQJrLgEAIgNBAEoEQCAEQQJ0IABqQQRrKAIAIgEgA0H//wNxQQJ0IABqQQRrKAIAIgRKBEAgAiAEOwEAQQAhCSAKQQAgCkEAShshESAAIQMDQCAJIBFGBEAgBCEBDAcLIAEgAygCAEYEQCADIAQ2AgALIAlBAWohCSADQQRqIQMMAAsACyACIAE7AQAgASAETg0EQQAhCSAKQQAgCkEAShshESAAIQMDQCAJIBFGDQUgBCADKAIARgRAIAMgATYCAAsgCUEBaiEJIANBBGohAwwACwALIAIgBDsBACAEQRxsIA5qIgNBHGsiASABKAIAQQFqNgIAIANBGGsiASABKAIAIAtqNgIAIANBFGsiASABKAIAIA1qNgIAIAsgA0EQayIBKAIASARAIAEgCzYCAAsgA0EEayANNgIADAULIAFBAEoEQCACIAE7AQAgA0EcbCAOaiIDQRxrIgEgASgCAEEBajYCACADQRhrIgEgASgCACALajYCACADQRRrIgEgASgCACANajYCACALIANBDGsiASgCAEoEQCABIAs2AgALIANBBGsgDTYCAAwFCyACQQJrLwEAIgNBEHRBEHUiAUEASgRAIAIgATsBACADQRxsIA5qIgNBHGsiASABKAIAQQFqNgIAIANBGGsiASABKAIAIAtqNgIAIANBFGsiASABKAIAIA1qNgIAIANBDGsiASgCACALTg0FIAEgCzYCAAwFCyAKQYCAAk4EQEEAQQNB5AtBABA2QX8hCQwJCyACIApBAWoiATsBACAAIApBAnRqIAFBEHRBEHU2AgAgDiAKQRxsaiIDIA02AhggAyANNgIUIAMgCzYCECADIAs2AgwgAyANNgIIIAMgCzYCBCADQQE2AgAgASEKDAQLIAJBADsBAAwDCyACQQRqIQIgFkECaiEMIA1BAWohDQwFCyABQRB0QRB1QRxsIA5qIgNBHGsiASABKAIAQQFqNgIAIANBGGsiASABKAIAIAtqNgIAIANBFGsiASABKAIAIA1qNgIADAELIAFBEHRBEHVBHGwgDmoiA0EEayANNgIAIANBHGsiASABKAIAQQFqNgIAIANBGGsiASABKAIAIAtqNgIAIANBFGsiASABKAIAIA1qNgIACyACQQJqIQIgDEEBaiEMIAtBAWohCwwACwALCyAKQQAgCkEAShtBAWohAkEBIQNBASEMIAAhCwNAIAIgA0cEQAJAIAMgCygCACIBRgRAIAwiCUEBaiEMDAELIAFBAnQgAGpBBGsoAgAhCQsgCyAJNgIAIAtBBGohCyADQQFqIQMMAQsLIAcgDEEBayILNgIIQQAgC0UN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AyACQQJqIQIgCUECaiEJDAELCyAFQQAgBUEAShshByABIAZBAWsiCkEBdGohCUEAIQMgASECA0AgAyAHRwRAIAlBADsBACACQQA7AQAgA0EBaiEDIAkgBkEBdCIAaiEJIAAgAmohAgwBCwsgC0EBIAtBAUobIRIgDEGQgNAAaiEPIAxBkIDIAGohACAIIAZBAWoiAmohByACIARqIQ4gDCgCBCACaiENIApBASAKQQFKGyIUQQFrIRAgASACQQF0aiECQQAgBmtBAXQhFUEAIQhBASETAkADQCASIBNHBEAgDiAQaiEWIAcgEGohEUEBIQkDQAJAAkACQCAJIBRHBEAgDi0AACAHLQAATQRAIA1B/wE6AAAgAiAVaiIELwEAIgNBEHRBEHUiAUEASgRAIAIgATsBACADQRxsIA9qIgNBBGsgEzYCACADQRxrIgEgASgCAEEBajYCACADQRhrIgEgASgCACAJajYCACADQRRrIgEgASgCACATajYCAAwFCyAEQQJrLwEAIgNBEHRBEHUhASAELgECIgRBAEoEQCABQQBKBEAgBEECdCAAakEEaygCACIBIANBAnQgAGpBBGsoAgAiBEoEQCACIAQ7AQBBACEKIAhBACAIQQBKGyELIAAhAwNAIAogC0YEQCAEIQEMCAsgASADKAIARgRAIAMgBDYCAAsgCkEBaiEKIANBBGohAwwACwALIAIgATsBACABIARODQVBACEKIAhBACAIQQBKGyELIAAhAwNAIAogC0YNBiAEIAMoAgBGBEAgAyABNgIACyAKQQFqIQogA0EEaiEDDAALAAsgAkECay4BACIDQQBKBEAgBEECdCAAakEEaygCACIBIANB//8DcUECdCAAakEEaygCACIESgRAIAIgBDsBAEEAIQogCEEAIAhBAEobIQsgACEDA0AgCiALRgRAIAQhAQwHCyABIAMoAgBGBEAgAyAENgIACyAKQQFqIQogA0EEaiEDDAALAAsgAiABOwEAIAEgBE4NBEEAIQogCEEAIAhBAEobIQsgACEDA0AgCiALRg0FIAQgAygCAEYEQCADIAE2AgALIApBAWohCiADQQRqIQMMAAsACyACIAQ7AQAgBEEcbCAPaiIDQRxrIgEgASgCAEEBajYCACADQRhrIgEgASgCACAJajYCACADQRRrIgEgASgCACATajYCACAJIANBEGsiASgCAEgEQCABIAk2AgALIANBBGsgEzYCAAwFCyABQQBKBEAgAiABOwEAIANBHGwgD2oiA0EcayIBIAEoAgBBAWo2AgAgA0EYayIBIAEoAgAgCWo2AgAgA0EUayIBIAEoAgAgE2o2AgAgCSADQQxrIgEoAgBKBEAgASAJNgIACyADQQRrIBM2AgAMBQsgAkECay8BACIDQRB0QRB1IgFBAEoEQCACIAE7AQAgA0EcbCAPaiIDQRxrIgEgASgCAEEBajYCACADQRhrIgEgASgCACAJajYCACADQRRrIgEgASgCACATajYCACADQQxrIgEoAgAgCU4NBSABIAk2AgAMBQsgCEGAgAJOBEBBAEEDQeQLQQAQNkF/IQoMCQsgAiAIQQFqIgE7AQAgACAIQQJ0aiABQRB0QRB1NgIAIA8gCEEcbGoiAyATNgIYIAMgEzYCFCADIAk2AhAgAyAJNgIMIAMgEzYCCCADIAk2AgQgA0EBNgIAIAEhCAwECyACQQA7AQAgDUEAOgAADAMLIA1BAmohDSACQQRqIQIgEUECaiEHIBZBAmohDiATQQFqIRMMBQsgAUEQdEEQdUEcbCAPaiIDQRxrIgEgASgCAEEBajYCACADQRhrIgEgASgCACAJajYCACADQRRrIgEgASgCACATajYCAAwBCyABQRB0QRB1QRxsIA9qIgNBBGsgEzYCACADQRxrIgEgASgCAEEBajYCACADQRhrIgEgASgCACAJajYCACADQRRrIgEgASgCACATajYCAAsgDUEBaiENIAJBAmohAiAHQQFqIQcgDkEBaiEOIAlBAWohCQwACwALCyAIQQAgCEEAShtBAWohAkEBIQNBASEHIAAhCQNAIAIgA0cEQAJAIAMgCSgCACIBRgRAIAciCkEBaiEHDAELIAFBAnQgAGpBBGsoAgAhCgsgCSAKNgIAIAlBBGohCSADQQFqIQMMAQsLIAwgB0EBayIJNgIIQQAgCUUNARogDEGMgAhqIQogDEEMakEAIAlBAnQQOSELIAxBkIAoakEAIAlBBHQQOSEHQQAhAwNAIAMgCU4EQEEAIQkgCEEAIAhBAEobIQQDQCAEIAlGBEBBACEKIAwoAggiAEEAIABBAEobIQBBACEDA0AgACADRg0FIAcgA0EEdGoiASABKwMAIAsgA0ECdGooAgC3IhejOQMAIAEgASsDCCAXozkDCCADQQFqIQMMAAsACyALIAAgCUECdGooAgBBAWsiAkECdCIDaiIBIAEoAgAgDyAJQRxsaiIFKAIAajYCACAHIAJBBHQiAWoiAiACKwMAIAUoAgS3oDkDACACIAIrAwggBSgCCLegOQMIIAUoAgwiAiABIApqIgEoAgBIBEAgASACNgIACyAFKAIQIgIgCiADQQJ0IgNBBHJqIgEoAgBKBEAgASACNgIACyAFKAIUIgIgCiADQQhyaiIBKAIASARAIAEgAjYCAAsgBSgCGCICIAogA0EMcmoiASgCAEoEQCABIAI2AgALIAlBAWohCQwACwAFIAogA0EEdGoiASAGNgIAIAFBADYCBCABIAU2AgggAUEANgIMIANBAWohAyAMKAIIIQkMAQsACwALIAoLDwsgBkUEQAJ/IAAhBEEAIQMgASIIQQAgAUEAShshACAHIgwoAgAiASACIgZBAWsiCSAIbEEBdGohCyABIQIDQCAAIANHBEAgC0EAOwEAIAJBADsBACADQQFqIQMgAkECaiECIAtBAmohCwwBCwsgBkEAIAZBAEobIQcgASAIQQFrIgpBAXRqIQtBACEDIAEhAgNAIAMgB0cEQCALQQA7AQAgAkEAOwEAIANBAWohAyALIAhBAXQiAGohCyAAIAJqIQIMAQsLIAlBASAJQQFKGyEQIAxBkIDQAGohDSAMQZCAyABqIQAgBCAIQQFqIgJqIQcgDCgCBCACaiEOIApBASAKQQFKGyISQQFrIRQgASACQQF0aiECQQAgCGtBAXQhFUEAIQpBASEPAkADQCAPIBBHBEAgByAUaiEWQQEhCwNAAkACQAJAIAsgEkcEQCAFIActAABOBEAgDkH/AToAACACIBVqIgQvAQAiA0EQdEEQdSIBQQBKBEAgAiABOwEAIANBHGwgDWoiA0EEayAPNgIAIANBHGsiASABKAIAQQFqNgIAIANBGGsiASABKAIAIAtqNgIAIANBFGsiASABKAIAIA9qNgIADAULIARBAmsvAQAiA0EQdEEQdSEBIAQuAQIiBEEASgRAIAFBAEoEQCAEQQJ0IABqQQRrKAIAIgEgA0ECdCAAakEEaygCACIESgRAIAIgBDsBAEEAIQkgCkEAIApBAEobIREgACEDA0AgCSARRgRAIAQhAQwICyABIAMoAgBGBEAgAyAENgIACyAJQQFqIQkgA0EEaiEDDAALAAsgAiABOwEAIAEgBE4NBUEAIQkgCkEAIApBAEobIREgACEDA0AgCSARRg0GIAQgAygCAEYEQCADIAE2AgALIAlBAWohCSADQQRqIQMMAAsACyACQQJrLgEAIgNBAEoEQCAEQQJ0IABqQQRrKAIAIgEgA0H//wNxQQJ0IABqQQRrKAIAIgRKBEAgAiAEOwEAQQAhCSAKQQAgCkEAShshESAAIQMDQCAJIBFGBEAgBCEBDAcLIAEgAygCAEYEQCADIAQ2AgALIAlBAWohCSADQQRqIQMMAAsACyACIAE7AQAgASAETg0EQQAhCSAKQQAgCkEAShshESAAIQMDQCAJIBFGDQUgBCADKAIARgRAIAMgATYCAAsgCUEBaiEJIANBBGohAwwACwALIAIgBDsBACAEQRxsIA1qIgNBHGsiASABKAIAQQFqNgIAIANBGGsiASABKAIAIAtqNgIAIANBFGsiASABKAIAIA9qNgIAIAsgA0EQayIBKAIASARAIAEgCzYCAAsgA0EEayAPNgIADAULIAFBAEoEQCACIAE7AQAgA0EcbCANaiIDQRxrIgEgASgCAEEBajYCACADQRhrIgEgASgCACALajYCACADQRRrIgEgASgCACAPajYCACALIANBDGsiASgCAEoEQCABIAs2AgALIANBBGsgDzYCAAwFCyACQQJrLwEAIgNBEHRBEHUiAUEASgRAIAIgATsBACADQRxsIA1qIgNBHGsiASABKAIAQQFqNgIAIANBGGsiASABKAIAIAtqNgIAIANBFGsiASABKAIAIA9qNgIAIANBDGsiASgCACALTg0FIAEgCzYCAAwFCyAKQYCAAk4EQEEAQQNB5AtBABA2QX8hCQwJCyACIApBAWoiATsBACAAIApBAnRqIAFBEHRBEHU2AgAgDSAKQRxsaiIDIA82AhggAyAPNgIUIAMgCzYCECADIAs2AgwgAyAPNgIIIAMgCzYCBCADQQE2AgAgASEKDAQLIAJBADsBACAOQQA6AAAMAwsgDkECaiEOIAJBBGohAiAWQQJqIQcgD0EBaiEPDAULIAFBEHRBEHVBHGwgDWoiA0EcayIBIAEoAgBBAWo2AgAgA0EYayIBIAEoAgAgC2o2AgAgA0EUayIBIAEoAgAgD2o2AgAMAQsgAUEQdEEQdUEcbCANaiIDQQRrIA82AgAgA0EcayIBIAEoAgBBAWo2AgAgA0EYayIBIAEoAgAgC2o2AgAgA0EUayIBIAEoAgAgD2o2AgALIA5BAWohDiACQQJqIQIgB0EBaiEHIAtBAWohCwwACwALCyAKQQAgCkEAShtBAWohAkEBIQNBASEHIAAhCwNAIAIgA0cEQAJAIAMgCygCACIBRgRAIAciCUEBaiEHDAELIAFBAnQgAGpBBGsoAgAhCQsgCyAJNgIAIAtBBGohCyADQQFqIQMMAQsLIAwgB0EBayILNgIIQQAgC0UNARogDEGMgAhqIQkgDEEMakEAIAtBAnQQOSEHIAxBkIAoakEAIAtBBHQQOSEFQQAhAwNAIAMgC04EQEEAIQsgCkEAIApBAEobIQQDQCAEIAtGBEBBACEJIAwoAggiAEEAIABBAEobIQBBACEDA0AgACADRg0FIAUgA0EEdGoiASABKwMAIAcgA0ECdGooAgC3IhejOQMAIAEgASsDCCAXozkDCCADQQFqIQMMAAsACyAHIAAgC0ECdGooAgBBAWsiAkECdCIDaiIBIAEoAgAgDSALQRxsaiIGKAIAajYCACAFIAJBBHQiAWoiAiACKwMAIAYoAgS3oDkDACACIAIrAwggBigCCLegOQMIIAYoAgwiAiABIAlqIgEoAgBIBEAgASACNgIACyAGKAIQIgIgCSADQQJ0IgNBBHJqIgEoAgBKBEAgASACNgIACyAGKAIUIgIgCSADQQhyaiIBKAIASARAIAEgAjYCAAsgBigCGCICIAkgA0EMcmoiASgCAEoEQCABIAI2AgALIAtBAWohCwwACwAFIAkgA0EEdGoiASAINgIAIAFBADYCBCABIAY2AgggAUEANgIMIANBAWohAyAMKAIIIQsMAQsACwALIAkLDwsCfyAAIQYgASIIQQJtIhBBACAQQQBKGyEAIAcoAgAiAyACQQJtIhRBAWsiCiAQbEEBdGohCUEAIQEgAyEEA0AgACABRwRAIAlBADsBACAEQQA7AQAgAUEBaiEBIARBAmohBCAJQQJqIQkMAQsLIBRBACAUQQBKGyECIAMgEEEBayIMQQF0aiEJQQAhASADIQQDQCABIAJHBEAgCUEAOwEAIARBADsBACABQQFqIQEgCSAQQQF0IgBqIQkgACAEaiEEDAELCyAKQQEgCkEBShshFSAMQQEgDEEBShshFiAHQZCA0ABqIQ4gB0GQgMgAaiEAIBBBAWoiASAHKAIEaiEMIAhBAXQgBmpBAmohEiADIAFBAXRqIQRBACAQa0EBdCERQQAhBkEBIQ0CQANAIA0gFUcEQEEBIQkDQAJAAkACQCAJIBZHBEAgBSASLQAATgRAIAxB/wE6AAAgBCARaiIDLwEAIgJBEHRBEHUiAUEASgRAIAQgATsBACACQRxsIA5qIgJBBGsgDTYCACACQRxrIgEgASgCAEEBajYCACACQRhrIgEgASgCACAJajYCACACQRRrIgEgASgCACANajYCAAwFCyADQQJrLwEAIgFBEHRBEHUhAiADLgECIgNBAEoEQCACQQBKBEAgA0ECdCAAakEEaygCACICIAFBAnQgAGpBBGsoAgAiA0oEQCAEIAM7AQBBACEKIAZBACAGQQBKGyELIAAhAQNAIAogC0YEQCADIQIMCAsgAiABKAIARgRAIAEgAzYCAAsgCkEBaiEKIAFBBGohAQwACwALIAQgAjsBACACIANODQVBACEKIAZBACAGQQBKGyELIAAhAQNAIAogC0YNBiADIAEoAgBGBEAgASACNgIACyAKQQFqIQogAUEEaiEBDAALAAsgBEECay4BACIBQQBKBEAgA0ECdCAAakEEaygCACICIAFB//8DcUECdCAAakEEaygCACIDSgRAIAQgAzsBAEEAIQogBkEAIAZBAEobIQsgACEBA0AgCiALRgRAIAMhAgwHCyACIAEoAgBGBEAgASADNgIACyAKQQFqIQogAUEEaiEBDAALAAsgBCACOwEAIAIgA04NBEEAIQogBkEAIAZBAEobIQsgACEBA0AgCiALRg0FIAMgASgCAEYEQCABIAI2AgALIApBAWohCiABQQRqIQEMAAsACyAEIAM7AQAgA0EcbCAOaiICQRxrIgEgASgCAEEBajYCACACQRhrIgEgASgCACAJajYCACACQRRrIgEgASgCACANajYCACAJIAJBEGsiASgCAEgEQCABIAk2AgALIAJBBGsgDTYCAAwFCyACQQBKBEAgBCACOwEAIAFBHGwgDmoiAkEcayIBIAEoAgBBAWo2AgAgAkEYayIBIAEoAgAgCWo2AgAgAkEUayIBIAEoAgAgDWo2AgAgCSACQQxrIgEoAgBKBEAg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IAcgFGohFkEBIQsDQAJAAkACQCALIBJHBEAgBSAHLQAASARAIA5B/wE6AAAgAiAVaiIELwEAIgNBEHRBEHUiAUEASgRAIAIgATsBACADQRxsIA1qIgNBBGsgDzYCACADQRxrIgEgASgCAEEBajYCACADQRhrIgEgASgCACALajYCACADQRRrIgEgASgCACAPajYCAAwFCyAEQQJrLwEAIgNBEHRBEHUhASAELgECIgRBAEoEQCABQQBKBEAgBEECdCAAakEEaygCACIBIANBAnQgAGpBBGsoAgAiBEoEQCACIAQ7AQBBACEJIApBACAKQQBKGyERIAAhAwNAIAkgEUYEQCAEIQEMCAsgASADKAIARgRAIAMgBDYCAAsgCUEBaiEJIANBBGohAwwACwALIAIgATsBACABIARODQVBACEJIApBACAKQQBKGyERIAAhAwNAIAkgEUYNBiAEIAMoAgBGBEAgAyABNgIACyAJQQFqIQkgA0EEaiEDDAALAAsgAkECay4BACIDQQBKBEAgBEECdCAAakEEaygCACIBIANB//8DcUECdCAAakEEaygCACIESgRAIAIgBDsBAEEAIQkgCkEAIApBAEobIREgACEDA0AgCSARRgRAIAQhAQwHCyABIAMoAgBGBEAgAyAENgIACyAJQQFqIQkgA0EEaiEDDAALAAsgAiABOwEAIAEgBE4NBEEAIQkgCkEAIApBAEobIREgACEDA0AgCSARRg0FIAQgAygCAEYEQCADIAE2AgALIAlBAWohCSADQQRqIQMMAAsACyACIAQ7AQAgBEEcbCANaiIDQRxrIgEgASgCAEEBajYCACADQRhrIgEgASgCACALajYCACADQRRrIgEgASgCACAPajYCACALIANBEGsiASgCAEgEQCABIAs2AgALIANBBGsgDzYCAAwFCyABQQBKBEAgAiABOwEAIANBHGwgDWoiA0EcayIBIAEoAgBBAWo2AgAgA0EYayIBIAEoAgAgC2o2AgAgA0EUayIBIAEoAgAgD2o2AgAgCyADQQxrIgEoAgBKBEAgASALNgIACyADQQRrIA82AgAMBQsgAkECay8BACIDQRB0QRB1IgFBAEoEQCACIAE7AQAgA0EcbCANaiIDQRxrIgEgASgCAEEBajYCACADQRhrIgEgASgCACALajYCACADQRRrIgEgASgC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ACACIANODQRBACEKIAZBACAGQQBKGyELIAAhAQNAIAogC0YNBSADIAEoAgBGBEAgASACNgIACyAKQQFqIQogAUEEaiEBDAALAAsgBCADOwEAIANBHGwgDmoiAkEcayIBIAEoAgBBAWo2AgAgAkEYayIBIAEoAgAgCWo2AgAgAkEUayIBIAEoAgAgDWo2AgAgCSACQRBrIgEoAgBIBEAgASAJNgIACyACQQRrIA02AgAMBQsgAkEASgRAIAQgAjsBACABQRxsIA5qIgJBHGsiASABKAIAQQFqNgIAIAJBGGsiASABKAIAIAlqNgIAIAJBFGsiASABKAIAIA1qNgIAIAkgAkEMayIBKAIASgRAIAEgCTYCAAsgAkEEayANNgIADAULIARBAmsvAQAiAkEQdEEQdSIBQQBKBEAgBCABOwEAIAJBHGwgDmoiAkEcayIBIAEoAgBBAWo2AgAgAkEYayIBIAEoAgAgCWo2AgAgAkEUayIBIAEoAgAgDWo2AgAgAkEMayIBKAIAIAlODQUgASAJNgIADAULIAZBgIACTgRAQQBBA0HkC0EAEDZBfyEKDAkLIAQgBkEBaiIBOwEAIAAgBkECdGogAUEQdEEQdTYCACAOIAZBHGxqIgIgDTYCGCACIA02AhQgAiAJNgIQIAIgCTYCDCACIA02AgggAiAJNgIEIAJBATYCACABIQYMBAsgBEEAOwEAIAxBADoAAAwDCyAMQQJqIQwgBEEEaiEEIA1BAWohDSAIIBJqQQRqIRIMBQsgAkEQdEEQdUEcbCAOaiICQRxrIgEgASgCAEEBajYCACACQRhrIgEgASgCACAJajYCACACQRRrIgEgASgCACANajYCAAwBCyACQRB0QRB1QRxsIA5qIgJBBGsgDTYCACACQRxrIgEgASgCAEEBajYCACACQRhrIgEgASgCACAJajYCACACQRRrIgEgASgCACANajYCAAsgDEEBaiEMIARBAmohBCASQQJqIRIgCUEBaiEJDAALAAsLIAZBACAGQQBKG0EBaiEDQQEhAUEBIQwgACEJA0AgASADRwRAAkAgASAJKAIAIgJGBEAgDCIKQQFqIQwMAQsgAkECdCAAakEEaygCACEKCyAJIAo2AgAgCUEEaiEJIAFBAWohAQwBCwsgByAMQQFrIgk2AghBACAJRQ0BGiAHQYyACGohDCAH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BEGYpwQoAgBBAWoiBTYCACAAIAU2AgAgAwRAA0AgAiAEQQN0aiIGKAIARQRAIAYgBTYCACACIARBA3RqIgAgATYCBCAAQQA2AgggAyQBIAIPCyAEQQFqIgQgA0cNAAsLIAAgASACIANBBHRBCHIQ0AIgA0EBdCIAEPYEIQEgACQBIAELHwBBkKcEKAIARQRAQZCnBCAANgIAQZSnBCABNgIACwu+DwIFfw9+IwBB0AJrIgUkACAEQv///////z+DIQsgAkL///////8/gyEKIAIgBIVCgICAgICAgICAf4MhDSAEQjCIp0H//wFxIQgCQAJAIAJCMIinQf//AXEiCUH//wFrQYKAfk8EQCAIQf//AWtBgYB+Sw0BCyABUCACQv///////////wCDIgxCgICAgICAwP//AFQgDEKAgICAgIDA//8AURtFBEAgAkKAgICAgIAghCENDAILIANQIARC////////////AIMiAkKAgICAgIDA//8AVCACQoCAgICAgMD//wBRG0UEQCAEQoCAgICAgCCEIQ0gAyEBDAILIAEgDEKAgICAgIDA//8AhYRQBEAgAyACQoCAgICAgMD//wCFhFAEQEIAIQFCgICAgICA4P//ACENDAMLIA1CgICAgICAwP//AIQhDUIAIQEMAgsgAyACQoCAgICAgMD//wCFhFAEQEIAIQEMAgsgASAMhFAEQEKAgICAgIDg//8AIA0gAiADhFAbIQ1CACEBDAILIAIgA4RQBEAgDUKAgICAgIDA//8AhCENQgAhAQwCCyAMQv///////z9YBEAgBUHAAmogASAKIAEgCiAKUCIGG3kgBkEGdK18pyIGQQ9rEIgBQRAgBmshBiAFKQPIAiEKIAUpA8ACIQELIAJC////////P1YNACAFQbACaiADIAsgAyALIAtQIgcbeSAHQQZ0rXynIgdBD2sQiAEgBiAHakEQayEGIAUpA7gCIQsgBSkDsAIhAwsgBUGgAmogC0KAgICAgIDAAIQiEkIPhiADQjGIhCICQgBCgICAgLDmvIL1ACACfSIEQgAQggEgBUGQAmpCACAFKQOoAn1CACAEQgAQggEgBUGAAmogBSkDmAJCAYYgBSkDkAJCP4iEIgRCACACQgAQggEgBUHwAWogBEIAQgAgBSkDiAJ9QgAQggEgBUHgAWogBSkD+AFCAYYgBSkD8AFCP4iEIgRCACACQgAQggEgBUHQAWogBEIAQgAgBSkD6AF9QgAQggEgBUHAAWogBSkD2AFCAYYgBSkD0AFCP4iEIgRCACACQgAQggEgBUGwAWogBEIAQgAgBSkDyAF9QgAQggEgBUGgAWogAkIAIAUpA7gBQgGGIAUpA7ABQj+IhEIBfSICQgAQggEgBUGQAWogA0IPhkIAIAJCABCCASAFQfAAaiACQgBCACAFKQOoASAFKQOgASIMIAUpA5gBfCIEIAxUrXwgBEIBVq18fUIAEIIBIAVBgAFqQgEgBH1CACACQgAQggEgBiAJIAhraiEGAn8gBSkDcCITQgGGIg4gBSkDiAEiD0IBhiAFKQOAAUI/iIR8IhBC5+wAfSIUQiCIIgIgCkKAgICAgIDAAIQiFUIBhiIWQiCIIgR+IhEgAUIBhiIMQiCIIgsgECAUVq0gDiAQVq0gBSkDeEIBhiATQj+IhCAPQj+IfHx8QgF9IhNCIIgiEH58Ig4gEVStIA4gDiATQv////8PgyITIAFCP4giFyAKQgGGhEL/////D4MiCn58Ig5WrXwgBCAQfnwgBCATfiIRIAogEH58Ig8gEVStQiCGIA9CIIiEfCAOIA4gD0IghnwiDlatfCAOIA4gFEL/////D4MiFCAKfiIRIAIgC358Ig8gEVStIA8gDyATIAxC/v///w+DIhF+fCIPVq18fCIOVq18IA4gBCAUfiIYIBAgEX58IgQgAiAKfnwiCiALIBN+fCIQQiCIIAogEFatIAQgGFStIAQgClatfHxCIIaEfCIEIA5UrXwgBCAPIAIgEX4iAiALIBR+fCILQiCIIAIgC1atQiCGhHwiAiAPVK0gAiAQQiCGfCACVK18fCICIARUrXwiBEL/////////AFgEQCAWIBeEIRUgBUHQAGogAiAEIAMgEhCCASABQjGGIAUpA1h9IAUpA1AiAUIAUq19IQpCACABfSELIAZB/v8AagwBCyAFQeAAaiAEQj+GIAJCAYiEIgIgBEIBiCIEIAMgEhCCASABQjCGIAUpA2h9IAUpA2AiDEIAUq19IQpCACAMfSELIAEhDCAGQf//AGoLIgZB//8BTgRAIA1CgICAgICAwP//AIQhDUIAIQEMAQsCfiAGQQBKBEAgCkIBhiALQj+IhCEKIARC////////P4MgBq1CMIaEIQwgC0IBhgwBCyAGQY9/TARAQgAhAQwCCyAFQUBrIAIgBEEBIAZrEP4BIAVBMGogDCAVIAZB8ABqEIgBIAVBIGogAyASIAUpA0AiAiAFKQNIIgwQggEgBSkDOCAFKQMoQgGGIAUpAyAiAUI/iIR9IAUpAzAiBCABQgGGIgFUrX0hCiAEIAF9CyEEIAVBEGogAyASQgNCABCCASAFIAMgEkIFQgAQggEgDCACIAIgAyACQgGDIgEgBHwiA1QgCiABIANWrXwiASASViABIBJRG618IgJWrXwiBCACIAIgBEKAgICAgIDA//8AVCADIAUpAxBWIAEgBSkDGCIEViABIARRG3GtfCICVq18IgQgAiAEQoCAgICAgMD//wBUIAMgBSkDAFYgASAFKQMIIgNWIAEgA1Ebca18IgEgAlStfCANhCENCyAAIAE3AwAgACANNwMIIAVB0AJqJAALxAECAX8CfkF/IQMCQCAAQgBSIAFC////////////AIMiBEKAgICAgIDA//8AViAEQoCAgICAgMD//wBRGw0AQQAgAkL///////////8AgyIFQoCAgICAgMD//wBWIAVCgICAgICAwP//AFEbDQAgACAEIAWEhFAEQEEADwsgASACg0IAWQRAQQAgASACUyABIAJRGw0BIAAgASAChYRCAFIPCyAAQgBSIAEgAlUgASACURsNACAAIAEgAoWEQgBSIQMLIAMLiQwBBn8gACABaiEFAkACQCAAKAIEIgJBAXENACACQQNxRQ0BIAAoAgAiAiABaiEBAkAgACACayIAQbSjBCgCAEcEQCACQf8BTQRAIAAoAggiBCACQQN2IgJBA3RByKMEakYaIAAoAgwiAyAERw0CQaCjBEGgowQoAgBBfiACd3E2AgAMAwsgACgCGCEGAkAgACAAKAIMIgJHBEAgACgCCCIDQbCjBCgCAEkaIAMgAjYCDCACIAM2AggMAQsCQCAAQRRqIgQoAgAiAw0AIABBEGoiBCgCACIDDQBBACECDAELA0AgBCEHIAMiAkEUaiIEKAIAIgMNACACQRBqIQQgAigCECIDDQALIAdBADYCAAsgBkUNAgJAIAAoAhwiBEECdEHQpQRqIgMoAgAgAEYEQCADIAI2AgAgAg0BQaSjBEGkowQoAgBBfiAEd3E2AgAMBAsgBkEQQRQgBigCECAARhtqIAI2AgAgAkUNAwsgAiAGNgIYIAAoAhAiAwRAIAIgAzYCECADIAI2AhgLIAAoAhQiA0UNAiACIAM2AhQgAyACNgIYDAILIAUoAgQiAkEDcUEDRw0BQaijBCABNgIAIAUgAkF+cTYCBCAAIAFBAXI2AgQgBSABNgIADwsgBCADNgIMIAMgBDYCCAsCQCAFKAIEIgJBAnFFBEBBuKMEKAIAIAVGBEBBuKMEIAA2AgBBrKMEQayjBCgCACABaiIBNgIAIAAgAUEBcjYCBCAAQbSjBCgCAEcNA0GoowRBADYCAEG0owRBADYCAA8LQbSjBCgCACAFRgRAQbSjBCAANgIAQaijBEGoowQoAgAgAWoiATYCACAAIAFBAXI2AgQgACABaiABNgIADwsgAkF4cSABaiEBAkAgAkH/AU0EQCAFKAIIIgQgAkEDdiICQQN0QcijBGpGGiAEIAUoAgwiA0YEQEGgowRBoKMEKAIAQX4gAndxNgIADAILIAQgAzYCDCADIAQ2AggMAQsgBSgCGCEGAkAgBSAFKAIMIgJHBEAgBSgCCCIDQbCjBCgCAEkaIAMgAjYCDCACIAM2AggMAQsCQCAFQRRqIgMoAgAiBA0AIAVBEGoiAygCACIEDQBBACECDAELA0AgAyEHIAQiAkEUaiIDKAIAIgQNACACQRBqIQMgAigCECIEDQALIAdBADYCAAsgBkUNAAJAIAUoAhwiBEECdEHQpQRqIgMoAgAgBUYEQCADIAI2AgAgAg0BQaSjBEGkowQoAgBBfiAEd3E2AgAMAgsgBkEQQRQgBigCECAFRhtqIAI2AgAgAkUNAQsgAiAGNgIYIAUoAhAiAwRAIAIgAzYCECADIAI2AhgLIAUoAhQiA0UNACACIAM2AhQgAyACNgIYCyAAIAFBAXI2AgQgACABaiABNgIAIABBtKMEKAIARw0BQaijBCABNgIADwsgBSACQX5xNgIEIAAgAUEBcjYCBCAAIAFqIAE2AgALIAFB/wFNBEAgAUF4cUHIowRqIQICf0GgowQoAgAiA0EBIAFBA3Z0IgFxRQRAQaCjBCABIANyNgIAIAIMAQsgAigCCAshASACIAA2AgggASAANgIMIAAgAjYCDCAAIAE2AggPC0EfIQQgAUH///8HTQRAIAFBCHYiAiACQYD+P2pBEHZBCHEiBHQiAiACQYDgH2pBEHZBBHEiA3QiAiACQYCAD2pBEHZBAnEiAnRBD3YgAyAEciACcmsiAkEBdCABIAJBFWp2QQFxckEcaiEECyAAIAQ2AhwgAEIANwIQIARBAnRB0KUEaiEHAkACQEGkowQoAgAiA0EBIAR0IgJxRQRAQaSjBCACIANyNgIAIAcgADYCACAAIAc2AhgMAQsgAUEAQRkgBEEBdmsgBEEfRht0IQQgBygCACECA0AgAiIDKAIEQXhxIAFGDQIgBEEddiECIARBAXQhBCADIAJBBHFqIgdBEGooAgAiAg0ACyAHIAA2AhAgACADNgIYCyAAIAA2AgwgACAANgIIDwsgAygCCCIBIAA2AgwgAyAANgIIIABBADYCGCAAIAM2AgwgACABNgIICwsSACAARQRAQQAPCyAAIAEQ2AMLdAEDfyAARQRAQQBBA0GGwABBABA2DwsgACgCACIBRQRADwsgASgCABAxQQAhAQN/IAAoAgAiAygCCCECIAMoAgwgAUwEfyACEDEgACgCABAxIABBADYCAEEABSACIAFBDGxqKAIAEDEgAUEBaiEBDAELCxoL5R4CD38FfiMAQZABayIEJAAgBEEAQZABEDkiA0F/NgJMIAMgADYCLCADQYMCNgIgIAMgADYCVCABIQQgAiEOQQAhACMAQbACayIGJAAgAygCTBoCQAJAAkACQCADKAIEDQAgAxCRAxogAygCBA0ADAELIAQtAAAiAUUNAgJAAkACQAJAA0ACQAJAIAFB/wFxEN0BBEADQCAEIgFBAWohBCABLQABEN0BDQALIANCABDEAQNAAn8gAygCBCICIAMoAmhHBEAgAyACQQFqNgIEIAItAAAMAQsgAxBRCxDdAQ0ACyADKAIEIQQgAykDcEIAWQRAIAMgBEEBayIENgIECyAEIAMoAixrrCADKQN4IBR8fCEUDAELAn8CQAJAIAQtAABBJUYEQCAELQABIgFBKkYNASABQSVHDQILIANCABDEAQJAIAQtAABBJUYEQANAAn8gAygCBCIBIAMoAmhHBEAgAyABQQFqNgIEIAEtAAAMAQsgAxBRCyIBEN0BDQALIARBAWohBAwBCyADKAIEIgEgAygCaEcEQCADIAFBAWo2AgQgAS0AACEBDAELIAMQUSEBCyAELQAAIAFHBEAgAykDcEIAWQRAIAMgAygCBEEBazYCBAsg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TARAIAEgCiADIAkQ/wEEQCABIQQMAgsgBUHwAGogASACQgBCABBdIAUpA3ghAiAFKQNwIQQMAQsgBgR+IAEFIAVB4ABqIAEgCkIAQoCAgICAgMC7wAAQXSAFKQNoIgpCMIinQfgAayEGIAUpA2ALIQQgB0UEQCAFQdAAaiADIAlCAEKAgICAgIDAu8AAEF0gBSkDWCIJQjCIp0H4AGshByAFKQNQIQMLIAlC////////P4NCgICAgICAwACEIQkgCkL///////8/g0KAgICAgIDAAIQhCiAGIAdKBEADQAJ+IAogCX0gAyAEVq19IgtCAFkEQCALIAQgA30iBIRQBEAgBUEgaiABIAJCAEIAEF0gBSkDKCECIAUpAyAhBAwFCyALQgGGIARCP4iEDAELIApCAYYgBEI/iIQLIQogBEIBhiEEIAZBAWsiBiAHSg0ACyAHIQYLAkAgCiAJfSADIARWrX0iCUIAUwRAIAohCQwBCyAJIAQgA30iBIRCAFINACAFQTBqIAEgAkIAQgAQXSAFKQM4IQIgBSkDMCEEDAELIAlC////////P1gEQANAIARCP4ghASAGQQFrIQYgBEIBhiEEIAEgCUIBhoQiCUKAgICAgIDAAFQNAAsLIAhBgIACcSEHIAZBAEwEQCAFQUBrIAQgCUL///////8/gyAGQfgAaiAHcq1CMIaEQgBCgICAgICAwMM/EF0gBSkDSCECIAUpA0AhBAwBCyAJQv///////z+DIAYgB3KtQjCGhCECCyAAIAQ3AwAgACACNwMIIAVBgAFqJAALvwIBAX8jAEHQAGsiBCQAAkAgA0GAgAFOBEAgBEEgaiABIAJCAEKAgICAgICA//8AEF0gBCkDKCECIAQpAyAhASADQf//AUkEQCADQf//AGshAwwCCyAEQRBqIAEgAkIAQoCAgICAgID//wAQXSADQf3/AiADQf3/AkgbQf7/AWshAyAEKQMYIQIgBCkDECEBDAELIANBgYB/Sg0AIARBQGsgASACQgBCgICAgICAgDkQXSAEKQNIIQIgBCkDQCEBIANB9IB+SwRAIANBjf8AaiEDDAELIARBMGogASACQgBCgICAgICAgDkQXSADQeiBfSADQeiBfUobQZr+AWohAyAEKQM4IQIgBCkDMCEBCyAEIAEgAkIAIANB//8Aaq1CMIYQXSAAIAQpAwg3AwggACAEKQMANwMAIARB0ABqJAALNQAgACABNwMAIAAgAkL///////8/gyAEQjCIp0GAgAJxIAJCMIinQf//AXFyrUIwhoQ3AwgLEAAgACABIAJBAEEAEIkFGgvEAgACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQCABQQlrDhIACgsMCgsCAwQFDAsMDAoLBwgJCyACIAIoAgAiAUEEajYCACAAIAEoAgA2AgAPCwALIAIgAigCACIBQQRqNgIAIAAgATIBADcDAA8LIAIgAigCACIBQQRqNgIAIAAgATMBADcDAA8LIAIgAigCACIBQQRqNgIAIAAgATAAADcDAA8LIAIgAigCACIBQQRqNgIAIAAgATEAADcDAA8LAAsgAiACKAIAQQdqQXhxIgFBCGo2AgAgACABKwMAOQMADwsgACACIAMRAgALDwsgAiACKAIAIgFBBGo2AgAgACABNAIANwMADwsgAiACKAIAIgFBBGo2AgAgACABNQIANwMADwsgAiACKAIAQQdqQXhxIgFBCGo2AgAgACABKQMANwMAC20BBH8gACgCACwAABCuAUUEQEEADwsDQCAAKAIAIQNBfyEBIAJBzJmz5gBNBEBBfyADLAAAQTBrIgQgAkEKbCIBaiAEIAFB/////wdzShshAQsgACADQQFqNgIAIAEhAiADLAABEK4BDQALIAILDAAgACAAKAIAEPEEC/8SAhJ/AX4jAEHQAGsiCCQAIAggATYCTCAIQTdqIRcgCEE4aiESAkACQAJAAkADQCABIQwgByAOQf////8Hc0oNASAHIA5qIQ4CQAJAAkAgDCIHLQAAIgkEQANAAkACQCAJQf8BcSIBRQRAIAchAQwBCyABQSVHDQEgByEJA0AgCS0AAUElRwRAIAkhAQwCCyAHQQFqIQcgCS0AAiEKIAlBAmoiASEJIApBJUYNAAsLIAcgDGsiByAOQf////8HcyIYSg0HIAAEQCAAIAwgBxCDAQsgBw0GIAggATYCTCABQQFqIQdBfyEPAkAgASwAARCuAUUNACABLQACQSRHDQAgAUEDaiEHIAEsAAFBMGshD0EBIRMLIAggBzYCTEEAIQ0CQCAHLAAAIglBIGsiAUEfSwRAIAchCgwBCyAHIQpBASABdCIBQYnRBHFFDQADQCAIIAdBAWoiCjYCTCABIA1yIQ0g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ABpBAiABQZYBSw0AGkEAQQFBlgEgAWt0IgFBAWsgAHENABpBAUECIAAgAXEbCwsTACAAQQF0QYCAgAhqQYGAgAhJCxUBAX8jAEEQayIBIAA4AgwgASoCDAsQACABjCABIAAbEJYFIAGUCwwAIAAgAJMiACAAlQs5AQF+An4gACgCTEEASARAIAAQmwUMAQsgABCbBQsiAUKAgICACFkEQEGImQRBPTYCAEF/DwsgAacLDAAgACAAKAIAEOYEC3ACAn8BfiAAKAIoIQJBASEBAkAgAEIAIAAtAABBgAFxBH9BAUECIAAoAhQgACgCHEYbBUEBCyACERMAIgNCAFMNACADIAAoAggiAQR/IABBBGoFIAAoAhwiAUUNASAAQRRqCygCACABa6x8IQMLIAMLWQEBfyAAIAAoAkgiAUEBayABcjYCSCAAKAIAIgFBCHEEQCAAIAFBIHI2AgBBfw8LIABCADcCBCAAIAAoAiwiATYCHCAAIAE2AhQgACABIAAoAjBqNgIQQQALLAAgACgCABogACgCACAAENwBahogACgCACAAEI0BahogACgCACAAENwBahoLlwIBBX8gASgCTBpB/wEhBSAAIQMCQANAAkACQAJAIAEoAgQiAiABKAIIIgRGDQACfyACQQogBCACaxDcAyIGBEAgBiABKAIEIgJrQQFqDAELIAEoAgggASgCBCICawshBCADIAIgBCAFIAQgBUkbIgIQPhogASABKAIEIAJqIgQ2AgQgAiADaiEDIAYNAiAFIAJrIgVFDQIgBCABKAIIRg0AIAEgBEEBajYCBCAELQAAIQIMAQsgARCQAyICQQBODQBBACECIAAgA0YNAyABLQAAQRBxDQEMAwsgAyACOgAAIANBAWohAyACQf8BcUEKRg0AIAVBAWsiBQ0BCwsgAEUEQEEAIQIMAQsgA0EAOgAAIAAhAgsgAgt1AgJ8AX4gAAJ+EA8iAUQAAAAAAECPQKMiAplEAAAAAAAA4ENjBEAgArAMAQtCgICAgICAgICAfwsiAzcDACAAAn8gASADQugHfrmhRAAAAAAAQI9AoiIBmUQAAAAAAADgQWMEQCABqgwBC0GAgICAeAs2AggLRQIBfgF8An4QD0QAAAAAAECPQKMiAplEAAAAAAAA4ENjBEAgArAMAQtCgICAgICAgICAfwshASAABEAgACAB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QQFqOwEGIAEgC2ogAGoiAiAELQAYQQFqOwEAIAIgBC0AGUEBajsBAiACIAQtABpBAWo7AQQgAiAELQAbQQFqOwEGIAEgD2ogAGoiASAELQAcQQFqOwEAIAEgBC0AHUEBajsBAiABIAQtAB5BAWo7AQQgASAELQAfQQFqOwEGIARBIGohBCAHQQFqIgdBBEcNAAsgDUGAC2okAAvLAwEEfyAAKALkAyAAQQFB/A8gACgCBCgCABEEACIAQfwHaiIBNgIoIABC/////w83AvgHIABCgYCAgCA3AoAIIABCg4CAgMAANwKICCAAQv3///9vNwLwByAAQoWAgIDgADcCkAggAEL7////TzcC6AcgAEKHgICAgAE3ApgIIABC+f///69/NwLgByAAQomAgICgATcCoAggAEL3////j383AtgHIABCi4CAgMABNwKoCCAAQvX////vfjcC0AcgAEKNgICA4AE3ArAIIABC8////89+NwLIByAAQQ82ArgIIABC8f///69+NwLAB0EQIQJBECEDA0AgASADQQJ0IgBqIAI2AgAgASAAa0EAIAJrIgQ2AgAgASAAQQRyaiACNgIAIAEgA0F/c0ECdGogBDYCACACQQFqIQJBMCEAIANBAmoiA0EwRw0ACwNAIAEgAEECdCICakEgNgIAIAEgAmtBYDYCACABIAJBBHJqQSA2AgAgASAAQX9zQQJ0akFgNgIAIAEgAkEIcmpBIDYCACABQX4gAGtBAnRqQWA2AgAgASACQQxyakEgNgIAIAFBfSAAa0ECdGpBYDYCACAAQQRqIgBBgAJHDQALC/cCAQp/IAAoAuQDIgQgACgCWCIBQQFGIgI2AhwgBCAAQQFB/gVBgAIgAhsgACgCeCAAKAIEKAIIEQgANgIYIAAoAnhBAEoEQCAEKAIUIQYgAUEBRyEIA0AgBiAEIAdBAnQiAWooAiAiAm0hBiAIRQRAIAQoAhggAWoiAyADKAIAQf8BajYCAAsgAkH+AWogAkEBayIJQQF0IgptIQUgBCgCGCABaigCACEBQQAhAkEAIQMDQCADIAVKBEADQCADIAJBAWoiAkEBdEEBckH/AWwgCWogCm0iBUoNAAsLIAEgA2ogAiAGbDoAACADQQFqIgNBgAJHDQALIAhFBEBBASECA0AgASACayIFIAEtAAA6AAAgASACaiIDIAEt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C6KhIAogCqIiC6M5AyAgBSABKwMIIAqiIA0gASsDSKKhIAujOQMoIAUgASsDECAKoiANIAErA1CioSALozkDMCAFIAErAyAgCqIgECARIAyiIBMgDqIgDyASoqCgoCIMIAErA0CioSALozkDOCAFIAErAyggCqIgDCABKwNIoqEgC6M5A0AgBSABKwMwIAqiIAwgASsDUKKhIAujOQNIQQAFQX8LQQBOBEBBACECA0BBACEEIAJBAkYNAgNAIARBBkcEQCAEQQN0IgEgACACQTBsamohBkEAIQNEAAAAAAAAAAAhCgNAIANBA0cEQCAFQSBqIAJBGGxqIANBA3RqKwMAIAVB0ABqIANBMGxqIAFqKwMAoiAKoCEKIANBAWohAwwBCwsgBiAKOQMAIARBAWohBAwBCwsgAkEBaiECDAALAAtBAEEDQdgWQQAQNgsgBUHgAWokACAECxIAIAAgACgCACABQQJ0ajYCAAswAQF/IwBBEGsiAiQAIAIgATYCACACIAA2AgggAiACQQhqEOoDIQAgAkEQaiQAIAALDQAgACgCACAAKAIERgtXAQJ/IwBBIGsiAyQAIAAQMiICIANBCGogACAAED1BAWoQ+wMgABA9IAIQtgIiAigCCCABELcCIAIgAigCCEEIajYCCCAAIAIQ6AIgAhDnAiADQSBqJAALqQQCCX8BfiAAEL0CIQIgABDuAiEDIwBBIGsiBiQAIAYgAzYCECAGIAI2AhggBkEQaiAGQRhqEKgDIQQjAEEQayIFJAAgBSADNgIAIAUgAjYCCCAEQQJOBEAgBSgCCCECIAUQ0gEoAgAhAyMAQRBrIgEkACABIAIpAgAiCjcDCCACIAMpAgA3AgAgAyAKNwIAIAFBEGokACAFKAIIIQIjAEEwayIBJAAgASACNgIgIAEgAjYCKCABQSBqIAFBKGoQqAMhAgJAIARBAWsiBEECSA0AIARBAmtBAXYiCSACSA0AIAEgAUEoaiACQQF0IgNBAXIiAhDuATYCGAJAIANBAmoiAyAETg0AIAFBGGoiBygCACEIIAEgB0EBEO4BNgIQIAggASgCEBCnAkUNACABQRhqEJ8BGiADIQILIAEoAhggASgCIBCnAg0AIAEgASgCICkCADcDEANAAkAgASgCICABKAIYKQIANwIAIAEgASgCGDYCICACIAlKDQAgASAB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EKAGIAEgASgCAEEUaiIDNgIADAELCyABELIBIAFBEGokACAAIAIQ9AYgAhDyBgsgBEEgaiQADwsgASACSQRAIAAgACgCACABQRRsahCnBgsLnwEBBH8jAEEgayICJAAgACABNgIAIAJBGGogARCoBiEDQRAQWyEEIwBBIGsiBSQAIAUgATYCDCAEEPcDIgRB3NoBNgIAIARBDGogBUEIaiAFQQxqEKsCEKsCGiAFQSBqJAAgACAENgIEIAMQuQEaIAIgATYCBCACIAE2AgAgAygCACEBIANBADYCACABBEAgAyABEIsGCyACQSBqJAAgAAueAQECfyAAQgA3AgAgAEEIaiIBQQA2AgAgAUEEahBSGiABQRBqEFIaIABBJGoiAULSCTcCACABQQhqEIMEGiABQQxqIgJCADcCBCACIAE2AgAgAkEMahBSGiACQRhqEFIaIAJBJGoQUhogAkEwahBSGiABQcgAahBSGiABQdQAahCqAyABQRA2AmwgAUIANwJkIAIQjgYgAkEBEI0GIAALpwIBA38gACgCACECIAAgATYCACACBEAgAgRAIAJBlAZqIgBBGGoQ0wEaIABBDGoQfiAAEH4gAkGMBWoiAEH8AGoQfiAAQfAAahB+IABB3ABqEOAFIAJB/ARqENMBGiACQaABaiIAQZABahB+IABB3ABqIgFBKGoQlgQgAUEcahB+IABByABqEJcEIABBPGoQlwQgAEEgahCWBCAAQRBqIgAQzAIgACgCAARAIAAgACgCABDNBiAAEDIaIAAoAgAhASAAELMBGiABEDELIAJB3ABqEIcEGiACQcgAaiIDKAIIIQAgAxAyIQQDQCAABEAgACgCACEBIAQgAEEIahClBiAAEDEgASEADAELCyADELECIAJBQGsQ0QEgAkEMahDTARoLIAIQMQsLYQEDfyAAKAIAIQIgACABNgIAIAIEQCACBEAgAkEEaiIDKAIIIQAgAxAyIQQDQCAABEAgACgCACEBIAQgAEEIahCWBiAAEDEgASEADAELCyADELECIAJBABCtBgsgAhAxCwsJACABQQA7AQALCwAgACABQQIQ8gELjQICDH8BfUF/IQoCQCABKAIIIgYgAigCBEcNACAAKAIEIgMgASgCBEcNACAAKAIIIgcgAigCCEcNAEEAIQogA0EAIANBAEobIQsgB0EAIAdB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IAogABCYASAGIAoQhwEgChA4GiAKIAAQwQEgByAKEIcBIAoQOBogABD0AQwBCyACEKsHIQACQCABBEAgCiAAEPYBIAMgCigCADYAACAKIAAQ9QEMAQsgCiAAELsDIAMgCigCADYAACAKIAAQwAELIAggChCHASAKEDgaIAQgABC9AToAACAFIAAQmQE6AAAgCiAAEJgBIAYgChCHASAKEDgaIAogABDBASAHIAoQhwEgChA4GiAAEPQBCzYCACAKQRBqJAALMQEBfyMAQRBrIgIkACACIAAoAgA2AgggAkEIaiABEOsFIAIoAgghACACQRBqJAAgAAsLACAAQdi4BBDLAQsLACAAQeC4BBDLAQsVACAAIAEoAgAQ3AQgASgCABDrARoL9A8BC38jAEGwBGsiCyQAIAsgCjYCpAQgCyABNgKoBAJAIAAgC0GoBGoQcwRAIAUgBSgCAEEEcjYCAEEAIQAMAQsgC0HNAjYCYCALIAtBiAFqIAtBkAFqIAtB4ABqIgEQZiIPKAIAIgo2AoQBIAsgCkGQA2o2AoABIAEQRCERIAtB0ABqEEQhDCALQUBrEEQhDiALQTBqEEQhDSALQSBqEEQhECMAQRBrIgEkACALAn8gAgRAIAEgAxCmByICEPYBIAsgASgCADYAeCABIAIQ9QEgDSABENUBIAEQOBogASACEMABIA4gARDVASABEDgaIAsgAhC9ATYCdCALIAIQmQE2AnAgASACEJgBIBEgARCHASABEDgaIAEgAhDBASAMIAEQ1QEgARA4GiACEPQBDAELIAEgAxClByICEPYBIAsgASgCADYAeCABIAIQ9QEgDSABENUBIAEQOBogASACEMABIA4gARDVASABEDgaIAsgAhC9ATYCdCALIAIQmQE2AnAgASACEJgBIBEgARCHASABEDgaIAEgAhDBASAMIAEQ1QEgARA4GiACEPQBCzYCHCABQRBqJAAgCSAIKAIANgIAIARBgARxIhJBCXYhE0EAIQNBACEBA0AgASECAkACQAJAAkAgA0EERg0AIAAgC0GoBGoQiwFFDQBBACEKAkACQAJAAkACQAJAIAtB+ABqIANqLAAADgUBAAQDBQkLIANBA0YNByAHQQEgABBoELYBBEAgC0EQaiAAEKcHIBAgCygCEBCvBAwCCyAFIAUoAgBBBHI2AgBBACEADAYLIANBA0YNBgsDQCAAIAtBqARqEIsBRQ0GIAdBASAAEGgQtgFFDQYgC0EQaiAAEKcHIBAgCygCEBCvBAwACwALAkAgDhA1RQ0AIAAQaCAOEEAoAgBHDQAgABB6GiAGQQA6AAAgDiACIA4QNUEBSxshAQwGCwJAIA0QNUUNACAAEGggDRBAKAIARw0AIAAQehogBkEBOgAAIA0gAiANEDVBAUsbIQEMBgsCQCAOEDVFDQAgDRA1RQ0AIAUgBSgCAEEEcjYCAEEAIQAMBAsgDhA1RQRAIA0QNUUNBQsgBiANEDVFOgAADAQLIAIgA0ECSXJFBEBBACEBIBMgA0ECRiALLQB7QQBHcXJFDQULIAsgDBCsATYCCCALQRBqIAtBCGoQngEhBAJAIANFDQAgAyALai0Ad0EBSw0AA0ACQCALIAwQ+QE2AgggBCALQQhqEH1FDQAgB0EBIAQoAgAoAgAQtgFFDQAgBBCHAgwBCwsgCyAMEKwBNgIIIAQgC0EIahDqAyIBIBAQNU0EQCALIBAQ+QE2AgggC0EIakEAIAFrEKQHIQogEBD5ASEUIAwQrAEhFSMAQSBrIgEkACABIBQ2AhAgASAKNgIYIAEgFTYCCANAAkAgAUEYaiABQRBqEH0iCkUNACABKAIYIAEoAggQqAFFDQAgAUEYahCHAiABQQhqEIcCDAELCyABQSBqJAAgCkEBcw0BCyALIAwQrAE2AgAgBCALQQhqIAsQngEoAgA2AgALIAsgBCgCADYCCANAAkAgCyAMEPkBNgIAIAtBCGogCxB9RQ0AIAAgC0GoBGoQiwFFDQAgABBoIAsoAggoAgBHDQAgABB6GiALQQhqEIcCDAELCyASRQ0DIAsgDBD5ATYCACALQQhqIAsQfUUNAyAFIAUoAgBBBHI2AgBBACEADAILA0ACQCAAIAtBqARqEIsBRQ0AAn8gB0HAACAAEGgiARC2AQRAIAkoAgAiBCALKAKkBEYEQCAIIAkgC0GkBGoQxAIgCSgCACEECyAJIARBBGo2AgAgBCABNgIAIApBAWoMAQsgERA1RSAKRXINASABIAsoAnBHDQEgCygChAEiASALKAKAAUYEQCAPIAtBhAFqIAtBgAFqEMQCIAsoAoQBIQELIAsgAUEEajYChAEgASAKNgIAQQALIQogABB6GgwBCwsgCkUgCygChAEiASAPKAIARnJFBEAgCygCgAEgAUYEQCAPIAtBhAFqIAtBgAFqEMQCIAsoAoQBIQELIAsgAUEEajYChAEgASAKNgIACwJAIAsoAhxBAEwNAAJAIAAgC0GoBGoQc0UEQCAAEGggCygCdEYNAQsgBSAFKAIAQQRyNgIAQQAhAAwDCwNAIAAQehogCygCHEEATA0BAkAgACALQagEahBzRQRAIAdBwAAgABBoELYBDQELIAUgBSgCAEEEcjYCAEEAIQAMBAsgCSgCACALKAKkBEYEQCAIIAkgC0GkBGoQxAILIAAQaCEBIAkgCSgCACIEQQRqNgIAIAQgATYCACALIAsoAhxBAWs2AhwMAAsACyACIQEgCCgCACAJKAIARw0DIAUgBSgCAEEEcjYCAEEAIQAMAQsCQCACRQ0AQQEhCgNAIAIQNSAKTQ0BAkAgACALQagEahBzRQRAIAAQaCACIAoQwgMoAgBGDQELIAUgBSgCAEEEcjYCAEEAIQAMAwsgABB6GiAKQQFqIQoMAAsAC0EBIQAgDygCACALKAKEAUYNAEEAIQAgC0EANgIQIBEgDygCACALKAKEASALQRBqEIoBIAsoAhAEQCAFIAUoAgBBBHI2AgAMAQtBASEACyAQEDgaIA0QOBogDhA4GiAMEDgaIBEQOBogDxBlDAMLIAIhAQsgA0EBaiEDDAALAAsgC0GwBGokACAACx0AIAAgARC5ARB5IAEQUygCACEBIAAQUyABNgIACzQBAX8jAEEQayICJAAgAiAAKAIANgIIIAIgAigCCCABajYCCCACKAIIIQAgAkEQaiQAIAALCwAgAEHIuAQQywELCwAgAEHQuAQQywELwwEBBn8jAEEQayIEJAAgABBTKAIAIQUCfyACKAIAIAAoAgBrIgNB/////wdJBEAgA0EBdAwBC0F/CyIDQQEgAxshAyABKAIAIQYgACgCACEHIAVBzQJGBH9BAAUgACgCAAsgAxDQAiIIBEAgBUHNAkcEQCAAELkBGgsgBEHMAjYCBCAAIARBCGogCCAEQQRqEGYiBRCpByAFEGUgASAAKAIAIAYgB2tqNgIAIAIgAyAAKAIAajYCACAEQRBqJAAPCxB1AAslAQF/IAEoAgAQ4wRBGHRBGHUhAiAAIAEoAgA2AgQgACACOgAAC50QAQt/IwBBsARrIgskACALIAo2AqQEIAsgATYCqAQCQCAAIAtBqARqEHQEQCAFIAUoAgBBBHI2AgBBACEADAELIAtBzQI2AmggCyALQYgBaiALQZABaiALQegAaiIBEGYiDygCACIKNgKEASALIApBkANqNgKAASABEEQhESALQdgAahBEIQwgC0HIAGoQRCEOIAtBOGoQRCENIAtBKGoQRCEQIwBBEGsiASQAIAsCfyACBEAgASADEKwHIgIQ9gEgCyABKAIANgB4IAEgAhD1ASANIAEQhwEgARA4GiABIAIQwAEgDiABEIcBIAEQOBogCyACEL0BOgB3IAsgAhCZAToAdiABIAIQmAEgESABEIcBIAEQOBogASACEMEBIAwgARCHASABEDgaIAIQ9AEMAQsgASADEKsHIgIQ9gEgCyABKAIANgB4IAEgAhD1ASANIAEQhwEgARA4GiABIAIQwAEgDiABEIcBIAEQOBogCyACEL0BOgB3IAsgAhCZAToAdiABIAIQmAEgESABEIcBIAEQOBogASACEMEBIAwgARCHASABEDgaIAIQ9AELNgIkIAFBEGokACAJIAgoAgA2AgAgBEGABHEiEkEJdiETQQAhA0EAIQEDQCABIQICQAJAAkACQCADQQRGDQAgACALQagEahCMAUUNAEEAIQoCQAJAAkACQAJAAkAgC0H4AGogA2osAAAOBQEABAMFCQsgA0EDRg0HIAdBASAAEGkQtwEEQCALQRhqIAAQrgcgECALLAAYELAEDAILIAUgBSgCAEEEcjYCAEEAIQAMBgsgA0EDRg0GCwNAIAAgC0GoBGoQjAFFDQYgB0EBIAAQaRC3AUUNBiALQRhqIAAQrgcgECALLAAYELAEDAALAAsCQCAOEDVFDQAgABBpQf8BcSAOQQAQQS0AAEcNACAAEHsaIAZBADoAACAOIAIgDhA1QQFLGyEBDAYLAkAgDRA1RQ0AIAAQaUH/AXEgDUEAEEEtAABHDQAgABB7GiAGQQE6AAAgDSACIA0QNUEBSxshAQwGCwJAIA4QNUUNACANEDVFDQAgBSAFKAIAQQRyNgIAQQAhAAwECyAOEDVFBEAgDRA1RQ0FCyAGIA0QNUU6AAAMBAsgAiADQQJJckUEQEEAIQEgEyADQQJGIAstAHtBAEdxckUNBQsgCyAMEKwBNgIQIAtBGGogC0EQahCeASEEAkAgA0UNACADIAtqLQB3QQFLDQADQAJAIAsgDBD6ATYCECAEIAtBEGoQfUUNACAHQQEgBCgCACwAABC3AUUNACAEEPUCDAELCyALIAwQrAE2AhAgBCgCACALKAIQayIBIBAQNU0EQCALIBAQ+gE2AhAgC0EQakEAIAFrEKoHIQogEBD6ASEUIAwQrAEhFSMAQSBrIgEkACABIBQ2AhAgASAKNgIYIAEgFTYCCANAAkAgAUEYaiABQRBqEH0iCkUNACABKAIYLQAAIAEoAggtAABHDQAgAUEYahD1AiABQQhqEPUCDAELCyABQSBqJAAgCkEBcw0BCyALIAwQrAE2AgggBCALQRBqIAtBCGoQngEoAgA2AgALIAsgBCgCADYCEANAAkAgCyAMEPoBNgIIIAtBEGogC0EIahB9RQ0AIAAgC0GoBGoQjAFFDQAgABBpQf8BcSALKAIQLQAARw0AIAAQexogC0EQahD1AgwBCwsgEkUNAyALIAwQ+gE2AgggC0EQaiALQQhqEH1FDQMgBSAFKAIAQQRyNgIAQQAhAAwCCwNAAkAgACALQagEahCMAUUNAAJ/IAdBwAAgABBpIgEQtwEEQCAJKAIAIgQgCygCpARGBEAgCCAJIAtBpARqEK0HIAkoAgAhBAsgCSAEQQFqNgIAIAQgAToAACAKQQFqDAELIBEQNUUgCkVyDQEgCy0AdiABQf8BcUcNASALKAKEASIBIAsoAoABRgRAIA8gC0GEAWogC0GAAWoQxAIgCygChAEhAQsgCyABQQRqNgKEASABIAo2AgBBAAshCiAAEHsaDAELCyAKRSALKAKEASIBIA8oAgBGckUEQCALKAKAASABRgRAIA8gC0GEAWogC0GAAWoQxAIgCygChAEhAQsgCyABQQRqNgKEASABIAo2AgALAkAgCygCJEEATA0AAkAgACALQagEahB0RQRAIAAQaUH/AXEgCy0Ad0YNAQsgBSAFKAIAQQRyNgIAQQAhAAwDCwNAIAAQexogCygCJEEATA0BAkAgACALQagEahB0RQRAIAdBwAAgABBpELcBDQELIAUgBSgCAEEEcjYCAEEAIQAMBAsgCSgCACALKAKkBEYEQCAIIAkgC0GkBGoQrQcLIAAQaSEBIAkgCSgCACIEQQFqNgIAIAQgAToAACALIAsoAiRBAWs2AiQMAAsACyACIQEgCCgCACAJKAIARw0DIAUgBSgCAEEEcjYCAEEAIQAMAQsCQCACRQ0AQQEhCgNAIAIQNSAKTQ0BAkAgACALQagEahB0RQRAIAAQaUH/AXEgAiAKEEEtAABGDQELIAUgBSgCAEEEcjYCAEEAIQAMAwsgABB7GiAKQQFqIQoMAAsAC0EBIQAgDygCACALKAKEAUYNAEEAIQAgC0EANgIYIBEgDygCACALKAKEASALQRhqEIoBIAsoAhgEQCAFIAUoAgBBBHI2AgAMAQtBASEACyAQEDgaIA0QOBogDhA4GiAMEDgaIBEQOBogDxBlDAMLIAIhAQsgA0EBaiEDDAALAAsgC0GwBGokACAACwwAIABBAUEtELsHGgsMACAAQQFBLRCiBxoLHAEBfyAALQAAIQIgACABLQAAOgAAIAEgAjoAAAtkAQF/IwBBEGsiBiQAIAZBADoADyAGIAU6AA4gBiAEOgANIAZBJToADCAFBEAgBkENaiAGQQ5qELIHCyACIAEgASACKAIAEJ4GIAZBDGogAyAAKAIAEBkgAWo2AgAgBkEQaiQAC0IAIAEgAiADIARBBBDWASEBIAMtAABBBHFFBEAgACABQdAPaiABQewOaiABIAFB5ABIGyABQcUASBtB7A5rNgIACwtAACACIAMgAEEIaiAAKAIIKAIEEQAAIgAgAEGgAmogBSAEQQAQwwMgAGsiAEGfAkwEQCABIABBDG1BDG82AgALC0AAIAIgAyAAQQhqIAAoAggoAgARAAAiACAAQagBaiAFIARBABDDAyAAayIAQacBTARAIAEgAEEMbUEHbzYCAAsLQgAgASACIAMgBEEEENcBIQEgAy0AAEEEcUUEQCAAIAFB0A9qIAFB7A5qIAEgAUHkAEgbIAFBxQBIG0HsDms2AgALC0AAIAIgAyAAQQhqIAAoAggoAgQRAAAiACAAQaACaiAFIARBABDFAyAAayIAQZ8CTARAIAEgAEEMbUEMbzYCAAsLQAAgAiADIABBCGogACgCCCgCABEAACIAIABBqAFqIAUgBEEAEMUDIABrIgBBpwFMBEAgASAAQQxtQQdvNgIACwsyAAJAQX8gACgCTBC7AUUEQCAAKAJMIQAMAQsgACAAQSAQlQciADYCTAsgAEEYdEEYdQvCAQEFfyMAQRBrIgckACMAQRBrIgUkACAAIQMCQCABQe////8DTQRAAkAgARC6AwRAIAMgARCcASADIQYMAQsgAyADIAEQwQJBAWoiABDAAiIGEJUBIAMgABC1ASADIAEQjwELIAYhBCABIgAEfyAABEADQCAEIAI2AgAgBEEEaiEEIABBAWsiAA0ACwtBAAUgBAsaIAVBADYCDCAGIAFBAnRqIAVBDGoQqgEgBUEQaiQADAELELQBAAsgB0EQaiQAIAMLvQUBCn8jAEEQayIJJAAgBhCRASEKIAkgBhDJAiINEJgBIAUgAzYCAAJAAkAgACIHLQAAIgZBK2sOAwABAAELIAogBkEYdEEYdRCaASEGIAUgBSgCACIHQQRqNgIAIAcgBjYCACAAQQFqIQcLAkACQCACIAciBmtBAUwNACAHLQAAQTBHDQAgBy0AAUEgckH4AEcNACAKQTAQmgEhBiAFIAUoAgAiCEEEajYCACAIIAY2AgAgCiAHLAABEJoBIQYgBSAFKAIAIghBBGo2AgAgCCAGNgIAIAdBAmoiByEGA0AgAiAGTQ0CIAYsAAAQXBDGBEUNAiAGQQFqIQYMAAsACwNAIAIgBk0NASAGLAAAIQgQXBogCBCuAUUNASAGQQFqIQYMAAsACwJAIAkQvwEEQCAKIAcgBiAFKAIAEOUBIAUgBSgCACAGIAdrQQJ0ajYCAAwBCyAHIAYQmAIgDRCZASEOIAchCANAIAYgCE0EQCADIAcgAGtBAnRqIAUoAgAQvgMFAkAgCSALEEEsAABBAEwNACAMIAkgCxBBLAAARw0AIAUgBSgCACIMQQRqNgIAIAwgDjYCACALIAsgCRA1QQFrSWohC0EAIQwLIAogCCwAABCaASEPIAUgBSgCACIQQQRqNgIAIBAgDzYCACAIQQFqIQggDEEBaiEMDAELCwsCQAJAA0AgAiAGTQ0BIAYtAAAiB0EuRwRAIAogB0EYdEEYdRCaASEHIAUgBSgCACIIQQRqNgIAIAggBzYCACAGQQFqIQYMAQsLIA0QvQEhByAFIAUoAgAiC0EEaiIINgIAIAsgBzYCACAGQQFqIQYMAQsgBSgCACEICyAKIAYgAiAIEOUBIAUgBSgCACACIAZrQQJ0aiIFNgIAIAQgBSADIAEgAGtBAnRqIAEgAkYbNgIAIAkQOBogCUEQaiQAC94DAQh/IwBBEGsiCiQAIAYQkQEhCyAKIAYQyQIiBhCYAQJAIAoQvwEEQCALIAAgAiADEOUBIAUgAyACIABrQQJ0aiIGNgIADAELIAUgAzYCAAJAAkAgACIILQAAIgdBK2sOAwABAAELIAsgB0EYdEEYdRCaASEIIAUgBSgCACIHQQRqNgIAIAcgCDYCACAAQQFqIQgLAkAgAiAIa0ECSA0AIAgtAABBMEcNACAILQABQSByQfgARw0AIAtBMBCaASEHIAUgBSgCACIJQQRqNgIAIAkgBzYCACALIAgsAAEQmgEhByAFIAUoAgAiCUEEajYCACAJIAc2AgAgCEECaiEICyAIIAIQmAJBACEJIAYQmQEhDEEAIQcgCCEGA38gAiAGTQR/IAMgCCAAa0ECdGogBSgCABC+AyAFKAIABQJAIAogBxBBLQAARQ0AIAkgCiAHEEEsAABHDQAgBSAFKAIAIglBBGo2AgAgCSAMNgIAIAcgByAKEDVBAWtJaiEHQQAhCQsgCyAGLAAAEJoBIQ0gBSAFKAIAIg5BBGo2AgAgDiANNgIAIAZBAWohBiAJQQFqIQkMAQsLIQYLIAQgBiADIAEgAGtBAnRqIAEgAkYbNgIAIAoQOBogCkEQaiQAC6gFAQp/IwBBEGsiCSQAIAYQlwEhCiAJIAYQywIiDRCYASAFIAM2AgACQAJAIAAiBy0AACIGQStrDgMAAQABCyAKIAZBGHRBGHUQgQEhBiAFIAUoAgAiB0EBajYCACAHIAY6AAAgAEEBaiEHCwJAAkAgAiAHIgZrQQFMDQAgBy0AAEEwRw0AIActAAFBIHJB+ABHDQAgCkEwEIEBIQYgBSAFKAIAIghBAWo2AgAgCCAGOgAAIAogBywAARCBASEGIAUgBSgCACIIQQFqNgIAIAggBjoAACAHQQJqIgchBgNAIAIgBk0NAiAGLAAAEFwQxgRFDQIgBkEBaiEGDAALAAsDQCACIAZNDQEgBiwAACEIEFwaIAgQrgFFDQEgBkEBaiEGDAALAAsCQCAJEL8BBEAgCiAHIAYgBSgCABD7ASAFIAUoAgAgBiAHa2o2AgAMAQsgByAGEJgCIA0QmQEhDiAHIQgDQCAGIAhNBEAgAyAHIABraiAFKAIAEJgCBQJAIAkgDBBBLAAAQQBMDQAgCyAJIAwQQSwAAEcNACAFIAUoAgAiC0EBajYCACALIA46AAAgDCAMIAkQNUEBa0lqIQxBACELCyAKIAgsAAAQgQEhDyAFIAUoAgAiEEEBajYCACAQIA86AAAgCEEBaiEIIAtBAWohCwwBCwsLA0ACQCACIAZLBEAgBi0AACIHQS5HDQEgDRC9ASEHIAUgBSgCACIIQQFqNgIAIAggBzoAACAGQQFqIQYLIAogBiACIAUoAgAQ+wEgBSAFKAIAIAIgBmtqIgU2AgAgBCAFIAMgASAAa2ogASACRhs2AgAgCRA4GiAJQRBqJAAPCyAKIAdBGHRBGHUQgQEhByAFIAUoAgAiCEEBajYCACAIIAc6AAAgBkEBaiEGDAALAAvVAwEIfyMAQRBrIgokACAGEJcBIQsgCiAGEMsCIgYQmAECQCAKEL8BBEAgCyAAIAIgAxD7ASAFIAMgAiAAa2oiBjYCAAwBCyAFIAM2AgACQAJAIAAiCC0AACIHQStrDgMAAQABCyALIAdBGHRBGHUQgQEhCCAFIAUoAgAiB0EBajYCACAHIAg6AAAgAEEBaiEICwJAIAIgCGtBAkgNACAILQAAQTBHDQAgCC0AAUEgckH4AEcNACALQTAQgQEhByAFIAUoAgAiCUEBajYCACAJIAc6AAAgCyAILAABEIEBIQcgBSAFKAIAIglBAWo2AgAgCSAHOgAAIAhBAmohCAsgCCACEJgCQQAhCSAGEJkBIQxBACEHIAghBgN/IAIgBk0EfyADIAggAGtqIAUoAgAQmAIgBSgCAAUCQCAKIAcQQS0AAEUNACAJIAogBxBBLAAARw0AIAUgBSgCACIJQQFqNgIAIAkgDDoAACAHIAcgChA1QQFrSWohB0EAIQkLIAsgBiwAABCBASENIAUgBSgCACIOQQFqNgIAIA4gDToAACAGQQFqIQYgCUEBaiEJDAELCyEGCyAEIAYgAyABIABraiABIAJGGzYCACAKEDgaIApBEGokAAsNACAAQdCbAzYCACAAC6ADAQJ/IwBB4AJrIgAkACAAIAI2AtACIAAgATYC2AIgAxDaASEGIAMgAEHgAWoQ9wIhByAAQdABaiADIABBzAJqEPYCIABBwAFqEEQiASABEFQQPyAAIAFBABBBIgI2ArwBIAAgAEEQajYCDCAAQQA2AggDQAJAIABB2AJqIABB0AJqEIsBRQ0AIAAoArwBIAEQNSACakYEQCABEDUhAyABIAEQNUEBdBA/IAEgARBUED8gACADIAFBABBBIgJqNgK8AQsgAEHYAmoQaCAGIAIgAEG8AWogAEEIaiAAKALMAiAAQdABaiAAQRBqIABBDGogBxDIAg0AIABB2AJqEHoaDAELCwJAIABB0AFqEDVFDQAgACgCDCIDIABBEGprQZ8BSg0AIAAgA0EEajYCDCADIAAoAgg2AgALIAUgAiAAKAK8ASAEIAYQyAc2AgAgAEHQAWogAEEQaiAAKAIMIAQQigEgAEHYAmogAEHQAmoQcwRAIAQgBCgCAEECcjYCAAsgACgC2AIhAiABEDgaIABB0AFqEDgaIABB4AJqJAAgAgtFAQF/IwBBEGsiAyQAIAMgATYCDCADIAI2AgggAyADQQxqEMoBIQEgAEGx+QEgAygCCBD9BCEAIAEQyQEgA0EQaiQAIAALDQAgACgCACABKAIASAuxAgIEfgV/IwBBIGsiCCQAAkACQAJAIAEgAkcEQEGImQQoAgAhDEGImQRBADYCACMAQRBrIgkkABBcGiMAQRBrIgokACMAQRBrIgskACALIAEgCEEcakECEMYDIAspAwAhBCAKIAspAwg3AwggCiAENwMAIAtBEGokACAKKQMAIQQgCSAKKQMINwMIIAkgBDcDACAKQRBqJAAgCSkDACEEIAggCSkDCDcDECAIIAQ3AwggCUEQaiQAIAgpAxAhBCAIKQMIIQVBiJkEKAIAIgFFDQEgCCgCHCACRw0CIAUhBiAEIQcgAUHEAEcNAwwCCyADQQQ2AgAMAgtBiJkEIAw2AgAgCCgCHCACRg0BCyADQQQ2AgAgBiEFIAchBAsgACAFNwMAIAAgBDcDCCAIQSBqJAALtgECAnwDfyMAQRBrIgUkAAJAAkACQCAAIAFHBEBBiJkEKAIAIQdBiJkEQQA2AgAQXBojAEEQayIGJAAgBiAAIAVBDGpBARDGAyAGKQMAIAYpAwgQ1gMhAyAGQRBqJABBiJkEKAIAIgBFDQEgBSgCDCABRw0CIAMhBCAAQcQARw0DDAILIAJBBDYCAAwCC0GImQQgBzYCACAFKAIMIAFGDQELIAJBBDYCACAEIQMLIAVBEGokACADC7YBAgJ9A38jAEEQayIFJAACQAJAAkAgACABRwRAQYiZBCgCACEHQYiZBEEANgIAEFwaIwBBEGsiBiQAIAYgACAFQQxqQQAQxgMgBikDACAGKQMIEPQEIQMgBkEQaiQAQYiZBCgCACIARQ0BIAUoAgwgAUcNAiADIQQgAEHEAEcNAwwCCyACQQQ2AgAMAgtBiJkEIAc2AgAgBSgCDCABRg0BCyACQQQ2AgAgBCEDCyAFQRBqJAAgAwvHAQIDfwF+IwBBEGsiBCQAAn4CQAJAIAAgAUcEQAJAAkAgAC0AACIFQS1HDQAgAEEBaiIAIAFHDQAMAQtBiJkEKAIAIQZBiJkEQQA2AgAQXBogACAEQQxqIAMQsgQhBwJAQYiZBCgCACIABEAgBCgCDCABRw0BIABBxABGDQQMBQtBiJkEIAY2AgAgBCgCDCABRg0ECwsLIAJBBDYCAEIADAILIAJBBDYCAEJ/DAELQgAgB30gByAFQS1GGwshByAEQRBqJAAgBwvYAQIDfwF+IwBBEGsiBCQAAn8CQAJAAkAgACABRwRAAkACQCAALQAAIgVBLUcNACAAQQFqIgAgAUcNAAwBC0GImQQoAgAhBkGImQRBADYCABBcGiAAIARBDGogAxCyBCEHAkBBiJkEKAIAIgAEQCAEKAIMIAFHDQEgAEHEAEYNBQwEC0GImQQgBjYCACAEKAIMIAFGDQMLCwsgAkEENgIAQQAMAwsgB0L/////D1gNAQsgAkEENgIAQX8MAQtBACAHpyIAayAAIAVBLUYbCyEAIARBEGokACAAC5UDAQF/IwBBkAJrIgAkACAAIAI2AoACIAAgATYCiAIgAxDaASEGIABB0AFqIAMgAEH/AWoQ+AIgAEHAAWoQRCIBIAEQVBA/IAAgAUEAEEEiAjYCvAEgACAAQRBqNgIMIABBADYCCANAAkAgAEGIAmogAEGAAmoQjAFFDQAgACgCvAEgARA1IAJqRgRAIAEQNSEDIAEgARA1QQF0ED8gASABEFQQPyAAIAMgAUEAEEEiAmo2ArwBCyAAQYgCahBpIAYgAiAAQbwBaiAAQQhqIAAsAP8BIABB0AFqIABBEGogAEEMakHguAMQygINACAAQYgCahB7GgwBCwsCQCAAQdABahA1RQ0AIAAoAgwiAyAAQRBqa0GfAUoNACAAIANBBGo2AgwgAyAAKAIINgIACyAFIAIgACgCvAEgBCAGEMgHNgIAIABB0AFqIABBEGogACgCDCAEEIoBIABBiAJqIABBgAJqEHQEQCAEIAQoAgBBAnI2AgALIAAoAogCIQIgARA4GiAAQdABahA4GiAAQZACaiQAIAIL3QECA38BfiMAQRBrIgQkAAJ/AkACQAJAIAAgAUcEQAJAAkAgAC0AACIFQS1HDQAgAEEBaiIAIAFHDQAMAQtBiJkEKAIAIQZBiJkEQQA2AgAQXBogACAEQQxqIAMQsgQhBwJAQYiZBCgCACIABEAgBCgCDCABRw0BIABBxABGDQUMBAtBiJkEIAY2AgAgBCgCDCABRg0DCwsLIAJBBDYCAEEADAMLIAdC//8DWA0BCyACQQQ2AgBB//8DDAELQQAgB6ciAGsgACAFQS1GGwshACAEQRBqJAAgAEH//wNxC7cBAgF+An8jAEEQayIFJAACQAJAIAAgAUcEQEGImQQoAgAhBkGImQRBADYCABBcGiAAIAVBDGogAxCAByEEAkBBiJkEKAIAIgAEQCAFKAIMIAFHDQEgAEHEAEYNAwwEC0GImQQgBjYCACAFKAIMIAFGDQMLCyACQQQ2AgBCACEEDAELIAJBBDYCACAEQgBVBEBC////////////ACEEDAELQoCAgICAgICAgH8hBAsgBUEQaiQAIAQLxAECAn8BfiMAQRBrIgQkAAJ/AkACQCAAIAFHBEBBiJkEKAIAIQVBiJkEQQA2AgAQXBogACAEQQxqIAMQgAchBgJAQYiZBCgCACIABEAgBCgCDCABRw0BIABBxABGDQQMAwtBiJkEIAU2AgAgBCgCDCABRg0CCwsgAkEENgIAQQAMAgsgBkKAgICAeFMgBkL/////B1VyDQAgBqcMAQsgAkEENgIAQf////8HIAZCAFUNABpBgICAgHgLIQAgBEEQaiQAIAALmwEBBH8jAEEQayIFJAAgASACENUDIgRB7////wNNBEACQCAEELoDBEAgACAEEJwBIAAhAwwBCyAAIAAgBBDBAkEBaiIGEMACIgMQlQEgACAGELUBIAAgBBCPAQsDQCABIAJHBEAgAyABEKoBIANBBGohAyABQQRqIQEMAQsLIAVBADYCDCADIAVBDGoQqgEgBUEQaiQADwsQtAEAC2kAIABFBEAPCwJAIAAoAgAgAUYNACAAIAE2AgAgAUUEQCAAQeSGpwJqIgAoAgAQMSAAQQA2AgAMAQsgAEHkhqcCaiAAKAIoIAAoAiRsEDciADYCACAADQBBAEEDQf4NQQAQNkEBEAEACwtUAQJ/AkADQCADIARHBEBBfyEAIAEgAkYNAiABKAIAIgUgAygCACIGSA0CIAUgBkoEQEEBDwUgA0EEaiEDIAFBBGohAQwCCwALCyABIAJHIQALIAALQAEBf0EAIQADfyABIAJGBH8gAAUgASwAACAAQQR0aiIAQYCAgIB/cSIDQRh2IANyIABzIQAgAUEBaiEBDAELCwsbACMAQRBrIgEkACAAIAIgAxDaBCABQRBqJAALXgEDfyABIAQgA2tqIQUCQANAIAMgBEcEQEF/IQAgASACRg0CIAEsAAAiBiADLAAAIgdIDQIgBiAHSgRAQQEPBSADQQFqIQMgAUEBaiEBDAILAAsLIAIgBUchAAsgAAv3AQEFfyMAQSBrIgIkAAJ/AkACQCABQX8QuwENACACIAE2AhQgAC0ALARAIAJBFGpBBEEBIAAoAiAQzwFBAUcNAgwBCyACIAJBGGoiBTYCECACQSBqIQYgAkEUaiEDA0AgACgCJCAAKAIoIAMgBSACQQxqIAJBGGogBiACQRBqEP4CIQQgAigCDCADRg0CIARBA0YEQCADQQFBASAAKAIgEM8BQQFGDQIMAwsgBEEBSw0CIAJBGGoiA0EBIAIoAhAgA2siAyAAKAIgEM8BIANHDQIgAigCDCEDIARBAUYNAAsLIAEQ2QQMAQtBfwshACACQSBqJAAgAAtmAQF/AkAgAC0ALEUEQCACQQAgAkEAShshAgNAIAIgA0YNAiAAIAEoAgAgACgCACgCNBEDAEF/RgRAIAMPBSABQQRqIQEgA0EBaiEDDAELAAsACyABQQQgAiAAKAIgEM8BIQILIAILJgAgACAAKAIAKAIYEQAAGiAAIAEQxwMiATYCJCAAIAEQmwI6ACwL8gEBA38jAEEgayICJAAgAUF/ELsBIQQgAC0ANCEDAkAgBARAIAMNASAAIAAoAjAiAUF/ELsBQQFzOgA0DAELAkAgA0UNACACIAAoAjA2AhACQAJAAkAgACgCJCAAKAIoIAJBEGogAkEUaiIDIAJBDGogAkEYaiACQSBqIAMQ/gJBAWsOAwICAAELIAAoAjAhAyACIAJBGWo2AhQgAiADOgAYCwNAIAIoAhQiAyACQRhqTQ0CIAIgA0EBayIDNgIUIAMsAAAgACgCIBD8AkF/Rw0ACwtBfyEBDAELIABBAToANCAAIAE2AjALIAJBIGokACABCwkAIABBARDKBAsJACAAQQAQygQLMwAgACABEMcDIgE2AiQgACABEM8CNgIsIAAgACgCJBCbAjoANSAAKAIsQQlOBEAQdQALC/oBAQV/IwBBIGsiAiQAAn8CQAJAIAFBfxC7AQ0AIAIgARDSAzoAFyAALQAsBEAgAkEXakEBQQEgACgCIBDPAUEBRw0CDAELIAIgAkEYaiIFNgIQIAJBIGohBiACQRdqIQMDQCAAKAIkIAAoAiggAyAFIAJBDGogAkEYaiAGIAJBEGoQ/gIhBCACKAIMIANGDQIgBEEDRgRAIANBAUEBIAAoAiAQzwFBAUYNAgwDCyAEQQFLDQIgAkEYaiIDQQEgAigCECADayIDIAAoAiAQzwEgA0cNAiACKAIMIQMgBEEBRg0ACwsgARDZBAwBC0F/CyEAIAJBIGokACAAC2kBAX8CQCAALQAsRQRAIAJBACACQQBKGyECA0AgAiADRg0CIAAgASwAABDDASAAKAIAKAI0EQMAQX9GBEAgAw8FIAFBAWohASADQQFqIQMMAQsACwALIAFBASACIAAoAiAQzwEhAgsgAgsmACAAIAAoAgAoAhgRAAAaIAAgARDKAyIBNgIkIAAgARCbAjoALAv1AQEDfyMAQSBrIgIkACABQX8QuwEhBCAALQA0IQMCQCAEBEAgAw0BIAAgACgCMCIBQX8QuwFBAXM6ADQMAQsCQCADRQ0AIAIgACgCMBDSAzoAEwJAAkACQCAAKAIkIAAoAiggAkETaiACQRRqIgMgAkEMaiACQRhqIAJBIGogAxD+AkEBaw4DAgIAAQsgACgCMCEDIAIgAkEZajYCFCACIAM6ABgLA0AgAigCFCIDIAJBGGpNDQIgAiADQQFrIgM2AhQgAywAACAAKAIgEPwCQX9HDQALC0F/IQEMAQsgAEEBOgA0IAAgATYCMAsgAkEgaiQAIAELCQAgAEEBEM4ECwkAIABBABDOBAszACAAIAEQygMiATYCJCAAIAEQzwI2AiwgACAAKAIkEJsCOgA1IAAoAixBCU4EQBB1AAsLHgBB2LAEEIMDQaizBBCDA0GssQQQywNB/LMEEMsDC6chAhh/An0jAEHQAGsiECQAAkACQAJAQQBBAyAARSABRXIEf0HWPwUgASgCBA0BQYfHAAtBABA2QX8hFwwBCyAAKAIcEDECQCABKAIEIgQEQCAAIARBhAFsEDciAjYCHCACRQ0DA0AgAyAETg0CIANBhAFsIgQgACgCHGogASgCACAEakGEARA+GiADQQFqIQMgASgCBCEEDAALAAtBACEEIABBADYCHAsgACAENgIgIAAoAiQEQEEAIQMDQCAAKAIkIQQgACgCKCADSgRAIAQgA0EMbGooAgAQMSADQQFqIQMMAQsLIAQQMQsCQCABKAIMIgMEQCAAIANBDGwQNyIENgIkIARFDQMDQCADIAlMDQIgCUEMbCICIAAoAiRqIgggASgCCCIEIAJqIgooAgg2AgggCCAKKAIENgIEAkACQCAKKAIEIgwEQCAIIAxBDGwQNyIKNgIAQQAhAyAKRQ0HA0AgAyAMTg0CIANBDGwiCiAAKAIkIAJqKAIAaiIMIAIgBGooAgAgCmoiBCkCADcCACAMIAQoAgg2AgggA0EBaiEDIAEoAggiBCACaigCBCEMDAALAAsgCkEANgIADAELIAEoAgwhAwsgCUEBaiEJDAALAAtBACEDIABBADYCJAsgACADNgIoIAAoAjQiAwRAIAMQMSAAQgA3AjQLAkACQCABKAIMIgFBAEwNACAAIAE2AjggACABQcQAbBA3IgQ2AjQgBEUNAUEAIQMDQCABIANGDQEgBCADQcQAbGpBADYCQCADQQFqIQMMAAsACyAAKAIgIgFFDQEgAUEAIAFBAEobIRgDQEEAIQEgEiAAKAIoTg0CA0AgEkEMbCIFIAAoAiRqKAIEIAFMBEAgEkEBaiESDAILIBBBQGsQUiEKIBBBMGoQUiEJQQAhBCAQQSBqEFIhDANAIAQgGEYEQCAQIAoQfDYCAEEAQQFBtNIAIBAQNiAAIBFBAnRqIAAoAiQgBWoiAygCCDYCPCAAKAIAIRMgAygCACABQQxsaiIDKAIAIQQgAygCBCEDIwBBIGsiCyQAIAsgETYCHCALQRBqQZQBEFsQrAYQqwYiCCgCACAEEJUBIAgoAgAgAxCPASAIKAIAEDJB4AAQlQEgCCgCABAyEF4gChB8EKoGIAogCCgCABAyEF4iAkcEQCAKKAIAIQYgCigCBCEDIwBBEGsiBSQAAkAgAhDbASADIAZrQRRtIgdPBEAgBSADNgIMIAIQfCAHTyIPBH8gAwUgBSAGNgIMIAIQfCEEIAUgBSgCDCAEQRRsajYCDCAFKAIMCyEEIAIoAgAhDSAEIAZrIQ4gBCAGRwRAIA0gBiAOENQCCyAPRQRAIAIgBSgCDCADIAcgAhB8axCaBgwCCyACIA0gDkEUbUEUbGoQpwYMAQsgAigCAARAIAIQfCEEIAIQhwUgAiAEEKEGIAIQMhogAigCACEEIAIQ2wEaIAQQMSACEDJBADYCACACQgA3AgALIAIgAiAHEKwEEJkGIAIgBiADIAcQmgYLIAVBEGokAAsgCCgCABAyEFMhBCAMEI0BIQMCQCADIAQQjQEiAksEQCMAQSBrIgYkAAJAIAMgAmsiAyAEEDIoAgAgBCgCBGtNBEAjAEEQayIFJAAgBSAEIAMQtgMiAigCBCEDIAIoAgghBwNAIAMgB0YEQCACEHIgBUEQaiQABSAEEDIaIAMQhgYgAiADQQFqIgM2AgQMAQsLDAELIAQQMiECIAZBCGogBCAEEI0BIANqELQDIAQQjQEgAhCdBCEFIwBBEGsiByQAIAcgBUEIaiADEIcGIgMoAgAhAgNAIAMoAgQgAkcEQCAFKAIQGiADKAIAEIYGIAMgAygCAEEBaiICNgIADAELCyADELIBIAdBEGokACAEIAUQnAQgBRCbBAsgBkEgaiQADAELIAIgA0sEQCAEIAQoAgAgA2oQgAQLCyAMIAgoAgAQMhBTIgNHBEAgDCgCACEFIAwoAgQhAiMAQRBrIgQkAAJAIAUgAhD9AyIGIAMQ3AFNBEAgBCACNgIMIAUgAxCNASAGTyIHBH8gAgUgBCAFNgIMIAQgAxCNASAEKAIMajYCDCAEKAIMCyADKAIAEJ0GIQUgB0UEQCADIAQoAgwgAiAGIAMQjQFrEJ8GDAILIAMgBRCABAwBCyADKAIABEAgAxCNASEHIAMQmgUgAyAHEJsGIAMQMhogAygCACEHIAMQ3AEaIAcQMSADEDJBADYCACADQgA3AgALIAMgBhC0AyEHIAMQ4QYgB0kEQBC+AgALIAMQMhogAyAHEFsiDTYCACADIA02AgQgAxAyIAcgDWo2AgAgA0EAEOAGIAMgBSACIAYQnwYLIARBEGokAAsgCCgCACIDQSRqIgJBDGpBgAEQjQYgAkEMahCOBiACQQg2AmggAkEQNgJsIANBCGoiAxBTQQAQrQUhDSADEH8hBUEAIQQjAEEQayIDJAAjAEEQayIGJAAgA0IANwIAIAZBADYCDCADQQhqEKUCIAUEQCADEOoCIAVJBEAQsAIACyADIAMQMiAFELkCIgc2AgAgAyAHNgIEIAMQMiAHIAVBAnRqNgIAIANBABC4AiADIAUQrgMLIAZBEGokAANAIAMQRiAETQRAIANBABA6IQYgAxBGIQdBgAEQWyEEIAIQhQYhDiAEQQE6AGQgBCAONgIAIARB6ABqEFIaIARB9ABqEFIaIARBBGpB4AAQgwYgAkEIaiAEEIkGIAIoAghBABCjAyACIAIoAgggDSAFIAYgBxCEBiADEH4gA0EQaiQABSADIAQQOiAENgIAIARBAWohBAwBCwsgEygCACgCACEDIAsgC0EIaiAIEIEEKQIANwMAIwBBIGsiBSQAIAUgETYCHCAFIANByABqIgQgBUEcahBLNgIYIAUQRzYCCCAFQRhqIAVBCGoQfQRAQRAQBiAFQQhqQaMOEJYBEOUCQfjZAUEPEAUACyMAQSBrIg0kACANIAVBHGoiDxDjAjYCECANQRhqIRRBACEHIwBBIGsiAyQAIAQQPBogDygCACEOIAQQlAEhBiADQQA6AB8CQAJAIAZFDQAgBCAOIAYQXyIHEDooAgAiAkUNAANAIAIoAgAiAkUNASAOIAIoAgRHBEAgAigCBCAGEF8gB0cNAgsgBBBeIAJBCGogDxCMAkUNAAsMAQsjAEEQayIVJAAgA0EQaiAEEDIiAkEBEKQEIBVBCGogAkEAEK0CEKwCIgIoAgBBCGohFiANKAIQIRkjAEEQayIPJAAgDyAZNgIIIBYgDygCCCgCADYCACAWQQRqELMCGiAPQRBqJAAgAhBTQQE6AAQgAigCACAONgIEIAIoAgBBADYCACAVQRBqJAAgBBA8KAIAIQIgBBBeIQ8CQCAGBEAgAkEBarMgDyoCACAGs5ReRQ0BCyADIAYQiwJBAXMgBkEBdHI2AgwgAwJ/IAQQPCgCAEEBarMgBBBeKgIAlY0iGkMAAIBPXSAaQwAAAABgcQRAIBqpDAELQQALNgIIIAQgA0EMaiADQQhqEG8oAgAQrwIgDiAEEJQBIgYQXyEHCwJAIAQgBxA6KAIAIgJFBEAgAygCECAEQQhqIgIoAgA2AgAgBCADKAIQNgIIIAQgBxA6IAI2AgAgAygCECgCAEUNASADKAIQIQIgBCADKAIQKAIAKAIEIAYQXxA6IAI2AgAMAQsgAygCECACKAIANgIAIAIgAygCEDYCAAsgA0EQaiIGELkBIQIgBBA8IgQgBCgCAEEBajYCACADQQE6AB8gBigCACEEIAZBADYCACAEBEAgBhBTIgYtAAQEQCAGKAIAIARBCGoQpQYLIAQEQCAGKAIAGiAEEDELCwsgFCADQRBqIAIQdyADQR9qEK4CIANBIGokACAUEG0hAyANQSBqJAAgA0EEaiALEKYGIAsQ0QEgBUEgaiQAIAkgEygCAEEEaiALQRxqEKkGIgJHBEAgCSgCACEGIAkoAgQhAyMAQRBrIgUkAAJAIAYgAxDwAyIHIAIQswFNBEAgBSADNgIMIAIQbCAHTyIPBH8gAwUgBSAGNgIMIAIQbCEEIAUgBSgCDCAEQQxsajYCDCAFKAIMCyEEIAIoAgAhDSAEIAZrIQ4gBCAGRwRAIA0gBiAOENQCCyAPRQRAIAIgBSgCDCADIAcgAhBsaxD5BQwCCyACEGwhAyACIA0gDkEMbUEMbGoQiAcgAiADEKsDDAELIAIoAgAEQCACEGwhBCACEMkEIAIgBBCrAyACEDIaIAIoAgAhBCACELMBGiAEEDEgAhAyQQA2AgAgAkIANwIACyACIAcQ5QYhBCACEKAEIARJBEAQvgIACyACIAIQMiAEEOMGIg02AgAgAiANNgIEIAIQMiANIARBDGxqNgIAIAJBABCfBCACIAYgAyAHEPkFCyAFQRBqJAALIAgQ0QEgC0EgaiQAIAwQqQUgCRDVBCAKEN8DIAFBAWohASARQQFqIREMAgsCQCAEQYQBbCIGIAAoAhxqIgIoAoABIAAoAiQgBWoiAygCACABQQxsaigCCEcNACACKAJ8IAMoAghHDQBBACEDIBBBCGoiCCACKgIAIAIqAgQgAioCcCACKgJ0IAIoAnhBAEcQ0gQhCwJAIAooAgQgChAyKAIASQRAIwBBEGsiByQAIAcgCkEBELMEIQIgChAyIAIoAgQgCxC5AyACIAIoAgRBFGo2AgQgAhByIAdBEGokAAwBCyMAQSBrIgckACAKEDIiAiAHQQhqIAogChB8QQFqEKwEIAoQfCACEPYGIgIoAgggCxC5AyACIAIoAghBFGo2AgggCiACEPQGIAIQ8gYgB0EgaiQACyAAKAIcIAZqIgIqAgghGiACKgIMIRsgCEMAAAAAOAIIIAggGzgCBCAIIBo4AgACQCAJKAIEIAkQMigCAEkEQCMAQRBrIgskACALIAlBARCiBCECIAkQMiACKAIEIAgQ5gYgAiACKAIEQQxqNgIEIAIQciALQRBqJAAMAQsjAEEgayILJAAgCRAyIgIgC0EIaiAJIAkQbEEBahDlBiAJEGwgAhChBCICKAIIIAgQ5gYgAiACKAIIQQxqNgIIIAkQzAIgCRAyGiACQQRqIgciCCAIKAIAIAkoAgQgCSgCACINayIIQXRtQQxsaiIONgIAIAhBAEoEQCAOIA0gCBA+GgsgCSAHEEkgCUEEaiACQQhqEEkgCRAyIAIQPBBJIAIgAigCBDYCACAJIAkQbBCfBCACKAIEIQgDQCAIIAIoAghHBEAgAigCEBogAiACKAIIQQxrNgIIDAELCyACKAIABEAgAigCEBogAigCACEIIAIQngQaIAgQMQsgC0EgaiQACwNAIANB4ABGDQEgACgCHCAGaiADakEQaiEIAkAgDCgCBCAMEDIoAgBHBEAjAEEQayILJAAgCyAMQQEQtgMhAiAMEDIgAigCBCAIELUDIAIgAigCBEEBajYCBCACEHIgC0EQaiQADAELIwBBIGsiCyQAIAwQMiICIAtBCGogDCAMEI0BQQFqELQDIAwQjQEgAhCdBCICKAIIIAgQtQMgAiACKAIIQQFqNgIIIAwgAhCcBCACEJsEIAtBIGokAAsgA0EBaiEDDAALAAsgBEEBaiEEDAALAAsACwALDAELIBBB0ABqJAAgFw8LQQBBA0HozgBBABA2QQEQAQALtAEBBH8jAEEQayIFJAADQAJAIAIgA0wNACAAKAIYIgQgACgCHCIGTwRAIAAgASgCACAAKAIAKAI0EQMAQX9GDQEgA0EBaiEDIAFBBGohAQUgBSAGIARrQQJ1NgIMIAUgAiADazYCCCAFQQxqIAVBCGoQnAIhBCAAKAIYIAEgBCgCACIEEMwBIAAgBEECdCIGIAAoAhhqNgIYIAMgBGohAyABIAZqIQELDAELCyAFQRBqJAAgAwssACAAIAAoAgAoAiQRAABBf0YEQEF/DwsgACAAKAIMIgBBBGo2AgwgACgCAAvKAQEEfyMAQRBrIgQkAANAAkAgAiAFTA0AAn8gACgCDCIDIAAoAhAiBkkEQCAEQf////8HNgIMIAQgBiADa0ECdTYCCCAEIAIgBWs2AgQgBEEMaiAEQQhqIARBBGoQnAIQnAIhAyABIAAoAgwgAygCACIDEMwBIAAgA0ECdCIGIAAoAgxqNgIMIAEgBmoMAQsgACAAKAIAKAIoEQAAIgNBf0YNASABIAM2AgBBASEDIAFBBGoLIQEgAyAFaiEFDAELCyAEQRBqJAAgBQsMACAAEMwDGiAAEDELrwEBBH8jAEEQayIFJAADQAJAIAIgBEwNACAAKAIYIgMgACgCHCIGTwRAIAAgASwAABDDASAAKAIAKAI0EQMAQX9GDQEgBEEBaiEEIAFBAWohAQUgBSAGIANrNgIMIAUgAiAEazYCCCAFQQxqIAVBCGoQnAIhAyAAKAIYIAEgAygCACIDEM0BIAAgAyAAKAIYajYCGCADIARqIQQgASADaiEBCwwBCwsgBUEQaiQAIAQLLwAgACAAKAIAKAIkEQAAQX9GBEBBfw8LIAAgACgCDCIAQQFqNgIMIAAsAAAQwwELwAEBBH8jAEEQayIEJAADQAJAIAIgBUwNAAJAIAAoAgwiAyAAKAIQIgZJBEAgBEH/////BzYCDCAEIAYgA2s2AgggBCACIAVrNgIEIARBDGogBEEIaiAEQQRqEJwCEJwCIQMgASAAKAIMIAMoAgAiAxDNASAAIAAoAgwgA2o2AgwMAQsgACAAKAIAKAIoEQAAIgNBf0YNASABIAMQ0gM6AABBASEDCyABIANqIQEgAyAFaiEFDAELCyAEQRBqJAAgBQsMACAAENMDGiAAEDELVAECfyABIAAoAlQiASABQQAgAkGAAmoiAxDcAyIEIAFrIAMgBBsiAyACIAIgA0sbIgIQPhogACABIANqIgM2AlQgACADNgIIIAAgASACajYCBCACC6kBAQR/IAAoAlQiAygCBCIFIAAoAhQgACgCHCIGayIEIAQgBUsbIgQEQCADKAIAIAYgBBA+GiADIAMoAgAgBGo2AgAgAyADKAIEIARrIgU2AgQLIAMoAgAhBCAFIAIgAiAFSxsiBQRAIAQgASAFED4aIAMgAygCACAFaiIENgIAIAMgAygCBCAFazYCBAsgBEEAOgAAIAAgACgCLCIBNgIcIAAgATYCFCACCykAIAEgASgCAEEHakF4cSIBQRBqNgIAIAAgASkDACABKQMIENYDOQMAC8cYAxJ/AXwCfiMAQbAEayILJAAgC0EANgIsAkAgAb0iGUIAUwRAQQEhEEG+6AEhEyABmiIBvSEZDAELIARBgBBxBEBBASEQQcHoASETDAELQcToAUG/6AEgBEEBcSIQGyETIBBFIRULAkAgGUKAgICAgICA+P8Ag0KAgICAgICA+P8AUQRAIABBICACIBBBA2oiAyAEQf//e3EQiQEgACATIBAQgwEgAEHc+gFB9JYCIAVBIHEiBRtBiP4BQYyaAiAFGyABIAFiG0EDEIMBIABBICACIAMgBEGAwABzEIkBIAMgAiACIANIGyEJDAELIAtBEGohEQJAAn8CQCABIAtBLGoQigUiASABoCIBRAAAAAAAAAAAYgRAIAsgCygCLCIGQQFrNgIsIAVBIHIiDkHhAEcNAQwDCyAFQSByIg5B4QBGDQIgCygCLCEKQQYgAyADQQBIGwwBCyALIAZBHWsiCjYCLCABRAAAAAAAALBBoiEBQQYgAyADQQBIGwshDCALQTBqQQBBoAIgCkEASBtqIg0hBwNAIAcCfyABRAAAAAAAAPBBYyABRAAAAAAAAAAAZnEEQCABqwwBC0EACyIDNgIAIAdBBGohByABIAO4oUQAAAAAZc3NQaIiAUQAAAAAAAAAAGINAAsCQCAKQQBMBEAgCiEDIAchBiANIQgMAQsgDSEIIAohAwNAIANBHSADQR1IGyEDAkAgB0EEayIGIAhJDQAgA60hGkIAIRkDQCAGIBlC/////w+DIAY1AgAgGoZ8IhkgGUKAlOvcA4AiGUKAlOvcA359PgIAIAZBBGsiBiAITw0ACyAZpyIGRQ0AIAhBBGsiCCAGNgIACwNAIAggByIGSQRAIAZBBGsiBygCAEUNAQsLIAsgCygCLCADayIDNgIsIAYhByADQQBKDQALCyADQQBIBEAgDEEZakEJbkEBaiEPIA5B5gBGIRIDQEEAIANrIgNBCSADQQlIGyEJAkAgBiAITQRAIAgoAgAhBwwBC0GAlOvcAyAJdiEUQX8gCXRBf3MhFkEAIQMgCCEHA0AgByADIAcoAgAiFyAJdmo2AgAgFiAXcSAUbCEDIAdBBGoiByAGSQ0ACyAIKAIAIQcgA0UNACAGIAM2AgAgBkEEaiEGCyALIAsoAiwgCWoiAzYCLCANIAggB0VBAnRqIgggEhsiByAPQQJ0aiAGIAYgB2tBAnUgD0obIQYgA0EASA0ACwtBACEDAkAgBiAITQ0AIA0gCGtBAnVBCWwhA0EKIQcgCCgCACIJQQpJDQADQCADQQFqIQMgCSAHQQpsIgdPDQALCyAMQQAgAyAOQeYARhtrIA5B5wBGIAxBAEdxayIHIAYgDWtBAnVBCWxBCWtIBEBBBEGkAiAKQQBIGyALaiAHQYDIAGoiCUEJbSIPQQJ0akHQH2shCkEKIQcgCSAPQQlsayIJQQdMBEADQCAHQQpsIQcgCUEBaiIJQQhHDQALCwJAIAooAgAiEiASIAduIg8gB2xrIglFIApBBGoiFCAGRnENAAJAIA9BAXFFBEBEAAAAAAAAQEMhASAHQYCU69wDRyAIIApPcg0BIApBBGstAABBAXFFDQELRAEAAAAAAEBDIQELRAAAAAAAAOA/RAAAAAAAAPA/RAAAAAAAAPg/IAYgFEYbRAAAAAAAAPg/IAkgB0EBdiIURhsgCSAUSRshGAJAIBUNACATLQAAQS1HDQAgGJohGCABmiEBCyAKIBIgCWsiCTYCACABIBigIAFhDQAgCiAHIAlqIgM2AgAgA0GAlOvcA08EQANAIApBADYCACAIIApBBGsiCksEQCAIQQRrIghBADYCAAsgCiAKKAIAQQFqIgM2AgAgA0H/k+vcA0sNAAsLIA0gCGtBAnVBCWwhA0EKIQcgCCgCACIJQQpJDQADQCADQQFqIQMgCSAHQQpsIgdPDQALCyAKQQRqIgcgBiAGIAdLGyEGCwNAIAYiByAITSIJRQRAIAdBBGsiBigCAEUNAQsLAkAgDkHnAEcEQCAEQQhxIQoMAQsgA0F/c0F/IAxBASAMGyIGIANKIANBe0pxIgobIAZqIQxBf0F+IAobIAVqIQUgBEEIcSIKDQBBdyEGAkAgCQ0AIAdBBGsoAgAiDkUNAEEKIQlBACEGIA5BCnANAANAIAYiCkEBaiEGIA4gCUEKbCIJcEUNAAsgCkF/cyEGCyAHIA1rQQJ1QQlsIQkgBUFfcUHGAEYEQEEAIQogDCAGIAlqQQlrIgZBACAGQQBKGyIGIAYgDEobIQwMAQtBACEKIAwgAyAJaiAGakEJayIGQQAgBkEAShsiBiAGIAxKGyEMC0F/IQkgDEH9////B0H+////ByAKIAxyIhIbSg0BIAwgEkEAR2pBAWohDgJAIAVBX3EiFUHGAEYEQCADIA5B/////wdzSg0DIANBACADQQBKGyEGDAELIBEgAyADQR91IgZzIAZrrSAREJ4CIgZrQQFMBEADQCAGQQFrIgZBMDoAACARIAZrQQJIDQALCyAGQQJrIg8gBToAACAGQQFrQS1BKyADQQBIGzoAACARIA9rIgYgDkH/////B3NKDQILIAYgDmoiAyAQQf////8Hc0oNASAAQSAgAiADIBBqIgUgBBCJASAAIBMgEBCDASAAQTAgAiAFIARBgIAEcxCJAQJAAkACQCAVQcYARgRAIAtBEGoiBkEIciEDIAZBCXIhCiANIAggCCANSxsiCSEIA0AgCDUCACAKEJ4CIQYCQCAIIAlHBEAgBiALQRBqTQ0BA0AgBkEBayIGQTA6AAAgBiALQRBqSw0ACwwBCyAGIApHDQAgC0EwOgAYIAMhBgsgACAGIAogBmsQgwEgCEEEaiIIIA1NDQALIBIEQCAAQZWmAkEBEIMBCyAMQQBMIAcgCE1yDQEDQCAINQIAIAoQngIiBiALQRBqSwRAA0AgBkEBayIGQTA6AAAgBiALQRBqSw0ACwsgACAGIAxBCSAMQQlIGxCDASAMQQlrIQYgCEEEaiIIIAdPDQMgDEEJSiEDIAYhDCADDQALDAILAkAgDEEASA0AIAcgCEEEaiAHIAhLGyEJIAtBEGoiBkEIciEDIAZBCXIhDSAIIQcDQCANIAc1AgAgDRCeAiIGRgRAIAtBMDoAGCADIQYLAkAgByAIRwRAIAYgC0EQak0NAQNAIAZBAWsiBkEwOgAAIAYgC0EQaksNAAsMAQsgACAGQQEQgwEgBkEBaiEGIAogDHJFDQAgAEGVpgJBARCDAQsgACAGIAwgDSAGayIGIAYgDEobEIMBIAwgBmshDCAHQQRqIgcgCU8NASAMQQBODQALCyAAQTAgDEESakESQQAQiQEgACAPIBEgD2sQgwEMAgsgDCEGCyAAQTAgBkEJakEJQQAQiQELIABBICACIAUgBEGAwABzEIkBIAUgAiACIAVIGyEJDAELIBMgBUEadEEfdUEJcWohDAJAIANBC0sNAEEMIANrIQZEAAAAAAAAMEAhGANAIBhEAAAAAAAAMECiIRggBkEBayIGDQALIAwtAABBLUYEQCAYIAGaIBihoJohAQwBCyABIBigIBihIQELIBEgCygCLCIGIAZBH3UiBnMgBmutIBEQngIiBkYEQCALQTA6AA8gC0EPaiEGCyAQQQJyIQogBUEgcSEIIAsoAiwhByAGQQJrIg0gBUEPajoAACAGQQFrQS1BKyAHQQBIGzoAACAEQQhxIQYgC0EQaiEHA0AgByIFAn8gAZlEAAAAAAAA4EFjBEAgAaoMAQtBgICAgHgLIgdBkIwDai0AACAIcjoAACAGIANBAEpyRSABIAe3oUQAAAAAAAAwQKIiAUQAAAAAAAAAAGFxIAVBAWoiByALQRBqa0EBR3JFBEAgBUEuOgABIAVBAmohBwsgAUQAAAAAAAAAAGINAAtBfyEJQf3///8HIAogESANayIFaiIGayADSA0AIABBICACIAYCfwJAIANFDQAgByALQRBqayIIQQJrIANODQAgA0ECagwBCyAHIAtBEGprIggLIgdqIgMgBBCJASAAIAwgChCDASAAQTAgAiADIARBgIAEcxCJASAAIAtBEGogCBCDASAAQTAgByAIa0EAQQAQiQEgACANIAUQgwEgAEEgIAIgAyAEQYDAAHMQiQEgAyACIAIgA0gbIQkLIAtBsARqJAAgCQsEAEIACwQAQQALCQAgACgCPBAMC9cBAQR/IwBBIGsiBCQAIAQgATYCECAEIAIgACgCMCIDQQBHazYCFCAAKAIsIQYgBCADNgIcIAQgBjYCGEEgIQMCQAJAIAAgACgCPCAEQRBqQQIgBEEMahAfEIcDBH9BIAUgBCgCDCIDQQBKDQFBIEEQIAMbCyAAKAIAcjYCAAwBCyAEKAIUIgYgAyIFTw0AIAAgACgCLCIDNgIEIAAgAyAFIAZrajYCCCAAKAIwBEAgACADQQFqNgIEIAEgAmpBAWsgAy0AADoAAAsgAiEFCyAEQSBqJAAgBQvYAgEHfyMAQSBrIgMkACADIAAoAhwiBDYCECAAKAIUIQUgAyACNgIcIAMgATYCGCADIAUgBGsiATYCFCABIAJqIQUgA0EQaiEBQQIhBwJ/AkACQAJAIAAoAjwgAUECIANBDGoQDRCHAwRAIAEhBAwBCwNAIAUgAygCDCIGRg0CIAZBAEgEQCABIQQMBAsgASAGIAEoAgQiCEsiCUEDdGoiBCAGIAhBACAJG2siCCAEKAIAajYCACABQQxBBCAJG2oiASABKAIAIAhrNgIAIAUgBmshBSAAKAI8IAQiASAHIAlrIgcgA0EMahANEIcDRQ0ACwsgBUF/Rw0BCyAAIAAoAiwiATYCHCAAIAE2AhQgACABIAAoAjBqNgIQIAIMAQsgAEEANgIcIABCADcDECAAIAAoAgBBIHI2AgBBACAHQQJGDQAaIAIgBCgCBGsLIQEgA0EgaiQAIAELRgEBfyAAKAI8IQMjAEEQayIAJAAgAyABpyABQiCIpyACQf8BcSAAQQhqEBcQhwMhAiAAKQMIIQEgAEEQaiQAQn8gASACGwsGAEGImQQLJAEBf0H8mAQoAgAiAARAA0AgACgCABEOACAAKAIEIgANAAsLCwoAIAAoAgQQjAULnwEBBH8gA0EASgRAIAAoAnAhAiAAKALkAygCGCEHA0AgAgRAIAEgBUECdGooAgAhACACIQYDQCAHIAAtAABBAXZB/ABxaigCACAALQABQQR0QcAfcWogAC0AAkECdkE+cWoiBCAELwEAIgQgBEEBaiIEIAQgBEH//wNxRxs7AQAgAEEDaiEAIAZBAWsiBg0ACwsgBUEBaiIFIANHDQALCwv+CgEafyAAIAAoAuQDIhMoAhA2AogBIABBASATKAIUIghBBXQgACgCBCgCABEEACILQoCAgIDwAzcCECALQoCAgIDwBzcCCCALQoCAgIDwAzcCACAAIAsQ3gNBASEKAkACQCAIQQJIDQADQAJAAkACQCAIIApBAXROBEAgCkEBcSEEIA8NAUEAIQJBACEDIAshAQwCC0EAIQlBACECQQAhAyALIQEgD0EDTwRAIApB/P///wdxIQdBACEEA0AgAUHgAGogAUFAayABQSBqIAEgAiABKAIYIgIgA0oiBRsgASgCOCIGIAIgAyAFGyICSiIDGyABKAJYIgUgBiACIAMbIgJKIgMbIAEoAngiBiAFIAIgAxsiA0oiBRshAiAGIAMgBRshAyABQYABaiEBIARBBGoiBCAHRw0ACwsgCkEDcSIERQ0CA0AgASACIAEoAhgiByADSiIFGyECIAcgAyAFGyEDIAFBIGohASAJQQFqIgkgBEcNAAsMAgsgCkH+////B3EhB0EAIQJBACEDIAshAUEAIQkDQCADIAEoAhwiBUgEQCABIAIgASgCGEEASiIGGyECIAUgAyAGGyEDCyADIAEoAjwiBUgEQCABQSBqIAIgASgCOEEASiIGGyECIAUgAyAGGyEDCyABQUBrIQEgCUECaiIJIAdHDQALCyAERQ0AIAEoAhwgA0wNACABIAIgASgCGEEAShshAgsgAkUNASAL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QQd0IARqIQQgASgCDCADbEEHdCACaiECCyABKAIsIgENAAsLAkAgAkEATA0AQYCU69wDIQMgBSgCTBogBCAEIgFKBEAgASACbSIBQQEgAUEBShshAwsgBSgCRCIBBEADQCABKAIARQRAAkAgAyABKAIEIgJBAWsgASgCDCIEbkEBak4EQCABIAI2AhAMAQsgASADIARsNgIQIAAgASgCCCACbBCqBSABQQE2AiggASgCECECCyABIABBASABKAIIIAIQqwU2AgAgBSgCUCECIAFBADYCJCABQgA3AhggASACNgIUCyABKAIsIgENAAsLIAUoAkgiAUUNAANAIAEoAgBFBEACQCADIAEoAgQiAkEBayABKAIMIgRuQQFqTgRAIAEgAjYCEAwBCyABIAMgBGw2AhAgACACIAEoAghsQQd0EKoFIAFBATYCKCABKAIQIQILIAEgAEEBIAEoAgggAhCsBTYCACAFKAJQIQIgAUEANgIkIAFCADcCGCABIAI2AhQLIAEoAiwiAQ0ACwsL7QYBB38CQAJAIAIgA2oiCCABKAIESw0AIAEoAgwgA0kNACABKAIADQELIAAoAgAiA0EXNgIUIAAgAygCABEBAAsCQCACIAEoAhgiA08EQCAIIAEoAhAgA2pNDQELIAEoAihFBEAgACgCACIDQccANgIUIAAgAygCABEBAAsgASgCJARAAkAgASgCECIHQQBMDQAgAUEwaiEJIAEoAggiCiABKAIYbCEFIAEoAhQhBkEAIQMDQCAGIAcgA2siByAGIAdIGyIGIAEoAhwgASgCGCADaiIHayILIAYgC0gbIgYgASgCBCAHayIHIAYgB0gbIgZBAEwNASAAIAkgASgCACADQQJ0aigCACAFIAYgCmwiBiABKAI0EQUAIAUgBmohBSABKAIQIgcgASgCFCIGIANqIgNKDQALCyABQQA2AiQLQQAhAyABIAIgCCABKAIQIgdrIgVBACAFQQBKGyABKAIYIAJJGyIFNgIYIAdBAEwNACABQTBqIQkgASgCCCIKIAVsIQUgASgCFCEGA0AgBiAHIANrIgcgBiAHSBsiBiABKAIcIAEoAhggA2oiB2siCyAGIAtIGyIGIAEoAgQgB2siByAGIAdIGyIGQQBMDQEgACAJIAEoAgAgA0ECdGooAgAgBSAGIApsIgYgASgCMBEFACAFIAZqIQUgASgCECIHIAEoAhQiBiADaiIDSg0ACwsCQAJAAkAgASgCHCIFIAhPDQACQAJAAkAgAiAFSwRAIAIhBSAERQ0BIAAoAgAiA0EXNgIUIAAgAygCABEBAAwCCyAEDQELIAEoAiANASAAKAIAIgNBFzYCFCAAIAMoAgARAQAMBAsgASAINgIcIAEoAiBFDQILIAUgASgCGCIAayIDIAggAGsiBk8NACABKAIIIQAgCCAFQX9zaiEHIAggBWtBA3EiCARAQQAhBQNAIAEoAgAgA0ECdGooAgBBACAAEDkaIANBAWohAyAFQQFqIgUgCEcNAAsLIAdBA0kNAANAIANBAnQiBSABKAIAaigCAEEAIAAQORogBSABKAIAaigCBEEAIAAQORogBSABKAIAaigCCEEAIAAQORogBSABKAIAaigCDEEAIAAQORogA0EEaiIDIAZHDQALCyAERQ0BCyABQQE2AiQLIAEoAgAgAiABKAIYa0ECdGoL9gYBB38CQAJAIAIgA2oiCCABKAIESw0AIAEoAgwgA0kNACABKAIADQELIAAoAgAiA0EXNgIUIAAgAygCABEBAAsCQCACIAEoAhgiA08EQCAIIAEoAhAgA2pNDQELIAEoAihFBEAgACgCACIDQccANgIUIAAgAygCABEBAAsgASgCJARAAkAgASgCECIHQQBMDQAgAUEwaiEJIAEoAghBB3QiCiABKAIYbCEFIAEoAhQhBkEAIQMDQCAGIAcgA2siByAGIAdIGyIGIAEoAhwgASgCGCADaiIHayILIAYgC0gbIgYgASgCBCAHayIHIAYgB0gbIgZBAEwNASAAIAkgASgCACADQQJ0aigCACAFIAYgCmwiBiABKAI0EQUAIAUgBmohBSABKAIQIgcgASgCFCIGIANqIgNKDQALCyABQQA2AiQLQQAhAyABIAIgCCABKAIQIgdrIgVBACAFQQBKGyABKAIYIAJJGyIFNgIYIAdBAEwNACABQTBqIQkgASgCCEEHdCIKIAVsIQUgASgCFCEGA0AgBiAHIANrIgcgBiAHSBsiBiABKAIcIAEoAhggA2oiB2siCyAGIAtIGyIGIAEoAgQgB2siByAGIAdIGyIGQQBMDQEgACAJIAEoAgAgA0ECdGooAgAgBSAGIApsIgYgASgCMBEFACAFIAZqIQUgASgCECIHIAEo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AgQoAhwRCgAiBzYCDCAEKAIYIQYLIAAgASACIAMgByAIIAQoAhAgACgC3AMoAgQRDAAgBiAEKAIYIgNJBH8gACAEKAIMIAZBAnRqQQAgAyAGayIBIAAoAuQDKAIEEQcAIAUgBSgCACABajYCACAEKAIYBSADCyAEKAIQIgBPBEAgBEEANgIYIAQgBCgCFCAAajYCFAsLjwEBBH8jAEEQayIHJAAgACgCyAMiCCgCECEJIAUoAgAhCiAHQQA2AgwgACABIAIgAyAIKAIMIAdBDGogBiAKayIBIAkgASAJSRsgACgC3AMoAgQRDAAgACAIKAIMIAQgBSgCAEECdGogBygCDCAAKALkAygCBBEHACAFIAUoAgAgBygCDGo2AgAgB0EQaiQAC9wBAQF/IAAoAsgDIQICQAJAAkACQAJAIAEOBAADAgEDCyAAKAJUBEAgAkHQATYCBCACKAIMDQQgAiAAIAIoAghBACACKAIQQQEgACgCBCgCHBEKADYCDAwECyACIAAoAtwDKAIENgIEDAMLIAIoAghFBEAgACgCACIBQQM2AhQgACABKAIAEQEACyACQdEBNgIEDAILIAIoAghFBEAgACgCACIBQQM2AhQgACABKAIAEQEACyACQdIBNgIEDAELIAAoAgAiAUEDNgIUIAAgASgCABEBAAsgAkIANwIUCzwAIAAgASACKAIAIAQgBSgCAEECdGogACgC3AMoAgwRBwAgBSAFKAIAQQFqNgIAIAIgAigCAEEBajYCAAvCAwEMfyACQQJ0IgIgASgCCGooAgAhBSABKAIEIAJqKAIAIQYgASgCACACaigCACEHIAMoAgAhASAAKALQAiECIAAoAtwDIgMoAhwhCCADKAIYIQsgAygCFCEMIAMoAhAhDSAAKAJwIgNBAk8EfyADQQF2IQMDQCAMIAYtAABBAnQiBGooAgAhDiALIAUtAABBAnQiCWooAgAhCiAEIAhqKAIAIQ8gASACIAkgDWooAgAiCSAHLQAAIgRqai0AADoAACABIAIgBCAKIA9qQRB1Igpqai0AADoAASABIAIgBCAOamotAAA6AAIgASACIAkgBy0AASIEamotAAA6AAMgASACIAQgCmpqLQAAOgAEIAEgAiAEIA5qai0AADoABSABQQZqIQEgB0ECaiEHIAVBAWohBSAGQQFqIQYgA0EBayIDDQALIAAoAnAFIAMLQQFxBEAgDCAGLQAAQQJ0IgBqKAIAIQMgCyAFLQAAQQJ0IgVqKAIAIQYgACAIaigCACEIIAEgAiAHLQAAIgAgBSANaigCAGpqLQAAOgAAIAEgAiAAIAYgCGpBEHVqai0AADoAASABIAIgACADamotAAA6AAILC4sCAQN/IwBBEGsiCCQAAkACQCAAKALcAyIHKAIkBEAgB0EgakEAIAQgBSgCAEECdGpBAEEBIAcoAigQkgMgB0EANgIkIAUgBSgCAEEBajYCACAHIAcoAixBAWs2AiwMAQsgBygCLCEJIAggBCAFKAIAIgNBAnRqIgQoAgA2AgggCAJ/IAkgBiADayIDIAMgCUsbIgNBAiADQQJJGyIDQQJPBEAgBCgCBAwBCyAHQQE2AiQgBygCIAs2AgwgACABIAIoAgAgCEEIaiAHKAIMEQcAIAcoAiQhACAFIAUoAgAgA2o2AgAgByAHKAIsIANrNgIsIAANAQsgAiACKAIAQQFqNgIACyAIQRBqJAALhgUBDn8gAkECdCIFIAEoAghqKAIAIQogASgCBCAFaigCACELIAEoAgAgAkEDdGoiASgCACEHIAEoAgQhCCADKAIEIQIgAygCACEDIAAoAtACIQQgACgC3AMiASgCHCEOIAEoAhghDyABKAIUIRAgASgCECERIAAoAnAiAUECTwR/IAFBAXYhCQNAIBAgCy0AAEECdCIBaigCACEMIA8gCi0AAEECdCIGaigCACEFIAEgDmooAgAhASADIAQgBiARaigCACINIActAAAiBmpqLQAAOgAAIAMgBCAGIAEgBWpBEHUiBWpqLQAAOgABIAMgBCAGIAxqai0AADoAAiADIAQgDSAHLQABIgFqai0AADoAAyADIAQgASAFamotAAA6AAQgAyAEIAEgDGpqLQAAOgAFIAIgBCANIAgtAAAiAWpqLQAAOgAAIAIgBCABIAVqai0AADoAASACIAQgASAMamotAAA6AAIgAiAEIA0gCC0AASIBamotAAA6AAMgAiAEIAEgBWpqLQAAOgAEIAIgBCABIAxqai0AADoABSACQQZqIQIgCEECaiEIIANBBmohAyAHQQJqIQcgCkEBaiEKIAtBAWohCyAJQQFrIgkNAAsgACgCcAUgAQtBAXEEQCAQIAstAABBAnQiAGooAgAhCSAPIAot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Qe4ANgIUDAQLIAAoAgAiASAFNgIYIAFB7wA2AhQMAwsgACgCACIBIAU2AhggAUHwADYCFAwCCyAAKAIAIgFB2wA2AhQgASACLQAHNgIYIAAoAgAgBTYCHAwBCyAAKAIAIgEgBTYCGCABQc8ANgIUCyAAQQEgACgCACgCBBECAAsMAgsCQCABQQxJDQAgAi0AAkHBAEcNACACLQADQeQARw0AIAItAARB7wBHDQAgAi0ABUHiAEcNACACLQAGQeUARw0AIAItAAghAyACLQAHIQcgAi0ACiEJIAItAAkhCiACLQAMIQsgAi0ACyENIAItAA0hBSAAKAIAIgFBzgA2AhQgASAFNgIkIAEgCyANQQh0cjYCICABIAkgCkEIdHI2AhwgASADIAdBCHRyNgIYIABBASABKAIEEQIAIAAgBToArAIgAEEBNgKoAgwCCyAAKAIAIgEgBTYCGCABQdAANgIUIABBASAAKAIAKAIEEQIADAELIAAoAgAiASADNgIYIAFBxgA2AhQgACAAKAIAKAIAEQEACyAGIAQ2AgQgBiAINgIAQQEhBCAMQQBMDQAgACAMIAAoAhgoAhARAgALIAJBEGokACAECzYAIABBADYC2AEgAEEANgK4AyAAQQA2ApABIAAoAtADIgBBADYCpAEgAEEANgIYIABCADcCDAuGOwEPfyMAQaACayIJJAAgACgCuAMhAQNAAkACQAJAIAENACAAKALQAygCDEUEQCAAKAIYIgIoAgQiAUUEQCAAIAIoAgwRAABFBEBBACEBDAQLIAIoAgQhAQsgAigCACIDLQAAIQUgAUEBayIEBH8gA0EBagUgACACKAIMEQAARQRAQQAhAQwECyACKAIEIQQgAigCAAsiAUEBaiEDIAVB/wFGIAEtAAAiAUHYAUZxRQRAIAAoAgAiBiAFNgIYIAZBNzYCFCAAKAIAIAE2AhwgACAAKAIAKAIAEQEACyAAIAE2ArgDIAIgBEEBazYCBCACIAM2AgAMAQsgABDjA0UEQEEAIQEMAgsgACgCuAMhAQsCQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAIAFBAWsO/gEPERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERIBAgUJBQUFBQMEBQgFBQUPDw8PDw8PDwAHBgoQCxERDQ0NDQ0NDQ0NDQ0NDQ0NDRERERERERERDBERERERDhELIAAoAgAiAkHoADYCFCAAQQEgAigCBBECACAAKALQAyIBKAIMBEAgACgCACICQcAANgIUIAAgAigCABEBACAAKALQAyEBCyAAQgA3AOgBIABCADcA8AEgAEKBgoSIkKDAgAE3AIACIABCgYKEiJCgwIABNwD4ASAAQoWKlKjQoMGCBTcAkAIgAEKFipSo0KDBggU3AIgCIABCADcDsAIgAEEANgIoIABCADcDmAIgAEEAOgCsAiAAQoGABDcCpAIgAEEAOgCiAiAAQYECOwGgAiABQQE2AgwMFAtBACEBIABBAEEAQQAQ2AINEwwSC0EAIQEgAEEAQQFBABDYAg0SDBELQQAhASAAQQBBAEEBENgCDREMEAtBACEBIABBAEEBQQEQ2AINEAwPCyAAKAIAIgIgATYCGCACQT82AhQgACAAKAIAKAIAEQEADA8LIAAoAhgiBigCBCEBIAYoAgAhAyAAKALQAygCEEUEQCAAKAIAIgJBPDYCFCACQRhqQei4AkHQABA+GiAAIAAoAgAoAgARAQALIAFFBEAgACAGKAIMEQAARQRAQQAhAQwPCyAGKAIAIQMgBigCBCEBCyADLQAAIQUgAUEBayICBH8gA0EBagUgACAGKAIMEQAARQRAQQAhAQwPCyAGKAIEIQIgBigCAAsiBC0AACEBIAJBAWsiAwR/IARBAWoFIAAgBigCDBEAAEUEQEEAIQEMDwsgBigCBCEDIAYoAgALIQQgACgCACICIAQtAAAiCzYCGCACQekANgIUQQEhAiAAQQEgACgCACgCBBECAAJAAkACQCALQQF0QQZqIAVBCHQgAXJHIAtBBEtyDQAgCwRAIAAgCzYC1AIgBEEBaiEKIANBAWshBQwCCyAAKALgAUUNACAAIAs2AtQCIARBAWohCiADQQFrIQUMAgsgACgCACIBQQw2AhQgACAB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AwR/IAJBAWoFIAAgASgCDBEAAEUEQEEAIQEMCwsgASgCBCEDIAEoAgALIgVBAWohAiADQQFrIQMgBS0AACAEQQh0ckH/AUcNACADRQRAIAAgASgCDBEAAEUEQEEAIQEMCwsgASgCBCEDIAEoAgAhAgsgAkEBaiEEIANBAWshAyACLQAAQQNHBEAgBCECDAELIANFBEAgACABKAIMEQAARQRAQQAhAQwLCyABKAIEIQMgASgCACEECyAEQQFqIQIgA0EBayEDIAAoAtgBIgcoAlggBC0AAEcNACADRQRAIAAgASgCDBEAAEUEQEEAIQEMCwsgACgC2AEhByABKAIEIQMgASgCACECCyACQQFqIQQgA0EBayEDIAcoAgAgAi0AAEcEQCAEIQIMAQsgA0UEQCAAIAEoAgwRAABFBEBBACEBDAsLIAAoAtgBIQcgASgCBCEDIAEoAgAhBAsgBEEBaiECIANBAWshAyAHKAKwASAELQAARw0AIANFBEAgACABKAIMEQAARQRAQQAhAQwLCyABKAIEIQMgASgCACECCyACQQFqIQQgA0EBayEDIAItAABBgAFHBEAgBCECDAELIANFBEAgACABKAIMEQAARQRAQQAhAQwLCyABKAIEIQMgASgCACEECyAELQAAIQUgA0EBayIDBH8gBEEBagUgACABKAIMEQAARQRAQQAhAQwLCyABKAIEIQMgASgCAAsiBEEBaiECIANBAWshAyAELQAAIAVBCHRyDQAgA0UEQCAAIAEoAgwRAABFBEBBACEBDAsLIAEoAgQhAyABKAIAIQILIAItAAAhBCADQQFrIgMEfyACQQFqBSAAIAEoAgwRAABFBEBBACEBDAsLIAEoAgQhAyABKAIACyIFQQFqIQIgA0EBayEDIAUtAAAgBEEIdHINACADRQRAIAAgASgCDBEAAEUEQEEAIQEMCwsgASgCBCEDIAEoAgAhAgsgAkEBaiEEIANBAWshAyACLQAABEAgBCECDAELIANFBEAgACABKAIMEQAARQRAQQAhAQwLCyABKAIEIQMgASgCACEECyAELQAAIQUgA0EBayIDBH8gBEEBagUgACABKAIMEQAARQRAQQAhAQwLCyABKAIEIQMgASgCAAsiBEEBaiECIANBAWshAyAELQAAIAVBCHRyQQFHDQAgA0UEQCAAIAEoAgwRAABF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QcsBNgIUCwJAIAAoAswDKAIQRQ0AIAAoAgghBQNAIAUEQCAAIAUoAgARAQALAkAgACAAKALMAygCABEAACIBDgMFAAIACyAAKAIIIgVFIAFBfXFBAUdyDQAgBSAFKAIEQQFqIgE2AgQgASAFKAIIIgJIDQAgBSAAKALMAiACajYCCAwACwALIAAgACgCkAE2ApgBDAELIAAoAgAiAiABNgIYIAJBFTYCFCAAIAAoAgAoAgARAQALIAAoAhRBzAFHBEAgACAAKAK8AygCABEBACAAQcwBNgIUIABBADYCjAELAkAgACgCvAMoAggEQCAAQYwBaiECIAAoAowBIQUDQCAAKAJ0IgMgBUsEQCAAKAIIIgEEQCABIAM2AgggASAFNgIEIAAgASgCABEBACAAKAKMASEFC0EAIQEgAEEAIAJBACAAKALAAygCBBEHACAFIAAoAowBIgVHDQEMAwsgACAAKAK8AygCBBEBACAAIAAoArwDKAIAEQEAQQAhBSAAQQA2AowBIAAoArwDKAIIDQALCyAAQc4BQc0BIAAoAkQbNgIUQQEhAQsLIAEL0gEBAn8CQAJAIAAoAhQiAUHNAWtBAUsNACAAKAJADQAgACgCjAEgACgCdEkEQCAAKAIAIgFBxQA2AhQgACABKAIAEQEACyAAIAAoArwDKAIEEQEAIABB0gE2AhQMAQsCQAJAIAFBzwFrDgQAAQECAQsgAEHSATYCFAwBCyAAKAIAIgIgATYCGCACQRU2AhQgACAAKAIAKAIAEQEACwJAA0AgACgCzAMiASgCFA0BIAAgASgCABEAAA0AC0EADwsgACAAKAIYKAIYEQEAIAAQugVBAQucBgEFfyAAKAIUIgNBfnFByAFHBEAgACgCACICIAM2AhggAkEVNgIUIAAgACgCACgCABEBAAsCf0EBIQICQAJAAkACQAJAIAAoAhQiA0HIAWsOCwABBAICAgICAgMCAwsgACAAKALMAygCBBEBACAAIAAoAhgoAggRAQAgAEHJATYCFAsgACAAKALMAygCABEAACICQQFHDQIgACgCJCICIQUCQAJAAkACQCACQQFrDgQDAgABAgsgACgC2AEiAygCsAEhBEECIQUgAygCACIGQQFHIgIgAygCWCIDQQJHciAEQQNHckUEQEEDIQIMAwsgAiADQSJHckUEQEEHIQIgBEEjRg0DCyAGQdIARyADQccAR3IgBEHCAEdyRQRAQQIhAgwDCyAGQfIARyADQecAR3JFBEBBBiECIARB4gBGDQMLIAAoApwCBEBBAyECDAMLIAAoAqgCBEBBAiECAkACQCAALQCsAiIDDgIFAAELQQMhAgwECyAAKAIAIgIgAzYCGCACQfQANgIUIABBfyAAKAIAKAIEEQIAQQMhAgwDCyAAKAIAIgIgBjYCGCACQfEANgIUIAIgBDYCICACIAM2AhwgAEEBIAIoAgQRAgBBAyECDAILQQQhBSAAKAKoAkUEQEEEIQIMAgtBBCECAkACQCAALQCsAiIDDgMDAQABC0EFIQIMAgsgACgCACICIAM2AhggAkH0ADYCFCAAQX8gACgCACgCBBECAEEFIQIMAQtBACECQQAhBQsgACAFNgIsIAAgAjYCKCAAQQA2AogBIABBgAI2AmAgAEKCgICAEDcDWCAAQgE3A1AgAEKAgICAEDcDSCAAQgA3A0AgAEKAgICAgICA+D83AzggAEEANgJsIABCADcCZCAAQcoBNgIUIAAgACgCrAMiAjYCNCAAIAI2AjBBAQwDCyAAIAAoAswDKAIAEQAADAILIAAoAgAiAiADNgIYIAJBFTYCFCAAIAAoAgAoAgARAQBBACECCyACCyICQQJGBEAgAQRAIAAoAgAiAUE1NgIUIAAgASgCABEBAAsgABC6BQsgAgsHACAAELkFC6IHAQF/IABBADYCBCABQdoARwRAIAAoAgBCjYCAgKALNwIUIAAoAgAgATYCHCAAIAAoAgAoAgARAQALIAJB6ANHBEAgACgCAEKWgICAgD03AhQgACgCACACNgIcIAAgACgCACgCABEBAAsgACgCACEBIAAoAgwhAiAAQQRqQQBB5AMQORogAEEBNgIQIAAgAjYCDCAAIAE2AgAjAEEQayICJAAgAEEANgIEIAJBADYCDEHUABA3IgFFBEAgACgCAEI4NwIUIAAgACgCACgCABEBAAsgAUGAlOvcAzYCMCABQd8BNgIoIAFB4AE2AiQgAUHhATYCICABQeIBNgIcIAFB4wE2AhggAUHkATYCFCABQeUBNgIQIAFB5gE2AgwgAUHnATYCCCABQegBNgIEIAFB6QE2AgAgAUIANwI0IAFBADYCLCABQdQANgJMIAFCADcCPCABQgA3AkQgACABNgIEAkBBn5cCEI0DIgNFDQAgAkH4ADoACyACIAJBDGo2AgAgAiACQQtqNgIEIANBxpACIAIQpQFBAEwNACACKAIMIQMgAi0AC0HfAXFBzQBGBEAgAiADQegHbCIDNgIMCyABIANB6AdsNgIsCyACQRBqJAAgAEEANgK4AiAAQQA2AhggAEEANgIIIABCADcCpAEgAEIANwKsASAAQgA3ArQBIABCADcCvAEgAEIANwLEASAAQgA3AswBIAAgAEEAQawBIAAoAgQoAgARBAAiATYC0AMgAUIANwJgIAFB/AA2AhwgAUH9ADYCCCABQf4ANgIEIAFB/wA2AgAgAUEANgJoIAFB/AA2AiQgAUH8ADYCKCABQgA3AmwgAUH8ADYCLCABQfwANgIwIAFCADcCdCABQfwANgI0IAFB/AA2AjggAUIANwJ8IAFB/AA2AjwgAUEANgKEASABQUBrQfwANgIAIAFCADcCiAEgAUH8ADYCRCABQfwANgJIIAFB/AA2AkwgAUH8ADYCUCABQgA3ApABIAFB/AA2AlQgAUIANwKYASABQQA2AqABIAFB/AA2AlwgAUGAATYCICABQYABNgJYIABBADYCuAMgAEEANgKQASAAQQA2AtgBIAAoAtADIgFBADYCpAEgAUEANgIYIAFCADcCDCAAIABBAEEcIAAoAgQoAgARBAAiATYCzAMgAUEBNgIYIAFCADcCECABQfgANgIMIAFB+QA2AgggAUH6ADYCBCABQfsANgIAIABByAE2AhQLIgEBfUF/IAAqAgAgASoCAJMiAkMAAAAAXiACQwAAAABdGwsQACABIAIgAyAAKAIAEQQACz4BAn8jAEEQayIEJAAgBEEIaiIDIAEgAiAAKAIAEQYAIAMoAgAQKSADKAIAIQAgAygCABAoIARBEGokACAAC1EBAn8jAEEQayICJAAgACgCACEDIAIgACgCBCIAQQF1IAFqIgEgAEEBcQR/IAEoAgAgA2ooAgAFIAMLEQAANgIMIAIoAgwhACACQRBqJAAgAAs5AQF/IAAoAgQiBEEBdSABaiEBIAAoAgAhACABIAIgAyAEQQFxBH8gASgCACAAaigCAAUgAAsRBgALNwEBfyAAKAIEIgNBAXUgAWohASAAKAIAIQAgASACIANBAXEEfyABKAIAIABqKAIABSAACxECAAsHACAAERAACwsAIAEgAiAAETQACwsAIAEgAiAAEQIACysCAX8BfCMAQRBrIgIkACACIAEgABEaADkDCCACKwMIIQMgAkEQaiQAIAMLCwAgASACIAARFAALJwEBfyMAQRBrIgEkACABIAAREAA2AgwgASgCDCEAIAFBEGokACAACwkAIAEgABEBAAsPACABIAAoAgBqIAI2AgALDQAgASAAKAIAaigCAAsRACAAKAIAQYQBakEBEPUEAAsYAQF/QRAQWyIAQgA3AwAgAEIANwMIIAALKAEBfyMAQRBrIgMkACADIAEgAiAAEQYAIAMQwAUhACADQRBqJAAgAAs1AQF/IwBBEGsiAiQAIAIgARC/BSACIAIgABEAADYCDCACKAIMIQAgAhA4GiACQRBqJAAgAAsrAQF/IwBBEGsiAyQAIAMgASACIAARAwA2AgwgAygCDCEAIANBEGokACAACzcBAX8jAEEQayIDJAAgAyACEL8FIAMgASADIAARAwA2AgwgAygCDCEAIAMQOBogA0EQaiQAIAALKQEBfyMAQRBrIgIkACACIAEgABEAADYCDCACKAIMIQAgAkEQaiQAIAALLQEBfyMAQRBrIgQkACAEIAEgAiADIAARBAA2AgwgBCgCDCEAIARBEGokACAACx8AIAAgARDHBSIAIAIpAgg3AgggACACKQIANwIAQQELdwECfyABELgBIAJLBEAgASACEMcFIQMjAEEQayICJAAjAEEQayIBJAAgASACQQhqIgQ2AgwgAxDABSEDIAEoAgwgAzYCACABIAEoAgxBCGo2AgwgAUEQaiQAIABBqLICIAQQJzYCACACQRBqJAAPCyAAQQEQdxoLgAMBBH8gASAAELgBIgNLBEAjAEEgayIGJAACQCABIANrIgQgABAyKAIAIAAoAgRrQQR1TQRAIwBBEGsiBSQAIAUgACAEEMIFIgMoAgQhASADKAIIIQQDQCABIARGBEAgAxByIAVBEGokAAUgABAyIAEgAhCWAyADIAFBEGoiATYCBAwBCwsMAQsgABAyIQEgBkEIaiAAIAAQuAEgBGoQxgUgABC4ASABEMUFIQMjAEEQayIBJAAgASADKAIINgIAIAMoAgghBSABIANBCGo2AgggASAFIARBBHRqNgIEIAEoAgAhBANAIAEoAgQgBEcEQCADKAIQIAEoAgAgAhCWAyABIAEoAgBBEGoiBDYCAAwBCwsgARCyASABQRBqJAAgACADEMQFIAMQwwULIAZBIGokAA8LIAEgA0kEQCAAKAIAIAFBBHRqIQEgABC4ARogACABEMoFIAAoAgAaIAAoAgAgABCEAkEEdGoaIAAoAgAaIAAoAgAgABC4AUEEdGoaCwsIAEEMEFsQUgsQACAABEAgABDSBQsgABAxCwYAQfiwAguLIwIMfA1/IwBBMGsiFSQAQfCYBEHwmAQoAgAiD0EBajYCACAVIA82AiwgFUEsahBQIRYgFSgCLCEPIBYgATYC1AEgFiAANgLQASAWIA82AgAgFiAAIAFsIgBBAnQiATYCyAEgFiABEDc2AsQBIBYgABA3NgLMAQJAIBYCf0EgEDciAEUNASAAQRA2AhwgAEEyNgIEIABBADYCACAAQcgBEDciEjYCCCASRQ0BIABBoAYQNyITNgIMIBNFDQEgAEGgBhA3IhA2AhQgEEUNASAAQcAMEDciATYCECABRQ0BIABBwAwQNyIBNgIYIAFFDQFBACEBA0AgAUEyRwRAQQAhDyASIAFBAnQiEWpBADYCAAJAA0AgD0EERg0BIBMgDyARakECdCIXakGAGBA3IhQ2AgAgFEUNBSAQIBdqQYAIEDciFzYCACAPQQFqIQ8gFw0ACwwECyABQQFqIQEMAQsLIAAMAAsiADYC3AEgAEUEQEEAQQNBka0CQQAQNgsgFSgCLCEAQQAhFyMAQSBrIhMkACATIAI2AhggEyAANgIcIBNB3JUEIBNBHGoQSzYCECATEEc2AggCQAJAIBNBEGogE0EIahBPDQAgE0EcahBQIRIgE0HwlQQgE0EYahBLNgIQIBMQRzYCCCATQRBqIBNBCGoQTw0AIBJBCGogE0EYahDRBUG4ARA+IQAgEigCDCEBAkAgEigCCCICIBIoAtABRgRAIAEgEigC1AFGDQELIBMgATYCBCATIAI2AgBBAEECQaOvAiATEDYgEigC0AEhASAAKAIAIQIgACgCBCEQIAAgEigC1AEiETYCBCAAIAE2AgAgAEEIaiEPIBG3IBC3oyEDIAG3IAK3oyEEQQAhAQNAIAFBBEcEQCAPIAFBA3QiAmogBCACIA9qKwMAojkDACAAIAJqIgIgAyACKwMoojkDKCACIAIrA0g5A0ggAUEBaiEBDAELCwJAAkACQAJAAkACQCAAKAKwASIBQQFrDgQDAgEABQsgACAAKwNoOQNoIAAgACsDcDkDcCAAIAArA3g5A3ggACAAKwOAATkDgAEgACAEIAArA4gBojkDiAEgACADIAArA5ABojkDkAEgACAEIAArA5gBojkDmAEgACADIAArA6ABojkDoAEgACAAKwOoATkDqAEMAwsgACAEIAArA2iiOQNoIAAgAyAAKwNwojkDcCAAIAArA3g5A3ggACAAKwOAATkDgAEgACAAKwOIASAEIAOiozkDiAEgACAAKwOQASADIAQgBKIgA6KiozkDkAEMAgsgACAEIAArA2iiOQNoIAAgAyAAKwNwojkDcCAAIAArA3g5A3ggACAAKwOAASAEIAOiozkDgAEgACAAKwOIASADIAQgBKIgA6KiozkDiAEMAQsgACAEIAArA2iiOQNoIAAgAyAAKwNwojkDcCAAIAArA3g5A3ggACAAKwOAASAEIAOiozkDgAELIAAgATYCsAELCyASENQFIBICfyMAQSBrIg8kAEHQARA3IgEEQAJAIAEgAEG4ARA+IhAgACgCAEEeaiIBNgLAASAAKAIEIQIgEEEPNgLMASAQQQ82AsgBIBAgAkEeaiIUNgLEASAQIAEgFGxBA3QiERA3IgI2ArgBIAJFDQAgECAREDciETYCvAEgEUUNACAUQQAgFEEAShshGiABQQAgAUEAShshGCAAQegAaiEBIAAoArABIRkDQCAXIBpHBEAgF0EPa7K7IQZBACEUA0AgFCAYRwRAIBRBD2uyuyIJIQMCQCAPAnwCQAJAAkACQCAZQQFrDgQDAgEABQsgDyABKwMYIgcgAyABKwMwIgqhIAErA0AiBKIgASsDICILoyIDIAOgIAOiIAMgA6IgBiABKwM4IgyhIASiIAErAygiDaMiBCAEoqAiBaCiIAMgASsDCCAFoiAFoiABKwMAIAWiRAAAAAAAAPA/oKAiDqIgBCABKwMQIgggCKAgA6KioKAgC6IgCqA5AwggDCANIAcgB6AgA6IgBKIgBCAOoiAIIAQgBKAgBKIgBaCioKCioAwDCyABKwMQIgcgBiABKwMIoaIhBCADIAErAwAiBaEgB6IiA0QAAAAAAAAAAGIgBEQAAAAAAAAAAGJyRQRAIA8gBTkDCCABKwMIDAMLIA8gAyADIAOiIAQgBKKgIgMgASsDKEQAAAAAhNeXQaNEAAAAAABq+MCjoiADoiABKwMgRAAAAACE15fBoyADokQAAAAAAADwP6CgIgOiIAErAxiiIAWgOQMIIAQgA6IgASsDCKAMAgsgASsDECIHIAYgASsDCKGiIQQgAyABKwMAIgWhIAeiIgNEAAAAAAAAAABiIAREAAAAAAAAAABickUEQCAPIAU5AwggASsDCAwCCyAPIAMgAyADoiAEIASioCIDIAErAyBEAAAAAITXl0GjRAAAAAAAavjAo6IgA6IgASsDGEQAAAAAhNeXwaMgA6JEAAAAAAAA8D+goCIDoiAFoDkDCCAEIAOiIAErAwigDAELIAErAxAiByAGIAErAwihoiEEIAMgASsDACIFoSAHoiIDRAAAAAAAAAAAYiAERAAAAAAAAAAAYnJFBEAgDyAFOQMIIAErAwgMAQsgDyADIAErAxhEAAAAAITXl8GjIAMgA6IgBCAEoqCiRAAAAAAAAPA/oCIDoiAFoDkDCCAEIAOiIAErAwigCzkDAAsgAiAPKwMItjgCACACIA8rAwC2OAIEIAEgCSAGIA9BGGogD0EQaiAZEKIGIBEgDysDGLY4AgAgESAPKwMQtjgCBCAUQQFqIRQgEUEIaiERIAJBCGohAgwBCwsgF0EBaiEXDAELCyAPQSBqJAAgEAwCCwsMAwsiAjYCwAEgAkUEQEEAQQNB4qwCQQAQNgwBCyASAn9BoIevAxA3IgEEQAJAIAFBADYCiIevAyABQoCAgIBwNwMAIAFBAzYCmIevAyABQoCAgICAgIDwPzcDkIevAyABQoCAgIAgNwMYIAFC5AA3AxAgAUKAgICAEDcDCCABIAI2AiAgAUHkhqcCakEANgIAIAEgAigCACIPNgIkIAIoAgQhAiABQeiGpwJqQQA2AgAgAUEANgKweCABQQA2AiwgASACNgIoIAFBADYC+IqmAiABIAIgD2xBAXQQNyICNgLghqcCIAJFDQAgAUEANgLwhq8DIAFBABDOByABQX82AvSGrwMgAUEAENkGGiABBEAgAUEANgL8hq8DIAFBBzYC+IavAwsgAQwCCwsMAwsiATYC2AEgAUUEQEEAQQNBtq0CQQAQNgwBCyASKALwAyECIwBBEGsiDyQAAkAgAUUNACABKAIEIAJGDQACQAJAAkACQAJAIAJBDk0EQEEBIAJ0Qd8fcQ0BIAEgAjYCBCABIAIQ0QY2AgggASgCGA4EAgYGAwYLIA8gAjYCAEEAQQNB4MEAIA8QNgwFCyABIAI2AgQgASACENEGNgIIIAEoAhhBAWsOBAIEBAMECyABQQE2AhgMAwsgAUEENgIYDAILIAFBBDYCGAwBCyABQQM2AhgLIA9BEGokACASAn8gAEEIaiEBQQQQNyIABEAgACABEOkDIgE2AgAgAQR/IAAFIAAQMUEACwwBCwwDCyIANgLkASAARQRAQQBBA0GmgQJBABA2DAELIBIoAtwBIQECQCASKALYASIARQ0AIAAoAvCGrwMNACAAIAE2AvCGrwMLIBIoAsABIQEgEisD0AIhBCASKwPYAiEDIBJB8AJqIRdBACEQQQAhAiMAQZADayIAJAAgASgCBCEZIAEoAgAhGiAAQbACaiEPIwBB4ABrIhEkAAJAIAFBCGoiFCsDWEQAAAAAAAAAAGZFBEADQEEAIQEgEEEDRg0CA0AgAUEERwRAIAFBA3QiGCARIBBBBXQiG2pqIBQgG2ogGGorAwCaOQMAIAFBAWohAQwBCwsgEEEBaiEQDAALAAsDQEEAIQEgEEEDRg0BA0AgAUEERwRAIAFBA3QiGCARIBBBBXQiG2pqIBQgG2ogGGorAwA5AwAgAUEBaiEBDAELCyAQQQFqIRAMAAsAC0EAIRACQAN/QQAhASAQQQNGBH8gDyARKwNAIgYgESsDSCIFIBErA1AiBxCCBCIIOQNQIAAgBiAIoyIGOQOQAiAAIAUgDysDUKMiBTkDmAIgACAHIA8rA1CjIgc5A6ACIAAgESsDWCAPKwNQozkDqAIgDyAGIAUgByARKwMgIgUgESsDKCIHIBErAzAiCBD/AyIGOQMwIA8gBSAGIAArA5ACoqEiBSAHIAYgACsDmAKioSIHIAggBiAAKwOgAqKhIgYQggQiCDkDKCAAIAUgCKM5A/ABIAAgByAPKwMoozkD+AEgACAGIA8rAyijOQOAAiAPIAArA5ACIAArA5gCIAArA6ACIBErAwAiByARKwMIIgggESsDECIJEP8DIgY5AxAgDyAAKwPwASAAKwP4ASAAKwOAAiAHIAggCRD/AyIFOQMIIA8gByAFIAArA/ABoqEgBiAAKwOQAqKhIgcgCCAFIAArA/gBoqEgBiAAKwOYAqKhIgggCSAFIAArA4ACoqEgBiAAKwOgAqKhIgYQggQiBTkDACAAIAcgBaM5A9ABIAAgCCAPKwMAozkD2AEgACAGIA8rAwCjOQPgASAAIBErAzggDysDMCAAKwOoAiIGoqEgDysDKKMiBTkDiAIgACARKwMYIA8rAwggBaKhIAYgDysDEKKhIA8rAwCjOQPoAUEAIRADf0EAIQEgEEEDRgR/IBFB4ABqJABBAAUDQCABQQNHBEAgDyAQQQV0aiABQQN0aiIUIBQrAwAgDysDUKM5AwAgAUEBaiEBDAELCyAQQQFqIRAMAQsLBQNAIAFBBEcEQCAPIBBBBXRqIAFBA3RqQgA3AwAgAUEBaiEBDAELCyAQQQFqIRAMAQsLQQBOBEAgGUEBa7chBgNAIAJBBEYEQCAAKwOAAyEFQQAhAQNAQQAhAiABQQNHBEADQCACQQNHBEAgAkEDdCIPIABBgAFqIAFBGGxqaiAAQbACaiABQQV0aiAPaisDACAFozkDACACQQFqIQIMAQsLIAFBAWohAQwBCwsgAEIANwMgIABCADcDOCAAQUBrQgA3AwAgAEIANwNIIABCADcDaCAAIAQgA6AgBCADoSIFozkDUCAAIAMgA6AgBKIgBaM5A1ggACAAKwOgAUQAAAAAAAAAwKIgBqM5AyggACAAKwOoASIDIAOgIAajRAAAAAAAAPC/oJo5AzAgAEIANwMYIABCADcDYCAAIAArA4ABIgMgA6AgGkEBa7ciA6M5AwAgACAAKwOIASIEIASgIAOjOQMIIAAgACsDkAEiBCAEoCADo0QAAAAAAADwv6CaOQMQIABCADcDeCAAQoCAgICAgID4v383A3AgACsDqAIhBSAAKwOIAiEHQQAhASAAKwPoASEIA0AgAUEERg0EIAAgAUEFdGoiDysDECEDIA8rAwghBCAPKwMAIQZBACECA0AgAkEDRwRAIBcgAkECdCABakEDdGogAyAAQdABaiACQQN0aiIQQUBrKwMAoiAGIBArAwCiIAQgECsDIKKgoDkDACACQQFqIQIMAQsLIAFBA3QgF2ogAyAFoiAGIAiiIAQgB6KgoCAPKwMYoDkDYCABQQFqIQEMAAsABSAAQbACaiACQQN0aiIBIAYgAUFAaysDAKIgASsDIKE5AyAgAkEBaiECDAELAAsAC0EAQQNBtwxBABA2CyAAQZADaiQAIBIgEigCwAEQrwU2AugBCyATQSBqJAAMAAsgFSAWKALIATYCIEEAQQFBwqkCIBVBIGoQNiAWKAIAIQAgFigCxAEhASAWKALIASECIBUgFigCzAE2AhQgFUGQmAQ2AhAgFSAWQfACajYCDCAVIAI2AgggFSABNgIEIBUgADYCAEGOkwRBwrACIBUQCBogFigCACEAIBVBMGokACAADwtBAEEDQf4NQQAQNkEBEAEAC+MEAwF/A34ZfCMAQYACayICJAAgAiAANgL8ASACQdyVBCACQfwBahBLNgL4ASACEEc2AvABAn8gAkH4AWogAkHwAWoQTwRAQdT4AygCAAwBCyABIAJB/AFqEFAoAtgBIgAoAixOBEBB2PgDKAIADAELQYiWBCAAIAFBCHRqQTBqIAFBAEgbIgApAwAhAyAAKQMIIQQgACkDECEFIAAoAhghASAAKwMgIQYgACsDKCEHIAArAzAhCCAAKwM4IQkgAEFAaysDACEKIAArA0ghCyAAKwNQIQwgACsDWCENIAArA2AhDiAAKwNoIQ8gACsDcCEQIAArA3ghESAAKwOAASESIAArA4gBIRMgACsDkAEhFCAAKwOYASEVIAArA6ABIRYgACsDqAEhFyAAKwOwASEYIAArA7gBIRkgACsDwAEhGiAAKwPIASEbIAArA9ABIRwgACsD2AEhHSAAKwPgASEeIAIgACgC8AE2AugBIAIgHjkD4AEgAiAdOQPYASACIBw5A9ABIAIgGzkDyAEgAiAaOQPAASACIBk5A7gBIAIgGDkDsAEgAiAXOQOoASACIBY5A6ABIAIgFTkDmAEgAiAUOQOQASACIBM5A4gBIAIgEjkDgAEgAiAROQN4IAIgEDkDcCACIA85A2ggAiAOOQNgIAIgDTkDWCACIAw5A1AgAiALOQNIIAJBQGsgCjkDACACIAk5AzggAiAIOQMwIAIgBzkDKCACIAY5AyAgAiABNgIYIAIgBTcDECACIAQ3AwggAiADNwMAQdeIBEGgsAIgAhAIGkEACyEAIAJBgAJqJAAgAAufEwMMfwJ8AX4jAEHAAWsiCCQAIAJBACACQQBKGyELIAMoAgQiCkEAIApBAEobIQ0DQAJAIA0gDkYEQEEAIQYDQAJAAkAgBiAKSARAIAZBwAJsIg0gAygCAGoiBygCsAIiAkEASA0CIAAgASACQQh0aiICIAcrAwggCBCSBUQAAAAAAAAQQGQEQCADKAIAIA1qQX82ArACIAIoAuwBDQMgAkEHNgLsAQwDC0EAIQUgEEEAIAIoAgAiByAPTBsNAQNAQQAhAiAFQQNGBEAgBiEOIAchDwwDBQNAIAJBBEcEQCACQQN0Ig4gBUEFdCIPIAhB4ABqamogCCAPaiAOaisDADkDACACQQFqIQIMAQsLIAVBAWohBQwBCwALAAsCQAJAIBAEQCAQIAMoAoABTg0BCyADQQA2AmgMAQsgCEHgAGogAygCACAOQcACbGpB8ABqIAgQkgQCQAJAIBBBBnQQNyIJBEAgEEHgAGwQNyIKRQ0IIBBBAnQhCyADKAIEIgJBACACQQBKGyEHQQAhBkEAIQUDQCAGIAdHBEAgAygCACAGQcACbGoiDCgCsAIiAkEATgRAIAkgBUEGdGoiDSABIAJBCHRqIgJBqAFqIg5BBCACKAIQIg9rQQRvQQR0aiICKwMAOQMAIA0gAisDCDkDCCANIA5BBSAPa0EEb0EEdGoiAisDADkDECANIAIrAwg5AxggDSAOQQYgD2tBBG9BBHRqIgIrAwA5AyAgDSACKwMIOQMoIA0gDkEHIA9rQQRvQQR0aiICKwMAOQMwIA0gAisDCDkDOCAKIAVB4ABsaiICIAwrA9ABOQMAIAIgDCsD2AE5AwggAiAMKwPgATkDECACIAwrA+gBOQMYIAIgDCsD8AE5AyAgAiAMKwP4ATkDKCACIAwrA4ACOQMwIAIgDCsDiAI5AzggAkFAayAMKwOQAjkDACACIAwrA5gCOQNIIAIgDCsDoAI5A1AgAiAMKwOoAjkDWCAFQQFqIQULIAZBAWohBgwBCwsgAygCaEUEQCAERSAAIAggCSAKIAsgA0EIaiICEM8DIhFEAAAAAAAANEBmRXINAyAAKAIARJqZmZmZmek/EK8BIAAgCCAJIAogCyACEMIBIhFEAAAAAAAANEBmRQ0DIAAoAgBEMzMzMzMz4z8QrwEgACAIIAkgCiALIAIQwgEiEUQAAAAAAAA0QGZFDQMgACgCAESamZmZmZnZPxCvASAAIAggCSAKIAsgAhDCASIRRAAAAAAAADRAZkUNAyAAKAIARAAAAAAAAAAAEK8BIAAgCCAJIAogCyACEMIBIREMAwsgACAIIAkgCiALIAhB4ABqEM8DIRIgACADQQhqIgcgCSAKIAsgBxDPAyERIAQEQCARIBJkRQ0CQQAhBQNAQQAhAiAFQQNGBEAgEiERDAQFA0AgAkEERwRAIAJBA3QiBiADIAVBBXQiBGpqIAhB4ABqIARqIAZqKwMAOQMIIAJBAWohAgwBCwsgBUEBaiEFDAELAAsACyARIBJkRQ0CQQAhBQNAQQAhAiAFQQNGBEAgEiERDAQFA0AgAkEERwRAIAJBA3QiBCADIAVBBXQiAGpqIAhB4ABqIABqIARqKwMAOQMIIAJBAWohAgwBCwsgBUEBaiEFDAELAAsACwwHCyARRAAAAAAAADRAZkUNACAAKAIARJqZmZmZmek/EK8BIAAgCCAJIAogCyAIQeAAahDCASISIAAgByAJIAogCyAHEMIBIhFjBEBBACEFA3xBACECIAVBA0YEfCASBQNAIAJBBEcEQCACQQN0IgYgAyAFQQV0IgRqaiAIQeAAaiAEaiAGaisDADkDCCACQQFqIQIMAQsLIAVBAWohBQwBCwshEQsgEUQAAAAAAAA0QGZFDQAgACgCAEQzMzMzMzPjPxCvASAAIAggCSAKIAsgCEHgAGoQwgEiEiAAIAcgCSAKIAsgBxDCASIRYwRAQQAhBQN8QQAhAiAFQQNGBHwgEgUDQCACQQRHBEAgAkEDdCIGIAMgBUEFdCIEamogCEHgAGogBGogBmorAwA5AwggAkEBaiECDAELCyAFQQFqIQUMAQsLIRELIBFEAAAAAAAANEBmRQ0AIAAoAgBEmpmZmZmZ2T8QrwEgACAIIAkgCiALIAhB4ABqEMIBIhIgACAHIAkgCiALIAcQwgEiEWMEQEEAIQUDfEEAIQIgBUEDRgR8IBIFA0AgAkEERwRAIAJBA3QiBiADIAVBBXQiBGpqIAhB4ABqIARqIAZqKwMAOQMIIAJBAWohAgwBCwsgBUEBaiEFDAELCyERCyARRAAAAAAAADRAZkUNACAAKAIARAAAAAAAAAAAEK8BIAAgCCAJIAogCyAIQeAAahDCASISIAAgByAJIAogCyAHEMIBIhFjRQ0AQQAhBQN8QQAhAiAFQQNGBHwgEgUDQCACQQRHBEAgAkEDdCIEIAMgBUEFdCIAamogCEHgAGogAGogBGorAwA5AwggAkEBaiECDAELCyAFQQFqIQUMAQsLIRELIAoQMSAJEDEgEUQAAAAAAAA0QGMEQCADQQE2AmgMAQsgA0EANgJoIAMoAgQiAEEAIABBAEobIQRBACECA0AgAiAERg0BAkAgAygCACACQcACbGooArACIgBBAEgNACABIABBCHRqIgAoAuwBDQAgAEEINgLsAQsgAkEBaiECDAALAAsgCEHAAWokAA8LIBBBAWohEAsgBkEBaiEGIAMoAgQhCgwACwALAkACQCADKAIAIA5BwAJsaiIJKAIEBEAgCUG4AmohD0F/IQZBACECA0AgBiEHAkACQCACIAtHBEACQAJAIAEgAkEIdGoiDCgCDCIGDQAgDCkD+AEiE1ANACATIA8pAwBRDQEMAwsgBiAJKAIARw0CCyAMKwMwIhIgAysDeGMNASACIQYgB0F/Rg0CIAEgByIGQQh0aisDMCASY0UNAiACIQYMAgsgCSAHNgKwAiAHQQBIDQUgASAHQQh0akEYaiECDAQLIAchBgsgAkEBaiECDAALAAtBfyEGQQAhAgNAIAYhBwJAAkAgAiALRwRAIAEgAkEIdGoiBigCCCAJKAIARw0BIAYrAygiEiADKwNwYw0BIAIhBiAHQX9GDQIgASAHIgZBCHRqKwMoIBJjRQ0CIAIhBgwCCyAJIAc2ArACIAdBAEgNBCABIAdBCHRqQRRqIQIMAwsgByEGCyACQQFqIQIMAAsACyABIAdBCHRqIAIoAgA2AhALIA5BAWohDgwBCwtBAEEDQf4NQQAQNkEBEAEAC/kBAQJ/IwBBMGsiAyQAIAMgADYCLCADQdyVBCADQSxqEEs2AiggAxBHNgIgAn8gA0EoaiADQSBqEE8EQEHU+AMoAgAMAQsgA0EsahBQQeACaiIAED0gAUsgAUEATnFFBEBB3PgDKAIADAELIAAgARBNIQACQCACQQBOBEAgACgCBCIAKAIEIAJKDQELQdj4AygCAAwBCyAAKAIAIAJBwAJsaiIAQRBqEM0FIAAoArACIQEgACgCACECIAAoAgQhBCADIAArAwg5AxAgAyAENgIIIAMgAjYCBCADIAE2AgBBxYYEQY+wAiADEAgaQQALIQEgA0EwaiQAIAELXgEBfyMAQRBrIgEkACABIAA2AgwgAUHclQQgAUEMahBLNgIIIAEQRzYCAEHU+AMhACABQQhqIAEQTwR/QdT4AwUgAUEMahBQKALYAUEsagsoAgAhACABQRBqJAAgAAvwHAMPfwN8B30jAEEwayIKJAAgCiAANgIsIApB3JUEIApBLGoQSzYCACAKEEc2AigCfyAKIApBKGoQTwRAQdT4AygCAAwBCyAKQSxqEFAhACAKQQBBKBA5IQQgACgCxAEhAiAEQQE2AhAgBCACNgIAIAQgACgCzAE2AgwgACgC2AEhASMAQdAAayIGJAACQAJAAkACQCABRSAERXINACABQQA2AiwgAUEsaiEJAkACQCABKAL0hq8DIgJBBEYEQCABKAL8hq8DIgBBAEoEQCABIABBAWs2AvyGrwMMAgsgBiABKAIQIgUgASgCgIevA2oiAEH/ASAAQf8BSBsiBzYCRCABKAKEh68DIQAgBiAFNgJMIAYgBSAAayIAQQAgAEEAShsiCDYCSCABQTBqIQsgAUGw+ABqIQwgAUG4+ABqIQAgAUHghqcCaiEDQQAhAgNAIAJBA0cEQCAEKAIMIAEoAiQgASgCKCABKAIAIAEoAgwgAkECdCINIAZBxABqaigCACABKAIUIANBABCtBEEASA0FIAEoAiQgASgCKCADIAEoAhQgACAMENAFQQBIDQUgBCgCACABKAIkIAEoAiggASgCBCAAIAEoArB4IAEoAvCGrwMgASgCFCABKAIYIAEoAiBBuAFqIAErA5CHrwMgCyAJIAEoApiHrwMQrgVBAEgNBSAGQThqIA1qIAkoAgA2AgAgAkEBaiECDAELCwJAIAEoAgBBAUcEQCAGKAI8IQMgBigCQCECIAYoAjghAAwBCyAGIAc2AjAgBiAGKAI4IgA2AjQgBiAINgIgIAYgBigCPCIDNgIkIAYgBTYCKCAGIAYoAkAiAjYCLEEAQQNBz80AIAZBIGoQNgsgAiADSCAAIAJKckUEQAJAIAECfyABKAKAh68DIgQgASgChIevAyIASARAIARBAWoMAQsgACAESARAIAEgAEEBajYChIevAwwCCyABIABBAWo2AoSHrwMgBEEBagsiBDYCgIevAwsgBCAFakH/AU4EfyABQQE2AoCHrwNBAQUgBAsgBU4EQCABQQE2AoSHrwMLIAEgASgC+IavAzYC/IavAwwGCyABIAggByAAIANIGyICNgIQQQEhAAJAIAIgBWsiA0EASgRAIAEgAzYCgIevAwwBCyABQQE2AoCHrwNBACADayEACyABIAA2AoSHrwMgASgCAEEBRgRAIAYgAjYCEEEAQQNBhtMAIAZBEGoQNgsgASABKAL4hq8DNgL8hq8DIAEoAvSGrwMhAgsCQAJAIAJBAWsOAwEBAAILQQAhB0F/IQACQCABKAKIh68DIgMgBCgCDCIOELYEQQBIDQAgAygCAEUEQCADIAMoAgggAygCBGwQNyICNgIAIAJFDQELA0ACQEEAIQAgByADKAIIIgVODQADQAJAQQAhCEEAIQtBfCEFIAAgAygCBCIMTg0AA0AgBUEFRwRAAkAgBSAHaiICQQBIDQAgAiADKAIITg0AIAIgDGwhD0F8IQIDQCACQQVGDQEgACACaiINQQBIIAwgDUxyRQRAIAtBAWohCyAIIA4gDSAPamotAABqIQgLIAJBAWohAgwACwALIAVBAWohBQwBCwsgAygCACAHIAxsIABqaiAIIAttOgAAIABBAWohAAwBCwsgB0EBaiEHDAELC0EAIQIDQCACIAUgAygCBGxODQEgAygCACACaiIFIAUtAABBB2s6AAAgAkEBaiECIAMoAgghBQwACwALIAAiBUEASA0GIAQoAgwgASgCiIevAyIAKAIEIAAoAgggASgCACABKAIMQQBBACABQeCGpwJqIAAoAgAQrQQiBUEATg0CDAYLIAEoAvyGrwMiAEEASgRAIAEgAEEBazYC/IavAwwBCyAEKAIMIQAgASgCiIevAyEDAn8gAkEBRgRAQQAhBUEAIQdBACECIAMgABC2BEEASAR/QX8FQQAhAANAIAMgBUECdGoiCEGMCGogCCgCDCAHaiIHNgIAIAVBAWohBSAAQf8BcUEBaiIAQf8BcSAARg0AC0EACyIAQQBOBH8CfyADKAIIIAMoAgRsskMAAAA/lCITQwAAgE9dIBNDAAAAAGBxBEAgE6kMAQtBAAshBQNAIAIiAEEBaiECIAMgAEH/AXEiB0ECdGpBjAhqKAIAIAVJDQALA0AgAEH/AXEhAiAAQQFqIQAgAyACQQJ0akGMCGooAgAgBUYNAAsgBiACIAdqQQF2OgBEQQAFIAALDAELAn9BACEFQX8gAyAAELYEQQBIDQAaQQEhAkEBIQADQCAVIAMgAkECdGooAgwgAmyzkiEVIAJBAWohAiAAQf8BcUEBaiIAQf8BcSAARg0ACyADKAIIIAMoAgRssiEYQQAhAkEAIQADQAJAIBMgAyACQQJ0aigCDCIHs5IiE0MAAAAAXARAIBggE5MiFEMAAAAAWw0BIBYgAiAHbLOSIhYgE5UgFSAWkyAUlZMiGSAZIBMgFJSUlCIUIBcgFCAXXiIHGyEXIAIgBSAHGyEFCyACQQFqIQIgAEH/AXFBAWoiAEH/AXEgAEYNAQsLIAYgBToAREEACwsiBUEASA0FAkAgASgCAEEBRw0AIAYtAEQiACABKAIQRg0AIAEoAvSGrwMhAiAGIAA2AgQgBkGy2gBB5N4AIAJBAUYbNgIAQQBBA0Gt2QAgBhA2CyABIAYtAEQ2AhAgASABKAL4hq8DNgL8hq8DCyAEKAIMIAEoAiQgASgCKCABKAIAIAEoAgwgASgCECABKAIUIAFB4IanAmpBABCtBEEASA0BCyABKAIkIAEoAiggAUHghqcCaiABKAIUIAFBuPgAaiIAIAFBsPgAahDQBUEATg0BC0F/IQUMAgtBfyEFIAQoAgAgASgCJCABKAIoIAEoAgQgACABKAKweCABKALwhq8DIAEoAhQgASgCGCABKAIgQbgBaiABKwOQh68DIAFBMGogCSABKAKYh68DEK4FQQBIDQELIAEoAhxBAUcEQCABKAL4iqYCIgBBACAAQQBKGyEIQQAhBwNAIAcgCEcEQEEAIQQgASgCLCIAQQAgAEEAShshBSABIAdBiAJsakGAi6YCaiECQX8hA0QAAAAAAADgPyERA0AgBCAFRwRAAkAgAigCALcgASAEQQh0aiIAKAIwtyIQoyISRGZmZmZmZuY/YyASROF6FK5H4fY/ZHINACAAKwNoIAIrAzihIhIgEqIgACsDcCACKwNAoSISIBKioCAQoyIQIBFjRQ0AIBAhESAEIQMLIARBAWohBAwBCwsCQCADQQBIDQBBfyEFAkACQCABKAIYIgsOBQAAAAEBBgsgAisDICISIAEgA0EIdGoiBSIAKwNQZEUNASAAIBI5A1AgBSACKAIEIgk2AjRBACEDQX8hAEQAAAAAhNeXQSERA0BEAAAAAAAAAAAhEEEAIQQgA0EERwRAA0AgBEEERwRAIBAgAiAEQQR0aiIMKwOoASAFIAMgBGpBA3FBBHRqIg0rA9gBoSIQIBCiIAwrA7ABIA0rA+ABoSIQIBCioKAhECAEQQFqIQQMAQsLIBAgEWMEQCAQIREgAigCECADa0EEakEEbyEACyADQQFqIQMMAQsLIAVBQGsgADYCACALQQFNBEAgBSASOQNYIAUgCTYCOCAFIAA2AkQMAgsgBSASOQNgIAUgCTYCPCAFIAA2AkgMAQsCQCACKwMoIhAgASADQQh0aiIFIgArA1hkBEAgAisDMCERDAELIAIrAzAiESAFKwNgZEUNAQsgACAQOQNYIAIoAgghACAFIBE5A2AgBSAANgI4IAUgAigCDDYCPEEAIQNBfyEARAAAAACE15dBIREDQEQAAAAAAAAAACEQQQAhBCADQQRHBEADQCAEQQRHBEAgECACIARBBHRqIgkrA6gBIAUgAyAEakEDcUEEdGoiCysD2AGhIhAgEKIgCSsDsAEgCysD4AGhIhAgEKKgoCEQIARBAWohBAwBCwsgAyAAIBAgEWMiBBshACAQIBEgBBshESADQQFqIQMMAQsLIAVBBCAAayIAIAIoAhRqQQRvNgJEIAUgACACKAIYakEEbzYCSAsgB0EBaiEHDAELCyABEPsFQQAhBEEAIQMDQCABKAL4iqYCIARKBEAgASAEQYgCbGoiAEGAjaYCaiICIAIoAgAiAkEBajYCACACQQJMBEAgAyAERwRAIAEgA0GIAmxqQYCLpgJqIABBgIumAmpBiAIQPhoLIANBAWohAwsgBEEBaiEEDAELCyABIAM2AviKpgIgASgCLCIAQQAgAEEAShshBUEAIQADQAJAAkAgACAFRg0AIAEgAEEIdGoiBCgCNCIHQQBIDQEgBEEwaiEJQQAhBCADQQAgA0EAShshAgNAAkAgAiAERwRAIAEgBEGIAmxqQYSLpgJqKAIAIAdHDQEgBCECCyACIANGBEAgA0E8Rg0DIAEgA0EBaiIDNgL4iqYCCyABIAJBiAJsaiIEQYCLpgJqIAlBgAIQPhogBEGAjaYCakEBNgIADAMLIARBAWohBAwACwALQQAhBSABKAIcQQJGDQNBACEAA0AgACADTg0EQQAhBCABKAIsIgdBACAHQQBKGyEJIAEgAEGIAmxqQYCLpgJqIQIDQAJAIAQgCUcEfyACKAIAtyABIARBCHRqIggoAjC3IhGjIhBEZmZmZmZm5j9jIBBE4XoUrkfh9j9kcg0BIAgrA2ggAisDOKEiECAQoiAIKwNwIAIrA0ChIhAgEKKgIBGjRAAAAAAAAOA/Y0UNASAEBSAJCyAHRgRAIAEgB0EIdGpBMGogAkGAAhA+GiABIAEoAixBAWo2AiwgASgC+IqmAiEDCyAAQQFqIQAMAgsgBEEBaiEEDAALAAsACyAAQQFqIQAMAAsACyABEPsFQQAhBQsgBkHQAGokACAFCyEAIApBMGokACAACwsAIAAgAUEAEPEGCwsAIAAgAUEBEPEGC7cCAgF/CHwjAEEQayICJAAgAiAANgIMIAJB3JUEIAJBDGoQSzYCCCACEEc2AgACfyACQQhqIAIQTwRAQdT4AygCAAwBCyABIAJBDGoQUCgC2AEiACgCLE4EQEHY+AMoAgAMAQtBiJYEIAAgAUEIdGpBMGogAUEASBsiAEGQmAQrAwAiBDkDqAEgAEGYmAQrAwAiBTkDsAEgAEGgmAQrAwAiBjkDuAEgAEGomAQrAwAiBzkDwAEgAEGwmAQrAwAiCDkDyAEgAEG4mAQrAwAiCTkD0AEgAEHAmAQrAwAiCjkD2AFByJgEKwMAIQMgACAKIAggBCAGoKCgRAAAAAAAANA/ojkDOCAAIAM5A+ABIABBQGsgAyAJIAUgB6CgoEQAAAAAAADQP6I5AwBBAAshACACQRBqJAAgAAuJAQEBfyMAQRBrIgMkACADIAA2AgwgA0HclQQgA0EMahBLNgIIIAMQRzYCAAJ/IANBCGogAxBPBEBB1PgDKAIADAELIAEgA0EMahBQKALYASIAKAIsTgRAQdj4AygCAAwBC0GIlgQgACABQQh0akEwaiABQQBIGyACNgIQQQALIQAgA0EQaiQAIAALmAQCA38DfCMAQRBrIgMkACADIAA2AgwgA0HclQQgA0EMahBLNgIIIAMQRzYCAAJ/IANBCGogAxBPBEBB1PgDKAIADAELIAEgA0EMahBQIgAoAtgBIgQoAixOBEBB2PgDKAIADAELIAAoAuQBIQUgArchBiMAQcABayIAJAAgAEGIlgQgBCABQQh0akEwaiABQQBIGyIBQagBaiICQQQCfyABQRRqIAEoAgxBAEgNABogAUEYaiABKAIIQQBIDQAaIAFBEGoLKAIAIgFrQQRvQQR0aiIEKwMAOQOAASAAIAQrAwg5A4gBIAAgAkEFIAFrQQRvQQR0aiIEKwMAOQOQASAAIAQrAwg5A5gBIAAgAkEGIAFrQQRvQQR0aiIEKwMAOQOgASAAIAQrAwg5A6gBIAAgAkEHIAFrQQRvQQR0aiIBKwMAOQOwASABKwMIIQggAEIANwN4IAAgBkQAAAAAAADgv6IiBzkDcCAAQgA3A2AgACAHOQNYIABCADcDSCAAQUBrIAZEAAAAAAAA4D+iIgY5AwAgACAIOQO4ASAAIAc5A2ggACAGOQNQIAAgBjkDOCAAQgA3AzAgACAGOQMoIAAgBzkDICAAQQQ2AhggACAAQSBqNgIUIAAgAEGAAWo2AhAgBSgCACAAQRBqQZCYBEGQmAQgAEEIahDeAhogACsDCBogAEHAAWokAEEACyEAIANBEGokACAAC5cBAQJ/IwBBEGsiAyQAIAMgADYCDCADQdyVBCADQQxqEEs2AgggAxBHNgIAAn8gA0EIaiADEE8EQEHU+AMoAgAMAQsgASADQQxqEFAiACgC2AEiBCgCLE4EQEHY+AMoAgAMAQsgACgC5AFBiJYEIAQgAUEIdGpBMGogAUEASBsgArdBkJgEEJIFGkEACyEAIANBEGokACAAC3IBAX8jAEEQayIBJAAgASAANgIMIAFB3JUEIAFBDGoQSzYCCCABEEc2AgBBfyEAIAFBCGogARBPRQRAIAFBDGoQUCgC2AEiAAR/IAEgACgCFDYCCEEABUF/CyEAQX8gASgCCCAAGyEACyABQRBqJAAgAAt7AQF/IwBBIGsiAiQAIAIgADYCHCACQdyVBCACQRxqEEs2AhggAhBHNgIQAkAgAkEYaiACQRBqEE8NACACQRxqEFAoAtgBIgBFIAFBAUtyBH9BfwUgACABNgIUQQALDQAgAiABNgIAQQBBAUGXrgIgAhA2CyACQSBqJAALdgECfyMAQRBrIgEkACABIAA2AgwgAUHclQQgAUEMahBLNgIIIAEQRzYCAEEAIQAgAUEIaiABEE9FBEAgAUEMahBQKALYASIARSABQQhqIgJFcgR/QX8FIAIgACgCADYCAEEACxogASgCCCEACyABQRBqJAAgAAtbAQF/IwBBEGsiASQAIAEgADYCDCABQdyVBCABQQxqEEs2AgggARBHNgIAQQAhACABQQhqIAEQT0UEQCABQQxqEFAoAtgBQeSGpwJqKAIAIQALIAFBEGokACAAC3sBAX8jAEEgayICJAAgAiAANgIcIAJB3JUEIAJBHGoQSzYCGCACEEc2AhBBACEAIAJBGGogAkEQahBPRQRAIAJBHGoQUCgC2AEgAUEARxDOByACQY6mAkGSpgIgARs2AgBBAEEBQYmoAiACEDYgASEACyACQSBqJAAgAAt/AQJ/IwBBEGsiASQAIAEgADYCDCABQdyVBCABQQxqEEs2AgggARBHNgIAQX8hACABQQhqIAEQT0UEQCABQQxqEFAoAtgBIgBFIAFBCGoiAkVyBH9BfwUgAiAAKAL0hq8DNgIAQQALIQBBfyABKAIIIAAbIQALIAFBEGokACAAC2gBAX8jAEEgayICJAAgAiAANgIcIAJB3JUEIAJBHGoQSzYCGCACEEc2AhACQCACQRhqIAJBEGoQTw0AIAJBHGoQUCgC2AEgARDZBg0AIAIgATYCAEEAQQFBk6kCIAIQNgsgAkEgaiQAC3wBAn8jAEEQayIBJAAgASAANgIMIAFB3JUEIAFBDGoQSzYCCCABEEc2AgBBfyEAIAFBCGogARBPRQRAIAFBDGoQUCgC2AEiAEUgAUEIaiICRXIEf0F/BSACIAAoAhA2AgBBAAshAEF/IAEoAgggABshAAsgAUEQaiQAIAALiAEBAX8jAEEgayICJAAgAiAANgIcIAJB3JUEIAJBHGoQSzYCGCACEEc2AhACQCACQRhqIAJBEGoQTw0AIAJBHGoQUCEAIAFB/wFLDQAgACgC2AEiAEUgAUH/AUtyBH9BfwUgACABNgIQQQALDQAgAiABNgIAQQBBAUGtqQIgAhA2CyACQSBqJAALfAECfyMAQRBrIgEkACABIAA2AgwgAUHclQQgAUEMahBLNgIIIAEQRzYCAEF/IQAgAUEIaiABEE9FBEAgAUEMahBQKALYASIARSABQQhqIgJFcgR/QX8FIAIgACgCDDYCAEEACyEAQX8gASgCCCAAGyEACyABQRBqJAAgAAsqAQF8QX8gACsDACABKwMAoSICRAAAAAAAAAAAZCACRAAAAAAAAAAAYxsLewEBfyMAQSBrIgIkACACIAA2AhwgAkHclQQgAkEcahBLNgIYIAIQRzYCEAJAIAJBGGogAkEQahBPDQAgAkEcahBQKALYASIARSABQQFLcgR/QX8FIAAgATYCDEEACw0AIAIgATYCAEEAQQFB+qgCIAIQNgsgAkEgaiQAC3kBAn8jAEEQayIBJAAgASAANgIMIAFB3JUEIAFBDGoQSzYCCCABEEc2AgBBfyEAIAFBCGogARBPRQRAIAFBDGoQUCgC2AEiAEUgAUEIaiICRXIEf0F/BSACIAAoApiHrwM2AgBBAAsaIAEoAgghAAsgAUEQaiQAIAALWQEBfyMAQRBrIgIkACACIAA2AgwgAkHclQQgAkEMahBLNgIIIAIQRzYCACACQQhqIAIQT0UEQCACQQxqEFAoAtgBIgAEQCAAIAE2ApiHrwMLCyACQRBqJAALlAECAX8BfCMAQRBrIgEkACABIAA2AgwgAUHclQQgAUEMahBLNgIAIAEQRzYCCAJ8RAAAAAAAAPC/IAEgAUEIahBPDQAaRAAAAAAAAPC/IAFBDGoQUCgC2AEiAEUNABogAAR/IAEgACsDkIevAzkDAEEABUF/CyEARAAAAAAAAPC/IAErAwAgABsLIQIgAUEQaiQAIAILswECAX8BfCMAQSBrIgIkACACIAA2AhwgAkHclQQgAkEcahBLNgIYIAIQRzYCEAJAIAJBGGogAkEQahBPDQAgAkEcahBQIQAgAUMAAAAAXyABQwAAgD9gcg0AIAAoAtgBIgBFDQAgAEUgAbsiA0QAAAAAAAAAAGVyIANEAAAAAAAA8D9mcgR/QX8FIAAgAzkDkIevA0EACw0AIAIgAzkDAEEAQQFBpKwCIAIQNgsgAkEgaiQAC3IBAX8jAEEQayIBJAAgASAANgIMIAFB3JUEIAFBDGoQSzYCCCABEEc2AgBBfyEAIAFBCGogARBPRQRAIAFBDGoQUCgC2AEiAAR/IAEgACgCGDYCCEEABUF/CyEAQX8gASgCCCAAGyEACyABQRBqJAAgAAtoAQF/IwBBIGsiAiQAIAIgADYCHCACQdyVBCACQRxqEEs2AhggAhBHNgIQAkAgAkEYaiACQRBqEE8NACACQRxqEFAoAtgBIAEQpQMNACACIAE2AgBBAEEBQfStAiACEDYLIAJBIGokAAtbAgF/AXwjAEEQayIBJAAgASAANgIMIAFB3JUEIAFBDGoQSzYCCCABEEc2AgBEAAAAAAAA8L8hAiABQQhqIAEQT0UEQCABQQxqEFArA9gCIQILIAFBEGokACACC0wBAX8jAEEQayICJAAgAiAANgIMIAJB3JUEIAJBDGoQSzYCCCACEEc2AgAgAkEIaiACEE9FBEAgAkEMahBQIAE5A9gCCyACQRBqJAALWwIBfwF8IwBBEGsiASQAIAEgADYCDCABQdyVBCABQQxqEEs2AgggARBHNgIARAAAAAAAAPC/IQIgAUEIaiABEE9FBEAgAUEMahBQKwPQAiECCyABQRBqJAAgAgtMAQF/IwBBEGsiAiQAIAIgADYCDCACQdyVBCACQQxqEEs2AgggAhBHNgIAIAJBCGogAhBPRQRAIAJBDGoQUCABOQPQAgsgAkEQaiQAC1QBAX8jAEEQayIBJAAgASAANgIMIAFB3JUEIAFBDGoQSzYCCCABEEc2AgBBfyEAIAFBCGogARBPRQRAIAFBDGoQUEHgAmoQPSEACyABQRBqJAAgAAtzAQJ/IwBBEGsiAiQAIAIgADYCDCACQdyVBCACQQxqEEs2AgggAhBHNgIAQX8hAAJAIAJBCGogAhBPDQAgAkEMahBQIQMgAUEASA0AIANB4AJqIgMQPSABTQ0AIAMgARBNKAIEKAIEIQALIAJBEGokACAAC/cQAxF/AnwBfiMAQRBrIgYkACAGIAA2AgwgBkHclQQgBkEMahBLNgIAIAYQRzYCCEF/IRACQCAGIAZBCGoQTw0AIAZBDGoQUCEJAn8gARBAIQAgCSgC2AEhDCAJAn8gCSgC3AEhEUEAIQEjAEHAFGsiAiQAAkACQCAAQZYIEIICIgdFBEAgAiAANgIQQQBBA0HKGiACQRBqEDYgAkGImQQoAgAQnwI2AgQgAkGBIzYCAEEAQQNBhx0gAhA2DAELIAJBgBJqIgQgBxDcAiACIAJB+AFqNgLgASAEQcQkIAJB4AFqEKUBQQFHBEAgAiAANgLQAUEAQQNBqy4gAkHQAWoQNiAHEIUBDAELIAIoAvgBIgFBwAJsEDciDUUNAQNAAkACQAJAIAEgCkoEQCACQYASaiIBIAcQ3AIgAiANIApBwAJsaiIEQbgCajYCwAEgAiACQf8BajYCxAEgBAJ/IAFB+jYgAkHAAWoQpQFBAUcEQCARRQRAIAIgADYCkAEgAiACQYASajYClAFBAEEDQeDAACACQZABahA2DAYLAn9BACACQYACaiIBRSAARXINABoCfyAAEIQBQQFqIQMDQEEAIANFDQEaIAAgA0EBayIDaiIFLQAAQS9HDQALIAULIgMEf0EAIANBAWogAGsiA0EBakGAEEsNARogASAAIAMQiQMgA2oFIAELQQA6AAAgAQtFBEAgAiAANgKgAUEAQQNB88cAIAJBoAFqEDYMBgsgAkGAEmohA0H/DyACQYACaiIBEIQBayEIIAEQhAEgAWohBQJAIAhFDQADQCADLQAAIgtFDQEgBSALOgAAIAVBAWohBSADQQFqIQMgCEEBayIIDQALCyAFQQA6AAAgBCARIAEQ3AYiAzYCACADQQBIDQNBASEDQQAMAQsgBCAEKQO4AiIVp0H//wFxQQAgFUKAgP7/D4NQGzYCAEECIQNBAQs2AgQgAkGAEmoiASAHENwCIAIgBEEIajYCgAEgAUGczwAgAkGAAWoQpQFBAUcEQCACIAA2AnAgAiAKQQFqNgJ0QQBBA0HC1wAgAkHwAGoQNgwECyACQYASaiIFIAcQ3AIgAiAEQShqNgJsIAIgBEEgajYCaCACIARBGGo2AmQgAiAEQRBqIgg2AmBBASEBIAVBudoAIAJB4ABqEKUBQQRGDQIgAiACQfQBajYCUCACIAJB8AFqNgJUIAJBgBJqQf7eACACQdAAahClAUECRgRAQQAhAQwDCyACIAA2AkAgAiAKQQFqNgJEQQBBA0GQ8wAgAkFAaxA2DAMLIAcQhQFBiAEQNyIBRQ0FIAEgDTYCACACKAL4ASEAIAFBADYCgAEgASAANgIEIAFBADYCaAJAIA5BA3FBA0YEQCABQQI2AmwMAQsgDkEBcQRAIAFBADYCbAwBCyABQQE2AmwLIAFCgICAgICAgPA/NwN4IAFCgICAgICAgPA/NwNwDAQLIAIgATYCtAEgAiAANgKwAUEAQQNBm84AIAJBsAFqEDYMAQsgAyAOciEOA0AgAkGAEmoiBSAHENwCIAIgBCABQQV0aiIDQShqNgI8IAIgA0EgajYCOCACIANBGGo2AjQgAiADQRBqNgIwIAVBudoAIAJBMGoQpQFBBEcEQCACIAA2AiAgAiAKQQFqNgIkQQBBA0GQ8wAgAkEgahA2DAILIAFBAWoiAUEDRw0ACyAEQfAAaiESQQAhAUEEQQQQsQEiCygCACEFA0AgAUEDRwRAIAFBAnQhD0EAIQMDQCADQQRHBEAgBSADIA9qQQN0aiAIIAFBBXRqIANBA3RqKwMAOQMAIANBAWohAwwBCwsgAUEBaiEBDAELCyAFQgA3A2AgBUKAgICAgICA+D83A3ggBUIANwNwIAVCADcDaCALEOQCGiALKAIAIQVBACEBA0AgAUEDRwRAIAFBAnQhD0EAIQMDQCADQQRHBEAgEiABQQV0aiADQQN0aiAFIAMgD2pBA3RqKwMAOQMAIANBAWohAwwBCwsgAUEBaiEBDAELCyALEEMgAiAEKwMIIhNEAAAAAAAA4L+iIhQ5A7gUIAIgFDkDsBQgAiAUOQOoFCACIBNEAAAAAAAA4D+iIhM5A6AUIAIgEzkDmBQgAiATOQOQFCACIBM5A4gUIAIgFDkDgBRBACEBA0AgAUEERwRAIAQgAUEYbGoiAyAIKwMYIAgrAwAgAkGAFGogAUEEdGoiBSsDACIUoiAIKwMIIAUrAwgiE6KgoDkD0AEgAyAEKwNIIBQgBCsDMKIgEyAEKwM4oqCgOQPYASADIAQrA2ggFCAEKwNQoiATIAQrA1iioKA5A+ABIAFBAWohAQwBCwsgCkEBaiEKIAIoAvgBIQEMAQsLIAcQhQEgDRAxQQAhAQsgAkHAFGokACABDAELQQBBA0HaNUEAEDZBARABAAsiADYC4AEgAEUEQEEAQQNB468CQQAQNiAJKALcARCjBEEADAELAkACQAJAAkAgACgCbA4CAAECCyAMQQAQpQMaDAILIAxBAhClAxoMAQsgDEEDEKUDGgtBAQtFBEBBAEEDQZqrAkEAEDYMAQsgBiAJQeACaiIAED02AgAgBiAJKALgATYCBAJAIAAoAgQgABAyKAIARwRAIAAgBhDtAgwBCyMAQSBrIgQkACAAEDIiByAEQQhqAn8gABA9QQFqIQMjAEEQayIBJAAgASADNgIMIAMgABC1AiICTQRAIAAQugEiAyACQQF2SQRAIAEgA0EBdDYCCCABQQhqIAFBDGoQbygCACECCyABQRBqJAAgAgwBCxCVAwALIAAQPSAHELYCIgEoAgggBhC3AiABIAEoAghBCGo2AgggACABEOgCIAEQ5wIgBEEgaiQACyAGKAIAIRALIAZBEGokACAQC/lFAiN/An0jAEEQayIdJAAgHSAANgIMIB1B3JUEIB1BDGoQSzYCCCAdEEc2AgBBfyEAAkACQAJAIB1BCGogHRBPDQACfyAdQQxqEFAiFCgC9AEhICABEEAhF0EAIQEjAEGQAWsiCSQAIBQoAugBISMgCUEANgKMASAJIBc2AoABQQBBAUGnqgIgCUGAAWoQNgJAAkACQAJ/IwBBEGsiCCQAIAhBuK0BLQAAOgAOIAhBtq0BLwAAOwEMAkACfwJAAkAgF0EAIAlBiAFqG0UEQEEAQQNBy+EAQQAQNgwBCwJ/IAhBDGohAiMAQRBrIgQkAAJAAkAgF0UEQAwBCyAXEIQBQamlAhCEAWpBAmoQNyIHRQ0BIARBqaUCNgIEIAQgFzYCACAHQboOIAQQogIgByACEIICIQUgBxAxCyAEQRBqJAAgBQwBCwwLCyIERQRAIAggFzYCACAIQamlAjYCCCAIQdLPADYCBEEAQQNB/fMAIAgQNgwBC0EBQRAQhgMiA0UNAwJAIANBBGpBBEEBIAQQYEEBRw0AIAMoAgQiAkEATA0AIAMgAkGEAWwQNyICNgIAIAJFDQRBACEFA0AgAygCBCAFSgRAIAVBhAFsIgIgAygCAGpBCEEBIAQQYEEBRw0CIAMoAgAgAmpBCGpBCEEBIAQQYEEBRw0CIAMoAgAgAmpBEGpB7ABBASAEEGBBAUcNAiADKAIAIAJqQfwAakEEQQEgBBBgQQFHDQIgBUEBaiEFIAMoAgAgAmpBgAFqQQRBASAEEGBBAUYNAQwCCwsgA0EMakEEQQEgBBBgQQFHDQBBACEFIAMoAgwiAkEATARAIANBADYCCAwBCyADIAJBDGwQNyICNgIIIAJFDQQDQCAFIAMoAgxODQMgBUEMbCICIAMoAghqQQhqQQRBASAEEGBBAUcNASADKAIIIAJqQQRqQQRBASAEEGBBAUcNASADKAIIIAJqIgIgAigCBCIHQQxsEDciAjYCACACRQ0FIAVBAWohBSACQQwgByAEEGAgB0YNAAsLQQBBA0GA9wBBABA2IAMoAggQMSADKAIAEDEgAxAxIAQQhQELQX8MAQsgCSADNgKIASAEEIUBQQALIQIgCEEQaiQAIAIMAQsMAwtBAEgEQCAJIBc2AgBBAEEDQYGqAiAJEDYMAQsgCSAgNgJwQQBBAUG0rgIgCUHwAGoQNgJAIAkoAogBIggEQCAIKAIEIgJBACACQQBKGyEEA0AgASAERgRAQQAhBSAIKAIMIgFBACABQQBKGyEEQQAhAQNAIAEgBEYNBEEAIAgoAgggAUEMbGoiBygCCCICQX9HIAJBAE4bRQRAIAcgIDYCCAsgAUEBaiEBDAALAAVBACAIKAIAIAFBhAFsaiIHKAJ8IgJBf0cgAkEAThtFBEAgByAgNgJ8CyABQQFqIQEMAQsACwALQQBBA0G7+gBBABA2QX8hBQsgBUEASARAQQBBA0HKpwJBABA2DAELAn9BACEBIAlBjAFqQQAgCUGIAWoiFRtFBEBBAEEDQaI7QQAQNkF/DAELAkAgCSgCjAEiDUUEQCAJQRAQNyINNgKMASANRQ0BIA1CADcCACANQgA3AggLAkAgFSgCACIDRQ0AIAMoAgQiCCANKAIEIg5qIgRBhAFsEDciCwRAIA5BACAOQQBKGyEHA0AgASAHRgRAQQAhASAIQQAgCEEAShshAgNAIAEgAkcEQCALIAEgDmpBhAFsaiADKAIAIAFBhAFsakGEARA+GiABQQFqIQEMAQsLIA0oAgAQMSAJKAKMASALNgIAIAkoAowBIgggBDYCBEEAIQ0gCCgCDCIRQQAgEUEAShshGSAVKAIAIgcoAgwiBEEAIARBAEobIQwDQEEAIQEgDCAaRwRAAkADQCABIBlGDQEgAUEMbCECIAFBAWohASAHKAIIIBpBDGxqKAIIIAIgCCgCCGooAghHDQALIA1BAWohDQsgGkEBaiEaDAELCyAEIBFqIA1rIgNBDGwQNyIKBEADQCAQIBlGBEBBACENQQAhBQJAA0AgDCANRwRAIA1BDGwiCCAVKAIAKAIIaiIHKAIIIQRBACEBAkACQANAIAEgGUYNASABQQxsIQIgAUEBaiEBIAQgAiAJKAKMASgCCGooAghHDQALIAVBAWohBQwBCyAKIA0gEWogBWtBDGxqIg4gBDYCCCAOIAcoAgQiC0EMbBA3IgE2AgAgAUUNA0EAIQEgC0EAIAtBAEobIQQDQCABIARHBEAgAUEMbCICIA4oAgBqIgcgFSgCACgCCCAIaigCACACaiICKQIANwIAIAcgAigCCDYCCCABQQFqIQEMAQsLIA4gCzYCBAsgDUEBaiENDAELCyAJKAKMASIFKAIIBH9BACEBA0AgBSgCCCECIAUoAgwgAUoEQCACIAFBDGxqKAIAEDEgAUEBaiEBIAkoAowBIQUMAQsLIAIQMSAJKAKMAQUgBQsgCjYCCCAJKAKMASADNgIMIBUQ/AQMBwsMBwsgCiAQQQxsIgtqIg4gCSgCjAEoAgggC2oiBygCCDYCCEEAIQEgBygCBCIIIQ0DQCABIAxHBEAgFSgCACgCCCABQQxsaiICKAIIIAcoAghGBEAgAigCBCANaiENCyABQQFqIQEMAQsLIA4gDUEMbBA3IgE2AgAgAQRAQQAhBSAIQQAgCEEAShshBEEAIQEDQCABIARHBEAgAUEMbCICIA4oAgBqIgcgCSgCjAEoAgggC2ooAgAgAmoiAikCADcCACAHIAIoAgg2AgggAUEBaiEBDAELCwJAA0AgBSAMRg0BIBUoAgAoAggiGiAFQQxsIgRqKAIIIAkoAowBKAIIIAtqKAIIRwRAIAVBAWohBQwBCwtBACEBA0AgASAEIBpqIgIoAgRODQEgDigCACABIAhqQQxsaiIHIAIoAgAgAUEMbGoiAikCADcCACAHIAIoAgg2AgggAUEBaiEBIBUoAgAoAgghGgwACwALIA4gDTYCBCAQQQFqIRAMAQsLDAULDAQFIAsgAUGEAWwiAmogDSgCACACakGEARA+GiABQQFqIQEMAQsACwALDAELQQAMAQsMAwtBAEgEQEEAQQNB7qcCQQAQNgwBC0EAQQFBiK0CQQAQNiAJIBc2AmBBAEEBQaCnAiAJQeAAahA2IBQgIEECdGoCf0EAIQIjAEHQB2siBiQAAkACQAJAAn8CQEGH8QEtAAAEQEGH8QFBgAgQoAINAQsgBkHQBWogF0H/ARCJA0EAOgD/AUEBDAELIAYgFzYCsAEgBkGH8QE2ArQBIAZBwAFqIgFBug4gBkGwAWoQogIgAUGQGxCCAiITRQRAIAYgFzYCoAFBAEEDQdogIAZBoAFqEDYgBkGImQQoAgAQnwI2ApQBIAZBsS82ApABQQBBA0HeJSAGQZABahA2DAILQQALIRoCQAJAQfQIEDciGwRAQQEhDQJAIBoNACAGQcABaiATENsCRQ0CIAYgBkHMBWo2AoABIAZBwAFqQfc2IAZBgAFqEKUBQQFHDQIgBigCzAUiDUEASg0ADAILIBtBADYCmAEgGyANNgIEIBsgDUHwAGwQNyIWNgIAIBYEQAJAA0AgBiACNgLMBSACIA1ODQEgBiACQQFqNgJwQQBBAUGpwgAgBkHwAGoQNiAaRQRAIAZBwAFqIBMQ2wJFDQIgBiAGQdAFajYCYCAGQcABakHrwgAgBkHgAGoQpQFBAUcNAiAGQdAFaiEEQQAhAUF/IQIDQAJAAkAgASAEai0AACIHQS5HBEAgBw0BIAJBf0cEQCACIARqQQA6AAALDAILIAEhAgsgAUEBaiEBDAELCwtBAEEBQY/MAEEAEDYCfyMAQeAAayIPJAAgD0G0rQEvAAA7AVggD0GwrQEoAAA2AlQCQAJ/AkAgBkHQBWoiChCEASAPQdQAahCEAWpBAWoQNyIBBEAgDyAKNgJAIA8gD0HUAGo2AkQgAUG1DiAPQUBrEKICIAFBqRwQggIhEiABEDEgEkUEQCAPIAo2AgAgDyAPQdQAajYCBEEAQQNBwSIgDxA2QQAMAwtBCBA3Ih5FDQMCQAJAIB5BBGpBBEEBIBIQYEEBRgRAIB4oAgQiFUEASg0BC0EAQQNBySZBABA2DAELIA8gFTYCMEEAQQFBmi0gD0EwahA2IB4gFUECdBA3Ihg2AgAgGEUNBCAYQRAQNyIBNgIAIAFFDQQCf0EUEDciEQRAIBFBCGohDiARQQxqIQsgEUEEaiEIIBFBEGohGSMAQaAGayIFJABBKBA3IgxBADYCACAFQbgCakEAQegDEDkaQZCnBEEANgIAIAVBGGoQsAUhB0GQpwQoAgAhAkGQpwRBADYCAEF/IQFBBCEQAkACQAJAAkAgAkUNAEGUpwQoAgAiA0UNACACKAIAIAxBBBCkASIBRQ0BIAMkAQsjASECIAFBAUcEQCAFQQM2AhggBSAHNgK4AiAFQZwBakEBIAxBBBD2BCEMIwEhEEEAIQILA0AgAgRAQZCnBEEANgIAQQQgBUG4AmoQCUGQpwQoAgAhAkGQpwRBADYCAEF/IQECQCACRQ0AQZSnBCgCACIDRQ0AIAIoAgAgDCAQEKQBIgFFDQMgAyQBCyMBIQIgAUEBRg0BQZCnBEEANgIAQQVBAEEDQcw0QQAQCkGQpwQoAgAhAkGQpwRBADYCAEF/IQECQCACRQ0AQZSnBCgCACIDRQ0AIAIoAgAgDCAQEKQBIgFFDQMgAyQBCyMBIQIgAUEBRg0BDAMLQZCnBEEANgIAQQYgBUG4AmpB2gBB6AMQHkGQpwQoAgAhAkGQpwRBADYCAEF/IQECQCACRQ0AQZSnBCgCACIDRQ0AIAIoAgAgDCAQEKQBIgFFDQIgAyQBCyMBIQIgAUEBRg0AQZCnBEEANgIAQQcgBUG4AmogEhAWQZCnBCgCACECQZCnBEEANgIAQX8hAQJAIAJFDQBBlKcEKAIAIgNFDQAgAigCACAMIBAQpAEiAUUNAiADJAELIwEhAiABQQFGDQBBkKcEQQA2AgBBCCAFQbgCakEBEBUhB0GQpwQoAgAhAkGQpwRBADYCAEF/IQECQCACRQ0AQZSnBCgCACIDRQ0AIAIoAgAgDCAQEKQBIgFFDQIgAyQBCyMBIQIgAUEBRg0AIAdBAUcEQEGQpwRBADYCAEEFQQBBA0GxOkEAEApBkKcEKAIAIQJBkKcEQQA2AgBBfyEBAkAgAkUNAEGUpwQoAgAiA0UNACACKAIAIAwgEBCkASIBRQ0DIAMkAQsjASECIAFBAUYNAUGQpwRBADYCAEEEIAVBuAJqEAlBkKcEKAIAIQJBkKcEQQA2AgBBfyEBAkAgAkUNAEGUpwQoAgAiA0UNACACKAIAIAwgEBCkASIBRQ0DIAMkAQsjASECIAFBAUYNAQwDC0GQpwRBADYCAEEJIAVBuAJqEBMaQZCnBCgCACECQZCnBEEANgIAQX8hAQJAIAJFDQBBlKcEKAIAIgNFDQAgAigCACAMIBAQpAEiAUUNAiADJAELIwEhAiABQQFGDQAgBSgC1AIgBSgC3AJsIgQgBSgC2AJsEDciHARAQQAhAQJAAkACQANAAkBBACECIAUoAsQDIAUoAqwDTwRAQZCnBEEANgIAQQogBUG4AmoQExpBkKcEKAIAIQJBkKcEQQA2AgBBfyEBAkAgAkUNAEGUpwQoAgAiA0UNACACKAIAIAwgEBCkASIBRQ0JIAMkAQsjASECIAFBAUYNB0GQpwRBADYCAEEEIAVBuAJqEAlBkKcEKAIAIQJBkKcEQQA2AgBBfyEBAkAgAkUNAEGUpwQoAgAiA0UNACACKAIAIAwgEBCkASIBRQ0JIAMkAQsjASECIAFBAUYNByAOBEAgDiAFKALUAjYCAAsgCwRAIAsgBSgC2AI2AgALIAgEQCAIIAUoAtwCNgIACyAZRQ0KIAUtANoEIgdBAWsOAgEDBAsDQCACQQVHBEAgBSACQQJ0aiAcIAEgAmogBGxqNgIAIAJBAWohAgwBCwtBkKcEQQA2AgBBCyAFQbgCaiAFQQUQFCEHQZCnBCgCACECQZCnBEEANgIAQX8hIQJAIAJFDQBBlKcEKAIAIgNFDQAgAigCACAMIBAQpAEiIUUNCCADJAELIwEhAiAhQQFGDQYgASAHaiEBDAELCyAFLwHcBCIBIAUvAd4EIgJHDQIgGSABszgCAAwHCyAFLwHcBCIBIAUvAd4EIgJHDQEgGSABs0NcjyJAlDgCAAwGCyAFLwHeBCECIAUvAdwEIQELIAIgAUH//wNxIAdBA0lyckUEQCAZIAezOAIADAULIBlBADYCAAwEC0GQpwRBADYCAEEFQQBBA0H+DUEAEApBkKcEKAIAIQJBkKcEQQA2AgBBfyEBAkAgAkUNAEGUpwQoAgAiA0UNACACKAIAIAwgEBCkASIBRQ0CIAMkAQsjASECIAFBAUYNAEGQpwRBADYCAEEEIAVBuAJqEAlBkKcEKAIAIQJBkKcEQQA2AgBBfyEBAkAgAkUNAEGUpwQoAgAiA0UNACACKAIAIAwgEBCkASIBRQ0CIAMkAQsjASECIAFBAUYNAAsMAQsgDBAxIAIgAxD1BAALQQAhHAsgDBAxIAVBoAZqJAAgESAcNgIAIBwEfyARBSAREDFBAAsMAQsMBQsiAkUNAiACKAIEQQFHBEAgDyAKNgIgIA8gD0HUAGo2AiRBAEECQe8zIA9BIGoQNiAYKAIAEDEgGBAxIB4QMSACEDEgEhCFAUEADAQLIBgoAgAiASACKAIINgIEIAEgAigCDDYCCCABIAIqAhA4AgwgASACKAIANgIAIAIQMSASQQQgFUECdGtBAhCOA0EBISICQANAIBUgIkcEQCAPQdwAakEEQQEgEhBgQQFHBEBBACEBA0AgASAiRg0EIBggAUECdGoiAigCACgCABAxIAIoAgAQMSABQQFqIQEMAAsACyAYICJBAnRqAn8gDyoCXCEmIBgoAgAiHygCBCECIB8qAgwhJSAfKAIIIQFBEBA3IQUgAbIgJpQgJZUQowIhByACsiAmlCAllRCjAiECIAUEQAJAIAUgJjgCDCAFIAc2AgggBSACNgIEIAUgAiAHbBA3Ihw2AgAgHEUNAEEAIQEgB0EAIAdBAEobIRkgAkEAIAJBAEobIQoDQCABIBlHBEAgHygCCCEEIB8qAgwiJSABQQFqIgeylCAmlRCjAiECICUgAbKUICaVEKMCIgggAiAEIAIgBEgbIgEgASAISBshDkEAIQEDQCABIApGBEAgByEBDAMFIB8oAgQhDCAfKgIMIiUgAUEBaiICspQgJpUQowIhBCAlIAGylCAmlRCjAiIQIAQgDCAEIAxIGyIBIAEgEEgbIBBrIQtBACEBIAghA0EAIREDQCADIA5HBEAgASALaiEEIB8oAgAgAyAMbCAQamohIQNAIAEgBEcEQCABQQFqIQEgESAhLQAAaiERICFBAWohIQwBCwsgA0EBaiEDIAQhAQwBCwsgHCARIAFtOgAAIBxBAWohHCACIQEMAQsACwALCyAFDAILCwwICyIBNgIAIAEEQCAiQQFqISIMAgVBACEBA0AgASAiRg0EIBggAUECdGoiAigCACgCABAxIAIoAgAQMSABQQFqIQEMAAsACwALCyASEIUBIB4MBAsgGBAxCyAeEDEgEhCFAUEADAILDAILIA8gCjYCECAPIA9B1ABqNgIUQQBBAkHvMyAPQRBqEDYgGCgCABAxIBgQMSAeEDEgEhCOBQJ/QQAhAQJAAkACQEEIEDciAwRAAkAgA0EEakEEQQEgEhBgQQFGBEAgAygCBCIEQQBKDQELQQBBA0HJJkEAEDYMAgsgAyAEQQJ0EDciCDYCACAIBEBBASEMA0AgASAERgRAQQAhAQNAIAEgBEYNBgJAAkAgCCABQQJ0aiIHKAIAQQRqQQRBASASEGBBAUcEQEEAIQIDQCABIAJGBEBBACEBA0AgASAERg0EIAggAUECdGooAgAQMSABQQFqIQEMAAsABSAIIAJBAnRqKAIAKAIAEDEgAkEBaiECDAELAAsACyAHKAIAQQhqQQRBASASEGBBAUcEQEEAIQIDQCABIAJGBEBBACEBA0AgASAERg0EIAggAUECdGooAgAQMSABQQFqIQEMAAsABSAIIAJBAnRqKAIAKAIAEDEgAkEBaiECDAELAAsACyAHKAIAQQxqQQRBASASEGBBAUcEQEEAIQIDQCABIAJGBEBBACEBA0AgASAERg0EIAggAUECdGooAgAQMSABQQFqIQEMAAsABSAIIAJBAnRqKAIAKAIAEDEgAkEBaiECDAELAAsACyAHKAIAIgIgAigCCCACKAIEbBA3IgI2AgAgAgRAIAcoAgAiAigCAEEBIAIoAgggAigCBGwgEhBgIAcoAgAiAigCCCACKAIEbEYNAkEAIQEDQCABIAxGBEBBACEBA0AgASAERg0EIAggAUECdGooAgAQMSABQQFqIQEMAAsABSAIIAFBAnRqKAIAKAIAEDEgAUEBaiEBDAELAAsACwwJCyAIEDEMBgsgDEEBaiEMIAFBAWohAQwACwALIAggAUECdGpBEBA3IgI2AgAgAUEBaiEBIAINAAsMBAsMAwsMAgsgAxAxQQAhAwsgEhCFASADDAELDAILCyEBIA9B4ABqJAAgAQwBCwwQCyEBIBYgBigCzAVB8ABsaiABNgIAIAFFBEAgBiAGQdAFajYCAEEAQQNButMAIAYQNiAWEDEgGxAxIBNFDQYgExCFAQwGC0EAQQFBo9kAQQAQNkEAQQFBpd0AQQAQNgJ/QQAhCkEAIQMjAEGgBGsiCCQAIAggBkHQBWoiAjYCECAIQYAINgIUIAhBIGoiAUGLCCAIQRBqEKICAkACQCABQe8WEIICIg5FBEAgCCACNgIAQQBBA0GNHSAIEDYMAQsCQAJAQQgQNyIKBEAgCkEEakEEQQEgDhBgQQFHBEBBAEEDQYEoQQAQNgwCCyAKIAooAgQiAUEUbBA3IgQ2AgAgBARAIAFBACABQQBKGyECA0AgAiADRg0EAkACQCAEIANBFGxqIgtBCGpBBEEBIA4QYEEBRw0AIAtBDGpBBEEBIA4QYEEBRw0AIAtBEGpBBEEBIA4QYEEBRw0AIAtBBGpBBEEBIA4QYEEBRw0AIAsgCygCBEEUbBA3IgE2AgBBACEHIAFFDQgDQCAHIAsoAgRODQIgB0EUbCIBIAsoAgBqQQRBASAOEGBBAUcNASALKAIAIAFqQQRqQQRBASAOEGBBAUcNASALKAIAIAFqQQhqQQRBASAOEGBBAUcNASALKAIAIAFqQQxqQQRBASAOEGBBAUcNASAHQQFqIQcgCygCACABakEQakEEQQEgDhBgQQFGDQALC0EAIQJBAEEDQYEoQQAQNgNAIAIgA0cEQCAEIAJBFGxqKAIAEDEgAkEBaiECDAELCyAEEDEMBAsgA0EBaiEDDAALAAsMBAsMAwsgChAxQQAhCgsgDhCFAQsgCEGgBGokACAKDAELQQBBA0HxIkEAEDYMEQshASAWIAYoAswFQfAAbGogATYCBCABRQRAIAYgBkHQBWo2AhBBAEEDQariACAGQRBqEDZBACECAkAgFiAGKALMBUHwAGxqIgRFDQAgBCgCACIKRQ0AA0AgCigCACEHIAooAgQgAkoEQCAHIAJBAnQiAWooAgAoAgAQMSAEKAIAKAIAIAFqKAIAEDEgAkEBaiECIAQoAgAhCgwBCwsgBxAxIAQoAgAQMSAEQQA2AgALIBYQMSAbEDEgE0UNBiATEIUBDAYLQQBBAUGj2QBBABA2IBYgBigCzAVB8ABsakEANgIIAkACQCAaBEBBACEBIAYoAswFIQoDQEEAIQIgAUEDRg0CA0AgAkEERwRAIBYgCkHwAGxqIAFBBHRqIAJBAnRqQwAAgD9DAAAAACABIAJGGzgCDCACQQFqIQIMAQsLIAFBAWohAQwACwALIAZBwAFqIBMQ2wJFDQMgBiAWIAYoAswFQfAAbGoiAUEMajYCQCAGIAFBEGo2AkQgBiABQRRqNgJIIAYgAUEYajYCTCAGQcABakGI/QAgBkFAaxClAUEERw0JIAZBwAFqIBMQ2wJFDQMgBiAWIAYoAswFQfAAbGoiAUEcajYCMCAGIAFBIGo2AjQgBiABQSRqNgI4IAYgAUEoajYCPCAGQcABakGI/QAgBkEwahClAUEERw0JIAZBwAFqIBMQ2wJFDQMgBiAWIAYoAswFQfAAbGoiAUEsajYCICAGIAFBMGo2AiQgBiABQTRqNgIoIAYgAUE4ajYCLCAGQcABakGI/QAgBkEgahClAUEERw0BIAYoAswFIQoLIBYgCkHwAGxqIgFBDGohBCABQTxqIQhBACEBQQRBBBCxASIDKAIAIQsDQCABQQNHBEAgAUECdCEHQQAhAgNAIAJBBEcEQCALIAIgB2pBA3RqIAQgAUEEdGogAkECdGoqAgC7OQMAIAJBAWohAgwBCwsgAUEBaiEBDAELCyALQgA3A2AgC0KAgICAgICA+D83A3ggC0IANwNwIAtCADcDaCADEOQCGiADKAIAIQRBACEBA0AgAUEDRwRAIAFBAnQhB0EAIQIDQCACQQRHBEAgCCABQQR0aiACQQJ0aiAEIAIgB2pBA3RqKwMAtjgCACACQQFqIQIMAQsLIAFBAWohAQwBCwsgAxBDIAZB0AVqIQhBACECQQAhAQJAAkADQAJAAkAgASAIaiIELQAAIgdBLkcEQCAHDQFB+YEBEIQBIQcgAg0CIAEgB2pBAmpBgAJKDQUgBEEuOgAAIAEhAgwECyABIQILIAFBAWohAQwBCwsgAiAHakECakGAAkoNAQsgAiAIakEAOgABQfmBASEBAkACQCAIEIQBIAhqIgpB+YEBc0EDcQRAQfmBAS0AACECDAELA0AgCiABLQAAIgI6AAAgAkUNAiAKQQFqIQogAUEBaiIBQQNxDQALIAEoAgAiAkF/cyACQYGChAhrcUGAgYKEeHENAANAIAogAjYCACABKAIEIQIgCkEEaiEKIAFBBGohASACQYGChAhrIAJBf3NxQYCBgoR4cUUNAAsLIAogAjoAACACQf8BcUUNAANAIAogAS0AASICOgABIApBAWohCiABQQFqIQEgAg0ACwsLQYACEDchAiAWIAYoAswFIgFB8ABsaiACNgJsIAJFDQkgAiAGQdAFakGAAhCJAxogAUEBaiECDAELCwwGCyATBEAgExCFAQsgDSAGKALMBUwNBEEAEAEACwwFCwwECyATEIUBIBsQMQtBACEbCyAGQdAHaiQAIBsMAgtBAEEDQa6BAUEAEDYgExCFAUEAEAEAC0EAQQNB2jVBABA2DAcLIgE2AvgBIAFFBEAgCSAXNgJQQQBBA0H/pgIgCUHQAGoQNgsgFCgC+AEoAgAoAgAiAigCBCEBIBQgAigCACgCACICKAIENgK4AiAUIAIoAgg2ArwCIBQCfyACKgIMIiWLQwAAAE9dBEAgJagMAQtBgICAgHgLNgLAAiAJIAE2AkBBAEEBQbaoAiAJQUBrEDYgCSAUKAK4AjYCMEEAQQFB5KgCIAlBMGoQNiAJIBQoArwCNgIgQQBBAUGfqAIgCUEgahA2IAkgFCgCwAI2AhBBAEEBQdCoAiAJQRBqEDYgFEHEAmogFEG0AmoQ1QVBAEEBQYitAkEAEDYgIEEKRg0BICMgCSgCjAEQ4gdBAEgEQEEAQQNBsacCQQAQNgwBCyAJQYwBahD8BEEBISRBAEEBQcOsAkEAEDYLIAlBkAFqJAAgJAwCC0F/EAEAC0EAQQNBwh9BABA2DAMLRQRAQQBBA0HLqwJBABA2DAELIBQgFCgC9AFBAWo2AvQBICAhAAsgHUEQaiQAIAAPC0EAQQNB/g1BABA2C0EBEAEAC8ABAQV/IwBBEGsiAiQAIAIgADYCDCACQdyVBCACQQxqEEs2AgggAhBHNgIAQX8hAAJAIAJBCGogAhBPDQAgAkEMahBQIQMgARBAIQUjAEEQayIBJAAgAyADKALcASAFENwGIgY2AuwCQQEhBCAGQQBIBEAgASAFNgIAQQBBA0HsqgIgARA2IAMoAtwBEKMEQQAhBAsgAUEQaiQAIARFBEBBAEEDQfirAkEAEDYMAQsgAygC7AIhAAsgAkEQaiQAIAALggYCCX8BfCMAQcABayIEJABBfyEJIAAQQCEDIwBBoAJrIgEkAEF/IQUCQCAEQQhqIgZFIANFcg0AIANBxyQQggIiAkUEQEGImQQoAgAhAiABIAM2AhQgASACNgIQQQBBA0HmLSABQRBqEDYgAUGImQQoAgAQnwI2AgQgAUGBIzYCAEEAQQNBhx0gARA2DAELQQAhBSACQQBBAhCOAwJ/AkACfyACKAJMQQBIBEAgAigCAAwBCyACKAIAC0EFdkEBcQRAIAFBiJkEKAIANgJQQQBBA0GPMSABQdAAahA2IAFBiJkEKAIAEJ8CNgJEIAFBgSM2AkBBAEEDQYcdIAFBQGsQNgwBCyACEJkFIQcgAhCOBQJAA0AgBSIDQQRGDQEgA0EBaiEFIAcgA0EDdEGArQFqKAIEbw0ACyABQeAAaiADQQN0QYCtAWooAgRBASACEGBBAUcEQCABQYiZBCgCADYCMEEAQQNBzz0gAUEwahA2IAFBiJkEKAIAEJ8CNgIkIAFBgSM2AiBBAEEDQYcdIAFBIGoQNgwCCyABIAU2ApACIAFB4ABqEJgGIANFBEAgASsD4AEhCiABIAErA9gBOQPgASABIAo5A9gBCyAGIAFB4ABqQbgBED4hByABQQA2ApwCQQEhBgNAQQAgBkEBRg0DGiABIAEoApwCIghBBGo2ApwCIAgoAgAiCCAHKAKwATYCsAEgAUHgAGogBygCsAFBA3RB/KwBaigCAEEBIAIQYEEBRw0CIAEgBTYCkAIgAUHgAGoQmAYgA0UEQCABKwPgASEKIAEgASsD2AE5A+ABIAEgCjkD2AELIAggAUHgAGpBuAEQPhogBkEBaiEGDAALAAtBAEEDQdI6QQAQNgtBfwshBSACEIUBCyABQaACaiQAAkAgBUEASARAIAQgABBANgIAQQBBA0HNrgIgBBA2DAELQYSWBEGElgQoAgAiAEEBajYCACAEIAA2AgQgBEEEahDRBSAEQQhqQbgBED4aIAQoAgQhCQsgBEHAAWokACAJC5MEAQt/IwBBEGsiAiQAIAIgADYCDCACQdyVBCACQQxqEEs2AgggAhBHNgIAQX8hACACQQhqIAIQT0UEQCACQQxqEFAiBSgCxAEiAARAIAAQMSAFQgA3AsQBCyAFENQFIAUoAtwBEKMEIwBBIGsiBCQAIARB3JUEIAJBDGoQlQY2AhggBBD6AzYCECAEQRhqIARBEGoQqAFFBEAgBEEIaiAEQRhqEJ4BKAIAIQAjAEEgayIIJAAgCEEYaiAAEHciCxD6BSAIQQhqIQkjAEEQayIKJABB3JUEEJQBIQZB3JUEIAAoAgQgBhBfIgcQOigCACEDA0AgAyIBKAIAIgMgAEcNAAsCQCABQeSVBEcEQCABKAIEIAYQXyAHRg0BCyAAKAIAIgMEQCADKAIEIAYQXyAHRg0BC0HclQQgBxA6QQA2AgALAkAgACgCACIDRQ0AIAMoAgQgBhBfIgMgB0YNAEHclQQgAxA6IAE2AgALIAEgACgCADYCACAAQQA2AgBB3JUEEDwiASABKAIAQQFrNgIAIAkgACAKQQhqQdyVBBAyQQEQrQIQrAIaIApBEGokACAJEL0FIAsoAgAaIAhBIGokAAsgBEEgaiQAIAVB4AJqIQFBACEAA0AgARA9IABLBEAgASAAEE0oAgQQqQIgAEEBaiEADAELCyABENMBEDEgBRDTBRAxQQAhAAsgAkEQaiQAIAALCQBB0PgDKAIACwsAQdD4AyAANgIAC6YBAQF/IwBBEGsiAyQAIAMgATYCDCADQdyVBCADQQxqEEs2AgggAxBHNgIAAkAgA0EIaiADEE8EQCAAQgA3AgAgAEIANwIIDAELIANBDGoQUCIBQcQCahC4ASACTQRAQQgQBkGp9gEQ/gYiAEGM+AM2AgAgAEGs+ANBDBAFAAsgACABKALEAiACQQR0aiIBKQIANwIAIAAgASkCCDcCCAsgA0EQaiQAC6MEAQd/IwBBEGsiAiQAIAIgADYCDCACQdyVBCACQQxqEEs2AgggAhBHNgIAQX8hACACQQhqIAIQT0UEQCACQQxqEFAiASEHAn8gASgC8AMhBiABKALAASIDKAIAIQQgAygCBCEFQaTrABA3IgAEQAJAIABBATYC4GcgAEKas+b4g4CAgMAANwIoIABCi4CAgKABNwIgIABCmYCAgLABNwIYIAAgBTYCCCAAIAQ2AgQgACAGNgIUIABB9OcAaiAEIAVsEDciBDYCACAERQ0AIABB+OcAakEANgIAIAAMAgsLQQBBA0HSrwJBABA2QQEQAQALIgAgAzYCDCAAQQE2AgAgACADQQhqEOkDIgM2AhAgA0QAAAAAAAAAABCvASAHIAA2AuwBIABFBEBBAEEDQdutAkEAEDYgASgC6AEiAARAIAAoAgAiAARAIABBABCuBgsgABAxIAEoAugBKAIcEDEgASgC6AEoAiQQMSABKALoASgCNBAxIAEoAugBKAIsEDEgASgC6AEQMSABQQA2AugBCyABKALsASEACyAABEAgAEMAAKBAOAIsCyABKALsASIABEAgAEMAAAA/OAIoCyABKALsASIABEAgAEEQNgIkCyABKALsASIABEAgAEEGNgIYCyABKALsASIABEAgAEEGNgIcCyABKALsASIABEAgAEEGNgIgCyABIAEoAsABEK8FNgLoAUEAIQALIAJBEGokACAAC0kBAX8jAEEQayIBJAAgASAANgIMIAFB3JUEIAFBDGoQSzYCCCABEEc2AgAgAUEIaiABEE9FBEAgAUEMahBQGgsgAUEQaiQAQX8LmEICPH8GfSMAQeABayIGJAAgBiAANgLcASAGQdyVBCAGQdwBahBLNgKgASAGEEc2AtgBAkACfyAGQaABaiAGQdgBahBPBEBB1PgDKAIADAELIAEgBkHcAWoQUCIXKAL0AU4EQEHY+AMoAgAMAQsgBkEANgLYASAGQX82AtQBIAZBgICA/Hs2ApwBAkACQAJAAkAgFygC8AEiAEF+RgRAIBcoAugBIBcoAswBEO0KIBcoAugBIgAEQCAGIAAoAjQ2AtgBIAYgACgCODYC1AELIAYoAtQBIgBBACAAQQBKGyESQwAAgL8hPiAGKALYASEEQX8hC0EAIQADQCAAIBJHBEACQCAEIABBxABsaiIJKAIwIAFHDQAgCSgCPA0AQQAgC0F/RyAJKgI0Ij8gPl0bDQAgBiA/OAKcASA/IT4gACELCyAAQQFqIQAMAQsLIAtBAEgNASAXIAQoAjAiCTYC8AEgBCALQcQAbGohBANAIAJBA0cEQCAEIAJBBHQiC2ohEkEAIQADQCAAQQRHBEAgAEECdCIQIAZBoAFqIAtqaiAQIBJqKgIAOAIAIABBAWohAAwBCwsgAkEBaiECDAELCyAGQaABaiELQQAhAiAXIAlBAnRqKAL4ASIEBEAgBEEBNgKYAQNAQQAhACACQQNHBEADQCAAQQRHBEAgAEECdCIJIAQgAkEEdCISamogCyASaiAJaioCADgCCCAAQQFqIQAMAQsLIAJBAWohAgwBCwsgBEF/NgKoAQsgFygC8AEhAAsgAEEASA0CIBcoAuwBIQcgFyAAQQJ0aigC+AEhESAXKALEASEyQQAhAiMAQTBrIiIkAEF/IQoCQCAHRSARRXIgMkUgBkGgAWoiFEVyciAGQeR+RnINACARKAKYAUEATARAQX4hCgwBCyAGQQA2ApwBIBFB6ABqIQsgEUE4aiEJIBFBCGohLQNAIBEoAgQgAkoEQCAtIAJB8ABsIgAgESgCAGpBDGogByACQTBsaiIEQTBqEI8EAkAgESgCmAFBAkgNACAJIBEoAgAgAGpBDGogBEGQBGoQjwQgESgCmAFBA0gNACALIBEoAgAgAGpBDGogBEHwB2oQjwQLIAJBAWohAgwBCwsCQCAHKAIAQQFGBEAgBygCDCELIAdBMGohDSAHQfAUaiEJIAdByDpqIRJBACEEIwBB0ABrIgAkACALKAIEsiFCIAsoAgCyIUMCfwNAAkBBACECIAwgESgCBE4NAANAQQAhCiACQQNGBEAgDEHwAGwiECARKAIAaigCBCEDQQAhAgNAIAMoAgQgAkoEQEEAIQoDQCACQRRsIgggAygCAGoiGSgCBCAKSgRAAkAgCyAAQSBqIApBFGwiAyAZKAIAaiIZKgIIIBkqAgwgAEEcaiAAQRhqELMFQQBIDQAgACoCHCI+QwAAAABdID4gQ2ByDQAgACoCGCI+QwAAAABdID4gQmByDQAgACoCTCAAKgJAIBEoAgAgEGooAgQoAgAgCGooAgAgA2oiAyoCCCI+lCADKgIMIj8gACoCRJSSkiJAIEAgQJQgACoCLCAAKgIgID6UIAAqAiQgP5SSkiJAIECUIAAqAjwgACoCMCA+lCA/IAAqAjSUkpIiPyA/lJKSkSJBlSAAKgJIlCBAIEGVIAAqAiiUIAAqAjggPyBBlZSSkkPNzMy9Xg0AIAAgPjgCECAAIAMqAgw4AhQgCyAAQSBqIABBEGogAEEIahDBBQJAIAAqAgwiPiARKAIAIBBqKAIEKAIAIAhqIgMqAgwiP19FDQAgPiADKgIQYEUNACAFQcgBRgRAQQBBA0G5qgJBABA2IAlBzCVqDAsLIAkgBUEYbGoiAyAKNgIIIAMgAjYCBCADIAw2AgAgAyAAKgIcOAIQIAAqAhghPiADQQA2AgwgAyA+OAIUIAVBAWohBQwBCyA+ID8gP5JfRQ0AID4gAyoCEEMAAAA/lGBFDQAgBEHIAUYEQCASQX82AswlQcgBIQQMAQsgEiAEQRhsaiIDIAo2AgggAyACNgIEIAMgDDYCACADIAAqAhw4AhAgACoCGCE+IANBADYCDCADID44AhQgBEEBaiEECyAKQQFqIQogESgCACAQaigCBCEDDAELCyACQQFqIQIMAQsLIAxBAWohDAwDBQNAIApBBEcEQCAKQQJ0IgMgAkEEdCIQIABBIGpqaiANIAxBMGxqIBBqIANqKgIAOAIAIApBAWohCgwBCwsgAkEBaiECDAELAAsACwsgCSAFQRhsakF/NgIMIBIgBEEYbGpBDGoLQX82AgAMAQsgBygCBCECIAcoAgghCyAHQTBqIQggB0HwFGohCSAHQcg6aiESQQAhBCMAQdAAayIAJAAgC7IhQCACsiFBAn8DQAJAQQAhCiAMIBEoAgRODQADQEEAIQIgCkEDRgRAIAxB8ABsIhAgESgCAGooAgQhCkEAIQUDQCAKKAIEIAVKBEBBACECA0AgBUEUbCILIAooAgBqIg0oAgQgAkoEQAJAQQAgAEEgaiACQRRsIhkgDSgCAGoiDSoCCCANKgIMIABBHGogAEEYahCzBUEASA0AIAAqAhwiPkMAAAAAXSA+IEFgcg0AIAAqAhgiPkMAAAAAXSA+IEBgcg0AIAAgESgCACAQaigCBCgCACALaigCACAZaiINKgIIOAIQIAAgDSoCDDgCFEEAIABBIGogAEEQaiAAQQhqEMEFAkAgACoCDCI+IBEoAgAgEGooAgQoAgAgC2oiCyoCDCI/X0UNACA+IAsqAhBgRQ0AIANByAFGBEBBAEEDQbmqAkEAEDYgCUHMJWoMCwsgCSADQRhsaiILIAI2AgggCyAFNgIEIAsgDDYCACALIAAqAhw4AhAgACoCGCE+IAtBADYCDCALID44AhQgA0EBaiEDDAELID4gPyA/kl9FDQAgPiALKgIQQwAAAD+UYEUNACAEQcgBRgRAIBJBfzYCzCVByAEhBAwBCyASIARBGGxqIgsgAjYCCCALIAU2AgQgCyAMNgIAIAsgACoCHDgCECAAKgIYIT4gC0EANgIMIAsgPjgCFCAEQQFqIQQLIAJBAWohAiARKAIAIBBqKAIEIQoMAQsLIAVBAWohBQwBCwsgDEEBaiEMDAMFA0AgAkEERwRAIAJBAnQiCyAKQQR0IgUgAEEgampqIAggDEEwbGogBWogC2oqAgA4AgAgAkEBaiECDAELCyAKQQFqIQoMAQsACwALCyAJIANBGGxqQX82AgwgEiAEQRhsakEMagtBfzYCAAsgAEHQAGokACAHQdALaiEzIBFBnAFqITQgB0HIOmohNSAHQfAUaiI2IQtBACEMA0ACQCAMIQJBACEcIC4gBygCJE4NAANAAkACQCAcIAcoAuBnTg0AIC4gBygCJEYNACALIDQgAiAzIAcoAgQgBygCCBC4BSIKQQBODQEgCyA2Rw0AIDUiCyA0IAIgMyAHKAIEIAcoAggQuAUiCkEATg0BC0EAIQogHEUNAgNAIAogHEYNBCAHIApBNGxqIhpBlOgAaiE9IBpB5OcAaigCACECIBpB6OcAaigCACEjIBpB7OcAaigCACEAIBpB8OcAaigCACEqIBpB9OcAaigCACESIBpB/OcAaiEZQQAhCUEAIRBBACEVIwBBMGsiHSQAIAAoAgghJCAAKAIEISYgACgCACEgIBpB+OcAaiIWKAIAIgNFBEAgFgJ/IAIoAhwhAyACKAIgIQRBKBA3IgAEQAJAIAAgBDYCFCAAIAM2AgggACADNgIQIAAgBDYCDCAAIAMgBGpBAWoiAzYCBCAAIAM2AgAgACADIANsQQF0EDciAzYCGCADRQ0AIAAMAgsLDA0LIgM2AgALQX8hKyACKAIMIQUgAiAgQTBsakEwaiEPICMoAgAgIEHwAGxqIgAoAgAhGCAAKAIEKAIAICZBFGxqIRMjAEHQAGsiACQAAkACQAJAIAUEQCAFQQhqIA8gAEEQaiIIELADIAAgEygCACAkQRRsaiIEKgIIIj44AkwgACAEKgIMIj84AkhBfyEEQQAgCCA+ID8gAEHMAGogAEHIAGoQ1gJBAEgNAyAFQbgBaiIhIAAqAkwgACoCSCAAQcQAaiAAQUBrEHFBAEgNAyADKAIQIQQCfyAAKgJAQwAAAD+SIj6LQwAAAE9dBEAgPqgMAQtBgICAgHgLIQUgBEEBdCEIAn8gACoCREMAAAA/kiI+i0MAAABPXQRAID6oDAELQYCAgIB4CyEfIAUgCGshCEEAIARrIQ0gAygCGCEFA0AgDSADKAIUSg0CQQAgAygCCCIEayEOIB8gBEEBdGshBCAIsiE+A0ACQAJAIAMoAgwgDk4EQCAhIASyID4gAEHEAGogAEFAaxDhAUEASA0BIABBEGogGCgCACATKAIIQQJ0aigCACAAKgJEIAAqAkAgAEEPahCxBUEASA0BIAUgAC0ADyIbOwEAIBBBAWohECAJIBtqIQkgGyAbbCAVaiEVDAILIAhBAmohCCANQQFqIQ0MAwsgBUGAIDsBAAsgBEECaiEEIA5BAWohDiAFQQJqIQUMAAsACwALQQAgDyATKAIAICRBFGxqIgQqAgggBCoCDCAAQcQAaiAAQUBrENYCQQBIDQEgAygCECEEAn8gACoCQEMAAAA/kiI+i0MAAABPXQRAID6oDAELQYCAgIB4CyEFIARBAXQhCAJ/IAAqAkRDAAAAP5IiPotDAAAAT10EQCA+qAwBC0GAgICAeAshISAFIAhrIQhBACAEayENIAMoAhghBQNAIA0gAygCFEoNAUEAIAMoAggiBGshDiAhIARBAXRrIQQgCLIhPgNAIAMoAgwgDk4EQAJAIA8gGCgCACATKAIIQQJ0aigCACAEsiA+IABBD2oQsQVBAEgEQCAFQYAgOwEADAELIAUgAC0ADyIbOwEAIBBBAWohECAJIBtqIQkgGyAbbCAVaiEVCyAEQQJqIQQgDkEBaiEOIAVBAmohBQwBCwsgCEECaiEIIA1BAWohDQwACwALIBBFDQAgAyAQNgIkIAMgCTYCICADAn8gFSAJIAlsIBBta7KRIj6LQwAAAE9dBEAgPqgMAQtBgICAgHgLNgIcQQAhBAwBC0F/IQQLIABB0ABqJAACQCAEQQBIDQAgFigCACIAKAIQIAAoAhRqQQFqIAAoAgggACgCDGpBAWpsskMAAKBAlEMAAKBAlCAAKAIcIgAgAGyyXg0AAkACQAJAAkAgIygCmAFBAWsOAgABAgsgAigCDCAPQQBBACAjKAIAICBB8ABsaigCBCgCACAmQRRsaigCACAkQRRsaiAdQRBqEOEDDAILIAIoAgwgDyACICBBMGxqQZAEakEAICMoAgAgIEHwAGxqKAIEKAIAICZBFGxqKAIAICRBFGxqIB1BEGoQ4QMMAQsgAigCDCAPIAIgIEEwbGoiAEGQBGogAEHwB2ogIygCACAgQfAAbGooAgQoAgAgJkEUbGooAgAgJEEUbGogHUEQahDhAwtBACErAn8gAigCBCEVIAIoAgghGyACKAIUISEgFigCACEOIAIoAhghCSAdQRBqIR9BACENIwBBQGoiDyQAIBtBAWshBSAVQQFrIRAgDigCFCEIIA4oAhAhEwNAAkAgDUEDRg0AIB8gDUEDdGoiACgCACICQQBIDQAgAkF8cUECciICIAlqIgMgECADIBVIGyEWIAIgCWsiAkEAIAJBAEobIQQgACgCBEEEbUECdEECciIAIAlqIgIgBSACIBtIGyEYIAAgCWsiAEEAIABBAEobIQADQCAAIBhMBEAgEiAAIBVsIARqaiEDIAQhAgNAIAIgFkwEQCADQQA6AAAgAkEBaiECIANBAWohAwwBCwsgAEEBaiEADAELCyANQQFqIQ0MAQsLIA9BADYCPCAIQQF0ISxBACATQQF0ayEeQQAhA0EBIQQDQAJAAkACQCADQQNHBEAgHyADQQN0aiIAKAIAIgJBAE4NAkF/IR8gBA0BCyAOKAIAQQN0QSBqIA4oAgRBAXRBCGpsIgAQNyISBEAgABA3IhAEQEF/IR8gIUEOSyEvQQAhGEEAIQADQAJAIA8oAjwgGEoEQAJAAkBBASAhdEGg4AFxRSAOKAIkIA4oAgQiAiAOKAIAIgRsRyAvcnINACAYQQJ0IgMgD0EkamoiMCgCACIFIA4oAhBBAXRrQQNrIidBAEgNACAFIA4oAhRBAXRqQQNqIBtODQAgD0EwaiADaiI3KAIAIgMgDigCCEEBdGtBA2siLEEASA0AIAMgDigCDEEBdGpBA2ogFUgNAQsgGEECdCICIA9BJGpqKAIAIgNBA2ohBSADQQNrIQMgD0EwaiACaiEJA0AgAyAFSg0DAkAgAyAOKAIQQQF0a0EASA0AIA4oAhRBAXQgA2ogG04NBCAJKAIAIgJBA2ohCCACQQNrIQIDQCACIAhKDQECQCACIA4oAghBAXRrQQBIDQAgDigCDEEBdCACaiAVTg0CICogFSAhIA4gAiADIA9BFGoQtAUgDygCFCIEIABMDQAgHSACNgIMIB0gAzYCCCAZIASyQwBAHEaVOAIAQQAhHyAEIQALIAJBAWohAgwACwALIANBAWohAwwACwALQQAhCCAEQQJ0QRBqIgNBACADQQBKGyEJIAJBAXRBBmohBSASIQIgECEDA0AgCCAJRwRAIAJBADYCACADQQA2AgAgCEEBaiEIIANBBGohAyACQQRqIQIMAQsLQQAhFiAEQQF0QQZqIgRBACAEQQBKGyElIAVBACAFQQBKGyExICogLCAVICdsamohDUEAIRMgEiEFIBAhCQNAQQAhCCATIDFHBEADQCAIQQJHBEAgAkEANgIAIANBADYCACAIQQJ0IgQgD0EEampBADYCACAPQQxqIARqQQA2AgAgCEEBaiEIIANBBGohAyACQQRqIQIMAQsLIAlBCGohCSAFQQhqIQVBACEIIA0hBANAIAggJUcEQCAIQQJ0QQRxIiggD0EMamoiKSAELQAAIh4gKSgCAGoiKTYCACAPQQRqIChqIiggKCgCACAeIB5saiIeNgIAIAIgBSgCACApajYCACADIAkoAgAgHmo2AgAgCEEBaiEIIANBBGohAyAJQQRqIQkgAkEEaiECIAVBBGohBSAEQQFqIQQMAQsLIBNBAWohEyANIBVqIQ0MAQsLA0AgFkEHRg0CIBZBA2shMSAWQQJqISggFiAnaiEpQQAhAgNAIAJBB0cEQCACQQJqIThBACEEQQAhEyAOKAIEIh5BACAeQQBKGyE5IBVBAXQhOiAqIAIgLGogFSApbGpqIQUgDigCACIlQQAgJUEAShsiO0EBdCE8IA4oAhghCQNAIAQgOUcEQCAFIQMgCSEIQQAhDQNAIA0gO0cEQCANQQFqIQ0gCC8BACADLQAAbCATaiETIANBAmohAyAIQQJqIQgMAQsLIARBAWohBCAFIDpqIQUgCSA8aiEJDAELCyAPIBAgJUEBdCIEQQhqIgUgKEECayIJbCIIIDhBAmsiA2pBAnQiDWooAgAgECAFIAkgHkEBdGpsIgUgAyAEaiIEakECdCIJaigCAGoiHiAQIAQgCGpBAnQiBGooAgAgECADIAVqQQJ0IgNqKAIAaiANIBJqKAIAIAkgEmooAgBqIAMgEmooAgAgBCASaigCAGprIgMgA2wgDigCJCIEbWoiBUcEfyATIA4oAiAgA2wgBG1rQeQAbCAOKAIcbUHkAGwCfyAeIAVrspEiPotDAAAAT10EQCA+qAwBC0GAgICAeAttBUEACzYCFCAAIA8oAhQiA0gEQCAdIAIgNygCAGpBA2s2AgwgHSAxIDAoAgBqNgIIIBkgA7JDAEAcRpU4AgBBACEfIAMhAAsgAkEBaiECDAELCyAWQQFqIRYMAAsACyASEDEgEBAxDAQLIBhBAWohGAwACwALDAMLDAILIA9BQGskACAfDAMLIAJBfHFBAnIiAiAJaiElIAIgCWshECAAKAIEQQRtQQJ0QQJyIgAgCWohLyAAIAlrIQgDQAJAIAggL0oNAAJAIAggHmpBAEgNACAIICxqIBtODQEgCCAVbCEwIBAhAgNAIAIgJUoNAQJAIAIgDigCCEEBdGtBAEgNACAOKAIMQQF0IAJqIBVODQIgEiACIDBqaiIALQAADQAgAEEBOgAAICogFSAhIA4gAiAIIA9BFGoQtAUgDygCFCEYIA9BMGohEyAPQSRqIRYgD0EYaiENQQAhAAJAIA8oAjwiBQRAIAVBACAFQQBKGyEEA0ACQCAAIARHBEAgDSAAQQJ0aigCACAYTg0BIAAhBAsgBCAFRgRAIAVBAksNBCATIAVBAnQiAGogAjYCACAAIBZqIAg2AgAgACANaiAYNgIAIA8gDygCPEEBajYCPAwEC0ECIQAgBUEDRwRAIA8gBUEBajYCPCAFIQALA0AgACAESgRAIBMgAEECdCIFaiATIABBAWsiAEECdCInaigCADYCACAFIBZqIBYgJ2ooAgA2AgAgBSANaiANICdqKAIANgIADAELCyATIABBAnQiAGogAjYCACAAIBZqIAg2AgAgACANaiAYNgIADAMLIABBAWohAAwACwALIBMgAjYCACAWIAg2AgAgDSAYNgIAIA9BATYCPAtBACEECyACQQRqIQIMAAsACyAIQQRqIQgMAQsLIANBAWohAwwBCwsMDQtBAEgEQEF/ISsMAQsgGSAdKAIMsjgCBCAZIB0oAgiyOAIIIBkgIygCACAgQfAAbGoiACoCGCAAKgIMIAAoAgQoAgAgJkEUbGooAgAgJEEUbGoiAioCCJQgACoCECACKgIMlJKSOAIMIBkgACoCKCAAKgIcIAIqAgiUIAAqAiAgAioCDJSSkjgCECAZIAAqAjggACoCLCACKgIIlCAAKgIwIAIqAgyUkpI4AhQLIB1BMGokACA9ICs2AgACQCArDQAgGSoCACAHKgIoXkUNACAHIAxBA3RqIgJB1A5qAn0gBygCAEEBRgRAIAcoAgwiAEHoAGogGkGA6ABqKgIAuyAaQYToAGoqAgC7ICJBCGogIiAAKAKwARCiBiAHIAxBA3RqQdAOaiAiKwMItjgCACAiKwMAtgwBCyAHIAxBA3RqQdAOaiAaQYDoAGoqAgA4AgAgGkGE6ABqKgIACzgCACAHIAxBDGxqIgBBkBFqIBpBiOgAaioCADgCACAAQZQRaiAaQYzoAGoqAgA4AgAgAEGYEWogGkGQ6ABqKgIAOAIAIAJB0AtqICJBEGogCkECdGooAgAiACoCEDgCACACQdQLaiAAKgIUOAIAIAcgDEEYbGoiAkGg4ABqIAAoAgA2AgAgAkGk4ABqIAAoAgQ2AgAgACgCCCEAIAJBrOAAakEANgIAIAJBqOAAaiAANgIAIAxBAWohDAsgCkEBaiEKDAALAAsgIkEQaiAcQQJ0aiALIApBGGxqIgA2AgAgByACQQN0aiIDQdALaiAAKgIQOAIAIANB1AtqIAAqAhQ4AgAgByAcQTRsaiIDQfDnAGogMjYCACADQeznAGogADYCACADQejnAGogETYCACADQeTnAGogBzYCACAMIAJBAWoiACAAQQVGGyECIBxBAWohHCAuQQFqIS4MAAsACwtBACECIAxBACAMQQBKGyEEA0AgAiAERwRAIBEgAkEYbCIDaiIAIAMgB2oiA0Gw4ABqKQIANwKsASAAIANBqOAAaikCADcCpAEgACADQaDgAGopAgA3ApwBIAJBAWohAgwBCwsgESAMQRhsakF/NgKoAQJAAkAgBygCAEEBRgRAQX0hCiAMQQNIDQIgBiAHKAIQIC0gB0HQDmoiACAHQZARaiICIAwgFEEAENoCIj44ApwBID4gByoCLF5FDQEgBygCEEQAAACgmZnpPxCvASAGIAcoAhAgFCAAIAIgDCAUQQEQ2gIiPjgCnAEgPiAHKgIsXkUNASAHKAIQRAAAAEAzM+M/EK8BIAYgBygCECAUIAAgAiAMIBRBARDaAiI+OAKcASA+IAcqAixeRQ0BIAcoAhBEAAAAoJmZ2T8QrwEgBiAHKAIQIBQgACACIAwgFEEBENoCIj44ApwBID4gByoCLF5FDQEgBygCEEQAAAAAAAAAABCvASAGIAcoAhAgFCAAIAIgDCAUQQEQ2gIiPjgCnAFBfCEKID4gByoCLF5FDQEMAgtBfSEKIAxBA0gNASAGIC0gB0HQDmoiACAHQZARaiICIAwgFEEAQwAAgD8Q2QIiPjgCnAEgPiAHKgIsXkUNACAGIBQgACACIAwgFEEBQ83MTD8Q2QIiPjgCnAEgPiAHKgIsXkUNACAGIBQgACACIAwgFEEBQ5qZGT8Q2QIiPjgCnAEgPiAHKgIsXkUNACAGIBQgACACIAwgFEEBQ83MzD4Q2QIiPjgCnAEgPiAHKgIsXkUNACAGIBQgACACIAwgFEEBQwAAAAAQ2QIiPjgCnAFBfCEKID4gByoCLF4NAQsgESARKAKYAUEBajYCmAFBACEKQQAhHANAQQAhAiAcQQNGBEADQEEAIQIgCkEDRgRAA0BBACEKIAJBA0YNBgNAIApBBEcEQCAKQQJ0IgAgESACQQR0IgNqaiADIBRqIABqKgIAOAIIIApBAWohCgwBCwsgAkEBaiECDAALAAUDQCACQQRHBEAgESAKQQR0aiACQQJ0aiIAIAAqAgg4AjggAkEBaiECDAELCyAKQQFqIQoMAQsACwAFA0AgAkEERwRAIBEgHEEEdGogAkECdGoiACAAKgI4OAJoIAJBAWohAgwBCwsgHEEBaiEcDAELAAsACyARQQA2ApgBCyAiQTBqJAAgCkEATg0BIAYgCjYCEEEAQQFB36kCIAZBEGoQNgsgF0F+NgLwAQwBCyAXIBcoAvABQQJ0aigC+AEhACAGIBcoAvQBQQFrNgKUASAGIAA2ApABQQBBAUGIrwIgBkGQAWoQNiAXKALwAUEASA0AIAYgBioCoAG7OQMwIAYgBioCpAG7OQM4IAZBQGsgBioCqAG7OQMAIAYgBioCrAG7OQNIIAYgBioCsAG7OQNQIAYgBioCwAG7OQNwIAYgBioCtAG7OQNYIAYgBioCuAG7OQNgIAYgBioCvAG7OQNoIAYgBioCxAG7OQN4IAYgBioCyAG7OQOAASAGIAYqAswBuzkDiAEgBiABNgIgIAYgBioCnAG7OQMoQaD8A0H+rwIgBkEgahAIGgwBCyAGIAE2AgBB2YEEQY2wAiAGEAgaC0EACyEAIAZB4AFqJAAgAA8LQQBBA0H+DUEAEDZBARABAAs0AQF/QfiVBCgCACEAQfCVBBAyGgNAIAAEQCAAKAIAIQEgABAxIAEhAAwBCwtB8JUEELECCz8BAn9B5JUEKAIAIQBB3JUEEDIhAQNAIAAEQCAAKAIAIQIgASAAQQhqEL4FIAAQMSACIQAMAQsLQdyVBBCxAgsUACAAQQxqQQAgASgCBEHs4wFGGwsMACAAQQxqKAIAEDELFAAgAEEMakEAIAEoAgRBxOIBRhsLCwAgAEEMaigCABoLFAAgAEEMakEAIAEoAgRBhNwBRhsLEQAgAEEMaiIAIAAoAgAQiwYLagEBf0HMlQQQ7AJBzJUEKAIABEBBzJUEKAIAIQFB0JUEKAIAIQADQCAAIAFHBEBBzJUEEDIaIABBCGsiABDRAQwBCwtB0JUEIAE2AgBBzJUEEDIaQcyVBCgCACEAQcyVBBC6ARogABAxCwsJACAAQQRqEEALCQAgABCyBhAxCwkAIAAQhgQQMQsMACAAEIcEGiAAEDELBwAgACgCCAsHACAAKAIECyUAIAEgAiADIAQgBSAGrSAHrUIghoQgCK0gCa1CIIaEIAARHgALIwAgASACIAMgBCAFrSAGrUIghoQgB60gCK1CIIaEIAARHwALGQAgASACIAMgBCAFrSAGrUIghoQgABEWAAsZACABIAIgA60gBK1CIIaEIAUgBiAAES0ACyIBAX4gASACrSADrUIghoQgBCAAERMAIgVCIIinJAEgBacLBgAgACQACwQAIwALBgBByPwBCwYAQbOQAgsGAEHf+QELGwAgAEUEQEEADwsgAEHw7wNBgPEDEKkBQQBHCxsAIAAgASgCCCAFEHgEQCABIAIgAyAEEKoECws4ACAAIAEoAgggBRB4BEAgASACIAMgBBCqBA8LIAAoAggiACABIAIgAyAEIAUgACgCACgCFBELAAugAgEHfyAAIAEoAgggBRB4BEAgASACIAMgBBCqBA8LIAEtADUhBiAAKAIMIQggAUEAOgA1IAEtADQhByABQQA6ADQgAEEQaiIMIAEgAiADIAQgBRCoBCAGIAEtADUiCnIhBiAHIAEtADQiC3IhBwJAIABBGGoiCSAMIAhBA3RqIghPDQADQCAHQQFxIQcgBkEBcSEGIAEtADYNAQJAIAsEQCABKAIYQQFGDQMgAC0ACEECcQ0BDAMLIApFDQAgAC0ACEEBcUUNAgsgAUEAOwE0IAkgASACIAMgBCAFEKgEIAEtADUiCiAGciEGIAEtADQiCyAHciEHIAlBCGoiCSAISQ0ACwsgASAGQf8BcUEARzoANSABIAdB/wFxQQBHOgA0C5IBACAAIAEoAgggBBB4BEAgASACIAMQqQQPCwJAIAAgASgCACAEEHhFDQACQCACIAEoAhBHBEAgASgCFCACRw0BCyADQQFHDQEgAUEBNgIgDwsgASACNgIUIAEgAzYCICABIAEoAihBAWo2AigCQCABKAIkQQFHDQAgASgCGEECRw0AIAFBAToANgsgAUEENgIsCwvzAQAgACABKAIIIAQQeARAIAEgAiADEKkEDwsCQCAAIAEoAgAgBBB4BEACQCACIAEoAhBHBEAg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AQwBCxB1AAsLEQAgACABIAIgAyAEQQAQ7gYLEQAgACABIAIgAyAEQQAQ7wYLEQAgACABIAIgAyAEQQEQ7gYLEQAgACABIAIgAyAEQQEQ7wYL0QEBAX8jAEEwayIFJAAgBSABNgIoAkAgAigCBEEBcUUEQCAAIAEgAiADIAQgACgCACgCGBEKACECDAELIAVBGGoiACACEE4gABDLAiEBIAAQRQJAIAQEQCAFQRhqIAEQwQEMAQsgBUEYaiABEMABCyAFIAVBGGoQrAE2AhADQCAFIAVBGGoQ+gE2AgggBUEQaiAFQQhqEH0EQCAFQShqIAVBEGoiACgCACwAABDNAyAAEPUCDAEFIAUoAighAiAFQRhqEDgaCwsLIAVBMGokACACC/UCAQF/IwBB4AJrIgAkACAAIAI2AtACIAAgATYC2AIgAEHQAWoQRCEGIABBEGoiAiADEE4gAhCRAUHguANB+rgDIABB4AFqEOUBIAIQRSAAQcABahBEIgMgAxBUED8gACADQQAQQSIBNgK8ASAAIAI2AgwgAEEANgIIA0ACQCAAQdgCaiAAQdACahCLAUUNACAAKAK8ASADEDUgAWpGBEAgAxA1IQIgAyADEDVBAXQQPyADIAMQVBA/IAAgAiADQQAQQSIBajYCvAELIABB2AJqEGhBECABIABBvAFqIABBCGpBACAGIABBEGogAEEMaiAAQeABahDIAg0AIABB2AJqEHoaDAELCyADIAAoArwBIAFrED8gAxBAIQIQXCEBIAAgBTYCACACIAEgABDCB0EBRwRAIARBBDYCAAsgAEHYAmogAEHQAmoQcwRAIAQgBCgCAEECcjYCAAsgACgC2AIhASADEDgaIAYQOBogAEHgAmokACABC9QDAQF+IwBBgANrIgAkACAAIAI2AvACIAAgATYC+AIgAEHYAWogAyAAQfABaiAAQewBaiAAQegBahC8BCAAQcgBahBEIgEgARBUED8gACABQQAQQSICNgLEASAAIABBIGo2AhwgAEEANgIYIABBAToAFyAAQcUAOgAWA0ACQCAAQfgCaiAAQfACahCLAUUNACAAKALEASABEDUgAmpGBEAgARA1IQMgASABEDVBAXQQPyABIAEQVBA/IAAgAyABQQAQQSICajYCxAELIABB+AJqEGggAEEXaiAAQRZqIAIgAEHEAWogACgC7AEgACgC6AEgAEHYAWogAEEgaiAAQRxqIABBGGogAEHwAWoQuwQNACAAQfgCahB6GgwBCwsCQCAAQdgBahA1RQ0AIAAtABdFDQAgACgCHCIDIABBIGprQZ8BSg0AIAAgA0EEajYCHCADIAAoAhg2AgALIAAgAiAAKALEASAEEMQHIAApAwAhBiAFIAApAwg3AwggBSAGNwMAIABB2AFqIABBIGogACgCHCAEEIoBIABB+AJqIABB8AJqEHMEQCAEIAQoAgBBAnI2AgALIAAoAvgCIQIgARA4GiAAQdgBahA4GiAAQYADaiQAIAILvQMAIwBB8AJrIgAkACAAIAI2AuACIAAgATYC6AIgAEHIAWogAyAAQeABaiAAQdwBaiAAQdgBahC8BCAAQbgBahBEIgEgARBUED8gACABQQAQQSICNgK0ASAAIABBEGo2AgwgAEEANgIIIABBAToAByAAQcUAOgAGA0ACQCAAQegCaiAAQeACahCLAUUNACAAKAK0ASABEDUgAmpGBEAgARA1IQMgASABEDVBAXQQPyABIAEQVBA/IAAgAyABQQAQQSICajYCtAELIABB6AJqEGggAEEHaiAAQQZqIAIgAEG0AWogACgC3AEgACgC2AEgAEHIAWogAEEQaiAAQQxqIABBCGogAEHgAWoQuwQNACAAQegCahB6GgwBCwsCQCAAQcgBahA1RQ0AIAAtAAdFDQAgACgCDCIDIABBEGprQZ8BSg0AIAAgA0EEajYCDCADIAAoAgg2AgALIAUgAiAAKAK0ASAEEMUHOQMAIABByAFqIABBEGogACgCDCAEEIoBIABB6AJqIABB4AJqEHMEQCAEIAQoAgBBAnI2AgALIAAoAugCIQIgARA4GiAAQcgBahA4GiAAQfACaiQAIAILvQMAIwBB8AJrIgAkACAAIAI2AuACIAAgATYC6AIgAEHIAWogAyAAQeABaiAAQdwBaiAAQdgBahC8BCAAQbgBahBEIgEgARBUED8gACABQQAQQSICNgK0ASAAIABBEGo2AgwgAEEANgIIIABBAToAByAAQcUAOgAGA0ACQCAAQegCaiAAQeACahCLAUUNACAAKAK0ASABEDUgAmpGBEAgARA1IQMgASABEDVBAXQQPyABIAEQVBA/IAAgAyABQQAQQSICajYCtAELIABB6AJqEGggAEEHaiAA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IS4gErIhMANAIAIgLkYNCUEBIQQgArMhMSAGIAJBAWsiCRBMISAgBiACEEwhFCAGIAJBAWoiBRBMIRcgCiAJEEwhFSAKIAIQTCEhIAogBRBMIRYgByAJEEwhGSAHIAIQTCEbIAcgBRBMIRgDQCAEICRGBEAgBSECDAIFAkAgISAEQQJ0IgJqIgkqAgAQbiA1XQ0AAkACQCAJKgIAIi8gICAEQQFrQQJ0IglqKgIAIjJeRQ0AIC8gAiAgaioCAF5FDQAgLyAgIARBAWpBAnQiDWoqAgBeRQ0AIC8gCSAUaioCAF5FDQAgLyACIBRqKgIAXkUNACAvIA0gFGoqAgBeRQ0AIC8gCSAXaioCAF5FDQAgLyACIBdqKgIAXkUNACAvIA0gF2oqAgBeRQ0AIC8gCSAVaioCAF5FDQAgLyACIBVqKgIAXkUNACAvIA0gFWoqAgBeRQ0AIC8gCSAhaioCAF5FDQAgLyANICFqKgIAXkUNACAvIAkgFmoqAgBeRQ0AIC8gAiAWaioCAF5FDQAgLyANIBZqKgIAXkUNACAvIAkgGWoqAgBeRQ0AIC8gAiAZaioCAF5FDQAgLyANIBlqKgIAXkUNACAvIAkgG2oqAgBeRQ0AIC8gAiAbaioCAF5FDQAgLyANIBtqKgIAXkUNACAvIAkgGGoqAgBeRQ0AIC8gAiAYaioCAF5FDQAgLyANIBhqKgIAXg0BCyAvIDJdRQ0BIC8gAiAgaioCAF1FDQEgLyAgIARBAWpBAnQiDWoqAgBdRQ0BIC8gCSAUaioCAF1FDQEgLyACIBRqKgIAXUUNASAvIA0gFGoqAgBdRQ0BIC8gCSAXaioCAF1FDQEgLyACIBdqKgIAXUUNASAvIA0gF2oqAgBdRQ0BIC8gCSAVaioCAF1FDQEgLyACIBVqKgIAXUUNASAvIA0gFWoqAgBdRQ0BIC8gCSAhaioCAF1FDQEgLyANICFqKgIAXUUNASAvIAkgFmoqAgBdRQ0BIC8gAiAWaioCAF1FDQEgLyANIBZqKgIAXUUNASAvIAkgGWoqAgBdRQ0BIC8gAiAZaioCAF1FDQEgLyANIBlqKgIAXUUNASAvIAkgG2oqAgBdRQ0BIC8gAiAbaioCAF1FDQEgLyANIBtqKgIAXUUNASAvIAkgGGoqAgBdRQ0BIC8gAiAYaioCAF1FDQEgLyANIBhqKgIA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AkEgaiADIA1BEGoQWiACQShqIAMgDUEYahBaIAJBMGogAyANQSBqEFogAkE4aiADIA1BKGoQWiAIIAJBDGoiAyACQQhqIgUgLyA2lBCFAiAGIAggAioCECACKgIUIAIoAgwgAigCCBBYOAIAIAYgCCACKgIYIAIqAhwgAigCDCACKAIIEFg4AgQgBiAIIAIqAiAgAioCJCACKAIMIAIoAggQWDgCCCAGIAggAioCKCACKgIsIAIoAgwgAigCCBBYOAIMIAYgCCACKgIwIAIqAjQgAigCDCACKAIIEFg4AhAgBiAIIAIqAjggAioCPCACKAIMIAIoAggQWDgCFCAIIAMgBSAvIDOUEIUCIAYgCCACKgJAIAIqAkQgAigCDCACKAIIEFg4AhggBiAIIAIqAkggAioCTCACKAIMIAIoAggQWDgCHCAGIAggAioCUCACKgJUIAIoAgwgAigCCBBYOAIgIAYgCCACKgJYIAIqAlwgAigCDCACKAIIEFg4AiQgBiAIIAIqAmAgAioCZCACKAIMIAIoAggQWDgCKCAGIAggAioCaCACKgJsIAIoAgwgAigCCBBYOAIsIAggAyAFIC8gNZQQhQIgBiAIIAIqAnAgAioCdCACKAIMIAIoAggQWDgCMCAGIAggAioCeCACKgJ8IAIoAgwgAigCCBBYOAI0IAYgCCACKgKAASACKgKEASACKAIMIAIoAggQWDgCOCAGIAggAioCiAEgAioCjAEgAigCDCACKAIIEFg4AjwgBiAIIAIqApABIAIqApQBIAIoAgwgAigCCBBYOAJAIAYgCCACKgKYASACKgKcASACKAIMIAIoAggQWDgCRCAIIAMgBSAvIDSUEIUCIAYgCCACKgKgASACKgKkASACKAIMIAIoAggQWDgCSCAGIAggAioCqAEgAioCrAEgAigCDCACKAIIEFg4AkwgBiAIIAIqArABIAIqArQBIAIoAgwgAigCCBBYOAJQIAYgCCACKgK4ASACKgK8ASACKAIMIAIoAggQWDgCVCAGIAggAioCwAEgAioCxAEgAigCDCACKAIIEFg4AlggBiAIIAIqAsgBIAIqAswBIAIoAgwgAigCCBBYOAJcIAggAyAFIC8gMpQQhQIgBiAIIAIqAtABIAIqAtQBIAIoAgwgAigCCBBYOAJgIAYgCCACKgLYASACKgLcASAC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ZyB3b3JrIG92ZXJmbG93LgoAIyMjIEZlYXR1cmUgY2FuZGlkYXRlcyBmb3IgdHJhY2tpbmcgYXJlIG92ZXJmbG93LgoAYXJnbENhbWVyYUZydXN0dW1SSCgpOiBhclBhcmFtRGVjb21wTWF0KCkgaW5kaWNhdGVkIHBhcmFtZXRlciBlcnJvci4KAGFyVmlkZW9PcGVuOiBFcnJvciwgdmlkZW8gZGV2aWNlIGFscmVhZHkgb3Blbi4KAGtwbURlbGV0ZVJlZkRhdGFTZXQoKTogTlVMTCByZWZEYXRhU2V0UHRyL3JlZkltYWdlLgoAU3RhcnQgdHJhY2tpbmdfdGhyZWFkICMlZC4KAE91dCBvZiBtZW1vcnkhIQoARGF0YSBudW0gZXJyb3IhIQoAdwBJRCBhbHJlYWR5IGV4aXN0cwAlcyVzACVzLiVzAHZlY3RvcgAvaG9tZS93YWx0ZXIva2Fsd2FsdC1naXRodWIvQVIuanMtZ2l0aHViLW9yZy9hcnRvb2xraXQ1LWpzL2xpYi9hcnRvb2xraXQ1L2xpYi9TUkMvS1BNL0ZyZWFrTWF0Y2hlci9kZXRlY3RvcnMvb3JpZW50YXRpb25fYXNzaWdubWVudC5jcHAAL2hvbWUvd2FsdGVyL2thbHdhbHQtZ2l0aHViL0FSLmpzLWdpdGh1Yi1vcmcvYXJ0b29sa2l0NS1qcy9saWIvYXJ0b29sa2l0NS9saWIvU1JDL0tQTS9GcmVha01hdGNoZXIvZnJhbWV3b3JrL3RpbWVycy5jcHAAL2hvbWUvd2FsdGVyL2thbHdhbHQtZ2l0aHViL0FSLmpzLWdpdGh1Yi1vcmcvYXJ0b29sa2l0NS1qcy9saWIvYXJ0b29sa2l0NS9saWIvU1JDL0tQTS9GcmVha01hdGNoZXIvZGV0ZWN0b3JzL2hhcnJpcy5jcHAAL2hvbWUvd2FsdGVyL2thbHdhbHQtZ2l0aHViL0FSLmpzLWdpdGh1Yi1vcmcvYXJ0b29sa2l0NS1qcy9saWIvYXJ0b29sa2l0NS9saWIvU1JDL0tQTS9GcmVha01hdGNoZXIvZGV0ZWN0b3JzL0RvR19zY2FsZV9pbnZhcmlhbnRfZGV0ZWN0b3IuY3BwAC9ob21lL3dhbHRlci9rYWx3YWx0LWdpdGh1Yi9BUi5qcy1naXRodWItb3JnL2FydG9vbGtpdDUtanMvbGliL2FydG9vbGtpdDUvbGliL1NSQy9LUE0vRnJlYWtNYXRjaGVyL21hdGNoZXJzL2hvdWdoX3NpbWlsYXJpdHlfdm90aW5nLmNwcAAvaG9tZS93YWx0ZXIva2Fsd2FsdC1naXRodWIvQVIuanMtZ2l0aHViLW9yZy9hcnRvb2xraXQ1LWpzL2xpYi9hcnRvb2xraXQ1L2xpYi9TUkMvS1BNL0ZyZWFrTWF0Y2hlci9mcmFtZXdvcmsvaW1hZ2UuY3BwAC9ob21lL3dhbHRlci9rYWx3YWx0LWdpdGh1Yi9BUi5qcy1naXRodWItb3JnL2FydG9vbGtpdDUtanMvbGliL2FydG9vbGtpdDUvbGliL1NSQy9LUE0vRnJlYWtNYXRjaGVyL2RldGVjdG9ycy9nYXVzc2lhbl9zY2FsZV9zcGFjZV9weXJhbWlkLmNwcAAvaG9tZS93YWx0ZXIva2Fsd2FsdC1naXRodWIvQVIuanMtZ2l0aHViLW9yZy9hcnRvb2xraXQ1LWpzL2xpYi9hcnRvb2xraXQ1L2xpYi9TUkMvS1BNL0ZyZWFrTWF0Y2hlci9kZXRlY3RvcnMvcHlyYW1pZC5jcHAAaW5mbwBFcnJvcjogaWNwR2V0Sl9VX1hjAHdiAHJiAEFSX1BJWEVMX0ZPUk1BVF9SR0IAUGF0dGVybiBleHRyYWN0aW9uIGZhaWxlZC4AQXNzZXJ0aW9uIGBweXJhbWlkYCBmYWlsZWQgaW4gAFRyYWNraW5nIHRocmVhZCA9ICVkCgBTSVpFID0gJWQsICVkCgBFcnJvciAyOiBpY3BHZXRJbml0WHcyWGMKAD8/PyAyCgBFcnJvcjogdW5zdXBwb3J0ZWQgcGl4ZWwgZm9ybWF0LgoAYXJWaWRlb09wZW5Bc3luYzogRXJyb3IsIHZpZGVvIGRldmljZSBhbHJlYWR5IG9wZW4uCgBVbmtub3duIG9yIHVuc3VwcG9ydGVkIGxhYmVsaW5nIHRocmVzaG9sZCBtb2RlIHJlcXVlc3RlZC4gU2V0IHRvIG1hbnVhbC4KAGtwbURlbGV0ZVJlZkRhdGFTZXQoKTogMCB4c2l6ZS95c2l6ZS9kcGkuCgBFcnJvciAoJWQpOiB1bmFibGUgdG8gb3BlbiBjYW1lcmEgcGFyYW1ldGVycyBmaWxlICIlcyIgZm9yIHdyaXRpbmcuCgBFcnJvcjogTlVMTCBwYXR0SGFuZGxlLgoARW5kIHRyYWNraW5nX3RocmVhZCAjJWQuCgBFcnJvcjogdW5hYmxlIHRvIG9wZW4gbXVsdGltYXJrZXIgY29uZmlnIGZpbGUgJyVzJy4KAE91dCBvZiBtZW1vcnkhIQoAcgAvaG9tZS93YWx0ZXIva2Fsd2FsdC1naXRodWIvQVIuanMtZ2l0aHViLW9yZy9hcnRvb2xraXQ1LWpzL2xpYi9hcnRvb2xraXQ1L2xpYi9TUkMvS1BNL0ZyZWFrTWF0Y2hlci9tYXRjaGVycy9mcmVhay5oAHdhcm5pbmcAICUxMGcAQnVpbGQgUHlyYW1pZAAlNGQAd2IAcmIAQVJfUElYRUxfRk9STUFUX0JHUgBNQU5VQUwAQVJfUElYRUxfRk9STUFUX1JHQgBHZW5lcmljIGVycm9yIGR1cmluZyBtYXRjaGluZyBwaGFzZS4AIGxpbmUgACVzJXMKAEZpbGUgb3BlbiBlcnJvci4gJXMKAERpc3RvcnRpb24gZmFjdG9yOiBrMT0lMS4xMGYsIGsyPSUxLjEwZiwgcDE9JTEuMTBmLCBwMj0lMS4xMGYKAEVycm9yOiBtYWxsb2MKAEVycm9yIDM6IGljcEdldEluaXRYdzJYYwoARXJyb3IgaWNwR2V0Sl9VX1MKAD09PT09PSAlcyA9PT09PT09PQoAPz8/IDMKAEVycm9yOiBjYW4ndCBsb2FkIHBhdHRlcm4gZnJvbSBOVUxMIGJ1ZmZlci4KAGtwbVNldFJlZkRhdGFTZXQoKTogTlVMTCBrcG1IYW5kbGUvZmlsZW5hbWUuCgBFcnJvciBzYXZpbmcgZmVhdHVyZSBtYXA6IGVycm9yIHdyaXRpbmcgZGF0YS4KAE91dCBvZiBtZW1vcnkhIQoAZXJyb3IARnJlYWsgZmVhdHVyZXMgLSAlZAByYgBBUl9QSVhFTF9GT1JNQVRfQkdSAEFVVE9fTUVESUFOAEFSX1BJWEVMX0ZPUk1BVF9SR0JBAEluc3VmZmljaWVudCBjb250cmFzdCBkdXJpbmcgbWF0Y2hpbmcuACU3LjVmIAAgbGluZSAARXJyb3Igb3BlbmluZyBmaWxlICclcyc6IAAgICAgICAgICAgICAgICAgICBmeD0lZiwgZnk9JWYsIHgwPSVmLCB5MD0lZiwgcz0lZgoARXJyb3IgNDogaWNwR2V0SW5pdFh3MlhjCgBFcnJvciBpY3BHZXRVX2Zyb21fWF9ieV9NYXRYMlUKAEVycm9yIGFsbG9jYXRpbmcgbWVtb3J5LgoARXJyb3I6IG91dCBvZiBtZW1vcnkuCgBFcnJvcjogVW5hYmxlIHRvIG9wZW4gZmlsZSAnJXMnIGZvciB3cml0aW5nLgoARXJyb3I6IHVuYWJsZSB0byBvcGVuIGZpbGUgJyVzJXMnIGZvciByZWFkaW5nLgoAT3V0IG9mIG1lbW9yeSEhCgBTdGVwIHNpemUgbXVzdCBiZSBlcXVhbCB0byB3aWR0aCBmb3Igbm93AEV4dHJhY3QgRmVhdHVyZXMAJXMAV2lkdGggY2Fubm90IGJlIHplcm8AU291cmNlIHdpZHRoIG11c3QgYmUgZXZlbgBJbWFnZSBpcyB0b28gc21hbGwAeCBvdXQgb2YgcmFuZ2UAQ2xvY2sgaGFzIG5vdCBiZWVuIHN0YXJ0ZWQAUHlyYW1pZCBpcyBub3QgYWxsb2NhdGVkACVkAHJiAEFVVE9fT1RTVQBBUl9QSVhFTF9GT1JNQVRfQkdSQQBBUl9QSVhFTF9GT1JNQVRfUkdCQQB3cCBtdXN0IGJlIGF0IGxlYXN0IDEAQmFyY29kZSBtYXRjaGluZyBjb3VsZCBub3QgZmluZCBjb3JyZWN0IGJhcmNvZGUgbG9jYXRvciBwYXR0ZXJuLgBbJXNdIAA6IAAlcyVzCgBEaXN0b3J0aW9uIGZhY3RvciA9ICVmICVmICVmICVmICVmICVmCgBFcnJvciA1OiBpY3BHZXRJbml0WHcyWGMKAEVycm9yIGljcEdldFhjX2Zyb21fWHdfYnlfTWF0WHcyWGMKAEVycm9yIHJlYWRpbmcgaW1hZ2VTZXQuCgBFcnJvciB3aGlsZSBhZGRpbmcgcmVmZXJlbmNlIGRhdGEgc2V0OiBrcG1HZW5SZWZEYXRhU2V0KCkgZmFpbGVkLgoARXJyb3Igb3BlbmluZyAnJXMnLgoAQ2FuJ3Qgb3BlbiBKUEVHIGZpbGUgJyVzJwoAT3V0IG9mIG1lbW9yeSEhCgBQYXR0ZXJuIERhdGEgcmVhZCBlcnJvciEhCgBSZWFkIGVycm9yISEKAFslc10gWyVzXSBbJXNdIDogRm91bmQgJWQgZmVhdHVyZXMAJWYAd2IAQVJfUElYRUxfRk9STUFUX0FCR1IAUHlyYW1pZCBpcyBOVUxMAEFVVE9fQURBUFRJVkUAQVJfUElYRUxfRk9STUFUX0JHUkEAQmFyY29kZSBtYXRjaGluZyBlcnJvciBkZXRlY3Rpb24vY29ycmVjdGlvbiBmb3VuZCB1bnJlY292ZXJhYmxlIGVycm9yLgBFcnJvciBjcmVhdGluZyBmdWxsIGZpbGUgcGF0aCBmcm9tICclcycgYW5kICclcycAQXNzZXJ0aW9uIGB4IDwgbU1heFhgIGZhaWxlZCBpbiAAQXNzZXJ0aW9uIGBoZWlnaHQgPj0gNWAgZmFpbGVkIGluIABBc3NlcnRpb24gYGhlaWdodCA+PSAxYCBmYWlsZWQgaW4gAEFzc2VydGlvbiBgaGVpZ2h0ID4gMGAgZmFpbGVkIGluIABBc3NlcnRpb24gYG1JbWFnZXMuc2l6ZSgpID4gMGAgZmFpbGVkIGluIABBc3NlcnRpb24gYHggPj0gMGAgZmFpbGVkIGluIABBc3NlcnRpb24gYG1TdG9wVGltZSA+PSAwYCBmYWlsZWQgaW4gAEFzc2VydGlvbiBgZHN0ICE9IDBgIGZhaWxlZCBpbiAAJXMlcwoARGlzdG9ydGlvbiBmYWN0b3IgPSAlZiAlZiAlZiAlZiAlZgoARXJyb3IgPSAlZgoARXJyb3IgNjogaWNwR2V0SW5pdFh3MlhjCgAgICAgICAgICBJbWFnZVNpemUgPSAlN2RbcGl4ZWxdCgA9PT09PT09PT0gJWQgPT09PT09PT09PT0KAEltYWdlc2V0IGNvbnRhaW5zICVkIGltYWdlcy4KAEVycm9yOiBVbmFibGUgdG8gb3BlbiBmaWxlICclcycgZm9yIHJlYWRpbmcuCgBFcnJvciAoJWQpOiB1bmFibGUgdG8gb3BlbiBjYW1lcmEgcGFyYW1ldGVycyBmaWxlICIlcyIgZm9yIHJlYWRpbmcuCgBFcnJvciBwcm9jZXNzaW5nIG11bHRpbWFya2VyIGNvbmZpZyBmaWxlICclcyc6IEZpcnN0IGxpbmUgbXVzdCBiZSBudW1iZXIgb2YgbWFya2VyIGNvbmZpZ3MgdG8gcmVhZC4KAEVycm9yIHJlYWRpbmcgcGF0dGVybiBmaWxlICclcycuCgBIZWlnaHQgY2Fubm90IGJlIHplcm8AJWYgJWYgJWYgJWYAeCBtdXN0IGJlIHBvc2l0aXZlAExhcGxhY2lhbiBweXJhbWlkIGhhcyBub3QgYmVlbiBhbGxvY2F0ZWQAQ2xvY2sgaGFzIG5vdCBiZWVuIHN0b3BwZWQAQVJfUElYRUxfRk9STUFUX0FCR1IAQVJfUElYRUxfRk9STUFUX01PTk8ARGVzdGluYXRpb24gaXMgTlVMTABBVVRPX0JSQUNLRVRJTkcAaHAgbXVzdCBiZSBhdCBsZWFzdCAxAEVycm9yICglZCk6IHVuYWJsZSB0byBkZXRlcm1pbmUgZmlsZSBsZW5ndGguAE1hdGNoaW5nIGNvbmZpZGVuY2UgY3V0b2ZmIHZhbHVlIG5vdCByZWFjaGVkLgBBc3NlcnRpb24gYHkgPj0gbU1pbllgIGZhaWxlZCBpbiAAQXNzZXJ0aW9uIGBpbWFnZS50eXBlKCkgPT0gSU1BR0VfVUlOVDhgIGZhaWxlZCBpbiAAQXNzZXJ0aW9uIGBzdG9yZS5zaXplKCkgPT0gcG9pbnRzLnNpemUoKWAgZmFpbGVkIGluIAAgSU5GTyAgACVzJXMKAERpc3RvcnRpb24gZmFjdG9yID0gJWYgJWYgJWYgJWYKAEVycm9yIDc6IGljcEdldEluaXRYdzJYYwoARXh0cmFjdGVkIGZlYXR1cmVzID0gJTdkW3BpeGVsXQoARXJyb3IgaWNwMkdldFRTCgBGYWxsaW5nIGJhY2sgdG8gcmVhZGluZyAnJXMlcycgaW4gQVJUb29sS2l0IHY0LnggZm9ybWF0LgoARXJyb3IgaW4gb3BlbmluZyAnJXMnIGluIHppcGZpbGUuCgBFcnJvciByZWFkaW5nIEpQRUcgZmlsZS4KAEVycm9yIHdoaWxlIGFkZGluZyByZWZlcmVuY2UgZGF0YSBzZXQ6IGtwbU1lcmdlUmVmRGF0YVNldCgpIGZhaWxlZC4KAEVycm9yIHNhdmluZyBmZWF0dXJlIHNldDogZXJyb3Igd3JpdGluZyBkYXRhLgoAT3V0IG9mIG1lbW9yeSEhCgAAAAAAAEAOAAAEEAAAShIAAF0UAABpGAAAQnVpbGQgSW5kZXgAWyVzXSBbJXNdIFslc10gOiAlczogJWYgbXMASW1hZ2UgbXVzdCBiZSBncmF5c2NhbGUAeSBvdXQgb2YgcmFuZ2UARmVhdHVyZSBzdG9yZSBoYXMgbm90IGJlZW4gYWxsb2NhdGVkACVkACVsbHUlYwB3YgBBUl9QSVhFTF9GT1JNQVRfTU9OTwBBUl9QSVhFTF9GT1JNQVRfQVJHQgBNYXhpbXVtIGFsbG93YWJsZSBwb3NlIGVycm9yIGV4Y2VlZGVkLgBBc3NlcnRpb24gYHN0ZXAgPj0gd2lkdGhgIGZhaWxlZCBpbiAAQXNzZXJ0aW9uIGBpKzErY2h1bmtfc2l6ZSA8IHdpZHRoYCBmYWlsZWQgaW4gAEFzc2VydGlvbiBgcHlyYW1pZC0+bnVtT2N0YXZlcygpID4gMGAgZmFpbGVkIGluIABBc3NlcnRpb24gYHNyYyAhPSAwYCBmYWlsZWQgaW4gAEFzc2VydGlvbiBgeCA8IG1HcmFkaWVudHNbb2N0YXZlKm1OdW1TY2FsZXNQZXJPY3RhdmUrc2NhbGVdLndpZHRoKClgIGZhaWxlZCBpbiAARXJyb3IgaW4gb3BlbmluZyAnJXMnIGZvciByZWFkaW5nCgAgRmlsdGVyZWQgZmVhdHVyZXMgPSAlN2RbcGl4ZWxdCgBMYWJlbGluZyB0aHJlc2hvbGQgbW9kZSBzZXQgdG8gJXMuCgBFcnJvciByZWFkaW5nIEpQRUcgZmlsZSBoZWFkZXIuCgBFcnJvcjogc3VwcGxpZWQgZmlsZSBkb2VzIG5vdCBhcHBlYXIgdG8gYmUgYW4gQVJUb29sS2l0IGNhbWVyYSBwYXJhbWV0ZXIgZmlsZS4KAGtwbURlbGV0ZVJlZkRhdGFTZXQoKTogTlVMTCByZWZEYXRhU2V0UHRyMS9yZWZEYXRhU2V0UHRyMi4KAENhbid0IHJlYWQgSlBFRyBmaWxlICclcycKAEFSX1BJWEVMX0ZPUk1BVF8ydnV5AFB5cmFtaWQgZG9lcyBub3QgY29udGFpbiBhbnkgbGV2ZWxzAFN0ZXAgbXVzdCBiZSBncmVhdGVyIHRoYW4gb3IgZXF1YWwgdGhlIHdpZHRoAHggbXVzdCBiZSBsZXNzIHRoYW4gdGhlIGltYWdlIHdpZHRoAEV4dGVuZGluZyBiZXlvbmQgdGhlIHdpZHRoIG9mIHRoZSBpbWFnZQBTb3VyY2UgaXMgTlVMTABBUl9QSVhFTF9GT1JNQVRfQVJHQgBFcnJvciAoJWQpOiB1bmFibGUgdG8gcmVhZCBmcm9tIGZpbGUuAE11bHRpLW1hcmtlciBwb3NlIGVycm9yIHZhbHVlIGV4Y2VlZGVkLgANJTRkLyU0ZC4AQXNzZXJ0aW9uIGBweXJhbWlkYCBmYWlsZWQgaW4gAEFzc2VydGlvbiBgeSA8IG1NYXhZYCBmYWlsZWQgaW4gAEFzc2VydGlvbiBgaW1hZ2UuY2hhbm5lbHMoKSA9PSAxYCBmYWlsZWQgaW4gAEFzc2VydGlvbiBgbnVtX3BvaW50cyA9PSBwb2ludHMuc2l6ZSgpYCBmYWlsZWQgaW4gACU3LjVmIAAgSU5GTyAgAGtwbVNldFJlZkRhdGFTZXQoKTogTlVMTCBrcG1IYW5kbGUvcmVmRGF0YVNldC4KAGtwbURlbGV0ZVJlZkRhdGFTZXQoKTogTlVMTCByZWZEYXRhU2V0UHRyLgoARXJyb3I6IHVuYWJsZSB0byBvcGVuIGZpbGUgJyVzJyBmb3Igd3JpdGluZy4KAEVycm9yIHByb2Nlc3NpbmcgbXVsdGltYXJrZXIgY29uZmlnIGZpbGUgJyVzJzogcGF0dGVybiAnJXMnIHNwZWNpZmllZCBpbiBtdWx0aW1hcmtlciBjb25maWd1cmF0aW9uIHdoaWxlIGluIGJhcmNvZGUtb25seSBtb2RlLgoARXJyb3I6IFVuc3VwcG9ydGVkIHBpeGVsIGZvcm1hdCAoJWQpIHJlcXVlc3RlZC4KAEVycm9yIGluIHJlYWRpbmcgJyVzJy4KAAojIyMgU3VyZmFjZSBOby4lZCAjIyMKAEFSX1BJWEVMX0ZPUk1BVF8ydnV5AEFSX1BJWEVMX0ZPUk1BVF95dXZzACVzAEltYWdlIG11c3QgaGF2ZSAxIGNoYW5uZWwAL2hvbWUvd2FsdGVyL2thbHdhbHQtZ2l0aHViL0FSLmpzLWdpdGh1Yi1vcmcvYXJ0b29sa2l0NS1qcy9saWIvYXJ0b29sa2l0NS9saWIvU1JDL0tQTS9GcmVha01hdGNoZXIvbWF0Y2hlcnMvdmlzdWFsX2RhdGFiYXNlLmgAU2hvdWxkIGJlIHNhbWUgc2l6ZQBSZWplY3RlZCBmcmVxdWVudGx5IG1pc3JlY29nbmlzZWQgbWF0cml4IG1hcmtlci4AQXNzZXJ0aW9uIGBidWNrZXRbMF0uZmlyc3QgPj0gYnVja2V0W25dLmZpcnN0YCBmYWlsZWQgaW4gAEFzc2VydGlvbiBgYW5nbGUgPiAtUElgIGZhaWxlZCBpbiAAQXNzZXJ0aW9uIGBjaGFubmVscyA+IDBgIGZhaWxlZCBpbiAAQXNzZXJ0aW9uIGBzcmNfd2lkdGggPiAwYCBmYWlsZWQgaW4gAEFzc2VydGlvbiBgeSA+PSAwYCBmYWlsZWQgaW4gAEFzc2VydGlvbiBgZHluYW1pY19jYXN0PGNvbnN0IEJpbm9taWFsUHlyYW1pZDMyZio+KHB5cmFtaWQpYCBmYWlsZWQgaW4gAGtwbVNhdmVSZWZEYXRhU2V0KCk6IE5VTEwgZmlsZW5hbWUvcmVmRGF0YVNldC4KAGtwbVNldFJlZkRhdGFTZXQoKTogcmVmRGF0YVNldC4KAEVycm9yOiBzdXBwbGllZCBidWZmZXIgZG9lcyBub3QgYXBwZWFyIHRvIGJlIEFSVG9vbEtpdCBjYW1lcmEgcGFyYW1ldGVycy4KAEVycm9yIHByb2Nlc3NpbmcgbXVsdGltYXJrZXIgY29uZmlnIGZpbGUgJyVzJzogVW5hYmxlIHRvIGRldGVybWluZSBkaXJlY3RvcnkgbmFtZS4KAEVycm9yIGluIHdyaXRpbmcgJyVzJyBpbiB0aGUgemlwZmlsZS4KAEVycm9yIHNhdmluZyBpbWFnZSBzZXQ6IGVycm9yIHdyaXRpbmcgZGF0YS4KAEFSX1BJWEVMX0ZPUk1BVF95dXZzAE51bWJlciBvZiBjaGFubmVscyBjYW5ub3QgYmUgemVybwB5IG11c3QgYmUgcG9zaXRpdmUAV2lkdGggbXVzdCBiZSBwb3NpdGl2ZQBhbmdsZSBvdXQgb2YgcmFuZ2UAT25seSBiaW5vbWlhbCBweXJhbWlkIGlzIHN1cHBvcnRlZABudGhfZWxlbWVudCBmYWlsZWQAQVJfUElYRUxfRk9STUFUX1JHQl81NjUAQXNzZXJ0aW9uIGBtUHlyYW1pZC5zaXplKCkgPT0gbU51bU9jdGF2ZXMqbU51bVNjYWxlc1Blck9jdGF2ZWAgZmFpbGVkIGluIAAgbGluZSAARmllbGQtb2YtdmlldyB2ZXJ0aWNhbCA9ICUuMWYsIGhvcml6b250YWwgPSAlLjFmIGRlZ3JlZXMsIGFzcGVjdCByYXRpbyA9ICUuM2YKAE1heCBmZWF0dXJlID0gJWQKACAgUmVhZCBJbWFnZVNldC4KAEVycm9yIHNhdmluZyBLUE0gZGF0YTogdW5hYmxlIHRvIG9wZW4gZmlsZSAnJXMlcyVzJyBmb3Igd3JpdGluZy4KAEVycm9yICglZCk6IHVuYWJsZSB0byBvcGVuIGV4dGVybmFsIHBhcmFtZXRlcnMgZmlsZSAiJXMiIGZvciB3cml0aW5nLgoARXJyb3IgaW4gY2xvc2luZyAlcyBpbiB0aGUgemlwZmlsZS4KAEF1dG8gdGhyZXNob2xkIChicmFja2V0KSBtYXJrZXIgY291bnRzIC1bJTNkOiAlM2RdIFslM2Q6ICUzZF0gWyUzZDogJTNkXSsuCgBFcnJvciBwcm9jZXNzaW5nIG11bHRpbWFya2VyIGNvbmZpZyBmaWxlICclcyc6IFVuYWJsZSB0byBsb2FkIHBhdHRlcm4gJyVzJy4KAE91dCBvZiBtZW1vcnkhIQoAUHlyYW1pZCBoYXMgbm90IGJlZW4gYWxsb2NhdGVkIHlldAAlbGYAQVJfUElYRUxfRk9STUFUX1JHQl81NjUAQVJfUElYRUxfRk9STUFUX1JHQkFfNTU1MQAuAEFzc2VydGlvbiBgcFswXSA+IHBtMVstMV1gIGZhaWxlZCBpbiAAQXNzZXJ0aW9uIGBhbmdsZSA8PSBQSWAgZmFpbGVkIGluIABBc3NlcnRpb24gYGQudHlwZSgpID09IElNQUdFX0YzMmAgZmFpbGVkIGluIABBc3NlcnRpb24gYHNyY19oZWlnaHQgPiAwYCBmYWlsZWQgaW4gAEFzc2VydGlvbiBgb2N0YXZlID49IDBgIGZhaWxlZCBpbiAAQXNzZXJ0aW9uIGB5IDwgbUdyYWRpZW50c1tvY3RhdmUqbU51bVNjYWxlc1Blck9jdGF2ZStzY2FsZV0uaGVpZ2h0KClgIGZhaWxlZCBpbiAAQXNzZXJ0aW9uIGBtRGF0YS5nZXQoKWAgZmFpbGVkIGluIAA6IAAlM2Q6ICglM2QsJTNkKSA6ICVmIG1pbj0lZiBtYXg9JWYsIHNkPSVmCgBwb2ludHMtJWQKAEVycm9yICglZCk6IHVuYWJsZSB0byBvcGVuIGV4dGVybmFsIHBhcmFtZXRlcnMgZmlsZSAiJXMiIGZvciByZWFkaW5nLgoAQXV0byB0aHJlc2hvbGQgKGJyYWNrZXQpIGFkanVzdGVkIHRocmVzaG9sZCB0byAlZC4KAEVycm9yIG9wZW5pbmcgZmlsZSAnJXMuaXNldCcuCgBFcnJvciBpbiBjbG9zaW5nICclcycuCgB5IG11c3QgYmUgbGVzcyB0aGFuIHRoZSBpbWFnZSBoZWlnaHQAL2hvbWUvd2FsdGVyL2thbHdhbHQtZ2l0aHViL0FSLmpzLWdpdGh1Yi1vcmcvYXJ0b29sa2l0NS1qcy9saWIvYXJ0b29sa2l0NS9saWIvU1JDL0tQTS9GcmVha01hdGNoZXIvZGV0ZWN0b3JzL2dhdXNzaWFuX3NjYWxlX3NwYWNlX3B5cmFtaWQuaABIZWlnaHQgbXVzdCBiZSBwb3NpdGl2ZQBPbmx5IEYzMiBpbWFnZXMgc3VwcG9ydGVkAFNob3VsZCBiZSBtYXhpbWEARGF0YSBwb2ludGVyIGlzIE5VTEwAUHlyYW1pZCBpcyBOVUxMAEFSX1BJWEVMX0ZPUk1BVF9SR0JBXzQ0NDQAQVJfUElYRUxfRk9STUFUX1JHQkFfNTU1MQBBc3NlcnRpb24gYHNjYWxlID49IG1NaW5TY2FsZWAgZmFpbGVkIGluIABBc3NlcnRpb24gYGltYWdlLndpZHRoKCkgPT0gbVB5cmFtaWRbMF0ud2lkdGgoKWAgZmFpbGVkIGluIABbJSAuM2YgJSAuM2YgJSAuM2ZdIFslIDYuMWZdCgBFcnJvciBwcm9jZXNzaW5nIG11bHRpbWFya2VyIGNvbmZpZyBmaWxlICclcycsIG1hcmtlciBkZWZpbml0aW9uICUzZDogRmlyc3QgbGluZSBtdXN0IGJlIHBhdHRlcm4gd2lkdGguCgBFcnJvciAoJWQpOiB1bmFibGUgdG8gb3BlbiBvcHRpY2FsIHBhcmFtZXRlcnMgZmlsZSAiJXMiIGZvciB3cml0aW5nLgoAa3BtU2V0UmVmRGF0YVNldEZpbGUoKTogTlVMTCBrcG1IYW5kbGUvZmlsZW5hbWUuCgAgICAgZW5kLgoAQXV0byB0aHJlc2hvbGQgKCVzKSBhZGp1c3RlZCB0aHJlc2hvbGQgdG8gJWQuCgAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0KAEFSX1BJWEVMX0ZPUk1BVF80MjB2AG1lZGlhbgAlbGYgJWxmICVsZiAlbGYAT2N0YXZlIG11c3QgYmUgcG9zaXRpdmUAc2NhbGUgb3V0IG9mIHJhbmdlAEltYWdlIG9mIHdyb25nIHNpemUgZm9yIHB5cmFtaWQAVW5hYmxlIHRvIGFsbG9jYXRlIGltYWdlIGRhdGEAQVJfUElYRUxfRk9STUFUX1JHQkFfNDQ0NABBc3NlcnRpb24gYGRldGVjdG9yYCBmYWlsZWQgaW4gAEFzc2VydGlvbiBgcFswXSA+IHBtMVswXWAgZmFpbGVkIGluIABBc3NlcnRpb24gYGltMS50eXBlKCkgPT0gSU1BR0VfRjMyYCBmYWlsZWQgaW4gAEFzc2VydGlvbiBgZy5jaGFubmVscygpID09IDJgIGZhaWxlZCBpbiAAQXNzZXJ0aW9uIGBzcmNfc3RlcCA+IDBgIGZhaWxlZCBpbiAAJTNkLCAlM2Q6IG1heF9zaW0gPSAlZgoAICBSZWFkIEZlYXR1cmVTZXQuCgBDYW5ub3QgZmluZCB0aGUgcGFnZSBmb3Igc2tpcHBpbmcuCgBFcnJvciAoJWQpOiB1bmFibGUgdG8gb3BlbiBvcHRpY2FsIHBhcmFtZXRlcnMgZmlsZSAiJXMiIGZvciByZWFkaW5nLgoARXJyb3Igc2F2aW5nIEtQTSBkYXRhOiBlcnJvciB3cml0aW5nIGRhdGEuCgBBUl9QSVhFTF9GT1JNQVRfNDIwdgBPdHN1AEFSX1BJWEVMX0ZPUk1BVF80MjBmACVmICVmAFN0ZXAgbXVzdCBiZSBwb3NpdGl2ZQBJbnZhbGlkIGltYWdlIHR5cGUARGV0ZWN0b3IgaXMgTlVMTABOdW1iZXIgb2YgY2hhbm5lbHMgc2hvdWxkIGJlIDIAQXNzZXJ0aW9uIGBvY3RhdmUgPCBtTnVtT2N0YXZlc2AgZmFpbGVkIGluIABBc3NlcnRpb24gYHNjYWxlIDwgbU1heFNj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AAAAWAAAAD0AAABuAAAAGgAAACQAAABqAAAAXQAAADQAAABLAAAAKQAAAEgAAABVAAAAUAAAAGYAAAA8AAAAfAAAAGkAAAAZAAAAKAAAADMAAABlAAAAVAAAABgAAAB7AAAAUwAAADIAAAAxAAAAegAAAHgAAAB5AAAAT2N0YXZlIG11c3QgYmUgbGVzcyB0aGFuIG51bWJlciBvZiBvY3RhdmVzAEFSX1BJWEVMX0ZPUk1BVF80MjBmAEFSX1BJWEVMX0ZPUk1BVF9OVjIxAEFzc2VydGlvbiBgcFswXSA+IHBbLTFdYCBmYWlsZWQgaW4gAEFzc2VydGlvbiBgZHN0LnR5cGUoKSA9PSBJTUFHRV9GMzJgIGZhaWxlZCBpbiAAQXNzZXJ0aW9uIGBkLmNoYW5uZWxzKCkgPT0gMWAgZmFpbGVkIGluIABBc3NlcnRpb24gYG1heF9oZWlnaHQgPiAwYCBmYWlsZWQgaW4gAEFzc2VydGlvbiBgZHN0X3dpZHRoID4gMGAgZmFpbGVkIGluIABBc3NlcnRpb24gYHNpemUgPiAwYCBmYWlsZWQgaW4gAEFzc2VydGlvbiBgcHlyYW1pZC0+aW1hZ2VzKCkuc2l6ZSgpID4gMGAgZmFpbGVkIGluIABQYWdlWyVkXSAgcHJlOiUzZCwgYWZ0OiUzZCwgZXJyb3IgPSAlZgoAJTNkLCAlM2Q6IG1heF9zaW0gPSAlZiwgKG1heCxtaW4pID0gJWYsICVmLCBzZCA9ICVmCgAgIFJlYWQgTWFya2VyU2V0LgoARXJyb3IgcHJvY2Vzc2luZyBtdWx0aW1hcmtlciBjb25maWcgZmlsZSAnJXMnLCBtYXJrZXIgZGVmaW5pdGlvbiAlM2Q6IExpbmVzIDIgLSA0IG11c3QgYmUgbWFya2VyIHRyYW5zZm9ybS4KAEVycm9yIGxvYWRpbmcgS1BNIGRhdGE6IHVuYWJsZSB0byBvcGVuIGZpbGUgJyVzJXMlcycgZm9yIHJlYWRpbmcuCgBQeXJhbWlkIGlzIGVtcHR5AERlc3RpbmF0aW9uIGltYWdlIHNob3VsZCBiZSBhIGZsb2F0AG1yawBzaXplIG11c3QgYmUgcG9zaXRpdmUATWF4aW11bSBiaW4gc2hvdWxkIGJlIHBvc2l0aXZlAE9ubHkgc2luZ2xlIGNoYW5uZWwgaW1hZ2VzIHN1cHBvcnRlZABBUl9QSVhFTF9GT1JNQVRfTlYyMQBBc3NlcnRpb24gYHBbMF0gPiBwWzFdYCBmYWlsZWQgaW4gAEFzc2VydGlvbiBgZHN0X3N0ZXAgPiAwYCBmYWlsZWQgaW4gAEFzc2VydGlvbiBgc2NhbGUgPj0gMGAgZmFpbGVkIGluIABKUEVHIGZpbGUgaGFzIHVuc3VwcG9ydGVkICVkLWNvbXBvbmVudCBwaXhlbHMKAEVycm9yIGxvYWRpbmcgS1BNIGRhdGE6IGVycm9yIHJlYWRpbmcgZGF0YS4KAGFyVXRpbEdldFBpeGVsRm9ybWF0TmFtZTogRXJyb3IsIHVucmVjb2duaXNlZCBwaXhlbCBmb3JtYXQgKCVkKS4KAFNjYWxlIG11c3QgYmUgcG9zaXRpdmUAVW5rbm93biBpbWFnZSB0eXBlAEFzc2VydGlvbiBgcFswXSA+IHBwMVstMV1gIGZhaWxlZCBpbiAAQXNzZXJ0aW9uIGBoaXN0ICE9IE5VTExgIGZhaWxlZCBpbiAAQXNzZXJ0aW9uIGAoc3JjX3dpZHRoJTIpID09IDFgIGZhaWxlZCBpbiAAQXNzZXJ0aW9uIGBpbTEuY2hhbm5lbHMoKSA9PSAxYCBmYWlsZWQgaW4gAEFzc2VydGlvbiBgbVJlZkltYWdlV2lkdGggPiAwYCBmYWlsZWQgaW4gAEFzc2VydGlvbiBgcHlyYW1pZC0+aW1hZ2VzKClbMF0ud2lkdGgoKSA9PSBkZXRlY3Rvci0+d2lkdGgoKWAgZmFpbGVkIGluIABPdXQgb2YgbWVtb3J5LgoAa3BtQ2hhbmdlUGFnZU5vT2ZSZWZEYXRhU2V0KCk6IE5VTEwgcmVmRGF0YVNldC4KAGFyVmlkZW9VdGlsR2V0UGl4ZWxGb3JtYXROYW1lOiBFcnJvciwgdW5yZWNvZ25pc2VkIHBpeGVsIGZvcm1hdCAoJWQpLgoARXJyb3Igb3BlbmluZyBmaWxlICclcy5tcmsnLgoAJSUlMDJ4AHZlY3RvcgBQeXJhbWlkIGFuZCBkZXRlY3RvciBzaXplIG1pc21hdGNoAC9ob21lL3dhbHRlci9rYWx3YWx0LWdpdGh1Yi9BUi5qcy1naXRodWItb3JnL2FydG9vbGtpdDUtanMvbGliL2FydG9vbGtpdDUvbGliL1NSQy9LUE0vRnJlYWtNYXRjaGVyL2RldGVjdG9ycy9vcmllbnRhdGlvbl9hc3NpZ25tZW50LmgAJWYgJWYgJWYgJWYAd2lkdGggbXVzdCBiZSBwb3NpdGl2ZQBVbnN1cHBvcnRlZCBpbWFnZSB0eXBlAFNvdXJjZSB3aWR0aCBtdXN0IGJlIG9kZABBc3NlcnRpb24gYHNjYWxlIDwgbU51bVNjYWxlc1Blck9jdGF2ZWAgZmFpbGVkIGluIABBc3NlcnRpb24gYHBbMF0gPiBwcDFbMF1gIGZhaWxlZCBpbiAAQXNzZXJ0aW9uIGBpbTIuY2hhbm5lbHMoKSA9PSAxYCBmYWlsZWQgaW4gAC9wcm9jL3NlbGYvZXhlAFNjYWxlIG11c3QgYmUgbGVzcyB0aGFuIG51bWJlciBvZiBzY2FsZSBwZXIgb2N0YXZlAEhpc3RvZ3JhbSBwb2ludGVyIGlzIE5VTEwAQXNzZXJ0aW9uIGBwWzBdID4gcHAxWzFdYCBmYWlsZWQgaW4gAEFzc2VydGlvbiBgKGNodW5rX3NpemUlMik9PTBgIGZhaWxlZCBpbiAAQXNzZXJ0aW9uIGBtUmVmSW1hZ2VIZWlnaHQgPiAwYCBmYWlsZWQgaW4gAEFzc2VydGlvbiBgcHlyYW1pZC0+aW1hZ2VzKClbMF0uaGVpZ2h0KCkgPT0gZGV0ZWN0b3ItPmhlaWdodCgpYCBmYWlsZWQgaW4gAEFzc2VydGlvbiBgZC53aWR0aCgpID09IGltMi53aWR0aCgpYCBmYWlsZWQgaW4gAFRyYW5zZm9ybWF0aW9uIG1hdHJpeCByZWFkIGVycm9yISEKAHZlY3RvcgBJbWFnZXMgbXVzdCBoYXZlIHRoZSBzYW1lIHdpZHRoAGpwZwBVbnRlc3RlZCBiZWhhdmlvciBmb3Igb2RkIGNodW5rIHNpemUAaGVpZ2h0IG11c3QgYmUgcG9zaXRpdmUAT2N0YXZlIG91dCBvZiByYW5nZQBBc3NlcnRpb24gYChmYmluKzAuNWYpID4gMCAmJiAoZmJpbi0wLjVmKSA8IG51bV9iaW5zYCBmYWlsZWQgaW4gAEFzc2VydGlvbiBgYXNzaWdubWVudC5zaXplKCkgPT0gbnVtX2luZGljZXNgIGZhaWxlZCBpbiAAQXNzZXJ0aW9uIGAhaXNpbmYodVswXSlgIGZhaWxlZCBpbiAAJXMlcwoAV2lkdGggaXMgemVybwAvaG9tZS93YWx0ZXIva2Fsd2FsdC1naXRodWIvQVIuanMtZ2l0aHViLW9yZy9hcnRvb2xraXQ1LWpzL2xpYi9hcnRvb2xraXQ1L2xpYi9TUkMvS1BNL0ZyZWFrTWF0Y2hlci9tYXRjaGVycy9ob3VnaF9zaW1pbGFyaXR5X3ZvdGluZy5oAC9ob21lL3dhbHRlci9rYWx3YWx0LWdpdGh1Yi9BUi5qcy1naXRodWItb3JnL2FydG9vbGtpdDUtanMvbGliL2FydG9vbGtpdDUvbGliL1NSQy9LUE0vRnJlYWtNYXRjaGVyL21hdGNoZXJzL2JpbmFyeV9oaWVyYXJjaGljYWxfY2x1c3RlcmluZy5oAERlY2ltYWwgYmluIHBvc2l0aW9uIGluZGV4IG91dCBvZiByYW5nZQBTY2FsZSBvdXQgb2YgcmFuZ2UASU5GAEFzc2VydGlvbiBgZC5oZWlnaHQoKSA9PSBpbTIuaGVpZ2h0KClgIGZhaWxlZCBpbiAASW1hZ2VzIG11c3QgaGF2ZSB0aGUgc2FtZSBoZWlnaHQALy4uL3NoYXJlLyVzAEhlaWdodCBpcyB6ZXJvAEFzc2lnbm1lbnQgc2l6ZSB3cm9uZwBBc3NlcnRpb24gYChpbnQpc3RkOjpmbG9vcih4KSA9PSAoaW50KXhgIGZhaWxlZCBpbiAAQXNzZXJ0aW9uIGBpbmRleCA+PSAwYCBmYWlsZWQgaW4gAEFzc2VydGlvbiBgbWFnbml0dWRlID49IDBgIGZhaWxlZCBpbiAAQXNzZXJ0aW9uIGAhaXNpbmYodVsxXSlgIGZhaWxlZCBpbiAAU3RlcCBpcyB6ZXJvAC9ob21lL3dhbHRlci9rYWx3YWx0LWdpdGh1Yi9BUi5qcy1naXRodWItb3JnL2FydG9vbGtpdDUtanMvbGliL2FydG9vbGtpdDUvbGliL1NSQy9LUE0vRnJlYWtNYXRjaGVyL2RldGVjdG9ycy9pbnRlcnBvbGF0ZS5oAE1hZ25pdHVkZSBjYW5ub3QgYmUgbmVnYXRpdmUAaW5kZXggb3V0IG9mIHJhbmdlAEhPTUUAQXNzZXJ0aW9uIGBhc3NpZ25tZW50W2ldICE9IC0xYCBmYWlsZWQgaW4gAEFzc2VydGlvbiBgaW0xLndpZHRoKCkgPT0gaW0yLndpZHRoKClgIGZhaWxlZCBpbiAAL2hvbWUvd2FsdGVyL2thbHdhbHQtZ2l0aHViL0FSLmpzLWdpdGh1Yi1vcmcvYXJ0b29sa2l0NS1qcy9saWIvYXJ0b29sa2l0NS9saWIvU1JDL0tQTS9GcmVha01hdGNoZXIvZGV0ZWN0b3JzL2hhcnJpcy1pbmxpbmUuaAAvcHJvYy9zZWxmL2NtZGxpbmUAZmxvb3IoKSBhbmQgY2FzdCBub3QgdGhlIHNhbWUAQXNzaWdubWVudCBpcyBpbnZhbGlkAEFzc2VydGlvbiBgbnVtX2JpbnMgPj0gMGAgZmFpbGVkIGluIABBc3NlcnRpb24gYGJpblggPj0gMGAgZmFpbGVkIGluIABBc3NlcnRpb24gYChpPj4xKSA8IHN0ZDo6Y2VpbCgoc3JjX2hlaWdodC0xKS8yLmYpYCBmYWlsZWQgaW4gAEFzc2VydGlvbiBgaW0xLmhlaWdodCgpID09IGltMi5oZWlnaHQoKWAgZmFpbGVkIGluIABJbmRleCBpcyBvdXQgb2YgYm91bmRzAE51bWJlciBiaW5zIG11c3QgYmUgcG9zaXRpdmUAYmluWCBvdXQgb2YgcmFuZ2UAT3V0IG9mIHJhbmdlAERvRyBQeXJhbWlkAHJiAEFzc2VydGlvbiBgKGludClzdGQ6OmZsb29yKHkpID09IChpbnQpeWAgZmFpbGVkIGluIABBc3NlcnRpb24gYGFzc2lnbm1lbnRbaV0gPCBudW1faW5kaWNlc2AgZmFpbGVkIGluIABOb24tbWF4IHN1cHByZXNzaW9uAEFzc2lnbm1lbnQgb3V0IG9mIHJhbmdlAEFzc2VydGlvbiBgeXAgPj0gMCAmJiB5cCA8IGhlaWdodGAgZmFpbGVkIGluIABBc3NlcnRpb24gYGJpblggPCBtTnVtWEJpbnNgIGZhaWxlZCBpbiAAQXNzZXJ0aW9uIGBpbWFnZS50eXBlKCkgPT0gSU1BR0VfVUlOVDhgIGZhaWxlZCBpbiAAQXNzZXJ0aW9uIGB3MSA+PSAwYCBmYWlsZWQgaW4gACVzOiAlcwoAeXAgb3V0IG9mIGJvdW5kcwBTdWJwaXhlbAB3MSBtdXN0IGJlIHBvc2l0aXZlAFVuYWJsZSB0byBkZXRlcm1pbmUgcHJvY2VzcyBuYW1lAE9ubHkgZ3JheSBzY2FsZSBpbWFnZXMgYXJlIHN1cHBvcnRlZABBc3NlcnRpb24gYGluZGljZXNbYXNzaWdubWVudFtpXV0gPCBudW1fZmVhdHVyZXNgIGZhaWxlZCBpbiAAQXNzZXJ0aW9uIGBiaW5ZID49IDBgIGZhaWxlZCBpbiAAcHJ1bmVGZWF0dXJlcwAlcyVzAGJpblkgb3V0IG9mIHJhbmdlAEFzc2VydGlvbiBgeXBfcGx1c18xID49IDAgJiYgeXBfcGx1c18xIDwgaGVpZ2h0YCBmYWlsZWQgaW4gAEFzc2VydGlvbiBgb2N0YXZlIDwgbU51bU9jdGF2ZXNgIGZhaWxlZCBpbiAAQXNzZXJ0aW9uIGB3MiA+PSAwYCBmYWlsZWQgaW4gAEFzc2VydGlvbiBgaXQtPnNlY29uZC5zaXplKCkgIT0gMGAgZmFpbGVkIGluIABGaW5kIE9yaWVudGF0aW9ucwB5cF9wbHVzXzEgb3V0IG9mIGJvdW5kcwAvaG9tZS93YWx0ZXIva2Fsd2FsdC1naXRodWIvQVIuanMtZ2l0aHViLW9yZy9hcnRvb2xraXQ1LWpzL2xpYi9hcnRvb2xraXQ1L2xpYi9TUkMvS1BNL0ZyZWFrTWF0Y2hlci9kZXRlY3RvcnMvZ2F1c3NpYW5fc2NhbGVfc3BhY2VfcHlyYW1pZC5oAHcyIG11c3QgYmUgcG9zaXRpdmUAQ2x1c3RlciBtdXN0IGhhdmUgYXRsZWFzZXQgMSBmZWF0dXJlAC92YXIvY2FjaGUAQXNzZXJ0aW9uIGBiaW5ZIDwgbU51bVlCaW5zYCBmYWlsZWQgaW4gAEFzc2VydGlvbiBgZHN0W2ldID49IC0yNTgwNjRgIGZhaWxlZCBpbiAALy5jYWNoZQBPY3RhdmUgb3V0IG9mIHJhbmdlAEFzc2VydGlvbiBgYjEgPj0gMCAmJiBiMSA8IG51bV9iaW5zYCBmYWlsZWQgaW4gAEFzc2VydGlvbiBgeHAgPj0gMCAmJiB4cCA8IHdpZHRoYCBmYWlsZWQgaW4gAEFzc2VydGlvbiBgZHN0W2ldIDw9IDI1ODA2NGAgZmFpbGVkIGluIABBc3NlcnRpb24gYGJpbkFuZ2xlID49IDBgIGZhaWxlZCBpbiAAQXNzZXJ0aW9uIGBpbTAuaGVpZ2h0KCkgPT0gaW0xLmhlaWdodCgpYCBmYWlsZWQgaW4gAEFzc2VydGlvbiBgbUsgPT0gbUNlbnRlcnMuc2l6ZSgpYCBmYWlsZWQgaW4gAEhlaWdodCBpcyBpbmNvbnNpc3RlbnQAeHAgb3V0IG9mIGJvdW5kcwAlcy8lcwAvaG9tZS93YWx0ZXIva2Fsd2FsdC1naXRodWIvQVIuanMtZ2l0aHViLW9yZy9hcnRvb2xraXQ1LWpzL2xpYi9hcnRvb2xraXQ1L2xpYi9TUkMvS1BNL0ZyZWFrTWF0Y2hlci9tYXRjaGVycy9rbWVkb2lkcy5oAGIxIGJpbiBpbmRleCBvdXQgb2YgcmFuZ2UAYmluQW5nbGUgb3V0IG9mIHJhbmdlAEFzc2VydGlvbiBgc2NhbGUgPCBtTnVtU2NhbGVzUGVyT2N0YXZlYCBmYWlsZWQgaW4gAEFzc2VydGlvbiBgZHN0W2ldIDw9IDQxMjkwMjRgIGZhaWxlZCBpbiAAayBzaG91bGQgbWF0Y2ggdGhlIG51bWJlciBvZiBjbHVzdGVyIGNlbnRlcnMAU2NhbGUgb3V0IG9mIHJhbmdlAC92YXIvbGliAEFzc2VydGlvbiBgYjIgPj0gMCAmJiBiMiA8IG51bV9iaW5zYCBmYWlsZWQgaW4gAEFzc2VydGlvbiBgYmluQW5nbGUgPCBtTnVtQW5nbGVCaW5zYCBmYWlsZWQgaW4gAEFzc2VydGlvbiBgeHBfcGx1c18xID49IDAgJiYgeHBfcGx1c18xIDwgd2lkdGhgIGZhaWxlZCBpbiAAQXNzZXJ0aW9uIGBkc3RbaV0gPj0gLTQxMjkwMjRgIGZhaWxlZCBpbiAAQXNzZXJ0aW9uIGBpbTAuaGVpZ2h0KCkgPT0gaW0yLmhlaWdodCgpYCBmYWlsZWQgaW4gAHhwX3BsdXNfMSBvdXQgb2YgYm91bmRzAC8uY29uZmlnAGIyIGJpbiBpbmRleCBvdXQgb2YgcmFuZ2UAQXNzZXJ0aW9uIGBudW1fZmVhdHVyZXMgPiAwYCBmYWlsZWQgaW4gAEFzc2VydGlvbiBgYmluU2NhbGUgPj0gMGAgZmFpbGVkIGluIABBc3NlcnRpb24gYChpbTEuaGVpZ2h0KCk+PjEpID09IGltMi5oZWlnaHQoKWAgZmFpbGVkIGluIAB2ZWN0b3IATnVtYmVyIG9mIGZlYXR1cmVzIG11c3QgYmUgcG9zaXRpdmUAYmluU2NhbGUgb3V0IG9mIHJhbmdlAFRNUERJUgBBc3NlcnRpb24gYGd4eCA8PSA0MTI5MDI0YCBmYWlsZWQgaW4gAEFzc2VydGlvbiBgdzAgPj0gMCAmJiB3MCA8PSAxLjAwMDFgIGZhaWxlZCBpbiAAQXNzZXJ0aW9uIGAoaW0wLmhlaWdodCgpPj4xKSA9PSBpbTEuaGVpZ2h0KClgIGZhaWxlZCBpbiAAdmVjdG9yAC90bXAAT3V0IG9mIHJhbmdlAEFzc2VydGlvbiBgYmluU2NhbGUgPCBtTnVtU2NhbGVCaW5zYCBmYWlsZWQgaW4gAEFzc2VydGlvbiBgbnVtX2luZGljZXMgPD0gbnVtX2ZlYXR1cmVzYCBmYWlsZWQgaW4gAEFzc2VydGlvbiBgZ3h4ID49IDBgIGZhaWxlZCBpbiAAQXNzZXJ0aW9uIGAoaW0wLmhlaWdodCgpPj4xKSA9PSBpbTIuaGVpZ2h0KClgIGZhaWxlZCBpbiAATW9yZSBpbmRpY2VzIHRoYW4gZmVhdHVyZXMARXJyb3IgbG9va2luZyBmb3IgcmVzb3VyY2VzIGRpcmVjdG9yeSBwYXRoAEFzc2VydGlvbiBgcm93IDwgbUhlaWdodGAgZmFpbGVkIGluIABBc3NlcnRpb24gYG1CdWNrZXRzLnNpemUoKSA9PSBtTnVtQnVja2V0c1hgIGZhaWxlZCBpbiAAQXNzZXJ0aW9uIGBneXkgPD0gNDEyOTAyNGAgZmFpbGVkIGluIABBc3NlcnRpb24gYHcxID49IDAgJiYgdzEgPD0gMS4wMDAxYCBmYWlsZWQgaW4gAEFzc2VydGlvbiBgaW5kZXggPD0gKGJpblggKyBiaW5ZKm1OdW1YQmlucyArIGJpbkFuZ2xlKm1OdW1YQmlucyptTnVtWUJpbnMgKyBiaW5TY2FsZSptTnVtWEJpbnMqbU51bVlCaW5zKm1OdW1BbmdsZUJpbnMpYCBmYWlsZWQgaW4gAEVycm9yIGNyZWF0aW5nIHJlc291cmNlcyBkaXJlY3RvcnkgcGF0aAAvaG9tZS93YWx0ZXIva2Fsd2FsdC1naXRodWIvQVIuanMtZ2l0aHViLW9yZy9hcnRvb2xraXQ1LWpzL2xpYi9hcnRvb2xraXQ1L2xpYi9TUkMvS1BNL0ZyZWFrTWF0Y2hlci9mcmFtZXdvcmsvaW1hZ2UuaABCdWNrZXRzIGFyZSBub3QgYWxsb2NhdGVkAEFzc2VydGlvbiBgbnVtX2luZGljZXMgPj0gbUtgIGZhaWxlZCBpbiAAQXNzZXJ0aW9uIGB3MiA+PSAwICYmIHcyIDw9IDEuMDAwMWAgZmFpbGVkIGluIABBc3NlcnRpb24gYGd5eSA+PSAwYCBmYWlsZWQgaW4gAE5vdCBlbm91Z2ggZmVhdHVyZXMAcm93IG91dCBvZiBib3VuZHMAdmVjdG9yAEFzc2VydGlvbiBgbUJ1Y2tldHNbMF0uc2l6ZSgpID09IG1OdW1CdWNrZXRzWWAgZmFpbGVkIGluIABBc3NlcnRpb24gYGd4eSA8PSA0MTI5MDI0YCBmYWlsZWQgaW4gAEFzc2VydGlvbiBgdzMgPj0gMCAmJiB3MyA8PSAxLjAwMDFgIGZhaWxlZCBpbiAARXJyb3I6IFVuYWJsZSB0byBjaGFuZ2Ugd29ya2luZyBkaXJlY3RvcnkgdG8gJyVzJy4KAEFzc2lnbm1lbnQgc2l6ZSBpcyBpbmNvcnJlY3QAQXNzZXJ0aW9uIGBtRmVhdHVyZVBvaW50cy5zaXplKCkgPD0gbU1heE51bUZlYXR1cmVQb2ludHNgIGZhaWxlZCBpbiAAQXNzZXJ0aW9uIGBneHkgPj0gLTQxMjkwMjRgIGZhaWxlZCBpbiAAQXNzZXJ0aW9uIGAodzArdzErdzIrdzMpIDw9IDEuMDAwMWAgZmFpbGVkIGluIABBc3NlcnRpb24gYG4gPiAwYCBmYWlsZWQgaW4gAFslIC4zZiAlIC4zZiAlIC4zZl0gWyUgNi4xZl0KAAADAAAAAwAAAAQAAAAEAAAABAAAAAEAAAAEAAAAAgAAAAIAAAACAAAAAgAAAAIAAAABAAAAAQAAAAEAQYCtAQunMgQAAACIAAAABQAAAJAAAAAGAAAAmAAAAAkAAACwAAAAGAQAAFMLAAAGDgAA0w8AAC5pc2V0AHJiAE42dmlzaW9uMjVHYXVzc2lhblNjYWxlU3BhY2VQeXJhbWlkRQAAABT6AAC5VgAAVG9vIG1hbnkgZmVhdHVyZSBwb2ludHMAdmVjdG9yAC9ob21lL3dhbHRlci9rYWx3YWx0LWdpdGh1Yi9BUi5qcy1naXRodWItb3JnL2FydG9vbGtpdDUtanMvbGliL2FydG9vbGtpdDUvbGliL1NSQy9LUE0vRnJlYWtNYXRjaGVyL3V0aWxzL3BhcnRpYWxfc29ydC5oAEFzc2VydGlvbiBgcG9zID09IDY2NmAgZmFpbGVkIGluIABBc3NlcnRpb24gYG51bV9jZW50ZXJzID4gMGAgZmFpbGVkIGluIABUaGVyZSBtdXN0IGJlIGF0IGxlYXN0IDEgY2VudGVyAG4gbXVzdCBiZSBwb3NpdGl2ZQBQb3NpdGlvbiBpcyBub3Qgd2l0aGluIHJhbmdlAEFzc2VydGlvbiBga3Auc2NhbGUgPCBtTGFwbGFjaWFuUHlyYW1pZC5udW1TY2FsZVBlck9jdGF2ZSgpYCBmYWlsZWQgaW4gAFslc10gWyVzXSBbJXNdIDogRm91bmQgJWQgZmVhdHVyZXMgaW4gcXVlcnkARmVhdHVyZSBwb2ludCBzY2FsZSBpcyBvdXQgb2YgYm91bmRzAEFzc2VydGlvbiBgayA+IDBgIGZhaWxlZCBpbiAAayBtdXN0IGJlIHBvc2l0aXZlAEZpbmQgTWF0Y2hlcyAoMSkAQXNzZXJ0aW9uIGBrcC5zY29yZSA9PSBsYXAxLmdldDxmbG9hdD4oeSlbeF1gIGZhaWxlZCBpbiAAU2NvcmUgaXMgbm90IGNvbnNpc3RlbnQgd2l0aCB0aGUgRG9HIGltYWdlAEhvdWdoIFZvdGluZyAoMSkARmluZCBIb3VnaCBNYXRjaGVzICgxKQBBc3NlcnRpb24gYGJ1Y2tldFswXS5maXJzdCA+PSBidWNrZXRbbl0uZmlyc3RgIGZhaWxlZCBpbiAAbnRoX2VsZW1lbnQgZmFpbGVkAEVzdGltYXRlIEhvbW9ncmFwaHkgKDEpAEZpbmQgSW5saWVycyAoMSkAQXNzZXJ0aW9uIGBvY3RhdmUgPCBtTnVtT2N0YXZlc2AgZmFpbGVkIGluIAAvaG9tZS93YWx0ZXIva2Fsd2FsdC1naXRodWIvQVIuanMtZ2l0aHViLW9yZy9hcnRvb2xraXQ1LWpzL2xpYi9hcnRvb2xraXQ1L2xpYi9TUkMvS1BNL0ZyZWFrTWF0Y2hlci9kZXRlY3RvcnMvZ2F1c3NpYW5fc2NhbGVfc3BhY2VfcHlyYW1pZC5oAEZpbmQgTWF0Y2hlcyAoMikAT2N0YXZlIG91dCBvZiByYW5nZQBIb3VnaCBWb3RpbmcgKDIpAEZpbmQgSG91Z2ggTWF0Y2hlcyAoMikAQXNzZXJ0aW9uIGBzY2FsZSA8IG1OdW1TY2FsZXNQZXJPY3RhdmVgIGZhaWxlZCBpbiAAU2NhbGUgb3V0IG9mIHJhbmdlAEVzdGltYXRlIEhvbW9ncmFwaHkgKDIpAEZpbmQgSW5saWVycyAoMikAQXNzZXJ0aW9uIGBpbmRleCA8IG1JbWFnZXMuc2l6ZSgpYCBmYWlsZWQgaW4gAC9ob21lL3dhbHRlci9rYWx3YWx0LWdpdGh1Yi9BUi5qcy1naXRodWItb3JnL2FydG9vbGtpdDUtanMvbGliL2FydG9vbGtpdDUvbGliL1NSQy9LUE0vRnJlYWtNYXRjaGVyL2RldGVjdG9ycy9Eb0dfc2NhbGVfaW52YXJpYW50X2RldGVjdG9yLmgAQXNzZXJ0aW9uIGBiZXN0X2luZGV4ICE9IHN0ZDo6bnVtZXJpY19saW1pdHM8c2l6ZV90Pjo6bWF4KClgIGZhaWxlZCBpbiAAL2hvbWUvd2FsdGVyL2thbHdhbHQtZ2l0aHViL0FSLmpzLWdpdGh1Yi1vcmcvYXJ0b29sa2l0NS1qcy9saWIvYXJ0b29sa2l0NS9saWIvU1JDL0tQTS9GcmVha01hdGNoZXIvbWF0Y2hlcnMvZmVhdHVyZV9tYXRjaGVyLWlubGluZS5oAEluZGV4IGlzIG91dCBvZiByYW5nZQBTb21ldGhpbmcgc3RyYW5nZQBBc3NlcnRpb24gYHNjYWxlID49IDBgIGZhaWxlZCBpbiAAU2NhbGUgbXVzdCBiZSBwb3NpdGl2ZQBBc3NlcnRpb24gYG1NYXRjaGVzLnNpemUoKSA8PSBmZWF0dXJlczEtPnNpemUoKWAgZmFpbGVkIGluIABOdW1iZXIgb2YgbWF0Y2hlcyBzaG91bGQgYmUgbG93ZXIAU2NhbGUgbXVzdCBiZSBsZXNzIHRoYW4gbnVtYmVyIG9mIHNjYWxlIHBlciBvY3RhdmUAQXNzZXJ0aW9uIGBsYXAwLmhlaWdodCgpID09IGxhcDEuaGVpZ2h0KCkgPT0gbGFwMi5oZWlnaHQoKWAgZmFpbGVkIGluIABBc3NlcnRpb24gYG1Sb290LmdldCgpYCBmYWlsZWQgaW4gAFdpZHRoL2hlaWdodCBhcmUgbm90IGNvbnNpc3RlbnQAUm9vdCBjYW5ub3QgYmUgTlVMTABBc3NlcnRpb24gYG1pbmkgIT0gLTFgIGZhaWxlZCBpbiAAQXNzZXJ0aW9uIGAobGFwMC5oZWlnaHQoKSA9PSBsYXAxLmhlaWdodCgpKSAmJiAoKGxhcDEuaGVpZ2h0KCk+PjEpID09IGxhcDIuaGVpZ2h0KCkpYCBmYWlsZWQgaW4gAE1pbmltdW0gaW5kZXggbm90IHNldABBc3NlcnRpb24gYCgobGFwMC53aWR0aCgpPj4xKSA9PSBsYXAxLndpZHRoKCkpICYmIChsYXAxLndpZHRoKCkgPT0gbGFwMi53aWR0aCgpKWAgZmFpbGVkIGluIABBc3NlcnRpb24gYDBgIGZhaWxlZCBpbiAAQXNzZXJ0aW9uIGBuIDw9IGluX21hdGNoZXMuc2l6ZSgpYCBmYWlsZWQgaW4gAEltYWdlIHNpemVzIGFyZSBpbmNvbnNpc3RlbnQAU2hvdWxkIGJlIHRoZSBzYW1lAEFzc2VydGlvbiBgYmluWCA+PSAwYCBmYWlsZWQgaW4gAEFzc2VydGlvbiBgKHgtMSkgPj0gMCAmJiAoeCsxKSA8IGxhcDEud2lkdGgoKWAgZmFpbGVkIGluIAB4IG91dCBvZiBib3VuZHMAL2hvbWUvd2FsdGVyL2thbHdhbHQtZ2l0aHViL0FSLmpzLWdpdGh1Yi1vcmcvYXJ0b29sa2l0NS1qcy9saWIvYXJ0b29sa2l0NS9saWIvU1JDL0tQTS9GcmVha01hdGNoZXIvbWF0Y2hlcnMvaG91Z2hfc2ltaWxhcml0eV92b3RpbmcuaABiaW5YIG91dCBvZiByYW5nZQBBc3NlcnRpb24gYCh5LTEpID49IDAgJiYgKHkrMSkgPCBsYXAxLmhlaWdodCgpYCBmYWlsZWQgaW4gAHkgb3V0IG9mIGJvdW5kcwBBc3NlcnRpb24gYGJpblggPCBtTnVtWEJpbnNgIGZhaWxlZCBpbiAAQXNzZXJ0aW9uIGBiaW5ZID49IDBgIGZhaWxlZCBpbiAAQXNzZXJ0aW9uIGBsYXAwLndpZHRoKCkgPT0gbGFwMS53aWR0aCgpYCBmYWlsZWQgaW4gAEltYWdlIGRpbWVuc2lvbnMgaW5jb25zaXN0ZW50AGJpblkgb3V0IG9mIHJhbmdlAEFzc2VydGlvbiBgYmluWSA8IG1OdW1ZQmluc2AgZmFpbGVkIGluIABBc3NlcnRpb24gYGxhcDAud2lkdGgoKSA9PSBsYXAyLndpZHRoKClgIGZhaWxlZCBpbiAAQXNzZXJ0aW9uIGBiaW5BbmdsZSA+PSAwYCBmYWlsZWQgaW4gAEFzc2VydGlvbiBgbGFwMC5oZWlnaHQoKSA9PSBsYXAxLmhlaWdodCgpYCBmYWlsZWQgaW4gAGJpbkFuZ2xlIG91dCBvZiByYW5nZQBBc3NlcnRpb24gYGxhcDAuaGVpZ2h0KCkgPT0gbGFwMi5oZWlnaHQoKWAgZmFpbGVkIGluIABBc3NlcnRpb24gYGJpbkFuZ2xlIDwgbU51bUFuZ2xlQmluc2AgZmFpbGVkIGluIABBc3NlcnRpb24gYCh4LTEpID49IDAgJiYgKHgrMSkgPCBpbS53aWR0aCgpYCBmYWlsZWQgaW4gAEFzc2VydGlvbiBgYmluU2NhbGUgPj0gMGAgZmFpbGVkIGluIABBc3NlcnRpb24gYCh5LTEpID49IDAgJiYgKHkrMSkgPCBpbS5oZWlnaHQoKWAgZmFpbGVkIGluIABiaW5TY2FsZSBvdXQgb2YgcmFuZ2UAQXNzZXJ0aW9uIGAobGFwMC53aWR0aCgpPj4xKSA9PSBsYXAyLndpZHRoKClgIGZhaWxlZCBpbiAAQXNzZXJ0aW9uIGBiaW5TY2FsZSA8IG1OdW1TY2FsZUJpbnNgIGZhaWxlZCBpbiAAQXNzZXJ0aW9uIGAobGFwMC5oZWlnaHQoKT4+MSkgPT0gbGFwMi5oZWlnaHQoKWAgZmFpbGVkIGluIABBc3NlcnRpb24gYHhfZGl2XzItMC41ZiA+PSAwYCBmYWlsZWQgaW4gAEFzc2VydGlvbiBgZGlzdEJpbkFuZ2xlID49IDBgIGZhaWxlZCBpbiAAeF9kaXZfMiBvdXQgb2YgYm91bmRzIG91dCBvZiBib3VuZHMgZm9yIGludGVycG9sYXRpb24AZGlzdEJpbkFuZ2xlIG11c3Qgbm90IGJlIG5lZ2F0aXZlAEFzc2VydGlvbiBgaHlwLnNpemUoKSA+PSA5Km1heF9udW1faHlwb3RoZXNlc2AgZmFpbGVkIGluIABBc3NlcnRpb24gYHlfZGl2XzItMC41ZiA+PSAwYCBmYWlsZWQgaW4gAHlfZGl2XzIgb3V0IG9mIGJvdW5kcyBvdXQgb2YgYm91bmRzIGZvciBpbnRlcnBvbGF0aW9uAC9ob21lL3dhbHRlci9rYWx3YWx0LWdpdGh1Yi9BUi5qcy1naXRodWItb3JnL2FydG9vbGtpdDUtanMvbGliL2FydG9vbGtpdDUvbGliL1NSQy9LUE0vRnJlYWtNYXRjaGVyL2hvbW9ncmFwaHlfZXN0aW1hdGlvbi9yb2J1c3RfaG9tb2dyYXBoeS5oAGh5cCB2ZWN0b3Igc2hvdWxkIGJlIG9mIHNpemUgOSptYXhfbnVtX2h5cG90aGVzZXMAQXNzZXJ0aW9uIGB4X2Rpdl8yKzAuNWYgPCBsYXAyLndpZHRoKClgIGZhaWxlZCBpbiAAQXNzZXJ0aW9uIGB0bXBfaS5zaXplKCkgPj0gbnVtX3BvaW50c2AgZmFpbGVkIGluIABBc3NlcnRpb24gYHlfZGl2XzIrMC41ZiA8IGxhcDIuaGVpZ2h0KClgIGZhaWxlZCBpbiAAdG1wX2kgdmVjdG9yIHNob3VsZCBiZSBvZiBzaXplIG51bV9wb2ludHMAQXNzZXJ0aW9uIGAobGFwMC53aWR0aCgpPj4xKSA9PSBsYXAxLndpZHRoKClgIGZhaWxlZCBpbiAAQXNzZXJ0aW9uIGBoeXBfY29zdHMuc2l6ZSgpID49IG1heF9udW1faHlwb3RoZXNlc2AgZmFpbGVkIGluIABBc3NlcnRpb24gYChsYXAwLmhlaWdodCgpPj4xKSA9PSBsYXAxLmhlaWdodCgpYCBmYWlsZWQgaW4gAHZlY3RvcgBBc3NlcnRpb24gYG4gPiAwYCBmYWlsZWQgaW4gAC9ob21lL3dhbHRlci9rYWx3YWx0LWdpdGh1Yi9BUi5qcy1naXRodWItb3JnL2FydG9vbGtpdDUtanMvbGliL2FydG9vbGtpdDUvbGliL1NSQy9LUE0vRnJlYWtNYXRjaGVyL3V0aWxzL3BhcnRpYWxfc29ydC5oAEFzc2VydGlvbiBgcm93IDwgbUhlaWdodGAgZmFpbGVkIGluIAAvaG9tZS93YWx0ZXIva2Fsd2FsdC1naXRodWIvQVIuanMtZ2l0aHViLW9yZy9hcnRvb2xraXQ1LWpzL2xpYi9hcnRvb2xraXQ1L2xpYi9TUkMvS1BNL0ZyZWFrTWF0Y2hlci9mcmFtZXdvcmsvaW1hZ2UuaABuIG11c3QgYmUgcG9zaXRpdmUAcm93IG91dCBvZiBib3VuZHMAQXNzZXJ0aW9uIGBrID4gMGAgZmFpbGVkIGluIABrIG11c3QgYmUgcG9zaXRpdmUAQXNzZXJ0aW9uIGAoaW50KXN0ZDo6Zmxvb3IoeCkgPT0gKGludCl4YCBmYWlsZWQgaW4gAC9ob21lL3dhbHRlci9rYWx3YWx0LWdpdGh1Yi9BUi5qcy1naXRodWItb3JnL2FydG9vbGtpdDUtanMvbGliL2FydG9vbGtpdDUvbGliL1NSQy9LUE0vRnJlYWtNYXRjaGVyL2RldGVjdG9ycy9pbnRlcnBvbGF0ZS5oAEFzc2VydGlvbiBgMGAgZmFpbGVkIGluIABGYWlsZWQgdG8gY29tcHV0ZSBtYXRyaXggaW52ZXJzZQBmbG9vcigpIGFuZCBjYXN0IG5vdCB0aGUgc2FtZQBBc3NlcnRpb24gYChpbnQpc3RkOjpmbG9vcih5KSA9PSAoaW50KXlgIGZhaWxlZCBpbiAAQXNzZXJ0aW9uIGB5cCA+PSAwICYmIHlwIDwgaGVpZ2h0YCBmYWlsZWQgaW4gAHlwIG91dCBvZiBib3VuZHMAQXNzZXJ0aW9uIGB5cF9wbHVzXzEgPj0gMCAmJiB5cF9wbHVzXzEgPCBoZWlnaHRgIGZhaWxlZCBpbiAAeXBfcGx1c18xIG91dCBvZiBib3VuZHMAQXNzZXJ0aW9uIGB4cCA+PSAwICYmIHhwIDwgd2lkdGhgIGZhaWxlZCBpbiAAeHAgb3V0IG9mIGJvdW5kcwBBc3NlcnRpb24gYHhwX3BsdXNfMSA+PSAwICYmIHhwX3BsdXNfMSA8IHdpZHRoYCBmYWlsZWQgaW4gAHhwX3BsdXNfMSBvdXQgb2YgYm91bmRzAEFzc2VydGlvbiBgdzAgPj0gMCAmJiB3MCA8PSAxLjAwMDFgIGZhaWxlZCBpbiAAT3V0IG9mIHJhbmdlAEFzc2VydGlvbiBgdzEgPj0gMCAmJiB3MSA8PSAxLjAwMDFgIGZhaWxlZCBpbiAAQXNzZXJ0aW9uIGB3MiA+PSAwICYmIHcyIDw9IDEuMDAwMWAgZmFpbGVkIGluIABBc3NlcnRpb24gYHczID49IDAgJiYgdzMgPD0gMS4wMDAxYCBmYWlsZWQgaW4gAEFzc2VydGlvbiBgKHcwK3cxK3cyK3czKSA8PSAxLjAwMDFgIGZhaWxlZCBpbiAAAAAAAADgVgAAEQAAABIAAAAAAAAAJG0AABMAAAAUAAAATjZ2aXNpb245RXhjZXB0aW9uRQA8+gAA5GwAAFT7AABONnZpc2lvbjE4Qmlub21pYWxQeXJhbWlkMzJmRQAAADz6AAAEbQAA4FYAAAAAAAD4bAAADwAAABUAAAAWAAAAuVKMPo5a5z65Uow+AAAAAAAAAAD4bQAAFwAAABgAAAAZAAAAGgAAABsAAABOU3QzX18yMjBfX3NoYXJlZF9wdHJfcG9pbnRlcklQTjZ2aXNpb244S2V5ZnJhbWVJTGk5NkVFRU5TXzEwc2hhcmVkX3B0cklTM19FMjdfX3NoYXJlZF9wdHJfZGVmYXVsdF9kZWxldGVJUzNfUzNfRUVOU185YWxsb2NhdG9ySVMzX0VFRUUAPPoAAHBtAAC09wAATlN0M19fMjEwc2hhcmVkX3B0cklONnZpc2lvbjhLZXlmcmFtZUlMaTk2RUVFRTI3X19zaGFyZWRfcHRyX2RlZmF1bHRfZGVsZXRlSVMzX1MzX0VFAGJvb2wgdmlzaW9uOjpWaXN1YWxEYXRhYmFzZTx2aXNpb246OkZSRUFLRXh0cmFjdG9yLCB2aXNpb246OkJpbmFyeUZlYXR1cmVTdG9yZSwgdmlzaW9uOjpCaW5hcnlGZWF0dXJlTWF0Y2hlcjw5Nj4+OjpxdWVyeShjb25zdCBHYXVzc2lhblNjYWxlU3BhY2VQeXJhbWlkICopIFtGRUFUVVJFX0VYVFJBQ1RPUiA9IHZpc2lvbjo6RlJFQUtFeHRyYWN0b3IsIFNUT1JFID0gdmlzaW9uOjpCaW5hcnlGZWF0dXJlU3RvcmUsIE1BVENIRVIgPSB2aXNpb246OkJpbmFyeUZlYXR1cmVNYXRjaGVyPDk2Pl0AaHlwX2Nvc3RzIHZlY3RvciBzaG91bGQgYmUgb2Ygc2l6ZSBtYXhfbnVtX2h5cG90aGVzZXMAQbTfAQvfULK+uT4S3KC+kL45PhLcoL6Qvjm+AAAAgLK+ub4S3KA+kL45vhLcoD6Qvjk+0nIYvwAAAADScpi+OgYEv9JymD46BgS/0nIYPwAAAIDScpg+OgYEP9JymL46BgQ/AAAAgFa4Pb9mTSQ/Vri9vmZNJD9WuL0+AAAAAFa4PT9mTSS/Vri9PmZNJL9WuL2+DOlYPwAAAIAM6dg+mdk7Pwzp2L6Z2Ts/DOlYvwAAAAAM6di+mdk7vwzp2D6Z2Tu/AAAAAPxTbj/xZU6/DVTuPvFlTr8NVO6+AAAAgPxTbr/xZU4/DVTuvvFlTj8NVO4+AACAvwAAAAAAAAC/0LNdvwAAAD/Qs12/AACAPwAAAIAAAAA/0LNdPwAAAL/Qs10/AAAAADhxAAAXAAAAHAAAAB0AAAAeAAAAHwAAAE5TdDNfXzIyMF9fc2hhcmVkX3B0cl9wb2ludGVySVBoMTZOdWxsQXJyYXlEZWxldGVySWhFTlNfOWFsbG9jYXRvckloRUVFRQAAAAA8+gAA7HAAALT3AAAxNk51bGxBcnJheURlbGV0ZXJJaEUAAAAAAAAA4HEAABcAAAAgAAAAIQAAACIAAAAjAAAATlN0M19fMjIwX19zaGFyZWRfcHRyX3BvaW50ZXJJUGhOU18xMHNoYXJlZF9wdHJJaEUyN19fc2hhcmVkX3B0cl9kZWZhdWx0X2RlbGV0ZUloaEVFTlNfOWFsbG9jYXRvckloRUVFRQA8+gAAeHEAALT3AABOU3QzX18yMTBzaGFyZWRfcHRySWhFMjdfX3NoYXJlZF9wdHJfZGVmYXVsdF9kZWxldGVJaGhFRQB2aXNpb246OlNjb3BlZFRpbWVyOjp+U2NvcGVkVGltZXIoKQBpbmZpbml0eQBNaXNzaW5nIEh1ZmZtYW4gY29kZSB0YWJsZSBlbnRyeQBGZWJydWFyeQBKYW51YXJ5AEp1bHkAVGh1cnNkYXkAVHVlc2RheQBXZWRuZXNkYXkAU2F0dXJkYXkAU3VuZGF5AE1vbmRheQBGcmlkYXkATWF5ACVtLyVkLyV5AE1BWF9BTExPQ19DSFVOSyBpcyB3cm9uZywgcGxlYXNlIGZpeABBTElHTl9UWVBFIGlzIHdyb25nLCBwbGVhc2UgZml4AHNldE1hcmtlckluZm9WZXJ0ZXgATm90IGEgSlBFRyBmaWxlOiBzdGFydHMgd2l0aCAweCUwMnggMHglMDJ4AENvcnJ1cHQgSlBFRyBkYXRhOiAldSBleHRyYW5lb3VzIGJ5dGVzIGJlZm9yZSBtYXJrZXIgMHglMDJ4AFVuZXhwZWN0ZWQgbWFya2VyIDB4JTAyeABVbnN1cHBvcnRlZCBtYXJrZXIgdHlwZSAweCUwMngAVW5zdXBwb3J0ZWQgSlBFRyBwcm9jZXNzOiBTT0YgdHlwZSAweCUwMngARGVmaW5lIEh1ZmZtYW4gVGFibGUgMHglMDJ4AERlZmluZSBBcml0aG1ldGljIFRhYmxlIDB4JTAyeDogMHglMDJ4AC0rICAgMFgweAAtMFgrMFggMFgtMHgrMHggMHgAQm9ndXMgREFDIHZhbHVlIDB4JXgAX19uZXh0X3ByaW1lIG92ZXJmbG93AEh1ZmZtYW4gY29kZSBzaXplIHRhYmxlIG92ZXJmbG93AE5vdgBUaHUAICAgICAgICAlNHUgJTR1ICU0dSAlNHUgJTR1ICU0dSAlNHUgJTR1AEpQRUcgcGFyYW1ldGVyIHN0cnVjdCBtaXNtYXRjaDogbGlicmFyeSB0aGlua3Mgc2l6ZSBpcyAldSwgY2FsbGVyIGV4cGVjdHMgJXUARGVmaW5lIFJlc3RhcnQgSW50ZXJ2YWwgJXUAV2FybmluZzogdGh1bWJuYWlsIGltYWdlIHNpemUgZG9lcyBub3QgbWF0Y2ggZGF0YSBsZW5ndGggJXUATWlzY2VsbGFuZW91cyBtYXJrZXIgMHglMDJ4LCBsZW5ndGggJXUASkZJRiBleHRlbnNpb24gbWFya2VyOiB0eXBlIDB4JTAyeCwgbGVuZ3RoICV1AEpGSUYgZXh0ZW5zaW9uIG1hcmtlcjogcGFsZXR0ZSB0aHVtYm5haWwgaW1hZ2UsIGxlbmd0aCAldQBKRklGIGV4dGVuc2lvbiBtYXJrZXI6IEpQRUctY29tcHJlc3NlZCB0aHVtYm5haWwgaW1hZ2UsIGxlbmd0aCAldQBKRklGIGV4dGVuc2lvbiBtYXJrZXI6IFJHQiB0aHVtYm5haWwgaW1hZ2UsIGxlbmd0aCAldQBVbmtub3duIEFQUDE0IG1hcmtlciAobm90IEFkb2JlKSwgbGVuZ3RoICV1AFVua25vd24gQVBQMCBtYXJrZXIgKG5vdCBKRklGKSwgbGVuZ3RoICV1AE9idGFpbmVkIFhNUyBoYW5kbGUgJXUARnJlZWQgWE1TIGhhbmRsZSAldQBPYnRhaW5lZCBFTVMgaGFuZGxlICV1AEZyZWVkIEVNUyBoYW5kbGUgJXUAdW5zdXBwb3J0ZWQgbG9jYWxlIGZvciBzdGFuZGFyZCBpbnB1dABBdWd1c3QAZ2V0VHJhbnNNYXRNdWx0aVNxdWFyZVJvYnVzdABJbnZhbGlkIGNyb3AgcmVxdWVzdABVbnN1cHBvcnRlZCBjb2xvciBjb252ZXJzaW9uIHJlcXVlc3QAdW5zaWduZWQgc2hvcnQAZ2V0TXVsdGlNYXJrZXJDb3VudABnZXRUcmFuc01hdFNxdWFyZUNvbnQAdW5zaWduZWQgaW50AENvcnJ1cHQgSlBFRyBkYXRhOiBwcmVtYXR1cmUgZW5kIG9mIGRhdGEgc2VnbWVudABoZWlnaHQARnJhY3Rpb25hbCBzYW1wbGluZyBub3QgaW1wbGVtZW50ZWQgeWV0AENDSVI2MDEgc2FtcGxpbmcgbm90IGltcGxlbWVudGVkIHlldABOb3QgaW1wbGVtZW50ZWQgeWV0AGZzZXQAZ2V0AE9jdABmbG9hdABTYXQAdWludDY0X3QAQ2Fubm90IHF1YW50aXplIG1vcmUgdGhhbiAlZCBjb2xvciBjb21wb25lbnRzAFN0YXJ0IE9mIFNjYW46ICVkIGNvbXBvbmVudHMAQm9ndXMgdmlydHVhbCBhcnJheSBhY2Nlc3MAQm9ndXMgc2FtcGxpbmcgZmFjdG9ycwBRdWFudGl6aW5nIHRvICVkID0gJWQqJWQqJWQgY29sb3JzAFF1YW50aXppbmcgdG8gJWQgY29sb3JzAENhbm5vdCBxdWFudGl6ZSB0byBmZXdlciB0aGFuICVkIGNvbG9ycwBDYW5ub3QgcXVhbnRpemUgdG8gbW9yZSB0aGFuICVkIGNvbG9ycwBJbnZhbGlkIEpQRUcgZmlsZSBzdHJ1Y3R1cmU6IHR3byBTT0kgbWFya2VycwBJbnZhbGlkIEpQRUcgZmlsZSBzdHJ1Y3R1cmU6IHR3byBTT0YgbWFya2VycwBuZnRNYXJrZXJzAFNtb290aGluZyBub3Qgc3VwcG9ydGVkIHdpdGggbm9uc3RhbmRhcmQgc2FtcGxpbmcgcmF0aW9zAE1heGltdW0gc3VwcG9ydGVkIGltYWdlIGRpbWVuc2lvbiBpcyAldSBwaXhlbHMAQXBwbGljYXRpb24gdHJhbnNmZXJyZWQgdG9vIG1hbnkgc2NhbmxpbmVzAEFwcGxpY2F0aW9uIHRyYW5zZmVycmVkIHRvbyBmZXcgc2NhbmxpbmVzAEZhaWxlZCB0byBjcmVhdGUgdGVtcG9yYXJ5IGZpbGUgJXMAQ2xvc2VkIHRlbXBvcmFyeSBmaWxlICVzAE9wZW5lZCB0ZW1wb3JhcnkgZmlsZSAlcwBBcHIAdmVjdG9yAElucHV0IGZpbGUgcmVhZCBlcnJvcgBzZXRNYXJrZXJJbmZvRGlyAEludmFsaWQgSlBFRyBmaWxlIHN0cnVjdHVyZTogbWlzc2luZyBTT1MgbWFya2VyAG5mdE1hcmtlcgBnZXRNYXJrZXIAZGV0ZWN0TWFya2VyAF9hZGRNdWx0aU1hcmtlcgBnZXRNdWx0aUVhY2hNYXJrZXIAX2FkZE1hcmtlcgBnZXRORlRNYXJrZXIAZGV0ZWN0TkZUTWFya2VyAF9hZGRORlRNYXJrZXIAT2N0b2JlcgBOb3ZlbWJlcgBTZXB0ZW1iZXIARGVjZW1iZXIAdW5zaWduZWQgY2hhcgBpb3NfYmFzZTo6Y2xlYXIATWFyAFVucmVjb2duaXplZCBjb21wb25lbnQgSURzICVkICVkICVkLCBhc3N1bWluZyBZQ2JDcgBzZXR1cABWaXJ0dWFsIGFycmF5IGNvbnRyb2xsZXIgbWVzc2VkIHVwAFNlcAAlSTolTTolUyAlcABzZXRQYXR0UmF0aW8AZ2V0UGF0dFJhdGlvAHRlYXJkb3duAFN1bgBKdW4Ac3RkOjpleGNlcHRpb24AQm9ndXMgSHVmZm1hbiB0YWJsZSBkZWZpbml0aW9uAFNlbGVjdGVkICVkIGNvbG9ycyBmb3IgcXVhbnRpemF0aW9uAEltYWdlIHRvbyB3aWRlIGZvciB0aGlzIGltcGxlbWVudGF0aW9uAE1vbgBuYW4ARGlkbid0IGV4cGVjdCBtb3JlIHRoYW4gb25lIHNjYW4AU2FtcGxpbmcgZmFjdG9ycyB0b28gbGFyZ2UgZm9yIGludGVybGVhdmVkIHNjYW4ASmFuAGdldE1hcmtlck51bQBnZXRNdWx0aU1hcmtlck51bQBKdWwAYm9vbABCdWZmZXIgcGFzc2VkIHRvIEpQRUcgbGlicmFyeSBpcyB0b28gc21hbGwAQXByaWwAc2V0TG9nTGV2ZWwAZ2V0TG9nTGV2ZWwAZW1zY3JpcHRlbjo6dmFsAHB1c2hfYmFjawBGcmkAZHBpAGJhZF9hcnJheV9uZXdfbGVuZ3RoAEJvZ3VzIG1hcmtlciBsZW5ndGgAd2lkdGgATWFyY2gAQXVnAHVuc2lnbmVkIGxvbmcAc3RkOjp3c3RyaW5nAGJhc2ljX3N0cmluZwBzdGQ6OnN0cmluZwBzdGQ6OnUxNnN0cmluZwBzdGQ6OnUzMnN0cmluZwBDb3B5cmlnaHQgKEMpIDIwMTgsIFRob21hcyBHLiBMYW5lLCBHdWlkbyBWb2xsYmVkaW5nAGluZgAlLjBMZgAlTGYAcmVzaXplAHRydWUAVHVlAGZhbHNlAFN1c3BlbnNpb24gbm90IGFsbG93ZWQgaGVyZQBnZXRUcmFuc01hdFNxdWFyZQBnZXRUcmFuc01hdE11bHRpU3F1YXJlAHNldE1hdHJpeENvZGVUeXBlAGdldE1hdHJpeENvZGVUeXBlAEp1bmUAc2V0UHJvamVjdGlvbk5lYXJQbGFuZQBnZXRQcm9qZWN0aW9uTmVhclBsYW5lAHNldFByb2plY3Rpb25GYXJQbGFuZQBnZXRQcm9qZWN0aW9uRmFyUGxhbmUAUmVxdWVzdGVkIGZlYXR1cmUgd2FzIG9taXR0ZWQgYXQgY29tcGlsZSB0aW1lAFNlZWsgZmFpbGVkIG9uIHRlbXBvcmFyeSBmaWxlAFJlYWQgZmFpbGVkIG9uIHRlbXBvcmFyeSBmaWxlAEVtcHR5IGlucHV0IGZpbGUAUHJlbWF0dXJlIGVuZCBvZiBpbnB1dCBmaWxlAFByZW1hdHVyZSBlbmQgb2YgSlBFRyBmaWxlAHNldENhbWVyYSgpOiBFcnJvciBjcmVhdGluZyAzRCBoYW5kbGUAZG91YmxlAERDVCBjb2VmZmljaWVudCBvdXQgb2YgcmFuZ2UASW52YWxpZCBjb2xvciBxdWFudGl6YXRpb24gbW9kZSBjaGFuZ2UASlBFRyBkYXRhc3RyZWFtIGNvbnRhaW5zIG5vIGltYWdlACAgICB3aXRoICVkIHggJWQgdGh1bWJuYWlsIGltYWdlAGdldFByb2Nlc3NpbmdJbWFnZQBTdGFydCBvZiBJbWFnZQBFbmQgT2YgSW1hZ2UAQm9ndXMgYnVmZmVyIGNvbnRyb2wgbW9kZQBDb3JydXB0IEpQRUcgZGF0YTogYmFkIEh1ZmZtYW4gY29kZQBDb3JydXB0IEpQRUcgZGF0YTogYmFkIGFyaXRobWV0aWMgY29kZQBzZXRQYXR0ZXJuRGV0ZWN0aW9uTW9kZQBnZXRQYXR0ZXJuRGV0ZWN0aW9uTW9kZQBzZXREZWJ1Z01vZGUAZ2V0RGVidWdNb2RlAHNldExhYmVsaW5nTW9kZQBnZXRMYWJlbGluZ01vZGUAc2V0VGhyZXNob2xkTW9kZQBnZXRUaHJlc2hvbGRNb2RlAHNldEltYWdlUHJvY01vZGUAZ2V0SW1hZ2VQcm9jTW9kZQBCb2d1cyBpbnB1dCBjb2xvcnNwYWNlAEJvZ3VzIEpQRUcgY29sb3JzcGFjZQBzZXRUaHJlc2hvbGQAZ2V0VGhyZXNob2xkAHZvaWQAQmFja2luZyBzdG9yZSBub3Qgc3VwcG9ydGVkAERDVCBzY2FsZWQgYmxvY2sgc2l6ZSAlZHglZCBub3Qgc3VwcG9ydGVkAFF1YW50aXphdGlvbiB0YWJsZSAweCUwMnggd2FzIG5vdCBkZWZpbmVkAEh1ZmZtYW4gdGFibGUgMHglMDJ4IHdhcyBub3QgZGVmaW5lZABBcml0aG1ldGljIHRhYmxlIDB4JTAyeCB3YXMgbm90IGRlZmluZWQAV3JpdGUgdG8gWE1TIGZhaWxlZABSZWFkIGZyb20gWE1TIGZhaWxlZABXcml0ZSB0byBFTVMgZmFpbGVkAFJlYWQgZnJvbSBFTVMgZmFpbGVkAFdlZAAgICAgICAgICUzZCAlM2QgJTNkICUzZCAlM2QgJTNkICUzZCAlM2QAV2FybmluZzogdW5rbm93biBKRklGIHJldmlzaW9uIG51bWJlciAlZC4lMDJkAENvcnJ1cHQgSlBFRyBkYXRhOiBmb3VuZCBtYXJrZXIgMHglMDJ4IGluc3RlYWQgb2YgUlNUJWQAU3RhcnQgT2YgRnJhbWUgMHglMDJ4OiB3aWR0aD0ldSwgaGVpZ2h0PSV1LCBjb21wb25lbnRzPSVkACAgICBDb21wb25lbnQgJWQ6ICVkaHglZHYgcT0lZABJbnZhbGlkIHByb2dyZXNzaXZlIHBhcmFtZXRlcnMgU3M9JWQgU2U9JWQgQWg9JWQgQWw9JWQAICBTcz0lZCwgU2U9JWQsIEFoPSVkLCBBbD0lZAAgICAgQ29tcG9uZW50ICVkOiBkYz0lZCBhYz0lZABJbnZhbGlkIHByb2dyZXNzaXZlIHBhcmFtZXRlcnMgYXQgc2NhbiBzY3JpcHQgZW50cnkgJWQASW52YWxpZCBzY2FuIHNjcmlwdCBhdCBlbnRyeSAlZABCb2d1cyBEUVQgaW5kZXggJWQAQm9ndXMgREhUIGluZGV4ICVkAEJvZ3VzIERBQyBpbmRleCAlZABUb28gbWFueSBjb2xvciBjb21wb25lbnRzOiAlZCwgbWF4ICVkAEluY29uc2lzdGVudCBwcm9ncmVzc2lvbiBzZXF1ZW5jZSBmb3IgY29tcG9uZW50ICVkIGNvZWZmaWNpZW50ICVkAFdyb25nIEpQRUcgbGlicmFyeSB2ZXJzaW9uOiBsaWJyYXJ5IGlzICVkLCBjYWxsZXIgZXhwZWN0cyAlZABBdCBtYXJrZXIgMHglMDJ4LCByZWNvdmVyeSBhY3Rpb24gJWQAVW5zdXBwb3J0ZWQgSlBFRyBkYXRhIHByZWNpc2lvbiAlZABEZWZpbmUgUXVhbnRpemF0aW9uIFRhYmxlICVkICBwcmVjaXNpb24gJWQAQWRvYmUgQVBQMTQgbWFya2VyOiB2ZXJzaW9uICVkLCBmbGFncyAweCUwNHggMHglMDR4LCB0cmFuc2Zvcm0gJWQASW1wcm9wZXIgY2FsbCB0byBKUEVHIGxpYnJhcnkgaW4gc3RhdGUgJWQAQ2Fubm90IHRyYW5zY29kZSBkdWUgdG8gbXVsdGlwbGUgdXNlIG9mIHF1YW50aXphdGlvbiB0YWJsZSAlZABVbmtub3duIEFkb2JlIGNvbG9yIHRyYW5zZm9ybSBjb2RlICVkAEludmFsaWQgbWVtb3J5IHBvb2wgY29kZSAlZABCb2d1cyBtZXNzYWdlIGNvZGUgJWQASkZJRiBBUFAwIG1hcmtlcjogdmVyc2lvbiAlZC4lMDJkLCBkZW5zaXR5ICVkeCVkICAlZABzdGQ6OmJhZF9hbGxvYwBEZWMAJWxkJWMAQ29tcG9uZW50IGluZGV4ICVkOiBtaXNtYXRjaGluZyBzYW1wbGluZyByYXRpbyAlZDolZCwgJWQ6JWQsICVjAEZlYgByd2EAU2NhbiBzY3JpcHQgZG9lcyBub3QgdHJhbnNtaXQgYWxsIGRhdGEAZ2V0TkZURGF0YQBfbG9hZENhbWVyYQBBUl9VU0VfVFJBQ0tJTkdfSElTVE9SWQBBUl9OT1VTRV9UUkFDS0lOR19ISVNUT1JZACVhICViICVkICVIOiVNOiVTICVZAFBPU0lYAEFSX1RFTVBMQVRFX01BVENISU5HX0NPTE9SX0FORF9NQVRSSVgAQVJfVEVNUExBVEVfTUFUQ0hJTkdfTU9OT19BTkRfTUFUUklYAEFSX0xBQkVMSU5HX1RIUkVTSF9NT0RFX0FVVE9fT1RTVQBBUl9NQVJLRVJfSU5GT19DVVRPRkZfUEhBU0VfTUFUQ0hfQ09OVFJBU1QAQVJfTUFYX0xPT1BfQ09VTlQASW52YWxpZCBjb21wb25lbnQgSUQgJWQgaW4gU09TAEFSX01BUktFUl9JTkZPX0NVVE9GRl9QSEFTRV9IRVVSSVNUSUNfVFJPVUJMRVNPTUVfTUFUUklYX0NPREVTAEVSUk9SX01BUktFUl9JTkRFWF9PVVRfT0ZfQk9VTkRTACVIOiVNOiVTAEFSX0xPR19MRVZFTF9FUlJPUgBBUl9NQVJLRVJfSU5GT19DVVRPRkZfUEhBU0VfUE9TRV9FUlJPUgBBUl9URU1QTEFURV9NQVRDSElOR19DT0xPUgBBUl9URU1QTEFURV9NQVRDSElOR19NT05PAEFSX0xPR19MRVZFTF9JTkZPAEFSX0xPR19MRVZFTF9SRUxfSU5GTwBBUl9MT0dfTEVWRUxfV0FSTgBBUl9NQVRSSVhfQ09ERV9ERVRFQ1RJT04AQVJfTUFSS0VSX0lORk9fQ1VUT0ZGX1BIQVNFX1BBVFRFUk5fRVhUUkFDVElPTgBBUl9MQUJFTElOR19CTEFDS19SRUdJT04AQVJfTEFCRUxJTkdfV0hJVEVfUkVHSU9OAE5BTgBBUl9MQUJFTElOR19USFJFU0hfTU9ERV9BVVRPX01FRElBTgBQTQBKUEVHTUVNAEFNAExDX0FMTABBUl9NQVJLRVJfSU5GT19DVVRPRkZfUEhBU0VfTUFUQ0hfQkFSQ09ERV9FRENfRkFJTABBUl9MQUJFTElOR19USFJFU0hfTU9ERV9NQU5VQUwAQVJfTUFSS0VSX0lORk9fQ1VUT0ZGX1BIQVNFX1BPU0VfRVJST1JfTVVMVEkAQVJfTE9PUF9CUkVBS19USFJFU0gAQVJfREVGQVVMVF9MQUJFTElOR19USFJFU0gAQVJfTE9HX0xFVkVMX0RFQlVHAExBTkcASW52YWxpZCBTT1MgcGFyYW1ldGVycyBmb3Igc2VxdWVudGlhbCBKUEVHAENhdXRpb246IHF1YW50aXphdGlvbiB0YWJsZXMgYXJlIHRvbyBjb2Fyc2UgZm9yIGJhc2VsaW5lIEpQRUcASW52YWxpZCBKUEVHIGZpbGUgc3RydWN0dXJlOiAlcyBiZWZvcmUgU09GAElORgBBUl9MQUJFTElOR19USFJFU0hfTU9ERV9BVVRPX0FEQVBUSVZFAEFSX01BUktFUl9JTkZPX0NVVE9GRl9QSEFTRV9OT05FAEFSX0RFQlVHX0RJU0FCTEUAQVJfREVCVUdfRU5BQkxFAEFSX0lNQUdFX1BST0NfRlJBTUVfSU1BR0UAQVJfSU1BR0VfUFJPQ19GSUVMRF9JTUFHRQBBUl9ERUZBVUxUX1BBVFRFUk5fREVURUNUSU9OX01PREUAQVJfREVGQVVMVF9NQVJLRVJfRVhUUkFDVElPTl9NT0RFAEFSX0RFRkFVTFRfREVCVUdfTU9ERQBBUl9ERUZBVUxUX0xBQkVMSU5HX01PREUAQVJfREVGQVVMVF9JTUFHRV9QUk9DX01PREUAQVJfTUFSS0VSX0lORk9fQ1VUT0ZGX1BIQVNFX01BVENIX0NPTkZJREVOQ0UARVJST1JfQVJDT05UUk9MTEVSX05PVF9GT1VORABFUlJPUl9NVUxUSU1BUktFUl9OT1RfRk9VTkQAQVJfTUFSS0VSX0lORk9fQ1VUT0ZGX1BIQVNFX01BVENIX0JBUkNPREVfTk9UX0ZPVU5EAEFSX01BUktFUl9JTkZPX0NVVE9GRl9QSEFTRV9NQVRDSF9HRU5FUklDAE91dHB1dCBmaWxlIHdyaXRlIGVycm9yIC0tLSBvdXQgb2YgZGlzayBzcGFjZT8AV3JpdGUgZmFpbGVkIG9uIHRlbXBvcmFyeSBmaWxlIC0tLSBvdXQgb2YgZGlzayBzcGFjZT8AZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8c2hvcnQ+AGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PHVuc2lnbmVkIHNob3J0PgBlbXNjcmlwdGVuOjptZW1vcnlfdmlldzxpbnQ+AGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PHVuc2lnbmVkIGludD4AZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8ZmxvYXQ+AGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PHVpbnQ4X3Q+AGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PGludDhfdD4AZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8dWludDE2X3Q+AGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PGludDE2X3Q+AGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PHVpbnQzMl90PgBlbXNjcmlwdGVuOjptZW1vcnlfdmlldzxpbnQzMl90PgBlbXNjcmlwdGVuOjptZW1vcnlfdmlldzxjaGFyPgBlbXNjcmlwdGVuOjptZW1vcnlfdmlldzx1bnNpZ25lZCBjaGFyPgBzdGQ6OmJhc2ljX3N0cmluZzx1bnNpZ25lZCBjaGFyPgBlbXNjcmlwdGVuOjptZW1vcnlfdmlldzxzaWduZWQgY2hhcj4AZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8bG9uZz4AZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8dW5zaWduZWQgbG9uZz4AZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8ZG91YmxlPgAwMTIzNDU2Nzg5ADljICAxNC1KYW4tMjAxOABDLlVURi04AEFSX01BVFJJWF9DT0RFXzV4NV9CQ0hfMjJfN183AEFSX01BVFJJWF9DT0RFXzZ4NgBBUl9NQVRSSVhfQ09ERV81eDUAQVJfTUFUUklYX0NPREVfNHg0X0JDSF8xM181XzUAQVJfTUFUUklYX0NPREVfNXg1X0JDSF8yMl8xMl81AEFSX01BVFJJWF9DT0RFXzN4M19QQVJJVFk2NQBBUl9NQVRSSVhfQ09ERV80eDQAQVJfTUFUUklYX0NPREVfM3gzAGZzZXQzAEFSX01BVFJJWF9DT0RFXzR4NF9CQ0hfMTNfOV8zAEFSX01BVFJJWF9DT0RFXzN4M19IQU1NSU5HNjMAQVJfVVNFX1RSQUNLSU5HX0hJU1RPUllfVjIAc2V0dXBBUjIAb24uAG9mZi4AKG51bGwpAEVtcHR5IEpQRUcgaW1hZ2UgKEROTCBub3Qgc3VwcG9ydGVkKQBJbnN1ZmZpY2llbnQgbWVtb3J5IChjYXNlICVkKQBQdXJlIHZpcnR1YWwgZnVuY3Rpb24gY2FsbGVkIQBFcnJvciByZWFkaW5nIGRhdGEgZnJvbSAlcy5mc2V0CgBSZWFkaW5nICVzLmZzZXQKAEVycm9yOiBrcG1TZXRSZWZEYXRhU2V0CgBFcnJvcjoga3BtQ2hhbmdlUGFnZU5vT2ZSZWZEYXRhU2V0CgBFcnJvcjoga3BtTWVyZ2VSZWZEYXRhU2V0CgBEZWJ1ZyBtb2RlIHNldCB0byAlcwoATkZUIG1hcmtlciBoZWlnaHQ6ICVpCgBORlQgbnVtLiBvZiBJbWFnZVNldDogJWkKAE5GVCBtYXJrZXIgZHBpOiAlaQoATkZUIG1hcmtlciB3aWR0aDogJWkKAExhYmVsaW5nIG1vZGUgc2V0IHRvICVkCgBUaHJlc2hvbGQgbW9kZSBzZXQgdG8gJWQKAFRocmVzaG9sZCBzZXQgdG8gJWQKAEFsbG9jYXRlZCB2aWRlb0ZyYW1lU2l6ZSAlZAoAVHJhY2tpbmcgbG9zdC4gJWQKAEVycm9yOiBtYWxsb2MKAEVycm9yIHJlYWRpbmcgS1BNIGRhdGEgZnJvbSAlcy5mc2V0MwoAUmVhZGluZyAlcy5mc2V0MwoAIyMjIEZlYXR1cmUgY2FuZGlkYXRlcyBmb3IgdHJhY2tpbmcgYXJlIG92ZXJmbG93LgoAbG9hZE1hcmtlcigpOiBFcnJvciBsb2FkaW5nIHBhdHRlcm4gZmlsZSAlcy4KAEFSVG9vbEtpdEpTKCk6IFVuYWJsZSB0byBzZXQgdXAgQVIgbXVsdGltYXJrZXIuCgBBUlRvb2xLaXRKUygpOiBVbmFibGUgdG8gc2V0IHVwIE5GVCBtYXJrZXIuCgBBUlRvb2xLaXRKUygpOiBVbmFibGUgdG8gc2V0IHVwIEFSIG1hcmtlci4KAFBhdHRlcm4gcmF0aW8gc2l6ZSBzZXQgdG8gJWYuCgBMb2FkaW5nIG9mIE5GVCBkYXRhIGNvbXBsZXRlLgoAc2V0Q2FtZXJhKCk6IEVycm9yOiBhclBhcmFtTFRDcmVhdGUuCgAgIERvbmUuCgBzZXR1cCgpOiBFcnJvcjogYXJQYXR0Q3JlYXRlSGFuZGxlLgoAc2V0Q2FtZXJhKCk6IEVycm9yOiBhckNyZWF0ZUhhbmRsZS4KAEVycm9yOiBhcjJDcmVhdGVIYW5kbGUuCgBQYXR0ZXJuIGRldGVjdGlvbiBtb2RlIHNldCB0byAlZC4KAEltYWdlIHByb2MuIG1vZGUgc2V0IHRvICVkLgoAICBBc3NpZ25lZCBwYWdlIG5vLiAlZC4KAGxvYWRDYW1lcmEoKTogRXJyb3IgbG9hZGluZyBwYXJhbWV0ZXIgZmlsZSAlcyBmb3IgY2FtZXJhLgoAVHJhY2tlZCBwYWdlICVkIChtYXggJWQpLgoAKioqIENhbWVyYSBQYXJhbWV0ZXIgcmVzaXplZCBmcm9tICVkLCAlZC4gKioqCgBPdXQgb2YgbWVtb3J5ISEKAGNvbmZpZyBkYXRhIGxvYWQgZXJyb3IgISEKAGlkZGRkZGRkZGRkZGRkAGkAaWlpZABBoLACC5QCaWlpaWlpaWRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRpAGlpaWlpaQBOU3QzX18yNnZlY3Rvckk5bmZ0TWFya2VyTlNfOWFsbG9jYXRvcklTMV9FRUVFABT6AABJmAAAUE5TdDNfXzI2dmVjdG9ySTluZnRNYXJrZXJOU185YWxsb2NhdG9ySVMxX0VFRUUA9PoAAICYAAAAAAAAeJgAAFBLTlN0M19fMjZ2ZWN0b3JJOW5mdE1hcmtlck5TXzlhbGxvY2F0b3JJUzFfRUVFRQAAAAD0+gAAwJgAAAEAAAB4mAAAaWkAdgB2aQCwmAAAUPkAALCYAAAomQAAOW5mdE1hcmtlcgAAFPoAAByZAAB2aWlpAEHAsgILUFD5AACwmAAA1PkAACiZAAB2aWlpaQAAANT5AAD0mAAAaWlpAISZAAB4mAAA1PkAAE4xMGVtc2NyaXB0ZW4zdmFsRQAAFPoAAHCZAABpaWlpAEGgswILFWj5AAB4mAAA1PkAACiZAABpaWlpaQBBwLMCC6sFsPkA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AAAAGQAAABIAAAALAAAAEwAAABoAAAAbAAAAPwAAAD8AAAA/AAAAPwAAAD8AAAA/AAAAPwAAAD8AAAA/AAAAPwAAAD8AAAA/AAAAPwAAAD8AAAA/AAAAPwAAAAAAAAABAAAACAAAABAAAAAJAAAAAgAAAAoAAAARAAAAEgAAAD8AAAA/AAAAPwAAAD8AAAA/AAAAPwAAAD8AAAA/AAAAPwAAAD8AAAA/AAAAPwAAAD8AAAA/AAAAPwAAAD8AQfTSAgvMBgEAAAAIAAAACQAAAD8AAAA/AAAAPwAAAD8AAAA/AAAAPwAAAD8AAAA/AAAAPwAAAD8AAAA/AAAAPwAAAD8AAAA/AAAAPwAAAD8AAABOU3QzX18yMTJiYXNpY19zdHJpbmdJaE5TXzExY2hhcl90cmFpdHNJaEVFTlNfOWFsbG9jYXRvckloRUVFRQAAFPoAAMCpAABOU3QzX18yMTJiYXNpY19zdHJpbmdJd05TXzExY2hhcl90cmFpdHNJd0VFTlNfOWFsbG9jYXRvckl3RUVFRQAAFPoAAAiqAABOU3QzX18yMTJiYXNpY19zdHJpbmdJRHNOU18xMWNoYXJfdHJhaXRzSURzRUVOU185YWxsb2NhdG9ySURzRUVFRQAAABT6AABQqgAATlN0M19fMjEyYmFzaWNfc3RyaW5nSURpTlNfMTFjaGFyX3RyYWl0c0lEaUVFTlNfOWFsbG9jYXRvcklEaUVFRUUAAAAU+gAAnKoAAE4xMGVtc2NyaXB0ZW4xMW1lbW9yeV92aWV3SWNFRQAAFPoAAOiqAABOMTBlbXNjcmlwdGVuMTFtZW1vcnlfdmlld0lhRUUAABT6AAAQqwAATjEwZW1zY3JpcHRlbjExbWVtb3J5X3ZpZXdJaEVFAAAU+gAAOKsAAE4xMGVtc2NyaXB0ZW4xMW1lbW9yeV92aWV3SXNFRQAAFPoAAGCrAABOMTBlbXNjcmlwdGVuMTFtZW1vcnlfdmlld0l0RUUAABT6AACIqwAATjEwZW1zY3JpcHRlbjExbWVtb3J5X3ZpZXdJaUVFAAAU+gAAsKsAAE4xMGVtc2NyaXB0ZW4xMW1lbW9yeV92aWV3SWpFRQAAFPoAANirAABOMTBlbXNjcmlwdGVuMTFtZW1vcnlfdmlld0lsRUUAABT6AAAArAAATjEwZW1zY3JpcHRl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ZWFjaGFibGUAQWRkcmVzcyBpbiB1c2UAQnJva2VuIHBpcGUASS9PIGVycm9yAE5vIHN1Y2ggZGV2aWNlIG9yIGFkZHJlc3MAQmxvY2sgZGV2aWNlIHJlcXVpcmVkAE5vIHN1Y2ggZGV2aWNlAE5vdCBhIGRpcmVjdG9yeQBJcyBhIGRpcmVjdG9yeQBUZXh0IGZpbGUgYnVzeQBFeGVjIGZvcm1hdCBlcnJvcgBJbnZhbGlkIGFyZ3VtZW50AEFyZ3VtZW50IGxpc3QgdG9vIGxvbmcAU3ltYm9saWMgbGluayBsb29wAEZpbGVuYW1lIHRvbyBsb25nAFRvbyBtYW55IG9wZW4gZmlsZXMgaW4gc3lzdGVtAE5vIGZpbGUgZGVzY3JpcHRvcnMgYXZhaWxhYmxlAEJhZCBmaWxlIGRlc2NyaXB0b3IATm8gY2hpbGQgcHJvY2VzcwBCYWQgYWRkcmVzcwBGaWxlIHRvbyBsYXJnZQBUb28gbWFueSBsaW5rcwBObyBsb2NrcyBhdmFpbGFibGUAUmVzb3VyY2UgZGVhZGxvY2sgd291bGQgb2NjdXIAU3RhdGUgbm90IHJlY292ZXJhYmxlAFByZXZpb3VzIG93bmVyIGRpZWQAT3BlcmF0aW9uIGNhbmNlbGVkAEZ1bmN0aW9uIG5vdCBpbXBsZW1lbnRlZABObyBtZXNzYWdlIG9mIGRlc2lyZWQgdHlwZQBJZGVudGlmaWVyIHJlbW92ZWQARGV2aWNlIG5vdCBhIHN0cmVhbQBObyBkYXRhIGF2YWlsYWJsZQBEZXZpY2UgdGltZW91dABPdXQgb2Ygc3RyZWFtcyByZXNvdXJjZXMATGluayBoYXMgYmVlbiBzZXZlcmVkAFByb3RvY29sIGVycm9yAEJhZCBtZXNzYWdlAEZpbGUgZGVzY3JpcHRvciBpbiBiYWQgc3RhdGUATm90IGEgc29ja2V0AERlc3RpbmF0aW9uIGFkZHJlc3MgcmVxdWlyZWQATWVzc2FnZSB0b28gbGFyZ2UAUHJvdG9jb2wgd3JvbmcgdHlwZSBmb3Igc29ja2V0AFByb3RvY29sIG5vdCBhdmFpbGFibGUAUHJvdG9jb2wgbm90IHN1cHBvcnRlZABTb2NrZXQgdHlwZSBub3Qgc3VwcG9ydGVkAE5vdCBzdXBwb3J0ZWQAUHJvdG9jb2wgZmFtaWx5IG5vdCBzdXBwb3J0ZWQAQWRkcmVzcyBmYW1pbHkgbm90IHN1cHBvcnRlZCBieSBwcm90b2NvbABBZGRyZXNzIG5vdCBhdmFpbGFibGUATmV0d29yayBpcyBkb3duAE5ldHdvcmsgdW5yZWFjaGFibGUAQ29ubmVjdGlvbiByZXNldCBieSBuZXR3b3JrAENvbm5lY3Rpb24gYWJvcnRlZABObyBidWZmZXIgc3BhY2UgYXZhaWxhYmxlAFNvY2tldCBpcyBjb25uZWN0ZWQAU29ja2V0IG5vdCBjb25uZWN0ZWQAQ2Fubm90IHNlbmQgYWZ0ZXIgc29ja2V0IHNodXRkb3duAE9wZXJhdGlvbiBhbHJlYWR5IGluIHByb2dyZXNzAE9wZXJhdGlvbiBpbiBwcm9ncmVzcwBTdGFsZSBmaWxlIGhhbmRsZQBSZW1vdGUgSS9PIGVycm9yAFF1b3RhIGV4Y2VlZGVkAE5vIG1lZGl1bSBmb3VuZABXcm9uZyBtZWRpdW0gdHlwZQBNdWx0aWhvcCBhdHRlbXB0ZWQAQZKGAwuWAaUCWwDwAbUFjAUlAYMGHQOUBP8AxwMxAwsGvAGPAX8DygQrANoGrwBCA04D3AEOBBUAoQYNAZQCCwI4BmQCvAL/Al0D5wQLB88CywXvBdsF4QIeBkUChQCCAmwDbwTxAPMDGAXZANoDTAZUAnsBnQO9BAAAUQAVArsAswNtAP8BhQQvBfkEOABlAUYBnwC3BqgBcwJTAQBB2IcDCwwhBAAAAAAAAAAALwIAQfiHAwsGNQRHBFYEAEGOiAMLAqAEAEGiiAMLX0YFYAVuBWEGAADPAQAAAAAAAAAAyQbpBvkGAAAAABkACgAZGRkAAAAABQAAAAAAAAkAAAAACwAAAAAAAAAAGQARChkZGQMKBwABAAkLGAAACQYLAAALAAYZAAAAGRkZAEGRiQMLIQ4AAAAAAAAAABkACg0ZGRkADQAAAgAJDgAAAAkADgAADgBBy4kDCwEMAEHXiQMLFRMAAAAAEwAAAAAJDAAAAAAADAAADABBhYoDCwEQAEGRigMLFQ8AAAAEDwAAAAAJEAAAAAAAEAAAEABBv4oDCwESAEHLigMLHhEAAAAAEQAAAAAJEgAAAAAAEgAAEgAAGgAAABoaGgBBgosDCw4aAAAAGhoaAAAAAAAACQBBs4sDCwEUAEG/iwMLFRcAAAAAFwAAAAAJFAAAAAAAFAAAFABB7YsDCwEWAEH5iwMLJxUAAAAAFQAAAAAJFgAAAAAAFgAAFgAAMDEyMzQ1Njc4OUFCQ0RFRgBBxIwDCwICAQBB7IwDCwj//////////wBBsI0DC4MS0XSeAFedvSqAcFIP//8+JwoAAABkAAAA6AMAABAnAACghgEAQEIPAICWmAAA4fUFGAAAADUAAABxAAAAa////877//+Sv///AAAAAAAAAAD/////////////////////////////////////////////////////////////////AAECAwQFBgcICf////////8KCwwNDg8QERITFBUWFxgZGhscHR4fICEiI////////woLDA0ODxAREhMUFRYXGBkaGxwdHh8gISIj/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wABAgQHAwYFAAAAAAAAAAIAAMADAADABAAAwAUAAMAGAADABwAAwAgAAMAJAADACgAAwAsAAMAMAADADQAAwA4AAMAPAADAEAAAwBEAAMASAADAEwAAwBQAAMAVAADAFgAAwBcAAMAYAADAGQAAwBoAAMAbAADAHAAAwB0AAMAeAADAHwAAwAAAALMBAADDAgAAwwMAAMMEAADDBQAAwwYAAMMHAADDCAAAwwkAAMMKAADDCwAAwwwAAMMNAADTDgAAww8AAMMAAAy7AQAMwwIADMMDAAzDBAAM2wAAAAAAAAAAAgAAAAMAAAAFAAAABwAAAAsAAAANAAAAEQAAABMAAAAXAAAAHQAAAB8AAAAlAAAAKQAAACsAAAAvAAAANQAAADsAAAA9AAAAQwAAAEcAAABJAAAATwAAAFMAAABZAAAAYQAAAGUAAABnAAAAawAAAG0AAABxAAAAfwAAAIMAAACJAAAAiwAAAJUAAACXAAAAnQAAAKMAAACnAAAArQAAALMAAAC1AAAAvwAAAMEAAADFAAAAxwAAANMAAAABAAAACwAAAA0AAAARAAAAEwAAABcAAAAdAAAAHwAAACUAAAApAAAAKwAAAC8AAAA1AAAAOwAAAD0AAABDAAAARwAAAEkAAABPAAAAUwAAAFkAAABhAAAAZQAAAGcAAABrAAAAbQAAAHEAAAB5AAAAfwAAAIMAAACJAAAAiwAAAI8AAACVAAAAlwAAAJ0AAACjAAAApwAAAKkAAACtAAAAswAAALUAAAC7AAAAvwAAAMEAAADFAAAAxwAAANEAAAAAAAAAHMwAAAQBAAAFAQAABgEAAAcBAAAIAQAACQEAAAoBAAALAQAADAEAAA0BAAAOAQAADwEAABABAAARAQAACAAAAAAAAABUzAAAEgEAABMBAAD4////+P///1TMAAAUAQAAFQEAAKzKAADAygAABAAAAAAAAACczAAAFgEAABcBAAD8/////P///5zMAAAYAQAAGQEAANzKAADwygAAAAAAADDNAAAaAQAAGwEAABwBAAAdAQAAHgEAAB8BAAAgAQAAIQEAACIBAAAjAQAAJAEAACUBAAAmAQAAJwEAAAgAAAAAAAAAaM0AACgBAAApAQAA+P////j///9ozQAAKgEAACsBAABMywAAYMsAAAQAAAAAAAAAsM0AACwBAAAtAQAA/P////z///+wzQAALgEAAC8BAAB8ywAAkMsAAAAAAADcywAAMAEAADEBAABOU3QzX18yOWJhc2ljX2lvc0ljTlNfMTFjaGFyX3RyYWl0c0ljRUVFRQAAADz6AACwywAA7M0AAE5TdDNfXzIxNWJhc2ljX3N0cmVhbWJ1ZkljTlNfMTFjaGFyX3RyYWl0c0ljRUVFRQAAAAAU+gAA6MsAAE5TdDNfXzIxM2Jhc2ljX2lzdHJlYW1JY05TXzExY2hhcl90cmFpdHNJY0VFRUUAAJj6AAAkzAAAAAAAAAEAAADcywAAA/T//05TdDNfXzIxM2Jhc2ljX29zdHJlYW1JY05TXzExY2hhcl90cmFpdHNJY0VFRUUAAJj6AABszAAAAAAAAAEAAADcywAAA/T//wAAAADwzAAAMgEAADMBAABOU3QzX18yOWJhc2ljX2lvc0l3TlNfMTFjaGFyX3RyYWl0c0l3RUVFRQAAADz6AADEzAAA7M0AAE5TdDNfXzIxNWJhc2ljX3N0cmVhbWJ1Zkl3TlNfMTFjaGFyX3RyYWl0c0l3RUVFRQAAAAAU+gAA/MwAAE5TdDNfXzIxM2Jhc2ljX2lzdHJlYW1Jd05TXzExY2hhcl90cmFpdHNJd0VFRUUAAJj6AAA4zQAAAAAAAAEAAADwzAAAA/T//05TdDNfXzIxM2Jhc2ljX29zdHJlYW1Jd05TXzExY2hhcl90cmFpdHNJd0VFRUUAAJj6AACAzQAAAAAAAAEAAADwzAAAA/T//wAAAADszQAANAEAADUBAABOU3QzX18yOGlvc19iYXNlRQAAABT6AADYzQAAkP0AAAAAAABQzgAABAEAADgBAAA5AQAABwEAAAgBAAAJAQAACgEAAAsBAAAMAQAAOgEAADsBAAA8AQAAEAEAABEBAABOU3QzX18yMTBfX3N0ZGluYnVmSWNFRQA8+gAAOM4AABzMAAAAAAAAuM4AAAQBAAA9AQAAPgEAAAcBAAAIAQAACQEAAD8BAAALAQAADAEAAA0BAAAOAQAADwEAAEABAABBAQAATlN0M19fMjExX19zdGRvdXRidWZJY0VFAAAAADz6AACczgAAHMwAAAAAAAAczwAAGgEAAEIBAABDAQAAHQEAAB4BAAAfAQAAIAEAACEBAAAiAQAARAEAAEUBAABGAQAAJgEAACcBAABOU3QzX18yMTBfX3N0ZGluYnVmSXdFRQA8+gAABM8AADDNAAAAAAAAhM8AABoBAABHAQAASAEAAB0BAAAeAQAAHwEAAEkBAAAhAQAAIgEAACMBAAAkAQAAJQEAAEoBAABLAQAATlN0M19fMjExX19zdGRvdXRidWZJd0VFAAAAADz6AABozwAAMM0AAN4SBJUAAAAA////////////////kM8AABQAAABDLlVURi04AEHgnwMLAqTPAEGAoAMLSkxDX0NUWVBFAAAAAExDX05VTUVSSUMAAExDX1RJTUUAAAAAAExDX0NPTExBVEUAAExDX01PTkVUQVJZAExDX01FU1NBR0VTAFDSAEHUpAML+QMBAAAAAgAAAAMAAAAEAAAABQAAAAYAAAAHAAAACAAAAAkAAAAKAAAACwAAAAwAAAANAAAADgAAAA8AAAAQAAAAEQAAABIAAAATAAAAFAAAABUAAAAWAAAAFwAAABgAAAAZAAAAGgAAABsAAAAcAAAAHQAAAB4AAAAfAAAAIAAAACEAAAAiAAAAIwAAACQAAAAlAAAAJgAAACcAAAAoAAAAKQAAACoAAAArAAAALAAAAC0AAAAuAAAALwAAADAAAAAxAAAAMgAAADMAAAA0AAAANQAAADYAAAA3AAAAOAAAADkAAAA6AAAAOwAAADwAAAA9AAAAPgAAAD8AAABAAAAAQQAAAEIAAABDAAAARAAAAEUAAABGAAAARwAAAEgAAABJAAAASgAAAEsAAABMAAAATQAAAE4AAABPAAAAUAAAAFEAAABSAAAAUwAAAFQAAABVAAAAVgAAAFcAAABYAAAAWQAAAFoAAABbAAAAXAAAAF0AAABeAAAAXwAAAGAAAABBAAAAQgAAAEMAAABEAAAARQAAAEYAAABHAAAASAAAAEkAAABKAAAASwAAAEwAAABNAAAATgAAAE8AAABQAAAAUQAAAFIAAABTAAAAVAAAAFUAAABWAAAAVwAAAFgAAABZAAAAWgAAAHsAAAB8AAAAfQAAAH4AAAB/AEHQrAMLAmDYAEHksAML+QMBAAAAAgAAAAMAAAAEAAAABQAAAAYAAAAHAAAACAAAAAkAAAAKAAAACwAAAAwAAAANAAAADgAAAA8AAAAQAAAAEQAAABIAAAATAAAAFAAAABUAAAAWAAAAFwAAABgAAAAZAAAAGgAAABsAAAAcAAAAHQAAAB4AAAAfAAAAIAAAACEAAAAiAAAAIwAAACQAAAAlAAAAJgAAACcAAAAoAAAAKQAAACoAAAArAAAALAAAAC0AAAAuAAAALwAAADAAAAAxAAAAMgAAADMAAAA0AAAANQAAADYAAAA3AAAAOAAAADkAAAA6AAAAOwAAADwAAAA9AAAAPgAAAD8AAABAAAAAYQAAAGIAAABjAAAAZAAAAGUAAABmAAAAZwAAAGgAAABpAAAAagAAAGsAAABsAAAAbQAAAG4AAABvAAAAcAAAAHEAAAByAAAAcwAAAHQAAAB1AAAAdgAAAHcAAAB4AAAAeQAAAHoAAABbAAAAXAAAAF0AAABeAAAAXwAAAGAAAABhAAAAYgAAAGMAAABkAAAAZQAAAGYAAABnAAAAaAAAAGkAAABqAAAAawAAAGwAAABtAAAAbgAAAG8AAABwAAAAcQAAAHIAAABzAAAAdAAAAHUAAAB2AAAAdwAAAHgAAAB5AAAAegAAAHsAAAB8AAAAfQAAAH4AAAB/AEHguAMLMTAxMjM0NTY3ODlhYmNkZWZBQkNERUZ4WCstcFBpSW5OACVJOiVNOiVTICVwJUg6JU0AQaC5AwuBASUAAABtAAAALwAAACUAAABkAAAALwAAACUAAAB5AAAAJQAAAFkAAAAtAAAAJQAAAG0AAAAtAAAAJQAAAGQAAAAlAAAASQAAADoAAAAlAAAATQAAADoAAAAlAAAAUwAAACAAAAAlAAAAcAAAAAAAAAAlAAAASAAAADoAAAAlAAAATQBBsLoDC2YlAAAASAAAADoAAAAlAAAATQAAADoAAAAlAAAAUwAAAAAAAACk5gAAXgEAAF8BAABgAQAAAAAAAATnAABhAQAAYgEAAGABAABjAQAAZAEAAGUBAABmAQAAZwEAAGgBAABpAQAAagEAQaC7Awv9AwQAAAAEAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAABAAAAAUCAAAFAAAABQAAAAUAAAAFAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAAAwIAAIIAAACCAAAAggAAAIIAAACCAAAAggAAAIIAAACCAAAAggAAAIIAAACCAAAAggAAAIIAAACCAAAAggAAAEIBAABCAQAAQgEAAEIBAABCAQAAQgEAAEIBAABCAQAAQgEAAEIBAACCAAAAggAAAIIAAACCAAAAggAAAIIAAACCAAAAKgEAACoBAAAqAQAAKgEAACoBAAAqAQAAKgAAACoAAAAqAAAAKgAAACoAAAAqAAAAKgAAACoAAAAqAAAAKgAAACoAAAAqAAAAKgAAACoAAAAqAAAAKgAAACoAAAAqAAAAKgAAACoAAACCAAAAggAAAIIAAACCAAAAggAAAIIAAAAyAQAAMgEAADIBAAAyAQAAMgEAADIBAAAyAAAAMgAAADIAAAAyAAAAMgAAADIAAAAyAAAAMgAAADIAAAAyAAAAMgAAADIAAAAyAAAAMgAAADIAAAAyAAAAMgAAADIAAAAyAAAAMgAAAIIAAACCAAAAggAAAIIAAAAEAEGkwwML7QJs5gAAawEAAGwBAABgAQAAbQEAAG4BAABvAQAAcAEAAHEBAAByAQAAcwEAAAAAAAA85wAAdAEAAHUBAABgAQAAdgEAAHcBAAB4AQAAeQEAAHoBAAAAAAAAYOcAAHsBAAB8AQAAYAEAAH0BAAB+AQAAfwEAAIABAACBAQAAdAAAAHIAAAB1AAAAZQAAAAAAAABmAAAAYQAAAGwAAABzAAAAZQAAAAAAAAAlAAAAbQAAAC8AAAAlAAAAZAAAAC8AAAAlAAAAeQAAAAAAAAAlAAAASAAAADoAAAAlAAAATQAAADoAAAAlAAAAUwAAAAAAAAAlAAAAYQAAACAAAAAlAAAAYgAAACAAAAAlAAAAZAAAACAAAAAlAAAASAAAADoAAAAlAAAATQAAADoAAAAlAAAAUwAAACAAAAAlAAAAWQAAAAAAAAAlAAAASQAAADoAAAAlAAAATQAAADoAAAAlAAAAUwAAACAAAAAlAAAAcABBnMYDC/4KROMAAIIBAACDAQAAYAEAAE5TdDNfXzI2bG9jYWxlNWZhY2V0RQAAADz6AAAs4wAAcPcAAAAAAADE4wAAggEAAIQBAABgAQAAhQEAAIYBAACHAQAAiAEAAIkBAACKAQAAiwEAAIwBAACNAQAAjgEAAI8BAACQAQAATlN0M19fMjVjdHlwZUl3RUUATlN0M19fMjEwY3R5cGVfYmFzZUUAABT6AACm4wAAmPoAAJTjAAAAAAAAAgAAAETjAAACAAAAvOMAAAIAAAAAAAAAWOQAAIIBAACRAQAAYAEAAJIBAACTAQAAlAEAAJUBAACWAQAAlwEAAJgBAABOU3QzX18yN2NvZGVjdnRJY2MxMV9fbWJzdGF0ZV90RUUATlN0M19fMjEyY29kZWN2dF9iYXNlRQAAAAAU+gAANuQAAJj6AAAU5AAAAAAAAAIAAABE4wAAAgAAAFDkAAACAAAAAAAAAMzkAACCAQAAmQEAAGABAACaAQAAmwEAAJwBAACdAQAAngEAAJ8BAACgAQAATlN0M19fMjdjb2RlY3Z0SURzYzExX19tYnN0YXRlX3RFRQAAmPoAAKjkAAAAAAAAAgAAAETjAAACAAAAUOQAAAIAAAAAAAAAQOUAAIIBAAChAQAAYAEAAKIBAACjAQAApAEAAKUBAACmAQAApwEAAKgBAABOU3QzX18yN2NvZGVjdnRJRHNEdTExX19tYnN0YXRlX3RFRQCY+gAAHOUAAAAAAAACAAAAROMAAAIAAABQ5AAAAgAAAAAAAAC05QAAggEAAKkBAABgAQAAqgEAAKsBAACsAQAArQEAAK4BAACvAQAAsAEAAE5TdDNfXzI3Y29kZWN2dElEaWMxMV9fbWJzdGF0ZV90RUUAAJj6AACQ5QAAAAAAAAIAAABE4wAAAgAAAFDkAAACAAAAAAAAACjmAACCAQAAsQEAAGABAACyAQAAswEAALQBAAC1AQAAtgEAALcBAAC4AQAATlN0M19fMjdjb2RlY3Z0SURpRHUxMV9fbWJzdGF0ZV90RUUAmPoAAATmAAAAAAAAAgAAAETjAAACAAAAUOQAAAIAAABOU3QzX18yN2NvZGVjdnRJd2MxMV9fbWJzdGF0ZV90RUUAAACY+gAASOYAAAAAAAACAAAAROMAAAIAAABQ5AAAAgAAAE5TdDNfXzI2bG9jYWxlNV9faW1wRQAAADz6AACM5gAAROMAAE5TdDNfXzI3Y29sbGF0ZUljRUUAPPoAALDmAABE4wAATlN0M19fMjdjb2xsYXRlSXdFRQA8+gAA0OYAAETjAABOU3QzX18yNWN0eXBlSWNFRQAAAJj6AADw5gAAAAAAAAIAAABE4wAAAgAAALzjAAACAAAATlN0M19fMjhudW1wdW5jdEljRUUAAAAAPPoAACTnAABE4wAATlN0M19fMjhudW1wdW5jdEl3RUUAAAAAPPoAAEjnAABE4wAAAAAAAMTmAAC5AQAAugEAAGABAAC7AQAAvAEAAL0BAAAAAAAA5OYAAL4BAAC/AQAAYAEAAMABAADBAQAAwgEAAAAAAACA6AAAggEAAMMBAABgAQAAxAEAAMUBAADGAQAAxwEAAMgBAADJAQAAygEAAMsBAADMAQAAzQEAAM4BAABOU3QzX18yN251bV9nZXRJY05TXzE5aXN0cmVhbWJ1Zl9pdGVyYXRvckljTlNfMTFjaGFyX3RyYWl0c0ljRUVFRUVFAE5TdDNfXzI5X19udW1fZ2V0SWNFRQBOU3QzX18yMTRfX251bV9nZXRfYmFzZUUAABT6AABG6AAAmPoAADDoAAAAAAAAAQAAAGDoAAAAAAAAmPoAAOznAAAAAAAAAgAAAETjAAACAAAAaOgAQaTRAwvKAVTpAACCAQAAzwEAAGABAADQAQAA0QEAANIBAADTAQAA1AEAANUBAADWAQAA1wEAANgBAADZAQAA2gEAAE5TdDNfXzI3bnVtX2dldEl3TlNfMTlpc3RyZWFtYnVmX2l0ZXJhdG9ySXdOU18xMWNoYXJfdHJhaXRzSXdFRUVFRUUATlN0M19fMjlfX251bV9nZXRJd0VFAAAAmPoAACTpAAAAAAAAAQAAAGDoAAAAAAAAmPoAAODoAAAAAAAAAgAAAETjAAACAAAAPOkAQfjSAwveATzqAACCAQAA2wEAAGABAADcAQAA3QEAAN4BAADfAQAA4AEAAOEBAADiAQAA4wEAAE5TdDNfXzI3bnVtX3B1dEljTlNfMTlvc3RyZWFtYnVmX2l0ZXJhdG9ySWNOU18xMWNoYXJfdHJhaXRzSWNFRUVFRUUATlN0M19fMjlfX251bV9wdXRJY0VFAE5TdDNfXzIxNF9fbnVtX3B1dF9iYXNlRQAAFPoAAALqAACY+gAA7OkAAAAAAAABAAAAHOoAAAAAAACY+gAAqOkAAAAAAAACAAAAROMAAAIAAAAk6gBB4NQDC74BBOsAAIIBAADkAQAAYAEAAOUBAADmAQAA5wEAAOgBAADpAQAA6gEAAOsBAADsAQAATlN0M19fMjdudW1fcHV0SXdOU18xOW9zdHJlYW1idWZfaXRlcmF0b3JJd05TXzExY2hhcl90cmFpdHNJd0VFRUVFRQBOU3QzX18yOV9fbnVtX3B1dEl3RUUAAACY+gAA1OoAAAAAAAABAAAAHOoAAAAAAACY+gAAkOoAAAAAAAACAAAAROMAAAIAAADs6gBBqNYDC5oLBOwAAO0BAADuAQAAYAEAAO8BAADwAQAA8QEAAPIBAADzAQAA9AEAAPUBAAD4////BOwAAPYBAAD3AQAA+AEAAPkBAAD6AQAA+wEAAPwBAABOU3QzX18yOHRpbWVfZ2V0SWNOU18xOWlzdHJlYW1idWZfaXRlcmF0b3JJY05TXzExY2hhcl90cmFpdHNJY0VFRUVFRQBOU3QzX18yOXRpbWVfYmFzZUUAFPoAAL3rAABOU3QzX18yMjBfX3RpbWVfZ2V0X2Nfc3RvcmFnZUljRUUAAAAU+gAA2OsAAJj6AAB46wAAAAAAAAMAAABE4wAAAgAAANDrAAACAAAA/OsAAAAIAAAAAAAA8OwAAP0BAAD+AQAAYAEAAP8BAAAAAgAAAQIAAAICAAADAgAABAIAAAUCAAD4////8OwAAAYCAAAHAgAACAIAAAkCAAAKAgAACwIAAAwCAABOU3QzX18yOHRpbWVfZ2V0SXdOU18xOWlzdHJlYW1idWZfaXRlcmF0b3JJd05TXzExY2hhcl90cmFpdHNJd0VFRUVFRQBOU3QzX18yMjBfX3RpbWVfZ2V0X2Nfc3RvcmFnZUl3RUUAABT6AADF7AAAmPoAAIDsAAAAAAAAAwAAAETjAAACAAAA0OsAAAIAAADo7AAAAAgAAAAAAACU7QAADQIAAA4CAABgAQAADwIAAE5TdDNfXzI4dGltZV9wdXRJY05TXzE5b3N0cmVhbWJ1Zl9pdGVyYXRvckljTlNfMTFjaGFyX3RyYWl0c0ljRUVFRUVFAE5TdDNfXzIxMF9fdGltZV9wdXRFAAAAFPoAAHXtAACY+gAAMO0AAAAAAAACAAAAROMAAAIAAACM7QAAAAgAAAAAAAAU7gAAEAIAABECAABgAQAAEgIAAE5TdDNfXzI4dGltZV9wdXRJd05TXzE5b3N0cmVhbWJ1Zl9pdGVyYXRvckl3TlNfMTFjaGFyX3RyYWl0c0l3RUVFRUVFAAAAAJj6AADM7QAAAAAAAAIAAABE4wAAAgAAAIztAAAACAAAAAAAAKjuAACCAQAAEwIAAGABAAAUAgAAFQIAABYCAAAXAgAAGAIAABkCAAAaAgAAGwIAABwCAABOU3QzX18yMTBtb25leXB1bmN0SWNMYjBFRUUATlN0M19fMjEwbW9uZXlfYmFzZUUAAAAAFPoAAIjuAACY+gAAbO4AAAAAAAACAAAAROMAAAIAAACg7gAAAgAAAAAAAAAc7wAAggEAAB0CAABgAQAAHgIAAB8CAAAgAgAAIQIAACICAAAjAgAAJAIAACUCAAAmAgAATlN0M19fMjEwbW9uZXlwdW5jdEljTGIxRUVFAJj6AAAA7wAAAAAAAAIAAABE4wAAAgAAAKDuAAACAAAAAAAAAJDvAACCAQAAJwIAAGABAAAoAgAAKQIAACoCAAArAgAALAIAAC0CAAAuAgAALwIAADACAABOU3QzX18yMTBtb25leXB1bmN0SXdMYjBFRUUAmPoAAHTvAAAAAAAAAgAAAETjAAACAAAAoO4AAAIAAAAAAAAABPAAAIIBAAAxAgAAYAEAADICAAAzAgAANAIAADUCAAA2AgAANwIAADgCAAA5AgAAOgIAAE5TdDNfXzIxMG1vbmV5cHVuY3RJd0xiMUVFRQCY+gAA6O8AAAAAAAACAAAAROMAAAIAAACg7gAAAgAAAAAAAACo8AAAggEAADsCAABgAQAAPAIAAD0CAABOU3QzX18yOW1vbmV5X2dldEljTlNfMTlpc3RyZWFtYnVmX2l0ZXJhdG9ySWNOU18xMWNoYXJfdHJhaXRzSWNFRUVFRUUATlN0M19fMjExX19tb25leV9nZXRJY0VFAAAU+gAAhvAAAJj6AABA8AAAAAAAAAIAAABE4wAAAgAAAKDwAEHM4QMLmgFM8QAAggEAAD4CAABgAQAAPwIAAEACAABOU3QzX18yOW1vbmV5X2dldEl3TlNfMTlpc3RyZWFtYnVmX2l0ZXJhdG9ySXdOU18xMWNoYXJfdHJhaXRzSXdFRUVFRUUATlN0M19fMjExX19tb25leV9nZXRJd0VFAAAU+gAAKvEAAJj6AADk8AAAAAAAAAIAAABE4wAAAgAAAETxAEHw4gMLmgHw8QAAggEAAEECAABgAQAAQgIAAEMCAABOU3QzX18yOW1vbmV5X3B1dEljTlNfMTlvc3RyZWFtYnVmX2l0ZXJhdG9ySWNOU18xMWNoYXJfdHJhaXRzSWNFRUVFRUUATlN0M19fMjExX19tb25leV9wdXRJY0VFAAAU+gAAzvEAAJj6AACI8QAAAAAAAAIAAABE4wAAAgAAAOjxAEGU5AMLmgGU8gAAggEAAEQCAABgAQAARQIAAEYCAABOU3QzX18yOW1vbmV5X3B1dEl3TlNfMTlvc3RyZWFtYnVmX2l0ZXJhdG9ySXdOU18xMWNoYXJfdHJhaXRzSXdFRUVFRUUATlN0M19fMjExX19tb25leV9wdXRJd0VFAAAU+gAAcvIAAJj6AAAs8gAAAAAAAAIAAABE4wAAAgAAAIzyAEG45QMLuQgM8wAAggEAAEcCAABgAQAASAIAAEkCAABKAgAATlN0M19fMjhtZXNzYWdlc0ljRUUATlN0M19fMjEzbWVzc2FnZXNfYmFzZUUAAAAAFPoAAOnyAACY+gAA1PIAAAAAAAACAAAAROMAAAIAAAAE8wAAAgAAAAAAAABk8wAAggEAAEsCAABgAQAATAIAAE0CAABOAgAATlN0M19fMjhtZXNzYWdlc0l3RUUAAAAAmPoAAEzzAAAAAAAAAgAAAETjAAACAAAABPMAAAIAAABTAAAAdQAAAG4AAABkAAAAYQAAAHkAAAAAAAAATQAAAG8AAABuAAAAZAAAAGEAAAB5AAAAAAAAAFQAAAB1AAAAZQAAAHMAAABkAAAAYQAAAHkAAAAAAAAAVwAAAGUAAABkAAAAbgAAAGUAAABzAAAAZAAAAGEAAAB5AAAAAAAAAFQAAABoAAAAdQAAAHIAAABzAAAAZAAAAGEAAAB5AAAAAAAAAEYAAAByAAAAaQAAAGQAAABhAAAAeQAAAAAAAABTAAAAYQAAAHQAAAB1AAAAcgAAAGQAAABhAAAAeQAAAAAAAABTAAAAdQAAAG4AAAAAAAAATQAAAG8AAABuAAAAAAAAAFQAAAB1AAAAZQAAAAAAAABXAAAAZQAAAGQAAAAAAAAAVAAAAGgAAAB1AAAAAAAAAEYAAAByAAAAaQAAAAAAAABTAAAAYQAAAHQAAAAAAAAASgAAAGEAAABuAAAAdQAAAGEAAAByAAAAeQAAAAAAAABGAAAAZQAAAGIAAAByAAAAdQAAAGEAAAByAAAAeQAAAAAAAABNAAAAYQAAAHIAAABjAAAAaAAAAAAAAABBAAAAcAAAAHIAAABpAAAAbAAAAAAAAABNAAAAYQAAAHkAAAAAAAAASgAAAHUAAABuAAAAZQAAAAAAAABKAAAAdQAAAGwAAAB5AAAAAAAAAEEAAAB1AAAAZwAAAHUAAABzAAAAdAAAAAAAAABTAAAAZQAAAHAAAAB0AAAAZQAAAG0AAABiAAAAZQAAAHIAAAAAAAAATwAAAGMAAAB0AAAAbwAAAGIAAABlAAAAcgAAAAAAAABOAAAAbwAAAHYAAABlAAAAbQAAAGIAAABlAAAAcgAAAAAAAABEAAAAZQAAAGMAAABlAAAAbQAAAGIAAABlAAAAcgAAAAAAAABKAAAAYQAAAG4AAAAAAAAARgAAAGUAAABiAAAAAAAAAE0AAABhAAAAcgAAAAAAAABBAAAAcAAAAHIAAAAAAAAASgAAAHUAAABuAAAAAAAAAEoAAAB1AAAAbAAAAAAAAABBAAAAdQAAAGcAAAAAAAAAUwAAAGUAAABwAAAAAAAAAE8AAABjAAAAdAAAAAAAAABOAAAAbwAAAHYAAAAAAAAARAAAAGUAAABjAAAAAAAAAEEAAABNAAAAAAAAAFAAAABNAEH87QML0gr86wAA9gEAAPcBAAD4AQAA+QEAAPoBAAD7AQAA/AEAAAAAAADo7AAABgIAAAcCAAAIAgAACQIAAAoCAAALAgAADAIAAAAAAABw9wAAFwAAAE8CAABQAgAATlN0M19fMjE0X19zaGFyZWRfY291bnRFAAAAABT6AABU9wAAAAAAALT3AAAXAAAAUQIAAFACAABSAgAAUAIAAE5TdDNfXzIxOV9fc2hhcmVkX3dlYWtfY291bnRFAAAAmPoAAJT3AAAAAAAAAQAAAHD3AAAAAAAATjEwX19jeHhhYml2MTE2X19zaGltX3R5cGVfaW5mb0UAAAAAPPoAAMz3AABI/AAATjEwX19jeHhhYml2MTE3X19jbGFzc190eXBlX2luZm9FAAAAPPoAAPz3AADw9wAATjEwX19jeHhhYml2MTE3X19wYmFzZV90eXBlX2luZm9FAAAAPPoAACz4AADw9wAATjEwX19jeHhhYml2MTE5X19wb2ludGVyX3R5cGVfaW5mb0UAPPoAAFz4AABQ+AAATjEwX19jeHhhYml2MTIwX19mdW5jdGlvbl90eXBlX2luZm9FAAAAADz6AACM+AAA8PcAAE4xMF9fY3h4YWJpdjEyOV9fcG9pbnRlcl90b19tZW1iZXJfdHlwZV9pbmZvRQAAADz6AADA+AAAUPgAAAAAAABA+QAAUwIAAFQCAABVAgAAVgIAAFcCAABOMTBfX2N4eGFiaXYxMjNfX2Z1bmRhbWVudGFsX3R5cGVfaW5mb0UAPPoAABj5AADw9wAAdgAAAAT5AABM+QAARG4AAAT5AABY+QAAYgAAAAT5AABk+QAAYwAAAAT5AABw+QAAaAAAAAT5AAB8+QAAYQAAAAT5AACI+QAAcwAAAAT5AACU+QAAdAAAAAT5AACg+QAAaQAAAAT5AACs+QAAagAAAAT5AAC4+QAAbAAAAAT5AADE+QAAbQAAAAT5AADQ+QAAeAAAAAT5AADc+QAAeQAAAAT5AADo+QAAZgAAAAT5AAD0+QAAZAAAAAT5AAAA+gAAAAAAACD4AABTAgAAWAIAAFUCAABWAgAAWQIAAFoCAABbAgAAXAIAAAAAAACE+gAAUwIAAF0CAABVAgAAVgIAAFkCAABeAgAAXwIAAGACAABOMTBfX2N4eGFiaXYxMjBfX3NpX2NsYXNzX3R5cGVfaW5mb0UAAAAAPPoAAFz6AAAg+AAAAAAAAOD6AABTAgAAYQIAAFUCAABWAgAAWQIAAGICAABjAgAAZAIAAE4xMF9fY3h4YWJpdjEyMV9fdm1pX2NsYXNzX3R5cGVfaW5mb0UAAAA8+gAAuPoAACD4AAAAAAAAgPgAAFMCAABlAgAAVQIAAFYCAABmAgAAAAAAAGz7AAANAAAAZwIAAGgCAAAAAAAAlPsAAA0AAABpAgAAagIAAAAAAABU+wAADQAAAGsCAABsAgAAU3Q5ZXhjZXB0aW9uAAAAABT6AABE+wAAU3Q5YmFkX2FsbG9jAAAAADz6AABc+wAAVPsAAFN0MjBiYWRfYXJyYXlfbmV3X2xlbmd0aAAAAAA8+gAAePsAAGz7AAAAAAAAxPsAAAwAAABtAgAAbgIAAFN0MTFsb2dpY19lcnJvcgA8+gAAtPsAAFT7AAAAAAAA+PsAAAwAAABvAgAAbgIAAFN0MTJsZW5ndGhfZXJyb3IAAAAAPPoAAOT7AADE+wAAAAAAACz8AAAMAAAAcAIAAG4CAABTdDEyb3V0X29mX3JhbmdlAAAAADz6AAAY/AAAxPsAAFN0OXR5cGVfaW5mbwAAAAAU+gAAOPwAQdD4AwsRAQAAAP/////9/////v///wUAQez4AwsB/QBBhPkDCwv7AAAA+gAAAJANAQBBnPkDCwECAEGs+QMLCP//////////AEHw+QMLCWD8AAAAAAAABQBBhPoDCwH+AEGc+gMLDvsAAAD/AAAAmA0BAAAEAEG0+gMLAQEAQcT6AwsF/////woAQYj7AwsJ+PwAAAAkUQAJAEGc+wMLAf0AQbD7AwsS/AAAAAAAAAD6AAAAqBMBAAAEAEHc+wMLBP////8=") || (AA2 = $2, $2 = A3.locateFile ? A3.locateFile(AA2, F2) : F2 + AA2);
        var iA2 = { 65056: function() {
          var A4 = arguments, I4 = 0;
          artoolkit.NFTMarkerInfo || (artoolkit.NFTMarkerInfo = { id: 0, error: -1, found: 0, pose: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] });
          var g2 = artoolkit.NFTMarkerInfo;
          g2.id = A4[I4++], g2.error = A4[I4++], g2.found = 1, g2.pose[0] = A4[I4++], g2.pose[1] = A4[I4++], g2.pose[2] = A4[I4++], g2.pose[3] = A4[I4++], g2.pose[4] = A4[I4++], g2.pose[5] = A4[I4++], g2.pose[6] = A4[I4++], g2.pose[7] = A4[I4++], g2.pose[8] = A4[I4++], g2.pose[9] = A4[I4++], g2.pose[10] = A4[I4++], g2.pose[11] = A4[I4++];
        }, 65753: function() {
          var A4 = arguments, I4 = 0;
          artoolkit.NFTMarkerInfo || (artoolkit.NFTMarkerInfo = { id: 0, error: -1, found: 0, pose: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] });
          var g2 = artoolkit.NFTMarkerInfo;
          g2.id = A4[I4++], g2.error = -1, g2.found = 0, g2.pose[0] = 0, g2.pose[1] = 0, g2.pose[2] = 0, g2.pose[3] = 0, g2.pose[4] = 0, g2.pose[5] = 0, g2.pose[6] = 0, g2.pose[7] = 0, g2.pose[8] = 0, g2.pose[9] = 0, g2.pose[10] = 0, g2.pose[11] = 0;
        }, 66373: function(A4, I4, g2, B3) {
          artoolkit.multiEachMarkerInfo || (artoolkit.multiEachMarkerInfo = {});
          var C3 = artoolkit.multiEachMarkerInfo;
          C3.visible = A4, C3.pattId = I4, C3.pattType = g2, C3.width = B3;
        }, 66647: function(A4, I4, g2, B3, C3, Q2, E3, i3, o3, D2, a3, t3) {
          var s3 = arguments, w2 = 12;
          artoolkit.markerInfo || (artoolkit.markerInfo = { pos: [0, 0], line: [[0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0]], vertex: [[0, 0], [0, 0], [0, 0], [0, 0]] });
          var G3 = artoolkit.markerInfo;
          G3.area = A4, G3.id = I4, G3.idPatt = g2, G3.idMatrix = B3, G3.dir = C3, G3.dirPatt = Q2, G3.dirMatrix = E3, G3.cf = i3, G3.cfPatt = o3, G3.cfMatrix = D2, G3.pos[0] = a3, G3.pos[1] = t3, G3.line[0][0] = s3[w2++], G3.line[0][1] = s3[w2++], G3.line[0][2] = s3[w2++], G3.line[1][0] = s3[w2++], G3.line[1][1] = s3[w2++], G3.line[1][2] = s3[w2++], G3.line[2][0] = s3[w2++], G3.line[2][1] = s3[w2++], G3.line[2][2] = s3[w2++], G3.line[3][0] = s3[w2++], G3.line[3][1] = s3[w2++], G3.line[3][2] = s3[w2++], G3.vertex[0][0] = s3[w2++], G3.vertex[0][1] = s3[w2++], G3.vertex[1][0] = s3[w2++], G3.vertex[1][1] = s3[w2++], G3.vertex[2][0] = s3[w2++], G3.vertex[2][1] = s3[w2++], G3.vertex[3][0] = s3[w2++], G3.vertex[3][1] = s3[w2++], G3.errorCorrected = s3[w2++];
        }, 67982: function(A4, I4, g2, B3, C3, Q2) {
          artoolkit.frameMalloc || (artoolkit.frameMalloc = {});
          var E3 = artoolkit.frameMalloc;
          E3.framepointer = I4, E3.framesize = g2, E3.camera = B3, E3.transform = C3, E3.videoLumaPointer = Q2;
        } };
        function oA2(A4) {
          this.name = "ExitStatus", this.message = "Program terminated with exit(" + A4 + ")", this.status = A4;
        }
        function DA2(I4) {
          for (; I4.length > 0; ) I4.shift()(A3);
        }
        function aA2(A4) {
          this.excPtr = A4, this.ptr = A4 - 24, this.set_type = function(A5) {
            l2[this.ptr + 4 >> 2] = A5;
          }, this.get_type = function() {
            return l2[this.ptr + 4 >> 2];
          }, this.set_destructor = function(A5) {
            l2[this.ptr + 8 >> 2] = A5;
          }, this.get_destructor = function() {
            return l2[this.ptr + 8 >> 2];
          }, this.set_refcount = function(A5) {
            d2[this.ptr >> 2] = A5;
          }, this.set_caught = function(A5) {
            A5 = A5 ? 1 : 0, J2[this.ptr + 12 >> 0] = A5;
          }, this.get_caught = function() {
            return 0 != J2[this.ptr + 12 >> 0];
          }, this.set_rethrown = function(A5) {
            A5 = A5 ? 1 : 0, J2[this.ptr + 13 >> 0] = A5;
          }, this.get_rethrown = function() {
            return 0 != J2[this.ptr + 13 >> 0];
          }, this.init = function(A5, I4) {
            this.set_adjusted_ptr(0), this.set_type(A5), this.set_destructor(I4), this.set_refcount(0), this.set_caught(false), this.set_rethrown(false);
          }, this.add_ref = function() {
            var A5 = d2[this.ptr >> 2];
            d2[this.ptr >> 2] = A5 + 1;
          }, this.release_ref = function() {
            var A5 = d2[this.ptr >> 2];
            return d2[this.ptr >> 2] = A5 - 1, 1 === A5;
          }, this.set_adjusted_ptr = function(A5) {
            l2[this.ptr + 16 >> 2] = A5;
          }, this.get_adjusted_ptr = function() {
            return l2[this.ptr + 16 >> 2];
          }, this.get_exception_ptr = function() {
            if (jI(this.get_type())) return l2[this.excPtr >> 2];
            var A5 = this.get_adjusted_ptr();
            return 0 !== A5 ? A5 : this.excPtr;
          };
        }
        var tA2 = { isAbs: function(A4) {
          return "/" === A4.charAt(0);
        }, splitPath: function(A4) {
          return /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/.exec(A4).slice(1);
        }, normalizeArray: function(A4, I4) {
          for (var g2 = 0, B3 = A4.length - 1; B3 >= 0; B3--) {
            var C3 = A4[B3];
            "." === C3 ? A4.splice(B3, 1) : ".." === C3 ? (A4.splice(B3, 1), g2++) : g2 && (A4.splice(B3, 1), g2--);
          }
          if (I4) for (; g2; g2--) A4.unshift("..");
          return A4;
        }, normalize: function(A4) {
          var I4 = tA2.isAbs(A4), g2 = "/" === A4.substr(-1);
          return (A4 = tA2.normalizeArray(A4.split("/").filter(function(A5) {
            return !!A5;
          }), !I4).join("/")) || I4 || (A4 = "."), A4 && g2 && (A4 += "/"), (I4 ? "/" : "") + A4;
        }, dirname: function(A4) {
          var I4 = tA2.splitPath(A4), g2 = I4[0], B3 = I4[1];
          return g2 || B3 ? (B3 && (B3 = B3.substr(0, B3.length - 1)), g2 + B3) : ".";
        }, basename: function(A4) {
          if ("/" === A4) return "/";
          var I4 = (A4 = (A4 = tA2.normalize(A4)).replace(/\/$/, "")).lastIndexOf("/");
          return -1 === I4 ? A4 : A4.substr(I4 + 1);
        }, join: function() {
          var A4 = Array.prototype.slice.call(arguments);
          return tA2.normalize(A4.join("/"));
        }, join2: function(A4, I4) {
          return tA2.normalize(A4 + "/" + I4);
        } }, sA2 = { resolve: function() {
          for (var A4 = "", I4 = false, g2 = arguments.length - 1; g2 >= -1 && !I4; g2--) {
            var B3 = g2 >= 0 ? arguments[g2] : RA2.cwd();
            if ("string" != typeof B3) throw new TypeError("Arguments to path.resolve must be strings");
            if (!B3) return "";
            A4 = B3 + "/" + A4, I4 = tA2.isAbs(B3);
          }
          return (I4 ? "/" : "") + (A4 = tA2.normalizeArray(A4.split("/").filter(function(A5) {
            return !!A5;
          }), !I4).join("/")) || ".";
        }, relative: function(A4, I4) {
          function g2(A5) {
            for (var I5 = 0; I5 < A5.length && "" === A5[I5]; I5++) ;
            for (var g3 = A5.length - 1; g3 >= 0 && "" === A5[g3]; g3--) ;
            return I5 > g3 ? [] : A5.slice(I5, g3 - I5 + 1);
          }
          A4 = sA2.resolve(A4).substr(1), I4 = sA2.resolve(I4).substr(1);
          for (var B3 = g2(A4.split("/")), C3 = g2(I4.split("/")), Q2 = Math.min(B3.length, C3.length), E3 = Q2, i3 = 0; i3 < Q2; i3++) if (B3[i3] !== C3[i3]) {
            E3 = i3;
            break;
          }
          var o3 = [];
          for (i3 = E3; i3 < B3.length; i3++) o3.push("..");
          return (o3 = o3.concat(C3.slice(E3))).join("/");
        } };
        function wA2(A4, I4, g2) {
          var B3 = W2(A4) + 1, C3 = new Array(B3), Q2 = p2(A4, C3, 0, C3.length);
          return I4 && (C3.length = Q2), C3;
        }
        var GA2 = { ttys: [], init: function() {
        }, shutdown: function() {
        }, register: function(A4, I4) {
          GA2.ttys[A4] = { input: [], output: [], ops: I4 }, RA2.registerDevice(A4, GA2.stream_ops);
        }, stream_ops: { open: function(A4) {
          var I4 = GA2.ttys[A4.node.rdev];
          if (!I4) throw new RA2.ErrnoError(43);
          A4.tty = I4, A4.seekable = false;
        }, close: function(A4) {
          A4.tty.ops.fsync(A4.tty);
        }, fsync: function(A4) {
          A4.tty.ops.fsync(A4.tty);
        }, read: function(A4, I4, g2, B3, C3) {
          if (!A4.tty || !A4.tty.ops.get_char) throw new RA2.ErrnoError(60);
          for (var Q2 = 0, E3 = 0; E3 < B3; E3++) {
            var i3;
            try {
              i3 = A4.tty.ops.get_char(A4.tty);
            } catch (A5) {
              throw new RA2.ErrnoError(29);
            }
            if (void 0 === i3 && 0 === Q2) throw new RA2.ErrnoError(6);
            if (null == i3) break;
            Q2++, I4[g2 + E3] = i3;
          }
          return Q2 && (A4.node.timestamp = Date.now()), Q2;
        }, write: function(A4, I4, g2, B3, C3) {
          if (!A4.tty || !A4.tty.ops.put_char) throw new RA2.ErrnoError(60);
          try {
            for (var Q2 = 0; Q2 < B3; Q2++) A4.tty.ops.put_char(A4.tty, I4[g2 + Q2]);
          } catch (A5) {
            throw new RA2.ErrnoError(29);
          }
          return B3 && (A4.node.timestamp = Date.now()), Q2;
        } }, default_tty_ops: { get_char: function(A4) {
          if (!A4.input.length) {
            var I4 = null;
            if (y2) {
              var g2 = Buffer.alloc(256), B3 = 0;
              try {
                B3 = o2.readSync(process.stdin.fd, g2, 0, 256, -1);
              } catch (A5) {
                if (!A5.toString().includes("EOF")) throw A5;
                B3 = 0;
              }
              I4 = B3 > 0 ? g2.slice(0, B3).toString("utf-8") : null;
            } else "undefined" != typeof window && "function" == typeof window.prompt ? null !== (I4 = window.prompt("Input: ")) && (I4 += "\n") : "function" == typeof readline && null !== (I4 = readline()) && (I4 += "\n");
            if (!I4) return null;
            A4.input = wA2(I4, true);
          }
          return A4.input.shift();
        }, put_char: function(A4, I4) {
          null === I4 || 10 === I4 ? (M2(u2(A4.output, 0)), A4.output = []) : 0 != I4 && A4.output.push(I4);
        }, fsync: function(A4) {
          A4.output && A4.output.length > 0 && (M2(u2(A4.output, 0)), A4.output = []);
        } }, default_tty1_ops: { put_char: function(A4, I4) {
          null === I4 || 10 === I4 ? (n2(u2(A4.output, 0)), A4.output = []) : 0 != I4 && A4.output.push(I4);
        }, fsync: function(A4) {
          A4.output && A4.output.length > 0 && (n2(u2(A4.output, 0)), A4.output = []);
        } } };
        function hA2(A4) {
          _2();
        }
        var rA2 = { ops_table: null, mount: function(A4) {
          return rA2.createNode(null, "/", 16895, 0);
        }, createNode: function(A4, I4, g2, B3) {
          if (RA2.isBlkdev(g2) || RA2.isFIFO(g2)) throw new RA2.ErrnoError(63);
          rA2.ops_table || (rA2.ops_table = { dir: { node: { getattr: rA2.node_ops.getattr, setattr: rA2.node_ops.setattr, lookup: rA2.node_ops.lookup, mknod: rA2.node_ops.mknod, rename: rA2.node_ops.rename, unlink: rA2.node_ops.unlink, rmdir: rA2.node_ops.rmdir, readdir: rA2.node_ops.readdir, symlink: rA2.node_ops.symlink }, stream: { llseek: rA2.stream_ops.llseek } }, file: { node: { getattr: rA2.node_ops.getattr, setattr: rA2.node_ops.setattr }, stream: { llseek: rA2.stream_ops.llseek, read: rA2.stream_ops.read, write: rA2.stream_ops.write, allocate: rA2.stream_ops.allocate, mmap: rA2.stream_ops.mmap, msync: rA2.stream_ops.msync } }, link: { node: { getattr: rA2.node_ops.getattr, setattr: rA2.node_ops.setattr, readlink: rA2.node_ops.readlink }, stream: {} }, chrdev: { node: { getattr: rA2.node_ops.getattr, setattr: rA2.node_ops.setattr }, stream: RA2.chrdev_stream_ops } });
          var C3 = RA2.createNode(A4, I4, g2, B3);
          return RA2.isDir(C3.mode) ? (C3.node_ops = rA2.ops_table.dir.node, C3.stream_ops = rA2.ops_table.dir.stream, C3.contents = {}) : RA2.isFile(C3.mode) ? (C3.node_ops = rA2.ops_table.file.node, C3.stream_ops = rA2.ops_table.file.stream, C3.usedBytes = 0, C3.contents = null) : RA2.isLink(C3.mode) ? (C3.node_ops = rA2.ops_table.link.node, C3.stream_ops = rA2.ops_table.link.stream) : RA2.isChrdev(C3.mode) && (C3.node_ops = rA2.ops_table.chrdev.node, C3.stream_ops = rA2.ops_table.chrdev.stream), C3.timestamp = Date.now(), A4 && (A4.contents[I4] = C3, A4.timestamp = C3.timestamp), C3;
        }, getFileDataAsTypedArray: function(A4) {
          return A4.contents ? A4.contents.subarray ? A4.contents.subarray(0, A4.usedBytes) : new Uint8Array(A4.contents) : new Uint8Array(0);
        }, expandFileStorage: function(A4, I4) {
          var g2 = A4.contents ? A4.contents.length : 0;
          if (!(g2 >= I4)) {
            I4 = Math.max(I4, g2 * (g2 < 1048576 ? 2 : 1.125) >>> 0), 0 != g2 && (I4 = Math.max(I4, 256));
            var B3 = A4.contents;
            A4.contents = new Uint8Array(I4), A4.usedBytes > 0 && A4.contents.set(B3.subarray(0, A4.usedBytes), 0);
          }
        }, resizeFileStorage: function(A4, I4) {
          if (A4.usedBytes != I4) if (0 == I4) A4.contents = null, A4.usedBytes = 0;
          else {
            var g2 = A4.contents;
            A4.contents = new Uint8Array(I4), g2 && A4.contents.set(g2.subarray(0, Math.min(I4, A4.usedBytes))), A4.usedBytes = I4;
          }
        }, node_ops: { getattr: function(A4) {
          var I4 = {};
          return I4.dev = RA2.isChrdev(A4.mode) ? A4.id : 1, I4.ino = A4.id, I4.mode = A4.mode, I4.nlink = 1, I4.uid = 0, I4.gid = 0, I4.rdev = A4.rdev, RA2.isDir(A4.mode) ? I4.size = 4096 : RA2.isFile(A4.mode) ? I4.size = A4.usedBytes : RA2.isLink(A4.mode) ? I4.size = A4.link.length : I4.size = 0, I4.atime = new Date(A4.timestamp), I4.mtime = new Date(A4.timestamp), I4.ctime = new Date(A4.timestamp), I4.blksize = 4096, I4.blocks = Math.ceil(I4.size / I4.blksize), I4;
        }, setattr: function(A4, I4) {
          void 0 !== I4.mode && (A4.mode = I4.mode), void 0 !== I4.timestamp && (A4.timestamp = I4.timestamp), void 0 !== I4.size && rA2.resizeFileStorage(A4, I4.size);
        }, lookup: function(A4, I4) {
          throw RA2.genericErrors[44];
        }, mknod: function(A4, I4, g2, B3) {
          return rA2.createNode(A4, I4, g2, B3);
        }, rename: function(A4, I4, g2) {
          if (RA2.isDir(A4.mode)) {
            var B3;
            try {
              B3 = RA2.lookupNode(I4, g2);
            } catch (A5) {
            }
            if (B3) for (var C3 in B3.contents) throw new RA2.ErrnoError(55);
          }
          delete A4.parent.contents[A4.name], A4.parent.timestamp = Date.now(), A4.name = g2, I4.contents[g2] = A4, I4.timestamp = A4.parent.timestamp, A4.parent = I4;
        }, unlink: function(A4, I4) {
          delete A4.contents[I4], A4.timestamp = Date.now();
        }, rmdir: function(A4, I4) {
          var g2 = RA2.lookupNode(A4, I4);
          for (var B3 in g2.contents) throw new RA2.ErrnoError(55);
          delete A4.contents[I4], A4.timestamp = Date.now();
        }, readdir: function(A4) {
          var I4 = [".", ".."];
          for (var g2 in A4.contents) A4.contents.hasOwnProperty(g2) && I4.push(g2);
          return I4;
        }, symlink: function(A4, I4, g2) {
          var B3 = rA2.createNode(A4, I4, 41471, 0);
          return B3.link = g2, B3;
        }, readlink: function(A4) {
          if (!RA2.isLink(A4.mode)) throw new RA2.ErrnoError(28);
          return A4.link;
        } }, stream_ops: { read: function(A4, I4, g2, B3, C3) {
          var Q2 = A4.node.contents;
          if (C3 >= A4.node.usedBytes) return 0;
          var E3 = Math.min(A4.node.usedBytes - C3, B3);
          if (E3 > 8 && Q2.subarray) I4.set(Q2.subarray(C3, C3 + E3), g2);
          else for (var i3 = 0; i3 < E3; i3++) I4[g2 + i3] = Q2[C3 + i3];
          return E3;
        }, write: function(A4, I4, g2, B3, C3, Q2) {
          if (I4.buffer === J2.buffer && (Q2 = false), !B3) return 0;
          var E3 = A4.node;
          if (E3.timestamp = Date.now(), I4.subarray && (!E3.contents || E3.contents.subarray)) {
            if (Q2) return E3.contents = I4.subarray(g2, g2 + B3), E3.usedBytes = B3, B3;
            if (0 === E3.usedBytes && 0 === C3) return E3.contents = I4.slice(g2, g2 + B3), E3.usedBytes = B3, B3;
            if (C3 + B3 <= E3.usedBytes) return E3.contents.set(I4.subarray(g2, g2 + B3), C3), B3;
          }
          if (rA2.expandFileStorage(E3, C3 + B3), E3.contents.subarray && I4.subarray) E3.contents.set(I4.subarray(g2, g2 + B3), C3);
          else for (var i3 = 0; i3 < B3; i3++) E3.contents[C3 + i3] = I4[g2 + i3];
          return E3.usedBytes = Math.max(E3.usedBytes, C3 + B3), B3;
        }, llseek: function(A4, I4, g2) {
          var B3 = I4;
          if (1 === g2 ? B3 += A4.position : 2 === g2 && RA2.isFile(A4.node.mode) && (B3 += A4.node.usedBytes), B3 < 0) throw new RA2.ErrnoError(28);
          return B3;
        }, allocate: function(A4, I4, g2) {
          rA2.expandFileStorage(A4.node, I4 + g2), A4.node.usedBytes = Math.max(A4.node.usedBytes, I4 + g2);
        }, mmap: function(A4, I4, g2, B3, C3) {
          if (!RA2.isFile(A4.node.mode)) throw new RA2.ErrnoError(43);
          var Q2, E3, i3 = A4.node.contents;
          if (2 & C3 || i3.buffer !== U2) {
            if ((g2 > 0 || g2 + I4 < i3.length) && (i3 = i3.subarray ? i3.subarray(g2, g2 + I4) : Array.prototype.slice.call(i3, g2, g2 + I4)), E3 = true, !(Q2 = hA2())) throw new RA2.ErrnoError(48);
            J2.set(i3, Q2);
          } else E3 = false, Q2 = i3.byteOffset;
          return { ptr: Q2, allocated: E3 };
        }, msync: function(A4, I4, g2, B3, C3) {
          if (!RA2.isFile(A4.node.mode)) throw new RA2.ErrnoError(43);
          return 2 & C3 || rA2.stream_ops.write(A4, I4, 0, B3, g2, false), 0;
        } } }, RA2 = { root: null, mounts: [], devices: {}, streams: [], nextInode: 1, nameTable: null, currentPath: "/", initialized: false, ignorePermissions: true, ErrnoError: null, genericErrors: {}, filesystems: null, syncFSRequests: 0, lookupPath: function(A4) {
          var I4 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (!(A4 = sA2.resolve(RA2.cwd(), A4))) return { path: "", node: null };
          var g2 = { follow_mount: true, recurse_count: 0 };
          if ((I4 = Object.assign(g2, I4)).recurse_count > 8) throw new RA2.ErrnoError(32);
          for (var B3 = tA2.normalizeArray(A4.split("/").filter(function(A5) {
            return !!A5;
          }), false), C3 = RA2.root, Q2 = "/", E3 = 0; E3 < B3.length; E3++) {
            var i3 = E3 === B3.length - 1;
            if (i3 && I4.parent) break;
            if (C3 = RA2.lookupNode(C3, B3[E3]), Q2 = tA2.join2(Q2, B3[E3]), RA2.isMountpoint(C3) && (!i3 || i3 && I4.follow_mount) && (C3 = C3.mounted.root), !i3 || I4.follow) for (var o3 = 0; RA2.isLink(C3.mode); ) {
              var D2 = RA2.readlink(Q2);
              Q2 = sA2.resolve(tA2.dirname(Q2), D2);
              var a3 = RA2.lookupPath(Q2, { recurse_count: I4.recurse_count + 1 });
              if (C3 = a3.node, o3++ > 40) throw new RA2.ErrnoError(32);
            }
          }
          return { path: Q2, node: C3 };
        }, getPath: function(A4) {
          for (var I4; ; ) {
            if (RA2.isRoot(A4)) {
              var g2 = A4.mount.mountpoint;
              return I4 ? "/" !== g2[g2.length - 1] ? g2 + "/" + I4 : g2 + I4 : g2;
            }
            I4 = I4 ? A4.name + "/" + I4 : A4.name, A4 = A4.parent;
          }
        }, hashName: function(A4, I4) {
          for (var g2 = 0, B3 = 0; B3 < I4.length; B3++) g2 = (g2 << 5) - g2 + I4.charCodeAt(B3) | 0;
          return (A4 + g2 >>> 0) % RA2.nameTable.length;
        }, hashAddNode: function(A4) {
          var I4 = RA2.hashName(A4.parent.id, A4.name);
          A4.name_next = RA2.nameTable[I4], RA2.nameTable[I4] = A4;
        }, hashRemoveNode: function(A4) {
          var I4 = RA2.hashName(A4.parent.id, A4.name);
          if (RA2.nameTable[I4] === A4) RA2.nameTable[I4] = A4.name_next;
          else for (var g2 = RA2.nameTable[I4]; g2; ) {
            if (g2.name_next === A4) {
              g2.name_next = A4.name_next;
              break;
            }
            g2 = g2.name_next;
          }
        }, lookupNode: function(A4, I4) {
          var g2 = RA2.mayLookup(A4);
          if (g2) throw new RA2.ErrnoError(g2, A4);
          for (var B3 = RA2.hashName(A4.id, I4), C3 = RA2.nameTable[B3]; C3; C3 = C3.name_next) {
            var Q2 = C3.name;
            if (C3.parent.id === A4.id && Q2 === I4) return C3;
          }
          return RA2.lookup(A4, I4);
        }, createNode: function(A4, I4, g2, B3) {
          var C3 = new RA2.FSNode(A4, I4, g2, B3);
          return RA2.hashAddNode(C3), C3;
        }, destroyNode: function(A4) {
          RA2.hashRemoveNode(A4);
        }, isRoot: function(A4) {
          return A4 === A4.parent;
        }, isMountpoint: function(A4) {
          return !!A4.mounted;
        }, isFile: function(A4) {
          return 32768 == (61440 & A4);
        }, isDir: function(A4) {
          return 16384 == (61440 & A4);
        }, isLink: function(A4) {
          return 40960 == (61440 & A4);
        }, isChrdev: function(A4) {
          return 8192 == (61440 & A4);
        }, isBlkdev: function(A4) {
          return 24576 == (61440 & A4);
        }, isFIFO: function(A4) {
          return 4096 == (61440 & A4);
        }, isSocket: function(A4) {
          return 49152 == (49152 & A4);
        }, flagModes: { r: 0, "r+": 2, w: 577, "w+": 578, a: 1089, "a+": 1090 }, modeStringToFlags: function(A4) {
          var I4 = RA2.flagModes[A4];
          if (void 0 === I4) throw new Error("Unknown file open mode: " + A4);
          return I4;
        }, flagsToPermissionString: function(A4) {
          var I4 = ["r", "w", "rw"][3 & A4];
          return 512 & A4 && (I4 += "w"), I4;
        }, nodePermissions: function(A4, I4) {
          return RA2.ignorePermissions || (!I4.includes("r") || 292 & A4.mode) && (!I4.includes("w") || 146 & A4.mode) && (!I4.includes("x") || 73 & A4.mode) ? 0 : 2;
        }, mayLookup: function(A4) {
          return RA2.nodePermissions(A4, "x") || (A4.node_ops.lookup ? 0 : 2);
        }, mayCreate: function(A4, I4) {
          try {
            return RA2.lookupNode(A4, I4), 20;
          } catch (A5) {
          }
          return RA2.nodePermissions(A4, "wx");
        }, mayDelete: function(A4, I4, g2) {
          var B3;
          try {
            B3 = RA2.lookupNode(A4, I4);
          } catch (A5) {
            return A5.errno;
          }
          var C3 = RA2.nodePermissions(A4, "wx");
          if (C3) return C3;
          if (g2) {
            if (!RA2.isDir(B3.mode)) return 54;
            if (RA2.isRoot(B3) || RA2.getPath(B3) === RA2.cwd()) return 10;
          } else if (RA2.isDir(B3.mode)) return 31;
          return 0;
        }, mayOpen: function(A4, I4) {
          return A4 ? RA2.isLink(A4.mode) ? 32 : RA2.isDir(A4.mode) && ("r" !== RA2.flagsToPermissionString(I4) || 512 & I4) ? 31 : RA2.nodePermissions(A4, RA2.flagsToPermissionString(I4)) : 44;
        }, MAX_OPEN_FDS: 4096, nextfd: function() {
          for (var A4 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, I4 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : RA2.MAX_OPEN_FDS, g2 = A4; g2 <= I4; g2++) if (!RA2.streams[g2]) return g2;
          throw new RA2.ErrnoError(33);
        }, getStream: function(A4) {
          return RA2.streams[A4];
        }, createStream: function(A4, I4, g2) {
          RA2.FSStream || (RA2.FSStream = function() {
            this.shared = {};
          }, RA2.FSStream.prototype = {}, Object.defineProperties(RA2.FSStream.prototype, { object: { get: function() {
            return this.node;
          }, set: function(A5) {
            this.node = A5;
          } }, isRead: { get: function() {
            return 1 != (2097155 & this.flags);
          } }, isWrite: { get: function() {
            return 0 != (2097155 & this.flags);
          } }, isAppend: { get: function() {
            return 1024 & this.flags;
          } }, flags: { get: function() {
            return this.shared.flags;
          }, set: function(A5) {
            this.shared.flags = A5;
          } }, position: { get: function() {
            return this.shared.position;
          }, set: function(A5) {
            this.shared.position = A5;
          } } })), A4 = Object.assign(new RA2.FSStream(), A4);
          var B3 = RA2.nextfd(I4, g2);
          return A4.fd = B3, RA2.streams[B3] = A4, A4;
        }, closeStream: function(A4) {
          RA2.streams[A4] = null;
        }, chrdev_stream_ops: { open: function(A4) {
          var I4 = RA2.getDevice(A4.node.rdev);
          A4.stream_ops = I4.stream_ops, A4.stream_ops.open && A4.stream_ops.open(A4);
        }, llseek: function() {
          throw new RA2.ErrnoError(70);
        } }, major: function(A4) {
          return A4 >> 8;
        }, minor: function(A4) {
          return 255 & A4;
        }, makedev: function(A4, I4) {
          return A4 << 8 | I4;
        }, registerDevice: function(A4, I4) {
          RA2.devices[A4] = { stream_ops: I4 };
        }, getDevice: function(A4) {
          return RA2.devices[A4];
        }, getMounts: function(A4) {
          for (var I4 = [], g2 = [A4]; g2.length; ) {
            var B3 = g2.pop();
            I4.push(B3), g2.push.apply(g2, B3.mounts);
          }
          return I4;
        }, syncfs: function(A4, I4) {
          "function" == typeof A4 && (I4 = A4, A4 = false), RA2.syncFSRequests++, RA2.syncFSRequests > 1 && n2("warning: " + RA2.syncFSRequests + " FS.syncfs operations in flight at once, probably just doing extra work");
          var g2 = RA2.getMounts(RA2.root.mount), B3 = 0;
          function C3(A5) {
            return RA2.syncFSRequests--, I4(A5);
          }
          function Q2(A5) {
            if (A5) return Q2.errored ? void 0 : (Q2.errored = true, C3(A5));
            ++B3 >= g2.length && C3(null);
          }
          g2.forEach(function(I5) {
            if (!I5.type.syncfs) return Q2(null);
            I5.type.syncfs(I5, A4, Q2);
          });
        }, mount: function(A4, I4, g2) {
          var B3, C3 = "/" === g2, Q2 = !g2;
          if (C3 && RA2.root) throw new RA2.ErrnoError(10);
          if (!C3 && !Q2) {
            var E3 = RA2.lookupPath(g2, { follow_mount: false });
            if (g2 = E3.path, B3 = E3.node, RA2.isMountpoint(B3)) throw new RA2.ErrnoError(10);
            if (!RA2.isDir(B3.mode)) throw new RA2.ErrnoError(54);
          }
          var i3 = { type: A4, opts: I4, mountpoint: g2, mounts: [] }, o3 = A4.mount(i3);
          return o3.mount = i3, i3.root = o3, C3 ? RA2.root = o3 : B3 && (B3.mounted = i3, B3.mount && B3.mount.mounts.push(i3)), o3;
        }, unmount: function(A4) {
          var I4 = RA2.lookupPath(A4, { follow_mount: false });
          if (!RA2.isMountpoint(I4.node)) throw new RA2.ErrnoError(28);
          var g2 = I4.node, B3 = g2.mounted, C3 = RA2.getMounts(B3);
          Object.keys(RA2.nameTable).forEach(function(A5) {
            for (var I5 = RA2.nameTable[A5]; I5; ) {
              var g3 = I5.name_next;
              C3.includes(I5.mount) && RA2.destroyNode(I5), I5 = g3;
            }
          }), g2.mounted = null;
          var Q2 = g2.mount.mounts.indexOf(B3);
          g2.mount.mounts.splice(Q2, 1);
        }, lookup: function(A4, I4) {
          return A4.node_ops.lookup(A4, I4);
        }, mknod: function(A4, I4, g2) {
          var B3 = RA2.lookupPath(A4, { parent: true }).node, C3 = tA2.basename(A4);
          if (!C3 || "." === C3 || ".." === C3) throw new RA2.ErrnoError(28);
          var Q2 = RA2.mayCreate(B3, C3);
          if (Q2) throw new RA2.ErrnoError(Q2);
          if (!B3.node_ops.mknod) throw new RA2.ErrnoError(63);
          return B3.node_ops.mknod(B3, C3, I4, g2);
        }, create: function(A4, I4) {
          return I4 = void 0 !== I4 ? I4 : 438, I4 &= 4095, I4 |= 32768, RA2.mknod(A4, I4, 0);
        }, mkdir: function(A4, I4) {
          return I4 = void 0 !== I4 ? I4 : 511, I4 &= 1023, I4 |= 16384, RA2.mknod(A4, I4, 0);
        }, mkdirTree: function(A4, I4) {
          for (var g2 = A4.split("/"), B3 = "", C3 = 0; C3 < g2.length; ++C3) if (g2[C3]) {
            B3 += "/" + g2[C3];
            try {
              RA2.mkdir(B3, I4);
            } catch (A5) {
              if (20 != A5.errno) throw A5;
            }
          }
        }, mkdev: function(A4, I4, g2) {
          return void 0 === g2 && (g2 = I4, I4 = 438), I4 |= 8192, RA2.mknod(A4, I4, g2);
        }, symlink: function(A4, I4) {
          if (!sA2.resolve(A4)) throw new RA2.ErrnoError(44);
          var g2 = RA2.lookupPath(I4, { parent: true }).node;
          if (!g2) throw new RA2.ErrnoError(44);
          var B3 = tA2.basename(I4), C3 = RA2.mayCreate(g2, B3);
          if (C3) throw new RA2.ErrnoError(C3);
          if (!g2.node_ops.symlink) throw new RA2.ErrnoError(63);
          return g2.node_ops.symlink(g2, B3, A4);
        }, rename: function(A4, I4) {
          var g2, B3, C3 = tA2.dirname(A4), Q2 = tA2.dirname(I4), E3 = tA2.basename(A4), i3 = tA2.basename(I4);
          if (g2 = RA2.lookupPath(A4, { parent: true }).node, B3 = RA2.lookupPath(I4, { parent: true }).node, !g2 || !B3) throw new RA2.ErrnoError(44);
          if (g2.mount !== B3.mount) throw new RA2.ErrnoError(75);
          var o3, D2 = RA2.lookupNode(g2, E3), a3 = sA2.relative(A4, Q2);
          if ("." !== a3.charAt(0)) throw new RA2.ErrnoError(28);
          if ("." !== (a3 = sA2.relative(I4, C3)).charAt(0)) throw new RA2.ErrnoError(55);
          try {
            o3 = RA2.lookupNode(B3, i3);
          } catch (A5) {
          }
          if (D2 !== o3) {
            var t3 = RA2.isDir(D2.mode), s3 = RA2.mayDelete(g2, E3, t3);
            if (s3) throw new RA2.ErrnoError(s3);
            if (s3 = o3 ? RA2.mayDelete(B3, i3, t3) : RA2.mayCreate(B3, i3)) throw new RA2.ErrnoError(s3);
            if (!g2.node_ops.rename) throw new RA2.ErrnoError(63);
            if (RA2.isMountpoint(D2) || o3 && RA2.isMountpoint(o3)) throw new RA2.ErrnoError(10);
            if (B3 !== g2 && (s3 = RA2.nodePermissions(g2, "w"))) throw new RA2.ErrnoError(s3);
            RA2.hashRemoveNode(D2);
            try {
              g2.node_ops.rename(D2, B3, i3);
            } catch (A5) {
              throw A5;
            } finally {
              RA2.hashAddNode(D2);
            }
          }
        }, rmdir: function(A4) {
          var I4 = RA2.lookupPath(A4, { parent: true }).node, g2 = tA2.basename(A4), B3 = RA2.lookupNode(I4, g2), C3 = RA2.mayDelete(I4, g2, true);
          if (C3) throw new RA2.ErrnoError(C3);
          if (!I4.node_ops.rmdir) throw new RA2.ErrnoError(63);
          if (RA2.isMountpoint(B3)) throw new RA2.ErrnoError(10);
          I4.node_ops.rmdir(I4, g2), RA2.destroyNode(B3);
        }, readdir: function(A4) {
          var I4 = RA2.lookupPath(A4, { follow: true }).node;
          if (!I4.node_ops.readdir) throw new RA2.ErrnoError(54);
          return I4.node_ops.readdir(I4);
        }, unlink: function(A4) {
          var I4 = RA2.lookupPath(A4, { parent: true }).node;
          if (!I4) throw new RA2.ErrnoError(44);
          var g2 = tA2.basename(A4), B3 = RA2.lookupNode(I4, g2), C3 = RA2.mayDelete(I4, g2, false);
          if (C3) throw new RA2.ErrnoError(C3);
          if (!I4.node_ops.unlink) throw new RA2.ErrnoError(63);
          if (RA2.isMountpoint(B3)) throw new RA2.ErrnoError(10);
          I4.node_ops.unlink(I4, g2), RA2.destroyNode(B3);
        }, readlink: function(A4) {
          var I4 = RA2.lookupPath(A4).node;
          if (!I4) throw new RA2.ErrnoError(44);
          if (!I4.node_ops.readlink) throw new RA2.ErrnoError(28);
          return sA2.resolve(RA2.getPath(I4.parent), I4.node_ops.readlink(I4));
        }, stat: function(A4, I4) {
          var g2 = RA2.lookupPath(A4, { follow: !I4 }).node;
          if (!g2) throw new RA2.ErrnoError(44);
          if (!g2.node_ops.getattr) throw new RA2.ErrnoError(63);
          return g2.node_ops.getattr(g2);
        }, lstat: function(A4) {
          return RA2.stat(A4, true);
        }, chmod: function(A4, I4, g2) {
          var B3;
          if (!(B3 = "string" == typeof A4 ? RA2.lookupPath(A4, { follow: !g2 }).node : A4).node_ops.setattr) throw new RA2.ErrnoError(63);
          B3.node_ops.setattr(B3, { mode: 4095 & I4 | -4096 & B3.mode, timestamp: Date.now() });
        }, lchmod: function(A4, I4) {
          RA2.chmod(A4, I4, true);
        }, fchmod: function(A4, I4) {
          var g2 = RA2.getStream(A4);
          if (!g2) throw new RA2.ErrnoError(8);
          RA2.chmod(g2.node, I4);
        }, chown: function(A4, I4, g2, B3) {
          var C3;
          if (!(C3 = "string" == typeof A4 ? RA2.lookupPath(A4, { follow: !B3 }).node : A4).node_ops.setattr) throw new RA2.ErrnoError(63);
          C3.node_ops.setattr(C3, { timestamp: Date.now() });
        }, lchown: function(A4, I4, g2) {
          RA2.chown(A4, I4, g2, true);
        }, fchown: function(A4, I4, g2) {
          var B3 = RA2.getStream(A4);
          if (!B3) throw new RA2.ErrnoError(8);
          RA2.chown(B3.node, I4, g2);
        }, truncate: function(A4, I4) {
          if (I4 < 0) throw new RA2.ErrnoError(28);
          var g2;
          if (!(g2 = "string" == typeof A4 ? RA2.lookupPath(A4, { follow: true }).node : A4).node_ops.setattr) throw new RA2.ErrnoError(63);
          if (RA2.isDir(g2.mode)) throw new RA2.ErrnoError(31);
          if (!RA2.isFile(g2.mode)) throw new RA2.ErrnoError(28);
          var B3 = RA2.nodePermissions(g2, "w");
          if (B3) throw new RA2.ErrnoError(B3);
          g2.node_ops.setattr(g2, { size: I4, timestamp: Date.now() });
        }, ftruncate: function(A4, I4) {
          var g2 = RA2.getStream(A4);
          if (!g2) throw new RA2.ErrnoError(8);
          if (0 == (2097155 & g2.flags)) throw new RA2.ErrnoError(28);
          RA2.truncate(g2.node, I4);
        }, utime: function(A4, I4, g2) {
          var B3 = RA2.lookupPath(A4, { follow: true }).node;
          B3.node_ops.setattr(B3, { timestamp: Math.max(I4, g2) });
        }, open: function(I4, g2, B3) {
          if ("" === I4) throw new RA2.ErrnoError(44);
          var C3;
          if (B3 = void 0 === B3 ? 438 : B3, B3 = 64 & (g2 = "string" == typeof g2 ? RA2.modeStringToFlags(g2) : g2) ? 4095 & B3 | 32768 : 0, "object" == Q(I4)) C3 = I4;
          else {
            I4 = tA2.normalize(I4);
            try {
              C3 = RA2.lookupPath(I4, { follow: !(131072 & g2) }).node;
            } catch (A4) {
            }
          }
          var E3 = false;
          if (64 & g2) if (C3) {
            if (128 & g2) throw new RA2.ErrnoError(20);
          } else C3 = RA2.mknod(I4, B3, 0), E3 = true;
          if (!C3) throw new RA2.ErrnoError(44);
          if (RA2.isChrdev(C3.mode) && (g2 &= -513), 65536 & g2 && !RA2.isDir(C3.mode)) throw new RA2.ErrnoError(54);
          if (!E3) {
            var i3 = RA2.mayOpen(C3, g2);
            if (i3) throw new RA2.ErrnoError(i3);
          }
          512 & g2 && !E3 && RA2.truncate(C3, 0), g2 &= -131713;
          var o3 = RA2.createStream({ node: C3, path: RA2.getPath(C3), flags: g2, seekable: true, position: 0, stream_ops: C3.stream_ops, ungotten: [], error: false });
          return o3.stream_ops.open && o3.stream_ops.open(o3), !A3.logReadFiles || 1 & g2 || (RA2.readFiles || (RA2.readFiles = {}), I4 in RA2.readFiles || (RA2.readFiles[I4] = 1)), o3;
        }, close: function(A4) {
          if (RA2.isClosed(A4)) throw new RA2.ErrnoError(8);
          A4.getdents && (A4.getdents = null);
          try {
            A4.stream_ops.close && A4.stream_ops.close(A4);
          } catch (A5) {
            throw A5;
          } finally {
            RA2.closeStream(A4.fd);
          }
          A4.fd = null;
        }, isClosed: function(A4) {
          return null === A4.fd;
        }, llseek: function(A4, I4, g2) {
          if (RA2.isClosed(A4)) throw new RA2.ErrnoError(8);
          if (!A4.seekable || !A4.stream_ops.llseek) throw new RA2.ErrnoError(70);
          if (0 != g2 && 1 != g2 && 2 != g2) throw new RA2.ErrnoError(28);
          return A4.position = A4.stream_ops.llseek(A4, I4, g2), A4.ungotten = [], A4.position;
        }, read: function(A4, I4, g2, B3, C3) {
          if (B3 < 0 || C3 < 0) throw new RA2.ErrnoError(28);
          if (RA2.isClosed(A4)) throw new RA2.ErrnoError(8);
          if (1 == (2097155 & A4.flags)) throw new RA2.ErrnoError(8);
          if (RA2.isDir(A4.node.mode)) throw new RA2.ErrnoError(31);
          if (!A4.stream_ops.read) throw new RA2.ErrnoError(28);
          var Q2 = void 0 !== C3;
          if (Q2) {
            if (!A4.seekable) throw new RA2.ErrnoError(70);
          } else C3 = A4.position;
          var E3 = A4.stream_ops.read(A4, I4, g2, B3, C3);
          return Q2 || (A4.position += E3), E3;
        }, write: function(A4, I4, g2, B3, C3, Q2) {
          if (B3 < 0 || C3 < 0) throw new RA2.ErrnoError(28);
          if (RA2.isClosed(A4)) throw new RA2.ErrnoError(8);
          if (0 == (2097155 & A4.flags)) throw new RA2.ErrnoError(8);
          if (RA2.isDir(A4.node.mode)) throw new RA2.ErrnoError(31);
          if (!A4.stream_ops.write) throw new RA2.ErrnoError(28);
          A4.seekable && 1024 & A4.flags && RA2.llseek(A4, 0, 2);
          var E3 = void 0 !== C3;
          if (E3) {
            if (!A4.seekable) throw new RA2.ErrnoError(70);
          } else C3 = A4.position;
          var i3 = A4.stream_ops.write(A4, I4, g2, B3, C3, Q2);
          return E3 || (A4.position += i3), i3;
        }, allocate: function(A4, I4, g2) {
          if (RA2.isClosed(A4)) throw new RA2.ErrnoError(8);
          if (I4 < 0 || g2 <= 0) throw new RA2.ErrnoError(28);
          if (0 == (2097155 & A4.flags)) throw new RA2.ErrnoError(8);
          if (!RA2.isFile(A4.node.mode) && !RA2.isDir(A4.node.mode)) throw new RA2.ErrnoError(43);
          if (!A4.stream_ops.allocate) throw new RA2.ErrnoError(138);
          A4.stream_ops.allocate(A4, I4, g2);
        }, mmap: function(A4, I4, g2, B3, C3) {
          if (0 != (2 & B3) && 0 == (2 & C3) && 2 != (2097155 & A4.flags)) throw new RA2.ErrnoError(2);
          if (1 == (2097155 & A4.flags)) throw new RA2.ErrnoError(2);
          if (!A4.stream_ops.mmap) throw new RA2.ErrnoError(43);
          return A4.stream_ops.mmap(A4, I4, g2, B3, C3);
        }, msync: function(A4, I4, g2, B3, C3) {
          return A4 && A4.stream_ops.msync ? A4.stream_ops.msync(A4, I4, g2, B3, C3) : 0;
        }, munmap: function(A4) {
          return 0;
        }, ioctl: function(A4, I4, g2) {
          if (!A4.stream_ops.ioctl) throw new RA2.ErrnoError(59);
          return A4.stream_ops.ioctl(A4, I4, g2);
        }, readFile: function(A4) {
          var I4, g2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (g2.flags = g2.flags || 0, g2.encoding = g2.encoding || "binary", "utf8" !== g2.encoding && "binary" !== g2.encoding) throw new Error('Invalid encoding type "' + g2.encoding + '"');
          var B3 = RA2.open(A4, g2.flags), C3 = RA2.stat(A4), Q2 = C3.size, E3 = new Uint8Array(Q2);
          return RA2.read(B3, E3, 0, Q2, 0), "utf8" === g2.encoding ? I4 = u2(E3, 0) : "binary" === g2.encoding && (I4 = E3), RA2.close(B3), I4;
        }, writeFile: function(A4, I4) {
          var g2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          g2.flags = g2.flags || 577;
          var B3 = RA2.open(A4, g2.flags, g2.mode);
          if ("string" == typeof I4) {
            var C3 = new Uint8Array(W2(I4) + 1), Q2 = p2(I4, C3, 0, C3.length);
            RA2.write(B3, C3, 0, Q2, void 0, g2.canOwn);
          } else {
            if (!ArrayBuffer.isView(I4)) throw new Error("Unsupported data type");
            RA2.write(B3, I4, 0, I4.byteLength, void 0, g2.canOwn);
          }
          RA2.close(B3);
        }, cwd: function() {
          return RA2.currentPath;
        }, chdir: function(A4) {
          var I4 = RA2.lookupPath(A4, { follow: true });
          if (null === I4.node) throw new RA2.ErrnoError(44);
          if (!RA2.isDir(I4.node.mode)) throw new RA2.ErrnoError(54);
          var g2 = RA2.nodePermissions(I4.node, "x");
          if (g2) throw new RA2.ErrnoError(g2);
          RA2.currentPath = I4.path;
        }, createDefaultDirectories: function() {
          RA2.mkdir("/tmp"), RA2.mkdir("/home"), RA2.mkdir("/home/web_user");
        }, createDefaultDevices: function() {
          RA2.mkdir("/dev"), RA2.registerDevice(RA2.makedev(1, 3), { read: function() {
            return 0;
          }, write: function(A5, I4, g2, B3, C3) {
            return B3;
          } }), RA2.mkdev("/dev/null", RA2.makedev(1, 3)), GA2.register(RA2.makedev(5, 0), GA2.default_tty_ops), GA2.register(RA2.makedev(6, 0), GA2.default_tty1_ops), RA2.mkdev("/dev/tty", RA2.makedev(5, 0)), RA2.mkdev("/dev/tty1", RA2.makedev(6, 0));
          var A4 = function() {
            if ("object" == ("undefined" == typeof crypto ? "undefined" : Q(crypto)) && "function" == typeof crypto.getRandomValues) {
              var A5 = new Uint8Array(1);
              return function() {
                return crypto.getRandomValues(A5), A5[0];
              };
            }
            if (y2) try {
              var I4 = g(654);
              return function() {
                return I4.randomBytes(1)[0];
              };
            } catch (A6) {
            }
            return function() {
              return _2("randomDevice");
            };
          }();
          RA2.createDevice("/dev", "random", A4), RA2.createDevice("/dev", "urandom", A4), RA2.mkdir("/dev/shm"), RA2.mkdir("/dev/shm/tmp");
        }, createSpecialDirectories: function() {
          RA2.mkdir("/proc");
          var A4 = RA2.mkdir("/proc/self");
          RA2.mkdir("/proc/self/fd"), RA2.mount({ mount: function() {
            var I4 = RA2.createNode(A4, "fd", 16895, 73);
            return I4.node_ops = { lookup: function(A5, I5) {
              var g2 = +I5, B3 = RA2.getStream(g2);
              if (!B3) throw new RA2.ErrnoError(8);
              var C3 = { parent: null, mount: { mountpoint: "fake" }, node_ops: { readlink: function() {
                return B3.path;
              } } };
              return C3.parent = C3, C3;
            } }, I4;
          } }, {}, "/proc/self/fd");
        }, createStandardStreams: function() {
          A3.stdin ? RA2.createDevice("/dev", "stdin", A3.stdin) : RA2.symlink("/dev/tty", "/dev/stdin"), A3.stdout ? RA2.createDevice("/dev", "stdout", null, A3.stdout) : RA2.symlink("/dev/tty", "/dev/stdout"), A3.stderr ? RA2.createDevice("/dev", "stderr", null, A3.stderr) : RA2.symlink("/dev/tty1", "/dev/stderr"), RA2.open("/dev/stdin", 0), RA2.open("/dev/stdout", 1), RA2.open("/dev/stderr", 1);
        }, ensureErrnoError: function() {
          RA2.ErrnoError || (RA2.ErrnoError = function(A4, I4) {
            this.node = I4, this.setErrno = function(A5) {
              this.errno = A5;
            }, this.setErrno(A4), this.message = "FS error";
          }, RA2.ErrnoError.prototype = new Error(), RA2.ErrnoError.prototype.constructor = RA2.ErrnoError, [44].forEach(function(A4) {
            RA2.genericErrors[A4] = new RA2.ErrnoError(A4), RA2.genericErrors[A4].stack = "<generic error, no stack>";
          }));
        }, staticInit: function() {
          RA2.ensureErrnoError(), RA2.nameTable = new Array(4096), RA2.mount(rA2, {}, "/"), RA2.createDefaultDirectories(), RA2.createDefaultDevices(), RA2.createSpecialDirectories(), RA2.filesystems = { MEMFS: rA2 };
        }, init: function(I4, g2, B3) {
          RA2.init.initialized = true, RA2.ensureErrnoError(), A3.stdin = I4 || A3.stdin, A3.stdout = g2 || A3.stdout, A3.stderr = B3 || A3.stderr, RA2.createStandardStreams();
        }, quit: function() {
          RA2.init.initialized = false;
          for (var A4 = 0; A4 < RA2.streams.length; A4++) {
            var I4 = RA2.streams[A4];
            I4 && RA2.close(I4);
          }
        }, getMode: function(A4, I4) {
          var g2 = 0;
          return A4 && (g2 |= 365), I4 && (g2 |= 146), g2;
        }, findObject: function(A4, I4) {
          var g2 = RA2.analyzePath(A4, I4);
          return g2.exists ? g2.object : null;
        }, analyzePath: function(A4, I4) {
          try {
            A4 = (B3 = RA2.lookupPath(A4, { follow: !I4 })).path;
          } catch (A5) {
          }
          var g2 = { isRoot: false, exists: false, error: 0, name: null, path: null, object: null, parentExists: false, parentPath: null, parentObject: null };
          try {
            var B3 = RA2.lookupPath(A4, { parent: true });
            g2.parentExists = true, g2.parentPath = B3.path, g2.parentObject = B3.node, g2.name = tA2.basename(A4), B3 = RA2.lookupPath(A4, { follow: !I4 }), g2.exists = true, g2.path = B3.path, g2.object = B3.node, g2.name = B3.node.name, g2.isRoot = "/" === B3.path;
          } catch (A5) {
            g2.error = A5.errno;
          }
          return g2;
        }, createPath: function(A4, I4, g2, B3) {
          A4 = "string" == typeof A4 ? A4 : RA2.getPath(A4);
          for (var C3 = I4.split("/").reverse(); C3.length; ) {
            var Q2 = C3.pop();
            if (Q2) {
              var E3 = tA2.join2(A4, Q2);
              try {
                RA2.mkdir(E3);
              } catch (A5) {
              }
              A4 = E3;
            }
          }
          return E3;
        }, createFile: function(A4, I4, g2, B3, C3) {
          var Q2 = tA2.join2("string" == typeof A4 ? A4 : RA2.getPath(A4), I4), E3 = RA2.getMode(B3, C3);
          return RA2.create(Q2, E3);
        }, createDataFile: function(A4, I4, g2, B3, C3, Q2) {
          var E3 = I4;
          A4 && (A4 = "string" == typeof A4 ? A4 : RA2.getPath(A4), E3 = I4 ? tA2.join2(A4, I4) : A4);
          var i3 = RA2.getMode(B3, C3), o3 = RA2.create(E3, i3);
          if (g2) {
            if ("string" == typeof g2) {
              for (var D2 = new Array(g2.length), a3 = 0, t3 = g2.length; a3 < t3; ++a3) D2[a3] = g2.charCodeAt(a3);
              g2 = D2;
            }
            RA2.chmod(o3, 146 | i3);
            var s3 = RA2.open(o3, 577);
            RA2.write(s3, g2, 0, g2.length, 0, Q2), RA2.close(s3), RA2.chmod(o3, i3);
          }
          return o3;
        }, createDevice: function(A4, I4, g2, B3) {
          var C3 = tA2.join2("string" == typeof A4 ? A4 : RA2.getPath(A4), I4), Q2 = RA2.getMode(!!g2, !!B3);
          RA2.createDevice.major || (RA2.createDevice.major = 64);
          var E3 = RA2.makedev(RA2.createDevice.major++, 0);
          return RA2.registerDevice(E3, { open: function(A5) {
            A5.seekable = false;
          }, close: function(A5) {
            B3 && B3.buffer && B3.buffer.length && B3(10);
          }, read: function(A5, I5, B4, C4, Q3) {
            for (var E4 = 0, i3 = 0; i3 < C4; i3++) {
              var o3;
              try {
                o3 = g2();
              } catch (A6) {
                throw new RA2.ErrnoError(29);
              }
              if (void 0 === o3 && 0 === E4) throw new RA2.ErrnoError(6);
              if (null == o3) break;
              E4++, I5[B4 + i3] = o3;
            }
            return E4 && (A5.node.timestamp = Date.now()), E4;
          }, write: function(A5, I5, g3, C4, Q3) {
            for (var E4 = 0; E4 < C4; E4++) try {
              B3(I5[g3 + E4]);
            } catch (A6) {
              throw new RA2.ErrnoError(29);
            }
            return C4 && (A5.node.timestamp = Date.now()), E4;
          } }), RA2.mkdev(C3, Q2, E3);
        }, forceLoadFile: function(A4) {
          if (A4.isDevice || A4.isFolder || A4.link || A4.contents) return true;
          if ("undefined" != typeof XMLHttpRequest) throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");
          if (!C2) throw new Error("Cannot load without read() or XMLHttpRequest.");
          try {
            A4.contents = wA2(C2(A4.url), true), A4.usedBytes = A4.contents.length;
          } catch (A5) {
            throw new RA2.ErrnoError(29);
          }
        }, createLazyFile: function(A4, I4, g2, B3, C3) {
          function Q2() {
            this.lengthKnown = false, this.chunks = [];
          }
          if (Q2.prototype.get = function(A5) {
            if (!(A5 > this.length - 1 || A5 < 0)) {
              var I5 = A5 % this.chunkSize, g3 = A5 / this.chunkSize | 0;
              return this.getter(g3)[I5];
            }
          }, Q2.prototype.setDataGetter = function(A5) {
            this.getter = A5;
          }, Q2.prototype.cacheLength = function() {
            var A5 = new XMLHttpRequest();
            if (A5.open("HEAD", g2, false), A5.send(null), !(A5.status >= 200 && A5.status < 300 || 304 === A5.status)) throw new Error("Couldn't load " + g2 + ". Status: " + A5.status);
            var I5, B4 = Number(A5.getResponseHeader("Content-length")), C4 = (I5 = A5.getResponseHeader("Accept-Ranges")) && "bytes" === I5, Q3 = (I5 = A5.getResponseHeader("Content-Encoding")) && "gzip" === I5, E4 = 1048576;
            C4 || (E4 = B4);
            var i4 = this;
            i4.setDataGetter(function(A6) {
              var I6 = A6 * E4, C5 = (A6 + 1) * E4 - 1;
              if (C5 = Math.min(C5, B4 - 1), void 0 === i4.chunks[A6] && (i4.chunks[A6] = function(A7, I7) {
                if (A7 > I7) throw new Error("invalid range (" + A7 + ", " + I7 + ") or no bytes requested!");
                if (I7 > B4 - 1) throw new Error("only " + B4 + " bytes available! programmer error!");
                var C6 = new XMLHttpRequest();
                if (C6.open("GET", g2, false), B4 !== E4 && C6.setRequestHeader("Range", "bytes=" + A7 + "-" + I7), C6.responseType = "arraybuffer", C6.overrideMimeType && C6.overrideMimeType("text/plain; charset=x-user-defined"), C6.send(null), !(C6.status >= 200 && C6.status < 300 || 304 === C6.status)) throw new Error("Couldn't load " + g2 + ". Status: " + C6.status);
                return void 0 !== C6.response ? new Uint8Array(C6.response || []) : wA2(C6.responseText || "", true);
              }(I6, C5)), void 0 === i4.chunks[A6]) throw new Error("doXHR failed!");
              return i4.chunks[A6];
            }), !Q3 && B4 || (E4 = B4 = 1, B4 = this.getter(0).length, E4 = B4, M2("LazyFiles on gzip forces download of the whole file when length is accessed")), this._length = B4, this._chunkSize = E4, this.lengthKnown = true;
          }, "undefined" != typeof XMLHttpRequest) {
            if (!R2) throw "Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";
            var E3 = new Q2();
            Object.defineProperties(E3, { length: { get: function() {
              return this.lengthKnown || this.cacheLength(), this._length;
            } }, chunkSize: { get: function() {
              return this.lengthKnown || this.cacheLength(), this._chunkSize;
            } } });
            var i3 = { isDevice: false, contents: E3 };
          } else i3 = { isDevice: false, url: g2 };
          var o3 = RA2.createFile(A4, I4, i3, B3, C3);
          i3.contents ? o3.contents = i3.contents : i3.url && (o3.contents = null, o3.url = i3.url), Object.defineProperties(o3, { usedBytes: { get: function() {
            return this.contents.length;
          } } });
          var D2 = {};
          function a3(A5, I5, g3, B4, C4) {
            var Q3 = A5.node.contents;
            if (C4 >= Q3.length) return 0;
            var E4 = Math.min(Q3.length - C4, B4);
            if (Q3.slice) for (var i4 = 0; i4 < E4; i4++) I5[g3 + i4] = Q3[C4 + i4];
            else for (i4 = 0; i4 < E4; i4++) I5[g3 + i4] = Q3.get(C4 + i4);
            return E4;
          }
          return Object.keys(o3.stream_ops).forEach(function(A5) {
            var I5 = o3.stream_ops[A5];
            D2[A5] = function() {
              return RA2.forceLoadFile(o3), I5.apply(null, arguments);
            };
          }), D2.read = function(A5, I5, g3, B4, C4) {
            return RA2.forceLoadFile(o3), a3(A5, I5, g3, B4, C4);
          }, D2.mmap = function(A5, I5, g3, B4, C4) {
            RA2.forceLoadFile(o3);
            var Q3 = hA2();
            if (!Q3) throw new RA2.ErrnoError(48);
            return a3(A5, J2, Q3, I5, g3), { ptr: Q3, allocated: true };
          }, o3.stream_ops = D2, o3;
        }, createPreloadedFile: function(A4, I4, g2, B3, C3, Q2, i3, o3, D2, a3) {
          var t3 = I4 ? sA2.resolve(tA2.join2(A4, I4)) : A4;
          function s3(g3) {
            function E3(g4) {
              a3 && a3(), o3 || RA2.createDataFile(A4, I4, g4, B3, C3, D2), Q2 && Q2(), z2();
            }
            Browser.handledByPreloadPlugin(g3, t3, E3, function() {
              i3 && i3(), z2();
            }) || E3(g3);
          }
          P2(), "string" == typeof g2 ? function(A5, I5, g3, B4) {
            var C4 = "al " + A5;
            E2(A5, function(I6) {
              k2(I6, 'Loading data file "' + A5 + '" failed (no arrayBuffer).'), s3(new Uint8Array(I6)), C4 && z2();
            }, function(I6) {
              if (!g3) throw 'Loading data file "' + A5 + '" failed.';
              g3();
            }), C4 && P2();
          }(g2, 0, i3) : s3(g2);
        }, indexedDB: function() {
          return window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
        }, DB_NAME: function() {
          return "EM_FS_" + window.location.pathname;
        }, DB_VERSION: 20, DB_STORE_NAME: "FILE_DATA", saveFilesToDB: function(A4, I4, g2) {
          I4 = I4 || function() {
          }, g2 = g2 || function() {
          };
          var B3 = RA2.indexedDB();
          try {
            var C3 = B3.open(RA2.DB_NAME(), RA2.DB_VERSION);
          } catch (A5) {
            return g2(A5);
          }
          C3.onupgradeneeded = function() {
            M2("creating db"), C3.result.createObjectStore(RA2.DB_STORE_NAME);
          }, C3.onsuccess = function() {
            var B4 = C3.result.transaction([RA2.DB_STORE_NAME], "readwrite"), Q2 = B4.objectStore(RA2.DB_STORE_NAME), E3 = 0, i3 = 0, o3 = A4.length;
            function D2() {
              0 == i3 ? I4() : g2();
            }
            A4.forEach(function(A5) {
              var I5 = Q2.put(RA2.analyzePath(A5).object.contents, A5);
              I5.onsuccess = function() {
                ++E3 + i3 == o3 && D2();
              }, I5.onerror = function() {
                i3++, E3 + i3 == o3 && D2();
              };
            }), B4.onerror = g2;
          }, C3.onerror = g2;
        }, loadFilesFromDB: function(A4, I4, g2) {
          I4 = I4 || function() {
          }, g2 = g2 || function() {
          };
          var B3 = RA2.indexedDB();
          try {
            var C3 = B3.open(RA2.DB_NAME(), RA2.DB_VERSION);
          } catch (A5) {
            return g2(A5);
          }
          C3.onupgradeneeded = g2, C3.onsuccess = function() {
            var B4 = C3.result;
            try {
              var Q2 = B4.transaction([RA2.DB_STORE_NAME], "readonly");
            } catch (A5) {
              return void g2(A5);
            }
            var E3 = Q2.objectStore(RA2.DB_STORE_NAME), i3 = 0, o3 = 0, D2 = A4.length;
            function a3() {
              0 == o3 ? I4() : g2();
            }
            A4.forEach(function(A5) {
              var I5 = E3.get(A5);
              I5.onsuccess = function() {
                RA2.analyzePath(A5).exists && RA2.unlink(A5), RA2.createDataFile(tA2.dirname(A5), tA2.basename(A5), I5.result, true, true, true), ++i3 + o3 == D2 && a3();
              }, I5.onerror = function() {
                o3++, i3 + o3 == D2 && a3();
              };
            }), Q2.onerror = g2;
          }, C3.onerror = g2;
        } }, yA2 = { DEFAULT_POLLMASK: 5, calculateAt: function(A4, I4, g2) {
          if (tA2.isAbs(I4)) return I4;
          var B3;
          if (B3 = -100 === A4 ? RA2.cwd() : yA2.getStreamFromFD(A4).path, 0 == I4.length) {
            if (!g2) throw new RA2.ErrnoError(44);
            return B3;
          }
          return tA2.join2(B3, I4);
        }, doStat: function(A4, I4, g2) {
          try {
            var B3 = A4(I4);
          } catch (A5) {
            if (A5 && A5.node && tA2.normalize(I4) !== tA2.normalize(RA2.getPath(A5.node))) return -54;
            throw A5;
          }
          return d2[g2 >> 2] = B3.dev, d2[g2 + 8 >> 2] = B3.ino, d2[g2 + 12 >> 2] = B3.mode, l2[g2 + 16 >> 2] = B3.nlink, d2[g2 + 20 >> 2] = B3.uid, d2[g2 + 24 >> 2] = B3.gid, d2[g2 + 28 >> 2] = B3.rdev, gA2 = [B3.size >>> 0, (IA2 = B3.size, +Math.abs(IA2) >= 1 ? IA2 > 0 ? (0 | Math.min(+Math.floor(IA2 / 4294967296), 4294967295)) >>> 0 : ~~+Math.ceil((IA2 - +(~~IA2 >>> 0)) / 4294967296) >>> 0 : 0)], d2[g2 + 40 >> 2] = gA2[0], d2[g2 + 44 >> 2] = gA2[1], d2[g2 + 48 >> 2] = 4096, d2[g2 + 52 >> 2] = B3.blocks, gA2 = [Math.floor(B3.atime.getTime() / 1e3) >>> 0, (IA2 = Math.floor(B3.atime.getTime() / 1e3), +Math.abs(IA2) >= 1 ? IA2 > 0 ? (0 | Math.min(+Math.floor(IA2 / 4294967296), 4294967295)) >>> 0 : ~~+Math.ceil((IA2 - +(~~IA2 >>> 0)) / 4294967296) >>> 0 : 0)], d2[g2 + 56 >> 2] = gA2[0], d2[g2 + 60 >> 2] = gA2[1], l2[g2 + 64 >> 2] = 0, gA2 = [Math.floor(B3.mtime.getTime() / 1e3) >>> 0, (IA2 = Math.floor(B3.mtime.getTime() / 1e3), +Math.abs(IA2) >= 1 ? IA2 > 0 ? (0 | Math.min(+Math.floor(IA2 / 4294967296), 4294967295)) >>> 0 : ~~+Math.ceil((IA2 - +(~~IA2 >>> 0)) / 4294967296) >>> 0 : 0)], d2[g2 + 72 >> 2] = gA2[0], d2[g2 + 76 >> 2] = gA2[1], l2[g2 + 80 >> 2] = 0, gA2 = [Math.floor(B3.ctime.getTime() / 1e3) >>> 0, (IA2 = Math.floor(B3.ctime.getTime() / 1e3), +Math.abs(IA2) >= 1 ? IA2 > 0 ? (0 | Math.min(+Math.floor(IA2 / 4294967296), 4294967295)) >>> 0 : ~~+Math.ceil((IA2 - +(~~IA2 >>> 0)) / 4294967296) >>> 0 : 0)], d2[g2 + 88 >> 2] = gA2[0], d2[g2 + 92 >> 2] = gA2[1], l2[g2 + 96 >> 2] = 0, gA2 = [B3.ino >>> 0, (IA2 = B3.ino, +Math.abs(IA2) >= 1 ? IA2 > 0 ? (0 | Math.min(+Math.floor(IA2 / 4294967296), 4294967295)) >>> 0 : ~~+Math.ceil((IA2 - +(~~IA2 >>> 0)) / 4294967296) >>> 0 : 0)], d2[g2 + 104 >> 2] = gA2[0], d2[g2 + 108 >> 2] = gA2[1], 0;
        }, doMsync: function(A4, I4, g2, B3, C3) {
          var Q2 = K2.slice(A4, A4 + g2);
          RA2.msync(I4, Q2, C3, g2, B3);
        }, varargs: void 0, get: function() {
          return yA2.varargs += 4, d2[yA2.varargs - 4 >> 2];
        }, getStr: function(A4) {
          return m2(A4);
        }, getStreamFromFD: function(A4) {
          var I4 = RA2.getStream(A4);
          if (!I4) throw new RA2.ErrnoError(8);
          return I4;
        } }, FA2 = {};
        function eA2(A4) {
          for (; A4.length; ) {
            var I4 = A4.pop();
            A4.pop()(I4);
          }
        }
        function MA2(A4) {
          return this.fromWireType(d2[A4 >> 2]);
        }
        var nA2 = {}, SA2 = {}, cA2 = {};
        function NA2(A4) {
          if (void 0 === A4) return "_unknown";
          var I4 = (A4 = A4.replace(/[^a-zA-Z0-9_]/g, "$")).charCodeAt(0);
          return I4 >= 48 && I4 <= 57 ? "_" + A4 : A4;
        }
        function kA2(A4, I4) {
          return A4 = NA2(A4), new Function("body", "return function " + A4 + '() {\n    "use strict";    return body.apply(this, arguments);\n};\n')(I4);
        }
        function UA2(A4, I4) {
          var g2 = kA2(I4, function(A5) {
            this.name = I4, this.message = A5;
            var g3 = new Error(A5).stack;
            void 0 !== g3 && (this.stack = this.toString() + "\n" + g3.replace(/^Error(:[^\n]*)?\n/, ""));
          });
          return g2.prototype = Object.create(A4.prototype), g2.prototype.constructor = g2, g2.prototype.toString = function() {
            return void 0 === this.message ? this.name : this.name + ": " + this.message;
          }, g2;
        }
        var JA2 = void 0;
        function KA2(A4) {
          throw new JA2(A4);
        }
        function YA2(A4, I4, g2) {
          function B3(I5) {
            var B4 = g2(I5);
            B4.length !== A4.length && KA2("Mismatched type converter count");
            for (var C4 = 0; C4 < A4.length; ++C4) fA2(A4[C4], B4[C4]);
          }
          A4.forEach(function(A5) {
            cA2[A5] = I4;
          });
          var C3 = new Array(I4.length), Q2 = [], E3 = 0;
          I4.forEach(function(A5, I5) {
            SA2.hasOwnProperty(A5) ? C3[I5] = SA2[A5] : (Q2.push(A5), nA2.hasOwnProperty(A5) || (nA2[A5] = []), nA2[A5].push(function() {
              C3[I5] = SA2[A5], ++E3 === Q2.length && B3(C3);
            }));
          }), 0 === Q2.length && B3(C3);
        }
        function LA2(A4) {
          switch (A4) {
            case 1:
              return 0;
            case 2:
              return 1;
            case 4:
              return 2;
            case 8:
              return 3;
            default:
              throw new TypeError("Unknown type size: " + A4);
          }
        }
        var dA2 = void 0;
        function lA2(A4) {
          for (var I4 = "", g2 = A4; K2[g2]; ) I4 += dA2[K2[g2++]];
          return I4;
        }
        var HA2 = void 0;
        function qA2(A4) {
          throw new HA2(A4);
        }
        function fA2(A4, I4) {
          var g2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          if (!("argPackAdvance" in I4)) throw new TypeError("registerType registeredInstance requires argPackAdvance");
          var B3 = I4.name;
          if (A4 || qA2('type "' + B3 + '" must have a positive integer typeid pointer'), SA2.hasOwnProperty(A4)) {
            if (g2.ignoreDuplicateRegistrations) return;
            qA2("Cannot register type '" + B3 + "' twice");
          }
          if (SA2[A4] = I4, delete cA2[A4], nA2.hasOwnProperty(A4)) {
            var C3 = nA2[A4];
            delete nA2[A4], C3.forEach(function(A5) {
              return A5();
            });
          }
        }
        function uA2(A4) {
          qA2(A4.$$.ptrType.registeredClass.name + " instance already deleted");
        }
        var mA2 = false;
        function pA2(A4) {
        }
        function WA2(A4) {
          A4.count.value -= 1, 0 === A4.count.value && function(A5) {
            A5.smartPtr ? A5.smartPtrType.rawDestructor(A5.smartPtr) : A5.ptrType.registeredClass.rawDestructor(A5.ptr);
          }(A4);
        }
        function bA2(A4, I4, g2) {
          if (I4 === g2) return A4;
          if (void 0 === g2.baseClass) return null;
          var B3 = bA2(A4, I4, g2.baseClass);
          return null === B3 ? null : g2.downcast(B3);
        }
        var ZA2 = {};
        var xA2 = [];
        function VA2() {
          for (; xA2.length; ) {
            var A4 = xA2.pop();
            A4.$$.deleteScheduled = false, A4.delete();
          }
        }
        var OA2 = void 0;
        var XA2 = {};
        function TA2(A4, I4) {
          return I4.ptrType && I4.ptr || KA2("makeClassHandle requires ptr and ptrType"), !!I4.smartPtrType != !!I4.smartPtr && KA2("Both smartPtrType and smartPtr must be specified"), I4.count = { value: 1 }, vA2(Object.create(A4, { $$: { value: I4 } }));
        }
        function vA2(A4) {
          return "undefined" == typeof FinalizationRegistry ? (vA2 = function(A5) {
            return A5;
          }, A4) : (mA2 = new FinalizationRegistry(function(A5) {
            WA2(A5.$$);
          }), vA2 = function(A5) {
            var I4 = A5.$$;
            if (I4.smartPtr) {
              var g2 = { $$: I4 };
              mA2.register(A5, g2, A5);
            }
            return A5;
          }, pA2 = function(A5) {
            return mA2.unregister(A5);
          }, vA2(A4));
        }
        function jA2() {
        }
        function PA2(A4, I4, g2) {
          if (void 0 === A4[I4].overloadTable) {
            var B3 = A4[I4];
            A4[I4] = function() {
              return A4[I4].overloadTable.hasOwnProperty(arguments.length) || qA2("Function '" + g2 + "' called with an invalid number of arguments (" + arguments.length + ") - expects one of (" + A4[I4].overloadTable + ")!"), A4[I4].overloadTable[arguments.length].apply(this, arguments);
            }, A4[I4].overloadTable = [], A4[I4].overloadTable[B3.argCount] = B3;
          }
        }
        function zA2(I4, g2, B3) {
          A3.hasOwnProperty(I4) ? ((void 0 === B3 || void 0 !== A3[I4].overloadTable && void 0 !== A3[I4].overloadTable[B3]) && qA2("Cannot register public name '" + I4 + "' twice"), PA2(A3, I4, I4), A3.hasOwnProperty(B3) && qA2("Cannot register multiple overloads of a function with the same number of arguments (" + B3 + ")!"), A3[I4].overloadTable[B3] = g2) : (A3[I4] = g2, void 0 !== B3 && (A3[I4].numArguments = B3));
        }
        function _A2(A4, I4, g2, B3, C3, Q2, E3, i3) {
          this.name = A4, this.constructor = I4, this.instancePrototype = g2, this.rawDestructor = B3, this.baseClass = C3, this.getActualType = Q2, this.upcast = E3, this.downcast = i3, this.pureVirtualFunctions = [];
        }
        function $A2(A4, I4, g2) {
          for (; I4 !== g2; ) I4.upcast || qA2("Expected null or instance of " + g2.name + ", got an instance of " + I4.name), A4 = I4.upcast(A4), I4 = I4.baseClass;
          return A4;
        }
        function AI2(A4, I4) {
          if (null === I4) return this.isReference && qA2("null is not a valid " + this.name), 0;
          I4.$$ || qA2('Cannot pass "' + RI(I4) + '" as a ' + this.name), I4.$$.ptr || qA2("Cannot pass deleted object as a pointer of type " + this.name);
          var g2 = I4.$$.ptrType.registeredClass;
          return $A2(I4.$$.ptr, g2, this.registeredClass);
        }
        function II2(A4, I4) {
          var g2;
          if (null === I4) return this.isReference && qA2("null is not a valid " + this.name), this.isSmartPointer ? (g2 = this.rawConstructor(), null !== A4 && A4.push(this.rawDestructor, g2), g2) : 0;
          I4.$$ || qA2('Cannot pass "' + RI(I4) + '" as a ' + this.name), I4.$$.ptr || qA2("Cannot pass deleted object as a pointer of type " + this.name), !this.isConst && I4.$$.ptrType.isConst && qA2("Cannot convert argument of type " + (I4.$$.smartPtrType ? I4.$$.smartPtrType.name : I4.$$.ptrType.name) + " to parameter type " + this.name);
          var B3 = I4.$$.ptrType.registeredClass;
          if (g2 = $A2(I4.$$.ptr, B3, this.registeredClass), this.isSmartPointer) switch (void 0 === I4.$$.smartPtr && qA2("Passing raw pointer to smart pointer is illegal"), this.sharingPolicy) {
            case 0:
              I4.$$.smartPtrType === this ? g2 = I4.$$.smartPtr : qA2("Cannot convert argument of type " + (I4.$$.smartPtrType ? I4.$$.smartPtrType.name : I4.$$.ptrType.name) + " to parameter type " + this.name);
              break;
            case 1:
              g2 = I4.$$.smartPtr;
              break;
            case 2:
              if (I4.$$.smartPtrType === this) g2 = I4.$$.smartPtr;
              else {
                var C3 = I4.clone();
                g2 = this.rawShare(g2, rI.toHandle(function() {
                  C3.delete();
                })), null !== A4 && A4.push(this.rawDestructor, g2);
              }
              break;
            default:
              qA2("Unsupporting sharing policy");
          }
          return g2;
        }
        function gI2(A4, I4) {
          if (null === I4) return this.isReference && qA2("null is not a valid " + this.name), 0;
          I4.$$ || qA2('Cannot pass "' + RI(I4) + '" as a ' + this.name), I4.$$.ptr || qA2("Cannot pass deleted object as a pointer of type " + this.name), I4.$$.ptrType.isConst && qA2("Cannot convert argument of type " + I4.$$.ptrType.name + " to parameter type " + this.name);
          var g2 = I4.$$.ptrType.registeredClass;
          return $A2(I4.$$.ptr, g2, this.registeredClass);
        }
        function BI2(A4, I4, g2, B3, C3, Q2, E3, i3, o3, D2, a3) {
          this.name = A4, this.registeredClass = I4, this.isReference = g2, this.isConst = B3, this.isSmartPointer = C3, this.pointeeType = Q2, this.sharingPolicy = E3, this.rawGetPointee = i3, this.rawConstructor = o3, this.rawShare = D2, this.rawDestructor = a3, C3 || void 0 !== I4.baseClass ? this.toWireType = II2 : B3 ? (this.toWireType = AI2, this.destructorFunction = null) : (this.toWireType = gI2, this.destructorFunction = null);
        }
        function CI(I4, g2, B3) {
          A3.hasOwnProperty(I4) || KA2("Replacing nonexistant public symbol"), void 0 !== A3[I4].overloadTable && void 0 !== B3 ? A3[I4].overloadTable[B3] = g2 : (A3[I4] = g2, A3[I4].argCount = B3);
        }
        function QI(A4) {
          return Z2.get(A4);
        }
        function EI(I4, g2, B3) {
          return I4.includes("j") ? function(I5, g3, B4) {
            var C3 = A3["dynCall_" + I5];
            return B4 && B4.length ? C3.apply(null, [g3].concat(B4)) : C3.call(null, g3);
          }(I4, g2, B3) : QI(g2).apply(null, B3);
        }
        function iI(A4, I4) {
          var g2, B3, C3, Q2 = (A4 = lA2(A4)).includes("j") ? (g2 = A4, B3 = I4, C3 = [], function() {
            return C3.length = 0, Object.assign(C3, arguments), EI(g2, B3, C3);
          }) : QI(I4);
          return "function" != typeof Q2 && qA2("unknown function pointer with signature " + A4 + ": " + I4), Q2;
        }
        var oI = void 0;
        function DI(A4) {
          var I4 = OI(A4), g2 = lA2(I4);
          return xI(I4), g2;
        }
        function aI(A4, I4) {
          var g2 = [], B3 = {};
          throw I4.forEach(function A5(I5) {
            B3[I5] || SA2[I5] || (cA2[I5] ? cA2[I5].forEach(A5) : (g2.push(I5), B3[I5] = true));
          }), new oI(A4 + ": " + g2.map(DI).join([", "]));
        }
        function tI(A4, I4) {
          for (var g2 = [], B3 = 0; B3 < A4; B3++) g2.push(l2[I4 + 4 * B3 >> 2]);
          return g2;
        }
        function sI(A4, I4, g2, B3, C3) {
          var E3 = I4.length;
          E3 < 2 && qA2("argTypes array size mismatch! Must at least get return value and 'this' types!");
          for (var i3 = null !== I4[1] && null !== g2, o3 = false, D2 = 1; D2 < I4.length; ++D2) if (null !== I4[D2] && void 0 === I4[D2].destructorFunction) {
            o3 = true;
            break;
          }
          var a3 = "void" !== I4[0].name, t3 = "", s3 = "";
          for (D2 = 0; D2 < E3 - 2; ++D2) t3 += (0 !== D2 ? ", " : "") + "arg" + D2, s3 += (0 !== D2 ? ", " : "") + "arg" + D2 + "Wired";
          var w2 = "return function " + NA2(A4) + "(" + t3 + ") {\nif (arguments.length !== " + (E3 - 2) + ") {\nthrowBindingError('function " + A4 + " called with ' + arguments.length + ' arguments, expected " + (E3 - 2) + " args!');\n}\n";
          o3 && (w2 += "var destructors = [];\n");
          var G3 = o3 ? "destructors" : "null", h3 = ["throwBindingError", "invoker", "fn", "runDestructors", "retType", "classParam"], r3 = [qA2, B3, C3, eA2, I4[0], I4[1]];
          for (i3 && (w2 += "var thisWired = classParam.toWireType(" + G3 + ", this);\n"), D2 = 0; D2 < E3 - 2; ++D2) w2 += "var arg" + D2 + "Wired = argType" + D2 + ".toWireType(" + G3 + ", arg" + D2 + "); // " + I4[D2 + 2].name + "\n", h3.push("argType" + D2), r3.push(I4[D2 + 2]);
          if (i3 && (s3 = "thisWired" + (s3.length > 0 ? ", " : "") + s3), w2 += (a3 ? "var rv = " : "") + "invoker(fn" + (s3.length > 0 ? ", " : "") + s3 + ");\n", o3) w2 += "runDestructors(destructors);\n";
          else for (D2 = i3 ? 1 : 2; D2 < I4.length; ++D2) {
            var R3 = 1 === D2 ? "thisWired" : "arg" + (D2 - 2) + "Wired";
            null !== I4[D2].destructorFunction && (w2 += R3 + "_dtor(" + R3 + "); // " + I4[D2].name + "\n", h3.push(R3 + "_dtor"), r3.push(I4[D2].destructorFunction));
          }
          return a3 && (w2 += "var ret = retType.fromWireType(rv);\nreturn ret;\n"), w2 += "}\n", h3.push(w2), function(A5, I5) {
            if (!(A5 instanceof Function)) throw new TypeError("new_ called with constructor type " + Q(A5) + " which is not a function");
            var g3 = kA2(A5.name || "unknownFunctionName", function() {
            });
            g3.prototype = A5.prototype;
            var B4 = new g3(), C4 = A5.apply(B4, I5);
            return C4 instanceof Object ? C4 : B4;
          }(Function, h3).apply(null, r3);
        }
        var wI = [], GI = [{}, { value: void 0 }, { value: null }, { value: true }, { value: false }];
        function hI(A4) {
          A4 > 4 && 0 == --GI[A4].refcount && (GI[A4] = void 0, wI.push(A4));
        }
        var rI = { toValue: function(A4) {
          return A4 || qA2("Cannot use deleted val. handle = " + A4), GI[A4].value;
        }, toHandle: function(A4) {
          switch (A4) {
            case void 0:
              return 1;
            case null:
              return 2;
            case true:
              return 3;
            case false:
              return 4;
            default:
              var I4 = wI.length ? wI.pop() : GI.length;
              return GI[I4] = { refcount: 1, value: A4 }, I4;
          }
        } };
        function RI(A4) {
          if (null === A4) return "null";
          var I4 = Q(A4);
          return "object" === I4 || "array" === I4 || "function" === I4 ? A4.toString() : "" + A4;
        }
        function yI(A4, I4) {
          switch (I4) {
            case 2:
              return function(A5) {
                return this.fromWireType(H2[A5 >> 2]);
              };
            case 3:
              return function(A5) {
                return this.fromWireType(q2[A5 >> 3]);
              };
            default:
              throw new TypeError("Unknown float type: " + A4);
          }
        }
        function FI(A4, I4, g2) {
          switch (I4) {
            case 0:
              return g2 ? function(A5) {
                return J2[A5];
              } : function(A5) {
                return K2[A5];
              };
            case 1:
              return g2 ? function(A5) {
                return Y2[A5 >> 1];
              } : function(A5) {
                return L2[A5 >> 1];
              };
            case 2:
              return g2 ? function(A5) {
                return d2[A5 >> 2];
              } : function(A5) {
                return l2[A5 >> 2];
              };
            default:
              throw new TypeError("Unknown integer type: " + A4);
          }
        }
        var eI = "undefined" != typeof TextDecoder ? new TextDecoder("utf-16le") : void 0;
        function MI(A4, I4) {
          for (var g2 = A4, B3 = g2 >> 1, C3 = B3 + I4 / 2; !(B3 >= C3) && L2[B3]; ) ++B3;
          if ((g2 = B3 << 1) - A4 > 32 && eI) return eI.decode(K2.subarray(A4, g2));
          for (var Q2 = "", E3 = 0; !(E3 >= I4 / 2); ++E3) {
            var i3 = Y2[A4 + 2 * E3 >> 1];
            if (0 == i3) break;
            Q2 += String.fromCharCode(i3);
          }
          return Q2;
        }
        function nI(A4, I4, g2) {
          if (void 0 === g2 && (g2 = 2147483647), g2 < 2) return 0;
          for (var B3 = I4, C3 = (g2 -= 2) < 2 * A4.length ? g2 / 2 : A4.length, Q2 = 0; Q2 < C3; ++Q2) {
            var E3 = A4.charCodeAt(Q2);
            Y2[I4 >> 1] = E3, I4 += 2;
          }
          return Y2[I4 >> 1] = 0, I4 - B3;
        }
        function SI(A4) {
          return 2 * A4.length;
        }
        function cI(A4, I4) {
          for (var g2 = 0, B3 = ""; !(g2 >= I4 / 4); ) {
            var C3 = d2[A4 + 4 * g2 >> 2];
            if (0 == C3) break;
            if (++g2, C3 >= 65536) {
              var Q2 = C3 - 65536;
              B3 += String.fromCharCode(55296 | Q2 >> 10, 56320 | 1023 & Q2);
            } else B3 += String.fromCharCode(C3);
          }
          return B3;
        }
        function NI(A4, I4, g2) {
          if (void 0 === g2 && (g2 = 2147483647), g2 < 4) return 0;
          for (var B3 = I4, C3 = B3 + g2 - 4, Q2 = 0; Q2 < A4.length; ++Q2) {
            var E3 = A4.charCodeAt(Q2);
            if (E3 >= 55296 && E3 <= 57343 && (E3 = 65536 + ((1023 & E3) << 10) | 1023 & A4.charCodeAt(++Q2)), d2[I4 >> 2] = E3, (I4 += 4) + 4 > C3) break;
          }
          return d2[I4 >> 2] = 0, I4 - B3;
        }
        function kI(A4) {
          for (var I4 = 0, g2 = 0; g2 < A4.length; ++g2) {
            var B3 = A4.charCodeAt(g2);
            B3 >= 55296 && B3 <= 57343 && ++g2, I4 += 4;
          }
          return I4;
        }
        function UI(A4) {
          var I4 = W2(A4) + 1, g2 = ZI(I4);
          return g2 && p2(A4, J2, g2, I4), g2;
        }
        var JI = [];
        function KI(A4) {
          try {
            return S2.grow(A4 - U2.byteLength + 65535 >>> 16), b2(S2.buffer), 1;
          } catch (A5) {
          }
        }
        var YI = {};
        function LI() {
          if (!LI.strings) {
            var A4 = { USER: "web_user", LOGNAME: "web_user", PATH: "/", PWD: "/", HOME: "/home/web_user", LANG: ("object" == ("undefined" == typeof navigator ? "undefined" : Q(navigator)) && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8", _: G2 || "./this.program" };
            for (var I4 in YI) void 0 === YI[I4] ? delete A4[I4] : A4[I4] = YI[I4];
            var g2 = [];
            for (var I4 in A4) g2.push(I4 + "=" + A4[I4]);
            LI.strings = g2;
          }
          return LI.strings;
        }
        function dI(A4) {
          return A4 % 4 == 0 && (A4 % 100 != 0 || A4 % 400 == 0);
        }
        var lI = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], HI = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        function qI(A4, I4, g2, B3) {
          var C3 = d2[B3 + 40 >> 2], Q2 = { tm_sec: d2[B3 >> 2], tm_min: d2[B3 + 4 >> 2], tm_hour: d2[B3 + 8 >> 2], tm_mday: d2[B3 + 12 >> 2], tm_mon: d2[B3 + 16 >> 2], tm_year: d2[B3 + 20 >> 2], tm_wday: d2[B3 + 24 >> 2], tm_yday: d2[B3 + 28 >> 2], tm_isdst: d2[B3 + 32 >> 2], tm_gmtoff: d2[B3 + 36 >> 2], tm_zone: C3 ? m2(C3) : "" }, E3 = m2(g2), i3 = { "%c": "%a %b %d %H:%M:%S %Y", "%D": "%m/%d/%y", "%F": "%Y-%m-%d", "%h": "%b", "%r": "%I:%M:%S %p", "%R": "%H:%M", "%T": "%H:%M:%S", "%x": "%m/%d/%y", "%X": "%H:%M:%S", "%Ec": "%c", "%EC": "%C", "%Ex": "%m/%d/%y", "%EX": "%H:%M:%S", "%Ey": "%y", "%EY": "%Y", "%Od": "%d", "%Oe": "%e", "%OH": "%H", "%OI": "%I", "%Om": "%m", "%OM": "%M", "%OS": "%S", "%Ou": "%u", "%OU": "%U", "%OV": "%V", "%Ow": "%w", "%OW": "%W", "%Oy": "%y" };
          for (var o3 in i3) E3 = E3.replace(new RegExp(o3, "g"), i3[o3]);
          var D2 = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], a3 = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
          function t3(A5, I5, g3) {
            for (var B4 = "number" == typeof A5 ? A5.toString() : A5 || ""; B4.length < I5; ) B4 = g3[0] + B4;
            return B4;
          }
          function s3(A5, I5) {
            return t3(A5, I5, "0");
          }
          function w2(A5, I5) {
            function g3(A6) {
              return A6 < 0 ? -1 : A6 > 0 ? 1 : 0;
            }
            var B4;
            return 0 === (B4 = g3(A5.getFullYear() - I5.getFullYear())) && 0 === (B4 = g3(A5.getMonth() - I5.getMonth())) && (B4 = g3(A5.getDate() - I5.getDate())), B4;
          }
          function G3(A5) {
            switch (A5.getDay()) {
              case 0:
                return new Date(A5.getFullYear() - 1, 11, 29);
              case 1:
                return A5;
              case 2:
                return new Date(A5.getFullYear(), 0, 3);
              case 3:
                return new Date(A5.getFullYear(), 0, 2);
              case 4:
                return new Date(A5.getFullYear(), 0, 1);
              case 5:
                return new Date(A5.getFullYear() - 1, 11, 31);
              case 6:
                return new Date(A5.getFullYear() - 1, 11, 30);
            }
          }
          function h3(A5) {
            var I5 = function(A6, I6) {
              for (var g4 = new Date(A6.getTime()); I6 > 0; ) {
                var B5 = dI(g4.getFullYear()), C5 = g4.getMonth(), Q4 = (B5 ? lI : HI)[C5];
                if (!(I6 > Q4 - g4.getDate())) return g4.setDate(g4.getDate() + I6), g4;
                I6 -= Q4 - g4.getDate() + 1, g4.setDate(1), C5 < 11 ? g4.setMonth(C5 + 1) : (g4.setMonth(0), g4.setFullYear(g4.getFullYear() + 1));
              }
              return g4;
            }(new Date(A5.tm_year + 1900, 0, 1), A5.tm_yday), g3 = new Date(I5.getFullYear(), 0, 4), B4 = new Date(I5.getFullYear() + 1, 0, 4), C4 = G3(g3), Q3 = G3(B4);
            return w2(C4, I5) <= 0 ? w2(Q3, I5) <= 0 ? I5.getFullYear() + 1 : I5.getFullYear() : I5.getFullYear() - 1;
          }
          var r3 = { "%a": function(A5) {
            return D2[A5.tm_wday].substring(0, 3);
          }, "%A": function(A5) {
            return D2[A5.tm_wday];
          }, "%b": function(A5) {
            return a3[A5.tm_mon].substring(0, 3);
          }, "%B": function(A5) {
            return a3[A5.tm_mon];
          }, "%C": function(A5) {
            return s3((A5.tm_year + 1900) / 100 | 0, 2);
          }, "%d": function(A5) {
            return s3(A5.tm_mday, 2);
          }, "%e": function(A5) {
            return t3(A5.tm_mday, 2, " ");
          }, "%g": function(A5) {
            return h3(A5).toString().substring(2);
          }, "%G": function(A5) {
            return h3(A5);
          }, "%H": function(A5) {
            return s3(A5.tm_hour, 2);
          }, "%I": function(A5) {
            var I5 = A5.tm_hour;
            return 0 == I5 ? I5 = 12 : I5 > 12 && (I5 -= 12), s3(I5, 2);
          }, "%j": function(A5) {
            return s3(A5.tm_mday + function(A6, I5) {
              for (var g3 = 0, B4 = 0; B4 <= I5; g3 += A6[B4++]) ;
              return g3;
            }(dI(A5.tm_year + 1900) ? lI : HI, A5.tm_mon - 1), 3);
          }, "%m": function(A5) {
            return s3(A5.tm_mon + 1, 2);
          }, "%M": function(A5) {
            return s3(A5.tm_min, 2);
          }, "%n": function() {
            return "\n";
          }, "%p": function(A5) {
            return A5.tm_hour >= 0 && A5.tm_hour < 12 ? "AM" : "PM";
          }, "%S": function(A5) {
            return s3(A5.tm_sec, 2);
          }, "%t": function() {
            return "	";
          }, "%u": function(A5) {
            return A5.tm_wday || 7;
          }, "%U": function(A5) {
            var I5 = A5.tm_yday + 7 - A5.tm_wday;
            return s3(Math.floor(I5 / 7), 2);
          }, "%V": function(A5) {
            var I5 = Math.floor((A5.tm_yday + 7 - (A5.tm_wday + 6) % 7) / 7);
            if ((A5.tm_wday + 371 - A5.tm_yday - 2) % 7 <= 2 && I5++, I5) {
              if (53 == I5) {
                var g3 = (A5.tm_wday + 371 - A5.tm_yday) % 7;
                4 == g3 || 3 == g3 && dI(A5.tm_year) || (I5 = 1);
              }
            } else {
              I5 = 52;
              var B4 = (A5.tm_wday + 7 - A5.tm_yday - 1) % 7;
              (4 == B4 || 5 == B4 && dI(A5.tm_year % 400 - 1)) && I5++;
            }
            return s3(I5, 2);
          }, "%w": function(A5) {
            return A5.tm_wday;
          }, "%W": function(A5) {
            var I5 = A5.tm_yday + 7 - (A5.tm_wday + 6) % 7;
            return s3(Math.floor(I5 / 7), 2);
          }, "%y": function(A5) {
            return (A5.tm_year + 1900).toString().substring(2);
          }, "%Y": function(A5) {
            return A5.tm_year + 1900;
          }, "%z": function(A5) {
            var I5 = A5.tm_gmtoff, g3 = I5 >= 0;
            return I5 = (I5 = Math.abs(I5) / 60) / 60 * 100 + I5 % 60, (g3 ? "+" : "-") + String("0000" + I5).slice(-4);
          }, "%Z": function(A5) {
            return A5.tm_zone;
          }, "%%": function() {
            return "%";
          } };
          for (var o3 in E3 = E3.replace(/%%/g, "\0\0"), r3) E3.includes(o3) && (E3 = E3.replace(new RegExp(o3, "g"), r3[o3](Q2)));
          var R3 = wA2(E3 = E3.replace(/\0\0/g, "%"), false);
          return R3.length > I4 ? 0 : (function(A5, I5) {
            J2.set(A5, I5);
          }(R3, A4), R3.length - 1);
        }
        var fI = function(A4, I4, g2, B3) {
          A4 || (A4 = this), this.parent = A4, this.mount = A4.mount, this.mounted = null, this.id = RA2.nextInode++, this.name = I4, this.mode = g2, this.node_ops = {}, this.stream_ops = {}, this.rdev = B3;
        };
        Object.defineProperties(fI.prototype, { read: { get: function() {
          return 365 == (365 & this.mode);
        }, set: function(A4) {
          A4 ? this.mode |= 365 : this.mode &= -366;
        } }, write: { get: function() {
          return 146 == (146 & this.mode);
        }, set: function(A4) {
          A4 ? this.mode |= 146 : this.mode &= -147;
        } }, isFolder: { get: function() {
          return RA2.isDir(this.mode);
        } }, isDevice: { get: function() {
          return RA2.isChrdev(this.mode);
        } } }), RA2.FSNode = fI, RA2.staticInit(), JA2 = A3.InternalError = UA2(Error, "InternalError"), function() {
          for (var A4 = new Array(256), I4 = 0; I4 < 256; ++I4) A4[I4] = String.fromCharCode(I4);
          dA2 = A4;
        }(), HA2 = A3.BindingError = UA2(Error, "BindingError"), jA2.prototype.isAliasOf = function(A4) {
          if (!(this instanceof jA2)) return false;
          if (!(A4 instanceof jA2)) return false;
          for (var I4 = this.$$.ptrType.registeredClass, g2 = this.$$.ptr, B3 = A4.$$.ptrType.registeredClass, C3 = A4.$$.ptr; I4.baseClass; ) g2 = I4.upcast(g2), I4 = I4.baseClass;
          for (; B3.baseClass; ) C3 = B3.upcast(C3), B3 = B3.baseClass;
          return I4 === B3 && g2 === C3;
        }, jA2.prototype.clone = function() {
          if (this.$$.ptr || uA2(this), this.$$.preservePointerOnDelete) return this.$$.count.value += 1, this;
          var A4, I4 = vA2(Object.create(Object.getPrototypeOf(this), { $$: { value: (A4 = this.$$, { count: A4.count, deleteScheduled: A4.deleteScheduled, preservePointerOnDelete: A4.preservePointerOnDelete, ptr: A4.ptr, ptrType: A4.ptrType, smartPtr: A4.smartPtr, smartPtrType: A4.smartPtrType }) } }));
          return I4.$$.count.value += 1, I4.$$.deleteScheduled = false, I4;
        }, jA2.prototype.delete = function() {
          this.$$.ptr || uA2(this), this.$$.deleteScheduled && !this.$$.preservePointerOnDelete && qA2("Object already scheduled for deletion"), pA2(this), WA2(this.$$), this.$$.preservePointerOnDelete || (this.$$.smartPtr = void 0, this.$$.ptr = void 0);
        }, jA2.prototype.isDeleted = function() {
          return !this.$$.ptr;
        }, jA2.prototype.deleteLater = function() {
          return this.$$.ptr || uA2(this), this.$$.deleteScheduled && !this.$$.preservePointerOnDelete && qA2("Object already scheduled for deletion"), xA2.push(this), 1 === xA2.length && OA2 && OA2(VA2), this.$$.deleteScheduled = true, this;
        }, A3.getInheritedInstanceCount = function() {
          return Object.keys(XA2).length;
        }, A3.getLiveInheritedInstances = function() {
          var A4 = [];
          for (var I4 in XA2) XA2.hasOwnProperty(I4) && A4.push(XA2[I4]);
          return A4;
        }, A3.flushPendingDeletes = VA2, A3.setDelayFunction = function(A4) {
          OA2 = A4, xA2.length && OA2 && OA2(VA2);
        }, BI2.prototype.getPointee = function(A4) {
          return this.rawGetPointee && (A4 = this.rawGetPointee(A4)), A4;
        }, BI2.prototype.destructor = function(A4) {
          this.rawDestructor && this.rawDestructor(A4);
        }, BI2.prototype.argPackAdvance = 8, BI2.prototype.readValueFromPointer = MA2, BI2.prototype.deleteObject = function(A4) {
          null !== A4 && A4.delete();
        }, BI2.prototype.fromWireType = function(A4) {
          var I4 = this.getPointee(A4);
          if (!I4) return this.destructor(A4), null;
          var g2 = function(A5, I5) {
            return I5 = function(A6, I6) {
              for (void 0 === I6 && qA2("ptr should not be undefined"); A6.baseClass; ) I6 = A6.upcast(I6), A6 = A6.baseClass;
              return I6;
            }(A5, I5), XA2[I5];
          }(this.registeredClass, I4);
          if (void 0 !== g2) {
            if (0 === g2.$$.count.value) return g2.$$.ptr = I4, g2.$$.smartPtr = A4, g2.clone();
            var B3 = g2.clone();
            return this.destructor(A4), B3;
          }
          function C3() {
            return this.isSmartPointer ? TA2(this.registeredClass.instancePrototype, { ptrType: this.pointeeType, ptr: I4, smartPtrType: this, smartPtr: A4 }) : TA2(this.registeredClass.instancePrototype, { ptrType: this, ptr: A4 });
          }
          var Q2, E3 = this.registeredClass.getActualType(I4), i3 = ZA2[E3];
          if (!i3) return C3.call(this);
          Q2 = this.isConst ? i3.constPointerType : i3.pointerType;
          var o3 = bA2(I4, this.registeredClass, Q2.registeredClass);
          return null === o3 ? C3.call(this) : this.isSmartPointer ? TA2(Q2.registeredClass.instancePrototype, { ptrType: Q2, ptr: o3, smartPtrType: this, smartPtr: A4 }) : TA2(Q2.registeredClass.instancePrototype, { ptrType: Q2, ptr: o3 });
        }, oI = A3.UnboundTypeError = UA2(Error, "UnboundTypeError"), A3.count_emval_handles = function() {
          for (var A4 = 0, I4 = 5; I4 < GI.length; ++I4) void 0 !== GI[I4] && ++A4;
          return A4;
        }, A3.get_first_emval = function() {
          for (var A4 = 5; A4 < GI.length; ++A4) if (void 0 !== GI[A4]) return GI[A4];
          return null;
        };
        var mI = "function" == typeof atob ? atob : function(A4) {
          var I4, g2, B3, C3, Q2, E3, i3 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", o3 = "", D2 = 0;
          A4 = A4.replace(/[^A-Za-z0-9\+\/\=]/g, "");
          do {
            I4 = i3.indexOf(A4.charAt(D2++)) << 2 | (C3 = i3.indexOf(A4.charAt(D2++))) >> 4, g2 = (15 & C3) << 4 | (Q2 = i3.indexOf(A4.charAt(D2++))) >> 2, B3 = (3 & Q2) << 6 | (E3 = i3.indexOf(A4.charAt(D2++))), o3 += String.fromCharCode(I4), 64 !== Q2 && (o3 += String.fromCharCode(g2)), 64 !== E3 && (o3 += String.fromCharCode(B3));
          } while (D2 < A4.length);
          return o3;
        };
        function pI(A4) {
          if (CA2(A4)) return function(A5) {
            if ("boolean" == typeof y2 && y2) {
              var I4 = Buffer.from(A5, "base64");
              return new Uint8Array(I4.buffer, I4.byteOffset, I4.byteLength);
            }
            try {
              for (var g2 = mI(A5), B3 = new Uint8Array(g2.length), C3 = 0; C3 < g2.length; ++C3) B3[C3] = g2.charCodeAt(C3);
              return B3;
            } catch (A6) {
              throw new Error("Converting base64 string to bytes failed.");
            }
          }(A4.slice(BA2.length));
        }
        var WI, bI = { g: function(A4) {
          return ZI(A4 + 24) + 24;
        }, f: function(A4, I4, g2) {
          throw new aA2(A4).init(I4, g2), A4;
        }, o: function(A4, I4, g2) {
          yA2.varargs = g2;
          try {
            var B3 = yA2.getStreamFromFD(A4);
            switch (I4) {
              case 0:
                return (C3 = yA2.get()) < 0 ? -28 : RA2.createStream(B3, C3).fd;
              case 1:
              case 2:
              case 6:
              case 7:
                return 0;
              case 3:
                return B3.flags;
              case 4:
                var C3 = yA2.get();
                return B3.flags |= C3, 0;
              case 5:
                return C3 = yA2.get(), Y2[C3 + 0 >> 1] = 2, 0;
              case 16:
              case 8:
              default:
                return -28;
              case 9:
                return 28, d2[VI() >> 2] = 28, -1;
            }
          } catch (A5) {
            if (void 0 === RA2 || !(A5 instanceof RA2.ErrnoError)) throw A5;
            return -A5.errno;
          }
        }, G: function(A4, I4, g2) {
          yA2.varargs = g2;
          try {
            var B3 = yA2.getStreamFromFD(A4);
            switch (I4) {
              case 21509:
              case 21505:
              case 21510:
              case 21511:
              case 21512:
              case 21506:
              case 21507:
              case 21508:
              case 21523:
              case 21524:
                return B3.tty ? 0 : -59;
              case 21519:
                if (!B3.tty) return -59;
                var C3 = yA2.get();
                return d2[C3 >> 2] = 0, 0;
              case 21520:
                return B3.tty ? -28 : -59;
              case 21531:
                return C3 = yA2.get(), RA2.ioctl(B3, I4, C3);
              default:
                return -28;
            }
          } catch (A5) {
            if (void 0 === RA2 || !(A5 instanceof RA2.ErrnoError)) throw A5;
            return -A5.errno;
          }
        }, H: function(A4, I4, g2, B3) {
          yA2.varargs = B3;
          try {
            I4 = yA2.getStr(I4), I4 = yA2.calculateAt(A4, I4);
            var C3 = B3 ? yA2.get() : 0;
            return RA2.open(I4, g2, C3).fd;
          } catch (A5) {
            if (void 0 === RA2 || !(A5 instanceof RA2.ErrnoError)) throw A5;
            return -A5.errno;
          }
        }, R: function(A4) {
          var I4 = FA2[A4];
          delete FA2[A4];
          var g2 = I4.rawConstructor, B3 = I4.rawDestructor, C3 = I4.fields;
          YA2([A4], C3.map(function(A5) {
            return A5.getterReturnType;
          }).concat(C3.map(function(A5) {
            return A5.setterArgumentType;
          })), function(A5) {
            var Q2 = {};
            return C3.forEach(function(I5, g3) {
              var B4 = I5.fieldName, E3 = A5[g3], i3 = I5.getter, o3 = I5.getterContext, D2 = A5[g3 + C3.length], a3 = I5.setter, t3 = I5.setterContext;
              Q2[B4] = { read: function(A6) {
                return E3.fromWireType(i3(o3, A6));
              }, write: function(A6, I6) {
                var g4 = [];
                a3(t3, A6, D2.toWireType(g4, I6)), eA2(g4);
              } };
            }), [{ name: I4.name, fromWireType: function(A6) {
              var I5 = {};
              for (var g3 in Q2) I5[g3] = Q2[g3].read(A6);
              return B3(A6), I5;
            }, toWireType: function(A6, I5) {
              for (var C4 in Q2) if (!(C4 in I5)) throw new TypeError('Missing field:  "' + C4 + '"');
              var E3 = g2();
              for (C4 in Q2) Q2[C4].write(E3, I5[C4]);
              return null !== A6 && A6.push(B3, E3), E3;
            }, argPackAdvance: 8, readValueFromPointer: MA2, destructorFunction: B3 }];
          });
        }, y: function(A4, I4, g2, B3, C3) {
        }, L: function(A4, I4, g2, B3, C3) {
          var Q2 = LA2(g2);
          fA2(A4, { name: I4 = lA2(I4), fromWireType: function(A5) {
            return !!A5;
          }, toWireType: function(A5, I5) {
            return I5 ? B3 : C3;
          }, argPackAdvance: 8, readValueFromPointer: function(A5) {
            var B4;
            if (1 === g2) B4 = J2;
            else if (2 === g2) B4 = Y2;
            else {
              if (4 !== g2) throw new TypeError("Unknown boolean type size: " + I4);
              B4 = d2;
            }
            return this.fromWireType(B4[A5 >> Q2]);
          }, destructorFunction: null });
        }, U: function(A4, I4, g2, B3, C3, Q2, E3, i3, o3, D2, a3, t3, s3) {
          a3 = lA2(a3), Q2 = iI(C3, Q2), i3 && (i3 = iI(E3, i3)), D2 && (D2 = iI(o3, D2)), s3 = iI(t3, s3);
          var w2 = NA2(a3);
          zA2(w2, function() {
            aI("Cannot construct " + a3 + " due to unbound types", [B3]);
          }), YA2([A4, I4, g2], B3 ? [B3] : [], function(I5) {
            var g3, C4;
            I5 = I5[0], C4 = B3 ? (g3 = I5.registeredClass).instancePrototype : jA2.prototype;
            var E4 = kA2(w2, function() {
              if (Object.getPrototypeOf(this) !== o4) throw new HA2("Use 'new' to construct " + a3);
              if (void 0 === t4.constructor_body) throw new HA2(a3 + " has no accessible constructor");
              var A5 = t4.constructor_body[arguments.length];
              if (void 0 === A5) throw new HA2("Tried to invoke ctor of " + a3 + " with invalid number of parameters (" + arguments.length + ") - expected (" + Object.keys(t4.constructor_body).toString() + ") parameters instead!");
              return A5.apply(this, arguments);
            }), o4 = Object.create(C4, { constructor: { value: E4 } });
            E4.prototype = o4;
            var t4 = new _A2(a3, E4, o4, s3, g3, Q2, i3, D2), G3 = new BI2(a3, t4, true, false, false), h3 = new BI2(a3 + "*", t4, false, false, false), r3 = new BI2(a3 + " const*", t4, false, true, false);
            return ZA2[A4] = { pointerType: h3, constPointerType: r3 }, CI(w2, E4), [G3, h3, r3];
          });
        }, Q: function(A4, I4, g2, B3, C3, Q2) {
          k2(I4 > 0);
          var E3 = tI(I4, g2);
          C3 = iI(B3, C3), YA2([], [A4], function(A5) {
            var g3 = "constructor " + (A5 = A5[0]).name;
            if (void 0 === A5.registeredClass.constructor_body && (A5.registeredClass.constructor_body = []), void 0 !== A5.registeredClass.constructor_body[I4 - 1]) throw new HA2("Cannot register multiple constructors with identical number of parameters (" + (I4 - 1) + ") for class '" + A5.name + "'! Overload resolution is currently only performed using the parameter count, not actual type info!");
            return A5.registeredClass.constructor_body[I4 - 1] = function() {
              aI("Cannot construct " + A5.name + " due to unbound types", E3);
            }, YA2([], E3, function(B4) {
              return B4.splice(1, 0, null), A5.registeredClass.constructor_body[I4 - 1] = sI(g3, B4, null, C3, Q2), [];
            }), [];
          });
        }, h: function(A4, I4, g2, B3, C3, Q2, E3, i3) {
          var o3 = tI(g2, B3);
          I4 = lA2(I4), Q2 = iI(C3, Q2), YA2([], [A4], function(A5) {
            var B4 = (A5 = A5[0]).name + "." + I4;
            function C4() {
              aI("Cannot call " + B4 + " due to unbound types", o3);
            }
            I4.startsWith("@@") && (I4 = Symbol[I4.substring(2)]), i3 && A5.registeredClass.pureVirtualFunctions.push(I4);
            var D2 = A5.registeredClass.instancePrototype, a3 = D2[I4];
            return void 0 === a3 || void 0 === a3.overloadTable && a3.className !== A5.name && a3.argCount === g2 - 2 ? (C4.argCount = g2 - 2, C4.className = A5.name, D2[I4] = C4) : (PA2(D2, I4, B4), D2[I4].overloadTable[g2 - 2] = C4), YA2([], o3, function(C5) {
              var i4 = sI(B4, C5, A5, Q2, E3);
              return void 0 === D2[I4].overloadTable ? (i4.argCount = g2 - 2, D2[I4] = i4) : D2[I4].overloadTable[g2 - 2] = i4, [];
            }), [];
          });
        }, s: function(I4, g2, B3) {
          I4 = lA2(I4), YA2([], [g2], function(g3) {
            return g3 = g3[0], A3[I4] = g3.fromWireType(B3), [];
          });
        }, K: function(A4, I4) {
          fA2(A4, { name: I4 = lA2(I4), fromWireType: function(A5) {
            var I5 = rI.toValue(A5);
            return hI(A5), I5;
          }, toWireType: function(A5, I5) {
            return rI.toHandle(I5);
          }, argPackAdvance: 8, readValueFromPointer: MA2, destructorFunction: null });
        }, r: function(A4, I4, g2) {
          var B3 = LA2(g2);
          fA2(A4, { name: I4 = lA2(I4), fromWireType: function(A5) {
            return A5;
          }, toWireType: function(A5, I5) {
            return I5;
          }, argPackAdvance: 8, readValueFromPointer: yI(I4, B3), destructorFunction: null });
        }, d: function(A4, I4, g2, B3, C3, Q2) {
          var E3 = tI(I4, g2);
          A4 = lA2(A4), C3 = iI(B3, C3), zA2(A4, function() {
            aI("Cannot call " + A4 + " due to unbound types", E3);
          }, I4 - 1), YA2([], E3, function(g3) {
            var B4 = [g3[0], null].concat(g3.slice(1));
            return CI(A4, sI(A4, B4, null, C3, Q2), I4 - 1), [];
          });
        }, e: function(A4, I4, g2, B3, C3) {
          I4 = lA2(I4);
          var Q2 = LA2(g2), E3 = function(A5) {
            return A5;
          };
          if (0 === B3) {
            var i3 = 32 - 8 * g2;
            E3 = function(A5) {
              return A5 << i3 >>> i3;
            };
          }
          var o3 = I4.includes("unsigned");
          fA2(A4, { name: I4, fromWireType: E3, toWireType: o3 ? function(A5, I5) {
            return this.name, I5 >>> 0;
          } : function(A5, I5) {
            return this.name, I5;
          }, argPackAdvance: 8, readValueFromPointer: FI(I4, Q2, 0 !== B3), destructorFunction: null });
        }, c: function(A4, I4, g2) {
          var B3 = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array][I4];
          function C3(A5) {
            var I5 = l2, g3 = I5[A5 >>= 2], C4 = I5[A5 + 1];
            return new B3(U2, C4, g3);
          }
          fA2(A4, { name: g2 = lA2(g2), fromWireType: C3, argPackAdvance: 8, readValueFromPointer: C3 }, { ignoreDuplicateRegistrations: true });
        }, q: function(A4, I4) {
          var g2 = "std::string" === (I4 = lA2(I4));
          fA2(A4, { name: I4, fromWireType: function(A5) {
            var I5, B3 = l2[A5 >> 2], C3 = A5 + 4;
            if (g2) for (var Q2 = C3, E3 = 0; E3 <= B3; ++E3) {
              var i3 = C3 + E3;
              if (E3 == B3 || 0 == K2[i3]) {
                var o3 = m2(Q2, i3 - Q2);
                void 0 === I5 ? I5 = o3 : (I5 += String.fromCharCode(0), I5 += o3), Q2 = i3 + 1;
              }
            }
            else {
              var D2 = new Array(B3);
              for (E3 = 0; E3 < B3; ++E3) D2[E3] = String.fromCharCode(K2[C3 + E3]);
              I5 = D2.join("");
            }
            return xI(A5), I5;
          }, toWireType: function(A5, I5) {
            var B3;
            I5 instanceof ArrayBuffer && (I5 = new Uint8Array(I5));
            var C3 = "string" == typeof I5;
            C3 || I5 instanceof Uint8Array || I5 instanceof Uint8ClampedArray || I5 instanceof Int8Array || qA2("Cannot pass non-string to std::string"), B3 = g2 && C3 ? W2(I5) : I5.length;
            var Q2 = ZI(4 + B3 + 1), E3 = Q2 + 4;
            if (l2[Q2 >> 2] = B3, g2 && C3) p2(I5, K2, E3, B3 + 1);
            else if (C3) for (var i3 = 0; i3 < B3; ++i3) {
              var o3 = I5.charCodeAt(i3);
              o3 > 255 && (xI(E3), qA2("String has UTF-16 code units that do not fit in 8 bits")), K2[E3 + i3] = o3;
            }
            else for (i3 = 0; i3 < B3; ++i3) K2[E3 + i3] = I5[i3];
            return null !== A5 && A5.push(xI, Q2), Q2;
          }, argPackAdvance: 8, readValueFromPointer: MA2, destructorFunction: function(A5) {
            xI(A5);
          } });
        }, l: function(A4, I4, g2) {
          var B3, C3, Q2, E3, i3;
          g2 = lA2(g2), 2 === I4 ? (B3 = MI, C3 = nI, E3 = SI, Q2 = function() {
            return L2;
          }, i3 = 1) : 4 === I4 && (B3 = cI, C3 = NI, E3 = kI, Q2 = function() {
            return l2;
          }, i3 = 2), fA2(A4, { name: g2, fromWireType: function(A5) {
            for (var g3, C4 = l2[A5 >> 2], E4 = Q2(), o3 = A5 + 4, D2 = 0; D2 <= C4; ++D2) {
              var a3 = A5 + 4 + D2 * I4;
              if (D2 == C4 || 0 == E4[a3 >> i3]) {
                var t3 = B3(o3, a3 - o3);
                void 0 === g3 ? g3 = t3 : (g3 += String.fromCharCode(0), g3 += t3), o3 = a3 + I4;
              }
            }
            return xI(A5), g3;
          }, toWireType: function(A5, B4) {
            "string" != typeof B4 && qA2("Cannot pass non-string to C++ string type " + g2);
            var Q3 = E3(B4), o3 = ZI(4 + Q3 + I4);
            return l2[o3 >> 2] = Q3 >> i3, C3(B4, o3 + 4, Q3 + I4), null !== A5 && A5.push(xI, o3), o3;
          }, argPackAdvance: 8, readValueFromPointer: MA2, destructorFunction: function(A5) {
            xI(A5);
          } });
        }, T: function(A4, I4, g2, B3, C3, Q2) {
          FA2[A4] = { name: lA2(I4), rawConstructor: iI(g2, B3), rawDestructor: iI(C3, Q2), fields: [] };
        }, S: function(A4, I4, g2, B3, C3, Q2, E3, i3, o3, D2) {
          FA2[A4].fields.push({ fieldName: lA2(I4), getterReturnType: g2, getter: iI(B3, C3), getterContext: Q2, setterArgumentType: E3, setter: iI(i3, o3), setterContext: D2 });
        }, M: function(A4, I4) {
          fA2(A4, { isVoid: true, name: I4 = lA2(I4), argPackAdvance: 0, fromWireType: function() {
          }, toWireType: function(A5, I5) {
          } });
        }, p: function() {
          return Date.now();
        }, A: function() {
          throw 1 / 0;
        }, O: hI, P: function(A4) {
          A4 > 4 && (GI[A4].refcount += 1);
        }, N: function(A4, I4) {
          var g2, B3;
          void 0 === (B3 = SA2[g2 = A4]) && qA2("_emval_take_value has unknown type " + DI(g2));
          var C3 = (A4 = B3).readValueFromPointer(I4);
          return rI.toHandle(C3);
        }, I: function(A4, I4) {
          var g2, B3 = new Date(1e3 * (l2[(g2 = A4) >> 2] + 4294967296 * d2[g2 + 4 >> 2]));
          d2[I4 >> 2] = B3.getSeconds(), d2[I4 + 4 >> 2] = B3.getMinutes(), d2[I4 + 8 >> 2] = B3.getHours(), d2[I4 + 12 >> 2] = B3.getDate(), d2[I4 + 16 >> 2] = B3.getMonth(), d2[I4 + 20 >> 2] = B3.getFullYear() - 1900, d2[I4 + 24 >> 2] = B3.getDay();
          var C3 = new Date(B3.getFullYear(), 0, 1), Q2 = (B3.getTime() - C3.getTime()) / 864e5 | 0;
          d2[I4 + 28 >> 2] = Q2, d2[I4 + 36 >> 2] = -60 * B3.getTimezoneOffset();
          var E3 = new Date(B3.getFullYear(), 6, 1).getTimezoneOffset(), i3 = C3.getTimezoneOffset(), o3 = 0 | (E3 != i3 && B3.getTimezoneOffset() == Math.min(i3, E3));
          d2[I4 + 32 >> 2] = o3;
        }, J: function A4(I4, g2, B3) {
          A4.called || (A4.called = true, function(A5, I5, g3) {
            var B4 = (/* @__PURE__ */ new Date()).getFullYear(), C3 = new Date(B4, 0, 1), Q2 = new Date(B4, 6, 1), E3 = C3.getTimezoneOffset(), i3 = Q2.getTimezoneOffset(), o3 = Math.max(E3, i3);
            function D2(A6) {
              var I6 = A6.toTimeString().match(/\(([A-Za-z ]+)\)$/);
              return I6 ? I6[1] : "GMT";
            }
            d2[A5 >> 2] = 60 * o3, d2[I5 >> 2] = Number(E3 != i3);
            var a3 = D2(C3), t3 = D2(Q2), s3 = UI(a3), w2 = UI(t3);
            i3 < E3 ? (l2[g3 >> 2] = s3, l2[g3 + 4 >> 2] = w2) : (l2[g3 >> 2] = w2, l2[g3 + 4 >> 2] = s3);
          }(I4, g2, B3));
        }, a: function() {
          _2("");
        }, i: function(A4, I4, g2) {
          var B3 = function(A5, I5) {
            var g3;
            for (JI.length = 0, I5 >>= 2; g3 = K2[A5++]; ) I5 += 105 != g3 & I5, JI.push(105 == g3 ? d2[I5] : q2[I5++ >> 1]), ++I5;
            return JI;
          }(I4, g2);
          return iA2[A4].apply(null, B3);
        }, B: function(A4) {
          var I4 = K2.length, g2 = 2147483648;
          if ((A4 >>>= 0) > g2) return false;
          for (var B3, C3 = 1; C3 <= 4; C3 *= 2) {
            var Q2 = I4 * (1 + 0.2 / C3);
            if (Q2 = Math.min(Q2, A4 + 100663296), KI(Math.min(g2, (B3 = Math.max(A4, Q2)) + (65536 - B3 % 65536) % 65536))) return true;
          }
          return false;
        }, C: function(A4, I4) {
          var g2 = 0;
          return LI().forEach(function(B3, C3) {
            var Q2 = I4 + g2;
            l2[A4 + 4 * C3 >> 2] = Q2, function(A5, I5, g3) {
              for (var B4 = 0; B4 < A5.length; ++B4) J2[I5++ >> 0] = A5.charCodeAt(B4);
              J2[I5 >> 0] = 0;
            }(B3, Q2), g2 += B3.length + 1;
          }), 0;
        }, D: function(A4, I4) {
          var g2 = LI();
          l2[A4 >> 2] = g2.length;
          var B3 = 0;
          return g2.forEach(function(A5) {
            B3 += A5.length + 1;
          }), l2[I4 >> 2] = B3, 0;
        }, b: function(I4, g2) {
          var B3;
          B3 = I4, X2() || (A3.onExit && A3.onExit(B3), N2 = true), h2(B3, new oA2(B3));
        }, m: function(A4) {
          try {
            var I4 = yA2.getStreamFromFD(A4);
            return RA2.close(I4), 0;
          } catch (A5) {
            if (void 0 === RA2 || !(A5 instanceof RA2.ErrnoError)) throw A5;
            return A5.errno;
          }
        }, F: function(A4, I4, g2, B3) {
          try {
            var C3 = function(A5, I5, g3, B4) {
              for (var C4 = 0, Q2 = 0; Q2 < g3; Q2++) {
                var E3 = l2[I5 >> 2], i3 = l2[I5 + 4 >> 2];
                I5 += 8;
                var o3 = RA2.read(A5, J2, E3, i3, void 0);
                if (o3 < 0) return -1;
                if (C4 += o3, o3 < i3) break;
              }
              return C4;
            }(yA2.getStreamFromFD(A4), I4, g2);
            return l2[B3 >> 2] = C3, 0;
          } catch (A5) {
            if (void 0 === RA2 || !(A5 instanceof RA2.ErrnoError)) throw A5;
            return A5.errno;
          }
        }, x: function(A4, I4, g2, B3, C3) {
          try {
            var Q2 = (o3 = g2) + 2097152 >>> 0 < 4194305 - !!(i3 = I4) ? (i3 >>> 0) + 4294967296 * o3 : NaN;
            if (isNaN(Q2)) return 61;
            var E3 = yA2.getStreamFromFD(A4);
            return RA2.llseek(E3, Q2, B3), gA2 = [E3.position >>> 0, (IA2 = E3.position, +Math.abs(IA2) >= 1 ? IA2 > 0 ? (0 | Math.min(+Math.floor(IA2 / 4294967296), 4294967295)) >>> 0 : ~~+Math.ceil((IA2 - +(~~IA2 >>> 0)) / 4294967296) >>> 0 : 0)], d2[C3 >> 2] = gA2[0], d2[C3 + 4 >> 2] = gA2[1], E3.getdents && 0 === Q2 && 0 === B3 && (E3.getdents = null), 0;
          } catch (A5) {
            if (void 0 === RA2 || !(A5 instanceof RA2.ErrnoError)) throw A5;
            return A5.errno;
          }
          var i3, o3;
        }, n: function(A4, I4, g2, B3) {
          try {
            var C3 = function(A5, I5, g3, B4) {
              for (var C4 = 0, Q2 = 0; Q2 < g3; Q2++) {
                var E3 = l2[I5 >> 2], i3 = l2[I5 + 4 >> 2];
                I5 += 8;
                var o3 = RA2.write(A5, J2, E3, i3, void 0);
                if (o3 < 0) return -1;
                C4 += o3;
              }
              return C4;
            }(yA2.getStreamFromFD(A4), I4, g2);
            return l2[B3 >> 2] = C3, 0;
          } catch (A5) {
            if (void 0 === RA2 || !(A5 instanceof RA2.ErrnoError)) throw A5;
            return A5.errno;
          }
        }, t: function(A4, I4) {
          var g2 = TI();
          try {
            return QI(A4)(I4);
          } catch (A5) {
            if (vI(g2), A5 !== A5 + 0) throw A5;
            XI(1, 0);
          }
        }, v: function(A4, I4, g2) {
          var B3 = TI();
          try {
            return QI(A4)(I4, g2);
          } catch (A5) {
            if (vI(B3), A5 !== A5 + 0) throw A5;
            XI(1, 0);
          }
        }, u: function(A4, I4, g2, B3) {
          var C3 = TI();
          try {
            return QI(A4)(I4, g2, B3);
          } catch (A5) {
            if (vI(C3), A5 !== A5 + 0) throw A5;
            XI(1, 0);
          }
        }, j: function(A4, I4) {
          var g2 = TI();
          try {
            QI(A4)(I4);
          } catch (A5) {
            if (vI(g2), A5 !== A5 + 0) throw A5;
            XI(1, 0);
          }
        }, w: function(A4, I4, g2) {
          var B3 = TI();
          try {
            QI(A4)(I4, g2);
          } catch (A5) {
            if (vI(B3), A5 !== A5 + 0) throw A5;
            XI(1, 0);
          }
        }, E: function(A4, I4, g2, B3) {
          var C3 = TI();
          try {
            QI(A4)(I4, g2, B3);
          } catch (A5) {
            if (vI(C3), A5 !== A5 + 0) throw A5;
            XI(1, 0);
          }
        }, k: function(A4, I4, g2, B3, C3) {
          var Q2 = TI();
          try {
            QI(A4)(I4, g2, B3, C3);
          } catch (A5) {
            if (vI(Q2), A5 !== A5 + 0) throw A5;
            XI(1, 0);
          }
        }, V: qI, z: function(A4, I4, g2, B3) {
          return qI(A4, I4, g2, B3);
        } }, ZI = (function() {
          var I4 = { a: bI };
          function g2(I5, g3) {
            var B3, C4 = I5.exports;
            A3.asm = C4, b2((S2 = A3.asm.W).buffer), Z2 = A3.asm.$, B3 = A3.asm.X, V2.unshift(B3), z2();
          }
          function C3(A4) {
            g2(A4.instance);
          }
          function Q2(A4) {
            return function() {
              if (!e2 && (r2 || R2)) {
                if ("function" == typeof fetch && !QA2($2)) return fetch($2, { credentials: "same-origin" }).then(function(A5) {
                  if (!A5.ok) throw "failed to load wasm binary file at '" + $2 + "'";
                  return A5.arrayBuffer();
                }).catch(function() {
                  return EA2($2);
                });
                if (E2) return new Promise(function(A5, I5) {
                  E2($2, function(I6) {
                    A5(new Uint8Array(I6));
                  }, I5);
                });
              }
              return Promise.resolve().then(function() {
                return EA2($2);
              });
            }().then(function(A5) {
              return WebAssembly.instantiate(A5, I4);
            }).then(function(A5) {
              return A5;
            }).then(A4, function(A5) {
              n2("failed to asynchronously prepare wasm: " + A5), _2(A5);
            });
          }
          if (P2(), A3.instantiateWasm) try {
            return A3.instantiateWasm(I4, g2);
          } catch (A4) {
            return n2("Module.instantiateWasm callback failed with error: " + A4), false;
          }
          (e2 || "function" != typeof WebAssembly.instantiateStreaming || CA2($2) || QA2($2) || y2 || "function" != typeof fetch ? Q2(C3) : fetch($2, { credentials: "same-origin" }).then(function(A4) {
            return WebAssembly.instantiateStreaming(A4, I4).then(C3, function(A5) {
              return n2("wasm streaming compile failed: " + A5), n2("falling back to ArrayBuffer instantiation"), Q2(C3);
            });
          })).catch(B2);
        }(), A3.___wasm_call_ctors = function() {
          return (A3.___wasm_call_ctors = A3.asm.X).apply(null, arguments);
        }, A3._malloc = function() {
          return (ZI = A3._malloc = A3.asm.Y).apply(null, arguments);
        }), xI = A3._free = function() {
          return (xI = A3._free = A3.asm.Z).apply(null, arguments);
        }, VI = A3.___errno_location = function() {
          return (VI = A3.___errno_location = A3.asm._).apply(null, arguments);
        }, OI = A3.___getTypeName = function() {
          return (OI = A3.___getTypeName = A3.asm.aa).apply(null, arguments);
        }, XI = (A3.__embind_initialize_bindings = function() {
          return (A3.__embind_initialize_bindings = A3.asm.ba).apply(null, arguments);
        }, A3._setThrew = function() {
          return (XI = A3._setThrew = A3.asm.ca).apply(null, arguments);
        }), TI = A3.stackSave = function() {
          return (TI = A3.stackSave = A3.asm.da).apply(null, arguments);
        }, vI = A3.stackRestore = function() {
          return (vI = A3.stackRestore = A3.asm.ea).apply(null, arguments);
        }, jI = A3.___cxa_is_pointer_type = function() {
          return (jI = A3.___cxa_is_pointer_type = A3.asm.fa).apply(null, arguments);
        };
        function PI(g2) {
          function B3() {
            WI || (WI = true, A3.calledRun = true, N2 || (A3.noFSInit || RA2.init.initialized || RA2.init(), RA2.ignorePermissions = false, DA2(V2), I3(A3), A3.onRuntimeInitialized && A3.onRuntimeInitialized(), function() {
              if (A3.postRun) for ("function" == typeof A3.postRun && (A3.postRun = [A3.postRun]); A3.postRun.length; ) I4 = A3.postRun.shift(), O2.unshift(I4);
              var I4;
              DA2(O2);
            }()));
          }
          T2 > 0 || (function() {
            if (A3.preRun) for ("function" == typeof A3.preRun && (A3.preRun = [A3.preRun]); A3.preRun.length; ) I4 = A3.preRun.shift(), x2.unshift(I4);
            var I4;
            DA2(x2);
          }(), T2 > 0 || (A3.setStatus ? (A3.setStatus("Running..."), setTimeout(function() {
            setTimeout(function() {
              A3.setStatus("");
            }, 1), B3();
          }, 1)) : B3()));
        }
        if (A3.dynCall_jiji = function() {
          return (A3.dynCall_jiji = A3.asm.ga).apply(null, arguments);
        }, A3.dynCall_viijii = function() {
          return (A3.dynCall_viijii = A3.asm.ha).apply(null, arguments);
        }, A3.dynCall_iiiiij = function() {
          return (A3.dynCall_iiiiij = A3.asm.ia).apply(null, arguments);
        }, A3.dynCall_iiiiijj = function() {
          return (A3.dynCall_iiiiijj = A3.asm.ja).apply(null, arguments);
        }, A3.dynCall_iiiiiijj = function() {
          return (A3.dynCall_iiiiiijj = A3.asm.ka).apply(null, arguments);
        }, A3.FS = RA2, j2 = function A4() {
          WI || PI(), WI || (j2 = A4);
        }, A3.preInit) for ("function" == typeof A3.preInit && (A3.preInit = [A3.preInit]); A3.preInit.length > 0; ) A3.preInit.pop()();
        return PI(), A3.ready;
      });
      const w = s, G = function() {
        return new Promise(function(A3) {
          w({ onRuntimeInitialized: function() {
            A3({ instance: this });
          } });
        });
      };
      function h(A3, I3) {
        return function() {
          return A3.apply(I3, arguments);
        };
      }
      const { toString: r } = Object.prototype, { getPrototypeOf: R } = Object, y = (F = /* @__PURE__ */ Object.create(null), (A3) => {
        const I3 = r.call(A3);
        return F[I3] || (F[I3] = I3.slice(8, -1).toLowerCase());
      });
      var F;
      const e = (A3) => (A3 = A3.toLowerCase(), (I3) => y(I3) === A3), M = (A3) => (I3) => typeof I3 === A3, { isArray: n } = Array, S = M("undefined"), c = e("ArrayBuffer"), N = M("string"), k = M("function"), U = M("number"), J = (A3) => null !== A3 && "object" == typeof A3, K = (A3) => {
        if ("object" !== y(A3)) return false;
        const I3 = R(A3);
        return !(null !== I3 && I3 !== Object.prototype && null !== Object.getPrototypeOf(I3) || Symbol.toStringTag in A3 || Symbol.iterator in A3);
      }, Y = e("Date"), L = e("File"), d = e("Blob"), l = e("FileList"), H = e("URLSearchParams");
      function q(A3, I3, { allOwnKeys: g2 = false } = {}) {
        if (null == A3) return;
        let B2, C2;
        if ("object" != typeof A3 && (A3 = [A3]), n(A3)) for (B2 = 0, C2 = A3.length; B2 < C2; B2++) I3.call(null, A3[B2], B2, A3);
        else {
          const C3 = g2 ? Object.getOwnPropertyNames(A3) : Object.keys(A3), Q2 = C3.length;
          let E2;
          for (B2 = 0; B2 < Q2; B2++) E2 = C3[B2], I3.call(null, A3[E2], E2, A3);
        }
      }
      function f(A3, I3) {
        I3 = I3.toLowerCase();
        const g2 = Object.keys(A3);
        let B2, C2 = g2.length;
        for (; C2-- > 0; ) if (B2 = g2[C2], I3 === B2.toLowerCase()) return B2;
        return null;
      }
      const u = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : commonjsGlobal, m = (A3) => !S(A3) && A3 !== u, p = (W = "undefined" != typeof Uint8Array && R(Uint8Array), (A3) => W && A3 instanceof W);
      var W;
      const b = e("HTMLFormElement"), Z = (({ hasOwnProperty: A3 }) => (I3, g2) => A3.call(I3, g2))(Object.prototype), x = e("RegExp"), V = (A3, I3) => {
        const g2 = Object.getOwnPropertyDescriptors(A3), B2 = {};
        q(g2, (g3, C2) => {
          false !== I3(g3, C2, A3) && (B2[C2] = g3);
        }), Object.defineProperties(A3, B2);
      }, O = { isArray: n, isArrayBuffer: c, isBuffer: function(A3) {
        return null !== A3 && !S(A3) && null !== A3.constructor && !S(A3.constructor) && k(A3.constructor.isBuffer) && A3.constructor.isBuffer(A3);
      }, isFormData: (A3) => {
        const I3 = "[object FormData]";
        return A3 && ("function" == typeof FormData && A3 instanceof FormData || r.call(A3) === I3 || k(A3.toString) && A3.toString() === I3);
      }, isArrayBufferView: function(A3) {
        let I3;
        return I3 = "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(A3) : A3 && A3.buffer && c(A3.buffer), I3;
      }, isString: N, isNumber: U, isBoolean: (A3) => true === A3 || false === A3, isObject: J, isPlainObject: K, isUndefined: S, isDate: Y, isFile: L, isBlob: d, isRegExp: x, isFunction: k, isStream: (A3) => J(A3) && k(A3.pipe), isURLSearchParams: H, isTypedArray: p, isFileList: l, forEach: q, merge: function A3() {
        const { caseless: I3 } = m(this) && this || {}, g2 = {}, B2 = (B3, C2) => {
          const Q2 = I3 && f(g2, C2) || C2;
          K(g2[Q2]) && K(B3) ? g2[Q2] = A3(g2[Q2], B3) : K(B3) ? g2[Q2] = A3({}, B3) : n(B3) ? g2[Q2] = B3.slice() : g2[Q2] = B3;
        };
        for (let A4 = 0, I4 = arguments.length; A4 < I4; A4++) arguments[A4] && q(arguments[A4], B2);
        return g2;
      }, extend: (A3, I3, g2, { allOwnKeys: B2 } = {}) => (q(I3, (I4, B3) => {
        g2 && k(I4) ? A3[B3] = h(I4, g2) : A3[B3] = I4;
      }, { allOwnKeys: B2 }), A3), trim: (A3) => A3.trim ? A3.trim() : A3.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ""), stripBOM: (A3) => (65279 === A3.charCodeAt(0) && (A3 = A3.slice(1)), A3), inherits: (A3, I3, g2, B2) => {
        A3.prototype = Object.create(I3.prototype, B2), A3.prototype.constructor = A3, Object.defineProperty(A3, "super", { value: I3.prototype }), g2 && Object.assign(A3.prototype, g2);
      }, toFlatObject: (A3, I3, g2, B2) => {
        let C2, Q2, E2;
        const i2 = {};
        if (I3 = I3 || {}, null == A3) return I3;
        do {
          for (C2 = Object.getOwnPropertyNames(A3), Q2 = C2.length; Q2-- > 0; ) E2 = C2[Q2], B2 && !B2(E2, A3, I3) || i2[E2] || (I3[E2] = A3[E2], i2[E2] = true);
          A3 = false !== g2 && R(A3);
        } while (A3 && (!g2 || g2(A3, I3)) && A3 !== Object.prototype);
        return I3;
      }, kindOf: y, kindOfTest: e, endsWith: (A3, I3, g2) => {
        A3 = String(A3), (void 0 === g2 || g2 > A3.length) && (g2 = A3.length), g2 -= I3.length;
        const B2 = A3.indexOf(I3, g2);
        return -1 !== B2 && B2 === g2;
      }, toArray: (A3) => {
        if (!A3) return null;
        if (n(A3)) return A3;
        let I3 = A3.length;
        if (!U(I3)) return null;
        const g2 = new Array(I3);
        for (; I3-- > 0; ) g2[I3] = A3[I3];
        return g2;
      }, forEachEntry: (A3, I3) => {
        const g2 = (A3 && A3[Symbol.iterator]).call(A3);
        let B2;
        for (; (B2 = g2.next()) && !B2.done; ) {
          const g3 = B2.value;
          I3.call(A3, g3[0], g3[1]);
        }
      }, matchAll: (A3, I3) => {
        let g2;
        const B2 = [];
        for (; null !== (g2 = A3.exec(I3)); ) B2.push(g2);
        return B2;
      }, isHTMLForm: b, hasOwnProperty: Z, hasOwnProp: Z, reduceDescriptors: V, freezeMethods: (A3) => {
        V(A3, (I3, g2) => {
          if (k(A3) && -1 !== ["arguments", "caller", "callee"].indexOf(g2)) return false;
          const B2 = A3[g2];
          k(B2) && (I3.enumerable = false, "writable" in I3 ? I3.writable = false : I3.set || (I3.set = () => {
            throw Error("Can not rewrite read-only method '" + g2 + "'");
          }));
        });
      }, toObjectSet: (A3, I3) => {
        const g2 = {}, B2 = (A4) => {
          A4.forEach((A5) => {
            g2[A5] = true;
          });
        };
        return n(A3) ? B2(A3) : B2(String(A3).split(I3)), g2;
      }, toCamelCase: (A3) => A3.toLowerCase().replace(/[_-\s]([a-z\d])(\w*)/g, function(A4, I3, g2) {
        return I3.toUpperCase() + g2;
      }), noop: () => {
      }, toFiniteNumber: (A3, I3) => (A3 = +A3, Number.isFinite(A3) ? A3 : I3), findKey: f, global: u, isContextDefined: m, toJSONObject: (A3) => {
        const I3 = new Array(10), g2 = (A4, B2) => {
          if (J(A4)) {
            if (I3.indexOf(A4) >= 0) return;
            if (!("toJSON" in A4)) {
              I3[B2] = A4;
              const C2 = n(A4) ? [] : {};
              return q(A4, (A5, I4) => {
                const Q2 = g2(A5, B2 + 1);
                !S(Q2) && (C2[I4] = Q2);
              }), I3[B2] = void 0, C2;
            }
          }
          return A4;
        };
        return g2(A3, 0);
      } };
      function X(A3, I3, g2, B2, C2) {
        Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = A3, this.name = "AxiosError", I3 && (this.code = I3), g2 && (this.config = g2), B2 && (this.request = B2), C2 && (this.response = C2);
      }
      O.inherits(X, Error, { toJSON: function() {
        return { message: this.message, name: this.name, description: this.description, number: this.number, fileName: this.fileName, lineNumber: this.lineNumber, columnNumber: this.columnNumber, stack: this.stack, config: O.toJSONObject(this.config), code: this.code, status: this.response && this.response.status ? this.response.status : null };
      } });
      const T = X.prototype, v = {};
      ["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL"].forEach((A3) => {
        v[A3] = { value: A3 };
      }), Object.defineProperties(X, v), Object.defineProperty(T, "isAxiosError", { value: true }), X.from = (A3, I3, g2, B2, C2, Q2) => {
        const E2 = Object.create(T);
        return O.toFlatObject(A3, E2, function(A4) {
          return A4 !== Error.prototype;
        }, (A4) => "isAxiosError" !== A4), X.call(E2, A3.message, I3, g2, B2, C2), E2.cause = A3, E2.name = A3.name, Q2 && Object.assign(E2, Q2), E2;
      };
      const j = X, P = g(230);
      function z(A3) {
        return O.isPlainObject(A3) || O.isArray(A3);
      }
      function _(A3) {
        return O.endsWith(A3, "[]") ? A3.slice(0, -2) : A3;
      }
      function $(A3, I3, g2) {
        return A3 ? A3.concat(I3).map(function(A4, I4) {
          return A4 = _(A4), !g2 && I4 ? "[" + A4 + "]" : A4;
        }).join(g2 ? "." : "") : I3;
      }
      const AA = O.toFlatObject(O, {}, null, function(A3) {
        return /^is[A-Z]/.test(A3);
      }), IA = function(A3, I3, g2) {
        if (!O.isObject(A3)) throw new TypeError("target must be an object");
        I3 = I3 || new (P || FormData)();
        const B2 = (g2 = O.toFlatObject(g2, { metaTokens: true, dots: false, indexes: false }, false, function(A4, I4) {
          return !O.isUndefined(I4[A4]);
        })).metaTokens, C2 = g2.visitor || a2, Q2 = g2.dots, E2 = g2.indexes, i2 = (g2.Blob || "undefined" != typeof Blob && Blob) && (o2 = I3) && O.isFunction(o2.append) && "FormData" === o2[Symbol.toStringTag] && o2[Symbol.iterator];
        var o2;
        if (!O.isFunction(C2)) throw new TypeError("visitor must be a function");
        function D2(A4) {
          if (null === A4) return "";
          if (O.isDate(A4)) return A4.toISOString();
          if (!i2 && O.isBlob(A4)) throw new j("Blob is not supported. Use a Buffer instead.");
          return O.isArrayBuffer(A4) || O.isTypedArray(A4) ? i2 && "function" == typeof Blob ? new Blob([A4]) : Buffer.from(A4) : A4;
        }
        function a2(A4, g3, C3) {
          let i3 = A4;
          if (A4 && !C3 && "object" == typeof A4) {
            if (O.endsWith(g3, "{}")) g3 = B2 ? g3 : g3.slice(0, -2), A4 = JSON.stringify(A4);
            else if (O.isArray(A4) && function(A5) {
              return O.isArray(A5) && !A5.some(z);
            }(A4) || O.isFileList(A4) || O.endsWith(g3, "[]") && (i3 = O.toArray(A4))) return g3 = _(g3), i3.forEach(function(A5, B3) {
              !O.isUndefined(A5) && null !== A5 && I3.append(true === E2 ? $([g3], B3, Q2) : null === E2 ? g3 : g3 + "[]", D2(A5));
            }), false;
          }
          return !!z(A4) || (I3.append($(C3, g3, Q2), D2(A4)), false);
        }
        const t2 = [], s2 = Object.assign(AA, { defaultVisitor: a2, convertValue: D2, isVisitable: z });
        if (!O.isObject(A3)) throw new TypeError("data must be an object");
        return function A4(g3, B3) {
          if (!O.isUndefined(g3)) {
            if (-1 !== t2.indexOf(g3)) throw Error("Circular reference detected in " + B3.join("."));
            t2.push(g3), O.forEach(g3, function(g4, Q3) {
              true === (!(O.isUndefined(g4) || null === g4) && C2.call(I3, g4, O.isString(Q3) ? Q3.trim() : Q3, B3, s2)) && A4(g4, B3 ? B3.concat(Q3) : [Q3]);
            }), t2.pop();
          }
        }(A3), I3;
      };
      function gA(A3) {
        const I3 = { "!": "%21", "'": "%27", "(": "%28", ")": "%29", "~": "%7E", "%20": "+", "%00": "\0" };
        return encodeURIComponent(A3).replace(/[!'()~]|%20|%00/g, function(A4) {
          return I3[A4];
        });
      }
      function BA(A3, I3) {
        this._pairs = [], A3 && IA(A3, this, I3);
      }
      const CA = BA.prototype;
      CA.append = function(A3, I3) {
        this._pairs.push([A3, I3]);
      }, CA.toString = function(A3) {
        const I3 = A3 ? function(I4) {
          return A3.call(this, I4, gA);
        } : gA;
        return this._pairs.map(function(A4) {
          return I3(A4[0]) + "=" + I3(A4[1]);
        }, "").join("&");
      };
      const QA = BA;
      function EA(A3) {
        return encodeURIComponent(A3).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
      }
      function iA(A3, I3, g2) {
        if (!I3) return A3;
        const B2 = g2 && g2.encode || EA, C2 = g2 && g2.serialize;
        let Q2;
        if (Q2 = C2 ? C2(I3, g2) : O.isURLSearchParams(I3) ? I3.toString() : new QA(I3, g2).toString(B2), Q2) {
          const I4 = A3.indexOf("#");
          -1 !== I4 && (A3 = A3.slice(0, I4)), A3 += (-1 === A3.indexOf("?") ? "?" : "&") + Q2;
        }
        return A3;
      }
      const oA = class {
        constructor() {
          this.handlers = [];
        }
        use(A3, I3, g2) {
          return this.handlers.push({ fulfilled: A3, rejected: I3, synchronous: !!g2 && g2.synchronous, runWhen: g2 ? g2.runWhen : null }), this.handlers.length - 1;
        }
        eject(A3) {
          this.handlers[A3] && (this.handlers[A3] = null);
        }
        clear() {
          this.handlers && (this.handlers = []);
        }
        forEach(A3) {
          O.forEach(this.handlers, function(I3) {
            null !== I3 && A3(I3);
          });
        }
      }, DA = { silentJSONParsing: true, forcedJSONParsing: true, clarifyTimeoutError: false }, aA = "undefined" != typeof URLSearchParams ? URLSearchParams : QA, tA = FormData, sA = (() => {
        let A3;
        return ("undefined" == typeof navigator || "ReactNative" !== (A3 = navigator.product) && "NativeScript" !== A3 && "NS" !== A3) && "undefined" != typeof window && "undefined" != typeof document;
      })(), wA = "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope && "function" == typeof self.importScripts, GA = { isBrowser: true, classes: { URLSearchParams: aA, FormData: tA, Blob }, isStandardBrowserEnv: sA, isStandardBrowserWebWorkerEnv: wA, protocols: ["http", "https", "file", "blob", "url", "data"] }, hA = function(A3) {
        function I3(A4, g2, B2, C2) {
          let Q2 = A4[C2++];
          const E2 = Number.isFinite(+Q2), i2 = C2 >= A4.length;
          return Q2 = !Q2 && O.isArray(B2) ? B2.length : Q2, i2 ? (O.hasOwnProp(B2, Q2) ? B2[Q2] = [B2[Q2], g2] : B2[Q2] = g2, !E2) : (B2[Q2] && O.isObject(B2[Q2]) || (B2[Q2] = []), I3(A4, g2, B2[Q2], C2) && O.isArray(B2[Q2]) && (B2[Q2] = function(A5) {
            const I4 = {}, g3 = Object.keys(A5);
            let B3;
            const C3 = g3.length;
            let Q3;
            for (B3 = 0; B3 < C3; B3++) Q3 = g3[B3], I4[Q3] = A5[Q3];
            return I4;
          }(B2[Q2])), !E2);
        }
        if (O.isFormData(A3) && O.isFunction(A3.entries)) {
          const g2 = {};
          return O.forEachEntry(A3, (A4, B2) => {
            I3(function(A5) {
              return O.matchAll(/\w+|\[(\w*)]/g, A5).map((A6) => "[]" === A6[0] ? "" : A6[1] || A6[0]);
            }(A4), B2, g2, 0);
          }), g2;
        }
        return null;
      }, rA = { "Content-Type": void 0 }, RA = { transitional: DA, adapter: ["xhr", "http"], transformRequest: [function(A3, I3) {
        const g2 = I3.getContentType() || "", B2 = g2.indexOf("application/json") > -1, C2 = O.isObject(A3);
        if (C2 && O.isHTMLForm(A3) && (A3 = new FormData(A3)), O.isFormData(A3)) return B2 && B2 ? JSON.stringify(hA(A3)) : A3;
        if (O.isArrayBuffer(A3) || O.isBuffer(A3) || O.isStream(A3) || O.isFile(A3) || O.isBlob(A3)) return A3;
        if (O.isArrayBufferView(A3)) return A3.buffer;
        if (O.isURLSearchParams(A3)) return I3.setContentType("application/x-www-form-urlencoded;charset=utf-8", false), A3.toString();
        let Q2;
        if (C2) {
          if (g2.indexOf("application/x-www-form-urlencoded") > -1) return function(A4, I4) {
            return IA(A4, new GA.classes.URLSearchParams(), Object.assign({ visitor: function(A5, I5, g3, B3) {
              return GA.isNode && O.isBuffer(A5) ? (this.append(I5, A5.toString("base64")), false) : B3.defaultVisitor.apply(this, arguments);
            } }, I4));
          }(A3, this.formSerializer).toString();
          if ((Q2 = O.isFileList(A3)) || g2.indexOf("multipart/form-data") > -1) {
            const I4 = this.env && this.env.FormData;
            return IA(Q2 ? { "files[]": A3 } : A3, I4 && new I4(), this.formSerializer);
          }
        }
        return C2 || B2 ? (I3.setContentType("application/json", false), function(A4, I4, g3) {
          if (O.isString(A4)) try {
            return (0, JSON.parse)(A4), O.trim(A4);
          } catch (A5) {
            if ("SyntaxError" !== A5.name) throw A5;
          }
          return (0, JSON.stringify)(A4);
        }(A3)) : A3;
      }], transformResponse: [function(A3) {
        const I3 = this.transitional || RA.transitional, g2 = I3 && I3.forcedJSONParsing, B2 = "json" === this.responseType;
        if (A3 && O.isString(A3) && (g2 && !this.responseType || B2)) {
          const g3 = !(I3 && I3.silentJSONParsing) && B2;
          try {
            return JSON.parse(A3);
          } catch (A4) {
            if (g3) {
              if ("SyntaxError" === A4.name) throw j.from(A4, j.ERR_BAD_RESPONSE, this, null, this.response);
              throw A4;
            }
          }
        }
        return A3;
      }], timeout: 0, xsrfCookieName: "XSRF-TOKEN", xsrfHeaderName: "X-XSRF-TOKEN", maxContentLength: -1, maxBodyLength: -1, env: { FormData: GA.classes.FormData, Blob: GA.classes.Blob }, validateStatus: function(A3) {
        return A3 >= 200 && A3 < 300;
      }, headers: { common: { Accept: "application/json, text/plain, */*" } } };
      O.forEach(["delete", "get", "head"], function(A3) {
        RA.headers[A3] = {};
      }), O.forEach(["post", "put", "patch"], function(A3) {
        RA.headers[A3] = O.merge(rA);
      });
      const yA = RA, FA = O.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"]), eA = Symbol("internals");
      function MA(A3) {
        return A3 && String(A3).trim().toLowerCase();
      }
      function nA(A3) {
        return false === A3 || null == A3 ? A3 : O.isArray(A3) ? A3.map(nA) : String(A3);
      }
      function SA(A3, I3, g2, B2) {
        return O.isFunction(B2) ? B2.call(this, I3, g2) : O.isString(I3) ? O.isString(B2) ? -1 !== I3.indexOf(B2) : O.isRegExp(B2) ? B2.test(I3) : void 0 : void 0;
      }
      class cA {
        constructor(A3) {
          A3 && this.set(A3);
        }
        set(A3, I3, g2) {
          const B2 = this;
          function C2(A4, I4, g3) {
            const C3 = MA(I4);
            if (!C3) throw new Error("header name must be a non-empty string");
            const Q3 = O.findKey(B2, C3);
            (!Q3 || void 0 === B2[Q3] || true === g3 || void 0 === g3 && false !== B2[Q3]) && (B2[Q3 || I4] = nA(A4));
          }
          const Q2 = (A4, I4) => O.forEach(A4, (A5, g3) => C2(A5, g3, I4));
          return O.isPlainObject(A3) || A3 instanceof this.constructor ? Q2(A3, I3) : O.isString(A3) && (A3 = A3.trim()) && !/^[-_a-zA-Z]+$/.test(A3.trim()) ? Q2(((A4) => {
            const I4 = {};
            let g3, B3, C3;
            return A4 && A4.split("\n").forEach(function(A5) {
              C3 = A5.indexOf(":"), g3 = A5.substring(0, C3).trim().toLowerCase(), B3 = A5.substring(C3 + 1).trim(), !g3 || I4[g3] && FA[g3] || ("set-cookie" === g3 ? I4[g3] ? I4[g3].push(B3) : I4[g3] = [B3] : I4[g3] = I4[g3] ? I4[g3] + ", " + B3 : B3);
            }), I4;
          })(A3), I3) : null != A3 && C2(I3, A3, g2), this;
        }
        get(A3, I3) {
          if (A3 = MA(A3)) {
            const g2 = O.findKey(this, A3);
            if (g2) {
              const A4 = this[g2];
              if (!I3) return A4;
              if (true === I3) return function(A5) {
                const I4 = /* @__PURE__ */ Object.create(null), g3 = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
                let B2;
                for (; B2 = g3.exec(A5); ) I4[B2[1]] = B2[2];
                return I4;
              }(A4);
              if (O.isFunction(I3)) return I3.call(this, A4, g2);
              if (O.isRegExp(I3)) return I3.exec(A4);
              throw new TypeError("parser must be boolean|regexp|function");
            }
          }
        }
        has(A3, I3) {
          if (A3 = MA(A3)) {
            const g2 = O.findKey(this, A3);
            return !(!g2 || I3 && !SA(0, this[g2], g2, I3));
          }
          return false;
        }
        delete(A3, I3) {
          const g2 = this;
          let B2 = false;
          function C2(A4) {
            if (A4 = MA(A4)) {
              const C3 = O.findKey(g2, A4);
              !C3 || I3 && !SA(0, g2[C3], C3, I3) || (delete g2[C3], B2 = true);
            }
          }
          return O.isArray(A3) ? A3.forEach(C2) : C2(A3), B2;
        }
        clear() {
          return Object.keys(this).forEach(this.delete.bind(this));
        }
        normalize(A3) {
          const I3 = this, g2 = {};
          return O.forEach(this, (B2, C2) => {
            const Q2 = O.findKey(g2, C2);
            if (Q2) return I3[Q2] = nA(B2), void delete I3[C2];
            const E2 = A3 ? function(A4) {
              return A4.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (A5, I4, g3) => I4.toUpperCase() + g3);
            }(C2) : String(C2).trim();
            E2 !== C2 && delete I3[C2], I3[E2] = nA(B2), g2[E2] = true;
          }), this;
        }
        concat(...A3) {
          return this.constructor.concat(this, ...A3);
        }
        toJSON(A3) {
          const I3 = /* @__PURE__ */ Object.create(null);
          return O.forEach(this, (g2, B2) => {
            null != g2 && false !== g2 && (I3[B2] = A3 && O.isArray(g2) ? g2.join(", ") : g2);
          }), I3;
        }
        [Symbol.iterator]() {
          return Object.entries(this.toJSON())[Symbol.iterator]();
        }
        toString() {
          return Object.entries(this.toJSON()).map(([A3, I3]) => A3 + ": " + I3).join("\n");
        }
        get [Symbol.toStringTag]() {
          return "AxiosHeaders";
        }
        static from(A3) {
          return A3 instanceof this ? A3 : new this(A3);
        }
        static concat(A3, ...I3) {
          const g2 = new this(A3);
          return I3.forEach((A4) => g2.set(A4)), g2;
        }
        static accessor(A3) {
          const I3 = (this[eA] = this[eA] = { accessors: {} }).accessors, g2 = this.prototype;
          function B2(A4) {
            const B3 = MA(A4);
            I3[B3] || (function(A5, I4) {
              const g3 = O.toCamelCase(" " + I4);
              ["get", "set", "has"].forEach((B4) => {
                Object.defineProperty(A5, B4 + g3, { value: function(A6, g4, C2) {
                  return this[B4].call(this, I4, A6, g4, C2);
                }, configurable: true });
              });
            }(g2, A4), I3[B3] = true);
          }
          return O.isArray(A3) ? A3.forEach(B2) : B2(A3), this;
        }
      }
      cA.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent"]), O.freezeMethods(cA.prototype), O.freezeMethods(cA);
      const NA = cA;
      function kA(A3, I3) {
        const g2 = this || yA, B2 = I3 || g2, C2 = NA.from(B2.headers);
        let Q2 = B2.data;
        return O.forEach(A3, function(A4) {
          Q2 = A4.call(g2, Q2, C2.normalize(), I3 ? I3.status : void 0);
        }), C2.normalize(), Q2;
      }
      function UA(A3) {
        return !(!A3 || !A3.__CANCEL__);
      }
      function JA(A3, I3, g2) {
        j.call(this, null == A3 ? "canceled" : A3, j.ERR_CANCELED, I3, g2), this.name = "CanceledError";
      }
      O.inherits(JA, j, { __CANCEL__: true });
      const KA = JA, YA = GA.isStandardBrowserEnv ? { write: function(A3, I3, g2, B2, C2, Q2) {
        const E2 = [];
        E2.push(A3 + "=" + encodeURIComponent(I3)), O.isNumber(g2) && E2.push("expires=" + new Date(g2).toGMTString()), O.isString(B2) && E2.push("path=" + B2), O.isString(C2) && E2.push("domain=" + C2), true === Q2 && E2.push("secure"), document.cookie = E2.join("; ");
      }, read: function(A3) {
        const I3 = document.cookie.match(new RegExp("(^|;\\s*)(" + A3 + ")=([^;]*)"));
        return I3 ? decodeURIComponent(I3[3]) : null;
      }, remove: function(A3) {
        this.write(A3, "", Date.now() - 864e5);
      } } : { write: function() {
      }, read: function() {
        return null;
      }, remove: function() {
      } };
      function LA(A3, I3) {
        return A3 && !/^([a-z][a-z\d+\-.]*:)?\/\//i.test(I3) ? function(A4, I4) {
          return I4 ? A4.replace(/\/+$/, "") + "/" + I4.replace(/^\/+/, "") : A4;
        }(A3, I3) : I3;
      }
      const dA = GA.isStandardBrowserEnv ? function() {
        const A3 = /(msie|trident)/i.test(navigator.userAgent), I3 = document.createElement("a");
        let g2;
        function B2(g3) {
          let B3 = g3;
          return A3 && (I3.setAttribute("href", B3), B3 = I3.href), I3.setAttribute("href", B3), { href: I3.href, protocol: I3.protocol ? I3.protocol.replace(/:$/, "") : "", host: I3.host, search: I3.search ? I3.search.replace(/^\?/, "") : "", hash: I3.hash ? I3.hash.replace(/^#/, "") : "", hostname: I3.hostname, port: I3.port, pathname: "/" === I3.pathname.charAt(0) ? I3.pathname : "/" + I3.pathname };
        }
        return g2 = B2(window.location.href), function(A4) {
          const I4 = O.isString(A4) ? B2(A4) : A4;
          return I4.protocol === g2.protocol && I4.host === g2.host;
        };
      }() : function() {
        return true;
      };
      function lA(A3, I3) {
        let g2 = 0;
        const B2 = function(A4, I4) {
          A4 = A4 || 10;
          const g3 = new Array(A4), B3 = new Array(A4);
          let C2, Q2 = 0, E2 = 0;
          return I4 = void 0 !== I4 ? I4 : 1e3, function(i2) {
            const o2 = Date.now(), D2 = B3[E2];
            C2 || (C2 = o2), g3[Q2] = i2, B3[Q2] = o2;
            let a2 = E2, t2 = 0;
            for (; a2 !== Q2; ) t2 += g3[a2++], a2 %= A4;
            if (Q2 = (Q2 + 1) % A4, Q2 === E2 && (E2 = (E2 + 1) % A4), o2 - C2 < I4) return;
            const s2 = D2 && o2 - D2;
            return s2 ? Math.round(1e3 * t2 / s2) : void 0;
          };
        }(50, 250);
        return (C2) => {
          const Q2 = C2.loaded, E2 = C2.lengthComputable ? C2.total : void 0, i2 = Q2 - g2, o2 = B2(i2);
          g2 = Q2;
          const D2 = { loaded: Q2, total: E2, progress: E2 ? Q2 / E2 : void 0, bytes: i2, rate: o2 || void 0, estimated: o2 && E2 && Q2 <= E2 ? (E2 - Q2) / o2 : void 0, event: C2 };
          D2[I3 ? "download" : "upload"] = true, A3(D2);
        };
      }
      const HA = { http: null, xhr: "undefined" != typeof XMLHttpRequest && function(A3) {
        return new Promise(function(I3, g2) {
          let B2 = A3.data;
          const C2 = NA.from(A3.headers).normalize(), Q2 = A3.responseType;
          let E2;
          function i2() {
            A3.cancelToken && A3.cancelToken.unsubscribe(E2), A3.signal && A3.signal.removeEventListener("abort", E2);
          }
          O.isFormData(B2) && (GA.isStandardBrowserEnv || GA.isStandardBrowserWebWorkerEnv) && C2.setContentType(false);
          let o2 = new XMLHttpRequest();
          if (A3.auth) {
            const I4 = A3.auth.username || "", g3 = A3.auth.password ? unescape(encodeURIComponent(A3.auth.password)) : "";
            C2.set("Authorization", "Basic " + btoa(I4 + ":" + g3));
          }
          const D2 = LA(A3.baseURL, A3.url);
          function a2() {
            if (!o2) return;
            const B3 = NA.from("getAllResponseHeaders" in o2 && o2.getAllResponseHeaders());
            !function(A4, I4, g3) {
              const B4 = g3.config.validateStatus;
              g3.status && B4 && !B4(g3.status) ? I4(new j("Request failed with status code " + g3.status, [j.ERR_BAD_REQUEST, j.ERR_BAD_RESPONSE][Math.floor(g3.status / 100) - 4], g3.config, g3.request, g3)) : A4(g3);
            }(function(A4) {
              I3(A4), i2();
            }, function(A4) {
              g2(A4), i2();
            }, { data: Q2 && "text" !== Q2 && "json" !== Q2 ? o2.response : o2.responseText, status: o2.status, statusText: o2.statusText, headers: B3, config: A3, request: o2 }), o2 = null;
          }
          if (o2.open(A3.method.toUpperCase(), iA(D2, A3.params, A3.paramsSerializer), true), o2.timeout = A3.timeout, "onloadend" in o2 ? o2.onloadend = a2 : o2.onreadystatechange = function() {
            o2 && 4 === o2.readyState && (0 !== o2.status || o2.responseURL && 0 === o2.responseURL.indexOf("file:")) && setTimeout(a2);
          }, o2.onabort = function() {
            o2 && (g2(new j("Request aborted", j.ECONNABORTED, A3, o2)), o2 = null);
          }, o2.onerror = function() {
            g2(new j("Network Error", j.ERR_NETWORK, A3, o2)), o2 = null;
          }, o2.ontimeout = function() {
            let I4 = A3.timeout ? "timeout of " + A3.timeout + "ms exceeded" : "timeout exceeded";
            const B3 = A3.transitional || DA;
            A3.timeoutErrorMessage && (I4 = A3.timeoutErrorMessage), g2(new j(I4, B3.clarifyTimeoutError ? j.ETIMEDOUT : j.ECONNABORTED, A3, o2)), o2 = null;
          }, GA.isStandardBrowserEnv) {
            const I4 = (A3.withCredentials || dA(D2)) && A3.xsrfCookieName && YA.read(A3.xsrfCookieName);
            I4 && C2.set(A3.xsrfHeaderName, I4);
          }
          void 0 === B2 && C2.setContentType(null), "setRequestHeader" in o2 && O.forEach(C2.toJSON(), function(A4, I4) {
            o2.setRequestHeader(I4, A4);
          }), O.isUndefined(A3.withCredentials) || (o2.withCredentials = !!A3.withCredentials), Q2 && "json" !== Q2 && (o2.responseType = A3.responseType), "function" == typeof A3.onDownloadProgress && o2.addEventListener("progress", lA(A3.onDownloadProgress, true)), "function" == typeof A3.onUploadProgress && o2.upload && o2.upload.addEventListener("progress", lA(A3.onUploadProgress)), (A3.cancelToken || A3.signal) && (E2 = (I4) => {
            o2 && (g2(!I4 || I4.type ? new KA(null, A3, o2) : I4), o2.abort(), o2 = null);
          }, A3.cancelToken && A3.cancelToken.subscribe(E2), A3.signal && (A3.signal.aborted ? E2() : A3.signal.addEventListener("abort", E2)));
          const t2 = function(A4) {
            const I4 = /^([-+\w]{1,25})(:?\/\/|:)/.exec(A4);
            return I4 && I4[1] || "";
          }(D2);
          t2 && -1 === GA.protocols.indexOf(t2) ? g2(new j("Unsupported protocol " + t2 + ":", j.ERR_BAD_REQUEST, A3)) : o2.send(B2 || null);
        });
      } };
      O.forEach(HA, (A3, I3) => {
        if (A3) {
          try {
            Object.defineProperty(A3, "name", { value: I3 });
          } catch (A4) {
          }
          Object.defineProperty(A3, "adapterName", { value: I3 });
        }
      });
      function qA(A3) {
        if (A3.cancelToken && A3.cancelToken.throwIfRequested(), A3.signal && A3.signal.aborted) throw new KA(null, A3);
      }
      function fA(A3) {
        return qA(A3), A3.headers = NA.from(A3.headers), A3.data = kA.call(A3, A3.transformRequest), -1 !== ["post", "put", "patch"].indexOf(A3.method) && A3.headers.setContentType("application/x-www-form-urlencoded", false), ((A4) => {
          A4 = O.isArray(A4) ? A4 : [A4];
          const { length: I3 } = A4;
          let g2, B2;
          for (let C2 = 0; C2 < I3 && (g2 = A4[C2], !(B2 = O.isString(g2) ? HA[g2.toLowerCase()] : g2)); C2++) ;
          if (!B2) {
            if (false === B2) throw new j(`Adapter ${g2} is not supported by the environment`, "ERR_NOT_SUPPORT");
            throw new Error(O.hasOwnProp(HA, g2) ? `Adapter '${g2}' is not available in the build` : `Unknown adapter '${g2}'`);
          }
          if (!O.isFunction(B2)) throw new TypeError("adapter is not a function");
          return B2;
        })(A3.adapter || yA.adapter)(A3).then(function(I3) {
          return qA(A3), I3.data = kA.call(A3, A3.transformResponse, I3), I3.headers = NA.from(I3.headers), I3;
        }, function(I3) {
          return UA(I3) || (qA(A3), I3 && I3.response && (I3.response.data = kA.call(A3, A3.transformResponse, I3.response), I3.response.headers = NA.from(I3.response.headers))), Promise.reject(I3);
        });
      }
      const uA = (A3) => A3 instanceof NA ? A3.toJSON() : A3;
      function mA(A3, I3) {
        I3 = I3 || {};
        const g2 = {};
        function B2(A4, I4, g3) {
          return O.isPlainObject(A4) && O.isPlainObject(I4) ? O.merge.call({ caseless: g3 }, A4, I4) : O.isPlainObject(I4) ? O.merge({}, I4) : O.isArray(I4) ? I4.slice() : I4;
        }
        function C2(A4, I4, g3) {
          return O.isUndefined(I4) ? O.isUndefined(A4) ? void 0 : B2(void 0, A4, g3) : B2(A4, I4, g3);
        }
        function Q2(A4, I4) {
          if (!O.isUndefined(I4)) return B2(void 0, I4);
        }
        function E2(A4, I4) {
          return O.isUndefined(I4) ? O.isUndefined(A4) ? void 0 : B2(void 0, A4) : B2(void 0, I4);
        }
        function i2(g3, C3, Q3) {
          return Q3 in I3 ? B2(g3, C3) : Q3 in A3 ? B2(void 0, g3) : void 0;
        }
        const o2 = { url: Q2, method: Q2, data: Q2, baseURL: E2, transformRequest: E2, transformResponse: E2, paramsSerializer: E2, timeout: E2, timeoutMessage: E2, withCredentials: E2, adapter: E2, responseType: E2, xsrfCookieName: E2, xsrfHeaderName: E2, onUploadProgress: E2, onDownloadProgress: E2, decompress: E2, maxContentLength: E2, maxBodyLength: E2, beforeRedirect: E2, transport: E2, httpAgent: E2, httpsAgent: E2, cancelToken: E2, socketPath: E2, responseEncoding: E2, validateStatus: i2, headers: (A4, I4) => C2(uA(A4), uA(I4), true) };
        return O.forEach(Object.keys(A3).concat(Object.keys(I3)), function(B3) {
          const Q3 = o2[B3] || C2, E3 = Q3(A3[B3], I3[B3], B3);
          O.isUndefined(E3) && Q3 !== i2 || (g2[B3] = E3);
        }), g2;
      }
      const pA = {};
      ["object", "boolean", "number", "function", "string", "symbol"].forEach((A3, I3) => {
        pA[A3] = function(g2) {
          return typeof g2 === A3 || "a" + (I3 < 1 ? "n " : " ") + A3;
        };
      });
      const WA = {};
      pA.transitional = function(A3, I3, g2) {
        function B2(A4, I4) {
          return "[Axios v1.2.4] Transitional option '" + A4 + "'" + I4 + (g2 ? ". " + g2 : "");
        }
        return (g3, C2, Q2) => {
          if (false === A3) throw new j(B2(C2, " has been removed" + (I3 ? " in " + I3 : "")), j.ERR_DEPRECATED);
          return I3 && !WA[C2] && (WA[C2] = true, console.warn(B2(C2, " has been deprecated since v" + I3 + " and will be removed in the near future"))), !A3 || A3(g3, C2, Q2);
        };
      };
      const bA = { assertOptions: function(A3, I3, g2) {
        if ("object" != typeof A3) throw new j("options must be an object", j.ERR_BAD_OPTION_VALUE);
        const B2 = Object.keys(A3);
        let C2 = B2.length;
        for (; C2-- > 0; ) {
          const Q2 = B2[C2], E2 = I3[Q2];
          if (E2) {
            const I4 = A3[Q2], g3 = void 0 === I4 || E2(I4, Q2, A3);
            if (true !== g3) throw new j("option " + Q2 + " must be " + g3, j.ERR_BAD_OPTION_VALUE);
          } else if (true !== g2) throw new j("Unknown option " + Q2, j.ERR_BAD_OPTION);
        }
      }, validators: pA }, ZA = bA.validators;
      class xA {
        constructor(A3) {
          this.defaults = A3, this.interceptors = { request: new oA(), response: new oA() };
        }
        request(A3, I3) {
          "string" == typeof A3 ? (I3 = I3 || {}).url = A3 : I3 = A3 || {}, I3 = mA(this.defaults, I3);
          const { transitional: g2, paramsSerializer: B2, headers: C2 } = I3;
          let Q2;
          void 0 !== g2 && bA.assertOptions(g2, { silentJSONParsing: ZA.transitional(ZA.boolean), forcedJSONParsing: ZA.transitional(ZA.boolean), clarifyTimeoutError: ZA.transitional(ZA.boolean) }, false), void 0 !== B2 && bA.assertOptions(B2, { encode: ZA.function, serialize: ZA.function }, true), I3.method = (I3.method || this.defaults.method || "get").toLowerCase(), Q2 = C2 && O.merge(C2.common, C2[I3.method]), Q2 && O.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (A4) => {
            delete C2[A4];
          }), I3.headers = NA.concat(Q2, C2);
          const E2 = [];
          let i2 = true;
          this.interceptors.request.forEach(function(A4) {
            "function" == typeof A4.runWhen && false === A4.runWhen(I3) || (i2 = i2 && A4.synchronous, E2.unshift(A4.fulfilled, A4.rejected));
          });
          const o2 = [];
          let D2;
          this.interceptors.response.forEach(function(A4) {
            o2.push(A4.fulfilled, A4.rejected);
          });
          let a2, t2 = 0;
          if (!i2) {
            const A4 = [fA.bind(this), void 0];
            for (A4.unshift.apply(A4, E2), A4.push.apply(A4, o2), a2 = A4.length, D2 = Promise.resolve(I3); t2 < a2; ) D2 = D2.then(A4[t2++], A4[t2++]);
            return D2;
          }
          a2 = E2.length;
          let s2 = I3;
          for (t2 = 0; t2 < a2; ) {
            const A4 = E2[t2++], I4 = E2[t2++];
            try {
              s2 = A4(s2);
            } catch (A5) {
              I4.call(this, A5);
              break;
            }
          }
          try {
            D2 = fA.call(this, s2);
          } catch (A4) {
            return Promise.reject(A4);
          }
          for (t2 = 0, a2 = o2.length; t2 < a2; ) D2 = D2.then(o2[t2++], o2[t2++]);
          return D2;
        }
        getUri(A3) {
          return iA(LA((A3 = mA(this.defaults, A3)).baseURL, A3.url), A3.params, A3.paramsSerializer);
        }
      }
      O.forEach(["delete", "get", "head", "options"], function(A3) {
        xA.prototype[A3] = function(I3, g2) {
          return this.request(mA(g2 || {}, { method: A3, url: I3, data: (g2 || {}).data }));
        };
      }), O.forEach(["post", "put", "patch"], function(A3) {
        function I3(I4) {
          return function(g2, B2, C2) {
            return this.request(mA(C2 || {}, { method: A3, headers: I4 ? { "Content-Type": "multipart/form-data" } : {}, url: g2, data: B2 }));
          };
        }
        xA.prototype[A3] = I3(), xA.prototype[A3 + "Form"] = I3(true);
      });
      const VA = xA;
      class OA {
        constructor(A3) {
          if ("function" != typeof A3) throw new TypeError("executor must be a function.");
          let I3;
          this.promise = new Promise(function(A4) {
            I3 = A4;
          });
          const g2 = this;
          this.promise.then((A4) => {
            if (!g2._listeners) return;
            let I4 = g2._listeners.length;
            for (; I4-- > 0; ) g2._listeners[I4](A4);
            g2._listeners = null;
          }), this.promise.then = (A4) => {
            let I4;
            const B2 = new Promise((A5) => {
              g2.subscribe(A5), I4 = A5;
            }).then(A4);
            return B2.cancel = function() {
              g2.unsubscribe(I4);
            }, B2;
          }, A3(function(A4, B2, C2) {
            g2.reason || (g2.reason = new KA(A4, B2, C2), I3(g2.reason));
          });
        }
        throwIfRequested() {
          if (this.reason) throw this.reason;
        }
        subscribe(A3) {
          this.reason ? A3(this.reason) : this._listeners ? this._listeners.push(A3) : this._listeners = [A3];
        }
        unsubscribe(A3) {
          if (!this._listeners) return;
          const I3 = this._listeners.indexOf(A3);
          -1 !== I3 && this._listeners.splice(I3, 1);
        }
        static source() {
          let A3;
          return { token: new OA(function(I3) {
            A3 = I3;
          }), cancel: A3 };
        }
      }
      const XA = OA, TA = { Continue: 100, SwitchingProtocols: 101, Processing: 102, EarlyHints: 103, Ok: 200, Created: 201, Accepted: 202, NonAuthoritativeInformation: 203, NoContent: 204, ResetContent: 205, PartialContent: 206, MultiStatus: 207, AlreadyReported: 208, ImUsed: 226, MultipleChoices: 300, MovedPermanently: 301, Found: 302, SeeOther: 303, NotModified: 304, UseProxy: 305, Unused: 306, TemporaryRedirect: 307, PermanentRedirect: 308, BadRequest: 400, Unauthorized: 401, PaymentRequired: 402, Forbidden: 403, NotFound: 404, MethodNotAllowed: 405, NotAcceptable: 406, ProxyAuthenticationRequired: 407, RequestTimeout: 408, Conflict: 409, Gone: 410, LengthRequired: 411, PreconditionFailed: 412, PayloadTooLarge: 413, UriTooLong: 414, UnsupportedMediaType: 415, RangeNotSatisfiable: 416, ExpectationFailed: 417, ImATeapot: 418, MisdirectedRequest: 421, UnprocessableEntity: 422, Locked: 423, FailedDependency: 424, TooEarly: 425, UpgradeRequired: 426, PreconditionRequired: 428, TooManyRequests: 429, RequestHeaderFieldsTooLarge: 431, UnavailableForLegalReasons: 451, InternalServerError: 500, NotImplemented: 501, BadGateway: 502, ServiceUnavailable: 503, GatewayTimeout: 504, HttpVersionNotSupported: 505, VariantAlsoNegotiates: 506, InsufficientStorage: 507, LoopDetected: 508, NotExtended: 510, NetworkAuthenticationRequired: 511 };
      Object.entries(TA).forEach(([A3, I3]) => {
        TA[I3] = A3;
      });
      const vA = TA, jA = function A3(I3) {
        const g2 = new VA(I3), B2 = h(VA.prototype.request, g2);
        return O.extend(B2, VA.prototype, g2, { allOwnKeys: true }), O.extend(B2, g2, null, { allOwnKeys: true }), B2.create = function(g3) {
          return A3(mA(I3, g3));
        }, B2;
      }(yA);
      jA.Axios = VA, jA.CanceledError = KA, jA.CancelToken = XA, jA.isCancel = UA, jA.VERSION = "1.2.4", jA.toFormData = IA, jA.AxiosError = j, jA.Cancel = jA.CanceledError, jA.all = function(A3) {
        return Promise.all(A3);
      }, jA.spread = function(A3) {
        return function(I3) {
          return A3.apply(null, I3);
        };
      }, jA.isAxiosError = function(A3) {
        return O.isObject(A3) && true === A3.isAxiosError;
      }, jA.mergeConfig = mA, jA.AxiosHeaders = NA, jA.formToJSON = (A3) => hA(O.isHTMLForm(A3) ? new FormData(A3) : A3), jA.HttpStatusCode = vA, jA.default = jA;
      const PA = jA;
      var zA = function() {
        function A3() {
          C(this, A3);
        }
        var g2;
        return o(A3, null, [{ key: "fetchRemoteData", value: (g2 = I2(t().mark(function A4(I3) {
          var g3;
          return t().wrap(function(A5) {
            for (; ; ) switch (A5.prev = A5.next) {
              case 0:
                return A5.prev = 0, A5.next = 3, PA.get(I3, { responseType: "arraybuffer" });
              case 3:
                return g3 = A5.sent, A5.abrupt("return", new Uint8Array(g3.data));
              case 7:
                throw A5.prev = 7, A5.t0 = A5.catch(0), A5.t0;
              case 10:
              case "end":
                return A5.stop();
            }
          }, A4, null, [[0, 7]]);
        })), function(A4) {
          return g2.apply(this, arguments);
        }) }, { key: "string2Uint8Data", value: function(A4) {
          for (var I3 = new Uint8Array(A4.length), g3 = 0; g3 < I3.length; g3++) I3[g3] = 255 & A4.charCodeAt(g3);
          return I3;
        } }, { key: "uint8Data2String", value: function(A4) {
          return String.fromCharCode.apply(String, A4);
        } }, { key: "parseMultiFile", value: function(I3) {
          var g3 = A3.uint8Data2String(I3).split("\n"), B2 = [], C2 = 0;
          return g3.forEach(function(A4) {
            if ((A4 = A4.trim()) && !A4.startsWith("#")) switch (C2) {
              case 0:
                return void (C2 = 1);
              case 1:
                A4.match(/^\d+$/) || B2.push(A4);
              case 2:
              case 3:
              case 4:
                return void C2++;
              case 5:
                return void (C2 = 1);
            }
          }), B2;
        } }]), A3;
      }(), _A = function() {
        function A3() {
          C(this, A3), this.instance, this.markerCount = 0, this.multiMarkerCount = 0, this.cameraCount = 0, this.version = "0.3.0", console.info("ARToolkit ", this.version);
        }
        var B2, Q2, E2, i2, D2;
        return o(A3, [{ key: "init", value: (D2 = I2(t().mark(function A4() {
          var I3;
          return t().wrap(function(A5) {
            for (; ; ) switch (A5.prev = A5.next) {
              case 0:
                return A5.next = 2, G();
              case 2:
                return I3 = A5.sent, this.instance = I3.instance, this._decorate(), ("undefined" != typeof window ? window : g.g).artoolkit = this, A5.abrupt("return", this);
              case 8:
              case "end":
                return A5.stop();
            }
          }, A4, this);
        })), function() {
          return D2.apply(this, arguments);
        }) }, { key: "_decorate", value: function() {
          var A4 = this;
          for (var I3 in ["setup", "teardown", "setupAR2", "setLogLevel", "getLogLevel", "setDebugMode", "getDebugMode", "getProcessingImage", "setMarkerInfoDir", "setMarkerInfoVertex", "getTransMatSquare", "getTransMatSquareCont", "getTransMatMultiSquare", "getTransMatMultiSquareRobust", "getMultiMarkerNum", "getMultiMarkerCount", "detectMarker", "getMarkerNum", "detectNFTMarker", "getNFTMarker", "getNFTData", "getMarker", "getMultiEachMarker", "setProjectionNearPlane", "getProjectionNearPlane", "setProjectionFarPlane", "getProjectionFarPlane", "setThresholdMode", "getThresholdMode", "setThreshold", "getThreshold", "setPatternDetectionMode", "getPatternDetectionMode", "setMatrixCodeType", "getMatrixCodeType", "setLabelingMode", "getLabelingMode", "setPattRatio", "getPattRatio", "setImageProcMode", "getImageProcMode"].forEach(function(I4) {
            A4[I4] = A4.instance[I4];
          }), this.instance) I3.match(/^AR/) && (this[I3] = this.instance[I3]);
        } }, { key: "loadCamera", value: (i2 = I2(t().mark(function A4(I3) {
          var g2, B3;
          return t().wrap(function(A5) {
            for (; ; ) switch (A5.prev = A5.next) {
              case 0:
                if (g2 = "/camera_param_" + this.cameraCount++, !(I3 instanceof Uint8Array)) {
                  A5.next = 5;
                  break;
                }
                B3 = I3, A5.next = 14;
                break;
              case 5:
                return A5.prev = 5, A5.next = 8, zA.fetchRemoteData(I3);
              case 8:
                B3 = A5.sent, A5.next = 14;
                break;
              case 11:
                throw A5.prev = 11, A5.t0 = A5.catch(5), A5.t0;
              case 14:
                return this._storeDataFile(B3, g2), A5.abrupt("return", this.instance._loadCamera(g2));
              case 16:
              case "end":
                return A5.stop();
            }
          }, A4, this, [[5, 11]]);
        })), function(A4) {
          return i2.apply(this, arguments);
        }) }, { key: "addMarker", value: (E2 = I2(t().mark(function A4(I3, g2) {
          var B3, C2;
          return t().wrap(function(A5) {
            for (; ; ) switch (A5.prev = A5.next) {
              case 0:
                if (B3 = "/marker_" + this.markerCount++, -1 === g2.indexOf("\n")) {
                  A5.next = 5;
                  break;
                }
                C2 = zA.string2Uint8Data(g2), A5.next = 14;
                break;
              case 5:
                return A5.prev = 5, A5.next = 8, zA.fetchRemoteData(g2);
              case 8:
                C2 = A5.sent, A5.next = 14;
                break;
              case 11:
                throw A5.prev = 11, A5.t0 = A5.catch(5), A5.t0;
              case 14:
                return this._storeDataFile(C2, B3), A5.abrupt("return", this.instance._addMarker(I3, B3));
              case 16:
              case "end":
                return A5.stop();
            }
          }, A4, this, [[5, 11]]);
        })), function(A4, I3) {
          return E2.apply(this, arguments);
        }) }, { key: "addMultiMarker", value: (Q2 = I2(t().mark(function A4(g2, B3) {
          var C2, Q3, E3, i3, o2, D3, a2;
          return t().wrap(function(A5) {
            for (; ; ) switch (A5.prev = A5.next) {
              case 0:
                return C2 = "/multi_marker_" + this.multiMarkerCount++, A5.next = 3, zA.fetchRemoteData(B3);
              case 3:
                return Q3 = A5.sent, E3 = zA.parseMultiFile(Q3), i3 = function() {
                  var A6 = I2(t().mark(function A7(I3) {
                    var g3, C3;
                    return t().wrap(function(A8) {
                      for (; ; ) switch (A8.prev = A8.next) {
                        case 0:
                          return g3 = new URL(I3, B3).toString(), A8.next = 3, zA.fetchRemoteData(g3);
                        case 3:
                          C3 = A8.sent, this._storeDataFile(C3, I3);
                        case 5:
                        case "end":
                          return A8.stop();
                      }
                    }, A7, this);
                  }));
                  return function(I3) {
                    return A6.apply(this, arguments);
                  };
                }(), o2 = E3.map(i3, this), A5.next = 9, Promise.all(o2);
              case 9:
                return D3 = this.instance._addMultiMarker(g2, C2), a2 = this.instance.getMultiMarkerNum(g2, D3), A5.abrupt("return", [D3, a2]);
              case 12:
              case "end":
                return A5.stop();
            }
          }, A4, this);
        })), function(A4, I3) {
          return Q2.apply(this, arguments);
        }) }, { key: "addNFTMarker", value: (B2 = I2(t().mark(function A4(g2, B3) {
          var C2, Q3, E3, i3;
          return t().wrap(function(A5) {
            for (; ; ) switch (A5.prev = A5.next) {
              case 0:
                return C2 = "/markerNFT_" + this.markerCount++, Q3 = ["fset", "iset", "fset3"], E3 = function() {
                  var A6 = I2(t().mark(function A7(I3) {
                    var g3, Q4, E4;
                    return t().wrap(function(A8) {
                      for (; ; ) switch (A8.prev = A8.next) {
                        case 0:
                          return g3 = B3 + "." + I3, Q4 = C2 + "." + I3, A8.next = 4, zA.fetchRemoteData(g3);
                        case 4:
                          E4 = A8.sent, this._storeDataFile(E4, Q4);
                        case 6:
                        case "end":
                          return A8.stop();
                      }
                    }, A7, this);
                  }));
                  return function(I3) {
                    return A6.apply(this, arguments);
                  };
                }(), i3 = Q3.map(E3, this), A5.next = 6, Promise.all(i3);
              case 6:
                return A5.abrupt("return", this.instance._addNFTMarker(g2, C2));
              case 7:
              case "end":
                return A5.stop();
            }
          }, A4, this);
        })), function(A4, I3) {
          return B2.apply(this, arguments);
        }) }, { key: "_storeDataFile", value: function(A4, I3) {
          this.instance.FS.writeFile(I3, A4, { encoding: "binary" });
        } }], [{ key: "UNKNOWN_MARKER", get: function() {
          return -1;
        } }, { key: "PATTERN_MARKER", get: function() {
          return 0;
        } }, { key: "BARCODE_MARKER", get: function() {
          return 1;
        } }, { key: "NFT_MARKER", get: function() {
          return 2;
        } }]), A3;
      }();
      function $A(A3, I3, g2) {
        return (I3 = E(I3)) in A3 ? Object.defineProperty(A3, I3, { value: g2, enumerable: true, configurable: true, writable: true }) : A3[I3] = g2, A3;
      }
      function AI(A3, I3) {
        var g2 = Object.keys(A3);
        if (Object.getOwnPropertySymbols) {
          var B2 = Object.getOwnPropertySymbols(A3);
          I3 && (B2 = B2.filter(function(I4) {
            return Object.getOwnPropertyDescriptor(A3, I4).enumerable;
          })), g2.push.apply(g2, B2);
        }
        return g2;
      }
      function II(A3) {
        for (var I3 = 1; I3 < arguments.length; I3++) {
          var g2 = null != arguments[I3] ? arguments[I3] : {};
          I3 % 2 ? AI(Object(g2), true).forEach(function(I4) {
            $A(A3, I4, g2[I4]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(A3, Object.getOwnPropertyDescriptors(g2)) : AI(Object(g2)).forEach(function(I4) {
            Object.defineProperty(A3, I4, Object.getOwnPropertyDescriptor(g2, I4));
          });
        }
        return A3;
      }
      var gI = function() {
        function A3(I3, g3, B3, Q3) {
          C(this, A3), this.options = II(II({}, { canvas: null, orientation: "landscape" }), Q3), this.id = -1, this.width = I3, this.height = g3, this.image, this.orientation = this.options.orientation, this.cameraParam = B3, this.cameraId = -1, this.cameraLoaded = false, this.artoolkit, this.listeners = {}, this.defaultMarkerWidth = 1, this.patternMarkers = {}, this.barcodeMarkers = {}, this.nftMarkers = {}, this.transform_mat = new Float32Array(16), this.transformGL_RH = new Float64Array(16), this.videoWidth = I3, this.videoHeight = g3, this.videoSize = this.videoWidth * this.videoHeight, this.framepointer = null, this.framesize = null, this.dataHeap = null, this.videoLuma = null, this.camera_mat = null, this.marker_transform_mat = null, this.videoLumaPointer = null, this.options.canvas ? this.canvas = this.options.canvas : "undefined" != typeof document && (this.canvas = document.createElement("canvas")), this.canvas ? (this.canvas.width = I3, this.canvas.height = g3, this.ctx = this.canvas.getContext("2d")) : console.warn("No canvas available"), this.nftMarkerFound = false, this.nftMarkerFoundTime = false, this.nftMarkerCount = 0, this._bwpointer = false;
        }
        var g2, B2, Q2, E2, i2, D2;
        return o(A3, [{ key: "dispose", value: function() {
          for (var A4 in this.cameraId = -1, this.cameraParam = "", this.cameraLoaded = false, this.id > -1 && this.artoolkit.teardown(this.id), this.image && this.image.srcObject, this) this[A4] = null;
        } }, { key: "process", value: function(A4) {
          var I3 = this.detectMarker(A4);
          0 != I3 && console.error("[ARController]", "detectMarker error:", I3);
          var g3, B3, C2 = this.getMarkerNum();
          for (g3 in this.patternMarkers) (B3 = this.patternMarkers[g3]).inPrevious = B3.inCurrent, B3.inCurrent = false;
          for (g3 in this.barcodeMarkers) (B3 = this.barcodeMarkers[g3]).inPrevious = B3.inCurrent, B3.inCurrent = false;
          for (g3 in this.nftMarkers) (B3 = this.nftMarkers[g3]).inPrevious = B3.inCurrent, B3.inCurrent = false;
          for (var Q3 = 0; Q3 < C2; Q3++) {
            var E3 = this.getMarker(Q3), i3 = _A.UNKNOWN_MARKER, o2 = this.trackPatternMarkerId(-1);
            E3.idPatt > -1 && (E3.id === E3.idPatt || -1 === E3.idMatrix) ? (o2 = this.trackPatternMarkerId(E3.idPatt), i3 = _A.PATTERN_MARKER, E3.dir !== E3.dirPatt && this.setMarkerInfoDir(Q3, E3.dirPatt)) : E3.idMatrix > -1 && (o2 = this.trackBarcodeMarkerId(E3.idMatrix), i3 = _A.BARCODE_MARKER, E3.dir !== E3.dirMatrix && this.setMarkerInfoDir(Q3, E3.dirMatrix)), i3 !== _A.UNKNOWN_MARKER && o2.inPrevious ? this.getTransMatSquareCont(Q3, o2.markerWidth, o2.matrix, o2.matrix) : this.getTransMatSquare(Q3, o2.markerWidth, o2.matrix), o2.inCurrent = true, this.transMatToGLMat(o2.matrix, this.transform_mat), this.transformGL_RH = this.arglCameraViewRHf(this.transform_mat), this.dispatchEvent({ name: "getMarker", target: this, data: { index: Q3, type: i3, marker: E3, matrix: this.transform_mat, matrixGL_RH: this.transformGL_RH } });
          }
          var D3 = this.nftMarkerCount;
          this.detectNFTMarker();
          for (var a2 = 0; a2 < D3; a2++) {
            var t2 = this.getNFTMarker(a2), s2 = _A.NFT_MARKER;
            if (t2.found) {
              this.nftMarkerFound = a2, this.nftMarkerFoundTime = Date.now();
              var w2 = this.trackNFTMarkerId(a2);
              w2.matrix.set(t2.pose), w2.inCurrent = true, this.transMatToGLMat(w2.matrix, this.transform_mat), this.transformGL_RH = this.arglCameraViewRHf(this.transform_mat), this.dispatchEvent({ name: "getNFTMarker", target: this, data: { index: a2, type: s2, marker: t2, matrix: this.transform_mat, matrixGL_RH: this.transformGL_RH } });
            } else self.nftMarkerFound === a2 && Date.now() - this.nftMarkerFoundTime > 200 && (this.nftMarkerFound = false, this.dispatchEvent({ name: "lostNFTMarker", target: this, data: { index: a2, type: s2, marker: t2, matrix: this.transform_mat, matrixGL_RH: this.transformGL_RH } }));
          }
          for (var G2 = this.getMultiMarkerCount(), h2 = 0; h2 < G2; h2++) {
            var r2 = this.getMultiMarkerPatternCount(h2), R2 = false;
            this.artoolkit.getTransMatMultiSquareRobust(this.id, h2), this.transMatToGLMat(this.marker_transform_mat, this.transform_mat), this.transformGL_RH = this.arglCameraViewRHf(this.transform_mat);
            for (var y2 = 0; y2 < r2; y2++) if ((e2 = this.getMultiEachMarker(h2, y2)).visible >= 0) {
              R2 = true, this.dispatchEvent({ name: "getMultiMarker", target: this, data: { multiMarkerId: h2, matrix: this.transform_mat, matrixGL_RH: this.transformGL_RH } });
              break;
            }
            if (R2) for (var F2 = 0; F2 < r2; F2++) {
              var e2 = this.getMultiEachMarker(h2, F2);
              this.transMatToGLMat(this.marker_transform_mat, this.transform_mat), this.transformGL_RH = this.arglCameraViewRHf(this.transform_mat), this.dispatchEvent({ name: "getMultiMarkerSub", target: this, data: { multiMarkerId: h2, markerIndex: F2, marker: e2, matrix: this.transform_mat, matrixGL_RH: this.transformGL_RH } });
            }
          }
          this._bwpointer && this.debugDraw();
        } }, { key: "detectNFTMarker", value: function() {
          this.artoolkit.detectNFTMarker(this.id);
        } }, { key: "trackPatternMarkerId", value: function(A4, I3) {
          var g3 = this.patternMarkers[A4];
          return g3 || (this.patternMarkers[A4] = g3 = { inPrevious: false, inCurrent: false, matrix: new Float64Array(12), matrixGL_RH: new Float64Array(12), markerWidth: I3 || this.defaultMarkerWidth }), I3 && (g3.markerWidth = I3), g3;
        } }, { key: "trackBarcodeMarkerId", value: function(A4, I3) {
          var g3 = this.barcodeMarkers[A4];
          return g3 || (this.barcodeMarkers[A4] = g3 = { inPrevious: false, inCurrent: false, matrix: new Float64Array(12), matrixGL_RH: new Float64Array(12), markerWidth: I3 || this.defaultMarkerWidth }), I3 && (g3.markerWidth = I3), g3;
        } }, { key: "trackNFTMarkerId", value: function(A4, I3) {
          var g3 = this.nftMarkers[A4];
          return g3 || (this.nftMarkers[A4] = g3 = { inPrevious: false, inCurrent: false, matrix: new Float64Array(12), matrixGL_RH: new Float64Array(12), markerWidth: I3 || this.defaultMarkerWidth }), I3 && (g3.markerWidth = I3), g3;
        } }, { key: "getMultiMarkerCount", value: function() {
          return this.artoolkit.getMultiMarkerCount(this.id);
        } }, { key: "getMultiMarkerPatternCount", value: function(A4) {
          return this.artoolkit.getMultiMarkerNum(this.id, A4);
        } }, { key: "addEventListener", value: function(A4, I3) {
          this.listeners[A4] || (this.listeners[A4] = []), this.listeners[A4].push(I3);
        } }, { key: "removeEventListener", value: function(A4, I3) {
          if (this.listeners[A4]) {
            var g3 = this.listeners[A4].indexOf(I3);
            g3 > -1 && this.listeners[A4].splice(g3, 1);
          }
        } }, { key: "dispatchEvent", value: function(A4) {
          var I3 = this.listeners[A4.name];
          if (I3) for (var g3 = 0; g3 < I3.length; g3++) I3[g3].call(this, A4);
        } }, { key: "debugSetup", value: function() {
          "undefined" != typeof document ? (document.body.appendChild(this.canvas), this.setDebugMode(true), this._bwpointer = this.getProcessingImage()) : console.log("debugSetup() currently only supports Browser environments");
        } }, { key: "debugDraw", value: function() {
          for (var A4 = new Uint8ClampedArray(this.artoolkit.instance.HEAPU8.buffer, this._bwpointer, this.framesize), I3 = new ImageData(new Uint8ClampedArray(this.canvas.width * this.canvas.height * 4), this.canvas.width, this.canvas.height), g3 = 0, B3 = 0; g3 < A4.length; g3++, B3 += 4) {
            var C2 = A4[g3];
            I3.data[B3 + 0] = C2, I3.data[B3 + 1] = C2, I3.data[B3 + 2] = C2, I3.data[B3 + 3] = 255;
          }
          this.ctx.putImageData(I3, 0, 0);
          for (var Q3 = this.getMarkerNum(), E3 = 0; E3 < Q3; E3++) this.drawDebugMarker(this.getMarker(E3));
        } }, { key: "drawDebugMarker", value: function(A4) {
          var I3 = A4.vertex, g3 = A4.pos, B3 = this.ctx;
          B3.lineWidth = 5, B3.strokeStyle = "red", B3.beginPath(), B3.moveTo(I3[0][0], I3[0][1]), B3.lineTo(I3[1][0], I3[1][1]), B3.stroke(), B3.beginPath(), B3.moveTo(I3[2][0], I3[2][1]), B3.lineTo(I3[3][0], I3[3][1]), B3.stroke(), B3.strokeStyle = "green", B3.beginPath(), B3.lineTo(I3[1][0], I3[1][1]), B3.lineTo(I3[2][0], I3[2][1]), B3.stroke(), B3.beginPath(), B3.moveTo(I3[3][0], I3[3][1]), B3.lineTo(I3[0][0], I3[0][1]), B3.stroke(), B3.beginPath(), B3.arc(g3[0], g3[1], 8, 0, 2 * Math.PI), B3.fillStyle = "red", B3.fill();
        } }, { key: "loadMarker", value: (D2 = I2(t().mark(function A4(I3) {
          return t().wrap(function(A5) {
            for (; ; ) switch (A5.prev = A5.next) {
              case 0:
                return A5.next = 2, this.artoolkit.addMarker(this.id, I3);
              case 2:
                return A5.abrupt("return", A5.sent);
              case 3:
              case "end":
                return A5.stop();
            }
          }, A4, this);
        })), function(A4) {
          return D2.apply(this, arguments);
        }) }, { key: "loadMultiMarker", value: (i2 = I2(t().mark(function A4(I3) {
          return t().wrap(function(A5) {
            for (; ; ) switch (A5.prev = A5.next) {
              case 0:
                return A5.next = 2, this.artoolkit.addMultiMarker(this.id, I3);
              case 2:
                return A5.abrupt("return", A5.sent);
              case 3:
              case "end":
                return A5.stop();
            }
          }, A4, this);
        })), function(A4) {
          return i2.apply(this, arguments);
        }) }, { key: "loadNFTMarker", value: (E2 = I2(t().mark(function A4(I3) {
          var g3;
          return t().wrap(function(A5) {
            for (; ; ) switch (A5.prev = A5.next) {
              case 0:
                return A5.next = 2, this.artoolkit.addNFTMarker(this.id, I3);
              case 2:
                return g3 = A5.sent, this.nftMarkerCount = g3 + 1, A5.abrupt("return", g3);
              case 5:
              case "end":
                return A5.stop();
            }
          }, A4, this);
        })), function(A4) {
          return E2.apply(this, arguments);
        }) }, { key: "getTransMatSquare", value: function(A4, I3, g3) {
          return this.artoolkit.getTransMatSquare(this.id, A4, I3), g3.set(this.marker_transform_mat), g3;
        } }, { key: "getTransMatSquareCont", value: function(A4, I3, g3, B3) {
          return this.marker_transform_mat.set(g3), this.artoolkit.getTransMatSquareCont(this.id, A4, I3), B3.set(this.marker_transform_mat), B3;
        } }, { key: "getTransMatMultiSquare", value: function(A4, I3) {
          return this.artoolkit.getTransMatMultiSquare(this.id, A4), I3.set(this.marker_transform_mat), I3;
        } }, { key: "getTransMatMultiSquareRobust", value: function(A4, I3) {
          return this.artoolkit.getTransMatMultiSquare(this.id, A4), I3.set(this.marker_transform_mat), I3;
        } }, { key: "transMatToGLMat", value: function(A4, I3, g3) {
          return null == I3 && (I3 = new Float64Array(16)), I3[0] = A4[0], I3[4] = A4[1], I3[8] = A4[2], I3[12] = A4[3], I3[1] = A4[4], I3[5] = A4[5], I3[9] = A4[6], I3[13] = A4[7], I3[2] = A4[8], I3[6] = A4[9], I3[10] = A4[10], I3[14] = A4[11], I3[3] = 0, I3[7] = 0, I3[11] = 0, I3[15] = 1, null != g3 && 0 !== g3 && (I3[12] *= g3, I3[13] *= g3, I3[14] *= g3), I3;
        } }, { key: "arglCameraViewRHf", value: function(A4, I3, g3) {
          var B3;
          return (B3 = null == I3 ? new Float64Array(16) : I3)[0] = A4[0], B3[4] = A4[4], B3[8] = A4[8], B3[12] = A4[12], B3[1] = -A4[1], B3[5] = -A4[5], B3[9] = -A4[9], B3[13] = -A4[13], B3[2] = -A4[2], B3[6] = -A4[6], B3[10] = -A4[10], B3[14] = -A4[14], B3[3] = 0, B3[7] = 0, B3[11] = 0, B3[15] = 1, null != g3 && 0 !== g3 && (B3[12] *= g3, B3[13] *= g3, B3[14] *= g3), B3;
        } }, { key: "detectMarker", value: function(A4) {
          return this._copyImageToHeap(A4) ? this.artoolkit.detectMarker(this.id) : -99;
        } }, { key: "getMarkerNum", value: function() {
          return this.artoolkit.getMarkerNum(this.id);
        } }, { key: "getMarker", value: function(A4) {
          if (0 === this.artoolkit.getMarker(this.id, A4)) return this.artoolkit.markerInfo;
        } }, { key: "getNFTMarker", value: function(A4) {
          if (0 === this.artoolkit.getNFTMarker(this.id, A4)) return this.artoolkit.NFTMarkerInfo;
        } }, { key: "getNFTData", value: function(A4, I3) {
          return this.artoolkit.getNFTData(A4, I3);
        } }, { key: "setMarkerInfoVertex", value: function(A4, I3) {
          for (var g3 = 0; g3 < I3.length; g3++) this.marker_transform_mat[2 * g3 + 0] = I3[g3][0], this.marker_transform_mat[2 * g3 + 1] = I3[g3][1];
          return this.artoolkit.setMarkerInfoVertex(this.id, A4);
        } }, { key: "cloneMarkerInfo", value: function(A4) {
          return JSON.parse(JSON.stringify(A4));
        } }, { key: "getMultiEachMarker", value: function(A4, I3) {
          if (0 === this.artoolkit.getMultiEachMarker(this.id, A4, I3)) return this.artoolkit.multiEachMarkerInfo;
        } }, { key: "getTransformationMatrix", value: function() {
          return this.transform_mat;
        } }, { key: "getCameraMatrix", value: function() {
          return this.camera_mat;
        } }, { key: "getMarkerTransformationMatrix", value: function() {
          return this.marker_transform_mat;
        } }, { key: "setDebugMode", value: function(A4) {
          return this.artoolkit.setDebugMode(this.id, A4);
        } }, { key: "getDebugMode", value: function() {
          return this.artoolkit.getDebugMode(this.id);
        } }, { key: "getProcessingImage", value: function() {
          return this.artoolkit.getProcessingImage(this.id);
        } }, { key: "setLogLevel", value: function(A4) {
          return this.artoolkit.setLogLevel(A4);
        } }, { key: "getLogLevel", value: function() {
          return this.artoolkit.getLogLevel();
        } }, { key: "setMarkerInfoDir", value: function(A4, I3) {
          return this.artoolkit.setMarkerInfoDir(this.id, A4, I3);
        } }, { key: "setProjectionNearPlane", value: function(A4) {
          return this.artoolkit.setProjectionNearPlane(this.id, A4);
        } }, { key: "getProjectionNearPlane", value: function() {
          return this.artoolkit.getProjectionNearPlane(this.id);
        } }, { key: "setProjectionFarPlane", value: function(A4) {
          return this.artoolkit.setProjectionFarPlane(this.id, A4);
        } }, { key: "getProjectionFarPlane", value: function() {
          return this.artoolkit.getProjectionFarPlane(this.id);
        } }, { key: "setThresholdMode", value: function(A4) {
          return this.artoolkit.setThresholdMode(this.id, A4);
        } }, { key: "getThresholdMode", value: function() {
          return this.artoolkit.getThresholdMode(this.id);
        } }, { key: "setThreshold", value: function(A4) {
          return this.artoolkit.setThreshold(this.id, A4);
        } }, { key: "getThreshold", value: function() {
          return this.artoolkit.getThreshold(this.id);
        } }, { key: "setPatternDetectionMode", value: function(A4) {
          return this.artoolkit.setPatternDetectionMode(this.id, A4);
        } }, { key: "getPatternDetectionMode", value: function() {
          return this.artoolkit.getPatternDetectionMode(this.id);
        } }, { key: "setMatrixCodeType", value: function(A4) {
          return this.artoolkit.setMatrixCodeType(this.id, A4);
        } }, { key: "getMatrixCodeType", value: function() {
          return this.artoolkit.getMatrixCodeType(this.id);
        } }, { key: "setLabelingMode", value: function(A4) {
          return this.artoolkit.setLabelingMode(this.id, A4);
        } }, { key: "getLabelingMode", value: function() {
          return this.artoolkit.getLabelingMode(this.id);
        } }, { key: "setPattRatio", value: function(A4) {
          return this.artoolkit.setPattRatio(this.id, A4);
        } }, { key: "getPattRatio", value: function() {
          return this.artoolkit.getPattRatio(this.id);
        } }, { key: "setImageProcMode", value: function(A4) {
          return this.artoolkit.setImageProcMode(this.id, A4);
        } }, { key: "getImageProcMode", value: function() {
          return this.artoolkit.getImageProcMode(this.id);
        } }, { key: "_initialize", value: (Q2 = I2(t().mark(function A4() {
          var I3, g3 = this;
          return t().wrap(function(A5) {
            for (; ; ) switch (A5.prev = A5.next) {
              case 0:
                return A5.next = 2, new _A().init();
              case 2:
                return this.artoolkit = A5.sent, console.log("[ARController]", "ARToolkit initialized"), A5.next = 6, this.artoolkit.loadCamera(this.cameraParam);
              case 6:
                return this.cameraId = A5.sent, console.log("[ARController]", "Camera params loaded with ID", this.cameraId), this.id = this.artoolkit.setup(this.width, this.height, this.cameraId), console.log("[ARController]", "Got ID from setup", this.id), this._initNFT(), I3 = artoolkit.frameMalloc, this.framepointer = I3.framepointer, this.framesize = I3.framesize, this.videoLumaPointer = I3.videoLumaPointer, this.dataHeap = new Uint8Array(this.artoolkit.instance.HEAPU8.buffer, this.framepointer, this.framesize), this.videoLuma = new Uint8Array(this.artoolkit.instance.HEAPU8.buffer, this.videoLumaPointer, this.framesize / 4), this.camera_mat = new Float64Array(this.artoolkit.instance.HEAPU8.buffer, I3.camera, 16), this.marker_transform_mat = new Float64Array(this.artoolkit.instance.HEAPU8.buffer, I3.transform, 12), this.setProjectionNearPlane(0.1), this.setProjectionFarPlane(1e3), setTimeout(function() {
                  g3.dispatchEvent({ name: "load", target: g3 });
                }, 1), A5.abrupt("return", this);
              case 23:
              case "end":
                return A5.stop();
            }
          }, A4, this);
        })), function() {
          return Q2.apply(this, arguments);
        }) }, { key: "_initNFT", value: function() {
          this.artoolkit.setupAR2(this.id);
        } }, { key: "_copyImageToHeap", value: function(A4) {
          var I3;
          if (A4 || (A4 = this.image), A4.data) I3 = A4.data;
          else {
            if (this.ctx.save(), "portrait" === this.orientation) {
              this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
              var g3 = this.canvas.height / this.canvas.width, B3 = this.canvas.width * g3, C2 = this.canvas.height * g3, Q3 = (this.canvas.width - C2) / 2;
              this.ctx.drawImage(A4, Q3, 0, C2, B3);
            } else this.ctx.drawImage(A4, 0, 0, this.canvas.width, this.canvas.height);
            this.ctx.restore(), I3 = this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height).data;
          }
          if (this.videoLuma) for (var E3 = 0, i3 = 0; i3 < this.videoSize; i3++) {
            var o2 = I3[E3 + 0], D3 = I3[E3 + 1], a2 = I3[E3 + 2];
            this.videoLuma[i3] = o2 + o2 + o2 + a2 + D3 + D3 + D3 + D3 >> 3, E3 += 4;
          }
          return !!this.dataHeap && (this.dataHeap.set(I3), true);
        } }], [{ key: "initWithDimensions", value: (B2 = I2(t().mark(function I3(g3, B3, C2, Q3) {
          var E3;
          return t().wrap(function(I4) {
            for (; ; ) switch (I4.prev = I4.next) {
              case 0:
                return E3 = new A3(g3, B3, C2, Q3), I4.next = 3, E3._initialize();
              case 3:
                return I4.abrupt("return", I4.sent);
              case 4:
              case "end":
                return I4.stop();
            }
          }, I3);
        })), function(A4, I3, g3, C2) {
          return B2.apply(this, arguments);
        }) }, { key: "initWithImage", value: (g2 = I2(t().mark(function I3(g3, B3, C2) {
          var Q3, E3, i3;
          return t().wrap(function(I4) {
            for (; ; ) switch (I4.prev = I4.next) {
              case 0:
                return Q3 = g3.videoWidth || g3.width, E3 = g3.videoHeight || g3.height, I4.next = 4, A3.initWithDimensions(Q3, E3, B3, C2);
              case 4:
                return (i3 = I4.sent).image = g3, I4.abrupt("return", i3);
              case 7:
              case "end":
                return I4.stop();
            }
          }, I3);
        })), function(A4, I3, B3) {
          return g2.apply(this, arguments);
        }) }]), A3;
      }();
      const BI = { ARToolkit: _A, ARController: gI };
    })(), B.default;
  })());
})(ARToolkit$1);
var ARToolkitExports = ARToolkit$1.exports;
const jsartoolkit = /* @__PURE__ */ getDefaultExportFromCjs(ARToolkitExports);
const { ARToolkit } = jsartoolkit;
const MarkerControls = function(context, object3d, parameters) {
  var _this = this;
  ArBaseControls.call(this, object3d);
  this.context = context;
  this.parameters = {
    // size of the marker in meter
    size: 1,
    // type of marker - ['pattern', 'barcode', 'nft', 'unknown' ]
    type: "unknown",
    // url of the pattern - IIF type='pattern'
    patternUrl: null,
    // value of the barcode - IIF type='barcode'
    barcodeValue: null,
    // url of the descriptors of image - IIF type='nft'
    descriptorsUrl: null,
    // change matrix mode - [modelViewMatrix, cameraTransformMatrix]
    changeMatrixMode: "modelViewMatrix",
    // minimal confidence in the marke recognition - between [0, 1] - default to 1
    minConfidence: 0.6,
    // turn on/off camera smoothing
    smooth: false,
    // number of matrices to smooth tracking over, more = smoother but slower follow
    smoothCount: 5,
    // distance tolerance for smoothing, if smoothThreshold # of matrices are under tolerance, tracking will stay still
    smoothTolerance: 0.01,
    // threshold for smoothing, will keep still unless enough matrices are over tolerance
    smoothThreshold: 2
  };
  var possibleValues = ["pattern", "barcode", "nft", "unknown"];
  console.assert(
    possibleValues.indexOf(this.parameters.type) !== -1,
    "illegal value",
    this.parameters.type
  );
  var possibleValues = ["modelViewMatrix", "cameraTransformMatrix"];
  console.assert(
    possibleValues.indexOf(this.parameters.changeMatrixMode) !== -1,
    "illegal value",
    this.parameters.changeMatrixMode
  );
  this.object3d = object3d;
  this.object3d.matrixAutoUpdate = false;
  this.object3d.visible = false;
  setParameters(parameters);
  function setParameters(parameters2) {
    if (parameters2 === void 0) return;
    for (var key in parameters2) {
      var newValue = parameters2[key];
      if (newValue === void 0) {
        console.warn("ArMarkerControls: '" + key + "' parameter is undefined.");
        continue;
      }
      var currentValue = _this.parameters[key];
      if (currentValue === void 0) {
        console.warn("ArMarkerControls: '" + key + "' is not a property of this material.");
        continue;
      }
      _this.parameters[key] = newValue;
    }
  }
  if (this.parameters.smooth) {
    this.smoothMatrices = [];
  }
  context.addMarker(this);
  if (_this.context.parameters.trackingBackend === "artoolkit") {
    this._initArtoolkit();
  } else console.assert(false);
};
MarkerControls.prototype = Object.create(ArBaseControls.prototype);
MarkerControls.prototype.constructor = MarkerControls;
MarkerControls.prototype.dispose = function() {
  if (this.context && this.context.arController) {
    this.context.arController.removeEventListener("getMarker", this.onGetMarker);
  }
  this.context.removeMarker(this);
  this.object3d = null;
  this.smoothMatrices = [];
};
MarkerControls.prototype.updateWithModelViewMatrix = function(modelViewMatrix) {
  var markerObject3D = this.object3d;
  markerObject3D.visible = true;
  if (this.context.parameters.trackingBackend === "artoolkit") {
    var tmpMatrix = new THREE$1.Matrix4().copy(this.context._artoolkitProjectionAxisTransformMatrix);
    tmpMatrix.multiply(modelViewMatrix);
    modelViewMatrix.copy(tmpMatrix);
  } else {
    console.assert(false);
  }
  var markerAxisTransformMatrix = new THREE$1.Matrix4().makeRotationX(Math.PI / 2);
  modelViewMatrix.multiply(markerAxisTransformMatrix);
  var renderReqd = false;
  if (this.parameters.changeMatrixMode === "modelViewMatrix") {
    if (this.parameters.smooth) {
      var sum, i, j, averages, exceedsAverageTolerance = 0;
      this.smoothMatrices.push(modelViewMatrix.elements.slice());
      if (this.smoothMatrices.length < this.parameters.smoothCount + 1) {
        markerObject3D.matrix.copy(modelViewMatrix);
      } else {
        this.smoothMatrices.shift();
        averages = [];
        for (i in modelViewMatrix.elements) {
          sum = 0;
          for (j in this.smoothMatrices) {
            sum += this.smoothMatrices[j][i];
          }
          averages[i] = sum / this.parameters.smoothCount;
          if (Math.abs(averages[i] - modelViewMatrix.elements[i]) >= this.parameters.smoothTolerance) {
            exceedsAverageTolerance++;
          }
        }
        if (exceedsAverageTolerance >= this.parameters.smoothThreshold) {
          for (i in modelViewMatrix.elements) {
            modelViewMatrix.elements[i] = averages[i];
          }
          markerObject3D.matrix.copy(modelViewMatrix);
          renderReqd = true;
        }
      }
    } else {
      markerObject3D.matrix.copy(modelViewMatrix);
    }
  } else if (this.parameters.changeMatrixMode === "cameraTransformMatrix") {
    markerObject3D.matrix.copy(modelViewMatrix).invert();
  } else {
    console.assert(false);
  }
  markerObject3D.matrix.decompose(
    markerObject3D.position,
    markerObject3D.quaternion,
    markerObject3D.scale
  );
  this.dispatchEvent({ type: "markerFound" });
  return renderReqd;
};
MarkerControls.prototype.name = function() {
  var name = "";
  name += this.parameters.type;
  if (this.parameters.type === "pattern") {
    var url = this.parameters.patternUrl;
    var basename = url.replace(/^.*\//g, "");
    name += " - " + basename;
  } else if (this.parameters.type === "barcode") {
    name += " - " + this.parameters.barcodeValue;
  } else if (this.parameters.type === "nft") {
    var url = this.parameters.descriptorsUrl;
    var basename = url.replace(/^.*\//g, "");
    name += " - " + basename;
  } else {
    console.assert(false, "no .name() implemented for this marker controls");
  }
  return name;
};
MarkerControls.prototype._initArtoolkit = function() {
  var _this = this;
  var artoolkitMarkerId = null;
  var delayedInitTimerId = setInterval(() => {
    var arController = _this.context.arController;
    if (arController === null) return;
    clearInterval(delayedInitTimerId);
    delayedInitTimerId = null;
    postInit();
  }, 1e3 / 50);
  return;
  function postInit() {
    var arController = _this.context.arController;
    console.assert(arController !== null);
    if (_this.parameters.type === "pattern") {
      arController.loadMarker(_this.parameters.patternUrl).then(function(markerId) {
        artoolkitMarkerId = markerId;
        arController.trackPatternMarkerId(artoolkitMarkerId, _this.parameters.size);
      });
    } else if (_this.parameters.type === "barcode") {
      artoolkitMarkerId = _this.parameters.barcodeValue;
      arController.trackBarcodeMarkerId(artoolkitMarkerId, _this.parameters.size);
    } else if (_this.parameters.type === "nft") {
      handleNFT(_this.parameters.descriptorsUrl, arController);
    } else if (_this.parameters.type === "unknown") {
      artoolkitMarkerId = null;
    } else {
      console.log(false, "invalid marker type", _this.parameters.type);
    }
    arController.addEventListener("getMarker", function(event) {
      if (event.data.type === ARToolkit.PATTERN_MARKER && _this.parameters.type === "pattern") {
        if (artoolkitMarkerId === null) return;
        if (event.data.marker.idPatt === artoolkitMarkerId) onMarkerFound(event);
      } else if (event.data.type === ARToolkit.BARCODE_MARKER && _this.parameters.type === "barcode") {
        if (artoolkitMarkerId === null) return;
        if (event.data.marker.idMatrix === artoolkitMarkerId) onMarkerFound(event);
      } else if (event.data.type === ARToolkit.UNKNOWN_MARKER && _this.parameters.type === "unknown") {
        onMarkerFound(event);
      }
    });
  }
  function setMatrix(matrix, value) {
    var array = [];
    for (var key in value) {
      array[key] = value[key];
    }
    if (typeof matrix.elements.set === "function") {
      matrix.elements.set(array);
    } else {
      matrix.elements = [].slice.call(array);
    }
  }
  function handleNFT(descriptorsUrl, arController) {
    var worker = new WorkerWrapper();
    window.addEventListener("arjs-video-loaded", function(ev) {
      var video = ev.detail.component;
      var vw = video.clientWidth;
      var vh = video.clientHeight;
      var pscale = 320 / Math.max(vw, vh / 3 * 4);
      const w = vw * pscale;
      const h = vh * pscale;
      const pw = Math.max(w, h / 3 * 4);
      const ph = Math.max(h, w / 4 * 3);
      const ox = (pw - w) / 2;
      const oy = (ph - h) / 2;
      arController.canvas.style.clientWidth = pw + "px";
      arController.canvas.style.clientHeight = ph + "px";
      arController.canvas.width = pw;
      arController.canvas.height = ph;
      var context_process = arController.canvas.getContext("2d");
      function process2() {
        context_process.fillStyle = "black";
        context_process.fillRect(0, 0, pw, ph);
        context_process.drawImage(video, 0, 0, vw, vh, ox, oy, w, h);
        var imageData = context_process.getImageData(0, 0, pw, ph);
        worker.postMessage({ type: "process", imagedata: imageData }, [imageData.data.buffer]);
      }
      worker.postMessage({
        type: "init",
        pw,
        ph,
        marker: descriptorsUrl,
        param: arController.cameraParam
      });
      worker.onmessage = function(ev2) {
        if (ev2 && ev2.data && ev2.data.type === "endLoading") {
          var loader = document.querySelector(".arjs-loader");
          if (loader) {
            loader.remove();
          }
          var endLoadingEvent = new Event("arjs-nft-loaded");
          window.dispatchEvent(endLoadingEvent);
        }
        if (ev2 && ev2.data && ev2.data.type === "loaded") {
          var proj = JSON.parse(ev2.data.proj);
          var ratioW = pw / w;
          var ratioH = ph / h;
          proj[0] *= ratioW;
          proj[4] *= ratioW;
          proj[8] *= ratioW;
          proj[12] *= ratioW;
          proj[1] *= ratioH;
          proj[5] *= ratioH;
          proj[9] *= ratioH;
          proj[13] *= ratioH;
          setMatrix(_this.object3d.matrix, proj);
        }
        if (ev2 && ev2.data && ev2.data.type === "markerInfos") {
          var nft = JSON.parse(ev2.data.marker);
          var nftEvent = new CustomEvent("arjs-nft-init-data", {
            detail: { dpi: nft.dpi, width: nft.width, height: nft.height }
          });
          window.dispatchEvent(nftEvent);
        }
        if (ev2 && ev2.data && ev2.data.type === "found") {
          var matrix = JSON.parse(ev2.data.matrix);
          onMarkerFound({
            data: {
              type: ARToolkit.NFT_MARKER,
              matrix,
              msg: ev2.data.type
            }
          });
          _this.context.arController.showObject = true;
        } else {
          _this.context.arController.showObject = false;
        }
        process2();
      };
    });
  }
  function onMarkerFound(event) {
    if (event.data.type === ARToolkit.PATTERN_MARKER && event.data.marker.cfPatt < _this.parameters.minConfidence)
      return;
    if (event.data.type === ARToolkit.BARCODE_MARKER && event.data.marker.cfMatrix < _this.parameters.minConfidence)
      return;
    var modelViewMatrix = new THREE$1.Matrix4().fromArray(event.data.matrix);
    _this.updateWithModelViewMatrix(modelViewMatrix);
  }
};
const ArMarkerHelper = function(markerControls) {
  this.object3d = new THREE$1.Group();
  var mesh = new THREE$1.AxesHelper();
  this.object3d.add(mesh);
  var text = markerControls.id;
  var canvas = document.createElement("canvas");
  canvas.width = 64;
  canvas.height = 64;
  var context = canvas.getContext("2d");
  var texture = new THREE$1.CanvasTexture(canvas);
  context.font = "48px monospace";
  context.fillStyle = "rgba(192,192,255, 0.5)";
  context.fillRect(0, 0, canvas.width, canvas.height);
  context.fillStyle = "darkblue";
  context.fillText(text, canvas.width / 4, 3 * canvas.height / 4);
  texture.needsUpdate = true;
  var geometry = new THREE$1.PlaneGeometry(1, 1);
  var material = new THREE$1.MeshBasicMaterial({
    map: texture,
    transparent: true
  });
  var mesh = new THREE$1.Mesh(geometry, material);
  mesh.rotation.x = -Math.PI / 2;
  this.object3d.add(mesh);
};
const ArSmoothedControls = function(object3d, parameters) {
  var _this = this;
  ArBaseControls.call(this, object3d);
  this.object3d.visible = false;
  this._lastLerpStepAt = null;
  this._visibleStartedAt = null;
  this._unvisibleStartedAt = null;
  parameters = parameters || {};
  this.parameters = {
    // lerp coeficient for the position - between [0,1] - default to 1
    lerpPosition: 0.8,
    // lerp coeficient for the quaternion - between [0,1] - default to 1
    lerpQuaternion: 0.2,
    // lerp coeficient for the scale - between [0,1] - default to 1
    lerpScale: 0.7,
    // delay for lerp fixed steps - in seconds - default to 1/120
    lerpStepDelay: 1 / 60,
    // minimum delay the sub-control must be visible before this controls become visible - default to 0 seconds
    minVisibleDelay: 0,
    // minimum delay the sub-control must be unvisible before this controls become unvisible - default to 0 seconds
    minUnvisibleDelay: 0.2
  };
  setParameters(parameters);
  function setParameters(parameters2) {
    if (parameters2 === void 0) return;
    for (var key in parameters2) {
      var newValue = parameters2[key];
      if (newValue === void 0) {
        console.warn(
          "ArSmoothedControls: '" + key + "' parameter is undefined."
        );
        continue;
      }
      var currentValue = _this.parameters[key];
      if (currentValue === void 0) {
        console.warn(
          "ArSmoothedControls: '" + key + "' is not a property of this material."
        );
        continue;
      }
      _this.parameters[key] = newValue;
    }
  }
};
ArSmoothedControls.prototype = Object.create(ArBaseControls.prototype);
ArSmoothedControls.prototype.constructor = ArSmoothedControls;
ArSmoothedControls.prototype.update = function(targetObject3d) {
  var object3d = this.object3d;
  var parameters = this.parameters;
  var wasVisible = object3d.visible;
  var present = performance.now() / 1e3;
  if (targetObject3d.visible === false) this._visibleStartedAt = null;
  if (targetObject3d.visible === true) this._unvisibleStartedAt = null;
  if (targetObject3d.visible === true && this._visibleStartedAt === null)
    this._visibleStartedAt = present;
  if (targetObject3d.visible === false && this._unvisibleStartedAt === null)
    this._unvisibleStartedAt = present;
  if (wasVisible === false && targetObject3d.visible === true) {
    var visibleFor = present - this._visibleStartedAt;
    if (visibleFor >= this.parameters.minVisibleDelay) {
      object3d.visible = true;
      snapDirectlyToTarget();
    }
  }
  if (wasVisible === true && targetObject3d.visible === false) {
    var unvisibleFor = present - this._unvisibleStartedAt;
    if (unvisibleFor >= this.parameters.minUnvisibleDelay) {
      object3d.visible = false;
    }
  }
  if (this._lastLerpStepAt === null) {
    applyOneSlerpStep();
    this._lastLerpStepAt = present;
  } else {
    var nStepsToDo = Math.floor(
      (present - this._lastLerpStepAt) / this.parameters.lerpStepDelay
    );
    for (var i = 0; i < nStepsToDo; i++) {
      applyOneSlerpStep();
      this._lastLerpStepAt += this.parameters.lerpStepDelay;
    }
  }
  this.object3d.updateMatrix();
  if (wasVisible === false && object3d.visible === true) {
    this.dispatchEvent({ type: "becameVisible" });
  }
  if (wasVisible === true && object3d.visible === false) {
    this.dispatchEvent({ type: "becameUnVisible" });
  }
  return;
  function snapDirectlyToTarget() {
    object3d.position.copy(targetObject3d.position);
    object3d.quaternion.copy(targetObject3d.quaternion);
    object3d.scale.copy(targetObject3d.scale);
  }
  function applyOneSlerpStep() {
    object3d.position.lerp(targetObject3d.position, parameters.lerpPosition);
    object3d.quaternion.slerp(
      targetObject3d.quaternion,
      parameters.lerpQuaternion
    );
    object3d.scale.lerp(targetObject3d.scale, parameters.lerpScale);
  }
};
const { ARController } = jsartoolkit;
const Context = function(parameters) {
  var _this = this;
  _this._updatedAt = null;
  this.parameters = {
    // AR backend - ['artoolkit']
    trackingBackend: "artoolkit",
    // debug - true if one should display artoolkit debug canvas, false otherwise
    debug: false,
    // the mode of detection - ['color', 'color_and_matrix', 'mono', 'mono_and_matrix']
    detectionMode: "mono",
    // type of matrix code - valid iif detectionMode end with 'matrix' - [3x3, 3x3_HAMMING63, 3x3_PARITY65, 4x4, 4x4_BCH_13_9_3, 4x4_BCH_13_5_5]
    matrixCodeType: "3x3",
    // url of the camera parameters
    cameraParametersUrl: Context.baseURL + "../data/data/camera_para.dat",
    // tune the maximum rate of pose detection in the source image
    maxDetectionRate: 60,
    // resolution of at which we detect pose in the source image
    canvasWidth: 640,
    canvasHeight: 480,
    // the patternRatio inside the artoolkit marker - artoolkit only
    patternRatio: 0.5,
    // Labeling mode for markers - ['black_region', 'white_region']
    // black_region: Black bordered markers on a white background, white_region: White bordered markers on a black background
    labelingMode: "black_region",
    // enable image smoothing or not for canvas copy - default to true
    // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/imageSmoothingEnabled
    imageSmoothingEnabled: false
  };
  console.assert(
    ["artoolkit"].indexOf(this.parameters.trackingBackend) !== -1,
    "invalid parameter trackingBackend",
    this.parameters.trackingBackend
  );
  console.assert(
    ["color", "color_and_matrix", "mono", "mono_and_matrix"].indexOf(
      this.parameters.detectionMode
    ) !== -1,
    "invalid parameter detectionMode",
    this.parameters.detectionMode
  );
  console.assert(
    ["black_region", "white_region"].indexOf(this.parameters.labelingMode) !== -1,
    "invalid parameter labelingMode",
    this.parameters.labelingMode
  );
  this.arController = null;
  _this.initialized = false;
  this._arMarkersControls = [];
  setParameters(parameters);
  function setParameters(parameters2) {
    if (parameters2 === void 0) return;
    for (var key in parameters2) {
      var newValue = parameters2[key];
      if (newValue === void 0) {
        console.warn("Context: '" + key + "' parameter is undefined.");
        continue;
      }
      var currentValue = _this.parameters[key];
      if (currentValue === void 0) {
        console.warn("Context: '" + key + "' is not a property of this material.");
        continue;
      }
      _this.parameters[key] = newValue;
    }
  }
};
Context.prototype.dispatchEvent = THREE$1.EventDispatcher.prototype.dispatchEvent;
Context.prototype.addEventListener = THREE$1.EventDispatcher.prototype.addEventListener;
Context.prototype.hasEventListener = THREE$1.EventDispatcher.prototype.hasEventListener;
Context.prototype.removeEventListener = THREE$1.EventDispatcher.prototype.removeEventListener;
Context.baseURL = "https://ar-js-org.github.io/AR.js/three.js/";
Context.REVISION = "3.4.5";
Context.createDefaultCamera = function(trackingBackend) {
  console.assert(false, "use ARjs.Utils.createDefaultCamera instead");
  if (trackingBackend === "artoolkit") {
    var camera = new THREE$1.Camera();
  } else console.assert(false);
  return camera;
};
Context.prototype.init = function(onCompleted) {
  var _this = this;
  if (this.parameters.trackingBackend === "artoolkit") {
    this._initArtoolkit(done);
  } else console.assert(false);
  return;
  function done() {
    _this.dispatchEvent({
      type: "initialized"
    });
    _this.initialized = true;
    onCompleted && onCompleted();
  }
};
Context.prototype.update = function(srcElement) {
  if (this.parameters.trackingBackend === "artoolkit" && this.arController === null) return false;
  var present = performance.now();
  if (this._updatedAt !== null && present - this._updatedAt < 1e3 / this.parameters.maxDetectionRate) {
    return false;
  }
  this._updatedAt = present;
  var prevVisibleMarkers = [];
  this._arMarkersControls.forEach(function(markerControls) {
    if (markerControls.object3d.visible) {
      prevVisibleMarkers.push(markerControls);
    }
    if (!markerControls.context.arController.showObject) {
      markerControls.object3d.visible = false;
    }
  });
  if (this.parameters.trackingBackend === "artoolkit") {
    this._updateArtoolkit(srcElement);
  } else {
    console.assert(false);
  }
  this.dispatchEvent({
    type: "sourceProcessed"
  });
  this._arMarkersControls.forEach(function(markerControls) {
    var wasVisible = prevVisibleMarkers.includes(markerControls);
    var isVisible = markerControls.object3d.visible;
    if (isVisible === true && wasVisible === false) {
      window.dispatchEvent(
        new CustomEvent("markerFound", {
          detail: markerControls
        })
      );
    } else if (isVisible === false && wasVisible === true) {
      window.dispatchEvent(
        new CustomEvent("markerLost", {
          detail: markerControls
        })
      );
    }
  });
  return true;
};
Context.prototype.addMarker = function(arMarkerControls) {
  console.assert(arMarkerControls instanceof MarkerControls);
  this._arMarkersControls.push(arMarkerControls);
};
Context.prototype.removeMarker = function(arMarkerControls) {
  console.assert(arMarkerControls instanceof MarkerControls);
  var index = this._arMarkersControls.indexOf(arMarkerControls);
  if (index < 0) {
    return;
  }
  this._arMarkersControls.splice(index, 1);
};
Context.prototype._initArtoolkit = function(onCompleted) {
  var _this = this;
  this._artoolkitProjectionAxisTransformMatrix = new THREE$1.Matrix4();
  this._artoolkitProjectionAxisTransformMatrix.multiply(new THREE$1.Matrix4().makeRotationY(Math.PI));
  this._artoolkitProjectionAxisTransformMatrix.multiply(new THREE$1.Matrix4().makeRotationZ(Math.PI));
  ARController.initWithDimensions(
    _this.parameters.canvasWidth,
    _this.parameters.canvasHeight,
    _this.parameters.cameraParametersUrl
  ).then((arController) => {
    _this.arController = arController;
    arController.ctx.mozImageSmoothingEnabled = _this.parameters.imageSmoothingEnabled;
    arController.ctx.webkitImageSmoothingEnabled = _this.parameters.imageSmoothingEnabled;
    arController.ctx.msImageSmoothingEnabled = _this.parameters.imageSmoothingEnabled;
    arController.ctx.imageSmoothingEnabled = _this.parameters.imageSmoothingEnabled;
    if (_this.parameters.debug === true) {
      arController.debugSetup();
      arController.canvas.style.position = "absolute";
      arController.canvas.style.top = "0px";
      arController.canvas.style.opacity = "0.6";
      arController.canvas.style.pointerEvents = "none";
      arController.canvas.style.zIndex = "-1";
    }
    var detectionModes = {
      color: arController.artoolkit.AR_TEMPLATE_MATCHING_COLOR,
      color_and_matrix: arController.artoolkit.AR_TEMPLATE_MATCHING_COLOR_AND_MATRIX,
      mono: arController.artoolkit.AR_TEMPLATE_MATCHING_MONO,
      mono_and_matrix: arController.artoolkit.AR_TEMPLATE_MATCHING_MONO_AND_MATRIX
    };
    var detectionMode = detectionModes[_this.parameters.detectionMode];
    console.assert(detectionMode !== void 0);
    arController.setPatternDetectionMode(detectionMode);
    var matrixCodeTypes = {
      "3x3": arController.artoolkit.AR_MATRIX_CODE_3x3,
      "3x3_HAMMING63": arController.artoolkit.AR_MATRIX_CODE_3x3_HAMMING63,
      "3x3_PARITY65": arController.artoolkit.AR_MATRIX_CODE_3x3_PARITY65,
      "4x4": arController.artoolkit.AR_MATRIX_CODE_4x4,
      "4x4_BCH_13_9_3": arController.artoolkit.AR_MATRIX_CODE_4x4_BCH_13_9_3,
      "4x4_BCH_13_5_5": arController.artoolkit.AR_MATRIX_CODE_4x4_BCH_13_5_5,
      "5x5_BCH_22_12_5": arController.artoolkit.AR_MATRIX_CODE_5x5_BCH_22_12_5,
      "5x5_BCH_22_7_7": arController.artoolkit.AR_MATRIX_CODE_5x5_BCH_22_7_7,
      "5x5": arController.artoolkit.AR_MATRIX_CODE_5x5,
      "6x6": arController.artoolkit.AR_MATRIX_CODE_6x6
    };
    var matrixCodeType = matrixCodeTypes[_this.parameters.matrixCodeType];
    console.assert(matrixCodeType !== void 0);
    arController.setMatrixCodeType(matrixCodeType);
    arController.setPattRatio(_this.parameters.patternRatio);
    var labelingModeTypes = {
      black_region: arController.artoolkit.AR_LABELING_BLACK_REGION,
      white_region: arController.artoolkit.AR_LABELING_WHITE_REGION
    };
    var labelingModeType = labelingModeTypes[_this.parameters.labelingMode];
    console.assert(labelingModeType !== void 0);
    arController.setLabelingMode(labelingModeType);
    onCompleted();
  });
  return this;
};
Context.prototype.getProjectionMatrix = function() {
  console.assert(this.parameters.trackingBackend === "artoolkit");
  console.assert(this.arController, "arController MUST be initialized to call this function");
  var projectionMatrixArr = this.arController.getCameraMatrix();
  var projectionMatrix = new THREE$1.Matrix4().fromArray(projectionMatrixArr);
  return projectionMatrix;
};
Context.prototype._updateArtoolkit = function(srcElement) {
  this.arController.process(srcElement);
};
Context.prototype.dispose = function() {
  this.initialized = false;
  this._arMarkersControls.forEach(function(markerControls) {
    console.assert(markerControls instanceof MarkerControls);
    markerControls.dispose();
  });
  this._arMarkersControls = [];
  if (this.arController && this.arController.cameraParam && this.arController.cameraParam.dispose) {
    this.arController.cameraParam.dispose();
  }
  if (this.arController && this.arController.dispose) {
    this.arController.dispose();
  }
  this.arController = null;
  this._artoolkitProjectionAxisTransformMatrix = null;
};
const Utils = {};
Utils.createDefaultCamera = function(trackingMethod) {
  var trackingBackend = this.parseTrackingMethod(trackingMethod).trackingBackend;
  if (trackingBackend === "artoolkit") {
    var camera = new THREE$1.Camera();
  } else console.assert(false, "unknown trackingBackend: " + trackingBackend);
  return camera;
};
Utils.parseTrackingMethod = function(trackingMethod) {
  if (trackingMethod === "best") {
    trackingMethod = "area-artoolkit";
  }
  if (trackingMethod.startsWith("area-")) {
    return {
      trackingBackend: trackingMethod.replace("area-", ""),
      markersAreaEnabled: true
    };
  } else {
    return {
      trackingBackend: trackingMethod,
      markersAreaEnabled: false
    };
  }
};
const Profile = function() {
  this.reset();
  this.performance("default");
};
Profile.prototype._guessPerformanceLabel = function() {
  var isMobile = navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i) ? true : false;
  if (isMobile === true) {
    return "phone-normal";
  }
  return "desktop-normal";
};
Profile.prototype.reset = function() {
  this.sourceParameters = {
    // to read from the webcam
    sourceType: "webcam"
  };
  this.contextParameters = {
    cameraParametersUrl: Context.baseURL + "../data/data/camera_para.dat",
    // TODO dependent of build?
    detectionMode: "mono"
  };
  this.defaultMarkerParameters = {
    type: "pattern",
    patternUrl: Context.baseURL + "../data/data/patt.hiro",
    // TODO dependent of build?
    changeMatrixMode: "modelViewMatrix"
  };
  return this;
};
Profile.prototype.performance = function(label) {
  if (label === "default") {
    label = this._guessPerformanceLabel();
  }
  if (label === "desktop-fast") {
    this.contextParameters.canvasWidth = 640 * 3;
    this.contextParameters.canvasHeight = 480 * 3;
    this.contextParameters.maxDetectionRate = 30;
  } else if (label === "desktop-normal") {
    this.contextParameters.canvasWidth = 640;
    this.contextParameters.canvasHeight = 480;
    this.contextParameters.maxDetectionRate = 60;
  } else if (label === "phone-normal") {
    this.contextParameters.canvasWidth = 80 * 4;
    this.contextParameters.canvasHeight = 60 * 4;
    this.contextParameters.maxDetectionRate = 30;
  } else if (label === "phone-slow") {
    this.contextParameters.canvasWidth = 80 * 3;
    this.contextParameters.canvasHeight = 60 * 3;
    this.contextParameters.maxDetectionRate = 30;
  } else {
    console.assert(false, "unknonwn label " + label);
  }
  return this;
};
Profile.prototype.defaultMarker = function(trackingBackend) {
  trackingBackend = trackingBackend || this.contextParameters.trackingBackend;
  if (trackingBackend === "artoolkit") {
    this.contextParameters.detectionMode = "mono";
    this.defaultMarkerParameters.type = "pattern";
    this.defaultMarkerParameters.patternUrl = Context.baseURL + "../data/data/patt.hiro";
  } else console.assert(false);
  return this;
};
Profile.prototype.sourceWebcam = function() {
  this.sourceParameters.sourceType = "webcam";
  delete this.sourceParameters.sourceUrl;
  return this;
};
Profile.prototype.sourceVideo = function(url) {
  this.sourceParameters.sourceType = "video";
  this.sourceParameters.sourceUrl = url;
  return this;
};
Profile.prototype.sourceImage = function(url) {
  this.sourceParameters.sourceType = "image";
  this.sourceParameters.sourceUrl = url;
  return this;
};
Profile.prototype.trackingBackend = function(trackingBackend) {
  console.warn(
    "stop profile.trackingBackend() obsolete function. use .trackingMethod instead"
  );
  this.contextParameters.trackingBackend = trackingBackend;
  return this;
};
Profile.prototype.changeMatrixMode = function(changeMatrixMode) {
  this.defaultMarkerParameters.changeMatrixMode = changeMatrixMode;
  return this;
};
Profile.prototype.trackingMethod = function(trackingMethod) {
  var data = Utils.parseTrackingMethod(trackingMethod);
  this.defaultMarkerParameters.markersAreaEnabled = data.markersAreaEnabled;
  this.contextParameters.trackingBackend = data.trackingBackend;
  return this;
};
Profile.prototype.checkIfValid = function() {
  return this;
};
const Source = function(parameters) {
  var _this = this;
  this.ready = false;
  this.domElement = null;
  this.parameters = {
    // type of source - ['webcam', 'image', 'video']
    sourceType: "webcam",
    // url of the source - valid if sourceType = image|video
    sourceUrl: null,
    // Device id of the camera to use (optional)
    deviceId: null,
    // resolution of at which we initialize in the source image
    sourceWidth: 640,
    sourceHeight: 480,
    // resolution displayed for the source
    displayWidth: 640,
    displayHeight: 480
  };
  setParameters(parameters);
  function setParameters(parameters2) {
    if (parameters2 === void 0) return;
    for (var key in parameters2) {
      var newValue = parameters2[key];
      if (newValue === void 0) {
        console.warn("ArToolkitSource: '" + key + "' parameter is undefined.");
        continue;
      }
      var currentValue = _this.parameters[key];
      if (currentValue === void 0) {
        console.warn(
          "ArToolkitSource: '" + key + "' is not a property of this material."
        );
        continue;
      }
      _this.parameters[key] = newValue;
    }
  }
  this.onInitialClick = function() {
    if (this.domElement && this.domElement.play) {
      this.domElement.play().then(() => {
      });
    }
  };
};
Source.prototype.init = function(onReady, onError) {
  var _this = this;
  if (this.parameters.sourceType === "image") {
    var domElement = this._initSourceImage(onSourceReady, onError);
  } else if (this.parameters.sourceType === "video") {
    var domElement = this._initSourceVideo(onSourceReady, onError);
  } else if (this.parameters.sourceType === "webcam") {
    var domElement = this._initSourceWebcam(onSourceReady, onError);
  } else {
    console.assert(false);
  }
  this.domElement = domElement;
  this.domElement.style.position = "absolute";
  this.domElement.style.top = "0px";
  this.domElement.style.left = "0px";
  this.domElement.style.zIndex = "-2";
  this.domElement.setAttribute("id", "arjs-video");
  return this;
  function onSourceReady() {
    if (!_this.domElement) {
      return;
    }
    document.body.appendChild(_this.domElement);
    window.dispatchEvent(
      new CustomEvent("arjs-video-loaded", {
        detail: {
          component: document.querySelector("#arjs-video")
        }
      })
    );
    _this.ready = true;
    onReady && onReady();
  }
};
Source.prototype._initSourceImage = function(onReady) {
  var domElement = document.createElement("img");
  domElement.src = this.parameters.sourceUrl;
  domElement.width = this.parameters.sourceWidth;
  domElement.height = this.parameters.sourceHeight;
  domElement.style.width = this.parameters.displayWidth + "px";
  domElement.style.height = this.parameters.displayHeight + "px";
  domElement.onload = onReady;
  return domElement;
};
Source.prototype._initSourceVideo = function(onReady) {
  var domElement = document.createElement("video");
  domElement.src = this.parameters.sourceUrl;
  domElement.style.objectFit = "initial";
  domElement.autoplay = true;
  domElement.webkitPlaysinline = true;
  domElement.controls = false;
  domElement.loop = true;
  domElement.muted = true;
  document.body.addEventListener("click", this.onInitialClick, { once: true });
  domElement.width = this.parameters.sourceWidth;
  domElement.height = this.parameters.sourceHeight;
  domElement.style.width = this.parameters.displayWidth + "px";
  domElement.style.height = this.parameters.displayHeight + "px";
  domElement.onloadeddata = onReady;
  return domElement;
};
Source.prototype._initSourceWebcam = function(onReady, onError) {
  var _this = this;
  onError = onError || function(error) {
    var event = new CustomEvent("camera-error", { error });
    window.dispatchEvent(event);
    setTimeout(() => {
      if (!document.getElementById("error-popup")) {
        var errorPopup = document.createElement("div");
        errorPopup.innerHTML = "Webcam Error\nName: " + error.name + "\nMessage: " + error.message;
        errorPopup.setAttribute("id", "error-popup");
        document.body.appendChild(errorPopup);
      }
    }, 1e3);
  };
  var domElement = document.createElement("video");
  domElement.setAttribute("autoplay", "");
  domElement.setAttribute("muted", "");
  domElement.setAttribute("playsinline", "");
  domElement.style.width = this.parameters.displayWidth + "px";
  domElement.style.height = this.parameters.displayHeight + "px";
  if (navigator.mediaDevices === void 0 || navigator.mediaDevices.enumerateDevices === void 0 || navigator.mediaDevices.getUserMedia === void 0) {
    if (navigator.mediaDevices === void 0)
      var fctName = "navigator.mediaDevices";
    else if (navigator.mediaDevices.enumerateDevices === void 0)
      var fctName = "navigator.mediaDevices.enumerateDevices";
    else if (navigator.mediaDevices.getUserMedia === void 0)
      var fctName = "navigator.mediaDevices.getUserMedia";
    else console.assert(false);
    onError({
      name: "",
      message: "WebRTC issue-! " + fctName + " not present in your browser"
    });
    return null;
  }
  navigator.mediaDevices.enumerateDevices().then(function(devices) {
    var userMediaConstraints = {
      audio: false,
      video: {
        facingMode: "environment",
        width: {
          ideal: _this.parameters.sourceWidth
          // min: 1024,
          // max: 1920
        },
        height: {
          ideal: _this.parameters.sourceHeight
          // min: 776,
          // max: 1080
        }
      }
    };
    if (null !== _this.parameters.deviceId) {
      userMediaConstraints.video.deviceId = {
        exact: _this.parameters.deviceId
      };
    }
    navigator.mediaDevices.getUserMedia(userMediaConstraints).then(function success(stream) {
      domElement.srcObject = stream;
      var event = new CustomEvent("camera-init", { stream });
      window.dispatchEvent(event);
      document.body.addEventListener("click", _this.onInitialClick, {
        once: true
      });
      onReady();
    }).catch(function(error) {
      onError({
        name: error.name,
        message: error.message
      });
    });
  }).catch(function(error) {
    onError({
      message: error.message
    });
  });
  return domElement;
};
Source.prototype.dispose = function() {
  this.ready = false;
  switch (this.parameters.sourceType) {
    case "image":
      this._disposeSourceImage();
      break;
    case "video":
      this._disposeSourceVideo();
      break;
    case "webcam":
      this._disposeSourceWebcam();
      break;
  }
  this.domElement = null;
  document.body.removeEventListener("click", this.onInitialClick, {
    once: true
  });
};
Source.prototype._disposeSourceImage = function() {
  var domElement = document.querySelector("#arjs-video");
  if (!domElement) {
    return;
  }
  domElement.remove();
};
Source.prototype._disposeSourceVideo = function() {
  var domElement = document.querySelector("#arjs-video");
  if (!domElement) {
    return;
  }
  domElement.pause();
  domElement.removeAttribute("src");
  domElement.load();
  domElement.remove();
};
Source.prototype._disposeSourceWebcam = function() {
  var domElement = document.querySelector("#arjs-video");
  if (!domElement) {
    return;
  }
  if (domElement.srcObject && domElement.srcObject.getTracks) {
    domElement.srcObject.getTracks().map((track) => track.stop());
  }
  domElement.remove();
};
Source.prototype.hasMobileTorch = function() {
  var stream = arToolkitSource.domElement.srcObject;
  if (stream instanceof MediaStream === false) return false;
  if (this._currentTorchStatus === void 0) {
    this._currentTorchStatus = false;
  }
  var videoTrack = stream.getVideoTracks()[0];
  if (videoTrack.getCapabilities === void 0) return false;
  var capabilities = videoTrack.getCapabilities();
  return capabilities.torch ? true : false;
};
Source.prototype.toggleMobileTorch = function() {
  console.assert(this.hasMobileTorch() === true);
  var stream = arToolkitSource.domElement.srcObject;
  if (stream instanceof MediaStream === false) {
    if (!document.getElementById("error-popup")) {
      var errorPopup = document.createElement("div");
      errorPopup.innerHTML = "enabling mobile torch is available only on webcam";
      errorPopup.setAttribute("id", "error-popup");
      document.body.appendChild(errorPopup);
    }
    return;
  }
  if (this._currentTorchStatus === void 0) {
    this._currentTorchStatus = false;
  }
  var videoTrack = stream.getVideoTracks()[0];
  var capabilities = videoTrack.getCapabilities();
  if (!capabilities.torch) {
    if (!document.getElementById("error-popup")) {
      var errorPopup = document.createElement("div");
      errorPopup.innerHTML = "no mobile torch is available on your camera";
      errorPopup.setAttribute("id", "error-popup");
      document.body.appendChild(errorPopup);
    }
    return;
  }
  this._currentTorchStatus = this._currentTorchStatus === false ? true : false;
  videoTrack.applyConstraints({
    advanced: [
      {
        torch: this._currentTorchStatus
      }
    ]
  }).catch(function(error) {
    console.log(error);
  });
};
Source.prototype.domElementWidth = function() {
  return parseInt(this.domElement.style.width);
};
Source.prototype.domElementHeight = function() {
  return parseInt(this.domElement.style.height);
};
Source.prototype.onResizeElement = function() {
  var screenWidth = window.innerWidth;
  var screenHeight = window.innerHeight;
  console.assert(arguments.length === 0);
  if (this.domElement.nodeName === "IMG") {
    var sourceWidth = this.domElement.naturalWidth;
    var sourceHeight = this.domElement.naturalHeight;
  } else if (this.domElement.nodeName === "VIDEO") {
    var sourceWidth = this.domElement.videoWidth;
    var sourceHeight = this.domElement.videoHeight;
  } else {
    console.assert(false);
  }
  var sourceAspect = sourceWidth / sourceHeight;
  var screenAspect = screenWidth / screenHeight;
  if (screenAspect < sourceAspect) {
    var newWidth = sourceAspect * screenHeight;
    this.domElement.style.width = newWidth + "px";
    this.domElement.style.marginLeft = -(newWidth - screenWidth) / 2 + "px";
    this.domElement.style.height = screenHeight + "px";
    this.domElement.style.marginTop = "0px";
  } else {
    var newHeight = 1 / (sourceAspect / screenWidth);
    this.domElement.style.height = newHeight + "px";
    this.domElement.style.marginTop = -(newHeight - screenHeight) / 2 + "px";
    this.domElement.style.width = screenWidth + "px";
    this.domElement.style.marginLeft = "0px";
  }
};
Source.prototype.copyElementSizeTo = function(otherElement) {
  if (window.innerWidth > window.innerHeight) {
    otherElement.style.width = this.domElement.style.width;
    otherElement.style.height = this.domElement.style.height;
    otherElement.style.marginLeft = this.domElement.style.marginLeft;
    otherElement.style.marginTop = this.domElement.style.marginTop;
  } else {
    otherElement.style.height = this.domElement.style.height;
    otherElement.style.width = parseInt(otherElement.style.height) * 4 / 3 + "px";
    otherElement.style.marginLeft = (window.innerWidth - parseInt(otherElement.style.width)) / 2 + "px";
    otherElement.style.marginTop = 0;
  }
};
Source.prototype.copySizeTo = function() {
  console.warn(
    "obsolete function arToolkitSource.copySizeTo. Use arToolkitSource.copyElementSizeTo"
  );
  this.copyElementSizeTo.apply(this, arguments);
};
Source.prototype.onResize = function(arToolkitContext, renderer, camera) {
  if (arguments.length !== 3) {
    console.warn(
      "obsolete function arToolkitSource.onResize. Use arToolkitSource.onResizeElement"
    );
    return this.onResizeElement.apply(this, arguments);
  }
  var trackingBackend = arToolkitContext.parameters.trackingBackend;
  if (trackingBackend === "artoolkit") {
    this.onResizeElement();
    var isAframe = renderer.domElement.dataset.aframeCanvas ? true : false;
    if (isAframe === false) {
      this.copyElementSizeTo(renderer.domElement);
    }
    if (arToolkitContext.arController !== null) {
      this.copyElementSizeTo(arToolkitContext.arController.canvas);
    }
  } else console.assert(false, "unhandled trackingBackend " + trackingBackend);
  if (trackingBackend === "artoolkit") {
    if (arToolkitContext.arController !== null) {
      camera.projectionMatrix.copy(arToolkitContext.getProjectionMatrix());
    }
  } else console.assert(false, "unhandled trackingBackend " + trackingBackend);
};
const MarkersAreaControls = function(arToolkitContext, object3d, parameters) {
  var _this = this;
  ArBaseControls.call(this, object3d);
  if (arguments.length > 3)
    console.assert("wrong api for", MarkersAreaControls);
  this.parameters = {
    // list of controls for each subMarker
    subMarkersControls: parameters.subMarkersControls,
    // list of pose for each subMarker relative to the origin
    subMarkerPoses: parameters.subMarkerPoses,
    // change matrix mode - [modelViewMatrix, cameraTransformMatrix]
    changeMatrixMode: parameters.changeMatrixMode !== void 0 ? parameters.changeMatrixMode : "modelViewMatrix"
  };
  this.object3d.visible = false;
  this.subMarkersControls = this.parameters.subMarkersControls;
  this.subMarkerPoses = this.parameters.subMarkerPoses;
  arToolkitContext.addEventListener("sourceProcessed", function() {
    _this._onSourceProcessed();
  });
};
MarkersAreaControls.prototype = Object.create(ArBaseControls.prototype);
MarkersAreaControls.prototype.constructor = MarkersAreaControls;
MarkersAreaControls.prototype._onSourceProcessed = function() {
  var _this = this;
  var stats = {
    count: 0,
    position: {
      sum: new THREE$1.Vector3(0, 0, 0),
      average: new THREE$1.Vector3(0, 0, 0)
    },
    quaternion: {
      sum: new THREE$1.Quaternion(0, 0, 0, 0),
      average: new THREE$1.Quaternion(0, 0, 0, 0)
    },
    scale: {
      sum: new THREE$1.Vector3(0, 0, 0),
      average: new THREE$1.Vector3(0, 0, 0)
    }
  };
  var firstQuaternion = _this.parameters.subMarkersControls[0].object3d.quaternion;
  this.parameters.subMarkersControls.forEach(function(markerControls, markerIndex) {
    var markerObject3d = markerControls.object3d;
    if (markerObject3d.visible === false) return;
    var matrix = markerObject3d.matrix.clone();
    var markerPose = _this.parameters.subMarkerPoses[markerIndex];
    matrix.multiply(new THREE$1.Matrix4().copy(markerPose).invert());
    var position = new THREE$1.Vector3();
    var quaternion = new THREE$1.Quaternion();
    var scale = new THREE$1.Vector3();
    matrix.decompose(position, quaternion, scale);
    stats.count++;
    MarkersAreaControls.averageVector3(
      stats.position.sum,
      position,
      stats.count,
      stats.position.average
    );
    MarkersAreaControls.averageQuaternion(
      stats.quaternion.sum,
      quaternion,
      firstQuaternion,
      stats.count,
      stats.quaternion.average
    );
    MarkersAreaControls.averageVector3(
      stats.scale.sum,
      scale,
      stats.count,
      stats.scale.average
    );
  });
  if (stats.count > 0) {
    _this.object3d.visible = true;
  } else {
    _this.object3d.visible = false;
  }
  if (stats.count > 0) {
    var modelViewMatrix = new THREE$1.Matrix4();
    modelViewMatrix.compose(
      stats.position.average,
      stats.quaternion.average,
      stats.scale.average
    );
    if (this.parameters.changeMatrixMode === "modelViewMatrix") {
      _this.object3d.matrix.copy(modelViewMatrix);
    } else if (this.parameters.changeMatrixMode === "cameraTransformMatrix") {
      _this.object3d.matrix.copy(modelViewMatrix).invert();
    } else {
      console.assert(false);
    }
    _this.object3d.matrix.decompose(
      _this.object3d.position,
      _this.object3d.quaternion,
      _this.object3d.scale
    );
  }
};
MarkersAreaControls.averageQuaternion = function(quaternionSum, newQuaternion, firstQuaternion, count, quaternionAverage) {
  quaternionAverage = quaternionAverage || new THREE$1.Quaternion();
  console.assert(firstQuaternion instanceof THREE$1.Quaternion === true);
  if (newQuaternion.dot(firstQuaternion) > 0) {
    newQuaternion = new THREE$1.Quaternion(
      -newQuaternion.x,
      -newQuaternion.y,
      -newQuaternion.z,
      -newQuaternion.w
    );
  }
  quaternionSum.x += newQuaternion.x;
  quaternionSum.y += newQuaternion.y;
  quaternionSum.z += newQuaternion.z;
  quaternionSum.w += newQuaternion.w;
  quaternionAverage.x = quaternionSum.x / count;
  quaternionAverage.y = quaternionSum.y / count;
  quaternionAverage.z = quaternionSum.z / count;
  quaternionAverage.w = quaternionSum.w / count;
  quaternionAverage.normalize();
  return quaternionAverage;
};
MarkersAreaControls.averageVector3 = function(vector3Sum, vector3, count, vector3Average) {
  vector3Average = vector3Average || new THREE$1.Vector3();
  vector3Sum.x += vector3.x;
  vector3Sum.y += vector3.y;
  vector3Sum.z += vector3.z;
  vector3Average.x = vector3Sum.x / count;
  vector3Average.y = vector3Sum.y / count;
  vector3Average.z = vector3Sum.z / count;
  return vector3Average;
};
MarkersAreaControls.computeCenter = function(jsonData) {
  var multiMarkerFile = JSON.parse(jsonData);
  var stats = {
    count: 0,
    position: {
      sum: new THREE$1.Vector3(0, 0, 0),
      average: new THREE$1.Vector3(0, 0, 0)
    },
    quaternion: {
      sum: new THREE$1.Quaternion(0, 0, 0, 0),
      average: new THREE$1.Quaternion(0, 0, 0, 0)
    },
    scale: {
      sum: new THREE$1.Vector3(0, 0, 0),
      average: new THREE$1.Vector3(0, 0, 0)
    }
  };
  var firstQuaternion = new THREE$1.Quaternion();
  multiMarkerFile.subMarkersControls.forEach(function(item) {
    var poseMatrix = new THREE$1.Matrix4().fromArray(item.poseMatrix);
    var position = new THREE$1.Vector3();
    var quaternion = new THREE$1.Quaternion();
    var scale = new THREE$1.Vector3();
    poseMatrix.decompose(position, quaternion, scale);
    stats.count++;
    MarkersAreaControls.averageVector3(
      stats.position.sum,
      position,
      stats.count,
      stats.position.average
    );
    MarkersAreaControls.averageQuaternion(
      stats.quaternion.sum,
      quaternion,
      firstQuaternion,
      stats.count,
      stats.quaternion.average
    );
    MarkersAreaControls.averageVector3(
      stats.scale.sum,
      scale,
      stats.count,
      stats.scale.average
    );
  });
  var averageMatrix = new THREE$1.Matrix4();
  averageMatrix.compose(
    stats.position.average,
    stats.quaternion.average,
    stats.scale.average
  );
  return averageMatrix;
};
MarkersAreaControls.computeBoundingBox = function(jsonData) {
  var multiMarkerFile = JSON.parse(jsonData);
  var boundingBox = new THREE$1.Box3();
  multiMarkerFile.subMarkersControls.forEach(function(item) {
    var poseMatrix = new THREE$1.Matrix4().fromArray(item.poseMatrix);
    var position = new THREE$1.Vector3();
    var quaternion = new THREE$1.Quaternion();
    var scale = new THREE$1.Vector3();
    poseMatrix.decompose(position, quaternion, scale);
    boundingBox.expandByPoint(position);
  });
  return boundingBox;
};
MarkersAreaControls.prototype.updateSmoothedControls = function(smoothedControls, lerpsValues) {
  if (lerpsValues === void 0) {
    lerpsValues = [
      [0.3 + 0.1, 0.1, 0.3],
      [0.4 + 0.1, 0.1, 0.4],
      [0.4 + 0.1, 0.2, 0.5],
      [0.5 + 0.1, 0.2, 0.7],
      [0.5 + 0.1, 0.2, 0.7]
    ];
  }
  var nVisible = 0;
  this.parameters.subMarkersControls.forEach(function(markerControls, markerIndex) {
    var markerObject3d = markerControls.object3d;
    if (markerObject3d.visible === true) nVisible++;
  });
  if (lerpsValues[nVisible - 1] !== void 0) {
    var lerpValues = lerpsValues[nVisible - 1];
  } else {
    var lerpValues = lerpsValues[lerpsValues.length - 1];
  }
  smoothedControls.parameters.lerpPosition = lerpValues[0];
  smoothedControls.parameters.lerpQuaternion = lerpValues[1];
  smoothedControls.parameters.lerpScale = lerpValues[2];
};
MarkersAreaControls.fromJSON = function(arToolkitContext, parent3D, markerRoot, jsonData, parameters) {
  var multiMarkerFile = JSON.parse(jsonData);
  var subMarkersControls = [];
  var subMarkerPoses = [];
  parameters = parameters || {};
  multiMarkerFile.subMarkersControls.forEach(function(item) {
    var markerRoot2 = new THREE$1.Object3D();
    parent3D.add(markerRoot2);
    var subMarkerControls = new MarkerControls(
      arToolkitContext,
      markerRoot2,
      item.parameters
    );
    subMarkersControls.push(subMarkerControls);
    subMarkerPoses.push(new THREE$1.Matrix4().fromArray(item.poseMatrix));
  });
  parameters.subMarkersControls = subMarkersControls;
  parameters.subMarkerPoses = subMarkerPoses;
  var multiMarkerControls = new MarkersAreaControls(
    arToolkitContext,
    markerRoot,
    parameters
  );
  return multiMarkerControls;
};
const MarkersAreaLearning = function(arToolkitContext, subMarkersControls) {
  var _this = this;
  this._arToolkitContext = arToolkitContext;
  this.subMarkersControls = subMarkersControls;
  this.enabled = true;
  arToolkitContext.addEventListener("sourceProcessed", function() {
    _this._onSourceProcessed();
  });
};
MarkersAreaLearning.prototype._onSourceProcessed = function() {
  var originQuaternion = this.subMarkersControls[0].object3d.quaternion;
  if (this.enabled === false) return;
  var visibleMarkerControls = this.subMarkersControls.filter(function(markerControls) {
    return markerControls.object3d.visible === true;
  });
  var count = Object.keys(visibleMarkerControls).length;
  var positionDelta = new THREE.Vector3();
  var quaternionDelta = new THREE.Quaternion();
  var scaleDelta = new THREE.Vector3();
  var tmpMatrix = new THREE.Matrix4();
  for (var i = 0; i < count; i++) {
    var markerControls1 = visibleMarkerControls[i];
    for (var j = 0; j < count; j++) {
      var markerControls2 = visibleMarkerControls[j];
      if (i === j) continue;
      if (markerControls1.object3d.userData.seenCouples === void 0) {
        markerControls1.object3d.userData.seenCouples = {};
      }
      var seenCouples = markerControls1.object3d.userData.seenCouples;
      if (seenCouples[markerControls2.id] === void 0) {
        seenCouples[markerControls2.id] = {
          count: 0,
          position: {
            sum: new THREE.Vector3(0, 0, 0),
            average: new THREE.Vector3(0, 0, 0)
          },
          quaternion: {
            sum: new THREE.Quaternion(0, 0, 0, 0),
            average: new THREE.Quaternion(0, 0, 0, 0)
          },
          scale: {
            sum: new THREE.Vector3(0, 0, 0),
            average: new THREE.Vector3(0, 0, 0)
          }
        };
      }
      tmpMatrix.copy(markerControls1.object3d.matrix).invert();
      tmpMatrix.multiply(markerControls2.object3d.matrix);
      tmpMatrix.decompose(positionDelta, quaternionDelta, scaleDelta);
      var stats = seenCouples[markerControls2.id];
      stats.count++;
      MarkersAreaControls.averageVector3(
        stats.position.sum,
        positionDelta,
        stats.count,
        stats.position.average
      );
      MarkersAreaControls.averageQuaternion(
        stats.quaternion.sum,
        quaternionDelta,
        originQuaternion,
        stats.count,
        stats.quaternion.average
      );
      MarkersAreaControls.averageVector3(
        stats.scale.sum,
        scaleDelta,
        stats.count,
        stats.scale.average
      );
    }
  }
};
MarkersAreaLearning.prototype.computeResult = function() {
  var _this = this;
  var originSubControls = this.subMarkersControls[0];
  this.deleteResult();
  originSubControls.object3d.userData.result = {
    averageMatrix: new THREE.Matrix4(),
    confidenceFactor: 1
  };
  do {
    var resultChanged = false;
    this.subMarkersControls.forEach(function(subMarkerControls) {
      var result = subMarkerControls.object3d.userData.result;
      var isLearned = result !== void 0 && result.confidenceFactor >= 1 ? true : false;
      if (isLearned === true) return;
      var otherSubControlsID = _this._getLearnedCoupleStats(subMarkerControls);
      if (otherSubControlsID === null) {
        return;
      }
      var otherSubControls = _this._getSubMarkerControlsByID(otherSubControlsID);
      var seenCoupleStats = subMarkerControls.object3d.userData.seenCouples[otherSubControlsID];
      var averageMatrix = new THREE.Matrix4();
      averageMatrix.compose(
        seenCoupleStats.position.average,
        seenCoupleStats.quaternion.average,
        seenCoupleStats.scale.average
      );
      var otherAverageMatrix = otherSubControls.object3d.userData.result.averageMatrix;
      var matrix = new THREE.Matrix4().getInverse(otherAverageMatrix).multiply(averageMatrix);
      matrix = new THREE.Matrix4().getInverse(matrix);
      console.assert(subMarkerControls.object3d.userData.result === void 0);
      subMarkerControls.object3d.userData.result = {
        averageMatrix: matrix,
        confidenceFactor: 1
      };
      resultChanged = true;
    });
  } while (resultChanged === true);
};
MarkersAreaLearning.prototype._getLearnedCoupleStats = function(subMarkerControls) {
  if (subMarkerControls.object3d.userData.seenCouples === void 0)
    return null;
  var seenCouples = subMarkerControls.object3d.userData.seenCouples;
  var coupleControlsIDs = Object.keys(seenCouples).map(Number);
  for (var i = 0; i < coupleControlsIDs.length; i++) {
    var otherSubControlsID = coupleControlsIDs[i];
    var otherSubControls = this._getSubMarkerControlsByID(otherSubControlsID);
    var result = otherSubControls.object3d.userData.result;
    var isLearned = result !== void 0 && result.confidenceFactor >= 1 ? true : false;
    if (isLearned === false) continue;
    return otherSubControlsID;
  }
  return null;
};
MarkersAreaLearning.prototype._getSubMarkerControlsByID = function(controlsID) {
  for (var i = 0; i < this.subMarkersControls.length; i++) {
    var subMarkerControls = this.subMarkersControls[i];
    if (subMarkerControls.id === controlsID) {
      return subMarkerControls;
    }
  }
  return null;
};
MarkersAreaLearning.prototype.toJSON = function() {
  this.computeResult();
  var data = {
    meta: {
      createdBy: "Area Learning - AR.js " + THREEx.ArToolkitContext.REVISION,
      // TODO: ArToolkitContext depending on build
      createdAt: (/* @__PURE__ */ new Date()).toJSON()
    },
    trackingBackend: this._arToolkitContext.parameters.trackingBackend,
    subMarkersControls: []
  };
  var originSubControls = this.subMarkersControls[0];
  new THREE.Matrix4().copy(originSubControls.object3d.matrix).invert();
  this.subMarkersControls.forEach(function(subMarkerControls, index) {
    if (subMarkerControls.object3d.userData.result === void 0) return;
    var poseMatrix = subMarkerControls.object3d.userData.result.averageMatrix;
    console.assert(poseMatrix instanceof THREE.Matrix4);
    var info = {
      parameters: {
        // to fill ...
      },
      poseMatrix: poseMatrix.toArray()
    };
    if (subMarkerControls.parameters.type === "pattern") {
      info.parameters.type = subMarkerControls.parameters.type;
      info.parameters.patternUrl = subMarkerControls.parameters.patternUrl;
    } else if (subMarkerControls.parameters.type === "barcode") {
      info.parameters.type = subMarkerControls.parameters.type;
      info.parameters.barcodeValue = subMarkerControls.parameters.barcodeValue;
    } else console.assert(false);
    data.subMarkersControls.push(info);
  });
  var strJSON = JSON.stringify(data, null, "	");
  return strJSON;
};
MarkersAreaLearning.prototype.resetStats = function() {
  this.deleteResult();
  this.subMarkersControls.forEach(function(markerControls) {
    delete markerControls.object3d.userData.seenCouples;
  });
};
MarkersAreaLearning.prototype.deleteResult = function() {
  this.subMarkersControls.forEach(function(markerControls) {
    delete markerControls.object3d.userData.result;
  });
};
const MarkersAreaUtils = {};
MarkersAreaUtils.navigateToLearnerPage = function(learnerBaseURL, trackingBackend) {
  var learnerParameters = {
    backURL: location.href,
    trackingBackend,
    markersControlsParameters: MarkersAreaUtils.createDefaultMarkersControlsParameters(trackingBackend)
  };
  location.href = learnerBaseURL + "?" + encodeURIComponent(JSON.stringify(learnerParameters));
};
MarkersAreaUtils.storeDefaultMultiMarkerFile = function(trackingBackend) {
  var file = MarkersAreaUtils.createDefaultMultiMarkerFile(trackingBackend);
  localStorage.setItem("ARjsMultiMarkerFile", JSON.stringify(file));
};
MarkersAreaUtils.createDefaultMultiMarkerFile = function(trackingBackend) {
  console.assert(trackingBackend);
  if (trackingBackend === void 0) debugger;
  var link = document.createElement("a");
  link.href = Context.baseURL;
  var absoluteBaseURL = link.href;
  var file = {
    meta: {
      createdBy: "AR.js " + Context.REVISION + " - Default Marker",
      createdAt: (/* @__PURE__ */ new Date()).toJSON()
    },
    trackingBackend,
    subMarkersControls: [
      // empty for now... being filled
    ]
  };
  file.subMarkersControls[0] = {
    parameters: {},
    poseMatrix: new THREE$1.Matrix4().makeTranslation(0, 0, 0).toArray()
  };
  if (trackingBackend === "artoolkit") {
    file.subMarkersControls[0].parameters.type = "pattern";
    file.subMarkersControls[0].parameters.patternUrl = absoluteBaseURL + "examples/marker-training/examples/pattern-files/pattern-hiro.patt";
  } else console.assert(false);
  return file;
};
MarkersAreaUtils.createDefaultMarkersControlsParameters = function(trackingBackend) {
  var link = document.createElement("a");
  link.href = Context.baseURL;
  var absoluteBaseURL = link.href;
  if (trackingBackend === "artoolkit") {
    var markersControlsParameters = [
      {
        type: "pattern",
        patternUrl: absoluteBaseURL + "examples/marker-training/examples/pattern-files/pattern-hiro.patt"
      },
      {
        type: "pattern",
        patternUrl: absoluteBaseURL + "examples/marker-training/examples/pattern-files/pattern-kanji.patt"
      },
      {
        type: "pattern",
        patternUrl: absoluteBaseURL + "examples/marker-training/examples/pattern-files/pattern-letterA.patt"
      },
      {
        type: "pattern",
        patternUrl: absoluteBaseURL + "examples/marker-training/examples/pattern-files/pattern-letterB.patt"
      },
      {
        type: "pattern",
        patternUrl: absoluteBaseURL + "examples/marker-training/examples/pattern-files/pattern-letterC.patt"
      },
      {
        type: "pattern",
        patternUrl: absoluteBaseURL + "examples/marker-training/examples/pattern-files/pattern-letterF.patt"
      }
    ];
  } else console.assert(false);
  return markersControlsParameters;
};
MarkersAreaUtils.storeMarkersAreaFileFromResolution = function(trackingBackend, resolutionW, resolutionH) {
  var areaFile = this.buildMarkersAreaFileFromResolution(
    trackingBackend,
    resolutionW,
    resolutionH
  );
  localStorage.setItem("ARjsMultiMarkerFile", JSON.stringify(areaFile));
};
MarkersAreaUtils.buildMarkersAreaFileFromResolution = function(trackingBackend, resolutionW, resolutionH) {
  var file = {
    meta: {
      createdBy: "AR.js - Augmented Website",
      createdAt: (/* @__PURE__ */ new Date()).toJSON()
    },
    trackingBackend,
    subMarkersControls: [
      // empty for now...
    ]
  };
  var whiteMargin = 0.1;
  if (resolutionW > resolutionH) {
    var markerImageSize = 0.4 * resolutionH;
  } else if (resolutionW < resolutionH) {
    var markerImageSize = 0.4 * resolutionW;
  } else if (resolutionW === resolutionH) {
    var markerImageSize = 0.33 * resolutionW;
  } else console.assert(false);
  var actualMarkerSize = markerImageSize * (1 - 2 * whiteMargin);
  var deltaX = (resolutionW - markerImageSize) / 2 / actualMarkerSize;
  var deltaZ = (resolutionH - markerImageSize) / 2 / actualMarkerSize;
  var subMarkerControls = buildSubMarkerControls("center", 0, 0);
  file.subMarkersControls.push(subMarkerControls);
  var subMarkerControls = buildSubMarkerControls("topleft", -deltaX, -deltaZ);
  file.subMarkersControls.push(subMarkerControls);
  var subMarkerControls = buildSubMarkerControls("topright", +deltaX, -deltaZ);
  file.subMarkersControls.push(subMarkerControls);
  var subMarkerControls = buildSubMarkerControls(
    "bottomleft",
    -deltaX,
    +deltaZ
  );
  file.subMarkersControls.push(subMarkerControls);
  var subMarkerControls = buildSubMarkerControls(
    "bottomright",
    +deltaX,
    +deltaZ
  );
  file.subMarkersControls.push(subMarkerControls);
  return file;
  function buildSubMarkerControls(layout, positionX, positionZ) {
    console.log("buildSubMarkerControls", layout, positionX, positionZ);
    var subMarkersControls = {
      parameters: {},
      poseMatrix: new THREE$1.Matrix4().makeTranslation(positionX, 0, positionZ).toArray()
    };
    if (trackingBackend === "artoolkit") {
      layout2MarkerParametersArtoolkit(subMarkersControls.parameters, layout);
    } else console.assert(false);
    return subMarkersControls;
  }
  function layout2MarkerParametersArtoolkit(parameters, layout) {
    var link = document.createElement("a");
    link.href = Context.baseURL;
    var absoluteBaseURL = link.href;
    var layout2PatternUrl = {
      center: convertRelativeUrlToAbsolute(
        absoluteBaseURL + "examples/marker-training/examples/pattern-files/pattern-hiro.patt"
      ),
      topleft: convertRelativeUrlToAbsolute(
        absoluteBaseURL + "examples/marker-training/examples/pattern-files/pattern-letterA.patt"
      ),
      topright: convertRelativeUrlToAbsolute(
        absoluteBaseURL + "examples/marker-training/examples/pattern-files/pattern-letterB.patt"
      ),
      bottomleft: convertRelativeUrlToAbsolute(
        absoluteBaseURL + "examples/marker-training/examples/pattern-files/pattern-letterC.patt"
      ),
      bottomright: convertRelativeUrlToAbsolute(
        absoluteBaseURL + "examples/marker-training/examples/pattern-files/pattern-letterF.patt"
      )
    };
    console.assert(layout2PatternUrl[layout] !== void 0);
    parameters.type = "pattern";
    parameters.patternUrl = layout2PatternUrl[layout];
    return;
    function convertRelativeUrlToAbsolute(relativeUrl) {
      var tmpLink = document.createElement("a");
      tmpLink.href = relativeUrl;
      return tmpLink.href;
    }
  }
};
export {
  MarkerControls as ArMarkerControls,
  ArMarkerHelper,
  MarkersAreaLearning as ArMultiMakersLearning,
  MarkersAreaControls as ArMultiMarkerControls,
  MarkersAreaUtils as ArMultiMarkerUtils,
  ArSmoothedControls,
  Context as ArToolkitContext,
  Profile as ArToolkitProfile,
  Source as ArToolkitSource
};
//# sourceMappingURL=THREEXAR.js.map
