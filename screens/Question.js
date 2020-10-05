import React from 'react';
import {View,StyleSheet,SafeAreaView,Text,Alert} from 'react-native';

import { Button } from '../components/submitButton';
import { TextField } from '../components/Form';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
    },
    section: {
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderTopColor: '#E4E4E4',
        borderBottomWidth: 1,
        borderBottomColor: '#E4E4E4',
        marginVertical: 20,
        padding: 14,
        alignItems: "stretch",
    },
    titleText: {
        fontWeight: '600',
        fontSize: 18,
        color: '#4A4A4A',
        textAlign: 'center',
        marginBottom: 10,
    },
    text: {
        fontSize: 16,
        color: '#4A4A4A',
        marginBottom: 20,
    },
});

class Question extends React.Component {

    state = {
        updatedItem: null,
        userAnswer: ""
    };

    isCorrect = (userAnswer, correctAnswer) => {
        if (userAnswer === correctAnswer) {
            return Alert.alert("Correct","You have answered Correctly!")
        }
        else
        return Alert.alert("Incorrect", "You have answered Incorrectly!")
    };


    render() {
        const item = this.state.updatedItem
            ? this.state.updatedItem
            : this.props.navigation.getParam('item', {});

        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.section}>
                    <Text style={styles.titleText}>{item.quizQuestion}</Text>

                    <Button style={styles.text}
                    disabled={true}
                        text={item.answer1}>
                    </Button>

                    <Button style={styles.text}
                        text={item.answer2}>
                    </Button>

                    <Button style={styles.text}
                        text={item.answer3}>
                    </Button>

                    <Button style={styles.text}
                        text={item.answer4}>
                    </Button>

                    <TextField
                        label="Enter your Answer:"
                        placeholder="Ex. A, B, C, D (Only 1)"
                        // value={item.correctAnswer}
                        // value={this.state.userAnswer}
                        onChangeText={userAnswer => this.setState({ userAnswer })}
                    />

                    <Button
                        text="Enter"
                        onPress={() => this.isCorrect((this.state.userAnswer), (item.correctAnswer))}
                    />



                </View>

            </SafeAreaView>

        );
    }
}

export default Question;