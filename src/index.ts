import type { Ele, Doc, QuerySelector } from "./types";
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
