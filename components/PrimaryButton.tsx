import { Pressable, Text } from "react-native";

export default function PrimaryButton({
  title, onPress, disabled,
}: { title: string; onPress: () => void; disabled?: boolean }) {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }) => ({
        backgroundColor: disabled ? "#9ca3af" : "#2563eb",
        padding: 14,
        borderRadius: 10,
        alignItems: "center",
        opacity: pressed ? 0.85 : 1,
      })}
    >
      <Text style={{ color: "white", fontWeight: "700" }}>{title}</Text>
    </Pressable>
  );
}
