/**
 * 海角爱 · Rex 本机版 v1.0.0
 * 列表/搜索/详情直连站点；播放全程本机完成：播放页 datas 本机解密 →
 * sora 分片地址本机铸造（纯 JS 令牌）→ fMP4 内存清单下发，播放器直拉分片。
 * 无需任何中转/Worker，无设置项。
 */





var HOST = "https://www.haijiaolove.xyz";
var PLAYER = "https://player.abyssplayer.com";
var UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36";
var PART = 5242880; // 播放器分片尺寸（铸造路径与令牌须与此一致）
var ENC_HEAD = 65536; // 旧 .fd 形态的头部加密长度

var CATS = [
  { id: "zjgx", name: "最近更新" },
  { id: "hjmz", name: "海角母子" },
  { id: "hjjd", name: "海角姐弟" },
  { id: "hjfn", name: "海角父女" },
  { id: "hjsz", name: "海角嫂子" },
  { id: "hjwf", name: "海角人妻" },
  { id: "origin", name: "海角原创" },
  { id: "hjsets", name: "海角合集" },
  { id: "hjhj", name: "合集大全" },
  { id: "hjrq", name: "热剧推荐" },
  { id: "hjyc", name: "原创精选" }
];
var WP_CAT = { hjhj: 357, hjrq: 355, hjyc: 323 };
var CAT_IDS = {};
for (var ci = 0; ci < CATS.length; ci++) CAT_IDS[CATS[ci].id] = 1;

WidgetMetadata = {
  id: "forward.haijiao",
  title: "海角爱",
  version: "1.0.0",
  requiredVersion: "0.0.1",
  description: "海角爱资源站（本机解析版，无需代理）",
  author: "老头",
  site: HOST,
  iconUrl: HOST + "/wp-content/uploads/2024/10/cropped-googlelogo.png",
  detailCacheDuration: 300,
  modules: [
    { id: "loadCat_zjgx", title: "最近更新", type: "video", functionName: "loadCat_zjgx", cacheDuration: 120, params: [{ name: "page", title: "页码", type: "page" }] },
    { id: "loadCat_hjmz", title: "海角母子", type: "video", functionName: "loadCat_hjmz", cacheDuration: 120, params: [{ name: "page", title: "页码", type: "page" }] },
    { id: "loadCat_hjjd", title: "海角姐弟", type: "video", functionName: "loadCat_hjjd", cacheDuration: 120, params: [{ name: "page", title: "页码", type: "page" }] },
    { id: "loadCat_hjfn", title: "海角父女", type: "video", functionName: "loadCat_hjfn", cacheDuration: 120, params: [{ name: "page", title: "页码", type: "page" }] },
    { id: "loadCat_hjsz", title: "海角嫂子", type: "video", functionName: "loadCat_hjsz", cacheDuration: 120, params: [{ name: "page", title: "页码", type: "page" }] },
    { id: "loadCat_hjwf", title: "海角人妻", type: "video", functionName: "loadCat_hjwf", cacheDuration: 120, params: [{ name: "page", title: "页码", type: "page" }] },
    { id: "loadCat_origin", title: "海角原创", type: "video", functionName: "loadCat_origin", cacheDuration: 120, params: [{ name: "page", title: "页码", type: "page" }] },
    { id: "loadCat_hjsets", title: "海角合集", type: "video", functionName: "loadCat_hjsets", cacheDuration: 120, params: [{ name: "page", title: "页码", type: "page" }] },
    { id: "loadCat_hjhj", title: "合集大全", type: "video", functionName: "loadCat_hjhj", cacheDuration: 120, params: [{ name: "page", title: "页码", type: "page" }] },
    { id: "loadCat_hjrq", title: "热剧推荐", type: "video", functionName: "loadCat_hjrq", cacheDuration: 120, params: [{ name: "page", title: "页码", type: "page" }] },
    { id: "loadCat_hjyc", title: "原创精选", type: "video", functionName: "loadCat_hjyc", cacheDuration: 120, params: [{ name: "page", title: "页码", type: "page" }] },
    { id: "loadDetail", title: "加载详情", type: "detail", functionName: "loadDetail", params: [] },
    { id: "loadResource", title: "加载资源", type: "stream", functionName: "loadResource", params: [] }
  ],
  search: {
    title: "搜索",
    functionName: "search",
    params: [
      { name: "keyword", title: "关键词", type: "input" },
      { name: "page", title: "页码", type: "page" }
    ]
  }
};


/* Pure-JS MD5 + AES encrypt-block + AES-CTR (no WebCrypto / TextEncoder dependency, JSC-safe). */

