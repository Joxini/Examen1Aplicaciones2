/* eslint-disable prettier/prettier */
import { Dimensions, StyleSheet } from 'react-native';

const alto = Dimensions.get('window').height - 150;

// crea paleta de colores
const principal = '#1B2E66';
const naranja = '#FF9900';
const blanco = '#FFFFFF';
const gris_1 = '#717171';
const gris_2 = '#e9e9e9';
const lila = '#dcddef';


// crea la hoja de estilos
export const style_01 = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column',
  },
  divHeader: {
    backgroundColor: lila,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center', 
    alignItems: 'center', 
    padding: 20,
    height: 150,

  },
  divMain: {
    backgroundColor: gris_2,
    height: alto,
    padding: 8,
  },
  divFooter: {
    paddingTop: 5,
    backgroundColor: principal,
    alignItems: 'center',
    height: 50,
  },
  textFooter: {
    color: naranja,
    fontSize: 11,
    fontWeight: '300',
  },
  h1: {
    color: 'black',
    marginTop: 5,
    marginBottom: 5,
    fontSize: 24,
    textAlign: 'center',
    alignItems: 'center', 

  },
  h2: {
    color: principal,
    marginTop: 5,
    marginBottom: 5,
    fontSize: 20,
    fontWeight: 'bold',
  },
  h3: {
    color: principal,
    marginTop: 5,
    marginBottom: 5,
    fontSize: 16,
    fontWeight: 'bold',
  },
  p1: {
    color: principal,
    textAlign: 'justify',
    lineHeight: 14,
    fontSize: 12,
  },
  tarjeta: {
    backgroundColor: lila,
    borderRadius: 10,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    width: 400,
    height: 100,
  },
  name: {
    top: 50,
    fontWeight: 'bold',
    fontSize:20,
  },

  photo: {
    width: 110,
    height: 100,
    alignSelf: 'flex-start',
    marginTop: 1,
    left: 20
  },

  btn_Label:{
    color: 'black'
  }


});
