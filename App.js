import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Task from "./ components/Task";

export default function App() {
  return (
    <View style={styles.container}>
      {/* Today's task */}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's tasks</Text>
        <View style={styles.items}>
          {/* All the tasks will go here */}
          <Task text = {"Task 1"}/>
          <Task text = {"Task 2"}/>
          <Task text = {"Task 3"}/>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c5e0f0',
  
  },
  tasksWrapper:{
    paddingTop: 50,
    paddingHorizontal: 20,

  },
  sectionTitle:{
    fontSize: 25,
    fontWeight: 'bold',
  },
  items:{
    marginTop: 20,
  },
});
