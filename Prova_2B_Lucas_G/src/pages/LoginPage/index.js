import { useState } from "react";
import { Image, Text, View, TouchableOpacity, TextInput } from "react-native";
import { Link } from '@react-navigation/native';
import styles from "./styles";


export default function LoginPage({navigation}){
    
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    return (
        <View style={styles.container}>
            <Image style={styles.imgLogo} source={{uri: require('../../assets/logo.png')}}>

            </Image>

            <TextInput placeholder="Email" 
                        style={styles.emailInput} 
                        keyboardType='email-adress'
                        value={email}
                        onChangeText={email => setEmail(text)}>
            </TextInput>



            <TextInput placeholder="Senha"
                        style={styles.senhaInput}
                        secureTextEntry='true'
                        value={senha}
                        onChangeText={senha => setSenha(senha)}>
            </TextInput>

            <TouchableOpacity style={styles.btnLogin}>
                <Text style={styles.txtBtn}>Login</Text>
            </TouchableOpacity>

            <View style={styles.viewLinks}>
                <Link style={styles.linkRegistro} to={{screen: 'Tela de Registro'}}>Registre-se aqui!</Link>
                <Link style={styles.linkEsqueceuSenha} to={{screen: 'Esqueceu a Senha'}}>Esqueci minha senha</Link>
            </View>
            
        </View>
    );
}