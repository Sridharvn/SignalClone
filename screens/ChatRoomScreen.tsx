import { View, Text, StyleSheet, FlatList, SafeAreaView } from "react-native";
import React from "react";
import Message from "../components/Message";
import ChatRoomData from "../assets/dummy-data/Chats";
import MessageInput from "../components/MessageInput";
import { useRoute, useNavigation } from "@react-navigation/native";

export default function ChatRoomScreen() {
  const route = useRoute();
  console.warn("Displaying chat room of :", route.params?.id);
  const navigation = useNavigation();
  navigation.setOptions({
    title: route.params.id ? route.params.id : "No Username",
  });
  return (
    <SafeAreaView style={styles.page}>
      <FlatList
        data={ChatRoomData.messages}
        renderItem={({ item }) => <Message message={item} />}
        inverted
        // style={styles.messages}
      />
      <MessageInput />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  page: {
    backgroundColor: "white",
    flex: 1,
  },
  //   messages: {
  //     marginTop: "auto",
  //     backgroundColor: "red",
  //   },
});
