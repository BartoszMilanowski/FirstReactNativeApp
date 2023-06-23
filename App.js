import { useState } from 'react';
import { Button, FlatList, StyleSheet, View } from 'react-native';
import TaskInput from './components/TaskInput';
import TaskItem from './components/TaskItem';

export default function App() {

  const [listOfTasks, setListOfTasks] = useState([]);
  const [taskId, setTaskId] = useState(1);
  const [modalVisable, setModalVisable] = useState(false);

  const startAddTaskHandler = () => {
    setModalVisable(true);
  }

  const endAddTaskHandler = () => {
    setModalVisable(false);
  }

  const addTaskHandler = (enteredTaskText) => {

    const newTask = { key: taskId, text: enteredTaskText };
    setListOfTasks(currentListOfTasks => [...listOfTasks, newTask]);
    setTaskId(taskId + 1);
    endAddTaskHandler();
  }

  const deleteTaskHandler = (taskId) => {
    setListOfTasks(currentListOfTasks => {
      return currentListOfTasks.filter((task) => task.key !== taskId);
    })
  }

  return (
    <View style={styles.appContainer}>
      <Button title='Add New Task' onPress={startAddTaskHandler} />
      <TaskInput
        visable={modalVisable}
        onAddTask={addTaskHandler}
        onCancel={endAddTaskHandler}
      />
      <View style={styles.tasksContainer}>
        <FlatList
          data={listOfTasks}
          renderItem={(itemData) => {
            return <TaskItem
              taskId={itemData.item.key}
              text={itemData.item.text}
              onDeleteItem={deleteTaskHandler} />
          }}
          alwaysBounceVertical={false} />

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16
  },

  tasksContainer: {
    flex: 5,
    width: '100%',
    marginTop: 8,
    borderTopWidth: 1,
    borderTopColor: 'gray'
  },
});