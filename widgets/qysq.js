// ============================================================
// 妻友社区 Rex 模块 (qysq.js)
// 站点: https://p2.qy12a.cc/ (Flutter Web)
// API:  https://d2aesh7mp81d85.cloudfront.net /api/app/*
// 逆向结论:
//   x-api-key = timestamp=ts;sign=HMAC-SHA1(k, cred&path&UA&ts&nonce);nonce=uuid
//   响应 hash:true → data 为 AES-256-CBC 密文(salt12 + SHA256派生key/iv)
//   guest: POST /api/app/login/guest {devID, affCode:"{}"} → data.token
//   注意: 服务端按 devID 关联账号, 新 devID 首次登录 data 可能为 null(风控),
//         需重试; token 存 Widget.storage 复用。
// ============================================================

var WidgetMetadata = {
  id: "com.qysq.rex",
  title: "妻友社区",
  version: "0.1.0",
  requiredVersion: "0.0.1",
  description: "妻友社区 视频聚合 (qy12a.cc)",
  author: "ZCode",
  site: "https://p2.qy12a.cc/",
  detailCacheDuration: 60,
  globalParams: [
    { name: "userName", title: "账号", type: "input",
      description: "妻友社区账号(留空则走游客模式)",
      placeholders: [{ title: "用户名", value: "" }] },
    { name: "password", title: "密码", type: "input",
      description: "账号密码(与账号同时填写才启用账号登录)",
      placeholders: [{ title: "密码", value: "" }] }
  ],
  modules: [
    { id: "home_new", title: "最新", functionName: "loadList", params: [
      { name: "page", title: "页码", type: "page" },
      { name: "sort", title: "排序", type: "enumeration", enumOptions: [{ title: "默认", value: "0" }, { title: "最新", value: "1" }, { title: "最热", value: "2" }] },
      { name: "tagId", title: "分类ID", type: "constant", value: "376401" },
      { name: "mode", title: "ID用途", type: "enumeration", enumOptions: [{ title: "作为tagId", value: "tag" }, { title: "作为mediaType", value: "type" }] }
    ] },
    { id: "home_rec", title: "推荐", functionName: "loadList", params: [
      { name: "page", title: "页码", type: "page" },
      { name: "sort", title: "排序", type: "enumeration", enumOptions: [{ title: "默认", value: "0" }, { title: "最新", value: "1" }, { title: "最热", value: "2" }] },
      { name: "tagId", title: "分类ID", type: "constant", value: "342081" },
      { name: "mode", title: "ID用途", type: "enumeration", enumOptions: [{ title: "作为tagId", value: "tag" }, { title: "作为mediaType", value: "type" }] }
    ] },
    { id: "home_guochan", title: "国产", functionName: "loadList", params: [
      { name: "page", title: "页码", type: "page" },
      { name: "sort", title: "排序", type: "enumeration", enumOptions: [{ title: "默认", value: "0" }, { title: "最新", value: "1" }, { title: "最热", value: "2" }] },
      { name: "tagId", title: "分类ID", type: "constant", value: "342083" },
      { name: "mode", title: "ID用途", type: "enumeration", enumOptions: [{ title: "作为tagId", value: "tag" }, { title: "作为mediaType", value: "type" }] }
    ] },
    { id: "home_hq", title: "换妻原创", functionName: "loadList", params: [
      { name: "page", title: "页码", type: "page" },
      { name: "sort", title: "排序", type: "enumeration", enumOptions: [{ title: "默认", value: "0" }, { title: "最新", value: "1" }, { title: "最热", value: "2" }] },
      { name: "tagId", title: "分类ID", type: "constant", value: "696021" },
      { name: "mode", title: "ID用途", type: "enumeration", enumOptions: [{ title: "作为tagId", value: "tag" }, { title: "作为mediaType", value: "type" }] }
    ] },
    { id: "home_duanju", title: "短剧", functionName: "loadList", params: [
      { name: "page", title: "页码", type: "page" },
      { name: "sort", title: "排序", type: "enumeration", enumOptions: [{ title: "默认", value: "0" }, { title: "最新", value: "1" }, { title: "最热", value: "2" }] },
      { name: "tagId", title: "分类ID", type: "constant", value: "718901" },
      { name: "mode", title: "ID用途", type: "enumeration", enumOptions: [{ title: "作为tagId", value: "tag" }, { title: "作为mediaType", value: "type" }] }
    ] },
    { id: "home_lunli", title: "乱伦", functionName: "loadList", params: [
      { name: "page", title: "页码", type: "page" },
      { name: "sort", title: "排序", type: "enumeration", enumOptions: [{ title: "默认", value: "0" }, { title: "最新", value: "1" }, { title: "最热", value: "2" }] },
      { name: "tagId", title: "分类ID", type: "constant", value: "342082" },
      { name: "mode", title: "ID用途", type: "enumeration", enumOptions: [{ title: "作为tagId", value: "tag" }, { title: "作为mediaType", value: "type" }] }
    ] },
    { id: "home_av", title: "AV", functionName: "loadList", params: [
      { name: "page", title: "页码", type: "page" },
      { name: "sort", title: "排序", type: "enumeration", enumOptions: [{ title: "默认", value: "0" }, { title: "最新", value: "1" }, { title: "最热", value: "2" }] },
      { name: "tagId", title: "分类ID", type: "constant", value: "342088" },
      { name: "mode", title: "ID用途", type: "enumeration", enumOptions: [{ title: "作为tagId", value: "tag" }, { title: "作为mediaType", value: "type" }] }
    ] },
    { id: "home_ai", title: "AI漫剧", functionName: "loadList", params: [
      { name: "page", title: "页码", type: "page" },
      { name: "sort", title: "排序", type: "enumeration", enumOptions: [{ title: "默认", value: "0" }, { title: "最新", value: "1" }, { title: "最热", value: "2" }] },
      { name: "tagId", title: "分类ID", type: "constant", value: "717241" },
      { name: "mode", title: "ID用途", type: "enumeration", enumOptions: [{ title: "作为tagId", value: "tag" }, { title: "作为mediaType", value: "type" }] }
    ] },
    { id: "home_chuanmei", title: "传媒", functionName: "loadList", params: [
      { name: "page", title: "页码", type: "page" },
      { name: "sort", title: "排序", type: "enumeration", enumOptions: [{ title: "默认", value: "0" }, { title: "最新", value: "1" }, { title: "最热", value: "2" }] },
      { name: "tagId", title: "分类ID", type: "constant", value: "342089" },
      { name: "mode", title: "ID用途", type: "enumeration", enumOptions: [{ title: "作为tagId", value: "tag" }, { title: "作为mediaType", value: "type" }] }
    ] },
    { id: "home_wanghuang", title: "网黄", functionName: "loadList", params: [
      { name: "page", title: "页码", type: "page" },
      { name: "sort", title: "排序", type: "enumeration", enumOptions: [{ title: "默认", value: "0" }, { title: "最新", value: "1" }, { title: "最热", value: "2" }] },
      { name: "tagId", title: "分类ID", type: "constant", value: "342085" },
      { name: "mode", title: "ID用途", type: "enumeration", enumOptions: [{ title: "作为tagId", value: "tag" }, { title: "作为mediaType", value: "type" }] }
    ] },
    { id: "home_anime", title: "动漫", functionName: "loadList", params: [
      { name: "page", title: "页码", type: "page" },
      { name: "sort", title: "排序", type: "enumeration", enumOptions: [{ title: "默认", value: "0" }, { title: "最新", value: "1" }, { title: "最热", value: "2" }] },
      { name: "tagId", title: "分类ID", type: "constant", value: "19201" },
      { name: "mode", title: "ID用途", type: "enumeration", enumOptions: [{ title: "作为tagId", value: "tag" }, { title: "作为mediaType", value: "type" }] }
    ] },
    { id: "home_comic", title: "漫画", functionName: "loadList", params: [
      { name: "page", title: "页码", type: "page" },
      { name: "sort", title: "排序", type: "enumeration", enumOptions: [{ title: "默认", value: "0" }, { title: "最新", value: "1" }, { title: "最热", value: "2" }] },
      { name: "tagId", title: "分类ID", type: "constant", value: "10141" },
      { name: "mode", title: "ID用途", type: "enumeration", enumOptions: [{ title: "作为tagId", value: "tag" }, { title: "作为mediaType", value: "type" }] }
    ] },
    { id: "home_oumei", title: "欧美", functionName: "loadList", params: [
      { name: "page", title: "页码", type: "page" },
      { name: "sort", title: "排序", type: "enumeration", enumOptions: [{ title: "默认", value: "0" }, { title: "最新", value: "1" }, { title: "最热", value: "2" }] },
      { name: "tagId", title: "分类ID", type: "constant", value: "159061" },
      { name: "mode", title: "ID用途", type: "enumeration", enumOptions: [{ title: "作为tagId", value: "tag" }, { title: "作为mediaType", value: "type" }] }
    ] },
    { id: "home_chongkou", title: "重口", functionName: "loadList", params: [
      { name: "page", title: "页码", type: "page" },
      { name: "sort", title: "排序", type: "enumeration", enumOptions: [{ title: "默认", value: "0" }, { title: "最新", value: "1" }, { title: "最热", value: "2" }] },
      { name: "tagId", title: "分类ID", type: "constant", value: "696261" },
      { name: "mode", title: "ID用途", type: "enumeration", enumOptions: [{ title: "作为tagId", value: "tag" }, { title: "作为mediaType", value: "type" }] }
    ] },
    { id: "home_jinpian", title: "禁片", functionName: "loadList", params: [
      { name: "page", title: "页码", type: "page" },
      { name: "sort", title: "排序", type: "enumeration", enumOptions: [{ title: "默认", value: "0" }, { title: "最新", value: "1" }, { title: "最热", value: "2" }] },
      { name: "tagId", title: "分类ID", type: "constant", value: "696281" },
      { name: "mode", title: "ID用途", type: "enumeration", enumOptions: [{ title: "作为tagId", value: "tag" }, { title: "作为mediaType", value: "type" }] }
    ] }
  ],
  search: {
    id: "search", title: "搜索", functionName: "search",
    params: [
      { name: "keyword", title: "关键词", type: "input", placeholders: [{ title: "示例", value: "人妻" }] },
      { name: "page", title: "页码", type: "page" }
    ]
  }
};

