import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import QuizIndex from './screens/QuizIndex';
import Quiz from './screens/Quiz';
import CreateQuestion from './screens/CreateQuestion';
import userQuiz from './screens/userQuiz';
import Question from './screens/Question';
import statsScreen from './screens/statsScreen';

const MainStack = createStackNavigator({
  QuizIndex: {
    screen: QuizIndex,
    navigationOptions: {
      headerTitle: 'Quizzes',
    },
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: ({ navigation }) => ({
      headerTitle: navigation.getParam("title"),
      headerTintColor: "#fff",
      headerStyle: {
        backgroundColor: navigation.getParam("color"),
        borderBottomColor: navigation.getParam("color")
      }
    }),
  },
  QuizCreate: {
    screen: CreateQuestion,
    navigationOptions: {
      headerTitle: "Create Quiz Question"
    }
  },
  userGeneratedQuiz: {
    screen: userQuiz,
    navigationOptions: {
      headerTitle: "Quiz Questions"
    }
  },
  Questions: {
    screen: Question,
    navigationOptions: {
      headerTitle: "Question"
    }
  },
  statsScreen: {
    screen: statsScreen,
    navigationOptions: {
      headerTitle: "Statistics"
    }
  }

});

export default createAppContainer(MainStack);