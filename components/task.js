import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity,  } from 'react-native';


const Task = (props) => {

    return (
        <View style={styles.todo}>
            <View style={styles.todoLeft}>
                <View style={styles.sqaure}></View>
                <Text style={styles.todoName}>{props.todoName}</Text>
            </View>
            <View style={styles.circular}></View>
        </View>
    ) 

}

const styles = StyleSheet.create({

    todo: {
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    todoLeft: {
        flexDirection: 'row',
        alignItems: 'center', 
        flexWrap: 'wrap',
        flex: 1,
    },   
    todoName: {
        maxWidth: '80%',
    },   
    circular: {},   
    sqaure: {
        height: 24,
        width: 24,
        backgroundColor: '#d6d6d6',
        borderRadius: 5,
        marginRight: 15,
    }, 

});

export default Task;