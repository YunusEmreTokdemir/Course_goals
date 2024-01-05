import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';
import { useState } from 'react';

function Goalinput(props) {
  const [enteredGoal, setEnteredGoal] = useState('');

  function goalInputHandler(enteredText) {
    setEnteredGoal(enteredText);
  } 

  function addGoalHandler() {
    props.onAddGoal(enteredGoal);
    setEnteredGoal('');
  }

  function cancelGoalHandler() {
    props.onCancel();
    setEnteredGoal('');
  }
  
  return (
    <Modal visible={props.visible} animationType='slide'>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder='Your course goal'
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button title="Add goal" onPress={addGoalHandler} color="#5e0acc" />
            </View>
            <View style={styles.button}>
              <Button title="Cancel" onPress={cancelGoalHandler} color="#f31282"/>
            </View>
        </View>
      </View>
    </Modal>
  );
}

export default Goalinput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  textInput: {
    width: 1,
    borderColor: '#e4d0ff',
    backgroundColor:'#e4d0ff',
    color: '#120438',
    borderRadius: 6,
    width: '100',
    padding: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },    
  button: {
    width: '40%',
    marginHorizontal: 8,
  },
});
