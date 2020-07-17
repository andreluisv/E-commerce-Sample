import React, { useContext } from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  Button
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {Context} from '../../contexts/data';

const NewProduct = () => {
  const [state, dispatch] = useContext(Context);
  const navigation = useNavigation();

  let product_name = "",
      product_category = "",
      product_price = "",
      product_description = "";

  addNewItem = () => {

    if (product_name=="" || product_price=="" || product_description=="" || product_category==""){
      return "EMPTY";
    }
    
    dispatch({type: 'NEW_PRODUCT', 
      product: {
        id: String(state.id_counter+1),
        name: product_name,
        category: product_category,
        price: "R$ "+product_price,
        description: product_description,
        image_url: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRmBTU9UngAQttEWIptLiqXcZbkGG4V45iy4HRgjzYFowtmP55oAQ&usqp=CAc",
      }
    });

    return "SUCCESS";
  }

  return(
    <SafeAreaView>
        <TextInput
          style={styles.textInput}
          placeholder="Product name"
          onChangeText={(text) => product_name = text}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Category"
          onChangeText={(text) => product_category = text}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Price"
          keyboardType="number-pad"
          onChangeText={(text) => product_price = text}
        />
        <TextInput
          style={styles.textInput}
          placeholder="description"
          onChangeText={(text) => product_description = text}
        />
        <Button
          title="Confirm"
          onPress={() =>{
              let result = addNewItem()
              if (result == "SUCCESS") navigation.pop()
              else if (result == "EMPTY") alert("Please fill in all items!");
            }
          }
        />
    </SafeAreaView>
  );
  
};

const styles = StyleSheet.create({
  textInput:{
    height: 40,
    borderColor: 'gray',
    borderWidth: 1
  }
});

export default NewProduct;