// ---------- MD5 (public-domain style implementation) ----------
function md5hex(str) {
  const S = [7,12,17,22,7,12,17,22,7,12,17,22,7,12,17,22,5,9,14,20,5,9,14,20,5,9,14,20,5,9,14,20,4,11,16,23,4,11,16,23,4,11,16,23,4,11,16,23,6,10,15,21,6,10,15,21,6,10,15,21,6,10,15,21];
  const K = new Uint32Array(64);
  for (let i = 0; i < 64; i++) K[i] = Math.floor(Math.abs(Math.sin(i + 1)) * 4294967296);
  // UTF-8 encode
  const bytes = [];
  for (let i = 0; i < str.length; i++) {
    let c = str.charCodeAt(i);
    if (c < 0x80) bytes.push(c);
    else if (c < 0x800) { bytes.push(0xc0 | (c >> 6), 0x80 | (c & 63)); }
    else if (c >= 0xd800 && c <= 0xdbff && i + 1 < str.length) {
      const c2 = str.charCodeAt(++i); const cp = 0x10000 + ((c & 0x3ff) << 10) + (c2 & 0x3ff);
      bytes.push(0xf0 | (cp >> 18), 0x80 | ((cp >> 12) & 63), 0x80 | ((cp >> 6) & 63), 0x80 | (cp & 63));
    } else bytes.push(0xe0 | (c >> 12), 0x80 | ((c >> 6) & 63), 0x80 | (c & 63));
  }
  const len = bytes.length;
  const withPad = new Uint8Array((((len + 8) >> 6) + 1) << 6);
  withPad.set(bytes); withPad[len] = 0x80;
  const dv = new DataView(withPad.buffer);
  dv.setUint32(withPad.length - 8, (len * 8) >>> 0, true);
  dv.setUint32(withPad.length - 4, Math.floor(len / 536870912), true);
  let a0 = 0x67452301, b0 = 0xefcdab89, c0 = 0x98badcfe, d0 = 0x10325476;
  const M = new Uint32Array(16);
  for (let off = 0; off < withPad.length; off += 64) {
    for (let i = 0; i < 16; i++) M[i] = dv.getUint32(off + i * 4, true);
    let A = a0, B = b0, C = c0, D = d0;
    for (let i = 0; i < 64; i++) {
      let F, g;
      if (i < 16) { F = (B & C) | (~B & D); g = i; }
      else if (i < 32) { F = (D & B) | (~D & C); g = (5 * i + 1) % 16; }
      else if (i < 48) { F = B ^ C ^ D; g = (3 * i + 5) % 16; }
      else { F = C ^ (B | ~D); g = (7 * i) % 16; }
      const tmp = D; D = C; C = B;
      const sum = (A + F + K[i] + M[g]) >>> 0;
      B = (B + (((sum << S[i]) | (sum >>> (32 - S[i]))) >>> 0)) >>> 0;
      A = tmp;
    }
    a0 = (a0 + A) >>> 0; b0 = (b0 + B) >>> 0; c0 = (c0 + C) >>> 0; d0 = (d0 + D) >>> 0;
  }
  const out = new Uint8Array(16); const odv = new DataView(out.buffer);
  odv.setUint32(0, a0, true); odv.setUint32(4, b0, true); odv.setUint32(8, c0, true); odv.setUint32(12, d0, true);
  let hex = "";
  for (let i = 0; i < 16; i++) hex += out[i].toString(16).padStart(2, "0");
  return hex;
}
// ---------- AES (encrypt-only block, 128/192/256-bit keys) ----------
const AES_SBOX = (() => {
  const s = new Uint8Array(256);
  let p = 1, q = 1;
  do {
    p = p ^ ((p << 1) & 0xff) ^ (p & 0x80 ? 0x1b : 0);
    q ^= (q << 1) & 0xff; q ^= (q << 2) & 0xff; q ^= (q << 4) & 0xff;
    q ^= q & 0x80 ? 0x09 : 0;
    const x = (q & 0xff);
    s[p] = (x ^ ((x << 1) | (x >> 7)) ^ ((x << 2) | (x >> 6)) ^ ((x << 3) | (x >> 5)) ^ ((x << 4) | (x >> 4)) ^ 0x63) & 0xff;
  } while (p !== 1);
  s[0] = 0x63;
  return s;
})();
const AES_RCON = [0x01,0x02,0x04,0x08,0x10,0x20,0x40,0x80,0x1b,0x36,0x6c,0xd8,0xab,0x4d];
function aesExpandKey(key) {
  const Nk = key.length / 4, Nr = Nk + 6;
  const w = new Uint8Array(16 * (Nr + 1));
  w.set(key);
  const tmp = new Uint8Array(4);
  for (let i = Nk; i < 4 * (Nr + 1); i++) {
    tmp.set(w.subarray((i - 1) * 4, i * 4));
    if (i % Nk === 0) {
      const t = tmp[0];
      tmp[0] = AES_SBOX[tmp[1]] ^ AES_RCON[i / Nk - 1];
      tmp[1] = AES_SBOX[tmp[2]];
      tmp[2] = AES_SBOX[tmp[3]];
      tmp[3] = AES_SBOX[t];
    } else if (Nk > 6 && i % Nk === 4) {
      for (let j = 0; j < 4; j++) tmp[j] = AES_SBOX[tmp[j]];
    }
    for (let j = 0; j < 4; j++) w[i * 4 + j] = w[(i - Nk) * 4 + j] ^ tmp[j];
  }
  return { roundKeys: w, rounds: Nr };
}
function aesEncryptBlock(exp, block16) {
  const s = new Uint8Array(block16);
  const rk = exp.roundKeys, Nr = exp.rounds;
  const addRk = (r) => { for (let i = 0; i < 16; i++) s[i] ^= rk[r * 16 + i]; };
  const xt = (a) => ((a << 1) ^ (a & 0x80 ? 0x1b : 0)) & 0xff;
  addRk(0);
  for (let r = 1; r <= Nr; r++) {
    for (let i = 0; i < 16; i++) s[i] = AES_SBOX[s[i]];
    // ShiftRows (state is column-major: s[4*col+row])
    let t;
    t = s[1]; s[1] = s[5]; s[5] = s[9]; s[9] = s[13]; s[13] = t;
    t = s[2]; s[2] = s[10]; s[10] = t; t = s[6]; s[6] = s[14]; s[14] = t;
    t = s[15]; s[15] = s[11]; s[11] = s[7]; s[7] = s[3]; s[3] = t;
    if (r < Nr) {
      for (let c = 0; c < 4; c++) {
        const i = c * 4, a0 = s[i], a1 = s[i + 1], a2 = s[i + 2], a3 = s[i + 3];
        const x0 = xt(a0), x1 = xt(a1), x2 = xt(a2), x3 = xt(a3);
        s[i]     = x0 ^ (x1 ^ a1) ^ a2 ^ a3;
        s[i + 1] = a0 ^ x1 ^ (x2 ^ a2) ^ a3;
        s[i + 2] = a0 ^ a1 ^ x2 ^ (x3 ^ a3);
        s[i + 3] = (x0 ^ a0) ^ a1 ^ a2 ^ x3;
      }
    }
    addRk(r);
  }
  return s;
}
// AES-CTR over `data`, counter starts at `counter16` (full 128-bit increment), data begins at absolute stream offset `streamOffset`.
function aesCtrCrypt(keyBytes, counter16, data, streamOffset) {
  const exp = aesExpandKey(keyBytes);
  const out = new Uint8Array(data.length);
  const counter = new Uint8Array(counter16);
  let blockIdx = Math.floor(streamOffset / 16);
  // advance counter by blockIdx (128-bit big-endian increment)
  let carry = blockIdx;
  for (let i = 15; i >= 0 && carry > 0; i--) {
    const v = counter[i] + (carry & 0xff);
    counter[i] = v & 0xff;
    carry = (carry >> 8) + (v >> 8);
  }
  let skip = streamOffset % 16;
  let pos = 0;
  while (pos < data.length) {
    const ks = aesEncryptBlock(exp, counter);
    const n = Math.min(16 - skip, data.length - pos);
    for (let j = 0; j < n; j++) out[pos + j] = data[pos + j] ^ ks[skip + j];
    pos += n; skip = 0;
    for (let i = 15; i >= 0; i--) { counter[i] = (counter[i] + 1) & 0xff; if (counter[i] !== 0) break; }
  }
  return out;
}
// keyOf per worker: key = ASCII bytes of md5hex(k); counter = key[0:16]
function siteKey(k) {
  const hex = md5hex(k);
  const key = new Uint8Array(32);
  for (let i = 0; i < 32; i++) key[i] = hex.charCodeAt(i);
  return key;
}
function siteDecrypt(k, data, streamOffset) {
  const key = siteKey(k);
  return aesCtrCrypt(key, key.subarray(0, 16), data, streamOffset || 0);
}
// ---------- base64 / utf8 ----------
const B64REV = (() => { const t = new Int16Array(256).fill(-1); const abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"; for (let i = 0; i < 64; i++) t[abc.charCodeAt(i)] = i; return t; })();
function b64ToBytes(b64) {
  const clean = String(b64).replace(/[\s=]+/g, "");
  const out = new Uint8Array(Math.floor(clean.length * 3 / 4) + 3);
  let acc = 0, bits = 0, n = 0;
  for (let i = 0; i < clean.length; i++) {
    const v = B64REV[clean.charCodeAt(i) & 0xff];
    if (v < 0) continue;
    acc = (acc << 6) | v; bits += 6;
    if (bits >= 8) { bits -= 8; out[n++] = (acc >> bits) & 0xff; }
  }
  return out.subarray(0, n);
}
function bytesToB64(bytes) {
  const abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  let out = "";
  for (let i = 0; i < bytes.length; i += 3) {
    const a = bytes[i], b = bytes[i + 1], c = bytes[i + 2];
    const n = (a << 16) | ((b || 0) << 8) | (c || 0);
    out += abc[(n >> 18) & 63] + abc[(n >> 12) & 63] + (i + 1 < bytes.length ? abc[(n >> 6) & 63] : "=") + (i + 2 < bytes.length ? abc[n & 63] : "=");
  }
  return out;
}
function utf8Decode(bytes) {
  let out = "";
  let i = 0;
  while (i < bytes.length) {
    const b = bytes[i];
    if (b < 0x80) { out += String.fromCharCode(b); i++; }
    else if (b >= 0xc2 && b < 0xe0) { out += String.fromCharCode(((b & 0x1f) << 6) | (bytes[i + 1] & 0x3f)); i += 2; }
    else if (b >= 0xe0 && b < 0xf0) { out += String.fromCharCode(((b & 0x0f) << 12) | ((bytes[i + 1] & 0x3f) << 6) | (bytes[i + 2] & 0x3f)); i += 3; }
    else if (b >= 0xf0 && b < 0xf8) {
      const cp = ((b & 0x07) << 18) | ((bytes[i + 1] & 0x3f) << 12) | ((bytes[i + 2] & 0x3f) << 6) | (bytes[i + 3] & 0x3f);
      const c = cp - 0x10000;
      out += String.fromCharCode(0xd800 + (c >> 10), 0xdc00 + (c & 0x3ff));
      i += 4;
    } else { out += "�"; i++; }
  }
  return out;
}
function latin1String(bytes) {
  let out = "";
  for (let i = 0; i < bytes.length; i += 8192) out += String.fromCharCode.apply(null, bytes.subarray(i, i + 8192));
  return out;
}
// ---------- sora part token (abyssplayer service-worker scheme) ----------
// Part URL = https://<domain>/sora/<size>/<token>; token =
//   btoa(btoa(AES-256-CTR(key, counter=key[0:16], pathname + "/" + partIndex)))
// with both base64 layers' "=" stripped. The AES key is the ASCII bytes of
// md5hex(X) where X is the byte string of the size's DECIMAL DIGIT VALUES
// (the player's hash lib coerces a numeric input's digit chars to numbers,
// so size 204563261 is hashed as bytes [2,0,4,5,6,3,2,6,1]).
function soraToken(pathname, partIndex, size) {
  const s = String(size);
  let digitStr = "";
  for (let i = 0; i < s.length; i++) digitStr += String.fromCharCode(s.charCodeAt(i) - 48);
  const key = siteKey(digitStr);
  const p = pathname + "/" + partIndex;
  const plain = new Uint8Array(p.length);
  for (let i = 0; i < p.length; i++) plain[i] = p.charCodeAt(i) & 0xff;
  const cipher = aesCtrCrypt(key, key.subarray(0, 16), plain, 0);
  const inner = bytesToB64(cipher).replace(/=/g, "");
  const innerBytes = new Uint8Array(inner.length);
  for (let i = 0; i < inner.length; i++) innerBytes[i] = inner.charCodeAt(i) & 0xff;
  return bytesToB64(innerBytes).replace(/=/g, "");
}


var HJCORE = (function () {
var _api = {};
(function () {
const alphabet='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',decodeTable=new Int16Array(128).fill(-1);
for(let i=0;i<alphabet.length;i++)decodeTable[alphabet.charCodeAt(i)]=i;
const encodePairs=Array.from({length:4096},(_,n)=>alphabet[n>>>6]+alphabet[n&63]);
function decode64(value) {
 if(typeof value!=='string')throw Error('本地数据 Base64 格式无效');
 const text=value.replace(/[\t\n\f\r ]/g,''),padding=text.endsWith('==')?2:text.endsWith('=')?1:0,end=text.length-padding;
 if(end%4===1||padding&&text.length%4!==0)throw Error('本地数据 Base64 格式无效');
 const output=new Uint8Array(Math.floor(end*3/4));let at=0;
 for(let i=0;i<end;i+=4){
  const a=decodeTable[text.charCodeAt(i)]??-1,b=decodeTable[text.charCodeAt(i+1)]??-1,
   c=i+2<end?(decodeTable[text.charCodeAt(i+2)]??-1):0,d=i+3<end?(decodeTable[text.charCodeAt(i+3)]??-1):0;
  if(a<0||b<0||c<0||d<0)throw Error('本地数据 Base64 格式无效');
  output[at++]=(a<<2)|(b>>4);if(at<output.length)output[at++]=(b<<4)|(c>>2);if(at<output.length)output[at++]=(c<<6)|d;
 }
 return output;
}
function encode64(bytes) {
 const parts=[];let block='',i=0;
 for(;i+2<bytes.length;i+=3){
  const n=(bytes[i]<<16)|(bytes[i+1]<<8)|bytes[i+2];
  block+=encodePairs[n>>>12]+encodePairs[n&4095];
  if(block.length>=16384){
   // Reading a code unit flattens JSC's rope before retaining this chunk.
   // Keeping unflattened ropes otherwise retains millions of tiny strings.
   if(block.charCodeAt(0)>127)throw Error('本地 Base64 编码无效');
   parts.push(block);block='';
  }
 }
 if(i<bytes.length){const a=bytes[i],b=bytes[i+1];block+=encodePairs[(a<<4)|((b||0)>>>4)]+(i+1<bytes.length?alphabet[(b&15)<<2]:'=')+'=';}
 // Flatten the final partial chunk too, including inputs smaller than a chunk.
 if(block&&block.charCodeAt(0)>127)throw Error('本地 Base64 编码无效');
 parts.push(block);return parts.join('');
}

_api.decode64 = decode64;
_api.encode64 = encode64;
})();
(function () {
const MAX_MEDIA=16*1024*1024*1024,MAX_MOOV=8*1024*1024;
const fail=()=>{throw Error('红果流式索引准备失败：容器或网络范围不受支持');};
// The bounded prefix may include unused ciphertext (at most 64KiB). Count all
// fetched bytes, reuse metadata already in it, then skip other payload by size.
async function readCencMetadata(url,request) {
 if(typeof url!=='string'||!/^https:\/\//.test(url))fail();
 let total,metadataBytes=0;
 async function range(start,length,prefix=false){
  const end=start+length-1;
  if(!Number.isSafeInteger(start)||!Number.isSafeInteger(length)||start<0||length<1||end>=MAX_MEDIA||(total!==undefined&&end>=total))fail();
  const response=await request(url,{headers:{Range:`bytes=${start}-${end}`,'Accept-Encoding':'identity'}});
  if(response.status!==206)fail();
  const m=/^bytes (\d+)-(\d+)\/(\d+)$/.exec(response.headers.get('content-range')||'');
  if(!m)fail();
  const reported=+m[3],actualEnd=+m[2];
  if(!Number.isSafeInteger(reported)||reported<8||reported>MAX_MEDIA||+m[1]!==start||actualEnd!==Math.min(end,reported-1)||(!prefix&&actualEnd!==end)||(total!==undefined&&total!==reported))fail();
  total=reported;
  const bytes=new Uint8Array(await response.arrayBuffer());
  if(bytes.length!==actualEnd-start+1)fail();
  metadataBytes+=bytes.length;return bytes;
 }
 const prefix=await range(0,65536,true);
 function concat(parts){const out=new Uint8Array(parts.reduce((n,x)=>n+x.length,0));let at=0;for(const x of parts){out.set(x,at);at+=x.length;}return out;}
 async function read(start,length){
  if(!Number.isSafeInteger(start)||!Number.isSafeInteger(length)||start<0||length<0||start+length>total)fail();
  if(!length)return new Uint8Array(0);
  if(start>=prefix.length)return range(start,length);
  const cached=prefix.subarray(start,Math.min(start+length,prefix.length));
  return cached.length===length?cached:concat([cached,await range(prefix.length,length-cached.length)]);
 }
 let at=0,ftyp,moov,moovOffset,count=0;
 while(at<total){
  if(++count>4096)fail();
  const head=await read(at,8),view=new DataView(head.buffer,head.byteOffset,head.byteLength);
  let size=view.getUint32(0),headerSize=8,wide;
  const type=String.fromCharCode(...head.subarray(4,8));
  if(size===1){wide=await read(at+8,8);size=Number(new DataView(wide.buffer,wide.byteOffset,8).getBigUint64(0));headerSize=16;}
  if(size===0)size=total-at;
  if(!Number.isSafeInteger(size)||size<headerSize||at+size>total)fail();
  if(type==='ftyp'||type==='moov'){
   if(type==='ftyp'?(ftyp||size>1024):(moov||size>MAX_MOOV))fail();
   const parts=wide?[head,wide]:[head];parts.push(await read(at+headerSize,size-headerSize));
   const bytes=concat(parts);
   if(type==='ftyp')ftyp=bytes;else{moov=bytes;moovOffset=at;}
  }
  if(ftyp&&moov)break;
  at+=size;
 }
 if(!ftyp||!moov)fail();
 return {ftyp,moov,moovOffset,totalSize:total,metadataBytes};
}

_api.readCencMetadata = readCencMetadata;
})();
(function () {
// Private metadata-only feasibility prototype. Source ciphertext is never read here.
// No host APIs, timers, codecs, payload decryption, full-media buffers or services.
const MAX_MEDIA = 16 * 1024 * 1024 * 1024, MAX_MOOV = 8 * 1024 * 1024, MAX_SAMPLES = 25e4;
function fail(message) {
  throw Error("CENC: " + message);
}
function requireThat(ok, message) {
  if (!ok) fail(message);
}
const ascii = (b) => String.fromCharCode(...b);
const u32 = (n) => {
  const b = new Uint8Array(4);
  new DataView(b.buffer).setUint32(0, n);
  return b;
};
const u64 = (n) => {
  const b = new Uint8Array(8);
  new DataView(b.buffer).setBigUint64(0, BigInt(n));
  return b;
};
function concat(parts) {
  const n = parts.reduce((n2, b) => n2 + b.length, 0);
  const r = new Uint8Array(n);
  let at = 0;
  for (const p of parts) {
    r.set(p, at);
    at += p.length;
  }
  return r;
}
function box(type, ...parts) {
  const data = concat(parts);
  return concat([u32(data.length + 8), Uint8Array.from(type, (c) => c.charCodeAt(0)), data]);
}
function full(type, version, flags, ...parts) {
  return box(type, u32(version * 16777216 + flags), ...parts);
}
function layout(b, start = 0, end = b.length) {
  const v = new DataView(b.buffer, b.byteOffset, b.byteLength), out = [];
  for (let p = start; p < end; ) {
    requireThat(p + 8 <= end, "truncated box");
    let n = v.getUint32(p), h = 8;
    if (n === 1) {
      requireThat(p + 16 <= end, "truncated large box");
      n = Number(v.getBigUint64(p + 8));
      h = 16;
    }
    if (n === 0) n = end - p;
    requireThat(Number.isSafeInteger(n) && n >= h && n <= end - p, "invalid box bounds");
    out.push({ type: ascii(b.subarray(p + 4, p + 8)), p, body: p + h, end: p + n });
    p += n;
  }
  return out;
}
function reader(bytes) {
  const v = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
  return { bytes, v, children: (b) => layout(bytes, b.body, b.end), raw: (b) => bytes.slice(b.p, b.end), one(b, t, optional = false) {
    const a = layout(bytes, b.body, b.end).filter((x) => x.type === t);
    requireThat(a.length === (optional && a.length === 0 ? 0 : 1), "missing/duplicate " + t);
    return a[0];
  }, need(b, p, n) {
    requireThat(p >= b.body && p + n <= b.end, "truncated " + b.type);
  }, number64(p, signed = false) {
    const n = Number(signed ? v.getBigInt64(p) : v.getBigUint64(p));
    requireThat(Number.isSafeInteger(n), "unsafe integer");
    return n;
  } };
}
function headerVersion(r, b) {
  r.need(b, b.body, 4);
  const v = r.bytes[b.body];
  requireThat(v <= 1, "unsupported " + b.type + " version");
  return v;
}
function timeHeader(r, b) {
  const version = headerVersion(r, b), wide = version ? 8 : 4, p = b.body + (version ? 20 : 12);
  r.need(b, p, 4 + wide);
  return { scale: r.v.getUint32(p), duration: wide === 8 ? r.number64(p + 4) : r.v.getUint32(p + 4) };
}
function countTable(r, b, width, start = 8) {
  r.need(b, b.body, start);
  requireThat((r.v.getUint32(b.body) & 0xffffff) === 0 && r.bytes[b.body] <= (["ctts", "elst"].includes(b.type) ? 1 : 0), "unsupported table version/flags");
  const n = r.v.getUint32(b.body + 4);
  requireThat(n <= MAX_SAMPLES && b.body + start + n * width === b.end, "invalid " + b.type + " count/length");
  return n;
}
function parseTrack(r, trak, movieScale, moovOffset, totalSize, budget) {
  const { v, bytes } = r, tk = r.one(trak, "tkhd"), tkv = headerVersion(r, tk), idpos = tk.body + (tkv ? 20 : 12);
  r.need(tk, idpos, 4);
  const id = v.getUint32(idpos);
  requireThat(id > 0, "invalid track ID");
  const mdia = r.one(trak, "mdia"), mdhd = r.one(mdia, "mdhd"), clock = timeHeader(r, mdhd), hdlr = r.one(mdia, "hdlr");
  r.need(hdlr, hdlr.body, 12);
  const kind = ascii(bytes.subarray(hdlr.body + 8, hdlr.body + 12));
  requireThat(kind === "vide" || kind === "soun", "unsupported track");
  requireThat(clock.scale > 0 && clock.duration > 0, "invalid clock");
  let mediaTime = 0, editDuration = null;
  const edts = r.one(trak, "edts", true);
  if (edts) {
    // Haijiao fork patch (2026-11-05): accept multi-entry edit lists of the common
    // real-world form — leading empty edits (media_time -1, a short initial dwell,
    // typically tens of ms) plus exactly one media edit. The dwell is dropped: this
    // delivery model anchors the timeline at the first presented sample (video
    // origin must be 0), so a sub-frame dwell has no expressible effect. Multiple
    // media edits (true time remapping) remain unsupported.
    const elst = r.one(edts, "elst"), ev = headerVersion(r, elst), w2 = ev ? 20 : 12;
    const nEdits = countTable(r, elst, w2);
    let emptyDur = 0, seenEdit = false;
    for (let ei = 0; ei < nEdits; ei++) {
      const at = elst.body + 8 + ei * w2;
      const dur = ev ? r.number64(at) : v.getUint32(at);
      const mt = ev ? r.number64(at + 8, true) : v.getInt32(at + 4);
      requireThat(v.getInt32(at + (ev ? 16 : 8)) === 65536, "unsupported edit rate");
      if (mt === -1) { if (!seenEdit) emptyDur += dur; continue; }
      requireThat(mt >= 0, "negative media time unsupported");
      requireThat(!seenEdit, "unsupported edit list");
      requireThat(dur > 0, "empty edit");
      seenEdit = true;
      editDuration = dur;
      mediaTime = mt;
    }
    if (nEdits > 0) requireThat(seenEdit, "unsupported edit list");
  }
  const minf = r.one(mdia, "minf"), stbl = r.one(minf, "stbl"), stsd = r.one(stbl, "stsd");
  for (const group of r.children(stbl).filter((b) => ["sgpd", "sbgp"].includes(b.type))) {
    r.need(group, group.body, 8);
    requireThat(ascii(bytes.subarray(group.body + 4, group.body + 8)) !== "seig", "sample encryption groups unsupported");
  }
  r.need(stsd, stsd.body, 8);
  requireThat(v.getUint32(stsd.body) === 0, "unsupported stsd flags/version");
  requireThat(v.getUint32(stsd.body + 4) === 1, "sample description index must be 1");
  const entries = layout(bytes, stsd.body + 8, stsd.end);
  requireThat(entries.length === 1, "sample entry count");
  const entry = entries[0];
  const encrypted = entry.type === (kind === "vide" ? "encv" : "enca");
  requireThat(encrypted || ["avc1", "avc3", "hvc1", "hev1", "mp4a"].includes(entry.type), "unencrypted/unsupported entry");
  const extras = layout(bytes, entry.body + (kind === "vide" ? 78 : 28), entry.end), sinf = extras.find((b) => b.type === "sinf");
  let codec, ivSize = 0;
  if (encrypted) {
    requireThat(sinf, "missing sinf");
    const frma = r.one(sinf, "frma"), schm = r.one(sinf, "schm"), tenc = r.one(r.one(sinf, "schi"), "tenc");
    r.need(frma, frma.body, 4);
    codec = ascii(bytes.subarray(frma.body, frma.body + 4));
    r.need(schm, schm.body, 12);
    requireThat(ascii(bytes.subarray(schm.body + 4, schm.body + 8)) === "cenc", "unsupported encryption scheme");
    r.need(tenc, tenc.body, 24);
    requireThat(bytes[tenc.body] === 0 && bytes[tenc.body + 4] === 0 && bytes[tenc.body + 5] === 0 && bytes[tenc.body + 6] === 1, "unsupported tenc pattern");
    ivSize = bytes[tenc.body + 7];
    requireThat(ivSize === 8 || ivSize === 16, "unsupported IV");
  } else {
    codec = entry.type;
  }
  requireThat(kind === "vide" ? ["avc1", "avc3", "hvc1", "hev1"].includes(codec) : codec === "mp4a", "unsupported codec");
  requireThat(extras.some((b) => b.type === (codec.startsWith("avc") ? "avcC" : kind === "vide" ? "hvcC" : "esds")), "missing codec config");
  const stsz = r.one(stbl, "stsz");
  r.need(stsz, stsz.body, 12);
  requireThat(v.getUint32(stsz.body) === 0, "unsupported stsz flags/version");
  const fixed = v.getUint32(stsz.body + 4), count = v.getUint32(stsz.body + 8);
  budget.n += count;
  requireThat(count > 0 && budget.n <= MAX_SAMPLES, "sample bound");
  requireThat(stsz.body + 12 + (fixed ? 0 : count * 4) === stsz.end, "invalid stsz");
  const samples = Array.from({ length: count }, (_, i) => ({ size: fixed || v.getUint32(stsz.body + 12 + i * 4), rawDTS: 0, rawCTO: 0, duration: 0, key: true }));
  requireThat(samples.every((s) => s.size > 0), "empty sample");
  const stts = r.one(stbl, "stts");
  const nt = countTable(r, stts, 8);
  let si = 0, dts = 0;
  for (let i = 0; i < nt; i++) {
    const n = v.getUint32(stts.body + 8 + i * 8), dt = v.getUint32(stts.body + 12 + i * 8);
    requireThat(n > 0 && dt > 0 && si + n <= count, "invalid stts");
    for (let j = 0; j < n; j++) {
      samples[si++].rawDTS = dts;
      samples[si - 1].duration = dt;
      dts += dt;
      requireThat(Number.isSafeInteger(dts), "unsafe DTS");
    }
  }
  requireThat(si === count, "stts count mismatch");
  const ctts = r.one(stbl, "ctts", true);
  if (ctts) {
    const cv = headerVersion(r, ctts), n = countTable(r, ctts, 8);
    si = 0;
    for (let i = 0; i < n; i++) {
      const c = v.getUint32(ctts.body + 8 + i * 8), at = ctts.body + 12 + i * 8, ct = cv ? v.getInt32(at) : v.getUint32(at);
      requireThat(c > 0 && si + c <= count, "invalid ctts");
      for (let j = 0; j < c; j++) samples[si++].rawCTO = ct;
    }
    requireThat(si === count, "ctts count mismatch");
    requireThat(samples.every((s) => s.rawCTO >= 0), "negative CTO native timestamp preservation unsupported");
  }
  const stss = r.one(stbl, "stss", true);
  if (stss) {
    for (const s of samples) s.key = false;
    const n = countTable(r, stss, 4);
    let prev = 0;
    for (let i = 0; i < n; i++) {
      const index = v.getUint32(stss.body + 8 + i * 4);
      requireThat(index > prev && index <= count, "invalid stss");
      samples[index - 1].key = true;
      prev = index;
    }
  }
  const co32 = r.one(stbl, "stco", true), co64 = r.one(stbl, "co64", true);
  requireThat(!!co32 !== !!co64, "chunk offset table");
  const co = co32 || co64, w = co32 ? 4 : 8, nc = countTable(r, co, w), sc = r.one(stbl, "stsc"), nr = countTable(r, sc, 12);
  requireThat(nc > 0 && nr > 0, "empty chunks");
  const runs = [];
  for (let i = 0; i < nr; i++) {
    const at = sc.body + 8 + i * 12, first = v.getUint32(at), n = v.getUint32(at + 4), desc = v.getUint32(at + 8);
    requireThat(first > 0 && first <= nc && (i ? first > runs[i - 1].first : first === 1) && n > 0 && desc === 1, "invalid stsc/index");
    runs.push({ first, n });
  }
  si = 0;
  let ri = 0;
  for (let i = 0; i < nc; i++) {
    while (ri + 1 < nr && runs[ri + 1].first <= i + 1) ri++;
    let offset = co32 ? v.getUint32(co.body + 8 + i * w) : r.number64(co.body + 8 + i * w);
    for (let j = 0; j < runs[ri].n; j++) {
      requireThat(si < count, "chunk overflow");
      const s = samples[si++];
      s.offset = offset;
      offset += s.size;
      requireThat(offset <= totalSize && s.offset >= 0 && (offset <= moovOffset || s.offset >= moovOffset + bytes.length), "sample outside media");
    }
  }
  requireThat(si === count, "unmapped samples");
  const senc = r.one(stbl, "senc", true);
  let auxRecords = [];
  function parseAux(at, end, subsamples, sample) {
    requireThat(at + ivSize <= end, "truncated IV");
    const iv = bytes.slice(at, at + ivSize);
    at += ivSize;
    const subs = [];
    if (subsamples) {
      requireThat(at + 2 <= end, "truncated subsample count");
      const n = v.getUint16(at);
      at += 2;
      let sum = 0;
      for (let j = 0; j < n; j++) {
        requireThat(at + 6 <= end, "truncated subsamples");
        const clear = v.getUint16(at), cipher = v.getUint32(at + 2);
        subs.push([clear, cipher]);
        sum += clear + cipher;
        at += 6;
      }
      requireThat(n === 0 || sum === sample.size, "subsample byte count mismatch");
    }
    return { iv, subs, at };
  }
  if (senc) {
    r.need(senc, senc.body, 8);
    const flags = v.getUint32(senc.body);
    requireThat(flags === 0 || flags === 2, "unsupported senc flags/version");
    requireThat(v.getUint32(senc.body + 4) === count, "senc count mismatch");
    let at = senc.body + 8;
    for (const s of samples) {
      const a = parseAux(at, senc.end, !!(flags & 2), s);
      at = a.at;
      auxRecords.push(a);
    }
    requireThat(at === senc.end, "senc trailing data");
  }
  const hasSaiz = r.one(stbl, "saiz", true), hasSaio = r.one(stbl, "saio", true);
  requireThat(!!hasSaiz === !!hasSaio, "incomplete auxiliary tables");
  if (encrypted && (!senc || hasSaiz)) {
    const saved = auxRecords;
    auxRecords = [];
    const saiz = r.one(stbl, "saiz"), saio = r.one(stbl, "saio");
    headerVersion(r, saio);
    let z = saiz.body + 4, o = saio.body + 4;
    r.need(saiz, saiz.body, 4);
    const zflags = v.getUint32(saiz.body) & 16777215, oflags = v.getUint32(saio.body) & 16777215;
    requireThat(bytes[saiz.body] === 0 && zflags <= 1 && oflags <= 1, "aux flags");
    if (zflags) z += 8;
    if (oflags) o += 8;
    r.need(saiz, z, 5);
    r.need(saio, o, 4);
    const size = bytes[z++], n = v.getUint32(z);
    z += 4;
    requireThat(n === count && z + (size ? 0 : count) === saiz.end, "saiz count");
    requireThat(v.getUint32(o) === 1, "multiple auxiliary offsets");
    o += 4;
    const wide = bytes[saio.body] ? 8 : 4;
    r.need(saio, o, wide);
    requireThat(o + wide === saio.end, "saio trailing");
    let at = (wide === 8 ? r.number64(o) : v.getUint32(o)) - moovOffset;
    for (let i = 0; i < count; i++) {
      const len = size || bytes[z + i];
      requireThat(len >= ivSize && at >= 0 && at + len <= bytes.length, "aux outside moov");
      const a = parseAux(at, at + len, len > ivSize, samples[i]);
      requireThat(a.at === at + len, "aux record length");
      auxRecords.push(a);
      at += len;
    }
    if (senc) {
      requireThat(saved.length === auxRecords.length, "aux count mismatch");
      for (let i = 0; i < count; i++) {
        requireThat(saved[i].at === auxRecords[i].at && saved[i].iv.every((v2, j) => v2 === auxRecords[i].iv[j]) && JSON.stringify(saved[i].subs) === JSON.stringify(auxRecords[i].subs), "aux disagrees with senc");
      }
    }
  }
  if (!encrypted) auxRecords = samples.map(() => ({ iv: new Uint8Array(0), subs: [] }));
  samples.forEach((s, i) => Object.assign(s, { iv: auxRecords[i].iv, subs: auxRecords[i].subs, track: id, presentation: (s.rawDTS + s.rawCTO - mediaTime) / clock.scale }));
  const presentedEnd = samples.reduce((end, s) => Math.max(end, (s.rawDTS + s.rawCTO + s.duration - mediaTime) / clock.scale), -Infinity);
  if (kind === "soun") for (let i = 1; i < samples.length; i++) requireThat(samples[i].presentation >= samples[i - 1].presentation, "nonmonotonic AAC");
  requireThat(Number.isFinite(presentedEnd) && presentedEnd > 0, "invalid presentation");
  if (kind === "vide") {
    requireThat(samples[0].key && samples[0].presentation === 0, "unsupported video origin");
    requireThat(samples.every((s) => s.presentation >= 0), "negative video presentation");
  }
  return { trak, mdia, minf, stbl, stsd, id, kind, samples, encrypted, scale: clock.scale, mediaTime, duration: editDuration === null ? (clock.duration - mediaTime) / clock.scale : editDuration / movieScale };
}
// Preserve original codec/encryption/edit/timing bytes; replace only indexing tables.
function initTrack(r, t) {
  const table = box("stbl", r.raw(t.stsd), full("stts", 0, 0, u32(0)), full("stsc", 0, 0, u32(0)), full("stsz", 0, 0, u32(0), u32(0)), full("stco", 0, 0, u32(0)));
  const minf = box("minf", ...r.children(t.minf).map((b) => b.type === "stbl" ? table : r.raw(b)));
  const mdia = box("mdia", ...r.children(t.mdia).filter((b) => ["mdhd", "hdlr", "minf"].includes(b.type)).map((b) => b.type === "minf" ? minf : r.raw(b)));
  return box("trak", ...r.children(t.trak).filter((b) => ["tkhd", "edts", "mdia"].includes(b.type)).map((b) => b.type === "mdia" ? mdia : r.raw(b)));
}
// Virtual mdat follows source byte order, retaining bounded ciphertext holes to
// avoid a separate HLS request for every small unselected sample. Each GOP may
// read at most twice its selected payload; distant tracks still split ranges.
// Per-track trun offsets skip retained holes and preserve decode order.
function fragment(tracks, chosen, sequence, start, duration) {
  const ordered = chosen.flat().sort((a, b) => a.offset - b.offset), ranges = [];
  let size = 0, gapBudget = ordered.reduce((n, s) => n + s.size, 0);
  // Haijiao fork perf patch (2026-11-05): keep each sample's virtual offset on the
  // sample object itself instead of a per-fragment Map (116k set/get pairs on a
  // long file). Samples are partitioned disjointly across fragments, so _v is
  // written exactly once per plan; values are identical to the Map version.
  for (const s of ordered) {
    const last = ranges[ranges.length - 1], gap = last ? s.offset - last.offset - last.length : 0;
    const bridge = last && gap <= 256 * 1024 && gap <= gapBudget;
    if (bridge) {
      size += gap;
      gapBudget -= gap;
      last.length += gap + s.size;
    } else ranges.push({ offset: s.offset, length: s.size });
    s._v = size;
    size += s.size;
  }
  function traf(t, ss, dataStart) {
    const runs = [];
    for (const s of ss) {
      const last = runs[runs.length - 1];
      if (last && last[last.length - 1]._v + last[last.length - 1].size === s._v) last.push(s);
      else runs.push([s]);
    }
    const signed = ss.some((s) => s.rawCTO < 0);
    requireThat(!signed || ss.every((s) => s.rawCTO <= 2147483647), "mixed CTO overflow");
    // Haijiao fork perf patch (2026-11-05): write trun entries into one preallocated
    // buffer instead of four tiny u32() arrays per sample — per-sample allocation
    // was the fragment-planning hot spot (2.3s of 2.7s plan time on a 116k-sample
    // file in Node; worse in JSCore). Output bytes are identical.
    const truns = runs.map((run) => {
      const payload = new Uint8Array(run.length * 16);
      const pv = new DataView(payload.buffer);
      for (let i = 0; i < run.length; i++) {
        const s = run[i], o = i * 16;
        pv.setUint32(o, s.duration);
        pv.setUint32(o + 4, s.size);
        pv.setUint32(o + 8, s.key ? 33554432 : 16842752);
        pv.setUint32(o + 12, s.rawCTO);
      }
      return full("trun", signed ? 1 : 0, 3841, u32(run.length), u32(dataStart + run[0]._v), payload);
    });
    // Native MOV accepts fragment senc directly; source auxiliary offsets are removed.
    const subs = ss.some((s) => s.subs.length > 0);
    // Haijiao fork perf patch: senc records are only consumed for encrypted tracks;
    // building them for plaintext tracks wasted two allocations per sample.
    const records = t.encrypted ? ss.map((s) => concat([s.iv, ...subs ? [Uint8Array.of(s.subs.length >> 8, s.subs.length & 255), ...s.subs.flatMap(([clear, cipher]) => [Uint8Array.of(clear >> 8, clear & 255), u32(cipher)])] : []])) : null;
    return box("traf", full("tfhd", 0, 131072, u32(t.id)), full("tfdt", 1, 0, u64(ss[0].rawDTS)), ...truns, ...(t.encrypted ? [full("senc", 0, subs ? 2 : 0, u32(ss.length), concat(records))] : []));
  }
  function moof(dataStart) {
    return box("moof", full("mfhd", 0, 0, u32(sequence)), ...tracks.map((t, i) => chosen[i].length ? traf(t, chosen[i], dataStart) : null).filter(Boolean));
  }
  const first = moof(0), final = moof(first.length + 8);
  return { header: concat([final, u32(size + 8), Uint8Array.of(109, 100, 97, 116)]), ranges, start, duration };
}
function planCencFragments({ ftyp, moov, moovOffset, totalSize }) {
  requireThat(ftyp instanceof Uint8Array && moov instanceof Uint8Array, "Uint8Array metadata required");
  requireThat(Number.isSafeInteger(totalSize) && totalSize > 0 && totalSize <= MAX_MEDIA, "media size bound");
  requireThat(moov.length <= MAX_MOOV && Number.isSafeInteger(moovOffset) && moovOffset >= ftyp.length && moovOffset + moov.length <= totalSize, "moov bound");
  const f = layout(ftyp);
  requireThat(f.length === 1 && f[0].type === "ftyp" && ftyp.length <= 1024, "invalid ftyp");
  const r = reader(moov), roots = layout(moov);
  requireThat(roots.length === 1 && roots[0].type === "moov", "invalid moov");
  const root = roots[0];
  requireThat(!r.one(root, "mvex", true), "already fragmented");
  const mvhd = r.one(root, "mvhd"), movie = timeHeader(r, mvhd);
  requireThat(movie.scale > 0, "movie clock");
  const traks = r.children(root).filter((b) => b.type === "trak");
  requireThat(traks.length >= 1 && traks.length <= 2, "track count bound");
  const budget = { n: 0 }, tracks = traks.map((t) => parseTrack(r, t, movie.scale, moovOffset, totalSize, budget));
  requireThat((tracks.length < 2 || tracks[0].id !== tracks[1].id) && tracks.filter((t) => t.kind === "vide").length === 1 && tracks.filter((t) => t.kind === "soun").length <= 1, "video/audio tracks required");
  const all = tracks.flatMap((t) => t.samples).sort((a, b) => a.offset - b.offset);
  requireThat(all.every((s) => s.offset >= ftyp.length), "sample overlaps ftyp");
  for (let i = 1; i < all.length; i++) requireThat(all[i].offset >= all[i - 1].offset + all[i - 1].size, "overlapping samples");
  const video = tracks.find((t) => t.kind === "vide"), keys = video.samples.filter((s) => s.key), duration = Math.max(...tracks.map((t) => t.duration));
  for (let i = 1; i < keys.length; i++) requireThat(keys[i].presentation > keys[i - 1].presentation, "nonmonotonic GOP");
  requireThat(duration > keys[keys.length - 1].presentation, "invalid final duration");
  // Haijiao fork patch (2026-11-05): merge consecutive GOPs into ~8s fragments.
  // One fragment per GOP made the player issue a media request per ~2s of video
  // (1,800+ fetches for a 30 min file) and playback stuttered on request latency.
  // A merged fragment is the same moof/trun structure with several GOPs inside.
  const MERGE_TARGET = 4;
  const keyIdx = keys.map((k) => video.samples.indexOf(k));
  const fragments = [];
  let vi = 0;
  const cursors = new Map(tracks.map((t) => [t.id, 0]));
  for (let i = 0; i < keys.length;) {
    const start = keys[i].presentation;
    let j = i + 1;
    while (j < keys.length && keys[j].presentation - start < MERGE_TARGET) j++;
    const end = j < keys.length ? keys[j].presentation : duration;
    const chosen = tracks.map((t) => {
      const first = cursors.get(t.id);
      let last = first;
      if (t.kind === "vide") {
        last = j < keys.length ? keyIdx[j] : t.samples.length;
        vi = last;
      } else {
        while (last < t.samples.length && (j === keys.length || t.samples[last].presentation < end)) last++;
      }
      cursors.set(t.id, last);
      return t.samples.slice(first, last);
    });
    fragments.push(fragment(tracks, chosen, fragments.length + 1, start, end - start));
    i = j;
  }
  for (const t of tracks) requireThat(cursors.get(t.id) === t.samples.length, "unassigned samples");
  const initialization = concat([ftyp, box("moov", r.raw(mvhd), ...tracks.map((t) => initTrack(r, t)), box("mvex", ...tracks.map((t) => full("trex", 0, 0, u32(t.id), u32(1), u32(0), u32(0), u32(0)))))]);
  return { initialization, fragments, duration };
}
function base64(bytes) {
  // Haijiao fork perf patch (2026-11-05): block-wise encode + join instead of
  // appending four characters per triple to one ever-growing string (the manifest
  // encode runs over ~5MB; the naive loop is a JSCore hot spot). Output identical.
  const abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  const BLOCK = 49152; // multiple of 3
  const chunks = [];
  const fullEnd = bytes.length - (bytes.length % 3);
  for (let start = 0; start < fullEnd; start += BLOCK) {
    const end = Math.min(start + BLOCK, fullEnd);
    let out = "";
    for (let i = start; i < end; i += 3) {
      const n = bytes[i] << 16 | bytes[i + 1] << 8 | bytes[i + 2];
      out += abc[n >>> 18 & 63] + abc[n >>> 12 & 63] + abc[n >>> 6 & 63] + abc[n & 63];
    }
    chunks.push(out);
  }
  if (fullEnd < bytes.length) {
    const a = bytes[fullEnd], b = bytes[fullEnd + 1], c = bytes[fullEnd + 2], n = a << 16 | (b || 0) << 8 | (c || 0);
    chunks.push(abc[n >>> 18 & 63] + abc[n >>> 12 & 63] + (fullEnd + 1 < bytes.length ? abc[n >>> 6 & 63] : "=") + (fullEnd + 2 < bytes.length ? abc[n & 63] : "="));
  }
  return chunks.join("");
}
// SAMPLE-AES routes the generic key to MOV CENC AES-CTR in the shipped library.
// This does not claim source encryption is CBC or that the descriptor is a cache.
function buildCencStreamHls(plan, { urlForRange, inlineRanges }) {
  requireThat(typeof urlForRange === "function", "urlForRange required");
  const uri = (b) => "data:video/mp4;base64," + base64(b) + "=.mp4";
  const map = '#EXT-X-MAP:URI="' + uri(plan.initialization) + '"';
  requireThat(plan.initialization.length <= 2632 && map.length < 4096, "init too large");
  requireThat(plan.fragments.length > 0 && Number.isFinite(plan.duration) && plan.duration > 0, "invalid plan");
  const lines = ["#EXTM3U", "#EXT-X-VERSION:7", "#EXT-X-TARGETDURATION:" + Math.ceil(plan.fragments.reduce((m, f) => Math.max(m, f.duration), 0)), "#EXT-X-MEDIA-SEQUENCE:0", "#EXT-X-PLAYLIST-TYPE:VOD", map];
  let partCount = 0, sum = 0, inlineBytes = 0, manifestSize = lines.reduce((n, l) => n + l.length + 1, 0) + 15;
  for (const f of plan.fragments) {
    const parts = [];
    for (let at = 0; at < f.header.length; at += 2632) parts.push([uri(f.header.subarray(at, at + 2632))]);
    for (const range of f.ranges) {
      requireThat(Number.isSafeInteger(range.offset) && range.offset >= 0 && Number.isSafeInteger(range.length) && range.length > 0, "invalid range");
      const cached = inlineRanges?.get(range.offset + ":" + range.length);
      if (cached !== undefined) {
        requireThat(cached instanceof Uint8Array && cached.length === range.length, "invalid inline ciphertext");
        inlineBytes += cached.length;
        requireThat(inlineBytes <= 512 * 1024, "inline ciphertext byte bound");
        for (let at = 0; at < cached.length; at += 2632) parts.push([uri(cached.subarray(at, at + 2632))]);
      } else for (const seg of urlForRange(range.offset, range.length)) {
        requireThat(seg && typeof seg.url === "string" && seg.url.startsWith("https://") && !/[\s"#\x00-\x1f\x7f-\uffff]/.test(seg.url) && seg.url.length < 3500, "invalid segment URL");
        requireThat(Number.isSafeInteger(seg.offset) && seg.offset >= 0 && Number.isSafeInteger(seg.length) && seg.length > 0, "invalid segment range");
        parts.push(["#EXT-X-BYTERANGE:" + seg.length + "@" + seg.offset, seg.url + "#.mp4"]);
      }
    }
    const first = f.duration - (parts.length - 1) * 1e-3;
    requireThat(first >= 1e-3, "too many parts for GOP duration");
    for (let i = 0; i < parts.length; i++) {
      const dt = i ? ".001000" : first.toFixed(9);
      sum += Number(dt);
      const added = ["#EXTINF:" + dt + ",", ...parts[i]];
      manifestSize += added.reduce((n, l) => n + l.length + 1, 0);
      requireThat(manifestSize <= 60 * 1024 * 1024, "manifest byte bound");
      lines.push(...added);
      partCount++;
      requireThat(partCount <= 25e4, "part count bound");
    }
  }
  requireThat(Math.abs(sum - plan.duration) < 1e-6, "duration mismatch");
  lines.push("#EXT-X-ENDLIST");
  requireThat(lines.every((l) => l.length < 4096), "manifest line bound");
  const manifest = lines.join("\n") + "\n";
  requireThat(manifest.length <= 60 * 1024 * 1024, "manifest byte bound/ASCII");
  // TypedArray.from(string) collects an iterator result for every character
  // before mapping, matching the iOS JSC resource-exhaustion stack.
  // All manifest inputs are bounded ASCII; write into one fixed-size buffer.
  const bytes = new Uint8Array(manifest.length);
  for (let i = 0; i < manifest.length; i++) bytes[i] = manifest.charCodeAt(i);
  return { url: "data:application/vnd.apple.mpegurl;base64," + base64(bytes) + "=.m3u8", manifestBytes: manifest.length, partCount };
}

_api.planCencFragments = planCencFragments;
_api.buildCencStreamHls = buildCencStreamHls;
})();
(function () {
var decode64 = _api.decode64, encode64 = _api.encode64;

const PREFIX='data:application/vnd.apple.mpegurl;base64,',SUFFIX='=.m3u8';
const GUARD_BYTES=128*1024,MAX_BYTES=60*1024*1024;
const guard=new Uint8Array(GUARD_BYTES).fill(46);
for(let at=0;at<guard.length;at+=1024){guard[at]=35;guard[at+1023]=10;}
const fail=()=>{throw Error('红果流式索引准备失败：播放列表尾部保护无效');};
function matches(bytes,text,at){
 for(let i=0;i<text.length;i++)if(bytes[at+i]!==text.charCodeAt(i))return false;
 return true;
}
// Private transport experiment only. Existing media, keys, timing and ENDLIST
// remain an exact byte prefix; native/App EOF behavior is not established here.
function padCencStreamHls(hls){
 try{
  if(!hls||typeof hls.url!=='string'||!Number.isSafeInteger(hls.manifestBytes)||hls.manifestBytes<22||hls.manifestBytes>MAX_BYTES-GUARD_BYTES)fail();
  if(!hls.url.startsWith(PREFIX)||!hls.url.endsWith(SUFFIX))fail();
  const encoded=hls.url.slice(PREFIX.length,-SUFFIX.length);
  if(encoded.length!==4*Math.ceil(hls.manifestBytes/3)||/[^A-Za-z0-9+/=]/.test(encoded))fail();
  const end=encoded.indexOf('=');
  if(end!==-1&&!(end===encoded.length-1||end===encoded.length-2&&encoded.endsWith('==')))fail();
  const bytes=decode64(encoded),endlist='#EXT-X-ENDLIST\n';
  if(bytes.length!==hls.manifestBytes||!matches(bytes,'#EXTM3U\n',0)||!matches(bytes,endlist,bytes.length-endlist.length))fail();
  const padded=new Uint8Array(bytes.length+GUARD_BYTES);
  padded.set(bytes);padded.set(guard,bytes.length);
  return {...hls,url:PREFIX+encode64(padded)+SUFFIX,manifestBytes:padded.length};
 }catch{fail();}
}

_api.padCencStreamHls = padCencStreamHls;
})();
(function () {
const PREFIX='data:application/vnd.apple.mpegurl;base64,',SUFFIX='=.m3u8',MAX_BYTES=60*1024*1024;
const fail=()=>{throw Error('红果流式索引准备失败：内存传输包装无效');};
// Keep the native preference provider's repeatedly normalized URL filename short.
// The terminal padding marker still ends FFmpeg's base64 payload before the path.
function memoryCencStreamHls(hls){
 try{
  if(!hls||typeof hls.url!=='string'||!Number.isSafeInteger(hls.manifestBytes)||hls.manifestBytes<22||hls.manifestBytes>MAX_BYTES)fail();
  if(!hls.url.startsWith(PREFIX)||!hls.url.endsWith(SUFFIX))fail();
  if(hls.url.length!==PREFIX.length+4*Math.ceil(hls.manifestBytes/3)+SUFFIX.length)fail();
  const encoded=hls.url.slice(PREFIX.length,-SUFFIX.length);
  if(/[^A-Za-z0-9+/=]/.test(encoded))fail();
  const padding=(3-hls.manifestBytes%3)%3;
  const end=encoded.indexOf('=');
  if(padding===0?end!==-1:end!==encoded.length-padding||!encoded.endsWith('='.repeat(padding)))fail();
  return {...hls,url:'async:'+hls.url.slice(0,-SUFFIX.length)+'=/index.m3u8'};
 }catch{fail();}
}

_api.memoryCencStreamHls = memoryCencStreamHls;
})();
return _api;
})();

/* ---------------- 工具 ---------------- */

function _deEnt(s) {
  return String(s || "")
    .replace(/&#(\d+);/g, function (m, n) { return String.fromCharCode(Number(n)); })
    .replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"').replace(/&#0?39;|&apos;/g, "'").replace(/&nbsp;/g, " ");
}
function _hdrs(ref) {
  return {
    "User-Agent": UA,
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
    "Accept-Language": "zh-CN,zh;q=0.9",
    "Referer": ref || (HOST + "/")
  };
}
async function _getText(url, ref) {
  try {
    var resp = await Widget.http.get(url, { headers: _hdrs(ref), timeout: 20000 });
    var body = resp && resp.data;
    return typeof body === "string" ? body : "";
  } catch (e) { return ""; }
}
async function _getJson(url) {
  try {
    var resp = await Widget.http.get(url, { headers: _hdrs(HOST + "/"), timeout: 20000 });
    var body = resp && resp.data;
    if (typeof body === "string") { try { body = JSON.parse(body); } catch (e) { return null; } }
    return body == null ? null : body;
  } catch (e) { return null; }
}
function _fixPic(p) {
  var s = String(p || "").trim();
  if (!s) return "";
  if (s.indexOf("//") === 0) return "https:" + s;
  if (s.indexOf("http") === 0) return s;
  return HOST + (s.charAt(0) === "/" ? "" : "/") + s;
}
function _absolute(u) {
  if (!u) return "";
  if (u.indexOf("//") === 0) return "https:" + u;
  if (u.indexOf("http") === 0) return u;
  return HOST + (u.charAt(0) === "/" ? "" : "/") + u;
}
function _slugOf(link) {
  var s = String(link || "").replace(/\/$/, "");
  var last = s.split("/").pop() || s;
  return last.replace(/\.html$/i, "");
}
function _sizeText(size) {
  var mb = Number(size || 0) / 1048576;
  if (!isFinite(mb) || mb <= 0) return "";
  return mb >= 1024 ? (mb / 1024).toFixed(2) + " GB" : mb.toFixed(0) + " MB";
}

/* 自家链接：帖子 hj:<cat>:<数字id>；分集 hj:p:<播放器代码>。只放解码稳定字符。 */
function _postLink(cat, id) { return "hj:" + cat + ":" + id; }
function _parsePostLink(l) {
  var m = /^hj:([a-z0-9]+):(\d+)$/.exec(String(l || ""));
  if (!m || !CAT_IDS[m[1]]) return null;
  return { cat: m[1], id: m[2] };
}
function _parseEpLink(l) {
  var m = /^hj:p:([A-Za-z0-9_-]{4,40})$/.exec(String(l || ""));
  return m ? m[1] : null;
}
function _unwrap(arg) {
  if (typeof arg === "string") return arg;
  if (arg && typeof arg === "object") return String(arg.link || arg.videoUrl || arg.id || "");
  return "";
}
function _postParts(postUrl) {
  var m = /haijiaolove\.xyz\/([a-z0-9]+)\/(\d+)\.html/i.exec(String(postUrl || ""));
  if (!m || !CAT_IDS[m[1].toLowerCase()]) return null;
  return { cat: m[1].toLowerCase(), id: m[2] };
}

/* ---------------- 列表 ---------------- */

function parseCards(text) {
  var out = [], seen = {}, byLink = {};
  var re = /<a href="([^"]+?\.html)"[^>]*class="[^"]*pt-cv-href-thumbnail[^"]*"[^>]*>[\s\S]*?data-cvpsrc="([^"]+)"/g;
  var m;
  while ((m = re.exec(text))) {
    var link = _absolute(m[1]);
    if (seen[link]) continue;
    seen[link] = 1;
    byLink[link] = out.length;
    out.push({ url: link, name: _slugOf(link), pic: _fixPic(m[2]) });
  }
  var re2 = /class="pt-cv-title">\s*<a href="([^"]+?\.html)"[^>]*>([^<]+)<\/a>/g;
  while ((m = re2.exec(text))) {
    var l2 = _absolute(m[1]);
    if (byLink[l2] !== undefined) out[byLink[l2]].name = _deEnt(m[2].trim());
  }
  return out;
}
function _toItem(c) {
  var parts = _postParts(c.url);
  if (!parts) return null;
  return {
    id: parts.id,
    type: "url",
    title: c.name || parts.id,
    description: c.desc || "海角爱",
    posterPath: c.pic || "",
    coverUrl: c.pic || "",
    mediaType: "movie",
    link: _postLink(parts.cat, parts.id)
  };
}
function _items(cards) {
  var out = [];
  for (var i = 0; i < cards.length; i++) { var it = _toItem(cards[i]); if (it) out.push(it); }
  return out;
}
function _wpItem(p) {
  var emb = (p && p._embedded) || {};
  var fm = (emb["wp:featuredmedia"] || [{}])[0] || {};
  var date = p && p.date ? String(p.date).slice(0, 10) : "";
  return {
    url: String((p && p.link) || ""),
    name: _deEnt((p && p.title && p.title.rendered) || ""),
    pic: _fixPic(fm.source_url || ""),
    desc: date ? ("海角爱 · " + date) : "海角爱"
  };
}
async function _wpList(url) {
  var body = await _getJson(url);
  if (!Array.isArray(body)) return [];
  return body.map(_wpItem);
}
async function loadList(params) {
  params = params || {};
  var cat = String(params.cat || "zjgx");
  if (!CAT_IDS[cat]) return [];
  var page = Math.max(1, Number(params.page || 1));
  var cards;
  if (WP_CAT[cat]) {
    cards = await _wpList(HOST + "/wp-json/wp/v2/posts?categories=" + WP_CAT[cat] + "&per_page=20&page=" + page + "&_embed");
  } else {
    var url = page === 1 ? (HOST + "/" + cat + "/") : (HOST + "/" + cat + "/?_page=" + page);
    cards = parseCards(await _getText(url));
  }
  return _items(cards);
}
/* 分类入口：每类独立函数名（与已证模块一致，列表条目不共用 functionName） */
function _catFn(slug) { return function (params) { var p = params || {}; p.cat = slug; return loadList(p); }; }
var loadCat_zjgx = _catFn("zjgx");
var loadCat_hjmz = _catFn("hjmz");
var loadCat_hjjd = _catFn("hjjd");
var loadCat_hjfn = _catFn("hjfn");
var loadCat_hjsz = _catFn("hjsz");
var loadCat_hjwf = _catFn("hjwf");
var loadCat_origin = _catFn("origin");
var loadCat_hjsets = _catFn("hjsets");
var loadCat_hjhj = _catFn("hjhj");
var loadCat_hjrq = _catFn("hjrq");
var loadCat_hjyc = _catFn("hjyc");
async function search(params) {
  params = params || {};
  var kw = String(params.keyword || params.wd || "").trim();
  if (!kw) return [];
  var page = Math.max(1, Number(params.page || 1));
  var cards = await _wpList(HOST + "/wp-json/wp/v2/posts?search=" + encodeURIComponent(kw) + "&per_page=20&page=" + page + "&_embed");
  return _items(cards);
}

/* ---------------- 详情 ---------------- */

function _playerCode(iframeUrl) {
  var m = /player\.abyssplayer\.com\/([A-Za-z0-9_-]{4,40})/.exec(String(iframeUrl || ""));
  return m ? m[1] : null;
}
function _cleanText(html) {
  return _deEnt(String(html || "").replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim());
}
function _isContentPic(u) {
  if (!u || u.indexOf("data:image") === 0) return false;
  if (/logo1(-?\d+x\d+)?\.jpg$/i.test(u)) return false;
  if (/googlelogo|gravatar\.com|\/themes\/astra\//i.test(u)) return false;
  return true;
}
async function loadDetail(arg) {
  var info = _parsePostLink(_unwrap(arg));
  if (!info) return [];
  var url = HOST + "/" + info.cat + "/" + info.id + ".html";
  var page = await _getText(url);
  if (!page) return [];

  var title = info.id;
  var m = page.match(/<h1[^>]*class="entry-title"[^>]*>([^<]+)<\/h1>/);
  if (m) title = _deEnt(m[1].trim());
  else {
    m = page.match(/<title>([^<]+)<\/title>/);
    if (m) title = _deEnt(m[1].split("–")[0].split("-")[0].trim());
  }
  var metaDesc = "";
  m = page.match(/<meta[^>]*name="description"[^>]*content="([^"]+)"/i) ||
      page.match(/<meta[^>]*property="og:description"[^>]*content="([^"]+)"/i);
  if (m) metaDesc = _deEnt(m[1].trim());

  var pic = "";
  m = page.match(/<meta[^>]*property="og:image"[^>]*content="([^"]+)"/) ||
      page.match(/class="[^"]*attachment-large[^"]*"[^>]*src="([^"]+)"/) ||
      page.match(/wp-post-image[^>]*src="([^"]+)"/);
  if (m) pic = _fixPic(m[1]);
  if (!_isContentPic(pic)) pic = "";

  var startIdx = page.indexOf('data-elementor-type="wp-post"');
  if (startIdx < 0) startIdx = page.indexOf('class="entry-content');
  if (startIdx < 0) startIdx = 0;
  var endIdx = page.indexOf("猜你喜欢:", startIdx);
  if (endIdx < 0) endIdx = page.indexOf('class="post-tags', startIdx);
  if (endIdx < 0) endIdx = page.indexOf("</article>", startIdx);
  if (endIdx < 0) endIdx = page.length;
  var body = page.slice(startIdx, endIdx);

  var allPics = [], allPicSeen = {};
  function addPic(raw, arr, seen) {
    var u = _fixPic(raw);
    if (!_isContentPic(u)) return;
    if (arr && seen && !seen[u]) { seen[u] = 1; arr.push(u); }
    if (!allPicSeen[u]) { allPicSeen[u] = 1; allPics.push(u); }
  }

  var cur = { title: "", descParts: [], pics: [], picSeen: {} };
  var episodes = [], seenCodes = {}, titleCounts = {};
  var tokRe = /(<h3[^>]*>[\s\S]*?<\/h3>)|(<h4[^>]*>[\s\S]*?<\/h4>)|(<p[^>]*>[\s\S]*?<\/p>)|<a[^>]*e-gallery-item[^>]*href="([^"]+)"|data-thumbnail="([^"]+)"|<img[^>]+(?:data-src|src)="([^"]+)"|<iframe[^>]*src="([^"]+)"/gi;
  var mm;
  while ((mm = tokRe.exec(body))) {
    if (mm[1]) {
      var ht = _cleanText(mm[1]);
      if (ht && ht !== "猜你喜欢:") {
        cur = { title: ht, descParts: [], pics: [], picSeen: {} };
      }
    } else if (mm[2] || mm[3]) {
      var pt = _cleanText(mm[2] || mm[3]);
      if (pt && pt !== "猜你喜欢:") cur.descParts.push(pt);
    } else if (mm[4] || mm[5] || mm[6]) {
      addPic(mm[4] || mm[5] || mm[6], cur.pics, cur.picSeen);
    } else if (mm[7]) {
      var code = _playerCode(_absolute(mm[7]));
      if (code && !seenCodes[code]) {
        seenCodes[code] = 1;
        var baseTitle = cur.title;
        if (baseTitle) {
          titleCounts[baseTitle] = (titleCounts[baseTitle] || 0) + 1;
        }
        episodes.push({
          code: code,
          rawTitle: baseTitle,
          seqInTitle: baseTitle ? titleCounts[baseTitle] : 0,
          descParts: cur.descParts.slice(),
          pics: cur.pics.slice()
        });
      }
    }
  }
  if (!episodes.length) throw new Error("这个页面没有播放源");

  if (!pic && allPics.length) pic = allPics[0];
  var MAX_BACKDROPS = 10;
  var backdropList = [], bdSeen = {};
  function addBd(u) {
    if (!u || bdSeen[u] || backdropList.length >= MAX_BACKDROPS) return;
    bdSeen[u] = 1;
    backdropList.push(u);
  }
  // 顶层剧照从各集均匀抽样并限制总数，避免几十张大图并发请求拖慢详情页
  var round = 0, progressed = true;
  while (backdropList.length < MAX_BACKDROPS && progressed) {
    progressed = false;
    for (var ei = 0; ei < episodes.length; ei++) {
      var epPicsArr = episodes[ei].pics;
      if (epPicsArr && round < epPicsArr.length) {
        progressed = true;
        addBd(epPicsArr[round]);
      }
    }
    round++;
  }
  for (var ai = 0; ai < allPics.length && backdropList.length < MAX_BACKDROPS; ai++) addBd(allPics[ai]);
  if (!backdropList.length && pic) addBd(pic);

  var epItems = episodes.map(function (ep, i) {
    var l = "hj:p:" + ep.code;
    var epTitle = ep.rawTitle
      ? (titleCounts[ep.rawTitle] > 1 ? (ep.rawTitle + " (" + ep.seqInTitle + ")") : ep.rawTitle)
      : ("第" + (i + 1) + "集");
    var epDesc = ep.descParts.length
      ? ep.descParts.join("\n")
      : ("第" + (i + 1) + "集 · 共 " + episodes.length + " 集");
    var epBackdrops = ep.pics && ep.pics.length
      ? ep.pics.slice(0, MAX_BACKDROPS)
      : (pic ? [pic] : []);
    var epPic = (epBackdrops.length ? epBackdrops[0] : "") || pic;
    return {
      id: l,
      link: l,
      type: "url",
      title: epTitle,
      description: epDesc,
      posterPath: epPic,
      coverUrl: epPic,
      backdropPath: epBackdrops[0] || pic,
      backdropPaths: epBackdrops,
      episode: i + 1,
      season: 1,
      playerType: "app"
    };
  });

  var detailDescParts = [];
  if (metaDesc) detailDescParts.push(metaDesc);
  for (var j = 0; j < epItems.length; j++) {
    var it = epItems[j];
    var headLine = "【第" + (j + 1) + "集】" + it.title;
    var hasBody = episodes[j].descParts.length > 0;
    detailDescParts.push(hasBody ? (headLine + "\n" + it.description) : headLine);
  }

  return {
    id: info.id,
    type: "url",
    title: title,
    description: detailDescParts.join("\n\n"),
    posterPath: pic,
    coverUrl: pic,
    backdropPath: backdropList[0] || pic,
    backdropPaths: backdropList,
    mediaType: episodes.length > 1 ? "tv" : "movie",
    link: _postLink(info.cat, info.id),
    episodeItems: epItems
  };
}

/* ---------------- 播放：本机解析 ---------------- */

/* 二进制取数：Widget.http.request + base64Data（Rex 文本回包会毁二进制，必须走 base64） */
async function _reqBytes(url, headers) {
  var resp = await Widget.http.request({ url: url, method: "GET", headers: headers || {}, base64Data: true, timeout: 30000 });
  var status = resp ? Number(resp.statusCode != null ? resp.statusCode : (resp.status != null ? resp.status : 0)) : 0;
  var bytes;
  if (resp && typeof resp.data === "string") bytes = HJCORE.decode64(resp.data);
  else if (resp && resp.data) bytes = new Uint8Array(resp.data);
  else bytes = new Uint8Array(0);
  var hmap = {}, hs = (resp && resp.headers) || {}, k;
  if (Array.isArray(hs)) {
    for (var i = 0; i < hs.length; i++) if (hs[i] && hs[i].name) hmap[String(hs[i].name).toLowerCase()] = String(hs[i].value);
  } else {
    for (k in hs) hmap[String(k).toLowerCase()] = String(hs[k]);
  }
  return { status: status, headers: hmap, bytes: bytes };
}
function _rangeResp(a, b, total, bytes) {
  return {
    status: 206,
    headers: { get: function (n) { return String(n).toLowerCase() === "content-range" ? ("bytes " + a + "-" + b + "/" + total) : null; } },
    arrayBuffer: async function () { return bytes.buffer.slice(bytes.byteOffset, bytes.byteOffset + bytes.length); }
  };
}

/* 播放页 datas 本机解密：key = md5(user:slug:md5_id) 的 ASCII 串作 AES-256-CTR 密钥 */
async function _resolvePlayer(code) {
  var purl = PLAYER + "/" + code;
  var html = await _getText(purl, HOST + "/");
  var m = /const datas = "([^"]+)"/.exec(html);
  if (!m) {
    html = await _getText(purl, PLAYER + "/");
    m = /const datas = "([^"]+)"/.exec(html);
  }
  if (!m) throw new Error("播放页解析失败（datas 缺失）");
  var obj = JSON.parse(latin1String(b64ToBytes(m[1]))); // 外层须按 Latin-1 保字节解析，media 是二进制串，UTF-8 解码会毁字节
  if (!obj || obj.media == null || obj.md5_id == null) throw new Error("播放页数据不完整");
  var mediaStr = String(obj.media), enc = new Uint8Array(mediaStr.length);
  for (var i = 0; i < mediaStr.length; i++) enc[i] = mediaStr.charCodeAt(i) & 0xff;
  var plain = siteDecrypt(String(obj.user_id) + ":" + String(obj.slug) + ":" + String(obj.md5_id), enc, 0);
  var media = JSON.parse(utf8Decode(plain));
  if (!media || !media.mp4) throw new Error("媒体数据解析失败");
  return { media: media.mp4, md5id: obj.md5_id, playerUrl: purl };
}

