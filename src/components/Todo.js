import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { TodoScreen } from "../screens/TodoScreen";

export const Todo = ({ todo, onRemove, onOpen }) => {
  const longPressHandler = () => {
    onRemove(todo.id);
  };

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => onOpen(todo.id)}
      //в 14 строке вызываем функцию longPressHandler
      onLongPress={longPressHandler}
    >
      <View style={styles.todo}>
        <Text>{todo.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  todo: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderWidth: 1,
    borderColor: "#eee",
    borderRadius: 5,
    marginBottom: 10,
  },
});
