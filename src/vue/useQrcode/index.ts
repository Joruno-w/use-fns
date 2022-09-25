import qrcode from "easyqrcodejs";
import { ref, unref, watch } from "vue";
import { MaybeRef } from "../types";

interface QRCodeOptions {
  onRenderingStart?: (qrCodeOptions: any) => void;
  onRenderingEnd?: (qrCodeOptions: any, dataURL: string) => void;
}

const useQRCode = (text: MaybeRef<string>, options?: QRCodeOptions) => {
  const qc = ref<string>("");

  const Qrcode = new qrcode(document.createElement("div"), {
    text: unref(text),
    onRenderingEnd(qrCodeOptions: any, dataURL: string) {
      qc.value = dataURL;
      options?.onRenderingEnd?.(qrCodeOptions, dataURL);
    },
  });

  watch(ref(text), () => Qrcode.makeCode(qc.value));

  return qc;
};

export default useQRCode;
