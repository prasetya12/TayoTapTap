import React,{Component} from 'react'
import {Text,View} from 'react-native'
import {createStackNavigator,createAppContainer} from 'react-navigation'

import Intro from './screens/Intro'
import MainScreen from './screens/MainScreen'
import Leaderboard from './screens/Leaderboard'

const AppNavigator = createStackNavigator({
  Intro:{
    screen:Intro,
    navigationOptions: {
      header:null
    }
    
  },
  MainScreen:{
    screen: MainScreen,
    navigationOptions: {
      header:null
    }
  },
  Leaderboard :{
    screen:Leaderboard,
    navigationOptions:{
      title: 'Leaderboard',
      headerTitleStyle: {
        color:'#363795',
      },
      headerTintColor: '#363795'
    }
  }
},
{
  initialRouteName: "Intro",
})

const AppContainer = createAppContainer(AppNavigator)





export default class App extends Component{
  render(){
    return(
      <AppContainer/>
    )
  }
}