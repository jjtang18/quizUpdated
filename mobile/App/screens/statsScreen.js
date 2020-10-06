import React from 'react';
import { View, Button, StatusBar, ScrollView, StyleSheet, Text, SafeAreaView } from 'react-native';
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
        fontSize: 20,
        textAlign: "center",
        letterSpacing: -0.01,
        fontWeight: "600",
    },
    safearea: {
        flex: 1,
        marginTop: 40,
        justifyContent: "space-between",

    },
    title: {
        color: "#fff",
        fontSize: 20,
        textAlign: "center",
        letterSpacing: -0.01,
        fontWeight: "600",

    },
    value: {
        color: "#ffa500",
        fontSize: 20,
        textAlign: "center",
        letterSpacing: -0.01,
        fontWeight: "600",
    }
});

export default class statsScreen extends React.Component {
    getLastWinningStreak() {
        return 3;
        //get last streak here

    };
    getLongestStreak() {
        return 3;
        //fing longest streak of all
    };
    getHardestQuiz() {
        //find quiz with lowest avg score 
        return "life";
    };
    getFavoriteQuiz() {
        //get most played quiz
        return "death"
    };
    getQuizHistory() {
        //print name and timestamp (use list???)
        const results = [
            { time: 1, value: "apple" },
            { time: 2, value: "orange" },
            { time: 3, value: "banana" }
        ]
        return results;

    };

    render() {
        return (<View style={styles.container}>
            <StatusBar barStyle="light-content" />
            <SafeAreaView style={styles.safearea}>
                <Text style={styles.text}> Last Winning Streak: </Text>
                <Text style={styles.value}>
                    {this.getLastWinningStreak()}

                </Text>
                <Text style={styles.text}> Longest Winning Streak: </Text>
                <Text style={styles.value}>
                    {this.getLongestStreak()}

                </Text>

                <Text style={styles.text}> Favorite Quiz: </Text>
                <Text style={styles.value}>
                    {this.getFavoriteQuiz()}

                </Text>

                <Text style={styles.text}> Hardest Quiz: </Text>
                <Text style={styles.value}>
                    {this.getHardestQuiz()}

                </Text>
                <Text style={styles.text}> Quiz History (Last 3 Finished) </Text>
                <Text style={styles.value}>
                    {}



                </Text>
            </SafeAreaView>

        </View>
        )






    }
}

