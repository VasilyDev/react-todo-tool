import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Button } from "react-native";

export const TodoScreen = ({ goBack }) => {
  return (
    <View>
      <Text>Todo Screen</Text>
      <Button title="Назад" onPress={goBack} />
    </View>
  );
};

const styles = StyleSheet.create({});
