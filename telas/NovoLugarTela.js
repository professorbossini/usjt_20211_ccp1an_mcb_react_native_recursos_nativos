import React, { useState } from 'react'
import { Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import Cores from '../constantes/Cores';
import { useDispatch } from 'react-redux';
import * as lugaresActions from '../store/lugares-actions';

const NovoLugarTela = (props) => {
  const dispatch = useDispatch();
  const [novoLugar, setNovoLugar] = useState('');

  const novoLugarAlterado = (texto) => {
    setNovoLugar(texto);
  }

  const adicionarLugar = () => {
    dispatch(lugaresActions.addLugar(novoLugar));
    props.navigation.goBack();
  } 
  return (
    <ScrollView>
      <View style={styles.form}>
        <Text style={styles.titulo}>Novo lugar</Text>
        <TextInput 
          style={styles.textInput}
          onChangeText={novoLugarAlterado}
          value={novoLugar}
        />
        <Button 
          title="Salvar lugar"
          color={Cores.primary}
          onPress={adicionarLugar}
        />
      </View>
    </ScrollView>
  )
}

export default NovoLugarTela

const styles = StyleSheet.create({
  form: {
    marginHorizontal: 40,
    marginTop: 10
  },
  titulo: {
    fontSize: 20,
    marginBottom: 16,
    textAlign: 'center'
  },
  textInput: {
    borderBottomColor: '#DDD',
    borderBottomWidth: 1,
    marginBottom: 12,
    paddingVertical: 8,
    textAlign: 'center',
    fontSize: 16
  }
})
