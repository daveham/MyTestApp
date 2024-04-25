import React from 'react';
import { Button } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { isSnackbarOpenSelector } from '../state/ui/selectors';
import { openSnackbar, closeSnackbar } from '../state/ui/actions';
import { requestUser } from '../state/user/actions';
import { userIdSelector } from '../state/user/selectors';
import type { HomeScreenProps } from './types.tsx';

export function Home({ navigation }: HomeScreenProps): React.JSX.Element {
  const dispatch = useDispatch();

  const userId = useSelector(userIdSelector);
  const isSnackbarOpen = useSelector(isSnackbarOpenSelector);

  const handleSnackbarButtonPress = () => {
    if (isSnackbarOpen) {
      dispatch(closeSnackbar());
    } else {
      dispatch(requestUser('John Smith'));
      dispatch(openSnackbar('User name has been requested from Home screen.'));
    }
  };

  const handleDetailsButtonPress = () => {
    navigation.navigate('Details');
  };

  return (
    <View style={styles.root}>
      <View style={styles.buttonContainer}>
        <Button mode="contained" onPress={handleSnackbarButtonPress}>
          {isSnackbarOpen ? 'Hide ' : 'Show '}Snackbar {userId}
        </Button>
      </View>
      <View style={styles.buttonContainer}>
        <Button mode="contained" onPress={handleDetailsButtonPress}>
          See Details
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, alignItems: 'center' },
  buttonContainer: {
    marginTop: 20,
  },
});
