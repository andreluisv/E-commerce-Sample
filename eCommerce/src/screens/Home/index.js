import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

const products = [
  {
    id: 1,
    name: "Microondas Midea",
    category: "Eletrodomésticos",
    price: "R$ 391,20",
    description: "Nova linha de micro-ondas midea seu novo aliado do a As principais novidades da nova linha de micro-ondas são as funções eco e limpa fácil",
    image_url: "https://images-na.ssl-images-amazon.com/images/I/51bWyekTxwL._AC_SL1000_.jpg",
  },
  {
    id: 2,
    name: "Kit Tênis de Mesa",
    category: "Esportes e Aventura",
    price: "R$ 29,00",
    description: "Kit de tênis de mesa com, 2 raquetes e 3 Bola, material das Raquetes, borracha e madeira, bolinhas em plástico de alta resistência.",
    image_url: "https://images-na.ssl-images-amazon.com/images/I/61SqH9bQ3EL._AC_SL1500_.jpg",
  },
  {
    id: 3,
    name: "Mouse Sem Fio Multilaser",
    category: "Computadores e Informática",
    price: "R$ 19,90",
    description: "Mouse com um design anatômico, com um alcance de 10 metros com plug & play e com um super dpi de 1200. Informações;- tecnologia 2.4Ghz- design anatômico- alcance: 10 metros- alimentação: 2 pilhas AAA (não inclusas)imagens meramente ilustrativas.",
    image_url: "https://images-na.ssl-images-amazon.com/images/I/812XGlze09L._AC_SL1500_.jpg",
  }
];

function Home(){
  return(
    <View>
      <Text>Initiating Repository</Text>
    </View>
  );
};

const styles = StyleSheet.create({
});

export default Home;