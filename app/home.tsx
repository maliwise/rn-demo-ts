import { useEffect, useState, useCallback } from "react";
import { View, Text, FlatList, RefreshControl, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { fetchPosts, Post } from "../lib/api";

export default function HomeScreen() {
  const [data, setData] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const load = async () => {
    try {
      setLoading(true);
      const token = await AsyncStorage.getItem("token");
      if (!token) Alert.alert("Keine Sitzung", "Bitte erneut anmelden.");
      const posts = await fetchPosts();
      setData(posts);
    } catch (e: any) {
      Alert.alert("Fehler", e?.message ?? "Es ist ein Problem aufgetreten");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { load(); }, []);

  const onRefresh = useCallback(async () => {
    try {
      setRefreshing(true);
      setData(await fetchPosts());
    } catch (e: any) {
      Alert.alert("Fehler", e?.message ?? "Aktualisierung fehlgeschlagen");
    } finally {
      setRefreshing(false);
    }
  }, []);

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 22, fontWeight: "800", marginBottom: 12 }}>
        Beiträge
      </Text>

      <FlatList
        data={data}
        keyExtractor={(it) => String(it.id)}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        ListEmptyComponent={!loading ? <Text>Keine Daten vorhanden.</Text> : null}
        renderItem={({ item }) => (
          <View style={{ padding: 14, borderWidth: 1, borderColor: "#eee", borderRadius: 10, marginBottom: 10 }}>
            <Text style={{ fontWeight: "700" }}>#{item.id}</Text>
            <Text>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
}