function _pickDomain(domains, sub, size) {
  if (sub) for (var i = 0; i < domains.length; i++) if (String(domains[i]).indexOf(sub) >= 0) return domains[i];
  return domains[size % domains.length];
}

/* 并发测速选出最快的可用 CDN 节点（轻量 Range 0-63 探针，超时 3500ms） */
async function _probeDomains(domains, pathname, size, refUrl, sub) {
  if (!domains || !domains.length) return [];
  if (domains.length === 1) return [domains[0]];
  var token0 = soraToken(pathname, 0, size);
  var preferred = _pickDomain(domains, sub, size);
  var tasks = domains.map(function (d) {
    var t0 = Date.now();
    var u = "https://" + d + "/sora/" + size + "/" + token0;
    return Widget.http.request({
      url: u,
      method: "GET",
      headers: { "User-Agent": UA, "Referer": refUrl, "Range": "bytes=0-63" },
      base64Data: true,
      timeout: 3500
    }).then(function (resp) {
      var st = resp ? Number(resp.statusCode != null ? resp.statusCode : (resp.status != null ? resp.status : 0)) : 0;
      if (st === 206 || st === 200) {
        var rtt = Date.now() - t0;
        if (d === preferred) rtt = Math.max(0, rtt - 30); // 同等延迟优先保留 sub 节点
        return { domain: d, rtt: rtt };
      }
      return null;
    }).catch(function () { return null; });
  });
  var results = await Promise.all(tasks);
  var alive = results.filter(Boolean).sort(function (a, b) { return a.rtt - b.rtt; }).map(function (x) { return x.domain; });
  return alive.length ? alive : [preferred];
}
function _lineName(src) {
  var label = String(src.label || src.codec || "原画");
  var st = _sizeText(src.size);
  return st ? (label + " · " + st) : label;
}
function _lineItem(name, hls, refUrl) {
  var heads = { "User-Agent": UA, "Referer": refUrl };
  return {
    name: name,
    url: hls.url,
    format: "hls",
    bytes: hls.manifestBytes,
    headers: heads,
    customHeaders: heads,
    playerType: "app"
  };
}

