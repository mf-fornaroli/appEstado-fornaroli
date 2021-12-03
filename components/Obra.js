import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Color from '../constants/Colors';
import typographySizes from '../constants/typographySizes';

const Obra = (props) => {
 const { item } = props;

 return (
  <View>

   <Text style={styles.title}>{item.establecimiento}</Text>
   <Text style={styles.caption}>{`Nro. Establecimiento: ${item.nroEstablecimiento}`}</Text>
   <Text style={styles.caption}>{`Ubicación: ${item.ubicacion}`}</Text >
   <Text style={styles.caption} >{`Teléfono contacto: ${item.telefonoContacto}`}</Text>
   <Text style={styles.caption}>{`Nombre contacto: ${item.nombreContacto}`}</Text>
   <Text style={styles.caption}>{item.observaciones ? `Observaciones: ${item.observaciones}` : ''}</Text>
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
})

export default Obra;