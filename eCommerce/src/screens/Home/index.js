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
          style={{width: '25%', height: 150}}
          source={{ uri: product.image_url}}
        />
        <View style={styles.data}>
          <View style={styles.dataHeader}>
            <Text style={styles.name}>{product.name}</Text>
            <TouchableOpacity><Text>edit</Text></TouchableOpacity>
          </View>
          <View style={styles.dataBody}>
            <Text style={styles.description}>{product.description}</Text>
          </View>
          <View style={styles.dataFooter}>
            <Text style={styles.category}>{product.category}</Text>
            <Text style={styles.price}>{product.price}</Text>
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
    height: 150,
    width: '100%',
  },
  data:{
    backgroundColor: 'lightgray',
    justifyContent: 'space-between',
    width: '75%',
  },
  dataHeader:{
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingRight: 5,
    paddingLeft: 2,
  },
  dataBody:{
    marginVertical: 5,
    paddingHorizontal: 2,
  },
  dataFooter:{
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingRight: 5,
    paddingLeft: 2,
  },
  name:{
    fontWeight: 'bold',
    fontSize: 20,
  },
  description:{

  },
  category:{
    fontSize: 15,
  },
  price:{
    fontWeight: 'bold',
  },
});

export default Home;