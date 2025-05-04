import { useRef } from "react";
import {
  VisionCameraProxy
} from "react-native-vision-camera";
import { AtCamera } from "../camera";
// import emd from "@/assets/data/emd.json"

interface ICameraScanFaceProps {
  children: React.ReactNode;
}

export function CameraScanFace({ children }: ICameraScanFaceProps) {
  const plugin = VisionCameraProxy.initFrameProcessorPlugin("rnai", {});
  const lastProcessedTimeRef = useRef(0);
  const fpsLimit = 1;
  const minFrameInterval = 1000 / fpsLimit;

  // const frameProcessor = useFrameProcessor(frame => {
  //   'worklet';
  //   const now = Date.now();
  //   if (now - lastProcessedTimeRef.current >= minFrameInterval) {
  //     lastProcessedTimeRef.current = now;

  //     if (plugin == null)
  //       throw new Error('Failed to load Frame Processor Plugin!');
  //     const t = plugin.call(frame, {embedding: emd.embedding});
  //     console.log(t);
  //   }
  // }, []);

  return <AtCamera position="back">{children}</AtCamera>;
}
