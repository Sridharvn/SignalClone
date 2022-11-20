import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";
import React from "react";
import { useState } from "react";
import {
  SimpleLineIcons,
  Feather,
  MaterialCommunityIcons,
  AntDesign,
  Ionicons,
} from "@expo/vector-icons";

const MessageInput = () => {
  const [message, setMessage] = useState("");
  const sendMessage = () => {
    console.warn("Sending message : ", message);
    setMessage("");
  };
  const onPlusClicked = () => {
    console.warn("Plus Clicked");
  };
  const onPress = () => {
    if (message) {
      sendMessage();
    } else {
      onPlusClicked();
    }
  };
  return (
    <View style={styles.root}>
      <View style={styles.inputContainer}>
        <SimpleLineIcons
          name="emotsmile"
          size={24}
          color="#595959"
          style={styles.icon}
        />
        <TextInput
          value={message}
          style={styles.input}
          onChangeText={setMessage}
          //   onChangeText={(newMessage: any) => setMessage(newMessage)}
          placeholder="Signal Message..."
        />
        <Feather name="camera" size={24} color="#595959" />
        <MaterialCommunityIcons
          name="microphone-outline"
          size={24}
          color="#595959"
        />
      </View>
      <Pressable onPress={onPress} style={styles.buttonContainer}>
        {!message ? (
          <AntDesign
            name="plus"
            size={24}
            color="white"
            style={styles.buttonText}
          />
        ) : (
          <Ionicons name="send" size={20} color="white" />
        )}
      </Pressable>
    </View>
  );
};

export default MessageInput;

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    padding: 10,
  },
  inputContainer: {
    backgroundColor: "#f2f2f2",
    flex: 1,
    marginRight: 10,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "#dedede",
    alignItems: "center",
    flexDirection: "row",
    padding: 5,
  },
  input: {
    flex: 1,
    marginHorizontal: 5,
  },
  icon: {
    marginHorizontal: 5,
  },
  buttonContainer: {
    width: 40,
    height: 40,
    backgroundColor: "#3777f0",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    // fontSize: 45,
  },
});
