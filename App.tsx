import { StatusBar, useColorScheme } from 'react-native';
import HomeScreen from './src/screen/HomeScreen';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={isDarkMode ? '#000000' : '#ffffff'}
      />
     <HomeScreen/>
    </>
  );
}

export default App;
