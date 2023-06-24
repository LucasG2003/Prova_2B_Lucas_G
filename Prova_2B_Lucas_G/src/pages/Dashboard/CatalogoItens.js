import { StyleSheet, Text, View } from 'react-native';
import Item from '../../components/Item';

const listaItens = [
  {
    nomeItem: 'Fenix ',
    descricao: 'Ataque Físico - 15 dano',
    urlImgItem: 'https://1.bp.blogspot.com/-xbWrDUhXZtY/WZgBoytU1kI/AAAAAAAAAJE/ROCZY2QoW00iM-tJMTDs0RXNwSxXdAMaACLcBGAs/s1600/F%25C3%25AAnix.jpg'
  },

  {
    nomeItem: 'Carnivora Yeti',
    descricao: 'Ataque Fisico- Causa 250 de dano',
    urlImgItem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD84vbRCQm02OzDXPI3Z7hiPmSSvdoliUllQ&usqp=CAU'
  },

  {
    nomeItem: 'Topico que Renasce',
    descricao: 'Cura 200 de vida',
    urlImgItem: 'https://3.bp.blogspot.com/_Xaw-9pdSlKY/S05_uQzRSjI/AAAAAAAAAlY/LCf1aiQZ7cA/s280/renascer.jpg'
]

export default function CatalogoItens() {
  return (
    <View style={styles.container}>
      <Item item={listaItens[0]}/>
      <Item item={listaItens[1]}/>
      <Item item={listaItens[2]}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },

});