// ============================================================
// 基础常量
// ============================================================
var API_HOST = "https://d2aesh7mp81d85.cloudfront.net";
var IMG_HOST = "https://qiyouimage.arpuum.cn/";
var SIGN_KEY = "gH3nA7fR9tV1jY6z";
var RESP_KEY = "vEukA&w15z4VAD3kAY#fkL#rBnU!WDhN";
var FALLBACK_DEV = "ea46b8e5-8f40-4042-9fed-97bcd579f49c"; // 已注册设备ID(兜底)
var SID = "7d65f86182364ec185cda0eeaec5fe90";
var UA = "DevType=chrome:Win32;SysType=h5_pc;Ver=2.1.2;BuildID=qysqclient;device_brand=Google Inc.;device_model=chrome;system_name=Web;system_version=152.0.7977.130;sid=" + SID;

// ============================================================
// 纯 JS 密码学 (Rex 环境无 crypto)
// ============================================================

// ---------- SHA-1 (含 HMAC) ----------
var _sha1 = (function () {
  function rotl(x, n) { return (x << n) | (x >>> (32 - n)); }
  function core(blocks, totalLen) {
    var H = [0x67452301, 0xEFCDAB89, 0x98BADCFE, 0x10325476, 0xC3D2E1F0];
    for (var bi = 0; bi < blocks.length; bi += 64) {
      var w = new Array(80);
      for (var i = 0; i < 16; i++) {
        w[i] = (blocks[bi + 4 * i] << 24) | (blocks[bi + 4 * i + 1] << 16) |
               (blocks[bi + 4 * i + 2] << 8) | blocks[bi + 4 * i + 3];
      }
      for (var i2 = 16; i2 < 80; i2++) {
        w[i2] = rotl(w[i2 - 3] ^ w[i2 - 8] ^ w[i2 - 14] ^ w[i2 - 16], 1);
      }
      var a = H[0], b = H[1], c = H[2], d = H[3], e = H[4];
      for (var t = 0; t < 80; t++) {
        var f, k;
        if (t < 20) { f = (b & c) | (~b & d); k = 0x5A827999; }
        else if (t < 40) { f = b ^ c ^ d; k = 0x6ED9EBA1; }
        else if (t < 60) { f = (b & c) | (b & d) | (c & d); k = 0x8F1BBCDC; }
        else { f = b ^ c ^ d; k = 0xCA62C1D6; }
        var tmp = (rotl(a, 5) + f + e + k + w[t]) | 0;
        e = d; d = c; c = rotl(b, 30); b = a; a = tmp;
      }
      H[0] = (H[0] + a) | 0; H[1] = (H[1] + b) | 0; H[2] = (H[2] + c) | 0;
      H[3] = (H[3] + d) | 0; H[4] = (H[4] + e) | 0;
    }
    var out = "";
    for (var j = 0; j < 5; j++) {
      out += String.fromCharCode((H[j] >>> 24) & 255, (H[j] >>> 16) & 255, (H[j] >>> 8) & 255, H[j] & 255);
    }
    return out;
  }
  function pad(msgBytes) {
    var len = msgBytes.length;
    var bitLen = len * 8;
    var padded = msgBytes.slice();
    padded.push(0x80);
    while (padded.length % 64 !== 56) padded.push(0);
    // 64-bit big-endian length (high 32 bits always 0 for our sizes)
    padded.push(0, 0, 0, 0);
    padded.push((bitLen >>> 24) & 255, (bitLen >>> 16) & 255, (bitLen >>> 8) & 255, bitLen & 255);
    return padded;
  }
  function bytesOf(str) {
    // UTF-8 encode
    var out = [];
    var enc = encodeURIComponent(str);
    for (var i = 0; i < enc.length; i++) {
      if (enc[i] === "%") { out.push(parseInt(enc.substr(i + 1, 2), 16)); i += 2; }
      else out.push(enc.charCodeAt(i));
    }
    return out;
  }
  return {
    digestBytes: function (bytes) { return core(pad(bytes), bytes.length); },
    digestStr: function (str) { return core(pad(bytesOf(str))); },
    hmacStr: function (keyStr, msgStr) {
      var key = bytesOf(keyStr);
      if (key.length > 64) { key = core(pad(key)).split("").map(function (c) { return c.charCodeAt(0); }); }
      while (key.length < 64) key.push(0);
      var ipad = [], opad = [];
      for (var i = 0; i < 64; i++) {
        ipad.push(key[i] ^ 0x36);
        opad.push(key[i] ^ 0x5c);
      }
      var inner = core(pad(ipad.concat(bytesOf(msgStr))));
      var innerBytes = inner.split("").map(function (c) { return c.charCodeAt(0); });
      var outer = core(pad(opad.concat(innerBytes)));
      // hex
      var hex = "";
      for (var j = 0; j < outer.length; j++) {
        hex += ("0" + outer.charCodeAt(j).toString(16)).slice(-2);
      }
      return hex;
    }
  };
})();

