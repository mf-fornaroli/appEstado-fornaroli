import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Color from '../constants/Colors';
import typographySizes from '../constants/typographySizes';

const Empresa = (props) => {
  const { item } = props;

  return (
   <View > 

    <Text style={styles.title}>{item.razonSocial}</Text>
    <Text style={styles.caption}>{`Ubicación: ${item.ubicacion}`}</Text>
    <Text style={styles.caption}>{`CUIT: ${item.cuit}`}</Text >
    <Text style={styles.caption} >{`Teléfono: ${item.telefono}`}</Text>
    <Text style={styles.caption}>{`Email: ${item.email}`}</Text>
    <Text style={styles.caption}>{`ART Contratada: ${item.artContratada}`}</Text>
   </View>
  
  );
};

const styles = StyleSheet.create({
 title: {
  fontFamily: 'roboto-bold',
  fontSize: typographySizes.subHeading,
  marginVertical: 8,
  paddingLeft: 8,
  color: Color.accent
 },
 caption: {
  fontFamily: 'roboto-regular',
  fontSize: typographySizes.body,
  marginBottom: 4,
  paddingLeft: 8,
  color: Color.textDark
 }
});

export default Empresa;