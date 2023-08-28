import { StatusBar } from 'expo-status-bar';
import { Pressable, Text, View } from 'react-native';
import styles from '../styles';
import Card_row from '../components/card_row';
import katakana_symbols from '../data';
import Menu from '../components/menu';
import { ScrollView } from 'react-native-gesture-handler';

export default function App() {
    return (
        <ScrollView style={styles.container}>
          <Menu/>
          <View>
            <Pressable>
              <Text>Тест</Text>
            </Pressable>
          </View>
          {katakana_symbols.map((obj: Object, index : number) => <Card_row key={index} obj = {obj}/>)}
          <View style={styles.bottom}></View>
          <StatusBar style="auto" />
        </ScrollView>
      );
}