/* sora 分片源：文件被切成 PART 大小的独立资源，令牌在模块内现铸 */
async function _buildSoraLine(src, ctx, domainOverride, labelSuffix) {
  var size = Number(src.size || 0), resId = src.res_id;
  if (!size || resId == null) return null;
  var domains = ctx.media.domains || [];
  if (!domains.length) return null;
  var pathname = "/mp4/" + ctx.md5id + "/" + resId + "/" + size + "/" + PART;
  var ranked = ctx._rankedDomains || null;
  if (!ranked) {
    ranked = await _probeDomains(domains, pathname, size, ctx.playerUrl, src.sub ? String(src.sub) : "");
    ctx._rankedDomains = ranked;
  }
  var domain = domainOverride || ranked[0] || _pickDomain(domains, src.sub ? String(src.sub) : "", size);
  var head = { "User-Agent": UA, "Referer": ctx.playerUrl };
  function partUrl(i) { return "https://" + domain + "/sora/" + size + "/" + soraToken(pathname, i, size); }
  async function fetchRange(a, b) {
    var chunks = [], at = a;
    while (at <= b) {
      var i = Math.floor(at / PART), inPart = at - i * PART;
      var n = Math.min(b - at + 1, PART - inPart);
      var h = { "User-Agent": UA, "Referer": ctx.playerUrl, "Range": "bytes=" + inPart + "-" + (inPart + n - 1) };
      var r = await _reqBytes(partUrl(i), h);
      if (r.status !== 206 || r.bytes.length !== n) throw new Error("分片取数失败");
      chunks.push(r.bytes);
      at += n;
    }
    var bytes = new Uint8Array(b - a + 1), off = 0;
    for (var j = 0; j < chunks.length; j++) { bytes.set(chunks[j], off); off += chunks[j].length; }
    return bytes;
  }
  /* 元数据读取窗口化：核心先读 64KB 前缀定位 moov、再读 moov 余段（两次往返）。
     适配器首读直接拉 1.5MiB 窗口（moov 多在此内），后续子范围本地切片，
     两次请求并成一次；moov 超窗时按需补拉，不回退正确性。 */
  var WIN = 1572864, wins = [];
  async function request(nominal, opts) {
    var rm = /bytes=(\d+)-(\d*)/.exec((opts && opts.headers && opts.headers.Range) || "");
    if (!rm) throw new Error("缺少 Range");
    var a = Number(rm[1]), b = rm[2] ? Number(rm[2]) : size - 1;
    if (b >= size) b = size - 1;
    for (var w = 0; w < wins.length; w++) {
      var win = wins[w];
      if (a >= win.start && b < win.start + win.bytes.length) return _rangeResp(a, b, size, win.bytes.subarray(a - win.start, b - win.start + 1));
    }
    var end = Math.min(size - 1, Math.max(b, a + WIN - 1));
    var wbytes = await fetchRange(a, end);
    wins.push({ start: a, bytes: wbytes });
    return _rangeResp(a, b, size, wbytes.subarray(0, b - a + 1));
  }
  var meta = await HJCORE.readCencMetadata("https://" + domain + "/media", request);
  var plan = HJCORE.planCencFragments(meta);
  function urlForRange(offset, length) {
    var segs = [], at = offset, left = length;
    while (left > 0) {
      var i = Math.floor(at / PART), inPart = at - i * PART;
      var n = Math.min(left, PART - inPart);
      segs.push({ url: partUrl(i), offset: inPart, length: n });
      at += n; left -= n;
    }
    return segs;
  }
  var hls = HJCORE.memoryCencStreamHls(HJCORE.padCencStreamHls(HJCORE.buildCencStreamHls(plan, { urlForRange: urlForRange })));
  var baseName = _lineName(src);
  return _lineItem(labelSuffix ? (baseName + " · " + labelSuffix) : baseName, hls, ctx.playerUrl);
}

