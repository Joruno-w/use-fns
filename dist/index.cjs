'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const vue = require('vue');

const paramsSymbol = Symbol("paramsSymbol");
function useToggle(arr, order = "asc", start = 0, end = arr.length) {
  const values = arr.slice(start, end).map((m) => vue.unref(m));
  const len = values.length;
  let i = order === "asc" ? start : order === "desc" ? end - 1 : Math.random() * (len - 1) | 0;
  let v = vue.ref();
  v.value = values[i];
  const toggle = (params = paramsSymbol) => {
    if (params !== paramsSymbol) {
      v.value = params;
      return;
    }
    switch (order) {
      case "asc":
        i = (i + 1) % len;
        v.value = values[i];
        break;
      case "desc":
        i = (i + len - 1) % len;
        v.value = values[i];
        break;
      case "random":
        i = Math.random() * (len - 1) | 0;
        v.value = values[i];
    }
  };
  return {
    i,
    v,
    values,
    toggle
  };
}

function useBoolean(value = false) {
  const { v, toggle } = useToggle([value, !value]);
  const setTrue = () => toggle(true);
  const setFalse = () => toggle(false);
  return {
    v,
    setTrue,
    setFalse,
    toggle
  };
}

const useTypeOf = (obj) => {
  return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
};
const useDebounce = (cb, wait = 500) => {
  let timer;
  return function() {
    timer && clearTimeout(timer);
    timer = setTimeout(() => {
      cb.apply(this, arguments);
    }, wait);
  };
};
const useThrottle = (cb, wait = 500) => {
  let last = 0;
  return function() {
    let now = +new Date();
    if (now - last > wait) {
      cb.apply(this, arguments);
      last = now;
    }
  };
};
const useHideMobile = (mobile) => {
  return mobile.replace(/^(\d{3})\d{4}(\d{4})$/, "$1****$2");
};
const useLaunchFullscreen = (element) => {
  if (element.requestFullscreen) {
    element.requestFullscreen();
  } else if (element.mozRequestFullscreen) {
    element.mozRequestFullscreen();
  } else if (element.msRequestFullscreen) {
    element.msRequestFullscreen();
  } else if (element.webkitRequestFullscreen) {
    element.webkitRequestFullscreen();
  }
};
const useExitFullscreen = () => {
  const doc = document;
  if (doc.exitFullscreen) {
    doc.exitFullscreen();
  } else if (doc.msExitFullscreen) {
    doc.msExitFullscreen();
  } else if (doc.mozCancelFullScreen) {
    doc.mozCancelFullScreen();
  } else if (doc.webkitExitFullscreen) {
    doc.webkitExitFullscreen();
  }
};
const useTurnCase = (str, type) => {
  switch (type) {
    case 1:
      return str.toUpperCase();
    case 2:
      return str.toLowerCase();
    case 3:
      return str[0].toUpperCase() + str.substring(1).toLowerCase();
    default:
      return str;
  }
};
const useSearchParams = () => {
  return location.search ? Object.fromEntries(new URLSearchParams(location.search)) : {};
};
const useSysType = () => {
  const u = navigator.userAgent;
  const isAndroid = u.indexOf("Android") > -1 || u.indexOf("Linux") > -1;
  const isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
  if (isIOS) {
    return "ios";
  }
  if (isAndroid) {
    return "android";
  }
  return "";
};
const useUniqueArrObj = (arr, key) => {
  if (!arr.length)
    return;
  return Object.values(
    arr.reduce((acc, item) => {
      acc[item[key]] || (acc[item[key]] = item);
    }, {})
  );
};
const useScrollToTop = () => {
  const height = document.documentElement.scrollTop || document.body.scrollTop;
  if (height > 0) {
    window.requestAnimationFrame(useScrollToTop);
    window.scrollTo(0, height - height / 8);
  }
};
const useSmoothScroll = (selector) => {
  const ele = document.querySelector(selector) || document.body;
  ele.scrollIntoView({
    behavior: "smooth"
  });
};
const useUUID = () => {
  const temp_url = URL.createObjectURL(new Blob());
  const uuid = temp_url.toString();
  URL.revokeObjectURL(temp_url);
  return uuid.substring(uuid.lastIndexOf("/") + 1);
};
const useMoneyFormat = ({
  number,
  decimals = 2,
  dec_point: dec = ".",
  thousands_sep: sep = ","
}) => {
  number = +(number + "").replace(/[^0-9+-Ee.]/g, "");
  const n = !isFinite(number) ? 0 : +number;
  const prec = !isFinite(decimals) ? 2 : Math.abs(decimals);
  let s;
  const toFixedFix = function(n2, prec2) {
    const k = Math.pow(10, prec2);
    return "" + Math.ceil(n2 * k) / k;
  };
  s = (prec ? toFixedFix(n, prec) : "" + Math.round(n)).split(".");
  const reg = /(-?\d+)(\d{3})/;
  while (reg.test(s[0])) {
    s[0] = s[0].replace(reg, "$1" + sep + "$2");
  }
  if ((s[1] || "").length < prec) {
    s[1] = s[1] || "";
    s[1] += new Array(prec - s[1].length + 1).join("0");
  }
  return s.join(dec);
};
class MyCache {
  constructor(isLocal = true) {
    this.storage = isLocal ? localStorage : sessionStorage;
  }
  setItem(key, value) {
    if (typeof value === "object" && value !== null)
      value = JSON.stringify(value);
    this.storage.setItem(key, value);
  }
  getItem(key) {
    try {
      return JSON.parse(this.storage.getItem(key));
    } catch (err) {
      return this.storage.getItem(key);
    }
  }
  removeItem(key) {
    this.storage.removeItem(key);
  }
  clear() {
    this.storage.clear();
  }
  key(index) {
    return this.storage.key(index);
  }
  length() {
    return this.storage.length;
  }
}
const useLocalCache = new MyCache();
const useSessionCache = new MyCache(false);
const useFuzzyQuery = (list, keyWord, attr) => {
  const reg = new RegExp(keyWord);
  return list.reduce(
    (acc, item) => (reg.test(item[attr]), acc.push(item), acc),
    []
  );
};
const useForeachTree = (data, cb, childrenName) => {
  for (let i = 0; i < data.length; i++) {
    cb(data[i]);
    data[i][childrenName] && data[i][childrenName].length > 0 && useForeachTree(data[i][childrenName], cb, childrenName);
  }
};
const useCharacterCount = (str, char) => str.split(char).length - 1;
const useIsEmptyObj = (obj) => Reflect.ownKeys(obj).length === 0 && obj.constructor === Object;
const useDelay = async (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const useDaysBetween = (d1, d2) => Math.ceil(Math.abs(d1 - d2) / (1e3 * 60 * 60 * 24));
const useRedirect = (url) => location.href = url;
const useTouchSupported = () => "ontouchstart" in window || DocumentTouch && document instanceof DocumentTouch;
const useInsertHTMLAfter = (html, el) => el.insertAdjacentHTML("afterend", html);
const useShuffle = (arr) => arr.sort(() => Math.random() - 0.5);
const useGetSelectedText = () => window.getSelection()?.toString() || "";
const useGetRandomBoolean = () => Math.random() >= 0.5;
const useSum = (arr) => arr.reduce((a, b) => a + b);
const useAverage = (arr) => useSum(arr) / arr.length;
const useIsUrl = (url, { lenient = false } = {}) => {
  if (typeof url !== "string") {
    throw new TypeError("Expected a string");
  }
  url = url.trim();
  if (url.includes(" "))
    return false;
  try {
    new URL(url);
    return true;
  } catch (e) {
    if (lenient) {
      return useIsUrl(`https://${url}`);
    }
    return false;
  }
};
const useGithubUrlFromGit = (url, opts = {}) => {
  const re = (opts2 = {}) => {
    var baseUrls = ["gist.github.com", "github.com"].concat(
      opts2.extraBaseUrls || []
    );
    return new RegExp(
      /^(?:https?:\/\/|git:\/\/|git\+ssh:\/\/|git\+https:\/\/)?(?:[^@]+@)?/.source + "(" + baseUrls.join("|") + ")" + /(?::\/?|\/)([^/]+\/[^/]+?|[0-9]+)$/.source
    );
  };
  try {
    var m = re(opts).exec(url.replace(/\.git(#.*)?$/, ""));
    var host = m[1];
    var path = m[2];
    return "https://" + host + "/" + path;
  } catch {
    return "";
  }
};
const useScopedRegex = (options = {}) => {
  const regex = "@[a-z\\d][\\w-.]+/[a-z\\d][\\w-.]*";
  return options && options.exact ? new RegExp(`^${regex}$`, "i") : new RegExp(regex, "gi");
};
const useIsScoped = (s) => {
  return useScopedRegex({ exact: true }).test(s);
};
const pkg = {
  useTypeOf,
  useDebounce,
  useThrottle,
  useHideMobile,
  useLaunchFullscreen,
  useExitFullscreen,
  useTurnCase,
  useSearchParams,
  useSysType,
  useUniqueArrObj,
  useScrollToTop,
  useSmoothScroll,
  useUUID,
  useMoneyFormat,
  useLocalCache,
  useSessionCache,
  useFuzzyQuery,
  useForeachTree,
  useCharacterCount,
  useIsEmptyObj,
  useDelay,
  useDaysBetween,
  useRedirect,
  useTouchSupported,
  useInsertHTMLAfter,
  useShuffle,
  useGetSelectedText,
  useGetRandomBoolean,
  useSum,
  useAverage,
  useIsUrl,
  useGithubUrlFromGit,
  useScopedRegex,
  useIsScoped
};
module.exports = pkg;

exports["default"] = pkg;
exports.useAverage = useAverage;
exports.useBoolean = useBoolean;
exports.useCharacterCount = useCharacterCount;
exports.useDaysBetween = useDaysBetween;
exports.useDebounce = useDebounce;
exports.useDelay = useDelay;
exports.useExitFullscreen = useExitFullscreen;
exports.useForeachTree = useForeachTree;
exports.useFuzzyQuery = useFuzzyQuery;
exports.useGetRandomBoolean = useGetRandomBoolean;
exports.useGetSelectedText = useGetSelectedText;
exports.useGithubUrlFromGit = useGithubUrlFromGit;
exports.useHideMobile = useHideMobile;
exports.useInsertHTMLAfter = useInsertHTMLAfter;
exports.useIsEmptyObj = useIsEmptyObj;
exports.useIsScoped = useIsScoped;
exports.useIsUrl = useIsUrl;
exports.useLaunchFullscreen = useLaunchFullscreen;
exports.useLocalCache = useLocalCache;
exports.useMoneyFormat = useMoneyFormat;
exports.useRedirect = useRedirect;
exports.useScopedRegex = useScopedRegex;
exports.useScrollToTop = useScrollToTop;
exports.useSearchParams = useSearchParams;
exports.useSessionCache = useSessionCache;
exports.useShuffle = useShuffle;
exports.useSmoothScroll = useSmoothScroll;
exports.useSum = useSum;
exports.useSysType = useSysType;
exports.useThrottle = useThrottle;
exports.useToggle = useToggle;
exports.useTouchSupported = useTouchSupported;
exports.useTurnCase = useTurnCase;
exports.useTypeOf = useTypeOf;
exports.useUUID = useUUID;
exports.useUniqueArrObj = useUniqueArrObj;
