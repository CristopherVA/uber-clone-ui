import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar';
import RootNavigator from './src/navigation';

// import { Amplify } from 'aws-amplify'
// import awsconfig from './src/aws-exports'
// Amplify.configure(awsconfig)

export default function App() {
  return (
    <NavigationContainer>
      <RootNavigator />
      <StatusBar style="light" />
    </NavigationContainer>
  );
}
