import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: "100%",
      backgroundColor: '#fff'
    },
    header: {
      width: "100%",
      height: 60,
      borderBottomWidth: 2,
      borderColor: "black",
      display: "flex",
      alignContent: "space-around",
      flexDirection: "row"
    },
    header_button: {
      height: "100%",
      width: 100,
      justifyContent: "center",
      alignItems: "center"
    },
    cards: {
      height: 140,
      width: "100%",
      flexDirection: "column"
    },
    cards_main: {
      height: 100,
      width: "100%",
      flexDirection: "row",
      justifyContent: "space-around",
      marginBottom: 10
    },
    cards_upper: {
      width: "100%",
      height: 30,
      borderBottomWidth: 2,
      borderTopWidth: 2,
      borderColor: "black",
      flexDirection: "column"
    },
    card: {
      height: "100%",
      width: 70,
      justifyContent: "center",
      alignItems: "center"
    },
    card_inner: {
      height: 80,
      width: 60,
      backgroundColor: "green",
      justifyContent: "center",
      alignItems: "center",
      fontSize: 50,
      color: "white",
      borderRadius: 5
    },
    bottom: {
      width: "100%",
      height: 100
    },
    functions: {
      width: "100%",
      height: 50,
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },
    function_button: {
      width: 200,
      height: 30,
      backgroundColor: "green",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 10
    },
    checkboxBase: {
      width: "100%",
      height: "100%",
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'transparent',
    },
    checkboxChecked: {
      backgroundColor: 'green',
    },
});
  

export default styles