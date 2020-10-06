import React from 'react';
import { ScrollView, View } from 'react-native';

import { TextField } from '../components/Form';
import { Button } from '../components/submitButton';
import { questionFetch } from '../util/api';

class CreateQuestion extends React.Component {
  state = {
    quizQuestion: null,
    answer1: null,
    answer2: null,
    answer3: null,
    answer4: null,
    correctAnswer: null
  };

//   onCurrentLocationPress = () => {
//     navigator.geolocation.getCurrentPosition(res => {
//       if (res && res.coords) {
//         this.setState({
//           latitude: res.coords.latitude.toString(),
//           longitude: res.coords.longitude.toString(),
//         });
//       }
//     });
//   };

  onSavePress = () => {
    const { quizQuestion, answer1, answer2, answer3, answer4, correctAnswer} = this.state;
    this.setState({ loading: true }, () => {
        questionFetch(`/quiz`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ quizQuestion, answer1, answer2, answer3, answer4, correctAnswer}),
      })
        .then(() => {
          this.props.navigation.popToTop();
        })
        .catch(error => {
          console.log('create cache error', error);
        })
        .finally(() => {
          this.setState({ loading: false });
        });
    });
  };

  render() {
    return (
      <ScrollView contentContainerStyle={{ paddingVertical: 20 }}>
        <TextField
          label="Enter Quiz Question Here:"
          placeholder="What is...?"
          value={this.state.quizQuestion}
          onChangeText={quizQuestion => this.setState({ quizQuestion })}
        />
        <TextField
          label="Answer Here:"
          placeholder="A"
          value={this.state.answer1}
          onChangeText={answer1 => this.setState({ answer1 })}
        />
        <TextField
          label="Answer Here:"
          placeholder="B"
          value={this.state.answer2}
          onChangeText={answer2 => this.setState({ answer2 })}
        />
        <TextField
          label="Answer Here:"
          placeholder="C"
          value={this.state.answer3}
          onChangeText={answer3 => this.setState({ answer3 })}
        />
        <TextField
          label="Answer Here:"
          placeholder="D"
          value={this.state.answer4}
          onChangeText={answer4 => this.setState({ answer4 })}
        />       

        <TextField
          label="Correct Answer Here:"
          placeholder="Ex. A, B, C, D (Only 1)"
          value={this.state.correctAnswer}
          onChangeText={correctAnswer => this.setState({ correctAnswer })}
        />   

        <View style={{ alignItems: 'center' }}>
          {/* <Button
            text="Use Current Location"
            style={{ marginBottom: 20 }}
         //   onPress={this.onCurrentLocationPress}
          /> */}
          <Button
            text="Save"
            onPress={this.onSavePress}
            loading={this.state.loading}
          />
        </View>
      </ScrollView>
    );
  }
}

export default CreateQuestion;