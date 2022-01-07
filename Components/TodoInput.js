import React, {useState} from 'react';
import {View, StyleSheet, Button, TextInput, Modal} from 'react-native';
const TodoInput = props => {
  const [enteredText, setEnteredText] = useState('');

  const textInputHandler = value => {
    setEnteredText(value);
  };
  const addTodoHandler = () => {
    props.addTodo(enteredText);
    setEnteredText('');
  };
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter Todo"
          onChangeText={textInputHandler}
          value={enteredText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button color="red" title="Cancel" onPress={props.onCancel} />
          </View>
          <View style={styles.button}>
            <Button title="Add" onPress={addTodoHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
};
export default TodoInput;
const styles = StyleSheet.create({
  inputContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  input: {
    width: '80%',
    padding: 10,
    marginBottom: 20,

    borderColor: 'black',
    borderWidth: 1,
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '60%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  button: {
    width: '40%',
  },
});
