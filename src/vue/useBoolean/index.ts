import { Ref } from "vue";
import useToggle from "../useToggle";

interface UseBooleanReturn {
  v: Ref<boolean>;
  toggle: () => void;
  setTrue: () => void;
  setFalse: () => void;
}
/**
 *
 * @param defaultValue
 * @returns
 */
function useBoolean(value: boolean = false): UseBooleanReturn {
  const { v, toggle } = useToggle([value, !value]);
  const setTrue = () => toggle(true);
  const setFalse = () => toggle(false);
  return {
    v,
    setTrue,
    setFalse,
    toggle,
  };
}

export default useBoolean;