/* 旧形态源：整文件直链，前 64KB 被 AES-256-CTR 加密（key = md5(文件名)）。
   元数据读取时在途解密头部；分片数据都在 mdat（明文区），播放器直拉原址。 */
async function _buildFdLine(src, ctx) {
  var up = String(src.url).replace(/\/+$/, "") + "/" + String(src.path).replace(/^\/+/, "");
  var fname = up.split("?")[0].split("/").pop();
  var declared = Number(src.size || 0);
  async function request(nominal, opts) {
    var rm = /bytes=(\d+)-(\d*)/.exec((opts && opts.headers && opts.headers.Range) || "");
    if (!rm) throw new Error("缺少 Range");
    var a = Number(rm[1]), b = rm[2] ? Number(rm[2]) : a;
    var h = { "User-Agent": UA, "Referer": ctx.playerUrl, "Range": "bytes=" + a + "-" + b };
    var r = await _reqBytes(up, h);
    if (r.status !== 206) throw new Error("源站取数失败 " + r.status);
    var bytes = r.bytes;
    if (a < ENC_HEAD) {
      var n = Math.min(bytes.length, ENC_HEAD - a);
      var dec = siteDecrypt(fname, bytes.subarray(0, n), a);
      var merged = new Uint8Array(bytes.length);
      merged.set(dec, 0);
      merged.set(bytes.subarray(n), n);
      bytes = merged;
    }
    var total = declared;
    var cr = /\/(\d+)\s*$/.exec(r.headers["content-range"] || "");
    if (cr) total = Number(cr[1]);
    if (!total) throw new Error("源站未报总大小");
    return _rangeResp(a, Math.min(b, a + bytes.length - 1), total, bytes);
  }
  var meta = await HJCORE.readCencMetadata(up, request);
  var plan = HJCORE.planCencFragments(meta);
  function urlForRange(offset, length) { return [{ url: up, offset: offset, length: length }]; }
  var hls = HJCORE.memoryCencStreamHls(HJCORE.padCencStreamHls(HJCORE.buildCencStreamHls(plan, { urlForRange: urlForRange })));
  return _lineItem(_lineName(src), hls, ctx.playerUrl);
}

