import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, ScrollView, FlatList } from "react-native";
import { Navbar } from "./src/components/Navbar";
import { MainScreen } from "./src/screens/MainScreen";
import { TodoScreen } from "./src/screens/TodoScreen";

export default function App() {
  const [todoId, setTodoId] = useState(null);

  const [todos, setTodos] = useState([
    { id: "1", title: "Learn React Native" },
    { id: "2", title: "Make App for Iphone" },
  ]);

  const addTodo = (title) => {
    //   const newTodo = {
    //     id: Date.now().toString(),
    //     title: title,
    //   };
    // };

    //варианты обработки стэйта - как мы находим новый стэйт
    //1variant zapisi
    // setTodos(todos.concat([newTodo]))
    //2variant zapisi
    // setTodos((prevTodos) => {
    //   return [...prevTodos, newTodo];
    // });
    //3variant zapisi
    setTodos((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        title,
      },
    ]);
  };

  const removeTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  let content = (
    <MainScreen
      addTodo={addTodo}
      todos={todos}
      removeTodo={removeTodo}
      openTodo={(id) => {
        setTodoId(id);
      }}
    />
  );

  if (todoId != null) {
    const selectedTodo = todos.find((todo) => todo.id === todoId);
    content = <TodoScreen goBack={() => setTodoId(null)} todo={selectedTodo} />;
  }

  return (
    <View>
      <Navbar title="MyToDoApp" />
      {/* <StatusBar style="auto" /> */}
      <View style={styles.container}>
        {content}
        {/* <ScrollView>
          {todos.map((todo) => {
            return <Todo todo={todo} key={todo.id} />;
          })}
        </ScrollView> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
});
