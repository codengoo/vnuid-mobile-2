import { COLOR, Space, space } from "@/constants";
import {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { ReactNode, forwardRef, useCallback } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

interface IAtBottomSheetProps {
  children: ReactNode;
  hasBackdrop?: boolean;
  backgroundColor?: string;
  snapPoints?: string[];
  paddingSide?: boolean
}

export const AtBottomSheet = forwardRef<BottomSheetModal, IAtBottomSheetProps>(
  ({ children, hasBackdrop = true, backgroundColor = COLOR.background, snapPoints, paddingSide = true }, ref) => {
    const renderBackdrop = useCallback(
      (props: BottomSheetBackdropProps) => (
        <BottomSheetBackdrop
          {...props}
          disappearsOnIndex={-1}
          appearsOnIndex={0}
          style={{
            backgroundColor: "grey",
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: "100%",
          }}
        />
      ),
      []
    );

    return (
      <BottomSheetModalProvider>
        <BottomSheetModal
          enablePanDownToClose={false}
          ref={ref}
          backdropComponent={hasBackdrop ? renderBackdrop : null}
          handleStyle={{
            backgroundColor: backgroundColor,
          }}
          style={{
            borderRadius: space(28),
            overflow: "hidden",
            margin: paddingSide ? space(16): 0,
            marginTop: 0,
          }}
          snapPoints={snapPoints ? snapPoints : undefined}
          index={snapPoints ? 1 : undefined}
        >
          <BottomSheetView style={{ backgroundColor, flex: 1 }}>
            <SafeAreaView edges={["bottom"]} style={{ padding: Space.sd, flex: 1 }}>
              {children}
            </SafeAreaView>
          </BottomSheetView>
        </BottomSheetModal>
      </BottomSheetModalProvider>
    );
  }
);
