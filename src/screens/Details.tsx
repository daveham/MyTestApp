import React from 'react';
import { Button } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { isSnackbarOpenSelector } from '../state/ui/selectors';
import { openSnackbar, closeSnackbar } from '../state/ui/actions';
import { requestUser } from '../state/user/actions';
import { userIdSelector } from '../state/user/selectors';

export function Details(): React.JSX.Element {
  const dispatch = useDispatch();

  const userId = useSelector(userIdSelector);
  const isSnackbarOpen = useSelector(isSnackbarOpenSelector);

  const handleButtonPress = () => {
    if (isSnackbarOpen) {
      dispatch(closeSnackbar());
    } else {
      dispatch(requestUser('Ben Franklin'));
      dispatch(
        openSnackbar('User name has been requested from Details screen.'),
      );
    }
  };

  return (
    <View style={styles.root}>
      <View style={styles.buttonContainer}>
        <Button mode="outlined" onPress={handleButtonPress}>
          {isSnackbarOpen ? 'Hide ' : 'Show '}Snackbar {userId}
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
