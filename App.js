import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar';
import RootNavigator from './src/navigation';

import { Amplify } from 'aws-amplify'
import { withAuthenticator } from 'aws-amplify-react-native'
import awsconfig from './src/aws-exports'
Amplify.configure({
  ...awsconfig,
  Analytics: {
    disabled: true
  }
})

function App() {
  return (
    <NavigationContainer>
      <RootNavigator />
      <StatusBar style="light" />
    </NavigationContainer>
  );
}

export default withAuthenticator(App)
