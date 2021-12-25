import { StyleSheet, View, Alert } from "react-native"
import Button from "../../components/Button"
import MessageLog from "../../components/MessageLog"

const styles = StyleSheet.create({
    container: {
        height: "100%",
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 10,
    },
    button: {
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 5,
        backgroundColor: "rgb(63, 167, 252)",
        marginVertical: 5,
    },
    buttonText: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: "bold",
        letterSpacing: 0.25,
        color: "white",
    },
})

const Home = () => {
    return (
        <View style={styles.container}>
            <Button text="Start" onPress={() => Alert.alert("Pressed")} />
            <MessageLog />
        </View>
    )
}

export default Home
