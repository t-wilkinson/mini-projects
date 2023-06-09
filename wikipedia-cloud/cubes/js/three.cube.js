// three.js - http://github.com/mrdoob/three.js
'use strict';
var THREE = THREE || {
  REVISION: '55dev'
};
self.console = self.console || {
  info: function () {
  },
  log: function () {
  },
  debug: function () {
  },
  warn: function () {
  },
  error: function () {
  }
};
self.Int32Array = self.Int32Array || Array;
self.Float32Array = self.Float32Array || Array;
String.prototype.startsWith = String.prototype.startsWith || function (a) {
  return this.slice(0, a.length) === a
};
String.prototype.endsWith = String.prototype.endsWith || function (a) {
  var a = String(a),
  b = this.lastIndexOf(a);
  return ( - 1 < b && b) === this.length - a.length
};
String.prototype.trim = String.prototype.trim || function () {
  return this.replace(/^\s+|\s+$/g, '')
};
(function () {
  for (var a = 0, b = [
    'ms',
    'moz',
    'webkit',
    'o'
  ], c = 0; c < b.length && !window.requestAnimationFrame; ++c) window.requestAnimationFrame = window[b[c] + 'RequestAnimationFrame'],
  window.cancelAnimationFrame = window[b[c] + 'CancelAnimationFrame'] || window[b[c] + 'CancelRequestAnimationFrame'];
  void 0 === window.requestAnimationFrame && (window.requestAnimationFrame = function (b) {
    var c = Date.now(),
    f = Math.max(0, 16 - (c - a)),
    g = window.setTimeout(function () {
      b(c + f)
    }, f);
    a = c + f;
    return g
  });
  window.cancelAnimationFrame = window.cancelAnimationFrame || function (a) {
    window.clearTimeout(a)
  }
}) ();
THREE.CullFaceNone = 0;
THREE.CullFaceBack = 1;
THREE.CullFaceFront = 2;
THREE.CullFaceFrontBack = 3;
THREE.FrontFaceDirectionCW = 0;
THREE.FrontFaceDirectionCCW = 1;
THREE.BasicShadowMap = 0;
THREE.PCFShadowMap = 1;
THREE.PCFSoftShadowMap = 2;
THREE.FrontSide = 0;
THREE.BackSide = 1;
THREE.DoubleSide = 2;
THREE.NoShading = 0;
THREE.FlatShading = 1;
THREE.SmoothShading = 2;
THREE.NoColors = 0;
THREE.FaceColors = 1;
THREE.VertexColors = 2;
THREE.NoBlending = 0;
THREE.NormalBlending = 1;
THREE.AdditiveBlending = 2;
THREE.SubtractiveBlending = 3;
THREE.MultiplyBlending = 4;
THREE.CustomBlending = 5;
THREE.AddEquation = 100;
THREE.SubtractEquation = 101;
THREE.ReverseSubtractEquation = 102;
THREE.ZeroFactor = 200;
THREE.OneFactor = 201;
THREE.SrcColorFactor = 202;
THREE.OneMinusSrcColorFactor = 203;
THREE.SrcAlphaFactor = 204;
THREE.OneMinusSrcAlphaFactor = 205;
THREE.DstAlphaFactor = 206;
THREE.OneMinusDstAlphaFactor = 207;
THREE.DstColorFactor = 208;
THREE.OneMinusDstColorFactor = 209;
THREE.SrcAlphaSaturateFactor = 210;
THREE.MultiplyOperation = 0;
THREE.MixOperation = 1;
THREE.AddOperation = 2;
THREE.UVMapping = function () {
};
THREE.CubeReflectionMapping = function () {
};
THREE.CubeRefractionMapping = function () {
};
THREE.SphericalReflectionMapping = function () {
};
THREE.SphericalRefractionMapping = function () {
};
THREE.RepeatWrapping = 1000;
THREE.ClampToEdgeWrapping = 1001;
THREE.MirroredRepeatWrapping = 1002;
THREE.NearestFilter = 1003;
THREE.NearestMipMapNearestFilter = 1004;
THREE.NearestMipMapLinearFilter = 1005;
THREE.LinearFilter = 1006;
THREE.LinearMipMapNearestFilter = 1007;
THREE.LinearMipMapLinearFilter = 1008;
THREE.UnsignedByteType = 1009;
THREE.ByteType = 1010;
THREE.ShortType = 1011;
THREE.UnsignedShortType = 1012;
THREE.IntType = 1013;
THREE.UnsignedIntType = 1014;
THREE.FloatType = 1015;
THREE.UnsignedShort4444Type = 1016;
THREE.UnsignedShort5551Type = 1017;
THREE.UnsignedShort565Type = 1018;
THREE.AlphaFormat = 1019;
THREE.RGBFormat = 1020;
THREE.RGBAFormat = 1021;
THREE.LuminanceFormat = 1022;
THREE.LuminanceAlphaFormat = 1023;
THREE.RGB_S3TC_DXT1_Format = 2001;
THREE.RGBA_S3TC_DXT1_Format = 2002;
THREE.RGBA_S3TC_DXT3_Format = 2003;
THREE.RGBA_S3TC_DXT5_Format = 2004;
THREE.Color = function (a) {
  void 0 !== a && this.set(a);
  return this
};
THREE.Color.prototype = {
  constructor: THREE.Color,
  r: 1,
  g: 1,
  b: 1,
  copy: function (a) {
    this.r = a.r;
    this.g = a.g;
    this.b = a.b;
    return this
  },
  copyGammaToLinear: function (a) {
    this.r = a.r * a.r;
    this.g = a.g * a.g;
    this.b = a.b * a.b;
    return this
  },
  copyLinearToGamma: function (a) {
    this.r = Math.sqrt(a.r);
    this.g = Math.sqrt(a.g);
    this.b = Math.sqrt(a.b);
    return this
  },
  convertGammaToLinear: function () {
    var a = this.r,
    b = this.g,
    c = this.b;
    this.r = a * a;
    this.g = b * b;
    this.b = c * c;
    return this
  },
  convertLinearToGamma: function () {
    this.r = Math.sqrt(this.r);
    this.g = Math.sqrt(this.g);
    this.b = Math.sqrt(this.b);
    return this
  },
  set: function (a) {
    switch (typeof a) {
      case 'number':
        this.setHex(a);
        break;
      case 'string':
        this.setStyle(a)
    }
  },
  setRGB: function (a, b, c) {
    this.r = a;
    this.g = b;
    this.b = c;
    return this
  },
  setHSV: function (a, b, c) {
    var d,
    e,
    f;
    0 === c ? this.r = this.g = this.b = 0 : (d = Math.floor(6 * a), e = 6 * a - d, a = c * (1 - b), f = c * (1 - b * e), b = c * (1 - b * (1 - e)), 0 === d ? (this.r = c, this.g = b, this.b = a) : 1 === d ? (this.r = f, this.g = c, this.b = a) : 2 === d ? (this.r = a, this.g = c, this.b = b) : 3 === d ? (this.r = a, this.g = f, this.b = c) : 4 === d ? (this.r = b, this.g = a, this.b = c) : 5 === d && (this.r = c, this.g = a, this.b = f));
    return this
  },
  getHex: function () {
    return 255 * this.r << 16 ^ 255 * this.g << 8 ^ 255 * this.b << 0
  },
  setHex: function (a) {
    a = Math.floor(a);
    this.r = (a >> 16 & 255) / 255;
    this.g = (a >> 8 & 255) / 255;
    this.b = (a & 255) / 255;
    return this
  },
  getHexString: function () {
    return ('000000' + this.getHex().toString(16)).slice( - 6)
  },
  getStyle: function () {
    return 'rgb(' + (255 * this.r | 0) + ',' + (255 * this.g | 0) + ',' + (255 * this.b | 0) + ')'
  },
  setStyle: function (a) {
    if (/^rgb\((\d+),(\d+),(\d+)\)$/i.test(a)) return a = /^rgb\((\d+),(\d+),(\d+)\)$/i.exec(a),
    this.r = Math.min(255, parseInt(a[1], 10)) / 255,
    this.g = Math.min(255, parseInt(a[2], 10)) / 255,
    this.b = Math.min(255, parseInt(a[3], 10)) / 255,
    this;
    if (/^rgb\((\d+)\%,(\d+)\%,(\d+)\%\)$/i.test(a)) return a = /^rgb\((\d+)\%,(\d+)\%,(\d+)\%\)$/i.exec(a),
    this.r = Math.min(100, parseInt(a[1], 10)) / 100,
    this.g = Math.min(100, parseInt(a[2], 10)) / 100,
    this.b = Math.min(100, parseInt(a[3], 10)) / 100,
    this;
    if (/^\#([0-9a-f]{6})$/i.test(a)) return a = /^\#([0-9a-f]{6})$/i.exec(a),
    this.setHex(parseInt(a[1], 16)),
    this;
    if (/^\#([0-9a-f])([0-9a-f])([0-9a-f])$/i.test(a)) return a = /^\#([0-9a-f])([0-9a-f])([0-9a-f])$/i.exec(a),
    this.setHex(parseInt(a[1] + a[1] + a[2] + a[2] + a[3] + a[3], 16)),
    this;
    if (/^(\w+)$/i.test(a)) return this.setHex(THREE.ColorKeywords[a]),
    this
  },
  getHSV: function (a) {
    var b = this.r,
    c = this.g,
    d = this.b,
    e = Math.max(Math.max(b, c), d),
    f = Math.min(Math.min(b, c), d);
    if (f === e) f = b = 0;
     else {
      var g = e - f,
      f = g / e,
      b = (b === e ? (c - d) / g : c === e ? 2 + (d - b) / g : 4 + (b - c) / g) / 6;
      0 > b && (b += 1);
      1 < b && (b -= 1)
    }
    void 0 === a && (a = {
      h: 0,
      s: 0,
      v: 0
    });
    a.h = b;
    a.s = f;
    a.v = e;
    return a
  },
  lerpSelf: function (a, b) {
    this.r += (a.r - this.r) * b;
    this.g += (a.g - this.g) * b;
    this.b += (a.b - this.b) * b;
    return this
  },
  clone: function () {
    return (new THREE.Color).setRGB(this.r, this.g, this.b)
  }
};
THREE.ColorKeywords = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
THREE.Vector2 = function (a, b) {
  this.x = a || 0;
  this.y = b || 0
};
THREE.Vector2.prototype = {
  constructor: THREE.Vector2,
  set: function (a, b) {
    this.x = a;
    this.y = b;
    return this
  },
  setX: function (a) {
    this.x = a;
    return this
  },
  setY: function (a) {
    this.y = a;
    return this
  },
  setComponent: function (a, b) {
    switch (a) {
      case 0:
        this.x = b;
        break;
      case 1:
        this.y = b;
        break;
      default:
        throw Error('index is out of range: ' + a);
    }
  },
  getComponent: function (a) {
    switch (a) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw Error('index is out of range: ' + a);
    }
  },
  copy: function (a) {
    this.x = a.x;
    this.y = a.y;
    return this
  },
  addScalar: function (a) {
    this.x +=
    a;
    this.y += a;
    return this
  },
  add: function (a, b) {
    this.x = a.x + b.x;
    this.y = a.y + b.y;
    return this
  },
  addSelf: function (a) {
    this.x += a.x;
    this.y += a.y;
    return this
  },
  sub: function (a, b) {
    this.x = a.x - b.x;
    this.y = a.y - b.y;
    return this
  },
  subSelf: function (a) {
    this.x -= a.x;
    this.y -= a.y;
    return this
  },
  multiplyScalar: function (a) {
    this.x *= a;
    this.y *= a;
    return this
  },
  divideScalar: function (a) {
    0 !== a ? (this.x /= a, this.y /= a) : this.set(0, 0);
    return this
  },
  minSelf: function (a) {
    this.x > a.x && (this.x = a.x);
    this.y > a.y && (this.y = a.y);
    return this
  },
  maxSelf: function (a) {
    this.x <
    a.x && (this.x = a.x);
    this.y < a.y && (this.y = a.y);
    return this
  },
  clampSelf: function (a, b) {
    this.x < a.x ? this.x = a.x : this.x > b.x && (this.x = b.x);
    this.y < a.y ? this.y = a.y : this.y > b.y && (this.y = b.y);
    return this
  },
  negate: function () {
    return this.multiplyScalar( - 1)
  },
  dot: function (a) {
    return this.x * a.x + this.y * a.y
  },
  lengthSq: function () {
    return this.x * this.x + this.y * this.y
  },
  length: function () {
    return Math.sqrt(this.x * this.x + this.y * this.y)
  },
  normalize: function () {
    return this.divideScalar(this.length())
  },
  distanceTo: function (a) {
    return Math.sqrt(this.distanceToSquared(a))
  },
  distanceToSquared: function (a) {
    var b = this.x - a.x,
    a = this.y - a.y;
    return b * b + a * a
  },
  setLength: function (a) {
    var b = this.length();
    0 !== b && a !== b && this.multiplyScalar(a / b);
    return this
  },
  lerpSelf: function (a, b) {
    this.x += (a.x - this.x) * b;
    this.y += (a.y - this.y) * b;
    return this
  },
  equals: function (a) {
    return a.x === this.x && a.y === this.y
  },
  clone: function () {
    return new THREE.Vector2(this.x, this.y)
  }
};
THREE.Vector3 = function (a, b, c) {
  this.x = a || 0;
  this.y = b || 0;
  this.z = c || 0
};
THREE.Vector3.prototype = {
  constructor: THREE.Vector3,
  set: function (a, b, c) {
    this.x = a;
    this.y = b;
    this.z = c;
    return this
  },
  setX: function (a) {
    this.x = a;
    return this
  },
  setY: function (a) {
    this.y = a;
    return this
  },
  setZ: function (a) {
    this.z = a;
    return this
  },
  setComponent: function (a, b) {
    switch (a) {
      case 0:
        this.x = b;
        break;
      case 1:
        this.y = b;
        break;
      case 2:
        this.z = b;
        break;
      default:
        throw Error('index is out of range: ' + a);
    }
  },
  getComponent: function (a) {
    switch (a) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw Error('index is out of range: ' +
        a);
    }
  },
  copy: function (a) {
    this.x = a.x;
    this.y = a.y;
    this.z = a.z;
    return this
  },
  add: function (a, b) {
    this.x = a.x + b.x;
    this.y = a.y + b.y;
    this.z = a.z + b.z;
    return this
  },
  addSelf: function (a) {
    this.x += a.x;
    this.y += a.y;
    this.z += a.z;
    return this
  },
  addScalar: function (a) {
    this.x += a;
    this.y += a;
    this.z += a;
    return this
  },
  sub: function (a, b) {
    this.x = a.x - b.x;
    this.y = a.y - b.y;
    this.z = a.z - b.z;
    return this
  },
  subSelf: function (a) {
    this.x -= a.x;
    this.y -= a.y;
    this.z -= a.z;
    return this
  },
  multiply: function (a, b) {
    this.x = a.x * b.x;
    this.y = a.y * b.y;
    this.z = a.z * b.z;
    return this
  },
  multiplySelf: function (a) {
    this.x *= a.x;
    this.y *= a.y;
    this.z *= a.z;
    return this
  },
  multiplyScalar: function (a) {
    this.x *= a;
    this.y *= a;
    this.z *= a;
    return this
  },
  divideSelf: function (a) {
    this.x /= a.x;
    this.y /= a.y;
    this.z /= a.z;
    return this
  },
  divideScalar: function (a) {
    0 !== a ? (this.x /= a, this.y /= a, this.z /= a) : this.z = this.y = this.x = 0;
    return this
  },
  minSelf: function (a) {
    this.x > a.x && (this.x = a.x);
    this.y > a.y && (this.y = a.y);
    this.z > a.z && (this.z = a.z);
    return this
  },
  maxSelf: function (a) {
    this.x < a.x && (this.x = a.x);
    this.y < a.y && (this.y = a.y);
    this.z < a.z && (this.z = a.z);
    return this
  },
  clampSelf: function (a, b) {
    this.x < a.x ? this.x = a.x : this.x > b.x && (this.x = b.x);
    this.y < a.y ? this.y = a.y : this.y > b.y && (this.y = b.y);
    this.z < a.z ? this.z = a.z : this.z > b.z && (this.z = b.z);
    return this
  },
  negate: function () {
    return this.multiplyScalar( - 1)
  },
  dot: function (a) {
    return this.x * a.x + this.y * a.y + this.z * a.z
  },
  lengthSq: function () {
    return this.x * this.x + this.y * this.y + this.z * this.z
  },
  length: function () {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
  },
  lengthManhattan: function () {
    return Math.abs(this.x) +
    Math.abs(this.y) + Math.abs(this.z)
  },
  normalize: function () {
    return this.divideScalar(this.length())
  },
  setLength: function (a) {
    var b = this.length();
    0 !== b && a !== b && this.multiplyScalar(a / b);
    return this
  },
  lerpSelf: function (a, b) {
    this.x += (a.x - this.x) * b;
    this.y += (a.y - this.y) * b;
    this.z += (a.z - this.z) * b;
    return this
  },
  cross: function (a, b) {
    this.x = a.y * b.z - a.z * b.y;
    this.y = a.z * b.x - a.x * b.z;
    this.z = a.x * b.y - a.y * b.x;
    return this
  },
  crossSelf: function (a) {
    var b = this.x,
    c = this.y,
    d = this.z;
    this.x = c * a.z - d * a.y;
    this.y = d * a.x - b * a.z;
    this.z = b * a.y -
    c * a.x;
    return this
  },
  angleTo: function (a) {
    return Math.acos(this.dot(a) / this.length() / a.length())
  },
  distanceTo: function (a) {
    return Math.sqrt(this.distanceToSquared(a))
  },
  distanceToSquared: function (a) {
    var b = this.x - a.x,
    c = this.y - a.y,
    a = this.z - a.z;
    return b * b + c * c + a * a
  },
  getPositionFromMatrix: function (a) {
    this.x = a.elements[12];
    this.y = a.elements[13];
    this.z = a.elements[14];
    return this
  },
  setEulerFromRotationMatrix: function (a, b) {
    function c(a) {
      return Math.min(Math.max(a, - 1), 1)
    }
    var d = a.elements,
    e = d[0],
    f = d[4],
    g = d[8],
    h = d[1],
    i = d[5],
    k = d[9],
    l = d[2],
    m = d[6],
    d = d[10];
    void 0 === b || 'XYZ' === b ? (this.y = Math.asin(c(g)), 0.99999 > Math.abs(g) ? (this.x = Math.atan2( - k, d), this.z = Math.atan2( - f, e)) : (this.x = Math.atan2(m, i), this.z = 0)) : 'YXZ' === b ? (this.x = Math.asin( - c(k)), 0.99999 > Math.abs(k) ? (this.y = Math.atan2(g, d), this.z = Math.atan2(h, i)) : (this.y = Math.atan2( - l, e), this.z = 0)) : 'ZXY' === b ? (this.x = Math.asin(c(m)), 0.99999 > Math.abs(m) ? (this.y = Math.atan2( - l, d), this.z = Math.atan2( - f, i)) : (this.y = 0, this.z = Math.atan2(h, e))) : 'ZYX' === b ? (this.y = Math.asin( - c(l)), 0.99999 >
    Math.abs(l) ? (this.x = Math.atan2(m, d), this.z = Math.atan2(h, e)) : (this.x = 0, this.z = Math.atan2( - f, i))) : 'YZX' === b ? (this.z = Math.asin(c(h)), 0.99999 > Math.abs(h) ? (this.x = Math.atan2( - k, i), this.y = Math.atan2( - l, e)) : (this.x = 0, this.y = Math.atan2(g, d))) : 'XZY' === b && (this.z = Math.asin( - c(f)), 0.99999 > Math.abs(f) ? (this.x = Math.atan2(m, i), this.y = Math.atan2(g, e)) : (this.x = Math.atan2( - k, d), this.y = 0));
    return this
  },
  setEulerFromQuaternion: function (a, b) {
    function c(a) {
      return Math.min(Math.max(a, - 1), 1)
    }
    var d = a.x * a.x,
    e = a.y * a.y,
    f = a.z * a.z,
    g = a.w * a.w;
    void 0 === b || 'XYZ' === b ? (this.x = Math.atan2(2 * (a.x * a.w - a.y * a.z), g - d - e + f), this.y = Math.asin(c(2 * (a.x * a.z + a.y * a.w))), this.z = Math.atan2(2 * (a.z * a.w - a.x * a.y), g + d - e - f)) : 'YXZ' === b ? (this.x = Math.asin(c(2 * (a.x * a.w - a.y * a.z))), this.y = Math.atan2(2 * (a.x * a.z + a.y * a.w), g - d - e + f), this.z = Math.atan2(2 * (a.x * a.y + a.z * a.w), g - d + e - f)) : 'ZXY' === b ? (this.x = Math.asin(c(2 * (a.x * a.w + a.y * a.z))), this.y = Math.atan2(2 * (a.y * a.w - a.z * a.x), g - d - e + f), this.z = Math.atan2(2 * (a.z * a.w - a.x * a.y), g - d + e - f)) : 'ZYX' === b ? (this.x = Math.atan2(2 * (a.x * a.w + a.z * a.y), g - d - e + f), this.y = Math.asin(c(2 * (a.y * a.w - a.x * a.z))), this.z = Math.atan2(2 * (a.x * a.y + a.z * a.w), g + d - e - f)) : 'YZX' === b ? (this.x = Math.atan2(2 * (a.x * a.w - a.z * a.y), g - d + e - f), this.y = Math.atan2(2 * (a.y * a.w - a.x * a.z), g + d - e - f), this.z = Math.asin(c(2 * (a.x * a.y + a.z * a.w)))) : 'XZY' === b && (this.x = Math.atan2(2 * (a.x * a.w + a.y * a.z), g - d + e - f), this.y = Math.atan2(2 * (a.x * a.z + a.y * a.w), g + d - e - f), this.z = Math.asin(c(2 * (a.z * a.w - a.x * a.y))));
    return this
  },
  getScaleFromMatrix: function (a) {
    var b = this.set(a.elements[0], a.elements[1], a.elements[2]).length(),
    c = this.set(a.elements[4], a.elements[5], a.elements[6]).length(),
    a = this.set(a.elements[8], a.elements[9], a.elements[10]).length();
    this.x = b;
    this.y = c;
    this.z = a;
    return this
  },
  equals: function (a) {
    return a.x === this.x && a.y === this.y && a.z === this.z
  },
  clone: function () {
    return new THREE.Vector3(this.x, this.y, this.z)
  }
};
THREE.Vector4 = function (a, b, c, d) {
  this.x = a || 0;
  this.y = b || 0;
  this.z = c || 0;
  this.w = void 0 !== d ? d : 1
};
THREE.Vector4.prototype = {
  constructor: THREE.Vector4,
  set: function (a, b, c, d) {
    this.x = a;
    this.y = b;
    this.z = c;
    this.w = d;
    return this
  },
  setX: function (a) {
    this.x = a;
    return this
  },
  setY: function (a) {
    this.y = a;
    return this
  },
  setZ: function (a) {
    this.z = a;
    return this
  },
  setW: function (a) {
    this.w = a;
    return this
  },
  setComponent: function (a, b) {
    switch (a) {
      case 0:
        this.x = b;
        break;
      case 1:
        this.y = b;
        break;
      case 2:
        this.z = b;
        break;
      case 3:
        this.w = b;
        break;
      default:
        throw Error('index is out of range: ' + a);
    }
  },
  getComponent: function (a) {
    switch (a) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:
        throw Error('index is out of range: ' + a);
    }
  },
  copy: function (a) {
    this.x = a.x;
    this.y = a.y;
    this.z = a.z;
    this.w = void 0 !== a.w ? a.w : 1;
    return this
  },
  addScalar: function (a) {
    this.x += a;
    this.y += a;
    this.z += a;
    this.w += a;
    return this
  },
  add: function (a, b) {
    this.x = a.x + b.x;
    this.y = a.y + b.y;
    this.z = a.z + b.z;
    this.w = a.w + b.w;
    return this
  },
  addSelf: function (a) {
    this.x += a.x;
    this.y += a.y;
    this.z += a.z;
    this.w += a.w;
    return this
  },
  sub: function (a, b) {
    this.x = a.x - b.x;
    this.y = a.y - b.y;
    this.z = a.z - b.z;
    this.w = a.w - b.w;
    return this
  },
  subSelf: function (a) {
    this.x -= a.x;
    this.y -= a.y;
    this.z -= a.z;
    this.w -= a.w;
    return this
  },
  multiplyScalar: function (a) {
    this.x *= a;
    this.y *= a;
    this.z *= a;
    this.w *= a;
    return this
  },
  divideScalar: function (a) {
    0 !== a ? (this.x /= a, this.y /= a, this.z /= a, this.w /= a) : (this.z = this.y = this.x = 0, this.w = 1);
    return this
  },
  minSelf: function (a) {
    this.x > a.x && (this.x = a.x);
    this.y > a.y && (this.y = a.y);
    this.z > a.z && (this.z = a.z);
    this.w > a.w && (this.w = a.w);
    return this
  },
  maxSelf: function (a) {
    this.x < a.x && (this.x = a.x);
    this.y <
    a.y && (this.y = a.y);
    this.z < a.z && (this.z = a.z);
    this.w < a.w && (this.w = a.w);
    return this
  },
  clampSelf: function (a, b) {
    this.x < a.x ? this.x = a.x : this.x > b.x && (this.x = b.x);
    this.y < a.y ? this.y = a.y : this.y > b.y && (this.y = b.y);
    this.z < a.z ? this.z = a.z : this.z > b.z && (this.z = b.z);
    this.w < a.w ? this.w = a.w : this.w > b.w && (this.w = b.w);
    return this
  },
  negate: function () {
    return this.multiplyScalar( - 1)
  },
  dot: function (a) {
    return this.x * a.x + this.y * a.y + this.z * a.z + this.w * a.w
  },
  lengthSq: function () {
    return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
  },
  length: function () {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w)
  },
  lengthManhattan: function () {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w)
  },
  normalize: function () {
    return this.divideScalar(this.length())
  },
  setLength: function (a) {
    var b = this.length();
    0 !== b && a !== b && this.multiplyScalar(a / b);
    return this
  },
  lerpSelf: function (a, b) {
    this.x += (a.x - this.x) * b;
    this.y += (a.y - this.y) * b;
    this.z += (a.z - this.z) * b;
    this.w += (a.w - this.w) * b;
    return this
  },
  equals: function (a) {
    return a.x ===
    this.x && a.y === this.y && a.z === this.z && a.w === this.w
  },
  clone: function () {
    return new THREE.Vector4(this.x, this.y, this.z, this.w)
  },
  setAxisAngleFromQuaternion: function (a) {
    this.w = 2 * Math.acos(a.w);
    var b = Math.sqrt(1 - a.w * a.w);
    0.0001 > b ? (this.x = 1, this.z = this.y = 0) : (this.x = a.x / b, this.y = a.y / b, this.z = a.z / b);
    return this
  },
  setAxisAngleFromRotationMatrix: function (a) {
    var b,
    c,
    d,
    a = a.elements,
    e = a[0];
    d = a[4];
    var f = a[8],
    g = a[1],
    h = a[5],
    i = a[9];
    c = a[2];
    b = a[6];
    var k = a[10];
    if (0.01 > Math.abs(d - g) && 0.01 > Math.abs(f - c) && 0.01 > Math.abs(i - b)) {
      if (0.1 >
      Math.abs(d + g) && 0.1 > Math.abs(f + c) && 0.1 > Math.abs(i + b) && 0.1 > Math.abs(e + h + k - 3)) return this.set(1, 0, 0, 0),
      this;
      a = Math.PI;
      e = (e + 1) / 2;
      h = (h + 1) / 2;
      k = (k + 1) / 2;
      d = (d + g) / 4;
      f = (f + c) / 4;
      i = (i + b) / 4;
      e > h && e > k ? 0.01 > e ? (b = 0, d = c = 0.707106781) : (b = Math.sqrt(e), c = d / b, d = f / b) : h > k ? 0.01 > h ? (b = 0.707106781, c = 0, d = 0.707106781) : (c = Math.sqrt(h), b = d / c, d = i / c) : 0.01 > k ? (c = b = 0.707106781, d = 0) : (d = Math.sqrt(k), b = f / d, c = i / d);
      this.set(b, c, d, a);
      return this
    }
    a = Math.sqrt((b - i) * (b - i) + (f - c) * (f - c) + (g - d) * (g - d));
    0.001 > Math.abs(a) && (a = 1);
    this.x = (b - i) / a;
    this.y = (f -
    c) / a;
    this.z = (g - d) / a;
    this.w = Math.acos((e + h + k - 1) / 2);
    return this
  }
};
THREE.Box2 = function (a, b) {
  this.min = void 0 !== a ? a.clone() : new THREE.Vector2(Infinity, Infinity);
  this.max = void 0 !== b ? b.clone() : new THREE.Vector2( - Infinity, - Infinity)
};
THREE.Box2.prototype = {
  constructor: THREE.Box2,
  set: function (a, b) {
    this.min.copy(a);
    this.max.copy(b);
    return this
  },
  setFromPoints: function (a) {
    if (0 < a.length) {
      var b = a[0];
      this.min.copy(b);
      this.max.copy(b);
      for (var c = 1, d = a.length; c < d; c++) b = a[c],
      b.x < this.min.x ? this.min.x = b.x : b.x > this.max.x && (this.max.x = b.x),
      b.y < this.min.y ? this.min.y = b.y : b.y > this.max.y && (this.max.y = b.y)
    } else this.makeEmpty();
    return this
  },
  setFromCenterAndSize: function (a, b) {
    var c = THREE.Box2.__v1.copy(b).multiplyScalar(0.5);
    this.min.copy(a).subSelf(c);
    this.max.copy(a).addSelf(c);
    return this
  },
  copy: function (a) {
    this.min.copy(a.min);
    this.max.copy(a.max);
    return this
  },
  makeEmpty: function () {
    this.min.x = this.min.y = Infinity;
    this.max.x = this.max.y = - Infinity;
    return this
  },
  empty: function () {
    return this.max.x < this.min.x || this.max.y < this.min.y
  },
  center: function (a) {
    return (a || new THREE.Vector2).add(this.min, this.max).multiplyScalar(0.5)
  },
  size: function (a) {
    return (a || new THREE.Vector2).sub(this.max, this.min)
  },
  expandByPoint: function (a) {
    this.min.minSelf(a);
    this.max.maxSelf(a);
    return this
  },
  expandByVector: function (a) {
    this.min.subSelf(a);
    this.max.addSelf(a);
    return this
  },
  expandByScalar: function (a) {
    this.min.addScalar( - a);
    this.max.addScalar(a);
    return this
  },
  containsPoint: function (a) {
    return this.min.x <= a.x && a.x <= this.max.x && this.min.y <= a.y && a.y <= this.max.y ? !0 : !1
  },
  containsBox: function (a) {
    return this.min.x <= a.min.x && a.max.x <= this.max.x && this.min.y <= a.min.y && a.max.y <= this.max.y ? !0 : !1
  },
  getParameter: function (a) {
    return new THREE.Vector2((a.x - this.min.x) / (this.max.x - this.min.x), (a.y -
    this.min.y) / (this.max.y - this.min.y))
  },
  isIntersectionBox: function (a) {
    return a.max.x < this.min.x || a.min.x > this.max.x || a.max.y < this.min.y || a.min.y > this.max.y ? !1 : !0
  },
  clampPoint: function (a, b) {
    return (b || new THREE.Vector2).copy(a).clampSelf(this.min, this.max)
  },
  distanceToPoint: function (a) {
    return THREE.Box2.__v1.copy(a).clampSelf(this.min, this.max).subSelf(a).length()
  },
  intersect: function (a) {
    this.min.maxSelf(a.min);
    this.max.minSelf(a.max);
    return this
  },
  union: function (a) {
    this.min.minSelf(a.min);
    this.max.maxSelf(a.max);
    return this
  },
  translate: function (a) {
    this.min.addSelf(a);
    this.max.addSelf(a);
    return this
  },
  equals: function (a) {
    return a.min.equals(this.min) && a.max.equals(this.max)
  },
  clone: function () {
    return (new THREE.Box2).copy(this)
  }
};
THREE.Box2.__v1 = new THREE.Vector2;
THREE.Box3 = function (a, b) {
  this.min = void 0 !== a ? a.clone() : new THREE.Vector3(Infinity, Infinity, Infinity);
  this.max = void 0 !== b ? b.clone() : new THREE.Vector3( - Infinity, - Infinity, - Infinity)
};
THREE.Box3.prototype = {
  constructor: THREE.Box3,
  set: function (a, b) {
    this.min.copy(a);
    this.max.copy(b);
    return this
  },
  setFromPoints: function (a) {
    if (0 < a.length) {
      var b = a[0];
      this.min.copy(b);
      this.max.copy(b);
      for (var c = 1, d = a.length; c < d; c++) b = a[c],
      b.x < this.min.x ? this.min.x = b.x : b.x > this.max.x && (this.max.x = b.x),
      b.y < this.min.y ? this.min.y = b.y : b.y > this.max.y && (this.max.y = b.y),
      b.z < this.min.z ? this.min.z = b.z : b.z > this.max.z && (this.max.z = b.z)
    } else this.makeEmpty();
    return this
  },
  setFromCenterAndSize: function (a, b) {
    var c = THREE.Box3.__v1.copy(b).multiplyScalar(0.5);
    this.min.copy(a).subSelf(c);
    this.max.copy(a).addSelf(c);
    return this
  },
  copy: function (a) {
    this.min.copy(a.min);
    this.max.copy(a.max);
    return this
  },
  makeEmpty: function () {
    this.min.x = this.min.y = this.min.z = Infinity;
    this.max.x = this.max.y = this.max.z = - Infinity;
    return this
  },
  empty: function () {
    return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z
  },
  center: function (a) {
    return (a || new THREE.Vector3).add(this.min, this.max).multiplyScalar(0.5)
  },
  size: function (a) {
    return (a || new THREE.Vector3).sub(this.max, this.min)
  },
  expandByPoint: function (a) {
    this.min.minSelf(a);
    this.max.maxSelf(a);
    return this
  },
  expandByVector: function (a) {
    this.min.subSelf(a);
    this.max.addSelf(a);
    return this
  },
  expandByScalar: function (a) {
    this.min.addScalar( - a);
    this.max.addScalar(a);
    return this
  },
  containsPoint: function (a) {
    return this.min.x <= a.x && a.x <= this.max.x && this.min.y <= a.y && a.y <= this.max.y && this.min.z <= a.z && a.z <= this.max.z ? !0 : !1
  },
  containsBox: function (a) {
    return this.min.x <= a.min.x && a.max.x <= this.max.x && this.min.y <= a.min.y && a.max.y <= this.max.y && this.min.z <= a.min.z && a.max.z <= this.max.z ? !0 : !1
  },
  getParameter: function (a) {
    return new THREE.Vector3((a.x - this.min.x) / (this.max.x - this.min.x), (a.y - this.min.y) / (this.max.y - this.min.y), (a.z - this.min.z) / (this.max.z - this.min.z))
  },
  isIntersectionBox: function (a) {
    return a.max.x < this.min.x || a.min.x > this.max.x || a.max.y < this.min.y || a.min.y > this.max.y || a.max.z < this.min.z || a.min.z > this.max.z ? !1 : !0
  },
  clampPoint: function (a, b) {
    b || new THREE.Vector3;
    return (new THREE.Vector3).copy(a).clampSelf(this.min, this.max)
  },
  distanceToPoint: function (a) {
    return THREE.Box3.__v1.copy(a).clampSelf(this.min, this.max).subSelf(a).length()
  },
  getBoundingSphere: function (a) {
    a = a || new THREE.Sphere;
    a.center = this.center();
    a.radius = 0.5 * this.size(THREE.Box3.__v0).length();
    return a
  },
  intersect: function (a) {
    this.min.maxSelf(a.min);
    this.max.minSelf(a.max);
    return this
  },
  union: function (a) {
    this.min.minSelf(a.min);
    this.max.maxSelf(a.max);
    return this
  },
  transform: function (a) {
    a = [
      a.multiplyVector3(THREE.Box3.__v0.set(this.min.x, this.min.y, this.min.z)),
      a.multiplyVector3(THREE.Box3.__v1.set(this.min.x, this.min.y, this.max.z)),
      a.multiplyVector3(THREE.Box3.__v2.set(this.min.x, this.max.y, this.min.z)),
      a.multiplyVector3(THREE.Box3.__v3.set(this.min.x, this.max.y, this.max.z)),
      a.multiplyVector3(THREE.Box3.__v4.set(this.max.x, this.min.y, this.min.z)),
      a.multiplyVector3(THREE.Box3.__v5.set(this.max.x, this.min.y, this.max.z)),
      a.multiplyVector3(THREE.Box3.__v6.set(this.max.x, this.max.y, this.min.z)),
      a.multiplyVector3(THREE.Box3.__v7.set(this.max.x, this.max.y, this.max.z))
    ];
    this.makeEmpty();
    this.setFromPoints(a);
    return this
  },
  translate: function (a) {
    this.min.addSelf(a);
    this.max.addSelf(a);
    return this
  },
  equals: function (a) {
    return a.min.equals(this.min) && a.max.equals(this.max)
  },
  clone: function () {
    return (new THREE.Box3).copy(this)
  }
};
THREE.Box3.__v0 = new THREE.Vector3;
THREE.Box3.__v1 = new THREE.Vector3;
THREE.Box3.__v2 = new THREE.Vector3;
THREE.Box3.__v3 = new THREE.Vector3;
THREE.Box3.__v4 = new THREE.Vector3;
THREE.Box3.__v5 = new THREE.Vector3;
THREE.Box3.__v6 = new THREE.Vector3;
THREE.Box3.__v7 = new THREE.Vector3;
THREE.Matrix3 = function (a, b, c, d, e, f, g, h, i) {
  this.elements = new Float32Array(9);
  this.set(void 0 !== a ? a : 1, b || 0, c || 0, d || 0, void 0 !== e ? e : 1, f || 0, g || 0, h || 0, void 0 !== i ? i : 1)
};
THREE.Matrix3.prototype = {
  constructor: THREE.Matrix3,
  set: function (a, b, c, d, e, f, g, h, i) {
    var k = this.elements;
    k[0] = a;
    k[3] = b;
    k[6] = c;
    k[1] = d;
    k[4] = e;
    k[7] = f;
    k[2] = g;
    k[5] = h;
    k[8] = i;
    return this
  },
  identity: function () {
    this.set(1, 0, 0, 0, 1, 0, 0, 0, 1);
    return this
  },
  copy: function (a) {
    a = a.elements;
    this.set(a[0], a[3], a[6], a[1], a[4], a[7], a[2], a[5], a[8]);
    return this
  },
  multiplyVector3: function (a) {
    var b = this.elements,
    c = a.x,
    d = a.y,
    e = a.z;
    a.x = b[0] * c + b[3] * d + b[6] * e;
    a.y = b[1] * c + b[4] * d + b[7] * e;
    a.z = b[2] * c + b[5] * d + b[8] * e;
    return a
  },
  multiplyVector3Array: function (a) {
    for (var b = THREE.Matrix3.__v1, c = 0, d = a.length; c < d; c += 3) b.x = a[c],
    b.y = a[c + 1],
    b.z = a[c + 2],
    this.multiplyVector3(b),
    a[c] = b.x,
    a[c + 1] = b.y,
    a[c + 2] = b.z;
    return a
  },
  multiplyScalar: function (a) {
    var b = this.elements;
    b[0] *= a;
    b[3] *= a;
    b[6] *= a;
    b[1] *= a;
    b[4] *= a;
    b[7] *= a;
    b[2] *= a;
    b[5] *= a;
    b[8] *= a;
    return this
  },
  determinant: function () {
    var a = this.elements,
    b = a[0],
    c = a[1],
    d = a[2],
    e = a[3],
    f = a[4],
    g = a[5],
    h = a[6],
    i = a[7],
    a = a[8];
    return b * f * a - b * g * i - c * e * a + c * g * h + d * e * i - d * f * h
  },
  getInverse: function (a, b) {
    var c = a.elements,
    d = this.elements;
    d[0] = c[10] * c[5] - c[6] * c[9];
    d[1] = - c[10] * c[1] + c[2] * c[9];
    d[2] = c[6] * c[1] - c[2] * c[5];
    d[3] = - c[10] * c[4] + c[6] * c[8];
    d[4] = c[10] * c[0] - c[2] * c[8];
    d[5] = - c[6] * c[0] + c[2] * c[4];
    d[6] = c[9] * c[4] - c[5] * c[8];
    d[7] = - c[9] * c[0] + c[1] * c[8];
    d[8] = c[5] * c[0] - c[1] * c[4];
    c = c[0] * d[0] + c[1] * d[3] + c[2] * d[6];
    if (0 === c) {
      if (b) throw Error('Matrix3.getInverse(): can\'t invert matrix, determinant is 0');
      console.warn('Matrix3.getInverse(): can\'t invert matrix, determinant is 0');
      this.identity();
      return this
    }
    this.multiplyScalar(1 / c);
    return this
  },
  transpose: function () {
    var a,
    b = this.elements;
    a = b[1];
    b[1] = b[3];
    b[3] = a;
    a = b[2];
    b[2] = b[6];
    b[6] = a;
    a = b[5];
    b[5] = b[7];
    b[7] = a;
    return this
  },
  transposeIntoArray: function (a) {
    var b = this.elements;
    a[0] = b[0];
    a[1] = b[3];
    a[2] = b[6];
    a[3] = b[1];
    a[4] = b[4];
    a[5] = b[7];
    a[6] = b[2];
    a[7] = b[5];
    a[8] = b[8];
    return this
  },
  clone: function () {
    var a = this.elements;
    return new THREE.Matrix3(a[0], a[3], a[6], a[1], a[4], a[7], a[2], a[5], a[8])
  }
};
THREE.Matrix3.__v1 = new THREE.Vector3;
THREE.Matrix4 = function (a, b, c, d, e, f, g, h, i, k, l, m, p, s, q, n) {
  this.elements = new Float32Array(16);
  this.set(void 0 !== a ? a : 1, b || 0, c || 0, d || 0, e || 0, void 0 !== f ? f : 1, g || 0, h || 0, i || 0, k || 0, void 0 !== l ? l : 1, m || 0, p || 0, s || 0, q || 0, void 0 !== n ? n : 1)
};
THREE.Matrix4.prototype = {
  constructor: THREE.Matrix4,
  set: function (a, b, c, d, e, f, g, h, i, k, l, m, p, s, q, n) {
    var r = this.elements;
    r[0] = a;
    r[4] = b;
    r[8] = c;
    r[12] = d;
    r[1] = e;
    r[5] = f;
    r[9] = g;
    r[13] = h;
    r[2] = i;
    r[6] = k;
    r[10] = l;
    r[14] = m;
    r[3] = p;
    r[7] = s;
    r[11] = q;
    r[15] = n;
    return this
  },
  identity: function () {
    this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    return this
  },
  copy: function (a) {
    a = a.elements;
    this.set(a[0], a[4], a[8], a[12], a[1], a[5], a[9], a[13], a[2], a[6], a[10], a[14], a[3], a[7], a[11], a[15]);
    return this
  },
  setRotationFromEuler: function (a, b) {
    var c = this.elements,
    d = a.x,
    e = a.y,
    f = a.z,
    g = Math.cos(d),
    d = Math.sin(d),
    h = Math.cos(e),
    e = Math.sin(e),
    i = Math.cos(f),
    f = Math.sin(f);
    if (void 0 === b || 'XYZ' === b) {
      var k = g * i,
      l = g * f,
      m = d * i,
      p = d * f;
      c[0] = h * i;
      c[4] = - h * f;
      c[8] = e;
      c[1] = l + m * e;
      c[5] = k - p * e;
      c[9] = - d * h;
      c[2] = p - k * e;
      c[6] = m + l * e;
      c[10] = g * h
    } else 'YXZ' === b ? (k = h * i, l = h * f, m = e * i, p = e * f, c[0] = k + p * d, c[4] = m * d - l, c[8] = g * e, c[1] = g * f, c[5] = g * i, c[9] = - d, c[2] = l * d - m, c[6] = p + k * d, c[10] = g * h) : 'ZXY' === b ? (k = h * i, l = h * f, m = e * i, p = e * f, c[0] = k - p * d, c[4] = - g * f, c[8] = m + l * d, c[1] = l + m * d, c[5] = g * i, c[9] = p - k * d, c[2] = - g * e, c[6] = d, c[10] = g * h) : 'ZYX' === b ? (k = g * i, l = g * f, m = d * i, p = d * f, c[0] = h * i, c[4] = m * e - l, c[8] = k * e + p, c[1] = h * f, c[5] = p * e + k, c[9] = l * e - m, c[2] = - e, c[6] = d * h, c[10] = g * h) : 'YZX' === b ? (k = g * h, l = g * e, m = d * h, p = d * e, c[0] = h * i, c[4] = p - k * f, c[8] = m * f + l, c[1] = f, c[5] = g * i, c[9] = - d * i, c[2] = - e * i, c[6] = l * f + m, c[10] = k - p * f) : 'XZY' === b && (k = g * h, l = g * e, m = d * h, p = d * e, c[0] = h * i, c[4] = - f, c[8] = e * i, c[1] = k * f + p, c[5] = g * i, c[9] = l * f - m, c[2] = m * f - l, c[6] = d * i, c[10] = p * f + k);
    return this
  },
  setRotationFromQuaternion: function (a) {
    var b = this.elements,
    c = a.x,
    d = a.y,
    e = a.z,
    f = a.w,
    g = c + c,
    h = d + d,
    i = e +
    e,
    a = c * g,
    k = c * h,
    c = c * i,
    l = d * h,
    d = d * i,
    e = e * i,
    g = f * g,
    h = f * h,
    f = f * i;
    b[0] = 1 - (l + e);
    b[4] = k - f;
    b[8] = c + h;
    b[1] = k + f;
    b[5] = 1 - (a + e);
    b[9] = d - g;
    b[2] = c - h;
    b[6] = d + g;
    b[10] = 1 - (a + l);
    return this
  },
  lookAt: function (a, b, c) {
    var d = this.elements,
    e = THREE.Matrix4.__v1,
    f = THREE.Matrix4.__v2,
    g = THREE.Matrix4.__v3;
    g.sub(a, b).normalize();
    0 === g.length() && (g.z = 1);
    e.cross(c, g).normalize();
    0 === e.length() && (g.x += 0.0001, e.cross(c, g).normalize());
    f.cross(g, e);
    d[0] = e.x;
    d[4] = f.x;
    d[8] = g.x;
    d[1] = e.y;
    d[5] = f.y;
    d[9] = g.y;
    d[2] = e.z;
    d[6] = f.z;
    d[10] = g.z;
    return this
  },
  multiply: function (a, b) {
    var c = a.elements,
    d = b.elements,
    e = this.elements,
    f = c[0],
    g = c[4],
    h = c[8],
    i = c[12],
    k = c[1],
    l = c[5],
    m = c[9],
    p = c[13],
    s = c[2],
    q = c[6],
    n = c[10],
    r = c[14],
    v = c[3],
    w = c[7],
    x = c[11],
    c = c[15],
    t = d[0],
    K = d[4],
    D = d[8],
    B = d[12],
    z = d[1],
    E = d[5],
    G = d[9],
    I = d[13],
    Y = d[2],
    C = d[6],
    P = d[10],
    A = d[14],
    J = d[3],
    M = d[7],
    T = d[11],
    d = d[15];
    e[0] = f * t + g * z + h * Y + i * J;
    e[4] = f * K + g * E + h * C + i * M;
    e[8] = f * D + g * G + h * P + i * T;
    e[12] = f * B + g * I + h * A + i * d;
    e[1] = k * t + l * z + m * Y + p * J;
    e[5] = k * K + l * E + m * C + p * M;
    e[9] = k * D + l * G + m * P + p * T;
    e[13] = k * B + l * I + m * A + p * d;
    e[2] = s * t + q * z + n * Y + r * J;
    e[6] = s * K + q * E + n * C + r * M;
    e[10] = s * D + q * G + n * P + r * T;
    e[14] = s * B + q * I + n * A + r * d;
    e[3] = v * t + w * z + x * Y + c * J;
    e[7] = v * K + w * E + x * C + c * M;
    e[11] = v * D + w * G + x * P + c * T;
    e[15] = v * B + w * I + x * A + c * d;
    return this
  },
  multiplySelf: function (a) {
    return this.multiply(this, a)
  },
  multiplyToArray: function (a, b, c) {
    var d = this.elements;
    this.multiply(a, b);
    c[0] = d[0];
    c[1] = d[1];
    c[2] = d[2];
    c[3] = d[3];
    c[4] = d[4];
    c[5] = d[5];
    c[6] = d[6];
    c[7] = d[7];
    c[8] = d[8];
    c[9] = d[9];
    c[10] = d[10];
    c[11] = d[11];
    c[12] = d[12];
    c[13] = d[13];
    c[14] = d[14];
    c[15] = d[15];
    return this
  },
  multiplyScalar: function (a) {
    var b = this.elements;
    b[0] *= a;
    b[4] *= a;
    b[8] *= a;
    b[12] *= a;
    b[1] *= a;
    b[5] *= a;
    b[9] *= a;
    b[13] *= a;
    b[2] *= a;
    b[6] *= a;
    b[10] *= a;
    b[14] *= a;
    b[3] *= a;
    b[7] *= a;
    b[11] *= a;
    b[15] *= a;
    return this
  },
  multiplyVector3: function (a) {
    var b = this.elements,
    c = a.x,
    d = a.y,
    e = a.z,
    f = 1 / (b[3] * c + b[7] * d + b[11] * e + b[15]);
    a.x = (b[0] * c + b[4] * d + b[8] * e + b[12]) * f;
    a.y = (b[1] * c + b[5] * d + b[9] * e + b[13]) * f;
    a.z = (b[2] * c + b[6] * d + b[10] * e + b[14]) * f;
    return a
  },
  multiplyVector4: function (a) {
    var b = this.elements,
    c = a.x,
    d = a.y,
    e = a.z,
    f = a.w;
    a.x = b[0] * c + b[4] * d + b[8] * e + b[12] * f;
    a.y = b[1] * c + b[5] * d + b[9] * e + b[13] * f;
    a.z = b[2] * c + b[6] * d + b[10] * e + b[14] * f;
    a.w = b[3] * c + b[7] * d + b[11] * e + b[15] * f;
    return a
  },
  multiplyVector3Array: function (a) {
    for (var b = THREE.Matrix4.__v1, c = 0, d = a.length; c < d; c += 3) b.x = a[c],
    b.y = a[c + 1],
    b.z = a[c + 2],
    this.multiplyVector3(b),
    a[c] = b.x,
    a[c + 1] = b.y,
    a[c + 2] = b.z;
    return a
  },
  rotateAxis: function (a) {
    var b = this.elements,
    c = a.x,
    d = a.y,
    e = a.z;
    a.x = c * b[0] + d * b[4] + e * b[8];
    a.y = c * b[1] + d * b[5] + e * b[9];
    a.z = c * b[2] + d * b[6] + e * b[10];
    a.normalize();
    return a
  },
  crossVector: function (a) {
    var b = this.elements,
    c = new THREE.Vector4;
    c.x = b[0] * a.x + b[4] * a.y + b[8] * a.z + b[12] * a.w;
    c.y = b[1] * a.x + b[5] * a.y + b[9] * a.z + b[13] * a.w;
    c.z = b[2] * a.x + b[6] * a.y + b[10] * a.z + b[14] * a.w;
    c.w = a.w ? b[3] * a.x + b[7] * a.y + b[11] * a.z + b[15] * a.w : 1;
    return c
  },
  determinant: function () {
    var a = this.elements,
    b = a[0],
    c = a[4],
    d = a[8],
    e = a[12],
    f = a[1],
    g = a[5],
    h = a[9],
    i = a[13],
    k = a[2],
    l = a[6],
    m = a[10],
    p = a[14];
    return a[3] * ( + e * h * l - d * i * l - e * g * m + c * i * m + d * g * p - c * h * p) + a[7] * ( + b * h * p - b * i * m + e * f * m - d * f * p + d * i * k - e * h * k) + a[11] * ( + b * i * l - b * g * p - e * f * l + c * f * p + e * g * k - c * i * k) + a[15] * ( - d * g * k - b * h * l + b * g * m + d * f * l - c * f * m + c * h * k)
  },
  transpose: function () {
    var a = this.elements,
    b;
    b = a[1];
    a[1] = a[4];
    a[4] = b;
    b = a[2];
    a[2] = a[8];
    a[8] = b;
    b = a[6];
    a[6] = a[9];
    a[9] = b;
    b = a[3];
    a[3] = a[12];
    a[12] = b;
    b = a[7];
    a[7] = a[13];
    a[13] = b;
    b = a[11];
    a[11] = a[14];
    a[14] = b;
    return this
  },
  flattenToArray: function (a) {
    var b = this.elements;
    a[0] = b[0];
    a[1] = b[1];
    a[2] = b[2];
    a[3] = b[3];
    a[4] = b[4];
    a[5] = b[5];
    a[6] = b[6];
    a[7] = b[7];
    a[8] = b[8];
    a[9] = b[9];
    a[10] = b[10];
    a[11] = b[11];
    a[12] = b[12];
    a[13] = b[13];
    a[14] = b[14];
    a[15] = b[15];
    return a
  },
  flattenToArrayOffset: function (a, b) {
    var c = this.elements;
    a[b] = c[0];
    a[b + 1] = c[1];
    a[b + 2] = c[2];
    a[b +
    3] = c[3];
    a[b + 4] = c[4];
    a[b + 5] = c[5];
    a[b + 6] = c[6];
    a[b + 7] = c[7];
    a[b + 8] = c[8];
    a[b + 9] = c[9];
    a[b + 10] = c[10];
    a[b + 11] = c[11];
    a[b + 12] = c[12];
    a[b + 13] = c[13];
    a[b + 14] = c[14];
    a[b + 15] = c[15];
    return a
  },
  getPosition: function () {
    var a = this.elements;
    return THREE.Matrix4.__v1.set(a[12], a[13], a[14])
  },
  setPosition: function (a) {
    var b = this.elements;
    b[12] = a.x;
    b[13] = a.y;
    b[14] = a.z;
    return this
  },
  getColumnX: function () {
    var a = this.elements;
    return THREE.Matrix4.__v1.set(a[0], a[1], a[2])
  },
  getColumnY: function () {
    var a = this.elements;
    return THREE.Matrix4.__v1.set(a[4], a[5], a[6])
  },
  getColumnZ: function () {
    var a = this.elements;
    return THREE.Matrix4.__v1.set(a[8], a[9], a[10])
  },
  getInverse: function (a, b) {
    var c = this.elements,
    d = a.elements,
    e = d[0],
    f = d[4],
    g = d[8],
    h = d[12],
    i = d[1],
    k = d[5],
    l = d[9],
    m = d[13],
    p = d[2],
    s = d[6],
    q = d[10],
    n = d[14],
    r = d[3],
    v = d[7],
    w = d[11],
    x = d[15];
    c[0] = l * n * v - m * q * v + m * s * w - k * n * w - l * s * x + k * q * x;
    c[4] = h * q * v - g * n * v - h * s * w + f * n * w + g * s * x - f * q * x;
    c[8] = g * m * v - h * l * v + h * k * w - f * m * w - g * k * x + f * l * x;
    c[12] = h * l * s - g * m * s - h * k * q + f * m * q + g * k * n - f * l * n;
    c[1] = m * q * r - l * n * r - m * p * w + i * n * w + l * p * x - i * q * x;
    c[5] = g * n * r - h * q * r +
    h * p * w - e * n * w - g * p * x + e * q * x;
    c[9] = h * l * r - g * m * r - h * i * w + e * m * w + g * i * x - e * l * x;
    c[13] = g * m * p - h * l * p + h * i * q - e * m * q - g * i * n + e * l * n;
    c[2] = k * n * r - m * s * r + m * p * v - i * n * v - k * p * x + i * s * x;
    c[6] = h * s * r - f * n * r - h * p * v + e * n * v + f * p * x - e * s * x;
    c[10] = f * m * r - h * k * r + h * i * v - e * m * v - f * i * x + e * k * x;
    c[14] = h * k * p - f * m * p - h * i * s + e * m * s + f * i * n - e * k * n;
    c[3] = l * s * r - k * q * r - l * p * v + i * q * v + k * p * w - i * s * w;
    c[7] = f * q * r - g * s * r + g * p * v - e * q * v - f * p * w + e * s * w;
    c[11] = g * k * r - f * l * r - g * i * v + e * l * v + f * i * w - e * k * w;
    c[15] = f * l * p - g * k * p + g * i * s - e * l * s - f * i * q + e * k * q;
    c = d[0] * c[0] + d[1] * c[4] + d[2] * c[8] + d[3] * c[12];
    if (0 == c) {
      if (b) throw Error('Matrix4.getInverse(): can\'t invert matrix, determinant is 0');
      console.warn('Matrix4.getInverse(): can\'t invert matrix, determinant is 0');
      this.identity();
      return this
    }
    this.multiplyScalar(1 / c);
    return this
  },
  compose: function (a, b, c) {
    var d = this.elements,
    e = THREE.Matrix4.__m1,
    f = THREE.Matrix4.__m2;
    e.identity();
    e.setRotationFromQuaternion(b);
    f.makeScale(c);
    this.multiply(e, f);
    d[12] = a.x;
    d[13] = a.y;
    d[14] = a.z;
    return this
  },
  decompose: function (a, b, c) {
    var d = this.elements,
    e = THREE.Matrix4.__v1,
    f = THREE.Matrix4.__v2,
    g = THREE.Matrix4.__v3;
    e.set(d[0], d[1], d[2]);
    f.set(d[4], d[5], d[6]);
    g.set(d[8], d[9], d[10]);
    a = a instanceof THREE.Vector3 ? a : new THREE.Vector3;
    b = b instanceof THREE.Quaternion ? b : new THREE.Quaternion;
    c = c instanceof THREE.Vector3 ? c : new THREE.Vector3;
    c.x = e.length();
    c.y = f.length();
    c.z = g.length();
    a.x = d[12];
    a.y = d[13];
    a.z = d[14];
    d = THREE.Matrix4.__m1;
    d.copy(this);
    d.elements[0] /= c.x;
    d.elements[1] /= c.x;
    d.elements[2] /= c.x;
    d.elements[4] /= c.y;
    d.elements[5] /= c.y;
    d.elements[6] /= c.y;
    d.elements[8] /= c.z;
    d.elements[9] /= c.z;
    d.elements[10] /= c.z;
    b.setFromRotationMatrix(d);
    return [a,
    b,
    c]
  },
  extractPosition: function (a) {
    var b = this.elements,
    a = a.elements;
    b[12] = a[12];
    b[13] = a[13];
    b[14] = a[14];
    return this
  },
  extractRotation: function (a) {
    var b = this.elements,
    a = a.elements,
    c = THREE.Matrix4.__v1,
    d = 1 / c.set(a[0], a[1], a[2]).length(),
    e = 1 / c.set(a[4], a[5], a[6]).length(),
    c = 1 / c.set(a[8], a[9], a[10]).length();
    b[0] = a[0] * d;
    b[1] = a[1] * d;
    b[2] = a[2] * d;
    b[4] = a[4] * e;
    b[5] = a[5] * e;
    b[6] = a[6] * e;
    b[8] = a[8] * c;
    b[9] = a[9] * c;
    b[10] = a[10] * c;
    return this
  },
  translate: function (a) {
    var b = this.elements,
    c = a.x,
    d = a.y,
    a = a.z;
    b[12] = b[0] * c + b[4] * d + b[8] * a + b[12];
    b[13] = b[1] * c + b[5] * d + b[9] * a + b[13];
    b[14] = b[2] * c + b[6] * d + b[10] * a + b[14];
    b[15] = b[3] * c + b[7] * d + b[11] * a + b[15];
    return this
  },
  rotateX: function (a) {
    var b = this.elements,
    c = b[4],
    d = b[5],
    e = b[6],
    f = b[7],
    g = b[8],
    h = b[9],
    i = b[10],
    k = b[11],
    l = Math.cos(a),
    a = Math.sin(a);
    b[4] = l * c + a * g;
    b[5] = l * d + a * h;
    b[6] = l * e + a * i;
    b[7] = l * f + a * k;
    b[8] = l * g - a * c;
    b[9] = l * h - a * d;
    b[10] = l * i - a * e;
    b[11] = l * k - a * f;
    return this
  },
  rotateY: function (a) {
    var b = this.elements,
    c = b[0],
    d = b[1],
    e = b[2],
    f = b[3],
    g = b[8],
    h = b[9],
    i = b[10],
    k = b[11],
    l = Math.cos(a),
    a = Math.sin(a);
    b[0] = l * c - a * g;
    b[1] = l * d - a * h;
    b[2] = l * e - a * i;
    b[3] = l * f - a * k;
    b[8] = l * g + a * c;
    b[9] = l * h + a * d;
    b[10] = l * i + a * e;
    b[11] = l * k + a * f;
    return this
  },
  rotateZ: function (a) {
    var b = this.elements,
    c = b[0],
    d = b[1],
    e = b[2],
    f = b[3],
    g = b[4],
    h = b[5],
    i = b[6],
    k = b[7],
    l = Math.cos(a),
    a = Math.sin(a);
    b[0] = l * c + a * g;
    b[1] = l * d + a * h;
    b[2] = l * e + a * i;
    b[3] = l * f + a * k;
    b[4] = l * g - a * c;
    b[5] = l * h - a * d;
    b[6] = l * i - a * e;
    b[7] = l * k - a * f;
    return this
  },
  rotateByAxis: function (a, b) {
    var c = this.elements;
    if (1 === a.x && 0 === a.y && 0 === a.z) return this.rotateX(b);
    if (0 === a.x && 1 === a.y && 0 === a.z) return this.rotateY(b);
    if (0 === a.x && 0 === a.y && 1 === a.z) return this.rotateZ(b);
    var d = a.x,
    e = a.y,
    f = a.z,
    g = Math.sqrt(d * d + e * e + f * f),
    d = d / g,
    e = e / g,
    f = f / g,
    g = d * d,
    h = e * e,
    i = f * f,
    k = Math.cos(b),
    l = Math.sin(b),
    m = 1 - k,
    p = d * e * m,
    s = d * f * m,
    m = e * f * m,
    d = d * l,
    q = e * l,
    l = f * l,
    f = g + (1 - g) * k,
    g = p + l,
    e = s - q,
    p = p - l,
    h = h + (1 - h) * k,
    l = m + d,
    s = s + q,
    m = m - d,
    i = i + (1 - i) * k,
    k = c[0],
    d = c[1],
    q = c[2],
    n = c[3],
    r = c[4],
    v = c[5],
    w = c[6],
    x = c[7],
    t = c[8],
    K = c[9],
    D = c[10],
    B = c[11];
    c[0] = f * k + g * r + e * t;
    c[1] = f * d + g * v + e * K;
    c[2] = f * q + g * w + e * D;
    c[3] = f * n + g * x + e * B;
    c[4] = p * k + h * r + l * t;
    c[5] = p * d + h * v + l * K;
    c[6] = p * q + h * w + l * D;
    c[7] = p * n + h * x + l * B;
    c[8] = s * k + m * r + i * t;
    c[9] = s * d + m * v + i * K;
    c[10] = s * q + m * w +
    i * D;
    c[11] = s * n + m * x + i * B;
    return this
  },
  scale: function (a) {
    var b = this.elements,
    c = a.x,
    d = a.y,
    a = a.z;
    b[0] *= c;
    b[4] *= d;
    b[8] *= a;
    b[1] *= c;
    b[5] *= d;
    b[9] *= a;
    b[2] *= c;
    b[6] *= d;
    b[10] *= a;
    b[3] *= c;
    b[7] *= d;
    b[11] *= a;
    return this
  },
  getMaxScaleOnAxis: function () {
    var a = this.elements;
    return Math.sqrt(Math.max(a[0] * a[0] + a[1] * a[1] + a[2] * a[2], Math.max(a[4] * a[4] + a[5] * a[5] + a[6] * a[6], a[8] * a[8] + a[9] * a[9] + a[10] * a[10])))
  },
  makeTranslation: function (a) {
    this.set(1, 0, 0, a.x, 0, 1, 0, a.y, 0, 0, 1, a.z, 0, 0, 0, 1);
    return this
  },
  makeRotationX: function (a) {
    var b = Math.cos(a),
    a = Math.sin(a);
    this.set(1, 0, 0, 0, 0, b, - a, 0, 0, a, b, 0, 0, 0, 0, 1);
    return this
  },
  makeRotationY: function (a) {
    var b = Math.cos(a),
    a = Math.sin(a);
    this.set(b, 0, a, 0, 0, 1, 0, 0, - a, 0, b, 0, 0, 0, 0, 1);
    return this
  },
  makeRotationZ: function (a) {
    var b = Math.cos(a),
    a = Math.sin(a);
    this.set(b, - a, 0, 0, a, b, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    return this
  },
  makeRotationAxis: function (a, b) {
    var c = Math.cos(b),
    d = Math.sin(b),
    e = 1 - c,
    f = a.x,
    g = a.y,
    h = a.z,
    i = e * f,
    k = e * g;
    this.set(i * f + c, i * g - d * h, i * h + d * g, 0, i * g + d * h, k * g + c, k * h - d * f, 0, i * h - d * g, k * h + d * f, e * h * h + c, 0, 0, 0, 0, 1);
    return this
  },
  makeScale: function (a) {
    this.set(a.x, 0, 0, 0, 0, a.y, 0, 0, 0, 0, a.z, 0, 0, 0, 0, 1);
    return this
  },
  makeFrustum: function (a, b, c, d, e, f) {
    var g = this.elements;
    g[0] = 2 * e / (b - a);
    g[4] = 0;
    g[8] = (b + a) / (b - a);
    g[12] = 0;
    g[1] = 0;
    g[5] = 2 * e / (d - c);
    g[9] = (d + c) / (d - c);
    g[13] = 0;
    g[2] = 0;
    g[6] = 0;
    g[10] = - (f + e) / (f - e);
    g[14] = - 2 * f * e / (f - e);
    g[3] = 0;
    g[7] = 0;
    g[11] = - 1;
    g[15] = 0;
    return this
  },
  makePerspective: function (a, b, c, d) {
    var a = c * Math.tan(THREE.Math.degToRad(0.5 * a)),
    e = - a;
    return this.makeFrustum(e * b, a * b, e, a, c, d)
  },
  makeOrthographic: function (a, b, c, d, e, f) {
    var g = this.elements,
    h = b - a,
    i = c - d,
    k = f - e;
    g[0] = 2 / h;
    g[4] = 0;
    g[8] = 0;
    g[12] = - ((b + a) / h);
    g[1] = 0;
    g[5] = 2 / i;
    g[9] = 0;
    g[13] = - ((c + d) / i);
    g[2] = 0;
    g[6] = 0;
    g[10] = - 2 / k;
    g[14] = - ((f + e) / k);
    g[3] = 0;
    g[7] = 0;
    g[11] = 0;
    g[15] = 1;
    return this
  },
  clone: function () {
    var a = this.elements;
    return new THREE.Matrix4(a[0], a[4], a[8], a[12], a[1], a[5], a[9], a[13], a[2], a[6], a[10], a[14], a[3], a[7], a[11], a[15])
  }
};
THREE.Matrix4.__v1 = new THREE.Vector3;
THREE.Matrix4.__v2 = new THREE.Vector3;
THREE.Matrix4.__v3 = new THREE.Vector3;
THREE.Matrix4.__m1 = new THREE.Matrix4;
THREE.Matrix4.__m2 = new THREE.Matrix4;
THREE.Ray = function (a, b) {
  this.origin = void 0 !== a ? a.clone() : new THREE.Vector3;
  this.direction = void 0 !== b ? b.clone() : new THREE.Vector3
};
THREE.Ray.prototype = {
  constructor: THREE.Ray,
  set: function (a, b) {
    this.origin.copy(a);
    this.direction.copy(b);
    return this
  },
  copy: function (a) {
    this.origin.copy(a.origin);
    this.direction.copy(a.direction);
    return this
  },
  at: function (a, b) {
    return (b || new THREE.Vector3).copy(this.direction).multiplyScalar(a).addSelf(this.origin)
  },
  recastSelf: function (a) {
    this.origin.copy(this.at(a, THREE.Ray.__v1));
    return this
  },
  closestPointToPoint: function (a, b) {
    var c = b || new THREE.Vector3;
    c.sub(a, this.origin);
    var d = c.dot(this.direction);
    return c.copy(this.direction).multiplyScalar(d).addSelf(this.origin)
  },
  distanceToPoint: function (a) {
    var b = THREE.Ray.__v1.sub(a, this.origin).dot(this.direction);
    THREE.Ray.__v1.copy(this.direction).multiplyScalar(b).addSelf(this.origin);
    return THREE.Ray.__v1.distanceTo(a)
  },
  isIntersectionSphere: function (a) {
    return this.distanceToPoint(a.center) <= a.radius
  },
  isIntersectionPlane: function (a) {
    return 0 != a.normal.dot(this.direction) || 0 == a.distanceToPoint(this.origin) ? !0 : !1
  },
  distanceToPlane: function (a) {
    var b = a.normal.dot(this.direction);
    if (0 == b) {
      if (0 == a.distanceToPoint(this.origin)) return 0
    } else return - (this.origin.dot(a.normal) + a.constant) / b
  },
  intersectPlane: function (a, b) {
    var c = this.distanceToPlane(a);
    return void 0 === c ? void 0 : this.at(c, b)
  },
  transform: function (a) {
    this.direction = a.multiplyVector3(this.direction.addSelf(this.origin));
    this.origin = a.multiplyVector3(this.origin);
    this.direction.subSelf(this.origin);
    return this
  },
  equals: function (a) {
    return a.origin.equals(this.origin) && a.direction.equals(this.direction)
  },
  clone: function () {
    return (new THREE.Ray).copy(this)
  }
};
THREE.Ray.__v1 = new THREE.Vector3;
THREE.Ray.__v2 = new THREE.Vector3;
THREE.Frustum = function () {
  this.planes = [
    new THREE.Plane,
    new THREE.Plane,
    new THREE.Plane,
    new THREE.Plane,
    new THREE.Plane,
    new THREE.Plane
  ]
};
THREE.Frustum.prototype.setFromMatrix = function (a) {
  var b = this.planes,
  c = a.elements,
  a = c[0],
  d = c[1],
  e = c[2],
  f = c[3],
  g = c[4],
  h = c[5],
  i = c[6],
  k = c[7],
  l = c[8],
  m = c[9],
  p = c[10],
  s = c[11],
  q = c[12],
  n = c[13],
  r = c[14],
  c = c[15];
  b[0].setComponents(f - a, k - g, s - l, c - q);
  b[1].setComponents(f + a, k + g, s + l, c + q);
  b[2].setComponents(f + d, k + h, s + m, c + n);
  b[3].setComponents(f - d, k - h, s - m, c - n);
  b[4].setComponents(f - e, k - i, s - p, c - r);
  b[5].setComponents(f + e, k + i, s + p, c + r);
  for (a = 0; 6 > a; a++) b[a].normalize()
};
THREE.Frustum.prototype.contains = function (a) {
  for (var b = this.planes, c = a.matrixWorld, d = c.getPosition(), a = - a.geometry.boundingSphere.radius * c.getMaxScaleOnAxis(), e = c = 0; 6 > e; e++) if (c = b[e].distanceToPoint(d), c <= a) return !1;
  return !0
};
THREE.Frustum.__v1 = new THREE.Vector3;
THREE.Plane = function (a, b) {
  this.normal = void 0 !== a ? a.clone() : new THREE.Vector3(1, 0, 0);
  this.constant = void 0 !== b ? b : 0
};
THREE.Plane.prototype = {
  constructor: THREE.Plane,
  set: function (a, b) {
    this.normal.copy(a);
    this.constant = b;
    return this
  },
  setComponents: function (a, b, c, d) {
    this.normal.set(a, b, c);
    this.constant = d;
    return this
  },
  setFromNormalAndCoplanarPoint: function (a, b) {
    this.normal.copy(a).normalize();
    this.constant = - b.dot(this.normal);
    return this
  },
  setFromCoplanarPoints: function (a, b, c) {
    b = THREE.Plane.__v1.sub(c, b).crossSelf(THREE.Plane.__v2.sub(a, b)).normalize();
    this.setFromNormalAndCoplanarPoint(b, a);
    return this
  },
  copy: function (a) {
    this.normal.copy(a.normal);
    this.constant = a.constant;
    return this
  },
  normalize: function () {
    var a = 1 / this.normal.length();
    this.normal.multiplyScalar(a);
    this.constant *= a;
    return this
  },
  distanceToPoint: function (a) {
    return this.normal.dot(a) + this.constant
  },
  distanceToSphere: function (a) {
    return this.distanceToPoint(a.center) - a.radius
  },
  projectPoint: function (a, b) {
    return this.orthoPoint(a, b).subSelf(a).negate()
  },
  orthoPoint: function (a, b) {
    var c = this.distanceToPoint(a);
    return (b || new THREE.Vector3).copy(this.normal).multiplyScalar(c)
  },
  isIntersectionLine: function (a, b) {
    var c = this.distanceToPoint(a),
    d = this.distanceToPoint(b);
    return 0 > c && 0 < d || 0 > d && 0 < c
  },
  intersectLine: function (a, b, c) {
    var c = c || new THREE.Vector3,
    b = THREE.Plane.__v1.sub(b, a),
    d = this.normal.dot(b);
    if (0 == d) {
      if (0 == this.distanceToPoint(a)) return c.copy(a)
    } else return d = - (a.dot(this.normal) + this.constant) / d,
    0 > d || 1 < d ? void 0 : c.copy(b).multiplyScalar(d).addSelf(a)
  },
  coplanarPoint: function (a) {
    return (a || new THREE.Vector3).copy(this.normal).multiplyScalar( - this.constant)
  },
  transform: function (a, b) {
    var c = THREE.Plane.__v1,
    d = THREE.Plane.__v2,
    b = b || (new THREE.Matrix3).getInverse(a).transpose(),
    c = b.multiplyVector3(c.copy(this.normal)),
    d = this.coplanarPoint(d),
    d = a.multiplyVector3(d);
    this.setFromNormalAndCoplanarPoint(c, d);
    return this
  },
  translate: function (a) {
    this.constant -= a.dot(this.normal);
    return this
  },
  equals: function (a) {
    return a.normal.equals(this.normal) && a.constant == this.constant
  },
  clone: function () {
    return (new THREE.Plane).copy(this)
  }
};
THREE.Plane.__vZero = new THREE.Vector3(0, 0, 0);
THREE.Plane.__v1 = new THREE.Vector3;
THREE.Plane.__v2 = new THREE.Vector3;
THREE.Sphere = function (a, b) {
  this.center = void 0 === a ? new THREE.Vector3 : a.clone();
  this.radius = void 0 === b ? 0 : b
};
THREE.Sphere.prototype = {
  constructor: THREE.Sphere,
  set: function (a, b) {
    this.center.copy(a);
    this.radius = b;
    return this
  },
  setFromCenterAndPoints: function (a, b) {
    for (var c = 0, d = 0, e = b.length; d < e; d++) var f = a.distanceToSquared(b[d]),
    c = Math.max(c, f);
    this.center = a;
    this.radius = Math.sqrt(c);
    return this
  },
  copy: function (a) {
    this.center.copy(a.center);
    this.radius = a.radius;
    return this
  },
  empty: function () {
    return 0 >= this.radius
  },
  containsPoint: function (a) {
    return a.distanceToSquared(this.center) <= this.radius * this.radius
  },
  distanceToPoint: function (a) {
    return a.distanceTo(this.center) -
    this.radius
  },
  clampPoint: function (a, b) {
    var c = this.center.distanceToSquared(a),
    d = b || new THREE.Vector3;
    d.copy(a);
    c > this.radius * this.radius && (d.subSelf(this.center).normalize(), d.multiplyScalar(this.radius).addSelf(this.center));
    return d
  },
  getBoundingBox: function (a) {
    a = a || new THREE.Box3;
    a.set(this.center, this.center);
    a.expandByScalar(this.radius);
    return a
  },
  transform: function (a) {
    this.center = a.multiplyVector3(this.center);
    this.radius *= a.getMaxScaleOnAxis();
    return this
  },
  translate: function (a) {
    this.center.addSelf(a);
    return this
  },
  equals: function (a) {
    return a.center.equals(this.center) && a.radius === this.radius
  },
  clone: function () {
    return (new THREE.Sphere).copy(this)
  }
};
THREE.Math = {
  clamp: function (a, b, c) {
    return a < b ? b : a > c ? c : a
  },
  clampBottom: function (a, b) {
    return a < b ? b : a
  },
  mapLinear: function (a, b, c, d, e) {
    return d + (a - b) * (e - d) / (c - b)
  },
  random16: function () {
    return (65280 * Math.random() + 255 * Math.random()) / 65535
  },
  randInt: function (a, b) {
    return a + Math.floor(Math.random() * (b - a + 1))
  },
  randFloat: function (a, b) {
    return a + Math.random() * (b - a)
  },
  randFloatSpread: function (a) {
    return a * (0.5 - Math.random())
  },
  sign: function (a) {
    return 0 > a ? - 1 : 0 < a ? 1 : 0
  },
  degToRad: function (a) {
    return a * THREE.Math.__d2r
  },
  radToDeg: function (a) {
    return a * THREE.Math.__r2d
  }
};
THREE.Math.__d2r = Math.PI / 180;
THREE.Math.__r2d = 180 / Math.PI;
THREE.Quaternion = function (a, b, c, d) {
  this.x = a || 0;
  this.y = b || 0;
  this.z = c || 0;
  this.w = void 0 !== d ? d : 1
};
THREE.Quaternion.prototype = {
  constructor: THREE.Quaternion,
  set: function (a, b, c, d) {
    this.x = a;
    this.y = b;
    this.z = c;
    this.w = d;
    return this
  },
  copy: function (a) {
    this.x = a.x;
    this.y = a.y;
    this.z = a.z;
    this.w = a.w;
    return this
  },
  setFromEuler: function (a, b) {
    var c = Math.cos(a.x / 2),
    d = Math.cos(a.y / 2),
    e = Math.cos(a.z / 2),
    f = Math.sin(a.x / 2),
    g = Math.sin(a.y / 2),
    h = Math.sin(a.z / 2);
    void 0 === b || 'XYZ' === b ? (this.x = f * d * e + c * g * h, this.y = c * g * e - f * d * h, this.z = c * d * h + f * g * e, this.w = c * d * e - f * g * h) : 'YXZ' === b ? (this.x = f * d * e + c * g * h, this.y = c * g * e - f * d * h, this.z = c * d * h - f * g * e, this.w = c * d * e + f * g * h) : 'ZXY' === b ? (this.x = f * d * e - c * g * h, this.y = c * g * e + f * d * h, this.z = c * d * h + f * g * e, this.w = c * d * e - f * g * h) : 'ZYX' === b ? (this.x = f * d * e - c * g * h, this.y = c * g * e + f * d * h, this.z = c * d * h - f * g * e, this.w = c * d * e + f * g * h) : 'YZX' === b ? (this.x = f * d * e + c * g * h, this.y = c * g * e + f * d * h, this.z = c * d * h - f * g * e, this.w = c * d * e - f * g * h) : 'XZY' === b && (this.x = f * d * e - c * g * h, this.y = c * g * e - f * d * h, this.z = c * d * h + f * g * e, this.w = c * d * e + f * g * h);
    return this
  },
  setFromAxisAngle: function (a, b) {
    var c = b / 2,
    d = Math.sin(c);
    this.x = a.x * d;
    this.y = a.y * d;
    this.z = a.z * d;
    this.w = Math.cos(c);
    return this
  },
  setFromRotationMatrix: function (a) {
    var b = a.elements,
    c = b[0],
    a = b[4],
    d = b[8],
    e = b[1],
    f = b[5],
    g = b[9],
    h = b[2],
    i = b[6],
    b = b[10],
    k = c + f + b;
    0 < k ? (c = 0.5 / Math.sqrt(k + 1), this.w = 0.25 / c, this.x = (i - g) * c, this.y = (d - h) * c, this.z = (e - a) * c) : c > f && c > b ? (c = 2 * Math.sqrt(1 + c - f - b), this.w = (i - g) / c, this.x = 0.25 * c, this.y = (a + e) / c, this.z = (d + h) / c) : f > b ? (c = 2 * Math.sqrt(1 + f - c - b), this.w = (d - h) / c, this.x = (a + e) / c, this.y = 0.25 * c, this.z = (g + i) / c) : (c = 2 * Math.sqrt(1 + b - c - f), this.w = (e - a) / c, this.x = (d + h) / c, this.y = (g + i) / c, this.z = 0.25 * c);
    return this
  },
  inverse: function () {
    this.conjugate().normalize();
    return this
  },
  conjugate: function () {
    this.x *= - 1;
    this.y *= - 1;
    this.z *= - 1;
    return this
  },
  lengthSq: function () {
    return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
  },
  length: function () {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w)
  },
  normalize: function () {
    var a = this.length();
    0 === a ? (this.z = this.y = this.x = 0, this.w = 1) : (a = 1 / a, this.x *= a, this.y *= a, this.z *= a, this.w *= a);
    return this
  },
  multiply: function (a, b) {
    this.copy(a);
    return this.multiplySelf(b)
  },
  multiplySelf: function (a) {
    var b = this.x,
    c = this.y,
    d = this.z,
    e = this.w,
    f = a.x,
    g = a.y,
    h = a.z,
    a = a.w;
    this.x = b * a + e * f + c * h - d * g;
    this.y = c * a + e * g + d * f - b * h;
    this.z = d * a + e * h + b * g - c * f;
    this.w = e * a - b * f - c * g - d * h;
    return this
  },
  multiplyVector3: function (a, b) {
    b || (b = a);
    var c = a.x,
    d = a.y,
    e = a.z,
    f = this.x,
    g = this.y,
    h = this.z,
    i = this.w,
    k = i * c + g * e - h * d,
    l = i * d + h * c - f * e,
    m = i * e + f * d - g * c,
    c = - f * c - g * d - h * e;
    b.x = k * i + c * - f + l * - h - m * - g;
    b.y = l * i + c * - g + m * - f - k * - h;
    b.z = m * i + c * - h + k * - g - l * - f;
    return b
  },
  slerpSelf: function (a, b) {
    var c = this.x,
    d = this.y,
    e = this.z,
    f = this.w,
    g = f * a.w + c * a.x + d * a.y + e * a.z;
    0 > g ? (this.w = - a.w, this.x = - a.x, this.y = - a.y, this.z = - a.z, g = - g) : this.copy(a);
    if (1 <= g) return this.w = f,
    this.x = c,
    this.y = d,
    this.z = e,
    this;
    var h = Math.acos(g),
    i = Math.sqrt(1 - g * g);
    if (0.001 > Math.abs(i)) return this.w = 0.5 * (f + this.w),
    this.x = 0.5 * (c + this.x),
    this.y = 0.5 * (d + this.y),
    this.z = 0.5 * (e + this.z),
    this;
    g = Math.sin((1 - b) * h) / i;
    h = Math.sin(b * h) / i;
    this.w = f * g + this.w * h;
    this.x = c * g + this.x * h;
    this.y = d * g + this.y * h;
    this.z = e * g + this.z * h;
    return this
  },
  equals: function (a) {
    return a.x === this.x && a.y === this.y && a.z === this.z && a.w === this.w
  },
  clone: function () {
    return new THREE.Quaternion(this.x, this.y, this.z, this.w)
  }
};
THREE.Quaternion.slerp = function (a, b, c, d) {
  return c.copy(a).slerpSelf(b, d)
};
THREE.Spline = function (a) {
  function b(a, b, c, d, e, f, g) {
    a = 0.5 * (c - a);
    d = 0.5 * (d - b);
    return (2 * (b - c) + a + d) * g + ( - 3 * (b - c) - 2 * a - d) * f + a * e + b
  }
  this.points = a;
  var c = [
  ],
  d = {
    x: 0,
    y: 0,
    z: 0
  },
  e,
  f,
  g,
  h,
  i,
  k,
  l,
  m,
  p;
  this.initFromArray = function (a) {
    this.points = [
    ];
    for (var b = 0; b < a.length; b++) this.points[b] = {
      x: a[b][0],
      y: a[b][1],
      z: a[b][2]
    }
  };
  this.getPoint = function (a) {
    e = (this.points.length - 1) * a;
    f = Math.floor(e);
    g = e - f;
    c[0] = 0 === f ? f : f - 1;
    c[1] = f;
    c[2] = f > this.points.length - 2 ? this.points.length - 1 : f + 1;
    c[3] = f > this.points.length - 3 ? this.points.length - 1 :
    f + 2;
    k = this.points[c[0]];
    l = this.points[c[1]];
    m = this.points[c[2]];
    p = this.points[c[3]];
    h = g * g;
    i = g * h;
    d.x = b(k.x, l.x, m.x, p.x, g, h, i);
    d.y = b(k.y, l.y, m.y, p.y, g, h, i);
    d.z = b(k.z, l.z, m.z, p.z, g, h, i);
    return d
  };
  this.getControlPointsArray = function () {
    var a,
    b,
    c = this.points.length,
    d = [
    ];
    for (a = 0; a < c; a++) b = this.points[a],
    d[a] = [
      b.x,
      b.y,
      b.z
    ];
    return d
  };
  this.getLength = function (a) {
    var b,
    c,
    d,
    e = b = b = 0,
    f = new THREE.Vector3,
    g = new THREE.Vector3,
    h = [
    ],
    i = 0;
    h[0] = 0;
    a || (a = 100);
    c = this.points.length * a;
    f.copy(this.points[0]);
    for (a = 1; a < c; a++) b = a / c,
    d = this.getPoint(b),
    g.copy(d),
    i += g.distanceTo(f),
    f.copy(d),
    b *= this.points.length - 1,
    b = Math.floor(b),
    b != e && (h[b] = i, e = b);
    h[h.length] = i;
    return {
      chunks: h,
      total: i
    }
  };
  this.reparametrizeByArcLength = function (a) {
    var b,
    c,
    d,
    e,
    f,
    g,
    h = [
    ],
    i = new THREE.Vector3,
    k = this.getLength();
    h.push(i.copy(this.points[0]).clone());
    for (b = 1; b < this.points.length; b++) {
      c = k.chunks[b] - k.chunks[b - 1];
      g = Math.ceil(a * c / k.total);
      e = (b - 1) / (this.points.length - 1);
      f = b / (this.points.length - 1);
      for (c = 1; c < g - 1; c++) d = e + c * (1 / g) * (f - e),
      d = this.getPoint(d),
      h.push(i.copy(d).clone());
      h.push(i.copy(this.points[b]).clone())
    }
    this.points = h
  }
};
THREE.Triangle = function (a, b, c) {
  this.a = new THREE.Vector3;
  this.b = new THREE.Vector3;
  this.c = new THREE.Vector3;
  void 0 !== a && (void 0 !== b && void 0 !== c) && (this.a.copy(a), this.b.copy(b), this.c.copy(c))
};
THREE.Triangle.normal = function (a, b, c, d) {
  d = d || new THREE.Vector3;
  d.sub(c, b);
  THREE.Triangle.__v0.sub(a, b);
  d.crossSelf(THREE.Triangle.__v0);
  a = d.lengthSq();
  return 0 < a ? d.multiplyScalar(1 / Math.sqrt(a)) : d.set(0, 0, 0)
};
THREE.Triangle.barycoordFromPoint = function (a, b, c, d, e) {
  THREE.Triangle.__v0.sub(d, b);
  THREE.Triangle.__v1.sub(c, b);
  THREE.Triangle.__v2.sub(a, b);
  var a = THREE.Triangle.__v0.dot(THREE.Triangle.__v0),
  b = THREE.Triangle.__v0.dot(THREE.Triangle.__v1),
  c = THREE.Triangle.__v0.dot(THREE.Triangle.__v2),
  f = THREE.Triangle.__v1.dot(THREE.Triangle.__v1),
  d = THREE.Triangle.__v1.dot(THREE.Triangle.__v2),
  g = a * f - b * b,
  e = e || new THREE.Vector3;
  if (0 == g) return e.set( - 2, - 1, - 1);
  g = 1 / g;
  f = (f * c - b * d) * g;
  a = (a * d - b * c) * g;
  return e.set(1 - f - a, a, f)
};
THREE.Triangle.containsPoint = function (a, b, c, d) {
  a = THREE.Triangle.barycoordFromPoint(a, b, c, d, THREE.Triangle.__v3);
  return 0 <= a.x && 0 <= a.y && 1 >= a.x + a.y
};
THREE.Triangle.prototype = {
  constructor: THREE.Triangle,
  set: function (a, b, c) {
    this.a.copy(a);
    this.b.copy(b);
    this.c.copy(c);
    return this
  },
  setFromPointsAndIndices: function (a, b, c, d) {
    this.a.copy(a[b]);
    this.b.copy(a[c]);
    this.c.copy(a[d]);
    return this
  },
  copy: function (a) {
    this.a.copy(a.a);
    this.b.copy(a.b);
    this.c.copy(a.c);
    return this
  },
  area: function () {
    THREE.Triangle.__v0.sub(this.c, this.b);
    THREE.Triangle.__v1.sub(this.a, this.b);
    return 0.5 * THREE.Triangle.__v0.crossSelf(THREE.Triangle.__v1).length()
  },
  midpoint: function (a) {
    return (a || new THREE.Vector3).add(this.a, this.b).addSelf(this.c).multiplyScalar(1 / 3)
  },
  normal: function (a) {
    return THREE.Triangle.normal(this.a, this.b, this.c, a)
  },
  plane: function (a) {
    return (a || new THREE.Plane).setFromCoplanarPoints(this.a, this.b, this.c)
  },
  barycoordFromPoint: function (a, b) {
    return THREE.Triangle.barycoordFromPoint(a, this.a, this.b, this.c, b)
  },
  containsPoint: function (a) {
    return THREE.Triangle.containsPoint(a, this.a, this.b, this.c)
  },
  equals: function (a) {
    return a.a.equals(this.a) && a.b.equals(this.b) && a.c.equals(this.c)
  },
  clone: function () {
    return (new THREE.Triangle).copy(this)
  }
};
THREE.Triangle.__v0 = new THREE.Vector3;
THREE.Triangle.__v1 = new THREE.Vector3;
THREE.Triangle.__v2 = new THREE.Vector3;
THREE.Triangle.__v3 = new THREE.Vector3;
THREE.Vertex = function (a) {
  console.warn('THREE.Vertex has been DEPRECATED. Use THREE.Vector3 instead.');
  return a
};
THREE.UV = function (a, b) {
  console.warn('THREE.UV has been DEPRECATED. Use THREE.Vector2 instead.');
  return new THREE.Vector2(a, b)
};
THREE.Clock = function (a) {
  this.autoStart = void 0 !== a ? a : !0;
  this.elapsedTime = this.oldTime = this.startTime = 0;
  this.running = !1
};
THREE.Clock.prototype.start = function () {
  this.oldTime = this.startTime = Date.now();
  this.running = !0
};
THREE.Clock.prototype.stop = function () {
  this.getElapsedTime();
  this.running = !1
};
THREE.Clock.prototype.getElapsedTime = function () {
  this.getDelta();
  return this.elapsedTime
};
THREE.Clock.prototype.getDelta = function () {
  var a = 0;
  this.autoStart && !this.running && this.start();
  if (this.running) {
    var b = Date.now(),
    a = 0.001 * (b - this.oldTime);
    this.oldTime = b;
    this.elapsedTime += a
  }
  return a
};
THREE.EventDispatcher = function () {
  var a = {
  };
  this.addEventListener = function (b, c) {
    void 0 === a[b] && (a[b] = [
    ]);
    - 1 === a[b].indexOf(c) && a[b].push(c)
  };
  this.removeEventListener = function (b, c) {
    var d = a[b].indexOf(c);
    - 1 !== d && a[b].splice(d, 1)
  };
  this.dispatchEvent = function (b) {
    var c = a[b.type];
    if (void 0 !== c) {
      b.target = this;
      for (var d = 0, e = c.length; d < e; d++) c[d].call(this, b)
    }
  }
};
(function (a) {
  a.Raycaster = function (b, c, d, e) {
    this.ray = new a.Ray(b, c);
    0 < this.ray.direction.length() && this.ray.direction.normalize();
    this.near = d || 0;
    this.far = e || Infinity
  };
  var b = new a.Sphere,
  c = new a.Ray,
  d = new a.Plane,
  e = new a.Vector3,
  f = new a.Matrix4,
  g = function (a, b) {
    return a.distance - b.distance
  };
  new a.Vector3;
  new a.Vector3;
  new a.Vector3;
  var h = function (g, h, i) {
    if (g instanceof a.Particle) {
      h = h.ray.distanceToPoint(g.matrixWorld.getPosition());
      if (h > g.scale.x) return i;
      i.push({
        distance: h,
        point: g.position,
        face: null,
        object: g
      })
    } else if (g instanceof a.Mesh) {
      b.set(g.matrixWorld.getPosition(), g.geometry.boundingSphere.radius * g.matrixWorld.getMaxScaleOnAxis());
      if (!h.ray.isIntersectionSphere(b)) return i;
      var p = g.geometry,
      s = p.vertices,
      q = g.material instanceof a.MeshFaceMaterial,
      n = !0 === q ? g.material.materials : null,
      r = g.material.side,
      v,
      w,
      x,
      t = h.precision;
      g.matrixRotationWorld.extractRotation(g.matrixWorld);
      f.getInverse(g.matrixWorld);
      c.copy(h.ray).transform(f);
      for (var K = 0, D = p.faces.length; K < D; K++) {
        var B = p.faces[K],
        r = !0 ===
        q ? n[B.materialIndex] : g.material;
        if (void 0 !== r) {
          d.setFromNormalAndCoplanarPoint(B.normal, s[B.a]);
          var z = c.distanceToPlane(d);
          if (!(Math.abs(z) < t) && !(0 > z)) {
            r = r.side;
            if (r !== a.DoubleSide && (v = c.direction.dot(d.normal), !(r === a.FrontSide ? 0 > v : 0 < v))) continue;
            if (!(z < h.near || z > h.far)) {
              e = c.at(z, e);
              if (B instanceof a.Face3) {
                if (r = s[B.a], v = s[B.b], w = s[B.c], !a.Triangle.containsPoint(e, r, v, w)) continue
              } else if (B instanceof a.Face4) {
                if (r = s[B.a], v = s[B.b], w = s[B.c], x = s[B.d], !a.Triangle.containsPoint(e, r, v, x) && !a.Triangle.containsPoint(e, v, w, x)) continue
              } else throw Error('face type not supported');
              i.push({
                distance: z,
                point: h.ray.at(z),
                face: B,
                faceIndex: K,
                object: g
              })
            }
          }
        }
      }
    }
  },
  i = function (a, b, c) {
    for (var a = a.getDescendants(), d = 0, e = a.length; d < e; d++) h(a[d], b, c)
  };
  a.Raycaster.prototype.precision = 0.0001;
  a.Raycaster.prototype.set = function (a, b) {
    this.ray.set(a, b);
    0 < this.ray.direction.length() && this.ray.direction.normalize()
  };
  a.Raycaster.prototype.intersectObject = function (a, b) {
    var c = [
    ];
    !0 === b && i(a, this, c);
    h(a, this, c);
    c.sort(g);
    return c
  };
  a.Raycaster.prototype.intersectObjects = function (a, b) {
    for (var c = [
    ], d = 0, e = a.length; d < e; d++) h(a[d], this, c),
    !0 === b && i(a[d], this, c);
    c.sort(g);
    return c
  }
}) (THREE);
THREE.Object3D = function () {
  this.id = THREE.Object3DIdCount++;
  this.name = '';
  this.properties = {
  };
  this.parent = void 0;
  this.children = [
  ];
  this.up = new THREE.Vector3(0, 1, 0);
  this.position = new THREE.Vector3;
  this.rotation = new THREE.Vector3;
  this.eulerOrder = THREE.Object3D.defaultEulerOrder;
  this.scale = new THREE.Vector3(1, 1, 1);
  this.renderDepth = null;
  this.rotationAutoUpdate = !0;
  this.matrix = new THREE.Matrix4;
  this.matrixWorld = new THREE.Matrix4;
  this.matrixRotationWorld = new THREE.Matrix4;
  this.matrixWorldNeedsUpdate = this.matrixAutoUpdate = !0;
  this.quaternion = new THREE.Quaternion;
  this.useQuaternion = !1;
  this.visible = !0;
  this.receiveShadow = this.castShadow = !1;
  this.frustumCulled = !0;
  this._vector = new THREE.Vector3
};
THREE.Object3D.prototype = {
  constructor: THREE.Object3D,
  applyMatrix: function (a) {
    this.matrix.multiply(a, this.matrix);
    this.scale.getScaleFromMatrix(this.matrix);
    a = (new THREE.Matrix4).extractRotation(this.matrix);
    this.rotation.setEulerFromRotationMatrix(a, this.eulerOrder);
    this.position.getPositionFromMatrix(this.matrix)
  },
  translate: function (a, b) {
    this.matrix.rotateAxis(b);
    this.position.addSelf(b.multiplyScalar(a))
  },
  translateX: function (a) {
    this.translate(a, this._vector.set(1, 0, 0))
  },
  translateY: function (a) {
    this.translate(a, this._vector.set(0, 1, 0))
  },
  translateZ: function (a) {
    this.translate(a, this._vector.set(0, 0, 1))
  },
  localToWorld: function (a) {
    return this.matrixWorld.multiplyVector3(a)
  },
  worldToLocal: function (a) {
    return THREE.Object3D.__m1.getInverse(this.matrixWorld).multiplyVector3(a)
  },
  lookAt: function (a) {
    this.matrix.lookAt(a, this.position, this.up);
    this.rotationAutoUpdate && (!1 === this.useQuaternion ? this.rotation.setEulerFromRotationMatrix(this.matrix, this.eulerOrder) : this.quaternion.copy(this.matrix.decompose() [1]))
  },
  add: function (a) {
    if (a ===
    this) console.warn('THREE.Object3D.add: An object can\'t be added as a child of itself.');
     else if (a instanceof THREE.Object3D) {
      void 0 !== a.parent && a.parent.remove(a);
      a.parent = this;
      this.children.push(a);
      for (var b = this; void 0 !== b.parent; ) b = b.parent;
      void 0 !== b && b instanceof THREE.Scene && b.__addObject(a)
    }
  },
  remove: function (a) {
    var b = this.children.indexOf(a);
    if ( - 1 !== b) {
      a.parent = void 0;
      this.children.splice(b, 1);
      for (b = this; void 0 !== b.parent; ) b = b.parent;
      void 0 !== b && b instanceof THREE.Scene && b.__removeObject(a)
    }
  },
  traverse: function (a) {
    a(this);
    for (var b = 0, c = this.children.length; b < c; b++) this.children[b].traverse(a)
  },
  getChildByName: function (a, b) {
    for (var c = 0, d = this.children.length; c < d; c++) {
      var e = this.children[c];
      if (e.name === a || !0 === b && (e = e.getChildByName(a, b), void 0 !== e)) return e
    }
  },
  getDescendants: function (a) {
    void 0 === a && (a = [
    ]);
    Array.prototype.push.apply(a, this.children);
    for (var b = 0, c = this.children.length; b < c; b++) this.children[b].getDescendants(a);
    return a
  },
  updateMatrix: function () {
    this.matrix.setPosition(this.position);
    !1 === this.useQuaternion ? this.matrix.setRotationFromEuler(this.rotation, this.eulerOrder) : this.matrix.setRotationFromQuaternion(this.quaternion);
    (1 !== this.scale.x || 1 !== this.scale.y || 1 !== this.scale.z) && this.matrix.scale(this.scale);
    this.matrixWorldNeedsUpdate = !0
  },
  updateMatrixWorld: function (a) {
    !0 === this.matrixAutoUpdate && this.updateMatrix();
    if (!0 === this.matrixWorldNeedsUpdate || !0 === a) void 0 === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiply(this.parent.matrixWorld, this.matrix),
    this.matrixWorldNeedsUpdate = !1,
    a = !0;
    for (var b = 0, c = this.children.length; b < c; b++) this.children[b].updateMatrixWorld(a)
  },
  clone: function (a) {
    void 0 === a && (a = new THREE.Object3D);
    a.name = this.name;
    a.up.copy(this.up);
    a.position.copy(this.position);
    a.rotation instanceof THREE.Vector3 && a.rotation.copy(this.rotation);
    a.eulerOrder = this.eulerOrder;
    a.scale.copy(this.scale);
    a.renderDepth = this.renderDepth;
    a.rotationAutoUpdate = this.rotationAutoUpdate;
    a.matrix.copy(this.matrix);
    a.matrixWorld.copy(this.matrixWorld);
    a.matrixRotationWorld.copy(this.matrixRotationWorld);
    a.matrixAutoUpdate = this.matrixAutoUpdate;
    a.matrixWorldNeedsUpdate = this.matrixWorldNeedsUpdate;
    a.quaternion.copy(this.quaternion);
    a.useQuaternion = this.useQuaternion;
    a.visible = this.visible;
    a.castShadow = this.castShadow;
    a.receiveShadow = this.receiveShadow;
    a.frustumCulled = this.frustumCulled;
    for (var b = 0; b < this.children.length; b++) a.add(this.children[b].clone());
    return a
  }
};
THREE.Object3D.__m1 = new THREE.Matrix4;
THREE.Object3D.defaultEulerOrder = 'XYZ';
THREE.Object3DIdCount = 0;
THREE.Projector = function () {
  function a() {
    if (f === h) {
      var a = new THREE.RenderableObject;
      g.push(a);
      h++;
      f++;
      return a
    }
    return g[f++]
  }
  function b() {
    if (k === m) {
      var a = new THREE.RenderableVertex;
      l.push(a);
      m++;
      k++;
      return a
    }
    return l[k++]
  }
  function c(a, b) {
    return b.z - a.z
  }
  function d(a, b) {
    var c = 0,
    d = 1,
    e = a.z + a.w,
    f = b.z + b.w,
    g = - a.z + a.w,
    h = - b.z + b.w;
    if (0 <= e && 0 <= f && 0 <= g && 0 <= h) return !0;
    if (0 > e && 0 > f || 0 > g && 0 > h) return !1;
    0 > e ? c = Math.max(c, e / (e - f)) : 0 > f && (d = Math.min(d, e / (e - f)));
    0 > g ? c = Math.max(c, g / (g - h)) : 0 > h && (d = Math.min(d, g / (g - h)));
    if (d <
    c) return !1;
    a.lerpSelf(b, c);
    b.lerpSelf(a, 1 - d);
    return !0
  }
  var e,
  f,
  g = [
  ],
  h = 0,
  i,
  k,
  l = [
  ],
  m = 0,
  p,
  s,
  q = [
  ],
  n = 0,
  r,
  v = [
  ],
  w = 0,
  x,
  t,
  K = [
  ],
  D = 0,
  B,
  z,
  E = [
  ],
  G = 0,
  I = {
    objects: [
    ],
    sprites: [
    ],
    lights: [
    ],
    elements: [
    ]
  },
  Y = new THREE.Vector3,
  C = new THREE.Vector4,
  P = new THREE.Matrix4,
  A = new THREE.Matrix4,
  J,
  M = new THREE.Matrix4,
  T = new THREE.Matrix3,
  N = new THREE.Matrix3,
  fa = new THREE.Vector3,
  oa = new THREE.Frustum,
  L = new THREE.Vector4,
  Z = new THREE.Vector4;
  this.projectVector = function (a, b) {
    b.matrixWorldInverse.getInverse(b.matrixWorld);
    A.multiply(b.projectionMatrix, b.matrixWorldInverse);
    A.multiplyVector3(a);
    return a
  };
  this.unprojectVector = function (a, b) {
    b.projectionMatrixInverse.getInverse(b.projectionMatrix);
    A.multiply(b.matrixWorld, b.projectionMatrixInverse);
    A.multiplyVector3(a);
    return a
  };
  this.pickingRay = function (a, b) {
    a.z = - 1;
    var c = new THREE.Vector3(a.x, a.y, 1);
    this.unprojectVector(a, b);
    this.unprojectVector(c, b);
    c.subSelf(a).normalize();
    return new THREE.Raycaster(a, c)
  };
  this.projectScene = function (g, h, m, H) {
    var ja = h.near,
    ha = h.far,
    ia = !1,
    ka,
    W,
    ba,
    qa,
    Na,
    ya,
    ma,
    sa,
    Pa,
    nb,
    la,
    fb,
    ob;
    z = t = r = s = 0;
    I.elements.length = 0;
    g.updateMatrixWorld();
    void 0 === h.parent && h.updateMatrixWorld();
    P.getInverse(h.matrixWorld);
    A.multiply(h.projectionMatrix, P);
    N.getInverse(P);
    N.transpose();
    oa.setFromMatrix(A);
    f = 0;
    I.objects.length = 0;
    I.sprites.length = 0;
    I.lights.length = 0;
    var pb = function (b) {
      for (var c = 0, d = b.children.length; c < d; c++) {
        var f = b.children[c];
        if (!1 !== f.visible) {
          if (f instanceof THREE.Light) I.lights.push(f);
           else if (f instanceof THREE.Mesh || f instanceof THREE.Line) {
            if (!1 === f.frustumCulled || !0 === oa.contains(f)) e = a(),
            e.object = f,
            null !== f.renderDepth ? e.z = f.renderDepth : (Y.copy(f.matrixWorld.getPosition()), A.multiplyVector3(Y), e.z = Y.z),
            I.objects.push(e)
          } else f instanceof THREE.Sprite || f instanceof THREE.Particle ? (e = a(), e.object = f, null !== f.renderDepth ? e.z = f.renderDepth : (Y.copy(f.matrixWorld.getPosition()), A.multiplyVector3(Y), e.z = Y.z), I.sprites.push(e)) : (e = a(), e.object = f, null !== f.renderDepth ? e.z = f.renderDepth : (Y.copy(f.matrixWorld.getPosition()), A.multiplyVector3(Y), e.z = Y.z), I.objects.push(e));
          pb(f)
        }
      }
    };
    pb(g);
    !0 === m && I.objects.sort(c);
    g = 0;
    for (m = I.objects.length; g < m; g++) if (sa = I.objects[g].object, J = sa.matrixWorld, k = 0, sa instanceof THREE.Mesh) {
      Pa = sa.geometry;
      ba = Pa.vertices;
      nb = Pa.faces;
      Pa = Pa.faceVertexUvs;
      T.getInverse(J);
      T.transpose();
      fb = sa.material instanceof THREE.MeshFaceMaterial;
      ob = !0 === fb ? sa.material : null;
      ka = 0;
      for (W = ba.length; ka < W; ka++) i = b(),
      i.positionWorld.copy(ba[ka]),
      J.multiplyVector3(i.positionWorld),
      i.positionScreen.copy(i.positionWorld),
      A.multiplyVector4(i.positionScreen),
      i.positionScreen.x /=
      i.positionScreen.w,
      i.positionScreen.y /= i.positionScreen.w,
      i.visible = i.positionScreen.z > ja && i.positionScreen.z < ha;
      ba = 0;
      for (ka = nb.length; ba < ka; ba++) {
        W = nb[ba];
        var zb = !0 === fb ? ob.materials[W.materialIndex] : sa.material;
        if (void 0 !== zb) {
          ya = zb.side;
          if (W instanceof THREE.Face3) if (qa = l[W.a], Na = l[W.b], ma = l[W.c], !0 === qa.visible && !0 === Na.visible && !0 === ma.visible) if (ia = 0 > (ma.positionScreen.x - qa.positionScreen.x) * (Na.positionScreen.y - qa.positionScreen.y) - (ma.positionScreen.y - qa.positionScreen.y) * (Na.positionScreen.x -
          qa.positionScreen.x), ya === THREE.DoubleSide || ia === (ya === THREE.FrontSide)) s === n ? (la = new THREE.RenderableFace3, q.push(la), n++, s++, p = la) : p = q[s++],
          p.v1.copy(qa),
          p.v2.copy(Na),
          p.v3.copy(ma);
           else continue;
           else continue;
           else if (W instanceof THREE.Face4) if (qa = l[W.a], Na = l[W.b], ma = l[W.c], la = l[W.d], !0 === qa.visible && !0 === Na.visible && !0 === ma.visible && !0 === la.visible) if (ia = 0 > (la.positionScreen.x - qa.positionScreen.x) * (Na.positionScreen.y - qa.positionScreen.y) - (la.positionScreen.y - qa.positionScreen.y) * (Na.positionScreen.x -
          qa.positionScreen.x) || 0 > (Na.positionScreen.x - ma.positionScreen.x) * (la.positionScreen.y - ma.positionScreen.y) - (Na.positionScreen.y - ma.positionScreen.y) * (la.positionScreen.x - ma.positionScreen.x), ya === THREE.DoubleSide || ia === (ya === THREE.FrontSide)) {
            if (r === w) {
              var gb = new THREE.RenderableFace4;
              v.push(gb);
              w++;
              r++;
              p = gb
            } else p = v[r++];
            p.v1.copy(qa);
            p.v2.copy(Na);
            p.v3.copy(ma);
            p.v4.copy(la)
          } else continue;
           else continue;
          p.normalModel.copy(W.normal);
          !1 === ia && (ya === THREE.BackSide || ya === THREE.DoubleSide) && p.normalModel.negate();
          T.multiplyVector3(p.normalModel);
          p.normalModel.normalize();
          p.normalModelView.copy(p.normalModel);
          N.multiplyVector3(p.normalModelView);
          p.centroidModel.copy(W.centroid);
          J.multiplyVector3(p.centroidModel);
          ma = W.vertexNormals;
          qa = 0;
          for (Na = ma.length; qa < Na; qa++) la = p.vertexNormalsModel[qa],
          la.copy(ma[qa]),
          !1 === ia && (ya === THREE.BackSide || ya === THREE.DoubleSide) && la.negate(),
          T.multiplyVector3(la),
          la.normalize(),
          gb = p.vertexNormalsModelView[qa],
          gb.copy(la),
          N.multiplyVector3(gb);
          p.vertexNormalsLength = ma.length;
          ya = 0;
          for (qa = Pa.length; ya < qa; ya++) if (la = Pa[ya][ba], void 0 !== la) {
            Na = 0;
            for (ma = la.length; Na < ma; Na++) p.uvs[ya][Na] = la[Na]
          }
          p.color = W.color;
          p.material = zb;
          fa.copy(p.centroidModel);
          A.multiplyVector3(fa);
          p.z = fa.z;
          I.elements.push(p)
        }
      }
    } else if (sa instanceof THREE.Line) {
      M.multiply(A, J);
      ba = sa.geometry.vertices;
      qa = b();
      qa.positionScreen.copy(ba[0]);
      M.multiplyVector4(qa.positionScreen);
      nb = sa.type === THREE.LinePieces ? 2 : 1;
      ka = 1;
      for (W = ba.length; ka < W; ka++) qa = b(),
      qa.positionScreen.copy(ba[ka]),
      M.multiplyVector4(qa.positionScreen),
      0 < (ka + 1) % nb || (Na = l[k - 2], L.copy(qa.positionScreen), Z.copy(Na.positionScreen), !0 === d(L, Z) && (L.multiplyScalar(1 / L.w), Z.multiplyScalar(1 / Z.w), t === D ? (Pa = new THREE.RenderableLine, K.push(Pa), D++, t++, x = Pa) : x = K[t++], x.v1.positionScreen.copy(L), x.v2.positionScreen.copy(Z), x.z = Math.max(L.z, Z.z), x.material = sa.material, I.elements.push(x)))
    }
    g = 0;
    for (m = I.sprites.length; g < m; g++) sa = I.sprites[g].object,
    J = sa.matrixWorld,
    sa instanceof THREE.Particle && (C.set(J.elements[12], J.elements[13], J.elements[14], 1), A.multiplyVector4(C), C.z /= C.w, 0 < C.z && 1 > C.z && (z === G ? (ja = new THREE.RenderableParticle, E.push(ja), G++, z++, B = ja) : B = E[z++], B.object = sa, B.x = C.x / C.w, B.y = C.y / C.w, B.z = C.z, B.rotation = sa.rotation.z, B.scale.x = sa.scale.x * Math.abs(B.x - (C.x + h.projectionMatrix.elements[0]) / (C.w + h.projectionMatrix.elements[12])), B.scale.y = sa.scale.y * Math.abs(B.y - (C.y + h.projectionMatrix.elements[5]) / (C.w + h.projectionMatrix.elements[13])), B.material = sa.material, I.elements.push(B)));
    !0 === H && I.elements.sort(c);
    return I
  }
};
THREE.Face3 = function (a, b, c, d, e, f) {
  this.a = a;
  this.b = b;
  this.c = c;
  this.normal = d instanceof THREE.Vector3 ? d : new THREE.Vector3;
  this.vertexNormals = d instanceof Array ? d : [
  ];
  this.color = e instanceof THREE.Color ? e : new THREE.Color;
  this.vertexColors = e instanceof Array ? e : [
  ];
  this.vertexTangents = [
  ];
  this.materialIndex = void 0 !== f ? f : 0;
  this.centroid = new THREE.Vector3
};
THREE.Face3.prototype = {
  constructor: THREE.Face3,
  clone: function () {
    var a = new THREE.Face3(this.a, this.b, this.c);
    a.normal.copy(this.normal);
    a.color.copy(this.color);
    a.centroid.copy(this.centroid);
    a.materialIndex = this.materialIndex;
    var b,
    c;
    b = 0;
    for (c = this.vertexNormals.length; b < c; b++) a.vertexNormals[b] = this.vertexNormals[b].clone();
    b = 0;
    for (c = this.vertexColors.length; b < c; b++) a.vertexColors[b] = this.vertexColors[b].clone();
    b = 0;
    for (c = this.vertexTangents.length; b < c; b++) a.vertexTangents[b] = this.vertexTangents[b].clone();
    return a
  }
};
THREE.Face4 = function (a, b, c, d, e, f, g) {
  this.a = a;
  this.b = b;
  this.c = c;
  this.d = d;
  this.normal = e instanceof THREE.Vector3 ? e : new THREE.Vector3;
  this.vertexNormals = e instanceof Array ? e : [
  ];
  this.color = f instanceof THREE.Color ? f : new THREE.Color;
  this.vertexColors = f instanceof Array ? f : [
  ];
  this.vertexTangents = [
  ];
  this.materialIndex = void 0 !== g ? g : 0;
  this.centroid = new THREE.Vector3
};
THREE.Face4.prototype = {
  constructor: THREE.Face4,
  clone: function () {
    var a = new THREE.Face4(this.a, this.b, this.c, this.d);
    a.normal.copy(this.normal);
    a.color.copy(this.color);
    a.centroid.copy(this.centroid);
    a.materialIndex = this.materialIndex;
    var b,
    c;
    b = 0;
    for (c = this.vertexNormals.length; b < c; b++) a.vertexNormals[b] = this.vertexNormals[b].clone();
    b = 0;
    for (c = this.vertexColors.length; b < c; b++) a.vertexColors[b] = this.vertexColors[b].clone();
    b = 0;
    for (c = this.vertexTangents.length; b < c; b++) a.vertexTangents[b] = this.vertexTangents[b].clone();
    return a
  }
};
THREE.Geometry = function () {
  THREE.EventDispatcher.call(this);
  this.id = THREE.GeometryIdCount++;
  this.name = '';
  this.vertices = [
  ];
  this.colors = [
  ];
  this.normals = [
  ];
  this.faces = [
  ];
  this.faceUvs = [
    []
  ];
  this.faceVertexUvs = [
    []
  ];
  this.morphTargets = [
  ];
  this.morphColors = [
  ];
  this.morphNormals = [
  ];
  this.skinWeights = [
  ];
  this.skinIndices = [
  ];
  this.lineDistances = [
  ];
  this.boundingSphere = this.boundingBox = null;
  this.hasTangents = !1;
  this.dynamic = !0;
  this.buffersNeedUpdate = this.lineDistancesNeedUpdate = this.colorsNeedUpdate = this.tangentsNeedUpdate = this.normalsNeedUpdate = this.uvsNeedUpdate = this.elementsNeedUpdate = this.verticesNeedUpdate = !1
};
THREE.Geometry.prototype = {
  constructor: THREE.Geometry,
  applyMatrix: function (a) {
    var b = new THREE.Matrix3;
    b.getInverse(a).transpose();
    for (var c = 0, d = this.vertices.length; c < d; c++) a.multiplyVector3(this.vertices[c]);
    c = 0;
    for (d = this.faces.length; c < d; c++) {
      var e = this.faces[c];
      b.multiplyVector3(e.normal).normalize();
      for (var f = 0, g = e.vertexNormals.length; f < g; f++) b.multiplyVector3(e.vertexNormals[f]).normalize();
      a.multiplyVector3(e.centroid)
    }
  },
  computeCentroids: function () {
    var a,
    b,
    c;
    a = 0;
    for (b = this.faces.length; a < b; a++) c = this.faces[a],
    c.centroid.set(0, 0, 0),
    c instanceof THREE.Face3 ? (c.centroid.addSelf(this.vertices[c.a]), c.centroid.addSelf(this.vertices[c.b]), c.centroid.addSelf(this.vertices[c.c]), c.centroid.divideScalar(3)) : c instanceof THREE.Face4 && (c.centroid.addSelf(this.vertices[c.a]), c.centroid.addSelf(this.vertices[c.b]), c.centroid.addSelf(this.vertices[c.c]), c.centroid.addSelf(this.vertices[c.d]), c.centroid.divideScalar(4))
  },
  computeFaceNormals: function () {
    var a,
    b,
    c,
    d,
    e,
    f,
    g = new THREE.Vector3,
    h = new THREE.Vector3;
    a = 0;
    for (b = this.faces.length; a < b; a++) c = this.faces[a],
    d = this.vertices[c.a],
    e = this.vertices[c.b],
    f = this.vertices[c.c],
    g.sub(f, e),
    h.sub(d, e),
    g.crossSelf(h),
    g.normalize(),
    c.normal.copy(g)
  },
  computeVertexNormals: function (a) {
    var b,
    c,
    d,
    e;
    if (void 0 === this.__tmpVertices) {
      e = this.__tmpVertices = Array(this.vertices.length);
      b = 0;
      for (c = this.vertices.length; b < c; b++) e[b] = new THREE.Vector3;
      b = 0;
      for (c = this.faces.length; b < c; b++) d = this.faces[b],
      d instanceof THREE.Face3 ? d.vertexNormals = [
        new THREE.Vector3,
        new THREE.Vector3,
        new THREE.Vector3
      ] : d instanceof THREE.Face4 && (d.vertexNormals = [
        new THREE.Vector3,
        new THREE.Vector3,
        new THREE.Vector3,
        new THREE.Vector3
      ])
    } else {
      e = this.__tmpVertices;
      b = 0;
      for (c = this.vertices.length; b < c; b++) e[b].set(0, 0, 0)
    }
    if (a) {
      var f,
      g,
      h,
      i = new THREE.Vector3,
      k = new THREE.Vector3,
      l = new THREE.Vector3,
      m = new THREE.Vector3,
      p = new THREE.Vector3;
      b = 0;
      for (c = this.faces.length; b < c; b++) d = this.faces[b],
      d instanceof THREE.Face3 ? (a = this.vertices[d.a], f = this.vertices[d.b], g = this.vertices[d.c], i.sub(g, f), k.sub(a, f), i.crossSelf(k), e[d.a].addSelf(i), e[d.b].addSelf(i), e[d.c].addSelf(i)) : d instanceof THREE.Face4 && (a = this.vertices[d.a], f = this.vertices[d.b], g = this.vertices[d.c], h = this.vertices[d.d], l.sub(h, f), k.sub(a, f), l.crossSelf(k), e[d.a].addSelf(l), e[d.b].addSelf(l), e[d.d].addSelf(l), m.sub(h, g), p.sub(f, g), m.crossSelf(p), e[d.b].addSelf(m), e[d.c].addSelf(m), e[d.d].addSelf(m))
    } else {
      b = 0;
      for (c = this.faces.length; b < c; b++) d = this.faces[b],
      d instanceof THREE.Face3 ? (e[d.a].addSelf(d.normal), e[d.b].addSelf(d.normal), e[d.c].addSelf(d.normal)) :
      d instanceof THREE.Face4 && (e[d.a].addSelf(d.normal), e[d.b].addSelf(d.normal), e[d.c].addSelf(d.normal), e[d.d].addSelf(d.normal))
    }
    b = 0;
    for (c = this.vertices.length; b < c; b++) e[b].normalize();
    b = 0;
    for (c = this.faces.length; b < c; b++) d = this.faces[b],
    d instanceof THREE.Face3 ? (d.vertexNormals[0].copy(e[d.a]), d.vertexNormals[1].copy(e[d.b]), d.vertexNormals[2].copy(e[d.c])) : d instanceof THREE.Face4 && (d.vertexNormals[0].copy(e[d.a]), d.vertexNormals[1].copy(e[d.b]), d.vertexNormals[2].copy(e[d.c]), d.vertexNormals[3].copy(e[d.d]))
  },
  computeMorphNormals: function () {
    var a,
    b,
    c,
    d,
    e;
    c = 0;
    for (d = this.faces.length; c < d; c++) {
      e = this.faces[c];
      e.__originalFaceNormal ? e.__originalFaceNormal.copy(e.normal) : e.__originalFaceNormal = e.normal.clone();
      e.__originalVertexNormals || (e.__originalVertexNormals = [
      ]);
      a = 0;
      for (b = e.vertexNormals.length; a < b; a++) e.__originalVertexNormals[a] ? e.__originalVertexNormals[a].copy(e.vertexNormals[a]) : e.__originalVertexNormals[a] = e.vertexNormals[a].clone()
    }
    var f = new THREE.Geometry;
    f.faces = this.faces;
    a = 0;
    for (b = this.morphTargets.length; a <
    b; a++) {
      if (!this.morphNormals[a]) {
        this.morphNormals[a] = {
        };
        this.morphNormals[a].faceNormals = [
        ];
        this.morphNormals[a].vertexNormals = [
        ];
        var g = this.morphNormals[a].faceNormals,
        h = this.morphNormals[a].vertexNormals,
        i,
        k;
        c = 0;
        for (d = this.faces.length; c < d; c++) e = this.faces[c],
        i = new THREE.Vector3,
        k = e instanceof THREE.Face3 ? {
          a: new THREE.Vector3,
          b: new THREE.Vector3,
          c: new THREE.Vector3
        }
         : {
          a: new THREE.Vector3,
          b: new THREE.Vector3,
          c: new THREE.Vector3,
          d: new THREE.Vector3
        },
        g.push(i),
        h.push(k)
      }
      g = this.morphNormals[a];
      f.vertices = this.morphTargets[a].vertices;
      f.computeFaceNormals();
      f.computeVertexNormals();
      c = 0;
      for (d = this.faces.length; c < d; c++) e = this.faces[c],
      i = g.faceNormals[c],
      k = g.vertexNormals[c],
      i.copy(e.normal),
      e instanceof THREE.Face3 ? (k.a.copy(e.vertexNormals[0]), k.b.copy(e.vertexNormals[1]), k.c.copy(e.vertexNormals[2])) : (k.a.copy(e.vertexNormals[0]), k.b.copy(e.vertexNormals[1]), k.c.copy(e.vertexNormals[2]), k.d.copy(e.vertexNormals[3]))
    }
    c = 0;
    for (d = this.faces.length; c < d; c++) e = this.faces[c],
    e.normal = e.__originalFaceNormal,
    e.vertexNormals = e.__originalVertexNormals
  },
  computeTangents: function () {
    function a(a, b, c, d, e, f, z) {
      h = a.vertices[b];
      i = a.vertices[c];
      k = a.vertices[d];
      l = g[e];
      m = g[f];
      p = g[z];
      s = i.x - h.x;
      q = k.x - h.x;
      n = i.y - h.y;
      r = k.y - h.y;
      v = i.z - h.z;
      w = k.z - h.z;
      x = m.x - l.x;
      t = p.x - l.x;
      K = m.y - l.y;
      D = p.y - l.y;
      B = 1 / (x * D - t * K);
      I.set((D * s - K * q) * B, (D * n - K * r) * B, (D * v - K * w) * B);
      Y.set((x * q - t * s) * B, (x * r - t * n) * B, (x * w - t * v) * B);
      E[b].addSelf(I);
      E[c].addSelf(I);
      E[d].addSelf(I);
      G[b].addSelf(Y);
      G[c].addSelf(Y);
      G[d].addSelf(Y)
    }
    var b,
    c,
    d,
    e,
    f,
    g,
    h,
    i,
    k,
    l,
    m,
    p,
    s,
    q,
    n,
    r,
    v,
    w,
    x,
    t,
    K,
    D,
    B,
    z,
    E = [
    ],
    G = [
    ],
    I = new THREE.Vector3,
    Y = new THREE.Vector3,
    C = new THREE.Vector3,
    P = new THREE.Vector3,
    A = new THREE.Vector3;
    b = 0;
    for (c = this.vertices.length; b < c; b++) E[b] = new THREE.Vector3,
    G[b] = new THREE.Vector3;
    b = 0;
    for (c = this.faces.length; b < c; b++) f = this.faces[b],
    g = this.faceVertexUvs[0][b],
    f instanceof THREE.Face3 ? a(this, f.a, f.b, f.c, 0, 1, 2) : f instanceof THREE.Face4 && (a(this, f.a, f.b, f.d, 0, 1, 3), a(this, f.b, f.c, f.d, 1, 2, 3));
    var J = [
      'a',
      'b',
      'c',
      'd'
    ];
    b = 0;
    for (c = this.faces.length; b < c; b++) {
      f = this.faces[b];
      for (d = 0; d <
      f.vertexNormals.length; d++) A.copy(f.vertexNormals[d]),
      e = f[J[d]],
      z = E[e],
      C.copy(z),
      C.subSelf(A.multiplyScalar(A.dot(z))).normalize(),
      P.cross(f.vertexNormals[d], z),
      e = P.dot(G[e]),
      e = 0 > e ? - 1 : 1,
      f.vertexTangents[d] = new THREE.Vector4(C.x, C.y, C.z, e)
    }
    this.hasTangents = !0
  },
  computeLineDistances: function () {
    for (var a = 0, b = this.vertices, c = 0, d = b.length; c < d; c++) 0 < c && (a += b[c].distanceTo(b[c - 1])),
    this.lineDistances[c] = a
  },
  computeBoundingBox: function () {
    null === this.boundingBox && (this.boundingBox = new THREE.Box3);
    this.boundingBox.setFromPoints(this.vertices)
  },
  computeBoundingSphere: function () {
    null === this.boundingSphere && (this.boundingSphere = new THREE.Sphere);
    this.boundingSphere.setFromCenterAndPoints(this.boundingSphere.center, this.vertices)
  },
  mergeVertices: function () {
    var a = {
    },
    b = [
    ],
    c = [
    ],
    d,
    e = Math.pow(10, 4),
    f,
    g,
    h,
    i;
    f = 0;
    for (g = this.vertices.length; f < g; f++) d = this.vertices[f],
    d = [
      Math.round(d.x * e),
      Math.round(d.y * e),
      Math.round(d.z * e)
    ].join('_'),
    void 0 === a[d] ? (a[d] = f, b.push(this.vertices[f]), c[f] = b.length - 1) : c[f] = c[a[d]];
    f = 0;
    for (g = this.faces.length; f < g; f++) if (a = this.faces[f], a instanceof THREE.Face3) a.a = c[a.a],
    a.b = c[a.b],
    a.c = c[a.c];
     else if (a instanceof THREE.Face4) {
      a.a = c[a.a];
      a.b = c[a.b];
      a.c = c[a.c];
      a.d = c[a.d];
      d = [
        a.a,
        a.b,
        a.c,
        a.d
      ];
      for (e = 3; 0 < e; e--) if (d.indexOf(a['abcd'[e]]) !== e) {
        d.splice(e, 1);
        this.faces[f] = new THREE.Face3(d[0], d[1], d[2], a.normal, a.color, a.materialIndex);
        d = 0;
        for (h = this.faceVertexUvs.length; d < h; d++) (i = this.faceVertexUvs[d][f]) && i.splice(e, 1);
        this.faces[f].vertexColors = a.vertexColors;
        break
      }
    }
    c = this.vertices.length - b.length;
    this.vertices = b;
    return c
  },
  clone: function () {
    for (var a = new THREE.Geometry, b = this.vertices, c = 0, d = b.length; c < d; c++) a.vertices.push(b[c].clone());
    b = this.faces;
    c = 0;
    for (d = b.length; c < d; c++) a.faces.push(b[c].clone());
    b = this.faceVertexUvs[0];
    c = 0;
    for (d = b.length; c < d; c++) {
      for (var e = b[c], f = [
      ], g = 0, h = e.length; g < h; g++) f.push(new THREE.Vector2(e[g].x, e[g].y));
      a.faceVertexUvs[0].push(f)
    }
    return a
  },
  dispose: function () {
    this.dispatchEvent({
      type: 'dispose'
    })
  }
};
THREE.GeometryIdCount = 0;
THREE.BufferGeometry = function () {
  THREE.EventDispatcher.call(this);
  this.id = THREE.GeometryIdCount++;
  this.attributes = {
  };
  this.dynamic = !1;
  this.offsets = [
  ];
  this.boundingSphere = this.boundingBox = null;
  this.hasTangents = !1;
  this.morphTargets = [
  ]
};
THREE.BufferGeometry.prototype = {
  constructor: THREE.BufferGeometry,
  applyMatrix: function (a) {
    var b,
    c;
    this.attributes.position && (b = this.attributes.position.array);
    this.attributes.normal && (c = this.attributes.normal.array);
    void 0 !== b && (a.multiplyVector3Array(b), this.verticesNeedUpdate = !0);
    void 0 !== c && (b = new THREE.Matrix3, b.getInverse(a).transpose(), b.multiplyVector3Array(c), this.normalizeNormals(), this.normalsNeedUpdate = !0)
  },
  computeBoundingBox: function () {
    null === this.boundingBox && (this.boundingBox = new THREE.Box3);
    var a = this.attributes.position.array;
    if (a) {
      var b = this.boundingBox,
      c,
      d,
      e;
      3 <= a.length && (b.min.x = b.max.x = a[0], b.min.y = b.max.y = a[1], b.min.z = b.max.z = a[2]);
      for (var f = 3, g = a.length; f < g; f += 3) c = a[f],
      d = a[f + 1],
      e = a[f + 2],
      c < b.min.x ? b.min.x = c : c > b.max.x && (b.max.x = c),
      d < b.min.y ? b.min.y = d : d > b.max.y && (b.max.y = d),
      e < b.min.z ? b.min.z = e : e > b.max.z && (b.max.z = e)
    }
    if (void 0 === a || 0 === a.length) this.boundingBox.min.set(0, 0, 0),
    this.boundingBox.max.set(0, 0, 0)
  },
  computeBoundingSphere: function () {
    null === this.boundingSphere && (this.boundingSphere = new THREE.Sphere);
    var a = this.attributes.position.array;
    if (a) {
      for (var b, c = 0, d, e, f = 0, g = a.length; f < g; f += 3) b = a[f],
      d = a[f + 1],
      e = a[f + 2],
      b = b * b + d * d + e * e,
      b > c && (c = b);
      this.boundingSphere.radius = Math.sqrt(c)
    }
  },
  computeVertexNormals: function () {
    if (this.attributes.position) {
      var a,
      b,
      c,
      d;
      a = this.attributes.position.array.length;
      if (void 0 === this.attributes.normal) this.attributes.normal = {
        itemSize: 3,
        array: new Float32Array(a),
        numItems: a
      };
       else {
        a = 0;
        for (b = this.attributes.normal.array.length; a < b; a++) this.attributes.normal.array[a] = 0
      }
      var e = this.attributes.position.array,
      f = this.attributes.normal.array,
      g,
      h,
      i,
      k,
      l,
      m,
      p = new THREE.Vector3,
      s = new THREE.Vector3,
      q = new THREE.Vector3,
      n = new THREE.Vector3,
      r = new THREE.Vector3;
      if (this.attributes.index) {
        var v = this.attributes.index.array,
        w = this.offsets;
        c = 0;
        for (d = w.length; c < d; ++c) {
          b = w[c].start;
          g = w[c].count;
          var x = w[c].index;
          a = b;
          for (b += g; a < b; a += 3) g = x + v[a],
          h = x + v[a + 1],
          i = x + v[a + 2],
          k = e[3 * g],
          l = e[3 * g + 1],
          m = e[3 * g + 2],
          p.set(k, l, m),
          k = e[3 * h],
          l = e[3 * h + 1],
          m = e[3 * h + 2],
          s.set(k, l, m),
          k = e[3 * i],
          l = e[3 * i + 1],
          m = e[3 * i + 2],
          q.set(k, l, m),
          n.sub(q, s),
          r.sub(p, s),
          n.crossSelf(r),
          f[3 * g] += n.x,
          f[3 * g + 1] += n.y,
          f[3 * g + 2] += n.z,
          f[3 * h] += n.x,
          f[3 * h + 1] += n.y,
          f[3 * h + 2] += n.z,
          f[3 * i] += n.x,
          f[3 * i + 1] += n.y,
          f[3 * i + 2] += n.z
        }
      } else {
        a = 0;
        for (b = e.length; a < b; a += 9) k = e[a],
        l = e[a + 1],
        m = e[a + 2],
        p.set(k, l, m),
        k = e[a + 3],
        l = e[a + 4],
        m = e[a + 5],
        s.set(k, l, m),
        k = e[a + 6],
        l = e[a + 7],
        m = e[a + 8],
        q.set(k, l, m),
        n.sub(q, s),
        r.sub(p, s),
        n.crossSelf(r),
        f[a] = n.x,
        f[a + 1] = n.y,
        f[a + 2] = n.z,
        f[a + 3] = n.x,
        f[a + 4] = n.y,
        f[a + 5] = n.z,
        f[a + 6] = n.x,
        f[a + 7] = n.y,
        f[a + 8] = n.z
      }
      this.normalizeNormals();
      this.normalsNeedUpdate = !0
    }
  },
  normalizeNormals: function () {
    for (var a = this.attributes.normal.array, b, c, d, e = 0, f = a.length; e < f; e += 3) b = a[e],
    c = a[e + 1],
    d = a[e + 2],
    b = 1 / Math.sqrt(b * b + c * c + d * d),
    a[e] *= b,
    a[e + 1] *= b,
    a[e + 2] *= b
  },
  computeTangents: function () {
    function a(a) {
      fa.x = d[3 * a];
      fa.y = d[3 * a + 1];
      fa.z = d[3 * a + 2];
      oa.copy(fa);
      Z = i[a];
      T.copy(Z);
      T.subSelf(fa.multiplyScalar(fa.dot(Z))).normalize();
      N.cross(oa, Z);
      eb = N.dot(k[a]);
      L = 0 > eb ? - 1 : 1;
      h[4 * a] = T.x;
      h[4 * a + 1] = T.y;
      h[4 * a + 2] = T.z;
      h[4 * a + 3] = L
    }
    if (void 0 === this.attributes.index || void 0 === this.attributes.position || void 0 === this.attributes.normal || void 0 ===
    this.attributes.uv) console.warn('Missing required attributes (index, position, normal or uv) in BufferGeometry.computeTangents()');
     else {
      var b = this.attributes.index.array,
      c = this.attributes.position.array,
      d = this.attributes.normal.array,
      e = this.attributes.uv.array,
      f = c.length / 3;
      if (void 0 === this.attributes.tangent) {
        var g = 4 * f;
        this.attributes.tangent = {
          itemSize: 4,
          array: new Float32Array(g),
          numItems: g
        }
      }
      for (var h = this.attributes.tangent.array, i = [
      ], k = [
      ], g = 0; g < f; g++) i[g] = new THREE.Vector3,
      k[g] = new THREE.Vector3;
      var l,
      m,
      p,
      s,
      q,
      n,
      r,
      v,
      w,
      x,
      t,
      K,
      D,
      B,
      z,
      f = new THREE.Vector3,
      g = new THREE.Vector3,
      E,
      G,
      I,
      Y,
      C,
      P,
      A,
      J = this.offsets;
      I = 0;
      for (Y = J.length; I < Y; ++I) {
        G = J[I].start;
        C = J[I].count;
        var M = J[I].index;
        E = G;
        for (G += C; E < G; E += 3) C = M + b[E],
        P = M + b[E + 1],
        A = M + b[E + 2],
        l = c[3 * C],
        m = c[3 * C + 1],
        p = c[3 * C + 2],
        s = c[3 * P],
        q = c[3 * P + 1],
        n = c[3 * P + 2],
        r = c[3 * A],
        v = c[3 * A + 1],
        w = c[3 * A + 2],
        x = e[2 * C],
        t = e[2 * C + 1],
        K = e[2 * P],
        D = e[2 * P + 1],
        B = e[2 * A],
        z = e[2 * A + 1],
        s -= l,
        l = r - l,
        q -= m,
        m = v - m,
        n -= p,
        p = w - p,
        K -= x,
        x = B - x,
        D -= t,
        t = z - t,
        z = 1 / (K * t - x * D),
        f.set((t * s - D * l) * z, (t * q - D * m) * z, (t * n - D * p) * z),
        g.set((K * l - x * s) * z, (K * m - x * q) * z, (K * p - x * n) * z),
        i[C].addSelf(f),
        i[P].addSelf(f),
        i[A].addSelf(f),
        k[C].addSelf(g),
        k[P].addSelf(g),
        k[A].addSelf(g)
      }
      var T = new THREE.Vector3,
      N = new THREE.Vector3,
      fa = new THREE.Vector3,
      oa = new THREE.Vector3,
      L,
      Z,
      eb;
      I = 0;
      for (Y = J.length; I < Y; ++I) {
        G = J[I].start;
        C = J[I].count;
        M = J[I].index;
        E = G;
        for (G += C; E < G; E += 3) C = M + b[E],
        P = M + b[E + 1],
        A = M + b[E + 2],
        a(C),
        a(P),
        a(A)
      }
      this.tangentsNeedUpdate = this.hasTangents = !0
    }
  },
  dispose: function () {
    this.dispatchEvent({
      type: 'dispose'
    })
  }
};
THREE.Camera = function () {
  THREE.Object3D.call(this);
  this.matrixWorldInverse = new THREE.Matrix4;
  this.projectionMatrix = new THREE.Matrix4;
  this.projectionMatrixInverse = new THREE.Matrix4
};
THREE.Camera.prototype = Object.create(THREE.Object3D.prototype);
THREE.Camera.prototype.lookAt = function (a) {
  this.matrix.lookAt(this.position, a, this.up);
  !0 === this.rotationAutoUpdate && (!1 === this.useQuaternion ? this.rotation.setEulerFromRotationMatrix(this.matrix, this.eulerOrder) : this.quaternion.copy(this.matrix.decompose() [1]))
};
THREE.OrthographicCamera = function (a, b, c, d, e, f) {
  THREE.Camera.call(this);
  this.left = a;
  this.right = b;
  this.top = c;
  this.bottom = d;
  this.near = void 0 !== e ? e : 0.1;
  this.far = void 0 !== f ? f : 2000;
  this.updateProjectionMatrix()
};
THREE.OrthographicCamera.prototype = Object.create(THREE.Camera.prototype);
THREE.OrthographicCamera.prototype.updateProjectionMatrix = function () {
  this.projectionMatrix.makeOrthographic(this.left, this.right, this.top, this.bottom, this.near, this.far)
};
THREE.PerspectiveCamera = function (a, b, c, d) {
  THREE.Camera.call(this);
  this.fov = void 0 !== a ? a : 50;
  this.aspect = void 0 !== b ? b : 1;
  this.near = void 0 !== c ? c : 0.1;
  this.far = void 0 !== d ? d : 2000;
  this.updateProjectionMatrix()
};
THREE.PerspectiveCamera.prototype = Object.create(THREE.Camera.prototype);
THREE.PerspectiveCamera.prototype.setLens = function (a, b) {
  void 0 === b && (b = 24);
  this.fov = 2 * THREE.Math.radToDeg(Math.atan(b / (2 * a)));
  this.updateProjectionMatrix()
};
THREE.PerspectiveCamera.prototype.setViewOffset = function (a, b, c, d, e, f) {
  this.fullWidth = a;
  this.fullHeight = b;
  this.x = c;
  this.y = d;
  this.width = e;
  this.height = f;
  this.updateProjectionMatrix()
};
THREE.PerspectiveCamera.prototype.updateProjectionMatrix = function () {
  if (this.fullWidth) {
    var a = this.fullWidth / this.fullHeight,
    b = Math.tan(THREE.Math.degToRad(0.5 * this.fov)) * this.near,
    c = - b,
    d = a * c,
    a = Math.abs(a * b - d),
    c = Math.abs(b - c);
    this.projectionMatrix.makeFrustum(d + this.x * a / this.fullWidth, d + (this.x + this.width) * a / this.fullWidth, b - (this.y + this.height) * c / this.fullHeight, b - this.y * c / this.fullHeight, this.near, this.far)
  } else this.projectionMatrix.makePerspective(this.fov, this.aspect, this.near, this.far)
};
THREE.Light = function (a) {
  THREE.Object3D.call(this);
  this.color = new THREE.Color(a)
};
THREE.Light.prototype = Object.create(THREE.Object3D.prototype);
THREE.AmbientLight = function (a) {
  THREE.Light.call(this, a)
};
THREE.AmbientLight.prototype = Object.create(THREE.Light.prototype);
THREE.AreaLight = function (a, b) {
  THREE.Light.call(this, a);
  this.normal = new THREE.Vector3(0, - 1, 0);
  this.right = new THREE.Vector3(1, 0, 0);
  this.intensity = void 0 !== b ? b : 1;
  this.height = this.width = 1;
  this.constantAttenuation = 1.5;
  this.linearAttenuation = 0.5;
  this.quadraticAttenuation = 0.1
};
THREE.AreaLight.prototype = Object.create(THREE.Light.prototype);
THREE.DirectionalLight = function (a, b) {
  THREE.Light.call(this, a);
  this.position = new THREE.Vector3(0, 1, 0);
  this.target = new THREE.Object3D;
  this.intensity = void 0 !== b ? b : 1;
  this.onlyShadow = this.castShadow = !1;
  this.shadowCameraNear = 50;
  this.shadowCameraFar = 5000;
  this.shadowCameraLeft = - 500;
  this.shadowCameraTop = this.shadowCameraRight = 500;
  this.shadowCameraBottom = - 500;
  this.shadowCameraVisible = !1;
  this.shadowBias = 0;
  this.shadowDarkness = 0.5;
  this.shadowMapHeight = this.shadowMapWidth = 512;
  this.shadowCascade = !1;
  this.shadowCascadeOffset = new THREE.Vector3(0, 0, - 1000);
  this.shadowCascadeCount = 2;
  this.shadowCascadeBias = [
    0,
    0,
    0
  ];
  this.shadowCascadeWidth = [
    512,
    512,
    512
  ];
  this.shadowCascadeHeight = [
    512,
    512,
    512
  ];
  this.shadowCascadeNearZ = [
    - 1,
    0.99,
    0.998
  ];
  this.shadowCascadeFarZ = [
    0.99,
    0.998,
    1
  ];
  this.shadowCascadeArray = [
  ];
  this.shadowMatrix = this.shadowCamera = this.shadowMapSize = this.shadowMap = null
};
THREE.DirectionalLight.prototype = Object.create(THREE.Light.prototype);
THREE.HemisphereLight = function (a, b, c) {
  THREE.Light.call(this, a);
  this.groundColor = new THREE.Color(b);
  this.position = new THREE.Vector3(0, 100, 0);
  this.intensity = void 0 !== c ? c : 1
};
THREE.HemisphereLight.prototype = Object.create(THREE.Light.prototype);
THREE.PointLight = function (a, b, c) {
  THREE.Light.call(this, a);
  this.position = new THREE.Vector3(0, 0, 0);
  this.intensity = void 0 !== b ? b : 1;
  this.distance = void 0 !== c ? c : 0;
  this.onlyShadow = this.castShadow = !1;
  this.shadowCameraNear = 50;
  this.shadowCameraFar = 5000;
  this.shadowCameraVisible = !1;
  this.shadowBias = 0;
  this.shadowDarkness = 0.5;
  this.shadowMapHeight = this.shadowMapWidth = 512
};
THREE.PointLight.prototype = Object.create(THREE.Light.prototype);
THREE.SpotLight = function (a, b, c, d, e) {
  THREE.Light.call(this, a);
  this.position = new THREE.Vector3(0, 1, 0);
  this.target = new THREE.Object3D;
  this.intensity = void 0 !== b ? b : 1;
  this.distance = void 0 !== c ? c : 0;
  this.angle = void 0 !== d ? d : Math.PI / 2;
  this.exponent = void 0 !== e ? e : 10;
  this.onlyShadow = this.castShadow = !1;
  this.shadowCameraNear = 50;
  this.shadowCameraFar = 5000;
  this.shadowCameraFov = 50;
  this.shadowCameraVisible = !1;
  this.shadowBias = 0;
  this.shadowDarkness = 0.5;
  this.shadowMapHeight = this.shadowMapWidth = 512;
  this.shadowMatrix = this.shadowCamera = this.shadowMapSize = this.shadowMap = null
};
THREE.SpotLight.prototype = Object.create(THREE.Light.prototype);
THREE.Loader = function (a) {
  this.statusDomElement = (this.showStatus = a) ? THREE.Loader.prototype.addStatusElement() : null;
  this.onLoadStart = function () {
  };
  this.onLoadProgress = function () {
  };
  this.onLoadComplete = function () {
  }
};
THREE.Loader.prototype = {
  constructor: THREE.Loader,
  crossOrigin: 'anonymous',
  addStatusElement: function () {
    var a = document.createElement('div');
    a.style.position = 'absolute';
    a.style.right = '0px';
    a.style.top = '0px';
    a.style.fontSize = '0.8em';
    a.style.textAlign = 'left';
    a.style.background = 'rgba(0,0,0,0.25)';
    a.style.color = '#fff';
    a.style.width = '120px';
    a.style.padding = '0.5em 0.5em 0.5em 0.5em';
    a.style.zIndex = 1000;
    a.innerHTML = 'Loading ...';
    return a
  },
  updateProgress: function (a) {
    var b = 'Loaded ',
    b = a.total ? b + ((100 * a.loaded / a.total).toFixed(0) + '%') : b + ((a.loaded / 1000).toFixed(2) + ' KB');
    this.statusDomElement.innerHTML = b
  },
  extractUrlBase: function (a) {
    a = a.split('/');
    a.pop();
    return (1 > a.length ? '.' : a.join('/')) + '/'
  },
  initMaterials: function (a, b) {
    for (var c = [
    ], d = 0; d < a.length; ++d) c[d] = THREE.Loader.prototype.createMaterial(a[d], b);
    return c
  },
  needsTangents: function (a) {
    for (var b = 0, c = a.length; b < c; b++) if (a[b] instanceof THREE.ShaderMaterial) return !0;
    return !1
  },
  createMaterial: function (a, b) {
    function c(a) {
      a = Math.log(a) / Math.LN2;
      return Math.floor(a) ==
      a
    }
    function d(a) {
      a = Math.log(a) / Math.LN2;
      return Math.pow(2, Math.round(a))
    }
    function e(a, e, f, h, i, k, r) {
      var v = f.toLowerCase().endsWith('.dds'),
      w = b + '/' + f;
      if (v) {
        var x = THREE.ImageUtils.loadCompressedTexture(w);
        a[e] = x
      } else x = document.createElement('canvas'),
      a[e] = new THREE.Texture(x);
      a[e].sourceFile = f;
      h && (a[e].repeat.set(h[0], h[1]), 1 !== h[0] && (a[e].wrapS = THREE.RepeatWrapping), 1 !== h[1] && (a[e].wrapT = THREE.RepeatWrapping));
      i && a[e].offset.set(i[0], i[1]);
      k && (f = {
        repeat: THREE.RepeatWrapping,
        mirror: THREE.MirroredRepeatWrapping
      }, void 0 !== f[k[0]] && (a[e].wrapS = f[k[0]]), void 0 !== f[k[1]] && (a[e].wrapT = f[k[1]]));
      r && (a[e].anisotropy = r);
      if (!v) {
        var t = a[e],
        a = new Image;
        a.onload = function () {
          if (!c(this.width) || !c(this.height)) {
            var a = d(this.width),
            b = d(this.height);
            t.image.width = a;
            t.image.height = b;
            t.image.getContext('2d').drawImage(this, 0, 0, a, b)
          } else t.image = this;
          t.needsUpdate = !0
        };
        a.crossOrigin = g.crossOrigin;
        a.src = w
      }
    }
    function f(a) {
      return (255 * a[0] << 16) + (255 * a[1] << 8) + 255 * a[2]
    }
    var g = this,
    h = 'MeshLambertMaterial',
    i = {
      color: 15658734,
      opacity: 1,
      map: null,
      lightMap: null,
      normalMap: null,
      bumpMap: null,
      wireframe: !1
    };
    if (a.shading) {
      var k = a.shading.toLowerCase();
      'phong' === k ? h = 'MeshPhongMaterial' : 'basic' === k && (h = 'MeshBasicMaterial')
    }
    void 0 !== a.blending && void 0 !== THREE[a.blending] && (i.blending = THREE[a.blending]);
    if (void 0 !== a.transparent || 1 > a.opacity) i.transparent = a.transparent;
    void 0 !== a.depthTest && (i.depthTest = a.depthTest);
    void 0 !== a.depthWrite && (i.depthWrite = a.depthWrite);
    void 0 !== a.visible && (i.visible = a.visible);
    void 0 !== a.flipSided && (i.side = THREE.BackSide);
    void 0 !== a.doubleSided && (i.side = THREE.DoubleSide);
    void 0 !== a.wireframe && (i.wireframe = a.wireframe);
    void 0 !== a.vertexColors && ('face' === a.vertexColors ? i.vertexColors = THREE.FaceColors : a.vertexColors && (i.vertexColors = THREE.VertexColors));
    a.colorDiffuse ? i.color = f(a.colorDiffuse) : a.DbgColor && (i.color = a.DbgColor);
    a.colorSpecular && (i.specular = f(a.colorSpecular));
    a.colorAmbient && (i.ambient = f(a.colorAmbient));
    a.transparency && (i.opacity = a.transparency);
    a.specularCoef && (i.shininess = a.specularCoef);
    a.mapDiffuse && b && e(i, 'map', a.mapDiffuse, a.mapDiffuseRepeat, a.mapDiffuseOffset, a.mapDiffuseWrap, a.mapDiffuseAnisotropy);
    a.mapLight && b && e(i, 'lightMap', a.mapLight, a.mapLightRepeat, a.mapLightOffset, a.mapLightWrap, a.mapLightAnisotropy);
    a.mapBump && b && e(i, 'bumpMap', a.mapBump, a.mapBumpRepeat, a.mapBumpOffset, a.mapBumpWrap, a.mapBumpAnisotropy);
    a.mapNormal && b && e(i, 'normalMap', a.mapNormal, a.mapNormalRepeat, a.mapNormalOffset, a.mapNormalWrap, a.mapNormalAnisotropy);
    a.mapSpecular && b && e(i, 'specularMap', a.mapSpecular, a.mapSpecularRepeat, a.mapSpecularOffset, a.mapSpecularWrap, a.mapSpecularAnisotropy);
    a.mapBumpScale && (i.bumpScale = a.mapBumpScale);
    a.mapNormal ? (h = THREE.ShaderUtils.lib.normal, k = THREE.UniformsUtils.clone(h.uniforms), k.tNormal.value = i.normalMap, a.mapNormalFactor && k.uNormalScale.value.set(a.mapNormalFactor, a.mapNormalFactor), i.map && (k.tDiffuse.value = i.map, k.enableDiffuse.value = !0), i.specularMap && (k.tSpecular.value = i.specularMap, k.enableSpecular.value = !0), i.lightMap && (k.tAO.value = i.lightMap, k.enableAO.value = !0), k.uDiffuseColor.value.setHex(i.color), k.uSpecularColor.value.setHex(i.specular), k.uAmbientColor.value.setHex(i.ambient), k.uShininess.value = i.shininess, void 0 !== i.opacity && (k.uOpacity.value = i.opacity), h = new THREE.ShaderMaterial({
      fragmentShader: h.fragmentShader,
      vertexShader: h.vertexShader,
      uniforms: k,
      lights: !0,
      fog: !0
    }), i.transparent && (h.transparent = !0)) : h = new THREE[h](i);
    void 0 !== a.DbgName && (h.name = a.DbgName);
    return h
  }
};
THREE.BinaryLoader = function (a) {
  THREE.Loader.call(this, a)
};
THREE.BinaryLoader.prototype = Object.create(THREE.Loader.prototype);
THREE.BinaryLoader.prototype.load = function (a, b, c, d) {
  var c = c && 'string' === typeof c ? c : this.extractUrlBase(a),
  d = d && 'string' === typeof d ? d : this.extractUrlBase(a),
  e = this.showProgress ? THREE.Loader.prototype.updateProgress : null;
  this.onLoadStart();
  this.loadAjaxJSON(this, a, b, c, d, e)
};
THREE.BinaryLoader.prototype.loadAjaxJSON = function (a, b, c, d, e, f) {
  var g = new XMLHttpRequest;
  g.onreadystatechange = function () {
    if (4 == g.readyState) if (200 == g.status || 0 == g.status) {
      var h = JSON.parse(g.responseText);
      a.loadAjaxBuffers(h, c, e, d, f)
    } else console.error('THREE.BinaryLoader: Couldn\'t load [' + b + '] [' + g.status + ']')
  };
  g.open('GET', b, !0);
  g.send(null)
};
THREE.BinaryLoader.prototype.loadAjaxBuffers = function (a, b, c, d, e) {
  var f = new XMLHttpRequest,
  g = c + '/' + a.buffers,
  h = 0;
  f.onreadystatechange = function () {
    if (4 == f.readyState) if (200 == f.status || 0 == f.status) {
      var c = f.response;
      void 0 === c && (c = (new Uint8Array(f.responseBody)).buffer);
      THREE.BinaryLoader.prototype.createBinModel(c, b, d, a.materials)
    } else console.error('THREE.BinaryLoader: Couldn\'t load [' + g + '] [' + f.status + ']');
     else 3 == f.readyState ? e && (0 == h && (h = f.getResponseHeader('Content-Length')), e({
      total: h,
      loaded: f.responseText.length
    })) :
    2 == f.readyState && (h = f.getResponseHeader('Content-Length'))
  };
  f.open('GET', g, !0);
  f.responseType = 'arraybuffer';
  f.send(null)
};
THREE.BinaryLoader.prototype.createBinModel = function (a, b, c, d) {
  var e = function () {
    var b,
    c,
    d,
    e,
    k,
    l,
    m,
    p,
    s,
    q,
    n,
    r,
    v,
    w,
    x,
    t;
    function K(a) {
      return a % 4 ? 4 - a % 4 : 0
    }
    function D(a, b) {
      return (new Uint8Array(a, b, 1)) [0]
    }
    function B(a, b) {
      return (new Uint32Array(a, b, 1)) [0]
    }
    function z(b, c) {
      var d,
      e,
      f,
      g,
      h,
      i,
      k,
      l = new Uint32Array(a, c, 3 * b);
      for (d = 0; d < b; d++) e = l[3 * d],
      f = l[3 * d + 1],
      g = l[3 * d + 2],
      h = M[2 * e],
      e = M[2 * e + 1],
      i = M[2 * f],
      k = M[2 * f + 1],
      f = M[2 * g],
      g = M[2 * g + 1],
      P.faceVertexUvs[0].push([new THREE.Vector2(h, e),
      new THREE.Vector2(i, k),
      new THREE.Vector2(f, g)])
    }
    function E(b, c) {
      var d,
      e,
      f,
      g,
      h,
      i,
      k,
      l,
      p,
      m = new Uint32Array(a, c, 4 * b);
      for (d = 0; d < b; d++) e = m[4 * d],
      f = m[4 * d + 1],
      g = m[4 * d + 2],
      h = m[4 * d + 3],
      i = M[2 * e],
      e = M[2 * e + 1],
      k = M[2 * f],
      l = M[2 * f + 1],
      f = M[2 * g],
      p = M[2 * g + 1],
      g = M[2 * h],
      h = M[2 * h + 1],
      P.faceVertexUvs[0].push([new THREE.Vector2(i, e),
      new THREE.Vector2(k, l),
      new THREE.Vector2(f, p),
      new THREE.Vector2(g, h)])
    }
    function G(b, c, d) {
      for (var e, f, g, h, c = new Uint32Array(a, c, 3 * b), i = new Uint16Array(a, d, b), d = 0; d < b; d++) e = c[3 * d],
      f = c[3 * d + 1],
      g = c[3 * d + 2],
      h = i[d],
      P.faces.push(new THREE.Face3(e, f, g, null, null, h))
    }
    function I(b, c, d) {
      for (var e, f, g, h, i, c = new Uint32Array(a, c, 4 * b), k = new Uint16Array(a, d, b), d = 0; d < b; d++) e = c[4 * d],
      f = c[4 * d + 1],
      g = c[4 * d + 2],
      h = c[4 * d + 3],
      i = k[d],
      P.faces.push(new THREE.Face4(e, f, g, h, null, null, i))
    }
    function Y(b, c, d, e) {
      for (var f, g, h, i, k, l, p, c = new Uint32Array(a, c, 3 * b), d = new Uint32Array(a, d, 3 * b), m = new Uint16Array(a, e, b), e = 0; e < b; e++) {
        f = c[3 * e];
        g = c[3 * e + 1];
        h = c[3 * e + 2];
        k = d[3 * e];
        l = d[3 * e + 1];
        p = d[3 * e + 2];
        i = m[e];
        var q = J[3 * l],
        n = J[3 * l + 1];
        l = J[3 * l + 2];
        var s = J[3 * p],
        r = J[3 * p + 1];
        p = J[3 * p + 2];
        P.faces.push(new THREE.Face3(f, g, h, [
          new THREE.Vector3(J[3 * k], J[3 * k + 1], J[3 * k + 2]),
          new THREE.Vector3(q, n, l),
          new THREE.Vector3(s, r, p)
        ], null, i))
      }
    }
    function C(b, c, d, e) {
      for (var f, g, h, i, k, l, p, m, q, c = new Uint32Array(a, c, 4 * b), d = new Uint32Array(a, d, 4 * b), n = new Uint16Array(a, e, b), e = 0; e < b; e++) {
        f = c[4 * e];
        g = c[4 * e + 1];
        h = c[4 * e + 2];
        i = c[4 * e + 3];
        l = d[4 * e];
        p = d[4 * e + 1];
        m = d[4 * e + 2];
        q = d[4 * e + 3];
        k = n[e];
        var s = J[3 * p],
        r = J[3 * p + 1];
        p = J[3 * p + 2];
        var t = J[3 * m],
        v = J[3 * m + 1];
        m = J[3 * m + 2];
        var w = J[3 * q],
        x = J[3 * q + 1];
        q = J[3 * q + 2];
        P.faces.push(new THREE.Face4(f, g, h, i, [
          new THREE.Vector3(J[3 * l], J[3 * l + 1], J[3 * l + 2]),
          new THREE.Vector3(s, r, p),
          new THREE.Vector3(t, v, m),
          new THREE.Vector3(w, x, q)
        ], null, k))
      }
    }
    var P = this,
    A = 0,
    J = [
    ],
    M = [
    ],
    T,
    N,
    fa;
    THREE.Geometry.call(this);
    t = a;
    N = A;
    w = new Uint8Array(t, N, 12);
    q = '';
    for (v = 0; 12 > v; v++) q += String.fromCharCode(w[N + v]);
    b = D(t, N + 12);
    D(t, N + 13);
    D(t, N + 14);
    D(t, N + 15);
    c = D(t, N + 16);
    d = D(t, N + 17);
    e = D(t, N + 18);
    k = D(t, N + 19);
    l = B(t, N + 20);
    m = B(t, N + 20 + 4);
    p = B(t, N + 20 + 8);
    s = B(t, N + 20 + 12);
    q = B(t, N + 20 + 16);
    n = B(t, N + 20 + 20);
    r = B(t, N + 20 + 24);
    v = B(t, N + 20 + 28);
    w = B(t, N + 20 + 32);
    x = B(t, N + 20 + 36);
    t = B(t, N + 20 + 40);
    A += b;
    N = 3 * c + k;
    fa = 4 * c + k;
    T = s * N;
    b = q * (N + 3 * d);
    c = n * (N + 3 * e);
    k = r * (N + 3 * d + 3 * e);
    N = v * fa;
    d = w * (fa + 4 * d);
    e = x * (fa + 4 * e);
    fa = A;
    var A = new Float32Array(a, A, 3 * l),
    oa,
    L,
    Z,
    eb;
    for (oa = 0; oa < l; oa++) L = A[3 * oa],
    Z = A[3 * oa + 1],
    eb = A[3 * oa + 2],
    P.vertices.push(new THREE.Vector3(L, Z, eb));
    l = A = fa + 3 * l * Float32Array.BYTES_PER_ELEMENT;
    if (m) {
      A = new Int8Array(a, A, 3 * m);
      for (fa = 0; fa < m; fa++) oa = A[3 * fa],
      L = A[3 * fa + 1],
      Z = A[3 * fa + 2],
      J.push(oa / 127, L / 127, Z / 127)
    }
    A = l + 3 * m * Int8Array.BYTES_PER_ELEMENT;
    m = A += K(3 * m);
    if (p) {
      l = new Float32Array(a, A, 2 * p);
      for (A = 0; A < p; A++) fa = l[2 * A],
      oa = l[2 * A + 1],
      M.push(fa, oa)
    }
    p = A = m + 2 * p * Float32Array.BYTES_PER_ELEMENT;
    T = p + T + K(2 * s);
    m = T + b + K(2 * q);
    b = m + c + K(2 * n);
    c = b + k + K(2 * r);
    N = c + N + K(2 * v);
    k = N + d + K(2 * w);
    d = k + e + K(2 * x);
    n && (e = m + 3 * n * Uint32Array.BYTES_PER_ELEMENT, G(n, m, e + 3 * n * Uint32Array.BYTES_PER_ELEMENT), z(n, e));
    r && (n = b + 3 * r * Uint32Array.BYTES_PER_ELEMENT, e = n + 3 * r * Uint32Array.BYTES_PER_ELEMENT, Y(r, b, n, e + 3 * r * Uint32Array.BYTES_PER_ELEMENT), z(r, e));
    x && (r = k + 4 * x * Uint32Array.BYTES_PER_ELEMENT, I(x, k, r + 4 * x * Uint32Array.BYTES_PER_ELEMENT), E(x, r));
    t && (x = d + 4 * t * Uint32Array.BYTES_PER_ELEMENT, r = x + 4 * t * Uint32Array.BYTES_PER_ELEMENT, C(t, d, x, r + 4 * t * Uint32Array.BYTES_PER_ELEMENT), E(t, r));
    s && G(s, p, p + 3 * s * Uint32Array.BYTES_PER_ELEMENT);
    q && (s = T + 3 * q * Uint32Array.BYTES_PER_ELEMENT, Y(q, T, s, s + 3 * q * Uint32Array.BYTES_PER_ELEMENT));
    v && I(v, c, c + 4 * v * Uint32Array.BYTES_PER_ELEMENT);
    w && (q = N + 4 * w * Uint32Array.BYTES_PER_ELEMENT, C(w, N, q, q + 4 * w * Uint32Array.BYTES_PER_ELEMENT));
    this.computeCentroids();
    this.computeFaceNormals()
  };
  e.prototype = Object.create(THREE.Geometry.prototype);
  e = new e(c);
  c = this.initMaterials(d, c);
  this.needsTangents(c) && e.computeTangents();
  b(e, c)
};
THREE.ImageLoader = function () {
  THREE.EventDispatcher.call(this);
  this.crossOrigin = null
};
THREE.ImageLoader.prototype = {
  constructor: THREE.ImageLoader,
  load: function (a, b) {
    var c = this;
    void 0 === b && (b = new Image);
    b.addEventListener('load', function () {
      c.dispatchEvent({
        type: 'load',
        content: b
      })
    }, !1);
    b.addEventListener('error', function () {
      c.dispatchEvent({
        type: 'error',
        message: 'Couldn\'t load URL [' + a + ']'
      })
    }, !1);
    c.crossOrigin && (b.crossOrigin = c.crossOrigin);
    b.src = a
  }
};
THREE.JSONLoader = function (a) {
  THREE.Loader.call(this, a);
  this.withCredentials = !1
};
THREE.JSONLoader.prototype = Object.create(THREE.Loader.prototype);
THREE.JSONLoader.prototype.load = function (a, b, c) {
  c = c && 'string' === typeof c ? c : this.extractUrlBase(a);
  this.onLoadStart();
  this.loadAjaxJSON(this, a, b, c)
};
THREE.JSONLoader.prototype.loadAjaxJSON = function (a, b, c, d, e) {
  var f = new XMLHttpRequest,
  g = 0;
  f.withCredentials = this.withCredentials;
  f.onreadystatechange = function () {
    if (f.readyState === f.DONE) if (200 === f.status || 0 === f.status) {
      if (f.responseText) {
        var h = JSON.parse(f.responseText);
        a.createModel(h, c, d)
      } else console.warn('THREE.JSONLoader: [' + b + '] seems to be unreachable or file there is empty');
      a.onLoadComplete()
    } else console.error('THREE.JSONLoader: Couldn\'t load [' + b + '] [' + f.status + ']');
     else f.readyState ===
    f.LOADING ? e && (0 === g && (g = f.getResponseHeader('Content-Length')), e({
      total: g,
      loaded: f.responseText.length
    })) : f.readyState === f.HEADERS_RECEIVED && (g = f.getResponseHeader('Content-Length'))
  };
  f.open('GET', b, !0);
  f.send(null)
};
THREE.JSONLoader.prototype.createModel = function (a, b, c) {
  var d = new THREE.Geometry,
  e = void 0 !== a.scale ? 1 / a.scale : 1,
  f,
  g,
  h,
  i,
  k,
  l,
  m,
  p,
  s,
  q,
  n,
  r,
  v,
  w,
  x,
  t = a.faces;
  q = a.vertices;
  var K = a.normals,
  D = a.colors,
  B = 0;
  for (f = 0; f < a.uvs.length; f++) a.uvs[f].length && B++;
  for (f = 0; f < B; f++) d.faceUvs[f] = [
  ],
  d.faceVertexUvs[f] = [
  ];
  i = 0;
  for (k = q.length; i < k; ) l = new THREE.Vector3,
  l.x = q[i++] * e,
  l.y = q[i++] * e,
  l.z = q[i++] * e,
  d.vertices.push(l);
  i = 0;
  for (k = t.length; i < k; ) {
    q = t[i++];
    l = q & 1;
    h = q & 2;
    f = q & 4;
    g = q & 8;
    p = q & 16;
    m = q & 32;
    n = q & 64;
    q &= 128;
    l ? (r = new THREE.Face4, r.a = t[i++], r.b = t[i++], r.c = t[i++], r.d = t[i++], l = 4) : (r = new THREE.Face3, r.a = t[i++], r.b = t[i++], r.c = t[i++], l = 3);
    h && (h = t[i++], r.materialIndex = h);
    h = d.faces.length;
    if (f) for (f = 0; f < B; f++) v = a.uvs[f],
    s = t[i++],
    x = v[2 * s],
    s = v[2 * s + 1],
    d.faceUvs[f][h] = new THREE.Vector2(x, s);
    if (g) for (f = 0; f < B; f++) {
      v = a.uvs[f];
      w = [
      ];
      for (g = 0; g < l; g++) s = t[i++],
      x = v[2 * s],
      s = v[2 * s + 1],
      w[g] = new THREE.Vector2(x, s);
      d.faceVertexUvs[f][h] = w
    }
    p && (p = 3 * t[i++], g = new THREE.Vector3, g.x = K[p++], g.y = K[p++], g.z = K[p], r.normal = g);
    if (m) for (f = 0; f < l; f++) p = 3 * t[i++],
    g = new THREE.Vector3,
    g.x = K[p++],
    g.y = K[p++],
    g.z = K[p],
    r.vertexNormals.push(g);
    n && (m = t[i++], m = new THREE.Color(D[m]), r.color = m);
    if (q) for (f = 0; f < l; f++) m = t[i++],
    m = new THREE.Color(D[m]),
    r.vertexColors.push(m);
    d.faces.push(r)
  }
  if (a.skinWeights) {
    i = 0;
    for (k = a.skinWeights.length; i < k; i += 2) t = a.skinWeights[i],
    K = a.skinWeights[i + 1],
    d.skinWeights.push(new THREE.Vector4(t, K, 0, 0))
  }
  if (a.skinIndices) {
    i = 0;
    for (k = a.skinIndices.length; i < k; i += 2) t = a.skinIndices[i],
    K = a.skinIndices[i + 1],
    d.skinIndices.push(new THREE.Vector4(t, K, 0, 0))
  }
  d.bones = a.bones;
  d.animation = a.animation;
  if (void 0 !== a.morphTargets) {
    i = 0;
    for (k = a.morphTargets.length; i < k; i++) {
      d.morphTargets[i] = {
      };
      d.morphTargets[i].name = a.morphTargets[i].name;
      d.morphTargets[i].vertices = [
      ];
      D = d.morphTargets[i].vertices;
      B = a.morphTargets[i].vertices;
      t = 0;
      for (K = B.length; t < K; t += 3) q = new THREE.Vector3,
      q.x = B[t] * e,
      q.y = B[t + 1] * e,
      q.z = B[t + 2] * e,
      D.push(q)
    }
  }
  if (void 0 !== a.morphColors) {
    i = 0;
    for (k = a.morphColors.length; i < k; i++) {
      d.morphColors[i] = {
      };
      d.morphColors[i].name = a.morphColors[i].name;
      d.morphColors[i].colors = [
      ];
      K = d.morphColors[i].colors;
      D = a.morphColors[i].colors;
      e = 0;
      for (t = D.length; e < t; e += 3) B = new THREE.Color(16755200),
      B.setRGB(D[e], D[e + 1], D[e + 2]),
      K.push(B)
    }
  }
  d.computeCentroids();
  d.computeFaceNormals();
  a = this.initMaterials(a.materials, c);
  this.needsTangents(a) && d.computeTangents();
  b(d, a)
};
THREE.LoadingMonitor = function () {
  THREE.EventDispatcher.call(this);
  var a = this,
  b = 0,
  c = 0,
  d = function () {
    b++;
    a.dispatchEvent({
      type: 'progress',
      loaded: b,
      total: c
    });
    b === c && a.dispatchEvent({
      type: 'load'
    })
  };
  this.add = function (a) {
    c++;
    a.addEventListener('load', d, !1)
  }
};
THREE.SceneLoader = function () {
  this.onLoadStart = function () {
  };
  this.onLoadProgress = function () {
  };
  this.onLoadComplete = function () {
  };
  this.callbackSync = function () {
  };
  this.callbackProgress = function () {
  };
  this.geometryHandlerMap = {
  };
  this.hierarchyHandlerMap = {
  };
  this.addGeometryHandler('ascii', THREE.JSONLoader);
  this.addGeometryHandler('binary', THREE.BinaryLoader)
};
THREE.SceneLoader.prototype.constructor = THREE.SceneLoader;
THREE.SceneLoader.prototype.load = function (a, b) {
  var c = this,
  d = new XMLHttpRequest;
  d.onreadystatechange = function () {
    if (4 === d.readyState) if (200 === d.status || 0 === d.status) {
      var e = JSON.parse(d.responseText);
      c.parse(e, b, a)
    } else console.error('THREE.SceneLoader: Couldn\'t load [' + a + '] [' + d.status + ']')
  };
  d.open('GET', a, !0);
  d.send(null)
};
THREE.SceneLoader.prototype.addGeometryHandler = function (a, b) {
  this.geometryHandlerMap[a] = {
    loaderClass: b
  }
};
THREE.SceneLoader.prototype.addHierarchyHandler = function (a, b) {
  this.hierarchyHandlerMap[a] = {
    loaderClass: b
  }
};
THREE.SceneLoader.prototype.parse = function (a, b, c) {
  function d(a, b) {
    return 'relativeToHTML' == b ? a : m + '/' + a
  }
  function e() {
    f(z.scene, G.objects)
  }
  function f(a, b) {
    var c,
    e,
    g,
    i,
    k,
    m;
    for (m in b) if (void 0 === z.objects[m]) {
      var n = b[m],
      r = null;
      if (n.type && n.type in l.hierarchyHandlerMap) {
        if (void 0 === n.loading) {
          c = {
            type: 1,
            url: 1,
            material: 1,
            position: 1,
            rotation: 1,
            scale: 1,
            visible: 1,
            children: 1,
            properties: 1,
            skin: 1,
            morph: 1,
            mirroredLoop: 1,
            duration: 1
          };
          e = {
          };
          for (var t in n) t in c || (e[t] = n[t]);
          s = z.materials[n.material];
          n.loading = !0;
          c = l.hierarchyHandlerMap[n.type].loaderObject;
          c.options ? c.load(d(n.url, G.urlBaseType), h(m, a, s, n)) : c.load(d(n.url, G.urlBaseType), h(m, a, s, n), e)
        }
      } else if (void 0 !== n.geometry) {
        if (p = z.geometries[n.geometry]) {
          r = !1;
          s = z.materials[n.material];
          r = s instanceof THREE.ShaderMaterial;
          e = n.position;
          g = n.rotation;
          i = n.scale;
          c = n.matrix;
          k = n.quaternion;
          n.material || (s = new THREE.MeshFaceMaterial(z.face_materials[n.geometry]));
          s instanceof THREE.MeshFaceMaterial && 0 === s.materials.length && (s = new THREE.MeshFaceMaterial(z.face_materials[n.geometry]));
          if (s instanceof THREE.MeshFaceMaterial) for (var A = 0; A < s.materials.length; A++) r = r || s.materials[A] instanceof THREE.ShaderMaterial;
          r && p.computeTangents();
          n.skin ? r = new THREE.SkinnedMesh(p, s) : n.morph ? (r = new THREE.MorphAnimMesh(p, s), void 0 !== n.duration && (r.duration = n.duration), void 0 !== n.time && (r.time = n.time), void 0 !== n.mirroredLoop && (r.mirroredLoop = n.mirroredLoop), s.morphNormals && p.computeMorphNormals()) : r = new THREE.Mesh(p, s);
          r.name = m;
          c ? (r.matrixAutoUpdate = !1, r.matrix.set(c[0], c[1], c[2], c[3], c[4], c[5], c[6], c[7], c[8], c[9], c[10], c[11], c[12], c[13], c[14], c[15])) : (r.position.set(e[0], e[1], e[2]), k ? (r.quaternion.set(k[0], k[1], k[2], k[3]), r.useQuaternion = !0) : r.rotation.set(g[0], g[1], g[2]), r.scale.set(i[0], i[1], i[2]));
          r.visible = n.visible;
          r.castShadow = n.castShadow;
          r.receiveShadow = n.receiveShadow;
          a.add(r);
          z.objects[m] = r
        }
      } else 'DirectionalLight' === n.type || 'PointLight' === n.type || 'AmbientLight' === n.type ? (w = void 0 !== n.color ? n.color : 16777215, x = void 0 !== n.intensity ? n.intensity : 1, 'DirectionalLight' === n.type ? (e = n.direction, v = new THREE.DirectionalLight(w, x), v.position.set(e[0], e[1], e[2]), n.target && (E.push({
        object: v,
        targetName: n.target
      }), v.target = null)) : 'PointLight' === n.type ? (e = n.position, c = n.distance, v = new THREE.PointLight(w, x, c), v.position.set(e[0], e[1], e[2])) : 'AmbientLight' === n.type && (v = new THREE.AmbientLight(w)), a.add(v), v.name = m, z.lights[m] = v, z.objects[m] = v) : 'PerspectiveCamera' === n.type || 'OrthographicCamera' === n.type ? ('PerspectiveCamera' === n.type ? q = new THREE.PerspectiveCamera(n.fov, n.aspect, n.near, n.far) : 'OrthographicCamera' ===
      n.type && (q = new THREE.OrthographicCamera(n.left, n.right, n.top, n.bottom, n.near, n.far)), e = n.position, q.position.set(e[0], e[1], e[2]), a.add(q), q.name = m, z.cameras[m] = q, z.objects[m] = q) : (e = n.position, g = n.rotation, i = n.scale, k = n.quaternion, r = new THREE.Object3D, r.name = m, r.position.set(e[0], e[1], e[2]), k ? (r.quaternion.set(k[0], k[1], k[2], k[3]), r.useQuaternion = !0) : r.rotation.set(g[0], g[1], g[2]), r.scale.set(i[0], i[1], i[2]), r.visible = void 0 !== n.visible ? n.visible : !1, a.add(r), z.objects[m] = r, z.empties[m] = r);
      if (r) {
        if (void 0 !==
        n.properties) for (var B in n.properties) r.properties[B] = n.properties[B];
        void 0 !== n.children && f(r, n.children)
      }
    }
  }
  function g(a) {
    return function (b, c) {
      z.geometries[a] = b;
      z.face_materials[a] = c;
      e();
      t -= 1;
      l.onLoadComplete();
      k()
    }
  }
  function h(a, b, c, d) {
    return function (f) {
      var f = f.content ? f.content : f.dae ? f.scene : f,
      g = d.position,
      h = d.rotation,
      i = d.quaternion,
      p = d.scale;
      f.position.set(g[0], g[1], g[2]);
      i ? (f.quaternion.set(i[0], i[1], i[2], i[3]), f.useQuaternion = !0) : f.rotation.set(h[0], h[1], h[2]);
      f.scale.set(p[0], p[1], p[2]);
      c && f.traverse(function (a) {
        a.material = c
      });
      var m = void 0 !== d.visible ? d.visible : !0;
      f.traverse(function (a) {
        a.visible = m
      });
      b.add(f);
      f.name = a;
      z.objects[a] = f;
      e();
      t -= 1;
      l.onLoadComplete();
      k()
    }
  }
  function i(a) {
    return function (b, c) {
      z.geometries[a] = b;
      z.face_materials[a] = c
    }
  }
  function k() {
    l.callbackProgress({
      totalModels: D,
      totalTextures: B,
      loadedModels: D - t,
      loadedTextures: B - K
    }, z);
    l.onLoadProgress();
    if (0 === t && 0 === K) {
      for (var a = 0; a < E.length; a++) {
        var c = E[a],
        d = z.objects[c.targetName];
        d ? c.object.target = d : (c.object.target = new THREE.Object3D, z.scene.add(c.object.target));
        c.object.target.properties.targetInverse = c.object
      }
      b(z)
    }
  }
  var l = this,
  m = THREE.Loader.prototype.extractUrlBase(c),
  p,
  s,
  q,
  n,
  r,
  v,
  w,
  x,
  t,
  K,
  D,
  B,
  z,
  E = [
  ],
  G = a,
  I;
  for (I in this.geometryHandlerMap) a = this.geometryHandlerMap[I].loaderClass,
  this.geometryHandlerMap[I].loaderObject = new a;
  for (I in this.hierarchyHandlerMap) a = this.hierarchyHandlerMap[I].loaderClass,
  this.hierarchyHandlerMap[I].loaderObject = new a;
  K = t = 0;
  z = {
    scene: new THREE.Scene,
    geometries: {
    },
    face_materials: {
    },
    materials: {
    },
    textures: {
    },
    objects: {
    },
    cameras: {
    },
    lights: {
    },
    fogs: {
    },
    empties: {
    }
  };
  if (G.transform && (I = G.transform.position, a = G.transform.rotation, c = G.transform.scale, I && z.scene.position.set(I[0], I[1], I[2]), a && z.scene.rotation.set(a[0], a[1], a[2]), c && z.scene.scale.set(c[0], c[1], c[2]), I || a || c)) z.scene.updateMatrix(),
  z.scene.updateMatrixWorld();
  I = function (a) {
    return function () {
      K -= a;
      k();
      l.onLoadComplete()
    }
  };
  for (var Y in G.fogs) a = G.fogs[Y],
  'linear' === a.type ? n = new THREE.Fog(0, a.near, a.far) : 'exp2' === a.type && (n = new THREE.FogExp2(0, a.density)),
  a = a.color,
  n.color.setRGB(a[0], a[1], a[2]),
  z.fogs[Y] = n;
  for (var C in G.geometries) n = G.geometries[C],
  n.type in this.geometryHandlerMap && (t += 1, l.onLoadStart());
  for (var P in G.objects) n = G.objects[P],
  n.type && n.type in this.hierarchyHandlerMap && (t += 1, l.onLoadStart());
  D = t;
  for (C in G.geometries) if (n = G.geometries[C], 'cube' === n.type) p = new THREE.CubeGeometry(n.width, n.height, n.depth, n.widthSegments, n.heightSegments, n.depthSegments),
  z.geometries[C] = p;
   else if ('plane' === n.type) p = new THREE.PlaneGeometry(n.width, n.height, n.widthSegments, n.heightSegments),
  z.geometries[C] = p;
   else if ('sphere' === n.type) p = new THREE.SphereGeometry(n.radius, n.widthSegments, n.heightSegments),
  z.geometries[C] = p;
   else if ('cylinder' === n.type) p = new THREE.CylinderGeometry(n.topRad, n.botRad, n.height, n.radSegs, n.heightSegs),
  z.geometries[C] = p;
   else if ('torus' === n.type) p = new THREE.TorusGeometry(n.radius, n.tube, n.segmentsR, n.segmentsT),
  z.geometries[C] = p;
   else if ('icosahedron' === n.type) p = new THREE.IcosahedronGeometry(n.radius, n.subdivisions),
  z.geometries[C] = p;
   else if (n.type in this.geometryHandlerMap) {
    P = {
    };
    for (r in n) 'type' !== r && 'url' !== r && (P[r] = n[r]);
    this.geometryHandlerMap[n.type].loaderObject.load(d(n.url, G.urlBaseType), g(C), P)
  } else 'embedded' === n.type && (P = G.embeds[n.id], P.metadata = G.metadata, P && this.geometryHandlerMap.ascii.loaderObject.createModel(P, i(C), ''));
  for (var A in G.textures) if (C = G.textures[A], C.url instanceof Array) {
    K += C.url.length;
    for (r = 0; r < C.url.length; r++) l.onLoadStart()
  } else K += 1,
  l.onLoadStart();
  B = K;
  for (A in G.textures) {
    C = G.textures[A];
    void 0 !== C.mapping && void 0 !== THREE[C.mapping] && (C.mapping = new THREE[C.mapping]);
    if (C.url instanceof Array) {
      P = C.url.length;
      n = [
      ];
      for (r = 0; r < P; r++) n[r] = d(C.url[r], G.urlBaseType);
      r = (r = n[0].endsWith('.dds')) ? THREE.ImageUtils.loadCompressedTextureCube(n, C.mapping, I(P)) : THREE.ImageUtils.loadTextureCube(n, C.mapping, I(P))
    } else r = C.url.toLowerCase().endsWith('.dds'),
    P = d(C.url, G.urlBaseType),
    n = I(1),
    r = r ? THREE.ImageUtils.loadCompressedTexture(P, C.mapping, n) : THREE.ImageUtils.loadTexture(P, C.mapping, n),
    void 0 !==
    THREE[C.minFilter] && (r.minFilter = THREE[C.minFilter]),
    void 0 !== THREE[C.magFilter] && (r.magFilter = THREE[C.magFilter]),
    C.anisotropy && (r.anisotropy = C.anisotropy),
    C.repeat && (r.repeat.set(C.repeat[0], C.repeat[1]), 1 !== C.repeat[0] && (r.wrapS = THREE.RepeatWrapping), 1 !== C.repeat[1] && (r.wrapT = THREE.RepeatWrapping)),
    C.offset && r.offset.set(C.offset[0], C.offset[1]),
    C.wrap && (P = {
      repeat: THREE.RepeatWrapping,
      mirror: THREE.MirroredRepeatWrapping
    }, void 0 !== P[C.wrap[0]] && (r.wrapS = P[C.wrap[0]]), void 0 !== P[C.wrap[1]] && (r.wrapT = P[C.wrap[1]]));
    z.textures[A] = r
  }
  var J,
  M;
  for (J in G.materials) {
    A = G.materials[J];
    for (M in A.parameters) 'envMap' === M || 'map' === M || 'lightMap' === M || 'bumpMap' === M ? A.parameters[M] = z.textures[A.parameters[M]] : 'shading' === M ? A.parameters[M] = 'flat' === A.parameters[M] ? THREE.FlatShading : THREE.SmoothShading : 'side' === M ? A.parameters[M] = 'double' == A.parameters[M] ? THREE.DoubleSide : 'back' == A.parameters[M] ? THREE.BackSide : THREE.FrontSide : 'blending' === M ? A.parameters[M] = A.parameters[M] in THREE ? THREE[A.parameters[M]] : THREE.NormalBlending :
    'combine' === M ? A.parameters[M] = A.parameters[M] in THREE ? THREE[A.parameters[M]] : THREE.MultiplyOperation : 'vertexColors' === M ? 'face' == A.parameters[M] ? A.parameters[M] = THREE.FaceColors : A.parameters[M] && (A.parameters[M] = THREE.VertexColors) : 'wrapRGB' === M && (I = A.parameters[M], A.parameters[M] = new THREE.Vector3(I[0], I[1], I[2]));
    void 0 !== A.parameters.opacity && 1 > A.parameters.opacity && (A.parameters.transparent = !0);
    A.parameters.normalMap ? (I = THREE.ShaderUtils.lib.normal, C = THREE.UniformsUtils.clone(I.uniforms), r = A.parameters.color, P = A.parameters.specular, n = A.parameters.ambient, Y = A.parameters.shininess, C.tNormal.value = z.textures[A.parameters.normalMap], A.parameters.normalScale && C.uNormalScale.value.set(A.parameters.normalScale[0], A.parameters.normalScale[1]), A.parameters.map && (C.tDiffuse.value = A.parameters.map, C.enableDiffuse.value = !0), A.parameters.envMap && (C.tCube.value = A.parameters.envMap, C.enableReflection.value = !0, C.uReflectivity.value = A.parameters.reflectivity), A.parameters.lightMap && (C.tAO.value = A.parameters.lightMap, C.enableAO.value = !0), A.parameters.specularMap && (C.tSpecular.value = z.textures[A.parameters.specularMap], C.enableSpecular.value = !0), A.parameters.displacementMap && (C.tDisplacement.value = z.textures[A.parameters.displacementMap], C.enableDisplacement.value = !0, C.uDisplacementBias.value = A.parameters.displacementBias, C.uDisplacementScale.value = A.parameters.displacementScale), C.uDiffuseColor.value.setHex(r), C.uSpecularColor.value.setHex(P), C.uAmbientColor.value.setHex(n), C.uShininess.value = Y, A.parameters.opacity && (C.uOpacity.value = A.parameters.opacity), s = new THREE.ShaderMaterial({
      fragmentShader: I.fragmentShader,
      vertexShader: I.vertexShader,
      uniforms: C,
      lights: !0,
      fog: !0
    })) : s = new THREE[A.type](A.parameters);
    z.materials[J] = s
  }
  for (J in G.materials) if (A = G.materials[J], A.parameters.materials) {
    M = [
    ];
    for (r = 0; r < A.parameters.materials.length; r++) M.push(z.materials[A.parameters.materials[r]]);
    z.materials[J].materials = M
  }
  e();
  z.cameras && G.defaults.camera && (z.currentCamera = z.cameras[G.defaults.camera]);
  z.fogs && G.defaults.fog && (z.scene.fog = z.fogs[G.defaults.fog]);
  a = G.defaults.bgcolor;
  z.bgColor = new THREE.Color;
  z.bgColor.setRGB(a[0], a[1], a[2]);
  z.bgColorAlpha = G.defaults.bgalpha;
  l.callbackSync(z);
  k()
};
THREE.TextureLoader = function () {
  THREE.EventDispatcher.call(this);
  this.crossOrigin = null
};
THREE.TextureLoader.prototype = {
  constructor: THREE.TextureLoader,
  load: function (a) {
    var b = this,
    c = new Image;
    c.addEventListener('load', function () {
      var a = new THREE.Texture(c);
      a.needsUpdate = !0;
      b.dispatchEvent({
        type: 'load',
        content: a
      })
    }, !1);
    c.addEventListener('error', function () {
      b.dispatchEvent({
        type: 'error',
        message: 'Couldn\'t load URL [' + a + ']'
      })
    }, !1);
    b.crossOrigin && (c.crossOrigin = b.crossOrigin);
    c.src = a
  }
};
THREE.Material = function () {
  THREE.EventDispatcher.call(this);
  this.id = THREE.MaterialIdCount++;
  this.name = '';
  this.side = THREE.FrontSide;
  this.opacity = 1;
  this.transparent = !1;
  this.blending = THREE.NormalBlending;
  this.blendSrc = THREE.SrcAlphaFactor;
  this.blendDst = THREE.OneMinusSrcAlphaFactor;
  this.blendEquation = THREE.AddEquation;
  this.depthWrite = this.depthTest = !0;
  this.polygonOffset = !1;
  this.alphaTest = this.polygonOffsetUnits = this.polygonOffsetFactor = 0;
  this.overdraw = !1;
  this.needsUpdate = this.visible = !0
};
THREE.Material.prototype.setValues = function (a) {
  if (void 0 !== a) for (var b in a) {
    var c = a[b];
    if (void 0 === c) console.warn('THREE.Material: \'' + b + '\' parameter is undefined.');
     else if (b in this) {
      var d = this[b];
      d instanceof THREE.Color && c instanceof THREE.Color ? d.copy(c) : d instanceof THREE.Color ? d.set(c) : d instanceof THREE.Vector3 && c instanceof THREE.Vector3 ? d.copy(c) : this[b] = c
    }
  }
};
THREE.Material.prototype.clone = function (a) {
  void 0 === a && (a = new THREE.Material);
  a.name = this.name;
  a.side = this.side;
  a.opacity = this.opacity;
  a.transparent = this.transparent;
  a.blending = this.blending;
  a.blendSrc = this.blendSrc;
  a.blendDst = this.blendDst;
  a.blendEquation = this.blendEquation;
  a.depthTest = this.depthTest;
  a.depthWrite = this.depthWrite;
  a.polygonOffset = this.polygonOffset;
  a.polygonOffsetFactor = this.polygonOffsetFactor;
  a.polygonOffsetUnits = this.polygonOffsetUnits;
  a.alphaTest = this.alphaTest;
  a.overdraw = this.overdraw;
  a.visible = this.visible;
  return a
};
THREE.Material.prototype.dispose = function () {
  this.dispatchEvent({
    type: 'dispose'
  })
};
THREE.MaterialIdCount = 0;
THREE.LineBasicMaterial = function (a) {
  THREE.Material.call(this);
  this.color = new THREE.Color(16777215);
  this.linewidth = 1;
  this.linejoin = this.linecap = 'round';
  this.vertexColors = !1;
  this.fog = !0;
  this.setValues(a)
};
THREE.LineBasicMaterial.prototype = Object.create(THREE.Material.prototype);
THREE.LineBasicMaterial.prototype.clone = function () {
  var a = new THREE.LineBasicMaterial;
  THREE.Material.prototype.clone.call(this, a);
  a.color.copy(this.color);
  a.linewidth = this.linewidth;
  a.linecap = this.linecap;
  a.linejoin = this.linejoin;
  a.vertexColors = this.vertexColors;
  a.fog = this.fog;
  return a
};
THREE.LineDashedMaterial = function (a) {
  THREE.Material.call(this);
  this.color = new THREE.Color(16777215);
  this.scale = this.linewidth = 1;
  this.dashSize = 3;
  this.gapSize = 1;
  this.vertexColors = !1;
  this.fog = !0;
  this.setValues(a)
};
THREE.LineDashedMaterial.prototype = Object.create(THREE.Material.prototype);
THREE.LineDashedMaterial.prototype.clone = function () {
  var a = new THREE.LineDashedMaterial;
  THREE.Material.prototype.clone.call(this, a);
  a.color.copy(this.color);
  a.linewidth = this.linewidth;
  a.scale = this.scale;
  a.dashSize = this.dashSize;
  a.gapSize = this.gapSize;
  a.vertexColors = this.vertexColors;
  a.fog = this.fog;
  return a
};
THREE.MeshBasicMaterial = function (a) {
  THREE.Material.call(this);
  this.color = new THREE.Color(16777215);
  this.envMap = this.specularMap = this.lightMap = this.map = null;
  this.combine = THREE.MultiplyOperation;
  this.reflectivity = 1;
  this.refractionRatio = 0.98;
  this.fog = !0;
  this.shading = THREE.SmoothShading;
  this.wireframe = !1;
  this.wireframeLinewidth = 1;
  this.wireframeLinejoin = this.wireframeLinecap = 'round';
  this.vertexColors = THREE.NoColors;
  this.morphTargets = this.skinning = !1;
  this.setValues(a)
};
THREE.MeshBasicMaterial.prototype = Object.create(THREE.Material.prototype);
THREE.MeshBasicMaterial.prototype.clone = function () {
  var a = new THREE.MeshBasicMaterial;
  THREE.Material.prototype.clone.call(this, a);
  a.color.copy(this.color);
  a.map = this.map;
  a.lightMap = this.lightMap;
  a.specularMap = this.specularMap;
  a.envMap = this.envMap;
  a.combine = this.combine;
  a.reflectivity = this.reflectivity;
  a.refractionRatio = this.refractionRatio;
  a.fog = this.fog;
  a.shading = this.shading;
  a.wireframe = this.wireframe;
  a.wireframeLinewidth = this.wireframeLinewidth;
  a.wireframeLinecap = this.wireframeLinecap;
  a.wireframeLinejoin = this.wireframeLinejoin;
  a.vertexColors = this.vertexColors;
  a.skinning = this.skinning;
  a.morphTargets = this.morphTargets;
  return a
};
THREE.MeshLambertMaterial = function (a) {
  THREE.Material.call(this);
  this.color = new THREE.Color(16777215);
  this.ambient = new THREE.Color(16777215);
  this.emissive = new THREE.Color(0);
  this.wrapAround = !1;
  this.wrapRGB = new THREE.Vector3(1, 1, 1);
  this.envMap = this.specularMap = this.lightMap = this.map = null;
  this.combine = THREE.MultiplyOperation;
  this.reflectivity = 1;
  this.refractionRatio = 0.98;
  this.fog = !0;
  this.shading = THREE.SmoothShading;
  this.wireframe = !1;
  this.wireframeLinewidth = 1;
  this.wireframeLinejoin = this.wireframeLinecap = 'round';
  this.vertexColors = THREE.NoColors;
  this.morphNormals = this.morphTargets = this.skinning = !1;
  this.setValues(a)
};
THREE.MeshLambertMaterial.prototype = Object.create(THREE.Material.prototype);
THREE.MeshLambertMaterial.prototype.clone = function () {
  var a = new THREE.MeshLambertMaterial;
  THREE.Material.prototype.clone.call(this, a);
  a.color.copy(this.color);
  a.ambient.copy(this.ambient);
  a.emissive.copy(this.emissive);
  a.wrapAround = this.wrapAround;
  a.wrapRGB.copy(this.wrapRGB);
  a.map = this.map;
  a.lightMap = this.lightMap;
  a.specularMap = this.specularMap;
  a.envMap = this.envMap;
  a.combine = this.combine;
  a.reflectivity = this.reflectivity;
  a.refractionRatio = this.refractionRatio;
  a.fog = this.fog;
  a.shading = this.shading;
  a.wireframe = this.wireframe;
  a.wireframeLinewidth = this.wireframeLinewidth;
  a.wireframeLinecap = this.wireframeLinecap;
  a.wireframeLinejoin = this.wireframeLinejoin;
  a.vertexColors = this.vertexColors;
  a.skinning = this.skinning;
  a.morphTargets = this.morphTargets;
  a.morphNormals = this.morphNormals;
  return a
};
THREE.MeshPhongMaterial = function (a) {
  THREE.Material.call(this);
  this.color = new THREE.Color(16777215);
  this.ambient = new THREE.Color(16777215);
  this.emissive = new THREE.Color(0);
  this.specular = new THREE.Color(1118481);
  this.shininess = 30;
  this.metal = !1;
  this.perPixel = !0;
  this.wrapAround = !1;
  this.wrapRGB = new THREE.Vector3(1, 1, 1);
  this.bumpMap = this.lightMap = this.map = null;
  this.bumpScale = 1;
  this.normalMap = null;
  this.normalScale = new THREE.Vector2(1, 1);
  this.envMap = this.specularMap = null;
  this.combine = THREE.MultiplyOperation;
  this.reflectivity = 1;
  this.refractionRatio = 0.98;
  this.fog = !0;
  this.shading = THREE.SmoothShading;
  this.wireframe = !1;
  this.wireframeLinewidth = 1;
  this.wireframeLinejoin = this.wireframeLinecap = 'round';
  this.vertexColors = THREE.NoColors;
  this.morphNormals = this.morphTargets = this.skinning = !1;
  this.setValues(a)
};
THREE.MeshPhongMaterial.prototype = Object.create(THREE.Material.prototype);
THREE.MeshPhongMaterial.prototype.clone = function () {
  var a = new THREE.MeshPhongMaterial;
  THREE.Material.prototype.clone.call(this, a);
  a.color.copy(this.color);
  a.ambient.copy(this.ambient);
  a.emissive.copy(this.emissive);
  a.specular.copy(this.specular);
  a.shininess = this.shininess;
  a.metal = this.metal;
  a.perPixel = this.perPixel;
  a.wrapAround = this.wrapAround;
  a.wrapRGB.copy(this.wrapRGB);
  a.map = this.map;
  a.lightMap = this.lightMap;
  a.bumpMap = this.bumpMap;
  a.bumpScale = this.bumpScale;
  a.normalMap = this.normalMap;
  a.normalScale.copy(this.normalScale);
  a.specularMap = this.specularMap;
  a.envMap = this.envMap;
  a.combine = this.combine;
  a.reflectivity = this.reflectivity;
  a.refractionRatio = this.refractionRatio;
  a.fog = this.fog;
  a.shading = this.shading;
  a.wireframe = this.wireframe;
  a.wireframeLinewidth = this.wireframeLinewidth;
  a.wireframeLinecap = this.wireframeLinecap;
  a.wireframeLinejoin = this.wireframeLinejoin;
  a.vertexColors = this.vertexColors;
  a.skinning = this.skinning;
  a.morphTargets = this.morphTargets;
  a.morphNormals = this.morphNormals;
  return a
};
THREE.MeshDepthMaterial = function (a) {
  THREE.Material.call(this);
  this.wireframe = !1;
  this.wireframeLinewidth = 1;
  this.setValues(a)
};
THREE.MeshDepthMaterial.prototype = Object.create(THREE.Material.prototype);
THREE.MeshDepthMaterial.prototype.clone = function () {
  var a = new THREE.LineBasicMaterial;
  THREE.Material.prototype.clone.call(this, a);
  a.wireframe = this.wireframe;
  a.wireframeLinewidth = this.wireframeLinewidth;
  return a
};
THREE.MeshNormalMaterial = function (a) {
  THREE.Material.call(this, a);
  this.shading = THREE.FlatShading;
  this.wireframe = !1;
  this.wireframeLinewidth = 1;
  this.setValues(a)
};
THREE.MeshNormalMaterial.prototype = Object.create(THREE.Material.prototype);
THREE.MeshNormalMaterial.prototype.clone = function () {
  var a = new THREE.MeshNormalMaterial;
  THREE.Material.prototype.clone.call(this, a);
  a.shading = this.shading;
  a.wireframe = this.wireframe;
  a.wireframeLinewidth = this.wireframeLinewidth;
  return a
};
THREE.MeshFaceMaterial = function (a) {
  this.materials = a instanceof Array ? a : [
  ]
};
THREE.MeshFaceMaterial.prototype.clone = function () {
  return new THREE.MeshFaceMaterial(this.materials.slice(0))
};
THREE.ParticleBasicMaterial = function (a) {
  THREE.Material.call(this);
  this.color = new THREE.Color(16777215);
  this.map = null;
  this.size = 1;
  this.sizeAttenuation = !0;
  this.vertexColors = !1;
  this.fog = !0;
  this.setValues(a)
};
THREE.ParticleBasicMaterial.prototype = Object.create(THREE.Material.prototype);
THREE.ParticleBasicMaterial.prototype.clone = function () {
  var a = new THREE.ParticleBasicMaterial;
  THREE.Material.prototype.clone.call(this, a);
  a.color.copy(this.color);
  a.map = this.map;
  a.size = this.size;
  a.sizeAttenuation = this.sizeAttenuation;
  a.vertexColors = this.vertexColors;
  a.fog = this.fog;
  return a
};
THREE.ParticleCanvasMaterial = function (a) {
  THREE.Material.call(this);
  this.color = new THREE.Color(16777215);
  this.program = function () {
  };
  this.setValues(a)
};
THREE.ParticleCanvasMaterial.prototype = Object.create(THREE.Material.prototype);
THREE.ParticleCanvasMaterial.prototype.clone = function () {
  var a = new THREE.ParticleCanvasMaterial;
  THREE.Material.prototype.clone.call(this, a);
  a.color.copy(this.color);
  a.program = this.program;
  return a
};
THREE.ParticleDOMMaterial = function (a) {
  this.element = a
};
THREE.ParticleDOMMaterial.prototype.clone = function () {
  return new THREE.ParticleDOMMaterial(this.element)
};
THREE.ShaderMaterial = function (a) {
  THREE.Material.call(this);
  this.vertexShader = this.fragmentShader = 'void main() {}';
  this.uniforms = {
  };
  this.defines = {
  };
  this.attributes = null;
  this.shading = THREE.SmoothShading;
  this.wireframe = !1;
  this.wireframeLinewidth = 1;
  this.lights = this.fog = !1;
  this.vertexColors = THREE.NoColors;
  this.morphNormals = this.morphTargets = this.skinning = !1;
  this.setValues(a)
};
THREE.ShaderMaterial.prototype = Object.create(THREE.Material.prototype);
THREE.ShaderMaterial.prototype.clone = function () {
  var a = new THREE.ShaderMaterial;
  THREE.Material.prototype.clone.call(this, a);
  a.fragmentShader = this.fragmentShader;
  a.vertexShader = this.vertexShader;
  a.uniforms = THREE.UniformsUtils.clone(this.uniforms);
  a.attributes = this.attributes;
  a.defines = this.defines;
  a.shading = this.shading;
  a.wireframe = this.wireframe;
  a.wireframeLinewidth = this.wireframeLinewidth;
  a.fog = this.fog;
  a.lights = this.lights;
  a.vertexColors = this.vertexColors;
  a.skinning = this.skinning;
  a.morphTargets = this.morphTargets;
  a.morphNormals = this.morphNormals;
  return a
};
THREE.SpriteMaterial = function (a) {
  THREE.Material.call(this);
  this.color = new THREE.Color(16777215);
  this.map = new THREE.Texture;
  this.useScreenCoordinates = !0;
  this.depthTest = !this.useScreenCoordinates;
  this.sizeAttenuation = !this.useScreenCoordinates;
  this.scaleByViewport = !this.sizeAttenuation;
  this.alignment = THREE.SpriteAlignment.center.clone();
  this.fog = !1;
  this.uvOffset = new THREE.Vector2(0, 0);
  this.uvScale = new THREE.Vector2(1, 1);
  this.setValues(a);
  a = a || {
  };
  void 0 === a.depthTest && (this.depthTest = !this.useScreenCoordinates);
  void 0 === a.sizeAttenuation && (this.sizeAttenuation = !this.useScreenCoordinates);
  void 0 === a.scaleByViewport && (this.scaleByViewport = !this.sizeAttenuation)
};
THREE.SpriteMaterial.prototype = Object.create(THREE.Material.prototype);
THREE.SpriteMaterial.prototype.clone = function () {
  var a = new THREE.SpriteMaterial;
  THREE.Material.prototype.clone.call(this, a);
  a.color.copy(this.color);
  a.map = this.map;
  a.useScreenCoordinates = this.useScreenCoordinates;
  a.sizeAttenuation = this.sizeAttenuation;
  a.scaleByViewport = this.scaleByViewport;
  a.alignment.copy(this.alignment);
  a.uvOffset.copy(this.uvOffset);
  a.uvScale.copy(this.uvScale);
  a.fog = this.fog;
  return a
};
THREE.SpriteAlignment = {
};
THREE.SpriteAlignment.topLeft = new THREE.Vector2(1, - 1);
THREE.SpriteAlignment.topCenter = new THREE.Vector2(0, - 1);
THREE.SpriteAlignment.topRight = new THREE.Vector2( - 1, - 1);
THREE.SpriteAlignment.centerLeft = new THREE.Vector2(1, 0);
THREE.SpriteAlignment.center = new THREE.Vector2(0, 0);
THREE.SpriteAlignment.centerRight = new THREE.Vector2( - 1, 0);
THREE.SpriteAlignment.bottomLeft = new THREE.Vector2(1, 1);
THREE.SpriteAlignment.bottomCenter = new THREE.Vector2(0, 1);
THREE.SpriteAlignment.bottomRight = new THREE.Vector2( - 1, 1);
THREE.Texture = function (a, b, c, d, e, f, g, h, i) {
  THREE.EventDispatcher.call(this);
  this.id = THREE.TextureIdCount++;
  this.name = '';
  this.image = a;
  this.mipmaps = [
  ];
  this.mapping = void 0 !== b ? b : new THREE.UVMapping;
  this.wrapS = void 0 !== c ? c : THREE.ClampToEdgeWrapping;
  this.wrapT = void 0 !== d ? d : THREE.ClampToEdgeWrapping;
  this.magFilter = void 0 !== e ? e : THREE.LinearFilter;
  this.minFilter = void 0 !== f ? f : THREE.LinearMipMapLinearFilter;
  this.anisotropy = void 0 !== i ? i : 1;
  this.format = void 0 !== g ? g : THREE.RGBAFormat;
  this.type = void 0 !== h ? h : THREE.UnsignedByteType;
  this.offset = new THREE.Vector2(0, 0);
  this.repeat = new THREE.Vector2(1, 1);
  this.generateMipmaps = !0;
  this.premultiplyAlpha = !1;
  this.flipY = !0;
  this.unpackAlignment = 4;
  this.needsUpdate = !1;
  this.onUpdate = null
};
THREE.Texture.prototype = {
  constructor: THREE.Texture,
  clone: function (a) {
    void 0 === a && (a = new THREE.Texture);
    a.image = this.image;
    a.mipmaps = this.mipmaps.slice(0);
    a.mapping = this.mapping;
    a.wrapS = this.wrapS;
    a.wrapT = this.wrapT;
    a.magFilter = this.magFilter;
    a.minFilter = this.minFilter;
    a.anisotropy = this.anisotropy;
    a.format = this.format;
    a.type = this.type;
    a.offset.copy(this.offset);
    a.repeat.copy(this.repeat);
    a.generateMipmaps = this.generateMipmaps;
    a.premultiplyAlpha = this.premultiplyAlpha;
    a.flipY = this.flipY;
    a.unpackAlignment = this.unpackAlignment;
    return a
  },
  dispose: function () {
    this.dispatchEvent({
      type: 'dispose'
    })
  }
};
THREE.TextureIdCount = 0;
THREE.CompressedTexture = function (a, b, c, d, e, f, g, h, i, k, l) {
  THREE.Texture.call(this, null, f, g, h, i, k, d, e, l);
  this.image = {
    width: b,
    height: c
  };
  this.mipmaps = a;
  this.generateMipmaps = !1
};
THREE.CompressedTexture.prototype = Object.create(THREE.Texture.prototype);
THREE.CompressedTexture.prototype.clone = function () {
  var a = new THREE.CompressedTexture;
  THREE.Texture.prototype.clone.call(this, a);
  return a
};
THREE.DataTexture = function (a, b, c, d, e, f, g, h, i, k, l) {
  THREE.Texture.call(this, null, f, g, h, i, k, d, e, l);
  this.image = {
    data: a,
    width: b,
    height: c
  }
};
THREE.DataTexture.prototype = Object.create(THREE.Texture.prototype);
THREE.DataTexture.prototype.clone = function () {
  var a = new THREE.DataTexture;
  THREE.Texture.prototype.clone.call(this, a);
  return a
};
THREE.Particle = function (a) {
  THREE.Object3D.call(this);
  this.material = a
};
THREE.Particle.prototype = Object.create(THREE.Object3D.prototype);
THREE.Particle.prototype.clone = function (a) {
  void 0 === a && (a = new THREE.Particle(this.material));
  THREE.Object3D.prototype.clone.call(this, a);
  return a
};
THREE.ParticleSystem = function (a, b) {
  THREE.Object3D.call(this);
  this.geometry = a;
  this.material = void 0 !== b ? b : new THREE.ParticleBasicMaterial({
    color: 16777215 * Math.random()
  });
  this.sortParticles = !1;
  this.geometry && null === this.geometry.boundingSphere && this.geometry.computeBoundingSphere();
  this.frustumCulled = !1
};
THREE.ParticleSystem.prototype = Object.create(THREE.Object3D.prototype);
THREE.ParticleSystem.prototype.clone = function (a) {
  void 0 === a && (a = new THREE.ParticleSystem(this.geometry, this.material));
  a.sortParticles = this.sortParticles;
  THREE.Object3D.prototype.clone.call(this, a);
  return a
};
THREE.Line = function (a, b, c) {
  THREE.Object3D.call(this);
  this.geometry = a;
  this.material = void 0 !== b ? b : new THREE.LineBasicMaterial({
    color: 16777215 * Math.random()
  });
  this.type = void 0 !== c ? c : THREE.LineStrip;
  this.geometry && (this.geometry.boundingSphere || this.geometry.computeBoundingSphere())
};
THREE.LineStrip = 0;
THREE.LinePieces = 1;
THREE.Line.prototype = Object.create(THREE.Object3D.prototype);
THREE.Line.prototype.clone = function (a) {
  void 0 === a && (a = new THREE.Line(this.geometry, this.material, this.type));
  THREE.Object3D.prototype.clone.call(this, a);
  return a
};
THREE.Mesh = function (a, b) {
  THREE.Object3D.call(this);
  this.geometry = a;
  this.material = void 0 !== b ? b : new THREE.MeshBasicMaterial({
    color: 16777215 * Math.random(),
    wireframe: !0
  });
  if (this.geometry && (null === this.geometry.boundingSphere && this.geometry.computeBoundingSphere(), this.geometry.morphTargets.length)) {
    this.morphTargetBase = - 1;
    this.morphTargetForcedOrder = [
    ];
    this.morphTargetInfluences = [
    ];
    this.morphTargetDictionary = {
    };
    for (var c = 0; c < this.geometry.morphTargets.length; c++) this.morphTargetInfluences.push(0),
    this.morphTargetDictionary[this.geometry.morphTargets[c].name] = c
  }
};
THREE.Mesh.prototype = Object.create(THREE.Object3D.prototype);
THREE.Mesh.prototype.getMorphTargetIndexByName = function (a) {
  if (void 0 !== this.morphTargetDictionary[a]) return this.morphTargetDictionary[a];
  console.log('THREE.Mesh.getMorphTargetIndexByName: morph target ' + a + ' does not exist. Returning 0.');
  return 0
};
THREE.Mesh.prototype.clone = function (a) {
  void 0 === a && (a = new THREE.Mesh(this.geometry, this.material));
  THREE.Object3D.prototype.clone.call(this, a);
  return a
};
THREE.Bone = function (a) {
  THREE.Object3D.call(this);
  this.skin = a;
  this.skinMatrix = new THREE.Matrix4
};
THREE.Bone.prototype = Object.create(THREE.Object3D.prototype);
THREE.Bone.prototype.update = function (a, b) {
  this.matrixAutoUpdate && (b |= this.updateMatrix());
  if (b || this.matrixWorldNeedsUpdate) a ? this.skinMatrix.multiply(a, this.matrix) : this.skinMatrix.copy(this.matrix),
  this.matrixWorldNeedsUpdate = !1,
  b = !0;
  var c,
  d = this.children.length;
  for (c = 0; c < d; c++) this.children[c].update(this.skinMatrix, b)
};
THREE.SkinnedMesh = function (a, b, c) {
  THREE.Mesh.call(this, a, b);
  this.useVertexTexture = void 0 !== c ? c : !0;
  this.identityMatrix = new THREE.Matrix4;
  this.bones = [
  ];
  this.boneMatrices = [
  ];
  var d,
  e,
  f;
  if (this.geometry && void 0 !== this.geometry.bones) {
    for (a = 0; a < this.geometry.bones.length; a++) c = this.geometry.bones[a],
    d = c.pos,
    e = c.rotq,
    f = c.scl,
    b = this.addBone(),
    b.name = c.name,
    b.position.set(d[0], d[1], d[2]),
    b.quaternion.set(e[0], e[1], e[2], e[3]),
    b.useQuaternion = !0,
    void 0 !== f ? b.scale.set(f[0], f[1], f[2]) : b.scale.set(1, 1, 1);
    for (a = 0; a < this.bones.length; a++) c = this.geometry.bones[a],
    b = this.bones[a],
    - 1 === c.parent ? this.add(b) : this.bones[c.parent].add(b);
    a = this.bones.length;
    this.useVertexTexture ? (this.boneTextureHeight = this.boneTextureWidth = a = 256 < a ? 64 : 64 < a ? 32 : 16 < a ? 16 : 8, this.boneMatrices = new Float32Array(4 * this.boneTextureWidth * this.boneTextureHeight), this.boneTexture = new THREE.DataTexture(this.boneMatrices, this.boneTextureWidth, this.boneTextureHeight, THREE.RGBAFormat, THREE.FloatType), this.boneTexture.minFilter = THREE.NearestFilter, this.boneTexture.magFilter = THREE.NearestFilter, this.boneTexture.generateMipmaps = !1, this.boneTexture.flipY = !1) : this.boneMatrices = new Float32Array(16 * a);
    this.pose()
  }
};
THREE.SkinnedMesh.prototype = Object.create(THREE.Mesh.prototype);
THREE.SkinnedMesh.prototype.addBone = function (a) {
  void 0 === a && (a = new THREE.Bone(this));
  this.bones.push(a);
  return a
};
THREE.SkinnedMesh.prototype.updateMatrixWorld = function (a) {
  this.matrixAutoUpdate && this.updateMatrix();
  if (this.matrixWorldNeedsUpdate || a) this.parent ? this.matrixWorld.multiply(this.parent.matrixWorld, this.matrix) : this.matrixWorld.copy(this.matrix),
  this.matrixWorldNeedsUpdate = !1;
  for (var a = 0, b = this.children.length; a < b; a++) {
    var c = this.children[a];
    c instanceof THREE.Bone ? c.update(this.identityMatrix, !1) : c.updateMatrixWorld(!0)
  }
  if (void 0 == this.boneInverses) {
    this.boneInverses = [
    ];
    a = 0;
    for (b = this.bones.length; a <
    b; a++) c = new THREE.Matrix4,
    c.getInverse(this.bones[a].skinMatrix),
    this.boneInverses.push(c)
  }
  a = 0;
  for (b = this.bones.length; a < b; a++) THREE.SkinnedMesh.offsetMatrix.multiply(this.bones[a].skinMatrix, this.boneInverses[a]),
  THREE.SkinnedMesh.offsetMatrix.flattenToArrayOffset(this.boneMatrices, 16 * a);
  this.useVertexTexture && (this.boneTexture.needsUpdate = !0)
};
THREE.SkinnedMesh.prototype.pose = function () {
  this.updateMatrixWorld(!0);
  for (var a = 0; a < this.geometry.skinIndices.length; a++) {
    var b = this.geometry.skinWeights[a],
    c = 1 / b.lengthManhattan();
    Infinity !== c ? b.multiplyScalar(c) : b.set(1)
  }
};
THREE.SkinnedMesh.prototype.clone = function (a) {
  void 0 === a && (a = new THREE.SkinnedMesh(this.geometry, this.material, this.useVertexTexture));
  THREE.Mesh.prototype.clone.call(this, a);
  return a
};
THREE.SkinnedMesh.offsetMatrix = new THREE.Matrix4;
THREE.MorphAnimMesh = function (a, b) {
  THREE.Mesh.call(this, a, b);
  this.duration = 1000;
  this.mirroredLoop = !1;
  this.currentKeyframe = this.lastKeyframe = this.time = 0;
  this.direction = 1;
  this.directionBackwards = !1;
  this.setFrameRange(0, this.geometry.morphTargets.length - 1)
};
THREE.MorphAnimMesh.prototype = Object.create(THREE.Mesh.prototype);
THREE.MorphAnimMesh.prototype.setFrameRange = function (a, b) {
  this.startKeyframe = a;
  this.endKeyframe = b;
  this.length = this.endKeyframe - this.startKeyframe + 1
};
THREE.MorphAnimMesh.prototype.setDirectionForward = function () {
  this.direction = 1;
  this.directionBackwards = !1
};
THREE.MorphAnimMesh.prototype.setDirectionBackward = function () {
  this.direction = - 1;
  this.directionBackwards = !0
};
THREE.MorphAnimMesh.prototype.parseAnimations = function () {
  var a = this.geometry;
  a.animations || (a.animations = {
  });
  for (var b, c = a.animations, d = /([a-z]+)(\d+)/, e = 0, f = a.morphTargets.length; e < f; e++) {
    var g = a.morphTargets[e].name.match(d);
    if (g && 1 < g.length) {
      g = g[1];
      c[g] || (c[g] = {
        start: Infinity,
        end: - Infinity
      });
      var h = c[g];
      e < h.start && (h.start = e);
      e > h.end && (h.end = e);
      b || (b = g)
    }
  }
  a.firstAnimation = b
};
THREE.MorphAnimMesh.prototype.setAnimationLabel = function (a, b, c) {
  this.geometry.animations || (this.geometry.animations = {
  });
  this.geometry.animations[a] = {
    start: b,
    end: c
  }
};
THREE.MorphAnimMesh.prototype.playAnimation = function (a, b) {
  var c = this.geometry.animations[a];
  c ? (this.setFrameRange(c.start, c.end), this.duration = 1000 * ((c.end - c.start) / b), this.time = 0) : console.warn('animation[' + a + '] undefined')
};
THREE.MorphAnimMesh.prototype.updateAnimation = function (a) {
  var b = this.duration / this.length;
  this.time += this.direction * a;
  if (this.mirroredLoop) {
    if (this.time > this.duration || 0 > this.time) this.direction *= - 1,
    this.time > this.duration && (this.time = this.duration, this.directionBackwards = !0),
    0 > this.time && (this.time = 0, this.directionBackwards = !1)
  } else this.time %= this.duration,
  0 > this.time && (this.time += this.duration);
  a = this.startKeyframe + THREE.Math.clamp(Math.floor(this.time / b), 0, this.length - 1);
  a !== this.currentKeyframe && (this.morphTargetInfluences[this.lastKeyframe] = 0, this.morphTargetInfluences[this.currentKeyframe] = 1, this.morphTargetInfluences[a] = 0, this.lastKeyframe = this.currentKeyframe, this.currentKeyframe = a);
  b = this.time % b / b;
  this.directionBackwards && (b = 1 - b);
  this.morphTargetInfluences[this.currentKeyframe] = b;
  this.morphTargetInfluences[this.lastKeyframe] = 1 - b
};
THREE.MorphAnimMesh.prototype.clone = function (a) {
  void 0 === a && (a = new THREE.MorphAnimMesh(this.geometry, this.material));
  a.duration = this.duration;
  a.mirroredLoop = this.mirroredLoop;
  a.time = this.time;
  a.lastKeyframe = this.lastKeyframe;
  a.currentKeyframe = this.currentKeyframe;
  a.direction = this.direction;
  a.directionBackwards = this.directionBackwards;
  THREE.Mesh.prototype.clone.call(this, a);
  return a
};
THREE.Ribbon = function (a, b) {
  THREE.Object3D.call(this);
  this.geometry = a;
  this.material = b
};
THREE.Ribbon.prototype = Object.create(THREE.Object3D.prototype);
THREE.Ribbon.prototype.clone = function (a) {
  void 0 === a && (a = new THREE.Ribbon(this.geometry, this.material));
  THREE.Object3D.prototype.clone.call(this, a);
  return a
};
THREE.LOD = function () {
  THREE.Object3D.call(this);
  this.LODs = [
  ]
};
THREE.LOD.prototype = Object.create(THREE.Object3D.prototype);
THREE.LOD.prototype.addLevel = function (a, b) {
  void 0 === b && (b = 0);
  for (var b = Math.abs(b), c = 0; c < this.LODs.length && !(b < this.LODs[c].visibleAtDistance); c++);
  this.LODs.splice(c, 0, {
    visibleAtDistance: b,
    object3D: a
  });
  this.add(a)
};
THREE.LOD.prototype.update = function (a) {
  if (1 < this.LODs.length) {
    a.matrixWorldInverse.getInverse(a.matrixWorld);
    a = a.matrixWorldInverse;
    a = - (a.elements[2] * this.matrixWorld.elements[12] + a.elements[6] * this.matrixWorld.elements[13] + a.elements[10] * this.matrixWorld.elements[14] + a.elements[14]);
    this.LODs[0].object3D.visible = !0;
    for (var b = 1; b < this.LODs.length; b++) if (a >= this.LODs[b].visibleAtDistance) this.LODs[b - 1].object3D.visible = !1,
    this.LODs[b].object3D.visible = !0;
     else break;
    for (; b < this.LODs.length; b++) this.LODs[b].object3D.visible = !1
  }
};
THREE.LOD.prototype.clone = function () {
};
THREE.Sprite = function (a) {
  THREE.Object3D.call(this);
  this.material = void 0 !== a ? a : new THREE.SpriteMaterial;
  this.rotation3d = this.rotation;
  this.rotation = 0
};
THREE.Sprite.prototype = Object.create(THREE.Object3D.prototype);
THREE.Sprite.prototype.updateMatrix = function () {
  this.matrix.setPosition(this.position);
  this.rotation3d.set(0, 0, this.rotation);
  this.matrix.setRotationFromEuler(this.rotation3d);
  (1 !== this.scale.x || 1 !== this.scale.y) && this.matrix.scale(this.scale);
  this.matrixWorldNeedsUpdate = !0
};
THREE.Sprite.prototype.clone = function (a) {
  void 0 === a && (a = new THREE.Sprite(this.material));
  THREE.Object3D.prototype.clone.call(this, a);
  return a
};
THREE.Scene = function () {
  THREE.Object3D.call(this);
  this.overrideMaterial = this.fog = null;
  this.matrixAutoUpdate = !1;
  this.__objects = [
  ];
  this.__lights = [
  ];
  this.__objectsAdded = [
  ];
  this.__objectsRemoved = [
  ]
};
THREE.Scene.prototype = Object.create(THREE.Object3D.prototype);
THREE.Scene.prototype.__addObject = function (a) {
  if (a instanceof THREE.Light) - 1 === this.__lights.indexOf(a) && this.__lights.push(a),
  a.target && void 0 === a.target.parent && this.add(a.target);
   else if (!(a instanceof THREE.Camera || a instanceof THREE.Bone) && - 1 === this.__objects.indexOf(a)) {
    this.__objects.push(a);
    this.__objectsAdded.push(a);
    var b = this.__objectsRemoved.indexOf(a);
    - 1 !== b && this.__objectsRemoved.splice(b, 1)
  }
  for (b = 0; b < a.children.length; b++) this.__addObject(a.children[b])
};
THREE.Scene.prototype.__removeObject = function (a) {
  if (a instanceof THREE.Light) {
    var b = this.__lights.indexOf(a);
    - 1 !== b && this.__lights.splice(b, 1)
  } else a instanceof THREE.Camera || (b = this.__objects.indexOf(a), - 1 !== b && (this.__objects.splice(b, 1), this.__objectsRemoved.push(a), b = this.__objectsAdded.indexOf(a), - 1 !== b && this.__objectsAdded.splice(b, 1)));
  for (b = 0; b < a.children.length; b++) this.__removeObject(a.children[b])
};
THREE.Fog = function (a, b, c) {
  this.name = '';
  this.color = new THREE.Color(a);
  this.near = void 0 !== b ? b : 1;
  this.far = void 0 !== c ? c : 1000
};
THREE.Fog.prototype.clone = function () {
  return new THREE.Fog(this.color.getHex(), this.near, this.far)
};
THREE.FogExp2 = function (a, b) {
  this.name = '';
  this.color = new THREE.Color(a);
  this.density = void 0 !== b ? b : 0.00025
};
THREE.FogExp2.prototype.clone = function () {
  return new THREE.FogExp2(this.color.getHex(), this.density)
};
THREE.CanvasRenderer = function (a) {
  function b(a) {
    w !== a && (w = n.globalAlpha = a)
  }
  function c(a) {
    x !== a && (a === THREE.NormalBlending ? n.globalCompositeOperation = 'source-over' : a === THREE.AdditiveBlending ? n.globalCompositeOperation = 'lighter' : a === THREE.SubtractiveBlending && (n.globalCompositeOperation = 'darker'), x = a)
  }
  function d(a) {
    t !== a && (t = n.strokeStyle = a)
  }
  function e(a) {
    K !== a && (K = n.fillStyle = a)
  }
  console.log('THREE.CanvasRenderer', THREE.REVISION);
  var a = a || {
  },
  f = this,
  g,
  h,
  i,
  k = new THREE.Projector,
  l = void 0 !== a.canvas ? a.canvas :
  document.createElement('canvas'),
  m,
  p,
  s,
  q,
  n = l.getContext('2d'),
  r = new THREE.Color(0),
  v = 0,
  w = 1,
  x = 0,
  t = null,
  K = null,
  D = null,
  B = null,
  z = null,
  E,
  G,
  I,
  Y,
  C = new THREE.RenderableVertex,
  P = new THREE.RenderableVertex,
  A,
  J,
  M,
  T,
  N,
  fa,
  oa,
  L,
  Z,
  eb,
  Ea,
  jb,
  H = new THREE.Color,
  ja = new THREE.Color,
  ha = new THREE.Color,
  ia = new THREE.Color,
  ka = new THREE.Color,
  W = new THREE.Color,
  ba = new THREE.Color,
  qa = {
  },
  Na = {
  },
  ya,
  ma,
  sa,
  Pa,
  nb,
  la,
  fb,
  ob,
  pb,
  zb,
  gb = new THREE.Box2,
  Ma = new THREE.Box2,
  va = new THREE.Box2,
  Bb = !1,
  Sa = new THREE.Color,
  Ya = new THREE.Color,
  Za = new THREE.Color,
  qb = new THREE.Vector3,
  Cb,
  $a,
  Db,
  rb,
  fc,
  Nb,
  ta = 16;
  Cb = document.createElement('canvas');
  Cb.width = Cb.height = 2;
  $a = Cb.getContext('2d');
  $a.fillStyle = 'rgba(0,0,0,1)';
  $a.fillRect(0, 0, 2, 2);
  Db = $a.getImageData(0, 0, 2, 2);
  rb = Db.data;
  fc = document.createElement('canvas');
  fc.width = fc.height = ta;
  Nb = fc.getContext('2d');
  Nb.translate( - ta / 2, - ta / 2);
  Nb.scale(ta, ta);
  ta--;
  this.domElement = l;
  this.devicePixelRatio = void 0 !== a.devicePixelRatio ? a.devicePixelRatio : void 0 !== window.devicePixelRatio ? window.devicePixelRatio : 1;
  this.sortElements = this.sortObjects = this.autoClear = !0;
  this.info = {
    render: {
      vertices: 0,
      faces: 0
    }
  };
  this.setSize = function (a, b) {
    m = a * this.devicePixelRatio;
    p = b * this.devicePixelRatio;
    s = Math.floor(m / 2);
    q = Math.floor(p / 2);
    l.width = m;
    l.height = p;
    l.style.width = a + 'px';
    l.style.height = b + 'px';
    gb.min.set( - s, - q);
    gb.max.set(s, q);
    Ma.min.set( - s, - q);
    Ma.max.set(s, q);
    w = 1;
    x = 0;
    z = B = D = K = t = null
  };
  this.setClearColor = function (a, b) {
    r.copy(a);
    v = void 0 !== b ? b : 1;
    Ma.min.set( - s, - q);
    Ma.max.set(s, q)
  };
  this.setClearColorHex = function (a, b) {
    r.setHex(a);
    v = void 0 !== b ?
    b : 1;
    Ma.min.set( - s, - q);
    Ma.max.set(s, q)
  };
  this.getMaxAnisotropy = function () {
    return 0
  };
  this.clear = function () {
    n.setTransform(1, 0, 0, - 1, s, q);
    !1 === Ma.empty() && (Ma.intersect(gb), Ma.expandByScalar(2), 1 > v && n.clearRect(Ma.min.x | 0, Ma.min.y | 0, Ma.max.x - Ma.min.x | 0, Ma.max.y - Ma.min.y | 0), 0 < v && (c(THREE.NormalBlending), b(1), e('rgba(' + Math.floor(255 * r.r) + ',' + Math.floor(255 * r.g) + ',' + Math.floor(255 * r.b) + ',' + v + ')'), n.fillRect(Ma.min.x | 0, Ma.min.y | 0, Ma.max.x - Ma.min.x | 0, Ma.max.y - Ma.min.y | 0)), Ma.makeEmpty())
  };
  this.render = function (a, l) {
    function j(a, b, c) {
      for (var d = 0, e = i.length; d < e; d++) {
        var f = i[d],
        g = f.color;
        if (f instanceof THREE.DirectionalLight) {
          var j = f.matrixWorld.getPosition().normalize(),
          h = b.dot(j);
          0 >= h || (h *= f.intensity, c.r += g.r * h, c.g += g.g * h, c.b += g.b * h)
        } else f instanceof THREE.PointLight && (j = f.matrixWorld.getPosition(), h = b.dot(qb.sub(j, a).normalize()), 0 >= h || (h *= 0 == f.distance ? 1 : 1 - Math.min(a.distanceTo(j) / f.distance, 1), 0 != h && (h *= f.intensity, c.r += g.r * h, c.g += g.g * h, c.b += g.b * h)))
      }
    }
    function p(a, d, e, g, h, i, k, n) {
      f.info.render.vertices +=
      3;
      f.info.render.faces++;
      b(n.opacity);
      c(n.blending);
      A = a.positionScreen.x;
      J = a.positionScreen.y;
      M = d.positionScreen.x;
      T = d.positionScreen.y;
      N = e.positionScreen.x;
      fa = e.positionScreen.y;
      m(A, J, M, T, N, fa);
      (n instanceof THREE.MeshLambertMaterial || n instanceof THREE.MeshPhongMaterial) && null === n.map && null === n.map ? (W.copy(n.color), ba.copy(n.emissive), n.vertexColors === THREE.FaceColors && (W.r *= k.color.r, W.g *= k.color.g, W.b *= k.color.b), !0 === Bb ? !1 === n.wireframe && n.shading == THREE.SmoothShading && 3 == k.vertexNormalsLength ? (ja.r = ha.r = ia.r = Sa.r, ja.g = ha.g = ia.g = Sa.g, ja.b = ha.b = ia.b = Sa.b, j(k.v1.positionWorld, k.vertexNormalsModel[0], ja), j(k.v2.positionWorld, k.vertexNormalsModel[1], ha), j(k.v3.positionWorld, k.vertexNormalsModel[2], ia), ja.r = ja.r * W.r + ba.r, ja.g = ja.g * W.g + ba.g, ja.b = ja.b * W.b + ba.b, ha.r = ha.r * W.r + ba.r, ha.g = ha.g * W.g + ba.g, ha.b = ha.b * W.b + ba.b, ia.r = ia.r * W.r + ba.r, ia.g = ia.g * W.g + ba.g, ia.b = ia.b * W.b + ba.b, ka.r = 0.5 * (ha.r + ia.r), ka.g = 0.5 * (ha.g + ia.g), ka.b = 0.5 * (ha.b + ia.b), sa = K(ja, ha, ia, ka), x(A, J, M, T, N, fa, 0, 0, 1, 0, 0, 1, sa)) : (H.r = Sa.r, H.g = Sa.g, H.b = Sa.b, j(k.centroidModel, k.normalModel, H), H.r = H.r * W.r + ba.r, H.g = H.g * W.g + ba.g, H.b = H.b * W.b + ba.b, !0 === n.wireframe ? t(H, n.wireframeLinewidth, n.wireframeLinecap, n.wireframeLinejoin) : v(H)) : !0 === n.wireframe ? t(n.color, n.wireframeLinewidth, n.wireframeLinecap, n.wireframeLinejoin) : v(n.color)) : n instanceof THREE.MeshBasicMaterial || n instanceof THREE.MeshLambertMaterial || n instanceof THREE.MeshPhongMaterial ? null !== n.map ? n.map.mapping instanceof THREE.UVMapping && (Pa = k.uvs[0], w(A, J, M, T, N, fa, Pa[g].x, Pa[g].y, Pa[h].x, Pa[h].y, Pa[i].x, Pa[i].y, n.map)) : null !== n.envMap ? n.envMap.mapping instanceof THREE.SphericalReflectionMapping && (qb.copy(k.vertexNormalsModelView[g]), nb = 0.5 * qb.x + 0.5, la = 0.5 * qb.y + 0.5, qb.copy(k.vertexNormalsModelView[h]), fb = 0.5 * qb.x + 0.5, ob = 0.5 * qb.y + 0.5, qb.copy(k.vertexNormalsModelView[i]), pb = 0.5 * qb.x + 0.5, zb = 0.5 * qb.y + 0.5, w(A, J, M, T, N, fa, nb, la, fb, ob, pb, zb, n.envMap)) : (H.copy(n.color), n.vertexColors === THREE.FaceColors && (H.r *= k.color.r, H.g *= k.color.g, H.b *= k.color.b), !0 === n.wireframe ? t(H, n.wireframeLinewidth, n.wireframeLinecap, n.wireframeLinejoin) : v(H)) : n instanceof THREE.MeshDepthMaterial ? (ya = l.near, ma = l.far, ja.r = ja.g = ja.b = 1 - ta(a.positionScreen.z, ya, ma), ha.r = ha.g = ha.b = 1 - ta(d.positionScreen.z, ya, ma), ia.r = ia.g = ia.b = 1 - ta(e.positionScreen.z, ya, ma), ka.r = 0.5 * (ha.r + ia.r), ka.g = 0.5 * (ha.g + ia.g), ka.b = 0.5 * (ha.b + ia.b), sa = K(ja, ha, ia, ka), x(A, J, M, T, N, fa, 0, 0, 1, 0, 0, 1, sa)) : n instanceof THREE.MeshNormalMaterial && (H.r = 0.5 * k.normalModelView.x + 0.5, H.g = 0.5 * k.normalModelView.y + 0.5, H.b = 0.5 * k.normalModelView.z + 0.5, !0 === n.wireframe ?
      t(H, n.wireframeLinewidth, n.wireframeLinecap, n.wireframeLinejoin) : v(H))
    }
    function m(a, b, c, d, e, f) {
      n.beginPath();
      n.moveTo(a, b);
      n.lineTo(c, d);
      n.lineTo(e, f);
      n.closePath()
    }
    function r(a, b, c, d, e, f, g, j) {
      n.beginPath();
      n.moveTo(a, b);
      n.lineTo(c, d);
      n.lineTo(e, f);
      n.lineTo(g, j);
      n.closePath()
    }
    function t(a, b, c, e) {
      D !== b && (D = n.lineWidth = b);
      B !== c && (B = n.lineCap = c);
      z !== e && (z = n.lineJoin = e);
      d(a.getStyle());
      n.stroke();
      va.expandByScalar(2 * b)
    }
    function v(a) {
      e(a.getStyle());
      n.fill()
    }
    function w(a, b, c, d, f, g, j, h, i, k, l, p, m) {
      if (!(m instanceof THREE.DataTexture || void 0 === m.image || 0 == m.image.width)) {
        if (!0 === m.needsUpdate) {
          var q = m.wrapS == THREE.RepeatWrapping,
          s = m.wrapT == THREE.RepeatWrapping;
          qa[m.id] = n.createPattern(m.image, !0 === q && !0 === s ? 'repeat' : !0 === q && !1 === s ? 'repeat-x' : !1 === q && !0 === s ? 'repeat-y' : 'no-repeat');
          m.needsUpdate = !1
        }
        void 0 === qa[m.id] ? e('rgba(0,0,0,1)') : e(qa[m.id]);
        var q = m.offset.x / m.repeat.x,
        s = m.offset.y / m.repeat.y,
        r = m.image.width * m.repeat.x,
        t = m.image.height * m.repeat.y,
        j = (j + q) * r,
        h = (1 - h + s) * t,
        c = c - a,
        d = d - b,
        f = f - a,
        g = g - b,
        i = (i + q) * r - j,
        k = (1 - k + s) * t - h,
        l = (l + q) * r - j,
        p = (1 - p + s) * t - h,
        q = i * p - l * k;
        0 === q ? (void 0 === Na[m.id] && (b = document.createElement('canvas'), b.width = m.image.width, b.height = m.image.height, b = b.getContext('2d'), b.drawImage(m.image, 0, 0), Na[m.id] = b.getImageData(0, 0, m.image.width, m.image.height).data), b = Na[m.id], j = 4 * (Math.floor(j) + Math.floor(h) * m.image.width), H.setRGB(b[j] / 255, b[j + 1] / 255, b[j + 2] / 255), v(H)) : (q = 1 / q, m = (p * c - k * f) * q, k = (p * d - k * g) * q, c = (i * f - l * c) * q, d = (i * g - l * d) * q, a = a - m * j - c * h, j = b - k * j - d * h, n.save(), n.transform(m, k, c, d, a, j), n.fill(), n.restore())
      }
    }
    function x(a, b, c, d, e, f, g, j, h, i, k, l, m) {
      var p,
      q;
      p = m.width - 1;
      q = m.height - 1;
      g *= p;
      j *= q;
      c -= a;
      d -= b;
      e -= a;
      f -= b;
      h = h * p - g;
      i = i * q - j;
      k = k * p - g;
      l = l * q - j;
      q = 1 / (h * l - k * i);
      p = (l * c - i * e) * q;
      i = (l * d - i * f) * q;
      c = (h * e - k * c) * q;
      d = (h * f - k * d) * q;
      a = a - p * g - c * j;
      b = b - i * g - d * j;
      n.save();
      n.transform(p, i, c, d, a, b);
      n.clip();
      n.drawImage(m, 0, 0);
      n.restore()
    }
    function K(a, b, c, d) {
      rb[0] = 255 * a.r | 0;
      rb[1] = 255 * a.g | 0;
      rb[2] = 255 * a.b | 0;
      rb[4] = 255 * b.r | 0;
      rb[5] = 255 * b.g | 0;
      rb[6] = 255 * b.b | 0;
      rb[8] = 255 * c.r | 0;
      rb[9] = 255 * c.g | 0;
      rb[10] = 255 * c.b | 0;
      rb[12] = 255 * d.r | 0;
      rb[13] = 255 * d.g | 0;
      rb[14] = 255 * d.b | 0;
      $a.putImageData(Db, 0, 0);
      Nb.drawImage(Cb, 0, 0);
      return fc
    }
    function ta(a, b, c) {
      a = (a - b) / (c - b);
      return a * a * (3 - 2 * a)
    }
    function ab(a, b) {
      var c = b.x - a.x,
      d = b.y - a.y,
      e = c * c + d * d;
      0 !== e && (e = 1 / Math.sqrt(e), c *= e, d *= e, b.x += c, b.y += d, a.x -= c, a.y -= d)
    }
    if (!1 === l instanceof THREE.Camera) console.error('THREE.CanvasRenderer.render: camera is not an instance of THREE.Camera.');
     else {
      !0 === this.autoClear && this.clear();
      n.setTransform(1, 0, 0, - 1, s, q);
      f.info.render.vertices = 0;
      f.info.render.faces = 0;
      g = k.projectScene(a, l, this.sortObjects, this.sortElements);
      h = g.elements;
      i = g.lights;
      Bb = 0 < i.length;
      if (!0 === Bb) {
        Sa.setRGB(0, 0, 0);
        Ya.setRGB(0, 0, 0);
        Za.setRGB(0, 0, 0);
        for (var tb = 0, Pb = i.length; tb < Pb; tb++) {
          var V = i[tb],
          $ = V.color;
          V instanceof THREE.AmbientLight ? (Sa.r += $.r, Sa.g += $.g, Sa.b += $.b) : V instanceof THREE.DirectionalLight ? (Ya.r += $.r, Ya.g += $.g, Ya.b += $.b) : V instanceof THREE.PointLight && (Za.r += $.r, Za.g += $.g, Za.b += $.b)
        }
      }
      tb = 0;
      for (Pb = h.length; tb < Pb; tb++) {
        var ga = h[tb],
        V = ga.material;
        if (!(void 0 === V || !1 === V.visible)) {
          va.makeEmpty();
          if (ga instanceof THREE.RenderableParticle) {
            E = ga;
            E.x *= s;
            E.y *= q;
            var $ = E,
            Ha = ga;
            b(V.opacity);
            c(V.blending);
            var Va = void 0,
            Qa = void 0,
            kb = void 0,
            Ua = void 0,
            ub = ga = void 0,
            Kb = void 0;
            V instanceof THREE.ParticleBasicMaterial ? null === V.map ? (kb = Ha.object.scale.x, Ua = Ha.object.scale.y, kb *= Ha.scale.x * s, Ua *= Ha.scale.y * q, va.min.set($.x - kb, $.y - Ua), va.max.set($.x + kb, $.y + Ua), !1 !== gb.isIntersectionBox(va) && (e(V.color.getStyle()), n.save(), n.translate($.x, $.y), n.rotate( - Ha.rotation), n.scale(kb, Ua), n.fillRect( - 1, - 1, 2, 2), n.restore())) : (ga = V.map.image, ub = ga.width >> 1, Kb = ga.height >> 1, kb = Ha.scale.x * s, Ua = Ha.scale.y * q, Va = kb * ub, Qa = Ua * Kb, va.min.set($.x - Va, $.y - Qa), va.max.set($.x + Va, $.y + Qa), !1 !== gb.isIntersectionBox(va) && (n.save(), n.translate($.x, $.y), n.rotate( - Ha.rotation), n.scale(kb, - Ua), n.translate( - ub, - Kb), n.drawImage(ga, 0, 0), n.restore())) : V instanceof THREE.ParticleCanvasMaterial && (Va = Ha.scale.x * s, Qa = Ha.scale.y * q, va.min.set($.x - Va, $.y - Qa), va.max.set($.x + Va, $.y + Qa), !1 !== gb.isIntersectionBox(va) && (d(V.color.getStyle()), e(V.color.getStyle()), n.save(), n.translate($.x, $.y), n.rotate( - Ha.rotation), n.scale(Va, Qa), V.program(n), n.restore()))
          } else ga instanceof THREE.RenderableLine ? (E = ga.v1, G = ga.v2, E.positionScreen.x *= s, E.positionScreen.y *= q, G.positionScreen.x *= s, G.positionScreen.y *= q, va.setFromPoints([E.positionScreen,
          G.positionScreen]), !0 === gb.isIntersectionBox(va) && ($ = E, Ha = G, b(V.opacity), c(V.blending), n.beginPath(), n.moveTo($.positionScreen.x, $.positionScreen.y), n.lineTo(Ha.positionScreen.x, Ha.positionScreen.y), V instanceof THREE.LineBasicMaterial && ($ = V.linewidth, D !== $ && (D = n.lineWidth = $), $ = V.linecap, B !== $ && (B = n.lineCap = $), $ = V.linejoin, z !== $ && (z = n.lineJoin = $), d(V.color.getStyle()), n.stroke(), va.expandByScalar(2 * V.linewidth)))) : ga instanceof THREE.RenderableFace3 ? (E = ga.v1, G = ga.v2, I = ga.v3, E.positionScreen.x *= s, E.positionScreen.y *= q, G.positionScreen.x *= s, G.positionScreen.y *= q, I.positionScreen.x *= s, I.positionScreen.y *= q, !0 === V.overdraw && (ab(E.positionScreen, G.positionScreen), ab(G.positionScreen, I.positionScreen), ab(I.positionScreen, E.positionScreen)), va.setFromPoints([E.positionScreen,
          G.positionScreen,
          I.positionScreen]), !0 === gb.isIntersectionBox(va) && p(E, G, I, 0, 1, 2, ga, V, a)) : ga instanceof THREE.RenderableFace4 && (E = ga.v1, G = ga.v2, I = ga.v3, Y = ga.v4, E.positionScreen.x *= s, E.positionScreen.y *= q, G.positionScreen.x *= s, G.positionScreen.y *= q, I.positionScreen.x *= s, I.positionScreen.y *= q, Y.positionScreen.x *= s, Y.positionScreen.y *= q, C.positionScreen.copy(G.positionScreen), P.positionScreen.copy(Y.positionScreen), !0 === V.overdraw && (ab(E.positionScreen, G.positionScreen), ab(G.positionScreen, Y.positionScreen), ab(Y.positionScreen, E.positionScreen), ab(I.positionScreen, C.positionScreen), ab(I.positionScreen, P.positionScreen)), va.setFromPoints([E.positionScreen,
          G.positionScreen,
          I.positionScreen,
          Y.positionScreen]), !0 === gb.isIntersectionBox(va) && ($ = E, Ha = G, Va = I, Qa = Y, kb = C, Ua = P, ub = a, f.info.render.vertices += 4, f.info.render.faces++, b(V.opacity), c(V.blending), void 0 !== V.map && null !== V.map || void 0 !== V.envMap && null !== V.envMap ? (p($, Ha, Qa, 0, 1, 3, ga, V, ub), p(kb, Va, Ua, 1, 2, 3, ga, V, ub)) : (A = $.positionScreen.x, J = $.positionScreen.y, M = Ha.positionScreen.x, T = Ha.positionScreen.y, N = Va.positionScreen.x, fa = Va.positionScreen.y, oa = Qa.positionScreen.x, L = Qa.positionScreen.y, Z = kb.positionScreen.x, eb = kb.positionScreen.y, Ea = Ua.positionScreen.x, jb = Ua.positionScreen.y, V instanceof THREE.MeshLambertMaterial || V instanceof THREE.MeshPhongMaterial ? (W.copy(V.color), ba.copy(V.emissive), V.vertexColors === THREE.FaceColors && (W.r *= ga.color.r, W.g *= ga.color.g, W.b *= ga.color.b), !0 === Bb ? !1 === V.wireframe && V.shading ==
          THREE.SmoothShading && 4 == ga.vertexNormalsLength ? (ja.r = ha.r = ia.r = ka.r = Sa.r, ja.g = ha.g = ia.g = ka.g = Sa.g, ja.b = ha.b = ia.b = ka.b = Sa.b, j(ga.v1.positionWorld, ga.vertexNormalsModel[0], ja), j(ga.v2.positionWorld, ga.vertexNormalsModel[1], ha), j(ga.v4.positionWorld, ga.vertexNormalsModel[3], ia), j(ga.v3.positionWorld, ga.vertexNormalsModel[2], ka), ja.r = ja.r * W.r + ba.r, ja.g = ja.g * W.g + ba.g, ja.b = ja.b * W.b + ba.b, ha.r = ha.r * W.r + ba.r, ha.g = ha.g * W.g + ba.g, ha.b = ha.b * W.b + ba.b, ia.r = ia.r * W.r + ba.r, ia.g = ia.g * W.g + ba.g, ia.b = ia.b * W.b + ba.b, ka.r = ka.r * W.r + ba.r, ka.g = ka.g * W.g + ba.g, ka.b = ka.b * W.b + ba.b, sa = K(ja, ha, ia, ka), m(A, J, M, T, oa, L), x(A, J, M, T, oa, L, 0, 0, 1, 0, 0, 1, sa), m(Z, eb, N, fa, Ea, jb), x(Z, eb, N, fa, Ea, jb, 1, 0, 1, 1, 0, 1, sa)) : (H.r = Sa.r, H.g = Sa.g, H.b = Sa.b, j(ga.centroidModel, ga.normalModel, H), H.r = H.r * W.r + ba.r, H.g = H.g * W.g + ba.g, H.b = H.b * W.b + ba.b, r(A, J, M, T, N, fa, oa, L), !0 === V.wireframe ? t(H, V.wireframeLinewidth, V.wireframeLinecap, V.wireframeLinejoin) : v(H)) : (H.r = W.r + ba.r, H.g = W.g + ba.g, H.b = W.b + ba.b, r(A, J, M, T, N, fa, oa, L), !0 === V.wireframe ? t(H, V.wireframeLinewidth, V.wireframeLinecap, V.wireframeLinejoin) : v(H))) : V instanceof THREE.MeshBasicMaterial ? (H.copy(V.color), V.vertexColors === THREE.FaceColors && (H.r *= ga.color.r, H.g *= ga.color.g, H.b *= ga.color.b), r(A, J, M, T, N, fa, oa, L), !0 === V.wireframe ? t(H, V.wireframeLinewidth, V.wireframeLinecap, V.wireframeLinejoin) : v(H)) : V instanceof THREE.MeshNormalMaterial ? (H.r = 0.5 * ga.normalModelView.x + 0.5, H.g = 0.5 * ga.normalModelView.y + 0.5, H.b = 0.5 * ga.normalModelView.z + 0.5, r(A, J, M, T, N, fa, oa, L), !0 === V.wireframe ? t(H, V.wireframeLinewidth, V.wireframeLinecap, V.wireframeLinejoin) :
          v(H)) : V instanceof THREE.MeshDepthMaterial && (ya = l.near, ma = l.far, ja.r = ja.g = ja.b = 1 - ta($.positionScreen.z, ya, ma), ha.r = ha.g = ha.b = 1 - ta(Ha.positionScreen.z, ya, ma), ia.r = ia.g = ia.b = 1 - ta(Qa.positionScreen.z, ya, ma), ka.r = ka.g = ka.b = 1 - ta(Va.positionScreen.z, ya, ma), sa = K(ja, ha, ia, ka), m(A, J, M, T, oa, L), x(A, J, M, T, oa, L, 0, 0, 1, 0, 0, 1, sa), m(Z, eb, N, fa, Ea, jb), x(Z, eb, N, fa, Ea, jb, 1, 0, 1, 1, 0, 1, sa)))));
          Ma.union(va)
        }
      }
      n.setTransform(1, 0, 0, 1, 0, 0)
    }
  }
};
THREE.ShaderChunk = {
  fog_pars_fragment: '#ifdef USE_FOG\nuniform vec3 fogColor;\n#ifdef FOG_EXP2\nuniform float fogDensity;\n#else\nuniform float fogNear;\nuniform float fogFar;\n#endif\n#endif',
  fog_fragment: '#ifdef USE_FOG\nfloat depth = gl_FragCoord.z / gl_FragCoord.w;\n#ifdef FOG_EXP2\nconst float LOG2 = 1.442695;\nfloat fogFactor = exp2( - fogDensity * fogDensity * depth * depth * LOG2 );\nfogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );\n#else\nfloat fogFactor = smoothstep( fogNear, fogFar, depth );\n#endif\ngl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );\n#endif',
  envmap_pars_fragment: '#ifdef USE_ENVMAP\nuniform float reflectivity;\nuniform samplerCube envMap;\nuniform float flipEnvMap;\nuniform int combine;\n#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP )\nuniform bool useRefract;\nuniform float refractionRatio;\n#else\nvarying vec3 vReflect;\n#endif\n#endif',
  envmap_fragment: '#ifdef USE_ENVMAP\nvec3 reflectVec;\n#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP )\nvec3 cameraToVertex = normalize( vWorldPosition - cameraPosition );\nif ( useRefract ) {\nreflectVec = refract( cameraToVertex, normal, refractionRatio );\n} else { \nreflectVec = reflect( cameraToVertex, normal );\n}\n#else\nreflectVec = vReflect;\n#endif\n#ifdef DOUBLE_SIDED\nfloat flipNormal = ( -1.0 + 2.0 * float( gl_FrontFacing ) );\nvec4 cubeColor = textureCube( envMap, flipNormal * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n#else\nvec4 cubeColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n#endif\n#ifdef GAMMA_INPUT\ncubeColor.xyz *= cubeColor.xyz;\n#endif\nif ( combine == 1 ) {\ngl_FragColor.xyz = mix( gl_FragColor.xyz, cubeColor.xyz, specularStrength * reflectivity );\n} else if ( combine == 2 ) {\ngl_FragColor.xyz += cubeColor.xyz * specularStrength * reflectivity;\n} else {\ngl_FragColor.xyz = mix( gl_FragColor.xyz, gl_FragColor.xyz * cubeColor.xyz, specularStrength * reflectivity );\n}\n#endif',
  envmap_pars_vertex: '#if defined( USE_ENVMAP ) && ! defined( USE_BUMPMAP ) && ! defined( USE_NORMALMAP )\nvarying vec3 vReflect;\nuniform float refractionRatio;\nuniform bool useRefract;\n#endif',
  worldpos_vertex: '#if defined( USE_ENVMAP ) || defined( PHONG ) || defined( LAMBERT ) || defined ( USE_SHADOWMAP )\n#ifdef USE_SKINNING\nvec4 worldPosition = modelMatrix * skinned;\n#endif\n#if defined( USE_MORPHTARGETS ) && ! defined( USE_SKINNING )\nvec4 worldPosition = modelMatrix * vec4( morphed, 1.0 );\n#endif\n#if ! defined( USE_MORPHTARGETS ) && ! defined( USE_SKINNING )\nvec4 worldPosition = modelMatrix * vec4( position, 1.0 );\n#endif\n#endif',
  envmap_vertex: '#if defined( USE_ENVMAP ) && ! defined( USE_BUMPMAP ) && ! defined( USE_NORMALMAP )\nvec3 worldNormal = mat3( modelMatrix[ 0 ].xyz, modelMatrix[ 1 ].xyz, modelMatrix[ 2 ].xyz ) * objectNormal;\nworldNormal = normalize( worldNormal );\nvec3 cameraToVertex = normalize( worldPosition.xyz - cameraPosition );\nif ( useRefract ) {\nvReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n} else {\nvReflect = reflect( cameraToVertex, worldNormal );\n}\n#endif',
  map_particle_pars_fragment: '#ifdef USE_MAP\nuniform sampler2D map;\n#endif',
  map_particle_fragment: '#ifdef USE_MAP\ngl_FragColor = gl_FragColor * texture2D( map, vec2( gl_PointCoord.x, 1.0 - gl_PointCoord.y ) );\n#endif',
  map_pars_vertex: '#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP )\nvarying vec2 vUv;\nuniform vec4 offsetRepeat;\n#endif',
  map_pars_fragment: '#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP )\nvarying vec2 vUv;\n#endif\n#ifdef USE_MAP\nuniform sampler2D map;\n#endif',
  map_vertex: '#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP )\nvUv = uv * offsetRepeat.zw + offsetRepeat.xy;\n#endif',
  map_fragment: '#ifdef USE_MAP\nvec4 texelColor = texture2D( map, vUv );\n#ifdef GAMMA_INPUT\ntexelColor.xyz *= texelColor.xyz;\n#endif\ngl_FragColor = gl_FragColor * texelColor;\n#endif',
  lightmap_pars_fragment: '#ifdef USE_LIGHTMAP\nvarying vec2 vUv2;\nuniform sampler2D lightMap;\n#endif',
  lightmap_pars_vertex: '#ifdef USE_LIGHTMAP\nvarying vec2 vUv2;\n#endif',
  lightmap_fragment: '#ifdef USE_LIGHTMAP\ngl_FragColor = gl_FragColor * texture2D( lightMap, vUv2 );\n#endif',
  lightmap_vertex: '#ifdef USE_LIGHTMAP\nvUv2 = uv2;\n#endif',
  bumpmap_pars_fragment: '#ifdef USE_BUMPMAP\nuniform sampler2D bumpMap;\nuniform float bumpScale;\nvec2 dHdxy_fwd() {\nvec2 dSTdx = dFdx( vUv );\nvec2 dSTdy = dFdy( vUv );\nfloat Hll = bumpScale * texture2D( bumpMap, vUv ).x;\nfloat dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\nfloat dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\nreturn vec2( dBx, dBy );\n}\nvec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {\nvec3 vSigmaX = dFdx( surf_pos );\nvec3 vSigmaY = dFdy( surf_pos );\nvec3 vN = surf_norm;\nvec3 R1 = cross( vSigmaY, vN );\nvec3 R2 = cross( vN, vSigmaX );\nfloat fDet = dot( vSigmaX, R1 );\nvec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\nreturn normalize( abs( fDet ) * surf_norm - vGrad );\n}\n#endif',
  normalmap_pars_fragment: '#ifdef USE_NORMALMAP\nuniform sampler2D normalMap;\nuniform vec2 normalScale;\nvec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm ) {\nvec3 q0 = dFdx( eye_pos.xyz );\nvec3 q1 = dFdy( eye_pos.xyz );\nvec2 st0 = dFdx( vUv.st );\nvec2 st1 = dFdy( vUv.st );\nvec3 S = normalize(  q0 * st1.t - q1 * st0.t );\nvec3 T = normalize( -q0 * st1.s + q1 * st0.s );\nvec3 N = normalize( surf_norm );\nvec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\nmapN.xy = normalScale * mapN.xy;\nmat3 tsn = mat3( S, T, N );\nreturn normalize( tsn * mapN );\n}\n#endif',
  specularmap_pars_fragment: '#ifdef USE_SPECULARMAP\nuniform sampler2D specularMap;\n#endif',
  specularmap_fragment: 'float specularStrength;\n#ifdef USE_SPECULARMAP\nvec4 texelSpecular = texture2D( specularMap, vUv );\nspecularStrength = texelSpecular.r;\n#else\nspecularStrength = 1.0;\n#endif',
  lights_lambert_pars_vertex: 'uniform vec3 ambient;\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 ambientLightColor;\n#if MAX_DIR_LIGHTS > 0\nuniform vec3 directionalLightColor[ MAX_DIR_LIGHTS ];\nuniform vec3 directionalLightDirection[ MAX_DIR_LIGHTS ];\n#endif\n#if MAX_HEMI_LIGHTS > 0\nuniform vec3 hemisphereLightSkyColor[ MAX_HEMI_LIGHTS ];\nuniform vec3 hemisphereLightGroundColor[ MAX_HEMI_LIGHTS ];\nuniform vec3 hemisphereLightDirection[ MAX_HEMI_LIGHTS ];\n#endif\n#if MAX_POINT_LIGHTS > 0\nuniform vec3 pointLightColor[ MAX_POINT_LIGHTS ];\nuniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];\nuniform float pointLightDistance[ MAX_POINT_LIGHTS ];\n#endif\n#if MAX_SPOT_LIGHTS > 0\nuniform vec3 spotLightColor[ MAX_SPOT_LIGHTS ];\nuniform vec3 spotLightPosition[ MAX_SPOT_LIGHTS ];\nuniform vec3 spotLightDirection[ MAX_SPOT_LIGHTS ];\nuniform float spotLightDistance[ MAX_SPOT_LIGHTS ];\nuniform float spotLightAngleCos[ MAX_SPOT_LIGHTS ];\nuniform float spotLightExponent[ MAX_SPOT_LIGHTS ];\n#endif\n#ifdef WRAP_AROUND\nuniform vec3 wrapRGB;\n#endif',
  lights_lambert_vertex: 'vLightFront = vec3( 0.0 );\n#ifdef DOUBLE_SIDED\nvLightBack = vec3( 0.0 );\n#endif\ntransformedNormal = normalize( transformedNormal );\n#if MAX_DIR_LIGHTS > 0\nfor( int i = 0; i < MAX_DIR_LIGHTS; i ++ ) {\nvec4 lDirection = viewMatrix * vec4( directionalLightDirection[ i ], 0.0 );\nvec3 dirVector = normalize( lDirection.xyz );\nfloat dotProduct = dot( transformedNormal, dirVector );\nvec3 directionalLightWeighting = vec3( max( dotProduct, 0.0 ) );\n#ifdef DOUBLE_SIDED\nvec3 directionalLightWeightingBack = vec3( max( -dotProduct, 0.0 ) );\n#ifdef WRAP_AROUND\nvec3 directionalLightWeightingHalfBack = vec3( max( -0.5 * dotProduct + 0.5, 0.0 ) );\n#endif\n#endif\n#ifdef WRAP_AROUND\nvec3 directionalLightWeightingHalf = vec3( max( 0.5 * dotProduct + 0.5, 0.0 ) );\ndirectionalLightWeighting = mix( directionalLightWeighting, directionalLightWeightingHalf, wrapRGB );\n#ifdef DOUBLE_SIDED\ndirectionalLightWeightingBack = mix( directionalLightWeightingBack, directionalLightWeightingHalfBack, wrapRGB );\n#endif\n#endif\nvLightFront += directionalLightColor[ i ] * directionalLightWeighting;\n#ifdef DOUBLE_SIDED\nvLightBack += directionalLightColor[ i ] * directionalLightWeightingBack;\n#endif\n}\n#endif\n#if MAX_POINT_LIGHTS > 0\nfor( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {\nvec4 lPosition = viewMatrix * vec4( pointLightPosition[ i ], 1.0 );\nvec3 lVector = lPosition.xyz - mvPosition.xyz;\nfloat lDistance = 1.0;\nif ( pointLightDistance[ i ] > 0.0 )\nlDistance = 1.0 - min( ( length( lVector ) / pointLightDistance[ i ] ), 1.0 );\nlVector = normalize( lVector );\nfloat dotProduct = dot( transformedNormal, lVector );\nvec3 pointLightWeighting = vec3( max( dotProduct, 0.0 ) );\n#ifdef DOUBLE_SIDED\nvec3 pointLightWeightingBack = vec3( max( -dotProduct, 0.0 ) );\n#ifdef WRAP_AROUND\nvec3 pointLightWeightingHalfBack = vec3( max( -0.5 * dotProduct + 0.5, 0.0 ) );\n#endif\n#endif\n#ifdef WRAP_AROUND\nvec3 pointLightWeightingHalf = vec3( max( 0.5 * dotProduct + 0.5, 0.0 ) );\npointLightWeighting = mix( pointLightWeighting, pointLightWeightingHalf, wrapRGB );\n#ifdef DOUBLE_SIDED\npointLightWeightingBack = mix( pointLightWeightingBack, pointLightWeightingHalfBack, wrapRGB );\n#endif\n#endif\nvLightFront += pointLightColor[ i ] * pointLightWeighting * lDistance;\n#ifdef DOUBLE_SIDED\nvLightBack += pointLightColor[ i ] * pointLightWeightingBack * lDistance;\n#endif\n}\n#endif\n#if MAX_SPOT_LIGHTS > 0\nfor( int i = 0; i < MAX_SPOT_LIGHTS; i ++ ) {\nvec4 lPosition = viewMatrix * vec4( spotLightPosition[ i ], 1.0 );\nvec3 lVector = lPosition.xyz - mvPosition.xyz;\nfloat spotEffect = dot( spotLightDirection[ i ], normalize( spotLightPosition[ i ] - worldPosition.xyz ) );\nif ( spotEffect > spotLightAngleCos[ i ] ) {\nspotEffect = max( pow( spotEffect, spotLightExponent[ i ] ), 0.0 );\nfloat lDistance = 1.0;\nif ( spotLightDistance[ i ] > 0.0 )\nlDistance = 1.0 - min( ( length( lVector ) / spotLightDistance[ i ] ), 1.0 );\nlVector = normalize( lVector );\nfloat dotProduct = dot( transformedNormal, lVector );\nvec3 spotLightWeighting = vec3( max( dotProduct, 0.0 ) );\n#ifdef DOUBLE_SIDED\nvec3 spotLightWeightingBack = vec3( max( -dotProduct, 0.0 ) );\n#ifdef WRAP_AROUND\nvec3 spotLightWeightingHalfBack = vec3( max( -0.5 * dotProduct + 0.5, 0.0 ) );\n#endif\n#endif\n#ifdef WRAP_AROUND\nvec3 spotLightWeightingHalf = vec3( max( 0.5 * dotProduct + 0.5, 0.0 ) );\nspotLightWeighting = mix( spotLightWeighting, spotLightWeightingHalf, wrapRGB );\n#ifdef DOUBLE_SIDED\nspotLightWeightingBack = mix( spotLightWeightingBack, spotLightWeightingHalfBack, wrapRGB );\n#endif\n#endif\nvLightFront += spotLightColor[ i ] * spotLightWeighting * lDistance * spotEffect;\n#ifdef DOUBLE_SIDED\nvLightBack += spotLightColor[ i ] * spotLightWeightingBack * lDistance * spotEffect;\n#endif\n}\n}\n#endif\n#if MAX_HEMI_LIGHTS > 0\nfor( int i = 0; i < MAX_HEMI_LIGHTS; i ++ ) {\nvec4 lDirection = viewMatrix * vec4( hemisphereLightDirection[ i ], 0.0 );\nvec3 lVector = normalize( lDirection.xyz );\nfloat dotProduct = dot( transformedNormal, lVector );\nfloat hemiDiffuseWeight = 0.5 * dotProduct + 0.5;\nfloat hemiDiffuseWeightBack = -0.5 * dotProduct + 0.5;\nvLightFront += mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeight );\n#ifdef DOUBLE_SIDED\nvLightBack += mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeightBack );\n#endif\n}\n#endif\nvLightFront = vLightFront * diffuse + ambient * ambientLightColor + emissive;\n#ifdef DOUBLE_SIDED\nvLightBack = vLightBack * diffuse + ambient * ambientLightColor + emissive;\n#endif',
  lights_phong_pars_vertex: '#ifndef PHONG_PER_PIXEL\n#if MAX_POINT_LIGHTS > 0\nuniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];\nuniform float pointLightDistance[ MAX_POINT_LIGHTS ];\nvarying vec4 vPointLight[ MAX_POINT_LIGHTS ];\n#endif\n#if MAX_SPOT_LIGHTS > 0\nuniform vec3 spotLightPosition[ MAX_SPOT_LIGHTS ];\nuniform float spotLightDistance[ MAX_SPOT_LIGHTS ];\nvarying vec4 vSpotLight[ MAX_SPOT_LIGHTS ];\n#endif\n#endif\n#if MAX_SPOT_LIGHTS > 0 || defined( USE_BUMPMAP )\nvarying vec3 vWorldPosition;\n#endif',
  lights_phong_vertex: '#ifndef PHONG_PER_PIXEL\n#if MAX_POINT_LIGHTS > 0\nfor( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {\nvec4 lPosition = viewMatrix * vec4( pointLightPosition[ i ], 1.0 );\nvec3 lVector = lPosition.xyz - mvPosition.xyz;\nfloat lDistance = 1.0;\nif ( pointLightDistance[ i ] > 0.0 )\nlDistance = 1.0 - min( ( length( lVector ) / pointLightDistance[ i ] ), 1.0 );\nvPointLight[ i ] = vec4( lVector, lDistance );\n}\n#endif\n#if MAX_SPOT_LIGHTS > 0\nfor( int i = 0; i < MAX_SPOT_LIGHTS; i ++ ) {\nvec4 lPosition = viewMatrix * vec4( spotLightPosition[ i ], 1.0 );\nvec3 lVector = lPosition.xyz - mvPosition.xyz;\nfloat lDistance = 1.0;\nif ( spotLightDistance[ i ] > 0.0 )\nlDistance = 1.0 - min( ( length( lVector ) / spotLightDistance[ i ] ), 1.0 );\nvSpotLight[ i ] = vec4( lVector, lDistance );\n}\n#endif\n#endif\n#if MAX_SPOT_LIGHTS > 0 || defined( USE_BUMPMAP )\nvWorldPosition = worldPosition.xyz;\n#endif',
  lights_phong_pars_fragment: 'uniform vec3 ambientLightColor;\n#if MAX_DIR_LIGHTS > 0\nuniform vec3 directionalLightColor[ MAX_DIR_LIGHTS ];\nuniform vec3 directionalLightDirection[ MAX_DIR_LIGHTS ];\n#endif\n#if MAX_HEMI_LIGHTS > 0\nuniform vec3 hemisphereLightSkyColor[ MAX_HEMI_LIGHTS ];\nuniform vec3 hemisphereLightGroundColor[ MAX_HEMI_LIGHTS ];\nuniform vec3 hemisphereLightDirection[ MAX_HEMI_LIGHTS ];\n#endif\n#if MAX_POINT_LIGHTS > 0\nuniform vec3 pointLightColor[ MAX_POINT_LIGHTS ];\n#ifdef PHONG_PER_PIXEL\nuniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];\nuniform float pointLightDistance[ MAX_POINT_LIGHTS ];\n#else\nvarying vec4 vPointLight[ MAX_POINT_LIGHTS ];\n#endif\n#endif\n#if MAX_SPOT_LIGHTS > 0\nuniform vec3 spotLightColor[ MAX_SPOT_LIGHTS ];\nuniform vec3 spotLightPosition[ MAX_SPOT_LIGHTS ];\nuniform vec3 spotLightDirection[ MAX_SPOT_LIGHTS ];\nuniform float spotLightAngleCos[ MAX_SPOT_LIGHTS ];\nuniform float spotLightExponent[ MAX_SPOT_LIGHTS ];\n#ifdef PHONG_PER_PIXEL\nuniform float spotLightDistance[ MAX_SPOT_LIGHTS ];\n#else\nvarying vec4 vSpotLight[ MAX_SPOT_LIGHTS ];\n#endif\n#endif\n#if MAX_SPOT_LIGHTS > 0 || defined( USE_BUMPMAP )\nvarying vec3 vWorldPosition;\n#endif\n#ifdef WRAP_AROUND\nuniform vec3 wrapRGB;\n#endif\nvarying vec3 vViewPosition;\nvarying vec3 vNormal;',
  lights_phong_fragment: 'vec3 normal = normalize( vNormal );\nvec3 viewPosition = normalize( vViewPosition );\n#ifdef DOUBLE_SIDED\nnormal = normal * ( -1.0 + 2.0 * float( gl_FrontFacing ) );\n#endif\n#ifdef USE_NORMALMAP\nnormal = perturbNormal2Arb( -viewPosition, normal );\n#elif defined( USE_BUMPMAP )\nnormal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );\n#endif\n#if MAX_POINT_LIGHTS > 0\nvec3 pointDiffuse  = vec3( 0.0 );\nvec3 pointSpecular = vec3( 0.0 );\nfor ( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {\n#ifdef PHONG_PER_PIXEL\nvec4 lPosition = viewMatrix * vec4( pointLightPosition[ i ], 1.0 );\nvec3 lVector = lPosition.xyz + vViewPosition.xyz;\nfloat lDistance = 1.0;\nif ( pointLightDistance[ i ] > 0.0 )\nlDistance = 1.0 - min( ( length( lVector ) / pointLightDistance[ i ] ), 1.0 );\nlVector = normalize( lVector );\n#else\nvec3 lVector = normalize( vPointLight[ i ].xyz );\nfloat lDistance = vPointLight[ i ].w;\n#endif\nfloat dotProduct = dot( normal, lVector );\n#ifdef WRAP_AROUND\nfloat pointDiffuseWeightFull = max( dotProduct, 0.0 );\nfloat pointDiffuseWeightHalf = max( 0.5 * dotProduct + 0.5, 0.0 );\nvec3 pointDiffuseWeight = mix( vec3 ( pointDiffuseWeightFull ), vec3( pointDiffuseWeightHalf ), wrapRGB );\n#else\nfloat pointDiffuseWeight = max( dotProduct, 0.0 );\n#endif\npointDiffuse  += diffuse * pointLightColor[ i ] * pointDiffuseWeight * lDistance;\nvec3 pointHalfVector = normalize( lVector + viewPosition );\nfloat pointDotNormalHalf = max( dot( normal, pointHalfVector ), 0.0 );\nfloat pointSpecularWeight = specularStrength * max( pow( pointDotNormalHalf, shininess ), 0.0 );\n#ifdef PHYSICALLY_BASED_SHADING\nfloat specularNormalization = ( shininess + 2.0001 ) / 8.0;\nvec3 schlick = specular + vec3( 1.0 - specular ) * pow( 1.0 - dot( lVector, pointHalfVector ), 5.0 );\npointSpecular += schlick * pointLightColor[ i ] * pointSpecularWeight * pointDiffuseWeight * lDistance * specularNormalization;\n#else\npointSpecular += specular * pointLightColor[ i ] * pointSpecularWeight * pointDiffuseWeight * lDistance;\n#endif\n}\n#endif\n#if MAX_SPOT_LIGHTS > 0\nvec3 spotDiffuse  = vec3( 0.0 );\nvec3 spotSpecular = vec3( 0.0 );\nfor ( int i = 0; i < MAX_SPOT_LIGHTS; i ++ ) {\n#ifdef PHONG_PER_PIXEL\nvec4 lPosition = viewMatrix * vec4( spotLightPosition[ i ], 1.0 );\nvec3 lVector = lPosition.xyz + vViewPosition.xyz;\nfloat lDistance = 1.0;\nif ( spotLightDistance[ i ] > 0.0 )\nlDistance = 1.0 - min( ( length( lVector ) / spotLightDistance[ i ] ), 1.0 );\nlVector = normalize( lVector );\n#else\nvec3 lVector = normalize( vSpotLight[ i ].xyz );\nfloat lDistance = vSpotLight[ i ].w;\n#endif\nfloat spotEffect = dot( spotLightDirection[ i ], normalize( spotLightPosition[ i ] - vWorldPosition ) );\nif ( spotEffect > spotLightAngleCos[ i ] ) {\nspotEffect = max( pow( spotEffect, spotLightExponent[ i ] ), 0.0 );\nfloat dotProduct = dot( normal, lVector );\n#ifdef WRAP_AROUND\nfloat spotDiffuseWeightFull = max( dotProduct, 0.0 );\nfloat spotDiffuseWeightHalf = max( 0.5 * dotProduct + 0.5, 0.0 );\nvec3 spotDiffuseWeight = mix( vec3 ( spotDiffuseWeightFull ), vec3( spotDiffuseWeightHalf ), wrapRGB );\n#else\nfloat spotDiffuseWeight = max( dotProduct, 0.0 );\n#endif\nspotDiffuse += diffuse * spotLightColor[ i ] * spotDiffuseWeight * lDistance * spotEffect;\nvec3 spotHalfVector = normalize( lVector + viewPosition );\nfloat spotDotNormalHalf = max( dot( normal, spotHalfVector ), 0.0 );\nfloat spotSpecularWeight = specularStrength * max( pow( spotDotNormalHalf, shininess ), 0.0 );\n#ifdef PHYSICALLY_BASED_SHADING\nfloat specularNormalization = ( shininess + 2.0001 ) / 8.0;\nvec3 schlick = specular + vec3( 1.0 - specular ) * pow( 1.0 - dot( lVector, spotHalfVector ), 5.0 );\nspotSpecular += schlick * spotLightColor[ i ] * spotSpecularWeight * spotDiffuseWeight * lDistance * specularNormalization * spotEffect;\n#else\nspotSpecular += specular * spotLightColor[ i ] * spotSpecularWeight * spotDiffuseWeight * lDistance * spotEffect;\n#endif\n}\n}\n#endif\n#if MAX_DIR_LIGHTS > 0\nvec3 dirDiffuse  = vec3( 0.0 );\nvec3 dirSpecular = vec3( 0.0 );\nfor( int i = 0; i < MAX_DIR_LIGHTS; i ++ ) {\nvec4 lDirection = viewMatrix * vec4( directionalLightDirection[ i ], 0.0 );\nvec3 dirVector = normalize( lDirection.xyz );\nfloat dotProduct = dot( normal, dirVector );\n#ifdef WRAP_AROUND\nfloat dirDiffuseWeightFull = max( dotProduct, 0.0 );\nfloat dirDiffuseWeightHalf = max( 0.5 * dotProduct + 0.5, 0.0 );\nvec3 dirDiffuseWeight = mix( vec3( dirDiffuseWeightFull ), vec3( dirDiffuseWeightHalf ), wrapRGB );\n#else\nfloat dirDiffuseWeight = max( dotProduct, 0.0 );\n#endif\ndirDiffuse  += diffuse * directionalLightColor[ i ] * dirDiffuseWeight;\nvec3 dirHalfVector = normalize( dirVector + viewPosition );\nfloat dirDotNormalHalf = max( dot( normal, dirHalfVector ), 0.0 );\nfloat dirSpecularWeight = specularStrength * max( pow( dirDotNormalHalf, shininess ), 0.0 );\n#ifdef PHYSICALLY_BASED_SHADING\nfloat specularNormalization = ( shininess + 2.0001 ) / 8.0;\nvec3 schlick = specular + vec3( 1.0 - specular ) * pow( 1.0 - dot( dirVector, dirHalfVector ), 5.0 );\ndirSpecular += schlick * directionalLightColor[ i ] * dirSpecularWeight * dirDiffuseWeight * specularNormalization;\n#else\ndirSpecular += specular * directionalLightColor[ i ] * dirSpecularWeight * dirDiffuseWeight;\n#endif\n}\n#endif\n#if MAX_HEMI_LIGHTS > 0\nvec3 hemiDiffuse  = vec3( 0.0 );\nvec3 hemiSpecular = vec3( 0.0 );\nfor( int i = 0; i < MAX_HEMI_LIGHTS; i ++ ) {\nvec4 lDirection = viewMatrix * vec4( hemisphereLightDirection[ i ], 0.0 );\nvec3 lVector = normalize( lDirection.xyz );\nfloat dotProduct = dot( normal, lVector );\nfloat hemiDiffuseWeight = 0.5 * dotProduct + 0.5;\nvec3 hemiColor = mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeight );\nhemiDiffuse += diffuse * hemiColor;\nvec3 hemiHalfVectorSky = normalize( lVector + viewPosition );\nfloat hemiDotNormalHalfSky = 0.5 * dot( normal, hemiHalfVectorSky ) + 0.5;\nfloat hemiSpecularWeightSky = specularStrength * max( pow( hemiDotNormalHalfSky, shininess ), 0.0 );\nvec3 lVectorGround = -lVector;\nvec3 hemiHalfVectorGround = normalize( lVectorGround + viewPosition );\nfloat hemiDotNormalHalfGround = 0.5 * dot( normal, hemiHalfVectorGround ) + 0.5;\nfloat hemiSpecularWeightGround = specularStrength * max( pow( hemiDotNormalHalfGround, shininess ), 0.0 );\n#ifdef PHYSICALLY_BASED_SHADING\nfloat dotProductGround = dot( normal, lVectorGround );\nfloat specularNormalization = ( shininess + 2.0001 ) / 8.0;\nvec3 schlickSky = specular + vec3( 1.0 - specular ) * pow( 1.0 - dot( lVector, hemiHalfVectorSky ), 5.0 );\nvec3 schlickGround = specular + vec3( 1.0 - specular ) * pow( 1.0 - dot( lVectorGround, hemiHalfVectorGround ), 5.0 );\nhemiSpecular += hemiColor * specularNormalization * ( schlickSky * hemiSpecularWeightSky * max( dotProduct, 0.0 ) + schlickGround * hemiSpecularWeightGround * max( dotProductGround, 0.0 ) );\n#else\nhemiSpecular += specular * hemiColor * ( hemiSpecularWeightSky + hemiSpecularWeightGround ) * hemiDiffuseWeight;\n#endif\n}\n#endif\nvec3 totalDiffuse = vec3( 0.0 );\nvec3 totalSpecular = vec3( 0.0 );\n#if MAX_DIR_LIGHTS > 0\ntotalDiffuse += dirDiffuse;\ntotalSpecular += dirSpecular;\n#endif\n#if MAX_HEMI_LIGHTS > 0\ntotalDiffuse += hemiDiffuse;\ntotalSpecular += hemiSpecular;\n#endif\n#if MAX_POINT_LIGHTS > 0\ntotalDiffuse += pointDiffuse;\ntotalSpecular += pointSpecular;\n#endif\n#if MAX_SPOT_LIGHTS > 0\ntotalDiffuse += spotDiffuse;\ntotalSpecular += spotSpecular;\n#endif\n#ifdef METAL\ngl_FragColor.xyz = gl_FragColor.xyz * ( emissive + totalDiffuse + ambientLightColor * ambient + totalSpecular );\n#else\ngl_FragColor.xyz = gl_FragColor.xyz * ( emissive + totalDiffuse + ambientLightColor * ambient ) + totalSpecular;\n#endif',
  color_pars_fragment: '#ifdef USE_COLOR\nvarying vec3 vColor;\n#endif',
  color_fragment: '#ifdef USE_COLOR\ngl_FragColor = gl_FragColor * vec4( vColor, opacity );\n#endif',
  color_pars_vertex: '#ifdef USE_COLOR\nvarying vec3 vColor;\n#endif',
  color_vertex: '#ifdef USE_COLOR\n#ifdef GAMMA_INPUT\nvColor = color * color;\n#else\nvColor = color;\n#endif\n#endif',
  skinning_pars_vertex: '#ifdef USE_SKINNING\n#ifdef BONE_TEXTURE\nuniform sampler2D boneTexture;\nmat4 getBoneMatrix( const in float i ) {\nfloat j = i * 4.0;\nfloat x = mod( j, N_BONE_PIXEL_X );\nfloat y = floor( j / N_BONE_PIXEL_X );\nconst float dx = 1.0 / N_BONE_PIXEL_X;\nconst float dy = 1.0 / N_BONE_PIXEL_Y;\ny = dy * ( y + 0.5 );\nvec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\nvec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\nvec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\nvec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\nmat4 bone = mat4( v1, v2, v3, v4 );\nreturn bone;\n}\n#else\nuniform mat4 boneGlobalMatrices[ MAX_BONES ];\nmat4 getBoneMatrix( const in float i ) {\nmat4 bone = boneGlobalMatrices[ int(i) ];\nreturn bone;\n}\n#endif\n#endif',
  skinbase_vertex: '#ifdef USE_SKINNING\nmat4 boneMatX = getBoneMatrix( skinIndex.x );\nmat4 boneMatY = getBoneMatrix( skinIndex.y );\n#endif',
  skinning_vertex: '#ifdef USE_SKINNING\n#ifdef USE_MORPHTARGETS\nvec4 skinVertex = vec4( morphed, 1.0 );\n#else\nvec4 skinVertex = vec4( position, 1.0 );\n#endif\nvec4 skinned  = boneMatX * skinVertex * skinWeight.x;\nskinned \t  += boneMatY * skinVertex * skinWeight.y;\n#endif',
  morphtarget_pars_vertex: '#ifdef USE_MORPHTARGETS\n#ifndef USE_MORPHNORMALS\nuniform float morphTargetInfluences[ 8 ];\n#else\nuniform float morphTargetInfluences[ 4 ];\n#endif\n#endif',
  morphtarget_vertex: '#ifdef USE_MORPHTARGETS\nvec3 morphed = vec3( 0.0 );\nmorphed += ( morphTarget0 - position ) * morphTargetInfluences[ 0 ];\nmorphed += ( morphTarget1 - position ) * morphTargetInfluences[ 1 ];\nmorphed += ( morphTarget2 - position ) * morphTargetInfluences[ 2 ];\nmorphed += ( morphTarget3 - position ) * morphTargetInfluences[ 3 ];\n#ifndef USE_MORPHNORMALS\nmorphed += ( morphTarget4 - position ) * morphTargetInfluences[ 4 ];\nmorphed += ( morphTarget5 - position ) * morphTargetInfluences[ 5 ];\nmorphed += ( morphTarget6 - position ) * morphTargetInfluences[ 6 ];\nmorphed += ( morphTarget7 - position ) * morphTargetInfluences[ 7 ];\n#endif\nmorphed += position;\n#endif',
  default_vertex: 'vec4 mvPosition;\n#ifdef USE_SKINNING\nmvPosition = modelViewMatrix * skinned;\n#endif\n#if !defined( USE_SKINNING ) && defined( USE_MORPHTARGETS )\nmvPosition = modelViewMatrix * vec4( morphed, 1.0 );\n#endif\n#if !defined( USE_SKINNING ) && ! defined( USE_MORPHTARGETS )\nmvPosition = modelViewMatrix * vec4( position, 1.0 );\n#endif\ngl_Position = projectionMatrix * mvPosition;',
  morphnormal_vertex: '#ifdef USE_MORPHNORMALS\nvec3 morphedNormal = vec3( 0.0 );\nmorphedNormal +=  ( morphNormal0 - normal ) * morphTargetInfluences[ 0 ];\nmorphedNormal +=  ( morphNormal1 - normal ) * morphTargetInfluences[ 1 ];\nmorphedNormal +=  ( morphNormal2 - normal ) * morphTargetInfluences[ 2 ];\nmorphedNormal +=  ( morphNormal3 - normal ) * morphTargetInfluences[ 3 ];\nmorphedNormal += normal;\n#endif',
  skinnormal_vertex: '#ifdef USE_SKINNING\nmat4 skinMatrix = skinWeight.x * boneMatX;\nskinMatrix \t+= skinWeight.y * boneMatY;\n#ifdef USE_MORPHNORMALS\nvec4 skinnedNormal = skinMatrix * vec4( morphedNormal, 0.0 );\n#else\nvec4 skinnedNormal = skinMatrix * vec4( normal, 0.0 );\n#endif\n#endif',
  defaultnormal_vertex: 'vec3 objectNormal;\n#ifdef USE_SKINNING\nobjectNormal = skinnedNormal.xyz;\n#endif\n#if !defined( USE_SKINNING ) && defined( USE_MORPHNORMALS )\nobjectNormal = morphedNormal;\n#endif\n#if !defined( USE_SKINNING ) && ! defined( USE_MORPHNORMALS )\nobjectNormal = normal;\n#endif\n#ifdef FLIP_SIDED\nobjectNormal = -objectNormal;\n#endif\nvec3 transformedNormal = normalMatrix * objectNormal;',
  shadowmap_pars_fragment: '#ifdef USE_SHADOWMAP\nuniform sampler2D shadowMap[ MAX_SHADOWS ];\nuniform vec2 shadowMapSize[ MAX_SHADOWS ];\nuniform float shadowDarkness[ MAX_SHADOWS ];\nuniform float shadowBias[ MAX_SHADOWS ];\nvarying vec4 vShadowCoord[ MAX_SHADOWS ];\nfloat unpackDepth( const in vec4 rgba_depth ) {\nconst vec4 bit_shift = vec4( 1.0 / ( 256.0 * 256.0 * 256.0 ), 1.0 / ( 256.0 * 256.0 ), 1.0 / 256.0, 1.0 );\nfloat depth = dot( rgba_depth, bit_shift );\nreturn depth;\n}\n#endif',
  shadowmap_fragment: '#ifdef USE_SHADOWMAP\n#ifdef SHADOWMAP_DEBUG\nvec3 frustumColors[3];\nfrustumColors[0] = vec3( 1.0, 0.5, 0.0 );\nfrustumColors[1] = vec3( 0.0, 1.0, 0.8 );\nfrustumColors[2] = vec3( 0.0, 0.5, 1.0 );\n#endif\n#ifdef SHADOWMAP_CASCADE\nint inFrustumCount = 0;\n#endif\nfloat fDepth;\nvec3 shadowColor = vec3( 1.0 );\nfor( int i = 0; i < MAX_SHADOWS; i ++ ) {\nvec3 shadowCoord = vShadowCoord[ i ].xyz / vShadowCoord[ i ].w;\nbvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\nbool inFrustum = all( inFrustumVec );\n#ifdef SHADOWMAP_CASCADE\ninFrustumCount += int( inFrustum );\nbvec3 frustumTestVec = bvec3( inFrustum, inFrustumCount == 1, shadowCoord.z <= 1.0 );\n#else\nbvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n#endif\nbool frustumTest = all( frustumTestVec );\nif ( frustumTest ) {\nshadowCoord.z += shadowBias[ i ];\n#if defined( SHADOWMAP_TYPE_PCF )\nfloat shadow = 0.0;\nconst float shadowDelta = 1.0 / 9.0;\nfloat xPixelOffset = 1.0 / shadowMapSize[ i ].x;\nfloat yPixelOffset = 1.0 / shadowMapSize[ i ].y;\nfloat dx0 = -1.25 * xPixelOffset;\nfloat dy0 = -1.25 * yPixelOffset;\nfloat dx1 = 1.25 * xPixelOffset;\nfloat dy1 = 1.25 * yPixelOffset;\nfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, dy0 ) ) );\nif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\nfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy0 ) ) );\nif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\nfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy0 ) ) );\nif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\nfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, 0.0 ) ) );\nif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\nfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy ) );\nif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\nfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, 0.0 ) ) );\nif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\nfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, dy1 ) ) );\nif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\nfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy1 ) ) );\nif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\nfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy1 ) ) );\nif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\nshadowColor = shadowColor * vec3( ( 1.0 - shadowDarkness[ i ] * shadow ) );\n#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\nfloat shadow = 0.0;\nfloat xPixelOffset = 1.0 / shadowMapSize[ i ].x;\nfloat yPixelOffset = 1.0 / shadowMapSize[ i ].y;\nfloat dx0 = -1.0 * xPixelOffset;\nfloat dy0 = -1.0 * yPixelOffset;\nfloat dx1 = 1.0 * xPixelOffset;\nfloat dy1 = 1.0 * yPixelOffset;\nmat3 shadowKernel;\nmat3 depthKernel;\ndepthKernel[0][0] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, dy0 ) ) );\nif ( depthKernel[0][0] < shadowCoord.z ) shadowKernel[0][0] = 0.25;\nelse shadowKernel[0][0] = 0.0;\ndepthKernel[0][1] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, 0.0 ) ) );\nif ( depthKernel[0][1] < shadowCoord.z ) shadowKernel[0][1] = 0.25;\nelse shadowKernel[0][1] = 0.0;\ndepthKernel[0][2] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, dy1 ) ) );\nif ( depthKernel[0][2] < shadowCoord.z ) shadowKernel[0][2] = 0.25;\nelse shadowKernel[0][2] = 0.0;\ndepthKernel[1][0] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy0 ) ) );\nif ( depthKernel[1][0] < shadowCoord.z ) shadowKernel[1][0] = 0.25;\nelse shadowKernel[1][0] = 0.0;\ndepthKernel[1][1] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy ) );\nif ( depthKernel[1][1] < shadowCoord.z ) shadowKernel[1][1] = 0.25;\nelse shadowKernel[1][1] = 0.0;\ndepthKernel[1][2] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy1 ) ) );\nif ( depthKernel[1][2] < shadowCoord.z ) shadowKernel[1][2] = 0.25;\nelse shadowKernel[1][2] = 0.0;\ndepthKernel[2][0] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy0 ) ) );\nif ( depthKernel[2][0] < shadowCoord.z ) shadowKernel[2][0] = 0.25;\nelse shadowKernel[2][0] = 0.0;\ndepthKernel[2][1] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, 0.0 ) ) );\nif ( depthKernel[2][1] < shadowCoord.z ) shadowKernel[2][1] = 0.25;\nelse shadowKernel[2][1] = 0.0;\ndepthKernel[2][2] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy1 ) ) );\nif ( depthKernel[2][2] < shadowCoord.z ) shadowKernel[2][2] = 0.25;\nelse shadowKernel[2][2] = 0.0;\nvec2 fractionalCoord = 1.0 - fract( shadowCoord.xy * shadowMapSize[i].xy );\nshadowKernel[0] = mix( shadowKernel[1], shadowKernel[0], fractionalCoord.x );\nshadowKernel[1] = mix( shadowKernel[2], shadowKernel[1], fractionalCoord.x );\nvec4 shadowValues;\nshadowValues.x = mix( shadowKernel[0][1], shadowKernel[0][0], fractionalCoord.y );\nshadowValues.y = mix( shadowKernel[0][2], shadowKernel[0][1], fractionalCoord.y );\nshadowValues.z = mix( shadowKernel[1][1], shadowKernel[1][0], fractionalCoord.y );\nshadowValues.w = mix( shadowKernel[1][2], shadowKernel[1][1], fractionalCoord.y );\nshadow = dot( shadowValues, vec4( 1.0 ) );\nshadowColor = shadowColor * vec3( ( 1.0 - shadowDarkness[ i ] * shadow ) );\n#else\nvec4 rgbaDepth = texture2D( shadowMap[ i ], shadowCoord.xy );\nfloat fDepth = unpackDepth( rgbaDepth );\nif ( fDepth < shadowCoord.z )\nshadowColor = shadowColor * vec3( 1.0 - shadowDarkness[ i ] );\n#endif\n}\n#ifdef SHADOWMAP_DEBUG\n#ifdef SHADOWMAP_CASCADE\nif ( inFrustum && inFrustumCount == 1 ) gl_FragColor.xyz *= frustumColors[ i ];\n#else\nif ( inFrustum ) gl_FragColor.xyz *= frustumColors[ i ];\n#endif\n#endif\n}\n#ifdef GAMMA_OUTPUT\nshadowColor *= shadowColor;\n#endif\ngl_FragColor.xyz = gl_FragColor.xyz * shadowColor;\n#endif',
  shadowmap_pars_vertex: '#ifdef USE_SHADOWMAP\nvarying vec4 vShadowCoord[ MAX_SHADOWS ];\nuniform mat4 shadowMatrix[ MAX_SHADOWS ];\n#endif',
  shadowmap_vertex: '#ifdef USE_SHADOWMAP\nfor( int i = 0; i < MAX_SHADOWS; i ++ ) {\nvShadowCoord[ i ] = shadowMatrix[ i ] * worldPosition;\n}\n#endif',
  alphatest_fragment: '#ifdef ALPHATEST\nif ( gl_FragColor.a < ALPHATEST ) discard;\n#endif',
  linear_to_gamma_fragment: '#ifdef GAMMA_OUTPUT\ngl_FragColor.xyz = sqrt( gl_FragColor.xyz );\n#endif'
};
THREE.UniformsUtils = {
  merge: function (a) {
    var b,
    c,
    d,
    e = {
    };
    for (b = 0; b < a.length; b++) for (c in d = this.clone(a[b]), d) e[c] = d[c];
    return e
  },
  clone: function (a) {
    var b,
    c,
    d,
    e = {
    };
    for (b in a) for (c in e[b] = {
    }, a[b]) d = a[b][c],
    e[b][c] = d instanceof THREE.Color || d instanceof THREE.Vector2 || d instanceof THREE.Vector3 || d instanceof THREE.Vector4 || d instanceof THREE.Matrix4 || d instanceof THREE.Texture ? d.clone() : d instanceof Array ? d.slice() : d;
    return e
  }
};
THREE.UniformsLib = {
  common: {
    diffuse: {
      type: 'c',
      value: new THREE.Color(15658734)
    },
    opacity: {
      type: 'f',
      value: 1
    },
    map: {
      type: 't',
      value: null
    },
    offsetRepeat: {
      type: 'v4',
      value: new THREE.Vector4(0, 0, 1, 1)
    },
    lightMap: {
      type: 't',
      value: null
    },
    specularMap: {
      type: 't',
      value: null
    },
    envMap: {
      type: 't',
      value: null
    },
    flipEnvMap: {
      type: 'f',
      value: - 1
    },
    useRefract: {
      type: 'i',
      value: 0
    },
    reflectivity: {
      type: 'f',
      value: 1
    },
    refractionRatio: {
      type: 'f',
      value: 0.98
    },
    combine: {
      type: 'i',
      value: 0
    },
    morphTargetInfluences: {
      type: 'f',
      value: 0
    }
  },
  bump: {
    bumpMap: {
      type: 't',
      value: null
    },
    bumpScale: {
      type: 'f',
      value: 1
    }
  },
  normalmap: {
    normalMap: {
      type: 't',
      value: null
    },
    normalScale: {
      type: 'v2',
      value: new THREE.Vector2(1, 1)
    }
  },
  fog: {
    fogDensity: {
      type: 'f',
      value: 0.00025
    },
    fogNear: {
      type: 'f',
      value: 1
    },
    fogFar: {
      type: 'f',
      value: 2000
    },
    fogColor: {
      type: 'c',
      value: new THREE.Color(16777215)
    }
  },
  lights: {
    ambientLightColor: {
      type: 'fv',
      value: [
      ]
    },
    directionalLightDirection: {
      type: 'fv',
      value: [
      ]
    },
    directionalLightColor: {
      type: 'fv',
      value: [
      ]
    },
    hemisphereLightDirection: {
      type: 'fv',
      value: [
      ]
    },
    hemisphereLightSkyColor: {
      type: 'fv',
      value: [
      ]
    },
    hemisphereLightGroundColor: {
      type: 'fv',
      value: [
      ]
    },
    pointLightColor: {
      type: 'fv',
      value: [
      ]
    },
    pointLightPosition: {
      type: 'fv',
      value: [
      ]
    },
    pointLightDistance: {
      type: 'fv1',
      value: [
      ]
    },
    spotLightColor: {
      type: 'fv',
      value: [
      ]
    },
    spotLightPosition: {
      type: 'fv',
      value: [
      ]
    },
    spotLightDirection: {
      type: 'fv',
      value: [
      ]
    },
    spotLightDistance: {
      type: 'fv1',
      value: [
      ]
    },
    spotLightAngleCos: {
      type: 'fv1',
      value: [
      ]
    },
    spotLightExponent: {
      type: 'fv1',
      value: [
      ]
    }
  },
  particle: {
    psColor: {
      type: 'c',
      value: new THREE.Color(15658734)
    },
    opacity: {
      type: 'f',
      value: 1
    },
    size: {
      type: 'f',
      value: 1
    },
    scale: {
      type: 'f',
      value: 1
    },
    map: {
      type: 't',
      value: null
    },
    fogDensity: {
      type: 'f',
      value: 0.00025
    },
    fogNear: {
      type: 'f',
      value: 1
    },
    fogFar: {
      type: 'f',
      value: 2000
    },
    fogColor: {
      type: 'c',
      value: new THREE.Color(16777215)
    }
  },
  shadowmap: {
    shadowMap: {
      type: 'tv',
      value: [
      ]
    },
    shadowMapSize: {
      type: 'v2v',
      value: [
      ]
    },
    shadowBias: {
      type: 'fv1',
      value: [
      ]
    },
    shadowDarkness: {
      type: 'fv1',
      value: [
      ]
    },
    shadowMatrix: {
      type: 'm4v',
      value: [
      ]
    }
  }
};
THREE.ShaderLib = {
  depth: {
    uniforms: {
      mNear: {
        type: 'f',
        value: 1
      },
      mFar: {
        type: 'f',
        value: 2000
      },
      opacity: {
        type: 'f',
        value: 1
      }
    },
    vertexShader: 'void main() {\ngl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}',
    fragmentShader: 'uniform float mNear;\nuniform float mFar;\nuniform float opacity;\nvoid main() {\nfloat depth = gl_FragCoord.z / gl_FragCoord.w;\nfloat color = 1.0 - smoothstep( mNear, mFar, depth );\ngl_FragColor = vec4( vec3( color ), opacity );\n}'
  },
  normal: {
    uniforms: {
      opacity: {
        type: 'f',
        value: 1
      }
    },
    vertexShader: 'varying vec3 vNormal;\nvoid main() {\nvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\nvNormal = normalize( normalMatrix * normal );\ngl_Position = projectionMatrix * mvPosition;\n}',
    fragmentShader: 'uniform float opacity;\nvarying vec3 vNormal;\nvoid main() {\ngl_FragColor = vec4( 0.5 * normalize( vNormal ) + 0.5, opacity );\n}'
  },
  basic: {
    uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.common,
    THREE.UniformsLib.fog,
    THREE.UniformsLib.shadowmap]),
    vertexShader: [
      THREE.ShaderChunk.map_pars_vertex,
      THREE.ShaderChunk.lightmap_pars_vertex,
      THREE.ShaderChunk.envmap_pars_vertex,
      THREE.ShaderChunk.color_pars_vertex,
      THREE.ShaderChunk.morphtarget_pars_vertex,
      THREE.ShaderChunk.skinning_pars_vertex,
      THREE.ShaderChunk.shadowmap_pars_vertex,
      'void main() {',
      THREE.ShaderChunk.map_vertex,
      THREE.ShaderChunk.lightmap_vertex,
      THREE.ShaderChunk.color_vertex,
      THREE.ShaderChunk.skinbase_vertex,
      '#ifdef USE_ENVMAP',
      THREE.ShaderChunk.morphnormal_vertex,
      THREE.ShaderChunk.skinnormal_vertex,
      THREE.ShaderChunk.defaultnormal_vertex,
      '#endif',
      THREE.ShaderChunk.morphtarget_vertex,
      THREE.ShaderChunk.skinning_vertex,
      THREE.ShaderChunk.default_vertex,
      THREE.ShaderChunk.worldpos_vertex,
      THREE.ShaderChunk.envmap_vertex,
      THREE.ShaderChunk.shadowmap_vertex,
      '}'
    ].join('\n'),
    fragmentShader: [
      'uniform vec3 diffuse;\nuniform float opacity;',
      THREE.ShaderChunk.color_pars_fragment,
      THREE.ShaderChunk.map_pars_fragment,
      THREE.ShaderChunk.lightmap_pars_fragment,
      THREE.ShaderChunk.envmap_pars_fragment,
      THREE.ShaderChunk.fog_pars_fragment,
      THREE.ShaderChunk.shadowmap_pars_fragment,
      THREE.ShaderChunk.specularmap_pars_fragment,
      'void main() {\ngl_FragColor = vec4( diffuse, opacity );',
      THREE.ShaderChunk.map_fragment,
      THREE.ShaderChunk.alphatest_fragment,
      THREE.ShaderChunk.specularmap_fragment,
      THREE.ShaderChunk.lightmap_fragment,
      THREE.ShaderChunk.color_fragment,
      THREE.ShaderChunk.envmap_fragment,
      THREE.ShaderChunk.shadowmap_fragment,
      THREE.ShaderChunk.linear_to_gamma_fragment,
      THREE.ShaderChunk.fog_fragment,
      '}'
    ].join('\n')
  },
  lambert: {
    uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.common,
    THREE.UniformsLib.fog,
    THREE.UniformsLib.lights,
    THREE.UniformsLib.shadowmap,
    {
      ambient: {
        type: 'c',
        value: new THREE.Color(16777215)
      },
      emissive: {
        type: 'c',
        value: new THREE.Color(0)
      },
      wrapRGB: {
        type: 'v3',
        value: new THREE.Vector3(1, 1, 1)
      }
    }
    ]),
    vertexShader: [
      '#define LAMBERT\nvarying vec3 vLightFront;\n#ifdef DOUBLE_SIDED\nvarying vec3 vLightBack;\n#endif',
      THREE.ShaderChunk.map_pars_vertex,
      THREE.ShaderChunk.lightmap_pars_vertex,
      THREE.ShaderChunk.envmap_pars_vertex,
      THREE.ShaderChunk.lights_lambert_pars_vertex,
      THREE.ShaderChunk.color_pars_vertex,
      THREE.ShaderChunk.morphtarget_pars_vertex,
      THREE.ShaderChunk.skinning_pars_vertex,
      THREE.ShaderChunk.shadowmap_pars_vertex,
      'void main() {',
      THREE.ShaderChunk.map_vertex,
      THREE.ShaderChunk.lightmap_vertex,
      THREE.ShaderChunk.color_vertex,
      THREE.ShaderChunk.morphnormal_vertex,
      THREE.ShaderChunk.skinbase_vertex,
      THREE.ShaderChunk.skinnormal_vertex,
      THREE.ShaderChunk.defaultnormal_vertex,
      THREE.ShaderChunk.morphtarget_vertex,
      THREE.ShaderChunk.skinning_vertex,
      THREE.ShaderChunk.default_vertex,
      THREE.ShaderChunk.worldpos_vertex,
      THREE.ShaderChunk.envmap_vertex,
      THREE.ShaderChunk.lights_lambert_vertex,
      THREE.ShaderChunk.shadowmap_vertex,
      '}'
    ].join('\n'),
    fragmentShader: [
      'uniform float opacity;\nvarying vec3 vLightFront;\n#ifdef DOUBLE_SIDED\nvarying vec3 vLightBack;\n#endif',
      THREE.ShaderChunk.color_pars_fragment,
      THREE.ShaderChunk.map_pars_fragment,
      THREE.ShaderChunk.lightmap_pars_fragment,
      THREE.ShaderChunk.envmap_pars_fragment,
      THREE.ShaderChunk.fog_pars_fragment,
      THREE.ShaderChunk.shadowmap_pars_fragment,
      THREE.ShaderChunk.specularmap_pars_fragment,
      'void main() {\ngl_FragColor = vec4( vec3 ( 1.0 ), opacity );',
      THREE.ShaderChunk.map_fragment,
      THREE.ShaderChunk.alphatest_fragment,
      THREE.ShaderChunk.specularmap_fragment,
      '#ifdef DOUBLE_SIDED\nif ( gl_FrontFacing )\ngl_FragColor.xyz *= vLightFront;\nelse\ngl_FragColor.xyz *= vLightBack;\n#else\ngl_FragColor.xyz *= vLightFront;\n#endif',
      THREE.ShaderChunk.lightmap_fragment,
      THREE.ShaderChunk.color_fragment,
      THREE.ShaderChunk.envmap_fragment,
      THREE.ShaderChunk.shadowmap_fragment,
      THREE.ShaderChunk.linear_to_gamma_fragment,
      THREE.ShaderChunk.fog_fragment,
      '}'
    ].join('\n')
  },
  phong: {
    uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.common,
    THREE.UniformsLib.bump,
    THREE.UniformsLib.normalmap,
    THREE.UniformsLib.fog,
    THREE.UniformsLib.lights,
    THREE.UniformsLib.shadowmap,
    {
      ambient: {
        type: 'c',
        value: new THREE.Color(16777215)
      },
      emissive: {
        type: 'c',
        value: new THREE.Color(0)
      },
      specular: {
        type: 'c',
        value: new THREE.Color(1118481)
      },
      shininess: {
        type: 'f',
        value: 30
      },
      wrapRGB: {
        type: 'v3',
        value: new THREE.Vector3(1, 1, 1)
      }
    }
    ]),
    vertexShader: [
      '#define PHONG\nvarying vec3 vViewPosition;\nvarying vec3 vNormal;',
      THREE.ShaderChunk.map_pars_vertex,
      THREE.ShaderChunk.lightmap_pars_vertex,
      THREE.ShaderChunk.envmap_pars_vertex,
      THREE.ShaderChunk.lights_phong_pars_vertex,
      THREE.ShaderChunk.color_pars_vertex,
      THREE.ShaderChunk.morphtarget_pars_vertex,
      THREE.ShaderChunk.skinning_pars_vertex,
      THREE.ShaderChunk.shadowmap_pars_vertex,
      'void main() {',
      THREE.ShaderChunk.map_vertex,
      THREE.ShaderChunk.lightmap_vertex,
      THREE.ShaderChunk.color_vertex,
      THREE.ShaderChunk.morphnormal_vertex,
      THREE.ShaderChunk.skinbase_vertex,
      THREE.ShaderChunk.skinnormal_vertex,
      THREE.ShaderChunk.defaultnormal_vertex,
      'vNormal = normalize( transformedNormal );',
      THREE.ShaderChunk.morphtarget_vertex,
      THREE.ShaderChunk.skinning_vertex,
      THREE.ShaderChunk.default_vertex,
      'vViewPosition = -mvPosition.xyz;',
      THREE.ShaderChunk.worldpos_vertex,
      THREE.ShaderChunk.envmap_vertex,
      THREE.ShaderChunk.lights_phong_vertex,
      THREE.ShaderChunk.shadowmap_vertex,
      '}'
    ].join('\n'),
    fragmentShader: [
      'uniform vec3 diffuse;\nuniform float opacity;\nuniform vec3 ambient;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;',
      THREE.ShaderChunk.color_pars_fragment,
      THREE.ShaderChunk.map_pars_fragment,
      THREE.ShaderChunk.lightmap_pars_fragment,
      THREE.ShaderChunk.envmap_pars_fragment,
      THREE.ShaderChunk.fog_pars_fragment,
      THREE.ShaderChunk.lights_phong_pars_fragment,
      THREE.ShaderChunk.shadowmap_pars_fragment,
      THREE.ShaderChunk.bumpmap_pars_fragment,
      THREE.ShaderChunk.normalmap_pars_fragment,
      THREE.ShaderChunk.specularmap_pars_fragment,
      'void main() {\ngl_FragColor = vec4( vec3 ( 1.0 ), opacity );',
      THREE.ShaderChunk.map_fragment,
      THREE.ShaderChunk.alphatest_fragment,
      THREE.ShaderChunk.specularmap_fragment,
      THREE.ShaderChunk.lights_phong_fragment,
      THREE.ShaderChunk.lightmap_fragment,
      THREE.ShaderChunk.color_fragment,
      THREE.ShaderChunk.envmap_fragment,
      THREE.ShaderChunk.shadowmap_fragment,
      THREE.ShaderChunk.linear_to_gamma_fragment,
      THREE.ShaderChunk.fog_fragment,
      '}'
    ].join('\n')
  },
  particle_basic: {
    uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.particle,
    THREE.UniformsLib.shadowmap]),
    vertexShader: [
      'uniform float size;\nuniform float scale;',
      THREE.ShaderChunk.color_pars_vertex,
      THREE.ShaderChunk.shadowmap_pars_vertex,
      'void main() {',
      THREE.ShaderChunk.color_vertex,
      'vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n#ifdef USE_SIZEATTENUATION\ngl_PointSize = size * ( scale / length( mvPosition.xyz ) );\n#else\ngl_PointSize = size;\n#endif\ngl_Position = projectionMatrix * mvPosition;',
      THREE.ShaderChunk.worldpos_vertex,
      THREE.ShaderChunk.shadowmap_vertex,
      '}'
    ].join('\n'),
    fragmentShader: [
      'uniform vec3 psColor;\nuniform float opacity;',
      THREE.ShaderChunk.color_pars_fragment,
      THREE.ShaderChunk.map_particle_pars_fragment,
      THREE.ShaderChunk.fog_pars_fragment,
      THREE.ShaderChunk.shadowmap_pars_fragment,
      'void main() {\ngl_FragColor = vec4( psColor, opacity );',
      THREE.ShaderChunk.map_particle_fragment,
      THREE.ShaderChunk.alphatest_fragment,
      THREE.ShaderChunk.color_fragment,
      THREE.ShaderChunk.shadowmap_fragment,
      THREE.ShaderChunk.fog_fragment,
      '}'
    ].join('\n')
  },
  dashed: {
    uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.common,
    THREE.UniformsLib.fog,
    {
      scale: {
        type: 'f',
        value: 1
      },
      dashSize: {
        type: 'f',
        value: 1
      },
      totalSize: {
        type: 'f',
        value: 2
      }
    }
    ]),
    vertexShader: [
      'uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;',
      THREE.ShaderChunk.color_pars_vertex,
      'void main() {',
      THREE.ShaderChunk.color_vertex,
      'vLineDistance = scale * lineDistance;\nvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\ngl_Position = projectionMatrix * mvPosition;\n}'
    ].join('\n'),
    fragmentShader: [
      'uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;',
      THREE.ShaderChunk.color_pars_fragment,
      THREE.ShaderChunk.fog_pars_fragment,
      'void main() {\nif ( mod( vLineDistance, totalSize ) > dashSize ) {\ndiscard;\n}\ngl_FragColor = vec4( diffuse, opacity );',
      THREE.ShaderChunk.color_fragment,
      THREE.ShaderChunk.fog_fragment,
      '}'
    ].join('\n')
  },
  depthRGBA: {
    uniforms: {
    },
    vertexShader: [
      THREE.ShaderChunk.morphtarget_pars_vertex,
      THREE.ShaderChunk.skinning_pars_vertex,
      'void main() {',
      THREE.ShaderChunk.skinbase_vertex,
      THREE.ShaderChunk.morphtarget_vertex,
      THREE.ShaderChunk.skinning_vertex,
      THREE.ShaderChunk.default_vertex,
      '}'
    ].join('\n'),
    fragmentShader: 'vec4 pack_depth( const in float depth ) {\nconst vec4 bit_shift = vec4( 256.0 * 256.0 * 256.0, 256.0 * 256.0, 256.0, 1.0 );\nconst vec4 bit_mask  = vec4( 0.0, 1.0 / 256.0, 1.0 / 256.0, 1.0 / 256.0 );\nvec4 res = fract( depth * bit_shift );\nres -= res.xxyz * bit_mask;\nreturn res;\n}\nvoid main() {\ngl_FragData[ 0 ] = pack_depth( gl_FragCoord.z );\n}'
  }
};
THREE.WebGLRenderer = function (a) {
  function b(a) {
    if (a.__webglCustomAttributesList) for (var b in a.__webglCustomAttributesList) j.deleteBuffer(a.__webglCustomAttributesList[b].buffer)
  }
  function c(a, b) {
    var c = a.vertices.length,
    d = b.material;
    if (d.attributes) {
      void 0 === a.__webglCustomAttributesList && (a.__webglCustomAttributesList = [
      ]);
      for (var e in d.attributes) {
        var f = d.attributes[e];
        if (!f.__webglInitialized || f.createUniqueBuffers) {
          f.__webglInitialized = !0;
          var g = 1;
          'v2' === f.type ? g = 2 : 'v3' === f.type ? g = 3 : 'v4' === f.type ?
          g = 4 : 'c' === f.type && (g = 3);
          f.size = g;
          f.array = new Float32Array(c * g);
          f.buffer = j.createBuffer();
          f.buffer.belongsToAttribute = e;
          f.needsUpdate = !0
        }
        a.__webglCustomAttributesList.push(f)
      }
    }
  }
  function d(a, b) {
    var c = b.geometry,
    d = a.faces3,
    h = a.faces4,
    i = 3 * d.length + 4 * h.length,
    k = 1 * d.length + 2 * h.length,
    h = 3 * d.length + 4 * h.length,
    d = e(b, a),
    l = g(d),
    m = f(d),
    n = d.vertexColors ? d.vertexColors : !1;
    a.__vertexArray = new Float32Array(3 * i);
    m && (a.__normalArray = new Float32Array(3 * i));
    c.hasTangents && (a.__tangentArray = new Float32Array(4 * i));
    n && (a.__colorArray = new Float32Array(3 * i));
    if (l) {
      if (0 < c.faceUvs.length || 0 < c.faceVertexUvs.length) a.__uvArray = new Float32Array(2 * i);
      if (1 < c.faceUvs.length || 1 < c.faceVertexUvs.length) a.__uv2Array = new Float32Array(2 * i)
    }
    b.geometry.skinWeights.length && b.geometry.skinIndices.length && (a.__skinIndexArray = new Float32Array(4 * i), a.__skinWeightArray = new Float32Array(4 * i));
    a.__faceArray = new Uint16Array(3 * k);
    a.__lineArray = new Uint16Array(2 * h);
    if (a.numMorphTargets) {
      a.__morphTargetsArrays = [
      ];
      c = 0;
      for (l = a.numMorphTargets; c <
      l; c++) a.__morphTargetsArrays.push(new Float32Array(3 * i))
    }
    if (a.numMorphNormals) {
      a.__morphNormalsArrays = [
      ];
      c = 0;
      for (l = a.numMorphNormals; c < l; c++) a.__morphNormalsArrays.push(new Float32Array(3 * i))
    }
    a.__webglFaceCount = 3 * k;
    a.__webglLineCount = 2 * h;
    if (d.attributes) {
      void 0 === a.__webglCustomAttributesList && (a.__webglCustomAttributesList = [
      ]);
      for (var p in d.attributes) {
        var k = d.attributes[p],
        c = {
        },
        q;
        for (q in k) c[q] = k[q];
        if (!c.__webglInitialized || c.createUniqueBuffers) c.__webglInitialized = !0,
        h = 1,
        'v2' === c.type ? h = 2 :
        'v3' === c.type ? h = 3 : 'v4' === c.type ? h = 4 : 'c' === c.type && (h = 3),
        c.size = h,
        c.array = new Float32Array(i * h),
        c.buffer = j.createBuffer(),
        c.buffer.belongsToAttribute = p,
        k.needsUpdate = !0,
        c.__original = k;
        a.__webglCustomAttributesList.push(c)
      }
    }
    a.__inittedArrays = !0
  }
  function e(a, b) {
    return a.material instanceof THREE.MeshFaceMaterial ? a.material.materials[b.materialIndex] : a.material
  }
  function f(a) {
    return a instanceof THREE.MeshBasicMaterial && !a.envMap || a instanceof THREE.MeshDepthMaterial ? !1 : a && void 0 !== a.shading && a.shading ===
    THREE.SmoothShading ? THREE.SmoothShading : THREE.FlatShading
  }
  function g(a) {
    return a.map || a.lightMap || a.bumpMap || a.normalMap || a.specularMap || a instanceof THREE.ShaderMaterial ? !0 : !1
  }
  function h(a) {
    var b,
    c,
    d;
    for (b in a.attributes) d = 'index' === b ? j.ELEMENT_ARRAY_BUFFER : j.ARRAY_BUFFER,
    c = a.attributes[b],
    c.buffer = j.createBuffer(),
    j.bindBuffer(d, c.buffer),
    j.bufferData(d, c.array, j.STATIC_DRAW)
  }
  function i(a, b, c) {
    var d = a.attributes,
    e = d.index,
    f = d.position,
    g = d.normal,
    h = d.uv,
    i = d.color,
    d = d.tangent;
    a.elementsNeedUpdate && void 0 !== e && (j.bindBuffer(j.ELEMENT_ARRAY_BUFFER, e.buffer), j.bufferData(j.ELEMENT_ARRAY_BUFFER, e.array, b));
    a.verticesNeedUpdate && void 0 !== f && (j.bindBuffer(j.ARRAY_BUFFER, f.buffer), j.bufferData(j.ARRAY_BUFFER, f.array, b));
    a.normalsNeedUpdate && void 0 !== g && (j.bindBuffer(j.ARRAY_BUFFER, g.buffer), j.bufferData(j.ARRAY_BUFFER, g.array, b));
    a.uvsNeedUpdate && void 0 !== h && (j.bindBuffer(j.ARRAY_BUFFER, h.buffer), j.bufferData(j.ARRAY_BUFFER, h.array, b));
    a.colorsNeedUpdate && void 0 !== i && (j.bindBuffer(j.ARRAY_BUFFER, i.buffer), j.bufferData(j.ARRAY_BUFFER, i.array, b));
    a.tangentsNeedUpdate && void 0 !== d && (j.bindBuffer(j.ARRAY_BUFFER, d.buffer), j.bufferData(j.ARRAY_BUFFER, d.array, b));
    if (c) for (var k in a.attributes) delete a.attributes[k].array
  }
  function k(a) {
    $a[a] || (j.enableVertexAttribArray(a), $a[a] = !0)
  }
  function l() {
    for (var a in $a) $a[a] && (j.disableVertexAttribArray(a), $a[a] = !1)
  }
  function m(a, b) {
    return a.z !== b.z ? b.z - a.z : b.id - a.id
  }
  function p(a, b) {
    return b[0] - a[0]
  }
  function s(a, b, c) {
    if (a.length) for (var d = 0, e = a.length; d < e; d++) qa = ia = null,
    W = ba = sa = ma = pb = ob = Pa = - 1,
    Fb = !0,
    a[d].render(b, c, qb, Cb),
    qa = ia = null,
    W = ba = sa = ma = pb = ob = Pa = - 1,
    Fb = !0
  }
  function q(a, b, c, d, e, f, g, h) {
    var j,
    i,
    k,
    l;
    b ? (i = a.length - 1, l = b = - 1) : (i = 0, b = a.length, l = 1);
    for (var m = i; m !== b; m += l) if (j = a[m], j.render) {
      i = j.object;
      k = j.buffer;
      if (h) j = h;
       else {
        j = j[c];
        if (!j) continue;
        g && H.setBlending(j.blending, j.blendEquation, j.blendSrc, j.blendDst);
        H.setDepthTest(j.depthTest);
        H.setDepthWrite(j.depthWrite);
        G(j.polygonOffset, j.polygonOffsetFactor, j.polygonOffsetUnits)
      }
      H.setMaterialFaces(j);
      k instanceof THREE.BufferGeometry ? H.renderBufferDirect(d, e, f, j, k, i) : H.renderBuffer(d, e, f, j, k, i)
    }
  }
  function n(a, b, c, d, e, f, g) {
    for (var j, h, i = 0, k = a.length; i < k; i++) if (j = a[i], h = j.object, h.visible) {
      if (g) j = g;
       else {
        j = j[b];
        if (!j) continue;
        f && H.setBlending(j.blending, j.blendEquation, j.blendSrc, j.blendDst);
        H.setDepthTest(j.depthTest);
        H.setDepthWrite(j.depthWrite);
        G(j.polygonOffset, j.polygonOffsetFactor, j.polygonOffsetUnits)
      }
      H.renderImmediateObject(c, d, e, j, h)
    }
  }
  function r(a, b, c) {
    a.push({
      buffer: b,
      object: c,
      opaque: null,
      transparent: null
    })
  }
  function v(a) {
    for (var b in a.attributes) if (a.attributes[b].needsUpdate) return !0;
    return !1
  }
  function w(a) {
    for (var b in a.attributes) a.attributes[b].needsUpdate = !1
  }
  function x(a, b) {
    for (var c = a.length - 1; 0 <= c; c--) a[c].object === b && a.splice(c, 1)
  }
  function t(a, b) {
    for (var c = a.length - 1; 0 <= c; c--) a[c] === b && a.splice(c, 1)
  }
  function K(a, b, c, d, e) {
    ya = 0;
    d.needsUpdate && (d.program && Kc(d), H.initMaterial(d, b, c, e), d.needsUpdate = !1);
    d.morphTargets && !e.__webglMorphTargetInfluences && (e.__webglMorphTargetInfluences = new Float32Array(H.maxMorphTargets));
    var f = !1,
    g = d.program,
    h = g.uniforms,
    i = d.uniforms;
    g !== ia && (j.useProgram(g), ia = g, f = !0);
    d.id !== W && (W = d.id, f = !0);
    if (f || a !== qa) j.uniformMatrix4fv(h.projectionMatrix, !1, a.projectionMatrix.elements),
    a !== qa && (qa = a);
    if (d.skinning) if (tb && e.useVertexTexture) {
      if (null !== h.boneTexture) {
        var k = D();
        j.uniform1i(h.boneTexture, k);
        H.setTexture(e.boneTexture, k)
      }
    } else null !== h.boneGlobalMatrices && j.uniformMatrix4fv(h.boneGlobalMatrices, !1, e.boneMatrices);
    if (f) {
      c && d.fog && (i.fogColor.value = c.color, c instanceof THREE.Fog ? (i.fogNear.value = c.near, i.fogFar.value = c.far) : c instanceof THREE.FogExp2 && (i.fogDensity.value = c.density));
      if (d instanceof THREE.MeshPhongMaterial || d instanceof THREE.MeshLambertMaterial || d.lights) {
        if (Fb) {
          for (var l, m = k = 0, n = 0, p, q, s, r = Hc, t = r.directional.colors, v = r.directional.positions, w = r.point.colors, x = r.point.positions, A = r.point.distances, B = r.spot.colors, G = r.spot.positions, I = r.spot.distances, K = r.spot.directions, M = r.spot.anglesCos, L = r.spot.exponents, N = r.hemi.skyColors, ba = r.hemi.groundColors, P = r.hemi.positions, ja = 0, ha = 0, V = 0, Y = 0, ka = 0, fa = 0, $ = 0, ga = 0, U = l = 0, c = s = U = 0, f = b.length; c < f; c++) l = b[c],
          l.onlyShadow || (p = l.color, q = l.intensity, s = l.distance, l instanceof THREE.AmbientLight ? l.visible && (H.gammaInput ? (k += p.r * p.r, m += p.g * p.g, n += p.b * p.b) : (k += p.r, m += p.g, n += p.b)) : l instanceof THREE.DirectionalLight ? (ka += 1, l.visible && (ta.copy(l.matrixWorld.getPosition()), ta.subSelf(l.target.matrixWorld.getPosition()), ta.normalize(), 0 === ta.x && 0 === ta.y && 0 === ta.z || (l = 3 * ja, v[l] = ta.x, v[l + 1] = ta.y, v[l + 2] = ta.z, H.gammaInput ? z(t, l, p, q * q) : E(t, l, p, q), ja += 1))) : l instanceof THREE.PointLight ? (fa += 1, l.visible && (U = 3 * ha, H.gammaInput ? z(w, U, p, q * q) : E(w, U, p, q), q = l.matrixWorld.getPosition(), x[U] = q.x, x[U + 1] = q.y, x[U + 2] = q.z, A[ha] = s, ha += 1)) : l instanceof THREE.SpotLight ? ($ += 1, l.visible && (U = 3 * V, H.gammaInput ? z(B, U, p, q * q) : E(B, U, p, q), q = l.matrixWorld.getPosition(), G[U] = q.x, G[U + 1] = q.y, G[U + 2] = q.z, I[V] = s, ta.copy(q), ta.subSelf(l.target.matrixWorld.getPosition()), ta.normalize(), K[U] = ta.x, K[U + 1] = ta.y, K[U + 2] = ta.z, M[V] = Math.cos(l.angle), L[V] = l.exponent, V += 1)) : l instanceof THREE.HemisphereLight && (ga += 1, l.visible && (ta.copy(l.matrixWorld.getPosition()), ta.normalize(), 0 === ta.x && 0 === ta.y && 0 === ta.z || (s = 3 * Y, P[s] = ta.x, P[s + 1] = ta.y, P[s + 2] = ta.z, p = l.color, l = l.groundColor, H.gammaInput ? (q *= q, z(N, s, p, q), z(ba, s, l, q)) : (E(N, s, p, q), E(ba, s, l, q)), Y += 1))));
          c = 3 * ja;
          for (f = Math.max(t.length, 3 * ka); c < f; c++) t[c] = 0;
          c = 3 * ha;
          for (f = Math.max(w.length, 3 * fa); c < f; c++) w[c] = 0;
          c = 3 * V;
          for (f = Math.max(B.length, 3 * $); c < f; c++) B[c] = 0;
          c = 3 * Y;
          for (f = Math.max(N.length, 3 * ga); c < f; c++) N[c] = 0;
          c = 3 * Y;
          for (f = Math.max(ba.length, 3 * ga); c < f; c++) ba[c] = 0;
          r.directional.length = ja;
          r.point.length = ha;
          r.spot.length = V;
          r.hemi.length = Y;
          r.ambient[0] = k;
          r.ambient[1] = m;
          r.ambient[2] = n;
          Fb = !1
        }
        c = Hc;
        i.ambientLightColor.value = c.ambient;
        i.directionalLightColor.value = c.directional.colors;
        i.directionalLightDirection.value = c.directional.positions;
        i.pointLightColor.value = c.point.colors;
        i.pointLightPosition.value = c.point.positions;
        i.pointLightDistance.value = c.point.distances;
        i.spotLightColor.value = c.spot.colors;
        i.spotLightPosition.value = c.spot.positions;
        i.spotLightDistance.value = c.spot.distances;
        i.spotLightDirection.value = c.spot.directions;
        i.spotLightAngleCos.value = c.spot.anglesCos;
        i.spotLightExponent.value = c.spot.exponents;
        i.hemisphereLightSkyColor.value = c.hemi.skyColors;
        i.hemisphereLightGroundColor.value = c.hemi.groundColors;
        i.hemisphereLightDirection.value = c.hemi.positions
      }
      if (d instanceof THREE.MeshBasicMaterial || d instanceof THREE.MeshLambertMaterial || d instanceof THREE.MeshPhongMaterial) {
        i.opacity.value = d.opacity;
        H.gammaInput ? i.diffuse.value.copyGammaToLinear(d.color) :
        i.diffuse.value = d.color;
        i.map.value = d.map;
        i.lightMap.value = d.lightMap;
        i.specularMap.value = d.specularMap;
        d.bumpMap && (i.bumpMap.value = d.bumpMap, i.bumpScale.value = d.bumpScale);
        d.normalMap && (i.normalMap.value = d.normalMap, i.normalScale.value.copy(d.normalScale));
        var Z;
        d.map ? Z = d.map : d.specularMap ? Z = d.specularMap : d.normalMap ? Z = d.normalMap : d.bumpMap && (Z = d.bumpMap);
        void 0 !== Z && (c = Z.offset, Z = Z.repeat, i.offsetRepeat.value.set(c.x, c.y, Z.x, Z.y));
        i.envMap.value = d.envMap;
        i.flipEnvMap.value = d.envMap instanceof THREE.WebGLRenderTargetCube ?
        1 : - 1;
        i.reflectivity.value = d.reflectivity;
        i.refractionRatio.value = d.refractionRatio;
        i.combine.value = d.combine;
        i.useRefract.value = d.envMap && d.envMap.mapping instanceof THREE.CubeRefractionMapping
      }
      d instanceof THREE.LineBasicMaterial ? (i.diffuse.value = d.color, i.opacity.value = d.opacity) : d instanceof THREE.LineDashedMaterial ? (i.diffuse.value = d.color, i.opacity.value = d.opacity, i.dashSize.value = d.dashSize, i.totalSize.value = d.dashSize + d.gapSize, i.scale.value = d.scale) : d instanceof THREE.ParticleBasicMaterial ? (i.psColor.value = d.color, i.opacity.value = d.opacity, i.size.value = d.size, i.scale.value = T.height / 2, i.map.value = d.map) : d instanceof THREE.MeshPhongMaterial ? (i.shininess.value = d.shininess, H.gammaInput ? (i.ambient.value.copyGammaToLinear(d.ambient), i.emissive.value.copyGammaToLinear(d.emissive), i.specular.value.copyGammaToLinear(d.specular)) : (i.ambient.value = d.ambient, i.emissive.value = d.emissive, i.specular.value = d.specular), d.wrapAround && i.wrapRGB.value.copy(d.wrapRGB)) : d instanceof THREE.MeshLambertMaterial ? (H.gammaInput ? (i.ambient.value.copyGammaToLinear(d.ambient), i.emissive.value.copyGammaToLinear(d.emissive)) : (i.ambient.value = d.ambient, i.emissive.value = d.emissive), d.wrapAround && i.wrapRGB.value.copy(d.wrapRGB)) : d instanceof THREE.MeshDepthMaterial ? (i.mNear.value = a.near, i.mFar.value = a.far, i.opacity.value = d.opacity) : d instanceof THREE.MeshNormalMaterial && (i.opacity.value = d.opacity);
      if (e.receiveShadow && !d._shadowPass && i.shadowMatrix) {
        c = Z = 0;
        for (f = b.length; c < f; c++) if (k = b[c], k.castShadow && (k instanceof THREE.SpotLight || k instanceof THREE.DirectionalLight && !k.shadowCascade)) i.shadowMap.value[Z] = k.shadowMap,
        i.shadowMapSize.value[Z] = k.shadowMapSize,
        i.shadowMatrix.value[Z] = k.shadowMatrix,
        i.shadowDarkness.value[Z] = k.shadowDarkness,
        i.shadowBias.value[Z] = k.shadowBias,
        Z++
      }
      b = d.uniformsList;
      i = 0;
      for (Z = b.length; i < Z; i++) if (f = g.uniforms[b[i][1]]) if (c = b[i][0], m = c.type, k = c.value, 'i' === m) j.uniform1i(f, k);
       else if ('f' === m) j.uniform1f(f, k);
       else if ('v2' === m) j.uniform2f(f, k.x, k.y);
       else if ('v3' === m) j.uniform3f(f, k.x, k.y, k.z);
       else if ('v4' === m) j.uniform4f(f, k.x, k.y, k.z, k.w);
       else if ('c' === m) j.uniform3f(f, k.r, k.g, k.b);
       else if ('iv1' === m) j.uniform1iv(f, k);
       else if ('iv' === m) j.uniform3iv(f, k);
       else if ('fv1' === m) j.uniform1fv(f, k);
       else if ('fv' === m) j.uniform3fv(f, k);
       else if ('v2v' === m) {
        void 0 === c._array && (c._array = new Float32Array(2 * k.length));
        m = 0;
        for (n = k.length; m < n; m++) r = 2 * m,
        c._array[r] = k[m].x,
        c._array[r + 1] = k[m].y;
        j.uniform2fv(f, c._array)
      } else if ('v3v' === m) {
        void 0 === c._array && (c._array = new Float32Array(3 * k.length));
        m = 0;
        for (n = k.length; m < n; m++) r = 3 * m,
        c._array[r] = k[m].x,
        c._array[r + 1] = k[m].y,
        c._array[r + 2] = k[m].z;
        j.uniform3fv(f, c._array)
      } else if ('v4v' === m) {
        void 0 === c._array && (c._array = new Float32Array(4 * k.length));
        m = 0;
        for (n = k.length; m < n; m++) r = 4 * m,
        c._array[r] = k[m].x,
        c._array[r + 1] = k[m].y,
        c._array[r + 2] = k[m].z,
        c._array[r + 3] = k[m].w;
        j.uniform4fv(f, c._array)
      } else if ('m4' === m) void 0 === c._array && (c._array = new Float32Array(16)),
      k.flattenToArray(c._array),
      j.uniformMatrix4fv(f, !1, c._array);
       else if ('m4v' === m) {
        void 0 === c._array && (c._array = new Float32Array(16 * k.length));
        m = 0;
        for (n = k.length; m < n; m++) k[m].flattenToArrayOffset(c._array, 16 * m);
        j.uniformMatrix4fv(f, !1, c._array)
      } else if ('t' === m) {
        if (r = k, k = D(), j.uniform1i(f, k), r) if (r.image instanceof Array && 6 === r.image.length) {
          if (c = r, f = k, 6 === c.image.length) if (c.needsUpdate) {
            c.image.__webglTextureCube || (c.image.__webglTextureCube = j.createTexture(), H.info.memory.textures++);
            j.activeTexture(j.TEXTURE0 + f);
            j.bindTexture(j.TEXTURE_CUBE_MAP, c.image.__webglTextureCube);
            j.pixelStorei(j.UNPACK_FLIP_Y_WEBGL, c.flipY);
            f = c instanceof THREE.CompressedTexture;
            k = [
            ];
            for (m = 0; 6 > m; m++) H.autoScaleCubemaps && !f ? (n = k, r = m, t = c.image[m], w = bd, t.width <= w && t.height <= w || (x = Math.max(t.width, t.height), v = Math.floor(t.width * w / x), w = Math.floor(t.height * w / x), x = document.createElement('canvas'), x.width = v, x.height = w, x.getContext('2d').drawImage(t, 0, 0, t.width, t.height, 0, 0, v, w), t = x), n[r] = t) : k[m] = c.image[m];
            m = k[0];
            n = 0 === (m.width & m.width - 1) && 0 === (m.height & m.height - 1);
            r = J(c.format);
            t = J(c.type);
            C(j.TEXTURE_CUBE_MAP, c, n);
            for (m = 0; 6 > m; m++) if (f) {
              w = k[m].mipmaps;
              x = 0;
              for (A = w.length; x < A; x++) v = w[x],
              j.compressedTexImage2D(j.TEXTURE_CUBE_MAP_POSITIVE_X + m, x, r, v.width, v.height, 0, v.data)
            } else j.texImage2D(j.TEXTURE_CUBE_MAP_POSITIVE_X + m, 0, r, r, t, k[m]);
            c.generateMipmaps && n && j.generateMipmap(j.TEXTURE_CUBE_MAP);
            c.needsUpdate = !1;
            if (c.onUpdate) c.onUpdate()
          } else j.activeTexture(j.TEXTURE0 + f),
          j.bindTexture(j.TEXTURE_CUBE_MAP, c.image.__webglTextureCube)
        } else r instanceof THREE.WebGLRenderTargetCube ? (c = r, j.activeTexture(j.TEXTURE0 + k), j.bindTexture(j.TEXTURE_CUBE_MAP, c.__webglTexture)) : H.setTexture(r, k)
      } else if ('tv' === m) {
        void 0 === c._array && (c._array = [
        ]);
        m = 0;
        for (n = c.value.length; m < n; m++) c._array[m] = D();
        j.uniform1iv(f, c._array);
        m = 0;
        for (n = c.value.length; m < n; m++) r = c.value[m],
        k = c._array[m],
        r && H.setTexture(r, k)
      }
      if ((d instanceof THREE.ShaderMaterial || d instanceof THREE.MeshPhongMaterial || d.envMap) && null !== h.cameraPosition) b = a.matrixWorld.getPosition(),
      j.uniform3f(h.cameraPosition, b.x, b.y, b.z);
      (d instanceof THREE.MeshPhongMaterial || d instanceof THREE.MeshLambertMaterial || d instanceof THREE.ShaderMaterial || d.skinning) && null !== h.viewMatrix && j.uniformMatrix4fv(h.viewMatrix, !1, a.matrixWorldInverse.elements)
    }
    j.uniformMatrix4fv(h.modelViewMatrix, !1, e._modelViewMatrix.elements);
    h.normalMatrix && j.uniformMatrix3fv(h.normalMatrix, !1, e._normalMatrix.elements);
    null !== h.modelMatrix && j.uniformMatrix4fv(h.modelMatrix, !1, e.matrixWorld.elements);
    return g
  }
  function D() {
    var a = ya;
    a >= yc && console.warn('WebGLRenderer: trying to use ' + a + ' texture units while this GPU supports only ' + yc);
    ya += 1;
    return a
  }
  function B(a, b) {
    a._modelViewMatrix.multiply(b.matrixWorldInverse, a.matrixWorld);
    a._normalMatrix.getInverse(a._modelViewMatrix);
    a._normalMatrix.transpose()
  }
  function z(a, b, c, d) {
    a[b] = c.r * c.r * d;
    a[b + 1] = c.g * c.g * d;
    a[b + 2] = c.b * c.b * d
  }
  function E(a, b, c, d) {
    a[b] = c.r * d;
    a[b + 1] = c.g * d;
    a[b + 2] = c.b * d
  }
  function G(a, b, c) {
    zb !== a && (a ? j.enable(j.POLYGON_OFFSET_FILL) : j.disable(j.POLYGON_OFFSET_FILL), zb = a);
    if (a && (gb !== b || Ma !== c)) j.polygonOffset(b, c),
    gb = b,
    Ma = c
  }
  function I(a) {
    for (var a = a.split('\n'), b = 0, c = a.length; b <
    c; b++) a[b] = b + 1 + ': ' + a[b];
    return a.join('\n')
  }
  function Y(a, b) {
    var c;
    'fragment' === a ? c = j.createShader(j.FRAGMENT_SHADER) : 'vertex' === a && (c = j.createShader(j.VERTEX_SHADER));
    j.shaderSource(c, b);
    j.compileShader(c);
    return !j.getShaderParameter(c, j.COMPILE_STATUS) ? (console.error(j.getShaderInfoLog(c)), console.error(I(b)), null) : c
  }
  function C(a, b, c) {
    c ? (j.texParameteri(a, j.TEXTURE_WRAP_S, J(b.wrapS)), j.texParameteri(a, j.TEXTURE_WRAP_T, J(b.wrapT)), j.texParameteri(a, j.TEXTURE_MAG_FILTER, J(b.magFilter)), j.texParameteri(a, j.TEXTURE_MIN_FILTER, J(b.minFilter))) : (j.texParameteri(a, j.TEXTURE_WRAP_S, j.CLAMP_TO_EDGE), j.texParameteri(a, j.TEXTURE_WRAP_T, j.CLAMP_TO_EDGE), j.texParameteri(a, j.TEXTURE_MAG_FILTER, A(b.magFilter)), j.texParameteri(a, j.TEXTURE_MIN_FILTER, A(b.minFilter)));
    if (gc && b.type !== THREE.FloatType && (1 < b.anisotropy || b.__oldAnisotropy)) j.texParameterf(a, gc.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(b.anisotropy, zc)),
    b.__oldAnisotropy = b.anisotropy
  }
  function P(a, b) {
    j.bindRenderbuffer(j.RENDERBUFFER, a);
    b.depthBuffer && !b.stencilBuffer ? (j.renderbufferStorage(j.RENDERBUFFER, j.DEPTH_COMPONENT16, b.width, b.height), j.framebufferRenderbuffer(j.FRAMEBUFFER, j.DEPTH_ATTACHMENT, j.RENDERBUFFER, a)) : b.depthBuffer && b.stencilBuffer ? (j.renderbufferStorage(j.RENDERBUFFER, j.DEPTH_STENCIL, b.width, b.height), j.framebufferRenderbuffer(j.FRAMEBUFFER, j.DEPTH_STENCIL_ATTACHMENT, j.RENDERBUFFER, a)) : j.renderbufferStorage(j.RENDERBUFFER, j.RGBA4, b.width, b.height)
  }
  function A(a) {
    return a === THREE.NearestFilter || a === THREE.NearestMipMapNearestFilter || a === THREE.NearestMipMapLinearFilter ?
    j.NEAREST : j.LINEAR
  }
  function J(a) {
    if (a === THREE.RepeatWrapping) return j.REPEAT;
    if (a === THREE.ClampToEdgeWrapping) return j.CLAMP_TO_EDGE;
    if (a === THREE.MirroredRepeatWrapping) return j.MIRRORED_REPEAT;
    if (a === THREE.NearestFilter) return j.NEAREST;
    if (a === THREE.NearestMipMapNearestFilter) return j.NEAREST_MIPMAP_NEAREST;
    if (a === THREE.NearestMipMapLinearFilter) return j.NEAREST_MIPMAP_LINEAR;
    if (a === THREE.LinearFilter) return j.LINEAR;
    if (a === THREE.LinearMipMapNearestFilter) return j.LINEAR_MIPMAP_NEAREST;
    if (a === THREE.LinearMipMapLinearFilter) return j.LINEAR_MIPMAP_LINEAR;
    if (a === THREE.UnsignedByteType) return j.UNSIGNED_BYTE;
    if (a === THREE.UnsignedShort4444Type) return j.UNSIGNED_SHORT_4_4_4_4;
    if (a === THREE.UnsignedShort5551Type) return j.UNSIGNED_SHORT_5_5_5_1;
    if (a === THREE.UnsignedShort565Type) return j.UNSIGNED_SHORT_5_6_5;
    if (a === THREE.ByteType) return j.BYTE;
    if (a === THREE.ShortType) return j.SHORT;
    if (a === THREE.UnsignedShortType) return j.UNSIGNED_SHORT;
    if (a === THREE.IntType) return j.INT;
    if (a === THREE.UnsignedIntType) return j.UNSIGNED_INT;
    if (a === THREE.FloatType) return j.FLOAT;
    if (a === THREE.AlphaFormat) return j.ALPHA;
    if (a === THREE.RGBFormat) return j.RGB;
    if (a === THREE.RGBAFormat) return j.RGBA;
    if (a === THREE.LuminanceFormat) return j.LUMINANCE;
    if (a === THREE.LuminanceAlphaFormat) return j.LUMINANCE_ALPHA;
    if (a === THREE.AddEquation) return j.FUNC_ADD;
    if (a === THREE.SubtractEquation) return j.FUNC_SUBTRACT;
    if (a === THREE.ReverseSubtractEquation) return j.FUNC_REVERSE_SUBTRACT;
    if (a === THREE.ZeroFactor) return j.ZERO;
    if (a === THREE.OneFactor) return j.ONE;
    if (a === THREE.SrcColorFactor) return j.SRC_COLOR;
    if (a === THREE.OneMinusSrcColorFactor) return j.ONE_MINUS_SRC_COLOR;
    if (a === THREE.SrcAlphaFactor) return j.SRC_ALPHA;
    if (a === THREE.OneMinusSrcAlphaFactor) return j.ONE_MINUS_SRC_ALPHA;
    if (a === THREE.DstAlphaFactor) return j.DST_ALPHA;
    if (a === THREE.OneMinusDstAlphaFactor) return j.ONE_MINUS_DST_ALPHA;
    if (a === THREE.DstColorFactor) return j.DST_COLOR;
    if (a === THREE.OneMinusDstColorFactor) return j.ONE_MINUS_DST_COLOR;
    if (a === THREE.SrcAlphaSaturateFactor) return j.SRC_ALPHA_SATURATE;
    if (void 0 !== Ob) {
      if (a === THREE.RGB_S3TC_DXT1_Format) return Ob.COMPRESSED_RGB_S3TC_DXT1_EXT;
      if (a === THREE.RGBA_S3TC_DXT1_Format) return Ob.COMPRESSED_RGBA_S3TC_DXT1_EXT;
      if (a === THREE.RGBA_S3TC_DXT3_Format) return Ob.COMPRESSED_RGBA_S3TC_DXT3_EXT;
      if (a === THREE.RGBA_S3TC_DXT5_Format) return Ob.COMPRESSED_RGBA_S3TC_DXT5_EXT
    }
    return 0
  }
  function M(a, b) {
    var c = j.createFramebuffer(),
    d = j.createTexture();
    j.bindTexture(j.TEXTURE_2D, d);
    j.texImage2D(j.TEXTURE_2D, 0, a, 2, 2, 0, a, b, null);
    j.bindFramebuffer(j.FRAMEBUFFER, c);
    j.framebufferTexture2D(j.FRAMEBUFFER, j.COLOR_ATTACHMENT0, j.TEXTURE_2D, d, 0);
    c = j.checkFramebufferStatus(j.FRAMEBUFFER);
    j.bindFramebuffer(j.FRAMEBUFFER, null);
    j.bindTexture(j.TEXTURE_2D, null);
    return c === j.FRAMEBUFFER_COMPLETE
  }
  console.log('THREE.WebGLRenderer', THREE.REVISION);
  var a = a || {
  },
  T = void 0 !== a.canvas ? a.canvas : document.createElement('canvas'),
  N = void 0 !== a.precision ? a.precision : 'highp',
  fa = void 0 !== a.alpha ? a.alpha : !0,
  oa = void 0 !== a.premultipliedAlpha ? a.premultipliedAlpha : !0,
  L = void 0 !== a.antialias ? a.antialias : !1,
  Z = void 0 !== a.stencil ? a.stencil : !0,
  eb = void 0 !== a.preserveDrawingBuffer ? a.preserveDrawingBuffer : !1,
  Ea = void 0 !==
  a.clearColor ? new THREE.Color(a.clearColor) : new THREE.Color(0),
  jb = void 0 !== a.clearAlpha ? a.clearAlpha : 0;
  this.domElement = T;
  this.context = null;
  this.devicePixelRatio = void 0 !== a.devicePixelRatio ? a.devicePixelRatio : void 0 !== window.devicePixelRatio ? window.devicePixelRatio : 1;
  this.autoUpdateScene = this.autoUpdateObjects = this.sortObjects = this.autoClearStencil = this.autoClearDepth = this.autoClearColor = this.autoClear = !0;
  this.shadowMapEnabled = this.physicallyBasedShading = this.gammaOutput = this.gammaInput = !1;
  this.shadowMapAutoUpdate = !0;
  this.shadowMapType = THREE.PCFShadowMap;
  this.shadowMapCullFace = THREE.CullFaceFront;
  this.shadowMapCascade = this.shadowMapDebug = !1;
  this.maxMorphTargets = 8;
  this.maxMorphNormals = 4;
  this.autoScaleCubemaps = !0;
  this.renderPluginsPre = [
  ];
  this.renderPluginsPost = [
  ];
  this.info = {
    memory: {
      programs: 0,
      geometries: 0,
      textures: 0
    },
    render: {
      calls: 0,
      vertices: 0,
      faces: 0,
      points: 0
    }
  };
  var H = this,
  ja = [
  ],
  ha = 0,
  ia = null,
  ka = null,
  W = - 1,
  ba = null,
  qa = null,
  Na = 0,
  ya = 0,
  ma = - 1,
  sa = - 1,
  Pa = - 1,
  nb = - 1,
  la = - 1,
  fb = - 1,
  ob = - 1,
  pb = - 1,
  zb = null,
  gb = null,
  Ma = null,
  va = null,
  Bb = 0,
  Sa = 0,
  Ya = 0,
  Za = 0,
  qb = 0,
  Cb = 0,
  $a = {
  },
  Db = new THREE.Frustum,
  rb = new THREE.Matrix4,
  fc = new THREE.Matrix4,
  Nb = new THREE.Vector3,
  ta = new THREE.Vector3,
  Fb = !0,
  Hc = {
    ambient: [
      0,
      0,
      0
    ],
    directional: {
      length: 0,
      colors: [
      ],
      positions: [
      ]
    },
    point: {
      length: 0,
      colors: [
      ],
      positions: [
      ],
      distances: [
      ]
    },
    spot: {
      length: 0,
      colors: [
      ],
      positions: [
      ],
      distances: [
      ],
      directions: [
      ],
      anglesCos: [
      ],
      exponents: [
      ]
    },
    hemi: {
      length: 0,
      skyColors: [
      ],
      groundColors: [
      ],
      positions: [
      ]
    }
  },
  j,
  Eb,
  Lc,
  gc,
  Ob;
  try {
    if (!(j = T.getContext('experimental-webgl', {
      alpha: fa,
      premultipliedAlpha: oa,
      antialias: L,
      stencil: Z,
      preserveDrawingBuffer: eb
    }))) throw 'Error creating WebGL context.';
  } catch (dd) {
    console.error(dd)
  }
  Eb = j.getExtension('OES_texture_float');
  Lc = j.getExtension('OES_standard_derivatives');
  gc = j.getExtension('EXT_texture_filter_anisotropic') || j.getExtension('MOZ_EXT_texture_filter_anisotropic') || j.getExtension('WEBKIT_EXT_texture_filter_anisotropic');
  Ob = j.getExtension('WEBGL_compressed_texture_s3tc') || j.getExtension('MOZ_WEBGL_compressed_texture_s3tc') || j.getExtension('WEBKIT_WEBGL_compressed_texture_s3tc');
  Eb || console.log('THREE.WebGLRenderer: Float textures not supported.');
  Lc || console.log('THREE.WebGLRenderer: Standard derivatives not supported.');
  gc || console.log('THREE.WebGLRenderer: Anisotropic texture filtering not supported.');
  Ob || console.log('THREE.WebGLRenderer: S3TC compressed textures not supported.');
  j.clearColor(0, 0, 0, 1);
  j.clearDepth(1);
  j.clearStencil(0);
  j.enable(j.DEPTH_TEST);
  j.depthFunc(j.LEQUAL);
  j.frontFace(j.CCW);
  j.cullFace(j.BACK);
  j.enable(j.CULL_FACE);
  j.enable(j.BLEND);
  j.blendEquation(j.FUNC_ADD);
  j.blendFunc(j.SRC_ALPHA, j.ONE_MINUS_SRC_ALPHA);
  j.clearColor(Ea.r, Ea.g, Ea.b, jb);
  this.context = j;
  var yc = j.getParameter(j.MAX_TEXTURE_IMAGE_UNITS),
  cd = j.getParameter(j.MAX_VERTEX_TEXTURE_IMAGE_UNITS);
  j.getParameter(j.MAX_TEXTURE_SIZE);
  var bd = j.getParameter(j.MAX_CUBE_MAP_TEXTURE_SIZE),
  zc = gc ? j.getParameter(gc.MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0,
  ab = 0 < cd,
  tb = ab && Eb;
  Ob && j.getParameter(j.COMPRESSED_TEXTURE_FORMATS);
  var Pb = j.getShaderPrecisionFormat(j.VERTEX_SHADER, j.HIGH_FLOAT),
  V = j.getShaderPrecisionFormat(j.VERTEX_SHADER, j.MEDIUM_FLOAT);
  j.getShaderPrecisionFormat(j.VERTEX_SHADER, j.LOW_FLOAT);
  var $ = j.getShaderPrecisionFormat(j.FRAGMENT_SHADER, j.HIGH_FLOAT),
  ga = j.getShaderPrecisionFormat(j.FRAGMENT_SHADER, j.MEDIUM_FLOAT);
  j.getShaderPrecisionFormat(j.FRAGMENT_SHADER, j.LOW_FLOAT);
  j.getShaderPrecisionFormat(j.VERTEX_SHADER, j.HIGH_INT);
  j.getShaderPrecisionFormat(j.VERTEX_SHADER, j.MEDIUM_INT);
  j.getShaderPrecisionFormat(j.VERTEX_SHADER, j.LOW_INT);
  j.getShaderPrecisionFormat(j.FRAGMENT_SHADER, j.HIGH_INT);
  j.getShaderPrecisionFormat(j.FRAGMENT_SHADER, j.MEDIUM_INT);
  j.getShaderPrecisionFormat(j.FRAGMENT_SHADER, j.LOW_INT);
  var Ha = Eb && M(j.RGB, j.FLOAT),
  Va = Eb && M(j.RGBA, j.FLOAT),
  Qa = Eb && M(j.LUMINANCE, j.FLOAT),
  kb = Eb && M(j.ALPHA, j.FLOAT),
  Ua = Eb && M(j.LUMINANCE_ALPHA, j.FLOAT),
  ub = 0 < Pb.precision && 0 < $.precision,
  Kb = 0 < V.precision && 0 < ga.precision;
  'highp' === N && !ub && (Kb ? (N = 'mediump', console.warn('WebGLRenderer: highp not supported, using mediump')) : (N = 'lowp', console.warn('WebGLRenderer: highp and mediump not supported, using lowp')));
  'mediump' === N && !Kb && (N = 'lowp', console.warn('WebGLRenderer: mediump not supported, using lowp'));
  this.getContext = function () {
    return j
  };
  this.supportsVertexTextures = function () {
    return ab
  };
  this.supportsLuminanceFloatRenderTarget = function () {
    return Qa
  };
  this.supportsAlphaFloatRenderTarget = function () {
    return kb
  };
  this.supportsLuminanceAlphaFloatRenderTarget = function () {
    return Ua
  };
  this.supportsRGBFloatRenderTarget = function () {
    return Ha
  };
  this.supportsRGBAFloatRenderTarget = function () {
    return Va
  };
  this.getMaxAnisotropy = function () {
    return zc
  };
  this.getPrecision = function () {
    return N
  };
  this.setSize = function (a, b) {
    T.width = a * this.devicePixelRatio;
    T.height = b * this.devicePixelRatio;
    T.style.width = a + 'px';
    T.style.height = b + 'px';
    this.setViewport(0, 0, T.width, T.height)
  };
  this.setViewport = function (a, b, c, d) {
    Bb = void 0 !== a ? a : 0;
    Sa = void 0 !== b ? b : 0;
    Ya = void 0 !== c ? c : T.width;
    Za = void 0 !== d ? d : T.height;
    j.viewport(Bb, Sa, Ya, Za)
  };
  this.setScissor = function (a, b, c, d) {
    j.scissor(a, b, c, d)
  };
  this.enableScissorTest = function (a) {
    a ? j.enable(j.SCISSOR_TEST) : j.disable(j.SCISSOR_TEST)
  };
  this.setClearColorHex = function (a, b) {
    Ea.setHex(a);
    jb = b;
    j.clearColor(Ea.r, Ea.g, Ea.b, jb)
  };
  this.setClearColor = function (a, b) {
    Ea.copy(a);
    jb = b;
    j.clearColor(Ea.r, Ea.g, Ea.b, jb)
  };
  this.getClearColor = function () {
    return Ea
  };
  this.getClearAlpha = function () {
    return jb
  };
  this.clear = function (a, b, c) {
    var d = 0;
    if (void 0 === a || a) d |= j.COLOR_BUFFER_BIT;
    if (void 0 === b || b) d |= j.DEPTH_BUFFER_BIT;
    if (void 0 === c || c) d |= j.STENCIL_BUFFER_BIT;
    j.clear(d)
  };
  this.clearTarget = function (a, b, c, d) {
    this.setRenderTarget(a);
    this.clear(b, c, d)
  };
  this.addPostPlugin = function (a) {
    a.init(this);
    this.renderPluginsPost.push(a)
  };
  this.addPrePlugin = function (a) {
    a.init(this);
    this.renderPluginsPre.push(a)
  };
  this.updateShadowMap = function (a, b) {
    ia = null;
    W = ba = pb = ob = Pa = - 1;
    Fb = !0;
    sa = ma = - 1;
    this.shadowMapPlugin.update(a, b)
  };
  var od = function (a) {
    a = a.target;
    a.removeEventListener('dispose', od);
    a.__webglInit = void 0;
    void 0 !== a.__webglVertexBuffer && j.deleteBuffer(a.__webglVertexBuffer);
    void 0 !== a.__webglNormalBuffer && j.deleteBuffer(a.__webglNormalBuffer);
    void 0 !== a.__webglTangentBuffer && j.deleteBuffer(a.__webglTangentBuffer);
    void 0 !== a.__webglColorBuffer && j.deleteBuffer(a.__webglColorBuffer);
    void 0 !== a.__webglUVBuffer && j.deleteBuffer(a.__webglUVBuffer);
    void 0 !== a.__webglUV2Buffer && j.deleteBuffer(a.__webglUV2Buffer);
    void 0 !== a.__webglSkinIndicesBuffer && j.deleteBuffer(a.__webglSkinIndicesBuffer);
    void 0 !== a.__webglSkinWeightsBuffer && j.deleteBuffer(a.__webglSkinWeightsBuffer);
    void 0 !== a.__webglFaceBuffer && j.deleteBuffer(a.__webglFaceBuffer);
    void 0 !== a.__webglLineBuffer && j.deleteBuffer(a.__webglLineBuffer);
    void 0 !== a.__webglLineDistanceBuffer && j.deleteBuffer(a.__webglLineDistanceBuffer);
    if (void 0 !==
    a.geometryGroups) for (var c in a.geometryGroups) {
      var d = a.geometryGroups[c];
      if (void 0 !== d.numMorphTargets) for (var e = 0, f = d.numMorphTargets; e < f; e++) j.deleteBuffer(d.__webglMorphTargetsBuffers[e]);
      if (void 0 !== d.numMorphNormals) {
        e = 0;
        for (f = d.numMorphNormals; e < f; e++) j.deleteBuffer(d.__webglMorphNormalsBuffers[e])
      }
      b(d)
    }
    b(a);
    H.info.memory.geometries--
  },
  xc = function (a) {
    a = a.target;
    a.removeEventListener('dispose', xc);
    a.image && a.image.__webglTextureCube ? j.deleteTexture(a.image.__webglTextureCube) : a.__webglInit && (a.__webglInit = !1, j.deleteTexture(a.__webglTexture));
    H.info.memory.textures--
  },
  Ic = function (a) {
    a = a.target;
    a.removeEventListener('dispose', Ic);
    if (a && a.__webglTexture) if (j.deleteTexture(a.__webglTexture), a instanceof THREE.WebGLRenderTargetCube) for (var b = 0; 6 > b; b++) j.deleteFramebuffer(a.__webglFramebuffer[b]),
    j.deleteRenderbuffer(a.__webglRenderbuffer[b]);
     else j.deleteFramebuffer(a.__webglFramebuffer),
    j.deleteRenderbuffer(a.__webglRenderbuffer);
    H.info.memory.textures--
  },
  Jc = function (a) {
    a = a.target;
    a.removeEventListener('dispose', Jc);
    Kc(a)
  },
  Kc = function (a) {
    var b = a.program;
    if (void 0 !== b) {
      a.program = void 0;
      var c,
      d,
      e = !1,
      a = 0;
      for (c = ja.length; a < c; a++) if (d = ja[a], d.program === b) {
        d.usedTimes--;
        0 === d.usedTimes && (e = !0);
        break
      }
      if (!0 === e) {
        e = [
        ];
        a = 0;
        for (c = ja.length; a < c; a++) d = ja[a],
        d.program !== b && e.push(d);
        ja = e;
        j.deleteProgram(b);
        H.info.memory.programs--
      }
    }
  };
  this.renderBufferImmediate = function (a, b, c) {
    a.hasPositions && !a.__webglVertexBuffer && (a.__webglVertexBuffer = j.createBuffer());
    a.hasNormals && !a.__webglNormalBuffer && (a.__webglNormalBuffer = j.createBuffer());
    a.hasUvs && !a.__webglUvBuffer && (a.__webglUvBuffer = j.createBuffer());
    a.hasColors && !a.__webglColorBuffer && (a.__webglColorBuffer = j.createBuffer());
    a.hasPositions && (j.bindBuffer(j.ARRAY_BUFFER, a.__webglVertexBuffer), j.bufferData(j.ARRAY_BUFFER, a.positionArray, j.DYNAMIC_DRAW), j.enableVertexAttribArray(b.attributes.position), j.vertexAttribPointer(b.attributes.position, 3, j.FLOAT, !1, 0, 0));
    if (a.hasNormals) {
      j.bindBuffer(j.ARRAY_BUFFER, a.__webglNormalBuffer);
      if (c.shading === THREE.FlatShading) {
        var d,
        e,
        f,
        g,
        h,
        i,
        k,
        m,
        l,
        n,
        p,
        q = 3 * a.count;
        for (p = 0; p < q; p += 9) n = a.normalArray,
        d = n[p],
        e = n[p + 1],
        f = n[p + 2],
        g = n[p + 3],
        i = n[p + 4],
        m = n[p + 5],
        h = n[p + 6],
        k = n[p + 7],
        l = n[p + 8],
        d = (d + g + h) / 3,
        e = (e + i + k) / 3,
        f = (f + m + l) / 3,
        n[p] = d,
        n[p + 1] = e,
        n[p + 2] = f,
        n[p + 3] = d,
        n[p + 4] = e,
        n[p + 5] = f,
        n[p + 6] = d,
        n[p + 7] = e,
        n[p + 8] = f
      }
      j.bufferData(j.ARRAY_BUFFER, a.normalArray, j.DYNAMIC_DRAW);
      j.enableVertexAttribArray(b.attributes.normal);
      j.vertexAttribPointer(b.attributes.normal, 3, j.FLOAT, !1, 0, 0)
    }
    a.hasUvs && c.map && (j.bindBuffer(j.ARRAY_BUFFER, a.__webglUvBuffer), j.bufferData(j.ARRAY_BUFFER, a.uvArray, j.DYNAMIC_DRAW), j.enableVertexAttribArray(b.attributes.uv), j.vertexAttribPointer(b.attributes.uv, 2, j.FLOAT, !1, 0, 0));
    a.hasColors && c.vertexColors !== THREE.NoColors && (j.bindBuffer(j.ARRAY_BUFFER, a.__webglColorBuffer), j.bufferData(j.ARRAY_BUFFER, a.colorArray, j.DYNAMIC_DRAW), j.enableVertexAttribArray(b.attributes.color), j.vertexAttribPointer(b.attributes.color, 3, j.FLOAT, !1, 0, 0));
    j.drawArrays(j.TRIANGLES, 0, a.count);
    a.count = 0
  };
  this.renderBufferDirect = function (a, b, c, d, e, f) {
    if (!1 !== d.visible) if (c = K(a, b, c, d, f), a = c.attributes, b = !1, d = 16777215 * e.id + 2 * c.id + (d.wireframe ? 1 : 0), d !== ba && (ba = d, b = !0), b && l(), f instanceof THREE.Mesh) if (f = e.attributes.index) {
      d = e.offsets;
      1 < d.length && (b = !0);
      for (var c = 0, g = d.length; c < g; c++) {
        var h = d[c].index;
        if (b) {
          var i = e.attributes.position,
          m = i.itemSize;
          j.bindBuffer(j.ARRAY_BUFFER, i.buffer);
          k(a.position);
          j.vertexAttribPointer(a.position, m, j.FLOAT, !1, 0, 4 * h * m);
          m = e.attributes.normal;
          if (0 <= a.normal && m) {
            var n = m.itemSize;
            j.bindBuffer(j.ARRAY_BUFFER, m.buffer);
            k(a.normal);
            j.vertexAttribPointer(a.normal, n, j.FLOAT, !1, 0, 4 * h * n)
          }
          m = e.attributes.uv;
          0 <= a.uv && m && (n = m.itemSize, j.bindBuffer(j.ARRAY_BUFFER, m.buffer), k(a.uv), j.vertexAttribPointer(a.uv, n, j.FLOAT, !1, 0, 4 * h * n));
          m = e.attributes.color;
          0 <= a.color && m && (n = m.itemSize, j.bindBuffer(j.ARRAY_BUFFER, m.buffer), k(a.color), j.vertexAttribPointer(a.color, n, j.FLOAT, !1, 0, 4 * h * n));
          m = e.attributes.tangent;
          0 <= a.tangent && m && (n = m.itemSize, j.bindBuffer(j.ARRAY_BUFFER, m.buffer), k(a.tangent), j.vertexAttribPointer(a.tangent, n, j.FLOAT, !1, 0, 4 * h * n));
          j.bindBuffer(j.ELEMENT_ARRAY_BUFFER, f.buffer)
        }
        j.drawElements(j.TRIANGLES, d[c].count, j.UNSIGNED_SHORT, 2 * d[c].start);
        H.info.render.calls++;
        H.info.render.vertices += d[c].count;
        H.info.render.faces += d[c].count / 3
      }
    } else b && (i = e.attributes.position, m = i.itemSize, j.bindBuffer(j.ARRAY_BUFFER, i.buffer), k(a.position), j.vertexAttribPointer(a.position, m, j.FLOAT, !1, 0, 0), m = e.attributes.normal, 0 <= a.normal && m && (n = m.itemSize, j.bindBuffer(j.ARRAY_BUFFER, m.buffer), k(a.normal), j.vertexAttribPointer(a.normal, n, j.FLOAT, !1, 0, 0)), m = e.attributes.uv, 0 <= a.uv && m && (n = m.itemSize, j.bindBuffer(j.ARRAY_BUFFER, m.buffer), k(a.uv), j.vertexAttribPointer(a.uv, n, j.FLOAT, !1, 0, 0)), m = e.attributes.color, 0 <= a.color && m && (n = m.itemSize, j.bindBuffer(j.ARRAY_BUFFER, m.buffer), k(a.color), j.vertexAttribPointer(a.color, n, j.FLOAT, !1, 0, 0)), m = e.attributes.tangent, 0 <= a.tangent && m && (n = m.itemSize, j.bindBuffer(j.ARRAY_BUFFER, m.buffer), k(a.tangent), j.vertexAttribPointer(a.tangent, n, j.FLOAT, !1, 0, 0))),
    j.drawArrays(j.TRIANGLES, 0, i.numItems / 3),
    H.info.render.calls++,
    H.info.render.vertices += i.numItems / 3,
    H.info.render.faces += i.numItems / 3 / 3;
     else f instanceof THREE.ParticleSystem && b && (i = e.attributes.position, m = i.itemSize, j.bindBuffer(j.ARRAY_BUFFER, i.buffer), k(a.position), j.vertexAttribPointer(a.position, m, j.FLOAT, !1, 0, 0), m = e.attributes.color, 0 <= a.color && m && (n = m.itemSize, j.bindBuffer(j.ARRAY_BUFFER, m.buffer), k(a.color), j.vertexAttribPointer(a.color, n, j.FLOAT, !1, 0, 0)), j.drawArrays(j.POINTS, 0, i.numItems / 3), H.info.render.calls++, H.info.render.points += i.numItems / 3)
  };
  this.renderBuffer = function (a, b, c, d, e, f) {
    if (!1 !== d.visible) {
      var g,
      h,
      c = K(a, b, c, d, f),
      b = c.attributes,
      a = !1,
      c = 16777215 * e.id + 2 * c.id + (d.wireframe ? 1 : 0);
      c !== ba && (ba = c, a = !0);
      a && l();
      if (!d.morphTargets && 0 <= b.position) a && (j.bindBuffer(j.ARRAY_BUFFER, e.__webglVertexBuffer), k(b.position), j.vertexAttribPointer(b.position, 3, j.FLOAT, !1, 0, 0));
       else if (f.morphTargetBase) {
        c = d.program.attributes;
        - 1 !== f.morphTargetBase && 0 <= c.position ? (j.bindBuffer(j.ARRAY_BUFFER, e.__webglMorphTargetsBuffers[f.morphTargetBase]), k(c.position), j.vertexAttribPointer(c.position, 3, j.FLOAT, !1, 0, 0)) : 0 <= c.position && (j.bindBuffer(j.ARRAY_BUFFER, e.__webglVertexBuffer), k(c.position), j.vertexAttribPointer(c.position, 3, j.FLOAT, !1, 0, 0));
        if (f.morphTargetForcedOrder.length) {
          var i = 0;
          h = f.morphTargetForcedOrder;
          for (g = f.morphTargetInfluences; i < d.numSupportedMorphTargets && i < h.length; ) 0 <= c['morphTarget' + i] && (j.bindBuffer(j.ARRAY_BUFFER, e.__webglMorphTargetsBuffers[h[i]]), k(c['morphTarget' + i]), j.vertexAttribPointer(c['morphTarget' + i], 3, j.FLOAT, !1, 0, 0)),
          0 <= c['morphNormal' + i] && d.morphNormals && (j.bindBuffer(j.ARRAY_BUFFER, e.__webglMorphNormalsBuffers[h[i]]), k(c['morphNormal' + i]), j.vertexAttribPointer(c['morphNormal' + i], 3, j.FLOAT, !1, 0, 0)),
          f.__webglMorphTargetInfluences[i] = g[h[i]],
          i++
        } else {
          h = [
          ];
          g = f.morphTargetInfluences;
          var m,
          n = g.length;
          for (m = 0; m < n; m++) i = g[m],
          0 < i && h.push([i,
          m]);
          h.length > d.numSupportedMorphTargets ? (h.sort(p), h.length = d.numSupportedMorphTargets) : h.length > d.numSupportedMorphNormals ? h.sort(p) : 0 === h.length && h.push([0,
          0]);
          for (i = 0; i < d.numSupportedMorphTargets; ) h[i] ? (m = h[i][1], 0 <=
          c['morphTarget' + i] && (j.bindBuffer(j.ARRAY_BUFFER, e.__webglMorphTargetsBuffers[m]), k(c['morphTarget' + i]), j.vertexAttribPointer(c['morphTarget' + i], 3, j.FLOAT, !1, 0, 0)), 0 <= c['morphNormal' + i] && d.morphNormals && (j.bindBuffer(j.ARRAY_BUFFER, e.__webglMorphNormalsBuffers[m]), k(c['morphNormal' + i]), j.vertexAttribPointer(c['morphNormal' + i], 3, j.FLOAT, !1, 0, 0)), f.__webglMorphTargetInfluences[i] = g[m]) : f.__webglMorphTargetInfluences[i] = 0,
          i++
        }
        null !== d.program.uniforms.morphTargetInfluences && j.uniform1fv(d.program.uniforms.morphTargetInfluences, f.__webglMorphTargetInfluences)
      }
      if (a) {
        if (e.__webglCustomAttributesList) {
          g = 0;
          for (h = e.__webglCustomAttributesList.length; g < h; g++) c = e.__webglCustomAttributesList[g],
          0 <= b[c.buffer.belongsToAttribute] && (j.bindBuffer(j.ARRAY_BUFFER, c.buffer), k(b[c.buffer.belongsToAttribute]), j.vertexAttribPointer(b[c.buffer.belongsToAttribute], c.size, j.FLOAT, !1, 0, 0))
        }
        0 <= b.color && (j.bindBuffer(j.ARRAY_BUFFER, e.__webglColorBuffer), k(b.color), j.vertexAttribPointer(b.color, 3, j.FLOAT, !1, 0, 0));
        0 <= b.normal && (j.bindBuffer(j.ARRAY_BUFFER, e.__webglNormalBuffer), k(b.normal), j.vertexAttribPointer(b.normal, 3, j.FLOAT, !1, 0, 0));
        0 <= b.tangent && (j.bindBuffer(j.ARRAY_BUFFER, e.__webglTangentBuffer), k(b.tangent), j.vertexAttribPointer(b.tangent, 4, j.FLOAT, !1, 0, 0));
        0 <= b.uv && (j.bindBuffer(j.ARRAY_BUFFER, e.__webglUVBuffer), k(b.uv), j.vertexAttribPointer(b.uv, 2, j.FLOAT, !1, 0, 0));
        0 <= b.uv2 && (j.bindBuffer(j.ARRAY_BUFFER, e.__webglUV2Buffer), k(b.uv2), j.vertexAttribPointer(b.uv2, 2, j.FLOAT, !1, 0, 0));
        d.skinning && (0 <= b.skinIndex && 0 <= b.skinWeight) && (j.bindBuffer(j.ARRAY_BUFFER, e.__webglSkinIndicesBuffer), k(b.skinIndex), j.vertexAttribPointer(b.skinIndex, 4, j.FLOAT, !1, 0, 0), j.bindBuffer(j.ARRAY_BUFFER, e.__webglSkinWeightsBuffer), k(b.skinWeight), j.vertexAttribPointer(b.skinWeight, 4, j.FLOAT, !1, 0, 0));
        0 <= b.lineDistance && (j.bindBuffer(j.ARRAY_BUFFER, e.__webglLineDistanceBuffer), k(b.lineDistance), j.vertexAttribPointer(b.lineDistance, 1, j.FLOAT, !1, 0, 0))
      }
      f instanceof THREE.Mesh ? (d.wireframe ? (d = d.wireframeLinewidth, d !== va && (j.lineWidth(d), va = d), a && j.bindBuffer(j.ELEMENT_ARRAY_BUFFER, e.__webglLineBuffer), j.drawElements(j.LINES, e.__webglLineCount, j.UNSIGNED_SHORT, 0)) : (a && j.bindBuffer(j.ELEMENT_ARRAY_BUFFER, e.__webglFaceBuffer), j.drawElements(j.TRIANGLES, e.__webglFaceCount, j.UNSIGNED_SHORT, 0)), H.info.render.calls++, H.info.render.vertices += e.__webglFaceCount, H.info.render.faces += e.__webglFaceCount / 3) : f instanceof THREE.Line ? (f = f.type === THREE.LineStrip ? j.LINE_STRIP : j.LINES, d = d.linewidth, d !== va && (j.lineWidth(d), va = d), j.drawArrays(f, 0, e.__webglLineCount), H.info.render.calls++) : f instanceof THREE.ParticleSystem ? (j.drawArrays(j.POINTS, 0, e.__webglParticleCount), H.info.render.calls++, H.info.render.points += e.__webglParticleCount) : f instanceof THREE.Ribbon && (j.drawArrays(j.TRIANGLE_STRIP, 0, e.__webglVertexCount), H.info.render.calls++)
    }
  };
  this.render = function (a, b, c, d) {
    if (!1 === b instanceof THREE.Camera) console.error('THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.');
     else {
      var e,
      f,
      g,
      h,
      i = a.__lights,
      k = a.fog;
      W = - 1;
      Fb = !0;
      this.autoUpdateScene && a.updateMatrixWorld();
      void 0 === b.parent && b.updateMatrixWorld();
      b.matrixWorldInverse.getInverse(b.matrixWorld);
      rb.multiply(b.projectionMatrix, b.matrixWorldInverse);
      Db.setFromMatrix(rb);
      this.autoUpdateObjects && this.initWebGLObjects(a);
      s(this.renderPluginsPre, a, b);
      H.info.render.calls = 0;
      H.info.render.vertices = 0;
      H.info.render.faces = 0;
      H.info.render.points = 0;
      this.setRenderTarget(c);
      (this.autoClear || d) && this.clear(this.autoClearColor, this.autoClearDepth, this.autoClearStencil);
      h = a.__webglObjects;
      d = 0;
      for (e = h.length; d < e; d++) if (f = h[d], g = f.object, f.render = !1, g.visible && (!(g instanceof THREE.Mesh || g instanceof THREE.ParticleSystem) || !g.frustumCulled || Db.contains(g))) {
        B(g, b);
        var l = f,
        p = l.buffer,
        r = void 0,
        t = r = void 0,
        t = l.object.material;
        if (t instanceof THREE.MeshFaceMaterial) r = p.materialIndex,
        r = t.materials[r],
        r.transparent ? (l.transparent = r, l.opaque = null) : (l.opaque = r, l.transparent = null);
         else if (r = t) r.transparent ? (l.transparent = r, l.opaque = null) : (l.opaque = r, l.transparent = null);
        f.render = !0;
        !0 === this.sortObjects && (null !== g.renderDepth ? f.z = g.renderDepth : (Nb.copy(g.matrixWorld.getPosition()), rb.multiplyVector3(Nb), f.z = Nb.z), f.id = g.id)
      }
      this.sortObjects && h.sort(m);
      h = a.__webglObjectsImmediate;
      d = 0;
      for (e = h.length; d < e; d++) f = h[d],
      g = f.object,
      g.visible && (B(g, b), g = f.object.material, g.transparent ? (f.transparent = g, f.opaque = null) : (f.opaque = g, f.transparent = null));
      a.overrideMaterial ? (d = a.overrideMaterial, this.setBlending(d.blending, d.blendEquation, d.blendSrc, d.blendDst), this.setDepthTest(d.depthTest), this.setDepthWrite(d.depthWrite), G(d.polygonOffset, d.polygonOffsetFactor, d.polygonOffsetUnits), q(a.__webglObjects, !1, '', b, i, k, !0, d), n(a.__webglObjectsImmediate, '', b, i, k, !1, d)) : (d = null, this.setBlending(THREE.NoBlending), q(a.__webglObjects, !0, 'opaque', b, i, k, !1, d), n(a.__webglObjectsImmediate, 'opaque', b, i, k, !1, d), q(a.__webglObjects, !1, 'transparent', b, i, k, !0, d), n(a.__webglObjectsImmediate, 'transparent', b, i, k, !0, d));
      s(this.renderPluginsPost, a, b);
      c && (c.generateMipmaps && c.minFilter !== THREE.NearestFilter && c.minFilter !== THREE.LinearFilter) && (c instanceof THREE.WebGLRenderTargetCube ? (j.bindTexture(j.TEXTURE_CUBE_MAP, c.__webglTexture), j.generateMipmap(j.TEXTURE_CUBE_MAP), j.bindTexture(j.TEXTURE_CUBE_MAP, null)) : (j.bindTexture(j.TEXTURE_2D, c.__webglTexture), j.generateMipmap(j.TEXTURE_2D), j.bindTexture(j.TEXTURE_2D, null)));
      this.setDepthTest(!0);
      this.setDepthWrite(!0)
    }
  };
  this.renderImmediateObject = function (a, b, c, d, e) {
    var f = K(a, b, c, d, e);
    ba = - 1;
    H.setMaterialFaces(d);
    e.immediateRenderCallback ? e.immediateRenderCallback(f, j, Db) : e.render(function (a) {
      H.renderBufferImmediate(a, f, d)
    })
  };
  this.initWebGLObjects = function (a) {
    a.__webglObjects || (a.__webglObjects = [
    ], a.__webglObjectsImmediate = [
    ], a.__webglSprites = [
    ], a.__webglFlares = [
    ]);
    for (; a.__objectsAdded.length; ) {
      var b = a.__objectsAdded[0],
      k = a,
      m = void 0,
      l = void 0,
      n = void 0,
      q = void 0;
      if (!b.__webglInit) if (b.__webglInit = !0, b._modelViewMatrix = new THREE.Matrix4, b._normalMatrix = new THREE.Matrix3, void 0 !== b.geometry && void 0 === b.geometry.__webglInit && (b.geometry.__webglInit = !0, b.geometry.addEventListener('dispose', od)), b instanceof THREE.Mesh) if (l = b.geometry, n = b.material, l instanceof THREE.Geometry) {
        if (void 0 === l.geometryGroups) {
          var s = l,
          z = void 0,
          A = void 0,
          B = void 0,
          C = void 0,
          E = void 0,
          D = void 0,
          G = {
          },
          I = s.morphTargets.length,
          J = s.morphNormals.length,
          K = n instanceof THREE.MeshFaceMaterial;
          s.geometryGroups = {
          };
          z = 0;
          for (A = s.faces.length; z < A; z++) B = s.faces[z],
          C = K ? B.materialIndex : 0,
          void 0 === G[C] && (G[C] = {
            hash: C,
            counter: 0
          }),
          D = G[C].hash + '_' + G[C].counter,
          void 0 === s.geometryGroups[D] && (s.geometryGroups[D] = {
            faces3: [
            ],
            faces4: [
            ],
            materialIndex: C,
            vertices: 0,
            numMorphTargets: I,
            numMorphNormals: J
          }),
          E = B instanceof THREE.Face3 ? 3 : 4,
          65535 < s.geometryGroups[D].vertices +
          E && (G[C].counter += 1, D = G[C].hash + '_' + G[C].counter, void 0 === s.geometryGroups[D] && (s.geometryGroups[D] = {
            faces3: [
            ],
            faces4: [
            ],
            materialIndex: C,
            vertices: 0,
            numMorphTargets: I,
            numMorphNormals: J
          })),
          B instanceof THREE.Face3 ? s.geometryGroups[D].faces3.push(z) : s.geometryGroups[D].faces4.push(z),
          s.geometryGroups[D].vertices += E;
          s.geometryGroupsList = [
          ];
          var M = void 0;
          for (M in s.geometryGroups) s.geometryGroups[M].id = Na++,
          s.geometryGroupsList.push(s.geometryGroups[M])
        }
        for (m in l.geometryGroups) if (q = l.geometryGroups[m], !q.__webglVertexBuffer) {
          var L = q;
          L.__webglVertexBuffer = j.createBuffer();
          L.__webglNormalBuffer = j.createBuffer();
          L.__webglTangentBuffer = j.createBuffer();
          L.__webglColorBuffer = j.createBuffer();
          L.__webglUVBuffer = j.createBuffer();
          L.__webglUV2Buffer = j.createBuffer();
          L.__webglSkinIndicesBuffer = j.createBuffer();
          L.__webglSkinWeightsBuffer = j.createBuffer();
          L.__webglFaceBuffer = j.createBuffer();
          L.__webglLineBuffer = j.createBuffer();
          var N = void 0,
          W = void 0;
          if (L.numMorphTargets) {
            L.__webglMorphTargetsBuffers = [
            ];
            N = 0;
            for (W = L.numMorphTargets; N < W; N++) L.__webglMorphTargetsBuffers.push(j.createBuffer())
          }
          if (L.numMorphNormals) {
            L.__webglMorphNormalsBuffers = [
            ];
            N = 0;
            for (W = L.numMorphNormals; N < W; N++) L.__webglMorphNormalsBuffers.push(j.createBuffer())
          }
          H.info.memory.geometries++;
          d(q, b);
          l.verticesNeedUpdate = !0;
          l.morphTargetsNeedUpdate = !0;
          l.elementsNeedUpdate = !0;
          l.uvsNeedUpdate = !0;
          l.normalsNeedUpdate = !0;
          l.tangentsNeedUpdate = !0;
          l.colorsNeedUpdate = !0
        }
      } else l instanceof THREE.BufferGeometry && h(l);
       else if (b instanceof THREE.Ribbon) {
        if (l = b.geometry, !l.__webglVertexBuffer) {
          var ba = l;
          ba.__webglVertexBuffer = j.createBuffer();
          ba.__webglColorBuffer = j.createBuffer();
          ba.__webglNormalBuffer = j.createBuffer();
          H.info.memory.geometries++;
          var P = l,
          ja = b,
          T = P.vertices.length;
          P.__vertexArray = new Float32Array(3 * T);
          P.__colorArray = new Float32Array(3 * T);
          P.__normalArray = new Float32Array(3 * T);
          P.__webglVertexCount = T;
          c(P, ja);
          l.verticesNeedUpdate = !0;
          l.colorsNeedUpdate = !0;
          l.normalsNeedUpdate = !0
        }
      } else if (b instanceof THREE.Line) {
        if (l = b.geometry, !l.__webglVertexBuffer) {
          var V = l;
          V.__webglVertexBuffer = j.createBuffer();
          V.__webglColorBuffer = j.createBuffer();
          V.__webglLineDistanceBuffer = j.createBuffer();
          H.info.memory.geometries++;
          var ha = l,
          Y = b,
          ia = ha.vertices.length;
          ha.__vertexArray = new Float32Array(3 * ia);
          ha.__colorArray = new Float32Array(3 * ia);
          ha.__lineDistanceArray = new Float32Array(1 * ia);
          ha.__webglLineCount = ia;
          c(ha, Y);
          l.verticesNeedUpdate = !0;
          l.colorsNeedUpdate = !0;
          l.lineDistancesNeedUpdate = !0
        }
      } else if (b instanceof THREE.ParticleSystem && (l = b.geometry, !l.__webglVertexBuffer)) if (l instanceof THREE.Geometry) {
        var Z = l;
        Z.__webglVertexBuffer = j.createBuffer();
        Z.__webglColorBuffer = j.createBuffer();
        H.info.memory.geometries++;
        var ka = l,
        qa = b,
        fa = ka.vertices.length;
        ka.__vertexArray = new Float32Array(3 * fa);
        ka.__colorArray = new Float32Array(3 * fa);
        ka.__sortArray = [
        ];
        ka.__webglParticleCount = fa;
        c(ka, qa);
        l.verticesNeedUpdate = !0;
        l.colorsNeedUpdate = !0
      } else l instanceof THREE.BufferGeometry && h(l);
      if (!b.__webglActive) {
        if (b instanceof THREE.Mesh) if (l = b.geometry, l instanceof THREE.BufferGeometry) r(k.__webglObjects, l, b);
         else for (m in l.geometryGroups) q = l.geometryGroups[m],
        r(k.__webglObjects, q, b);
         else b instanceof THREE.Ribbon || b instanceof THREE.Line || b instanceof THREE.ParticleSystem ? (l = b.geometry, r(k.__webglObjects, l, b)) : b instanceof THREE.ImmediateRenderObject || b.immediateRenderCallback ? k.__webglObjectsImmediate.push({
          object: b,
          opaque: null,
          transparent: null
        }) : b instanceof THREE.Sprite ? k.__webglSprites.push(b) : b instanceof THREE.LensFlare && k.__webglFlares.push(b);
        b.__webglActive = !0
      }
      a.__objectsAdded.splice(0, 1)
    }
    for (; a.__objectsRemoved.length; ) {
      var $ = a.__objectsRemoved[0],
      ga = a;
      $ instanceof THREE.Mesh || $ instanceof THREE.ParticleSystem || $ instanceof THREE.Ribbon || $ instanceof THREE.Line ? x(ga.__webglObjects, $) : $ instanceof THREE.Sprite ? t(ga.__webglSprites, $) : $ instanceof THREE.LensFlare ? t(ga.__webglFlares, $) : ($ instanceof THREE.ImmediateRenderObject || $.immediateRenderCallback) && x(ga.__webglObjectsImmediate, $);
      $.__webglActive = !1;
      a.__objectsRemoved.splice(0, 1)
    }
    for (var sa = 0, ta = a.__webglObjects.length; sa < ta; sa++) {
      var ma = a.__webglObjects[sa].object,
      U = ma.geometry,
      ya = void 0,
      oa = void 0,
      la = void 0;
      if (ma instanceof THREE.Mesh) if (U instanceof THREE.BufferGeometry) (U.verticesNeedUpdate || U.elementsNeedUpdate || U.uvsNeedUpdate || U.normalsNeedUpdate || U.colorsNeedUpdate || U.tangentsNeedUpdate) && i(U, j.DYNAMIC_DRAW, !U.dynamic),
      U.verticesNeedUpdate = !1,
      U.elementsNeedUpdate = !1,
      U.uvsNeedUpdate = !1,
      U.normalsNeedUpdate = !1,
      U.colorsNeedUpdate = !1,
      U.tangentsNeedUpdate = !1;
       else {
        for (var Ea = 0, Pa = U.geometryGroupsList.length; Ea < Pa; Ea++) if (ya = U.geometryGroupsList[Ea], la = e(ma, ya), U.buffersNeedUpdate && d(ya, ma), oa = la.attributes && v(la), U.verticesNeedUpdate || U.morphTargetsNeedUpdate || U.elementsNeedUpdate || U.uvsNeedUpdate || U.normalsNeedUpdate || U.colorsNeedUpdate || U.tangentsNeedUpdate || oa) {
          var ua = ya,
          Ma = ma,
          va = j.DYNAMIC_DRAW,
          Sa = !U.dynamic,
          Ha = la;
          if (ua.__inittedArrays) {
            var gb = f(Ha),
            eb = Ha.vertexColors ? Ha.vertexColors : !1,
            jb = g(Ha),
            kb = gb === THREE.SmoothShading,
            F = void 0,
            X = void 0,
            Ua = void 0,
            O = void 0,
            nb = void 0,
            Va = void 0,
            Qa = void 0,
            qb = void 0,
            ab = void 0,
            ob = void 0,
            pb = void 0,
            Q = void 0,
            R = void 0,
            S = void 0,
            ra = void 0,
            Ya = void 0,
            Za = void 0,
            $a = void 0,
            tb = void 0,
            fb = void 0,
            Qb = void 0,
            Rb = void 0,
            zb = void 0,
            Sb = void 0,
            Tb = void 0,
            Ub = void 0,
            Bb = void 0,
            Vb = void 0,
            Wb = void 0,
            Xb = void 0,
            Cb = void 0,
            Yb = void 0,
            Zb = void 0,
            $b = void 0,
            Eb = void 0,
            za = void 0,
            Ob = void 0,
            ub = void 0,
            Db = void 0,
            Fb = void 0,
            bb = void 0,
            gc = void 0,
            Wa = void 0,
            Xa = void 0,
            mc = void 0,
            hc = void 0,
            Oa = 0,
            Ta = 0,
            ic = 0,
            jc = 0,
            Gb = 0,
            lb = 0,
            Ca = 0,
            sb = 0,
            Ra = 0,
            ca = 0,
            na = 0,
            y = 0,
            Aa = void 0,
            cb = ua.__vertexArray,
            Kb = ua.__uvArray,
            Pb = ua.__uv2Array,
            Hb = ua.__normalArray,
            Ia = ua.__tangentArray,
            db = ua.__colorArray,
            Ja = ua.__skinIndexArray,
            Ka = ua.__skinWeightArray,
            ed = ua.__morphTargetsArrays,
            fd = ua.__morphNormalsArrays,
            gd = ua.__webglCustomAttributesList,
            u = void 0,
            ac = ua.__faceArray,
            Ab = ua.__lineArray,
            vb = Ma.geometry,
            Hc = vb.elementsNeedUpdate,
            xc = vb.uvsNeedUpdate,
            Ic = vb.normalsNeedUpdate,
            Jc = vb.tangentsNeedUpdate,
            Kc = vb.colorsNeedUpdate,
            Lc = vb.morphTargetsNeedUpdate,
            qc = vb.vertices,
            wa = ua.faces3,
            xa = ua.faces4,
            mb = vb.faces,
            hd = vb.faceVertexUvs[0],
            id = vb.faceVertexUvs[1],
            rc = vb.skinIndices,
            nc = vb.skinWeights,
            oc = vb.morphTargets,
            Mc = vb.morphNormals;
            if (vb.verticesNeedUpdate) {
              F = 0;
              for (X = wa.length; F < X; F++) O = mb[wa[F]],
              Q = qc[O.a],
              R = qc[O.b],
              S = qc[O.c],
              cb[Ta] = Q.x,
              cb[Ta + 1] = Q.y,
              cb[Ta + 2] = Q.z,
              cb[Ta + 3] = R.x,
              cb[Ta + 4] = R.y,
              cb[Ta + 5] = R.z,
              cb[Ta + 6] = S.x,
              cb[Ta + 7] = S.y,
              cb[Ta + 8] = S.z,
              Ta += 9;
              F = 0;
              for (X = xa.length; F < X; F++) O = mb[xa[F]],
              Q = qc[O.a],
              R = qc[O.b],
              S = qc[O.c],
              ra = qc[O.d],
              cb[Ta] = Q.x,
              cb[Ta + 1] = Q.y,
              cb[Ta + 2] = Q.z,
              cb[Ta + 3] = R.x,
              cb[Ta + 4] = R.y,
              cb[Ta + 5] = R.z,
              cb[Ta + 6] = S.x,
              cb[Ta + 7] = S.y,
              cb[Ta + 8] = S.z,
              cb[Ta + 9] = ra.x,
              cb[Ta + 10] = ra.y,
              cb[Ta + 11] = ra.z,
              Ta += 12;
              j.bindBuffer(j.ARRAY_BUFFER, ua.__webglVertexBuffer);
              j.bufferData(j.ARRAY_BUFFER, cb, va)
            }
            if (Lc) {
              bb = 0;
              for (gc = oc.length; bb < gc; bb++) {
                F = na = 0;
                for (X = wa.length; F < X; F++) mc = wa[F],
                O = mb[mc],
                Q = oc[bb].vertices[O.a],
                R = oc[bb].vertices[O.b],
                S = oc[bb].vertices[O.c],
                Wa = ed[bb],
                Wa[na] = Q.x,
                Wa[na + 1] = Q.y,
                Wa[na + 2] = Q.z,
                Wa[na + 3] = R.x,
                Wa[na + 4] = R.y,
                Wa[na + 5] = R.z,
                Wa[na + 6] = S.x,
                Wa[na + 7] = S.y,
                Wa[na + 8] = S.z,
                Ha.morphNormals && (kb ? (hc = Mc[bb].vertexNormals[mc], fb = hc.a, Qb = hc.b, Rb = hc.c) : Rb = Qb = fb = Mc[bb].faceNormals[mc], Xa = fd[bb], Xa[na] = fb.x, Xa[na + 1] = fb.y, Xa[na + 2] = fb.z, Xa[na +
                3] = Qb.x, Xa[na + 4] = Qb.y, Xa[na + 5] = Qb.z, Xa[na + 6] = Rb.x, Xa[na + 7] = Rb.y, Xa[na + 8] = Rb.z),
                na += 9;
                F = 0;
                for (X = xa.length; F < X; F++) mc = xa[F],
                O = mb[mc],
                Q = oc[bb].vertices[O.a],
                R = oc[bb].vertices[O.b],
                S = oc[bb].vertices[O.c],
                ra = oc[bb].vertices[O.d],
                Wa = ed[bb],
                Wa[na] = Q.x,
                Wa[na + 1] = Q.y,
                Wa[na + 2] = Q.z,
                Wa[na + 3] = R.x,
                Wa[na + 4] = R.y,
                Wa[na + 5] = R.z,
                Wa[na + 6] = S.x,
                Wa[na + 7] = S.y,
                Wa[na + 8] = S.z,
                Wa[na + 9] = ra.x,
                Wa[na + 10] = ra.y,
                Wa[na + 11] = ra.z,
                Ha.morphNormals && (kb ? (hc = Mc[bb].vertexNormals[mc], fb = hc.a, Qb = hc.b, Rb = hc.c, zb = hc.d) : zb = Rb = Qb = fb = Mc[bb].faceNormals[mc], Xa = fd[bb], Xa[na] = fb.x, Xa[na + 1] = fb.y, Xa[na + 2] = fb.z, Xa[na + 3] = Qb.x, Xa[na + 4] = Qb.y, Xa[na + 5] = Qb.z, Xa[na + 6] = Rb.x, Xa[na + 7] = Rb.y, Xa[na + 8] = Rb.z, Xa[na + 9] = zb.x, Xa[na + 10] = zb.y, Xa[na + 11] = zb.z),
                na += 12;
                j.bindBuffer(j.ARRAY_BUFFER, ua.__webglMorphTargetsBuffers[bb]);
                j.bufferData(j.ARRAY_BUFFER, ed[bb], va);
                Ha.morphNormals && (j.bindBuffer(j.ARRAY_BUFFER, ua.__webglMorphNormalsBuffers[bb]), j.bufferData(j.ARRAY_BUFFER, fd[bb], va))
              }
            }
            if (nc.length) {
              F = 0;
              for (X = wa.length; F < X; F++) O = mb[wa[F]],
              Vb = nc[O.a],
              Wb = nc[O.b],
              Xb = nc[O.c],
              Ka[ca] = Vb.x,
              Ka[ca + 1] = Vb.y,
              Ka[ca + 2] = Vb.z,
              Ka[ca + 3] = Vb.w,
              Ka[ca + 4] = Wb.x,
              Ka[ca + 5] = Wb.y,
              Ka[ca + 6] = Wb.z,
              Ka[ca + 7] = Wb.w,
              Ka[ca + 8] = Xb.x,
              Ka[ca + 9] = Xb.y,
              Ka[ca + 10] = Xb.z,
              Ka[ca + 11] = Xb.w,
              Yb = rc[O.a],
              Zb = rc[O.b],
              $b = rc[O.c],
              Ja[ca] = Yb.x,
              Ja[ca + 1] = Yb.y,
              Ja[ca + 2] = Yb.z,
              Ja[ca + 3] = Yb.w,
              Ja[ca + 4] = Zb.x,
              Ja[ca + 5] = Zb.y,
              Ja[ca + 6] = Zb.z,
              Ja[ca + 7] = Zb.w,
              Ja[ca + 8] = $b.x,
              Ja[ca + 9] = $b.y,
              Ja[ca + 10] = $b.z,
              Ja[ca + 11] = $b.w,
              ca += 12;
              F = 0;
              for (X = xa.length; F < X; F++) O = mb[xa[F]],
              Vb = nc[O.a],
              Wb = nc[O.b],
              Xb = nc[O.c],
              Cb = nc[O.d],
              Ka[ca] = Vb.x,
              Ka[ca + 1] = Vb.y,
              Ka[ca + 2] = Vb.z,
              Ka[ca + 3] = Vb.w,
              Ka[ca + 4] = Wb.x,
              Ka[ca + 5] = Wb.y,
              Ka[ca + 6] = Wb.z,
              Ka[ca + 7] = Wb.w,
              Ka[ca + 8] = Xb.x,
              Ka[ca + 9] = Xb.y,
              Ka[ca + 10] = Xb.z,
              Ka[ca + 11] = Xb.w,
              Ka[ca + 12] = Cb.x,
              Ka[ca + 13] = Cb.y,
              Ka[ca + 14] = Cb.z,
              Ka[ca + 15] = Cb.w,
              Yb = rc[O.a],
              Zb = rc[O.b],
              $b = rc[O.c],
              Eb = rc[O.d],
              Ja[ca] = Yb.x,
              Ja[ca + 1] = Yb.y,
              Ja[ca + 2] = Yb.z,
              Ja[ca + 3] = Yb.w,
              Ja[ca + 4] = Zb.x,
              Ja[ca + 5] = Zb.y,
              Ja[ca + 6] = Zb.z,
              Ja[ca + 7] = Zb.w,
              Ja[ca + 8] = $b.x,
              Ja[ca + 9] = $b.y,
              Ja[ca + 10] = $b.z,
              Ja[ca + 11] = $b.w,
              Ja[ca + 12] = Eb.x,
              Ja[ca + 13] = Eb.y,
              Ja[ca + 14] = Eb.z,
              Ja[ca + 15] = Eb.w,
              ca += 16;
              0 < ca && (j.bindBuffer(j.ARRAY_BUFFER, ua.__webglSkinIndicesBuffer), j.bufferData(j.ARRAY_BUFFER, Ja, va), j.bindBuffer(j.ARRAY_BUFFER, ua.__webglSkinWeightsBuffer), j.bufferData(j.ARRAY_BUFFER, Ka, va))
            }
            if (Kc && eb) {
              F = 0;
              for (X = wa.length; F < X; F++) O = mb[wa[F]],
              Qa = O.vertexColors,
              qb = O.color,
              3 === Qa.length && eb === THREE.VertexColors ? (Sb = Qa[0], Tb = Qa[1], Ub = Qa[2]) : Ub = Tb = Sb = qb,
              db[Ra] = Sb.r,
              db[Ra + 1] = Sb.g,
              db[Ra + 2] = Sb.b,
              db[Ra + 3] = Tb.r,
              db[Ra + 4] = Tb.g,
              db[Ra + 5] = Tb.b,
              db[Ra + 6] = Ub.r,
              db[Ra + 7] = Ub.g,
              db[Ra + 8] = Ub.b,
              Ra += 9;
              F = 0;
              for (X = xa.length; F < X; F++) O = mb[xa[F]],
              Qa = O.vertexColors,
              qb = O.color,
              4 === Qa.length && eb === THREE.VertexColors ? (Sb = Qa[0], Tb = Qa[1], Ub = Qa[2], Bb = Qa[3]) : Bb = Ub = Tb = Sb = qb,
              db[Ra] = Sb.r,
              db[Ra + 1] = Sb.g,
              db[Ra + 2] = Sb.b,
              db[Ra + 3] = Tb.r,
              db[Ra + 4] = Tb.g,
              db[Ra + 5] = Tb.b,
              db[Ra + 6] = Ub.r,
              db[Ra + 7] = Ub.g,
              db[Ra + 8] = Ub.b,
              db[Ra + 9] = Bb.r,
              db[Ra + 10] = Bb.g,
              db[Ra + 11] = Bb.b,
              Ra += 12;
              0 < Ra && (j.bindBuffer(j.ARRAY_BUFFER, ua.__webglColorBuffer), j.bufferData(j.ARRAY_BUFFER, db, va))
            }
            if (Jc && vb.hasTangents) {
              F = 0;
              for (X = wa.length; F < X; F++) O = mb[wa[F]],
              ab = O.vertexTangents,
              Ya = ab[0],
              Za = ab[1],
              $a = ab[2],
              Ia[Ca] = Ya.x,
              Ia[Ca + 1] = Ya.y,
              Ia[Ca + 2] = Ya.z,
              Ia[Ca +
              3] = Ya.w,
              Ia[Ca + 4] = Za.x,
              Ia[Ca + 5] = Za.y,
              Ia[Ca + 6] = Za.z,
              Ia[Ca + 7] = Za.w,
              Ia[Ca + 8] = $a.x,
              Ia[Ca + 9] = $a.y,
              Ia[Ca + 10] = $a.z,
              Ia[Ca + 11] = $a.w,
              Ca += 12;
              F = 0;
              for (X = xa.length; F < X; F++) O = mb[xa[F]],
              ab = O.vertexTangents,
              Ya = ab[0],
              Za = ab[1],
              $a = ab[2],
              tb = ab[3],
              Ia[Ca] = Ya.x,
              Ia[Ca + 1] = Ya.y,
              Ia[Ca + 2] = Ya.z,
              Ia[Ca + 3] = Ya.w,
              Ia[Ca + 4] = Za.x,
              Ia[Ca + 5] = Za.y,
              Ia[Ca + 6] = Za.z,
              Ia[Ca + 7] = Za.w,
              Ia[Ca + 8] = $a.x,
              Ia[Ca + 9] = $a.y,
              Ia[Ca + 10] = $a.z,
              Ia[Ca + 11] = $a.w,
              Ia[Ca + 12] = tb.x,
              Ia[Ca + 13] = tb.y,
              Ia[Ca + 14] = tb.z,
              Ia[Ca + 15] = tb.w,
              Ca += 16;
              j.bindBuffer(j.ARRAY_BUFFER, ua.__webglTangentBuffer);
              j.bufferData(j.ARRAY_BUFFER, Ia, va)
            }
            if (Ic && gb) {
              F = 0;
              for (X = wa.length; F < X; F++) if (O = mb[wa[F]], nb = O.vertexNormals, Va = O.normal, 3 === nb.length && kb) for (za = 0; 3 > za; za++) ub = nb[za],
              Hb[lb] = ub.x,
              Hb[lb + 1] = ub.y,
              Hb[lb + 2] = ub.z,
              lb += 3;
               else for (za = 0; 3 > za; za++) Hb[lb] = Va.x,
              Hb[lb + 1] = Va.y,
              Hb[lb + 2] = Va.z,
              lb += 3;
              F = 0;
              for (X = xa.length; F < X; F++) if (O = mb[xa[F]], nb = O.vertexNormals, Va = O.normal, 4 === nb.length && kb) for (za = 0; 4 > za; za++) ub = nb[za],
              Hb[lb] = ub.x,
              Hb[lb + 1] = ub.y,
              Hb[lb + 2] = ub.z,
              lb += 3;
               else for (za = 0; 4 > za; za++) Hb[lb] = Va.x,
              Hb[lb + 1] = Va.y,
              Hb[lb +
              2] = Va.z,
              lb += 3;
              j.bindBuffer(j.ARRAY_BUFFER, ua.__webglNormalBuffer);
              j.bufferData(j.ARRAY_BUFFER, Hb, va)
            }
            if (xc && hd && jb) {
              F = 0;
              for (X = wa.length; F < X; F++) if (Ua = wa[F], ob = hd[Ua], void 0 !== ob) for (za = 0; 3 > za; za++) Db = ob[za],
              Kb[ic] = Db.x,
              Kb[ic + 1] = Db.y,
              ic += 2;
              F = 0;
              for (X = xa.length; F < X; F++) if (Ua = xa[F], ob = hd[Ua], void 0 !== ob) for (za = 0; 4 > za; za++) Db = ob[za],
              Kb[ic] = Db.x,
              Kb[ic + 1] = Db.y,
              ic += 2;
              0 < ic && (j.bindBuffer(j.ARRAY_BUFFER, ua.__webglUVBuffer), j.bufferData(j.ARRAY_BUFFER, Kb, va))
            }
            if (xc && id && jb) {
              F = 0;
              for (X = wa.length; F < X; F++) if (Ua = wa[F], pb = id[Ua], void 0 !== pb) for (za = 0; 3 > za; za++) Fb = pb[za],
              Pb[jc] = Fb.x,
              Pb[jc + 1] = Fb.y,
              jc += 2;
              F = 0;
              for (X = xa.length; F < X; F++) if (Ua = xa[F], pb = id[Ua], void 0 !== pb) for (za = 0; 4 > za; za++) Fb = pb[za],
              Pb[jc] = Fb.x,
              Pb[jc + 1] = Fb.y,
              jc += 2;
              0 < jc && (j.bindBuffer(j.ARRAY_BUFFER, ua.__webglUV2Buffer), j.bufferData(j.ARRAY_BUFFER, Pb, va))
            }
            if (Hc) {
              F = 0;
              for (X = wa.length; F < X; F++) ac[Gb] = Oa,
              ac[Gb + 1] = Oa + 1,
              ac[Gb + 2] = Oa + 2,
              Gb += 3,
              Ab[sb] = Oa,
              Ab[sb + 1] = Oa + 1,
              Ab[sb + 2] = Oa,
              Ab[sb + 3] = Oa + 2,
              Ab[sb + 4] = Oa + 1,
              Ab[sb + 5] = Oa + 2,
              sb += 6,
              Oa += 3;
              F = 0;
              for (X = xa.length; F < X; F++) ac[Gb] = Oa,
              ac[Gb + 1] = Oa + 1,
              ac[Gb + 2] = Oa + 3,
              ac[Gb + 3] = Oa + 1,
              ac[Gb + 4] = Oa + 2,
              ac[Gb + 5] = Oa + 3,
              Gb += 6,
              Ab[sb] = Oa,
              Ab[sb + 1] = Oa + 1,
              Ab[sb + 2] = Oa,
              Ab[sb + 3] = Oa + 3,
              Ab[sb + 4] = Oa + 1,
              Ab[sb + 5] = Oa + 2,
              Ab[sb + 6] = Oa + 2,
              Ab[sb + 7] = Oa + 3,
              sb += 8,
              Oa += 4;
              j.bindBuffer(j.ELEMENT_ARRAY_BUFFER, ua.__webglFaceBuffer);
              j.bufferData(j.ELEMENT_ARRAY_BUFFER, ac, va);
              j.bindBuffer(j.ELEMENT_ARRAY_BUFFER, ua.__webglLineBuffer);
              j.bufferData(j.ELEMENT_ARRAY_BUFFER, Ab, va)
            }
            if (gd) {
              za = 0;
              for (Ob = gd.length; za < Ob; za++) if (u = gd[za], u.__original.needsUpdate) {
                y = 0;
                if (1 === u.size) if (void 0 ===
                u.boundTo || 'vertices' === u.boundTo) {
                  F = 0;
                  for (X = wa.length; F < X; F++) O = mb[wa[F]],
                  u.array[y] = u.value[O.a],
                  u.array[y + 1] = u.value[O.b],
                  u.array[y + 2] = u.value[O.c],
                  y += 3;
                  F = 0;
                  for (X = xa.length; F < X; F++) O = mb[xa[F]],
                  u.array[y] = u.value[O.a],
                  u.array[y + 1] = u.value[O.b],
                  u.array[y + 2] = u.value[O.c],
                  u.array[y + 3] = u.value[O.d],
                  y += 4
                } else {
                  if ('faces' === u.boundTo) {
                    F = 0;
                    for (X = wa.length; F < X; F++) Aa = u.value[wa[F]],
                    u.array[y] = Aa,
                    u.array[y + 1] = Aa,
                    u.array[y + 2] = Aa,
                    y += 3;
                    F = 0;
                    for (X = xa.length; F < X; F++) Aa = u.value[xa[F]],
                    u.array[y] = Aa,
                    u.array[y + 1] = Aa,
                    u.array[y + 2] = Aa,
                    u.array[y + 3] = Aa,
                    y += 4
                  }
                } else if (2 === u.size) if (void 0 === u.boundTo || 'vertices' === u.boundTo) {
                  F = 0;
                  for (X = wa.length; F < X; F++) O = mb[wa[F]],
                  Q = u.value[O.a],
                  R = u.value[O.b],
                  S = u.value[O.c],
                  u.array[y] = Q.x,
                  u.array[y + 1] = Q.y,
                  u.array[y + 2] = R.x,
                  u.array[y + 3] = R.y,
                  u.array[y + 4] = S.x,
                  u.array[y + 5] = S.y,
                  y += 6;
                  F = 0;
                  for (X = xa.length; F < X; F++) O = mb[xa[F]],
                  Q = u.value[O.a],
                  R = u.value[O.b],
                  S = u.value[O.c],
                  ra = u.value[O.d],
                  u.array[y] = Q.x,
                  u.array[y + 1] = Q.y,
                  u.array[y + 2] = R.x,
                  u.array[y + 3] = R.y,
                  u.array[y + 4] = S.x,
                  u.array[y + 5] = S.y,
                  u.array[y +
                  6] = ra.x,
                  u.array[y + 7] = ra.y,
                  y += 8
                } else {
                  if ('faces' === u.boundTo) {
                    F = 0;
                    for (X = wa.length; F < X; F++) S = R = Q = Aa = u.value[wa[F]],
                    u.array[y] = Q.x,
                    u.array[y + 1] = Q.y,
                    u.array[y + 2] = R.x,
                    u.array[y + 3] = R.y,
                    u.array[y + 4] = S.x,
                    u.array[y + 5] = S.y,
                    y += 6;
                    F = 0;
                    for (X = xa.length; F < X; F++) ra = S = R = Q = Aa = u.value[xa[F]],
                    u.array[y] = Q.x,
                    u.array[y + 1] = Q.y,
                    u.array[y + 2] = R.x,
                    u.array[y + 3] = R.y,
                    u.array[y + 4] = S.x,
                    u.array[y + 5] = S.y,
                    u.array[y + 6] = ra.x,
                    u.array[y + 7] = ra.y,
                    y += 8
                  }
                } else if (3 === u.size) {
                  var aa;
                  aa = 'c' === u.type ? [
                    'r',
                    'g',
                    'b'
                  ] : [
                    'x',
                    'y',
                    'z'
                  ];
                  if (void 0 === u.boundTo || 'vertices' === u.boundTo) {
                    F = 0;
                    for (X = wa.length; F < X; F++) O = mb[wa[F]],
                    Q = u.value[O.a],
                    R = u.value[O.b],
                    S = u.value[O.c],
                    u.array[y] = Q[aa[0]],
                    u.array[y + 1] = Q[aa[1]],
                    u.array[y + 2] = Q[aa[2]],
                    u.array[y + 3] = R[aa[0]],
                    u.array[y + 4] = R[aa[1]],
                    u.array[y + 5] = R[aa[2]],
                    u.array[y + 6] = S[aa[0]],
                    u.array[y + 7] = S[aa[1]],
                    u.array[y + 8] = S[aa[2]],
                    y += 9;
                    F = 0;
                    for (X = xa.length; F < X; F++) O = mb[xa[F]],
                    Q = u.value[O.a],
                    R = u.value[O.b],
                    S = u.value[O.c],
                    ra = u.value[O.d],
                    u.array[y] = Q[aa[0]],
                    u.array[y + 1] = Q[aa[1]],
                    u.array[y + 2] = Q[aa[2]],
                    u.array[y + 3] = R[aa[0]],
                    u.array[y +
                    4] = R[aa[1]],
                    u.array[y + 5] = R[aa[2]],
                    u.array[y + 6] = S[aa[0]],
                    u.array[y + 7] = S[aa[1]],
                    u.array[y + 8] = S[aa[2]],
                    u.array[y + 9] = ra[aa[0]],
                    u.array[y + 10] = ra[aa[1]],
                    u.array[y + 11] = ra[aa[2]],
                    y += 12
                  } else if ('faces' === u.boundTo) {
                    F = 0;
                    for (X = wa.length; F < X; F++) S = R = Q = Aa = u.value[wa[F]],
                    u.array[y] = Q[aa[0]],
                    u.array[y + 1] = Q[aa[1]],
                    u.array[y + 2] = Q[aa[2]],
                    u.array[y + 3] = R[aa[0]],
                    u.array[y + 4] = R[aa[1]],
                    u.array[y + 5] = R[aa[2]],
                    u.array[y + 6] = S[aa[0]],
                    u.array[y + 7] = S[aa[1]],
                    u.array[y + 8] = S[aa[2]],
                    y += 9;
                    F = 0;
                    for (X = xa.length; F < X; F++) ra = S = R = Q = Aa = u.value[xa[F]],
                    u.array[y] = Q[aa[0]],
                    u.array[y + 1] = Q[aa[1]],
                    u.array[y + 2] = Q[aa[2]],
                    u.array[y + 3] = R[aa[0]],
                    u.array[y + 4] = R[aa[1]],
                    u.array[y + 5] = R[aa[2]],
                    u.array[y + 6] = S[aa[0]],
                    u.array[y + 7] = S[aa[1]],
                    u.array[y + 8] = S[aa[2]],
                    u.array[y + 9] = ra[aa[0]],
                    u.array[y + 10] = ra[aa[1]],
                    u.array[y + 11] = ra[aa[2]],
                    y += 12
                  } else if ('faceVertices' === u.boundTo) {
                    F = 0;
                    for (X = wa.length; F < X; F++) Aa = u.value[wa[F]],
                    Q = Aa[0],
                    R = Aa[1],
                    S = Aa[2],
                    u.array[y] = Q[aa[0]],
                    u.array[y + 1] = Q[aa[1]],
                    u.array[y + 2] = Q[aa[2]],
                    u.array[y + 3] = R[aa[0]],
                    u.array[y + 4] = R[aa[1]],
                    u.array[y + 5] = R[aa[2]],
                    u.array[y + 6] = S[aa[0]],
                    u.array[y + 7] = S[aa[1]],
                    u.array[y + 8] = S[aa[2]],
                    y += 9;
                    F = 0;
                    for (X = xa.length; F < X; F++) Aa = u.value[xa[F]],
                    Q = Aa[0],
                    R = Aa[1],
                    S = Aa[2],
                    ra = Aa[3],
                    u.array[y] = Q[aa[0]],
                    u.array[y + 1] = Q[aa[1]],
                    u.array[y + 2] = Q[aa[2]],
                    u.array[y + 3] = R[aa[0]],
                    u.array[y + 4] = R[aa[1]],
                    u.array[y + 5] = R[aa[2]],
                    u.array[y + 6] = S[aa[0]],
                    u.array[y + 7] = S[aa[1]],
                    u.array[y + 8] = S[aa[2]],
                    u.array[y + 9] = ra[aa[0]],
                    u.array[y + 10] = ra[aa[1]],
                    u.array[y + 11] = ra[aa[2]],
                    y += 12
                  }
                } else if (4 === u.size) if (void 0 === u.boundTo || 'vertices' === u.boundTo) {
                  F = 0;
                  for (X = wa.length; F <
                  X; F++) O = mb[wa[F]],
                  Q = u.value[O.a],
                  R = u.value[O.b],
                  S = u.value[O.c],
                  u.array[y] = Q.x,
                  u.array[y + 1] = Q.y,
                  u.array[y + 2] = Q.z,
                  u.array[y + 3] = Q.w,
                  u.array[y + 4] = R.x,
                  u.array[y + 5] = R.y,
                  u.array[y + 6] = R.z,
                  u.array[y + 7] = R.w,
                  u.array[y + 8] = S.x,
                  u.array[y + 9] = S.y,
                  u.array[y + 10] = S.z,
                  u.array[y + 11] = S.w,
                  y += 12;
                  F = 0;
                  for (X = xa.length; F < X; F++) O = mb[xa[F]],
                  Q = u.value[O.a],
                  R = u.value[O.b],
                  S = u.value[O.c],
                  ra = u.value[O.d],
                  u.array[y] = Q.x,
                  u.array[y + 1] = Q.y,
                  u.array[y + 2] = Q.z,
                  u.array[y + 3] = Q.w,
                  u.array[y + 4] = R.x,
                  u.array[y + 5] = R.y,
                  u.array[y + 6] = R.z,
                  u.array[y +
                  7] = R.w,
                  u.array[y + 8] = S.x,
                  u.array[y + 9] = S.y,
                  u.array[y + 10] = S.z,
                  u.array[y + 11] = S.w,
                  u.array[y + 12] = ra.x,
                  u.array[y + 13] = ra.y,
                  u.array[y + 14] = ra.z,
                  u.array[y + 15] = ra.w,
                  y += 16
                } else if ('faces' === u.boundTo) {
                  F = 0;
                  for (X = wa.length; F < X; F++) S = R = Q = Aa = u.value[wa[F]],
                  u.array[y] = Q.x,
                  u.array[y + 1] = Q.y,
                  u.array[y + 2] = Q.z,
                  u.array[y + 3] = Q.w,
                  u.array[y + 4] = R.x,
                  u.array[y + 5] = R.y,
                  u.array[y + 6] = R.z,
                  u.array[y + 7] = R.w,
                  u.array[y + 8] = S.x,
                  u.array[y + 9] = S.y,
                  u.array[y + 10] = S.z,
                  u.array[y + 11] = S.w,
                  y += 12;
                  F = 0;
                  for (X = xa.length; F < X; F++) ra = S = R = Q = Aa = u.value[xa[F]],
                  u.array[y] = Q.x,
                  u.array[y + 1] = Q.y,
                  u.array[y + 2] = Q.z,
                  u.array[y + 3] = Q.w,
                  u.array[y + 4] = R.x,
                  u.array[y + 5] = R.y,
                  u.array[y + 6] = R.z,
                  u.array[y + 7] = R.w,
                  u.array[y + 8] = S.x,
                  u.array[y + 9] = S.y,
                  u.array[y + 10] = S.z,
                  u.array[y + 11] = S.w,
                  u.array[y + 12] = ra.x,
                  u.array[y + 13] = ra.y,
                  u.array[y + 14] = ra.z,
                  u.array[y + 15] = ra.w,
                  y += 16
                } else if ('faceVertices' === u.boundTo) {
                  F = 0;
                  for (X = wa.length; F < X; F++) Aa = u.value[wa[F]],
                  Q = Aa[0],
                  R = Aa[1],
                  S = Aa[2],
                  u.array[y] = Q.x,
                  u.array[y + 1] = Q.y,
                  u.array[y + 2] = Q.z,
                  u.array[y + 3] = Q.w,
                  u.array[y + 4] = R.x,
                  u.array[y + 5] = R.y,
                  u.array[y +
                  6] = R.z,
                  u.array[y + 7] = R.w,
                  u.array[y + 8] = S.x,
                  u.array[y + 9] = S.y,
                  u.array[y + 10] = S.z,
                  u.array[y + 11] = S.w,
                  y += 12;
                  F = 0;
                  for (X = xa.length; F < X; F++) Aa = u.value[xa[F]],
                  Q = Aa[0],
                  R = Aa[1],
                  S = Aa[2],
                  ra = Aa[3],
                  u.array[y] = Q.x,
                  u.array[y + 1] = Q.y,
                  u.array[y + 2] = Q.z,
                  u.array[y + 3] = Q.w,
                  u.array[y + 4] = R.x,
                  u.array[y + 5] = R.y,
                  u.array[y + 6] = R.z,
                  u.array[y + 7] = R.w,
                  u.array[y + 8] = S.x,
                  u.array[y + 9] = S.y,
                  u.array[y + 10] = S.z,
                  u.array[y + 11] = S.w,
                  u.array[y + 12] = ra.x,
                  u.array[y + 13] = ra.y,
                  u.array[y + 14] = ra.z,
                  u.array[y + 15] = ra.w,
                  y += 16
                }
                j.bindBuffer(j.ARRAY_BUFFER, u.buffer);
                j.bufferData(j.ARRAY_BUFFER, u.array, va)
              }
            }
            Sa && (delete ua.__inittedArrays, delete ua.__colorArray, delete ua.__normalArray, delete ua.__tangentArray, delete ua.__uvArray, delete ua.__uv2Array, delete ua.__faceArray, delete ua.__vertexArray, delete ua.__lineArray, delete ua.__skinIndexArray, delete ua.__skinWeightArray)
          }
        }
        U.verticesNeedUpdate = !1;
        U.morphTargetsNeedUpdate = !1;
        U.elementsNeedUpdate = !1;
        U.uvsNeedUpdate = !1;
        U.normalsNeedUpdate = !1;
        U.colorsNeedUpdate = !1;
        U.tangentsNeedUpdate = !1;
        U.buffersNeedUpdate = !1;
        la.attributes && w(la)
      } else if (ma instanceof THREE.Ribbon) {
        la = e(ma, U);
        oa = la.attributes && v(la);
        if (U.verticesNeedUpdate || U.colorsNeedUpdate || U.normalsNeedUpdate || oa) {
          var Ib = U,
          Nc = j.DYNAMIC_DRAW,
          Ac = void 0,
          Bc = void 0,
          Cc = void 0,
          Oc = void 0,
          Ba = void 0,
          Pc = void 0,
          Qc = void 0,
          Rc = void 0,
          yc = void 0,
          hb = void 0,
          uc = void 0,
          Fa = void 0,
          wb = void 0,
          zc = Ib.vertices,
          pd = Ib.colors,
          qd = Ib.normals,
          bd = zc.length,
          cd = pd.length,
          dd = qd.length,
          Sc = Ib.__vertexArray,
          Tc = Ib.__colorArray,
          Uc = Ib.__normalArray,
          zd = Ib.colorsNeedUpdate,
          Ad = Ib.normalsNeedUpdate,
          jd = Ib.__webglCustomAttributesList;
          if (Ib.verticesNeedUpdate) {
            for (Ac = 0; Ac < bd; Ac++) Oc = zc[Ac],
            Ba = 3 * Ac,
            Sc[Ba] = Oc.x,
            Sc[Ba + 1] = Oc.y,
            Sc[Ba + 2] = Oc.z;
            j.bindBuffer(j.ARRAY_BUFFER, Ib.__webglVertexBuffer);
            j.bufferData(j.ARRAY_BUFFER, Sc, Nc)
          }
          if (zd) {
            for (Bc = 0; Bc < cd; Bc++) Pc = pd[Bc],
            Ba = 3 * Bc,
            Tc[Ba] = Pc.r,
            Tc[Ba + 1] = Pc.g,
            Tc[Ba + 2] = Pc.b;
            j.bindBuffer(j.ARRAY_BUFFER, Ib.__webglColorBuffer);
            j.bufferData(j.ARRAY_BUFFER, Tc, Nc)
          }
          if (Ad) {
            for (Cc = 0; Cc < dd; Cc++) Qc = qd[Cc],
            Ba = 3 * Cc,
            Uc[Ba] = Qc.x,
            Uc[Ba + 1] = Qc.y,
            Uc[Ba + 2] = Qc.z;
            j.bindBuffer(j.ARRAY_BUFFER, Ib.__webglNormalBuffer);
            j.bufferData(j.ARRAY_BUFFER, Uc, Nc)
          }
          if (jd) {
            Rc = 0;
            for (yc = jd.length; Rc < yc; Rc++) if (Fa = jd[Rc], Fa.needsUpdate && (void 0 === Fa.boundTo || 'vertices' === Fa.boundTo)) {
              Ba = 0;
              uc = Fa.value.length;
              if (1 === Fa.size) for (hb = 0; hb < uc; hb++) Fa.array[hb] = Fa.value[hb];
               else if (2 === Fa.size) for (hb = 0; hb < uc; hb++) wb = Fa.value[hb],
              Fa.array[Ba] = wb.x,
              Fa.array[Ba + 1] = wb.y,
              Ba += 2;
               else if (3 === Fa.size) if ('c' === Fa.type) for (hb = 0; hb < uc; hb++) wb = Fa.value[hb],
              Fa.array[Ba] = wb.r,
              Fa.array[Ba + 1] = wb.g,
              Fa.array[Ba + 2] = wb.b,
              Ba += 3;
               else for (hb = 0; hb < uc; hb++) wb = Fa.value[hb],
              Fa.array[Ba] = wb.x,
              Fa.array[Ba + 1] = wb.y,
              Fa.array[Ba + 2] = wb.z,
              Ba += 3;
               else if (4 === Fa.size) for (hb = 0; hb < uc; hb++) wb = Fa.value[hb],
              Fa.array[Ba] = wb.x,
              Fa.array[Ba + 1] = wb.y,
              Fa.array[Ba + 2] = wb.z,
              Fa.array[Ba + 3] = wb.w,
              Ba += 4;
              j.bindBuffer(j.ARRAY_BUFFER, Fa.buffer);
              j.bufferData(j.ARRAY_BUFFER, Fa.array, Nc)
            }
          }
        }
        U.verticesNeedUpdate = !1;
        U.colorsNeedUpdate = !1;
        U.normalsNeedUpdate = !1;
        la.attributes && w(la)
      } else if (ma instanceof THREE.Line) {
        la = e(ma, U);
        oa = la.attributes && v(la);
        if (U.verticesNeedUpdate || U.colorsNeedUpdate || U.lineDistancesNeedUpdate || oa) {
          var Jb = U,
          Vc = j.DYNAMIC_DRAW,
          Dc = void 0,
          Ec = void 0,
          Fc = void 0,
          Wc = void 0,
          La = void 0,
          Xc = void 0,
          rd = Jb.vertices,
          sd = Jb.colors,
          td = Jb.lineDistances,
          Bd = rd.length,
          Cd = sd.length,
          Dd = td.length,
          Yc = Jb.__vertexArray,
          Zc = Jb.__colorArray,
          ud = Jb.__lineDistanceArray,
          Ed = Jb.colorsNeedUpdate,
          Fd = Jb.lineDistancesNeedUpdate,
          kd = Jb.__webglCustomAttributesList,
          $c = void 0,
          vd = void 0,
          ib = void 0,
          vc = void 0,
          xb = void 0,
          Ga = void 0;
          if (Jb.verticesNeedUpdate) {
            for (Dc = 0; Dc < Bd; Dc++) Wc = rd[Dc],
            La = 3 * Dc,
            Yc[La] = Wc.x,
            Yc[La + 1] = Wc.y,
            Yc[La + 2] = Wc.z;
            j.bindBuffer(j.ARRAY_BUFFER, Jb.__webglVertexBuffer);
            j.bufferData(j.ARRAY_BUFFER, Yc, Vc)
          }
          if (Ed) {
            for (Ec = 0; Ec < Cd; Ec++) Xc = sd[Ec],
            La = 3 * Ec,
            Zc[La] = Xc.r,
            Zc[La + 1] = Xc.g,
            Zc[La + 2] = Xc.b;
            j.bindBuffer(j.ARRAY_BUFFER, Jb.__webglColorBuffer);
            j.bufferData(j.ARRAY_BUFFER, Zc, Vc)
          }
          if (Fd) {
            for (Fc = 0; Fc < Dd; Fc++) ud[Fc] = td[Fc];
            j.bindBuffer(j.ARRAY_BUFFER, Jb.__webglLineDistanceBuffer);
            j.bufferData(j.ARRAY_BUFFER, ud, Vc)
          }
          if (kd) {
            $c = 0;
            for (vd = kd.length; $c < vd; $c++) if (Ga = kd[$c], Ga.needsUpdate && (void 0 === Ga.boundTo || 'vertices' === Ga.boundTo)) {
              La = 0;
              vc = Ga.value.length;
              if (1 === Ga.size) for (ib = 0; ib < vc; ib++) Ga.array[ib] = Ga.value[ib];
               else if (2 === Ga.size) for (ib = 0; ib < vc; ib++) xb = Ga.value[ib],
              Ga.array[La] = xb.x,
              Ga.array[La + 1] = xb.y,
              La += 2;
               else if (3 === Ga.size) if ('c' === Ga.type) for (ib = 0; ib < vc; ib++) xb = Ga.value[ib],
              Ga.array[La] = xb.r,
              Ga.array[La + 1] = xb.g,
              Ga.array[La + 2] = xb.b,
              La += 3;
               else for (ib = 0; ib < vc; ib++) xb = Ga.value[ib],
              Ga.array[La] = xb.x,
              Ga.array[La + 1] = xb.y,
              Ga.array[La + 2] = xb.z,
              La += 3;
               else if (4 === Ga.size) for (ib = 0; ib < vc; ib++) xb = Ga.value[ib],
              Ga.array[La] = xb.x,
              Ga.array[La + 1] = xb.y,
              Ga.array[La +
              2] = xb.z,
              Ga.array[La + 3] = xb.w,
              La += 4;
              j.bindBuffer(j.ARRAY_BUFFER, Ga.buffer);
              j.bufferData(j.ARRAY_BUFFER, Ga.array, Vc)
            }
          }
        }
        U.verticesNeedUpdate = !1;
        U.colorsNeedUpdate = !1;
        U.lineDistancesNeedUpdate = !1;
        la.attributes && w(la)
      } else if (ma instanceof THREE.ParticleSystem) if (U instanceof THREE.BufferGeometry) (U.verticesNeedUpdate || U.colorsNeedUpdate) && i(U, j.DYNAMIC_DRAW, !U.dynamic),
      U.verticesNeedUpdate = !1,
      U.colorsNeedUpdate = !1;
       else {
        la = e(ma, U);
        oa = la.attributes && v(la);
        if (U.verticesNeedUpdate || U.colorsNeedUpdate || ma.sortParticles || oa) {
          var bc = U,
          ld = j.DYNAMIC_DRAW,
          Gc = ma,
          yb = void 0,
          cc = void 0,
          dc = void 0,
          ea = void 0,
          ec = void 0,
          pc = void 0,
          ad = bc.vertices,
          md = ad.length,
          nd = bc.colors,
          wd = nd.length,
          sc = bc.__vertexArray,
          tc = bc.__colorArray,
          kc = bc.__sortArray,
          xd = bc.verticesNeedUpdate,
          yd = bc.colorsNeedUpdate,
          lc = bc.__webglCustomAttributesList,
          Lb = void 0,
          wc = void 0,
          pa = void 0,
          Mb = void 0,
          Da = void 0,
          da = void 0;
          if (Gc.sortParticles) {
            fc.copy(rb);
            fc.multiplySelf(Gc.matrixWorld);
            for (yb = 0; yb < md; yb++) dc = ad[yb],
            Nb.copy(dc),
            fc.multiplyVector3(Nb),
            kc[yb] = [
              Nb.z,
              yb
            ];
            kc.sort(p);
            for (yb = 0; yb < md; yb++) dc = ad[kc[yb][1]],
            ea = 3 * yb,
            sc[ea] = dc.x,
            sc[ea + 1] = dc.y,
            sc[ea + 2] = dc.z;
            for (cc = 0; cc < wd; cc++) ea = 3 * cc,
            pc = nd[kc[cc][1]],
            tc[ea] = pc.r,
            tc[ea + 1] = pc.g,
            tc[ea + 2] = pc.b;
            if (lc) {
              Lb = 0;
              for (wc = lc.length; Lb < wc; Lb++) if (da = lc[Lb], void 0 === da.boundTo || 'vertices' === da.boundTo) if (ea = 0, Mb = da.value.length, 1 === da.size) for (pa = 0; pa < Mb; pa++) ec = kc[pa][1],
              da.array[pa] = da.value[ec];
               else if (2 === da.size) for (pa = 0; pa < Mb; pa++) ec = kc[pa][1],
              Da = da.value[ec],
              da.array[ea] = Da.x,
              da.array[ea + 1] = Da.y,
              ea += 2;
               else if (3 === da.size) if ('c' ===
              da.type) for (pa = 0; pa < Mb; pa++) ec = kc[pa][1],
              Da = da.value[ec],
              da.array[ea] = Da.r,
              da.array[ea + 1] = Da.g,
              da.array[ea + 2] = Da.b,
              ea += 3;
               else for (pa = 0; pa < Mb; pa++) ec = kc[pa][1],
              Da = da.value[ec],
              da.array[ea] = Da.x,
              da.array[ea + 1] = Da.y,
              da.array[ea + 2] = Da.z,
              ea += 3;
               else if (4 === da.size) for (pa = 0; pa < Mb; pa++) ec = kc[pa][1],
              Da = da.value[ec],
              da.array[ea] = Da.x,
              da.array[ea + 1] = Da.y,
              da.array[ea + 2] = Da.z,
              da.array[ea + 3] = Da.w,
              ea += 4
            }
          } else {
            if (xd) for (yb = 0; yb < md; yb++) dc = ad[yb],
            ea = 3 * yb,
            sc[ea] = dc.x,
            sc[ea + 1] = dc.y,
            sc[ea + 2] = dc.z;
            if (yd) for (cc = 0; cc < wd; cc++) pc = nd[cc],
            ea = 3 * cc,
            tc[ea] = pc.r,
            tc[ea + 1] = pc.g,
            tc[ea + 2] = pc.b;
            if (lc) {
              Lb = 0;
              for (wc = lc.length; Lb < wc; Lb++) if (da = lc[Lb], da.needsUpdate && (void 0 === da.boundTo || 'vertices' === da.boundTo)) if (Mb = da.value.length, ea = 0, 1 === da.size) for (pa = 0; pa < Mb; pa++) da.array[pa] = da.value[pa];
               else if (2 === da.size) for (pa = 0; pa < Mb; pa++) Da = da.value[pa],
              da.array[ea] = Da.x,
              da.array[ea + 1] = Da.y,
              ea += 2;
               else if (3 === da.size) if ('c' === da.type) for (pa = 0; pa < Mb; pa++) Da = da.value[pa],
              da.array[ea] = Da.r,
              da.array[ea + 1] = Da.g,
              da.array[ea + 2] = Da.b,
              ea += 3;
               else for (pa = 0; pa < Mb; pa++) Da = da.value[pa],
              da.array[ea] = Da.x,
              da.array[ea + 1] = Da.y,
              da.array[ea + 2] = Da.z,
              ea += 3;
               else if (4 === da.size) for (pa = 0; pa < Mb; pa++) Da = da.value[pa],
              da.array[ea] = Da.x,
              da.array[ea + 1] = Da.y,
              da.array[ea + 2] = Da.z,
              da.array[ea + 3] = Da.w,
              ea += 4
            }
          }
          if (xd || Gc.sortParticles) j.bindBuffer(j.ARRAY_BUFFER, bc.__webglVertexBuffer),
          j.bufferData(j.ARRAY_BUFFER, sc, ld);
          if (yd || Gc.sortParticles) j.bindBuffer(j.ARRAY_BUFFER, bc.__webglColorBuffer),
          j.bufferData(j.ARRAY_BUFFER, tc, ld);
          if (lc) {
            Lb = 0;
            for (wc = lc.length; Lb < wc; Lb++) if (da = lc[Lb], da.needsUpdate || Gc.sortParticles) j.bindBuffer(j.ARRAY_BUFFER, da.buffer),
            j.bufferData(j.ARRAY_BUFFER, da.array, ld)
          }
        }
        U.verticesNeedUpdate = !1;
        U.colorsNeedUpdate = !1;
        la.attributes && w(la)
      }
    }
  };
  this.initMaterial = function (a, b, c, d) {
    var e,
    f,
    g,
    h;
    a.addEventListener('dispose', Jc);
    var i,
    k,
    m,
    l,
    n;
    a instanceof THREE.MeshDepthMaterial ? n = 'depth' : a instanceof THREE.MeshNormalMaterial ? n = 'normal' : a instanceof THREE.MeshBasicMaterial ? n = 'basic' : a instanceof THREE.MeshLambertMaterial ? n = 'lambert' : a instanceof THREE.MeshPhongMaterial ?
    n = 'phong' : a instanceof THREE.LineBasicMaterial ? n = 'basic' : a instanceof THREE.LineDashedMaterial ? n = 'dashed' : a instanceof THREE.ParticleBasicMaterial && (n = 'particle_basic');
    if (n) {
      var p = THREE.ShaderLib[n];
      a.uniforms = THREE.UniformsUtils.clone(p.uniforms);
      a.vertexShader = p.vertexShader;
      a.fragmentShader = p.fragmentShader
    }
    var q,
    s,
    r;
    e = g = s = r = p = 0;
    for (f = b.length; e < f; e++) q = b[e],
    q.onlyShadow || (q instanceof THREE.DirectionalLight && g++, q instanceof THREE.PointLight && s++, q instanceof THREE.SpotLight && r++, q instanceof THREE.HemisphereLight && p++);
    e = g;
    f = s;
    g = r;
    h = p;
    p = q = 0;
    for (r = b.length; p < r; p++) s = b[p],
    s.castShadow && (s instanceof THREE.SpotLight && q++, s instanceof THREE.DirectionalLight && !s.shadowCascade && q++);
    l = q;
    tb && d && d.useVertexTexture ? m = 1024 : (b = j.getParameter(j.MAX_VERTEX_UNIFORM_VECTORS), b = Math.floor((b - 20) / 4), void 0 !== d && d instanceof THREE.SkinnedMesh && (b = Math.min(d.bones.length, b), b < d.bones.length && console.warn('WebGLRenderer: too many bones - ' + d.bones.length + ', this GPU supports just ' + b + ' (try OpenGL instead of ANGLE)')), m = b);
    a: {
      s = a.fragmentShader;
      r = a.vertexShader;
      p = a.uniforms;
      b = a.attributes;
      q = a.defines;
      var c = {
        map: !!a.map,
        envMap: !!a.envMap,
        lightMap: !!a.lightMap,
        bumpMap: !!a.bumpMap,
        normalMap: !!a.normalMap,
        specularMap: !!a.specularMap,
        vertexColors: a.vertexColors,
        fog: c,
        useFog: a.fog,
        fogExp: c instanceof THREE.FogExp2,
        sizeAttenuation: a.sizeAttenuation,
        skinning: a.skinning,
        maxBones: m,
        useVertexTexture: tb && d && d.useVertexTexture,
        boneTextureWidth: d && d.boneTextureWidth,
        boneTextureHeight: d && d.boneTextureHeight,
        morphTargets: a.morphTargets,
        morphNormals: a.morphNormals,
        maxMorphTargets: this.maxMorphTargets,
        maxMorphNormals: this.maxMorphNormals,
        maxDirLights: e,
        maxPointLights: f,
        maxSpotLights: g,
        maxHemiLights: h,
        maxShadows: l,
        shadowMapEnabled: this.shadowMapEnabled && d.receiveShadow,
        shadowMapType: this.shadowMapType,
        shadowMapDebug: this.shadowMapDebug,
        shadowMapCascade: this.shadowMapCascade,
        alphaTest: a.alphaTest,
        metal: a.metal,
        perPixel: a.perPixel,
        wrapAround: a.wrapAround,
        doubleSided: a.side === THREE.DoubleSide,
        flipSided: a.side === THREE.BackSide
      },
      t,
      v,
      x,
      d = [
      ];
      n ? d.push(n) : (d.push(s), d.push(r));
      for (v in q) d.push(v),
      d.push(q[v]);
      for (t in c) d.push(t),
      d.push(c[t]);
      n = d.join();
      t = 0;
      for (v = ja.length; t < v; t++) if (d = ja[t], d.code === n) {
        d.usedTimes++;
        k = d.program;
        break a
      }
      t = 'SHADOWMAP_TYPE_BASIC';
      c.shadowMapType === THREE.PCFShadowMap ? t = 'SHADOWMAP_TYPE_PCF' : c.shadowMapType === THREE.PCFSoftShadowMap && (t = 'SHADOWMAP_TYPE_PCF_SOFT');
      v = [
      ];
      for (x in q) d = q[x],
      !1 !== d && (d = '#define ' + x + ' ' + d, v.push(d));
      d = v.join('\n');
      x = j.createProgram();
      v = [
        'precision ' + N + ' float;',
        d,
        ab ? '#define VERTEX_TEXTURES' :
        '',
        H.gammaInput ? '#define GAMMA_INPUT' : '',
        H.gammaOutput ? '#define GAMMA_OUTPUT' : '',
        H.physicallyBasedShading ? '#define PHYSICALLY_BASED_SHADING' : '',
        '#define MAX_DIR_LIGHTS ' + c.maxDirLights,
        '#define MAX_POINT_LIGHTS ' + c.maxPointLights,
        '#define MAX_SPOT_LIGHTS ' + c.maxSpotLights,
        '#define MAX_HEMI_LIGHTS ' + c.maxHemiLights,
        '#define MAX_SHADOWS ' + c.maxShadows,
        '#define MAX_BONES ' + c.maxBones,
        c.map ? '#define USE_MAP' : '',
        c.envMap ? '#define USE_ENVMAP' : '',
        c.lightMap ? '#define USE_LIGHTMAP' : '',
        c.bumpMap ? '#define USE_BUMPMAP' :
        '',
        c.normalMap ? '#define USE_NORMALMAP' : '',
        c.specularMap ? '#define USE_SPECULARMAP' : '',
        c.vertexColors ? '#define USE_COLOR' : '',
        c.skinning ? '#define USE_SKINNING' : '',
        c.useVertexTexture ? '#define BONE_TEXTURE' : '',
        c.boneTextureWidth ? '#define N_BONE_PIXEL_X ' + c.boneTextureWidth.toFixed(1) : '',
        c.boneTextureHeight ? '#define N_BONE_PIXEL_Y ' + c.boneTextureHeight.toFixed(1) : '',
        c.morphTargets ? '#define USE_MORPHTARGETS' : '',
        c.morphNormals ? '#define USE_MORPHNORMALS' : '',
        c.perPixel ? '#define PHONG_PER_PIXEL' : '',
        c.wrapAround ?
        '#define WRAP_AROUND' : '',
        c.doubleSided ? '#define DOUBLE_SIDED' : '',
        c.flipSided ? '#define FLIP_SIDED' : '',
        c.shadowMapEnabled ? '#define USE_SHADOWMAP' : '',
        c.shadowMapEnabled ? '#define ' + t : '',
        c.shadowMapDebug ? '#define SHADOWMAP_DEBUG' : '',
        c.shadowMapCascade ? '#define SHADOWMAP_CASCADE' : '',
        c.sizeAttenuation ? '#define USE_SIZEATTENUATION' : '',
        'uniform mat4 modelMatrix;\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat4 viewMatrix;\nuniform mat3 normalMatrix;\nuniform vec3 cameraPosition;\nattribute vec3 position;\nattribute vec3 normal;\nattribute vec2 uv;\nattribute vec2 uv2;\n#ifdef USE_COLOR\nattribute vec3 color;\n#endif\n#ifdef USE_MORPHTARGETS\nattribute vec3 morphTarget0;\nattribute vec3 morphTarget1;\nattribute vec3 morphTarget2;\nattribute vec3 morphTarget3;\n#ifdef USE_MORPHNORMALS\nattribute vec3 morphNormal0;\nattribute vec3 morphNormal1;\nattribute vec3 morphNormal2;\nattribute vec3 morphNormal3;\n#else\nattribute vec3 morphTarget4;\nattribute vec3 morphTarget5;\nattribute vec3 morphTarget6;\nattribute vec3 morphTarget7;\n#endif\n#endif\n#ifdef USE_SKINNING\nattribute vec4 skinIndex;\nattribute vec4 skinWeight;\n#endif\n'
      ].join('\n');
      t = [
        'precision ' + N + ' float;',
        c.bumpMap || c.normalMap ? '#extension GL_OES_standard_derivatives : enable' : '',
        d,
        '#define MAX_DIR_LIGHTS ' + c.maxDirLights,
        '#define MAX_POINT_LIGHTS ' + c.maxPointLights,
        '#define MAX_SPOT_LIGHTS ' + c.maxSpotLights,
        '#define MAX_HEMI_LIGHTS ' + c.maxHemiLights,
        '#define MAX_SHADOWS ' + c.maxShadows,
        c.alphaTest ? '#define ALPHATEST ' + c.alphaTest : '',
        H.gammaInput ? '#define GAMMA_INPUT' : '',
        H.gammaOutput ? '#define GAMMA_OUTPUT' : '',
        H.physicallyBasedShading ? '#define PHYSICALLY_BASED_SHADING' : '',
        c.useFog && c.fog ? '#define USE_FOG' : '',
        c.useFog && c.fogExp ? '#define FOG_EXP2' : '',
        c.map ? '#define USE_MAP' : '',
        c.envMap ? '#define USE_ENVMAP' : '',
        c.lightMap ? '#define USE_LIGHTMAP' : '',
        c.bumpMap ? '#define USE_BUMPMAP' : '',
        c.normalMap ? '#define USE_NORMALMAP' : '',
        c.specularMap ? '#define USE_SPECULARMAP' : '',
        c.vertexColors ? '#define USE_COLOR' : '',
        c.metal ? '#define METAL' : '',
        c.perPixel ? '#define PHONG_PER_PIXEL' : '',
        c.wrapAround ? '#define WRAP_AROUND' : '',
        c.doubleSided ? '#define DOUBLE_SIDED' : '',
        c.flipSided ? '#define FLIP_SIDED' :
        '',
        c.shadowMapEnabled ? '#define USE_SHADOWMAP' : '',
        c.shadowMapEnabled ? '#define ' + t : '',
        c.shadowMapDebug ? '#define SHADOWMAP_DEBUG' : '',
        c.shadowMapCascade ? '#define SHADOWMAP_CASCADE' : '',
        'uniform mat4 viewMatrix;\nuniform vec3 cameraPosition;\n'
      ].join('\n');
      t = Y('fragment', t + s);
      v = Y('vertex', v + r);
      j.attachShader(x, v);
      j.attachShader(x, t);
      j.linkProgram(x);
      j.getProgramParameter(x, j.LINK_STATUS) || console.error('Could not initialise shader\nVALIDATE_STATUS: ' + j.getProgramParameter(x, j.VALIDATE_STATUS) + ', gl error [' +
      j.getError() + ']');
      j.deleteShader(t);
      j.deleteShader(v);
      x.uniforms = {
      };
      x.attributes = {
      };
      var w;
      t = 'viewMatrix modelViewMatrix projectionMatrix normalMatrix modelMatrix cameraPosition morphTargetInfluences'.split(' ');
      c.useVertexTexture ? t.push('boneTexture') : t.push('boneGlobalMatrices');
      for (w in p) t.push(w);
      w = t;
      t = 0;
      for (v = w.length; t < v; t++) p = w[t],
      x.uniforms[p] = j.getUniformLocation(x, p);
      t = 'position normal uv uv2 tangent color skinIndex skinWeight lineDistance'.split(' ');
      for (w = 0; w < c.maxMorphTargets; w++) t.push('morphTarget' +
      w);
      for (w = 0; w < c.maxMorphNormals; w++) t.push('morphNormal' + w);
      for (k in b) t.push(k);
      k = t;
      w = 0;
      for (b = k.length; w < b; w++) t = k[w],
      x.attributes[t] = j.getAttribLocation(x, t);
      x.id = ha++;
      ja.push({
        program: x,
        code: n,
        usedTimes: 1
      });
      H.info.memory.programs = ja.length;
      k = x
    }
    a.program = k;
    w = a.program.attributes;
    if (a.morphTargets) {
      a.numSupportedMorphTargets = 0;
      b = 'morphTarget';
      for (k = 0; k < this.maxMorphTargets; k++) x = b + k,
      0 <= w[x] && a.numSupportedMorphTargets++
    }
    if (a.morphNormals) {
      a.numSupportedMorphNormals = 0;
      b = 'morphNormal';
      for (k = 0; k < this.maxMorphNormals; k++) x = b + k,
      0 <= w[x] && a.numSupportedMorphNormals++
    }
    a.uniformsList = [
    ];
    for (i in a.uniforms) a.uniformsList.push([a.uniforms[i],
    i])
  };
  this.setFaceCulling = function (a, b) {
    a === THREE.CullFaceNone ? j.disable(j.CULL_FACE) : (b === THREE.FrontFaceDirectionCW ? j.frontFace(j.CW) : j.frontFace(j.CCW), a === THREE.CullFaceBack ? j.cullFace(j.BACK) : a === THREE.CullFaceFront ? j.cullFace(j.FRONT) : j.cullFace(j.FRONT_AND_BACK), j.enable(j.CULL_FACE))
  };
  this.setMaterialFaces = function (a) {
    var b = a.side === THREE.DoubleSide,
    a = a.side === THREE.BackSide;
    ma !==
    b && (b ? j.disable(j.CULL_FACE) : j.enable(j.CULL_FACE), ma = b);
    sa !== a && (a ? j.frontFace(j.CW) : j.frontFace(j.CCW), sa = a)
  };
  this.setDepthTest = function (a) {
    ob !== a && (a ? j.enable(j.DEPTH_TEST) : j.disable(j.DEPTH_TEST), ob = a)
  };
  this.setDepthWrite = function (a) {
    pb !== a && (j.depthMask(a), pb = a)
  };
  this.setBlending = function (a, b, c, d) {
    a !== Pa && (a === THREE.NoBlending ? j.disable(j.BLEND) : a === THREE.AdditiveBlending ? (j.enable(j.BLEND), j.blendEquation(j.FUNC_ADD), j.blendFunc(j.SRC_ALPHA, j.ONE)) : a === THREE.SubtractiveBlending ? (j.enable(j.BLEND), j.blendEquation(j.FUNC_ADD), j.blendFunc(j.ZERO, j.ONE_MINUS_SRC_COLOR)) : a === THREE.MultiplyBlending ? (j.enable(j.BLEND), j.blendEquation(j.FUNC_ADD), j.blendFunc(j.ZERO, j.SRC_COLOR)) : a === THREE.CustomBlending ? j.enable(j.BLEND) : (j.enable(j.BLEND), j.blendEquationSeparate(j.FUNC_ADD, j.FUNC_ADD), j.blendFuncSeparate(j.SRC_ALPHA, j.ONE_MINUS_SRC_ALPHA, j.ONE, j.ONE_MINUS_SRC_ALPHA)), Pa = a);
    if (a === THREE.CustomBlending) {
      if (b !== nb && (j.blendEquation(J(b)), nb = b), c !== la || d !== fb) j.blendFunc(J(c), J(d)),
      la = c,
      fb = d
    } else fb = la = nb = null
  };
  this.setTexture = function (a, b) {
    if (a.needsUpdate) {
      a.__webglInit || (a.__webglInit = !0, a.addEventListener('dispose', xc), a.__webglTexture = j.createTexture(), H.info.memory.textures++);
      j.activeTexture(j.TEXTURE0 + b);
      j.bindTexture(j.TEXTURE_2D, a.__webglTexture);
      j.pixelStorei(j.UNPACK_FLIP_Y_WEBGL, a.flipY);
      j.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL, a.premultiplyAlpha);
      j.pixelStorei(j.UNPACK_ALIGNMENT, a.unpackAlignment);
      var c = a.image,
      d = 0 === (c.width & c.width - 1) && 0 === (c.height & c.height - 1),
      e = J(a.format),
      f = J(a.type);
      C(j.TEXTURE_2D, a, d);
      var g = a.mipmaps;
      if (a instanceof THREE.DataTexture) if (0 < g.length && d) {
        for (var h = 0, i = g.length; h < i; h++) c = g[h],
        j.texImage2D(j.TEXTURE_2D, h, e, c.width, c.height, 0, e, f, c.data);
        a.generateMipmaps = !1
      } else j.texImage2D(j.TEXTURE_2D, 0, e, c.width, c.height, 0, e, f, c.data);
       else if (a instanceof THREE.CompressedTexture) {
        h = 0;
        for (i = g.length; h < i; h++) c = g[h],
        j.compressedTexImage2D(j.TEXTURE_2D, h, e, c.width, c.height, 0, c.data)
      } else if (0 < g.length && d) {
        h = 0;
        for (i = g.length; h < i; h++) c = g[h],
        j.texImage2D(j.TEXTURE_2D, h, e, e, f, c);
        a.generateMipmaps = !1
      } else j.texImage2D(j.TEXTURE_2D, 0, e, e, f, a.image);
      a.generateMipmaps && d && j.generateMipmap(j.TEXTURE_2D);
      a.needsUpdate = !1;
      if (a.onUpdate) a.onUpdate()
    } else j.activeTexture(j.TEXTURE0 + b),
    j.bindTexture(j.TEXTURE_2D, a.__webglTexture)
  };
  this.setRenderTarget = function (a) {
    var b = a instanceof THREE.WebGLRenderTargetCube;
    if (a && !a.__webglFramebuffer) {
      void 0 === a.depthBuffer && (a.depthBuffer = !0);
      void 0 === a.stencilBuffer && (a.stencilBuffer = !0);
      a.addEventListener('dispose', Ic);
      a.__webglTexture = j.createTexture();
      H.info.memory.textures++;
      var c = 0 === (a.width & a.width - 1) && 0 === (a.height & a.height - 1),
      d = J(a.format),
      e = J(a.type);
      if (b) {
        a.__webglFramebuffer = [
        ];
        a.__webglRenderbuffer = [
        ];
        j.bindTexture(j.TEXTURE_CUBE_MAP, a.__webglTexture);
        C(j.TEXTURE_CUBE_MAP, a, c);
        for (var f = 0; 6 > f; f++) {
          a.__webglFramebuffer[f] = j.createFramebuffer();
          a.__webglRenderbuffer[f] = j.createRenderbuffer();
          j.texImage2D(j.TEXTURE_CUBE_MAP_POSITIVE_X + f, 0, d, a.width, a.height, 0, d, e, null);
          var g = a,
          h = j.TEXTURE_CUBE_MAP_POSITIVE_X + f;
          j.bindFramebuffer(j.FRAMEBUFFER, a.__webglFramebuffer[f]);
          j.framebufferTexture2D(j.FRAMEBUFFER, j.COLOR_ATTACHMENT0, h, g.__webglTexture, 0);
          P(a.__webglRenderbuffer[f], a)
        }
        c && j.generateMipmap(j.TEXTURE_CUBE_MAP)
      } else a.__webglFramebuffer = j.createFramebuffer(),
      a.__webglRenderbuffer = a.shareDepthFrom ? a.shareDepthFrom.__webglRenderbuffer : j.createRenderbuffer(),
      j.bindTexture(j.TEXTURE_2D, a.__webglTexture),
      C(j.TEXTURE_2D, a, c),
      j.texImage2D(j.TEXTURE_2D, 0, d, a.width, a.height, 0, d, e, null),
      d = j.TEXTURE_2D,
      j.bindFramebuffer(j.FRAMEBUFFER, a.__webglFramebuffer),
      j.framebufferTexture2D(j.FRAMEBUFFER, j.COLOR_ATTACHMENT0, d, a.__webglTexture, 0),
      a.shareDepthFrom ? a.depthBuffer && !a.stencilBuffer ? j.framebufferRenderbuffer(j.FRAMEBUFFER, j.DEPTH_ATTACHMENT, j.RENDERBUFFER, a.__webglRenderbuffer) : a.depthBuffer && a.stencilBuffer && j.framebufferRenderbuffer(j.FRAMEBUFFER, j.DEPTH_STENCIL_ATTACHMENT, j.RENDERBUFFER, a.__webglRenderbuffer) : P(a.__webglRenderbuffer, a),
      c && j.generateMipmap(j.TEXTURE_2D);
      b ? j.bindTexture(j.TEXTURE_CUBE_MAP, null) : j.bindTexture(j.TEXTURE_2D, null);
      j.bindRenderbuffer(j.RENDERBUFFER, null);
      j.bindFramebuffer(j.FRAMEBUFFER, null)
    }
    a ? (b = b ? a.__webglFramebuffer[a.activeCubeFace] : a.__webglFramebuffer, c = a.width, a = a.height, e = d = 0) : (b = null, c = Ya, a = Za, d = Bb, e = Sa);
    b !== ka && (j.bindFramebuffer(j.FRAMEBUFFER, b), j.viewport(d, e, c, a), ka = b);
    qb = c;
    Cb = a
  };
  this.shadowMapPlugin = new THREE.ShadowMapPlugin;
  this.addPrePlugin(this.shadowMapPlugin);
  this.addPostPlugin(new THREE.SpritePlugin);
  this.addPostPlugin(new THREE.LensFlarePlugin)
};
THREE.WebGLRenderTarget = function (a, b, c) {
  THREE.EventDispatcher.call(this);
  this.width = a;
  this.height = b;
  c = c || {
  };
  this.wrapS = void 0 !== c.wrapS ? c.wrapS : THREE.ClampToEdgeWrapping;
  this.wrapT = void 0 !== c.wrapT ? c.wrapT : THREE.ClampToEdgeWrapping;
  this.magFilter = void 0 !== c.magFilter ? c.magFilter : THREE.LinearFilter;
  this.minFilter = void 0 !== c.minFilter ? c.minFilter : THREE.LinearMipMapLinearFilter;
  this.anisotropy = void 0 !== c.anisotropy ? c.anisotropy : 1;
  this.offset = new THREE.Vector2(0, 0);
  this.repeat = new THREE.Vector2(1, 1);
  this.format = void 0 !== c.format ? c.format : THREE.RGBAFormat;
  this.type = void 0 !== c.type ? c.type : THREE.UnsignedByteType;
  this.depthBuffer = void 0 !== c.depthBuffer ? c.depthBuffer : !0;
  this.stencilBuffer = void 0 !== c.stencilBuffer ? c.stencilBuffer : !0;
  this.generateMipmaps = !0;
  this.shareDepthFrom = null
};
THREE.WebGLRenderTarget.prototype.clone = function () {
  var a = new THREE.WebGLRenderTarget(this.width, this.height);
  a.wrapS = this.wrapS;
  a.wrapT = this.wrapT;
  a.magFilter = this.magFilter;
  a.minFilter = this.minFilter;
  a.anisotropy = this.anisotropy;
  a.offset.copy(this.offset);
  a.repeat.copy(this.repeat);
  a.format = this.format;
  a.type = this.type;
  a.depthBuffer = this.depthBuffer;
  a.stencilBuffer = this.stencilBuffer;
  a.generateMipmaps = this.generateMipmaps;
  a.shareDepthFrom = this.shareDepthFrom;
  return a
};
THREE.WebGLRenderTarget.prototype.dispose = function () {
  this.dispatchEvent({
    type: 'dispose'
  })
};
THREE.WebGLRenderTargetCube = function (a, b, c) {
  THREE.WebGLRenderTarget.call(this, a, b, c);
  this.activeCubeFace = 0
};
THREE.WebGLRenderTargetCube.prototype = Object.create(THREE.WebGLRenderTarget.prototype);
THREE.RenderableVertex = function () {
  this.positionWorld = new THREE.Vector3;
  this.positionScreen = new THREE.Vector4;
  this.visible = !0
};
THREE.RenderableVertex.prototype.copy = function (a) {
  this.positionWorld.copy(a.positionWorld);
  this.positionScreen.copy(a.positionScreen)
};
THREE.RenderableFace3 = function () {
  this.v1 = new THREE.RenderableVertex;
  this.v2 = new THREE.RenderableVertex;
  this.v3 = new THREE.RenderableVertex;
  this.centroidModel = new THREE.Vector3;
  this.normalModel = new THREE.Vector3;
  this.normalModelView = new THREE.Vector3;
  this.vertexNormalsLength = 0;
  this.vertexNormalsModel = [
    new THREE.Vector3,
    new THREE.Vector3,
    new THREE.Vector3
  ];
  this.vertexNormalsModelView = [
    new THREE.Vector3,
    new THREE.Vector3,
    new THREE.Vector3
  ];
  this.material = this.color = null;
  this.uvs = [
    []
  ];
  this.z = null
};
THREE.RenderableFace4 = function () {
  this.v1 = new THREE.RenderableVertex;
  this.v2 = new THREE.RenderableVertex;
  this.v3 = new THREE.RenderableVertex;
  this.v4 = new THREE.RenderableVertex;
  this.centroidModel = new THREE.Vector3;
  this.normalModel = new THREE.Vector3;
  this.normalModelView = new THREE.Vector3;
  this.vertexNormalsLength = 0;
  this.vertexNormalsModel = [
    new THREE.Vector3,
    new THREE.Vector3,
    new THREE.Vector3,
    new THREE.Vector3
  ];
  this.vertexNormalsModelView = [
    new THREE.Vector3,
    new THREE.Vector3,
    new THREE.Vector3,
    new THREE.Vector3
  ];
  this.material = this.color = null;
  this.uvs = [
    []
  ];
  this.z = null
};
THREE.RenderableObject = function () {
  this.z = this.object = null
};
THREE.RenderableParticle = function () {
  this.rotation = this.z = this.y = this.x = this.object = null;
  this.scale = new THREE.Vector2;
  this.material = null
};
THREE.RenderableLine = function () {
  this.z = null;
  this.v1 = new THREE.RenderableVertex;
  this.v2 = new THREE.RenderableVertex;
  this.material = null
};
THREE.ColorUtils = {
  adjustHSV: function (a, b, c, d) {
    var e = THREE.ColorUtils.__hsv;
    a.getHSV(e);
    e.h = THREE.Math.clamp(e.h + b, 0, 1);
    e.s = THREE.Math.clamp(e.s + c, 0, 1);
    e.v = THREE.Math.clamp(e.v + d, 0, 1);
    a.setHSV(e.h, e.s, e.v)
  }
};
THREE.ColorUtils.__hsv = {
  h: 0,
  s: 0,
  v: 0
};
THREE.GeometryUtils = {
  merge: function (a, b) {
    var c,
    d,
    e = a.vertices.length,
    f = b instanceof THREE.Mesh ? b.geometry : b,
    g = a.vertices,
    h = f.vertices,
    i = a.faces,
    k = f.faces,
    l = a.faceVertexUvs[0],
    f = f.faceVertexUvs[0];
    b instanceof THREE.Mesh && (b.matrixAutoUpdate && b.updateMatrix(), c = b.matrix, d = new THREE.Matrix4, d.extractRotation(c, b.scale));
    for (var m = 0, p = h.length; m < p; m++) {
      var s = h[m].clone();
      c && c.multiplyVector3(s);
      g.push(s)
    }
    m = 0;
    for (p = k.length; m < p; m++) {
      var s = k[m],
      q,
      n,
      r = s.vertexNormals,
      v = s.vertexColors;
      s instanceof THREE.Face3 ?
      q = new THREE.Face3(s.a + e, s.b + e, s.c + e) : s instanceof THREE.Face4 && (q = new THREE.Face4(s.a + e, s.b + e, s.c + e, s.d + e));
      q.normal.copy(s.normal);
      d && d.multiplyVector3(q.normal);
      g = 0;
      for (h = r.length; g < h; g++) n = r[g].clone(),
      d && d.multiplyVector3(n),
      q.vertexNormals.push(n);
      q.color.copy(s.color);
      g = 0;
      for (h = v.length; g < h; g++) n = v[g],
      q.vertexColors.push(n.clone());
      q.materialIndex = s.materialIndex;
      q.centroid.copy(s.centroid);
      c && c.multiplyVector3(q.centroid);
      i.push(q)
    }
    m = 0;
    for (p = f.length; m < p; m++) {
      c = f[m];
      d = [
      ];
      g = 0;
      for (h = c.length; g <
      h; g++) d.push(new THREE.Vector2(c[g].x, c[g].y));
      l.push(d)
    }
  },
  removeMaterials: function (a, b) {
    for (var c = {
    }, d = 0, e = b.length; d < e; d++) c[b[d]] = !0;
    for (var f, g = [
    ], d = 0, e = a.faces.length; d < e; d++) f = a.faces[d],
    f.materialIndex in c || g.push(f);
    a.faces = g
  },
  randomPointInTriangle: function (a, b, c) {
    var d,
    e,
    f,
    g = new THREE.Vector3,
    h = THREE.GeometryUtils.__v1;
    d = THREE.GeometryUtils.random();
    e = THREE.GeometryUtils.random();
    1 < d + e && (d = 1 - d, e = 1 - e);
    f = 1 - d - e;
    g.copy(a);
    g.multiplyScalar(d);
    h.copy(b);
    h.multiplyScalar(e);
    g.addSelf(h);
    h.copy(c);
    h.multiplyScalar(f);
    g.addSelf(h);
    return g
  },
  randomPointInFace: function (a, b, c) {
    var d,
    e,
    f;
    if (a instanceof THREE.Face3) return d = b.vertices[a.a],
    e = b.vertices[a.b],
    f = b.vertices[a.c],
    THREE.GeometryUtils.randomPointInTriangle(d, e, f);
    if (a instanceof THREE.Face4) {
      d = b.vertices[a.a];
      e = b.vertices[a.b];
      f = b.vertices[a.c];
      var b = b.vertices[a.d],
      g;
      c ? a._area1 && a._area2 ? (c = a._area1, g = a._area2) : (c = THREE.GeometryUtils.triangleArea(d, e, b), g = THREE.GeometryUtils.triangleArea(e, f, b), a._area1 = c, a._area2 = g) : (c = THREE.GeometryUtils.triangleArea(d, e, b), g = THREE.GeometryUtils.triangleArea(e, f, b));
      return THREE.GeometryUtils.random() * (c + g) < c ? THREE.GeometryUtils.randomPointInTriangle(d, e, b) : THREE.GeometryUtils.randomPointInTriangle(e, f, b)
    }
  },
  randomPointsInGeometry: function (a, b) {
    function c(a) {
      function b(c, d) {
        if (d < c) return c;
        var e = c + Math.floor((d - c) / 2);
        return k[e] > a ? b(c, e - 1) : k[e] < a ? b(e + 1, d) : e
      }
      return b(0, k.length - 1)
    }
    var d,
    e,
    f = a.faces,
    g = a.vertices,
    h = f.length,
    i = 0,
    k = [
    ],
    l,
    m,
    p,
    s;
    for (e = 0; e < h; e++) d = f[e],
    d instanceof THREE.Face3 ? (l = g[d.a], m = g[d.b], p = g[d.c], d._area = THREE.GeometryUtils.triangleArea(l, m, p)) : d instanceof THREE.Face4 && (l = g[d.a], m = g[d.b], p = g[d.c], s = g[d.d], d._area1 = THREE.GeometryUtils.triangleArea(l, m, s), d._area2 = THREE.GeometryUtils.triangleArea(m, p, s), d._area = d._area1 + d._area2),
    i += d._area,
    k[e] = i;
    d = [
    ];
    for (e = 0; e < b; e++) g = THREE.GeometryUtils.random() * i,
    g = c(g),
    d[e] = THREE.GeometryUtils.randomPointInFace(f[g], a, !0);
    return d
  },
  triangleArea: function (a, b, c) {
    var d = THREE.GeometryUtils.__v1,
    e = THREE.GeometryUtils.__v2;
    d.sub(b, a);
    e.sub(c, a);
    d.crossSelf(e);
    return 0.5 * d.length()
  },
  center: function (a) {
    a.computeBoundingBox();
    var b = a.boundingBox,
    c = new THREE.Vector3;
    c.add(b.min, b.max);
    c.multiplyScalar( - 0.5);
    a.applyMatrix((new THREE.Matrix4).makeTranslation(c));
    a.computeBoundingBox();
    return c
  },
  normalizeUVs: function (a) {
    for (var a = a.faceVertexUvs[0], b = 0, c = a.length; b < c; b++) for (var d = a[b], e = 0, f = d.length; e < f; e++) 1 !== d[e].x && (d[e].x -= Math.floor(d[e].x)),
    1 !== d[e].y && (d[e].y -= Math.floor(d[e].y))
  },
  triangulateQuads: function (a) {
    var b,
    c,
    d,
    e,
    f = [
    ],
    g = [
    ],
    h = [
    ];
    b = 0;
    for (c = a.faceUvs.length; b <
    c; b++) g[b] = [
    ];
    b = 0;
    for (c = a.faceVertexUvs.length; b < c; b++) h[b] = [
    ];
    b = 0;
    for (c = a.faces.length; b < c; b++) if (d = a.faces[b], d instanceof THREE.Face4) {
      e = d.a;
      var i = d.b,
      k = d.c,
      l = d.d,
      m = new THREE.Face3,
      p = new THREE.Face3;
      m.color.copy(d.color);
      p.color.copy(d.color);
      m.materialIndex = d.materialIndex;
      p.materialIndex = d.materialIndex;
      m.a = e;
      m.b = i;
      m.c = l;
      p.a = i;
      p.b = k;
      p.c = l;
      4 === d.vertexColors.length && (m.vertexColors[0] = d.vertexColors[0].clone(), m.vertexColors[1] = d.vertexColors[1].clone(), m.vertexColors[2] = d.vertexColors[3].clone(), p.vertexColors[0] = d.vertexColors[1].clone(), p.vertexColors[1] = d.vertexColors[2].clone(), p.vertexColors[2] = d.vertexColors[3].clone());
      f.push(m, p);
      d = 0;
      for (e = a.faceVertexUvs.length; d < e; d++) a.faceVertexUvs[d].length && (m = a.faceVertexUvs[d][b], i = m[1], k = m[2], l = m[3], m = [
        m[0].clone(),
        i.clone(),
        l.clone()
      ], i = [
        i.clone(),
        k.clone(),
        l.clone()
      ], h[d].push(m, i));
      d = 0;
      for (e = a.faceUvs.length; d < e; d++) a.faceUvs[d].length && (i = a.faceUvs[d][b], g[d].push(i, i))
    } else {
      f.push(d);
      d = 0;
      for (e = a.faceUvs.length; d < e; d++) g[d].push(a.faceUvs[d][b]);
      d = 0;
      for (e = a.faceVertexUvs.length; d < e; d++) h[d].push(a.faceVertexUvs[d][b])
    }
    a.faces = f;
    a.faceUvs = g;
    a.faceVertexUvs = h;
    a.computeCentroids();
    a.computeFaceNormals();
    a.computeVertexNormals();
    a.hasTangents && a.computeTangents()
  },
  explode: function (a) {
    for (var b = [
    ], c = 0, d = a.faces.length; c < d; c++) {
      var e = b.length,
      f = a.faces[c];
      if (f instanceof THREE.Face4) {
        var g = f.a,
        h = f.b,
        i = f.c,
        g = a.vertices[g],
        h = a.vertices[h],
        i = a.vertices[i],
        k = a.vertices[f.d];
        b.push(g.clone());
        b.push(h.clone());
        b.push(i.clone());
        b.push(k.clone());
        f.a = e;
        f.b = e + 1;
        f.c = e + 2;
        f.d = e + 3
      } else g = f.a,
      h = f.b,
      i = f.c,
      g = a.vertices[g],
      h = a.vertices[h],
      i = a.vertices[i],
      b.push(g.clone()),
      b.push(h.clone()),
      b.push(i.clone()),
      f.a = e,
      f.b = e + 1,
      f.c = e + 2
    }
    a.vertices = b;
    delete a.__tmpVertices
  },
  tessellate: function (a, b) {
    var c,
    d,
    e,
    f,
    g,
    h,
    i,
    k,
    l,
    m,
    p,
    s,
    q,
    n,
    r,
    v,
    w,
    x,
    t,
    K = [
    ],
    D = [
    ];
    c = 0;
    for (d = a.faceVertexUvs.length; c < d; c++) D[c] = [
    ];
    c = 0;
    for (d = a.faces.length; c < d; c++) if (e = a.faces[c], e instanceof THREE.Face3) if (f = e.a, g = e.b, h = e.c, k = a.vertices[f], l = a.vertices[g], m = a.vertices[h], s = k.distanceTo(l), q = l.distanceTo(m), p = k.distanceTo(m), s > b || q > b || p > b) {
      i = a.vertices.length;
      x = e.clone();
      t = e.clone();
      s >= q && s >= p ? (k = k.clone(), k.lerpSelf(l, 0.5), x.a = f, x.b = i, x.c = h, t.a = i, t.b = g, t.c = h, 3 === e.vertexNormals.length && (f = e.vertexNormals[0].clone(), f.lerpSelf(e.vertexNormals[1], 0.5), x.vertexNormals[1].copy(f), t.vertexNormals[0].copy(f)), 3 === e.vertexColors.length && (f = e.vertexColors[0].clone(), f.lerpSelf(e.vertexColors[1], 0.5), x.vertexColors[1].copy(f), t.vertexColors[0].copy(f)), e = 0) : q >= s && q >= p ? (k = l.clone(), k.lerpSelf(m, 0.5), x.a = f, x.b = g, x.c = i, t.a = i, t.b = h, t.c = f, 3 === e.vertexNormals.length && (f = e.vertexNormals[1].clone(), f.lerpSelf(e.vertexNormals[2], 0.5), x.vertexNormals[2].copy(f), t.vertexNormals[0].copy(f), t.vertexNormals[1].copy(e.vertexNormals[2]), t.vertexNormals[2].copy(e.vertexNormals[0])), 3 === e.vertexColors.length && (f = e.vertexColors[1].clone(), f.lerpSelf(e.vertexColors[2], 0.5), x.vertexColors[2].copy(f), t.vertexColors[0].copy(f), t.vertexColors[1].copy(e.vertexColors[2]), t.vertexColors[2].copy(e.vertexColors[0])), e = 1) : (k = k.clone(), k.lerpSelf(m, 0.5), x.a = f, x.b = g, x.c = i, t.a = i, t.b = g, t.c = h, 3 === e.vertexNormals.length && (f = e.vertexNormals[0].clone(), f.lerpSelf(e.vertexNormals[2], 0.5), x.vertexNormals[2].copy(f), t.vertexNormals[0].copy(f)), 3 === e.vertexColors.length && (f = e.vertexColors[0].clone(), f.lerpSelf(e.vertexColors[2], 0.5), x.vertexColors[2].copy(f), t.vertexColors[0].copy(f)), e = 2);
      K.push(x, t);
      a.vertices.push(k);
      f = 0;
      for (g = a.faceVertexUvs.length; f < g; f++) a.faceVertexUvs[f].length && (k = a.faceVertexUvs[f][c], t = k[0], h = k[1], x = k[2], 0 === e ? (l = t.clone(), l.lerpSelf(h, 0.5), k = [
        t.clone(),
        l.clone(),
        x.clone()
      ], h = [
        l.clone(),
        h.clone(),
        x.clone()
      ]) : 1 === e ? (l = h.clone(), l.lerpSelf(x, 0.5), k = [
        t.clone(),
        h.clone(),
        l.clone()
      ], h = [
        l.clone(),
        x.clone(),
        t.clone()
      ]) : (l = t.clone(), l.lerpSelf(x, 0.5), k = [
        t.clone(),
        h.clone(),
        l.clone()
      ], h = [
        l.clone(),
        h.clone(),
        x.clone()
      ]), D[f].push(k, h))
    } else {
      K.push(e);
      f = 0;
      for (g = a.faceVertexUvs.length; f < g; f++) D[f].push(a.faceVertexUvs[f][c])
    } else if (f = e.a, g = e.b, h = e.c, i = e.d, k = a.vertices[f], l = a.vertices[g], m = a.vertices[h], p = a.vertices[i], s = k.distanceTo(l), q = l.distanceTo(m), n = m.distanceTo(p), r = k.distanceTo(p), s > b || q > b || n > b || r > b) {
      v = a.vertices.length;
      w = a.vertices.length + 1;
      x = e.clone();
      t = e.clone();
      s >= q && s >= n && s >= r || n >= q && n >= s && n >= r ? (s = k.clone(), s.lerpSelf(l, 0.5), l = m.clone(), l.lerpSelf(p, 0.5), x.a = f, x.b = v, x.c = w, x.d = i, t.a = v, t.b = g, t.c = h, t.d = w, 4 === e.vertexNormals.length && (f = e.vertexNormals[0].clone(), f.lerpSelf(e.vertexNormals[1], 0.5), g = e.vertexNormals[2].clone(), g.lerpSelf(e.vertexNormals[3], 0.5), x.vertexNormals[1].copy(f), x.vertexNormals[2].copy(g), t.vertexNormals[0].copy(f), t.vertexNormals[3].copy(g)), 4 === e.vertexColors.length && (f = e.vertexColors[0].clone(), f.lerpSelf(e.vertexColors[1], 0.5), g = e.vertexColors[2].clone(), g.lerpSelf(e.vertexColors[3], 0.5), x.vertexColors[1].copy(f), x.vertexColors[2].copy(g), t.vertexColors[0].copy(f), t.vertexColors[3].copy(g)), e = 0) : (s = l.clone(), s.lerpSelf(m, 0.5), l = p.clone(), l.lerpSelf(k, 0.5), x.a = f, x.b = g, x.c = v, x.d = w, t.a = w, t.b = v, t.c = h, t.d = i, 4 === e.vertexNormals.length && (f = e.vertexNormals[1].clone(), f.lerpSelf(e.vertexNormals[2], 0.5), g = e.vertexNormals[3].clone(), g.lerpSelf(e.vertexNormals[0], 0.5), x.vertexNormals[2].copy(f), x.vertexNormals[3].copy(g), t.vertexNormals[0].copy(g), t.vertexNormals[1].copy(f)), 4 === e.vertexColors.length && (f = e.vertexColors[1].clone(), f.lerpSelf(e.vertexColors[2], 0.5), g = e.vertexColors[3].clone(), g.lerpSelf(e.vertexColors[0], 0.5), x.vertexColors[2].copy(f), x.vertexColors[3].copy(g), t.vertexColors[0].copy(g), t.vertexColors[1].copy(f)), e = 1);
      K.push(x, t);
      a.vertices.push(s, l);
      f = 0;
      for (g = a.faceVertexUvs.length; f <
      g; f++) a.faceVertexUvs[f].length && (k = a.faceVertexUvs[f][c], t = k[0], h = k[1], x = k[2], k = k[3], 0 === e ? (l = t.clone(), l.lerpSelf(h, 0.5), m = x.clone(), m.lerpSelf(k, 0.5), t = [
        t.clone(),
        l.clone(),
        m.clone(),
        k.clone()
      ], h = [
        l.clone(),
        h.clone(),
        x.clone(),
        m.clone()
      ]) : (l = h.clone(), l.lerpSelf(x, 0.5), m = k.clone(), m.lerpSelf(t, 0.5), t = [
        t.clone(),
        h.clone(),
        l.clone(),
        m.clone()
      ], h = [
        m.clone(),
        l.clone(),
        x.clone(),
        k.clone()
      ]), D[f].push(t, h))
    } else {
      K.push(e);
      f = 0;
      for (g = a.faceVertexUvs.length; f < g; f++) D[f].push(a.faceVertexUvs[f][c])
    }
    a.faces = K;
    a.faceVertexUvs = D
  },
  setMaterialIndex: function (a, b, c, d) {
    a = a.faces;
    d = d || a.length - 1;
    for (c = c || 0; c <= d; c++) a[c].materialIndex = b
  }
};
THREE.GeometryUtils.random = THREE.Math.random16;
THREE.GeometryUtils.__v1 = new THREE.Vector3;
THREE.GeometryUtils.__v2 = new THREE.Vector3;
THREE.ImageUtils = {
  crossOrigin: 'anonymous',
  loadTexture: function (a, b, c, d) {
    var e = new Image,
    f = new THREE.Texture(e, b),
    b = new THREE.ImageLoader;
    b.addEventListener('load', function (a) {
      f.image = a.content;
      f.needsUpdate = !0;
      c && c(f)
    });
    b.addEventListener('error', function (a) {
      d && d(a.message)
    });
    b.crossOrigin = this.crossOrigin;
    b.load(a, e);
    f.sourceFile = a;
    return f
  },
  loadCompressedTexture: function (a, b, c, d) {
    var e = new THREE.CompressedTexture;
    e.mapping = b;
    var f = new XMLHttpRequest;
    f.onload = function () {
      var a = THREE.ImageUtils.parseDDS(f.response, !0);
      e.format = a.format;
      e.mipmaps = a.mipmaps;
      e.image.width = a.width;
      e.image.height = a.height;
      e.generateMipmaps = !1;
      e.needsUpdate = !0;
      c && c(e)
    };
    f.onerror = d;
    f.open('GET', a, !0);
    f.responseType = 'arraybuffer';
    f.send(null);
    return e
  },
  loadTextureCube: function (a, b, c, d) {
    var e = [
    ];
    e.loadCount = 0;
    var f = new THREE.Texture;
    f.image = e;
    void 0 !== b && (f.mapping = b);
    f.flipY = !1;
    for (var b = 0, g = a.length; b < g; ++b) {
      var h = new Image;
      e[b] = h;
      h.onload = function () {
        e.loadCount += 1;
        6 === e.loadCount && (f.needsUpdate = !0, c && c(f))
      };
      h.onerror = d;
      h.crossOrigin = this.crossOrigin;
      h.src = a[b]
    }
    return f
  },
  loadCompressedTextureCube: function (a, b, c, d) {
    var e = [
    ];
    e.loadCount = 0;
    var f = new THREE.CompressedTexture;
    f.image = e;
    void 0 !== b && (f.mapping = b);
    f.flipY = !1;
    f.generateMipmaps = !1;
    b = function (a, b) {
      return function () {
        var d = THREE.ImageUtils.parseDDS(a.response, !0);
        b.format = d.format;
        b.mipmaps = d.mipmaps;
        b.width = d.width;
        b.height = d.height;
        e.loadCount += 1;
        6 === e.loadCount && (f.format = d.format, f.needsUpdate = !0, c && c(f))
      }
    };
    if (a instanceof Array) for (var g = 0, h = a.length; g < h; ++g) {
      var i = {
      };
      e[g] = i;
      var k = new XMLHttpRequest;
      k.onload = b(k, i);
      k.onerror = d;
      i = a[g];
      k.open('GET', i, !0);
      k.responseType = 'arraybuffer';
      k.send(null)
    } else k = new XMLHttpRequest,
    k.onload = function () {
      var a = THREE.ImageUtils.parseDDS(k.response, !0);
      if (a.isCubemap) {
        for (var b = a.mipmaps.length / a.mipmapCount, d = 0; d < b; d++) {
          e[d] = {
            mipmaps: [
            ]
          };
          for (var g = 0; g < a.mipmapCount; g++) e[d].mipmaps.push(a.mipmaps[d * a.mipmapCount + g]),
          e[d].format = a.format,
          e[d].width = a.width,
          e[d].height = a.height
        }
        f.format = a.format;
        f.needsUpdate = !0;
        c && c(f)
      }
    },
    k.onerror = d,
    k.open('GET', a, !0),
    k.responseType = 'arraybuffer',
    k.send(null);
    return f
  },
  parseDDS: function (a, b) {
    function c(a) {
      return a.charCodeAt(0) + (a.charCodeAt(1) << 8) + (a.charCodeAt(2) << 16) + (a.charCodeAt(3) << 24)
    }
    var d = {
      mipmaps: [
      ],
      width: 0,
      height: 0,
      format: null,
      mipmapCount: 1
    },
    e = c('DXT1'),
    f = c('DXT3'),
    g = c('DXT5'),
    h = new Int32Array(a, 0, 31);
    if (542327876 !== h[0]) return console.error('ImageUtils.parseDDS(): Invalid magic number in DDS header'),
    d;
    if (!h[20] & 4) return console.error('ImageUtils.parseDDS(): Unsupported format, must contain a FourCC code'),
    d;
    var i = h[21];
    switch (i) {
      case e:
        e = 8;
        d.format = THREE.RGB_S3TC_DXT1_Format;
        break;
      case f:
        e = 16;
        d.format = THREE.RGBA_S3TC_DXT3_Format;
        break;
      case g:
        e = 16;
        d.format = THREE.RGBA_S3TC_DXT5_Format;
        break;
      default:
        return console.error('ImageUtils.parseDDS(): Unsupported FourCC code: ', String.fromCharCode(i & 255, i >> 8 & 255, i >> 16 & 255, i >> 24 & 255)),
        d
    }
    d.mipmapCount = 1;
    h[2] & 131072 && !1 !== b && (d.mipmapCount = Math.max(1, h[7]));
    d.isCubemap = h[28] & 512 ? !0 : !1;
    d.width = h[4];
    d.height = h[3];
    for (var h = h[1] + 4, f = d.width, g = d.height, i = d.isCubemap ?
    6 : 1, k = 0; k < i; k++) {
      for (var l = 0; l < d.mipmapCount; l++) {
        var m = Math.max(4, f) / 4 * Math.max(4, g) / 4 * e,
        p = {
          data: new Uint8Array(a, h, m),
          width: f,
          height: g
        };
        d.mipmaps.push(p);
        h += m;
        f = Math.max(0.5 * f, 1);
        g = Math.max(0.5 * g, 1)
      }
      f = d.width;
      g = d.height
    }
    return d
  },
  getNormalMap: function (a, b) {
    var c = function (a) {
      var b = Math.sqrt(a[0] * a[0] + a[1] * a[1] + a[2] * a[2]);
      return [a[0] / b,
      a[1] / b,
      a[2] / b]
    },
    b = b | 1,
    d = a.width,
    e = a.height,
    f = document.createElement('canvas');
    f.width = d;
    f.height = e;
    var g = f.getContext('2d');
    g.drawImage(a, 0, 0);
    for (var h = g.getImageData(0, 0, d, e).data, i = g.createImageData(d, e), k = i.data, l = 0; l < d; l++) for (var m = 0; m < e; m++) {
      var p = 0 > m - 1 ? 0 : m - 1,
      s = m + 1 > e - 1 ? e - 1 : m + 1,
      q = 0 > l - 1 ? 0 : l - 1,
      n = l + 1 > d - 1 ? d - 1 : l + 1,
      r = [
      ],
      v = [
        0,
        0,
        h[4 * (m * d + l)] / 255 * b
      ];
      r.push([ - 1,
      0,
      h[4 * (m * d + q)] / 255 * b]);
      r.push([ - 1,
      - 1,
      h[4 * (p * d + q)] / 255 * b]);
      r.push([0,
      - 1,
      h[4 * (p * d + l)] / 255 * b]);
      r.push([1,
      - 1,
      h[4 * (p * d + n)] / 255 * b]);
      r.push([1,
      0,
      h[4 * (m * d + n)] / 255 * b]);
      r.push([1,
      1,
      h[4 * (s * d + n)] / 255 * b]);
      r.push([0,
      1,
      h[4 * (s * d + l)] / 255 * b]);
      r.push([ - 1,
      1,
      h[4 * (s * d + q)] / 255 * b]);
      p = [
      ];
      q = r.length;
      for (s = 0; s < q; s++) {
        var n = r[s],
        w = r[(s + 1) % q],
        n = [
          n[0] - v[0],
          n[1] - v[1],
          n[2] - v[2]
        ],
        w = [
          w[0] - v[0],
          w[1] - v[1],
          w[2] - v[2]
        ];
        p.push(c([n[1] * w[2] - n[2] * w[1],
        n[2] * w[0] - n[0] * w[2],
        n[0] * w[1] - n[1] * w[0]]))
      }
      r = [
        0,
        0,
        0
      ];
      for (s = 0; s < p.length; s++) r[0] += p[s][0],
      r[1] += p[s][1],
      r[2] += p[s][2];
      r[0] /= p.length;
      r[1] /= p.length;
      r[2] /= p.length;
      v = 4 * (m * d + l);
      k[v] = 255 * ((r[0] + 1) / 2) | 0;
      k[v + 1] = 255 * ((r[1] + 1) / 2) | 0;
      k[v + 2] = 255 * r[2] | 0;
      k[v + 3] = 255
    }
    g.putImageData(i, 0, 0);
    return f
  },
  generateDataTexture: function (a, b, c) {
    for (var d = a * b, e = new Uint8Array(3 * d), f = Math.floor(255 * c.r), g = Math.floor(255 * c.g), c = Math.floor(255 * c.b), h = 0; h < d; h++) e[3 * h] = f,
    e[3 * h + 1] = g,
    e[3 * h + 2] = c;
    a = new THREE.DataTexture(e, a, b, THREE.RGBFormat);
    a.needsUpdate = !0;
    return a
  }
};
THREE.SceneUtils = {
  createMultiMaterialObject: function (a, b) {
    for (var c = new THREE.Object3D, d = 0, e = b.length; d < e; d++) c.add(new THREE.Mesh(a, b[d]));
    return c
  },
  detach: function (a, b, c) {
    a.applyMatrix(b.matrixWorld);
    b.remove(a);
    c.add(a)
  },
  attach: function (a, b, c) {
    var d = new THREE.Matrix4;
    d.getInverse(c.matrixWorld);
    a.applyMatrix(d);
    b.remove(a);
    c.add(a)
  }
};
THREE.ShaderUtils = {
  lib: {
    fresnel: {
      uniforms: {
        mRefractionRatio: {
          type: 'f',
          value: 1.02
        },
        mFresnelBias: {
          type: 'f',
          value: 0.1
        },
        mFresnelPower: {
          type: 'f',
          value: 2
        },
        mFresnelScale: {
          type: 'f',
          value: 1
        },
        tCube: {
          type: 't',
          value: null
        }
      },
      fragmentShader: 'uniform samplerCube tCube;\nvarying vec3 vReflect;\nvarying vec3 vRefract[3];\nvarying float vReflectionFactor;\nvoid main() {\nvec4 reflectedColor = textureCube( tCube, vec3( -vReflect.x, vReflect.yz ) );\nvec4 refractedColor = vec4( 1.0 );\nrefractedColor.r = textureCube( tCube, vec3( -vRefract[0].x, vRefract[0].yz ) ).r;\nrefractedColor.g = textureCube( tCube, vec3( -vRefract[1].x, vRefract[1].yz ) ).g;\nrefractedColor.b = textureCube( tCube, vec3( -vRefract[2].x, vRefract[2].yz ) ).b;\ngl_FragColor = mix( refractedColor, reflectedColor, clamp( vReflectionFactor, 0.0, 1.0 ) );\n}',
      vertexShader: 'uniform float mRefractionRatio;\nuniform float mFresnelBias;\nuniform float mFresnelScale;\nuniform float mFresnelPower;\nvarying vec3 vReflect;\nvarying vec3 vRefract[3];\nvarying float vReflectionFactor;\nvoid main() {\nvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\nvec4 worldPosition = modelMatrix * vec4( position, 1.0 );\nvec3 worldNormal = normalize( mat3( modelMatrix[0].xyz, modelMatrix[1].xyz, modelMatrix[2].xyz ) * normal );\nvec3 I = worldPosition.xyz - cameraPosition;\nvReflect = reflect( I, worldNormal );\nvRefract[0] = refract( normalize( I ), worldNormal, mRefractionRatio );\nvRefract[1] = refract( normalize( I ), worldNormal, mRefractionRatio * 0.99 );\nvRefract[2] = refract( normalize( I ), worldNormal, mRefractionRatio * 0.98 );\nvReflectionFactor = mFresnelBias + mFresnelScale * pow( 1.0 + dot( normalize( I ), worldNormal ), mFresnelPower );\ngl_Position = projectionMatrix * mvPosition;\n}'
    },
    normal: {
      uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.fog,
      THREE.UniformsLib.lights,
      THREE.UniformsLib.shadowmap,
      {
        enableAO: {
          type: 'i',
          value: 0
        },
        enableDiffuse: {
          type: 'i',
          value: 0
        },
        enableSpecular: {
          type: 'i',
          value: 0
        },
        enableReflection: {
          type: 'i',
          value: 0
        },
        enableDisplacement: {
          type: 'i',
          value: 0
        },
        tDisplacement: {
          type: 't',
          value: null
        },
        tDiffuse: {
          type: 't',
          value: null
        },
        tCube: {
          type: 't',
          value: null
        },
        tNormal: {
          type: 't',
          value: null
        },
        tSpecular: {
          type: 't',
          value: null
        },
        tAO: {
          type: 't',
          value: null
        },
        uNormalScale: {
          type: 'v2',
          value: new THREE.Vector2(1, 1)
        },
        uDisplacementBias: {
          type: 'f',
          value: 0
        },
        uDisplacementScale: {
          type: 'f',
          value: 1
        },
        uDiffuseColor: {
          type: 'c',
          value: new THREE.Color(16777215)
        },
        uSpecularColor: {
          type: 'c',
          value: new THREE.Color(1118481)
        },
        uAmbientColor: {
          type: 'c',
          value: new THREE.Color(16777215)
        },
        uShininess: {
          type: 'f',
          value: 30
        },
        uOpacity: {
          type: 'f',
          value: 1
        },
        useRefract: {
          type: 'i',
          value: 0
        },
        uRefractionRatio: {
          type: 'f',
          value: 0.98
        },
        uReflectivity: {
          type: 'f',
          value: 0.5
        },
        uOffset: {
          type: 'v2',
          value: new THREE.Vector2(0, 0)
        },
        uRepeat: {
          type: 'v2',
          value: new THREE.Vector2(1, 1)
        },
        wrapRGB: {
          type: 'v3',
          value: new THREE.Vector3(1, 1, 1)
        }
      }
      ]),
      fragmentShader: [
        'uniform vec3 uAmbientColor;\nuniform vec3 uDiffuseColor;\nuniform vec3 uSpecularColor;\nuniform float uShininess;\nuniform float uOpacity;\nuniform bool enableDiffuse;\nuniform bool enableSpecular;\nuniform bool enableAO;\nuniform bool enableReflection;\nuniform sampler2D tDiffuse;\nuniform sampler2D tNormal;\nuniform sampler2D tSpecular;\nuniform sampler2D tAO;\nuniform samplerCube tCube;\nuniform vec2 uNormalScale;\nuniform bool useRefract;\nuniform float uRefractionRatio;\nuniform float uReflectivity;\nvarying vec3 vTangent;\nvarying vec3 vBinormal;\nvarying vec3 vNormal;\nvarying vec2 vUv;\nuniform vec3 ambientLightColor;\n#if MAX_DIR_LIGHTS > 0\nuniform vec3 directionalLightColor[ MAX_DIR_LIGHTS ];\nuniform vec3 directionalLightDirection[ MAX_DIR_LIGHTS ];\n#endif\n#if MAX_HEMI_LIGHTS > 0\nuniform vec3 hemisphereLightSkyColor[ MAX_HEMI_LIGHTS ];\nuniform vec3 hemisphereLightGroundColor[ MAX_HEMI_LIGHTS ];\nuniform vec3 hemisphereLightDirection[ MAX_HEMI_LIGHTS ];\n#endif\n#if MAX_POINT_LIGHTS > 0\nuniform vec3 pointLightColor[ MAX_POINT_LIGHTS ];\nuniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];\nuniform float pointLightDistance[ MAX_POINT_LIGHTS ];\n#endif\n#if MAX_SPOT_LIGHTS > 0\nuniform vec3 spotLightColor[ MAX_SPOT_LIGHTS ];\nuniform vec3 spotLightPosition[ MAX_SPOT_LIGHTS ];\nuniform vec3 spotLightDirection[ MAX_SPOT_LIGHTS ];\nuniform float spotLightAngleCos[ MAX_SPOT_LIGHTS ];\nuniform float spotLightExponent[ MAX_SPOT_LIGHTS ];\nuniform float spotLightDistance[ MAX_SPOT_LIGHTS ];\n#endif\n#ifdef WRAP_AROUND\nuniform vec3 wrapRGB;\n#endif\nvarying vec3 vWorldPosition;\nvarying vec3 vViewPosition;',
        THREE.ShaderChunk.shadowmap_pars_fragment,
        THREE.ShaderChunk.fog_pars_fragment,
        'void main() {\ngl_FragColor = vec4( vec3( 1.0 ), uOpacity );\nvec3 specularTex = vec3( 1.0 );\nvec3 normalTex = texture2D( tNormal, vUv ).xyz * 2.0 - 1.0;\nnormalTex.xy *= uNormalScale;\nnormalTex = normalize( normalTex );\nif( enableDiffuse ) {\n#ifdef GAMMA_INPUT\nvec4 texelColor = texture2D( tDiffuse, vUv );\ntexelColor.xyz *= texelColor.xyz;\ngl_FragColor = gl_FragColor * texelColor;\n#else\ngl_FragColor = gl_FragColor * texture2D( tDiffuse, vUv );\n#endif\n}\nif( enableAO ) {\n#ifdef GAMMA_INPUT\nvec4 aoColor = texture2D( tAO, vUv );\naoColor.xyz *= aoColor.xyz;\ngl_FragColor.xyz = gl_FragColor.xyz * aoColor.xyz;\n#else\ngl_FragColor.xyz = gl_FragColor.xyz * texture2D( tAO, vUv ).xyz;\n#endif\n}\nif( enableSpecular )\nspecularTex = texture2D( tSpecular, vUv ).xyz;\nmat3 tsb = mat3( normalize( vTangent ), normalize( vBinormal ), normalize( vNormal ) );\nvec3 finalNormal = tsb * normalTex;\n#ifdef FLIP_SIDED\nfinalNormal = -finalNormal;\n#endif\nvec3 normal = normalize( finalNormal );\nvec3 viewPosition = normalize( vViewPosition );\n#if MAX_POINT_LIGHTS > 0\nvec3 pointDiffuse = vec3( 0.0 );\nvec3 pointSpecular = vec3( 0.0 );\nfor ( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {\nvec4 lPosition = viewMatrix * vec4( pointLightPosition[ i ], 1.0 );\nvec3 pointVector = lPosition.xyz + vViewPosition.xyz;\nfloat pointDistance = 1.0;\nif ( pointLightDistance[ i ] > 0.0 )\npointDistance = 1.0 - min( ( length( pointVector ) / pointLightDistance[ i ] ), 1.0 );\npointVector = normalize( pointVector );\n#ifdef WRAP_AROUND\nfloat pointDiffuseWeightFull = max( dot( normal, pointVector ), 0.0 );\nfloat pointDiffuseWeightHalf = max( 0.5 * dot( normal, pointVector ) + 0.5, 0.0 );\nvec3 pointDiffuseWeight = mix( vec3 ( pointDiffuseWeightFull ), vec3( pointDiffuseWeightHalf ), wrapRGB );\n#else\nfloat pointDiffuseWeight = max( dot( normal, pointVector ), 0.0 );\n#endif\npointDiffuse += pointDistance * pointLightColor[ i ] * uDiffuseColor * pointDiffuseWeight;\nvec3 pointHalfVector = normalize( pointVector + viewPosition );\nfloat pointDotNormalHalf = max( dot( normal, pointHalfVector ), 0.0 );\nfloat pointSpecularWeight = specularTex.r * max( pow( pointDotNormalHalf, uShininess ), 0.0 );\n#ifdef PHYSICALLY_BASED_SHADING\nfloat specularNormalization = ( uShininess + 2.0001 ) / 8.0;\nvec3 schlick = uSpecularColor + vec3( 1.0 - uSpecularColor ) * pow( 1.0 - dot( pointVector, pointHalfVector ), 5.0 );\npointSpecular += schlick * pointLightColor[ i ] * pointSpecularWeight * pointDiffuseWeight * pointDistance * specularNormalization;\n#else\npointSpecular += pointDistance * pointLightColor[ i ] * uSpecularColor * pointSpecularWeight * pointDiffuseWeight;\n#endif\n}\n#endif\n#if MAX_SPOT_LIGHTS > 0\nvec3 spotDiffuse = vec3( 0.0 );\nvec3 spotSpecular = vec3( 0.0 );\nfor ( int i = 0; i < MAX_SPOT_LIGHTS; i ++ ) {\nvec4 lPosition = viewMatrix * vec4( spotLightPosition[ i ], 1.0 );\nvec3 spotVector = lPosition.xyz + vViewPosition.xyz;\nfloat spotDistance = 1.0;\nif ( spotLightDistance[ i ] > 0.0 )\nspotDistance = 1.0 - min( ( length( spotVector ) / spotLightDistance[ i ] ), 1.0 );\nspotVector = normalize( spotVector );\nfloat spotEffect = dot( spotLightDirection[ i ], normalize( spotLightPosition[ i ] - vWorldPosition ) );\nif ( spotEffect > spotLightAngleCos[ i ] ) {\nspotEffect = max( pow( spotEffect, spotLightExponent[ i ] ), 0.0 );\n#ifdef WRAP_AROUND\nfloat spotDiffuseWeightFull = max( dot( normal, spotVector ), 0.0 );\nfloat spotDiffuseWeightHalf = max( 0.5 * dot( normal, spotVector ) + 0.5, 0.0 );\nvec3 spotDiffuseWeight = mix( vec3 ( spotDiffuseWeightFull ), vec3( spotDiffuseWeightHalf ), wrapRGB );\n#else\nfloat spotDiffuseWeight = max( dot( normal, spotVector ), 0.0 );\n#endif\nspotDiffuse += spotDistance * spotLightColor[ i ] * uDiffuseColor * spotDiffuseWeight * spotEffect;\nvec3 spotHalfVector = normalize( spotVector + viewPosition );\nfloat spotDotNormalHalf = max( dot( normal, spotHalfVector ), 0.0 );\nfloat spotSpecularWeight = specularTex.r * max( pow( spotDotNormalHalf, uShininess ), 0.0 );\n#ifdef PHYSICALLY_BASED_SHADING\nfloat specularNormalization = ( uShininess + 2.0001 ) / 8.0;\nvec3 schlick = uSpecularColor + vec3( 1.0 - uSpecularColor ) * pow( 1.0 - dot( spotVector, spotHalfVector ), 5.0 );\nspotSpecular += schlick * spotLightColor[ i ] * spotSpecularWeight * spotDiffuseWeight * spotDistance * specularNormalization * spotEffect;\n#else\nspotSpecular += spotDistance * spotLightColor[ i ] * uSpecularColor * spotSpecularWeight * spotDiffuseWeight * spotEffect;\n#endif\n}\n}\n#endif\n#if MAX_DIR_LIGHTS > 0\nvec3 dirDiffuse = vec3( 0.0 );\nvec3 dirSpecular = vec3( 0.0 );\nfor( int i = 0; i < MAX_DIR_LIGHTS; i++ ) {\nvec4 lDirection = viewMatrix * vec4( directionalLightDirection[ i ], 0.0 );\nvec3 dirVector = normalize( lDirection.xyz );\n#ifdef WRAP_AROUND\nfloat directionalLightWeightingFull = max( dot( normal, dirVector ), 0.0 );\nfloat directionalLightWeightingHalf = max( 0.5 * dot( normal, dirVector ) + 0.5, 0.0 );\nvec3 dirDiffuseWeight = mix( vec3( directionalLightWeightingFull ), vec3( directionalLightWeightingHalf ), wrapRGB );\n#else\nfloat dirDiffuseWeight = max( dot( normal, dirVector ), 0.0 );\n#endif\ndirDiffuse += directionalLightColor[ i ] * uDiffuseColor * dirDiffuseWeight;\nvec3 dirHalfVector = normalize( dirVector + viewPosition );\nfloat dirDotNormalHalf = max( dot( normal, dirHalfVector ), 0.0 );\nfloat dirSpecularWeight = specularTex.r * max( pow( dirDotNormalHalf, uShininess ), 0.0 );\n#ifdef PHYSICALLY_BASED_SHADING\nfloat specularNormalization = ( uShininess + 2.0001 ) / 8.0;\nvec3 schlick = uSpecularColor + vec3( 1.0 - uSpecularColor ) * pow( 1.0 - dot( dirVector, dirHalfVector ), 5.0 );\ndirSpecular += schlick * directionalLightColor[ i ] * dirSpecularWeight * dirDiffuseWeight * specularNormalization;\n#else\ndirSpecular += directionalLightColor[ i ] * uSpecularColor * dirSpecularWeight * dirDiffuseWeight;\n#endif\n}\n#endif\n#if MAX_HEMI_LIGHTS > 0\nvec3 hemiDiffuse  = vec3( 0.0 );\nvec3 hemiSpecular = vec3( 0.0 );\nfor( int i = 0; i < MAX_HEMI_LIGHTS; i ++ ) {\nvec4 lDirection = viewMatrix * vec4( hemisphereLightDirection[ i ], 0.0 );\nvec3 lVector = normalize( lDirection.xyz );\nfloat dotProduct = dot( normal, lVector );\nfloat hemiDiffuseWeight = 0.5 * dotProduct + 0.5;\nvec3 hemiColor = mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeight );\nhemiDiffuse += uDiffuseColor * hemiColor;\nvec3 hemiHalfVectorSky = normalize( lVector + viewPosition );\nfloat hemiDotNormalHalfSky = 0.5 * dot( normal, hemiHalfVectorSky ) + 0.5;\nfloat hemiSpecularWeightSky = specularTex.r * max( pow( hemiDotNormalHalfSky, uShininess ), 0.0 );\nvec3 lVectorGround = -lVector;\nvec3 hemiHalfVectorGround = normalize( lVectorGround + viewPosition );\nfloat hemiDotNormalHalfGround = 0.5 * dot( normal, hemiHalfVectorGround ) + 0.5;\nfloat hemiSpecularWeightGround = specularTex.r * max( pow( hemiDotNormalHalfGround, uShininess ), 0.0 );\n#ifdef PHYSICALLY_BASED_SHADING\nfloat dotProductGround = dot( normal, lVectorGround );\nfloat specularNormalization = ( uShininess + 2.0001 ) / 8.0;\nvec3 schlickSky = uSpecularColor + vec3( 1.0 - uSpecularColor ) * pow( 1.0 - dot( lVector, hemiHalfVectorSky ), 5.0 );\nvec3 schlickGround = uSpecularColor + vec3( 1.0 - uSpecularColor ) * pow( 1.0 - dot( lVectorGround, hemiHalfVectorGround ), 5.0 );\nhemiSpecular += hemiColor * specularNormalization * ( schlickSky * hemiSpecularWeightSky * max( dotProduct, 0.0 ) + schlickGround * hemiSpecularWeightGround * max( dotProductGround, 0.0 ) );\n#else\nhemiSpecular += uSpecularColor * hemiColor * ( hemiSpecularWeightSky + hemiSpecularWeightGround ) * hemiDiffuseWeight;\n#endif\n}\n#endif\nvec3 totalDiffuse = vec3( 0.0 );\nvec3 totalSpecular = vec3( 0.0 );\n#if MAX_DIR_LIGHTS > 0\ntotalDiffuse += dirDiffuse;\ntotalSpecular += dirSpecular;\n#endif\n#if MAX_HEMI_LIGHTS > 0\ntotalDiffuse += hemiDiffuse;\ntotalSpecular += hemiSpecular;\n#endif\n#if MAX_POINT_LIGHTS > 0\ntotalDiffuse += pointDiffuse;\ntotalSpecular += pointSpecular;\n#endif\n#if MAX_SPOT_LIGHTS > 0\ntotalDiffuse += spotDiffuse;\ntotalSpecular += spotSpecular;\n#endif\n#ifdef METAL\ngl_FragColor.xyz = gl_FragColor.xyz * ( totalDiffuse + ambientLightColor * uAmbientColor + totalSpecular );\n#else\ngl_FragColor.xyz = gl_FragColor.xyz * ( totalDiffuse + ambientLightColor * uAmbientColor ) + totalSpecular;\n#endif\nif ( enableReflection ) {\nvec3 vReflect;\nvec3 cameraToVertex = normalize( vWorldPosition - cameraPosition );\nif ( useRefract ) {\nvReflect = refract( cameraToVertex, normal, uRefractionRatio );\n} else {\nvReflect = reflect( cameraToVertex, normal );\n}\nvec4 cubeColor = textureCube( tCube, vec3( -vReflect.x, vReflect.yz ) );\n#ifdef GAMMA_INPUT\ncubeColor.xyz *= cubeColor.xyz;\n#endif\ngl_FragColor.xyz = mix( gl_FragColor.xyz, cubeColor.xyz, specularTex.r * uReflectivity );\n}',
        THREE.ShaderChunk.shadowmap_fragment,
        THREE.ShaderChunk.linear_to_gamma_fragment,
        THREE.ShaderChunk.fog_fragment,
        '}'
      ].join('\n'),
      vertexShader: [
        'attribute vec4 tangent;\nuniform vec2 uOffset;\nuniform vec2 uRepeat;\nuniform bool enableDisplacement;\n#ifdef VERTEX_TEXTURES\nuniform sampler2D tDisplacement;\nuniform float uDisplacementScale;\nuniform float uDisplacementBias;\n#endif\nvarying vec3 vTangent;\nvarying vec3 vBinormal;\nvarying vec3 vNormal;\nvarying vec2 vUv;\nvarying vec3 vWorldPosition;\nvarying vec3 vViewPosition;',
        THREE.ShaderChunk.skinning_pars_vertex,
        THREE.ShaderChunk.shadowmap_pars_vertex,
        'void main() {',
        THREE.ShaderChunk.skinbase_vertex,
        THREE.ShaderChunk.skinnormal_vertex,
        '#ifdef USE_SKINNING\nvNormal = normalize( normalMatrix * skinnedNormal.xyz );\nvec4 skinnedTangent = skinMatrix * vec4( tangent.xyz, 0.0 );\nvTangent = normalize( normalMatrix * skinnedTangent.xyz );\n#else\nvNormal = normalize( normalMatrix * normal );\nvTangent = normalize( normalMatrix * tangent.xyz );\n#endif\nvBinormal = normalize( cross( vNormal, vTangent ) * tangent.w );\nvUv = uv * uRepeat + uOffset;\nvec3 displacedPosition;\n#ifdef VERTEX_TEXTURES\nif ( enableDisplacement ) {\nvec3 dv = texture2D( tDisplacement, uv ).xyz;\nfloat df = uDisplacementScale * dv.x + uDisplacementBias;\ndisplacedPosition = position + normalize( normal ) * df;\n} else {\n#ifdef USE_SKINNING\nvec4 skinVertex = vec4( position, 1.0 );\nvec4 skinned  = boneMatX * skinVertex * skinWeight.x;\nskinned \t  += boneMatY * skinVertex * skinWeight.y;\ndisplacedPosition  = skinned.xyz;\n#else\ndisplacedPosition = position;\n#endif\n}\n#else\n#ifdef USE_SKINNING\nvec4 skinVertex = vec4( position, 1.0 );\nvec4 skinned  = boneMatX * skinVertex * skinWeight.x;\nskinned \t  += boneMatY * skinVertex * skinWeight.y;\ndisplacedPosition  = skinned.xyz;\n#else\ndisplacedPosition = position;\n#endif\n#endif\nvec4 mvPosition = modelViewMatrix * vec4( displacedPosition, 1.0 );\nvec4 worldPosition = modelMatrix * vec4( displacedPosition, 1.0 );\ngl_Position = projectionMatrix * mvPosition;\nvWorldPosition = worldPosition.xyz;\nvViewPosition = -mvPosition.xyz;\n#ifdef USE_SHADOWMAP\nfor( int i = 0; i < MAX_SHADOWS; i ++ ) {\nvShadowCoord[ i ] = shadowMatrix[ i ] * worldPosition;\n}\n#endif\n}'
      ].join('\n')
    },
    cube: {
      uniforms: {
        tCube: {
          type: 't',
          value: null
        },
        tFlip: {
          type: 'f',
          value: - 1
        }
      },
      vertexShader: 'varying vec3 vWorldPosition;\nvoid main() {\nvec4 worldPosition = modelMatrix * vec4( position, 1.0 );\nvWorldPosition = worldPosition.xyz;\ngl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}',
      fragmentShader: 'uniform samplerCube tCube;\nuniform float tFlip;\nvarying vec3 vWorldPosition;\nvoid main() {\ngl_FragColor = textureCube( tCube, vec3( tFlip * vWorldPosition.x, vWorldPosition.yz ) );\n}'
    }
  }
};
THREE.FontUtils = {
  faces: {
  },
  face: 'helvetiker',
  weight: 'normal',
  style: 'normal',
  size: 150,
  divisions: 10,
  getFace: function () {
    return this.faces[this.face][this.weight][this.style]
  },
  loadFace: function (a) {
    var b = a.familyName.toLowerCase();
    this.faces[b] = this.faces[b] || {
    };
    this.faces[b][a.cssFontWeight] = this.faces[b][a.cssFontWeight] || {
    };
    this.faces[b][a.cssFontWeight][a.cssFontStyle] = a;
    return this.faces[b][a.cssFontWeight][a.cssFontStyle] = a
  },
  drawText: function (a) {
    for (var b = this.getFace(), c = this.size / b.resolution, d = 0, e = String(a).split(''), f = e.length, g = [
    ], a = 0; a < f; a++) {
      var h = new THREE.Path,
      h = this.extractGlyphPoints(e[a], b, c, d, h),
      d = d + h.offset;
      g.push(h.path)
    }
    return {
      paths: g,
      offset: d / 2
    }
  },
  extractGlyphPoints: function (a, b, c, d, e) {
    var f = [
    ],
    g,
    h,
    i,
    k,
    l,
    m,
    p,
    s,
    q,
    n,
    r,
    v = b.glyphs[a] || b.glyphs['?'];
    if (v) {
      if (v.o) {
        b = v._cachedOutline || (v._cachedOutline = v.o.split(' '));
        k = b.length;
        for (a = 0; a < k; ) switch (i = b[a++], i) {
          case 'm':
            i = b[a++] * c + d;
            l = b[a++] * c;
            e.moveTo(i, l);
            break;
          case 'l':
            i = b[a++] * c + d;
            l = b[a++] * c;
            e.lineTo(i, l);
            break;
          case 'q':
            i = b[a++] * c + d;
            l = b[a++] * c;
            s = b[a++] * c + d;
            q = b[a++] * c;
            e.quadraticCurveTo(s, q, i, l);
            if (g = f[f.length - 1]) {
              m = g.x;
              p = g.y;
              g = 1;
              for (h = this.divisions; g <= h; g++) {
                var w = g / h;
                THREE.Shape.Utils.b2(w, m, s, i);
                THREE.Shape.Utils.b2(w, p, q, l)
              }
            }
            break;
          case 'b':
            if (i = b[a++] * c + d, l = b[a++] * c, s = b[a++] * c + d, q = b[a++] * - c, n = b[a++] * c + d, r = b[a++] * - c, e.bezierCurveTo(i, l, s, q, n, r), g = f[f.length - 1]) {
              m = g.x;
              p = g.y;
              g = 1;
              for (h = this.divisions; g <= h; g++) w = g / h,
              THREE.Shape.Utils.b3(w, m, s, n, i),
              THREE.Shape.Utils.b3(w, p, q, r, l)
            }
        }
      }
      return {
        offset: v.ha * c,
        path: e
      }
    }
  }
};
THREE.FontUtils.generateShapes = function (a, b) {
  var b = b || {
  },
  c = void 0 !== b.curveSegments ? b.curveSegments : 4,
  d = void 0 !== b.font ? b.font : 'helvetiker',
  e = void 0 !== b.weight ? b.weight : 'normal',
  f = void 0 !== b.style ? b.style : 'normal';
  THREE.FontUtils.size = void 0 !== b.size ? b.size : 100;
  THREE.FontUtils.divisions = c;
  THREE.FontUtils.face = d;
  THREE.FontUtils.weight = e;
  THREE.FontUtils.style = f;
  c = THREE.FontUtils.drawText(a).paths;
  d = [
  ];
  e = 0;
  for (f = c.length; e < f; e++) Array.prototype.push.apply(d, c[e].toShapes());
  return d
};
(function (a) {
  var b = function (a) {
    for (var b = a.length, e = 0, f = b - 1, g = 0; g < b; f = g++) e += a[f].x * a[g].y - a[g].x * a[f].y;
    return 0.5 * e
  };
  a.Triangulate = function (a, d) {
    var e = a.length;
    if (3 > e) return null;
    var f = [
    ],
    g = [
    ],
    h = [
    ],
    i,
    k,
    l;
    if (0 < b(a)) for (k = 0; k < e; k++) g[k] = k;
     else for (k = 0; k < e; k++) g[k] = e - 1 - k;
    var m = 2 * e;
    for (k = e - 1; 2 < e; ) {
      if (0 >= m--) {
        console.log('Warning, unable to triangulate polygon!');
        break
      }
      i = k;
      e <= i && (i = 0);
      k = i + 1;
      e <= k && (k = 0);
      l = k + 1;
      e <= l && (l = 0);
      var p;
      a: {
        var s = p = void 0,
        q = void 0,
        n = void 0,
        r = void 0,
        v = void 0,
        w = void 0,
        x = void 0,
        t = void 0,
        s = a[g[i]].x,
        q = a[g[i]].y,
        n = a[g[k]].x,
        r = a[g[k]].y,
        v = a[g[l]].x,
        w = a[g[l]].y;
        if (1e-10 > (n - s) * (w - q) - (r - q) * (v - s)) p = !1;
         else {
          var K = void 0,
          D = void 0,
          B = void 0,
          z = void 0,
          E = void 0,
          G = void 0,
          I = void 0,
          Y = void 0,
          C = void 0,
          P = void 0,
          C = Y = I = t = x = void 0,
          K = v - n,
          D = w - r,
          B = s - v,
          z = q - w,
          E = n - s,
          G = r - q;
          for (p = 0; p < e; p++) if (!(p === i || p === k || p === l)) if (x = a[g[p]].x, t = a[g[p]].y, I = x - s, Y = t - q, C = x - n, P = t - r, x -= v, t -= w, C = K * P - D * C, I = E * Y - G * I, Y = B * t - z * x, 0 <= C && 0 <= Y && 0 <= I) {
            p = !1;
            break a
          }
          p = !0
        }
      }
      if (p) {
        f.push([a[g[i]],
        a[g[k]],
        a[g[l]]]);
        h.push([g[i],
        g[k],
        g[l]]);
        i = k;
        for (l = k + 1; l < e; i++, l++) g[i] = g[l];
        e--;
        m = 2 * e
      }
    }
    return d ? h : f
  };
  a.Triangulate.area = b;
  return a
}) (THREE.FontUtils);
self._typeface_js = {
  faces: THREE.FontUtils.faces,
  loadFace: THREE.FontUtils.loadFace
};
THREE.Curve = function () {
};
THREE.Curve.prototype.getPoint = function () {
  console.log('Warning, getPoint() not implemented!');
  return null
};
THREE.Curve.prototype.getPointAt = function (a) {
  a = this.getUtoTmapping(a);
  return this.getPoint(a)
};
THREE.Curve.prototype.getPoints = function (a) {
  a || (a = 5);
  var b,
  c = [
  ];
  for (b = 0; b <= a; b++) c.push(this.getPoint(b / a));
  return c
};
THREE.Curve.prototype.getSpacedPoints = function (a) {
  a || (a = 5);
  var b,
  c = [
  ];
  for (b = 0; b <= a; b++) c.push(this.getPointAt(b / a));
  return c
};
THREE.Curve.prototype.getLength = function () {
  var a = this.getLengths();
  return a[a.length - 1]
};
THREE.Curve.prototype.getLengths = function (a) {
  a || (a = this.__arcLengthDivisions ? this.__arcLengthDivisions : 200);
  if (this.cacheArcLengths && this.cacheArcLengths.length == a + 1 && !this.needsUpdate) return this.cacheArcLengths;
  this.needsUpdate = !1;
  var b = [
  ],
  c,
  d = this.getPoint(0),
  e,
  f = 0;
  b.push(0);
  for (e = 1; e <= a; e++) c = this.getPoint(e / a),
  f += c.distanceTo(d),
  b.push(f),
  d = c;
  return this.cacheArcLengths = b
};
THREE.Curve.prototype.updateArcLengths = function () {
  this.needsUpdate = !0;
  this.getLengths()
};
THREE.Curve.prototype.getUtoTmapping = function (a, b) {
  var c = this.getLengths(),
  d = 0,
  e = c.length,
  f;
  f = b ? b : a * c[e - 1];
  for (var g = 0, h = e - 1, i; g <= h; ) if (d = Math.floor(g + (h - g) / 2), i = c[d] - f, 0 > i) g = d + 1;
   else if (0 < i) h = d - 1;
   else {
    h = d;
    break
  }
  d = h;
  if (c[d] == f) return d / (e - 1);
  g = c[d];
  return c = (d + (f - g) / (c[d + 1] - g)) / (e - 1)
};
THREE.Curve.prototype.getTangent = function (a) {
  var b = a - 0.0001,
  a = a + 0.0001;
  0 > b && (b = 0);
  1 < a && (a = 1);
  b = this.getPoint(b);
  return this.getPoint(a).clone().subSelf(b).normalize()
};
THREE.Curve.prototype.getTangentAt = function (a) {
  a = this.getUtoTmapping(a);
  return this.getTangent(a)
};
THREE.LineCurve = function (a, b) {
  this.v1 = a;
  this.v2 = b
};
THREE.LineCurve.prototype = Object.create(THREE.Curve.prototype);
THREE.LineCurve.prototype.getPoint = function (a) {
  var b = this.v2.clone().subSelf(this.v1);
  b.multiplyScalar(a).addSelf(this.v1);
  return b
};
THREE.LineCurve.prototype.getPointAt = function (a) {
  return this.getPoint(a)
};
THREE.LineCurve.prototype.getTangent = function () {
  return this.v2.clone().subSelf(this.v1).normalize()
};
THREE.QuadraticBezierCurve = function (a, b, c) {
  this.v0 = a;
  this.v1 = b;
  this.v2 = c
};
THREE.QuadraticBezierCurve.prototype = Object.create(THREE.Curve.prototype);
THREE.QuadraticBezierCurve.prototype.getPoint = function (a) {
  var b;
  b = THREE.Shape.Utils.b2(a, this.v0.x, this.v1.x, this.v2.x);
  a = THREE.Shape.Utils.b2(a, this.v0.y, this.v1.y, this.v2.y);
  return new THREE.Vector2(b, a)
};
THREE.QuadraticBezierCurve.prototype.getTangent = function (a) {
  var b;
  b = THREE.Curve.Utils.tangentQuadraticBezier(a, this.v0.x, this.v1.x, this.v2.x);
  a = THREE.Curve.Utils.tangentQuadraticBezier(a, this.v0.y, this.v1.y, this.v2.y);
  b = new THREE.Vector2(b, a);
  b.normalize();
  return b
};
THREE.CubicBezierCurve = function (a, b, c, d) {
  this.v0 = a;
  this.v1 = b;
  this.v2 = c;
  this.v3 = d
};
THREE.CubicBezierCurve.prototype = Object.create(THREE.Curve.prototype);
THREE.CubicBezierCurve.prototype.getPoint = function (a) {
  var b;
  b = THREE.Shape.Utils.b3(a, this.v0.x, this.v1.x, this.v2.x, this.v3.x);
  a = THREE.Shape.Utils.b3(a, this.v0.y, this.v1.y, this.v2.y, this.v3.y);
  return new THREE.Vector2(b, a)
};
THREE.CubicBezierCurve.prototype.getTangent = function (a) {
  var b;
  b = THREE.Curve.Utils.tangentCubicBezier(a, this.v0.x, this.v1.x, this.v2.x, this.v3.x);
  a = THREE.Curve.Utils.tangentCubicBezier(a, this.v0.y, this.v1.y, this.v2.y, this.v3.y);
  b = new THREE.Vector2(b, a);
  b.normalize();
  return b
};
THREE.SplineCurve = function (a) {
  this.points = void 0 == a ? [
  ] : a
};
THREE.SplineCurve.prototype = Object.create(THREE.Curve.prototype);
THREE.SplineCurve.prototype.getPoint = function (a) {
  var b = new THREE.Vector2,
  c = [
  ],
  d = this.points,
  e;
  e = (d.length - 1) * a;
  a = Math.floor(e);
  e -= a;
  c[0] = 0 == a ? a : a - 1;
  c[1] = a;
  c[2] = a > d.length - 2 ? d.length - 1 : a + 1;
  c[3] = a > d.length - 3 ? d.length - 1 : a + 2;
  b.x = THREE.Curve.Utils.interpolate(d[c[0]].x, d[c[1]].x, d[c[2]].x, d[c[3]].x, e);
  b.y = THREE.Curve.Utils.interpolate(d[c[0]].y, d[c[1]].y, d[c[2]].y, d[c[3]].y, e);
  return b
};
THREE.EllipseCurve = function (a, b, c, d, e, f, g) {
  this.aX = a;
  this.aY = b;
  this.xRadius = c;
  this.yRadius = d;
  this.aStartAngle = e;
  this.aEndAngle = f;
  this.aClockwise = g
};
THREE.EllipseCurve.prototype = Object.create(THREE.Curve.prototype);
THREE.EllipseCurve.prototype.getPoint = function (a) {
  var b = this.aEndAngle - this.aStartAngle;
  this.aClockwise || (a = 1 - a);
  b = this.aStartAngle + a * b;
  a = this.aX + this.xRadius * Math.cos(b);
  b = this.aY + this.yRadius * Math.sin(b);
  return new THREE.Vector2(a, b)
};
THREE.ArcCurve = function (a, b, c, d, e, f) {
  THREE.EllipseCurve.call(this, a, b, c, c, d, e, f)
};
THREE.ArcCurve.prototype = Object.create(THREE.EllipseCurve.prototype);
THREE.Curve.Utils = {
  tangentQuadraticBezier: function (a, b, c, d) {
    return 2 * (1 - a) * (c - b) + 2 * a * (d - c)
  },
  tangentCubicBezier: function (a, b, c, d, e) {
    return - 3 * b * (1 - a) * (1 - a) + 3 * c * (1 - a) * (1 - a) - 6 * a * c * (1 - a) + 6 * a * d * (1 - a) - 3 * a * a * d + 3 * a * a * e
  },
  tangentSpline: function (a) {
    return 6 * a * a - 6 * a + (3 * a * a - 4 * a + 1) + ( - 6 * a * a + 6 * a) + (3 * a * a - 2 * a)
  },
  interpolate: function (a, b, c, d, e) {
    var a = 0.5 * (c - a),
    d = 0.5 * (d - b),
    f = e * e;
    return (2 * b - 2 * c + a + d) * e * f + ( - 3 * b + 3 * c - 2 * a - d) * f + a * e + b
  }
};
THREE.Curve.create = function (a, b) {
  a.prototype = Object.create(THREE.Curve.prototype);
  a.prototype.getPoint = b;
  return a
};
THREE.LineCurve3 = THREE.Curve.create(function (a, b) {
  this.v1 = a;
  this.v2 = b
}, function (a) {
  var b = new THREE.Vector3;
  b.sub(this.v2, this.v1);
  b.multiplyScalar(a);
  b.addSelf(this.v1);
  return b
});
THREE.QuadraticBezierCurve3 = THREE.Curve.create(function (a, b, c) {
  this.v0 = a;
  this.v1 = b;
  this.v2 = c
}, function (a) {
  var b,
  c;
  b = THREE.Shape.Utils.b2(a, this.v0.x, this.v1.x, this.v2.x);
  c = THREE.Shape.Utils.b2(a, this.v0.y, this.v1.y, this.v2.y);
  a = THREE.Shape.Utils.b2(a, this.v0.z, this.v1.z, this.v2.z);
  return new THREE.Vector3(b, c, a)
});
THREE.CubicBezierCurve3 = THREE.Curve.create(function (a, b, c, d) {
  this.v0 = a;
  this.v1 = b;
  this.v2 = c;
  this.v3 = d
}, function (a) {
  var b,
  c;
  b = THREE.Shape.Utils.b3(a, this.v0.x, this.v1.x, this.v2.x, this.v3.x);
  c = THREE.Shape.Utils.b3(a, this.v0.y, this.v1.y, this.v2.y, this.v3.y);
  a = THREE.Shape.Utils.b3(a, this.v0.z, this.v1.z, this.v2.z, this.v3.z);
  return new THREE.Vector3(b, c, a)
});
THREE.SplineCurve3 = THREE.Curve.create(function (a) {
  this.points = void 0 == a ? [
  ] : a
}, function (a) {
  var b = new THREE.Vector3,
  c = [
  ],
  d = this.points,
  e,
  a = (d.length - 1) * a;
  e = Math.floor(a);
  a -= e;
  c[0] = 0 == e ? e : e - 1;
  c[1] = e;
  c[2] = e > d.length - 2 ? d.length - 1 : e + 1;
  c[3] = e > d.length - 3 ? d.length - 1 : e + 2;
  e = d[c[0]];
  var f = d[c[1]],
  g = d[c[2]],
  c = d[c[3]];
  b.x = THREE.Curve.Utils.interpolate(e.x, f.x, g.x, c.x, a);
  b.y = THREE.Curve.Utils.interpolate(e.y, f.y, g.y, c.y, a);
  b.z = THREE.Curve.Utils.interpolate(e.z, f.z, g.z, c.z, a);
  return b
});
THREE.ClosedSplineCurve3 = THREE.Curve.create(function (a) {
  this.points = void 0 == a ? [
  ] : a
}, function (a) {
  var b = new THREE.Vector3,
  c = [
  ],
  d = this.points,
  e;
  e = (d.length - 0) * a;
  a = Math.floor(e);
  e -= a;
  a += 0 < a ? 0 : (Math.floor(Math.abs(a) / d.length) + 1) * d.length;
  c[0] = (a - 1) % d.length;
  c[1] = a % d.length;
  c[2] = (a + 1) % d.length;
  c[3] = (a + 2) % d.length;
  b.x = THREE.Curve.Utils.interpolate(d[c[0]].x, d[c[1]].x, d[c[2]].x, d[c[3]].x, e);
  b.y = THREE.Curve.Utils.interpolate(d[c[0]].y, d[c[1]].y, d[c[2]].y, d[c[3]].y, e);
  b.z = THREE.Curve.Utils.interpolate(d[c[0]].z, d[c[1]].z, d[c[2]].z, d[c[3]].z, e);
  return b
});
THREE.CurvePath = function () {
  this.curves = [
  ];
  this.bends = [
  ];
  this.autoClose = !1
};
THREE.CurvePath.prototype = Object.create(THREE.Curve.prototype);
THREE.CurvePath.prototype.add = function (a) {
  this.curves.push(a)
};
THREE.CurvePath.prototype.checkConnection = function () {
};
THREE.CurvePath.prototype.closePath = function () {
  var a = this.curves[0].getPoint(0),
  b = this.curves[this.curves.length - 1].getPoint(1);
  a.equals(b) || this.curves.push(new THREE.LineCurve(b, a))
};
THREE.CurvePath.prototype.getPoint = function (a) {
  for (var b = a * this.getLength(), c = this.getCurveLengths(), a = 0; a < c.length; ) {
    if (c[a] >= b) return b = c[a] - b,
    a = this.curves[a],
    b = 1 - b / a.getLength(),
    a.getPointAt(b);
    a++
  }
  return null
};
THREE.CurvePath.prototype.getLength = function () {
  var a = this.getCurveLengths();
  return a[a.length - 1]
};
THREE.CurvePath.prototype.getCurveLengths = function () {
  if (this.cacheLengths && this.cacheLengths.length == this.curves.length) return this.cacheLengths;
  var a = [
  ],
  b = 0,
  c,
  d = this.curves.length;
  for (c = 0; c < d; c++) b += this.curves[c].getLength(),
  a.push(b);
  return this.cacheLengths = a
};
THREE.CurvePath.prototype.getBoundingBox = function () {
  var a = this.getPoints(),
  b,
  c,
  d,
  e,
  f,
  g;
  b = c = Number.NEGATIVE_INFINITY;
  e = f = Number.POSITIVE_INFINITY;
  var h,
  i,
  k,
  l,
  m = a[0] instanceof THREE.Vector3;
  l = m ? new THREE.Vector3 : new THREE.Vector2;
  i = 0;
  for (k = a.length; i < k; i++) h = a[i],
  h.x > b ? b = h.x : h.x < e && (e = h.x),
  h.y > c ? c = h.y : h.y < f && (f = h.y),
  m && (h.z > d ? d = h.z : h.z < g && (g = h.z)),
  l.addSelf(h);
  a = {
    minX: e,
    minY: f,
    maxX: b,
    maxY: c,
    centroid: l.divideScalar(k)
  };
  m && (a.maxZ = d, a.minZ = g);
  return a
};
THREE.CurvePath.prototype.createPointsGeometry = function (a) {
  a = this.getPoints(a, !0);
  return this.createGeometry(a)
};
THREE.CurvePath.prototype.createSpacedPointsGeometry = function (a) {
  a = this.getSpacedPoints(a, !0);
  return this.createGeometry(a)
};
THREE.CurvePath.prototype.createGeometry = function (a) {
  for (var b = new THREE.Geometry, c = 0; c < a.length; c++) b.vertices.push(new THREE.Vector3(a[c].x, a[c].y, a[c].z || 0));
  return b
};
THREE.CurvePath.prototype.addWrapPath = function (a) {
  this.bends.push(a)
};
THREE.CurvePath.prototype.getTransformedPoints = function (a, b) {
  var c = this.getPoints(a),
  d,
  e;
  b || (b = this.bends);
  d = 0;
  for (e = b.length; d < e; d++) c = this.getWrapPoints(c, b[d]);
  return c
};
THREE.CurvePath.prototype.getTransformedSpacedPoints = function (a, b) {
  var c = this.getSpacedPoints(a),
  d,
  e;
  b || (b = this.bends);
  d = 0;
  for (e = b.length; d < e; d++) c = this.getWrapPoints(c, b[d]);
  return c
};
THREE.CurvePath.prototype.getWrapPoints = function (a, b) {
  var c = this.getBoundingBox(),
  d,
  e,
  f,
  g,
  h,
  i;
  d = 0;
  for (e = a.length; d < e; d++) f = a[d],
  g = f.x,
  h = f.y,
  i = g / c.maxX,
  i = b.getUtoTmapping(i, g),
  g = b.getPoint(i),
  h = b.getNormalVector(i).multiplyScalar(h),
  f.x = g.x + h.x,
  f.y = g.y + h.y;
  return a
};
THREE.Gyroscope = function () {
  THREE.Object3D.call(this)
};
THREE.Gyroscope.prototype = Object.create(THREE.Object3D.prototype);
THREE.Gyroscope.prototype.updateMatrixWorld = function (a) {
  this.matrixAutoUpdate && this.updateMatrix();
  if (this.matrixWorldNeedsUpdate || a) this.parent ? (this.matrixWorld.multiply(this.parent.matrixWorld, this.matrix), this.matrixWorld.decompose(this.translationWorld, this.rotationWorld, this.scaleWorld), this.matrix.decompose(this.translationObject, this.rotationObject, this.scaleObject), this.matrixWorld.compose(this.translationWorld, this.rotationObject, this.scaleWorld)) : this.matrixWorld.copy(this.matrix),
  this.matrixWorldNeedsUpdate = !1,
  a = !0;
  for (var b = 0, c = this.children.length; b < c; b++) this.children[b].updateMatrixWorld(a)
};
THREE.Gyroscope.prototype.translationWorld = new THREE.Vector3;
THREE.Gyroscope.prototype.translationObject = new THREE.Vector3;
THREE.Gyroscope.prototype.rotationWorld = new THREE.Quaternion;
THREE.Gyroscope.prototype.rotationObject = new THREE.Quaternion;
THREE.Gyroscope.prototype.scaleWorld = new THREE.Vector3;
THREE.Gyroscope.prototype.scaleObject = new THREE.Vector3;
THREE.Path = function (a) {
  THREE.CurvePath.call(this);
  this.actions = [
  ];
  a && this.fromPoints(a)
};
THREE.Path.prototype = Object.create(THREE.CurvePath.prototype);
THREE.PathActions = {
  MOVE_TO: 'moveTo',
  LINE_TO: 'lineTo',
  QUADRATIC_CURVE_TO: 'quadraticCurveTo',
  BEZIER_CURVE_TO: 'bezierCurveTo',
  CSPLINE_THRU: 'splineThru',
  ARC: 'arc',
  ELLIPSE: 'ellipse'
};
THREE.Path.prototype.fromPoints = function (a) {
  this.moveTo(a[0].x, a[0].y);
  for (var b = 1, c = a.length; b < c; b++) this.lineTo(a[b].x, a[b].y)
};
THREE.Path.prototype.moveTo = function (a, b) {
  var c = Array.prototype.slice.call(arguments);
  this.actions.push({
    action: THREE.PathActions.MOVE_TO,
    args: c
  })
};
THREE.Path.prototype.lineTo = function (a, b) {
  var c = Array.prototype.slice.call(arguments),
  d = this.actions[this.actions.length - 1].args,
  d = new THREE.LineCurve(new THREE.Vector2(d[d.length - 2], d[d.length - 1]), new THREE.Vector2(a, b));
  this.curves.push(d);
  this.actions.push({
    action: THREE.PathActions.LINE_TO,
    args: c
  })
};
THREE.Path.prototype.quadraticCurveTo = function (a, b, c, d) {
  var e = Array.prototype.slice.call(arguments),
  f = this.actions[this.actions.length - 1].args,
  f = new THREE.QuadraticBezierCurve(new THREE.Vector2(f[f.length - 2], f[f.length - 1]), new THREE.Vector2(a, b), new THREE.Vector2(c, d));
  this.curves.push(f);
  this.actions.push({
    action: THREE.PathActions.QUADRATIC_CURVE_TO,
    args: e
  })
};
THREE.Path.prototype.bezierCurveTo = function (a, b, c, d, e, f) {
  var g = Array.prototype.slice.call(arguments),
  h = this.actions[this.actions.length - 1].args,
  h = new THREE.CubicBezierCurve(new THREE.Vector2(h[h.length - 2], h[h.length - 1]), new THREE.Vector2(a, b), new THREE.Vector2(c, d), new THREE.Vector2(e, f));
  this.curves.push(h);
  this.actions.push({
    action: THREE.PathActions.BEZIER_CURVE_TO,
    args: g
  })
};
THREE.Path.prototype.splineThru = function (a) {
  var b = Array.prototype.slice.call(arguments),
  c = this.actions[this.actions.length - 1].args,
  c = [
    new THREE.Vector2(c[c.length - 2], c[c.length - 1])
  ];
  Array.prototype.push.apply(c, a);
  c = new THREE.SplineCurve(c);
  this.curves.push(c);
  this.actions.push({
    action: THREE.PathActions.CSPLINE_THRU,
    args: b
  })
};
THREE.Path.prototype.arc = function (a, b, c, d, e, f) {
  var g = this.actions[this.actions.length - 1].args;
  this.absarc(a + g[g.length - 2], b + g[g.length - 1], c, d, e, f)
};
THREE.Path.prototype.absarc = function (a, b, c, d, e, f) {
  this.absellipse(a, b, c, c, d, e, f)
};
THREE.Path.prototype.ellipse = function (a, b, c, d, e, f, g) {
  var h = this.actions[this.actions.length - 1].args;
  this.absellipse(a + h[h.length - 2], b + h[h.length - 1], c, d, e, f, g)
};
THREE.Path.prototype.absellipse = function (a, b, c, d, e, f, g) {
  var h = Array.prototype.slice.call(arguments),
  i = new THREE.EllipseCurve(a, b, c, d, e, f, g);
  this.curves.push(i);
  i = i.getPoint(g ? 1 : 0);
  h.push(i.x);
  h.push(i.y);
  this.actions.push({
    action: THREE.PathActions.ELLIPSE,
    args: h
  })
};
THREE.Path.prototype.getSpacedPoints = function (a) {
  a || (a = 40);
  for (var b = [
  ], c = 0; c < a; c++) b.push(this.getPoint(c / a));
  return b
};
THREE.Path.prototype.getPoints = function (a, b) {
  if (this.useSpacedPoints) return console.log('tata'),
  this.getSpacedPoints(a, b);
  var a = a || 12,
  c = [
  ],
  d,
  e,
  f,
  g,
  h,
  i,
  k,
  l,
  m,
  p,
  s,
  q,
  n;
  d = 0;
  for (e = this.actions.length; d < e; d++) switch (f = this.actions[d], g = f.action, f = f.args, g) {
    case THREE.PathActions.MOVE_TO:
      c.push(new THREE.Vector2(f[0], f[1]));
      break;
    case THREE.PathActions.LINE_TO:
      c.push(new THREE.Vector2(f[0], f[1]));
      break;
    case THREE.PathActions.QUADRATIC_CURVE_TO:
      h = f[2];
      i = f[3];
      m = f[0];
      p = f[1];
      0 < c.length ? (g = c[c.length - 1], s = g.x, q = g.y) : (g = this.actions[d - 1].args, s = g[g.length - 2], q = g[g.length - 1]);
      for (f = 1; f <= a; f++) n = f / a,
      g = THREE.Shape.Utils.b2(n, s, m, h),
      n = THREE.Shape.Utils.b2(n, q, p, i),
      c.push(new THREE.Vector2(g, n));
      break;
    case THREE.PathActions.BEZIER_CURVE_TO:
      h = f[4];
      i = f[5];
      m = f[0];
      p = f[1];
      k = f[2];
      l = f[3];
      0 < c.length ? (g = c[c.length - 1], s = g.x, q = g.y) : (g = this.actions[d - 1].args, s = g[g.length - 2], q = g[g.length - 1]);
      for (f = 1; f <= a; f++) n = f / a,
      g = THREE.Shape.Utils.b3(n, s, m, k, h),
      n = THREE.Shape.Utils.b3(n, q, p, l, i),
      c.push(new THREE.Vector2(g, n));
      break;
    case THREE.PathActions.CSPLINE_THRU:
      g = this.actions[d - 1].args;
      n = [
        new THREE.Vector2(g[g.length - 2], g[g.length - 1])
      ];
      g = a * f[0].length;
      n = n.concat(f[0]);
      n = new THREE.SplineCurve(n);
      for (f = 1; f <= g; f++) c.push(n.getPointAt(f / g));
      break;
    case THREE.PathActions.ARC:
      h = f[0];
      i = f[1];
      p = f[2];
      k = f[3];
      g = f[4];
      m = !!f[5];
      s = g - k;
      q = 2 * a;
      for (f = 1; f <= q; f++) n = f / q,
      m || (n = 1 - n),
      n = k + n * s,
      g = h + p * Math.cos(n),
      n = i + p * Math.sin(n),
      c.push(new THREE.Vector2(g, n));
      break;
    case THREE.PathActions.ELLIPSE:
      h = f[0];
      i = f[1];
      p = f[2];
      l = f[3];
      k = f[4];
      g = f[5];
      m = !!f[6];
      s = g - k;
      q = 2 * a;
      for (f = 1; f <= q; f++) n = f / q,
      m || (n = 1 - n),
      n = k + n * s,
      g = h + p * Math.cos(n),
      n = i + l * Math.sin(n),
      c.push(new THREE.Vector2(g, n))
  }
  d = c[c.length - 1];
  1e-10 > Math.abs(d.x - c[0].x) && 1e-10 > Math.abs(d.y - c[0].y) && c.splice(c.length - 1, 1);
  b && c.push(c[0]);
  return c
};
THREE.Path.prototype.toShapes = function () {
  var a,
  b,
  c,
  d,
  e = [
  ],
  f = new THREE.Path;
  a = 0;
  for (b = this.actions.length; a < b; a++) c = this.actions[a],
  d = c.args,
  c = c.action,
  c == THREE.PathActions.MOVE_TO && 0 != f.actions.length && (e.push(f), f = new THREE.Path),
  f[c].apply(f, d);
  0 != f.actions.length && e.push(f);
  if (0 == e.length) return [];
  var g;
  d = [
  ];
  a = !THREE.Shape.Utils.isClockWise(e[0].getPoints());
  if (1 == e.length) return f = e[0],
  g = new THREE.Shape,
  g.actions = f.actions,
  g.curves = f.curves,
  d.push(g),
  d;
  if (a) {
    g = new THREE.Shape;
    a = 0;
    for (b = e.length; a <
    b; a++) f = e[a],
    THREE.Shape.Utils.isClockWise(f.getPoints()) ? (g.actions = f.actions, g.curves = f.curves, d.push(g), g = new THREE.Shape) : g.holes.push(f)
  } else {
    a = 0;
    for (b = e.length; a < b; a++) f = e[a],
    THREE.Shape.Utils.isClockWise(f.getPoints()) ? (g && d.push(g), g = new THREE.Shape, g.actions = f.actions, g.curves = f.curves) : g.holes.push(f);
    d.push(g)
  }
  return d
};
THREE.Shape = function () {
  THREE.Path.apply(this, arguments);
  this.holes = [
  ]
};
THREE.Shape.prototype = Object.create(THREE.Path.prototype);
THREE.Shape.prototype.extrude = function (a) {
  return new THREE.ExtrudeGeometry(this, a)
};
THREE.Shape.prototype.makeGeometry = function (a) {
  return new THREE.ShapeGeometry(this, a)
};
THREE.Shape.prototype.getPointsHoles = function (a) {
  var b,
  c = this.holes.length,
  d = [
  ];
  for (b = 0; b < c; b++) d[b] = this.holes[b].getTransformedPoints(a, this.bends);
  return d
};
THREE.Shape.prototype.getSpacedPointsHoles = function (a) {
  var b,
  c = this.holes.length,
  d = [
  ];
  for (b = 0; b < c; b++) d[b] = this.holes[b].getTransformedSpacedPoints(a, this.bends);
  return d
};
THREE.Shape.prototype.extractAllPoints = function (a) {
  return {
    shape: this.getTransformedPoints(a),
    holes: this.getPointsHoles(a)
  }
};
THREE.Shape.prototype.extractPoints = function (a) {
  return this.useSpacedPoints ? this.extractAllSpacedPoints(a) : this.extractAllPoints(a)
};
THREE.Shape.prototype.extractAllSpacedPoints = function (a) {
  return {
    shape: this.getTransformedSpacedPoints(a),
    holes: this.getSpacedPointsHoles(a)
  }
};
THREE.Shape.Utils = {
  removeHoles: function (a, b) {
    var c = a.concat(),
    d = c.concat(),
    e,
    f,
    g,
    h,
    i,
    k,
    l,
    m,
    p,
    s,
    q = [
    ];
    for (i = 0; i < b.length; i++) {
      k = b[i];
      Array.prototype.push.apply(d, k);
      f = Number.POSITIVE_INFINITY;
      for (e = 0; e < k.length; e++) {
        p = k[e];
        s = [
        ];
        for (m = 0; m < c.length; m++) l = c[m],
        l = p.distanceToSquared(l),
        s.push(l),
        l < f && (f = l, g = e, h = m)
      }
      e = 0 <= h - 1 ? h - 1 : c.length - 1;
      f = 0 <= g - 1 ? g - 1 : k.length - 1;
      var n = [
        k[g],
        c[h],
        c[e]
      ];
      m = THREE.FontUtils.Triangulate.area(n);
      var r = [
        k[g],
        k[f],
        c[h]
      ];
      p = THREE.FontUtils.Triangulate.area(r);
      s = h;
      l = g;
      h += 1;
      g += - 1;
      0 >
      h && (h += c.length);
      h %= c.length;
      0 > g && (g += k.length);
      g %= k.length;
      e = 0 <= h - 1 ? h - 1 : c.length - 1;
      f = 0 <= g - 1 ? g - 1 : k.length - 1;
      n = [
        k[g],
        c[h],
        c[e]
      ];
      n = THREE.FontUtils.Triangulate.area(n);
      r = [
        k[g],
        k[f],
        c[h]
      ];
      r = THREE.FontUtils.Triangulate.area(r);
      m + p > n + r && (h = s, g = l, 0 > h && (h += c.length), h %= c.length, 0 > g && (g += k.length), g %= k.length, e = 0 <= h - 1 ? h - 1 : c.length - 1, f = 0 <= g - 1 ? g - 1 : k.length - 1);
      m = c.slice(0, h);
      p = c.slice(h);
      s = k.slice(g);
      l = k.slice(0, g);
      f = [
        k[g],
        k[f],
        c[h]
      ];
      q.push([k[g],
      c[h],
      c[e]]);
      q.push(f);
      c = m.concat(s).concat(l).concat(p)
    }
    return {
      shape: c,
      isolatedPts: q,
      allpoints: d
    }
  },
  triangulateShape: function (a, b) {
    var c = THREE.Shape.Utils.removeHoles(a, b),
    d = c.allpoints,
    e = c.isolatedPts,
    c = THREE.FontUtils.Triangulate(c.shape, !1),
    f,
    g,
    h,
    i,
    k = {
    };
    f = 0;
    for (g = d.length; f < g; f++) i = d[f].x + ':' + d[f].y,
    void 0 !== k[i] && console.log('Duplicate point', i),
    k[i] = f;
    f = 0;
    for (g = c.length; f < g; f++) {
      h = c[f];
      for (d = 0; 3 > d; d++) i = h[d].x + ':' + h[d].y,
      i = k[i],
      void 0 !== i && (h[d] = i)
    }
    f = 0;
    for (g = e.length; f < g; f++) {
      h = e[f];
      for (d = 0; 3 > d; d++) i = h[d].x + ':' + h[d].y,
      i = k[i],
      void 0 !== i && (h[d] = i)
    }
    return c.concat(e)
  },
  isClockWise: function (a) {
    return 0 > THREE.FontUtils.Triangulate.area(a)
  },
  b2p0: function (a, b) {
    var c = 1 - a;
    return c * c * b
  },
  b2p1: function (a, b) {
    return 2 * (1 - a) * a * b
  },
  b2p2: function (a, b) {
    return a * a * b
  },
  b2: function (a, b, c, d) {
    return this.b2p0(a, b) + this.b2p1(a, c) + this.b2p2(a, d)
  },
  b3p0: function (a, b) {
    var c = 1 - a;
    return c * c * c * b
  },
  b3p1: function (a, b) {
    var c = 1 - a;
    return 3 * c * c * a * b
  },
  b3p2: function (a, b) {
    return 3 * (1 - a) * a * a * b
  },
  b3p3: function (a, b) {
    return a * a * a * b
  },
  b3: function (a, b, c, d, e) {
    return this.b3p0(a, b) + this.b3p1(a, c) + this.b3p2(a, d) +
    this.b3p3(a, e)
  }
};
THREE.AnimationHandler = function () {
  var a = [
  ],
  b = {
  },
  c = {
    update: function (b) {
      for (var c = 0; c < a.length; c++) a[c].update(b)
    },
    addToUpdate: function (b) {
      - 1 === a.indexOf(b) && a.push(b)
    },
    removeFromUpdate: function (b) {
      b = a.indexOf(b);
      - 1 !== b && a.splice(b, 1)
    },
    add: function (a) {
      void 0 !== b[a.name] && console.log('THREE.AnimationHandler.add: Warning! ' + a.name + ' already exists in library. Overwriting.');
      b[a.name] = a;
      if (!0 !== a.initialized) {
        for (var c = 0; c < a.hierarchy.length; c++) {
          for (var d = 0; d < a.hierarchy[c].keys.length; d++) if (0 > a.hierarchy[c].keys[d].time && (a.hierarchy[c].keys[d].time = 0), void 0 !== a.hierarchy[c].keys[d].rot && !(a.hierarchy[c].keys[d].rot instanceof THREE.Quaternion)) {
            var h = a.hierarchy[c].keys[d].rot;
            a.hierarchy[c].keys[d].rot = new THREE.Quaternion(h[0], h[1], h[2], h[3])
          }
          if (a.hierarchy[c].keys.length && void 0 !== a.hierarchy[c].keys[0].morphTargets) {
            h = {
            };
            for (d = 0; d < a.hierarchy[c].keys.length; d++) for (var i = 0; i < a.hierarchy[c].keys[d].morphTargets.length; i++) {
              var k = a.hierarchy[c].keys[d].morphTargets[i];
              h[k] = - 1
            }
            a.hierarchy[c].usedMorphTargets = h;
            for (d = 0; d < a.hierarchy[c].keys.length; d++) {
              var l = {
              };
              for (k in h) {
                for (i = 0; i < a.hierarchy[c].keys[d].morphTargets.length; i++) if (a.hierarchy[c].keys[d].morphTargets[i] === k) {
                  l[k] = a.hierarchy[c].keys[d].morphTargetsInfluences[i];
                  break
                }
                i === a.hierarchy[c].keys[d].morphTargets.length && (l[k] = 0)
              }
              a.hierarchy[c].keys[d].morphTargetsInfluences = l
            }
          }
          for (d = 1; d < a.hierarchy[c].keys.length; d++) a.hierarchy[c].keys[d].time === a.hierarchy[c].keys[d - 1].time && (a.hierarchy[c].keys.splice(d, 1), d--);
          for (d = 0; d < a.hierarchy[c].keys.length; d++) a.hierarchy[c].keys[d].index = d
        }
        d = parseInt(a.length * a.fps, 10);
        a.JIT = {
        };
        a.JIT.hierarchy = [
        ];
        for (c = 0; c < a.hierarchy.length; c++) a.JIT.hierarchy.push(Array(d));
        a.initialized = !0
      }
    },
    get: function (a) {
      if ('string' === typeof a) {
        if (b[a]) return b[a];
        console.log('THREE.AnimationHandler.get: Couldn\'t find animation ' + a);
        return null
      }
    },
    parse: function (a) {
      var b = [
      ];
      if (a instanceof THREE.SkinnedMesh) for (var c = 0; c < a.bones.length; c++) b.push(a.bones[c]);
       else d(a, b);
      return b
    }
  },
  d = function (a, b) {
    b.push(a);
    for (var c = 0; c < a.children.length; c++) d(a.children[c], b)
  };
  c.LINEAR = 0;
  c.CATMULLROM = 1;
  c.CATMULLROM_FORWARD = 2;
  return c
}();
THREE.Animation = function (a, b, c) {
  this.root = a;
  this.data = THREE.AnimationHandler.get(b);
  this.hierarchy = THREE.AnimationHandler.parse(a);
  this.currentTime = 0;
  this.timeScale = 1;
  this.isPlaying = !1;
  this.loop = this.isPaused = !0;
  this.interpolationType = void 0 !== c ? c : THREE.AnimationHandler.LINEAR;
  this.points = [
  ];
  this.target = new THREE.Vector3
};
THREE.Animation.prototype.play = function (a, b) {
  if (!1 === this.isPlaying) {
    this.isPlaying = !0;
    this.loop = void 0 !== a ? a : !0;
    this.currentTime = void 0 !== b ? b : 0;
    var c,
    d = this.hierarchy.length,
    e;
    for (c = 0; c < d; c++) {
      e = this.hierarchy[c];
      this.interpolationType !== THREE.AnimationHandler.CATMULLROM_FORWARD && (e.useQuaternion = !0);
      e.matrixAutoUpdate = !0;
      void 0 === e.animationCache && (e.animationCache = {
      }, e.animationCache.prevKey = {
        pos: 0,
        rot: 0,
        scl: 0
      }, e.animationCache.nextKey = {
        pos: 0,
        rot: 0,
        scl: 0
      }, e.animationCache.originalMatrix = e instanceof THREE.Bone ? e.skinMatrix : e.matrix);
      var f = e.animationCache.prevKey;
      e = e.animationCache.nextKey;
      f.pos = this.data.hierarchy[c].keys[0];
      f.rot = this.data.hierarchy[c].keys[0];
      f.scl = this.data.hierarchy[c].keys[0];
      e.pos = this.getNextKeyWith('pos', c, 1);
      e.rot = this.getNextKeyWith('rot', c, 1);
      e.scl = this.getNextKeyWith('scl', c, 1)
    }
    this.update(0)
  }
  this.isPaused = !1;
  THREE.AnimationHandler.addToUpdate(this)
};
THREE.Animation.prototype.pause = function () {
  !0 === this.isPaused ? THREE.AnimationHandler.addToUpdate(this) : THREE.AnimationHandler.removeFromUpdate(this);
  this.isPaused = !this.isPaused
};
THREE.Animation.prototype.stop = function () {
  this.isPaused = this.isPlaying = !1;
  THREE.AnimationHandler.removeFromUpdate(this)
};
THREE.Animation.prototype.update = function (a) {
  if (!1 !== this.isPlaying) {
    var b = [
      'pos',
      'rot',
      'scl'
    ],
    c,
    d,
    e,
    f,
    g,
    h,
    i,
    k,
    l;
    l = this.currentTime += a * this.timeScale;
    k = this.currentTime %= this.data.length;
    parseInt(Math.min(k * this.data.fps, this.data.length * this.data.fps), 10);
    for (var m = 0, p = this.hierarchy.length; m < p; m++) {
      a = this.hierarchy[m];
      i = a.animationCache;
      for (var s = 0; 3 > s; s++) {
        c = b[s];
        g = i.prevKey[c];
        h = i.nextKey[c];
        if (h.time <= l) {
          if (k < l) if (this.loop) {
            g = this.data.hierarchy[m].keys[0];
            for (h = this.getNextKeyWith(c, m, 1); h.time <
            k; ) g = h,
            h = this.getNextKeyWith(c, m, h.index + 1)
          } else {
            this.stop();
            return
          } else {
            do g = h,
            h = this.getNextKeyWith(c, m, h.index + 1);
            while (h.time < k)
          }
          i.prevKey[c] = g;
          i.nextKey[c] = h
        }
        a.matrixAutoUpdate = !0;
        a.matrixWorldNeedsUpdate = !0;
        d = (k - g.time) / (h.time - g.time);
        e = g[c];
        f = h[c];
        if (0 > d || 1 < d) console.log('THREE.Animation.update: Warning! Scale out of bounds:' + d + ' on bone ' + m),
        d = 0 > d ? 0 : 1;
        if ('pos' === c) if (c = a.position, this.interpolationType === THREE.AnimationHandler.LINEAR) c.x = e[0] + (f[0] - e[0]) * d,
        c.y = e[1] + (f[1] - e[1]) * d,
        c.z = e[2] + (f[2] - e[2]) * d;
         else {
          if (this.interpolationType === THREE.AnimationHandler.CATMULLROM || this.interpolationType === THREE.AnimationHandler.CATMULLROM_FORWARD) this.points[0] = this.getPrevKeyWith('pos', m, g.index - 1).pos,
          this.points[1] = e,
          this.points[2] = f,
          this.points[3] = this.getNextKeyWith('pos', m, h.index + 1).pos,
          d = 0.33 * d + 0.33,
          e = this.interpolateCatmullRom(this.points, d),
          c.x = e[0],
          c.y = e[1],
          c.z = e[2],
          this.interpolationType === THREE.AnimationHandler.CATMULLROM_FORWARD && (d = this.interpolateCatmullRom(this.points, 1.01 * d), this.target.set(d[0], d[1], d[2]), this.target.subSelf(c), this.target.y = 0, this.target.normalize(), d = Math.atan2(this.target.x, this.target.z), a.rotation.set(0, d, 0))
        } else 'rot' === c ? THREE.Quaternion.slerp(e, f, a.quaternion, d) : 'scl' === c && (c = a.scale, c.x = e[0] + (f[0] - e[0]) * d, c.y = e[1] + (f[1] - e[1]) * d, c.z = e[2] + (f[2] - e[2]) * d)
      }
    }
  }
};
THREE.Animation.prototype.interpolateCatmullRom = function (a, b) {
  var c = [
  ],
  d = [
  ],
  e,
  f,
  g,
  h,
  i,
  k;
  e = (a.length - 1) * b;
  f = Math.floor(e);
  e -= f;
  c[0] = 0 === f ? f : f - 1;
  c[1] = f;
  c[2] = f > a.length - 2 ? f : f + 1;
  c[3] = f > a.length - 3 ? f : f + 2;
  f = a[c[0]];
  h = a[c[1]];
  i = a[c[2]];
  k = a[c[3]];
  c = e * e;
  g = e * c;
  d[0] = this.interpolate(f[0], h[0], i[0], k[0], e, c, g);
  d[1] = this.interpolate(f[1], h[1], i[1], k[1], e, c, g);
  d[2] = this.interpolate(f[2], h[2], i[2], k[2], e, c, g);
  return d
};
THREE.Animation.prototype.interpolate = function (a, b, c, d, e, f, g) {
  a = 0.5 * (c - a);
  d = 0.5 * (d - b);
  return (2 * (b - c) + a + d) * g + ( - 3 * (b - c) - 2 * a - d) * f + a * e + b
};
THREE.Animation.prototype.getNextKeyWith = function (a, b, c) {
  for (var d = this.data.hierarchy[b].keys, c = this.interpolationType === THREE.AnimationHandler.CATMULLROM || this.interpolationType === THREE.AnimationHandler.CATMULLROM_FORWARD ? c < d.length - 1 ? c : d.length - 1 : c % d.length; c < d.length; c++) if (void 0 !== d[c][a]) return d[c];
  return this.data.hierarchy[b].keys[0]
};
THREE.Animation.prototype.getPrevKeyWith = function (a, b, c) {
  for (var d = this.data.hierarchy[b].keys, c = this.interpolationType === THREE.AnimationHandler.CATMULLROM || this.interpolationType === THREE.AnimationHandler.CATMULLROM_FORWARD ? 0 < c ? c : 0 : 0 <= c ? c : c + d.length; 0 <= c; c--) if (void 0 !== d[c][a]) return d[c];
  return this.data.hierarchy[b].keys[d.length - 1]
};
THREE.KeyFrameAnimation = function (a, b, c) {
  this.root = a;
  this.data = THREE.AnimationHandler.get(b);
  this.hierarchy = THREE.AnimationHandler.parse(a);
  this.currentTime = 0;
  this.timeScale = 0.001;
  this.isPlaying = !1;
  this.loop = this.isPaused = !0;
  this.JITCompile = void 0 !== c ? c : !0;
  a = 0;
  for (b = this.hierarchy.length; a < b; a++) {
    var c = this.data.hierarchy[a].sids,
    d = this.hierarchy[a];
    if (this.data.hierarchy[a].keys.length && c) {
      for (var e = 0; e < c.length; e++) {
        var f = c[e],
        g = this.getNextKeyWith(f, a, 0);
        g && g.apply(f)
      }
      d.matrixAutoUpdate = !1;
      this.data.hierarchy[a].node.updateMatrix();
      d.matrixWorldNeedsUpdate = !0
    }
  }
};
THREE.KeyFrameAnimation.prototype.play = function (a, b) {
  if (!this.isPlaying) {
    this.isPlaying = !0;
    this.loop = void 0 !== a ? a : !0;
    this.currentTime = void 0 !== b ? b : 0;
    this.startTimeMs = b;
    this.startTime = 10000000;
    this.endTime = - this.startTime;
    var c,
    d = this.hierarchy.length,
    e,
    f;
    for (c = 0; c < d; c++) e = this.hierarchy[c],
    f = this.data.hierarchy[c],
    e.useQuaternion = !0,
    void 0 === f.animationCache && (f.animationCache = {
    }, f.animationCache.prevKey = null, f.animationCache.nextKey = null, f.animationCache.originalMatrix = e instanceof THREE.Bone ? e.skinMatrix :
    e.matrix),
    e = this.data.hierarchy[c].keys,
    e.length && (f.animationCache.prevKey = e[0], f.animationCache.nextKey = e[1], this.startTime = Math.min(e[0].time, this.startTime), this.endTime = Math.max(e[e.length - 1].time, this.endTime));
    this.update(0)
  }
  this.isPaused = !1;
  THREE.AnimationHandler.addToUpdate(this)
};
THREE.KeyFrameAnimation.prototype.pause = function () {
  this.isPaused ? THREE.AnimationHandler.addToUpdate(this) : THREE.AnimationHandler.removeFromUpdate(this);
  this.isPaused = !this.isPaused
};
THREE.KeyFrameAnimation.prototype.stop = function () {
  this.isPaused = this.isPlaying = !1;
  THREE.AnimationHandler.removeFromUpdate(this);
  for (var a = 0; a < this.data.hierarchy.length; a++) {
    var b = this.hierarchy[a],
    c = this.data.hierarchy[a];
    if (void 0 !== c.animationCache) {
      var d = c.animationCache.originalMatrix;
      b instanceof THREE.Bone ? (d.copy(b.skinMatrix), b.skinMatrix = d) : (d.copy(b.matrix), b.matrix = d);
      delete c.animationCache
    }
  }
};
THREE.KeyFrameAnimation.prototype.update = function (a) {
  if (this.isPlaying) {
    var b,
    c,
    d,
    e,
    f = this.data.JIT.hierarchy,
    g,
    h,
    i;
    h = this.currentTime += a * this.timeScale;
    g = this.currentTime %= this.data.length;
    g < this.startTimeMs && (g = this.currentTime = this.startTimeMs + g);
    e = parseInt(Math.min(g * this.data.fps, this.data.length * this.data.fps), 10);
    if ((i = g < h) && !this.loop) {
      for (var a = 0, k = this.hierarchy.length; a < k; a++) {
        var l = this.data.hierarchy[a].keys,
        f = this.data.hierarchy[a].sids;
        d = l.length - 1;
        e = this.hierarchy[a];
        if (l.length) {
          for (l = 0; l < f.length; l++) g = f[l],
          (h = this.getPrevKeyWith(g, a, d)) && h.apply(g);
          this.data.hierarchy[a].node.updateMatrix();
          e.matrixWorldNeedsUpdate = !0
        }
      }
      this.stop()
    } else if (!(g < this.startTime)) {
      a = 0;
      for (k = this.hierarchy.length; a < k; a++) {
        d = this.hierarchy[a];
        b = this.data.hierarchy[a];
        var l = b.keys,
        m = b.animationCache;
        if (this.JITCompile && void 0 !== f[a][e]) d instanceof THREE.Bone ? (d.skinMatrix = f[a][e], d.matrixWorldNeedsUpdate = !1) : (d.matrix = f[a][e], d.matrixWorldNeedsUpdate = !0);
         else if (l.length) {
          this.JITCompile && m && (d instanceof THREE.Bone ? d.skinMatrix = m.originalMatrix : d.matrix = m.originalMatrix);
          b = m.prevKey;
          c = m.nextKey;
          if (b && c) {
            if (c.time <= h) {
              if (i && this.loop) {
                b = l[0];
                for (c = l[1]; c.time < g; ) b = c,
                c = l[b.index + 1]
              } else if (!i) for (var p = l.length - 1; c.time < g && c.index !== p; ) b = c,
              c = l[b.index + 1];
              m.prevKey = b;
              m.nextKey = c
            }
            c.time >= g ? b.interpolate(c, g) : b.interpolate(c, c.time)
          }
          this.data.hierarchy[a].node.updateMatrix();
          d.matrixWorldNeedsUpdate = !0
        }
      }
      if (this.JITCompile && void 0 === f[0][e]) {
        this.hierarchy[0].updateMatrixWorld(!0);
        for (a = 0; a < this.hierarchy.length; a++) f[a][e] = this.hierarchy[a] instanceof THREE.Bone ? this.hierarchy[a].skinMatrix.clone() : this.hierarchy[a].matrix.clone()
      }
    }
  }
};
THREE.KeyFrameAnimation.prototype.getNextKeyWith = function (a, b, c) {
  b = this.data.hierarchy[b].keys;
  for (c %= b.length; c < b.length; c++) if (b[c].hasTarget(a)) return b[c];
  return b[0]
};
THREE.KeyFrameAnimation.prototype.getPrevKeyWith = function (a, b, c) {
  b = this.data.hierarchy[b].keys;
  for (c = 0 <= c ? c : c + b.length; 0 <= c; c--) if (b[c].hasTarget(a)) return b[c];
  return b[b.length - 1]
};
THREE.CubeCamera = function (a, b, c) {
  THREE.Object3D.call(this);
  var d = new THREE.PerspectiveCamera(90, 1, a, b);
  d.up.set(0, - 1, 0);
  d.lookAt(new THREE.Vector3(1, 0, 0));
  this.add(d);
  var e = new THREE.PerspectiveCamera(90, 1, a, b);
  e.up.set(0, - 1, 0);
  e.lookAt(new THREE.Vector3( - 1, 0, 0));
  this.add(e);
  var f = new THREE.PerspectiveCamera(90, 1, a, b);
  f.up.set(0, 0, 1);
  f.lookAt(new THREE.Vector3(0, 1, 0));
  this.add(f);
  var g = new THREE.PerspectiveCamera(90, 1, a, b);
  g.up.set(0, 0, - 1);
  g.lookAt(new THREE.Vector3(0, - 1, 0));
  this.add(g);
  var h = new THREE.PerspectiveCamera(90, 1, a, b);
  h.up.set(0, - 1, 0);
  h.lookAt(new THREE.Vector3(0, 0, 1));
  this.add(h);
  var i = new THREE.PerspectiveCamera(90, 1, a, b);
  i.up.set(0, - 1, 0);
  i.lookAt(new THREE.Vector3(0, 0, - 1));
  this.add(i);
  this.renderTarget = new THREE.WebGLRenderTargetCube(c, c, {
    format: THREE.RGBFormat,
    magFilter: THREE.LinearFilter,
    minFilter: THREE.LinearFilter
  });
  this.updateCubeMap = function (a, b) {
    var c = this.renderTarget,
    p = c.generateMipmaps;
    c.generateMipmaps = !1;
    c.activeCubeFace = 0;
    a.render(b, d, c);
    c.activeCubeFace = 1;
    a.render(b, e, c);
    c.activeCubeFace = 2;
    a.render(b, f, c);
    c.activeCubeFace = 3;
    a.render(b, g, c);
    c.activeCubeFace = 4;
    a.render(b, h, c);
    c.generateMipmaps = p;
    c.activeCubeFace = 5;
    a.render(b, i, c)
  }
};
THREE.CubeCamera.prototype = Object.create(THREE.Object3D.prototype);
THREE.CombinedCamera = function (a, b, c, d, e, f, g) {
  THREE.Camera.call(this);
  this.fov = c;
  this.left = - a / 2;
  this.right = a / 2;
  this.top = b / 2;
  this.bottom = - b / 2;
  this.cameraO = new THREE.OrthographicCamera(a / - 2, a / 2, b / 2, b / - 2, f, g);
  this.cameraP = new THREE.PerspectiveCamera(c, a / b, d, e);
  this.zoom = 1;
  this.toPerspective()
};
THREE.CombinedCamera.prototype = Object.create(THREE.Camera.prototype);
THREE.CombinedCamera.prototype.toPerspective = function () {
  this.near = this.cameraP.near;
  this.far = this.cameraP.far;
  this.cameraP.fov = this.fov / this.zoom;
  this.cameraP.updateProjectionMatrix();
  this.projectionMatrix = this.cameraP.projectionMatrix;
  this.inPerspectiveMode = !0;
  this.inOrthographicMode = !1
};
THREE.CombinedCamera.prototype.toOrthographic = function () {
  var a = this.cameraP.aspect,
  b = (this.cameraP.near + this.cameraP.far) / 2,
  b = Math.tan(this.fov / 2) * b,
  a = 2 * b * a / 2,
  b = b / this.zoom,
  a = a / this.zoom;
  this.cameraO.left = - a;
  this.cameraO.right = a;
  this.cameraO.top = b;
  this.cameraO.bottom = - b;
  this.cameraO.updateProjectionMatrix();
  this.near = this.cameraO.near;
  this.far = this.cameraO.far;
  this.projectionMatrix = this.cameraO.projectionMatrix;
  this.inPerspectiveMode = !1;
  this.inOrthographicMode = !0
};
THREE.CombinedCamera.prototype.setSize = function (a, b) {
  this.cameraP.aspect = a / b;
  this.left = - a / 2;
  this.right = a / 2;
  this.top = b / 2;
  this.bottom = - b / 2
};
THREE.CombinedCamera.prototype.setFov = function (a) {
  this.fov = a;
  this.inPerspectiveMode ? this.toPerspective() : this.toOrthographic()
};
THREE.CombinedCamera.prototype.updateProjectionMatrix = function () {
  this.inPerspectiveMode ? this.toPerspective() : (this.toPerspective(), this.toOrthographic())
};
THREE.CombinedCamera.prototype.setLens = function (a, b) {
  void 0 === b && (b = 24);
  var c = 2 * THREE.Math.radToDeg(Math.atan(b / (2 * a)));
  this.setFov(c);
  return c
};
THREE.CombinedCamera.prototype.setZoom = function (a) {
  this.zoom = a;
  this.inPerspectiveMode ? this.toPerspective() : this.toOrthographic()
};
THREE.CombinedCamera.prototype.toFrontView = function () {
  this.rotation.x = 0;
  this.rotation.y = 0;
  this.rotation.z = 0;
  this.rotationAutoUpdate = !1
};
THREE.CombinedCamera.prototype.toBackView = function () {
  this.rotation.x = 0;
  this.rotation.y = Math.PI;
  this.rotation.z = 0;
  this.rotationAutoUpdate = !1
};
THREE.CombinedCamera.prototype.toLeftView = function () {
  this.rotation.x = 0;
  this.rotation.y = - Math.PI / 2;
  this.rotation.z = 0;
  this.rotationAutoUpdate = !1
};
THREE.CombinedCamera.prototype.toRightView = function () {
  this.rotation.x = 0;
  this.rotation.y = Math.PI / 2;
  this.rotation.z = 0;
  this.rotationAutoUpdate = !1
};
THREE.CombinedCamera.prototype.toTopView = function () {
  this.rotation.x = - Math.PI / 2;
  this.rotation.y = 0;
  this.rotation.z = 0;
  this.rotationAutoUpdate = !1
};
THREE.CombinedCamera.prototype.toBottomView = function () {
  this.rotation.x = Math.PI / 2;
  this.rotation.y = 0;
  this.rotation.z = 0;
  this.rotationAutoUpdate = !1
};
THREE.AsteriskGeometry = function (a, b) {
  THREE.Geometry.call(this);
  for (var c = 0.707 * a, d = 0.707 * b, c = [
    [a,
    0,
    0],
    [
      b,
      0,
      0
    ],
    [
      - a,
      0,
      0
    ],
    [
      - b,
      0,
      0
    ],
    [
      0,
      a,
      0
    ],
    [
      0,
      b,
      0
    ],
    [
      0,
      - a,
      0
    ],
    [
      0,
      - b,
      0
    ],
    [
      0,
      0,
      a
    ],
    [
      0,
      0,
      b
    ],
    [
      0,
      0,
      - a
    ],
    [
      0,
      0,
      - b
    ],
    [
      c,
      c,
      0
    ],
    [
      d,
      d,
      0
    ],
    [
      - c,
      - c,
      0
    ],
    [
      - d,
      - d,
      0
    ],
    [
      c,
      - c,
      0
    ],
    [
      d,
      - d,
      0
    ],
    [
      - c,
      c,
      0
    ],
    [
      - d,
      d,
      0
    ],
    [
      c,
      0,
      c
    ],
    [
      d,
      0,
      d
    ],
    [
      - c,
      0,
      - c
    ],
    [
      - d,
      0,
      - d
    ],
    [
      c,
      0,
      - c
    ],
    [
      d,
      0,
      - d
    ],
    [
      - c,
      0,
      c
    ],
    [
      - d,
      0,
      d
    ],
    [
      0,
      c,
      c
    ],
    [
      0,
      d,
      d
    ],
    [
      0,
      - c,
      - c
    ],
    [
      0,
      - d,
      - d
    ],
    [
      0,
      c,
      - c
    ],
    [
      0,
      d,
      - d
    ],
    [
      0,
      - c,
      c
    ],
    [
      0,
      - d,
      d
    ]
  ], d = 0, e = c.length; d < e; d++) this.vertices.push(new THREE.Vector3(c[d][0], c[d][1], c[d][2]))
};
THREE.AsteriskGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.CircleGeometry = function (a, b, c, d) {
  THREE.Geometry.call(this);
  var a = a || 50,
  c = void 0 !== c ? c : 0,
  d = void 0 !== d ? d : 2 * Math.PI,
  b = void 0 !== b ? Math.max(3, b) : 8,
  e,
  f = [
  ];
  e = new THREE.Vector3;
  var g = new THREE.Vector2(0.5, 0.5);
  this.vertices.push(e);
  f.push(g);
  for (e = 0; e <= b; e++) {
    var h = new THREE.Vector3;
    h.x = a * Math.cos(c + e / b * d);
    h.y = a * Math.sin(c + e / b * d);
    this.vertices.push(h);
    f.push(new THREE.Vector2((h.x / a + 1) / 2, - (h.y / a + 1) / 2 + 1))
  }
  c = new THREE.Vector3(0, 0, - 1);
  for (e = 1; e <= b; e++) this.faces.push(new THREE.Face3(e, e + 1, 0, [
    c,
    c,
    c
  ])),
  this.faceVertexUvs[0].push([f[e],
  f[e + 1],
  g]);
  this.computeCentroids();
  this.computeFaceNormals();
  this.boundingSphere = new THREE.Sphere(new THREE.Vector3, a)
};
THREE.CircleGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.CubeGeometry = function (a, b, c, d, e, f) {
  function g(a, b, c, d, e, f, g, n) {
    var r,
    v = h.widthSegments,
    w = h.heightSegments,
    x = e / 2,
    t = f / 2,
    K = h.vertices.length;
    if ('x' === a && 'y' === b || 'y' === a && 'x' === b) r = 'z';
     else if ('x' === a && 'z' === b || 'z' === a && 'x' === b) r = 'y',
    w = h.depthSegments;
     else if ('z' === a && 'y' === b || 'y' === a && 'z' === b) r = 'x',
    v = h.depthSegments;
    var D = v + 1,
    B = w + 1,
    z = e / v,
    E = f / w,
    G = new THREE.Vector3;
    G[r] = 0 < g ? 1 : - 1;
    for (e = 0; e < B; e++) for (f = 0; f < D; f++) {
      var I = new THREE.Vector3;
      I[a] = (f * z - x) * c;
      I[b] = (e * E - t) * d;
      I[r] = g;
      h.vertices.push(I)
    }
    for (e = 0; e < w; e++) for (f = 0; f < v; f++) a = new THREE.Face4(f + D * e + K, f + D * (e + 1) + K, f + 1 + D * (e + 1) + K, f + 1 + D * e + K),
    a.normal.copy(G),
    a.vertexNormals.push(G.clone(), G.clone(), G.clone(), G.clone()),
    a.materialIndex = n,
    h.faces.push(a),
    h.faceVertexUvs[0].push([new THREE.Vector2(f / v, 1 - e / w),
    new THREE.Vector2(f / v, 1 - (e + 1) / w),
    new THREE.Vector2((f + 1) / v, 1 - (e + 1) / w),
    new THREE.Vector2((f + 1) / v, 1 - e / w)])
  }
  THREE.Geometry.call(this);
  var h = this;
  this.width = a;
  this.height = b;
  this.depth = c;
  this.widthSegments = d || 1;
  this.heightSegments = e || 1;
  this.depthSegments = f || 1;
  a = this.width / 2;
  b = this.height / 2;
  c = this.depth / 2;
  g('z', 'y', - 1, - 1, this.depth, this.height, a, 0);
  g('z', 'y', 1, - 1, this.depth, this.height, - a, 1);
  g('x', 'z', 1, 1, this.width, this.depth, b, 2);
  g('x', 'z', 1, - 1, this.width, this.depth, - b, 3);
  g('x', 'y', 1, - 1, this.width, this.height, c, 4);
  g('x', 'y', - 1, - 1, this.width, this.height, - c, 5);
  this.computeCentroids();
  this.mergeVertices()
};
THREE.CubeGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.CylinderGeometry = function (a, b, c, d, e, f) {
  THREE.Geometry.call(this);
  var a = void 0 !== a ? a : 20,
  b = void 0 !== b ? b : 20,
  c = void 0 !== c ? c : 100,
  g = c / 2,
  d = d || 8,
  e = e || 1,
  h,
  i,
  k = [
  ],
  l = [
  ];
  for (i = 0; i <= e; i++) {
    var m = [
    ],
    p = [
    ],
    s = i / e,
    q = s * (b - a) + a;
    for (h = 0; h <= d; h++) {
      var n = h / d,
      r = new THREE.Vector3;
      r.x = q * Math.sin(2 * n * Math.PI);
      r.y = - s * c + g;
      r.z = q * Math.cos(2 * n * Math.PI);
      this.vertices.push(r);
      m.push(this.vertices.length - 1);
      p.push(new THREE.Vector2(n, 1 - s))
    }
    k.push(m);
    l.push(p)
  }
  c = (b - a) / c;
  for (h = 0; h < d; h++) {
    0 !== a ? (m = this.vertices[k[0][h]].clone(), p = this.vertices[k[0][h + 1]].clone()) : (m = this.vertices[k[1][h]].clone(), p = this.vertices[k[1][h + 1]].clone());
    m.setY(Math.sqrt(m.x * m.x + m.z * m.z) * c).normalize();
    p.setY(Math.sqrt(p.x * p.x + p.z * p.z) * c).normalize();
    for (i = 0; i < e; i++) {
      var s = k[i][h],
      q = k[i + 1][h],
      n = k[i + 1][h + 1],
      r = k[i][h + 1],
      v = m.clone(),
      w = m.clone(),
      x = p.clone(),
      t = p.clone(),
      K = l[i][h].clone(),
      D = l[i + 1][h].clone(),
      B = l[i + 1][h + 1].clone(),
      z = l[i][h + 1].clone();
      this.faces.push(new THREE.Face4(s, q, n, r, [
        v,
        w,
        x,
        t
      ]));
      this.faceVertexUvs[0].push([K,
      D,
      B,
      z])
    }
  }
  if (!f && 0 <
  a) {
    this.vertices.push(new THREE.Vector3(0, g, 0));
    for (h = 0; h < d; h++) s = k[0][h],
    q = k[0][h + 1],
    n = this.vertices.length - 1,
    v = new THREE.Vector3(0, 1, 0),
    w = new THREE.Vector3(0, 1, 0),
    x = new THREE.Vector3(0, 1, 0),
    K = l[0][h].clone(),
    D = l[0][h + 1].clone(),
    B = new THREE.Vector2(D.u, 0),
    this.faces.push(new THREE.Face3(s, q, n, [
      v,
      w,
      x
    ])),
    this.faceVertexUvs[0].push([K,
    D,
    B])
  }
  if (!f && 0 < b) {
    this.vertices.push(new THREE.Vector3(0, - g, 0));
    for (h = 0; h < d; h++) s = k[i][h + 1],
    q = k[i][h],
    n = this.vertices.length - 1,
    v = new THREE.Vector3(0, - 1, 0),
    w = new THREE.Vector3(0, - 1, 0),
    x = new THREE.Vector3(0, - 1, 0),
    K = l[i][h + 1].clone(),
    D = l[i][h].clone(),
    B = new THREE.Vector2(D.u, 1),
    this.faces.push(new THREE.Face3(s, q, n, [
      v,
      w,
      x
    ])),
    this.faceVertexUvs[0].push([K,
    D,
    B])
  }
  this.computeCentroids();
  this.computeFaceNormals()
};
THREE.CylinderGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.ExtrudeGeometry = function (a, b) {
  'undefined' !== typeof a && (THREE.Geometry.call(this), a = a instanceof Array ? a : [
    a
  ], this.shapebb = a[a.length - 1].getBoundingBox(), this.addShapeList(a, b), this.computeCentroids(), this.computeFaceNormals())
};
THREE.ExtrudeGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.ExtrudeGeometry.prototype.addShapeList = function (a, b) {
  for (var c = a.length, d = 0; d < c; d++) this.addShape(a[d], b)
};
THREE.ExtrudeGeometry.prototype.addShape = function (a, b) {
  function c(a, b, c) {
    b || console.log('die');
    return b.clone().multiplyScalar(c).addSelf(a)
  }
  function d(a, b, c) {
    var d = THREE.ExtrudeGeometry.__v1,
    e = THREE.ExtrudeGeometry.__v2,
    f = THREE.ExtrudeGeometry.__v3,
    g = THREE.ExtrudeGeometry.__v4,
    h = THREE.ExtrudeGeometry.__v5,
    i = THREE.ExtrudeGeometry.__v6;
    d.set(a.x - b.x, a.y - b.y);
    e.set(a.x - c.x, a.y - c.y);
    d = d.normalize();
    e = e.normalize();
    f.set( - d.y, d.x);
    g.set(e.y, - e.x);
    h.copy(a).addSelf(f);
    i.copy(a).addSelf(g);
    if (h.equals(i)) return g.clone();
    h.copy(b).addSelf(f);
    i.copy(c).addSelf(g);
    f = d.dot(g);
    g = i.subSelf(h).dot(g);
    0 === f && (console.log('Either infinite or no solutions!'), 0 === g ? console.log('Its finite solutions.') : console.log('Too bad, no solutions.'));
    g /= f;
    return 0 > g ? (b = Math.atan2(b.y - a.y, b.x - a.x), a = Math.atan2(c.y - a.y, c.x - a.x), b > a && (a += 2 * Math.PI), c = (b + a) / 2, a = - Math.cos(c), c = - Math.sin(c), new THREE.Vector2(a, c)) : d.multiplyScalar(g).addSelf(h).subSelf(a).clone()
  }
  function e(c, d) {
    var e,
    f;
    for (L = c.length; 0 <= --L; ) {
      e = L;
      f = L - 1;
      0 > f && (f = c.length - 1);
      for (var g = 0, h = s + 2 * l, g = 0; g < h; g++) {
        var i = N * g,
        k = N * (g + 1),
        m = d + e + i,
        i = d + f + i,
        n = d + f + k,
        k = d + e + k,
        p = c,
        q = g,
        r = h,
        t = e,
        v = f,
        m = m + Y,
        i = i + Y,
        n = n + Y,
        k = k + Y;
        I.faces.push(new THREE.Face4(m, i, n, k, null, null, w));
        m = x.generateSideWallUV(I, a, p, b, m, i, n, k, q, r, t, v);
        I.faceVertexUvs[0].push(m)
      }
    }
  }
  function f(a, b, c) {
    I.vertices.push(new THREE.Vector3(a, b, c))
  }
  function g(c, d, e, f) {
    c += Y;
    d += Y;
    e += Y;
    I.faces.push(new THREE.Face3(c, d, e, null, null, v));
    c = f ? x.generateBottomUV(I, a, b, c, d, e) : x.generateTopUV(I, a, b, c, d, e);
    I.faceVertexUvs[0].push(c)
  }
  var h = void 0 !==
  b.amount ? b.amount : 100,
  i = void 0 !== b.bevelThickness ? b.bevelThickness : 6,
  k = void 0 !== b.bevelSize ? b.bevelSize : i - 2,
  l = void 0 !== b.bevelSegments ? b.bevelSegments : 3,
  m = void 0 !== b.bevelEnabled ? b.bevelEnabled : !0,
  p = void 0 !== b.curveSegments ? b.curveSegments : 12,
  s = void 0 !== b.steps ? b.steps : 1,
  q = b.extrudePath,
  n,
  r = !1,
  v = b.material,
  w = b.extrudeMaterial,
  x = void 0 !== b.UVGenerator ? b.UVGenerator : THREE.ExtrudeGeometry.WorldUVGenerator,
  t,
  K,
  D,
  B;
  q && (n = q.getSpacedPoints(s), r = !0, m = !1, t = void 0 !== b.frames ? b.frames : new THREE.TubeGeometry.FrenetFrames(q, s, !1), K = new THREE.Vector3, D = new THREE.Vector3, B = new THREE.Vector3);
  m || (k = i = l = 0);
  var z,
  E,
  G,
  I = this,
  Y = this.vertices.length,
  p = a.extractPoints(p),
  C = p.shape,
  p = p.holes;
  if (q = !THREE.Shape.Utils.isClockWise(C)) {
    C = C.reverse();
    E = 0;
    for (G = p.length; E < G; E++) z = p[E],
    THREE.Shape.Utils.isClockWise(z) && (p[E] = z.reverse());
    q = !1
  }
  var P = THREE.Shape.Utils.triangulateShape(C, p),
  q = C;
  E = 0;
  for (G = p.length; E < G; E++) z = p[E],
  C = C.concat(z);
  var A,
  J,
  M,
  T,
  N = C.length,
  fa = P.length,
  oa = [
  ],
  L = 0,
  Z = q.length;
  A = Z - 1;
  for (J = L + 1; L < Z; L++, A++, J++) A === Z && (A = 0),
  J === Z && (J = 0),
  oa[L] = d(q[L], q[A], q[J]);
  var eb = [
  ],
  Ea,
  jb = oa.concat();
  E = 0;
  for (G = p.length; E < G; E++) {
    z = p[E];
    Ea = [
    ];
    L = 0;
    Z = z.length;
    A = Z - 1;
    for (J = L + 1; L < Z; L++, A++, J++) A === Z && (A = 0),
    J === Z && (J = 0),
    Ea[L] = d(z[L], z[A], z[J]);
    eb.push(Ea);
    jb = jb.concat(Ea)
  }
  for (A = 0; A < l; A++) {
    z = A / l;
    M = i * (1 - z);
    J = k * Math.sin(z * Math.PI / 2);
    L = 0;
    for (Z = q.length; L < Z; L++) T = c(q[L], oa[L], J),
    f(T.x, T.y, - M);
    E = 0;
    for (G = p.length; E < G; E++) {
      z = p[E];
      Ea = eb[E];
      L = 0;
      for (Z = z.length; L < Z; L++) T = c(z[L], Ea[L], J),
      f(T.x, T.y, - M)
    }
  }
  J = k;
  for (L = 0; L < N; L++) T = m ? c(C[L], jb[L], J) : C[L],
  r ? (D.copy(t.normals[0]).multiplyScalar(T.x), K.copy(t.binormals[0]).multiplyScalar(T.y), B.copy(n[0]).addSelf(D).addSelf(K), f(B.x, B.y, B.z)) : f(T.x, T.y, 0);
  for (z = 1; z <= s; z++) for (L = 0; L < N; L++) T = m ? c(C[L], jb[L], J) : C[L],
  r ? (D.copy(t.normals[z]).multiplyScalar(T.x), K.copy(t.binormals[z]).multiplyScalar(T.y), B.copy(n[z]).addSelf(D).addSelf(K), f(B.x, B.y, B.z)) : f(T.x, T.y, h / s * z);
  for (A = l - 1; 0 <= A; A--) {
    z = A / l;
    M = i * (1 - z);
    J = k * Math.sin(z * Math.PI / 2);
    L = 0;
    for (Z = q.length; L < Z; L++) T = c(q[L], oa[L], J),
    f(T.x, T.y, h + M);
    E = 0;
    for (G = p.length; E <
    G; E++) {
      z = p[E];
      Ea = eb[E];
      L = 0;
      for (Z = z.length; L < Z; L++) T = c(z[L], Ea[L], J),
      r ? f(T.x, T.y + n[s - 1].y, n[s - 1].x + M) : f(T.x, T.y, h + M)
    }
  }
  if (m) {
    i = 0 * N;
    for (L = 0; L < fa; L++) h = P[L],
    g(h[2] + i, h[1] + i, h[0] + i, !0);
    i = N * (s + 2 * l);
    for (L = 0; L < fa; L++) h = P[L],
    g(h[0] + i, h[1] + i, h[2] + i, !1)
  } else {
    for (L = 0; L < fa; L++) h = P[L],
    g(h[2], h[1], h[0], !0);
    for (L = 0; L < fa; L++) h = P[L],
    g(h[0] + N * s, h[1] + N * s, h[2] + N * s, !1)
  }
  h = 0;
  e(q, h);
  h += q.length;
  E = 0;
  for (G = p.length; E < G; E++) z = p[E],
  e(z, h),
  h += z.length
};
THREE.ExtrudeGeometry.WorldUVGenerator = {
  generateTopUV: function (a, b, c, d, e, f) {
    b = a.vertices[e].x;
    e = a.vertices[e].y;
    c = a.vertices[f].x;
    f = a.vertices[f].y;
    return [new THREE.Vector2(a.vertices[d].x, a.vertices[d].y),
    new THREE.Vector2(b, e),
    new THREE.Vector2(c, f)]
  },
  generateBottomUV: function (a, b, c, d, e, f) {
    return this.generateTopUV(a, b, c, d, e, f)
  },
  generateSideWallUV: function (a, b, c, d, e, f, g, h) {
    var b = a.vertices[e].x,
    c = a.vertices[e].y,
    e = a.vertices[e].z,
    d = a.vertices[f].x,
    i = a.vertices[f].y,
    f = a.vertices[f].z,
    k = a.vertices[g].x,
    l = a.vertices[g].y,
    g = a.vertices[g].z,
    m = a.vertices[h].x,
    p = a.vertices[h].y,
    a = a.vertices[h].z;
    return 0.01 > Math.abs(c - i) ? [
      new THREE.Vector2(b, 1 - e),
      new THREE.Vector2(d, 1 - f),
      new THREE.Vector2(k, 1 - g),
      new THREE.Vector2(m, 1 - a)
    ] : [
      new THREE.Vector2(c, 1 - e),
      new THREE.Vector2(i, 1 - f),
      new THREE.Vector2(l, 1 - g),
      new THREE.Vector2(p, 1 - a)
    ]
  }
};
THREE.ExtrudeGeometry.__v1 = new THREE.Vector2;
THREE.ExtrudeGeometry.__v2 = new THREE.Vector2;
THREE.ExtrudeGeometry.__v3 = new THREE.Vector2;
THREE.ExtrudeGeometry.__v4 = new THREE.Vector2;
THREE.ExtrudeGeometry.__v5 = new THREE.Vector2;
THREE.ExtrudeGeometry.__v6 = new THREE.Vector2;
THREE.ShapeGeometry = function (a, b) {
  THREE.Geometry.call(this);
  !1 === a instanceof Array && (a = [
    a
  ]);
  this.shapebb = a[a.length - 1].getBoundingBox();
  this.addShapeList(a, b);
  this.computeCentroids();
  this.computeFaceNormals()
};
THREE.ShapeGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.ShapeGeometry.prototype.addShapeList = function (a, b) {
  for (var c = 0, d = a.length; c < d; c++) this.addShape(a[c], b);
  return this
};
THREE.ShapeGeometry.prototype.addShape = function (a, b) {
  void 0 === b && (b = {
  });
  var c = b.material,
  d = void 0 === b.UVGenerator ? THREE.ExtrudeGeometry.WorldUVGenerator : b.UVGenerator,
  e,
  f,
  g,
  h = this.vertices.length;
  e = a.extractPoints(void 0 !== b.curveSegments ? b.curveSegments : 12);
  var i = e.shape,
  k = e.holes;
  if (!THREE.Shape.Utils.isClockWise(i)) {
    i = i.reverse();
    e = 0;
    for (f = k.length; e < f; e++) g = k[e],
    THREE.Shape.Utils.isClockWise(g) && (k[e] = g.reverse())
  }
  var l = THREE.Shape.Utils.triangulateShape(i, k);
  e = 0;
  for (f = k.length; e < f; e++) g = k[e],
  i = i.concat(g);
  k = i.length;
  f = l.length;
  for (e = 0; e < k; e++) g = i[e],
  this.vertices.push(new THREE.Vector3(g.x, g.y, 0));
  for (e = 0; e < f; e++) k = l[e],
  i = k[0] + h,
  g = k[1] + h,
  k = k[2] + h,
  this.faces.push(new THREE.Face3(i, g, k, null, null, c)),
  this.faceVertexUvs[0].push(d.generateBottomUV(this, a, b, i, g, k))
};
THREE.LatheGeometry = function (a, b, c) {
  THREE.Geometry.call(this);
  for (var b = b || 12, c = c || 2 * Math.PI, d = [
  ], e = (new THREE.Matrix4).makeRotationZ(c / b), f = 0; f < a.length; f++) d[f] = a[f].clone(),
  this.vertices.push(d[f]);
  for (var g = b + 1, c = 0; c < g; c++) for (f = 0; f < d.length; f++) d[f] = e.multiplyVector3(d[f].clone()),
  this.vertices.push(d[f]);
  for (c = 0; c < b; c++) {
    d = 0;
    for (e = a.length; d < e - 1; d++) this.faces.push(new THREE.Face4(c * e + d, (c + 1) % g * e + d, (c + 1) % g * e + (d + 1) % e, c * e + (d + 1) % e)),
    this.faceVertexUvs[0].push([new THREE.Vector2(1 - c / b, d / e),
    new THREE.Vector2(1 - (c + 1) / b, d / e),
    new THREE.Vector2(1 - (c + 1) / b, (d + 1) / e),
    new THREE.Vector2(1 - c / b, (d + 1) / e)])
  }
  this.computeCentroids();
  this.computeFaceNormals();
  this.computeVertexNormals()
};
THREE.LatheGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.PlaneGeometry = function (a, b, c, d) {
  THREE.Geometry.call(this);
  this.width = a;
  this.height = b;
  this.widthSegments = c || 1;
  this.heightSegments = d || 1;
  for (var c = a / 2, e = b / 2, d = this.widthSegments, f = this.heightSegments, g = d + 1, h = f + 1, i = this.width / d, k = this.height / f, l = new THREE.Vector3(0, 0, 1), a = 0; a < h; a++) for (b = 0; b < g; b++) this.vertices.push(new THREE.Vector3(b * i - c, - (a * k - e), 0));
  for (a = 0; a < f; a++) for (b = 0; b < d; b++) c = new THREE.Face4(b + g * a, b + g * (a + 1), b + 1 + g * (a + 1), b + 1 + g * a),
  c.normal.copy(l),
  c.vertexNormals.push(l.clone(), l.clone(), l.clone(), l.clone()),
  this.faces.push(c),
  this.faceVertexUvs[0].push([new THREE.Vector2(b / d, 1 - a / f),
  new THREE.Vector2(b / d, 1 - (a + 1) / f),
  new THREE.Vector2((b + 1) / d, 1 - (a + 1) / f),
  new THREE.Vector2((b + 1) / d, 1 - a / f)]);
  this.computeCentroids()
};
THREE.PlaneGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.SphereGeometry = function (a, b, c, d, e, f, g) {
  THREE.Geometry.call(this);
  this.radius = a || 50;
  this.widthSegments = Math.max(3, Math.floor(b) || 8);
  this.heightSegments = Math.max(2, Math.floor(c) || 6);
  for (var d = void 0 !== d ? d : 0, e = void 0 !== e ? e : 2 * Math.PI, f = void 0 !== f ? f : 0, g = void 0 !== g ? g : Math.PI, h = [
  ], i = [
  ], c = 0; c <= this.heightSegments; c++) {
    for (var k = [
    ], l = [
    ], b = 0; b <= this.widthSegments; b++) {
      var m = b / this.widthSegments,
      p = c / this.heightSegments,
      s = new THREE.Vector3;
      s.x = - this.radius * Math.cos(d + m * e) * Math.sin(f + p * g);
      s.y = this.radius * Math.cos(f + p * g);
      s.z = this.radius * Math.sin(d + m * e) * Math.sin(f + p * g);
      this.vertices.push(s);
      k.push(this.vertices.length - 1);
      l.push(new THREE.Vector2(m, 1 - p))
    }
    h.push(k);
    i.push(l)
  }
  for (c = 0; c < this.heightSegments; c++) for (b = 0; b < this.widthSegments; b++) {
    var d = h[c][b + 1],
    e = h[c][b],
    f = h[c + 1][b],
    g = h[c + 1][b + 1],
    k = this.vertices[d].clone().normalize(),
    l = this.vertices[e].clone().normalize(),
    m = this.vertices[f].clone().normalize(),
    p = this.vertices[g].clone().normalize(),
    s = i[c][b + 1].clone(),
    q = i[c][b].clone(),
    n = i[c + 1][b].clone(),
    r = i[c + 1][b + 1].clone();
    Math.abs(this.vertices[d].y) === this.radius ? (this.faces.push(new THREE.Face3(d, f, g, [
      k,
      m,
      p
    ])), this.faceVertexUvs[0].push([s,
    n,
    r])) : Math.abs(this.vertices[f].y) === this.radius ? (this.faces.push(new THREE.Face3(d, e, f, [
      k,
      l,
      m
    ])), this.faceVertexUvs[0].push([s,
    q,
    n])) : (this.faces.push(new THREE.Face4(d, e, f, g, [
      k,
      l,
      m,
      p
    ])), this.faceVertexUvs[0].push([s,
    q,
    n,
    r]))
  }
  this.computeCentroids();
  this.computeFaceNormals();
  this.boundingSphere = new THREE.Sphere(new THREE.Vector3, a)
};
THREE.SphereGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.TextGeometry = function (a, b) {
  var c = THREE.FontUtils.generateShapes(a, b);
  b.amount = void 0 !== b.height ? b.height : 50;
  void 0 === b.bevelThickness && (b.bevelThickness = 10);
  void 0 === b.bevelSize && (b.bevelSize = 8);
  void 0 === b.bevelEnabled && (b.bevelEnabled = !1);
  THREE.ExtrudeGeometry.call(this, c, b)
};
THREE.TextGeometry.prototype = Object.create(THREE.ExtrudeGeometry.prototype);
THREE.TorusGeometry = function (a, b, c, d, e) {
  THREE.Geometry.call(this);
  this.radius = a || 100;
  this.tube = b || 40;
  this.radialSegments = c || 8;
  this.tubularSegments = d || 6;
  this.arc = e || 2 * Math.PI;
  e = new THREE.Vector3;
  a = [
  ];
  b = [
  ];
  for (c = 0; c <= this.radialSegments; c++) for (d = 0; d <= this.tubularSegments; d++) {
    var f = d / this.tubularSegments * this.arc,
    g = 2 * c / this.radialSegments * Math.PI;
    e.x = this.radius * Math.cos(f);
    e.y = this.radius * Math.sin(f);
    var h = new THREE.Vector3;
    h.x = (this.radius + this.tube * Math.cos(g)) * Math.cos(f);
    h.y = (this.radius + this.tube * Math.cos(g)) * Math.sin(f);
    h.z = this.tube * Math.sin(g);
    this.vertices.push(h);
    a.push(new THREE.Vector2(d / this.tubularSegments, c / this.radialSegments));
    b.push(h.clone().subSelf(e).normalize())
  }
  for (c = 1; c <= this.radialSegments; c++) for (d = 1; d <= this.tubularSegments; d++) {
    var e = (this.tubularSegments + 1) * c + d - 1,
    f = (this.tubularSegments + 1) * (c - 1) + d - 1,
    g = (this.tubularSegments + 1) * (c - 1) + d,
    h = (this.tubularSegments + 1) * c + d,
    i = new THREE.Face4(e, f, g, h, [
      b[e],
      b[f],
      b[g],
      b[h]
    ]);
    i.normal.addSelf(b[e]);
    i.normal.addSelf(b[f]);
    i.normal.addSelf(b[g]);
    i.normal.addSelf(b[h]);
    i.normal.normalize();
    this.faces.push(i);
    this.faceVertexUvs[0].push([a[e].clone(),
    a[f].clone(),
    a[g].clone(),
    a[h].clone()])
  }
  this.computeCentroids()
};
THREE.TorusGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.TorusKnotGeometry = function (a, b, c, d, e, f, g) {
  function h(a, b, c, d, e, f) {
    var g = Math.cos(a);
    Math.cos(b);
    b = Math.sin(a);
    a *= c / d;
    c = Math.cos(a);
    g *= 0.5 * e * (2 + c);
    b = 0.5 * e * (2 + c) * b;
    e = 0.5 * f * e * Math.sin(a);
    return new THREE.Vector3(g, b, e)
  }
  THREE.Geometry.call(this);
  this.radius = a || 100;
  this.tube = b || 40;
  this.radialSegments = c || 64;
  this.tubularSegments = d || 8;
  this.p = e || 2;
  this.q = f || 3;
  this.heightScale = g || 1;
  this.grid = Array(this.radialSegments);
  c = new THREE.Vector3;
  d = new THREE.Vector3;
  e = new THREE.Vector3;
  for (a = 0; a < this.radialSegments; ++a) {
    this.grid[a] = Array(this.tubularSegments);
    for (b = 0; b < this.tubularSegments; ++b) {
      var i = 2 * (a / this.radialSegments) * this.p * Math.PI,
      g = 2 * (b / this.tubularSegments) * Math.PI,
      f = h(i, g, this.q, this.p, this.radius, this.heightScale),
      i = h(i + 0.01, g, this.q, this.p, this.radius, this.heightScale);
      c.sub(i, f);
      d.add(i, f);
      e.cross(c, d);
      d.cross(e, c);
      e.normalize();
      d.normalize();
      i = - this.tube * Math.cos(g);
      g = this.tube * Math.sin(g);
      f.x += i * d.x + g * e.x;
      f.y += i * d.y + g * e.y;
      f.z += i * d.z + g * e.z;
      this.grid[a][b] = this.vertices.push(new THREE.Vector3(f.x, f.y, f.z)) - 1
    }
  }
  for (a = 0; a < this.radialSegments; ++a) for (b = 0; b < this.tubularSegments; ++b) {
    var e = (a + 1) % this.radialSegments,
    f = (b + 1) % this.tubularSegments,
    c = this.grid[a][b],
    d = this.grid[e][b],
    e = this.grid[e][f],
    f = this.grid[a][f],
    g = new THREE.Vector2(a / this.radialSegments, b / this.tubularSegments),
    i = new THREE.Vector2((a + 1) / this.radialSegments, b / this.tubularSegments),
    k = new THREE.Vector2((a + 1) / this.radialSegments, (b + 1) / this.tubularSegments),
    l = new THREE.Vector2(a / this.radialSegments, (b + 1) / this.tubularSegments);
    this.faces.push(new THREE.Face4(c, d, e, f));
    this.faceVertexUvs[0].push([g,
    i,
    k,
    l])
  }
  this.computeCentroids();
  this.computeFaceNormals();
  this.computeVertexNormals()
};
THREE.TorusKnotGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.TubeGeometry = function (a, b, c, d, e, f) {
  THREE.Geometry.call(this);
  this.path = a;
  this.segments = b || 64;
  this.radius = c || 1;
  this.radiusSegments = d || 8;
  this.closed = e || !1;
  f && (this.debug = new THREE.Object3D);
  this.grid = [
  ];
  var g,
  h,
  e = this.segments + 1,
  i,
  k,
  l,
  f = new THREE.Vector3,
  m,
  p,
  s,
  b = new THREE.TubeGeometry.FrenetFrames(this.path, this.segments, this.closed);
  m = b.tangents;
  p = b.normals;
  s = b.binormals;
  this.tangents = m;
  this.normals = p;
  this.binormals = s;
  for (b = 0; b < e; b++) {
    this.grid[b] = [
    ];
    d = b / (e - 1);
    l = a.getPointAt(d);
    d = m[b];
    g = p[b];
    h = s[b];
    this.debug && (this.debug.add(new THREE.ArrowHelper(d, l, c, 255)), this.debug.add(new THREE.ArrowHelper(g, l, c, 16711680)), this.debug.add(new THREE.ArrowHelper(h, l, c, 65280)));
    for (d = 0; d < this.radiusSegments; d++) i = 2 * (d / this.radiusSegments) * Math.PI,
    k = - this.radius * Math.cos(i),
    i = this.radius * Math.sin(i),
    f.copy(l),
    f.x += k * g.x + i * h.x,
    f.y += k * g.y + i * h.y,
    f.z += k * g.z + i * h.z,
    this.grid[b][d] = this.vertices.push(new THREE.Vector3(f.x, f.y, f.z)) - 1
  }
  for (b = 0; b < this.segments; b++) for (d = 0; d < this.radiusSegments; d++) e = this.closed ? (b + 1) % this.segments : b + 1,
  f = (d + 1) % this.radiusSegments,
  a = this.grid[b][d],
  c = this.grid[e][d],
  e = this.grid[e][f],
  f = this.grid[b][f],
  m = new THREE.Vector2(b / this.segments, d / this.radiusSegments),
  p = new THREE.Vector2((b + 1) / this.segments, d / this.radiusSegments),
  s = new THREE.Vector2((b + 1) / this.segments, (d + 1) / this.radiusSegments),
  g = new THREE.Vector2(b / this.segments, (d + 1) / this.radiusSegments),
  this.faces.push(new THREE.Face4(a, c, e, f)),
  this.faceVertexUvs[0].push([m,
  p,
  s,
  g]);
  this.computeCentroids();
  this.computeFaceNormals();
  this.computeVertexNormals()
};
THREE.TubeGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.TubeGeometry.FrenetFrames = function (a, b, c) {
  new THREE.Vector3;
  var d = new THREE.Vector3;
  new THREE.Vector3;
  var e = [
  ],
  f = [
  ],
  g = [
  ],
  h = new THREE.Vector3,
  i = new THREE.Matrix4,
  b = b + 1,
  k,
  l,
  m;
  this.tangents = e;
  this.normals = f;
  this.binormals = g;
  for (k = 0; k < b; k++) l = k / (b - 1),
  e[k] = a.getTangentAt(l),
  e[k].normalize();
  f[0] = new THREE.Vector3;
  g[0] = new THREE.Vector3;
  a = Number.MAX_VALUE;
  k = Math.abs(e[0].x);
  l = Math.abs(e[0].y);
  m = Math.abs(e[0].z);
  k <= a && (a = k, d.set(1, 0, 0));
  l <= a && (a = l, d.set(0, 1, 0));
  m <= a && d.set(0, 0, 1);
  h.cross(e[0], d).normalize();
  f[0].cross(e[0], h);
  g[0].cross(e[0], f[0]);
  for (k = 1; k < b; k++) f[k] = f[k - 1].clone(),
  g[k] = g[k - 1].clone(),
  h.cross(e[k - 1], e[k]),
  0.0001 < h.length() && (h.normalize(), d = Math.acos(e[k - 1].dot(e[k])), i.makeRotationAxis(h, d).multiplyVector3(f[k])),
  g[k].cross(e[k], f[k]);
  if (c) {
    d = Math.acos(f[0].dot(f[b - 1]));
    d /= b - 1;
    0 < e[0].dot(h.cross(f[0], f[b - 1])) && (d = - d);
    for (k = 1; k < b; k++) i.makeRotationAxis(e[k], d * k).multiplyVector3(f[k]),
    g[k].cross(e[k], f[k])
  }
};
THREE.PolyhedronGeometry = function (a, b, c, d) {
  function e(a) {
    var b = a.normalize().clone();
    b.index = i.vertices.push(b) - 1;
    var c = Math.atan2(a.z, - a.x) / 2 / Math.PI + 0.5,
    a = Math.atan2( - a.y, Math.sqrt(a.x * a.x + a.z * a.z)) / Math.PI + 0.5;
    b.uv = new THREE.Vector2(c, 1 - a);
    return b
  }
  function f(a, b, c, d) {
    1 > d ? (d = new THREE.Face3(a.index, b.index, c.index, [
      a.clone(),
      b.clone(),
      c.clone()
    ]), d.centroid.addSelf(a).addSelf(b).addSelf(c).divideScalar(3), d.normal = d.centroid.clone().normalize(), i.faces.push(d), d = Math.atan2(d.centroid.z, - d.centroid.x), i.faceVertexUvs[0].push([h(a.uv, a, d),
    h(b.uv, b, d),
    h(c.uv, c, d)])) : (d -= 1, f(a, g(a, b), g(a, c), d), f(g(a, b), b, g(b, c), d), f(g(a, c), g(b, c), c, d), f(g(a, b), g(b, c), g(a, c), d))
  }
  function g(a, b) {
    m[a.index] || (m[a.index] = [
    ]);
    m[b.index] || (m[b.index] = [
    ]);
    var c = m[a.index][b.index];
    void 0 === c && (m[a.index][b.index] = m[b.index][a.index] = c = e((new THREE.Vector3).add(a, b).divideScalar(2)));
    return c
  }
  function h(a, b, c) {
    0 > c && 1 === a.x && (a = new THREE.Vector2(a.x - 1, a.y));
    0 === b.x && 0 === b.z && (a = new THREE.Vector2(c / 2 / Math.PI + 0.5, a.y));
    return a
  }
  THREE.Geometry.call(this);
  for (var c = c || 1, d = d || 0, i = this, k = 0, l = a.length; k < l; k++) e(new THREE.Vector3(a[k][0], a[k][1], a[k][2]));
  for (var m = [
  ], a = this.vertices, k = 0, l = b.length; k < l; k++) f(a[b[k][0]], a[b[k][1]], a[b[k][2]], d);
  this.mergeVertices();
  k = 0;
  for (l = this.vertices.length; k < l; k++) this.vertices[k].multiplyScalar(c);
  this.computeCentroids();
  this.boundingSphere = new THREE.Sphere(new THREE.Vector3, c)
};
THREE.PolyhedronGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.IcosahedronGeometry = function (a, b) {
  var c = (1 + Math.sqrt(5)) / 2;
  THREE.PolyhedronGeometry.call(this, [
    [ - 1,
    c,
    0],
    [
      1,
      c,
      0
    ],
    [
      - 1,
      - c,
      0
    ],
    [
      1,
      - c,
      0
    ],
    [
      0,
      - 1,
      c
    ],
    [
      0,
      1,
      c
    ],
    [
      0,
      - 1,
      - c
    ],
    [
      0,
      1,
      - c
    ],
    [
      c,
      0,
      - 1
    ],
    [
      c,
      0,
      1
    ],
    [
      - c,
      0,
      - 1
    ],
    [
      - c,
      0,
      1
    ]
  ], [
    [0,
    11,
    5],
    [
      0,
      5,
      1
    ],
    [
      0,
      1,
      7
    ],
    [
      0,
      7,
      10
    ],
    [
      0,
      10,
      11
    ],
    [
      1,
      5,
      9
    ],
    [
      5,
      11,
      4
    ],
    [
      11,
      10,
      2
    ],
    [
      10,
      7,
      6
    ],
    [
      7,
      1,
      8
    ],
    [
      3,
      9,
      4
    ],
    [
      3,
      4,
      2
    ],
    [
      3,
      2,
      6
    ],
    [
      3,
      6,
      8
    ],
    [
      3,
      8,
      9
    ],
    [
      4,
      9,
      5
    ],
    [
      2,
      4,
      11
    ],
    [
      6,
      2,
      10
    ],
    [
      8,
      6,
      7
    ],
    [
      9,
      8,
      1
    ]
  ], a, b)
};
THREE.IcosahedronGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.OctahedronGeometry = function (a, b) {
  THREE.PolyhedronGeometry.call(this, [
    [1,
    0,
    0],
    [
      - 1,
      0,
      0
    ],
    [
      0,
      1,
      0
    ],
    [
      0,
      - 1,
      0
    ],
    [
      0,
      0,
      1
    ],
    [
      0,
      0,
      - 1
    ]
  ], [
    [0,
    2,
    4],
    [
      0,
      4,
      3
    ],
    [
      0,
      3,
      5
    ],
    [
      0,
      5,
      2
    ],
    [
      1,
      2,
      5
    ],
    [
      1,
      5,
      3
    ],
    [
      1,
      3,
      4
    ],
    [
      1,
      4,
      2
    ]
  ], a, b)
};
THREE.OctahedronGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.TetrahedronGeometry = function (a, b) {
  THREE.PolyhedronGeometry.call(this, [
    [1,
    1,
    1],
    [
      - 1,
      - 1,
      1
    ],
    [
      - 1,
      1,
      - 1
    ],
    [
      1,
      - 1,
      - 1
    ]
  ], [
    [2,
    1,
    0],
    [
      0,
      3,
      2
    ],
    [
      1,
      3,
      0
    ],
    [
      2,
      3,
      1
    ]
  ], a, b)
};
THREE.TetrahedronGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.ParametricGeometry = function (a, b, c, d) {
  THREE.Geometry.call(this);
  var e = this.vertices,
  f = this.faces,
  g = this.faceVertexUvs[0],
  d = void 0 === d ? !1 : d,
  h,
  i,
  k,
  l,
  m = b + 1;
  for (h = 0; h <= c; h++) {
    l = h / c;
    for (i = 0; i <= b; i++) k = i / b,
    k = a(k, l),
    e.push(k)
  }
  var p,
  s,
  q,
  n;
  for (h = 0; h < c; h++) for (i = 0; i < b; i++) a = h * m + i,
  e = h * m + i + 1,
  l = (h + 1) * m + i,
  k = (h + 1) * m + i + 1,
  p = new THREE.Vector2(i / b, h / c),
  s = new THREE.Vector2((i + 1) / b, h / c),
  q = new THREE.Vector2(i / b, (h + 1) / c),
  n = new THREE.Vector2((i + 1) / b, (h + 1) / c),
  d ? (f.push(new THREE.Face3(a, e, l)), f.push(new THREE.Face3(e, k, l)), g.push([p,
  s,
  q]), g.push([s,
  n,
  q])) : (f.push(new THREE.Face4(a, e, k, l)), g.push([p,
  s,
  n,
  q]));
  this.computeCentroids();
  this.computeFaceNormals();
  this.computeVertexNormals()
};
THREE.ParametricGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.ConvexGeometry = function (a) {
  function b(a) {
    var b = a.length();
    return new THREE.Vector2(a.x / b, a.y / b)
  }
  THREE.Geometry.call(this);
  for (var c = [
    [0,
    1,
    2],
    [
      0,
      2,
      1
    ]
  ], d = 3; d < a.length; d++) {
    var e = d,
    f = a[e].clone(),
    g = f.length();
    f.x += g * 0.000002 * (Math.random() - 0.5);
    f.y += g * 0.000002 * (Math.random() - 0.5);
    f.z += g * 0.000002 * (Math.random() - 0.5);
    for (var g = [
    ], h = 0; h < c.length; ) {
      var i = c[h],
      k = f,
      l = a[i[0]],
      m;
      m = l;
      var p = a[i[1]],
      s = a[i[2]],
      q = new THREE.Vector3,
      n = new THREE.Vector3;
      q.sub(s, p);
      n.sub(m, p);
      q.crossSelf(n);
      q.normalize();
      m = q;
      l = m.dot(l);
      if (m.dot(k) >=
      l) {
        for (k = 0; 3 > k; k++) {
          l = [
            i[k],
            i[(k + 1) % 3]
          ];
          m = !0;
          for (p = 0; p < g.length; p++) if (g[p][0] === l[1] && g[p][1] === l[0]) {
            g[p] = g[g.length - 1];
            g.pop();
            m = !1;
            break
          }
          m && g.push(l)
        }
        c[h] = c[c.length - 1];
        c.pop()
      } else h++
    }
    for (p = 0; p < g.length; p++) c.push([g[p][0],
    g[p][1],
    e])
  }
  e = 0;
  f = Array(a.length);
  for (d = 0; d < c.length; d++) {
    g = c[d];
    for (h = 0; 3 > h; h++) void 0 === f[g[h]] && (f[g[h]] = e++, this.vertices.push(a[g[h]])),
    g[h] = f[g[h]]
  }
  for (d = 0; d < c.length; d++) this.faces.push(new THREE.Face3(c[d][0], c[d][1], c[d][2]));
  for (d = 0; d < this.faces.length; d++) g = this.faces[d],
  this.faceVertexUvs[0].push([b(this.vertices[g.a]),
  b(this.vertices[g.b]),
  b(this.vertices[g.c])]);
  this.computeCentroids();
  this.computeFaceNormals();
  this.computeVertexNormals()
};
THREE.ConvexGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.AxisHelper = function (a) {
  var b = new THREE.Geometry;
  b.vertices.push(new THREE.Vector3, new THREE.Vector3(a || 1, 0, 0), new THREE.Vector3, new THREE.Vector3(0, a || 1, 0), new THREE.Vector3, new THREE.Vector3(0, 0, a || 1));
  b.colors.push(new THREE.Color(16711680), new THREE.Color(16755200), new THREE.Color(65280), new THREE.Color(11206400), new THREE.Color(255), new THREE.Color(43775));
  a = new THREE.LineBasicMaterial({
    vertexColors: THREE.VertexColors
  });
  THREE.Line.call(this, b, a, THREE.LinePieces)
};
THREE.AxisHelper.prototype = Object.create(THREE.Line.prototype);
THREE.ArrowHelper = function (a, b, c, d) {
  THREE.Object3D.call(this);
  void 0 === d && (d = 16776960);
  void 0 === c && (c = 20);
  var e = new THREE.Geometry;
  e.vertices.push(new THREE.Vector3(0, 0, 0));
  e.vertices.push(new THREE.Vector3(0, 1, 0));
  this.line = new THREE.Line(e, new THREE.LineBasicMaterial({
    color: d
  }));
  this.add(this.line);
  e = new THREE.CylinderGeometry(0, 0.05, 0.25, 5, 1);
  this.cone = new THREE.Mesh(e, new THREE.MeshBasicMaterial({
    color: d
  }));
  this.cone.position.set(0, 1, 0);
  this.add(this.cone);
  b instanceof THREE.Vector3 && (this.position = b);
  this.setDirection(a);
  this.setLength(c)
};
THREE.ArrowHelper.prototype = Object.create(THREE.Object3D.prototype);
THREE.ArrowHelper.prototype.setDirection = function (a) {
  var b = (new THREE.Vector3(0, 1, 0)).crossSelf(a),
  a = Math.acos((new THREE.Vector3(0, 1, 0)).dot(a.clone().normalize()));
  this.matrix = (new THREE.Matrix4).makeRotationAxis(b.normalize(), a);
  this.rotation.setEulerFromRotationMatrix(this.matrix, this.eulerOrder)
};
THREE.ArrowHelper.prototype.setLength = function (a) {
  this.scale.set(a, a, a)
};
THREE.ArrowHelper.prototype.setColor = function (a) {
  this.line.material.color.setHex(a);
  this.cone.material.color.setHex(a)
};
THREE.CameraHelper = function (a) {
  function b(a, b, d) {
    c(a, d);
    c(b, d)
  }
  function c(a, b) {
    d.geometry.vertices.push(new THREE.Vector3);
    d.geometry.colors.push(new THREE.Color(b));
    void 0 === d.pointMap[a] && (d.pointMap[a] = [
    ]);
    d.pointMap[a].push(d.geometry.vertices.length - 1)
  }
  THREE.Line.call(this);
  var d = this;
  this.geometry = new THREE.Geometry;
  this.material = new THREE.LineBasicMaterial({
    color: 16777215,
    vertexColors: THREE.FaceColors
  });
  this.type = THREE.LinePieces;
  this.matrixWorld = a.matrixWorld;
  this.matrixAutoUpdate = !1;
  this.pointMap = {
  };
  b('n1', 'n2', 16755200);
  b('n2', 'n4', 16755200);
  b('n4', 'n3', 16755200);
  b('n3', 'n1', 16755200);
  b('f1', 'f2', 16755200);
  b('f2', 'f4', 16755200);
  b('f4', 'f3', 16755200);
  b('f3', 'f1', 16755200);
  b('n1', 'f1', 16755200);
  b('n2', 'f2', 16755200);
  b('n3', 'f3', 16755200);
  b('n4', 'f4', 16755200);
  b('p', 'n1', 16711680);
  b('p', 'n2', 16711680);
  b('p', 'n3', 16711680);
  b('p', 'n4', 16711680);
  b('u1', 'u2', 43775);
  b('u2', 'u3', 43775);
  b('u3', 'u1', 43775);
  b('c', 't', 16777215);
  b('p', 'c', 3355443);
  b('cn1', 'cn2', 3355443);
  b('cn3', 'cn4', 3355443);
  b('cf1', 'cf2', 3355443);
  b('cf3', 'cf4', 3355443);
  this.camera = a;
  this.update(a)
};
THREE.CameraHelper.prototype = Object.create(THREE.Line.prototype);
THREE.CameraHelper.prototype.update = function () {
  function a(a, d, e, f) {
    THREE.CameraHelper.__v.set(d, e, f);
    THREE.CameraHelper.__projector.unprojectVector(THREE.CameraHelper.__v, THREE.CameraHelper.__c);
    a = b.pointMap[a];
    if (void 0 !== a) {
      d = 0;
      for (e = a.length; d < e; d++) b.geometry.vertices[a[d]].copy(THREE.CameraHelper.__v)
    }
  }
  var b = this;
  THREE.CameraHelper.__c.projectionMatrix.copy(this.camera.projectionMatrix);
  a('c', 0, 0, - 1);
  a('t', 0, 0, 1);
  a('n1', - 1, - 1, - 1);
  a('n2', 1, - 1, - 1);
  a('n3', - 1, 1, - 1);
  a('n4', 1, 1, - 1);
  a('f1', - 1, - 1, 1);
  a('f2', 1, - 1, 1);
  a('f3', - 1, 1, 1);
  a('f4', 1, 1, 1);
  a('u1', 0.7, 1.1, - 1);
  a('u2', - 0.7, 1.1, - 1);
  a('u3', 0, 2, - 1);
  a('cf1', - 1, 0, 1);
  a('cf2', 1, 0, 1);
  a('cf3', 0, - 1, 1);
  a('cf4', 0, 1, 1);
  a('cn1', - 1, 0, - 1);
  a('cn2', 1, 0, - 1);
  a('cn3', 0, - 1, - 1);
  a('cn4', 0, 1, - 1);
  this.geometry.verticesNeedUpdate = !0
};
THREE.CameraHelper.__projector = new THREE.Projector;
THREE.CameraHelper.__v = new THREE.Vector3;
THREE.CameraHelper.__c = new THREE.Camera;
THREE.DirectionalLightHelper = function (a, b, c) {
  THREE.Object3D.call(this);
  this.light = a;
  this.position = a.position;
  this.direction = new THREE.Vector3;
  this.direction.sub(a.target.position, a.position);
  this.color = a.color.clone();
  var d = THREE.Math.clamp(a.intensity, 0, 1);
  this.color.r *= d;
  this.color.g *= d;
  this.color.b *= d;
  var d = this.color.getHex(),
  e = new THREE.SphereGeometry(b, 16, 8),
  f = new THREE.AsteriskGeometry(1.25 * b, 2.25 * b),
  g = new THREE.MeshBasicMaterial({
    color: d,
    fog: !1
  }),
  h = new THREE.LineBasicMaterial({
    color: d,
    fog: !1
  });
  this.lightArrow = new THREE.ArrowHelper(this.direction, null, c, d);
  this.lightSphere = new THREE.Mesh(e, g);
  this.lightArrow.cone.material.fog = !1;
  this.lightArrow.line.material.fog = !1;
  this.lightRays = new THREE.Line(f, h, THREE.LinePieces);
  this.add(this.lightArrow);
  this.add(this.lightSphere);
  this.add(this.lightRays);
  this.lightSphere.properties.isGizmo = !0;
  this.lightSphere.properties.gizmoSubject = a;
  this.lightSphere.properties.gizmoRoot = this;
  this.targetSphere = null;
  a.target.properties.targetInverse && (b = new THREE.SphereGeometry(b, 8, 4), c = new THREE.MeshBasicMaterial({
    color: d,
    wireframe: !0,
    fog: !1
  }), this.targetSphere = new THREE.Mesh(b, c), this.targetSphere.position = a.target.position, this.targetSphere.properties.isGizmo = !0, this.targetSphere.properties.gizmoSubject = a.target, this.targetSphere.properties.gizmoRoot = this.targetSphere, a = new THREE.LineDashedMaterial({
    color: d,
    dashSize: 4,
    gapSize: 4,
    opacity: 0.75,
    transparent: !0,
    fog: !1
  }), d = new THREE.Geometry, d.vertices.push(this.position.clone()), d.vertices.push(this.targetSphere.position.clone()), d.computeLineDistances(), this.targetLine = new THREE.Line(d, a), this.targetLine.properties.isGizmo = !0);
  this.properties.isGizmo = !0
};
THREE.DirectionalLightHelper.prototype = Object.create(THREE.Object3D.prototype);
THREE.DirectionalLightHelper.prototype.update = function () {
  this.direction.sub(this.light.target.position, this.light.position);
  this.lightArrow.setDirection(this.direction);
  this.color.copy(this.light.color);
  var a = THREE.Math.clamp(this.light.intensity, 0, 1);
  this.color.r *= a;
  this.color.g *= a;
  this.color.b *= a;
  this.lightArrow.setColor(this.color.getHex());
  this.lightSphere.material.color.copy(this.color);
  this.lightRays.material.color.copy(this.color);
  this.targetSphere.material.color.copy(this.color);
  this.targetLine.material.color.copy(this.color);
  this.targetLine.geometry.vertices[0].copy(this.light.position);
  this.targetLine.geometry.vertices[1].copy(this.light.target.position);
  this.targetLine.geometry.computeLineDistances();
  this.targetLine.geometry.verticesNeedUpdate = !0
};
THREE.HemisphereLightHelper = function (a, b, c) {
  THREE.Object3D.call(this);
  this.light = a;
  this.position = a.position;
  var d = THREE.Math.clamp(a.intensity, 0, 1);
  this.color = a.color.clone();
  this.color.r *= d;
  this.color.g *= d;
  this.color.b *= d;
  var e = this.color.getHex();
  this.groundColor = a.groundColor.clone();
  this.groundColor.r *= d;
  this.groundColor.g *= d;
  this.groundColor.b *= d;
  for (var d = this.groundColor.getHex(), f = new THREE.SphereGeometry(b, 16, 8, 0, 2 * Math.PI, 0, 0.5 * Math.PI), g = new THREE.SphereGeometry(b, 16, 8, 0, 2 * Math.PI, 0.5 * Math.PI, Math.PI), h = new THREE.MeshBasicMaterial({
    color: e,
    fog: !1
  }), i = new THREE.MeshBasicMaterial({
    color: d,
    fog: !1
  }), k = 0, l = f.faces.length; k < l; k++) f.faces[k].materialIndex = 0;
  k = 0;
  for (l = g.faces.length; k < l; k++) g.faces[k].materialIndex = 1;
  THREE.GeometryUtils.merge(f, g);
  this.lightSphere = new THREE.Mesh(f, new THREE.MeshFaceMaterial([h,
  i]));
  this.lightArrow = new THREE.ArrowHelper(new THREE.Vector3(0, 1, 0), new THREE.Vector3(0, 1.1 * (b + c), 0), c, e);
  this.lightArrow.rotation.x = Math.PI;
  this.lightArrowGround = new THREE.ArrowHelper(new THREE.Vector3(0, 1, 0), new THREE.Vector3(0, - 1.1 * (b + c), 0), c, d);
  b = new THREE.Object3D;
  b.rotation.x = 0.5 * - Math.PI;
  b.add(this.lightSphere);
  b.add(this.lightArrow);
  b.add(this.lightArrowGround);
  this.add(b);
  this.lightSphere.properties.isGizmo = !0;
  this.lightSphere.properties.gizmoSubject = a;
  this.lightSphere.properties.gizmoRoot = this;
  this.properties.isGizmo = !0;
  this.target = new THREE.Vector3;
  this.lookAt(this.target)
};
THREE.HemisphereLightHelper.prototype = Object.create(THREE.Object3D.prototype);
THREE.HemisphereLightHelper.prototype.update = function () {
  var a = THREE.Math.clamp(this.light.intensity, 0, 1);
  this.color.copy(this.light.color);
  this.groundColor.copy(this.light.groundColor);
  this.color.r *= a;
  this.color.g *= a;
  this.color.b *= a;
  this.groundColor.r *= a;
  this.groundColor.g *= a;
  this.groundColor.b *= a;
  this.lightSphere.material.materials[0].color.copy(this.color);
  this.lightSphere.material.materials[1].color.copy(this.groundColor);
  this.lightArrow.setColor(this.color.getHex());
  this.lightArrowGround.setColor(this.groundColor.getHex());
  this.lookAt(this.target)
};
THREE.PointLightHelper = function (a, b) {
  THREE.Object3D.call(this);
  this.light = a;
  this.position = a.position;
  this.color = a.color.clone();
  var c = THREE.Math.clamp(a.intensity, 0, 1);
  this.color.r *= c;
  this.color.g *= c;
  this.color.b *= c;
  var d = this.color.getHex(),
  c = new THREE.SphereGeometry(b, 16, 8),
  e = new THREE.AsteriskGeometry(1.25 * b, 2.25 * b),
  f = new THREE.IcosahedronGeometry(1, 2),
  g = new THREE.MeshBasicMaterial({
    color: d,
    fog: !1
  }),
  h = new THREE.LineBasicMaterial({
    color: d,
    fog: !1
  }),
  d = new THREE.MeshBasicMaterial({
    color: d,
    fog: !1,
    wireframe: !0,
    opacity: 0.1,
    transparent: !0
  });
  this.lightSphere = new THREE.Mesh(c, g);
  this.lightRays = new THREE.Line(e, h, THREE.LinePieces);
  this.lightDistance = new THREE.Mesh(f, d);
  c = a.distance;
  0 === c ? this.lightDistance.visible = !1 : this.lightDistance.scale.set(c, c, c);
  this.add(this.lightSphere);
  this.add(this.lightRays);
  this.add(this.lightDistance);
  this.lightSphere.properties.isGizmo = !0;
  this.lightSphere.properties.gizmoSubject = a;
  this.lightSphere.properties.gizmoRoot = this;
  this.properties.isGizmo = !0
};
THREE.PointLightHelper.prototype = Object.create(THREE.Object3D.prototype);
THREE.PointLightHelper.prototype.update = function () {
  this.color.copy(this.light.color);
  var a = THREE.Math.clamp(this.light.intensity, 0, 1);
  this.color.r *= a;
  this.color.g *= a;
  this.color.b *= a;
  this.lightSphere.material.color.copy(this.color);
  this.lightRays.material.color.copy(this.color);
  this.lightDistance.material.color.copy(this.color);
  a = this.light.distance;
  0 === a ? this.lightDistance.visible = !1 : (this.lightDistance.visible = !0, this.lightDistance.scale.set(a, a, a))
};
THREE.SpotLightHelper = function (a, b, c) {
  THREE.Object3D.call(this);
  this.light = a;
  this.position = a.position;
  this.direction = new THREE.Vector3;
  this.direction.sub(a.target.position, a.position);
  this.color = a.color.clone();
  var d = THREE.Math.clamp(a.intensity, 0, 1);
  this.color.r *= d;
  this.color.g *= d;
  this.color.b *= d;
  var d = this.color.getHex(),
  e = new THREE.SphereGeometry(b, 16, 8),
  f = new THREE.AsteriskGeometry(1.25 * b, 2.25 * b),
  g = new THREE.CylinderGeometry(0.0001, 1, 1, 8, 1, !0),
  h = new THREE.Matrix4;
  h.rotateX( - Math.PI / 2);
  h.translate(new THREE.Vector3(0, - 0.5, 0));
  g.applyMatrix(h);
  var i = new THREE.MeshBasicMaterial({
    color: d,
    fog: !1
  }),
  h = new THREE.LineBasicMaterial({
    color: d,
    fog: !1
  }),
  k = new THREE.MeshBasicMaterial({
    color: d,
    fog: !1,
    wireframe: !0,
    opacity: 0.3,
    transparent: !0
  });
  this.lightArrow = new THREE.ArrowHelper(this.direction, null, c, d);
  this.lightSphere = new THREE.Mesh(e, i);
  this.lightCone = new THREE.Mesh(g, k);
  c = a.distance ? a.distance : 10000;
  e = 2 * c * Math.tan(0.5 * a.angle);
  this.lightCone.scale.set(e, e, c);
  this.lightArrow.cone.material.fog = !1;
  this.lightArrow.line.material.fog = !1;
  this.lightRays = new THREE.Line(f, h, THREE.LinePieces);
  this.gyroscope = new THREE.Gyroscope;
  this.gyroscope.add(this.lightArrow);
  this.gyroscope.add(this.lightSphere);
  this.gyroscope.add(this.lightRays);
  this.add(this.gyroscope);
  this.add(this.lightCone);
  this.lookAt(a.target.position);
  this.lightSphere.properties.isGizmo = !0;
  this.lightSphere.properties.gizmoSubject = a;
  this.lightSphere.properties.gizmoRoot = this;
  this.targetSphere = null;
  a.target.properties.targetInverse && (b = new THREE.SphereGeometry(b, 8, 4), f = new THREE.MeshBasicMaterial({
    color: d,
    wireframe: !0,
    fog: !1
  }), this.targetSphere = new THREE.Mesh(b, f), this.targetSphere.position = a.target.position, this.targetSphere.properties.isGizmo = !0, this.targetSphere.properties.gizmoSubject = a.target, this.targetSphere.properties.gizmoRoot = this.targetSphere, a = new THREE.LineDashedMaterial({
    color: d,
    dashSize: 4,
    gapSize: 4,
    opacity: 0.75,
    transparent: !0,
    fog: !1
  }), d = new THREE.Geometry, d.vertices.push(this.position.clone()), d.vertices.push(this.targetSphere.position.clone()), d.computeLineDistances(), this.targetLine = new THREE.Line(d, a), this.targetLine.properties.isGizmo = !0);
  this.properties.isGizmo = !0
};
THREE.SpotLightHelper.prototype = Object.create(THREE.Object3D.prototype);
THREE.SpotLightHelper.prototype.update = function () {
  this.direction.sub(this.light.target.position, this.light.position);
  this.lightArrow.setDirection(this.direction);
  this.lookAt(this.light.target.position);
  var a = this.light.distance ? this.light.distance : 10000,
  b = 2 * a * Math.tan(0.5 * this.light.angle);
  this.lightCone.scale.set(b, b, a);
  this.color.copy(this.light.color);
  a = THREE.Math.clamp(this.light.intensity, 0, 1);
  this.color.r *= a;
  this.color.g *= a;
  this.color.b *= a;
  this.lightArrow.setColor(this.color.getHex());
  this.lightSphere.material.color.copy(this.color);
  this.lightRays.material.color.copy(this.color);
  this.lightCone.material.color.copy(this.color);
  this.targetSphere.material.color.copy(this.color);
  this.targetLine.material.color.copy(this.color);
  this.targetLine.geometry.vertices[0].copy(this.light.position);
  this.targetLine.geometry.vertices[1].copy(this.light.target.position);
  this.targetLine.geometry.computeLineDistances();
  this.targetLine.geometry.verticesNeedUpdate = !0
};
THREE.ImmediateRenderObject = function () {
  THREE.Object3D.call(this);
  this.render = function () {
  }
};
THREE.ImmediateRenderObject.prototype = Object.create(THREE.Object3D.prototype);
THREE.LensFlare = function (a, b, c, d, e) {
  THREE.Object3D.call(this);
  this.lensFlares = [
  ];
  this.positionScreen = new THREE.Vector3;
  this.customUpdateCallback = void 0;
  void 0 !== a && this.add(a, b, c, d, e)
};
THREE.LensFlare.prototype = Object.create(THREE.Object3D.prototype);
THREE.LensFlare.prototype.add = function (a, b, c, d, e, f) {
  void 0 === b && (b = - 1);
  void 0 === c && (c = 0);
  void 0 === f && (f = 1);
  void 0 === e && (e = new THREE.Color(16777215));
  void 0 === d && (d = THREE.NormalBlending);
  c = Math.min(c, Math.max(0, c));
  this.lensFlares.push({
    texture: a,
    size: b,
    distance: c,
    x: 0,
    y: 0,
    z: 0,
    scale: 1,
    rotation: 1,
    opacity: f,
    color: e,
    blending: d
  })
};
THREE.LensFlare.prototype.updateLensFlares = function () {
  var a,
  b = this.lensFlares.length,
  c,
  d = 2 * - this.positionScreen.x,
  e = 2 * - this.positionScreen.y;
  for (a = 0; a < b; a++) c = this.lensFlares[a],
  c.x = this.positionScreen.x + d * c.distance,
  c.y = this.positionScreen.y + e * c.distance,
  c.wantedRotation = 0.25 * c.x * Math.PI,
  c.rotation += 0.25 * (c.wantedRotation - c.rotation)
};
THREE.MorphBlendMesh = function (a, b) {
  THREE.Mesh.call(this, a, b);
  this.animationsMap = {
  };
  this.animationsList = [
  ];
  var c = this.geometry.morphTargets.length;
  this.createAnimation('__default', 0, c - 1, c / 1);
  this.setAnimationWeight('__default', 1)
};
THREE.MorphBlendMesh.prototype = Object.create(THREE.Mesh.prototype);
THREE.MorphBlendMesh.prototype.createAnimation = function (a, b, c, d) {
  b = {
    startFrame: b,
    endFrame: c,
    length: c - b + 1,
    fps: d,
    duration: (c - b) / d,
    lastFrame: 0,
    currentFrame: 0,
    active: !1,
    time: 0,
    direction: 1,
    weight: 1,
    directionBackwards: !1,
    mirroredLoop: !1
  };
  this.animationsMap[a] = b;
  this.animationsList.push(b)
};
THREE.MorphBlendMesh.prototype.autoCreateAnimations = function (a) {
  for (var b = /([a-z]+)(\d+)/, c, d = {
  }, e = this.geometry, f = 0, g = e.morphTargets.length; f < g; f++) {
    var h = e.morphTargets[f].name.match(b);
    if (h && 1 < h.length) {
      var i = h[1];
      d[i] || (d[i] = {
        start: Infinity,
        end: - Infinity
      });
      h = d[i];
      f < h.start && (h.start = f);
      f > h.end && (h.end = f);
      c || (c = i)
    }
  }
  for (i in d) h = d[i],
  this.createAnimation(i, h.start, h.end, a);
  this.firstAnimation = c
};
THREE.MorphBlendMesh.prototype.setAnimationDirectionForward = function (a) {
  if (a = this.animationsMap[a]) a.direction = 1,
  a.directionBackwards = !1
};
THREE.MorphBlendMesh.prototype.setAnimationDirectionBackward = function (a) {
  if (a = this.animationsMap[a]) a.direction = - 1,
  a.directionBackwards = !0
};
THREE.MorphBlendMesh.prototype.setAnimationFPS = function (a, b) {
  var c = this.animationsMap[a];
  c && (c.fps = b, c.duration = (c.end - c.start) / c.fps)
};
THREE.MorphBlendMesh.prototype.setAnimationDuration = function (a, b) {
  var c = this.animationsMap[a];
  c && (c.duration = b, c.fps = (c.end - c.start) / c.duration)
};
THREE.MorphBlendMesh.prototype.setAnimationWeight = function (a, b) {
  var c = this.animationsMap[a];
  c && (c.weight = b)
};
THREE.MorphBlendMesh.prototype.setAnimationTime = function (a, b) {
  var c = this.animationsMap[a];
  c && (c.time = b)
};
THREE.MorphBlendMesh.prototype.getAnimationTime = function (a) {
  var b = 0;
  if (a = this.animationsMap[a]) b = a.time;
  return b
};
THREE.MorphBlendMesh.prototype.getAnimationDuration = function (a) {
  var b = - 1;
  if (a = this.animationsMap[a]) b = a.duration;
  return b
};
THREE.MorphBlendMesh.prototype.playAnimation = function (a) {
  var b = this.animationsMap[a];
  b ? (b.time = 0, b.active = !0) : console.warn('animation[' + a + '] undefined')
};
THREE.MorphBlendMesh.prototype.stopAnimation = function (a) {
  if (a = this.animationsMap[a]) a.active = !1
};
THREE.MorphBlendMesh.prototype.update = function (a) {
  for (var b = 0, c = this.animationsList.length; b < c; b++) {
    var d = this.animationsList[b];
    if (d.active) {
      var e = d.duration / d.length;
      d.time += d.direction * a;
      if (d.mirroredLoop) {
        if (d.time > d.duration || 0 > d.time) d.direction *= - 1,
        d.time > d.duration && (d.time = d.duration, d.directionBackwards = !0),
        0 > d.time && (d.time = 0, d.directionBackwards = !1)
      } else d.time %= d.duration,
      0 > d.time && (d.time += d.duration);
      var f = d.startFrame + THREE.Math.clamp(Math.floor(d.time / e), 0, d.length - 1),
      g = d.weight;
      f !== d.currentFrame && (this.morphTargetInfluences[d.lastFrame] = 0, this.morphTargetInfluences[d.currentFrame] = 1 * g, this.morphTargetInfluences[f] = 0, d.lastFrame = d.currentFrame, d.currentFrame = f);
      e = d.time % e / e;
      d.directionBackwards && (e = 1 - e);
      this.morphTargetInfluences[d.currentFrame] = e * g;
      this.morphTargetInfluences[d.lastFrame] = (1 - e) * g
    }
  }
};
THREE.LensFlarePlugin = function () {
  function a(a, c) {
    var d = b.createProgram(),
    e = b.createShader(b.FRAGMENT_SHADER),
    f = b.createShader(b.VERTEX_SHADER),
    g = 'precision ' + c + ' float;\n';
    b.shaderSource(e, g + a.fragmentShader);
    b.shaderSource(f, g + a.vertexShader);
    b.compileShader(e);
    b.compileShader(f);
    b.attachShader(d, e);
    b.attachShader(d, f);
    b.linkProgram(d);
    return d
  }
  var b,
  c,
  d,
  e,
  f,
  g,
  h,
  i,
  k,
  l,
  m,
  p,
  s;
  this.init = function (q) {
    b = q.context;
    c = q;
    d = q.getPrecision();
    e = new Float32Array(16);
    f = new Uint16Array(6);
    q = 0;
    e[q++] = - 1;
    e[q++] = - 1;
    e[q++] = 0;
    e[q++] = 0;
    e[q++] = 1;
    e[q++] = - 1;
    e[q++] = 1;
    e[q++] = 0;
    e[q++] = 1;
    e[q++] = 1;
    e[q++] = 1;
    e[q++] = 1;
    e[q++] = - 1;
    e[q++] = 1;
    e[q++] = 0;
    e[q++] = 1;
    q = 0;
    f[q++] = 0;
    f[q++] = 1;
    f[q++] = 2;
    f[q++] = 0;
    f[q++] = 2;
    f[q++] = 3;
    g = b.createBuffer();
    h = b.createBuffer();
    b.bindBuffer(b.ARRAY_BUFFER, g);
    b.bufferData(b.ARRAY_BUFFER, e, b.STATIC_DRAW);
    b.bindBuffer(b.ELEMENT_ARRAY_BUFFER, h);
    b.bufferData(b.ELEMENT_ARRAY_BUFFER, f, b.STATIC_DRAW);
    i = b.createTexture();
    k = b.createTexture();
    b.bindTexture(b.TEXTURE_2D, i);
    b.texImage2D(b.TEXTURE_2D, 0, b.RGB, 16, 16, 0, b.RGB, b.UNSIGNED_BYTE, null);
    b.texParameteri(b.TEXTURE_2D, b.TEXTURE_WRAP_S, b.CLAMP_TO_EDGE);
    b.texParameteri(b.TEXTURE_2D, b.TEXTURE_WRAP_T, b.CLAMP_TO_EDGE);
    b.texParameteri(b.TEXTURE_2D, b.TEXTURE_MAG_FILTER, b.NEAREST);
    b.texParameteri(b.TEXTURE_2D, b.TEXTURE_MIN_FILTER, b.NEAREST);
    b.bindTexture(b.TEXTURE_2D, k);
    b.texImage2D(b.TEXTURE_2D, 0, b.RGBA, 16, 16, 0, b.RGBA, b.UNSIGNED_BYTE, null);
    b.texParameteri(b.TEXTURE_2D, b.TEXTURE_WRAP_S, b.CLAMP_TO_EDGE);
    b.texParameteri(b.TEXTURE_2D, b.TEXTURE_WRAP_T, b.CLAMP_TO_EDGE);
    b.texParameteri(b.TEXTURE_2D, b.TEXTURE_MAG_FILTER, b.NEAREST);
    b.texParameteri(b.TEXTURE_2D, b.TEXTURE_MIN_FILTER, b.NEAREST);
    0 >= b.getParameter(b.MAX_VERTEX_TEXTURE_IMAGE_UNITS) ? (l = !1, m = a(THREE.ShaderFlares.lensFlare, d)) : (l = !0, m = a(THREE.ShaderFlares.lensFlareVertexTexture, d));
    p = {
    };
    s = {
    };
    p.vertex = b.getAttribLocation(m, 'position');
    p.uv = b.getAttribLocation(m, 'uv');
    s.renderType = b.getUniformLocation(m, 'renderType');
    s.map = b.getUniformLocation(m, 'map');
    s.occlusionMap = b.getUniformLocation(m, 'occlusionMap');
    s.opacity = b.getUniformLocation(m, 'opacity');
    s.color = b.getUniformLocation(m, 'color');
    s.scale = b.getUniformLocation(m, 'scale');
    s.rotation = b.getUniformLocation(m, 'rotation');
    s.screenPosition = b.getUniformLocation(m, 'screenPosition')
  };
  this.render = function (a, d, e, f) {
    var a = a.__webglFlares,
    w = a.length;
    if (w) {
      var x = new THREE.Vector3,
      t = f / e,
      K = 0.5 * e,
      D = 0.5 * f,
      B = 16 / f,
      z = new THREE.Vector2(B * t, B),
      E = new THREE.Vector3(1, 1, 0),
      G = new THREE.Vector2(1, 1),
      I = s,
      B = p;
      b.useProgram(m);
      b.enableVertexAttribArray(p.vertex);
      b.enableVertexAttribArray(p.uv);
      b.uniform1i(I.occlusionMap, 0);
      b.uniform1i(I.map, 1);
      b.bindBuffer(b.ARRAY_BUFFER, g);
      b.vertexAttribPointer(B.vertex, 2, b.FLOAT, !1, 16, 0);
      b.vertexAttribPointer(B.uv, 2, b.FLOAT, !1, 16, 8);
      b.bindBuffer(b.ELEMENT_ARRAY_BUFFER, h);
      b.disable(b.CULL_FACE);
      b.depthMask(!1);
      var Y,
      C,
      P,
      A,
      J;
      for (Y = 0; Y < w; Y++) if (B = 16 / f, z.set(B * t, B), A = a[Y], x.set(A.matrixWorld.elements[12], A.matrixWorld.elements[13], A.matrixWorld.elements[14]), d.matrixWorldInverse.multiplyVector3(x), d.projectionMatrix.multiplyVector3(x), E.copy(x), G.x = E.x * K +
      K, G.y = E.y * D + D, l || 0 < G.x && G.x < e && 0 < G.y && G.y < f) {
        b.activeTexture(b.TEXTURE1);
        b.bindTexture(b.TEXTURE_2D, i);
        b.copyTexImage2D(b.TEXTURE_2D, 0, b.RGB, G.x - 8, G.y - 8, 16, 16, 0);
        b.uniform1i(I.renderType, 0);
        b.uniform2f(I.scale, z.x, z.y);
        b.uniform3f(I.screenPosition, E.x, E.y, E.z);
        b.disable(b.BLEND);
        b.enable(b.DEPTH_TEST);
        b.drawElements(b.TRIANGLES, 6, b.UNSIGNED_SHORT, 0);
        b.activeTexture(b.TEXTURE0);
        b.bindTexture(b.TEXTURE_2D, k);
        b.copyTexImage2D(b.TEXTURE_2D, 0, b.RGBA, G.x - 8, G.y - 8, 16, 16, 0);
        b.uniform1i(I.renderType, 1);
        b.disable(b.DEPTH_TEST);
        b.activeTexture(b.TEXTURE1);
        b.bindTexture(b.TEXTURE_2D, i);
        b.drawElements(b.TRIANGLES, 6, b.UNSIGNED_SHORT, 0);
        A.positionScreen.copy(E);
        A.customUpdateCallback ? A.customUpdateCallback(A) : A.updateLensFlares();
        b.uniform1i(I.renderType, 2);
        b.enable(b.BLEND);
        C = 0;
        for (P = A.lensFlares.length; C < P; C++) J = A.lensFlares[C],
        0.001 < J.opacity && 0.001 < J.scale && (E.x = J.x, E.y = J.y, E.z = J.z, B = J.size * J.scale / f, z.x = B * t, z.y = B, b.uniform3f(I.screenPosition, E.x, E.y, E.z), b.uniform2f(I.scale, z.x, z.y), b.uniform1f(I.rotation, J.rotation), b.uniform1f(I.opacity, J.opacity), b.uniform3f(I.color, J.color.r, J.color.g, J.color.b), c.setBlending(J.blending, J.blendEquation, J.blendSrc, J.blendDst), c.setTexture(J.texture, 1), b.drawElements(b.TRIANGLES, 6, b.UNSIGNED_SHORT, 0))
      }
      b.enable(b.CULL_FACE);
      b.enable(b.DEPTH_TEST);
      b.depthMask(!0)
    }
  }
};
THREE.ShadowMapPlugin = function () {
  var a,
  b,
  c,
  d,
  e,
  f,
  g = new THREE.Frustum,
  h = new THREE.Matrix4,
  i = new THREE.Vector3,
  k = new THREE.Vector3;
  this.init = function (g) {
    a = g.context;
    b = g;
    var g = THREE.ShaderLib.depthRGBA,
    h = THREE.UniformsUtils.clone(g.uniforms);
    c = new THREE.ShaderMaterial({
      fragmentShader: g.fragmentShader,
      vertexShader: g.vertexShader,
      uniforms: h
    });
    d = new THREE.ShaderMaterial({
      fragmentShader: g.fragmentShader,
      vertexShader: g.vertexShader,
      uniforms: h,
      morphTargets: !0
    });
    e = new THREE.ShaderMaterial({
      fragmentShader: g.fragmentShader,
      vertexShader: g.vertexShader,
      uniforms: h,
      skinning: !0
    });
    f = new THREE.ShaderMaterial({
      fragmentShader: g.fragmentShader,
      vertexShader: g.vertexShader,
      uniforms: h,
      morphTargets: !0,
      skinning: !0
    });
    c._shadowPass = !0;
    d._shadowPass = !0;
    e._shadowPass = !0;
    f._shadowPass = !0
  };
  this.render = function (a, c) {
    b.shadowMapEnabled && b.shadowMapAutoUpdate && this.update(a, c)
  };
  this.update = function (l, m) {
    var p,
    s,
    q,
    n,
    r,
    v,
    w,
    x,
    t,
    K = [
    ];
    n = 0;
    a.clearColor(1, 1, 1, 1);
    a.disable(a.BLEND);
    a.enable(a.CULL_FACE);
    a.frontFace(a.CCW);
    b.shadowMapCullFace === THREE.CullFaceFront ?
    a.cullFace(a.FRONT) : a.cullFace(a.BACK);
    b.setDepthTest(!0);
    p = 0;
    for (s = l.__lights.length; p < s; p++) if (q = l.__lights[p], q.castShadow) if (q instanceof THREE.DirectionalLight && q.shadowCascade) for (r = 0; r < q.shadowCascadeCount; r++) {
      var D;
      if (q.shadowCascadeArray[r]) D = q.shadowCascadeArray[r];
       else {
        t = q;
        w = r;
        D = new THREE.DirectionalLight;
        D.isVirtual = !0;
        D.onlyShadow = !0;
        D.castShadow = !0;
        D.shadowCameraNear = t.shadowCameraNear;
        D.shadowCameraFar = t.shadowCameraFar;
        D.shadowCameraLeft = t.shadowCameraLeft;
        D.shadowCameraRight = t.shadowCameraRight;
        D.shadowCameraBottom = t.shadowCameraBottom;
        D.shadowCameraTop = t.shadowCameraTop;
        D.shadowCameraVisible = t.shadowCameraVisible;
        D.shadowDarkness = t.shadowDarkness;
        D.shadowBias = t.shadowCascadeBias[w];
        D.shadowMapWidth = t.shadowCascadeWidth[w];
        D.shadowMapHeight = t.shadowCascadeHeight[w];
        D.pointsWorld = [
        ];
        D.pointsFrustum = [
        ];
        x = D.pointsWorld;
        v = D.pointsFrustum;
        for (var B = 0; 8 > B; B++) x[B] = new THREE.Vector3,
        v[B] = new THREE.Vector3;
        x = t.shadowCascadeNearZ[w];
        t = t.shadowCascadeFarZ[w];
        v[0].set( - 1, - 1, x);
        v[1].set(1, - 1, x);
        v[2].set( - 1, 1, x);
        v[3].set(1, 1, x);
        v[4].set( - 1, - 1, t);
        v[5].set(1, - 1, t);
        v[6].set( - 1, 1, t);
        v[7].set(1, 1, t);
        D.originalCamera = m;
        v = new THREE.Gyroscope;
        v.position = q.shadowCascadeOffset;
        v.add(D);
        v.add(D.target);
        m.add(v);
        q.shadowCascadeArray[r] = D;
        console.log('Created virtualLight', D)
      }
      w = q;
      x = r;
      t = w.shadowCascadeArray[x];
      t.position.copy(w.position);
      t.target.position.copy(w.target.position);
      t.lookAt(t.target);
      t.shadowCameraVisible = w.shadowCameraVisible;
      t.shadowDarkness = w.shadowDarkness;
      t.shadowBias = w.shadowCascadeBias[x];
      v = w.shadowCascadeNearZ[x];
      w = w.shadowCascadeFarZ[x];
      t = t.pointsFrustum;
      t[0].z = v;
      t[1].z = v;
      t[2].z = v;
      t[3].z = v;
      t[4].z = w;
      t[5].z = w;
      t[6].z = w;
      t[7].z = w;
      K[n] = D;
      n++
    } else K[n] = q,
    n++;
    p = 0;
    for (s = K.length; p < s; p++) {
      q = K[p];
      q.shadowMap || (r = THREE.LinearFilter, b.shadowMapType === THREE.PCFSoftShadowMap && (r = THREE.NearestFilter), q.shadowMap = new THREE.WebGLRenderTarget(q.shadowMapWidth, q.shadowMapHeight, {
        minFilter: r,
        magFilter: r,
        format: THREE.RGBAFormat
      }), q.shadowMapSize = new THREE.Vector2(q.shadowMapWidth, q.shadowMapHeight), q.shadowMatrix = new THREE.Matrix4);
      if (!q.shadowCamera) {
        if (q instanceof THREE.SpotLight) q.shadowCamera = new THREE.PerspectiveCamera(q.shadowCameraFov, q.shadowMapWidth / q.shadowMapHeight, q.shadowCameraNear, q.shadowCameraFar);
         else if (q instanceof THREE.DirectionalLight) q.shadowCamera = new THREE.OrthographicCamera(q.shadowCameraLeft, q.shadowCameraRight, q.shadowCameraTop, q.shadowCameraBottom, q.shadowCameraNear, q.shadowCameraFar);
         else {
          console.error('Unsupported light type for shadow');
          continue
        }
        l.add(q.shadowCamera);
        b.autoUpdateScene && l.updateMatrixWorld()
      }
      q.shadowCameraVisible && !q.cameraHelper && (q.cameraHelper = new THREE.CameraHelper(q.shadowCamera), q.shadowCamera.add(q.cameraHelper));
      n = q.shadowMap;
      v = q.shadowMatrix;
      r = q.shadowCamera;
      r.position.copy(q.matrixWorld.getPosition());
      r.lookAt(q.target.matrixWorld.getPosition());
      r.updateMatrixWorld();
      r.matrixWorldInverse.getInverse(r.matrixWorld);
      if (q.isVirtual && D.originalCamera == m) {
        t = m;
        w = q.shadowCamera;
        x = q.pointsFrustum;
        B = q.pointsWorld;
        i.set(Infinity, Infinity, Infinity);
        k.set( - Infinity, - Infinity, - Infinity);
        for (var z = 0; 8 > z; z++) {
          var E = B[z];
          E.copy(x[z]);
          THREE.ShadowMapPlugin.__projector.unprojectVector(E, t);
          w.matrixWorldInverse.multiplyVector3(E);
          E.x < i.x && (i.x = E.x);
          E.x > k.x && (k.x = E.x);
          E.y < i.y && (i.y = E.y);
          E.y > k.y && (k.y = E.y);
          E.z < i.z && (i.z = E.z);
          E.z > k.z && (k.z = E.z)
        }
        w.left = i.x;
        w.right = k.x;
        w.top = k.y;
        w.bottom = i.y;
        w.updateProjectionMatrix()
      }
      q.cameraHelper && (q.cameraHelper.visible = q.shadowCameraVisible);
      q.shadowCameraVisible && q.cameraHelper.update();
      v.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 0.5, 0.5, 0, 0, 0, 1);
      v.multiplySelf(r.projectionMatrix);
      v.multiplySelf(r.matrixWorldInverse);
      h.multiply(r.projectionMatrix, r.matrixWorldInverse);
      g.setFromMatrix(h);
      b.setRenderTarget(n);
      b.clear();
      t = l.__webglObjects;
      q = 0;
      for (n = t.length; q < n; q++) if (w = t[q], v = w.object, w.render = !1, v.visible && v.castShadow && (!(v instanceof THREE.Mesh || v instanceof THREE.ParticleSystem) || !v.frustumCulled || g.contains(v))) v._modelViewMatrix.multiply(r.matrixWorldInverse, v.matrixWorld),
      w.render = !0;
      q = 0;
      for (n = t.length; q < n; q++) w = t[q],
      w.render && (v = w.object, w = w.buffer, B = v.material instanceof THREE.MeshFaceMaterial ? v.material.materials[0] :
      v.material, x = 0 < v.geometry.morphTargets.length && B.morphTargets, B = v instanceof THREE.SkinnedMesh && B.skinning, x = v.customDepthMaterial ? v.customDepthMaterial : B ? x ? f : e : x ? d : c, w instanceof THREE.BufferGeometry ? b.renderBufferDirect(r, l.__lights, null, x, w, v) : b.renderBuffer(r, l.__lights, null, x, w, v));
      t = l.__webglObjectsImmediate;
      q = 0;
      for (n = t.length; q < n; q++) w = t[q],
      v = w.object,
      v.visible && v.castShadow && (v._modelViewMatrix.multiply(r.matrixWorldInverse, v.matrixWorld), b.renderImmediateObject(r, l.__lights, null, c, v))
    }
    p = b.getClearColor();
    s = b.getClearAlpha();
    a.clearColor(p.r, p.g, p.b, s);
    a.enable(a.BLEND);
    b.shadowMapCullFace === THREE.CullFaceFront && a.cullFace(a.BACK)
  }
};
THREE.ShadowMapPlugin.__projector = new THREE.Projector;
THREE.SpritePlugin = function () {
  function a(a, b) {
    return a.z !== b.z ? b.z - a.z : b.id - a.id
  }
  var b,
  c,
  d,
  e,
  f,
  g,
  h,
  i,
  k,
  l;
  this.init = function (a) {
    b = a.context;
    c = a;
    d = a.getPrecision();
    e = new Float32Array(16);
    f = new Uint16Array(6);
    a = 0;
    e[a++] = - 1;
    e[a++] = - 1;
    e[a++] = 0;
    e[a++] = 0;
    e[a++] = 1;
    e[a++] = - 1;
    e[a++] = 1;
    e[a++] = 0;
    e[a++] = 1;
    e[a++] = 1;
    e[a++] = 1;
    e[a++] = 1;
    e[a++] = - 1;
    e[a++] = 1;
    e[a++] = 0;
    e[a++] = 1;
    a = 0;
    f[a++] = 0;
    f[a++] = 1;
    f[a++] = 2;
    f[a++] = 0;
    f[a++] = 2;
    f[a++] = 3;
    g = b.createBuffer();
    h = b.createBuffer();
    b.bindBuffer(b.ARRAY_BUFFER, g);
    b.bufferData(b.ARRAY_BUFFER, e, b.STATIC_DRAW);
    b.bindBuffer(b.ELEMENT_ARRAY_BUFFER, h);
    b.bufferData(b.ELEMENT_ARRAY_BUFFER, f, b.STATIC_DRAW);
    var a = THREE.ShaderSprite.sprite,
    p = b.createProgram(),
    s = b.createShader(b.FRAGMENT_SHADER),
    q = b.createShader(b.VERTEX_SHADER),
    n = 'precision ' + d + ' float;\n';
    b.shaderSource(s, n + a.fragmentShader);
    b.shaderSource(q, n + a.vertexShader);
    b.compileShader(s);
    b.compileShader(q);
    b.attachShader(p, s);
    b.attachShader(p, q);
    b.linkProgram(p);
    i = p;
    k = {
    };
    l = {
    };
    k.position = b.getAttribLocation(i, 'position');
    k.uv = b.getAttribLocation(i, 'uv');
    l.uvOffset = b.getUniformLocation(i, 'uvOffset');
    l.uvScale = b.getUniformLocation(i, 'uvScale');
    l.rotation = b.getUniformLocation(i, 'rotation');
    l.scale = b.getUniformLocation(i, 'scale');
    l.alignment = b.getUniformLocation(i, 'alignment');
    l.color = b.getUniformLocation(i, 'color');
    l.map = b.getUniformLocation(i, 'map');
    l.opacity = b.getUniformLocation(i, 'opacity');
    l.useScreenCoordinates = b.getUniformLocation(i, 'useScreenCoordinates');
    l.sizeAttenuation = b.getUniformLocation(i, 'sizeAttenuation');
    l.screenPosition = b.getUniformLocation(i, 'screenPosition');
    l.modelViewMatrix = b.getUniformLocation(i, 'modelViewMatrix');
    l.projectionMatrix = b.getUniformLocation(i, 'projectionMatrix');
    l.fogType = b.getUniformLocation(i, 'fogType');
    l.fogDensity = b.getUniformLocation(i, 'fogDensity');
    l.fogNear = b.getUniformLocation(i, 'fogNear');
    l.fogFar = b.getUniformLocation(i, 'fogFar');
    l.fogColor = b.getUniformLocation(i, 'fogColor');
    l.alphaTest = b.getUniformLocation(i, 'alphaTest')
  };
  this.render = function (d, e, f, q) {
    var n = d.__webglSprites,
    r = n.length;
    if (r) {
      var v = k,
      w = l,
      x = q / f,
      f = 0.5 * f,
      t = 0.5 * q;
      b.useProgram(i);
      b.enableVertexAttribArray(v.position);
      b.enableVertexAttribArray(v.uv);
      b.disable(b.CULL_FACE);
      b.enable(b.BLEND);
      b.bindBuffer(b.ARRAY_BUFFER, g);
      b.vertexAttribPointer(v.position, 2, b.FLOAT, !1, 16, 0);
      b.vertexAttribPointer(v.uv, 2, b.FLOAT, !1, 16, 8);
      b.bindBuffer(b.ELEMENT_ARRAY_BUFFER, h);
      b.uniformMatrix4fv(w.projectionMatrix, !1, e.projectionMatrix.elements);
      b.activeTexture(b.TEXTURE0);
      b.uniform1i(w.map, 0);
      var K = v = 0,
      D = d.fog;
      D ? (b.uniform3f(w.fogColor, D.color.r, D.color.g, D.color.b), D instanceof THREE.Fog ? (b.uniform1f(w.fogNear, D.near), b.uniform1f(w.fogFar, D.far), b.uniform1i(w.fogType, 1), K = v = 1) : D instanceof THREE.FogExp2 && (b.uniform1f(w.fogDensity, D.density), b.uniform1i(w.fogType, 2), K = v = 2)) : (b.uniform1i(w.fogType, 0), K = v = 0);
      for (var B, z, E = [
      ], D = 0; D < r; D++) B = n[D],
      z = B.material,
      B.visible && 0 !== z.opacity && (z.useScreenCoordinates ? B.z = - B.position.z : (B._modelViewMatrix.multiply(e.matrixWorldInverse, B.matrixWorld), B.z = - B._modelViewMatrix.elements[14]));
      n.sort(a);
      for (D = 0; D < r; D++) B = n[D],
      z = B.material,
      B.visible && 0 !== z.opacity && (z.map && z.map.image && z.map.image.width) && (b.uniform1f(w.alphaTest, z.alphaTest), !0 === z.useScreenCoordinates ? (b.uniform1i(w.useScreenCoordinates, 1), b.uniform3f(w.screenPosition, (B.position.x * c.devicePixelRatio - f) / f, (t - B.position.y * c.devicePixelRatio) / t, Math.max(0, Math.min(1, B.position.z))), E[0] = c.devicePixelRatio, E[1] = c.devicePixelRatio) : (b.uniform1i(w.useScreenCoordinates, 0), b.uniform1i(w.sizeAttenuation, z.sizeAttenuation ? 1 : 0), b.uniformMatrix4fv(w.modelViewMatrix, !1, B._modelViewMatrix.elements), E[0] = 1, E[1] = 1), e = d.fog && z.fog ? K : 0, v !== e && (b.uniform1i(w.fogType, e), v = e), e = 1 / (z.scaleByViewport ? q : 1), E[0] *= e * x * B.scale.x, E[1] *= e * B.scale.y, b.uniform2f(w.uvScale, z.uvScale.x, z.uvScale.y), b.uniform2f(w.uvOffset, z.uvOffset.x, z.uvOffset.y), b.uniform2f(w.alignment, z.alignment.x, z.alignment.y), b.uniform1f(w.opacity, z.opacity), b.uniform3f(w.color, z.color.r, z.color.g, z.color.b), b.uniform1f(w.rotation, B.rotation), b.uniform2fv(w.scale, E), c.setBlending(z.blending, z.blendEquation, z.blendSrc, z.blendDst), c.setDepthTest(z.depthTest), c.setDepthWrite(z.depthWrite), c.setTexture(z.map, 0), b.drawElements(b.TRIANGLES, 6, b.UNSIGNED_SHORT, 0));
      b.enable(b.CULL_FACE)
    }
  }
};
THREE.DepthPassPlugin = function () {
  this.enabled = !1;
  this.renderTarget = null;
  var a,
  b,
  c,
  d,
  e,
  f,
  g = new THREE.Frustum,
  h = new THREE.Matrix4;
  this.init = function (g) {
    a = g.context;
    b = g;
    var g = THREE.ShaderLib.depthRGBA,
    h = THREE.UniformsUtils.clone(g.uniforms);
    c = new THREE.ShaderMaterial({
      fragmentShader: g.fragmentShader,
      vertexShader: g.vertexShader,
      uniforms: h
    });
    d = new THREE.ShaderMaterial({
      fragmentShader: g.fragmentShader,
      vertexShader: g.vertexShader,
      uniforms: h,
      morphTargets: !0
    });
    e = new THREE.ShaderMaterial({
      fragmentShader: g.fragmentShader,
      vertexShader: g.vertexShader,
      uniforms: h,
      skinning: !0
    });
    f = new THREE.ShaderMaterial({
      fragmentShader: g.fragmentShader,
      vertexShader: g.vertexShader,
      uniforms: h,
      morphTargets: !0,
      skinning: !0
    });
    c._shadowPass = !0;
    d._shadowPass = !0;
    e._shadowPass = !0;
    f._shadowPass = !0
  };
  this.render = function (a, b) {
    this.enabled && this.update(a, b)
  };
  this.update = function (i, k) {
    var l,
    m,
    p,
    s,
    q,
    n;
    a.clearColor(1, 1, 1, 1);
    a.disable(a.BLEND);
    b.setDepthTest(!0);
    b.autoUpdateScene && i.updateMatrixWorld();
    k.matrixWorldInverse.getInverse(k.matrixWorld);
    h.multiply(k.projectionMatrix, k.matrixWorldInverse);
    g.setFromMatrix(h);
    b.setRenderTarget(this.renderTarget);
    b.clear();
    n = i.__webglObjects;
    l = 0;
    for (m = n.length; l < m; l++) if (p = n[l], q = p.object, p.render = !1, q.visible && (!(q instanceof THREE.Mesh || q instanceof THREE.ParticleSystem) || !q.frustumCulled || g.contains(q))) q._modelViewMatrix.multiply(k.matrixWorldInverse, q.matrixWorld),
    p.render = !0;
    var r;
    l = 0;
    for (m = n.length; l < m; l++) if (p = n[l], p.render && (q = p.object, p = p.buffer, !(q instanceof THREE.ParticleSystem) || q.customDepthMaterial)) (r = q.material instanceof THREE.MeshFaceMaterial ? q.material.materials[0] : q.material) && b.setMaterialFaces(q.material),
    s = 0 < q.geometry.morphTargets.length && r.morphTargets,
    r = q instanceof THREE.SkinnedMesh && r.skinning,
    s = q.customDepthMaterial ? q.customDepthMaterial : r ? s ? f : e : s ? d : c,
    p instanceof THREE.BufferGeometry ? b.renderBufferDirect(k, i.__lights, null, s, p, q) : b.renderBuffer(k, i.__lights, null, s, p, q);
    n = i.__webglObjectsImmediate;
    l = 0;
    for (m = n.length; l < m; l++) p = n[l],
    q = p.object,
    q.visible && (q._modelViewMatrix.multiply(k.matrixWorldInverse, q.matrixWorld), b.renderImmediateObject(k, i.__lights, null, c, q));
    l = b.getClearColor();
    m = b.getClearAlpha();
    a.clearColor(l.r, l.g, l.b, m);
    a.enable(a.BLEND)
  }
};
THREE.ShaderFlares = {
  lensFlareVertexTexture: {
    vertexShader: 'uniform lowp int renderType;\nuniform vec3 screenPosition;\nuniform vec2 scale;\nuniform float rotation;\nuniform sampler2D occlusionMap;\nattribute vec2 position;\nattribute vec2 uv;\nvarying vec2 vUV;\nvarying float vVisibility;\nvoid main() {\nvUV = uv;\nvec2 pos = position;\nif( renderType == 2 ) {\nvec4 visibility = texture2D( occlusionMap, vec2( 0.1, 0.1 ) ) +\ntexture2D( occlusionMap, vec2( 0.5, 0.1 ) ) +\ntexture2D( occlusionMap, vec2( 0.9, 0.1 ) ) +\ntexture2D( occlusionMap, vec2( 0.9, 0.5 ) ) +\ntexture2D( occlusionMap, vec2( 0.9, 0.9 ) ) +\ntexture2D( occlusionMap, vec2( 0.5, 0.9 ) ) +\ntexture2D( occlusionMap, vec2( 0.1, 0.9 ) ) +\ntexture2D( occlusionMap, vec2( 0.1, 0.5 ) ) +\ntexture2D( occlusionMap, vec2( 0.5, 0.5 ) );\nvVisibility = (       visibility.r / 9.0 ) *\n( 1.0 - visibility.g / 9.0 ) *\n(       visibility.b / 9.0 ) *\n( 1.0 - visibility.a / 9.0 );\npos.x = cos( rotation ) * position.x - sin( rotation ) * position.y;\npos.y = sin( rotation ) * position.x + cos( rotation ) * position.y;\n}\ngl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );\n}',
    fragmentShader: 'uniform lowp int renderType;\nuniform sampler2D map;\nuniform float opacity;\nuniform vec3 color;\nvarying vec2 vUV;\nvarying float vVisibility;\nvoid main() {\nif( renderType == 0 ) {\ngl_FragColor = vec4( 1.0, 0.0, 1.0, 0.0 );\n} else if( renderType == 1 ) {\ngl_FragColor = texture2D( map, vUV );\n} else {\nvec4 texture = texture2D( map, vUV );\ntexture.a *= opacity * vVisibility;\ngl_FragColor = texture;\ngl_FragColor.rgb *= color;\n}\n}'
  },
  lensFlare: {
    vertexShader: 'uniform lowp int renderType;\nuniform vec3 screenPosition;\nuniform vec2 scale;\nuniform float rotation;\nattribute vec2 position;\nattribute vec2 uv;\nvarying vec2 vUV;\nvoid main() {\nvUV = uv;\nvec2 pos = position;\nif( renderType == 2 ) {\npos.x = cos( rotation ) * position.x - sin( rotation ) * position.y;\npos.y = sin( rotation ) * position.x + cos( rotation ) * position.y;\n}\ngl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );\n}',
    fragmentShader: 'precision mediump float;\nuniform lowp int renderType;\nuniform sampler2D map;\nuniform sampler2D occlusionMap;\nuniform float opacity;\nuniform vec3 color;\nvarying vec2 vUV;\nvoid main() {\nif( renderType == 0 ) {\ngl_FragColor = vec4( texture2D( map, vUV ).rgb, 0.0 );\n} else if( renderType == 1 ) {\ngl_FragColor = texture2D( map, vUV );\n} else {\nfloat visibility = texture2D( occlusionMap, vec2( 0.5, 0.1 ) ).a +\ntexture2D( occlusionMap, vec2( 0.9, 0.5 ) ).a +\ntexture2D( occlusionMap, vec2( 0.5, 0.9 ) ).a +\ntexture2D( occlusionMap, vec2( 0.1, 0.5 ) ).a;\nvisibility = ( 1.0 - visibility / 4.0 );\nvec4 texture = texture2D( map, vUV );\ntexture.a *= opacity * visibility;\ngl_FragColor = texture;\ngl_FragColor.rgb *= color;\n}\n}'
  }
};
THREE.ShaderSprite = {
  sprite: {
    vertexShader: 'uniform int useScreenCoordinates;\nuniform int sizeAttenuation;\nuniform vec3 screenPosition;\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform float rotation;\nuniform vec2 scale;\nuniform vec2 alignment;\nuniform vec2 uvOffset;\nuniform vec2 uvScale;\nattribute vec2 position;\nattribute vec2 uv;\nvarying vec2 vUV;\nvoid main() {\nvUV = uvOffset + uv * uvScale;\nvec2 alignedPosition = position + alignment;\nvec2 rotatedPosition;\nrotatedPosition.x = ( cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y ) * scale.x;\nrotatedPosition.y = ( sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y ) * scale.y;\nvec4 finalPosition;\nif( useScreenCoordinates != 0 ) {\nfinalPosition = vec4( screenPosition.xy + rotatedPosition, screenPosition.z, 1.0 );\n} else {\nfinalPosition = projectionMatrix * modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\nfinalPosition.xy += rotatedPosition * ( sizeAttenuation == 1 ? 1.0 : finalPosition.z );\n}\ngl_Position = finalPosition;\n}',
    fragmentShader: 'uniform vec3 color;\nuniform sampler2D map;\nuniform float opacity;\nuniform int fogType;\nuniform vec3 fogColor;\nuniform float fogDensity;\nuniform float fogNear;\nuniform float fogFar;\nuniform float alphaTest;\nvarying vec2 vUV;\nvoid main() {\nvec4 texture = texture2D( map, vUV );\nif ( texture.a < alphaTest ) discard;\ngl_FragColor = vec4( color * texture.xyz, texture.a * opacity );\nif ( fogType > 0 ) {\nfloat depth = gl_FragCoord.z / gl_FragCoord.w;\nfloat fogFactor = 0.0;\nif ( fogType == 1 ) {\nfogFactor = smoothstep( fogNear, fogFar, depth );\n} else {\nconst float LOG2 = 1.442695;\nfloat fogFactor = exp2( - fogDensity * fogDensity * depth * depth * LOG2 );\nfogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );\n}\ngl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );\n}\n}'
  }
};

