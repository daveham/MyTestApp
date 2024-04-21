import * as React from 'react';
import { AppRegistry } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { Provider as ReduxProvider } from 'react-redux';
import { name as appName } from './app.json';
import App from './src/App';
import createStore, { runSagas } from './src/state/configureStore';
import sagas from './src/sagas';

const store = createStore();
runSagas(sagas);

export default function Main() {
  return (
    <ReduxProvider store={store}>
      <PaperProvider>
        <App />
      </PaperProvider>
    </ReduxProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
