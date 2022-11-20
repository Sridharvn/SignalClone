import { View, Text, StyleSheet, FlatList, SafeAreaView } from "react-native";
import React from "react";
import Message from "../components/Message";
import ChatRoomData from "../assets/dummy-data/Chats";
import MessageInput from "../components/MessageInput";

export default function ChatRoomScreen() {
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
