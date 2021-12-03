import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';
//importo hook de redux
import { useSelector, useDispatch } from 'react-redux';
//importo action para agregar una empresa
import { addObra } from '../store/actions/obra.action';

const ObraScreen = ({ navigation, route }) => {

  const obras = useSelector(state => state.obras);
  
  const dispatch = useDispatch();

 const [establecimiento, setEstablecimiento] = useState('');
 const [nroEstablecimiento, setNroEstablecimiento] = useState('');
 const [ubicacion, setUbicacion] = useState('');
 const [nombreContacto, setNombreContacto] = useState('');
 const [telefonoContacto, setTelefonoContacto] = useState('');
 const [observaciones, setObservaciones] = useState('');

 const handlerChangeEstablecimiento = (value) => {
  setEstablecimiento(value);
 }
 const handlerChangeNroEstablecimiento = (value) => {
  setNroEstablecimiento(value);
 }
 const handlerChangeUbicacion = (value) => {
  setUbicacion(value);
 }
 const handlerChangeNombreContacto = (value) => {
  setNombreContacto(value);
 }
 const handlerChangeTelefonoContacto = (value) => {
  setTelefonoContacto(value);
 }
 const handlerChangeObservaciones = (value) => {
  setObservaciones(value);
 }
 
const handlerConfirm = () => {
  const newId = obras.listaObras.length + 1;
  
  const newObra = {
   id: newId,
   idEmpresa: 1,
   establecimiento: establecimiento,
   nroEstablecimiento: nroEstablecimiento,
   ubicacion: ubicacion,
   nombreContacto: nombreContacto,
   telefonoContacto: telefonoContacto,
   observaciones: observaciones
  };

 //dispatch del action para agregar obra
   dispatch(addObra(newObra));

 /*
 insertar mensaje de grabación exitosa
 */

  //luego de insertar vuelvo a la lista de obras
  navigation.navigate('ObraList');
 };

 return (<View>
<Text>{'Establecimiento'}</Text>
  <TextInput value={establecimiento}
   placeholder="Ingrese establecimiento..."
   onChangeText={handlerChangeEstablecimiento}/>
  
  <Text>{'Nro. Establecimiento'}</Text>
  <TextInput value={nroEstablecimiento}
   placeholder='Ingrese nro. de establecimiento...'
   onChangeText={handlerChangeNroEstablecimiento}/>
  
  <Text>{'Ubicación'}</Text>
  <TextInput value={ubicacion}
   placeholder='Ingrese ubicación...'
   onChangeText={handlerChangeUbicacion}/>
  
  <Text>{'Nombre contacto'}</Text>
  <TextInput value={nombreContacto}
   placeholder='Ingrese nombre de contacto...'
   onChangeText={handlerChangeNombreContacto} />
  
  <Text>{'Teléfono Contacto'}</Text>
  <TextInput value={telefonoContacto}
   placeholder='Ingrese teléfono de contacto...'
   onChangeText={handlerChangeTelefonoContacto}/>
  
  <Text>{'Observaciones'}</Text>
  <TextInput value={observaciones}
   placeholder='Ingrese observaciones...'
   onChangeText={handlerChangeObservaciones} />
  
  <Button title='Confirmar' onPress={handlerConfirm} />

 </View>)
}

const styles = StyleSheet.create({
 screen: {
  
 }
});

export default ObraScreen;