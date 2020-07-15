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

export default class Home extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      id_counter: 0,
      items_list: []
    }
  }

  renderItem({ item: product }){
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
    let list = this.state.items_list;
    let id = this.state.id_counter+1;
    list.push({
      id: String(id),
      name: "This item id: "+String(id),
      category: "generic",
      price: "R$",
      description: "generic",
      image_url: "",
    });
    this.setState({id_counter: id, items_list: list});
  }

  render(){
    return(
      <SafeAreaView>
        <FlatList
          data={this.state.items_list}
          extraData={this.state}
          keyExtractor={item => item.id}
          renderItem={this.renderItem}
        ></FlatList>
        <TouchableOpacity onPress={this.addNewItem}><Text>Quick Add</Text></TouchableOpacity>
      </SafeAreaView>
    );
  }
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