import { Text, View } from "react-native";
import styles from "../styles";

interface props {
    letter: string;
    symbol: string;
}

const Card = ({letter, symbol}: props) => {
    return(
        <View style={styles.card}>
            <Text>{letter}</Text>
            <View style={styles.card_inner}>
                <Text style={{color: "white", fontSize: 55}}>{symbol}</Text>
            </View>
        </View>
    )
}
export default Card