// ---------- SHA-256 ----------
var _sha256 = (function () {
  var K = [
    0x428a2f98,0x71374491,0xb5c0fbcf,0xe9b5dba5,0x3956c25b,0x59f111f1,0x923f82a4,0xab1c5ed5,
    0xd807aa98,0x12835b01,0x243185be,0x550c7dc3,0x72be5d74,0x80deb1fe,0x9bdc06a7,0xc19bf174,
    0xe49b69c1,0xefbe4786,0x0fc19dc6,0x240ca1cc,0x2de92c6f,0x4a7484aa,0x5cb0a9dc,0x76f988da,
    0x983e5152,0xa831c66d,0xb00327c8,0xbf597fc7,0xc6e00bf3,0xd5a79147,0x06ca6351,0x14292967,
    0x27b70a85,0x2e1b2138,0x4d2c6dfc,0x53380d13,0x650a7354,0x766a0abb,0x81c2c92e,0x92722c85,
    0xa2bfe8a1,0xa81a664b,0xc24b8b70,0xc76c51a3,0xd192e819,0xd6990624,0xf40e3585,0x106aa070,
    0x19a4c116,0x1e376c08,0x2748774c,0x34b0bcb5,0x391c0cb3,0x4ed8aa4a,0x5b9cca4f,0x682e6ff3,
    0x748f82ee,0x78a5636f,0x84c87814,0x8cc70208,0x90befffa,0xa4506ceb,0xbef9a3f7,0xc67178f2
  ];
  function rotr(x, n) { return (x >>> n) | (x << (32 - n)); }
  function core(blocks) {
    var H = [0x6a09e667,0xbb67ae85,0x3c6ef372,0xa54ff53a,0x510e527f,0x9b05688c,0x1f83d9ab,0x5be0cd19];
    for (var bi = 0; bi < blocks.length; bi += 64) {
      var w = new Array(64);
      for (var i = 0; i < 16; i++) {
        w[i] = (blocks[bi+4*i]<<24)|(blocks[bi+4*i+1]<<16)|(blocks[bi+4*i+2]<<8)|blocks[bi+4*i+3];
      }
      for (var i2 = 16; i2 < 64; i2++) {
        var s0 = rotr(w[i2-15],7)^rotr(w[i2-15],18)^(w[i2-15]>>>3);
        var s1 = rotr(w[i2-2],17)^rotr(w[i2-2],19)^(w[i2-2]>>>10);
        w[i2] = (w[i2-16]+s0+w[i2-7]+s1)|0;
      }
      var a=H[0],b=H[1],c=H[2],d=H[3],e=H[4],f=H[5],g=H[6],h=H[7];
      for (var t = 0; t < 64; t++) {
        var S1 = rotr(e,6)^rotr(e,11)^rotr(e,25);
        var ch = (e&f)^(~e&g);
        var t1 = (h+S1+ch+K[t]+w[t])|0;
        var S0 = rotr(a,2)^rotr(a,13)^rotr(a,22);
        var maj = (a&b)^(a&c)^(b&c);
        var t2 = (S0+maj)|0;
        h=g; g=f; f=e; e=(d+t1)|0; d=c; c=b; b=a; a=(t1+t2)|0;
      }
      H[0]=(H[0]+a)|0; H[1]=(H[1]+b)|0; H[2]=(H[2]+c)|0; H[3]=(H[3]+d)|0;
      H[4]=(H[4]+e)|0; H[5]=(H[5]+f)|0; H[6]=(H[6]+g)|0; H[7]=(H[7]+h)|0;
    }
    var out = [];
    for (var j = 0; j < 8; j++) {
      out.push((H[j]>>>24)&255,(H[j]>>>16)&255,(H[j]>>>8)&255,H[j]&255);
    }
    return out;
  }
  function bytesOf(str) {
    var out = [];
    var enc = encodeURIComponent(str);
    for (var i = 0; i < enc.length; i++) {
      if (enc[i] === "%") { out.push(parseInt(enc.substr(i + 1, 2), 16)); i += 2; }
      else out.push(enc.charCodeAt(i));
    }
    return out;
  }
  function pad(msgBytes) {
    var len = msgBytes.length;
    var padded = msgBytes.slice();
    padded.push(0x80);
    while (padded.length % 64 !== 56) padded.push(0);
    var bitLen = len * 8;
    padded.push(0,0,0,0,(bitLen>>>24)&255,(bitLen>>>16)&255,(bitLen>>>8)&255,bitLen&255);
    return padded;
  }
  return {
    digestBytes: function (bytes) { return core(pad(bytes)); },
    digestStr: function (str) { return core(pad(bytesOf(str))); }
  };
})();

