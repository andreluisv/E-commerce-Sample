import React, { useContext } from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';

import {Context} from '../../contexts/data';

const NewProduct = () => {

  const [state, dispatch] = useContext(Context);

  return(
    <SafeAreaView>
        <Text>{"Last created: "+state.id_counter}</Text>
    </SafeAreaView>
  );
  
};

const styles = StyleSheet.create({
});

export default NewProduct;