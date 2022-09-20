import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar';
import RootNavigator from './src/navigation';

import { Amplify } from 'aws-amplify'
import { withAuthenticator } from 'aws-amplify-react-native'
import awsconfig from './src/aws-exports'
import AuthContextProvider from './src/context/AuthContext';
import BasketContextProvider from './src/context/BasketContext';

Amplify.configure({
  ...awsconfig,
  Analytics: {
    disabled: true
  }
})

function App() {
  return (
    <NavigationContainer>
      <AuthContextProvider >
        <BasketContextProvider>
          <RootNavigator />
        </BasketContextProvider>
      </AuthContextProvider>
      <StatusBar style="light" />
    </NavigationContainer>
  );
}

export default withAuthenticator(App)