/* 线路缓存（3 槽 FIFO，按集 code 存）：清单铸造是确定性的（同一集＋同一组
   源 → 同一清单），但要读 moov 并逐样本规划，设备上耗时明显。条目含整组
   源指纹（label/res_id/size/sub/url/path＋域名列表的 md5）：写入或验活通过
   后 30 分钟内是信任期，重复取流零网络直出（失败重试、退出重进都秒出）；
   信任期外先拉播放页验指纹，指纹一致才用缓存并续信任期，源组任一变化
   自动失效重铸。任一被尝试的源构建失败时不写缓存（不钉住缺线状态）；
   单条 ≤10MB、条目 7 天过期；写不进/读不出都静默回退现铸，绝不影响播放。 */
async function _stGet(k) {
  try {
    var s = Widget.storage;
    if (!s) return null;
    var v = s.getItem ? s.getItem(k) : (s.get ? await s.get(k) : null);
    if (v && typeof v.then === "function") v = await v;
    return typeof v === "string" ? v : null;
  } catch (e) { return null; }
}
async function _stSet(k, val) {
  try {
    var s = Widget.storage;
    if (!s) return;
    var r = s.setItem ? s.setItem(k, val) : (s.set ? s.set(k, val) : null);
    if (r && typeof r.then === "function") await r;
  } catch (e) { /* 缓存写失败无所谓 */ }
}
async function _stRemove(k) {
  try {
    var s = Widget.storage;
    if (!s) return;
    var r = s.removeItem ? s.removeItem(k) : (s.remove ? s.remove(k) : null);
    if (r && typeof r.then === "function") await r;
  } catch (e) { /* 删不掉就留着，无所谓 */ }
}

