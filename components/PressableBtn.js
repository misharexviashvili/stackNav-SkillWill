import { Children } from "react";
import { Pressable, Text, StyleSheet, View } from "react-native";
export default function PressableBtn({ children, onNav }) {
  return (
    <View style={styles.pressableView}>
      <Pressable
        onPress={onNav}
        style={styles.pressable}
        android_ripple={{ color: "red", borderless: true }}
      >
        <Text style={styles.pressableText}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  pressableView: {
    borderRadius: 10,
    marginTop: 24,
    marginBottom: 10,
    backgroundColor: "#D4953F",
    borderColor: "#933FD4",
    borderWidth: 1.5,
  },
  pressable: {
    paddingVertical: 8,
    paddingHorizontal: 14,
  },
  pressableText: {
    color: "#fff",
    fontSize: 16,
  },
});
