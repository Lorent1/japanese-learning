import { StatusBar } from 'expo-status-bar';
import { Pressable, Text, View } from 'react-native';
import styles from '../styles';
import Card_row from './card_row';
import Menu from './menu';
import { ScrollView } from 'react-native-gesture-handler';
import { useState } from 'react';
import Card_modal from './card_modal';

interface props {
    symbols: Array<Object>;
}

const Cards_Screen = ({symbols}: props) => {
  const [isPressed, press] = useState(false)
  const [isModalVisible, setModalVisability] = useState(false)

  return (
    <ScrollView style={styles.container}>
      <Card_modal isVisible={isModalVisible}></Card_modal>
      <Menu/>
      <View style={styles.functions}>
        <Pressable style={styles.function_button} onPress={() => press(!isPressed)}>
          <Text style={{textAlign: "center", color: "white"}}>{isPressed ? "Выберите нужные ряды" : "Проверка"}</Text>
        </Pressable>
      </View>
      {symbols.map((obj: Object, index : number) => <Card_row key={index} obj={obj} isPressed={isPressed}/>)}
      {isPressed ?
        <View style={styles.functions}>
          <Pressable style={styles.function_button} onPress={() => setModalVisability(true)}>
            <Text style={{textAlign: "center", color: "white"}}>Готово!</Text>
          </Pressable>
        </View> 
      : null}
      <View style={styles.bottom}></View>
      <StatusBar style="auto" />
    </ScrollView>
  );
}

export default Cards_Screen