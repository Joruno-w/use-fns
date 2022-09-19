import { Ref, ref, unref } from "vue";

type MaybeRef<T> = T | Ref<T>;
type orderType = "asc" | "desc" | "random";

const paramsSymbol: unique symbol = Symbol("paramsSymbol");

interface UseToggleReturn<T> {
  i: number;
  v: Ref<T>;
  values: T[];
  toggle: (v?: any) => void;
}


function useToggle<T extends any>(
  arr: MaybeRef<T>[],
  order: orderType = "asc",
  start: number = 0,
  end: number =  arr.length
): UseToggleReturn<T> {
  const values = arr.slice(start,end).map((m) => unref(m));
  const len = values.length;
  let i = order === 'asc' ? start : order === 'desc' ? end - 1 : (Math.random() * (len - 1)) | 0;
  let v = ref( values[i]);

  const toggle = (params: any = paramsSymbol) => {
    if (params !== paramsSymbol) {
        v.value = params;
        return;
    }
    switch (order) {
      case "asc":
        i = (i + 1) % len;
        // @ts-ignore
        v.value = values[i];
        break;
      case "desc":
        i = (i + len - 1) % len;
        // @ts-ignore
        v.value = values[i];
        break;
      case "random":
        i = (Math.random() * (len - 1)) | 0;
        // @ts-ignore
        v.value = values[i];
    }
  };

  return {
    i,
    // @ts-ignore
    v,
    values,
    toggle,
  };
}

export default useToggle;
