import { COLOR, Space, space } from '@/constants';
import {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import { ReactNode, forwardRef, useCallback } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

interface IAtBottomSheetProps {
  children: ReactNode;
}

export const AtBottomSheet = forwardRef<BottomSheetModal, IAtBottomSheetProps>(
  ({children}, ref) => {
    const renderBackdrop = useCallback(
      (props: BottomSheetBackdropProps) => (
        <BottomSheetBackdrop
          {...props}
          disappearsOnIndex={-1}
          appearsOnIndex={0}
          style={{
            backgroundColor: 'grey',
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            width: '100%',
          }}
        />
      ),
      [],
    );

    return (
      <BottomSheetModalProvider>
        <BottomSheetModal
          enablePanDownToClose
          ref={ref}
          backdropComponent={renderBackdrop}
          handleStyle={{
            backgroundColor: COLOR.background,
          }}
          style={{
            borderRadius: space(28),
            overflow: 'hidden',
            margin: space(16),
            marginTop: 0,
          }}>
          <BottomSheetView style={{backgroundColor: COLOR.background}}>
            <SafeAreaView edges={['bottom']} style={{padding: Space.sd}}>
              {children}
            </SafeAreaView>
          </BottomSheetView>
        </BottomSheetModal>
      </BottomSheetModalProvider>
    );
  },
);
