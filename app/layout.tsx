import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerTitleAlign: "center",
        contentStyle: { backgroundColor: "#fff" }, 
        headerStyle: { backgroundColor: "#fff" },   
        headerTintColor: "#111",
      }}
    >
      <Stack.Screen name="index" options={{ title: "Anmeldung" }} />
      <Stack.Screen name="home"  options={{ title: "Startseite" }} />
    </Stack>
  );
}
