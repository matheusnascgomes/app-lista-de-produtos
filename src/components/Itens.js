import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native';

export default class Itens extends Component {
  render() {
    const { blocoItems, foto, textos, titulo, valor, detalhes } = styles;
    return (
      <View style={blocoItems}>
        <View style={foto}>
          <Image style={{ height: 100, width: 100 }} source={{ uri: this.props.item.foto  }}/>
        </View>
        <View style={textos}>
          <Text style={titulo}>{this.props.item.titulo}</Text>
          <Text style={valor}>R$: {this.props.item.valor}</Text>
          <Text style={detalhes}>Local: {this.props.item.local_anuncio}</Text>
          <Text style={detalhes}>Data: {this.props.item.data_publicacao}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  blocoItems: {
    backgroundColor: '#FFF',
    borderWidth: 0.5,
    borderColor: '#999',
    borderRadius: 6,
    marginLeft: 8,
    marginRight: 8,
    marginTop: 4,
    marginBottom: 4,
    padding: 10,
    flexDirection: 'row'
  },
  foto: {
    width: 102,
    height: 102
  },
  textos: {
    flex: 1,
    marginLeft: 10
  },
  titulo: {
    fontSize: 16,
    color: 'blue'
  },
  valor:{
    fontSize: 16,
    fontWeight: 'bold'
  },
  detalhes: {
    fontSize: 16
  }

});
