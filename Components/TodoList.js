import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
const TodoList = props => {
  return (
    <TouchableOpacity onPress={props.onDelete}>
      <View style={styles.listItem}>
        <Text>{props.text}</Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  listItem: {
    marginVertical: 10,
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    backgroundColor: '#ccc',
  },
});

export default TodoList;