// ---------- AES-256-CBC 解密 (紧凑实现) ----------
var _aes = (function () {
  // S-box / InvS-box
  var sbox = new Array(256), inv = new Array(256);
  (function () {
    // 生成 S-box (避免手抄表出错)
    var p = 1, q = 1;
    do {
      p = p ^ ((p << 1) & 255) ^ (p & 0x80 ? 0x1b : 0);
      q ^= q << 1; q ^= q << 2; q ^= q << 4; q &= 255;
      if (q & 0x80) q ^= 0x09;
      var x = q ^ ((q << 1) | (q >>> 7)) ^ ((q << 2) | (q >>> 6)) ^ ((q << 3) | (q >>> 5)) ^ ((q << 4) | (q >>> 4));
      x &= 255;
      sbox[p] = (x ^ 0x63) & 255;
    } while (p !== 1);
    sbox[0] = 0x63;
    for (var i = 0; i < 256; i++) inv[sbox[i]] = i;
  })();
  // GF(2^8) 乘法
  function xtime(a) { return ((a << 1) ^ ((a & 0x80) ? 0x1b : 0)) & 255; }
  function mul(a, b) {
    var r = 0;
    while (b) {
      if (b & 1) r ^= a;
      a = xtime(a);
      b >>= 1;
    }
    return r & 255;
  }
  // AES-256 key expansion (14 rounds, 60 words)
  function expandKey(keyBytes) {
    var Nk = 8, Nr = 14, Nb = 4;
    var w = new Array(4 * (Nr + 1) * 4); // flat bytes per word
    var W = []; // words as [b0,b1,b2,b3]
    for (var i = 0; i < Nk; i++) {
      W.push([keyBytes[4*i], keyBytes[4*i+1], keyBytes[4*i+2], keyBytes[4*i+3]]);
    }
    var rcon = 1;
    for (var i2 = Nk; i2 < 4*(Nr+1); i2++) {
      var t = W[i2-1].slice();
      if (i2 % Nk === 0) {
        // RotWord + SubWord + Rcon
        t = [sbox[t[1]], sbox[t[2]], sbox[t[3]], sbox[t[0]]];
        t[0] ^= rcon;
        rcon = xtime(rcon);
      } else if (i2 % Nk === 4) {
        t = [sbox[t[0]], sbox[t[1]], sbox[t[2]], sbox[t[3]]];
      }
      var prev = W[i2-Nk];
      W.push([(prev[0]^t[0])&255,(prev[1]^t[1])&255,(prev[2]^t[2])&255,(prev[3]^t[3])&255]);
    }
    return W;
  }
  function decryptBlock(cipher16, W) {
    var Nr = 14;
    // state: 4x4 column-major
    var s = [[],[],[],[]];
    for (var c = 0; c < 4; c++) for (var r = 0; r < 4; r++) s[r][c] = cipher16[c*4+r];
    function addRoundKey(rnd) {
      for (var c2 = 0; c2 < 4; c2++) {
        var w = W[rnd*4+c2];
        for (var r2 = 0; r2 < 4; r2++) s[r2][c2] ^= w[r2];
      }
    }
    function invShiftRows() {
      for (var r3 = 1; r3 < 4; r3++) {
        var row = [s[r3][0], s[r3][1], s[r3][2], s[r3][3]];
        for (var c3 = 0; c3 < 4; c3++) s[r3][(c3 + r3) % 4] = row[c3];
      }
    }
    function invMixColumns() {
      for (var c4 = 0; c4 < 4; c4++) {
        var a0=s[0][c4],a1=s[1][c4],a2=s[2][c4],a3=s[3][c4];
        s[0][c4] = mul(a0,14)^mul(a1,11)^mul(a2,13)^mul(a3,9);
        s[1][c4] = mul(a0,9)^mul(a1,14)^mul(a2,11)^mul(a3,13);
        s[2][c4] = mul(a0,13)^mul(a1,9)^mul(a2,14)^mul(a3,11);
        s[3][c4] = mul(a0,11)^mul(a1,13)^mul(a2,9)^mul(a3,14);
      }
    }
    addRoundKey(Nr);
    for (var rnd = Nr-1; rnd >= 1; rnd--) {
      invShiftRows();
      for (var c5 = 0; c5 < 4; c5++) for (var r5 = 0; r5 < 4; r5++) s[r5][c5] = inv[s[r5][c5]];
      addRoundKey(rnd);
      invMixColumns();
    }
    invShiftRows();
    for (var c6 = 0; c6 < 4; c6++) for (var r6 = 0; r6 < 4; r6++) s[r6][c6] = inv[s[r6][c6]];
    addRoundKey(0);
    var out = [];
    for (var c7 = 0; c7 < 4; c7++) for (var r7 = 0; r7 < 4; r7++) out.push(s[r7][c7]);
    return out;
  }
  function cbcDecrypt(keyBytes, ivBytes, dataBytes) {
    var W = expandKey(keyBytes);
    var out = [];
    var prev = ivBytes.slice();
    for (var i = 0; i + 16 <= dataBytes.length; i += 16) {
      var block = dataBytes.slice(i, i + 16);
      var dec = decryptBlock(block, W);
      for (var j = 0; j < 16; j++) out.push(dec[j] ^ prev[j]);
      prev = block;
    }
    // PKCS7 去填充
    if (out.length) {
      var padLen = out[out.length - 1];
      if (padLen >= 1 && padLen <= 16 && padLen <= out.length) {
        var ok = true;
        for (var p = out.length - padLen; p < out.length; p++) {
          if (out[p] !== padLen) { ok = false; break; }
        }
        if (ok) out.length -= padLen;
      }
    }
    return out;
  }
  return { cbcDecrypt: cbcDecrypt };
})();

