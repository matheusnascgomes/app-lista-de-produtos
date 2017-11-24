import React, { Component } from 'react';
import {
  ScrollView
} from 'react-native';
import axios from 'axios';
import Itens from './Itens.js';

export default class ListaItens extends Component {
  constructor(props){
    super(props);

    this.state = { listaItens: [] };
  }
  componentWillMount(){
    // Requisição http
    axios.get('http:faus.com.br/recursos/c/dmairr/api/itens.html')
      .then(response => { this.setState({ listaItens: response.data }); })
      .catch(() => { console.log('Erro'); });
  }
  render() {
    return (
      <ScrollView style={{backgroundColor: '#33FFFF'}}>
        { this.state.listaItens.map(item => ( <Itens key={item.titulo} item={item}/> ))}
      </ScrollView>
    );
  }
}
