import Card from './card';
import { View } from 'react-native';
import styles from '../styles';

interface props {
    obj: Object
}

const Card_row = ({obj}: props) => {
    return (
    <View style={styles.cards}>
        {Object.entries(obj).map( ([key, value]) => <Card key={key} letter={key} symbol={value}/>)}
    </View>)
}

export default Card_row