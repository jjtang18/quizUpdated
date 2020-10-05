import React from 'react';
import { View, Button, StatusBar, ScrollView } from 'react-native';

import spaceQuestions from '../data/space';
import westernQuestions from '../data/westerns';
import computerQuestions from '../data/computers';

import { RowItem } from '../components/rowItem';

export default ({ navigation }) => (
  <ScrollView>
    <StatusBar barStyle="dark-content" />
    <RowItem
      name="Space"
      color="#36b1f0"
      onPress={() => navigation.navigate('Quiz', { title: "Space", questions: spaceQuestions, color: "#36b1f0" })}
    />
    <RowItem
      name="Westerns"
      color="#799496"
      onPress={() => navigation.navigate('Quiz', { title: "Westerns", questions: westernQuestions, color: "#799496" })}
    />
    <RowItem
      name="Computers"
      color="#49475B"
      onPress={() => navigation.navigate('Quiz', { title: "Computers", questions: computerQuestions, color: "#49475B" })}
    />
    <RowItem
      name="Add Questions to Quiz"
      color="#9c4003"
      onPress={() => navigation.navigate('QuizCreate',)}
    />
    <RowItem
      name="Go to User Generated Quiz"
      color="#631313"
      onPress={() => navigation.navigate('userGeneratedQuiz',)}
    />
    <RowItem
      name="Go To Statistics Page"
      color="# 631313"
      onPress={() => navigation.navigate('statsScreen',)}

    />
  </ScrollView>
);