// ---------- base64 ----------
function b64ToBytes(b64) {
  var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  var clean = b64.replace(/[^A-Za-z0-9+\/=]/g, "");
  var out = [], bits = 0, acc = 0;
  for (var i = 0; i < clean.length; i++) {
    var c = clean[i];
    if (c === "=") break;
    acc = (acc << 6) | chars.indexOf(c);
    bits += 6;
    if (bits >= 8) {
      bits -= 8;
      out.push((acc >> bits) & 255);
    }
  }
  return out;
}
function bytesToUtf8(bytes) {
  var out = "", i = 0;
  while (i < bytes.length) {
    var b = bytes[i];
    if (b < 0x80) { out += String.fromCharCode(b); i++; }
    else if (b < 0xE0) {
      out += String.fromCharCode(((b & 0x1f) << 6) | (bytes[i+1] & 0x3f)); i += 2;
    } else if (b < 0xF0) {
      out += String.fromCharCode(((b & 0x0f) << 12) | ((bytes[i+1] & 0x3f) << 6) | (bytes[i+2] & 0x3f)); i += 3;
    } else {
      var cp = ((b & 0x07) << 18) | ((bytes[i+1] & 0x3f) << 12) | ((bytes[i+2] & 0x3f) << 6) | (bytes[i+3] & 0x3f);
      cp -= 0x10000;
      out += String.fromCharCode(0xd800 + (cp >> 10), 0xdc00 + (cp & 0x3ff));
      i += 4;
    }
  }
  return out;
}

