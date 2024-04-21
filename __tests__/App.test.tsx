/**
 * @format
 */

import 'react-native';
import React from 'react';
import { PaperProvider } from 'react-native-paper';
import App from '../src/App';

// Note: import explicitly to use the types shipped with jest.
import { test } from '@jest/globals';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

test('renders correctly', () => {
  renderer.create(
    <PaperProvider>
      <App />
    </PaperProvider>,
  );
});
