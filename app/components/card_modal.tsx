import { Modal, View } from "react-native"
import styles from "../styles"

interface props{
    isVisible: any;
}

const Card_modal = ({isVisible}: props) => {
    return(
        <Modal animationType="fade" transparent={true} visible={isVisible}>
            <View style={{width:"100%", height:"100%", opacity: 0.3, backgroundColor: "black"}}>

            </View>
        </Modal>
    )
}

export default Card_modal