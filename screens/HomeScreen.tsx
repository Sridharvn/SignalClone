import * as React from "react";
import { Text, StyleSheet, View, Image, FlatList } from "react-native";
import { RootTabScreenProps } from "../types";
import ChatRoomItem from "../components/ChatRoomItem";
import chatRoomsData from "../assets/dummy-data/ChatRooms";

const chatRoom1 = chatRoomsData[0];
const chatRoom2 = chatRoomsData[1];
// export default function TabOneScreen({
//   navigation,
// }: RootTabScreenProps<"TabOne">) {
export default function TabOneScreen() {
  return (
    <View style={styles.page}>
      {/* <FlatList
        data={chatRoomsData}
        renderItem={({ item }) => <ChatRoomItem chatRoom={item} />}
        ListHeaderComponent={() => (
          <FlatList
            data={chatRoomsData}
            renderItem={({ item }) => <ChatRoomItem chatRoom={item} />}
            horizontal
          />
        )}/> */}
      <FlatList
        data={chatRoomsData}
        renderItem={({ item }) => <ChatRoomItem chatRoom={item} />}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  page: {
    backgroundColor: "white",
    flex: 1,
  },
});
