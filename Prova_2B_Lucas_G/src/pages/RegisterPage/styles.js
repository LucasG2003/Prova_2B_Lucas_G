import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: 'gray', 
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px'
    },

    imgLogo: {
        width: 200,
        height: 200,
        marginBottom: 30
    },

    emailInput: {
        border: '1px solid black',
        width: '80%',
        height: 30,
        padding: 10,
        marginBottom: 15
    },

    senhaInput: {
        border: '1px solid black',
        width: '80%',
        height: 30,
        padding: 10,
        marginBottom: 30
    },


    btnLogin: {
        border: '1px solid black',
        width: '30%',
        height: 40,
        padding: 10,
        marginBottom: 15,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'gray'
    },

    txtBtn: {

    }
});

export default styles;