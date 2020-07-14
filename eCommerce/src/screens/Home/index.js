import React from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  FlatList,
  TouchableOpacity
} from 'react-native';

const products = [
  {
    id: '1',
    name: "Microondas Midea",
    category: "Eletrodomésticos",
    price: "R$ 391,20",
    description: "Nova linha de micro-ondas midea seu novo aliado do a As principais novidades da nova linha de micro-ondas são as funções eco e limpa fácil",
    image_url: "https://images-na.ssl-images-amazon.com/images/I/51bWyekTxwL._AC_SL1000_.jpg",
  },
  {
    id: '2',
    name: "Kit Tênis de Mesa",
    category: "Esportes e Aventura",
    price: "R$ 29,00",
    description: "Kit de tênis de mesa com, 2 raquetes e 3 Bola, material das Raquetes, borracha e madeira, bolinhas em plástico de alta resistência.",
    image_url: "https://images-na.ssl-images-amazon.com/images/I/61SqH9bQ3EL._AC_SL1500_.jpg",
  },
  {
    id: '3',
    name: "Mouse Sem Fio Multilaser",
    category: "Computadores e Informática",
    price: "R$ 19,90",
    description: "Mouse com um design anatômico, com um alcance de 10 metros com plug & play e com um super dpi de 1200.",
    image_url: "https://images-na.ssl-images-amazon.com/images/I/812XGlze09L._AC_SL1500_.jpg",
  }
];

function Home(){

  function renderItem({ item: product }){
    return (
      <View style={styles.product}>
        <Image 
          styles={styles.picture_url}
          source={{ uri: product.image_url}}
        />
        <View style={styles.data}>
          <View style={styles.dataHeader}>
            <Text>{product.name}</Text>
            <TouchableOpacity><Text>edit</Text></TouchableOpacity>
          </View>
          <View style={styles.dataBody}>
            <Text>{product.description}</Text>
          </View>
          <View style={styles.dataFooter}>
            <Text>{product.category}</Text>
            <Text>{product.price}</Text>
          </View>
        </View>
      </View>
    );
  }

  return(
    <SafeAreaView>
      <FlatList
        data={products}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      ></FlatList>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  product: {
    marginVertical: 7,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'darkgray',
  },
  data:{
    backgroundColor: 'lightgray'
  },
  dataHeader:{
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  dataBody:{
    marginVertical: 5
  },
  dataFooter:{
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  picture_url:{
    width: 150,
    height: 150,
  },
});

export default Home;