// ---------- cZy 响应解密 (与站点一致: salt12 + SHA256派生) ----------
function decryptData(dataB64) {
  var s = b64ToBytes(dataB64);
  var salt = s.slice(0, 12);
  var kb = [];
  var enc = encodeURIComponent(RESP_KEY);
  for (var i = 0; i < enc.length; i++) {
    if (enc[i] === "%") { kb.push(parseInt(enc.substr(i+1,2),16)); i += 2; }
    else kb.push(enc.charCodeAt(i));
  }
  var p = kb.concat(salt);
  var o = p.length >> 1;
  var full = _sha256.digestBytes(p);
  var n = full.slice(8, 24);
  var l = _sha256.digestBytes(n.concat(p.slice(0, o)));
  var k = _sha256.digestBytes(p.slice(o).concat(n));
  var key = l.slice(0,8).concat(k.slice(8,24), l.slice(24));      // 32B
  var iv  = k.slice(0,4).concat(l.slice(12,20), k.slice(28));     // 16B
  var plain = _aes.cbcDecrypt(key, iv, s.slice(12));
  return bytesToUtf8(plain);
}

// ---------- UUID ----------
function uuid() {
  var h = "0123456789abcdef";
  var s = "";
  for (var i = 0; i < 36; i++) {
    if (i === 8 || i === 13 || i === 18 || i === 23) s += "-";
    else if (i === 14) s += "4";
    else if (i === 19) s += h[(8 + (Math.random() * 4) | 0)];
    else s += h[(Math.random() * 16) | 0];
  }
  return s;
}

// ============================================================
// 会话与请求层
// ============================================================
function makeApiKey(path, cred) {
  var ts = String(Math.floor(Date.now() / 1000));
  var nonce = uuid();
  var sign = _sha1.hmacStr(SIGN_KEY, (cred || "") + "&" + path + "&" + UA + "&" + ts + "&" + nonce);
  return "timestamp=" + ts + ";sign=" + sign + ";nonce=" + nonce;
}

function baseHeaders(cred) {
  var h = { "Accept": "application/json", "X-User-Agent": UA };
  if (cred) h["Authorization"] = cred;
  return h;
}

function unwrap(j) {
  if (j && j.hash === true && typeof j.data === "string") {
    try { j.data = JSON.parse(decryptData(j.data)); }
    catch (e) { console.log("解密失败", e && e.message); }
  }
  return j;
}

// guest 登录, 带重试(服务端对新设备可能延迟返回数据)
async function guestLogin(devID) {
  for (var attempt = 0; attempt < 3; attempt++) {
    try {
      var r = await Widget.http.post(API_HOST + "/api/app/login/guest",
        JSON.stringify({ devID: devID, affCode: "{}" }),
        { headers: Object.assign(baseHeaders(null), {
            "Content-Type": "application/json;charset=UTF-8",
            "x-api-key": makeApiKey("/api/app/login/guest", "")
          }) });
      var j = unwrap(r.data);
      console.log("guest登录", attempt, "code=", j && j.code);
      if (j && j.code === 200 && j.data && j.data.token) return j.data;
    } catch (e) {
      console.log("guest登录异常", e && e.message);
    }
  }
  return null;
}

function jwtExp(token) {
  try {
    var mid = token.split(".")[1];
    var payload = JSON.parse(bytesToUtf8(b64ToBytes(mid.replace(/-/g,"+").replace(/_/g,"/"))));
    return (payload.exp ? payload.exp * 1000 : Date.now() + 86400000) - 600000;
  } catch (e) { return Date.now() + 86400000; }
}

// 账号登录(升级会话): 需已有游客会话。
// body 字段名 web 端未使用(app专用端点), 依次尝试候选字段名; 成功后缓存字段名。
var ACC_FIELDS = [
  ["userName", "password"], ["account", "password"], ["userAccount", "password"],
  ["phone", "password"], ["mobile", "password"], ["name", "password"]
];
async function accountLogin(guestCred, user, pwd) {
  var cached = Widget.storage.get("qysq_accfield");
  var pairs = (cached && cached[0]) ? [cached].concat(ACC_FIELDS.filter(function (f) {
    return f[0] !== cached[0];
  })) : ACC_FIELDS;
  for (var i = 0; i < pairs.length; i++) {
    var body = {};
    body[pairs[i][0]] = user;
    body[pairs[i][1]] = pwd;
    var j = await _rawCall("/api/app/login/account/login", body, guestCred, "POST");
    var code = j && j.code;
    console.log("账号登录尝试", pairs[i][0], "code=", code, (j && (j.msg || j.tip)) || "");
    if (code === 200 && j.data && (j.data.token || (j.data.user && j.data.user.token))) {
      Widget.storage.set("qysq_accfield", pairs[i]);
      return j.data.token || j.data.user.token;
    }
    if (code === 1000) {
      // 会话层拒绝(服务端故障), 换字段名无意义
      console.log("账号登录被会话层拒绝(code=1000), 停止尝试");
      return null;
    }
    if (code === 1001) continue;  // 参数错误 → 字段名不对, 尝试下一个
    if (code !== 200) {
      // 其他业务反馈(如密码错误) → 字段名已正确, 停止
      console.log("账号登录业务反馈, 停止尝试");
      return null;
    }
  }
  return null;
}

