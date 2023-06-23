import { StyleSheet, Text, View, Pressable } from "react-native";

export default TaskItem = (props) => {

    return (
        <View style={styles.taskItem}>
            <Pressable
                // android_ripple={{ color: '#dddddd' }} --> tylko android
                onPress={props.onDeleteItem.bind(this, props.taskId)}
                style={({ pressed }) => pressed && styles.pressedItem}>
                <Text style={styles.taskText}>#{props.taskId} {props.text}</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    taskItem: {
        marginTop: 8,
        borderRadius: 6,
        backgroundColor: '#0a95ff',
        width: '100%'
    },
    pressedItem: {
        opacity: 0.5
    },
    taskText: {
        color: 'white',
        padding: 8,
    }
});