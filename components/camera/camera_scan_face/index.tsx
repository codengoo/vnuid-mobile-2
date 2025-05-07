import emd from "@/assets/data/emd.json";
import { ICameraFaceResult } from "@/helpers/checkin";
import { useRef } from "react";
import { useFrameProcessor, VisionCameraProxy } from "react-native-vision-camera";
import { Worklets } from "react-native-worklets-core";
import { AtCamera } from "../camera";

interface ICameraScanFaceProps {
  children: React.ReactNode;
  onResult: (result: ICameraFaceResult) => void;
}

export function CameraScanFace({ children, onResult }: ICameraScanFaceProps) {
  const plugin = VisionCameraProxy.initFrameProcessorPlugin("rnai", {});
  const lastProcessedTimeRef = useRef(0);
  const fpsLimit = 1;
  const minFrameInterval = 1000 / fpsLimit;
  const myFunctionJS = onResult ? Worklets.createRunOnJS(onResult) : null;

  const frameProcessor = useFrameProcessor((frame) => {
    "worklet";
    const now = Date.now();
    if (now - lastProcessedTimeRef.current >= minFrameInterval) {
      lastProcessedTimeRef.current = now;

      if (plugin == null) throw new Error("Failed to load Frame Processor Plugin!");
      const raw = plugin.call(frame, { embedding: emd.embedding, position: "front" });
      try {
        const result = JSON.parse(raw as string) as ICameraFaceResult;
        myFunctionJS && myFunctionJS(result);
      } catch (error) {
        console.log(error);
      }
    }
  }, []);

  return (
    <AtCamera position="front" frameProcessor={frameProcessor}>
      {children}
    </AtCamera>
  );
}
