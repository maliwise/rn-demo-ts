import { useState } from "react";
import { View, Text, Alert } from "react-native";
import { router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import FormInput from "../components/FormInput";
import PrimaryButton from "../components/PrimaryButton";
import { login } from "../lib/api";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async () => {
    try {
      setLoading(true);
      const res = await login(email, pwd);
      await AsyncStorage.setItem("token", res.token);
      router.replace("/home");
    } catch (e: any) {
      Alert.alert("Fehler", e?.message ?? "Anmeldung fehlgeschlagen");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={{ flex: 1, padding: 20, justifyContent: "center" }}>
      <Text style={{ fontSize: 24, fontWeight: "800", marginBottom: 24 }}>
        React Native Demo
      </Text>

      <FormInput
        label="E-Mail"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <FormInput
        label="Passwort"
        value={pwd}
        onChangeText={setPwd}
        secureTextEntry
      />

      <PrimaryButton
        title={loading ? "Anmeldung läuft ..." : "Anmelden"}
        onPress={onSubmit}
        disabled={loading}
      />

      <Text style={{ marginTop: 12, color: "#666" }}>
        Demo: Mindestens 4 Zeichen für E-Mail & Passwort.
      </Text>
    </View>
  );
}
