import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Navbar from './component/navbar';

export default function App() {
  return (
    <NavigationContainer>
      <Navbar /> 
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// export default function Main() {
//   return (
//     <PaperProvider>
//       <App />
//     </PaperProvider>
//   );
// }
// AppRegistry.registerComponent('main', () => Main);

