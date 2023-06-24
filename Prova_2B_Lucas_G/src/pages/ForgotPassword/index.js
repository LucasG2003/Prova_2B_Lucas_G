import { Image, Text, View, TouchableOpacity,  TextInput } from "react-native";
import styles from "./styles";
import { Link } from '@react-navigation/native';


export default function ForgotPassword({navigation}){
    
    return (
        <View style={styles.container}>
            <Image style={styles.imgLogo} source={{uri: require('../../assets/logo.png')}}> </Image>

            <TextInput placeholder="Email" style={styles.emailInput}>
            </TextInput>

            <TouchableOpacity style={styles.btnLogin}>
                <Text style={styles.txtBtn}>Redefinir Senha</Text>
            </TouchableOpacity>

            <Link style={styles.linkRegistro} to={{screen: 'Tela de Login'}}>Voltar à pagina de login</Link>
        </View>
    );
}