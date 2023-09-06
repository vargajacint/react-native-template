import { StyleSheet } from 'react-native';
import { FONT } from '../../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: 'yellow',
  },
  title: {
    color: 'red',
    fontSize: FONT.XL,
    fontFamily: 'Oxygen-Regular',
  },
});
