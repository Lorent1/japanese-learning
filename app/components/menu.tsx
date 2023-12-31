import styles from "../styles";
import { Text, Pressable, View } from "react-native";
import { Link } from "expo-router";

const Menu = () => {
    return (
        <View style={styles.header}>
            <Link replace href={"/"} asChild>
                <Pressable style={styles.header_button}>
                    <Text>Хирагана</Text>
                </Pressable>
            </Link>
            <Link replace href={"/(tabs)/two"} asChild>
                <Pressable style={styles.header_button}>
                    <Text>Катакана</Text>
                </Pressable>
            </Link>
        </View>
    )
}
export default Menu