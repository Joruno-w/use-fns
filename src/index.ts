import type {
  Doc,
  Ele,
  QuerySelector,
  MoneyFormatParams,
} from "./types";

// 判断变量类型
const useTypeOf = (obj: any) => {
  return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
};

// 防抖
const useDebounce = (cb: () => void, wait = 500) => {
  let timer: ReturnType<typeof setTimeout>;
  return function () {
    timer && clearTimeout(timer);
    timer = setTimeout(() => {
      // @ts-ignore
      cb.apply(this, arguments);
    }, wait);
  };
};

// 节流
const useThrottle = (cb: () => void, wait = 500) => {
  let last: number = 0;
  return function () {
    let now = +new Date();
    if (now - last > wait) {
      // @ts-ignore
      cb.apply(this, arguments);
      last = now;
    }
  };
};

// 手机号脱敏
const useHideMobile = (mobile: string) => {
  return mobile.replace(/^(\d{3})\d{4}(\d{4})$/, "$1****$2");
};

// 开启全屏
const useLaunchFullscreen = (element: Ele) => {
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

// 关闭全屏
const useExitFullscreen = () => {
  const doc: Doc = document;
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

// 全部大写/全部小写/首字母大写
const useTurnCase = (str: string, type: number) => {
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

// 解析URL参数
const useSearchParams = (): Record<string, string> => {
  return location.search
    ? Object.fromEntries(new URLSearchParams(location.search))
    : {};
};

// 判断端环境
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

// 数组对象根据字段去重
// arr 要去重的数组
// key 根据去重的字段名
const useUniqueArrObj = <T extends Record<string, any>, U extends T[]>(
  arr: U,
  key: keyof T
) => {
  if (!arr.length) return;
  return Object.values(
    arr.reduce((acc, item) => {
      acc[item[key]] || (acc[item[key]] = item);
    }, {} as any)
  );
};

// 滚动到页面顶部
const useScrollToTop = () => {
  const height = document.documentElement.scrollTop || document.body.scrollTop;
  if (height > 0) {
    window.requestAnimationFrame(useScrollToTop);
    window.scrollTo(0, height - height / 8);
  }
};

// 滚动到元素位置
const useSmoothScroll = (selector: QuerySelector) => {
  const ele = document.querySelector(selector) || document.body;
  ele.scrollIntoView({
    behavior: "smooth",
  });
};

// uuid
// 作用不大，基本上是后端生成...
const useUUID = () => {
  const temp_url = URL.createObjectURL(new Blob());
  const uuid = temp_url.toString();
  URL.revokeObjectURL(temp_url); //释放这个url
  return uuid.substring(uuid.lastIndexOf("/") + 1);
};

// number：要格式化的数字
// decimals：保留几位小数
// dec_point：小数点符号
// thousands_sep：千分位符号
const useMoneyFormat = ({
  number,
  decimals = 2,
  dec_point: dec = ".",
  thousands_sep: sep = ",",
}: MoneyFormatParams): string => {
  number = +(number + "").replace(/[^0-9+-Ee.]/g, "");
  const n = !isFinite(number) ? 0 : +number;
  const prec = !isFinite(decimals) ? 2 : Math.abs(decimals);
  let s;
  const toFixedFix = function (n: number, prec: number) {
    const k = Math.pow(10, prec);
    return "" + Math.ceil(n * k) / k;
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

// 存储操作
class MyCache {
  private storage: Storage;
  constructor(isLocal = true) {
    this.storage = isLocal ? localStorage : sessionStorage;
  }

  setItem(key: string, value: unknown) {
    if (typeof value === "object" && value !== null)
      value = JSON.stringify(value);
    this.storage.setItem(key, value as string);
  }

  getItem(key: string) {
    try {
      return JSON.parse(this.storage.getItem(key) as string);
    } catch (err) {
      return this.storage.getItem(key);
    }
  }

  removeItem(key: string) {
    this.storage.removeItem(key);
  }

  clear() {
    this.storage.clear();
  }

  key(index: number) {
    return this.storage.key(index);
  }

  length() {
    return this.storage.length;
  }
}

const useLocalCache = () => new MyCache();
const useSessionCache = () => new MyCache(false);

// 模糊搜索
// list 原数组
// keyWord 查询的关键词
// attribute 数组需要检索属性
const useFuzzyQuery = <T extends Record<string, any>, K extends keyof T>(
  list: T[],
  keyWord: string,
  attr: K
) => {
  const reg = new RegExp(keyWord,'i');
  return list.reduce(
    (acc, item) => (reg.test(item[attr]), acc.push(item), acc),
    [] as unknown[]
  );
};

// 遍历树节点
const useForeachTree = <T extends Record<string, any>>(
  data: T[],
  cb: Function,
  childrenName: keyof T
) => {
  for (let i = 0; i < data.length; i++) {
    cb(data[i]);
    data[i][childrenName] &&
      data[i][childrenName].length > 0 &&
      useForeachTree(data[i][childrenName], cb, childrenName);
  }
};

// 获取字符串中的字符数
const useCharacterCount = (str: string, char: string): number =>
  str.split(char).length - 1;

// 检查对象是否为空
const useIsEmptyObj = <T extends Record<string, any>>(obj: T): boolean =>
  Reflect.ownKeys(obj).length === 0 && obj.constructor === Object;

// 等待一段时间再执行
const useDelay = async (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

// 获取两个日期之间的日差
const useDaysBetween = (d1: number, d2: number): number =>
  Math.ceil(Math.abs(d1 - d2) / (1000 * 60 * 60 * 24));

// 重定向到另一个 URL
const useRedirect = (url: string) => (location.href = url);

// 检查设备上的触摸支持
const useTouchSupported = () =>
  "ontouchstart" in window ||
  // @ts-ignore
  (DocumentTouch && document instanceof DocumentTouch);

// 在元素后插入 HTML 字符串
const useInsertHTMLAfter = (html: string, el: Element) =>
  el.insertAdjacentHTML("afterend", html);

// 随机排列数组
const useShuffle = (arr: any[]) => arr.sort(() => Math.random() - 0.5);

// 在网页上获取选定的文本
const useGetSelectedText = () => window.getSelection()?.toString() || "";

// 获取随机布尔值
const useGetRandomBoolean = () => Math.random() >= 0.5;

// 计算数组的和
const useSum = (arr: any[]) => arr.reduce((a, b) => a + b, 0);

// 计算数组的平均值
const useAverage = (arr: any[]) => useSum(arr) / (arr.length || 1);

// 判断字符串是不是合法的URL
const useIsUrl = (
  url: string,
  { lenient = false }: { readonly lenient?: boolean } = {}
): boolean => {
  if (typeof url !== "string") {
    throw new TypeError("Expected a string");
  }
  url = url.trim();
  if (url.includes(" ")) return false;
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

// 将git地址转成github地址
const useGithubUrlFromGit = (
  url: string,
  opts: Record<string, any> = {}
): string => {
  const re = (opts: Record<string, any> = {}) => {
    // whitelist of URLs that should be treated as GitHub repos.
    var baseUrls = ["gist.github.com", "github.com"].concat(
      opts.extraBaseUrls || []
    );
    // build regex from whitelist.
    return new RegExp(
      /^(?:https?:\/\/|git:\/\/|git\+ssh:\/\/|git\+https:\/\/)?(?:[^@]+@)?/
        .source +
        "(" +
        baseUrls.join("|") +
        ")" +
        /(?::\/?|\/)([^/]+\/[^/]+?|[0-9]+)$/.source
    );
  };
  try {
    var m = re(opts).exec(url.replace(/\.git(#.*)?$/, "")) as any;
    var host = m[1];
    var path = m[2];
    return "https://" + host + "/" + path;
  } catch {
    return "";
  }
};

// 返回验证npm scoped的正则
const scopedRegex = (options: { exact?: boolean } = {}) => {
  const regex = "@[a-z\\d][\\w-.]+/[a-z\\d][\\w-.]*";
  return options && options.exact
    ? new RegExp(`^${regex}$`, "i")
    : new RegExp(regex, "gi");
};

// 检测字符串是不是npm scoped
const useIsScoped = (s: string) => {
  return scopedRegex({ exact: true }).test(s);
};

export * from './vue'

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
  useIsScoped 
}

export default pkg

export { 
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
  useIsScoped 
} 