// 同步用户输入的账号配置(loadList/search 等能拿到 params 的入口调用)
async function syncAccount(params) {
  var u = params && params.userName ? String(params.userName).trim() : "";
  var p = params && params.password ? String(params.password) : "";
  var cur = Widget.storage.get("qysq_account") || null;
  if (u && p) {
    if (!cur || cur.u !== u || cur.p !== p) {
      Widget.storage.set("qysq_account", { u: u, p: p });
      Widget.storage.remove("qysq_auth");
      console.log("账号配置已更新:", u);
    }
  } else if (cur && (!u || !p)) {
    Widget.storage.remove("qysq_account");
    Widget.storage.remove("qysq_auth");
    console.log("账号配置已清空, 回退游客模式");
  }
}

// 会话获取: 先游客登录, 若配置了账号则升级为账号会话
// force=true 时丢弃缓存强制重登(模拟 app 的 1000→re-login→retry 行为)
async function ensureSession(force) {
  var saved = Widget.storage.get("qysq_auth") || {};
  var acc = Widget.storage.get("qysq_account") || null;
  var key = acc ? acc.u + ":" + acc.p : "guest";
  if (!force && saved.cred && saved.exp && Date.now() < saved.exp && saved.key === key) return saved;
  var devID = saved.devID || FALLBACK_DEV;
  var guest = await guestLogin(devID);
  if (!guest || !guest.token) {
    throw new Error("guest 登录失败(服务端未返回token, 站点可能临时异常)");
  }
  var auth = {
    devID: devID,
    token: guest.token,
    cred: "cred0:" + guest.token,
    exp: jwtExp(guest.token),
    key: "guest",
    acc: false
  };
  // 账号升级
  if (acc) {
    var atk = await accountLogin(auth.cred, acc.u, acc.p);
    if (atk) {
      auth.token = atk;
      auth.cred = "cred0:" + atk;
      auth.exp = jwtExp(atk);
      auth.key = key;
      auth.acc = true;
      console.log("账号会话建立成功:", acc.u);
    } else {
      console.log("账号登录未成功, 继续使用游客会话");
    }
  }
  Widget.storage.set("qysq_auth", auth);
  return auth;
}

// 带会话请求: 1000 时自动重新登录并重试一次(与 app 客户端行为一致)
async function apiCall(path, body, cred, method) {
  method = method || (body ? "POST" : "GET");
  var j = await _rawCall(path, body, cred, method);
  if (j && j.code === 1000 && cred) {
    console.log("收到1000, 重新登录后重试:", path);
    try { await ensureSession(true); } catch (e) { /* 重新登录失败则返回原响应 */ }
    var fresh = Widget.storage.get("qysq_auth") || {};
    if (fresh.cred && fresh.cred !== cred) {
      j = await _rawCall(path, body, fresh.cred, method);
    }
  }
  return j;
}

async function _rawCall(path, body, cred, method) {
  var headers = baseHeaders(cred);
  headers["x-api-key"] = makeApiKey(path, cred || "");
  if (body) headers["Content-Type"] = "application/json;charset=UTF-8";
  var opts = { headers: headers };
  if (body) opts.body = JSON.stringify(body);
  var r;
  if (method === "POST") {
    r = await Widget.http.post(API_HOST + path, opts.body, opts);
  } else {
    r = await Widget.http.get(API_HOST + path, opts);
  }
  var j = unwrap(r.data);
  if (j && j.code !== 200) {
    console.log("API", path, "code=", j.code, "tip=", j.tip || j.msg);
  }
  return j;
}

