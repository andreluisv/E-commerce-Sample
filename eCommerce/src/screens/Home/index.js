import React, { useContext } from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  Button
} from 'react-native';

import {Context} from '../../contexts/data';

const Home = () => {
  [state, dispatch] = useContext(Context);
  
  const renderItem = ({ item: product }) => {
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

  addNewItem = () => {
    dispatch({type: 'NEW_PRODUCT', 
      product: {
        id: String(state.id_counter+1),
        name: "Ping pong "+String(state.id_counter+1),
        category: "Sports",
        price: "R$ 3,00",
        description: "Includes 2 rackets, 3 balls and 1 net.",
        image_url: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRmBTU9UngAQttEWIptLiqXcZbkGG4V45iy4HRgjzYFowtmP55oAQ&usqp=CAc",
      }
    });
  }

  return(
    <View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        {/*<Button
          title="Add a new product"
          onPress={() =>
            this.props.navigation.navigate('NewProduct')
          }
        />*/}
        <TouchableOpacity onPress={addNewItem}><Text>Quick add</Text></TouchableOpacity>
      </View>
      <SafeAreaView>
        <FlatList
          data={state.items_list}
          extraData={state}
          keyExtractor={item => item.id}
          renderItem={renderItem}
        ></FlatList>
      </SafeAreaView>
    </View>
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