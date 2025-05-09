import { CameraScanFace } from "@/components";
import { COLOR, Colors, FontFamily, space } from "@/constants";
import { useHideTabBar } from "@/context";
import { getFace } from "@/helpers/checkin";
import { generateExpectedValue } from "@/helpers/checkin/checker";
import { useFocusEffect } from "@react-navigation/native";
import { router } from "expo-router";
import { useMemo, useState } from "react";
import { Text, View } from "react-native";

export default function CheckinScreen() {
  const { toggleTabBar } = useHideTabBar();
  const [face, setFace] = useState<number[]>([]);
  const expected = useMemo(() => generateExpectedValue(), []);

  const setupFace = async () => {
    const face = await getFace();
    if (face.length === 0) {
      router.navigate("/first_login");
    } else {
      setFace(face);
    }
  };

  useFocusEffect(() => {
    setupFace();
    toggleTabBar(false);
  });

  return (
    <CameraScanFace onResult={() => {}}>
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "space-between",
          padding: space(20),
        }}
      >
        <View style={{ alignItems: "center", width: "100%" }}>
          <View
            style={{
              backgroundColor: Colors.white,
              padding: space(20),
              borderRadius: space(20),
              borderWidth: space(2),
              borderColor: COLOR.borderInput,
              width: "100%",
            }}
          >
            <Text
              style={{
                fontSize: space(20),
                fontFamily: FontFamily.Prompt,
                fontWeight: "600",
                color: COLOR.text,
              }}
            >
              Checkin 7:00
            </Text>
            <Text
              style={{
                fontSize: space(14),
                fontFamily: FontFamily.Prompt,
                color: COLOR.text,
              }}
            >
              INT2203
            </Text>
          </View>

          <View
            style={{
              marginTop: space(20),
              paddingHorizontal: space(16),
              paddingVertical: space(8),
              borderRadius: space(99),
              backgroundColor: "white",
              borderWidth: space(1),
              borderColor: Colors.black500,
            }}
          >
            <Text style={{ fontFamily: FontFamily.Prompt, fontSize: space(14), fontWeight: "500" }}>
              Hướng mặt sang bên phải
            </Text>
          </View>
        </View>

        <View
          style={{
            backgroundColor: Colors.white,
            padding: space(20),
            borderRadius: space(20),
            gap: space(4),
          }}
        >
          <Text style={{ fontWeight: "500", fontFamily: FontFamily.Prompt, fontSize: space(16) }}>
            Kiểm tra vị trí thành công
          </Text>
          <View style={{ flexDirection: "row", gap: space(8) }}>
            <Text style={{ fontWeight: "500", fontFamily: FontFamily.Prompt, fontSize: space(16) }}>
              [00:1A:2B:3C:4D:5E]
            </Text>
            <View
              style={{
                backgroundColor: Colors.green300,
                padding: space(8),
                borderRadius: space(99),
              }}
            >
              <Text
                style={{
                  color: Colors.white,
                  fontFamily: FontFamily.Prompt,
                  fontWeight: "600",
                  fontSize: space(8),
                }}
              >
                OK
              </Text>
            </View>
          </View>
          <View style={{ flexDirection: "row", gap: space(8) }}>
            <Text style={{ fontWeight: "500", fontFamily: FontFamily.Prompt, fontSize: space(16) }}>
              [00:1A:2B:3C:4D:5F]
            </Text>
            <View
              style={{
                backgroundColor: Colors.green300,
                padding: space(8),
                borderRadius: space(99),
              }}
            >
              <Text
                style={{
                  color: Colors.white,
                  fontFamily: FontFamily.Prompt,
                  fontWeight: "600",
                  fontSize: space(8),
                }}
              >
                OK
              </Text>
            </View>
          </View>
        </View>
      </View>
    </CameraScanFace>
  );
}
