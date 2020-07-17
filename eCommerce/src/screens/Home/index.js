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
import { useNavigation } from '@react-navigation/native';
import {Context} from '../../contexts/data';


const Home = () => {
  [state, dispatch] = useContext(Context);
  const navigation = useNavigation();
  
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
            <TouchableOpacity onPress={() => {editMe(product.id)}}><Text>edit</Text></TouchableOpacity>
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

  editMe = (id) => {
    let list = state.items_list;
    list.forEach((item) => {if (item.id == id) item.name = "edited"});
    dispatch({type: 'EDIT_PRODUCT', newList: list});
  }
  
  return(
    <View>
        <Button
          title="Add a new product"
          onPress={() =>
            navigation.navigate('NewProduct')
          }
        />
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