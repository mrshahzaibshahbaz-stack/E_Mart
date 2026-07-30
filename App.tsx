import { StatusBar, useColorScheme } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabs from './src/navigation/BottomTabs';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={isDarkMode ? '#000000' : '#ffffff'}
      />
      <NavigationContainer>
        <BottomTabs />
      </NavigationContainer>
    </>
  );
}

export default App;