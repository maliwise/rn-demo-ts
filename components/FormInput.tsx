import { View, TextInput, Text } from "react-native";

type Props = {
  label: string;
  value: string;
  onChangeText: (t: string) => void;
  secureTextEntry?: boolean;
  keyboardType?: "default" | "email-address";
};

export default function FormInput({
  label, value, onChangeText, secureTextEntry, keyboardType = "default",
}: Props) {
  return (
    <View style={{ width: "100%", marginBottom: 12 }}>
      <Text style={{ marginBottom: 6, fontWeight: "600" }}>{label}</Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        autoCapitalize="none"
        style={{ borderWidth: 1, borderColor: "#ddd", borderRadius: 8, padding: 12 }}
        placeholder={label}
      />
    </View>
  );
}
