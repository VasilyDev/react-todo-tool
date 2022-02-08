import React, { useState } from "react";
import { View, StyleSheet, TextInput, Button, Alert } from "react-native";

export const AddTodo = ({ onSubmit }) => {
  const [value, setValue] = useState("");

  const pressHandler = () => {
    //делаем проверку на заполненность строки
    //если value.trim возвращает не пустую строку, то...
    if (value.trim()) {
      onSubmit(value);
      setValue("");
      console.log("+++");
    } else {
      //а если пустая строка, то будем здесь выдавать ошибку
      Alert.alert("Название задачи не может быть пустым!");
    }
  };

  return (
    <View style={styles.block}>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setValue(text)}
        value={value}
        placeholder="Введите название дела..."
        autoCorrect={false}
        autoCapitalize="sentences"
      />
      <Button style={styles.button} title="Добавить" onPress={pressHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // marginTop: 5,
  },

  input: {
    padding: 10,
    width: "70%",
    borderStyle: "solid",
    borderBottomWidth: 2,
    borderBottomColor: "#3949ab",
    backgroundColor: "white",
  },

  button: {},
});
