import React from 'react';
import { View, Button, StatusBar, ScrollView, StyleSheet, Text } from 'react-native';
import spaceQuestions from '../data/space';
import westernQuestions from '../data/westerns';
import computerQuestions from '../data/computers';

import { RowItem } from '../components/rowItem';
import { List } from '../components/List';
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#36B1F0",
        flex: 1,
        paddingHorizontal: 20,
    },
    text: {
        color: "#fff",
        fontSize: 25,
        textAlign: "center",
        letterSpacing: -0.02,
        fontWeight: "600",
    },
    safearea: {
        flex: 1,
        marginTop: 100,
        justifyContent: "space-between",

    },
    title: {
        color: "#fff",
        fontSize: 40,
        textAlign: "center",
        letterSpacing: -0.02,
        fontWeight: "600",

    },
});

export default class statsScreen extends React.Component {
    render() {
        return (<View style={styles.container}>
            <StatusBar barStyle="light-content" />
            <Text style={styles.title}>
                Welcome to the Statistics Page
             </Text>

            <Text style={styles.text}> Last Winning Streak: </Text>
            <Text style={styles.text}> Longest Winning Streak: </Text>
            <Text style={styles.text}> Favorite Quiz: </Text>
            <Text style={styles.text}> Hardest Quiz: </Text>
            <Text style={styles.text}> Quiz History (Last 3 Finished:) </Text>







            <SafeAreaView style={styles.safearea}></SafeAreaView>
        </View>
        )






    }
}

