import { createStackNavigator } from "react-navigation-stack"
import { HomeScreen, SecondScreen, ThirdScreen, FourthScreen } from "./screens/index"
import { createAppContainer } from "react-navigation"

const AppNavigator = createStackNavigator(
    {
        HomeScreen,
        SecondScreen,
        ThirdScreen,
        FourthScreen
    },
    {
        initialRouteName: 'HomeScreen',
        headerMode: 'none'
    }
);

export default createAppContainer(AppNavigator);