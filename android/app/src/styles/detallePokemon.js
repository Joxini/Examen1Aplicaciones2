/* eslint-disable prettier/prettier */
import { Dimensions, StyleSheet } from 'react-native';

const alto = Dimensions.get('window').height - 150;

// Crea paleta de colores
const principal = '#1B2E66';
const naranja = '#FF9900';
const blanco = '#FFFFFF';
const gris_1 = '#717171';
const gris_2 = '#e9e9e9';
const lila = '#dcddef';

// Crea la hoja de estilos
export const style_pokemon = StyleSheet.create({
  container: {
    flex: 1, backgroundColor: '#e7e7e5' ,
  },
  header: {
    backgroundColor: '#e7e7e5',
    height: 175,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    flex: 1,
    resizeMode: 'contain',
  },
  pokemonInfo: {
    backgroundColor: '#fac915',
    padding: 16,
    borderRadius: 8,
    border: '3px solid blue',
    marginBottom: 16,
  },
  pokemonImage: {
    width: 125,
    height: 100,
    alignSelf: 'flex-start',
    marginTop: 1,
  },
  pokemonDetails: {
    marginLeft: 16,
  },
  pokemonName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
    marginLeft: 25,
  },
  featureLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
  },
  featureValue: {
    fontSize: 16,
    marginTop: 8,
    color: '#000000',
    marginLeft: 15,
  },
  typesInfo: {
    backgroundColor: '#fac915',
    padding: 10,
    borderRadius: 8,
    borderColor: 'blue',
    marginBottom: 16,
    borderWidth: 3
  },
  typesLabel: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'center',

  },
  movesInfo: {
    backgroundColor: '#fac915',
    padding: 10,
    borderRadius: 8,
    borderColor: 'blue',
    marginBottom: 16,
    borderWidth: 3
  },
  movesLabel: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'center',
  },
  moveName: {
    fontSize: 16,
    marginTop: 10,
    marginLeft: 20,
    color: '#000000',
    height: 35
  },
});
