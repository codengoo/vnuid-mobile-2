import { Colors, FontFamily, fontSize } from "@/constants";
import {
  BaseToast,
  default as OriginalToast,
  ToastConfig,
} from "react-native-toast-message";

const toastConfig: ToastConfig = {
  success: (props) => (
    <BaseToast
      {...props}
      style={{
        borderLeftWidth: 0,
        borderRadius: 16,
        elevation: 4,
        marginTop: 12,
        height: "auto",
      }}
      text1Style={{
        fontFamily: FontFamily.Prompt,
        fontWeight: "600",
        fontSize: fontSize(16),
      }}
      text2Style={{
        fontFamily: FontFamily.Prompt,
        fontWeight: "600",
        fontSize: fontSize(12),
      }}
      contentContainerStyle={{
        borderWidth: 1.5,
        borderColor: Colors.green300,
        borderRadius: 16,
        paddingVertical: 12,
      }}
    />
  ),

  error: (props) => (
    <BaseToast
      {...props}
      style={{
        borderLeftWidth: 0,
        borderRadius: 16,
        elevation: 4,
        marginTop: 12,
        height: "auto",
      }}
      text1Style={{
        fontFamily: FontFamily.Prompt,
        fontWeight: "600",
        fontSize: fontSize(16),
        color: Colors.red300,
      }}
      text2Style={{
        fontFamily: FontFamily.Prompt,
        fontWeight: "600",
        fontSize: fontSize(12),
      }}
      contentContainerStyle={{
        borderWidth: 1.5,
        borderColor: Colors.red300,
        backgroundColor: Colors.red100,
        borderRadius: 16,
        paddingVertical: 12,
      }}
    />
  ),
};

export const Toast = () => <OriginalToast config={toastConfig} />;
