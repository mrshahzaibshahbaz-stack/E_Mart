import { StatusBar, useColorScheme } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BookCard from './src/components/BookCard';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={isDarkMode ? '#000000' : '#ffffff'}
      />
      <SafeAreaView style={{ flex: 1 }}>
        <BookCard title={'First'} price={30.0} authName={'AnyOne'} />
        <BookCard title={'Second'} price={40.0} authName={'AnyOne'} />
        <BookCard title={'Third'} price={50.0} authName={'AnyOne'} />
      </SafeAreaView>
    </>
  );
}

export default App;
