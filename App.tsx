import React from 'react';
import {Home} from './src/screens/Home';
import {createStackNavigator} from '@react-navigation/stack';
import {RootStackParamList} from './src/types/navigation';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import {DataList} from './src/screens/DataList';
import {Client} from './src/screens/Client';

function App(): JSX.Element {
  const Stack = createStackNavigator<RootStackParamList>();

  return (
    <>
      <NavigationContainer>
        <StatusBar barStyle={'light-content'} />
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerStyle: {backgroundColor: '#53B568'},
            headerTintColor: '#ffffff',
          }}>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              title: 'Home',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
          <Stack.Screen
            name="DataList"
            component={DataList}
            options={{title: 'Lista de dados'}}
          />
          <Stack.Screen
            name="Client"
            component={Client}
            options={{title: 'Dados do Cliente'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;
