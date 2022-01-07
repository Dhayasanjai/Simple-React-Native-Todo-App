import React, {useState} from 'react';
import {View, StyleSheet, FlatList, Button} from 'react-native';
import TodoInput from './Components/TodoInput';
import TodoList from './Components/TodoList';
const App = () => {
  const [todo, setTodo] = useState([]);
  const [isOpenMod, setIsOpenMod] = useState(false);
  const addTodoHandler = enteredText => {
    setTodo(prevTodo =>
      setTodo([
        {id: Math.random().toString(), value: enteredText},
        ...prevTodo,
      ]),
    );
    setIsOpenMod(false);
  };
  const deleteTodoHandler = todoId => {
    setTodo(prevTodo => {
      return prevTodo.filter(tod => tod.id !== todoId);
    });
  };
  const openModalHandler = () => {
    setIsOpenMod(true);
  };
  const cancelModalHandler = () => {
    setIsOpenMod(false);
  };
  return (
    <View style={styles.screen}>
      <Button title="Add a new Text" onPress={openModalHandler} />
      <TodoInput
        addTodo={addTodoHandler}
        visible={isOpenMod}
        onCancel={cancelModalHandler}
      />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={todo}
        renderItem={itemData => (
          <TodoList
            text={itemData.item.value}
            onDelete={deleteTodoHandler.bind(this, itemData.item.id)}
          />
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});
export default App;
