import { Image, Text, View, TouchableOpacity, StyleSheet, TextInput } from "react-native";
import styles from "./styles";
import { Link } from '@react-navigation/native';


export default function RegisterPage({navigation}){
    
    return (
        <View style={styles.container}>
            <Image style={styles.imgLogo} source={{uri: require('../../assets/logo.png')}}>

            </Image>

            <TextInput placeholder="Email" style={styles.emailInput}>

            </TextInput>

            <TextInput placeholder="Senha" style={styles.senhaInput}>

            </TextInput>

            <TextInput placeholder="Repetir a senha" style={styles.repeatSenha}>
                
            </TextInput>

            <TouchableOpacity style={styles.btnLogin}>
                <Text style={styles.txtBtn}>Faca Login</Text>
            </TouchableOpacity>
        </View>
    );
}