async function loadResource(arg) {
  var link = _unwrap(arg);
  var code = _parseEpLink(link);
  if (!code) {
    var post = _parsePostLink(link);
    if (post) {
      var detail = await loadDetail(link);
      if (detail && detail.episodeItems && detail.episodeItems.length) code = _parseEpLink(detail.episodeItems[0].link);
    }
  }
  if (!code) return [];
  /* 信任期快速通道：条目按集 code 存，写入/验活后 30 分钟内重复取流
     （失败重试、退出重进）零网络直出；过期则走下面的指纹验活。 */
  var entry = null;
  var rawEntry = await _stGet("hjman4:" + code);
  if (rawEntry) {
    try { entry = JSON.parse(rawEntry); } catch (e) { entry = null; }
    if (entry && entry.trust > Date.now() && Array.isArray(entry.lines) && entry.lines.length && entry.lines[0] && entry.lines[0].url) return entry.lines;
  }
  var ctx = await _resolvePlayer(code);
  var srcs = (ctx.media.sources || []).filter(function (s) {
    return s && s.status !== false && String(s.status || "").toLowerCase() !== "false";
  });
  srcs.sort(function (x, y) {
    var px = parseInt(x.label, 10) || 0, py = parseInt(y.label, 10) || 0;
    if (py !== px) return py - px;
    return Number(y.size || 0) - Number(x.size || 0);
  });
  var fp = null;
  if (srcs.length) {
    try {
      var fpRaw = srcs.map(function (s) {
        return [s.label || "", s.res_id == null ? "" : s.res_id, Number(s.size || 0), s.sub || "", s.url || "", s.path || ""].join(":");
      }).join(";") + "#" + ((ctx.media.domains || []).join(","));
      fp = md5hex(fpRaw);
    } catch (e) { fp = null; }
  }
  if (fp && entry && entry.fp === fp && entry.exp > Date.now() && Array.isArray(entry.lines) && entry.lines.length && entry.lines[0] && entry.lines[0].url) {
    try {
      entry.trust = Date.now() + 30 * 60 * 1000;
      await _stSet("hjman4:" + code, JSON.stringify(entry));
    } catch (e) { /* 刷新信任期失败无所谓 */ }
    return entry.lines;
  }
  var out = [], seenUrl = {}, buildFailed = false;
  async function buildOne(s, dom, suffix) {
    try {
      return (s.url && s.path) ? await _buildFdLine(s, ctx) : await _buildSoraLine(s, ctx, dom, suffix);
    } catch (e) { return null; }
  }
  function take(line) {
    if (!line) { buildFailed = true; return; }
    if (!seenUrl[line.url]) { seenUrl[line.url] = 1; out.push(line); }
  }
  /* 先构建主源（触发一次 CDN 并发测速并缓存到 ctx._rankedDomains），再并发补齐次选清晰度 */
  if (srcs.length) take(await buildOne(srcs[0]));
  if (srcs.length > 1) {
    var restLines = await Promise.all(srcs.slice(1, 3).map(function (s) { return buildOne(s); }));
    for (var h = 0; h < restLines.length && out.length < 3; h++) take(restLines[h]);
  }
  for (var i = 3; i < srcs.length && out.length < 3; i++) take(await buildOne(srcs[i]));
  /* 若可用线路不足 2 条且存在次优健康 CDN 节点，补充一条备用节点线路方便卡顿时切换 */
  if (out.length < 2 && srcs.length && !(srcs[0].url && srcs[0].path) && ctx._rankedDomains && ctx._rankedDomains.length > 1) {
    take(await buildOne(srcs[0], ctx._rankedDomains[1], "备用节点"));
  }
  if (!out.length) throw new Error("没有可播放的源");
  if (fp && !buildFailed) {
    try {
      var now = Date.now();
      var payload = JSON.stringify({ exp: now + 7 * 86400 * 1000, trust: now + 30 * 60 * 1000, fp: fp, lines: out });
      if (payload.length <= 10 * 1024 * 1024) {
        await _stSet("hjman4:" + code, payload);
        var idx = [];
        try { idx = JSON.parse((await _stGet("hjmanidx")) || "[]"); if (!Array.isArray(idx)) idx = []; } catch (e) { idx = []; }
        idx = [code].concat(idx.filter(function (k) { return k !== code && typeof k === "string" && k.indexOf("|") < 0; }));
        var evict = idx.slice(3);
        await _stSet("hjmanidx", JSON.stringify(idx.slice(0, 3)));
        for (var ei = 0; ei < evict.length; ei++) await _stRemove("hjman4:" + evict[ei]);
        await _stRemove("hjman1"); /* 清 v3.0.1 单槽旧键 */
      }
    } catch (e) { /* 序列化/写入失败无所谓 */ }
  }
  return out;
}
