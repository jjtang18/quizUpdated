import React from "react";
import { ActivityIndicator } from "react-native";

import { List, ListItem } from "../components/List";
import { questionFetch } from "../util/api";

class userQuiz extends React.Component {
  state = {
    loading: true,
    list: []
  };
  //ref didmount and questionFetch for getting values from mongo
  componentDidMount() {
    questionFetch('/quiz/list')
      .then(response => {
        this.setState({
          loading: false,
          list: response.result,

        });
      })
      .catch(error => {
        console.log('list error', error);
      });
  }

  render() {
    if (this.state.loading) {
      return <ActivityIndicator size="large" />;
    }

    return (
      <List
        data={this.state.list}
        renderItem={({ item, index }) => (
          <ListItem
            title={item.quizQuestion}
            isOdd={index % 2}
            onPress={() => this.props.navigation.navigate('Questions', { item })}
          />
        )}
      />
    );
  }
}

export default userQuiz;