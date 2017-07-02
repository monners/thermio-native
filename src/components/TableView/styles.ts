import { StyleSheet } from 'react-native';
import * as variables from '../../common/theme';
export default StyleSheet.create({
  cellRow: {
    backgroundColor: variables.COLOR_WHITE,
    paddingRight: 20,
  },
  cellRowInner: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 44,
    marginLeft: 15,
    borderBottomWidth: 1,
    borderColor: variables.COLOR_BORDER,
  },
  cellLabel: {
    flexGrow: 1,
    fontSize: 17,
  },
});
