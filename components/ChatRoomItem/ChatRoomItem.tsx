import React from "react";
import { Text, View, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";

export default function ChatRoomItem(props: any) {
  const { chatRoom } = props;
  const user = chatRoom.users[1];
  const navigation = useNavigation();
  const onPress = () => {
    navigation.navigate("ChatRoom", { id: chatRoom.id });
  };
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Image
        source={{
          uri: user.imageUri,
        }}
        style={styles.image}
      />
      {chatRoom.lastMessage.content ? (
        <View style={styles.badgeContainer}>
          <Text style={styles.badgeText}>4</Text>
        </View>
      ) : null}
      <View style={styles.rightContainer}>
        <View style={styles.row}>
          <Text style={styles.name}>{user.name}</Text>
          <Text style={styles.text}>{chatRoom.lastMessage.createdAt}</Text>
        </View>
        <Text numberOfLines={1} style={styles.text}>
          {chatRoom.lastMessage.content}
        </Text>
      </View>
    </Pressable>
  );
}
