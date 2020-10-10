import React from 'react';
import { View, StatusBar, StyleSheet, Text, SafeAreaView, ActivityIndicator } from 'react-native';

//import { List } from '../components/List';
import { questionFetch } from "../util/api";
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

const goodResponse =
    '{"result": [{ "correctCount": 0, "attemptCount": 0, "_id": "5f7e9c0286f3773be94ccc16", "quizQuestion": "What is localhosts IP address?", "answer1": "192.168.1.1", "answer2": "127.0.0.1", "answer3": "209.85.231.104", "answer4": "66.220.149.25", "correctAnswer": "B", "__v": 0 }, { "correctCount": 0, "attemptCount": 0, "_id": "5f7e9c0286f3773be94ccc18", "quizQuestion": "What is the fifth planet from the sun ? ", "answer1": "Mars", "answer2": "Jupiter", "answer3": "Saturn", "answer4": "Venus", "correctAnswer": "B", "__v": 0 }, { "correctCount": 0, "attemptCount": 0, "_id": "5f7e9c0286f3773be94ccc17", "quizQuestion": "What kind of fruit was used to name a computer in 1984 ? ", "answer1": "Blackberry", "answer2": "Blueberry", "answer3": "Pear", "answer4": "Apple", "correctAnswer": "D", "__v": 0 }, { "correctCount": 0, "attemptCount": 0, "_id": "5f7e9c0286f3773be94ccc19", "quizQuestion": "How many planets are in the Solar System ? ", "answer1": "6", "answer2": "7", "answer3": "8", "answer4": "9", "correctAnswer": "C", "__v": 0 }, { "correctCount": 0, "attemptCount": 0, "_id": "5f7e9c0286f3773be94ccc1a", "quizQuestion": "In the Roy Rogers - Dale Evans Museum, you will find Roy and Dales stuffed horses.Roys horse was named Trigger, which was Dales horse?", "answer1": "Buttermilk", "answer2": "Daisy", "answer3": "Scout", "answer4": "Tulip", "correctAnswer": "A", "__v": 0 }, { "correctCount": 10, "attemptCount": 21, "_id": "5f7e9cc0d26a57000833e8e8", "quizQuestion": "1 + 1", "answer1": "2", "answer2": "3", "answer3": "4", "answer4": "5", "correctAnswer": "A", "__v": 0 }]}';

export default class statsScreen extends React.Component {
    state = {
        loading: true,
        list: null,
        avgPercentage: 0,
        minPercentage: 100,
        maxPercentage: 0,
        minQuestion: "",
        maxQuestion: ""
    };

    storeList = (response) => {
        // console.log(goodResponse);
        //var temp = JSON.parse(response);
        //console.log(temp.result);
        this.state.list = response.result;
        console.log(this.state.list.length);
    };


    componentDidMount() {
        questionFetch('/quiz/list')
            .then(response => {
                //this.setState({
                //  list: JSON.parse(response).result
                this.storeList(response);
            })
            .catch(error => {
                console.log('list error', error);
            });
        var accumAverage = 0;
        var numAttemptedQuestions = 0;
        //var jsonList = JSON.parse(this.state.list);
        //console.log(this.state.list[0].quizQuestion); check the scope for all references to list something is very very wrongggggggg

        for (var i = 0; i < this.state.list.length; i++) {
            console.log('Iterator', i);
            if (this.state.list[i].attemptCount != 0) {
                numAttemptedQuestions++;
                var tempPercentage = this.state.list[i].correctCount * 100 / this.state.list[i].attemptCount;
                accumAverage += tempPercentage;

                if (tempPercentage > this.state.maxPercentage) {
                    this.state.maxPercentage = tempPercentage;
                    this.state.maxQuestion = this.state.list[i].quizQuestion;
                }
                if (tempPercentage < this.state.minPercentage) {
                    this.state.minPercentage = tempPercentage;
                    this.state.minQuestion = this.state.list[i].quizQuestion;
                }
            }
        }

        /* this.state.list.forEach(tempQuestion => {
             console.log(tempQuestion.quizQuestion);
             if (tempQuestion.attemptCount != 0) {
                 numAttemptedQuestions++;
                 var tempPercentage = tempQuestion.correctCount * 100 / tempQuestion.attemptCount;
                 accumAverage += tempPercentage;
 
                 if (tempPercentage > this.state.maxPercentage) {
                     this.state.maxPercentage = tempPercentage;
                     this.state.maxQuestion = tempQuestion.quizQuestion;
                 }
                 if (tempPercentage < this.state.minPercentage) {
                     this.state.minPercentage = tempPercentage;
                     this.state.minQuestion = ttempQuestion.quizQuestion;
                 }
             }
         });*/

        if (numAttemptedQuestions != 0) {
            this.state.avgPercentage = accumAverage / numAttemptedQuestions;
        }
        this.setState({ loading: false });
    }
    render() {
        if (this.state.loading) {
            return <ActivityIndicator size="large" />;
        }
        return (<View style={styles.container}>
            <StatusBar barStyle="light-content" />
            <SafeAreaView style={styles.safearea}>
                <Text style={styles.text}> Average Winning Percentage: </Text>
                <Text style={styles.value}>


                </Text>
                <Text style={styles.text}> Hardest Question:{this.state.minQuestion}</Text>
                <Text style={styles.value}>
                    With {this.state.minPercentage}% Correct
                </Text>
                <Text style={styles.text}> Easiest Question:{this.state.maxQuestion}</Text>
                <Text style={styles.value}>
                    With {this.state.maxPercentage}% Correct
                </Text>
            </SafeAreaView>

        </View>
        )
    }
}

