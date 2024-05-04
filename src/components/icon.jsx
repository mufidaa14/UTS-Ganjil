import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

const icon = ({label}) => {
  return (
    <TouchableOpacity style={styles.container}>
        <View style={styles.ic}>
            <Text style={styles.text}>icon</Text>
        </View>
        <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
};

export default icon;

const styles = StyleSheet.create({
    container: {
        margin: 5,
        padding: 5,
        width: 80,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        borderWidth: 1,
        width: 72,
        height: 72,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 7,
    },
    ic: {
        color: "blue",
        textAlign: "center",
    }
});