function imgUrl(path) {
  if (!path) return "";
  if (/^https?:\/\//.test(path)) return path;
  return IMG_HOST + String(path).replace(/^\//, "");
}

// ============================================================
// 条目映射 (防御式: 字段多候选)
// ============================================================
function pick(o, keys) {
  for (var i = 0; i < keys.length; i++) {
    var v = o[keys[i]];
    if (v !== undefined && v !== null && v !== "") return v;
  }
  return null;
}

function toVideoItem(v) {
  if (!v) return null;
  var id = pick(v, ["id", "videoId", "videoID"]);
  if (id === null) return null;
  var cover = pick(v, ["cover", "coverUrl", "poster", "posterUrl", "previewUrl", "thumbnail"]);
  var title = pick(v, ["title", "name"]);
  return {
    id: "qysq:v:" + id,
    type: "url",
    link: "qysq:v:" + id,
    title: title || ("视频" + id),
    coverUrl: imgUrl(cover),
    posterPath: imgUrl(cover),
    coverRatio: 0.7,
    description: pick(v, ["description", "intro", "desc"]) || "",
    releaseDate: pick(v, ["createdAt", "publishTime", "created_at"]) || "",
    rating: Number(pick(v, ["score", "rating", "likeRate"]) || 0) || undefined,
    durationText: pick(v, ["durationText", "durationStr"]) || "",
    subtitle: pick(v, ["playCountText", "watchText"]) || ""
  };
}

function toPostItem(p) {
  if (!p) return null;
  var id = pick(p, ["id", "postId"]);
  if (id === null) return null;
  var cover = pick(p, ["cover", "coverUrl", "thumbnail", "preview"]);
  var imgs = p.images || p.pictures || [];
  if (!cover && Array.isArray(imgs) && imgs.length && typeof imgs[0] === "object") {
    cover = imgs[0].mediaUrl || imgs[0].url || "";
  }
  return {
    id: "qysq:p:" + id,
    type: "url",
    link: "qysq:p:" + id,
    title: (pick(p, ["title"]) || pick(p, ["content", "text"]) || "").slice(0, 40) || ("帖子" + id),
    coverUrl: imgUrl(cover),
    posterPath: imgUrl(cover),
    coverRatio: 0.7,
    description: (pick(p, ["content", "text"]) || "").slice(0, 120)
  };
}

// ============================================================
// 入口实现
// ============================================================

// 视频分类列表
async function loadList(params) {
  await syncAccount(params);
  var auth = await ensureSession();
  var page = Number(params.page) || 1;
  var tagId = Number(params.tagId) || 0;
  var sort = Number(params.sort) || 0;
  var body = {
    mediaType: params.mode === "type" ? tagId : 0,
    sort: sort,
    tagId: params.mode === "tag" ? tagId : 0,
    payType: 0,
    mediaTime: 0,
    pageNum: page,
    pageSize: 20
  };
  var j = await apiCall("/api/app/media/video/list", body, auth.cred);
  if (!j || j.code !== 200) {
    throw new Error("站点接口异常 code=" + ((j && j.code) || "?") + " (服务端临时故障/风控, 稍后重试)");
  }
  var data = (j && j.data) || {};
  var list = data.list || data.videos || data.records || [];
  return list.map(toVideoItem).filter(Boolean);
}

// 写真列表(暂未启用入口: 站点专注视频, 恢复时把入口加回 WidgetMetadata.modules)
async function loadPhoto(params) {
  var auth = await ensureSession();
  var page = Number(params.page) || 1;
  var body = {
    categoryId: Number(params.categoryId) || 0,
    sort: 0,
    pageNum: page,
    pageSize: 20
  };
  var j = await apiCall("/api/app/photo/list", body, auth.cred);
  var data = (j && j.data) || {};
  var list = data.list || data.records || [];
  return list.map(function (p) {
    var it = toPostItem(p);
    return it;
  }).filter(Boolean);
}

// 社区帖子列表(暂未启用入口: 同上)
async function loadCommunity(params) {
  var auth = await ensureSession();
  var page = Number(params.page) || 1;
  var body = {
    categoryId: Number(params.categoryId) || 0,
    discussId: 0,
    sort: 0,
    pageNum: page,
    pageSize: 20
  };
  var j = await apiCall("/api/app/post/list", body, auth.cred);
  var data = (j && j.data) || {};
  var list = data.list || data.records || [];
  return list.map(toPostItem).filter(Boolean);
}

// 搜索
async function search(params) {
  await syncAccount(params);
  var auth = await ensureSession();
  var page = Number(params.page) || 1;
  var body = {
    content: params.keyword || "",
    mediaType: 0,
    sort: 0,
    pageNum: page,
    pageSize: 20
  };
  var j = await apiCall("/api/app/search/details", body, auth.cred);
  if (!j || j.code !== 200) {
    throw new Error("搜索接口异常 code=" + ((j && j.code) || "?") + " (服务端临时故障/风控, 稍后重试)");
  }
  var data = (j && j.data) || {};
  var list = data.list || data.videos || data.records || [];
  return list.map(function (v) {
    var it = toVideoItem(v) || toPostItem(v);
    return it;
  }).filter(Boolean);
}

// 详情: link = qysq:v:<id> | qysq:p:<id>
async function loadDetail(link) {
  var m = /^qysq:v:(\d+)$/.exec(String(link));
  if (!m) throw new Error("无法识别的详情链接: " + link);
  var auth = await ensureSession();
  var id = m[1];
  var j = await apiCall("/api/app/media/play", { id: Number(id), isCollet: 0 }, auth.cred);
  var info = (j && j.data && (j.data.mediaInfo || j.data)) || {};
  var cover = pick(info, ["cover", "coverUrl", "poster", "posterUrl"]);
  return {
    id: "qysq:v:" + id,
    type: "url",
    link: link,
    title: pick(info, ["title", "name"]) || ("视频" + id),
    posterPath: imgUrl(cover),
    backdropPaths: [],
    description: pick(info, ["description", "intro", "desc"]) || "",
    releaseDate: pick(info, ["createdAt", "publishTime"]) || "",
    durationText: pick(info, ["durationText", "durationStr"]) || "",
    episodeItems: [{
      id: "qysq:v:" + id,
      type: "url",
      title: pick(info, ["title", "name"]) || "正片",
      episode: 1,
      videoUrl: ""
    }]
  };
}

// 资源: 返回带签名的 m3u8 线路
async function loadResource(params) {
  var m = /^qysq:v:(\d+)$/.exec(String(params.id || params.link || ""));
  if (!m) throw new Error("无法识别的资源: " + (params.id || params.link));
  var auth = await ensureSession();
  var id = m[1];
  var j = await apiCall("/api/app/media/play", { id: Number(id), isCollet: 0 }, auth.cred);
  var info = (j && j.data && (j.data.mediaInfo || j.data)) || {};
  var videoUrl = pick(info, ["videoUrl", "playUrl", "url"]);
  if (!videoUrl) throw new Error("未获取到播放地址(code=" + (j && j.code) + ")");
  // 相对 videoUrl → 站点 m3u8 签名协议
  var path = "/api/app/media/h5/m3u8/" + videoUrl;
  var ts = String(Math.floor(Date.now() / 1000));
  var nonce = uuid();
  var sign = _sha1.hmacStr(SIGN_KEY, auth.cred + "&" + path + "&&" + ts + "&" + nonce);
  var playUrl = API_HOST + path + "?token=" + encodeURIComponent(auth.cred) +
    "&timestamp=" + ts + "&sign=" + sign + "&nonce=" + nonce;
  return [{
    name: "妻友线路",
    url: playUrl,
    description: pick(info, ["title", "name"]) || "",
    playerType: "",
    customHeaders: { "X-User-Agent": UA }
  }];
}
