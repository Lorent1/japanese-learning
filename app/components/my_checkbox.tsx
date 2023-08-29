import { Pressable, Text } from "react-native";
import styles from "../styles";

interface props{
    onChange(): void;
    checked: boolean;
    data: Object;
}

function MyCheckbox({ onChange, checked, data }: props) {
    return (
        <Pressable style={[styles.checkboxBase, checked && styles.checkboxChecked]}
        onPress={onChange}>
            <Text style={{fontSize: 18, textAlign: "center"}}>Ряд {Object.entries(data).map( ([key, value]) => `${key} `)}</Text>
        </Pressable>
    );
}
export default MyCheckbox