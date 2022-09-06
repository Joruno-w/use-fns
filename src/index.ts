import type { Doc, Ele, QuerySelector, MoneyFormatParams } from "./types";

// 判断变量类型
export const useTypeOf = function (obj: any) {
  return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
};

// 防抖
export const useDebounce = (() => {
  let timer: NodeJS.Timeout;
  return (cb: () => void, wait = 500) => {
    timer && clearTimeout(timer);
    timer = setTimeout(cb, wait);
  };
})();

// 节流
export const useThrottle = (() => {
  let last: number = 0;
  return (cb: () => void, wait = 500) => {
    let now = +new Date();
    if (now - last > wait) {
      cb();
      last = now;
    }
  };
})();

// 手机号脱敏
export const useHideMobile = (mobile: string) => {
  return mobile.replace(/^(\d{3})\d{4}(\d{4})$/, "$1****$2");
};

// 开启全屏
export const useLaunchFullscreen = (element: Ele) => {
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
export const useExitFullscreen = () => {
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
export const useTurnCase = (str: string, type: number) => {
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
export const useSearchParams = () => {
  const searchParams: URLSearchParams = new URLSearchParams(
    window.location.search
  );
  const params: Record<string, string> = {};
  for (const [k, v] of searchParams.entries()) {
    params[k] = v;
  }
  return params;
};

// 判断端环境
export const useSysType = () => {
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
export const useUniqueArrObj = <
  T extends Record<keyof any, any>,
  U extends T[]
>(
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
export const useScrollToTop = () => {
  const height = document.documentElement.scrollTop || document.body.scrollTop;
  if (height > 0) {
    window.requestAnimationFrame(useScrollToTop);
    window.scrollTo(0, height - height / 8);
  }
};

// 滚动到元素位置
export const useSmoothScroll = (selector: QuerySelector) => {
  const ele = document.querySelector(selector) || document.body;
  ele.scrollIntoView({
    behavior: "smooth",
  });
};

// uuid
// 作用不大，基本上是后端生成...
export const useUUID = () => {
  const temp_url = URL.createObjectURL(new Blob());
  const uuid = temp_url.toString();
  URL.revokeObjectURL(temp_url); //释放这个url
  return uuid.substring(uuid.lastIndexOf("/") + 1);
};

// number：要格式化的数字
// decimals：保留几位小数
// dec_point：小数点符号
// thousands_sep：千分位符号
export const useMoneyFormat = ({
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

const useLocalCache = new MyCache();
const useSessionCache = new MyCache(false);

export { useLocalCache, useSessionCache };

// 模糊搜索
// list 原数组
// keyWord 查询的关键词
// attribute 数组需要检索属性
export const useFuzzyQuery = <T extends Record<keyof any, any>, K extends keyof T>(
  list: T[],
  keyWord: string,
  attr: K
) => {
  const reg = new RegExp(keyWord);
  return list.reduce(
    (acc, item) => (reg.test(item[attr]), acc.push(item), acc),
    [] as unknown[]
  );
};

// 遍历树节点
export const useForeachTree = <
  T extends Record<keyof any, any>,
  K extends keyof T
>(
  data: T[],
  cb: Function,
  childrenName: K
) => {
  for (let i = 0; i < data.length; i++) {
    cb(data[i]);
    data[i][childrenName] &&
      data[i][childrenName].length > 0 &&
      useForeachTree(data[i][childrenName], cb, childrenName);
  }
};
