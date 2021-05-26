import React from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'
import { HeaderButtons, Item} from 'react-navigation-header-buttons';
import BotaoCabecalho from '../componentes/BotaoCabecalho';

const ListaDeLugaresTela = (props) => {
  return (
    <View>
      <Text>ListaDeLugaresTela</Text>
    </View>
  )
}

ListaDeLugaresTela.navigationOptions = dadosNav => {
  return {
    headerTitle: 'Lista de lugares',
    headerRight: 
      <HeaderButtons HeaderButtonComponent={BotaoCabecalho}>
        <Item 
          title="Adicionar"
          iconName={Platform.OS === "android" ? 'md-add' : 'ios-add'}
          onPress={() => dadosNav.navigation.navigate('NovoLugar')}
        />
      </HeaderButtons>
  }
}



const styles = StyleSheet.create({})

export default ListaDeLugaresTela;