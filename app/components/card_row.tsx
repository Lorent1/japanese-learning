import Card from './card';
import { View, Text } from 'react-native';
import styles from '../styles';
import MyCheckbox from './my_checkbox';
import { useState } from 'react';


interface props {
    obj: Object;
    isPressed: boolean;
}

const Card_row = ({obj, isPressed}: props) => {
    const [checked, setChecked] = useState(false)
    return (
    <View style={styles.cards}>
        <View style = {styles.cards_upper}>
            {isPressed ? 
            <MyCheckbox data={obj} checked={checked} onChange={() => setChecked(!checked)}/> 
            : <Text style={{fontSize: 18, textAlign: "center"}}>Ряд {Object.entries(obj).map( ([key, value]) => `${key} `)}</Text>}
        </View>
        <View style={styles.cards_main}>
            {Object.entries(obj).map( ([key, value]) => <Card key={key} letter={key} symbol={value}/>)}
        </View>
    </View>)
}

export default Card_row