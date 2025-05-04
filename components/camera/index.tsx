import { useIsFocused } from "@react-navigation/native";
import { useEffect, useRef } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Camera,
  CameraPosition,
  CameraProps,
  useCameraDevice,
  useCameraPermission,
} from "react-native-vision-camera";

interface ICameraProps
  extends Pick<CameraProps, "codeScanner" | "frameProcessor"> {
  position: CameraPosition;
  children?: React.ReactNode;
}

export function AtCamera({ position, children, ...props }: ICameraProps) {
  const { hasPermission, requestPermission } = useCameraPermission();
  const device = useCameraDevice(position);
  const isFocused = useIsFocused();
  const camera = useRef<Camera>(null);

  useEffect(() => {
    if (!hasPermission) {
      requestPermission();
    }
  }, [hasPermission, requestPermission]);

  if (!device)
    return (
      <View>
        <Text>No device</Text>
      </View>
    );

  const capture = async () => {
    if (!camera.current) return;
  };

  return (
    <View style={{ flex: 1 }}>
      <Camera
        video={true}
        ref={camera}
        device={device}
        style={StyleSheet.absoluteFill}
        isActive={isFocused}
        pixelFormat="yuv"
        {...props}
      />
      <SafeAreaView style={styles.overlay} edges={["bottom", "top"]}>
        {children}
        <TouchableOpacity onPress={capture}>
          <Text>Chup anh</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject, // full screen
  },
});
