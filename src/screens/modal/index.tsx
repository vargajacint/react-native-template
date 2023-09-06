/* Types */
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../../navigators/types';

/* Presentation Things */
import { Text } from 'react-native';

/* Styles */
import { styles } from './styles';

type Props = NativeStackScreenProps<RootStackParamList, 'Modal'>;

function ModalScreen(props: Props) {
  return <Text style={styles.title}>{props.route.params.title}</Text>;
}

export default ModalScreen;
