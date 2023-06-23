import { useState } from "react";
import { Button, StyleSheet, TextInput, View, Modal, Image } from "react-native";


export default TaskInput = (props) => {

    const [enteredTaskText, setEnteredtTaskText] = useState('');

    const goalInputHandler = (enteredText) => {
        setEnteredtTaskText(enteredText);
    }

    const addTaskHandler = () => {
        props.onAddTask(enteredTaskText);
        setEnteredtTaskText('');
    }

    return (
        <Modal visible={props.visable} animationType="slide">
            <View style={styles.inputContainer}>
                <Image style={styles.image} source={require('../assets/images/clipboard.png')} />
                <TextInput
                    id="taskInput"
                    style={styles.textInput}
                    placeholder='Your task'
                    onChangeText={goalInputHandler}
                    value={enteredTaskText}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title='Add task' onPress={addTaskHandler} />
                    </View>
                    <View style={styles.button}>
                        <Button title="Cancel" onPress={props.onCancel}/>
                    </View>
                </View>
            </View>
        </Modal>

    )

};

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16
    },
    image: {
        width: 100,
        height: 100,
        margin: 20
    },
    textInput: {
        padding: 8,
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '100%'
    },
    buttonContainer: {
        marginTop: 16,
        flexDirection: 'row',
    },
    button: {
        width: 100,
        marginHorizontal: 8

    }
})