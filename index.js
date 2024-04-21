import * as React from 'react';
import { AppRegistry } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { Provider as ReduxProvider } from 'react-redux';
import { name as appName } from './app.json';
import App from './src/App';
import createStore from './src/state/configureStore';

export default function Main() {
  const store = createStore();

  return (
    <ReduxProvider store={store}>
      <PaperProvider>
        <App />
      </PaperProvider>
    </ReduxProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
